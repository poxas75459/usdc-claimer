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
    "2dXHy6t3ww1yZ9Beu1JtiE9MeKSbb7Urj3G7HvqGaQFT47UKerEBHmgHGxnRqDNtyh7RBcVVB3F4aZoCUy7GNUWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wFXtLFf2FmCNsXYWBoPTpcD4iz7GEWzKzb5D4rFEsG6dBGinz6Wq67wMegmXacWUPW4s1bsTTVy3NvHWCbJ71Yc",
  "key1": "49LPGQcqTZM7kJ3wRpCtQ2cHoQ49eSRS6KuJ78BrV4AL9tTJNc2UnbHHpgvg9jvySVKuvtVHZYnmi3Z7sUWz32ds",
  "key2": "5knGS8uTcPWgnAChqB3foRdBDeUER6xZuh1tm224PrFdKqsvGzPUh9zncCgF1rSui68uA8LMo5tKy6gfe6Y82h8s",
  "key3": "5397AoQLPGMXGvPYgxafguo6VGj6h5qqhz7eH3F77PUatNdR31BKkMFqwEYq92mPhsNzCsZEpHHsgfkJxWeeJ8HY",
  "key4": "2z1QALrmzBcnrL2tiiJTRs1vw96peQJz1cRF5jz5qUcJg8DCRh1Yd5VP1wi2rn2bvZX6FLMaHTb7iR4f9iEiULXb",
  "key5": "4n48fVHe2bmLfWHG63pFQJXTfU6q21GnHNvkHPVKYQQTm1eFJszmbztkTM8sxofiBcYnsZJxzTV74LfD1uEBtx7x",
  "key6": "5uur3BgQinAyG1FngBimhaqFkFPXyrsswF4d4BCnfGMQ3wor5HsXFmnHfThcYH3GvEyaabto8mVqdUcG4X7ipA1h",
  "key7": "hSy8JjKJRv58j9Af7R4hMsHDqh7BiFeXEovVy9pRYwhF73HVcj6hrTqwBebnc8u2j1Nf6RSzDEYHf76Zf5vzorJ",
  "key8": "2gce8AvXiGp1eovsEnz8TUsUqm8dtfcTECvtYqDMKmdUtMEWXWWq2AqQb7xtVSTo7AMASeQnAMXMg3ax7zSjbSp4",
  "key9": "5WxGcLMDc1bJW2P9uXhXByzUihMDkZEEU6KndjXLB3btiB43FN1vepdS7LRnSwR9MZFP2Aya9ax4xbfz2moSzb1a",
  "key10": "3Kn34R8sL43kTtUE6xRBt5rioJCDMPqHwgsfhkcoGQcZZNeQerc3AUQD6rvha2M3T95s3b485E37xbywuB1v2mX1",
  "key11": "hK4tvaXv4MwwupvHRNbYsZ2Xg1DxezuTrah9iHhYw9M1GkDKbi5HMMeV4MddR42XpPYhWp6JNMd3Ytd9HQMuJuR",
  "key12": "2PfEGoku43kWTRXgXH1TrDkBg38kxk34iSoDLDVhL4PuE89TSsdp5e9qHVxv7rjRXagecxXQK2fPYSp9KR5NQ8SF",
  "key13": "pUS729hEhEjArZEnsUaKpcoKESC8n3YwvyxAkkVFizSPbN5n3WLeGwFLiAhJYhPPEXGnTtCEZUEqnqUfcyd3trh",
  "key14": "4mEcCzLDbAHMstycuYUEqiXUQVfijeaqdjnnudXH1JQJgAE21YKs2QLA6jnHKW5xD1oCmkhGNRK74Cg86rHM6hZi",
  "key15": "DKSkkc1aG9cFwf1j8ssh7Gf15P69AYNsQhpqgj6F6gp3uvBrb1HLV6dQdYFDsooEbpRNW6Hd81vLCEuBiaLJ7ZD",
  "key16": "5vWVkaTCDFXLw6vo6G5niPhMrhhaF9gBt3LjXbxZKWWgEcRGHwfJCMgx6ZvfahjaWDj8SrQJXdf3dWSWwQGRU11v",
  "key17": "5irT4HRycgA3QYfgYnmCyWVKv1ozdtU4Je7nz72e4VGPybmR7tNYqXrzrphTBeQ7yXdqKFcuxQkbHbJp9Jeeqrq1",
  "key18": "ZSqgTrykqi76ejVVuCFT8J3sVYKrKrAnhkXvvh7fQStYE16w7trA3hSSpSMj3xrHvqub2ReXHCdyA4Ws4xwXTdM",
  "key19": "5MT6uou9DxrAqMLwV3Ts4ZVK14tBY5AHqu9cPFfH2ijkjUEnfQ28idoGHTjiiyUWX6RrCW1wqwuf3DpaGYFvwYgg",
  "key20": "2FCrHkinNTahsYRYd9WWcB9BzjTw4rJunhCxoRqTybfNodoaw7EuTWA9wNuQT6ybn3QsSdFW3aytF3Z38cLvMPyo",
  "key21": "5r1xGZCVP7nLCrbS2xoeSmGyAeXaPXxwZg7WELfdEfQaBzgvuFDQRukV3SKLvvTVh8ocEHjiZrB9ABNxB8J9HhaG",
  "key22": "3FMN2jmjKMZV3T1CdY5dmcecjVDx1r27WAMQ8cKnaoDxun2tczr5BvhkRkX2x31PEfoMo4yGFrc6njoRGC9txPUj",
  "key23": "5E763qTFN78uHjk3poVrR6MpCdM5kKpbQFaoAyhYF8UmwYwMyLKWDAKvx6RKQka4bL9wvKRk51UtiNQJMEd15T2d",
  "key24": "4RnkbU6UANFd2ay1xFKoP23AQUg9uEFzQCrH8XUs63ptohCQx5DLuPHwFVeJYXfAftXWid3X86aE658En5YjdWvo",
  "key25": "1dmWncbSuaQogpesAax1KovG6GQZNmC8TYorxPsQMWJEzcetLdWXT3bqzvebgNhyrgLyzfaA154ETrPFYXmhLPq",
  "key26": "61iHo9kwDGXz4xe77NGrmcBgoHTCD2sgL81WdCSrYUDvTQ2YcQ8k8y2X34sZjWoK6BFHRnwE31RbvRAjUVwVXRVx",
  "key27": "fpQYsQsmmAndZHNuL13KNV3vCEHRWuiEYUcZ12BXyW7ttcyDA9BgnBCxfR4ewRiyp2PBjbZHdFAe4waZBRJFgD7",
  "key28": "qZ3eU7rY9HX3aN24wAFLcuLWH5uCE2AK4YP69tUWTmnMz8PUj8vZ7n1fed41peCLeyQnXnaPx4UcY7bUX3gDA1P",
  "key29": "3LAtFcHve95cF3N2kPwhMGjzHBZMWSJeFpXW9gxBoabHLkegUfH485GibsE77DSbfg7JtipdiV4aewNzyeBmoXJR",
  "key30": "4Md3a3dahq3MjzvfMN4qtGBogmo9hjtePLVm8MsZTF9sYRHbn194RpoBt8em5L2UaFmyzbUVJKLehLfcV7SVgNVw",
  "key31": "2biA26Zat6kJDvp1NgptYAry1Z8oYnqWapKNj2N1rfRtxXRJi2cp16HBB8TJJ3GqjyWGxnkwnT8E1VRPctten2PT",
  "key32": "58MaxUjXxftfMF3Va27Dn77SyCVeZeEFv8fuSjeoNmLTgMWxcDNfsFiPRJSYwBTSWqdep2o8sfK7JKsixB1GrXCw",
  "key33": "5qyyhBUiB7KLbLeScNTmQbvunYzijoaNnZrup1c8winYbuHgcDZgiXn3sVkfR8Vig3mVNXjxtt8PerGuE4baZcpB",
  "key34": "5Hvuvrh6PR7iBC6S5AEDxUDWdd8GXrRePy1HbmM6ir2EM3fRahbkbdBJSHjusvPHPrJsTAV16oo3fkVR1VuAAksu",
  "key35": "LDNpDsSrkzahp22HW5h7Bynq39Bow5YdB9CrVwxer2moPSxEwpCJSbo6fBEBzJPTkN9dEWoddS2ohurdv4DAADy",
  "key36": "4hjhXHrNo1xiCvBsPbFCEcwxdi6ngCWP1MTcXy8tGWVVcm8r2cYHPZZXzFYEfvFUS1Br5bPUkxKQaN1Tg7oUCpE"
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
