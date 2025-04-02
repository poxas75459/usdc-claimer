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
    "4vPx5VKjkMoWBptgyzNE8WMj3LLq2wUdBoUdzE4pKhkf7s75QvXjVB989mndXad6f2ugdWUL3PohEGLZaKCZqFRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SPDviLUxki3GLfwmV1VCw43qKusZBPyq5UiNMgUn3oWj3jaycFebL3pgkYvG31iArJb9RM3aQ2gMiLeFhoF9seu",
  "key1": "2MPHKk6Les68FN7zjf34MjMAyopp5yp6453MdmnFZwrrFZuLeMeX6n9kFskMXLeqazUyeZLWcMxuAhcgXxsj73QX",
  "key2": "WX8WfYGU9fHCVzB4Qnbm7NoQTbiSLy3qRVgb4w5wHAxkHMNWjyN2rHwjo8mxr9EY9WADazow8bMRHjKwbdis91W",
  "key3": "47hm8DfNiFSKFWsVsAsQjt2hZZfBZ9bpZBzXYwxg6MGng4Ld1rMYw9mS51C2NbW3TRuukDm9kJR2r2jQPqyQdQ53",
  "key4": "3PFvK3GaUHzqnV9bymsiAbkfjSL9pKQKodnFjwS3yhAVc4Zj5Hr8JikTWxULSFv1GKVLMcEpDC4mhVZvVqdXzsQ2",
  "key5": "DJfzd4T9PrsX6SF1EP9Fwu415QWs7zZ4fj3mEM5Sf96yxfc89ivQPPwfdBaWxT2eHF1Er5usJfwfLBUuGoLRaaF",
  "key6": "3dNCWqJjWiWV5T618zC4m8Xb4oqSrPkpAF8jQNrH4JEgYsjCxiKFseRTuPrbFBogARwPhToF4nCqpmyyTVzAJEYz",
  "key7": "jj2iTbMqaxEn2NjSty4nBV3z8rMsRnnMj7T9naSfAiVx32JFCfvwTFjZ2Gk1rXpTeJ1RDcGiDuCsaLSnkdkLWyY",
  "key8": "3wvN5CEy1ZaqBDa2ME91RRtzk1hNbuYxPAwxp7B2fwt7g1oYCsKmbWf97HKuzwqetXLVpBmBbHpT8a4b6ZE3U8ZZ",
  "key9": "67n4CTa72cQJeZ4ADRCU68kJc1gkeoL33FVwQpqmCTQtWAubGcTEAJHUWaJQmTfp8ADT1nAdJ77LebUx7HzVT9e3",
  "key10": "57J5AjpfejBrrw96KYH1m2rgmNiQ64MKKb7bMANpRKLzmjgE1MysPWc81jQzYfjd2gVagUSgNU5ZDVcohGXMkgi8",
  "key11": "5wZ2JCmi8s8vq6Ux5fpLFQNm8gewk8bPN5q77JLvADHJXbCwbwdzsoJp4oxVoDbfeogdULJi5Pc7s5zbbNFpxVck",
  "key12": "4xPdm4JhAf3hFLTqjtYf92tyJknzXihyvBnHnQ6jkdNitYcAkL55Bwu7UvJ3CCr2sAKgQKFNvvZdVhtfiFzQPXsE",
  "key13": "3KZYhiLVvHomiqmvCHZyfHfrZJBSe74sXozZ7a99w31xaWz4w6W6gqFACaBiyWnaDSo7yazvQ6wjykkV23d52YzL",
  "key14": "2pFjMpucjeErJdH4h89s3FneNaEBHn6zqfe8UV7RfybG6RyrhVcqyt6KDgD8iawmmjHguYog48XiqU83b7vpBZQN",
  "key15": "r73N5ezesoWi6wwxDX6BQmwVbq9FMAwSpVaQcJmcY8jbkSupjKfYhfTr5rdyHpvXuppXwR75iSr3yTzq1bkZesX",
  "key16": "54w1j6o1bNfaDxsWkGcdohRMPFckWpDU7Uk3YYFst2Ud9ds4LgbYp6mkLuE8WZpYZvraTG8Su8yo3jR6qHyRMB48",
  "key17": "4wsDroW5zMcCisM3ZNx7Sk2Aa4v9QxWxipuMeUTAsHvRmftfJvNqevdNXrucS6Ey1GpoW6ytpYbX1GEshfurA8bL",
  "key18": "43Agdi1VN2G4fZ6dpf4Fc9xnisPV5ec8Ee3HfPqy6zNHAs6jxaaVjxwENZTEVm1i5Zsvod8FwdujzePJHKygc8Bc",
  "key19": "2FS5crSdoFdBgvkcUjXAbJ3xettRE6THCFtuzVcREZQWNXDUmip5htRaGbEhiXXBgNzqFL3gU7EWNGfTV7az4qyM",
  "key20": "St7GNbfnYy6Urz3iDmnDjfqYN5ArnbEeXhp2rExeRCxpJFutQo9xAEJ5zVW38HT43Q9yjFjTjhrH4PYkYUZzWjt",
  "key21": "3ybyj8dEKtFq3y6QBPQFQ6LJJF7ZV1PmoDp1SCic6KAH5QawGAmEt9nQo7zVPfVRKoPei1FnticECWqP6Kd22UKv",
  "key22": "5UjLk9Tug1WZVWSpEp1YzwnCPXMMkq3ooZuaHZ44JTXf5gLJehnrcZtpqL1bgvpVSQPHp6eEfR4EWCmaFyvbV1kV",
  "key23": "Xesx2MYkX8pqJRMqryQUCAqxM2ppbwYJ4iVDVriiUiFi1udLeD3Yc29Vx2RaFJ1rpxfPNbyN2s6QiPkbt2XfWuR",
  "key24": "5t45DtTpwHiuNtdzaTQxWYemzkG7X51C6q8vuwaNhv5GG6gymfo23yzwCXcbtsWcW2W8TJkMJ7tY4viRDAM1gR4P",
  "key25": "2c1JRAuen4tKqAJ6YsbQy8dSwP5fGR3ckZWEJ6JvzrH1y4rbQ3z2PvYdcnePWm1XeTmPswwZfipYKsxYbPBV1Csn",
  "key26": "57uQjEMNxngHkiZ98bK3n9c5HaZnjzKEGCQwnbwPDmVYMW9Aoc1ZXgjHvm3m8c1Gjde226Zbj98L2JbfAA5hSfYP",
  "key27": "GkQXhBRdXh3StS9AkHDK4GPnf2Zf2sVhdekJwit3J7GVmevaN6kymYR86wRG6sF3AyEb4hqCjbR52vkdng9MgGn",
  "key28": "4u6bbGWrUyUBRcpHvaqxvGTBrFCNuR13Fm64F9beigLFkapargS2dT6GXYjapSx4A3vaVxqgNWprx5GQVysv64R2",
  "key29": "2TYJ1ozg63SHG2p7WRJCkfiLVhBC9J96YcMck1bCSCp3wPBA8KAKJYFsokwGxnNYLQFVJStovYrL6CkkDxQzjewT",
  "key30": "5n5KD5PT6H5EyzMqg6icarQHbycrPrTFcLTZPyXW2EHnom4pgzS4Bs3eMSYvNj2HdsxVDEpRVbuTyyv7jE2VcDhp",
  "key31": "GC9m6cNECqjZVwoVdEPooX6Xc27ChQXweht99hFdx1HmroPxXRhWVWxTwjNdFfqkFCdYD81wLNSrnuqtgQ6iiWA",
  "key32": "2DHnBLnQ52XoCjity6LqHPnxiVS61oVXvVS47W6GvrbMRdvYamcAawGfyj1ubeKe4fzKrRtdBPpwgwYw5AnR2PLN",
  "key33": "3NWvbBHXXY1zDZxFduShwp7BQgs1zrXwyDbgEMpq1VpKGf4K8jieHesJv7cSbhwvgzFbvMDNYrWQuJ1dp17YBSzu",
  "key34": "2kmcGe6zz1qriE7UtKTeEfqrmBBpDtjNvG1uq12r9fRQjB8hWY65vPt5oodVii29R9dFR5EZDZmVHgUEbC6qWW17",
  "key35": "UCerLXSa9wA2NojizMNsBa8p5g33TsWVT7ajajr31qLbHL1m1pRZygLDmXAid1MZVNqhUVbou8f3T2LhQcG4X2j",
  "key36": "mQyGVVXPE9csW6rHR2tVx6ndSEtLT1XbaFTP8gx1GfuekRFT4yBsZfzLvFDTPghYZDD8NvA6xX75kFzcuqc7qqk",
  "key37": "274XcAHdupsyZa3LAuKyKnYvqmZQ1gBcnRt7RB6x3ds41JW85pZiTGxkyMupJA827CTTVAY3DtbqPtWe8gPmGQKZ",
  "key38": "Gbb2offjprn94KZBC2rkuCRY2r47o92Gmj6xEWc6QMo6SZfYxW94MgDGS91KuD5rzqCTe8LZAgSwBsNHYax1rFZ",
  "key39": "2V3utJTCcFMSjA8zHGFupXNuZKCLH1LMPecpRE41xQS4YjWsnv2pyL9VJMEZvEgVvv2NeFcJ9zmFh1uPkr8wH3hq",
  "key40": "2Gto6KJTrfxh7tKJfRq2Z3efLJQ8e85eXUAj79sGz1hKXNeNPkpDKuZdLhos9CUXQ6xip2v8VfqGjQeEtMAo1DYe",
  "key41": "4sqLzdr1KZ84r8pfWBs8SAxBzobf2w8VzqQRU67bXdwBdiHjeZh9y7vwy6tTbafQV5ygb8zh1hR8NMf9t7syxKiV",
  "key42": "25pDXGQFLkSjV5TDc1NYT6seQSJAsqc3gfGyZ8EYGa8XvX5CGBjgN6D3ud2AGTkqyf5NqEuUuERPMcnsmyyc6e8s"
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
