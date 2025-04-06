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
    "4Bp4RDCqUFKRpao5X27fFnYUS6PRRV2XNVXm85VgrwgnGuPfMxJY2JBGJrKdDuEWh7hknXn9b44LCxSomjrmZUMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "McYx56QsjYNHoP62KijNnjXrr5sFPwLFmHDy9o7BvEh1R9i3huHrNi9uUfcSqiMd1RiySyaCGy3xBYmNYYn4NiV",
  "key1": "29wqhvruPBmNvdTWFsjU3fkhCbt59z29rCEfhWqrRDGoCr93b7ztA2qiiJCPLGTrma2PKwuCgbbcGHMGiQXB5fMp",
  "key2": "5aFizVKDaXi3C1HKPvL3yVRuKD4i3VAQC46vkuD6Kg5rUJ7sCxiUjQybm8XCq5eNRgFro6Jb2RHMcspwDa1w9qti",
  "key3": "4NCZBsKYXyo8NEpYK8gSrPHjaR6BnyhTaEzKm4GqQBQtYj5vSbXqn7esEMHwZwE3Wyp3YAAi7kB16RhGPvT1q5m5",
  "key4": "3ARsMJo6h9yThzrAPKbGuNQkBbaPU9kchfVcKS2LY4J4qYKin5sAh2tLXn8vG38WD3yDG1CqdNH45yhwtfwFKEmG",
  "key5": "HiQRycg9L9evpMH3JmisACVXVveC9yJHt72G37V6wPDVwsYMoTzPpMPY8U348Cz22qgh6Qp8yCjVSebkw5pGYZ8",
  "key6": "wzfn7JGeENxzeYf9ParRP3riktyXK3nqmnrJpLLFSZzhphKj1EcT6jGo6ZCpKKqDMbNYcnP32dPh7T9KfaGEHZS",
  "key7": "5mD6JvLx59jBir3Jt2QyJn42KgQ2CdBeNV3P6HxTMzu4adBEL844z5U7tgA7PBu5mdCNcmbLoGYAPBBGJNeub9R",
  "key8": "2oKDJZ1pTDPaEvoMWqRdNzSjucwF2RqDamJJSFvPhzuKzqejgPbix9gzoX62c5wevCQcvB8GKu6d9LoebSLyJfvS",
  "key9": "61M9AifxG6wF2MzwNt6nwJnESqtKgVvqY6b5yTUTfX8bqaoQpUb3FPBaR8tRXZs7b3Sc7zK2AU4i2D1czqaGA5Lj",
  "key10": "52JT9SofsXD7BdCdUjQqTiATSQ43yGrBQLESNPDcknif9aT3bC97D74Z31NmZZRzv283W5u19uiWw15VRfnivMbo",
  "key11": "3SuN2id6SBtgpbQjUMxBCQdyNykbFN4zZyVgqsBizQdjPkWRJ97hCoKiRTiSoRVUoBmobq5SNPyvt4CvubHmZv3E",
  "key12": "39kxWPpadwB2xJbwsXyEdtFuFBdeGwYWoc4ECz46HG9xCAN4CKaiptKM8LR5JyLuzHDXqZFkbmTTtNyHDZDCS6pS",
  "key13": "2gCdVVp4A5DcoYYytFzvmgnqEeYSyF8jRKbVVxVN2r7fRKKNFM9y78YwHRvVE5eAfSkfXix8DhCZtvbU7aUdv1pm",
  "key14": "5r5ucNHAnQHHAiSTefuTKVxToSks19MoRyWdtWNzZVWMXy9pgaF3y8tsMMbdLAH4AnFduTVDFSAnPneRLHwbvMXU",
  "key15": "5DKjauRs1kjvPToe4LmxpeojjhwsSxwn6gc8GsBJkJNm7k5QBFR4HD4y8zmsN56RgjdbZzPin79b5qcsVfnPz4HK",
  "key16": "36wtqY4rKs9Dkqbrg3Y64ikJ34BzBmj61rPp8z81i8pgEkifhw11oGp9PG5q8mqDEYEp9gmnehHN6gBmnQhV3wVp",
  "key17": "uDxk5qHk1BFQDeELitgbNVEWbvYnSwh14C1h3Tw1NCChsBL3MyEgmNwdT3xw2gmMfzQbGcaey7MgdhsDd82WxCC",
  "key18": "3YNikiuhKBZGodr8tXBAK9cbQANR1dmTgroFH8rivWKU7GaXanxBbe4Fpg6y6zXYaBcv5bRUAfyKfs9SiwazTcUN",
  "key19": "3mZGePVBDPPgRRomPMkzAFZTkgvRkjMbHAyvwANAtzFtN6RcPFDaHKSqNYV5ofLmSTwwrUwMUANXBzdv78PbpFUi",
  "key20": "5qbb31zYqWUGigMnLzvjACSYimP1N1UKZBMimNm3ugfc8phJxzvq53r22m39LHfVCuqBgjBmQELqF5oaW9nSMUsq",
  "key21": "48u3XXH6B5wcKhNs13hEVaiTZB17SRHHRuhqTavdhHSCNRoUE83b9jjkbXpQaT1iZMi7zoT2wcx3fJdcKq8tWbLj",
  "key22": "58jbQgXmMtWm4KwPfuEpo6YNveBu7K7bsAUCwew3oG6qK5txbBW9EB8DdDZD4P6aXjqMX2WNcy8jfskjuDUJy8dn",
  "key23": "5PFMhR9EpAA6KGAsFQswfCn6XfPnVTYjxNSqpwRqssCWpJ3Af6WskPMGmhCJHjBKdaN3Tz2LHx45fi6pRyKpuCqF",
  "key24": "35SEFCE71pFuC96SqGp7iDLKxvroK3K5MY4uyUQRbfU6hAi76q3P7kYZTjpT1FVmVNMxsT9GhxS698bxQnBv4TwH",
  "key25": "5ERRBC2zyp97JEsTDZa9pXvpPMUJiaTeyapxhbHg61P8V7MNU4Qbe2xRnstydR4AioikHtpJ2JFECftzLE4ahMX3",
  "key26": "3327nhWzxm5hC1M9EgPnoJrnptuY9u9S1NMidzVxnSW6R3c7bhpRQo7kqLnfzkufEYZDJUdhWuAXJTHe1HNgeqKf",
  "key27": "3YfLyZfKMxNxtuPnudnJ4uWqaXMr3fT2hZWcUx7a3ZLUKBLyKUbW7GSujyCGT54fZ8yqMZC6wVTQYsx4Kq8VwsBx",
  "key28": "Hdg2EhLAg5T4JeJk3pu8Dr6zrkUnJj1SSVuSKeyYmUfTN21wGQi7itbXtRgh58zmNqh1oJ5Lz84ka44km5EPaZw",
  "key29": "UVwaaFiJFJ9BkQA6GJsAsTPB2hLK2hAW2XCLvWnbLJS1F6vQoYzmJHWSDpKJFjwPHuEWdNZGjynZWWsYN9Nt2Na",
  "key30": "31uQoMPCR9gKLd2q45sGBdafP6FYzSjrE49JFbZ9VHfn6fWZDNnbWMkC314n5MUnS5NSgfpr7E3aveJT4mp4TRfB"
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
