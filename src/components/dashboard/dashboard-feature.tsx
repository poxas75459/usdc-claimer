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
    "ZUXxZJZPW6Pu3NmYsQDvzkzNACoEco4kXgSZqyGz4eTvXuU8kYz5iudJYSN9C3dHf9vAz2LEyRdK3z4XLC23NSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D62y8mpTF4JUXWHKwbquwrBkVt4CP6M46DxaBYXXgtqYSzUV8c2CS7eeAn72NvS9ZB4NFk9nYVNpZUPug4Jqzh1",
  "key1": "4Z3dktXUXCv1Z2iGGw7ZCeia3dxVW4x6t1EvQUdYhNythJw4t8sT8RFS6eC9zcBJPNs2fSrFaj6uQywDZfAk1rgo",
  "key2": "4msQepvHHv1RCJ9s1HUQUctTUxNj1Q7m8KbFqGCV4okAXLHmbKhUCMpwqRUwjxv8TAiaUG5e8BVY1upjDj3AW2u4",
  "key3": "2w6EEBV5jCzWcPWhgQJf1fE4vE55paesrkLibmARgpYb2YoGdFPtZVM22ZaCE3TArttopbEoQeA4ZZn2tYijJ8uy",
  "key4": "5KKoHcuz7HW6WRFCosJhMK6ShpvqqtqdPcs6a6qc4dustPkuDDLU6KuVUuS4JtMFkyu74NrnCthUc39MSeQh31Mo",
  "key5": "47Kyff8bz7QVhUk1muF5phqhA8QjQRB75eaLfjfxB8RLLxNWg2EkoTyfLDaT2sju7aDJqt7ghsqrH5QnyzFa8j5C",
  "key6": "3eti2ZHjEnrjuddLLgwk7A7kqD6tA9ka5LBwKT3hHi3ZVyMr2C41rgBZqvcBEzdCgQzuux1ZLqrVCaDi6ZkGnwja",
  "key7": "4rCt13d5sGAjNa8XFibpGXv2wvpCHDhXXvvY9F4UNZH2oBx4zMk8ztQXtxUTe53nAnSVFiWeiLpXDweTNAUqo5yr",
  "key8": "3JkpVEdmEc9i6GaNWUWfqMro8FKua884XKzpB85ZCBqgmBkkXYn1DqNKYTip6QYZHD4Zfvx3VfzdomeS2FkN9Uua",
  "key9": "2pim6hgKgH4scbwEsc9tCLCr3ADwtjXb6dni6xUcpUagKTtQbC8VnKKsJvA3trU4YqEXwAbNid3CGpeUEghkjzSX",
  "key10": "47Np2SAWrLu7YWHFKZdUbTosoa6ZqpnZqwbQHQ5iTDmAEq4eG6cohVPDd4KwHynGyk8MLHWgKa9DWXsS8g4Ezzx",
  "key11": "2MrmQEmJYBzWHnad8nXHbF8BD9xknqzBDDpfwQpyoZaATeMRpraPHApJczktLSX99z2gz6FSmgLBaxuHMncyidxi",
  "key12": "3qoyT9gun3X5Tx4fUoVkMViBePiDL8i3rL6pxuqzkK6X59iSB8EzWr9qAzNhhEoukA8fWLYUW4JBgxWjrFiGLo8n",
  "key13": "42tehqLNYrfTnuhiBXM366ZYry1jNeWYSceZU8wjwXJLZWt8HiFKNKL7p7oEELhwvW4RM3xqjwUcXTK2Y1cnBAYP",
  "key14": "3Z6EbKQmbFpJiXw6snmrkF6P6npzYVd3bwfjeNJjkYhdoBCqP5pTUscxLvH9ABMFFWb8VYBAfwfqEGqXrgmw2sCc",
  "key15": "UoKbXJAgrwugB2cu66FCKWwh7u7ULw95vaTwVtdfDFyGBozFsQoe9zntBg98YdaiZyeeim5zVAcVUjPUvhtPjBy",
  "key16": "2MwegZkmsZj6PJiMiTZP9si92n6TpUeNFH2J3xSw54EqaqQhkmJ9vfK2xntNZuqyZV1WjWQnTJV8Lc5LTELNmDpj",
  "key17": "5bZwhFpeFLiaUPQBcLqMX146yTAwwZCKBRk3AE9ZBrC5FK2BGGXTiH8WGSzoH9dGBLrjzZjU5nXBV85U5vvVcyRg",
  "key18": "5v2xaHuAp5Dd9yQQp1YtPy9pFgRTh8DgSLBzTMXCLTbgkfg7vej5aHqLU9uJ9mM4crf18Dao8fWfjAoaKqSPVyUr",
  "key19": "K7gNACwSuqWjUih8hY9UNPRZDawS28pGaEwMvov94NF4eBSRujRBzzNa2hdnU4GushXeBBUdBGarUUATfUZzoGd",
  "key20": "21VtrqEh8fNUv5oJN6p17otvE8Vkhh5PDyxpw1VFojBxVmaexV7pvjsbTdyYFnKUdpPpaqm13q5UQbdetVLxh3Su",
  "key21": "kNtYXH2FquuWzZqEQTA7vjHpTDpvXfBerkpAYYJ2egtckyKSrZJWr8viUpzyadKLNHYSCjLtAMhQQ18wo4zcwkk",
  "key22": "3rAfCmj9Gt3uiYhe8g4U4NSGL34pqch9KG3G2SZp6jFufFy1dVr7ZxPxqGQBSBcZTHipdPSWDQrRKzL3kVUFtyea",
  "key23": "4WMSfmArhnAfVqFwuYXsXq6jaJfpmodKBzAUNo6CEzDri8yasC6ZHe2ekzHEBQyZMwdFTrczj18XEnmWD8924LQ4",
  "key24": "2UMsBGaKL3QNe4UChuP8zyHXytLQNSxa7qKMAeCnXbWZfYbCn647dMcasELxvB6pcMybGCgecAgDwiporLNsCjJQ",
  "key25": "5ZVNDm6zF7jqPg31b8b1qwwhN2NbdZNDhcy4YA2FQKNf879nXDqwynjdzxNWNaQneRM2Rb97GYfgXwyEgJP5iUjD",
  "key26": "2iVsMXVkXWDe3xBuiyWdLSeS6Q6SRfrvRV72vrpfsnpj55pNT3JNNvxu6E431sHUdcBcn4oNN3q2jiUafCr9jE8D",
  "key27": "Jxu2pfrxnDHfTa5u7KZ2fAEvvxpybXLytHfEyTtUMkL5Cyw3oY1ZZDJZh6DfmP6KBYyGPU6SrZLVjmyefuC9rEz",
  "key28": "4jtPkX6GJakNS557YyiBcjsUtSKK6oLcMdGFufwHvKtueBTQhXeJb49FBEdLr3Qce5RoLwbUdrFLsWx5ppkEswSt",
  "key29": "4fppd6mU1Jz5k1ReTtLSE2PctF8CeDb8DMMGVTA5zRo6sNszLSQhGtFM6HSAXqF1NpAGgo1c5kZy541LPjej4BaN",
  "key30": "4dgxL6HH6MDRcQoJg23k7zUF54mGhT1g1zEuFE76b9jd6HPm89Pgib4Wbyne8ZQrTXzQHtqL7KQGJ9Ljrzgx84M2",
  "key31": "4gq5PhJEPDX8UzCd5xmt4kz3s5uprfiC9t8uPgVEfmLu1KgTXkXWjuWpjAXRmz3omECokczUScdCtoSkXHuKM5ed",
  "key32": "21dSBFaE2sxieZVB9mXhnotvVCmDMb1HQqiNZLW7DuAjbLBiesjQBtECcwvEA3dGsVvP2S6avBDWoA1zD5J6TgUF",
  "key33": "szDCmBEmHhagNK6eLHqWGzMc4fyjjJs56JAqf2uhxGZUYx4gFAQGsdKNpk7XJipw2krXPLSqE8MVnrBiQz47Diw"
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
