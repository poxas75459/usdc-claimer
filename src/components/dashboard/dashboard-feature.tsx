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
    "4WAoycLUFktxWAkP8UHWiLPiFL3CDEC1GtX86GTE9Pzo9Y3eWUx9pzwPryR5vdX7sqfb7sqahWE6UUXHFqoq2eqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8kR3thaPZkCjYvwWh81poou8ckNSps1ANJFb6W7CGUKjThDesKRgKjuBDWeWcaJMhuGccnwcfxxU8MzCAFeUcf",
  "key1": "54DGqbyFsoA8ffdqqmu5tFDCzoE1LoySQ9nHEdsJyer3neYiKKTBxHrWGKkMyFgbK36W4g5zhLZfsiuvDoe5ogad",
  "key2": "53gZN28nNJcTeHXpgvdPsmuUFsuMjAKFgjb9FbAvfsyig2HEJrdJLNHDw2hFRHfdaQgeDqJhidwpkHcYAq9CprA1",
  "key3": "sEoNnzUc5tgdedEMYYjR73uSHoY1c3dY5Mg4wJeys3ybTeyy6PSAjN81iGeQ5a5CgBTjg7XdxtbwX7fT1eS2UyX",
  "key4": "24DGKqaDpnHpFLgbT3oqGqZTj1R37itDtSJtQof6uTKa6jzQMKb1BGsYdgdBvXhCdkPR4Gmcjt5eGydcJV3neQbh",
  "key5": "5z6Chp9HqSw2MXMhEj78MtdXt14JfQhxYCPazyTtzT6CQX1T6roGaFnJTCjd8ocDh92P9wpNfkvZdiieCo6EJxW1",
  "key6": "36P4jzieJCnZW8c64T6m4DJ2WD9vpQWFZaGYi8p4fveWfMhHSkjknLiRRN1NFVTnvnuvpSEwT7boiDAzStFC2Khv",
  "key7": "tndaRH5CbeYFDSrA9WNVtT1Zt8hUnG4f3DwzyDJCVs5e6tjkFvkg6PmzcCzYVruipSnu7Soscc7YWtdBv54pCD5",
  "key8": "4v3meJmz87RKd641pqJXMrb2H8SQWpEPvaNpMzRpUswPNDNcbAQKxnuBetkEbdXKetTqL1sNsAW2iYSenac2W41G",
  "key9": "AfxnuXs1pSdXjjvx98wxy4nXsLM4Zvdj6aStL8s3JtUwVnco6t36F2FFKx2mKfZ5hwoPzreQnviUnezcZZyyNSZ",
  "key10": "4pAGmVXypEME7jUwah7LWjpcFWvjcP61UktmuqeQXnNLwqZCkJE4VbM4B7HfRj8cRS7uBqkgQstzpkmPDe5WLeLC",
  "key11": "4jBLUoE9hLzycVGUGBHcBout4fEBFYbWhcE5EkSv59o2UQ6dtpaAfSTN1Yo45WqzMJnK8Y2TNB4kvKHfDTLzA5aW",
  "key12": "3FyPq5K1DSTjWPDnPZx9tWgWgoedUANPuUPQg5xQFUdbkmsW9GFSy4xCTyGNN3QCSu4D57tnhZJbAywUvju5fmXL",
  "key13": "3YCAteFQ6DYTbkSGhqjXWfLLbXFjMTbBmkbs88uxvE1t9ABN2ppNfgiqRNPtC5x9LggsaDiQy1xYSqW2FQ6wRiJV",
  "key14": "4R8UiGJKkcAP5odVBYbJ5Pb6LgD1JvqeC8yEwZJddn71Wu8LnzoQsWZB1TxntC8aoo1Y5xPo2T7N8cHTkbGHJi6t",
  "key15": "4uVvTPL1oN93XTZC3Jo8zYLV4MRm4phq1YJs2knHeCz4tHSG9dYbDuHnhZbmUbNtwr3xz3UUPyFJcbJJbr2PY9RY",
  "key16": "62sffY3wPFJ25wSSPW2b9156AqFnDQaHV6LYFYHLSCsu2nHF9AHCfu5WL5m7mUnpWUCce3s8ua1eBYzMh21B3TfV",
  "key17": "3V74QEUZSwsUQEUqXPRXxeyBpJeWPm1Yn5525zePtnfLFx5yxCWZEUDAf9qiaANYhcoQ74ns2akcDWWbeRcyiz3L",
  "key18": "3oVZmfDetffDtTiafYaHXXNkLLojaweMUir8b8PXbir61n55rSncQk7ep35t6BksvC4fRkD4GcAveu4N81XyDY7A",
  "key19": "4UQWXTEQD7RY43ene6E2yiRxttZHVRpGjXgxQRKgB4Zv8xNZyFPXnVKD3AyL9RpcGjZYPvEomxNFpCokZY5LrmzR",
  "key20": "3uUc2i2WhFfToMf4nx9yKLEcMWoJkat5mLTfNEw8TUAkDTmWVMfE8DhGztYzB2TkJpgKbgB2Zeky2ogovVCtMmVG",
  "key21": "3MQCYo1Wer9V1uXJYS86VM9cfXtnom7P9guNiYGHuTZmyGRsojxpHVKHHUzAtsvnKWsUsgSLbVvRZRdok6UpCXXp",
  "key22": "4dvt2H8H6c4sCKDNUw6DkGB4cYZAgNhD4uaJ2ytNfcZZWgspJti5jphh5gUamahNrdgcudshdbVoqZgGQSPap8tQ",
  "key23": "3BseHVkxeptDG54sqTnD3GeWwPqHh9zXWXfR3Pe2rdpgo7MWUkxcR4wrhzx7qz36XMwSbF13njw62q76gUgH5t82",
  "key24": "4nNfgVvhNFxZLqxPj3hV7w86Ueg2h7iWsLpGqZP8NPynaRjfiKFSmqEtz79iPZFgie8NvbRF2fMVbXvBawd6hYbE",
  "key25": "3HXfMLB7mg4RpcXeDSg6ofpNSPYqNzLPiSQ78XQSn9xC4dWQaMxsDq43c1YqPTadho7LzdGxqZynfZsUVrMVsWSi",
  "key26": "qvVfzFrT16EUSnV1jjw1NWpWKCUstKdE3QFLppWU7q9FE8cCdq9UYpisjprPpKtZBMx87ktdMMS7aAwXvyCph1r",
  "key27": "3pi8PSZT6XhRuXY84ReCjNmAMRLuUXT7MueEyjabr2zv3hFpgcDqmdCa24iCyDU64CtVAtNLH8jkxR3C9hcrBpSv",
  "key28": "TzwPNERGnU9MqV9qRzDsvgGwH36Yg2sYPmN2G9kxFV7jYiUMREYMrzHXTfRtqvd7zH6bm3BaYKGE1tmKEgFcBCP",
  "key29": "34jhGs4ntPkUsU7cFgicshz82oBxzfvEQNiPhYvHqa3fjmuYganYTqq6H4NJyXEFtrBgyo6ZtYjmAujfgZyvWHns",
  "key30": "5qGBhKK84jSEi786uDvMCYvnBtFqZwyW6kjzNqpVf1jQ2oWLdttcjABndDu2yYTqwhQFrEDTJgVqhnFtvUYc6CbU",
  "key31": "2puKfjduWw7MvLtVUBZARPVyDyxBsft1YCv6fkhjj5mKxrtnemqYm3smRe8H94UGRdsXwqBXs3Bhypbs8Ha28tvA",
  "key32": "38S3YZhYTBcDMDYbpx3kz1gUGCiJajw9wSeaLAjDnqcejfhPeAuzHN3avv4tVMYAyxywXjh4mkh9136o6HqqK5f9",
  "key33": "2evQcR1yJYqRg14Ak8EifHCaiaH2S5vCpx83FeBF2EBs7E9BoQrDYHVTL8aFspVoaAxgUnwLnhhFDV4EBT2HFNG7",
  "key34": "4ixGNidLma8v6GWcfEuTbVavBbkNPdkU7YJvS9AsoCp2pPr2GDNFhkGcsugXjmRx6x1NmjZ3hMRV4Y8FZjSeb75V",
  "key35": "5iR8gsAnWxwryv3XtJFDddqjtKkhyW77FdHH4D3cZBMDTMvEMjZJ227TY8NyKmc5f8KcGYSUDM7Tgx4Vubz9uekt",
  "key36": "56ZXvBC7fy98wXa8ELDSCHn9VqqjBed7VgE6gQp6qWrjBn1jBpHc4AaYGtVCE6Tt9qa6VEdrCiTQ9noLukNiiQfG",
  "key37": "iDEsWMfYs7drNYcjU9tndh9mV17kABrzVGqqqwEuzAbkKkmqxBzyDjAmzFbovZSEoAyrQuRPSKdxuPHpcG426H1",
  "key38": "5GGydm147minnqRajMS1fspQF5ojF4otKicyQonuo9YMJumF8khgSbdd3hHyToCjrkT545HccJPAi6MZN15XdsVJ",
  "key39": "4LNxVnCYFYRUNfmWKyAbQmvt3fzUTRecgJ58ezrHKKBnVESLEJ3uNq4ZF5KEhrns6YtsD9JbxRNF9pwNiodcpbyU",
  "key40": "3xFuHVM4WBkGEcV6aFzD2FAg4yu8Jg7HaNciNNPEb4UqUw7s6ogy77rRjTWAiUDg52dvGPeSyiiJdgWV9FdSC6kP",
  "key41": "vmoRKEnnXSabX2iJi7cQ7SsN3Mhogqn4MNVvwkDbjFAB1QxxtEu8VMRBSrrRwsDyiyT6vSehUKUS39EV83YBqsP",
  "key42": "2o62VSg2Gt4Pyd9nLPTjGT9MJ9ziGvBTQT4Edg74L1CfsVnA7sh1sfMbs8TdrWJJHErXfkQQkXz8hUER5ZraYTqA",
  "key43": "2Pi9YhznSLuWE1YU7LkpFzrNDiJKPxqYxUVrW7iSdD8RWBniWn1Cv5gudstbQFyWANFua9SciHBmU4HaU8UQp5Np",
  "key44": "1LT6zM9LoazDMrpq2DjQkdPLtiNNELTRVapV4zAd3y6Pcwhn5yiu8k6uzgs9QeUoAVB2gXsx5sQKgqbf61UmFA3",
  "key45": "TZzjjZnUi8yb93mrk8LXoQ1SXFTXMGvvZzkxB4kNpuWdZuHY3nhymkq2bFFAGLzU8C8YK6EJK28FCPyvUrwJ5RM",
  "key46": "2r5vrjcS7A33FBgRra8KQRS4knaGhpTD3JhnPEMXWWjouqpnp3dsSngxzYcAQ1VbvU6azTNhPpCwY5t7ftbV6emR",
  "key47": "3MLkSusPVsxAhiyVQGgqxGhSnHZuw2GiZ83N8JwUXEj1YdL3b3Uy6LWNifhacayePatn1VJW6296vTzePFFZAb72",
  "key48": "kGqtYG66Nv31XSdv8NtYdWBxjwWPMRTsnLHy6zmmdyWfWhuYT7f3fodzb1jr1Juw1hmFwfyu4rHUhH2c3a6XJV8",
  "key49": "SARHNUQTMgRKGjFrS5Y9zeshk99yxW6Lf7C1zeTgKhnfBkVRjLtFX2nMPWDNDWctW2h1UXwgN1BcTDxfzf54qfG"
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
