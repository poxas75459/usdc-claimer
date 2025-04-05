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
    "5MQENEDpZGca35QqiE1T4dvv9g1UJLBxu78TYkpj77Uci37T7Nzmbrc8j2TyFqULKMtnCbJdmjqa5jQLjc2i3ys4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21bM1zNeEVMp5cR75eHxx7dysm9x5NV5ugmfNGN8LTt1puN4m13q1bmEy5E8LaRRaLh1tRD3rTnGWNGuXXJ9YJqL",
  "key1": "38Ds2sYaVQ2ZNn468ioubfEtEETKJsBB9QRVjhpC1F31MZPxUpUjShA5r2mPpRPKYmDLySXUCzmAjEg7za4xD3t7",
  "key2": "5YdLjzNwGRXUCz7WLnU84BfGEDUBaYmb2idpuJJhzmEXdU6EHFrhREDoPJxxiYSrc1fucmwxBQmwYTebBKmWbjKF",
  "key3": "5TrGQ8VpCfcZ9HvRLQhjsQV9ECshg9rRMLWT4XV5foYX9XqKU4JSPvJs174X7FfHj7NSAp1KzTJ6YMNJ45u6advu",
  "key4": "2XMhMLYokh7sbKYdk8oYZR24MoePvsMLzW1rGBzv7GaaFkcoNZRJGP8Whsv9rjHJdW5EE8S57fgbHWPvgm3LxqeP",
  "key5": "2CVzfQWCYPWrFfWXNWaCQssAVmXHge9xxJC5FwxCdF8BS6j2XPh8fCDTmB3H2Mr9mms3KKuWQEySPK3H8ZjCt1hb",
  "key6": "2kugK9DDzgCSXvRSJF75D96og1qr5RiYaKcsAjiJAHC6hiQ3nuVhgJCyZpTkhf7S6JMUyzHmkAjowQJVEUmokPVD",
  "key7": "3fNfeR3BR6prMc5xTqssmWGjXm8kE4tgU1s6xzxU5CQFBFPguha2mK5DCtirxaUqXaRaUXwkot9W7WJN9UiERAAs",
  "key8": "3KPuBSZY2cpG9cjiJyPFJAjvJMv3vqzAvN1ugYHMcQMMARNFJWSKXJWzGgYeW8bfEjpiwFh84GeLz6ThwPZtHZkh",
  "key9": "5m77wJpTYyWa9ebEBfwSeaEMNUhSDCfJsxfVV2iGpEoVURXpbiSEx9RNjc6uPjpDSFVDE2szZ5fCCV3DKaHwcKHx",
  "key10": "2WQphubmGXGUarYbYz68R71kXDih8KfdvJkHVzE4g3CkkXQhvBT9MVecDGcXeQEMQSxzxJCHEqVLW33eg71mNhq8",
  "key11": "4PYDhQuKt8FZm2253VQqRao8tkXsurai5gEThaLRmrhExZhPhHY9PV8umfvZsfxErsuq7y68yAdhvQiPaCMmju8v",
  "key12": "VMRT64wArZkxgrEUh7gTJRMkVHyC4LugkeBjAKWjpqbnxQgpqZQ7mC9U8LdJoBmLSazNsdDQmXAdgi2mE87MqN5",
  "key13": "535ZAmGV1vPtqnKEonaG6W5cjw7ANt6b3gAM9HhjJt2XBVuQxnUeQiZFeNo8NKxJg4ckAr4Tk9zHR1eKjKP5dfim",
  "key14": "5dicaNe43mp8qjxraSw8HySreZSJX9iHfLrKYwL1f2t6R7PnZzJwfKVuQDqUmegNz2ZxfdqXjymUDZVC2UPwqrXA",
  "key15": "5xMeVPT941GmrLfs8Gu9rVGoqNMesc8VFA7yJqRUosu8LPySoMwy8EK3qPJG1wLBkD8RMVXUm9d1kvwYGVm1AWTg",
  "key16": "eUDFwbd42gT6DEmbhUkYpn4QJ6SKRufy1Ad5D8hPYWFP9h59omGfgPWYVMaWWHm17hbDMsF4kiLAQcDodt9GPpM",
  "key17": "23BKxmxv5HaudxAGW48ZxkYapqpU1AbUjHQQnJDW25ZSLxCSkGptxE17ZgmHFGP44U8JNJkxMdQzBkeiy6Rv9gHB",
  "key18": "54RJjnnWb393R1KYfYNze8g1U9v3NsuPFW4WjMfJ7bemUiPCDNLnbrj3QXiDEjsWgZGxqYzNjLq4USdPHDZMTQfz",
  "key19": "hVPCc8U9Z3FR1VuV8zJqheoftmeXM7jiMEmiazM5FYwJzCPSQm1ZhR6SMx3hUKKMAzoZ26QyWeBKgYJNhkE3Yvb",
  "key20": "21NLLBhMQfi5EV4E66R15s8yHYXes6g1rLSNcBQZs36is37bjPp9wmtzBHLB7jP71XDmdj3mnQsAsEVC8ojdzh2w",
  "key21": "2wg2gWb3u1onyYfbRdjVfxWbDmygVhbyFUczuY6Kd8nhB3PMGHPfRVArmSGqkeKvoAKN3b1DETRV1PDxYnUTLke2",
  "key22": "bggmY4AcPCFncRDctM3zbWdMQj12tZ338o17XxReZ51DbtS9iTJiBjG45eqtZdxFCTZ5YrrEH9tPgMT43eVxZwK",
  "key23": "1totKg85UCQ75vgy4jsat1yh81m96wnFfNh12g9zqhGN2PtuKsD2w7ENtJ83n39XRFLCDYqgdWfDbqiW5z4XAap",
  "key24": "2nXZ9yokfhPQuztT9UA35ev6iMDRVGXD3hEwcLqSKFztHHQRCgG3fr3TzsrYiFgiDqVXnPLnHke1jPnkNJHnk7xv",
  "key25": "4RauWkT9vU7rahi198P5mdbVsy5NCxE4MG3734Cp2LeJURcnRwfbMFpFvCiSUirzufSC7xS1PNcRhTkoSRoNHC6g",
  "key26": "234GDjUQdQeKrsptYfw4MYjGYYfwEPAUe69Ch39JWzyk2nWtcWccJ6yySS76THY4YCRFfAqKHqr9NdVWdkhot85N",
  "key27": "329zJWA6K2rzFJGtZSRVujFurBLmdscstTmiyzRhJ96Eh8CNskAe8NFpBcYQrsVjKwjuusN95FnYuBFmfqA2Uhyu",
  "key28": "3tZzHvS7yq19yqvgGC3yDpMcstPsag4enwQ9hv6HBbLenWwfZZ3EvZvA34cuqgannXJBfrrBMrZTuoU6ZuRLofDN",
  "key29": "4zNnRBP3gd9pWfhmAUGCK8ePeuHGpS4gkiMgXkZwN7fQ8VX8tcs9R8Sz5HPgBHiRNVRcPhXUTQZJM4CsU41sEcHW"
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
