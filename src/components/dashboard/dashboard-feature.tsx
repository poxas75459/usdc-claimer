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
    "451FtJaMWc457VZnGkEvM1BtMDYgU5HNKAbsAqjpuPvVWRmCvHKn4NN6wNaBR5CP7jHjrVZTy1Ms4ApsauK5ti9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sbzfykYUoKBB3ZFdety3qGThtBqf4N4UcoRYvefPBLYL2ajX37N5BisYgjV6TotsJ9dguZCNkMBJPNk8PeSiwJ9",
  "key1": "5sahwW8ZPDqn1goh37NimVBcqU1W2nohVCmJobBJHPHZEDcnZFZ8YpajDXnLR1x14jVGyaYCybqEgAjy4thgn3RB",
  "key2": "4DSe2xkp5s5iWZjQE7jkUSL9FYCqW77iiFr3yvcdnb4ZXZdukSv3weAvWqDe6aCsSm7SMp8njjaW1SeAVa6GkCjF",
  "key3": "46tnxPHsSLC3KPBcnmZ3ZVTC4gPTE9j9EPEzaEypZgoanaysjtJMqSYLvE8Jr71SkXPjexSKwCUYv8yun3h2rofb",
  "key4": "2aC7xB99pew9KnibhMKLTKTjaqejVYF7mbcn7GDvM12DqT2ahQbxRnsQP6QhZeqzw9ZUDBRXCVm8cy8cubfeWVmm",
  "key5": "4hqixrekhB2956U2yVTr8iMeZHyHjHRbbZQt9wd9Qq7MzEiRMTWuxLdHyFJkEmB6iEzbXEQcTcgtauJcs14iYnp1",
  "key6": "f62HeoewTigx7TBsGxwK6GyVPPBtMSnwkpznvMLkAQMzU3syQ1vR8PePPKNBx9NDbMkrEFFf8tmjCWb5BCbHqrX",
  "key7": "RYbsUWix68YznRVE8psuFp1w5eV6TS1zGpN6Ho1C2LfvaNgqUFBJV2HLo3wqi5LKCTceaboWXM4qg5TR5UrC1ih",
  "key8": "5iqQnBn4iMbwoto8XThtXGsoXH5pvkv6t7xFVvN4EAVUem7PtLmb7rYBaEokHrE5vJ8Qqpcq9qHcY7jNoXj3tQEY",
  "key9": "3eASNFgdASyX3gnZx6grgsNKcJBpvxrz2Xz7hStqEuGTpqqV7tfySkPrL9yVTjw8CWsti3FXhAAe5jTqAy6Ff75p",
  "key10": "5UtYF2e3wojrSNhpG9kdjUnt5xJN4tXi2ULABgddt1yrpfJRghteHgk9LRHFV5DhriE8chDSskK1EFM8eYH3ZjuX",
  "key11": "4N57WUupb7irXGQG2fufqCti3VjYEWfTvpFp6fatvnYUwaTM8gL5PoPkU2XV2x2icFpyQxpSovphEMbxpagN4TwM",
  "key12": "4c5GWVwRvTTatgDqwXC7eTsnjL89BxRnahbGAnjjyfUhdkrDnEBX5uJpSrTZq6VinZzazHXun6Bo9BCbtRDjdYmE",
  "key13": "2HPUUWALRhqEnU8R1K46H4XCqRBFLQvaXsDgLKKXHKwsxTTAzwqgrdiq1NMLpGuZCb7HNmacnpQTomNDswnQ4BZ7",
  "key14": "HwBXa3Q5arvsf19vw9Y1VsckyqePaTb5FKWQBzhNngRx7vX2rdKVRkFKvq3DrruE49MwqXDmzymZ4ZWTAqZ682X",
  "key15": "5gv7veeHmww556hccN7UyCJ9hAPhy5iWVJi2UhAK4peUvjrDMy1HUtaaq31pQu8ofopJmnp6wifncyD1n6hzQMxV",
  "key16": "2RbAUz3TcMUuAEF5MXCvkKq6B7QEdS5KzoaT2iiK7vzjstLpMAr6QT9cx5oUkyrr9HAiEXF2EupPdxB798akBiRh",
  "key17": "7BFS46ifiENRZkxeJhfpTF6tGtu4CFhMQTe7QJKRPhtrQPazaSozgLbJVcWEKagqnQUu6nLcEaK7JiMe3RqkYMZ",
  "key18": "2dD8QYPMTtcmrMLYfLbi4HLQkxeaTYkE3tznNBGkdEQ2VZ1X3HyHM6iJZHtsUrP3JA4cafyYDJNguFjAfpCb56us",
  "key19": "4pPAwPZTP7RiFv8kTafJeeGnvKcrQAL6RMgA1FyQDkWV3VeNVFPrffHUgMboKX4GYSs2gYPWjqKxPLpfLueMTorp",
  "key20": "41M7yY4N72YJd9knV29wAPAZwoRXHgGWbSVgbaxwKCHEy64TWF7RsU87DUsWeQtbpNAKPVapSfs3hZuUqJY2pW6p",
  "key21": "21xmNQHcAzJxbyAbQ7qPnZPsyJzZDQzDfuvosuFh6htusXfKmSXJ4bAQX3uAk99wHymskX4aXDXbT5c2yuyuPukM",
  "key22": "3LooBLeTV1UqUXsRJ9Dt2BVmpn3NfoGojJWogvCgHCmYWHWj7mc1uNamRJxPiVonr8AxcfEUbvLYQSweWrZW1cKC",
  "key23": "41ZsbFfw8KNRyiQKJTbqSDRXxBnL4rKqvDPbB8r52674334VHhm8LXCCPu8ahRouazsQoaL4n38sD9KhKn7jgqEB",
  "key24": "3QSZYC9nUQ7zBBRnhd8YGvk4SVy9yKFPkLwXkQYrMaY24qFQgvZpmWhYT4GVoJNawWsdXGgRav8fFDb226SSfSpi",
  "key25": "3uSzDvGVT4cf2kZWJezTSRfHyBVeJcHcCtiMDL94gY1QbXwzY5c8BKEMAp6i62yhfyZgRBdGFhbSvZsy5Hi4Q1V9",
  "key26": "3Dif7etRkH8oeZpVEHNZMKeZb8ALgUodHBefxbkvHeDv3bVWFt2agExYugGsS7WAfhENxwSxkX2kyyy3AQkYpdaL",
  "key27": "VdM3rDcB6WGTWbx2NmzBgFnn6obqTY3W93saB5KKE75JTM65gk8jeaKRi4kCzR9vNXdvsVubw7q83E9rQD34SfG",
  "key28": "2GjZHfn56j9yvKg7xB6PvSocX5YWeFzQ1h2k3gjiBiuDEUhE3Zx1dm9tJLR9UJfgykKa9erxhPf7e4trRxZN3RkD",
  "key29": "4rj823poKXAHPniQpsd5F3p9UUVWW1i147unE289rTKznk7vxfn1nsQ4kgDfbMqqDcJRweuucPzRzB9yyHtuoZFE",
  "key30": "5nXFxcrAy8ZBH2UrgDF5Ap1V4BBay4d2H4SZbDtaE3MnCduos13F2MtoL1E2kF6b7c9udzMNAoojfVW1rb9SkGCf",
  "key31": "29goD6pGPH5vba2wYZrhVzoBGWUQEmcBUPeQ21AnoBvivfbWzfA8u5QeKyWpcUq24VSNSRy8UH4UsY2BEuoLPCE4",
  "key32": "3HjxGwbjbgwKdTvhrDkwcvxYv39fVNVdqN9Z1zuzk5RxXLr7MteJy4kLpsFbo2cNYE8nweFvBGb298AzG6bn1SBB",
  "key33": "5w1iV9pXi1aGgcZ9A5PXxrtuF4tpaiJBj1Bqmznr3gAYez1hGhnMVw3o1HAaQM3iJs9hmXDZj7iFiDuvPesHTmvf"
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
