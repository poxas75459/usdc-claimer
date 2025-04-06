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
    "3EQW2iZqX1bzHK7FJPsRZakZKBwDWg7xJKofYFfZigrcT9uPXKarDFsyQW8rZTCdbnSwTCznr558BtELKqTr33aE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MKFVZobLa11FS17jEtVsifhBrVk6AX8gZ2rLtqA89KjukKTDqPEPzDkkpHgv5nvbv4pXHyEsJDpun65dwEn56Hf",
  "key1": "63LHokQwyLneNX489Z1RP7ojP4w7i9NgFo396c2oTqDbAkf7UnL2UVVWFMK3SHTm5xCua2NmED4rYmH9cgRYzvfD",
  "key2": "2eWohyBtfFAfwxPTe57nmikqb4YvBk43b27391w3unSwsDfvm2JCUBmBr7cpgBpW4vSsE5s7TACo5WoYVeHWq3m1",
  "key3": "5mWwijUwudN6VV9tDzAegFBXJknbfXj2XLy3yyGLgR3GUNTHik8fquRyrAmG99iAW9xp2gUjNo7s5cX2ofoQC2xn",
  "key4": "5DmiVNUceVeAcq2dUsYyhBw7R631TSmhyN4FL6FymkT4QwiKceN84DZk6AnMPTxw3UkioRXYdgToGchMULMuq8wX",
  "key5": "3kwpPzeHEA1ooSzd7aWutiiE4L5FkFHT5BnopGA1jUB8gLCvswGEA8aX2juC4ajiCZ6PCgB6Yy5ucyRXwBVdknBa",
  "key6": "55RjSp837EBKuufmRYCnwoYjEC4N87tbu3L9S6TKkabfMb4ApnNrCnVisxTm5GQxJXznew6TQXKsibNEzZURW3tq",
  "key7": "41zQxMwrnFmfhZTcBLV14DoYYy1rcKpyn4M7zUEHHh4xsVTKHZ6k4ygbecUy15knuhcS4h1jNMVPYqPS7DGUUUvo",
  "key8": "4N7LdyrWF3DkyDNg2PnYd3MLr7ZpSLaVejgpDpejgrn6JfjzhLhmpcX5S1Y8Qt6sTVroMCh36y6eiMQ3PsYv2dLQ",
  "key9": "2UabEs2kPWV3NexDLTnAV7QkCytVuVKG4EFSr8fAE5bAxoLendYFJmJzTgE1Lmv9A96DYvF9HGxcc9gLqWfyxEPD",
  "key10": "5T4mdArn8NEH4Lko8ym8t41NCp72sh51SzrwRVkQu8KGC9XMz2mSiTgp8a25QvnmGYj7KQb7pVe8qVEEmF42swve",
  "key11": "3uRjRa6e4pHau9kw8nCVqabeMXp5dcFy1aDCU8azZVhwR7SFeJbUcSvmMgWZWdyScCebQWMnABRU4CQBYASMLdUL",
  "key12": "2P1j8JduuGbvw2NTEu2SjxutrVCD7Qc5sQqV1AxxWEye2NKsVDpiDpD4tB4QEhHDd62qetkS852123iscmVp4bU2",
  "key13": "uNsRsXrjDrYoMsukXEv6Z8vqjYcGL77bvfPbnm8BbkyavPGHTDeD5GwYCRMvtRAPUkuqrqZdJe24JWxKW8RarNJ",
  "key14": "4Bj2tjaZyKT5Zcfs8Rf9YuXFMWaTdjjjXkSjPd7ie3PpD8CaaanyssuwSbvT6tGZ3Pu568yy6vobgf5qiBtcdZ3C",
  "key15": "28dFkrqxYAQ3gYPjJZFCmVaYPaMMtyj4fXP28ctvnqHrKtVDc4qQJZ8STwouPYsZ36axjTx2EFH4WKx9eC9zR9uk",
  "key16": "3R5YBhvdHehgNVALqy3CBb1E4LUsXPNimjXeXtXQNawJATH7GE3ULLazTPfg1HG3kg1mePj9fEzcLCxYdApMbwSd",
  "key17": "5dmVVg7xD29oYc8we3dBzwrdnKYrzpJCM7QP6BQY2A9ihBE9L5xvpXZpemYVGEyfdpMX9kDK2YnU4PwcvaREPbNs",
  "key18": "5GXb9qQrqWDDwU1H1Uh9spxB6wQQSj8XraWLSmEVSL6w3HY9gU2a5SVKYFRkedNRNxWxUZQZxFp9ZSr8TZZtqhRt",
  "key19": "5DNttdzZ2EkgtoSvrJ1sxHPiMqgThhPYoW8d6XbDT5kxHDYBeuC817FKphEEB9W77pqKmYZCoLNBkPtndsHfLVWs",
  "key20": "5d6ecSFvxWwiL9zfg2W2w72DHkk63DhEj2MbDBb1XaT6EnxoUP3em5J9AaFcgXYLmud43owccF2J1AzEbEXqW4xB",
  "key21": "3v2pebPHH3VWppiMdDAVFw1jn41pciorsA4tXaD8wC7WrnC2EyFELBJjNEapEgVZGGtw5dixs38dmoV1KgiNHWWg",
  "key22": "hiC93EEkBrEztCZCJRajh9LQqBq7YH2tBYEM8LMRZNoY2a5qWbFo7JiS4x4dT39RXB5uy7JVx99P6HLB94pDegW",
  "key23": "2VZ19YQ23wPtsJxmSw7MyeTJTmpYvnE7hLdkU5H2aYR2yJfL7Q6tTisWL6EiAf1ooK5haocD6vx3ggWtvRPHEM3Z",
  "key24": "5HcDEiAvtGRySAA6d2ir8SoLxo8H4yNSj4c9oiFEcDqZDsgNHZZJx3T7D2u3yEvbyAjR6JT5THzkDqb8RxdoLxXr",
  "key25": "4LAp6kmAS6oGPTxCieTSoUCQ3hVm34hYys9CGPGLLvwuSQpV5zhUTXvE9VzXrWvTQyZWpxWBa185SYLfTn41JzA4",
  "key26": "43E6aQCBnE58BQmSypWL4V7gL4Rw8Rh1RokH6p1ZCyidLVT1fQespGWi7xp4VQtWRiiG9sB6Z4f1XsdvBGYxGKfG",
  "key27": "RPdfgYX5JDWkMcuTFh6qvsPJXfByfoEWAUFR6igsjLpBANZdBB3C5ej1NZS6pES3wsE8QHc8CvhfyCUUV8c5pJW",
  "key28": "644LJg79yYz1rCoNB7wcpLjC22XChoGP2zJM72BEHYJ5viFrLqDSLT9ohMMTFdHMAG1pRLnD3uHa7reDc9NKt8kN",
  "key29": "5MJVeUcVDh7fGrg7Ph3ZM9RVxguQWwKjycBV3jW8k3dCikjHhgFwzVb8nb2S2XXDYUSRF7dS5hP6VXwdHWmiSuxs",
  "key30": "64Pc1sgeyj5VofQWyvkPfwvbNbMYMgDqLtMAER3m8GQyL9sdiggCTv7agnw1uT61po6XiVjpw9sULSVNJRvvzth7",
  "key31": "2Vyn2p7kX4Xzj5QMFDyf4coRFirV51KuKDsAtL4ruXWmYfgSw6kBPUTzG3mEbnnKzHhgvRHLu8RE33mLy5Yb4Kx6",
  "key32": "2yGo6GTkN3GHHQx9WppzQgRDEcuoMv9BxQQoHbSm3pvFoetFJdPDhFbyM9wXTNfVxAE68Y6wwSBCzbHJK8dvj7hs",
  "key33": "3HuftEwf5DCk3wLXyKq81SN6ppKkGPSZgh3QU2uMSH9gRvntY1L2tc52mmuo8y9UcoJiDkYVGFzjgTbh6hgkDEFk",
  "key34": "5UmoX8AnVYj68FaM4YjwtndLNMo4r81nQG8YuGrVQQv2srrgJHZnyDwJMyoz8MjmfP6f3FzXBC6WMamzLMfh4BFx",
  "key35": "27vL1xFVdbpia2FNQB82zmSWTTNY66vNDsVCeJNZsXRztb6r7poCUZS7ShprsLPje7Y2HWiqbPXGrxPDcNnCbCmq",
  "key36": "63WAeLz5TenzzjL2cbWeqmy7seKMdXvkBjfymeaJACcBkfu2HctqoStP77GjYqyHQrMUc1NmY5rX5yuY5n6BFKWB"
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
