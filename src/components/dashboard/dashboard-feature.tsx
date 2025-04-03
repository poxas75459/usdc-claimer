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
    "2naBWrDAxrqY1td9Jn8KoRhcgD2tuEEDqzcAz86TmEiMoJXJ1CB9EE7NjWF7iAjF3XWCpSGdimEoDScdREKdUvEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bwFPkg7iCj6LrGhzZxhLPBVPoQ9LJF8YmVZ9L6tcM2xNRnbnTNJzZfyVq5EpzY8tGnN5pbF28fHBJuExMF9ep7U",
  "key1": "5D524ewsXDahXNWyE1pviVVGZsaVP7eBVGm4LWCnDvZE7QVx7YnqdBAkJmWo7Ni4S8YnZvi8p6Bnf4ck4Q6giYP7",
  "key2": "5bhQ1XpkScCqNmZLDEWjXpVRtxX2w73Y44S4hbXe72C7NM5odyxH3YNEjh82uBEYC4yM1XEgsWSngWb7wZirLDoZ",
  "key3": "5gjLbecoZrmH1fLW6Q6EsVKb8qwbLRGmZiAjonxwqzaHdo4UnnTpqiNL4N6QJj2UJfDws2UBtfGStD7EMccvFyT4",
  "key4": "5XttxUkbg98SeV2ezFyeUheUpQiYR49Ghax9NcJDKHiXQwCVH9cL445A6MYKfi2rDee2963kkSembY5idEZSHiDE",
  "key5": "3Hpg3YjbEMJZN535c4bqXU3JxJ6Wbh9N9nSDCDaNDfR6oVjCa655C9bR65C9HutBQBvm5UQF8d9qoogAxaotoKjj",
  "key6": "2BV5PAm4z1JyxD2KUjMoWTdVbkPd94jSZrKjNk6hVRGgfqygcTgJgV4eXW8BFAEzF1poRxYzVAU4qMMTmdgej19M",
  "key7": "VjHjMoRBLWXgDFAKZu3oSzdrYMV2qoAb5V8XyNBgk2Cgq2M6v5wGY4aNETnmN2zXMgN7LjusWcHhh88f43matok",
  "key8": "2FoLV4QXhCEdTtXdPHSWaQMRVJHtUqipGehe1y6qA6CVkbf95yk2pZPdcLk2YkLwo3LRgSjPk4MgjFvnaCFcKmGX",
  "key9": "4E6wrzw3CaSC8zzTKkqdKiEGtisaUVy4PNnZaBqxrhMKT292zGs347z1odfHfwMhbHZo7cMPQYR2kXAAnCpwNkFd",
  "key10": "2feapMfnhoxr9NqqyZoF9ftWjzhk1xxZPyGMTAkjEbd1WNAre2fUikv7ZcvaNfLxue78bfFNutbGKbkp1fToqQpv",
  "key11": "5gQMccRkbFuu8HQDQuMMSv7xF1U2WhdnxFV57eZbGLPkC2CeB6QwuLGvQor7rrsWYVjHn7hvUof1bzcTZH2BGorJ",
  "key12": "erP1A6JzvyMd6JDwL37wurbETT9Y4d7kVxbDuB4omvgSYiqRuDfjzYuLXzSJHD7eEeW2Uc5dN9VNu6rp4XEiGFW",
  "key13": "45VSpMjooYKJc5qddwmVV7pTkrgMNv2UduVjqer5TZkinebajzN5xtYYefHqS55vfHHCkXpeBz4JMHjK8SMXs9zp",
  "key14": "4SigRt1dq5oLTvRwFrR6B7X67zs5SWZXMiPEpNeAq7xLYWHBbdgdPjL2oeddqMq3hpbkPritVuV6SbSZPDxdXFAg",
  "key15": "iZaB7uDkxBLqd1NLz8c3wsqFLs42GfgfxUBjLmpjZowrv5qSob36DdRh6JdryaCvUwfNum1Cpcw44ENPbX2YmaK",
  "key16": "54kMgdSciUrHvbZCwBiyTXJL3Vdv8zuP9ShrMdKzzAKZmwAwkkfXu9pSSndeoNzqUW9z1LL4NymejNM4YZnLxwaE",
  "key17": "3j2yNMVHPJA2Jo5r3h6yXvBA1hwGhJAdLUQ93Kp3baUBoFk7HdmQUh9iaykwBhMuNiH82dMCggLUQEjoHvBpndR1",
  "key18": "3qsf9AkrjrzrD9M9UpkPaP2tfo8mn4kcFdtTxncmRdBgNKzpEGgx4awr8Cmw7dYAPxKvBmoGk7Sc1qGVcKyUEmSN",
  "key19": "5jT41LC2LdVo3e2BJ9Z7ozpPV7FX9RKKJEsXZGUkau5CQ88cdXy3rco6PSMLpKqEEiratxT4gvg1WFDxcHPuVSup",
  "key20": "3svM85CfK3xkDMYBuCzDPmyXmPowXpi8QKoymmB1LE9zcxttztyg6j8xbavNuABhXtSfqdo9FnNRdvgUtrEstpak",
  "key21": "MehxUS6aSU6Uk2rTiYfh18tRDvFVgvbKyi3AjgBYXsNzCmKTMJeZ6A2QXDnVTVNwGqFJmdnA5fVJu742zTJLJqL",
  "key22": "3eSQUUXmydrs3Z7dWKRGYgwYZ1Qu3fsTHM2Ad72jRXdMUSzA72UFTiYBbtDLUr4GbtsGYAQ2rBpWUdDqrnjL4hp8",
  "key23": "3zq38NfPnxBy8Ux8SMHsMyZSCC2iQ5PbUA5xuJG4a2reY9dNQKa9REWfv41sPAxrWruGzttBvaDJ4mZSmZw4dXgk",
  "key24": "xfjCbRC9c1Psz8dEbu4cezCbHi3NpUHGLmZ9KVPpsQfXTthmNxG3stowJSrp72216YRWWKmPLA7aFmv8mH3GRgG",
  "key25": "4JCosvYdcTSZAWyjwmnPv9xRtJN5JagvZJ4pK1S7o3mAJUFovB27er5JvU1fui2GNAuZwyUxxKE8aw5KvEHzrXR1",
  "key26": "3gQa3oeB6VqMQQr6m98dtB4F8BKcYqLyi5ztX4LD2zcet37BCK5vrGogSf45pFWXFMc29nNLNpVsiARyGbhH5DiX",
  "key27": "5FjfZHs66WShUtyWTaVwYMWNR5wjKNY8My5MvzB7tKMhFNSVfbCdFg82A15ssMJTnMv4mvnU6TccN3DX1hzdvSk9",
  "key28": "3D4tC1DtavsGBXcJsgcR8dPMpZRtQm36skLBD8erpgLRTKP4DRpgKawL9XzMFha4xFSqtbFUynSWtZi2nvmauHPM",
  "key29": "43qMEBLmV23C9yBg9evFEDuCXgXkxsmtCKn4xVJpNaLACSQkZu1w4acZ8cF97TnygeAqK671hosu8E7iiwgTLGXN",
  "key30": "2a51tHoyCCGCXtEgpLU2bEfj3ashgn8sjxtzWwAjVkMvVURp9KsE9MKLyDRgnTqxShCDPVcE4VAD8dR8XKwPTptN",
  "key31": "5rnrfWu8YHxYqkYLjCEw5de5jJfMmLoCscoDQbQSXxegjkVEng8UUNypB9vSGtopDu8rvhZgQr8A89nAwNCfCNAS",
  "key32": "52NyBPuB9PmCN25BdyMqWWXedfGSiwDjFfaBavqFPUiNAg7T7SUmPbV77G93ft9q1dTn6BxNhLZvPv5bXJ9tBshf",
  "key33": "CjwhnZ3BbW82uuxctDfyP5eJzbrDR6UGKr8o2UjfuArKrnSZAQ2ssrvqkNxXZc54shkSCH8v2gr2vkrjaQN1AdR",
  "key34": "6iA1LH829R6TrRsn8Zv5pMUSbyimBJ8SKigX3ynDZRAi8uWK4FBmD4cpzhXDXR9wNqYyxwvjVNzfWCw3bbH1AUt",
  "key35": "5N1cvV8sQnBjCwMU4ZoGSxSQLtdpAfrvJ5WUcCGCfM1dX9bpUrULbYegj1izBhawWy1swn2UTT36K2HS6HwAUy61",
  "key36": "4hnyNqLLU5ak4zUPLEuaXSznHu33EACayVhVdagoTF63agNkUKeuaEuxX8LbZmcybpVgDoQirpYG7dHTbADbzXT1",
  "key37": "zaVTnvhbuuK8F3TdrJRnKpxoxN7wtBTyad7xt7y6DJCvRv8TL7Q8ffKr2PVVA4ueaqTRmp7cAHwqFRM5T3jLdBk",
  "key38": "2miXewWcw7XdmRyrEqWtTCe3bEPEsn41r3UkB2MmNEhB5qjeDPm7qK2nejwMVuAkLUbZhZxyxY1KpKLMTBZaqWJy"
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
