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
    "3wFszRrnQHog3jktrgR5xv4cVgWyDST2dAR4DssAHsoY9GmjyHrLPEZfiRdZxbLKK4kjzTP4DT7cT2J2J2mpjKbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RxDqWc6WLmbdpHJAtmDendQpUXnDaVubfDWHeMCQfJRYSFUAuBydThmPCHGQuxeCKNGXWBFoBSv9x86it1zK4rW",
  "key1": "5WJGjKAdFpQKRjxJ3uZdiky98wdXPC9vwkgStA1qZ5xfpTs8z3PLt4ogajrYvurRwAAuEGRV8AnvsndEQAe73B5o",
  "key2": "4YgZyE7evRxibf77FuDxToHJtGeC6dby6hpzwAigyufeTHqo6CBJmuctyEwos5kuQ6X7ahnKYwM56BrsFEWTKJzY",
  "key3": "62h3YBF1emzzNt9yRxRs6haNRG1SCHVwXxkmDQahb6eXV5eGrV3z54i9kNXU14cXeEXyGjQPiQ8MMWPTAUDnAkwg",
  "key4": "5mvCCZURGt5TGQB1Qv45TUGSXXK95MFWfWhf34JKomHytevbHPUZitattioZrUFoMrhaeehCrgiKPJujibDQaRMA",
  "key5": "2NkaPjEJQ1jhLCLBmmrhwwPWJCPCNm7nNrx9GXp6Dm6JJgiF732XcDRawk9vtfjYN1iTg7Jkk1K9xf5GdvYEHMPH",
  "key6": "2yujSSHyR9iLatCFvwqatNTZsQ6jqEdKy8wr2efatvRn2nj51ve6zWf1FBxsrY4ky2MeY12VMjvDpJBn7MTm9Zia",
  "key7": "3NRX6eRcKPis72qTThAMY6Enc4oz6UWomr263vjbwXYoMv5Z73BSK4bMUbWR9mEac3NVMZBewAQfVJBc1fjiiSfQ",
  "key8": "665TgkdxMYRD9R34ME7GQaAqiYeY6nyf5wby4DGnntas4Nxj2wgpf4WPBueuCvTTWNiKAtooW2oUQU9b2vKQJ2zY",
  "key9": "3R1RyvAUUqoqiQyxwAbK2j8xZYdEaEgD6Dn3GiJCbmv7dUPRBYhaugkYDKpnNc2qYc9AUmePnRKemrn2yUL9oyxf",
  "key10": "5MH8JWsUgHvYyGqkSscwDtMEW4an49aUC6gByY9xAnaHLYiMdDNjc1TsshDe7xnag738S75TmTSBwT7i4AhSGyLQ",
  "key11": "67r88MkMNtShANpJztpGFUQU9vuKqsKYFY9JSAcKZQAH7XpK7p8F1GhPkbvaMnRrBMs8GyiJBUBj2wqN8U9LiGpy",
  "key12": "xSnNdM11rwKa1QQjEEhWvn6v4Lu6Nn995Cs8ghsez2NPGuwQ6GXoNwCPpCFHNfgdoiV4AaEX6RxXSoeK8AbJwJS",
  "key13": "4Yyn4JMPsz7B9LEH8zvuyxeVvWy3Uv1rf2QCqXd5tZzH1AzHpLzLdKF8RWhGZrG1R3f7npJqGztY6ioQeDJyy5FC",
  "key14": "2nSvA1Hf6Wq3tamqudYiawJXgfQNYbkJzpV376jzTHdwqhuYKkgHSFJ7ivFrhkPGiF5c81NBQpVZFTCf4wDrudwM",
  "key15": "3svoh49aXPR2xzZsB7xLeL1TnhZp2RAhJndtpbk2TH9QvotQ7bsNvdR5ABtK4JmZV25ZYjp7BkarXQFpJ2h39FkD",
  "key16": "3uxh4SGy933Zpns2PVr2WCPz9q8dRHbRVVfknBoYKuZgcQCSqhgC9sxwuLmvXsxZbExug8MqpYncVshbiSYqp8F4",
  "key17": "Dn7KEMeC6ZApkJtT1XXxK5xq1Y3SRB5g2KBWoNnG8YqdUGrbT68kPySsDPZGGFF1P8rpy41jWxFwLEKWruZQ42e",
  "key18": "5oRXxiCgYacmYPeK2eDhrYrvpi5mtyZBvuRc552guvjSct6QVa9e8vmQAVuUZXQDWn7kdDHVKBtEfLVkvxSgc8aE",
  "key19": "2DL2vzHy6t1vp5j64Ac7iFct4ahMAzCAaVWDz8Fqjxv1rtAtTTTqUtPFu152KinzzqRcZjB6cXZGGMSeK8eGTXZw",
  "key20": "4P9dYSX3ig9bSCjBQe7qjK37EjWQEqyURfw9nDJdhVLhyH3U6XPo1dBSBtv31FWgPtBXEzAsv9DM8DPjyG9FrshG",
  "key21": "3S7PYjatzNRxVSrw3WjheEpEGyDbYGLsBnJYCcAjyXUU8zyG4soW84SQxzwtXUm1RAnARXuPqW6pdw7b7grmQchH",
  "key22": "4Na8rta1LbcDPqirf5mJWRayGHrkGDjB1WqDdVLcPxQMCpC9wP1YYcMriVoX47ryXQjd9Ati96RKH5yQMfjAZNSg",
  "key23": "yFERTrXTtfZALQaBDZdqDJsJZTufsr5cAqFN8Ykg95cQuQgX14zCiAVJPRXcqiuvfdhZFffnFBrwF4M6555TBUU",
  "key24": "2d6GRXveFCp2ZCdd4mwG7929LVdNpbGW5DeZDBP1ARZh3sEqcbiVSvpHV5Bg58y8aXuFmfdnXvb96FyvX15qAhDt",
  "key25": "5X8sywWz9VFw3UQ9uviCfZrw4af2P2U8Y2urM8AHuM1kVKHk7XnCmBAt7eEXSrWqEU9P14T3UbovgiwZNit3118D",
  "key26": "5VaPbx2JiXx7qC243fUwx5vCrDMmhHLSsQWVmQ7xTebysi7fmTz5BDdh7pgKDmW4qYWYy4dq5d4hY9RD36d6SUbE",
  "key27": "UFPxDTTt6VzU6AnXugiejr6SEuY8YknXXcgpQU6TuSMLKxJ4JRfNhLLLgNNseq72dAqKxUvAMqxauhBNiA8Ajwx",
  "key28": "4ws23V4T1CTbQ77eWy3JNnbfALw9yASzJcs3WAYSDPVYiaZpQTia6Me8rQAiAQgjYQU57VYMyC6z7wcAcjRZHFxD",
  "key29": "37U6MupfYPCmzfyv8zrokgKbevsqo1VaQxNoYmZ86rQ44Jae6FZYmW4aKv2NXbmGsWoQdxNeYJX6jh9wJaTmB4UQ",
  "key30": "5cYqXm92ffEggGwcYBYeJDBa81eVPig5MHA2d52CEMd8Phd3E6j4f3eSYQzq2nNuYoxHLoYYm6Dvzc1UKc26Z2xw",
  "key31": "5gzDZfm7ePs91sw4zgTmSSoGut2aQB8uzVNG2wVzZDgPXM7c8k74Cz35WbRCF6xHqxYfCVsQpJ2hUa51RhfTR12X",
  "key32": "2XWeTn1zj3jDV2NF67mUshCkgEVWzLzv1gFzvV3kQachBbCRUVFSsdtJdXNeFHYfeg6JC8RxRUKkznUELSu9GRTE",
  "key33": "35LR9tJk79YitqxpBr42rRMEPrLeQ1oTyUrBTGL9NETm7AHQZ3ipTeAfBDjGbwpiufKAGsA1W7j1EJy3EwsvWLbG",
  "key34": "48vwPAzbgn9GviVToz3Vs968Lrcwidfeauq8XZYLHhPVVxMLLuhJ3x86heKM615cq7EaAH7KAPDF818FXbXoNV77",
  "key35": "xqUsft2PPmoAcKiaYLQRFBtn49uCCsGNYxUt7E3KuaeqgyUh1QpcF3kCNx38FDsTag127Gt67YoSM5w2zWW5Pzv",
  "key36": "2RDrjgEGLG7r1WX5nBVnWthtW6yHbFh28kFVrAGYRrfaPta11swpSb5WVtD3L1DqEh7Wm4aCSBTHcrfLPsQNyEum",
  "key37": "2wxJ5Nqmwgxv7vfLjSo3pHEkWgbyCDVGj9AD3Qj4jKB2LmzHkquDPgF8g3LtFB9MAzS4xfxi15xohkrpFpqvdntc",
  "key38": "4eejfQtxDn7R2cnpSTXCCh6LkvfsmT43DX8FiEFA73qYrKw4zv2XYc88Kuj8Dpd6YAbQm4WeL4HBVffjudtWNvPs",
  "key39": "rEoVCucJxYNERZsmqhSo7FkPDTqgkFBJRDz1ndGMyFGGMj7WutEsdRUVjVviti5TfK3rHrz3GQqhvfFzZanKBGc",
  "key40": "3UKNZeNojxztyjjfUc749tvv2aacDJCBpEDSS998bi3ZY8fF73EDTjxMUGLEE65Gzd66nLpBKXZ91F8U9Et5rB1",
  "key41": "5yosVSAM4kY9xekabbWq752bfZRHFLPQbhk27Ter2KZHN2rxzeqXA9hT9p6qBWBeTgcrm2X3MCMoE2pArv3rgLFe",
  "key42": "dbUNqRLN5DUBjQqbPXJjpopStis5w5FU1Uk2S92gAw8du6P4YcvgfwxCCmiZYDrWooH21DayZRWmEYPx6NLR6QE",
  "key43": "39jxjPnBQHMwQeL1FRvjMkmUrn8wdxWaPushT3m8Rd6u2nGzGsgU1vBxWNG5wTqZy4ER8qiw6fXU7Pqo8fybEWSy",
  "key44": "2DQpGrd6cmZTWtpDhKNsQFGVRBYsHseUUtiwY1PVTT7H7LFv6YFSKsXCkv69jRS13gTbexGi2u3J7bXpMvp82fbT",
  "key45": "2sLFKXAYbbK3Qdt6ciPer66AYrNa4Xp6rD2j6JGtnLPWTh9mdd2Vhi5KgzFKgWc29HPx4rSeq9EgpwrmFVjkn4PF"
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
