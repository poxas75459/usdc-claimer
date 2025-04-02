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
    "3aYNuD7TK9B5AsdTNPTNQtKFmsUrUhxUWBLwed3NWYSTqvh7V826Fz64B8vk6kBcgWKgU7hE86jrvB9uM48VARh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64xJXbn4tEHne7dcTtKcyFywhksakrFY1ocr5URpSVrAbCGSGijLCHpv9AEUPTyuZ9aLPGgCiHh32e3iRZjn8stx",
  "key1": "4Sc7e4ySQC7Gmx3xFcwmKbDJJHXHNpkm48Si9571B8VokrMHMn5E3y5qtHjDchw9GpheKfm5txzsrRR8WD5aXzKe",
  "key2": "453TE7GHkjq7WsFFRSo3ZKozRBu14SnQWUfwyLNM8gs3MPFebACraK9sUD1ey3urTtSZaYyTEoPMxp8vZPRV3ohS",
  "key3": "4CnY7g4g7NgQPGmVKHtAbJA8RxAPMtz52iu1Rm8PiVhjos94PPm1iKxydrHia2WcmxGBiuJDNQb4r6Ds1i64Y6Um",
  "key4": "5bJn4Hzitatuu8nfDNme3TWpwmv4RRPuS23XvKPAWH73hVFzNN44LRfyPmXVNdpWAw1TeX94a5y4MrH6Dd45BCkN",
  "key5": "A9LiG4GDrMpKjzyDXAHkPo92CEcNx7ba8op9Jsd5gcB1EH7UYxLRaBK4k4Lmr2rY1V8ZRgwcxKNajco6NKwjVJi",
  "key6": "8ChYvUPf5XHYmuojxicKnSL5amH7TR59aV4kKW2Dfe2Si4sGqDtyEuxjp6P3PsswSBsZj273hSp5zfvvioG5Kc2",
  "key7": "24xGjDDSpy1GJ1pPxpE3sFX9EBeHyk29rPEjHbUKLDHWMm2tMnwFXRnY2zLHQ37RswFhnjfmc1dundMbUqAqk6K8",
  "key8": "563NiyBHZAasA731YztsGzeYgasYoW7vjyVCg4vEUhvEg42KqjFtTJ2kYTNpaDDwbUUgewJ8esSsqPQse55s6Nsr",
  "key9": "3bURhE4VMjhPjpmcrpp2TWhNGQgxEMNyTQ5ChxLgMgbPDQB8mTzRXVP7Kfgie7FnKDTe8tGHzJrXpPSjps1dh2CQ",
  "key10": "4oYD2gPWz5JGQGqvRVzyBoeTHmb1pQznpNbztBvEaqXhWgvw9aYf6KtGPCF97FVyoqXcbYJ6StWjTJCEqCmW5ddj",
  "key11": "3r8dqZkZPSgAjvFANsQkEKbsAH9mZ27yWzfxJ1camYke7YrzDLDtnAAsN2fFzdRCtjKZKB5Mqt8kRcxq3vfGZNnX",
  "key12": "5uXSjS5KsmMXnt2G1sGPTXt4S5s8Dh7V2MoEkGQRS4NVM4e7LCck65gKRkMnNySBbbpR7oZXwxUMVegFXs9XTsaP",
  "key13": "5MY2JRW6ubmWX3WDk1EZZ5w6nhAJo2s6wwF3jUTULmuntSwdMTXiZqmgGHGz7SgBj444vamfESSCJUicPxo8XC6V",
  "key14": "53MVQSHAPUfViKrbYwWgPbuX4jBDjX7iFPmLBfJKrdbREizfikCiK8i6R3GobPqMoQgSCJXDjD5RgxXQoUBhtowP",
  "key15": "3zc8xFv2JEjbGzRBStPjGh3atNgc8tBTxaBKTpCqqg8YH7DiuUxAcusp85Cq7SoyX9GGaRenQsaJenLfNmqvQpGh",
  "key16": "2sa1bYXaAaDSrvtnsN8qBnUF2TycV2VzSbfMZu4XGU9NDxCGBKZLHWZsSTMnVvrEsbUtMezATRjZXQeWjovbsV9z",
  "key17": "5cdC9PX6LgWcHXJvDsqwYf66ZmN4WgSUeHPbiqao1Um9tWVchahAaBcya3HLZC4oRPiooJwfDfV1jfvkRMEjiFhH",
  "key18": "2LZUTNAi2ZEFELvXbMkyPYG5KfRx6yVc2GCPJNMe7wB6N1ecJQ4HVwbY55Sr2XCvkA93NtD6u6KXzFUGYGwLKhDu",
  "key19": "586X1CcocFQ2MpLHGYUPEkoGWnhx9FtyvsUpBYGfstwkjNDWnbHvViqUD8EVADHYubMzNGrB9NSAT1YVqp1rTK65",
  "key20": "4t35MjjL3bFqi7WmBk1x4BZxJvoSTkK72mTnMhGKZWWraQ9kXEFgG9NCjTccD8fsmy6obe96ztfbVsD1DGeGMh6u",
  "key21": "2NFNF6We3fbYhCSY6SGEpHhBrW5kXML5pUbDogmzn3WkUWAyq7SzfVrwqnjb91iBvNuEM2DhqDbq7ETJZTvAYvH",
  "key22": "62BiabTcjw2faVQ8J22n7kgQRcKcmZ1scAa1nVAf7xLxSTYP9ijXpVXP4sUn64M1DtvNx128vUBWS2bsxX33iodp",
  "key23": "4EjNnavQk1YMcyD8po1447AbDpLVAMtyB3CnM8CsZH29yZLpTCJ2hspKRg2QmYN3G9gwx6GwpgQuAGbtKkPp5Dd4",
  "key24": "4ds4ZMv9E2Zy7dwEVj5eLBiS21TZ5WnznKZadnmnDPLmFbLF4b8PJwGdjDphyuuD7tGFtUPqSbSDijf8M643fJRb",
  "key25": "2DP3nnRQiKJk7sqxiDwuwwqNgNfxQYHDmmww1P44BseYeT4f1wZAVAoWPN9cWmcuZdaDtqDvQqxW8A4nFTGhMxby",
  "key26": "2No77hhWkTRWykiaaRJdLvhu5CphPcgEqxnyXGTCW53tkXhWWRsE2aUTgU25XAPEngpA8TaLmodEeAQxxjEa5abR",
  "key27": "4mhwaLunsGDwkTaZ7cTH8A1LtJh1UPMjjgc3nCmgJKc3Ft8dz763KRBrm8b7gQjFiKjmL75K68Wi4PvB9NSvLsRP",
  "key28": "2g3papnN92RDi4HJ6bNhdGC6he7fb4MyN1n239vuFmK8hrVE98q1iZwVAdxXX3vWffkp8C5DXDFFoCkGTcEvH8f7",
  "key29": "sTbf7sEikoHxyPsM9vdcPTyciXCQtBxMV4cBi5FGuYaYiukb4GnNpevcH5nCENbkeXZLDmq4ih4TU2RFDCN4WAa",
  "key30": "2kdoZ3Vi12XnqrmiP1nPpVH8yjqqviwqhBs5PfNxAXA65hDn8s1tC8MYnFDeGD9Ve1tveTXqxCpUEpKFnZ1t58ew",
  "key31": "5kUKmNHutapedUkufP4gAABwMrABNqr2h9mYmhkLdPaENeMQPbitkcye4aNc23KD5X9ThW1SatGZ6jmzLNnQRZcL",
  "key32": "2RC4ysF7QkzkYbb1oc4PnWm1GjpdpiMdQoSvsewRVYsPpMSpi2Zw8LwZSMv7VnKaUMBtZGxzV9U7eu9fjUu9fjKj",
  "key33": "4ShLsLVxe637gz7uapVxNUzXXUX5ctwyUWUZd4eYhMAgXLsarR2yfT1Ko7iQiw2YPKKEnf4WbxJQni29LnNBzdtc",
  "key34": "4YhK3NVfoesjftUrSrLyK2MCTKpgLDEjybBnjEAKxnJVxF3nQkwZhLxSt3HYVsuS8dQsvuPHKZoXYGjRFgpqtswV",
  "key35": "2gctvFeG5C5VhwdTEmE5GAjDbt6bDN1yxx1YxKymGrCz2abpFNh7BzwCGUn71iAAGF28derfXUqJ7exFjG4TyQfd",
  "key36": "duGXMynPkAjWAGPLGeWgF4FFWhBjb93YgyujSa3m2WesEgxaDvUq9MHNxrPz6wzffotARUYnBsk2KSt3GVz31tF",
  "key37": "3tmAw4YRfRof92yDcBUqTT9FHKscqNpyff2UrawvLuUgTf7Kmi4VsE3cjgKP2YgstZX6VwuY5MkkoEYw4RutRHnA",
  "key38": "4LcL4LKHZywxSY2WXGqpcHamFBLcu7TKE4ZQPZdMee61H64PDsYJvx7q6zSSccEp2SCCwUPDYe1sqQonJZxrvqsT"
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
