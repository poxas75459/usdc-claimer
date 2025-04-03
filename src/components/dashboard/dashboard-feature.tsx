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
    "4tGJ6rif2S5oDb1iY1MvALLsEE6wB6BQEvzNsctYv3L7Pu6XVAJ6vMLe2NQ5RAQNgBi7fsBQ1hhktwetPAHs6bjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQWNbBHDYtr9mQiHidNf7idCZz7Jp23pamVBXtuB9xxmbbXd4V2njDKEhupxco4Vy5CueGhzB43VycpQErBnJ8Q",
  "key1": "qoDNodSx48au4Q2iNjwRRKthaeRq33AqfRbAAGnEZr2viNQ6NWvjDoCK3cR7ZgP3p55Ba53ux5wVeP2MSrT8sYM",
  "key2": "5XfbUtbj3KU69ZMMkTotTJ9A6WBF6wZAV4UgLwshSP1dLczP5SejSwEiUW7QEPpJWaqfm3VgGaSmLNmfSd3FeE3",
  "key3": "4zcioGVBpdPrAtVsf7g1DdJrbmg7in68fFTXB7PsbuLHWhK2LygrXYw2wTRVXzgUyfka8RgcXsoQiN9Y754KmEY9",
  "key4": "3NHfgHqDuD7urH9ZCxshQiaczPuAu2V3UrSLgk112Xgb1853o48m2LSQZ4bV3PWhpe25p6NnaoiW3vmDQPMJHVnc",
  "key5": "41UFstRzhbLKQ3XvcacgA25GhDnruZBRKwDpVg2y5VX1jCNbX9zJpFzpZns3WK7sEtYxrwsK2yvq9eaTsyJSsXxX",
  "key6": "2Qr8Wwc4CnoiptWtjNDzRtRVrh4PMsMXCJLVqpZi6R6NAT453xwQSoQHje5C723k3JPXau4DAvg9mW7oS4ysMRMb",
  "key7": "5gW8m7dfGfDD5evWt3c6qjvLCUy1LKJWJvhrUekVr9VqUfFM9mYynuvgxozyNkFYjfKejfhkUtMe5xXiRBGexxJL",
  "key8": "4quEb9rfZbyYfDsShAdj9C3BDZ5JY4sVQ8pb73kwqQjY3bZnyCJ4yfbp57wopadV1tbEKSdK7jZrrWJG8PJiHaAP",
  "key9": "SkWB1NKJvWnEUdpmLiXfBMtDGD3SsUGnaWsV1inSuwSnN2THMXXT9DWigNzLK9vTZyHKsnr2VHmutpMzGdLmp2V",
  "key10": "4p1CETrzzsMheBeh4ZQBGncEc8yg73f2CVhtubmSwayEM1bnbcwCvuorMXaPrMGW2tnPY32qw2fQVora9NkqZpbL",
  "key11": "1SaWBfvwtA81pzGBFgkiy7x28xT3RtZfdZuvb8HkGJ5QjQpinDE5HRydhqc4hyU5wrQqKXLdvtXUm83MzqVVM9V",
  "key12": "5CdZjKnukeYBwpuHZDD2HdABfJH1U652Eg7q2EpxQP2q6syZZN3MLmGULZ3CPrn9Mrhc1gHYqukTThXN9enGPvqL",
  "key13": "4EmJja88nBmmQrJ9AsQbXLgXRva5jjWwXt94A9LNKY42UE3gviWC7wDnkTc3qoCHd2pt17j5goWkAMVqMKr8kfkf",
  "key14": "4zMwSc9zvaFmdVxkfGA3j1uwg51T9JKfuUCHvmLUYscfULxSnAETBncBcxwU3Q7782428YfPkcLVDqGEnagtq8NS",
  "key15": "45q44eoj6UMfRPEQ3FVQNDA1eT8nJH8erZ8ZqZvy2eSuDCvAXAEdDH3rzoZLTFxyYTAuKHoCqTTwsUX1Uszk4Cdi",
  "key16": "4VqzW26R6ibw1AtwLzKxBsgdfag3TztcrRR7S6bD7CJS8SXwwbxsyz4D5AowcQX5CUnHFXjDpc14gddU1Y4xpPfp",
  "key17": "49siFeyEASbffv4xjUdqa1TMfM3r49XvFz8thmcHv2VX5RZuAq8yikGR3AZQ85JehENVmkmSEcPHMKLDhd3vDTdn",
  "key18": "2gvXKsbtJjFzNH3CKJxQvPuoGUoBfEycMNJBncCdyoVFEA6L1SfVaEguyZ6qR8jGdUsmpzCyfwYwALsi1ykahJBR",
  "key19": "4pdqCCpfUcDC6W2NbDxvNo9vcQsAubJiq4hjAbZ2572XX8UFVsNXbbhntQ3anPRvAEgfk3iJJhrgtAAkkNfXiyy3",
  "key20": "5gzxEGY7fEaDqk44Tt6Ni4K7Ti7w6aeaPH3mrh7c9F34kRCgHfmumRN4ZEo2JxrBncWLxGQzvZkfDP3cKXViUffq",
  "key21": "5CqpqzuPSiMXFE5hDkZthhSeSAAYiC4JhFpNrmV7suZx15DyXk9C7hs1hPhsS7aN8YgmNKrmq5xXfTv61JtgGzwt",
  "key22": "4cr3U2HPvCu7D4gVxUTpwtkLUjMP8e2fE5WmmXH3rPeG1dQzc1rxH7uSoB2yXCvVD8f9DT7NsRtsqC73c4sP66BF",
  "key23": "4cEG1s5rtSGef7eckp4L3Mexxp1nUZPMyBRWzisQWyNAqmds6iW7KFQ6hwQk4tXR73Vb2UjXvTf4s7KeSjfJMxo5",
  "key24": "66yEYYNVbrCGixwKgGxqnPXZob93333Uekxd7R7wK253y7T3hZW2RnPMUqusxvuU28eqvNc9UbRYS5CYMSBMfGZY",
  "key25": "4U77cxkTfjspFVQzQHW9CT7RkvSkkJNMcHg9s39ZXN8gnXc1xfE2W7JaFCbFwDPm93ECGJVPjEDXuNqxHdgbnit2",
  "key26": "3yyfDN2iFgqNGn74zNMPMMdHARg1foTbboX4zhbU7Mkd1KvyjpbC5SEkonRbfhwhCfonxRju3vQwL1TwXfY2HDtF",
  "key27": "d9wuHnviqc7ioTu6nVboVBWMDuAXp5hzbXjEQxqZhwecAaLAUkSrMoVccCCeyeujaa5zZkWvXRapQ6MTx8YuY4b",
  "key28": "oXULvo3zx1Ffaqe2nywepaP6L6hhXUksTER8nX2sobnsTTVVAxAx2WpbNVPCwSEhaq61kMdHKmZm4Di5iZ56zo8",
  "key29": "39zS7Zx9a27eroRaWMd27jqJWxDR7yGMiUbMfteRhsvBGDfurrUiCjcPwVsi7QffoYwYKpWiDX27fG9ikWQNhhp7",
  "key30": "2PNJNyU2V8Lz42xxYvEdK7SNUKQe4xsayHXTYopFub2hiNXVxaHk4bqpeL6iPDYM8CagcZssk1dv61jZ5kk2qKQ5",
  "key31": "3kRFWA9c5zqnrF9FnbJJKXByptZUATQdWUQaJg1s5gLocFVUbDRjm7zBbFbzqSYEVMtwrzKSpHQ1e8oLvB5A3YDG",
  "key32": "R1QsiwhZebz4t2AULnnEgFLnpp15Rfv5pHVJfqv5mycTGP1KUmdjceUJRcZgvgb4SVJqYwep5CQK4WMKYgXuTRH",
  "key33": "5iBewyDk4uSzWfJovWdLwsYZ4PfrGxdTMdKpUGUsAfpSMszQWULKrqyVNzuAnxaM4rm1TX7amDbfxcJ6rsZCNfMC",
  "key34": "3179UfrMou6f84rS567KK65pVBt7j4D8zxR83jVvNiopQYf2yAYgTtqxGvNTAwLPSCbPQEWA7LGooqz2D2K2GzFQ",
  "key35": "3VrjzNxHyTfs7dLngFRsWjWH9gT1UPeRBLeXyoX87Eh8jsuYKikk35oXiCUPZGv3R8d61qqMAbDUvX91epgPAUJa"
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
