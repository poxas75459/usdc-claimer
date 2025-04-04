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
    "bZmQhzxp18DdRkUc55BkcPDuW5VJtoDbrR39ALTQFG65v1vFUeBYAjSK4G46grVRgHJsLr89UQgjWaNUQjQCd6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WF6eghaDx3i5ftWCMKN8J2AbvcLVZmHLhxm7bQKX9jFesEftuAGK7XFC2zapmczdPYr6ZQ2o3aaExBqTL9NktCW",
  "key1": "3Y2FU25f41v5JmtUQtVWN5pdJypEEdbGBwdB2EtYJe6VzKjzVzffteyuphNEHgCCFacLhhx6cTC4GWgJHxfVmCmG",
  "key2": "4icoAZCuWrsDzsvU57ZJ3mvPAs2EUZvQFmSNgMpftbzqVtvbKGNB414mAipx76uV59kGd8WpHBT9PWLVwrLxUtaN",
  "key3": "53gNX1juUqabDAwWEfCCEAajYm97QNB9TgSNemZh5g3WSU1KvD3mMddizrciymdHj3n6Tx2mDrasWRYHX5FnyKFy",
  "key4": "4xddPcrzmkUgzHy4gstS8E37dXma46iVrqdaMHnqyG4MooTLywAEehhf5ufXY4bzhHGtxSPGZy3mSnRUxeDU3oZc",
  "key5": "2HJpYoxw5ehPjLXd79PBkPEBjExD6GjjCLNsRWBtVTBcLw6fekdQNinPxapopRuMbQxAnPbgDVj4x8CSrWsHybyv",
  "key6": "2JjbG3i35EqdK5yqKDcNNm9SciFGn1QuYfHAMWAjv2By7AiVG4BQoqiKgw4YHkEa4DPHZrDqzS3DPMTc46pjPxK2",
  "key7": "5Uh29VLyEFiBD5v64vNxMXzSWWYnnRAQSreaTK9XyNagRpa8J4aMGzP5CXqNusL2vCxNDox6CUUtr9jVehrXe9wC",
  "key8": "VAfKC4HfK2xsW79KzBJtzsifNoBCE9DoDTPsKzn4FSFDdVJ7aZd4gmPVJ6fxiRMmLqomBVp5L932pKMgZaHcwqQ",
  "key9": "2jRitoo2iDZv4xVrKa33VKUH6L8qyJ7fDytPbPdyucpVKNiYzHDTZffL7jrHGWx5XFCzWXi1DJcFge5uvigkS74P",
  "key10": "2Y3w4Z8Th1LZPeAogXusL5BYf2W8ocdhP2JhNKPnuAGiszw6m4yjUREg9dkrZdCUj4Uh4nVQeTkoFzvciDpY9nca",
  "key11": "2RTatBH7AoWZ7zSfE5sDM9R2wDxP7Lbn7v4gkb7rMQ8WPdpakoLHARdtg7ap2P4xv4xEdEwiXLvW2muqanQu7pmi",
  "key12": "5ofEdTGUEogz7KdBk5TYdCMiJNiLCnaD1EwV3zGtKgfBC5idKiyBRKLtQUMgU8zRkZX4KopLWNhhneeLfhbq9DmV",
  "key13": "4mvpUGwD2QNszWmzWenz6jFd194xQwgSfgiEk2DakxTT5cJArdunyBQdiP5yVekm1QLMts8KpSsxXfJTD3LjTxc2",
  "key14": "3skw2Cb22bpEZix6VFu4FwuDZPCZS3WyuNe27pC16pvGLQeFZ1SYzTrCh2TRvxmVMXR5k1fAiE7iFb55Mf6ny5N8",
  "key15": "4Z6cqpLTAoDLd7uy4yg5cPaVmhihqjdXYS6PG5a72ZsTismQMY3dQBmwozMhWuQL8ADyoPBvyJeQG24Wig7yCVdo",
  "key16": "2hdoXjQBENrATnfxttfMrL9VqFNnv9xjjrb8htTgZErUp61KyZvQntdjzd6XjYxtQH42TbaLjQHbovjEWfHhnuS5",
  "key17": "4NR178ofPAdtA4ycxz7Q2Kx7Lfrp2BKw7T1GyKwKFmMAsQuxDrpGXZJe7M8XChw8tgSMzopuvVvg3fiFAHMpBQHR",
  "key18": "4D4YhW8imFAtZiFSYqWxbHxx8X7X1HGeBykXjmU4oXjsP3jCfZp5wwA2myKVjcffd2yqadH8ZF2f2bnjkMCRidas",
  "key19": "3khowzNs7fx5SpV4zwfTXVTbLGeF3qAj5JPmKrMVNekxqsBz6SGVrbhzt1EadvizNaNuTcBPoUJK7MmDUF1RiABV",
  "key20": "3YEhDTA7whs6aDfuPSpYRZQbZwxerjzcmBbWhasHjLQUyxv3bBGMf7YjzKuec1r11PM8PJQfJa7TvU9V6RRc2GL7",
  "key21": "3qYVm5PcSnRC11DwXG4kGtx9CVUhwWNEzWU5xrsdtYjmCiyFAARd1i7EoGc7TUhyN4PQEZ6eqBrvEBLGZ7kpvtdc",
  "key22": "2B8FkMTUF6hMCwE8obFizgvKyNtd3ZaurBJF8YRj4rPtXt14myxTfHVUCyHaB533KNQmmCqLoq6VcZgmmDfQbHVb",
  "key23": "2p83WX9v64C2j3FZcxuBUJQ3uWztdxeMrpEDpcYsWjQ1SyDS8RE2BhgyoRGMwuXkpjqN9e9aDhwMggcwFS6HvYp3",
  "key24": "54weoWkr91boKjHMCbFC9j2qANWctWhqGVpkvMUQh5PgjTEZ7WSLJVAcXm5Azm7xE84PKYJ8D2BLm8soHRNrGoFL",
  "key25": "4ZArtraU2z6wJ2NRrHT184fMDPRLC7a3PK69RSVfiCUJPHDt7MCYHjzdD6sooqtrNmxsao16MHCDqij6oRtJhP64",
  "key26": "23MDLBEJxrv4NWMdzc95vQMs4GYwBda63E6RiztQ1jY624R2BDtrHaavwmvF49A7GFfuD3WSj64Uz9VW9UuGdFJT",
  "key27": "39Y6bDByyCXZMtn9o18YY6eptMG65w1DTxBtFmYmps94N26erHjcKcR7UYHeNzhjZuxMPBuuqHAw3wtJf3EuBBHn",
  "key28": "2MBd5xPsHGaupqUS1pbnYTkfZ6wysc5uQpLKHrhNjmT7DGEDq75Qpg7EG9HaLQ1HsQ5SUxgcbGj5RKUqh9PF2k9i",
  "key29": "mkJ1bSNaVZmV8oB883gbFULcRS16zSrpsndStYErLsu5SAAKkG9MtwzBqPGiA1LcFTVtFYSGS57BGSnWRqFKW5X",
  "key30": "5rStQjMic6yEoVzLn92Kx4YBCdnNg6CRz7oDfUji5UvSGbygXvHHLZqUk7SETCp3kdnhLp74EnFwX9gEUsvA4ykY",
  "key31": "5pNH9Y1mHpe49p83qW6a4hay3qaMZzoxi1P3GdjBsDJNT1vJG9p3XFfgtfZHhhfz9oxdDQosDTvkrr2eXqa5jdpH",
  "key32": "4xqUmgNsyt575pXrWKHtH5U8MtBWdaBYYJiKf3R5Rb674x5LhkQbnPiZxT6YxSA5DNwUEZogfUyX264skhgfPH6B",
  "key33": "3r1b6H5yDzASxePGpbKdBTzT6zcBtrz3PoYGzXxmDwbv3rBMpt1qtxL6jc2os4t4Wk3bspWe3w4AdaSm4ceDEJ1A",
  "key34": "41PMmHa3N1gJzrboXv9emakbaGvnUuCJ4d4s9YCQfv5vMgkntuAfRvQCjhBmdKS65KyR5jT6NRqMJ3bLSgnuPY8A",
  "key35": "3aXUd34hXpiiz3nhNMQKJ7f9fBFosQY7D6suwQwXPK4knx4tFi2wsD32cG8uyafCVn6Wrwne2L9zCybAFMQJuUcL",
  "key36": "3M7oxK5RBuu1Up1eXbrh6eqmzobtxiL7rk3i7rvQDDDgxPVA2uXpYaU6RTHQNVY485tjijgWiB3V6rHBygFoxHVh",
  "key37": "377eoPyMkCU6wgSu81KPdj9MzXiiPBqh2yFrFPGa7Nc6KmSMJs1gjMwRFsU4FfPBrbjhXEsRVNdJgyRK4ecVMJP8",
  "key38": "4fBzvd9ApPgEBP79RDQHLiVkJpc344ZwXehX7mnBnzPdK5ZcTKZfrtkRhhA6pyRSMzjdP4ydQQcAdUX7KDj655qr",
  "key39": "2f34qTcMCuwxJxKinvgv37mfomxuvpcXqDi6ihftsfYBLV6qaoySez6h34bNFnsSHWKVXP9gHt3XBbNNRYhib9QD",
  "key40": "5hgo3WhgxxBDaWnaxAQDKjmUjQqoETtUEBC3gRucUkzs9YWEHmvqKPr6Rd6aeToYu5bVf7yJPWTJWQ7q7uwbmDAt",
  "key41": "4BZkNh6rprJ5GKJB1HuFn5tHM25o2CexLzELr8yeYQFEre3pWRCDjtkuMTXv4z66ri9EvER7AkC7GYJknXVEftYa",
  "key42": "4vd4MSfsnvPX6Zf1gd1wFvjrWMC4RMCwTGHKYrir7uP98auuhZ6DgUdbWtvb8R1bATMpVizd5vJTQW4Prqg8Af5p",
  "key43": "33LANqFZeYuTWrVUDexZZoHm4CG8Pqoo76XeSyRThdSj1MAjAHHAodsHBAkQyn1QhU8ayc1c3nMo6rCDGBEG52XH",
  "key44": "4tFYdgc7LgQPH92UpCXHPRTQBGgUSA9hPAUvc7GVLSritY122VXXEmQVSzDFYAxVVTuBz9QdZ6zcwGaHZYXD7PNG",
  "key45": "2SccT1VtxQGhiAdEYLmBMs5NraqLF4ef9uEWzfJsGrwxkdYXRsuLknGvbFDa8uzuGHR5bwUuQFadTNsqftNGqdA6",
  "key46": "3YZrL2KH7j2NFD3e5cV1Kgwku16kaPyVmd5wfNJPGa1fhVp7wEm6mMbwDX7nffRBXB6eUh1NbDGfj8mMqG9v1ATR",
  "key47": "5AuC6Dsogn5g9RTEDmEefUWC3pKztuczTdEQWoVHh6kL5UnsMk7hR3m2HamHJVQ211pLBtsQCcAUKx654CCvP8na",
  "key48": "67ExLqu82NJYDrCYfziHQchqrEc1cxtqE3vpt5wiFYy7oXpTWYp3xMN7NZh6UUkKQt6XZPoJNK8ax7bwKPYCup1J"
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
