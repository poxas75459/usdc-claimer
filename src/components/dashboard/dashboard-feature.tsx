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
    "24RUF82YEdRXte2nEbPEGr9xGfSh1Xn85nyLTFDCrThX4bMBgYwU8DEiQeuHqaeQxKsB9ZpNFso3YR2yvwGhy4tz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q5UsjwNbsD5RujPDxyo3Qvjp6NoP9VjfDGWNQ8KyGbmfHjEtafadTyQVwknuazA6e1aRpyf67BU9mHiZ18TV9S8",
  "key1": "2rVPjgvh9jvM38xKLMuAMUnEb3Mgr7NhQDmmiY5yTQUGfyhajfKeRzCfa7qUmku9V8VAwrN7PoTxjpiG3X86Evz6",
  "key2": "3sbPisMugGxKSDvg8bNsxwW8acChG39PxDSg1s9kxnRA5J9Xthdw7r7GgPGStfoKUjjogbm9R6WDv2dkkAbmaxBT",
  "key3": "5ftEwSvhsS9jBPeePPqpB1xmBUwrsbXskWvHQzQyk2EqtNzvB5ypNeBE9XsyATwGSv3c1UCQxNQnk9FZMcRKRHJg",
  "key4": "4rJwgw5wbrpVVBumpQHMQnnPtF2tSaZd8NDt4nMTA9atSExumQ47tiiSrBY5AqX4cqpD5BRPLGijkYnnmzx19dxh",
  "key5": "3KVKLgB6HHnfpqQnfjQTVhyFzVseLk8acid3GU4dx32KV8tRmREpRD1fzv6atR9VurcjaHKkk1pVYJVMBc6uAQLY",
  "key6": "6c2u5qCeGZSTJQDYshMJwqdR48LMUT3SGyWURUVHs6ozTDqtmVhCWJxDYtL9rK24V9Q5ZZwYRCY2PWJdjay79iP",
  "key7": "4c6Rk9h4grQuTZ26VzNfE7FgBuZ7W94AaLZ9NetY6R2aE4SEU4ehuxNPwwmUUsP2J8kcYrNCE6rh37mXwVjL95Y6",
  "key8": "2HKs8P36ooobjkayhYfJaZL4P9YC8tkBg79tUxcCmMyxSn4TebJAymFMF14xg88vCQV2QDKgeaRVtjrXWhLCHuPC",
  "key9": "3zmsKQdLj9pismpr7WQeQn5K9HQsHWHgykUHJLaJAUGx6TzQ12dGcKL9rKjYSJJhb9R5PDhqiTvLFBPArjsEiL1N",
  "key10": "3E46wFhxtp9iYZYsbB1vbFr5d96KiUs3BML1nrCPWGJBhB1eo8k1pbsbjaY6aknJD4TaNWYUFyhhevszHcUJw18A",
  "key11": "2zCTDtoYM1QXu3ejbkagJCM9Fwc4Cp1T9BrHEh3LFTDBoPXAxkc7tpC281CvNuo5NkLeFh7DMmcHHA9kkZt5Ri9j",
  "key12": "3jdw2CC3vG5ELAYpXDPCX2JrxAMef4DY4qpEEgkSxSxNUeZUkpECuwE1ADDo8EmiydFBhCHwi146KUzWLJZNBXWm",
  "key13": "27z17r7jrETmFmcACsGFUYKQ8QmdyWn8BJsgzZQfyKAvvgSNuDusH29dUaRpE1G1Vi69SnHpAod4DCMF2yie57xQ",
  "key14": "4Fme6ZizE71MY9rcaezFrfYLKHWvCPUdjcQK8EN4724HRFmcyzZDcPVn8wYJum7HTbdqj3bYK2NYvDyXEouW4nn4",
  "key15": "5dCArBvudWKBKxa2MkGB5XYxDSXkU4gNrkHCfEnka8BYuGHE89JPUpxZAif3SF2rdSdrqfmMhCEkxtdq9hDm7hs8",
  "key16": "mSxgkpBd7yYJVYxsP5bzEp84JRvfPVKfht1P9L8YKQT2nxMWhHpYwa5yCkJ6TcMWAtXyJoqKJxKmefKWL8wq4x7",
  "key17": "4Wd6VUK3k1pUzs1Jer8FUjkzUCxevx122UyHf3NtfR9ve62pVPgMKMvmffTnY9UFjHQcGniGgWd3ijjbTg5Cndmu",
  "key18": "29ENDMrJBE7DPoQU1xT4KcDXfyfFZBp9CedpE1ygV3PuvoyN2vb2MhCokd5cvq7ScqXptHZpsvQpru8omn89JeWT",
  "key19": "5UQ9xkV2iHf7J3vjvgSZktQ8pzHKwG19zAQFVoxrTEPpuTYeVYQJ7qrPwaXecCHPRdc3X7qig4iwzFX5HsTWKV8V",
  "key20": "4gueoV1dE2TCaUs4wKZALcFgb7S73Uqij4SBmJcYHxZaXKzU6vSPqN4zjgs9hSfattUbdy9zbA7ahUzMh9XRGWFt",
  "key21": "2WPQxhG77eFph5QmgURqCreWhMZwu7FcCDacwmTVeGUg3E7VAkvKywzJQwy68qeYQz97WFbGt77ksERXCNBqSbNE",
  "key22": "5HQc2mrps8oTnzwBNqCEswg9QBvQkMTKrgTUTohQZAn36ZqtYDigyKc3CX9f2G7V4aSasWW6BdK9keNQGmDogq8Y",
  "key23": "328GaTebszNqskPuaNpyWotxpeAGpRp6bg344ngGVn8qW2Zo2PT6vNHcPcKTTxV9CAn7bxcBabCkKXytWMNCq4vP",
  "key24": "jRE6qA72Fe4bRXtc3FFYUyT6CeuSgqW3aR2zRptUky382bGNrYKMWNRPyRVE5oz8MA6jBs3kdWFmhUrunw5Airp",
  "key25": "5uTDJjFwTTBM27UKMw6k3ModKbP17Gtcq287WmTd11WqVRGNBBScBpA6n4peAtSTzXjrEpAU6ePgKMSMdMb9xZwR",
  "key26": "5a1vdNPZX4AP5xZruQSgz7ytxaPay6Cc6UFwNYpdMg1DvvGUA6A7Z33NFuqRrZhC3VoRkn9fgoEu5gTM7pb2E7gV",
  "key27": "4b6bYAsTdHnWrvRULRK9acDq8PedCG16p4s5pSMKpRxQXeWqonhMwD2iiRxH8oe2SZvuxbnW7Do33gz4KkEnvgjG",
  "key28": "uQsYn1RXeYCtdFC4dpFp6G7WUd9dXJCdnNqFZ3dmYLMpsGBUKFP4a5Gors187jxQUrYK5BJtqW4X3R1dHcCT6cr",
  "key29": "5CGv2bZecF3orhp56Ud88SiMskgqrcTPiRMxfQLdTCWyYY299zxquzVu7c7EsHQQ7Wg9bv3rQYN6dn3H7eeWN6ox",
  "key30": "45qfK24mcat7XMMa3btwv6m71YvR4LZ7ss1oD9bgKM8YUriASXCmfzuFzR3yGKqbYwMrnZQvmo6HNrGbDooEoGev",
  "key31": "hMaj331353KgXQReRBXTZxVHx8DQeJZpa8x6kZDi2chsPcjF8J19VquHEUQdFEhWEGLY8Qip2MGCv6jqC3KdTMo",
  "key32": "5iJHuyLnoCYiKULbaXZXnDaXJJencK6joZZbi3nLovtAmmrsUSAu47eSLanthmarRijk2BTG4ud9XR6UH8zgFgxi",
  "key33": "5msXLiP4EySDrRCdwo4VGuzK3zGidev4jVy4LFrZXh8gm9VzzfRF7wHNHskNiVmWyjWJKEwGvdNov2t5scpz3pwx",
  "key34": "3iLxAthfwDHystY5XDh7jFggmrVbLZvr76CrPB3pJw35YHst2pXUnktAK4DYEz4Fc264drDwgDknp8rSFXTrnssP",
  "key35": "1zspQxwUBwxzPHqjZyDnTmrDxLiYASXW5obKmaJykjp5A92CFEY6nMUA42So7ykZW4R1C9bNytHFJxJXobUQ4S9",
  "key36": "3nuxAYmsi9veKPvmL6fBFusX2MJRKoLgfThECDF5ip4dPwpc379DUGwVbWtJa54X8AL6Z8HMKaSamAymH285NXsf",
  "key37": "w2mT3MZm2LeYr5iDFtAVP8qg58UeKrcpv8QEZWTCQshzBotT1k8fkKF8mTnajene6BebkfhJ7ReXEre85qk5gsr",
  "key38": "4BV9gTSe988njkzhKWW1EWHXoMWQGduV5uqqxU5D92PNh42rNfbvkXwryNAtwBoGBmYyie5HsUjhrWS2FQ1kFas3",
  "key39": "4qbiG2ShJfCzSS8uFe2bhkAagn5CS6ofHKcFiTSPicLbifueq9gjsk91aWDbX852EWK5H7AfXeSMasmpnfHHkLL5",
  "key40": "5CVfuuPAgBfrCBJA1y7gxCoQiU1zLFNDW1fL5Tptozqkv1687Rxkia5qWf5vxVVRJvh8aJF7EoXoVcgmEYctkAsm",
  "key41": "316ALS8ryhyrnMddbhNYo44PayDHc48UW2r2FhjJv1V4oHK26raQoJmvVo7NscR57fMsgDr684F1vWtXA8N5AtmK",
  "key42": "9L9DX5GCntG5eUtV2CBvSraqaQzD2aKT1vaSZjX9kBfdnG7KckxVL1ab4PnzxTgcw9bMVntGhNxvJkk57T7J5WM",
  "key43": "4Ly5yiBZwXzvE6UnaJnYGEjG1egTTyugjoQzmqqcY84uE1b2GsoDF6Ry7nT2zrCstqzMqzuersFtLTVwQvWe56bt",
  "key44": "fvA18dRQD1Ye2wDQtxgF8nye6kk9YLMUpMo8onDS1BTY4L4LZjqjV8g9dty9BAPJJkPVUtQRuTWaUysHiFFVYm4",
  "key45": "3c9up7cJGyfwbiWjtnzY7vBzZeRHVpHKNauaDXLWeYgUw4KL3LioFyeuR3Uf2MvEKEa7unZQj8MD6byKxyvJ34fw",
  "key46": "3WBgEsq6XK8RgCWNHNCNnnHMeGNDqX2akQaqobpgbALNbmnM4Z6Ey13BdrtrTQ9JMBai941QhkVavGUh15nSVDMK",
  "key47": "4mPdVJ2RDFtdRWRv8KDCMhUEXSb2NucUBTo7RJ4d5ogv8jGUqv4JRCEipt3gzAPWrw8j1RgKLxGFRGxXZhkEywxd"
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
