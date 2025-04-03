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
    "3PyFMT3B2rV1W2C7ryPAsPWXNYa3GAPwk44xS7VA7Hcp5PAAukeUuwKPLGF3wmYMe5wKgYuZMDJK4opeF3AEKUwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pU1gGJkRWE1sJD9SaUn7pwtG3WKpcwR7jiP6NLXk7yvMsrxrnvfUWbUDWbvSB5eVQTtzwwBJDTCwZWBC59fsGtr",
  "key1": "5iekF5S5ED1KFcx7NoCbqvNiR4k5drkDRWKPMyTh3MsqESCQqSuJxx9ahik7j9oUvfyqe5aryLKQVAjxGi5Q7tte",
  "key2": "5N6sjhY2kSg9TMB4CYq3o5TPD4zkwG44Q3y5KTiXoFHthgksyKRtJaGNwkuiXvHgwEp17Ye1LTxXRTTX67m9bZPe",
  "key3": "4N82ynLWGzCXCTrFAtM9gcWkNF5pK5ZdLCLRSh1Z5ZotzKhR3jEMB54YJBfvs4Wpgrx5ggnVygaAdZN7iXyH6pZx",
  "key4": "Gaijtf2FGMsKDGbuHnNwDVcChGzpDPsr2oJQCKd75DHSp17aacZHsSbXq6ohPJGhWAw232RtjZmyf9feNGojhwe",
  "key5": "2sz5M6PUb8EcutkJ99XUuVk2dhCcbZnFcjoAnNqdADzwqGXJSqsAWx4F4M1zuCVAs3QP6425z9LaE2XEed7hgE4J",
  "key6": "3MBw4jQosE5u9a1L1bMWN57mx9VWcEvyNLAzBzkTTuoH7X4yUXQgtKnW1HzfeAt7owJhCcHDFFeQJk2LqaQ1YEdb",
  "key7": "Usobua9yuyLzixqtRKE7hPKAvypUNCgcmntov8dEtBPBUHZrb3WfMeUUUR3qp2zCC3vtowGqyPBA899bcXF8nG7",
  "key8": "4zNChtw2XVUUjxojJEohs5HEbqLuya3MGdiJjqcwS37Y46a7a1oCnyVRRWQEzhWKagHmmG9FaAziosXy2pbDMKUz",
  "key9": "4YeFbvYgAQKDTyaPy6Y9MDUNAzz2raq5M9dxRPq3kRwbAxZ7hnQPNBCdaYQFuqbf5wSKJuj4DpTEmWttkfjhdns7",
  "key10": "Z6bCZryw71mnVyLDpkGsnzVnGMeraauX7TZrTey8Rw9xUGtLZLQHwLTNL67qZYSG8z5SQrMS2GgL2q3tCasUSyH",
  "key11": "2rSPnrQZykiLechiocwP6FKZW3cFE2N3S2edp8s6Gz9k351rBTE1akFDDriYcKuepwAisYgsFyxr7nbL7dWmxdDD",
  "key12": "2v3FzuDcfPppiQdB6aw21FbLNmL4Y3fxTaSiKtpk9AGCRcqJV3FMZBRy3N49T4kAHbdyXYVD7yZKJSNtkhg27u1W",
  "key13": "564JNmwAKNmu1BboMuRZQ73t239bTpddQUtbbTdeYnXpVQjKAU6uirsQkH3bXqXf6f8Dfi3K8qFYu4nMjDoCu1UT",
  "key14": "5ovayCksgu858yir1vViZkEDcH5G4XN8rgSfuVc66K7iegCE6pt7MbegAmbJmNa4tWboUijSbRtmF5GaFsyR4Vqh",
  "key15": "4tLwCPL5dtKUh7K1xeLxK396ckEWtG6MGActNuGNjFgtWa6oWRUTSkoqh3ycu2MfN1nEqDEwDa1ye8Bq5ncGyVTo",
  "key16": "2E9b5LzM2ATDvhuAwbWWRt7iWV64RbFUiTY2xjUhgqJNsKEK8K8yDeaCCiCYC5z5d1PCS7tENZoUHgcyWNycvWrw",
  "key17": "d8WbSDqQpNLZeVP6or8bpsg1TyE3gcMMqiS4PwJcuEA5Q1ooW8yNzNPq3oCAAMxwY3RBuMKdGf3AN4dExo9iioz",
  "key18": "2z2oWtHC6SGXHWX61YvTMom1rrZEAoAPEwt8uhkjmP5FsqDUzBP6rAbSVs7PNw66J39kKjPPjFYEAhf8kPgeZCQJ",
  "key19": "4d7fpCN1mwVZnGesTkkMU7FJpFJAqa9UCcZdbngmtNxFUnMyqKtKLzqN2UrU9RwKLC69kHhjJyS68RsHLuRuSVP",
  "key20": "5A1qYpKin9HFtkLsyMzdpk4Rr7hsf6UyCwMRnson1MgGSXU8aLUZnZ6gVCkY5Jb1u4Ls2Effbu1GK8NsrrdVut9K",
  "key21": "qXNpwB9D1x2NYJGNFW4s3Hvvn6yESVJXJBCY9SceAVr5cUVQQWMZCKXGBWUHJvE5JK14EEGgHRZLWFksinuVQgb",
  "key22": "3gT5GqpHsDwofWSJztTmXmVgnWZbN2mEZjYH3pMmhFCpirzZddoAY7GARcHFhp535vSA93x4hxhByFjT4ZsgeXAM",
  "key23": "g7AypQKVxUKQTqTTFwtaJEW6wEWgf9cusm6ddMyRMSDnw9piurZYJZh2XeUibmhgAcmUi9y63y49LnVshJQnCyv",
  "key24": "2jXGyW3Mf2bwLfRSfdZdMy6vq4U5fotVpdskqNke5TkXc1GJ8fPW1mSvjHsvbALYRLzJt5j7ngby2FsxwN286xVY",
  "key25": "5sftBGx9ahSREypbY9QCap4c45xxNx8KNUEArQQY6DCHgDhZUidEAXCy7SyLr8vy52Qtw9nLyspjY9dLDydH1mT5",
  "key26": "2gR5HH7GNX3qqSNAVzXhC6u9QRV9db3Z79CLGTm6fJZrpprnXpMgH6JS3CwGocR65poTrjPdfbSAJwpxRRia7ZEN",
  "key27": "38kSybufq74uzDCSYQrGJf3A4e7MxaDa4wx3JEezmrkXmdKaTMbwXvJ6kYzjnHBTU6SrCASgDvgmjLMeBPg6KK6k",
  "key28": "36znyEg6uLfu4Ty3AzL41YRhijVHKyhQtoT5w9AYRzgWTzvRWBT9My7nVpxbqZkbaeY7Tx5LJpM8uCgNHRwwETCL",
  "key29": "3RSnmugZ6PLE94LVyJzjhPTJG4mfmPjxr29gSwNqtg3JCBXRftBqwAXzNFLKsABMUkjE6LPVv6nzckUXtHZpUhPn",
  "key30": "5vvPiSayZxAiSNHiEScdrxhkCkjc1rcFdpGSW8wCaQ4AfLN9E2X9VTru2Uf4VeeYnFz9qKY59AZDiqzRbKxm9V6c",
  "key31": "NjExomnfQ7Dwj73VEnEp94u7FMS2pyF5gPRAxHtL82DfHGWpCA2EHaBxCkmZMcLyPtPTpvjZLbEsMXX5rhb9A4L",
  "key32": "454wNhsPTyf1UPfghJf7tibx3fJh4i5p7yg94ZDgBXi3e7SCrMyacQ8TZ4xPpWcqSbbKWwnxFXvH3dGWFcGWk9Vo",
  "key33": "4nZKYxxikcgCpxDziKKPgTmyNAsXueZDevGhBMJgQhU3woDEh1iCpGSwU6oCTSu8yG7bYzAXs1H5h4RQVHyUJ7Ev"
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
