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
    "3QBGYaskZZ5uPrNGQHHArF6KJ1NGEcTz2ESpWJEesYQXqSG7fSteex3XamPcV6JRXCGh6uBrZhyb8ZEM7ziEWjQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Chhdj2rqgR8RnVxgnixnVUznEwDxGWhyQi39Xreot5gg6xuUd9VCLEVb29GvW3SMkqZdC8Eiy9Jz9BfZyFcmh4F",
  "key1": "2fS9ZupczwuLaye3fyZ2vMtEeA41p7F6yCwoHKwXvUFVRgqhrQFFAqVx78daNqndjQ9kxjtYz1u5RrWedNV8PEuT",
  "key2": "5Xt5QNwJJ4LR9fBUBJTG4hfb6ssrobDA1pqCMttE4tCZF2DDPwd6zWpawqLD9gFdu9c2fGHS5G2XXgEEjEBFkfqk",
  "key3": "5HtbRDbjYQCLscU3WJLwmzEf89FBpJY8Rs6DY6Nq7cjnKhJG1Uzz7myA9sH9visnRm81oQ6nzShuU7QpSh93J23K",
  "key4": "2vdCmyZYNozCYDsZWrrgRxAWJDepdqN3MjN9szYTShQV9CRY714t5qs8Ev7ejuPKRS9pRSNrtpTJnsfri2KWX1j1",
  "key5": "5PMaCTKsdzZCqduzDppb8fsFervSVXHCcQmhV4p9EF7Ey6G4p8q3v58YPPXckcwnpqRCk4mLb5Ldhnod828qwuSu",
  "key6": "4nYXTgyLgqDusVtZiktF8naqra6V5YKzk3YsV4z7htc4j21H8EpVgb9EaNUWFoiMRgWASk3ftVzEpsjUEjURDCtK",
  "key7": "4QKUvKoJ4zjpXntGfmt6No5eyN6owESUtjg2zetsDSV1faAfGQ1aVVJVVaMbFZFmGT6f4cvT4q2iRqmCeSKPqrB5",
  "key8": "Ttehp7gRAwg9vC6Zu7jARf87dpioajzAXz87HeD1CSi3VjEa7gy1vzF4CzePFr8v1Fck5ZJzpaVHAG4oYT1rye6",
  "key9": "wfmw32GBg6jtnc9a97VtpFvcMQjLXj6AC9Apw6KjYGECsDzmhLtkmbAioJZMCYVRLJPUZBy6ZKhkF8bp7BacQU4",
  "key10": "41KkY5bcfyoWz2eVh91GXS86o9vxQnBgDpNJRYBuYH3a6FAynXqm1LVdfo8AAw1oLi46nGW2oZhxZfaLHKgZHZSR",
  "key11": "56B1zP4QvjT7MNfpQ76XeveetNWTcQ7kTFKeB55YA4axivfbyrYeNGiDEVtDn98JinANVe99e96Z3YxRQpBXoQS8",
  "key12": "3thpD2JfmXLZjA7HU7XxbwBSBSLRBRoqn5TtZ46hBvmpvGKoYderfRytsoKWrWJ2xgSvAVZhBL85sPCwFNJspsgk",
  "key13": "37HoBpjLQBNLXxNq99Xws2AQjwgn98etrhRLqb1hdzBh1hrkCQhDcWHzhXq6e7xVK45NWery3EGh1nYH9wrefVkY",
  "key14": "4zDHhwpe85p6cFzcJQpkFrERk9yvYEzvJSiRgtcgU95cCWqrTfdoo7pnxyN4TmZrwMXobk85ZzUz8MFUXy2HZd65",
  "key15": "5TYgBsyRbWdD2nKQ1LrDQBRrksH3c7rT6NkL3M7wZcLAt8CzJmKBH1CD2oZduE8WcVduxs5FJbcymBw9tF2LCJWj",
  "key16": "28XZQFYS7DJKCF2D3GJseuhdwp4puk1shYcN5DQXNeRjsTpmhaeiKvLTMiJZvKL7E2zoKR2D3sdQfu6DukW5KZsn",
  "key17": "B1NhoVCyRsYYaB69Yt7dufi7BLnXrWi2QsWy49xgcSNy5nC6YeNLG4Q5mCnwKTriNpvgMPTGvoQ3orRQ3qhyN3W",
  "key18": "3epLy2oyGeo2NbT6zBSxihdZt3863r73zxdMsjnsV2aS6W6cbDPN6FtpuLpFmP1nC8N4qSNFc3Xi2Bk5QNMuHMeC",
  "key19": "3hKu1g9bFnEvbkdof8tCHcAqqSTvv2gqm4NoKCmWqDPp8CN9bjno9mkeaacWDXBYD3xb2c3y76DJTfKnHCdLsc4p",
  "key20": "kae7xKWKvoEd1Fkc1n52amtbPpm5QELyW8fCZoaEkvdMA1XvCcRZSxaxWEWk6498f5XffF5GSwcb82mDvzejYdv",
  "key21": "3xxHVV3jFd5xNwu5oY6WeSxq2NqJNo4Gek8zC8k2FTUm3mASSsVJjEL4eQDiqPadisZts8dimF1Ji8M2u8wC1jPR",
  "key22": "4VwsSTGqif9X4joqbZSLWTTCEzGPF2T3abUvyHU6ZCvF3xEr8tCEMu74Msyj186AiUMYz33FaWtY5p8qvpZUL48D",
  "key23": "29KYqcbDz7JZoTSHAajZKL1EMTu2TjJYjrPtWCVq1FAA1N2M4fpJwMPmUP7auPeykdzCXU9vERC6PbKuHaXaF8My",
  "key24": "jPBMXg9aJ95MpLiHGc6U2SjgNZqPVaMarDpWN8pE5XRZJicv4qepBiazfZuqZQpMmcXMP49CkNvJBLQvFiQqBzc",
  "key25": "4ZwKi1A4sJUtV4ZfXXuT1W3yemccWHwBrLuF936uiu84QRAhUXa3GkuTRXsSkbCXhrmNkmQT58sNGwhtj9cad3kg",
  "key26": "CxDuERG4Nkw4gV6YqrHWhqrJNjpfKrWtdHqg61NKkRt1Egs3hfjHFrxKGHWkMzKRWcqj75CpbihuQrpQ35Fjc5K",
  "key27": "3ZBJxPBericQTL7fcqRGrAqvfQHQEenvoNzMHE17b8eq9nUZwsr2YxXavPcn69VHZctt2UDLKn8R1XNqQcj6fAZZ",
  "key28": "5NinZT7gRjikRgJZqzLxpyiAcBTgsKWcFberLBkZY8y2TpyKj2yppLaURieH2ygaDvUNVJTbgnApHM5g41BZ3Q6A",
  "key29": "4jtAN2puinjpMW5EGyUHCDN9JLojP2TJxm2zzGk78NP3DXkzXecFcxu2gqE3fMEKTPe23oFJtzii4Tekgpv2RVBi",
  "key30": "54fqC6SDDUySDcXaUZsKAxCox9DEKfHFULsc4CDw7bUJGT3pJ77NnktjH1mrecAQVaCx1dtZBw8Us7iVk5Gj9why",
  "key31": "4iZzD5EeBvLcuGWKzYrr8qq2MD2FBBjmmqCaeaNfdTRpspJWAL3oEaKCJGxGMRu1hcEY1fN86CpahCo9nM6Jw8hE",
  "key32": "62HQBGHKNsng8HtbdonVkGMFRMa8MktZsV5qigqU3v62PrQwh74924RKeSCs3RQ5Nnk4hYdWudqZr1o8q7Y2yAT5",
  "key33": "z3Yh1ZYMtPEhcygfPUCwiBtB4tCva16PKzYurW76cC3ZrXKxDu6Qi5JywHiBWU21pwbiLw7RfdWAnzk9T32rfxz",
  "key34": "rBQdQn9gk9GncB6jh9NZmoC1PefrEdV5gverFLdARKJgoEoCny8GtaQGezztNvN9AdruvvYhG7rexU6YF5FcNJz",
  "key35": "4fmn9AZmD9pzHvzyDHm6wjT1f1XkeFs4wmbqRQqkCUBqU29DbEBKB74Hzi1wZfzpzT1Huo4k97Wp1MrTNjh2MQ7e",
  "key36": "5B2Y6T7v2G23cJ7cf7MB4BpFxhrtMd9b5buZTUy2U1gMJ7vANQbphvMTPD2XDCWTKuHRobpNKoKjgascKvwuJzyU",
  "key37": "5qKqb8uUwr5GLzkYTP6SE5KPVoLSPwKFoCHM6b8dRBB9DpF4oFbYGTPPefz5DdV4M3KqUqVC1wApxAh3NcUcAtbL",
  "key38": "LFzrfjbpLaTANQKjnX2ZH2WcfppgAM1CHNnZpuRtTRVYkNTq7BF474GenULNCAfe9ZMVdJk1D1xdXSZRZ5qh2xG",
  "key39": "5izx8amnzsH6GTWxqMhrapDDYLJf2LoKjdzsbYqwDViHqe1rUbaT5Y9T5BTYkrdeCzMbsbRKLaH7rqRwnfsEazS9",
  "key40": "5v7LkjuqGgtj2mv2bB6hPoNY5QL9De7axybHbp6ebpA7VjNw4rLpvpFYZptRcKUq7HgcPcVnyHX16BNQ6iT7wMMo",
  "key41": "3HKXjZ4iY9eqJrTksRhuZbDx9iz7qs7Ao9JYajfmkCfnjffmZgu9p3C1gQgd3JytwYernVQXFdyrGoA4yXUH17Ca",
  "key42": "54VLWFXj8JV239jbvPnuNBRZrJ24jHVZyUqTeGqfGytkmEGsdWhasDVRUBS7VzQY8RcePigZieLaiXq6v6NVuw8r",
  "key43": "4tB5DpYwPtz9EuP4PmMT3PwFN6TShgbcdbaaS3AGVmtYMYCT13x3s3HZqQ3kQ9D8ctCWzX8tyjFfm42efPLAsTic",
  "key44": "guZNp9dA3jZ7eby5ESRGKytqESXkMVdPxhm9KadB8XByisFnRLMSFyGK6RPFEPp1dvXxbqrBVgtQtJndcZwEnQf",
  "key45": "zTRY87mP3nXtR7eySNk9bq5rRNQsmZbmFQpS6SK8LsoavMhM8GRf6egJFDcprVXX5iQC6RS1Mi86ocqNRQzC4RU",
  "key46": "5LrVQNZ1CEa5v2J6wFDc2Jkjwqr4TmiW6AJhQduBwdUpgZZ8UfuUCJ8mfX98F9CGB4HfMXwCcfxbLzApohLveSAo",
  "key47": "2SDsxbPwVMmsCRyvMjXcauphfuHEZjA8KqPdHoCSzUhEQekiKM2q3LdVePCf8G3gnaq3zNZibsomFNPzpnb4Aiio",
  "key48": "M8c5nE3Kf3BispPyhGRyjBnkcZAyC2vctiqigRLG4gVEQ7bv14W28CspaBsMF9ZFLrwXJm6W7HCHuGE3btyePQr",
  "key49": "5QgLXd6VAvJPxVRcSmUW1LXx2Y8zpSPTvmHBD9tqvF3117HYLb2ohhSV9p5Bmdvi4DVyr3dkqfwisBT1FBbWPpvr"
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
