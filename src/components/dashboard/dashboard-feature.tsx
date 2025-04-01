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
    "pWJnqbfCUxhWRjeBarNz2MSLsJKo65aWBjg5ngX8nLcj7rQQYi56iKXYFUCWDS8nfNhsFQM7NDe8LSCCQMqhpxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KSMaZxRFGoNus12Fzhx4HheZfPW71PysrMJh6EVG5bJPF6ofXDEiqwiLCJxrJfuDQUPahMY3R4636cYeH9tSZKU",
  "key1": "4CR8qdAsq7vXfSP7oEEQNXZM2kxFqmqZFmoQw3ppx8X7SEiGbStJUq1C5178ttTxXc9Z2ZY7EpdfXU919fZnmX6M",
  "key2": "2hcB4yGNgY5aZ4E5BRTA1aQW41AtCdqmf2o9NMSUXfBDKKtLeU7dEMcxxZXSDyE56GfcCyX1RM9v16kYWRGWQuB6",
  "key3": "7RZ4RJimajiKqyweGgEHq9ZKkdnnJM6eK2sd3gZ9KHorvuAboEkDDmcr2FvVbjDdbrdZPgdUNZsB32ATGtVPnXB",
  "key4": "362hiDCfkB4GS3tGjbZ84JFU6ziMzEtEpp6hWyM59uNsgf4PbniPsnac78wKgoE5iCGdnDYy1yW61iHGDSvPkHa7",
  "key5": "3S3eD42CRfCta4vEkYd4oNe17MsJkF6PhGAAetyeKkCfYiDAAfgey6VcY5Z9JS1UBEZjRbt4AFJ5fX5Ws1zRGjGY",
  "key6": "2VkzBQrCLap8JxZzagjvH2m93U7vqQCxAapuZkQUFA63VwsqpcAGPV7TYUbM65CXp15gMajuCmepvjRnYdU4C3rb",
  "key7": "2YixuWJ95qSpfutmFfk5V62hZvzhcUWZ7hvUdg2RiuwEmBP3GKTSUkdwskqd23TSE3KATb6RTvCVQYxArKfNp5pS",
  "key8": "23mnLNNnY8SjtoUam76ng5gwVzFyFKXiEUy21tyMM3op4hLzfQCBDixQvCwJqhiKZCjEqv7xrZoe6X6R6efnMNZv",
  "key9": "2FwQwRaCEieucnXgUagpGQcdZTJkfFpKxDkuZxrdiskXgjGsJQJ15V9R2QEQz9eHncrqbRM8kdq3HjQMa8YkRLQm",
  "key10": "3pmw2LAKi5bDjaADCjyAfcqG9KY85jnLyCdTWpEy8fPRXQZVSDhU15DMzc8T5TBa42RSGEBJ1SoJg5Awsxfc1jAJ",
  "key11": "62WZ3h7pjw5o7hpZ2z26Tg38f7cYKTCucyjt4C5sDymDEDEuNkmqYWPC57fcR6yvjtcLbC3J8VYfBUJ2fF31J1zQ",
  "key12": "2JUnBYUWM8P5ywCmqDPtKC97k1X63Qnth5yAEVm8M7QS1cEpC3Si3UDWB1tSJT9o9TErRhy9xmQrXyEYez8deETa",
  "key13": "4Ru87iBsvJ1P4zQKfBVQcnPQUwbWUMv5qVFAPmkvzCkGMKjk9VWrKcBiEnM2nqwyDny2S1wvYfX8pRs3y1mna5Ax",
  "key14": "5K6yfH8JKy5WpCWg9JM7VkymPwcRRdP2qUXf3AFT9i16vYviSBB7Denjyszd99W4b16gsUSNLp5fHuU69vmKbFxF",
  "key15": "55H23JpxhzbUk2c6ofXmZsMDodndfPKbmFr6QXZXPJuCHrQC22AZQAVtA1RYtw3TPf9cYoZyfq8639vrnEJf5r1J",
  "key16": "2rVCTPQGpNRtTFvmpHWYCXwFwzri8e2C5pQ3bPwXWWPU66J2HQWK2RHpgQVd2iH3kwg5B1j93h8Zs3g3rEBBPEQS",
  "key17": "4JMoF1ihV9s4PDvMYicmjdT18t6BGHnDziJYJy7uRSUp4kyNeGzgNBTEdbJ5bnheThF33ppkmUbx9rK7csqyVsSZ",
  "key18": "4PQCUMTkqMU2tTfyuwVWPKq2kCxcdTveEH6hVz695bYBEUfCLJxr42spVSxZaWUqMQdoaP95PhUeukg6Rq9eKXsD",
  "key19": "D8UMuZSuy21DmgiRMVvrpgS1G7YEr4CT2wUQNN5cdRKy7F2Da97WcWPj3HfKhtY44m71kC3cmzq3upYfyUjThfR",
  "key20": "4v7W36qgTCCykcG1h27zD3yCgVMBJS3sQcHQJwL7FGd2Nq9eZVvoJt2frarYbxrph77r5hsAWsieunvMRzy4sTJR",
  "key21": "4Yc9uh2zqVbwes8yPYuiP9WBcZiVg8YvYxYr4oo72n8iZ3sHphggAQDYkQFwmEVH397J5Mk7X5wxyTeJU6XZBvJU",
  "key22": "3yCnbt2Xwhj5KSkS8oaVXpY5XZuJnbWZwYv1UBratHKooVzDkDYnfar3RpSGee6CYbLMyi6s4UGsbWVW8dxvDHWx",
  "key23": "3UERApYZmCcEgfeYxqZkrZkWcFCQAfSjDqBb9MGnAHo1DFHiyg5UqtYJBJbvr7JqWr58vWtdYAZUvPJ25buytzhu",
  "key24": "2ZnrpdfhbhdqiTcfPJbwajDpjA5Ajo4ZaQaje2kDoZuKDiZS1YppPqpKfcBhSkt5SSTk8Rkqv34HZ6QGykJcbD7z",
  "key25": "3Fz29Q1aMoU8LMiZcrSd5fH4nmkEMh6Nj5e1Dgm3Rpm6ipuHN5SuU5WxrmoX7QiecCq6vJ1JXSJxQ6Z12T29tfyi",
  "key26": "3nVq1i7YyhLXrdPNVhsSTHuTcJFVEUCjj3vfqpydPDHnkUKrozNuDZN35K48sfxLcHSXziYPseX6YXFQXUkQ5STf",
  "key27": "5upTSiFokc8XhnBxUj5rZoHWccrsaKWdtncHiv2k5KkdYMFPHFE5wefS3PvnH8EZsgVY3BoKSvAuFZJexUDyPKph",
  "key28": "3rivL9vFwYh3kddYghfodrGjtBL79YXTfXr14KBeNCYmXdirm6SCyPzY77pJJ7zmNxRxVRueU1N9C63xHJfTndnS",
  "key29": "2GMMwLTUQheUoFeV9R8x9xXKBGrvAzA5B4XzQRZ4qrMHfPb1N7aUMp5h9JcEnJ6CGGxw4U6TDvUjqosq9cEJ5G4D"
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
