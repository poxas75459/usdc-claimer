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
    "2JqnenSuHfA83uaPSu1CDsRGkiiNY6CwYDfErPRRMaMnES2G2XABmepx8okaFJMRHQz4myrHER8Pb6GCURsbdaSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yKsAvmpEHdKU5zgJCAUAVBGToA1SyQitP9cSj2eP8QKB6JMoF2XEag5TqGCvwbR4KrYeUYM46mvM9UCVsELjWV8",
  "key1": "5Cji5z3L3DddZdLxn9VGjtJqjtqAyLPa8KtKKKcs1HD17HksXvNgKDjrr6W8B3utnZt2kzVGr8H1ozDeweKHgwKW",
  "key2": "5ZXqmyny1kgBX7QujaWrhP4LEiK5zoUnERBhUe3h3byFTSqH4JQx94TD1RdBkVV8YPVrkvH1akxf1XoAoTuAp1HG",
  "key3": "1vnDmBYCQjfWLB2GEuHwiJzvhDk5E1RoJYYP22Lur1k4d5JGbTSanPAC3J1DudqfYzeRVkefjnEBvkdF9iP7g7p",
  "key4": "43zaorFjjxHNdx8mM4YSPdh5vsHm51kEdycQCW4SyEFPTEnDF6BLbAtk4hVnStLh4TKYWoTmvE2XmF5MdewrXESB",
  "key5": "2qp9nzwwzJUnvFBf5JFZMdg23AZHEJk7GtRyjratuCDrdMAuTMtDPAmMNJgHNkRiEmBbTxTKnj8xK8JfXvwuSLdF",
  "key6": "vQmkvE2oWQ6f4rnsbkz2tGBGffdDYFgyxxbbK3VZ6DS8tECSDf85j4kcDmDDSHn9vpawuKBni3YWEws7pFPr8Hf",
  "key7": "2n2W3SB26q7sLTAKU76UHWwNYEd8DHvWfswYsukUXbNxebxDBRJN2ED9P2kPSMroWMVnR73bbd8DpaQQ8xXRHLxg",
  "key8": "5p1z2CXG2Red7idoToLkYXBJxiorbJ9mHeaLKuzFgQVk8Wwk9LWTyhzXiSHpKnKjSA5QsyWUXynBQAiDCLMt3jKi",
  "key9": "2JBjSZQN5iRczgXccm4z2RrWmnMSZ6Enq6ejovQqq81V3MRnPNdhFMdtr45rWZgNLj9WG2XUTzYDjfCQ4YDqts1U",
  "key10": "5YnHiFLKXVrvJMWQp7Xszn7VKJ16L2qEhEvrXFJhr988x2camPHnXFVcUZWej5779ynDf3fs1t7g2SojQHrVpfFo",
  "key11": "9jPHgUAP9oZW6pTrWgrrBGhjkAfCvfrJWEQD9LGd6GyvezDQCPSDgmNW7wySTwpZefmAcrE2UnKJbqJ4sj9vHXf",
  "key12": "3iUh6fSeHAzM16uUUweJ1gNys1RzsHUe7GiLiqh2yLLmKNZjkU4k7o8qLaM77hcZPDtSigcfknWUNGZUruwu38d1",
  "key13": "4q3MWzen5t5g298aRRy2a1HenqzQVDrBoJgSMXd221URyEMA9RV7bZaLYseW5Z92NwVCH7xmPCz8jxYDPiYRkbA1",
  "key14": "48WuWuE21XsXvaw2ew9FAStpRTffSLt7RWKrTJb94XfPf846oFkAnB4Mqg9JiqjXMwSDhikoBeYK5awf3Dd7qhfB",
  "key15": "iDFRbPzmjRVMDWZnoHBoTVQBw8bVtDaxVRL2JzU7MJtFMM8B5U9BLsv9EphVWER5FyE8KM3N6tXTCuLXQwDU5hk",
  "key16": "2wQDR6to24TD3ukfSAThgNnafjR6xaLhziWs3RhWfZtdQtLPQz35hdb139FyesizAqYvgViwZN7JL2gZdvWHTQXv",
  "key17": "sDETk9deeWrH81mWbQfvdNrZu2ywesw4FsoeGakH4FetdrsKFKRRvyn2sWeVA56azcdGTyKts1pvnKz7NtpVTDw",
  "key18": "5v8sEBv6UT4NgYrHA4YDnSHX6cj3EJfDSmf5PvQoPR1vA4a7A4nyDwc4sWQAUQE2qWHnf7DY1h36RwEsKwZxmoPh",
  "key19": "4CRudneTDji5DXvKMPn48vBfyNsj2z7FQzprMfmEnjZLe5U2RxdQDors6qXHp5T7YTxXf2QPPRXWQ6NYg9HkaFKc",
  "key20": "2mr22Qkt1zfoiyGdNPBmaLrTqacs5YiF8Sm8ZcoxgStH2nyKqvA9uiA1va6xt1MDws8TtwP55MBmLCjmTVZf6Kr6",
  "key21": "3TgjwWPZbn4LxXxC7JCteGTHwSUjek1VZbNKXrGjeSJqATtkFhZt6d83RFhMWizh3RhJ55LD3p1mYD6UX9P1R2pv",
  "key22": "2GJWPrr51jVqvGWgA5x3muB3bBAru3g6qsZayuHASyC9FbYoDW66M91yM8aZFKcfVeaQ8pSQnUCqeDwTtmNy1mEL",
  "key23": "PE4SDj7tkDzMcucNiV2ggaskU21bn7MQb5MYcXjZq1zKZdKscywrDHH1Sufs6trUSQ7SLrsnxkWPnWJzpCeP8Hi",
  "key24": "4KFvzR9XZV2LSHSrYwDxDS8a2s3ymeiKUwZoPnRvzLw1P69wmP7cVPuWndLWAcABeGq2arWP3yn7aER3QTU5DBwa",
  "key25": "5HHXYQL5j62hTKTUd1Fw5bHYKmfKZXMW6Ea7j8C5f4aaFQn9Eh732YawPvGV5DSj423CWP5YTFjgy62arQLEqohK",
  "key26": "259LYRkYDe2dEPv6DRS9sGe8zUZRgzcvQKLBUc4cLpBx7mC9aoePwgMjr9G6mVQ67uCF5DVN22YLWYq6Rviz1tVj",
  "key27": "5ESAZafFgd9btw1BD4hH8a4if4M5GnaagVEVTgSxiJYkntn52UU7BF2gDbfWdi9eUaR8ktTNzpGzDsc9fbGByE6G",
  "key28": "THkPP7HUkwh1afQr6YaLBtN5uqxqHZRbt9PcxCUusZQdN4yoDJcWMiMs4oWrYwifsrfpPsX5M378Lqr9wkq4cjm",
  "key29": "2mUZ1ttw35Ko4VKVEkQFZs73YJYoh93EAuD5dYRvfEXmQZYDSoMRp2tjYMd8ndqkua3UcsEGzQNaWadQqDsrvV5n",
  "key30": "24Jcx8G145f8P7ypXPUFGpZNC22j4ZkMpUedRonV46DVi31fYeA61bGjMPsS7ssG7AkdLknXnxZSEJK1bPiofmJ8",
  "key31": "5CYtE6diChekYJy7hGjg24UrH5Kszk8Fy8fu8Sd4MjWrFQMesEpw4ft4wpkPZmyzngpb2DdcwAzkZTHu68tr1T2L",
  "key32": "aS9vPPRFjzHGp8V51gitYA3C5gU5wfujVwNFwcVU4XMqjEPqG2HtMKsfHbsSEtNitss1WAtpuvuw2KvRn9CJzTV",
  "key33": "3EwRVdAfUYLttgRpoEDGuVgLQaR3pSZeXanvJUqdxsSFvVMpyUF3KjcMmtiADnKNhShg7e4a51xocncbEyr7F6Xi",
  "key34": "62183ukEkvfERb1nMQanQXcUqtKyP65n9qqn6MMTY3KMrFsJ9bjdGJg6NJ2BiD33BDU9jZPHv7aCpmX2zVqh7Ldy",
  "key35": "4fxbCuRVuSHPi6aG2uRtgfQuHZbB7BhBdKrMyxPMSWN2QorFzLL6xpqv74HyLdBLFjALrgD61xrRG4YomT55L35F",
  "key36": "5rtPe9qHoYLQ4Jwq1cjpAs1hnp3w5Z63kaFWpqbZosR7T9ci1FeZiozP934CKp6s7PkR9FwQL1YdGRx5bTFyFxty",
  "key37": "4XN9HQoAAyhaRe6KgvcZmbMwgy1ShRiDBfm9pzTkppqj6YxjZ9CNhor2ur4x5Ju3CsvREdhpGyjDzXM6cFpZgGyZ",
  "key38": "4xXufj2YtveLUj726CJBZ4Cs2d1MHS54rpwoVNuarHbcpnZsXEZjkGWpvLRg28KLV25MdPxaZNJDGzmqL82r9aJK",
  "key39": "4xMtGqRTpje1aaWY2DuVJNbW31PVHmjTNHoRfycrayVAquynqEcsDhkKraWcesPvuaUgToRJaomUavSucvMf5wFh",
  "key40": "3tFudbJyagX9mEnN8gB7cF3aiGsjPMZWc9bUS3XdL1HRA8K7eqfq3n8DGpZyV3zUoiCrcZKducB73VP59TzeEbo2"
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
