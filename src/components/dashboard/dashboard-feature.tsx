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
    "2bgLzWyoGidHn7kJZsBEtBRqKGMq9g7M8JLaGfP9oH1evenwD32bqRQTjnMKvgE8Ci9FGbdGHLrwgtpzfkkgUnvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B4TKxf5X9jeBAc9aGkQ9q9SRdSR8zDz8KgYsiejPesfs7nb3qSvDFWd1y9sMdQdmfP3aeArKQcqu2b7nXiptdXJ",
  "key1": "4EvHc19ya1QqVR6h5QYE2Ftruim922TQR6Bj7jNAG2kj6e4C8UXsSNnVoqeKjtDHAJ4AcoSaMhiAGLB7j6Jo4sEy",
  "key2": "4H94gToQ2sTkFTHAPBE6hozkmXhxc4sSPfhNnbM3CKhJDpJ8uf22mf2BwQCFguCWGdhPAnqm4dW98QvnkG6FyYfq",
  "key3": "22J8RNNRHagfGVDZJFYfE8y9B7432FEpzVTw5nUBZyhS5WDzb37Rc4KJD4QHJLULEF8MC13E32Ufss8iVQiGy1P2",
  "key4": "36Nz2TDtz5njd7ezgS7P233EEixkKFnfsRNjW3Qf5ACYEZg6iifWkSYpQZo3GricAvdny31V631WPBkyZH6CpbmH",
  "key5": "5syDAQG1mwX7jui8RzCLRAGyzP4WNoihPqrr2opvFhuwkZucwxPWAiWRzkoBanPfjZB7aZqaxZDnMbX4pbphqaaP",
  "key6": "5eScWRRToxQzCooitNLHuGPgMzd9cif9qKzq3DDnijhpXEcaphRc1mg1aGCcFoPTxRiYbduCV7jdinVoht7YWQix",
  "key7": "4myfpRjWwML8UhUhkzMkcd3Vj4pvgti5U5G2UdfRsGErkhCHuZpEAr6NSTkBotWDUV4nn1j3ZQHeQHewD6xsGF9S",
  "key8": "2thHbzqVqa52cHLb3in8ewyx1tv8GrHoDjNjLBCcVz5NCD3UQKurrXFBopW2SDvVFqEt9S2FdoHrS8bSuD5jEkH2",
  "key9": "63U3b31EL6FiX9MVFJJDum16h32FwTjmKFE3nvnMRphEdSxCHegZyzkf4RHfT2CyDThYr6FSXyPVt2FA71odQA7v",
  "key10": "49GmZV7SkqjaN1tN9VyM2u8DzjKaxYmp8d3gZLAjdicgkVXBpk3YmFZd6kJ1pbzeqV6UvvmqKdhdYtbvV1qzjmf",
  "key11": "3JqSQqn4iiQWi54cnEg5rLZvjt28iKERWVq2Ze2QLLDwbiNWGRC3tZ6CGCvLyuB5yuMdBPSc4bZ2QHxGVCjxVpyA",
  "key12": "3WxWA3hU3kMyswvB6hhUzj6zWX6ExerC9VXaMpokojwuNjEU7WLA8TZQEpFxomfzHActi2s5kbsFrQhTh5GPq3rh",
  "key13": "3DsfdMJkJCfYf5bUEfpnkZ5rN1cD1VjzmF3MCLkT4rssa5zgKu5iQzmptfKHJcffmvD1HQxgWN8K8E1gvUVVFePY",
  "key14": "5NfFNCNvEmXE1Vsb9jKNHVQgmfWQaREfm9x6zZ6nGhoCNhFDctbFYBT1UiCZs1HuQSnhN6w1PhygwBQV9GJXAoUf",
  "key15": "4gQscwJtUy9iLVirR7sixoeFJu2ecXSEG4DSEjdyZaL9bjLkVQEcqVMQSgAAt47xVx7E1N28PGyfxR5WB1JXMjt1",
  "key16": "3pH3rBvATa23SqjD3t397u5ni1oPZDrYiup9ve5jLFQ4nZ2v15vwNh6WysdbgtcSWYn8xojFtNWqe2HQBpQNxnMK",
  "key17": "4cHSkvtVo9wvtjeFwiFyVhVUwyJHbHR4kKjyYDemggcw7xEPUBRKrr3euP6xGRAjVuFo63trLqGQCXXDwNRCjq4t",
  "key18": "PY9GtL4VzM29esqY35sZm6TdJHGPWjiMgRAbZivwAr9UXoL1Rjh8R2SNRazCa55q5WFSLjJ19bgtFnwLyhcpXwS",
  "key19": "4QwejGxBkqunhoiSxvJrRxsyKBF5FTFoVLZx71YvtTcJazQSo28Go9THe9BPkyscEroE34qcoy7zo5FrBV8kxz1B",
  "key20": "2pJ3gk3dr7yLZ6qMwzYXFDX6VoSswfHDSwjjhk1foPnX9peWhcknUHM6U2uCZtwoz9n3sWgGkrr34b1hVtDLekxJ",
  "key21": "p5yYR8rhu4ggdNCirEw7DD2FtNgw1RB8AawsCJYvTSg9araxyCPBfkUgThoJkgW8Map7FrHKqp6dYTC6ubFCpFw",
  "key22": "5vjQ28FHU92vGFKCHeTgLSC5K8tzjfPbHj4UxTdKtdFMo8YZpAHgAXjrPHh11UcomMCp4dBdpcoihfR2uW9oRhMu",
  "key23": "2tf3biTh36E94E8fkRnAjgXQsAo4f3mbbuQp6JvKZkvx8ZqziqycfNR4oJjSLThxsAwuYMddP1ffpqLnaT1STqPh",
  "key24": "S55pBqs2mRxNhHWFbPrLSkTbbp4TWKbP4hsiU6m7Ei1uPUYsTSK9BHpj7AQ4mc4bFFDQMACwtGwxS5Pazk1Rw1E",
  "key25": "3oBRudSLbSWRULgjrMWAqjVRYGBv5t1C5J12isL7EnvLxeq4YL8YUup8DuZHnV65Tk4y9sB1KJBMRBpfzrDz26sA",
  "key26": "tFyM7n1KcxjQLPMvko3ubi3pKRPKkGazERmjeeJaHWTyQRFWM5MXCaSHTnetyH7MDpzqVqQeBpQLaWEC1bhiqyn",
  "key27": "5hySrMkWpudG1QCoTCNyZRCsR1yDTP67R7rj1nNoUT75mHQCcp4feygUXufZZA7RypXGVmYhxzp3YRTzfaNQfjmV",
  "key28": "f3NFP17CHQvxrz3Un7SDpgGgDT4weHmxBbuYXBsTx3MWLxn1cjppy95SuH9c5eGFQoPK44cabcmR3Uv3Ht4vUP8",
  "key29": "3puqyTgBwBdzRt4MBQsNdvDRts9u2yZKscD69fyi2t4JiwckjnNzueW36TpnTr7zzR9zRrGKAxqoHuxNBQDFNnHD",
  "key30": "2gNCTjmVjkqbyuLYnyrUsgAU1fbB3cNBdjTwMxAHtNpuu6boMXpjhZQHUiQSe61bK1PdVqb7Ao3CHS6QxKDCMxfW"
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
