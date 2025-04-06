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
    "284VFdcZ64kjdk5gojBQ7ecKm87qF3iZTepXSyjvgLzFLtUPWPwWYUkX6fJeJ3XnC7Nc853wUmQeYbo9tRwDWzHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L6iW2Q9rdyR9o4dCEHp5BQFvrtHuEnm96tJcmLdP6TygyjqHFGZfZtVvixtjdP7ysxMA4BRR6qhiUhUqtdMj3hd",
  "key1": "2S6ouMXTnCudYJYBpcK2MnuEjbSMEBe1bG2LmUcdNqzotCJfdrXZbG4KhmewCcscvPpRQZ1BZt2pnDeTzNnduZ1J",
  "key2": "riyQB8YMWy8RjSvKrhTWqkaRhExt5ebCgb5zTb5C6Qh9eEmjRbPw5vx4eQYHA25eiS7UVzYTdmnNLZpnAGknKPf",
  "key3": "4VUaefQ7utShNck3DKfTFw4U66YymT9MKpRP1BvwBGzq9SgdJ24BYuoPzQquYXAgDB2Uq99HVCMTu3DMWaQqZauk",
  "key4": "2kESrs9BjcTwjDuZvphGmVff3YoB3Ccx3Wns6ET8fYpkNVkdt8iDNteypkNhKeLhgDfeP8sjuU5BMNyufdFrkdG",
  "key5": "iMixE43CeLU2V7x6zm4JebHLBJzidC6cH4NyW4qQ7SotbNdeAYC5DbGxzEckdYyxExqTmR2rYPp49bkCDeQiZ7T",
  "key6": "2TY8AR8BNPzYtcSJBXSpwEaXuGmBTfd9nLPy2EFMmcmsNsL8rzRs5kSMoanA9WaPmoqcN3Z5TUEKTvSogps62sMw",
  "key7": "2xRdAuU6c8nLUsQBLEydbAzMABRo5PhGraWVvoHz61Rpr833Z4cYspy6DN1s43rqSC8Aot8dk7yPLe3vDz8gFYBT",
  "key8": "2iA6zX29qRVd5ZmmXpJGEFH9aTNnGKe8rGyeLTzxkVbK76ifMesK571qzSFFfbof91ro2nsJ7Gf2Xm8yBuC8cGAC",
  "key9": "5PSNRkjVX1V8jUmnMe5TityRhLmGP93djRE9R7ipYxdKKjcnH4DqFRFabbEPNQD2Z4V12NE5U1KMBDv58XmwPTBm",
  "key10": "48aByoZNkgdw51VpCyQThbuzsRxMyCWFuYWJZP85YySJqAwXAoc29jtPGTZFHbFbkf7ArfUx4bdKju4U24BzSTLw",
  "key11": "4zpszUrpQbkU8bw6fqpsgHiE9FiJdP58K4ZT29wQdTGQZXcyYDkg6gEsJq8PXWq1DjS77o9BYeQruJ434gTCXwkJ",
  "key12": "3TBy7m9dbvAjLLmmYohZvqqnw9JLZJqpwDVckU55HkJpwbEWBK5GCXx5EreSW5SqsEpAa1derVdwCGA3XT73fz5R",
  "key13": "cWzMMKvg58fsgpC9K1eAEAtcHAjkzBNV2GDYxihFw54BZwfL4qvDr41seVBbH2LF3k4JSQAjueXcnntSDDVSbaD",
  "key14": "4pkBmL36DWhpybQD8nLFBqJwg9T31WBNgLLv2UFCF5sHTeP5mh1zXhASvmcNtJBRUPgRvFnrCeKqjSLMB7KiuqRp",
  "key15": "2n9BFx9gtAsNUWy1mHeUwkZ93FkPZt1FkwR1PiLsZ7ZjmLcZpWcG8J118vwsUap3YxG3T5zgqZwHmTj332jnUo1d",
  "key16": "4Xc6EVBmzT58AYFtX2XdGy35WrvLBC9FVk7aqkSxyu5Fb6iCgQzrTcZmH2mKEBJNtnsety4fYVkfYUeXRYkkUjdZ",
  "key17": "3Xx79wq5f6nF8CWXd9FQHmTsG7EhyoD82eWzUzbbNNKJ9H8qUxHgopdTt5ZZszZNCfpD5FX1kGmgf5EM685Lz5Ro",
  "key18": "2iqpdLhV3ufkS7DJ4sYyjaxD6SQGewzYUyNUsMrsmrhJ1qKxRMkcLPBaA5MwkcLDstqQMNgaqTrSDmHTomL6wSjT",
  "key19": "boR3hzq285QjA7hWHabotLxP486wjseKgMattAwscorzgYL1gG1ad9TRdLSf2DEKu2C5aH4w5EeH4iHK5xTHFQh",
  "key20": "xqsR2gUT1bGJ65nQrkqi1PCBWudTwEoecVtJYfF9hgfoKP7mmbZVY4HaerJGmGp9rXJnYXHZawTpSjBkwH7ksxL",
  "key21": "4qj5sh5M5z4tYBwhaEcmEy1jtH3aKWnXSqMX8TwvhXV2oGACzR4fLUQsu7x5i5Q8aZbJ94WwK3omSDuYi2eYvuhb",
  "key22": "2ByJLRdrBNzuttw1pKePaH5WExAE1ea75vQ2zFaegAnuipRqLV58vj9YmANS8CfYGcW2L3EbG63Qwc6yioP4XEqU",
  "key23": "3KrtyP1mRkyN2pLepeWbWomEdBccoJvpmbU6qZf8UH4HMUcYw2HtDqWbn9viHdRNqwSdma9SyijsygREpJtqM5kC",
  "key24": "3mMbiwL7zzzsGUDtz8zYnK2VwhRkcYxBjbqhXKT8PdxjzG3t5rPLsXyEkfran3cW4v3ZEjHivFFdWc6uALyFBJnP",
  "key25": "4oNeSrBMzczYvmwkhLncjyrZQk8iGMCFq1LXjsH1kQrUQSGSwfM7UqZzNKAtvnHgtBTt9JyXJBJTsba5Kq9yYkMJ",
  "key26": "3cGebV2ePBS7ojmrxnUkaamrgt98MvTc4Km66WpMopczE2wcuZsZMSC5Fq6YzN2TY3iUssqWDGJuddwn3rgTX3vx",
  "key27": "2MDVK9xFAPnaHdutr4co4FaovABaayh8RGunyQKYKaCVhLTAnj7cYwAZJKN1Lg3u59m4WZZLMq9urH31FUR9YZ8H",
  "key28": "2R4RmfmY2Qg2TL1TYWESYmM515xDi3Ny9sM8mSk8eBPEMfmYDAQiUX5uXEWCL3EZsdwPkuPhrEgG2aWu79UC2dci",
  "key29": "21pn6AYwUEfHV7cYfqXcLWKMuo5bxgSmxV6k88tyBVokFT1wCphxQ3Mby8hykw3iH1wofzAAQXAhdZ83u54Ycnot",
  "key30": "5ChSwhq8CxbTcLhyBiSUW29xdqaa8ZdEoUgtRLxHKJ8eK4kCfKdcmS2ek1uhhFNGnV7hXknaE9hd5oEkYATjeL2d",
  "key31": "29odMtHEwdjoc2fbUKaVqqQLUQaNWpcWizJrXRNsSY9kJPwacUWULe6XaVMzxpJ3UdwD73aTyCKkTyAVtLrghxRJ"
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
