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
    "4NkttWb9ie5FQHXcqBgDaQsvs4Rih5JYbwPCoHzQTRPuRnscovcnkvy6EQib7rUsgHHwEwE8MqgUnQ5FzeJMZunb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KXeXQgCRcS1312u7Rs42Rz9Sq8XQmMhp8m6LCroGCQC5uPtfShi3VxaXrnbdwJWvVUmCdeRiYYs5xwY3CnNgS5j",
  "key1": "3MR8VePxUevBkuTc6FmVqa8Sw5rvCwDk3truyKvF4C9WThchWCTiAGRizvE2omuQhrRvRJ8j5MwmdsEA6MzJ5Yif",
  "key2": "3KCGBW35R7BdKZpKrZP8oAuyZrF8toUoSWQFZzbk9daD5B4qCAepAQQ98JmR6Lya1eTre9r58BbGh9nZmsCPW3L1",
  "key3": "3ibEmaCPrHv8QyC1Cqc6CEqQ5mPMZif1hAEmHfKS64B7SEXcTUYSWXt9JQo7fj8n63euCTTDABLjkEN9woXizBF3",
  "key4": "46Y3VX7rP2QJLHK9XSskEpfeY7ous2W8jkedYqzmfEhGE9QkRwYzpgnmB9ejJvs5uv57eS59zniYARuaYo2EaER6",
  "key5": "3VGDhNjnnBnTqUWWQRu4bhAsPEuvWtqrhWFUtWdBBufMAQQ2MMKDE8jzJz9oUBTvTo7KtLrUUscLSphrfeKAAnzL",
  "key6": "5gLeJfsSc6yqnMTHhysx1P7WvW9nPDqCajJpG1LKL9ZJk4pQTP3weHh4Eck8VKuCEVSUfxSWmEuPMvuvw7yhoEsi",
  "key7": "5u1Db5ToGv1vR7tX7nm9YiXgwELbThW5Sed65qgXC3P6vWQ4YMPs6B4G8NBq8wQrrWjhyVM2hnpQsiUXXsaPFybk",
  "key8": "HhdeUYqY98DNTqo8Fz3LE4gY33fQFGL4wX7zBi9B281wHZ5d1BBvomhAG57yY66KafjTeZdi7b6dJPqBNAEaTje",
  "key9": "3mmUWQNcfDxkPVZWrqANJP47btSvnCMsRAH3htifs34iqT6BsE6LR5zEqvCpjUxX4Mo5jJRSRgPH2xWf373RQgR",
  "key10": "2G5uRSZajEq1R1NLc2WE5RsKHJCQ6jj5fo6dzRAkEgPBmYdbYhGkxVMCpJZhocim6uyu9dwsQ7tJ6QPXM3yM6s7o",
  "key11": "FxypwzDaXokbhDqegLFK7s34j73mFzAteq6AAEYHASsWkGWydxs68cFytGHaEzUaCWzVghCBdqi1DwZKWj2ALWq",
  "key12": "5tFPNrnTe95P21jU4mYUAFxG9mxSLQv1Aqk4erCnEtaCmkqd1ktUiW3UtPTXQmMwaL9su2ephYc9DwcKRTysd11m",
  "key13": "4bRq6taNkt8uF4eg7QzgUkNww1SxHocLcYvmQqNKanTHYdQbR9a2WzB5m6wixtRFv7qRZ4MYpsCBgwAjKE645xjx",
  "key14": "NnYh6z1Usw2Xi4BGM7CXJCM37cBbua4YjTSDPLN4QB1ffaHfCfbXtY1kNjrwEeMrdzX9ikD5tpiNWipRq35NBkf",
  "key15": "4hoDfoySnoUpYp72tNvr8JGoqgDbGJkXQAGmod2vVfQTGFSNqXQFaPJ7ZFBMknBMTXjRWFKU8eAMNtNzRWZt2xh3",
  "key16": "3Q4FkqD8FK47Kv1cuUzvCHg32yQmKFehNV4NDHv2DYuCDEhm2X6nAWbo4v4gdQXHeySnDaC5ctzz1DHwmxQxZndi",
  "key17": "5kjAnRmJ95X8JZH98AiJU9pYfCgD3nKJCJ5D5wtnJENp9EJV9dAnRM6BiSd7nrvcCQFGgf37pQxesqfTECCJ9Gr8",
  "key18": "4pNp8YLwBskrwJeRWoBoyiBxwmUa9Jx1bPpCr7NvMybTvbULXZCkBXjJ1uqBMXKtimjXRWxZXVd62FkfRNTWFQJG",
  "key19": "4GyAJSXmuoYFfk5GoQF2UHRoZHVqf7CHpZJqPQhGrR7bU3QaZfFevTnVPWSBaUXnUKKqnUgp35PsNbQAYoxYcUEe",
  "key20": "FAZmJRDnu1z2W7VAG1zyXkGyKdtZDMtkwydzzZD9FyG99HvDWQkzJox2WYUdKGG1f63A2grdh3XaDm5tPUWW4Tj",
  "key21": "3ygHjksBci827faFn5uyca1d9zmJ6EbXv7fASe9nnRtpznhG8m6F728gwWAnLVdcfVFUiYms5RoZAFCq2bsW7kf1",
  "key22": "CL6vSYiRNJHnPGymUrd5r7wd3GMfjvenSjGdk4YFW9MgpaALLiB5iUSHx2hXCWqBsfAwR92PSTUxM1xeEVUU2aB",
  "key23": "5WGv1YexCTCfH7AsQJiUg4ot6g8rgYJ6nnTCTBa48zsqbuko5P4Cek1qWXymkUyAh4mP5Ub72BUH2qfVoL7dwUFZ",
  "key24": "USS35HnLCCPkFrDYkBY9sLzdGSTFBxpMsmgv7JnZs2FfZBMYnzpSm24V6pGskLVvUXeLb4yBGXoFRGBinxYke6q",
  "key25": "2U9SgdfWyVvMGmVpdgW3583Gs1mHSWkbAfTcUyS287Zn3TvrYNxS1bFGtXqNNoDTtUd6TQbo5EZF3sNKEoNBDyPw",
  "key26": "56zExmfaASpf4XWCLiEeogM6BHBz8MgF3mGtyHdX6bgxDsG4mVh12ZPaFB6hvuGS7a7vFNhCUW5iYKmEmyFSU5yV",
  "key27": "3pWXdnMceytMbqwV75PyFPa2TpfwcjeQL5SSfphVSQcbfjVXytC7kJk1jCznToeFge4eXvjf8SbDL4XXiDtE9yrP",
  "key28": "2dwJ9LKHJCZQeekygq6RQMjSV5LjCPuNoG8uEn71SD9BS8cCVux2m9WqGtLVNwt4X4QqPq1GSwV52mJfwg7AxNdg",
  "key29": "5kXJaLGhu6huvABKL9R9SjkaBoCtBVxf1sFXRSPdhKcijZgCRoPX4GUij2G3qdQwwMqDbRVXys2uJQ16dNfx7utN",
  "key30": "5CVmeo4THMnikxJRmLLUcrSSicadfUk2CbXWPj8ypEPQzLwccBKkEPdh1BYsvfeYLCQTkQNbo3fkiK2XYmGuSvHv",
  "key31": "2fJhfyyU6jjuhyqtxgHuptBNaoBzwRTK1b6Qa5XGZZy9ysoksdWC64LtjGiFwpPMRnGNWLDZrCXTfaGX9AfZqsAx",
  "key32": "kbNBR6xcGdkiUBxnsV9fAt6vzQrW2Tn8rmwyEBtocbGXJNtUyTa2Nn83vQ7muvYF91hUdN3rRyFUKnw7BZiydyU",
  "key33": "5dqTfs5V8orbPDTGTycKcXCqcujcmLbqe4hgyXGncwuot2ghvLgkQGUFB6x6KEc8rscJkYHNUSsBznxPDkLfMzaZ"
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
