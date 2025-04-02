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
    "5rcGzddMUbWH44Crc2iC22tLu2VW6LpsJS3D9AYmeDJ6gQg8WLg93HAUB7ahUrW6DUz5cBfAEKWsFEccGbb4wFrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jkWYfr3zH8WsQbi8D29fEiv9Xbww9MATcAqZ2n49hXYho2jSVTuR4HejMYxvX6bWBoUS6ErQG6rwiuc6SiHA8HE",
  "key1": "3tg6MUbcUzutnTsEg2Gbmr95jaRnCJf5ApuEZEGwGVacq2TcKLTNR6YX7cj8X7PabWTbyzcbEuWzjMgSfusZSQzb",
  "key2": "3zTrb3Mfu2ZWck2L7h8ZAWtTt6Njg5Wt6LUtsRECn5ECjKFXHTDEMkRFdZv2remkg7cxWQMZ44MrPPoSoaFSxdqb",
  "key3": "3pDdhfU3nzaWZhkhjFy3EGtiAB6FfepvYMe2eWDgEMDxH594z4S9J3N9pwGfD79VW9UohAWS3yd42BENHQ98zVFB",
  "key4": "Cvy2bDmrmXcxHf9MVfP8sjYyZMUayBFa572maMZ8XBuL8L71Rji29fpWhyvhiyZBtSzXwAUSqxiuviZMfsmDSov",
  "key5": "5g6VxfpuW59j8rfYAmGM3nZxFahHGnXAaXoghdC2oHdSnuViUe5YTGcJ1qpzwP51D679px5WK3CGad6dU4pY3Zc3",
  "key6": "54uJDKh6TvTY9FepWLw6WcAT8tWqm6Ue3FCFvrDzVfJ5VQEJjR9be6vByqdq2jKxrhhDua93aaCKAPYTRoc96WSb",
  "key7": "2DFrVqMDjcbvupMjgdddezjUwpxS83rvmeyFamYUnWhgeyTTXrHcsqqBaGwEoiKiQDCeDrmX2ZDKYPGbAtSz9nCu",
  "key8": "2zNrMfdyJfTZZV4BD3BzML2xCZ8Jtw7ESUqwykBeeXXkrpDvYNDCzKMDzSXs1A4yVTF7uromhaxuDm3xHqgGzndm",
  "key9": "4WGadz2aUYWjxRjrKDsnaFAHSsRALppSsmpuoD8mQ3cMkFo4J6BJuUCine7WdrAz3gXiRuFupYgJkHZDsNXs68WK",
  "key10": "5ksCWAEZz9CYkRhjxXaY24kQK2Mf8oidrhpkCw85WNkP1AXS4SB3x31V2HDRBT9andyQJdpbssX6qNG9LDtULTFZ",
  "key11": "3hGjD9MM32m3aVZeCAvGrTmDN46pBeRv7CLnk1AfYXt8TPLYN2w4WuCrYr1pG7Y9GNqFfNxrBEk88kKuTBkrJsc5",
  "key12": "uTJNPQoXiUCqKQ2wb4A88cpdp8Y72LiPjHWYDB5WwX3waTjsCJbTavijD72QA2u26nCcgrNaNdscECg6aiCcsRv",
  "key13": "2X3PyvxSHtEy6dpedWuodvFkLSRLrawozYPFExeGtC6eDVsVTEGSA6zZTqLDoNmUHQLWdaohEzhiY2jJ9Gnr26y2",
  "key14": "31ZLgGMpg6VSJ2LnHDfXDY919fj3DB31s8HEoHx9yr2ASULNmbEHWqSicgzHbKd8fmfvhpniVv1SPfJ1i4Q3BMkP",
  "key15": "2jQKzQ3GWARpzwLsgS42HNB4kWyyxck3kGdTBsDUoKgozQqTjxfJ1Kq6Q6YDvdKDfXmj4JBEU7PZiPwJfmkUaEVF",
  "key16": "4u13fRkNT626WpjANzgwWj3mWtrZ3JXEdoXLfknSXevNN2amSs8pt2fQgv4ccot39qqp4DP6FdrBDYttf4RNCBG4",
  "key17": "UvMCRX7k9Joi5KYcvcr2fpfNWcMhTJNVdrfWAzGNgNyX7WQtnYEcavyT55LWKWfF7dGZRUAvn3aoCL1VZQfHeDF",
  "key18": "pgNfgfC2vVSeFBK8EAP3sKs57hCxoKZEP7AMnWEwvUh5hJgQBbXCowzvTaTah2R6oifJW7gQNEug4gpaMaVVsRC",
  "key19": "2b6wkpPUcvbRVPe61ufomnQm1QK4mSBhGBc9oriVsLYrKsshHwmcCzekYKAvCr4CS765WswDrrBTdtfm5q2JCGuN",
  "key20": "2yefoaiJTJazyicp5yRzgLpHenhjrAcdkxhysrecE6j56tEY2um1dKM7ic5a8su5RvBAXvNEcMDH7yckZBsXTg7F",
  "key21": "565e6Di5at3f7q9VR4ArbQj17pC1sqYHGQ3XsztJ6WCT21dinBE9tribzoLSm2DKfDzVS7RhYnr97E1uw4oZpDp",
  "key22": "2NLQrB79ZEt7BFx3iRtGgquUJk5aPZvtq3gtxucBwTtKeU4r2QNwvhef4RLoyEXjo55bbNg8zhESFdQZrbKh1owx",
  "key23": "61pVLAaBUnR5i1uFi2vEUkSqE6hzny3ZvXSzhMdaQBa1HtvVR6m7R7HQ68j9sD9kzjnmMcGV9pDfDu1EnshMgrLf",
  "key24": "3NdbpTTMzK3hEkEwtyChojYcSigrujnUmHQE7iP4Xig27zxBDAdp23JNiBQ7cHxtyahA9mfFiWVNGMXVeR8s2Ju3",
  "key25": "3bWJ68Qx8q8yx9BTURjEGpsLsmsVmyv6VYqAxtkEencgTp2Rco9dESjLp6YjUKj1c3CvZ74RNVNt44aX9ApGuaeY",
  "key26": "2n7ryH6tDcdiVNTSqHPxY1M43Y4HkqbmKp4CrgjhyiWX1MEXeNtRDGhJUjxP4T95cG8vCQrhvZqHb7vKs9Z2PsLk",
  "key27": "2QR2mweKqZ3mKPRz8h83WCzN7xEAdUoZqWso7HtEjjJCqdgnZTjBTamcY2nnHiEaW2gCszoEyEWSwP1W8KfhzyRy",
  "key28": "4puvj5oFUZsVnSKT3YoxaLeDVknUx9nRrRXX7hx8LF9NjRuhkwvJ14RjKiDpqdRn4Btnu8R7VGdvmH6GG857xK38",
  "key29": "MNpZFqTq53FqooongFfEjuLbaDcNm8dmeXBPdek1KRb8Xm6i7FJ3wZjatEBiApHVjcZ8TkRxQks4bGzxbuXsxXt",
  "key30": "3WH2eE55waXsaW83VnKm2cYY64xh8e9y8vMf46EEJYKqdMYs2VPtQRtooL6qtC4SVdGAjDYcN7TPQAqaU4Skodjp",
  "key31": "5b2npTs6KJDodUaPaBv13DARiM2dVG8PLhU8qAwxGo2L4PSrjwDprFW2AuWBYZmsXjPiCh9KxhT2Gn1nskp2FjLZ",
  "key32": "411bLjatYG2gTZFhitY7roU7QxC5UzpYss1VuYGfYDjQgRD8GdFSQYdgH7Wtq69MDqtD75jVxyTLWiVVNX3DEiks",
  "key33": "46Nf1Cb9EvccDJaF3Lu3spLc5JpXJ1oosxUYX2mVX6iWxwT7CHcDuZWVti9oGPAGW8M2hRNAFR8qUXNHE6YBrGCW",
  "key34": "4wkii745s4cgzFvkVop2WF5qStiGHzEBDtgJ8NC8Z15gL2X94hW5ns854RTWrC7MvocQLzzmv7ErGqCAK314S25v",
  "key35": "2TX8jXtpz3zPvff667VoZvrxNY6nvxSSGdSo9iMDgjMeJekeDf1FgvQyht1hbhmRa7HRP4rCQcXjdmX13yJCJ5a3",
  "key36": "uzW3g8fKUang96kFss2wA1cVqSm39dohWGRLkrysR1bVGxJgHzVKVd1uwTvzGrJ5aZhjmKmoX5S5bMg11n4Zvu3",
  "key37": "2zc8VYopZyhzuQuzXkFg5QupQB9fvJjUa1a9LVbWxZ55npd5nSHcBuyM62YTmH5qWyoHGpPi5StCdB6gJK3fw2rJ",
  "key38": "34PRMdD53NFAVCcZyrcDwpe9u2AGDMNv2B8xSLfj4oS3b84PAymZ7HPtHBgB8Hsoh5tFdnVJvUY2qfwRecS5sjca",
  "key39": "4fMzd2NqE9Mhxrw8Pd6LeeKr8VncXtEEkedmsDgdKKTyZR32XJD1dKU95Qn15idfTovW35mf6hQBFVcNdGzfw9HJ",
  "key40": "3zzy7p676NZRZo3MNnNLdsd3278rz8JXU8o4R7F4vmT51dygrn7XRAP2Rxg4PprkuxL8g35VsjNrFmy3ZAEc15Jp",
  "key41": "3MksuQnmjSTekdnuYeaVhNA1szXXHCPEKJQyYZ2M5ADJdQtEoCpqdEiqSeWhCRXMwHSoRAC5gTEqTmVy6YkxdmZZ",
  "key42": "47TUPuVfX6szrMJC5p2oMxWCUZd1rBBWxp4uWCV1QJ5eeZkMsanoQn1du65DgwYAqZ25DbfzEX2eg1xgqEeTn9cK",
  "key43": "EYqy9YV2zyDUwTcucENidzzdrr5XzRR9Q3qHQwMCNwUBew8VftoJbLvQNJnwaySfpDLpE63bEeyVu7Z4WjHBse3",
  "key44": "5W1xt6PR6qoEfLVkggx8oCMDP6p68ZXAnwM9RMt4GAbD9J8FBaQGmSbJZvwh3HZNqgE214h7e8WnrhQnKnctZggC",
  "key45": "3Y7yrTxbJh3f3jHU36qGfBbjx7zdnymQQbkGpSk6DtjaV83veiMJq66pMRP7NDS6HYPhEg261kGHe9Lk8iYpZAsG"
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
