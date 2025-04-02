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
    "3Vx6zjdZ59nNFVYYicAgn5CasGzU7e5NBLn7yp7tZNiYvKaELwq4fPMg9WWVJ6HKgzUjUcTpC5fPsS9Uam8Zgqic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NLWV8kZg2hiRtqkZTHb7jgxYyuyLH9LKtfDhQWGvQNSmz3CYWXr1n7kDZiRRsQwPnmoqQoUpPHQygz7Hy95EUMj",
  "key1": "4vBrzxMn8cMiAgJ7QVKsPZACUfjfBmWerjJivremKTb2wyD9Thk7k8njeA5uAQ618zuJmBDR3VrTdTtxc1dad4jf",
  "key2": "64XUUs97ec5K44uh3eQyZyxXShv96tahoN54TQKfZGHM6ME1oJNQ6SQzxnBzMKMfQ7nD6r84KepqaYMwQ7rpHxmM",
  "key3": "7ReHb8fAXrP9djKQ3wsELL8eTna548ZLxZ75j5iwuWbDhieRevhixJ7eV8wo7oyfZKXhEVi7zWSuMeuh8bgu1o6",
  "key4": "21qufWJtonKTFgJBdy68PCXhBgRbLwp9RpLz1fsYvaG94QjUwwjnV8MPwcAVcRCvHR7MsmG9MkYaLmgRAkJEBYBy",
  "key5": "47Q4B7DVZfbxbBti3gHLbrfrdJaAQx9fgCcjzENbMMEaxKPTuckNkWiWrjk7C71ARWQS53hJWGY3BoGxUJPNiTTX",
  "key6": "4ZPeVMtBpPVe5EAzFBrZLmMCGGR6Du1UaZdFzTUSXfy1eL6Ub5bvPWa8Z2LRziQwG1u8RzcxXM6nFAoPHj47CSYJ",
  "key7": "5kPXEJB1rjZhtVrCUCD2twuBdKpzzszBqmAvq6EuZaM3XAPCJsHVnhYrKUpvTcAgC5ZWmCuaT64uhZBxjtC2wNLj",
  "key8": "3A4S9EeuhdRCvbmGpraQYhqypnsFNH3qe88iobgYMJULGTaC9ZsGqhnGQSujkzp2rxARge9xYP84CophEgHQUrqg",
  "key9": "56epBEiQ9T8QqYrUzTRyK3qhqEALPm6ypNTyBUY39LSFdodsc36gwDJ9LyzU8wVL2ZfwDowCiAiYwV2Sa255gkem",
  "key10": "3pCFVv8tQjEBVCCwncwz9pcA3FY4GxG3cnc2Yv3oYtsnMjg4BgqqYdX3hym9Bk3Cmogbprcxz9K9rhenzyo9abJg",
  "key11": "423FkjSGBRJMndEZRshYZKzWvTzCDWLpjPkEbh4LbBgfSAMhqRUDGMDJAh5qRZw7gjgEvkxghcT12Qi62oaMKHpd",
  "key12": "Q81KZkycZymyX5wFUV9SsbucuQCjeGzfpYXQW55yuamsaPFtbvHHkc5cQKnD8egGHdvEkTVNMxbSCh7fCiTjX1D",
  "key13": "57W1PzVruU8Y4UqmycPt6PmzfN1KgZHLfJuutabUVoygEBxCbPGy6kD7GHTZuBP1ggv5zbugnqes9xViMd3Dhbfh",
  "key14": "67YDuQut8or6pM7Vp6KHq4PJVgCDLwzVwowdEdFeYje2RPWDZ1Y9oiJvrx4tQ1rmjWWmSE2CL8mafTw8EjbbpWh4",
  "key15": "3BTqGAjp7YvZacXf2sB8dfhxxn3AwGS8t6n8sCKfuTJTVyXz6C8QAxzoPnQ1KZDPAs7x23ppTo7xaezbWs13wkFx",
  "key16": "513cnKaKD14J5iNtJkowVH792GhzXPvmUA4JsJ2pVv7ULn7nmLXV6FeLR6ZtbRtP6MnwsVwhPBNPyFu3UXW89Wzb",
  "key17": "zbekNzFt12rM7rHyP1J7c3fNHv6eEMQDKHRZsPrQkecGVP65D2vxdh4Y3CfByFsSkY3ggk42enY5i6uRXn3okJ5",
  "key18": "2BvrVv2QmdK2Udf9bYmaQgCiCfD13nZhLumtuC8VRhE7Vcq1hT7JJNBPfPuspW6aTTvZ6CSBLsaAeQJsenqqkXfD",
  "key19": "4nRyknDqtcdGnK7rxjNzhZz77hT9E4px5vr1wwo2gb4WezUBYmwzv11gUhraVCorrqAnMp1KWvAsXueXEL3M7gZn",
  "key20": "Swt694aqay1iX9oSJSqZf22YHxhVgg7LCaN4CVZNSJ9aGnLXXwFvb3KECs4EevFMvz5LKNrMmDdKURFq7ehvL4h",
  "key21": "61bsJJ2EQyoPcBn12sFrBq5BAV6vrKtwj6pAj4uRK2K1AQgZ1ZxhwvCXNFjr1UvbweSwjSuqqnEeRmPaFm4WFJrW",
  "key22": "n7gNZwoQ5nCiE6hAMfwPXWRyokAdtk3TQuWShYLrgEDmWRGxWbf7mWrEtBp58o1PTJvBeYhUaMwYHBWrkCfvetv",
  "key23": "54TpUt7U8Q6C8RdzudeMETHdinfJv1uoxUGwGqkNSGGf3LndkbDpTa7BLLhXRLVGjHsbSk8KiNmwJygHcE2PYrby",
  "key24": "2xFGUKT8MdEPv3kaGosc3ZbW9niGQ5bxPpzEWRBncdDfM57gLDzjYHEfU4TFntBGueKjz61Ts6f8YJXwmzZBNsXP",
  "key25": "4arZMi4sWdtFMn35JGXF83DXdrL1u9TndWx61j52WVJ8S1G31LoaorafhJAgu9uQahe57A28fnxXqJjTnGmCwvvv",
  "key26": "4z2j6DnoT1y5uSa76hrrtQC9NDFjfrzhXe5XfbZ19XMqDySSEeC2BtM3X6gDJb7t7Pchy3M5QVbRDBrmM5coNfeL",
  "key27": "3bcGus9yGioSityFpwiWaMSuMCy4eSKr23KXfEjmt8yHdzhRsyBC3uT9rmFr11pXmk3sAYFFikcrRRTL9eXgNfS",
  "key28": "4zhiATxCawxeKpnJmEfr3hxH59r8aU6bWDTJgvUaortvGStTVuKPnRPcHLYTmD9vnX3knDmd2hGQ6VXwyzUxrrMX",
  "key29": "51TvatZew8xxTF98QvbQeyxzQeoTiwnPDmxFHuZp8BypSttzPRnTSd8sM1qHAaVXLxLtuDMqZHTUfPYfZZWbM7g7",
  "key30": "zYRERCnEFqd24VQ5VXsXTXYCXwennZY15b4A7B7JfEDF65PGmhD7o26rp9LwfGV5Q1QhkZSsG552tQosJ3rKGMB",
  "key31": "4HLUYhqbzFYJ5Dthn1udP18UnHt8KvcqDgohmtBb3yshDPe58TXC9fTEyH33UQQJfLA3oD8WHoMbpFqy1ozqMj1P",
  "key32": "4QDffcLQU1RMJoxAPqU2arGKZpU831D1zRcnp5xhfQWnfzmLcqW5hA7MVoLpsnXriRfW7mhWCftSsH7i2YdDsDoT",
  "key33": "dfcJcSMLuBVDvPmyVZNuKQpiNjM2GbmUPHsbK47WGRz72CJegLYBMJ9ycpvnKWxsLMG4s52SzuXguJ1gcBPqsQi",
  "key34": "4C2GHE9gN235BG2e4dA89FBM9uWiUcNwpfN8cdmS2yjEK9q3nx5v9rQgGTVpuZz6AwJ6icRbhYEapFu8RYjF3A6x",
  "key35": "SYDk4oq1Vp17mpLzmpwgFtSXLv6eUmRoERXF8YCaD4vPMuXTTDkHrzjDBaKFmu1vkXEVgiVbsrFnKshHNWSMU1X",
  "key36": "4MCLuTci8rfhnAqGXhzyxbeYNVr2tuTUE2oBJ4Rho97JxRCGNnaxFf2xnPSJ3BjyJvXAT2YGc9QKitoaL7AGbqQg",
  "key37": "5XR38cp7QYNp3DYh5GXeW6fi2VwXDmGAEii7QwJsMoC7kgVJce6CpxBiDi9YHgTstjzP27Dd9Lm7zYZg8wA3KsWZ",
  "key38": "MU6wtFhUYqDdvXNJskyC8jCBjtBkMhck52RHxmN6t45MeWVjPcmNAJ29gghkffGigqMyWHekBBVvVwRatfck8dU"
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
