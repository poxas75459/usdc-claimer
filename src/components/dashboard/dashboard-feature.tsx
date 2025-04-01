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
    "PkTSppqhoaC2qa2PMr1enKmfcmx9Vf3G5D3YvA3iEtZHAQr87FyUjSEu1sVxGbGNBZp7WBr9KzbKuhivnb9qoaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d27J2qXKivELZfrHTTQG2epnmgq3ttKZZEwKztvxb5FHNJZXtmZPEKPtpxXU5JdvZprFVKpUHJtCSXdzYVML8Pt",
  "key1": "31QSbWxBYJ42CBmNWBSpuQyKZsxMPRGW19p4bDBiyWYyhizesQpnBBM7bcF2mkXHciHHBkSUYzdzLPKxKj9fABtG",
  "key2": "EpeV7vP9rGh8oFvS2fKjV86gcztCYP29bwDKoeWVKrgbjYwczyJL1LqELRFt2TZXifPjzXDwYXLGSeZxesDjqS3",
  "key3": "d4pahoK78rM7P2WPGRXr66C3sRe5jTP1UZR6Um99dVCd5Xsy4KGgubHZHgomeBzxsQzLoV2xaWrRSAGNh8zWDCV",
  "key4": "397DqdoEe7nWuSBxeDdVVZHeZW77cRFzh57Ru3VvEDhrfDALRqFZZAzyiwgUbVZcGg3wFMNg9CS9xKoHormAax4B",
  "key5": "5XtPvfW65fvPThYEFW3T5ihvWGt17jnrVG41rHfuZxjXsdyWCzowA6KpJCTLcpugy58nYcV887LjmAeLEaw5W8BX",
  "key6": "3Zx7f5LDTiehcstKTX4wfURLCxNMQ477WAcsM4ADspqBmmYp6cvKoLDCkWUgkGuJa8m5qPfvoY99U4NnXwqsykof",
  "key7": "4JYw1BFiq6iLyp7BHvGPVSnSXXdAvB12FkBeEAigJpnghJ5eMWLPLeKDtNcNrhtAqGhhSyx6ffKdSNvfsJxYD6j4",
  "key8": "2EWWVuhqFG1U4T4kpDEh9Nc5yu3GKf57ZHH5m6qe72UuQbZhpiHJ19zxWDb5z7VCj6soniyfth4wyTXXVEHtTvJt",
  "key9": "7j5QgAgdQ3eHVUnnx1dUBFXerYtyHGhTaK7h5oU835FsU7DBbQjKd1kBRRAzEiRpaXJSgfuKfMjh8eT9HdzAsqJ",
  "key10": "3UCh6ifM5LCxrVamvFTjAwJ4qd5ZeedP4pGV4DBZPcFNGEQg3hoD8xnbAoYwfHwoQg4SLv1pPt3vnhZbp8LA6AE8",
  "key11": "5jGsZrygg7erecx5oyQYNQe67jfap1DvXjPtjg64w3yBMBPpuDVKL3B2r7jyaU1Z3kZt1Wa2LH6qdJTsRdHe99RZ",
  "key12": "3jDUpV8JKqu3HyvFYjwRRof9P2ExnzrLQFBHGe8eecVr9Z5zzVwj6WsjNHub3NYNSv4KfDa8nhmh7tJkjRDPeK3J",
  "key13": "4rvZa8NZvgBcke6ZJzqspo2JzNS2E6662XP6DmchCpyyg2XZEYuPTRKZLgkvVq2XqCF9AA1cqmE1rapKX7MpYbUR",
  "key14": "5xicq8q4L1sExHTN3odUxb8QgUxDCCLruMQVM2BUnztpep9Ca1WKbEJtdNTaVaFSsny5CFMzbfVnRjigZbjioaDV",
  "key15": "KKqQgfJf33J9LpA9su42VSVTHw63bMUmB49WT3vu29qBW4STmoGxL5v7ezxX722ifBqHvm6x2yM6ridA6tHCC6q",
  "key16": "5Z3eW5gwgrdUGvYHAN7o263gjhnTUposM9o281VSGNt4b1Y5Z7YCHi4h6QauWLqbf9QmWzZAGgXcKZ6ht4heS3AW",
  "key17": "Dt8LJqVmUdRxx5pB9cVSYdGquLeXCJfAb3Uhny4KxqEdE455e4Dws5h8Bn9mKKsQpAaRgtaJ85VWCJGSUZr5uhL",
  "key18": "4r6phQTNQcWi7b17KYmW4LsehQFjBiviE4Ew7WG2EJUMJFAayrTE2jinhSo8ESCg5L4SqyoLLNdjY8nbyusBJpwN",
  "key19": "4J6QwADjn2EXEYyuim8jdKeyVerxpRMmQ7WS8vubxjorQEzSRqV444Hoxj8kFqQ3XpVRE28btfW29tf4i3NLtxfB",
  "key20": "4WUFWsZrTREWKCnJZ36j42mtDsmJ2VvtPuuZcUg4ZkEEaVWdQRqbMLgiiHMbxepagSEtivvzS5NuC3fEfqU5rmhM",
  "key21": "3qCNEXeJ6RTBKagceWspgCKyAUTXpupsGaicwEeiNkYx7SBQheZFwgKUSsQmuaTtfWph3oqn3c93e89ZStHrCV2W",
  "key22": "4z7Zmm3Nv61fGmsNTUzYWszY8td6AT3kkKqv9vNz44717JwwAbXnM5nDjwZyHmi6i4ZS7bwJHn8dAgH9hBM5CYhr",
  "key23": "3QgaTstgCysSDWY9Cf7GotRyhT5DKPkfxKW5yG4GspTzVzagXxqo526aK4ajv7zjjV2voPjQH1eNW3qrrNnbt8zY",
  "key24": "4i8RLiSfHarxWjuo77wLWYhDXvoHx27S3NDK8LW1mbw4T9am2isLHz2EpsBgbLcGzrfBUVRXtwHD5HpmsYRqfr9L",
  "key25": "3zTnULZVXfYwHjZG93dv4GtKCFgDtzBDA5HjbUJzfqENBNVXBLwGrxDqVDnEiNa42sMfHxuspP9uJmpdUF67KEY7",
  "key26": "55GCjkp3bbJG4LErXbrkxVcB9PfwkVRrjQH59DKSohUpjhrTLHB4M7WydrFwAWzJJhab8Dbxxfnk4EoSUjF4GWHx",
  "key27": "5Wz8cC9z3stwqrBj2MybD5DqE1YmknhgVJtQ4PfUmXyszEKseVntFHRSgKEUSLGnZ3XBDLXKPBj7UGMY2iHYke2p",
  "key28": "qz4syZ6sb1bjpo8MjGeVu5y1nHEk3dwEnmzrN7ARFbcLK6J1HBJhZRKVpWbvpLgqjvU28WS5HXHY8wqecKHPa2Q",
  "key29": "66u3nPjWmaAE2GnBaNH6eq6BU27dYDR3H8LwncfAUzLUNA7qoLcuirDdGzUgnHSWnAT5PsT4TjbM2Ht4Ds4jmsg3",
  "key30": "5CgqzXwRVsTK9FFRYjUChXxz7LeoQdWYSeNwPt4zyq9RiZeh2RFMeCNZMDRd5Z8Bvri4qZBQfgUsQqXjJoCVeFQT",
  "key31": "3UBeZTXwoe4F88ZZ9dwBt1WXksEY9QuQUZW98d8yX5ncgQfTzDSEbL2rra3KWqfvRQs3e7DRBetzNToMJ9p7zpu",
  "key32": "2J5TY9ygAzqjUnxMaV3hqcXB3L8mYtQW2pRCwFCV3esqRTtJvmVm6SfYbVekM8A4mXFypFb1wpqaLcWt2ZVPiZR9",
  "key33": "4yEGQ63qg45UQtN16rHzYj1CBwY3PR7JMFF1g1RVr4JpxXUQS2PcFST2qs7MApnmsp8CegFthZugzVKg4fWgSq8G"
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
