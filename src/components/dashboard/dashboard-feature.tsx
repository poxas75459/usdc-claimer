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
    "2Jjc2PmisYJbXU5GJCdwpnx1uQGbVgHU43dBz2kuPhtnCZiwkzLhkSVUsHPxxr3vG53jgmHwCXXKc26eHUtFXjQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gYCQVn7RCxe4ABMgWTZn7rcbGp1YWTkruzNpivkDY82hfhVwcETZdfpEr8g3wFD1rAUgMWpVuy9Z2XVphjjpjqf",
  "key1": "2GpyihAz3XNG52n3gNaSVwFpEJhmijT23NLCurDD3c7iJqnumjtGfUMvCvgGPE9AUcBnk4kKzQiUjbMdmgsNUVs1",
  "key2": "2sfcCsadLPPVZbkzbN6NPnF6TFyWDyCaCwkBXm8xEvKkce726JgRcefVp6pcyGqgw8DWjwm39DhAc9DZupnmWoCZ",
  "key3": "4cLraYxVkFz1kPRcHvpTGLoFecMjgeZ9pcZPC7UpgXQyv89NHNQEKYJSsoqSwbsq9yiAWR7iUEfVDFGsj38XRGKZ",
  "key4": "3a3vxKLCqggkCbrLkyJVkuqQazqhJtCXCvnsPCeQEvRafkaAMnWNWavoTPbUNGeTDuupnMGpdyhLWzz7JZhPgvVf",
  "key5": "NNKQBzD52kLB3amNK8nG7Xoi3ejjyAeVrTjM87w4abmGfj6W3boAxBSnbdw4R5svrxBZWK9Fko8VJz5vPMZ3PJY",
  "key6": "48AzxZJdvfMPpXTq1X1yVhwiqTKY9GT95Qjm2GX4WkdHYCiNs5yL3omTntMgaGteybWno4HxNgdsTBVXWBcYaav5",
  "key7": "ox5xawaNwupHS2nX36ZbuPf8pippAw3oY3dHkbHKtevFLD7BZadKhtW4eQu3mCDqL7VVYKMWEEBN8MewP5JVLVY",
  "key8": "5qSy5hkTnnhEbjyUvGQepbvvQtvod71tniuQwr5Kh249LW2vyiDixjxvRjJgr57Xx23VVke8iLnntCBtaWimq1mb",
  "key9": "ph9QpocLApTJufjcyshkG5yL86NBtMUteZAyjcwm5MLzoTmNbKVZaXUm1rd9J8aaQAig4qJrr7k4hR138PTGuA1",
  "key10": "4f9vBBBNzozSFHZAEfPi7Vetb3zXheXg3BQXBbhbSpXkKA63CzWrGLQuJxfKQF9R2nQaGUFK3sGBjijcRyXFFPto",
  "key11": "4bFtWEmmPyQA6HYHcFKpaD6juXo1y9EnUZTpG5e2LYs6cwNw13EQ3gn3gg5BfFMirtWjt9o2xRoBU9Gzcpxx2jPN",
  "key12": "93aQKPqo9hehKf4oo8rn818Dav1iEEY2Scn4YYNJ5jLwSztwnepkpeoseW5QreUfqh8j97qeMY3smoQyhG8UECv",
  "key13": "5Zx2HFqQdQJit5QhmrVpKyAMjqrT3H8uhFKQs9Wwjvv4BQYiskDkY5zvH1A5DjpQpRtURkmPtJWss5wNMZeFiwU9",
  "key14": "jTSXe4adxSzJLEk6gkN2HYQ2bdqkkHbNHrZ3gs9RaLedQA5T2woiwb1TCbWFMZpfZa3wHKjYC333ZgqBEtQ3vSB",
  "key15": "4Wr7A1R1qooaoFvCXhM4ChGa9RmrSiorodj1fHDoaEcta9PqFMUdMJenW3igSjPsnLV63axJdwFPvictpGzHDK4P",
  "key16": "XcZZx3p484tXtNELfnBFycShSSrfg4xkdFdccx8U2Tn3N2RHnsyHyqynoVtNQfmZB1V8Tx5yn3MDSn6cC2GhKxf",
  "key17": "2WMZgpCzDDUUycufEtEjzzG4HVBVQUs7uud6gqbey3Hrp8RHKhKRBvgFTZDNHVWtZJM6v2YgwhFJrHJKnbYSEPov",
  "key18": "XTG3kB44h1YAwLCiiZftvyqc53bLFzrAWJfAA4wQHkvqT7tZiegMqVtK6NN2Zy8kED71ygnbUfgvwADu8faEnXk",
  "key19": "4jJfxYHa8XnZiCQEiW33CzYhKNvRPC87UeQu2isqCQqJhUFZUJpzNf5BhsQYiUhA7LRXf7aVsX6vTApyMpuZ9KFr",
  "key20": "3z4Y7hehHakRAHFUAwJWsXixY8pZDaatHEaubp85eRz9N4RNzjz3VUqo4gEPFu9G18XamdhaCyZYbdmUCxPaurCA",
  "key21": "MBZg9iTCG5wNdyya44qzp9Te6Vi8LTxgDcmSYkpbcwxa87GMDYQDm1MBJQ8MAgUbCppa9QnoE13i6Z4gJXcDjRm",
  "key22": "EpJisUkVH1x1DwHx2D1NCLtF5s39GzaGScnog3krRnBF3oHXxzPMh4NGjEk4RtqRKRdVes3GJBJuZXLAgCMWaZL",
  "key23": "4rRpnm5K8oCWszCj2KyfqtEDSocpZ9dTA7noYFVmFdheBZ6pfMRy2TJTVXGkYVSDY3F5V8Lf59UiggD2uHodvUBG",
  "key24": "yJtnnB1EBzqDTrm6EZtnYyTNYRHi5A7QSQVCqyGr4y8hCEKf9FLGYC6sW1ymQSvgeH5wFPtr3YrQKGaJ5Jcr4qw",
  "key25": "2A3buuz8t7eYWR3CD1PBn4GzABB2fihhAxJMbx4HwMbwxtDVYicvt8x69wAwtkV3buwCW6QV2fSHRTjuf7Ct56P2",
  "key26": "zEFUZtUKJD5uScHFyQG7vwPstJxtLgwV1o7cx4vsbWFUZ25aUwM8iupW4N2kZf3FTpHVjCyB7iUJdeHjHZb75Rx",
  "key27": "4Y7ReFEAWazde1m8Aqh9Jcd9zPjpxd9Kb3PsRdjebLPjkm5A24DLNeuFqEgSNbdiQfdT4eNWa5VsRQZ93YFqKwx5",
  "key28": "3ZEXi9K9fRyuTvkRHFCGhbZtSNo1RSFYysUd3GKYn3g9ka4GovaE5tTYjjQydYJCSpN4qVwiUrFifDPygB5zBgiW",
  "key29": "3F8atQvJVT4kt6qWejQTujYtGR1fVxbAK2bCzct816mDbcnvATep9JZ7PDygTn9bKKoomRwHSjPgSaSNPSRc2tNo",
  "key30": "iv4pFGPRccHYNqUPNgxst3FL3QUXn4cQDpuH1qbS7MdBezMWLdpYRuL4TjaTdcUfNbjZLgi3Z24vB9gUrg6HEH7",
  "key31": "4yd8JWH6yfLLD6BFqQiptGFtBMzDMjhEmJq7V933CzJ6B61wYdAcRFw2Y4S6zVfccYVFFUajNQ3KoJG4k5Gdmyd8",
  "key32": "2cAk24ZRtnXSqStKZnVzhRmQPKRoCUyHvJo4r7qhVpuX1VfEATwj1YE86CQCjtReoqsGTLT2oppA2UNJf1p65eLB",
  "key33": "h4sLHJCDprST5QWdFywUhJpxCry4UEhRpo68u5C79ocHSo4VpBKKdQVSPyfUFQZW7Y7t9cENqzcddYTWzvv8ddk",
  "key34": "5Sz6zR3Sruh611KQyuLTkobKBjc9p4sh8hVLSZ3te7oC42gA6tmgdQiQnJQPp6DAfBPx6acRoeNWDDaU8bKCwzsB",
  "key35": "64QPkJUCf1Sd77TK7AB69XC9pMTXTR7hYcTb7Fv1SAhHhdw2YxAopmjvZ7EhDkrX6uxnBJMUmSQH6mJnnA2Tqviq",
  "key36": "2wHPDy174Yv2RoHaMjCmq35Qb1m5MYrVEA2ZHfAoTu2n4zvP6W8vHMmogiBwMxJ3NWCg8ojt5ZYtsMMWtc82ibsK",
  "key37": "t9NkqXVHGgDGgJfLtQG2WT8EDjHRySZf8nEw1G1ARzq4EcRQYaZ1D4wMVCEHsuk76G3xe6YJERjSqTW9BRWGoKL",
  "key38": "4GjMMwqismkNpufuiax37wL2rVQ296xc4VmeYC6RBQSpteSh8Y68e7izmvdsjrq2brkjdgb7gTRntjvvkrQKVaYT",
  "key39": "3z1oGYsvHEY4QoYkvq8KMKPHs9kc9sKqUH4YpeTfkTHtoJu9NG6GPDgm2tzBHobzdkPmCKCJopg1wkfoYyJrXNCa",
  "key40": "5i5VKGjLEz5sefYwnZTsEHeA8kmQjviBAChmkwuj2cFSmdCnRTnxqcxENqnpiabkBsBSq24iC3EjsidtDCyvxW9n",
  "key41": "5TGNd1bTuvG3ukypbFDP9BqtiRUUeupEMjGe3c1bkCaUBqp1uMbWPzkCBinF8nEcJu5LXF3mbhAcm2pfjNpUR6rH",
  "key42": "pgM9XDqKSvtHftriG5pUuGtN5L1YMatq9yNRBVPyAQMDXYPG7XjeXTBgcrQih1J48mud3Q546fgQJ8edbXXCRFr",
  "key43": "ZXCX8oVkBU1hr6cmTaQ7D6zYfTnAMxoRhjJsT4m8D1rrzuUCqLm1UmrXzntK8F83FmcfRi7eXxHzj8TPRbfLfi3"
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
