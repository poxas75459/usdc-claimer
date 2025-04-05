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
    "3We366L5LnmUSQC2buQAYEW5nAHdd3RidTKAqFmKWgXXhcTiXzXRWY1eKmqRnxttuvx219ySHAUJnXDMfWYpGBhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rTQa9sxzQt55JCB9HpfVZ6X7QtHJhjCq8QNYYq8iYaMP13HWpzmZwv4USdS74vLKfdskjhkC6aL1mLbZtfezbU",
  "key1": "4ch7pHHyjbrXQQsAaN8zQoRgjxGrN2RERfiFoKBFDHhPfc4kiYVgDPVP9pRKwrvPq9jR4yLex84iUQb4Um6eTx2X",
  "key2": "4wsis7B2ziTyCWmzqTa8YViXQrobhcfLp1coCuyDtrccgRTqkUd8ycPvZyKpMSACrSTxEisgzgMQLL2CJrsMPbg6",
  "key3": "22trKs9xZrJdXCX4nzbeE66Fpvxk42ky7Cp6rCpkRomht8adDp7LzaoJ6fiozcodWzZ2WLhbmJZG95eSXxsa4Sui",
  "key4": "H3TZ9Z4anMK3qb5Utr6mT886yHHUC3b2j2jx9u8Ws5bbBkASaRN4fcx72KE5dJ8nMPwkSX64fjVXzg9Eam3Zc7s",
  "key5": "44ap175bEa1RD2Snn6oG1pejKYcm3RbDi6TXS3GF7fEChDgf6cnV2DrRPcA2NQaGZT4bk3PWYfXvgg56pETtRvmB",
  "key6": "4xFYi1PSXHt77rVbhrNZoKJjcS3XQUBqj6RdK9CtT73hCBNWVzN8ZFhTfHnNgA28KtugftT8MHEUUEhsZ1MSyGHm",
  "key7": "jMRFhVxNXbhacGwuNCzRTNRz836XK46qrszosKTXjmXBmzssYScZn1M9fZZ2uptKHcAt1WBVzaFMecEzj7BFeEN",
  "key8": "2qw34e2m1NaB82FgSk7eaqfnbRSHLYR7Sfbyst4mHeWxTM4KDS7qSE54msf6uNRYn3tWcC1FN3STQLURmo8Jrn9Y",
  "key9": "2TJ7MCYZXRbYY5aHHfLtgnViwtu1FQR6QRRthmkADWAv9gyTmagaoeZLm3oj4KSQCKTrnNcAe4tXmbPExDEtsqtx",
  "key10": "4wBWNTCq1tAsTZtxwWbgzeMSm5k2VxUS1TDm7jHQ79HYxzaBiqKGWcQqqs7gtPUtCryZXAR551e1t8GGxdEin1WE",
  "key11": "4GueMnEkB4Zaz54pER4iRWqhALCgDUhC1hkLEFTC9jcUAipr631qu78BsnyBpio6NsgdrU8ZpZeT5HkQVuALkdSd",
  "key12": "2kxo7zCxJZnhB8oo5djLAk4A2aYk2wXKzRGmUu7QbxJVja3URL4zwg6YvpuzAzBLhrQ43yXW3zW5kwQBuD13oUF",
  "key13": "2NmDD9NjGNxKgJWENuEHS1JikBudPuis2sQu5Azt3uXrsZS8r3utDpBjjwu8U2uQ3hABbBmYyfRCFkhfzEAt3nBS",
  "key14": "LWfv6xbu3No4SCWrQsLDSswBi6JVceCKxS8zo8nnVc8jfZoc7J6MsxjKSm9g5g4TScFzYNBCWFxWthkyDHd4pEV",
  "key15": "2FqJ575UGtv1AFEQMSFmeDvbhmpXrXU7aQoYhgdYoDu8zpKDbXX3mc1CfWAAh2MAo974kkCX47PGC9pFH6LqEssS",
  "key16": "5VXoMwaPrWW1ZieKUymho85efgrBTMCtLgLz1y6A67ZABDwQy6Z9UDJyKKqg6eHG46dG1xAMz9M77A36JxjEsT1c",
  "key17": "j3DMuuGwz8Z9mTww3AGXheG9WgXpKtgdM3FW2uqfeff7bhubppTVbDYD3NTptFM698Q1L4pdRNfx69rQXkDR7yc",
  "key18": "2qZGb9K66wRcykmC5BmPxb9ccc4EWe8njXc23oLFzMcnZ5jNJhk6AuhACUav5NS2rhxgtsug8i61gvmKUBY9iBfw",
  "key19": "3S7xQdsCVSyPZKk6X3mqCbG47msfYaGDUQpwqQzPts56qYt6tQsiCjJKRa9ifkpTRJgK2P5Pk3NAB4HMssVmJ82H",
  "key20": "3jtnr679doYnDiRYUfqdHk5CPqhVkuF3ZvvmEuRrvTdGUbr9xrkSs2iA8FZvq1f97FXNCFqMZsxuGTHvQvR115Cb",
  "key21": "Ve3SJCYSfd8SHvNLjxXsXPwiJbY9AETojXpmG2QegQZbY98FBSLNoY4dciCkJAkCBqJ268dy5w7snzQh5dfp9Uh",
  "key22": "3tXdLAJECCQ7Bf1bMnnCRQ5EYNepLHg5ndRco5LQVcRv7tCoZocXHYLxvRDGxMsocTcyMpvVZFgaqL4k6sNjtBrv",
  "key23": "22vW9upfugLdQ71eeGbYkWtTBwR9WxVEWKHMhSLUTXXtZ6LdKMSBLMCFrUXnoT42hp8qx8jssY6fdY3g7b8pqNwi",
  "key24": "2yCFJa3e6Ld8gJjue3EyevzWJjwZoCSL6um1SbDbyU1F98GduJp5APgJJwvCzTELCh4Eu58ZLyEDpw7ZMcedB5jL",
  "key25": "22jQxi9Do3aYGbxerhy6WQrtd1iiSr53ABcxWyf6985zUgz3zeFfWZD79fJVBrWupdG4Agg98DzMmy9ja1LDCUbv",
  "key26": "3wihjMBXcZQGvPb6MavXqHVsEWUzGdLnbGZtJ3FJkJQuUnsQd6U9fkM9ZBaSMn29dFuSDZQFoaGpQywDLqyR2c5d"
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
