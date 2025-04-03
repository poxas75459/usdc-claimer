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
    "LeGPtVyme9Ftdwd2gVwhbC1bZuP5uqVXDhyfsiymAGaSTUwtpKMtJeugLR6wy5bd7VxHUz3t25YxGEU8u3jj5i1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mxwBERYni8s8fZ286J1SPVUKR294wMBAHGGammDFi6E8P1WAvnFt2Cuq6adYarc5t5GpNQbjuaCDVXXbLWFYXE9",
  "key1": "zSiGvHYt448ZVtRcm75CX81DXRvBsQ9kKJJRq88XfVLdcmLmXcegpRizwtNEu9zU8KdWEN9VNi6gfLrhqRJGf6a",
  "key2": "5A21SFeex2GfbexYRUPZWoGLmyye9UrpDM7sU4J2hes9BixUEsLiRiy522VVWkYXpmPQdDT4JQcEnwreCGEq2J24",
  "key3": "3vzKNvXuYtgzqEj1vbSZqjnT15YmfXnrTMYrrR8vKUXkoM33MhRVnkMX3u4qN4orDaCmP7SGUcowGgDKUBkPDpnf",
  "key4": "3VY5yCAah6CXzg9SxHpjTfpdhpdNREgot5pJ25sGoM6hBCNwm7menFhWqS9Coczps73RY2iT3hbXSE3vXJ6nT36q",
  "key5": "31YV9BVWUVkZpGUafCa55ciSDgX3qyZuuJXiccPy27pdYq7QUBQVDGsnNFjz5u71N7WZcdTUFG9BCLRWfHZ4tHfo",
  "key6": "67n4jtdeuA7Mhhqnjxrdqr6PpRXMCRY2s7VX1jCxYT9b1g4S5q3vWvevuWQ9Kty8Qvdv22wWcE6QxrrhG9g9DrL9",
  "key7": "43GGxsyGZR9X2Re3fFWTzZ5qUBitFY7ZqSEsZTqY2vmoPiEfmvBmJ58svfAtLCxZQRcL3grTp5Bo3g4kTD2uo885",
  "key8": "2YnhxBsAikRmN99yAfW7XBaEgSqh2AnpnzMyBCVhNMLW7oFf8SM9YN8jv9jm3CDTXzxiRMNJSPNZK6shxP69N6pD",
  "key9": "37PnP3wdLfX4aQNHUZfLvmKS6NjzgsXQiCB46dVTzXHByKCW4R9H3of58UPG5h92trNqqdJaezoDEFCWkwZu6Ad4",
  "key10": "339s8zH7a9xoKm77SDWavrHKvgq35BNAtgiUqLCSARF3rkZenXZVBiKxJbtfXsALMhLdTgNDaDB2Z7ZRUVaxasY7",
  "key11": "5aduLAK3RpFQQUrS9k5mQkeiaRtZkNsYVNG4xKz8w1AfZHucCnUwxAgYeSKYadijoZKHCCk18HQwP8dJbALfnUgS",
  "key12": "3r3iJ1u6jkvJMCpj5xYoKSBK8hyfW7cidHR78AwLW18hG22gJEujKqQoGMp7RS642gdVozmyvJLKrRpifYz8MZj2",
  "key13": "5cB2GvhYjCKvxXBmRsMZigfjWxZLfeRzU7CscVCjaLMBvcNtQCXVh5n98dggdcBJCMCKRyJaAm5pDtsTbBUiFBGf",
  "key14": "2q3W75rshy3kZaWGmdU7iKw1SVvQd7qfqS7a11RttUpg6PoVCCNX6bQo9eAg1UzcHLsqrSbyFpMKZns2KLXxGZ9z",
  "key15": "4uhNfzpvwpERJZD1YvCbWZqHY9bSpiN91RSdoPzU3MF9e3n4xmFvCDaHGbP7YqNgG8LcCXAz1oYAbxsHMkYurd1d",
  "key16": "29DA9i7qT4QRD2voM9irGUsUFkvWU6sfRsGp3nas8VckNDPbW6zYt2Fc5bsbzTBLrYD5wsCFFv4qCenvCHVQ5QbY",
  "key17": "2TPBdNe5Fxgddi5wDV28NseYXGSz6oSm9L7jVpbdzbnEzfPv4NANAXXkVQmPuLg1dGwtQQzdiJkherVgsFG2NYQJ",
  "key18": "WrMRKW7h6NBBkjLcLt7ZfQHRS7oT5fRLqnjffWxiEgJ8RBwn4eA6Vms3e6XKMYucDZwEe3BhmTUbJ9MNeiP6cmZ",
  "key19": "5wf7GAhq2VLWKgfuhpycwxmEiy4cqVJ3c5wo6G8Ed45dVJiW56sScsozgBd8Zy68Z7SnjumBtTJYnyYZE1JJ2Cv",
  "key20": "64tAazHNpBKCAp2zgmFpL12My3PDRvtV9UxPRzbfjSxAdLoDd1FPz5hhBKrj7NNxMUtSVcK7JUSGKaJFJPGF6CHb",
  "key21": "5rprb42ijxS2mhwLX2fAkfNuk72LMFqWmQHArA6EbTBpQmjgqvXzbnbKbGrBqExRdiSrqPUGeW6M6AzJbosK6Vae",
  "key22": "3LyjhsYrSpgpxyrp9ZHsVwh5JpoixbfkbMy6gCqg3Y3dom4gp1paMXv9tTWJaq8ToUq3Ad1q39oKk4utCf3QoqcM",
  "key23": "2qW2AiumC1aHRtxp2zg1i9Qum7JL3BeMe6cshSeCykUCnA1i5WEqbuS85VbDdqGMZ21jRR7eepgeiGkuUFdxBBPP",
  "key24": "AYpULhjrgKw3YADme89YuWbCg3sVcBJCMfHFsa4jZ3PojknfnxgJp5ifDepMPfJqSUKJz1JQ1uGuczCFjy2p7aw",
  "key25": "4ve3DaQVaycZkxiWapGNx8sxUYMzvpzbccPw96GYmseh55yGXhhxbf8iycLwYKBy9T213Cxtzmn8huzH2NfL8R75",
  "key26": "4ja9oR1dj2v182JnGhZcUftUGMihBRsCoAdbA19cqh8E5PegVZ2qDgCU7cmCZEwZJxhTUBRGVu6ZCUyhvDDTeCCJ"
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
