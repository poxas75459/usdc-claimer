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
    "5c8s8E83hjHG6SFbtCsmkZAPaUgoLoBxe9SorWiJXghqyVkRqPhvTn8wBqfw7rWynkqm9YMduv9tCXPPxCrCVWxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vxpT7nQC8zDqrXLS7MWeqyz6Vee8iyTxms33tjkXR3QuwLo7LqK8UKEai2UxtneiDY8wh6kmozqe1VVQNGcxJdu",
  "key1": "Gt3nVLebgr423HtnSkk75g5nPFUGNmQD2AH3jkmqdFFQDJgd1WFDG4xNfhNy56wx4eugan3QRKcKJ3GoGbmqq6L",
  "key2": "5icq9TRUAUELGb9dXKA2UfuHLeXtr2zMxATvkUJuyAUDqRbEPz3pnBExm88kjq4eoygUZwX3FF2UrYe4SP7PVwym",
  "key3": "3tGwnX9m7aMKG5N4GFDaMvPp5Kzt6yt9XQGEwQDiZucddzq7RijjPtzYpJKxL1xbj4D9aKAJJCgtbGkgUKZ8q7xM",
  "key4": "dh9P1dujj29TB7TdZeBd9Zn2YG2nPjQ2RwYMQvKsQh8717F29zXi9boWSCjDoHYjY3Mr7XpWrZv32bqiggoM5ZX",
  "key5": "2hLnBFzETBZzNYw9yCwJzYqVF8gJxxEfm11n7GP8vNsum4YXjb7NGiPFnGgasPnrrRpiFDncaFrnvxAS26TQYToa",
  "key6": "5HqcPcFT8MN1hs7tpCWpKYNPRUx4xrrAxrBizCSNFdRKGCHTQJJArJ4yUDojFWFQawcvFmaESvoov27Lv8p4y1Lq",
  "key7": "3Fa1U4qzvqwPJxU6aNMcK7aaaZ34uNTN6Ctou7BhdDS3PH3eYxoFjoRovvGZnTLZbHBFhVqgmDuxMszBwse3gh9d",
  "key8": "5jFhEr5L6BHQ6ckSEv5AxDZCVkK6W9x4h4iPitUhQuR4C72Vruaqz9AVN7Mp7qugZxJT4y335VucZCZPXCBAzjBA",
  "key9": "396oNTqwDcmQHJpMtfTLfGz5bt1vx6wrzjASX8Uou1gz2bMASPgquDQXVAXeSNcKxki7BJ1gqeME4hY8NMGgSoKx",
  "key10": "31Kk1fvnBKGte9r81NKr3XNesP5VCpE7gd2HQJdG31QdmzivhUpEtRwajWTv63Z2xmMgjWpWCXDdKqRaunRq9WnL",
  "key11": "2HhAxgGwyr1Ao28UM4bMwgGWyeEmhq82xmnpnjr5P6MngEmnSCRcjJUG83MNtAXvNzc6mjFwGK7GK8M9Feaa7iqD",
  "key12": "22LeQTwNeP9CBTaBEH1YS8Ex5QmQRUZZXaQQpACsABqw5hyXppDtxfqj7MiZQX3c9ut46XikRWKAMaEfQfeie5GM",
  "key13": "5ftRhgxbJi5f7ptqkjDYSa3xQEBLTuydvQFaBmSxKKrRVnqHfyXaBqFqkHQPDU3E7gNxxYwHn5r3j5nFE6yTh5vv",
  "key14": "3x1R4UhGX889JRirynbaWTnPBLnD5s7RqGBNdqSuoCS7iomWQKUbqRskAugoyd8LVA64D6TZTxdM9SM1eF2ArTJu",
  "key15": "Mip42Hsty1B8TNvereKXzzbYRGZZEffpUVLWqv7CWB8iKsUkFu2KKxqfY2ndKdxZtRFsE33afriH9euon2EhbvH",
  "key16": "E7zEDfgaZT7adMQBBs6eXVRWGgFtZJdzfQAFdai8JwCxaq9e2ydh8NAea9ncyk8Zjvetzog4quBV9GmurxQPuta",
  "key17": "39p5dzGK2cm5ATtVezL9wPdWPakEoWCCDk8aVRcgyEjM7ieC7mGhChsd3UAmW6fa16eAe4A2wRngasjmjVGzNXQm",
  "key18": "5MLk29vu36G5HxeYewxxvy7jgPbgRqtpiobxoXdo8oShua9au94H3eRjvmAzQ1phWYhBLLn9Ano8k4c3RkK48b6r",
  "key19": "mL3V6tsndXF9ast8VdWn6pEwGKdo7ecQSw2x3RqSYdFA4quguiTuxxCeHw6v4phd4wEFJBRvPmK3Mz4XPJC6HT6",
  "key20": "423wQtFE7ag3EzDWkTmKrASit5pQjGpArdcEWAijHcvYwWmCDi4aR8KjL26iRrwtcKaWg4MEJnG93sTFUbRLcbgS",
  "key21": "4QMmXRNGF63emXXFGmFH4Fk5dHN6M4rFjRgh64ZArf6C6wPTwbCNKC8ogWPyktqeaMAe5oCYL8XKxyHSuNrFVuhp",
  "key22": "5obQwKCDvJosi5kGrWnUt9ocdgEM61MVmoes2VVA9sTH27rYAjK6ao92QydJAmVFYNTiyqdjNdzm5QsxkfCmF4Kf",
  "key23": "44BtSz2pG2kcm4E4X6SNcrSbyfTetawhZmbpkHF6k3oiSzLe825nhHiTpKc9Pq4LRAbgA4Tddd7ArBDzKEVz4cYS",
  "key24": "4i4Vb5oRWLoPQmYT2Y5XxVEGfMHXLC53dR3cuqEMRANahu9WYaAo5DK5kmVuhtg1bHbLjyu6HPue4CXdy8bzHicq",
  "key25": "3jg85cEuuQQ4aatQemoqxXBYTxt3BmyZq9C1oiPkG6dMmNQ5pZUH9vuD13MNMVrUsFE4varLvRoHA2NphB1w6xsf",
  "key26": "3X34NzZBSzh4b7zgeFGhLGTcErfNmQwBuAiCUMVWnkSujxNX5KAgh9MuDFkaVXmPd3PDjLAwA6o9xuNAugj8Ztqw",
  "key27": "5YRPQQbPeUHQiGY1Drw7iorMWVXCFqukLohjj7x392etFoKzrNPgGqxYfvkXSE97vT8Tq4LWeJioJd3v3SyntfRb",
  "key28": "4PnQFUhLBtQ7kVU1r92H7zCZnb975bkmbGgG4VHK2U2urbfHbmQYZK6m7GveFjYVjr392yrboVq4yiiNhwbeebBV",
  "key29": "5wgQW6oxoPxzujms3iX58g8JjkmgWWFXzab9jzrKiHnXfGYkbUNn4q8R5x6i314NwtQb8WVYsrg6vKdXUu1y3URC",
  "key30": "27zLUwU7GFnFDrXuCPmCepohcLAQjCWTxCDyKibVFdvvYM64WWYbbZ9VfPpwebiXqS3YNCU65shhXfkSi58UopRm",
  "key31": "vW7ZAs35cR9TVaS3W1Vet3dbAPczsJgwL6getwre1ZbcBpMWXYKX7zsTGjieLytjSA2v9JVate1J9o9Y8gggMKJ",
  "key32": "4ngjgio36e13DRe4iNDiAcQxKTBFbULaEycRF7HAU4DgPuva1aGh32uZNCV2fDickKDaXFBXMvidpDSWXSLpE8dg",
  "key33": "28c4viKnwseWEPty7PdBf3B2k6XRHr6wELHBsrXpZMZtYvHsQcLutxt87MkX621aZhMr3ifaVZLpWPLMXzXHWLk9",
  "key34": "2HQnLojuMcJK34Zcf8zxVUAKeKcjbkzRS7A2YPa2kAhaYdp3sjaDBdpUjaN6trdKyx21FEPCRvrHAZ2FHKt8pnvj",
  "key35": "1CdUZMRDqEHDaSeZvkqPcCEpPVDxDD3xWxfEKga7zNpRzTB8zEbtpzzoW6ssyNvAqy6zNcSEnfRCYQ396z5iW8i",
  "key36": "2u7D4J5SnPHWQvutoU7uHNwURta95BxtqwSdjZASo27hNnhuPqUbJfGzf68VrCK2ErVvPKezK8j9bpDzNZhvUUKQ"
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
