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
    "511JLVv4Lwz2gMUnSt3w1mdxM6KikDRFE5WzBPKqDWRjTtwTXMe88yj9C1HrXz7PEF3CQ5WhVkAVjtKfMmCE2GFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vpzPikjJM72QqZ9sSiHeLyLDsbUyboqfee5xicGn7tFbCTH4VvJPGRk5C24DNjhKcUfWDWRHXaFPduEPcrm4Tc9",
  "key1": "3RidgGU8MYg2K5hmaTbQHKYHuDkDhnzdzKZVbzGLB4yYpJYE8EnF4BDj3PGdy4a1W84ZRSxpBUdwb5mr3gixymHW",
  "key2": "2WJFfJeEPbXonhQLsT6M8HGagRQ3EQBQ82TiNDnFNgn4nb7t5FeCcGeka32N5geu172eM7PsaZSUfQPHaWdXzV58",
  "key3": "31dF6j5SUAPitnZ6w1RCZbPu7dFAxydDAVq6ff5evdMX9vJaaSCgAE75d4uDhfrzXgQS4ce6UhFXnHz4gc8E4m6N",
  "key4": "2ARoGh6JFCEGtL5JHU5xsQBqbQ1Cj3WF3X69puXWYdcRDd775Naav8GKfq9VDLiNhWzt8kbDWRLa9mVqbthivovP",
  "key5": "4UBaiRGAe3YDS3ScuNgQ8k2LUhS2xnM1RuXsEJ9intGziWJuRm2qTndiVoo2BTuETDs1Le1wc3gYwBiNjtjA4bWh",
  "key6": "5ksTWFLpXWQhPjztnYr3vEVmajQVqeePiXdv8w9ycJ3QG19v5dKqFGkrLasdADck6epasE1dVrfVie2snwVbvSB4",
  "key7": "2quhHBU94J2KrE1osLmiYBCpg7RphiNpr5GT7FC26NK6DnUZMNffUVAv5GKsnWNMyHfFuk1xj2Aop8HxjPsu1QT4",
  "key8": "2pKJ8N4L1eMNmHfbERj4nGxXWSoioQawfCG9TiThXt2SzZttSqewYoqG92HvpdW96nckmbELHwqn9yQ1yZWgYLus",
  "key9": "2SjJhpP4wEnY7xw6pD8iHhaTbw3Sn5L6572RU6vjdaaNgVV3dfHzrnGrxr22LWWM3Z2VMP4MxTwSUaabEx1sBfUc",
  "key10": "2j8wvsnZfk5sv1x7ehKsVM3GYCGUV5iVEwrPYw9ZKRXcLqzdMZvN52cTn6zWbFgxXUHvqfTRHxBt7Vs9W7MnMLcB",
  "key11": "66V2wzepqg1PeZHKhxEPGYxRT5tnzUcMfftaUwYNUqSnExqKPjHv98PHEcP8MG1yH8gc4xmV1ak8VPeN4adjcW87",
  "key12": "i6vdwrQdq5gJihVvVGdqAfucAqHQLMYLWV8cqgVdTgauBtD5db9UvYZxJXvk3C2cUZthf6PFqLEtCFGpBM4EJT6",
  "key13": "34dnfVZgfqBuK4tWU2YV7xefBUYipRzshWmtSwVMUcvEFwHJ3KpFqwGUGTqVzC5qfekvL4rT7aQMr2ULaXA73hZx",
  "key14": "4UurJbdGGTzX4UMjuFmQLDBp2y4KqPWgBSxoh8ZoTh8QP5WvZ21hquQiY4b8jfZ16GD3j5Azj6G7AL6UoSk4ao4Z",
  "key15": "51RmQvSBNcayHekfF2aGvhzbqYiBhzAB6kFc4XwvD5awiiaUyfhDLhGkNLy99aATosUz7Qtj2NpfwpcUhssjaiKt",
  "key16": "4uWM3gD6qUKQJcM3NjGk6n4gT5fMvRMhxjYchWyKjMiM3bkNqtvErrNYBE5d6PydJex5X4TrExdR91kkv6EwkEgv",
  "key17": "556YeqMoH2524THXDAayVgZgXB2HR6tEthydusEdZtccpeJ7ehMuxyCcMMCnYPCJVm9hL2FCmPVqAUyLFzoyFdrC",
  "key18": "3gCj4SfW72FA5nvGmQ7PgTm8AbbVDZ1N9V2E9yw2cQwfJu8pPeYC7wETjwrJ8iFkc82SGXrgA8KL89umBiy69aGC",
  "key19": "2a37BjprdVQe82dc6J8xSEnyp5U8XcZdA3HUAfR4hsEmiyhNXDFpM5Va5TuxaND3HxrM6MSnYCuNHcRs9ovgFKCX",
  "key20": "2cFz9vJ7Shk1ra6b3fM8mwodCdyfRk5YCtB3VfzZpAAFGmu1s35KuMTgRHxAqeW2tyiGeNg8oL5966zNaUwT7QVe",
  "key21": "4mabZFTJznWq2zHdiVj9CA25hhCjPmnHxKheW1jyTuv5DJd1wiyrJRvCAUxGG47Mw55GwQvALaRqT1YdyCTPgxfP",
  "key22": "3BL3uShxJbGwyy7ZtwDWBPyJpWuEpcTs7KqNDd18g35pKHasrFrwFAo3L18YJiBgJXqHnVvZhcnNAR6tPKheNM5o",
  "key23": "3bRnLvkRqYMGqzAeHpBPTZPsF8E1osUPWPS5KEeR4iqyHYzcbrVTJbzJ9fezXD1B4tGwnKEVGES4miHLq9DrtD9g",
  "key24": "47BKeQj96x3uXEHRYDZqjp6Wro6TDm31RJiJ22KxeNZsf9W9sqpLsatmMGytrynNPPvMXPQxYFbEvFAjfCGGNJWB",
  "key25": "N6Qhr6oSmUyLmRCThRH9hL9mfRHszSUh6bMXQndS7Cq638KpaWJ5qtimBfxQ9rvcMS1xEoftUwPSwqM7Dy1Msnx",
  "key26": "5EUCcrtBqp8MvAsY9wcbA5Wjkqdzmpm68tgm5qynJfhhc6TUpM63kcXFBTb7vsxTQmUjg2dvPxswfCJbAPS21B8d"
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
