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
    "cK3hnJysbgsMwaRksgrZmLxzJ43Dhjr6s9jGC9UtYFdH7bp14wDUniipTsrc8H2ue5rokxDetBQQaeAKL1Henpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4393aveeeymEFHunjVMLAD3Mqv66hA7TC2L89VnexCTkD8AiowdXRMi9xuMhVqHfHxJEe2WgUkHNqxhbwDSzuC3q",
  "key1": "jW7NQcNCzV2Te1KjJPiMr5q9cbnV7NfncBMEdfDpVMZFGGcNzsccEUmxxshMqwtGDtYiePsXUUz4tWhdMiXiYBG",
  "key2": "2Czdhzd34kUzGSWA5UAy1YEomDUeJ4TXKa5bEZzP8k1Seamw2hioAD2P4yJMfXHGqbZD5DjevwWZLNy18hXyuEW5",
  "key3": "2J5XNZP7wtkjKpzAGCW4VqYvzAexUgnbF76ZisABMX7yVS19mhWKYpi6T7QN2DhELx1ckJq4sqmDm7ayKapHmCVY",
  "key4": "5hJsbzt53mPaX9wNLPHLw1H16oKAsJJVGxpXP65H9U3ku1LKEnQKXQNkgKhyExpZntKiYKJCg8q5VyaHGeD5s1r7",
  "key5": "4mLQfCh4apzHvy8TUt4oZvhJAKoPqdqvuymNA1uKPLK3aeRLrS512niKzaC9H4kbkvw3muRedLvn7hUox9aicGXC",
  "key6": "3hMC16pCUhaUKr3aAEJK6rRejEVwsnsZ3jrrMXb8QH5JFfdApqvxrSKNTz2iQXhU4Ldb4e1vsadpodNNAevbj3HH",
  "key7": "4UErNagXhcWDWkohfJTmVpE5yAhR8FYWDbJ3KcFQSfFEWZz5Ud7e4TNsttvSp3XKBdVfAzHSFazkBnxRB4gh6NSr",
  "key8": "z7eYhJgQmuu1RzyKTtjqfpsyg5sFr6GBtLADaupL57U98aK2mUzWkYTV1HedjsghY1PjdNdXfQPqBTXqCu8HUsw",
  "key9": "54gsMTpYmdzqtFxGWEMVxUsK1SGQQBSGFnw4gaeMnWsdJwvfBQGowP8VEjDD62US6V6rpgcns3FiZnfJSHVoGmfd",
  "key10": "2FG5GUjzRBJ88s56aYJ7E4HYweXXoQVcmiN157x7hbaWZMySADLwXincJuSqXBGpzr1cBm3EzuP46F5zFgxE1BnC",
  "key11": "523psrgscLqB2mKvrgDSP9cnbMjPihhxU3WpBsQkoUnX6PHPnwqfsaZfoNBBn2jASPzNhcT5pgLLn8KHAjE74mbf",
  "key12": "4GRwHmRWMUhEviTTd75gEwdkZMXhrJBe7yUqvwusuGjVuFd2JvW7X5qZPj2UC81dc8Vqcxhc28CJdF5AzBX3c2j6",
  "key13": "6a7JyvLZwG5Z6SWzoZkATihWTcx8iNfy6xxtcMztmdys5nhurLhajnwDiTohHnmbFAt3WVSQ74iP4RC1Pt8V1AM",
  "key14": "3n2nYerjCAk1iQ6FwpqmL8YqRGexYmZiQuqC77A2aPLfcXC9x8q32E3CGDt7C4EbTm67TFCZKVYjyUJiNUArRKeR",
  "key15": "5A4ZzetydYgNkZefWQ1ic9CAcrDJie3xBYCvoMsAe2oE5Ryggyf1CZkrW3UPS33N698T4i4iDJM6nK3SMKbzEycy",
  "key16": "3qmGUKNfsAHV5PxeVQ1RqsQWh2rsdaHvo8tEZrZgKNvy6MK3Jn27H6pn5eb5TeBStY2d6pzFaCeA7dYmdYt1Z779",
  "key17": "4DdLS6G313AW2abtarZBt4QFgtrHoMVnh4e9EJDTn2jBhHDzTtFBHNjRwUjdm95Tn1PKiiPwgDC4aoRw9BsWxpZg",
  "key18": "51GRoWQfGJrUotS2S1P3Rs8ACVedZ17NFnkS4rWGGijAKupVykbhuiJKHkPQXRwUD24hcSfS4ALGrwidJFdonsRv",
  "key19": "r759cKDmoc2vhLq7BsiHXprYkkrwE2jw7DFmX5Gzmj7DDk5tcDvzQeQMaJKbQbJwHNWqxLe9dSWQ2fe4YsUmNug",
  "key20": "53zUcHgDyWqxDWrbwLVLx3ec5enFJ1UBuXcLpSG8FzQ5BPFfFGeb4FgK9LADK5o346UAU9ozSG2xWf2CYkUf4F61",
  "key21": "2fBz6tAKrqo42MrEUdu4FQtnBTN9kBWbvBkqbP2bgB7nxpZVTZRd2Z57RpbbjcMk6qjyYBjNa8GGEEFfXrxZEahR",
  "key22": "67G73FtvxfjXny4tsZ44CANym2J1vKssBziXwGMivnCyohrwoZ6ZarSrHXHgW2EZmsvunFWpwEYaxTo9V6hrmkcL",
  "key23": "49BFx8mVT1exgK2wHrykAsxBD15v2Xq4FeTjf76BGMqnfPeShypYe7P2rGQa6ipAAbiaZMQdjyfeWbFhdtYZB2DT",
  "key24": "5AoEUeKX5NsddR9aHYHyzWB28D9NWZRfwrfmn5KWMLbB9BLFrcgm8nNEY4Xr3SNcNy5ARE9aoULgBFgEmeMCQuiW",
  "key25": "3r9NfzNc2hdqJKpZLdcnwkATmud6Tb2Qjd6M22cyPkqnn3cTxk878r9tfJXNAVjMjHvSg4uHzo1ByT7Duc4nWA7H",
  "key26": "3WUCDNLPtwApEx9Nu8mGx8UfG8DLvCkdA5AhLmu69WsxDe38pffVVzV2mxMErVVfFwemzPSdXjHpqqQzHKCcruqw"
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
