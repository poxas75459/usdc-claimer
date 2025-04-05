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
    "49Wubwf5TU9RCWw66x4APkvkpQqpX6cMUGPeT4K6qL5MrdXm4YWoSGYrMayNSL8EFPSZnhndMubpGAdLWGyBi6D4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RSjJBDqAaJb659t8xmX7fbRhR59TtdKAEgrHpPCEy28YhZVecGAKLfE4pyAELkR7HAGpqUGP7eU8drSCtNyDL7E",
  "key1": "tL6VSjYNuXph6deTJsQzzNvVij4waq2oYVptJftEuMhyYqwtQpQLrw8WWcJHJJAXvwm1ukBH8yz1Zpup99JuwDo",
  "key2": "4Xw9GLwN93noFyM38SEcKhkB8bNcgRwFiC6MCSgv4apQx99FvnXTN7fT8zSK2ncXBbhKKeLRmydiHZBsvy3wdCiu",
  "key3": "3gZZQgSHEzT267W4ApLMPpqY7audvya3QxqQYchgtf678BcSXBaHPUqLgkfVmM6b2wEngpvWbfkWszucT9gTvXmL",
  "key4": "43dgA4XAn7DgP1wU7o2BJPtDcRHsZvXz2JgJANtjq2EGpwXNwerpZhUhYtBYyN5H536WTsKW8ZTSQFxgAG1NGDyd",
  "key5": "22m5zFfjomEM4TT2NLopZc8Kh4dMGRv9BgFRMUXHwfYCzsUofbjbaYghXKbS1Go9XPVGFchj3Cd5kuz992ZtgQJG",
  "key6": "4ww3z5SwpjuckAd5u4om3UkjBV7KtNkC7pcQE15aePSrZLCF7ifEJXuFrgDeiMH9cKuoSxLGED8FG5nog4Yo1U7M",
  "key7": "4kyAS5uEUYcdJQWcatPkK8wgB9QnPeKKm3s8C8qYdhLPyfokbP9N8uAkUY1Ngu7izzKax34Nr5pN62idwML6NRg2",
  "key8": "4FcXCqBSYRafnE3KudQSrJ57EuVBDdRCktfguwxyEjCsGjAiEfMJ7pG4AUG6SwB8v3Fh1Ld9m7zUxUTmMP8tF15Q",
  "key9": "2KquejLaQxW8JMm4ABq3S3UXus6YQeLKza3q3NsJ4Py72kJP6yFAacK45TCVKymN5sjBrCzkum3wDoAVJTZyNtbG",
  "key10": "44WHKSN7H8i31af4HveEMQc1QhePxTYAb7gdyWmiYLgu669DxAXXZJgwy36B6oLZbf47b2gMZJ1FFiwR86pEgy2y",
  "key11": "5tx1zxtEv8Jsew6G8TZZZVTkLWJepzFL63gnNV6XfBnxmVBy3hhi4dz3nU1AxapBzQ2Mbi2tKjjSHZwLuWuCh9BB",
  "key12": "4sDQbztaPXfTp9eLegE8rMq2jz6ChcrDfv9rhMP4xQfT48cnf8Dqk6FD2bsEMaQ2wbtAAeumYc9ZyriW8YheEaCP",
  "key13": "3TioKrgkPTKAuroemZVzaMP1F1vLmqJMyVo5DqVqDUwJxJttyCsEXxtAZ3WPcyaeB8731oWXVkBY3D4J5vYhyfM3",
  "key14": "52WrUAvAWwDiQvunvSxFkT6VjHY98KHzkKMQXDhTALArEmbBSxxjByghS77rEy1ERzc8ohFqdtedYQgH2zHT5Dt1",
  "key15": "5NzaHoqsCtHJmTgVz4mFnCyEE7nCsZf1ifZAmKLYDjPxemRGs7mnycDpsZ9dgxvEYL7k7KL9hcsK8vpjU9KACsJj",
  "key16": "59Q68VnKUpwgqWbvAUk9hfeHsRyRBUMKv9FRSe2DFtCXH2B4UuZL1dk1CiHNk4HRuSfLfgdUv2BFxkMJZ2oivQFP",
  "key17": "5YX4VdC4MWvCRrJVCMG3TqJvFW7WuJtF8iitLyFpxT2jPqoHi9HCuAyW2AnpDJTucGiU68iiRGCrr95c1tHfoQVy",
  "key18": "3R5grzekZkce4hqkrAUeqQWGu1yfwRpnm69cZCx52uYrRJ6eX3sgW8g4RxczWrZnbAzcyidfw9MeMMq9JEe9u5Kp",
  "key19": "3xm5hZjL9YtppAFZNE5AymXZdZpreT8sUbgGH6dmL9bH7YJTb7NftxjJ9B71QNBcU8Dy1XKvZ9imGkCzWjD7S44",
  "key20": "5b3sXiGDAkq19LxJj66LzQFQfULq294SFsc7hY8KG6wo3ULUX7XrGtDEM5jBvjUNA9u6PhbAZhRAEvEcA4v1Frjn",
  "key21": "3L9L67w8WefGC3XfbzHTmYpHnAmthPSG73bjDUbo5dbDMo1w71QiXws8nRPd9BpNG2F8RH19MjZUk2ioqjAWp4Qk",
  "key22": "U2JjutzQ3pTCDdWGSgzuBmv84c47dQYb2TEArQ5PZyVJX2MUQ8y1XGVao3SpggnidvwU6jhVuykJdjzyWJgq7hj",
  "key23": "5rt7SHaBwPqqPTGhK2oNy1gw76jbREAoMJFSFs9W3bRr22tfmrF3CDDAAt5V7fDVFNmbCKSpZU1oxY9oLX7zkgdP",
  "key24": "28FKkMcpFvfZGX2cA9aNtcEtDvfQug7mXCrUnpvCPUw8iYYnposTm52FADUJKv848oLHRkcntJV7sySKUAPgZoQQ",
  "key25": "4ndbJuUM3BVQVF9RZonW3zwQv3CQsfHSaumT7DGYjd8LcupSvrS8at69DyNk5j4ddbJbSEoMBtuBLAsdwoyQnsN2",
  "key26": "5s6eDgsGDnPeWvLydS3gX5WxVcsWJTMcBzJC3FbEjJo7LrCpnWpzesDfymFvuie5xyPSkpLwTaujSri1chbF1Nzk",
  "key27": "4FPDEzPZC6tCvXww35kWUPqPCV33N1Xec7iBnke6Soj1bq3Sq7bFJnrPbXciAJQvdXPrwGLFJbe69qhFwwkGnjh1",
  "key28": "5X5Z76EFQFxpx5Ms8EzDaqJjSY1NEpEhW6zN9BpRDRdm7eYnau75sbPgJijZ9BZMtJPfqq7RCM2A1xayzhSH8m9j",
  "key29": "TKimd6SRApPxJz8F56BPHr1RDhSiVBgds6doGkuKc5c3TRMN91qrsX9z7wRUNGwH7HpJM8gtzdwRVtBLHmEzHQC",
  "key30": "4Cc3HRTqDZFBCpFKph6n6bM3G9iDChJBAtwRNszmxbLfzzhygWRr4gx2LLkqpu1huS8q7N2EtFXqwLgtFev1K6mG",
  "key31": "5CtgQJv5znaKs7Vm4UHEQ81PzD8p99oAeQVaQCx7P7tNuHTh3gx7EkoXzsMXGdPo4bWBtrSwMwZvQuY3gf8RbvFK",
  "key32": "64uaDTLZHZwETfk1Jgkt2KU4wQYrVJyVJK58nL5qeyQ5QjRdNq8SVKHr4ZgSy2DaDJniQ4MEsLiWhrDoNyTyqEg7",
  "key33": "3JhNG3hriyXAzLmtoGYjLoNTpBMB4UyCAr9soUPrssEtPCijUQG1gR319gUuJytMEk4ayXykXbzkuUePfmUWdVaZ",
  "key34": "4gzhfm5cFL5NzWS3HKuin7bUWGwha1Zz2gaHHo83mFGCpt26Ymswz51jwDdKRa8fgjEu2ktT9KqJjXaNKMsxCbZR",
  "key35": "2ixmtgLH1FQcQg2g6Nuf6BfwYnVnHNn8ck7ZNF3aZe1h5B8QwQGgh3vXRnS78mkYzbwSsahQuEH2dKYSyCYMjZS6",
  "key36": "21CfxrBU49S6uLSXV4RtQBn5PhUjJedDrxQ9NrTJYu78eQjsB7ewUEFQ4T5oHpHACNxqPs9mrFAxCS2JPMZf8QjS",
  "key37": "3sfApK3bmPDFU5zPvLwiuxUEmv6DTkLU9D4CNYZPBduMWYb5y8K5fCndU7TYFqnDbz1KAek7byMy66agaayK9Lbj",
  "key38": "5TyuBjCJmVQgCkNNRzTkxfHKhJcZtyT9rbwcAQMAHTzuE8PgDwei8PQtkrUrevwiFoc4f3hhjfJBfXvyMspj6NCD",
  "key39": "3CM8hupybch5xiDpGn3WhK9hYk7SA951w5SksRfT5frYQrEjdzfHK66QRTYKf9WM97MACn18tPUtZH7Hyv53ZpbR",
  "key40": "kmZwsVwwqCBbGMAemvUPcj33hjMNwEF8YtfisoAcpKnSiBrNB1gLuvjmxS1a98kmQkqK2Px1iYt5ivPRSyvqGNc",
  "key41": "2KTvUK3AYiK1Wu57BR4YKnGxf11c21oKcGV6EBbkZwGMoquASHZQ8ioK3wLTjMyjv5Vrwgiz8G8j9nBHxXhnubN4",
  "key42": "58K4DTJmAhudRgyDKSajVc1wuPUp6irStnCT59akyJEUHXFh2MskazL5g2nSzYAgNFo3yU1XABJLcgtE4riUE69D",
  "key43": "4StBcb3kvGypvq19sZb8ezdZJyF1ycexGNmKrtXgj1LUNRRGAWYYWRLF6L4iSjAg9MifxgVce9SACdfU2uzPi7F1",
  "key44": "4pDy3Qh2C3s1PXQY9bBMjDPPr8zZw3FpArM1YVC8yTkFZPR8CwFPnQpqAWLtC1DKWssL8eu1L4XWLhMGMKi6coad",
  "key45": "3t3J2BhfdVccfTdQCarftKDLjkAXqc8usSqpC4hu4SH4U1HpAjNJxNanQcntmLVH1YSqxxtZ34PTMyS2Rabfmpsf"
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
