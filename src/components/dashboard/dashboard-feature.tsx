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
    "3ULU9KeXKn2q4FNu7YMVnLjCpc72U8VCejst3nmt3J6ZimusFudgmTU8KsbCc2ZQeNh14SJt2RQ9KGaFzFMFpFuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YBJKAUyNqBkMR9jvmJJHwzXEJGPwmnu3juEmxdRB9nSjrm4qtDsTPuga1eogKCotpqFDkxdeQsokjbP4aNwQ4AT",
  "key1": "5h6RcLLkoY6reRWtCQfbWATLR5FnFhJEpWqWtz9ViYjP7qcwyUN7Le47jnuNxph6aNhHrMSek4V2UgnBaJZNnsLd",
  "key2": "4LVz56YAVsfvezj7BJGaRu46HgrmD73KvYFvgWJnSyRa1iEcAyk6kwtAMPhjFAoVQ5s7Vz1H1ph3VQKPiSnuievw",
  "key3": "3WgQoGhxV82vvdmhnXRwdfHaVYqNotaoBKri91nCjTAMQvmRK5vC2S4AskmroF8ZzHxUy1H1oxpogCEt4fzHKArH",
  "key4": "63kvz88Vqg5Fwz9pPbDWX1LCWkMpvVxV2pG1VBo9CfMVwSAww415UUR4B3XpAN2YqXmZPXpQW8t5MFKziUZsRmEL",
  "key5": "4R3KgVKoXJrqiNxXJ4BcoH4FrXN5Y7DbAbn3iXVP8i1jFCdc9Wn8QRU5kFCPMzRTjdPi6PYVSG9RLtBm1MwyY4Xj",
  "key6": "Sh4VyCEpQznxCPuAKCLE8Qociz22581EPHJw2izPrCYE3Ykpizeobct89eExVwWRAurtFQwzZmpDvdsLYHZNWRr",
  "key7": "2fWjmRrVTkZWmLqwwshaFo9gGLF8zSmruinqncB98c9KBAL23tvxd3tDq1MipkKHCvLD7Q1hFBP4953GqRXYTTHf",
  "key8": "4jJxkw8kPPXR9cf7JnagA62dS9u34zsziH3oZfiZRZb5URMabx9gTgM6WcgSC8Ma4TbhENVMfSv7kUsQN7qRD7m7",
  "key9": "85FWbnkB2vh63A2D5GLRx2SUwko29zGY2YfpHVWMrRB5XPV3CpvZUw4sV8t487QH2ZqcJSMzf9E78nS7XzQeCSk",
  "key10": "2vffYmNgWT99xJ85ykkh9Fn6VsB9wNo4GY9kVvjsw3YvH35fYfqWCSV2nzZnGU9JxBZGdJRWewfzBp2mT9cNbucx",
  "key11": "5ckvodB5ruTS5g1zUcDjSBMgDMDv2fGEpf5hRZhvBJgHpus9eiBPrdDHjQiTULMnhFGzTD8Q8556LY6Sp5AR9k2D",
  "key12": "4GfUbLjbeEBqZA216s8kPHCbncqGVkgqhfW9tkn791B1cCZHRju3pZBFdJmT9PYNL1SzchsmQWafJTA1is48xEKj",
  "key13": "yHz22Rmddy5EZpcDSdFTCqNaxqRSaxcSGZY4xP42pjhfWTYDwKkt7vkw3By9SaF6daQ8ZA6kqdo4tRxuvgA15i8",
  "key14": "5KMJPpgAbGa6KiDZTyFE8TWZ5NWc3qYytTfkRGWemm9PNp8LqDDhfiiEUWRcWTHQLm3T16mnpjfNEWZqizEaMJfC",
  "key15": "38tUdew9moWCR2pxfv8EQhkUy5sGsLQHY1RsceL5o7q3zzYt7MLvFGErk1hc9LHTUwuLzjp6yksgmt75KtSNEebT",
  "key16": "tH2Xt6DK4okNJyt6NLDvVWsvkLYet35PmqTJizWFHp885bBVmyZiCMUEhyk8Y3A4Yg4sTLRw47yPC1yihQDVKdv",
  "key17": "qgCa1Xpm9JFmM2hXNV4GAgB1eXfUp7vuq582ZvADcmDsWD4n2knms1e1ch9N9Mp32yWo7rDXDrova1XqkTnes6j",
  "key18": "4wBovK4WuZFjQuJLnqbsdWzJ4qsRvnVE3cX59L7Ds3p2iGyJeuvEs34q5HDsrcvh39KTrseJKom1BttV1Quvqtcs",
  "key19": "47bmvDrKu59zYAaM9MWfeEE7iEzntirVS3Psr8zN9mnTUwsboKrFXH8NkK3cGxnTX4Kx1jygfJUjiTDvH5XujFc6",
  "key20": "2fsZSHZwTdS3wHxdYboswmGXeLePV9yvWXGrDLJk4hKDaPFuBpTtTqjigK1ZKbbEao9ijUjLnebuM63PGvSCYs8n",
  "key21": "Rt1osSCdgUatqgeZiRZ7p5jpufRQ9Sn7AaULmqpBBujW5oLLbTpWacZBS5qii6h4BxuH6rTRyXdLFPhux2YTgEG",
  "key22": "5YdsUw2U1oxi7zrE1vPYfVxezwgRsApwfiiDZzsDy9bF8yaNSbyvB9pF3AiKxu4mKLectWifGkTZgNsc8Q24Bx8U",
  "key23": "64URi6x24cLWEsMMiEat84aHZWgf72sWMSCHCw3vpqdKnyGGCwtA43RFZtMA8LqmgNVoFXyZqxZHW2H96pLV6aoQ",
  "key24": "5guELro3dY5EHjfxAUHx1w3UpQ9KqBd6bGmoxmTq3mEuGnjULHRxuT9BgsqAFr78Ze9HKdb3HGTekVABSnknhE2b",
  "key25": "tdsDUwW7S6PFxtQmUKp2r6GZy2oX9Ca7bPPS3RixE9BMs4dc24uv3JNjaMy3kXzNCqzDpK9wmVaQfnAqnQYocqZ",
  "key26": "22gY7n6fAF542jfxkqYQW6Jhf9YG164RD1dBwJEXEgtHXtYbDHy95QaM2qFcxDYPok5z4YAaxz9FBe9bn3akwACx",
  "key27": "2sTZ5ipZ2spdRJ6G2kY3fQTjwjg6wjAnrpZCBHfntsBaEtczSixKvJjpGuaHMWCimGdDHDXH3FSRZwMBFdTcwWd3",
  "key28": "4R5N6h8qgwd8jRnn9WGDM94cZLsTRuZNAKtZxivX5XdWVy9qC4oxPL3EncFkrBYkepkB4VQoXvwVHsK7s8TEcQbY",
  "key29": "5qfuMc6yN4mh89zQQcSkbDsFPhqUkr1MMpTEbVbxFVSVtCF8iqEB12rz6sHaVA6NgBmJDJG2KWmsbmWVysLB1mLt",
  "key30": "23FWook5RsgJKzEvifJhXDbdudZG6Zvemn3BPsUiZkqEaQr3H2eMj3x8H5cCdAtYtgcVZJQeAurfxCFr7yA2ehhz",
  "key31": "3as77xG2V1aNVjafCXx2RYwLEWspDaWuvMps1Gxu9DoiGmGY65x5pAYfN5ehTdYxoqh5q8agkrzZUpvjGqApjGJ",
  "key32": "2YReegkRtGqK36du8UVbQD4t7YzqrSj4Kp1RrLXjGJ91As12P5cCYuaBzpRhAr5uALke7jFZYbPu2U4nZKo6fiGo",
  "key33": "3vpg9EwSAJFdbnaeMYE8S9RsGHwzciP195oV4UsBtMcS75uLb6CJz1FoCUc7x3Z7SCddsjUB4u25UAkBvdUBbLnC",
  "key34": "48d3DkyqhKTvKz2TKo7AXRD2BRZqWZ3orcjNDHNVbhQHtnDJGvZUV4F1gaUpDvTQDqp1MGJy46PyFkAZwkKyYftV",
  "key35": "4vRphXCjXRKGXzCPFmgqAi3SsbGJvsqjrLQjD2qrM2p46JAQCsiNpvztvBRmYrLw28s944vVf9ykfYzNkXqvHCTa",
  "key36": "YM45npa6Ja14KxfSq1xLeDsYsjD2QfdLwapywx38MAww1QJFgGC8YYMaz7uGV7N8PpG9DxvTWWm8cc5N1XprDPV",
  "key37": "2v4iPgsH3BqZaQQNezih3fPgXJoNMwGSZ9gayVJTaqkDSeY9YrGhC85sLCvNeX4Vhktcb45sRUk4k2b1m4iXHSbL",
  "key38": "4ZjT9W4yMHinwemNqWZ8hRfT7J1NoC66uer3vg9o3PtXovSz5MFa4hp6b56a6FhQopQfvFKpUwFinNnoGSxs5J6U",
  "key39": "5mm32ZCqStuPSKzdZ6kdxopzavLuh2KDod2yYn5a11VFbbMnYTJyMuQLuTiaAbLwXE3cvhfzPBUhCJajpYjDWuHu",
  "key40": "4rsv6ZmK3M1kowQKv6Mgjsbb9ZLPCR5obBsS8fwnyASUp7gghdJKExfng11rvw3pspJwADwLk3B25ms1swc15RCp",
  "key41": "3ZexhdVXLReqHAmMwRbC7EaqwLqAUsPj4dZnihg7veBACg9CQbFgKyuobhiWKJTbzZxLVHrfvoLXcEw2thS6FkTS",
  "key42": "5Pn6wHfbJGsRq36dfx9evz91rMwtkNxdhg5YscirFgEVpn2hKTxZUPX96sKANzKT31AGxwneeUxg3VLMH7qNsNL8",
  "key43": "315cQ4xyRShT59tFrC8GwMnZvbQfUKoXeZwtD4eYtygrfxmFd5EmzZLQdyqg6hND8BHoAiJmXUqCHHm19G4pwK9j",
  "key44": "8hFBb5hdPFnf9pfrxMD9nqrz5pKptwxqSpEeKMnoC6iYN6uonUa4ngeQfCFdEeFRtjG4S8b9hd1MpAcNw3H4YHU",
  "key45": "3mytJtqneX35GCyAxiLzFBFaWSott1G8rgv23ed8qg2UXEUCPuhmQfZ4JsgL1mqTry6sa3iNPuXr354C2GCREncW",
  "key46": "4HBapH5qignEbFRw3piNLBFgKb779Sa3crAJtaD3mhYCbHLgVrRVgU8ESRN9z23a8hmUip9fuu12jinkgzzbg13E",
  "key47": "3e1WkbY9L1kRJBGQNFRskeh8EnhKdUGZrBUmjH5KLbXQqyF8TQKauEHmp6uWGjUrttf1VhZNyXhER5vy5HGJW38d",
  "key48": "3zANqM42psA2XEb4eL5FQS4H9KxpmS8BHtb2RBHJZrdFzzg67d5XhUefcWwKMR1eo67mzkViMYEuQehjBUimsSgq"
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
