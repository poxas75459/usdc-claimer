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
    "2rrkdywdSVrMsuL44Dyv5qc6SNsPntHL6xNATMwUi2b4Lckftenxy7T4rd1LSfvDJMLvz7eynuqPUBzMun7iQVQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fXsmZJy2XL9FBxhqC2fZKgMnjQ17vYuKZQ4YxYVz5bLx2HUdft5v2Wdvf1dbJSoqRQPUFWqBsgATJpQ5oa5TGet",
  "key1": "vCiaBiT5NJztYUHBeCkcBFZJx4XUdApoeMpuPbp2ZerHxAhz162apLvcpFfE7D6msP4KzGYDDw3VTb42RWPqt4s",
  "key2": "2EVq1atVZ9MJ9QfqmmCg94ZPRKPA1XavGFEf4qGDgnJ2e4qkgEPnaHAWZxtBUjab8QyCKxH5g6sywTqVZcjwVXm1",
  "key3": "2ozpAmpjLEyyiTdVSmcCTP7ukvQ36Coiyoxy8BEQvkMAuqD39ciV66VfxQju1SWe7kW3vGkRRV5uKXk8kRmGqZ4J",
  "key4": "5cDEpy7TFdjMKG49sjYRyPK1npXptaYskx6yeKZsar2M7tNVdzegGcBcwg4RuVzuWHRP3bzikinGCeJwnJWVgLBn",
  "key5": "4S8jUV38XzwGpo9FYuWPEsKPceHhuuZrD9N1SiCpZaqRGcXQT3t9Q1fFAa3YFg4WcDDGn5QQTq6rrUYJcW9UxGgc",
  "key6": "56DJKLhPfEzKhpyWXU6z9p9iGzRSB6P17B9TccAdTgrxFoTMKWYk4g6vBW5gJErZiVc9eQGYZZdsZsbbzpJTr4Yg",
  "key7": "5VUg7BeWRLM25WzV2oo8nwcLeyxBPnVRazSYniXoHPmyHMzQ3vcPNARwdeq3mnHWd4PUuPjRvnr6ijhGfhLPeq15",
  "key8": "4bTnRNEoGwrxVgvxXyDYaqx1wo75DytBBWLguRMZcSY6wbPJv3fxSr42RMzbLCQ1ekQS33dpM1rfP4VZ2gFtyiEX",
  "key9": "5VURQQhTew4E8jW4q965tVJJVnVY3JfJvVKwSDaBjTSt24ThghbbJWjYGL7dMEXu9nd4XT7NGU1Z3c1zg6zB3eS3",
  "key10": "49dUECoByok3P9eREQ8WpwZ9FQfMdfieVMkz4M8WZmc2579kpX3PYS8L4Fb8CXrKEwy2opvqQuUXigKZj2wjCei8",
  "key11": "3dB81tupMkrnY4Z1yTEXDoGC3nbMUEhf4XRFA8iJrh8vPm3r11H1XTVSDygBjWW4K4dKSUboc6UJ4DhtnmHHj6bk",
  "key12": "4qK1b7aFEqUFPckyPUif6L7kG5iPtmYDLSVusj9eopaEgZ7Y8qqFE2h65HrPnTdwhJi7im4o7L9Z3r7ftP6UuVSH",
  "key13": "2neEgrK7ra4CpHtbCxYVoGdkwEJSYteYGpFNS1XxqVW6fQfNkkDLihiKJoQngQYFNbV9Laf2at8NXyEnst7CgC1S",
  "key14": "2arNSjuxQLR6Liod4DLvJyxAv1kxnAcDg3Jsa3nqpMhRTxPFgGT4RWxchDi8X1g8ALR5CjiApWYNQVxkhCzHttJ3",
  "key15": "2n9YaiUdwMKhsFdEsGKyGDDXfRy6ZF9RFhFhZKiJ7KULWS7jgjh8mdv1stY4MmkVZQMnzXG7QiDrF137BDmwoNGh",
  "key16": "5Rdp1P6vPGgZ54sL5BsfgHGcRi8z5oAbhPPWNj8NFDb8DDVVYBSSa5LnFAttynQ4XWNH9w3fSgq7TWhhcUb4wJ8g",
  "key17": "27uZ6nMfe3YKjEZhwSh2maEkBrnHQGEF4miDh5V4zuV3cEKeaASJriMqYS4cX3dtjM75PvEKaXMncPoDBdCGQP1R",
  "key18": "45qqK1yq5wqrkATi4AvuLHC8YpHKgMqkj2HsBGVqgVfzuGSskmCf64PbtNjW3GC7aPGG2fWECoCvPu8Hb9cfndGw",
  "key19": "2ALKFK8EyXtXw4qtxuSAmqwogVeWFm1SQyRz8uHoGf9zsmKkgYCXcmbZRrnAyTv3NNh3Q1dNHq9ZEXoB1uy3N4E3",
  "key20": "2eKAwJQi21k8WghrRfranVUUWidWj5Qk7h1VTheBG74MBKNHZs7nrRwPKUpxyGSP9qMNkbQ2cHcBXZ7ohpRuUCBn",
  "key21": "4efcVACTDqDqHxLyhbxXacaBfdeBMsj5zkcH8B2cj3RWTa1BY76kM4QXgb67HZLyb9t925GAbdRtw5VS3RV69ozS",
  "key22": "49wUEXRSGaDXFTAfMSC9P9HrgtiX4PJ4zHhfbGR3ZronVBDHLiZHea9gLw4rYZRsozCHrN2avfkRh2A2aJpiYBSz",
  "key23": "57sRfiiDofAjFB6VSXXrVgDgHKrEGKZeE82XQxji5uanKQtXr8qNfgaAR77cAGeL3HVSssZJSaSV3pgZDtvhPgFL",
  "key24": "4oZRrKvcii8jee7cSj8FTk9EBp7PFVhca6QT2ZxHUdvowe1RRsBRiVQNrLDrQ9438W671swfzxuYZ5EZFYiLwivf",
  "key25": "58ztLNCU61MFwGv9ydmojKhhXTTxrBnHG81M8hgJp3kdyz2B8EjvNMQeQzLf4SakkZxyEu5jBkLfUJLwJYVTWGB4",
  "key26": "2jquTHcxF9yVCZzZSHmMC2aN5ZVidYPbDmpEYmuD51idu8gzWaMcxefg33ysXiGWesNH6uSrDdPbRLHuMh3GyLTV",
  "key27": "2nxWA6w39yV1DdmQrCEL4JjKrPoXfuzAHQUPdEYZEj7xXtjmDo9JG9sxXprchGpX3zBNjamyYhNFApRyBdiJ6Ru8",
  "key28": "5yaR97NeHpdAt1fh98Xw1fkE8pT8v4ZhXZ1b94XckNotcv7p7u12Nz6sJnB4aYHDtn3kGpRbWVZpkMSSJ8VkeZiJ",
  "key29": "5e75j5zFVWZZNs52boyezz81FqR7JikVvLfi1Vpg9f2cbYv8yjNqoDk3gcJRJv133GPx36VzDJUNqTggNL2qA5bc",
  "key30": "33tYkqS587QTP5PUNZk3y7sDt91eBsseSfRqCQj6jag77WyBBCfQQ98jiXeFrkTg61MYPcCBhkYUeFGsfsZXpyqZ",
  "key31": "3KoEWNSuL4W47W7A3pFug7qpDa8jdN7HHb3itRgvDKziJwZvqxBgJHrZvXDgqpPPpXJUexSEQyiFJmiLAm1nf5oh",
  "key32": "51EnCuCxe4eRLCKj4gTfs68qh4VLYyjWwFqrcEEuxGTg1QiiCYZAdkfFei8QdUvy4LAjnqqUtx53yH35KejpcbPA",
  "key33": "2pb7LNLKTWrVPx6zUY7scZZ88VocpPGB9D9iix7iqxFECnB9hcqQennohFySk74aSgrqh7PT9A5YTtMdAFVHwbyX",
  "key34": "5sJ4SPCsk1qpvYNDVSZfJYPmHNHFoKa4HvzT9q7sjD3Cgqvko7St6dZ3fLTDWZcaxjN52hkcVowfi42JyfF1qvTo",
  "key35": "34ru5r7A9pRBNm4SPGbvAhnAa5zVDrb1nVR1wyFhvY1zUs2dVemUPsU6wKbgXtS5MMdpyeDqS95NNq7qdP4HAhk9",
  "key36": "X9R35uFJAhPWmKjMgMeZ8TRRpHgJJ9YJtKhF1MYLYZKefKUmJMtzeC7GgEZsFffzrv1VLP8qby52HFGhfDVq7sB",
  "key37": "4UwWDp4SZhCoYsbLs26BBF2cvtZpJtaRnSNjpTGVjBu9Q9qaoErJbdWBCbwWdbXHhp6GQYw4YwrGc6sT8NjfncMi",
  "key38": "4c7CeSZQgSFuo5yjvqq4JXZLoG4NhoHYJ1DdihGibTrfgS27S471J4yD9GMRMiuAfxLrDigcHgFtEwVsnueuJfHq",
  "key39": "5oZpKzBzvZTrDmWo6EfY4SmC5BWfCKkrFRtXDZBHn33JgNJCGJAUJMTkdQksGcvSyzUHuF1Txrz8svx3UKMwGZWC",
  "key40": "TF1iSfoQ3BggUifkT6pChBDP1aRCppK1kh9tmhR8dGWAwx2qsJhTG6UTnBvvw8BPg5R6VT9FWmKvxbA86G1wLfS",
  "key41": "3TWFZr6Vu5Dti6c8bEzkJuECtPNrozSuaBnXEfCqNMZWBjER8Nsi5Y62y6DUn98adb4R9zdD5DMeM6bUETYGfSYu",
  "key42": "5ZwhCmJNupDTyDcvRt4D8enU2jRqdLohqDtF13hbjUP8CBmwZAqqECvKCbJtgEEgM3b1ka6qme9oX1iX6MhZSS8Q"
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
