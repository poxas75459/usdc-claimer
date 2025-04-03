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
    "2KuYX8CrfrSBnxZAxSNWqkLkPQoVb8nAdNaBYMcMy8pU6CpWNyicjJfqAGwEtrFsdw9qctnmq8yLe1Ejn6WtvqNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AzsZFc9MV4NWS4SsJ23vKqNoCtjN3zxHcYKUkExtGuAW4gVGLLiA89p4gbdwSdXqJmpFWEdn12oqx5zjuHrmAcU",
  "key1": "ZEtJpFPSHFUNph6x8maC5SYB69uqoPiAuHGLiayHrhexSt19i3UmWqZoVKx6Kny9Bjvrdzk4dNstzk5HSMxdxyM",
  "key2": "5oZoeejgWtWRcHCTKEYbtw394t1fwtjKRdw8Ziew5HcvZHdsKsYAqWyGR62aNS9iBm9JWb3E2wruuFbYJsYUG2Gs",
  "key3": "4yT4Q45zUxiSSZUXv5QwgXUxS3o16HwMkC4TK2YYRztdgVBw8TrPT53bwdgQtbmDG5H6yWVqa4B9fhjmAyaQuBJg",
  "key4": "4QpMZWoA24Ug7AEFYLtiqimr7uYq7VxWFiqCUedH59FRrvuibUJr1W7WVTv2kG1nVPBHWLLq7KCnb4MuhNLKvdMd",
  "key5": "JJozhEHwaWToLuvL6m7dnx743LYGqCxqmvisqApkFa1vuGi2SUeKKtuswJNADQ9z1ynB35XCfcgRmWA2tTFY78z",
  "key6": "2WC1VFe626x4x4EB9mthJkk1zYeStAWXjepcNSsaQVNges7NESunSPn8CC4MAAhqerJzvVGk3VSP72e2stGNzVS3",
  "key7": "q9THKCLPesexWWjjSsVkzu4NsTXSdxexcF8GNZpWnHdkNXTNWAJ6LDpRQzGVcYivG6sJa2LeUAbkzTV66vzEsMb",
  "key8": "3FHnj8wGgjb5GjRjGetaoxhNc4vrVf9TkjD9yiGEbmocuftJTA2K3EdixywVs9Ac8nPwA4bvwXEj7sg97gQMmmFx",
  "key9": "417zGVDkKCKnJGkr98w3RvJqommza92xPiHUZb1vwwyVWFLbA2Ko8oiPpVyNyXqP7G4itdnYQZzvyArfSuoNSvEU",
  "key10": "2KQCyYhMEYktZFEqFFLKXiy2rvQVg2HESW6SiRYqMkcFbJKBL5yeeZcZ3f6yNp3moj3BBBxyKRwDy7VKf7pGWRK5",
  "key11": "2fdfmC1fF2DqtfVaSvN88MGSUJ64vkzMf7SAGesdwKJZFhLnMNnXRqKE2HDEb4QMk4PuHN6WKYp8xELURwKVTW4z",
  "key12": "3izKkfKgt9ngBrPpqsXvSiSdYHxRceNPF8GtWKMnZWvT1Nikkaz3E7HBtb3Aj4pR9wP8RfuPZb1ZFbecoiN2Bbxz",
  "key13": "22sjBFQaxh3v5SKPo4Fk4Fp8fJXLxD7RTonAyfqD7D72ZF3ozzqEQpYst1ASeFMmz9RwoRdHLZUF2eKCisBxcFLo",
  "key14": "5vm7BvnqCE9EosRiHjZYVetTbfeJG9trGwt3JFjB8jk9YatkFUmdPRzCamqz4tPZtUhP61rkHy9kH1EqKdPqbb8G",
  "key15": "2dpqHEomPci2kCsRvQzEgM5N7QHFHDHFtEtWNos2SYM7A3vSDGC2YYci8Upba1T5LNb63DPBegtyzK4UQJAEMBEZ",
  "key16": "3YmXVtCuf1LeLH4DAoQpCqTgG1eufYDBJzspiAz2wUa49unHN5qMmCQqFyRaPaEiBZNmXWrWZUJ5b4FRJWvFThgN",
  "key17": "4t4aWvCJ77mC6L4Vx8wquR7N5pq9TdMarTfN4s7WWGUqm7zQXcEHvErrwL7QfxPxw7PdZzM9XwkTuc1B8dgxiPUP",
  "key18": "4yjABoCQc92ALFWjjRaRPJ7RB1C6qTn1fUwV2DncePpqURChd1YhEYXvzXji6FgdJbaVfzUFHipXsoyH8UYeU3uF",
  "key19": "sdZkBS9y8X4BSBwkA5YbYsswTwju3BhCtkuYbqLCP7CMJq2pfWRwD7v6tqRs4oyBiah5RQ8tc384HbHiQhqmXmw",
  "key20": "4AJ6uvjhhTMd7bnoz33D2nFopdrCw7pQEuVwfLiGimqmChtiNBPceeNkbcBABF9EGrMUXHELhP25sEikCwdGtY1c",
  "key21": "2swSpNyNxXcBfZ7dCdmqcSCGFNeEPtucFxKNA1mNBMHsfuo7SQG82uTyQxreYmnbUc9RgSkVToNUmKouaZ6fAqSG",
  "key22": "2or9CivYZikFsQt96FTJ1RpCM8ZJCqeiJjKBiqpXCpEpxpkRAmRRCnrnJrmJBSTqkuSMEgAihH9TwENy8ZofXmAt",
  "key23": "5aR4PkKh2WK9LhQLhPaBXumxmYvhK6LQRNBKeZqLMYdtJFRa75YQ7d7EQpVRzi2oC4hELjkixrFhVLPTRXDZgRq",
  "key24": "5HVjo7RiWMZZGxKnDoAQebobCRfHMd4KrKTGLo7pmEYi5RPUywAqemuA43BN86YSMqSCNoVmYEfA1TxpkR1jafSb",
  "key25": "3QpG5jap1MfHDnVBbX4H6VPgbmEZSYUGq42iTwkWqv449sDyAvXsQpCyx99KNtR3zjmf4B2k5sfJHKo6DR7wNJBg",
  "key26": "4mKqt14Gga8s3xhRsUcuRh1tL3RaaT3dkdqfiEo3VNV55TVcu5YQgZzigWLAZTnpkNH6AoFT7dKsmV3yujVjdZiD",
  "key27": "mWkVf3ZHrm7MtcdDEfoBLEiHtYNWGFFcKYpKqPBsYBf7Lfs8xByQSrHBjFJyXE1yzWtDJcht5LB5Uyponvk56Sb",
  "key28": "5CdT3BS1Ss4FERii1vzWhdrA5iM6VJ3SwbkkW5j1QWvmzf5yi4a2USyS6xHyEH95ZJqeFbqka1MurZrg73E6otkq",
  "key29": "5GAgdQSU7WKjKERjvewp9LF4w2qzSCgHs16g7ZEsThDb15WGKEU5j8GtwNmNWNuHyxm6vBNsKsLo6FYFPyrxqn86",
  "key30": "6BJcKgDbXkEaD1avQ4V5CEPro2zFGUR7vqMWLtYWwERo5Mtg4zJkS2HkYWwasBXpjNcXKcaSqfsnzWgZo7MPAxn",
  "key31": "2XshdqnxyUk38nDWkwpbHUScFvfdnf5k7hv6nugDtEb95hc7zhKpYFTRUrAUWMEoUgf4p7mJ9PWLFwN3twLJov3t",
  "key32": "31U9ctAm1ZpNueLwqAhsxArXDvDLJNz8KQ6hsQUiUMNQJGsmUH1gk1Z7Dp4qN43WkxQDmQ26Bjy5xu2hroo7YSt2",
  "key33": "5JPRNXuAxqwCqCAgFbxKJdkGXqKTTvs2ZSq6V12LWwyXfpwaoF5FH2cjCL6cSmh6FzgkBTxAM2chPgzDjmDFpHeX",
  "key34": "3LDHTFTSvBnD1w8bP9bRdmdg2PBDq28Z1FCQTonXSmzUC9uCN1hgHSUybTSFiJobggsNztt1LH3ctc16svqGrSv8",
  "key35": "4G7wntyYNZjKPKc4xGD9eB6uKAhw261ubN8FVQedYvu5QSpZJQE4tR9jReJofW6rzTE4DBhnPv4eu5G8mrPjYmXD"
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
