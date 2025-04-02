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
    "36JzJxqbKToWtKV1xA2GMmRFRcQMEx4qtqKGB7sNc8aZvzqSn61ZLfxJQNjGnNbdqCGA3gvT7SCKhsG3AhmSKsKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66kVbQnMhAwte32Bc17TrdtrK2Hz5WwSwejrXb9DRZicdEJP99syLAvZqzzZH4k7kV9hGyJbWyVnfnYTdSW4CUKp",
  "key1": "51bySTSM2V7ypvfaVZtymgk8Xn3R1fsdKYEQCbwEJ5Roh7sqTRZzJCNVU7vxpV6QthCDdWU4twh2ojsToTJEeeoP",
  "key2": "3NWgV7us1PYdjV9cZtjDX2E2qMNTRiD2nAkScGLjNKs1WJtQuA9f3h9J78pK9MFypGK4eBZzDXRZFqnPQHLkiy5Q",
  "key3": "4teSMijPzGEqFcfvTtnSZueKFx7biwDDADvxHawT757mXem6NzKLGPECMVc2MX1u8PFiCk7EFXDfPQ2qefAVsGV3",
  "key4": "CCnjeP5D9zeLi5y7fdhm8wrr66AMco3SjygrnzvUsChuQv3Qz7qSK9faoQxf2uaWsdKaWdFUCixbipwjw1XoYYr",
  "key5": "5AQJcaJExQLzmtufpjNZKW7bHbcSUN4j1mUhsQT5EyYwGHEjWnLpjUwL98eagfFpGUMhE2opWWeMLqz1HgomGBxd",
  "key6": "u6AV147pdGyuPrTBTvcZvUjYyxV1QajMLY226jsM3geJo3DauvpJ4HnsZFEsGLnuX7BTpZxSZgFwEPteHQjBgUA",
  "key7": "u9jXBUFHYAVYmum65Vjs7nLWtujwzkrJqez4jP5nQhEytzUxEJxTTsrTr2t8pZsoY9wKGRxtjtCybF4wjTL22Sc",
  "key8": "BgjVfBXdcFvkjptfPiv1AzV5rfZaqAnnNdpax8hAUU93sDGg77srS7CHYpnuYBhiy9m68j8WS5wXWvsJzqtfP9x",
  "key9": "589qsvPq7gkQvEWHzYnexrpVDPKD5pZ9tJCMHkVo6qt6FHuayNor36Vqth9XSk7Y8iu3Td6fsKLg6nHryLgj9Xpi",
  "key10": "53BhadxPdUzVWkicyGCFc25EeMe1Q3xErW1a39PQ5VKckBtLZmvGusycGRZopVd1aMZnsv8ZbHJ81Rrrfdpm2Ri3",
  "key11": "2izRnVA9JTiwoMWazVSPpXVZ35wUwmSZhmqpnJo6BtbsmRtTA9iiXpnowuKxovmX8RFKbYwDEAED1hLdeJxC7Q4C",
  "key12": "3ZdNqvhxU3E4Kf59kpKA7mgbHo8keHV2RVgUHmYkRD3PY6hDT4nNcsGTfDzygXKRwXf7cHthMyKRBR7uYDfPyg4H",
  "key13": "5cBkwNKZG3MthbghhXGVDiigNefJJkgnNvay719P2RDbzgmNzK3YP848c6Uy9ks2xBwTs6Ctw3kcWkmXvirhXN1j",
  "key14": "SEhbacMc9h2U3cVkc3RCoJdVnrJuL2h7MhCrD9fnMG1TgdLPtwHJHfdXX6at58HgjH8mUn2Dyefuf8xxJekDz79",
  "key15": "5teL7DRAiwgYW2usn7MLDohzVVMrUwGCfJutCVW7bKN1z47a1JFoW8rXLpZLn2Yb3Eev8ye3GkoeAVFeqZFzwg3D",
  "key16": "5omqqVKWYhFoEmjKcAt9yBEXZFQ8RpobjSRjPB5nvmuuLAGZPS2s3pBPZYzgdDCSmAeJUY8qALce3m1jAZnXqWiF",
  "key17": "3Sw8jHeurekCd5rCSGzcPZ9ZEH1wYVwB8HRUvLYHnWmedmoJqLMJR1sb8zATEswyoTapisCVcZwk72xNW1mTBCnz",
  "key18": "3bh4u8hK3MD9QSdQw5KdnLRvpAkQR913Dytp3i6nsNtWWJoSXmY4VkjJRyxyym4dbybmjmVUvzpGXXoj1x3nH5bo",
  "key19": "4z9he2NdsaatM7U9nXLopAv2rd5jk7SQixLBMZuBUCtRBNRJ4wtCwNJQeS8Eqj9c54ASxkc4QH46hQXFjQ3JoRcd",
  "key20": "5oAbyA9qMujy3DSroRZnFjwRZYCPD99FYRVCBuS1hxWv3sc77NZjuEc263jDmB5XnN63gic9mkKUWggm6gVXKhtE",
  "key21": "3axJBqVaGRWdjm3FbwXUsakLAsHCH7wRTtEFn4gy74DnnEBLoHt3qatt582csxSbeqe3kM4MFVKDuHoBtNEznK6A",
  "key22": "2bxd1UadBw7phYA1Nw6E4iK5VNkBFNMyofAubNeha6cSRUwXUE2ZbMMCP9jEUJgobUjESihb6riA62vomuTZvrwf",
  "key23": "5WdQeDQsMrABpRyiExWRwuUY5XGfR3uAkQskzDF5EAgMCYhasMbYxo9MF6CURyrhhpCjBvPMdzYLTq5eQK3ATc4L",
  "key24": "2BmhBqKMZ37D71CtT9NmXicMnXNqvpFKfdcVGrY6xgxoFTHyKAjuQZHixM1iueZVAScg9JTSowMJ74jHZ7HkKzc5",
  "key25": "FFsXUYV7gLVWvDNGhDbqGtxfK9w7zYd1yXwvE839AH6AmCuxdJE7nto9pHTeZtQRMRq3qMjwbhmd8tzzvuWWrxj",
  "key26": "2DhYxdDvhxGya3tD723GacJrYSfdGXyKNAt6wZDKEyg9gSj3SW8F4rs14FWWJwVvW9GNw4K5JtpN1PBG8feDptX4",
  "key27": "29sRgjvzUijEHXwnWo3RXthc7jCKLF7uWWfesubMBfUvRAeWQZMQWji4cvh6dqeAq6sNEdEL8fmD5HQ3PASXA4Ad",
  "key28": "4iYszerNuAADr1sFLhvH57dutGH86qkm2MK5R2pDMUV8nhnm1bDLNQryswDwJZksaygy83eoTp7erWiKqerBR4uL",
  "key29": "2BKTF8UDWQYYqpsDJTRLGVGwyqAiP8DBfBqsqKdg1Vwe4eYA8cJwFZtJDuALsMaNj8BK2bGxpHdV3PqDiZCNV7Mq",
  "key30": "3w5x6CDAp3PL63khbh6tm88qWQ16dk2aTxqHhiDZD4L3nnPrKkhbg1FUsg7ge3tjZmhEdkDPsZjFi7QL7ys5Vumx",
  "key31": "3VHtrHn9Rjbg1XJUoFwHVxnB2pDfioxhKohEX4eceRYvVVKExzp8r7Vef7X7oQWpg9bF3mQB9WFrUCWycRgZeFhA",
  "key32": "3VV7sd4qKnXUQgcWuPjj8g5yQ66NjASfrvtvq9YhzFDBLPvR2Hkrze9FpFJjTk8r7umFhiy99u6xRxqYGBS7B5w3",
  "key33": "622R7bB4m3pVsSU5gQ7Gat3gvk67j76rWBPTCG6xaH5Z856A8Ase7E8BNiQfHeKr18YupVvQFdQdfFQy73JmR1j5",
  "key34": "2vpd85yoVCXHkARWH14Hyf45n9TUm9A4q287ddG5Thz6r8DZLwjnuiDo7dvL929M9Ro145M8PASeERmWerN9xJKH",
  "key35": "4HuAsVLGwZijgPJeLX3pk193Fzvr9vHq6FF238SCCf2fXMv9UqaDmxFKyEoyVwo2JEWfjRy9Nb34vKHt3fZHRLZt",
  "key36": "UPh5Rqfd7jyrbrMubCis2457x9D7PMnfEwYsAcdwrFYqH2ZY6Qwh9ScD4J7bo1V1yt9A6b1VhECSeA2ZDQZdp4u",
  "key37": "5AE4MpUnBKeWtHSPTdVaACKRqQZj7KbHfLBT7DfzCQWUbUavgeY9K8uzyqfUi9uRtXHVdBX519BVK7Zfg3vBaQER",
  "key38": "5ZUieKrPY3gZomccgiDpzrKg66vKBduNFx1BBRkwNiERBNsxJjBSoY18sqcd1mA8W9ALmaCecPw521t1codbEkrg",
  "key39": "5RESMsYaGCU4weofaANcW6NJyYdnpz8qkZvaGzWP4u7tjKZLMcYo3cgGXsVyHYXkwWyBLHc6r98Va7xmq46CTEjw",
  "key40": "25UqiyEUK6T7Zf6vqSYUjNpH94zXptgVjcee4n3p1HZwkccp3pLdR97BZYQvVP15GVybRMxKCp9rvY4HuGAeR5p6",
  "key41": "2wFoT7iZWucEdAnVfrP15KjSmLZXeBcnDYy3C89AJ1JHgxK7doZiBcXAtvBhu1ERjywfR3qmV3ZCZJa1XVkP49ib",
  "key42": "z3hoU3F6JwYgeH1Lpg94hqjimGLL9hDLp1QQu4RRwUQGqFnkg7XFYscQWFDtJig9oL1DjYveEFSKGotXRUobdVm",
  "key43": "5xfQeLqY7ZBcNKUUnb1Yfx3eSEW8WoaQTgAKXUUfLu5m3a4deDKLVh1PJEvaWcUUm7gmL3xBVyaYJXMmPz1PbXtR",
  "key44": "4ZoSVmxoGwy5vysQwHJ8eg55rn3BEhNH67e3Q1CVSDHvC7AstBxdJ4a8hqx9YPufYGCFYhYvGUSpWsznU5DiJyTR",
  "key45": "2274xySUmN5acKtvUWkFVridoZ84NfSKHoPmQ4PBNcLd5yF6uBVukEKDKcu6oagUnxBEdEuYZprHpGNBqkqBbPKd"
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
