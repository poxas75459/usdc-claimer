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
    "3Cfakx3WzrPnwXfZUuUASkoqveUL57kbzdPXzjDV2qDYAv7mDgdqXjezNHtRoPsbib8KAeD6HyoEKXNWt2PnnXu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tfd2ico6zoVAjqCjyQgBhzXuLYTfPAV772uzy1u97H2LWW1WGePEYEiCZaLNVkk3f1FRZAuW7CQ5m4YuER4G3be",
  "key1": "5ANiuT54vx1U1ViryayWrx4D827PwwNe1vkihRBT59f8CDFamShRWRaJdqMhre47FnJgy4hjjPfHKC6zUy5UUuQi",
  "key2": "66nGRw2WjbMRqoECeCcRGoVgPY85uCFXPta2G4n3RJUwSKcYejPQYqnrEZ12dvTUYYyQmm3sSDbS3ufNwGkxWt7T",
  "key3": "4ygbZk3jgo1ryAEDKkkzMBBq16wfnJZnKb59WBt5wezQkJfDi7kj1cUjtRK9uQb7WqT4Kc6AioPsTmATfDZwRbFk",
  "key4": "53rYKsJFwdNWizMLqC5b1oL8MEd77DgH35eH243cWsCip9jmGMwJNYfbkLyS7sFT7acZSTqFERQzccYrEC3xayFS",
  "key5": "5XxtPPVJoZ9vPLJnBhrTsQF3CvDQaXEAV8NCSAChJkoK6Ps3d43GvAiGi7g5TMWDmdz92CYCVMhfNHYYkZjnpJkr",
  "key6": "39cC578D5YQLL3veML3DLYNVcB4fV4M75ao71zEgYRYmyed6gnJ7NMTuzYXYWqJrWKTQB1QfwQAip9nyxC8rwoh9",
  "key7": "aBcgT8ct84w7igZ1ty1GtzMhcqfnKH89R14Au3AS2nbnULKFSDBVgrsHwL1enJmXSnKw7Y4FRbj7ctCnXCeheFz",
  "key8": "ek4uRxUaL8BqRBXTyQyfnbtko8gtGztNF9L9rthqzMdPjEXGCjanEWZCcg35UASaiuvgoW8j8tuUaBWGXTc1Jkg",
  "key9": "67ZbhWTfdYukDaumd6T86fGpFNNqsep3DaQrPutshtLa83ZD5NWEuKCbQsi9VrPU14t4qvnVYofQh1sabDwc9aCL",
  "key10": "2aLHuwhwzeLmagtD1pTdSu1s6NW9kfajByATE4u1j1APTktH1Kaku9d7ZGr1fQmnvHnbeRqPSpgFcWer7ryZWCFQ",
  "key11": "2TMxHJ75VRF4Ukq2j2XVh8n7TDuKq3Q3eY4G2k4fmb9GCU31xDUQuebx8KhAFBjx7v5c29hmUVd4uKJYE6W6BYTm",
  "key12": "2sCGHAALhxhhv7LPq1xqtodrjx9xvVf5zMizpiFMn8tKmbxVveNxtmH2UUR9jr8JseongA8LKUtSYXRj4VP2K3k7",
  "key13": "RZg9TgjpWJVZ46nBAgcWNT5wotpu3QNuLpSfY9ks38hnMribJLt93sD5bEi8tNPy3veuh57aoMoXY8CrFaZnj75",
  "key14": "3AGgPwZVUGXibnby2bpFhN5WNL4jvHwzMCLfMGcGsnNwrYayQRrTyTVnTDEGaiwWeM9c2CjDWbhmhuQjcbPURZpq",
  "key15": "5BK4mG9gENtH7MAf8t1KSG2AjNXcNpN5TqSVazAgqEEWzJzjg2zSS7MTED3N3mjmPFMaEG1bFkifa3g9uQmtmRXM",
  "key16": "3kd9XZQhUDfJey7oqkoKVGjtw7dksnRpSE4NQBe3LgzMtsVTgb9F1vzr8PGuafyzG85546j2hE7CReZxUp6LaNyF",
  "key17": "3883v2iJKFW27KjKuKfpekJprH2W95J5PxYdncSwvCPScP4W4FLsY7v1gjzyaoES633VzMBpMjZWD7HNuPGKcaHb",
  "key18": "49mwvQkxJf1zuYyACtVrwpUzvsnjYrguEGud1XtYWN6TkH6BsukMjSZu3EriRHCLxob4aV93VJ78tFD3BagvjLqa",
  "key19": "3NTfgdykHWJ5MAPmQdWDmjsizWwAvus53NNmqrJN1XQ72UVnYkxttENBWEQkpKc7mUtC2jH9JyzsBQU4BEhpxnXR",
  "key20": "4Lp9o9V3YQLCNs84DqDioParwequc1RnZAvuPz3bdGFkxUr94FCxHW8dLjqKvoUAbxSsEwWK4e4oAsXYQq6UZnq6",
  "key21": "3Zmzz9eTNt1gCJ8x6ut9Eh6wGHjq6zagspU6bnGUbgv6zb8auG4CV9yzmHrkNL9nTo4rrxXGkXXBuMPuidr8nZiq",
  "key22": "VWT9YByWoWu585p8YTJxwT8zfksypnENJgvBBLd4JiYaBQWot4wXGTg25esMtdgrwaZUrGxNqv48VzyXFedRRKk",
  "key23": "3ax3SANcesL8yXJyw52WFYf1Dev2GgTVs5B1zS6SBGDRfLCa8vCqo7nKtVSNwhcrBHDRQs7gY1uLTRvr51MGAcs",
  "key24": "2mK4cAyh8otNMwCdYjyhSg2dx7pzxNvqByGCS44SwvFV2K444F3Sz5n6fjUenyvRm3SdAhEzrSLrxnhhXjEa6563",
  "key25": "3rtvrx2ALjEkWDvn75EwUwSnwGKaasrCd9MM3ktMAesnDLcXgSG5x9knFzwpQNqq5buJN81aLm9xhSwxVC2hibsc",
  "key26": "3M8j85KoNR28udKo8dztkKP4DYdgynTq6ZNyzBj62XERQmKvPkFBqy55yMv74pULzRW3oifUeJm7kzyty4G9Grtp",
  "key27": "2MhH8DTbuct7HiPL1RVVWrc9kk6RCLErUgZ7ZfkT6EhPwVZapTU9dcsSFGFm7wRYRnsFVPifC8Yee9R2i7gsBhUP",
  "key28": "4MSKChxv3mFNdiwXBdnNxMPkiJmxh9yCDbgiugJPkKNXYVSTwPvBr6sXVwoUSxECqU1LUJz3XUJq7mFis9MSyaCB",
  "key29": "iqCNNTzLrcuD5NywpKzCvWJB2ZjuZNaG93X1SiXnrVg4jSkGBcHxe28Sv6CMcSQajgx1qqTnosEs5H9xgTPmDxw",
  "key30": "5D7q3oeBF6e8rCmFvGfMxVDd9kUDdttwR3X9mkYkRHb7npLEhegUTBbRJCdWwWRzqP5TiCqYrCdArBF94HJgBS9e",
  "key31": "4JmiqCgwxfSnwWyKpNiFqL8ndzKjcnHTod2YdE5RVpx2y1HZTbuNQERbSM8TNM4oKbMhHSTcxtFMNWnfcpSevNGz",
  "key32": "3gdbo61r14SAp9fQt34De1zVTg6TwDFyXhzXWQjg2cApW2byAuJPTXvQdr7rJvUcEAFKfUYgBQAh3pDYGurPtktJ",
  "key33": "5APwZ3q1H7sjojMxHmorYEiRYZUV1kgUMAWWmcE8QZcrxzj4XCti4vt77xg9WpiiSYUeK4DuxR1FoDCfL5fMC5kM",
  "key34": "34khjxx7GjP31NKJQXCkaYj8rY591v9jJEBUSKUWAyx4GtEZsdj2Y3r1GGcyuyoUJYhe1sEWd9jd8GfDJZbK9cdC",
  "key35": "3NjB3We89aeAenc6yPqQ2kMQf9mQrFjCt5fHRxFCadVzjUhV8GqfyXR5s4q7EP5nt4rK1JJbRDE9ehodUXUvSEkY",
  "key36": "2dxDdvvCsu9L2AF7AEb6UpkHMuJhhWjbREB7WtGMPEcDTQ34pcyBTm17rrbEhVR51WvmYRYXNroRsSazZQsu4C6K",
  "key37": "4Zj8PqQqVb857eCb7hkquRAaU8XSwsADpZeWyPpqDjVadXShjgaQH2yy2GZTftzDKJaJeVR5trQgQcyXpPhzDgiG",
  "key38": "4zuYnSJZQeEsQ4vSWzggHUGDbFUo4b73fuHkMiJcxFtkjKC5Hwj95i6mK1bMbSN6eFtucJpLqkVbHzc3jsQLEdxg"
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
