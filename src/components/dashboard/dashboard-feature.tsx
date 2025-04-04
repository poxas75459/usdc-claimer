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
    "Jv71Gy5Zh12nn1GSUv5XmHHaU4Gt1Lei2tqHgyoPrZadx4yVrzVngYKbek9Rx1KLHLf65U6Pi9io5VXMEgTu8nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49eFv3tfVCmehdGiun2PstFhWX52U8TSnmF4YMH2uVBFajDaDLkcfmgbkgzZctNnhhoJUY3QQp3ewYXtc2oQiL1x",
  "key1": "2E9G8U2Pv8TkPTQohLGaRFWaGEpNEFeS3WzC3NCshiRtuhSr94jxiU4GPrir9iBHWvgYwVEZQXzGGkqjA4DodWR",
  "key2": "5GtcdmCh4STmztHBZtJyoAcNxxVZ2YwPTiWLo3ojzw11UkJ8bmS6AiAeqSHfwDswvDD61Ji929t3as8f1xyRxRJX",
  "key3": "FYrSXChz6uTepUJS2YunFhdiuPFzGqFtimFX6faqPiJFdKg9FhMAtB3px6Hkq6ELdPKEF8SrrDzY9u5j8thR9GS",
  "key4": "5bQy9MzpYZsGx9TDfmEh5GYp5C4hG63EuQkMFodiqJQtDrn49AFq1Mummdcz2enzv6m5h3XJTBZz4MFurSzwiHxY",
  "key5": "2cYsCvQdyuedM4GmMyXuFjhbUggTHVk2MwFWUCtxYawtrbExmzWdno59f8qxtGCe7jgjfeoAN5KfEdPFH1RhfLxz",
  "key6": "2R1MHi9a23vb6PZK5Xvab8EmsDBM4xvstvQfPgPTBGjxHWxAGriUr51w3zRuNKURy5Qd3zRjCfqdd8uY8hFDP7g4",
  "key7": "2cN9FbXx4f9PAaeMRnuXQkZDiqGZyAMnpYWEd25bmSCsAYkWC5YPKhJX1aktD9Cq7DUyzcT23vp6mxMHkzf62RYT",
  "key8": "2216XxWbyTDWdiii92KSNmKJRM3KqxDmaQSCJ78Nek2rQJZLZX3GVj93mzDrB7VhnJFAzv2bbbFdTXowwZPSogGY",
  "key9": "JhmGkB3pXdyYpHeNHMgUWo64NpzSsKaebuf6cvwRAxYRzFWNunTY2sVhN99tUgrx5Hve3T2JFG6cbXbkogYJexR",
  "key10": "4wR1r8ouBPExjCt9HwzJBcArBiJHFLZXfj6ThDSk52jHjJCCFdSWBAavXcVZua6KG5EtiuCdVR73TEuoD6U7PW6m",
  "key11": "2Jk7JUzU5zqYJ1ZY1Zvtus9JkrvaKi1BZxALsvj9pnFst88WtQ98RyiGJQnVpNGa1KRbAVXUhFWfaPz2pzReBrXR",
  "key12": "4cwwbntQo21MniaovMZZ8DtjbfuqvM69Zj67LWkLUzN6b5S5guaAoQTq59AQCMPiWWBSx8GjmzgL5YNDmkeyJWdA",
  "key13": "VMYebAX5tLfRcVYGjRay1dxDogfFjxnnDC8WA7tPMpoqEL83Qmou6bmAN5ANHFR7nP2okCiJjnSum6iy6bX8N12",
  "key14": "3Hszg9t9Ne588Z6rdqXxWNGnj7ddwRQr9KDGvUrhzEfCPXvRSo3mNTAcVrHDMADYBiYFEpckxutauYC2ZBu1UPJ2",
  "key15": "AYEU7omVXsAigPDG6QKpgjmEyHPWndrZaCXTCtGp2Gbj1rraMoHjJiWVRv3zRMZcpKvcBj8owha5UiwVb3tyF4R",
  "key16": "w2BugnnysUnHhK18JkcWBpANWHQAxrtr54T8HrRSveGf8C5AxL8XPi3P8aNM7sDJAAEkVDUUY32eVu53Jpcjz4V",
  "key17": "pD4SpKFfAZJ6jUPXwfCsCQeSRXdq4oFLTTNgzk5fWYbKB2h7cB4znbCREHBGCusgv9q2ej46SRjHu1RLFwBh8vJ",
  "key18": "2Jnyi28rNG8nCBn5h7wzBMzbcgTvnCrBosXFrNpo4Cs4KgfaXVezeFhGf8tK4TMGBCn5YXnxxEf8PyaQhfWh94s4",
  "key19": "5LqJwNr333V9SYWn5VK2HjTrUZk6Ry5ECpeCN5W6XJ9cjAXiFbkyxByxgiPLGcRLJfMTXafRy6F9LKJ43qYbhNQJ",
  "key20": "XoEapeSaB2D13ZdPqVnWMPuWwxrtS6hVJDFeNfukvbEEFNwuHHKNkX4pcV2x8xRZxoCNwYD41VKEdnragsdhhm2",
  "key21": "4QvA8nCSGsg2GLJESosiUG4Rv5VGMg41PhnuFDi6s9rhHdEDnfn4AHZ68BsDFgRUjDFwPGJBLCpFAazbtjtMUfYG",
  "key22": "4weHg65qfaw5HSjsacCYg3o8EnpqZxWJ3tNS3T7VLAudY6WWjBZ8v6vpdWzg6TVDNwnfyKuk7jMLz7ptecShBV8d",
  "key23": "4RKSy51cvPSQDKwobjmcTEo8TziqTLg25toWKFNdroXMMrV6okn1syyup7vK2B4ZBMBmgX6n3sC5fXXt3ix6bJMB",
  "key24": "4VBweNg5fthPjDobGGoVFCifFFrD7BRSkp5WpEdAFP7VoLNRp7w14uextFfxT9xSccyZ3M5zWBv6dUAnCjGAUZ5d",
  "key25": "3tdZj3w4UPPEr6mPUazYSpfAUF4KWi6LGXBmNyxfp3ju8qPBWp2pfsY7AnAhQafrNvvbt1W117GmaDpGaQmxTdkt",
  "key26": "JuqNBfD29fL2nxhM1VpsJvwshoMFYhJtYaiHJSdSVdgfz7eDCEG2iyKDZxVMmgmJt57cjroahU1t9d7PU2DqgrM",
  "key27": "4KAXeoXnLA3QjHZdKmuccsmPBsR6D1Vf8rCL1i2KCNqV5JnihMpmqLPnqNbwjgYYp8oqiuiDjUVnZRCyz4tMLPb3",
  "key28": "5mb6h2x54eEm8Rvo3nxtwUJM1KuGYefThPXTVQf9ixSRdfJsdzJKa7xMdUa2Z9zKHKeSFehhreNj1KJdVAxM9eek",
  "key29": "257qzmaNu1kduQ5BAijTxnuLRvZa8jtZzEJxZ2j6qbAkUBZ3aw8Tijz9B3SUk6HtzfyAAs88rVnDYGKzRtFDR3E8",
  "key30": "5ND2TVMac1Zkpqt2B6eVkLAKAxTUeFMGcskbGFKgK64rZTDehkEwk9n9QudAw5jNZR1Am2Y5bPM3VHR2ZPAa6Y3y",
  "key31": "9L6ZU5HQyeGms7U9qTbR47Pts3Que9Zy36rAZ7RNMXYXMrawdEDV13GwYu1jwFV5RcysFHMad9tHaZubxugvkXS",
  "key32": "2rvNAPY4nihqpFKrmvSymCtN5nQ4PLTNAttUHifWBNhiRRhuoiyG8QkBMHBEqR4BTYRqLaxTbNH7nSUctYTrnuC5",
  "key33": "2p2zenghaWCqHA4cWtLWZ5gFUexxmTgtuU5TwyFbYjjgKUNRJCUUJLDEgyK4LWtSSRU5Pw6C2sebjo87HLKh6EJ4"
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
