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
    "3fsyuYgnXx3uBH1iKwZgp5LVEwzBWF2kEQigeSgU6TxKejnYWZeBtQqQd536mdFLCUJRTkWJv8fmybZeBUCtiKqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gHzAjEitA7EYEBshAXVYJ774L99D5jZFhnVNCHb73cSpbzL2VjYAy4jmQKPg6qNQR3qmkXr85tqe4hZd7X4Xa6Z",
  "key1": "4RUZpED6kfZyqfreZAgcccZCrSX5EbABXq2Drmdxe4Yzxe9N9Jp13CpjMyruLYugghF8aSqoPWiGrTqzUgDUYQQ8",
  "key2": "qGBwmnKHvGsaYqJZC7tMaE4rx7qVTSuAGejkH6f5N2f94Su6cgE8aeBDmxfHwesCDo5Gf8ZD8EDQfkiEB26wShV",
  "key3": "4ddGyawAaYuejXavAgh44eongeP574Lob9V5dZ7aEgyi5WkseEvnQW1H5SVa5rNon63ojg5K2ssYKt53H8QoMm66",
  "key4": "61uZaKdZJwZAWqk4cgNoFUD5cXEdE6zKnmbiLvD68L6Biy36cUtsPd1dLzGnwb6s6aMG2d3xMLNPA5egrmpRpTgZ",
  "key5": "4X7vaCnWTbPVcLrieqZNQZZ4tPxjBVxhLTzrVtQJYiZKTt9KxuN9fN9q97pgsu7gLYbrFzB8oXipBvQXr3qFwpAB",
  "key6": "45Xb4KjNUpW4mLMQdQKW3b5FUNvAZ19vZ6PVeRUtuMHthNYjRLZPEtKnatcBicWYJyWxr6d6wjpxaJ4XKEMQmikV",
  "key7": "1LHcUjPnpmHUsidrniTge4gL2iJrrqE3sujg1u6Qn7REJuKyokkNCkpdT7iQDPa8NpzYvDEayKWtaX97hYCaYJ4",
  "key8": "4WAXtXWb8UDUjTKKTttR6yWHXKqSFXcmBVNxkZ8jTHB9KyMeD9qci83Qz1pPaD2XKziLZpdfgJRMYDwGUaM8rY4n",
  "key9": "4Cowf6Yq13efHqrvbQgDTWsXUm3WqcB5uuYJWksN23Y33UaDs6u2vMe6u1r9S9SstCTDyf1BibhMCdvyNva1ikGH",
  "key10": "5F72TqCXoaQBfae4xVAe7kB8qfCkPfUbzVsTzS3K6bD8SDaE5pQqWk9hDANsZsZLcQ3iv5DxyhxExxonr5iGMGJZ",
  "key11": "62P2rsh45WsJHLtpAhxLTgtUFRTaSftYPFDoYjzjW5fXt7CQngT8HMHHrdihiBBBcKKfv5fGTBaeuc1vYVUTZ69R",
  "key12": "dXWBCtLyQcUYNPbZPgTqkGRirCvFpQfyJFnzzqNphQeQUpwZoG6x6i6RnbWrUAe9MCYd1swM4qU1YLgRmhfVqt7",
  "key13": "3qgqAMC27UWPH9JUjUpTksSnC6U7Lu4Wjqs7ktHbtCrdx869MdHs5YBykWzXQh1oBcZ4fRmsJJd28Zjt4R7mwhf5",
  "key14": "49MsGM5Ac2Fwq8715voUPe4iptHCvq1ZnsiDoxjNZ8Bs7N62sexrm5XcVW7SZYjZZLJ9PnrVsvzGQR36ts7CJXCf",
  "key15": "2ZV5ugsghgkeVrfnXg3XqHpRVJgJsgfmZRwDgLe8eFEJyqUkTk1CxrSQYvM4rjJRGXE3phnNiiFv8nPnTRwUXYr7",
  "key16": "4CdK4X8z1pq4vbm8xYWordCUM8dGjwduaaFWvjFtTgSoZtUeHenNmTTiShSQ9JZEnZs3C3e3c58iUHQcgD5WHTe3",
  "key17": "3pxyxASNd1m21qYtobJ6vCVCxQ54oMExgrNzSrQ77wV9eSvF5V8TN72MEiavStjocGrLqEvuxmuokgdozPiSwkre",
  "key18": "58e7A1DLRE3ckNgG7XzfSsrfZGFhT3QBkCwGwFdJGp3WQ46NKC8WZUgPDzzabGsBe5THF9toL1UHBV6uYJuK7Ecn",
  "key19": "2ds8yDZCnKbCkTrbAwz9BSgGEnTG8MLrbjkbbjfaH7j9R6kV6Cs2F9PmMTFW1YvxnpD8irjVv2VsFjt7frk7ECDs",
  "key20": "3xoBn8u3nYHo9KMQSRJH5v8QAVAixDG5ADoDrUBU6zzH23Hj2ooozCk4izuJWgzGVYiivVJaxEye3VnJsM2F6hqg",
  "key21": "3LguA6h5RQp5wnW8HMd4AmTddDTeQY4924gkAPXZ7pxr5f7XzxNjXYEzXaqdySbCSvFbiAi2pcp1yAbKDDEgV6mV",
  "key22": "2eBiQ2FwLhH9DPP3qadLYAWVP44dnqNFXHxHemw7LayBY1bqENzctwdFbHVezSzPUT9CuVecW7EnvwdB254S1H2y",
  "key23": "5vpiuV389oyEqUh7reAU2oHAgTEFreJsC9KGzAKSBjFcvbgJfaHfcPc7TdrVNUMv3fPCT9vBR9RDooX1bx7Ysz7W",
  "key24": "2wXkxZBcppk4M4Kuks5aYSNKJGHLg6eRrsXLTFWja76r5sn8svsTDNfA3pExSKZUyQiwVBPnuGckrda4Zd8YHkyT",
  "key25": "34y6jWZciBG5ac2QfZRjox9SK2ZZfC5y51FmkkKrtAnjaMjjYDRamZuXs2QYrjkikJN5GYR2txhe4cxdnSGLRBnG",
  "key26": "457PJ9G6AUa1ESFqyGu565G37vdJUNjgaY2veiu7T1GRGsRMVoGhFedywbk6cQ7FNyFsSJaYi39jnHZGMf1GEp2E",
  "key27": "2sFs6iV1Ub6pfewTY4pWfr3PmZUhB26QPxFw9zSo9kQDGxzhC6yAKWtGxpbNFTD9XjDxxrzSF3BXvr8Hh88oHQvD",
  "key28": "3MiuC8NwMvgeKGoTkyE3py6tzigmijgzDYFwmVtLH869fLd1xmchy9CFZVipTHUp5h6Dd3L63Z2tTgziD5gfJ2FL",
  "key29": "2ZYcwcowFWEayeGN6ZkcJfBhz4n3wnGPYQe3fbS6LA86u8acB9F35PR5oYBYjpAdnv7WBFGZhnGtVSMBXXgDmdCV",
  "key30": "5JSJ5mMDqa3Z7EKGWX8xBwE7kubCJbGtaJfaWywB67pkXCwcuGmTL5dFpPmEk24YqQL5o1D9ntGj3Fx56NunUPF6"
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
