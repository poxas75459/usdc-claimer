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
    "3eyX3B2ep7qvt8SX1oVSVk74FuDdyL148jFUPTsB7ym18hj58C9P2hRGyC6mT3Y33eTtzYoTShJpZbZNKAe37hgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LR5z3894ciVbfkn7vYWCCy9qVuT84Du6weaNZmNpgLQmxsL8TTg56idFkY35q5dQHPmyjS3MhPWsoTn1Nn2Q13A",
  "key1": "2zFMN4YxuUEE2qWHuqLm4RfaFvzFvnXTcvTbFijm58VYukHrc3kbzVVFfEijvyE2GmMDe1NwBBGUGzhkReSxcZBm",
  "key2": "4Lnp5fsSuQYiPzWsv7jzMwQeKFCJago2a8BuyVmUbtscDMr8Tq6vnYBcqBAMSWUQnJMJ6wsfUtpzSWGpHgWJLQc3",
  "key3": "5auGNyEpWGkF1yscyYZydJmJqDcBzk9hK3V2fbKq9nRm5eziH53NSkvxPoR7uuZQS5unE8NDTgNcuoiLKX2wEV8n",
  "key4": "2vm354h2M1pPvzzJ4WmouHjoqkAJJepePwXkJ84hYHwAVVhQdHLZeamDi8YUniT5QjEREQuU3jrmHyrfhue7RfD2",
  "key5": "3jrjapPqaJERH7A4tfbsYk7MzGKGC2ZwpAimjrVXWrJpKZZtQHvKateZtEuFdcrePZ6Wax9Qv77BLzDwiYsudoz4",
  "key6": "WfPMb8WPpToCtvWj2WiKAnMrEBR617kAdCA1TvH3LiEqcDwm3dmCebpEeqLGM74oCjwHnNDWox2vW3td185Ym6A",
  "key7": "3Re5HuxTvUGA8wRxj1hMMMkj7pqjxAgLKJwvSxna5Vzg9GiqkGtunbzKJM7AKvJQvHN1HLPfStEyV6eFyYhWwm2H",
  "key8": "5aj2G6jBxTxzhUqqqtz4iJumTKAkKQWXMqGi29QLseyrzr8RpzXkCQj9du7khmFG1Vx2gevECNkEbXfrbuFiFXz4",
  "key9": "4Zu2RhKLSWEinL4YN5GQkGrJn3XpX6zPtPezaevoFYk2CdERarmDMnL12J5oaDMgoXJUL43E1uK6mMPbwvKYGqys",
  "key10": "VzohhCD5qte2LD5iUzJM2UDaXMkfb47e4DURH5416fRNbSfjV72j7vkTZU6PZmvNzH8RXNhcBjztUfKsYRPTUFf",
  "key11": "4qgNbc6pLGqcgAsQRKMyNw8sRmqKAdjq4vhw6zBeWvDJ7nEV5qPgeemXcAsyLbKCSzPJHd4PGfc5JrUhFUKFDGck",
  "key12": "b9bh8yXMmyNf2bPhwv4UxTth7qVSznhP99VXd6vtnYn4bxW5Ad4KuVGmforANVdAoczrLX5DYQ5KTjvrECdjKoH",
  "key13": "3WRaLXtboMCTHZeHi7BjPXy9ZwszPPpgbcMVsp1e9FRReXisWxdvUCMN4axh1H7EMekoxQp9aqkJH9MioEbriBwc",
  "key14": "4oD6hSoSxXFRZZUYjo4uUHpfaswZq2NG2SWasrELe8SUwuugffwAumM2CBRJDeBPXuN6XC39rqYAfkrs48W9krxf",
  "key15": "2Dpw1vWtPWywYuGvPDEBeh2P3ZxSLsJXDHXWaEH7WsMNgELvWHte7ZQ9QeWdCYQuEAimnkWoZDsemh5PvZqsNod4",
  "key16": "5Bw6SpL6sobi9RXJFoVTPSjWjNBEnwrnMY74hsjijRJt8ohTkrRHVwymBZ55af8MMxUcTkjk5YkqzhNuJVonNh8M",
  "key17": "61X1X2XNFrJ2j8oAKpiPh86r6g3zTEAkKsFtpwwkYiMjnj1ni5r9dftguNfbH4BkECvy33z4PUtfwekVZ1dk2oG3",
  "key18": "2RfhQ2srMmshCrhAKoKQ4ykwpzC3RR2czpheC2on1yFcjBcQzneMtkSjEVsGc3Ubb8QzULj4NA5ngEidwEFqW7RA",
  "key19": "2iV9JGz7rhUe5FQ4EN3exnRD4pXNwBxC5Jra4jLTDnQ4w7Mfq4GJotxHBZcUnE3PqMuzctG8s5knHkDx8r3PYUfo",
  "key20": "4eDySk3vdY4ToWwi1EUMmRnuHuzZozrLf7P5PG978frYBhc6zevJae3g5MCz1H56sALn9dQUfKQPzxQgEgWaEHqE",
  "key21": "2VSLAB2xNPbERnkZfZhx7XwrrogkLbEeVMCvBXPzxR2WUhhvRr4ELAokVRqG55oQ5jYoZf2VaZ4mryjzoNJb1gK9",
  "key22": "2ySvCb3meANf3fxqPNe8uGh76c6cgT6ETHBNifKaRCdzp6YjcPU1HB3RiyoCuX1W7AKWnxQ2tSznbzWEMDEzrTdt",
  "key23": "39CT8DXJYqdpPaTSugSKVyVvvJkMAToyuZAH7Xc9bbDxtFh6ZwBemDtyVTz9NMA5ZsKSvjXozR836NtfUS2tjXPz",
  "key24": "4mPRJNC52V7c2AknUPCJWqXGKwqrfYGHpPbspxntwuGXJQfhbpoSuXHQymYFWzE12zQdWgtx7eTyq3A1wRrByWn6",
  "key25": "2gzyL66g7y4SL8vkscCUPySC7pdE2Btx8ExTdneuUQ5XnC6SXeKBeKkHfzuUqTum4EiXnTAoJmuy6SCT6pDo4hmL",
  "key26": "2BUJj4z2BLzZZ3bcMRgXqcpXW3fvHdCLWpbSMjPYNGVGse5i16Le5cqLDJyph5EThnLMRLaqe3e1F24QDSBTjdMh"
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
