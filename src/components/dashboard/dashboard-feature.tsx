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
    "21i7MnLGiQQR4xuC7LVpfaDJwsDAp4HLqLdZ2MkGyjmdah7Pgnaq59NjgM4sdoudVf8Lh6f5vR464PJHrrJeRxqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QHPZEEzTtVrFUKwB6DbFB6D6um3S8pKU3ng4wgbfhTjjpS27mq8YHRmRdVQqoB94QvGcJyMKtaWX3yUQrECEcdn",
  "key1": "hKCp8rMf4bjssZ8RzgwG7nBz1CDEFr2VdfePgJHWhFT4HQdMjKeh9ejzq8hJK1qJXyHdx5XtEFSuGrrF6KiERrS",
  "key2": "PAH7U7MqfaFkEEjGDptE3yMLgknpCETLhLgPw5jm5oyv8cwcVAFn3qQUV92rwgTQeScbNryJRoXrzCXHpautUBm",
  "key3": "2RFt5g8gv8PSXzQaDTneLDcaSiB5mj1YXh1xvBHxMX3khoKQ6ECyxUySZT8nUCcKDiNLWynrak5yj8EWwMzToSGu",
  "key4": "53RV3LThifmw3ke24Z4KKsxF3TzXjiF8aG4pwNQcuUSE2Pn4Cr9nBQz61So1KVwjMtGfeYFymiVj4KsizQNjKRqH",
  "key5": "2K3cnXrc2jd3vCtcUY1yJNy7NS8Q4qBVfadWGELski6Lmye1LeHMXjDXrnMs8oyHdfH2Hg3kpRr5F1McrLEP8QNa",
  "key6": "5Z3c5yMD6bdjjLkMCk7Emp1ry11WzEGFc6a4fwtjs8wuPHiMPUvfwU5CaqwreUY7NoNS7APD79HNhpT7FUe4KrpR",
  "key7": "4mkjmJp3RRth4cfSxDmXLvcKecZPDHU8UyScRTmeTxuZqb7jiizu26UbrwYSUUhjipd5zdoEJ8SSLF9RG6pRwZgy",
  "key8": "2EiN9s5TTE1QCZhhYLcxEUbriHPSor6RWcT5zCtncEwhaudiZuWj6Mf4wXq2dFE1zc8ciZN9t3r7FEUGKxhkFyqW",
  "key9": "iDoCjV8MqD7dkh1aLBYF8n2xoV5UjC1pkk2xAsfXCwmHpCWYADf4eq4a86NoizK3KF9Pteazim7SH5fpurMmsgh",
  "key10": "4S3SDMruenjTzvHwqrXtGzJ34PLvqcCoPds7zDeJWzv9J63oKT846z7JgCvuvrUnp3vNn3aiwQBn5K1LmdVgH6uX",
  "key11": "3i2c8zoJmEGobX5ewEdNgBDPPFUyRnvGjvRwjgHoU6sKRGXC2Kj3kygJt4PQjtqvGPmW7TiaU9WNQ349SJrwRtq5",
  "key12": "6g3qFajJk2mWtJ5K5eujEpJwP5g1NvMXqjLFj6wsVPJ9TPm3s2ogdhBy4sAQG5EGdEhbf5tF2W2wT6cbR3fr2sP",
  "key13": "F3EgWb7mvyZM7KpTqZQgAARcYMdwZw6GidPzr2m5XaqVDC7a9fc4a3eRBvEoniL9adTc2q5ioLgJv4TocVtVVFR",
  "key14": "2QdRMWPE926grteGagkvsWF6aV5QPQYKZqVqU4t1RpMyDHm97M15uSUt2mVFZzqvS6LUAiLLB6rD4hrMEtZCpnzQ",
  "key15": "4MNCggqzzYNZPcDbZtfHz6JWGQBbdFf9Hp8o2VMpWjYxBF2RMkVga3XcMZ8CDb9DR7FK3EGpY6GiRd2wxjD9b6Pv",
  "key16": "bVsvwLQJhjdUSqkXiU98Epq75TaHpMhqZSVKtkThg56YWoYAPMdnRswiTEHc8WWgNQq25BZndW2qoffZ6Nj9L4w",
  "key17": "22sjKcMgPsg52TzQVFCAQbGEcpr7psyGkd2Ln9oUV2CUNFUp5CFnxmDgQBoZKTe3VNLiR23VkMJmgncDnDQKbP2L",
  "key18": "5chwYdcPhXW8sqBwDVMkXxX9H9D9YXwdkEj9VtH262QfMNtQH5ckYZb3xh1vcoW663BuS7DoDXyacjjNmkBa3BwA",
  "key19": "2koZawfWUc1EnvwrdJTn8J5arP65tS81Ky9k36VjXAUmJFD9TuACK1AjTuzQtxNubLk4mpL2ygyqgtzH2VPWJJy9",
  "key20": "h2KZKN8cUCqfVgU4GHDFMcWpELKBXxH6CKvhSfMkPfQBwFhLVYkXSKR21Gi239BWzSiygQ1J5zA1Wky7QuURCDK",
  "key21": "3DT5hN4kzjFAhTYohNPqbYKk2AMw5ih4eDKfreTp5SUQBLpmhUWveRU4sWwUuvoqMqbwqUNzGMCNej5gRz9QE4Wc",
  "key22": "67crc1gJjodyXawoVDsZKVLVMFRAkX4JEBiHrjnyXaSWKHJmnJ6pZ9yqgsj8fZdR4gzWdWrn25DhcRBN7yxEmEMH",
  "key23": "4WhH7rJcYxMXr3LkqZPnhQnjqt7Rdm3Ad992Z6EYzhbLMP17wrLrZKHzSvfTmj9d3dYa7Sf45UCyj2PBr8vNzbVw",
  "key24": "4vR3c6cKkSy8MCzZ9HLqouDGcejqpcjoMBYTbpdyePAMhQt9LSouE3u6rvYhnafow8HLPcWqXD4QUiQfuYqWecjv",
  "key25": "29yARmQPzyDt9u8tihP1KgRdHRb5Fc4DdfMouMSNzB1VJ8s1HRzcCa7R79DzFxCvTVoS9PeshHCzeRkNR3MeMgYc"
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
