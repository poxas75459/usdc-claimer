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
    "MGShzpLoQcXVhxyvLL9Ka6gsWquM3kRn24Ufqknq5v5wmPWfceta1mv7sqRaEybqPenyUVudUCfVNfrxRbvCuqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uHNJKMw4hkYH2hGDL64RBANaV2yVoZc4h3mdG1Rs9d2SV6VsJ1AU4Q9Y1i1QEmJDrvZNM1V8ZSnfATFXxgg2Hf",
  "key1": "4VXaMBezFusPQBWPbQoXTb8jrqD6dFMXxaAGiReiASxpP3nanYENdLDhYbUFKuP7R2sx6kxLeURW4SDZUNQDu2rf",
  "key2": "s2SLfRMp414QEpaLK7dAYqsPTuzHMJSq5qPXaB4Fs5FWxyKkJQWc8JnRHDjBpGt7X43i5d9RC6WJJMpEXN4NRsN",
  "key3": "34QfmTRyUwUmUXFM4VjsqQ1NEAoLqXk6BpmgX3NLAPD2i8CEdwFzrK5KKGiWPkDfU6rSKyYTHvwB61PsP654PFQz",
  "key4": "53VUzVQQ88U9UnTkHWYjfGF75Hf1hNbcK3UJEtCEH6gvJUFumMMGWtEZjLqmS6xy9eE4t1pYtMS75ggqaFALNcXs",
  "key5": "skC72QAbmw3ifz4UJrhWNxqGd6ZtpicnVkhvBbn8FHqXAa6Ste5YP9XRmz7XJWPW3AnefiebnpzMH58vSTrFv2H",
  "key6": "2FCejNog4rcq2GLXNx1gHxUhtiiqdLZz2DUPugij57bEDQvy2hes5HeZbxwbfD92JZSPPhnZMU8mPAWsgyz7W3AU",
  "key7": "2cMrkLUeMxNsCsVcbMHmGehiAC7bEW8rKCTQ72f6n5jDdug6xHwfm4coKQ57d5c6HnJ485e9EmEiTnxSUxJjcQ6L",
  "key8": "3xhabpVKZ2hgtKEgQeKhtBAY6o8E4LuLQ6w22Ce79ryRd8Y3Xm152PHp6wVvqFzw2NgCKakE51PEP7CJddEehkdL",
  "key9": "5yu34x68jwjKJuyskmpqjfiRLnRsj6ckjXHXyvffbWYVQnqWyopT45wcJTBA41qbiaao5yG2EcnBGkDhQbNGZVqg",
  "key10": "3qgQxv3P7v42Qywncns8x1L1JK4GpY8DKxBsoM9aCmCZc9ScicCgitHmhrv361QFoB2BRjqLLREs2fzmT3nyaRmd",
  "key11": "3AhLYQyY5JT6cN6phcbxuTd5Kr7wEMFRhLXgMKZVub34ttzJ79b7YPv1DYCZmw9GuCkyzqf8pneojqkgCVKW1Lng",
  "key12": "3EmaZZMaibT74bcyPA6fZ1kiUyWULc5sd7iMBswPHtS5F97pJKMXf8Yb31cpEvTxB9ao5nFHDFZ8xDCsj4hyNDV7",
  "key13": "5dVdnpyJTxH1T2RHhMYksEsz1TKXgUNpMiYS3vFVCFcSn891xN5vJiJAusrFgL4Yukv83mHv7MJTWMhAVojhzaiR",
  "key14": "XGPKUCM9Rmg84DWjc8HEJx83iV4hvqFT46xQCFmTUwa6khejf38iC97NQzy3EJQx88uTZNR1maAjFrDoSSKJ4Lp",
  "key15": "4a64WHaGwZNRDrK5fpBKAPEyCEmzoCpM8FtPjgSu5tZojg7A7pWkP4c8Yz2vZzw4CdASvUYLHwptaLvuVtptBP5n",
  "key16": "3ThrqvFukgaB7k34QViAHB7VgMzrVP9gPMnbRE4S3WVDKinpKFhU3oUkMTvE4cES7Lc9Bsb7GfAE66VSiRi36V7K",
  "key17": "3dKFXSDofQfPiv3ZJ5D3fsV3SguRMwfioeAEy8oN5LiEMUvzpjiEnDgCUpdqNZEZmxKYYmsp7WBsvSe6wkysd3kv",
  "key18": "5Khxdrd3q9FLmu6qmvui8zC39rkqeUHKKu9kxUEcnmz68UNcV6eKaGm4T23L9oU1LerzMQhYQxhz7h3EvNDghTHN",
  "key19": "27khzRwhVvAiwToqZFLMee1MPsMfNeii5sTbbxf69BqKJtCTkktKm8StxwYVR5vupByMu2JmcAxYgtksuQ1ABnhR",
  "key20": "5Ut76yt68rfvg4oVVcVjxTG3MJ2QLjL6Y8TWLdN7yN15icHSpWJprG73oZGE8UsckFcAny7CxTMvTX8zgju9SiuB",
  "key21": "5FJz442EQTW5pvjQZzUudqUVnKSAA6UqE6wyKokWs5HcUYHpuRe1tk3tLRqt3vzGrj1RTpsoto85MGufojX5aoJv",
  "key22": "No34RBnFvSvJsBcF1gyeRN69hxqKUsCWeH55JQhRWSifvPhp41sJ77xmVBTrJ41y9KCvh1Eto3fdV7bXxQBXnFW",
  "key23": "5mSt4pNCtAZM1Lv44gAcRzw4GefdtNLMLBssKEpYCUg42Stfuwt32LgPkEHesL84RvQxSCsXEfA6xNgR4NoDNjbz",
  "key24": "RqcgUpjMvSVJx6QT3LZG6pY9o8UJYpexVQ8oWDp1gtAuLjx8rUwXJCMnhz3nXJxFr58XcasEyZDViHtYGfjkuG6",
  "key25": "bboADdPZMcG5MACRKu62uXgJe9aJ3mScm7qpamx2vfHNKHat2kAcMwrUFqnWk5hzm6ToXytC1e2QkfUZNtF1tBq"
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
