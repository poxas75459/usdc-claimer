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
    "4D3xhM1GUijX8mEz9GkuAmDkaNBJBjH2EDMCVbANw2ehPTQEjFka6RJ9zbNQgm7RnGVY6d4siem3F91gpb1eHCns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YtQQaychXVGJ5WZxCQpVTM4hvkzUhA94B8G7Evpg156nXaH9wcVhe51UpPbNtZ8n6CPqaa33Bpc9ivfDM3yhujp",
  "key1": "4sdaTJpj91fsaPWBqtA9yJxPAXm9b1cq43WhMHvE6gEd2RgvZUqb7rcyfPxw5yG2KruK5D98dMSaAqoPRzvoTk82",
  "key2": "4NHnBttFkGDP5Hk5jQnViQ9UDWp6FCnsVSfrM2cK2NU4FpNGuF65ge2jQ1Q9LmAHYsUei3G6ZBVHGyzBdBBkkRDY",
  "key3": "3MNdenEVagqR6Ej8JmqcuKMxbAuBMASSYbydVKbErgyD9Xe9ZvGfno77af4Q9hPHV2SfJEC6sQJrXo38G8eZjcRu",
  "key4": "49fxQaoWcxTADPC1hUJPBYKKP7ueNoDKbshfZN6DQNppwGkK59DuQE3hV1in3t9M6nvCG57u37PZV8L1ZJd9uh5P",
  "key5": "3Yo2MzoMhX4DNfyyPAg3mqUoTa3MGPGocLJMQJq2pEcn2HAT6SF6kARBFSwen98MsF2c2xiX3GM2f29FHuure4op",
  "key6": "2Nd4qx7AHh3eG4zpmPWssvAKLGXkWJ9R7zfcseDQhUQUWQgJtaXRuzxJTEcN3VH4w9UFFAng3CAHq7sAJ2pCF7Nt",
  "key7": "5YdSDFaGyD7jXFAWbPkuuegntHg4fmeEUjiXSXwxpybAQxbUFnaFQ2FkvwJDCr5S7R2PHvzM3mRmmP9Yd5MFjsom",
  "key8": "3nRGGUpHYF8KCDKZJtjmAjHrVsNdBNGj2ntUzJFVEUh3hGsFCAwrePsydA3sSwK93h6bz22LwoPdxkivgjgDanjr",
  "key9": "gXTtU7vQgVkufpF2nQV5efCNGuHAeJ1ZTH62FcbR56H5o2EpHKQeK2DtsFkEuES6zCrcTzYagoUozyoQjGHfkfE",
  "key10": "567ejSdhKwfwpZ7tUyXKVumhVaUHJkZDWH3Fyti4DTvZCemVTGovBSstEyaQLdozqfL3raWNpDiBWBetavgsfnsp",
  "key11": "3cyxpH7Ar69pKic3deBytnN653PRAnA47FbushbL51DohU27YxzJsbGYK1qdXFjDchCofyX9pEKfomrADQELCwd5",
  "key12": "XS886J2CZZNNVGs2UmDWdijmJmCyWw8FNy7GAbmpKpFfuPL9AADq7GMa3y7JhRzZjzKV6eRQqr4gfubWLS2uUu8",
  "key13": "4diuKByx9qGfktGDsFcRCYVsjiahnFcmVrEqKH61u1VfhSysAHqzcnrxz8Y3DWytokXvwJS5QkQawV3NxB6qooeH",
  "key14": "42o3J7qE4hndcSp9CXG4rJTb6TX8JPGPk8aoeuqoyZShzX5p3DYcmsmBJN8KcqEYY9j4kMFE5DHUh8n5Nfi38dv7",
  "key15": "5tEW7Nm4vDw37S5dwnn95UGWQrrsSFtb5JpvT3koSkWVjGzYKumF2o8eNbx5gJ3m5tALGj6EKAvzhyy55fFAQxC",
  "key16": "2ppo5ksbFgCGG9ZxytaFFN9UzLiBFFjMfUFGEofvs8wgkPznDoTuB8WC868Ty4FmMvUJ3JpMVm2vwygpy3cE43z5",
  "key17": "3uH2aRHgsNQrtEjXD6W4HWQrt6N9D15cpTQ6ymKoWmZ6pZrYuV1ZcP1mdihrAvtWUJHr6fPiB81W2oV6aVm79yom",
  "key18": "BSRygANcgYnfFbsUiE85GDBiiewhoNHXkoHsGxebhMY59XGPbYsMBnHkNE3HHnJ5vT7pj37nkvbHeoAb7asfwn5",
  "key19": "51eq6KMGAB2iz839Bo1d9RohMqTFpvkKqb9n4FBmrKJvpfYre4cKzCHnoVHaGoRcnryNjApXtyscNRN1nyJDhcMs",
  "key20": "26Fzr8wercBRegsRytmBvrgKfRaH9Fse8d3KYrfJxPzHUdo3iFcunG7dSbfiZXU2QTdrkBvgQwSimtBc9QwD4bwL",
  "key21": "bzXXBiAHwhY8aCtZtGN9nsLpFWSaGGRywkAR8d76pfc18RwTky4dtskKJwi6WjjahXpFXUAA3mMzwTfqUaEreGd",
  "key22": "26cU4TAujF21kr5snAJf1v1NpfQx96mX44P6goctA9ETkuqGgbEN8droG1sgbB8pJCofRah8ZeibmvEh7Z2DzQms",
  "key23": "VxsSNdcqQ1hP62TWCYkSnaty3W4pAUoUM6ZvhtTwYXoCKTwRTaQNoZv6JUwpsnh5ji5Cn8j9rWzq76rMyQgA9Sq",
  "key24": "ducxmJiM7keFBGBvBH4ktuEtfFvRS1L6jAFBjGVxtfUXkM2daGwfrLrG2ZDmcshUgzzpmRmcgWdd7CHUGE6RMQV",
  "key25": "EdjU1BBki5BLgeEyPMs1WsGSVwzq4f1kFqEBuzBFBek2dop4f6CEkrXyJ3qWaXhDWcbmgxRhhqVNZk6ipfzwV5f",
  "key26": "v6hScc1mqbQ9BWD4HGAk83nDBBhTcPhdHSSjzfXwcMxFiucNzja2b7ZLw4Ge2rX4UBkTT5LodypHo2a8N7hk7yu",
  "key27": "5Kg3CN4PZZEK1Y1FvfgYwfuGnAcZmH1xoNnrpRn1gSeA5v9bQBzhNBrMZ5cuswyiU9FML2ZTm4TZ7VmNypg2oxqq",
  "key28": "67TAxZDk83fLhKhBmp7S1p21BpJTCAYaLSSczaoF8QQQWwE7MLLLRfT2WSVE5SLapkzTgFj4eHxePyegSH8kghpt",
  "key29": "4osBh22KEdXsTfAsPaR2VYvPan99evPPSi2NxpSNWqxUFd2vTsYpbaPTUu6qNSGUTVkQyxQsD4RJQLdicEpxXKSD",
  "key30": "3A8dwQinMUaBrHHZKNYVLEBVJndA97Hcdf98dtpTJ7Ph4Vodgfqb7GnKshNMX3Zk2FYrPbgkfXHWDYekVwEatuBm"
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
