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
    "35JtC6kN7JCrokDjLsSjv41YZe4fgXzKrLLQDMMhkAnH9CjQbJiUsSVKsT1oGVuzL3pUYYfe8ApM45NXZxQ9GXCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SSQrUiP6b3aTSunrwLiCW8eQsUgAA9wYv1BxWsL6XCssKPAoTBfv3niDBa4nWphxS8A7TogXiDjD1VoitHwXx82",
  "key1": "5ZW9Cd7xgkFp5TEHLw2qU3Vkfy8wH1AKGDx79zQe2BYLEnRptZxcxGdw1TV3pQccLzbmigCeM3X4TjiMt2D7HMR4",
  "key2": "nKS1WEZH9AsS6vGGrNmqZg1KJ4PgdBT6Mqa5X2KHitWQnRsCMnvUNdzjMUmswJpxsnrxsaaE62yBsL2tbxboHUK",
  "key3": "4h5BNGjDmaBSPYEfMPYHkGRXaGRY9myY7g8gpzuq5KGxEno2UMyzxskmXzK2a3EtoMTcmUUKFWs6euc56M6xiNVu",
  "key4": "597gWeojgw7ZqndkGxGDHeScoGRSkRwPjrT6ZuRr2y8BprhaoUTgMmLNWUZhxEhYLdxqJSkjGYobYndLtT6mFk5N",
  "key5": "3sTCtjmWRNpkGfitruV7UcPFfqn5T27NHBtpaeNWH2K1Mqfwr3um92eTAqRFhcC8KJg62HAaCBXgcCRgtEw8Sh4E",
  "key6": "2VxKFwrMANVcWHeK61qFpjcJXX6e32GJrDUic8PQKyU8NGp8o8wcU3XgAGMgC276E8BHXZ7qyWdhDGhAFQfxWaS8",
  "key7": "4apnaTn12QsE9aVyRu8cBnVPmCDXqpQ9PZU4FzMfmpf6GjkASCUTUR9DViq1U7A3FRMzrtwaNSw6uDvh2LUjus62",
  "key8": "jpKDssSLucDjGVDYv7BBz5NvE4h5PXb1pe24QBfeXy8PtUHeoCUk5y5ZNbJBUxG5Gf7Y5sVcD11Lhwriq74p7KD",
  "key9": "5BEeR32xaLKHu9bp6LLvBnLF8oxDrN6UTXPRRTv6wxru1AWgr63y5zj6svxr6t4soDNEvBqTbs2EPHizhjX8w6Kr",
  "key10": "22YHC5kurs1CjGQcrANmTyVRTPtPpM8JRZNe2CkdrudEgxWB6cQm55oae6fxDujYQGJhJo62EaGf4McY8hYVw1vx",
  "key11": "2DooMeSmGYiiYKt3ngU8pBGPrzH7m1dsvHV73VKbbvnWdgcP9x54RcGUsx1UUNQSUidKbzqiVrs4hkDk4snZf8sB",
  "key12": "432Uv2TxMQh3HNHnJkF5DveN8WuSVweFg4G2kaLG6hMvFQD3t8LDqBo9GvYNMVkkj2Ad5jXqzDMbNS2aJv7uL9VJ",
  "key13": "3jLGVqXyfdAyJArHX2ie7GS5UXgY8a2Pdet7zZzrG2V6VVDE5Y9KGp2ew1cQ22GwfzdwSJR6vHcyrJ5ChS4KGunz",
  "key14": "5vVioaT84ssuo4Nkvy7AjyawqxyXiXq1trWSjPgef5mF5YyadKobgPjkT5UiwdKccjmfxyfEfecNGyYtTRfjwEiB",
  "key15": "4XSwphgiYBynP1Q5HEeRs1A8M6deE1cSTX2pJapEDLq37Y2EEFwNjW9EGwppoTC1B9VPoUS9wn7uCKHg7ndq1mnr",
  "key16": "4CtA5mRvdSHnUbYVop9HMNPKjnu6RKrnQhZgLwaa3eYjrop4NKr5fY9978ZNSENQEqfdR5EKu1XSbBYGGL2MB12U",
  "key17": "5dZLiBUN1TsfwjRCGh1vcUyDLu1mQXfqh465g7id4X6WVzGujuN85GNGSt3n3yyq3hYtiYvfCjYk2AVJFZ7Cjs5h",
  "key18": "5KJwnr9vTu5ZoaVBxsvzZr5Yt3oaF8Y2cttTgi8gKNCHb4GEA8CzHMdg8bmBsX3pmWcmWhHsoZtZYHkhfVnbfsnY",
  "key19": "3HsQ9HbZbaBWfNpHhnPH3pjUareG8xq995tF2Y3hrC2nneEp3u4PYPLrsSdeX39EyZKSiEk74a4M8sKhHQBCKQWE",
  "key20": "cuykHxxLvnsZy96hKQnnmsVZTVdfQPWkYETyfJEa2xs9MCYPb4nS45xBVEi8YWUz84uYfpTPPEdd9na2rqiDgid",
  "key21": "3yUYpbUsmVj2uX8dMbwd5PavLo24qfXvdhZ43xhEzCNVoG2xJsfa18MTufUqBmoaYMpJvyRuW33seHsGoHmJPw1K",
  "key22": "4j87PcUGuBZZSyorwZgaABJq1beukoz47SBJFsnqFWsAinWGgukJHrz9bnHhkTyNE3eJ1E3qVBm6XdxgRD1zc2fw",
  "key23": "2QwTLKmmiP84GLrr55MgQZcqd7Pv2LGoj2Ph9L1C1FjXhjGidpWzL7dVVZPW8GXJQjWLsY9MUekn2gFGtjLPYte9",
  "key24": "3m6nBkvmmLnRo7DiX82Stoth5BintTH1P7uLoeB6ez6dzvWUrbPfGa8PjmHVwPnmAS68XV4uuaeHhW8F1p6CCd5v",
  "key25": "5EZogPkAhUTQRyGb7LBh9usYsNKwvvsjTb9kNQxUPJZrqLctVMTEfc1sKSdHJ3jWmDMPkeJ2VwjHz3tH9JTiz7dQ",
  "key26": "5JQYdjyWasonJecds4N3FygGvtUYBJTaZzyTsuVcfeD8eLXDLdqmkvayMn5e1bEoVvJdRyv5Q5Bp9rHbBhcDqYuQ",
  "key27": "4Z1A2MiV6FEdaLW8Wdi5gH8PdHHh95zqNL27csxw1XfXTbizF2FNY6AbBvRncVsBP8kmNvus1mArCWwaaUPDohuf",
  "key28": "4Zx7QZj67SPZ6PPHTnqgbWyFJSPGJeRNQ4wxYNe41qWW7HP9Ks8WJbwZQxXb3Ptf8qrfPyxAmyWUWsTzsndrkoRf",
  "key29": "2ZwrVgBupBegt682K57ZKvUGh9bb57TXgnBMuTthmsAHiDYw8BWMSTREK9vj2tS3CEvx7KeL43SeEG8bmAZjRCZ5",
  "key30": "55895gwTBDNJtWdex7HkwbRRh7G4b3yt7BywXAdMYKfVUhA9pdvaD2J1RuZerx54bZqQisgd8xEJiEe31eR6KLHW",
  "key31": "32odVxBPz8GjywzSFmdwN1tdg624C9faQSvGrMhtuo4CZLs3TTn674P75ADPy86kLaqR5UHu1uYtakDQvmmb747j",
  "key32": "4Ft8xvgQfrhA8kjvhp4Ny7WKDekuq64Gcce7rFfSmUEiRUoK4do8JFPGXmYpH7z5F2zvSJ3zQ2jdyLhxwCqDjshb"
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
