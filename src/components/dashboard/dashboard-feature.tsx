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
    "wUU6AeiQoH68mjA1XzFPhPn4NNknhkVZsXTFoDpg8FXMZ1Jou6PzJWiK2QjcoBSRN5mMLFb322anReEY3fVkv7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "awMj51rGxkeF9rGJ3Mf2xsPk54yCvXT4wfAqBACG5GtWubbs3FLz53UZJ7qryuUuBgri8JDzPmk7Kxfuh1Thh3H",
  "key1": "6Pydxw5mCFMrr7jU66r652iToJnjzTwTwsjL4HeKGPTAcJ2tk4e3TRncRvpSM1xp3ruXpKcQGAqxUhzN973GBFT",
  "key2": "NPSmWqQrmpAJXjU61X6ZxtKcKBHj5UU7pTEn3Ksy3sBLdDU1wLgThcwwVTGitSdex2Ee4DkD6Y23gRTGUrbEiKC",
  "key3": "5QSAd4PJsKSmwNbdr79TBGEPJHG2zW3MrNgZ8juqGJ22b5qUbbceqXRkJbiU2r8swzNAFnehfwUFfdueCCibKcnv",
  "key4": "2JbCMsLSzo3XwdgiWBPNwzDXwoAWFkmoCCCjNb2PAwNhBRriDsdwRFpifBnWNNPa2EsrPkGjqwBiAoMB7nZNTz7i",
  "key5": "4idUhs2uo8JVFtS7duALsTDmduhiTLmtDKHpB7rFTxzGb1DzsGibAe32kwnAFh6RqRmTbQaYx2waGdtZw482yyu7",
  "key6": "2hisEa2e22sFZzAdmxeRYRY6kTrUbyie1AqjQ1LVgTeEZwhem1AiUsDfT9fuhmyJG7hXqRJc3a6P4wNjDej3EGHG",
  "key7": "5siKbGjrMmeiYpmVPGwrTiEaykZPTa6xgnRJYS4LzqxHFgdJLubY7cJT9stESogWiDc73qEwJrNY6KFM4pRFUBze",
  "key8": "34R8hLRE7sossfegzwsmiK9c49pyhTiPKDXPUFVT2QLwa1ZLRU7CR5LcUJcE3rDidxSzRJwDcDRKSLwbhrHpug4a",
  "key9": "2WCx6BXzPoxoN4MDZqpaegAZHSdD1hNw4JVnrWSinfBwLadNjZbYppns8NFMDrCvEeVo7xfKDCf3cDgYi6cYR1q9",
  "key10": "45XAU2uxXpXp8YySdg1Snb6ZHNVtunSpwbyp3i9vzg5GXn9CDVMXLdUUqBmEG7V9SjMURk3jRBx8hfRdyDv2ABuJ",
  "key11": "5EBzwxUv6L5156iqpa4DiNthNy48vTqFL2fgcQHL8Njr1PV18PoeqqDY9ZW2DhBAnSzkg6yf6sVyYsBsbGfgskGz",
  "key12": "4gNmwiypUQdsm3rfmRH5M6zGayn8qoyXoRGmqMPkHCHMy8JjFZ61938FmDj5Q36erofZL25ZRePkX93PFK5px51g",
  "key13": "5Xhmdc4EsT1rgVzYAaL6jULqqA3DyAtJHgW2sXUEUjQPsZqSnCoAjeUe9CFiuTY3nbwiqRkBnpeqdAAsYdHZAWh7",
  "key14": "5S4NcN7hR3ztKkyxoW9EEkCxcxbD6woiBQaNZrWWKtajS8J6t59AAsU3QytyrXpdJaUjxJjNPgn9hD9BUNhWAoBo",
  "key15": "2JV8JHcSw4ZGhFVxfNJVnvfpwXtSYhecm6ioShdVt1DDb9xJSUvG7gDKyhcKYhsXLu6VbWB4Y2wvJU6PmfmaAV3A",
  "key16": "4yaSoyzsrcFGD7qsTUUu2cF1SURVCdJzE71wSURsM7AksmzUmXaRnrd1JXN99jqWXELtwkctQPkKEoNJJRY4XLDJ",
  "key17": "KoFR2hBWKeCostc6csJ1Btc7cUBpFJMVxg2xVNuBQ6MevLvoLNjM2jQg5ccPKtfvjdMr6ejPGkCSCZU5nHXQn6d",
  "key18": "XAWvDrWSayzma1bvGXApTCoNh57Nk5HCAWyy83BUZbKPgq5A84yxYpXzPab3G98vhaDjESGmn4AfKz5o7ZED4Mf",
  "key19": "LKi9pYgKvMhW1YsrEgxTgkwksSbALCqLj1LyhqoNzxWkVbz1vCdGvzbjfK3RnC3TYB8kyjcU2a3aiwj9SZQx8Zo",
  "key20": "3cEjcEh3LbNcx9P8o5zozMrmtbzPD76uQac2iLy1RAux2co4TLDRcG1ZhZfmQEAcXQbajkudMHk7qS2EXMp8ZV9V",
  "key21": "4b37yuiVfwZ5iFwnUjEcyHBLEeDWw57AuGY8VKxJPXud4Ee2a9AdsfMeTVyz3SrnvEMvvez8HFx9AGy73e82vdVE",
  "key22": "2KyqHigmm15TgzUKBtnYpDdxcQscPe5efidBwh9af47BYBddSDSP7x7CpTqVHeTFowe4b8NPZfPvWrarfAGLRrK5",
  "key23": "4Eok2QKqeohxMg6kbjr8vQaEQev6GY1hPL1wQL8ASq8Sk6BM8SSuJ8sHhRyyFD5AbGu4Rx7BSHZGY7JbK1S29epS",
  "key24": "2MEPQrwy3EquqfaRvRFuP8cf9a15cU1imZ3y1sKKDdELkCa4JBZpXXhFMpvVHvRrjapEYEDT4E5xy6NxyewCkQw5",
  "key25": "jvBdkw2u5YLEwsfmLctdpTB85289ejwQ6TzK7FdHdw6USDWRnKxTS9JFaWdZVbVjXAATWd37yFM22jSnNq5gz7e"
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
