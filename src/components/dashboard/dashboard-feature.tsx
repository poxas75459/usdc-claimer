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
    "k5Ph5FZyrBczv9UhXJY6br19uZZW3JqS15oUSMi34GhacWrodkdMJUCdCS76paoRhkBsNu784rP75RoXNH4BtSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r2RtF1k8VV9vXfYSvNNvcP7ddyQS1FmN6fcaVZJn1wq7v5GgR6KwCFbUB8PGgGpithGA1WR73bt7yqnxBt1FaCT",
  "key1": "2uLpF2vncYN31kjCNcb3mfz93wM7JmrfKE6buuFmksaD66iyePdg5CCkE9y3BPDdX3JtTrf2agzBGNuMoMUydpd4",
  "key2": "2LdEAw2CucXXfUwibAYD9NvvKucQqviEckfN2RzdsVLuye1kkDMxu8kuZ4J1bszXL2QVjVeJjb7pqVmDfgJ2ycrj",
  "key3": "36CvLf2xvRRUC5Np1FHMH9q9MxgTLFTyeagdtRyRJ2r19aW7P428XF8G37MQATZsa8s2GHJ7pKQJq9C6Lk6Wduwg",
  "key4": "4WnBLDX3FUQDGXSobT2QnbHXnGgEpv1p772obLNE2XEUqBEy6CMQj14UU8qeyntYGQXTKFSug93JCPVnzFLVPXE2",
  "key5": "2XAYTRufpLua49dhtJDkHCbzjRzE7HRWMFyvUoZNQzHwq2vp46rhFakAWsp6rXzBdgEbQuzWYhHsk7DoYo88A7mo",
  "key6": "4r1ymt4kAmw4NhKmpcM46WfS2xPbdaJmrUDYE9Mf4t3c1dLDCvsXb6JoGxAxe4evPSzukXjvUuQYZECfTyJo3bnd",
  "key7": "4RR2PZWAaK7YbCUZJy4oLmqdivJMnkn5axYhisW9mmvC7utxMinkQAgMF39Kq2c9tB9tSTLa8fu1ej7jHbouA2RK",
  "key8": "2KJ5TzTNLzzmAfLXZuuDwaffHaJK8cbUtkYRKLmCihSDqcwUk9qwfYAQ4jQj364Wwhn7NRT6hY7HzKQ6nVBkyU8a",
  "key9": "4Kw5dCaowJt73rwKrF6oVDBjDzjGQRUv6qbLjvtTEezbEDmsXAQ2YBGdyNg82MRbA3ScMP5wU8UZyAy1WqupzPic",
  "key10": "5mzk1yJ4RnzPwPtQmA5F1QKVWry4aKfzYvmNKFxWNH4BHWqwu2zA5bcR7r5h1itAD6H31WbAXumQEitN7oyLRHoW",
  "key11": "36UxPv8Hr5XWnUKoCMe8yWV1Z76Bi1Hff1dznzf5wyXnVBa8Z94ZJFeRvaybEiqPw8BgUPBFPWTKG7DQ2Boa5ukn",
  "key12": "rAoBz7VdpQXnzXhHPWqiTVH8SBBJdTV7j4YidPwf6AkChBw28tEA7z9KWGUT51z4UcMef5ukhHMTh58R7gBU17d",
  "key13": "DcyAqTA5nrTb8afofJzMi3KwL72URGAjXYR49gvkcDt8abgTtxvCfKKVEEdm4qxzfLfEHHWVLSxT1K9knjfrgao",
  "key14": "5fy7BcEAwiHmStmaa71dokccY8rFKFfj6p76WbknyByU9SsPn7SDhLvFmdh9njtkTMEm4dHbQcY9mr3FHr4ZotFy",
  "key15": "4cyz5PyJuPoRoaHtHwQWaVCnN2kcC2nCnxgWyW1Yr1fofLtQATGeoG5B2Cf7bgoDmyQcrrqTvSmgmNT1S66bLzk1",
  "key16": "34JyoWczsGZVwmNRYCu66ibUZUcg3i3fCsxeYcdusnBZZayXKSRFL1RRW9GSD9D2HWsXchpWjQEhm8RKqk2uAbFM",
  "key17": "22GG5j9rf6V4ceB3Eqckou89JAByBDJwLHBruxaTbZ6kCumiEJo5yruhtxUzuFiq8GJWChP2g2XiS4neqR4EE6Ur",
  "key18": "uAmuZZTuUjHwZtaSg9ZFspGdZ21dKaJewVGDGAuRd8B5JkCkJVzzNsN3GB6wkZCEYEnxnHpjega6nx35KbyXCze",
  "key19": "4k6hra3Wb4cZ1KVCtUWGFqJtfxpRT83voLo4mRQxHbM1uVNyqSKSEzBVkHK15vdw1faG13aeu9ncsqQ8zAZmdZjS",
  "key20": "LGiKzzrapLh6qUGxwp35hz783UY8RPx5fbPU3E3TtnW9PSSbC2tkWwhQCWku8cvaiWpJ165hLPwcsEk1gAmFpst",
  "key21": "8ENQrkpigGdi7GKgK9RyXWBvcUme2QyR3QMpkBYYh7iaUijBK16ZADTg3CsB7ZxeWmuYfetkFF6A5SKGs9jpsZM",
  "key22": "48iYCGpYJK8Xnce1WwH85VpMLpqCe2mktSsdrJExWR8g9p3d5YSscCZqoEqku6G1ba1XR9QvrHAu438uEwiJJVAi",
  "key23": "2GpLPQkmtsJ5QYEEVAV8JUoBy4B5zqDYTeGTEXAb4mEgy84514kh8a2vUZS6WAj71R1197x6iAd5Da2QmvZNpCp2",
  "key24": "2XifZgY6EF6UJQrjUkMo5yUJTECE9fy79pkYWPnKSayXeU8WhZ4tnF71SdfCJwcAPH1QYzhcQCzpXdfZ24wFTgVq",
  "key25": "2sJmMaAGWjzgMiThG1kGGm1dR3cbww2G5U8S6A6dHf8Jge6Eeo6KJLXP8CNmEqmtoJK7U4qWA2bTm8kkdAtbcqKJ",
  "key26": "66W58enxgqVXAjwr4oysZ6TMsdnNquBLNK8MqrEQSM2zEetNgj6Vd2jgaqHtD4HPxs5zrqJnTutW4oND5SnCtN1N",
  "key27": "5jYvhkwY48JiZb4rahTFwo7iDL6AFqEkbVho9HvjZ6SVZNLSZsFGFpckXtV3bRBkJi53ZUrVP8dPNH2mLopwtodk",
  "key28": "2G2v1kwSHCRDnc3YfojoRme2ccFKbhTpcKPVV4aspesDdUeYYgCypRhQ965QknfHVufxSQUPdy8bt8ATWvquP9t",
  "key29": "2wTBKGq9WvjQ3mNJVMmjSsvE9ZE4Xk45tX8th85voRoj3YPj43eQ3pkt8BFCJAKz5ausfS95oPxaBMmyVmetbg5J",
  "key30": "hfk6MqS71mhJ2ZfGhNxuD3FrTSiNiivaHxvuksWjRBFBwqD4bjjBFWUVJa6DUxgUGSUw8m5YL8x7v2u7QEuFog3",
  "key31": "kETfpmVpKPFXt1eUACpf4oTnTrhA8C923QwvqGhcWCedgRY2vwhQHMpTeG7whuePmLApr4trWje8UeD3uUzg61a",
  "key32": "4zP6PdSLphiDpyXTn6DvQyKb5E1PVLm832HU5W96vDR2B6QnCpy8jPTAa949ShL2cPyR3m1yfcpbTCowgfWL9EVZ",
  "key33": "3YfNzpEWR1ujtWkaY8WyAF4S7EHubgyUSBRPvZ4orK81A1qZ41V9Y2x7hDtCdLVj2nUruTzcKDhDkVQBxaorsCeN",
  "key34": "3DtACQHjG39eskiEQoADmmv4oK8E6TTaQSLjYL6HfKD9T6PXyCD2HvccuFB5HcnTqgRYdbKqhhFvXHs4hWfvcZeN",
  "key35": "2p4hSKeJzzhC2zrvYwrEtseMgZwTi1RTuXTUmJNio3pSvrdGq3r337Km3uVhZAS5yG4ecNp2zZTVCD82vsRS9H3M",
  "key36": "3HNz1KCsKtxJiGidvtPC5FX3hQd3z3c2CD7AwY3idKMQecU1mEWsX6LuQs9otmZPhdYw53W6hJS4jZQUmPAMQLRC",
  "key37": "4hPtEET38S9VFUuec5GhsttbkVSy17s97RHaJMsqfFg47bCLvVfsp2HX2Z6jmmtEqQJxsefvUCJgxxnrxr66aNwz",
  "key38": "61YZd652qpQshjyPEGrtdqq129z53RVk1wjsQ39q3wWKVW9h6sE4s2jYiejTTGKEFCCQqzsJNXisnY2b4AXFJk42",
  "key39": "65Hr5RhcbL9yYUW9DrmG8qadkdFFFsqs6rVZzfXq9mLhDDewXTKA6wFW3MzZVqVfraTs4txRv1k5XZUTVzLbApZ9",
  "key40": "4qGz71KrdLenyTduewWWaKYxuU4eD6tdxeypW57GWN43iCep4RG7bNwdSExrE6qA9xVo99jBDU1CPBhfUYeVnVVQ",
  "key41": "44xEhYB267y5abWLfUZ3bmN798BRkFKPVoxPAqK9YiUnvXjUxyuTiykxG9VhXCiCYpzgGuVJ2vUKNVmTnDpwWJUF",
  "key42": "4XaxWZZrEUNjYkY9me54QADspCNj9BeasA5brfdyjcEsdG3fTQNf5hLunFQXSkFZMLXVfLCCEfW68jmZSxQd4ECL",
  "key43": "2AevspKQRnKXJSi1sUFR3sqQxWiCvtgxv1gH7ruQRnF9iw97uDuTRdtdCbfgssnQHZQfx4EpuSzHCVor8kTj2Tv5",
  "key44": "5NSWjhXJ7W1ZgzdEs1BUbf9V33Na1twMHosi8nyWcAJ71pvkt7pmZkriArPnVut8uDporT7jrBzq42B1D174GK3Y"
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
