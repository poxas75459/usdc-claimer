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
    "4ptgrQc3VHiaogxQrAdf7LMdja3BYsjP9BahN7hfVc4J8cZh9SZq9rG5kMYLNPUJj5y5U3jQiwiGmSBCjwJUQKVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uELXChJas5ZGSwdTGWedJAhEPkKB8oE6FcJk2wrkD3J2m92Br2zfLsmZkQAbWTMfVqQWUbfyT92CEgAZUtQc7vG",
  "key1": "2amRB1xG7eHULeXwxKTzeoTspPvEd1dVSVig5L2vMYyCAe3f29s6xnBFG8S36QqWx7Ke5iTmf573F4GH3L4VvWjt",
  "key2": "4bZR9korzVX7KJucaG7hFdrompYAZdawSzFCkx4KmBfFASCKdhwrHxSi4VmvkVeeC1WbfzAQsDFKjU3iDAzjZbXu",
  "key3": "3YwL6gd46Z6hikPFQZ1EHanaeLwWvFP3gUhDrRt2833Ze8UJ6PmH245F5NxzhcJYvQSvwdDcjkPx9vTXKEt72ryS",
  "key4": "4h8bZe1oAV5vCZJd8EFXy9zjXcaX1QXWDF6iKimwfddX8dNzHB6AoBywbzbfU2yAMwcthb9ayASEuxC9ZhAm4WHx",
  "key5": "Pp3RH67pHvnu8E29eVgJfyxcSDZuMk2y3dozvMQbErm1JXq18wKCWP1HKhkekwFxbRSENHXRUfY5CSFuw1MH8Dn",
  "key6": "3BjLfiVjEq7zYCeNn9cg6zsAs2zfKCNS2Paf7Pe5QsJm7SYWYX6gCTrJqEf3XDQhFesgybWoZGkcLrw2GwMt4Qab",
  "key7": "2cYywY7T4YDxdJU1uZhZG13KRtfTrVGVyYeLLmHQo5TniFGWcKjrdWjyEY4NWsLsr3QxLCifoxBBUCdgwTAzteP7",
  "key8": "3jeStUFV4FJTbqfdJpLi8wDypW327w9CGxPfnrHEwus5MtY2CyTcUBHJh3k6XStBjD394MrRVqbQTMHhTj2eLXJR",
  "key9": "Wz6H9PSAp5jnAEtYdsFtfNqevh38REc3dvdogiysmPSHf3fuY3FePsgESx5vsWRhRp11pMaSCjpSD1vyfcQYWty",
  "key10": "DZjigyQyuSErk9rTV4CBYJ4BMg4rtHeeLHsZ7waY4Yk3kmfghXAS1b6u3KmNH9jrex4PMGK8XLrKaTYyM29HUzf",
  "key11": "gh88VFDcTFTe4tQwTXhRsrxvjHFneJeL3w3C4paUeQ4p6p9Smf4hCKnR7q8YAGQwRpBa2gwGj8RaVHKyRABknjy",
  "key12": "3tHSLBHzTyTsHysepT1LmTXbHbsFo3yE58hFMhFL5bhGMRmKBvGR7M5RdZHVEatgGHMREK9vmEFTb2FkUpHgrofB",
  "key13": "2imFgUKZwhbfQBLVokbmfH6NkKTRHUm8EhPMAfqSrR5JX2tzugZJavLxsjDBJRSHjxJvFdXN8ugUtfoCZ5s1tuXg",
  "key14": "3HRAAjATqwYHRwyqrtNw6nFJ1xpsvACRUebEk1moQG4NPtU3ZW2kd2PzL4STaFZJ3Uyhyejr46T2dhBWuoXxfWSD",
  "key15": "3MBd6AjTd4jRC3forqt3vY8zptXverbA7iBSQDdxhsc7NEZsBobE2y4mMM2sgw5RSiY4RE5yN5c1aQ1ByiLSAJRk",
  "key16": "3np5bB9dJRqwrHgqMnFsdZE2dhz969QCKwJhpuSn9viAVdL4Q2Uuae3ENpqpFGRfyfYZXaYkB34HzK7Jc5ekKFLu",
  "key17": "UJ3swhHqsrRXjQ75NYui67ErcsYz1z8xw8dohbEERGzmtyAgiuAz3kBSpx8pgTyMEJjLWidV16Z6aQnJedAPCWz",
  "key18": "2Z9tjJWzr6r8MRa4aSs28nZbPkAJ9G9FxQYQDgRZ25EMqG8FRhr68QvUPLsqXYsXpKZNJu9QmeoxXa8KJhiYiYRK",
  "key19": "67eLb3SbtYHr35dkUdM6bHXp3BNiAcUwdxzYDEkBS1fawn58SNweqW3y27Me5HcK6ev99YXagCaKXMNg44dTVFfH",
  "key20": "5D1QbtzUFHF8u6H6mNjYLDdnVziWCjErKRzHTMs6RU4kYkbM519TEiuqpfxXy5UkKRUZgoiLfyuwcS1FmKbXW6v4",
  "key21": "3EoHjCCXJ3XHGFkv14ZTj1Ny3vRsxDubNkXkiTf4s4zQGQXAMkLFHa5VFzFGJwUYuE7FCW4jy4FW2chK5kALvov6",
  "key22": "4Dfn3hnsqYCBNVK1QFdjpLe3Q93r5M1zjw6Ub1ReopxhHwLv8YAdxZgyL3RnXL7YgihVUPE85SaekNz1oerC9R33",
  "key23": "4LswEBfc5VynTBU4AeHTVbituW1rBfQtsVhgcAanGZm98J95RRhcCeNygX6pGhdQnm2H7kuWNQBiJ4FuS5mZLyap",
  "key24": "22SUmhatoyvHxDG2n7MSWQFQY9WjLPdMfXTbyXtCP3TzsGLPLxF23ZdGH1wEiKJQrr7PVQ7MDvk9U1sEmYNMrtrw",
  "key25": "3ook7DvofG6UwhYunJ9BdS2aF5TjvginaSnfGu59hkWMM5EBHD1wnsfdasDTERRVe6bE4mnzui81iLrHLkqbYjQi",
  "key26": "5nce7cxeuxaU7jYNdMKpXeU8pRm5HCsLcfPQu5fg7VaXyCejj425bwg2jerktQTRzVn4naZbCBUq6HAoEW8qFUTn",
  "key27": "4rNFqkgcZa83wUe8fungsHutZaYMXGn1gAAAfSXjD5jwqFnWtJRoguk41x3fn88BAtjfRbUwEMX5o8joyH6ofUxi",
  "key28": "2dJT3iMD53pDTwTgK3ZM7nnqfUQNY8rEpA3ozvmtL28bHGh1wjZgueW4ApHxP5bAiTmbJr3ragkc3UcRKV25wFYQ",
  "key29": "2UDongoPtBgZvJZLPTAiUhEERmmbhrnVNy62LxP3RKX2fRPEPLByfxt3yStPJQZpanfEt6z8Zqfz8ZcCR2KYFD8N",
  "key30": "22eGo6uDMevqz7feDcCkyhtrq1kV5eMy4JQzZ2yvBMcUq3LKSnEF1p8eMfV3tNnq8Fns8ddgxtaBYdGnrKdzppaa"
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
