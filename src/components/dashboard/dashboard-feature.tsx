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
    "DAa1zADHfbrfE1sKqMbnUmfko6yuwz1Mku3hUEBrEbmoQQDfu3hLbN7rUAE1ENiWyx7cVsRTfWkb4sVPU5nmiBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "647L4RHWkrJgoHgLXUBGyh2Ban6UfWSbShmtLx4XwLyb1hSyavUhM2pCgnKNRrzyD6DWeb7EuHSLF2kJT6YvKa8A",
  "key1": "4oKhL6wgTrgPu56ncoKw1FhovKvPb4hPfB5e6b6r157PAJ5FarH3je54euNQ9QuYR6U8Kt4kgJG4e7yFjh1jgdBC",
  "key2": "2yHTvtDroRh96M1ELSCjhCGkCr1Qa7fYQ9YwL9cUUVHA5ByQU5vjNHUxm3qHRbFBZC8y6YFVDwkHT2kjWiS4AhuR",
  "key3": "4uwsSpi4y681CnnmHG5fZV2cTt6ZwRraTwfju37m7CF2HVbAzuACjYoFZWwwjANWTPym6KkZAyaGUB6YjxsuLkNY",
  "key4": "34Fzmfrhi9PqkiDy6CkVjEDN54Ge8RW4kBgpddsULTctETHpLMrbDqcFuAeqtp7HatkjWtUG1fEm1xJyzuWBG8La",
  "key5": "3ShDbXJbXhJTomuxKq63LYxdTUpE7f5jjzRpnMJAA5UvLERAbRCHm3zrN8fjhd2et7Tuqp86oBZqrKS3nyg6BE7N",
  "key6": "3CsscoTPtkutqPckcBXBmDXbByFm1hG9hvKati9QVmfBgVfTQtyckc9bXE3z83KkdrmJutba5uiQ1zBxeDhcyCtE",
  "key7": "3WQdK3Qpatj6GvF4tVGGD8TegjvJGBbrCmvW7Df3M3VvVzt4HE8kzebeiEh66HzJ4oEtBEee3ehY2RURRGCqkxAj",
  "key8": "xspGSYMiZGvmXPnLP74MRTFwKy2X4qbwMCj6ensL5MhNVok71X6b2Hws8Qv1sodSRAjmMAJYKh8iKPswh6kiZMD",
  "key9": "2nRTNKCKMJpJhKxFULo5HWYg56phnhTszhJVj8aKWbjfhVh1DH3MSdPdtksvqUSxT9vkhNH5SPpQdQ2cErLWzJST",
  "key10": "gePx3QAvLDeMUs1wGNU4ReGdMLPw1jPZSRYbfsXeG1poi5Usdrs4kVPicpc5oV8bDcnd2iyrZzNgrVsCbntZJEP",
  "key11": "4WeyEXtZ7tm4kJyN22AVdMhq84CNUz4pfuoteSxa19PsS92FFXaZKqPpaRQBDXuQqbTacU8EbYnmQsiF1sBJY86K",
  "key12": "3bHeYiesT6ojFPaoi8BLtnNutXWASYNbHuRpEUWqtAS5PrDGtRydrsbSa6ekFcHxFutSe7uv9jhmqPjDvH5F3o9i",
  "key13": "3YZUuQx1ogGsWJyoUS3p37nCsDUDu8o3DtGRy4ueQ6YSs3HfRwvV5pDtjax6CxWsGj1PgEmvhDJ868hfTVSnTf2E",
  "key14": "63R8JTf2L8LWPAWRnFPWvNDdQo5TCjsy53Tp7y83nrR3C6TrP1saJBs6JKfVQC8vBfcXVWmyAn9VakaZT3ZUkoJ",
  "key15": "26d1n5xF8FKm2E547ah3hex8dc32B3s9fAUirdbZczmockazbJgVtzJxcv8WenuM6dCbD74YfobdpPZ3jporj6gp",
  "key16": "BwXy8rNxgmcanvuLrrNwGHVkY6LGUdxSNCygQTxfujAPgYdFVMtUkLfBD1XzPyEwWXm6AeTRY19RtUtms3EGHiP",
  "key17": "42xzWb6aGq3G6vYSb8gAKaKynqWsfytG5zCDw5Fvvq2XRpTKPkT99aLsxr2zBoQHs3PdA3TUZUEjvDmJ1QP5fEs8",
  "key18": "5uhff4f54braY5NaAnUowUnFwZcSm1XAWYz5zRhv9rCy9N85wmyXfQtYbo6sG9HSWvC2qwN6ekitK6coZJNRnXDD",
  "key19": "2fMst2YtGyb3yJFYiTeBGxHJeucGhvR9FuyYSDXJ2RCba6vBRRHLHZ98kaE7UzhbBrpp37oA69tC2cRhTKH6Jwkt",
  "key20": "9iJ9YXvNBjzDJAinhKNb9FeTvbvwM9W1hQ5NXuH4TeMah2C5TUMCDJnGfCiSbagzMx4unwfhTL6fSSt4QUzgQsk",
  "key21": "3V7e6ffA3mDGHNSUTNBQ7fyv6yg2DUTYkgHHqumsgjHbTaKVLJ9pQFG8WhgEWVXZwM3abDnFoWYp9cceEYK8JqWZ",
  "key22": "46J8rVdaWHYMFxMCatWTRHaRybHoTk5AftUQWF9WKtypLh5BygSKJwg4qRs2AfMd1P4MC3k9erpvXYFWNjzSFBv2",
  "key23": "2EjDwrJ484Tifsnbo8FTrP3KrpqLb5jVV1nAZGC5JCFsmxxJmP2fkBaDPPyM7bPnagLg8ZJAukHiCd9tbNp28ajH",
  "key24": "42DmezZW1xydcPtmgFhM7mF59Mwq3gWodHHhq9jGmnRGV6V23cd9th5vBjsq4GkFzoc57g7WPXX3MfvZvKoN4uoj",
  "key25": "3ZgFiQbH8q25erRnk3ck8D1ok3AHpsQ8Kf4CxQpnZ12bGVmQGhwiYHQgpLAu5Bykx2eEof7QRshRb72fnEKWGkog",
  "key26": "4Kn47nC9jhCiNGpXMNoFNTy382R6C8rwVzEdqhJ4nFcKR5GmTuzHbKTV8oMHxfkCzBUYCRXooGeSmTVXj9SJCqyr",
  "key27": "K3T5Adgtjtgq6YUdFQdUr1CxLqZzQKJGW5jV9FPUpZjeq9nMcoNXuS6N3ESZKrPHTQ3TDfLCE8edvhshQomsKr9",
  "key28": "5EyQfMoNDwbuSN8mftshA5hK8N457PZvDPGxUKs1yZ4vhVV8nCZNXGKmEnyS96Ti8eGyKb6U6hwHqWt95K8393Ji"
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
