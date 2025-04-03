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
    "4cZLT4WRFZxGXqEdni3V6aXQYyHrEEAb6tv1Hzx2yj3XcevSYwAMmP54x3gY9TB2AaXiZ8wBTnwjRvmDQb4RH9tY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4khx4WvzQwpgghh5upYqfjB2wUbnFPomuJqxHwJGYohp1WvH4cLiPb88xS9h77auKNVqTnZEkrQEGP81MtiN5Ggs",
  "key1": "c4Jo9HsCz516K6cuiqkwWxhcd1AaNEXZx2X3Piv8r616tr5anX55HM8hcQBZuprUtq4GSe7coxQfBkLuaCaLA2Z",
  "key2": "SW64bveAeN2vfpt1RmD7Tdip6fDiDA8P1o7HD6HenVRhn4pfC5fsYwiqBGr9MNrCUP2aVs3NUaf5y5J94A8dpkd",
  "key3": "2Ua6SHtbkZibHjk3rqrXbKwYjMgKPquFqZfT9SBgjeoeuVu1vjmULtjr2TEmsyfDhjBmKLWjEBPFjibvrFjqPhc5",
  "key4": "5Ehpmz8sj5RzGewMcu7zdrYyP7irGbx1WoXAM38xmnTChodw5dQbsptKK2PrBNrehrDnEC1fQXWijGHPx45y4Quw",
  "key5": "4v8YH2iKEWschTWPrDaHm3s8XPzXDtq4iHt5fH3GKXyUSdyjJFwAdMpLD5iYVwXHpQB3WJu5kDGTTxD4Fm2zzhF3",
  "key6": "2dxzTbtdGKp6KrwjN7iaYy5jdFB7x4UYXnqhvsmx5zPALa6cf6GWDqXYXCzg1Ag7Xb8HZ7GDQBk51Gwzdd3Nvr2i",
  "key7": "2gaQUcKRPn9iga9AGKqdmELmJsmFLRDN9pDuiuJGmNbjLzbTV3dcvoZbbLawz8zCA9eorsXZcWpRyD3e1hwvjxyE",
  "key8": "QKMXVxfQyPLRzAUDib2GmD2M2FVmPEaCS2Q1s1XLBucdJya8UqgD3rWqrzk3jvtFs1omXN8HcPzLLsi7JmR8GfU",
  "key9": "5zYuehf6PVUrvRNiEKbRnhhohU3wh3YDewih8mg58GNxai11YxptLCq15GZZVWeE1JHp93AosK1EFJ9RekWwbbnX",
  "key10": "wib6T9vHD2ut42uQ2NMKm5BDzXhijeHbB2wPN36V5BBQHXqqvrdnf6saeHR6NuW2iDb1RzfhMyN24SfSeXbGRyd",
  "key11": "2SUKoaQRi591n4LFTeW4RvYK1E5LUTbimfeYc14hYQreYMVaXfTzWEkHSQ3EcnjBWKPXjZZNaBLT5VPEvRM2g3Vv",
  "key12": "3G5KoMXQq14ZH6MecY7sadowBsEvXNM21pNQEm15zwUwha1sva3hpi2gU5wyh6sXY9Em7VdrN2QokMjTdKh3r4UX",
  "key13": "3XZK9YXZnQdTezXmvrYRn9M5xzqXSd87m2sD2ci4rsKPAEA4cRaC8G5VcFYCnV7TfMp9fptuPuEwKB31YT9k3yyo",
  "key14": "2ofojbHWHDWkoiAYkHUFJr2Pypy9UMuJ9TnTmrMHp7oippAyvJ9niLaRqrDZPFnQoos5LbRd3TzenXM9NHJmdcAQ",
  "key15": "2KAJbxQhL9dUFmCCxuyGfrmeiKTVrdBcv3C7WPsXGbctjxbyecNExVW8sCASGF77MnBxDvmfZx2rA8HxjE9JJm8C",
  "key16": "59bT1qi4t37yuhf2BguUBn2TVEgBFhFFTgCpMukLe1HHn3TQLHMUXj2uoQNJ599ZPPfXNAk6WReyvd92UKMR9tNf",
  "key17": "4gdx74ToR3sVPi1zSMPkqvUbZ9btPJRNdkruYZY7LPCinrXurqZMJK2sGwSZmJ8eZMmL4o6aZ5jEr6ukLW7AigSm",
  "key18": "2Ni6w3amNhq1rZMktsLQgxErshL2Sb3eZnruwk2a46TQQNnS99qNe9nm58PvL7cSZkPxdobxZsZLqij7bGT8rAb5",
  "key19": "5ghSGYx3YPxgY1oodLTKVRvqvarx4c8GratmFJSaQEjTPkYhWWmeGTTmAaCmEK5EFoAhp81rgNRwk6X7C655F1BH",
  "key20": "3TiRGXTsXorWAahn24q4H1rTL7w4oW5h6YendLHXge2MgAxQSjVBXqkY5QXeqAi3mdm2sy8GKgbCK8d7JgFBD47U",
  "key21": "3D6dsWaU4MpPe7LgUGiz4DT6KZJbDJ2XJHX8mQ6AGpmfrjgpfBfoAocoBmnWJjZnqHfD6EhA12fT1Deaz4dtvmLV",
  "key22": "3picfQCytXEz2UpDskgQa4BmqggHo2PkxThm7VadoMULisme9XzF6J29RdeLQaXoJ6cAV4SY4tTVXyx4mZfvEaBE",
  "key23": "4fLkJSsc34VkLPkDeGiSGgYGgzNWSwqeiyerpsnQiyAcT5QWs7DeiUsBJkrxT15Nv2UJgSeJ4geb4RzoSKwXGCk4",
  "key24": "2Yfidyd9Xt8whXuwUV3GWza9UzQbHHgzQPtq6rLJqDGv7J12VzhTqcNpi5644GUpxtFp31B4UrhgMxDwcjXKrbGj",
  "key25": "4tevFECFqzNoX4Qvnnxu6FrKMSWCFqfyFWTWRGyWD2ZNBTUxSgmrSih27zYhfHnKKvg8kiT87Ypj2m1QmKmZo6Jj",
  "key26": "4v14Xc1wN5UQwb45nJt8iAMTBiAFVCUFrXk9wCzL3ttXE2PTfvbJQAV31Dd7URNEy4AQspDtimayJ5Xq6LZ57ndu",
  "key27": "5SEmYnPFePrGigHGcUWfaAiEBD25dNaX5y4bBwUwtPH7yYfUhMRRp8MAqXkmD1ShBLMYPjDNhkp6oBkSYPyeQXqN",
  "key28": "37459BGnpadtq4GumaHBu28JhCiuabxide8eP1Enqf5cVxAhBL9yxHWvnXiCaX66jZoMMpEyrXVpcRYdrUhewUgP"
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
