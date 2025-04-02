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
    "4RUFCSjRdLX4vpELESxtWCemdb4cuejZWGKHr7yh8uzeTeKTY4RknWrGLf4apxNAimnoXrToYseVQ56FUAKJt69Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64GY72GCa3JjDdEHK6FPrbGkXiHxLGBR7T2GL24p2V7sVqLTpfYd25bTGQHaaX1ngeFBWK5hKZPrN1Boqp9QmHT2",
  "key1": "5wsRjWdZCkTQ1hjDG9LD6tZ6DDGbV26bbcfk1AJZb5Qwvn6GsiUqaSZpTHoN9n5mYiKiSfjSDvvjHVQLDvjpaydo",
  "key2": "HM89vWo2wBdiMa2jw1HpWdiF4R1nKK5BDjj3QPYXoZT4fr2oRyUofETbvTJ8xJg6whsxG2dLo9Fyn4nhkPFUUnK",
  "key3": "3PWsqpy1ymNWUbPf25Rgap5zWaJcEW3s3jmeeaN42dQEv8SV1Qq8LS5BCF7YYXrcd3ci7XaYYPwKfJN4KLiuAat2",
  "key4": "2kmjwePNSTPxTeQww5H8bprRY91HHFgKiMtpsyLKJ2Ly1PPd9HfnrBkQ8PQ9n3vGMumVY7aZ83ZMb1JE5w3VokGK",
  "key5": "2jsHj8QrEFLPkfNJJHdNLpc1RckZHDNv4k2M94aRFk24s16M9oHG3zTTcjniwRXkkBr8UMZNYCC9j9VSG2QXqkYk",
  "key6": "457eWbUnMEcKx2yxzppxs4EVwsCyfRxkQjhyfrpCKAbVjMGNzJQExFacAjQ4B8vWKfwg5bskB5zmydzcvAvmgBgg",
  "key7": "3tXTiyqhy7hxa3V2NrWau2rmbzTLfudVtecJPG4uLxRAxUvXhPm7ZCdKD2BkLEqAv84mBCQD4eKpeCqoMRHSuS9f",
  "key8": "42oYP7wgWzHKm3GznVHybEXkbDye1tnxHpTgGUHvuqH1rKP47gC9G2crbvuLRciz2LnLBamtxEngYq3n9mq668Mq",
  "key9": "5Pm1XGMDLf9kX2VTg59QHq1ENVVwCjoGuVDCUL6ofv2gBtqxnze3P4YUkNDzocHSZB6gGx1B6f8jBKpgPEyK7Cwx",
  "key10": "2uXDjyCjj9C4sBT1C1TpDHm9Fhzs547THPkWVGPATPayLXkNDKn6rQ7pSrRUxevCf92hf2KFxCNLgh1CK9kT1aEV",
  "key11": "28Bc2wL7o1EhYqhLUS3N3cn9rtmSbBmQF7b4ZRcbAPiQbBZoNRFxz3JwXgGTJTPUtMUz2PRSp2VeWaFnuuJSa2pe",
  "key12": "6QECGqzMXzDG16BdZQej7uHTZHmb7DFhgrjVgw3gXPPCM64uZZqWb6xmNRvf6W6kY5bCTogLgsbUk4C9QiBXbRw",
  "key13": "p31vJkVf5dey2rA8rzVDUZn9GwfBAonfC7isx54FSKWmMP8u8sTTyaXeaGcSypvRtxuk5wqdLbtauBMuZwQphKk",
  "key14": "5PJ6qYcwE1jzgX7dfmxbhMjszZu1LqzchipfAy75SzVADjVhYYcbThCcAHSz9VZnqJk8zd9jueaBftbkJMTAKRKo",
  "key15": "3jT8NJAVBUEaZMrRdSfmFpZhoxTKpEad7pYXj9sMQfbPrEArWLg4jo4NZK6RrtwsPtXVqaKWUUuFyhtDgurqbJLw",
  "key16": "3W7pMmmYx3tHsynQaj8UqryzqdUJyVbY3sYKQWxE1LdNkJyFCVwFDRhCehUKNz23CpuKU1MrFs77EQcassdqRqrf",
  "key17": "5Gd2bujTLKi2kN23oZ798eLE5JpyVC7S4KYVCtPDFPFSCJkW88stCgAU2n2YGFHVfLoP3MB7oBwcUS63fR9tTiRf",
  "key18": "2H8v8yMV1q3m2GhsT2koZLeSy2f8G696xYRwsrs1oUu1MFTArgBwQhmms22mEw5zuxbxNs7Lufbt9yKQGJZf53hJ",
  "key19": "36rQd1G3udrbsuQj8hzzgzhDLEAndu3coyLitQXDcqS5mdHLoDwRjKSJLwocLkeAS6QJUwF116k5oEibDhUYswC8",
  "key20": "3ksey8LdyBW324Gwzff9vH1y6AjGAaNKH6sqgbg46nsNAhCtVdfuAsbrvJvEc1Xyquhtduuy2tBG4VWW7AUHTWkc",
  "key21": "VUwtKSZSEQ922Uk6vEXNbUtqbADn1WEzKdZTvBbfGR7ArQHUsvpV4tCvKHT24rNEFKNvhQYFBsrotuwBaqWiGzK",
  "key22": "2qnBxLfY1P8WY3NUvBXjSKCWXbA1KDzsxAu2FReKE24KHg59MCjrd88ij9QR9zzfrJRg41n8h3V9c51EMdYyv6px",
  "key23": "655s7WoAs1hUrQhUQX1UtrwpiTqknheqeUvXgwcDoqoc8GnQWAb4f5speR1PEwFEB23PX6eVGJ1X1kt6JQwPsg9Y",
  "key24": "63W2bpaQC8u5urN6MbU6DGrkxw8ZgQnsFAoH1P4d4vwnPoyQ8rpVArfcdgkCEWpJnQ353HvDDsuGBh6yiTGQUrkF",
  "key25": "Am3pXtE3Wh3n2dhadvKdHJmKzfqunxi14DEpjw5Kyn79TXSyx6uYjAxbt1eJ5XqkxayeHqrVzDTKjRyUtFDG67k",
  "key26": "jFsJ3HhabJ6GSC9vydbN1yqbVpsgCj2J25hCZc3ShvbzE9zXcditgJg4mP1nZhwuhGwJ4iCLysdHj2ai6oFc2Z2",
  "key27": "3uCPNhaVafoW4J7HfSb4iqsF7Vcy9g2ckDMyAtAqoZSYam91hP3HpusqNMrvxbKeFX2maxzMiB18cW2PX3F5NB4J",
  "key28": "2hCA7kLtzeSgYwFtLW9RAJj3bWXKHJ5GEeeamRZzQQ2AbyU7C1eyJrWjxvLsQFuh1yQW7agcwTebviieAenS7Ncx",
  "key29": "2oEnrq1rXu972JjC16RGHgUbX4cBZYuZSDBeVJcNZ5qL1jACFUfWMgbNiov7VMxFVGA6eTz68uKeuNDtW8uoWZhF",
  "key30": "Twfuz5oamAb1Htd1iau8c1AAmi2QdwDJWRQA1amt4BqTBnoyCxzYZZJ54pzxVofcc6dGeocYcNBWUyTgDJeLgWW",
  "key31": "5mDqLJXS3GJXDt2tNCoa4r5qkyemCSsYjcuoZAuKitL7z6HsUE1uiKoR3HQWzTW7JFNg53CCG6g8KEGHvmwjhMuD",
  "key32": "5x1Legf3QDzWCSFGTz9NTBWBuXryt3atFAzi85erWacDJRUUarTzjnZnikgWY3hYC7ThqeBWKSZY4hHvmKqwkTA1"
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
