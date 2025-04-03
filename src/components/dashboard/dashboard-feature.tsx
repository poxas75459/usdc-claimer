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
    "2BParbeTt7sPZcT4LMcncLatwK64UecKwPqrzBP9CgmCA6GC6cmhzkpKq5NdUAXxqkQsBcUz6cDopyumi8Xepjr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VEtGH7k4e52QLkomuupDJkdmLfdhyyEQhsGsdQCpB1pyDGxqXrDnowDgrc8jjAV3WD1HA91JW7tVt5CY344Cq2y",
  "key1": "4A3AfZRowZMTESjM2AVAVA73qgX9CP479z557b8TyCXPMLJdBycp8MckEG527EGeGjFZP7XP7rpfxfnc5PGjHJJh",
  "key2": "128VDe7Pm75jvRcYNZ1DAkMkAfdTW8ykPKfoPf3v6kyv9ASGjyuipR7ssLALC8rLF4o1GucrwrmZbAa2tiH264Lk",
  "key3": "42ZKwrJx7foMpWZ2ryTdmffh8GX1eiVQTNGpzypYiSdEyDkWM5EhqH8K8WcTq8TArP5MeApBJVudnWaRUtWzWePb",
  "key4": "5vMrc8j8zX6ssaquZoDmCSCwwK9MrB8it753tC69ay1YAvX55P1EB5vVDsTZATzEh8YRRQdzNjZMiEp7v8GmTZzy",
  "key5": "4aaPWSRwbXgkq8CnNXmdHB1EqmJk3E8NB4DUv3BjEgsKmapRQ1E4gLHK8poKuLZomAXs8drL2AkXiaEAWR1ZNU6c",
  "key6": "2aJ8ySB1iM6tbUqPdrBa3phPQ8BAP5Gw2xioN5Gq7v5o29MKPetkTfx9k86qnE3E43am8yBcHksMNyqB14JineXQ",
  "key7": "oKZvSMAK9snVXhms6G2UJxyY2UeiXFpXXEHdsSRmguRZiiJ1FQPoXcjJmydLyXcKzhMX5WMiGEhWFWcCSdJPSnz",
  "key8": "42MnbCfdfv8M72AbW44fKvq2DiyxaLpKjqsx2KJTGT7tyXfn5yf19keBPDuc75AgCYzjsbTsu87uy8gC6ZddvmW3",
  "key9": "5YSXF9QQa2KQQsSV5R7U1GXjtHHqmUmbxeuMsJRU7f4GVaeMWvCjcSD2dxmmpJniJxPLimgFfJceJN8BPwZ2ghcb",
  "key10": "66pDAWBZLdwn7Rwq8LSp6MhoTD66ozw1Pp9sThYdNZyr9Em4JMbet8LmeYLhZc6ULszgefwjqp5uQ14HzjKNcTu3",
  "key11": "56PmP1wrohaD5SGMnmu7JLUVBWRPqe8X9gixq7ku4zcafMcxVehUwqBuzQETHtqt72oTS5ZAbfhRs8Xykd7Km7D6",
  "key12": "2tHg79L4ad25PzsJ6x3UT8MBRXppeaLdHmrRNE8qFZMLm4h5rtuGsCbz5mRYDAQANf5qwZNx6AAQgYRMLnFmPAhy",
  "key13": "1jTxYQVin7aNURUpXP6Seqz2PLnuen6rxNTxU2HFcRQEWVhBMBbHvK6p1aae6MUzvE2P7un3sATaQiH8Hfryg6g",
  "key14": "4UCKyo1wjfrEkj21rvpsnG4mQcui31ani4HCffN9ms8RwEfbe2k4un6FzV47pU6xrXPNA6e1h85fCERgtKCBnvju",
  "key15": "5myv6MQgwM8YxUdh8m7w1riGQ421VdxZ8ZotiBzw8hh8FgRbeUBUjj37Vhjbuk7xbNshxvdMBj8fwqMCTfrSqjHa",
  "key16": "3HYebyumfdQkoGGcipqpkmuQrdKJnvtP2BgJLyA6xy3Q73qZVMNwBkoEdtTjFxNbJ7VRhD81ytTbUYAUos1ktdrh",
  "key17": "3SrZkViuC2yD3iiLK3zmkG76XEwrNgmWfsFAQJUg7QLWMa5aCCNnAmwknYp2W828edKgshhDJnYT54nhyKnqHjGG",
  "key18": "2qMrSnUYXjXezUGqaTxkBYR7r2kCJx5RPP85NPJe85pUPgPkNtBQWCFaJEgAvh6UmWLPGaQCTrAwcFjtAUMVH8f",
  "key19": "5bcU4ZqLN6Fw7YB13kFR2DwTrLGySyvey88He8oR8rXu8hys4DL2gUsLN4BisJZEJyGWhjytXDKtbaP9XewCKh3d",
  "key20": "MADKrZeguCyt12gKuQGXhVppB48gZSx4AEFoFejaw1peeMmkCz7BgP1sUdZVasYEnC2sKtqif85isXLE4ap79Ya",
  "key21": "2YFnjmXFiryHe4WQM1EQSPJVkfKcrAViby4Y2GAUHA815A1uW1QMw5SLkkgVVN6zFptmthBBF1EDkLwnxzJsVZHd",
  "key22": "2nxrYNdJFLfkZETkE43HvTEEq9ea93U3xA5DpayjcumR7b77Cn2dtkm6oDBfKVe5DBGaPz5B56DqRrikD2fuFLSe",
  "key23": "3PBdiqwPNqSSNyTXijg7mEwtyJSsa63vUJTo8XTxwqmZ3Td9BxRbhU7WyyaGwbV32vFKS9JyeBs53iNzNAb7HJrC",
  "key24": "4KpXKkCpB3JxD2x2ve4TVg9fKdGC2AdMsoJEG8eHYNmEWffCzwBDL6pUWrCfsLDLeEz2wYqhSb8grci5mBGj7tnA",
  "key25": "4mJrgsaY4XxbsJTtXvMo5ABu3THEfbJhJArugmdiSTrc6zWVSnwziBCNEWmGQZqHC6JE8bYn76YxNPXa49Pd1oVw",
  "key26": "2SwuMLzEWdCdCrMbgFWH6Ta1n5f6kBPnGy9MQaMc2MFdeXrjfP3MGsqb8sfgMHXSUbp2FWdViEKBBEoXUgXzDgBN",
  "key27": "5tJAJXtPivhQDMAQebSXvsaLJFRVDwSqsDyREsoPynmJjTtZwEKJVt1kQwfH1BhWHQeHducs6vbnQTVVYsEhj5kS",
  "key28": "5pqovEX9fJaJLFYKQc8ieRNtmE3Hwy9n8ZMVvNMxQ6s7SNJ6LTFG5nTb12YCGscbSd9WefMJHDnBJfquJE1gLYcr",
  "key29": "3mckUZuSXNhejTUuwCoC5Gc4uJNnECA4JQRXEkrMTugvYmnuHpuGudcGTX96y7jkn8st8eBuXVkuvYRYtiW1RXMN",
  "key30": "5J7eW6UGQyUBU7u4Sed5TyZMXGsiLpt99GZaiW3wSqjrXMJHnT3usfaNMLhHz4K4yiJhStXV33b4zXoMShVvYrcd",
  "key31": "5ndHLZngiJeNe8iWY4GfPF4qJdko7xU8bRXxH8GPrCSEEvk1Mgjyf4LeCHeyVXvP3mionRjKnSooRCJbwTM5VxXC",
  "key32": "67KqAagHjpn9MitKthDVYuVkkLC5jh5KEXXk6nmGyJrcqcXZFPhDsLf9e2FaAbgaZARr1e86NJgj86dN1LVvTm6e",
  "key33": "4gjjaApsLZZZMB5FrBzJwGqo7RE8igkA3rsd5ipN7TbacGfeu8HwGtoNAiZ962jTZcBtf8DWxXMj6sPB9o9hF5ba",
  "key34": "3EjGpSvFdRwvXcucdwDF2JUK8BE9BrJRnkMfWPVQmk342hxvWqLM9QSrtxv6MibeWorgBbrc6hTPok6AuCemUgiV",
  "key35": "5JWrqxKH1Q2SsexR1KfWA1QGMeMpSuwm7JhmxBbmR5t57WTRu8fhrirMRTUSwfnhEgKENVAwSNdScwyqLQU5Z3GL",
  "key36": "66efqvt3cgVgsbTY2R3nByx3g1Fbuww4GNWRnMLFGzqJJyS2GGpCPr3gSnYyDzAjEME7hmgC8VygLDcMm79kd83r",
  "key37": "Ha9f79WDuL2FenPETXacStrQNDukYQjx4rrvMZKyz9XcwC3zbqxLekHafUjHvLx2TRcJ9BfCQWQSocJMXhsJB1N",
  "key38": "3EeyLsUcwA54dtATogd77T99eGwUR7QRWbkdffjiSuTd1S6u1CBi4N8yxX7BjAEmpADVRzjCZas1Qpbhgmp1L2Xh",
  "key39": "3GhZDp5LLjGkNtqyQkCD5RNzNQ7ps6jm2R2Y4KHKi86LB8kgBTQfuepefkAoPqEruapWbMALMa4AHnApNSV9dwCy",
  "key40": "3yL1xEfELoxBu6FGiiBydvw8PKWgnY7nHXMu1jGagvPsqpdKkg1caSDnkTosuULAp2nu4RnsgdcPNDm9ZUVwQ25N"
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
