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
    "n3ZaCovS4EfWzKcMkrEuYwYDgdfmscjW3kfEpR4Ysrdkzv4HSVEJ87ZMs65yk8n2TiYx3t5w7tDkeBd9KH6y3oP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wngEfbKm4cUjqu5ZhxAXtTkrSQ19mHFTsPtzejfVqJiqLzkkWk5L9cv2G4LyovVmr91E7C1ef8XZEZ3Mvjx6573",
  "key1": "5SMAN5YFpRdHpi92vXiEMvqA3XucUmZhSzQg6FBTj5rgvkbwjtW4fr4Ye2ktUUohvSrQ7WZ8Q9qMNU2tHTVt3JDZ",
  "key2": "4JU1rscNi8GeassKEnJBVPoL2FvAgHAp4a9VmayGHMsaT8Ggmy3QZnAckSpjCnCs6b5DjHUQV6xLJJcxyhDhubrv",
  "key3": "z8yALhobRAQdg2sXXL7srhnqVSeaXTNEqqsxjR2j1ogMYcgrJhffbXsm9TEQHSz4kyXKmWNgRmSeQDcPydgVF6z",
  "key4": "3o4Q9MLR9RRdpGD5J62TXJMvAdShzeViQp6h6FK3QQcVb2mHoVHtQnHVWLPHdxDMMKm2QZ3yJPwhKxTFXGqyYA6X",
  "key5": "3eGtL9nAyczFGH62XTnkBe1Yh6d7F3b36YGKcU1GxLbuE4n53jZmjZyXvfzR8WNLmxHjhvpTh3YuLNVfSd2Zgdw6",
  "key6": "2VruX4SLUxsACXd5uVnJg65Eab2NjMymNUU76FyrsDYVCxja66PSmhW5DJfyFKdvAkw9vZQJsGX6o9VFwFxNTjWu",
  "key7": "2zJaPqVqaRiDRVYCt6Tk6U9MUCwrtniVBcCeRZZTeRHNv9Rpz2Qcm8pPyCrSispi6DVuuhUzn4mPihJ7ZzgHTUk5",
  "key8": "YbuKCC4MLfY8QvaAmsAACCWBvbER1ctJE8MZ8nV1gMKd9VrHWmUiYykJHKeepL5GFUCviw62wUG9N2NN2TG8tZR",
  "key9": "NtFoJKsvcADw4ZfGvk9aaKG5wW1jRzEtbaddCgCafsgrVgCe7Hhfmt772Jp3jtBTtAGNukFUfGbRucignivt8SX",
  "key10": "4hKJEK9D491Wf4hoE436B62awuzxL6Pfvt91U3FbRa4yrLFoKZhbNYoGRiPAQKpFw9FGdkgiRmxjjvFd4TWZcnoQ",
  "key11": "48kZxBdQ9UxopQERsd4nHYQGtf8zBfQu8iby3W3VrVG6LmexQrbsmzrcNVyEtSDD379gdXRnd85EnwhZ2aN3Rqqi",
  "key12": "3j2gPpUCcXcTK1AUxcECgh3QAgKhGVjhujdx1SQudsxeb1G7VJpQGChMwzB7bWqdRaWVkghxXRArLfSBp5u7RCPR",
  "key13": "3EKT34chAY73BY8AG8EimmAUAL8NQBXXH949gJqdb53WXcEZ9fLKfMqJ1gBxuwdjwDMFcyMKkPGkW5wyAzneyP6V",
  "key14": "4puZKojBEJq1XJz3E1yTaxCmT5Ge1pdZKxvCFHKHBksZJ8nqUW4eLkZwL554huWNPYoCKzsDsJGfuo6wvXi3uTjx",
  "key15": "3oqByQHCzbyDJ6Pkswuoja6nqC6UdQUdkP5WS5WfLUWrAmeXjpbEMYMwtDPYSUncx7mRX6W2UzQhTYp1VrfDR5GA",
  "key16": "2G9MS2o2xZbXRZmuXmWVxhX9k73RKDQ4NtgLoBk7X4GFiFYBQLfiqLfiinNF37uWGKSoKKvLvqepnfewDE2LVYgb",
  "key17": "4y8XQBYzrAUK2t2tqGGmsxWZZibXpwxj96ET2c5ED2MMAVcZJwh9pNtKaWwPgwVZttFb9o32X7Q8fCbe2VhAxetK",
  "key18": "3aFfbYHqptEyn936iWwkMGcoP6SdyFxfBUJxWqFgP9xhQqWdGmHNqJMSmtniNsmo9JppUi1Jj3xcak1PzVsMeCxX",
  "key19": "4MqyrGMoHVJpXk9ZU4b5HXdAGbieNNHWRhdagdoiTo6uJqN4gjcRMARgCNM5PsWRbQShHq6Xwcs9koU7DMMGH6V8",
  "key20": "5tdxTeqegY5r4x8qwc2CX5zzjchXd1tQ8gogqTxSTerkLRb97VwAidRKjJ2ATqZRs41bHn2tK3enV1HwzPKTHQEe",
  "key21": "P5WmYuv1rd7FZymtd81LRVVPiuQRN6qCk9newjC9dWs5uVMJzFRfUHhsZUj24KKndCZyaccMpkz8UCuDCjbRy9N",
  "key22": "5FqY1SAN1f29MjpBvK9quCimRFMfv78pMTR5C8nrf8rzDujuBo6XpHd8bt2fe2hs7pgUmwgCW8Jd1UcCbKqu6sLe",
  "key23": "3L6BebYzPfn8ZqZsPHPNERoXvYUEQcYABZm8LdwuJtoL2BhtWVKWyn7oDH6G6bTxfzMYJ79gwNzr9wzq1pYPfUKf",
  "key24": "4gbHAUEGeGm91PZiyga5b2wUPzxYdFRfpemptaMu7oEmdg1FfEWZSL9kRNoozzZDi4cy3yfMESyo5YWBFGuDDx84",
  "key25": "2MpnTgETpWvZo1dCvfHiQo5bfozcoWKeWi8rPCZVgUj38zzQrQ9j4bPxKRuKXtMxsmVu4fQnfoAgykAnEhoTyWdH",
  "key26": "4aRhi15u618nQeCVBQmJCkHgkBBZWe2228jxguBNzPYhqoq838YzNwgM6nRegvj8xAoSyFLzVW5MmnivZyfW8Bqo",
  "key27": "51zQVF4eKYXdUPh4cME2GXqJnFw1XF8UddSXSnut1ukdW4otF6r62rUaicTSgj6bgHS1RLpiDqQuf64moaEuCWpC",
  "key28": "3kVwTTr1Jyr6X5HPApzmN9LC5tSojMpLibHT5GVhrqA3a16AGL8bsj26xLsDWp8mNexnUznRb2frFWVfS7D2EkU2",
  "key29": "4NaWQxNbnY4gTqitU5DAcA2EXeaTEMwGJss2WWJC8kXXPMWB5TPGafzw2pLdtzJ4jr4Qqu6oUqi2VBFXQATQxUpE",
  "key30": "52378KC1ZH24rdg3ed4Mgd2vxAjuXXRSxBDUugfL9QMWjfLVx6aKu62RvRZ8635dt1nkQAGaiGBVDDDXWMnHvU6j",
  "key31": "2ZAQFeQ3k6JMw1UNWpgDscs6L7yS4DdQVpLAHPyXy7sv2HWSe3c7Uf4aJWGS81TEacs2UxHEfJzLXvqV9Za4RZzG",
  "key32": "4WMizzgBRVvkmXAenG2ZrS7zfVmxGPHRybkFtn322riWFjTe1kvdUysBBeM6RfxfYfKg1VeaKBVZryiw949Q8riK",
  "key33": "24CrX6hZQxf9135pLJiTBHtTbXnoxAAXJgm3QgomVqw8szVDAftnSReJwJWv6kXaBqLX1JPTSr5Ejk9f5uijXyUc",
  "key34": "3CQg8z4mvyfm68yxWe45hjSsCgHcGt7gVVbWGj4JVzKhd9WMzgSEF2o19NtKQyntWugtFB9cydqBr8U6e1GhnWNw",
  "key35": "yLvXVRh4mLJoarivy9cVVVro7HyYxfyXKwaJKn8hbu2KWu4ngzz5hskkdJer3SzR12tKEnsppm2eLdsacKUgUbK",
  "key36": "3bVGNBUcdzhww5rog7kLj3nJ6e17mKBHEP1JEsQJMHypx17tECw4Wry16a8G9YHdTtLWtCWn1n3mT8JjwNo34pfN",
  "key37": "5irrjrCh4Wva8FfpqjRkvZetjBtBkgYq9XZrA4Azdvm6x9c7ef6FGc5rtyb8a6fweuiaucSJesvSugaYV5ejAukp",
  "key38": "2BYrT4kS3M2jnmA4pnjaGNxgQQ6BMR6WiBJ59NcfWdoxNtkBZXRQZTUAtXxfJxYs8evum2Vn34Ltbq2AqkPh7d3T",
  "key39": "27Fgyt8TRhMKzLM8sH1kxywPJ3KuiT6nTyJ2jZt3ZwyXYG6A2zWqQL4TFz3HigDSAzuq7GWgtA4NFN5tB2nRtPVB",
  "key40": "27nSZCTAomwx2e5z1Mki8jCWg4JYessCBX27ZpHPBu4DzVsJqeLitsk28hNpvWFk6GVADs61FSGW32Qze3zvk8x5",
  "key41": "29woVGTHLuyk1GvbUhm5GwJgrksEFbC23QnV9Z3DV6kaJtPTevP79qK2Z1UHdNUwbCHMBXkUbnPhBGxuunau6FRQ",
  "key42": "5wmfA6CbCvZgVj8x99QEuQMbzW2bcXQxapiTtLBc7GjXGqjvsNt87GtyMKyt8jKd79cbKjftYCBZwUg14rEY5avy",
  "key43": "chvmt9GoCUDoKArPA6xfusidZwzxCshbLBWoiCTfgkV7rJv1E2K7tZu4DP9ZY3shZ6onoMdLdpoQbiTfQnRjvpB",
  "key44": "3jxYhMpQpE7q83emEKPvmx7azSvySPCkcWbwVrzXZQR8NE75fXzDnkMFNMUBMs8TvjayZ99dj9uqykp2E8RGR6yk",
  "key45": "5oRgGEKzvpwrQa73Exvm1DeiDr99m7zrVdkjHPYJTGonrD4796udzGp4XwZM957WXh62qbyGiGJLTL4Gh4srbKXP"
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
