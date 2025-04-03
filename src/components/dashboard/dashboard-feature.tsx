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
    "2Sc2xFmuubsxkmCHWNbFHVHhNaxfQ7PjZDmg9faXnPs5VuuNKXgUACvFv8vg2zAByvPpfbMteaUPbS9A31Qw7hnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MeoHuWTdwoaXeEBR8ZTf9pSvzEmfphDanVwTUncxGb7dpK8JyrmjMZLpReWieD7pXEwjAyc4tz4mXQEFSz12mUB",
  "key1": "2oGyHnkfDCsG1kFzRhseDb3SaNawPFbgBfGJwMtmGSTBkNMeGfRKXuK8j1F87qCxWtvhwvx3VJGFAPNcfEnK3k3H",
  "key2": "5Yi8MzStTtw66XBAEpcBnPdGFA17rJFrKXVyAyxPToXTxZM17DhvV9GD7RpTs8ZkTxFV4RVTZP79NZWMXvAjZ6oa",
  "key3": "4A6qdAapNraFghjueELmCHmCG28pP5zBkD4WZNwFvxfzZLpX2JugQXUya7GGXGtHmwHPVEo2Pr7MpqUYLAkNH5WM",
  "key4": "2t52jj2LceDJHCtXr7RwvTLUvaqPGmJNMSeRwnLNTH7UsaVQjCJPXnQpMrUp7SzyJxdc26b3uTphQrjCxq4BzeWM",
  "key5": "2S8Wc1RhdttzzMR2L6MfQrm7HaMyu9Ax3xsVVU2YK9VompujggcwzV3EyJLwow5UQDXvrgqjRDD9nACcRbpZssiM",
  "key6": "2eySo3TkZZK9ZgcvZdm487mFH6TEYK9SozSPtkmL4XVtVpHkhWX2P29jcSM52vUdYiVs3ZLFeh75Qt5Tsf9EEViS",
  "key7": "2J8sUDsaJCbzkjuTDQpysmYNJsKBHKLBN9YGqihbTdCNbGpU8okkk493BLo5KgByHZXj6DPaxuAisfRxELj5nCW",
  "key8": "3QzmJgvmps21zqGDpGa5jZTxQYu5nzhnU71Vtz5vPkKfYaWbnApxmUZKoAxuwDknnidZ2bYWgM2mx6ax9UoVEtbK",
  "key9": "2HwYismSrUCXPqjYnpHJJGVqf9oiqU7z9LwftZomTJy369aQ8WhfVBgkPpuMmyYyj49K5D4z3KSBm3SW9fBz7RHM",
  "key10": "29NovcT1KmJ72SLJ8CM152dEuMa1mEnaxbS6YZYu4ebcTh1kbGBpyQC6hH5mSG99MNvDq4nXF8w7bXGJmoxgVGmo",
  "key11": "5AA4MVLKqvC1SL81sKfwL95n1ZE8ffJtt6voVVwuoS3cwpxhk3nNvuHHjZT8276wsrStfSxJncRAzZmE2tgqQbt8",
  "key12": "9punMU5b9xceQx7sanT3QUakZNpTA4Frm8pUp5tjTpajmes8vWpGQHwizSHKSW2ikGJ6ojgjNX8Zr5LVYqG7qqk",
  "key13": "4sk9YqseVqMCCFz8F2ucBLJgpoLiNwmKR4bGKfW7cXXYVQNnk263mc9PMrcpKBXJ5U4gbNLi5mM8NwMgBszq5UmV",
  "key14": "5YbYsWNnD8Gpo4t2ozqPnHvNsEssXLKmavTEdwtrqR7VsxbSak2NNHNcKt3KDjpmkL1rH7cKw7bkW6YheY4qFwtj",
  "key15": "5HV2eh5jzuEn6FpRpLEY2MKkqh7GnvLZiygDa9zYK7oeTyx21ZSxuaYVuRU1VwLFApiezrxYLkN4s3k76X8gWy6S",
  "key16": "5uaxVSpbeUXiZNuDQ8GdvSd2UCooX2jfnnBUfAocJGJyLYaeQsQ3tvG4cPayQJaWzv9HJ9wnNr9poG8v8EcsZ7Jr",
  "key17": "uHJPYcdVFpSt7hdRG726bCd5iZWhs2AFoHxJ8rBiGqZKoLBP8zH5k6An11EdQw5Aw3UXRCuwbgAYDWjGM73iLw1",
  "key18": "5yvufybpV66wophnXskWssxxqw57wn48VXC6CcAgY5kzHKxuWcahZdaTvtiJWaSJagLPJ7j1s8rKHWzjwDRD7utA",
  "key19": "391788BKnXf5M7gQQntUCvMhceYrgMMnfnbDBcmZZ9hTgrRQnWgpiCMXovbHjkoqV1QTWNbeBuaRU5UcBj8UCj94",
  "key20": "3xv4vzuWwMBv6AensXkLsLYpC87oCq7hdHyQ7PijBufMQXNBN5nMin6ShNeLW5Mbq1vvdnriGHet6PcTLuDDCDAe",
  "key21": "54PpLeav96icAQzVe4ofT5YyWYN1p8S1rWwdKURAGb3xUFcgq1CXyjK1THb1uQYXZ9Sfwnqtmqf1nzBcRGG8asN6",
  "key22": "EFYRJry9w8fHCZJbzXWJtjZpkwKgbbSaaeV1iu2F8UQcJjk77PbfSdcY7VTZwNfMSvkjchvfpbUkJsZbid1uRvn",
  "key23": "meJKLyxVz8EQTVYKvwZyNTuyYimGE1Hs7SAG6t9KsraKNwaaeKoRsbHD1TgLFS24BtfxKVXiFpSTHKihTL7CgSW",
  "key24": "3zFSqrCNMyyEug2mQ6T29h5RJbJSP8DXrgoXMKfW16Ydrokr14ZwyFM9HYu6dQgtGVJ1rcbTuSe74JV3bHg3ozqM",
  "key25": "Ggt3AphAeYbWJdvRCsdjnP2DA31RhHWJmBLTKWbdxV5ViQDM2SesRiu88ohQcXRDvscChR1299eh9d9YhMrGBjR",
  "key26": "5qS4KHo1ARDEZoCcPoLfoPN4A7JBm1VmWPwyaznXEY9cTEZuHsC7swKxNQHNoXaqNbJp6VVLfyWh4qeDCumBKs4f",
  "key27": "37MJFspmCKreuvBRWbDAMy466dGGFkqPuA2R3zCX9XZfJT1b8wBKAgA6cef1oFDEfLbzyLscdNaP44T2pruEYWvi"
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
