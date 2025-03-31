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
    "26au81jb8q4DbawLdpsggVVjHqPnRWHcqvbC54qSKeHLP6S9HBBrmADC277uw5HGaKEm5UWQaWJy3tTZwegp5scS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQueo8R1utARThSBTU4yTKkcVEKBe2PZvV2rkn4dJmQVCd9TxctoRSKz3ZZyv6KPEJvk4rpQKpiAaemTavpCqTn",
  "key1": "5FuGFYA3P1R27x5PkW1H1u5jG6RLsNAkjKFz1z5R31mGKTpjnKr8eZNFxEYDCUuSQSDgCMuPUCaHVnFM5HSHTzWe",
  "key2": "3gnRtFMxdv9oT8y4hJThQwQpKiaA1umGqWaEmzz6CWW5QvJhCVXucF5pcFNqivZB5Zq5NrqeyJdjBhykzm2uNHsj",
  "key3": "5sJGrgw4Z74ME4reCQXF7zU9QrUYbJ6QFUArRywgM3H62PnGQ2QDqRngy8NVQydWTcEjhB1jYr1GMcbAoXzSwR1B",
  "key4": "2suX9WrjFE71ET7Vc9ueAdc2cENQn5H75YNL2oHp9bbY3AH7hh1DecegNewvxDk4ep4JXGW5FHntt1qd3k7snZVc",
  "key5": "3gCPyVwNMHvrqQ3fxD78VXaAhGPeu3K5ZZuij7LD72xiKCEwaLrpeopGXnLyt4Qo9FycQwSzzXnmAfBj93xUdnWi",
  "key6": "GJKGKMJdTvuBhJ418qWy1sbFtZj6zyLqcGhMZo6eE1mcenpLdf4LzJ9TtJaxM3SxFcUMd97wKZ7Ni8D23LTKoRq",
  "key7": "4atXztGhyJFJrM3MSVD2HmTuu5kP5kzNRWovi5bL5Ui1smNnVduc34px4UCjN8NoyMXtv5TA9wbvXNSVSBfZHWJn",
  "key8": "PRU5v6TqY5TdnTFzgVh81Hgc7qv6NnYWqqPi51fRrPceq6YP4gMbpDS6cSKrRYvKWGSgdDhiDJsdHe4ovt8AQyr",
  "key9": "5JQwCFqd9HSQDXKfUvbUccRNonSyMzbatQ5dx3M3eo6DRA7NpPS7wPaRcUStb39dLDo55Rc35X5a5iZmpJxfPTMv",
  "key10": "3ZkKusJSQTNDCi5xcUTxycjrfCWf151uCU5LpbYh9bjki6jqVq1bHfjJMzrJVaGimjsoxwCqQFYBWxdBfnrd7FeM",
  "key11": "61KmVL2bqCvRTjQgCfpGzRy3rtEyGeWzbAioAAPvBrHvdc27po3Fb52JJyXjkTJiPwhQwphadWn8ay2NQCHZs6sH",
  "key12": "pffPubMrubDTRezLEwqHNQp1put6zNVoUjSCzyMD3NhjeVJe4kobT64dy5MmjToLng4Y8ps6Xy13MLLr4SQsQiw",
  "key13": "SaZ85kH3rRCZQywcx2wT1gu5ZLxQBscpdn7s5dT5NjKGgErgAkb9eNRNq8ni98p1tBJoCQew4ZZBiBt2Jx1DfdG",
  "key14": "4TejXafhsiLboCoCUXAhUevxskpQXjLPviGkArdCjqMzKtxKhGvGSMUE9peWMhZo7vmYvBAj7AizRz9YsBXQBcoH",
  "key15": "2Hy48yNHZs8CYgC4kjPqaMnwemheHmRucNq7jngPgzpc3ca9H9J2B86aAx5keRJ4YtVwpFASskRGRbKSyDk9uLqt",
  "key16": "5htLTqrn82JWREL2frS5aaZX8vC8beLfAPvJQo3gn4QyTdmCbPAAhvYuWc5Dq6EvWuDGR3gTvQFH35KUEW3vxZku",
  "key17": "3zEQe3wdep1YZYUodhEyid3JbMGtRgt3aagReaVtJYrhgxdqdiTxGdvUca7wDHr5YXQibfhfjr65kU3VYPoH5cNz",
  "key18": "4sGhfLReMJswtdt6Mzt9BRmSm9g4nGi5Tsr33PKuF84tCEA3Ken7xDGFJKcaRvQpJGWSe9iLqGGNtzT9MXusAupD",
  "key19": "ENpRf1PVnao2EZwKvDvMrSzpCuxFQHEsUWNTetHTaCoFwEvsYqsK7KuGDamxU3XYgheWU9gC7Ccg1ArB9UZDnKF",
  "key20": "3E2DirTBYu7jp9CH5r4F7AZzTsV2SBJ14cfwquVd7qDTFPk6gb5hsp1FFBsbrVFDwQKV5vsR5jkRNj6jvwPbfrvK",
  "key21": "5btXapWgo8xECiDn37AcQVmiryHfFVw18bqzZuhiDGZYFUqUG1sX73fD27JHJU8ocmSFPUGtYwcFtUYZRZVhxwVX",
  "key22": "5JC4YDHZCYoST8VLEmurXueAR2gZzvHCnHR1AAuEbU9jv7uGCkKMRz6SU8b2ksrtq4sEt33YLLUzPrAPupdQS4Fm",
  "key23": "FhEcfEbSZgwyeD5Cdq7KCMwKN9tJLNVGFaMGC9cdcZMYbhJwAtWdNYk7eiYkc4EoW9xTjKiZjgbh2haeyEdnrgT",
  "key24": "xmJuMLrR6qRxnbaerfynynSQa3cme1RNLFbpyM7a7tMz8jKB6E9iQ7kAMRdBuyZhhqfaxBxX1CHuyUA8FDJmJRR",
  "key25": "5ohvxHTYBbdoVtwGoDDiaitNybvfT15E8UYebdfbUYGhvNnWivnKpZMdA92D2TTSdhnvzWzp9Pz5kPjwd5P5TqqX",
  "key26": "4uWsXLY5iDT9d5SPJWrmqZ85JGE9w9Tf9vTMT18QdYnmgDqrPrNP2HBPCLyf83dTP5BPgRfo34za8y4TasuuKPio",
  "key27": "2ibkc97G2q5nCRQ91wzRWVq574GSo3Hcges1BvWL6NnB7zCCDTxVhhNgBxqk3WRKQjVZ8oEfbnBaKZyim7PXCWow",
  "key28": "k2bim4bqKBN6Vztd8SCZazXX8hqZw1qgjnVzXFsi3WfJXGEHWbTu3NTqQ65YKi47ZJtFoa6Ar78iqfrMm8oagoq",
  "key29": "4HjXcqNsksTJaqV7nHWkwMA5NEgorJLp7yo1NC9cyYyPGm8MKfpQCEbSrq4XR32Z6iQUdfN8Qhj2wBNbucmPd2Kz",
  "key30": "d7fAUuCfHsCFb1GgRsdLPMsNdn7HjjUo5JgWutZwX7QJCq8ySxBkFPdHFVvWNshhKYhjjGipxadhfUtGAKBUbK3",
  "key31": "2DWQ1raymVjM5wEBx3oV3KKbVz3QBDHVzfM7EWUTngx4unLwsGBpJ9jmH9dKSQN4dKjjbpE8bQHwpTDFskqon5Sg",
  "key32": "5ME8o2XuetdPoWLfnFUXDT4G8B7HJZjgj2vNEoE2FjFBDcY8ucJYP53sXbqK836oTxgewR7A1jANu3paq2WNK9DJ",
  "key33": "2r8VtPFj7RJaiJgzwECQYrimr7pE96jmWcC4HKmvBvm3wsJ1jFww6TR6NTjBMoFPJwrwfpoH3qxWKyU8ZQu7NFzH",
  "key34": "4sJFD1Pt7izCvJuo2QQuPYJfi2JxAZKivvRafCp6reh2RsaLXYT9Vt4MD574GCd1KxAXfrTJKcZFfP9g8aTPKvDY",
  "key35": "5AqGSzW1MYXf7e4KuYngdyWDMqF6pB3DTXVEifmBVLShpW8BjhSoiPesCTE9QUzQENU57ouS74tRzXLCxfQRwqP5",
  "key36": "tCTiGVZHzuFjAywZJWqwwHnz5gSExWEZdYW5sdFVC3VoaCh3uDLtYc23dFQcpxCXjeUkM2xgbGwY6G97ZNjELkV",
  "key37": "rMt4HjQ1gaZUv6kiYj3EJ3pbdHRb18AA4pG5uTzvMiTyZbmpMom4jvrjwi2qDCjBus2met13GrtndfsFqkpv3p9",
  "key38": "4gHr9mxnQNXHNVMmzG8irGVUBLC3eg97omvqdFPVyQRzc96ww6UZU1jDUah5bsvG9o5WT1U1Xh8BRtpqCkijuzzK",
  "key39": "5AzoLtSJQ1tARYwWdoLARsftZ5QrqhoY4Rbg2ybUH1zgya7JBNLQWKt9MQQE7rHwf1hUwTHxxkmhodR1jpomrB1j",
  "key40": "52jTWGrH63JBbue5hKcpPSQ1TdGPM4hUFQMV5PVp5kgPVUKMnoFLvtbL77jk4LTUoyEwho5hHsWbRWwsYqZKZyRQ",
  "key41": "4ViQAukoQwUEBPv4MEK73AmrkspY4zBrrjMoHFfemMig3cHQpPpx11Eq9doGNHAYTt9QtxpJ3zsdPJDDv7xt98Kh",
  "key42": "3HTcpvaSvEDBmW3EWw6vasRoMwRGN8mrsr4QYXf7cWKumSTBCcAkQMhPNDPgPKzxZ3DYefWwYf94HZ3cNyQ95YLy",
  "key43": "2CAfnBdxso8Kae4xuu2xjCxuwAvMWfTttQnRG5m8XyZX7AZ4Na3R6uyqX7XsGfYWkcStP9i2ovtw2mTS6AyqL3mf",
  "key44": "4S8VsKHkUpzcpTpj66uo76Qok41JfckfJ5jGsuhvWWTxEw1ycuYaeriAFqukDeZHcX7BbJw12LjbHVUUuQSTPdTi"
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
