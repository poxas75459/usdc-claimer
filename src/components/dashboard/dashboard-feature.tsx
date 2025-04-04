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
    "5iM7J2Lc4VTa4wi1FLSTaXJpbaZHwxhPW8iaDU2KtAnzBYxSdgAKADVsLpVL8XJ8cxSD4ypA7w4QEVBxzAkpzsov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uuzTBYiCS4UhFa3hTGfxkbMpK8ACxpLr4yZZV6rLWXAHyVp68aEbfBx3CFmXBWhemsmKSc1MKq9MsV3VfhtUfFU",
  "key1": "Nm4Vu9h8fV724jo7wy2QiZFem7iLwf26hnCL99pATN7Hi17ZtCFUZHLeB49ih9WPuGGEXcnGZ8CXYH3B96z3jDW",
  "key2": "42mMVBe2Hou7FT3Bqm4kSSDkTbfDsBWeijFj26Tvk6hQ4pGwSxhrrKtcmfX1S78aYa9eyQhNGo2fdjCxJ9zo155y",
  "key3": "1rUB1HvProie71UHKf52TAbxit2SgW2cbQx5fJQzzP6d23NCmwBerXDKB17Mcy32e1to2fjjQ1SGdPVkH3bXwCV",
  "key4": "Rua3Fd5bMNk9ULaPEUWoXhAJiQr4i3dZSHShjFUjGDKTyw5fxR9DMAoGc9i9NJ3mfHd2VWttR7aptr3DTTq4z4J",
  "key5": "4mbc8XCa6vR4mkn4gJeczWNbWEre9362CTpvAmZDz6NuMLEXxqDw2hpxxj5TNhsMXeCLDjY98SGFof7DDnbGWvMt",
  "key6": "3U9to39DbHfWQho4vpZ1Jsq9qkd3q1zp1TvK7CtimzZw6JicU796MevuRb2jUdgY8kgfdJkw6SoyqPYWZUBtXQ3x",
  "key7": "61SGDyRMHNxkvprmzaFQVDUstVtxdw6FXw4v6FBT455azhRBHM4SAzDKWYmM9U7p1mxi2HtGj6r3iZ5HjqzukNnH",
  "key8": "61bAUyPjaCpk5hSfAYfutvt3MZLCTmiEBwvZ2FtJHJPhLrGsuyx8NYdN9NEasL2qZTAUSVpXQUVAvCkT5x4UMUea",
  "key9": "3osGXb5GyNRNkfLL2jKjZnTntPnXbqszihRp6L9JtMpmxD5rV99jxARrVgYpHNrddmiXzJBofdzbfSQq1rYQqkCs",
  "key10": "2XEK77d1DKr8BsZcmVaNUUHXdYH8buAp3o6XwmtyD2w97j2MV8kfuFCmE2sQ8s7pkR7nsA7ddCZ4dktgx6ikA9Sy",
  "key11": "5t1PpyRovvk8pwpA9vyaVbNyYZ3STWqzbZ6ogQewYGiXPqeiBCe2736Fs4iGQxKU8ZVLKKN7XMngLLjvyMXWVtBi",
  "key12": "46geVHmKwEPZDk1gyRuCuhvrg2b2CcuJjF1Zqud5DdTnDn725wg5XdYEM2SNphtHeKMspstPTEe6x1jBYT3nJWAE",
  "key13": "4PPnVBvkXeXUKUNcDDGnsmMQ3QdLDLpyN8tgq56Xxbgt7dpWUKL3dkNrEUgp7EGVcy8NcgACwqTDFEPqLgmjR8bW",
  "key14": "2uGuP4avj64ELKgYRcceS6yCG8JLjHuECNSoBfQmx92opm4uP1cbnaVFUu1CS8hcfH68EXabYQnSEv5Xco3H4Uz2",
  "key15": "2J9MTvKy2YCYgoW9prJn2zb4BX5qzfjZMLNmwJiA2KesD61PRW7HNKggTguNdNEmkd9LR2tpYhVwcStE52gspkTT",
  "key16": "3zmhGiKFXyGXVtT3tkSx9RrHi6a7L5vsgNpX1P3iZFGGmkrm5vAyLeAtEhui9b811Dj6QXmtmWydvcFFpgmCRU8P",
  "key17": "2zEQRYw27aUuvuUHASNzELBFd2KtCp37En1TzuWBHXLUtw9FaooAf1eEh2CrqFLkskjotBArkbKj8V9rxizumMix",
  "key18": "29buKVkXS4TKi42rLTqkgdL4GWufJXooMVWLq8yx9E8cDgSZLa9vYmhbTLjbxHLYbj8Pyj7CFqj98NsJbd3SoZdZ",
  "key19": "5uLfJYxswpwLWYnzcSxFoWapEQDUyjWMyswVYwuL3Nv7n1PyBy8ewVWDBuep2monKoTbkv2QZU3NJzY2M6kZNv3F",
  "key20": "5ZBEmadh61ayFQwuNyj1JARhNQ5bazYqBnTHiBBXizaX6YrRWZd4R4mfih2Xoo23tATGVxksqQfdqLXNHtELfZe",
  "key21": "29ZjDzk6wxYwYX7NtZWHiN6WcDr66zrUnMFCKpGb4KMD2EegSBS1mur7RhxLD6ey8o7rP7Lddz3Hjuyzv6o3rViU",
  "key22": "2MNC1smgcHMk8vFbGSQwKv5at9N5cJ6ithEmCJnWiBf9ByMCm61qcJHTMm3xxByBkmatVfqKBmZSWkJbwbctowP6",
  "key23": "4BYPVjGRCsPXCUtrwNyoHWEFy5RxUasNM6i3PmpLCTVgZKkdQHAdVewtrN6uvTn9Dm2TVhgy2UmLCPL9M8HJPT7J",
  "key24": "4epmecBhLfQyP3AindXn8VZq8vPh8AWfENCfVHYa2zcxRkrCkXRqz4BDQ4dGEaUrTSbAzTuPqEpBrq4xjVJsKDjz",
  "key25": "4WFn2k8ddvFbiV1JxwgMSTqNefGSHf3Ju4ffKSUbiDm3nrUxoRpM881JowEpMUiTFQqbLA6VXJdyk11R8fNDKCHY",
  "key26": "3GrQjweTM9DRNxU25HfqGETRKFEXHx7hXatTqM5RKXyLyAqiWXWeyWoswnCzJyywH6LskN7DNaKVnZpKSv4xnR91"
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
