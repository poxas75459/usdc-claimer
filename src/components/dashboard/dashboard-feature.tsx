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
    "31bCniMmyjZyBZQyQ4cQyUuoJ6Th48qK9L4kyeWDa22TSQPDbknk22zMGg1a7RxVpRyLpioU2PnBZxYPpqrUDKMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7XXPrFdHEPbmeH7ZzDjKwCPVU7CiPwcW2hWsrJXLQGNSHQfmpssPG2LQM5X9mEDjzwaTrAUXPoRkypzF8ozMsG",
  "key1": "5v8HJdVayqEZ4Xb3QU5GmFYQrn4YoR66ssepfg4py16iejjo4LsWrT5cgZmBxFGLWFHNztQRvzewje96h8z5ErdU",
  "key2": "2eT3pXNkcnP1yRSQW6yt6z8WJ8vZMwHw9UFVhe4mwSjAnN2JX5Pb6AFs6YoE8b9Kth3gzwNgCAVhud4XDjKiZg2C",
  "key3": "5356YmbCQN8Sk2ddC6tbgZMG29CGGQS1vCGv6HW5Nhm85CSocSxDGbTjPZzekpr125CiaZvHP27NtxEvYSdWBG8H",
  "key4": "4XJwGZmWDiiVBDFbXUXHL8597LoiYonHPb5n8QjocNgTBDHAoKBt94f7c8yWxAE9zJcddGmzEaRKgDqBuSUr7k9K",
  "key5": "4a8WRtgTdhzgyfUPw1yYxf1JebSwWGXLBtTi1vRgavSt7uuzpD5BpCfQ3NCWtUUHYd9GqfNB8QrkDCw8qsYACZW3",
  "key6": "5NvCqu8JoVM76Gn8paqwnGBkL1shucS7PvKQ4soJZ7j1stzhZUqVyKVFw62vuftUKTNqryYu8Hiut9z1LZzqJPd9",
  "key7": "615HW34KckD2rvUez1K8sTpqbvzoo9sTDQqAKWjqXvg5tbQ9Lo1bFHedhfFf9iwyjatKjtmswPr6rEdT9r2UbWCC",
  "key8": "5gJAH8AXrvm4huDQ94GwGmgRHsr5RQwbSStQsx11cTCjz66jCjiVPQ3QapQ86XxXTrqDZMQB5DM3F1398uYecaPC",
  "key9": "28UJqva64LdJukSUWSMzU4dn9kr7gSjnRwypkDczEFa7GXd5QkVSzNHRT8CGf2NmR89nRZ4nhWMN6ngLADnyYyLF",
  "key10": "c3v1ADVjRbCLpZgfaFLsM5QBJuzsKjQZdTNJuWduJZQhNXfR6skLAJXfTMosiV9pDgr3B9rmvvcyibqQCKfvpFn",
  "key11": "ZPP6cQVXKYArEKNe7CniV6a8LMNF5vb3CS5svAVg8BxmZXzUvEveARM7aeurKNTpSfYT4jYHaD4yU7waz9SpND9",
  "key12": "3VQJmpgFTmENxQMJMj8y2UTq6nj2GT52TVcy1ZQgzwoZVirD4wPaHdgoZ6tJr6fYg2tS4mUMhwhMmcuYvGt6tarM",
  "key13": "58rwuZMDYcf1aRhcLNXJVMuJ1vQbbpDbuRnqdYjyufNkrY4qMidn5BTrUMyjWgFks8yhNgChnqdpXeVwQf4EFN6C",
  "key14": "4zht7j7LBowQeoCkHqFZfY6XfmZMCzi9ohHAtWxb7u6qFKpFj9w5CjGYxS8FRF5aY8B2w9JNv88Ct4rqzjz61Gx7",
  "key15": "4rWkrC9MfQzzsJmAd2VQxVJDSc6mzajccMQjZPgPfTJC97urBFbTdcWazA4frdApt7v8wDMg3vWLogFvhdNCmMJu",
  "key16": "3g1gtNXi8J5nMUxDGQnxs2BgbnJSqagRPWXpEGx4oMXLfidSdcp2kE5Y1UZJoXjXAaCV4m7jXYB5gQ381NgBoXP9",
  "key17": "5Kqihc8QftUuF5oyQTf5hwZ7bm8XFxam4S7CyUMujVjFXWq2V5r3zEpzspyGeHCMho8vfnJQiik4XfoCbGUQ4gFZ",
  "key18": "2nSEaD6ERXiQT24s1gKRorjd4iscNDmZAGtAcwFBL3MeBmGaPXMEWtyZ6W5cnZ9Z2Jo5XTxY5oGHLUDtBhNYCHFs",
  "key19": "4qb7c7f3uAZGVYQN8zWZuYLWD9sDXfLtC4so29iyrPYmyiTz3oFSTMZsHEEvorhWbj7gs5C81uW9Q6CyJhkFnhMB",
  "key20": "2qLEwQWJEuEqkVAGrhdmzRjBDfuoMxUiud9NgGDkv163wViY2G6iX9FZRrwaf43btQ7poj3yG8MRFXekWoGorMh7",
  "key21": "3T3zwgVd1azVGk9WwmMHJGFVCY1mQHH97nW6U9KL2fsZMLfNyVZRc1WSZuZHEDoTUUZiyEaUr7vCZK6w7LJyKJ6r",
  "key22": "o7AknN9g8Aw8egMzXEaAoXfjZxEVeU7xYRQALrMr2PcHm4B4aLNT4yqLhakgrwBAsS6Wm8aVgTwFGb3bwKytuUN",
  "key23": "26UT4B29Ycq4wNvs4tT85DsYAZN1VhkJCBcb6K18wGi7oBsXsTaxa2tYL5LXmZ5KfXMZUqZ24tmtzADrjFiKd8u3",
  "key24": "4EcRmUAwsqQ66oDakTkvnnMny5T7Ew8voRC74ToS1g9sKy1RrJCUaKXiPAz9ZBTLXeNNbHCQCKdQk8ddbx8WtpGz",
  "key25": "63RjJifLFyQykromQijdZ7MAmyGykC4bu6ewmvfaUWJK5ZGmqkaKVAw4X4v4EqeNDkXwx9wFSFhm6Hqk8WBtMmjQ",
  "key26": "5ibmdayvpHeJCTL6MKW9kRF3W6cXVVw46q5UEWpwrM8RpMDEPxhphJkF9xeM26MESLJKPSG6Y5DzL4hQXwbEmGaU",
  "key27": "5FHFC9jkkMfMLYTpB9gEa5cg1eKZDEpSrm7eHgBriHCcy1vhwt9ysSVFk53xGTr4aL1z4g3GVRJf61UfCvWhSf7p",
  "key28": "2QEnhnQvb1wwUq3yxFxnDaxRqvwPeY58Jubkd62Km1inw9smE1kZYaV1YpTp2R77Kw3gZyp3T5pL2GxCRYW9x2pU",
  "key29": "4N6BUUjczuv1SVPRbxG7hp4HtjsNkbqLQp9r2krUwja4tDjJDqvmsQBkV8zbopHtaXfN1rABjg38GjuzQFnzF7LT",
  "key30": "3ukpx4YGJnNCpPWdA1BBnEnDXoqFgZfCXVpsvcCBdFCo74HBd2o7yU9j4LdFSMrG7H79U5gKBBd2k2ujgtf8i8Hh",
  "key31": "2fDDhsdN7GzKiPg7gPrYnVkuSMyAuBD6RKyRjDr4BC9H7CbrJMFLY4MHYyRmA9yWxFx6Bs4rEmWsGAkv1f5H6viZ",
  "key32": "3rMFFAskrQzcsFi6WYjTMU6vA4DpjhZPmjA9XdhmcThRxze5muydz9i4qZhQBaihH6tWTmDRVBBaHxChCxzaciMJ",
  "key33": "3BdELc4CuvdqLVgQZJKa8KMH2NxmLwtdrPenghsny94E75KarmFJ1nSrANQxTCPFTcrbUuDXiLe68MsFdrzjqfbM",
  "key34": "2tjUi3xRDse8YZ9iphHiZazDXvKu8bZBnaKL5q5tg9Uy2smzAf2xXgWRuE7sdVTQi1jW8vwphheYZmbWBuhZd2C3",
  "key35": "43n7A2zXB28Ta15tEZxgkmBGMPgSBRg1eX4JcJCNYByGS1tRQWQ9bJMMiUrk5qN6diyK2WLBP47RCwJ8DYkrGrC1",
  "key36": "5d4x1zRsAbkuUjU96Zi5GNtqqFZcCL88buTCWzdTATuxob1hokgtwyeH9USJmKn6qKnAkmCHEaHRaWyngfd1uFar",
  "key37": "jYEroRP9M9w3EjQj3jVTE7Nz2zm9tHiTHSG4Gz9zcVogDKLtKD8MvfBHyjQ7YJejW6sQAhCokmW4SQpabVSe6Np"
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
