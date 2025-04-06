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
    "sN2AUhK3Rn2s2TqWStJhv6fjFGPnbmC2nQkmPqVgrAnAUdXqraACwf397gLysfH4TSZ889eBVf75SMP1ysZ31Na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WLwFEgsHcRvGgJwfQPWN6tm79Kwxt9hoK2zbQvEPQqRJrkSypA8B2fXdGUjhyWsMigYd9nKgAcEhRZ8Uyj3DDgD",
  "key1": "63WP5o6bryYgbfdp2XV3LJE6ndj3NpgLwwHVZ6JYSLz3FuFBqMGkjMnCbAAtTS52w1hXMiZy7vxRCtbpmqncywXu",
  "key2": "3gdTdN9sRbx5XFNSUQtUVmR7rPBxG3QBHYe5EGsA5GuRprxMr1yeAvw2bFHKZkGGn4qHU12wtdQdJGWWxkd8tkxn",
  "key3": "32bircf7NpJ8zhoVqBhwLvYWV7XbBFsvc84b3Bj2B3hPowecRU2MXVMK1nMjSap1sSmTc7Pk5XkS5zzMPGrRdKQj",
  "key4": "2N29ix7xfDoNH3hVRqbLc7SNtV2xWVyvmvBKUJHKXCsWttmc3JSJMkEpEMKv8viLvFe7RevuvSaRQoPyTaGpc5Gj",
  "key5": "3svkSJaCVUKW2YHKSrbUWfcpGmYzTsuWDujhUPuDwUMxgdpfui7DaoihHzvTixRvDYkix7tW1paggLJbpZye7Mmv",
  "key6": "bWRzbeWYcmnJTvnBmuFgKVMKVwxYisvgFs2iykSRtGBCJrWqH2ZwVS8uaZ9y9GsYt1on77SnJj5mH55ehagmxd1",
  "key7": "3cCA5EzV7Crcb9qZq8cG1oSFXNcxojVcD1V3GcNonMC74dXTVCXcdhiJrqZj3offQa4PrBUoVygzvX19ucpnEmey",
  "key8": "58C6n8EAHJ98ksym6NaLswrYTax36XCmRhmxkjbA8ap122NiEa2wMZ6ixck7T3uB3wH9Wpb7kVqRr1PQNurJ89uR",
  "key9": "2o65S6RA9bxdPPmwELSmKx2C1RExPBJMkWDWqPjD76KkH2kzc28ZjGxBkQtHVWwxxBQ1wFCHbDSW3bhbQvx1727B",
  "key10": "3LfYaJHL8fhiysFKNq4SezWZ8ntdd1xMEuo45eRSMEhHyrLmPMWhZjBaBNSYV4jjfuv3iUvNytpL2qtYN55VqqdX",
  "key11": "3wemqunZzvJnUvsjYyYgWW57VdxjcXkfB32tyFQPsDTN9yDzKoW374RGM6SX9sxwzbg4AoBRnYRMGfhdkHMPzCBH",
  "key12": "5Pa3xgStivxoFW8U1kqF8WmWH16zrhP3CcHFNDmKuarBr9Rwqcas7jr5qDx7yv4fJYRuJN6rhdCTvG5hiHpTMgZy",
  "key13": "2Rcy85rAqMpoH1zUhtDCkFkjrAeQ1c33daFcT63sw1Q3FQr67xiRWorbYHHEebXMgeWdjSKjmWjETRDnNFq4tNnd",
  "key14": "6PnxhGyg4L7hRCUxtKRkkgRa1HkTTC6G39FgPn5aR12DMoemgRHkbxqxKzJucxXXcY2NpPopAtYnSJSbfvz7iiL",
  "key15": "3T3rhpirxAkUUD7oS9LcU6VrxtmWps5KUsRkWhNZGD5PHc7Gt6aF14zUkoUGD2MBZ1nVHaj7f6RrK6ie3UaWRqjM",
  "key16": "3nLMti1xfpftakdnxLpkXyEWMj2dGBf7od6S7Lj9PSfC3VKW4FLbEf6Y4FTGMWAWmvTXYMJPxkDsarqoKwXCUrbU",
  "key17": "2xXnL2dt2Hkh4TF75NHTFMLcqfexseG9rfg2rePiJoGRiXrDfDRiu4qTH71gbgtmY9zS5f37aQhhVxSubpUEnfFH",
  "key18": "4ZEAEe1tv1bnGsfGti3UuQub9BqXJdUJFV5Xw6vzxaEsFgmdjfRCnE2mg8Zvg1SBbujwqTpNiZVRApBUMFvyRA5n",
  "key19": "436sNp249KJRGTZL4nd2z4V1F3xYtMzzLi9syaNKM4ZnzAbo46z2VUrLEjWwTddZUn7mW1WC1biyor2pc4tG8o3",
  "key20": "2g16az3MSNC83am5zVomd5f7uSbBrVQmEFDFwMevQbZNtYzwxaaVnTJSb1Ukmoidpfee7KziuZVYrvkESWKZR5sb",
  "key21": "4KtKjpQRyJ1KfqzME9fbQQY1tyrcLwoaQRHUGJ65CagCcmHiUVCxEb3HQRsQia5F2X8zLTYMNDV5fBT1naTjrTpz",
  "key22": "QxGCexB1vdEKawpVLw9S2UxYcUxiJKw5y8TGReHPdezLimKQ61wNGY7yBopWRoDQLgdTjnHJrjKCuKFhbKNkJEr",
  "key23": "5vA6YoHdDxDUtYUXCz4uEWJtjrc8FYPZZ8XqfHR53hfmwH4UzhL9XBHGbw557D4vBBK2eBw7T94dwnw99vx1Whge",
  "key24": "5NstJJjbozM2S81AAyo4LVL5eg59H8AMfkthqPC6k8g49PTGUXXEtgBxQ24dKmdWMgwthV2rFUXScq9kqX5fjNni",
  "key25": "4FDp19tL7SCAMY9aNY5wntNGzfEZp8YQhY9iFWuepTkaCrsGyJJMHDuHfBuha1ADfwwj5DKZL5SxfvEirG6n9Qtr",
  "key26": "21FnJTeGWxpYpjL8GhNbWvAyzohN2qEjGv2Yd5Zg4PcYMsWgb6rTwQhFsceuAiqYRPpAGr1QAxc9JzesFfHi3Q6h",
  "key27": "5zFJicxVNHtX9ri6vK34UAwX5tipDTbYYHkW4PDLxRVLntRZTNW9zUEEqFAM8tf5chJBjA6wzm1xxd5yvFMsg32o",
  "key28": "4DtUNyStJbHricYoZt1y82QdEdbZZUCK13ejArtCpFeNG5aLSkGKhzXtDjdEF4VRrijCkw6spaJiMirYY6owF6jq",
  "key29": "4k5Tz5tNeKjgEAWrrBEszvtmaZsC3Zc2DFFfXF13VFmMsogY56u7zCWftxp8sGimW9Y9c5kYDzyPKcCBqapn4whi",
  "key30": "Y7UtCUdAQ9UJuyQveENXyYzpTpw8syH9RQB5MwMnfRhvLpiPx1GMnJzdmcRHwNug6TaV2TPeWgHsPBXCeWc6i1R",
  "key31": "4Mmcmk5JDnYLn6yWQGd3GHgtrWpZwrhyQi5xP3sV4rx2kVJ4izqptezcAvWuvZMEYUuxvBn38aPN82DEHtygy2bF",
  "key32": "3NGAGxhAqSzdFkGvkBHmaqm4DoaLS62A1XpUMjKNqEojHPMcaL9av4v4bZoV8t48VQbSaS29yHErAf5ySoBpWr3v",
  "key33": "2NobhuRuL9YLa2egUMfEMsYS9s2WZkPeCFy7w3MUHv2kUbVH2zMSYC1BVL4TiBhuLAp6taFD4YXLCYyBnwL1fxEX",
  "key34": "24LL8nSwpEmsLCChoC5Gy2GQPVfyLKGJA4bt3MmTduURNNtgsYGVQS6W1FbtyAS3dAT5L3i9pT8F8ERubVELDNYg",
  "key35": "2ouazmWPoLdQ6YdmP6LtLNv6eFNER8bTZEWNMKaN7Trmxbc8NBqALb8LEiTac2e2odBXbrHeWobWsYMpbm7bgB2N"
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
