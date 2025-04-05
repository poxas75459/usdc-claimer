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
    "2zNWLcZTKrjRv4vfXzma6VfEp7yZFdKMmKMbdbFYG86doxiuWJUHKMxJuRY5VLQWTHHf76RZzSrrPnYs86PT2wD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TKmhWcAUtQe6K2Zzy7ycANhuKkKFdb4emBNAfNbZR1HtbSixWxWJb48RWmU3Q41jq6R7jsatkaGx7KkwbeU38Jn",
  "key1": "kvyqwxvFMSAbt78fHH6CpLAbkRxELRKMmNfjxmNeDStAgjNMWkDXrrT6AespDCX3hMCfKmXjRokFjkwCphnjC8w",
  "key2": "tWbBwcP6p9y8ebRLfYM7VCNxyYWsuYGgQknkecrddBfdZVUgXueDpzfwYHkaDiVGrLG7qh8kZuR6LFQ47qMfmzK",
  "key3": "3cZdDH4NR2SfpaMyym5t8LLRmWGjYSW5qo92TTwEnyHrdBm9LJRXuYxpS8Z6hYJst5Rr8Um9NujdmJMvJtbM3uwb",
  "key4": "26FLPuEibMz4m8AodxymHDWFRZKn5uSvQyvSTNMj8NQJhy8WTRPLNJUfGAAKjtdGvhVJ4K5WbDLJFe8A1eb479b3",
  "key5": "51bXehbF9jM1jPsD9n4pDwemu9vfZYrTXfkWkAxv8DFhdGQngo8WWPbdapyyipBqejysQ6hyn4wdFFkkmTNw4ctf",
  "key6": "4BvCtgTPQ3XAniEwjBmdE3yAxmpstZFMptD3tKzCVXumhr92s3JVVsvkvMGUDKwVD8dgNvjj6Fem7c9YAq1RGE97",
  "key7": "2vcnNByi5oSs3hH2jnkVSZNK1kmJ8J5h3v5DS97oxU3UZcusmPd36ZsWMWKQRuzbd6pn1Br1KAtE5ji9M6NWVUk1",
  "key8": "58Fj4Fcux86WszcG32CzcvjibFHmCnMzft2ndLLFRqgYezqAKfTDecQAbw7dwgUiYiiuy8HRZfhCHnSZhqAWjUHg",
  "key9": "5AkXLtYtedmDmbRbfSnM1mn88UX13PZFZqr7ysF6ncCZfHrbKGibgKewUzQEBH7wVDBdTt31JPSPYwtifYiB4M33",
  "key10": "52DWNyiwstZ46eEhRpb9MREktpkfMWna7pK1u3bb2tKaifNzHZmwENv6MHPb3mvg3QVyCp63C4CgTUBVU8HsX7ac",
  "key11": "28d4zcvVXwfgRLMX3iQvkSR1EDa9z12kuc9eZsKx2uhZVrT2NHVRgJf8mVBAeRnMmQKKkGANz1PFkXC79tG2m3Lg",
  "key12": "5cFMrpC4JMasJA4E7dHv29izMzk4k7PvhAHm2VYWoSUbo6XGKchPkWV6tE5P2bjaQsrUSvxT55yUM1Ak4uj7LNfH",
  "key13": "5JzMHwD5yCe6F5KP4ocR1chJ2q11WcMa5Af2SUKzX7ypA3mCAThW8SGurA9CvMy7QtYkjNDVXck6Sz6ePDYZ84ob",
  "key14": "5tbhvYmvt2vmJW5CYg43kn7XwPyaSUh4JngtuGpVvpqaG4ecnSkrPCq9yjaEVHGYgpPxbLuPERdbotQACs5SeZar",
  "key15": "3k5CPFhrpCmWx5aP4Gj1cBE8BJ6m3z47xM3tCrJMY7o7iocxbcJ4n3EDkN6U4U8UrvXA9ntfafCZxdAMpkD91CFV",
  "key16": "4QqUWe8GZkUyZAP6WB9WpVLEsBdnEzcWgJhzbpP5i14gBnHZqnsnVz5PeFKZPonWdmERJH3NP9V5N45me3fTGXwM",
  "key17": "4AL63RyBZ261ieUZYZakaw9EWNBWSJXT8j4LYDYd8RPWmCQZ6vadB6FXNbjYN7VSVQ7pjNCPsMZ7AJFzegxKyas",
  "key18": "36DMJmCDjd9fHZYYbeMW7iAbFgDsaXSPXyzBB85m2g1JfR57Nh69TtAU7s8ksFSh4QMc94CeNcCbda9352BkbcZT",
  "key19": "58Sbxkh9eHvLaewz2U6fUYjCwvZVLPBjQ7ux655u4cNrbYFrREdgMnQA1Hhi2ZgXutwTWKktbXReXsytJ9z4zY7S",
  "key20": "2DdzxsEE6GJyi6WSVHPUtdMHaASUdS9oRQ3VFp2NoGHx1kMNEtv4Ay2HyXmEizQNLAf6iA2sABTZrCrD5HSGjYub",
  "key21": "4UdQvSkdATJyxD3M3rogU3AvubVpiAywsmZbHW6i93x6LiVWDjxD4hHEGEEppfYjFvyMnCfQVScqogU7SLfu1YfD",
  "key22": "612KSrWaBgdRmGjAWFLcJSuTesnP3RWai1mgd9WoH8a3bYJXo66Uxu2rr1cj4H6Px8K72f3EojKR9gfKn1dSngLK",
  "key23": "GpQLtkCyARBTFssVgGjVLy6Di8RU8jkFZZhwr3SadCtiX7PWRpLEcMhuDFcJs7f4oRdq4tMccK1EbxiDoKnhARo",
  "key24": "539BPNXTEEs4xt66WaPGJCSyfXngmG1dQTEAESD7GPHEFzCyLe6D42EbHkeTxv8zqv1DXbcpqjasVv6x6KdL1miX",
  "key25": "hriKtxrNkEXKbcuETyfkEZPfqk4QsUNTqkVxDZtYDiQM5EhoDjriScKNKBqpPYUv7uP8Pu5dLHKDVRorMtVLsEX",
  "key26": "2NtTVw9Hc1rnbtm5Jcu7fThqq8kpudAsAoDsthZGWByeihWYgR51SQ2KYu16ri6jdWz2DuZ1sHvcccQVBmQiE6h5",
  "key27": "4zMmvAWcP4h4jD4NFnWJZEWvXcMwS2ZUzNRuLzkFxiDF2ZU4S4aB8gxSVvJ2mun26FpKBz5dzE1T4BS9Gn5YqvGz",
  "key28": "3znBgyRUpL57fkBvR5tnaSTceFzXaRvjcjHApfxAQHo4Nz6BnkTRi4kBMK3iS9HkMoAEk8jbDoeBxFgJY41SJAqk",
  "key29": "2ucShFQ8g4HJaHQsM62oHynEkajX6Njdt2H2PwQ5euVXWDarjw1kW1drqXEp599eGBaNWh4MP12nGU7zoWTQh3d8",
  "key30": "2UpBJ86ahWkNQsWJQmYRu6n9PN2GewMd925RT5jHH8M4vn5gfr7fbnpA7QWREKEfGZYecoD8SvxS2d9LERqrkTdP",
  "key31": "4xjum23QZ91Q9AnYKgocawqSbcXyLUFoYr8W6h81XYjmii2VaTZZKoW44XbH8Lhg8UjJ7R1DXmDccQeiL7m5nX2N",
  "key32": "YXX9BrtN7YtzgxkruBHaXdE7unUoqCEmbJBzaW1zPZvJdEpZpLUZ1nTwtZdjMmqFtA1iX8rHvGtvfrTUTfqCVai",
  "key33": "3VB6M64usyb1GSpkjk9MEarHWkw2PcmVNq7v1ykGu2NR6NzgRf2KWGN3K3GsgLm3EXtg4xp66HqxmPme9S4UJXb4"
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
