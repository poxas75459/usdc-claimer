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
    "3EoPnDYL4tsZh7bpfhawQzxAzVxighYCvesugCAY2Fw6V2NfGh5YnqV9auGTSv7hVAS8xfrPD4WodRfxcegYGG6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A3Eopd2rkhSoNi62hyJCosYNMeYYZf4H5LSY8iv9aVoDyBH33ARJQWRDCy55U4ZqWcEZPyMi3A8YAAoR3oGb6G5",
  "key1": "4ekpBRePfXvdjoLxoAhdLfkyc9ijb5DaHKqLncg6txqPRv1RwYYJThFCxs1Kev6nftEZ3FiHaQv62rJMi3jiRi25",
  "key2": "4mChTU2jC1S1wKLvLkprYkC2KnjdASMjzLZ1t5mCnKVBizDf3fpgGMp8SHbSbve2CfADqyafhF5rQnoSSg4BHw7i",
  "key3": "Xzjs8WMNMwkZszHduQRtKfAF16PS5bhUwwxiYb8JgC6jY6ZT7QrkVxYtaHCyucEUKkdv1XyqQBqSfATRe2fzkHx",
  "key4": "4TtAwgnmAtfR44bsL5T355jPSziYqDGXV3QGHwYP1eWbZrbHTNeyGmgDxL9H23Vf4x2XPULizU9yHPKvK5BJYBN3",
  "key5": "3JLJSXdDniYiooMNpS2R9SgVpsRjPMsq1xCySriov8pNXjN8b7spQygM7kS328GFW8JsfJCqbjegWDzd7AFVVz52",
  "key6": "66YHjyitQBomag8bhJEh16VLu9gPGtSAXaiJH3XmQsn7d1WzmXSeiQqJJiS54rR2s4yoM1RQe7LuG4CDmVAiSJV9",
  "key7": "5vXh7KL1sAuwV9yCUANSfy5MT4vtMRC5tBzES7WbEp9zcMfDMfHTyrZJ3BJGSSpqC4aqatwyYa3eYGcPbDpRKUBR",
  "key8": "PAc8Ab6xB8iGwTAQE8MjzVd2U7Dxxov4NxXXzVPAbhBYLZ5ZAtXydtFcUayMzCZ7t1YFuQ5v8DyoMsBan4Pw5u6",
  "key9": "3w59LP7LkvEHhe74S7TH1qMkfGW4tkUg1eRxY6oDAv9J2GLtCxxvLmc9Skm9hrPt3xsXspkRc3ChJT4cSdhJFyMr",
  "key10": "5gEjAueFnojkNGWq5tyVzmoC3nMJddKDE1tqd8guWykxETVropB5U6Y89vjHeupN5bL2xPZLYvGhzMpPMpusCz6g",
  "key11": "2ZJWAm9r8RyjyEqHtL9PdJyn2fQYGXR3ty7mujgkiFybNUqYxfaVwhYM1LNuaqsRhcmkU2opMVttATzEL9waguqK",
  "key12": "4dDrbzdb7i9BJyiX5URSYGZ5cfXqNDdx6v8WnpzgyixhD61V3cvr3z9a37t6FyaU1Jfk9nTLWXfPBQLxJuZkyjxt",
  "key13": "3YTh5NUnga9ExbcrWBCtJYdihsgAEzh9nEhHcrEvtkB929bfSVcv1J3AzvSzSPX291FD453WZLDk8qNp3PFV9AU7",
  "key14": "2SuKBfZzzykoGKsVrGEacWjzbzA1SLeLbTQeBvfMgTA9GCvVxjCMXfk4BCt6SsxgfhnoUGN2sXTphmfiqBN5VCoz",
  "key15": "4vvZT4bHRgvJb5D1F1r1P14oa6jJ1qCsRcuWtq68XMx97iQbArCFhXhyVDZEhWfNCq84VprexXuccXEYSkq4MTNU",
  "key16": "4pq9uzAVVnZYkgXEKmPRbmVxQBnFgkapN9HJowSznPxc4wMBtmKgQMDLprP9LyeowGcfUBAaQCeCeagfHN4Xigxc",
  "key17": "432fyEyMcQS3VsfKyA8qDsj2w3b1nEv9syNSgU19yxuWUQzgfZX8cuXkiUPVAf4pej4z2nMkiVgeUXEpDXzn8Dug",
  "key18": "5Y6q5rxDNuKBAVWorz89c5fr8Ebowz1jRH9YjJ6ttZQZb5twA2szyCWhXqcPfZ9Kka437Vi6sC76Bt8VWUNmgK3J",
  "key19": "4sCz6R1odPxoMrLBWZR6Ssq1t2pX1vMHv3bFf34y658h36uysqoJpor4WW3kMa3itkPbjaeUKmFC65xGMYWMHbiJ",
  "key20": "32fJkPggBnNbdShh7oFqVMGJcCmAu4czKvdoB8mJCwmpYZpzBJ1e4VK9UF15mwcgZ6B1EqE4XuaU5zxfsiNNc8Js",
  "key21": "4S6SDxGvE2nP8U7o31AZkcAE1aoQGvEdnZwThNbq95tLBnagYKLGKCPUhG7Jzhs3s56E87QiDA5NyaK5CjMr2BwZ",
  "key22": "5ANgWxTazs8nv4sx8ftNY8ak7wiUdL1VzS49Zs334npF96cYrPQkXgyBMrS6hyBKDAmXxTzxVnrqWbisSW3Z4rqo",
  "key23": "4vtNdUABLoJV3MRGAj1Az6WjFUAWR1K9Y6GSLpBFGVMoAEDdWzsCLYPCboDesW1Whf3qoeGzTmdRM8x9thxcmN4N",
  "key24": "3inrDXi8yLajBoamhKeQf6nXQMGx3r16jmCTY5RRUW5W3rQfZmnz7AkHrppkS3sQ6WXxzjcStbQ6wf7Bfk4tuycj",
  "key25": "5yFVTxPWM44JnJaTniQRaFd1rgm6raBbPqEPTFnnzM9MH4dftgcq7ay6TxwKrvoCCjPRgxWsGktR12EH5kmmo6Ay",
  "key26": "xBTgwESz8LS1tLxLfZjr4QVWXKcU6e4V2WdJaEiGou59hK9epmCBFLb3nQAzDZVDQtfUajadVpTWJ98C6Z7CNTj",
  "key27": "4whm5g3ymihh5nxoimcgndxmbXb1ZhxEv4bmuXLU7MY4eLNtZVcqDSgawMh7vtyYxffSoy8uJqepnyLnfBDuSDmk",
  "key28": "2tXCafjUe6kVEYcRQm43FxbdXxkVDo4RpVo9qLCJvRL4DR28jTY9BHNHKjZ7JHfLpibKs2n2h7C9AYq3CsifRMUM",
  "key29": "2qJ95cmQ2zjnKxcopFFi3E1NkkpxMobbk6PjRk72rHonmixTWz5BdMroqHkgMHL18HTieT63D2XaCK234WVFqRAB",
  "key30": "4EZvr7h3y5FXiQnkyDGC4vBL5KG7st85Hgp34GQQp8VGqqh4D56MYKxhiaV81CNyVM4zKKeyJQ6WFVmXyszDnhw6",
  "key31": "5b7hEEyy25PhhH6htesSau3xd9znhrcLHN7K2kHcPGtXw7nubJCEdRnEtFMkcJP2oBUuDUCQuEik5td8Cj5rPwgw",
  "key32": "4wNXHirrrpGNhJdrZ36twDT9WgUNYwEZDEqf7CFafDYk9ZPB5st4goVS8BxVnK6ZkffRkD3ry1GJckwVfbJkRL1f",
  "key33": "K3wSk1sgvdnhTr3VKQL9bs75PKJgC5KsS5rUMaEteLeoGooRvMjbArwpesaaLCJL5dA5TGJieip9cMbETRBaZFj",
  "key34": "4fVZKshpCArM5qsrdHPph7qKucY9ivR54W1tDi56RrCpRCD2uahfyNRVTgjAH3HGf23F69dyMuhBy9raMf1M2qSd",
  "key35": "4j98H1ensfyGYap7FkkNc6G69jt9P6J18gHZeYkFXqTrWHeKVSrpDGgktNJqAxd8dv8YPuMNzqfeXj3aQdVmYbbd",
  "key36": "48ZShuYKivgxk1L2uNgbQJQwh4mQqPRPJzfD5V2M85rPd5JCa53T9geTWdiRQ6aPcMH4VvCbGNg2ZcXVXcYgW3RJ",
  "key37": "V4DjmrRT3XHRLX27X9MsfMbWmGua7M97eHChzwQeca2u7jUw5M2ogwDsdZVrFvXsCBzGFddxuL2HsEj6Eh56MSW",
  "key38": "3r7CGVhocxPRT7q6CFy7QQpREyxB5ds3nHu7n2q7gSF1BMC74eQ8unXHkFaEFLrN72LyVnAbWvziMmHbJmWSMwM6",
  "key39": "4NPMew5EG5tfhXAsuE6Xwfa9gmqk95sXVJQQM2GNMxp9AYnvms2LLEoL2i8emMVrUoo3bPqcBgmBWUZUmkJhi9Tj",
  "key40": "4DxbSewkjZTkgYFTHdYDi4od7qKjCwxQxAkNe5sxBMJAmzhi9aCUtscUbKLHS8NRhgDmacCVEDZkCzVTfEdFNR2V",
  "key41": "2KmcDedAyu5YQ6UufBWjumjN46s4Fb7M72Sf2HYCCFB68UZTYMw7di87Xbs673GBMXSznonwcuvkJm8qwrk8ECGL",
  "key42": "2Cf6BVExBZjXamepK9pVNJStoWzauvPNTdVH3V2u1Ewp99rbzvz4Zj4Cqx58N8N1VqdDdH4sVUMeyUYi1nHpxeAi",
  "key43": "2yGbRhJBdiykD6FfQ2V9bZnyX5kerBLTY57Z2JThdTXo7kTDYMA1NxXVstUaH4NudHq2WxKGYPE3qq9KnCf72iPk"
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
