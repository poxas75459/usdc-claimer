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
    "2MKsKfcJwCLhZV6EWNQZz4V62FA8aFWH9exC3gPf2DSxGFnaZAhrEmvquU9nv5BRj16c7ngCd43CtbvR39cUBr9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "phptuaisUKtXpu2aZfX2uvopadZXj1AXFVp6DDqnkuVz9FAXwmvyepBkapTckdTeCecAbWoSYTB6EUiC5G22n3c",
  "key1": "2u8Mjb7oHBUsmhvCvUtLe8wQM8M5n7LY2qgf45pwpjd7ckSMHwQPfgHAUVMvAzu9Dj3BjYKUWZE7finfse6ZekoP",
  "key2": "uxh6CuMQDmvgFHiJbWmTopJF6Estv15fYX4wcfMUxz8Rn9aXb5g9f7WnscUEgjeem6W8TnXuY1wrbzN7ZYF1KVA",
  "key3": "3b5ts6onH7uB13QJ9d3TXGTPLxpeZCbGpM5o8XKiZQJHHWpGui6mnq714wMLC5i5g3hNj87Y4DmE4fpJ6QuPMop8",
  "key4": "5QacKu6umFFFJ9zBqGFnZk71CDqRC1CKj1JqSBshXYEyyPLp4HpQVPVzKPKTiESUfzBHdaRucCRoECzEkV6UxQMi",
  "key5": "4GTpiW6LGYmroK2EGUw7QEjmFGCEbsVUAMBKcx6Ds3FWxTPWnU2mZU78Ra5hhhUEMZZHe1YyZQeCg1yRnt3kw5zb",
  "key6": "5UUMSR6hKfhCzohk2YcCniS4y9Je6wZ3nBCihqWSj9PVnD46qmSAtNPSWcqQeTeTWoK31GvQGnGEWXWZVK1S3zVs",
  "key7": "3KtYEZkHgwhe7Jpqu38sYoMCGQ5cdKNsRzv9gG84HhuJgvbHVhtZbrLHgpePyQaTGaSxLchGweHJjPCaGWavwjd4",
  "key8": "66cx389ML7HbFsNoBHjYVyCdwxcLFEj6Cd2p3a9qn2zvCFBkP2uhTdHYNEN7B36YRCqznch4LDPAUWeetxNohphR",
  "key9": "4bPoVtcaor9XKzvPXUHjoEf49HR5Emg61ZmFBTQ4hqECG9LLcF1pxBHLpMr6C8Su3MouhuJ2G9dsQXeDFPa6zHij",
  "key10": "2csTWUHd7AYv92k3mb9z5BJX8TvSgMYw8DAasjPNwXakm7hcfkNAh37wmQicSDWmRRzMEe5TS5hmqKfxseR43N28",
  "key11": "2ickbTFinUxiG3sMPkUQNCFyMA4njM5npPv8TVuK4mJqig8mS7k6gZojgqxrCVvymykCBGPBH4bicq8MphGNfCf5",
  "key12": "2pr24YSJ8KJPAtri8UKZpASVmz9NnWm6ADVobkkAXnatzBC3v7xZhSto5MnZo9E27mJsbdeuNiUpxJNxNXCbg2P8",
  "key13": "4GSEYiyxghqU7R1qpUvjLLihAcJyYtZwAyiisk4J8AnAzMrs27bUcWv63bP8KNVRbC66XvjsddECeFu2EBqGvyMb",
  "key14": "FSNQsZ52tMvemDGSkLdBWFaSsT85VHiEDQSmr5Ru4D29s6cf9fxTTqBEPUVyjAs2C1ypcgQbKFM9xgKrhHuknrB",
  "key15": "63jfu67HFpo67tLm85Va3MA6E41HU3AeNeSqk2zpCTp6Wg64o6LfkHhYLVye3efw2pm8Yx4yDFAt2BpDvmg4gEiv",
  "key16": "5sZgMJKivuA4w64oNpnqTCYcTWPETcg2JYcPW1VUYn1kooFC6zxAMBhHX17QpdXNifBzRYFn6uoXNSjhrQTbNveZ",
  "key17": "2k2sEPRerUiWRGMT8UMY4sJRRcNHYL8cv2SqJdWxuwfGCoUp35CM3hh6PLi34Cze8jCsoRoakZhGRrqqo9DAF5hp",
  "key18": "5pb41mJxSx12LG6EEKj8NoBnHrsziVNVczJwNkWB5LFP8YTKWYNSMgkojKmdmpBzV3fzBrp1y4owKyNqBVhZwHZa",
  "key19": "3YA6a5pYDMyicDZXmMbiHTKQY9PVneyUJKqPCBwGZ5Hwh2eh4DycGbM5Y4KkBKpDzbxa2HDcvxXres9hKJdARYux",
  "key20": "4kBATsLJhKA5RMY6YqMD9Q9swAdTf4s8fxDjwWGjYMse4dKdyuAf8XSRjPsHdGpkB8ELKB4sEUq7RVcu5JfuHhdC",
  "key21": "4SikFNiqY6jZ1AkKUxHFVKpVtt8HGnWT1AsVxxjY9zhV6b3Ato1W5b7WPW2ZDw4SFcvzcj1wZCzupxxzAK2nYbeY",
  "key22": "H36kjRZ8QHu1vPZpFDz81HM7n1RAmSyrCqCbkPHNnBCyYTTZ8DatKQTQ8USG65kvyaKAYg28skRyU617xUBY3WG",
  "key23": "3Uacotmj5USxf36epFTHgd8hud73JAGExysqndPZp7faf5uhdjQ98JerdQWtcp6YigD92x2KLpjE1GMXKVcHWRX7",
  "key24": "62BpxHuvR7JRDVaoTqqrMFaDyHj9jnmZ9BsthuvCXUw7hdQNHHvTYLJ7KB2RNBDda83Db1iELjfhaSCZThPp1gZr",
  "key25": "4LRxrN2yVj667mtxzuph1fTYvtg78EWLA1YdoXTS4to5ocQoTTYNQpBFtdheaRW7NgzNHhzgRuFuauigK7BSrsDX",
  "key26": "4ub9kN4gwE93n52kP71ecn7stcfhUFVFXYNsdGgZ2fmf7sfX1paDfpYi3xdazQ9jPSznM6NLLK7vuJwKuwvCNKxL",
  "key27": "3aoFKYcfZMUPjeCfPtHnYGCS9iLDsNP4KrbGosrZ1K8uMbxWuefgFsBFz1XroPwvTzP4WGEYW591kHWiUaubBYaT",
  "key28": "2WhHpgjra9sUQuSkgjsetGjb5Gkm5dPYejrrKgoCrvVbbZfeu36ZEFimTLcRkkUcbE3aTbaBKFnhAQY1pujqbY7j",
  "key29": "281wbAxac5uX8vSPvx4uetiGVzvo1n8eKxzGnzXN3Nx9HWRbe1YtaCUZH4pHUu3G4snAnZMhcrFZRw83hvZ28Gi4",
  "key30": "sVS6eFKtTMPhoU4bCpxbzEwdo5p89Qw8xet5jAMBD7N2ARdSZZWwq1pSjPjBd42SPvVbMf3uWR6rytTsns7CX4V",
  "key31": "UtueVPFLsZ7Qp1rWE9MaRkGgGSGZtZFEto1WFygTtQWgs6VP2aLW5pVusC2t2FGJTmr7DzyMihZVe8bZc8aTZjT",
  "key32": "c2tLjEFWHXawrWX3uhoEdxE5ZjiD8RhmDXx6oZKoyUY6pzCBJnvoAfuvcTV2PtFV6zDfKjrpPrm9XVpFi4iBP8j",
  "key33": "5FrZh3DmvYMfLXsy2oF7BheEJ5SJk1rxDyrkANX4hx7NDANRfKCD3RX44tCMxS9rzrweurCd4YyH5DMShTEr6Djz"
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
