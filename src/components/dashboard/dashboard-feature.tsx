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
    "4hNsKKNZEjfMygSxqe4p4hPMPqbi5ZKgLUSbmRKjnrSykTH26ya3qGNwHTGa7M4GWsvnj24MHdJ692Kw3afyNWCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wUaMn4bu7ou7eh8gJJ76dPf3FayGQC3SBXNV2WRQgSKv5cqRm4MNsrWBtGPU89ee9s4YdRG22GDpGnCsAEJju74",
  "key1": "2cfcAPAsrWXGmTXbkGgZUMEAsuSoVVs5TsNXJerfGFsH5N1HUYP9dSp2t38E6cas8Y3mvoNKg6TmWxHDRgghMT2L",
  "key2": "55W1WGQLXmw6V8GxhetDPThh7BzhcH8qU5UmFCAnaVn51UPG7LEhUCvHkan2x3tdYd8vyhg8n5469sBk2nbYKWDz",
  "key3": "3sPKZpe4ebvf9EeYpbp4qFYnAUnD757tYxdLa6hyp36NWuzpnWeBDc7o4mhJAy1oL8ZvPWXB8jztLuDTQYRXGdgF",
  "key4": "5eWi8DSPmfoKVuACgf7Xcpo2xage74xy6n6g2WEC6tPXMN5sLjy61tFVzkvRZ6P5W4cDmTp5t7tKWSo5GeLAbtGm",
  "key5": "2yNfP5tU58u435P85kYcKzRzz3oX9xA16UekquBewBZb6RFpbUo9bP78ohURWE4uTbLsby4JeeGQZ6hf7nY29nBr",
  "key6": "pkfZFCx96jKzMso3xmP8vo3MPZwihfRVci6JgdcdHZpDoF8UN8vaGjUk52i5JsunUTnojVKgy2Bhsr1pLB14QfN",
  "key7": "rBDRSTX9rXVV6V11tED8wtCxyvooH2zGv8dM6X8dcZhPVUtVagk3z2hc6WQ41sbxWFYidPRaUgVMDBdvasPtgbX",
  "key8": "5Qp7PVek3KCt9avXmmQRCsBdMFuxTH84VFaPZSidjDdjUKgHXyMB86qBZJNvsP3C2eiybMfuNk2zDXJvB457Gxh3",
  "key9": "4JzP4zeo6TXG7qKNZotUDyDHRVNUVXjiQoFeqKGbP6imF1aqVceFZDrwiZP9hPq3heEvccp7iHyNkv49ET42bG3F",
  "key10": "2H78dNPWJMTxxVL6aKNTqfXCL6CkogxQitJw3p5kXP2sqicQS2g2Bd43Y3RkySpneZxvMz18pBfdjuzxxPvoPfB1",
  "key11": "3mqLwbeoAbbPAK7H5DAekBW8ScG1oD3Cf1PNgkMbmtaNcqQW95T1AR6AGTpo3BDAWC7zfGnSMBoP7kj6myuo3SRT",
  "key12": "5GrYcAhp1y8s39JwuCA2uXz9Sc5rq5DKdFsJquQ7QrEYgB6UXXVnhgTrMTY9Ysm3Hz6k9TMVji8KHCc7LkbzZcKc",
  "key13": "uDsAN8iyAwz9tfWRrBfDUHUq2w7AnQCLfPmMDZ5CA4wP8ipci8sUZHuBCCJ2wsvHMHEDPgVPozemwnE2dgndF7q",
  "key14": "3UZ37vvA7JgJMzk8bYtk1v672BZ8s36R5uBbi7vAk4Cwcq5hiVYQns3cVif8pWUtBkUdqrdygFX5eMb8cwVXcPwM",
  "key15": "5MiXgafG9uLwJjfvKp73q7XHycxi1nmCsx5zvpHysFAzmRYKRq2bchVqdpun2E6XfDLzKQQexYc4zMph1Ug2Z9Cs",
  "key16": "2cLCbNXazna1b1npcEaS7sxasQxkJe4X64E67e5CxsipbfpwMiU2UtKHeFdNQbowK1ViHHLSNuAT6JAatZTLNZds",
  "key17": "2u8mLTvKEQnupXXKnQnwZYpYwS9vYmwqEG1Bwqk4qutxnwjv3r7HXg9L3S6ahvJRj5nMTKdPxDQXR194zgXyyWwp",
  "key18": "4yufJBoftdgpdpqNFWevhjcmV365Jar6RdVbyQs81TzTpSgytgdbPKFJWAJfL718VuGPLvpNY4LNzRrZsdoNfkNJ",
  "key19": "3R4weKBpE1cMJPjktJRwsV8kfXX7aCVfiomtgKX9u6n9s92g7i2oMD1bmZDD491dLuxxfmt4TMncdR8jxqDYKJy8",
  "key20": "MM5FCTjd2qWfcmM1YTNF6dY7ByKoYDJ14UpnykuH1v64STaC3m4gwLLo1YDvutM581kPUgeKQBCFjUJndwb598r",
  "key21": "5eumNN5r5y6Zt9VXH6zTq25EJ5LPVgD1nAJVUc72iz4fKDgCBhW54eWdSx1UncCQhbbvuAhZHnq2hqMFjBW9usqD",
  "key22": "2zMbbDaj98FExqxboYLEKhxefEeEx6Fu6dM4Pr9szzYKF8HZs8DXUCjK8CXvJuaSCagMAhBEMsv8f3aZypwXtf5",
  "key23": "2vBUJU5aqtLPGvqLNugAHtWLdfr8MachxVyQXHCacJmsr8aCCCUag2BN2mSLh1QGS2scNN5vDDbbkYJukNH5F6Hm",
  "key24": "4unvxe2eZetND99omHZmGN1U3m4x5FRyJqsKV39hvYMG7E8TqTgbCRamyZECyB1zjJxhzHURitwNUq1LbthSDVCD",
  "key25": "3M7VwVJ1sxuPy5ukDHq2KWz15djbAoxxrftMfTkuhLQ4MwtbZ2oSEZHhuZrMSyqupC9HpwpVK4eG2XmqCPhmkMNX",
  "key26": "3RVqhSeTqAYaExEiVS4Cwgz3kEcG3xhC5XRRPS3dqPX3DwMynVB5cNjYsJBWCizCZiBXfWpavhjFe4qqBPePuXWb",
  "key27": "puJx9Na1poNFika6TuhMseET16WK8p7FBeHQomi9JSccMBWgMKSsyBy8NXCAEzPCHnVoYYanhT1aMnT186shYZP",
  "key28": "3TJrohfjwsCAQQe6dsJdpoDZpJMkhZECngzW22Y3McYDDihb6LianebrsjuNHArkC29kmbevqzwDdga9av4Q8xhv",
  "key29": "4BzJt4Z3UJy67vdXtgYb2Ttghe7MTgowqLHw8uzBZZaPTQ4A7AQ6mCmvCgddrc7T5duv2SVQHRzpkJ1rwg7hBgti",
  "key30": "35r53o85y74RbQmMc3DJffVwjSEnKVSoLvR7xfTCsSMUpoCMFKXGhKAzCotPia9p6d8Udii5Hd7b2oMF3KGfWehh",
  "key31": "WXUYU9hbFtwPv4cG12WxXGZBuY8xNxE1yNoJTC3anbF5VWVLqojuVuKZWwgFe4dboPoQCTqvYKLV5AWYPvKSAzL",
  "key32": "3D2YrXfk4XJhRtkQ6ujhZKrogm43xbUjMQ8xrGFT5Ewj1AwxFhL9kqEwwLzbjiHzj1NXbuy6A4sJ2eW9Lvsm24yY",
  "key33": "4gveXMbEtzoYxM6xTzxGGskmhtKG2ePGkr23bHon3bt2kdUjj14i7WhqYTEMYnCHgJfmA1HbwrTRBoYWN4pBzahR",
  "key34": "21buaZzGugoA7Z6Zx3NtkMwMwn44iN3bLFgCEQdVv5XHXiPotBh5R5jWNVMCXPDu2qmwYEvfyMtpj2x1haAbNpiz",
  "key35": "WnWwtKo5z76oCej7yKzmBQnUmaWbBAQ6rDxh1v8s5Mcb8fWhT2LkP7d6a19UgpYw2dJYXviv3HFavnQXwGfqBzH",
  "key36": "21DrUv26jiLxMR5DZHGnHsrmbwsE1iPop4tL668PAqp7qxF9cGU48k6FVZkYpTYC8QjN6Ag8kNPYQ8r2J1V41jAW",
  "key37": "88qBUoGcYTLMrjvFPWSCfWJn5qawSpyYvA2X4a64ko4Bexq25TCeRnYicYJJoUi8vc3MavR2UZD8aycuehaxc5U",
  "key38": "5iC3LgQPb4oCui8NmHiHcs6mKetdJKmeR3MbWsU4xmoAqzaGcXZd9miPzfUpzaZpKKnSF6HTgpZLzUaR95w2CZht",
  "key39": "kTXHiqpDQ7rTsBq1mupC39kQfvgLPwwHZjWR7TY9PGzSJSgiESiMRFu5JneE12fgKywi62MvxdAsctBxgtBabSJ",
  "key40": "4bWY44vrZaZ5LQ2tVBVmpcyPd95p1fCVwXfb3FiVVUP1HtExvsF4LgghmS3RtX86XiQ1fCfqEy7KXyeJzS5SX5Te",
  "key41": "5mxA1kHDmDtpXJMPdNtmCGkwq3yTvUg3bwfM2feV9BTFU9g6hnxc17baz8qjyHjm7FiSFPFiiBSDwXLm3GriQLwY",
  "key42": "5QHA5uDYpoB4LW6FGBfU9yzH3JSqo96epBs8rNvN3mkt5m39NANuCwT5vSy8BNpefPsutMkNTSyJ8sJDAejvZVr",
  "key43": "3b8u165ifFuELRiSSTv5JkxtgZkmXQhVGXNJ5WDLouBdMUoMymBGbVxyWfxqas8Abi1CgfqptD2UxMc24UJueXUL"
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
