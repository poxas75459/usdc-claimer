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
    "4dZUBcHHW9xxfDT9fZP9fV1N36PvRLMQjAJ3AekSpbUbgQixYqoeZG27ctxYbA5sPD4hWejhteBTMPVCVu8V9tgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AbkU6AfP1cGGXKmtW3REXUnsox24BN3wpAJ5eEwCmG54FxTR8QvCqyJrEQdJM5Yjc73XUhzsyEFkNmjgg6vCgtb",
  "key1": "3C8tpW7JD93ZX9C38G1LELWEYJHqyuDc4bGkJeQQDAEr4aRm5uEgLgJaRNnqtCi3tH8Cg58L2QbNGnLPMC1G3fsf",
  "key2": "pap5C1B3o4QCMwtdWS1KAj8BuxPryBYayUQetcX3pH1N85YY3MA756RjUDQEKxic5da51SKmxHhFFjFTS8AxMBG",
  "key3": "4pCjhp2Q7YinLFUEvbHZyDps8b7Vj6Wgzn8pzAksQzEpmVep2jsQAU3AMTf98wGTEyzMHdav5eAi3j9KBym3mZRc",
  "key4": "2NRT1koQYQU9Uz146faCVxB2ofxsP9qJFAb1rp5Bgzfo7cwUZzsrm95UMM58pkdU6oSM7Zeuk9NinKosdjwx2NEK",
  "key5": "34R4hGGhgrq2dn5ATKncqMRUV9Q3aQikcRvxw49JPzWNAfFfF6KyAJp9cycQ2BJ2iFUvtVHB3cgdkySN2jQy3at6",
  "key6": "48UXY1zWU9qoU8HonjtTxZUrVWMQHNxM3DjzPuKzB7xTAhu38dKWcBYdQ2fxHgNTc53PVDy64FmsfMd8hcqLqMxo",
  "key7": "5y7ZcaUpD6RuL9z2GnmseGrfFnwhE3FZraR3kRoRpPsLov3y4UknkEF9SX71HNFYCHGMyZ4ajD1hB8Q6D6osuaG6",
  "key8": "3cWLbigvEYVSH6CUiP5wgv4mSHHLoeahTXPkAnGU8apFgseyDftBDwCaGvWwutCANqFy5HDMHvrc5vrEEtE9sCQi",
  "key9": "51vzdNf6v64Rwka2xzcu3hgtMdBBvZDNBtKrR7CZvhFRvJqiMu1BZWYkDPFLppQEVnF17osksyvi4zVE9hh6d1HQ",
  "key10": "N3JvFepgKY1r8bpMNwcQZo8D4dKiHYJinBFjapEwR9p3Ydc1JdSFBm2rgmKPEBu1VUJ4iJPfU1gNudX9kzGdJNW",
  "key11": "8zCTT93xB77i3EswkoB87xVrmRdXZpUL2Tsmdq8rJ5wkdrFtk4ukgvNWiPtCp1sX31bmeArsP7m5Qxf5NQmjEmW",
  "key12": "2o5X2iQkob4vfPAD7YHNcjjm1Wbf9eXxY3dzHn6QwRKtyyf1cun3gFR8wghQ4WTmNh7czaKXg3C9LLPQNZyu5Kce",
  "key13": "4C7MTbcafp1xi7agXcrdXX7cHXCFSZo5bsCCEpvpREHJ4oue8YbRygLs6wQaruJB998EvmUnhRXPQZaQnMm7uqXf",
  "key14": "6EHyGkTUxiReMDQnJRpzNmVZbW8s6rx8JLZrJaibrp34otwM827YG2ekc3AJtJLFfZawCp9i3PJ7uiJ2QWZiAKu",
  "key15": "5hxKBXfu6z9LmzLS6qeEGEAdd5J1jAEriwHE3amgBxMRLYE9YMmsPpuYSJS4HKvzkd62AopYpkqf3UBXtLCSoAc4",
  "key16": "QNxzy6jDTdymJaLFFVSTRDBzHP91rh3ZsBqjhe7q6kriNEi1ooXtPvHV6Z2JUqFgRZo51rQGYE9uVrdCDGft8wZ",
  "key17": "MCvX5oxu3vpK6Ye2FhgKMpgKsM6jk8JAVwn6GKNCdmMR9bGtVGbzyE2A5Uxtxjd8mPWshrnbamTPKyvcTDKyjpw",
  "key18": "3MQNdVz4HbGsrEzPpSb3SGgwAa723LmWqbfSApUCKJAWP6BuefoKEje9g5h4vcNJhz3N9Q3hcjB3MH6NodB1Rqd8",
  "key19": "29ioq2nVaj2cUtHTvo9nndc2TX7SQUJPifbUJtqHJKfdT4o8mwvwGC7BAhCkL9sH9GNchkeWj8fKrjebK9wi7qZu",
  "key20": "519sE8sN4rL2yZLwPJGoqZh4ECxqnUTLGo3NjGd1hnGZQtFg5PooKkH8AzKJuQZcghhMN6f8ikKkqVLM9gtRDFAn",
  "key21": "3g3b3cUkeQSisacNksnGiEBjdAxPK7zG53rR9J81GgxE6HFNZ6YrZTwEKE19Z2GfbdB2Nc2qgzw587fzcPVzzKFz",
  "key22": "Sgbxc9PpPdL8HnLtwngc9rKQdZa5DxJsac2S37uAfD6KJdAaK8wTMryduGTbB1dgxtmZvt18qcHK8kuj2f2oWU7",
  "key23": "3Vo5viD3tmtgdvrsvgnqwmnUouWWyET7i7WuYZTcF9fQbWw1xt7vtWsN8bVY3D3HEzFTrSTkFZiditF7RJbT2LQn",
  "key24": "3Jytb1CRQ8JseRBN8fGUz3pfWsCWBqsxffyf1FxhR5hi2iPraG9xBfhufTdaSwGBHY7aBiS4ztNPe2ozRNkahLDq",
  "key25": "22jiv7qrqwaXPoNbuTXtxLwhuccFr4s99fiDbc4qyFAegZdkT5MvZi5JQbBofrQqu1Dp65q5BjoJFQ5bghEHkZQn",
  "key26": "5ccJxDt2mHSR9MtMfc8Q17T7mEUVox2YEPW6jGnLBvng5ndLSv1ALgmkTC9vtqVGufAuDSnPZNTfXAMrEhD4GFKj",
  "key27": "6VhyMVcGq9XteHRDdXstpR4pxh6fCcCqQwPQ1ZzFTjvT4YM7YnduZw6hxZ4w8GLC8CZX2Dgq8VWnfNvWBMRUNJM",
  "key28": "4SjmdK1LCNhuaFjFmRCukLhfiBXGoaSACqKrjoNxTcLJdyUqek8SstGQbDhD4LHrgL494aw1h3SKN2Furgvkepin",
  "key29": "2byZsSZAZkNtqRCiKBmFFQDWiLCzKHMH2uDXNGVJMrfNvHrVX8Jn9xHZgm1WCvEy5e3BDge35SUjMjrDQw3FVZWn",
  "key30": "Zznwhzd7QGWNJ5G2RG16uELtwgWmD22Cq6oqTuxVWfL1fMgTxQdWtTjyRxdP4zBjhSRskXBxioRoGumyJ1dchhf",
  "key31": "4zbMa8JT1uNFgrKzVeiJ9cvMFJtSZmrR2GWVsDAQMm8wpbNoCA4oUiECVLYHod1KxJKms6aUz2K3Qg49GP6PpAFd",
  "key32": "4WESHYpWpxui1H7svmzZ62fgvDnMdGWbUM6PkraYbbZ2427hhDT4M1DfwE8iBvSE3JYtGuL4gQjCzn4p9KBDnDN6"
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
