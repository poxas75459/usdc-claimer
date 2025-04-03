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
    "3Xt4XzwDku8HiheVmSobZcJ3vYA23qYXXuHspw6mxtEqY9r7z8H8vQfGAZLHBJq6qDhhXaNLPtdsx512sRWTTpu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VJ4SHfjH5VjF2e28vSueSK1mCHtF1yo3Mx8rEa4nYZ1J8d5Gw38GGGztWgsPgJqYRQttjnw8eJ3UnPzbeqqniYr",
  "key1": "vnF1eLSyyFt1pt7EcwKzvuZQTZGMkDFyZPyg3FnGD9VFcQm48qF7xVSZy1HhZPPX6xp642PLKPGrUH7CK8cVX3B",
  "key2": "2Q2j59eWwQvS8TKxvP4jgYkQjbKooCtAzz3xtx1rfBzFeBKMzL5XN72NJzw98fE3DgzZBEyfSChQwaW6LiEwwE43",
  "key3": "2h5WuXe96Rc59aYJVG3tA2qM3vJb2kG1Xqq2souCG6zKWokLCjzvZC4ir8urQKUoVgnrGdVGBLLcxn8YVooAsrse",
  "key4": "C6KBrqy58qaQD6fiCGx2dS9Z1QciNjWFk7TvHVGL6mA5ZUWCWUwHmUoXdsKiApm3P9nLhbwYP7TTMZQwX91fwvw",
  "key5": "nwsw3iVALu1GteUHe48LdiG8DnfdUU4yBawbwRw9ZtLNMWvxiKSksFpNbdrRVw2ZWV37CTaXd8jY25LWAXaj65X",
  "key6": "2CrFRct47GSowWrVWtc53EMhyGcntUY6hNWh4EcHqJGQxt8WmAF6tGsvZB9sjekWFgWWitFW4Xj2J6HDF5TTzAPS",
  "key7": "5dxUuY4gHo9NASXJ4J3sU7ckhx2h2Lz1MoERiZC8Jvwk6FsEqYbBuZYSPmCdkmHmJAXGF2VJCoKfPrkoKTfyrbJJ",
  "key8": "2Y4yYJfzwmSUnYLcE539X3bmKmmSCit36ReyQqXmDLBgrXDTdC5XRKbKjT6Xj1MDDZ9sZHnSxyYjzabQMqCvnLP1",
  "key9": "Cv6FKaCysVk5rPLMk7HvWKvd7FtMGUcT2GzQdTRWbwNgyPvCjzWt3XakiWrtbBejuu4V1Et2MNZuyUgGeHeKMAy",
  "key10": "2rTzXj8KyoiqFiaMYPZJ4Y3jkTinD3YzoJtoc8mWvdCz4cQyTQznEZtZ2ULCeX1UqheQ2y5qKhv1MziVApQR7NQc",
  "key11": "tgnZk2hTWYC2t1yMVfMU4hKJ5BFcWse4TNsuY72rhtPcpHjJWvWcAvTKDFEVEVh4jZKmYhKD3jNYhGgUAdKsn2s",
  "key12": "2ZJWaDxnTf2BTMaEUxmDRsxCBnJzsBHFdC9fvqSVRxAbowUv8ouB1wzwEJHURduLVHDoY8RoTPe2dpnLWPWvG6gD",
  "key13": "2mkKqMw6QnJpccvDNayBi9JMkaZhyhrv1gv1Yqc68iWz5dF7JLE6hJvsNnkZNUzKZhWzbxoZKgTCAzXW5njToShs",
  "key14": "33oWbfrT6fRdKusG74gRf9KxtBwZ2oMzYwwr6ADF9QA69hGFxt5H3wLmZHCFLL3PZX6VVnjidTkwxXmFkCrAEPLx",
  "key15": "5w9vk6Q7Y8VPzECALJhXZf6vdLN2wtkSmZZmxWS3JRaBPU9srZvhsSnd4CEt8NvW8YB1tNqgHFckBC3CndToz2sN",
  "key16": "2dkbGNucUu3Y9voVpATjwAG158U2RL2TaaELo8uBJ1bbhbWjWdv6Wosb4GpmzKyj7P6nbuQwufqvbNprXsmw4Wd9",
  "key17": "KyAWjmN7uMexeHZAMR8b3Nv69j11gsNcoBjGQBAyr1uqq6ybu8aWR2HW3AVkq4aUjvV7nAcs9Zi9mvKYdQbn5kT",
  "key18": "4hRpu2PB1jDKmAuhisvQd2TkKMG6QBxUgyCtiZLMK63TnqsvRLKX6AwEVMCWpJmsuyYz2ehVndSEKbjTWG41ip56",
  "key19": "2hfwcyuorQZbChcWVxhLyg9S8BWyStQNPZjNieXahBP4R3JYALkTPXUooqz5vjwNyLhniDFWtfTwFaWXt8JzYN2C",
  "key20": "YLu7ao1dMU1hq2kqxRcrnNFg3raieEAPNfk2cJN4dDpWixtgzZLaenBK2uYodb1E4nzCFfszcTbgyLWaSnVWVvQ",
  "key21": "2o7kus3gPLEPHFCS1yaAGPJtbYA37nm8LbD5joCpc6kZWpAPowRutxTbFZQUSeHc3aF4yat8UVrNpkjwds1W8qiQ",
  "key22": "5YkAxv5kedF5tTPzLUAf2X4McbCCH3Vk9ThnzoBiQ4DzNVAvAYFJ6cyfAm6YYQwaugp5R3rxZ1RoQDvqhFUJATy2",
  "key23": "4hU4mjzTDJYNJD2GFCQKi51JCYkGGMehGTg9FB8taoUqLgsRpEsjjSfx6jvC811bKGffbkD9LfPSVMnz9pEEehxR",
  "key24": "2XYo9JejSfu1UwcBnA28NT52JNYG7NicQwbC69qw8o79NcQ1T8nnB8hrfRBjs2veaioYDrJfKEVMRuhtrY625V91",
  "key25": "3ErdYypTTXEuRDFb7t5vRqgWHzfhjZYbvx5MpHeHoBHmQ8XwU2JB2ZmectPuNot6iRP121QViAde9qmNdL7peDWF",
  "key26": "4qNiJudU4ufaix9Ww69Qq466eLa3174E3sErTecMbizKkDxtK8GwGz3UFbuWSHcJpSZkvNBtQD4ET8T1esmhXb7z",
  "key27": "3TGy1ziBuYJbedB517hdfFFBwGuTMKiA6xL4n1QbbjVyx6nUj1Vi6ZPLgeD3AhdcjamnuYzXRSb6DRxLYTAXYM4f",
  "key28": "4FZixh63YAjBLEwyTGfJ4JiSvCmnjxZiuc6ozc6CauHa19QzRznY5EdoeATPhsrCngTZo9aoytpzu5fozs5BELx3",
  "key29": "m46M4yf7vLbu1dud3dLvubdKLiv31JYT3AoXWT7ue8AN9TqYKUYHr3jQn5QfzYGwBDuF5DbL5AGCLpdxTxe8rdP",
  "key30": "oFqwYPtAUkkvS3cvJtLdQmXRRR75QGRbhbn2NadCVSfXpjHLHeYCXghccaEbrvaNGk2U2po8xyZSFpYJZLvorJX",
  "key31": "33LSHHMEDyE4g7nLi5Co1Cx41HwLSixK6NL6zjHQtHPVGvHnzL2CjvY3qhF1GYfhQFLnUheRBjWUjZhpkEQ3eM5T",
  "key32": "3cN5H3twgBBUdcJyHeawZ3FhnCWWJfGZcgUP6FD5rnKrhbhQwvJLuc9rjdhsnCL2N3rN9gAnF8RvfJcBYEmLZsSN",
  "key33": "56SWs2fWoWAP7QN4afvyhKeNLmJFq11iom9mUCuSsQBH5ettEWdetkePYz1SBakdpxbXXxaJPLSRyrGnq19PFfkm",
  "key34": "5reMNwjErxQDowVvuxEpqfitSKVeoxcjo2ScceCk7yVVqPGAAtFbBRHMkjrdsqx5zoUMUUC8SXwNWS5yzUCsj8dd",
  "key35": "PThSHy8YJkexDGZ2R4jTyJi5SNZ5GNPFCcJbSyRLTQLiHr9tDypqitPa7rxsiR3K9fEfAPXefFHms42LAVzoZr8",
  "key36": "4z33i6B3kcSWjfSsNZsYHnHnv66KPYpSHSCVFwJNUmJbMUbwtwYpVF7G2RqprxT9m7StafnrAUxuXrSWVeRwWD8e",
  "key37": "5nkEcpBMHWcXm8PwmynAShpNAez14g35CiJCCZGNgWzhBhXVCH7EpDxbq6PuFDnau4BApjDKTDeyBn1uox4eFvhW",
  "key38": "216DcJoRYiaJ45SB5FAYuKc3WcY23ynxZQ6R4WijzTprgXUDfLEPW5Fobtq5BxLCK9HsV5hHdtGAfxjj8h6mWgEe",
  "key39": "4ka8RYU8Fwq72Cyy3x2Dej8v9sej4hG5gpftv3fJvYj6VBejk8DScjVh4wuru1YpqkSFSLy8sMBsnzYjbDbcMqNC"
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
