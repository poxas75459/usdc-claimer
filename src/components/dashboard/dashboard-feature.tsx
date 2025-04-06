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
    "37j4T7PNH1VJmXALP6z9UUT4xS9ee3gnPoBorfyAvSqWAwZyBmGYv46as3AzmTw3774mqHzvtbmKtDZpZiybzTFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLTXoy3WejTwJ6aNRppQ3ovFzkYAGA9T3XRT9oaQpykzWWFQEfzPC8iKt4vS8zmvgWkJRJX1vUxigAqcKrjecy7",
  "key1": "3jS4TuE1qgzT247fc7RoRDdh7CESj5LHbs5SoVs1bPeQUTGqdgmLhXD3sgqXFVoP6Ww4jKEsmmxWCJrNotdj7fPg",
  "key2": "65pV5uUu4b2NWcoEafhWrRNKsaGYoaFn2ErVMHGvdG2zMEr5BM79daGWhWDfJ61kTH65a2fQV2tsE7aUrWMACkXD",
  "key3": "2hL5uMnctTk6CT97bvrsVif6dPkzUxv6w7Uh4tmvK9g6FyeSFdpcCyURRhtZfB47Qbnhg9871QwJ7fRJVGrVmppU",
  "key4": "5mVcXtb8tfAUeVvyW6aPF83M5wEkQY7zGJKWZGEj4hS267QLWhp27V4E9nMpUW3hbD1Ty1Uy7ENFq2irqF15takD",
  "key5": "3c3cxT974SqScB4BfusViqVTuvTcrT9yfUMtaE57LXg9EMrARLUtaj1mxrwaSZKzwBuMPDj67r7XD1S4e5RFxy2i",
  "key6": "S7m3bSgQzYMiC3o1sRHjdwf8KQKSbQpa1xGaXTSikxSGfEL1VDHEvVQfQdKnc53AVQ2eQ5ruYyGDywXJC9Nojb8",
  "key7": "cZ9XHLeQb7RcUWtcCMZXE3PrSPLbQCeQXTCX18vSsRKVaUaPh3TSRrbLzaw9YNw2RsbpWFjQHVLieRts3sFhMxw",
  "key8": "3eR2nQAKYXw9bCY4VeD3E4EUncryXFz8QQ6F1KMP1YViCiUwCf9Nd6JWJ9MiR3CtewLeiXstorPUJFw74n4GEAGZ",
  "key9": "62to4FScBmn2KtCZkLjtqgu6cegrKWAKFY8w8PwexL6pfbKeBvgF67N6wairk6Tmh5yHWoUe8UBDLEfhagVgSaSg",
  "key10": "2kq7L8DUGUmn1aHdUw2iiMHUChrfwnEMXd5HJtscBayBFpHdgLu87M5YJAiMR27ytKdj44RgPekEp4EhcQTTLUK7",
  "key11": "5VQn7qC7XTYBjiNjgM2948RqLtzaK32GNUWMARsRUXb9uJn6ADYJEAD7FZcp2FxpWy13BAFF57PunobdU2dtaJmR",
  "key12": "321WhDNrhVyAD7N65pfyk3G3967LtkaEi62FAxRsTgSugksqECG3Lq8TKB1MPNw7ntJiRogMSwouUXvVRGHtJuxu",
  "key13": "3vFyKVf4KVXVAo99AXpUZrs5miyEnx4sfWdCZq4DHzrkdkEF3BrVLiDt5nZPZ4YMSUu5aAF8z4WMkMoXaS9ycCFb",
  "key14": "4yTbV1wXsb5fVbBfai674h9R3bgCR4235sVW9GnU1nwhsprQQjRp2cihw4XPGASU77WDrR9iqRsxPUuCDEn6EgSG",
  "key15": "9PakJVFmpVYwXh5WwGemAc4jUzcoXZYgAKRxhsYqyE2oqBvzqM2GMaQD9iP7E2op8viKyKQWSCt9jw4dGZkeA3K",
  "key16": "VeqFNLdekeDwzPABL1uwp9D6Uv2iX5JNZ7CZkzf6os8wc86gsxvoUDzJfAkAC1KyND2EpiyeufZZ26Tf9nYXGxj",
  "key17": "dED93VVbctoezcaLUQ5pTJYsykCKc5PoF1Kd5zqamyBNgyTbJZwWyhVgs9soHdrL74zjr4nUwpR4t1YCv2QQW59",
  "key18": "5E8fMWLEYQZ5NEnCuMXCcJh17eXeP2msKadRJH4HuRYD6baVikRT5htNBv1JGpXhNRuRZKrUns3p1Mp1evHBP6ch",
  "key19": "57oRLxxbwiiRTJbtZndZpbJATYW28dSAkhqWszbqTZTpGNjjHUsTckadmyf5K5HdsRCPcLmwUWxpUL6jn923rmLq",
  "key20": "3TJk5FXtZq8UjAoRR6W5yFnG4phWdbQprLRwxDR88C11ADmijnzEx8VuNM8zRnbzeY3fDjFERuB7KXBpCfHSdWx9",
  "key21": "494weU35JE963aoDfTjZLpogZrpM3wEisQYkQue36iuAQS465Vf8XWhMGidCRp4K47yNezTfEmBcU7eSGXTWSfSy",
  "key22": "3vdtGJHrUJkWwKXSJMK29YuXKeJASRRqUx3Yeo63Y3uwfsQduUcRpiiZKQS9DgWKsmc2Z7DWquJU3x6vcacojXpm",
  "key23": "GvXX3oDSqoSYJM4igybgGMqaHw63zSQgrJmt9X7UPcFyAEmUESNpTKdzDK9hDfDwesEhjr5bh3Ayu8ZdEKckqrU",
  "key24": "41zmXxf15WSyieVfAY7AUgWXtBgnzx2xmfeJo5jqy54yFCKQZkcmZTFyHCQn5Gnsodk4qpoVuwX6JFqhpSGDRnEx",
  "key25": "5bntB9tqro8jiKppkZuUDwP7CCnchrVBfCp7BYb8aePkryQMPRtXRNGPXnHX3vhAnmRpMdueYRe7qZbTBAi9oDy",
  "key26": "3WQSQd2qFCUVHnvtskWVfxaCtTZNEsVJYpCd7F1tcdU9zWjzEWrKCijuXdusTtmEL6noMqKYCTEEVafE71kASEeP",
  "key27": "5qMyAyjptUCKC9U1QpMar8KpbK7hqRiEkKRjC7BtXYj8jJRGtLdvQhXVKszdT3q6W5PdEBQFtiZHnnqnTmqnzfSj",
  "key28": "4AKa7Ch6ArK4YifSPe6TvihmNuC6FST9xihGJZq7iMd7MmAMbCBPKTUvgNxEEEPMzEfc7AttivhQw1GCeoRvyyhL",
  "key29": "3Arx5Q25bYWDFbvveqgwJA7SSwoyL2GoK3Nk6qegibKb5N5nuy3zwsRshvQ4VCGt9jNw3j7TXXQmdCc3Ldwt1t7i",
  "key30": "389bgthsQJjxACFhK7seAYZgpT9H5cokqXyZ68KNDLhm6aWA5JrSZfsqUAcYmAuVr44VbnCZLk4tPg2gQqj9qUaX",
  "key31": "jh2BkQtLGsyDm1jAxWCiN5SzJGTCThrn4Jgamu7ZeeDojyPxdUjzz9Jh2TQiGUA54HK9SZNA5AG494vKDt63dK5",
  "key32": "292Hu6QmA5oRgL1uy5tUkPeU23jUyUHtkCXioKUWvsD8MtNijVcq3r9cCzU2hidcfWU9WDyHcnaUKjWsHuRKXAWp",
  "key33": "3aYZafpPAti2nNbUYEEtV3mPbAD6L1C8KFQQ5GXwQYeAakP1ApYs626VsRngtzjUxUgjQwCo2oyjMoNJkUDEFu4h",
  "key34": "2NM8AjjRvxPds6SA7nZxsmTSKdtfvd7fB6daVsjdAQ1ZxKonSWjxoqLwqKvemR75Y2vH4QKqHmYxQFSpPtyvwJGw",
  "key35": "2NJGqo5nVsgbQ6CDCyJHQC26d473Hcaib9BFS2wXtsvsts5cPUFcZJ9vzyvikg5ia3SMLKyKJpzY37h6fpw9ec4L",
  "key36": "3oQnyGr1AQk9rwmNNVAJEShogmsEVYpH8Ek43dNUkPXYsTzBxYqdQVud38M2xJcFYfB2Fd1iL3hj32yKcuEP1WoN",
  "key37": "2rz4ZK6PuPaAmrSYzW6pGq42RY93G5ESy2Hdb46rMa8CqbPBLAHhJu9qLqfMfstoprxFkcpzirJspenBtLrmVuvv",
  "key38": "bPkLjgDLNjsGyKjk2S9jskhu9Gk2ySivcyKQcmn1yurt8iz6H1KcCx1VpsBJfqFrS3Nd5vQDEBuLf9rhFJyNMNV",
  "key39": "5tireMeh8SgosTSXaJuwMu85wuw5aAaPXkvXU1HXJ56sEMjmrsZUbdeKBrjK2ciek9BjJaPQe5sRiXLpMopwvbgv",
  "key40": "4njGFPw57aHTBbedggNSEeL73yYr5uJTNdjjTNYviAhFWZmTasTGygjdJxSJp1kqNPzJpu3QCFuUSAkJkYNDn2su",
  "key41": "2cwFr1jgQmyPJwkTQmqXUo1zsAGficAo11MwpVadv4FcdQkCXdXNub2J76t35ahbFnjWQKXZjbe3BQWf3a5xjnCr",
  "key42": "5943KhhZvsJb2fsaajpvdQoF6sBwBsVQx9dBPs2e9gJijjzs3hQ5sR7NW9m7RvXGpPyDYbFYgLiwohR394e8ehF3",
  "key43": "28DYLbPU74f7a6sihCRDt285CRVU3apX9FRYG1Go4zQdW5bT9mrw8vBVjVCpY54FMHQnzaChLnESuVDihH17dh6h",
  "key44": "brTjTUDws1YDFpjvJAm71dNQk6CgV7xHQGu74TzRbPvyELub5D72Bjcz1Bs6otY9Lu14i9TJYfa1CXuUvzguuG2",
  "key45": "3TzuHKJtv9QuPxgiaL3S6yFwKtEtseQ2DbY8BhQR46VaKD8bBbiwarbbcz96VWvJvLedSBAVW7d21jkXYkWEA9u3"
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
