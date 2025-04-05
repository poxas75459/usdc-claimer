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
    "4hwvQRnhxghaoRouNf4CtgUgPLbioZcvqXZBshmN37iCfLQgEXhDSwniZ3eKTgmzoUgpB41JQJzJjK1KHyPE9Kvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vfgu8CiE8mgEdGqP48dfLoeDo9FrazUR6oFg9krdfQZM4hqooWgYJeiwhDqWKZCFYWTTkDEYkQdbdmxgnXT77Wr",
  "key1": "w42GmnhTnLs9DAM3qTSjgKcExf4JwuR3NjY8dNk3NHkCTje8PwL5C4sRVMs7L3KN6UbmhsEYjapizStcQXuowAw",
  "key2": "PCKEiEbZkMwoVcCq1AwfyY4b5eNXXgCrgiSVCka5ExDBKV3MJiXmgxk769mrvXHkYj7YAAtYLdiGvuY6nRmBiXo",
  "key3": "23egbTywDncuJhxKe3RwJxcemydrHLCag7njdau9feAff18B55XywpQvesNZ6eXmTkJkyFTdkuRyFY91VoSTPtPy",
  "key4": "3ETr1f3qLp5p3XVteo9Mq4BNswTdP5WiBTiYBtco3fo3XtTYHrQNS5ENsJVQUdVvKkhAcJnCkkUgZYrytXurgTm7",
  "key5": "BytQeLZweiHnBnBkuhnEnK3fnohRC25T84g4VaQo2c3fecAzMbaDWQRvdC78Jpjpxh14zVafnYoDUFQTY4nTang",
  "key6": "2oDUtMSrLGPyECZXZcBaL98dq4vMBJ7FP3tMzoxNdcGmmLju8QhGWoKmd3eebwGK2tjURvpGAQhDWLPtLDR8eS6B",
  "key7": "26RHAPipU6qqcjPx7h3qZbtRDG8apzAGzPVCseGJVK9whwUs7grf6T2jCBTbV9HzXeYUwQDjq9GSYCgryeqcjzCc",
  "key8": "5c3BxhhHvCP97QnwXc1eJvLYpZaxhP1JxHR3PxQeGNfYttKkXKHN7WY4TYPcwjrWnmkM3a7Qwv9abikdWymsXkGD",
  "key9": "5Fyu6g39q2Kf1DPSRJUBPiSZkTnGUMkxU9BJ3suWUuebPWWbCmySmr7MnmH6JJ2MBsbJXKBKWgYsydV1tCpjmXGi",
  "key10": "2ivjt93kCqqvnyCmVFLGue43EYSPhqzLiP1WmBByM9VUH98h8Sf7QfxBTeqxgnBLkfauZjdY6RCb6XbprYKoxL5U",
  "key11": "4gtRZRanpBBJKNWr5vNX575yLbWJ4jbmEPf3278q6eMrEY6rqnfiFCmPSdzZtTJF6zAbKRrCuWoz1qfSVfyV97zx",
  "key12": "3HxMUK9tomZ5qCoJtky9RU4QV1zBMxzpNa28x4CNFekotDnuJCX4LUMR3vcF1sKGZwdJVyTHGeXE5sfPjFVNekrD",
  "key13": "5yiyagjphhqE7hGDtiCJqiDXPNFTNWayTnzFfqcmfvsPYQEf79EeoqX6TjZYWAfUEZsW1iYPXntC4eypPJL4DzU5",
  "key14": "242uAbtCX6pzVJb8TkH1wKPNReNHZFqaQZdfVLjiMDEVunxqSSm8jXXEJUbo1DYspPCradvjYZskBHB2gKp2UnhC",
  "key15": "3yuYL5Qz4dZAiq9uGtmTfW6qauVWUkMCAQSvC1NEQ1dQwhCvm4PKr8zcYjAakvgpBLzQPxN9jiTUcNoTPHfEq9k5",
  "key16": "2jXXjYxgRrirfyQab9TyxjefiQCTMR458nKfX76XAiBiVbuFyWZ9VDBKUTDfVeLEoPwZJqTjqqWxXxLE7T2p8Aq5",
  "key17": "GfFMUAsbw9FxQ5cPv7MBoCeH2Yv92XNdmZgW3wxhWL1bEdBZSst3JzPZwq6zCcebcFx4jqfFir615XjLCnAxaLN",
  "key18": "3FbWnY79e1cuEcaHjLLazkSqxcyNen99URsdoWeMXJ36T1dj2kyR1A9TwRTCB548GprruTy5ygEX8vz8Wy2t6kmq",
  "key19": "eV2jgU534Li6XjjxBqgxYnkJ8YNgaLcRjyA3T3sEXCkaJKMy7gnt9gLCX391nvxbaBfDKuKQVqo71dXxiUD1tFv",
  "key20": "WFUjZcbm1YJTE1V7qr3jkvh8JtZj7iRHSiZrRYZrrNKQJ2Ttcp6Pfnga18MzPcBUjj5663ba7yvQbYkJUMLwT3S",
  "key21": "4dqiKCCWEHMFTU3e2LNWg7j83WhV349uZLQPsjRTNoh8kMeJHXbrcSRriLSmPsuGqq5nt2kaapDzKit11Lur6oYB",
  "key22": "3rxJ1sKYNKPs4KMExeiyNTw2LSzoTUmCqRWkX9FR3swSeA35opwro5MtGufMA72q4cubNMCEfVJyaysz5taJQsMf",
  "key23": "33QarLuQuxsd31VHxp66jjsTWApGuvQWNYDzRGCmCHzxXmBie6DQtKamuFkw4hd6vj7DtUmKCN3ytHarSP4NiA14",
  "key24": "2TaSRzx4d5fnp7GS6ABuSpHCALqNP4KoWSSbiDz7ygvqXMAuPMFre95LZPMPQayAZr8GJRVLnwFG9btP2c34sEHG",
  "key25": "5B3Mu7Jj5f9QDjqwoso77mSbfeoumLUectjSMizaMs75wf8kCmbYWNuTSrSH9YK6KKVBz7Q1oQxVDxep86kBU7L",
  "key26": "3yBWGiEpMGQ4cRZpsdyn6BwMJPU7qw36wb9Rfma8L2aLceKca8uu5Na3S2j3GAuMQWuxpkEBXUeSghsSkjD759aE",
  "key27": "qNwnFN4o5HrhMFnwQFhmaL5HF7r5Fh3UwxgS1psdrvN16TSCPbBjjL9jGNVt1fLVciJKSKPv943oP6RhFa8DmwS",
  "key28": "5wZBoXMrduC7k1hdUF5JLXwQ8H8Z8f5RipeJJ4FFu4DvnveJ6HbADrz4yfgdckbUYjoRPTxa9Et1GYwWDWcrJ8j9",
  "key29": "4oJ7k9Bw1rWkDFtxQGqNKAoDv3KaDdBDbMLtqHrkM6MEPmuDsVR6WYEtu5WsAVA3GvWxBrKvcTFah5EYz2mBGJpp",
  "key30": "2steZnkFpu4Dms76KschPaCPjEJ96bXvo8msGbERXeVg2prcXxio1G96ZecjEmCDiUVV8Jd9LudLbshm6FUFRBLN",
  "key31": "388K9QWxq9SGHeTmSjAuDapufY99JkaaeRFbhs353gakSaBXCstiW3a2wPBijH64zBexCP1af124TegLhgBrwiin",
  "key32": "4pyHN1ucKBds7jEbTFk5Zsz7aP2ey2DppTeq3gWRhQGAdBRRudRpj9UpJCVKJjDXgiwxzrCddCkatyCEbBnksj1d",
  "key33": "5Tj9fz2BzCqUEBwb4Nn8hJB7A6mXesqBwUCmfo22qN6rejjC5NS618EM8FWiRMtC4AMizqXRgxuXorhYQhCtSV2D",
  "key34": "5DXvuBzg3eadT1hez9fbuojCSsyaqwKz6DidNUXortdrd2gnwua5HqErY4aG5x2grbeDQNry8QGUCe3bEc9L5ovT",
  "key35": "2G4Qjx2qWwLbhY7VF6EDUi9hQb73GNAYyMsHDZAXq6ahwWPww12tqQjT2w5RZ4WXkpJGV63nYYJTbzHwTdsYLJSG",
  "key36": "uFCHNtYWM1e85jMc2qt9p5BXeTtjdFSVP8QAPCBqyLPsnc59bBmBHANKpmKk3nZ4qYMVFuaWiCEXXoFUqkogBq9",
  "key37": "4sAoHgYHejx8bCtoepe5Px7qSRaj1CaZTyrspFPm2t3gAFGwtQvC88uQSKG89ECteCJCASMsuGuwm2egGmNGKwtp",
  "key38": "52Srn8HxixguekDesqN72U9uVMUnGeMMvzxYPD4uwev788LT9fN8HTza1FnTj4ygBnzGtCUNNHx31xxanFbg43zj"
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
