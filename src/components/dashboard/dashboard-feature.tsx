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
    "3atMY3iVZLBEGpovAm7cT9ibmn9pkCfM6vzHKcUk97fxju1hf2okW2ZQQR6rUKHVxNHFKKvB65M5C3DYxHnjz8P3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ykcwz4K4YA6Fyw6kdNmLEGK1ATffAEmXaccaiD36trwNAsRdS6Rs6z1RgNDEqJPz6F235CWABHGL79aGjKa4EGx",
  "key1": "4FYFA34wHDdYP9rhTD5Q43hvSxpEpThkmX7P2kJgPUYjc6eNhywsMPW3WNJKX1TTha7rPRHj9gQKrixs5PtU525k",
  "key2": "2xZtsNY887tfJj38MZ8Ugs1X1Ybg9jWWqhPGUMx4EQz37jhRrLQoMuSubA2znonTD65SZjqGTgnYYiGBGLAXqRJ7",
  "key3": "3fzsEwXHgd3Agv4WkRnsAhEpg1bnmbfwb3nqunx9vrWMZJ8FNfyhqMZ9NuC5t2hhCu7vmsgbCN11ZvJC2rANCGce",
  "key4": "3xdTUTsAPPMjDZcfxLrqTLiTWgbD4TpFATawfKhRgswi4FnvxXVGiKsiX65Jhny32GSpSsv4tbiwGcGF48qXUReB",
  "key5": "5KmnC6S1gddZrEgne55Eqh69UZG4urfrVtze4HwXDrsCWJhjzj71LSKgfQTDKDZ5KbeZF3qPRdQJ4KdfbHmyCkYD",
  "key6": "4oNZXFRMofBc7EXc3m9x16grPGmUGCiQmux4DC2BH2xeCTWkNzvFHQxENdoaNPdLwuqzAmZCsEJxYRfkGQVknCZz",
  "key7": "5CuPdK5aPRb32xPXF31kDFUbGaz32JfXd2jqbErC5huB1ZTVG5R3Boi9z3hX2qAGVYpZnC57VwG7qQQNREgpv8A8",
  "key8": "5YhLxkKgi7yNAC2TsBKvim9UniDS6Mn94Lh7Do4G6jLUvLASFLrtKXc7Aw4Zy9xuC26NbCf4FstgeE7UC7zPJrpn",
  "key9": "5fTmKWj6NMEfoa2vHDoLX9qDCS3pPNVNNHBdtFWCAZTjEwyp3qys4vCmN3PAkeXVxyCNP2sB41JRLYkM8wa4Wcth",
  "key10": "2mX9txKYmdndhLePZdnyMhpwtjj4DpHeRKBr31ADQhKS9JLrehAVog5ToHFyMnDo37NqsjsthckdHVD6q1tS53kA",
  "key11": "2vzrHN2QfQD3XobZMn8d6uScccAJMAx2RMXKf9DTiQwxvJozvY3gwTKeawc1DRgk54XkjJzNeEfE4haMgXB49XUw",
  "key12": "337S2eeA4a5BMQw4ciDH22pobYDJecDTVjY6XU5A1FBnwJ2mHu1vpXra5A699gaTP1QPjPeEtVgBfCETCTP51chh",
  "key13": "53HGpwb2P3Mz4z3pqvAAFc3zjLbiYcvjcwhv4LKkmfnNA7z1WFTx1otV1hV5ahMc2R9SmwN7hsC4fnJzDKsCByxy",
  "key14": "25oZTKbbiPBy8vKriSQFHwfg6GcpZ48XrUV2KuNdB4CtiDTKgVmrrzmYYZ5so5aNTXmFbhUUGYxPgSyJQBLQ3jhf",
  "key15": "5oCwD7JxT3SUXkuUW6yD3D2SWFUaAoArJvkYRdMQb7rH3vgit15VrYGpTjao9GBFWLidbwzQvUETinXqKyZVcsiW",
  "key16": "4etDGcnC8jgiYKJ75MVXiU3Jfhw7QynDNKPSLKWCSaAyuherAn2j1U5sKRdKPSJTwKAs1w5c57S2Sx66pybnSuGu",
  "key17": "2UcmFHmUaiEDp3bKa9GJCmiNhgqeVnAb1GzAsdHo5RCrM9ufRV2uZcoc62z6YJEYgxYncrvgE9o1AiMqxysYdRxW",
  "key18": "BZjjk5U9TYS8PrAMLHAUywi7DBcsngw7HR6NanbFgqEA5JQWbJzM1ANgNj4fjTq4xj6SBoW2DER2ik9jxz2dHeu",
  "key19": "58XaJE3jvSNS2YChGcDn72WE7XEx29WoxQHnoRZw5qbPyqfbinQQMiFyN7RufyZ8YzL6ae2QBps9nS874Qi9MVB3",
  "key20": "2mx1dje6mV1UyKio3wd5Fne6jkntMMmcNTV2hCkPi7FzZjkBSLESGQaPQL1FY6aHSwLdhKAvMqAi4J1WYsin692p",
  "key21": "yJa7HVgrknzNkkU2msdr6utcyboe1Kp5zJM3qua3NfMqRf6t1ZfBAdEV8ABv9M3qCKfdLVkYCJ7mj8F8WzniPxz",
  "key22": "2VyzLdx229YhnZkG8ocofbLnmkpFtKE8fLh7CAYmwYkTDZnB2hb6S3Hwn7FndtfQq8E468UTk8pvXJTPu3z5F6TX",
  "key23": "5X89vG8LEqDDbu7Lfkf2DGuMhyVcJMdVYK6GgDqFPQsKfVDBe88kLB9tjdc46CZ16dwAjMvw3D252g2HqjFhtBAs",
  "key24": "4BGLXjn2ke4GBgnoFFFZoaLZY1yKqSbxa47Hjy5eAtRQg7htvfTBswb7Zq7PvDisx5sWLQPfEevt2iq2y1FUZVKG",
  "key25": "ZemvAWqwP43nrSGtxtM3i4EgQkfGUFYpSVHdgrgCbK3pj8NF4V91T79ZEFjiQiUmKy34cRe8mMt1LYrCqnU6hhC",
  "key26": "4snahu4nZhgaBPcYYVoctaParjw6nd1qz9DvP5v4dGodtmEJ5ytKwv2eUVBaaL48bfm5p5HMxDtUuhuvVNkDxamp",
  "key27": "4KMZ19yPJEuDgfqpmkHA2K9n9jyKxi1zpF6jk6YnCTZE1nRbuPTmKuBLg3YhjMdkS6ceDP2QfADcz5BuzLDZMxWM",
  "key28": "5wGWPPWsT5kyD5tpEu8f5iEfRVeGPXbNTFjzoXmyy1LrVnmrqk9YfmsL1mhCTKf9VfViMEXsi3hAqQyD24L8GgFB",
  "key29": "39L9Bn4mHJiv8FEHoDDUN6rwyHyddcH9osY7baSCnQqfssaBpfgWchoipEeshaxpivn19JPnb2rzQxy3wgd6Yvro",
  "key30": "3zdLbtu7y5sj6CJnHw6NCM6TaPKQuv3nTUcG5mw5Re98DPGTJnwc7VVAdCWVt4hreXizE8nQXn5iwosDnwCBYwn1",
  "key31": "3EYyrfK7HViQvAV56DUhyWWeR4V2NBBiNG2YBrMAibArE2AL2dGUt28xCrQPP8owt8oPb4EstbsvDuDgv8JYN1vh",
  "key32": "4M6DtsejUDd1Rce5yV7Y3bGK38X27LL7Hj532eWdJYthnwCg88NCFC1j4ntPPGQx2iVdidA8zAFCLoGXxjUyGPNo",
  "key33": "34b8QCaACXmLyFL2YkqQzeExg6MKR4S9qHs9hfvvcWsQdvkVqzRvMVFCedsybg4JAocaSrC4mykSVn3zN2aHgE3R",
  "key34": "4NCBXmNtfvZqUBHBEYtepQjc6VFy77TZCYdTxQZqea5eAt2VonWTT88nq2u8Rh2hyHPpv6xoy4iJiFnW2vu8pcB6",
  "key35": "3LVnC4v75s97djBtJVABBPJHk2snwyjcEqzYhvcofXphSD4UQ73Gtr7Ckf77dmqEW87SxrFNy4f37DUpKNWQodqL",
  "key36": "2WMDoEASpiPkC6Lxw6Fvm6hECqkT47y19Ga2b3366xPZFxUHnQMyhg7J6TXAhsmwxgVVZRquDJT1sVjLUbaxs3D8",
  "key37": "5DVMQrN5pjdgBmR7vicmWpJkSqaTRqs6hMunhDqCsQTygfRSWCiE8w9ksJ3cHYMYUcfb1TVAyACvHWDBnK5DTtCi",
  "key38": "9ziE1td78CA7N5nw4R1fLky22vHWiiYkc72ySX4uF4ytUCtx164RTYtNQ49AWcChHaTJ54qvLMGFkvMc5gaobMR",
  "key39": "PyDgqmyM5Pn6gLvTDVo7cp5UgpkR1ygKPafXApcLhbtcvvDtEdAxMyerEWFRwxjde9CFFRGknQVbpemeanwS3ss",
  "key40": "4vz19hiSF3XNPtdmiZdWisy1cgRZP2HDwq9pikQzeuM1RQ5GuQ7i1w1kMve3UFWfz5Vaa6bEmxBPkFkHyLVcZKs9",
  "key41": "5pUpofW6Czc5yLQr1gg4GvBnTe6Kt82vaNNEPQFqvsRkZLvaBta72sN6rENC9KRGG3RiCQYUafMPvrHghbVAKvQ2"
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
