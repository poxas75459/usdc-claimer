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
    "563Dy1dJc6exQkAbWKRFcM92RncGm2mzwuMPMTiKbcyWXXVbnN7FcGAPG7t2Hry6CzSpnLH4c7mCc5quMWk2LXDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t9qQC4DUXz2NiaNzpAyjiLXDUYnPzkXw9XuUBRN8V4DfwcHTd7hgee5RQtq3F9RwA4pG4pnauqy22enD3vTY7S",
  "key1": "3e6rqRCXAKDfJNbhzEEjMt98mbS4LzoodVm3N6nhatnfeQVKJDAvPX3U4JmRanh4vTmfF27xVyXFr3LQV4LiezcN",
  "key2": "2KdGjHPAD5SzDhTr7Ejdrda1DaDmRTAswHqG75D5Tdk12HFE3oUknmv5aQ4uySbxe7M4uqpc1gdaSPMnEtAsDbN2",
  "key3": "22rHtXWMSj4geYsKuVXrAh456L9X8qDrA31wxfqAXffYTboYNXh8TEDGuD6kbUcGvFChLyRH5XnkvMBRhZEZkscj",
  "key4": "54rd4bDaSUC36hJGsfLSpUYJ2rbPvLjMLcjFkpFRnpzbib5qS94c2UuqSLHQRtVasb6LrJTgCFCUTwYnNcJec4Hf",
  "key5": "5ANLGM9cykYN5R1FbTtHZc3cAm6N3xsCdACpibwX7Yc45yiqsQWRdZs57D7AAxjgQrRBpjWbcovKT1zhPqKBjQX",
  "key6": "4R3Csb8TvvUKXQ2xHRUb7QUePTpiGdN2onoxLHBFnUsaHzaHoi6MYHziDami7rKHKMuYS7upJ68fk3nk4oxTeiei",
  "key7": "3JXquG1RKY3HSosXFEmoXUpe2pfUqpyZ1j7mk9w4aUJSrftTpTWFQ6BWSsBjekA97PS9TMZ2sqrL4W1Er8AjKdPx",
  "key8": "2bWvCiCZHa1d1h275SvAMzGrKQpu5rKpH4bzuqsaQKdSiwg2oGyZ8zBXHgVc4YmkbqC6rUeCtvrReJeSBWZb3VW1",
  "key9": "63ct6AyvngDgzCGYsTQBNRx54Sy3ZmwadmsH9yhWBodiVRwTjbzwbzgR1eMPkSgbN3MFYvgriKgZtpPeWo6y63fs",
  "key10": "9YEjEzLYkyNy7tshGiEEi9V3UkzXQvfzdHpCwDQ4KsuJLX8ZxTFivGXim3fbwGFeG5C6tco9nKbnZf2EPzuRt8c",
  "key11": "4TeRB2QbtR1pqrKde9LcckZQsKFR7Q4ULjC6bPsF2MLcPqASQ2pk6UqT2nZQFmz73FBfNm4R1J3GquKiVbo7znRy",
  "key12": "5BQMqYMtR2UNsK4cQtDYkH4LppJRqzQVYevYrxbvHdxUQgwssnp5e86xyJ7SnhoZstMgkdkECCUzGxeUAFoTnU62",
  "key13": "3hgYa8mvqGNkorCcSJdrzWrV7x4opd623SdvJKZFqbDfZ4xg7GuowcZrt3U39BxdXLr8EP4JE3whFuarWTi1BraG",
  "key14": "57TsqxS3otCbHwbG5mJihbkyZrgDqsHNGTABJfFsxo2G2hJjh3SZAu2kVtfP3EkxyUAUWSzWUHnKheB3hoqaKszU",
  "key15": "3FJPXjp53ym46FT8XWLKKxeWBCqPgUqySxGc19t21qmGrJrsYqC3VasfAWSGkVhkdVvxiE4UwDk1HQpCbMBNbzCP",
  "key16": "51pJfwMHZVZ95iQ1MriNzW5rNSt9YWEKgxWD6mANuPRyeq7pbnLtfjX8pBdA38H6o5aVsZQKJs2CPqLWqo13WV6S",
  "key17": "5N6cvWN9o3jFV4hwHqBU8toi8SrUsuyk8TXy9j9NBDNWvyuftWd3gqsrZdCYVaRYXYiQ1fGsQjzfYZ4HutAyY13U",
  "key18": "5kd5tDJuT38HD79HJKnkuTFunkM39wMBpjjAcd6RpmoUHvQhFRqtQS41aefZj7r3iZT21JBrTrEsKLa387qdHQBi",
  "key19": "5UHdtv5Fz4jQMpUKZsHsZzCA8gEpYaGefUsd9gBhUg3GJtoJ4hFHu4j5UHkDPWFPeMhPppW5mTeaavXdYQzyAS6y",
  "key20": "XNjf7gt4cA8weEZASVY5FmbhMGGCkZuXxGVgQPXbaPh2qVi56JqMKMTdCUzjmpFUH2WfqaPc3gyKtYL1eGRUa2o",
  "key21": "4a2qyzfYUm8JgccHjM8cibHG9JyXtJG62WY6aDrZtH98NLn2tBRAUbN2MBWzMEwCxUju4AJqPw97fRvHSkUxyfSN",
  "key22": "4Y6ER49Ey9aPu78JdjA71EwW1bSqCgBu3PNGHpNpHE1j6TB8fkRGyEicrycdTuVrrSY3wZRce9aBLvr8odHFVyrk",
  "key23": "22KdcWFLMcKrEr1yC8sALopkQoTy5wMArXznc1HK8bjup915ShXfwpC2dZtxkBUzdU9BLJZ83j3wbh3AHWEiak2J",
  "key24": "4hcKZV5rem6GoGpLX6xpKv3Uc3CmJpH5ez3tBLRERkQ9M2v3JgJc42rPo9iRsBcQfxtw1qgV2aWfTE85fKrvMYmM",
  "key25": "38Eq9qnpBDrpkrsvRKEPudeRo5yLgJPT1xv68AWEXvdfTTmCh3MTx5qQGZRyyh7B9Ri6GxwbVAaC9jc5f8uqBWJ5",
  "key26": "4eLZmWvBPagdzw2y6qiNCpM9ccHVcniHkeo5fHqir5tu785tgoDB83Bi2Lv717Mcx49USQoUyPwTiE1oGt49HR5M",
  "key27": "3Hz4qrFRQFWPNLcHxqqVXmCd4dGqNs9zcaFRifm21FwTngeebnCUHgUMeC6h8uYzHBPHh6uKdBWZZiMQr64dbCxf",
  "key28": "4PFvcR2eH3pC7BpUwpYYcZ5jSusb9JWmEkLZBi9PbFXXgwaqDvzjCFBD8PTHbp2EwB38iqU2XRvERhgPejnDV9ci",
  "key29": "5G17JfkqDHQysLqiafH3wS1T75DZLUwuBGAyLgnQKPkne4A6P8YYEvUPQMEb3QdJE9ZRwZJsWmKZ4hJyzkWGyQss"
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
