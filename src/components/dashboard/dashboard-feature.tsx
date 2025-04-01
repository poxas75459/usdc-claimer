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
    "2Sm24YDcKkMPFCuZHscq2AjhQdiwEGLMRdffMnyfqmAA1qvuFrejDqmjzCiDnVLtgnQ5K6PNiiBnSj2Dwt5LkyHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FC6nXjhADWGHdAhuX3U4FXUuHqvH5UUF35eca5owRs6oirHMsBfqSd37fpViouxK1Rm1sKEcD2hhPkCxw5erDQz",
  "key1": "4y8TSdvW8MAwufWJ6HDokeB3L9hdMR5nZQT8Dnc9YihFvs9ZTh3HKWNwrNyCWvxVqEzNBa9ejiXsLK6k7ZJ7CyyS",
  "key2": "4zTNrrCYmre7jMBMhyrKysvwc92Z9wqRbZNLsSLwyjghZaJyvQTevLp64xpZui9AynVs38vkiYMULJJ4ryW77FdV",
  "key3": "3s7jCrveLQVkJJU9cxPjpJ8WU72JQurJ6sKFhTZTpxREnwq1mLRZvMZU37EE2adr69FvfeRvBFrC5UtqmzDyk9gx",
  "key4": "3HS46UYLeoXyaqb6japQmUAiuvNEZi99XasWDXYzaM71vN5qDiBmFzMydao7hV2NY8b4ww359RdnsFd7pBXRqYkw",
  "key5": "XRMEjEZUrHzkq4hzTeKVJib9C64ekqqMtT5op56eWduF7mNNJHRfzjhWzdUAko9TFfXsKaG1ioWUfMYjKgUzhEh",
  "key6": "2d7x9M4FEUBrPWs5XygEHPoA3QNfQKtbMt4mJkdh4cnMeLuhbmaXAkwK4NRbN3mHM9qEGVprNBJGty1YEof5JygC",
  "key7": "QvMaG6QLiRrU9TyNKHipnRE1cgqe8uq6gQjtFB6JdVL7k8JgiSdZJLaxg5wKiTghnvktMZ9mNvJgmMnxXVmbG56",
  "key8": "28LUrWFePyBossXtaq3awPqEQYkCzNep8oyF85xgHMjM8HJLXaXdsBFh1RhEZMR6LKZTp4pfWjxKv3NpR2w7rei6",
  "key9": "2vNsXsDbDdZvPqhymKBXKK98vw4imsJTTz4orYAASbXjDike9gRq6HYZdbo1uvQc3tbxqaQxirjjyMtxT1JvcBfX",
  "key10": "3EUixJQFezhDjCK822f7HBu5H1878sPJGvkuRraKtm2wf9Gz9k1pkSG4rzkTcS2jbx3pypbcFTqYBN97H814gu35",
  "key11": "2oBKwUC3rTEcgYLuUGqgoyvRgiCPwg1jWdpXE1YVaEowEqU49AXTMYuT6NtYhFXpxTzSXU8PA9Nqc8e584cJsUSE",
  "key12": "3czjehjgp75kcy5HvXbRAtPDevJk4FKLgxPwBtbnAzbCbXHEMPyWZmMvPwvPv8WWP3DVtpmgZHjCvyoAPBSvK647",
  "key13": "4VwLUZz3nHqK7GpC5RJoyP7cyfjpTxK1XfgSMEMayVMHM9rL57sNRG1DMHgnj2Q9BXfK39EG4aGqrC33f2P2KfuZ",
  "key14": "5qD1QERD54HqyQLTfZmq9M8MRv5mZJmmMezaBDVLdDm64srStNUgXhBoTWVTf3gerxMr4VGoxnEmvvaaQuVqSo1g",
  "key15": "3WuQWhmPvnXkNXeSCP2Dz1ZznS48NmGsYrMrCzTPymVhkWhk5vSgfrkqvMJ8dcPM475P2SavMpK11XGX8agdJsTd",
  "key16": "2HxwXtHcjNeVokL765zv92NPTXpadCpwEDv8YJvtEVLBKjxmk4BwvARbLLWmXGvPuZgbBdzVcfwszp6JSp59iRUG",
  "key17": "kj9pGA4nR53Su3CHbEVo6LRdqggrpSHXfLGA8SrPhARUHMm1ys4Xaa6HjErJAtpzyTN2P4PouzemW83dmJ65QAi",
  "key18": "3ExXas5E2XnVGU7Ne1rNKZySensUNeDWf3LTnrdxJwA1xnPCjG7TTNc7ksoCkfTQgLLw5dnyAHHp5CbccLQKcTRg",
  "key19": "3uvTyUBQ58rSvVdqeW4UVphNnWYh1WBaK88DdSo7sirdfcUA5ttGF2vsvaPc4mDZCR2E1CmrY7tGAwS77njmjBed",
  "key20": "2NsR7aVpven68sESkZYpkNFRUyVB1pd14bMkLXBWh3EePEKEzYx8MyaXTEQMHsyiWDFSUvjXPmbGz5f5kd4St49q",
  "key21": "A8nBAhU3SJ9S7JrXM3Yn2titS79dctXSnKLTBTGwTY2sgb4f82zTdngxuzESY6dBwDmZpdRndviQt8oBVjPFMg6",
  "key22": "5stWX79tGSAstNZQk1K1XHCxjUsdvDtvgZTVHK66LRWUbSKCPQgrZq6Xo6k8c6cVPTdMyg26M3qsAngwafKD94ty",
  "key23": "u3Ees43GYVhPkwM7SpQLvXyGKxd9sLiWPAbwaRA6fzbbmgqWFAmZb2hMHPZhZ2GBfGonpK6hG3BDwGbpLfJEkuz",
  "key24": "4B8opWbdcmnwk3c1ji6qNMJoDfmmZXPYkmiuUyb1FoGEdfRKk5fXMGoNnSQ22Q2mVw85cs1MGEUKubai7DWCWGPX",
  "key25": "4y8v8sMTSnC2VucMWeZMRc4YdV6Y7QnGg9XG4eotvJb3neKp1fhPkWCVQJKpaiZMhGRgHkT4LkRDb3hHrEDu2Bt7",
  "key26": "5Gh5XFrmpowSrVM5iYe5yTGJnbfdz1KSCPPhESkWgWZqhXjWr2rHY88rXokMKLjpfh7JnrKHL3JeuBfQJ681uYhG",
  "key27": "3CGh5RSW3m3eGZ3BfbRAq3jag5U8zNwFP1iD3jrnWmmCM2eJmrn1wPu4pBNSZTVf41L3SSt8BRKLbUbu4cNNpkt",
  "key28": "2dXpvcjmD2qWwfyGoghSh67z47yEzdG8AbNZDm6gXi1nJrFzVyTZyejNnHWfTUbaVoJ6omu55sZ35KoERVcVPkdQ",
  "key29": "4syABNYDAjvrcz4LGfTY52LkcAnALvH414xuic9bNoWjp4GCCWZUKc8UZf8cX9Ne76X4vBZY7dBHHg6kW4UPwoPB",
  "key30": "4Q88MGGp8DRaDtdDiTFTfvk3uWWZVBQJDQAUPjqdPokxbUgpQyNqbwMK6hAwRJxaZ5Thju3QisTWvFYnsyg9Eh4C",
  "key31": "vExM7uifyxh196NCnufVdwhGmEiAGEbBWt5iLD5kM3y8KSb69qU1XzACiC7Wf99txFLtjXVMnM8yXX9T62pR55R",
  "key32": "VUAceho88L8bXissUanc5GL1Y1RQTyLPvcHiYCWJbhcfdApwZSNNm4g7uCG1Wno4KLRuKMoNzzDb7ArQnTg4XUE",
  "key33": "4JLgfoSWKXcLDKEkVvV3TQvujE4xKvWDrEDD93RKhyXQu3TzxRyxDjafZCEebp4yj2sHZcJ952kgvx9Qg1rApbEW",
  "key34": "32gRPnSLCK79oePcLjYr3Hj1vyuD59kmuTygaPxsmWJ5hoiW8PMS2TVQx9YSkaMqdKLnSyALktLzn6zfZJtX1k7G",
  "key35": "3mUWAkdxfRuieWMXuhTUxWvLgLHy4e5TbSXvWRm4RxvAq9PEwrdMqmfxQxARYNvKz66SiH23cE9K4vxXtQEMETV4",
  "key36": "5wznYMLwvWFyCC2nqxx6izPaALkvMUyEzwwPDdQK4KMKn9upVpmsF27p3Hh6EZg6h4baZcx2GkjMdLSW27BpyHAQ",
  "key37": "ick4t7Y9SqeRV2DyhV1UfadVFknkMd4qhFSS2AK3PXETB9R7UiPACFpNY3wHyVisjPcRXGdrvhqBdqAEUrGRG4B",
  "key38": "4GrweWfMQnfaiNf17bZDSkhksbTEcRB6nf9Dt8hoxjPqWR8nKj2Y4V8ppeffobxyjc8tGNbk3oKvSNo2epdZXq48",
  "key39": "4Q69Pmfox3bzfdziPfF4SLiPmD8YxuPzmhYHiTbWMLxYdsneYLq5bxa7EFxaK7CXsWdFVetowwoYhacYyQi9DRp4",
  "key40": "5ySfVz6x5EezLJA5DdMnuP3e7YMbREyE8vbf5tGVupfYdCmEnRHnmhGWq1jtnLp8qrPNrE7he5nSSTvWDGetNdpw",
  "key41": "5pwkaLtGV2LzxggfaYXuy3tRm6zZumtKh7tXrkKyRDGoSjpEnMVdXeJ2yVBqUugBwWViB5kUUNBbvELzJkd8yrVC",
  "key42": "4JWJ3jK1Bo6ksFHB8D4Yg1hF9BkcfwXthzBSdZwsDAMAL5wkDanrEpNGqGh2TrKt1M6akSAoYuB1goB3G6VYk5J4",
  "key43": "2D9c41ukp9u4mt4K3kbnxGpdH7Vkh5HafJ8sW8NEmmmoPVrf7zyqUDVnzwecTBr4bwTS2S1bPqyxnAw5gbaJv2L9"
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
