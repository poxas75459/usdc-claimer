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
    "3W5WioerXvV51kUsbffbCJyEJAXSCjuLUoUAaMq1g9LuPcp66Fxms8XVLsjmLhLtKFnD2P3hMy5ASNUoTT3RHvuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B9FzpYfbALDjVkbMDhdXg77CjNncqV5FTP86RqBwu4YJ4ByorcHSxBAFsvesJqG4LE39KGt6WPiT1zD9jXZniXa",
  "key1": "3U9R9W68od2LcXmcSakPAC4b1vp3W6izYdCzG2kNELqH619DNFS7hVnCyXFJ3FkzBYn48o6mDC5APTMaPWKAuGm6",
  "key2": "4jNzVhzbL7emEuvgh6rNsnbB8WbmqhTZ3tNufGtX4mVfbYNUMr8idzPLZe2XQLDgMfhViHMEPUeV4NTEfgWeMAmF",
  "key3": "36XFN3yM75c8ThorLqfPFRR1fXgyTuL68BpMqauSrNPh99XwduA9b8vp4K8SiY38HhoSbe7wU6QCjtwFpa7kJXwA",
  "key4": "56bHnJbHWR3itbnjP4gtSiCDbP66KQU8BbwFe7CZt5wnduY8BBQrWWVe7T86aF6M3T6hcyXkQYa1TtZPjVWw9WfD",
  "key5": "2qBGpn6cSZyQCi4v97Wo3pdZ7hDS5AhaFXYDVsxGgXwVHKtscrvczsgRxV673kvQsw97uV7mrUXmjFTT15rUG7V8",
  "key6": "25gruRXUGHcbRr8f38KLbQmc2SczvFrZ3GWi28tckT6se65pT85vZ8uGF7Y7koN1ezoggYJPw8LWJQu4hum3fpvQ",
  "key7": "b7Dbe6a3rgujgunzJQ1kC7rpnxBLZmRtuiHPA7LoA6R4PnXkEckhu7wtFfgATWJwjU9YPHEWwXUoLMdTWehMW8H",
  "key8": "3RHvKtMiEaC9KTqFkSbsjyexhn5zjhy3fD7isf7oSK7Kwqq6SoV5yniuLtN8v2HsPgt1DK5ZPjRPUd4xAcktxRvB",
  "key9": "3BGmEzQHs3h2iHutbWVhdp1d929y54m6e34L8BnDvZPHi7JKwiQQLr1NiVb1rNATw8AyddKE6SnxrfWPHoSf58Z9",
  "key10": "2ggXh6xTvYEmuq69Ha3b9SeUxeXNoiv7DLMeMhJph3k2EkysTwqTeMHscDgpvvnbGNwpNvdhUEpZLTjYTbLmAmYU",
  "key11": "fHL1tgaNUQSneBTkyd5Fm4w9NXsGeF2iKJhGjaApVZFXST741ScL8sdc298QNdgUrFKGuYnyuEgqKHxTDx8EceZ",
  "key12": "4bT7zouWLWV4WXBxQzWN6taDDJkiY443Fx5cjrgq5niteXZVBUUo4ojdj2X83HgDmezdJTkDjRocBtmWYZ8uQb8Z",
  "key13": "2kakr7mn8zfx5H4KddQvzpsiUG5kPe6r7S3TV46zb9YAxt9ip42PDecbkDQz8E5GMVt7KdJQN5fLQac5uJqj1pE1",
  "key14": "5wyD99DJVwTZUJteDLSQwnQGEiwTJXid1mo8A4noBZPBSBjJASy2VnnmiZA2jfpfk51BzQQYTYpPN91UPiXR1UV6",
  "key15": "5ZjGAq9CLPfCYDwzvdQdqWXEEgRLY8zq3eruDS4RT85aDq4RFSdG3FcNLmyUxwZtuFkZxUHvkCp8trirrcGKcG1H",
  "key16": "3vs9omvnJgR4zqkhL9Hi1xjLNzR9usTyFasfEkh73FRNAwjPj3dc18rMB5SffK6ukPhUnjst6iVjP98SszkWecYD",
  "key17": "2RnW212Tfh2nQtf79fE7LEg2rJ1gfbz5rBg5u2o6o2ZBvMYbbXTHdHxLj7ZkskmE3vFLSnHhCJp6b2yDzRBEmt1i",
  "key18": "4SN2NhUQe82WAHCKHArjZkGbMEqapwmM8DEqi4UEDqC6xNHbPS2uALAeb4vroJcREQCSZusRo3PErUjGXBaPTB7s",
  "key19": "f691cWEk5jJcJAChiMfMWfDeikinp6uk3mZGqV6qLzphSbESzmRDtgpZxYf8xzHgrur52E6gxA5dxXx6K7k5V9o",
  "key20": "BjvcszMiG65NyLyewPFMmaXnGE9FJ4p381HV5eVsUwbpKu5FSPF3Ssks1Y3j9ZdcF4LoJcSobu1MxX15CjmUncs",
  "key21": "4AV95pbRMdrpYax13YCLomo6Xw4AUg2WgJW47cgbJH51FWP7gm15PRmpFiqjSwq9S3UtETVMVgUJG9AQWsY2ApV5",
  "key22": "4xp8GEo2AFQCiWmJqZEUVZhUtSMvd8d23z53gtDqfKYCRc5njGYktUPU4sA8Pnu1z3rjmFyqqYY4dgG1rLGZVXFV",
  "key23": "eR73VL3qVvVBaAsHs8XyGf4THPsu5UK7pnUG21eUrDgR9JNz83cknbSJTeeFw1iz2RbyXaiJPy8sc4Hfijf8QNY",
  "key24": "Yzc8BuewZW2borzagF6i9vNWYfqQAQ2W23QHfB9BGNeTooz7NUtcDv2JAMiusjGh3YrTJTod9MJzkqvATL4hjYr",
  "key25": "23gkyedysLLVL8Gbs7SCqo841Ak5TJZD6jm9x1LsG8kYBDMrbP3rVP312TZiAEy1osvXJZ36NABBDmA57oaMWzjb",
  "key26": "5Z1Cb52m7WUoTFYfzLqouWMnaU4RymZsh4goPkHekgZDn97RTwYFPddGTQXVii3adJNge2GY8EGHmmGj1XF1DZcU",
  "key27": "5qvtbJDSDyVDEeiSC3MecwZjxWZbTL1DmEW5pB5a2EeutSs8mz3qZ5rhUqcW4PQWqKU377Xn2HEF1PnWzMZVEck5",
  "key28": "pAF6uoiUjMwcW2vEPwTuh65haMtYjFL6vPGhz3Rbha22nayRtLLYCUG28AQM7AnjDpKuiZa8rQRd9XBqKYTrCbY",
  "key29": "4n7uVs7X6hjykmSHyFExxyUb7Sh8B9Mo4vNaDadiHvg1zMXixc5amARyyCC3HG4jJwbib6AGJGAL37J41DYu78Ld",
  "key30": "2T3nHzsaBitYY3LmKaxFbg6Sy8W765CKxy94ZP4Jj7V92MhDgUmUyaU21HK1Zdiok5kxHRUKVvjJHD2qLhqUi936",
  "key31": "4HTe3CAdZx6BwmzKFxi4VUUvAQPSqHZCM7JPnC71seeGe32Wj11MpgccCnat4wUP9fJgpuRb9fqCgoxSNo9eNgUr",
  "key32": "272EvgLdFoy7XGDTHhCxgQ1XxhsQ1CzRsPyqaUAh7Pk5XwTJDV6mq1GjPx4KgRnyNXMi3zHSRXDKzCNVgr8f2tLZ"
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
