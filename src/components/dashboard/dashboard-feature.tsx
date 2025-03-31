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
    "2v1C1ruux8NWs683n5a8G1HuLt4pyUJf2xbaMuCgSQWuP8ubaahKA1nEx9VdgVrpm1DaUKKFuGRgPTBwpQGnfuNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xghG4iRUArCJRh8KYeZqPbuvwAWAexSrcRg1q5vVLPvNgresKNEEEEbXM84moq2yyjWrx9yLFFzZKzmFLBh533t",
  "key1": "cbRN9eqwG1xfMcjvFz1JRRxmMdDGwwvBy7RP5tNuotvcndM6DbSEjn6xq6QKAVRDgmFeKxGEGiK8dhT7C64S9wf",
  "key2": "5kMZD3jdzExYUdQ6z3QSJmKLk95gqSM6Razq3N5nzymhHoj9eecgmMk6hpSSnEazSsqbJ6MvrjP7aHn1otmxJ88u",
  "key3": "2K1RjTYS7yPiuM5mhj4suVCXzuzwggGX47tEX6skxS5wEFFushDWoAhK9kjtU3gLQboX8dY75vz4yQDsb4hvuSae",
  "key4": "3d2jsG5GHCYH6zTd8zfTtpyUKWhBAmDeBr63QVFsdvUNvzXkL5D2MCZsGX6heFeeGeAhJLMWVpy3V5XAzB2LyZQU",
  "key5": "5VY7XR3AzBNqjMNAMbFQVawzvoQgkMrzbwW7zx1BBYkA5H5C6MkomsDZpGm3bfbi5yAXqAHgr8PZnkcpaZ6MX54X",
  "key6": "4pWMzMc7MNxkiySpURGbGtP5d5JdbXoAu1MMxhkZGfkPXrqQbpF1yd7nGZkAWi6SC4aFetqP2NmFKdNgNiWciyHj",
  "key7": "Du7LkWsQaDLkwaNo3T7DifyDLhWT5boFKHHxULdWjgkSmy2uKTKpLgE1Z4CQPSP1pi7CTB4fBu7hii1o62wYNDm",
  "key8": "2Amk8T3cTDHy9mQK5vJ7CD2du1XVAXkjgP32EFmdq2dPGaF22Q9V3TRVd6r21wUu4BMy1sEhLJUTHmDsGTivVvui",
  "key9": "2qBSss2d3HJy3rzGeboch1spVRv6mgkHw8xy4GCjtDB7SnK36zmWrayPccmNnUQ4Dh59ajaeSWUkhf18YPKKhnEJ",
  "key10": "5Ta4kotF718zrbP1QNZANwZJmbPsE26uSSgmtdn34f6xnwy5Ec2XUjPkFbTfrsvuT64US6wqZuWFKf3hURKQoRe4",
  "key11": "3AvUo3fRSK56pX5QejS6iBQg6sv8dacbTpDaYkBt6xRNkZZJvUNFi1ADoGNJGx8ui4yqaZobsj5VmhdnVF8S2SSh",
  "key12": "4c2uxxXDCYUYEbtTfrD49UJNAgyfUsNVVJTj8TG5yCe4th1kiVYoCtVBKegGcjG3yKK2zfW6TzAQiobAj31qa5BJ",
  "key13": "2HhpTukSKFhPu64EegBx4LyYVNWQekX969Vu7Wg6VJhEYicqddrwBC4Ftg3Xj56M3591RNQHBhcRRbTvHYHhbeJF",
  "key14": "SxCuyyez89o9NYyRzogYJrXKWqDFJGhFTTsk5sgDkpR2RE52K5PTCGMxczDskgKWaR9tE96iCCquAZGHqPFqMFR",
  "key15": "3eLGmd3abZtbJzmwKRafxhxQsjhPU6ZtgWyi9bJKuzhpcgp2LfpcmUfUURDzANritiLCRwoUtgB7G2sZcTzkHBoa",
  "key16": "4hxGSgnr8yNbZsVyE8iNman2UYMiGW7z1kqNCGDyHe1jek5aJAvWpDH68ARVBRwcvRKtgDNBtkmC6WCKzNtX6cUn",
  "key17": "5yTtmwaUFWwjXTfiJJkfMzeLPdTo6rrsRgzYCUBiNaFihoUNDp54QmCHWzT6sERtqCxoakcHa3G7Pa8Gm5hwqvMk",
  "key18": "iDo96kMk5aQJksm8UoZoVDVwvHYz6J8QQ2avGWEJaqMA2JDjMBve2unnsZJ35cQoxD5x4Tm9TyDqVFfTTCPMrE1",
  "key19": "VgAwx2aG8tDXCBEJUkfYgwnh1ky1UWdYv1bNV1BVPmY4fhUxBburYyFa3422LVRr6vF5yx28QK1YcUpFjzX8spS",
  "key20": "2xeVngJUw8KLuKqBS4BKGbVgiEsrWJ8fFo8MXwVsatmSDYGb8GxWkTZ2at4c6Z3huhq6dRPp7wBhi12Lkx1BaSVi",
  "key21": "4KdSaVcakeLa1NvoxP1em7fdML7QN1mzjYgDqiDQMtcCKY1s3s5qsdfiGcW8B3Q7592kToMN3QsrGzkBDS9vX47x",
  "key22": "2faHJ9tS997JUT88VT9mpey79SQp6p7iDa8MrmypZgbr8FuBiwzvoVvoNr9Sy3rmFfDkLaSFZikhMo7hZaVfQ7pU",
  "key23": "5hpcrgbpuNVrf5kwD49xxMCNmbAoisPgnAK6CJ693CUcESrGKTbSZ3uLT8QbQ9vhSjSTSwkiY6rpXEvVLK6Jhhkg",
  "key24": "2M4PqibQGK9mKFLgmiJxbPD1fqsihvjv4X34G7VggBcTmJUjje4bsRspSmiXwCmZfmL9UVRf6bEGqWMqkASSBa1H",
  "key25": "sSvEeR8DwxhDZc3mQoPDeAf474hLKmuC1HJqEcVFDT62Bpr8EZTtjRSzxpaShGVA7vD1uGe1g5p7BVUKtx6SysS",
  "key26": "3bXAkshp8TVg7fALVN6gPZyuU6bsxsE5fDoZ1hG8mDX6UL6UmXKbKXH2rYpjBGBTrFtgK2NGUxRSHNfDrti1SHZp",
  "key27": "9k99BPdkRYG9jQPiZHjZyQyC3FUU1fPL3Dmc4niQaG1xSVh5HQYfwMx1jiVktRsCBXZoBNL5SzkcsapbLJkdCn3",
  "key28": "4J4xULysws8d8J5hFgrdDJkFpktKdziM1GkYUtNVWfb8gTycEmLuxWK1oWuv2pCdLmscfCyiKB8XUkbxqWt9VDk2",
  "key29": "aWxAweu6YHx7gLb7gWiE65rGpbhVWrQ6bdeM5ggQfb4rL619FCRNo7PtET8yjL1KsTFJcHdhWDBYm9oiTgCUJCr",
  "key30": "4ZFAryDxd7wpbSFmy6CUSDrB1aquFypB2gwS6u34x6z5YoyzfF4y7uVkrzGiT3XTNn3ev3HUofwofLcPF7W5Jubj"
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
