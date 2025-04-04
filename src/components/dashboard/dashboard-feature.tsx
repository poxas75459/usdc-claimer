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
    "5jHzEndaa2j3jci5BQkyRvTsNj5XzrZMMxh6RCdzurPXsoPmCDM2UE7uzNoumXhnPb3ZXzhK9AU7kZYQmYNATBzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ALYf8JFEx36PSnCuKmkS7tKRwESHFcARLeLw745ybhHzh1u2PsGHdiEaq8gXyEaEk5hB7oz4nZYkh7n85wBuFk",
  "key1": "5EQ9BaZEzyshSXJUJmcqtnKNvgGtk11vRa1iTNg97tCPJxJhLWXZecHhMmD1e5PsUmR3nws4CTx2K7oDry42AfAU",
  "key2": "62b28PWmMzVgDdvCWyzd42YWrK6qG5PUeDyt1vxNvF3t6Y81tLJ83Gt59Q58c4qxMbqTFpzc2GFCqCtTgpXSmRNe",
  "key3": "41Zw7nzQ9BZD1LRYGPB5TfCYUKsmpsxSDCaSQXU165Wp4D6NH5kBLPYtLPfexdmh37B6UvatZfTPyQAH82vwmhT8",
  "key4": "PoKFfFmadXZCwUVBi5m8wyMaQchHNjs1bxbJzoX4bmjk868nMuvUQKcD7kmfzBQjGhgNgChtbbH26ceuQmxP6yX",
  "key5": "45eBoEGNTLsUX68SxbSEgmjRnqqi8mZUsnQnVkfMiNiLw7R5t1Rqng4BXLmNriaQR1PHf8YuHaiHV3Tys3yP1Q45",
  "key6": "3EwJpBUFKYKD1LBhQzw7GtJPyVT7RXFobcW7qnb9wvC522QugaBrHnqbmLXNtXNP9nvNTxKMwQgFHJa8xm7vHAou",
  "key7": "3YTZPXentg1eHJ3BeEwSWUHqsabS7QiUPNBqZf97RNoTDdta2yGk9poLtdsKGNevNYGn8r3P1Xb8HCLszxCykdfY",
  "key8": "2G7a8Y6uEaVvcFQfeewcW4VHadybFQp3fdy6gm3ngQoVhi4MgtdrNtvkEtyEZLmU22XxmCeQRLh1SJvYxWJGRwA4",
  "key9": "53exoQHjf3cvv8mFR8MtVfDVW61di1F5i6v7vxhQX2ciPs6E7S227Wh8ak38LA4w6yKkpCPVzv2yxgvt73SxMHdC",
  "key10": "2p7Mdp83NoWkRfu4YHm75YzPUrNWKp93ZHecCvnqqtEeKp8DLXhw8bkhjsG1kM2uaKtidC8AdGxRx15SvJ2T2mC6",
  "key11": "5ivWusbNnDDeThNe346URW4NpuKAZqaZrHCuYs9Nmjdm7eUzkwi6sfFvJ9JWJtaqdxj1DBq9XPZc1StgA2mxH9ub",
  "key12": "jLsAZKHCC9GQxWjBmU8pFeVQYcHidD6txRhCbiNzW3JDob8nPbtg3YjFJgUnqHTak1JkyqZ7x4Fh9q7BmKUqPYf",
  "key13": "3GjWqDq1yJmP8CkC1fKQp32jpvLrk5oAEJN7vpCgiax7tqTYxXV6TnGefcTuNynoooSA4EA4XX62pZWZrSc4Ca19",
  "key14": "2U8o9PckEARgRNop6GP8Yt22s7cB9sAvwCJryKvGNC6eq6rh3PFHyRVze55iRo6DtPCosWw8wJKU4N48N5NuhmCR",
  "key15": "4A4tEnicrQvi4McJLz3mmQYaozX8aYbwcgcwhbMPuFRBBSaD6A7FLvRPn4dJVxx1vaXmpvcjb74sETK1g2uRjDCv",
  "key16": "4TXEQaW6AhH98jpdnqEvdXNKBPf5nweo8GU9gBAzm5185UbzeD1fD3nqeQkA52R1LdgtYvqoGGm7utETqJ9QnCf",
  "key17": "5Tbt4TWfRnbeLFCjXmdVQbXTXjSu3a6gVmGKK41Ko859JwwrWhmAL1faMBAPSh7ZJ7gUfiaAWz2pnSNtMYCzwL4j",
  "key18": "24ss3WJnuizRapUR7bakatcneXV6bZDfXSTiYwQzwr9YacN2nbMWQ8Zm6QFvVg8zaQFPnhSYGQnkx7rpnhvGzyyM",
  "key19": "49FQVvJet83vNZAy1DJy8rch8RcZzEBfbaNz6sHpw7sgKxoghRecxdntS4ofhxjkf95UNaEuatTUst8X3ZRx1obM",
  "key20": "5RD1CN3Y6PmjbwYWrsxfyScxoCXvXZv3W3hb6STRxRkoJCkD1PX8exBYVWkYXzNXSaBPAJuyeStE9FdbrC6kRiWQ",
  "key21": "5CxpdWXVcRQd6L1nQr9XwvB6utdBbMnxuNTxEfdQ4TqD9rzSmuctfsm1k9QqwJ8pJYNwMpQ7uJvqK7oY32p7CG4Z",
  "key22": "5ckvdGabYTrTyZjCAMixUmdQJKbri6HyN9zgCpZkZDx8M9DceN1wEX9CtQr7Drw12tNrpkbg6Y8xGFCMuUBWQcug",
  "key23": "5UAYCj3Tty7itq2MzYJXtWRQbxarcRoYBtPLcEJGM8MUpovZk5dX3izzC8iGxV8uZxyyniHoRPHQpY4QDWfGU2MY",
  "key24": "4JsZjqTKV1gA2CvQGCPwnfzVM9kHJHkuZQQGNpEw9WDwK1jCtFJ5e5f7reQZHe2fYNaeKF3TYWWaYGhyKjw2DZAw",
  "key25": "5jAViHUtPksti6DvKWZa3QkV7KrZTph1DwwqB55yagN1DWWWXQoZSwqeX1Aeksw25eRQ47FSz511mtuSY6R1A1yW",
  "key26": "2ai6VJcWaVNXGL4UY2BSjZTd3Gv2GVEKGiyop8fQuUjaCtK7LW6Ji7tjCB99zvQEaPjznaBdSxe6r4CLcupTHoyH",
  "key27": "3nojGRoiGJRZwHtLKaVDD1fMvs2v6fBZamicc9ti4xfFjHuqwdAwKomdYgtAp2eX3hCw2nZQBycMvuV9oTonXJkJ",
  "key28": "xKLzjmtgSLmnMwtXvuYQN7kqGtSTLEkFdnMDrBJoWrVA9qD4GNonvJgZ3E7Qxcjz8PAt5nKiMxAjUVSS1MdWPMr",
  "key29": "3ASbwGUTVDiZpTacYRHPVZMpiGctneruLY9cFR8RfQGhEi8kRnMz7v5fZE4ixi57hRDbPRDHdxtUU9ZvXQDMg3pH"
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
