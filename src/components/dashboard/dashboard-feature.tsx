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
    "4htQjAkZvs3hBX1vbwN6Rn8kQ62hbj3F7hUWnmUjbJgkKVAu42RCVg2pfEsadgGjx5DgYbtwncSpn8QeXcKXbL9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gjxBE8Wsbz7Py9pqdngLQerF28Bnitx8Vn5KiBLWFsB2QFXpybpeVsrMW3YKpADPDS8UzpKZjQUSLGJk6W4pwup",
  "key1": "4igZ3w68JCVFVyD4LZTr6ib57fWXop17J7b66dUWRgZN1aYqbds5CTtkD6Uu4kFgueuew1vpJuVN4TEsuVG9nCyA",
  "key2": "2TfCELPtDsXEBNUmDECzwEtJSEaH6QyCwcHUnBTMJRH98evY6gECp3so6cyfZEyLH9Heq5YQX4M5aWDHMstUTWDy",
  "key3": "3JgKqxQJDMd5hb9FpzDtvU8NZbMbv55YeVjxv2CvcKB4XeoNVaj5sozL99ympPBhvDuXyoeqk5oxDaWaj9enkKXB",
  "key4": "6rUvMY2cZMSdjLwoDzCLNV3oj9f7hzND7WLHzcQj9iq6vPZCMW7G9me4W8w3BeQECQbptopeB5xZ7RKRH8MfXak",
  "key5": "HiDDo9hKTtwfPVt5qXNjByJNqz4ZRFdZpDRtcjGxNtXZ83xaEcz39v4j7jnFztTPNcJpuWUy2x7rPSXZC6Wiv2a",
  "key6": "4fwaTp8UAVJ2XYhCWLSEuupkurVfhtpqRYF6yiQjnDcfp1vQBKm4wVmkRFgujXpy5CxEhhkYKtF69GSP4ZHhsQgS",
  "key7": "4bi53Ce6kyeeoVBp639eQjPGUDVaaRiyfaGmyaH1Nu9Pg1HvdEAhXb7PFgTesmYPDRjgnh3kKDgcSLGjtneCzkB5",
  "key8": "2yVHbWVyzGPuZph8ANxL2qXq4RGND7Wg8Ns7dZ2uVWmYnhMouuCGZMSjX1GdvjG6QQUpqAhCnZSthY9okSc2i7mL",
  "key9": "3KJeRWEz2ydRrzLCEw5qwTFtMLHzkmAW5T2ZgPw3VcCmt8v58QYybkJ3VRwxfpDaWekEZjLvjzAzxg5jnY6kMyJA",
  "key10": "4A1KbfKSPqPQRzXnit4zcXLBtuj1Eru1hF1z43WN4fYkBKU3yUK3mY7fTpcHUxNJ2g5d6ryS8knxgdukxvcEgU3Z",
  "key11": "5cLqunfzNxGxLUz1AbXnABzMHHrmVKNemaLRsMdjoMN7y96YRie7HRonNCAjvjB1vP24Ye19xBDSndvnCw1rrkSk",
  "key12": "4QJ8YFjQEjSKniegBHyLQwFHrVEAbhZeJBNsr2dJcuBuS6HugafzeoEAGXrkxHU7YjVW2K6zPNMn1VFzYYTYRPpN",
  "key13": "zBksrrgbSY2PGykh1YPfHUtWPWZyB4ddsDmwDhWXAgkU3dwvJVkvMRan48JnbTRXA7JDq46XPPepFqJ7f4noFd4",
  "key14": "2bHuVx7u1htjpGGxr2HoTTNse16xp7LfxDysR8JhKv3GawREEu25Qm42tuCdkEzLJDfVXCjx5QXf2e3VHJwV8xTB",
  "key15": "4GZKV6iaWub1if79dAD8pZFVaWYX67RXNFGoW4L6aowTgX3T3KNFYUYLDRxHPDvd5dWHnpqPYPXGc8UGb9mcqLv9",
  "key16": "2FfYyo3ULDa95mfbYXyZa1U9DmTqMYhmNbnpXCdjy9v2oHmYfujHn57k2W1CTjqnegAr28Hpycsm9q6ENJ7eV44u",
  "key17": "3H5Up1anuMbckQhic5nESmDbCSVW8tRQfmD5i7RdqKYWupn8RdTvmwWNfkgVAMnGLz3St8YTdAN724a5Qqz8nEfs",
  "key18": "3XtGgtm5CvTtnN9ctsHYFXto3F8Uzr4h1VpA3mVCzj4KkNxxPQjpTbZrtEbNqb7NrgUYgbwNLQNV6bfhtdai8EqL",
  "key19": "4zeiHCzrCkYoh4FN9HM5YoYQRUFwHDsyFiorFiHy3sVi4SoHRqRRpmHqaPy5CTKfrX2DzntKYtCNCMxcVoaYy7hG",
  "key20": "4JCj22CDxiRSyUpG82A6jLURqiTqNg9HaCKGxZNbMBGz8XUJcyyq5WQx4xNsAyfcK8AkvDgN8JffvLthCbd2H4Rn",
  "key21": "22HojyWrvJ9czVsBYTECuHm9CL9w1CJbXi6QfSVHgbFmEHbKfkSMXTZ2PyXbBPkBtu2KyuygBGFrf8k7WqmMavPi",
  "key22": "4J1gGMtrA4LSpmEAiuqFJZoUeV7tRzqqQsGgc1XqQy9wzG5MymPdLU6Q6UAmNfvEvxszeyDkEaPg6zHwa8BuUvji",
  "key23": "4DofNWru72nnt4gS6JGCe7CbPsvMpLa5tH56eN7VSJwyop3JanBdxQm1kznGr5iyWw2AsaTuU77dVQMMUnge3HbA",
  "key24": "2CwKrELSfVFaeDpQcthuChYxbXwW7siM7E24EAmLtZPgyyEJTUtWkxxGoRsuEYDqNA2MHH8jJFGwy1M1gVYd9zmT",
  "key25": "5bTfo3thvBKnbMNFjfJQf9Wfyxm1UEhXcmaNcSXR3LrUJ4kp8hHvfiGHP4zdc9eaZHjvjRKhBPKdAbomMbkEhuts",
  "key26": "3H6woMUqW935QEQq4fquexewFZ9wYy7kcu6hNqCvov8MeRBnoMgWZFFzP6BRKFPoS8PiFBRsdGmvWpWjpY9K5g6H",
  "key27": "3mkxzAw5NB7YxehFAGJ9RYvtVTkQ8bEarDPAsqMEUyNaywjwwy3sMYCmFAYGe1u9JJ9iBBSzHjoSJhuFZiiNrxkz",
  "key28": "4Y7sekEgJDZM6miPBfkJ8XMgAz675KdfyW8zBCrcfmM6UvXvKnwu3FcPMeAc5TKMASkR6NatcAwrxfgxF73Ut9Ch",
  "key29": "wni5kH1eV1VkznMAby8aLAac2FueUYSyVrbFumuWZQfFsvgFYzSBJ3KvSXVoksu81Vp2zS3kdLLmcHJbugeLkf3",
  "key30": "3C1srdGWm5NZGe5Ki6E9mhRuuAEdat69rFgCzgpYSRmCkBKd3TGB9erBnusx8wkaLeeBp5hMTsyZwafVzSWsyKnb",
  "key31": "3aCo8TjKoQ4EoaAFstK6647JH2dQ4GPsjjJs6LJn2HiJxX3WqtBWXnpWMU26HtZnGeUdRUYhkgppXu3Wx7Rd11L7",
  "key32": "38R5LfDWVmRF1Pn5PeoNR1Pnbm64Cu8ehMk8NnWPv4PLxNoK5kBDwFbQHuanbLbDfKzkay7SYT8EKqf5p52RsMCZ",
  "key33": "4pCWJpvS68U3fCqgxNmWVqEhy19WRvVfACxsn7J37QkrCvkLf388yMnyLvrHbM2NgQTu9eFHTwyWM1cKHcuaa1Ga",
  "key34": "2ZvgzTvkKkXJgGMBfpGniFxCQkPNJKJomQLfEaDtEUNXgWs7ye5HQnTBYpo1bpbQ4FdCyEfDavVedYWPj3f7CbDf"
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
