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
    "4fNwKDh24MSL1aGHoPdDWkdKJgGgXM5AdVgXFFJQagevUsB8ukh3wfTQvxpKTh5txrYXfaF7WVyoT5a4dJjq94RZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U95ikqA3ws9cfkZjQ3xb3UyxjFwk6zKXGN4ZchyaJcfd6wE4ipmAHp3E2Ckg3DY22qwLQUoAd9xYnfPMBpTZ6nd",
  "key1": "4E2gK9QUaUbKwSWtse7KSbxtyasZcddtfa6QRmCsR31Rj5BqRz2SyVRdR3SWToADn687vYYjzojnH8LX4FGT8ng2",
  "key2": "4asA7Hh24y8r2fj1RwPeuojPsZsBkzE59g6PqxLfaZfB642RvgmtKx2kHQ2UotwjSyKTocQN4vfbThiosBVW6sVD",
  "key3": "RzUjHG7JpuknbmLgt3GbWHNuvC7MQfs4X5fVEbMLwPNiBFGPa4T6YU8gM8WUYAEzGS2LaaREQPWz5GUYNXvvX57",
  "key4": "3AEQrERgc6oVyURV2NiKYtY3k1YBNCchpNAyFpdcizEVSPNSXHnCNhZQjcUKhWengm6cbxJrXhqFXD4sknE8KfSm",
  "key5": "3icGTFjWaXn2Bfx3YVxbgPJQKi2isoHzukJ4ZBnvDQnozWMQq5J7WVYjmRsyeeM7JphFhjybobbqaSpzSB6tibCS",
  "key6": "4MfvSvLwKVahf6TgJ2VzprwCg1RTeqU6Robja92Qx25KZqDrtBDH157jwZHzy7TYxbz6zu7wUeEajuhzBuEKB98a",
  "key7": "5Qrqaik88e7Mkrsbej1cQkoiY1LhvaFqzSKQoSJmguVDuswNU6Zw72Yagyg1GC3EhRvWr2Ngz8eYUmmLNzEQ2QrS",
  "key8": "4xDAZvLt3jAB27xoKgkfq9ELx4HoZH2qhfisvJ7CygPm2QwpB9uTuGn3GV5iJwibdtocw7Vax3BXoLj54TCvP2zZ",
  "key9": "4VBdiANeQ9PoNtd7xVYgXEw5Mqvit6SeGASoUz4xaVD56mWRehPY5LAaqE3kSARJX55uoNfArKMe3A2ox9aDe9rN",
  "key10": "5AxAzQRpUbKnzJtYnFmFxhpGxw56Fba7hLKHogk4HYYKn5FPUFX2uffvCFDrQworb2S3iRKh4Uh6nJpfonqy4c9n",
  "key11": "3A4hT4kXVU9YvrWaDVFg2X5wAwW3nuyh4RTmVMSzXu1EKxHumtQZCNSho6Tqf3Jb9x8PNNkffKrk5aLkGiebqJq",
  "key12": "23zBdmP7iJzXJmXhFjyLAaCRFfMLpLUmp99nDAyhumotyww8Y96WtGUpYuuUmRyXdxDZc76SXG8FPt5WSyFbKEs2",
  "key13": "4j8qvKs7yaghiEqBvsYaC8roHViEnyerUh8X4PAPzL36qBG5zdzpaA8EcoScMaYa3JWfQapgrjsHB1JZRNX7qMj7",
  "key14": "2nTNQVrMXQ96RmDq5BLr6NjTS1cbMF23wVEoe7H3h4k5b3uUKhXBXkLJmUAB7mHYL86vfULsuq9PwwkZTmd2ocE9",
  "key15": "2KqzCXzg5CYuHHpNRmMCUpzzzgSSPrXAikbWVTKNVPuZabrCCrJF2bxut3YBjLTHShqW3CDyeSFRWZkUpYZULhhY",
  "key16": "5FvPUCgrmafWDRvqfKC8nwqbwEajYyzVUQJvZfHpboUgmB23T3b9aMz7dk2JMcKcCvCgWwqRa6q6NajZ7mZ7ozSy",
  "key17": "DfZvieEqxYmA4LjZk2PSFiiBHAwxaZCiuqM8i8XAGNtLJ7Kai7Cdsrps3NdTNXgr9stMfpcaJhjyuPF64scb4mZ",
  "key18": "44KmmuK5xNLQf6Gz7inKz8LGHC4p1TWc6vx9KMM9t6scRaEmHgUF8xBPUoQTHRNXw5MzMYntwDyTX5dSspygGvTW",
  "key19": "2kqCCK61MXTWW8XtdJDY1UmqxbdDEqx2DpXj7AmgvR42c3o7UEBeWrYFue8adye9kY3tza4bp1jEGmh1kkpZW3nD",
  "key20": "5NsTCFU842zkBF78wMYPHfi7upaGaBkLUWuGL5RnLmpALzRjYtywUHxCr65uHFAuw4qcqBAoDniAJUP19v5siHRn",
  "key21": "4MEyFvyq3bkEgaxFB1cWaJ2uMmLXr6Teo1oSuk8rPNP86Dp6gvz3qDyBhEAqQqG3E6J7y8FAfBMbxZaTciAkjank",
  "key22": "35LNoJPBAZUN1eeHYGLuFYDE2XpqQqGXQBmX5mW46FVDSzY5Gi6txYp16Ft3q1RDjqCXuMDF3Ay2RkcxvSdiffvJ",
  "key23": "EAJUqSkXzYjvRMPGmo2ESAZVZkQXDtGyoKbMt6PDVQKHPkxqDCZo7uvP7PfNp6TZJfCZSYHjDctjv2yvWURgFnZ",
  "key24": "2eavY7RpdwniZ9EqWqCa1tJomDzvzmjXmfcJLpq3M6nSbPXWQ8htzMZ3K3xJa9o2F68qujbXj43xPbJrWioEYPwi",
  "key25": "5jH7osxizJhE5MBngtKwpohewXPBAJ3v113VQ58BDLiboRnJWy1cwwjnzEgZJkMVemqWza2dashTdFRnRMATVzWg",
  "key26": "4JyuQ3a4N59fM54Pq8WxpK8Ncyub9nCgGNjruzkQwjQmqL6qpRtTJjsNQF4SXyDzSJrgo5fsJkU1g3zhF1LQ4Nft",
  "key27": "2Yn3q2eujopXGtXVr3LVfSbFkm8AK78qBBwXETmNH9yTLHdefSLB4A5hVd2gK2MvESZE4C1EALXzdhkWSiXGvc3v",
  "key28": "2JUEFGUkyHJN2Qeqc6RCMUzQgpChA7MWhYoBvdUA2SH2cZk5x9gF9wggkku5mNJzxXdQwG1NpNFfAaTkhtqrYSvp",
  "key29": "4VHxCCj4Lbtu41EVWKQhhgRkKuuKoAxTKK4WN41YtvfcyqW22KdNFRPAguqMwvGVwnxkEDmLRZDqVi6kHQ5KENQg",
  "key30": "W9nY7QNqSDAPnfseRo7gEjpB5qCnZU1DMpmScTShLiq46tGVkwTwH9LdEsBdLdXeEixoz6BXLRNrtQ77cdEdBCC",
  "key31": "4atNA8xBxk21smZnz9vsVosWmsXttZRxVNuhhsvrhDHV8rbKvRwJM49eAuZWpd9LG6x8WvdKoKsSCUzaLMhaJCnR",
  "key32": "3iV2nrVfJKsJ8yF3FpofjENCoyTfKU4oNEHWX4JxQPwAW6PPcAc1eyX5DnUpKzx5ZWnRuFmv3xRUvYCJ7UMPfrLX"
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
