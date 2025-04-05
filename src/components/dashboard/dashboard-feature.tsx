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
    "4bu1AyyrtjA4H43Rpn1ERqFCi7eWebMoZwuzfCLPRisazSnuY9BzGC5i3DrPPUiTQqtRynH31BCs6tkBJXFTc1wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgjJqJuaum7kDson5ARqGMQ1CWbMphEx2JjrZCvSV3sM4nvEXRh8ktUK7bFeYHvvrf596eRBhq7Sie4tv7ovCcf",
  "key1": "5mJGKQvedo8FHQXJdiVSxUrc9meYy3NWth3hqbLBQ99LnsoZmqpkeqF472jy6GTiDPNF5GtvvZFENRCbfQSiwR3Z",
  "key2": "5GogGS6xLY9qyK8xX6TD8ojd19dTEysTBJqKYaYhvD9Q9Xstusdqdp6Z8JJhw8TxPV4MA8SSYdDXSykvUSA6qJep",
  "key3": "4tWZ8YCmDjX4F8N811DUCjnLayRFuAaVtHBiLDTZJzGokqVvWDJpkWFBPmpvHEzrtqQ4ZDAHbSaKPpQ571jAzpFg",
  "key4": "3fSzFfM472fMbj9upQR2nG3wDqHpmPRWs1bjHEpHntPBZd8mK68odTAofhvex3dtTiNAXoNe5EB5YmeZsW9SX5fU",
  "key5": "3YPQEPTsteQak6vxxSGDmVjg3zyKit23kzK7R6hdfxm3qew8Vyzc3XLoG4LXFPcmain2VG4sARqB8T9VDA3zxxYT",
  "key6": "51mEsxNyammThuPvfJU5Uap9Ey1Xayf53smzJnqEZhUsx5XBisozneGiXAwB81sqz8QqjT282D8psEsmxgF8hbpA",
  "key7": "3knLj6FJKwKACkw3FhYcv9JAv5rcBn5jPq9B9ke98iRHoKbJ22RputAPdivTriDCMDA1V62epxE9qgw78nt5pMRL",
  "key8": "mamtTBZarWjptaqeVhghp56aUY4aQYqVua5dM5VdTW95BpYV6y63MDnRxQp4YCjq62G1Qo4J3w1Hmz3b856hpwZ",
  "key9": "1AavkHVPmmLyb46zU6uqf4phYQLbVVjtm7QD2TRYibZBXL642o6WR6rw79w8z7h8u1nFdaFtgopmcfFtXQ7pjN3",
  "key10": "43kWfr1A1Awa92LPuD918ifBQuFENkQ67VagXTGhy7H1rycHX7fMFRsVmmjYQFYKpBQ6dmfJ5m4FcBkohQbN4DpF",
  "key11": "5oarrxZJMYYr8d9akvGbU5z3jp6CsUXezCkgjoM4Wmz2vcmo6wp68FxNV39axfu1gd4gTiPUoKkJQZTp8YkTPiSA",
  "key12": "2RQceR9DDmAUauHxm6XaiUtfMH3cJNA1MokZ8ggyiUM3obFjp94j3wDk2jcRMbtjv9fx3iMkk3WbwxANEhaRcGxX",
  "key13": "2mSrtY4dq36d1UMdfaiRZamzyJ4BXJr1rpX51XvENwfhDnDHbgG5McDs9m6zhG6SW8pskkXGUoPqJqYGbsAfmue5",
  "key14": "3kNLgYWL8RdxL3WaNy769eBydGbEeHXjojmBZYY6J7yDCru5caBUE3xv4mfpkVUeSHxk63KXuZBui8wrPz4Kh8NX",
  "key15": "4mcLbLUstYJQcoBBBkM7HSDEZJasb3MoGjEifNgAfDLXNg85xaqYo8WhP5JpeywjmQniZ4Xn9LQRqC321EarvxS3",
  "key16": "2Myn3X9wsk7jDYb8ax1rZwZszqc4pSCXt1NdP7LfXpM7ucL8y8yMrbWuW1rBoEEgpneZCK3sJvfGu69XNWZtwpkS",
  "key17": "51MGgBU2kiZb144efC7v1Hnptj3YhZbxSY16TNUsNDfDPjhhFFKJUk3NNvLXKPjvvaxMkNsgT17mH2gCj5vMKonN",
  "key18": "3NAzvxn4orNMimPZCbnXPTeRnxopY6waMbGqg9XDPzigBUQwWYYPCvND4hKQNL6DtTx2XXNqwr4sG9hUtdWonxN8",
  "key19": "5tT7FDqP96CBch5XETG7Ang83HuupAmiymsDnvsbPmCayKkGsLVikaP1aMF7QARiZEHogetJPyFdAh2bYTkSrZDG",
  "key20": "59QMLChjRC26kN7cVy97JxgWKANT9BnbAActToTynuMst9avrtJM4QBvSMcNpmn6QqqFWvkt1SF6JPo4E9pGMj2g",
  "key21": "4Pgp7oZXZvzXsdK2NdNtY64VLURYjtuNsLjAhuYppaJhyCRhyeU6GgdLYAybphZYLmXksvMvc8RDShhtSwevgSMd",
  "key22": "3cGqApxx1fGLoSUtXmsYuMvJgCWxHhPR4StqwZKVx9uS7Xq8vmG9WpJ7XNBpbYvGkiYAoDLCwjqigSYNMMqF5t6s",
  "key23": "2t5MfPNPBT21MrhUV8BDFUVeTh5o7UU8vYpXfnq6BafdK1yZxxc1HMQAWhxyTErN3Kb1tQuUhPCpvKbJ7xQkwSzX",
  "key24": "3fSYWfBXGZjpYqeMv8v3u3AkXgFzvn2v2xBKrvhgwBJQXefcS3awSdM2X69ZiD9BvbueA6TQuha2KxbmDtd7gSrP",
  "key25": "2qLXgCmzY7SJxyPmrWty5V5mpyQhhxTczuTacDVMSu55RgbvFU4iraV8RvzRZuXNn97TVJH36Hb7ksdhB1z2HDdL",
  "key26": "4CskbufMv8KmjptffVFsrmWoGCsmbdfyszSD9iM3JvbNdZbosRhvP2y9xQipTEzCPkRTD2zaDE4ns2G1w8dYDYFy",
  "key27": "dqiCqfhGg18cMZcSMwL2U4jL83oYBD9BiLPnRUcA1bwgjmNB3Z7mNyqw3baA5ecXDGUCwHbKWfF7MbLdSF5cGaw",
  "key28": "WXuXxnqNicecKLh3csN1pYZkMaV6cC2Rxf2m4zAGku1aNqmGTbHB784hJKxHYVGdnNGf9bvjMZphaQxZmMWfJTe",
  "key29": "361w9FqrRJx5CfosDcjmRtBnCUMURiuDHcqJM9ybEitBa8vme5zL7ihbjfmB7UdqpTU4j13vqWVoDFzijuMBBbaL",
  "key30": "J11t8grw6aoWRtFVrVHDwaNkQDdYdhpmqkcMCqczCjBuPJfXJihRqNyHwGDS8RHmCNwEo1GaKBGJB4Ba2oFSitc",
  "key31": "LEKeay1z91hjoWDKYgr8Su2eDGHaG4cfW7p153tWbneLceF7kjegHuLpJ1JnGiyET9VZ66tXz2QWdaTLSBxoCun",
  "key32": "4dDKHDWM8zTAqMvqYFySfdg8yQLtXBuEFYBqLvTn5VHqArSjDnGUrSXaYmHgN81PDNTAxS7YvPk6ZbrqT811h213",
  "key33": "54dVo5Qf2hoRHPFKn48TNdpNkkXauVX2Q1cjwx54bEY1zwFySDoLoduuH1FcUTxdUcatysUzP6HXcJoPz97hvXJr",
  "key34": "5yWz5vVoFtVvgEnCHjLwLkrAsQYCS48n3DiNWkXBNEpNRnSkNX9LXb3Lm8S3UzVwrHeqsg8ZwzRVHKqHRgH6e55i",
  "key35": "3CdQN6Mcg9diiQJFs6nqaM2snuac8UQgVAEBJdAPqcUav76wpypm7zHzTdo8Y2Qv9h9Q4UeY1S8XWPngujjQ3sAD",
  "key36": "2P2iLUvZ39s4oB9YPLedrXbXq6AGjRLtRvtUYnAkP3wbEqz3HzFbne65pQCeLs5m4pdosELgvXGbDxGa8j5Gjk5F",
  "key37": "5whSnUvj45ozp8yhL4dimgxKWfvUikwL5wgGdycukSL6uASgF22MAujLS9xeWN4YEPvTVugL2S4WS2rAeXtfZpJU",
  "key38": "2dL3GVRzgqnp3amHv2ueTd7MKQuRBYpMyytvzYCrekhM8rCa7qmmCxYFUHne2tZknju6aeRpgvGKsTGLnyayPPRA",
  "key39": "2YPDF6sk7k1KoJim6cJ9SXfncfPZ3AtgAhNGRA8xGBq6PdCUo85VF4UKLdHjrMfTrsQxhsQ8JHQTAtgBFQ7Y1MvU",
  "key40": "FQ6SdSqfMn6G8mfzAkkYhM7fmAK9bjza722CFdyoTGFmuTHGnMyUZCzTepSxFFyC7cGCdH59r1VzeMkDkBK443Z",
  "key41": "3tSwEFFxtBb3Uprfnxu9URwzr4RUbnz5CeHcej3u1QVJoX1anHG27bLUeL7UNiZU4QDPPLyzXgctYCLhQcq1bSYt",
  "key42": "3VMiKMnJpixcjcV4gB8xuDyx3hfhzpZ5KeEm9f1hAnAeApAMbNALt2kMwp2iWHYBMT3QezJzXpYGD3ch5HVzHhMe",
  "key43": "ACSfivqR3P67wGMGnDf1V7B5cj7ZPYeEVGFFv4F7HtgLycKy8i556cM1zzJa32FGaCnd2mtXbrfQAXgEgnVgjwQ"
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
