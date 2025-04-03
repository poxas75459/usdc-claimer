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
    "4DjK5ctRupa7uPjWdNrfNEMHtmhKdSaRxh7QciQasZLicibjJNZpy33tqY8uoyVxbvfwSZEGQwRBTpZ3r5dn7JKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x4VgEbYssiqzHT5pTodonFoMgVM5zJyn2HYaRzVpxDb4mD7FPb9p9vbVFoAMfMNox3e1MjQg3XgBJt3cofUu8YL",
  "key1": "2G6FNsZWswWiWFEXhj6T12hYwjCmV4GG1u1ZsVTyNKwv3uFs5cTLYRN4sAFtPXxaAovw6wkfYT2CTEFxg5fvpuyh",
  "key2": "3RptwGTNzkybfZeN1YLmgpNxUYri7mwdT6foLjeCpe49BytGxVzh7RZvGDR2HWUc1XQ3XQzKmT82m2PCTv2F1kjS",
  "key3": "5ei3E6tTNXyX9R9MCWBV8feGqGuvnGHWcqfy1S3GuJtXYNjC4D2Ventg3pLdfkLBaZTxizTjGg4krMMxcoqLwg9a",
  "key4": "2kruhc7wU7BnFkc7yeP1USANeF9Gfv66Zet7nAWYd5FttYJYrYS2Z3cz24yqVmtryMBAdfUB8iGMm25DFt62ruyY",
  "key5": "65gtwVEymvbGdNXaMT66JywJ7hqJcBgbrbV6v45zrbyTxAg5j7hbZkjKaemXDGahvn3igw36Pui9M5ifQeUEg79L",
  "key6": "2KtCtF1VSjU8ar19hZUWBPqXYZZSQDLqkxCb3S76Thh7qsnnYr77nbv5NHGFFCciqDo6B7SsLUK5Vuq5EjcN7oVp",
  "key7": "3J8962mUghtUQzTqa2e7GqiUCPNEWD84kCBYUhBvd5p4VEa7mYQ7kbrnssNQ25PN91Ve5PEfFy7pFE2scrLvwyjx",
  "key8": "3rKxYtnMrZ8dB4bRVVcfAFNtr7wSCLKmZq68YiuKroCeU2eXzxZWGjQQ1aJQhF2Nfguak6BPCSe3StR35e79T92a",
  "key9": "4KhPQGCCTHkxzrK7TZP2BsnDXmbD5zXZWre9dgPTorzc7cTa3N7bW1PmR9BfyYhiYCSeTbuvehNiCXc9P7xgRVLZ",
  "key10": "53zXBByVzezcZhNxhk7QuVYsLkRB2G1WnM5riABMtenSVyhKzkUWTJQn53r6JA41Ptp4Er8kpaiJgUhc3Yd2v9YA",
  "key11": "6BBrnQJe6gwAD2WemMYh9cR8P6Cs97uEvLHL9GQsQYSZbkfRHfZrK3gij2rCpxsDWFM9QqMvgdy7BZuzN3xF6dT",
  "key12": "2UjXQxbSHaCP7Hj6AgdCnrcKTwCZnMv1rqubnH4GVKJdTeiisCVH4zXXHP7LaUaCdT7QmEy65nSze8WpCEiVo3QZ",
  "key13": "5rZDMkSr1YjAyK3N2PB2ZnobjAwdUaBZwcEcyKLuwcAMe6XUVSJDJaugvFEprvm3QXh27EGNN1objzHxBPurFAVE",
  "key14": "562C1hPDk2HMcwTRhHjUKyXRG7FjziYmfW1rBGCp8izuevoeKfV4idEuD2We8g11XDwL35DEEL1hFPNVVyKtdEDD",
  "key15": "53ymu4jAh3mw8W71wh7kwuqLVeQeqNHhZ57WgXxYdrpU7kqPUYnyfST7o4AzmNNa5tBAfTww4yHFZJ7sRvPuuhuL",
  "key16": "2CfNyf69D5JSzmmBcdMQKweK4tmuYgcQS8GVUSDTVMP17gdfivuTFh5vpyv2VfBZ6gBDmuSzcczE8Dd6u3UgXKZj",
  "key17": "5qJzm59JuMX2xemGaDjQMDe2ENdppfo71pLJk3Y1u1k1G1yxfKQxrcVdJedXX53jghJESWhjKfY6ZLaGHN4X8BUJ",
  "key18": "48XCPdR8Hq1kaXujLNK3joqGZZUfCnSTkUTEtaK6MbNjKEreg6SytNAR3AomkTuxB1rUNrKKSh9TTmMabFLZsBMH",
  "key19": "2bsgRwawGKhfMpDAsgJ69ZGcmNPGHNXxBFutknknnxjgKfRk4SgF45XfTQnCW2QV4xWpGH1WbVEZqkDyjgxD2UbZ",
  "key20": "4NgGjpoznqX9KVH2bUEyKamPpA78TrkNT4RXP8M6pLoYgtscDsafLiezcF2PJXrL4oYZqNbWUnJmaYyo9ZgbhUoa",
  "key21": "4A9RQeN4SSwdmkG4MXqW4B448nsGYvfqt6XJHo5wUWFqNQG28erYeRtJw4GWKkP8pGqxwsNyAkTSsWAzMXfhW5T2",
  "key22": "62kbhp9db3a94DystNkZp67SX6TkQekH5iMi6dYfwAWVF3RphGjiFfNADgjh3GBQtRamSWkzdqMDUEen6GGjuddn",
  "key23": "g9HzGdfSXEBaoxA1KTv71NCnSaXWntJ6RvjaGGmZDK3CwUr5g55NAPvpQpPaWXUmkHmBEyteP7dvwV6yPyP8JMR",
  "key24": "5E1jmiRoS4QkziBCKwhR7qMeAeD6qEM9H7iXwCaKxaqugiikLL8S9peZADpus7wvZfWAbsiZZARykaqh63Yc7z2K",
  "key25": "2hV4JMfZ5hJ1mFG6rhMNinpEtuwvCBUAw8U2mNhnBxdeqPQhLJrfKz7fZkeop6DZ2oKUJTqMstgePyr3RbS3FA5u",
  "key26": "roSX6QoDZ6yhK7MkZ4jaau4DjmkFSFKBWczSv3wViLu78ABNn6f6d8XhvnWNWf5KLUpGTD6dL6WSgLg11yxgURB",
  "key27": "4dopi9wZKxuEeZjEV6bsjJ4erYw55gY6vkRejQLma7hT2ZYgu8PzV1AuoN52MhNbJUc5BLWrgrrQfLQoqn65RjUD",
  "key28": "2QVQn9U1u2HZUJE5epzG3ghqHnMSp5skh8nfYCp5mLcq2UZE1BwgDWqFwMoBTqFvHyLp598EBV5jPfkMziGBatNg",
  "key29": "G28tLaGUkGPenGrLMf3xYvswTEz3xY4s5tZxsR3VbHvuEmqeUZEQquYcYdT5izZotp79kHB5c4V7D3fawzHos3m",
  "key30": "3XpPT8MLxnmCHRLn4tTQhx5Y9pkSjDeRxeuJp3cJCYVtE6wJhYQrhcf4cQiPhi5QJ95YjsEoGDwg8SSHi3AYrD2y",
  "key31": "3di1WWMhM1z7MWwTFqCZBFK1Wb6qKxw2VAmi5mZtrcuYEEPBxCPSzSzr96DYMBNwbqMo2AuUqSXdfewk9CFXX3Ho",
  "key32": "YVKNiYftXTGz2VyZ5BxjhqDYjowBdejCk6VjTqFAqvXvoVRhabaMyWQj1jjhYYKRUJXQGoX66PqqLkziJYW7nRM",
  "key33": "3DZunhxBy85ENHCF4PBaTHnUvmkYpwcdjz6JdLa5WvjkdJWBoFwpBNYJJwJca2rfZpmUtQ84rQrK9MxQnPdjmbZW",
  "key34": "42jgx24bENq9RDxB51GugJjYsERDYNvrMTqr42YnN3KUxuZACVadXvG8wTGiEkhGwZnQGNgpkbFaotoUQSbb27Fv",
  "key35": "7bMAkCfWf3XoEo4sJyz5vTdbvVz8uCpzXpQVt1Gqx8sBgdeLZRmtw6R5LGzZbcsVQnTTQFJaQnpP7A9v8LGsD1P",
  "key36": "3WyrspxaxRLU8CiEo7z3DPfbRdqzimvu2ZPrcFu8F4pazYYxvc43UmkLoa33fUKhjUqtJggman8y8YCMjvEpKioE",
  "key37": "2KfMTmXNe84qtRmUJ3BmL2TdhgHRb7BzvRgU4YJEZLzCBLm3XCPNwCoZvd1uabpMPYNE8moYKdFoia1FG5Cw9UK4",
  "key38": "4BYaLPxg7b1Nhqc76rwLzLxpvJwrQuko3ueRCniYYgRHdQwtM8p485MrkG8tQqsqrewj145vZjr7nWojDQ9AsQxE",
  "key39": "2njmeD4WjpT8CcRFt8u9WiKfzTfnHi8dbziraxoG1hjeg4ave2rmPeQPcTTiDi52VTSi4vwHnvKFKJ6uRQLqGHEB",
  "key40": "2rAQ2311fA2uL62GUTtpSCoTQCP2ZL86kq3TZBzUS1pcT1FXg1cq9wsc3CvEfVzrxReWt2hhynfo19p855Gk6fn7",
  "key41": "53mChKScRF7Zs7cZXymGDocJNC2YmsSTFbDVotLVcXdD7eXcGa43nZaDJF4NE75Af3AkVyBJwVkv4z2yjpsRJ1Fw",
  "key42": "meGiSezwcnFTVjz1rT5BC76Vujxn2jhruDmTZniZHNp9qt5sCMjijTk1HLsB6cjFTuGu5mfXzQxLZZm7okMuSnU",
  "key43": "tKZxQc94WZoCVoNXLnhTQ6Qu8DCYeL75qLBS5XJxh19BUrEJ4SmWJhHBKmZN48GK7yLrEe5S4tXzkfVNggUYEtv"
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
