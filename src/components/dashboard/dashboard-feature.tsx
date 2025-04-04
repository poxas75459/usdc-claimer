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
    "4NvvVLyYcuVgezbuTB7gxCAGVH7SVn6oiCVDw5C6f4Pcmq1kCatHaNg4qTgpH1vMfH75b8Jvy5pimWPuTdWfGuds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ty54RvpKpm3casMxEi4RVnM4oVrWWtzB4GuAezgt7EtgKEBnH7xGDD2FjCSEpcHTq2MgijtJorAKL942oKDpCvt",
  "key1": "4SL52YdqyHtuVrhY2Umfk6StEmgaofFD5E8VmYj5LbARs4p479DnxMC7sVXqkgKLcBDvvFH9SyfZ2z8DuiaW3BvS",
  "key2": "HjKVguodGYDrwxaPRXKpZtdm1HMUENDCxuwc6tzbdqhayzUX22XJ2egxfcDiRFAj25b7Jf7CCUe1DtviV5yTjFh",
  "key3": "VyLqV1EYmqdqnfZMegnLQmGhSTrQqHvJt5eTF2CqKvVb9iCFNdCyAwvNRwU4T6KPRLtEB1fmd6Fkc1GfDeeSeg8",
  "key4": "22Hcj5HinA4t8pzkDg8cXMFGAht3wYj9AtjWWHZafMRaxcn24pFs589aaRba3gtVL14Rf4NZG3ouaYJD4qocxWvw",
  "key5": "5jHEG2kiCnjLvXVggZPhYkMvByUiGhX1dPFHfrCiSrd8kNDNy9EFUwqoAPuTMLyW5v97EAqf86me11B24a8xa8fd",
  "key6": "3i2DwjtYM7XHKPNKTNcjcYv7roDskngaJneJWHDFvphvSxhVbNwjuVT61hzw1BJzrRPLsn8vkjpnVoavKTbu2yYs",
  "key7": "2qBu9HCGGk1P8s36asVvMD5E4vPxNWayfAJYNPZWwLUqy8oJt9fnXcr8J5yXGSv9WNQCrrPEnkqU7iZsCB2vUo4n",
  "key8": "7Yu35JwRf1qbY7ugeWVEvALzEaDdWkepk4WvM6GeKSkba5qAj3BtdGLsXqVy1sAo8JSTXJLZfPrKRhE2hguSYq6",
  "key9": "5EjvSY76f5suL2gB4eqt6WoCFSFN1gznbHb513cRAKSD77wufAQjGAeztks4LnaEuWQGTZENqn25ocv7u6iK45EE",
  "key10": "53pQ6WdSyYo81R9275vbVchsVtzrRLpmSfjxrZDYfSSy8uHVUmk7LB7fmZ9Y9cEahZzczG6BvGSoyXnjYZrDpKJB",
  "key11": "4GSNgkxDFh7HXGTHDSsfZFwqpK3PohxbYM6zdvnbHBnJerqUPXK91eScXYMJsDSsWNXrCARzEFf9qokmZXfiZ7Wj",
  "key12": "2eboWSAnL5iei7HQ15poX22Jt3wAM6yUsqs69QCQh1VTEhUPqzPrLhkHQxD4ChfKbUtaKGafdwBxu7zvwrJtP9ji",
  "key13": "n9yWvXetNZNuhkbSzUgHuqBwFZhPGuH6s8Mm5AAcKRA6AD2b74ZD3At3g1b68gmArrgkFtNxjLThJ4Toe8ufBJm",
  "key14": "2wLrF7dif4WfpeJEjM3TPJo62UapSAk3rAPFXTQWJMvacEHWPu1hasD5W2QtmSnAZHVuWBJa7KunewRG9zHvwocn",
  "key15": "15KGaJE2ryrhaxtz7hPUg59ApJF6E7EBZM1EodzAA5URCAqLSFFE3kMz6KEhMYV8nzHQM7GhG4dktMw19j6E1uU",
  "key16": "4c8yqrauYEq2EQMjGndRqjTJSEWBUuXjvg6FoAouJ9fu1c4ouSK2D6LjqJhCj3kpNMkXtrQQgWBDUYeaN19Jn1o6",
  "key17": "32cEmR2oQKUPb9ru4SjKKfhiZEiezVv6tz5FuZP2JuHRSpMkcG8KSC9aWcoPEFgbY7UzoxPDpkspoBrrBdZqaVaT",
  "key18": "2r71CgkDWoxAGLrxWTMuxoPCAXiXfQPnURdyQdQDiVWzY1mXT4Pm4R1Uc23tDUAka27A7AEnC3CfmkuvwabEBapd",
  "key19": "8ZipAjPhqN7VbGeY91Go2ov1H5LsXL2LDL4DfqXqHYFHwdfeQZP55AYiuXakGJKcee22jg9a4CobTZbY5hErP9i",
  "key20": "UAVcvFVNt32m6QnEHhRUpg9i9Zq5H1ranRSHBpgkm7x7rgVC7BY6DcBcNpRPu4wbdUpR8jzBRYF6oybctymXi1N",
  "key21": "4FN5MGnVnUmiwfQLvhspvFipSix6GdMvwJuAPjm1QiqHRxyKrj2yUpYnZPkdeKuZZDSEKwNwvLvTmsFShBhk9jto",
  "key22": "M8ztW9NTa8EPgKqvaZi2uSFh2Jq4ew7bGbmtCLL1YKrsy4eSpnrH4NrrYZPFQMiFDxmdfpmKzsFh2yQhUuTD2vc",
  "key23": "4vJbFo3b7e69LREWcVyhKwk4MzHufGmVAu6xMRkMkuvQyxaH9wDRA8CKiyZnfcyDh9XBAWBXXNsAfPZQrja77Fi3",
  "key24": "4Z6PvYX6DeNqSdTVD1FqcswrT8nAskR6CS7cwoeMAUaKFj5gP4zxknnBnLMWSLnEqVqCLAgASh2E6eQeRo44FZ7J",
  "key25": "z74kJ5TsRsjuNTjKHto1iZJfteDVTpqH9ZcB9z5m5gCoGxpogk6Fe2qe8K9ZfCwd8MB6mJKC97Zni9LTFCjDKZY",
  "key26": "2Ctg8gptA5TTHSHruGENeMPaiLxdYkjBNDTESLh3pxyncnk8XkjapXRcdhfzJfnMdGWznGWPmtYV8zoFyxE9cVH4",
  "key27": "o3kvEyG2PKppxP6ogJ6Y6Ch7xQ1wgrBczEgFEC7czKJtjerzeEvEf2eC8EnaovEw1Ada5qreYMivkqUPQq2VHSS",
  "key28": "5fwkUSBaReCJi5YUSe7Nt1CXeiQGwVeDZuc6QpVQ9bmEpzyifbXwoNcQWEvJtiibCDgLDyUGsXXcVuKBRxZ3qCio",
  "key29": "5nJufxYz5YRW8N8ZCNUYXhjGFHjPxBGFCoo9qxyNc9JjGpepMWt73qCrKg4xDNLLBD7ijMSpum7paKTvJWvziV6u",
  "key30": "3YQ18CsB5XBmKyk5bx5VG3NhCgnpzDdvmJeWZwMbGiQm6RqdP8BurZQNk312dh7TpGzv5PQaAN3xc8AER11X3mob",
  "key31": "3uRcqXEJxt8rKjPthcFTJf8szLwS51axrMPUuHWxGhK7WNoAsPnrqtdvw1fRbBGGB5Ls6jdzEmphmjX5phZ6pdxo",
  "key32": "2rcAXG16S3vtw8jpbFVNs8CgkooJvWgB9zomNqzcgW8YXEscn2hgm5BhEhuMcWpZUkDADUyjvx8rrGK2n98Xa64d",
  "key33": "5jpjcA2Dg4uw5N719F3vDuAGtCyn5T1f6ikBqMEmwZqKCBK6kTdwTvTKXU5N4wpMcJfvZuNNa4cBabZdP1dh5bMp",
  "key34": "4Z9myVMNqLJ4uhmprKETU7gXTjZhHBpu38kFSoANc8dQriymdWamGGLJYPMcQV1bHk9rRPH3TpfUkyrBvJmubJau",
  "key35": "4LMY7wy3RtH4dmXQQrQE6TMqmT5x4DxvBc6e2kqg7X7qhxuyiqCry8ib1N6L3DPyxGrwzyzTr27MDfiBFDRLr62A"
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
