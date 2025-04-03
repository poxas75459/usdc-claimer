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
    "3Nhv3859tjbqBQGZZnXHqe9GTkaxWK5CuD9QbJWMD5cZTaxFMVA5sya2nkmknqDDcWdMVRYaAv15MUQrt96LU6Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sQhPuSxyAnvpQw2K71N5Rdz89vpNvZ2c3dLHfpUnyNwjoYCXy6TQ99AhBgvzYQNESvUymz1Zc4M3QgTezZZQqjy",
  "key1": "s5439JxcEW1SqTku9g6711EEkdXymqgAc2YziBbKDLwqYAL6rMwRGDfm8vDq3Q4dHjvAaV9twV83Ar1Nag9iqBM",
  "key2": "4BmARhzaZpsbzxxF3xCEXzpTTA9zHLSvCV5gkC3uU4PWcsYX3PnqhshibQ6K3CvHj5RRgWdahej87zGfqVDv4xta",
  "key3": "4bkMzQ2MKNtwkT3hwdSKHmgyTCRpikGTJvXpjXXATBcVip4B1Pw3gGg11pmSL9m5wohuEYNV44NT7G2HcSSYT3Nt",
  "key4": "2Cco35ufPvdzPH5f6Wd1rqZdK28qYUTU57qRHGGhar5MRN9UkYwyi92ju2H68a6GZQKCdwDFRfMpovhYME9pkAcL",
  "key5": "46bz4tzxf2HZaBEc4XGdNb7SgAsLZejZgfTFAi6ujUcDHQTASgrydwDr9sKFeyHUCJq2UPxYgm292ihVXNQADMMA",
  "key6": "56S5hU4fCbcESEhm4LMvfw7eymiQYFW6UT757LBPtfyky2sgFiwfn5kkgvFRe37LWdFz2iEZHxZD1So6xYTciYwy",
  "key7": "5SeSS6oaFvATkGmQP9s25bvVSHFDwx6c6dmrcFGXfufmnHeEAvKtpCqaAmcQkRzdJ22AhzwzjSHuicmcYYDDNhLn",
  "key8": "5LadwRBxxdEBAnmbSWBLHWuFCgZGL666xTfRwAfHZFWnemnDArKWh4TujJ65LNdTVAJvpbNS9TVxMZr4d7jCha1L",
  "key9": "3SrfjiHtiHfmKPStU9559SNGLWAQS5NJFSyE2ZY9gCyCLUZv7Kp7iBz6RL8gf9Dryd44XyEiefpqJSqYrxUayGN5",
  "key10": "5KzeM6dnXuPyaocfsLwC2jmswGrfbU1ZnMSp8Fy2xKqRu69iDkeRSMKphTrn6jtLfhnvdSeHcaokt88LqbdmhFWh",
  "key11": "2cwm5EsoiajrNa1X6iRnvZeCQw4sRMMGR6JD5LPXmXx9iLCgekhbwcCBdiW7AntaeXWn6VNkbZwWMd2ey31C8S94",
  "key12": "YbATptiNaicVzXZSJ4d2upuHteL1XoXQbXCLMrfcC8hK4XJDRHBQF2C2ANw4sUVXzbfoqhGuiLCTbJSBxPnMtJF",
  "key13": "4CFSQAW8NpKuQ7yJrKqEuLZjLq1zEoUvzaha1Kc4pqKDyuJei8CuwpTk5uQcQaz8j3N1BXTzvGmkkWuouGqvxoWS",
  "key14": "3JFgGMsh5S4bYyrENGZKe8LTVjYkJvwjkMerLex6FDnAWuEQBtYjw5mUSL8Fp9DzcRtPDxcdNt4vasC8kM57tTFm",
  "key15": "4oeVBwJ8qVDsPiXjPXSr27nMHQm2RQMi7JptDqXdyg6FgQUfuFbC9odkQb9oy9E8Fgtp8XHX25CFEZdofCkqFpuU",
  "key16": "nxwLH9hBYTEatQn3DgZ3EqWLCPjmAeXY6YfUW46E2hbcLzxAo5KQN4kehCbZckn55wvQe2UTpBZ2AMyWqxGfZMu",
  "key17": "3XqWXrnJtSqzSks19CwbeGFaoBDjjNNRVMpzYEXS4uVbwjEgreSFSPRXQHtYgCjNC2Z3hKDoDN6Ggy3qqHtHRoxy",
  "key18": "3xt1NRdZ3wid5aQo378z5NfNhVdr5e9ms874p6Vh4mYoL8pgFWtBrRqcPkqCbK15p3FAemSyXKWwn2SHrDtKDxFs",
  "key19": "4imVQRXWgC6nuafL79btRR76sdvWVkzgt1gPfh1CCbSU5Cb9aiG73NhLDKaWzb9iZZKFWQjEKUnotWGL7chQbKt2",
  "key20": "2CVQ3Dw4FY3Ez38YBzGmnNRjJiG9T7F7RFQDePUPQSeobYLfwPmHvSmsmCtZEfUANwmip4JPGB5SbpeLdAiUN6K3",
  "key21": "2cYsEURSkLzB8H4g9AvdfbNNquJt7PhvYX564fqPEw7DRasKH5TStgwTf2VjNYKZnvYsVK9TH5AeisSsrZVbMh9R",
  "key22": "2L4VjrXvnQaep9ggV1BH9uKrHdje3AKNJ1dSpUk5EabDWsQgRSUNPrXijLome5WSB66QoWF1e1D9Jy7reqqk1VAn",
  "key23": "3CJ1zH2gggvDrSsLe2z8a7NWDDjZjJgaGaNQj5oykAuDRvmKLYFfGuVHuewUkjrNwJDmfNut5bGumjHdqEXHU1LW",
  "key24": "2PGpHrXxGqQrVLrbqKwTcmksErXtNzxucFMkNdgaspJtazxp5px14kUQxVeeF33CWM3anVY7yQzEu8eRqWsRnHQQ",
  "key25": "hGTqtdpMv2nCrBQy8J9JbEJsJPyfc5qiopiDpz2x233P2aTHV9KaqZQbz3ZrgbtaLfAs9YCvyGiUzvhQmfXUi33",
  "key26": "fbXfcBUzHPQhSUaCg4fUAxjsA5DNEDFGRHYAVUQMTFJhrcZgqBm3JnfbwU5gRi7GhMMvmrj3d8u5mtT3JnNszr9",
  "key27": "3osc2EfAoVk7kWFzwP6SPa9LpcoN9LeRnugnUwKD3SqyJ29XZ5B6EqGh4noTgYLmiShD2dMEeRiDS9CQ1xNAhxkN",
  "key28": "4L8XX97rmHBfhXjhwS2ZbjyQTA6p5Ua26DRy7UYcWcywreVRmnnxxPvUceRDkTdQFR289UDgjzgkBeDFQQ85DzAZ",
  "key29": "YJbh46bJFb1LJSAvZqT4zdssA3q3wjJUz4EAfuUi7xGis1WeTW3aT4gu6AG7Fn6YYptjkkUiW2d9NmNKRS2L8t5",
  "key30": "5DG4pHDs2Yzfin6b83koxcjMZC5T5nbcBopUBdfjrSD8uF1UKmVt5bULWyneEpEkVt3kAXCgyML9ddzxgqQcbJgE",
  "key31": "5FMDjLBXFg6T4cK7ZL7kP9p3ddyjM1owGsittntHkG6Uryt4sTiV4EirLvHmQXGdj8NXYjYgg9dBr9iBuhym9Vkr",
  "key32": "D3BiJ19hryry6zKje8id9tPVrTevX7AZCJgujUuj994YXRjWXoevuZD6ba7MfWm4LodC2sVTT3N211XfcnoszyV",
  "key33": "526mTzTZm6t6QEgTZgoQG5DereygL6RNKgBjdpU6QkMBzSRQXAA5oDEecBcVdoQJeQ8jfbbaR8Biwo146aTj4VBr",
  "key34": "MfCdXsciqvUGnfkndVFyZ2Si8e4N9uPwJdESVYZTbQGKfu1JVkFe3Xzkvo7WL12iKSo1DMYaU5cYkh2tBDc996B",
  "key35": "4ogPsHWnPLaE9msjgv7QUiBbNewC3HJFuju6dNa857b2E2oZDfb5xdfWLmUnNke9EcfRfqFveMKUUvoYfSnjpoEn",
  "key36": "67T3tf9aNdeBjDC8sztSPZ86S8Xmyve5vGLxPo29rycqWSXAX5Jius5eSWg9xjQp4UHTKhyEc55NqnsubHiYPoCW",
  "key37": "PHDgaT3dz3u8Bw8y4q9k92jq6Tt4L3ZEB55o5kzBJ9eMpf6kzA743HVrcZxwRtq6GxxfJ2tapN1SF2FRPaq6LuW",
  "key38": "2F6simX3v3RoUauHYXAL8ReVkVS2NunbJyvrWNPCe7jDMiaSaCHXjTJvVYAoB4xumTpjmJWMpwpzNNf6xDJtrFeA",
  "key39": "36drMXi6216spx38Wyvwi3UxJirmcS6eQwf7BiSa9dFf68LzrwQH12nix7uPbp1jTh4FDgpLkYBW9nM9Xe1UBhWw",
  "key40": "33nLhcxw1Yo7rQELTommygbionuWZh6MMaZ5YJcRsMVFhJvWue8K1Zsu39sKWgFXqWCR7QmW1P9gC8doRY4Y4tuS",
  "key41": "2wiHyhskWRDmrd2xRS9Munw47xoEj2GRyQv8AKWwGdn8oMpZJEXkk2SLTDa5u9PeHcRhpZVQS8K1bHfFAprkpMKT",
  "key42": "5VK4u2MeSgWJ5SQrTp19DijN6aVcNCqRgM3A9xSMcdwe7qi3suub9a35nc9kNsU3DjuJQV21EyvakiTjp8hWSj9v",
  "key43": "nboy3npr8psuTTDzAor6H1f2urUfCVV5HvVyuPEosqbapznZv2uZLTyvzw4zjpTCNAsjDPnhrnPqPBwm4jvfaTQ",
  "key44": "3Fb2n2EXRHdfgCfAuB1Cnzj2PGPmZgQyH7phHpKsnbkNXXFVoiKC9L2LduXZoWxSzD5JZHqSciNnJGqTBqdq7W9L",
  "key45": "3HZVR457xMSey1g8Q3s56MBLswkd53voW8xm582cxMgvVYU2Xvv77Sv1SL8KadBGfPsVB92dSue52b23mcEBrf6m",
  "key46": "4GVunRJ8PBXBo34EVEWEfNcsLw9KkbjTWnqrN9SjM1nGrmkhLWbkmx564RJrt6DvQF7BqX7sf9X7X8uDCba5zZYu",
  "key47": "4yCk5oMvTBhScKUGGDGwTEVVz2qPmUqTrsM6LSdn7M6CUM7oB547CKuNahpLCSUUzh4vZ1mDrYaym7HB3Nq6Hcaz"
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
