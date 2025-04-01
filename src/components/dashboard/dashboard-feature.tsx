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
    "3b9hkoQCYBsuEcqz8yJgwgqxeSdcaeoMrqC1p5LvX2QJfL67Eqnc2DQtkzc7PpFhvQ7icKvJYLjaWWtKciEJ3dob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L5uLv3zRGL8RMEPPicncp6kAorYj2kxGQyXXrmsSbUa3tbyVFkGD4d9tKMPu5Li7zFSLMW1WLpNWvP6RMDKZ6We",
  "key1": "2YuB6db61inrAfqyqFxv8ukUUzyQ9pJdusbWqypFfk6athSyhNherxqVHbBd7uPrs9qHbF7M4fSkE9Qz49FBMNdH",
  "key2": "4zVxsemkLV5FbNAkXAo3eULNQL6Kj6gRVL5tsGRUL382jpTWRxpoZbtyKYHGPNBnxaZhPKck9gxXzzf9Q8WQkk48",
  "key3": "67cJ5NyFsMu9xUv8bEs49py8jG8nPp8rHeUnx1J7gKHtuwZhyzyMisAUv9u2thtsMfJ1G3cV3iGeBGks1BM1d7We",
  "key4": "LakVBquSmTAN3VpPGtFD1ZTRJtv6bR3rCAR3rmtWcZQnvQ2yKnhgWQL85Gdx3vHtacDH8XvNbncS1d7S6QZAq87",
  "key5": "xSMXwHLeasJ2ZpKrvC1WpFvi8r2nKp7ZkpMZn5DwqyEfHpiM7DXx6fyTdMCv7kkvq4BzTdY7hgXgHLC1KiogupT",
  "key6": "5QP2AtoFsoXSiWLMxsM1d27WBXq8QXsmWKLp5SEMDX3XPVZ6p3anLNSff228g5rk8Cwv9jwMRHhx8Mkju1cgDt1J",
  "key7": "2qy5uLGAqtxAGdRWYnzaEKto3wc4G8j8u6vdbJMiVPEGpkbL5BaZi7wyTZawB4raESJrQjcxnR1xeEwAwN3pb3yv",
  "key8": "4deHRw3opfYDeQ3u1DP3rJpQ4VTRoWsXgawFc3gqVhWfriLnCk9Nxk6Y6oiZVicboTCPeCSeHXznCD35PNHq7Kdc",
  "key9": "2Qt3epoSk9WGVmnxryK8Ph2eSemZ1ktVBEnF9dQRgg8ADfP7mD8jdALWXA3Pv9v5YCB3aY4nEPcUcKFJVz9JafKW",
  "key10": "VpkdnxBnUHB3H4xzR7shdRRe5Esbg6ZbYDhSht829VbSbLVenYxV5yYgYbBLVWqXSL4V5ryuTJ2doBjeEjc7fTq",
  "key11": "2pu11rH7QA6t1Taw5LtpdyYK9kdgTWmyoSt6MwA7rycJDAY2uNBXUuqt4y6JZYWMcWNRVBSo2sMi4sUS576Eoysd",
  "key12": "3xr8bEDtD7aBLauPCkcxkdDk4iUWM5DBmuFMq3LqGZdXqs7fpGfEN8TcyWjQtxBmsxqGiBng2PVsMYY2GFWQc4z7",
  "key13": "42CNKek2NUzis4zvAgMnvWDWsdNy2E68nBPswgoWj9B3nfvnMWyFk1c3AcnkVGxNUdoRHFvATjHNnaZ8f6yBNk8y",
  "key14": "5jBYYN9ZM6h5rSDWU7168YksRun1PrU7ccNBv4ervr5ubBMpynJDxDNjoX2C9ixxSTTvNEujNaWvs7D96K2Y9NpA",
  "key15": "3MXHAHkLzq5jAnMo4ncE6iypX83Ld6bdbsvRk4JzjJe1Wasd4nniDpeVmdG5sjWdTqyBXKTZvSpU9tshND6MoEvu",
  "key16": "3rYAdkHwKRRZpHB24K4UvnbPG9Nn14RhcBFosHdYfuy8aa87CzEwT4P7sRdo1Hqq1gPsRV4VRM55x2kB8MsthBGe",
  "key17": "49c5y1KPgf2HiqMw71KiJ9j5A3XzwBxndJWSWRzjKCj6QGRm1iVDiptJxXPgUUiW4uBycsXXaTbvDQLzxPVkizhE",
  "key18": "5chMvEx5zbiynei3jH8zYmNaEiMMBdUkTexXJveE3Zfbx4QDTMazvrCPh4NxfwzHARaJG63eEdpLbbLbs5YbKZvq",
  "key19": "5aDWvfvbRir2MXNZXs5FUw9eithwgZgiv9AkPFqepfHCftTPhw1BQLktHGgBqKY3xQycKhWxvBZRmN9G8baXAHqC",
  "key20": "48ofbffm4NDiuew5jRveKDvKRiFfsCBAcXMkyQAGYwJEh5rBgDQSpoxGGfxfZPZJi2Gn8oJ4EnxfeXqGBJo9k2gU",
  "key21": "4coLqcB27qdRTjwsjNbZ9orB136q2yMMJp3wkDFKpSrQn5JJffAQZTnS2dKBRHEUYhS4SQGzgCVmYEAp6tZY7SZt",
  "key22": "3dxRWpX1q41fv6Srv4nM6i8WtpGc4VrWN6ZA74H5K7j6U5YtpWm5FSNVBXatQmP2rvwgmp9wYevUjEANrXrsnt9Z",
  "key23": "46GBbMmBRe1mkTNuohhGhxaHS9odwwiunQLeDXCjwC7VN8MaqM8VEgCBFgEAaZ1GXyRZxMP89Pmf6JvUBHCa8JNP",
  "key24": "2HVTASpLjub3z5hbeTzWHAHAK33q8VyQRUrLMAJug99D4v9ghxrivdRUPD4En48wHsYAM7iCTR7vqU5vynZAQT6o",
  "key25": "3wQgCGwss1iSB5LrKsVi5aFPwZTSFSrFMRqqndx9f5yA8UWjn59xfWxgfQyucXDDrWrKeKXAdp5YyQL7uLERfxZv",
  "key26": "4bPVv9DYj3r9dToV1Kp56L2ivvHuCdfyxAEZsChqYYbEyUGtCy7BFi5GbBLR9Zr2NGtgYT9FTGAMW1pN6XT9HCvB",
  "key27": "4jeQ45wH8ozxgmUu6sDZQ3Ysy5Ze6CXLEQk8hYou7kPpvUD7GGnNgDgxVb4bR9z63MSdAjr3KCzyKnDJr21PG8fr",
  "key28": "2ycDnkuvChRqe7bzkppozJpKNcKYjjRvYyzp4ageP2hu6HRRdKWYDpS2fEPKmwVfdRYgTd1NpMt6XPM5d948UdcS",
  "key29": "4woncu8vtJ86Bi5CB1bKRXpBRPXp9U7LGc8MY6ATgqB4DstDfDtHSptM8PMevY7UHmdsCKLitP42JL5S2b8uuxfL",
  "key30": "22AFEvSyGyFNdpj76yX9RDXb6ExAWcs4bU7sSLtF1rD9uYhcFcJoGXFQokTc76MTFc6tbM3furEsZ4NyKxXSkXAL",
  "key31": "2ZcuYDUNSsXtDvUwdcpD7kobxq82wBP3B6HBQ36aenkpBi54PPmUiBmFuhe1SCc1RZHeaB5XUUkNaBKivZbiTFBV",
  "key32": "y8CFecYn1anWXjQVjxGmAPfLSW2E5XdY1gbY1sFHU9uHTYmxSjMQdVjp3UB4RnMfVZ9WFD7Xkck4prwCDWzGG6K",
  "key33": "2x6xKBkitHLkNygghRxNjydQdHAbAvVfcZgH4ttMpVBdrPnTkz79hLR4eEf6Rt9FkWpeqR4mws392rKRdYYLhZpr",
  "key34": "K8fQNMkVcUAExiQ9n68CSqtsX5HBiY7b7JQfuswTS2kw5ojfTbUJ95MJ84KyjcMWzFPekxyFgo1zXmLXTsoDMp8",
  "key35": "5KLCJJdE46gDP3icyfzeq3wJowkzyk55EsKap8kFs1SmC9YHuEDDQwjjJa3KGETBKtKGjoWnBrY31Rc2tWSGFtJz",
  "key36": "332PCcPWSrsmyBfkmHhr9DLsJHWzxgNMzJYHRC5LHQStZcBYw49osSNN3AN6kXkTNF6hv74WkWDoDdk35Po4Gpnr",
  "key37": "3FAEcjqaK3Q7vj9AFyZRWBJsggq4oWTaDStffVdxZRAgFUenV3JG657xENayGuqZhyK9ZFVMPQ6747MoEvpk6FA6",
  "key38": "5hDjk8F8PHX9FTBnN6jmpEgoL7RirUYhC5Xj8GgoAHjgAqqzpf5JQCMkxBfFVosSExhEYs9WwekS2cMoJX3tP6GM",
  "key39": "2Cx6hi2jfRfQui2S42LqazxYn4TyHJYtxucVDKg2VmP1a3nRMftuDzksYKRubargcqqWPZg1MHVfTaswrnes5wcQ",
  "key40": "4BX4ajXFkypCSREyexW3wZ1KXakeSrsQG1fN6UgVFdYCBGKEEW3DVogPzaTnuUPEbw3492bij2HNLrDfkP5WdYg2",
  "key41": "vuKjTjJtEsGFfMUDMJFRhTu1dP5ytPS27FJzLALmycZUmAmTdBtzJr3TnaoH6Epc7nncZTQgED5RZ6TqDRbepcq"
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
