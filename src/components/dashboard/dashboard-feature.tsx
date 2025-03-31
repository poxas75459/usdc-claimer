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
    "5a7wVV4eqBygLx4gZcCqSFVZ5Dbwym4LdPBQapqbnBJ57Anr1S2oiP65LF6RUz3eJbT6uXZppGpqoCsaA7NbyJKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9n99vqbdDbkw9nTHCGSBtBa11fabNp3rfmZSZQ6f7cEKZpz2Z5nEpYyJk8JpyHCKW6hDjNDAzFMPNuGkbTp6Hh4",
  "key1": "3GFLzG8CAb58Joza87vzNibhvskqN4CGFmnqcJbroze3iNEK1eAi2BBKJDA6howmmGYfJL4LQtyPXnxs2PqLEvwd",
  "key2": "3cuHgnnEp8AwTVUsDnjYuKFuEvmnrBVx1bymc245ZfkNvDBZZVbqDv2RT8PV1m4WYUk7hNwvEgydoRJ9fTCJ3cMm",
  "key3": "4jX3Va5i8dLs6MDcREswT333AhTxBqRSBs2f9fDz2vw93QA4vcCmLKbcrJsU7rfT7DY42jSfxYhK1XsiRpFoMi3G",
  "key4": "4aRjNNKAour59bRX8QXHj3ed4bBFAyuaa1d48zA26tXYaNx4fTszn1d8PYYQJkcGKViHTqDgXF4uweQPBLVnDr4U",
  "key5": "5qDN3CLwvMEDBL5LKy8cK11TGCLEWxnWKuwchj84wuzVKr9uMNLg1MyrZaUtC1YUmMm5vax6qqM9uQnaKjJrVgw7",
  "key6": "H5UNXNMhJ4JvQrsB7NQyAbqWgodWo89evs2xmJyHCjzmAEoe9Km5Y8CXqhtiVfsuthZS4vwcjbnZzQyy5gGGER3",
  "key7": "3jWcEQY4FidCts2jkYgoHDUFCA8ySLav4zUBPGZsvkZGc9Tu54TomXq6edeN2wDvBLskefk4mfCJeYv7X3kUKnS1",
  "key8": "5Bn6SUHQezRNPETR51yJtG4KLpbB6fUgLtKA3GrSrCpTqpVCs8hTtKVvEipssrbZZeFam5qJFd968ebEF2MLEuU3",
  "key9": "5EEiJ8XrXWKbqdsxWKZ2TzxpNQAmZgXB4AD8eHNJ6ndpm9EPeBadXvkHHJ1CgHchW1PDf3sg1UjtRpCU7HZWkX9B",
  "key10": "ehnikAZN3yEsiuh63vz3xBXKFmuEweXo3RCVeX8osFsBs29RJQtCbX61ZnY6NLkNiEt2agWPPFm6ssG9EgvSJVp",
  "key11": "3qkoug7hj4oyfcDsVymFWz5CbEAmJvZGCKbEZT9oRBwNysrPBBhucchKkvHHYqtFQJHMN91DG27ekNCJNnHbjBtg",
  "key12": "3k94JeULe39sfuw6MMvmXwVmFz741RygyLufFAMibiYJWYXDizYTyJbU3htVYqTjZBrA3Voe85cT2CqGDGgDrzoj",
  "key13": "388FPRQox3KHKmgb3mnGnJp4N5wKy19FU6N35VV5qv7Ra3rNet5qge3Ec7KQnjhStqmX7CUBTnobcdDq7hYmYpNE",
  "key14": "5fHUiZVLD2Ve1wNNBgfX3hbTM8Z8qLJCEDYRCLKMXcpxtmiUzPG9Woic3KYkLRfvp4KLko3wcWxgmniTf9NX1FpV",
  "key15": "2N8ukLPDKQpXFM3Wn6NV9gtvrzcAmSpHdifjz33xUkVWZRXPbFtDme7Mujh7T74q1Mvr35FcSMQFQBQFjyxRpEz4",
  "key16": "43YzYS2PJpTNBZQ4DGf1BN5rVxXzpGrVCCswd7qptL5GTYnjGbUojkUj3C1CPv8rXABkVJG5cExkehBWKSnCq3zS",
  "key17": "5cuDD5jMTQpAZKaQTS3qXWLRzXNzaZgw81Xf1BpC9EdaWoBzQQoFPXgMYoaDoNveB6bAjHP9J2kbbjhKmJNi4FRU",
  "key18": "YhtqgDx13ZLNjq1Tw5srr7kWHHBQALgEzRUieFDUNgLwXCanJWXq5HAmmvpTRyC5fsgGy7wjxt1zLvqRoVCijj3",
  "key19": "5x8dZb8DKXA5iGWRTjtzLFfoxEtkWYqKtz2LXUxr1NkthfLvHkjQcPzKo3Grmukk89SsXywt7y1B7KhCS8EsxG9f",
  "key20": "26PYDQNdfxyeBTUVUZyRnUX7UvtxtwzN9EsGWYSqFDKwqdkT1ewsvDHva2pC8pELL8FShC3BP4kCQx63HwNHFzGD",
  "key21": "4fTtpPU3vB4tULCgbGa8LXn2wG2Ezk8kpmqumsLSyotdtRj1vNphSTbZBzChBJ3ADdrdyB4kasQrt4Pyh92SXx2x",
  "key22": "Ma9T9bUVcmdFkBz2HW2HrGQTLcjGdAuxGAJcHqjjqJXThgUaJ9Fnk1HbnSPQCWAeVGFMuJJMUtag1wRw5dFM5GD",
  "key23": "FqqFeVsCTwoB6saJN67mEyGugtHUFePCCjyiVKWpB4Jy8vMG7yqdx9eUvNqiYmSMJoa6WNzLcmxTVtK2uN3eeYs",
  "key24": "3VZf8CLrFRye36ju1QUxofGRZFuk3GFcaXL8LZaLohWYqJuDVmk99bSYaJfnm88jVJX2WFieqWuHSpCtBmveU11R",
  "key25": "3xG5mF5hEe8hskdczE9ibir4AgqTKEXBVYZcwuEFwot3etvAZhsiZtzaW9w4fo3rSYPTQmhrTmMuXLoikBeZKmL7",
  "key26": "LFXomTgZbBzkqufJXBrGbriLdmXg3iR7Va1wwGH6MPj7Mftf4JJL4DM5aTgRRAoypyYvqjpc1XGRFaCBUxTQHXp",
  "key27": "2uwx1A4QDF5UyRoEe3ABZjivqE9JFVLAAHUE58feKQm3tamnJ79cv9kvFiWRJHi1v1wDJLd3riHuCfnLGnzE6fLs",
  "key28": "3fnU4NBEcqsp2XoTvdgWNeDF5Haxonzs9b8vVnMG8kkMNYVYZd3fkVR468h5fXKLRuNPpmkQYP18nAaCiGuzEXm9",
  "key29": "tBqJrG5c1o7TxngtBn3TQuS1xDB39zba5hEjDKS4epA6oGyDX95KNdhdHoZMB8HxFP4SS5BBh3DQahGkm4fYPDm",
  "key30": "2LGhLCppki9Wv2gKVfRGwJXou5PjpWZUm2dkuPkc4R9qrUC1SmaAGFKC1j5an3MwsipC47Fy9DfUfWwNHPFjfqe8",
  "key31": "3d25YeDtD8u3qF57cmYTPuH7ohss3XqMYgjQPndxMvwFBUjoD5VPGhuz72Co2SRgHjiLw4b12RUijTX4sE7bV8os",
  "key32": "2WpZsa5h9hMEk7xvsHAGfedgBXnDo14wmKAZzuc8EKsvJhXrRGWXEKWxuxCDVMevKfhxW4pd7wVFfvpKZU79XGDA",
  "key33": "5hzFXo7Q7oxAiRmB2FqBHAPPwEifJ9eAdpL8LtZA7VwoQBg39TyjLx4NuhQSQUDrvSgCNTDxiUN4bcwewVHZv9J1",
  "key34": "5ZwSZ5Yc2dPKkZWdSSZKZaktWWUok5JpQwPssbWEJXaC5NMY98xJzqpCM3RZDfTGBWyMMS5qKbLB79aGhTvT4P1g",
  "key35": "nQegc4bJKoRXK2xaAgSfnSrokVqqxUhRtdt1C8NKKt9gY5WXeGo6v1BKmQjtayjD9hQbs1eFUPbj2Bo3dxdvTmL",
  "key36": "4DgeK8uiv7v6QnADADLTzsrADJh3Bs7PdxDN8KeBYBE2Uy5TT6oJyihWtgj1fwbjWUdqfHUAjZyPcbAZMKySoU17",
  "key37": "3MYY6Ymo9W8gvsrt5uBK4Lxg8Xzi4wQmR5sEmW8C6GpZKuT4PmifXy5on5AK4j44c1fYuwRya3jLr1xN3nLn3Rem",
  "key38": "3QFtwVwLmqX9PnCPA56gpS5hS8eFxf7D43Z6gi4BRJcuJWSyZJVZrRypaXaAwRGf6iVpKiv2yKmws2GbuYfBmpEY",
  "key39": "2ksAvpmCavn4abDCqVJGFBKgw3v9rVGKSjKn66sWogNpEXwRjjyhnnwihRb9NfNwT7UsBDSEvzKN4dt7hez1s194",
  "key40": "5gFcVAvaN5qMFRYBbarp2XERGXpW6N6mm7VMHUeZ7GB8eRPDUjn4YD9MLip2YqaRYuvSQZFnDwzWqN4TPkR5PzA1",
  "key41": "58PfsUtwyfcdVG7z1Kdw4iDGoSEdy4cFugFiS4sknviMJcU9HkaQ87j5xvjXZ1vE4o4nuAtZmsRMKmQDpJGMctfV",
  "key42": "5VA6kgn46bry8G41AbxGYiUft8BCE6Udh5cmuffChLvEaGdFhtu7LHKprNhyBnUJaDrBFG4YRMqjfHW8rRyw2L9t",
  "key43": "3VgtPtuGdej9mBxkwE1XMieA1WHt5GdzP45Fn2aDVCMuGNyjvR42kwzdFSZXjfY2BW42yihPpPwZQfrJFTCgW6tk",
  "key44": "3fFqvG7zkkLmgp6dTb1cA7LefUEbQASkXN6Q4dUza5edhr7C9i82f59WPArdMMep28JdBVGbJg8SMdCjBLSaXNnn",
  "key45": "4tgZZyfBzr6C8RKxz1MdTe8uqetkYCv6QBCPXFEk7thrgabupfy1y8XtTsEp6VSbsarNAj7LW2RRguYsbhATyaeJ",
  "key46": "FhwYQqmPykfMtfkPTeMc3e3qUN1vfh2dErg2PqSXsU1r7dD4YkgfAehcTgYWuvbL5pu5QLzc74pKSz6T7bZHqGB"
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
