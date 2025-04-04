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
    "43nGiPU9xTzDk4iv1Fv7dH77FuGuAT3NQLGWadFmeCnTCnp3c3xoXirX6dgznLSv52iKBC12m16dGNEQVwo957gc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AhdZuDzQbBw4P826tZhSw8RxH4SQE7ePcBce61GRqyjLiRvL8gKzisFjNmCtBfgpcyrtBxcFvZpknBcinxXdZGq",
  "key1": "d49gQkLXykSLAe3qWspy6RkD8B39L1osNTZcnjbBwjpoEjsYYu8eTFemiQvMmN5oo7H4EZX9bASxTZ6shqB225F",
  "key2": "45epQ1WVYcLjx5LiFbho5AB7RqirZxaVjiCeKBvr89c6xvnLrxLLApJ5SCEtQmnGHHgTfeMQqyj8J1AfGdFj9xDd",
  "key3": "TGtLH4JSQrbct1P1PonSG4d7xWnhLUn5Lj8v3ajhpzMBJhPWnnn1XYPpLHeT93qfxU8ARjPgznDm2Jv6uMn6Np5",
  "key4": "27w2mJgbkH8nGbxhEuiBgdJkX8dXHrtRXpnGgfhgJacWzfKxDYANHFmcmDHxkejTBWd1jayu98QVdvuTmiXRLa2A",
  "key5": "3LrPEGJZYocAnWJCmRLb6Bf8LJuFsZYoQozZfvzX4waU7iKdGDpqgxyKXeFYP3Zdyxteh1Z7TvqkRxejbgRWTVAy",
  "key6": "5sdgxpgN6xCJUyW1dCuEohKmeMz1f5CfYk8fxrygfKDsUUMrHtANGhn4vhUu5bSs5ELSoPrQhJfn8xaBYQivSFp3",
  "key7": "6rwAspCPGrdQJYQ2aFY5iAhiAMqwoBCBXrA3tS8FRHoRBjM2KQ1X9CUNypXRCc7iVoW9pDidkMFmwy4cAqUfUV9",
  "key8": "44QshXccRw4pTEkpP3cvK1HFQcBG2ffzVadwAHAJuvwto9am64geWfEiSkRZzP3hJpFtLiME5uhxmTSJe6XUZoGp",
  "key9": "4tTj2T3jnrwddgk3DjWtpEK6Vp1kQYMidLBQDZACq3uMZJG8kZe7Ngu5bgbYWiv2ETaPNJ8FZ9qRV1HhaNsboA6w",
  "key10": "n6XNGqRRfGxb5THiaH3LxuskniPVFfWg5dsrmSBGnYBTbZkbgt8HVmjAS2ECmhWZcX31UZgrPX5ndfMzNjb4uid",
  "key11": "3uXmSaTWhZih7uTEesNNhKZcnHXLaesg34FkRiqbQKLHbGDhcNrq1Sh2RH9YCMLy979pbPXK8fJP19JsWVyuts6s",
  "key12": "4mDw3ECH24FNvJsNF5iMA3KWe7Zq2MEj9i1e7hPYmrriQmfD2z1TQ4fXFYAiCw55Z66fL9SSJ2cvBFcDQrY9VC1A",
  "key13": "3VkBTDhxdVmnmWQcC3sHpHt66LrQJyvtiyT3x9q8UetpnsTfgDukCaPdR1sj9eFrTiRB3tRArRPmskTj6FY6whhQ",
  "key14": "3qU2c3kJ2HToHx2k6Y6nJc5LieHT5evQxuMsE5VS8ZWnVjjZMxfdAyqq9ZAQWHxGLKGzHV7LHrRwC8N1sYhrVH7e",
  "key15": "5zqkMWSSyQx66UL91D6FdjmzadVjXXQxkkdkt73dFvPtLoc3GgPCv3cQeq2PEBtr3aPtJmZi37hNviwNtSfpPzXP",
  "key16": "3MgFhUSL1wCdmn65vytNxGoHVXJVkkLzrqj7rX1uNYswaQFUv13LetUJHM2JEpBrFoiMee7J6Q1bA9bJYCdWf1kr",
  "key17": "659Ep1Ya8jk5qqvkdUNqoHJ4ZDSBBxBFLo5b7sRovRLYQBcR2hTwhT1WvK361VLQM2TeWbn24Z5qyRoJTcAbdC94",
  "key18": "3eJdgk14vz9SosET8m2nQwfYHgx5S7uCSHShbq4mM6qNdcFaSA1hKJ9ewD9SgJkscJ8XWSjUEmpnNqBhSZ5zNZX3",
  "key19": "5GCbzZWJQjBh3zGJgfRcZzmGfZPhyvcNJvoMUvuN9qNoWQXJhsDcN9ez2fdm4CBjnQ1uvneDcu7dEcaJHmYfjT6y",
  "key20": "36mQMsAKKqQMBDGCyWbrjYgTUd5RftA9R8QpNkWLJ3CVHq5dEJpGnwLC3L6imJc2j5HVCtRtDoTaA83fDXYnEzJy",
  "key21": "4nQ36gY6swKrox1R6jAwKkZNfHhoj3ByCNndC7MPznoTmXWNisHdTe815qwi8fJjEEx44JG7o8pNkVmHurSJRFH9",
  "key22": "NBEmAriboRRDVbuQcu6KxLEBGZuvmYRY2AZZneABiVmWx3GnYKv4ksMj6FxxtXyze59dGzpmHRv6EkAuarMApk9",
  "key23": "2VwpotStQ4Nbw27U3HdTpfeN5yn4tu3j5x377LspEgJK8yGperi6oXia3rij6u7HTeqUhZZz5AsLpsQC6yNSmMD6",
  "key24": "gTJjbcoyPndSjXAQxFPdLk7pKBBcf4unvEjctfiT6A8eQkkBk3qHvLuL5z3xcVC2crgcUGvYtRwqLtoinJNz3Rj",
  "key25": "3bo1HSabH95aPa3SrkG3XRoMTxh6DiQiz6bXRfLCXuxT9YyH7Y4YC7W93UEhepvy5xKh3oNqN7scccVypM83fLwo",
  "key26": "3QCm6XEzpxLfGpjsTcoxjPqFAjCV3LzPjbrGbwhicG4gdyufChwK3nzWRzUdAHk7TPWigXpaMtyzxQVyjNzy52FB",
  "key27": "3DGJArXmarW1er6emQSnSK5jAdesCQd1UiuHcDYobAHsMLARbJhUEus5nsVzdekcFcWuGJkGFPt1FkV4MT8sKiy9",
  "key28": "5MGmBYhZrcyBaR554JomzH7B2AGmynuJnWhfv6x2smKD6L5o2ZgeYmue5urpTTdLM4dm3k4q6kLEA3db1kSxeAJW",
  "key29": "4KsmpjDdFRy4Gk6rE5JDgvm3kXB8oGVLbLrKLHsuy4od4tTVLtB4xyw6A7ewxrho6253f26a5tWyzzogM3Rz7gPE",
  "key30": "4WskeqNdUAtEbaBeTQRanLcTSN42mkSHPu6dLqRkoYtYWizXbPuw4rte3AWtQ4868EyEaKn6fiNywFaRjmehyWsg",
  "key31": "24mc3AHgyFmBzbQaS8hsYJizDhVWk9jS98g4G9YmjZzgwpq9H4Yon26GJRYmekavGWzwNF8ZpSporFx1FS6EBcGC",
  "key32": "45iZSE3sDsx3sx4fqkWq1BfthTKZGMCKQoTvx8yLHtCPQEAyywA6dHPrTsRP7wUh7fMYH3sbdSH1Go4mDjt8bDAB",
  "key33": "5dVn8LSb5XzZsovns1ZX15khJdRFSGfMpzvETUTHzwu8FJJCvriWjn21xCFMoBu48TZSbYLbFGqV5K5HVwSRrh4a",
  "key34": "Vk4K5axjADeRCz2Uv1avdFghKpdB5iyQesYnZDz4EjsT5yndS9assktMEnnZTb6ECZigiD78T6LD6jyH72pmv2y",
  "key35": "bQ89ZK4h6mFYQiJLefZcAk1TWKzGKoFgw8Hd9kfjAM5GR2aHks4Y5CPtKenoPWouDGpqTcPge5Kz3oSWLkxmtrc",
  "key36": "5NJP8hjYzvXsRLXP3LzXFruGQnnHQsnTBj4mjYsdfodCCapU1FVBNERc85XZcQLaXNoftV65XHdenUHxRBnp9tbs"
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
