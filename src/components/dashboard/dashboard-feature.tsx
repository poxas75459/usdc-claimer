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
    "ygHCfG1qfjRnRMVRnxjjShdtkbmGXsavS6qaKczFHt2FrU4WFusfv83orcSCh3KXdy1mEa138SEe6X4yD1Hpjfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C8dKinegqEvJHfpBkfy2bBNBQp4AjFeTmBcVZ73uDUUDRrVfocRP8ZHZ2ZHmzFeAq7hQh5S1rqDw3Dd6Vq1MD71",
  "key1": "5oeuLK9AbJGA8nWsLD2bJ7QtfrzdjMCywxR5w4Nd77rpsLBp2nuxBZWjGCY4gvBNqVezRFNNTtGSWPSUZcW6No12",
  "key2": "CqyDvJ6RGKZ5aef9Askpf8Vr2YeqExnGTorf5vTCjRaLgqdZyyCTecgu8JJYSeZgUuXcD652dsEb6yLp7oJs2C9",
  "key3": "1kCxW2DZBPi9hUwGT5m9K4afSxpdkRqAE4iEoaESD1mPCsHe2BfP4kgFX1BE2aTHuWVrSZHM3XeTs7QKCsHmssp",
  "key4": "VCo3wCEqLXzTamTJJxkvmDN8VcGVk8415jrYf2oS8H8GpBiCaybitPotM9yPAmCv4gs88MA1omuEYcFmHRCeWpr",
  "key5": "5jMEuPhQdC8R2cb2GpDQ6T9xU1TGjFEoGXky3mjadJN1XU2TBPF9A1RrDfLknieJysR8YxdyhvXx3psmXKhvYg4a",
  "key6": "4HnpwRwZjJh4k1GPiwggoiyW9ZFMiaCeDG4fCFGXZ7EtmcCTUmiRc2Aso189oMU9icTNZrcvQNS7t6hQJo8JhY56",
  "key7": "fZdprHg6Bpu7U5PCpPuWzJ5dUJvPRAQgcpzuZthVPLRyUeATeNmhYGn6qQbFs7gUgqGdNyznfB7JkTPwaF6E3eC",
  "key8": "3uEX71SzrFbU6cDbYtjRnYzEXqYBX1G9TH67cgRSNKKYSTaUG3ndrP58hpghTkj3Tj39MWfLq8VXv8EV2De7iaKx",
  "key9": "3GJApqQHgs2QmFy1ZjRRFZ4fnMoX2CbYFpr1jdo3TiUxfUaW4CjKM3JEj2NzG1z8qgqHHQxKvgzxRnFRUmBENL1T",
  "key10": "4LrQKAaf1BD1yRGqjfgZ1j1REk5iMwZHAJ7fpPrY1XViz1nfjo31jWjkPiJZYJmwzBSk2AmcVGdUj1F56EJiJP7C",
  "key11": "5VpQogdVHP7FpYbG9Y2SVQRnFfgGP26WWBz2WraNkGXRSbZBPGjaiNGeV1QDaCXKwrkxiwLQX1fcoRnEWfFxHX47",
  "key12": "368ySD6oQ79jHLkGY1geyejcHqKdzuKspw1DsgZ44E4y79u91PW6AZaNeBghm2Gn7Bdzbd1DX87g1WusxzEr53UU",
  "key13": "32DW8tCFetdrZAxY8hjXTtzwmjt5E4dDaj8SCRLPhndsuD7bMgBYriTp3bJBDHFbNAbL2cxh4HmfFwFvbav1BsmR",
  "key14": "3KWgKoDLTaVgNxoBLK4DLptRqfLJL8vyaRhMinqHBSxNG6fwjc45G6TYsJmPWQ197robaXKCk9ipMbP2YfJEv3XJ",
  "key15": "3WaoHbnzVU6MBhxSJvgXD4WhzgDu357ARztbxfmqaxShQSASn3QdQn9is3gQGoyQE1Z8HANp34rQysUqsYbA3DFM",
  "key16": "38f8rNd5XJ6tvqW6AtPnEkweAnxk83nRtCngtxYUVZZgHs4qaKwuZufUYpaENqz5GxC2DoNUnkemXF3dDc7QR5eM",
  "key17": "2A7R6W2syLX2YrTc8K7SHLNrji4r7JLYZBferCpep4hU4yPPrnJbNXyUeFPDDJaiiXXzFQp4wTyy5GZio7RTcyNL",
  "key18": "25iKNcTgEsr9TxhkNUo7UuQujcurHYJPQs9FFVqTz42zMdSYvb5nZbYhmXEFrV9sgnqDqsYxshA7aNZSErUbFzEd",
  "key19": "3P2ZBaYMJbQ1ds4JSZyReYHkp678bim5WY8cxXNPypf2cdBU271vYAhukdTjMky6Yr5egHkzgMgF2RprdtcyDqBn",
  "key20": "2ZmeiYQrGTDEwahEPjjT5VCePcqvJT4h4xQWiRk9ah8xiZEJ6jMUB6soUBmLQ7Du6B9SGFnaKg8jiJBDgxBZaWEJ",
  "key21": "4nDe11XWHqfRXKzKPvvTXsNvSrGfBoJiJoku9QambJCwbi8STCWVuxCn747QLTYFViP9GNUYV47aWz8Hrba5CWfV",
  "key22": "5L1zFMRhLLvgCqkpNcfo2S755Fksb2EVdhbMm6bKNTy5j6XTiqqXhBDSAPpCujhnY4Pbd97qA6vqPvAFNDxpFDnH",
  "key23": "2K8dcZBPQ9mLbyiApRkfUW6ATBeNSPzgpHuQARihu6Sv6s8QSpNMT8jCrspETz5tfkDjCBnNWJqP8hni1CHLr6te",
  "key24": "3G1BhcRg1upqpwcbSyYESZDHb5vqJYnhT2tTetegGQq4M6rcDp4Hd7ddZ6g5RJuNn79Yary6kAJzPncVJX1x73Bt",
  "key25": "45SQYRvznqJj2PGD3oQmJggH69VgfzY9J9bQQbLgSvLkvMCsFcGJwfonHtsg83URnVZo62uPddhv4iAaBDFz59M4",
  "key26": "5A42xJBzymugKAit7kT2tDgPmKJd4qpvpKDTj5eDUtytjQjKP4S487cRfav6qhTe84HyNNwcZuDsELuosJY7aZHq",
  "key27": "3s2UL2mRFVj131U417bgmVSikdYhEeG45sMg7MyQ9onMVVMpXRixyTs63sj4RFrMsFkmym8NMRfXJLjFfdB16hiT",
  "key28": "551JJVHxxABVeNvFDDKuXcxCd3GcaeqbPpmTMifrHrsn77v1tNcHpPRBCUaQ3nzU8sQ28aV5aaTeDwcyk7RBWS9K",
  "key29": "5x216LhxyNTxZUVTsCHseTTceXaDe7Kmay52c4zVZFvzvgNHy5pFpDfTZG5S9SgMtiR36817b9UWF3fjWtAtoh7j",
  "key30": "tHevtFJKfsBbTdiihcvUpoeoW4aH5Nr49VRXXFzseA49BiAx3iqRxeU6ozDz3aueZ9rZcNXJMgzExYH2xKkF5hU",
  "key31": "4VbRGWubxjZd1qF3egoF6NQkvwG1KtsC6pkvTo2ia2dfznniUPVSgxECvni1R79zdSVjeXHrQmiyq5r8n7ZVFGrr"
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
