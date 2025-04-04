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
    "S6qHWaJbNQcdEoVGzmS5WwgbLUTm6mUu6WjE3qGDdFa3G5kerc4qMptcjgG5QU5u7M13FBC2LLZ9KkgCsNcB3mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RhvCXnx4WxR6Rsfsnv2qK6QQ3sLRzc9bK2iyZCAdHMhnHF5W2k9PAhumfFWFZQmaph8YBkw5ZC2VFwbxjMLCdZT",
  "key1": "67A4pJFRYn8LXo5sCVknHuz6g9kwvggUgAtcjZ7ug1ARWwhCDdxdaNgi7LFob7kDiDhQ6DyHbXPSvaFXkMfGUF8F",
  "key2": "3vAuUEU6F7cH99THTsBdw6g9eRfkDd9Mky7yaDmhbpbAeEzt5Urm6UADicEsqsm5D9TWiFQ1qx37DvZ75pPUzirh",
  "key3": "5VfiQUKF77NmQ415jFBFchyrCzGUYgwBfLQTriGCQZK8dAc4SESMyMauLh7h6pMTJM7C195CKCjP1ezSh1LWCV9s",
  "key4": "43iFTUpUnsFqtrcRvum9NJi8TGLp2xyh3DXd9diWnsBDrWJYggAXQeXiJNsBJ5x6q7sqKEnGRNBWn9FN3BqUC7cW",
  "key5": "5QzrdTjnv1mzqKjts4Uv9NyYwAkY5xvHpYmM3ELDrjotCu4Lhd9h89QDWaxsQy3HM9dLweepHKLRaTaJ4Xjm4buJ",
  "key6": "5uSerxSYjkWKDtWnfh1jdqWQyz1uwr7b17nXfc8qdwD3Bp2KPaPhvZ8fJrSHE1kxiJu6m6DPBBTHUFFD2LVqkUc8",
  "key7": "5Pps7jRfA9ZpXpwK8Xit4bgfwRs87jA7vuhnucpGp3ZAkzgCk6MVNzrjyKXytoHpmoV5ttQJHYomnV7ThQo8gTHm",
  "key8": "2RiXEqUjyq9wus5hSJQxXEMv14W3zZbtnRdSWcpDGv54hcRBeRjwpy6cKV53HSkxrmGY1xfKuDRj4FocvmNUnZy6",
  "key9": "57fTGmYpb15QGJofYbK8YgBX7ym5DaZkTra44ibyZoCKNgSkEwnM2MF6nbBDAxTSxCe1jiekb7B6YmEFWJZesMJy",
  "key10": "63E9n8cueLbXTDj2kvhHZfwStrdtoo5SejAVWBjQf7TVCAweNrRrYJydcHtthEMjqQNrUSvUqs1mMif7cJaHZo2F",
  "key11": "4ovdzjuEcRc2jSfDf9Sa7ny9EG4REVfdkkLD3pjStbjLcEyCGBpFXU1ctzGqfY3W92SrVtsfyJrU55hbLFKuSkSe",
  "key12": "uf8uG7V1x4UfeL4tLowNr4VQDJuLT4gKrgMTEnDZXjdQaj8gNFVSe2k8h7kNKpyxzh8UKTKAjxvbeSqBhBEr5qa",
  "key13": "2fDSnhUPwgJF4Wm37G7qMSy41oYPHQ7pG6C2ShyuCJ9pe1aTFPYDQ9DjsAs4xJHqt8F3JciWUaKrbuAyHBuboc6m",
  "key14": "2oEJWoCx3K77urspSTHWWhxoMeo2xZ7AJF6tA3A782VBQMSHBj5ga8X3xBES99G55pgrL4L3va6oP7XhVXP5nzJa",
  "key15": "yvu5ehPmd1B4ewhtzSn9QrwfMQtwLZYeMDG7d96AURyFWxu7wzyXwxU4yJ7ekUq2VxMKuu7YLP28JJVATpwpF3e",
  "key16": "2QmGueP6xyFczDgCEo8fEDuNpvSBZRzheL3SGkPSPQRMSNLSuFVML137pLphe8QsXYHrQEDk1XT1Jn7r5tNeFf2c",
  "key17": "41ZS9HJNE1rYU2NrQti8xtL6pMGiKmFQR4wsQvdiNbkn7vaoHrnR2znBQf7iMG9pDimn7WR8775kbMpmSePyQjAW",
  "key18": "3XM4Tet1Tg6ZndoJRBA2Xe7rMMDrhH7xZ15WPLKk5ZrVuSyXnrz9mGLkQ8xMYrXafxx9zeuLRj8hBeGSfhkFzonR",
  "key19": "4FS9a1jnh8RijLc1GUh3vwiMpCQx4LtxUPHDk4WcS1och12ANJtXK2hRbkxvgKcbDEqPQZa2q7MPVZwmUa4DB21d",
  "key20": "3qqTSCWBLbYmyTebba8nMtWqp9fiwfFthXj3Sho65FhnbcR3v4HR4b6eV72zh4DmDzht523rN5uaq6N4HyPHFR5g",
  "key21": "2sSVJPPsipA6jwxoYoggBmk9fJzFFHkDJQLKhtyKECE6SYPBpdGyb5Dfh37HSU65CfaAbtrRhn8do97UEcDNRcpV",
  "key22": "3JdimMumKVnTYZ3AU7V6Mqp51J9gGtSo6JjkWvzqhbpoPAbLuEEw8iEpCmiWDJCDCs73cHEkh4Uowhov4VPQ3iGB",
  "key23": "22mqE3hRvMViCAET9Q4V9B5XAbBkeFyHGCDMEG7rTzvaHV8gSQCNunFokK4yff7HVksGfSyRZ9WgDDKQFZz7o1QT",
  "key24": "3pJ6Gww8YzqusKaRPSBNKdZhanaVgvUeQVLutYZ4FxEy7daqSn7pGwN2xbi2KznBwVmWpZDN2Mvdt9Jx9vVhWfVr",
  "key25": "3LYSXwXw2g2a1qE4jauVY1wB7MVikhSALijwqtH9Cc9r8VfTW1XCdtoq85F7YnJsmsuuyiiUpaojG4XfSk4KNyCW",
  "key26": "BK8f5LheVPcwatFw7qhDnREwA9PXgt7ePLV9oM2BcYhNDAXxEnRwg1i8mdrxviw4YTzuQBFP2xNjQzkWox1bbqb",
  "key27": "5cFwp4Ph27uerpfMww37Nkb5rP6hK9n5DLhnL2LmfSpVyU1Zq5QCjgbUyfGawcBHEkEoHvaAWLat6fgs22z99zFc",
  "key28": "3hLdLZAkHgDhyAxBPcPfgeD21SC1YvL3XARPn6oKHam8aDjH5V66WzMxmeD2j6DiP9N3KP4eDVSS54tajQiUYVzS",
  "key29": "4SR6hANdRSkWXEv46F71gdNDEkbzXWzWZTeUCQnWPpHEoE64AFy1v51SszJLMSB6JGs4dKsU6LN9FHNZTDf9ZsnL",
  "key30": "22HxF6WuGEnEziBfGguZ5oZHLeQDTgusmMEKzFG6Rkgo9pRLB2CJ1fji9Sd58LtvNPJ2DvFWHDUaSYiFeZ3pX3ud",
  "key31": "vCznzmnjzCfdXNEzoCr3pE1B3brBinTQjEfSoyKSNnYexE8ip9P1DLEnqY3g7ZgotLJskdxvbNWX91Wopshf9xF",
  "key32": "afDroKQARLwjS7x5DJQufnmNpcdGZw369mdivvqeSXRAJMe9ePyiYZqm4dbU4JBDprQFbGZHoYp4godbfCA2kot",
  "key33": "4JCJJP12n9T69EqZURiNe1siTM1e4eDXr3jdxUAWaDHzzwAiTLhkgkeVSBZ8H46wCfoMUjQrXt7xWPTY2pmHwkDK",
  "key34": "FeJMn9HJP41v37BvZzkhfcGuopJfAeKfELBKZcFHzAhiXti4nwpgJGDo6eTQyVZiNHu4az87EYt2KGCY2nXdgLj",
  "key35": "4zzdjSntvAxdUxqDqLBipDoboMha6kpY2aqBbsdenFcYcTqKythKDo1bzj6CA2s2wHeZ1ELiSzR4V7xR75zuBi8Z",
  "key36": "3rNAvwnJvQRyQbCZ4nyPXf6R8EKoiLC8Fx1DXWsVLL4R7hDKTsdnN8yJQi31eoTF2DzstbfDsATLSQkuXnvBX2xp",
  "key37": "4FyDzsVEMy4sqmsTmhDDVZwgrGJKRDzitpUsa6RJtsLS6p9BxL5fVASn776z42JXMZ6c3TMdYv2pcpsTRZ6zWuvP",
  "key38": "bMGFarL4fy9wFBv78zN7WCcpxoStUZihBk1bCDvMNWLLCppxNgeqPxqArChxs1SGLMyVNpvkxMw21nwS3CVTPZL",
  "key39": "5psDR9pjmQmLFobmCrS5n9zyRdqcrkzhVdtpbpMFzFYAXUdWUuzUPYoba9LMXCgAmszjHvZJTwAu2myJB2PzQBPg",
  "key40": "3SyXbGoZptPtjgpGWsaWF8fCPGpE27d8V2fcVvJphMMPz9rkYxikg1Hg2pN2qrmqP6HdAfHLuHkK2tZuGMXbpsSY",
  "key41": "zyUrWqx6JpQnVSp9qQD452xadjvtM7hki5mmy1wMwjuzccVU94N94rsKaTNKtoJMus8dhTxgwmBKGp6yPgQPtG3",
  "key42": "snsJ2iGVUXw1PaiwhUzYmuQABod83WNzF9zcEqw1Dwv9ZMk2cb8Z7mwTriuR8mRbbaKBDEVgh6kP6z16D3Bb2ri",
  "key43": "4NVbnP7BZ59aZ64rjbgAVd73K5QzUZypA1y3UbpJJwEaY1hWBcQtaAuGZvdSb8cTfoqMS8iqRftGdVToGD6Z1B8c",
  "key44": "2Aybc6zu2UTuLWPCVySGqnrr9npDKB8ZQ1aReDk6mEpr6ZKeGe3enbMtLbXSiKbo5eo7KUAF4F5ntEHZ66kSKdNW",
  "key45": "2U3bk1rcfHnvZxv1Ng9ssBCL1yfnbdRqxo5ZmbZLPn1F6ubqWUJhe7iXd8jAuQNDKqrcCSxjvfrWDB3HfLA9X7x4",
  "key46": "4R8YsGu4bnxaQvWhzSJ5ireDSQBVrMg4ifktq8uaX29StGufwW2wzLrT8oTTVuAVqbaY7H3TysiYwc3WijMaPtTt",
  "key47": "3nmaNGfyjspwuaUYEqc4gzyGkMy58SGgsmTYmbMPebkCUX1JyadMXEZvT3B3bv4we9f8UksNjugm5Lmd67ePC9Ps"
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
