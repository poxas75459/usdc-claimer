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
    "26C4aX9ATuYctwguXhRGkQVYZaXLPhjEny9jgnAqoBXTPKutzy2QqXGHdBnS4f88H3QeWYgy7apqdqAgJTJkMJWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n5gGjVKkx6QJiNxapheiPaX8ticDAmNiDV5T7856dq1E7eqTgiUnkXqte6nqA6TQ36HhwcFUvw7TWXsiLawg2uz",
  "key1": "2VdXvjpuYu7pcgHHdsm1gY4779zhgUNP6JXw9MTgnoQrgi1kcrytwrNWF7LmqaVYCnsBrQDWsoPd3Hstbv9TnHug",
  "key2": "3gnFe95J4KNmU2XCGZa4m6J9Jw5PYczQukdxjju5mgwT5DgwGFdQCP83PBwi4hFPwAKBzSm25v7CadyEB1K5rGoF",
  "key3": "52hm9EFRcDXQTiQrQVeK7C5Q3zkuVEbKtEPsoj6P2sDRDA78f1LwPCgBuQtXz7pdtPq6Yjhbe6dtfbXXzdEk267Q",
  "key4": "43S3A9tNN7163JdoK2DtTybQvvRHMr2tbHmr89V7KrtbgCHv5sqMrkaXFq5xmA9hNfrheJWeGzWxaN1adcC15ZVT",
  "key5": "3VEiVMHpN5zKmYDDQ4oYpwWXaLugdygDLFqmrRSus1rLEit67u4JjiHnGUudLGoxcJyLja6mUuyZVKJ9KMBuAVD3",
  "key6": "5isWWh4Qd7vK6X2L4QqXPMVryMZGqrq5czpiS74fNWXgMwmCd9X4xcMvdPtjHuXSoEu54mxxACW7hmpUhLeXhrGd",
  "key7": "3tuehhvoWmARDTJgzymg2b4wy84nCSGJeXn1YMeoUHqduqLe6mAngvpHjYQavUWMrJQoHBUccud5nnk7oN3dJnkM",
  "key8": "7B98QmZcQMRRPxPkDoRNuhp94uPfdUBGRtJj9CGeR8SkG4Xwgm3pr3dFrc9mApnamhBHRMyzyxLFbEFvUDG4Dsa",
  "key9": "2SmUrqEMGR9bkzJijfgHNRsoMK6EJti9xVeosQB13Yj26cSwx185rNbiADfxTXPvWSZZ6qVEwrUkUnhNhBVyk3b9",
  "key10": "4ZyFDxfxvYPxho4atT85bqq4UkTW68SVvxnv48KhRNz8WLkCcYQ8Z33dV4ZaunxM5fKoeCJaYK8TsL5mduoY7aHX",
  "key11": "5BhXHPjFEGNvog9VgXqh6AmytWUHFvojN41Shk1YmRc8e87XkxEYSVuZcQjMJXBe2wLsS9kpWJiMMBxv6ERypmNq",
  "key12": "3yQsTu9fVoK2uDt81NfjhbjVqugBi4xnPJgQb8edeZKhugNWkSSqAz4UqB9UAKXacrEWvj9QsUMYPH29mW7AiNDf",
  "key13": "5qKs8dhJXBQARGnPsJDC8pGLJBKGnvWpoh4V1qecoGqXJLEqv8piCYrUdsoToCnJFd1rWMntttxbrQH12PPheqTr",
  "key14": "3xtQmGZ6GZDrrKEFUA3yZ4JZyfLamNHeRGscFwa2Jso5DdLiftdrycVbb55AE2BmdxDfh2iaFvXaoVZinta52Kyw",
  "key15": "651HDg9d8hsc3K1PzmFoPWfcjFgQV9AvTKdcSubGbUqegduFPQCJjrkwcv163qwuPK2Z9uVEGcxQ6o7fQ4fiWxjW",
  "key16": "HwUauEFfwDD8mZmR8xm4ucKWoHhyiCkh4XEkEy8e1tqEC6wgtK57YELzephyMRM922j6dee1tirXznhUJVE9sMK",
  "key17": "26QiPKq4UYRqShmXN71PdgueTfzoseg5iy2m9941kzytsL9kSFexGGyxAhpL7TbeEz6YUdm8DbSisLAqsmpUy4CR",
  "key18": "5GMTuR9Bt1EwMxAM8b7oAfBJorPzacgo4Wp2teJ4P4pTHZC4yYyahnmb2MUU59TDYqcgTpbNcR8pPjMeKquFjrho",
  "key19": "iYuvj1ob5BguM9etxqF6RoqTeMFQLrrUEokth8C8E78Pq16auv2RCSaqikAnKLDhtNyGuhPHSk1AkiTcVNX4pSp",
  "key20": "2jW7vBo8vSLqhxHK2v4uozZD1umrhnBjooy8fw1oU3k1CmpwGtpfLxc6Fy8BGikPTj3FiLh4XmgCgw9PLSmAi4K5",
  "key21": "5DZFu2Lba4zUbQDzZoBdTSRhFguRqdQuY2gwCNVoSrwMs28KT9tRAtLdQq4m7N5uPrdFZwdpfHVDtrzRr1byaRTH",
  "key22": "62qiA83sXtdGaxjujQzWMhidSm5vnDX4a5ZVi9N9NWsDFArLD1QTkr2s2ME4gMZnTxF5JeTbyzyRcHrUBa36Yoz7",
  "key23": "GGQBGxpEwjWReMpSUwawNoQPbUWErDfqiJkAPgNtiuMUi6zQKLZ6eEwaYTkLi8vNpoGe8G2gv4PXsqXnvqCZ5Tr",
  "key24": "3jLWjMuRXW9H6VH7sPGaGVTvRGGHmU2bnWRqHPeb1f57gmKwf1QwXp7mNLwfWgqUNoHqcxszs9kAqDw8hQ1uyDoa",
  "key25": "H4LZmMzi6vyqFnnyg66oKHY3pW9yJUR4r1J3Qas23H3WPk6jB2KsV7HzHXjV82VDojyUCTx2sZynpqzC5yhQzce",
  "key26": "4joU97vpjBvdrmqfHiRJGfb2krTmXL7ug8WsVgfNecnBSLpuWXqfkKYXqL4ev71ZkEbL8k4zjhCd7VCSqxMGkjzS",
  "key27": "kh9idzB6jBBmukTRs91msF59pXZepXAdJBZMSHyN94p2P3fzot1xYGHmhTFMG7eC7mbWrwZRNr9CeJwZm4hHXR1",
  "key28": "3CrAJhie3ywokGugqXWHKSNxAgys3X4BbdV1b8GwhASYX2xKT7qHiTcdPpmfpdctsUAFi1cY2rJcZp1HiMnkB6WY",
  "key29": "5xY6ozuePjVm88Nz7qnwPVkTuGLY868vKcmkbC78Aik8daGYLJbsESNazjNcap6MSh93yFaJF9HK9Msv1ekgaUfb",
  "key30": "5UMsCH9nCiskHWfbZLcLXb7MTPJKWfDy2bpbKiPby5oz4fKxNMTi4T7pzREoM1zqBkMu2tcj2wAmZ3hNRyU7WHcB",
  "key31": "64G3ixQcGRuuMRHUWX974HFbqfX6A4QdwJcxjyfKWwDkrxjfcCfWoXm14d6vZktgpDxJc8BWgXLA4rLFnZVjVtva",
  "key32": "4mmbJVyzDgqi1N1MKbKDKutufBbxkBqPrEuu6gaLPDzEsKW2GsStnGUxf4tfXmaP2TWjA1G9bNB1ShjYMr5XMqYx",
  "key33": "5auT8iyjvcJXLX2byKAJvspgQpJPAooyUHXvAALifgzyoG2PAgJhzjhppgSxM3scs7AQH6CDzQ41w3rW1iduyqjX"
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
