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
    "3FDEgtnaKC4ZGJKb7CuLbdiAnKYXjEK8VHb9HcDojXu8MdVcTRY44LbrV1f55bhRtRP6zHRAUNhPcQ17MNbNNWzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aQNtFxy86gbojrX1BekZ295u5TszGPXUrP445jrmjKxA7RSvyZVHuWiroWYWQv5oe3SJNoPVpEAnCc3WgRe8U4B",
  "key1": "2u3gcYttX97htD1TyX9DXV9y78NZFCWpdb71YogEg6tNsdekF4E3Fk7e5aS1qefyTcc6K2KGFofJTK6qjqMDpMC2",
  "key2": "2togVRJ5XBPsqcNneMNF9LvDauJ5VNFo9yiBX7F4vtYDAWY5i3VuyKZcCwaKYM6oesLKJC79wUPNHGnsGVoSxTid",
  "key3": "3Wh1pVds3k624dRs93YVyiY4R8yBQqGzzA7Z5BjaQBm8bFEUzKfaff1Km2sZ7FuSSmaSqzuNeSznthwCfgoySoiF",
  "key4": "3M4BN8e3Uf4YNUGVPbCGPECv2ZNvbHcLH9SpZhi426XMccDjo7i8G6BzJkuy9vQbEChpgkL34htvQGiM5bwPZs9m",
  "key5": "4hWwcXBmNbMpW4J4CRNcgnxUwUhTevixap2Jotw9YRhvFWEEAKF9MWDJM3CEnYotfNCMP3EhHcSgHh3tYNyyXBSB",
  "key6": "3Szmi9K9BvtCHMduPw8yBYdWq1J9Q25NXtmu8dTJi2j9f1ogFaXpwKuenmUYsf5YiCQVdV2yz7kcrsiGA2QuH9XH",
  "key7": "4seWEa27VdLQbot3YJXEGMQCYPzoW6EyoTXozCL8cWqTwoWAiDRNKrzzMvww4EJQjmScQVEZTEUkyEVxBqSLwXuU",
  "key8": "cagtj4ymoHXWwfQBNbUURzZiTUxZiRmHn4FjKVt1NSFqbxGhuAQZBn68pj4crLsX8YjAeMygu9sVLFbYdQa53WX",
  "key9": "2NXzBBhSfFqresyqZVBNqGmQp81DAYP2CCorbiLnjEacvriA4GZBju5rqpmgX4y7t87DhdDMJ7ZpAq1rdE99EDg1",
  "key10": "4mvfz8LAdhiNKg5q1cdhvU84UhkvKvCKNUd3PJRciRj2jPWyWNWH6L9Cfjgf7yGX6thgnbzNmgaQho8zcL1ipkoc",
  "key11": "27RGR3MwLhi6yKjwih28Ymbj13CRuMhVN82G8DyPc72sQGMw3g8C5VNeryzShdaMrAKxRWsMfH7ehahAVEK8kYZb",
  "key12": "4nwg4s5t6uXZQEQpgt82htzdM4irqjyFp46282iFx4D1Fwr5KfQY4c1uqyH51u4qjRkEDsHZNJ8vb3zQznfJjkHe",
  "key13": "YhB2UHzn1Jqs5m6xt81ECtmkP97moPVcx7Jg4eSfKgqWZom1ogDH2epDwdv2YzDxoE18DvJWZRCQrupEXGXS9tx",
  "key14": "5PFkZbYMLp7EJo5i3Q57CLsN6NNQULdccTWLAYvjKQ3zw3WbNw9rPfkcCCY1gU5B18aGoC8dsjE8hgJ1sNidJp6G",
  "key15": "2FbScyLfMCWmeDgWXvK18JXtgW8Zd3EPKAKv77zvTKBk5gfj6ZLVvVUMsq7KoGW9tBu7gV8CSWxB8TFjUdribn5U",
  "key16": "2euAyFY29kJSkiYSDHfgh8hWDpHori7LT2hqowaPtWLLxMFuoc4HVB9fyfS2NcQFtVMZBtEh3GeygBU9FvSg5i1u",
  "key17": "2kiw5AXpge3LecUjLYXKY2Z551mTYxZRiT6gofcJsVdFqLCXySRDH35pqY2NhTejbvYdk1tb3AMu5uDDXSajbiRF",
  "key18": "Q49f6cx8V6jxwGzVXZgkFX8oFpfMJkP1snPNhy8FpvusixX68EU8TtWUBgRZYeLExeRMNtESuvcn9343Kp619EX",
  "key19": "2NenPnv4Cfvfidg5QsHsbzuuhCH3FuzcQ5WA2gfCs5wHA6gX8CBv7dYr7Dvvv2M4vQs82wr81UD3Kbrbxihgc33T",
  "key20": "2N6CDZV22EWTPQCF6JnEAKFhvWKPAAx7GtQ3Le18gQ6AnHFdPYV3Qu2jtA4zeTyhTczDzyauTBxgjDH468qQiuN",
  "key21": "4F6ctF9ib5bMX55zLdYmj1G5eBi4MuzJJwxgMWWb7QZLQkrCogPL5CmRE8XWoPfBg6LXcvafsVUNtQycAMTnpzQc",
  "key22": "4psejMoVN7rzPHJqbrhQKapZrMhALEJrdU52nRWXLoxmfUvGvzhLtrxfStR6YwHs87AHWFcTPwrAFQEQmkGKgGY9",
  "key23": "3Km6XKUExGdDvhnXFXoZ5TFvMR7FpPpB7N1xhDGL4MGH6cCLHSY6FwDhrg1GXYAjrffC7ZLwGaQvt7C8EaxK5WeJ",
  "key24": "45vuHMREMHkCi5wFkhcBLK4bpwjLCr4y4R6LVr35iPD2FQv5dcSU4WPC9UUWbpD6uEgpyQEJoF97MgoZtsqyZpxE",
  "key25": "R6LYiG4mVNNZKgZiKwhzpWRovPU5FFyxQAFpJk8XcPFzonWvXN1ULG4dbDbiehSpgMKatmKhSpaaueWnVf1uVX2",
  "key26": "33YxSDUoGZZF6ftHH4aHF2g4q6gjucDZFpErsRR4Djo3jRAMUcKXKmf52V4cEm9Yu3AXqHB2gdpgFSBu3Jn3AnF8",
  "key27": "JeqtfBP5Fi5m6h5wuodVoVko1qvsFKoumdhELs8s1PrrJ73rnx2uepiSKRy4GjwE3sexnV2XyhCGPjRq1c6NSmE",
  "key28": "NgPRMQCGHEu6unArnfJH3wxwWxfdYQQLNH1rYbGWYki9w2otzJUCWACEhyzwDYvwBcnA1gPCUT1pAxfX71Cum1i",
  "key29": "5oH97Go4sFm9MHZ6EoTpUAH1K3hCPNkpUq2uGjdBNJ4pYr6b7M11SvqcBx3kfUm2JXM2Voaw4ufd5FqV7znGgWRX",
  "key30": "5gGCuSyj3Xqmzm2tCQJdP64HFataUv7MHwCHG5pPynEyb1zc56hyWerr9WYFVGVEdRoxNw2877Ns1VWRK1HBH1Tx",
  "key31": "26Uo1J4sGSYWVfAQoCS771Ef7yco2fvczKyf8H4o8NwgVWXjM2RWZABNkVBk4FETyYTLsyWzjQqFn56hoWC4WXVz",
  "key32": "3XrwBtPEAS2e6EkutBaFPSHonDT43uFJ3C4TYLw8tG1afi9QASj3HyvMhYvSAUQz96SrnwhVCY8NLUgBxSWEYTzz",
  "key33": "2SUGW2e4Ji4DMrkgzp5o3Tm2CdwaqMsgdiy41Tqjcj5sqcz6cfiq3uZGcnjmco2NWsUE2cq9rwvwoRXUZGcmDTN1",
  "key34": "oqfXfcripUUcsRvgPFz9LSPykvYdR6N6sB8ydELW1ywdkXqpnjHkgTWuwvCbDp8xfKbX8Ctw5qzDy7rBRw9ig9Y",
  "key35": "ZqiE2XdD9oQuS42YCyduuhWhAQcFAUmDMCaadiYQJTc11RX38WqQthi9gqgYxnMJhwzK6MEeR93Yn8cQZEwJjvn",
  "key36": "3W8jZQnxQRPxjd2Bvc9Ze72DxQydVEvNcGrxuLvDucoqHbZH4qxkYPmDpRe3yqbzJFFSPrtfpa7C8nuzLz3PWvo7",
  "key37": "5CG54et4MdDBV5ty6HZZ58Et6CizxsYBLdicA3ZfaeF1eSsVFGu8GqQQY2q9De5nLBD5sdyzxs5DRR9FVpRmES9X",
  "key38": "2LV2CucdNpYENL93doeAF8XXau7N7rXooJCNGaRD75A4JNg9XjsXZmUPUoyM2bD41weDdMWSaacPuu97pDX73UdW",
  "key39": "2XYZnbyrXvAe2TFMNGchrL58qttajgwCa8gXW44smFUyYWRuRAZSJWY4TYZAf3bpfsEv6k1Lq1xTsdM2v1LAt39C",
  "key40": "4N5ZxAU9rZ5vGcTgE1ZsoNimrkEvekVDoYmQGQf8hfZwD3TwxvRkrr7EXjGkrdXTnAR6wuird8DNBpvq3ei2fJcM"
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
