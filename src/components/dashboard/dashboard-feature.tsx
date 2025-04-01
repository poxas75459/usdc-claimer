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
    "2ChHZAvtunWEP454kufLiNw9SLtA77eaMx7gwBAaenXKRcapv1iLFgiQy5EszuwZ9Lq2Zw9EUvZXm93p1LEwAn4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pzzuCGjAAS6daaE6Yo3hK8q8QjeqsfL3Q454BVd23BYaCj4KUMGBBdsZvkv1qtmEFwfTwWWWbjBktxTpw4mFd9i",
  "key1": "26fv7ucbJ8CeZxUoEnBPWHzcMwK1NGonEhbwfC3j38M8xirycvdgd7R7dwzgkioQ25zYu9FdnXpt4xfqDMpdG8EC",
  "key2": "5UJytdXD3ppmSt8BWNyf8ou4rsLkuV7uFcmpH4nXVj13sKmRb8ix7MV9ywmAKEspDoH3FQph8cA4ntLrS2PMXn9U",
  "key3": "2sR8RKN8AupmVvjpQk1RkKBkMYsAFDCxqQVS2YYu1W5Kx9uvtvTszAuY992L2ArHX7cLKQFMZLt3ygNt4wJGomz7",
  "key4": "4SsEFWUTwpuT1zoBkXttPPnG9R6BL58LqtLWGJWnvUMqiAt4uTKdvoCAFXGrmBmYEj2LTL734LX2e4mXGqnP3xzH",
  "key5": "2wk1mBusFY1EjijjGSsSQbmmE82joGjfhXHAXc6dXGhKqcDsyEY5ojs9G4DX4MHytWPFbf7K3tobmDQpevAurC2Z",
  "key6": "5CA79ivfTBHzjnG2X8hdN9PBqr27gJxCTjLc3gXNnviaXnWSsKpRVqqszrk455JbCiMCpFsRSbe4ndxdaucoKhjU",
  "key7": "2hifU2QnvokUaxtGnqPwgXTUunNUKaoHQhKxVZvFQRmvtiPmhUofSTZ8WY39HREPsWq3Uuxub1X7uNkSgzA8Gktr",
  "key8": "HDi2P5Y1ttxeunBXorsucvfMySKQgWFqMBC5EcrHmfBoczknJsKhyTSMSKMrWx7RZa7nL72KgBqLPYY38qbGaa5",
  "key9": "3p4K2LeaL7wjhfcnuyazLm9yXBifVicGDR6N5vKm3yorpmiuRBkfUAiLh2xYaCb4uJrNiCruqncgLWDrK777wdDk",
  "key10": "5N65H9DvbBUVwcopTmQWrMThFpJ1cL4T67GBqrNopm5E2q8V2pRhbdGkpxxTvxWZZbNiYKLKjtswTK4UFbAsxiH3",
  "key11": "581Ykbvc9z8gV6K26NrPuueGPqcNkXR5WyCNEfwxSSAzL1Th1VQdnB8BH5RU8fb6yVrExsdnqPM1q6bKEuGfcNhK",
  "key12": "4TAJ6gxAxLGqkmycqcxb5rTQ7g5y6uuSQF3613GPXquji4guv48gsWsuYgVcAoG2s3AzyCc1QF4x359MWNHkYj7g",
  "key13": "5DPD6aX1kaWA2v1GVFyuGLzWAzonJ23TNjMd5cuhorVNjfea99UynvZszX6YwjFWUrBbL9rffRHM332AvTW85afo",
  "key14": "53bUxKXTxRaaw2iq93QRsjgRrKtpfpbgvRppQwDQZPjhLkvaYmpjvtAFGF6wGhaTUytgYFrXgmAuZrYXNybczejz",
  "key15": "4mhvKsJCLk3wF2zvf5jJ4rFFRhJDjw9oggvEygMDFZKJPYc9GLZtMB67E87nTaZYmoUi5pozFaF7S7ENnT3mDXct",
  "key16": "gUAmB9HrD2Pjpgss7r9PC9NECdixeG4CbuFavW7YxZDCfnc73DKkSsePXHqGUnyVzsPVedzqnzUhL4scRs77h9u",
  "key17": "2ntqdwjDzygoPasCjWLtCEy9uVCjPFMF9AeNWCz98LESnQaVG3kiC668U4ET92SZrtB3cfeec5yZ1ixbCxfA8fRG",
  "key18": "2dYSUK6uqPPEqTAeqCXtt9bAQdhveGhPEfz2J3MdVBAPpXL1CbQRdmW1mozd8pmahnhNSdfLvSczG31yLPLuVaA3",
  "key19": "xXae3Ke8MNXHhMn19Ch4mmSnBBtKKBo26v3fhPSrbNDu68hp8S5Sb1utM8qxvig8KkCHYNotdH9aTZAHayo88Kn",
  "key20": "2L2cxjm8kaW2yo2yKcDQDfFspsNYk5CDCDXauzMFn3BAEFdDdrik6hwqkY9dEHU2JFKToRC957uoV7sgZNfwb6WR",
  "key21": "pVxqPnm1Xy1NY1xkCjmjRGMxU21GB2YGkRr36TP6VrFCnG3kGFvfTjMXos9qy8eRMphLPZDJXRFYym4GAYCXSMi",
  "key22": "4qBEJouxbhKMgSbnHKM7GWmLj5yduNWwB1WetJo9rekp5AB7HQg3GbJAXX3Boo8mWBk1LmvFccBX912WEzvKtiTh",
  "key23": "4uu8Ndw5LyFCo5bXswkbDmrKWQy4pQdTPFTji3F2GGPGeVDunjhjLKpPPDDWWEQfsxwJqxGxLwXzwqHNmVuiKmt9",
  "key24": "52X5JzV7nt3FXXoZoi4nhfyhvQrjKwKwwRFXot81KKt8JYbZ69vSR7ebzDBLbM7x4JxCW5PHxKSKGrVgLLJG6tZD",
  "key25": "4C7hdHVtKeRztkheXh9hCBruzHsHaV8tEfRwNjTGNnand6t5MHNeEb9zSd21J35JwCsyWhb8J7gAi2CwuYahypjJ",
  "key26": "bSn6yhnDxQxKdLWKYpqu5m355dqyHHMGJZ6JC414LLVQh968pk3aigdFvGZ7oBAZnXSLKCFW34QFz3uqAzRe8VY",
  "key27": "t2k8ttWsTM4ECe4ScJCdJKr6mARoHuW2cH5819EwiLkd3LteuGZjkG9boVMvQjqAj9LKDokzpVv7A9oVbzuMkPn",
  "key28": "4tX6JRKYVevt9izGpTKfezJwvkeZvPx4tziKXKQ4CsJi2MyX7yFjBov4xc5jR2V3VHKJUUsZU1W4iLfcuUnpjUD4",
  "key29": "4VrUpogcEeMjLGRKYfjqBcfGUfLCMQR6fcQdGgsZyu1yC1EDjFUeRnesYYK5McgqMoaBN3mMzEvHFMA6GC8n1tCD",
  "key30": "31s3N23stWagHbPjPD3iHooEwSjFNfPrXMjpRy1HBU7yjxD129rzQZoEfMWe8c19QioSNg4k5ATJcKT5pVu1N3oZ",
  "key31": "2go831rtJjfWbzFWVm5ub2gima3tmE6vfY4DmVCA2ad6dsJifExd2grkXuYH2N17B58wi9DdkcZsE2dG7ESPFePs",
  "key32": "2JwZLDLHD3QNHiDVx1quAFp2BbpQMhmWn68rbEc7iQ7v8QzMNa4eS7V5pA8Uu9JTjKiAbDcrSLBSdowG3PTU3ZfH",
  "key33": "FYyxsjvniEA4ThHsMnGEZNsibyTptquf68hjbXMhSSyayrfEsmPxbgRgBF6cJPbZjmFcMWrYEfQQk88WJUfVeZZ"
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
