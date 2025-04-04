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
    "3aws7BpSYasA66h5iqSx1iuJHWSvZvTrcGQcBom4KiCiytEpCRkzsL56h5ksxcMxv7cpV9iAAuyyR8AHfNWsb21B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k5ZQ5bNZnkX9tNmkcYQC6v4ArGMiAUKb8ETyDJ3qKohSYK4vNDtjoXuRbGvVC6FHAGPu3ZP72sdBAM5mJmFa93G",
  "key1": "3raaKrxPBntCbDjy5PwEXj5aoTLnw224QVEEawtmqMfAQgKrEHNNcKHPdxWApgewUWoj26dQLj9C9aPnffiipseV",
  "key2": "3zrNZY5SruZ45H4Prua4eycmzC7EyEcFFwfc3HwAjZFpLtW9aHXrxYKJv4Jo27AhGMeJwsX7yskAdHmU6LnhLJUp",
  "key3": "2tqnxEcBUdaqibHH8fsMJ2WnC6sLiv5KvTGchKvxKgM5b7t8cVkxPR9MB2pgaYRoAL1MYiMKLy4FtGgFB7VaZE5T",
  "key4": "2hd84xZVjjov3xLXARe1nTNJRsqaovRNuq5dRitQPLjoemi8Hwnid68QptnZ5eHMpSzfJnVrtLgWDT1uNAAG1kKJ",
  "key5": "4qqYBaYNquPTkgcBcxuJrud9qeCjGW1YXVjLNz3Bvafk2RjjkWmqLXGgTgKfiuhCWYMUYRfxmmTLsJtdSTVm8dUH",
  "key6": "2UwdLBC31LtDbugwGBZqWWDd73XVemBEyQf5qoamyh8sdj4Xgsat6pN6V2PABcjUe6SQoeQKeUjhwjwwdL3xj1oA",
  "key7": "4fZAVizCqY7rzUDxvo1ZBNhoe1V4N7soudBGDvY3Bgvtw8eCP6oSu7XHQixHMctpvxWEsD4CpZ6naWPxubTEHLuY",
  "key8": "4F9LKdnbcnNLeBSjNChQS5CsZdSccXTPUXtzWMm5EZAkx8PviCAZLhPbVaX4MrDs7cMNR13dxauw85FjFtwv6Tkk",
  "key9": "3g2PJWEXNinZWWZdpUjdFc7punpQQkBdhoa1apwbxo2KBvjmabG1UHvQ7CEiRfstbzn4NXxpn4xqnCa83orqpsZH",
  "key10": "22zyuZMJdDkCETiUwPLfkwxQQrcSdF8KfwXgMggSj95wmQkAeXTjwEmoM6o2ktKpocfQqZhWXc1qjxbEANP1Qj4U",
  "key11": "ER48bqeEZxjRKEhuM1tUVryJ3gw3kmgy3Fjp12amrYo7bpDq9rdBnadWQW1Rajaj9bGuUAgyijUVtrXwvK9xg9s",
  "key12": "4tYptBMtgZLP5iwmVrLPxCx9fak3kPbNuo4DhSW1F2Xn6619vV46oUMd6X5YnVkEuFYUx3WTC9tFS4fW1HJERyYa",
  "key13": "4GvggJTycDY38F4QDx8LRVEzA2hdcj4cqPojjPvgLw9d7b21hZgnTmfu3NvkJpu2vNRzstjbYq2Jshv1MvKPiBDu",
  "key14": "48NyHoVgQ8j3F7kW9FsLXaDSRrzDTk1hoSCFJeKrzFP4RkcqtLkCasZWhhw7vDJUFubfZYV6rtcTpmXm2D4GJxtv",
  "key15": "5rTNYohATgBcZ3MYurnSRUngyENeygY3kWKmmKDuWSGtmJDKp4UyL9FGV164Zd1Hixmg37isFZvikqZSQJ41o3BR",
  "key16": "99BVfFYrY1BNbngoB46HNZ6W1nLq2F68Dt2kgz2TrexXFJnwVMCUFNgGahgEjtammqyUC4pyVFpNHcofnkBYaDv",
  "key17": "5vjzTDWqz6rRXEYL3u3iMZwmwEMKcXvfyZG1aR1vWUJNAq5HcsSg9P8t3e4oA2XRYBaCuZP9C84ueWtGJBg3K4es",
  "key18": "3QQPt8s24xPGG79fmBCiBdS9VBR2qUmUFquxbxh8Ub2HZshKDp1MqUaVn5JNvy7tnM5rLCRGcd7sZtBupRQ5cFax",
  "key19": "3FvzZNqyLLNhg1UsCkdigahgjgFAgLHkwbUqzWfrtLL7vVyaJGposf9oi6gJbyKnDZQK5YvcuLfQqBwcS6ukQEEz",
  "key20": "u7MFcsGHywLGSA6edJtT9pmdh1mS3BBbu7yQbUvcPVMKgXgoXfVZ2kFPZzgkF7yURV4XHhwhCAwoc7osW8ggKf5",
  "key21": "4C6J7psmFfP6kfKGR6t597VZ8HuXLVAUFwcmmUP4XayaqHrGyHMVkmGwW9ofenMpK3AqAHa3pLTnaB9vYhk2DP1k",
  "key22": "3WysMAX2Y4ET2RxMDdHRSoFMnHzTorDyBKKoJiRi5DTe4H3GpmZ3yQUFvsX1RRdeHj1rDTPUP5emWyR71MyTDMh8",
  "key23": "5aw73FCTnifL9riQGAqJdPuqm9vZHGyYrWywEVnUVj6RGAP3cdVRy5EAvNgd25UH2LGuEXyhho8P7b4q47KJycHj",
  "key24": "ukMHxrn4hBB2hbsM3H5wBiNZsjdnRYiT8DtXsRwGb4HoqrmrbLS1jRynBUdFiqwaSzR3YTNGUu7EQe5vmBMiK1E",
  "key25": "5WqVLdfpdCySao7EEv1H6FYpMmYuerJCCFW5nzzgTuYpzy2sn2E9L87eyQUuf9hon26MiPpSFyebe8mPm5THQneZ",
  "key26": "DBrjh47k97Jo8oL9xYaS5YBCff8VdUbayFxGD5GxCpPE5cRc8n599yy6VY9YBtGGiZYDRjKDFZPMVTFLmF4kSkD",
  "key27": "Ku39CcWBp3MuwBDbi43TdvJpNEEGR4YpxRzPrvDsUojzEXTXB3Q2qswtMVXYQkT74J5H44BYRr4FEzBtR5aetqy",
  "key28": "47g3E4ohBMEdckVZUbwvx9KYKK62EcjQNxqjWH8w4C5kihEq7je8oThr2MKGrxwDF6yjAXY4ogZdSjiJ1ed5VBFz",
  "key29": "57FSHWYDrokr2rvSA4VHSeYZeF524QU4mnr8ME8oXBiR4BaChnt34fjgLMnMUKT31YvXzFJ6uAa1u76wJGaRgPrw",
  "key30": "4YkK9DsoGu8MWwhJamqxxLFwcAgaJrh3YR1HePuqvwwYTnYjRdqUfRbUXWGd3ZFMe8HdfqGTh9PPpaYNyFwTFnis",
  "key31": "5XF172nD38K5YEnr3qUhqQceLD9fG1bTrhyw4tuRGuj3nsziCYAKWxmZyaD248q1AFgiGKzR35g24xsYoBzAAF3x",
  "key32": "53iUy8EadyWFW2pXUYb48j1vTdQcmjWadfUdnS5HfJa1hoAdyJW2JAcGjyJQzT5N5ZBLB8LZWhznXsh4bhR9fUK7",
  "key33": "2wi8MTKUzDF3PEv3azTdwvZBa7a92urkMX745tQMVdNaNTqdMnkGHAyT64jwFbAbXtQMhoqnr8EmgA62eaL1S86Z",
  "key34": "4uckFvmrggwWYmnufw9LEQFaQm3R6kHp69As5QCxDUQ933Wr6nmmmXyNw6oZHasjspbkWuRjQzWBMppLtyVcTRjA",
  "key35": "3G2DmhS7Fb2bPDuWTXDFMf5cFbpTWoHL6DNFHkL3QnBYgbW8n1baZ23kv2a3Y17V6hPYz1cFEK6dJdZcGa6cKHbe",
  "key36": "3Zdr2bz63y87UrpAgMjVZMSHG7WC4RracXx3bwUMxVmS5D1BBS5RFq2YP2N99rt8meBizYPeMv1ATrr2Nz2TwdUA"
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
