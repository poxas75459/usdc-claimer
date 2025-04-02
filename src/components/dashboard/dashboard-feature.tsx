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
    "4sQKHvPecgkSoJbiEkwfRzW2JhkerrNoA7KoLLJdVD5y13ZTVNqrZghNa6Kypr9unzZiR8ymtbBNWSknoLHW8JXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ENZ8eHfTXEhFyZrqNWnSNr2LoAfKkGaDrk6TCTQuPyxRha4MzxTkhnVX1wr1ki9VhoA63u7TfSvHuVMytkAcPiX",
  "key1": "2EP7toYyRD3nehP8anGk17H2y2ZnwKZy6WP9im56rmrEeHVYcJkDrXhBLqEDaK5AhDXQjAPSVzSr1W729BJ21s6x",
  "key2": "3hmDWwJE3jgDLvcU76JFXrf5A3WatdBudFpahdYH7Xs3u8qv2DGLcNPFe8VRy9e2BJx1M3Kgmmh7c2jPQYEi6LrN",
  "key3": "3dybWdpH6iHHnJv5NpbgeyKuW7JNNTk4iNiZ5Eg1jodeCk34wSbaeZfWeys6134HByFm9N2A16wxyccvwUJ2Cqub",
  "key4": "eke4LV6s8g2fqHJToMYaN8sskTKGn5tmQfThhEwEVHvqRwJurLvRw1fLckq1ZY8LfpYyBfZSo2DpKbA4fK5RcA1",
  "key5": "2Wb8gyt1vVayBf8Nnj8Jzyrn5Sxnyi5eZaP4KKze7WtfJixDEoN63g3ZHa24C6M9FDKNUUUYJ8KVHxA9n6uLv3RC",
  "key6": "38fmqo5Ea7CCKBepkzJdZmDNYCv5HKXGiPuazUp8dZtmJCUxiNkue2XL6tBNPLRgRzjume94D2nhZArbih5g4YHk",
  "key7": "4WYjZFV5T9KCGE3rABKAmdmNAE2RJga2q9YVd4kU5BAYyjanG9nLuXRrNowg5qwD3C9mVwhXpsPs5rqPwhvViP5d",
  "key8": "5aYAm7an8Gf59czKYnDa8PNzPwPN7FKgkxTpyTLQLu67n3N45chZxSWEZ4LZ6oxHfPxE51THXPZmdrtFN5HLobXL",
  "key9": "54iRhGGb2jkDxxzmq4LJGYvwNLM6XYdVfRDAT9xHxaKBwXRK4hkdprJP27o4WkfynEH84YnqegJ4tqzmTkp4cKo4",
  "key10": "5ejq4GZyNtZg4AKC13Ea1hBGqDtw9VKsrVQ4v2VZrMHiMWmxFsvNcHZzKtumLu3Bcf5Dy6CyuYZGsruXkgKXCrs8",
  "key11": "42jdpJ8PNWdTuFoh5crHvtQ7UDhNsYr7BBAyeonfsqyDxVK9G8NaTuzW3osakJG1rLM2L52uCaG6LpAwm7wQ15Ju",
  "key12": "291v6xkKDeVjNWH4rL9GsHDE6tA2L1MG8KKuujBorBEsWeggYum573Gzg8ssAimgb6Fz7TSYzM9c1B76cBXWDC6V",
  "key13": "2s3nC9Z8CCnmjntiYAhWynzTUjVjogytnBxWpm7Y3WsHRPtvWfdwCSxKksMv8ZyZK8tXvsfhTjo4n1MLETPS4U8p",
  "key14": "yCPr6uwNhkCDwSvpN2J35aSyDZp2697ihLXCyR2MGyJMDxWmBz9Nf2e1HSUDgxYp5tYQUBbPsoarctTKDJwEXr7",
  "key15": "5sw78jxFYUAeXcU2Vd2qTMehaM5EvTECW88oPqgAwcqkWr8KhJVbd8NmFPKNiUA7YeXKuLbTs2sC4V29oQMaV7Fj",
  "key16": "3beGdQZ6SRVzF2ZEBKF9qGtoWgpPUdi1Gevs4aAVXQEsUucEDEw7QPd3PzC8yFhXzsAYoCipSpurRxZhmziWdgE8",
  "key17": "HRegpewbDc4E3HPEjQxmK5Y5KFjmHX3TwQihhffQQgBpgmzXEfkooZjpMaxKhUe5Ccb9nchXJStKnoJSqARoe3X",
  "key18": "2wRUQkkCnYnmt1WuYfHcomxw2XpiE48b2N7YUQAsZXraMXKPx7jAW9SBj6xAmAVvhzLhboWUxRVFwEwrbijKQJhi",
  "key19": "5p9bHFryrN3emBTfcbm3niu7t4WrYpZZNwKAgj6mzigGPzFrLCTVebQ15rxge3hSQei9RHFwWFVQNQ83nrMqosUG",
  "key20": "3kuAcRnT5VHx5jXx6HRotTJ6eV5y6nQwMTVZ7zLj3ivSZdpqCr4hB6Y7hf8Sxb8SF2Guuuxqceb4Lp99tSTC6Y8F",
  "key21": "45h4Prj5nhc4eem7Ehb4pG58sNyzsvzVLhxPC3r7BsaeJjQ8vycS3VxGiTT75vCn7sVdYechE1kb24VaAFC4fpSE",
  "key22": "3WwfpRu2GHKrRLfD4fn7SkwFvipw7Wv2VH6S5j4mqzVdq5AFi83jSC3D2E1s3a5UVqdtk1c51ds6UPfKJLZX7KDv",
  "key23": "5iLF4eKQrjPZjTR81rw1T4CQ7CgGjka5brs4Fk8bcwZhfSzhG2cncN2xNKs83gexe1HY8LUqWG8wvvBynAYH6z8X",
  "key24": "an8bGDWApcCM28zUfMkyPL9TqZ75DyZyVGBYihtkPM64bhA1dyiEpYGxuFVZJbZxFutz9gZzX7652WVdWeZaXfJ",
  "key25": "4zh86rXfkpTRgrB5nLPULBccwKDMzZywWohzaaAsjtZKPFcv4dJqvM4bfyRaKYxHj3iFx4pQGRrWF144cbsbUu95",
  "key26": "ZtRfkfKT71SWfkpZrM3XTEHn9bDfx8zH7VUpJFs6RFLn4F7bUpXB98VZ5imuWKM7wNaLFmaBGxMA8tpi2MgkZRY",
  "key27": "4AK3NcYUFzZH7e83FW8PE5Qt4VUmA3BEoFRNmKW1HSN5LrHSHSJvgZBJLiofbJucSGaRDg7KxrsWyUF2EGB3pZYf",
  "key28": "T9zgZYhsHkrpWhBR7v7ZayeukkDF4XN2WreUrq3pdisV5VcZ535XnHpUr6gVAZ4jUaUZtMWeze6eb7DzGtuJcyY"
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
