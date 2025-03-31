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
    "4E2HnKwUjjXEqT6A9Fi99z3cASVwAdsnL8txqVDFZGGR9tfeJ3CtY6dxxVkFPfGgoVb74YTpm6YzZbruKgkXa3U1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MTHt5Zq5T8aVwzwU9BFTV6zm5iW1HGRSCX5CLeZtdK3HV9jzBUdgh1yX88Xy3UzUieGh2pphA4zDDMmG8R9CGpv",
  "key1": "5mjcZmRnkp4eksjUdMf2pnwhZrPAVbMkN3RgL54sA6QNAGqSjhKCbm2jDCW7GrscAGSGNffUQK13dGFNgekBweao",
  "key2": "TE3DmiyqfZdmyc8GPThtExpxL83yaQWU3aK4NWin42shQPzoKYJ6AY5iGR1nfmtsJ7usunJNJQfGd4pqswmXp9b",
  "key3": "5FifSqiJDak6BwpEkQWwXrhhywks7kT25Mofzp61dGz1WtuYaVLzbjj1yB9uvZoigzidG8zRwsnHDJdK3qE4BdDq",
  "key4": "2j6BtBCL52Ae1vQLxBpdTZ2Aaf1taJugyufoHY7t1agqFZNbyySQZFJHb5S1dDDZxSUxTjJ7x4vKtj86vrZAH4fk",
  "key5": "3nvZYp4grQDtNs8dm6WnJzYWdLgYqcavQgHCqvY2BcnMas1PHe64Hyhbg8ReZP2aPW6okfeEsyuTfw14GzV2RrSb",
  "key6": "96irdJ78nRnPGyE87TWhNQ2qmHqB5rgLDe6NeA2wSWaC82gaPVCByqj3NCuPF5B68ghGMed1YoWZkkCRsrXXta7",
  "key7": "29XvQSLBNznnbjsh484WCcfF4AsJuvo1icK68YVpPgvFwKHMhvRhewAd4kHeVP7XzVBTup39T1kx8QuonxjC4gMn",
  "key8": "2ZCNehWH8yGRzdzDBHEr8if8S7sVJCF5nNWdp4WkE9RCPZYuA381bXxWj55YnPek1kFvonjdDgRWfKMgCUzmRfNr",
  "key9": "BwFXiFyowe9LRQ6tJPpa29cJweygaUM1qsBgB38DWrYy1cwcepfVxqfHPwxSKCcYMnstvEFJJc5oWqjPPPm2StA",
  "key10": "5Jjgd7W8EX4TTM32Z2FyEvoHFFwd5BveR4MDXKJS1nP1MTti82ytsgNgNdLBg8DGeYxevDaZVtWZ7fkxx2MRJJKC",
  "key11": "43sXnsFRbSCwY15iVC22BG3HLMQEdKbrBujTxw94B12d8BhCRjn7uDUQo6Q7FQVXRSe4qxaGUYqJ1mNhbk8xbnpt",
  "key12": "5v2puPAZCX99ceDcwERvoikvs6jcbhVTVCvtZYy9qrBKFuAjUw8VwZJWbzLkr1fxG6Ys1reVk3ZrMbPXpjzhjunR",
  "key13": "UbscaargSK9ssjekJBYHue8bmMg6mdjYrxL114tuhcjHrDbHdTEYkByFwYrKWZX9Umte938QA3LTL14Heth8vie",
  "key14": "5wz2MtSYeAiNoStmLwY3LkDTVzjkFu5vCfXo8vxHBw5iQ3Y4FiZzgY9fyPJxj2vDwApXFJB3m6VgWD1V1dEYeoMz",
  "key15": "5TURsuP5andD1rSg7nK2Q39uZjyBAqgcdYHCxsPh6WnBDHjGwE1Ba8dfHD2K6QLxu3wEuTJNzDe7dRmcwdjqyjAJ",
  "key16": "5Chhpb1N6cXrxvyWv4kRT7RoDHFVwtfHcfMmEZrZuvyW8cC9G4jgEKk8BiXpfdwwFHScm8fs1NZD66hdLt1VPsUG",
  "key17": "3TjoDqGqLMf4f7UGVyQbQBY5ngKZ3VMBxgENoa67wvA7DnNzveCsmHZctMLhmYCFjBQ7uVBzLeGvZGY7ggafU9xr",
  "key18": "snoZrZhNkVorXhhrFMeVAJ4KoPKuVBJHsXwVJZKrF8vnZsrYuMxrkBHAx7Vb53rJv8X6KmqqFbk3GazwB5T1Frk",
  "key19": "4VPv6d2DJMXZZMZPBwaETFQ5H4tpix8VcTJ2GcQKRGPubBMdZj5qz5Nv5HpRJk8Ed3tKSGfJHT2WS4q4gpakAxHZ",
  "key20": "3g7epx7iYjf41pKDdEZMhgJBJstD81wjESgvJePohMu6AgDdKhmJni9rXD4vEKBTWqY4YjY8VDj3o273fJsZrAK5",
  "key21": "2NX4oLqXUzVzqHKrYwrtkTVuM7b1FawZb9idpUppJLJw9hyWuPCtYyWPhgyghakWaaz9c4yajxzBkp8HgXBConAa",
  "key22": "2CZZyqs3zKPHu2QYopPZGvzztJ1umg9bXUBWMJNFEWBsPFLedwvUJwekNhwQZJ1QkhpjvRsSS3XTvHUahAATapvc",
  "key23": "5ogYHeqNQ7sBah8W2bBrPwB9PG97wJtp4wrJXubumjjUEX1HN2ZnqTrqEhUabixwMCfSuzdcKRES6Me3vjUu1K8t",
  "key24": "2RRWQjQJjY3JCwDgQyvTkrUeTD9qqoKfyBwe7E5fK4vCjnyXgBm2Qy4kp4uWv428XgYoamfC7DjSoMTZmbBVc93b",
  "key25": "365Z9YU9ZrEJQoLKNtEJepd5tfZ37ArpJ9aVd8rwPH8uC8QL3Ksgv8fpjfJ9PHmdwRs4vmhvvENJpui1vL9GfjGh",
  "key26": "4j3KeAYdkXYn81TiT9WqqfLdTdJgjkrDWVU5d22Y6iQYpyt9F8sRyNUvS17kxNtRLgU3oiAvfrBCYDGk28pobQH2",
  "key27": "25vVkS5XuFYkjApdfSxnYDha8KzYgkbe3zvv88TuKuUp3XFYRtntFSr3n9FfkUhHV7tx2qHztykttTFvkX76s6HW",
  "key28": "3EBy95pABUM6mJxW3VJnjkuTddgKgueqxm4oCnJtfUAB5v9TKjPAiypL9DDrKkq67iiMwoh5XKRPmcsTkcgDXvEM",
  "key29": "2h9nBudEpLhEt15atxEPnCjzKMHGkVwvE5mQzomyRnarUtMBvTovMUpYLE8iANPBJPQutTeRwsvYpf8AukHexqdc",
  "key30": "4DtvKwo4qAG9xXtpuoGZuTtBvJEzWbTit4MHXa8XbtYf6Px8sZ6dgYtGB9Xb9EuYoGGjbibvnqhEoPecvzJxKjEo",
  "key31": "4bSkfNgz3TUCPGGjikd8ToMqgwT6MUPv1XmoHX9xd1gzRPErhQguhiGZJtPZavcunmLhLR5khoAAcjasDm8bY2YH",
  "key32": "54Nx8qQGikhA2kc3bvXi32DTQNGchMzNVT5juH1Xf3E7iCCetqKBtTTpZJM1P1UgFCniwPB9k6HdCgJ2BUKMDQYJ",
  "key33": "4jVt9ksPkFZdfWbhwUgNA66uX8Djo8pXzLuWFeEYJDYwpMrLXYQRGHrzRm7hczcooichGrtauwwK7Qat78sMfaNn",
  "key34": "JCqFwjT1YjUbsVPqERnJxN1V3upBEPewZoTo8AKVC5QKXz6nzNpmCmNAteTyD7hk6XxuxRXf2UoLCKeMZt15ifx",
  "key35": "NRkwe2oGx4zwhpVhwC5koYtXj8b62fL6oG3LHRH71quNxy7Vz3ZKjrqEzRvrUCQ9B2s7f1NGZ7JhvPe21Mw9Wew",
  "key36": "574vNBFjFe8qWTv9t9WvcsbWGhZb3bQhoQQ2xbojfUAXUggkPXxt8KsT5it2VpLRxGYXfV5UmvLiUhZg7CRX5xZi",
  "key37": "5CPUHw8XDhyxmEpcLizbE69rbqu6rUSkaEvbmPFea9VrEUmdw51tVyNtfZVfxT2SPQ1RjV6MehemLjzRZHgSK3ZU",
  "key38": "37eFcGgNmGryC6GN6gKCwomTjtafgz59qfrcrZoetKFjW1mmYDWWkX6rz4FeBBEPsNgGuMqKiJQiwph8t55165wF",
  "key39": "4zHtKr3RSoJfb15SvKNyBkbHAfFh3cF7LkEkWfDgQQHiPpevztvnvR3K5X8Ah2GCcdkiZbL1EnefKyM9oD3bGXU5",
  "key40": "53DERJ5uqgwDxJp6ecA4rYD9RL86GfctsWNCbFU1oEVDX6DMiyu7o71wz2gTWisGgnFUvDDuHXBLxy4S3of8QXxJ",
  "key41": "348WFAPFVzEDXvqsm5Z9DqB7ZxHp6FKPCCmn1uvstZXmUkhB1zw9ttEEC57RqBaiGaA6a6NUDvDy29YHdGKuTTrv",
  "key42": "45p3s3yoNrmPECed4YbHxZ9WeUow7tjVt6RFvRijxZFqMWAv2yEGDuTSjE882Ez3E3jpmary8Jt7TXbXpT5qGE8k",
  "key43": "4wLrNagXcTewfrBN1azzauqViL3ez5AArDnD8tEtnL6NDzu7sZHLQhAM8WL5z5q16VuXnxTmPDEKA99WCDria3d9",
  "key44": "784tApdwz9RsXXuwHxkkPqiAUpRtqAkAcnQZ8QSSyjwjn2LffB8gt8gaX5BixSBVeHhde8mLtr9CoCN5XMUkAHx",
  "key45": "5nvva6ZuCBnVfiqVujXyoCuPvf6ZyLf4bfnuYeB4fXpQoY1jZgMFsU6kRQMiHDgGkP2TMZZUjSsDMfh3kSj5whyh",
  "key46": "4LtpGdBUtKodtX3bV6rWLhZPAa3DKTFYHrMdtRhBpeXX3VMpnX2vh7VyPtiCDH2P4ns1Gq6Qqov6oy3afQSSNoue"
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
