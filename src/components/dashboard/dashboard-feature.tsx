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
    "63WDy2yH7zppKRJJyfTMpywkrQFXUHc3gAbKHVS7NBBQDE19wMxf6JMqgm8EvKq7diFpR1btv7Hb8R53YaJPVJ5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4psg5wS5ZwtZhKSCvDWQmePiEvAQyuin7BVbFN7hATJ83L27yqwVa2Df3JQ9hFkp1qTUpYLKGvanwBM1A9HWcn4s",
  "key1": "4PdA26pe4LW5TvKEBqX3ffyoifPpHgXo7aDSB2dtH9jaFRzGp2j7k7UFxhUpKW7HthhPNLBnge3jbpK3EboitRoQ",
  "key2": "2dST7b4iqj8QMM5Fo6FviPTxtg1PVmeR36umjynVDfc6c9EiqjRHsj2GqTKaRqg91fqcoEfzbTgVRwMMYAvKk3NC",
  "key3": "51RhnFMpT4Xzg5zAZ89fYsPcdQ8FvYm4GeepM2sxWu7EePabJfmDZHrV6sRLm9qb8WkiSqNGpJ6xrwiYvzyxRkzn",
  "key4": "2UQ5tu6hyG8EFaxJmMg5V2Mw4WwB6ZtjEqsiTKWSydFnsUQ2xYwVAsGZVXb9L6dCVMUzTViV8LcgA3keYzPGetk4",
  "key5": "2S5Bs9hf7dazzNQvHnbT7m9jwby3MP9Yc8eEV83ELZPeZzaZF8dxDrkJZax2a1y5YYQWD1D7hZLJYAvZjdvet7UP",
  "key6": "4zCmdARCWM2mDDqssSnZt1ncMn7BJZZ7k8zw99ocBY3s5BYPdMaWFs8Dv8DyZ3tSgV7kP1jTZHFnPC9LMkiaaSJu",
  "key7": "4BDRu5tiSF5Kg5Ftjh9fKsxubfGjLEvVQddzvCLCn1GARP4D6XGhRRVCV3XNfxudYuz8vkjZcvudAHpz7G8CnHZL",
  "key8": "46PQ9vWvcPeKRniDxvZwreTDDeXtsxfALCmdaemgnBZctLYBqLTJPdHwDQaJmAUNd6LcZYDV6f8pazJudNr9mynJ",
  "key9": "2hbX8Boqg87Z6vQH2L1mmBirXmUwK9NsUsVudWty5uFiXQNXkAq47VzrEjuYgwFmpjaBEut6yArnrGNSKujs6np4",
  "key10": "5pWch5U63cQP6czSjpwBKq2VZEUVD7DCBsuW847b8iP3YegdY4jdBNovozPmpnPRWcBN8dnYtLNMNWqFbD2VwpuM",
  "key11": "5LiEXHxeobze2iB4AcDfArYo2TrjshbxNrie3LCfRZewm3DwNDJQmCJbAf2MVLbV9P6qLwAHiZreCD9Kfx6PCYEB",
  "key12": "4P1sPRGiFPdaUizY6yWSQMe5yvLo6trsaiQxyqjjKuQV7qyig5Auaza9FHrPcnKqR311v9nSyBYAJhHxguNh8DQo",
  "key13": "3z3NAzc11UR48A3eHFYBQHwz1u7okbV62uKwvk9QEdSWqcfV4S1Z5keeA1dV77t1QGBqQ3jwe4dfgZranHBAULtL",
  "key14": "63NGdx2M7gPYWzcAoh1jaW9W3vvWDcawTTqgmN2JAMoh3xEKaJ76pAwTjXdCpHHrM28zdCR4GTvZLEHbsRB8ZJ4e",
  "key15": "BjYJZjmf9fxvqNfmkJGowuNfazVLNNXxLBsDjbV8ZzLMuYcf4oJ8GgYfQuLgJ35hfXJi4zvgQhBXEB6KdhPQkwQ",
  "key16": "3F7RwMWbhgnY2M2k6etfFA5AVhjWED4XTY3PswXqkdnejs7bp3wigQeVPKDHngu8cHMYdh6JKdPpubYsRboqtMfD",
  "key17": "Q8HNuJbLL8j4y5a14QGFKkyGxk7JqyrV1WsREFJMvVsgZEmBS5NgJpPLsYAKah8wR3EDLBgHSrzmSGaHj92j1n7",
  "key18": "47AiN8ypFMdYT27i1pXpv1Y4W31WJxmUuwrTusthLE22JQHyNmVd3xdXbbe2LbR6k22eiavnhMeeX5yk54f7WsTC",
  "key19": "BeEgiB27hRwLUVQHWrrtuHCBY3JsNSRJGCgyzTuSuK1yAWm2aBgrfv2ykhyvNWgqnyLFNJ3DzPVSurBry8iRXRx",
  "key20": "3xfinaspQEhh2GEBRfeGuUbp1yLvASyeUZd9kvX2jvfYUfZv9G5UFvNzUvMePUaSqe2JvLnpZmrbrt9ni1gZ9bxm",
  "key21": "5paLqpBqrWR3vQAJPTngKAS6BcNiRpXhMb8DiJ87Rw1eH69Z42PJSS728n8aSTM2EdYGQPeSJjeCLXSWWbMvEgBc",
  "key22": "33XDmaz1a97cJCKh94NASHqacUUhvhbzwZnR13dZggrhKayGZf2TB3LTUyqTEDerM4p6ArRkYfcNxwvPhkuCCb6J",
  "key23": "4eUVLkXK2k3TitH4CG7PEgyydQXyhDzNgepfWtmWhM6xHionL4LKv1xXBhN8hveayouQBkP4tYd1ZBbQaRxuezdG",
  "key24": "5MJS5UGjrYeLHqsyjrSpbtcMvjZqq1SfjpMVXKKrkbossroD4hBS9fpU5H5QuZXYrmfQLspS5iZiUZLBJEHY6PET",
  "key25": "5hARZ8jPSqE97BtTPN9WSqH9GAdZpnsqii986hNZ2WU719wzLbwSgvG7tZPm49EuieSVXdudz7Y5pA2NpTpaFudh",
  "key26": "5iAgzS8rTYHTCNwHx3iRNFQg7QqQTc2JNFszXV69rLVrFmWsQcTdzBekeA6cPEjtwKqVKbsmcjcNFyH8ghz7nc9",
  "key27": "3XuJA8vzgpwUDbH5rdkcVUcSX5tzRFYW4DnX4p9GfRTJoW1d34XesUPiHRbLp5YeQaQ6WbMVgYHjx1syV6NWvMVn",
  "key28": "3bNpmNGX3RtUHiZRKTJKRiA8nY3RSAGE4PXCpzjb41U9DTxJmGrnq4fFg3LQ2q8tQMcQCqp1C8TL2dRAWjbYUMYG",
  "key29": "28yda7FcSWZVHXqA85hZfXR491ypP5whu7V4qtbH8wqPMLRLx489d9ef6tAqhoTxLvXwJfh1NvTDnGSrivfwwvhu",
  "key30": "38PbEbLaf8kGCMpuhHhhrhV95m2UmzjXTLPw6jN6FJZTuvcEaT3J8RmvBZ5ZZ3k1eee1bTc6cQk7J4sETS3psNAj",
  "key31": "44eW1dk53Nwj4yBT4Q7k1Xs7p4Pz5ivoQy7KYuqiVdKHE8Zp7tz3R3GxK9NYqkiQMy62MK5HSS2BrMLJAQWiJRtj",
  "key32": "2E59Y2pUq9mkWW3BjDUKHorqftXrMhNXXSqRhGgpEmgdAaXNBupskvieXKX62TSzPWjM9SgEDwkAAz3hEgxP4efu",
  "key33": "2y9PC6uow9kq2GoSNHutsuBdAAvzvdq45vUU7f1VzFjEK6g1Zi1usWaq4cNvM3pYke6inut562z5tyMLutEhjCZE",
  "key34": "2yjaEGiXzjRRTCgrkHZJFC7ZGf5tAVQgxtYhBVdPBuKP9UXS4TnHx2QboTMt1cibiuYxEJ7S8w8LNwBwmGCPAaQ6",
  "key35": "2tSRenSRqCAipoiRUAsXwc6vbHdBkdZxcb17kcezCrxPK1tLwavCEfWaBfsqwE92KjtRktq2yYEG2pcUtA5n7rUU",
  "key36": "2pYRqUuXFBYKDsg5og3LHw11HjrY4GUx5E8m75EoBFfcdeoUr6pYkCAmQhruBUGSPkGXpeTPAH8NyRVWtJJF5eBQ",
  "key37": "3SMj2gC58NFkctFmD2HeE9RBVvX9VgYDUgEWBrwfRNxFVuY9QDscFWFGbtU1nBD9xRgpYA1CeXGeWpr4XXwttoLz",
  "key38": "54ngHwoShPeSxSKf2J4FWJ6c2QBGvzZRmahHb1Biv9LGiDiAAMeJtsFaP5Hjv8JWQzDN6KWnVNUzu8W3AMVYjyAv",
  "key39": "3rL52TEz9K2Tt93Wvzk6WHJuPSjHrbgKCNH2QwDjMFfEd2LVVNK1UAB5D7m6281mn2GZSxycwJnNpyT3XGjiALjY",
  "key40": "2STH7SgAB7TaHpcePqJXTAeZx9EBtjQYprYvfP7upCaiERBiL9WH6ivqGnQZPWdeGn1912MCJGhpJ6wHb2LbDc1j",
  "key41": "3XYUhzPiYPvjvnUCsLiSwdzhVTiB9wy8Y3PRbVGbH5Q6LkWFLNJWVhCqMGuJqWtknUw3MBgNdMbGMqxiMjqoe3CW",
  "key42": "3GLrG1Uujx9hgY9pY6UzoJrEY5RVYzvZ4mWM8TrPN8ypWtfucRUu2PTRwH7Rk5i9TNFNbErGScgYg2CEHaDyVirm",
  "key43": "4ygFKUyPEAtKo5kvi8pTcq3HZ9rWCDfjgypgpCTxQuUVbVkwMxqRFvQHnDrYNFjMdvmWQG3j46GYvQHZCnGVq8ua",
  "key44": "2EKqUr3um4rLRFKpV9fGr1wLxFTWLtH9X9MdjuUu1FRV9Jrye4ar9W1Jv2TekpzxCsoeScq8HNoFP36ccr6Vqg35",
  "key45": "5M4p76H5CUo69ZLorEidmLH5yVSPcX4utmnpdxjVVYS63gnA6CrAH4fry9DPy4BpSKhpkQubC61x7ZWUqwyveVjv",
  "key46": "529Q4oA4CBX33bxM7qRL8NEKx1yU2NkKK1ekKp3M2xUDhZcnNoJZpap9Gh6i5ETpJirGwwChPY8WdjR6W9FSYL2j"
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
