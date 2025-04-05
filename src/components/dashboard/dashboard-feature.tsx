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
    "23DS86N3YT4QP8KsWfKnEzhX9wuwhdsH7zzgWU8KAavr2wVjsUp9P9AKco9gYhBH7VbhdoETc5cYBx1pFYRSqiG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zeJ1yUV7Bi48jNXT47zTPuUAMYjpHseXqn33VH4giuYG2NwJZ7cWtv1btx5qpT8Y26ragabBEDhhS6BczzT2SFt",
  "key1": "4w9QF3RDqpJDgXtPnuZfiWatKkiJXDPTLuLe8N9pyn8rptKxuNH2og4EMiisWJw5sQUpn7yvPyEEeDXefBpjE5SG",
  "key2": "31Jq5dPMcse3k7aGvP2dNiZWpgyCXytETAyjXXZ5SmWXjmwV3Jgzo5f7D9vVwMj5XgosX4nhxan4h4ENL7YKC7Gn",
  "key3": "4VouiKVJCC8jXqrhtuE62d4o4PLJLvgnVSBLJQMU7tkx8GwA9DGmzyU8YD1TzWUq9j7neWv4qYe9QUP6fzLPq16R",
  "key4": "2S6BXJPRcD6261QfALDgDw773Ug3F3vseH12Z85PvEa7RwBQfXR4nVksd7MWxYh9Jihg5Zbvu84kY3tUY9SwF7pW",
  "key5": "33f2cKNDb12L2tHYyhE2qKXjnLw9VX44nEYEorJgqkvp1ZmXquBYJE6gGmS8ZjjrcsCmX2f8HjQN2GYkNpTUTZdJ",
  "key6": "5JMYEEdZfjMEn6d2A2RX4ubeyp3yjRQpz1Q8HiZTrt7xw2vuSfGcQBsLYn7zgkUyH7NYQ3rxg1pmwYAJm2cACmCC",
  "key7": "2u3BFeSiE1ub1eCwe3sAAd46LAZfJMTZAyQKstHFxc44pJc5R3wpJrwQMW1vvxoMZJXg2tt5BVjF9TxJRpeEMku6",
  "key8": "5Bh49T2vfKF5bdgpQPN4LKVNGnz9u1M9WQGabVBAaLwAa2gzXmC5kiE7uL5eNSujf41hNgCbFwEg6ccsy3WTECsH",
  "key9": "2Yr4s5bj36aJEhJAaRJRGcgcAJba1dBJVikvSaDa3q753UdJTCaeAmUhZop2LgYGSbkAzpwuVfZHPFi2RqUDUgP9",
  "key10": "2ab6jpW8WyLEngsa371tkJGQw35HrLXnDTL1CE7mKfaHtTyfSe4Mgs3R89Ro8svmcSGaYLQ6WtWu431nKqmhVgop",
  "key11": "nYqU6b7gfUf9KxGPW5XQnHE7oFK18wm3fbZzM6nJa7ncFEx14bTfUCgKE2VQRTuuqnfD9PwaFntizK9UGuXjsDg",
  "key12": "2LReUGcBwiyzowR2rZoJKj6hybE7ctyWmNBxwY2nJzDQZjsLupQA9Z3cPZ9DNaR45hbB3rpG3TZKiKRLKbpGjQ1i",
  "key13": "2jAZT5LpUxzE6DMhumrmihJobPwwyZB9bWkCxEyTN9puSUwFxQrqqT9n13QHSLs3FNdif4AknZiLvjPRe77pj2uD",
  "key14": "5BbD8JpWFoVjdtjJV7Gqirp6hK1tMNFRZS8j9dJCuGAUUZEKvEimkPnnqodGx91gRPTHamn4sMxxE4J7ogafjUeq",
  "key15": "5sY8ZM4wnxWvouMG4ZvixdyqSEhKTHybKVowsxxQHEYRu1CdvhvibK6csqQjL7w9H89dZbkGMH7XgwrNjBBZbNie",
  "key16": "4z6u8jAyRY7bk4k1HntHstssnDAJA8c9jshj18xGBJN5aS9y9NiLE3y5rt8AHCvdtGJpugHetFmN4pCtn9BzWpeX",
  "key17": "3MxdsBn4mF6VfFcNkFZ8wTUSSVWAqkH155jwtcCFg5S2rmwTYhgnNt1jay1tFQDgeb2KSc1hjrfcSqg9vshupiNE",
  "key18": "2aAffNFXeDYWGcHa4Kvca54u4Zp3KCjVKwBRJBYCf4soPvzDwNcEFznvGCbyHv3opNMNQdWruhtFu8pL2BkypxMg",
  "key19": "2E5VunipHjZou6vCmKstQBcZoVcHAFVsopnNmSaLaRWw5pQrAVzKR9C75JuMngsuJRjbUg325RFSCyuj3giNSkp8",
  "key20": "4PazF53YTiZfu95ZC44DKWbSbuaGZX4PvyAv961Ext6TKCybQiZB85YbHvgTQ29uypdEKqzKvuVwicjkAk1Y1YNX",
  "key21": "5uVAsbW5UdqkXXUXqbB5YgFrk6Ydb9EVxxGAkY4giYvXHU4qa2wP3ajEvTEFG9QR12Do61hXJFhJVqJ8MW2KGL2r",
  "key22": "5LPojEGb63AzRtNjtsZ9pmHz6Zq8dK73DmgXX7T5extntpMrN2ePw1biZCQEre8YVFAQx7kLN6Yzi1MqMaCj398R",
  "key23": "2uAkA5ho8rHFUejcX2MuU2su9SD1WKeUZRfQc85QBj2JxSzCD22v6kX9hhr1GsZc8urmE42gRi6tfJmHN4KNNFX9",
  "key24": "2QZhZJKXGL9iGRrZPgjBNVULbCWCABMDann3113mKt9ttEmLkbUsgwABUTRMcoE74T25Wa3FBgxhepBQ3yZZDGL3",
  "key25": "PAkTrkfwcJZnZJAD1ufd7UmDqT4YtE2iZH1G3TsgzwxeLjEPDn8ZCKEepEZECk8tEQY133ZYPmMsGHQzB83zWJn",
  "key26": "4bjXpY9vfktG2MTnE6EzGPZLgYi9jbNxe492tSzgoD3dyS7oMpfnT7NRGjAthTHCmaGDKhXwH1XtLJoLUDpbmxhu",
  "key27": "39Me3vAaJN39qywFQENVYNGP6G2BAsxEktViRe6fGjNnoiL9NiSjB3Ma2AQPpzbdC1XbMu546UiDNtYvW5DSV56p",
  "key28": "3tbbmdpLXqYfsRzLBDRZ3VSEx46RcQpuCsyvN1TvBoJVNmvQsNJ1QiAJVE1BuKpbj3FQPr8RbKhKEAcxvzbVY7bY",
  "key29": "3WanT7STMUxZ8iqgXPAA8PiuMGMXZwqDkzbv4JZKQDWwT3RVnQEvyYCR8QrKGhSYCwJqert11av9KuGT1CtsJiGv",
  "key30": "331P3LyQpucvKMTqxxz5oK4ehgQvor17M4Sq1Tdc2qUtfGPn2q2fSCn6azsVYCT2uWJKDBBFfFSM8ohHDE6QaBRc",
  "key31": "4zAut6fLyAvRUhCzAmTBJBa8aEy5BT2UfL5aSxEvqxYheMVbiYvjWDhoikzFMAARkm9gEUTAXx3dRePHreCdNkYM",
  "key32": "5FsEfannurAwGH7gYCxoRGGXHArESAYeWZS4YbgsbMrNgLH8HwMeaC4qvad59SgKChD6fSP2BKc4dgCTi7pZGuY8",
  "key33": "wUiQ9AytzigcCWwztFAjx1XEr98drJFGKeoQqJ6FnpaQm3yFJxxfsWQomhgLL4LsqcEyh4T2F3pLvF73ySyL1ca",
  "key34": "35nGQMt1onawYfaK7pRePsDGxdJBWsTtBiJ5vT1wJAfzvVoejMqHq7cRQ1aUrjixomMM5Kddb3C8L75fERBT8r54",
  "key35": "3dKA8sr9edWFnPeySFAh1t3dRhNVV8sJtftB7TSEoKUaief37ko6CifgJXLqT6XnZRkxponQ7B6m7S8caACEQAyn",
  "key36": "WttuGuYJmNYmAadLATqbTgH6ZxtW9TqbD1B7fkcWa2M6AadWUfRMmnmBMNgCZGrCKhDEwS8rQs8faixk3jFYAx6"
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
