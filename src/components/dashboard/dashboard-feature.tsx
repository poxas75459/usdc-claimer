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
    "4YvbVDQrgh5gkCK7iN83h3x671H9t7mCp2w3CgadhMc2xyo6Ffz542TanjRGqJCdLx8yJhgVs2CrHziSy4JcskHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Wo33mpheVVioHZYzX73ijbK6xRD97aKqADjpuoAZ75wKZ4nzVXs6FJoF3XjSyU7dJSP6uepG7vqEVSE4y5hkNh",
  "key1": "2GRxTJpihCUCkHq3qL8d5u3brndHy8imvnLdk7wMkoAHyQaj3b9JE1eonhCMBPojX3mYAYcitUahCCKXZrQyyA27",
  "key2": "jvGghT7xXo5sNhHB71mThVD9F2GzLpexWpoDDR1cYhPwCuKTATuWr1vSSAJ1vPqXEHTxBweE55ZbQ79c4at8dM3",
  "key3": "5x4K8pGR45mLs4djsTppG51YaKvVEPsX4pk6y5kUzK8FEhm9k3fWtqdhNV3QtjCAsB9XF919Lh4aCFAVP75D4VhR",
  "key4": "3HMj3BtoRxEPuVLXgetP9jp3ft6Q72K48NLMg5GH6qFG9TTTowr53dCLRTinaphaMeBCZS9p3DCpGnBu3o7d8HsT",
  "key5": "4cT2Nx9g3hBuVwK8Yff3GdogfGrpngdrmWT9hLc26HgoDhj9Kqrb1UkKvDCnGuGvc7bKSCu5Yh7LHhhUbJ2KZn3c",
  "key6": "57movXWRaDsxTdCtVP1ZW3bGK7VkF6mcxaqnRMEJLKJAQRRhDqz15qHEV65AJhW4ZskdyJY4pzJhp5ey4ZTTuUdm",
  "key7": "3qnbaogH5WfopQvgFH7AqUMkaDGMT3dXL86JFyvi8PZm8wbnKy2FSDGHLq2Lfr5FniMzMBQSmpixpWXb8hkxPYHb",
  "key8": "jxbxRerT5DFcujSpcnA4fn1t7FXsiHy3yNJGqq8qH2VF4FGLgsLCkuKmNcRYxicJvNhzx7VT6HoDBmSDjEtBeaF",
  "key9": "2MzauJziZRhtsrxcK2zh3VoVp8Aw9UeMKMKZnN3oBmrivHdTqUrWg9rBBFdCFt4j1NaERnzb4ocTi87wv3My499m",
  "key10": "548hyjUJuaK6ZE65DZDorMdXVnWkc48L9ANJikfwvHqweDbXjiffn7r69ZkvjpJmzzDd3QDoJcwxjtBa9N5JqJvB",
  "key11": "84Fo5cTdSNYvrFULmKjtE1AzDVe5vninj93P7WKrfZCb1s5t2HTVKCUuhytyn81CvAt2J8mhFa3NjgFnt3afAj4",
  "key12": "24MZNB2YjU3TBg4MejMadBAi9U4yiDvBLCoYkoxGUnRBZBBJagr4cf8zLYpW3DfPmen1W93h3A6UUrF2qXvjFxTZ",
  "key13": "2y39FTxAyd5hTNPxPm6neQAkkyQCbJW6iHNCzykb9QSegtkc9YsD7ARiz7EthYwWfAYuewQShwzc6yuPd9ZYuvrV",
  "key14": "3X7oY2JTGB2tCHsJ7PEaBeotimEuDdUL9TDpQN7jmmye5dvnfVV5gB8NYavqM2uw3TiGDH7hNSBJZq3iezGaaXD6",
  "key15": "3xAZyeiLgMi8zNnFYgzMi9WsTCmdZV2y6fjLe1r2KWQSXtZdpvnbfSXurwLbVBRnEfzbVpnptMedbBofRbMH6giz",
  "key16": "23kz4FNcZj9RnNgSiNDGKyi7uKxePiEkhSjsc3zJZD2qXVAg5uQAh34wYDHMB5CU5ZWxwNNWuuK2bRE4apjeBNuW",
  "key17": "6HCu8bKYxrcEjaHKkA2uu1z5LQC63ZittXLBY4d1wYKnnFkS6KYJz5hKYhz6iX5uCdVLdWTxvcxAZTrZ4BzsUgH",
  "key18": "3MgCLV3nSAjhW6YQR281g2BuWNezeb6PuChCs3myFzSxXgjEmFLRx9mrK3QrjQnUJFGUdxjsR6sfJ4o4fTz2hpDf",
  "key19": "3tWpw9Ls85G3kt6fdMe3npRSX6ZmGoq6GLauSq5XhbM2SVJopZCCbyrkXDFY96DrRgqS9PuNyuuZoyt9FyBct1Cq",
  "key20": "4FnffJukDXFYkXM2fWwmFqo1RXVanddweexJCtyKb4Jcjdg3W1NcbHwjkHL25Kwv8AQUnTa8rHuXGUXkZExJBGGn",
  "key21": "5MtrpCsUwX9bAxYzE4jUQ8NWwvZ9a4zwgpx6tRioS3cKxo32m4dh188gUXWdWVwgKApBkd12Awe54PoDqTvsfHSu",
  "key22": "4e2DUrnVHLW7v6D6CgE1pEnFAW4aP4prAdzAis18ceVJNxV8qGWBYNzS8MdYfEGm2aTLFbLR9ycAVEdzL8FXMkKq",
  "key23": "5XSnGEwXdX4cU45ejoYe3hZVFnHHVpLtssEz7fh8iiccmUxZGtVnA822oMbHkzWVadAkWLjPbg8sA5ygTFcCdSYu",
  "key24": "JGo9W8cbsLce3jh3RZZYmyP2M4DijNR5jj83JV3captminXfpe4ScTqXQQFx7qKuD2zCK8a5H3P9LCpAD1F8GLd",
  "key25": "3sJqcmNCoUAVUms6JFiq9MDpumHt7Sfe76S7WgLnSj3u4D2LLnJDACaqAzjY4FCUvvNgtSDETANbYwt15gEuwYBs",
  "key26": "37rWsAh3qngXfrSLMCua1Hm1Tt6MPwGrL6uT6gVmQUC1REJSEkZX3E13ic4awBPRBNwqpthUGXrBQJJnxC7j6jgH",
  "key27": "3dGM15hcq2GzVgWGCkgGXmzeFa1Tf7DibTaodZB8SWwcUUnCekCuH6zLd7hqC59nHFRqJ1QY3hZEzJqB1TqquVFa",
  "key28": "52iMqfMwx1fabwbEnNyeBLYYmRs2cVEJAsjqKrBUC74DcFX7WWYR82AKTyjxJirMVesPmWxU3iRY8W3AM5VTjdze",
  "key29": "g3RkxoCaZ7pshskFcjK5umLMhMzxfPYVhcqdqXwLjRoSbpSKAQcaNVuQVeYDr8fS6Ka3ByyTCywH9oFfpi5V4SK",
  "key30": "4jh6rerVU3dhF1rxHqECnkNxwFsPbNcoxrFHvyfdd79VikHUUrrhp6XpojryqYRaZeWd4WgV5qVU2NHGVT3EwBPG",
  "key31": "3tnGXQTv32nWNbeBwVQ34v2zwS9dZNPnkNU4EqjEqB1dRZAM3ueJg1xgzAy1baq4F83ySwAqWMkc7dTu7SAgCkbi",
  "key32": "2LSmfSAkuLfT7daCY2RLgsZWjW699obJYLCdUYHBbNS2mG4xLC7XzgFYfqvSRmHQWo2U1KSdqFBbnHaEy1Ki1eYM",
  "key33": "2VyNEc5yNzPNXKfNicAWZRMyaCPqFTU3qiMzQqMAcWEze1NuxJyUbu46r4WzDebBDPhvtcrjuccpByZcTAaAMJhy",
  "key34": "4qNxbzsS6PpjXVShYe1hzzEenTXz3Emswr33LvspBrCySXMBqwFa71Kjc9AhdQdkKjxiNqeMNKSP2zSmJ9tcWJLV",
  "key35": "g4qWsaYkrmLno4ER31VPHTa2p8kEZ7qU6KdYwTdfMz2zPepspxsGfwycCeQ3VDttnuem4PbSHrvK1yVK5VMPufL",
  "key36": "28KouxDhTUrGWEv3bVRGu9zSxDY9BPtHCGzw2ZHkJcEvwFnEGPa1PgXAxoHdR5EfSoe13wKBszovrGy6B9yHoyCX",
  "key37": "2ReEmYiXbEm1njQqHhKGaMgC4dEEJ4JcJK2bdi9URXaB2rUeDHBh6qjdEBHeFQhfV5UBqcqXVyyEsYhRFPWwf7Sq",
  "key38": "37RNm6t8joEJqLn5syPpRYZ4FqKguu11fwwvDsK7ZYi33fLNBNS3yBWZTjaH9pJ2iXMPZxPqgwE433nDDFyVEmqM",
  "key39": "zupcEuBmoxv7NVr7gJaCYaFkqEtdGs22zfsKGWe6vDCciDWJ3PbKLwQDeBaHALpvm5HjTATDY1pmr6NGUXMiz3m",
  "key40": "2XeesKgxW9ZXL2WGMSNimT1aZK9XSSzTnb8EDVz2dNmJtMRUyB7HuAnWbRdV77PViGDMmi4d8VvhCfMZYz8fKChN",
  "key41": "2yLnfqSPjoUMfNwcK3kZQWPGdhwVPEh11omDSnNdyKDWbTxMrtG4Qehz7rjtD2ipb7zDrKHm2reynBkCzubGMreg"
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
