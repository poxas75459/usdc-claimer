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
    "54b4RAPjUiGfV8AcDH7d2hUnz5dZhtivvdAUn8EZxNGajFJpesKbYMRh9hinukpPxPSAXY9TDbb936c2gsGMC8N7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gxE6XBZpZZa1P8aA46pP8Y3vXaDt4f9MNaRBYUMy5q5N7qE71qCZqvS8tJdK4LkywAD2Hs1wdnsiboESdX4yTf3",
  "key1": "26FWa8BmEeddtrT5KB5sqsA9FX6woyumwDGAVTw9ssXUB5fyrRHLw4d25jLyJ1Jof56EsCM3MzesQ5Nj2jj1sh6P",
  "key2": "3FDPaJo1m6jpoUDixWxy1R9hW7XQKUF2ziJGrVejDWg2NRbi7E4FiEJoxHbPwNe4YgukfnimBetQThuqGykSPrJc",
  "key3": "28bAncRDWHnraxfNne9jPNNbbg3Ho7ByU8y8J6Aa3zE9Jj5izZr6Pab5CN8hb4R2mfMAbEtpq4NpbUvHqZtEstbG",
  "key4": "4MsjmP5bsH7TMZVhfcA4eS1NGKsuW7wDCc8BQYcu5JBDzySMYEhkCL9Tvz6vCA8Kf2Xxy2pWTmTSxfXJvjPAMPER",
  "key5": "5CFA3PsLuCkikfi4hTUYWZunz6eh8MTbj2fG7sotw7z3gSPst9SND93nN1YkrT1wtqzAXJMCabLtJZi1c3GfodmJ",
  "key6": "5qQKcrYX4V5TFC5crArv7EhteYtJXguGki8TPnYP24WQP3Ud6FjoBhekweVhJSGHJNKDijznNVxMGjSKHVm8XgYT",
  "key7": "yED598Lw8mHBDTTyMbPHejPPbBDJW6NorvnQwePVPnK5st33b9wRWDYpUxf2CYznxgiyip5MAP1DmALryp9qMdb",
  "key8": "4AuV6jSSbVzPszku5GKNgGtuS2q7dVZokGCTzYABchAeFtziUWYzGXZjv9Z7Ds94Tou6VcKLJxkGic5bBSo5GGrF",
  "key9": "22Wv9zRpg3r6vEW6dpQXvFd1aGaiD8m5j2KwmpVczMLu8Zq4mtgpajFcv8xKGpVhWoYTSAfdbPHoA9j3S67UjdYC",
  "key10": "3o6dy4YhYrGnh8cnaXL8BW6pEtj2DgS929W8aEqqES2di1MzMEwGFoGuNmUSPQnjKpXuqHhzhTRUJJW9H7xTrn5i",
  "key11": "313mFUMJn31qqPKJHGU2D1bTAFFrgu3TaJeuZFMGfgoEXNJGTkJEbwM6ibALMPQyjSGu6W5kLzQxbBiFw7o53EAD",
  "key12": "PVjiYPGEnz5ntWRyqft8zyXZ5NWpYGs3CStgWs8QoM5Fa2UY9szT4emscJTVPq6387oXzRw9uJ4DhXBZeiBZAgh",
  "key13": "2frXxXfmiT2kcL2hmFFL3UHj45AFajukZ65Rz7ZibuDKUrZ6VGns71qHznCm8oWrefu4Y4xDdxtgLZehcNJSQxJM",
  "key14": "3mxtEaQEVoLkQx3Nkrsv6C8F6DQcj4vhBPoV5Dqsbkv5h2LzDmM6UFNZodyCmo83v6BUyWC3DuvA4k8ChvcjhGp2",
  "key15": "JdsDPtFCGJsinsTKvjcJLn9ZHG3fPwtNy2bQ8EsdgUCSJ1nnFxMzWpCViCDkZT6S1z4H96S1ieyui5Y3mVhXeSu",
  "key16": "5zpKUwg1z5t1LpTqVJyid9UNCkGcG1Hu1d5NEFDQdTLVt4G1EMCCLxxZ2w1prn4j7VH9Uhnkm2ZFDgAk8EGpA6mk",
  "key17": "5xYJvT3Rz9krDMv5EQnarcdyCjirc6ssvx67yZUhLguyxWUMryDDsPNXv2izXjTfNKvp6i8nNLTsU2mhCowNgwBE",
  "key18": "5cgyw8N1i2GuHXmoJGr7VQiEe7J72pWJVv7FaYeZjubvGDdSoDEoyDnQHKwzdSPMcehAjXmxXcm7JjqFWy8f2pfj",
  "key19": "5B2rzSN6BzYQptL2ro3dVjPTxKr319MesepS788vbPVdQCyFnDgcMxaZgge2SJ2iCKi2KWWNmYC3ax2LQf4WrETg",
  "key20": "maLEMAFUnoXtk6ArBcrmV8BNJMYo8ez4qZ8NUqgkcE25Hdk3eRS1cXNNV4ujFgfe5zGWLbdmH4838xWy5VUdJx8",
  "key21": "4PPuCXLv2Ki5X7ZZnhBpGpqqkSbTtjFTNmAnHRgRkD9rcrpMEhP9CWL1vD8BdnvT9HahAyncjk6SLKwA4fT7WJeR",
  "key22": "2JFCsy8v5k8bAqGdD2nt9jyUC8cZNgL9DqFfCR5jWog2zPc4eLyF4kNEnvXCV19qdUMZib8GqCTm33oykoY1kvSC",
  "key23": "gfkXW4YTBs4pPVnstWfvkE7WDuqG356KxU6BHojE3xA2B9A66JeT8kKhVCZPCZScFdrrKUWs7mMYbUviFPwQuGS",
  "key24": "3bZUAXmVzoDaTjYnK6JMaiLSq7uk12AyYD6xGoqpJTNdu7nRCSUt5MKn9CLxM5kmRhu36TfyQ6SboVPkkH1RAMq",
  "key25": "4yd73knQJaKGpqZvQbEJS3LX6gLArBjqyfJexyMt9arQRmGHrquQjEE745nPpMzs9twq6ErcoV2EfvyXsrXzreBD",
  "key26": "678wzsZ9i3iyER4snbnGLFWTCuAmKg3W5DKHDw1p9atnDv3QTPUn9iRKeAue48LrDCRU1xMzqP5qxGGGzSMgr1Bs",
  "key27": "3pd7NjKtpA6mpS94MhqfQHjDHShgqUUBur17RJ33t2aPEcMQpihnXLooxHBYJMV61FBqEC842SHZdvFd8Uq5uCtr",
  "key28": "5xknJSGi7DDsbu7xvHqDBKWYZWVo1ATQ13gFtxu2VS8RCJFNNvLF1Q7rqHw4owaDCYru9XHvgPKQn3bkHCKnCyG6",
  "key29": "5rW1qat6eWFTn8w2sJmmA7dyWfbxm25xY1XMLcvvcUiKPZzFAzkjF2d2AUuEYtUJHgAPLCrJZzBdmQjEkUy7Gari",
  "key30": "3dCSgCAcragFuk1wYDzpurTMFSb3iVVYeMbxmTiwKRrBfLvNYHxaFbKrWEMVGVK8k2PneTuo9zDnAchTm7a1nuru",
  "key31": "FsxntGLFXDTrwWSDhoWW28WoCJssDZYaA2nMXVtxmL5gDMCWwHoJg4qMy5K6dowhRKLHXfnMdcVTBPcXiGtWWDk",
  "key32": "4qH7BBRGmVzYUw1qSYmmmboKpZ93fhWWJeZG2BkHRPabE7M6ahTHkYvSD1Tc6URDjeRc3bMoeD49aW8i4FgTpx4o",
  "key33": "5PhXLuSJZtHWCeLNU5t8v9vve1kpYGXDhNDkMT9up1ZBCR6nGVxnyVJcaT3RDP9Z3s89QJKHua96pSGRSeNn82LJ",
  "key34": "geK5DG6Z3L7JodbGkxeXaepE2UsnaJEjUhPhkWESYo2r4ZVyhaLzQEXUjnZa3eVb6Lno8YgLLHzsjnDXDvSVBUy",
  "key35": "2aSvGFD7JApkHKVn9jbGs4hdUQQtxTNMtuQAFaGFYiqMGCfkYmTSavN8DeuN3tt2A7z6fdUMBNKoUPQBLcGoEY6b",
  "key36": "5h515SKHSqrHVKgLAtAb1ScYAquF3AZgjDAEdJssCXk55FZx98teGhWV8JGdZzW6Xihk8GTdB9Ead1qT27BH1gEv",
  "key37": "2CkS1tWM5xvstUnswZbkBG6vjU4PuqSesStEyo6qBGurjDZh2rYXDVxuKBeB77dP2dpu2HmSX8CiqiDynUGvqYE6",
  "key38": "2fRWNd3rj4zDvWD6tauZZWxrf8znaAV532VVxYPCthfzFHWtSieZk9WRAVR4EwEeusKzRhkNJALfoqreZXfc4PNs",
  "key39": "2yGNzMsB6aG3ofsByEoR55hz9YNqT41Bh6m9RyVCVa9bfw99dvX1wVwtZvNhdWnAJa4Bydy96FAmKw9AHDzxxom5",
  "key40": "4KJk9JTkxkBrcfNMCWKY8z16mEuy6LXSKJ5FrbXS2FhxpWEVyAFvxvbkEMLCrvHJsvpE1ewdNRfJgNTVJy1HrcbR",
  "key41": "bAubRwzMZ5F9FuivsFEgoZaQYQVkX3TVJgmMaZVrrCkh7ZH6akyX4g8pMiWe2YiM8oyrf9uqLVjvr8aqVndnpEX",
  "key42": "q77W4FVTZoKhUcgexz1Ryk62PVeAZRFxtShEoAxoT6pUWdCdj1BVKU8EfhuT1kR36iY661moy4RXSAu1j7aHZJ3",
  "key43": "5dwCNWWTL4AyieF8BEhjHmLsDuk5xhmp3N1WFjJoKrejjgXrGvCMhrp7QcX7HC2M2JVVdbzj49LNVA84XVBh6TNr",
  "key44": "34sz5DkbFFbo7wN471HJxQkeKpzwMEM5SbRAeD8AQEEj9gBcPq7gRNeXUcsvVC3BPt4pRx3PwCBsSAwevgoaM6X1",
  "key45": "3H1YUskfgTFZb9FeCFi2SGFvspcUaYvgCNuqjuy3CtN9oewDN14mKyAR6GphYfyH9gkCg3WsJht4eAm6dfCbj6x1",
  "key46": "23MX6Rp9GkgikVyTwz2eRM1ykdJerjYUq4zWK7bTqUuzh7DeSUHhAhnkp93h9WhRPPXwB9tRCxZK7d1m95ebuuLv",
  "key47": "58HcZyWXy5xChTaDrw5dguCMECM41EUfpmFHnau37u9SGoW1eCSWehzRv7ta9tfEq4yD54w9TLPGJEhbgNGzJznF"
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
