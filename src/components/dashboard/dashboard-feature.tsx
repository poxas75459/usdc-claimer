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
    "2nstAZ7FJ1eBJM3QybjpG8anBuRuwLDyS5YMvES1x5y2F3bkRCWdSmBuQD7RT9eHcVzXeh1Yys86LNm4kDF2w35y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VZY2UGSuznxeyHPQ6CbpQMn3L9tertp6fXSaNaWGbJYx1YZ4zCBQFy1jW7eKjVj5CMnkXDANZPnfdeHRDuKzDtw",
  "key1": "37NNJP1rtWJU4yDi2qrdA44GbTt2xdUAR46sdoXtJRp9GDXsWiNkov1BzXJcyuHhRds1k8zuGuGsBj5JFfZnD6Q6",
  "key2": "Lv8s39FnuU58bmiXa3yRAnZepRP8THyYua54tw77Wcm8sZwhutJC4JbatBric1e4jeHuL9kBTyeWyEcW3g3UeVB",
  "key3": "2x34KSdAG81S1aPg55zNNkqwUXarrjru4Ty3A7yZev7GkShrsySwSpaqMiJqQZT7ctKvAGeDWp3Fj818RzwaDNyK",
  "key4": "iG17XrjRQdbeiUwzyPvgGbN4M3K5HyzN97QiYk6TcSkULe1ZCC6WVbYttMKD5q9yb1oV3qQbzkKywVWgR4XPsup",
  "key5": "5x1Rc2XmB4MBnSuMBKNBLYnsf7b3zmpCB3QByzFEquypEuRFKau4ng2gER9prjzsDbjhmmooxJfpq7VzVdrBspfF",
  "key6": "32rR4bdXZzkJagbaFDe2vELpYHd5yzwDxQqLZe5fWAwjdMEgJCS9AHJYcDwDh9NZokTE4N54ph2uHPFqFZatyiAW",
  "key7": "41WFP3x2Aka8z3MAWdh6Lmzzd6M9Sh9ppJsrZn3nqS2TsGmgp2z8uQHVs4Wz99pXotbv94irsN6e2WHW3WdS4eig",
  "key8": "3vJEnSPPv3nzE83ySPRXL1RbJepNKgwApovnfsJzrWGDhAFnCRn3jtdqbxmJ1bKBVY8Mxpou5cWwpZA1NgAKj3xa",
  "key9": "3uacVAxePRcrwUcgoRdR2hsFBiW4CXM64VU4bbE5vDXWyV4BL8BtVuqK9bW2UwpywaHhwUsdpqdRFC9ofg7LKCsZ",
  "key10": "4afrQnB5vsSgU76Po6WFoDU4XF8ugDohdZpeAWHk1UJrN1JwLXfNH1Avri7B9wP92kwrmju2P645ZSMgXv2aEye3",
  "key11": "62auZoqQw7Gt7LuH8AKP97wJRapcKLZ2xsseY2qNQk8fr9vADqfC4xm5cLC5JT7eb4yLBCNunbc7V24KyjryJJwA",
  "key12": "4aq6vEW2wZkS1sm5mkeR3Tvjw9kGPmmvw6HLGBd3PkHoaKLb5U22eyR462BrUGu4AANSaiLmSGrPpmnHLeYMyZfq",
  "key13": "4KVM4BqW9EP8CxKqzbTqSAq382D1nUNfBWzRPJdzofvGgALhwCmwF28VvLJT8nAGazSJnQWGzjMCxedHpEH9yNZc",
  "key14": "4i3pZPG3J8pFXo8WWuJnRXaX1EsXP1r8DZHzJw97GCfTGYkN7ixAmjWmANP7GuuDWQZ7d8op4GgwQEHWeEYCEyev",
  "key15": "5wADJGgcZzS6QuF7x8HJd1kL2XKP7XFVYz4sc5gvvGX3BhDxB9j4wwtZMbtfKs2RLYwHso4wi5F6AVkA4W9oyJbW",
  "key16": "48vQFQYvA1FwFTj8ahB3W8MzFgqd9DeCGFY9znZrEfR7UpgDbXN4EBaL6PJqHh2YibgdkBGUcxEF9oNKjZoJeE89",
  "key17": "3Sqc7V5v4zh2tFFuNfRH9B8c35Fqxw15Z8hfAM5o9fHwJmPcWJVa5SBqopW9TN7MwwsWPwudbgGQQj24xHSQRMBe",
  "key18": "VJ8jCo2x9XULR7uyWHfcSzqWLH3hnD1Bs9Z37m1rBx6B55XjsyDgspzBBPQqcvrNmfPRuTQkdxWzjEgch1pzEds",
  "key19": "5EoFcp4N3KLiQ7zMFUaZE93x8WxP95kfzesuWk68wHmdK3ebqpWUxCvjfEz6bxAMGFk2p4Sp6hcugT3cH2aLKkN",
  "key20": "5K9fn7SVHJAoYgnUvyi49ed55G2ARNzqwfxLzUKREuPrrzkRuZToA5PvwkXdJw5d1Ugg3FaCiKCEnHnKLPwBDywh",
  "key21": "4oJQpBCbvX4TjHzcypzVc7zAo5YzH8d8EdUPPLZy3mUhXFb7xi8URw7ZwnLY5Y8vMNQtAjfYiGeQLNxS1Rt9cP9f",
  "key22": "5HP8HXVUeAq9bekNUAUzirSYLsNE2oaEAEoAtVTyViJ9MdrbBKsUJyNM67mC4mYvnMn3Eu5MetsLdn7aU6w2gmDa",
  "key23": "2ZgvriYdX1JJhMd7oqJuW9m6ETgdaWrjGdpahskuw3DfrKJg2wK9SMT5vYwzv8DgXCphX7nq2VZdWE254f3J4YzP",
  "key24": "5N1j6xUnD4Yqwm6cAkVgBgzZvSxfn8Zyp9w3cXqC2yo5NZqMVuc3EtQGeZVcbT6LXMUgu3H2VwGbRGXiXYJdw36U",
  "key25": "2ddJSxF7vtkkowvwDRaVff5bYWERhekEDXH4TJQ5BQf8Q6YUL2Gp66kiPShVHSNuDeaNeDgRddLSp6aj44wuGjJk",
  "key26": "2cDjMzosxr1hKgUWe5MxNJ1VJLYXD4nPWZuyR26UQuRbFwAyfFZ6tMNy25zCJ5Z2sEthAH8nbwCjW3Zs1WrikvKs",
  "key27": "3ZjV5udHfwkJWmSQyeVqGy2tnAwtCh9pUhbFtcRkriJEW4mWJHmH6r3SsxTJNim3vi5SQKeBpFSbADaVaEr36gCe",
  "key28": "4bqC5fmAB13ymj4E1mQJGYVhz6nJehZuMoxxmdv8veN4taYRXnyjNRadZePsx8k8K8Lx8VkGQtaX91Kr9V7msp8g",
  "key29": "4d8ZH6sQFzjPjCBD8oaadoFb5585PyzZoMMuxFFin4m1qx9ZvyyZiy8oXtGh663XegrNoPDofkQBV1pYxgwz2fpK",
  "key30": "8NrEPvs5L6gt1U3LskRezveCErxfJVgSgp2inY15dVA5AmW7EiXkwfHt2JNP39CRTLBheP1arxgERRgx6e9LnnS",
  "key31": "5mGbhc2YYsGFsgC3KKE4DGY6wwnq7nMCGKKjAAG7BH4j21q4YD5CbbQtgcGrzNhyz9F7VDkXWuMKgqsdpvDArh45",
  "key32": "4MLbkZnbFjpPjetiq1JCJX9yeDezv3aaiRfTbN2ACVkyZFe2K4dfNtJAsGNMyp4S752Vkgnj6Znh2C8pe5BmeMny"
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
