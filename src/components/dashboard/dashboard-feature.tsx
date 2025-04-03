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
    "5TfjTGqosDjZrove12grhWKZ4wPdmFnv2yKvRcrkxzUETP56vbrdER6wxyLXf4RtbntSZ3VAis4fiXRTGdhzkSrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55MqxaZSCGgdP8iXdZczq4PzpbTKNuPPYqKJ1TeCaNSBcnAaQf1KDS5XYYt5Ejah2cvNdhtxXKvcXZFi8WtjqBwb",
  "key1": "3fQvX7bDDRvkazYrtobsxkSqfiCm2AAqcnHpsDwZgZDyQ1Mb4rniSFLV1S4aaDem8GLeMBMTT9vMGXjQcm9hZQbr",
  "key2": "555wzzV1cMjhcmAZvRvMy2ciX4ppQmA1dE4oFs7aFMnRHsumLpcvVaGWQWzJ6zyEKSXCJHCZKt7AmeUxD28hyb1g",
  "key3": "4sCyY4eaEtyvK1FM1ZKReJw9RfBQizKqEYqEHUaM9bCrx32wDZNGux1TwkxMPDGe3fKpatdpUyYQ2cSKQ6JQEbuV",
  "key4": "1fUmbhBzu3wtkf1nnfjcbXFJBniovtnVUYX9PqDugkJHo5UHSkZ9FyQQvJdjrZi52tXKFEs5Kff55q5RERwFWaH",
  "key5": "2eYeqnFPHsfaM2AeREdBbMy2yBihZSnPTbnTYotvyuqBuUerNWbXCUA8UR8YqEGEiCUY8crARgg9mFYV7eSBm277",
  "key6": "231b5Ntdd9rCTE1Lm4UHpEF2Upm9VGnT1qfAieQUQA1YXt4r4nwMk8Bq1Mg9WhSHb5MkfgAiq7MkKnxK3A9qvQY8",
  "key7": "5HnmF6BKxqQLKetnG1GZwkUd4mLWSYGfuXuonPgYgeN9xtpA8JHGFL3tdzH6Ra1gS6oLqhqyrcj8yB9iq8Fuuetb",
  "key8": "5ExJWg2cGshjhabUBcHw2woXoxpxJStmNw7MaVhfNwDj8UZeEiTrLSM2dJ9hH1fBdbgNHibpWeancDWa7ZcpwvR1",
  "key9": "3awACjFkByxsmkAfHy5cXcnmGQtsWYBXU4hmacB7L39cnuJXpP8r9zyUC1rZ57hVhyJx3B3MnZB8BvitABZbb5cU",
  "key10": "4UAX42LHFBAy2DHjA189PkbphqxkCfcj4XQ2Xo9ArcoL8bFzF299eZ5cWyRCpYmboimQck8qw7eHEpNcNhguMD1J",
  "key11": "2ESt5Y8wXUP3N3A2xM2Asp44mLq6kjjzoS7Wx5URc1FW2JgpLzX3cM2Hsuv95Kh5BNmSLFVNMGgqwREs3X9iTTsz",
  "key12": "5mxysp9ybsekJzZpKJ8CQxrumAXD48QF3a27YyKLeJRuZsD7sSDzjC3FegQVmAy5Ccq5MrY3ufzkqXr7NDfm1Ftx",
  "key13": "4ZHN9RDoxNji9m53wupSpTUxh6Ghsoya7wVhUPupDoRMnFujuV37T95XNJUp5PXhHDKFhVQZUektWcWtvU3PnM7",
  "key14": "4XYVEq5VcwYnT3rHKfivVvohy3W6nE3GGT2fsngaDPr3iKVAr5GayWK4RTMyrSJZ4enbx3CkSEBY8bXhgKi5diR7",
  "key15": "5ZeLaYsjQGW1jkYGYJQmevpATVa4BKCEG9LLw5JGR5kkv63rNZ5sAjpBK8HXXSdXfCrkyGyUkegFpRXKiQF6j4T2",
  "key16": "4DXH44E9ibRJncboMzW4695e8YfzqF5C5wncjfPWyCAepVSQaxWhUGgf3eKzhHSt87HzZDYeE2D1MqKEtefYZepk",
  "key17": "5fZYMKRVc23RsET4dtVeenwZTWjiaJJ6fudfRL6UvigVhjEypiisvp9RgJLZfGBEJbJjdLgWUV76LFSsREcoHvNn",
  "key18": "1CiV2hAQMv1ey4WQk37GfJbcs9sFFb2nEJhBZFio31xp1cjPCKqxeGgX3JNUvNosQwqYomUHZtHqmnvLmrLswzr",
  "key19": "RiFbbnJGE1TmX1QRJ6b5iGuRrXgeBxye4urLJH4hW33UtD1vhfQJRGKcxJvSyEQzu39EneUqe3Tz9DreaE5uozR",
  "key20": "5qqdgbt1gn9ydNG7MkdtScyH2erV5agAkSpMPH9kLc5A7bWqfMnj4hKtQvUgS8R7p6b5rjpvexMh983cuHhwodjn",
  "key21": "3z4rmjcTU6376kaoJ1aiXA6piL5kaV7Zf1dQPxxVU13PkMoao2GcX1B1t9ZVESdzBfg7ZXvB9ErFuoN1grHSNQoE",
  "key22": "2iikerbobWzLyDJ6hmypjLKdUdgd3F63GHGMtXJYgrR4eJGw94zRU51Vg8VuUS7jtUMKBvsa1HfLXJHSMMfP5Hdv",
  "key23": "QyfLiqLz1U2zWTQbB21fqoCHLKn7TVC1qxkBVGgfEjGoYQc4NcM6qqsRHXXa34b2N8THqQrK1wY2ZwB8NMEoacU",
  "key24": "59dTkffUQDcgy6DBFp3a1vUuYaGVfQHMeAWTQJo9dUgg8q1xNbKrB1SNjFeUjv9gh7uWSFjYv6wkYjqS35tQx9td",
  "key25": "2cRbtko9LoUFPHJBc7yxMquLXmfPZ6ZQVKLMXrRutnigPp2hi7K1jdRAubPrBpzRaxvghaHuC3MYY2tTi6vAZeNB",
  "key26": "4NcW6gbXf6gsPrfvkW9dNN1B1gydJiuCqHv2Pu6vqqYBpd5MrXUm1k31XhdWNFtdEYundoDevMFsXVmtnsoCV4BZ",
  "key27": "5bMVRomsVbcoU1PcPQWuTiE5kBXWnSf2ERABjkhZ2RdmbARkPBkio8SUVWA9QuvPRKadyV4FMLMbWyn7UViJfLrJ",
  "key28": "mr2NxhQc5E6WVf4BnHCdTsZptzVeVRdtD5AzNyyKL4GUfPfm8x14N5c5ZXXh8ydTtGjsBMGdxDoDdUjZaVNeimZ",
  "key29": "5mNKhct8ZSufMQ2r65UiqpeNn84FsrE5wJ6TfBRB9k1RqsCoNdXWvho3zS15aYe1rvTnStL3PN1ALcQ8uKnzmgA7",
  "key30": "5RT5fbeW3mvC9ohN9wjckCbQckJQzsstegjqSX8Qds4AKtA6pVy74gcocAQFbWbbB3R2zN39A63kW64SyLf4MVEF",
  "key31": "3S7uH1jCJJhncG6q9udKQ2wKKepmjR9HbRyLLZLjdpxG8iZ238oMRpTsHs1pLHkPdtKrxsM8BvPPpHTPhRuNxr4s",
  "key32": "3pWi5Hj2HsbukAKGxaUPakfgpn4PWniCU79qVYaQRmhbg8JqQR56TUvZi88jxPqSzHCKno2DGrH8wRJgsyJi4PYM",
  "key33": "vCsyBQuZsX7zu7vNGpoFHsjHqY4CV2fFno1z8h2299kVm7NiRnmz4ErJQ3ccAq1mkovYo6Dv6MJ4ASjB95Ywi1T",
  "key34": "3ZTNHhi68oLF38q9FQ11XkdM2zt5HGKBVqKUHx7V1CMa2rWnke3vNPQaT728Hu3r28YmsTefhVc5Es7f5on6rfKS"
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
