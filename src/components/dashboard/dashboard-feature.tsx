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
    "4Wa8tWptS9o7ZBGfbzVvhUDxxTttssPnzqpZV5EqMY7CL1LtMYRCy1a2DZRqpwGQ14qxx72Mh3BrCqkrRbpMC8tE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VfYgbe26eWCJnramJ14gJ2p3xM7YcZtrMMfWGtdbCKBNqWqfQfaUJvCueaSJnQLXCuu1PQt955jy8LjyFPQyqxH",
  "key1": "2ptkrjsSHDeUErFoQNUeh5gBpZxNrN93y3TkLhg2U9PoLJF9x77RLXYzAmcb94NE1YpYVrsfX2DLqZXyHb96UfXv",
  "key2": "2tPumQAtYo2JLfZBYuYJg1ooVNVU4P4dTS77BoEGGTa6U4Nx5Exx5F74bX5rckBhLA5F1imkD7pFqXnvzPP6UxVd",
  "key3": "2nEZa5DXq5RmMBYLHbQB3imaNJik7sem3AonseGocpmfyq47jND3v6kzNAEEjcC6Rxmhc52RnYtJtoErKCki2jKr",
  "key4": "3XyCcfZhpLFMVmUbLjvaCQ8ZHxmNCmwjEM1kWYL7ZSsUT1VhS25EHvbPEHD58LWdWrPqzd1eAzrtiLE1ss9PX7KF",
  "key5": "4mstPNb8Ft1gFQh5Jvv9XwtaPG41osmuuvcWA6sDs9eZuwK3vjeNCs4sk2BAodimYhcjHYK7Wi5gKkoiCCGUEbjH",
  "key6": "2P1EEUboKUzpqFGSgwSi5N4QU4fJHpCzb1kXMEhyVdyfNkSJvofvRojP69iJLqCaLDnuKkYs3qipjy7YB39bARSR",
  "key7": "JhaapbVHFgbTWNjw6GYxSqtmoYqhqetvid4ZJphff9rHEEKypUWiiDFB58pbKD5M99eZpT791LFNhuS3bGAVQVo",
  "key8": "695MoSpiBqXogHZVRgTSu2Z2TtZCmizLyB7fEqvyxYSDt1cYmxMaWiSvkpMQM35fSXnLJSHVsT6jd86tpZfW3EP",
  "key9": "4zY7WAs2XDcqNbYPtRXKmfiheRPu8gQciLZEW9YuiLVfG7MBJ2ssg4Yac9bH8NtKqdgx1yzdQZT77ogtNWDV1WHx",
  "key10": "4uVSv5VsXTxrTurduyCLC1o57eZvdCsc3TpHEyGnqzvTTqST2uE9dmAN4pB4XJ4pYF7ozGLKJjxqfxAmB6Q5Shej",
  "key11": "387xRRzN1FDj9EAdvTvAMgduvoHNcguRsaVHaLAWUm53DrKVoVt9pncUBDYQ3eP7zZP549DapFqoLahJx3vcUMUR",
  "key12": "5t91P5QZnE9t7oivTJjateq1E12iP2sEiYgDvvK3LEWKykbkncAX55M27RVQRgXqrgKss516w4vXPmbcvV6u6Nt8",
  "key13": "3UCjTzV1TQ7KnugdKvWDzWgxiNBXKTwaacr1E8yAFKJeCLf4NFqWghqFmWkVUsphfeZbHHaVEe6XuyAJRMnV25kZ",
  "key14": "515FpXuZQhcHSKex84ZT7V5mR8pVCePc7EwDUnT6pw2C8pjPMZSCdkhDSTAmkwxCLdgbDj7GrTYMU16yUaHsXY1Y",
  "key15": "2jzQPkRSYKuSmMdWY5VJFeSPrJSRCCe7fyShLxdiQeAysHHuaZTQRTdQTqPFvkhUUQvdceKUoSiwVK5yZdeR95H7",
  "key16": "41BppRqUk4P8o1NaH8MNgb4ZYHNuXe2G9UpKsstiQ16iYM5a8uGoc5fm8oVTFDSg4qZwqGpFh61Df29TrkGdvoAW",
  "key17": "51iqaSQabhcvgZexhjrJjkhUKpKKsNrf6823WzXSGhS2f9ptJ7X5Qoh85goCw9BrCUrMjZPvaAy8XK2wZaudK8YM",
  "key18": "55vu5myWWskMtady55vxQ6UWtKvFdKG5SJkAznBkeoQZsagsvEutGZGDmoUGwV2pxQEeYiEEUpsSc3kKhKPgGYBb",
  "key19": "4JBprMc13PnL7zVhaUmWJU4TWX75tL86Tw1CDv57eUVZbCvuA3Nnjqisf9KpFAKidMCpB5FLsgggC42HKpHwpHCb",
  "key20": "2Bb1J4PjukbjBGFEYA4MmHdqqTNEHynaZ9uur44uCq83EbkpGeNy17n43tKTTEgDqD6eSa3kWTMVK3vCmdZPF4g6",
  "key21": "4f3NWR1XwbHQUgedreb6vHdmYh4Azj3EutmBJeNb9GcPTpBqCZo1Mkk7EpvC5ydV2iZ6HmrRXbkfUCRoqfrwur1S",
  "key22": "4XYateYUjTPyQaWvxxVCD9LcAbPRaxXDM1YTadGgTKvZACsVtPptSmsV9aJEGi2woQPbmwyrQausqaWWFXCPhRRV",
  "key23": "3MseCUHnBnP8YGJgsJhBLNcV5YV5dRwujrKvEyjNKZKeyP5CMMXZa89PNgYUCVabWW1sWMBRPUzrXiJqLrw73Xcr",
  "key24": "2onbR8JJvPkYyEw9cVhiER5n42TaVdnu3HiGG2Pfk5mNmWibpWtfhspvBg8swpHY7G612MCgqSPTKL7wsNyjYkDe",
  "key25": "235zd12eLmTYSnV1cFPRVHtwdsPvnMX8t4wmv6sFjwqLseqBrYNZ3Zze5Vo8jWjVas3MMoDkrsJMhKGMbNT3KDLq",
  "key26": "3yU9UwahEKWst1bTKrPVHgP7rTuaezN5nPC61ujzYPSMStuX3cJyY9Ti9PEkhHVY5RuYHDJrdckHKo7is1P3CsEt",
  "key27": "5GN8TRmkDjQPuyhX2awBBre38ZxsTW3VYZzpLLNHyJ1rr4b24MJL3WVwdaYXJx1TeBUuwsk1YqwWndozc3CMdTwy",
  "key28": "2c4AWCHUhJv7H7JJ5BpmiUmyBNt2LtC5FnUkwgPnYV3k8CKn8a8HBcYMegDR6KVmVEeEvimTQBVvegYb3p99H4qe",
  "key29": "2doT4c5YG2h4Sjfo45ADjWsboWhNX8U6o43PG2kQsn4EE8krzuzj9DDTJD6LQ8cMBNQzfF6Mhn36ekv9cotBUmqQ",
  "key30": "65EX1gobo32nPmMczp7XmwbRVkTUjZZ7aMeodNSRPxd5fq82F9gdnV1QKx3AV9BKfcnSem9XG5YTAnLi6udA3GwE",
  "key31": "Rtqz6f2egTgkiSSsd4MsLBfR4y8tKoWfb7nnMWKWFANjTkkAFHeLkuh4gRuYw59S1GuVxHP4X1ZG3ZrCJpJjY65",
  "key32": "2QmDEHQD42QpgdcSeRDiejgbZSjDwa2UkT5dL8RPq9yeaqFE1AazfLHk1MhcpEchfECg8WptXTKB1Gx172HLBck2",
  "key33": "3oMTFMPGRPyvDLtuBYGQW356rh6e6Q2YdGZ5D4n8bAf7bh7HyyQszewjKFivWMcBGqb2FQ8Q7thAPyuLPGr1xtL8",
  "key34": "3BS8t9EDV6FgcAArKkEE8GWe19LPurPrq8m5jUNfoCeTQus3sVRrmTKg6XahecuLR7THuqNgRFN1Ba4GSDc9AjpV",
  "key35": "3CJ68rE2Bo5FoEB36CTJUdRoKcy4YFaPXonBPGNEMeQvvHztepELtVm9whwRcAph5iA9gZ5QP4paJeuizGXNLxbs",
  "key36": "3N25pQsbtJvA7FLP2Z9H4TxHk3vKWVLz5cWv8xCUB9ktiSXTgfLuCAUSV5KhLcGHMSioENraMtaBFYBhgGiYUq4D",
  "key37": "XWWJnGCCSuB4VErnDvcMA6BvBC4FMmG1akrxYqpYksMqZqgBjEwgjBsx6gVhjuunoeGKXHhgaNgkRB6sfWvBJTA",
  "key38": "2j2RC6NwY555zmPwp2nmeT5C3xyAKHyJzxuvQHztg3gcLpPiXnNgvSmkqQjuzbaYT5oNZQiQr9g4B5bWwDHCanJe"
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
