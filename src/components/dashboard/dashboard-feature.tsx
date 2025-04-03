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
    "r5bpHWM1moCvteRLfPbXtk2vQF9dXQtZrqgdnh77qYkH2TxXS3giRiP4bSLbpQMxjFcxZ3ct9WQoVh3wSefC1uL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MBjtAfZmxkFvPH3RUnRS6F51CAkv5MLhBT9jVnfPTR3Kf4fsHwXqY56SiKYhUbEwziStW39R2qfssYVyjErmwB6",
  "key1": "3DaRDFbKZkxycpcyACerPn3BaJ2qJKi1jLbehN7svvnHD9dg9SVcUEKfLzcZZdPD1Xor7Kwr5CG9Ypo6nYfQ2Fxp",
  "key2": "aQy6kEkEshHKe3vdHiB1MZ77LGaCoMBVwf9K18SrURJUxriD3yX3UK7scvBBEXvHUNpoHQFufSoau6Fxy8i8514",
  "key3": "3LgCnJLquFnm7qXdEkrDFavtmjLueDzQ6f7JVazEYstfPisReSXQbZXMNptiJbfcgnwdVFkc9ECqSnuPbU7Ybtyt",
  "key4": "2Em1zVGzV3vAgPVe5tuqi6wrEezMsJPjrgj2VfhQ8FEC169w4Tryzq4QLa24XZQFn3iESo6zGzURqP6HYYeVpc5V",
  "key5": "3BpwXjWoeNL74e17j6WA3pwJGWXNgzybGrJT5KSinynW4k5y8g1SvhUJoJ5EdaYRzAqiVzPpLLZZwzaBVtUCWY6j",
  "key6": "58jtwbDj25SR6aKVtnfv4L6p3SZnwmSuikc48oLNYRTwumPEd2k7gVeCYcGeKLQQrUZcurP82fTU1N1XMt2Xhsg5",
  "key7": "3BFbpvGLhQSVaTPFbt2htojKivCgDA7vLmU72NohRQMGgiPe8uZSdNZrrnx7DyBuMAoUdk6yaCf751E4zGptD2di",
  "key8": "53ypmho2ueMoekrSRYr3pPpf7AVePuGQPkemyJYUe5ExAvanV9L6JjjeRRGRQn5SGSo1xHCCSsBVwQ77wzVQpWbf",
  "key9": "3H4c8nAzReDBTxFi8jRDEZTNMXjYRNSjoTwQakDorfybapRQyy6uHkVGQo7XMGDragwFpYf51VdEayJE1h7Q4non",
  "key10": "UpcXMb4NZCTBjQsAk8Ho3WDrNdT8Gz4EeUZRk7y3PFt7WTh1sbiikbnVBHRcQzXr8ZbzmH7U2pGKD8RLvvNptDs",
  "key11": "2AoFunp5zP3dqM8qvBmeV7Gc9XiBtVL58Kxn1nd22n8envnjqXZMpqqwe5cFs4k6hhEnDYwgahQNG1pbMSmcZjUd",
  "key12": "9tfEyGbL7mgRoQujmojNcjjsUVZsHyjfKkHZs99XaU9674qiuHpXxZT11FzvUzK4jaWs7gLDdXL61yZVSF8ecM2",
  "key13": "3hJjj8guPpyFjBUSMWgzGv5jmT5FVmZAv2SaKQQswjBUnpHfJ1TeZRsaBvUuRghoNNCHuVUHzC6i9ouesemju3oM",
  "key14": "1wwJx7US3kjmuorwWAGtbNUD7f6tvmpAAVDufXQX6r2GAtCXhef6f5XmB7tswed6HkUWYUxNP4ebEANTindRHJv",
  "key15": "21uzRLN4kVAHG9sypdeV7cGpZrNqA9tc3oQPja2rJ776RB52cnckjLjCnD4nLgudTgMDTjUYBMTEH5P9sSfjHGEj",
  "key16": "4HAot6eZfaVuqiVgDAjGv15dfH2VV88sNxErRYKUASefMmsmw1zxSizB5xJAQNjrCM1c9PTcgHvSNoqxLn4LT7ZZ",
  "key17": "36W2D1rfwB7rbNo2FweEHEknFDqYDmJBrLXLLqFkxwvgDsArMCR1p9emQxzsH1QrCmvHbkAxDNnFLw8LQfrCqhNV",
  "key18": "4pVQdEpYFQzTW9EKggwhCNKsv6ZKdjaEpNQE9WkrT7uWvcAtThgToURDpwEBBnDGB34cKN1AU9JAYyiAkDN5PX2w",
  "key19": "bPqpZsu29nvbTNaBvCCPcW7Rudaw7zh25dqrdXbEmX1wiUMhhGpwD1mAHZBQECHupMWS6YhtecqdWtmZ4w1CYfv",
  "key20": "2jBn4DSSDs2NhJ2icKpBVYwj57zBxgvtKNGkLMQkAexJhmymYV8h8J13Ky6UXgGpjFGN9yCdLLLv43sCdvUheUXe",
  "key21": "2hGdpYARnxow66Gxv9tAonJbJiTjcV8VntUHeZV5j7hpgKYbLwv5pxFfMwyTY2eUetckBcXVfK1egvKkbPwGaWqf",
  "key22": "ZtKDjgwwyTpuFqC9S3yWbUvKqDjbtzuVvJ1PQyAmSVDZjzK5a5RM9VVeSTQVKt5dGNXEh1yAgAbYcrZGks1EPcK",
  "key23": "5eQ1sgEaAjWVUGfWpy3c99gpcWGNuJZa4XTz12AmXF1vcHr23UGDTiynpZX6scEbvJe4vf6NkM9p3TmYUN9zZUTr",
  "key24": "2VYTM5jT7NuumKiaH6rWzm5ZPsxXCysEyTRibwUgffPNXMa6JJJ3NJPb7pqjnwobvRmVFRBoD264xFiedhBhAugs",
  "key25": "25nGrnidK9haz3GfidZTcUpmjs4EoVWmd5D1VfN2ujst14jwpLfLa9a7VLZ2C2EnV59K3d68JPz2E82tyL7nRGag",
  "key26": "5XWGDKQwmVNF9L6HXet5kkrxxJ7Z884bjPn2Dgsmh5pV8TedgGmSUN8QBKqqrVPceHJJ3tUV4rcdQRtBAgJVJKj8",
  "key27": "4iM8gz7x55MEDerrGNDi1oZbjw2q2eLBRVtADX4FxJmkJx1WNwt79LfaVfoHH6jG2kBxoFyBKgWpcmFQFhkgUQfq",
  "key28": "3ZWMxyHRoerXwQcoTgeB8T5Wq9n3sMtyqMohe6UL4RQYNbP3j44VRYzypr5PwK9xS2qFTZ4yT9djRc2TrhjvGRDv",
  "key29": "5eMDfqLc6gS8jfL9aTDaPso5C5LVg2iJv1FCRDaVMDvUTMeGdttzy53RR6k59SaZfDZuKiJbbWDRAVYcEWY6nv1M",
  "key30": "3gvZ8x2kpSLanzysVMFZSX1JduimYSepRjMhDLRzkVFqRf9gehrd69aNKwKg7CP43GXHGeTsRvgRRwxwAepHDmH8",
  "key31": "4C8D4vVzAqTdMKYeZecmSr9qWWMNNpauPNJFqoi4wXWBjhgNPuLHpjdtM4DLryXvy9WzUf3niAxowFVJNkQNBobS"
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
