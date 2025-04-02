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
    "3roog1GDRnryntV2je7zJysRSq1pJfdocXQFZG1Fbj4evExdveWsK7eWqjqC7H7e3sx5Wt2n4YbXZTqa4y58V2UQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTAE41Ci87LsYEqPmGG85BDydtZRfUBTQU7FvCHTzsZnj2Wqcm7qrnhktMdQFaNauvakZdgCvD25hN2KhfyrHs4",
  "key1": "4SXoCgp2k9kP7bbqhh2NFrzDNoSVo3CLHDzaLeQEdbnk8zWMDnFs5HyFq7qFK1gd67394itx39r7Q3XzPPG61bdG",
  "key2": "2ov7AscQGWzKvMHtyCYQh5PtGxGqW4UYZWZcTmQGT5oGZgkp3pmoCcx3fsn32QdxMJ4en9qHa6rH2wS2rCTuYFQ3",
  "key3": "4856PWrmqYrNr9X4tdTboJoa2GXRrBvqdGTya46npTMBxYWHwhRuoh9rKoj4QfrqTgt6QUdycEwizFiiAwAmeY3v",
  "key4": "2e3UWkaB4Pzo7e1xaYW5H9JPysbcqYv4hvhneYJCBLJ2gXv6S8MF2Fi4V47oyXwGYUkR2BH2drfYoQCu8H8B2jos",
  "key5": "22uxcLAN4f911YHHVDuoCNuLvHN7DBu1EYvrVn3Js6YXbzimwtNcU1xsx23A6DLt27duqVGdqDCtvFAbDkqEQKQX",
  "key6": "28qE47wM78LoiEoEZUCZzywJAStyTuHkjvsnwExBfT4ceY9ei5cjK1zPamrbon7bbrn3eQmkXgN5G6Gpwv6F41jh",
  "key7": "AVhfMd8rJdjJW58WGmiTFzufZMe8xYuusSPXgjY6HoZiURqqR5mLwa4sicrsN1mZtveLNrfdJppobEdr5NAAoT2",
  "key8": "26yoxVkiqKVEEbL66673E68W4gMRxu15P9aa5LRSA7MSAp4zqvu7CAAyHxbXrcqQ2GCP2Xw832SMCWreYVeVPjTH",
  "key9": "cyBLNoPSVAYYJrZonx1QtGqLbQ66cfZy74sN5mTTbCre86swBMrHAdowjXX5au59JJsE4P3KkC1P8Q5idvR2eyM",
  "key10": "s9VzDizdRdqxDYNF6DHwYvnMeUEajymNRFxEaqFqp5mgfEwmhvxPrCXRVuxoeCMXkqMRL8PwqGiEcmZNahEYETN",
  "key11": "4SveFNdfv8Dva5DCZk5gc46kmG3CHiPGQWBJ8NgnEPC4e4H7WtJvec7xD6X6D53TuB4dYXZmVDFipJeGz71BMkAJ",
  "key12": "5T9ubNmVjVSug8dQc3zQ86UAUHRw9uHx7rYMW4k3V9GqwARfBehMfrWGkZn5J6bVgtuZT6UZonWiw7ngTmXobRVo",
  "key13": "D23aHa52oYdwMnJy61YiXmNWYdq9ZyJSx7A1CzfjHU1vaVj4dA6LwmijVzaFgZG8fzrZaWV8jbCFZkU3AHXPvSK",
  "key14": "1FDAk8NarNprRcjNCei59gXFoV1b7DC4ghVawzX4aG4wF3VPhrrDLVLTCxER9f8e5Cd1e1pNu81pxXn19m8xWuf",
  "key15": "66aCJeqFDTTe5Ajzp1xgqA8nWjoHKZK88ux7F74ARstjUjmmGGswwVLf4DRthwmQyT9E9iZAViapnd55PySbsfLf",
  "key16": "3gR3PDPXhqzXJxF17exXLtqm5mFAcwGdYkQEBQMMWeJq3nTVGBKgykNhE95CoxcaQayGMwnP7FiTVJgMcsmEQm4m",
  "key17": "4xyGCCx4FntZcBva1sGeLBusP3xog3rG2kasSHmCkR8d4x5kbhnfJgmaVWDnP285LTmW2JgXCAnz9kbYWM2x4KNP",
  "key18": "3vqkJhSn1iBvySBu4AhdABjFeizKwmGqRedoLxN2xnKDMLZe1rj53SyaAhZynsXrWNQJW75nuwKGNaYkTULSRRC8",
  "key19": "ip7ZtSoZ6Uh3YhGgoQgFCFLnJznoMSfcJQX1NTfeKDRHoueWuhcFUZ5tCsfAsDYDGDLAZ8Fi6vEtYCqpByEYZhL",
  "key20": "5wwjPG6jZjYhoek6MG8DRReTczEQvMfa6HkfzuNUHT7KBVbvZUmsQ8PTBqzVwNwPjZmaTzFk36ekGBMYYQN2Bzso",
  "key21": "4GM68kM6DU7v13wCsBVyQ8eUxn7U6988mfs6wdab2G1QCXsnyvTbRT54oVHB66WJCPLwWZX9xm8Vq1wFbDPndzXr",
  "key22": "2z1i3V4R6nqMWMKHPd2mJSovFtrenNkQEQoWUZdhiCwnW3LeKCqF54YeGwwT1SUam5fcp7FhSRK1gkEY8bq3Yzae",
  "key23": "3mvyyAoicWKVj2xYeJcQYBRfZh12E6GMinYvZXc4gPe5L9YfzoMa2iBHHxTfrmYfE5gfBd7DUpscbdd5aaF9oaqs",
  "key24": "5kKC4mRyKfHwAbuf3ygrcRfN1Ccfpb22ELkZJMBtMqzxynuQTUghezwVMx2opKh9nQbF2oSAdtfsFR1sL7B9o9se",
  "key25": "3LiXHRYUMjfG6cYL49WH6qAkbY5YbZCCABp1HkxoXDiu3kf7YgSYk7Qj2unm23t2SvBBtLLE3py5XbG7zU7YXFmf",
  "key26": "2X9DBq2trWw9vuFeUaWuSGAB8P94E9F6Xv2AmTEmSHKq1ZxZYiPaQxD6u5JBtfoDxdQb5XpWv5bp6EvbiuBnopRg",
  "key27": "65m6WCRWT6FKgB1PXvbBot597kiHnB4ZZRpyQrTmQ28ySa8Gi8vgsvqeYkVPNPwP3XB7s2Fxi5oLpoNmQ1oNobQh",
  "key28": "47Z63UvRtYmuf3qvEQvMhApj4yBA1eeFbNNRKeaGPdS34nQC4YVnq6tReoScsRza5RL2Md8Q5t6r4ygquwy2mgCv",
  "key29": "t2bA9C5nRMGzCu4hCoXcED7LRAowNFAuQg6XiMPLKyg8D81iv1DQ6VtNuaP7N7Y3XP5TFbVu4CXP82EfY81AWpf",
  "key30": "4qrrckUpJtwK3kyrxPm3jV8dqoXVppsSjApDR1tv1ZTu5fArEwisKteQxFjEmh36Vna1BYeMotDqYAJZXTJupoSh",
  "key31": "R8ECLTcXf2tYAbp5W1Bp5DhVZvcFGmzG7WPDYdakahye99XngQs927aysSzYrACkWeogBLvZZ8ndFujFkJ7mnF2",
  "key32": "dBKfFAuUPXeDuhTGwYTxDAie9BDkVmZuZEHUimcB4LYXoQY6JTj8y158v7pWCqJ4bZ4B8tUUd174fRBumaKY2E7",
  "key33": "ePAz8hKiYoEhDr4uJ42g9QdjTvpxf4r88MfXCrFQ3EEeKrRT1dKUNqEZTV6w6ssqNFNdUKLUdWwCMrhYQGqr4DZ",
  "key34": "ZjpTSXCyXAHqfU7ZQJNi9CfMSC5nfRpdaiHJMpCNCqUBzbeHbxr2DtXzzwdW3kp8oPtN62QMcD7zeN3oQaitsK7",
  "key35": "5M577U78G59x4vtCSkDUHnVsypwPUDXuFdiqeJKBLRHBmjRNiBmSLCU8S2N6bfAbxypdtP2TXjLoCuzbpY4oqKC6",
  "key36": "3NAijpaPJTqkFy7DVg9KpegXXg4CtGJmpsVBx2BbiFhMcL8s3PA5pkBKbNaavpmnUT2GfaetN8if5kMtcuavFNjw",
  "key37": "4X1c1xJZYvGgq6BLpFnmGfVevuXDMKxw7cUBN28oEq9HYHZxHZw7XSaaKM6bQxUBgBv95fQJJSBWPS8qQRYVMUHT",
  "key38": "5UFTC1JUaQwAp8REdH5gfmcEeDFArCt7yXm7x3BTfXFKJRwhc6B67oM4mMgHBAfJBwX79w5NCiGSHtw26kjybKPc",
  "key39": "vDaYNtVRRtUGdbEL7Ek9h3inANuY3UUmaifGfFMiHg1zBNwEAgcnGBygSvKadMdoqbVqHSsPaNBZp1a85uDNffs",
  "key40": "5RXPUVmcedtf1JQzFxpLgRs5h3yd3v63QPDFXmb6zLt2EB8MzzGWsXTbcmN7qDthriF2iJSP1hG5VZfVnqhLpf8n",
  "key41": "5GAHMxCvyZtr7qgEPqR4eXsdUyRbNmzdUupWAo2c9uoCx8poTsYy1XBJ3W8en3p6qQ79NaTuCLLkhAnULyo61ftP",
  "key42": "4JYDpSArpQ2sPS4DUuYorBrVkrpknxDfEoGMYtUfFEFy6TSmBAA1RrVsC5Md92U4c2Z4gqveJrKZoJfs9FCk1t2t",
  "key43": "5nEkCEyrGhEw67ZJCy9kDWFqyMwzVJfvUfQUgQkkB1nXQu9R7EKWGmAChja41EDgkqgAWVyXJpdbhCrDqZoywHuo",
  "key44": "xFULxNabZrqTk3eFWpDkVamnjzGaiZSenpNgVMinC4PPgNquiqy2rxTFJbbooTiN3qsrzATJyteK5exUTqk14KQ",
  "key45": "Y8FHtjoG3zux46by6jaGJXjG1X3uLp6ayUxbrwkFw9UL3zrjcnbDdRWTnqCbmXUE6V6tdJ4f2CPHAj3PZGu6HHU",
  "key46": "2yy9tvH4gZpuKhJ7LTvHEVNBHoDo19mzAhcfTbp1stUkQEsGT1r6KEeKS9QZMjnCoBfhcLbxLTqgHEa1nT5EooFn",
  "key47": "9Rj8jtAf16NNTB1GSZ9GEHERcnLBtr3JELMAgXHFrnRh5PiEX2A36pm25BFjvRwpNojGyKaCagcdD9iwxqkCDMm",
  "key48": "4nnPigZtY2Q6X9qoF2q2RS51UP4Jy2mdpbxqTfk68ZgYm2nxPkhuwR7DRfpES7sNN16t2ARzwk8LTLkHhXWiiESo"
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
