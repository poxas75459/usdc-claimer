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
    "xUxu7KdJopUVBrww3RWXYs9vwTnNtu4Vd3ypiuxHKTgoN64dJwEffeWot39cv4s6koLmmNX3w9PdyuFUn1F5JuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czFhrkVSMQjuKYisxAStmHw56C3p4A8d6LKbJh32gkjJbcn1QTMdc4V1RyfNcvGnYTfSUFr6dDKmmiYzVr2AATt",
  "key1": "4YnBK7DPznznhF7AvPKLovAVbiBEDUrWANTbQ3xgeaze1bnucqW2TF4qF5dsWARNhxyKphL4ZSpVpz4BjxSwfhHB",
  "key2": "pWUa57nUHk4J9qweqjMfHmYJuVmt29nSVpnFPHHv4twe6DEJnEGpHceXBjWNLDrCx1wZYtWH6gKZWdRw7dqd6ZD",
  "key3": "4BP8rNHCDzn7xo2tN3PSdvz273fyRuTteSRxNC2adKdG3QssWrt9k7UTha8xuF7tpegSFV9yawW8ZtozBaziftTv",
  "key4": "3Ddio9v8DW3UznKSAHf596U5o9cVbWMSMKXDynZp6RwCyoDHttqaudf2XDUxat1r3vhjZVztxui3gSQnnrcuoNt3",
  "key5": "cmJyG2wtheJpzrfwfzMjCTiWu1iNu1v1biWyDoaUpHY7e7nsZdcHH5dw5cxaE9YPbsNFFMUmUgDZ7wTZNSmdyQ3",
  "key6": "oT4KzYMUSqMGvaxS6ew51dYVe3fpdimZBM3m4dnKyKLRWxTkVTc6RG9fUUJkc2heNSREqMNzbfVAFQ81pRUNA7j",
  "key7": "3aEu7Ed1tLZaX5DdsRBMDv41jeGKWpwgdaBpv9ZCb5nNtMhgHjQdM7WiubTgU55xLuQvFLfV6YxMX57WupDhkCPU",
  "key8": "2AkzmSKvJ8hAjYCX8hD1e53fy5gE7aq1Au2WJZu7h7FRpP5mz9eYSkhiCQYR49dtFdAWX3BiD7vEfX62p87Cxov2",
  "key9": "4zNCwzLLKP99Vrgn1etAdE69uzxy4bXeaySh8gnQH8i2DKtt2i2cGKE6DkR6QTd5tQcxjYERum98HvHWukn5doQo",
  "key10": "2acuSywe8mziJuV8mLwhNJ19RrGuwkSgcWVU1VoUvADW3eVDG3fKHKZHX5K8ECG95EWUfHE1ZVy1wRjM4UPoMT3T",
  "key11": "22G13WvMmztABTqkwai3TKvXfutF1BvmCmctQba85zFrwd3EzShiCEWwa9JLj2j9vwaKb1bfqUaHfJA1cNa7HLxE",
  "key12": "4Sm2496Gk3oRvTHfaURcXXqYiQVTMPvw7ATMjmqvjUffh1shGdZwYYnXp1aoLTN17Mbbt6TxyS5YboF3WW8pWrxM",
  "key13": "3Sm3uxXcWD3ENhGrYazQt35aDu8o4GpuiyBdMHuEFmpkYUd2nepN17vUqi8RMFZna7S5BkWAAkExMqxWL2g7DjkR",
  "key14": "tM9DTwQsqMmvqk2hnfnqwQub114cLwpzDfdQmHQ7Q6FiG8XREMEYAm6xbg9vkfLJ467wkCMHeUxL7qom2biudue",
  "key15": "551BfCoC6XGza2snxrYGTUUbHbzUoVKznutcny9cJUpGCLeRLYQuZViemJSVZMuMrVmFjqLVTTTZ7dDLrVrwzgVJ",
  "key16": "4TWfdeZBkzY2K5V7m6W4cyghmddK27BHJMyj6Zqpv86py2oPzhgCdPABCGeFSMUycFPdj5buALAJgcjnNKdEHeFL",
  "key17": "5YKrg6GtDhQMufAzTCoGRM7bQ7TzAqFvw4XU5XWAGXgaqKG15GrSACgdbVdGtEMMKfFwThYbnhvAb1Y4pmuaEPc7",
  "key18": "SmKyq8d3a5NXJ1dZJi2znJqnLgBHQRf7JhXDvGpBFxNaW4PzGf5i3qKAxRAJKq5DyH7e2gEcM1P31STsuhGaMUQ",
  "key19": "HdGmkRXm7uLUiNL5WN5HbDjTwa2AmFdMe1Zg3RSm6tYkwX7XqouZtgUA66iWszz6x8rtwJkFGEyGrXixAZAKXCj",
  "key20": "4XibY5JQcN16n6sVGZo76ocjnAHarBRDXpSaPXMLuTUon5SVXuzviN6Z9oArM9CfgkrqtEV5UC3jJ6ukMCpmVFqR",
  "key21": "CSUYwukYY3kpf729mu3YasaMknrEtKNtRCzRWsghxe4xGURD2HorE4tHoHJEkMU3B9t2uBPvD8e48qyqxmnDoNz",
  "key22": "5duUT8atpsuLS3hLV7BceguapX3df45fBFukhgem2KpJRDs6ka3h2T6Fc6bSViFZ53Wp5mPMziER4Te4hBqBykAs",
  "key23": "5jDucw5F9yCH3AcHUGmZPHgAo8PB7AS2VyGRWPJQVpp2TaVengiJDiGaG9rfVMxvuyopiez4QptmprhycHQYT6ze",
  "key24": "4YErV6RYBJYHX3Abpt6HrjEBKQYHaoFE5ZHoqnsfJJRtmmxRteHucfuxWDUg25AsEKLAtRDQTfg7k35wpQVyAeXx",
  "key25": "2xMYkyVpVj7DUbHHT5nCCwV5KRbtwHykkcYjhrRfp9vemjr5RyjpR31wywak6UR2bmWwL35nhZG1rEgHpoYC8Rv9",
  "key26": "2jXyuu7nZQvh947Z6EtRg48SHFPSVvLjQbtFv6vWoMXX9gT9yAUXCTx1VgA2Pty4srqEX7fCViDJdrnCTVt5Ycz8",
  "key27": "4CQJCvD58e8J2yN6pye5QwJ9Kj41BYNYxWmTV9Sm26P3Z2NCKBKernSLXp6nXqkNDUMYd3JtDm2CA2EZVzhg7TDL",
  "key28": "2UyZicxEj1r6yn8UdAs47mAExc9aLyPiMWwijjNCddAUCJi5VrsCPEK7djDej4ZyHPsEpNNn42daYJ32UWYBNZCZ"
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
