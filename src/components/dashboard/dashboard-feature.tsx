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
    "3vKodez6obfpbg2s5VVGwvheSZf5vh6WAho5CHcN1Mme37Ar1n2mc4uC342kdfqjRYFKWGbz7BswynKRW5Srigra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iFZB65SHLTQFJqJmpiX14ZrDWwnBLJPGq9fDeFDDGW5nntWkfw6By1yHmwuiqx2G22zWkgEztdgrYyvkFJDBt6j",
  "key1": "35mtyhPrVkGkRGbFVYR9zEsFgXHUY6uBK6tCSx7f3DMMuNm5jc8mfiA9dDZYTqqYeDhSdw7D8JKUbar4wPEA76QW",
  "key2": "5gwY975LuznsQpDC6VeWLFAMZ8bmWWCxC24EjpyktPcnvAtUfHt8mWLkdjLRgwLZJsusWGe2xy1vFZQt5yvSzTq8",
  "key3": "4jw8CLB7DKcJgCNXjhzDSbBvo2GQS8jCJvSzPHsxCCwrMukcZv9BeqC7wP7GiP5kyxFKpZgCC5Dn61PHYP5RSvsz",
  "key4": "3AhcpkfLqVYcCVpYzt7wH51MXxpTo3LBm51iJ8KgHUoMX4y4hVyZJp5Q3s7mfrXEcGFeNtA9oUs9Un741YbEsTJX",
  "key5": "5EZX8VzM5SgW4peWm5D92wLBhhsQEX9er8oVyivrUFd2DhRRo671bh7BiynEntndCaEQb1WUQrGZEeuRL8YY2seZ",
  "key6": "38ZuhUoVE3xovEpMJTJkQbd9tgaJWMZyn8ZGPM1V4CNuPVXk5exQyekhMcSkSfHnLuP5hpv9tRAR4Gk1hLYZ7rnK",
  "key7": "64hdDcTW2ZxPsafoFWyvPsaNrZSFAjPGzfpL23Jrbht2fAYedk1BfhdQVb3DjsTxeVHXBMXEhoGWtboNFThtogvj",
  "key8": "63LpkkNYj9GXpa4dGfnriqdKLmmp3UzegcvTXn2JDaNhwgi5baTd9pZWnWPuCK5VHyf8Nnim5ME9W95vSe4bY1o1",
  "key9": "3Vk25X1kd1g6MptM9MycYgye3NHwDhwxTf57gmdPVYZGASHo6RcqLzsVNQT6hP9K1U2VjWMPaJG9rRrsDJWZ2xpH",
  "key10": "4HoTo4VRShfnrguL7uv4jZbVn2J1UbPxYdYRTD7jhSb8wWyG5zakGVSGizdNXtJDgP9nRirYoGDGftdzEV9pCZ9e",
  "key11": "4NWAjWwgPbjL1z1TdNUYg4WT6wKCYvq3f9ABS5TsQHNKtkZZL4YRosQnRX9DJzDiuFNt3tCbSuiGhUEb8mnw3VHM",
  "key12": "3D9MdPsDCZt7YpdARK52pKDA9vYAqvXyzEgk2zWxJNmZo2gBAQMs48gd2rmaXcx8CjTy61yVWEffuSVNBvxLbRWo",
  "key13": "4B139vd9siY5xyQjFADQFqU3Tnqh4imts3cpsSuRP3pryEQur1ef2yZFgDNNoMUHgZ1S1xsRdRpSEFrUJd7SkMH1",
  "key14": "59YzKktE3qUdejXR2fvjGPdphhcrTKQX1h1SE59PaKNukQ7gRFNADnFvrzEci3LZKtZkscQGkCRYx66bEVaidTqF",
  "key15": "5jcWnZYCuBrY7ov7ZKYMis2viCkwtGBGkp23cT2KZqGT5PRFRcvmHzNGo8hbjJesaU12WkppxF9TJ2EbxXKJ5FP6",
  "key16": "2pn8Wy3XK3YVQrNuT7fj6z2rvz7qEmXyfvRQFuNmNhfsCsW3ANjVya5tiWvDBewmjf1T9RMrKpf2gygAh6nG1B7S",
  "key17": "b23LSswGNST52ZzLfCLFWaJpFiPQmVKkjufwBVFBoqiVC7AiBj16E4kA4K1LrGVjy5Qr3vW8FKvUoc81DTA8BFX",
  "key18": "H8trLJk4LKCQJMuyHhsqudsr7mv2XLhfDn1N5qakdUgdTPaZkkXKG7UwjxTtNAKVsCLvN9H8XkBQdJHkgsbwfXu",
  "key19": "a39KDp1MT4fJidjqyMb3s7eJUmWQwqFYX4bHUrFRr9xStzptHRPP6R1p6kNp93DmqixggzU2GzbxxoXDL6tutmR",
  "key20": "2d3L1ECVnKWY34AszXTsiGeHsiqBUSBopxRcHpZRfzFPEajyywfViSaYusYuvSbjQ23JmrKvgo1CTjV8bjrZJkwE",
  "key21": "5vkpuFhjnEj4BHcCr57UB5BYnhENVGFusqTw4TRhXiiscFC3R7ndN1FDeQBGgUb4FMPA3T8z1oe9dbKNqDy3DS5f",
  "key22": "4MKGn7qYXhvLqgXVM9tAqnHUY6qcjBVTjwgTuoTTZUGmmKT6ZUQ5ZmZWTPWXv2dPMFFTAzVLTcjR9eXwF2eGF6np",
  "key23": "928EsgyXmSehqQq5UydpzBCQ746f6J4FbzCJYjLDv5PHYATALeiyu5nVqMnVg1yYkPPZXzDtXiyo7zTDY7petQ4",
  "key24": "3Exs9NxWZ8sdftuX5ex1uaMse7pEMtvgJoukDfUnJDrBgABE75Snwmoy21oWRwogx9CbRbs8LpUW8aXNhxLMY6XC",
  "key25": "4Wp4yJ3NL2Mn6wxBwDbZrL8c8FEBi52e8mhiCeDymRAJ8F4kobPD76qrKsMd4trkW6QYVX9TgxwFk8fbUkALdpKE",
  "key26": "3MbisMVLhxw1YZFK3PmYZPFYpFv4jriAQsgzSadGYWrTzT4YFoDQezC7MjCqQ14hW6tJDnnfMzqnkGJG14vXYVe",
  "key27": "3Yba33KQGsjBNJuAmw7MvJusk7SQFQCVj4eAdDhouUDMZ3w4wQQuJrumGcQsGm7oAutpTfCd8TU9kb3TRuGArrnU",
  "key28": "5TfAwE9joWwakjiBUDaHpBPgF51AriamEJScHTNrqY9kpb3GgUrMGgH1GqVh2L8qNjTX3kSh83diKxo3VtQZM6EY",
  "key29": "4pjzFawWDZXvDDdGw5d4BWTTdAK9icXn32QKzm78r38hWRTpGQGviLBUiVHucZp5xkjpb8UwZFh4E5MWa3DqnqZd"
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
