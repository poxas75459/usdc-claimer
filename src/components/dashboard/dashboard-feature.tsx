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
    "55oTHR8d85jJ4b2Q8yh6VqtU6Pho1G2GQqVKp4JLzPoJLe7bnqwo4C8EzCwfEbaWdRx7DvUs66ozcp4JSU6tggph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MJDkH1VTektgJ1qxa7cvP494GWvZg1isZUP9KV9VVxfWcQH9WKgXtpx2pkTyxU3y1JfN4CJTWQ6ijPw4TQhA2Ws",
  "key1": "4Zv3Bd7XMQ8Dd3v7RsTHCv3xP7gUxjadaAauHH2WAVFTS7WBKMUnnGDensq2iV7Bfvf383Uo8ZtsPxbLkF9wzGid",
  "key2": "2W4RwvbJAw9TMWQ7Sxpo2BvbRABvKhWyVZfVqfZxCwGaTS2N6EVWszSyK1eZLWTxR7KKTBNEQH1epNxUFxUatzFj",
  "key3": "2k5zK1jjBxkXpjQDQgr8jX2hfyy5KZHfKUhB9SCFEd1pSksNxjVjhTQN5MANx9wyYmMrBk8qvYeR9jSxpzBsiFaU",
  "key4": "3q1oEYqDfJRVD83Eaq1mxv1UZRp5HeMc7PqnmyiywJQdjyuYcEdvctmW98nKjAz5YbRtuKHxovWJeW1vFBduhb2Y",
  "key5": "2iWjmMVeUAs8XQF2GpkYZSJyyjmPDAUspq7g7DqxDoyFkmLQdR9jY6atYNU49cgKiPRz5PWjZUB6xic3LUpw45jR",
  "key6": "NRbYHAEHozZac85wgTVoioe42rq273WrUhkQosCg6usjL3gDMJxxf5R8KRV3LZtbzPio9bVxtJtYJqBGraJKu5t",
  "key7": "59exyyuNVPc4JYH73y9cYiLAaGccjZYCZzpBYNX8JHLtWwrXYJtEb6szghyiYVreeCdUe8jEeHyA1YxZjNgizmv1",
  "key8": "3Ui2SCcDv8Ekjz52kDiWW3jdH2E2zza7nhXsfAqXTWDyGj2sxSkiypUtSRiVm6ajXB6N4gaGPi4bz1HeEVefkjmg",
  "key9": "tqeo1YkqkMAZL6gGcsXyriy4iNDb3XDfsTYygbRPCYouo8c7UDbUqgqPWYPVMpLSJPZHiT2yknx6ti1Ry1pHLy2",
  "key10": "4TPuer4pRcgE2PMTbu7zQFzRq37Fap9wZ7TJKG6PhpfGSnejca7NgdFTt3TZcM7RfmrdgxTVNshyeLrKBUKVnJW9",
  "key11": "62TKGzkF4AVWscgm2uhJLW1seKmPQ6jChd5rRjBi3WZnjGRGqwHeTef859hwUgdu3TbG1WNe6b5M1Xm2gAMLkKrs",
  "key12": "ghrgUz9yTvQuHYaYmN1BoyCj1mwiJ8GyFhEKjaUUTdMMr6EW38L2h1E6VZDryCUWFNhdcoHQSbEKNoQkotHjnQx",
  "key13": "25r3oAW9o3W9VHFsTqLNP8gUetEx4asS9phYHLRr4WPqEG9JhpLnyKtf55Xf6jfuTcJ43erN2YDHNMMkaLJdQ7fP",
  "key14": "59g6eGesjDuj3h74FHe8zotnr21LyojTUuyXbMjon562Muh9kQ1YEYhxEUgMU3WC8scXyBASBAdvZRzsK3esxQoU",
  "key15": "2RPTjvPcsYcpupwsVTAYWCKiexSRCsa4BjhwC5QH7MumvFiPTPa4ExGJMaaKbMyQyEZdcuxESFMajQw4dMbC3DWh",
  "key16": "3UW3WuVQ66yLbXoDTGs1JRi6cQ5sYqXEJjV1ggKSPqrjWVVnohfcTZaQFX2sZk8zRDYrpAZa9EXUsuTWV3nH5dv6",
  "key17": "49gDyiMFSLUJpFbNCoKgJjXDSvVT46TvwsJt3sAkANinZeaKa8znvd3eRbDEYUhHGx1frAr91xNWtdRcL5Q2BATQ",
  "key18": "TML3NLiRt88rJQmogJV3kWdNf8spR9gJ2hZwtnEwX8GzKVk5KvFs3LKfux4NosWApepcDSFEUjsXiZRt3kbSaHk",
  "key19": "4Sc4859RYYFBfWp5fCuefr4fCqETrrV1DkwHV8FQzwU1MKiEHsQPT7KFvxNaVMfnou1yJVPvqFx1Xnxy6PvmGBwi",
  "key20": "39t4rxcUEESoLxnKoVHBSHiZGW8fMEZeM7uGmNZLN7sGV4CHdw63veLUmrGMkqm2KpZEouR7J6iwAV7PBNRdSMAa",
  "key21": "5rSD7H7HvsTsq5RD9UowwBwQNFSK6xxCAUdjuBLrJC1jj8NtPG2saCGYudXoXZTvy1Laem7u2oeEkrUMEayBeDmF",
  "key22": "2jXXYqBy9mrrWAGqaBZV3t67Yh5vagvfTkgL49ap45pxkhkXmh8C5QFBhvGPfGq3AQkRb19YPiCXbwiCtJAL7wMf",
  "key23": "28eokefTHzNQCXLpEgWfCUgCK1c61dT7bfBQjihsyjrDp8M7TmJxZrRQ3mvKQnS5a7zRioSHe5iXAUmuebnjviby",
  "key24": "2FTx2KDcps34eyC3JBQUifhV1wTPmpXeZA1G6DFEw7umkjKMb7Rfod18LuQCs2BykxGLP8YtuKHhoAp2gVwuHuYa",
  "key25": "3CLgoaXJzBCPcZ1CLN21eWU5Y2grgAuxdiZFzUVfRGhvEXvtvi8DziZpAUj1YAkXAdBKfDBcvgxk54V4zDjy9g5U",
  "key26": "5STiPrQjmd1YNB9nLk6u7TbF6nEpepEJ8fcjw5ZgXRpRazBXJEA6TqXAjHVW5FdNvkqiVRfVgGifZxEgZ6p7cwb6",
  "key27": "4xeET2YPX67AuBADvbkyA1wzzWTwAe3ERvt1V5zc7tJyQtT8XoAgfcVNqpfj7wbE7kP3VYvtoujY4a9mCiEJLR7H",
  "key28": "2rviXerxWgpBxmbTxdqK9FRW64i2YqFA7BFteeknAGsfSskwVvfTd5Y2EwL9cbfrtfjeqRo8R5bMiC5LwqGRj9ov",
  "key29": "cTcC9WFBgo7gynukF7ZrUCXSwL8uQs2xmdBNCJj82z5sXSN3JgCFwMRKzXbt2Lrdx2yzd8xNeQoUhV5GBEPanTa",
  "key30": "53cV9UjYTLczGGHvqeotw8UuiahwQ6WykumKQgFCXbHkFiW3fnqn4jeyyQ84puBaGE1YNUaV2EETkHGaKN6Ee34R",
  "key31": "Ncvtp6UkreoVVw8WJjpG3DqrCawmkVFPRYUXo4Po1ddusSBK2eqpBracqKsTdC57FB8aF2JKbS9u12PypSjkaGz",
  "key32": "3VuyS9FG9eFiq4e6Zh4B5M2sXVErNMTsiZUwuZyDq7de4onkA7sobd119bEwjks5douTCHPvbxruU1gabvKsfRRA",
  "key33": "4UzfMTJjH6JVfuQJVRw2hWrgG8cGMiJpzEYXtJKWvHTeQvMmJ19MhkzeDoCxqtN6uvTJd9xdv41Lz3Xr5pLcNxA8"
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
