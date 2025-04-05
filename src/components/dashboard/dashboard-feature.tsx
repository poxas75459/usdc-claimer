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
    "2B9QdCixs6cfNe5FKhWw5o7Xgn9asp2wtSDcWx64KYKkYAbPqhQejafbBJVRxxPLjLbVKw3aHgZUW9FvpxqfCJq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38g7VEf25qJBWfuhn5UQc5egNV7aScyWZzRmXSWrdp9pB6GyFeBpF3qq3A4oB4tiEyV1EoViy2EKaHGgRQgvTLi7",
  "key1": "2utZ19NVe6RZ1eeCTpEnMDyCVfDoTBDMV9WwZ65y6pKgQqi9kBS1df5KcxeqPZbHUccxRNciqvfJQs4WKZkCEbHf",
  "key2": "62RHxTVQVNQRZs8BEPyYPWVpjzh8U6D5fYNj1PEj7UuQYVeurDkXLCnumyxXnnKr2krmU7BdSQ5LFwhk36NEfs3A",
  "key3": "3ApXhxvmAAgdBDouaH3VJ7E7ABvSam2sC4EWtmRfPQ6SaiBjscydVb1irKBdN2v79JQmsaxfJK1YGRiWTs99QwNy",
  "key4": "3MiE9cF8Rc3Jf3x69A7Tv9xoDbvxt7fkRT4nzLNjJW4tkHBpkC2rnBUsovRgcpyvGhaeJNzEhHJQxNiUNwFBDHPL",
  "key5": "62Ra4W59DeADACdAPSoxk2o2GLGu64r4zESPKoJRewj7yJEpDxq4V5sSj4who8LHaP9TsH4UUg9k3wPWbYBU4Y3R",
  "key6": "2wLttgjtHBHHaX39sTpP4ZxNe7swTCzi7kLVPHZ4ZUcyFgSi24yyTUscpegftT4sViDriGAg1dYPhsoP8qE5KDQr",
  "key7": "rNfxxdrXkYYUoBPX52a1kd2pAjTWW4ikhFYU3rc6kccjXBFVsA8DJjP2MgwLhFYNVjL6xeJJWtqSWc1KMt89cDK",
  "key8": "3NRzC7EbmtmoS6azvrDYNATkSgYBB2s3rJ7oBx9t81CoKACijUAeVDRr1moV1Fp7N4oPDsQhrwdHY6bKfzqQjRue",
  "key9": "65hXqYjLA8LTfQf1EE9M8zCrV7nGhHbEZ8h3EJMAnUynmUfWWRWNZf8AS4ku2MNS4FuMEGx7NVfZZAWDVyFGmMEZ",
  "key10": "JxMf5VmHWYuazfHwFki7TDsWCqUbqLqA3VzXLpiXpD3wJpppoEWwJBWFN4CjCkPrMP3gWjd9EpAY4DrQfY2qX2Y",
  "key11": "48CfjU6sqMK7d5LiTCP13eCeafZ83efV6N5sPHibYq2wKX26rGMx4mQoJwZJ5gRw7CyEPtutY5gKpzcXa5RbPFJT",
  "key12": "5wMUvYsx3Ca1tqqwscuHUG2Qzx9ydL1VCGWUMh1qdnycQPTK5xBvde7oaUbhmvKui956p8sSdGyW5jZ7qQBmJ9Xf",
  "key13": "58akGTbRxtwEVhWecUNh3bEjgQZtCsMeNutqMc6rL5ZwV3MTqEk4zqrLy7xx5SEwLWaryT692ijwRuuUeioj5ryK",
  "key14": "28tm6v9JCfBBDcWw2wHgoCxhj5u9SgwiT1dkXApostwCMCWTy6sbC7v6FrvrsNFfkLf1CcaLAPpp9XCUeDRUWQpE",
  "key15": "3KxfAAxGhn9gj556QHQdfgpcg9bTiQb8hpCADUKAUnJGA3oDXLSz7bCEXuRq9cWgoFYJabW27j5zAv8iW6DVdzM",
  "key16": "2131DEEGDpPscgdAM1ahB1pzXoig5gjLi2Hc1iZjcrVUoc9DAgxTXAKVujnGsCuwQWVkKEkx5b2jtN92DQHA91yD",
  "key17": "3WA73mS6qZYSQZjvRfC5djEC3NERCn5eEcEqNhYm3UMC1FeiG8JHYSpzg6vodpdwtzdnF4kz7mnuEsFziRckdZ1X",
  "key18": "2tYxza42eYtQDuNBfbD5gkhQVEe63MNCnzUPgRKK5hHS9u44SEmUGJVNA5ZGS8BxCEeA15hQrpttFXJjTCAYPu8d",
  "key19": "211FyTbeoLzLWpiA6Bg5gmVUSW2BFm55BesL5GoyN6ijvoNVHhgGpkU4xF6BtgeLXwiNkcfZpxLBFAwmRgceSWmK",
  "key20": "5XBm6uYHmbj9tbYfVaUc77iRssR3Tkb7ESdjsvb2BSSd6rAiRCrSCuoe3LZEMYhvrVgcEbzA8MPnnWG1nrnZfg7B",
  "key21": "4Unp3nNmTLrVtkgCGDQNXfSMfsdfb1w9LkJLryNJ7qibYhWJkT5xMiCxad1mQLRoA6mVGwQBroSACifQYzKeMsMT",
  "key22": "dQqDME19tDUFAESviM9AqqaG4RDTAjn1J3cNAngkt7r5pJxTc7AfbTJZLNKxVRiA2iCJBsyqgDtG2vrpBCbxmX3",
  "key23": "3T8WSeemx8iyyuMoKqCQzkqD8XNAMDXHCNpjd7sHEC9KECA4aCdXAAUs8MTVVGFnyxc6XV1Y1BCoPiCip9iW92du",
  "key24": "2VjXyHfbhTxH7BGPA7Y8J2HiGJKcK5cf95jbn6dkTmy52oQ2JvwDgwaD7Btbg22QnFCuwceyQtKcXs7gZrAZ6jq7",
  "key25": "4YiqokQVqSaYoER86DPSHMAJKWHxLDT3rH9wFydRukpME59fkRFju9EKMXRPqGfRTDMMMM8tVowFTYksJXD2MwDQ",
  "key26": "3gLNcDqMiEhe9jPfznDcAWWEKN72USJPUQwLyADRQjGMNJdgozx5Zf7FPsM2us11SqFjAxWYavSfC4JS7NymhE4a",
  "key27": "3ni3ynWQZE2C5PEpjLzYiKRu2h9D2RoW85oZcrAcfxpbCK42gJXEXZeexQ6TgcwyhtpBNix7AyUgjCQx9uiebG1D",
  "key28": "36ynoqcQv6issvGQcJYT4D5nG1KohKCZrtKVobptL2A6cfh2ovmnehzaEHeRXWJvKxUhsk5vyUBQWWxPY7h97DiP",
  "key29": "3XWGnw6nMBFLxmc22eoB5iNMJo98g2NVTS1bTnTZAm8wiaQGDSx2cxuVW4xyKBdj4mUA3DyrGdEYvZ9VdS9zKaef",
  "key30": "22FvWkHSczadyr4NB4ea25e1QqJ3ovRJuUPSHqdu17y8TVK8vFyN3qaKgoD3PnPTwoT75VW4dSpMzjxgakGDkZo1",
  "key31": "661MWusUNf9MzWeAMu1Jtn1mfUgjRuZFzK7AFFNSa1yggNiQ8tKyfKmM9j9rfyRrnVatehm1rJqLF1LUq7aZ5faM",
  "key32": "3Foje6zXTqhfePqpbYRxfkhmZzQPbcHhaEG9V2YcKgn1WM8s8mHRw1F8h7PmGeGRtLjE58RJ8VUneZpNuiaRGdJH",
  "key33": "3eqawnopb3K1EjWCkD2WaMr1PQixYjjgDPNHDQ8vnobC8iG4cLWhPohwV3Hqi3Cnm2cLaxDY4yGXGbKKVJPrRR6y",
  "key34": "5eY1ykrmyFy14uNuEScjPBsu5VYGkzFqEkgCwduNQgbvffvBmegMjHzCxXt4wBshFqGWXX8fbSs9wKeWroTScYqS",
  "key35": "bmaxBjXP2K9oGMhCs7JFGq6C9nbBAiGyXYdwzHGmG3jXKJKBaHMXq2yneEKGTiQBTXCZgk4j9sdbaqkwmR9rwfD",
  "key36": "44yCRnQbK33Za8DeGPyW41FCWbXZNMWRjjSiZNDybuGNQziVG8KQVd2cL1gPdiiNteBep9v2KoauBVJRL4spKQk3",
  "key37": "NAiJVvHmUw6H3jEiq2UkxKhpmCa5ZEj8PZ2gCFGAe9vB8Ebh1tVEiUPZgQGt4Q8C7un4MmG3ZPruo9u4ihF3A6E",
  "key38": "J8kEKWXkywtjmoL1jwvzMBjfCCTXcheYkJjf27EkYcnb3z3tNL84t3G6YHwCPJ34HNc8aeXvDSWHXHKsLqENaXi",
  "key39": "4eDAGf6r8ASiN9eqVCAX5WRjRd2KeLcMLJkNTXSNksFF1rz9ii6qgx7ZFvr27vvYZyPWPEhvGpqHjRoHLDgonkfn",
  "key40": "2oWv1YeSRcmVPxgK5HhYu2XmfTmtwtw7cxYj6gz4v8uxfgfdneKN5AG8sqmXpWXqnb4fEVXv8es5TnadTvEV3cev",
  "key41": "51qDhbkKr6UjQ6pUpUt9bAp3awqdP1dfhascJ4ywvAjNtcp89XUNTahvHrE8Qs9WdhtLCw12JrsM9fvr4sccnCnA",
  "key42": "VHSuGAeWtXpV4vLkca4NfDV87EKWMe8nVfWn7SLwfPArBje49dEic6B5YhkfhDQ6ED3dF6zW1RJbWE1GW5sJwz5",
  "key43": "4QtNydzSk4zj7Nn35DYcnp7VqLhzz6t13MupSnLhBJ9GDxnfMsTfB6tSf13AbG4sJSJWVHgAyY6MnQZCDYSF4Uer",
  "key44": "2nB9JwyjwNePxiaeEkeVNsTvqHqW5cDJNo4co5oSC4nuXg3Lw6oCShGdTrnNF7bNDTUgwVyoHFQJkpSisaxMUxxM",
  "key45": "4BxxodiyNFGvaCjxYpFBCMv8eu32roE2FamRsLad7Q1vGwNRYACPkA4SuEZAqCNcu77s1WjQQT7oWuvbw7VAK4cp",
  "key46": "25Kmjkd4PJnqZpyQKD65jzi8mqi5fWPuzL2Wde2DgpUtCKBMvyR6wxZBr1yyhqqopZXeRr65nXjPmV2CnqkpWzYc",
  "key47": "2KjZto9UERMJQS59bgL3vyDarpzJgLXr6DaaArC27A49S79dNePcUfm5obso2DG8vFUWaHAJ1LWQjvq3jCxKgNG6"
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
