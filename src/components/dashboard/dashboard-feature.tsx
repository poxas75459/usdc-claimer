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
    "64Q7AEzpsE9MKYzGwijSkE5F26giEo32pbuqrsrh595JZP9GoQwFe28fEc31Yy9XhfWRZUQUBSbe3JXWnbaKZd6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454qCsuLWRAp9kS8V2Rco6bsc1PtiCBjGxJemv3CKVWSCW8ufBmPUhLnkRDtvotMsXUh1DowXA7JUYHFgTZNtzoK",
  "key1": "5Js7M6mdV9HvWcLxF8c9KHoFaK7sAJ4YPBqj2PHEFJWvxy2GmnJBCagT3wJrNR6Ni8W8teJJW5EpY8heSFbWBn1J",
  "key2": "3S6AHnu6FnewnMJrvi5DU5StZzA3GAASH9dUM27HswRD9xpLDJ4Nuv2kayoAWRL9VGgBcSZHzQttEX1jDdL9VK87",
  "key3": "26JcyW1bNWmmBvnUvxxTpbtjvjX7p7HrqfwZM3CXyC1BWfjcYJBbhsR13c79T1Dh8vvoYXDPE123FDmrDqP4FQBq",
  "key4": "5uieFauhwJR3o4JLXSnvucemac5frH1XpTBmWUabCWCygCTePE1T1UodrHSvT15jg9mfViCFJ4HhgS2creMXKN6L",
  "key5": "2kvyGiaPUPkcDm3oy4QowGy4J1JYxX8zEiLJqXVPz1D77nkknuvKGuRjByVtJMyJ5F1oXKeob4nAwSpdQfWaqnW5",
  "key6": "tguiKbvWhnyHpth6nrNX8oAdrArqFdheAQKBeVnx4tFh6xNBixvrb2qeDiNhKuoen3Y5tFZoGogKdjqPP7GTHF3",
  "key7": "5LbPn4oEukYnpX2gnEDA1rX4cbem4SP7W6ha5wYPteKyMtUY9yT2n8kmcweVJoi2tEqKei68hxeCvpwZLiV9Gtnf",
  "key8": "3MzF6H9Ecuoro6wj8bWFANDMqMQj7h3Cp1bqK71uXNAUzY3mzTrsYHdmr32AuLbK8KaNZmXPcD5GwSrjoMu2rV95",
  "key9": "4nFUFUkQ78bXX94iQqEQHKnqk3ffAhSxVHcVzgDrGJ5LWpxM99dh2MM9RaurLtYiLN8vyk4LSuKXnQjNDv657szo",
  "key10": "vKBEsSVHdAV5HdYNCxXPrLTuU7EKC8tbgj6Ua9KoW91iqZiQfSAvoD2KhaiLLwMjHkQ99s98pSxHUbvx12kbVfe",
  "key11": "2PZHxQc5T3RqZ65gyjrumgy1WYqsvfT9GMomkJ4UVH4Z5YdmnrP3qKbKfrb54zr95wqW9pTu3vdWSJktovNysgjE",
  "key12": "3oSesZRcg7KbwvoqEqNyRHSgFYEYSm1AFFUiKqiSWJwo35AQhtL8NV8u43dCUvW8wpuNrHUgdADC24qEr2F23vcw",
  "key13": "5QmwtwVvjw4KxqRLD2nuju5bEbN6bkzmexWc5Br2YyLT5nTLe3gD9Js39SPUyrfhnRWVgRxa7t9Yw7JGKirKDnA3",
  "key14": "43b9wb5KQe7LsQrSyaDzEiX2PeskqJpn9JxENEuuXrrppncRScLes7fcZf5GLunMwFFUpAsoeD29x3EZs1HHk5DY",
  "key15": "4kRdY6siLePmy1SPtShVSj8t9kh6rWf54aBzyozhCfDf25Z6UqoGY5dCBRTpShCgnqUwwQFvzmhLuPuLEgUcyjVP",
  "key16": "3CuCNimpdPgFaw6HUv3g6mNE2s4Kst1ziAFDe8Zd8A67jWowWSSwdWLR3Wx9MbYQXbpmgZBGbsoYX1M4D81AAKS2",
  "key17": "3LahtfzVatgoUxz2VoYmGGYyQc5NF57if2sZDy2tAgnfj7VMTAwJ8WwbW3QA1aLkj6itGUUfHttGnE6zopqKXM9W",
  "key18": "2UDV3shJ4vfWskDBqWP8RKpxF5w2GqeooBwojyX17LURYp1ouq3XRYRf1PFmNVoj19n9Rqk2gdp8pmfji7KgJh4a",
  "key19": "Bn1DNUghud4oKPrRDqkLwTYBqjCqWpdDQM1UubtidgE7eCepAeJTLzqzVF4dFKSm44Gm6rZMx1UxbBKW5UPGsoK",
  "key20": "2YfVfFfQPiJzpYVLE91t6Jw2a5js578XqmFhHmsTk4sewCba7PopN5xjmD1UYDoQFMaGYCoZMfMV9dgSycwDQq5J",
  "key21": "5xyTbskpeFK2DrmfJH85azJ9D9FeGQy6ssZNjLpra3Hamr9ow8Ej4oRjSsM9Srcat5EtHGxwFFVFS1ZUjHsUt1Tz",
  "key22": "4rjmPTGeGksv1kozSeLG5YX5vCumYvnxSgyR8EtofiEQYvwjTmfqnRQUQJFWZfYFVshwB7ieLEmmXTXiy7BjinYQ",
  "key23": "4JdoBtZoJtNqzVFhzefvutvpNnqZHdM8YxhT5xfztsdvRn3ZkmqjgT2J25MDZbvxFx59qmpYxFMwREwd5r84ZKdy",
  "key24": "5VvcsL16jCTjCawPYTDkaWDXoVhzAzCGaPmjwH6FjbxFxHtqdF5PSYF6R32gVcYZ4mGAvovFDRX7LccQJsNt28eU",
  "key25": "4S1YspVKfS2rcHKmVubNFnv5AEgYD585BZ9ghiZx7hr86Zwg1R7KbeGyXHTQDTXadp25JRM2KhLRyzEDK2YkpYCN",
  "key26": "54au9t8h69mR1WqkBe69xbarFGC2G1pdqeLQv79M1mYrSV5qB7J2tnbs3nutv6G6NcezSNYNxvNYUhnEkTf8tHHi",
  "key27": "Qs3TXr3TTZcx7c36EiDuA4vgUHv3mJtq6RhEtkJ21x4hHS7YHXo71fCTXkqnPuia1xz8GNM26yUTQosVKxPcWJm",
  "key28": "3K8WJGCFPKvZHYaB7oBxm3LT1YbD6PGCLarHJyibXJtyG7XVL927CYiufR1RhRL4RFwondBtFcf5PsbypZbgz3Wx",
  "key29": "4Hdrm3sSH691BgkVJe5YBubTRjwYLsZdUZBb4d2YPqZsrV9rCGq7EzQnSgyHCq7Egi6vSziXTZBHSLLHQ3diCdb3",
  "key30": "2ycy7vxnUPoRgxVcYFqGcw7PZRPDdY7a9yhaHCzfNAqnH2VaWKJYT9Afu96SooTx5odGvpyiLz6g5GeirsGM4Us2",
  "key31": "4y1DoxJYEeDqzumcgUL8Dbr77bEDPaVLnkgLcZUuboUQxEB12jSMwLK7bL8K36YjKYAJHWiDPYGTJEJSQiMoKhB2"
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
