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
    "zt2zMesuf6MnS3pTqzsirBEHGa1R7Z8vrwLieKRb3B6YF9y4v565mPYnLSYEPhW4rLQ2cyiHP1dGh9SetniWrbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KcXYTRbmupqSTcF9r6eDMp8GoYH67RnVhqFWcT2tCKN9Mjxn12UmgqRU3AYZAnTNAdgyhkcC2uDZrsRs5mQoXdv",
  "key1": "2QjcssBfLp2DwMpoLw1hJmPR7HFTTF6JyxYrZuTxtY79414epePoQKET4Jqqa29BMpWey8JZUZTchy8cqMMXyyK2",
  "key2": "oBzytzPGPJGPsXYtrkX1WuZknFJr1bpsiUCkTAjvn68euCQKg41oxjzGiudidMGyAZFp3W9Zw1k45obNM3hDNHA",
  "key3": "3CWxmrnL6KgxmaSi1d9zkbRkdSUmc8JH7Te95hKZdR23ogwPYEJjK2mbjbmAYXSQweBvk4t29A4YZMMc4Bdq2bJJ",
  "key4": "5Rmy2uWc1iuRmzZo1yDBWTFsF2vtA1XkhgQwQzrP8CMAm3GYtJFa9i6ifBHA3FsHeAHHgS11rwx7a9tjEh3yRvXs",
  "key5": "3vhQRMLBVk5gqUS9M5PuL1ZutwD4gGfJdXVd9S5TZ1MuY7nQ34KffH6FwwkFuFWfzSXnPCEGAkDJZU11oucyXWmJ",
  "key6": "pi5QY6pSyz5HFbvqkiKqdb97T6A7Ac6vHr6JUJauyddiAMBVS1b6Dgsh9ujV3GvnWzEV6PiwnvhKbAi6F3VywZ9",
  "key7": "4Ft4nyyF97yH9iTc9iTCgrsMJdxbPMDRWd129viEmHpRSfdyRfTHahsSB6yxyyWUT7jiwPQanP7GLESsuBz8RHLX",
  "key8": "2WjjsA69xRynAu9VF6R15NdveNEUpqRz2bs6E87cqmRcw8SFNQCFoNjCKciiLG3niCYS7UcDZCfyq1wFuLSUc3dn",
  "key9": "4b5QXzhTmtcQYLWd52tHqTMVby7LchQb4zXVFq6285XEXU3YzpF2cPgNVYPhLvnrZT6dDAsHKmFLGu3qXbrCcpqZ",
  "key10": "3hdycD3RPz8r99ieEATHGa6CrqrSUNRonUF9HCxKrM3EmwdPBhQLtd1jH69rpbwBPkk8PRgnPzaxcVpJwXHWdavt",
  "key11": "48qBxHVx71pH1gKk7TmSbnsV8PzhcN1qiuz5getsYpfTr11ZJRJuM4dyf8z6h9Hykfq58ZtpjtsCV676vF1N24uV",
  "key12": "4zt75YfzkabfoAvRC7KVxzubeKZYCUw6w1gJVHaixoNJDMaHg61RtwozkMtaeoD9ke4GcZBfEFiw57Lm6KA38FXi",
  "key13": "AJcjzC4btNPrdZmQGEG1MFJzH8uUWqzzwBDqsoswX7FNpyrSJpAemHFgrfYNYYjmjMG9MVk9hLBGKxW8Y6p8FwF",
  "key14": "5m7jBWRPUpsrhXTyqDP8VKaZg2uBWARYwgiUQ9uhJ2rmJa6jkxsVSx1fSJioF4Be42dwEf57gJRUYiFVUrG8aTwC",
  "key15": "4VtaFPACgf2yt7eauvrJQisSGumRaQ8sEtDdPhcgFvBh9na9AmcpZ2UY6tMPdJxmA9KA5w9qtG44R2RhcUcBVMMu",
  "key16": "jVpEjUQNmJKu8UGCA75st9oCYSRY7erGpPEpZKjDvhNBaSYJGeARJc6XnnYf4iaoC2eeFhYXhzuYMRV2w3cuUuF",
  "key17": "juwPp5dyfbRp2iHGvf6PcUGQsPNBvdSuquaeWZ62yhpwXdkG31XGbGcud8q8uA81jaCBdpDKgiiBzyK7ap56kdf",
  "key18": "5njwvZ6FMfrLxWdTGSD2tNL2yKLzv3jXXMaqRfVZ1hCZ1jWS2CWQ5YyhmNkQqJsSPYFRpFKLgPwoFez6TrTPnxmY",
  "key19": "2AytfWLLepBYZj1Xds6Xe1uShjHpNTwPHrsbyDuKfA6ddCR86BvhijWrHnAhMGNUXWvxLpUAEGBgKirnGHpdkNdH",
  "key20": "299QwXNynycGFvw8WpFvA6qQ5FXa4UrexRET6xHzqhY52FiXWxsV1cAbAbTC99ToBxcygXJ1jueCoGTdhqVYbGpr",
  "key21": "1nJCSCg5AQiZECaDX15gHZsMQdkzFEQDUoWdwSrxYcwgZD3WiypgRPgdFkEjkSzHTr9sDSgG4h5qAQBXCJGL1Fk",
  "key22": "4w531krZLnucYwGeG2kqbnQkUkYWeQcB9dRpBzMAcss9i4hymEgTyvkSCUh2fJDKdMSNkMnooqBtJawHZMv8pY6Y",
  "key23": "663YZy4jw98sbT9yZALD3UYoqMEqwoLkzLdEbvB1MJn8Wf4XRoX8DhgnydapjmzSzRby92UHu4ey5vBL2jD2LMiH",
  "key24": "2NDXwwqYPMg4L8nJtUQHRK5WKHw3yamsLkFsdns5MYe1Np14N4fZsWfBErctNFq9sASeAntgCMSgsWvG4C45USNp",
  "key25": "641b51XDRaLUwpaPcy6tZyGET5vTmX7NPenDP9jbqGCSZrWqhxibMLRW8X4irJHnpUQndBopK9QQgnWTfopfYBiX",
  "key26": "49myXsPEAxwmitNDJRcqSM8jfSzwbCyxouDfmtybdoM2LRGsonAEu99sjuUDRYJYdntJgeEJ9Y68YaAFwokbpJ5r",
  "key27": "SqU2CdWRCEAhyaXYK7mfaf94RqmVgtkeJR66G52ehm4kMxXzj5Xo8pUqxYFj6qxJUeRT5pajRQRAeXdu3bqqvhV",
  "key28": "zNNdjhx6sZyh9xwB7Pm8JcbYY2DHjhSCMtEZMjxiBEwk5XHhvAfnyvLCDrGeKpCKQ7rY2geTDrA18xaZ9RN4hiy",
  "key29": "5a5i3m9nGnTc5yL4ktCbm78uwYvaQxhMWAeUyPqipjqUJQb1ExzcsTeQBoipvN8AstnQE2RQsZtwZLit7zyQgygb",
  "key30": "zaMMnzynDPSGqFd6cQXbEvbmqBsPgutJTBs7wrPay8HzWvLyAoaWrpsnJurf4f8rTaq6wAa9QbDRQPyBSN4dsoc"
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
