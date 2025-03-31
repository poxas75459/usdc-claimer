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
    "2THNwkURXZ1R1c423Mh5DayGd2ZWhymmZxJuw9m6Trc99RtKfnLcXtYYsUhAdmBZFps2yu6ZvFPdrjE7ybdSVT8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EC3Wws3zaCVuoVBSjvq22aM4YuqxUKZw2oAN8KMd9rKPrSKgjXVxNeGugdxxLpqHakwiJzYXGJdHyWJ26dqrEco",
  "key1": "cntt5ZRc7FshVZNf7uxrzBuKvUUWrkpTJmS6mucixgDfzxBeeEJsKjKtXCHBcsGwWbebhCs4hDeMS1xWQD7EYNs",
  "key2": "3UMJivPAu77oh5SFrcQe24tpGzLqRBsfgCw3WMPbj1VStmbLQYWWgCGWfYi455Pm9raH2WcadbNZ4NWB1wNdjYUK",
  "key3": "3sXh2L7DxauvQmafXzgYEoDrTuAGJVrkK92Bbjgn6VNMK5JnNVA47mTAax3PhFGR27C9QvcmHnvdvvjahDc542c",
  "key4": "4zfWVqvgQmJ6WUUv8bE8wyzKLn1zAjKXAzumdkUKMtwKREvvyq9YksJgh4qEP5LazGFgJjmmDofJFj7zjj3yU5B7",
  "key5": "52op1pgdRyzu9NqjhY9E6idE5Pqtr7ieqbFULKf2ypoJ9mTwjB65DYiXPweAzEm3WfSfeUgPHNSM57KmUGsfLQQ5",
  "key6": "551zQqNvFhZzzh6267Rh8tG7YwX3B6dY48xmZo2JuCFcEd6MkP4AzoMDESy6bCi6Kg6kPev2vuY6ktKsMkD3cN5z",
  "key7": "RmjKs9ND5AyMuMpjBEUAZjCEtiH74puRh6e6aPQqnqbU9eo3ofGGwPiFAC5HPhvebMX2HFTdFR5NS6BFYuJDhye",
  "key8": "3n3n7tjzshsUfgg5db6jt2e8bNDEZFykGf9t52rj11GNHF7xZSgsQZSCGR57DGuFrkUiogbGmeFHUZfWELKys5q3",
  "key9": "598jMKY7ftzYFbAW4H1Lo6hpd6n4eimfQqP7yQ3jG371jVZg6q5rGdXWEfLoGZBzcGRVgakEgMUe58NduwjYyzNW",
  "key10": "5mnCV4fnYaZzWg491ZddGSq48WvJ6XStNsnxqz8tpFubTpNTtjyxYzBguVecQeq6vKoDbkSqfgSXLKfyfvGYLpzw",
  "key11": "2xJsTCcG18JPCpyJhngHCbJ3N4SBxzKUhnoDF2Kp9GceDKguPBzVvZ633sEZtMA5z3PDYoUeARsdb1R4V748oq4p",
  "key12": "3JkebyVR3KrdZbidsvdSyyosvGMwTCVq5KrknCQez3Wprz3BqvTmZqC86RpC5qL7Vr3EJv9Ct48BVMVuCVWtgusb",
  "key13": "5BYNn5chgoyiNkjm2GJAV52256GmRiEkYtapokHHdDnxREB6gszL1z7L4C7j3qpXm5kFQvwX8GkChdAaEPsAokZg",
  "key14": "GbbMstaEVTYUTWaRR1x5KwqkXWiWVRLW6ZLYLjdDB9iCfe28rqQRwyHWCnXvxhuD9gMLQEunFQL9cDfQHfun6hR",
  "key15": "2KBHXu6aB9bd6bbqKLGrSVEwXocrbr3iPs2bQSjEsikFUgrGZL7WhU13xsPy6ZcKKYFLNoFyy9nxVLYED8pmAJ3H",
  "key16": "5ZHNVw1Xt5i2BDY5cgTXt98uYqhaJogcw39cn7f91gTQRWxkSwbKc32yCuzLTwSGZneaEX2ErZNWkGpFF1agge6W",
  "key17": "97jLdstS54itemQLHpiiKwNTjaRSkkNczTia2cx2QDYC6s59qUDr81SKyQzwHmZVhZgj3XMmso3ckEbsepgMem3",
  "key18": "56e922hNZ2XfGUSw4jH54ybRFe6PArngHQWRZihPTsMt3ypEpxZeJs2C3nVkimJVo76DH9mKU4XA8RursFB731ef",
  "key19": "9R12fMUMXu7xnVWSfcWRiV2Gz5EF2jqh11jEdbBuDaDNNMJ933Lk26JuxNnewmb3MyyAGvtyFM1Fx46VxF7JEWv",
  "key20": "5SPvURqhvP8RopWEu74xcXFxFBZTqNkBbYQmyDNSWiTUDyTvzHzcsXHDaYrXwGoWeM3aj4JcwAPNx5Btdgxv8bh1",
  "key21": "3Pg68R1ekcVn2eymBfeqbyxZNTKzt4YBGZLU37NFXTUHs6LtLnycQEZpnphfbYtLGEKUTvn1Ag9XK6QznTnR37pF",
  "key22": "2SpkWqvsw22piNjZSz48m8oYAXDCjETGeeATxv29E26c8Kw6usW4E8yz9KZmgCFebuvJmQSUi5WHZNZQWeiz4Fav",
  "key23": "SkebJXsTKfAZmNPKbtfFpwtZU4shezuUiNGcAyELZKhh6U6v64uPcjAzHqrjghdJxXZVktVA7t9sGDgfFdFLH48",
  "key24": "ATp4F4zN8aSEPVDNyNBS2eEMjmimowqDUXz4b7E9iQZwDMpiWXsRj26GxKFZLJJtRRgs45BBYLZveYvUQNLm7ew",
  "key25": "UCuDzMyF5MnXh1Ui4GxnG3BCHMfJ6hjkDMkdH6Tvg9P3qnvNX6wh46n1Ga2H4yg48So7yvwZh5JKma8UzpTrvNV",
  "key26": "2Rvrczea5brKMcbg49W6ner69tFrh5jeZAUNyXB3AKW8KTJZETCnLFs4cXweCePbznRszXKa6LBHqJ9nfHVMhP9",
  "key27": "3LqbtsyasBKXjPs8AXpqVgXRLfBy6VauazaoFQNZKHZbasWK5p5w5RDPENtwDEEjQPB8yMxPc4TcwrfFGjt5oP1m",
  "key28": "3ZJYqzGBJwB6J94yZZVkzXbp2hQfg2H1U8SwW92nPE2eHbHCKV2x4pnfGRKZFYCZETj2zkZNhBPfkAdHsVpZnLGL",
  "key29": "2ADdsJENNLwX1i6yk9fdhn9BjEFxWw4CsR8CUpnkQWo7fVik6eWyLMRQnM5TD5e5fVpNwY9mubbYjLZuCM2qJsYo",
  "key30": "5qPWrxdASWtBrXT1az7AXzzsSfpeX4RZGMtwxQffKaii6XP8rzJ3HXdtSorm1THSoBTrsbuXjfzEBGrCehPf6vWF",
  "key31": "4ugXRxtY2KKrckiaGvRGxNzsqqFvX7LUw9k98QUPoXV5SGtQ54dXX1qusjG8BU14xQ6LYUswHoQQRkcz5cRifvvq",
  "key32": "Be4xNDT83DGiarKtXLiaX1RGd2pEWu16ipiTYDVuVC8TET4sGM1bTasjDrHTn5cpfoCPzKk2EDFtNRTDU4yFva6",
  "key33": "DJY8CHsfGgKijvESZbFMrSxT9XahMeNSpnJJvjRus2xSivx1xDht117hEhUpKM3bmDq7DohH8FFUvytbZNp6qKF",
  "key34": "4WZNYGzrNDD55zZvyeYRhWL8vAUXa6LXQnwsdMNyeHwqzzyNKSgM5B7WY3GqadGppZwQjZBq3CGDeSftWyPRtVsz",
  "key35": "4KzHjEqR9zgbRN6tbtz7oJ3yZoQGhevBSYZGGn9rQkDqkm5L15N4x34yDTbk6RuLzg7GSN49xapZ7ouZN5r4tZ4U",
  "key36": "2eupUtDxL5V3xChrKTcA5jejoUQGYgPUWWvfBryC8ffN1iyKxHHzFFquRTMiLD9iyLEFYizVBz4t3ouwixK88yQn",
  "key37": "67TTyXYcdaChqMjso8csgMhifeyP2pSvvE4uCvqtQHLd8WB6EQnhpsu2FV28qvKTJHHboyt5EzuT6f9stENLnxTi",
  "key38": "4X3WzwmYoe3qvNpodrz1nDqpEZv8d8Tk9C87jbA7qowhPgAnkTBziuiBcRbtsvK9Jp5XTGXqAn2xpYZWH8nyKLk4",
  "key39": "5hMtNn9XKGUUacKaKFEJ5cwPhGDnbuoD3wnCG5e1RJhSmzMCUHb3bdMWPYECicwdQ1y3EaUByHR52eRkyNgcVEgu",
  "key40": "4dQmCoBqCrGy6A5WS4fpZBzVFbqmfZStT7Rf4RrKLXgDyQVAtkSfL2w4RG2FVfPsxHxA8M2deXs6rtGTwnxwno2b",
  "key41": "5vVW1abixHN1n1WpW2H1wkzD3DPpnyA2Q7znWsFi6paU15MdVfLHN8WHUqMTNHbH7qwswdsPTZhR7h8TpFWSxSew"
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
