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
    "49hjR8aqNiUsVkatwCJR43DpVNX59sCaCTuyFVtghMFBugaGsQuJEPYXy22j9A9dzZjdJ4Zax2rjegUVgiWNNwWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jVj4iX77qw1NhicccZtp7LrvrjbAxZL8uagoXE1mA48KdCxWuobP6guAWgCWDFj8YcL2y8jEi7uqwKkRGVKgEB4",
  "key1": "3u6VTqA9MvAg1FLmQeqFF2nWLAPzYXp9UkWqorTC1QMNAtudaMkQzhG5ARtWAApjNZbvGCooxrYSe8kyLYtict5J",
  "key2": "55mwFDAPqvg3PsvZptCwUuBQwjVwT5kRgVWmW3it6ytgdXCiDMK9Ehdw121QDZDiXGPuWTqRteAFHBcPGstqXeiu",
  "key3": "5y6XjgXjqC2XNTFsjyg2Ebz1kbHLqirNySLnqG1Rdyq7sqZU4XQK5qjufn7CQijctcxLe9hvvXHFdsepUbn81akD",
  "key4": "5y5fPHdJHDpk7mjwE9Hk7FVD1jyETGZwqdKhuF8TZhyZw3gE686etJqk7jrn1PzRTsCdny8KKXwutsGTkqboqNgi",
  "key5": "4rxKGyreyuYg2mMUgHVKjkRbdeCk1yaQbvPpXTNuKGN44T4NutJqc5HTPStegX4NQcjb5mJxBt4hnhgvbWuSPApo",
  "key6": "2hiuH6P69Zi6pcgdZ78UEAz9k14UYTiTHPh5n1LDWsKK4DDLJ3zH9BQt3PJKqu1vMmZynBEj2nh2EkroKYwUZs16",
  "key7": "4PVQ5A1qAWRVN5JC3XPSvyJL9WJ4GsMdQi5s2ctaTqJWyRSoGquSiHKgGBc4kbunk7ior6J8gve3HjV4qiL5puaC",
  "key8": "4H76NjUdJLruqTpCCx5vrjTA9mr1GfvtoRup8FQSNChwxMBVbFKKMiQbuzQ6t3wkHaUpLRnXJQoWrjCt2Hm2rktK",
  "key9": "38wyBk1y8XAbpSMY3N6DkPVUdho9xWDQyw3nEgkbUXhRfmVD9QmKbt4DXECyQ9JYUSEBoAmrrKuyhAWfMFWYofkA",
  "key10": "2eK343jqqpWQr49xRFmrx3ye3vZpR8s2FqBUSLkd1Uw9riQUCHHEDCGQEJy3Qa5dDf7JZEF7KkEi2uAXd3xjx6FC",
  "key11": "5KzqrRkdsxMMGeKyhC5F9WwEwKouAxHytu98yv3wyWv9xrPF9M5kSgQQkzWZsR4nhMnzdFse6CAGicvbcvvuo67U",
  "key12": "2BTB2V7Gtqh3CpnZM3E7gtxyAhqsNSsBNub9yPcdNrV3sJKfJTr6wp7VgiWRPS2CoigymdQXKi7sorJPVhUGd4pV",
  "key13": "jnbkZWvdeXuGVQiSXk4vnK9ki6Z3r7wvmotrnc1XnCBT1ZDReLJCtvxH7ewSDaCtBP1J628mYTsWNCxGYL5BAYM",
  "key14": "4kcRtq44LYDBafWv7swCCUGCtUNVq1QEELr2ERnZ6mUCFQQDASReiVg3YaNCpWiEVCSCPckaYNTXE3mo6997fvkB",
  "key15": "HSYXv1FUGGqdnjDb2bT3rBtH2zsBpm4a34MXXEt37BW1vSrxkkGnKKk8jr8YqwXXVRdu8ZqNfzAuRno1VKLL4H9",
  "key16": "5bPiVCh3mMxt55obGzBgi7dDXiEnov4rne9ZdCmZWKdwXo81djxoB1BxNXzNABjWs7Dg5Kt4DxWnPqY9FLd8avoF",
  "key17": "3Spmyqfhx9pd8qTLgEjHbErPDqkCWjm5EVvf3pLmiJsHfi8jGHvTJzSMxBbk2uUg76CfNg5goakaWEENd4tPSELS",
  "key18": "2Yq5fu9hpXsYWvZZAE3TFoW7TxvxTmyiNyQYnkdoadLEzEZ4kqJpYEEqBSZTGwNssjF7sFqqrR98HbxcdG1oA2Bk",
  "key19": "34tvVeucJ9ATEnNEiB5x6VNx9Fvfkbnwe8Cs4JaSw8YRQkE89oASpoDE9a7L4HQhKnpbh5spCa9x2VkxjhLxzetn",
  "key20": "4C1jHoGzWW8HRK3Ze3fJuQhtXSeQT88Gypbs2STcLNLy2GkCpAeQimpx461Xe6C9XfduXP5Sm23UQgcQqKHNKAL1",
  "key21": "55QtqWWCn3iW2RSE75GpXNEfDFvtJZKBWwPAt9SskHNaDdxmw5KQYSWrxTFywmmrYUypJvoqk11dz7LuDyFNXPYa",
  "key22": "5StXsN9R79z2FaryFr5xmXjSC4Di3qAu8YajhNT4MTDUswwibjEjEyXAy77b85Q3rmtYh47dH1SejpQ5maxvon91",
  "key23": "2QW2d1QrQya76soQH4s1oBpi9Z358bmkDL7trfJmqf3mYsQtwRDoMedpHJcUDxzSjpC4VaWAshVxbbFSRN6WtQcj",
  "key24": "5m7vivcLxD2gjV22m9KxXB7xkUL3JEnTxayTAaYBDeRis1T787MiQyVssqKrThvd74nXjKsCvtd2j6dDSGdXGyPM",
  "key25": "5YecN7m6d7PdZKeG5Dq9ungZr3zEZeBb7AUGkzboXsEpsYgfHTJAxiTqzT7rdh2pKJoyQLCyq4oSq2Tyn6oFkBWV",
  "key26": "5aYh3JsiC33ViFAd8Sa3FELU3iSb4mau6vJr8G1QofXJNgHQd1oAhGZEAWnWCqBh2qbcA1fkxJsB8L6R5ctYDnEa",
  "key27": "64FLwWSsWgQUqYCTc3eMRtdFpgG8xnpstqeGCqDdvZ4dHP78mCveW5ypYpP67VFhKa3w7QbKKsDjRoTpLsqpvBER",
  "key28": "51wgHTi42RWT3h7vQ9nCeKxVBQSWPw6RSGhwonZGQfhejXvKpxWb6EWAwDK4MamrHcNbySZFkZkeGUHzrwCh7GnZ"
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
