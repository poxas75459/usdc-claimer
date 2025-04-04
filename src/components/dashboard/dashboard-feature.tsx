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
    "21UFnN3uZHtQGTgdZXQvW5f4N3qm15gmNaakkSWr6Fh85GMACf6UjvqZmymQDcUPVpDwRiYo3dGVMWzxNxHchGNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FxkRNVQDGFaiPh6y2zrSitwfwxyvbMjfAJXcAsGoZAzjGoYRgdmGpbDqdGxbuUoRWW8gdAcTBzyzm6NVMrysLrb",
  "key1": "4N1W4c6a4hif3QapejA5zX58UdGCf2ProoPpwDh3T7pT8g7QhC7NTsKizVxLCEPpa7hbD5KLEtydvRoYPYszUnf1",
  "key2": "4P4axVG4QKZ1EnmfDf4BY5BXg95zXM76FAtjzYZDcf2D7MZZd6ARhrotwbpuZBgP4gikzdGcX4Si6J5GoW38jhqv",
  "key3": "4Wk18CZftv32niG42FKKLXnSDdBDzxAfvcqrca1wrPy2HkAfRJtfPWzsLvGMuPD1YMTFFjBU6UoyPYcxmHmMJaA3",
  "key4": "4xXPHN8nAdzURTFN9SXmA74NGQSsQGeRJ4fWrwmPriVntp75ebBJbsMsMxt5KFU87jEt8nbFq5ZS6MJxjU7RQzez",
  "key5": "4khEvQFVNXFhkMNZNaSpoC74oKE2ja4Ytv5DGjWxLruXRXuvHPC2LGqx2M6CbfPUyeawQY6oLvc9fUPFBEWWXfgb",
  "key6": "Vp1VPxfc8HhWLnV9r9ejPT4n1B1SWV9h4Z6vZSdFfz6mxPWLExYapirXX5iHJZB4zQGHbnYHsowfRxZC3ifTzQD",
  "key7": "5fn1YonmSjdgun95GEKNYzD6VZ2nC2ZL81moj4HhFZbgzbetk6YS3ZPYHu2MJXuZsCLnyiHugRgYcY56rs8nLFdt",
  "key8": "2571y5M1Pwz7o4poAyMjfFQaG2r5HA5cK8Dzxo1E36MmEcs1tErU4669RNccjjPAHMekMmo2kzB88hF66QEL3Xv3",
  "key9": "43ouNczTafLZsMdKf2U9UXobVwZjGcD2RQkxZLLFTBgHg935wqN4j4JiNiNz6pKNK2H9gGUDMPVdtkTbXrzqaJk9",
  "key10": "3xwDXft9ypL9ihiVCheCruGVBk4arpMrC3FuUyrUyW5z4aN9oAhPeLPX8R5652TQJXnJMkgP3NoGL7nC75xip4SN",
  "key11": "3KbX75v7cX6K8ra1w2p9eMKF9mxXEWufodTFNHdmyVUYPfnfW2T5F97WJinkYLyNNzaZQ2yZju5eRcPJqk17WeZA",
  "key12": "tuTsqyFgoxWqvMPGBTjaQCYXcr2DoRY9HUEtXikScEupnJW5KRdDLLNJggqLeh2Pxi8q25xecJyZMogkc27vCTo",
  "key13": "3Q1gr6X9dALGgUnNiNd9oFAqdN3uNxPXciHdiyssCFKWKt1E9Att8qMvjVZaDSxg2QLLXFEXGymMjBqwfv6bTFP1",
  "key14": "3bWw1XCDJBYy5cZfctWJNaXvLUmsQh8BuX1BiLMXfJaFmC3N9bofmCrjLLBPwzsnzqMPhixcJ9Ne9MQwHh2xbBtA",
  "key15": "3XWHPhSV8NFm9uJd4FGtMfmS1pDWVAnBZJLEyedRooJxRQo3suPNMG4nCZtk7Q91RmDXDXYvn1PikrvH4uV8EyD8",
  "key16": "9eCUi5sZ1YVBiKoxTDeXjZdVBmAuEGbodenPeyYL24jMNAfZ6hznQmjni7HT3MQVz9kTYbgoPf4tpDmM5RvdpXz",
  "key17": "5UMgjBnTYxgxtwLvVT4bJTAnCXBh7PVkywx6Ck8ygb1fpJySNisRBa8CnnLpNDTrhan352s15p1mg7N3YwRWYKd3",
  "key18": "4qtmH4opEfUQn6q9Myq9Vwn7AMVCG9hnZT9Wmvtr2smcKgWWJAWBpW3RknZwvHd134mpdcwz6DzMWhZUNWchEzPE",
  "key19": "qKKVCmu9erzLyTyM7qufZmXdHJQJCyxCx4D6wp9ekoWsU1N2NgFVnE1tcMc2uJ9d7HeE8zmr4pYBtKSe7UFLzLf",
  "key20": "3xsbRqrs2dzy8mxasWRAbuWTDZNkkQWgktKwNS4vaUa6qS4RWFBy38MtSChvJ4gvXuMhqsAb5aaikAQae6waTbpP",
  "key21": "2XYM6oNGWXqLNJfiDPBkrVpiZhssLws2TB3nahm6Ttaz9R4J329yj8GfzdgGKvXKrNwNajZJqmwtLha5K3UTaqrF",
  "key22": "666yHNCDn2jVeYWwAq2a8GwaE93JJ1ScJ9gvW5PTgLTkuCNc1deTqeMJQjqopZMATTznA3VphTgfh7JyaZ6vQjKW",
  "key23": "4zJGsDya3dyL1GY3ZfiLJZr7CQZ9j9VnZgYMZGRVAq3iruZhcfzbLojHDoxV5TvcAJt9wvS6zg6SVYaawiDfQttJ",
  "key24": "45ppLjVWKbi8LMyNkHe8Hgfsg9Wrq3VHepQGSrgiZbJxVN1nsDchnBpSURqZxjdRFPAZ3xnKXw51ioSADbPzR4v8",
  "key25": "3d6gH6ijPMuP77seAGxKvQZ3uv7myRm6r2CMsHQBo6DmRUt6LH2PEpBySHQZd822niaoaq85G3oyYTdpFchS1Dcq",
  "key26": "5nTtvurbUbM7dbGWmYiYzunWnWEiFiXPGkMbpryg5gzuczj2NadCA4VtxEdYLYL569VSmnhE1RQ3SccvBmPCE7iL",
  "key27": "2mKmzBGCBFw7cAR6goP6L5yjdpUcAHj2NZyQNFWGU4wskMgmAtu6YdYPLV6hGWbwec836XDmaZBG2SWTRguHJZx9",
  "key28": "5d7d3kQWmhTTbLkhfS47WLRsZoMT5wN74GoaNnWdh35rnCC9KX9mjUsK4wVuJPhvwxjm4DrsFipAKKAw7H4i3BXM",
  "key29": "3bCFhs1ANeKBRjxRaiUbccxvS32gHxwYockTcdogvwwHmFufDDHd6EhjSBcVHraxixryWsREDkRkm1Eim6MNkYom",
  "key30": "59UQorCmpbNnHaguui2SJxnCy94LZwPPxvMyP4fCm3n9EAyEuJ2tVru8cguuJWuNPns2cvpBzyom57nCX5MShX6r",
  "key31": "5mAn6JFmZ3ZNhgFHEMaQGgmnxa28smURSqKiTfGiPkAPtkEFFDEuMr1ueGse5TJvpjvtGS5zR9tbDsUtMVshBDtd",
  "key32": "62W5eCHmK8xy5rmJDb3Q2qi5rLxMCS7CnjACCMsQjt9Vy2ydbGqNPLK34NZfJG5SG9QMmqxLYEwTsERZrC7BwPAT",
  "key33": "2Lp9UCicxLgKrbwJL7gwJxPSgExqH1mtCCh9skBw3b2VJbbYGkZS6TQzj5feM2f8KXFsL7tCQbmcv5HAfPU1uZLW",
  "key34": "5quxH9uEz438duk88geY6Jp9W2KQZRZsCgEpxd9Tdwp2EB35LNpqbrTAZJtQa4nJmJ11mi4znTWZk1V9RYsaoi2i",
  "key35": "4A2gqHQwcqN1pHtH4G4uMdoY5mxA3JujgQPjoKeqp6qTYg9oxEaLw7TJJJhULc9erZxDGGU2ehueL9EQL3rgQHGu",
  "key36": "4BP9tcBJcGhDTYHk31EbvfZ2kuNjtd8kpBmFh7N9NxBw9fNSHcj6B7koHZfP1fHbcq9NvBSbqmm9iWdmAF9anGfo"
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
