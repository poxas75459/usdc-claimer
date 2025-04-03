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
    "3hv3pi1NUxZRVep5xqc9jqkUB9wzWMDiEdYqAJuSjoRmyFSxnW4JdHdj9zZwb26T2sMbrf4q5CtFmSJo4yUntNjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tuA1h7hDY4eECLKauwX9zLAP7ztyJcBxULVtX5nvdhC3mJAvXWwDdSj6e8SCBou8nbd6DiSBUktd3vYSuLTZMvW",
  "key1": "5XRn4Mz8XfKdYP2RF2oKoyS8zx6XcM2uukjSuMsJJSDJFfGnZDqS2jdrooYnwUmoFPuHRxkn1781C5SCicoHxVYw",
  "key2": "2b88NPVoqURkkurksXKGVLgNS44XbbgdJVE7VpEdBb3MgdoVnkPW4mGm11UKhgYjZsLwDRQ6jYpwbpJfg9k8UxES",
  "key3": "ypzLXPjBoZmPGnDCEuxyTVLNY9zxWNdRJapkgJ9cmZQgmPHpseMK5ajop3S4Dj4dt95xJvMqfbCDby8jXR2wT7D",
  "key4": "cFQy4rBKZsmj79XBYA9qgcToBsxQnJpuNpGHn8dms7dxDK499bPhCtoAYyYAJi65PPqbDWenDhBvRFFjb8Ja1ZR",
  "key5": "4VVWCndHom3wUHTmWYjUtFDprPasCkUmqTrKV4egtoDhyFU2zMcjm4928AjwC5q72YY4RQqa86YeeofDkKLftEgw",
  "key6": "5wt2RjH85FT65u4LPF4SFRpMoLbVeZ3cW86tiWTXgt1XXoYTanaKA4EQpvQjzd1q9uTZc6BJrYUoZ4VykEbG9FYS",
  "key7": "NbYPMWnYUNwzjNsSz3uAUCmpK7Awm8j8k4ZEcU3Lozx1pxjXBMo3cNEP77iE3JeTdvyqq1m8fqxwdn8V7BdTGJP",
  "key8": "Gp7S3kUJkuZomCfMwCU4rzEQVyHfE3Voa68ijdA2FQ2QMAuNHJQYwxtFxwm567YKG5LWVBnpo7wy2UednMdnmNN",
  "key9": "3NRvZdaLFpg1nc83r7Mp3xZJwDJZD6sv6FYpy46FdSuAiEWZeyf1d9G6A8Xar8XVX9rHPzpMWwXBN2rzCvCZE9db",
  "key10": "4dYkUeXDzW1AjezRvL5CPPZV4TNaepxL4hyPY4vATJhcieDGaPPcxmoHMLzQimoNc9ao2qs9VmG5xXpKRGbvy1Wt",
  "key11": "2jUpY1KPr4QuYbkpUhDAoBGveYwY2QL7pqHy2XpvTc8sZ7asZzqd4MCj38EHDjCwdeL9zdFMkDfBFSVsQouyQd6Z",
  "key12": "r39135UrbG4WtcqkGo1hxWemcfBxsrqUA6Hy9it1orPHCkPA2E7AjPPaWcWqxwHvpRysp7BAmFVbxAkqLVqW2V3",
  "key13": "4kXKt9v3YxWdZAdGx61fkkZ4zKjvjiQCzJ5mhe9F8CGuQvWEyX1CjiMjZb27sqJ3HDEy723QqpPazq9ZCuZz2Prd",
  "key14": "5HUVYbkmxGkrUG4ZVekBBJF7Vjrj5Xv7s41FECTBMgriLrEWqvv64AXSQSXc9yfd7gi5EZnToXtU9patrW98MLeR",
  "key15": "29b2Ko3m5GBbphfaLdiixeyPRXHN2nNMzsobok6xMKmzQiEbZfWma4CQKG3uzdYAhxvynGLfUnLJUxxPuWSSLa9G",
  "key16": "3QbCdo27JKJxij9jSxwU9U32nZMoAifE5CfoFuSaMLFk2PbYqy2ktrqi56Rcd8Bt71H62Jy1wn99biQQd8gm35au",
  "key17": "2dPnZPF3j1PeK3PWwmR4qFRhgcULWcAwRQ79iTAPTqf95u2W3tVnrtBMnBSwq89iKxcEV1qh5DyL5ZA4xJPykTV",
  "key18": "4fTyuiBbkgeC19spRPAMmXkNYKPs1K3Uf5RLFrrbAponm29XiGax6ttFnKb3ALVxTpK2z9FraNgX2THQrRqM4p9Y",
  "key19": "52iou8XWuC6547EVp4R8DDzt2J88tgEAE2FmKbPqCa7NTgRCYnVxqrJQfa1X2annuEq9PvZdEe3z14dbeM8EP5K1",
  "key20": "45nEDtu1L7kuTtWcUwqZPo2sbDz7SxfcEpWka2bGedLCEHP8wmLd6BmkXJEGro6HwCz6Bhzab5vbZVHxdoK1AdZd",
  "key21": "5zYnbg7Z1zhUBr1iFTtRkinkBuk6f1iVGVVcqhmGoo3Lrzf1KiSPqmwyD3K9XhRZY5VXYBi5Qmu7djMies2kWSz3",
  "key22": "S8EeLcDMDshzNbsREdzegYLtEvg9d4Ms9bs7QYG9pYTUfxNGEb9iQpbXA4CShdGxaBr655PQGEP314AiqvkNdEF",
  "key23": "2naWasCRM63RY3cz6CFhECLwU4YKxm1yPW81Vo6w3uNm6BCdWqRNghvH55pJr4djqm3mhf4eoad9Unc3u6qQD5TW",
  "key24": "5M7Fgh4A9eSX6ZH7acGq9vxSySinVS3XAMT8kLvByPskaAQHN2e8y197EPxCVNAdmuTJY1vriUtq3kp8tCPSYSoA",
  "key25": "3LSqe5HoSrRzSxsM3mELpVgHixeiFmjrgsJkvVJzY417dY7xvuxT3aP76GHd6h4fb5N3oiWyrurNNz4oQKhJVZu3",
  "key26": "2PL4omz9LGYik5Gk96eN6PKeyRKn39V9Sf2RHKKCAcrCvuRoxiVE49hZcdiC7NmdTvdV6XamKgP5aawj5ys4PwHj",
  "key27": "4EAJrijUxSLBo6VmerSGUYstnVoGv3izw57UFPVrWuVLyY7bv1XQLy9bd8kDjF2xDeUdJaq8q8dW7449hiFXjEux"
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
