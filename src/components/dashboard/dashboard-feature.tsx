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
    "2GGdRnkcWQ83pp5r1GJorLc4pnMRfDSdBvnw1XMPMKraoGTMvRTh53e1suC17mrp2Xpr8vu9rLmWezn7GNkUsK91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XereKwdFMw8A4nq3U9NXGFCo5H7oPXZ64iYBgcLACkqsc75rSUTjfbKA5uDzGS1oEX4P27MriKqovNWrv68FXeG",
  "key1": "5aurRLBMVLJn7KCQYc63kFQ4uhMH7CNho43b5vKfL2rthZthPkpJa9LmsqAK6fHyDYwiWF5MhwGdmrtBchukcQQp",
  "key2": "4rUwaTzJQ12sKC9bDpSP5SPTwrMedQKrB8RdTiBwoR2Ry6ZAXA1sw3evuCim8HJAbjhgmcPSdmLrrsKPo6FiYmYx",
  "key3": "2r9kUurov4kjmegxVLN5PTx2jCrjoYjiH1dnmSfBgSVvYVayjpe7ou5ZCyi5rRqxC1BjQVmJigKxYevR62WpfXnQ",
  "key4": "33MeRnnqT6A5mVBXvnS1Ltunia8GHeV3QPzXnxHmEwJzxoZYxB2nv2H8vqh9qdheaJ39r5a81XBuVs3R7Ppncfzq",
  "key5": "4nEaQX6bjDnYpsnpkwgFRSgA5xh9QWu9WJDtNmdkHH93MvuYXYwSJy7HKzjqC6853XEdWUGGmWCjQTFyqzZ9i1Pu",
  "key6": "4zXxCjMWXgwwdyDMpgh6WiMkqoX7H8j6r3dBQ9VBztzeWCjkgBwwNgfZ4n4b5H8phN8y9pKNV65bmfXVSdgc7Jxj",
  "key7": "5oghVXhdTwEdPdhCf3kqYqTvfmNXyHnvZrQpAB7pxN6W86K11btrzcK9fmg27UNfdwgwfqpDvEgmaXzJxDNRykuy",
  "key8": "x9EkxTcvHXLb2mr9vaDSojrYbtGmZFDfAn4JZVmecKE2aniEZ5pnphbM9XjpqBrcgGxEpTtmF4msmMUXkSgPfhy",
  "key9": "4nS6Ys2WbxQHtcrwWtxxeAJ3YWAnG7mkJnX1m5pw4tMj8y9W2WA9amLSgC5djxkoVcANvDWGNPRhSzXTLc8468SL",
  "key10": "3tLgazGvxcXSy8K7oYiUzgCjrGtn49LpTi9mRNs33cXUVQDQaLK8ecqg2NydYL6KmSFEqWay9NTjALhoxtr2QnhE",
  "key11": "3uaq96RuYwNsvzkkecv25ZQ8GCnk1AFLk8SXudri64E8ERND7z3YzNfyjbCiuiQbimvgFv5h2UJxfFFs1fXRhGUr",
  "key12": "2F1qMuveb7UeiqznuUtRMEPNh9pma7oaTCaVfHhEVeYAZeWuoAR4HCgVeZemDFqwXfC2HYEP9x9NBSivx3wWb7b1",
  "key13": "4Cduh52MfS1yxCtJyC6qeHvPvb73hDhYvAcvDWY9ZAspB97RZQJfDgcHPQP6es5Jj5QHtyxA99AYKwm2Fy4uMu4P",
  "key14": "2PuHnEuqqmTEDAP2xq3AgC9qCpqLMhZwwPYUBHJyQYtacq6PzXZazrZJLFAhb66AWiFAbC2xto1GrSATnYo8QjJf",
  "key15": "5WFZiidL5ERCgk4fWAfxQGpniQAvMR2iFDdzF3D3u64V9q2HAfuJq8T9U8bAsbutf5d87HT5ESxLoMKL3SfSmZ53",
  "key16": "3pW6hjk5JomosyqUAtJheVkuREev8n2sSL6CLL55yb1dSEDnRCBX699S7DGQoq7s1cxxf1P9DfEtSK9QtgWUoFbM",
  "key17": "2VytSXz6h5bkD4R6pLvQcDLSdjTEXNR5WaDYXFRmXbooYpd1a5rmfeufWhATCmd3D5Lhm7Ru9fAtKbmQmHDxbwLe",
  "key18": "5pE1SXBxkpeakbvNugXHerRJ7epnesNbkuCwgDDRUUTPQqTrXpkGjzDkqUwtCJPn1y5R1CgejbThnixTNcWG1NYE",
  "key19": "4oKHVaHbDv4J1meo4BE5roxyza76jXQyLXE5LQXnC5PcerkM2L1PGg9TrfVEiaNduSEh6KYXfKjJTHJvCJMJDSgK",
  "key20": "5GX7v9GAnbkdQiFprDcB19pHmN1Nrzv6bPxPgWZQDZQAdSgJbFUaDBaPF1Q4wEH2etXoXp1qzNj2WCxPfGiFrE5w",
  "key21": "5Ffrx5bnebLK8eu7hhvWhy8e6k26JyDoV5qnVrC2EKwhfith4t8hiMkPXwQtfYK313UEXV9kfgTyZ9X2G2n4xKUw",
  "key22": "zCNoTwcy4R2gLGTFZf4m2BmG1hz3NN6YoDaEjT6V8cyJLik2jCRn1VofguziHo3MMJv9ofN9cwdsvzxuXFxedZ1",
  "key23": "5hmSrjibwt5wUVELBr12Z8NSb43MiJ5T66rtmxLQXn8WrJrY9fZoApSzJPAApRbKAWBJT26m4SMFR94kHpErk7gK",
  "key24": "u9hKHkKXP2i5XrXFaGsCi2rSumpt8LtJKFyseVVWruFVXyZqx9NkabfpUgWXgKoiLmr3MytrZfHqGQPYhc1UdSC",
  "key25": "5fT8gTYBsB5Z2sy4ZdqEKJmpsRwZsZtYaAFxrkfe3S8RTUx7Svm7U1X6cGA95eog6JYXPdAYxEH26RfqjV1KPt8N"
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
