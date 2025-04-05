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
    "5HUJ6RCpjuGbtGeazzuczemyQ9et2ySx2PJuSh51mDqjkMt7LvZDtLsZnKPeZPb7nDwc6ZfecJPfuKnDGdPe4QBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sPn3K2Ku2JuaWY5socfhboc21B3CpoB8rG4aLiDMW8Nh4jq3ULoDeTW5VtFHa1YeeuirbEueNdSs6KjehxFmD5k",
  "key1": "oq4wLRusPCrxSntJvEnbR2PWWksuj6ytiqPuLJFZU9xmaWyRoKJUNTCbBz75Bt2Kz6Lo7VXqPA4CKwkzgDDkNs6",
  "key2": "eqzqNWHEZjCnD8GqESduGPWafaMZvx27kTVKYcqMjjwZrxm3cXmFm8qbyur5a5epgwD5JUU9qQxwbT9Jmyc5SUJ",
  "key3": "3a4Se8b8KpmhtTHtkBCm3UDbAWVVHThx4mKX4uXcKLsHC1BQX17P2LfaubsQdKxeLXKmHqjhh4ZqXDCTRe4Fjk2F",
  "key4": "5fzq9a3Rfb5jeWQAcMAatkMAzEzU9PBY81STnEYT3Zjr1h85bjeQDNBmuQ8p9RjcsymERzQ5kuWFsFqvLJ1Wpxdi",
  "key5": "5N4r6AdSRUsknEvCYSs38hzDPceBwZZ5CrJPF5Zwycc5RrRRpMQQKyD3ZfMGRUV2cUoRVzW6L6UFHDNpxiqN1ewD",
  "key6": "2F3ahiR3p1yKX7ZPaiAMfzkdak2ajqTJcLovdqUbFHRqNzpNTZTgx7GkryQJpca47rKtni5Fs76dWr2bJphSZLSP",
  "key7": "3BZUWtK75g1McbEzadQfGiBRdynK2XHsJmAEG1xxnhS8rmw2Myr9EXt9PNFaycL3bo4obZKHWoJ6tHUFo8HG4916",
  "key8": "2SLmRm3WK6bWFZ3pngBjFrfgai9rmdWQjLHN4yJWh3LfPjY9LfwKfnMjdtJmwRkDm7cKKzmmYmjLX5nJQGPTDJn6",
  "key9": "4JeL6bofNikLSszTmaC6tuoRHfQBrvqgAkk2nQ7EWyuiGwAxu6y71JVzv6vMJgcNVaUsfHEbCqKFbb11VRRA7CHh",
  "key10": "4q6xAgV1FtxBhAgynARZUcaZvBuvXTntWT9imZ5SQQPawWNnkm5HQ1vMFSy8R5pswXEBeZP1ucNLNzkyC3586zMF",
  "key11": "2fJZ2nfi1RBKD3nuaZJ3iRHpHCPgWm99dE9GHSvSkBjZx8DNAiAsihPg5e2kAGVbW441ARQZtGyvfNYMwA9iXSBA",
  "key12": "3naPBgGzagfeh2TBX3T3C5jiLP2WnRH7ojXnsgZu69tKwHwd6YA1mpCHQJsjUKaMWWS8x1osqJrdEBjJHoNzFgr6",
  "key13": "6zW5ARamFtC21Y5fHFU2BATWGbV25gpJjNCfHLdt2NPgpRCPu5TgrMFDzgJvA7AYdvAYas7FsL86t5aDndK2Srv",
  "key14": "2uercx9jiEtzPaeewJdYRs3nYjVm22MdcKqXPsXEgrcWM4b3isKutEs58Yca6AeR9K9qqMtxQSdDtGHQiUwhc7sR",
  "key15": "2CcrAjTPkZZoxXEbkH9y54hgCBDMyubiMsGoETWcP27nb52QDnEe8kiwqhhqpiBiSpR98oApLkBPkEHMdzvay8i4",
  "key16": "52WzYzofUo8P1bJGncQA5tUQYqQs5MUA2AHno52a1Ri8iGx4DeUi8McB1cqwe4MXzMsoPX5Fu8SCxJXfcGgg4jEq",
  "key17": "4LXoxAbJ18bDAEZh2vzDP2eghJjWqivYK2sd2cPmBFWFAC4goaZeq7PG6qtnX5kv2rGDq8oJwssCybwh43SmU4VJ",
  "key18": "9tJ8kYVT29B687UsrFB9rkHJdEo8dHHd2s4HmAzB9mh7cNM1CyQx84yams6Ypu7JYa7od1tV9uC6cBKRM7ppzBj",
  "key19": "292iT95nhZB1vfWC6AX427D4wY16z1VzBXvNFHRpGCcqahvuQq78mx4g8o8zjBHyvC65SyPpy83FPDEM6Ypkg5iu",
  "key20": "4kMEqH6ee4uNMM5ezotgQX4CHHiQJTo2fNG1CmtaP5VTwSRgyfZzGZZJLmPZ96oAngQUJjxnmDHXaYvuAS5Uouf2",
  "key21": "24prcRBrigTGMpJMwmm6YRHD2P1giDtxmrKUhXNLsRbZpi3HpbnWCdThGdViv76vCmVdnKnzjQwcgr5oPUX2XQVT",
  "key22": "61znERU5XCD5LHdkd8uUQqSEny6kFx7NWMoVRoSmMqWuFmg6ycpGVkzh2Lb5tTSKtGig4THYdnqSobXTbQPqJWok",
  "key23": "2u1aFtoJ2ppxgBxJwZs2GZNjfd6RjvezPs9wASSTSDiFwuXBG2acKpnx4rGzSsGC6re5txahKutTxEJHYdg1PMhZ",
  "key24": "47AhTZ3qGccDNdHbgtFYCraU9bwGGSUTMHU3kGaQqaDB5KkG8pnqsGuhuRvXuBddmSRVm6i2oLxzmKHFYkcXeRVz",
  "key25": "3Fd1WtzL1is3JCHBkUPcwKXKccUF5XhSD6nJVDoSGr14Hik8zrG1C9rhuEtyaaX3ocSbUANpfRCTZEwEXAgidNeY",
  "key26": "KkXpLsVGhYs2mbP8cLrJx184Xbz5XxC261PfkzKi8Y5BmuSuejAxLqpEovSmXSp1WMtR9XT5KdrxaNXHqJbDnjc",
  "key27": "24njKnfRVqf6abY4u9efJuEXnyaE5v8LXiqL3yhh6CsVJRN8a2MTVRDmbYaw5roxTT3z9hpAEJ7VEDvxe7qGatM3",
  "key28": "4VGdcxTqxaqpoy8DQcPFtNJcoBgt3UuJzzAd4NYDcDsV5ZtU9z6wCAaDfByYemNUP9q8XzM9hjdTxc9BaLqSnq83",
  "key29": "UeSPp18LY2AP2eQ93CcXFB92eVCXAt11nXNXy4tnqv9eGch5G1TABf84obXrof1qPKbqJeH1vnaacmC2s75EbPn",
  "key30": "4pmZ4HUg8f3LtVPwcLTx2XuiiJt8EhhpVSitkHLFEXjtgyu9NCVez15woiFDXSfX9XnWr3hH7FyGjrYxzgan9jkJ",
  "key31": "dE5oYY48ULHv3PXWvE5ino2nkta7VVhJQehED7G6A9zDnCM2eown9vmAiHfL8srmkiwSgAo19YTNbVbWjjB3jeS",
  "key32": "54gZyoautQKvBdUWjUCgpFwXyu4WVExhCiuz8QZ4jTSguqawTESay2iVKudg4uUGeLVu8YBzaahWDAd39ovpMiMe",
  "key33": "4Xr4s8FVSLTsFiKgcSctxLHb1ou57PpFkyur6Pjt88sznaby421LtXyg34qyUuMEofKWd3JpWxqZQvFQwxaq1CZg",
  "key34": "iKmKpcXYQMJejcyQ7tBJ2eysPR963EwzGbYgLT3h1xZCu88B7ccLFGMsU66BKM1zt4Gx2M1yEhMcBeg49VWHif1",
  "key35": "5HnS3vWYEgrpV8oux6Xwua5CFNdUxaroXuLetRQPfNpoio3AsDy6AteRKAk6YAZJFfjRmLdQ8axuHCdHptZy4LyT",
  "key36": "5pZazEV8McutGQxWL1MW61sEFzzDjVMaJBbJX7jDk51Q3Y87qRV9MQf7x5knFFmrxmLFY9QsUL4Jhi3M73yPaoLt",
  "key37": "Dh6g1v4vwakBwUvvSJRXc4Pjy2zfTRkfojtj8GJconT8vtjwSCQYb9X9KLLXkGrok1qfmCfPDwNexf1rn3maCMX",
  "key38": "3Bgaxz6BajfzQD6o363SwTZgFaLkYXx563BeG4TDJYrUmzWgkCx4Ke6tjN6qRmknb7ZbECsTF9bcYBEFRdVJwUV1",
  "key39": "fedjmhUCEVBXHKqNh9bdnnvphaLHDuR9pZKQ6SD7EUzEJUFqE3DXU6sJWmkic1y9fkRHS5E7sk8QUuNHVPyMV4x",
  "key40": "37oR57m5SGkWDSW21RWj3z7SxhP7dNd26fErLXpLd8oXaoxvC8dFQL9TDMwfSb4fzn8XGFhA92yi4nYHFeR6YCa9",
  "key41": "5h3Q7RDd9wm9vA9S3TBiEMncvt7ojPoDcU751Z3ErxgAiUELs9Baxf3eXnGknnhVjjSKymtdhfiapNRd8FqapKAP",
  "key42": "e2FbQDuBJjMafyDSodcDLUDmZeeqvYGTpT4VsrN29Xkw6tZZwSrxdEYLNfXHBZ7ebF1ud3LDXQJDXpo7j15MFp6",
  "key43": "52p1NBygh2PzfnENYHbCDUx22npHJsjDRozDi5GMmDqX3xfSFLZNCJLQKN3TeMWC4FBsZraTSbySps4yDmJwh7n3",
  "key44": "4PHmbL1yVfCBLTWjq211Sno1vgXMT4SNniiS4EDheg9PtY5itzjQQL8p3XDt5JNPmKvq8QFZbgTmKP6qaXbo7fSE",
  "key45": "4kAAJFauq3sygCdzvHxpj4jh6QVCoQSSeDz9eUWztuguDzYyyAWaq2hdF6zUwCr1LDMuz9pqbTakqFhrQW7h4M4t",
  "key46": "2PoFV3DrD8npdyk8X8RF9NqRWZaiNB4VLSG5WQAGsLU7QcbAgE5nvGXD65Swk8aaqentFQKiaPveRfNdUiPhbU1Z",
  "key47": "4JFbsszVXRNer2kceYRrw5x5Wu5pndb513fktaxFigxGeDNjzNStU8Cxsn7hfPHiLHda7ir4Arkh9WwZkGZJ6Cin"
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
