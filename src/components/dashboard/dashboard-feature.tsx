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
    "4tnJJtph32w5vYpbog6hxcxy9CXwQ6Syh5wqLh3VxunMjYM1SE2QvRpBwMJqcb4UMyuAyfK41KeecoHqzxuo94ZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3emAWuHvWvSHvDrjmAHgZLmsGDoLPqKa6D4bRJhch8ygtNpFLryccS5MV9PWtBqzUb8UWnxWtWJr4gRKsCa5MAmw",
  "key1": "3PBteHL7FSXiE5ACiM3g8A7mb7gQmBQxeTCF7mzWiahZ9UZh6VAN3PPGAiKbmBij95u5kmHmMQu38pokRDhKX2Tp",
  "key2": "5nhMZKX2jScZwqaU5CMFxz3Zd1o7G8pkc6dQMmFJw3LBf2Ekq5m2cL7xVEazNJQWBzLhkHsPGts4zj3tJNzG3UWb",
  "key3": "3dxw1edeFHqiDqmT7KvsVTGwT3YV3N7AfqpDK5EbicAHXB5v4cgL3y7Hu3LdmHnjz4Nqg4CPdyFzearLLViK6dLZ",
  "key4": "4Uz5hi2NSNzjisWDRYfGq8Cdfqs8FkYwRYiQdUUZ7vqwf75mS9M4sBJpmpZ72w1Q3MDV6zsnRP5HTw85rk8VQsuR",
  "key5": "4vwEofsqCEjVcrLyPMjjF75XFgmnabjBNzyNVp7vU6zLm5goUDMMjDueRYbLbhRJ6Y3gxBvhv5CfpBr77v78RLeX",
  "key6": "5gyWNyZYBt5K1SwTQ4M8JqmaE2FsEovTefR8R2GByRrU4dW5zi34bPoj39J9DCsNKP6TQFFTdaB8DGHXitCDH5TR",
  "key7": "4VDmFWFmF5Kg2KmZyLxzwNjEoK5QUBgy69KviB55kNuXpdaGrGm8bUJYHy8YTpcrDvo1GottojNiRHfPfyTCFpd7",
  "key8": "sJaar9bHxuWWhKiEcKRQRT8jdsfm9YMP8Gm4GPcSpsAAEJssvxTC3nxWk3GY9s5jZksVK9M3XBY1q35RuUtjDfE",
  "key9": "PXbAaxL4w8qDkWpCYPkBwkJoBpu2dfk99Ln5c2sscXfEbaQXLhzXrRzUQJjuBGktauJR2Un5U7ntsvPjTcdD9yg",
  "key10": "7YHHgomH62LyeJEPds2kd2wiwv5DEHMztd8X8f95AhdrHtKdXtkZnTzn4oJ7gntfiMPuU7x3YM7xD6KVYPrgoPr",
  "key11": "35upWqDLCBJHx3faGkVwL4gqd8w7vFpF5sJmYFF3wmYN2vH5mhe3LEQoZ12jnYp3r3aBwzkqLhaqTSAijMdmfsiA",
  "key12": "2M7xy4QU3qVjbVpi2qgAyJEFEAvCsNmvgWxDMnUkz347JY9ZA2tcN2BFUXC6AmNXhBpXzuFoGjm8VN89zgZeWc87",
  "key13": "ddKzSDmidr2y4TrZvxvvxL2KHTTEGqyVR2kRw7Hu8T2XA8ZP2QDcjJikP3YcQQvCQY423k67ZPeJhzGhaWhpqdM",
  "key14": "37zNsKJreYyqo4VZMHZ6aQYWfamyh7mywXrnQ4BV1wk9mABmH4F7ncfGWPvo4pkXCHBZGU3dHarkz1J58a23m6ZP",
  "key15": "5Wr2psgFLyq2AcTjRP25YQPeN4j6PhYTsSMwaXQbNwGSGADYUa7wZ8f5e1VLY7gf8HJwSsbqZ17HyQXAX1Yde5Ko",
  "key16": "4CkWbSJWDFQ1VSmgk41i59hw6rFjbAQDwNq96MWK4EceCMMpLs43MXZr6AhaqD5uT2gqo6qcK8C6SNQrjY1xyhPi",
  "key17": "4ggzEzsS3kaAuhvyoSFcB7Nv3yomkE5xjxSgPZa5z8wxR9nzsKPHSWYgaC825y2uQF2hkXCQ6i2GRp4xoKz418AU",
  "key18": "ELzbfqSMDPc4kgH1fYnMaW2TvBG5WaHKnT8FGpWZWJNUBD8eP45yG7bXieP5TJYwgdvthPdvBjQLGCowJiGEXWQ",
  "key19": "44Pwbq6a4JeBbYATRV11921ynTFg6bixY3G9K9BF1TbhYWzx2WwdD1UAqRLn3sRV5qcwDrKYVSLTLgLt9yKXmS9h",
  "key20": "3dP55yGKR1267JFvBu8kgmcbt3MkQ2jy2Uv5LumWheKougtzsGbbetyEwBFYjPDURGrW2eL1gRa9RUQbAYpXrKkG",
  "key21": "5qsbKER7sRSRunGjoahiL3PbxeXPiMEPWvPzczy9fEfJVibAVxxY7JtQLqfu2dSA1rdecdSdoAonh5moqnbPVYrz",
  "key22": "QFr43gpa9u6Nd196oodRcWhzpt88P8NQpfS47R1zJwfD1ciYpUkwNKJ8CFmZuiGyYQymtbHKXtFBqMGH2DHNfm3",
  "key23": "4eMRa2fjNvNrCENvwiFwvs6RTaJYp1Z1jJc1Gd1A3wkWxW1DpBtxtgnugeLkwh7f8EB7yqT6BWRoS7L8xRo2VbtK",
  "key24": "4jW2dcrGVByGy8h4W2yxCHhDQyoYo9WyWK6LCrNsJH22ctaarY7nWNtV8MEGEVqjCkPbKQwtUPFCCPFGehGyU4QV",
  "key25": "mVrR8UjD2ovDwbVMCCqYqYrXYzeWCMWA5wBxMANzRtYXx9bVJipmZci3VsQAxRKjFN3rv3GRpddn2VG1fP19gyc",
  "key26": "dwZ54r7tEjinrHJkYYmV2RhYAE2VMjZtTFafS77wtG6WgTB1RUaqBg97x1vSfiVtWL2Zu3W2eoL7crs6gn3snMT",
  "key27": "4Ydn6zcZr9vEvAnCjnmfcBgTZMj6r2b7EYFpznaPWLBLbtdAweTbihuk8id1XBmSch8SZZ9bfuZ168BaWiXh1cKh",
  "key28": "5NCpvg4RuvDnL9j32MESKqkY6Xb5QBAcYhp27wZexJsdGJsYmSTioSWc9724eEvbEVs9w5iX9GwF1ZMHaBLcQBYG",
  "key29": "3di5Pzc7eV6MFHTqdhd7AqJJWQtPxucM1WWaNzeHXJvUnBmAF49dpH4SRpeLcAszujYwEYLRBUekxspL6U2zyCzy",
  "key30": "8W9bY7j9HEPuX1TH5MJFjWtux5rY9Hrf7aqCpR72WoTQfYwMTuYLwRZ72PJ7JZRccyhVNemkACLPSYnNRGLfk1N",
  "key31": "rSQGaAZyt4EkvzcqNpdmdtX4spjtXmWUA9Nhy9QJwnJV33sun4Xk9r56dCPx6bQXNwbNPYmHgsp1FQ24zxtPYKm",
  "key32": "2Xu4ZpYNYhXXz1ncQd8VCbKt8hFDWSmRNhgeMtFpaPzh3TSfCz7nPRFDwW8RCAtwXfzqMgWQe4jbwackuHzDt1EQ",
  "key33": "4sGgtcG9tvJd6tfRXJPGiZcNNAddsJp8Ner5BHdg8k1LMqZbzbGjN84c3fGp5bzoHRUvH82DXCTRrfnyDg4yLk9E",
  "key34": "D95nNEMjYFtvUX2w8mHigdKPtKh2CYiomGuz7V9MAbRCfnK2GeirZ9EHzW8sFpCcdQiUjhhFvbYa8G4qSxYi7vP",
  "key35": "2bk3pzFPdj2PYhJfHAvQg9KaHB4aZsGfPcnuQdMMbsek94vsvXMQnSs11r9j8Cf3qZ2pdKARzSJkk5UPvXBKAknt",
  "key36": "5VzbL6Qb49wHRhGXksJ2SVGbFfE6qr7ZHajUJs3VCGsbaLNHY7kbJ23hQPyf5AZtazHXURkKQ7oehCVuQAz6asbY",
  "key37": "3jXv4MMpwUTfRZ7BPL3b26XmacXJ8Jmzf3bd9pdp4SqR6LaUPwu2JHghnU74Xw5ucHuE6qqngQExxnc281qBufEw",
  "key38": "3TmyPRpLxyDbBhqqmqci6Zyb82aZnRkeSNvuPj1osb4VrRCiNoC2gxSccYYvZvCw7vrCTCCNWSJKHRSU1xh9Cmhk",
  "key39": "DcCjBnxQWW6HGnvBA61sGKxNdPvGAyfpLxMtYVbGvTcQrwzGyJ5a1aFpEFuhf3MV8pWwgq2D47z2s7UoFWzbPaF",
  "key40": "2dPSJ1ELaPQDoE6KK2zVVvUoyH1P3FJjVEnMQWAXKSWr4tFkR7Rc78NHWZ16yEMhgkmciAiU8uDJ9EujTrSJyEkH",
  "key41": "KAmmLEmH26Sdcr6rUaj8AVY3qD4XCkwhwngoMt9PXE42aMdad8wecXFYp1GckXP57YSciD6km6qGB62zbY2i4io",
  "key42": "4o33scnkTuqJDE5o2fsMEptPUic6JtgQPRD25tccQZkRcRNBCYUCLu7Dmg94tPQyCQJwXe6GFKxkHsRo9ktnYai9",
  "key43": "59YnXJehNhdT6g9yAiMrJ7RJ5THWARCFiHopudftTUGgnk6h87kvJC4k6pgL7nZhfuG5VpVvm4GcVY9G9wigdvur",
  "key44": "5eXjEgj3hYCJnbH2chdSrknvmuubKg99j2kZXhq7TjWT7gfFJ3sHgokDNJkysiuwrMbXLAerqxUgS9dRprKEeqSS",
  "key45": "51P12xSRj1t3cfXts4b9qTJ5KhLEuxtRakr7in6yfwKKLMdHQaKpk4yeZKQh3wLeZfP9j6PNXTZCNFPbLR9BMdcC",
  "key46": "4hXETEqy5UFry1PQK1FxPk18KeZp6NcjUBpsErcNeoMjevDFF5ypy5NeRXEiGUmHY7aZUU9o3PfpXAbJLDapxkvH",
  "key47": "3mVrycWsRbXP1NdDLSexQXfPbiXjSYvoeBMhZVxn1tkQekiUCyG2KUPWvVqW5td57NcQLdypUMuiUMLqga9seZ1X",
  "key48": "2eMqUcyLvhkXdJSxJFSaPgWcCUDFr519ppKUnydG2GKAwmShFWDaxFUS4Hqz72sKMzWrXix73MgszXEPhDzn3iSt",
  "key49": "2Z7FSSqbjyR5pKmhHBxG9Ma31VcYRB3og76xY2MmqGYGsdph2vQVS7njhMevnTfLRa7NGpVbY5YozKMbBUVmoUBf"
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
