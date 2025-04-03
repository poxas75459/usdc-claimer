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
    "DcbiLd1E6L5PxCuzDzuH5BsoV3ZnQ9C57jFKJR5CYUNTa3qvgn9gaETfvMqRcEzUcP7dtUTG2TA1hFmVMK73ayi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vxhcLhi5KEHmYdQ5FoK54R4fKanqZXAH4RhDnCj1y7MexQGn4PNiNizqC4c5GJ9wzKqsPC2fKbpvB9KsFpbRuFn",
  "key1": "2QjRsiX6ogMjyLgHUjgxJQ3XQchnnGb7PhKLfL2mdEKpzFmaoh8TJ6bBs3CdUDGhohK1zFKCaLBuaG7RysRfeum1",
  "key2": "4ZkHUn1QZLBe19GibWhC4hcvcUs3o6fBRsbmtaQJjvpsMPDWtxXCk6J15jDZThcVTBMAZBReM9TregsM2vhYvy6R",
  "key3": "3raavtSWq2z3CJpf1YCeTjsuyRktkTFz83sBwcz1g4yzRyj28tK8Ee7rKsvJ5CEvRQ8WjgNfGmymWqXKchWBNCU1",
  "key4": "5wXBvVcPZYp45QFcynynCFVLdRnrfvKQRmUM9G1hjNh7vSdHPWcjs5rBro42dqBfbtxxXK8G8PRYjyCy49JMKpe1",
  "key5": "5bKc9kvQZjFihzCQM6149nD2gsEA3cGDK4GXGNvC3xjHvpGD4rBzZm8n7vt9mph8AxBgnd1zpGxNRmXybdfw67r1",
  "key6": "LfXKG3X5HMmVgK7TF5ATN7rUsJ2b5YvzyvUPeFxKeFyFg1qCRurzH9CEgQznaBDHTnYNCLtEhRvALxVKYkET5Zx",
  "key7": "3drekjQTHHNtztgYybiEULgmhx3fn9ornxf7wH3SgTEKwkhfWmq8VjeeSPrNrXUoSGkdgtafAyvSsboX1ZY58jKk",
  "key8": "4MAUGd2fnUsiCibu6iNjxCsoM9JvrZcMdqy2MXJa35QpLvS5Xg5MrPzthkudB8b3WS1RWhDWzyt8qZb8B8ueCgs8",
  "key9": "3WRwmLfGAxk1T4vX4RqoKAuZZmRLAJ2PKuHBBVzS4RFL9SRw9tcTvQZEHgZwwD7C4dyP9tAQh48ps9wfn6u5rDWP",
  "key10": "295vDDad9AYEW8qvBVmh6mrhGWfpRW6dRjwY8FhcVVo9aUEkqATe1Wd6XUfDcWiKTT4i6EESzGexJtACtFCMdDCp",
  "key11": "5PNidBqREpUJs4Ei9ffmgHNmd8hgNqrDHJu8vPD8R3SnnYycbk2nF8iskzrMRZB6ApwnGrsuQUthHmn71jfUpWd3",
  "key12": "8KSPMfF44TWF63hXKMXi7VhxCNxT6jbLTzhNFMpGKTrn61w4iB7s2s8fijWQuMdai8zHNG2XZCAYcQ5sW5bRDBF",
  "key13": "24waYJnopWZrJkbMh9vYX7mPrshFxwaZXbYZfmucyAMobXodRnxZW1Zg9siFMgtYw6LLWDLEowVhoWXQT1uFkyjj",
  "key14": "2EnE9VSGzh9tyQAtcraQXWCm1H52oWm6kD4w1yjAUhwH47ui66i6fP8ySUC6ucUenEk6GqNU28VduHDk8dyCDgVX",
  "key15": "NBGuZcEtNZ8j8vPPJcK5QiLSPcz1BBbaHcecH1jESesKyH9wxHZzNAXFqt8psGYqFhtBwDcdDDLXwS3vMwoC9Jz",
  "key16": "akLSZgk4228NMN3bdtf5zYivXJXiueZoUwHLaNy4GY22NRj5VvezfeQ5Ev25PiA9tbeXD7kwTMSLsKKMCJgdKyB",
  "key17": "31UQkVSVcmDii1ZdjkeXFRqjYJZUpTMkU3ADnYnfiPvoGZg31Z5QxHyBabw8SKzNzWjc8CKbHmJBu2YbxugGehsA",
  "key18": "358P91jja1BQYMSXgtpH5HcemMDE5kvHK2UeTDFPXugHfR1f3HDkNvtYdwZDfNowB4uxYb2dM9yRuwRTicLyyTS8",
  "key19": "3TZ5R8SSQo8RkWL8QXX5AGtUaFNkUHiMwwXQmaxFxeeJrjdE97c2E2XFGXEsCyqhXdK2y1fVb92SXev6TNnffnWS",
  "key20": "483NavMkgtXa3X9MnrkvZyS3M3FZSbN2zhJs6wgVLpUQNkqZBUypW8z2XCVdSEJRYqgWypu6t8e9nMLTVZq69SeU",
  "key21": "2a8r97XLn1jmawdf4tTkhZj5UCgdoyngEbQHdDh5EftPsWkUjCJB5PSPsavixiWkzBamKz1s8T6wuztVaFSzCCQo",
  "key22": "2eezuhkvGK8m8ME7GVqgs24b8FZ927yCgRroeh5P4p6SwFri5226hWgJ9z9z4oaKXhB95nqwHDiuGkanV8xsTVNK",
  "key23": "5MUkCwDwoPWBxxatNbfgo3ef83Nsv3NQxJmUjttaz2uqZSbJ48rKUUZyK5Y5eerCH9XgHNVFvTdefJmM2Y8VZToj",
  "key24": "3Rakab9j29NACCx6ZpMu7VcewNSmWcv2szaEM2h4v5E6NE2ipYKgdBKVfWBcn74MDup9Y7qxW4f2caauajKseSWg",
  "key25": "2FZ7nhvat6yXwFu7jVKWnX2GMXw1g5oA7C5Kd6YR6wZnabwJRT8z5D78qi4DWTYpM9zcHEy2QxReivKc4PYxD2Ae",
  "key26": "3eimtK8odKWjXJzQctosHHqAKewYsMFk8W3Bt9Wx2yBW5LC4WHS6aU1js5aXTWw11qdcURLK1s6y2GLDc12bDqNv",
  "key27": "32DKQewT288yK1xJwTVrg91RyXhAVvHU588d4pRAmykEC5mBc88H77Rr2oVrk973CnjBEDMZt7H6DotPJB5VzSwU",
  "key28": "2Sc8YQURaHuBGfYz7BugnYdACFnkGkfGQAsz9SxCJ4hjq1a9ufaXWTNPNkEMczpt8q1dTUz2WM3CANC81DuaoL7L",
  "key29": "4t8HNYvkr41xbdct3R4wK9LTyfmYzkFPhPHUgvLsHSbro1Ss6MrFM8fPzXL6dgNrk8b33bynzUY6XcEbowW8UXn9",
  "key30": "5ihV1dv4XkyBaXDBMzVZuTdfSPqaAYodcTdVQXmgMbwCPcCb2VEyqsvn4MqLrivD8Eintxur1v3U6yu3Usqtnonu",
  "key31": "388dXNGqQzY2GH8tw8j1txJC934B6L5xffSVD3DEqGoeb6AyX91iWZWvwHMHMnCVDXR3ndVG1FrKtqE77mH5dazx",
  "key32": "3PYPK1BWqEQEiSW8QW6uY52pr2YQZNPQeriu5MPSBMTBMvBY63r9XZMCiXtWSSzyyo1rYDv8XK4yYGSGfojTTaei",
  "key33": "3RNPbQJ8v4e44asRvZXFUryd8S64dMqWB9FXa9ykYFqZuLrQ8Dm6BHpTEioegGA3j6Dc9fNnUsU8WXGfmVQ1CahV",
  "key34": "62A1F7sDAh1qy4PMWFYsUDvqc7q6gpaGcV53zjoXjGqmosX2ZQgQyRH47H8pLv7EBkrpwSX3C7jxh3N8k6HMnM28",
  "key35": "56Hz4MyM9GZboyogczopK9gmY95J9AKL8kPgsbyABdBqxFM1iR5GkuxGuFyvZs5kNcYkKQKP8tUkZjjBhhZTEW4F",
  "key36": "67SbYGUvSFSUbTW7LKricxLYyobTm9BHXTDaTi6KSwjUfJeBsmM3ogRN88mwZc1EoGCseV4G8ZCrqcVqU13PFixM",
  "key37": "4JR7eAztVJ5c7E6BPKfb1CYD1CGk6rh6Axn7hE92w9qTbTwydvn3h93b6J1LtbvbBFadzMy4XqHCFKXzaFqs73k8",
  "key38": "5VENwg6dTnpXaP7F88fj1P6R3iuoHDDdbJHHemKD1K4ZnNgFTA39a78zs17QS61PqamTMBpVqtspYyEcu5eEcoZk",
  "key39": "Qz6k5f6hEyZPQEeiTbQ4ZySk518BqjL8jQE3PfmvtyqfvoMaghUKz6wFtwZzm35a9S58yFQNXECnYSMxsa7sT8S",
  "key40": "2RmfUnYnTvP12BS59iKwhFNtYXE7HH6zmuz4vZwusVJxpU6P2RUK5gK8FktSeNfjdMfLqfTfNVAfsNsKgktRQ2c",
  "key41": "2pSdSs69Fbk1U3fWZLmH6KJ2jFPJ2ZzD2epdeJJadrFhbATKsE6PXffggrwzUpasgZ16NDWh7yDaTNbnM4CBs3km",
  "key42": "2ReRK1ahcucoqdtEo3pmyC34zta3BAdmgaYEnYiFnds9n3zrXB2F2cb99jg7VQMvQa4RThuZ7eSSZ9eaCuYYJNpP",
  "key43": "38vSe7RRCCzn7pWbAbwLrD2HBGUiBoBtx6raTtreSea9dGx3gPHWPivsov3PF5o28zWEzzbhGZbmmTVhGVzSZkZr",
  "key44": "2MjayU4dfAQJz5JuGUrLB8Xxr6KvJ6UDCa9535XLQkfbAbDtHHLtD1F6B7vrCjwFxzzaMYdkFwo8Ty4QUqV238Fx",
  "key45": "5oiDd54rxF3t3NApf9B3EXDthtR1qV4CjjEyWqmf2VegRg5512HNyNFPx6pM2HoZWw8L471CmRRd19kZXdQVbaXR"
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
