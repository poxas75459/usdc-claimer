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
    "BDCCNAuMnrHHE7TpziyzX2E3Q62tCEAMauc3o9PdDJoL818foLgVzPAbyDmJnyFA3DDpqEdhSyr2LrusmeAkmxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iyi4s7CNDiAN2bbTJkTkdvDNrjvUMVk9FjhTaU3gNXEqVygK2kAaXfxPPnxGXkSGNbjvVBHATthMKqvtQ82SpJX",
  "key1": "5k5KD1s4V1JShSeU3GEyGMnU9Pq8xKx6Kq37JVSpLzehPQKTvFmDn8b3SuuYshTm7NcraqiSw3qLwueaX9pMUYam",
  "key2": "5HjMRxd8yLWypXDWXhWz1FMSakS57Y6st6fNNQCJwPCYVzoUxbgE4HoAAiiewmYShxDUpMitMoSUpMebwpc2vnNv",
  "key3": "5zHvorCh2nAdQV26uZ8GFAbpCYzmaKdz68VzR3gzAzFcAAm86jf7w6wiUh7iZNwzGKbSacugS32Uj9kv6sR5AP6U",
  "key4": "2k3KV9ptditBwmdyRWjLXE1BSV71T57EKganDowp8BkgzDyb1ztwwxrMRwJYLKsY2mEFBz8fLZEwhaHeeP1GKfzZ",
  "key5": "3BFwG72DYrQzA6V6PrSVJpcVT9U3SDkjhdBUTjMkp4TeX6zpXoqVC3fsJ4iNJoPp98WAcRWNgPPn35ijWDgnPCas",
  "key6": "kEysyFyKLv47m9qrFNTpzzLNpWQYLXehP63q2yi9XmuUc4hEcW8SZXVK6yDTjTZgJNJPGdQu24KMvuHwVJUEXYX",
  "key7": "25sNWmKKYMzXsRJp8o1VZAAd2FHFZUWvNEqTATGYxZkWBCU4b7nJryVwcj1Cv9PmbwGQFkGKumxb7mUZZnW5nrUY",
  "key8": "1tgDLWPr6R5Hk7SNKnyNn3cdcXGb2K5bEu3BsfjQbpKmQNhti3YxSVRdkvJ3SyHoYSvw981J7hR5cTaXYVrwj69",
  "key9": "4B6ARQNjuWmz9XDKcHYPDRPNuFdjvY2dWkeVPtvwCCULNjvjmwbWfAqv5Cn2nBWp9gfUb58yxhyjGuDzyPqLUoCm",
  "key10": "3KZEb9DhfML2oKW3bSWYRCZAMcxS6vUxyoL6ZrAonzSLgAZFCmk2iiWi5oiGkp5Qer1NkLdZfmy5QDxEkrAnoAeC",
  "key11": "3ixtCpkvd8HggUWmPXiB2vnHwvAMnreVT2Lrvg6Sq7Ua9xHJ3St5C75JXfckmdQzrU9Rqwn8SzSpe39UTvoP6ncq",
  "key12": "XCmqi6qwEXV5V7ot15GAmCALu9rjawLyJCLqTL2anJ8eEG4vLUhEv9dyJEgWGUr9N7CuibC3oDTiaoovMryKpkd",
  "key13": "C9vMZwD66EkRP4e7QTc3ANRoyoxcSPfx9FQGuD7KkTNVThuEndXsnSVTKPx35jp1McLc6WSMEvgrhPmapXSPrCg",
  "key14": "2Rc55XBHgyvs6uQKkjCvgCb7UvgUW5rLHSZkJXmb4v6R24cfQ6rxi8HyrUP9ZK6DYiyjMKX19hQqV8MHUWvZUfr9",
  "key15": "dptRCFTPVWr6M5aJT6LLpwNV98AbkYbsWPSHC7eS2JFV9DRHm27YVBTSCX4tQA1qqEpjGg2rqgkis2RdibPPoYm",
  "key16": "2dCrZgWJXkHsgB4RUesu7MUEiUPo1bv2hQsch7TUbb6aPweXF9cqRYRreTWnBJwd2hGDSR9tzQRqog7Dz3DvqRH9",
  "key17": "218DDDgHceEoN76JVvNNEG2VWs1BKZE27TMgdu5fSWK6KpB4p8xCimXee8j8RBfxgNN3Jjx6Rd41B8HTzKsUjKhg",
  "key18": "587vqqsgJ6MPDxVDHYk6VTcifRCz8C4Eqm5VZwrt5V1NSWWBYEEyfP7RPSsptBUKwysMVhv6hc85hMNSXj1LXNdC",
  "key19": "38EhoxjQSpARu9ZmxKtYmz2A9SAX6Kx7uqpx1rcWS1gzDEfZC3aqgYvVpcbff5wMorJZfL8V1FCvkZBfUiNXETTB",
  "key20": "4CNd5ddpJDzr7bUuwRHYmFa34Loumvb8V5w6jKQMzCBnMUVa1KCWqYBafznZMb9UC3dguPNC5yg7AQ1F3XpD4xiY",
  "key21": "3dXUpErsMAu3SsC9rjVXN53y6nzTHtctqzKgKfzyBBfomi9icawt92Ueo2YmUFNvzwe81oGypNPiHnGgKVZqUR9z",
  "key22": "3QjHmRJuTEmoq1RSgqHrF7FZqY7zaUTqgPAgc1Fdsq9XLLyPwV2FmUYyscop5xr17Y5LoT3zpzCfYDEvrGQxnZBw",
  "key23": "5TpepRPvhehsq4VpdKjgw67KDfRk5cZndkh5V5uqD9ghhx7Wd1K3536uxFQ5p2y5ZyP1qyxNZRfhUNhYTq1NLBdi",
  "key24": "bq5s8WA2h8VpUJB38TuJGAZcnTLmoyu53VyCjGGJumywssD4tXsv5xBT3X5UMvVcCUoqVA8cpJZ81XrXSQvCZek",
  "key25": "4t1ihTYfcffeB9djr3udTooeozSRCwgjUtyFYqh7La9eaQAfsYQcUFEKaDwmHppTH1Z6w7jphstoWcqEEKfrZBaP",
  "key26": "3TuA3wUGtf77EfijcAbXpibbog3GWS28p4nsP6tSzdmgHaGAyjo1WKdqfHHhxu3mMjVBGfQJq1tmPyfQSdWuGFcf",
  "key27": "FG6tYSKPCtmSUgfxUNosx56k9ZhVDaWGnsejwApy7Akamk1hnu9Bpm5mfx3doFg3MhUG2yaAtFvsLxdrabGBN9h",
  "key28": "eV91JyCi71q3aSjd4BkmJeG4PxQPrc5kEF9Manu82JZMnBTGEZfNaMzinDSRpbV5NYyAxAakAeR4X1ksYLdpHuH",
  "key29": "4Fi5ygmejp8aXM2qTqDAc7yW6qGA3EbhodTvzDyBzZKXHuDC9dorWrYN9j52GuFSk4T7VykgUxnVqQaUvSsrtLi6",
  "key30": "4kVQxnYenbKtanTo8zxf797B85VdSTijq53UUpRuXa9rNYCDHs5tazpGniRGG34HxB4sme9nXwuL3iYjjE5cBFW8",
  "key31": "5jyYPDpWrGhXEsthSBqYxY7eNZ2GLgg1sSf6vyH3eXSMuMRmbNMterscNY3qoAPvfzagcoMgU6WcsBXrvbRkaXjX",
  "key32": "2vB4ymCbaivU6jhvb7efvbtuk2z5j4Gns1tUBFezJPMBq3bKXNha21gzg3KKjK1LAQrUrmnsyMSPbFs7a7mtSUHY",
  "key33": "4jf5mq93NS1VwFsU2oUCZ2suLChU5ewGpJhd1a57C7Svou7NospWebDhU2Gr3u2WpZ3dkavLrKVLPDtZGTf6Zazb",
  "key34": "32B5NhftaH884dLE6UpM3dihziEVAECNBS46dyuif2vHE2x2yD9oaxs5CVft5KJQENEuQLCmpybpMQhHSJscafw7",
  "key35": "2Rqj9uhunCTTWCnJo5iiDsxUVRiN54R7eRfG6Rn5GbSYKkyN7j2CgCspr9DCpYF9oHE54gxCjrQed26i3oz8tDmD",
  "key36": "MJqS82XccifiikdVYaDYiR5o57vvYmzcCRQZcfEcGWgXTNafFg7KXs6N5cEfYhaCpHSqCcHksbwpDoPmhk5AZm6",
  "key37": "3oKKWrejXdJpoMVg7cFkKXqrpgjYQnvVxtjJU3AdGtEgoX8n2rEfEGzjHmoycM5rFUhvL2CVSrN53MSeSKmPZJ3f"
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
