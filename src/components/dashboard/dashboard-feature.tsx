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
    "dhX2yC5jZfFrCT9yCabr7WdT3EeA3Py2KMUJCq3u9gFXGXAxjQjAPGn7a7WLfdEULsQCdKVqGMNJg8RwgMVCARU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35yVXEuYL8jREgVrMp7dJCSFLWfRnQuYuJPFSGeUAxfPjXEdbkNNsFokBA4F679bvu43tDqk9oDYy7D1K6tPBnkC",
  "key1": "rJC6eZHPe2LbnEuhCsH8NorY1PH5o95jrQvqMWgU8o82XifgWvVm17DYXSdk8Ntm2goTVsnmjJis1VDtAULaoCb",
  "key2": "3xvZVoaEGF9DVUQN1knyRYcaFDL3wPchvm9pUwGc7JaENxPVmwHQwe4CywhwzLTUjvoGJ4eFsucbzdw5zZXjAvyf",
  "key3": "4znaWHA4pZzBNTh5qhh2491YjHowBC4uF8iNRNE84MVo8taeakkep1zDnQzWqGizP5sfAaHHyrwvRD3aM43Qm2xK",
  "key4": "358LKna5MhwxSPFnr3pDL2sVPPjyddxE9C9o9fM8VMGyZpxqxarpbqqYA33LrK6HYAqZMiAYKrD8MU3bqijdLoF9",
  "key5": "F6s8u93r5o44HX5FcqLNegyoFWZsvV87syKb73bABqUUHrGM7emW9m36JuqxAE9KwJL5hhdEoiJuT7agT7nBB6B",
  "key6": "RVzfCijSxxEK4JWNhyyopYR4ECDLkJgWvt7i1YhW5P6qRksiMUAtcdk94PVZbJRjXQzHJAQ12V9m8yVNExWyfDs",
  "key7": "36XwnVgY2JpdZGt89fbbkaCZkwLLkfjn1uPrgGqquaKp5xE3pvDYxykwXg8qNfxmjxBhR9XYEXAsh8V6yUTRmNXx",
  "key8": "8XhfYPuvQYxA7QxgSXxcHmq9fhLy75xowmYAz1pQeYA8cfNeGCgM6MMy1DPe6BCZ5aLPNKjzwk5ZU2ft9vAZf5Y",
  "key9": "4qbnQnPf1oQ8Z5KyehTd1AJk6w4iYRtnkMnmooumiauPx85DuJfship8AnTcDHD1SroiQ7QvC67Lg7ao9mUhniXf",
  "key10": "4HQ82L5NrjTXwJxkCiXnnf4QKoipgKZKswMQa7k13kbNFxsVE5gRdExNCvQ5nYW7AxeHDbWWmfJ5hHfK3pDWEBAM",
  "key11": "kifx84cRbgPxNhhwpgz5GvYApUopcFzCa7w4JFntvUFpCJf3AG1UTkCfepbh2V4P6cvbQhW7WrdoxkAxmTrnLQh",
  "key12": "3HnMLfEG8wBWi27Mm9ZVGU1DT2YfLmZwPWiadoeeM4Q2e1pQZW7b55EodePUbF5rnD1RPSRxwKMuQdvkTtqCNeF2",
  "key13": "3C7hZijmXvfhmEkpHnxLQJ4VfnQMjUXNfqnSsaSf8PDJyP2k4vg7M6thuYUfzDLwWSTEdnej74zJTiEaDy3Gnzp9",
  "key14": "3Fgtc9kEWCUm3HD59JHNShuZHzggCi9GTmpRbsEsE334w5ywALThPq8tcytud6Vww9TjYPZ5zHVoV3gtojpmfeyP",
  "key15": "3LSiUa52b4GX119Dt8tcMcQhmmpUpgSXjKwhzy7J5vQSDA1rVSYgL5kCqqeUnYmFvwTx1RrXag8fiyQzww7exKbs",
  "key16": "2dX3qVmUcMt2kZLus96WUEtw9qD8ZAw3KGW6Ha3CQdmkpFeB2GX6GCTpDR8uziyaqoTrU5VEM1RXBbWW8wYdUnqH",
  "key17": "2XPMEYCrpTnzowyM2ZZAm553zkdPac5Cg1eQkk9sQ697ZkfCgrANDLgYSLvh8tjg9s7CwnjLgD3Evw2H9DuYq2WG",
  "key18": "5Rphd26VcWfbbCnRgSbwXzJwgZ2zQxMqRiViw1zHwFz2AdYFALMWd6jfMoWYVFWHqrjbD7QdeY7D2iGpSHcrPvYV",
  "key19": "3oVvLaTWYrKrb5baNahNjNtXh9XCb1doWwopgjP5DVNQCFKWLWP8A51G4SDDgR1uydo75XEqnV8K4aboM9uHqks2",
  "key20": "4EhoCQq1Rakuhz5Vax9FP7A4YucGXTpZiQE2ut4GurFNx7gfX3utb2w86ExqTbtBnfXUEEUNQXradocTAqMbje9C",
  "key21": "3w8d7K3cLgaVexmcvTGEucCvfRZQkjUKRfSmPLWLiKoxnKLABSQfJcuwqU9TST2cRmAqUuLhr371jrNZjWT6h1cV",
  "key22": "2pXFDCnr7nP5bZDFP9T5tiXptLKXLb1ptXq7eZX8kv6So8fZMYbjKsttjfWuq6zUS1siEXNFPrzckYLNdwkG4PkX",
  "key23": "2JN2owW37Ux2hvesAHsaHRS4Cz9rXPDnRzbu2e5LH2f9Rn6VcmcCPTdhCyZS7vfSiHhaMXce3nBo2bBdsCJELFoc",
  "key24": "H4jiwiNbixQThr2FoFm8HcHgNhH5EouBFqEfJJ2sNMrKiqAyipFB8RdgdPWWWRAnc9JWcXH8pdf4HsFEpbvXnPb",
  "key25": "4PqeSh9mi2eyuNNu3cYee1hNxvoPtvnbFWcNEMQnPUCDtZAUNeuHCRarBubPg4PZXgbW34DztsCvVBXcCkaU2Dfr",
  "key26": "2TDTLTcam6vjkKaNbXkNJNR7KzydoxB3a6mzisgYxe74dwwWJ3RL3PvmPTt3Wysx593rr9gSoVJ2Af1AtX3xY2SC",
  "key27": "3mVgyLUyKvbphkdMCh1LraWMcXKdpGobRunj7wYfYhv533woPNgMp96SDwdKmCnyun5KzEyw289oYGAzZG6LCwEf",
  "key28": "2M4dEcJTfED1Gh8uubYTFJNniJ2qWehTZL82sTWbvhfbJXWAFVd3AdiYJgvE7JSN1G4uTyiSGZddXzM3ZwHnhtXH",
  "key29": "3kx3fSLByZJ2v1oBAQSQwaRv5UzTpdejuhKUPEW5MpdzCdfQ78z1U23w1cDD1koEGBY1UdJyzxXz6UgnNQRsqYG7",
  "key30": "5aa6QhWmTbx9sN5wHkFqpAb2Sus8ZRhgh1HGa7p7zhawAB41xRm2f4JragCDWnA7Ckyc23pg4RDJ7bWML29BnJFd",
  "key31": "45JChMQ5qGSnbZXAtsaMmaLwW4XkzW7ac2cNAdLkQcEECGKNWFu7H1Sq7VWYvokdgerFT4qdMP8ECP2Nd9qg6LLP",
  "key32": "544H2SKuqBRjVodtz33MkPhmQxktwTfkCCAxd752Xi6xcq1SFgs9cmt61kdWwQXsztfDmRqfHaY8cedhKyFr8s1A",
  "key33": "5r8bv6AyMrqp1cA2iayZbq6ewFdvazkW8qd9E6HMjafxiTSuMxDsotkMvHBwuvNHsCeTypoqybWqpcwEkib3rJ6W",
  "key34": "yKsRMLwYuo3SD2j3JUkzsDogmPPiQp999Mt5yDvQDC7KU5ck79paTRsh4n4k3URmYPSkfFgTBJTqQwWBHaQx5gf"
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
