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
    "21hZUfRUabr5DoU8xebAq5c89wyV3cXgskMj2pN323c5yZJnkb5LE6riB6b3enUwzaeYbqg9n46WcKRCJYFXMd8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f8xiinYTEKUKDwavcaJMd7NBsKtEQCN6mrDk7UNfdBQ4oeJ4mH6WVGpQtbDrEs9CdbiNnMg4bvhZ7WVrN6hCymT",
  "key1": "3tTKC5nwy6aj5reoZnurLED6H7m6N8NRA92poUc1vzU7UuZXw7mohsvvc5mCivANjN9eXdXAjYR1EEnSm6Z5RLBN",
  "key2": "5k64nU4r1h6iv2cimwmbAx8TqXL41rpsv7nrkgtW9V41i9fwY6mK6Lq7LuL4vBcAgLm5kcHoEWuYXcQKstc9PQC4",
  "key3": "2UKkjPYL5nuXvMwLVihXwo7cQFvUxatMC3iJ86aGKBYCjCn7amhkfzz3r6cGbLQ2S2CNdADHxv1HFZnC49tndV3B",
  "key4": "5Zm4wa3YZxQjDu7JTkmYQw2jVMThCwWSkDT7aJ7coyd76Cy9PwUbrNEvkCw9zY3ppbokDmRP8icmh58gFf9TPCC5",
  "key5": "2cTe6ohzWtXz4qbY8vUPAfMJ8vQRzQrZvMweQvEZZ22aMmEyVF3WtRNgUwtWoYHHhQjGTGUppJPDxGAgwnvGKH6o",
  "key6": "kUxeSET5DkjfVEBLfFpgJffpaoVC9N4KE5YPhYBNnALMinmPujKcyoRxGJn4NWVq1kFWu6jWFEQszxVJoC4UZVD",
  "key7": "2XwJzg8CVaKXxhVaQ64kqSAuQQFPE2D8kh2cez4yi2iGvVLwN4AXNnfcsCmkXUCyxuEDG5dcXav7KEebaGsVKkic",
  "key8": "38ZdePQVs214zCP9PU6dTY9BLvgoP2foi4eJDyUBaKN2Fkt2yzhonNRUsisVrKPKHXnmmfo1iNH1VnqjGVWkZDKo",
  "key9": "YGYAUBTPJc4LphHahyFByw8sndC13SjJu5zLEpP8YVASuYgJVoErLW9UkKgUCvngPUxJuinzinycdZmYsKo5bvp",
  "key10": "5NoXiAxg4eF7MKkYuD8NZgMPDTbUH2F5SE1W7LmqTpki1Bnu7SJyH7FGzLZmoLbEdZR5pkyzFnoJiQDtiNer6FAD",
  "key11": "4ijUKDWhg6iq5Zgrf3vkmm9EFZktipktszoi58Q9ipXVnC4i4qL6TBinEagepn47WgAQJPn2m66jyYT2Luh4MDnD",
  "key12": "2nNeqftpeGhfhpSpvFAhPRLU3CJuJfyUeUKTfigk7UbAkRmtE9WR8ZRKvnnnagVCsbxzBpM1qsLodvoZk9qpgyVb",
  "key13": "37RjNPYm8iNDWFt9Z3LpgT5ttx5tarxNAEUk3cxvVX39vHLGR1V9hWMmAByayohgMenP68JJE2Jutzn45Kp3x6FA",
  "key14": "446GHnPyjvTM5uQQAVdekSPPyaYRa9msy31LiWpayxCa4f84Czd6quApmuQNxPksfivBUQzahbEkhnm7SQboVdhP",
  "key15": "3eEpzeUFdUC8pkvQgF2dXU4ucG1xRJzvWx5wRM2AA7TJ3icwm1Cr6PfwkF49N5nG7LL3qvdqaUGrMoPVkme2tHS3",
  "key16": "2XRWorp2KreqpKpzRb5UxD15q3jDqL2BkNeoQ8ZwjKKLx6TahSg3epuvEeT1vS8UeF7G17QYMHGi528Axv9TvdeW",
  "key17": "Gb5RLrkNxMSPb68Gmhsj83wwd3nbh6G3E61TpKeFUQmQEoZbrccrUnDLvCUwKAA1ToJavSWfnbecL1mZGMLEfq4",
  "key18": "4QDWciUXJBEBgTJd4APo3wgBC71b14KSfWo6Q7J2uXmUyUQS5MdNdDerWZdjFbzEkAiwM4Ro3XyJcZ6FvcQdt2LE",
  "key19": "5bTpv1bBFg9nPvCLMAeFqeZRew1JKkgjStZ5YmWpFrU8K7YpnUNTUDEbaxxnqRNfZDqepCA6Q8mHbq5CEYt6tZBm",
  "key20": "2ER8cT86dBr7DDyW2L26hRbEXcaDxuMf5XCKn3b6GtjeV9XbJsj8DJs2dsuNcytwDLxLVrUvQRJRzp3fzj6vk8Wg",
  "key21": "V8kGBzH3vQnhs4JX82KYELJZKVARrby9Zo8CxTw7ujdx48DZGAbG8YjQVNeK2YvJHAdxfuca1M9xCZiubcHxsbA",
  "key22": "4EN3TCYNA17K4EUG3z2AXJPSjYXzbnAcXfm2cDb1UcGkDZv8y23vNQZhtMrgwFqmMaReQYwat3SKAnnnC4e9fxUo",
  "key23": "3YXQMPTSZ29XGvTCg3uQHEbuJEbSp2q23GBTCW8LQDjynZkxgwgTipHwsAe7awzWgHKG2JipDfXMUFxNxEPv9r5w",
  "key24": "3HhYznj9yC8sH3mMwjLPd36N4eEzvDy3PsQDaU8zhpgaBD1zpd1TbPLkfs71bcMcCYc1LiAyLK239G2T11pez8iA",
  "key25": "2SsRucUeaYnzrc21iNiY7Nu4MjcNidtj81ttuuphf4uj1E8nLRepuuEcVnYFv7oddWhoG17LVHbbPMVRo7uM5U2b",
  "key26": "5P5t6GHRsqUZMUNBmjA4U2zGyyEeTTzkTRXonDX3FWpQ1dWgs32fb9bUPrpbGqXZrkcxLrZNEDGKDqqKYgspXmvd"
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
