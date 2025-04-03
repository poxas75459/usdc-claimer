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
    "5rBykYmFNECkJhx4JvGHdveuqgvNSrovqYu6fEJrUkgJKCya8ABYSgZHPLtrdygaeWFZQLw2vFXLdxq1HQveei5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fHQMVH7r8GC7VzPUjivf7jLiZPWiuvDJcUM1jgMUUD9NvGEm8GjbDRr6wwTNGwNR5Xkc8ktjJJSjZDTRww2mNh5",
  "key1": "2q9MS6ZgTfiZEqQLUs3w5bUZigvY5EodC99JpeqBNdMBCJx82WvobK5kMHVcdEcuLx9ucb6k5gC62k9bzEdUUPBu",
  "key2": "32TuPMPpRAaUGPm4W3KhFGt5S4oLtg8bKbrQ7DczEBahebH3244gBX4vP3pvXkSQxvbkUkUhfzAJgp8dUAKmUYjz",
  "key3": "TFUtHeG62CZ3fci1entQwJJLD1gpcBXTRw8pSDF62ctk9Z6JvgqhzoUgkKTr2mMSnvWvhRJKeQnHodHtg8nWK7X",
  "key4": "3F5ZzG2jiLrRNUv5T7ykiNn8BFGsz7uo4hHhqQs7CyzCj1GNXq7R2noEUEzZ5YPuRsKXn5r2s7CXeE12VNZ5G6QN",
  "key5": "4wrXcMJhN9BUo9DYmnbPGDEjsR4CbcRHZuGepfarHVfueGUiMQVJfm56djv61TPBUyi8CZwWitvwBT7YRQw6XRai",
  "key6": "2LCZLFDa78PLNswEPcZfiVg3StEiVH2HLGUzyn7dLShboG1KGgM22qGoBZwoDMmXTXdcRzzCCfic7CbXEwCLSWox",
  "key7": "5JrE6D691BHPVna13JRGPRiQi458okhtvp6JhxtGctpTrB15jZ9jPWs82hQvkMwV9b7Lkkt6pK9bqeSV7H7t5wMJ",
  "key8": "4REW7Vs54DcA2RBXAJftPpgDozknVqS1EXzKKDJcXtFKUWGqVraWubWGqKDkSNLoEnzT7tu8z6RAYtRwWeG5tUSU",
  "key9": "4XT1fdMsQf2MnYwi6ua1zSYZM8WfHGg4LPhshkrGLjMbkpzSUQWJmST7MGUdV2Mxi2MZmBmjf6wfJhF2C5CAedUm",
  "key10": "2XYCKmfq93m8oWmgM3sWKh3VWrVGRFtDXXHcXo4wTcmFLQ4MUa1CCzBMzMeU4eexZzs59KGUpjutZa3bca5GsHin",
  "key11": "65K8BcmEYvsC9xVhUsrMuHB7mNsxurc7uGyQBhcYVcKCbg2SGsFyLuK2Ps3zGmTPfyQrwtUyhQ8xVRv2Cvuc2AEd",
  "key12": "2bwGqfJYLGX8aey1oyyzav9Wp26yVC3imMkfPkZa8bX2V8P3ajDXew2VwKUfcNMjggHd2URWXKrL4ZXBXHGi5kR5",
  "key13": "rmXPDthJWDCrh44jbHn31rNxkVSWneShBhbGKzA437gHSEMURi6ShPqyNPjPdkKdKN4pPwWtaPqABaZMuyt8aSv",
  "key14": "2JweAmkPqk3U9ktV81NSQMGuR6jpCUYzRCoL9NQX9GypUfdGEjwLkojTXoPq3d6KBCp6rxPfE3ysBcpkKD1Q2yxH",
  "key15": "24AcQUz5DNngdXtToKHoxf9PwZjq3JVJRfUQzTM3L1e83PnxMzxDePH6SWgPmt9kHo9wAWjAwJbC3twup7GwNt1D",
  "key16": "3LcN9FriH76Snmju9zffbX64BDpxitxRoqYfPWuPmJPG1vuFU1h22JA8r9KHthqhmgovSC7mgBCFE4TKobJCvS1a",
  "key17": "3SNHN2TQqQQxPj5HB36YjLEEvbeGebbhaFCTYWxJdoDNHgpXGrhWvZJ3AsU3MW47jAQJe43s2a9BNV68gpi84ZYE",
  "key18": "cDUixoXVVU6SyPZuGU1jzKBYJHnhZgti7KcV4JZreERM7ADmuXxJEYKEeV6uAFquPX8wNjLGQAhQKdUrVNPEMT8",
  "key19": "3bUnmCFrnns1HywWeWRE42CJ5eww6eYbC29HTKXpGqL4aEMHKKqpqF9Mkt7CLj3k1eTvJWNByrDRpweF7ojh2wLU",
  "key20": "4XAhPVYus4nxqHSibWSdsb4pwzc34eHvEPF2FD5mW7hEy5Ps8d1v9DcoNUWMCjh443ceKg6rzEA2HaCxqmhL9nMW",
  "key21": "2Ugzxb21SYoxMNsXvu7zVhCoXJckucqepHU3TWFUJHYpRPc9cvU8JpmWLzskAcrbvxfBd9CwPiDKgCcydF24amw6",
  "key22": "499MFFioE2HdWbhfMJdixC3NCjWoE3BLUCRxytfCmfGpoQLkviAYwuHRyP3fYuTuQ4k2QrHq7TNpXNBa6RuWpGaK",
  "key23": "3ZMQj4TsNRbMbttJsenkqUWu614R8f6LtguJTBEjsWq39yZjdSTU8NG27YRNiJzDZFB5m5Gs7WTCH962A3JKsdzx",
  "key24": "4irqhEpWbLj8cTq1a9cm82f4TNEiMQUWk2xCbSaAu1o7PaFYPWDWCmHDy9ThnC9Ezy2PKx5P8sa5xxHQkQz74pSQ"
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
