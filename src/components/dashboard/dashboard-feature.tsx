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
    "MjBCFSHtkX2fzF9B85nXd4piVcD2NFWM1Sws8Y9fYUUauZh9xviEkf4c5Mui4WdtLVGoVpVyQ83Gb81aj49uXhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MjqeT2UWKXXfHPXCFMxBWBekAc3qMYYyKVpuPTvRq2wcvqrwHikzoEhAtR2LJzeiuZMPrFHvHAy8tC67JoP5j8W",
  "key1": "uxzzwRpdGznAR134YooAqMPrdUesWuKwTgZxzEomfu84chgoxbs2CEgbh4MJipDt63J5erUa75kMBCgNsxUMRhE",
  "key2": "4QHJBzQhVxhsuS9NB1gSwvBY6g4xH2m69V3eQczJdgDUvk9EhsaVxmf18Fw2jzFTyoaumDaybVBsgMmy7avHDfQe",
  "key3": "3YGbJRcGiNRGg5dqvknhxtxW4gjUFCMBi1qpWfLf3ymgjkvkvwF45TV32gkLoEND4N93JZd6dvHDs1nykcRAzTe9",
  "key4": "2AMuy2oahQQ5SMK74PyPmHh1gHZY9vmfnVFjPXB3o1Uv7mpfxAB3jRSBswSFpUq4bcAkujYtdYDy6g4JbKjXAMPJ",
  "key5": "jLX4ArgTa8m9775inESvGLd1WMBxmDLDNzx58kpp4kTT5cTutxSumwvL2tKBwX9ZwNHx8AjVAmuww98NqJENYe2",
  "key6": "4bzQRU8NAyyN4V39dA6ZCBerZcStsSiN5h2dgV72ccTpASHThewhEAzs9uMNMzKhs2LJPT3wqbmFZs5WH4HDZa5a",
  "key7": "2KYRdkSfzkuKNomxrRAwZZ3SeVhhKngYGvGyxgXA922VZ6k9xpc9DNarKDgq9RV2gGad6iU3GjTGNNQtzarR65Yt",
  "key8": "48Mbt4swumJCSLwD75tCLjstnTqg3WoYXK3cdCzwW3sdMe9m6c38FDt29BYnZfcSgX62FCfRhtTXjbdeLnc6j1Ek",
  "key9": "5F7GXMJC52eyi9H2C34HEDzjuph7QZZUxGMCJL4LkLCGrEH7RJdsCgxLGT1DzE3re51Dbu2TkcgmynTZQuqwwm5p",
  "key10": "298yi4xw4KHkFVwdPmrL4PAb254sLHi9mRb96aFTpUMMnYA8bRCEjBGrEMH5ouQFKWiAsPYtwxSnhEu6g3Nii5Aq",
  "key11": "qciYMxzWFjE9wXpPWJ3QunfZh7Ebu6kfCMgrqhbwXTCAkuZs25vtbuPawbUHVxKnfYPZMn26YbFTyRjNqaoqTJv",
  "key12": "56UDLYNeMXSPjw5fpX9gH3REiVzD2sJC5gWP8T6xpzJsndHJwy5GqSikpbZNrXsm8RB5emqX52jDirPXS6Q8Dvmq",
  "key13": "4y1kgTbgd5sVH3amTkvcvZi3bQ59LNEGFXv6p17AG6vR828iMJNZR8wvPoy7KVfFB5FiuGWVVBFmfcrtj5DJ2W8v",
  "key14": "2MSxZLjehcn2VyvDMm1rpRgk6EKrXUWFYbRvrSvBMMe2jpwDjq8gBDgEwASBoyfyoXspLX6pcDPWs4kxyV7aPcYC",
  "key15": "5GudpmukaCTSzT5grbaBZBKUAuWtYwFikJs6HNEt6o6PPi9ZAUnkUonv2DCSbrbfuDyxHcVqmugGtD3A8fmAUTYX",
  "key16": "38BV5AqJSbAht2UexfgapJdLyWvUgsXxJvkkHv96R1FbCo48yuEwtbewLP6z4xoCbdjmkVQb63QPgQZH4BufVgJ5",
  "key17": "2WRbMyVL5cbdvWtJd8vp7J6nqNWyrycyboAcU2dZMhzgjD9BFBmYp5UtktVZiEhe7yJJCna8xRXaSAfKky7yJ2CX",
  "key18": "3BEcWdyZiWpvDPLhYE5KoDok8WZJ7YUqDAbMpx4juyhfrKN9kFiUAk7btMWT9qn1MjdGTsAjqod9i5LZWk3watGA",
  "key19": "3ygK4UNXXAPFNYFJcPMv1J98GQanjKE9qbXS4qBXnZPGPA6qLBuCXqMbuomhm5nh7Lvqisv7vSsELJnEeZz36x51",
  "key20": "n1U8zzFj1x2ua8mCeNwuPjfrwQF69o7iZPiB67574wvWFavo2dhN8cLRQnfKMJQfsD1R22Uci5akfeyH6ne6SWP",
  "key21": "3M7cV8yk1vgTbq5nHgu9q42Vk3iicY2xnpGTA8YaMRymNyy2M2rxrBVN2E8a4d17RWcnuqWwdJNoDFFBd3m2zGab",
  "key22": "33XMPEBZtywBfwWFbRS5nzkVtV6akqA4XKbW6XejjMtYBb5QLygoUTD5PNC1tPfQDe5HHSNNpBLL68C1R4VPHzwZ",
  "key23": "27tZmUHKmhQvzBt5msjPTBxqmpKrJUViZM5MRgkWk6tU2tzwCoYWiYv9L3UxrzJRMbsKkZi3GHobwQymvSmemegW",
  "key24": "23GrcQGrx4U1ZT1U5UkfJhvSBoHiEZpGycTDjAMwiX2hSsrz97p7t88tGFjDq4sdbvoGHJNp6mm855o1CNwBH6NE",
  "key25": "V6e1fWNSVV8B6xWNFYHhGzF42PVswxkNZ4oWFqMBbPK1z2Coy9BMZMt5hYk6P6dVFe8ENHUSqpZMeS7x5S1Wmtt"
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
