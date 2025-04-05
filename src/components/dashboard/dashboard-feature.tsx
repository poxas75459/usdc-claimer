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
    "p7A335MDViiAC8Rqv2rgTJ9mZxPW2huLiit6LbgpQuFi1QDeEoVQ5vwwRCXaJGswL4u7dmm6gJHUg2q6oCz6Nqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n3FhM3MWktwDLNJx1qwdEyEy3JWMUNwPxFy56btcNiyAApmnh2QgTjBNVLDyJwZLUgURP1BTW5BNMhY4zqCw6QB",
  "key1": "8drtoJZ2cgrCWAUmhUAKrYoFYCpY8BRFiNNs547291s9rpcp1naznE2xwRi2NXgvEnSaX2kQHBseKMeVmsoT1nt",
  "key2": "28PfDMYGLCQHcRLZ2zj12Z5NjuDKZNwYTHY1Ed4VGgiZHMpLBJgjdCsUDh5PjchXxJfnQHoNiCwhJ7VzBMQkixZL",
  "key3": "3J9WzpsA8CJmEyfVsF52kUTZy2QdkjDmKpkKUoinwh6rEhnxdvLmAwYEJ925jyBjvWngMLNSY49kC5EJGPxmwHWT",
  "key4": "4TZWAqfvbTZNMznMokBUgzrZZR8iu2nfjB4rHqny1KzyHqKK4iCr1UpWMiR9HTBdBGnmgDTAr6uiUS79nTodzngG",
  "key5": "htTEX1Ykxye6BHVu8d8KQUjPn69NYBgnu5xT1yH52NsdgrbqT3Q6Bzoo4sEHGHzxcNaYYRKaqHzYnHjErE6u7RR",
  "key6": "4k3gTwuLS58psJK5ntFQe7w3mU85kXU2NfaMYuHitFKFjZMqDE5KmKSBR7GWrXFt91XbwCZWkHDcwyFBq6XyGpVX",
  "key7": "3TYjrd6eMSsiBoNrzY6UXQ3akpJ9a1h9bKeW8T9uD9uSz7pAaWXERFbrVMdmRDr7PVpZdyhWrEFCrkhpKHPvn37F",
  "key8": "t38E56Ewf2Eyj8B9gpaEt3t3uPkTzZuLQo5wba4iczq3k7AeiHs2Zc1omTxLSwkWe6VJi95TM9M6Xg4YCPDjL7V",
  "key9": "4ix9Le3UaYak5rWSseg4uY8C9ec8LT7Vq4N7cSDD7RhAqhQVJ8uz6VDYsNsc562VaPb4RkKa2a1YsaMNfvKu4Avg",
  "key10": "2K8bBghZfWERJGzhy8UvvjvqGBaRduXz59SyuDgFwrCd4G2rmMhT15rp19USNfF5cdcwqXfbh6joY5tQMC94HuSU",
  "key11": "SvZwDEb4q6RUAhhPHUFkHFZegCD1eHinFrfzPt7VisyrmvMEcR4nTM2tqdrbVSeA9FtHEUbMcdDuKuocaycmrNj",
  "key12": "4fpJNrEtkia64aNtb6v68K5PFHDzsWrJ6aUCXQ73QBNUKKLkfiB1vQR2xJCfWQ1yH7uyQ5qSseyZ7SMrDpuffMiD",
  "key13": "4peTU9xbsGWrTU41pnASxnVFuAWzbbYzpuuxMdHUpTqKTbh6ZsNLuuEvKYBLyyGsf9favMCdDKYPJ5SjGuB4nH9Y",
  "key14": "35N38kjktBPPcAGkZ8FH3QVbY8aFxjmZeRHS1Q82SSZ27RC5sECNEHPEVBbiL7fHCTHBaqo5dA8WMXmjLLPojMG4",
  "key15": "5ZRkt3nNZTeJvqvTo2bdy9ADACita8nz1fmjwRb2qUWdhUN5vK6CbyRuAtpUe1tXvE5WtWoup7sTAzscZ2617aYp",
  "key16": "3zCPuFLVQV7i2Lh3d1ENTeLxdyCHRkTPYmuY4LTDeeajNiwH9Tz7ygpYm9ZxPuMyygQNXqFPZuS8KXreFfbrdrEC",
  "key17": "5MH1fTd9qYjXgYbbqszwPY1KB6sUwj44kDjhkvhf25xbKiaWdXZFYvvD9hgmt8Nsweie37jffppm8D6HgdzLxpbP",
  "key18": "64xMaEMpr5EUHefNAabmNwvx3Rs1g3ipU8SoweXLzWeSjkstToRbsqMzgc1CbHfwh4bSsgbae6ftgyydL8XNF1Q3",
  "key19": "XrpWVzhuVpWENoar7kT3iRvDQyo5yPn5ZcksJByXxKAhqTGdLXZdc9tE1DVyXjZGHgahw4P2TsUwyMGUXzuyDN7",
  "key20": "3RNf6gSt3us8sKh5sRowkDXz8wAf9GxBuG1eDo8j2wegPcDjgTVGjiEc5P6JJuPuGkRJ6gPwtVGyEXCrQifHkjeu",
  "key21": "3AZnTvbiuWGB5MnHHTNtTGjXsXrSKWipGnPMHegskr7SnbNpXbgRgS9qQ6mQam846WPDhqzm7NKe5FUKoK776kuN",
  "key22": "3meJk7NeZTUKneJphnNVZd1GSsFKHbXJE15kbbyWYTVFAoULCQng5gwt9KEFsEDdYTzFqmPzfTkGx8ykyWEoB3S4",
  "key23": "isppkjFZWDqAypbLmTsJFNL8xU3GioU2FHRKMfvT94C2T3NMrcjqn11qcRenxngGe13X1FnjY8KxTQYZ688tJ8h",
  "key24": "2carasyrkwR9DTovmmNB2Sry95YhEWZQwZWUSnCCuG2RfDTBDV7iZgBgev6Ky89R3NdNmr1KtgsqL7QboAjxfLLR",
  "key25": "5Cdjn4xAQvnWrESdUuEtn7JvhgiKYz3bWzKTAMvo5bsGHmURmAt1vCMUgV7aFvcBb5i3LN2wJfkXMBMx6nJsdo5i",
  "key26": "5bFkjgAWSbdZZfivYr9bppmfkfEpQGsWzdFq3brKPgAK53j3HHXowy15hNTQXiCKwHUfNaTTPd3RgxGyGYjru79c",
  "key27": "21bREKo4N5TxZha3c9YZjhgYa1Ho2xgL8qk2DiajM88F69E7q38322Aa2R7YutdtvYHFharHDEtLMEV5dZm9phgK",
  "key28": "4N3jHeiBWtesEPMdCForPkHCBaWwT26rnrvjUiitmzpfH1k4RDvSvzNhyK4oP7DYBV6fcfndy8mwENodF4sr8pQM",
  "key29": "4tv4PscTTdJFZqEcUjpYntsNtW4ugZrfvtQ4hNzjBioUXgdZPkVdEaxMimadj5GamrVQTW6gs83Xv4Jok5rtskpw",
  "key30": "ewL8qCFKXWsM8UEv3LsDESxUGn27q2jbR77NHRppJeTiKXqadRAQNNpYwo3Sge6WBsZJTd4dU8BG5LdtGrsztqg",
  "key31": "LYUFzXVDJbW191K6JupCJtVthtJAvoGPkidU1EPG1KtLaeTRzmy2bzYV73DKTDZC5TFWTtZXXuGAHSricvKJBiS",
  "key32": "VMfPXB4X8MsRnAMNfyJKphFdBXDNiAm19cHBdGgGm4o7L7oyffBWzPXNaWbkTxrr1VaU3fvGH9QiXkgFsmh5voL",
  "key33": "533yW6SURhSHy2AyuBY8BPAmce7eGAPBejq9PMVcKQBdn1nYnQc4XLwgRsiQ31vC6YSnZLN9LuaRrdXnCbuxzQgt",
  "key34": "p3JSEbYAp6B6k5Np5XwSahvxDgTaGhVtECWT2bXym5ZaVFbomnj8vAK8T65FLKexU7QQLKMAWTFEgw33aHmYHj7",
  "key35": "3SE3gvYjbURxjLwigUJ1xdy24WB4bmg3zXozoHzBH3vpPWg8fYSQXkSoMyXbthMhTnzxWy1jtSq3gseF3Xg1bZ5u",
  "key36": "2GDhxRZTcMD8ePLCXG8BZbFqy2qNrNWPSEHC4hvTegCy212AJCDcqqS1k7RHL6ZVT87xBWDZyu5pNAoBAomtJMrK",
  "key37": "5NLLY3R7hFVtLATbNc3KDL4MKk6jADiLjfMfx4sABK6V2SZ44EJLPAfd6X6F97xrnpDZvJ8jtfEEE3QMXnsU4uuR",
  "key38": "4rjREJRv55hfx5Lp8F1yv7Md9nZoLm3hZTtZmaJMmwXHWQn3gZafScL6EKxXtceiY92Ucm1quaX7diWo4RCjmiXe"
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
