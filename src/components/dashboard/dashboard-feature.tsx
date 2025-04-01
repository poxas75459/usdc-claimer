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
    "31fUSBhK1cDoxCUBu4eRGn2y91LStDgEjYTggs9M4CdpDeXUMHCt5UaqsUhGgmdnC4d9naZeVFWqnGA9jWjnhukN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xf86k682siujoN9ytarFtneFMpPLVsy5wQ11bAEN8SFtGMhnZBdZjTFoae1w4KXhm2voCDdHsrPormpPH8Jqbpw",
  "key1": "4bizbwhWxE846u9WrYqxxt4txc16x263TpkpYG2e8fdfHqQdZmWbeDnnXsuGyUFXxiBThq3g5ueN3d45XPEX65Ak",
  "key2": "5usyr3jzCyq7VSqFmmeq3aAwv5Ho74f4H7impsKpRnnUUKWa1wtGxk2299fPsbD9omz78bwsbYZsFPhE5yVcfoD9",
  "key3": "3gjRn21yrmNsDQJJJpKoUPTLBkfgHirr4u8qchCVfeNbnuxfTzK86xXNzRbDpQXF4jfXhV3QjBeFL5hUzqTzYoUS",
  "key4": "2rJZ3t8G5isns6rJxjRZiJqXYALny4PuA1rZHGEESY2drjXNxRe3aqWokUnk5xYp7gHYQmoatttLXgwVPsdJP7Cr",
  "key5": "4kYxiC88nmPNrkEpgxtvkM4ESLnkbHzJUSWdtwPB2TfrzKvhGQ2esfovH1JCgnLWqmUfdgyrzGBAC5tLib5UmCLb",
  "key6": "2mqjUGEhQ6VR24TNa8BZchGk9SwiZks5qiNEJ4dGHKGUAkHRSYBN73VDJPHPQB3YqeEchJr4SczP6tXUqTHcZeXJ",
  "key7": "3uJh7HbgvUUvk43YPRJZTdEhTNMWVPk4MTHTpExumr71wXE3vagoZ14xCL95Xa3J5r2xtFdZf81VJUKaeAJYsyTf",
  "key8": "2cR2euwbEKncpsktgG9PsPLavsWMovzWg9nxFV6heKUar61LHCkiRHFKT23UiMXQwZ1yDUWxUS5fpTUmCX2AuVGv",
  "key9": "PuqANw1aLHYhLBqk1XJJ3vwQ15pgraN9VNqN2KtDhtoCdrMEkReZSr4qpNVZEEg66CWi4cdX8FmMBP2R8eccp7b",
  "key10": "jRXnYLasVtitAWuBEdiWzGdqnctEfyfDqDxZ17UHgzDrBL1oGih1VvXBCsaP7yRyfk4z6kzNxmfF82MZKLU6qNF",
  "key11": "HuaQa8ZKCbq62sC7eZ61KTC74pZsvLEU9rcRmVhePwbWT1DoBWEXtCZnFRMxsHAayPZcGnkt1Japi34GkUzurmP",
  "key12": "4MrUEvKZtA4Dae8NnciZHa56yGrzEY5ThUojBR2Jy9zJ5NCEajnZiw8J4DHCFf1X7VHMpMNsUZ2v71hMTFrdNV1U",
  "key13": "54MAjTAnRotS4Ec8h2CTWWrJikV3JCEb7SWSjwVTS664bfcQqCVyajb6f71SnKzG8QVrLuti3ESfRMeP8ZfBoWfV",
  "key14": "uhowk7eqnwyAB7HqGRUQScepVHpHHrZocVr8pQzzcoVrYkpzMsgLYeR35x6yS4XFpGWJQMZjEc4X1PocDVhUYyu",
  "key15": "51saZiE3BdphYivn5KWxCbg9uMm4o3rCfJLfi5VgPC4NxxQEP2o7gmSwa2MDU8bACv5DPcKiSiCeiHPchRQfJwus",
  "key16": "4eog1D5Z478NQvhcSHobjRVWZxaFVSNunujw7hozrztBHmNPhxfhe1Zhr4cG5jfoPxzZWXcs3fA4ByrqikU4be9w",
  "key17": "5UmzdmAh2Jr1g8Guj7YEmo8W7ryNLqHszv4BpMJbZ6YwJwuWrqxig7LiFdEiVnpau9y3df6MqkS2RNep5kVkYEtp",
  "key18": "2QFTXnS378Q57kAKbF9He3L7muc9BkjX2kwqzG4FkUmptrcZBLhg7conNpRvPwaaAr7sApaTwSvZfR45pXUWr9sg",
  "key19": "4fVy6wXAJ6jM8JHMEnx3zyhg2o6R3VdSgKB1HKRzDBQfg5g4XxeVczt4WviBbTuvU7hxYPuvpALePo3GumFrt5Fw",
  "key20": "3GbNMkxUGAKpPnJ6m4EzPJP3Y7jkfXp7zDgs95iHn8jG1KDyaSmsj9ZgEiZezwQyKnys7pKrGjrQgSJHAJeBpgQW",
  "key21": "RzjeevTJbWUatypxVSMsnGm2RTK4u9m8ybYoaHL2dgY8dRyiMhCdJeHYS6rstM2sj7DGNaPfWRAJXhzSsGypcyA",
  "key22": "24oJZmyg6nEX4Yyw8rhnd3SWfH2cyZVNQ1zEVRkP3izeqJRwVNd2xovQDy8ZWsatRo7TRFzDj4ijoJj5dMAuVLru",
  "key23": "24gtraeeHxYZZTijvLSZJbazHoA13DSMY4g5RXQdttVy79nZ2mHtCUpMW7oAFAyQtradHmpEj3WurcNWpG7jZhQP",
  "key24": "33Hu39oCw1n9mBjR1g9cWCJ24MZih2ymTKkGweBNU4jGPTmvfcvSYydpX2vL5a4g4vyHzxQsTLCovL98coiedK5k",
  "key25": "5Wspa4BCtv6C7WNRw7rmBrxS6VR4kcMQz2BcDmyEwo5MkozSoFeTntYYGpJe4pdiRhHQ6eTqmawY91xc3UFsBmCu",
  "key26": "Vimhzikt2oCkfDzvXyNBUpiR4t1fN1YcsfamUU1Dy3CEi4DQcxfeBGF6tjaPCP2Zk1tCWCo5iGwu8Mzj9JmWUNu",
  "key27": "4yDFJUv6uycAu3YyxUQHEFUh5dMnTXcCfKB8vZHGo1icTQbTTStzWLcZkQKmTsc85VB3TUivEvZZuj179Pgx5V8u",
  "key28": "5R6qanBdhuRbGjXmuWeSBgXK8H9QJgZfLJaDx2wfkM2L9xyto43mWE6yuVWAPfkdEHDwEPz7xkTtrLc79Sd1heHb",
  "key29": "2HZvdaCQNh9cmMSgQjRrQYQhWayaEDfmQ6kFDVSFfZGEWS69s9VvsKu8DjaCZDoAC2C62SFN9vc8rJ3RYUoQgChh",
  "key30": "24uMRfpneMAufoGSGb4gbjnAMiUTYF3TuwHNunhFkC1supb1kzpsa25CbPJYX1q33PWzce6qqTxQZ4WUg4Dr686d",
  "key31": "4QhTgDJJ7tRzvisbMxrXWqmkLBsaX1Cgk4mZVygA4mQwWAWgmCjtrRnAZCo2AuA1j67wHrsUF22XiLEhHwCZaETB",
  "key32": "47eAxomTB7QJaMEah3Hu8rZkbi2FK9wLmHaodTQqS4uNaVAPQVZEEJrYc6wkAS6i3TwWraCvjYZbyRpVDFmWXN5S",
  "key33": "5V7cM5vuEozHTxiuGvDGRYioWgZMLWqTcFgC65YBDKTRhV41543SZ3QooBjTurUcakZQbFsyVRaJzinpveBvEQUQ",
  "key34": "28dwEppMu2QxYjrZBcGT1bmAz6Vy5PYg1DaWBTW5cgNi4rafcHvjTyRnB1769nyG4PgEzWPLWcb4RBHHVpwC6gV6",
  "key35": "354qXAmLhPfWMdqRMJXmyvoBEPtuRhMJ71CSdyfkSzEDQ5GVL7ZRD2u47WyKKs7M34zSQVp8GzVenLKM5EErLVeT",
  "key36": "3TV416V5vL2A9ZgrEZZ8JMB2s3qtNBjwRm8TQa4DMe2o6bKjba4tH2XXaEt7eJndxmDB91aGm5WXxDYuPQJUhYBk",
  "key37": "58MQkpw3zQxZg3NsW3m5KxCKsi87MaUoXN4PX9mEDmw8Vq59XNbdAz5xCmPearbCCrocCznFZikyeP3pLzdHWrrc",
  "key38": "62QnXPmZVdY4KzFdHWELY1DDPHZUeCY5GDCcokRtB7BUbKPdFxPRso6Y9WzV7J6KMkWYK37vGqrPRpr3tweSAgRJ"
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
