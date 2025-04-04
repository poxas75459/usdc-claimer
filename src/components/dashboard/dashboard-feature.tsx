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
    "4U5NFtNaHb8JXjspw7ohRsRJm5vngKAuCPGGtDcHfe43gTwRNogtwbZKwBoRkrwGtLJ7oF9XE7dvrFX1m3CFpRJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zyveRjU6vhRKZhffKw9CiiJaJdW1Z7dkgBQt9CgAERk5TFuXUJww4gDGwNrYsZivqSLjqWMSaDwYGceCvE7NC7e",
  "key1": "4g2gdQk57nNfXRNxPcaEndD9hZHq2SEvAtkTti1sYSHquDfrQdozp4GJ2PmGBj1gv6f3GMqGr3L3oVPozEXHXokU",
  "key2": "5zUndgL89jmnL5QXVtA6pQKxRdnWVk1Ca7ePRzuBi7VQ3zvB8Q42tNiwAxpBrP9FsDCDJh8Yf6Y89qWegpmqEHoK",
  "key3": "Z8fzeWQGpae3BrzAzc9ja5fnECBQiUfKL2EYjXABF5fn5Eie45522xS7mXTAfeUgE3ff2fzhZp5tyf4w6uW4Des",
  "key4": "3UvFZj9Zx7Z2ToCi13TNDxyrziRrSKRLLCMDoFA1PxW9ypVpGDc8F3GEz4f6B5ZEpMaQStr8mXp3SphSdVmkBb73",
  "key5": "5b6MAZEqUXzPcehA6m6jhyZBchWqenBJYy4LAJYeBQcpjcKpvdipvQQ5VmkZKkR7LeF24WzMhHAMipsGEZfymveG",
  "key6": "264VVVKPJ3sDdzc7yQV7VXvrFAi3ZRDyMW2wSNAdP3Xq8NSj3zdTDo1SgkJGvcadigSHziYttqp15jVVNGjcHrqu",
  "key7": "5eBTwUZMG7EY8DwhVFbkJ4gtpwpmrkK6fGw3JYBoT6dvH9BYpaijr2i87Cvn2gCQLjuX2ToPMXoGVZygDcpiYWqb",
  "key8": "oCxBJEoogDz3WdMCt17uzMLuDNYi4DzV9rDAPxLHx5AokmAXw1L6CeNzkKTxfEh9WeHD9BL7qMisQFLKsT3uXRe",
  "key9": "3AtitL7YebEueSt5b3HjUECKJ99HBFXqLnHqooL5mBCkN2HvPGxnUtnBMfu5CuwS6QQmanggg1PNyNQYxf27scbK",
  "key10": "35SBDZaBNTjRNHLxmfsnSGKwkwa5up5S2vS66MYjG6zvuLE9rvCB8k4bokc2efDLC2e2KLSeR5DMGxScnBcYyuBs",
  "key11": "3agV7EB49sxTst1hjVpLwaUHCun9ffiQtTXym51WauCkTNXhY54kLVV7NSwcV5wFAcG6bgGadwouskykFk9NYWKr",
  "key12": "51wboPBXn5PWrg4mQPhbvzTG2HDcDokoGpmcUWfCqKhn8xJVF6i78Ua8TcGcya69RdFNCMD1BV8MDgo9tP6Gtce5",
  "key13": "3QftThTn14AcJ3dGkMwXm8ysjhiDnR6nPwn1vZqfFY8cYvNpcU29nWijQbUPwCPw2mxAE6neT59mRGUg288VoDBi",
  "key14": "3o6naK4xerSumLUXzfUbteSJ4L8ty3MhKPTn3kxUQT6xKfpqsiAtf5BuhjfMyHmf2bDFXmafwScN1isqMSDRgfEN",
  "key15": "5d2g4Tp4muYGTVxXc8Q7y66A7ztWenxGXZUH8ZV5H3WBjCAGqB1wFGZ9eM2Z6qLfLK5yhjwwQb3zC7XQhQK3iXD7",
  "key16": "5ks788QqtA6Sfqvm8QzWLuFFqaE5w5sQagbBoJz3XkKJH1UnGUVUyPkwsNJeTs1LNe8sUeK3hiyeJ9Lf5G6ptykz",
  "key17": "3QzkMVF9424KCCNb8Mi1TbHfQfAVYCUs6pKcFcVDZJjHforNhDeAah5qXgsWWqzRVyMnMKoNwvfPX5u4GVcW3WFp",
  "key18": "5SPPmCEULamZaJFL25aQSzzzX1xX8prg46pPgGpatYEimKRiVo84q3SFbBFKqnAGPuhrPK1QxYBfUCqrfgBSb6CC",
  "key19": "59RvJyqnCJdoq7uAw82EN41zgq7UUC7Ra5gufQ15TjVEiZQWY1ktgsUtZDfwm2czJJHiFCShJHiNPFprrb6bWHaY",
  "key20": "2fEyWn2SWJk1ekZFrqH4qVKFKVNNokniup2BF27qx1GKR8Qf1d8oBzWo2nQp6D5yVRP5dkCNSDPVsPdtDoFHhNe1",
  "key21": "ozwynmYuBfuEQxijJKtenX2LmBA2JuuMSmQxCEAm7eHpwtRbtbhzNaTNbfukJMrCp2fTv8dBgxtkXQyfGQfkYzm",
  "key22": "5yJC5KpsXC64w5oVjdM2Aky3y2kjMAJPnmspds9WhrCS9NRc5UQtmmiJ2CFhWg6vQgochuZDXvW1bn7idJ5FQgiy",
  "key23": "39eQF7e1dPWCjPAGcvgQoS39xbNKC8h192dz8HV4pJnphEovkyrDq173KCFmu4YgwCUKf7CprDrx5KKKgLDFBAP7",
  "key24": "3d2WsjR1bGXLhggSy9n8dwuZkDZSi8TMgJjxSNhkX89nQEFqmhFuVfUR4QNmbQDh32UPBDw2X14EoF5ZLoJ4PKUi",
  "key25": "Y3jpJEi7U1r4DJCHm3CGMtb7VZoeyGwqKeYSQ2GSpGEhypuRgCHQWfuJLX7ZEqYyRxpgZ2WoRJN4n2RBgATCXPh",
  "key26": "8MtjMfUCox3Bg5yLWQXeTBz1ir4vENhwjqvdUxLSLuGBqPCuPncTNnvTwobF6trM59Gs7YJ2GRSziRGUSjDMVWL",
  "key27": "CuVTX7NRxR7eMteFvALCUiU9mmLKxa98jez1yQHQuDMfaroWjPbVfF4WrSLfudFwuHMc2iuqi8SVFgTqwRiDtfd",
  "key28": "2P9vCv3KMm4KmiJmCw9ZNXYBkgwDkYKiWK4rUMfQCRFdzMMaijEjHincombPZLwz6869MLMZdvGwduhBqkdsSLgg",
  "key29": "58YRLSFf9HN6Jn36PySnxrbZmj4uuDvcm57zykXpVibvwsuHQT2TvtYbbM3etmsUVaEYkHKQHwK1XEZ12jccHmBw",
  "key30": "3KyVr6e8NFpZG5VzgtmxRfqcVxzHPoNnoAPdn8R1Zb71MEBZ8Ecbr9oWrkX1z2xAAKodqVKg2DjcVqbXtavv2rwL",
  "key31": "5i4sShoA5ynSnSamfvKUqX6WYxKCHn5ZbMB8yjDAWHy7GQkewvQTHPGFkNnvVtGCYcPzpp7774ypfT1gZUsdksJX",
  "key32": "281qN1jGo4RFTTLoMBAJxCkopMQdd2npJ3ir6RiNXWqUT5GZMJ3xSKeRxtBa63pThWQh6GrFDo9BHfete3dodiwS",
  "key33": "2PhqF8cVyk71jjBG1ZkU3h6FAoSBG3cdr4MZed6LxQ2FD318MUyBLnRgHcYRCNTFCKgeTwMuzYvq5wzGCFzVvYdx",
  "key34": "5Ujkx76MgXtywxojNdjEpEvp4nCJ9MFaTW3h7YMNn79dy5YuYwH5o3Xi3dABfJZr3cSTBrcXyTwQxxNmJrrzZMaj",
  "key35": "4F5hokRceQwinoh89EdQFePreR7BkJ47s3RPp1kTyoy342AXuc3HCiwMZQJk64fANZa6g76eHJkRe85VdQgduuj",
  "key36": "3Z8RpduFRdpS22MVwiFXgWFsjXEgLHxe8sEehnJtSJeq4o51mHiNsJ8fbdSdH9wH6zfyPBgvPjsMczfV4k9G56Bi",
  "key37": "3v8wWxbRtVjUYmZnoKR96G6cQnEnudKd8vEwDm79awQRU5yvd1wXAjUnTgjPbyvkhUkgHPpiAqpdoNZaeJGvFHWa",
  "key38": "4iiCBAGHPhrayiAgQaupbbpxJKoyd8R52zkik1he1o4QsArWeu2rfjTdBKkrB8bHr6rC8TUPfYY8JGanCtsua2RN",
  "key39": "8uyC4gBZGo1U8BxyAhLVdvoftyTZpU4aTCq75jS3349rpiC862YtkhxRVquTTpeTYXCfQ5kUQy4WGDCX1YicTT8"
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
