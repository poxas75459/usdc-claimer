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
    "cxgEFt89f48toZzjoakdAYtAe7BAJp6E6BxpXx2LFFYGMvYoXxxCVFceyfqJniMHNDn5G5LU2MxLZbGP9Z7zrFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58zuN4iSwELQ56ymTXQqbLnrEhwUsk8hQ29En3UeBqVb41xXvYa9WSS2cycfRFU1CHbTaPscY3DJkMxftiTnFLYb",
  "key1": "2849YCYfyoPBEp8RoGf2N8dWtdAnvgB6LwJUSCa2G8C6Fo4f6fdDqpRWJ83YUbugTXux7Zurtob9mfvPaPTev9cT",
  "key2": "4961kUurXgEhDNW3ZJAw74e8ydLu2UbingJUSD9Wp61GobwyD1GaN7ZA6MNdUnzJTkhFjiKWy5EsN1GrdTQ6oMSE",
  "key3": "4bGbEYErnw9HQQvbvAcaugvfho5mh9GRayFzKuhwdsMyoysGEcNMtzh4kanENQcbi3qoAYpdhKa4anEzPzPbUTDo",
  "key4": "559mmmmhBwBCzb8nJwkUikFS1xHtdEAt4S6PJfeAZU2c7uvBybhaVJwu6QNw9GGwSg4hpAkto3Z7NnjwwMpFjDDb",
  "key5": "24eNC2xhNVrkwvYf6z6MXTkWhTwdrzymcV9uuUacD9AvqtETRgLTbN7NtkVuZJegb94FPnz8AptQe38PNurC9w3s",
  "key6": "4D8uXvZ7BAm9pVMsXAe3srBbw9fMq3M4jA9ffmuiin6TVGyz7aVybBqii8LjVwsh2obSaLmrmkVXQPUrxsBo3Je6",
  "key7": "3t1H22nZ1wdttw2WQHQPogikmfZFfGybe4c6P2NYKqTQCKTSn9LSUp2Pczc9zwBuT6V31zXrCgDMZKhLVyE2smAZ",
  "key8": "2AVWmTXpFjBWtWfxUsf5V585AhnnQ4e1in5AjvYERQgnfZxF2ZFnJgEK8hWiVS4cxMuj29co45ugZ9CZtB5KPcVX",
  "key9": "4XcoU6dN1qpELJCsnPVxvnqZZrG2oWgNEwyYk7oyfg84mhW8L4KgUkmDuhHtEs19jZxbHzG58vjPZd33RGJbMdr3",
  "key10": "25q8FDR6dA87WipkWKUhjZycQAtdP8gSx5RMFA9fFvveRuy2s86pr8ov8zSv3iXZhVubAsrYfgDQUtsvypEsDgUt",
  "key11": "V8aPm6memZQDbEhWVLmSi8VeH97twFqzR2ymQtM7r7vWvNA4tFcTPanhPRJGVRpVe2FKpXQ3og3KLimNnVnbvnu",
  "key12": "5LWDTD4qSDNTT7mwhYdvftb9yhcwbfn8aQjXY6kD98aur8jzGCC5yV1PtxJh7UUwwSAjtoRa8SPpDPpajRKCZoHa",
  "key13": "wDkyWrCGu9VqwTW7bnxyamfxcBRGGZU8s5ZkWRqePKM5MadCJR6j7E34tDMyyer3U1Te8B5PftGqJttaEAnzQdq",
  "key14": "3CZGDg2Qx3AqfwWwTNBe6YsNkBSLEtuxhbiKxxwdqGfM1jJuYejocjjqYa6DntephsHQSQ2LMqU5wKUHxs7q9RwV",
  "key15": "2tAYuJF4CYvZi1KCKvssn5URCvBURQ6BvVa1c739AmrKboWTNE1VQGNn7XzmN1xUhEcVRAxLBXhQjpDLrVRaUTF1",
  "key16": "5nz4qi6dHfTCDEQ6fZzZxYK6AgfbVqWsRhYFPEsjNF3nqtgMWfhnKYq46r2tH3uAhazCQeor212N9w8F7JNbyMun",
  "key17": "572W82PB2kdZmnDE4MprP7eLyaNdxTsKRPhgYV2m4xALMxssgXTotBzrHFXXHB14GP9sDx9cKRwWBruq1PrNBHoc",
  "key18": "3HWKeSqKBvg47SKD7kAq3RfKHSZ8AbA7x6vNmhNAaFdb5b4uanD2mU7ef1DXNM3hXJV2gcywQx9xV6FsHx2bXbpW",
  "key19": "2rJy3cr8ZPLerhtjEMBFVzCvP6nhkEb6C5pSbnxZTZW4LeoD1xsurGaBktFKtWKwcESK35KetpX1veyY9ttkMQfx",
  "key20": "4PygE6WugDapxpuCV6c9xqWJfyE86x6y9TuhWtFFm4WJ9Hf9j9uTb6uJg13y8jqUoHpT3TAWMkgqM4Qmst4LX6Ug",
  "key21": "3MPriWcGWjs8WogbU9fxSWUkA9uR7i6uY8gU1eSCiFphMtEEDHV7TGNwNSfRoVrQLhQAuq2b8XGN7DLMswUrEdhb",
  "key22": "5TejgSsYpdPQV4Aed4wYxqzgfMkYgspTu9HevjorQm1Ctg2AMmnGc4TXaeyFGq4hCpcuRTChGuZw8hLF2q67RE3q",
  "key23": "58htxtVjvFgYwB352wRcunnRrnuq5qUNhVVTuBXMSZb3uVmmWGvaS35wwNycmrUnB93VZcnFRTK7LoLAYbda2tVi",
  "key24": "2jMRtszYNGDDyCMfiULddeBp8f1xfz3Mkh49X1KNbcxg7URYb5duPMhx4jJBMKAhuQEgMDfeskzkchYMgNMt7CFc"
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
