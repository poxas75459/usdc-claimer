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
    "24psgSn255xKAMFq4SKrsue4Pviojsr8mR7DmsQG24eBVL3YPUWwZzcMBAQnHYXQNezbcRamqJkuWSsQGxViapCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DWMogMRhYLMSEM7hMiqnXYNYPdHQkDDa8o7UpjaQVghLNyjhFJNZnJuaq5PYsE85YzXGBBpipSnZ9EggM3cqAAL",
  "key1": "56BLavQW6gdDQNjapAmUMbAuPscu8chUeXr7PCz1wqvJvu3m2AF9jLnHbneEG6C1nM9L4Gu4uRgPccEEjefcUnE7",
  "key2": "3UwqjcNPmSM5ERuyiAuS37YJ6V8fnSo23FyeKJvUUrMTboSHg2VpMiV7iN4pa6juxoS64BserHqdgCvZyq3SByfc",
  "key3": "3heChjW8xH7zs5t4FSMVoytHaHapDD8ba2527fTXAbmPtVAaFBNfDnDYgMcLXWCJhDohnZFgnBaYkxZZ13JoBxk1",
  "key4": "2QihYe1LFx9FEvWuAWK72H4v99KErEndgsacV684gQ8i9MDJv8Mru7GzBCfuyP22UGVfHRTdSJxjdVmMaCzLmHdj",
  "key5": "4WSyvSWHddgAJUrRWVPo1ejkSCjFYu8vHwdjBSErR6z1jG4gjkwBsq64hJiTEjqTrvPG8hW65oJzvLc4fp1Bvddb",
  "key6": "5XQXiLmQmzerFTysWiDV6xn332uvR9ik9ZWwqZoBCrpscE8yhHo1ELP4Ba2FdFThjsidYgSxmm61f1E6MF8ifTBe",
  "key7": "fzyZrr4E8sMKr9ibJqwjFyHMTzkjYD3nN9WkxLJw5LGEdSy5fY5jLvo7K8tNkiQW88JXDNNdXsQxAs4imntJm1P",
  "key8": "2g8f841f4zYGzcovVYzVbL2TsQiAGZ3Y8AiSUiTnrtooeDnXYzMzEuv1M76xxXPTHwgitpw6hjbgvtXUpqyJ9Lkm",
  "key9": "5ni4fnRZxn1JAu2ijWo2R6CLE9VBTp8QsYFScPkyFXrWf9Fz1jrshYiSbqFohMVgQR49RwooCAcnn2GgJYUaYEUe",
  "key10": "2rkwYwRdskXvmsgy9isv4jefw9NupXmRfyfiE6n8t3d2UipWPcodZJjQTP7rZ1cA3LyQvr1mbJyNABKaH982x8SC",
  "key11": "yvEeF3kBXtX7pJPczfDMEivqmEZ6DEuFe6qW2AxPurvrFL6xiyPTWqH1ZrFo7yYSeoh5WngCCC4A3p2DHWHKDtq",
  "key12": "K54iSb1EAMv8LLSjvyfPM3NRJUDcNdkjYujd5dnzdziBiH9v8v86bACCqhhKAhTYP9Z4wtA8McMEkuvEM6J2bwt",
  "key13": "GWAk9VEVWeXwSZEUzDp62AcBsyY4eUkngGAcg4mmmm86BwGuTSuSnYS4yB1qVQLBDmkvH49CFL9iGDZ613CDGzf",
  "key14": "2CknfQmFthrA6Uzni7PGfesBRQXAjkcfjMXHN9zhB3HgQBXWfn6p8FRrimUhLAKZ3aYVQBJvuvfGZLFyjoc6B8xm",
  "key15": "2E2kRyzwjj7hpi7X5neNPyD7NTYdiaR9JXrMNnsUp6swUi8M1G9qzK1AzaeuimUfdT2uk1tteMTWgymF9rfGk6XE",
  "key16": "4Mu3dwrFmmjzT6X8fDzpxZki32wTfKVmqefJYBpojuchyK3jjYGvRGWbHG9RSxGsNhY4wwqMxooDduRFZfCZMvXn",
  "key17": "4VGNUmELHuKgmAz5enQURNxNr8fnbAfDQ5yr4B3zPDcazfTc3PWgNqtWfpzjb48DUE2BjF7uR2ytDN9K2r5gjMh3",
  "key18": "yqbfiKRRPWsrUzsTUdu7f16jdQmW1tnr7eoA4nbJnCkEoJLuSpMuzojuNjGzPwpxnmTr9PG2dMaYMJapN7nGFyb",
  "key19": "5gqsKXavgzZd56qiiDDiX9ym2CvvnQUEkoDvXZdNc1hHvRpBF881h1EGuTFbVj9Y7QG5XnDXS1NjFLUFHFTFr88T",
  "key20": "5GmcoD91FLNcGVP2ZVcUjxoQSQsycnJNbnVftpqNQiaTSx4jnP4unEEVVYqyfwopqQh5QXPyw5Wo3QrFatPtcjWi",
  "key21": "4iFzsJzK7pgpenBdsxKw8QC3fuhstx3jeiUxqWkbj4uGhqM9e12rg7TdRiF3aY4VtoR33obPD6sSRtFGp7DpaecE",
  "key22": "3GYrkvWmVAWCqYPMdF1yRwjwD9SfsBSG1ZfR7EGcP3FC7MUrK9wiRuGjFkRhqbyveZ2S5vdsDQmMWcArdTcwvE8r",
  "key23": "3L2Jah1kWdL2dYdahWyQ6q5u8qF47SH8LxuyubTy4CGSEiZyAyHzh7otjAhHE73x8c18QiEdfNhgmdneoj8qGZ9V",
  "key24": "4kZktLXLLsCmaZCSheFBrCydYogqZBrZqbGAefGsMnA9DKbzZfvTkk8qeMoriEk5t7RD1E52cB3EJ4S54d4rT3Kk",
  "key25": "5m8ZnU6LKhfeNuVdtT5RL4zypTShK63KkTrR3U3DzcmyPp7EqbKCBgNZczDZFdgJmt98x3rNNvp6VCAtJNPTkce7",
  "key26": "3gVSKPor3Ftq3uvLu8YYahnzcGcWpRDmF6KC8gHYQnfthFp3r8JboUvmtjoTS6fqx8gZoma3z2NWmgU7dUpAGLna",
  "key27": "4gn7piu1ZDf1R9uB3h7MjYuueYPfe2PxXdHSxRoxqWrFEW7dvBmyHFHGqgvTcQjwiboAwqrxYG4ExweyzHUs4jP6",
  "key28": "mDHprKn61d8eUTMcjQPaLi49xHk4f9vvt8tpkxoBvCYN5Vzbv7EeMwRuTKA9PEWTHT5WeKF8u3X45vMebc7mUwy",
  "key29": "2GJ5b4C7rP9S8niL1vGvbidKQQfCfmXmSB6DiQvrZ8zC6D9pcF8ho45Mcmrw1MZibc3jqiHESAsW2pE8weZvL874",
  "key30": "5NMeJYzVdveXqjZvnNWmWSQpLgPnqYKYfy185wcM35KpXK1jGVQvFWja484AAMYNjJn7JsGEErs38nANU9Ub8FVL",
  "key31": "2qq1RgMv7Pv9kyoB5uJjmZJrZCCasfVt25dG17bGEvz6P3sfn8VN8WTLnVi9rJFSnqLirf2U6ykkDA8tg9WwHpMk",
  "key32": "mFhasdq9cYGPEKs2tuKCxm7Da8ZkbW42DrKKjdSGoebXtoD6XiWWZKZtpEmv1aDUM9KNVn5drd2bDi2WmDRbXC3",
  "key33": "PNLgLC8bsgxHNrWqEqe16mHPpco5jPbcpgzEA3torY1WMFJ9Lx8ETJvvMw9SbdDfxo3D2PfDumCanyeBm4EZwzj",
  "key34": "31F7nhF7UbHUXfdpZUoNB5dKkr97X38hKwqMBR65eVXnqnAY8DWgRyUL24HNJeWPdd8TD79hAgdgXC6L2HHEQRUD",
  "key35": "4bRG6m7kGjPkJKxAxrsGgzomCgoRTzk9FbKoyJPbwXV1M76jtME5ENCBJAsQ4uJp4Db7JgYQjkfgJ2pSTAUeQfiV",
  "key36": "2Fs8M55az3jWX1gBtDGVJXq98JNr1SkdpZskXjopQHiBHzKTkm3KiYukCJmuPm2rCYJsLBR4PJQLD8v3u4Z4wd6v",
  "key37": "3Ln6D7rjivhrivNjjPpcfzWWTJQL9kUFeEJDTBJWzLaL9tW7Z5CxwHxWeAhCx46AshLbKbgoxDBUZqy2CtY27U6K",
  "key38": "348RmsUXDwpNCKBySVcRMXDZNe7ja5VhjGKrVcuCCS8Ebep2xEh6MYTQodpCoqBbqr9XgCW4bKjZu4V2i8RngFTA",
  "key39": "EHx75KyWy6wST3pqRbmL866ShdgcAkZpv2pLJwjfbi5kG8sKdiXxWJ5yHTTE5pypUXXN1uRR6fDdp8CRunKMLXq",
  "key40": "53zXp4SWLfGdxd34PpxABvTb78znZnMxr7gPuRurZL8i8g99LVR9PcMWN6BfY2PJXMnHTq6kxTZhZKTD7v949wJ1",
  "key41": "2b6RwsHEBroqDVNjcb6nNZ47w4nX81RDs3ht5rzCNTkyrREdx34w5A26QXjVMvdnYTy6v5WGzG6jd8axLWg7LRRf",
  "key42": "2UXDuFSS3ywM67doAhkCiDeJa2tC8yEUeDThXAsX9gabuGyuJyueBVV1eE8cSEQmaPhaZQ5pYp3o2vVPtMfG4wtt",
  "key43": "373nSR9u9PDFoeSWDU2cj9FaCbi4kHTZX49BmHnudneAt2gvYwiD4F1Cxr8F7Watezfpm35jt8bTBVbdvPDT6epi",
  "key44": "31oCeg7H9RV72HqJ4U1hffndfFkZAnqQdcD1xEMKa5oWdpyspCQLPJ5Mb83T3DQb4D2JUz2bReJF7fLeJcckuT34"
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
