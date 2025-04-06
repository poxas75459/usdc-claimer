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
    "5n4Y5hU3HA1YwosA97wEEZ2cL3Zn8jA2S51ovnhdrUKvtFJZHaRQLz5uFS7Sj4SVdJckzquNuNh5nBwhx2ZV7mkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J6XCdFitVS9BomLj4RA8tAH2QaV86haKSKGZKYaaWaVTHq9STNyecW576fMRBgNgbQV2TXJx5qU6D1t3i9difwG",
  "key1": "4iw1ZgBrB1fBhdxbaG93xhdi8iemh8vFicwVZgGuRWkWgbE1vdN7kie7cDxFJABrJ4xrbADXnrFJgQATtBPubPoE",
  "key2": "ygx9NtMCaeoSSGzKY39PJu23hB1aBNfnh9sujmayemUUCeFH96HJVmYKYw57JJNXSi6YxnLrPz6Qq6TSNQk921T",
  "key3": "jeMs1AkiFF7NR49XVo2FJVcXyUM7BqYYUMgXzWzJy2zfsNjGPFejEj8A963AX4s5ZKXh5YwGHYP9QC3r2q4BXLc",
  "key4": "5JA4xE6BERAvD3wwLMsXMiDHXSr5KNzoes7o5KkVvstBViqNpgEz4xQuCzAyZ1VcCAvG673pmg7ECwJLxWdmzHcL",
  "key5": "5HSJ9vMkFdroFQZK3eurKWTpSCLCrHvAMHMV6QNVwD7atKCFjVCLSuicnu4Q6XJuKLoRhSQXs8Fk8L2rJrEcmRur",
  "key6": "2RXvMz25t8KKAWdRu7NUxLU1dcNyk94Z2w5PFafijwRXevjpZSfKXffZGbq57sXQLycBkwxwTFSk3oj5Ssfk18Wt",
  "key7": "3hZsrVjy1nWaJewZBRvhBBqJv8naWFnn5YybbopmenG84aHiK3Lvzg1xbfFfCmPbfvp5c9KMnLcRXSLujxDuyKf4",
  "key8": "4TyHz8rwH8YXAu8pZkwUqPRk4NMzSASdJ6GtuTSsMpr95XdzANvbNK2jdtYLGxVfrceWghk7JcqbSBBQjm3djuid",
  "key9": "MyukoB8gFd1x13ncZ3CiNxh3G6GNFRvUWoiZGazsUSX3WTbL6Ff7bhNG72Vujs1JLqSj71KXxS7EA4p8cVFzRRr",
  "key10": "eSMT8vFaDBT1Pmu5MAhatswvWHWMSmiWtk6JmghN4LMB8ZJhXfqaEVyupZejTdVSxDoHuFPNyN87GZwn4jjMBtV",
  "key11": "2Z1wLqQjH9v7rxWMYkTdEqKzopXs1Jh4gmzKL9EagFKw6Hk8vN67v8wDEDbwtnLhEfA6bW4Q2Hog7QSgQrwXfHud",
  "key12": "2iFwtzX2G1fAfYXzuXTW7cBxJSXT5qCa13P8128feEkUmPNpWZZazQJrtbeMg3AqWjUQcj6aq6RMNKtLQyH1m5UC",
  "key13": "szidLseV11dXLNLNqcRMUQHMJ5Lm89ECButDqDdvLRQcbTWYaFq1zWprN2GjUiaBs8MTCQ7nykoQ9XPJ1MvRfLp",
  "key14": "4C4vK5AyQhjtcJZa835Uexi1FibUjRT6RtV5D3u2F5iA1RYwbG79kB4eRm6fKZyQWJnmx2cEFAi5WyCWSeqr2TUV",
  "key15": "2qvUVANAnvcb3PVy1CoJef9Pcc6JfH5L8ZMsdEuAUw2nD1EMS1DhX4FEW3rxo6ehJB2ymgawHxQgjzXxo1U75Km5",
  "key16": "3SHVEpF97Fp2kYd83aaiFyj61U7uAMQECdjB2QNxQT5vdS4BJCgYM5bjkMLZfoPFjhcZu4DR8qwhZTbzpWJcVEXn",
  "key17": "3pbaqiMmycR6Gnftw3j1UY3Lk3dC7cyvukXxYTbU8MM9ag6JQUt72mMFQ3JdTmC7EeeNeU4iLXyQcbZdNp4M2nJJ",
  "key18": "2tv3wR71DFLAvtmXutG8V6nJS7HrA9gEyuNNvXU3QSjczMwDBe9jCJprEfSSuK1jmHP1Ei6MW1hdzCYHYnEx4SJF",
  "key19": "5Rzfo7MBvHZi6mi74wVLNEMALXqwbhi9m51AR6t7BgtiY3kqwhJZGvA8jKzYDk98t6ip3ZXkJVwFH7iR2bUsK3Tf",
  "key20": "2iNQdgAz5jbyTk5o31CTHsNBbXbCWxTkHdfmZUvWYCufrhDmDFn8Bk1MnhHKZcdCeYi5vDCnZqBGG3AFRvqNNY1j",
  "key21": "2FKnaEPoot5Vw4Z7kgo9feRaH2RcF89RDo3eczNMujzMGhnVwP17efC5LZt1uJjQW9ACrgGYyDgXVKQCHQCE4r9z",
  "key22": "3Uq6auqXsasXD4CNzxj9g68D93bZpD5Z4YKPV75QESC5HXMXEAWscvqeSXCSuaEDsm4wG79X736mPb6H5R8WkowP",
  "key23": "4fNhw53YJjjjqxax9ywx4nCUthouTkcFkFWQSyvJzKtCu5abidK3whnTWJXWvjZD8n39s1NcmAtfiqNRikYS2jqv",
  "key24": "41f12s2s5Q6ketC3BnLkDohGLkN2yCUQGwfiQXDxHXRzVLLAoFjVmuPrXbmQcrGmt386co8wkVJfJj1wT9fQnv34",
  "key25": "2VA5Tjuw3b8bC3GPtq3G3zJpshCcQN1nUY2z1TmthqZ7rjsGdK99HDKFyr7w8WfwRFzqBe19tXifBidScAsfym3T",
  "key26": "4QvPBiuVchiu9zsiKRhKgHVCDKs2VH1g7xsgeVDMMMN1NHVzAVNW42VUqKPouuvwTC4RsX3pYb6LJ4unPEDA9ur6",
  "key27": "2koeHqct7dXYNYajd38w4AKB8FSERLdVtDb5yVaySMuhi6eT2oGvtaud4kuzitDo7XEsaRjL1p9U2TStuxvt9R2K",
  "key28": "4YxEWgShv6AqLQWfW6kTu5uhd8VnzxVLF7GYqEQgvKBh7uCZgy1WV2BKtLdVCVXqji4EtJPbTVsBgTzWYfM7MG4E",
  "key29": "2bo5VXPJ4b1LKEnVESjNzGUBRyZbf9fM8LwttvuDtqw54ANMygszjon6cfrPNP46VjT5DRwnNPf1emCMTX2Gs2tv",
  "key30": "2RfcMzZCf9tsC69KmN3aCVx27vqcDcpAbfgGaWsUuYmv7yxx5tmDdH2SrRp4NPKe5jNrBkW253uxzLq67fmauWQ",
  "key31": "2EKoD13oBsBvLq7dV5F7nUTYbKVS2wG4P2nE9NxZe3EA5sCgnsr6XcWe4E6tQxpJPVrsBk28kSa2dC2ZDkCbUeZR"
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
