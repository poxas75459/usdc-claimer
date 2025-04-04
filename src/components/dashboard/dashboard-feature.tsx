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
    "2jdazE3xdwUMsATXc8P4wpmsMAzqPf1B1FonEFz4vuWUGm1zvZja577c32FwCmA4JLjM264L49AVRMRJJxgpaAGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ji7ddYhVER7snYydJcjjYEUPGF2T7Zzo9rqsPRxv4Hw8xXwUfraENWcGJFY3Rhog1xz7eCEcsd83mJeV8n8nyt6",
  "key1": "3HQuYDyS3VYsZtRAG1RJf4Ybs3EANSjErqKXBnwkwhKh13nKbA7gc9pKHgeQ4MV7HKdj6ccUYj6QhS7sZnL9QKaj",
  "key2": "2ctAqbXzvZ1NRLDCsWhK4sRUwtqFqZzGvvSUmKEEvcuJUrG6XkPR9B4F9jgoz6j8S21UbnemacLh2MRpqGJ4KcLi",
  "key3": "2NxFhBSFmzccERvZpKAkrLCr1q9sVrpBaj9jcrdMYLXGiu2jBMkAnyejVApe1V5sHZexsBP1QJ2iwLo5HY27LbVV",
  "key4": "3mmAPTaMgFctehW66WwBQwZXgRJHap9ixrsE19Lv2LS5bwQ2MwZQ7gLCPVhqRHWBK3aJBrBeKEgXHDTkYpwWYFqh",
  "key5": "25CQnoC9Ny7GBhCRmdFc8ghSi93VJtVx3EhGNHn229eDtxRjGaJJWExw12Kq55CuqeLb3C7NKXqUuyewZ3wVrtQm",
  "key6": "2z9erKw88rnSX7y9ZbmKHLMDgrz6ArUAPQkNabmsxczzdiUC67Cp2LTfPDqnSkv9fVwjdYV1jwD8vaVJspH9axEs",
  "key7": "4eMrwiFoNWLrBtzb7VFto5ZFzLtmauQAvxbqTMXuXYda115hUqif1xuuJee1CK4o1U9Pf3FW4bVbiYfAZVmRrG1h",
  "key8": "MYvYegL2eUe1FSfEsonjEt7VPHoNwaYBZj3Q865yQUyMHgBeyWApDSmKqv8aVUwjGcACPZZat1wrZwQqap7GDpD",
  "key9": "3fijvfb6aGqmSqpv5BNwLdDdy8GNMMgxDKKDBy9JgLXqyCoddaCeUfCmsHZTdpZnE3DmvEFFahLAHwFUdmtqVtkX",
  "key10": "4u7qM9Nx3hSN6fYCaVrLep5KCLSz1czxUxq9kqKA7YGqYycUr12UXxgqmYqX6yJvkdwHTmH3iBN6PUmu9Yf3bSRG",
  "key11": "3AQsmBjNmcf2kgcZCZ65j1t2YsMWGXkQMDNmMQcZRPGnTCJxDRuXtcyTqkwtcuaL1UDxikQDi9nYyCqnNsnQ8CUD",
  "key12": "62cCJ4FZJzpxEhSvCat4CnRXaNkHjdKhpiKDm2cpHMf3pty1uhNJHKzooo7csUem2xtVgtb18abY1LibZLVTGMzi",
  "key13": "kRo4Q8YTKgFPeLyWNRpy9RqCjcvYWPQmVhdRQEprnc6YTXLj6ux5K5B2XF7KxFycJWEwhgg8hTTECTAc88KnNQu",
  "key14": "33DeeGJ6tG6Hy5aQzqjZu7Qs2e41S7JYE2ANgGnitbbFohHQ3Bh3cPYV8L8GJw7R6p7oc5o2xozwQb7t2fuTx97G",
  "key15": "5qjdTs9YUa3yh5hFc2mRjBXyenPq8adsQULA1kT5xPWLcSWYoUkjsgQaDuYagvicNMHENEJ7LFbhvFLRK44KhbKF",
  "key16": "FdUHdiZjU6bYgdPkuNWyw57APxdCwCt1r1uR188WLyEY2qxetRVwo4yqqY8YcfV36stvLdioxYJ71i7k8DD7ZtP",
  "key17": "SSc9NZk7W5c8vgxrZYJdCKeNDpQFWWm3QMLW4iTbkfyR1C43bBusa8TKBAKMcaU5JRxyd7u9WoTAG8APVvtHkqm",
  "key18": "3UXUMHGDTPp6T9BYiEztnmGk9AjzJnXdeZrFbW9cEZ6fbVJGkZEo1hRGY2R49iYfbWo9cscVvPu2kfgr9gzy9C6F",
  "key19": "324wiw5fZ5yNkc6mDodESzVBaaC4rjU3Uzz5K2C7ESaDxYuCHNqzE5pfpFK1X35RokH9WPNyDsbHYjyRj3JKMH39",
  "key20": "5wWrbLE48DtnBTfHTdM8wm7P7wtigjP9ftr278m5YdAdQJ1mVnqSYKLb8V7A4eNP5HLZdXyzjWbmtJhZCdwoaoE9",
  "key21": "4YanaPFoAJKTftfJNzaYENQGSpCw7gaYz1STuFgDLmghMPoXuFrUg2RoiNNmErQyGP287LYZAHTBViheeMmvGCo5",
  "key22": "2JbbSHqaB9wNAtkPnuDibGYMMJkMwNziv7aWrrfnzgJLf4QmTWhWGGkYc2xRfVtn9apkgP4SnDHRY2bs4a8rdaVT",
  "key23": "4ceJGXLG6QMqcXn8dC2rbt3TL4x5wRyfCeutfrG7K5S5PDcjxQR4cQi53hS1945fKbzzb2DvjBZLrEjK9sbzEB16",
  "key24": "4s7YdhYjfj6zhPXAZsuK11ufhXAzRprZCBEXf9U6gVaEM258tFWu21jzAmRNLZz7FGoQ9PxdhekLCffQuuXxGgFH",
  "key25": "2Rgs4swfeUDf3hLmxnW7aXSCaCYYZL5EGBxc3ahzPUVPvtAnWrRF3NwZcJjN9YzuN6myDAqDRqrCiYUT4TtsnEY2",
  "key26": "QGQV19eqF8LAndbb6Fx9BYgh4DXyRqXLMG8B6Db58n9eQnrqtSzc5cBMrrmhYE4soE7S9beMN59nGkG26b5XDsM",
  "key27": "3s8uKoNGBUy1Zt884cHqyoxSsjEBiG6vgK1w71uMTDoeRrwDfneN4nxmLs95bwLtia3TFVVxvRGAoHUXnvDiirYd",
  "key28": "71dKLV1cxP7UthvYpAaDGpffQsozTqS951FK21WW31LLUXXvDfCLSeEpRPHz3MnEXGRSgxX8kfFndBMacmi1PtH",
  "key29": "5jwChYKZzVh12P6QNrJQXwaFxfU3DfeZjZcJe74UqkgfhFPb1Q9s98BYzWcM5Dh9AfCJDzY9LgH9yzz44LPSQe8V",
  "key30": "5yXYQMBAMaACGicagim3JoNXGCHyrwBFVtGR6JJeAKkYtctzYN9XCuw3SiaccXnJ3eHopNgFD6E7oMicAKJVMrZJ",
  "key31": "39c88TA6M7T1Zyrxp6Ds5FW8gtfqpvPVFLSuRe4UEBxvbLSu1c93myeyjoYAVzG1eyLMdg3mAJWA1mHYw5eAQNX9",
  "key32": "VqbJatzRcuxZh6KyXiyYWLydZGA8i6YWaDgLBHprBjegaq4mJTPXj8mL8bSQNLTpbQFddfu2AcJyx4CDRd6zCpW",
  "key33": "4zYmME84ig7ai9oGbjNqAwmBmwffXYMAfGwgBEz9FtGTddopoQx2GgSuSMWvFwn2PNmUG8uf1J7Nryn4svxy2cKj",
  "key34": "1pSbdj9JZo4ruvwaczM5xRCtobWB9eBKCSv4pVmFaSgzpQVkTj6h8a4THWD5qcQPG3HoRWJr5aPMa4gF7ry2gJY"
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
