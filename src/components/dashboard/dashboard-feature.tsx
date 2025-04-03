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
    "4AmcSV1B7jg4qVdxVKE2VS7W1jMGjK55uJB6HCXg22jJPh3GdFxWtv6oDxgRPGP9SLSDNoJdsftqnZumTRZAjNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjYdDwTTL1Akc4x4556XFGjLsZX2RZwopFg8SoTtLCuK2QCXL4GkSrqSrbEeygxjA1qZMr3CStougJVQs2FovGU",
  "key1": "4SCSndoZ7q5KvUnNMKs75fnkpqpA2TsmZGR4GvqoUVMzuj6qGf9kuXDyW5EnYPR66cGxcYgAzr9t2p57iUBJ8q9G",
  "key2": "51VnZiSCn8FFTgYN7cPCKfPZ3j8n3p116jPkV2ha3ZVDYoPvo8wTCeerj8j7iL7nGTRnNmnULFBSdUhpG5acvRMq",
  "key3": "r9NbdupZuxZcCabtWF7v4oxUUEHwew1143K51fsY4Pgs5epWG4Dxmps8kv8qbT48FMnE3bqbuQmn9VSJYWbcfRc",
  "key4": "359dAS1DoMMEBfQqBdAfKqaojyAcRSeF5aCP2cMGRu48AwZQU1AAbwXnRVhwNZPUaeoYgMUi6a6wadhUDqR5HyJ9",
  "key5": "4zTAc6pTqHNZLpJYvkRavXY5rY5wUemnBzHGyLcpJSmi5nySdzjLLJjartyiBxnyQNf5Bkxnifcz7SLH2AR9ta4f",
  "key6": "86McAM2GRSscAjrjLESqBPUXjGsYv6KoU8krU6e7aMxTrSARV559bt7wNVNq6f7P2eae5PYEVpLbhMKWzvuFdkV",
  "key7": "2NExEof9P4svUiMZQMN8Ln5K9XpSEMs9P5sPwnhkoSamfja5q6AVqfsGGtFwSNg58peYgcFiPufR5G5DnyyXQEPP",
  "key8": "23V7PmGH3t1Z7rAmqVRpbzdrHZykRtNwRKF4xEYcqRcYDqGrurNb3HX7RPLL28sgJZj6nLejEXe5CBpz1RyNHNi3",
  "key9": "oKk4mSEQBWy3my5mpT2VrAjVK41mXuwfqpRyUrMD9yReAiTSo7oSvAkavCMgBqbfCRbUUqjoWzjtQVsY27882dE",
  "key10": "3dsCe31v8F28QQTfQy1yeeQHfyA4mmoKBBuevXAnUNTK9vQdR6CkHK3ctBSfcz93XBZ9eqFKWSydjXoKUndXPJK7",
  "key11": "3VHr7XsNKVn8u2YAbWqz3novjBFRPiVhZVzj6Wvw3jzm5ASdQTKYx9ciwFntPxHRfWsho27igwDZXgGBH9WdEZmx",
  "key12": "4me6qnr1J6q2jUnG7vCWistSn2vbqGZLJGNnuvVGk3nKAAss2aoYhiNhrSeRSPV4mrNPSyzZvUJ1aZQmqTohpfmS",
  "key13": "2ASwKh615J94oGoeaVgRy8jZoDyUoYPrxhLxHp2RRbv4wofLPUrhPRX9SL6TGHVzNqQiZf9Xz8q8cKR5Nrqs91iS",
  "key14": "5xnvCrtbNPmWucYn72sT4ViLYKGfMkEeenSdrviqyQ8pymFf7r5rQFuYw4Yf6FEGE5hkc455qZsH6qjNkYtT6xho",
  "key15": "4aAbseUJ3m31KnW9SDJkDriif7WnehTXW4HzKYK2kLT6ym9d23LsLmzHoHCcF6cSzt2YSRFWjjET9EvSAL7qaAkB",
  "key16": "3mSbWKVrSpL3aeviiNAiJXEAH5eoKH9WBnpEGmoGWV5GrmfieBb1bboZS6kY6mtzC25LzZFCzWpiqWYvykXc3oDP",
  "key17": "42bg4TchsUeAZ7omPioTvv29bSxDcLGDQzNb16Q8QYppZQRNfqStCuvokZ2943xfms6ELuAPn6aiwiBdWFonZsxk",
  "key18": "5GZp2st6oC2zRS93LyLPUVADtGDNU9tY4jc33DwNbDnyf4h6qkHniLseCQHPsj8THwRfVySMGi45iZwZ1K1yX4Ug",
  "key19": "4RUePS2Q5AVWtkurYFkgZ26Ezs7FqwVMQBco9LxLYiUM2YM2ja23c8h6WxHeSfC2SrYix5QmoB7L6Yf7xUoBv9F9",
  "key20": "5vpuHGESoSjANSmaQxrPnuiG8zPQCkEHcEATshoifmyvWhxKevTibsDYWp4vLshp1deoZKZAdiSFM8SSZGnqgnjt",
  "key21": "5TmuopAEem7k43SLRGvkESrSV8im3bEHp7VDrgC86q66cEptDmNyhPi2RgjE8a6CGwuA7JD9YV2e1yNfSqW6ZofL",
  "key22": "5M1Kw2tocvvLgzq5h7KLiNiPNH1ZD5PpE1iEQD9daswuPXYN7qcSDyKWLZrYtkR8m7F21xN8E4p5CKvwn6UTLCnh",
  "key23": "3LzHPpFFi95SL34HAYdQCVaa27H3NCXXzFVStCa4CGKh13hzuDaCGdqkCQNRBiTU5u14YF4rVBQ8yL1JP2q8C7hK",
  "key24": "27Gv4etvURoLzq7uVBCwCDrPPfror5qEgxcXopfA1DP9QHYPSRY7rK89x2jQQ8viQMML76MtbtyyggVFpkjDhtPJ",
  "key25": "2eMSQaULocQVk5Xo8Vh2NSbBcGXFXcNwFcZBADBfh9858zDnaYD9LGfdqJsUJoZ87iJMsknGUaFzWPYPcXTXByNM",
  "key26": "2EA7mtNQ6g84n6bNmoDHnEZqqaatHDYdcFeK1GuSXh4eLWeZMLJotvbVmeVbiEQY7J6J7cXAo7w9KAgNHUWnZx6J",
  "key27": "2uNd9R3yAiSFEQ7n1eYJi9Wc8uPivb18po2ktf34HLCsRRQkgdsPHLAxrtsoVs9QYCSxT9icCm4yPKMBQ32iMsLB",
  "key28": "3hHc1R5ie97qZLYxXHLhWVuyBtC7vuvucpvhhnPsNaVGmLPZgdzMskXPWgN8pY1wfgLZ9evj8zPNVEmwS93ur6DH",
  "key29": "4r4oZfy1LWrqbAJWfN2RWfLsdo5rXSr9ko6PmFjcHBisu5KsJqJ5iKvFNTLv7WHiXQvR63QTPJuZLo8Z1YqGAzhQ",
  "key30": "2HsSx8n3Nr7S1VXzWk57BUNDSmc2qFkapTiEttd5eN43kicMDoy9fDJTrm1pQufBfDd9iFJzrmdKYTQsRbdvZzTh",
  "key31": "CM5EmoGPgXYeexaaY2Tt5vZxD5LsbqaeF4pFWBN1gbFVCf3WrBGZFVHTh5dAQgukHoyRjv9UGUKn5HBcqQ7bP5R",
  "key32": "GWat1coK6R7a7KAtK6x4oMp6AKf39F7D2iMA6p68aJbFwpV62Zk89AFcJYJNvCQ8nK8ShbLWsf5SL5J6JJrQJWx",
  "key33": "4KCY3kdceLJ7EQUf9AcfroB5K4G37TArsvk1AM5GBE6EMg3hAQ6RePMReyaUxA9wFfdrTMeX5bobJ9xPmB8mqpPE",
  "key34": "3mGeMRgfZFtBnbb1xyCjvFKox5vLmC886TW7LScbKSgLDS3UgqgVUdLKYkTjAPGzFVifgTLXnNP3QCwZW7dyz34A",
  "key35": "4bhGutXuK7EnAN3R7zi2AetrrU7nkUHNSbQFLu96EJw5wBocXyFrs36jhGheufKUBDPG7QHicvsVbxhcAzPwfhWv",
  "key36": "4WDMHrYsBVh4J1FR9W8Wt6mrxhcqMhuj2UdG7NZeGjyyw8hq1qVLDqavPxXdC3QoFcjpp9PAm4YPwHCYqqKkcpsb",
  "key37": "61HzFshFMsaMESyWcm9ZsdmSaKDoMYEGTQx6P8gJN6tFi17DLBQVrjryBj5uBb6jCSas13XFBm5SpFjY1NKg5VYo",
  "key38": "5PjRikdanEKvaEjaXQsDAEhGUE1jp3Dv2hQe19pqAKjXQp3FQH5pC2cy286f1QEmRftVF2rQEdZSvSAkACq5unUn",
  "key39": "3XooSvmGdHYe8Rj1MR7c3XGGB61WPU2NJwgMs4LUwuVHbh2bgJgMSNiycc6oaxHQL4VUfBkqCGYD6czF4Cg4aWAo",
  "key40": "5uzrXPbPLv9whW1N1YFp4nD8HMm14uPsrRkYdsr9QyM37fG8M7DALSQCb2bLEnYzeq3aD6Tx5oPbkQvW58fz4Vpr",
  "key41": "5abGvMorAg8zo4CVquy4WghsXCaeqaoaP79mhXwGYXDJPPGLrpk32uVwvc1hygSNEoaT7VwCardkVzNRc2D8AN9U",
  "key42": "31oZGpfCb5EUmun5Kz3dRh1irZZPTMoF56eupoUDkxZ2NhjkUHnhHK36aMkh9XcmrpB7Hg1DeTA4e8zjTNbNxVjJ",
  "key43": "4kDCgciZb7Qykmv51nhsXip6koJDXWqHH7Wwnq5AnRCXZy8fpAu4pffQKBZEco8WJrmUr2bq369qzMkWD1UU57R6",
  "key44": "5CZkADZnumT55GQW3teGRSWV4LYP7r7D5ub561RiE69DUfubXujwirCCJeZ9jwMJkqG2Syw9R43aQmQmYzJpFhnX",
  "key45": "5Mx4oHh2KCd2usKmDdsZF2Bb7o3Hg5N4f9oBwjEpdSjSqEC4i8QDymCQHFv9tuiW2TZ6Cm3AirojcHG2iPhGY48Q"
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
