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
    "3yVse3hYHj5F5e7ke5iAWCZu2EaVxY6ghdrHDH7zXYCtGbo4eHAgZMJ3zmBKBVvktdyCjt7aTkLZbrq1gSRFX5it"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BD9i3spDGGtNN5ibQLps8koLgsNZUPqD9tXQb8UWJqCW3VkGzeEqbDyjmvQMwtckWGwpS1txiT6uNfMCRSXaKzX",
  "key1": "4PckkzrPrb6GGKSSFg1q9Qy9ebCm7mGcp62cCV12bYHVDBzZvvaoULRQpknqswdzAFa3xh1bHvgCuQqGJQKys7Ap",
  "key2": "3dCakYPmb2cxeuJ3iRagMnzPqrHdU5CvtcQ8o8WQ5rJxzDuPpsSDrNXAN3v4WmPUHxtxAUXEcGhiwu8PnkjAcFpL",
  "key3": "stJL13cuhpMUCjCtmLc4p91zBswqiyj2gyYBJMjnvoDHmntAng9vjPYLVfbUQpbc6av4pGsmJiw6agxrDvUGm1p",
  "key4": "4SaM4zjuocTk7ZtDYLWK4XpZAoVUdj6Xwt4AKgi5hELk8XAtutcRUDhmyYidSLH3t761dXUX3LJ2MV34CPx9Hc7t",
  "key5": "2MrtXEy23NCuvhnnM7hxYh7fQNKceYz4DcVH8jJQmPMQyLivY4xPuNJftYVQMih6NJYe9yHW5cXaM4U5uHwQQEjp",
  "key6": "YwBn88gn48ag2F5EACf2pc43wRjnYjihw9eEec4Rx8PtjkJve74e35xTY418ZsqUJ556u2rX8GjYSKWiuSqzBwH",
  "key7": "4btLVLuZrtAEufFRhUKDoNhJfptyetsePjxNK79VoQCfjHZsgY7dKeL74pc64H6nrtcWmCPHiqRqsebPsZqFCYaR",
  "key8": "334pV2Mm7HKFYbUqUFqCszndPMV8poMEhcg4qQ2oJBiStJbvY97N3h1bbwWTJUjMJWxXjGDJJLYUu9uW6FAHG7Hw",
  "key9": "66aNT4xKoeyh3cEqDtZcfpyNV9WNkqrscMBJCtZTxsPBEoAwSjjWkxERW5Wz85AdzhG36c831MMm3N7o9d511j6x",
  "key10": "2NKXVH2DmUnaQyMcMyFVunABJXwVQWu64QYwqua4ynQuNsD6wP2p6GvXHKDFbxqvedAcY2FF4DdW3pexApRu9KBY",
  "key11": "4inMyeDwocfMAtZC2W3391Tzqgxtzyge9oYrirZwsqCkCVD4hmebNoUoL4Q1WEkA5oQVnrHKZXZbKyK5PLgVZBXF",
  "key12": "3toQDKc2sqqjY2A2EexAvJozyLwLA1ZDYoU9SZGp9Fi4XDSK53PA3vAQHrD2LoFMxcjhwzVeS1dexyyoATPVKKQW",
  "key13": "3pHke8sqTvbkND9eqXeqwPTXSSShhGBz18UsZgn5Jp7B6VEccraDq82wXPPCrojC6eSnKuCq3t4EX7EWu8gzr2Cr",
  "key14": "4f7gikxmkeoVGWYhFaeFZEKDRnyq6JXe7prquA4bdkr774ywAg4WeUP59iK8SLt9AUkx2Xnu9JGuRrqwfP2nuGVg",
  "key15": "2d7zLSQRWKMKykv7k91msrrCAWVMNgnVs3SQVthZWsTwDLTiYF4gLzWttqqgGK9eE1TEiGWsaEaYFP7gx7DWK7vP",
  "key16": "4mcmcGda3rjxKhHQyovwGGvqrtLYHzktqKRqQLePkXnGFZmmGtwozSPL86xRJGhApwMfPrK8MzWJGHNhXi4ixKJP",
  "key17": "RNG3VPsyYtU19wGf6braGkaPrEWgUuenp7CjtSBNxJXUDQaqSyVPTgWapVRKeksNfHYb2Bq7vB236XxwjWZeKsY",
  "key18": "2vxBg6sBVdLQ9pDvoVstbSvpVnSdfSCKUMhtkMQKgWwg77C65mS1oGEHxLpG9j5N8Lg8bMkEJLu6G5gvZsh3fEsi",
  "key19": "2urjJAhFd8igPTwJFiAks8jBgdqu9diNt9zpqwskJiTjpMUDYruq2X1VAHdpyDDP7HriThuqpY4kJ7kV1jroYMtf",
  "key20": "f7NRVmZno4hyDtHE46PsWMU6mS5NDbgvBn3NKcAq2LEwwn9m3trnrFpshsy5qEc7594PgiMq7GbSdM2PQRjn2DV",
  "key21": "JwshZRjkuTGYaEQ9eNMFDQEat8TpJZYKxWUSQ5yZSxHCcxh4SkT613RneNzYUBTyLn6UMqWkw2swubynAaZ1xtM",
  "key22": "3FGEWkc3znP9LKwTcwQhqEmfjhgyDLwUgRZyZ481FZ1fbhqet7NbpktxrHwzhFxycGvLgJxv8HQgHYaXYTDFay7j",
  "key23": "49NifmanorQvxqdvZmc9rCDPdAQv1647x94XdME6vVcT3HnFrj7ik6CjDtr8MXkNp464BK4qhb1qZGXSBCFSSZJS",
  "key24": "5vQjwfKbAh3JqV416HUNBSzDUbWmMreF4T9FNCoaCz2pMeJ9VEozo36zrNUaqN2b7SyqRHajjNhfYigMAhEYxWuk",
  "key25": "5a3eZoL9eeJXLYMQDr6v1rxu5JSkgJSxYBkd2bDvZLTYQ5gfbkTTN8jQG6A9bV9maMsn8Fi6SScZdmMDKNVXXPWX",
  "key26": "3GBzo49edLKR3q1xoETvBRKqtkUCcM37eTdzuDQvkwKN4ZjDhNaVi3uorH2rKmSPkEc43mn19TEuRzfvqBXUQak9",
  "key27": "44N79D89Jk4eHivD4zPKedhpbaVd8i3A45aHTjZQbRJR738RbqvHfEBV8z5btDK9Cvt2aCjk21xMocHqWqzSmxYY",
  "key28": "3rHc51TfSYNHcgTcDnUjbnzaNyyhDY4tsHuQb2hSPgyJjKFayXfi2kiB8iYqkDPJV8o33QiRAwoYNVAZUogZK9up",
  "key29": "ErnftBwZipjN227y4XH9pp5jmfhnk5K2sjH7mvtDigTZZBKAMc7G1uBM2H84wjJ9pLW619pNZ4n4B77WoaJVZEV",
  "key30": "4cTaA3PfvrQpCiXzDFXhLKqitxbnJf3JKcQiUm5C5aHh5nLbwZUP99XLqgLutiKHzJp1p6G523vDJ48ZHgXK49CB",
  "key31": "BUzW7fm5L2qjqSEFfNjHZHNxvUAF1VQhWVTrHcxJRHrW7UpXpFPbkjRbgQBGxB3xsP6ycgWCJrXiwCUa2ESYB9f",
  "key32": "2oACPzQHg8Vg84y3nDooDAGcdZCzLVxKfVYLzc4o32RSUf3UsnJdeQ8it7YWUP5AzmHXupGbziaupSx2xxmSpmjP",
  "key33": "3K316oG4rdhTmqdtZGtAUKd2Ypk1BwuiF1hoLjNgxWU8jUKsaSAoDbkm62AKAVLttU8aSBpAn2fv2U4gtQk6p2iQ",
  "key34": "5c7tD4YMyr3znEqKe7WcRWnPzyBGUZJmpGGhy9ELt9ULx2khUW1JHgw8kTc2E3298FTHr5xQ97mDujyam9xxozpd"
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
