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
    "5aLNotix89HRuEBGKrzWUMxvkCPV6FuHk5fvndEdkekZ87jHthTyBk3u16k94z58AXpyCcYz3Hgu3nC8Ejh9swCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YFs2anZFrCJniha2dFgXdfWGP2Bh8a6aCt8ei5Dv36yHtAddZn61KDXTBMg5YE99y4Pv9kVwWQjyoDftn3LSLjk",
  "key1": "4PKQitTwiyVYd9MT2Ujsv55k2xuJzmc4m7FAYRz8AML1nF3WpQ8GYvD1bQmEdb974pSBZKJ4ayqPBtMU4UN82ToJ",
  "key2": "3hWuxVQ6eJmo6nYkueSJxE4rgK3b5FkPEnsemCBdxdrW3VmaXWtj9SJVtsHrKaM6gG2d26Vm6Rqe4ZdKBrncmivi",
  "key3": "waJjjYEoUGVKb4aH4QubQknR5jxjuzrtDkYZ59z4PnNqBUTq6fiC2xqG3ab6pksPhJJioPgoqsTo9w8YHqRc4hy",
  "key4": "3xZgir4HvKUBou8CecghAnQTw9FAGCfNkjeWzrsYvHgyEMSTjKxgwyBrjba7Fa1xwCGBabXBmkA2UMTWZKi81tWn",
  "key5": "udBF7Bo76QPZZbv88bQXbiTu5DoLjg9dDxTQ7Uy88ZdGLfdsAETCL67WyBwrAVHvXxLYSLtdL3h1HY9vqVXkuL5",
  "key6": "dubXsMLb8eSVRcLgzKSVqpZQFDVYStFzUUSn4ooRHtfEFz2NbZ27hFL8BCc6snPn5JL2ia678pUP6Jxw2TC8KFD",
  "key7": "5WEGS5WahUdrkGw6hvZJMCHKcdyToDaXxkGCinnEEJ6rQCAMZm7K1LvvXeEbeHKNNcLBXDaTBFrdEQ9tXdPAUWqq",
  "key8": "2jFb1DHGQLEALJqycoUAwx6fgzRxEFVZnSAA9tHkoTUykmwo99YqZmU6LRs3zg7gp5KCrsbBw3ZFd1iiWE4hnTPj",
  "key9": "21kXMXCQ6qMh4YaSHDQ5wQSJEdHrYNofUK4v9fDxhgztKyRN9RPQBxSTkAQxyczsnXSeYtDzrbBN5n2LtdUWwQNK",
  "key10": "mzH9agCCSiLxdEVYNRbyV5Q7uAcfJfrHcyZP7Z5T3pHaPTU2HEEKL4xLwAEBWSfPdCcAAFdc4GRkJiNVh1Bjs4a",
  "key11": "5tcVUGHXQP7BzdG3Sq2y5UVpKBu6MZuGwKt3qeezebgFUiWfTbLBgVwFGMLQ5CJtxT2nRA8Rc7JsfqjAB4gDNcSS",
  "key12": "4pgTEqCqJYVvohhScuyYruQe1ygUDhYvVycdVQ3sxSAtNzSnxPgDN6qY9Zi96ph1uTudNYDMSj4G2DLkjAPwszcP",
  "key13": "4nm2u6YdLfFidrX9eKdahjeJP1pxQva75EvMgCf7rgqMSYJybZUgizgSPZNSc2mYKGwuZxXdbuiTiTgjCbFV9iQx",
  "key14": "RBueRd2JeibuhyThQpJgdLpUSq9iE93HVBtA6khbm3agpkUpx7jzTw446YvEgBBtxQqtv8MjhxzCe1o9JX8vB5f",
  "key15": "iWibVXnisyQ4JicX6etp9R9JupEZxHjcV6wXwxJasE7GZoyB29EHgUvRLmFaiux6r5ERP9Ga7eC6Vg5uPGL96g3",
  "key16": "ekEoViVP3Bco41M7pBf2Dkpo5LonNbJ3xdggAz2E7fDk95BJ5ejuPbGbFUej6k6wX2HKyyB4hVRnmReY5zeN4YR",
  "key17": "3hBzr4FVTausYUo25pkrWVQXPmaFtgZ25uMJiai9xTJmpNX5y7L9bwLDMeu5ptq3cfzixutNEQbRzEh7VS6iZ5XA",
  "key18": "5yFzWueybkRs3wk2DXC23R4q7pi6GxiKPS1hTDgrwyiqLk5zdM5iU2CWg2ML64mhqfpboWfxQ5273KGVWNvXmWJR",
  "key19": "3ozYKNmgUUoX3m2XT6Ud7LzUsu34vuktEegLTrLw1nCXbcPjqEF7fxgwg7sNvAEmagv8MbJVnQfugt4EFfXRZg6e",
  "key20": "yJpX8xFQBMsQcGDcHtjcA6SPbwrcZ91SNdGREvQ5BZZhUmf91MWtxA3BYduVT7eFAiC1TgMuyfubo2tgsrYQC8h",
  "key21": "mmXz5F2VoT8TiWbCrS36yrbKPb3fGB7Rugic7DTgA5LFMSsRqTqMbYeSdoHDWpCEGuiEgacqHpQWC9Gpdugsj7U",
  "key22": "2Mtv9pPbYYRJcTkxUCANZSKUaRh8ASk49SMrLbb1CTZRdfMZWFnd7JNzZmp8dn54s8EPFtvLwWrJXERroSBi2uFG",
  "key23": "YhYCsLaVczYzC5YZmPZS3Jn6ncyzsQLvhkEHWEAQdZt5MWu5Vx9j19FqwNpZVzqXurGh2jHAewp2FMXRrYbPNkn",
  "key24": "4aGLBDp1RdqWVapfTepw2jaUeJD6cTRGXHx15hjVi7oj5nGz6AwU9AtiGVKPWQ1gMupNpaE4xprCP3uvRMzFWZTX",
  "key25": "5dc7m4VGvEX3egWmZPVWAmAoT98wbDJy5muKcWHa2tKwLv6UNc8mMHxzdTV4iAHmi3i1RzXvTsB36iEEhQifbhQu",
  "key26": "WmDUmK1cpA4FmngsfLXGoPSLnK61xeTzWqMzHz6LoxkYcFjWdUiMB9rQNGsCNpDyN9HUB3Q3ZUbq51Cm3C31zrt",
  "key27": "5nsn9ntE6kryme6FxSwWPFXM2BSLErjUMU21o9fUALe24C1TRxt8c5ogeyWQUmPxSRbJrEGtoGF762c2UBjAksmb",
  "key28": "j3viC5cJbXuFTZVv55JGuCKRRUGhUemyKpC5XUWysUSpc8xp7TjLktNwXoUWYZYUyNQ8dit4jiT2rPeDXVsTtaW",
  "key29": "DRPUEuXg8DjbNRDdJiSyTajBdFW81T6bDHUE7wCEPfLyPz29KbvEAy6EdpPKMsGqc1PbTxjmYLmtfEBz7Us96je",
  "key30": "42dT8YD5r8Z6D3thrrG6fEMuihP1AZQwa9jbnG4ZPXr3tBHTWQNNreVXZLcXctZzGGqv339BVhK3CZoRMMLXCZa1",
  "key31": "5A8wLvnLoL7A42HvAqfZ4pmB17CUodMr31ZvDvEnrmjrLFe13ZE4aVG4C1y1GCy2V7jcsZVJcVttiZ5q53vynspJ",
  "key32": "2iJjtCFbVhAe8S5aKxkrehVDDF4nLjaE393FwfbjnPqw2e1wvP6WVknHBimq9Jj2pEA1uFt8pBb1tfHVj5fDnJSa"
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
