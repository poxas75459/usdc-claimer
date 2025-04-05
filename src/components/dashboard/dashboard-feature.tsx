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
    "4SDdLsVvTGh1Zef7y8n6qNYXxs9iWjYAZpqT2RUhZ1D6hXA75pZ2GFk3zNh2anPaa3fHwekf8K3sQmqEA3KRzkkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27C9ojm1L3DhXCbtjgr8tGfAi5BNCDnmmEVSCu1PsxBxermkfzRbH6pYrjH2bnTUj6GuVsyw8iDcuAfEZFHz8kLf",
  "key1": "2raMavfzMKiBevWzoR6pLaZmLj96F2U6ug6Pz9x2GYuRpBEoz4uxndwLEJ2ziqKViRvpgp8VnyCGLKHXEV6k5k95",
  "key2": "5YzNe3Uon8oXVDTvmqMc983hmacb56NRiWRAYiR1c6ophEGg51YmSJLc3Ez8S3q63BhDdeP8dXrNbLs9Ewmq2CT4",
  "key3": "2XEZKRA1bP35Ly18A3mdMXBr98KbA9Lim3vmzyYjjMATdtTWioMAmRqSqKHfBsiN4As56YNE3eTHqWfp4hG629it",
  "key4": "4QE3hdG4zPekVwYSNrvPdTEixssza4qMMDTHRqnh1jGwwP4C9kmU5HQCXvexd5pzbAnSVPTjWj9Ntv8u2yCw18qa",
  "key5": "4xYF1BQA4fciiEWxGwwmt1ee2XZ46GoGmZSywNgTC1V8PqtTC2ah6fA8TTR4Zt9kPkTdnhEfpJCnCUupEYdEjNEM",
  "key6": "4QuRNtuCToiSYaybMcL2E9EH6tqAzi3oCxgTB8rc4N9bMLa1Bckp4trkjywWifW9weLWmQr9v3nEdqoqsDsAn9Zp",
  "key7": "4sbbpejzevJxSzRKjQk7CJS5GyzYa32QBAWMcDo2KPzhT4DZwmHfL7L8JRS4HBg9WggRWBkXH8FTT1Ngm7BDBhDe",
  "key8": "4SoVoXa7YJBbJWqUaYXRs9Lin3AAQKx28R6P4HVGzRPRRCCNPvQHmmkydZuSpJzNbtCz9q3e2yjaHNAnhDJVYwf2",
  "key9": "5dUdbaghqspjxz4fK7aaw6RH7yZgrRYS99LkwnmGvs3VQ9ATEnK681BDqTiGPkq3qd6botYpQfyMV9cQ4vRHHmG9",
  "key10": "3WdJap6TQEfz4r6KuvXN2kcVM9Aqxw484z1dTg6nhgwV8kQnowTJ8VtMeMuD4KwZgxgoYQSUsk59fBLANN3zraKv",
  "key11": "4Qjukf5RWJiCc5G7gBrEuYxEm2aRNVboqqxKmT8Gd6Z51yBS2b1yp5qx9SuLUQJqKGeugaSEZ3SCriJN3eV3Y1Z2",
  "key12": "2J6Cnk8GacNR6sfyfRRo9oavRWmjNpsrvqLSe7tSX7N1qHrzGGTvJ5f5ams5AVorSaUfvzUNfN4N5b3WXPPd47bQ",
  "key13": "3XcUEiR2VxyUKSVEU9ZsPjNXWUmgH7XY6fJGfbFnxV5DvnKhGwKJ2qhcQbJVPLdCfM3MLgAZGvdNYqv9coBF4VWC",
  "key14": "VvNTZNFCf2g3CupBY1eRr3uTsychS68mb365Fv5n7U82WH2K6fLCCNn9gV8Bxa74dxaBjqySYUatcjJDhk44kED",
  "key15": "2hMwDgow5Y7we2oHRBsm64WBQK56CqHcqjxQuCzMhYkVKEBdPJg9jDjaRkZsmtVH9NqrD7dV2pKRY8chVhST9yhP",
  "key16": "3GZ12JUeumraJXx4or7FSn1MBVmhfS2rUpnDp1FRPe2zoGYj7pQLawWu4xnTaBUr9bpofwyjWxuXpxdLCr1ry9fB",
  "key17": "64oqRAxW6rjNv1K845yMY1wXBJgpkYyQvgkk4dSwBvDBuTb7wah2xiXCU9boJ2iE5Y5Q6shNgxS5uyCNMU63jSrc",
  "key18": "4VRg5J6schm5eLWnMXYaEqdWugNVQVfHoAYYA5F8TXdcGjjZRveWvjuXSL2nUZsh3n9BD4s2dcGDowf7y49tpwuT",
  "key19": "65shLVqZnGWEnUPbmRPELT5acFA6G5Si9wCB6UzFQwkJceQqvZgjnXq5QqAxp5xnWCiUL1gsr64eZoiFGB4mudmi",
  "key20": "5pZaRwCBdg9Z41zDRv3TS1koCR516u3N6iP9cETuDbMyCqyexkUTFUqCjAJkT3AJZ4Wat7rXyKDkEuMuLwCWLxJ4",
  "key21": "3FU8beYtrrT7hWxpFx5MRBQd44jm4bjxgUSjtR2ftg8uBLZaiE178t5HThag427uEU86cQFEw431aaowwAQqk1TX",
  "key22": "3WaQdmTVTk3pFXBKUT2oeG76nDyHG1pKFniA7S9HBFHe9nPhP8Ezf8ymKmV9NY5JovHd7eaXWTo8iHkisk1et5rs",
  "key23": "4YyeLvMTAjy5YMRteWBByhKMmkjKArvYyCR8rnPEmjD2q9NxCvKcDmzSm8BLaE1t3r5cPvm2qPw1RfQ5AY9T5nZA",
  "key24": "4R6BGU5aqWhTg3DDARPg5WfhLg2xNf9Wajvcioi9NfVxd5JAgmzGH8tRFHLR12rna1mZz74DqYZJPT2Uy1N6kohF",
  "key25": "67ibV7zRut733HcpwgJQHwf4kSki3odE5uN1MQmnstW8USn4g9ru27bMcCb9PEuADTcTFh9pkrj9j6jfWEogsn8m",
  "key26": "39SNNxvV4CsZnKHYRBBDidkqrWSqyypntA9E8p1r7vZQq4qy8sj9vtBWc7oRAScZjXSmsJXz9h2yB5DLvcXznhKY",
  "key27": "2DZpjV4LWbDLZWbx3mAmJYMk6yB6VEQ6RCvBM1vt4My6AAiUaUczj9Xce4NKKsKjrQPj8t9PAVt287Ku9jqczTeq",
  "key28": "3WCLoKhsf77t8EbKVQA9SLRMJ4xQZT2URhTKirKpZ9EH7ppvwqNYHFem5Ca2zYmPfDvwi4qJRY9GvaeHe64Qdq9x",
  "key29": "JQsAiXX5enDS93WvUVk4BqfvQ2Dd9HavLvAoVeUknmkR5kb9HsKLcpc7YDVSo3LMyQfPzx8AqyvEfDqxcJnG5uT",
  "key30": "2i5go2tQYfLpN6qFS1tccV4oXVwGtzjWXPjMhYH8X2Ya2MGXkYQUzHV1JeKPbU59yF495PA3eonNooXrGGQwtxne",
  "key31": "5MRJexDBHopiERWG9e8fymduhpkWqRXwjJ7d8pBih14yrmJh7PiiVVFseLfejcpZcmyEbEpzaNj94HMvESD1rKej",
  "key32": "5DvxZ8vvPwQ87hDceHPzV18MfJsGKCnGMqMUvprLCjNrMeFuHvqYaUNVCCLRf4xSuseyNBswQ2P6szKwGJknoJKk",
  "key33": "4oQANLWxoyX1PJYV8PrgNRDYJnxJt9VhsXsZ8Fpk5u1FAcPAyEByGGzS8rJbFgA2mw5GgSMyEwNBZuqYh4z2VRDh",
  "key34": "5GiGenjMrqfnzM8d9uNcWW6GS9D3txHtgxKRHMd4TU3dunQqSo2A1QSHmDmpUVjhcEAsjqmCXgo13imm5mVwEjPN",
  "key35": "mYj59uX9jBAq4pfAcQVodbNsUtRBwH23M9uWAsJU4b3XkeAqsdzyqcNeBuATQ1uqvcbkSpa33LsQwTFaCyjLMbZ",
  "key36": "hUo9QvPDCM8yb4V41LwRXXDcFzARgwGejpqvPr2uPreibhNnVKFkqAtPgisxFeQuDvDWPEDxVw7PHxJtaDC8e6s",
  "key37": "2xixUG4QnHZiN5cWy4FCXtDZTVExS2yfhF4zY6MoLZmu8kMmDDB7KoiTtmzMTev4u4aYtN2XxaSaqyGJsyjYDtzD",
  "key38": "4mVFEMenYvbLtDr1ndEfdWNruaZ1RhB3T4xGbqCSjjTJpHnzeqTJVqZ54gdTQV8WQDYBGVDrp1gUTAB8ujZcusWL",
  "key39": "4dqG3VA9etJe7bhmvKQScnGSbVx6bbxNL6pvQZzYottxZbzDJLXKnwDzYVbEMxEPJRYjLRYRnJApcxVdUmtuoBaX",
  "key40": "rMwqzZQS5J9vZKU9j2fiX7DN1sLFePgXyFR1v3cPDmqSjwEjRPXrYJWhE2TbrSHNycd8zfQSGg9K67N4WbSi5MV",
  "key41": "3EEtZKC3G6L79HgGbFnBKgGu6qGtfNj4S8mHib5jy8jwtmyJH7HHsEMCGAU19iATC5hn4htYh42RvR1Di6H9HAbD",
  "key42": "3cVtdSq5XzfrYamzmvtQD8HuYm4su29Q5eaZqkD2JzwubqFH7jmJM2UWCN2rU8s398YcNBrh4djQnFdQMBc52gT4",
  "key43": "36J1B7b1iQYXoCyJQuA1M42NzS3iCZieBX4w8tMDzzF9hhmDTQ6FP2udVMBL4TyLy92qfcY8MzfiUTwabajERFvR"
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
