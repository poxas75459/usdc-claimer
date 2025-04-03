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
    "4CL6jACsdAgt4jtoVSh6pTk6Qsp8jQHmyqJxgXPLe5kPW23E1pWxwYJP2PWLa47Ka4PdtmnaMBGHEmPcNPQYNWp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TiawEXsJAgqpQALRKFT7qr5j37kP3g42iowsrEkJ9Nxs4Vqm2Ug1e2KAeGYe6CZpGYz3iWQgJffCCNhCM5ZJ83S",
  "key1": "5aCD4HJkJ1XaienMXDmjYdLeB7r776B2Rh7Ws4s4HvJXo7BmjrmcwGSsvrsJBArf2BCWWdUhiN6fqGq5orDfthEU",
  "key2": "46J3s8a2dwDM1CaEMagNwZJFba6233qcw8QxKv8aF3HWabtzpomgVobfFHYeFLspw6MDLrGfydRYXdficnCS5wBt",
  "key3": "vK4HsVhmTpPFmtNXLfYB9VW3jBskVNp2q6YLRdWCTppxqsUTuFAKPJo6XrMGhUjbSMvVdfBruzxZrrqP6MgzsUa",
  "key4": "4D4nVeTANG4Bf2Zbd3waDChgMSMpEqM1r5n8YJRDXjqC78wdCbgQeEs4DXyyZ1idoZj5QfpbgQ6aqBGTBuScRJti",
  "key5": "3JihH73zatBmHZtwKwq19pG4pksqreMFEgGjyccyMnD7NsF82upuj2LkBtSdjpBM8Q7tW9rGBB4aax1yTLXopgfo",
  "key6": "295isuSZtm2GnJ8uz4TgSCrU3GBWKTwKYkpXokWGyXyBP1jX88iRszUMcDXe3iBpWk7HaGx8ugxS6dnWDkJdXJcw",
  "key7": "2gFWN5P84SoCQ1GpbA36kW6zJqaK6gH3bcwzRdvkqEvHTV6NNVmCTz2fj5iveZmKovXy8EjnTGb4rM9Xffe4RL43",
  "key8": "4ZDazEPpPwREmXbuu8tGk4nkG8McYk3Q718vT86RcXoxh27WidEbdSdP8L3UrMi2NnZJ2wkRc5TvPYgzZghTYnSR",
  "key9": "4kAovVgVPUFjzb14yN3xTvJEzWbS4E4kDWN3jCuepZ3aUewminr4VCmizYA4XHxVWup9kjs9F9cqT6RRoNAcK2gX",
  "key10": "2SFj8jGBsHoc2FmAXtHPJnvLyuv2cyXZA5CpneSyC4XtRta4FZuD8jvxZnhiKBJ6uioXWzFHjkRwuYoYLcJ8pkxd",
  "key11": "35ZspSYvfMjZrYdiTJBSSsie7vDWSJj46hRmTqAXN35M87DJCbeYgHoRhh98uSBafwmC5zkgvj1ekkmaNo9PkWou",
  "key12": "5aGfQCrkwjHEWJXAskvAYGqwog16yqAscbMRfaL9LJpLju7z1rgMt4N8USMHceMr9DmSyeYzes7hfEcVfoNow1VR",
  "key13": "ujaAVc26tejf3NDWbHzTUFxxuMMSNwab55GiWcuhxoAA6fy2zE39wHTTjEdzREW9figYMBKKe2MiL8vYYTnvGY4",
  "key14": "w4gqkxpyUdKFwzAfav3C5SAKxyXVFfWtBmaj94KBHPiKXq7T7YQgDifSiunzH6pSFSGwas3vQeYXqUDNJxvPTSz",
  "key15": "4NpExSkgAWPncN7kFPogCB3Y7nwcmJugZFxMjzFksUmorUtjhEvaoi6c2qqzzcAx9szmcs74hAXMbCJR2cb3QPSy",
  "key16": "4tfFQv4qevBbYu9XEmpKvS5ZeoeJHQV5gffxT11oqVBE1vHSfHVM9YcyFZ2tSjuhfo3S8iWttbfHLRxpVJJtSRjr",
  "key17": "ethSrfMmxkufMkxVc7btFzA7TuRUtgX1SKMhBmJDc1ip4TRYVzf4yTQjXR2xyLYqcGsw47JPo4tKa1mXG6tCHMy",
  "key18": "4Xgdk4kbFvE6KFPRWQShZZirsyvoVUKW5sAj13fggp4o83zDu995J5XPzitSDneyKvdWLvs37csgyLGGK4ETjv7f",
  "key19": "3z6LDDa1Ddjb9CNhPJNwND2RiFzFBKcfq1iq878vm7LZEHzJrJ97msEbdgbACpKMTUWuKscjewsbrR7PrRceFc4x",
  "key20": "5X7FKBwn8f3NDPkGaq93CrRy71raKg3FgN77QFot5GJXZ1xiKR5BX1MUszA6W4Lux359qptzNz8t2WA5x4DJQWF5",
  "key21": "vP5nhZHbHRBr8XPdry6HCffJoTJ8iASrguHCgRmttpn8qsDdjSx8NjUvqftHvMUJi75Dqhc7JYnda2uzcVhDJwi",
  "key22": "4z7v68BtyukAUGre6SXydxprtouh2M5JJNhXEP7bfBJgKsBZx7Y4a6rkeqnG1PBWsPiw32t4mMeaB5EtTkCCSrWA",
  "key23": "2My7MiKdGw3dpZ1eLQNLWodaQKPif4j7YiWuiUZuhVjzc2kSk3263EVBjkAg4UimLfY9qRLjHtGe2nxWXrL5XBrp",
  "key24": "43cCG7fsykuyTRVbgudNtyyFZT8TCJiMGfNikFVp3Dycqst9cL6GT5bKN9GNgEqGAtqbbj7G1eiU5hg5LNZEixKY",
  "key25": "2sLkV78LxeccVTxhmCg1ievhTqbtUjTTXUmtsxxyZhS3KW6QEisfe12iSG1o3hueHXaVEsBD4bBhnu1ePf4pSNbJ",
  "key26": "41FbKTJTDggjH3ZSUHe9FN4CXA7CR9gnfujWiHryYhefAoptU1HEn8SJiRF8nV72RwymrXBaVU7k9NKVtjzSSSRB",
  "key27": "2qYybtsESPVH669DkTbapzkQ4rHmzqRBAmt9Bm2ubAUXgKQ5iFcnfEUfyNARrFPT6mcygEtH7C8EAZHDpQedrgN7",
  "key28": "37MFFaZz1aANLLh7GitvbdGX2XcuyKjf4FWaWRDjHyRF2h9MAM7y6pQ6Zc8Gjs4H7hEeBZEGDMKATWrnuRk7JiD2",
  "key29": "2R2SzwFYZ9Y5mh5RNGbfQuhvywMbfStHtUxMjJ6wranX8KW42F9RGPrs4Q6NVTk5PpS7GW1aqJtd4mwG4Zz5EGZX",
  "key30": "67Vsiu7UBJEw1Lk8nyexy5PFCD2BpLCUbppr8ArUGk5YefChPNraAfBSwov2btcRCkuGVa6kHmsL4rm83EiEpNpe",
  "key31": "3TCCUJjX99MHB89SnM6ijcBrrR747ejbhKD63hTqdG7cYY5zqjNxvHEdMuengYPQaDoi2tcMa1rg3LozZviTcLxz",
  "key32": "2GydxEx9YiuE8eNELYtx8rhrYUUKY86ejaTYYtxwg2ZASmKLqJenSgDdZC22HYcns1hF2rcxDc2uBTjmz69uLEqi",
  "key33": "4YuN74NJcqji19cPCRxi7JUQQUjYz2AibCk2iNN9kwM58yCpt2WJtnv6kqgFNXBhaxEz82Jn1oD2eAMKgYRsEn8a",
  "key34": "2nasocVQUM1VSFEwRMZuqKjJR1pYtsD9znWFWkysZhFs3s3B83c4kTaQgTw4aXHfyJ5iBo6sJGTaoWobehbeU5xF",
  "key35": "5pwTySd8smoWHdBp2i6H6DFmJZJTGv84LBqFCDRsZh1fFW54LUz6CJHWCXZNC5PsV7349t9NAYPjRPECPiRdzTQC",
  "key36": "3UvyieJYqamwZySjjF6PG6T5gNjw1MekqV8J5pLkTQeY36RAA2rLLzkm8LnMqqbNuGx9GS5Ypies4LaSDQ8jGKEu",
  "key37": "kmTpUgENZnZCYNL2X8hAwnGupKB5pX36YuGV9EaSYMXqkHP8xQyJbC1NuorLz27zEuY7QPZociVmFCWod1amD6r",
  "key38": "5aN85DgkZcEEPNXVrHa8rkXBWqrj5xCpjQevFsMAZMzSC362EUu5xFVyxFQ8jep81qCjmEkBXRsvKafaHBMuVAH3",
  "key39": "3qYLfa6skZHAmXWg93kPTLaxEe2EuWZC24B5M4nzT3rJLPg1PjHJT5RL99AaNTeoY1dv4jjVbeGbFUUsesZ7cx42",
  "key40": "4swPS4ETwyTb6cT2hL27WjNNui7WoVrM3tiUSVPKeSHVu7uKChs9k29fjyogPciApS9nvWR57ssuhm7Xdsjq7whH"
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
