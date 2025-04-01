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
    "2ti1ZfkkpAjtnysvzw1s3WiWPaf8T1ogPE4hypHsV8UboPRGrv43JbJN6ijXDXu57Sui49rTJQbGo3d9onHpUjER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aUB3xFrTU6twKpezMn5qdUFkupBdSv2QKh7ui88xjSauT3ngTnhGnAjWGwVmS4i6BGMJj7s7c8RzT7ioYwTJbwP",
  "key1": "37oQs9XkupG5tm6kBAbVtYfX4QQps7Z7adQ5bsSCT6Yk6fLpwvuyeS18krQ3sZCDoD8PPNeEM2VXFmWozGGrbUbP",
  "key2": "S2NT5nt4Nbrf24HaGUsCdgY4ib7TACoSvrE4eBk8UZgpoaV8fTQu5NZqr2SB7wznD9bHa6ycU26kNHP8SmVufPG",
  "key3": "8HPFYqJ3hPmxubGjNvrWzc9zip89qZp5ypwiWKhA96fRWfGHzYmZpQkapnXTnXdyFjinLdeDY78dwDdxNdEFdfp",
  "key4": "4iSLkw5KRxTE2DfQUYNJcb9bKRDccJNFYrp8YvQ2gqYnT6Wpg3vDY2SCacAo9F2oXKdwQbQYFe9tKDfoiop7gLNV",
  "key5": "4pEHFJS6DBGJzuFqcCDG5ggd79nYrSeiAf7rxB97dLE1Vi92trLWj78nP6W2nfBN7fE41QUe1dA5jGVXcfu1uYh8",
  "key6": "2GdpA4thLKZTRLG1eUZn4GW4itx9Tx3E69NNs2ttPgFd4HkAkhbTcM2oXkc8Wjb8rtxq8mcftyPbXc3fHKtSB4Qt",
  "key7": "5MV6waYNLpFD5jdjsX6nwNQXWgWnMXk5GAHhuS2RfAAFPGJojR9UQ9hK1nsYnXAhFzjMV6PoWnnkPqNd4ZvYrPdp",
  "key8": "66njQECq2SFijiGnWWZA2oTv3rrHVafbyPAZVTZLWdfRhAQsYgFg6RsvuFdXWEJGz9phEe6zB8xeyqr32RRJF8vL",
  "key9": "5G1pbqrnY1ffGyfcaUt3HptDZbaoctyYXcbpQcR2zKWmy46baQEmLNrCjab6X6yUdVqjwGyZKJryK4ArbwnmEh22",
  "key10": "3mU1PqSB96V9h4S3Cqq31t3629FcCXqowPP4w89GjF5zbvKwnpGgepP8pmK4s1FR4x5551592SzzTniv5h8kiSyK",
  "key11": "46GZ86WXhapxLMRzJMLKCmcVaz2Lempe1B1YWTXH1qkidAgi6BFzjes52xjpF7Pw9P54Q9bJpwWXJTQbTZCHRL2E",
  "key12": "2LzucuUWQRfc8bUnyPuD1MhmVH26dKxKzFx8vZxemnVjLF72dRcBQuRwp5zrY5bTvc6KwPnzVTpz7sRbxo1x86Cx",
  "key13": "y3HhvtNYNgoNVga8z6dbgEUZyCPm1drWQujajvHaNEvwfpnbLj4smUqiZbfS1qD9Kr5Sk9Ys9Cmm1ygPRhkVh4t",
  "key14": "i79PSwUiz6QE7iieoZkc3r13ctNQs94NSV4zPYhTa85dqEqdVZvxxHeAp11iJkUGjDyANFG9QdSKeS4NbYe37yf",
  "key15": "Wzun5rFPpes1QuhsbZSeeRSvsv4uLSibyUu6a68v6DRkDoSmN8FAVPEcNJiB1THxMQdN7qG9LrouGXoYHGQc9io",
  "key16": "2G1ffiSFhyXtkiHTewUuhJJKFjqe3NZyqeZjaHJALiZpCCdyMCX5FkXf9XLc7HPQ6f5nhhi7tiYa7u7DXGPdYQkE",
  "key17": "4mgeuznTKaVi3Y6WRg5ecwrEUdMiEfwYWzKmGLbE6JyxDdrRPFtcoyX5J42U14RE7ocZ1KoB5xXWap9Bef42ABtr",
  "key18": "35ZxdzDtyaLMVJceVCidyKZX1asENX4KiivHVzSLRNYroATF6xynNf48mA6jBJ21ohTEac35kbLVx4o1wd6cjZED",
  "key19": "2NmZLcb6dhUtLhCqchjJ5JwqXK78CiAgr6cs2tT86fAgivWt98rUUxC4WvVjVzJaEiAYCE8aa8dft5mcPs8KA17Q",
  "key20": "6456jfpPT3syNAG4QaKkn5mM1SQZpopXYUChQkHkye3y8sCk5s7e6WdrE81ZpF3Q3HKrrCiXj6Sp6W9u7FbTGvTv",
  "key21": "5RRBL9h6XDiRqTCqPrgL9D7kPpodLMZu5TrG96W6Nozzh6VEUr6RkfGApDuwcMPuryKZBnezif9i6yBmQKbN8qBn",
  "key22": "bhByZ4vyrSCryPWpLMmEiFXUCCy1vnqHKAFQGmXsFHix7b1woUHGSRbJwxMMeoPfEHJ8xARgomhVdbbpp2MzYzc",
  "key23": "5PvyYvohgbR2WhiaDS9VGg97W3jCA1WFMXY3RjqDy1qNQ2oB9RF6ugjAYndQjsYYYx8kb4RMppSPZ41mHzMA2VUz",
  "key24": "5QC78RnWF9UrodYctoYcNzuVRfSPotK3svV3sEKuhqhSUsQE7PbCBzDePGXC2zHZRmteNYxoYVd8QUx7zvG9sdV4",
  "key25": "ccBM98NxpvfPpTf6AL2HRT8HweYcbsfZLincp1KDsRZmTRsBdGfPgpRvm69nP5SVtKfQ94J9advUUwt1Kq8owS6",
  "key26": "E5JiDKaNwM7DKB7pZwfRRATuG1SzXCpgJ7BDqyMNokN2YJEdeCCJxxhKFsSziWqLN4kcCMUHX329HVfC7uWFg5m",
  "key27": "5s9Hc4h4pJH4HFv2bVNQCA3zfrzyPRJxcCZskMxpqbfz3jzkjedcrMJr8ajqHxQVfgV4aX93Czf6TditDFA3Lmv9"
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
