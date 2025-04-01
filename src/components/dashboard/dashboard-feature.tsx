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
    "5jDteS35GiutnVPTdRR24yAsFvuTtMeyHnPuTCFpjVwCuyxzSM4MKm8GC1gCv3JYhHRgWm36j4QCD7LTDDGajnq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uYdxwrZxQh1WaukpUNYU8mj42haN6LmFzwCpnYsrG1zGZNqiwSqdZxz93vHB6Z87GbqFXQrPWYxRz6wnsbGnwWu",
  "key1": "25dNtzWnf8wSHhsPmMHDTY69wiq4zRHY96JYTw7CH597y8WNN99tE1hhzjYYPv63uqM2dc5tvyGs3XTcSPVdBFPd",
  "key2": "5uKkb1tb4axMaZjKjV3QhnLkrKPEGBZyWs6E2fTiTHV67AYcNZLMDXk89QNAZghhEXPez6N64G2YyK4Y9vnZiNFh",
  "key3": "2u1HERgNQ89MfAY2EoRxAYMwDcNT41VCbg111gfQSXiTHCYucfXAbfp3gxM42RrQhZK4n2sjDSGrwLxPAGziH4CQ",
  "key4": "5XfN9SBuLHxd9Z5UR7GHZm1WUW5nt2mtLS2Ws5j1BzsPVv1HqZ5CrVWCik4ifXL6AFWdgXi2aoT7TsCWUcwuaYKu",
  "key5": "4yUz6jSUYuh1quWJDeNq3pUK1DFPLxDTMQBFobGki4MxUP1hJ3PJNZyMCWgVofZhSvFZQNz2FxYJZfHUXieAdaXJ",
  "key6": "5o12di4kpFt1C2pgWJf2UrN91HzuWYKa19PBrWUQCAr61FeKHE5pFSx8WWYHRKjiuC2jq8VNCAVyBqSfaiVbQGXN",
  "key7": "3joeAkrQhVQLJLnZc7SQdr1RazrtBBVUdab7KMcprTE7SUcDKDU8nHguHTfDxnBpzZodcNhLYPt5DuzWneMPveVe",
  "key8": "5XSbw8Ssxb3z69WgsSh7EX1JMsQqB1cjRAMvdwMeFZmSsfjqXsQJLeNKtLSqR7fyam5DMxB9L8iRZJqqjtK249GG",
  "key9": "5JBBbwmJSeXEhEVwdxcoq7b97NTnmWwjom8JFXPsoMK4nSd9PyZiGkqS3yQ6Dyu4ZSFVbgLN7QT2Jguca7HhbD2R",
  "key10": "2NMDVgitMhaXU9Brp2wEoweGbu3SaToZJzmAvUG4CqndQVk1mEq81Ry8wAxsdZcZeRYappujbh1rvHdoyr3Geaut",
  "key11": "2Uw3rEsooy9UzKqQCCmHAhPVwANd5PZoL2ZJW6ohoA2Bb14xyGSQcrneUfkNYxH929RbyVy4wseKp65joSfdzvxN",
  "key12": "4F4Tg6hh2zZf1tcf5YAcyc83MMrxN3DLCcHGqbNH6gnVLfCFeLXc1q9jBHQcByJBer2etDLb4PwqGMp9gPpmvzrC",
  "key13": "4VMGMVKHZc4woshhyeFoyyZwVrJ4obdivFdfVHsUvk4JmezJikcT2XrNxqw8CQR5q2qFHcvvJiTCYjZrg78zpWWt",
  "key14": "36Nvm2N2KLCMTmJNWdKc8VBAkXRAufXk1H8KfJrvf5fiBMP3eBHhgnKG8pbZXkopcBpNWmgogKCFV71RajGBmisf",
  "key15": "5Y7bvsor3kp9PAFsjBJx94KiQHCcNAknNNhvKt1qKYxF9bFapTtHJcUa31BjBw8WPGHNL5Zjw5HTBWfpvaYt3zWC",
  "key16": "4WG8qyyni9N41BXwyEMGZ5Wcu4VsFjjz2D2bwEjL62nEhgyBEqG6eFUJ8TTzF1QYqs8Afb283EJtkfruZN7q5c9G",
  "key17": "2krGQN86JhqXqrGJpCJqoUMcPBZvfSDzLMdBo83BTt77gRKPJrupDuMzHRbkwt7pHGRttPD2bUXsae8XzDXDrWhW",
  "key18": "d2RHa6L7tim8fk3e9L9CxFbe9P3jPyEXRqVK1J9m5MwLxNraFGdNZWnUDNX87kANew8ArpSAMMfJnuEx3akcrZV",
  "key19": "4wxYYmcx2QTw9vZouWuS9gkrzGcFE89HwxhfxYbbmL3gY6WsvMdnd2DqKStHbLFnpEiFiaarDySmGA4YL3LCxwMM",
  "key20": "2JmiJn1YRkppYPNJudt3F3iaCamysxVdXd2efFdB6iaGCvsfcnKFZ38vHigQU8SMBra6mibS3P4kxK45o9Hd48cU",
  "key21": "J5NsrgBd8DMX3qazsMa1Leu8cphkZQG4DrXC4LLyZdPNoEGXMprcjsLmuaGQER2uMGmiLU9Q1Qb1LubtWeTpXvk",
  "key22": "5Eh5XRPzwxjsMq2KwiEZZ5GMQoF1ryoP7h2PqpVG9Bhfy9CBS96FW23kZsj6rfwLFDAZDwZ3G6mRyy7cGsHtqPXc",
  "key23": "2QJM1cC1keFCbFbCUuVLwArBjR4CihYDg2TRsagjEH7vgFYRPezr2jx2JpkyMNs6G6tFgnQ5RAUchGM33tM67nca",
  "key24": "2iNjok9oVhiLqp1hWHhVVtK9wYUpQ8B2LGUdHEkhRZkBuWxej7Ka9NsBFK2UuZhKGNnUR7P9wkkmA7cL8QrsD7qy",
  "key25": "4Ph2AHhdcJuz8PseP3Ry6xjQfgk5WX3tRaumAMoVcEhV9N4mcrpGpmYhwbj5B5p7J1Z3FTSvXBsTgacHcoRok66M",
  "key26": "2wbjtSc7LfitygGMrEnDfD3K3TJfc7KYqDXT2sxRBoqPWmKnM3tEkn9jPpUnm9pZsy4x8HQagutzestf6oUHgCZD",
  "key27": "Bgj8v9mwGYVixXjK2Yah86XLRd3to7DusKWFNzaWmtHNQQoLebdbRV6yzu6zMwhQojBCucTm8kxm9HA2c8ebAeF",
  "key28": "4phjv28R9sbqsfAtm5S8RsD2Fpzkn4mFAa7jBfrqs4LnWTJnUK6uM5fnvZo4guRFbeKLsmkyVxgpiAKLM3rQcrQH",
  "key29": "3n8Ysx7FV3BJjXgXTmvBkFjhMbJH5ryGGTtWyikqojCBH78wseBAihFbNzLVUcU3kww5V3onTaEhs74JDVzEwG6e",
  "key30": "3rnzVympqnVx7dSEj5CgJJouiVSQiWdkZ1qZamufLhtCvyWjRs7SWeQ4fcbiqEqiZQEBpEajx3uJyyTMwRTYXU3G",
  "key31": "65QxDtrNZGqXojBQEWYgjcq3ZQp4kZUNhKgMsxodSCKSKTwF8wPsAxpHRrgPL599PB9yB3YePRPpRP8MpjurRcbz",
  "key32": "22rXtfcsFTTsbF5AsvQMH8btcwW8cx6fG4i8rUqJTonHj2FZMCpukwnTUmUcLpKX6uU4TLPB8aU9NBokmbvGss7r",
  "key33": "khnqxFM8ATx9GQFVuQpSbgZGLxGFBQeeTV4DyDMYdReUVaxTkChpFV49iV81icF86FWNV4mK7SL35t6RdG5AHYv",
  "key34": "5M96B4TFbVYeeiv2JDZ5db6eBaqW5ekJNVoBhKokRj92MGiZ5HfQRfjuY8wnvh1eCSUj7u818ujPRco86xr95rXp",
  "key35": "2j5zMADMjHH6MEDsH5TArBdgCQ9j3fDUPGioacLwCq3xtCHxy5mb1utPAE9Va85qAmopRkQFYVnUN37sANTXW7yS",
  "key36": "3YifoZCrR62qnZ97k4cYU8YbZNieYhbpXmGvkZupbFZs744YbzmhcqjRB3qZsPioHoUSUiXLjZW7MSFXVhW6ks6x",
  "key37": "4UUSuo9nJeVn9Wk7wLZAEZc79ML7WegsoraYhFB6ChWKfSy5qDBZ3sqVztPuWj9Z9XcQSgSc2y3G67X4yTb7zv5E",
  "key38": "5jdhr7sBsUsE1p3XexDkuo1Pw8FLUyCNkV9Z22ijB8hchJix8pk6UXheo96XSDN1uFmm73LoWVMUAUvy3dQB7rPw",
  "key39": "57yasGMu8HYkGiUT88PtSBbGFww59sjuP4zhE7cz8dBKZscX1WKy3KzbxEgyMBLmqHiXva3t9fcXZKL9FUCveyta",
  "key40": "5gGsX7VwHCrCTkXBGqd8DzkfE5nDpQwQSgfTPATJFGBppozw4Dp3rvSj3BACvw54XedPrAnxszbHDwmF3mYUqQLj",
  "key41": "UaK9V3KhSmndvcJ11YjieDHC7hi2PTYHnSGGiToFNojYnGrZozV6s4QNLqujBibkYmPU8LKd4sTUC95FEGV9jEy",
  "key42": "j5o4CSfwkfmHEeH1bRyCwbm5k5L2PwfvNEh1iLGz29VhDnQDeda3eD5QoJvuHZ9Q9WxwoexhtT1hKrjfEVH87N3",
  "key43": "4rdu6tSCmGfndq4rypLkYtTvVPqiokEDo2G6EYCSgq6Woj55VXXoczxd1DDwb3KTHP5WQ7obwNetQnRTCG3zd3i2",
  "key44": "5GheiasYqEYydiXzhpJM8EHMKQz2AB6UqxCGiXyBECWwrBxBMoEqKNi9YRknSnkH16Ycev4bgBLZXehcY9tvRcoy"
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
