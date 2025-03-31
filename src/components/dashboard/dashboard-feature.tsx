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
    "25mQsTWY9uYUQuSb55qVfxAoSECrQnmgGzSu6Brg14Zeb3LugCN5KSfwBZqe5An5JTXi1GingVkb3HkDfVrwdofw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jd3q4Wp2pE26GDt1Ae6pE3pudDH6K8m39ZaHyhWwa8C5tzggYJ5it6x2yNeTkGnbrMaXb3xsxWgBeTPJ7zMUrqD",
  "key1": "dT9JATB9yWEvixTBbXwSHXqE1Ar76tCDLhAwsDUngMPQmFnMFWj1UGpHhR7fFwueRKG9hsdHVVEzw1SWZkuUbHR",
  "key2": "QkquNAZc9Uz257h8oC1sFAPjcoHEKMoQW9hBSifj5vaUNBh9dJzACZhfbv1eEx91jATbCrwVzLsbReFg5uon4ua",
  "key3": "FiNikVnUdU2Sz9z5zTfgqsszJczcrUZ8DEY49x9FWkYsi6y8u9pdAkJWaupUKojVB9nzPM4gcCi4wXMjMEUk1fh",
  "key4": "2Xo1eduEhse5rrpZWwBi1fPz28ReUVgHUsHLFEr7zNwpwGcQ4wYtT1JFa72YvDd1wJksTb8uP29B2VqjVtqnh8xM",
  "key5": "5ApeuX6bzGNsrqpDJYs326bw4piLKdfVMrnRFWzVE7jz7ZAHZdkJMUDQhaGyBLYBHxJ5GbizwPMKzvQpEY8LNU3",
  "key6": "28JvRetKcJW1G4LEWLQrXkjLCACtdjk7UiyLixbgqyg5xgJf79vfxuQM5Da8ULBZxNLG6z6tu8PAo6vti6v2cb2E",
  "key7": "hnzbPoSE5TbcnnDeEnoxFRtG8NsFQYGkEvzwDiZ6McJVHZx9A2CZB5xyqExhsxMwnMDMXQKdAYRVG2yErS44J3C",
  "key8": "51cmMVs6YXmsvxMcyU5fWiWknxNLoaGCctfhKpvrDdkJr1GL1qoyCBPCN1RapGXoFUiiL7FaGtDUMWkHHvjjdD7H",
  "key9": "51CNG5pCPAXXWwAMruQPp7GaRCq1jHj5MRWGEoU4y2tAKhzRc7kK6q1RzcZYgMdH5Q9iAY9N6C4oZ4F2nknG2y15",
  "key10": "bLvapYLb65fq6GL2uUKPidFkb7mfeDmxQeJnar4EKgBZRphLpkSnJ4zh1xWpHnrFQAEWuopVpPjFLXLCaufjgqw",
  "key11": "4s5NnehKZaw4M5heRnc9FnD58qyfukz1JPh8LUEwZtKfVtryzveUDbAmPwLngT38UHaPFuNwPRLmjzUtjhQQaHGJ",
  "key12": "4uyFeiqbU9a2W9ymmkxv5pwD8Hkb2VmnTQfqcqa7bY9Sw3kjBNchcxDqKLeo9PqaSo5Ax1fsMe6NWmWQg5ojVZup",
  "key13": "Mz3pMFmTmN7kbZ3xYxsM8BuvyyGePkZtbuU5JDafFs7Ce2GE4piVLCgZHbWbRoDfU8tvNXeULCEcHN9YfeimQRY",
  "key14": "5mqbAvuSQjECazVHJs2Ti91yGB2k1VqHW2pt9bJn5p477MLiygi2FbmC42m7XAgNrJRs5Q23h85y9HaLrRQmr6FC",
  "key15": "NY9VLEqnjFC2ze8xTUujLjWP434NhM8YgbQqtbBiMJPQMaAMT6qhNipNM1HAdZQwFhbbPYeFiG1BcZWUTqKFNCc",
  "key16": "4YRMj6FWFQjF6pp3LiAiqF3v1jQm1nDJhsrNTUaVJg2Ga8jTL62mKsrbxcCCSGTvr1HJqoYPV68YRaoSwbtSvhqG",
  "key17": "4yEAJrGQMcXJSFPRHK793D28L9Z15gabCbNs9QNgZPNS9RfViwKn931k5A2VokjHPokVVQnVdSQHeCsr5dpiQWBT",
  "key18": "26qM9Fq2kKXQGNsUK74JJGgLcx6F2sEjYk3K7pKqyi3AF88HmbW2HDa1QeYMVE439bV4CmyMiptF2uBDTWQws1pR",
  "key19": "4JGooThe2dUyeXAnFkepzEubAVgrG7LJiEXoPtpQ569i1Vte2bgtHhU6eyo92ashua5ZCK4NDrADBysXKFGYzdvP",
  "key20": "GgMy8uUhjBCzwMoQyk5J2meVE2f2KUPFt7niW7NHVFsNkSjs8FxF9tqkyM5HQrwwVhkbR6F5S4tc2ghJTcJe7cU",
  "key21": "4N7P2ztksJ3DrGLmSdGZFNCeybtyGTDQrn9T22u1pZRSYUHE5aXWsUa1jKJbSbWa93sqa6V5HSVyNryqGtmtBYUW",
  "key22": "2vYzWD6RWZW6mbZFHXciyPbAsDDqi791xoVev1WheBjktSVjjgGfXevoSyaY6EwsT4JvX5PzG8vSf5uduyB3TbmS",
  "key23": "67DKS19BWQvZtYNG9ogVqQXxAEwqRYGLXxUnYAKTfbze98a9NVZ2o5pmD1tKBmQgBngYn4BVhQm4SjyyMYqRX978",
  "key24": "4LUAP6gxHTZWiWzu9YrBo1TyZtpsVXuB59TCwdEadgc15MS9ucTyiWXFFbKknRzWFfFGMgai2YChPMH1gq7oohjx",
  "key25": "tHhGPuRgJP93hkFrELzuYmHaUVHwKQSWzJDDt6dJwreHJbvKnf4sqiqwktD5XCFn5rFXN2SvmSBV4iEgrsQMbBm",
  "key26": "2Rwn8NhvrVXueZfxoAgojiTTeSyAfZbypD5qVeMD21Zhj8i14Ks4wgMRZao33BRRPEsiKkPh3mJzgw5LVLSP57Mh",
  "key27": "4rBjo7t36YHsyKimyBXRyPbBoXqpgNznUSQxX4ipezUczh1m2o4cNJ6H2cd8jqoz7v6x4duhaRnqb12kcMBikHnV",
  "key28": "5ecr148kodXhitgK3h9RMSJze7UZLgULJ6rh5opyh738pygsETUginULUhfzjKSGiSpq4Qr7ZgSxh1NcQjyVKJH7",
  "key29": "57KSGyEJLPG7ZbBxLnatdWUXs9tX2ji3zgzZHdh9LeyHUm42DZsJjRtq8ydvjijVEeGYD3wT2sfmc3pBcAWjjNrj",
  "key30": "35sn6hsuY9t96JJEyktGgkdJSaznpJtaqFRGvMq7LqoJy3jMoMNrfFh7i2b3YQXGnQc1PchH5aQssKypTiaeh9D5",
  "key31": "4nz8yoMsQ77NWX6NvRXQ7VccqVRbQCVkGvBCQar8yJEpRKz75rRqz4n6nuANeCzPQYbDBhNcGhRiYaZs5KR7JTr1",
  "key32": "3ohPSgQhX1sk6FGVgVV8dZCmQh6LjUW3goxrMxW5MvWRTXqh71e6Ahg9CMkS92ti3dNceHRdRgmF5adD8hapY9s7",
  "key33": "22CSMyDba7VVK24p7kfwfdzcVLLWM9xiGCpzLA7aDxqCYBMv4vChbGFa2cxofbMovpPPcnUznh1aiRktRfFvNpZY",
  "key34": "2awiNYn8L8K7KwxceDjePPgHycutb4GxAmjvuPDNExa92ggpWb1aMYFmUQbXyKMLz8e1hHUiuqmj5BphNpTNsK3N",
  "key35": "4anYy6xfHPEbn3A6u2PY7ZfGuQ3Q5dS1otUzwMuqf5ooz5RfFhpuvpJvpfNanVNsGmeiWak9rtcccPUCscA923su",
  "key36": "LaxrZZcZhC8AAmGsKBtYddVcDgUa3Vio2wxeWfgvUL9Joc7gLziwKvo71LzaHxJpfaYqLFr1jfWH5r6LL6mxh47",
  "key37": "ErHUVHpc63vJzWpJtN513ZVAf8JB89txT9vU3Cj89WSrFv9BYBosViFQS1U1izmsKxSx13BgSeQogFV77AguZsn"
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
