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
    "5i4YHifYcymqmzdkqjs8ZxBtQVaB5s1HRRF2KZCJiZqVoVjGf1KCKhNKzKQeN1CvmNxW1fxbr4p5ap4AUHzntWQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rSn1DtGEHDaZyNHxkziCSoEZQZr1rRvFYsdQPys9D8vfHQUcW957xFrKoWTjt8unKJkNhnbayhKouw18nSmqryW",
  "key1": "2uqzVz69nawyr2fdw88f17FmSkLRqJi7w75w7RiH2fo7R7irTUEFhXaTLpMnKdC4o3q1GUP6xBMNXAuqxbSBwHW2",
  "key2": "2VouQ38iBzgXdXX9dgxBsfp2yTxSTF5Wjjt77575HF2pW6fcUypjTvPcxjnRykirmwSiuT2xJw7oWtMvvZgs4PKp",
  "key3": "5SpSXzx9i8KcxZ4F3zx66GWHhg6mbGxRU4hmhLRvFdLEuMbrwi3j9qQEt2j3LnnU3Ry2nCujsuEDr37G53LSZ8uR",
  "key4": "4S1m2xUY6ndXpSpKetYkspNJ5hdvZCEjY6wGPmMaSJYPPNnewrMSkmWpQnjNL6c5PRK5WJrYPCjiBzJqG7AjiuGj",
  "key5": "51ajcfbohYwmMVwFk3rGBiTyLUggffWJZdjbUazAEaUryWHEmRFTEdSBoedkqd8crerM8yTsCF17Vdgi4uUBsH3Y",
  "key6": "Fi9BTntywwQddU4zvbGqLUGBKnHyTpuUnWTmNvUZxw74B4c6Dd3w7cBq8FC5WJRLKXJqQk3AvUkhpJpCTmsHRx6",
  "key7": "PUFh8Uqgx27j4yhYXHjqadmYEHGg9HbQZZPZJ3q7rpm2Bev9DSMTJz55ewxuvRi43jpADiXrx1CpEw7AzJ68moP",
  "key8": "NX8Q2sG2SyARvss3PnfRR49DzSsMbrup29xYCCnGcFbJoNq8a25SutDE8YjPQc19BKaJstBrLd48zmcFvdRtHzW",
  "key9": "4pwLHR4YcBTgm5nF5tMDdUtKgiGRBa9AiLm3xMec8LaPkyhmC9NTyxocbMa5rKzqTCViJ9owHTdKt7K9EJrGkUbZ",
  "key10": "4QWMEjAvpvYr7YUSn5RLeDoGh2s5hZzLRuPTpueN1bZmFm6JoBbS4cPuVUdtxaEhKAys2QgHti4kecuLpdRGJA6u",
  "key11": "BgyBJAE6j2Tk4vVeW7xyYqUBPne6k7gUt6wdAMCJC7TKxWJAmauFcgFB98mKsgtyzhDHSniSpJHftkS3TBVzg68",
  "key12": "2cCUzWzjTHfDiMLwxDZKtCY7ADDLNhbEPvAb4cen8uoZnu3jGzRsDgbdNe63Wr5SB4C4M9dnpGdfA4A2wrbq9sj3",
  "key13": "3pZqbHRENrVGjX6jmGz4KQjgNcPquZM77SrkGVs3SrtUxYzcFxgk1P3DtBm8upeXqf3h6LX2W34urJPuSWiEQvtR",
  "key14": "5J245MrP1Pp6FohiwzcCBnfPNkLk8Ya4bWsbSdEmiQrC7M82hGBVetk4Ha9myMnqGzgEnAVv2HmM371RKivQhkWW",
  "key15": "PQ9Lz2xipPUVgmCgXaKqmtLuQECK3eAn3krJN8TYFM1Zjc32ru9fpvUXPaE7dzTZdy3JY6cw2udSu9ENs6YXYw4",
  "key16": "2LNG9DU7PhbKVPdcmJ7Q82nyobR3yrJBd9gTSNG9zo8sEf999iBxLrPsdfAfQGorsECirYVRTjpoekrPH4VYEPGn",
  "key17": "BF2oULFy9TsH1zpv7b4DME1pfUb3i1uxumNZ8tncNRxyUHg4pPpZvU7ZxSyK3Rx6FHpZwz5AgY7dxSoLYTmutor",
  "key18": "5cZaqfWa3RWUmdZDECYbhGSdZSySv8hAmGYzGTbRa6B4n5rn3PW5BQgRDCaDtEJp1Bpdp4667d5CVZyxhagpjTbe",
  "key19": "4AKQXZKZCuu3GNoQQZhDMNvQndoPiGRg9R8vc3tpxso8XQ4WLcSXV5JrmV6H53PJ3nSZrA5MdmAkJnePfZttgss1",
  "key20": "uVbNgyHsGusrkwRwZCBtVa3BJXZX4kzfHvkCsKVAsP7qfZsvnYJyeXenyCbENgQXRRrpiidJLH2SbFzcQYqwfWX",
  "key21": "23QiHfwJgiFtqYeJREwCrDKn1MKM7CPLYdhzDmpBd9GNwxaYoTtUmsE5joy5dXDvcF4q4UGFtpzshjC4CPU5deuh",
  "key22": "5fm32Jyq55kgN34kv2FX9mWEKg2yBQ3PCyjaK8WFTjJVJ2nre6j7LNjUvEtLPD8DgDzYnsrtC1wNGtsPZoPxSz3j",
  "key23": "5oGuRSDUFjRYHjgGoTWnPV9MzzuTnqEPtnbPi9kggT2SdSZD5xp2pVESv1dk9mi9vvo5Hg9WyUzoiDWm8ifVBfvg",
  "key24": "4oPCmAGuD1y2vRre5j87cvsUFZAnCw6GMu1XxtazEpcxqr46XSzeQdsqhJrQu7QuALdSjBAgWj1gjvbT5LFinpbi",
  "key25": "46FMBT5tLVD8e768unmYEnkWeqnixNWowDjnEFHZrHkbKWALnfHNx2AeJWKHESAefctLotk9nT9s1wQ7zZnLNHUU",
  "key26": "hvgCDuKFGXtPMx5vtNwfcWWxVZarwqrEL3L5tmynYvjihguQS6o68AER4ZRcDhyKzXByoiFk5PubMmGGQWzCcLZ",
  "key27": "545D9fosuDJorLogmWhhZ5gjRRpwaLHWGfXAnUuvyE25tDDiS4PntrRGuQRT9U2nAKVeuoD1dJzU9fCmemL4GicY",
  "key28": "45NCCY6rgkbRSMDP9Hr4BsUoTvZ9D6nYQdsFkJFaCVkGgQRABvMvbpNXibhaZi9BPG5meG28hKBRzfzWEWdCSjEK",
  "key29": "4znEc7vrg3wKmVpsqCH37XUYfaqALZ2TvTzFxgrTGwjKYqsp6wtUWeWxYdmDBxqVNvo4RxjsujAkhzLNm4Xdvnxi",
  "key30": "4rzNbYcR6DEiSzkRNkX1DSV3v3iJ4GbH4FLWvtJ7TNihRW3pwFZfMJfDK1WAau19LAbmf5vTwFPxAZrmWZnCz4us",
  "key31": "6VEZnh29VCzEzycQsrZGhPE7nfXTUCq2HyBy9aL88tNniDy3ypyo811sJN5LqPPJDNDzz78ymineTB9AsSooEio",
  "key32": "3GWw7L4tupCE5FpAByqUXvmUmaeAaR8EsV5edNiM2bZ2QPs72NjMUWo4VYJaMrV5ogFK6UnMvcuwsaDNywhAu3vC",
  "key33": "3RgspCqMN5kqinvpuVffmaS17giqNcLRybEcc9KkSfYYcyMT1cdb5JL2ALvDoB3rkdtSpsPkfHeTNqNrcexk42T3",
  "key34": "4RMGeh7rMZrs8DfmVWmFcoYvrPvxUqvje9FSY9bQpkp3Qbk1ZbeMB1yhxXKD2brSLS7eL1h11bfQMxghkkWzVxus",
  "key35": "3RFDrTJ7umMmjX49FRxjQvPWn5E3ngsJJ67EcqUzXR8MrmqYzy8g9S4WJCX6U4zTVRvx9X44XBStrHVcszJDXkjM",
  "key36": "hRAK4fPknizotowcLt8E9BbMBYix6yjSUQrxy8mh9K8TbEVggCTrfaQy7parpYwihHdKA3zJNNZE5pLLa83W7y6",
  "key37": "4W86SfjawbZBF19hdMBAwCaMpn2vM1utjLfadNptD8ELAwTNGAPMBoXQmE22dv7h3JKVDStpvzcqMD9CFSgU8KKj",
  "key38": "3JX1o1oKe4TZ4dDtwAoVX2iQf3MTqxhGJYChfwhQQpxBsJvHxswvLxdY3WrtHjwFvWvCcLwrqujfeQEcZGaDbuHe",
  "key39": "3fCCkNAzq6nLNbnLo2BAv5VBRkmhe91RPRumm5iTbMBq9okv76VC8nCAFMYQipHXWf6XCurXCWRA5eFDqxmtqffm",
  "key40": "4HERUSiTNXGXZa8kJ54Mh75htWwMx9aRfgr3oxy42dsEffBUC4dhHqenn9YpbP7mgHDbzTsLGipbsaQUnEr3YqWZ",
  "key41": "24wWJqgwqhcCMeQqcXt4rmuifuKLzTkkrgyPxFN4uAq9kEoM8RpGicvZVKD3fNjL1fpTGtzTHrP9FsvSZAEDJEcH",
  "key42": "5KhP25dqqD1MpArPHZzYgxvq68LHqBDR5ZLCyQGHF1mo3VaP1ZXymMAqedGkKpBqSVuHAeC8Hhm9XXuk9ajvg9Hf",
  "key43": "2kaiVNm5BBMN6uuMJaKBjbFV81coig2E2g8NJiAcS3fcyfFpLkoSKpCjpLssQatBUQ2eJC5ZSdi2wubkpTQznr6f",
  "key44": "43y3CniRL2JMnxfszL1RSVVhX4aPC2Pc3dJwjyQrAERFUhkZmv9vYuPUWehqSJ1zNSftkoCTaMUPdVbhhyhVTVzc"
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
