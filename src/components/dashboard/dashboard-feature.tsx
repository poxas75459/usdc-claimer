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
    "4t7T8QRUUJUy1WmtpCrzCNXJkAnaxqk6v5ErPW8Dru6C3X7HTfWaHdutqvsgkAMjDN3h3QhGikDXps37DeQTSdQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tg8D9t9QV8iK1PTw9K8zQ4UjnvvKVLtkY9ot7AFg4nhph5SYQVNmsdGuSP8JrmVzZJHJjbTcVvpqm5UbWx16mXZ",
  "key1": "oAiNGasPRhLwfc8BvbRA6etWTQP3NJpza3uowUi5hmtGyCLpbYUNb7LE79Dpai3iSML6XUwnA5JTioP4jJcKQki",
  "key2": "5p1Dx4DGsNLRNgVGEdVkSYJDjbjYv1RXNCi4AUGaJapjmejrJ2WsNXTxb4MnqGDvpBzPVFFk57S1nTfGWoxNL82t",
  "key3": "cajnedsYod6mVz2XYcCJZyNxMFM2rpJKM61kZzYBv7nWbNYN7Ar4xhM3PH8A53c5qmXuXXTSjPgvMay5WC6vKP5",
  "key4": "AwVwKgUZzC6WTh3RcEtL9nPQin6xE44jLA17PRSMEgaS1ituCNrKaQzmeHb7qVALFWxgWzpX4KaReS6RF2PJgo5",
  "key5": "63LZKrJmdJgFSzZKDeHKLHzNwqorwdFhxL99iY9SWomZyrwrUG7oLBSVtuURVGyi1WTWipZHrtVY3yDEGj3T1KWi",
  "key6": "CKy8kT2CjpSiWQGTSzirM89Uk14oxiBCjVWs6rq1okDtvYqwWSqFS5XSPnSmqPZE8prbAYqw2dfJWseb7aB2yEL",
  "key7": "4fo3G15BvJQbApritrGGzWPQmsTv39qxewrwa8rs4SMedJZ4dPZCfAnPspgNNqmMMvJk8ES8uxazzDAvEH8t3JB6",
  "key8": "8pDTsVv4fWh6cVMu7qq2TfLugbYU5ADZLjgkjWPwEHe17se7FPfdw6TQb6KkMa2VBYWixaTLuKn1Baz8UfmkK7n",
  "key9": "2hagsx9e43zBRNyt3hV4KGydHVANuhriNPg3r6ScCnFTmGfMEmDg64TL4Post1VXacL9D8UBovu3kosT14v9VqJ",
  "key10": "3Zob44m3qoYU8UagbuGhekZjMTFyoKNqQ68Gg348M7mcCVwoT8vbS4979Q5TUEdskXqDhjRbxSDxHXcPst1c3v4v",
  "key11": "2d3AHupkRNXYhmWGkrHERp9fiNB3S8Nn2PikAKRW2sebnjitki7mYPMZ44XM2Wn2LYJuywbCzeQu6Srro8R49Nz3",
  "key12": "5yunDaNQV1N5a2YGGuPhuzqkQQicAucJx3Q94bD4fHMPHt2xid4HmrksqS1xSuWkpXvUp4zsHjBk7wyZBeN2KmV3",
  "key13": "xkXSJzt1Uz7LqFmcZJWj3zuyoAZCpRNWWa24hpQYypTfee3vgPto9k7zwExLkM92w4b5a73kL8qGXuP1BTa8yvb",
  "key14": "qJYFrviNUVD55akvAMijY1ocwGAMpGY3ZBn3zPinZ6xpMxwhsJoUHJGCq67QRXargkVKHjbrfggkbZWnKf3QdWp",
  "key15": "3nEBLxqjGoXYrfLmCqRQCoJbkGw2KsLPhxyFLkdSdtNH2qKZd9HmtPb2BBy18qzGZe3x7eyjPYgHXP4boVYF1nxY",
  "key16": "E6rxVsMb26cCHX7RYyaseuSkKCoPQQypjCPUd3WkkkV3cAycxkzgvTSVc74ybHBVGhe7KG4VvjufXBDedZ4st8d",
  "key17": "5GXUSCKNBFdtkDp6K4usNDFJ9oidHyWvF1anwiNZVT3XynjnrqdiahE48grqJEyKprTHs3pXAL8iXwyweoy2bJ8",
  "key18": "5Lnm2xfhYc6qxjDqyB78GfB9KJUV5NnvP9RBC9oNK9PE1upTbvuu2XJtWw1xZEMkLnMzuzi659KMCn3A5QxdSB3S",
  "key19": "4E6Uewsyq8pvPFXUossuy6tpTyMjDWZTYQkb1AhtfXpoKmw7xFRyaRoBDkhxEdiAsS5As973wN8sdsmbsJN8kCc4",
  "key20": "4QNrP6Ctax4cPZykw1BFHFH3seC8VnXzmeDeFRuEa6nM8Awj93T4bKQfuRpzTAZXdKj8cuxQZS28EJkz3tTCKaxt",
  "key21": "5njvKC3XRgHpUmkQWetWNbrHNDdMpEzZ5na7AoQsj8PAeyUDQqihXQdCHt9r4kxPYPVe6xk5WsV4UNYayPyw9f7S",
  "key22": "4GiXW4scgpanQncHQPA5RE91ew3YJdFEsJyd1hEV8hmBeRvabrabyjXbuntwJydAVonC1WZLRxahFs6zxVHxbiFt",
  "key23": "5QxCZ7erCGR3StiKSZga4xACtSXG5tG9L9AvAzwkfU9X9RV5qPJHuohqnyfuKx9swEexQ43JTEvEjrvn5RjGamR8",
  "key24": "3QjCR8HiULQ6VFNode9q2hCHE4JVKxizYBiN3n3TRMaTYRRussofPNuH1471ofFDC3453FAgFR7Pd4Nfb9MUxxpZ",
  "key25": "4dxVTjq24zD6jWJAJfXc2MxtoJyzmZt5rYt3W7XBuxuAR2D6wpDcqmnrELmttv775RSRM3yjXNsfAXeqbYA7L8E3",
  "key26": "4c9g3pbNNuh2aZ9A3fzkMV7gXGZFsr63yEsfgx1W6WmQZ3dHBuaPJ3RMEmJsVxxUZVS7bxqkkf3LMA7bqt2SKBtG",
  "key27": "5kJQ8xCQxQgbYHMBddB3QEvGV5hgGzLr9dDt6UW7V224r2hn3EyKMc8xZhr2ZLuLUq4GG698yhnAuZYDNdeNc9Nm",
  "key28": "KK2ig4QPRMCUVM5nCuKkPNtiRp58CpRMvCBxSVjH6euu9fa82Zc9kak8GJkNH4iQoyxF7qBQszq7GzrvKbRRa2P",
  "key29": "4SQnVf54A9hNFwtRFPd7sTnn3iysXjKZzAu6YdBbsPCJnCrWZZy3yJonyxNvBwBESxbfofjpztuxnY5dAVRFLSF1",
  "key30": "3bmBnNr2vP5spktQkmwJTdM7Aa16T8Lcm1KDBPW16ioWMseMDK6F6egfbskC7NZdJjuUBYfaHh9WezZBZ3eqDfsm",
  "key31": "4RMXVBJxZzPeUVwFSP5CxXHjtX8MeF5iHsgNf7qrcg7RgTa82zMX79SceudzhZFEUfXENpLi8K6xXX27BPDo5Zxm",
  "key32": "qBim5pJmWAUPij6NgFvVxyyiPbUEqcxAudmeK4kyfNr4GUZFqf94KJBwdrWhzDMG7SqCKv2vGhYLzgGWv5TsVzQ",
  "key33": "YPWxMtifdM7hQ2q7XnMrHX5ft61p2Z5V7krHg4z9uNWwGD8AMtHzb7AU7G3dKZUg5DgzvWwMEYJAXqsBnQgYfWL",
  "key34": "5CgEKnc8fuYyt5Tc484ZpB4zUjM9EGAFfw8a93J57WuSDRpvfVB66UAcgN9sw6eaNMyMc7tMi7og7A8CpjJ4mxEa",
  "key35": "552oTeNS1Azk5aMDoqki7dUDzK6KWDkBMR7sEmGMD3Vqq45tDycjXRac5dtz2kwJBAtFK7Fv512hj55rYohHMGZd",
  "key36": "2EvjJ2bD7tzEzgvskwFQ3h1dLXgWEdAPHJrrUmWDMK12qe19RDyGeEhpDqJPcKrDQbLLAnDAcb54kp5EcYPgthyd",
  "key37": "2Z3ZrvnLzdJ5Sni5KnYpqK7hWJpNwFoVrXnZjjrb11rybVhFKmnyWuqLGZviy9TmuNY2NCYY9eD7qg4kLYnDp49U",
  "key38": "3jQEpNaWKCVcTYpHzW979Y95L8cdY9NfkQ5v6QwCfsgYDX3VKMtqCofooJXtC6HdzZ2YM6JFfYYXLGyi4Tj1m31G",
  "key39": "3CxfRD8YfUthbtvFTcXcFLXmsNJcPEv1BAEMKWM2krcLQ6DtDMwkexTR5LMmiuC44VTJgANcmXw65C7t1LpFTs3k",
  "key40": "39kU5oHpax6Qrs2UFejWXLBu6bSJCpUXWzdMHGQ7bzfEwrpGVHwPLMxYN6d8hBYcGN8j4RVpqaZPnRtX5NgusuFT"
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
