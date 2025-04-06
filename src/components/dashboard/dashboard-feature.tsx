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
    "D9b5sUYw4hjuaPx5tX6cfEH9wruCEASXSK1yi8WrhHNo5RV7eA1j88YXcvJz4ntWsoEqe6w5TuLBXDPbdwbFXWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21JRViXLUaMdsF6AUFDf1G4upEhpcEB7Cm5UYBmniiyYur8GngjFCa8W77WXYCZkJrgZbD9Lko7ytnoMhB9sgXK7",
  "key1": "2QSefSkLpnqJ2PpR7xVP2Tm6hkBtzF8WdTsjigYm5iBq9yDcoqn8s8qotdn27vktXkdpTyKM3UzWoFCpNTYuixXz",
  "key2": "HZVqPgSfQrCsBFhiqEqi2npvVggYRfVTi2gMTTyvUn3QwpKMb2zGvoWW4f7ScEGVpUrqDfpF434sLi7EWMvdD8p",
  "key3": "4kbXQb6QJ5gFqD1tXHzFZcZX2uQcLHWXwegDsMN7TnydGuTWv5PdJBiS7mD5kq9xUaNDuhiusg2Cg4Pb8gAW8mrW",
  "key4": "4DPvyoC2zJv5UVbjoJA1TP5UtPLSK7dfzNJ5DtwE4v4n2E5RJjPpMLv2HpYFDHkC3KMw7mWt2JwueyedUhcdtH5R",
  "key5": "4rXTENw6L6sSQhrcmnqKnbqA5shMWNmoWCeXXcmMXPcPPiKgb3BZKZhibzXkUZEK8kyau5BJur4RbkFP5cfp2bvW",
  "key6": "4rWboS4Gjy8yQtw9w3Fpq1sJ2L1DBLJP1hnmmSAh9xEp8LvtgtNv7Mks8Wa14kgcXS3WaPGtkai7ZS6xdensAwUk",
  "key7": "4LB8v2vaYUPruhudTRDRFxWDdKS9iqK8NQ6q7Vbs5SbqfnzRRfgkARuMgeLL7rzfSLk7dcZudESPnzR15SK1dx5V",
  "key8": "4nF5pMZXZDb3ZrcZzxFHSDkf2DcWZRsJC7EYn1kEKJwed4VP2oaAd1dVydbZHTyQzEzbEEcmCBR5XHhfb1nH76ej",
  "key9": "5cSALPZRkBQ5Wio7H1rV34sQizxk9eWS5dSeK6jKxMv2EsNgHcVgGESnCU79m9piDXmquCbAdyDSkmZvAZsLkFZv",
  "key10": "2bJMVE7dhhDUnK8ENMU4JSHb8qF7uCKrKnYihh5rEjJwQnTmJZbXnsfQr1518DD6MM1xBztcTiVHuZSxsgmHeXpe",
  "key11": "2SGdVFJ7koZsGBTv1rddGZKb3D6pWXagZJdQYT668Kz4TD2vsv3MHZLu6NX8ghAySNskzatsq3oeh8iQKNNBmhFK",
  "key12": "4RsmBsHx3EsLv2dYydwYDdHTzKNZeXViUAgVXyrdzePWGQFE4Aqnwc856ruJsz2bPdRZzU5yyUTiwwVDcy4xLddG",
  "key13": "41F5CYp46ikdkR2so9e7FuJetb8DvLQSXQwowRqx2us5zDceAFjGFzsRqVtbd3MXFFkkxn7xUHULFsYbvAScu82z",
  "key14": "247Rcdka7pFzEUcgXAgiVNt8iKwj5UUEDxc8UjyFvySwG7pJTKbFAz4gqhHysFiFgspbcB6r6sC9Qa2H2AcEas4v",
  "key15": "5HuDZ6vwMYSYKoWnvYRDZemwMtEdi7W2Px8hZRX3i6RiStM3UnBZRsxBSEqhSVrwFLphtD9MLYzH1szkdL5kHeY6",
  "key16": "5jRPM5NCuESKa6sJj4dD7N9kdb71JjFjmioKDN9Qng6KgpAkPPE9vt2kVGhPq7MW7MHbUbNZUrf3EkRYSXXF4YQL",
  "key17": "3jX83M8o5Gy6kDsJ1DtjZm8THuXBkAZYmwc4mJoAE9M48FCEeEsoqSRZYDibPMTAvXJybeREX9ZQd8yd3ihMbDDM",
  "key18": "2D4w99soxstztTL48qc7bDZfEeZ47JYgVn1nsboTTKF1TpZCSNeqbjxPgAC5xZaukNkEH1vsQ6NFpsDN7gLiWd6Y",
  "key19": "4qaDbaNgNcSTpgva9yP4B14VXFFNAmDonqhhbqTZ6SfnwQ4gYBG7qejajP4ZM9TFsBrieCC9TdSvC1kobh4rGoZi",
  "key20": "3U3W2nPAhNuLUxAxmSgsPP3SH56pWBcQYff62iKbcuHZ5pk5KDQTSc3J11wpoTnj6Vb1mHZ3o1CSzJ7Dnuk6g4bn",
  "key21": "3WoBByeF7kurASvCNdqAGBzxykVSZd87DREoCYHwSQW8CiwL5tBwPcW78sVYitbygp9JP1NZAnE53YCgknFv9PJY",
  "key22": "4FXRQLyaQLthvaD3b3G91qinsusa18QEeLxFuLPBEVTAzj8uvTVMuc8FgUXHY4SYEjMMYL1NSvSjfEANrDfBbanG",
  "key23": "JdjCMDFgatWsDtsLPNkxiY6g15HnKcgefymPcP9jEZ4knapgXzVBcujFAPh5Xykc17ctKqGgBUuoiPQtctj1XCF",
  "key24": "4ak7ezoibPZvfo4SQnKne3CK9Lof2JGvDchoQ9UXHFfisYavMMHeHPajR6CwJZpPdz6V3Ej2Dt9T1BKtZ7pmTzxc",
  "key25": "5DAhwFH2cDcihAwGgLyibqukYMy984iyWpxBhfX1YMK9HGTky7LcrPSja2n9Dcwx4Ahxe1FRZq1wg7418fXaJroW",
  "key26": "5D6hJv9YUQwrLQNppAF1wrEwFHXGwMWRabdywddXjVn5Kg1xzSyRfDZs8Kjh4fMoH9FJcHJBME4VYo6TBUYNg3G2",
  "key27": "aCGnCYoCcrgxaswjspyq1b8Cc6VJ2ShM1hsZBQZyBh5cdazTi5QWXfB4XE7HwmBXKzNa5aH98bXXjt5EFz5uhLo",
  "key28": "3Q9rg8Wzg1MTtgbtjXS6JBEJH9UFLryCidYXokifviAGND9yjoCcSYM1YLwkLiDnYjh7MMkJWJi3raiaPcLvcZjH",
  "key29": "Sv8uzcZb4yQKAFEPfLSSKmGGikCktQ2gVC3wAj9o6nX9epz8LSdhodKXJcwaJ3WatdG4ci2spftQxEB2BLfHj8H",
  "key30": "5PZaho1b9MasmrXjtLVSPE9QPMLTi7CqjYMPAHy16wbFWsW4WApVmSXp2ubUMrbA6azbPATp2h1ixPBe5RFNvqrU",
  "key31": "5WzmmBztgqMWHVu1bwafuVWLdPtnMoJ7ysphctuLyMUHTbNs5ekRVRcQoisvp1koe7KoDSCoLGKfL3yA6qqm8F1j",
  "key32": "2bNkEPA9nqKHNubLKYUxCdFSQCbyUaNHyLk56cCx3F1rZ1pNRPWMERyFUaQeg5pTTvEnSr5hEV255tSceuxPJBRN",
  "key33": "5cvDq7fStEJQAb7Q6tHz2BYJ5FMSRWp4mKgG3DvVXoFEp421qSsxC5aavUKPu7EeEUHWcyABm1JAhCqiaTnTZufr",
  "key34": "2YwwXrveT9HtHE2Ezyd24i7gbN6cK5PwtLsKh3RMh2LdxhHWVCk5yXzZxcJTsVvPoJwqM2QsCuPkqXPZQADu2iVv",
  "key35": "fYSNF2A8GSwyDsRKyLigDdjeNEurftr4PNjtAQ3eTfg4Uohp49F7arZX2aFCSwFJwweapzh869zWfDzy8uuCh9t",
  "key36": "3LwtnPB23nKyvUHGp3MyYf7PvauF2Kg2nZw593KzsvqS9isWCnsmYAp5oFDv7SB8EdmA7Gkkv2kivLhAvGVoNXsm",
  "key37": "4fYQWXrpxgjjLwNfMvMC3oxgZ48mKvvyNBxTV8D6urqaP95MyYxCWdxLCZ9gq2GVkQjMWiaGsTjs2qz1vVemkBQW",
  "key38": "53t7kiJEKASeV6fNFt359aYYQQnSgP92qSPFMBJFNxxHt1FKn6Rt665PdDnGn8cjj2eecxD7ScWGwqz6EDWwZQMq",
  "key39": "779tATsqwmfs31RrJxH1zFLaf8b8XHpd1HE9odSFKiM3DcSD4GA73Za9GrPR6CUuXzjFCrUKgNCARJ9eacKe9nb",
  "key40": "5BdGF9q4NMhX7oju8C3HVBP8SeqbzgNP3tJ57Jj7zCLaHY4zHsdQ5AC1f1NsZ3wkXh9B2jj4YFTwgwSf8YgeHffq"
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
