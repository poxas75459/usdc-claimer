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
    "25HehfPo4RY6u1tN391rw1yNQc4mQYH8y1QVsUfnn8E9SrtB7Jaj8u2ecdYrMVFZ3L6KVnQqUoWeA5DM64dgL4im"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iG2yS4o8J7EpeQPKTwgBc7LGg4s5Nj9w4oaM7W2v22nzVMajFsrmKJYrpnQ2P1o6BGaj7y13URJmhyxL71fa8SP",
  "key1": "5jC9YXEFHf9ypMvUgAABUXRuc4GHpcbLbd83gw9dGA7H7wKJSD9Jr6qeMLVHBjcD8yD1zDP1YEg7h8FFt5zJDper",
  "key2": "5tXTAcunkV34c17NmzuD5TPt976NMdXjXSeF2bygupfDoaY6UeUzF6yCaSq2reH2k456CNRF8oSKU3mzFJSMehbY",
  "key3": "5GiAr2jxeQUigoVWtyFZXXGT4zDpLtqgTjakDViUGLETLwrGvixhqiUxnYoyh5dQHdgrHCTePHmABk9GAKhnrh5Y",
  "key4": "N2xRXSNK692JPBdhFjJMFXsJQEbvJVQPrvVi5SSK1JmoLq7UPq2PrcABW3hrTU5pSpoFJob6iirpPZjCDgrzBH7",
  "key5": "46spXYcTPuUVJGfw9X7u2a2phGzu6xXVPdkbjrEHXtVMKwL3Pm3P4RPiV8U2QmGHC1r5go3fieGLmRKqRHTmWa9B",
  "key6": "5RY7Qep2rEZMgevPGdfRrTzY6CiWsseBNtpNoyTskYDYbRtZqTvYBcnbcghmqBH7cv4ZsDhu7PRDyVE8Rr9h8RTY",
  "key7": "AWihey2Q1WaSMxAkGZSr1ZQUVYuEQNe8fWdKnLDPsj4fRajChhj1Xhm38oqCB3JdvD3Qbv2CGhHPnWxqBVyR1WU",
  "key8": "H2W67DNJBrPB8A6wBnbjLquGXed2gUyF2bhqZQsYsmkhe3JNnpZNRHXwAvDvjgSgKiMuWPxMHy9HLsJqPrkaDkF",
  "key9": "Bt9PPE3mGAAfr6pv8kLEsuqWNh1jhzTXSzQdXY6Xwc42hdoGBcCtEBfv6kFoBH6TVEmx7AysURFYNSKjvwAMErV",
  "key10": "3eVer4WEasFtEdoPd7Rmih5fqixQV81svYtxqY2yhP3B6HSeHoDRMjAmytAbDm8upQeti533z7xcmBXDK57LnhXo",
  "key11": "5zMvfugKuotSioX9bAkNQtRbP2JtHCtqsuHytHnQ3hXc8DvzgLZpk2bV6oEEeehCSottrpf1EKNNr3knuADR7iSi",
  "key12": "x9nTBKk8uqm5tqtdJVT8hk69Zk3jMiQmjTpDrTcUWoSSDoZr8dGMA6bGbzD5W9pk7mWaq1hRk4X3X45rtKGKUa5",
  "key13": "5YGdALiZKQs3S246DZYDeMLKFFsyTs6pXkCgcFpUfvR1hWQ3BLiwZTayrj9ZySXJNzt4Cge3yErkky3xxy32qiPH",
  "key14": "66MCVHAYpCaye1YZpBU3vAAAHhQz8bpcZjhozXH2BbzuxgzkRXJSX74X23GYY7wuB3t9C2YFNbMXGpoWKvZAPb2N",
  "key15": "437YhGm9ofX8cGXwmJnKTdp3afgetsFqJjYV3Y5GjvfttxsWE95HASRDKSHvb2Wif52EDHrpjoaszA4CbXnyB18n",
  "key16": "qyad2DBKxePB3in6w5oQH5Wzq3G825jR8ik2bxzMD9mqgrcUwXXHHK8Bzd5wwmCDpdSeT4kvuzzBTHkoKqaHeHS",
  "key17": "2RYotMwLjqRjaGDbER6er5kqJLdRgg2Vq9FeNj7X9kjzrGZRjUP2LVWkcmfKZjfPuh6sjg8n3dsKFRjM1Ws6AEEg",
  "key18": "EBAiJmuNkk2RxC8WwgZy6m7kuAXe1oUBSbvL3j5Tm6V62vYxFvcNNqTS5zbp9uhC3Rfx5L1YSbhG33Ztmd1GM7e",
  "key19": "5KojrFtafVE9qjyUBCCv3zNNbRQJGZoYi2hLrCG9Dw9TX11QBpYi4Y7p39CMZE9aigkQAnuCHVEsm67qn4AWKZve",
  "key20": "3zus31CgtFNxcTNAXqU9MURHKk7tZ3acFRjZKYutN1wAE4CKTLGXshyexxV6pckTxoPB3dz1HvWLWZDi3siik1g1",
  "key21": "57S5m8nvynG6FbY65uBKmPnpAJA82mngxq3bvCQWR2JWhP5zDN3aZqqGkHpg5dTpHDL8z2r14f8ZhhDgeUm8ZBEF",
  "key22": "5QcnvYNZbW5Mct6VsVNn2DBUxtcfXsm6GiB47kzuEMVegSaf9iAwV3Lz6Qn3GbX3FU3VWYXn6dq33n6aXr5E8QF7",
  "key23": "67WqwDo1M18xnN2m7wksPyQ5PtvLiGtaYkJbTsQC4FyYGRDVQgPH2Nza1BjNL2UTpouwoSyE8a29ZHSVDqJzBpRF",
  "key24": "358KHMb6N2uJZ6srFeREJjSQZtRJv6UUm1ZLxSfwTLinKXNXYnYB9rNjCfCMJxE7Gr2vXQSj7sn659Hf833AFfe2",
  "key25": "43fT4EmzF7G5DPtc8AArvLYFjzbAd1CE9vz2ziasC1ndnAacABTPpCsTBSFJno6vsziCpJhPQsUiTfcEGj49VtWh",
  "key26": "23BnSjKyXbWsUDYGpyaigKdZFc5J5cZEb168D7mgkFqPixekqMpURRwkmWJRfWsBVWjgD88SvQnZcyLSCWwBPiPP",
  "key27": "3rM3YiiQiwGt6ECZNAm5ZBmkYxnwai4qBv2EUSLUtxr1iKzoepDrJfkaxX1DQd2CdQQ39tbXJwWSBEFQqNUv5Qtp",
  "key28": "5rHSc2JbfJBCJkTVisADfqv4jum7f6Tbsohz8NGwQwNCLCLUNpAWdrmHGNFdi7B8dck4qvH9tL6jQeRTVBqw9eeE",
  "key29": "4WvbMwk8N9rc11hB7W4BKi7DUetpTgKCN9PnrRH6BWhAizj1YfPRyYkm1gmS5kF3QWLxoCQzRVDpcQ6tetQfdgmJ",
  "key30": "521KPhyPgBAWdskryYikbLKCrtjybcqYRqvD81qnZeurnUiWhNPfarMLWkV7r7u3BxyvUtAS18ixfWTkuH1jPeVP",
  "key31": "FFF43MkzsoEVRy183WqTzUqqbpD9QBkuiViBaqp2mrL75XnjMURcY64zJmfg1Csv9BUrwZz75g1HLcfJEjNPyvW",
  "key32": "3PbeEAVQPzMiRCfr97MYNDQzsmHWEueVoCNXhBVUbYXgJhhgq6pYLZjECfqR6Q18XR1JYtGWpQjaTvx4GW9yGe8V",
  "key33": "4EXYFCME9Vdpyh9Nqd4moAiT8X9AApqq7Puc2oFdwU79QxXqhnC6UCNy6FvKX7cV2HRB8txHbpYJFGHPGwKR7i8D",
  "key34": "3XBRib81kuWFCjsEhHUTXUjFSmWHLfcv4MfevrCiXpcBssZpWtSrid8No9T3yJ7GgcSaLYK2CvuveSjNFKcKHWGA",
  "key35": "4gDHfALdXN67waAfqjNnYoE1MhgVL764sUEHGGvajmnzyue3zeshUSeYHitMgZDyUEz9t6dumnZ46YACXFL9swXM",
  "key36": "4vq34sRDPJxvbURrXotAVuaG7r3fk77f5PFApSQHhufgV53fQgygPnEZa5HSfn1RTenWh2X8Z9LhSYp3SpEnAqTw"
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
