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
    "xrc23WsxdWjRXncM9VSXvN3pprWAt3zUeLGE3Jh4xqbQAmqDj8NxSJHSDKPhTQPnUnjEZmU2CxDFveZsgtpbGjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a4KdGYMEoD5jY5gviWoRz3gNb3UscJ1NoG5Je6Me8McXwHN5W8dkV3LmsJy4ry9LgK9EAqjz2DJnpUkS2PQT6R2",
  "key1": "yFAjCxSsDE9nPU9vLwvsSbxKkbZvULA7uTw547DCzmJusZKFsGi7AZqM7VCszXTZf7CSjxc3rop9RiM9eKuYqqd",
  "key2": "3Fu4dzeZyG8mcsNB3GQF9taQ4hMbtJFk25AbDKt9Ux1oDDUzZwZ6mHPtqX8Yamt4B9AQe6qWQV2DLAF5SQURYD6h",
  "key3": "5cDkwazJnw5BbFmSxjPeqaMRv31EGZ1swwRJFhgwgo1xCkpCh4kpuUuC6rCV1tuPgjPoQYwKPLWuJiptWAiHmVEJ",
  "key4": "4JYDW3FcEdLdaFoFWgTYMxTpf5KdmV91b8Wqg92YgaAeNutS3sQmE9LyfKEE3kqUZHnQRedUx2Nkn5vmiZakiY7a",
  "key5": "3nBeWWoHfCRdgvhD3DWzEepFGqqiC696sVxiL5ABv3hRncPpJ1hVZqT7JjY1d9ArUHrqN4v5979CMUCLyojCjwvb",
  "key6": "3XT1hdG7y6pdVYCCkqPP4CgVG6vpUCpXZiM7kC5Xz6dMKnQka3zHsC93PVABy7sCPFXaPiti2mMbNJSuiyQqEwbi",
  "key7": "2tUDUMKJJGvL5snZ6gtheyCXGF4fheRSsTGevhD4GJyMARfQrmPAsR4cGQgbW9wB9F7KSDEjgp23AiLF2zS1V6a7",
  "key8": "3tE1NtHDshWTMDKSLTSHmA66fpBQv8UFmhbUBdLtz4hBrPzTfaFSnRqufDQ46woUnWWgdfqtynaxMxsgj7FG5Bn4",
  "key9": "4Z6TLWNsz5moYuhKiW67p7AdSiCQBkup39Hy1K6WTYM3FjzsauG1JuaHeAdDn6yyPoo2QZnr81AQFyn6fUXbCNLC",
  "key10": "LeGpFhiZ2e7gKciScwP5uYachjdLrhR8bH3rEd8CLqhcJ11sPSgbNKJ9c21B3EPEJ6mS78DBvR7j1bF4mZeKZvt",
  "key11": "5Y9hQ689HUqmqTTiPmB2eWza8GDou6Q17kbkA1zZ3wMtgQmVJoaJppTyRyRBEFTayfN3EiHxjaMFExKcYYn7MJme",
  "key12": "9NfrobK15ChFNc53awdNRw3c9echNAbw2RT9pkZmPMu1XqF2PRAjnv6kzqDEG2ztKxui76ABoqiteLHRQdVjdYk",
  "key13": "4tmw9rsxBRWdJkX4JXoWdT1hDuiLvxhhs14bcz7R7ZchuGtLLQPXu6VFHZRz8KnWEneX7fyAmTmTZ9tSGjP9abnZ",
  "key14": "4dVAxhiz4NaCxUB3SMonRmVMLxoCZqEtxNdNTrrXBw13ngTQrdXtyqCi6Vwp9t28ZzRpWog7nxUcJbwcZGETrDh6",
  "key15": "4W6RFzVpZkhZvaZDogawX63PkDQQQEZKfxo7eFWiexgBa1m4tYo7ZQmdXa1vvvSHGqjZ2g9jp9cbjH3KCkLwN9oo",
  "key16": "415jVTBt5wtbYCGgcMJ5EPzEBuozZbdAeCCSBNTSrRtr9GREsa6U71ZLKaR61iNew41Y3f3qMyrZ5k8VhJ4DZRAC",
  "key17": "2BHGKZbgh6bh5V6Q3axGjwHYWdtjVGGg3G4xUTfcRT85gNGEyRtwXMZmDu6W78qGS13iiccwJXjMu2XHE6VBV36D",
  "key18": "4ua4SK8gfebKg186tUyVavafX272BD5xzJ8q8cfL1CVUHrJj7M6iqZKZ3FkfrYAwW5TqQSGZRCsJnymLT6tZACnk",
  "key19": "5Vn5dhcNzqD5JZgPGkaFYoB8WXtT28vfTSgYxkm11aWhYwvv6Rx84ZbpvvSAfBbB5xbYC47dQjCaNnwdHapB4RVU",
  "key20": "2fcQrihsi8S8rqKU4LYcg4CASWaEgzEzrtenCaXf6vnJtjYzWbm6EjDzjbXtQq7WYbTRCpGezeeXsUDLgJoS9AfB",
  "key21": "2V81rxiE2RawHrRiQ4CPkd11Dk52bfGgQWFjr7Xz43VJgbbopNiB4fvTYByVesBx4FDvY2vUbXhFkjPkVAU3bxcj",
  "key22": "5ftpXuydvRnM68C9gZ8CeTRyU7tN539vBRBiKH7o93hsafqTy78igASqStcZHQ79Te1BfYinUHaBTLSXxvDHXcnx",
  "key23": "643XuHpkX6JZDxCuirrKsok44Ng5sj7GRfCswSqRoHuxZkqm3hUxZdK2qLM8MtjYatq8Ue8Lo1q6TrRxG5cmodfe",
  "key24": "qQvR2nN6LTGdXR3iiSTQ1tLixwExoLf7NaRHewnF9nToHuqSRQ4g58eZJdARQvt8jfNqNtJRZp3698ttiUtu958",
  "key25": "4ZsKS6TWxaMrUdoySuYDbgjmGg6uAy7z36vctkjXoPhTzJpSbXD2ZEk95svhSc3ueCnNw1Uu3qE31ZyfNVRBkNMQ",
  "key26": "3HGfGQLoLZoCBhDqrmrZoKwLGLYxv2irzRgh85PbXzgSP44QFzqF3BRz7psocUgSNtF79p2KQBGEpt1vtbsjGJvV"
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
