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
    "3PgecSYAtwz4UDupJQPTzsm2ZLtHiE1pXp1ntcFTgvJhHkZheaVbCGSSKXmSkzfdRfHGhhmPurtTU4aM7fXWQdCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LsYBJfyBspQ3isXvpm1LdFT4wSBJpVUM78D3m6pmScLRR7NQW36GB7Mm2xHz2rgARV5JyfGbWFZv2mT72AqzPr9",
  "key1": "2G9JC7g1iDqj22UgY8SUh8MXkkinoYACSf3ynvgTpBVYpqmq1xd9d7VsXXgehL4YGk3xWP9gyD5yo8cRR36goFWP",
  "key2": "iKJ9YfhNaBMjAr3qnWGvyEz955H4naSpFgrtQHguNFhQqoTnibxMiG4Jf4uUfRhhUaa8KnPgXZt8CUqgpYvQSJU",
  "key3": "3jTRD5BFnXmFvmfo4TuLvc5x5A7WMv75Ve3c8ipTKHYTLXisLkkh1QfcP7ZapPKhxZrydRuGaVXQXk7ocRziVKBY",
  "key4": "4R9NTkEEvpYbSD22EAJEK5KC8nE6kNnx2yo9ozD9JKyCkM6vZFcj4ykxZ2cvUzJ3mkDYnnxPYHWgPCUbEoiHzWY8",
  "key5": "5Go39isE7wJCbPbCdsfDsJjTvR9e2omC2hHc2QEyHY6pS6di6pUtgdDVtGHabmaQW2iJdMnakfWndG4dZo4BHJrL",
  "key6": "4GqXsUDZVMQxqvSurLSddfb67aN19H1CrJ2VmpfqFTVurwKuZQSr5C6WkJQRHhF7Xz6SW9ovp6VRLZ9MHDpadkrQ",
  "key7": "33L5ds9SGNgbfn4DNNiuC7dHUDi3QvG969fY4m1Nyg2uXe5gefjkL36fba6jNACvrtLUi3NeKVMN6vjWtURQmbn8",
  "key8": "3taDckdJeQSL4tcQHQjYzLfkafgGC4LiLEghgRgnBkt4pj1NiRzGhD71LEVe7pkmEp4XjkhSf2He7eWv4isoKe2o",
  "key9": "346exsDMmjzwQ3pfUdWU5NVS4wCkkczRFz63NMwWvbKvJsL1QyfndWcZ13emSaG9pqqxwh6UXexMG8KFWtmwqq5x",
  "key10": "2RX56CAbQktuByQ8vbu2KwJJDVQcb62Up11KfyRtLi1ZGB49V4rtAJ5sgaG7LEsHjFKMchir65jaZt6vVcp3mYNq",
  "key11": "orrjZBA9dALRPW6AhcrUbh6TSoh57mTVdCwyvazG9VNfBtTDxQbH5KGQbbQA9yFfn7G1WayAqSDoDTASdqE4mio",
  "key12": "4cCco7UcrL3mzFVy9FxoJYchMXj9Vt889jbfsP6yLEYSW651AmHguoP2NDRAQs6g8iiUVbTW2vHdivzmeGmv2jpu",
  "key13": "4cGC2wtkuinGDx1iCdvDzK9z4iip788rWnKqsrnVG4Q6cY5rWE1tZai5x2PbEkrdwJFzo1Nvu1Uf1qsRLojrdZye",
  "key14": "4m2c1h9WFzsYppvw2Rdz1ZK2V2xDriNVzwoc2NKiQh9zTN6E46f2ECDXXTZwYWThB2ivhvDC1LavP6vYZuCSHWnA",
  "key15": "jCTL2gVregoRrYBk7stzw7b4uX1TiqXpfN6YNgfzXLQsurmBeJ1kZAnJJvHfMgyGZ9NEZG9SqA624XtU6iuHHf6",
  "key16": "2gTdSTtiKbePKoLJazo9CwCFoLVeUCLajkQoq2PyHvb4Sjo1bNhC1i5u3CeshWvZyf1b7v9x9FtKowVvC8yyc5r9",
  "key17": "2vcYTUnD8fR3Cu8U3TBR8TAgBRCzarfv2xLBwkjfPbCwYDQwVoLuouxUgpJU4wsaqtYgfw7egEdvWuoS5TnJkDsi",
  "key18": "5vSXDoKDKx4SKpFKumLvSXV5g5pvNceo1VB9vNKvcPUfkcxBJtMCRPkdWRvxL3hkqR4fSnzMQUhcRz4bAk63T9DD",
  "key19": "4GnK52BU8q96WgaKhWmYfb1GkfF6uyAhWbD9V9ndvqVfkw3Ju7w8CfqYqmMRxch6v8AHFSesebcmp8gxPrnh5Ah",
  "key20": "Y7mnt4PyT6wY53uXJmLBHhgXjQbbzTgofMmEEUkRo29EadjyzVixC1dR4PLrTWNSkzLAtV4hprBdZ8Ti7Toth5G",
  "key21": "cJCmy6Q4oSsVYSAhJwXbaYfAThSswsMQnVKptxjwdJVjNTzQKLMgPmHXZdP322NxjtgJKHgVM8F65u2tUCkvWf2",
  "key22": "5Uu5Dr2Q3B36mKVNLN1564XpebDAMsdNync1d7CuiwbBsD6NJ433GesKAR3QQY67H3D1U123Txh1F4C6xbHvEr4K",
  "key23": "2tzyCcibWz2yDhxkL1Hr1LMKwkZz9Ujgb8dRsYLcCzuSmiXUjonGJMVePxsyX7KTvqELDDKkNTVct95CjWpGifB6",
  "key24": "4Yg2J9DXGdRu9RpnDN6kwHyNBM3QqpqZ33THypDxGn6aWkE8Gzz8tbCAVPvpq2dDwQdnZq7G6qH1y1ei869bACww",
  "key25": "57ahoGrKP7eWWWpFZ5iQFgwgdnvWucTworkibxvPzZu9MBg69nB1M5pbtDGfCPrNkhNvCdXzL1bp9LSH1NssgxU2",
  "key26": "9kySioj6Ryghp7JXMidpgCE3XQgH5oksBEN4prK6Vp3Zhozzxi9S3J5SWuK56LJLd2zdkA1Ejj4Y9kyNt4J2Y1C",
  "key27": "5n64MCCJ7gWAwvLeWsp3iXkrcZD9QCwZ3HqbWoM6BDX4ivCMAaShNkHKrkfmLhYpNkUawLRRdMY56ii1ppcoQbgz",
  "key28": "3ZswUW6rhftEjeZHcsZNwCabjjPuN8ssAmXCH5iUoqa7uXv6fZhRQpSPWEHY1RpweEAnbbGpcx7YDgjN6ijjvb7M",
  "key29": "1wpEN9V4aG5QkFWQrQVuZ45Pm6heY2vmVY8StKzCsG9G5RNDPpPbsBanZeWZb5mEzpjmmpzh9Kuc8wePyfp5BSJ",
  "key30": "5y3s2aatjdzdvVmqdmXhQNHm5NV25kjBqJKPhpnrqWTRAxmsFM5v2TYAQGS7jXjzuk2E4QmZZNvkaDvv61FYdodu",
  "key31": "54VY7GmpqU8W4XvxUsAVRv19JGaHi168A1ANrHkzvTPq9yYyTz8x6H1uXHgrkQqfWQ6KkuvWUY6PJx4iY9iDVtV8",
  "key32": "3uGjxMjwRVqDfZmzHLmmLc3nJcodMi8DLC4QVci3yAnJX1q2okSxZ2EZrywhCYKpfLVC65h5a1iBfKzhiiQkXAXk",
  "key33": "5vnv1poVaTwcrKwsYsC49Ep71CCNG6DCZBxcJfZAhdpWmf7eW2Ypz2n2eadBHAcwtbnUTCQQ9uLLpstndc8bqQAD",
  "key34": "SHSobcmPeLnkXnshCybwvYfPC5WW9Ra8j7CycGPRyzGgYGaUQG6pARv3RdwQPeUDLg5d44dc8Tis63LgUUwdzR6",
  "key35": "3t2PHj6AivN2y3qjoRWZAvsmNJkgYdEUaXAx5qWvMUjaJqrw7eh14EJYyKzznayLPyQJFYeAkT7atCUFdFMuDA2v",
  "key36": "4mSaa52kz9yeemVvxaFwEyfCrUeBo8dsPcxhswV64SMBszvCnug3xDKWjhaw2pDQcg8UwpBFqF8iHtuFakaiorcX",
  "key37": "5mBzknns8WUSu65CQgEpTkhWzkdbJ172iAjogMG4dp8g26tsCS5AMq7NdkS9XNnsctzNMAfSQVMbmXfKbHGQRJ2z",
  "key38": "4Xhu4JrFDYALGvBdSsBnVjzhW4fvoEsYcJc6Jprm9QJrmTvK23Y83YzJuxNwZ3iyX2tz4ykMCVfFbNYWsZKzNFAP",
  "key39": "2rhkxPRYYbqkA55hj6TUVRXuckzJpU4m4RTHMTCEVKpD7iydQugTHbpweefLFMT8a7zCAFYAiK636TvmU4KkxVPU",
  "key40": "HjYUehyBiHjYPrjD7PtPJvnGTNts96dCrhCyPAqZ9GtoSgL6kR2LPC5xfjhSsyeAuJ2uoeUw1FjHPEJ45o9jNDs",
  "key41": "5N7JaUDxLC6wnC1xaCQFLcTyyyiRi2Bdz2ppayKV9Vjyke52nngNojBwGMzWvQWdQJBEQVgBGxab2L7dG6jPAwNg",
  "key42": "2EQ4tHGZUigbmBH6Hw3hgnbCcJzPw9ns16uhCpwaKp5Q7Bd7mh9qm3z2t4XkaE5ByK97Ldkum9B3PbehAmN9Z3nb",
  "key43": "4hPwFg3RLpy8JkFAKM9CoDvjnguHyH3vESMyajdhaWPcoiFZ1qJgjsi4Gn9R4wi82miLwgtYD6rGeQF8FiSLpKSZ",
  "key44": "2Aa34DJs8evf8kCFNURjg8ehTptVvkhv9cb2AnPKYSywnZ81UM8fALCxnWH72W6YqwxQTKQQEVcaqSw3UPSSzWQt"
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
