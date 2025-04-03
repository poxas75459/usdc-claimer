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
    "3or7o15DyD8uHizp35DU5PS7HBptCmjfj28byXw8EVtUWgYxTJ8YnjCzZQr4nqhMBpG4yKGHakHPzonqqdpbZRkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MAfSd5t3XsurZyXBfNG5drSNtSvdDAsCrrTCSVwzUXPxmhZ4cPPGtRSDU5wr7x59Wcs5o2RZNSVug63MhF6njUv",
  "key1": "49fknV1Nft9Vi6tcnaMniGRGiWxwiuFTvUKwPMVgTvx95ff3XYuS9VqjKPy3gE2Xm9N5vqSbeR8y4mybgcJNS6Ko",
  "key2": "4D5zNXgcFgvrnAzJ3ZV7jzi2WN6yMCvBynoodF7EfzTDKoWQqgAikBTtGeAFw7vRqP3NbwjYTj668C9erXw35j6T",
  "key3": "piQ5kTFxbxEsbmtvKHs5Wdpq3ZctD3dvxXhncotuWFN3nXZ5dCXKb8p8QCJFEXRvjabXHKs6gj7hmMkCebB2ctA",
  "key4": "yg9sZFptNaKqS9ja4hWkkBykvcAVEsy5xnyC8xYszVEhzyTKaRcGUs9eZQCGTUwYJ2te8mCWnmmggENvCKKRYkt",
  "key5": "4GUCrgYmqwfQNEifjGjsLdVa9CEGunaCBCZ4BhpPDKCNA9A6xvsqrsqJSf6mmesYCVLqofJs36kVxbj7LM8huTGH",
  "key6": "2R8aXJVB4Y4BQiDekSbCQwgAviPH9q2Ru2tnDo9iXqGd8zEiKiTSjrvnqAQdyHhdnDdDJmHsUkQKSzstUf2rWjhP",
  "key7": "27fRXGVg8zxcFYhyVhRk9momcWknohiL8JPQqMHKKm6YtiSeteBqwjBikcy1afeqEw78RF49YiQfK8wkF1yr418M",
  "key8": "5wcBmTn4MZ4ii6QyqPc8NnGmtDXmJzHWqMm1p8HeMmCzHzcp6GyS6k8mMuKNRCCEwneH6xN8TA9wRgnjfmsyDkXX",
  "key9": "3SQz9JmYKvPWsPxUKgNfBUS7F1uTTrBnfpia1dy2DQWF71YoFBXiXtKCKrYR76pDb2cmBednxdDFLX49Bx7fhVZq",
  "key10": "3Hei9BaYiAnNNCE9ZxGKbZpVLEo3p95nLBPH7Tg4ip8kNBK2g5dt4BFBFSggeQUzRYGKacYFmwbEFL8Wq194U4P7",
  "key11": "4BN5mhD2kVFjJR125Ea79kbKWTVYi5ZTvcwC2F5hyZjV4vjBR8PFJ3sxbnK1nbK6tjP1z7dUj2JLsQmhN99MhvoN",
  "key12": "4qdm8wV3XP3CdgJpx5qZgBdo5LuWdT8St7wFAJe1wGqJHELUvYzXozNzryt4xMJJsL3uoCAh6MhnEKRdY62sDH63",
  "key13": "4AMCpSJfK6E4pPZ6cyYsPuaSUSwagAHuwypjUzLQShheZF94pCido77sSfSJxnJeSCUs99yNctMEVdcijo4cPm3o",
  "key14": "2R6KLF2ksmCK1p4Qczcvrc65vSXo7x9Gwafvj6sFCvjq3dB8WcYrrxKiCRe68VTZy2wBqpjLb3M899stLuwgiGyx",
  "key15": "665CxgbrHTNVmrozzoipFPh1weiVNsuTGZToBBoTxyxTV8z1cetvbQTZr9KNDK8uMCgGAAh7NeydnEhqwfDZhfKE",
  "key16": "3ZBLnF3iQkDvUFYcsU8wC6xLoX77ksEpcq1ZAiY4ZGdjHzsVXeWgs7YtitupuqB6dDWijBeyrKN1DPYLQg7h7AY6",
  "key17": "4mSZL6RtSPxgjZcNnG39Up7mW1WgQntekZce6kVyGydGAfpUHHCV2Wf5greFV7JZ6KNoLsr3WHSE9CishehCpDtD",
  "key18": "2ivAuWKNKSzZPzeZkeGZMYwyCX48hsaNisSbt62o1gEvG9kMudvoiMnS4zV36qcPY2VJPQsPbLDFkCnU1zLnfvFh",
  "key19": "zqUWCELxGw84q2E9gEjVeH8hrZNhFxuQU1BBMv8GGKcJn7WA6SjpsJEp89P413Fd7jfB1216L25LZ5AM9cxexxF",
  "key20": "2SrgbuVB6VkEJqZe69JQChPTy3ixkcYepfWZFmVDYsUd4rEdLUXnQP7bN7Arb4bYzNFScJpJL73o2J9TTiweUrZ1",
  "key21": "5cZQyn8FryLPcxNoSUpq8UM82hfQDFCCFwTCS83CbQFm4P1JqXECkVDX9b6YwummLo6cF8j8kNDZ99jyhBXHyi7N",
  "key22": "5NrbKZ9d2s7ntbuznh92cDp1TjVigNN76f9kHDSYU8jYtebGRTDEJjs5SB4zgxgxsaUzoWCT5Fj7fbDBWortHw7z",
  "key23": "5UVoUmbXVLdnM5JTBMwWHfjFVSdbySnsw9KwJdsi9vgwHwWkGiKHybvaj2nQP1f2n9ZmKgWqFXw2EbCM4qLBHgMZ",
  "key24": "22zvVRAn8cqDVDPwNGLLHwH7eekTXm65gsi3tsH54iUAC1UaYpPuzgyWewVQME2UHVWsVtPH1K9rTHbUCuxEcepi",
  "key25": "fdvkzACMhTjBCCwxaEdW4nFc84TNfE5BfhP7yVhxEbyzASuFHdwnKftNssYHBHYqRqW6cJKrhFhrBCXceEmqi9P",
  "key26": "2UUMxhAYrCXRZMg5LUdNa1QZRNZZ1qTEi1uQcLWuGmd16eyMzpPQr7GrzYPoPUBZVTkRWUuUdbBrRkzBvY6rjtjW",
  "key27": "3pyg58WYWywTCcM4cW8PKqcYobwt1U7eWBfN1htGqqmNjHesDZAYRkwoCxkeVrwz9UrsqET84J7bSBCYTYtJDpFv",
  "key28": "pdA3jfAc4d524PRrfR2iSqHS9B6WHFVihPzbGw3mYrXjyxN1Ajuzv2jZyghjypXCPgFnqGJ2xY3uoP2xCAkXCCr",
  "key29": "63D3WVu2C4MNjfqJv15YuSQhQDre5cCSNyyu1kdagxX4RCs1YfoR3sWJL7tuYgruPQDn6LZJG91BVSEVTncqAQ8Z",
  "key30": "4kDmER1sCP1nLQzMA9W1GFtppoLVCcfr5GBWqeMp15xhe9k3aGCQzFEcUM1aN4Nf57qBf6nDvTzqozmHHjHQcjgh",
  "key31": "2M7YeKN6SHaac45tE6UxVLA9moDSj5i3Ecrs4WoLvP6nt2aFmFEw9TZavzdgePqTDcqiDh9win4CRFYenh1PWwff"
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
