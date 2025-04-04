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
    "4FxPwj32mK1vudP3B6UYG4j4HJGJRprGVf3KmKimrA3sEKguogCXeoaZSKrhbwsL5hUpcoQ8xEdm9RDNH5SH2SaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g6RcqwksdASSGzYDHxp6s5WLQ3nzVs1G5f78VRWvjsEoHNfiVjHDXXD3PiX2wnf5A6kFt1Ycmj1c4W9apZuttkr",
  "key1": "23RtYr2iooXpECW5B6ojmWGg6wnkhi2FryiqEvo2hbK8p3WXrdBTyWAqGcWrsfCo2NtkAQ26D9gxC4eW63RxF3u4",
  "key2": "2BU79tepoGSmT5M3hZvCkZfS46YWbNNJMVwYGVrC7MYWWULhhyMqS7LsLqseXKsAGXtTPqc8CV1fTFXyf1ThmRGi",
  "key3": "4cMYSiVaW2WqC22r8hG1LANDDdrBT6oNWvCYFtCdW33EqdCdqRUetML9VhSzt3dMqGXfZFV1DkwZpgQuqBjXhsho",
  "key4": "5ZUM2DQbvR3JXMA2fk9HW7ZaLhsX9jzWpQNxGcyvjhoUMdTJEBdYrmqXmTbzLQapj2Bhk1cAobRw1FjUZxdLcATY",
  "key5": "3uwxWsaWjBHNhVFuUPhJnh1gTxvU7VweUajCHCn5RjRwhhswhri8Va24gsYmfmhS1vwNCH13mdRNJq7PjKvhgN72",
  "key6": "52grtwKJ1Fdqh1kcjdEN2vfM6WDtdjzvbTvqMGJrw5vLBBHhgm8d5VKZwzemyCTAh7sC7RgHib4SXnF3o13PiQ5h",
  "key7": "3JXBdG9br8FREoQtqvTAaCiy4qjzSeEfYA1VYkWJgrdJfRtNHt78c3743yv76sErrdm5kgM2njkwmu2uGJHLEJrP",
  "key8": "sBJf3E1Wi9REcwG5YtjLYeDrpVQRiEssX5SxiAg1FNoRaaPTrHuiycJCHDTgCZA3jXRPCnYphsTC3jpETT2qShW",
  "key9": "26ng19hvHwjSjTm7saRwbbDQ59KhjptKc1t7CTdpY3NgMsoioDhravuenGzscCAHAyoyppozkhnTHtBfYPaYkdyN",
  "key10": "oPqm8rbZFgFtgzwASvEuAwd5kXApnkTupfDh2DPqjiWqUPJnZZtcJgoBLPuNuaJfd6jMHtLntNdkdWFBDMFcYss",
  "key11": "4GxMjX3QKjswrU4C1WMxjXg7nJS4LkcZ663ZWrKAxNJSdbGXE1ro5BexG84ch9LhpThANKgpE2rY8x1Y51hNn1Rf",
  "key12": "cuefdUp9V74YaEsi1aBCE9yCARar4EdMcZe32AwFSbAkbtiaZnS2cR7uKCWYcJGRroqRvN4gMySmPFCEq6MoaKS",
  "key13": "5ahVA4TBPWW6sJHiapzMr1K6tzd8yAvW4QHK43drbsA47t3dqNSKbjEk6uzHe4FoWhkwixWZT4s79r1ywkueZebe",
  "key14": "4Fo2H6RXqKESh4DmYuJ6wuSVCtinKJn7469eZ5do3VzUxQ68Ji1Yd3uTwHgz6GUF4qLsUDfYx5zNUrFGR2vrHjVr",
  "key15": "3fF9MaSE6cv2moAQszeKfF9W3N6sbRAYa1BFGkhVgwzH9z7qaPxzkUoty6pBbhZwYLb7QH83PAXKu8peXnAHMvrQ",
  "key16": "35A3umqbfBXuSMFuDgoQBc41VeaBdK1x9KRVnwxm4vVAsxn8xHhbvFVNcx2aDbsttZzWLUKvGLPd71L5XWNzKmXq",
  "key17": "4EvyCX6YNwxTuBwDcmiYcdCxNKigDDq2dRT83z4iLaRHR5LRULfZv63aorGJW6okN2JdEpmtRggbuetvv537Sffi",
  "key18": "4uNBaqJFqskDSyDMf5vzZ1sk7zDGuHBSv75xMxoeX7DN6QZDHmDhTBn81o5J2KRvQDqyZQJkTYDQcUuwicPWokhu",
  "key19": "4D9WMpRFC5h89JPLaezMjAne7qMWNPFx5N7DRL87w9y8pQKoNdrJ2635YAtupQaoj6yW4nT8fZkXJzFHxGQUNCcg",
  "key20": "4U3K9tc4JYVV14pWPhVSrqM5NRQwyicatCVP9Hu3o438NCkSwEL5kRscAMM6nUbPHGiAFi9CEcggwuiZ66BxDEyG",
  "key21": "4oNdEvfQzg2UEEgYt5JCpeD84SSwZxrdNcPMJfhRGXstNHsVh1zwq6uobsT6aToTwUVJkAjsjaLCSTjGDsq9ayLk",
  "key22": "4jCgezqcs9JKatUD2TnAq6DvSvLEQvMcUVpD5cNMR7BuX8AuC3J2M3axcaZS5yKjUZTuc4RuQkorgPKtw7L9EH1K",
  "key23": "4WqDrgX36E4dKT8wvjQbZZQ5RwLVxdaWJG3uM5djSqc4kiqTgsJPQykUyE4dgD7aHHbTYYzboEcvAxhceeQQQnQQ",
  "key24": "U6VvKsfdbcF8CESb6JjxW2KmxdWHEUPDe1LizgbcjzANrjNfSLM71cUnjL597BissG3TUJ5ThbNo8VhPocsHFaJ",
  "key25": "5QSFUPtmnqCDno6HoGUybsgycUAS52oWVky4ctjDFpXGynxjHCSVD8oiDkQwEHsMj3p72qcWnDktWNAep4KgxFCx",
  "key26": "5nkxKHfTKno5A3eF5GieiaacAkDnSW3qS4Mf9CrnCdaqPp19dJe62qrY8Cdct1Frk3RTHUYfSxKSsmMGgjNSC2sC",
  "key27": "ZuTh2SY5jQWqRUQRuRE3E1AG2nbibX2gaqz4QaFUtqJFZogV1mvxTtY8bN2iCyfvamgRqQ84avLbQ5xY3hDkbBy",
  "key28": "2f7gVzhXrgmFqfbquZKonc7jNrnm5YwYxivSYGVj2G7ofBKPtAsM8GDUPDuwPfNNHGgcmC2PANgXi78QanpNGVMu",
  "key29": "4y5FvDHZXx3qo7zbgN6btbGSAriTqY1uCzf3y7TvENAV6W7eZhySunobw1TMVrktmhnPin9jmRM1RGh45bHasx6J",
  "key30": "fDS6xs58YqruzCA3E9tyosAv1fhjM4umDp7gfsdutr86qYrWssvmKJoMSeARXCthBGCWaTckadyJPA2qdL1H41k",
  "key31": "5vMpLLWLvT4t1yGHcaJfpSgs9SsSuxsiWUsk8mA8bFJ6FzmV2Sse7mYaqJwgUfbPVjDaPsyPvU1zaNAHdvBzQX51",
  "key32": "5RRyR9rxqPB1TdtezUBa6zEvE5wf8pCvhfa8WAF3wqUvPnmBMatTPE747aQBDtuZJ4pBPBwrDsB27caXiiB5YmyX",
  "key33": "4fxv996go6WUCipWQEJ6suhKbmZrc8SbCCTG2bGY597qT5eoq4kDTuFk8vsa321a7GBbCh1dweGfv5uAaKuZcVHL",
  "key34": "33672xfTcd8gsw2nsAw3UE5BcH5Leow5ZsmFxaxydJqLqozARqp7SaYHyG9o1p7paSgWzZAHpyMQu279MTijA8xj",
  "key35": "3DceV4bYZEaZmfVcX3d1S7Z2WkDcPuGffWuMgh2ZGgMMbNKPYgWzy7paygZS1WE8boJ3dtYSRGXhZSUVtrJ6Q2Bu",
  "key36": "dAEY5MEwULefTDztY3iH87EG5mDXpwQNztkoZXTFTB4oYo5XzkqmJnzjSPvSH3LjtyBHdQeLPG4os9UwK1mtMTS",
  "key37": "4rBbaumkXJ7GLMsEHrhnxTKvrDXXsrAQLh2LZhWBBrXwkGYNbNQUmmxs4LCmBxYS2epJtp5iJcPdYGVLy8UJojHC",
  "key38": "44szJdTWD9Pi5QSUL7XNQBt7XfEwSTAf4iMkkf7ymaAXorwn8BvDjNopKs2LH831RdM3NqShBpp8pvZDGijtsuqf",
  "key39": "222TjWEj4kzw9TRVF4yVTofz9YgABD2jE3s2jjY5JvFoUTHVCcKHBVY8T8xhQ1AMxGBcR7XVFyj2ojvsdih9QvNZ",
  "key40": "5raU6g4K1PzGwFNeHHCPwiwkjqTbisvHoECE8FUswkttLSBMi7QVZhATYfXJZVMZU4njsocabycjAqKYXNLmqCDj",
  "key41": "5oHmJ6h9wjarseP6rcxAJGMxfa9yfrmGeBeLjGZ7WxWZeLTDjc3Gm5E6VhHzfR92JxradYqjHaLnYRFLjehTND7b",
  "key42": "Cf7pdkdvKWXUVKfRqYm1WoUyHqYbUKLgy8NbDsZZJGVv11k5AyH9WdnztuS3TMT374iLzg9yD6XB6HrP7p7yicN",
  "key43": "476mcBJS4V4kNRy8nYFstgkx11vabUeXrcc7BpsDMiSVAgxURmcvSKgDmxmww4p8arNcyqyuThyRzhG4f6fMUDMF",
  "key44": "4PRtG7faX5WyiqHL83FxrLGPyvo5bRh2RciHZi6dxk5Kd8A68nns82iEtA7h5AZWb2kpmCskhYnjWnYvFTBUkdn1"
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
