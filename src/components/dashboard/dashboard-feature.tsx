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
    "VwydQ1zjL6PA38dVbwEpgMdoQFFSJRS5cQqiaEMxHxUa9M5RvzRjjCTk6DwWChfUrAJdaUQ6Kzg8hBkrtjjxVvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48RsHLydsEBkmR2g7XyoYY3FcN4HAvWCQJcHV3EHPsmY5P6vNyCyvT18XD9MA815s8vSXUuxM7WeacoAWYCrf2es",
  "key1": "4CcDN2PmJFzNN3SJfiBXZS4CM9Sw8xMfbuWYyPpGcMVb7qGhXTUgcDoHPNwsgWUmkXWQeLtM5LYKQcUZn1aT7Xvc",
  "key2": "5Dca19RphThoSMMS4wKvdb7eNrRT4i8HJHTCQyMe1wimksdXAKBteofxJtNL38872GnRELJ18WQ1oR9cSAHy6CFg",
  "key3": "36oTLAbEECFySAXj9CgYtV6rfAKTduCBMi7S35uBtQEWBdCvEvMgb9AnVs1CkWqYMhQaR1B9xpBvwbVqxJSgo9S9",
  "key4": "4SXSfBGNPj8i7C5LEWFxnCgqwNw5US5RRB9pqYMUqaWWkaKDaj5fDiKWfZpdZiJKJgwhKesnuXtFJovvDu1ULcgx",
  "key5": "3AXKke3jz8JSGYjrzs9CJXg3pg4zaVh9DM9hwEsVAXW1nKst6tx6MKqPWgWvssSWEQRzbfqir9CP3qgcBFCxNa8X",
  "key6": "4JfkLg8QtfvXghmQWPRpqbGoRN8gJZ9G41k4u43j6H6EaMfyb5Ae3pmof4rDR3GuiMP9NkfBnoEDzPMuGtg4cooS",
  "key7": "5kEfAAQ3SK8YzVfkQehJsu53zGLZQJQDBE1NicFQzHjwArJnG3n6ZhAyTPCy7mziG9bXNy81fahScPW4GiUCjXxF",
  "key8": "2GUnNV2LorwzMzfmn7D9JTBbjQ6hQ4o93yoQck33yY7TmSP9RgMDfg8yHabjoQC3NLVtxvBycWgM4XrHgdX7SpdT",
  "key9": "5BNQkuRsTTVeBjHqbwNmyYpErrxnhKM5oyjbk2TnyJTaDnM2791snhCZJTSfTjYmvnvqefacN1qpN3NfDSGnuNvF",
  "key10": "3sMfjq3nRYRUmmsfdfduY7GaWWdFdygS9Thq7LGDTUTTkDUVbzKJoGJF8iJZxsQx7pm9zk5EH3NsvuQNqoeQP4wS",
  "key11": "28BnamWda2B9cSvFeSLx5xQ7JnXiV9qZU1pUTfBdf6ZgDaUbLwvyD9fT4YMrqriPu8QNL5cybCPbfNcZyYBg56ZF",
  "key12": "sLgRRWsLg29Tdft6Vji3G4f9xXvRT8brrH8drZBxAVNgUPEdmUmwjpP7973ejTWFdM6rSDPj2KNhzT9t3YsefSw",
  "key13": "3mkTQt5QLoptE5sipTnv94199DppmWjfwK34XyQVSHF2mNU6QfLMtfgh7RPXrYz5LJXzoRAjMuM9tmS1QwA8uQk7",
  "key14": "LsCzF89s9846ZvCUANqvmh9Pz5NxqCDk6hyBsVq1PVxxNHAkV7rceV9rs9SDLHFo9kn55NvTktsrhLNJPKz1Kkg",
  "key15": "KmjN8RQ6ijmdG46oV8RWbuwQKca6KNzzAQb5L9mPmirWEo9ZhLp1QUAZrrixxPVUu7vuyRoxYAxGMAPhYd4EMNs",
  "key16": "3R2Qxj1J3exnAsTut1iUhawtugEx2EUZ1duBj5Yv1QatLKHymPang7DLzvxzvAPk4Y44rbEZfMkzPw2qGCTaiDRC",
  "key17": "3zZUes5pr5jf2qthVLk232SgwKtHHBkyTzdVsQxQMwDKU19jAqnb5wL13b8opZfh98aApz3cuBuNqbAsfdHgjvqy",
  "key18": "2j4sNmViqctS3ZPw6k6qMtC6ufWYKMXzfksCLkQ82JhHYFPcaWAfVYicuS6GurUUrkjBaZobNAB3GbaAg4YdeEhX",
  "key19": "2UaiLUEEJcEtekhwdWFjDeFdRxNiP66tmnnxvZuporL86YR5Zuiap1vhN8kRmpfLYrtESBCbJHVLhe3ks6uzhHNH",
  "key20": "5ZgZfWw9KH1QzEkUbvJ4FTDYF4SD9KiiFuhv8fYd6KuojMXtsL1vQK5TWRsP1h2Y3QhkLNGEdFujFWfN5bcbPon9",
  "key21": "2mgZPcFbBKoek9YhouXN4J2oFDLUjNNrjt5DU21kkXqDY16hQqqDhmt16uLAksqRJdMkA7WgNynbwvBZwYLHKYsK",
  "key22": "4pkd6Sd2c9PzSxtpParPi2dXECsujUYKQXcA8g8iWVZZ87k5DaoHz6uqc1bzXFp4ET9rJmUka7NYUhNzLf1su9Gc",
  "key23": "4GE9Bj4h7wns3tZEXY4PRPYc9ZWYNKbXdAi4dTv1zoXTGrffjbZtbHF1nSVjzbRw767EFgRoyRkNkXwJ9Pcg6sS8",
  "key24": "4HoS5HhK6Y6yUDPvWdtuuorbzah2FNL6mdxRBushH4XKL8TZ4nC3xaB88opvKDksgo1hMqKUfLDfdd1Kdqn5pxQw",
  "key25": "3tzSJGNFAZgcGnezekiCr97VZJSTBs41ZWEyiVoiQes6JdmVg45dUDi1RrpL2VijhzQSYgViHidAa1qstGmQmWwD",
  "key26": "5yh78c5S2D3TZzhVUThwAhxaKaYQ7P9vQTJC9KGy9gmzk7PqJ4JyEhSrLe1E958HcgiypqsYTvvVzyjBhbjZ9PU9",
  "key27": "28Q5QTe3E891J3hZHsDFjidgECvTxB4Jp69hAQ1Ea6pM3db5awVobsj3C6GgMHFkqoRmvG7YLeo7wXRWuG6Zpoms",
  "key28": "58qyNk2neUVUhW7EKB26iQ142XQqUf3ftqsxH7GKkxWEjx95ZkdiLSPbhsvyngCCDURxGReq7axtBdo4DGBE84Lj",
  "key29": "nK35UtMiN3batgXA9g8PECUazV6CR5RE6shw4gsiJcRvmqRESJAaA7Ay1b7PTHr4qomZr1SLgdQkpvZDL3hi2KF",
  "key30": "rGb6L64Sojh76s8mnMRoSKAnRGnXBzDtCEEXf837YVCf2ygGfTM78dgdS9q1bh8ythRe9gTjgxNK1ab6prdZuXW",
  "key31": "3WTfGJAxF6LKWKBYEXVnmkSmupPAvkqmfSv5BoyPZUmxqg61sKid4sS96oUWixq6ZCcmr2ksMPSvX5zMhf65FV3i",
  "key32": "4QDDoLCBko9eh35kDVG7aJHyrrE5SMPYneEzXyEmJzUzsySeZr2CiCViAwqqibGjfp565iLQVWFKisvWYAWeRMS6",
  "key33": "3fsD6XUvtGTAKXb7jSDujkokyiXueUGVGRQAkNsJVB5BfhjHWmWd5wfaJVxPzJ7FJTieHGdjqRP94yUnJvLJPBmE",
  "key34": "4nUXGKajdBKSM22xsoDyJbdDBwLNtB7WqZRxQmMhTjiBRY1FSgBNZTW1JKDRCyQERkPJQTsDvA87txnKn9qbGLmy",
  "key35": "2v2reGzHPDywyFiwEWtbWcFXXaKiejTNeFQ9YS3GzTayXBUVdAMhQ16SXknV6YtcSTam4YbvfvvzaUZhooR1TXe",
  "key36": "54w3UFYoTdjtsiqjvAsMDBHjLzWxDJ5WPLCAZDZqNYrLkd2rW2EozgtCZ6E4NiBGFc4opc4xk4V1GNf5ephkjGQb",
  "key37": "2SuZMYoozeefKB6zvezBdr6t8uqto5TPQwmfaRRz7bBvxYckEmBYsjFkSwUfGEiwwjQLarRSqiPGEiy6VTQoHAmn",
  "key38": "62muEcpq6x5fL1hd82Qd9iMRFEkQeZSAAHR27osWfY2Q7b1R66dKnrEwrkK7mTude2iGXDfzoiGX7dpByTZQuYos",
  "key39": "2GEBaikPiYAaY2Y6yH548BiAUFi89zpy8Htw8TpaXoceoRs6BEW8rp7eRKxaixfoQPAbARxfHKDLAwtMT4yWrGbw",
  "key40": "sAFC8iokLbKhCzucyZoVTqeavuSG5f27Epu5gYPcL9MGz3m8jPb6e7YAHeQi8gsup9M736vZFEgFpvJetuiWavM",
  "key41": "5V5oqQ5Eqyq6vAUnY8qdRxD5QxNMNtzCdy1XroQdDnbixqGHt6U2visGBbwzHra2eU1JepCR7uCwyFVnCUjRcRdM",
  "key42": "3i2asU4w6pP8SvsPrE3V7xsfDc73wV3omajdME4smBPsCLi65WyF8MKhV2t9KVoP2SbEFj8JHAtPruwkEmV8C3ra",
  "key43": "J32wBXa2APNnToR7TKECdD296TV3pQEMizKXkncFnAEo3hGdLBeuT4KJU12KXTAXbdftSsk3WeRpVNDnRodg4e2"
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
