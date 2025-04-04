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
    "GnCckJbMZmmXy5ygjvCQiRtaPTpMrVKjN3DKRdLnd8Pd1hPj2AbVzWbkMKpP7eoAkZdRMfCiPuSSkKyvaPyvDxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qpaHPa6rnfZSKf3C42JPYTj6zn159qGcKgvENFKxjygU3d7PQwKacvyDHYqRsUCS24n5Xo81BbdbmQjBJPrU31D",
  "key1": "3uC5nyr31fc3shknrJckFpoiMwjMJYrkWsNz6mFzonQGxXn6XUXXHgaf71YwZToCeUcwyEGYv2C6NR9P7zyP2Bbw",
  "key2": "GpBSd5fudPsDzCy4JRoVjie7xDpru1Gab4E5tHJKntzyvg2KeFGxNKxPpPDjFsJ67ib883q2QQjzLTUqXVqSLU3",
  "key3": "3DfJJs4EGuyGf76Y6M4wmiFQqSPHFgrhk7BtfMwt8Eg3FxkB3Nb3wuyXitfomGC4hifL7proA5qwBcYRr1CbLssv",
  "key4": "475FXu544mRaXcUJ6RcUHCy7pV5uFFz4tVYNLqzxHTg7TM2sqKdFoG1EXRPfiehVUxSgYszxmJ2ZBwvo4eBonnYd",
  "key5": "2KYbj7khitBRR91MSt7JJn3qj4ZnFYZaPUKsE8bb4BAS2vAkLbyf1rCyCnQskqihVcJ55wuf4oADBckGqroBgBmc",
  "key6": "4Urn7MgPBpwFdaGxePzE5oMEqsTVtMXtWD4aJZtsgmTAgKKxHQV5Hio8y6QjRRiNzfA3TSkeXcExP4RgryaNpG2r",
  "key7": "u2KW7aGfWMACjDLCf7RchuMp2DZw9G7Q5tZrLBYsuW7vUUwfCzrTJ5QyEJq4EfutbNJdfSuLE6JF6gnSp6GvrRc",
  "key8": "4qjC1HDnTHvH95jjQkWLz3sKSjQx78aBFRQJSnijQyDQg6FrgKXGdTG5wFRc1JgP8Qr9d5HzaF2FrLZJWCESwGFW",
  "key9": "2hxPVKJtomvnuNxE8hQqab3sVGzYPrPBxjeWSf31DZDuvn4dSpGdANy1C6jiV3gmtJHUJj21oXmQFjh6Qc9qM1gs",
  "key10": "5RezEcKsw3onDZt9wTNumjKSAGaAFnAxAw1gvbTa5Q6R2Y3rGdLyDuGxthhsvXx7QQS1jfgpZ1wC7kXJkZEh7dYa",
  "key11": "43HLBGuGzy8QWEQehK6AhZeB6xMkEboTuPRVWRTiEAScr1mBcGVsD8qEyGyeRPnbhK4QzuG62xgggwhvSQS4arqY",
  "key12": "5zqxoPdbwPCFqqWYbbSzAnytyy5TBGiLUR1WdwvS4is1fXXRoUpzddM1c7Qn1QDnBNZWBSvpcDJXhJUMwouB23Yo",
  "key13": "3uj17inTvRqtFB9kMCsSf5kWfuS9K143VS65Q3bE2WiviB3kDBe4zmeiAT2wSez47DGKieUfHnQDPLUYFXFFzJkq",
  "key14": "2HyFLbhUwozLqDVPp48YzsztDgPXVUH6BCXUD9fx2UvYbTa9CbUW4vmhjauofYnF8GNbLBipDEjGqUvJoVUiS9Rs",
  "key15": "4aUa7bRmMb4E27w31yLpt8PKP5T2ad9sQUvRs4AnaEkM3dLPoqiECKEk9t3SYPMK89LRUHTGZXuv5CjsmwXtjBYx",
  "key16": "Gi5Xx3WppHqkJEoHvQPHX6jTMY7ufVyMSbqjA3RngGEq9VcjE6xsWv52wAHWNPaXnem6xjXnqtmdUq5igFxd9Ck",
  "key17": "2NMUapHhgAVBj8cq9bMi3USo84etbJ31kn6QhW5BWksdFevUwEwdnsXqno5WYJS8awyKTsBEZmEuLGzkyn4axrZC",
  "key18": "4Mob9T4nRNf2Kxjz5GUyCMp4JUVMPbqttmgJGDqViaUd8Ka77amjDjPQW85vfYLqVcudwdUcHwx227f2QwYj4RZc",
  "key19": "4CTqQZaVBXhekBfL9dVwBwgmBD9uvW6ADbcvW2GcyXktuNGY9aMk2uTMaT6BAv2YTfbrEMd1LoZCFVT9RWuoWDrG",
  "key20": "4nF55X7T2Gqbn8bfw2qjVpHC47RX8BS2z8GZSWUxYJRYeZTgHKaUvRjDgzGAQc72ZPQcwxLJvF5Ze3J38vknKwtH",
  "key21": "nKWL2qAqAgEncbDcEpXp4vyPcVrLKdwcsqX6vUUZMtzGxuFQ5EpjhfQNCd2PxLCqkhZMqWqDVEUg4yiRXzeFV42",
  "key22": "4KQ69c7fDt2daZsL1yw63ZrvLDCk5Jb2GbpFt17sYGQbexjsPQoFqprNVea4wzoTNjLqjqbfFDMeXB8VCcoL6cAe",
  "key23": "2LwyFA1xBrknFi7DwiqQzECt5M1o7iPo2NLD5mNTQJ5Z6GBUPBgjAdmKvSF9rxnYcgovBFEJkzjvHE9UAz7wXBnW",
  "key24": "2kyNVE2vWFQSAY8L3vXt8WY6JbKbCz7FLnbRSeV53qL7ZHB5aLHmz5LJnsuRnvkEWMQvjjRoKy85M1qbuepduhV",
  "key25": "2KSWnxutJcvVukpuU758VNPF9GZ1eXJkHgCeCATj4mxyGApJvoRoU91jQNcCtHsme2ML5QN65XjGTxsPGKu71TJP",
  "key26": "4QnrZxTpACWjvNj9BsLgHzzan5myzvNFthLyjV5ixrjMaSAzZvGn6hf99dumNzVcm1cS48cxAfNG5H4hsco1tf9R",
  "key27": "gn7C11DtyN1xZ8MCknqXRvKoeFEWCTnZe27idfpGTbdcEY5vVuW3C1h9rZz4rCrJyghxbJ47jFoLWYXJdT13pWj",
  "key28": "4iStTu1kt6XSG8gdtKWjFSRK2ZvsnDjkai1Bg3go6GGJxRFZR9gDsJw24Kg4WeCHLVdjf5oU4b6StYqntuiLbtbW",
  "key29": "5p4CuCbh72vVQHXYxyQX2MKtQCqZFW9kE7d1KDuh8ZSryAfNt6UHe2YpLgXivPHS7UGUmKNoeQgGcHchEXXgC29a",
  "key30": "2Cr5HkFAm4wUFuCvUNx5XfkNJE4LYYcsx3UQs2JTJohZBtCY7iBF7Eq261jSnZna2w95VG64Vr91hZWyNRsvq1eD",
  "key31": "uQS8sYN4GJNAHo8YTR6HABmGN4W3qzAh9eha1qxKQhx573P8BiVp1PPSmxacN8b5Z8D92RwQPFm1ADXGhEWysbt",
  "key32": "gQ51x2p54ov6zQCqUsbS8LsJiD8FF6NSbhdrQSEfC2BxzXJrizEYK4aiqdu4dvqxTx3jnretTJ832JQL2SXVjTE",
  "key33": "2jU1tZ72Rofqj7jhbHowG7CLLrAiUC4uHi7V2mzh5BRBpZCBGFtVXNiYVVbJB694C4wRScCcgmdXdrEWosdbGYxV",
  "key34": "2DPwgAAJMCDNoQXGnPJiX8eZhGjNjLnsbHLkdDNP1wFQ5dbte3pNfaZDe22Zy53jRzyZhGmVFjgep6Gi5sijr9Wi",
  "key35": "4CpsKjbB9tKSua3pkYjtwVnQKkSZmKxxBNMNZqxqPszdL8EdeFMozWLSYepNKaPD6uCpjykp9NjR3w3ZvNmQ81Fe",
  "key36": "2npoaxcAuFQhstDvxoeuXTFghye7ANo9YVibxG9vUHNeBnebjg1UU2QFXPFpwA3ofZR9n3Z5croJpcS98VmCKCxm",
  "key37": "33uSbxtWThbWg89XrpzpD65BPdWLK1iT5R28nJ5wSjiyYF4nqDdHyaeFwLKLEK7tvscV7EyjFv87okYAC7yKcpRm",
  "key38": "3ZDzkdL6pXNfScZRRd4bwMHD8faUDz65XdDX7arS9sg8nFLnkQDBWHTMuKdM1j56UMQX7VBF9zZnmcraFUYDoCpw",
  "key39": "523xk3ZbWkJ342xkQvJWvbySrxeUmFrkPWWcSvid81pXp5Q4be23Lw9HBmTecU4Fq3dRhJbzJFJVLrUe1Cpv5MEJ",
  "key40": "3HWcQQwwpVc8AytHntUcCJs6FWUqthZ8QsDunHEQehZAGpqs7waKzCKukv8YTY6uZ5LhT8ErP7kgm3EnJaXEUV42",
  "key41": "2qSibNCcYJEuvdCNjUMMNMzE3AeziSx5bNxDJF2bV3P1DyTBFb1n7wREUTRCExBjUwGs1ZThz5faDMBjsUpEMDWy"
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
