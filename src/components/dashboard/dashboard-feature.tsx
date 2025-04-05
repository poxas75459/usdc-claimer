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
    "2xak63U4w7CzZhnTN9aSm1hYVynX3RJoaWNrmj6GE1E45t65LbGZ8Qzs6y8NKukxoXTdVmCsggJGQPPU7BygDoLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48BAKRNSq6k9yXeuU8kXcYD11vS92JLtGhS4TBTvpWJZMm8HgpYZVx3fgdQmj92ZgGUzWLKJumrf4NSpbvgvoicH",
  "key1": "CWCAu8TA6dm5PFLuPP8wZ2ixw8mjHgb3vGdmHjm7QEg7yccpXucfRr7iaBYU5Q8nYxj98JxXNE7Zjy5H6kJLBt2",
  "key2": "eA5anoT2eKupdBoy8tMcZvjGbeyYS8rixfDBHaf9wLyQoVmSRE4p39eBSg3P52eCXGAeZwbmswTHVqZCjoeEek7",
  "key3": "2LKDoq475GiRZTFzri4viX4FEk2GxPD74dhvARM35gMTYL3JFoMJjf1nojfBkSf5mgjmwAfLW3pQLzgY7QHT7Yyi",
  "key4": "3ho2CDQxmLVeH2rTT9CU79cnqbRTjcwNxhyKdTT9o4dbKDyoDjNhLzacP8TtZummvo5zAVjTsAcqGFN85PExbVg",
  "key5": "5yyufNk6RX6bqJ46FSguawC44wpiUnFYciXxGYVm8MxLcL6JF3GQgipkchDU3TPFzdc2Mr4gFXooNZSMXG8dzLqf",
  "key6": "2kJMZFbT4yP4C87CvgSxxFZg4DSXmADfsFystEjcaKh5ef6vhdZmSMFv3vp3GgvHZSFRSu8NhdrFsTNEDXzCWFqX",
  "key7": "3S14m6U4ufJ44j5gZDswquYGmQDe9FZkagtRd6vqdkVE9pZG4XSXnrtC2JEvrBSi9uMWkXQmPjEgERzSLYsSVtKD",
  "key8": "4fd1JVRPXdsauASQ5avEfAPB9yLnZfAAP6nGgejy2n99qoNCxZNzmya4geaeDCbHuCdmo8N9SkANCCyroU1iAmuc",
  "key9": "3AeWcYfWrEyih4R3CGjQbFPHj3iXDmVDEv5zMH5GcwrgVCAPWD8kxAmTzPMY9qSSe9kpqBub1N4ChaZW1t2ohr73",
  "key10": "48tjtuMRC94mfY8LDgm1tyjxDAqX5sv9A8VGZ95MpPDma6zwNn1ta7pj7vwjvoGA6j4sbhJcmqdnUahKzrrJ461d",
  "key11": "2FHJrPaELPy6qTRFFotfhSaReHKaDPypRfWAycMFoGgksbr2uLgvmC7WwydFhXzXH73VNHT7VTHkLaPqZ6cnrEcu",
  "key12": "4qv1GPxBWeiFpAu6yf4M9x9ZGYRpDe5DAgvDTfoQath6DgNxqhB1NUq2KUw82NoTNo2b8WmW5gQEyPuRUHepAxQ6",
  "key13": "5ZrcJEfniVDTU73BwaFy4ZcUi16NvRep3vJ6GsbYcDErod2F9SX2BF5mRnVfxnk7JTDwao3STYsocWrAfTF6FeM9",
  "key14": "2iAxuTbCvQ5qYErxbV454qYjUNHm6794WREokc9qpKJzKbokcfXe4FjXe7mPX4Qq2Dy697mSHZiAh7vBmbHiaz6Y",
  "key15": "3c3mAkJDUJmLJ3LoQeUss6FwWYeMR5rNyUSMZJM9nidxR8ynNGEwWaxzYxrv3Gswvx9arN5PR4fdJ5E55L2dmxSK",
  "key16": "64kdFv1o6jxRqwcRFfpnRq5MYwQm4zQnFU7CPyhupYixzoqQqS3ZnB49CWudG9kEnrsr6ZUC9M9hrbKbQ9EGMvwN",
  "key17": "4ctbZHZcEEX9GSsmE2fGwF3ej8CgmLNgfd1MvPsGwQrEPUj8tEjvw8PUbrEhtauafoRRp9ZSfMwEaBYpZTr44wwo",
  "key18": "5ZMU3K9syvSXWVFwCKMcvwnQhggaPNTg2dZS8jxmtJj9mTgyqL7mUUtNF92YexLK19hXnEgDY2vCEEztqxUNLzpe",
  "key19": "5tagpphYc3AMMynvNQUfb4bUuFLHXfQnNiAVknmcCNAsT7arGmFg8puvgg5hQMLV5MudnXEEfYcHwaZML731RGdg",
  "key20": "Hh4aVaooiDPwTaQHEr44YAzE2eKCcoZVkSmYUvcSgYZCd74sNpn25Lqekueb8CpR32XfJKPjbomvwNmy8uai6tn",
  "key21": "4yE7a6mpALryuxNQ3di2Lc5N9SQsNTLs5K8znUJiEYZuUcw8jvBVuNNbmRBJ1Er276WqAgMxfw95JcA6k5Yu2j12",
  "key22": "3ZTE1HzbH9BFmz1bDtMjwzks3BT4GJWikjHDACjmaTUcQRUYy96sUa8E7m9jGkpKSpWJyCitqdD8PeTc9qYkFoVN",
  "key23": "PxANF7Z3cpnEKrMzZiLKCmgW17i5rHFc4LH32WRCJJ738rTpeqFivbsR7kMBp1Y3UuR5qMs5Rh7VX7ZpdmibW92",
  "key24": "5ZExwyrMh8KhxgsAbfY9Z3dAPdU1h2VNesRrFttYaUfWiWgXB2qGmpPqP4ySgwNtAZA5q3hZNet2o1cTq5RK4JS9",
  "key25": "2TU1s2mQde748xt7uPJ2LbYJGYnHyfrdrSwbU4AUwk23Xt23C2hWHnQ19PvTQAJLktGUyJqBFw7XanSopMACrbac",
  "key26": "4BqbYridKHW6J6tYdvHyMKZmdYFbuwxGeYW67YhSmAkVpCYbkK5Ein8zLtxxDPRPtE7UaeF5PvhCKkqiZAQS4sB9",
  "key27": "3U5cmmEcfoSB3AAHTDKveQziG6LCxWfy4bXBa5YjHTTzyJGnWHU9VXtr4DQFTQ6geGvmpd9tKoRWWaabZ39Wt2tX",
  "key28": "1cHHMgX3VGBGdGNr4Lakg5sqPM52gcQazkkKWqFMphvr2cHyMkeq1ZkfnZ7dK3aeB3eHy8Dtw99JENeLab8T1Lv",
  "key29": "Z6myd6oXF6aPbdD4A4ZNDnTC3h2a53MRQDdE5T2CS8XBuFU8cBp7x9PiuqSrjLoCYBx6h4DQtRs7YBToQKXdVUr",
  "key30": "5ppzgwxLR2pVVcYbkf8rF2KoTGST5KuNCbbYk3d1hHwkCdahQobiPHi4p4TPnjL7zQzhtMhVJjt15nsSPmuhz1wN",
  "key31": "tumamDQq2QycdKQqd9L6beChMbRr7U8XhVfK7P1c7h9TxCku1bpED7hB4QVMoFjx9yiU3TgAKc2wzfagDxcpTAA",
  "key32": "4phK74e9jkNSuymtkN2xKKmdox9rkKBbbUQxZkokhwr8KmWQHpBScqQMLMPecCaVdcGD8JhLPZWgALWBfz1iz8yP",
  "key33": "8BBBSnURnfJTpThbYyJxPHTdZu3JqtTRcgaYJgKNn3ZtjS3yf3KtBjaxs5rKMpYUstvqDCydYR8P95XUxZSWgj8",
  "key34": "9cofjKB4vgqLuKFczYEmoMu8ytPwWf98eQytXvJjcpzpuJ7G3Zro2kCPrbtjW2mWdkaiAbaJLjr2supcGQzufNS",
  "key35": "3ZxLYmvc569hPsYEHVAFnrTqLozR8myZ69ksfKzMPhksUiMQYVe6Z5xdab1PH7YQMrBF6kN7HZSjLzyMMQmfZqax",
  "key36": "4YdvTDh1UVwjKDwkf25EdPzhQNyw7L7wv6sZgG823FMMKiDoHFen8v2sGx4YMKYk4RScEwT8xjXJia8jgBqUa9Le"
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
