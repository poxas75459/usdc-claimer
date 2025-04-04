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
    "4nfGZXTC4E4j7W31b9DQLtUu99svEfTqCqKhNZ4g6BRrnj9w9e5V9ih7Dikp7sR1cH25EqgYST5JauTPer8CsQCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fwV2kzvekQM2stxYLC1Kks9biACngtau7MnTswZXcvFBr86fyGFD7w3X7abeK5gdRvdWzugnBpt8fwzq25yCrXf",
  "key1": "4Q4GD338zU7CsJ9wXhaTgrC9gBSj2LzBJW34gXo3VqbdH3wKWaqBG3ZrknpKBnFgRwkeduM6qYWmrWDvDxZeyPbQ",
  "key2": "4vwGPRRrTR7rSq19gGRQi82azo9VsarycX1ub5j85s34totc9jBs1KgoNboMUdM4qBtQYj5Eis47zyiaLdaLPUK3",
  "key3": "2ZnBY3ijcrJnyHruRba1nKLncNZXbDnU6oBNyfwD2rGE8YnApANAUugnLBsoBn82eSTgR5Te356mBCi3ER7Qgujx",
  "key4": "2vTQk7V8nR1yJpybarYxBSWZjbFTvMm2tFcpghSE91vRpRs338j2UeTLK7cXRXNEioRajD7Kf1FNjniVGuBF1jGp",
  "key5": "484kKmJiRDpwBeSn6x2PpW6tUbm7wLBUbuF3fAeD9XcqufyW5XDVgeYnqH9cE7sKQ1x2s98SBgqD3kqwd3nPEQre",
  "key6": "3QEwgLyw3CsrGPZKCcQK9CdTfi5yyHyFy5DCdoTZCEgpVc8Qa8gqu8oDA9V8sSd8XvLAoip7azdZLo9Q4P96LN9x",
  "key7": "5qjBFeYFHjrgBCZUC9As3MuveLt87dBSL6EveQrxbt3V6SHG5PRTXGrhCk1XoDF8D7sLucH3RBuDGEzNXebfhFV1",
  "key8": "3Y3t7pPsTxKysaXhARsfrpQofvAkXMRaCuWy9VCLpX9DYynhX3KroLPnrmP4PjnQmhggbnmKiSqvJiCd3kf31bzZ",
  "key9": "4vtEZXf7Z98FJnx65aUu5GTfxPSY6NcVfkirggHq9gT7rCzDZqgPGjc5zoTUY4BPiZ9jfYroERu9yswfqdJdMchA",
  "key10": "Mbyp8nYkTRgsCqUteU5qv6DfGcDbZk6k3mkE36UR8MFXLpkQpQYiAMTrNU8hDayim7vm6nK2EE1o65buqmrBYFW",
  "key11": "3ANwkwnwEgSBhY5oAdBt9EEoWmXLEQ1AYSX9Pbn3tshVFpKRAKRbM5BpaxRxYH6k6FV2YwCF4vQwS4jbwgSvfwgH",
  "key12": "4A5534SRZ2hCgJDu2t3mTtNyQndMVyWuZWDe1TZ8Lv56iV2ZBYpDJKhYfoyPJhXf4J2npFPseoJH9owYn8yq7xxm",
  "key13": "Vzmq1GHhG42zBnf3FFNarHr9rvLzuUj3obPe5byHNPBahBfS3aehvTLqkHe3q2eQamRHWqGjRT11XfttesysvuJ",
  "key14": "46iVbpVdRBQXbR2TVbr4fekZa5LNotKJrsqhq7nR6sKG2qNnZMvFBRLjEJ6DHTCZHZ2NHBYaDghzKGxY7rBemBE6",
  "key15": "5nJkJuCRRJQxHkWXiLWFdF3oEkE9YjryYkb9iE9WeCNAfXUYJwJWwaP3nCkLQg9pYWFRhJbVFrS4gacBKWbEWoet",
  "key16": "2wtzAwHrmDXF6NobdrE5xXe2zieAjZvdovG8vnE944QvDqb6uXXKFFQtnqv2VhsD2B5172kDAsqDzBbJQkxreKYN",
  "key17": "2QRr1ewRekg3Ts5KWAD6L6uqjGrR4vfmwzAobm6kn8wRZ7fidYwM1nXb5JeZiHtqkggsBqVf7C8TJerW65Vz4zUN",
  "key18": "2iuLseNoFdYjTivcS23RiuPJUsqYUyAH4JeDdSYJ5ztwJHpG6fcee4DZtkTWhiKXQ3zSq95XchHKiEeQBn1rHeq3",
  "key19": "42nXWDfbZ7e9vm5Lj9jPvDTZ8KUHrHGqhKzLrtzserxgUgoH44tUQAqwkDzzRke52BSkHSAD29oJVTd6twC53mng",
  "key20": "Xc5tCnFsPMTLKmuRpHg9aq888JcHcpFvdJ66B6ioEgjvhmfZxSs66T4GqBgg86X6mVfiX4buNxnYoUShgDdASKT",
  "key21": "5pxZHWMQSkwXyp31PQnxG524SJa1mQqdmqJ5FiKnZWpxLoW1BDNtzzyke55nde5KcauWsbbeb37k9LFowLD4RR7z",
  "key22": "5ijP9G1z3UQLg7CAe61zB7KnVgskDeL7Y89CTnd3qSjFyz5sFg7bovMMHz84qjRE82jU1TcSFSJhDioM1Dgxhwfw",
  "key23": "5aTqsFm2yPxQGbuNA8Sm2eys3Ujkg6XkKKBzHSk5UqvKzjz1TJHpD17AGEQTAJW9vv93Zr6e6SNhDQSwkoSahrX4",
  "key24": "5XqiTx5VL9xnu4eWxpijiqgaJwic7dgZYeZJLt6atiSXXQEMpmihxvuvvxHiNcBGjm5tTYWeXU9UMzwBKXrdVRED",
  "key25": "2r9vGFZkEEKPWnhAooTefvn7FCiXZwY837iBwQLaymwdyLFs3FfFYvqeGN1HUu2brejkFXZf63LuPjKmZLsfQHk2",
  "key26": "5gDsCsu5GcehtjZGt69SEjJex9e92YaVCGCotLLSQvqEH9Ri9UME3TihbUM5PtAWvNtH9qfoqkgsXKdjjunxaX9T",
  "key27": "5zjYZWiNKQ6SnmUHuWTKNS3F6Tc6kXtNvdPSybjYLVVFv14ySrCDn1aU1fqjkxEPxi9RuC5camzNfLuXRCPvp14t",
  "key28": "GFMYP3FZZiXui7fQ49oSPPrVaCCtaCDTHj7YmafPZFGP7fHLYaMMMYZRXiHV1icTavaGX7eGRZxCcV4Vs5upKFX",
  "key29": "2R88N5VnTFS7TiUupPPyh2hQ2GhyMqc3CWT6ewcF6RTEMS3BsfDxvLQhfXwpzc9hSuYGbH2ykF9v7zHbgM3sxfYS",
  "key30": "4XfxAwNbsvDT1hWXvT7aoLB1EUwb5GdqHWQKyjBoGppU3AfKadnDGgseUsgT5QqwgjSTWCMpXaERFUe17JpCjn8Z",
  "key31": "sUCX2hhMTZF2kpFtpmruyWCrGN4JVHzU9Cg9fLu7M99cyrvPjJpwyUYZwCHogj1yoLR139AEH98tFnsg9QxrEEW",
  "key32": "58kHXENbT4arcwBn1jrXAVXjrmp7FAk5WeFuPGQCSaBQsbjWQy4CvJ518pc2XPa48prGVU2Mc9yE99BUhuPrqwKu",
  "key33": "2rB1G7ziWGrsdM1TNy82cjdx5uJdQF6rjz4AXFmkNmRoAypYrvW1JiDH4fwZqMWhVHodb37Mj1NRr3hi3qhMMeMm",
  "key34": "3QJDtKEFZHaaa3qobRw7dEaAigkdwGLoJEufTAzQuBrmMwv7z62DdsEacDeMadfhfhKdGfTeCc3wF58xPXTbTmoC",
  "key35": "4JdCNqxXcpngqU2urd5c8H65tp3J3ZbnnzX5jLNxWYBWLQ66VEMQjA6bByNJ8XnXWpssff2dYJqKMWiVY4i5XmpF",
  "key36": "3Hj1w8SvJQWsJiwZUpBwqsQJXrLAZr8nFwkwT9qrSp3XVKXacAGHtoD3Lo5yZMwg5BLC3PKkaxZV2KVCdqsWnbNv",
  "key37": "5xMGW9AtrdTCZo4RMdSacFeuiwnwHQVqcHjic5oHyoeyxHRYabjpzSqbgNwgPuUY7itwqSPCmy2svriJ65vES1YE",
  "key38": "5YCXi5RrLTCJxY3eK5tUTpPZNRbRYU8gB5cMmw88mrTkePgdwdtGiCo8yENwGTTBQqpWNzpcJPo7q1DChzGh8amb",
  "key39": "2rL1CB5KHmfuAAbqqf8ayrMmviMAuhg7gXcNVQ1HsdXWf7K5nte2V2rrkPkugwSxMgKahKExfDyG5fxUWyqwx1sg",
  "key40": "4C7qeT9Vt1sy1sV1tRjH8eey5F4niuZTcF924QRgXoccuxwuRG4w4QZUev2sBWtDPrSHnwPcwRjRnTmverLhiFTM",
  "key41": "Z5BGNTrV4XLk7uNqydbePdypU8PqZfmPvvBUYkJLM6yWK5pYiQ61hAwnwTRyTREc5xgNWfEt6Hfbfq2RTjKkVt3",
  "key42": "fi7Zi22TVeS1GxXvFHyx7CwWgas13XjXgoh2MMG8UyjtCgRSvzLPKzdoLvf61k9AmpjGDYJfVk2fyX3SLmvwEqH",
  "key43": "4N9y56UBPEjkTkqditkw7iq56eNsrzGMPvgobPZdp6z1W65F1gPc23bxNGzo8iP8cJzgKFXiVt2GH5eCnwadvjuG"
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
