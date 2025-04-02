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
    "3SepuKHQ7f1GWJ8FCKRizGZs7NskeYnz8ca6zLbkXGW9TdpJcNmMrBohp1zt2YDcz1R1iL3fizHVwpndxRSLSdGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ajiYM6gpTtcYfTjjhK5vV6TxupvvZCJ4kNipx5NuUoyucTaDKLkjTkPNTe1Q8MPnF6FjYdwF2AMiQQLpJdyaDsb",
  "key1": "5knKm4zAKLeqBZkChpC39oLYbRmeQanHQnsTBFvt11QtF4GHDKdTztcjZWr8wVk1dMReuLzeTLvhSNpTAvziFRA6",
  "key2": "4JAziDYbsBdQ9dAKjTyn45xBrJwzb3qaVAc22T9a7HMVx6iZSUv9maoZDFGbNEL2tpeSW353s2QC4osh2gTXXfsY",
  "key3": "2U2EhQ2k37SP4NHZRnYHQKGB57oesrv2mJFwfCzPNZFbQvc4Hg8CpLoA4btgT8im7zyXsFZBFPUB7Cx445825D69",
  "key4": "3gTjxgyyGZUBpFnZFVDaheBdayJaCFjbYwPSsaHji5hBLSzBMPwEAB1xYBjJYSC91ouqgHScehZGxq3vXApcxfkA",
  "key5": "2TynHuXLAzXP5hr5j1dEmrrsWsZuu2Ctyv4LoahV8AKZGMaLfKwmzAwei8S2Xa5aMWqkUZqvhRcNFCpz3z71GvWY",
  "key6": "eUSUqgWeecUzbPC6yeSzaE3bnHqsKxJXwf892SpU9toCv6di5gCHer8CHzRHUybZqhuEMQtkkFZYkgrJTEtwQAi",
  "key7": "xBNHeGRGsAQ6QqZVkDAjXS9VaTverFvwVikhxEP2sAD27qCipcQ2ZwTSwsGK7SV5SGNJgrJgVTrPrCAoAY5fRve",
  "key8": "45CeHWULmiFVAGGqx8u2Gb7CJ72mGPSVuZM2VGqgmBf854YczZZe6KEu7EDzifwagayGieLQ18n8wtZkuqUxEfVB",
  "key9": "2imgda9ySgxEy1jFuRnku78QFWdcp1TB8ozyQKn2vzju2xAu3sL4MLZjCJwAFPL1oqJtYGNVAcECpRcKLt7oqCpR",
  "key10": "4DbBN1ACcdsmDct4i7Pczyvu8v9YgTvB2mY2mQYsWnoTDqaPF22jFMiMj2fBRZtfRaZkpe1drYRcM9zEAE5PXP7Z",
  "key11": "4Tv7fpbFj3XLRprnaMiPQAyraPDgGjKVvHKRX761c9xBLwgz7EcGPnX5TWmmKWKcZ1LQ5rne8oNTfYFtcTZ1g1Ky",
  "key12": "55vHu3hA3j5saM594cZiqQ8ZJuXymUPCxLpJxCnesMNF8TLQxURVgZgkrz43TFx8Lu5RDRzphUpxBQanv7D2JJMn",
  "key13": "29LUi2cyfwcRDfC26UpzizCrPCUyNCbM6kdQcQW4tfdi5nFLt8CUNjRDgPpXbjjB5GSXueY3GeZgbHBDodoD3hzS",
  "key14": "2EXgyEaFoGyDzHdvnq9s7RwbAFhWgNzeZbotamLjG1zJmTf5i8674AHWnz4uTTi3MoDYQyscJYh5k1MtBnQ5vB4B",
  "key15": "vbncoXFqb3Zj3GkmSQH2e4eNEhXNtxqXEJB4Zjy5ztCkNMAzdbpsuWopdskaRJtbE3HwvrsGLCSEPbs1vRE2LQF",
  "key16": "2iQkoY452cb58vhp8BnUB6Q7ddzRfQPj7vtHzFqdnopG7eCR9vvuvb6GEwBpEc7arrkhGobKJ89UHmpJMaHCU2rx",
  "key17": "43CXG7Z21eGRQFfQCGwRVbWm55sFpibu37wMEBkshWEuKXFQ8FEm6t6RdbcHgoHUSutmeuV2aS7mjc9FyyT2y9C",
  "key18": "2XczdDamWa2vNxJP7WGJff8YfvjuNy49d58ijQ2sNGyr5kjnXR5T8pqupfoRfidM2898VrkkHjshetiA5i8cW5UJ",
  "key19": "5hrGZNJtzxiRPioDDHniKEcMDB3L6Pmz2SEyqtbvRZ4TcysLZt87aAASxdUgRV8S8dqiCk7s8HX3LyykGux6AB3T",
  "key20": "5ne6yJce7Z9B93hcmmuneLsQfxtzcqmWQ2iifWf8ekHt32LBq1MtUpmBKVWsEw11YjMa626YJ1WgwFF3HH1uuhEc",
  "key21": "q6VEwq7EbEX8nAtidjqfRAcSdngxZL6jCVCc8LHWM6T9NVQbYHNXqwA3xYgk75YAKxFzJwyEHnpd97pPKjnaCN2",
  "key22": "37k4eNqnNmibznrNZfZG8u87BAok7KGohmQYqy239JQSnZsxKq8decp7KKCPLrG9DeMqqKTXqD5mEgs9AGeWeJo3",
  "key23": "2oNntZ6BTp56Eokz6yCLkBn7YyMtWWeULSdhRwjsigdZGjP4v8qH2JcNg6z8pvW7kieddQP17qbuCr2WW51JwYc7",
  "key24": "4dnqiR2JXZSzx6EK8NUrbztKLwspnw4LrkLjwRSFqjQxvkYjZFWGEAGLhhipfDiXvWnzh8pZFkT9p9GTNxGsg6Hg",
  "key25": "4yR3bEnoPnG8w6Ey1cp7jubBhVkJuSDH28yDKGdV5izCWPa1HZBdNH2bEMXupeqjS8Trr3YxXHV4Fc9TVFyAx1Z8",
  "key26": "4JmKk1Ab3xM4H8dRtrh7B64nq3bxpnpmhPg7KM6jpVQ8b3ZrgwrE1gu8eNt6byYjZLtzA2PZLpq92Wig4GB4YsJP",
  "key27": "3EuwpW26NWxf4WHeMFsUpQ657f2FHu74JgMxUd897LqSvXLc23jhjucVzQVhvg12RTxJrRV1usGfMMvru7XbhjH5",
  "key28": "214JZhihhL88Ft4r1PFtmqnXAZvrqUwwKDwczoatsXFGELVnEEAqJfJC6oJn3kmYSqZNRGSBnbhV9P3odUSfd1oa",
  "key29": "L551fqGw6u9AVfMfe61Mg7RFGKwbrfD3wjoDpn3omispfocoRVbtMqDYGARTugj9xJVbdiXBkuAs82N7QPgek6h",
  "key30": "Tj8joz8XLApMmjHkcGJaZ14Q2SyfPxaPXMVZaKTgSzJrYniXAXv18EGDQFiQzWNFVPWBus9Y5nUadTtLkBzjwsq"
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
