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
    "4MZjEzZWnjKJkcVAwM33Cf3CYkmFqiMgmmoo4QHkTQjXSF7EiQzuDiG3oV7u4thReRGKyx2TzeSAzSsRWCSxaXWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46HNZyUjhfS1BhUZxTRcbzwXEMwLZhVQ6KjfuusnFEUVtywEoQnaXKcPRV18e3ABXuQLgw2svpT48obPn7zLfAXi",
  "key1": "3sK3WZhofAz92LH19bU7bGvpQNXGperXEt1eXykzKeAso39pS4iSsELZJt6mxU2NUNJbTamBZtLqubddz6NdL4KA",
  "key2": "RN9RMFCBktdtXUUReKXJpPLRcC5LUPnpZeFMgGxFLk69aScZF1kud6eECaGnk86DBTEfvjJc1zeEMLQNWzbnsPz",
  "key3": "AqkrEmh7XYEmJFwuAWJtcAPW9EhYEqrkGdKmcD5DsAxt1U3okMfzEsueDkimVLUER4KNiPNHak8uonsMj2cAQAR",
  "key4": "2Pv9DFtijMR8nrpjvkeXC9JayZDehZCHwQGeA9htTrgfmfCMmR8PPBWniVZDFs3o1fPakai27eyQXThHv66qSWYp",
  "key5": "52zoEMTHLkLi6993nA5EoosjSgDqWkB4vLbYLMSphdRMWMLKyV4EKjtN3wjQtrsg37zDF7EUPS9XRyfxTSWP4NtQ",
  "key6": "4gPjnUz4dR2GqKSbdfbb7z9LpcfRchDC2proXE5CR8ek3MQ39ZKxc3Q5taAAps161M9uiRKJ7MQy9bAFvnTbL8Mo",
  "key7": "2dBNFatWxwbQneBg1uCbroYZvmDMuXH4n6fi2itCMTGYRVz9zySpqmQyLwmqESUb4kreczUbmym3AE9PjFWSMLRG",
  "key8": "2Ne91DFb2rWR6ak8k9HB3xfYZKLMvcpXCBU6tVdkACkozUrQTniB5eTJPwLZEVnaSQoEEHvgUbmkpC9744BuEdmP",
  "key9": "bDEWQs1BduN6pAGHkEKJADnou4QCq3yEgmmboRvgZY6SarsUcGhunNsobgmri7mQ9vafrDvF2fyzTS3Mvdfq6NZ",
  "key10": "3eF9dGupW6qhsuTw6ph3tSJEAvMgcyXZYxzGbhkLndSBZ7sjxmvzJRXwH8We8zNrLDGwLZGMxG8PNWLWKCVnCctS",
  "key11": "7Hj7ra63Tknu5vX7rbYDy9bqAzaRZSqsy6NbNW3PYY3G6HVCwv22RZ2DcCtVKc4soUCHktZpRXSrPLqQspCjWzB",
  "key12": "64e8aaXqupPDbearN4tnJhmP41CNyG6FrSGsMzFyLqtu1RepMYksNiq8ckBNh3AnYDu7Y5Q35yvVUT2YeivQMu4G",
  "key13": "UPUAF1LD3fF4EnXjQfyJAFg7kovfsb9UopwXYyz2TrrMWcghpXSLcq7MUwvAGvmnDiw7n3HYTLj3q4j16TYmsKR",
  "key14": "5wNW6DTs9aFX2soNYaENXpmbYepcLUKVRjqiR8G8CTmc2MPmBadumzvHqZiyidzw3vJzwb5V5L7J9fVUz45862fr",
  "key15": "ixasaGMi65jQkzPiQJ5iuUaXR3aVatZDz7UEKeg1EyM6MYrLSH2h3p1MmGc2zJcaFqPrgN9Bryh1eXW3uWtSrx5",
  "key16": "2P9zCPwuY6QYMgysAqZ53DdNHahaCixPFUKVTYHzJ8VXhUuAVSX7zd189TEKsADvNGpRx7wwKqj1CBoojLEapqCz",
  "key17": "3htwHgwLcWjTxiVik1sazdecHQWavF5QAjfABSc6NW1wZwr3oXH2FbB5Kh9jfdg925vadCu6UYFGLCs8hwhZcQhL",
  "key18": "2xNEp2jfAxfU7tM6DEFvHbmyQ42m1LmTc7d8wbMc5EYyudCSP92sc77yEsYVKuS5wDRWCRYmzPYVE9EQDD8dtDTS",
  "key19": "3427hd6DVemWBPkEUTme2ZScbPx13GC9Hh7WCQTvirNpEkTEpU6VPTCyYzcLdQL4uQyDtaaHh2QxgPyA3Ca5K2ZD",
  "key20": "dA3wrwa6gQbVeqtjh1iDKRWuZ5dfCmJVqy3yFq13h8ot32dcHKACcrcXK1YYdQ23uHR3QCJQShwHmkCML1F3JB3",
  "key21": "4VaWRTXWnZwKkkRbtkkDBqwVERV8U3UZSnxWRU22MikqTYEhaZvcBZQWYbGu65ghPgNLBjkWjY1671YqGJd6YD5h",
  "key22": "kzTbrFjUrdsHoenQaVz5uWCrmy7PgnjdDstAxGGgcB1H4JepsyQqwWBMUiNNF6TWiXvemsd4JrCXtGnxn6PsqxZ",
  "key23": "VQ9JziL3HKejfbaGhWXx72KoomHR67E2iPx8ywcTPdcczRunEbASdfYPtwpcmkApozejR76pDPJ68qRNs2Cs4SU",
  "key24": "28gGDcrNEhBqwzqCyKW4S2uhjVVaY2RGy7hBchPP971GbMZaQPR23FsWyaPgTqtieR3QU3V32KfYYMNo4yjMwV2Y",
  "key25": "45Co8tqRyNf7zEvSyv8qUb1297YVTnYhSbmGH6vDXaNskFRoXy13F7T7LNcVK4iq5V6M83LuyDD2eeLYyRUPdhJi",
  "key26": "4LDseBvGx22ZSWZATFsTxHQtkZfbG7zumALMZuAEoJYxBth7G9oo4BXe454hHeK6RmXnaw1npToWJrZTzg7K8Yhn",
  "key27": "211L51KZKWWFbNCSyjBpR6pDCd99XxABzoxJ9eduuVyG1rodrT6Y7krtszv6x38aPFFnPDz9jH2ofhz6Rx2BYQ2E",
  "key28": "3onUkSK54vPDyHdECoe8DmYQh7hW4MG51aTECat1R32wgUm8hmQAncroWZvzAVEGYRAreohkdFvYzw29vFniJ7X4",
  "key29": "4P8XWxFhCs5apdfAksnq7qY9hZNmZrkGG9MRzk4seFHzosph55V7BSXKxbv3paQJoAJbQaUuywxiVTbYKK8zf8nv",
  "key30": "6ida3frrMBhXfN2azVvqNy5KadDJaW4DWMouaYg2NYgBVBntKXakAxKexpZdzZsGyhzkTy3P4QyG2nRRxDSyx28",
  "key31": "4LpkcZunQcF7PB9JVUsT4xeXUhDtK6tfPvvziMvS7c6SMPkCaqSsNuRuAjDvYwrUceD1nGBetmd2wknQT1oJDeXe"
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
