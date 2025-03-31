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
    "2E8udihixdJKthitVXPkGCm3JVTYdwrsTpNx4JUUPt1KLPwmjcM69B35rf7oaxEJaLXuDuGBRN4xigTHMzFJJDrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ghidQyg3uCJE9oshrEafd1MEame4qrBqGttVE15dfKmAPBnZeNqeEhh9TreEAfWRtjvVnr8pKfAv2qnWQg6mWQQ",
  "key1": "XeNeVXqAWZUSpmamdbKjLTXDB8zwwpLx3DLRxfgY1uemLBcupZeRV7AY5StBQA3d2netxvEvfg4YA5dZmQE6e6i",
  "key2": "4V8qTxxUNeKYRsCSoVzjpBNGmZhMfTn7yzPk2wqjBwgx3fD3VRDixRRmaWEiN5qrnxJLHeEhZxKCLno6rSgZj6Kk",
  "key3": "3upMgWoqjkAWFPCHcnkZjwpWeDoDPE3mB1pSuWfwPsZW5jXUuW3Toa6NQRnfpgvGw6MphwoPv9GYt6VL8X1ropK5",
  "key4": "5RsJ5RRByFiCnhWx6WXrMTk9sqbwoXSydecE3vL7kXTggCqHEjXjf7unuv2kodUnSWEW5dCP5uE39NZQoxpe7UuF",
  "key5": "QV9DbniAMTc69gHeLTbHeWqP24Y6tqHzGrMQyHkZxRMoqq5YNkgWMGxVKE3bQ1F9JBboRaYtrMvFwmft6i1XXXV",
  "key6": "2whA6JirMitv6UFrAQoBnnRFPEVtaW5uLqo97Gp2txjRFFGH14siHAeF5N67zmMF6Fhr4suovQq2hsitrDzhsPP4",
  "key7": "XWEsPZ824zyK7uBCtwcn5zGYhcp6KK3c7bcTZLZ7TVVqX7YaWL1f45ePiyn91JjvynmJ7SU8gCvbJaqnkPBturu",
  "key8": "4NUVf2ZXKMZWiyHfXUxL5w89726NKHN4XiM7Xj6zwkqtVJWiZuMJH8EwDDSDN4ES8K7b6mthFjZoH8xzFvG3aHnS",
  "key9": "LuF46jVudokzfWjWguZGjpuipfiQz52yra7xZFAmuGcGqqoTmPzXvEfsJHqtncUuHEQ5UQNcKPaA2adJnyFCqon",
  "key10": "vWXPvmE9F7P6SgAXg7c68k1pCDqdbceQy12vZkVy5yFGwA3i2uS1mUDZPAtHQeopFdmkrqNTDK3bTAs5LfhXHMf",
  "key11": "zw9eGGRVumv58QjA61pTYCwqMARz7UadyibzfbxbxB9yx9Xe7WMC8AC97PG1ZqZ6HYj6NyPu4okaNcVU8Lmkw5a",
  "key12": "2AuGfBeshfEAncDFLT9kytp5WMLxLRUDdVuPcxWBjVrS8k7xVQ1XXQFwLWEP8T6Sz18TFeAHgMfUfsh2D4eovgXm",
  "key13": "48HagpncBpFvRRouCBNdC5QdKwDBwAbM46SGrqMsJir2qyJD7gb3TNw3E4SApmLEFdiH3KoJuxtUe1C6Eiw9DLga",
  "key14": "2k94p1WPrYGuGEhrefwd4PJMj815f4jfCx6WbiGERMMmJGUsLeMSpNKNUWAgP1Easr614KuxQFn4crEG8zkR3Kb8",
  "key15": "2rZiHjdCWio6zLJ1A61rYhQjBqUpMuCgqRRXYGCoCxYv3Yfbk5QaWLDMjrep9mWeAZU8M9QoT19s89M3aEUaYWT2",
  "key16": "F5Jf6iThoMW4uDrjGzirDmYSW4DD5k1XCN9MnivmtU6ExwVdrKpQRu1yK31npbSD9tkS8PcNMQYN9DcjsQzSzrT",
  "key17": "3hrc1tYpYmEnTfz2EsXy44tdmBgRYhZ5xgGZKgUEH38j9rB2AHgqDQjiaSVmCDBFDiJxfqRTefwcqvUf6HHWE4Wz",
  "key18": "3yUosnjbkdBhp3pC1LP7KCXrtNjhLgTBC36AWb2b8TPyFQyALWtVMiCsCBsSLfhfwmsz9qx1A8RjUp4sJkxvYnpe",
  "key19": "5irQ4b51pkRvhL67gFwHDT8s5m3pEVEWkBRhnGpt2XdWT3Ge9BaVxEGDp934Yo56BcXtC6WwUctDSAmyaVkipqPv",
  "key20": "4mQ6zBU5Q8dvb6L3N7JStprko7UyaiHBY7kNaA2f5hfKa2ahx75R1kKm4kGmKFCs76ypFo2nWQx7pKTzrFNYnJN3",
  "key21": "WxXAZDzGL2T5gRjhNoDritwfDieYfLLntSZYSjoCe1B24Rj1Jur6qFmn9ads6EUm28RSwMgarCnd2NPrBdUem4T",
  "key22": "4yFvrUBgYDyKsMyCTNBNvsxTq3CSVjXcwJR9fj6m9FUe1RqKXhjLe1TNArq61jkc5vvdb4ndv43dkkvcjh4ZkrtW",
  "key23": "ZYd11LHh5i6GJ97KzQAujW1TxaY25tTpWQJwadBK6NJe1h8ojvapkN6b6wvQnTAhJRWNzCr5hGLd4qgnJ6xig1w",
  "key24": "41hEYNgpNkbJ6jCRF5w47gMRzqf5en9C1G3nSz4or4CtKYRV4RBrRZS96tZDh9xgNcDshRW4y1kBb71g78stpCiV",
  "key25": "32iihEyJGNyyVZqQJF2xcMSGuDS3PKTrLsvmeZMt1jkuxkkvDS2ZkNntZQoZ4r514t4Jo499vPB9namYKpFZWKp2",
  "key26": "3jMTFERATURJfZ7XmdcDf69VNqxyP2J5JtMkzSVWjQ6AN4FEMNiJPPtET6nhAU259KRedmUv6Euvmf42CZ6scXJk",
  "key27": "NYwJ3xq3wQUSpFPJhuRCuw42QSsUmA6vtnoyafpps62GayXFA7dLmDKjBAhcfqTj2vWV48FwX3BMWxisQV28WW7",
  "key28": "LjbFqmAbALEwhmTahBcAuZHAszZy1wz2HVeA4N6dFfZjhEibT7bCjoz984MJiamn8Q6ZqEmL22mswtC8At7gNXz",
  "key29": "3zgZkruVLLb492E2MnwzZpJaq4wPDtYenG8G6bd8np2NF121fJW64SqJgXLpYsdj8UJY3XkhXmnFG7ptd3tuwnc9",
  "key30": "3CsVmEvF4oEpg7qiNxhLgA4R75YNFoPoQgukJk1Z7ymAghEWYVMApfKnwGjygCERoqQxGBfYsLgzKrd47KFCTbea",
  "key31": "5wEQxsHeW5NoY6DZPwBb8qxRbZJqXCxhRgipy5BLEA7S2ksN3ENbv4onyq1zgaagzQNACUznPZdCfxthCAr7Zd1r",
  "key32": "ac326cMe227sncvmt1jyCpUv8Kqfa6U4kUbFuTaBC36s3syN3vm8v7dPHPh8u6Y1YgLfytH4YniXc9FhB8BuZKm",
  "key33": "5EjXV6AiCtrNixdAF18EnJpCgqB6kj7drZAhfJh5zSD1Z6XchsQKaDiu95NceTZEnA14NoX8iM1X1VfwamE5P4yY",
  "key34": "59NgBwLifMXLMKdSJHfxzeSxmxFZterSD5NsKz9Xe1De1s5Ki5YmSJmmHBdt4hwyyRUjVUMps3NhmCT7greFW4fe",
  "key35": "2REkFg3mQnS7FdGwDudJdroo2pyWhseNMNggvKFhRvPXZNwWekJZUwgpq3tTp3H8iwPs3e67gFFakAE3AnbpQB3y",
  "key36": "y1wPrgaAAYZRznk9rM3LhoZXB3KPV47EvDuDgiNzhpzPNnzjt1ZPPfjHUbEFXSLhYPpQvjN7Kho211c8JsRqUHY",
  "key37": "3NE5KmmFhLgQKpDoSQQ121n4CUgGSYhkib9dCjTSJj3SaaY2wot6X2Fzx24QQLDr7fuRMzKFNUtAGzxm1yQ3XG4v"
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
