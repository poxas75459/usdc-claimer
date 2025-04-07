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
    "4Gn49UAY2UeyipcQ7rup4BvLaypzoo2QnfRG6znobZJgGt2YjvurQa3atFY2VxVcgb9hNwyGgCunQondNzsiLUSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hwdF9jUoroUGtfcdFrqnJXyaSYY2g3CUEju8yMfvnLCBLQFChUTAj8qZjuDDZSmQEZJWHsR4DkxJ4qm9dWPeNMm",
  "key1": "5Nd3NiAaKHdRGtTNAihmcFDpSJPVRBE74ASymjZ3R8RDbqNYdwW7joubCAf3GvcRHPEMGFGkrNtLEk3HN3BjDVA7",
  "key2": "MVr2fNebcfFJwSQnBN6f4f7ywjcVwHA9qHgELAp9NaVMz1QuV5ue3CdhqUDT1BFPJEvXThUuEx4pFnMtJd15r69",
  "key3": "45RD1czi8J3iH4v6qAMg5pUknLVZAsfKZnLuemNnXY6rqjoBqSi7BQXKxoCnVPtV5Q2v4tYUmfSpc7xPcYuLSPBF",
  "key4": "3KjejW5QAxuKnfQsoAKwgKcb8AvjxJNya8C2DFR8JyijSJFiqxAMpFt5D8mtdqJKSCafTk94thJy6C93aQ9cK8EW",
  "key5": "4mdz93B7WxcmEvB4SDSdV1pggsRDwCi7pn5JqeP9CH2kZNRvfsu7bWjpCX7C43J3jT5esjdgv5wE9otTidPisoSY",
  "key6": "5BgN1QtXBLVHuohQy1nJBZ5W8upvDSG7jNncSnpQHmBrs6tqY6jdKhJ2Qx82VbzZVksfz5cacPw3RPd6oa34BHyK",
  "key7": "5GpB2fJhTqFxauQKRs5r3ZKDCJqzQDikZ17bUrq5KZi8dd5XEQv8AbHetEJzLC8cEmHba5Ji1TB5tDWJ57nUxwGp",
  "key8": "5okdHaNNZKf3uzrAUkJr69AKXQTYNYScQHKfTmB4ztPADbwW99aMRvfeMSBbVygH6ZPo7hg4JFDLJv7Y3jmXv1Q9",
  "key9": "5qe584JjGS79kJDNbbdPfj485eYeJvF9GDSvY5skZKpvqkU3r915E7t6pBuSm9hG344nzdjJuyBJUXe7RnfKqK53",
  "key10": "v8G7BvJKb1j6LwS2n92NKqvKhBhj5hn2oxjszhjv5SSMQpdUvnmuLSEwXYeyEUWxn9rbwmkKXpiXvSEmsis8prj",
  "key11": "3UwvezwRUVdPkGrx8UTmqQfqF69vuuQ8cqbEqT1DyPeouG5idjREyJiYhmqftkirCQmb632b7NUEA7MGwAi4oGfK",
  "key12": "45W2P2HdX6w1G4RjDKEeczcHmgatGJBbJsWdsubvqwnWeeZ5nivwouXE2dTuoZzbxiA8u515DChrMQCdrcdz94Xk",
  "key13": "52cMJNziVFFA9t5dmhovK7UqUYgANj6DVrSqbRu4NiHypNBrBoRwMH46b3x7RAYb6ZGJ7JpXExNxpa2y8smJzASX",
  "key14": "3foFttSXTG4iZiNn5YFTfFtJ1dpEEN9svKsthZw3YMCJUoEUHfgV9Q3Ba41FwfdqBogV1HHNyGiUpwY3PGTLyPGP",
  "key15": "4eCeenDRGtpc9M3NPPtLxHq9DoRmvXZjtc6yBm12mriLzaEftqjVywm77MZaYSSZJ94fvfAfZB4XgQ1e5bdhhfsD",
  "key16": "5ZbTqs6gfZ4JBdQ7772QfytXWoRBPPiJo9vE96uRmSz2MQZkiB73tf5qeWads8qyVuCUsxmCPuUQeJYTL7aAL56J",
  "key17": "3cnXTjQgkqMeUS1zzqmuUpv7WNoNohEm66a1djusZkAxMFp4v1CUqu9uabyqrA1UkB5gox2fVnrAh8nT7gPn8icx",
  "key18": "5WQc8Xw2n6QgTsLPT1g4T9C4SxmQPyRHBoc2Gt4x29S7H7f6AGBQgB9GEzuDTCsfPiNRmgXcpiGywECjVmYAVsfm",
  "key19": "3aukE7WViPsMNJXnErYdxWm4sy1immeLkMds8cFF2UQaucnwkcB9LLFyiAm6hgTfyB2YQpkrDLeZ8b94aKAyQC8W",
  "key20": "5Nj4JG5sNJ4heUu81rsiSZ27ZamR2KJsbZcenpf2cjFDXPiQk2AeDwBWWnunXDyFvXjkiCAfQskVeDxTW37eSf84",
  "key21": "381Cy9PzcCBbKcauXWmM7dmDoAA6CEhH4JG6jwHeWQVgf4LQHbBMiBGGoP1NjTdKCgno4QyqDod1YqsuXpu8wBNv",
  "key22": "5y12emn6DocJZ6CoaxLzhmX8CYJD2WnicXiqTDvmRKBh86NfMarWHstTUNfnXe9Y7DouNr9F27t5r2owveVSFZGX",
  "key23": "4Na1Twp1NyNr2x2VJxRUZp1j98qAj8iUZpUSf5BXGFwTcinWHL8VbsJ8rbW5erM5S6rN2dUAM5UYjoqAYGXrR2GD",
  "key24": "4stHMKnc7vp9T1NUCp5BGchnE3jfwYxgNMty1tY8NWPjnNtovtFXprbUNzNxVmn3zZTQ5n56CWstzU1YzYM7ugJ7",
  "key25": "2G6eZ7Wag1Y3mHeatUKwJzXfGeFuDqsjCq57sTrmnj5BKR7ouSL97Jf5e2cGjEJQqjmYJfw7w3sCXpEbUsfyBMur",
  "key26": "4t298iNvNp7tk3AMLGMrsWrtUCa7iTXsnuJkb7qCQ4ARmhVAqSpvszEFCxPMtMmkUXpfVT8AjVBi6oCG3WefjQxP",
  "key27": "5rqR3fhDNGsX9mh92ChvfXZiqZ5bSXpVD4iJxkU4FKf1ZikR5FJSLV2uJbUTrLZKQwWGcixF6dNQZ6FZm4Mq9MKF",
  "key28": "4ewgnBtx8CSqTfoghN1gUUdGuUyQYGm2cYU83hPzTHHVeoZnKaNVjhGJQbCTBmvrNcD8kcgSNY5PrwrBHhCScWiY",
  "key29": "JJErWqfjnxDP1pFpqozPzRYJjuJbNizmZMJygitc3dvb2Q6EqYJrUEa61EZnATc8Y1y2i4t8FjCXuURn6EXK9mT",
  "key30": "3XD87zXXemTzGpoV5rVGtnmcgvwgbibSTi9FYZPQHpd8e57RiVn3auVEoQDawqBZuxiXZUgzCwtAxPPJxRnJPmez",
  "key31": "42cw9V9wfo8rxbdQ3kwYgMYRKNpa5m8JqLmWBC14ai9wEPFCUjiDcVGT8dLu19Jo9y2aN4YYFuLqjuLcGbpvUij8",
  "key32": "3tAGZG8ThSB3JsvN6tjCEJVDwUXSEbNwyGWkzqrXHPDTe8Vv6ordzc2GxDsQjNhSDTkVRHgt8EdLc82rNyuTHPHD",
  "key33": "ST4C1dwcCRPb39Ewkm5doPuuJGKsd3NjMSfGZ9qhUWCbHaHH7z9QTKNKRPNbkgaExbFmneYmWcxKKzh26r8Q28v",
  "key34": "gtkJU8vHidRTteCtnpfi1JVenoGKiDCiiRABearXDijRLHwpVeZY3qvTkUh9HEPdavaAsFESNDCRh71A5EhtX3N",
  "key35": "tqjFFkA7F1iEAeW2ebYiZALXd1LGMdpnh2d7uAmwacskJYXon8DCA256a7BSHm7QDFwm36rqekydXD1huRgNSr1",
  "key36": "5CBuDfnuhMPAiRCKww3vBVCUGRBrHGtoVmHWKsHNpP4Ann1Fg7t951W92gkMSnKtTwv3WF6fDwZ7qRCNhaHbRhFj",
  "key37": "3sXWVQAc31Z18iHmAt4cyKrWWcTA4UqZqphwkaRLSczgx2H8aa3w6AVpZAS7QfftufFxr3K2kcAcko7R4XRFJQmy",
  "key38": "4k89yZsYvQvbMGun6j8cchRHJwNdDUjG8dJWvPRp5mA9UCY7gELCRHkfWAKE4GZYHu6GkAGHi86hyg1cgsPKbmHT",
  "key39": "61mpWe934xrtwk1e85nwfqGB4f6DdC2mefpQ5UcUaiqCV6bbJSEH9cGCWbvmLjRFeTy5KpK1ndXsw2fRY4q9hhbw"
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
