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
    "4QTHu9yg7r51V2RG6HirU1LwYdkEFXrW7Bkwfod7o71tDUP7QA24m2bBeo4sQxC2RNAQmRruhrndTrVPeJrqrZ29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m8NW7i6zzUXFBjfi2Mbx9E86CCGmy3gvX7KMxsmUECNTFpWUUUWGDijuq8KnWLy7sSoiiK9jzLhSnZa9BfTqNjZ",
  "key1": "44E5G9YgpugxBAmCmULbaQPu1BAqDcEPjap4HDDveL39rkEDzhtcHnMZ5a3B7csRRCancntScCdfnftv66UeHkoZ",
  "key2": "4MZudAwX7jcE4ZRZUAM3YHZ9boQcNmxtDJ4DjeN68KYAWqbB9cS1AKct7PP3W3GR1k8v9QZFKKj1ZfyTmt5KpFzV",
  "key3": "2JFXQBmAiMe4hZkkYgishPmpNNDoJ5pQUMB5Lbyxadt8q4EaKF1kTFdjWfdaYqHH5XYNrWZrX4o7hGjKXi9LTDgq",
  "key4": "61hDxAiYUQGW1HtjuEEvhBCP47MsMFuqbuBMWM3rWbEL9vsVwcwAY7t91ZCFE43M54ryrs4gR4HQjqY1NqxyVV3L",
  "key5": "2nPg2JkAe4n9F27ZHFt6C3zpedXKsaXZcQAfW26uKn8NjQ2HMdDRChYmhWyBgtWZYXKoTo1TDG69ksac8MbNXE8g",
  "key6": "oG58WizbWxT7wz93SzR5TXwjc7aE8tFiVoD456GU4pWX4BR6RS8PLrqQH17vgSK4QEjujDRkH99Qik9nkfcHbMB",
  "key7": "5gNdWHk38ZWgZibKKfcK3qwcFpXZJciKh7uCUyVHhykUjfXjFgR7ewYD2hwibf5UDVKkAmrFq35XgnH5LFhExgzS",
  "key8": "s2f3PJ5sd559LW5qv1SGadPWijCJ8wN5HdizxhDLC3kYkMeeckEguSMwmF1Z1jeQ1p4nk8vcdZnwJW71cwT3gZs",
  "key9": "3zzDES2bFfzrFd8vSeg6nxSqzY37oqQ1u1dmcsMSbtXui8SehnBPaLJrVq3FvhXvCiKfmRED4LpffaZpAqQZLMwo",
  "key10": "57ZvsVLvU8QjuK94EDZy1TNxP5kjfwmXpAHxJduSG4nkRk8KMcqT9iAYDHFxqvkkbgr3b6UuHPQfC1j5q4xdfpy",
  "key11": "247LAJWmnxN9K7VXXFZTgKUaG8GyRg2PMsHVbueULAUKdqjGJheS34EG52aFza2kLHNRxrVgMULsngSQNs1h8VPB",
  "key12": "2Xqh1oDZ61jYHwxYw3Vut2HV253FW2iyce7f7Hcb7zyp3KHsYNqE73xLz9rswJj1nZkEy2gA8EXNBXeunw21e2rP",
  "key13": "4gqUxyWXSkKnhKT7hPDHgvwEE4VdpoZxmRMAzs2bFktcuEHk4WDXwHmYiBLM7htZqBnhtzwLbaB3ZpZyEabYrFCX",
  "key14": "yXw2r6UkLuAWC8GZFHmbnCWAjeR7sr8hXGtriACjrWZavUNm5QRwron1cWjuZoZZ5Z211j2gtaLvwDEZuKHLDoM",
  "key15": "2sTA9YaUF7Fz3Ch8AdQdqmhofDFktPFhsVcFQQijMgwrDvA8KLqorwFEkEqjPMtm99nP3HzvEsGCguRqNb7z9TqR",
  "key16": "5dycr6c2CZUNGsFXg9dxoCkjdbw4tPcmfUn1ZNJH6kHEhasJvSoQVVi4BcaVEPc7mn49NwBoX1rzNJCjoEhSRwty",
  "key17": "5QBu3rK18FeGBD2j4M4sJyWTckQWYo2wMw5ghDcquy2xxT3KgiG65bXNiWTNM8VrBqXGkfVQ4mwweJ2V3omGiN4q",
  "key18": "5tNPMcztWVY2KcNQhbPMXAhZmCrkxKP9bQV6QXZ6aAfYAasDZfgEjYGF47qaLnFm9JDRggvv5HcJeRUuAycTGzd3",
  "key19": "JxszQp6qDfJCjsQEZsFrNu6xve9Poo823xNpJsefvSJYVWNAVjsYcKZRs98beFt2WWbnFkYQRdPczfKbTYnBANW",
  "key20": "5MutL3NThKfFonY7XkD3moK3EmVvueS2fssio1Gzu2MgqtmkmgnqcfpURjtiJ7Qr8xfE59euMtPgysBEBVi57noY",
  "key21": "3E49Vrj8UnFSR43e1Y7PPozdn7nB9LBERkav1paEyececZEiz75KurEeAhstmtRG1Htfx6zyFNR4Zch4AoXZ7Cu3",
  "key22": "4nsgxRigmhtUn9qm7CvpXFCp4R4m1JTs3ajWQhoAh7ffTgePhbdCQSF73vG5HeWMEb3ecvHT59FX6BmBSD3vV8Cb",
  "key23": "2mh7hLBQ2jueqVaEw5NwPRraVsH8CF71RMWnP9yFr5UuxsfUgMWZAdyqUgoav8CMtWhKyBV1E9KneSgto7E5dtcL",
  "key24": "Rpm6qXK2565gc9M5rzMBwXYNVsFipFpPFNMJFcZrh8rypqnE93LvXmQ5jwQUCbJXdmGSqFoc3vkyeixDfaE26fh",
  "key25": "5ebYL3jSUAZ9CbqQbJDdYLc2zXmzC6kE2Yp9uxnWS1dJkkATTNEnrrJQKZA6AQTpHjEBjBDMAuhq1p5r9Ms1wqeo",
  "key26": "46cGbMKvQbYFLSdcPB1kU2YwsfLDMFPVTejV8pKueanXfTi76Wv6gF7yGXnoiAAmHtBJ8irZXCosEtFRoaHfryzv",
  "key27": "RKfjar8X5bLhhYr6H7X4ByuAbd2xDC3ATmCPktFQJei4bgM9Kf1p6ufdbumjcfrFqBbXSWeQ4KMTH8bQTaACFRf",
  "key28": "rX9THiXtVTUVgkLZ9iFzZ8ywCVrxqoMuHojJHyP9A6JSCNgatdmfBE8kaEnd8D7sx8oL4XbgGRgGoMr6BPVWoH6",
  "key29": "4D41GEVPGKiYTo3V6tXKXBp4P6QbNRT6ucCjNfydibmL1AGwnDMqrEzDvnKyxrPTqMYwwLZ7abxaJwthcS12Jibb",
  "key30": "39XdefbNTRAgNq1RsiMAjuw1sBqzZaVUojZ4Wys7tDrjQiG8JB8cagG1rDBwDquxZtMyDA3KDgwxCqaBiGRpo6HH",
  "key31": "399nVDkk1zmqJXogzV4gUfZRe1anrhTL5oYGLBTR1yJVq9rTdZ4qZhP18AxJKRoWiS5rLAD3sTaToHqCXPNUVrWn"
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
