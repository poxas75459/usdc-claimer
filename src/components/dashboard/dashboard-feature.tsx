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
    "4d7tMYvC9JE35oSA1D2vRr7LXHQkhFcukr4zBnLeMSLBC7RQqKmayNkYQ2k7EPNhFFpZPULtFgcep4kXPAvDNif7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bensdRU2Po7zbC2dy9FgoXavU2itf8WjXnqaoL5KGp8oM3xJhzy65MNWfrcMhM1gcUZa3JayLqEF5NJRz4kx7uU",
  "key1": "5xA4u2F447cQAsjcRHzf2bfBNByzJDmmqpZZXtAcuMfQcJx5Mmwv4n9UiUCcCPi4jsxz4VzrVPDscqYHAAiHAdPX",
  "key2": "3pTMAyrfkEWCZcp4mKZvEuUwfmVR5HwXwE592WasNUAVH3y3gEVQ8eaSE91xQMUaKGYpcrrCwDEaHg7NZDy8fvRV",
  "key3": "4HvC6Z3Zdc77AAGwM1Sy6RW4bdzHfEdrCfDFLADN9WR8vpYKWMVijMxQZathkg5GxdzpzuY8xfkYDhvLkwhe4NJ8",
  "key4": "5KUsiBBKnUfoppWyLxmqZeCgBQjNqW46XdUosS3BcbxUxSe5Udvz2nQ9e2Uvymg4LkspsXrjctYy72ob4ym34DCQ",
  "key5": "23V8SULFHzpA3Xbcqxs3U9ZK3Ev3o2V6nuLms7PYjsekbuoKxpWUQUhXmnFrMSJcbEtJhoepfVm6fW2p5NAUDthx",
  "key6": "2dSoN5ZRKD9ny5SJXCPRcpKNEWRnodev7L9KU6bmuSmFyNQaKztp8VRWKxpjndHCZxPi3K2d2WpNa6FkCQDYypGH",
  "key7": "5JFY53iDe79udohrreKBtKTLJK4sNCDoJ7aYgz6RA76hd7gdZLgwCzbReF6rUHvTxMhTAgDdbTTPsemtWEwsx2qk",
  "key8": "4YooeN6Di19ptkUeq16MgybwLGhPCJJKfRakfGVMsDBE9gqYoRet1ddNh8Y1yNSoWxvxUsVVKzaBeqqWgjTXUYaW",
  "key9": "2RZfGSAMqrmpTPdGUL8BenhFGisAYZUnQ99mnbZSPcmNQZcJoi6Z7K1AqrwqLT1tTDkodqrgx1SQ12XgVkHzzpAs",
  "key10": "hNQoDWY7bjno8bYTRsM9MYxpSUdQKYey8LCrouvRgWc9bd9H4jFaQBLsb3GPrUFW7VefQuD6BY4MVmg2rifncU4",
  "key11": "3bnq8tvz1LWZEiAVXvNyHfAFG9VFgNQPv2RY3fC7i47yrRb2WScZzp7Z8U4uDZKFzXv7GzmJF3g8Qu5DzGj7odjo",
  "key12": "619PsSMFUYaG7xjCf4cVySqLTTtvuWezd7jpxY9xiKk6kfuAwLaSYa5jL493XrRKxYVtyF5CWoGgQGs6kTaNgHVx",
  "key13": "4NZtHfW54tGFTwc8skbscsERoAATY9m7w1ABRqqdS2Myg1Q1FYtj4nKEAzmebhbGuYZxgEpEEtbBp3EGeEV4syDv",
  "key14": "4iJxmoviKzbqY7p5p1s1tR3YS16Y3b2WYGJzB88AquXTiKWHP2PpZAS7nNg9W18A2chbUvq9H6UfnmqHroHxy2Em",
  "key15": "oKhzqgTGWqcet6eF9FeQQPfXM3M8kmzYZ1yRDTGbA7V5UJnNqKgz9ARRKgH9cPDXC2DHSmsiRwLvA9FLF5Jvkpz",
  "key16": "2wLpEwaGhXtEBaXYnf5HPdWNLPPw1DjXi4Z3cgKBskWice19c9inBBZgw7f4fRmvipQJMmfkhttKuz8q4ftFQXGs",
  "key17": "4bsuw6oidWbvDR54nJmdPnpW6mmXF1s4iV1rdpMSKD6aBszYU1mExseRDMX7HUYWHbAU6Hr311UMT8NKEEkQULxE",
  "key18": "3NJzGAq6Ahn4dq51cutnWFqK3cvS4N7UAiuiQrNXK114mX1uQYdZD3jRLKXjbB34tSFqgV9su7Lnpjx4MrZYXKpZ",
  "key19": "2UEK5NTytqS3yfujzrvwMDRrsnS9xi2SsTWDeSSyzP3nfR2MefJUceA6uktF63Jw78WqAjZYDDR1rGg6JVijYNbP",
  "key20": "2nE7doduKYHHUtNqfPWEJ61vEQ2zacHPzz9Ewz2FpJMdbeXknqmMj6PyouE51sKkcsR9oeZL2jAHCXkkqNgJ8SWk",
  "key21": "25femz8QZNtv38PcaYybekRkrpY2jjDkkf8JJTqRJAVAXx3DDgYZCVFaaagW7DPnRTWNfa7WTfo2QjDzG1h4ivC3",
  "key22": "61yKH2uHaQLdYJgLb64kh7FV87xiQgRQ9tMKkToLGWVgFHBTidavb6BHMsKsVneHpxUWiepgR9LgEg4gHm4RYi7E",
  "key23": "4b8RqNvmM7qwGQ1Mvd4j9s7i2YTM1GRMJqChNrNbNw25N1KNLDjssDYrGUC7KNCqHYqVLMe2EZBF8SrpwhGyK1FE",
  "key24": "49D6b6usWFvqe22LTgGsKyvGs4npJjktCGavUa1BRoVxavfcTkaW1uAX9xJgdMbZoEhUJ7oY8pZ1Gd3BaCGK5Tx4",
  "key25": "4t37CqZDypvbhzGwdvSTMpMV9TL8hxcXRpCt9L43xHDEFi75c4SPSz13DfpNenwvQbkDEvXbXUasANtjy8Q7TUgV",
  "key26": "2pQws7m32mAMxspvZzSv4HME3SmUdgUUfESrZ54nFvGmTvWfwoWofjHpDNJVEEeTRP2Axu6G2m4XLh6KawyJWtZJ",
  "key27": "4zBEZFakmFEdhBMzm1aRv39DbMbMPUHrX8VEFwigPJExJQhs9XGvbBkZinaCgK5Et59c1UZowFm87wnWiyyJHait",
  "key28": "2W2TZ5GwKHUfo9EvCfUxo2yLNMusnC75FHRjhLjUKbpTzbgGgCYBe4dhm8vyPMFxz7syBvXBrT7f12eHZBUtdTk3",
  "key29": "4gNbQjxzMPJQiyRZLrpDoX8PHiptbUszfVhBuCaXV2SAU4zqqtADCqcYzma3H84pHbVtupthh3HuDpetyfH9ADEv",
  "key30": "mtiFDE3nTcvKNYhws3Q3LXseXDT1JuxAL4q1qLyKEfCozCFLQzUfVCB6sGARmCRRP78qCZ65hconk8NrhqXbXvj",
  "key31": "3QYDDMvBeECWr7tuHpH5i5JdXzc4UGHaXuLJBott8PV5kXMc89qsGonRRA1XmTBsBRwXDC8HADsra3sdixHFfaBv",
  "key32": "mx6pgDfeh5DyV4QmC3V2mSZ7qHEZLDzXfgzgi3AxGXKUah3QHNVYueSUcLRFS943oJKXSVqqbo4c842fYVynE65",
  "key33": "5ypHCprJy7Nu7PZZaDEVXNQqB7MSa9MomdEDjU8zD7fWuFmDUi81Kaui8yieqA8yLbqHGqRAjVqdyyAkYWwTLgug",
  "key34": "5ZJxJk7L2bW8yT8np2FgYz1hYGP7eTLC3CHTTKoipApy1141PxjgiAXi6aDgpRRpuKCGTM9DZKwWzmBFa8ERcT7W",
  "key35": "2qfs5nweRUfmG8sF7B4JcxuSQgbzkoaMADnSoXjicbHpLhvUsiWhnSXk88trxGtEAKtvWq9DQRUxsDMuKp7ko3QX",
  "key36": "uaL3i2Hu3JbJnVW9dTD5T9DyQMLfEHvvTX94Qhj8kbc91j9rFg8GEAcpM8nBnQL6sRBFbMHypdFLM9YZV9skVm3",
  "key37": "3eNXHpLPz2B6gqXR8cp4yZ9jRs5D3T8LeGcoHtvQRJsDdwzFJFSm9UjPnG9HqHgrnGe5GpSP8tPgzB6K6vr9vw7x",
  "key38": "naLWhGadheMiyYRbCigZXYS871Jppems4EUKFs7QdCQAxQKYfYXFDEEjAmYcNer6VMECLqAhiLiZfii4fA7zW52",
  "key39": "56gVbSwnmdCSibnFVCp64Kfu3U4Qwp2avhJgixRuSwQx7sCJLf3nDS5UJmcNo7tKhwG8gbboaKxS3G1Kq3LKipCr",
  "key40": "4XDgVoKK8FJ3W895RTbJ5ckcKwyMpthD74CymsAd37RHmbVAmuWS64YLQY5rz8pS24NXZ6igJoTMUZ8m9cYUZ1J6",
  "key41": "5aw4QB8ap3jCFjCaZjZQkMy4CoSsGdg9yoN89HBQRmQdEsph23MYQS4SQjQJTn5cRJQafepNeL3tjCWeZwnceuPj",
  "key42": "63QkXRu1vraAhr6kSqBfbPN6guDYaTvMsPmEDiZCvFm8AmeviXfWfaWJJch7N7YKUzG91w7L9aTMW6nppaeppM3C",
  "key43": "5DgSxBczZbiAgFY1ZrEmdsi9j5BkU2btQu4SXRkzy9iy1Wego515uMSY71QpWQXptYHriQaQKZkw7N2NYM23gPom"
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
