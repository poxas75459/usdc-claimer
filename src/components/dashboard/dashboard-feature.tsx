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
    "JqTeQbM8eU61VQ2fCWKf5dBB4dqNWxLHqtV27Rq6s3Kx1kakMB2i7mLXdiDsKALqiskwfWAhiYMEoobbBVpapGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Lkm8nikktM3foHqdBmrRy4YcD7MQGZ9RUQ8cXa8xLvrzSxHVWW5qcy3bmT8HZVp6qjJi6bpMLoDa5Yqc5NMXZH",
  "key1": "2pWYJRmGT13qcDdMC6ncxuQWHbE76xbwt1oMf9yaApdL5cAHHER54CE867MWmUBSPG34ZGE3kWSUADAUbM5PH6R4",
  "key2": "2hbFaVCaWrk4tj1gyS8RPqAVrsgL27XeARMbYzHxhC7kZ6GFpaYR6RA8WivoVqkqHEFJUcqaSZ6iwyYfWfMj2Cac",
  "key3": "pZRbHDpAwptkbUuhSWSYJsdX3mNz8tVDTfQWgP5wKxNkeksPXyhLY97TGjptXvnauCaFkpqKrs7pAnsyDG9S5EU",
  "key4": "2QdfDzMxcbSko7EXbRvTRWKBtEwH6Rf3ucXFjqrkHikfV2m4wsftN81pzJPod15j2a2VMVquyMwQsNs5nDhXGWsb",
  "key5": "EfCco1YAPHgvNj1z8iCHRruLEm7BczW9xJagVPCRT5JtEtX86kuNakxRdomeYpfSdL85rFo4cCqkfX2mv7GgHSZ",
  "key6": "4UdLNHhfeVuqN7HaUqPtLN4eMwDLewfRne91Xos3Cos76U5NSjDuJzfeRvNWeqwLGDNxrTwtUKNS8SqFuUnAebf1",
  "key7": "2vgLvNAeFqS1JQPMejGp95U7FSbzsmcxsqcRdKFVnR3xtGhMkDHkQWHSv2WQ3pzrPKGDPCiJNxaP6MJ8qrbXKktJ",
  "key8": "2VsTWvF44FdrCUjEEyDLcd4mhikeGmSXNFAAWpkXWbmsFeRHuMBQbtx7nrMBPoiq3qwC7wMhmHiDzAUrn5FS5Qxi",
  "key9": "hw6WbnVXSHbWQqwXwy8B8k5aKrULbt9BHWahoMZnyqGvYJhXw9WGHbvZESuBuUVi5U32pRP3ZDuw7uganHGnDjB",
  "key10": "5hho3T7t6ue3TXR8SK5kqDCbgacUaqVAbn5yRVtnx5FeWc67DeKwPdPUjditE55Hs7Jdk5v6rFUxwS6xR1KypRnD",
  "key11": "4Bf4BQ5yUQ5i15wb9fxam8fzGpHryx7vgmvSZaHFEZTwdkUiYwQ6pjzdTZfxCJn8CCQBmrs2HEckdi15Ug4nnxFc",
  "key12": "3UVxgZauai7GR8faYPKasBH9bPC3ma2jZjGRnXwETXuYikyqEsok986WmZL2GRcG7byuMiaN1yhrU1FfxiVq9Hfu",
  "key13": "3SR49MogJx6JoZMxFyRoVeGV7B2RxC41DiFWaUFD5RiYexFYVcxtthNmbR2RrBsqX1VhwQ437xdvDexYRHJAfD5n",
  "key14": "riJez2bCCThbzo1bbcuuuRDYHgVKtJZVcN7p7WGEo9RQqPL2qjow5P5UuncB2HJ8emqyiSwuSKq3rx7Q5RUg1h2",
  "key15": "43JV6y6o7ncE4Mf3AxyMqkCfs8wvx1oBRqcCa4hpVpEAGAbYbWiwVCDDvAtee7tZxUucG8wCYRutpnHVYGVKBbpp",
  "key16": "5KVzbZGxjuzicay73rDCznyLJEm8HizAj3zDJhFzggAKx8hsHeF1QxsAzXdZxpvCVEAurG6otGBy9EsHnGbM3QaD",
  "key17": "3RfB36ddG26MpvhrmLa63Fhzdkiq7MFEMb2FLELmiQtLY93wFdL7LVm4AUyzpX2E3GUDw9PfN3uENsmjdMPqDgbe",
  "key18": "5wQiipg4tBYbExxUrZK8Pi1NQggjdPi19FaE6TqECsno4EgqhJ3Uqb5YhvjRxH4pPU9Rio21J9AuxnvSqwQqPmHb",
  "key19": "3sLYNEjVhfWCjYzXbAP1YHuyp6NXXFW7vJGuJrtjryoSP2Fydf59Z2YLGtXRR9WXAJJ8pMRb6CUupGzzhtTJd2Ew",
  "key20": "4aqCGijxc2kWtwG37Brs2r48qhmCcfpitMzVNmMmaJ1fzV7Zcy2DgwgNaQpb7WsjyABWzx5X5uoN9rQiE1pLipfu",
  "key21": "3Qttw2tdnwoahRj4g2JW26Qb5sh7Yd8pfXUoJjdrQpnYq2d9hZ99eNKRCY98Q64ttJdb9CFowAp8BaaJ84iDxPYT",
  "key22": "4X2rGdcncAsSP9BH7Uwfc6S1KkhCPqu8X2d8k6amWALnUzz3hanoqtPYuWCpazncyxMSdRcMGzt7ZW5a5NiKoca9",
  "key23": "42XTnWehUMRzHgA5fNAhmuE4n2yZys65gddMvemejxNjRbjgYiLVGJ23ag8MgWqh6Ewy7xKXiw7euXuX8drktMdj",
  "key24": "3nV3biCgSsz2H1PgSNaWKcG4CHx8zZQwsFDZWqz6FKvsaLAnHB4aAPWYEryyen5SVQy1x4Kie2ocXYGKidg8CqTT",
  "key25": "4EBB2eGXPTd9mJ44BscM8CAJrauT3PcnwdxSACQEipFXuXG5HCLyyYCjbPeqKv87iKbwsYAHuJqcovf9xdHTVvi1",
  "key26": "572VDsxi43Pq3LsE22Eie6DddvZb8ohECwtmKXQGynyXxaWmmgSaYpgbRrhFXyGxPaxMNXzuTyjgUxzfL82dPvHX",
  "key27": "z3iSrDJ3jiGCYmp7HctecCcmnVqAQKTiJxqRF9QidTNQJr2SYGTkfvctPQjDwBps6Yfit2EvcNwLv8jyeLeBPGN",
  "key28": "4TQoPnC8g8AhSwCSceezzgfKBZmFsUhomyPabPqfCi3d68kwA1z15WGnWFaDxhGH1vgYyWVenVmosgzJRUmHG97V",
  "key29": "34nWzuMVHfALqCzgD3MKJTkgbiDFNVTW61X4CHmGUPtDh3zvLNVUNm6rjTNewhyAPLDEjmuCp7gtMRNhp5cEWs2W",
  "key30": "4SeFYkDhGR1LmcMRWMRj99A5Cht7aXrLA2vMvqDxQ42zmkhF5W8qmmvCyUTuGMTNbdYSBjHg2pS6WrpVQDy6yaCN",
  "key31": "2xoGUN32JG3AtqvQqaU71urW6KQryvewBVCf4zkpciWf1ygWfqytEZZvASboosCcewm6Mh39ktqN6NLx8mmUs61E",
  "key32": "mY7TiFfposQBvqjBY3eeLamJdeTdaqRuzjQ7bf6ut3zsZJgZ3MZ1JiRX5D9QoKevCdg7yPSjcXYxBkcBVwxTjEh",
  "key33": "5aWiMbgZnJX7PmeV1vXa6oLRstYzxEiHytqQ81JrGv1DjuPQNfez1j21dz7jXjSoGJkaPSdZZ3UXtgbJAwMLadww",
  "key34": "4Gbnreg5pQ65ueLSHdmcwzpBdDLBaZVuibd4uBQSB6eVur123CAGiKqKT3Ub415zYGjFmhnoexDtbJUpYbL2gpEe",
  "key35": "5RcSXAAW498ArjGHB1bGVAH91L9DokF9h9gZEgrPmt4CUo3o58aTcJof9PpDbKTHDwpRS3sc4xo3TA6TxsBB2rGP",
  "key36": "471jG43z7Ts6P8L4CYeDgNuLQSvLgzzZkTupRcLqV6htdesdmBWtbHKMdVp7FNyN3NzSzTZ6GkhPFPweqcC17a6P",
  "key37": "4rKZRzMa5DTXGcsVohoC36rTAp5FRYnnw3cJHMyPZbWVxHppEcDZpBhYAKPwZrYMaN4f2YAdu2hFUKcAt6NVChp7",
  "key38": "5pxJMgynKvw3ZVbhzVACu2QxcTwC9gPAnb36mcEWc4oRTHJrHNyC1TVLJo1kRW6kycyuB1dsLSqvJpQA4nAakSQt",
  "key39": "f2v62DqUux4G5jitkr4kNVf2nrzpb9qk2QAoKqAATHnSw7KqJowXBhZ7g7XeZwMX5h2Dquq5k7H6MJYAWhX4Csg"
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
