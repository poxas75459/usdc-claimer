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
    "5jPDKnqwGUVwa38W6JfGcedTEXZ2tAYMifxxi7ZVoiRH3UBUU5aKdZXKEiSCkxXmNPNQ2cybppBDqmDDcFe2ZvSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a67cbMBw4W8Fmok45UPHdZxVZUrEiXibnd5HDoBwgaMfCQ1ReQDQWHtx8PZtaEL8tCNwHyQEZ9VokRUNMWoRibP",
  "key1": "2k1qSaThsiMiBcFtySU2Mg5K3HJ3Vzw1EibYGgd2tezePHEjuzofGQgoStjp5GmVQbB5PyLk4XbLWz1iRWXmzLPb",
  "key2": "3jAjcs1FL6CM5n93CQSJ5VrQFMKpTmzZX2eQGVet3e2SUgGU8tNKpVzwuMwhiDR7eEKVNRw8dVy23vqSCncQtiPg",
  "key3": "f44FCgwR2vBg4hjnreTgNEHrAJkMfopRzY7uVo6xJ6i2UbXMkuJjREfxeZfwm3Yxr4GR1h8qBvSZEzgP9ppty1f",
  "key4": "3HF7Q3EMtDpqUzZYveyWFbUBkSdR1F2tkt9aaw3H5hA8h1FvpNKSBG7odj3orAkfCLdhWVBJQvmAFsBXNUDubi8n",
  "key5": "4sD1GgktTyXFLv4ZyQ1p6hGSNiLTGbi2WNSvj4d6jpjn2ggrCfj9jmzrKEzh3RwcWUPWEzertG3bijpFYTeqMvRo",
  "key6": "4SjnVa2w3XEMFWaEiduzSBgLTBHxwBW9u47k6CJpkP7Jpkr6PjJjARE7m3dYPDLz5Ss8cTTXfcUHvMMWxgJBT9YQ",
  "key7": "46UpHwM5kqfqrLpeddePNQ5qSR3S6aFTdnRSRxAMFKJVBL1ykjv9jpj8m4RK6dESNeVCMZFCuuzr3w4gZnR5hqxw",
  "key8": "5udJ5Hwkj9qKT8U6PSQJxYgwPLQPwKGmR7xaS7B7HwziJe1cTLxWNJpAtxrw3s598EBq2e7qQmdUQgbthGxTcq6Y",
  "key9": "33S9kZyCEhUK7QhMzfcDJxkLJnzyLD7E6XLAFpBcMDsXVE23EHuzWT8Q2VUNHh8o4q6EM9pYqKLpZCpXw3CPXNoj",
  "key10": "3hYSFJMKDi2Y32XB4WQF4qLj8xBU5rzCyMayZGAdzAiyLmjTsdNpWuQ4EVjkutKLYWwTBzVRWA93sfu5N2QcfSfb",
  "key11": "4XxDbN4zZnzE4BRYhkokCGzqdJAjAJTDizswAVbCrDazAQgNiiUBFhheGQqHToWnT29HVAfBQiWeHpzVRV9mbFec",
  "key12": "EkvW7Z23SBMrzYeYEnDE9xe7m78MwF2HPF7gTYzcAMe4sTBDMMnNHC1Lf8zwAEKGr3UFsoPceD3HFTcnyN7mUsM",
  "key13": "UMWcNYgiokSKTDkN6TK7np24zT87rhqE3YrEPqMQUqJfc56UcUaKnyBQanKxfkrW2fx2UpnUa7mpA1RR7qHQVLT",
  "key14": "3cv9rRAateWLKTiouae3i1BVPvvAykrybdyUyGVh2TtFNzKCZxX24AVyA7zBCk28pjuRx77dPrDwwD1FqArGHgYH",
  "key15": "3xi1fLYwPu6yizPNxGgsWT1JRtqDBKZsUtGqWsLcSw1LECiMMhoz2pnbmg3QeemHdvmgX2DpnnBK3nqMRPcxAub2",
  "key16": "2cajDS8zm5UDfYF1BwYUqjnamk9isJeNj47VUwBxBi14scjrn18MysnqsXPuhqGxWXJsMrbhdGjZjCAxRoRvFA7f",
  "key17": "3PLcaLGJgh9wmxrqtknoazkkT5z8QWwPPEEofgXPRhnpZB8XENwcsih1kLF4NCkQRK8NSJqkv7tR6XQPQU27kL3N",
  "key18": "1xJ8sG2nTtLcSyYHmbLManiMRHvThSZsgZt1Xdb6JU9DvE79GHYnC92bh5giMeKv1DAb5TcqSSUtRaZn63jrmby",
  "key19": "3BWAdXbHD7Yro1MegJUBAK8wYchxtB6HHEiwKYd3uiUd9qAFJF6MXmyXWoD5yFxDxmT81d7kJUpfRBKHuK6oAcqD",
  "key20": "ifEWwnToMZtZFHz3GveiutsdRY8CvkA4W7J4EN8CssNuxjZSfduahYBuLTvgDaxXgsyjGnqYSvCrTLkoekJNy87",
  "key21": "5W6rLAJHj2Rxg5KbjjVxQEWs4SU5cG5631J46cdLKuogppmTwv7pWjDRzi7WtRbLY8AD63PTBkAR2WArUsdvKW6b",
  "key22": "2qLuLq2sNvkwHrjyA3LkcAAY5X3ybDdk4N6tFNUWpS75tP2ibaeoYiG3gKfEDBta9jqcAjjJcK72WCaY2dg8yFNa",
  "key23": "4Fdy3bfwu4n3ig4RdXARwLbWz2HgCoFJWhLkJ7tCaMACzCuLGxBgNYH9vRTUrNZGJF3r9YEPZEsvjF5D3T5dVJWx",
  "key24": "5khcdhER6G4icGZoy9HUDYej2LBNqo2uKaND3yPNvadGwoURXymhn9o8AvXWJyAwGYaqqXH3acLbKZ91WNiRU1h",
  "key25": "4dqpKcdkMtqzMZHN1yMAX4fv9naDNZz5QRNCWFXjC4dTnYyLSGTrJkV5BgA3vuLWMpoWPNvqEVj2tqLMv6WuvvkA",
  "key26": "5LTwQ2V1FcJrkhr5kxwwucM216gFfw7vr9t1QepAYpgMxjA5qtzqLJd7PrLxeAAt7fU5ddWvxX26JBdPPMFs7ydm",
  "key27": "476kB27K2JiGv5X81ygMiqvyKKYmHDVUvvMdTZwmtxvwMBq4oHqAnHhqiWkJUNfECZq2kzE4cbc8Vb68gzo1fZuW",
  "key28": "4Lb2nEke93m2UgRzw8pBo9Fr2A1TRdHjB5dcrEBME6Zohat7mRr1cdoYxqrWpNHrETbSAni6ZYhik5vVcCiRNbcU",
  "key29": "551aRAsewcEke49y2ohs1pXx6Nyr8ez5k47ERMnLNyd1dhNwDXfgEHXRdjixP8nhQ1VksaeSLCuT3zRMmAc6w1ob",
  "key30": "49H2aMHbmgUc1jrXQDhMr5PEN6XfRFZh6JGDQeAYnsMp4Y19JMDmRm4EP8nqwWg4XNP9L1fKKTzKun5QxbEXfGBD",
  "key31": "4QB2fo496fLNeikaNceGkKqmfpEuPZvuCbJkvbsuKBSfW6fUa1sBLG9ArMdB6T9yKpT8jDsRd18BbrbMQwzUii8D",
  "key32": "3sp5k1JgSn1z4XhdqFdcu3MvAM4rYGZY9vDnWXnFT55kxdakTw2jQVRniwPPMbb2fjzpQuVW814kNScGHKk9BDD9",
  "key33": "5kUGfvLaYaUJQzHffAxyMeM9F2FRJS53D69dE1PPP6Da1okYCqmT3q9FqdFR9mxKuKKSNanHhxJ68e63p5HPGZyh",
  "key34": "7844ur1wHChWc87spNWeWB316267X8avvembbDhSBCNmBjW4WdfH6NiMLmJjF7qXvjjEkXFnhmR7MVnmSJyXNFg",
  "key35": "5PcQCSn5mB3J5eRCy7GPTKmGgFYvdbAdwrpKzq6HKmHUC714863LpjXE4WhWECnMMQH6hH6osesxomykb3Qggduu",
  "key36": "3yuZWKFL6P5Px3o2HTEDphs6ySPRePZ58qGVoSXkey4tvW4cQMw3f4tLF4RHCqJpjSpfp2wbJXworY6t3Kdykobo",
  "key37": "3bEiP4U6hhuzFfnr9gqBp8H2BHAPoc8naydZAcZGcp8GUS4po1mTDgYbyLr7rGbR8y4VSq1paWop3ZftK4vzAyEJ",
  "key38": "3b29W4VeVKB7p2jVR3RiyKeHhwXGReXqx2D8PhfEztuEtsLpjGgz5d6yLK5Wdjnx3uUTumKCJVsGYA73UvogpdV9"
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
