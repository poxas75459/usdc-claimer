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
    "36eCQoMhVJDyYjdg2GJSZaHmWm76pvusRT4SRhdgZSmGPkJt1j4dnEdqfRiAuyjrq3R7UFwqTPCV5Fynx6gYqCZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "432oCQ4QcauVJJ61McKgmY25Dwz7caXgE8TCXR4RGcJiHbzKVB7jT4QwoA6Ubyaf2znk7PLTmQv7fUjWsoo6wr6g",
  "key1": "2UqzczahDT8h8PVhoYiDc8fHWJZRADA2SL3H3ukv8wx6bN9eAfVA6tVgCyWHwDJLgnaghGk3qzefNpNDY2xCR3Bm",
  "key2": "L92wafPLzdkt7NTkAJ53wUKY3BpxXitJ8hMUaWb7ieLRaxqhjQNNZ4WJEM2nS34AW7riSAvoe3dASX7eGHHnten",
  "key3": "4eJ6y1MiS5t3bn6hhxvEkkUv6RbAsPvKXjiww4TyomXJcyPpmzoegjFrBhGTakbnbxoTestPdeFMh7RKKmMVcymW",
  "key4": "3WU3PmF3qZfuBTmhp6qCeVpCj7x53VzzipketWZqyuexZs9jfDmqHnALToRayCiZNJBY5NuFnRatbk9SwyCRVX7T",
  "key5": "5UPfGJSa43UPLdgSsTwPz7Yki8WyZjP7KMfDjKFTu9N8By6rKEMAXCFGVMnpFyeR1Kw4Gf8fUVhLjZTJVavmMX9H",
  "key6": "2kA1kNXKhS8AwGZZxyyvvxxzvKmEsSGeN5KAGgQTzUwzEP2aDeqrY4YcXvvcfsSb3DkXNsM2jrAkx6HB89vaa1r",
  "key7": "3U2LQQmGSJ5pmQ6ia4FnGcynwaTn99K6tK9Z8zbMnoSZsyFwoHDf5gxtKeZ5zNc4pPWJXvjXx3pgcjqbAxmYGkgQ",
  "key8": "3kWdjmq1VNJDp39SBwS4AfxRdGgAbBYXcebsnsgzXAndjBZSTVhmVv3e4hpvfCNkyMq6KVpQk8wEUsJWFWSW3PA7",
  "key9": "4hJ8ThfWjT652hi525L6dVSYfZ4tdJqgjM6rwAXVXvfsSd5nsUsyYmG63wQei6WavH69trn9E4QRaTSs228stBbS",
  "key10": "5BssmYtgBiv96nAtqofsoEUvyJzpub31gmF6yfL54V8buqF7j4rafrJi1YzgkPRWRAkP5rQPuf8U422CmDRXWoSV",
  "key11": "5WPpCRKPrDKrwa7TUqTjduqYY7UgPdymU63TQFBzA4Uy33x3SRi7EzwpDLwnfUTQv4KBU7pL3odo9myov3M6QovR",
  "key12": "2JXVUMmD6E9QZhEHJvJDJvAqmWikQP3KgzbRAo3JzCa8oxELer1wqWNPKc4UyukYXEBJkLYPhx8pRg2NDSkawJYj",
  "key13": "31dffeNoQdYYij7LRMnP6nHcBYfqPFtRThuvJmSkTmhbQguLxyvTvesdTTdTRwNDwcsJfzNsrxhSdreH7AHrrMbD",
  "key14": "5fDdK1ZJBRMEi84reCm8K2S1vrQmGhvEzvqCzxKKch6cw49HQmM8kzKCpxrPmTorBc7UnBxxJ9p8DKETdfA2E8YD",
  "key15": "4uBYpqXxpcmBJG13XhJ3RXVjWtWe7LSDpYTVCRrsW9xEcTFrTvoxj88UqLzhNSkHyGKmivoaFeayDjtUCxh9UAAX",
  "key16": "4AwwERm5SVsbo31LbVpbEYoeSun7UpBU4B7JwWZeJv98zV5Q4fHUFD77MQYZBMBmt63cs9ryhZQae26rmHmT1jGW",
  "key17": "4PseesgpLVwEsHodGKcKSywVzvm9L9keBVptZoFLBWYv1pirTdPn3v9W969yWXcFgVisfoQLr8ryQc4qVUsDKBSb",
  "key18": "4BqRt5GXWFFpUPiJqG35TzkYgjK3rMxxGV9yFFkmXmLes8BtQhGvn5hxaSef86WB735hFD9u6NxCa7UAp2z7BAeK",
  "key19": "5qLL55WPA3XyG8bmQ6rQVxMV3aoFhakNZbTrLAE63JnM2nKG4i9f5LCZhhFGgjXzZ5msFV9wRKciwuw7JkHKSFRX",
  "key20": "2erSMpdzBzfFbbvg5CYsMp85YDrfhajgQigmbE1sUJH5xbXDRJKzWXmX8XqMLKjRXn7CQygwFTD8KpomhJmsW6F6",
  "key21": "2n8T1DpTJWMjzaCR56WxBNGU7yhs43CvFMiqn3UABwyCz5RZ6wiUeMJz8B91c4v6ah8dQsZ9SNv4tqQpT3uegiQd",
  "key22": "4WVoMAjXaaxP3t5s7uzKrDoqJuGjcwSZRPtHZn6GK1bGoBUhhGVwWK9XmJ8UiYJwmA7YTVM4yNBg2rgm4kp31Q8B",
  "key23": "WPAoYiVnguiZ4hm64whsHMXCHyaxCaXZ7JpstQKULCTJkmFe8ERN3fs7ZUK9vGSpbKmikvAsWuY7MFigt2pHhkN",
  "key24": "cvFDqwnyZVysesddYb9hLaS5i9dA5aAmeEGJaeMccYy7fSyWSkiyeUSwa5V86Xs5YohSHE4kxDimYZXS8T7WZCA",
  "key25": "4sf8nBdCkfms7r9gCHh1sManjsfjUFu7t4rGjxuGPLdhNt4783PCXRLiDtk43Fvp3JjV2dVji3k8Z7AQrivdEYD2",
  "key26": "324fUwBM6E9eyGgnmEzLgvd8kxxcpxQBkSwN7e5eXWaUeqbP1hSLP2GMsEtpSqWsP9F3THTp6PjRL1kob6FNUnfM",
  "key27": "5KHaA9MQMwf8MpcW3HLKi7KFBE5ae28KaPXx1NfbK4n873vZRrrgfy8DpDU8wrzziLcjNgZR5hGUBS6kb53hx6pA",
  "key28": "3uk66CHUPfVTRdUiiSRaz3msTvdEoYfdBufskXkwGLtMwTUARLPotJKtiHKry9oLsXWsDub648qnh4b2cHPMKs44",
  "key29": "GZyfaV3q8CBddmTuk1HdugnQa7bUnvwMZGCJVL8pwDr56Hmx8UVfCwbWjVrxgrb3y4MR44d2xgJVuXRsXfgoVBQ",
  "key30": "5bqgWpUxiWkyR8gTmpD5C8HZc4PYjdg1YwWGEdNe3tSrqXCH4brXpoWxw6gcQfVTmBE7WxTtHWrvCUNMudAr9m3m"
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
