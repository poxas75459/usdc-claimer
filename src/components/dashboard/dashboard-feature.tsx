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
    "27YRKSZLhf6fAj4x2vXirbjdL6x9GP1QczjENCNgqBEmxMS6sfM71GoxMeRksWkaNJez61nNQuQ1qc2EFw7Guek4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QzXRBSwXk6eU9pfrUGkbGh29X4c226RL4pJpmBwS4N4mDtg9swx7Fu4kWhKnJ7HGfxVZ4WzYnDfuUuneDbr74Lo",
  "key1": "5yBn24JLLzpsLeWiV2gQMU7Hnuok2tvYDVNrhheYPUpJoUKBCWxMqrBPf5R9Sii2EW4H2pRw5Dy12FoodZMmymHN",
  "key2": "5KvhqEtSiyfkUs1yfCLyyZ1c61RSNRXRMBorBxbKfEPZiwE4zm3Gc2xozWCiwNFjSAE7MdaUwKCCVrikMYS1PbP6",
  "key3": "5vGQUkYnP2Zg3mwNh9yEi4UBMPC7eEgVVbrzRAewDdR21jTJGYax2Vj5ZqAHi9RRVwRibRm8KMJ9iEmcaja6ErXf",
  "key4": "5M8G8r5S9awoY5F9ijrW1dUdNnqmrAUy7Bceiacd5kNgg2q6s4gs1w8x3DiaYw33HA3Umd1UJeQ3rvy5aSHebdXm",
  "key5": "4EBMToXP2s9bX7Fv9BQbJHUwFYC15QQbChPLUGGx84WTRVxg5WWBLxHZof1xdmYbs33r2iickeAo7FrT3av7fEfA",
  "key6": "64UPd19uYhr8keky61rJXo1GWV1UoPXt2UW6ejwvUS87zc89aWoaTmx3LfNFbE9hMNjhgTNNxQS7av9Eknb137eR",
  "key7": "UvDTkWoFXNZ9dsvVnvzcCSb357VVQ6gwtYdxCs6aJcXMpcSbWzP5xMrFopJTJLDbaZAgyzKB3F5yUmqZ1aemfcE",
  "key8": "5aAXQBykZcWZqsG7EZwo3T32GVcLrYRqtfRUhhM2MXXdi5yr2dBoZpnyAZcKvnE7YvBSkVUHGQpNShp8GdAALkk3",
  "key9": "5CTkPjvZsq1iaz55csZ5gXokPbR1VzSQk2KDsQvico5M2ZDMbZfCzb79gTG837EkKBWeNtuuzh52c1jDc2w5kDvU",
  "key10": "2zMmT8KGsmyUjXgESe8AYXMAxrWCSjcWYzfS6FVXyKuRDL5mYsHwDif5myvhLL5Qm7pN9U3rNdWWCdRqcSgTzhFc",
  "key11": "4UFt8pkScMgVPzpFvYmA8SfqP4r8H7sDQiuX4fQ8SUTRXyUvayNViZJKZ7Uz2zKSCwbHEpcVF4GyPh472vMDNpCL",
  "key12": "4W5Gdg2xKzA9ZSt27Cgaw5rHRfj3kDAK3pbZXxSxjsrcshCgdWBXqzyqefaCaTfc9yaUVG2M34Wc3zNdt5TMsYvA",
  "key13": "5iVgQsrvvTNmKbbLvmJ8sDhpsCuVwgdHAHprwm3miW3qDRiDefdb36oNnGwSrSAENKy3qqxoJDGRt3nJzD65Lxuy",
  "key14": "4UYhv785CaKt8Ex5FbF3uWsQLm88bb4wzVUodNAxYMHp8ioJZHxLVR4Hq7wuCAhoJN8jSpFtahnLwdvE1VUx8mJk",
  "key15": "PNbsDDjGpD7zkS8JVuqratX6niFWDosmcZb7Ws3BJEkkD6jb5J2u9HuuExi7aqngWBSoX1ioxA3y1oyXDSGch6d",
  "key16": "4BEr4nxe1Dh3NLPoCxPNmgC9eeJDay4ZWRRC5VGhfjJHTn88KyaFJXpgj8k3jjkAGFcMLYejeQGckRdEvcJPk4Xd",
  "key17": "2ubWuysPGDwgm5XTEru5cb3wverwmJc67P9RFDPcsTW2tYCzSMCXnTJRuZA1PuGbYw3wKi9sNWd6mVgdfWHxHuJK",
  "key18": "5nduVmgMpFNuRFEhnqmdxArP5ohJvcQcvSn6MRdEi73juhdHte13vcnXxXWbHEyedNr2Y866kJPCghtc5rhyacwy",
  "key19": "m8jHpsZAuttjJkMM58D31RM5sNEPPqHNxZmDLv58SaPYCpfYbSCKytskC144VsH9qD2AsNmHm49hCsJ8N6fiSW8",
  "key20": "Nj4QQHtpp5UQKLUMYwApoH2YPegtfNB3efKdwCEGoKL67eSmy696mxRmZsQsS23GCZun1iom2YEQaU3gPNJkJvv",
  "key21": "65dTb4tJ2zTfx6qaTLVcgADaCsWjFs9joBoCQ4q7Rh3cb12MAwSzdc2JENDMd4PPPUBnFjSH8PKRvppN1pbwsFF8",
  "key22": "2cFwwQt2hur8ThhW7LjN6K96Ws35h2Ks9HKxQZiTUTp8ZUxt6gQeAUTSWGeEoDP7LMQUPfC5m4BhEZdjXa7WP9Sj",
  "key23": "47mQiz2MAHtqsbSHcNnQe7zLJqYjKFaqxRStGj4HRPJbwkegpBhp2PgJmktVkuaQERKFt4Ro1kiB9HWc1vjTnwko",
  "key24": "NUR9JbXm2dLXA8Nr1QfPJa2nAs3bkAbNP38d43dPyxFgq9s7C4HaqNs8F9uuz5hVGMRZSK2YCKuxvVfxQQV943k",
  "key25": "3zZk8C2p2UqRxfFkWVXBasJqShXzqj8FJQdY4dWCDtxJ5tpyiuqnZiv6vDcKkg3qcD7CtqMjx9murwQwA7HnCvit",
  "key26": "38SJF4FFk2155KSjmRWQVuJ5eFJrQQrHM68jtdy883wardPGfxwBHjRK96zTdgQiL2watVxh2287J9ty1VVwpqnJ"
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
