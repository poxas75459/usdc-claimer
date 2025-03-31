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
    "2BcUgm6XrGiVagV2MBBWHDeiy5deBvP5ZmtqC5ym58ij5z8fdqDc6BnVeuBztfXnnrKuSoxnHer2df5zMZuVg9pW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7A1RTkoqgZHp1uLHuk61mjrcbAv5ngu4vSejqYhtLweV48gPKk5KAiModDzHLHH2w6AavePoFTdgdF9NUVRb7F5",
  "key1": "PdcGLv7Bezz4Cc4edZZ3wgiCz1qzivXFExZuGtACCNi97aecWuJbLZrTbJMA4WcxWPL5EQPWW9Q7UfNG8A2iFRb",
  "key2": "3uKsVj36G58ifDW9yKGNECBTzzKDhtFLtoKsMya3oVYYFHFVpquh3Ay1ivcgHs6eCQo7kmhoXMYP2kT4ma6u2dS2",
  "key3": "37pMo9a6URxpnfE3YSwi4PbRosuVQkX2MKVomRDnKcdLq2RraEUx5TYZV2N1SFpGY1zLkxTXKuwmW3UGbXXvHH4F",
  "key4": "xApsM7Be8UTKZFztFAqRTkkEJatbF4APfNEz1gSP8RHdU1345yAdVy71FPPKr8q6tu8aJ8X8id1TEHLaFWwLzqR",
  "key5": "5au4CnJzuKf2qNtwp26NSteA68E4xJL3VuU1w3cHckaSTkBiF1x5GTLFSdK7mUZpvMrT3YcJFZFTfKwPuTQoHq84",
  "key6": "4uDuDjzorgvY5WJ2BNvjmFuC3hMUru3sVoZRqDsjq7dc8oSPMUSj8R4MS84X2XkXPQw2xuypxBPD5QKdqQfxLj4j",
  "key7": "4KpMBV6PDzxjW4F3jqoYWUdoaF4zKFeL1ZkNzLkYLz4zqddbGPR5zwqpHV8t6A1wkeyu66QauKnp1aDZarTcdbG4",
  "key8": "26uK7DiGkfRN6kmimtdysV6ymZovBVXHdLpPcDxU1qvyBwXsR6gQPuSuMPBx5pP52wpr5Ts9n2ySDgEkMbzZKJYG",
  "key9": "3FcK6B9B2FE7UcEFPLzwFsudLRmn8Rw4jknDRVhz66J5k4cgg9yoX4vQ5SBZW4DjxsXvqJmRpCmhnfYL7HaEghxG",
  "key10": "3ETAi5J42hiKG7MuPK4agwhLLaufZ2WiYHbCETSFfEvdxvuYWEbRU4t5TX7hrSQrNfXVdyc5aCBQpV6PsWAm76FU",
  "key11": "5TQCN58hPP24wshemxyyVQ66LNcGqM2pqGDhda642448FTcTCij31K4hqAG6sFirTw8rD7hUNRmQcBpLRvk6D4j6",
  "key12": "Zz5rAmVsMu9Zje2EPEFDWpq9b8dSoEzWSuvkAurcpu96Ecmi3Adck6Gr5pwQWNXxAbVEf3mrVTmTLbfUsvs4K61",
  "key13": "24fG9yUzvWxrvXqtoHkjF28DKtMwRS73WMR8b7VpWLTKWdfb1GEve7vxtdAp4NkQTAnCsjA7ezKNMMKnh3Qvtwx8",
  "key14": "28gCoWFDoHRKDmLBEzUwTyu841nLRAnqNHDxq4kLQUrfczihkHH8YfxKuoyrysmRMJmna2ZUuGnxKeAHeCqX3L48",
  "key15": "4ug3beK2du1RNyxFgmeu5SH6QWVpAk3SNAm8JUZ8goznVKAELwEN4EKCfyPbkusJRGVduvWxtL3ZQbskYNLAtASE",
  "key16": "5witBA5QyarSRKDLUQh9Dnm5Y3VTy1Z22vA8R1g31GWo1Eo4KE6s3Jbp616dfxr8Qc3YeL39uJ4Yupzxquw9Kx6e",
  "key17": "5yZpk9Q7jebBAJqSYQQssLRn8CB6Q7RfWDzG3LskqqFtanumzv17pEuzgvJqKQmM1xoLLVq7KYrsGe6k9Te9FtRQ",
  "key18": "3bkq6XZTAfCdFFkzsF3mbvm5Lbrgfu4MU3oLC96bPVqjKGW7yiEtbxiHZsyvxkLJd4MYgqnwRXWqYkPhEhWkgx3n",
  "key19": "2TqJQ6HtPn8czkepnMA7dUrqT8swNewunxaqkzj5oX1BiJjEj99puhDmDJaTeeRuLZfHFVBk4526xX2mcj5anNxz",
  "key20": "qVi9vwAG8dkE4kfnebS7PRUtsYSa3BqAv4wwdPQxsQAnuBsQvRngY4MXPVKEUTkYhEVG5qiHHsy1mh1zjn2VEFU",
  "key21": "5ZhEGh4j9s7MiwS5MBrgQiWDqXfmocVMdoFewYsyeMorFDJ2SNAZ9d9DtJHW5JxF8hs2kS2bd5AMSuHWVaAeiQZZ",
  "key22": "xvMSMdDyxnccjDqHveKC9RMfKCSnbFrB8bGAJ6zF3n7Fq3YCSjovXKfMiSqBx9UMn9jCkcVUUdm7Vpv1WMmBMPq",
  "key23": "679AE25ofj3TmPCT5TDwdzBNmN21wMFbLJRUZVFnEmA5QwHdPNXS1AyStLWWuDnGwQ38MHCpq6xLXGpnDacmWzua",
  "key24": "5zEmutb2CHHycKKct9eYKDfsrU6eYdx1YNWBafsHftjFYSKcfpTobRHkjF6gq9qKzX82Jw22kxi7eBUUMisydZcV",
  "key25": "67Y21UPe9oGBZWQs8M8pHtHwx9onRthEru55X7zRZWSJhpfg3Q2CNh3Tn2TV4k6gWaiwxkdm8rEraCDzCk2yXWmz",
  "key26": "29PmDH2snjWo2NDAZbtr1Gnqfjep4DF2rug2dLBWzoCZpnrTFCf6jbrUVcmBoJHoNkAX7716Kpj9U3ksLLM2etvm",
  "key27": "22gG74qp2QnZwzNGwLy5RDqQLP93Hav4JeaoLdEh2zfp15BgXcNeFbztNoroNkaWP1VHLvdi8TZv6MDRx33wpL9y",
  "key28": "2sNQ3bTSstBP4HyWc1mpBPd7mMnHPfT9gG1hxGirvxKSz9i4X4jhjyT63HPY8sBhFzNncAVrFeTeLyNykyVZisRM",
  "key29": "5H2kSHrsKAGpbrxzaKBxWgaYQwLyxerT9zGFs8GWJczijuggma4gg1CpF4fHXFD6VnxSjGFvApgvM5tQjQZtrSKb",
  "key30": "4eqv4Ym1tbNR7y3gDrDT1xbtpP7GVKDiFDQvVCp9jrU5HpuqfCvKBfMys6JwkKgGYhhMPD8iv9T1kHd1zpQenWVr",
  "key31": "3b2JK1WcBx2coBRkmyS1P95ySb38cGugb6ikomFR7WBA4bLKB8rrNbuuvY8CVWuMw3JTpGK5PWrpopTXqdg16MW6",
  "key32": "gWBo3VLU3io6arcyPd21F5eJvwrfJNXxdAy1PN89iLYhJoz3m6GTtqwRGDobLV6CQcAvrMnPCAoTq9jftPCvYY8",
  "key33": "3D3BqAfzevrfoqanTZtqYTs1H6fUF1H444o3hn46Uzq6m18L3kwqsXy93BTqUnsVKGTW1y2qDDa5jLXVjU6J5mR",
  "key34": "54ayfmXewNVQ7gN4Pz4veiX8bXHrrLjZHpZMj4R3idTUem44cfmCLrQEH6nj5dw7do21MA8vfd6XPgW1PNZLy9R4",
  "key35": "4gHSAtVzn62fPDHKXq7rMQfybRdpmaiPmxt6ALXjmmpjSc5nfCqSSSmUXtM6V7PTZ38BqJD4rPmScU93D6JP5ys",
  "key36": "5m8LwVxwC8MqdM4wPLMvZ2fd6RgooYEuHSdFci7WVjHgfFLSDSDtanxxidfzhDgfX8a2MxADUq4pqSrmENaiwMZB",
  "key37": "2GARh8FCB18vg7YUWTCrFrQvQ6cwhX4Y3aMWqaaL4JT5HaQkbhooJn3x9JkPinueYJtT3c1MPnySxQ9Bhr12S5A",
  "key38": "4MJxR18oqnQhTVnzdTMtgxo4Pm6vpNVRnZ6epvfcTmJKCZ8JA8YUpZKVYik5E49gudXAuoo5L9HhXzPS9ZyMcVTd",
  "key39": "34Q8hjCezY7XjtNbpQ9AM3vc7objHtANTiPEVLdeu6kgHSjD9SCYNsEEL6dFP6udRvdhXq3qVjTiMr6rXhip75xU",
  "key40": "2d78KinefGW1uaCGNBP4V9pzJNdAoHqMcNJHTzK9S249NHfTSbDfFWXPdy8xTkscyFasza4pnYgT6GmuyrRLphBV",
  "key41": "21cwFBMppupdFQvtAyKSpBqEUcurc4QxyepjKWijwYKjRdMr739uZsb6uw4vvertBaX3NB7KDMKjAVKUizC4SCaa",
  "key42": "34zj7xGvRfThoqd1NNK8ywg2dmv9RSLUWVqWWmaE3gefS9S9rf2APLRQtrVbf8sm3pF3ofPaj3aYiRz481eG3UnH",
  "key43": "41fxdNpgkBPeH3YoKVCdJcbfjq98xAJQVjCHeenu8YYmMmi7ZABtNmdTqEzhPREDwEHhnxPGAzMmjSpjUQ2tRxWz"
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
