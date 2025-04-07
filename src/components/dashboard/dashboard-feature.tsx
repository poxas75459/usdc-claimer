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
    "WwFGhLxqaJk81zjkBrCuLTDLdsmJktuvMSCTF9onKppKZtPmtHb32W5wnAWDcT8WbUsibLbx7apmmUmvquDfCQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZxuLtQpg92wY1htCfgJ4XagGXCKMDvZxpbfUddfCsqj8jKQYwyWEP1fAGSqAvwDzBrsGBALFbZ71n9JyqumEHSm",
  "key1": "2rCuXQNsnWcHAuRt8VqfaCfudw7GZ1SrT74syK2J6ECziNrnpDQYDAPedK4tXYrbB9SU7Aj83rGEx9pbLJwhNybh",
  "key2": "5dxkbhcgzL1ia3BamqJb59aWboSU4tGVYiKtWGpyV5qeHS8EypUcgmfgVGFD9kBo2zKjsU1MsC6GsPWBYX2yzKNZ",
  "key3": "44jvAqhWXCVPYH88vdpGvZkNSHbt5AZdPUeZHPhUvWmtyUs2MHkTWeYHY3cQsfg34JNu8MMbKZzXmtzLK7RQzxa6",
  "key4": "2jqLGcgWnAbB9pGYXkUz4z3VFTdxY57FUUuD9USi9CD3B6WgSFXx4yMyCkMj4TCQ8X5JToAYeY2bXyHx3ivUAPXe",
  "key5": "29uyP4DG9D7MD6EnR1KsURDFmNxpqnFAAQWHQNJ2FYZbJdsWtqbybQSF9HhugNax5sGC2y5SjMkxPEA1uQ6ftxJ2",
  "key6": "3FfcZbCywvtgU5SneEXonhF2Q2QAvvBVCHzcvCPjpWWhijwbLNK6XXHWAD9faS6MvpMkuG9HxATkJNeP2abctedk",
  "key7": "uK99YAFtLuyjzQx1SmFcXrhkdfeppKztUynFDA4rJNYXDisxXLx3rqTdHgeJfHu6qHgGex2zuJydy8jPtegHTu6",
  "key8": "3sPjibtUsGFQAi6oGNGY8C7fAh4ivwBbRwTuRsiCAJn1zYRRj7qrL3TM2qrdr2HpTVKX7N7xrZ2tj8U8cKWpYpze",
  "key9": "3nkEiMzs2YZzSAjjA87Kj1qJpFo96QstMHPr1bDJqZydQXwEqDMY4YBrPyaBSbvMCd6xRdoZnpkgU5SMNYNxm8EU",
  "key10": "48YfQfCUWPpmk3yV1sKWhJgfDrqhpouX92RXicxSZ1szvUDivQFt5owTfhqmfFkNc1ByKTvY6Uu9MUxsdgmhWRh1",
  "key11": "xcej4b63wyvaKP3PPutQGQTTekA4nA2aSiSfHgCVwbWHfJmtbtC4rnVqDKmhF72ryuB6ofbN7sdEYAzvVatvxR4",
  "key12": "bUAVHsEJsV8NKTgfEXfpXR2KZMu32jKTLZizXQJwJQGydANmHuMtQTeU2keevatb599kVJG1Tjeyzgt1vknw2wi",
  "key13": "5FkB6mj1AZsgDnVhEZpAxEh4unL5HDQBD9NuyeNTTPrZjYCT9xWjr48oycAqDTY3JZJ4vZERD77R8kk8gF1ZLoP",
  "key14": "59ysQjayRWgAs7ymU9KWEkaVx8uictF762DFakhh9XwVGz6wa7dDP5ryga1Xpw55m3bpMMWcifWwZKG85ww9AwAR",
  "key15": "4oKBKxrbu6u6YVUEs72P2Xa3C3KFSePJo6EtXwe3mZechXAQLom2Ay8khiSUKproUCcMU8Gc9AgYj7zVA4k8Bbx1",
  "key16": "AoaoBwfq8jZNpxksBPqEJPBJFyDfiYwMe23n4P8vMkhvrHyw93nX8onSKiigaXfVTed1cRWnc6j17t3XyCiuyjw",
  "key17": "RB4GykoLZRKmAYbryRFDEpbQ63b1QWdtiWh4Rd5gbtKmchVMy9MVwjtmmGXaJCjKTPwKnVyTYQt53s1m5GzFRzz",
  "key18": "3YBPsjPv5EjY9sxSqhp8HYgyGJ5eE4Tsvn99DdJVPeTK7k2kPKmQwmFQMUEq7DyTQLAw9Zk1tSpi3zVbeyYAFmQC",
  "key19": "3TV4tuf9HLNCdBxeoy31JqXGNRrbVu7Uq83p7TfD3am6DYkBT3KVwG1SXYG7icGrCzofcXJTU51hLvNxB7CevLbY",
  "key20": "4gJjxRvLJgifgBxTZsVgUuGur6UreG6jNy3cRQiZt7TJJxXuBWoCbqxY1hH2spmhBTbHnrdCUcZbcKRoQ9eEZqga",
  "key21": "3RphwJhq6q5jsoRBoAz8zSKpgTo1wnZc7BRMf1GVwYwvwvkBGZJQcY7F4idHoZqVVuq7TLZAmVEhrkJkSFePM4DS",
  "key22": "4PCcxVUvHtQ3V16ZqpVaDF1ptkPYz9racxSW8yhUQvXhQEg6N4KEn6JDLoTWNu1fc7sx71AknfFBCmmnG1vRvBEd",
  "key23": "5G1w1CfQgbSk4MbTU2a4LiFbUnaCha2vCZr9apfbeVXR921D2M1UasissdfvpxywnsGcKzq5d87q6UBbSDx6N48z",
  "key24": "3dFFVrPd91LAU3XLWxnrRqf8avQzZzRmEixpx1fMRa4FXobbmJDFd8PBVq2xNGkpdzUykk8cmVL8zjmWddCW7oJt",
  "key25": "2mN4fDUUSH5Rrzzw9EuVhp4oxUX7bMdHjbfHfguCTxLA5WpUP83n7BpKZjczn26dxy2wiutPoDAbA2UDcLovNdKf",
  "key26": "5nXFgHX6132yKF17gWPXirrCBszF5vPG3m9ebd33ZTUUtAwCi9J31Hwt6w8rXpECy5FtEcUbYw9uaJn6ARaKapgt",
  "key27": "2y9LRJGJm8MGrbgSfPZ46mmXNK1hUWzHfob4g3ZjqssdKyB5eszvbLzi9e8Cu8DKQnoTgEUHJZCCAyuyTyQVscM7",
  "key28": "4WXfgcpcU9vnELB1w3nd4dzbLvmYQ5uUzTjN5LoPthhiJvSubXdk5sVZyjhisYHVY7MBpVQ9gnpj1S5H42qzfEFE",
  "key29": "2oxFuPfiHpncYtBw5PWM43hyPML6HHgTEMNnzSMe58BK2KWwbRNXpAqPPZ1gWxzHLFJ71QkFnhdA43FKKDBo6As7",
  "key30": "3eGpaPVNAMYxo1usP5STs5PxuYyz5LiFwYFinUw9j3J6XgRmM7PKACNRSEqDk5N258KCcB3Jqj6NeWugFkBcepvH",
  "key31": "4UcyLFzq57AWphqb5jpo3Ynf1SDon7YZFWnXr6j8SNc4ERRh4Z1dE9r5sqchnYZGNhpo3EzEVUimCo2G7i5tM5PH",
  "key32": "63KxmNybLFQbDHwU93d3Z9PqqXkQZP4FdRJPgeafindaTgLPyMNgmvxAHX1FoQqLxmdkBoXmPdWJD7ScjufgJvoE",
  "key33": "54esVLquUrVCuZC7JT5Gkt1TTwZWw2z5DqeD7CyV2PjmXgNEfNuKsuTKpFMQsHDqTjFeH69X5K1DvT2d6xvin8BJ",
  "key34": "3shxBx9Yn5BPHHZGybzJKF2Cpvhfp1zvAa51vouWw1Jx1wMZP1EHX1gTtUR5miRonk3b1ggn9fMNiL3rcugmTQ42",
  "key35": "5TYbtyqMc4TsjrzwdoAEe7TZYwvcKxRdmk68qufdNr6yAU9GZXLgnMsT8b16H5xgcfyN7mJJRZJY8gE76RD4UEkX",
  "key36": "5jTGZMRgJ5syGFWopRYGMdYkt1G4H2EE8Q3smNWapfpJ578SDkDcpkZTEW5EqB443UmRHC2cPdV3RVk12eFMP2Dy",
  "key37": "39yGTVTTNV8yiCGvwgjuf41ukPZKAH2sPsELUNTqh6hZ6HS67YmeSKastW4qenE3m6Vh5UPdgrbKwfiCKNqPJY75",
  "key38": "2yoZqQm3n5wcrpDe9gEND6aPuRzqoqKS6Rhv1bugQKkNennSrNGMfqNGvu5TjDMBcyXVXAm6fCgY1W1NsKVKZEfw",
  "key39": "5MTpYafuPoDBtnhSP8VYE7sb2d1AaHZkQHzbfWkD4vqJZcV9CX4niyoTzQTGJ12xK18xEQa3jBSsjwo3h1dh4xbM",
  "key40": "cyngf7yQvm3RUG6sdvXjn6eUD48Hp2Wmh7TRtUVUKCtbRrLrRKSWEmDRZh2WkQRXbYzUZp8EARSQvyUwGPWSWM3",
  "key41": "5PqqEbET4RdtxM7kheR3Vt4vbPBwKUJFfjYVyuy3epWb7QupuuEusFT4owH3ay8vPFV1u9jXhKcVXG6ezjbBFGyb",
  "key42": "49WiH74KEvL3B6gqRr2ak4EsfjtT6mHjgmUWqd8k2fEgi22ofauGVza79WSvwSyRmuf1k8coDUSew6GeavNQeJJh",
  "key43": "3wMxXp8i3XopXFAkYYkztxo5vSsw43ny1svCxbAoeetKgB6HNkriAgPBDkoMVPA2LGZooKv2pKK2jBPKgeYZgPCm",
  "key44": "2PH1SeKgiYxdMxa7ABjLZD9vKZ9DgrkYBRQ3X4LDEjAwNiTCpeb6McHUUcc9bt7Q3YgFFBjA2Z7ztZ5prakuSwoy"
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
