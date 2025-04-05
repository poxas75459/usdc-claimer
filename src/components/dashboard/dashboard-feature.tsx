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
    "2EUcfbroAGb9JGTd3Vph5pM15QsusWVwRkxqmU9a3P7c8DDLre2nyQhA6HYHFNiH9zT3RWwjGeU2CkogBrcFg43q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z5JSAfgwxrW86LJDHL49miMUqxF6RCUq1tJxUXkSuMziZQK7eQq7NrfaoEL4uLce2QMkjvEMXJmqLigjMRAfrEf",
  "key1": "5BYdm5ggiFhce3bJi7SZg4kexYQ9E7t9GA7GzPj27uz63dHocfqRXgLaT6Qfzw34geEodK9Zz2nfmwYbPBgJYyVM",
  "key2": "5W8LQQ2RZ55TRiwAYHzVjJMr9r6nFD3BkP6hsvKG1m6ZMVGm24fZRKqP6eHpFCNcToVhfwEnAwmisX5umwgCnMHN",
  "key3": "3hxwPJz5SQFvdQE14bXttphioMD6daDNExFY8zabXtYCxdc5LYp26n99Uiro5j1FFMZ5QmLLtRW29jed2VwAoPk3",
  "key4": "5axWAvwxHdeGFVU43qzRB6keTLnCrCSbUWvwNvoT67zUHgFR7ajwg6fnF3vNemUqcP2DzbR6eEUP64CDBzVmCTjX",
  "key5": "23e3bv7AGRF2Cm18iuxyfY3zq9Hb3nkw1qXvUrRUGYo2hxXs5FvNnsyyF5EGPe1t6DyMuHHST5dpQY1b4EnSUj4f",
  "key6": "2SM5kaCXVE7mzvJrM6UxemXYwugtHex3kHk1LP24912QRW9CWwkEZ4DCureb6iRDt9ZQNT7buzRmtUH4mqbJ7QWF",
  "key7": "3FXpzgDQpv9bituESvFBcUX2k5DZ3JXNDeNwScU4SMV2WFj2yENZvrpucJkZ72tKbhyhBWZ8gbP9yMWS5MvQUZmv",
  "key8": "3cWL7vi2E5sYyib5RnmHPCH8Rua8U4YakikFuY1LJo88dXDNpWG6CszgZAgB1qgdPn4ppaCbf6K1HwJF8nuH9rEt",
  "key9": "3K8uQXye5ojrXbjr1UJDJ9h5Tic69cq7i5pMaLtFostc5ZJ7XAWaarpExnb3aJgAdnGeRwtwak461REkCqVyEGr1",
  "key10": "4Xc4vQFw8Qz33zq6FVE1s5eWjmcPihJKEXJxV2FDLeCR61nZJjsMTw7mJhQCmKVhkf5bH5dDLmFDzkADaNo8qFNV",
  "key11": "2Fk7XRcyCYn1nAH71TVZgCR3hARYNjjymmGbdJUSicp6YXK832PnSQwW2mK3upXPtfg4FGwsWNeHTWJKdAWMiSGL",
  "key12": "yKJkpiXYBp6rMZjCX9DDGnaWxrr7XDt9qzFmH66qwymDSa677DsHUT1Bi7aRnhHUFePhD7UkAPyS9VRDVtvt8f8",
  "key13": "5X51bkE1pjSy2druyCDC5GU6RdWrsaxbMBK6FbyhdZA26GnYonBCFJbpJRqtsJqvNo8kBwNg45KpYqe2wo1BJJyd",
  "key14": "4vSC2HXQeVTJBPPpW72UqRHWNSmniejsn4mkHJP6gWAkSHrt9DUeQ8bg1QNMWPbfh59mh1WXMimffBdyCdtWjmnf",
  "key15": "4XR8KHerKTEZn8C7CWLHD3d1EjJ4zYDQpd8e57sCjrE531C9sqcWDQn4zHYQatpLT3gHwAsNF37UdiCD4bbJZ2zB",
  "key16": "2kd4N1RKrWBaGNGoJXFogakdmNRTVhC1uLBFLSKhxXbYQcVhcdS9HuSHGprVNMVabWiHZn7FZchphMQbYAPvnvMc",
  "key17": "4ALSTZEN4n74A78tS7qFLrEjAf5XxSjazoxF6KRuosMonVYy2LYDBFLdWFQ8cXK9GdqKZXWLzU7oCWzCJFw3rShA",
  "key18": "5D6b7vjA8Sxtj4FfRKPvPSjnBZPij1qWjVguXpARc2McmeR7JrVP7yPCZNkMPUjBPjFTBhVXXR5e1yhJyTSX82Vq",
  "key19": "4SQTke5iZPDV1fPdtJAMsJWxEgrroHQFJ7wW5Qo3hzSYyFaaW4jbf36Y8YauTaJdiEgNMizoaPrnws662pQDWQ5j",
  "key20": "7nAgQSExQ49dkXdgBX1QGL8A2n5UssVVKsST2MJFvAK8v7wp7WKvXFHoNmGmjuqvs73ag41bswaRJJf716s3efZ",
  "key21": "4usf1vsUfE5gecHryU3g5y3ooyJtohEymWCTxGNmbn9QmGPw7vb31zchHx9WKutezmK8ba7e3dHr5xsoxm6Nt2Kk",
  "key22": "2irQ4oLfUEw7xda65fYWNjPGMwLGu6sTFs75df9yXLYc2CgFfnz1nRmPsHQfrXbL8jZMxnECaFPacv2LsgnwJ3NQ",
  "key23": "3hBG2g78msiprfHYg8uB32REKuX5qF3RzXxGnqKURDAYvVjzpVuyH8ctYjZXDY4xFEp4ddKzh8pWCaJ6KbMtuW5e",
  "key24": "efaejUi6GsPa7MxH6No1GjURaNoFycR886U7wqBWtfDiDFz95G15amPF44VbyD2G6oxSyMBNzkXWB9TY6WbvjwY",
  "key25": "2nzcQwCfjHHL3phP8MZWQ2eFDwbBuGZXFs2rJSD67Sd5jxoH34dDLKweDSmNrY9TpDbzJy9xa3N8i6pGjjnmHUtf",
  "key26": "4jA3pAonpZLM9W8HdUha9vRYP9E7z6VASNEjNnrEShazDw5XJ1moMchBKA4ZvKXGshGCqHAwXr94EQ2YD3RWydk7",
  "key27": "4Zt1g7ERsbSnmydcGoFzXcPDBMXN7uNEFdUD7ztTdtB29SGcaohXAB7mZzyXPW6ZkG1yfzdcJ9z6nqBWZfibWoBZ",
  "key28": "4BKZqX3k9vi12vVyGzSFpDXKc8NyN2NSd7JQFQfEFLmQVsZpYAYd7Y248BXruy6JPHDK8nS3eMiaixHj2EzQcFJX",
  "key29": "5NtJmrLcLgXo31FDQ7eq52Ku2Jb9THn8mUSA8ZMtTXzun6U1qeNUUhvYrnPWSjQBYAcFUYK95Gs4RxiVtCJLT6hi",
  "key30": "ZzGc8JJ89yndHcC6UUvUyvoA1t3q1Ha9n8CKqVaKY7iM2EKw8o969rMxqcsVB3ehwg3Ug8HfwdPwZYhysU1GLf3",
  "key31": "3Y81mfZpmg1Sh9xmb3vMR1btTpFbRqc8MsEJTs3i6bQkKT2H8UTY2VDuHbGWLqCwxdmMPdFb6hEpJ5MvY9T5jpPd"
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
