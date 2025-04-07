/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "597osudbLy2xYyapmyA3sxNhK77NsNzT2RVYHCptN7u82VCvwbJag6KuRwyBnsCenVSYt3wkjJADp2NehcYuBtYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5edbvNr9Aov7yMuXn2UwFdP9guXw8DeXKBuS2yzYFLAN9kiJnHizaafaH6psGB83QvFwevsv9Sr2ZCLTy7b7pfDe",
  "key1": "3AvMHDpfPDu3tuSFgqM4vWrwEK7QkNk3TeK26FiqxTLjeRhqUdBEtp9RHr1jxSxVr7Doxzp3kQSHd87GHPLEqemn",
  "key2": "EosEmx5KtyWrooWiygS5mK3sukK9vEx2M8yiwvmCoa5CMciBWWg9ohpUy3fvoWyikR8iWg3V8haySUMe1tNdLDC",
  "key3": "66pnhcXFqgGxotLGCTZEVLGhjFgBgPjTemBqrUxn6nhYeboL5ESwttYJve9Tvpypo11g8FPpqdnESicGc9U1HtzY",
  "key4": "4WwFokfHsoRB8A6BozjZ6aYGixNBsrk81iHUPanU41czQRje9G5fa32HBpmEnLQvjHm2CymLczfxt4KkZZANZxwM",
  "key5": "25PDr9T1XbjvigF5qbMpJFGv6E9DnXzFPRE77poQErdnmPqpNxLRoDT1neCVrV9N8fq7FqsdUGBwNFfEjCAwvw7U",
  "key6": "2GzRC89i6bKrbrChXis9FRw5WnaL9iLKuDDmTV3QATKYRJU58yqkhyTMdZX43dF7BKZD3vuCwPPBwiAtqP19k4MV",
  "key7": "MHg465xWqrFYArKbbp9kC5Ugph8Aw874dZVEmoiNq3myoanEm2CCyidXDcccBeWvUyByxxpCktw4qSvsUGsGiJA",
  "key8": "5cu6RVD2fiTtvta9zSxVZD1WW7NRfv97e4buHtV9LVxNV219Dc2BsvgCpStQzqPde2ojSEcWXVDRtFtTmjrQRwdN",
  "key9": "5cTBsmMmzhx6breNcbjJbV1tkyEH4tjJY41gD2WorooVWphJzzz1xvEhabtd8C2ZgLhZFvZbwXkj4ryeGK5WYYtr",
  "key10": "5tARUzZTeLFgVmcUL3ZquVT67nXB5ZkyVFfitRJN1RiWS5mHM3h221bSiBv3Wg7XM2MUdeiBxrFvUoyPCzSVMjpf",
  "key11": "pa3JTDRAoHBJtKmrhXz2gDsmUZB9Ba8EJ9Hb5DK44V7FX6z4rDmLU4d3a5X7u5XSLjcP4g6ucWZhChNuHZDwBuh",
  "key12": "4zCJooxoHUcV6qDBNRTjB4iuwn3smr8Tf1mphyj9ek9gyGJbuUZYRqWUXTHLWXpGCTt6VCvFFCqkVQUZiV2VEhon",
  "key13": "5Hzv5YHLZuGbJrmmeVWuViVtNRiaq1vuXyrN2THR2oMMFxQBnfikUxQehLpMxaZUGqGuRYT1H6ZYdVDoAxHsaRHk",
  "key14": "5rmEYMf5bnha5CvTdNo98k9fLeyhBUrnqKrNkik6nVeHDttfz7WJXDuCFaFGxuAWYysgqjTGBUC6yZTgR2U6Sysq",
  "key15": "2k2Xp1LSGtkrHjrPY64GyEAGdWYfdUYikYxTyXryCLGQNHYiMvAjpRSaCNx4Aa7fePQ7NH5CZ6YccH7afwo6zwpj",
  "key16": "2rrzLLMXq8mvgeo6avG1waKHwRkFCzx9B8tP72NaEXetZCujiBbXC6gBmmfLYhRxCBFNnybyPcsx7dMDAPiwhQz6",
  "key17": "3S34QueNmywG2safJZtyyB5eyXV3kkXgSmjB5RsHKvCBX6mrPmQfho1qeGSPTwr8zucnUas4hnmPt77nzW46Y7Jf",
  "key18": "27ZC262ok5jp3iU1wzmU7AQL8LKpKRDCjzgExLoc3sA8DgoHtxgaVXpp6qKEaUr5svyi2DtGefFwFQcmd15bTBzQ",
  "key19": "5Vf8mP2wSJoFdBSjQowML4FnzfybCr4zK4bX6C6QZTRDMBcqUkeRuMxthCbc7ybucgaeKPNqK26Fi4D4QdSAscND",
  "key20": "3TEJxFqqVGi2mz2Li3z2H838HCUdELWPEjrPwCdAuhpcyMgkGUts4rHMBEnQ2GbSAysG5zi2HgZZYtdUKQrnCTdy",
  "key21": "63rqNsaes2Wi5xvpoisB7vg7wuQ213szVoJ6yd5GjBZ1w6D4hVoPShRwc9qH1ZTWpZpRii5TzVVTSnqXK4B6c8XE",
  "key22": "3HyY1JN79EfRZReQ5fZuxFqYt1rh8tzk6rdXuCkxCutiDrZPdDdyn6C11CjJFXVS4gYvAj81a2KJb44UF4JNnDUY",
  "key23": "AZXYnHiAmyQ9NucGziuam7skn2FJS8tteg8CFmU8SQB5THTTKZWGWEbAccSpcchcpaHaWMTBQMKYebsbAFwXgtk",
  "key24": "1sfPg5doJRGMYYuBKJz8DQAB6Wcehz38ku5z4qy1rxyUT8W6saU7d8GcHtgiRZRtuRxuWayguHoMSu9tuVCVdgH",
  "key25": "DdbiRtBtGs5FS5SX3bH7cJXXYpBEgAAD1A3UZPAQwX9Z1aLLXjUXhBKNfCSMHaLARHYCdgiQUsG6S7BzPqvvFwK",
  "key26": "2UTwtdHKMu114BMABwr7qKqxEV98RP8LgGfw6JeYLzsKqP8iYqZ1HXjHU8LTsos4RK1Wrw4Abu1fwknSjQDZJoni",
  "key27": "2aGFpZrfudAeBtmx5xSQk8G7dh4u62t7dAiEmybhg1yLf3TGUAbkix3fhAdH9BKpzzjJWDf4ChRnPx1U7mZRssxk",
  "key28": "3EJo4r5QtYKiVvCtWYYgFv5PsGmgYS3zSmpd3njpLgFTaNw9rSWrceWcELchH6YgDq8gQsHR2HQ99TDURTzXYQzm",
  "key29": "4rVpAe4qBipASYDQnXNVb1eairJ7N49WApgKo8JSgk13WgRvishf5ogom3p6uX4QSegjMK13SMx4L52gejB5D6iG",
  "key30": "31imARjqfcGwRbYRYDxzrWDuu8rqm4p4Te4YSaVqJdHFpF4sXzQnkonmAHbEQ4KZsVP9La198P1B7M5F8PbzTnJ",
  "key31": "54uf2rguHitKrykFSdAh3BypibNGXe3xB2TxeqBbDW3ixTjC4GsEiYWjH3tqjg3HWYavpP9pGsrfSQxdQS831xfF",
  "key32": "3UucTm24TAFQsVE78G9ucoH8a4DL9YorFRrBKETFqNRQTuXAgz6jauDW3vE8FZa5XtjVMKrDWjhBMzt6m13nEKz9"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
