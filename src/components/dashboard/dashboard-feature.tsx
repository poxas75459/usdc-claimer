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
    "3J3MK5tvqayVmkY8fWL653Cj6yj4u2K9oG2hdVYVfmF3BYjzhXMH7Jtp3wKgh7xiJBGD7Puce5NXQVd3QrrenTVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o8Yb5fYko7cCxjeBmRA3fJQP8reuL2ZEdz24RRVXkCUeoxRdVi7XKc9eLwBtABoKjb9hHJ3b49eBjr28AXG46xm",
  "key1": "T8i734YuPsQPfpSYqTKGvhSNyqgJT8EKmd9QHuG6fposYnFesCx9mGVXoH98cit5pZXc6EYqQg53jZFAXpaa4CB",
  "key2": "55d4eViSDDPYEPnXPXcQn4obvz2HQzSPsGXQe6KyoKUd8Fgku2VhekvxpZQBVpCZZbcad9t7mi1CrGhCYRgq5qVz",
  "key3": "5PAGBiMYjQAZ1U9Ud9KhJijyysofWJR6HmDurNmmKNHuAYTXtzopiskiaJBWiiYtTCtcobqxvh9w4E2Z4GxYZwZQ",
  "key4": "4QQs7TqMs59c5S4ymwmb5jJDp9VudJasvKS6U3bBij6AK8feaUJCGMDQ19z96wYTfYZ1JtH5ZDmNUkbpNi5h2GhF",
  "key5": "5JVCZWNTdbQcJwj1qztGtXbHvQ5EmyUCtJxHo3ZVmvjAhKvWZz8zQuV9JbV1EyxwzS6DrNumw6YFX5EfwnUeHMAd",
  "key6": "39mc4mA8jmkYUn6zk1QpMeEe7YVwDu2qN71HVuRGaTkVkchFEowdVZHjL69JQ3d4ZXxt4QjBj5xfPpAR9LWke3FJ",
  "key7": "5vdpvRNuWnAXFQzSd57FPEFJmfSoqJSoGyYVpESJbsuRcw9LzjjE1qH3bwaMxeVF7WFqDLkoad59SrGFAqL5kW9H",
  "key8": "2VunQxUXVUsZuGYAzAxUY3EEHj4Y3tKmFqndwouht69bMo7LvSYV353sM24zRgyWpn5184TmJpggmwL3mVZb5uHA",
  "key9": "4rkzJjQnj4VLSBykJvDDpSfk79U8YKEKkXh1SYtah97epadCaVHq22FBQ69HxLGV8WR277rxFoTThd8Vozegu7mh",
  "key10": "36TXSxHsGc7JJNSuPrVyz93LH3ZAL2nGu3CxLW2QxwnzjQWEo35WSmsE1hPGjRjBsZzT3B29487nJHRH7MFnsyXV",
  "key11": "4NuNykqn4pnYGQg93kvY1V1y7pfkWNntfsLaiFassu6pMzxNXMfxYDV4acRiAmmQKt7T8xJmDmDP6RBiTap6Xq42",
  "key12": "61c1tTj1gcRbsxAgeputeiJZeQDCJtLWv3NDSVKDoyzhg31dCogW6o7fiQRq3sGG6EDx3jPVGKY5baV56dUdP25a",
  "key13": "4X6HC3gcX1YMBo5NLyucFmGeTXoAeC2x8wUGoQkrTuaaNuRpDrhKzKVFGBYrFLF5oBPfTXsoRwZGD58QN4vK2Cgg",
  "key14": "5mQfS51PVGfrojxidV8vR7ghXEmCVVoxPBiMbS2UdmNe92PopArH9pMRJkeqcmYj8g3TeqAUYka4S4dDXz5H6Vmn",
  "key15": "4qYfwcFiRSVfzrdP6aM9Ependze95GWNLqGrhqc1dNJN1z51iGRhFsfr2gFcuYEpARBt5vBGEjiwSMHetvCkqSkz",
  "key16": "3xpe8mjuoZ8Yyiz81JfUXdAtsLHooDYUJaBD636MXQmXpf5GemPAJxU6nQCmZdq9MrZyXHAeQw8ue6aQHWCzV1ev",
  "key17": "3Rf2pFtwJo5LJ3CZN9g15wU11sJCQt41hzRE6aquXUVa9MnzsSvnvpnNLRVAqbSB17nConUc9HVJWTk3zVRiJuHb",
  "key18": "3P3ScNTDvMVLZw9hJUWb1pYaXPyDdKMgZ9XbzRLQbv4DBrc4A9dQqQpJ2hTezHhF5GBfQhwUBKP92XQXeR7hEgDv",
  "key19": "2zbz1dGu7SDT3mmP39oNNeRqEugh1PnqyCpzjon8EqLwjnFkNHJCbdJ32L3zE3Y8ga4KR7vFkmRbuxYytPa1Dmpk",
  "key20": "32xQtsGvKGdLaVdc7dhp4uB3yzuja98ZxZMxXQGkTmwMVv9MDAjQKsPxvCDEfzWwrBvAbXHLwwfXeAADeegj8oSa",
  "key21": "5jc6mssAQ8qdMTtxZ67gjuqrt13vPLoRQ4UGv3WaNVNf1ku54TbYoaV3oQR5sw4Ekape91RP55tXXhPHQi5YXvrP",
  "key22": "5F2zYHWcBv1JaxWVWXwWBhTAFSK4QDrBNriGKAhaMkJPsFaJH26zxMUgyeaeBPfnHAE3v7XjL5LGzDx2PfyZkjFb",
  "key23": "5q4WEWVZ1fY6Hw56vt5m35rtjD4aUsWFvTjHn42ZD6aYhXmJuv5YUXkYRcpiHBw95tTUPMa6MsKAiGTZtYyA3rGv",
  "key24": "4ek5BiQ5aCwHL8vwu5nEg97PFQLExnUsJtsfRwmuUQeCNjHuNbLi6Lx8RkQLcL3RjKDy6qG4tD5qsfoBjoPbnmtT"
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
