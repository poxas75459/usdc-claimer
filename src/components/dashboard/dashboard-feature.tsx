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
    "nGKLp9reJY7FCVmzQrsAwZGmsVGgUhnyBH5VXfXtNoHRLunrWwwP1P59L8RqCLPkgg8BxFNEDVsJ2tPSsMEJ1Av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KtXbgZWN9b8H96XUSRNmXVuSQm2AzRMBUjwNxYZuXGpEetKDFCmnkcx9Gg27ea6AF6a51NH6nh3s8ufgh2F73i5",
  "key1": "BpSA1ma8Vk9Epkgk6UGugWdhdD7xanE5SbsNGsGG9KCUA3etxYWnSD3sj7Ld2cod8ZbTkSWgMDdTtcVgEcwVM5W",
  "key2": "2cTfVZ1xDV3JWqVeMysyurAcAZ6obN7hh9wyCyzAbsKM9QkexPRD1yCpXsJk1Bhs7ZDrR4GYvhpaJz2yCfjKmARi",
  "key3": "5VKLiu1hwNR3Md8BNR1vJEfyeKe64n53eJyJ9hk8aKNe6ok6czStaTTmNdVgsKgcK36kVyFCh3GhYz8tSuppqoxp",
  "key4": "4WKBq98HWnrNVJekRZ2b4gqvDKEutEPhWSUnqVBkKaik39j2U2qxUv5x7kh2YJDQ1AvXXxgBBnQwz8d8BZjT6ixC",
  "key5": "3bQxRcMxDur7j2z1XBLzqyKRpF3eX4dJ1e4DgkzUoL4VGbFiANmKWzjGkB5Sh2zt9rKUqEZ6dUB2w1Y926sbB6ad",
  "key6": "bLR94vb3F4o42pVCg3wdUz9nQDx8A6vdQnZP6hNbknNUZMFHKqkB7aLTwX2n8BxSmnVdCsu5N8qvmjivaPv1wS1",
  "key7": "gBwMBoeiQ4b2yxqJTPUHhKNFb3KD21jMXNV5797wAHFhUWhCtHS27Ywj4Rpqvdomi6BEqJFFkHnj9GMkziLnmyF",
  "key8": "5Rr9P4G3pHKLssCEmyUZS93LZxfcsTfF8KVeUFRx5Uz6hxdYZ93TQubDxhBwZL4JPyfmmYwBCukmRsFME88WkgpS",
  "key9": "5dE5Lw24R7iTqQ2wZSJyDMVtnkHWs18PRepa6YhiFbWhYV3XLn8e4WsyPdVWbkfa5JUrrYUP7oXTCV78fxMf8E13",
  "key10": "5eAsjNZWW3MCijUeXyqzhEEesCN38YG8bvZcBZo3SdsgteP1A27zRZY8zKdrARCHGSzRQPoip2cWuaDgtdeNcSsb",
  "key11": "r4KALzkhC2meBYD3DYp1fMmy3DgzMZLe5kvrXiLYxn7hF8rL2CqrDHtXVw6XSX4y53WL8oEvs3ZiFMTCQPLmKwm",
  "key12": "45His5e539NF9EoPezQY8DFafeA84TXbpdHKSgbKUt6wS3X6vNL8Q94zkMVDQ3FTuDNLh8hPEta615Nic8EQzBNE",
  "key13": "5Vjvyw9XhtyibneVovYeMYKeBy62NeJiaw5hHKR2MyAHeDHyt8tmL4GecNyZtAUt9QnV6Lk6QAvP9ZSM9H7925yk",
  "key14": "3YJ7iGjfVJDzVEqfP4L4UYwXL6x4EinSpafBjazxLMA9qBAFpGxUZ4E3i9utDrtqHv8GR1Yp334sPxy6y1NTHXWh",
  "key15": "61he2n5xuihsU4p8dh6iCvmNws3qLiFzqXEfrHAihmdhG1A1J9eJP3sKbAKcYyByVb8jZWUgcyvmsZvfQFFNJd4t",
  "key16": "5ig2RPLPxyifr4bRvD5rwaMzAKAuFioQKBCAftw35yz7doUgPCHrRd9z3HcVhTdYNZd6usA2yDB3EKexatmtpqM9",
  "key17": "mDiFmfQZeNiJQ7M1hN53GpqHqwbrBQLS4quGUzEJz8odfyzbgkX1VrMiVJeNhabKHCcWbawwhHbPsuVDZ4ADLAF",
  "key18": "38hCZhvdyPfqDigQWAZLJwMM4AozpXy2zCYTt2TDHQvWUgweh8CGZRjjW31xuhh7u3BQPLsjGgraeqYjuempG4uT",
  "key19": "51m63mvBKJfPL8uhLn5PwVPMix4B78iikmdhdH9AuEmkJsij121XF4zZHkcY3bRtEantCDdtbypnrsF3szh23n9z",
  "key20": "2iYprktmm1zFexMYk2K176gaM81dMJ2vuRdHNG6hXGo3wkBiikn3JXB2bUCdcfnxAGdUQGdYMPdYorBP2hqDXvfQ",
  "key21": "2ukz3QpAW6kHQXevXsdzuqqWB1J2z9bafb86zbrRkPQ8mHY85pJw9WAK57ekuN7mvDkummf73UHbrkmZewLZhXWR",
  "key22": "36EnDbXecaToPY9jnEobwf9F6HgXGxBKX94HnpfJsoy7xqxk1zzkYTcPqeFgqLaqKX8Qum3irRL8gfC9pKmdzSQ1",
  "key23": "2Rri1rLt2anS56x6p9aRYnDMT2kGW9q4z7bsBdhRMJs52Dhur4AKDxytXvJ82cRcKwM45cVQkJE5bAv4mg8tocsg",
  "key24": "39DCRUdHNNeWEWJQUxnBXKDVw9J3Hb2Kkhd4LvN4J9nMGf43dt8mc4k3YbnaahaC975nsCjdezyq3Ko1MY9bAW7s",
  "key25": "V1Fb4W9rBTEYMp2VNGuieSkijXB1uwbqyxwNaN2sGA4DLmiuaW7BzuzwH68Jax2J48PpfYpzA3dshRACyJYBwMZ",
  "key26": "5S8DjPDPBce12hNCXmDcXLoVA4KwraqMztmcnnAGmYDBUD22DzVgkBVvxcH2xSoKNoUMKUsyyYrPyQ9ckc2HQGmt",
  "key27": "2yUfMDnnyZXaLzRwHi9uaQ2ZvVEMYGSbXycnhABVTg2tkPQ7NviyVma31mds4tmQD4L265D6kcVirMqWQcCUZP43",
  "key28": "P6XfaLiSB1RSXo3XkXZ8YnzSEYV7EYHwXJgiSAePRhPjZAWiHncHdRkU9efcfRNoQsHLYtJfWZpuHryW8WSVoRk",
  "key29": "5BAr9Nyz86Tp55b2NZ6jYKbNB9XcdcceABwwATSrMhXc15MwkivJiSWSN4WBi6UrtcGhjir73uX4uzENfUUSjCQP",
  "key30": "55pyEcJHZhsaE8b4KYHzY1ouz6nnZ8A3cBqacPSNFmJ85giKgZksU7FLm4mjom2bbZZuvDnmbUJ9Q8Z8HQwzULnq",
  "key31": "2jtUe6QySn4ogHMY6P949UGJDUc9bPi9voYQU3Y29P6jQnoTyeqwk46Fwrgf8Eb1dTBLL2Lik54e7kz47f1UAJny",
  "key32": "2yDJG6sriTdXezpVhrJLwtMqaycskpVAK8y422tp7yDtF5z2RTe8cgzEYxMzMaUbpaDGo2PrjmKEcrimLXuS8xrR",
  "key33": "5itWwX9LadJkeRsfuqHyHFfS4uPehLrvQizZbmUSL4KKZzxhimt1DqmQPFd8X6BXEzUgx46ZKKSPJaPzvD2gA9Z1"
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
