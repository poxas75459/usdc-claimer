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
    "293tHMn1VFxMxmw7gEoT8qmD9FarYsQh4JzcsuG2Xxm7WLosWBed3RbQgr8ykXu9BaHviRdCcVQjwFFfbG7j6Uns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NRcpuL2C4VvU8oQT3GJ8YnX1UTrcvwDtn9E6jkY8PKMDe16nVc2Ksva4YtaQj9PBteNRFQxTuBKjVKNnugSnXeA",
  "key1": "12AAS2CgEhj1ahZe3VLZeyPn3u9Fc2CkN8sxMdedjyxowXkgBfnqy5aBMQcVaBQSSnGVasDH36vWsJvLYYGfy6R9",
  "key2": "526rkH8TkW2hS55T3w5vtxeGAqo6ipY9m59DjuEJG39Ug5rkdu98rziatXNpwFJvzWX1JFa534BA1TvMaAc2HmMM",
  "key3": "XcLSpefh74R5MRTD3UiWMEYSQmCQmbWiSvpYYpRdvDjJYH3LrbWgCVABYsexWCvmoYPkqx61BpmdWncKyBQ7QhW",
  "key4": "4k7gAqiesy9M8PJXBzeqoJgsePabuyAhv51Pj5HSDawZ48Ku5d5JEJjuNzxtLhYPASAvgCytTFC4Arb6XGPejBoE",
  "key5": "3jQ386kFpRLKFUvjUA72Zu8fDjdHcKcpxRTDQ21vvSHmeYc9viBkMhvNNkkoaFUG8KHNM4Qddftt1m3aRhCJXzJy",
  "key6": "4Xb4CLYG5JAvZ7xrbHq45H5K3Bi5nnj1y4BhSWKiYkA1fbpwqTBmj6RymZhTkbw5tY2MVrEfkSPGyDPMm6A9tLVS",
  "key7": "5Qf8BMkMZuNcRfYh8vTJtLDTeQs8t5eKdXWdBGwebE9GE3jBo1W2KduoJ7qA5P6e7G6trzzbyHq3Q8Ddwg5qUABV",
  "key8": "4dCUF3KJo1zqzYvGFsaT8b2juyZWf9QLL9KjD4AYdvX6iqMF73v7NqwEasBzz7gKdWZ6yQwMUpaDuMgrZjQ7uQ2B",
  "key9": "bsxb6PQx4VNBUtz5vANg1cq5oJj1g4Xp4hrqTwZZG1WM9fLS2ptNeT9cwbGN1vW6s6KTx7HBNNeZMpB4o263cuX",
  "key10": "3Z1yzhWhvW2M7YK9XRXe1xihpfhsFJ2beCZtdsXms34mSNoTV2UtLcFgcTVHnMZoMyNVZ1EZHi93qHQEqLjgaeT8",
  "key11": "52XrNmegUzJhcHu6uSM9CaqH4FXe3nXKJJT6YJkU3gEuUJiPsSv7WNPZJD36MN7ZTgCNSk68oUiWuBSApinbgu5x",
  "key12": "pBsq7sygEboYksbMdKm9vnarqVRuSbidFzXnQo5r9H23edMUTnJQvF7D2UvkkRLvJptqeJhnCkEArkDf7Z6HXsW",
  "key13": "2DAiWsuRtWTa3EfaoizxD4ommNYbmYLPvvffVMahJr4sqsACw8RVFXPEYaX6qBZqSNGT7T1TS8DA6wae8Q7ZLfS8",
  "key14": "4ELhRVF9GG4gPk2ZQVVJRzCux3KKhr55GWcj7GofdKC4FEZfAFMxYCLky7fFkea4vjjS4rVAfxwxZ11zg1iAg5C4",
  "key15": "2xmLX9QNphAtjXFSF6bnuM2rYe2s95jBVnTmMuyo4w9WzDLp9RN2Yg13KxLivvaRR1xMPpvTMnr6ipH2mEsH9RWN",
  "key16": "3osdnZhSzgdPECndEfbVbNuRD1oKUctnegpjYWEVFJ4mMLm1x6QV4mtjqnaQBuaqA33XYjb51pDQN2KwwTSu4v9k",
  "key17": "5LAd1Dnvq9bxyPVsY4qzciF7hHwqc2Z2hKEfDxkNPG8YeUokaBznygkodveyAz6XWFjCHMpVwuBcC8qe2GLsnkdu",
  "key18": "4gDhnfYecCoZa9oFRLuvhz5dYsCxQoXFUTpyhU3dMu5s7rp6KvbVpfaHbfm7yLjXScnL4cT84uq8CXQTqzUHqpbV",
  "key19": "WzgQrLyMUzYXLXUEeeVHhVjpe55gqfeqJdzApv1dXhDK1myRSirUZKb9QaJqyX1i9FxFxyseKey7eE6pkWjC7xE",
  "key20": "2rtsNNfq3s1Mi263M6sbhEvCK2kb9jReuGJTAosVXeriGEh3F9CBsJ8fvqXJWdpxAJuDTaY4Scrdd5GhGQZY5bPB",
  "key21": "3NmRj22Tg6LNJykWXcPDcgALyLRDTgWdCCXZq6c8BKWFSaUf5CbCLEbGuM1KFxrugHmKMoQxunyB5n9RDmpiejtP",
  "key22": "5dvweEZDAQqjUdAVsQ98RGbTT8HJtGv11QMi3WxM2kEXDPibT1rcskDuyTq21DNns8EejRsxs28U3GU85di1dLWT",
  "key23": "2HN3pkTo2zdqtV2PdXWGXojHQpnWLSzp1bUBFscHHk5h9usvGNo23K9Uxu8NAWGN7oS3x73NiPwU7VahmxA19yUY",
  "key24": "VimmrjMyXbz7niU4LJWBYr4jqUUSrP8Q8VaGoQrNzmwWPMM6hdPckQkLrYnTWHLJTreqDxTViSvx27y3CL5XXf8",
  "key25": "4gHULn2PVEmQMXFELfgeYgXmPZxxE3mRkUhkcGWnAaeYMAz4UPq83WZL3sJWjD5uameh5U9ed99kVSGsqkrg8RC7",
  "key26": "2Q2J7FxMsyF4XkJQ4Tj6iVWa946NCq2kyozyNXj2jS1HEesWxEwx3V2RSGcQKXwrPB7UmbG1aa18Ksz2B9PXHZH3",
  "key27": "gTjpZHE36SvD4hpRvqRBnECyFXifWyq53HV7AhPkzJn66cBkpseFM5vnzhqsQKowXG45bxooogbZYu1iPuoUR2A",
  "key28": "57HS389cMoVjBKD8BWZkHG4UKi3bu1gAjvo4eqUBxezk4WpacyoNPaE42q9y48WtDrueEdYV6URQEahWEjSQzE8D",
  "key29": "4aMZLqduW11GRbwSSQcSeCQ8f4MyvjXK53Y68ez7gL3aaB3CS4tuWmCCBeA7uyAHjrviNV13EHZBxaWnSreiKwjU",
  "key30": "FnECDsPcjtakNfPwDsZedjzqmLjNLgz2FuvsuCE23XTaLwHsB98qe9Bamm8zjqZV6ewmM6C9f9wHt1uZa59ria2",
  "key31": "3FHSRGLiKuaRiJRRa4fCf95X4BCUxXHTATfuVFHhRWgVRQ8WJysfqcLhAbNxfwuN31RTqzL7tAyqV6UcENJbHKRa",
  "key32": "5ytNFkkWHC2DPEH9RWoaYo76EWWGC2t8MQ3HqJS3AjCNaqGubHwuaengGSBjAtj9Cjvu13QXkKrSEgAQf4vPGfEo",
  "key33": "29XgfABAJHTzNGTJqzgXumsXGv3EShNWcC39wRizySV6MEPLYbX7NjWBX3B4jdEX1VbdCuhw5zvNMDQyN4td2sNk",
  "key34": "4AcW9v2uqku86Z9QrqJCL8Lwo3JmM9pGvKVGdVQCcDtsYGLvNQeFB9TVhkKSyyU35sspBiKNRt3kykSLPyHuMmiy",
  "key35": "3RviUiJxeFYQtGz5GSEiBG7FezdPXgAr4R6Mzkb4d6GMsQ84Wk94qGvidiadBEkcgiqsp9VRGDd791FVsneHRWDz",
  "key36": "5Fz837GHDqE9dr1W4hFiWua3po78pvQvXhbWKRfgGiNUnMj2buzfSUdXegcBXiEm2FkhEB63py8KPsKy4VWJbtZ2",
  "key37": "3r6TNznvLwfHahNkR8aUTjtmD6G386qbDqfCAfXnfd3r6uEiCTSCQcZ6xdkxx1S93EJ2ptSa1vkNBQF6hoFCBFiZ",
  "key38": "26c1kPZhwp4WR56pVD1VzzzXiPxzEX8agi3TkcSmN2WnJhcR8rqCo7C5vRDdwa7b6R5kMUAtCjpVrsiRVa1VoF3r",
  "key39": "33rHViAi7f2q46ojJwQgdGttKXC3A6PmwnG83cyJRzsjKAg5Sk4X8CTmRmBc6NNFmmwtDMpq1qurHx4niNTRtGRA",
  "key40": "7Xv3Ygu3oCPCxAUKEkQD1CUmvMHp44pcHSHS4QgPXFfVu69aVbwuUm2aojMiKyuAzsmE2ZGp1FxXYfT4EcTN1VF",
  "key41": "rz4LwuG5EeAbiuGPrkPs69g9s7s9h1LcTNJjMDtLXYPyuC6nwMY9LsN1cbRsustGku7DRPQrFCA5qUVNgnhBh9n",
  "key42": "NMNJyiGjy9E24TYb2rpQm63wHsAdj6FBWftFUGaoaVKZkHhQstDytjFsmBmiisjBMgjhqthpNJgyaJDx75yanGN",
  "key43": "51fSbLVLoq79pA5w3LnPsZRD3Jpz3F94niky9aqX4bNW9UpRe3N7Fvt2mfGa37t2WR3UN73oBZMi2CYusGhGFM8h",
  "key44": "iawGzpzsbsBPboLY7xdx4s8aDJGTeNnbxEgTP2WaxpFRjMPuzUttoxLTLvp4oqaesLLEtMWi49q7vT5TRXTaRKB",
  "key45": "5KQ1VZVHWX3tgkGApYqEsckGR1iGJ2jf1ek5K15jmgGZVdVSnNovQKciBb3AavZQVcZdMCmYq2xFyJC7k5Y8wxbh",
  "key46": "yoYMSEz4TC87EqSVBRtC9ziYL2Z2AX5r5N16efRcJP4AMLCH6YWoEb2nsLcz1S7rw7bE7CSWJ3FZtewYs3317jM",
  "key47": "3p4fyVE8AeKBsQwjiPvhfKEu115vkMHDswyrk693EThaqiK615oyuTGCnuwQ9xbyVHYgcki4bWZd5rzJ9fnKC4sg",
  "key48": "2cmvPrKdKAvQJmSShsDPkgdERREdeX8JyXb9bmV5AcXGhCW4ziVqE8Byp698RYPEj5XFjA8UMMCbu2bUr6TbBdB9"
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
