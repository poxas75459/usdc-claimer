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
    "2ZDXEq2115TwaxiXRzz1R7QnpAPm6YUvLnZ6qXSMkerAtV7BaEFkUEpCL94Scbk3hktj1g4YFj249seL7a3uygtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eRn959JLzhqmJYkQkZkWAEHpFqLzfu2g8Wf38s5qMpyyweLYyd4isEd5BLG5bwQ3pfZEnFZPe3oJVbEpEUps8ca",
  "key1": "5vgMZJeJ6jgPDBxphNSuVpy3cdz9QQSXXYZ6PxXrqJR5ksYVBNPJmcgnBvuG1Y8hT1d846TSTpz7xEJ2kSPWiMTU",
  "key2": "5TL7WPpSQZFTeiTH8VVjciRYy5ffPv4pZAgeAfXEKiwniCsqGrq765yhtWMzVNW61weyDFXe7vxdq8uwo1sePHwi",
  "key3": "Srws4C9gWCWviEEj3txzxLB3BYfq6sGGRV7EFKSYGZ7P8PgCLvRZLUAnKQe6C2DAfJdQrwCHgUNMaEvEjWAAa3r",
  "key4": "2A2KfyCrQdY1mJKa4hvnqsEh4SAPpx1nD5D9CvfsETVJ5xQaoR62GBjMvfAb4Az52ftMfz4ASd1wSPhiyYjG3TnD",
  "key5": "2LbPTUGG2KdSKnDUEbSHa6NmHW3hr71uJNiCHbeP1PbT6cprpbKvgRJXmPS6NXEto6MYDxNowxywUiE4HDT7AFKo",
  "key6": "McbohhoJEofm6UQMiKrxfYHt2E1w85ngCFYGJWt6k8AtY9WPd5NaGizXURuCaeHrQSYHsuxE9HFHL1kyP2iMJSx",
  "key7": "4RQ5t2tY6LkHQLL6iQncM3gGSkrPw1oUrtSYsuoLCfKdBiiSXv9eLhyH7RBvzvWeAqv2C6Jw16cCaUCw42MP7QJZ",
  "key8": "2EZxQT2FCY9A1dhPxwDZWYhfBBPbu6zuy1hTh3axuut6VaRneVwR6ui3Ce9TWmCnQK8p4WCo38hwoQSXH4mnu2K",
  "key9": "5Km73LVCCkZnKGchdrsdNJPurTzBwzVKc6w63aXrFiMu31mue4QQwUXmbKYgZthTnqtiC8NFSDzuRsyBasdKsJBU",
  "key10": "S9kV386Gy2qx1wPvpmjVkWjw5FgxkXaZMaFTccd7x28ntLaVBVgxK4pyyLFdPvwjoeU96ChWDbsKPwpDLMhVTR8",
  "key11": "4BsJpKHj4DL39UJzygD4rm3EwXjuKmGSHzceThZnRsk8L7NuwkdW4RCKUVjgJWhFyT7e4BCuhdBmb6hpGUTw1nXd",
  "key12": "4LDLsy8fk1VDep5eYBoo6g4kUHfzt3LQy2gJihgULz4ZdMorWvFYaMYbvnj5yUsVTtkRF5Hce1WHTXGaF6dc7X3D",
  "key13": "2bk5MwLam9jEJZWW2ZGPrU9uAcKrHESSGmfKggsdgBzTziTxigLv1mLnt4bJiraHUjCiYSstHq1cBuvkherpyebb",
  "key14": "ADk1xxdpmuKxRM8nutaLzX1f2AF2jdvm9VVDnXeupUCj6cz95UGKhfZSh6g6iaZAiec1LYHbAWXxMCDfbDcrAyu",
  "key15": "4W1grsJHtYJ5HrqkrNqzq4rxnXE2DR1m8QUF4Vc6h6o3RbVxZDUwjzn4UGC6xNmx9aZPoXy4BjDkNBJ42gQC1oyx",
  "key16": "4xDRfoqACLVVkm644SYstAAW5Ax7rieRZwi2ADJaFdtv88DsCf2iNJAukpUnN9WumAUgpF7jF8yDegmUVaMRGCdX",
  "key17": "2V4ZRW6seRRAuKV74j31fqGAWqyNW652SUnE78vUnfxJWREAW5rmP8WPKGsuZKPqhsStUrqjGTRTTPRzeYY6awBc",
  "key18": "5K3Uk24WKdov4aMRas5eGgT3kNATL8LW51V7UMH53vGKr2MdEWwoztEXH9on9wPgNHEA9bMxmCVNVLAtsn4yF4gC",
  "key19": "2ma5M6hkiZewe33xVo6qkNZ8FAmJQgd8Gt5mBLK8fXNv45VzkNs5x9kqbDq8Pmn8mR7vhNyVX6RVQ8nJz5e3MRro",
  "key20": "4oCqtGbKBjyEsW6Q4hbBMKMSR6QsJZv5C2iddgX7UvQN2RfkohN9oCe6sgk55qmV44yfwoSf3BfB7w6f1MCQiVML",
  "key21": "5jEpir8BjbVfxzPQKfHcuQwzoWWZbN8HHnQUtwDk3ejmS9JjgPoSYrVp7622jNGAKzcvtK1R57zNpnCd3ScqS4xC",
  "key22": "PWTY83hdRfjfULuZQ1XofyKxYcMGcm4UHGS6Zi2Y8PYHAZwyWhiCRTsBKGt8Fz7bLxd7twfQwpzWVqkeozPoopg",
  "key23": "5aJgKW4ywbVhpas1F51GA8k8VXf2bHGCiqovk2ykgovVzWJcJ9V4kSSeqSqkZ8is8YfL5KgaR9eU6Bakkjm8Fw5j",
  "key24": "2QYbZxJYTpkCDosoHE9hUsWTR9MaCPdZSjnwW4g42VdMegFkEwgYGUSTsuv57HCyk8s7aiv85qExDHMPj4q8obkm",
  "key25": "2iHpsNcbAEbRJBXHDrjDj89mBDAVR9vLwvPg4n2dpkPgCpWgKjZhxgG8GoeJETmeGHUNqGja48vE3drUcGaAUH9k",
  "key26": "296nVPh3QWQpojgodpY98TKGEFzZAKcHCx5dur2vXYPvGPehRCm5Rnv8XPwiDYr2LoAto8rpPG6NYALr2bGwYxqq",
  "key27": "5KNeZFR2za6tugbqrfttnvRqYWSwf9szoRjAbpmZYCuqCQ8xvwW3AwPxQfJGdgiUXVyRzsVFwuqtnqcaLehSJ5TT",
  "key28": "4Mye6GonUnhFK4a2hk1dVwryW11r3WupDZ4GAiC6rzFnRtutZtFJARCs2KkFUSF2kiuVAZfn5me7D3xyGH4KxKgG",
  "key29": "J9TR2zQc2bYkDcKf6bchquoHt4ZtfFo6L9cAsfxGQrjgwJYajq78cxVxpa4rVbcNzwjJBSWndpK5yssX7fiYG6Y",
  "key30": "2e5cRFkDspK8bF2BYcnB2uJo6RBYr62o5zvVEBWSyucGvq1EV2jkrTXY4xJ99j9MYeCjPxn8JjA9ZfL6SyfMHyvc",
  "key31": "NV8xedVDJxnhHAfKc6GqTHnuTQhQxiY7CEVsK5nB9imrnC9vPEPPiZ84dFrdxGD7nSpZPGgx6wVVJ3VsAdaADG4",
  "key32": "2MNvKXj2UpQ41oTyww6JJVutEEKosNChdmiAk5f86qknz5ATVvaeYfFraPhFksxyoMvnLQ8CLifmNNvnU8AYL79K",
  "key33": "5r9AUY5Zu7WEoC4j5h6AdfAQhJuZgAcWrSsvnajtpiN1z76LfXmQ4S9ejumvt2BT34JiWMHq2Do5eDBSoLeX4CbC",
  "key34": "58KtpTZ5PWnehj97sStZALucLo1V32J78VN34gKtsdDLRniNeuYiWs48QNtPQfcjKZ4N9xJKdGSeJNb1AfmFxP9P",
  "key35": "32rCy33V78h5LK1f4sKB1jytuyDcY92vNYUVgmGXriffSgeeFa5XzzFHvA9ZGf6RR9yA1jHVR8b9RTtWNQw5cKA2",
  "key36": "4HeyGgJX95eoR5Aydq3ryScQ3tA5itEyvuhTwrPAz3d5asm2KeotyapfE4ASaTugqnVEhq8p9rdZzfk7EmSr6hSz",
  "key37": "5xcbGSkAiF9gVsYGAhoymW1ppXihBuZNkGtZLRFUSzSn4d1D1vtRwVL25nwLcZsfS5MEmRRZSXZSSGwmDYfKiQwo",
  "key38": "mmDNYE3Qa5ER6sG9ymdV94zhyhJLeKJfKwqMMzSGabtf9c5RPxge1rxa8gVPGc3Lmk9nk6sT5jcrL4RWvrKqHW6",
  "key39": "3BnptCySbGPN8Lb5Ru2RG1st76sdm1hdChAsJEjigJU2Tr8sU766Bkudz9UDTZ7phZ9rqD6bpjfirocNuv8SwZ8h",
  "key40": "4L7nU7v789f7UNBv5RzZkYRAT3QAUEKrqgCtRGe77WTCVurSm7q86AzaagxQmU3vGo3LK2uPy5CLCrwSZdfbqV3Y",
  "key41": "3J874fbVWmXpy7RZhCqbRjLbPYicNwXf72L4JBUaAskkwzzuTW9LRDtUuw4ybsMYpcRddxuyVyCGw9jEbEHeoBAF",
  "key42": "2MhMdcX6C1pirNyhvh5irqiwpQB9vvqFGXjeiwsvgCsr1bfopaEMWaPv3jCTSkaPdHjq4GWJ2SaSQoSG1XsmyUnJ",
  "key43": "5kek5CQdmTw9vWZtM7o4ws7i5YgNXYifXrAuzm5W58zygDurxEauENgZcByCnxscGahkhLhePbrhQzzvFDKJtgGG"
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
