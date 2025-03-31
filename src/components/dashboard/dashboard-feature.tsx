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
    "2VJnDNTPu7AgK2dmBtPfS6SrxqZ58q14ogruDNUYyGgtPo8d1CgCqCf6QFqRtgpBLz48Gu9xpXGuhhfCARwVWB6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34A5F42mWn8gbNrW4ezqNr4b8Q8ycMH3g1T2UjYCGPvFq1j7dQX9G1prp4aHTCEfRHmgiZNxWY4D1usFxev2ViyX",
  "key1": "5ykmsfA6FD9ZULrfdsy4589WBaeTFX3U1xBgwSXJWhQE38nsvF9EGw48XPMu46s1d2eH2eZNomAixwbk5njwErVW",
  "key2": "5kgAzNvCdPQTH83GRz9mAzmh7FrSnRVp3Da1tzDaNanDW9GyMkr8qreqiPxSgRCrk5K9YztpaofTFs8bC6G7BSZf",
  "key3": "MsNL29e43qS9UXX9fShZt2w237MjGkyzaaeMVSqjU5R8PLdE24cSvQhy1dX9SXJtWzPKyZwXVBHkEuCHVPVsFvV",
  "key4": "2XqRxwTh68ECVjj8DHkER9LVtRoRGgpjQF4tXFQYmYdTGrTuWxBuxf3R1vsUerMqkefrARqXgJ7LrQi6F6yxazcD",
  "key5": "5ErmSgQayjnmgn2mEPwnHttc7y5MNfgGhQQvdKCWUgQNWDFLLt9xbkLMqQs462sxceY62SWWSZrRHzjsuqi5U5Pp",
  "key6": "2iQoJUKaonTgCdFmnjdxsCq2UCZcBEqqKpDd8m38PZv6BBCzHLPvtJtfasVw7Q7MF94oHLrEu4feT12FH1cMiTEb",
  "key7": "43Qwcri9pdEmU5vKYfCspZ5jmijMfjEojCpjsT8u5CciRWxhguVEeJLL1RhVCxXQkMuiXTzPpWnURjfwRKp96yGD",
  "key8": "4madZ7MTMwZub8mPkTeu1LReTbJAb7FPGS7Jk4LUiRcDqUV1cTAH2zGf89r7HYfRMtek7tZbNwza48igbDxVf15r",
  "key9": "44mkbi4qL7Fbo4uTfgSpKdTR34hhYMH9nBepk6gMNo5GusNSntcTYwPK49MicUUMVRRBZXSvJkK1WzTngvWq7Sr1",
  "key10": "aBeKeLSZnQgswAtJmg6roEXy33ApQheTupv5rUKPTKK63BUvx5svqDxjE6eTKJEPzTXyzQkYdCMsqjrEtPHWngD",
  "key11": "2qTsNZRuRN2kLbPRCJqTwUFKZZrfsTPfSiyA9mE76ffw2ZVb6CgTAHH1qdfKJKHSQnR7iEKR4PUUof8QZZQQ7M6P",
  "key12": "2mutNVyoYMMyNDQksKCLUUsw9yJG7uJbYbe49a5SPLznmNf9JKgHq2r8Uh7JWiDF23ujraqviSDSfsZAzUPTFuTG",
  "key13": "5G6zC7nB4k8j14Dv8fMbxB4xAGbcuQvbMUz7zxLMWTJwphYFfnADB7fJTpNXYKz7na3nMZEiXvNCLUEDeNfho6xn",
  "key14": "4D1GZaCP6Cis8pDzYTSrTw8vZezv3S9Bxxa3SUp3KdBbNnFfTtUEZvfiAEAMerBcsLLiXAoUWyQP69s5cnf1Lcju",
  "key15": "41CbxPgdUms4DiW25LiinieM2aw3FapACSnEguZEASem98sirwT4VsNS4k4zEsYryqYaVAjmKNUwzFcU41Psc4AX",
  "key16": "24SykUhtPkDeKk2d5fAUy5ox54EyNsoEuPUGmnJvnQ4nPo5mKKWqQdYKxsoP6UM3tnRbgBHSu8hrqwFCJMRCgd5b",
  "key17": "4y34SVPanxsYSQaJGy93pnqna5nA3D35ixidtTYmKm1vUhtAV7CGZxgNjr1Tnt2JPRLSYevhLEjNNPiDhxzQBFXr",
  "key18": "2ctNb6Bbtk1NKanzJbM4fyEPrEozzK9pFYDBXDswbvSAurStqZEz8YgMDpK1M6mD1YzgwjmFq86TkdBeNSPYHyTo",
  "key19": "4rVLoCJWm7bv7vGyqD81HfY25cxGrrs3WPBnTQVo7YAiP2YoaivPd3vGFxGNwbGqrAPhwGMLFryXujHToud7Bzr3",
  "key20": "DiWxaZtpj1RFFLrSwudFj4B3w6Gs8RihKpVfKqkmZPfn2gTgtaSk1C3edz6N2CQitzDW9vTYVnQXnUe6sxMdkJu",
  "key21": "5BsYX2qYkKSyvU6V76fqg3dsk8QCYsXgbFCahCdRhQVKWvUuyErroEozSkEi3yYB6uhdR8qPvdwndQDy7F8oXSd3",
  "key22": "4oEQNkaUvpbMhFBxyBvV5SUKQJomzVXvxUZSs3gBpkqmkZvXK9EJZwcUEwdws5SCSJY4Qo4XADviRSRzUYaKUYvE",
  "key23": "MzaNzVaycMRe9agdQvA2GukHuttcSxevRi2yVBj8nurJ8Jwu7ixKjqm7UaEYoVVgfCA1xrZRRFLJq1qqCAqQ6bY",
  "key24": "3DxHwtRPcnQqYj7kVrWQtcgwVXetHWZpWK1Yf7YFWKHDKFf6FxsSQifVuoWkSNbiLhXNdYPa64MNnAbJNC1JS2zn",
  "key25": "3US2sP81puxLDfBZ2aKEWoX1N2qYZ27fTxBEckAQKwS5A2QPknj7txMt4CdPsCLbvubU69oEwRffS4ogPurBnpp3",
  "key26": "2YLrSknPi3wGhG7ESRsM1JTw5UWCt67tjbzxx6FHVHzst7AVVzegCE7S1DJcvr7WP45iRkH2mcU9x55hubShpD2P",
  "key27": "b655tB99bauAz2fdqSYTAqhsPYkyuSsDkbkVWYSNwSGzZtsPfTWLznBF5EsRQyyZhy5a68vGbPKAV7JPVxbP8HT",
  "key28": "feT2gi9Lqatchy74ptqby5bFwJrDdF1ikaizcRruXXiDKMFKHCnADkgu2UWwSUX2nys5MxVpkLyjExc781hG9mL",
  "key29": "3tqxt4gLkJ9At12Ez7g9MxEt1DcdVzjN29r7zThknWYQ9LFhZ69VYciixqbxi1DC4uyXEyv8T8R3c8Ad5ixBXyU",
  "key30": "5WZRfWr78Mdsh6Fib3sJJFkPmVVMMtxv567CkEtSbPXf5hGr93mp4GrvhpDrTt7mHdkV3foJY78WiBHSGTfZx5W8",
  "key31": "rTN5uSAZ9mfFM3vosgRyzcNxyYen1Rgu7MSZckvZiTgbQ9LNu4TfkRfz9FEvChLnVPbiWsoEZkXcktxrNwTEMWY",
  "key32": "7ENXSZ6qLvHrmKUGFKw6MsQPRtRUSBX1v3u6Qim2zYVfwEoLASEPhnRP5GR7KvnbFukX9jkzhPeXKsSxsA2qHvu",
  "key33": "43LVkxW1cuaLhEjamkJcnvDJiizkUWmdotdbuasUPPSPzamxLKPZBSBTE2V6UMPfm2L577MPfJ7Q9kauxDREqyaS",
  "key34": "54AsneR48YXB7AGzH5zvaBmJ7CQEWkvvtdBwZKndT8J2sYmYXZo7Pr4EzUdZ5yDKutaXApZSLE3uq23WEkyrjxcF",
  "key35": "5yxrHUVCnkKVxM5kxbS5pqSEUH1FBdWAjqFPLhRXdLwXCsaAiUSXuuWjCVycFR5RZFcmJUehpK4HDRjKb4K4FEqr",
  "key36": "5MSZPSeV71fVBFVRZTnawhMXFWJ5gMiHnMiyE78b6JJXF8XeGRcCXHes9duruE6kRf5jyW1nRdWNf5FXJnmgJPgK",
  "key37": "2xg5gYXxqjGLA31CBMQBXZq8W2ue1sXasGCg53PbqT56Qx3LaaTQv4JTnKmm5WE1aAK4Xb1SYxRGxy3pdQ9XX88r",
  "key38": "a2JPynJpeJgggPurNSEMG4y7rJmqoH5wfPyvPCAbkMpYjts3ej1dPzoUdR3jhMyvewnvECt6Y1ahcF6A9W7k9AH",
  "key39": "2J3Z1FDNRUMjnfNbLmvbYK4Z8CNymkZxDQLUKfqPxsiXt59PVjXMyfey8p13NSJTMYf7E24uxNcKRedLhuWSrPq4",
  "key40": "4qBnKbYnaWtP8TVjMnCz8zdbuLjqv1UG6a2RHRGJjFyjCbi3F1sFLRsudPwghHMtpg5bHPKATGFnxazwAYt1uid2"
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
