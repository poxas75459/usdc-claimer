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
    "3zqaB3C6hnts5aZ8BZnt3b4QsThmtQPxghwX9z1ZAciFHtr9SPfuW1Qko8dY9FfRrBZ2CUDJB5oZjDTsvQfUcuTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZZtuzPKzxtosPVNg5sudawSn5otHG3ABnYG18NtZxXK9DXPRRHoHDrYjK62HYaMyJoTv4LndLza1gGVV5bY3wr",
  "key1": "3bowEh9eLZo686376xKApBSt9bYgyUPNM71N63ZEbZjCvEzzRNxMwTjg9JLYQjzkdA9CnkMzg4QYEhdj6Z7Dj73g",
  "key2": "5JMhgR6SEXdm9zzZdqvojoqL7kpmJ6xJzMp8xviVonAcoe4pyAzNNVd9i7V8Se5Fa8454G73h1xsK4azzeynAmDX",
  "key3": "4ya7LzoYihmocTMtANyorusuE4HCxUSKbiJe3bMpiB9c2zgnG6iJV6tm5G1YNCZsHRzZxRM2MBPj4tBdoFUDHTtv",
  "key4": "4Eh1z6Gm3kkqCxU98MXZXYakLDXo2zQz8BGn5kBfW7GQRQcjVTYnaCDzMg141J7kVDecb2RJ9VtZMMCThusTYqaG",
  "key5": "2VSFCaMtX36T6f8cubpwRexbWzhWJkqbF1QkLnL7Cfp3FetsWn8uhL3adS3EPHtnYj7BaZbagJHrdrg3moh4Hd2K",
  "key6": "2VYf7o6jEakq4oaFR4cJBXJ6g7pg6sMTtkMDcq9H6tx2stYe9iXRcqpw7jamWsFwePzpeu1F9sKmX2KH36F7Vc5t",
  "key7": "29cft7VFMRHdZtpXem9edd6tyn1J3w7HcKB3sQ4zgczoZvvB1Xw23EBSd17YrDTFVncTJiANNdKqvhRMWRsMQRLe",
  "key8": "5G7zTs6LP2YKS1PfNtktSXZZ1mJSkCD1gJeRLbXB6PU8MJsPeV1i316y7odbxDYkHWH92MWyAcvp2sq7m8d7Td94",
  "key9": "4aEShuTCPTy2tWeDZgKhjNcxPJjqnVEUF32fpaCFATHVLuvCZQXQae6ubnhZoM1kA3kSWoUY4iZCS9NuYTgdiyZE",
  "key10": "3hfcxTPLraCEhfBs5rYUYh6AReTxL61UnkxVSy9hY47tiRKWVBhNnrVBRHF7SW4FU9fkTJguabfTtcZ3t4Wz4UrQ",
  "key11": "LHUrqTxuB1XuLg7AqHEWyzBYAUJHZZZxyqb2gb1sZvkjqDH46ydkVdTMDSiQRit6nGQtsDRviybqQTZE1sAeeUH",
  "key12": "2BeuzUME1d6nQsRRZ8PxAbR7c2ksnQTFhADjTduMCqt7f3S3wGH3x7p9ToGP29u59WA2KVJU771kMNoCRvydV3Gx",
  "key13": "2LY3y3PrTSZ2VFX8xEVhia1E6fDKfdkbnj4eUG6nijGWW6H7uXJjvxtBKfg98QYzZcugkkctm7xKJyV4XkXtpFDC",
  "key14": "5sttQKsusUhoUWE1WLbh3JPRRHix61B7yW2BASE6pmgWcfcSoGkJJ12vsh5UYwVtgKGq1LVyEvcv4yzRtvA57WUW",
  "key15": "4Ez3UXAchTKBFUh9sKUz9gjTsJfYrbvYtZLQSqLLVtDW7FF7QX386wurDmcmbrUR9G42ckggun9gLB18KTTFHmZt",
  "key16": "2S5i82WLkkpyViV43swwXNXiZSe1eAX5gxN4FvbEyMBdsxybrZNhJ1uXPEoHwQqyKCU6gongobdhYSyyWrBiLT5D",
  "key17": "jhRfSo12b2JGESDpVVrhFnZrHUTXQk5DhEDs14P7pv7b8d9uG9gb9B684G9RcWRm8b4v6xqLQxLsBKp4BMaiwSD",
  "key18": "3ZoZ4fDBSzjaRzVEkXyicucj8YuUeBjAhcpromwGQZAfCumR7ggreefs4eVTDgcgUWYTNiwUvfJtypNJHT4YVZFB",
  "key19": "36JfqAyRxtU3xeqew9kqmAtRoNbdgAmejmPj4GoxTax59Lb6bEkMCeJiBy6jtBYZBFZUNaRaBFdb5hfQFWPvPj7Y",
  "key20": "39N3Jg8JRAAEW9roXpPMyaLXXJLoZFTevYZpKkWwC3Vee6LabZawxCXPZnENQYhcwAAtbVSuovVrjbiKcTtKmWbG",
  "key21": "67ctw497B5sHZgsQw7XFW13yteWFqmdTdvkvVCDiPnDCwYSsXsb1iPn7iDaPHHyZjAkPGiLjkkbhgxNWeZk7S8tp",
  "key22": "2JLXCGQWq8imw7jRT6dMioY1k3L849Z1xnqo2CST7cccx8oCxDk234NrKEvp3drP8uxeyBHn7kuuojhEGkBDnvUy",
  "key23": "4iy5meGHGmaCRZo5Ne9famBzbL3eHNeuxHGjuJGXVHhGkPCYYXG2ZmUA9u6ECAYsH8Nnpd2s6STjLUSpa6Rc568y",
  "key24": "5qpbu1nuQPmhZGf9c9PUcdnmoymDqWqLeE6r8JMpX48kmxLnZw8apTw5dajtrueA7DspGxfdUJ3nsSjfhYu3LJ6j",
  "key25": "ehQedtrqhWDgKWzbjA1qigKwJcSeYytcivHQ2Db1RW5hM9D7F58xixHvMbx8ZJc4VUCJr1oL4jm7GmypEaQ6Gn4",
  "key26": "2WLJwo6LNa9iywi7nMQCDQ2ZwpktAmmpVDdPyoFaZLPWVdNQVqB4DuhK25nU8Hxh2u5yE4tbGRrnL5S4WjoAQ4yb",
  "key27": "4vqRmkRkAZF8HcSLzPc2GDK9HVcRcAu2116yJnos37ma1FJfsj4YUokNX4hWXpfSvNzasb45vDD76f1xTWfJVTgS",
  "key28": "3eU6GoE3o3d6usWyUHwB3oqaeHmVtePg6ePDZrW3bWntCxoPrdch8cA8TQoyLXDDDSpznK4vqTXX8g5kUyLegZZi",
  "key29": "5uKkxMCCpe9LyV6vhAQZRzEKDLdQjWkFjbLNS5ywDnwzVLenoVAtNLQADR5Hmyr3z8zyYbcZaJzowzqE5B7kwMAo",
  "key30": "5FYL15hYwUWQMd2hvDLyazcG1dKgZPJJZVeo5CKFurUVEpqhJoqXypEFbmdX19as3LJYXvdVubRy459bnS6FMP4H",
  "key31": "36tngwRCtkGY83ugh3KjSvdxmWYjdvSyjm94pXrr94RdJxEUjLHEApnEW92hJz9t5Tv8UbmHFqNeeS37xKksby81",
  "key32": "62KKmJHNkuWrpYxyw9ziZMmkk3cvry7LfNhnW568ggDt15guZQH6NTdWFwwGExjuXUHwvSdGvXfBcPqo77G7a7Uo",
  "key33": "5oRG663YBrV4YhBkZLVEDC5NrZpgyGhpqpVKfxSrwXqR3SfBpi5ytxrd6BtYypE9oJd3CQrfnZdsKNr73eaNNLgf",
  "key34": "3s4WgBsZJK8nh4GRd5tJCY6EeBMusaZPv26B4iSMvZ4jiEJACXeG3aQiJmkAf3KYNdmiDKKYZzABUKbaRbMU1wB3",
  "key35": "4HBtkfcEUkhSivAMD9RRxMKQqTdsN529g5SHBeT8pH1HxVhDDpF22M4yS59QcqbLfiPRf4CFhX8DwsiHygUKq2ja",
  "key36": "3HamZ66k52TNFTxwvn7WE6jjYkaABXqjFVQAsZJWqm92eEJo6G7MxghecAnZ6mGy2cGwfDzzHk5mcYQfAdrMozx6",
  "key37": "9UvcMLwPRxeiF5c4yZZtKxWzbNoinAPRbG44aT3eo5XwQLBxLGQzx5RNtHSr9Evd4CKYBHSWCoLrvgkQX7ySAmt",
  "key38": "37CjEMNp9WkuG29vUd19GJ5uybkkqfnjdBrsSF7tbm8xtgvgrQvrDhgzrX7fUCiCfdPiyUqwmWxYW8Wzs1EeJzrQ",
  "key39": "3Vsqm9peQz7k11uDGsTpdEMGxCHCZEGPwUyvUPJtS4JraqbV6rNtQicW12yFWAv7nNQmFiPkWwBznuGH9hfABCgs"
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
