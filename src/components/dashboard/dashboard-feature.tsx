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
    "5bBVtYWYhSfhX2ZEndNGQmaDV6n4eDvbMRbetEUSVWspn5ANDtqyksvQuiaW5k9MeWMuZgdMGQgLm3raB5k83TWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j9rZ3swPwdEuSaG8jL52MwpurjzTNJDFwb1qd91CHyJ3rXBfhask98eu9xivyHbWrvms1dPRRwy2WWfQtJH6rMq",
  "key1": "598pznNvk2JtjNda8vfuqUZV4eiUaJr69R8EkZWnQtjpf48Kv8HJzB9qqx94Xvo2DyyD5xhXWKh246YmzfzwMqni",
  "key2": "4M31JLAzUNj5sEop9XZTZdpmjn5njEbKjUqeALR4F6Q6srVvNqVWRWZfDw4LhcHzo4SBzojnaRuYeT2ZvbLa89Ly",
  "key3": "45BNe1hcLNKY6SvNgQSPqRWr7jPpzC2Ew56iqEKHE8yD4JgstTf2SMCcHzJKH5uojpwEf3ZNCLfouF2Y2jS7tA9a",
  "key4": "358dJr6RYvuhU5rddCzbyELF6Tj861kJi8A664PNs6M7DnyEriXe1Co17kwiFfRSTtyaH3Zsje69nTJxSmKpJHTJ",
  "key5": "2C19n9zov2BDxrbdNpSYEvxcuuj6dtQKZLGmtJ3eHCpDGQUEKJWrs1HA46QJmAzJcoKr423ftzUTjWZVF81Kf82f",
  "key6": "225MxXbjmAHaTQ24yPJtY3gx1otQsiW91FRHnYuydDPBF8smmtSnmuMq4R9rHkkxbCaij7tWLViPhnKX1KTLVyvj",
  "key7": "2j8GLnSqTvEmJpsc4krTsH22nY48XCjMWbzS72XJXpvzpEHUkRi8CBxZXz39DCcv2PELFmnNCwb2qWAuiVU22qot",
  "key8": "2FEtuYRfSicbvZHh4h7xRB112wD6fFEbEphFGZCKzM71yY2XjBSCfvoWALxKhs6CeEzRmyMA7CTjG8e2hbRcfJdP",
  "key9": "4WGNpJ5So6Dfyuv8Po8EAS6xKv23z2hTz1PCFWNUKjrxdCUErB7ZM5haExsQKdT3NqNMqx9PUQ1FouAS21pLGqQL",
  "key10": "mq5fdEmpBVyehDUejKPmQjhKbWsZENRVb3TiXJModS8JNcQYWVkjvkEFAeGsoFcvtZtTpPtH6TzRteATMx39n2g",
  "key11": "5qYeEJJv3vMLo63jLbQDgY5p6BP6Wz9qzxnfAD9n6saaci4ury5UrvzjWvCPs2AEorVV77gHgbq26jRqwprQeHXy",
  "key12": "58Bqr4nT3y4ko4NkNFh4eUV3FgsozJn5Zt4CH88xoJy8Haqv8RNCCrwrZSLt8uSrvZp3LjYp6LTEUK8dxp272iXg",
  "key13": "5iKZecE9tR1RVL3Kzir5vmvpXtnR8j5mAEgt4HGW3dP8KmPu6TbQHZUcFqAcVajC6jQUj6v1Q8ngT7PbF32ZbrnV",
  "key14": "357hiWU7XEGaBTTH131ArNH8ym7okTMfZVtk6cM52mpUdhphhz6PdP4yPkJTWM6jAv9FSJmazvYr7UcZcNHGFWdA",
  "key15": "2whNn4dADu3hNgxsxiQ5HidevTPSbBJu4MxCFJbNAPrRSbkg5P6Qr7qeuKCxFCLsmcWzkkNrJw2m8kqwjDnfd5h3",
  "key16": "9YFBMFsxVciFJKsv772Ako75XqiijMtNdfLKuU53wq8K2aQXeScLZ5uyzuQLZgUpZn7CFrStip4DeFCwBwHq6gP",
  "key17": "57MYAvx54GKjFFpHWfv5dymNGPPghtdZ6ZBKQdspSVN7xN4Ku238FHYJzdYo8dK3YPXBBREBkmJWxCEc44gN1zjJ",
  "key18": "4m15sEqNWJ6M2ACKf1Pymc3SqDWngAg2cqb51BPF39McCiUh2ei21v1jFqsPr13TEcpQPrgC1Fwx3YMCYUcoZuJX",
  "key19": "fn8XkBpYQtrXQGCUN5pWxMyntYrQnAJjJKQe4gbiPUYZ1NwEhPU3SaD6mrrkYVFZ3QQvs36YasNpfPm2HU2cSBJ",
  "key20": "5QmEi4Nw26diA8av4GM4GLu3SvAW7F2jDMx54EDWHteDgJbVbdJtW3UwcpwMnGsR1puc9Bt7ds8sqEvJ1yWdBLQT",
  "key21": "5BxEDM7QJoKghsV8BYRTSPzCKtHhpN2mbjfeBhM4AhjB5XsHe3NAXWgq782hmUiMwi7ALyhFCwVXQvvB3f8nAdFz",
  "key22": "2p6qxfd7WCFLWizpY3NqXDY9NR6M9RvHwCWR2miNHFfqBfVgKP2Re6go16HKbRPuetv7TBz8FYhWMpSHRzSQ8uHT",
  "key23": "a8wQBF5hC6AfsNFtJH6U8pUd7Uo4qduym4rpq2TBy5RxhaZJ9CxwSymv7hEGrY7zd3BwC575FjJeVUYxKjWJWqV",
  "key24": "vMhFy9aPHcwLRSiEk75964E69pWEH9Y79JoS3EgFNJRngpZTptcuU7aEkrmY8cDa6Xrm7T6QqPkKip9LEYiDJAV",
  "key25": "4sKMpL9K9SkCR32jonw65z664sDVUSDPecCaSpkU77Hy6pzhJ2xYfyYMdpTtZ3Kg9oveuCwnrx7frnn9pUXrJHZF",
  "key26": "2SBb6CsaA2GjtNwppCPuUh4BMZnFfe8gUwUYBf1x5snkmGsSSpQA6SLqxtqkxKu2B8bzPjvmJjaiPYogAqWeEAMc",
  "key27": "Ts64GP675FqV3jvquPT6U1XaLz5awynpPF6o2Z8xruBgYY7AdAv61KSsi5YjicRfJz6Z8UpRYRDpKqLfu6mvVsX"
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
