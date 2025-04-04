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
    "55VS6VGuZpi6cNxFA1SXP54yZddMfpiHCXqAz2g9umwYT8sDMRJPN61sQF2Nx2457yyJRqzmziogMfDCGc3t5PoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39PuNQUxdLx5PtpZHXs8zacsCtkkvqrtzr9YN8yh1sSvK6bPLWSDhymBXHyDTfTWAcayW1zBCdZdpdf4kXFGVwmJ",
  "key1": "macWTAJD1LdADYnjXK173HxMA1fEEJz2a4PU3qPKhgCK17xHrbPFD9Kzw7RA5c5YsowkMkNZWJqCDu9v2dD5qga",
  "key2": "37vr5GSFNPMdubxinzW8tdBowWCsXB8e9pHPwuS7F7ZrZNt4HTPoaYxBTqehAy5zdiyJyCgba8hzrZWf5HUrW5Y1",
  "key3": "4gZ1R7u94cXyg99JE1hvxuzE1X3zxdkDPjhEBnYve19FehjSuDgZbgBPbDrU6eZ9hniJz9xWhx3SGzBkMp6RF8ft",
  "key4": "5aj1Ukew93ZqykJP27PhucMcfqHXXv9cwpkc9eDqXcJapiJZ7dUHY4mGqpeS9p6J1ZmYz8GvybFZ5nLypX3Yxihj",
  "key5": "5JJHVnq7sU1Kw1xcFwE2oZPQs15k6RuSkPiXC7PZaVAkEJsaBYraqihd7EpMHUfeAU3ocmdQ8JEX9fnpC7BBXoEZ",
  "key6": "4oSi345B6nte89hU96SE5WQdt5jBBfjJLjcctYwer4gN3KuNQo81UuQZ8EKcFUdnMDCTCkShnS3EDuSXzacFk1tr",
  "key7": "3ohDVi9kLCarnx2BN1Efcx8sgesrhXzi8WSzkZ7rzX1bVcxoFw7pvennysxi7DrpVfep9uj64txwFm4hJHMEKwzj",
  "key8": "mNS9KRrvQhZtYmNzvcNGC8gQsNiNHmArXiFUHDsM6KbYFsJTNrqKK5NKPe5PEcKvT23WBjtv91BmXomya4Mx3xX",
  "key9": "524mChGLNenSxuMVUpcYJfwPRWX3FVaUodV17rUbbgfhgaCPwT4WzFfLkGGksr8WBQgjmQHjEB9mGy56zgtGzuCp",
  "key10": "zxJA7dYfUn5jBah3yWriTCbjLzr94SVP9f5eufDLiedtXHTBfjgCQnwyFg52yUzuejunFtGK5y2MnmAnyJtpGUF",
  "key11": "GmAnvf4t3xwWqtStUekK4TQCes42mdKMSemcts51ndzrmTKh38LQPYtfJLoj5QcBfCCftm6r4aEVtDzJ8EQ2LSP",
  "key12": "3Q1WU2ejapRaSEE7tY7DM6RZ8GgohLxgLG3wjqJj2tdXdAsjLs7CgGSmqPPkMWURDQ83bdtz2PYuZuabPTUX4QnE",
  "key13": "1jN9ZgcdoRB42EC67mAHM14Rz5e6uwud1uVVVyS9RtjmTYgWAjDPffXxQgagDPem1PhPgoYLHEhW3MxtsD7o9Sz",
  "key14": "cRVFjbvAeiSBXzmMUzBpvwxvQjJqbCeQ5mNEqpVe8hRZAZNAdrG7Rn94j4pX3Dujoq2HmNPBMyZhxMWpQPojtcr",
  "key15": "2kCEfp8v3WdEkJxgeXiVDThZZFDLFqDBtVGA63otLB5w6mjTRTjiFShs5YPuwVB2CggrwMVvxavS7yz8kMunsp4G",
  "key16": "23nCDXx8upmx1ZR9XJmdRpTboFUhhosFq7wKdRcWqMkkYy8MCGCbCk5v6teBEuhZxoQUoCoiiSUgU5pLXidc62Pu",
  "key17": "nk42H3dgXbFcAo43PkvbTb5D3MZ7gMJR2ddFUSUDzhiWZ6FkT4dzeqvQXeA5oQEqQUVFAv8i9cKvZ5BSJfLZA5u",
  "key18": "3F2zaUUkVQMEGtCvCiwHaQPf9t3DKdqmL87dEgLef7nrvMw8X9pEnEvbanBnpG3oaBvybjoSY4nvijTbEJD2w1mY",
  "key19": "3TmxfXHKKMu8RSMfPovoJtCKd17HHhB1ABBsAGDdmFwaKoZfahzW99Q3AD5DUUxjxQhwG7EFf1dbkX1inK9UFeCQ",
  "key20": "5BKovLJkmr4gGrRXwfRvqLwtyizTVapzKS9U1ePZfW4bmTkBEXBQJRoAQ5nTrZZCqXGdc9jfSFJc7LohaJ2eXEcD",
  "key21": "52uagTd49fmFC4ym2wH4eYQTbtvT4B2jNgNvwBfnQGp4AULz6msqGKZXxq1WAmAPiZjdbsJDrVEgTPu7iadAs98s",
  "key22": "4rcrKcAHBEDqAEVaUzURMBWmoqycP5FDt9qpKkopjURsWy1nY3zQFhY98T5x6BockXvD3gWkeUxCqwX9SGfkumRR",
  "key23": "3PsCi8iUrpMmzL3pLZrkPupRqKsdgC351NUFze6DPTiN3oR3m8BDDF13cSTzBxR5nPEpqvHx2HtixwpXwGK5fMwY",
  "key24": "5Q6AR1HGE6aZUNRfHShNAerMwZM4FDTvuehaqJD5hUJC9LEaGTPMsjPACMr4XdPFxrXirJiYaZEvwDVrVSVqYsCG",
  "key25": "37aHjjFVB5EKEcNJN8tVJoVVYc8k2yQYraoBPzjU95CKhRrvceidKCzbgVrdFt6Kp2zAJNPC8mUU2AZbk2vWwWQb",
  "key26": "k7n1xhRUKyTZfqxE4R74RPEBjMBmUnkXAuGuWih4dFG6mHqxKhAn6BcqtThBaYpkXpALALyG1WUqL6WZ4CN4kyi",
  "key27": "5QnXwHQYtA3oDhDemoqRw2YEnNwDHHQUKZE6KxAFcbTS5HjXfTw7GQapLf62ewP9iEHwwAwH9rG4vFxyPtSdQCKw",
  "key28": "3QC6Jfq7JnM6pcej2GT3u3YHwF1tHG536MUexqe6Ycc2UEDeYK8T4PFJpuh7wSfMB5CaXQqqWGRs1CnjWgc52LHR",
  "key29": "4bYddgfKWatNqJsJmDNnoAhNa3Aej4Swbq7yYyCT6RjSZLrvVggvFtgPNRs2xPNt1tXU2VXDHuGo5ufdcEdYEj8P",
  "key30": "3B7TVbei3A2ntyiSES3DJuxrbMxiKhLkZkFsMYqT1bfzHdn2zKU9cSscqtGA2FikHuWpDc4mQxCjabe9V9wcRD8r",
  "key31": "2MiwrftKkJWCN3sJwcr5DxMipzjJPN2Gyr6Sw3BuYrXUe6VWhTzNFbfP7bDFf6HgVCPHQWqcFcbQ3dt8yyBdn6n9",
  "key32": "2JUe8AWBHqn97zJanRsKgQ2Dk5aQz9PYsx8sTzLGnn46bTaMBN3xbfiXfaear962sN31BTr5hhTrDWLQmdR8dD3u",
  "key33": "55V9pQq5oZKC8VixioTRT8f6H46tvqawCX1VEA6vSxExe83DcWMRjYipC6Le1CanHnhFHJUmd85V5FqTkcWMtYFy",
  "key34": "4TPgRxLEVzw93bjqkakUNo8TajbdbmJJapzM23CBkghwhDB291BVheFkVbo1h6Ttp8uxCsFkwz917ZSwGBCSRcRq",
  "key35": "3YRKTgEm4sXSNHTnZaetoJ24MRfdRWVdBYUazkX6M2snQSDKnhdZekmniR8aiEcC3oHAqvUxyKjJPEMebgeaR16p",
  "key36": "3QD1tBLCC6ectLpn4fvQsdbLkMuy6Zw1kmadXvXUW2uvknrvyxRUpmV6zviV3ra4tgjnsAbs4tc68MDHRo7KRVFG",
  "key37": "53kMGFNoWUsr7bipQMY4U3fJ7q1syfxgwzPUmMEasB78rLHd1Ug4kVYKbfzHvtU4erpsc5VYFdL4xWonKjAUGqqG",
  "key38": "18BqeUrATFYo6Cp1igbFxcc8GwfMGZ8DsfTvc7Mh4XnCMwD9SGkBL5Xz4udZ7omFTfP1TFLAQTojJ7nqjqcBHVz"
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
