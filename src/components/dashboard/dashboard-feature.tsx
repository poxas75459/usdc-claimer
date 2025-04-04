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
    "46DPMvS8kdQ15YjjEyqfCk5VLNSyvL5mMCdUmbjDWZs3cr9kfNFm5yPvB2K2pJ7sswyDVGhYMKKXNYwvgZsfojpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TvyUyk4LmG5KJmLUsPSYyJd1fDF3da9g2zTBNNXnzCRVVh5PrRDMKUsmwicxn81pLWH8AMbYfBP1qoh8FjBKbcz",
  "key1": "hyM7VdxQX2qX744E55ZhiUXhmm5KtoihDPrDZCJyuxaHAnt2e79e7VdBfk9CR5mWpENoXhn84WGG11Hnkc8EevY",
  "key2": "537qivGaZGC4NWiDwhEQXMFMb1G4PhV5rYvLFMh6sipJkBgrZs6JCnrDiukNvRMYjoHW8TeBkCfGfgSPBq7Dvo2Z",
  "key3": "5Tcp6eW8sXQthrXMRJgR1u67j8zYURjVcGMEZfyYdwt5M34dfT2QRRtda78GhD7wq1GKnXBxFFQdkJqcDwARSrS9",
  "key4": "2vNGK43jkPNvgqxAC6Y97nvLh45oZsrHNceWADJtTnWPZMXwxKhJkx1cz6ChWka3CfADsXjiSwyAw8LhXBs89kir",
  "key5": "5jfbz8xej7LtdfDLJgUq5huzBnAaLPKyF72BiZ29rt7Js6xS8TVfCQAb39tibwExWTredgy3EdKbavGu3wfR84Yh",
  "key6": "JHh668z5mqaw4Ryg7MJZWFmahUNSdaoRskhjbbsfCJFVnDnxpiUe5MMtHPSWYG64kA73fHYE1Yn4UPvq1tSSjRy",
  "key7": "38GVBqgDrS8rShHs1UKjMTqFpogdxjNeqZxvwtgJLjTX7xZRt3HE82Hd6iNp2gm8Ba6ubqxCKgCnW5BfJ3sqzg3X",
  "key8": "4vb79CQnFLptPia89TJG7WWwn3TqJdYdNr1yxuZfvevtm8HjtjDR3kKGuC9MxcgWDkgy8YNs1F4dYePYVLEuB1YJ",
  "key9": "3UaAn8wjBJffTuec3Wnp1p5SBqE4htTZ12cQWWCPEutg79cy9ZQzicoX7V3pCfTSkm6xaMDfUFJo7o1NDCwg8uFj",
  "key10": "NGycg3h75juG8J5GMgfvtQkmJnGUthKbucGnBH6zavGqPJwRAhFm9xTkLHS8WqC1fDH9m3aFYhAKCnogUsFhrDn",
  "key11": "2AqsDD4X37uKh1jdg4Sv26VD1GMBrje58XvEx6CDUhmsa69a9roVUuccB73zMWAaodoRvVFvN8dyNmbgYTPoJdLq",
  "key12": "wrzhv19FWVc4TBNVmGCmo87JZv8V5Z8qoe6zhP98doFoY99u4F2VeJRknezg19TWS4We77ZE6CKhHoKFVMPfEsK",
  "key13": "3Cv7LCcswZ43YpAbkXmP1kZSZndkDMweueDdoNNFqsKQVG9oWHZNC4Xo7kLDiEFwb4fVQzSUE2vnyKNyqEVLzfpe",
  "key14": "3RzjwpLNqf4vqb5ihK61JoiNLLTNBtozNmEc4FU7JCCmz6VHq9XtLN8KSsAPR7kxG6oTLTGeyHBFfjFRJUgfB9pZ",
  "key15": "3fVgduGPrW9VqtEcFisGLouGh1vMZcUgeP6nFCGZfZs8KUDm9MibkFz4Uo5EbneV1DTd3wHNZ4VkGdRSHAXhcn3U",
  "key16": "3qShtGjkpZ6TPNmX9hRKKaFY2UrLp5mVZeEDzymQVV4oiRoqBAZND6ruxNcrtcpUXgGBN5mFFTLbKu2JyNHYvPeR",
  "key17": "5NDfr6B32kLqGqPv4Yh8zq1E1kBAttuJhbXavBHQN6q7Pt3BrJYSQJaBX37T7ZZmkopFD7h7FZ53Sx1r1DVryaga",
  "key18": "2vB3qw2EhNJyHjsLz4HazrZ5tJxcPgFguUz17MsZcKfKkU4pXEoTqSCVhry4qB7wPK8EFyEJMtTBK74uvHmCsYwv",
  "key19": "3DuAFA1SoQV29owD8V6xq1B9NyKkGkX1puh8STcaCenGFWnAQJY3Kee4fJ315XVFeQACAskDFSZCkjPD2UgWtdvy",
  "key20": "5RaqS8Qqerq8MN3rjxUt4cQQKbjPFHghmgXKJuz8dNG8Py2N44j3Z2C93CoJ6GTA5HP3RzZMRMqgUn2p7aTWbbyg",
  "key21": "5MXLtfynJ437NKoCZCKtUdTBwGC3hqgPr6RY1co3qPJQfomgddmyXYZd62feW8y9F8yd86q3R6bd9sms91n6SRwH",
  "key22": "3mHwBn38RxJH51YSua346obT5aMN1Y32DhoPdFygH93sCSVCJZdpcmHBgA5x1d5RVpBdfGHNbPrdvjZM2WLKiWLu",
  "key23": "1Xefr2mUXfiiaxTwYy3s9cNfnWvp5ErifT2iR9vFRqe2mU9YUN3Vc2eNLLGyTQNKw6jchrE2yzrQGHSQk12HCLG",
  "key24": "3umj1vBoTyW5T9Qg5QwbmY6WsxgcZPBimAGcWeQiK2avrrn5uRekhMz7sseEbNKjw6DTE2LbUbLxipkvw4A3VjJh",
  "key25": "3Qx56dGeCfrkCpF6QAaEgH5jXDMjJmt1P12o2PwS9J8CxKwbhieXM8vVSwjedzMLkdoz13TcVchPNdy7khhJdBeY",
  "key26": "XNrpvghBTU68g3JpkB7tU9zgRf5xgTz2uPqc2gBFrFkKHTeR5ZJmiuuRo8oZi7gyzsx19Z2jGjKs2SQWHKGPd4r",
  "key27": "5wcrhPD7JY4NKacnWwpT5ArYpxKiFx4H5sktJYfHok21BACVaUziKseLLiFuiynMfmD6JoKFqsgzHXvi7jSdwtEg"
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
