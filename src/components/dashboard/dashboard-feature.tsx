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
    "2Y3NUrvxNNFL6ADzohrfDpMMpH8sSjELex5zipzNqE6FpQpisrwxhaGfQiGEx6EnpbAtCainwtuuMS31iywRbWZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54SwBDQG3FRKTiLh4afst66gyW8g6QamZrDW5PTfUMr6CYLgbamqzJ8CKKL56PARyN9yA6w8L45Na32iaXay75kN",
  "key1": "2WGzau4m782eLMWETsWPaciGFtinAHsr2TcMDBqt6Lnbut6HWSU4ens8yJjqyzHpt8aBkFqHki99EmLse9KJgtL6",
  "key2": "2F8gTqtfcv2M3bnrnLPkigPLqwffd6jWatcRz2tyu53H7zsqWsKs3yfA1U8UwMKXudqUhnxdpzUsuYAzm6jiRH15",
  "key3": "2rmPuQsi1rDT7v5Z1JPDkBmQkaWT35UuaK3ujZmDqjU6hNchJGzKQbDvEH4nNzi5ABxPzVnpP86EDnoX7MY9NdVW",
  "key4": "RRJxedPAeVvRxkw6mt4x5VeK8tzE2gvXJAake9Cwz4KQKPJi817zrgr3SBoQR247ipvLhVR5dffBsdGDgstBVLP",
  "key5": "5NNNm3qMjJcSfHAJyK16ppbaExadQ9CEwCrXoyDpRYLz5a5q73BhNrPQGVj6HkQok1UR79HzgrExFfo4iecvhMzM",
  "key6": "3E5oD3DPmdLLsvMMh3prETLfWHT7W51c9koGDDE1fLjMRECZayvw5xB7dZGr4ps3j1Jyar4n5DZfccfq9CUSjGC7",
  "key7": "Bufsgybd5xZHmarwebJVCA4Ybq6nNtrT2mmCsTkURiGn2enkdLrUTGcfk68Vyhty8XZMctuBnnL7avbejrwBS9R",
  "key8": "5uFP6m51MQNCkheGUs6L7gBEV3pThGQDMgg7NfEqfz9ZWeYwYkqv2krk4sYF46q86AcssD7SZP3aELXcKWZqb71Q",
  "key9": "3itv5gioC3XP6Bp9cYo9H24z8Ypms2tqeuWtHaSUEqCYGk2dQPaHTy5K9tnK52wZ3WnSqvb7iTkNcnbfGSNjCsEL",
  "key10": "4yXF7wGrZLxKhmURNbS5rftj5wbznw5mTQ1v87qYiBEzx5rR4AZ2Syqifqa4vZYnj6rbUH9LmKZhg6vw7GFLuDnQ",
  "key11": "3TMk5pB4KssTRUwkbPDt9Xz5CS2q3SPWPuG3oMD5jwXoeyUTJe8rzoHV7mgDQrewzbLzakyy9BWWzQQmHEo5dBji",
  "key12": "2e8sX5bUrSpfBTvSqm2JQ9T8XCGGxubAm3RDvLqc75UE3u8TPyE8NNL9VguHiRMskuM1Ja8PnEKBLTHVVfrK7SMT",
  "key13": "HPgavswRHBeoi91fnL6QNtwSdBMGQM4P2iizLNDhAVd1QguZTwP7YqVDtqtaiVTuVmCdL4u5Ua5aXHpcgRt7UJn",
  "key14": "3fd3NmqAdwKcywFxUXVxG9RV5L8XZWj4DbMeQg4jBz2dfg6oF3CXuCCcSf9UhaoynSzHanuYtgta1zEsfNNnp2Tc",
  "key15": "8FPHjPopJRgpT7wfREfWrw6YcNitEGXLaUz5sUE6REkZZUatFBAQ7t9vimVXcVEuN49wdxuuBjsXAVSu5jaJrgW",
  "key16": "3ujWPjtvvcYcJomT235jGrCVoo13ZQ1ikXF3WeMwjUhBmDPrUqLhu7ECH2EBrnG2AbZ5VSWN7qhqwkf6swZtHfQ5",
  "key17": "5sX5vbEzirygyViNd9UjrSzKTAqEW5Ajj7sMCtqqwYGUPtsRsxDTNMk2TsecubYsCq7HzyxVAAvECtihiC95RrvX",
  "key18": "4hrBpWtfad7ThyKRrC5FkikP7BQq9qAdfryZdex93MPNWFJ9azvvhi8b5MnhjGxBUQXUJHS4dNZVuvdkeSY84o6H",
  "key19": "4JaVCCmDRA8judKJR3jnf3pxH7pnUKFWCQrp9qPLPx1N2ruMqUSS4YcKw5KSB1MteT7Dien4UEeuJkLrYS9ifgtt",
  "key20": "465YmyH8eK6KBqAf7Xv6LAxiuAe9euarKtm9XvFvEY6WaYkeP2vbPqgc66Q3mUNNkGtt34rrtQyNC43kiaWisMcS",
  "key21": "33oUHSdmDvQgG1TjhhYW6X4oAQBUV7pww8rLae5irZSy2f31zGFu6AshnY3fQJ5eD76utjPZQ5s93dmifhkUoRU3",
  "key22": "3xumRk1EMaQiVpJaoMGS4TmNVpu6KZu5TPNAEcZwaqBHq1WYVDuk52jQNev3MkDzucXB8Vx6j8nQzuzH7xyCHQmP",
  "key23": "4U8bFSgGQYQtXczPkf3tMKKKXYRThC5DXzXKkTzakJ7wJrwgPFAkagxEuycVGqBbDP9FLHKSLzJxFti5ENETNNQy",
  "key24": "r1CAjg7Ewy3FSgjHJKLpZmYcaKHwV9F3N69iUwQpykGUSdVCreSexHCZ6sQ1xTmDzA6iBC2VWinreV82FHkQaGC",
  "key25": "5HdNPhfc4KpcCKJfKJxh82ZqVw94omghPnneCr1DjsLD1RQj2bbTTKbmKAikwGssZs7VwZCjzfLKqbKVHGo8AwBa",
  "key26": "3GAxyBmFMKmnjfPSNjLMYV9RqcHrYzcmErgC3UprdK9n8f2ewTez8mEstNocjcdzJAGBuDWuwqrw4PybQYSrp1XC",
  "key27": "3AVheVFSryGx6k67zGPmF4yDdShwHJAKxSbTfK3azbtSubKW9ZcwtFYXmkkmoFrjiEWG5qxTHLiBfe36q9thP8AZ",
  "key28": "4ZbnQ7Q1rYdwT4oqQnQwU5WbeHN7PsvmrUUhnn7nfL6s3K4L8PKyZeutZxp76gcnaF4KuuM7Z625WNsWaUaETFKe",
  "key29": "23zK24iUUmz8pbqWgDD8B6NmnWiHZjANB4pPftgvCUh63MfUaDN8C2MWb6iuwTGnQzogsohQoF7izCcbPCcLBz5V",
  "key30": "3355YPircqj66bGXRLn3TRPyGQUCedDwbbePTdkjHCjm6UmgVTi8f3TxzQsmgpSUSXZU612TdWsaRU1edqjtws71",
  "key31": "5awV68p7GjYNcyLj1SCQ3vQv5ufFKg7MzxbJB2RDmsXnKDKTafd9F86mNbDh8fRDGCLUJdtgNijekNMYRF1LNaMi",
  "key32": "29VPbrCz4YaS7SrDh4n5qmgQW4T2xERmgzwnvLaXPLXNhsDH9PfykQPCqAaT1RJ9EsCQLYFN7YXMME22A28QqJ1m",
  "key33": "311t255xXUEzeZ6SXbpvbuqtXg6aCXM6Nhcv8R14pWFDC6SaXuKMC2Ro3fPwtGqiNpQS3Yp4XucwP9iz9vRrosJ5",
  "key34": "4pHEUhTJ4QGmf7yjYmccDGJZcGk9UH5i7CuAJUeACNnQyiPQY9rJ1uzXRjWjzYpicZtacNudf3AU4sQAXjESe3Vs"
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
