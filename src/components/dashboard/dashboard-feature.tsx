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
    "3WvutsRAFf3jfG3NMVPSZTQX1C7tJvFaHh8g8EbcLvkDMUBfyDfyR2ixbuKrXfkxgycjBQrMtvEt56mgPPmNpKas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NZGje7REJBzxWLRqMqbcZdNcBCqLoNfxv5xPLQi4d9dwjKotUYWPjqd6JdvjzofkYbqfTqQqjM12Trg2AbtzhdL",
  "key1": "MdmmtmG6tCeZRGy3TkqvZGYwHzQK2PerRraG6bEs5FkCCJQhs6FPeuypgegXbJGDirx11TaVerPAF7KRvHn1PMn",
  "key2": "1vvAgFxwn2XkqodJMutULtykJKb2yNhg3MDtLNjKhLqxLff6odpyFBBECQVUtB2egAyXgG4imZx9mWikExpagKM",
  "key3": "4YC1d4N2sPawfYsgWqFgM1sEgUnNQZPJMx7XnrCyPbJMgckXfhB8oraVFD3KuNqfqfYyNXYVM8k1FDHJfcLVAus8",
  "key4": "5H6yPmEFg9RZFbqAzi47zEE2P3YK1YGxYC1WZVVczUv3cnCDZxwTHeqW7Eaz9WQ4C7F6RhYJPCMXeVttFKV8n8Xw",
  "key5": "3aJtnLTXH6qkYAz2EwiLpq4ToUu8sv4JzcPLJZGKVi1YWL3E4nKJK4BBikCnMk9ZPNBNCyEe39an8maWsooajFxN",
  "key6": "XFZF7aVfgBpFqC5dV98VUUWeaTTaJgf9cW3nZa2q3wF4uzQcgJZKKJNnT82agESMm2H3tkA5Kko4oVyXNbTgMei",
  "key7": "43gPSkR79aBHQS6e79PRcdXNRvD6GFwfGjg51h6vLerYnyYy4PGE7QcVazX6YuLKzoAi7zXeLPd4sa9tpWZb4BuB",
  "key8": "2e3SaXfqFHk83AscmNAhcmgtfGY5fM2hLMzLiFwRCGsmJfAHofb5W1iqvq2ZjcWDXcBHJtHeJy1JxWNW4cvo6J2j",
  "key9": "4gPvAQi3wiDCzWL1kTb6RXzhmbvUfwpAgR5qoy95at5Q3W2KPx4uqdcvDV6ggVjB8SHSZqcq6fLhGUbFeFnVouMx",
  "key10": "BGVwZJTudC9k4Ug65SX6hrntTG5pcorbKa1kqc6FAxpzKqHr2Vu95CMJ7LSQR2dXf3tLN8tmcmNaVBoVJq1hYze",
  "key11": "3JYT1Txsthemh1HezftpFqBiai2iW7znYGn2iQoHSkpKwUwL7oou4rDi5mMx4X5WcU5aERnbkk7h37AzCcDt8aQi",
  "key12": "2kvUQfeyt6LuZFkuUio9UPLkAUKir7nkjUotYVazVoUmoDyx6okWSCGJKgZnNumVovwJaU3hB9kij8z31hXtcD9X",
  "key13": "RcMfSapbqpj8k5j5cn85TVGyFt2y2uZFS2R4ABvrcZtUbbMhshMqDzQa95BoKBWBMMeCBq1txkQ62x7scFmMmhK",
  "key14": "2ePdYha3Yc5iSfCXz7cJph4M9yw8vcusH2vsFm1LMiG1TDdffGfrHFXkE2S2S2scTvQ48RRoYwSttCp7szHP8nP7",
  "key15": "4UE711ru9CcBKVEM86NWiUugbzMpCN7DYC1zJNughc2kDQ7GawjkZgFAa9DXTnS8SKiVBD2vKcsNSwqgMDGutNCe",
  "key16": "N6PRzWB5onKbnchP6tUPUVMvfmPctXrHVsCYNnnh2WS87BnMQhqPk6oZKrJyyU7epC8yLAsxSwpTjLdr2UdGdca",
  "key17": "4d9keJRoz42oVn3eXPeLiMyyeSu7QsEb5n2cD6auR1P5Lgvmf2o2WrECTKxk4jxSFbx5UW6TZRx3howhoxL1oEcw",
  "key18": "fDTLeW8NZmzSXdQUzHhrQqS8C6Bx7ZxmDEUX16NbPHqrrJ77cmp1CfQUdL7HPcooAZwDXihxBwi44LevXGHaoNQ",
  "key19": "4PPBxUEUp4uEt4S3WdyKbuc5yaZ71EfXd7q8anZ6cAZmDeLEYoQEnAnqTUiurFAXtzeZCfCBAtv5hkcXKozcEpHF",
  "key20": "4Yf8NAxugcemA3T9U5T5fmnY7mPkWqziqHYSUc4uR6frwwDCkZ51x57vAMR2Az6JLcX9TrLWUYdWa2WUQvWm9xPw",
  "key21": "5NNRppaysGMrfYu2StoK3cAFJswn2EyGB6AvXRCxqYhWdw1ifWSX1ALM7pLVwJherUdoNdYpyUfd3LK14jseMs5C",
  "key22": "4XYBZoqnuCvkvvg2K9NAmwdpjP5mpoeN8bsDXeSAL2n4bKbNFL4kbAxquDsw4HaSoNUzDkxYQBrNHy2QcnjFBYc1",
  "key23": "FFEVQbcS3JpjhAB2yjmzaM16jqnEjrxDGmjDddFvKp6dfRXiLeqZpG5je6x8yk7EgYKBn1fEJGR4Do6cB6s42MH",
  "key24": "5MVSdSZvCWsxYkgAEXxQ9eeFFULmiW1eJ4sEprd4ZYJa34G7EeQyBjYCcpH5BtbzprzeFMf5AU4NzJgH36wKkbB8",
  "key25": "CR5pEhQ6euhLfkJUqTZSAD5Z9kuiUuv7QpHvbRrBeNe1tYhYwe6H6DPx2e16P8chmrXAnMCbF9EMiUBFzpxsyeH",
  "key26": "aTaKpPAhGnFmShsiUdEpjcigPXJxTjghVhVGjKyt529SK9NSMKRmkpt8MFRVLkdBEik4wtwJaqFvRTzDgR1isK7",
  "key27": "5oHLHE1ngRhnygL2FJYfrwhXtQTRK3VXr53y4W5fyUnEQA34TTzFf6NrAJtGWpWFrDWEGMWv1YY6b5n5NopcJizq",
  "key28": "5HLArsodUMYoDqSZsvjs4YAo5LFzr7VQD7gegtrMG6YYdLfyKUDApcZVb2ZA1BUzdotQxmRBtTDxCaw4JBMja4eJ",
  "key29": "4WbjfcoWm9RMRHcUPpEGy99CJFvZg3Tn1xP6pMGMN5RS4fwZ5JkhjYv4JoRSy4stsZYvNG2qmkimjZ5C1yKCS8wb",
  "key30": "4QBqA7qjtJyx4DZyPMrbvqn8dmYxFtvVFauJmGL5c9u5pUrtfuWTi35xtw3JKiJPKwAcacvKR2NV9WBJFZwTRTsD",
  "key31": "2ZLoETb1QvtcWY8p414UyweYt6sm4EDDwajXD3YwBU2h1XJFtJeTG7y7ZnMiFssi8AV8z8XGDXeT4YJa44WYRKhD",
  "key32": "3xBjuh6wBwK7dUfXMfArhLf6714FE88tpuW3yNFH2dL7hPUgKx4pmSXhWizZFKFetmd3ANtHYvyg2kepqUjRkrST"
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
