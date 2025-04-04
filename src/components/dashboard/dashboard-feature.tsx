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
    "BJdsQT14Z3oFa3hXKHA5UDKKGeQaPj7CxVNiv6663SGFuXtsAkYyou3KUT6MAFP2FAU4pCxV1rkirzxLDT1vUgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSsZK6FJYrYGZxBHuGLQLeqQoqv1X2zATpFBH7TVeaTznviaoCH7rCoWQJgTdNs4nm8E52VYeZhUbFCwscHq9fT",
  "key1": "6b2FJN3WfYMX6iRPbCRy5F3jtKLMSDjFtuhuSGjZXWBpW2JiMdpJe381UQXzP2PjJNgFcN8txBcS49qwLSySUE4",
  "key2": "3yBu9vdK8uzUUCgZ4zy23HX7WnSF14zT2AJDKg3eC21yRKjewzQ7L2tkzXPA6znsHHh19GmTQ87qPKm2D3adXDPR",
  "key3": "5igzjBGjfUFdjieGrqMxQrKhEwWKARiPix45cCnrRQh5PeF5U8huNCvvepYXJfnte7aqc4dCp8kwvVMeB2nm37Dk",
  "key4": "29FiEhzbwdf2UhusnB4YZ4LFcQKqPCK5fNsLUvsR7ANjUiRiW5n5PN2scKFJFw1J9Sh8QtyXhrDVjws1X15Qo9PN",
  "key5": "4Ew5uXH2stChM8Ay27UzRRwHSXGPzjTd411SFK5woSgktQffW8o1W8CcKkfpP4dv3Ya9fnst3aUXDF9BuwPB88wr",
  "key6": "3yxqJN4FRhu9Qfpej3e2Z4f1PLzckNie9SWedJV6t4Aakr1Y7Xkkbtr6G65HzqXHfDAj5YzKSZ9N9c9o1yPEHpRa",
  "key7": "hkUTNskCpJ8LK7KtUGk2MN2hd3szQuZx6E39EAYpAv4L6M4MowEWLf45wzFMorHGQrgvjhduspaKsUfH89QtLgP",
  "key8": "65M7JTnf3oLt34KqURi6KduhnoN3zsjwAvXmw5CT9NNSzz5vmpshvwF29319d7HVmyEDjeJRNx1k8vbZQmBtd13p",
  "key9": "3GkdhugdNuMdbE6DJ8Tbjej7uNegdZRnKnXyBeKTeQMWVbFx2eztsiBxcbxfpmccW2w73bhxL7bPceuF3NbV8CQm",
  "key10": "32GaDzGAgfSn4zPucrHJ8naV6z4oGaPQFm9xqsCpirUzn94YvTUJTx8YEaBmXRDkRJwJwaPXEmYErPg8LYfKEmG4",
  "key11": "66jp4FFZByLyr7e7Lo9GzCGHeuR2oXd88a56R29qbfDTnAaRBUaYBoFoAj4nFV9t1LiyYyW2vDzZmijciabFvczi",
  "key12": "33rAhnZpg1DSTyav6XTxjD9qxk5W7z1PwM6dT3yDuo9UK3BWtDq1gb7fmRspaJaE5qS5HDro7fhx91Z9kUMpUppG",
  "key13": "28dbNyZEmgJY2jXjgbRYiXBjU5uWj9H6T8VXMDG7892FoS4wYEqed3fp9rGV1j2C9hS67D2mxyXY7wvxsnuRJx7X",
  "key14": "5MNEHya9X8JEzWp4uNK96nW5vzr5pBDFYeCHyutdbhnCLYUzqVMeQ2UdDYsvEbQqtmQQXdpNtbfmW72wEHd2GCee",
  "key15": "3nEDqWEqJsfDqF4iDggWBWCWLDQk9akp2zJefZpBSEEe3v5npowbuXpMxxP15bK7T6ye4KcTk3tUi1PS7NL4eWBC",
  "key16": "4Prw8HpziWZnQZBgPzZXYmH61Ejopd8mNJ67EmhHzNwVzBeEZVSPiLVrzC1twCi7eFY1EiERChKFMicv47LSXCBi",
  "key17": "qf3EkA4okffr6Jxpj6Vwh4L73JjDH3CTgNjrH32YuPByWR6hJegagx96f6Uwrxa6thTRCNpgzYDuiP1jjFPsokf",
  "key18": "4umY73ZqFz8NCGnd2qg8CGzXnSU2DKUEQHSmqQofcEFFjySdchkz9HBZWKKFZhebX9NAr4Nu6b2YxDXYnYwzqjEd",
  "key19": "4PAAvt7tGHb4UHswZW7TEppGrLXULbqEgJ1DdVBZtEuSf5CqeGdpnis8TwrVCqVqMLFrPh9ue3tJFYMhrH2CbARd",
  "key20": "2QjshnMxPyHNkWkWPTBkMH6K9LfhshrXdT2AP7qpLDXhZPoBu3B8vvWCWPqPNVmt4pUXsTLEgAm3rGEkXfzGqeGf",
  "key21": "WC4TvQWfPopWyLSRf5Ag4E6KRJ9aDr7RGqZmFJRX8g5kmcBmVDMPXMwvPCy8qPC2eoTciPysndp2dz5qUrpvLJU",
  "key22": "3wXbWqFTGTEz4By54gJKBanVTaAsDANtwUYg3HXbpxUM3v7iHNTCB6TLkYNb5aGeCEBnzeoZSM6ZAzwFzgKG15LA",
  "key23": "5fjme4zM61zgHU7pC2bUseKPboVeKD2hH2R6gJRsany8qnnza4p2RpJTDDuNHvyJN2od4gqsVFHt6xHbVv3xXTxX",
  "key24": "UUsQZVTfgpPpkqVdpNa9Jv42ZP5fwmA8f279kXPtmJMNBbjvXG9j2MrejnMihTKH7k3xb26QA5khSxLisYvbkEH",
  "key25": "3vQ1w7hkBBHXwRN4c9FLKrMD7tpViT6K3fs9QixSGU2HaDy6c5x8gQYdyo9CWE93qLUsnE1e5PdcCvZXfat4k9Sm",
  "key26": "5HLPXFYdQP9ohE2ne5fSCivPUqCZ9xG3DfUo2HFTeQ9PtZN6MEMMK3sbfthpMjmRvVmtPXq8e4DfTEpBPCKQcR3m",
  "key27": "2jMEFFF5QEGBUNV1dwxbngSoAXNjQrCLcmrivczn6KYNKJwkMzBMBfXf48gPjXs4bXR2iic5cu7L7JTzRtKpCT4M",
  "key28": "4zUmRAWBt9b9dQQ2u99roVcDjPNvnzFhKFLf67UakRVvFTN2rewYpuhWSHcyU5TC6fa37ZFM5FZQ23XJUD6oK1sn",
  "key29": "63GqSt8rCSctYSfskpCvDyNEKYFM8JkVg9u2rnDmt3H2x1yKLxU9i8m4KPMnwNueNgG7yhg4NzThhEmEphzNYvKA",
  "key30": "5q98KgJcsfneYgvq2NziikiwVcDxf3HCKLGmuk8BhAwy1Q6QxL3pynzmxefSJHXbFB3oqrAzB8rD8Kq6zJW4B66h",
  "key31": "5pfTQWU77wkTFUssdPmW6H1U3CH33JVWR6pa1WD7HBk1uDDdaiPUDQpZzJihBeGDzj8owSWh3xyM9p2q6mxqPw7Y",
  "key32": "43R7WV31JJaDuezL9U1QZfpCVAaiM8pBiR5Lq1GtHHejhGjEvcya6X66SKCkc4zuJmCnwjLrLnKzMs6XwE6zYrDQ"
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
