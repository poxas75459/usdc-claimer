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
    "2N31p1WAQeRAGMFGojEnbreMWLvQu2TV5siEEJoWvLsNn412R1Jwbg39qx3HSBRvAgQKVXahH9ktdJR3FkJHDVah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MQeZ6bz7JY5cTtusfnkBsqLMRPxXUChYUYrYgoj3AeNDz3QgRG43ubrwnqUUxjaTCKd2hfxhGSDSWo7UNpyYz4q",
  "key1": "58Smb2sttbo9nVJ4c755ruUNFBnAT13jBiJZTEk8hs6gwbMJprBNWkTfPwtHv7sYiQKf3DZeK2hYzxB5D2d1AWKK",
  "key2": "5AL7L9LLzsYv14y5pLtrbgsuduS1UBEwnerRBf7jCDJ3KEw4Jcphtt8Ud88wU1J12a2rbaYBx54cDPkqPkY5H5EK",
  "key3": "5R9MikjPdo5JpKd97ZHZd8RAa5L3kk5FqCL83Xzhwm3Z4tqUpwDV1YNpofTowDY9iuULb9qK7ou1gRaMtjEJpF1v",
  "key4": "2ZvVNL3tzSRDAv1Kpdcus6VL5KVK3NnsimMYNH2LUsVdNK6L6goRZ5fMEpQbfhfhKA4PG9VqvMNcSUWxAnKcTeuq",
  "key5": "2mGHk63SfdnyAjxn15rex7SdQmnMRw6PNRgytLzo1FxqRVCmALEYNgkarn3CZqPZtSZmv8dMBNHYkQ6M2vxiTbCC",
  "key6": "8sZNfwivRvepxE1hqNfs68gQxmsz3aSuHvoujHcAe3NTQexAMpAjyKS9ZYNraw4LB8aRBQ4zwpUsfuphGg9zeAT",
  "key7": "4XXgbi9JwZqsJ2G2ohmg9VrcnYZH92tJmqKMGgU8BFPm2x44ugUKpyaT2QsVCngV6PAMnGY676UCmzdmfGua2v5R",
  "key8": "4ZDWPJTcM4gV8TCqr5k4PvNaRBdt38r9sgpcG8HAdtpt8RpE69zD2VnUCekK6biNhmV6LWz1k9g9GgyKcoP3Bxg6",
  "key9": "5JkMacdwVpZWpy368gxQcP7LVZo8uELkhCq1CpcFqaR7TAVa3Fya1Y64kziqVQAsm7ZbEoYbKGtWJQ4EXYTsR6zC",
  "key10": "4AniZ5CtLKbAgRbeSm1C8ks37xspQnBwLw7wVuhRnDcZBXkQyMKG7xMroupxnY1qMCkBMdoaEEPpAzS8U5JuJAPY",
  "key11": "2z3nc5vDJSpV8e448Mp568gLfyyG4AUNGudcVBYP91od2RTMW9eptg9vfkjEcnFkVaCVJUj3HmNPdMxQRC9ZPcKj",
  "key12": "5nRkaorMzr29gqHeDwdhg5RhCEvcwUut78zR9uH8appBobMBQHZ3GhTrfhdfHwxhDauZctJ3pknncja2EkqgYQpJ",
  "key13": "p6Ur76pBmxadkubuwRv5Xyg1byp86s6nXwQJSghnqzGMGJcuf1QAo4cHzDZjhKkAXBhDdFWQRrp1Xu8RFi3tUSf",
  "key14": "2hHwP89adCoKK63qjw4gHACkiRqVn8hYpmseVa3yf83iCUJnJPdMVyZ5w9waLQxQTa7q4mNpWmFrcFGxR6bpoDT",
  "key15": "52ioRyra7mZ9oCzjh2dfhNuxEStRNArXkh1oWKMZXjNN69pdwTEn6DwVfMttZMAkY2A29h9VTx7e96BAkwj4Ncd5",
  "key16": "2FMRHFiP1o3WezSwc8PGLhstcepLcwGPQ9ubJJMWaNuvKox9KYW9ALUd2hhpuyV9bpMNYZ5qE3jZH3mAko1PDoTa",
  "key17": "x12PjJTiLk82h6YpzmLgQJZs3VHUodoNdSjc75edkN1kzNw7WhYoai7NXMWVVuvbWawSmvXRCFWUxC8vywVwpzT",
  "key18": "5r77au2Qi4S3hS6nMZXDUt1QoEDki1kZSWN9K7JeMUV39pcNFQxvM7EKb4kjvavgJApCg9CSGUU7yKxbAVvnaiii",
  "key19": "GoWzyPUZvVDaGtn4RWFT1thdPnLURUgxozR5Df1qxsnQzQdSaeKVzGeJPodC4pyXvQgjiERn48895yJYeARYRsJ",
  "key20": "4KoMWte7C9iePFnnRuzu5AT9d25PdFqrgtVmdM539B8zw9LgFNi4drDENGgJUU48ZMb1DVPidxeARDy6MpYPXNVs",
  "key21": "3RoWii46DMwsFTSiQ7n7JQok2u7pr8W2BbLGEeV39EnRzbmD9x2S9TsYZwjfa3gVKctfDC5v6Ja5tT6Ly77kEE4U",
  "key22": "xsMpFHDexPpH4PfBUHQrxaZxVjsrCphgF5XqrczjokjemCNRDP6hNRuRVaQTW3wqvFXVyLvgZ815CW1qEQqLD6S",
  "key23": "4eYSyT2VXGQdM9zUxa5mYZxVD8VM7i3aeRRfEzeGQaoqqiSAwzEAkfTB13JfTsys7gtmp6J58EqijebivQV7u6Ae",
  "key24": "5NXJewJGjiaprSYDJWuKtMRjpVgA4iBgXEB6kFqPmTxpE3XfhPUBSXCjCgtjYdZvHmVR2EvgjVEGV34TP1tGBXyV",
  "key25": "5ZFoRsSuMUfSyoqiXdXm91EmudHK3Qo4K6FFaTJD2pAYZt45HrKkBXq4yvUGkeVYQ3CGjdjU1FqnzH93xXPGV8ng",
  "key26": "2z5ZiNDE4cPSqqi6pLgZXMAKDcvbGfhKbo8PBkArbBfR8Tv5PYUDyQ4qronmxJbtfwAZmeRCE3NDzBAco3C6Ym76",
  "key27": "2cP8qCgpZMsn7tq7QLAgBppcxSrjRAgxmPCcyouBeZfi2CHaCVtihKdyooam4rDejCVCS2hyya4vmndNZ99v1geU",
  "key28": "krQ9pHpe7UW14CPQLvYiW9EwDHqyLjmmZZexRnNsJ2hv7aktm6cFUdbNG9UGUk1P2kSRPusNHxfxXDjN1MqUd6u",
  "key29": "2bG3ow6RLoa9nLuYFSVrjvAwJqfPFChHhUcLeLHv9upNN2hbGjMWq77jV87giCBgbrbAPqjS4xguP7Z2a5sc6YRf",
  "key30": "5h1mWntd6fby42APSnmxThMgNuPzixzKqdNAe6iJT9e3ZUSEYouP5AKpoWFyGfWw4oB7FjSkAP3xP67oa8bkL11x",
  "key31": "RDFFMhuEhPgd8g8Bb3MX8QKpSJ6hQEiyPQx3rL5ApKJUECtYPEUDtLjBX8tLUbdDk7pr8YzeQN7HnnnTqEZh9MH",
  "key32": "4VS3S2VZwJZ31a5yijufZeaLP2mZ1MPHtSWXq3BnGWaEZrgWYBeXMCdyEB3PRA1f59veKaFFm6dLM2SdriqwsvJX",
  "key33": "q8rxbkWKj4Rqsyr6gqNS6gVHvv1kVnT2A4iyqypfQdLun7NniLW45bQBWQLNyG8LoS6b1dZ9avGga7ttyGjioEU",
  "key34": "4SWoDhXK6EEYCiQZzwmwT18j9sf7D7joMaogDQNbQptKXitWeG1XaZ6ysuCZnkXXQ6d9xct3FYmVTKYBmQLGXYNu",
  "key35": "h6RqRce7HpeyP3AMPndNqmR8Y3EFFeQNeYCm43ScxwYHGNbkvxLUT4n8eivZcuoQK1Ky3fZVRXsvCmJciapzyon",
  "key36": "4vBAzhHeXdtYSG4Z92wen1kFybvywHAuA5MX4BpAbxREFAgdZ7ypDie67LeEJ2s8q6TJEXRtvckqCjAwciJQ6dBQ",
  "key37": "wz3EaDBtbXjFGwjpvBi1y5QcGb3u6NC1BnbptDnyTKuktcK63RwzN8wbYYvg1NFKDhxhiDRbWu5J94Mmp5WvW6S",
  "key38": "2mHvgfMwmJJy3HZpy77XaUE5QhAJkhe99GtYBr9xpKKPvN5azVGfEGeVf2bEGJdVwLi79FHQXKsUGFXur6REuFfb",
  "key39": "hV567dWWeLkszZzvs8TeaoF7RJJ9oZ6a4hWL6r3bxB1uXe5GHCe9dgiY7P89AgenMfxuLTwqLCjCgPAV7xU4fCf",
  "key40": "4rArTs1G3NjzMZeGsAnHtQWPugCZT7ccFBgaKSsga3LjC49bydyWPM86mxBywLA4fJZKFx1PAgbuvXsRMxfWQH2h",
  "key41": "L4hNssLpQGXBQY7Ni6gUkotUB2b6XHRGJHRrTXTLWGh7LgyWvEU8sUqYiaugLRzoCZ4KDqHgz9UMEEgE4ZkwEa1",
  "key42": "231V6fEKwg3yvWegVXMMkpBYjxsQupPMATeiT29kpWK3d59kNfiEKP4pdStwSwtjjoDjLJwkg2F8rsLV5VLQptrS",
  "key43": "G39jkWZrfEb4MePhDjLDSub8K4xQs6cP33jgtdYnNc8y2xmDFedA31QZg6BBPKvssp1QHVVNhXY5hVPJEhyo1jt",
  "key44": "4yMPxJvszv2YdZuwuhaxETBkSDutdgcywF22e1APNofTki9Dz2GJ7dfzmywNcj4aK4Pqr8dZo115PDj4sm7ewg34",
  "key45": "5ENVqJm5wp5U6iQHYhkxu9a7Vf5moYjBxCfYzG6HAQZqifEckeC1qxmc8f6DjxyyV2aWo8jGdofTz45FGS5Nrz6i"
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
