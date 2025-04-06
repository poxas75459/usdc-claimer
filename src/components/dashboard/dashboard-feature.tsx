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
    "NYMAojxnGWLKdXAd6frvAi6zKVWEUfWkGdGSpbV5vptPJYXUzwX6cGa28e58cXaU11h7v2qn37qasYubrLkdx8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BozHxavfWD6nJ52d7QJT7zPdGqhNZAW23CHP9oEEK2f7dmBcMhW57uqKCAUgzU5R7gu8TVmvZ8a86L1SUAv1E7C",
  "key1": "4sewUM9qMQyUi7Aq9rFVWZmZXhPpmU7sAEQXqbV4GPWGHTsBN4c7BsS2tkLCyCsjS8rBsHy8x9sEnv11n3tNc1ry",
  "key2": "3fg4JLis2Ft5AKVcDbbTSyAUZoB9PyAxF3Q75AEs8Xd5XeX4Gqn92oZKWTPcfKv8YqgdGCatnc74f7g7PLd697c1",
  "key3": "55VjSnv97EGkCWJ9M5h2TTkVn4nriQTmjMpb7Dm9xY7LHpEGikrYbRXSQb15sniGSM655TnufMakPuZuL8shuqRK",
  "key4": "5z5kRLpE4toVphEND9sooidqNAnCXziQjHsh1ngkTfQNbkpDhQHs2cTaHC8byUvTsDc4uK2SkQ26BXm4ecsQtEj4",
  "key5": "2KENSp11fpLbffe9fvGvgZPzr6xmB5TsWjE3FFALSx3JYZiWRU5u38AyiCNHCGG4DpYxcmbwRtWQdmbSrCFF7gN3",
  "key6": "4r7diBoYeLBuEdFxGinFt5dVSYBg3GM55JiAevbYmk5j2YdXdBix7ZqDeG1NoiAwrA7GxYa7yuw7oDJvGCugewzo",
  "key7": "2nRpyXd4b7J1AibMdXXXbVoD3H4RfYYmq8BF3V4NHPyWJgDMoAJ8Dbqww7hFM4yDus6TJgTPSd41e9MZaXc6fNyW",
  "key8": "24uzXQHAd2imi6uQxGviMvbaUBxUTf8QqZ1gAyvAfQehbNXa8dVUntiA5KkNHLj46ArvD1zJS57jSMPowP7Y2N1m",
  "key9": "Qhnv9jVDUf398BwZEGdkHCiCViv6n5bJD4j4tDWEcSHSVnuYFfktn6H3PNFCoF7w4LGVaFv4cAVXSQWvzAmN2Jq",
  "key10": "5bJUC1gVYRrjZJdcUwJ3eCPbmoKPif2ruzmQDSmH8WhnQFyeYzsRsdeMCkBN55ACgx3mgQUhwhqtA3MtfHkj3S4Q",
  "key11": "62o5McgvkGdpiY1p28RqSq26wsLrioYWLPwf7beWZE2hNo9DsvmcMYc5pfeoJ5oDB2719ot591zg2a38mf2GvSua",
  "key12": "4v88ytTbHiWW3P7A12ZiMUQefgrR62WxQZj4aAVg3MqA79NghhLDoywd1QjFLE1Wxvzeh4CZNPHsnQTrumDLEFoa",
  "key13": "2xCLU4uqSy6gXfJLBZn6jW6D5pymjqhMxFxGuDcY8XVkuiPiSCw39on8jAWoXDdTEASt4Y5B4pXd9FnuBXnkmmaA",
  "key14": "4CwHHuHpUY3zML2fC2v6qrZSamhY1e1f2j8Zud4D5FBFbtbJVZLPot6UCvS1KewDyvBvAJxdvqRpiD9JicgYcRU",
  "key15": "4XdRkhWBeT43VJuwN1gqGStPy1vxXDYtrBgPPSGefb6HVSvKmHm1dC37kno6BCGcDVfskvM8KH7NxkhwUJwdajMw",
  "key16": "5TbpZ6SLn83FzhX2fmG2aD6q4ed56w49xfVyaUMHcJv8P3o7EB2v3idqDFrGUrvqZF7nCPNvWy73cVAyU2JUw1P6",
  "key17": "221PtsksRfTd3PJAkK6repa4xNZ8mGgnuwFZAZruPFAKKe55DY6MspDyNphmLyes6PeMN7xu7LiBJMzWkxe2e4pY",
  "key18": "43LDShuZyTYZTmkRTSLB8MBpHGTM1hQ2SEiwhBxcAtP61Qu2hnaJaVJmJqifHBckyFFZ973xeCwhUztzfKSg4Vps",
  "key19": "M19rdmtjte2vxNXPMKQ5CHJcBxC7kCuLRfkq5SkoXCn4FmTjWND9BhEFnE2WpYn9Q9f2Lv3tS7o6Ftzic7snuJa",
  "key20": "36pMMVRzi6g7D49bRAPxViXs98vjKc6Wm29t3ssdz124VnPhTLFKguEbDvs3mHRi7W6wqwsLxbgJXebYuaogvEKi",
  "key21": "4H2GeKLUyvaepDdgrXGqvD1ZnPLd1F3nCMUy97zLf9PpWdzxW2mazYPCXQEet7ThcH5c6aVEK8jJj6Hqgey8Uqbg",
  "key22": "KzFhCMpEhw95Dih15qQaNDGWVPWwazxVsQ3bkt5Qd9hNxGGnyc9RPBPABdCXZYPSKxm8Q4W5JWpqJUR1fWCiyU6",
  "key23": "2GUCJjfj1BJZW2cFgLfNBgjDRZeApP5phdv3DfiYURRW52qN4VtZifrmdC137cPxAJyQWfZRshKsrKRTKYsEbfuT",
  "key24": "36nHLNCum3oLq4tnjwpBrukzDD3oiK3FE7kpPzr3nHfWeB5e7BVJKvL8g6QeCPfjyJsGzkNhCYPYZPWKxuxuyHmA",
  "key25": "2mi62vF7CFtU58i1BhY74i7pi44PAvN3RwUj4Dwx2sznD81hiRQM4TGFXdK1jzHXotQywZUXiDFiXrGbGrqcz3iF",
  "key26": "3iZitPGcuCpnwxn8UQWHPwfVjgV3FD99BeNkBB76NgwvcAbY5jtsazfGyt1sQk2QxrXh4N9SmRoqvS2c5y2TXWkM",
  "key27": "4i76KFLcz2DxFrxMWsB2vEumBr24T8aXkSC3GfLjz6u8BPn1bQVy3AuraGpD1gZczHhgmBAW8RLcWLCgYoNd3Utu",
  "key28": "65cofjPUrT1mgfZGwMTPZuU6KnDAWBhcg2X5EgYjWNrgJdkZrZNbXke5xTTLuAsZCfe1zCkg3Hk8QeMqZqv5YtTV",
  "key29": "5XkjLfUogGgXnDRa8P2ym9HJALn8vtcKxfVahwE6A3aDbvDbidvdcSBSuYem7ZhVbnhre7YpBGWtCug7EJUs8Fi4",
  "key30": "4x9dajmYGsUXzJM6Xc2Gh9kwdqJk9e97B45ZeSKzitNqLbGEHrsBJkeR4gZCydbWAyemEXGTM2N9dsTRrjpJss4d",
  "key31": "5D6KQ2E4LjQa51YNwSNCmdeZreuL9PA8yVuBU89XtzcYfBtoakS3mybqYhrCJafgMyjd6gHSJKzbRDNPsybzvLht",
  "key32": "xTmvh11V4toDyRRQ5ZZzo5zqQ9g6bGsFF6Q2a53uCd6CZ69LDGDzUo4ve6Q6bdo29WuUob9pauqoM5tP6mG16V2",
  "key33": "5qWYb7CA2mtHAyg5HwVvSvyHcKZsPSY9Y8hnB7sB7GQ8PYPKdyEmHrXRWbNkTaaHjH7hBpFrBdA8DdQm8CEtt3dF",
  "key34": "3p3DJ1t23s8zgyXwD4ckz3cbZNsFkUNgid6C3iX5m75LW91XvMCUMzCHWzUpvErRRBroYjHLKTcJqozV8gaAbbko",
  "key35": "4u5yS7wtqiEiiuvnjGx61UKNWcLWKGjo3GKomrHQH3VDwBYJZCJ8C58PH9KRkWmBF2JgY6ap8eBZ3GJUAfUiLx5R",
  "key36": "YXCM5kH4ysL9NusK4ftSW7x41o125Vg3edTcxAafBTbywmQGQShSvqdxC6zXwc9jC9Wdjk3nktdme8HpmSHQe9u",
  "key37": "bBtqTiTg1yaF1dejzBqFooVxsP3oPFgV7hoRRbte3RkLubtpiLFTrmD3dgZtafXgXACGQq7fZgdcip6h5hRAAtx",
  "key38": "5HH1q4uWojX6Ywja5jdGW88EoeDHh7hfegYiYKY65hqEnBMGsHhdqWjZQLHwdNBHh9KWzv6z8r7LVtqmhj2wTU2P",
  "key39": "5G6dYx8DJp5GzsBMhwcV8cTLtHZuzpDQPe6T8KDpyskzHGxXjv62jUiWGnAaLfpzXPyoXzCJKuV1BYLvyLihC1G7"
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
