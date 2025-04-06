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
    "2TNBZoRB8xXriFjEXPS4powD7rMYJQt3NNg9Pbsz9EUpLjWGkuude2NBKmCd9iqrK5w8TWCcdifTugvJauHAtmaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CSbVS9pjahxkRVcTSz8UEQuiZ2mAtFvMhmousYNMrWRJSpntCZeAGMXWHvJNm2yAS4L7sEeUrEtwECKtqcksrbE",
  "key1": "3EkLuViq1XAvDDApWEc1gEWGDyuWUDyAxcFVM567a3c6DqjEeHdpgxEgntCHkjv1TW7zCbtcLZkthaeQ2kAJpHxx",
  "key2": "4No4q76JW13ySkvyBGq5fkPr1J2u4z3Nzy5ZoVBKBnbbXxEi2REHnNFmYzcV5TuRvm7UHXZwbDqmspbL1aqCrHB2",
  "key3": "3rk76xrSfuhtT3msL43GH9UuTduTMf9RYL8EpmR6yH3mxmZSJJkBCPWhZzFXGS3Sw8nvVEVsYdVsgAdMTWsmKdMt",
  "key4": "4yvA4H3XoA3koATV4UzDTL4jUuBX2uot1HXy9vPG4BZrNxdiBDXxPPkPQaavHCd4Gn7rK8GzEZXcTqQMc3LJhLRy",
  "key5": "4dxGC4L82aQtNoU6YKrcmrv63CLaDKgbBu3rBjhjVpsM3jRjhWa9SWdtAGN3fwKb1sYqZQmhtYJq4XQYVgcuiHjA",
  "key6": "5kiBHoZtRX9b3WjBb9b1SNQHs9piwcUybZMTJC3kpsBYy3citPVAYrMDwAdWTHAcJH58qPQ2LBjdvnKywTeFqof6",
  "key7": "4gZBDpwG52P1Js98armjobckZbbQKQ8ZQaxt8LePz4EyJfN9c5txJ7jSP8H3PugGesRaxmyeNDPTt3h8RtacAGvo",
  "key8": "44mE7XtLaXNqQFWAbqt5Dp8q55WcjG1gHPUTSxz3Mu5YAzZrZRZjF2e9MPgyBCutQfjz2Y5WyUyEPQZqHF2t5QU9",
  "key9": "am6ce2AyHrQQrW79P4EkHePiaxVCpSVCPqggu4Bi9jBzmhvKeZ8BVKDvr9Va6rrMkCkLY3wc5TnL59vgBzFvEo6",
  "key10": "RcGHvCqv7vw1bj5Ci7trFbWV98DAEBdojd9yBAyDF9WWRuq3wgkD4CNtTCTNwb3x8zHw6mxshGU7D4mLcuWx2tc",
  "key11": "msU9pkfvLigqbVAaumZvjw7ckSVLSTBnxao7YJSGJtpiFKJPuQezwuCFLd5Qqy7xYboPVwL55ESkzuEC51WgkKF",
  "key12": "38aAKV76yvzxMRTPHbm9cq6QUru6qFpP6CSNzRCa5YWUMqUzhXoB2F8sxSa2QpJLavcYhKmsT5ENkJwJSCGPhkSz",
  "key13": "463kyTKD1x5jSn9QxoKMoCNxgfBaXJTDw41BeacGbUKWxFZZFemeiy5jULKWTUtqkiAihTGrNQXCWeocJWi39PJ4",
  "key14": "vSET8581kHmzF7QhUn2CLGt6kKYH7WAdC51ZHmThcBNkFfCqz7BmMsDgSTui7GTtZUHDKewgbZtZVzZeZCtQiQQ",
  "key15": "4yiYux23JcXxKt6Z6jH3aeCJSL2u939Jx7MxHrNaHvj4rcaZinTCFvPhAH1kKxozqrCTK68nvFmVMjoksgCnHbsM",
  "key16": "62sJbzD3JENadgd7yRCXQ9f4FYNZqPRynH7XJRE4k7vfKURBMQrb7MY83rWN4EJMmJAfthKEGo9k8WWmXHRRQvv2",
  "key17": "2XxBfUi8Y3QF5gh1uQWDgKdWkHvrYZGYp4Ho7w52tWBKDaM2NYbPL6vmHM1bSbHag5ApbLfwRXyFPBTi7udEkCdZ",
  "key18": "5uZ3DEm4XxZrCwzrKE6SLbCmPLCPpvMiK7vSsrsWQHTiik66QR8z5MiYHms9qw2yYzCBZUDTeWW97XSqdiWmqy3f",
  "key19": "bMAxwXWHNEnJ5uZWM71obxaU3Pre8q2Ze9DKPSRz1SfgwWRh61WR3FuyLp6t8F1UxcCD1B5EJxBNyQHPwCgryYr",
  "key20": "56nHp1XBNyX246EaN7V9C29QzPzXFMubZWXgqPmis7mVPhvb4VohmM44fREMd4imtKdLDR96kPAUtRQeERLUXdNv",
  "key21": "2LyM45a2Tqq4gPhjn72GHUqNtCg1kxusqwh4rGTZH1CGJEqsNcbHdUk9PFCXhBbFFcgVErgmbgJP9NaF7jn3QX5d",
  "key22": "3xUwUMXZLSnPMRhe5ZB8xJH9BHH6VNA3YWpUQF36d3t4YnpABWBj4m33gaByHx4WR2KgpeAVR2bQJVqc3PmQgE1J",
  "key23": "2Y2emRdkCR8JxmdwV4VQsJ2TY8DEJc7Eh8V98nVsSzWBhUiHXX4GA8UxwHmfkZ1rouk5HrvwLA8RdZN9fC3wVgt7",
  "key24": "5uoJ5oEe1Er1ubi6SRJWCKLHdCuyCMocvbfaz1Bbq86B4eH43spLzNkiCSv2fjZYcsgwUyy1f1MBKdGVYokem7NV",
  "key25": "4CpLgA8fyLLtidJJT6jEjX4ktkc7EfiRw3ghJsomxhzoeTq4xN7f716vcr1cb154s5zQgABdyHzJn3SCqYN7zdzN",
  "key26": "5wgbt52Qi4Enbnc82ukJjXyvNz99SXFr6gyZ9mzjMfpPkURTyumoTu1j2xETKBpAixgMLerdkCLVR9oqQC6XEiHg",
  "key27": "TPhSJruMfTEVPythpX5oRHixCzL851aMNio5WN1B7TpWFGJKRJ9h937qLRSqRL4qo5iDKBvTMkToQX578DUND1q",
  "key28": "53YWNiUkafxNhJdDmKg2DL2VKg4VZBEBKCsV6wcYe6WyA7BqbsGc74UD2HwrvjB4WPZihgVBRLM8ccLWSxo5DxSg",
  "key29": "522PunHrpACFiBCcYXh1DGdr7NKV32W1XyhHYs2RfxbTrHzJrYR7LVd31eTYSvJ7QgGjQttq8vj4gdKbFyWHWgDz",
  "key30": "3UgaaRTTCfk4kU45g2QYWCAHssJh6cJ6xekUpRdYRp8hmw6f22yVsCQtcCkjq8mnLMDuhecWHSMM78KjSrX6yzVP",
  "key31": "4KvkopsSTTsbvTLvvBjWaURf6M3tKzAc3MphkFxvnGjyZWLjT4Mwg2taoHS1fPYab1V9HRNU4Joj558ryLvBHakb",
  "key32": "4VTSA1rDMaRRzBdcFourvsuJKaq5A6rDXHina6yd3Y8v3JNCZrsHAdfsEbnPK4fxuQuHan64b5q6JmswrVqo1nkb",
  "key33": "52HpGrabXJYB9QvaspHSyKLKaGZ1YD7diqcBxqC1BaJoMv9M2h9xXEJPVbgiPaHKAxofdnEML5qzRbpf2Kmgtc1u",
  "key34": "592RToaRWxt2C73BjwbJFCVYhYPBuMkBHozTcXfu1um95NREUgyKNH2kgFtcz6nJagpmK22ehAX2E14uojDKFo7X",
  "key35": "2TdoWjXJWBaYpqfEyZMYUPnPtgx1xogpU4MZVGx9EGZSGFTG1FuxcoFtvt83SExxftqkUNwDLWY2aCBNdJt1V6C9",
  "key36": "LsfViUxXZ14gyA9Y94Fhc1UZ33S2bRWKEcGeJKbpgrG45ps9JcRZRezuDb4KSm36KmHoSJTrFbpndFajJuN4nuR",
  "key37": "3Xe29S8S7HRJmtk9SyuK9K4LgV4BsUYUrG6XsGGCt9pgZa5UUmxNhUzH5CvnYoJzy9Bn9cG7c5jGXyfZ1RDwj8vB",
  "key38": "3cqCQHKVxWZqotTR77NpE9DziWwoTzHU7se2MUXPmqWj4f3C91gT3RHxwGQ1TSMM9rtHC6PQSiaLXdodGq4FEou1",
  "key39": "4JBGvub5EKdubVj9ZAWGng3jQkdyWW3hbcZ7Na3RWGi9yQCZSQux7VHKfdtErfnxew4T6mipVGzQZ5PWJL3zwr8q"
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
