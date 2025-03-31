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
    "368MnUZZkCk3oMVHySGqiRXbRW3BfzauWphsgarAzZVjnsqHaafDLEgMVd9zqU6TrZDFimtWb7n7bk2USgQacd9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VfVuh1bU5obrJsGNmE227b7LJifWbVBg2fAMMHkCMhuPTJxHoTGHLoax7CMF5Z378HSjbEb3Vj534tRyX5MHeEt",
  "key1": "587WNurQAHgd1LJ9oeoFBHe6w8WvTcRfDHdG7CbvTiqsg9qyp3MoBHgUbXdweXLwKVawfdP3XYdqTwPPVwjEgsWH",
  "key2": "xpVfq3aX3PiG4kJeQUc3RzKS5BDvde7NaQvav2s3zTpZY2CspwVvVur4mtzD4sFTVzwggi6tVSvBTqUaoMEwVHA",
  "key3": "FhaCWX7tGtLrspY9uEhTAJpXXYeY8t8vdxvG9A9XKp6BmxmSFznJFv6aqzAKxiMr3JBM3nawL8mBVag21SZdyeH",
  "key4": "4oKyB2PWGKVLDGMPp883UqzF48sHRNTfdKFwyj7ezMPZGr5ho8spG7R2qWkBP1SkbCyiLrq1JbeZSasTpgxLbzPR",
  "key5": "24kfaP5vd53byaurqprb61ET237Db3ob3ShHns8RQNRtCWMwpHBoEL9w7tRCM3v3rLPPzu2h8YRRqCR5hRM4FhRw",
  "key6": "5Gp1UMrRTjj7mVVZdrbuLjJcK2xfmtgmD3hrU3PGehmjEVbGrxbSSopHHAG2mGVL1e5ptpvvpSU2oHHn9DBgHS4n",
  "key7": "3LdZgr4nqEo7qQBxbeL8idP4c5HaetibZRRReCoFwUQXM481qa2AAfiQ3kr1zgwWRqApNFKa7Fj6fMYqNDCiKBSJ",
  "key8": "5NuHAHpurQB3qadmWjbjbNauFnat6FYY5brUgy5cD8S3MZfUi4JrjnULATxUCMaD7pX4zjmgQG9HfKVfSzznT9rP",
  "key9": "2nxS63sPknvMK6MamG7SEzyTeArNLUi2ytVzC2F5Caa1RyW63b21oaKJ82SQgc2YSe8yQij11mL2ueGwM67ux98N",
  "key10": "3CmfewcruoRBwyBx6JbJpnBJpSkj1D5Zhbz2yA4aVXhLdB3CuBPmnSmzwpyJVq2re6a7cKMg9HiJB2BWZPQgNPjF",
  "key11": "4SE2pHjrLfv5bvSiMTkMFjCWnAJKm2bJrhBPeEefVvBVY7T25m7AEKQzywWq2xzXLubKiyBxTZouqjiRYZ1qM8iz",
  "key12": "3siaFVHKiaWqw1QQYgMcfT2XVZEVs8vgkPee5AtiwfVzAb9JNzjQVpBv3zdRoCLbnsHRjZAerWNY4W3tHZgVHsrC",
  "key13": "2Hx3iSA3DChFaBSqDC8zS4eoQT8gJw2gangLtRwtjRP241EcpCPwxBBpWQ4uTmUETeKfQuuxML7JRARQZS4A3ScZ",
  "key14": "2FRCS3RGyniUu6LUdyEt5YvyP6sQSpTMQNMiAV6F28p6mkahVuGWaKpbucPpSvaoEPjmia7xSy1XEYRavQ4Pjzvh",
  "key15": "46vtuKYsWZhN3hi1AhEgs6EGFfuS22EHM1EnSrRaUQZCgrjVkcfAM4pjNqTfAhKwhJbzXhxp48Ni1MPZ9jRqxYm7",
  "key16": "3a55eD7UMUVBh7TDutJPTpaWSXixWqiCwNXFGBGwk7gdRNnNwM98HoBdLJXRA73SVMCdFrc2pojQvUNyYSMi2ycw",
  "key17": "2wJbPngw9JfT6cUrVUUAy2sadsdaGS2KP7VSfVG68pXNvZAq4hKsrXdgSuJ1CsfUwRYKnfRfbaR3Uw1hNQZYbJx9",
  "key18": "4tSQV8SDHBEU3JSCF2c1xKM1utoKaTJZFPGdaFbPNkDnMwMhzsDB1zYGDnXjERcmRv4n35iQcDLj3ZL3N54pQUbq",
  "key19": "3zJCH1YcUGA1TRWhSrH95NQfDEx6jd1rutq9XC1qt1FdRy4E97AVRg9L3qXdabdPNdYm5sH15oK3GMvzCd9vx2yu",
  "key20": "2hmzzn3B5fvHrjdmGUc7rK1PbTa8ZKSv1TAjb4bP7dXNcmNqDdG7qWZkyZjsTQUTCkgtKZD95pNiBuYFeWPdqkWV",
  "key21": "2LXT54W6xqcKGbEYiiC4gSTgxmm7Ps2eCYqDWYGFMkics2ZA9GqmsmT1iV2wf6qhmBCAtW16whijdEj9AAaecsVa",
  "key22": "64rgpuGBxAC4ztJwY8soXc5bkCRyNo5adpi9cKAeRPZK4FTkzBLTjfzDZMqceRHGEu6Rd8HCKq7S34bg6zDBuWPL",
  "key23": "3t2c7Au7Wi6XkyFW8D2Y31iwamuyGEUXvzAnaRS2KSrucd6bj6LCxkFy9f6VYxLFNjP8FdnTGsuP731L1nL8m2vY",
  "key24": "5B2TMdF3iFsDjemgnU4b1pcPsTs3MpxWgBTrfjKhEfSbFdVVyeEhJtnbvVtsZpHbCiJ7WHnL2HKF9cf2yoSp1yEs",
  "key25": "4HnB4o83cRHhXyYSDtEbiRRsBX9DcbkrtV551KcZGMT675A5hDe8NHM6cj6C9YuFpmxjk3SpZ9XNomUjkWk88ohh",
  "key26": "3KsqBzrPWq21XtgnJxuoPpcsVYcVhGBSEdTSbseWaowUpf7AcjQQR5UTMGaBdxVKXFG2vLzHWjRERRGV1uxnz1BQ",
  "key27": "2fEVV2GxoRZyPgNgXL3qE85PNsEvAcz2WK2c9y5wcyYtJSLae84RCbi3Ko8GXEG25Eo5iXnaERqPzM6D1FfLZ3ej",
  "key28": "4JRGaVebmxSXLyA4ntNu7dcg5wdGihvZfhDmKTKCNUJFLPZ1S6BpWAsywKYpTnyRU7Y4721xSwhKrdXM6HFTTd9K",
  "key29": "4FscdpoPBVxk9Dc5WZ7crA54XMYZTjBYNYKYa3D9qTL8ieac6kQrxXP9QuqWTZChRGpTSAvHaygA8HwLahx7tzQ3",
  "key30": "3yBp5DhkYdXg2iNmq1E8Zw3RT4N8J3QPREH8BM33sQH4S9TiYbCm9JYmiTVFmayRruPSHPrjpdhu2ngGM4N1FqyL",
  "key31": "4zvfD17StAVmZbTxu2HF1E2RuNmLgvbd7W66eRzQy6bM6VqK8Vj2FBF4jP7fbegNvoruwz5zfQdu4Qz45zA158aB",
  "key32": "ULxTeMhv9CHripNtHdbmqws37wBvJMd2XWoE3DqZHjbaGfGNQRXWP1BL41QKkqMsMC58gzXxdu66FBP3irc8XWU",
  "key33": "3EEj2jq3JUhMLV791NsrWZgDJJr4g9kV8ghouqunb5FPt1QG1jxiWtSDEtPZBcJY66hspA8s7rKSFt2V67ihxCwR",
  "key34": "4bND9LcDr2AS3h9gTzGDZFb1V9bu7uXjWFJvwDLoXXFYKNyywyjdaFre49bNysoJZLvvJA7TByNzNbgpFGz9WeZk"
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
