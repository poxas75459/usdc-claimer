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
    "2hUXv2nZjCqVrw5enXdx17b4ucNWHt3TquHQkW8PjUeubxA1QfeFoZwZMG1ZWazYL3KmyfbMAwZ2HFEKXsiM9Kqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39JHa2q7nQdXC6zyJjAYHUgEaVHNiuBunn523Qi1uvgqk2Q3SwSv7EXxhvVDgs6K89UsWnAAFSHMxBFAEoL3zBH7",
  "key1": "4zfAUcZxZUrx2hBHeFNsx89GoffkNdUiAE1whE6MqqiCDKMXaHZFcCEgUZJWDC1JV9NYuNpCyykzaiK7Q45ULKjS",
  "key2": "25naRaVBBKoX4UVP1TNKEVeWq5FvFDaTe3f6c58b6gaHfZM6gpVCQMeWdFGLctBDDaPZ5mjJjFLh7sBratBBQpEf",
  "key3": "w2gQMCv9qtJTe8Zbr9CfHLhJRdn2xeU5kJEBwpAo14yRjhT7DzXZ4ZMUYnTZ7Ytjq2bygNNmx4WVF6k4a99rGSp",
  "key4": "2ZFthf5FL29nt4Msy2dJgwkrXXGeAt3d8h379Ls63jtHZG2kroPTER1VrTrTCcRDhtdAXEvSDoYEvKNtE7VcLsUg",
  "key5": "5V5p6VcuH4qyFmMFTXPRBgFc4CTb5VoLCYrChmkAP8C4tbBhybJffzcYN6HVUdfcBoqnAXf8VaDGjyaktgLZfN12",
  "key6": "2nuYYa5tFQ2oqqvvePS12pAVoYviZRGMH2oRAF4A8GcjKorMJQzMFtHZK573rKELFpGTEZHE8w3tU75MSTeJdvSc",
  "key7": "2GaNm3wfN9eWGcwCDRMY4UpDkGYxmqT3ssVLz7YXp87i4AzJrupsP1wWMULcQ8auLXw2J3JUg7wgTRPikJ49s2Bk",
  "key8": "1jV8qkrPgDYyY1ALPn1EP4ruEVxTnDcuL29AzfkdpRQzxPo5qtkjb1cEo4DZoUkKEzkGamqhfsyQG7opigMfdCN",
  "key9": "2jztBcofBuVNhdqW4epvgjEQd1H9Uk3rB2Z46pJaG7N3GgBB1qPaR9iGpZh8w8TG1RnesLEvvU8XGQnMVjBWvsJX",
  "key10": "4ERMGAE67gWLK3Pwc9Mn68fAhbyAMqTFkReJd3FBwVirZEkJrTLWqkw5yfTmcJyrhvkvTjmSMnDZxSzEoUZAAXNG",
  "key11": "3oE6VWm82iKapxJsA621e6qkhGW3EWYY84tutKkoNbcWijaxXismibRYRZpN2LxaaihojsiCCVkYNb4UfPdeHYjX",
  "key12": "44ADMCHGmMCghCz2ueM7EzCt5wyE1NDnkFjkf2VHuk6kLfFUYs2AgFFoEbbs7pZGkHnGG8q2WS2hDtWLVanUzGng",
  "key13": "8ZJKfNcCYWNHn6KZSey7scCLP6wo1dFEwHxFH5SR3s4jcFtJiUMykSpQp5tKUdoMzRQnoAwnFfHJDfM8YWtjG6A",
  "key14": "5nqHjK9eUazvyyyzeWyEMSpNmcx7gBc5Xn3tMMPTWPKErAPJcKAGM4kEtRqvmnHqNCpHf1NcJxkFQxxKSUL1kJY8",
  "key15": "4BQSyMVHfgBadC76rmk2wvcJrNGKYkx5bbVeeZuHR9EKCTcsmALR9zJr2RGw58qLLg4W9dg7oZb8kCSaEdVE5SUD",
  "key16": "ZgxXchVs5foxguH3rcguGwNCiKeueV6MjybDmYWtDczdEMrGijztsHExMXgto9x4ZdjQxGQPo8PDzHonvD5DPBX",
  "key17": "2FmT4BqEdU52VJbccbugUGzMWgGRib9EyKhVQ3p8kbkzxXYu5KxQmiY16H3keNRViq2ihTiwZXuBEhJYe8RpsDkB",
  "key18": "2WrMTKYhvi72dnAZKoV7UPGRVGxgAWCzs8tjyUJFjVQqW1Eb84q19zGQg535RZLjAfYnBhTaTPB2Lqq9FBLPMKSi",
  "key19": "5oyZHFt3PkwBnnnw9UXWK3QJRD6Mgh4XRpruX1hoM5K5jEb3xNFgEDTCVPEBeMZNZCzsVcBvBhjq2FNv9sn2wMER",
  "key20": "Did2xvEpc4RMDpeUv4wn2EKVUDqVrzcRXjWLY7pjXsmfQwebDjwSX8ZZ7AZCmd26FhkPjx4Xyv9q79KytNXeRwv",
  "key21": "5fHkhHdcWP6RvzuYobCRhx1BxNeBDM7RhZjTqGJH8L9CUQRfASe7su477Gg1TQSrmyzzNYNNBzwM1EsKnvW6gsTG",
  "key22": "4FYg2wT7VJx9rnC8WUtUMNcNUpXwLV7KyV8QVeRVttY3roFTGqaSu17iNZ1ftY8CuHv4WEQbu3gvFaeMVGNXyRzM",
  "key23": "36RxeGfbyUwkdBmuJ4wsXUNBD9tTQSanNQTDmT7hChLwXap2jHNEz52AFpKTcDXNTYDr5HUqXLPgv7SzT4ggSmTe",
  "key24": "51bwExaHJcUFaGTm3FQCEBCviUpqCnUSVPtwjX77kHshvyugPuJWKWn2wi9MCNfdCCJFH8TqyEZBo4U6zpTdVGgt",
  "key25": "2mYfiBZgeyfqshLkdBd3oWvQL98FmZKTX83mt2jn7ubh84f95h4RERkpiMgpx2ZaBSRQxkt2NhX97DjzQVo9kZmT",
  "key26": "2iUG1asB7BLveLB5tpjZoz4BttkoDSTLrg5tJaRteBuAuk6Jc7NusBQsxYmmwQAr7hyudMVrZYNGZMEkvKcTEbKV",
  "key27": "bYn7yeAAHfA16X9fehdKXCaGLFCuMiijSK2K77tQk4qhmRquxXsh7Sy2SkcECYqRt8uf6ENMGVvnU7Zkaf5o3Vh",
  "key28": "2Zi79Poes1N41LcXbAqgfRRgqqfwZN7GjeXibr99ECQpoVeHHbmPNRNbgty6uJsUnmzr2xGfAB1WdQfxuoKeLVfL",
  "key29": "2MZ6La1Sdedy94m9yPdMQ7JNTLjcch5TKHRPnV7GDmR3B1EakE2ThYooxDHp5YMvbUVzUDQw5AZRJCZejCRWDdoW",
  "key30": "V3NdveBj8BM9tq122WRSTLwzWfy3HwjTyVtN7VxkGnK8wQGMfLUw8qw5nvbgjhCWzb8PZJgYcAPPcRHRFboZEpj",
  "key31": "3oVuM9rUA2hJCo2HQ1A7SrNYFT9Fqf5aJmxdjbBUGegNbkGG4D6LsFPiWAUB9nfJHWVExBfHH1FVNc8hrUdbdEhJ",
  "key32": "4cvP9qLSUiFRY9AzShPS81fKUuhC9ZkAmHJNAdSQK5x6LjWgDgCJEhhw4iWh8mF9AWXaAA8wNynqdaMFyEktXXc1",
  "key33": "4Po7zRFXYD4PjymBkrrbLbUziRLb4ouZ5pPHw9QWLsFNq3PbGk7EvKseyUUNjxngzWPMg5scFqWhYr4gTtsxEr3R",
  "key34": "3chGBZNTzWP98EhmJDhmP5xZP9ReYx88kzUpYrAefPYR9yoEmnL4nSm8TrezkaXfR3GDwuCupVCmhd99HyQRg7Nz",
  "key35": "qZNehUMhAvnn9qXuK6FgM1ovtKMmVG3A6qZYD8M8KMQTmPFBLLhAL3NspdfwXT8BeFy2GvSsvjHTXoA5AGgQZUA",
  "key36": "4scW9tbYBP3Nco24jWz4h2mX2jHrJH3B98adytucxiAMJ2wPWUiLvY1ZX9ND7ayphM6LJUPSVUtaeSaHyFVhDHPU",
  "key37": "3gLhfF9tgES12wnmS8uVFjC2YpJzwd88mFZxd4gdKhz4mpZ9Ei1otoWkM6AvEw57qZzvL8Ew6gAqrQSs6tzGT5UK",
  "key38": "5xofSK9y7fUVLwDWNhdC9w3mXKRvRjx7vWSfZUYhA4cExhuVMpny6UYFPV4P9J9cjT1qrWjPo9RiLiLdBvRVyodH"
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
