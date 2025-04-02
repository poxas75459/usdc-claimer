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
    "abkZ5rMTqzw5iBonsWZ4y1GhjCWp2YjqyTvtYs7xmv8uH4ZxkK46cyuVQdLbsREoenchYoNLXcBackL4yYhHtgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TH26FixAMkeJj5xSNYYNkkcu8wrFygQ1TJGcSwMBZgxbWR32txaPQARYFt8Hs5RNUj4SB6omZJQxhr4G2zWiSj3",
  "key1": "4s3Cn8RkR2DEuWhuTMPz97gpEz6Ci573dVAQBJ92fnNvgd8kQCTQ4bpUJJiKBDBCCrNiyA8X1vdM1WpU5Nreb5zi",
  "key2": "2sDpXj6cgz7NdX8VxrQ7iqU2qhPrDcgAW7tdvUaBjUs1oFgKjtGHFbDewAxrjawcx3Js7PgCbJ49V8M8u1oSgXno",
  "key3": "2d28HXn34VgdJXxcjVK6xowXCGBWhzJY8MpUbwHvp5fwPqFiK6WcBmywLafybEswwT3F5EEof9g74FQFBtdPKy9f",
  "key4": "2L9XNRtoU2ZUJ5XHtxyqWwmV94DUfAfpe12koHCA7ANyeqbrB9zpHKkEv8KVjgY3qGcEKLykSAX7FgKvL4xrQMGd",
  "key5": "61iDrBpgVSNQKbFFd1Ay45UZvnJd3pj33GBqvdJ7Rvfg3noSqmmaXtedHCpkz8SsQ9daesAtqSMo33i52Ys3xyFi",
  "key6": "4ZKUDZN1S8ZR6bYA4TuNtTN7v5wueKzVxJp1Qi8nVFiLrmo3F3t96qeDanRqxJoLMRUbvvsfmCAzQMSk5nYUSHzP",
  "key7": "3SBgGeeFUhHpSG2SbH2PL68VzyrK72n2cgi4m29jj7ev3faSXrGikggz6d8y27mG7JGpcmYWyQ6uEgm3En6MBMge",
  "key8": "URQ4wjXB1Qqww8QbYejF97yHHAjnGh77eifUvEanwpRqb2RBDU9VaZijY5TxRBChwv9jDP6oVT3myLiGqtBQeUq",
  "key9": "4prE6jKeAo7AVez5T4hzvimEQj1Hjn1Cc87Te4fUeCZEevkgMbK2R75R6vpGdQjDx1uDGVF1NBQaMXG8TrANafVf",
  "key10": "5kTPwFxzC1Lmt1bAHx4T78tUrGaQnwWux4A8mZ8kdgj8sCABsJpNJsjRPpQQkPutpT76biMpgKRN5AzduKwXWCQu",
  "key11": "4AvyhC3Y3w2PAzjejnygZXwBbmJKeB2M75i7iyUbQXB6ubvQVmFAAV3rVNAmCNDfs2kZfzQnRFQNPVmyU28rw3U3",
  "key12": "rRVxUmy6ACTHX9BiQPUDsHosV5JHrZC8jZmT4mXB2mNfeu1TypJuNATyXJhUrgyZhWshxhb2B7yURZsQrzVbfi8",
  "key13": "48s81uLTSMoaqTnxnjpMAQajLBZ637Xa38he8mAvQFzS1Fx39CToXPhGArtjdvRMSAa5nDvQhnoqqNRU8c3GhUnQ",
  "key14": "2eERBiudSFv2B8o6Brrem54VkVqjzw1AUnFh45WB1qbYigrbRCczuhLiU1zVsp1J1iasFAR5cPBJmjDGSyiZyyXW",
  "key15": "tMvRd5BHwAyMGzsq9iqCJaB5rr6ScMu8Tk6y1CtY7aohQvpK8eEgyyP9ckESt2eBcNLVKdJdMQa8vecJYqUUPLL",
  "key16": "4GHnwY5hnesADhWp3MHwMt5CsnbmNuNs6XPwem8yxgdqJTNrfrLxz1dosLhepNfUeqtztkS9hGgcwNJtF4cCNwPU",
  "key17": "3ppYZhNn9tKU7pLhnPzXy2LjBzfCGrYB5agDU24DZkfpa1bkbqjRbdd1aLX2kKWH96G9d81roUpbfRQFrdcDKoF8",
  "key18": "5Rqb7VDUKxtfyw9qv5uH7M1vhjpPm2eYykFBQsuV1ezoAwWRq75JwCTBcCqFmBEDzoyTgW5Ke7fsFFAkBoP7nsKj",
  "key19": "3hz41x6dzboKKhDY3UCCWhhfBhv6RUMoA7B84BphT5NwU3WSCBHNVfYB3vNkxbfqjwfXUFrhbWZLSUS1atB9aPTw",
  "key20": "NfCsNWzWYDstWChTz2nMNBatrek7fkpA9CNSkggSyx7CAJrYBe1AA2w1GqWpMYRV8mHU5TmxYCZrYhS6ahDMMPn",
  "key21": "BGNq6w2vsq2mvi2rzZbHHsx3Squ5KkL7CTagn25qZGXy9zRmRTwnWTe11D2yNSPxEAkpZeRif72knvRx7NSVzYV",
  "key22": "2dMVDYaLmXi2eAddPxcKFw6j67ukAavVgGrCiPRLasamhgmtz4MUZAPpw53uyM1JL76ubaALpJ2WWQ5hsqWRkAaZ",
  "key23": "NLT85MjWiHnSNmnq9h5wVeTKH9hYuhgxFfATjrFzh8FRPMP4UXjzbfP2EDibXba4SaasCiwETKKtNaiCShLrCY8",
  "key24": "27RpP9GvQbp5osoxjUYdBCWEY1MKWuyRepLJB2P1AKUYXrJbW8bcpCaGWQDLU8rFAduhp7P9V32Cpo5Zp7K1vfhK",
  "key25": "2ykSEo6c2csFH3VeMZgoYYNpnj3GFsGjbU9UGuyQyTuVZ6ctbUwXNqFPLBwpcVQ9a9H8mkwziELiBPfLzxYCbYBF"
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
