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
    "4VKTvXNHTA8h7BMhFGzPMdwTqekQKpT5hmTnKMCLVjgMcYQdGyQLGbp7M23Frve8Mc7LL45BQz51TewhLHUqvU7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3awKrjv6SpbehWgw3F6T7u1gtDqrWRkj5rwHXF8rDPFwBd1hJYa7JLyh6WFU5ok2fvUAjcLYCR2rsgb7yfu4eyPp",
  "key1": "64w6kTwx3S45sTnxuB9NGbRqtAwumK7WggxZsW5MVMF6VC5FWVGZY1DkvcX2MPS6LKvqNN2tq8Ca8q5yp2Yds4fq",
  "key2": "uPamwdVhxQivRi1KSHyHTev7e1Dw13BhjQWza4SsCiYr87SCzpFv4kWkcLew8CAhR1V7dZazHJqXWnuXUsrmujz",
  "key3": "2RuJM7B9araNH1shb2Ky4GwFBLqDjaCowqBNpeWu2yQaffcdfDxN4bwvsxymFqH1yrWqvdtTdRTWfVK9eHdsoVfk",
  "key4": "4Gduc15vGSdoiT7H9cwDATX9pBMKS8bgqHrMsdoQhoiYBqghjrqKvrTYN7cu6Goj38MogHM2BdmKN5swYMG3dyf",
  "key5": "5J9wnrbda4Y3d2HdHGRcUGDtJ1oc6ahaqVdsdmHp7cWVoUnNcJo95F9Yq6m7AyLzPRJdBU8ry6aor8Mnxn3f9RbV",
  "key6": "rnLrEm7Z8Mo3CA5rJAMjwmpfAKpLRR4jb12KojNjWvfKnfaNKvUskZNJjuASnXRjxRGMiK583DLf5ygaPgAENBD",
  "key7": "3Yr8n5Y7hxvznv7ZyzLxDscKMYEF7N6QpBb4Bjf3QfNc5MoujstWQyuBvChTBXa8yKK896JAQdKwXgpXqYvw2Jgk",
  "key8": "2Da9XL9UtwbdctCvNGPD1z2yKe6hE6RzCH2UKi2KNmxTQtRRPRePhZsxFrw5RzMM4e36QnWa94ERXFNimf4T4Y4K",
  "key9": "2BBgoXPkjnDLnXCMCo4QsvAHrJzZ55i3b3J5dbzv39E27rt2NqHq3CZ5ioFDCEJdwm2hrTKMAa9sAy8Hi2gCpZp2",
  "key10": "5Qh9NCPAauZHcc9df7KH7NdTzZ436QSYP95pWjeJFr1mC6utw2EA951Y4a5MTjWsvALbFrAuBVGnMKtiq2pzpPcR",
  "key11": "2QdeoTK3omm3sYoLMtgZjjqA6YbUDNrhxm4sSKJoSLH8QiKKw9wdL7i1wYry3AVZjT9tNQyvpWxv5KzWkHoxTrj6",
  "key12": "5EcMwJtVRx9zLjYAeGTQueHkTmz6jW6yaXZ4YHAjPNiDHPKi3X3cdhTdXZ57754PyYxo1Tvo53wSy146Xa3VRfzZ",
  "key13": "3vgG3L5ariX1YFVpc74d5xhrdRbE9hFjE3K8HiFeAuPjuoJdvEFyADE2EmiFXPRoSRriaP43ZzMysc5fCjhfTb6D",
  "key14": "3ByAEQE8uRwU6Q31jiiAWmG3d5eE86vEFjo9LY2CgAXvgHwLB8EVxiKozocWrzi22utuYqvdqDE4HSd7Qq48ERs2",
  "key15": "3vpP1qEy5u8J9VvfvxFcbWQMWDGUBsq1p9cxP65GhZVYbSr526YLVCamkw4V4msquiojtWf9BmC9cE3oc7Mh1Qe1",
  "key16": "5j8ouMBHNMZnQJiofsoMDB33fKjhueDbWMstLn1NngVe6UHygva2nWAZKfEkHoVB1nECEvyawRRt4iod8Dgeax6y",
  "key17": "2BHGMtSu6ABw8HgsBFkU48PQ23d14qDyKgFwBhNdaNjQ8kTC3rxn5Kef2EZVwBpZ3J6C1dUE1XhT1UmodKkNHEPH",
  "key18": "3avGmkUfK3s3dvJuRE5BMFhdLQftwcTkCzwKxJ3y3Ld5qaqV91kDFx3euGyq17tLdCmcCgk4xQa645SU7Gu6McJP",
  "key19": "gyxN9SzV6YDqeatZo18vXH4GnZsHjADfMuFXDfGJci6AUCaBtG6MAF2K4yCC5KKcVKBuXjGqVUQkmUe2pGxBEdQ",
  "key20": "4BX5ZzCkT3K2kmeGfs9SCQQMgSTb2sf8MfeGe2Uy37zCeBdk8FSm8FgziJTitcaEQoKqwirYdLc7myowE32VD1SL",
  "key21": "G4VwvFEvVEyQzSzS8PvuwzTPDheHb4XBEzZ1HwJDHUdRssoaPaXVei6nFhGkzvbJpJ5PjD1hqc2wNUdq2DhQQFP",
  "key22": "6mocPx9KF7YBUeuue8fqCQEpp3QNGfz7PE6WM44xcrzWkjvys8NEMosX5d43suiMRjAjC7exJ4FBpRybWXS5cJj",
  "key23": "3TGQi5qkmyucQALaNdngK5jU35anAwtQRPM8FX98mDYPUPkW2GXkkjiocGrofC9smC8oLv6dns8HoACenfnAPrA4",
  "key24": "5w4D7rZHuLgKpVPY7eCU1rCMEhnU5D9kgKLt2KahfpSizQaPi1AGYvaLczobsqrYPzKztyfeVr1GUJhUoEkBbRrB",
  "key25": "4BSWYu8T9b4US9bKLWD6ZmXxUhUG1q1PkkEfDLGNcRk2FVmHYTQQoDKBdFh1z1wHcN9NuNxM9f6JnDifZLgDWno5",
  "key26": "3eECmLmwZcT93uWQQ4cPLFTqUw6KvZdjdN3E4c6LNhqkkQiZRETaHWAgWSXnLAYU6cd43gtXQnez3K5qvnEfnk78",
  "key27": "2ET7LbmnunewxzneCtzX6iZnkQFcQgCHXK742mXXwx95AGpjCqw172MbEcHFHWZdEZkYg1rkbWQEt89o4rboFY5U",
  "key28": "3X4bERcvVzDKJJ2oaP3dFeLpgCah2r9BQca4aKpxraxnMopRGpNPWVZ4z26c66W7gq1ch6dtUzdhRCC9sXidUVW2",
  "key29": "5vReH8AohdD29RNdXWP9HSrx4MvVS3uk9SashFekVLKCm3e9yD8GV7hCaSV9uA3hyXwYenXjhjSrg1pet46YE1jm",
  "key30": "2xYrXnrsRDQi68RzN8UdHmcadvgXnqCwSLQBuugWUkrfvqERwaTkYAYjdoDPkcpQTuG7ycRehovbJFz31sinE8QF",
  "key31": "3PjFfBbRPPVT8NvDcpoqTAsfQXqJEZGb1UxdEzLgv6TTc31GU4YzjEBHHwxvBSDgEbxwZqoKKdQpW49WWWJnTFXQ",
  "key32": "4ZfY4kXq5x92YMkSh7mPKN951Kn55S22ZkGGozVZyZ7nVb7v1T2f2FYtAMjjg1z8Tn9jnGq3NWNnW9Ka7ENX6zgi",
  "key33": "JhCcQ4UZiJMfDs4QZ2p8MtLnXwQSLspycptL85Dwika1wzXTrZ5yhZ6KZD2EcVWnYmWSJJdQqoSGJ9iBKSot6LC",
  "key34": "3wQxHRkK7kJeTTRnCXviKeTtgufzFTrmTF5YqAXWT9eLqYUXovNvCPrrC4EyPNCAyfeAMvTmmxtXDXtbRA4ycFQ6",
  "key35": "2Gr3pCYrfdTqdhCGP8fLfoYDqqHNZmpP3StS3BA2XbkbqVRgWaiumZ5Xb2kyUxpqXoY7T91ss9qykcSCf8dir8V",
  "key36": "2zEZWqUHVCSZmrSVmjKbf9eK8pF9SwhQVs2K42EVGwF8TwMehLFTF426N7gcmYnSPa17kTdUi88jGSZgHQsn9xVv",
  "key37": "54a3tXRQwGAJcEQ38tMnvviCpd5dWQb5wAM9AcANEQ4DobASM1PyLh8QCgXWG2U7FtZBwNME3zBusNiW46fDi22v",
  "key38": "5pCLiMGykP18cdiLTaP6ooTgXtTpD84bwjx6d8xcyfoYFoq3VaDypFpnC8An2Vh6ShMmeEmsow2SCepvbDGXGzMV",
  "key39": "2rXNMSZYEFCxAdWkaHzkpTPEnF8LhR86xiCgpLYuMiGPLzeTyYyztAdJjvaJ455pqmaXQoadRSzPKrLkUwsq1MvK",
  "key40": "31TpzyLXqtMG4VT6VcwiujZ9RMnB4iN2iKA3DASV4wVzxAn62cXGCWV4eRyxHU8RxJM2R338tLp3dz8Er2CMwggk",
  "key41": "4CdAkT7NQWxsjp8Mbe6dSGBiNdR4cVUyZXJuQJ88JhBYhpSYztxJT9vzu9dTYE5mgST51Ns6ZyD7UtZ9uKWdTazw"
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
