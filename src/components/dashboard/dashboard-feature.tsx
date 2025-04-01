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
    "AAzEvH1pJmazDoG7oh1Ka1gwG7Ku1WYUdygLPqMu1Kz1j2n1G9F2vFDaoWp1KnUC3KxToXfdvErPygxfQAbZqvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QbcRwk3TzXntJ7qsNkz6i6FgW2T9TwrKXrESy85REBJQUd9BFGt8UFEKptMDR4JfQzPwKjVCjSwFX6Vfw2ogk4g",
  "key1": "4U4E36ZtV29wAjNuDn3rio7v8QN9jZgGhhfkPD1KyELdXjggBJTHxWLSGDNrWUci5749dRhwZuBPFDYczRnv6MFw",
  "key2": "3Ah78g8YrHooF31di7zZjT2xjDdkfZm9eDLP7DiG5JbQJmkGGbdFiz91TuMUFi7nS9YgZxW6asUpK5zd6acEMYY6",
  "key3": "5zkJakLvUMe6Y6ar8aDZYg6LFPQ9E89pMGfbTtgHKhWSdfJeFsDEAgupoYxPaTd5jVNcRMX3MHHTYskBGevBmGg1",
  "key4": "59Bh5BjUQNTWoD1Kzuxtxn5UDhPmanHRxrUe5AdG9erLbs3AUoBGZo8GhuL81sP2M4BYxsJRwpSYJgXMzLwupNWP",
  "key5": "5mS5meCXWS3KhBmuGWA6xVtK1igEiamngCreKFALHiuQ6uVR71Jx44U1LbcbaykwqnjSAvLDG7wTAjTU9KfPpxC3",
  "key6": "u3m2oj5tPjhM5NJyYqJ5E2FBLqhgsocrgdnkSN9LpN8oLmRixvdBU64WAtwubPnG5ggzTZHpFotxuATn4HjSFdU",
  "key7": "3fxqVD8TYPxJ5Ts7pNi1VD245T1ZB4e4Uw6dXJnDLbyaFoY7zwidjvHBkqe7bcv1JxuygHNUmq8VxLVH4MBtP8fo",
  "key8": "ALAt2xn9niqgAhfhfCeeWxFmUJYGUf43PpBnbVkF6ebKhMGZPa8QaM4RfPg6Ypgnz79HfeMd8HZZ4mB5Y1Hch4Q",
  "key9": "2pgsq5q73rkmkL45h2G4bPEAMQpGAekJjCJFvvNGVnwtEq7fajsuzhqEb5zgNQSiUzNV3Td3n86VzNuXK2ziGy5u",
  "key10": "3kxCkopFsXLViXfbPyJgRfhNv31EihxoVsHxABTRuEGoEJcSWfG8hTTQN1AzVnNPZacaaaaY5aXgrhXhhHLmbu6v",
  "key11": "3bpCSTzXmgvjXSSY4mwr4bw4kaKuJ6PcnZvc2x6dpkg9e61TAgg6nfvVEJuzQbohnDENkuppYwin7iVLCfcYwjNC",
  "key12": "2xFPQjUrFmm8aM2YEZUgDPxSsS7eQDwtSh7sfWXjkixH58NnaDYqrMyRZZkMTSw9JyAAzysbYjR22SMi1ay2sqFn",
  "key13": "3ocMy9BE17WW9FXiLHFKQxT8M6YqV2M7uMJpRZ6Xid449PouWyA1AQVc44KLYUoabE6hyHu878nEfVgc1DRPrJ8Q",
  "key14": "52fhwBLdFzCc84XKFQDX3qNvPbk1jkUvHMo4m99hm5ShbFV8AjHDWiRyR4bG8A9wGmRJPunLL9rdqiwkrF49tuBD",
  "key15": "4LimrtKnUY3TA7Z4u5Kfr9zZRjsgnaKcDHqctz6bxkyfnvey1UeJ6P2ynqj9QRpNThYo8afvzoHdV4h6LqjVPvR1",
  "key16": "2wRXEaLXgbYn8rzAX2bVUGsLDbXZKH9HvMMjYRhjzoLWfZzaP7QSqayej4mpjDDM2MdtmUpSbkiDiqXYh6JZQXCC",
  "key17": "3hYWTWeYDyuaE2Us4xekCyf2LdGBFZKJQLdTaVP9uW95K42TAKry3Wx3GkhjmQxciFSbr8sHSLzn1AYkHsbokXw4",
  "key18": "2g8Gd4ZLPb87bCZQ3PkSm5GG6ibNUzJnaHB1RNYtKzvdGPRzuqkQZFAQxdJwUtmrLQ4QqmDVa5jWsHdVpBpMgTig",
  "key19": "3gieaYpPL6n3WJW5oWoPUfcLp8uK3z4fneVuP64xcEG3kzoZushM5dZ1CYXf9t6KFSSkYgHHTwp8nKYMwW5Wa4Ri",
  "key20": "4qcahGAU3P8wyVZpsm8eEW4QHz9BiFks5FnL8AX9nGevxxUjfQBqic4pucAqARenYDmCqypGgtyBGc6UFCuLQooH",
  "key21": "2rpyaj9EvCYBdpLeJbX1HGywKLAj5nXAXJtKJYBesXsNGgDAF7UG2Ysq7ahB24RwxWZEFRiQfWGeYren3RsYE2Fq",
  "key22": "abrDYW2W6GTri6SSkE7J87UZ2T6FvNgyY4nCUND1UbZC2CNTLN4uwRUrxgSHCzseMmHbcRMJpgNAfEofL3EKzoT",
  "key23": "5JFKVfdkXF7Dn1kSm8VTCzkrZMaEUFusED5gxcRuwRCa4HGmip6onSqMnzFcjzwYUQtvZ8a2hLS3x34gj8V8iAfT",
  "key24": "5TgFX2Ri4bhb4TpCsTXJKQCDvAUxUQW4BQ7nB4bErmdHJ1EaoW8EvxvPhA4fCoKrmvXim9MtTNjdxKr3xWvymcbe",
  "key25": "1WgJbXb9PaizZCfCWQGnuPvihw9o2kPUUguMS4XYSrKQgQhdvQGUVJZtBqXYN2MTqYedAeGHyM4EGjrfQ7CkJwX",
  "key26": "3E3Y4izAqEPAaSCs8iNP3BFiLhhCeDDieysvKjLb29d8zvLRTvGXWRShvTGkWgR3uySW2b9eLJ9EkmgPRCEoc3hA",
  "key27": "3fj8RixNA9wGVpscP8cqLWfczPfUEiz3N1WesmTVfMctXwkhuZvHSX2Se9WXPW8t9vNsX2JUgK9B6iuP7dK42wWR",
  "key28": "4cCaGGKhfYmJYV1YFikdmgMns3JscUBz9sJWnTVBWc2om5puanoCqCQt79vujwu3CFLXFV13TjYwdKy6j2BM2ndn",
  "key29": "3sBw5swjRvSB4sJ9sfLKEzxEY3ruMopgRN2jT6HbxtH4UUVJ58riGbBTEpyAWkLBNFJFig8ntzw5gpp2G6rxmouE",
  "key30": "4nme14zWffzJbJisGEkmyFJk8h6gF1giJ2LLPZyir7wqNU4rZCbuzQanKwLfSydUMvsy168WbGoEtcpquLwkjVXY",
  "key31": "3Fu4pezQwtd8nqtU7bFQMTnRUfWhSM6hL4fttpeJLG6VFamDAap2WqLCEyThVrD9V5boYhutKmBG4yavkDNGeQkE",
  "key32": "3Xj58g2viBcdG8FJ3VXGYT7ALcGSrJJLZaZr7YAzyxovqPEbB6q5rhjHEDzfkyfzavRvG4cN47ZhjiPGkwhXC2mQ",
  "key33": "f4Z3wTpQ18rAPtjpUjwQeZ1A6W9JfJMPRk1jeTuVqbfoNUt92ubECY55AmTi9HttpLy75F3q4EQH9BiQycqa4SC",
  "key34": "2stWNvQ3EnPtoaTbDesCvD8tpmuzdJQQ6mAKMNu1U8emNjVdd7mPCkeGRAkcb6LSjHjpu6go2XXgciscvvuK23Q9",
  "key35": "395g6LSQnPg9s159QbZNdTAWPK9HcJZUhUe9YEA8Ro5vPPs4XTrpc6m4SQ8dUxwQk7PSEvkXvWrgGnrtKEA5eLxC",
  "key36": "2fXwTAuRk9CPsMBzQhaorjefrpUcgMVeipVrv3yzKErngaNV7vS8b5hmWjKfiqxvBvFUVDQFR3ugvAg4usNc7qfi",
  "key37": "4bAnD2vg4veaV5GqzV81o3j3r5iiCQp4RQZDMVgU5dXGEZE5NX2fggWhNnVEUJWaKbSpQ8ARVdqN4AT3tAFGSJ8v",
  "key38": "esvRXtBtPqHexLatcRiQKbqyk9MXJVWH9dguN9pZisWFsehcfW7stzp3iiJEMHztDEVdhaSwGWzn47e3P7FETkt",
  "key39": "58qHeguPJVxZGqNnBy3Aaj9XeWmB5dkTsQgEYXoFpX14hK7BkF4BDTUKRooLbxTUHW51jbPANULecmXQZjZvwsNc"
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
