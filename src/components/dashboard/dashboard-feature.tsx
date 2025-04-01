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
    "33s4J8hYVFP9YZkD2WLxmUv9M3wDK7F3HGf9zh3S3zhWgbF9Dpa5kPzoVRvxBGWLWz76Mg5HdN8bMnkGDVd9NkYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dY5AoUJZbwpjsqzK4Kg9tjUHjxL7c1BKX65ar5bXC83GUDKdP3kkrWfJzLsEpejxgi2dbSVbqHsnp7ST2QBKy7i",
  "key1": "4BntQpuHLU2nbBPJmPWVMFyXzxDYtVaU87xGz8phfZFk1c5bv3HZedGKAsRK9Bjv8H6qmGD8ZyAs25734ytraQoD",
  "key2": "3W4cG1nG9gweYmwzh8jipifgeWufpiJkJSwsVZQnRST5ps4BcYqnYsZwzBMW2weo4oyK8SvaEbjbbGbhhz8SrxvK",
  "key3": "3isLcAUDx52hmqTFFeTf6CHVzA2A8aeMkDcnEUEP9sYWTWDHnj5twQftiQu4e92oeCo468KKHvPGAkRWSjx7jR8G",
  "key4": "4ApmUejqYuB32tRpJQzv6i5LioDKkS4edRpgyhG7gy4y64gbHDPPgVZQ3RmNgZ37jZFnL2Pb9KzZLygReWE8WrEi",
  "key5": "SukzAieZpGP3A9fSCokNb7bpjTRNZDvrFJpUYByp7y5haQcVgGjMeDnu3vLVnV6BPZkCArxYGugh5Cm9XvhysPZ",
  "key6": "HUJXDfFXXJBDpvzZT3uvnRgCWNjuNb3rtkhBQ9tJCNoeehzUN9ZDwieKzWh9JfYFvh3gVhDPjMsJWRQan7pT6dX",
  "key7": "5dz9sUp9oyg8dJahSGF5Vbb2bXhvqUH8bhsNbZvTvPVLKSJLUqHSQcLd7N9BX7x12Kh8wN3AjpiYn1X1tREKtz5U",
  "key8": "37EoGtPtZW5PshxS6XYuaKUvahQ3r3cqLNycAh1Kc82KRqgRJVhjp3GBmJM5JgBNM81G2sn1nGgrQ9X6a75fA1h2",
  "key9": "2sk8STUEPAPgGog7eXS5GE9brxG3KWE4YTGkFDaurRJZJHPsaQBAsWA4wB8AMUUf6g95d8hkPKK7x5m1iRM6Jjy9",
  "key10": "g7m4kHEAzkJfEud4ssnxaJMv5BbvjMNqMmR96J7tKmYWHnGv6JMDYYXcaV6jtJJpzF68Thjo7z2BMRUXiThVooo",
  "key11": "3CevvrRMtUuYL6BP5xwuE7mgLh6BmJjUaDoAtMWfqvnkq31FpfQx3qk6DQVeTU34tWy8YfcYJRW58mo3w62e51hz",
  "key12": "2eZu6e32LPP8NszDbEYcq6gfKqV5fSLxa5Tq9PaFsNctosLPpZXEV3EaW3d7iT1aYTP3US3ot2ejEhFe1GtjrREc",
  "key13": "2Z93eaEwufTh2KjoWa3YM13uvqb6HcPV2DAqPXHi63gT2ytcU4TUHQETYUH5XJjeHxbd9vvxnxK79JmxREUj4aGo",
  "key14": "2yfNRFqDcC3nUGuwX1Ns4F7jW7RyzEPYphE6ropQCb2hzbkWFJZUbCP9SRLHXNnTLoAp74DHKaatjSNm2V7AEMqU",
  "key15": "2wwpgLSXb2wRn7EakhM2e3dtE4jucueb7FPoH7E8qBakLQdyPXAgAkjmtb3qiKmZc9rWp8pa3c1EmdVY4QFRj5sz",
  "key16": "5nsQ43HuUp3QCkvEtpP3ydmTuiaag1V8u4hEq6KCJ6YxEF9LCKJmNQAFUrWHq7zgiH4LpVQ9y6GBwsxqmB7ugkaj",
  "key17": "nrqZazG2S8BH74Z2W3nzeDJeapA8uQzLrjkoK913E7kjWZcFNUT1Mp2sjctyfCUocon7m9BMPhipvGo2nqiS5wZ",
  "key18": "3pLAuimNRyHwJaXUbYZgm3qcbUXZM6Cz941SkusS5DZ8ZxdQ2TbWZcTvfFP62E3YZosFuA4jnjXEHQYbYYt4aS48",
  "key19": "UZ92sCTkDLpXnVq2K8usWd5WrWd248h11nntBfHye9TK6Muo9vMSkVW9XE1VVh7wMsckrpz2ArAU7E9fE1zj4Df",
  "key20": "3b3weufL5j8EWHAWM9Gs9eRxJCgd9PzwcnY8gCw3os8XiQHeJq3j5xmRwgq9iBGKtGktRo7BPBvuh3Dd7jYnz4jc",
  "key21": "2MGjmR4q9meZuGBTVHQoUjN126aXQzGcxkLHyKLnCvt3vDc2GT8WFJjzL5nQ9k1DtMbQeTEruuKMzhJyPQM6voew",
  "key22": "5vn68B2Z9PukcS4Q1EeBw4uT2gfSvHviVYiKrbD7wCyewtquFp6v26HmBsd6jr5asMsnZ78zwSeYTLSvmGEki57X",
  "key23": "32R1vNmBCva74J4nodezdTQb9Z9JVMeYLEJ3izRhKDrzA9XDBuj47Uh2WzkDXS3UsDk7Z2QSFnmBcwVfbKoNmNTP",
  "key24": "3rMovBnUbXvEm1aaGQXx6KtUf2XBDtx4RJsiPR6qkn2JWP8qQ4KRU3fBC4hFJ8Mf6cDoA8iSXxChVtkCPmBNSRQ",
  "key25": "3VoFd7LkgPNtHpW54uUHeELQbY8QAPcPxfUpT5k4Ua3k5d4GSRPLjLxfzdtEZFDrtthuXh85mgdvbSnK71DCfzEX"
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
