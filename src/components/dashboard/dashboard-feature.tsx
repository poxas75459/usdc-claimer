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
    "5CKsTnBwBUERAEk3W2haS6X1WR7CezxV6aPeaYCpqCUkshXAtJUsdTxEA2vb7CeUaJXguVTYDRnB4PyiXA4StXZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SgtZWpeBF9fgQQwMagMowQUpRoTH94iAcaxad1daCnFU5FLX1PhEtZD6hrudHdF5UsW71m74QzPDg7mVekddoR6",
  "key1": "2fdePQRPGumkkKTAizENKPNjuTfg3aMzVFqyVZr7kGSRZiL15XUF4brZP3SJEugVZ1wFVMJi23V7G2dmuZeNULZ3",
  "key2": "2Q64KDHj2xGnCYPgA7HhsDHb8Row1o8j56DPQZ6xDpTBwMZpoHwRxifUXmDhXv1pTsvrM1boVA9vXpWM6kqGXcnd",
  "key3": "qXS7ZNKi9xTCqDRpFmTJMZ1ixZ6JUDk8CGoC2WeTBE4oTRXgZPAHMb5LfdyVgL6BSddwcEg7eWRRiAwFQe7aZnq",
  "key4": "4uHF5suweiFwJB3fctrGv6YTi9dhH5RPCbdFvKt7SAmNaVYn2SqbeSWSMMyS48VpF2jPwQ2kFWC77T5ZqJUtGaXj",
  "key5": "3icdMwf3rnxrfnzZCxysVpSi31V6RigkJy9FSHN9UoqqzHpMa4mWmFBkdDs6gEQZ8XqiDNc8TEjGcDH7WwqdBUYf",
  "key6": "4fPDR5F9LhAV8HKxHmwL5qH7LNwWL8BX5NPPWcLci3yXe4CoJnTkfXmpADH5jCL1PjWCMQqQYDpgU8hJY9cS7Ny7",
  "key7": "3QLTW5iPbmvLCfJuggttt2MD5BVroqD4CAJuC5F4Wv3f2MQhuegej6SRTcUiVENeq4CzomwqbS7QAbwVS6EYBW6d",
  "key8": "ihESto5fjPeRJDGDA24f478YpJh9SsqPMuH5Ps7LbEhMXTS3r9mJUjuaTn3BwfZ6MM2RQ7e5ccjcsvM744ZrXAF",
  "key9": "4bVXsjxvbU7EMsB1dLtUF32bHkL4YSeyvjp7Gi5HHCmvHPF2JrpPqFPBedUoQawYiVxXvVuYfrANxvTRHK1fDXnj",
  "key10": "pcFfspaQFaNVCL5ybKDsftiHnaYy2iLofuEWheiQgP6j2NhiKA4aPynzVhnSHgodQyVsRLYU9QDRGUtQEA6tEX1",
  "key11": "eskn1ZKnCTUst4B8htsrZky3zRPiiEXmKDyBAgAztCLXMgDE4TMKDfqjjuYr4u8GYgYwVPgcdC769PLzSkPS6r7",
  "key12": "48uJHLeWXPEsScBBqpzDocWVCJjwDB41AqURmrvcLeJmybNBcTMBxegSUzJgF9Dfj9ZS1GV94zCoG36crjuqBuao",
  "key13": "5Kf6NZASkH7W4wadyTPawjyb2V7abdywy7YkgADcoMr2bBG6WaXXRHqYP1uyBy8xaHQHCo6X4S4Z93cqjA6J7n4R",
  "key14": "3UCMxmn59RZjdvuDSh98qZw3A9Er2iFeeMCXxiuLYKsbBfrmnusXmtauUxqvq2pNqsk7kLUmAp8LopmR2CTEnsaV",
  "key15": "2LyEtCSQYYaz6ANdeNXLft1L4mkb8LX1HxrebFErC7iTNhZiWxYsHFiKgCDbecKoW2R7LC3KMAzes3e226JpAuS9",
  "key16": "5yFCrRx8xWiE4VckKp1ucc1jKsFCaf9FEP9a6g4CQN8k2FRpXVjAWfEkrp6M1XJTVudXzxHnGUvCb2yRpp2o8Smw",
  "key17": "4mYH7hbu95cNznRABRhYMG2FHZapKWp9gHJcFZB8piDVdKHWdLURG4rqQprMJxAYp3MB3kAdxxciGpH8uf4X2B4f",
  "key18": "h7L6mzQDcmDbRau8TbLRpAoNqqrbSEv5y2KD7BF7iPrCbbSiz7dhKQtfjgxKJ3rEysQjKuomzBkFiMDy1XJ78A4",
  "key19": "4DEzGgFqQwX6bNowYkbcwPHSueL3893cQnhApF9dX5tKsCHeMAyqnXK6jnjJQmQF7bW2AjEovziWExtTTo7kA1MF",
  "key20": "6cz5eKXPQWLfBugEq9qGtydDEeirj1h7PjnnGfKR2BXeW13Ak6AE9PncCvmnvyNeRATXTyzPrT4MZFMENhudWRL",
  "key21": "4nLrCgU5zv75kFw7SyaYueYfstFoWsrVZomnB2KcbvSKCUbwJXUqxFSCPLfu44ZNfVZ6wYtZphY1Fg6dxZgPkzmh",
  "key22": "2H5WaJWqoveKCGcBiGALKQX1B9J1GFa5c37UogwcMttPtVQZkzooEGg9rPC5K3koww4NPhScgW42j7Uyf6AA2yHX",
  "key23": "4hRLLixJwE5BW7CJAmyaWmQAwySzhN94ri6UPca9fEZ9z6ETjESfaqf64LBPv7xZd7aXQvfAJiwrvT9AdXQC3afu",
  "key24": "u4f6SmnT2j1qHVGumaYZVtfSA5SWJYft6eHkCXpfN7atgXSEYzYuFyQAuVhshF3569mVxRNbmzBe4fCLk3DZ1An",
  "key25": "2aSFoFwJ8WwiLDsqrZYVbjpb2PfVEPcnufkdkQ5fsxL5d4DS9qXEG5XVAzsFhALnkJkrVGiW17yA68KqxhSndb58",
  "key26": "4uNusRJW3RrSBz1uqZM55zu4vPPXz9zUSkb2fxvWHPbHjN7fePeT3fsQsJPNLPoaHRn7MmjRT3shMvRGGhQKcwmT",
  "key27": "3cw6KJc4ZHxfVUQ6R3RiketpvmFFDYJ29wGiykc1JtBZyrJseovFJAr2aD5SGF4gCrLEyTabumsGpoooRavCiZMQ",
  "key28": "2hLvZ2PoXVLD5oNDSoi2URkAticcwX8KCXq7xUjHvnpKE1P4yaoq6hcHQ6KdiRyLuHt5T36exESnvjc88e6CAD1j",
  "key29": "5RxfWeHEAj2ReXxkMdTs8QCwrKFT972LHpggAQ7dJ1P8kGhMaBRrj74Wp8CmgSiGnvK6D77n37igpoCXm1UMpTKz",
  "key30": "g5nfTeENACRUKDUS4SqtsbV3pyEyqTiZQsT4wFBnzQD499L77joHQSHjEYZvEQdfUXMYfL5i19uYaJMjoRrwfQp",
  "key31": "2riVGSwN8LwbBFn51m1CByeWk6r4K3MnjALmv6eeR5CTshf4DYVhcyAAg5ys5GAMDAGRFdUhFjnQB8fTuLVUA6g9",
  "key32": "3upBy7W6CoHeAWBmV8jVMo1Xz6qZw846rKieUwz9uyp7KHSMjLDcmUcNGsbnDkgoRHizCYAj759N3J6oQbFbawwC",
  "key33": "4YCB1oFoPkoDc7BoSEQuFWjQRvrmQeVMBXJz5heo9v3ChNS7GbouUByUj4cHXYWJFbvfDAdFvSh5yAobViXB6XGG",
  "key34": "2BPzQnyQ4CDWGwsuMArJPCpn1mLwhN9CWtRauCwS5o7K4twP6UUJ42rjBi6BkXrW5XrqwY6ZfyVzjxo78Q4C7Kc",
  "key35": "61EKLvs4PqhndFiZi59u3JDtMGKZ2wNqg1sZkzPHzpxq7gX7hBhzntH4FdwnKShw8A4TTq6s3Dotsbyqve4Ab9cY"
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
