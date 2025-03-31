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
    "2XKgZ2W2zrG5SGrw77zHbYWdGru8k45QgWB1xLRmHhbgnFWL99JeGkkGBN32CGrHwsHRCNUDeyWLDyYMvFhSSmQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42iQzuhcGzasZpGZSvPUKGiqxMno5xvF6R1VcrxxgWX8mLwsF8ZdQR1pREw2cr9YHQT4qP3QiXMD9neVFyiZ5W7t",
  "key1": "J6C7GXMn6XyVDoP5YZDxnAh2TUGPSNKm7VGdby2EedtVY35a5HNgKL43a8CAP1n6YPbyzsDyGaf161FqNKYzdGw",
  "key2": "62xk8B9RPQf7MPoxQFaZNbqbYECzi6d1gH2Vy7UFXApQgyv4kf4xTueepKYVZE1cXUja43ywjBZ9gJgZnT3ZEe5u",
  "key3": "4ZTXxXHmsQfPfLUAuWfnnpahjfCYvFAMF5P7jRWbHeqWAMmL8sTUZGS7RGGhMzwwvYvgEL3ru3MMiQ3H3GHX25U5",
  "key4": "5HFBpF5UdjTeKBgBfnSUEL8KPBH4zurh7fh6yZ4VMpATS933bgtj1JSKGrzTXeStcDXk4XRHL4i5LwXagrknihn6",
  "key5": "3h4V6oL9XExXZEEUz5f6tvKUrbgXVa7CdHTZwagz3kcwP5AYcZ3BRysa6zahrXcFHCRkL4aZ6EkX78GHzNahnHbv",
  "key6": "ZLgm4DgjbitdxbDQsMiMPZns83DCo2UV78koGW62ttrQ7ou8VXcsfL3Ypf5yKAPysmZQNV6zNg864wbq7QxjRwC",
  "key7": "5jhbAwgka1CBiYPMfTCCATitB9FoxhrkrU7DiRUZsRhAUyHW2tnZm6Uz2iMqRC8ufL3gsKApYrN22aZZ5HhiCimN",
  "key8": "5KuktB39jNxSUvtNf7Z1fUrwHD5NWqPSz3iwVHw4QKpgSZUbmak8Nw8aanfv4RWEzjVGqrQy8oD15xcmNRgd1jTw",
  "key9": "zkM7iibMtiRMvXHiiA55Bj5WtWcBaR5ngLT5Q5YL1wmM1f5jW2ueHp1JTsNf3pF35RvsgN465mSq2UQbcNzUqSh",
  "key10": "3ZpNbnpJEM8xKSstN9VriwufWu6d3sJkFHt6zMnZrHifWh2Cqtd5zuSwrcA45obwf6SXAKaRhjhs5j3NfTBKb2qk",
  "key11": "2in1VTBnNM5CsK9tgtSyySxsFuQevmBqDHu8QArUdJJzUYtjBAjQ727NLTG5F6u5m9KExHvuNGfEszzTcYk65Czj",
  "key12": "3WWargJZ241SGv6AZJRxuSYm9tMWQQTy8Y9PYx5vtzE2oHecYdZLegGiHA6rvTTdeavjeQXdBzNgteVpgCEYd7sx",
  "key13": "62pjq8xMSFLpVzhyfewjTzrghR9wvPU32w2Sfd3GmGwYXnR9qKPMR7L5hRGW4zwXLCme6rCGpwnyswugCw5iUUHi",
  "key14": "33MFCuWvqt2bjBUBf8TmRttRjYCqBhJfhxpv7mjKkdtcj4J42VA1sTUtrkKVo9Px8jspckYVUppPfmhaZg1H1HwZ",
  "key15": "3pKyLd86siDjXCYfdaEm4JLXAoS5SuAMJ2DaLSZhzSPv3vHbswG2LuxwwFuiZoBmmuHhH9EFVQNfbneTnLSX3LjQ",
  "key16": "3efMx8kp7weoNdHwuqApJ1CpYDqjb8d7RFRzauSmZVfgYxmPQK9nBTsFpBDzMyTJ3xtVSvvcqaCo68ke7juCLqzg",
  "key17": "3hLELhgdLVPe6BCLLwGhip8JJgDST484nP3qkTXvXaDzxD4QGzttUuRqhoG63zR1fXxYWJBQ3zSUDawP9aYphQV6",
  "key18": "3mYZ8MGuSgSQkwVSgS7KmQRKsjcdN2sWMrNuHZyuSXXZps1HZwUFsPLJwwmY37qxMdp8YqGApYJW791NLk117Xxe",
  "key19": "5e5LCQ1dy855LxYncbsCN6LUmgAYNTJVwhJTKhTxMNuxPsXp7JXWk7bKsJ6PhbRtUu6rJ53nEUiGyMum6BPeNkuW",
  "key20": "5AJLM7iFhhrnerre6HUMDWD2848tZnucEY2AJaQTzAMTBFqCpX9jR1v6SJyAvmPwitMC91rg7Ukz8hataPNAy6UW",
  "key21": "2LhasfKK1zSFEmaGS5sLDkwASYHVekkkGGybP9qpAThFVuUNFtAyzrNRyUDHqKZCifXFaJ6H9JwAgH6XQXoaxy3V",
  "key22": "5tdmEVgkCvktiXh6VdGr7VZWd8orwPfBcbj3ZAU8BrYPbh1UJXaeofZc7CK7WHdAPivLydNagy1oeTiyonv4ockd",
  "key23": "5AfBE6mDEdqqJdvxucHCMTrvp5hJ8zEYChZ6BVP5jPkYgwPwDTcGwtvYYBobtbWdznBvzNJW7rHdrneB6Bze2FAX",
  "key24": "4xNEMvDpghDq6dPLB3DhR9HB86RqCij9w6VBgJ4pmGNZSxgVCgULTSRUNwj8GpJ9h6vL9tWMmRtPKADTaEJwqGUV",
  "key25": "2y7x5xFyceJg8wGVphd7GANakN4djP4eBTACnRqDTBSdKmDFG3AGhhEyAZ41xcsqoAb9FspkQQRrmvdcir9riaN7",
  "key26": "3GULU5jscFdFgizRUQyY13hgGMGaBTWhKmte31MTsH66k4CHPsxfBYvHv7PR1kDWa6TPTBqTe89nLLuQpSsftPey",
  "key27": "r5bXMSNhANZhoafiHZke6vaYXmrRu8PgMTKMUin89RYjwf1FxgwkyJU9JsLMJCwd1T23KrvmfW5AbHq5WrW34xp",
  "key28": "sn2otRAdL62KbYLqa7h2mMV3tChcNcKvXJfgcivMo5x6v7BCBABUFMsSDYdgB5yDNSvwxdWcnwieUFeDuTPBfky",
  "key29": "mFQgBBZdoqQo6sCZ7TcwuyMU3eqsCUZ2DfaPBxVc8YMX6N8kmfC2SWW8TL4RdWC77A7W3JbYTnvKC1k8u8cye8v",
  "key30": "5dnRGxT3MkJa4nx2d7RwAPmkPhf7dA1DMGTfaeKkeGKdxZYrJtzKsvX9eaSVJdYjP6GgiE79zsJVkPjVyR8n6WjN"
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
