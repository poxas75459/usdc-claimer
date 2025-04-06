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
    "4xSjDULHhCLqNhjUeErcDFPgW8rNZmY2v5SKvR93H2seUj6qXytjmv2uYkvgtp6SccgvD1qGfgMQ4yAKkxGk3BMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XFyB5mizPWQ9MeMc1NiFf3WrLPoz11dP7jrT1nMkSqaZH9ZtLWaidbZXG2fBtvPQbYoniDuDfGV5eqgTwD6jwWf",
  "key1": "dh4AePbMpsSifvVe4YcDBM9WmLw7LrPXLzMuToWNePQNU9udRRk9ictKAKF4Tvarcq1phtrKhoMWAe7jiiU8WwD",
  "key2": "2F5UTZy4F4CfHuwnN21s9JRSFm5FTJBpgkveu6FALbKBrT4Vuy1aLJstxdKELxtm5miuGaDc8croKZEkhsGkeYEf",
  "key3": "2wLDAQa9GdMDkdMUPig1itWyDsM8jJUjYtcqVSE1RUtshNeTns2SPr84xdfWwviTzRxiAUh3B5hG2nXe5x1XHUnY",
  "key4": "3sY5uggMVXcDS8ZpDaCXvvp7c63eECbrjMVCc4dRADdpse1TYYXdadpZy8TnEcXbbDTCFoau88CQmwwQEyrCf739",
  "key5": "3sb2q5QKRkdgRwby5GkV7Pe8z9QgoCrhCb7fkaLVUsWDGSnyH1BbPHySdKk24Bzx3yccPQC3nnWMUx95VAJFvisK",
  "key6": "4vprnSKHHMhDqjVdaf3xUNWP2RoxeznsBuhwFMu8v1dSD3JuLLxgTQp5vnZs1QqFFS1SbSuWoWtjk9k4ReP1kFjf",
  "key7": "5wHASzGynmURqtM2Qi6AzZ5jEU5ysM4YWVaSKiQzCDUBMsHJgZkahL2KpmDXfqKwmnyauHTSGN8WcSw5TR2p61mX",
  "key8": "34qzSqz4aXB9mqsL4KJe3FZYHHHafAfnZeG2JMQVux6zddbt1C9aQQWx92AJtX8yEN2CfY42MBnaeWysiWyME67X",
  "key9": "2J7xSJpJRSTSnv5DnS5TWNH44UvqqXJcUAxkgRisutk6KvK4TRc5g5eYiZfLpktRDHsursrGZu9xvA7gQZU2tNqu",
  "key10": "T8GtCNcjjn91q9xnxHKuwxWL3MZ98jMYEZ6t6LdQQdKkMmwrr3svuaBKwopoksy3YiBE94y3jQuZkEq82a9vg9N",
  "key11": "2YUy8ZU4qxDwUQcZJ99LrWQKgyy6HT94Mv95ca6t5cmX7fEeosXfikJGatpRdyfMfn9jXosArTBUPzXosfzKWG5Z",
  "key12": "3cVk5F4b24HKgfVWkmyPjs2dcVYvqjvENE1ECtNfY5KhR3DVvoE811NcQh1iYfdo4HFb8sEfNBnCHV7KgFJH2TEW",
  "key13": "4jiGz1sv1YbdkHi7bjdvtNpRKRxACr5aoDCXfVhY6Nr2vtJwEGZfhhXDQSFZNEoCNewLEEJuKxR4a48Dq8qxGJf",
  "key14": "Qc3i2cQc1XjyfRfRX8yADbiPN5ESJZycihqYBSj6cM9jK2tGRKCKtp6N7KYjnksSNRMp7kU7fNQmaqjvsuWk5QD",
  "key15": "4Ha9px5kikzxDN76ynk7qJxLuncL9zgQDDz9zoXnWSfDCo5Ax2xJsP6Y3LcatRZVCGBhZ1tRLG3vrNXqGWXjEbCS",
  "key16": "3xY2MocGos1zrUoALPNXouzK8UZ7yNCqYqvz2fXjn2ho61ZPadoMxfM6hknMAKrcuBsfjKXQxLpM7wzxyKLobR5v",
  "key17": "3rTWuivnqUT6GEHn2wpwk6JihJtvU4iWZGnJmUzHHq1Uu1whDDRoUDNAdyDn72TBgoCW5aCwo1Jm572yt7tDCopr",
  "key18": "7Ff9qYaK2KXga5rr4R9nsXVQYHFoFJ4gxLZqUFePbF1CgAGBnkkJjbXs6D9ZDzK4ca7ExJDuofQFScHvD7VGYtm",
  "key19": "2pfZ1QSKttEDECNQ1npiKXYKJQNXFqsdPb7Zv3d1wXJXbevkjG9LQq7DyPQkHoABWCiBRMBHiutfyNmqsHMkpsQ5",
  "key20": "4bAgXZmMXh59XJeQVFPRHtnLdtFmHdFjanazm1K4kmVsjrdVJrgXtSfgJVZDFoep4pxYvJ8QVdewi2zE368GVkSv",
  "key21": "2xPB2w7MoxsxMKkRntoBd8vw1B7NSpcAPwDD9oSH4GAgwvd4THnDzSwzJihoGUUyeyAot5JkNwZqJKWf8j9PJDBs",
  "key22": "29rptxTy7yTyNXoaFfwa2X6MFttGfVSvbHs34zhHmqeP6TZxDbs3j4GqsLpCLxWptpb5XKfFybJjBFXYkyktdhGN",
  "key23": "2PsSAAgsHwZHMcBdZwoNHJ1fZ2J9Mt26nc7pQ8gdyKnAXrmr31U3ckwpoJ9vembHCYx3EW6F1wxPEEbpJ2SqvKyD",
  "key24": "66KCyWWWipF4TGAZyPTvM2SmzPpYfFSTVG3AZ5itrcv6nKus9scFnVDzAiZALR3dgXn9BB1dcJ9xHzwXKNzqq2pM",
  "key25": "4diAdgE8ocuGb6TNfmJ8A48pu2xweETT5NBJet2BCGaZG92UgDDiQAcsMVEM3zbX5JKE72qU5gizD91a57M3zuPd",
  "key26": "6FpsrUNdBhAdEjewixVvrCu56LLvBctB12aeGPJ9qwr7vE9kSuucxTwa8FsCwJs36mmTSk1VueArvL7TNtfQiQ9",
  "key27": "5oUQsEzfHbmaGxHDwfwdfDRSdeSpxmJbXUAXw2okA7znnwECwTCST52mjt1eWHtHYM6AiZWkHju6cs8pUvH8gt1"
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
