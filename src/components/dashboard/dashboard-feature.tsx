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
    "3he4raQkcwQcA3QdTeJN82z5hMKZR2tT55TLuvt2oEKFvQmHHK3EHRNUDZLzx4beAi3hoaubCq43fvmqFXURSxYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nd3kFR5syqJE2NKRNTQ5RXZEwDyKCjHMK7Wb16nusHN9GcQG8nYA4828GCWWid7tUW2yne5rNisxdyE1GK3av5t",
  "key1": "r5PczMKWVzh6Wz5QBd5Bu2bKDcMCcXu95nhpbCkJvUQ2vka6LjQHAzukK5vB2SDpRmVrMzRJT5fa1BQrVybZ1iK",
  "key2": "jT3RRaMoanB9WLEj3swPmWEKQD9zKTYJYh3Wh8qG2ijzEpSJY4nbF9cKfTMJZDpeGHCC6zyHGRHKzFGySaX2yXC",
  "key3": "2oWKwcXdzES37fPHYhWxrmoUef8NbqDymep7G87Aq7ipGVDyatJTfeRnQzLrUGuyVbtKKqroxC1hkodacBuvHBd4",
  "key4": "2eamuXyLkgGXjZWpVgHgvEsgmAHLQHBEfqpWtXz4jcZZhFMPLRoFq8wCvU9aLEPUCPkePRC83vxwGqiFJZXKwdC7",
  "key5": "2cNfhhcVsMEmJJieam4DkggmN76iEWL6nyQuBvVch7uSRo153rxTMBsaybWEzpdLJVaVEECGexDPZTGB5EUdJs8",
  "key6": "2bH1BxFB6MTtXUuDfRtVcBygdRzMansn5mFaMX9BF6H5FnLRw9fptXKvXkoJHk9o4GnmTyzPGgjoLYwEySzrnjUP",
  "key7": "2ujUApNMjwdnBKsc7ZyGsP7zYSAYqZHFJJPoj8DZb3r8ywPCsMuCGoYuVernSmXFECt3cJEgAPJnAJSyZs177P2E",
  "key8": "5PgGEUUUrdM12GxMF7byQ5Pz5ufRtQLKwbqJnnR5RQkCHEQ7yfzukqjcgzAk5GjQKzujZihV7rPHvzr7fFZA7oxn",
  "key9": "Y8BhkL1ZQYSQ8CbaZgPKT56sUWtV95THfuZALQ2JjwmjZyT6JeHRtmG55wjzKMJBTNyT8ghSRpJUDCjrJ4Ji8JR",
  "key10": "2pp4ePcvjNeV3TMn6oTgHSeWbBXiMyAvuwxwyKLrgJPX12cKZ3K6V5MCdQHXctZEaR4QXkci2ixF1KpDLjCE8KFN",
  "key11": "4JhgEP7Qix8VE97Pa4Yb8oaFHdcGGajRjYLoyHP3pnkkPb19Qx1VqZ9nPMU7hUGBXNY2m29RqrZCY9Xpin2zsTrQ",
  "key12": "t6STvpME5J5E1mtN6i2jxwmranpecSk98a2cqU2mPMGfae43oseyvC56uj82beP7hGnnzSxwCfzdaPyYpqegbNT",
  "key13": "2Q9bXCwJv87V7BphVH7PxBsz28t945yNntHfR3PoccyzCQrw5CM6T3Z9JcsfzsLeNcfCzQygWYar9B2LzVHkoTCb",
  "key14": "4n8kzUfgzbYcrAHqJpc6Rk9m3PQreip7uKoBvH1HyXqVScaLGwLPdPMqqDdWym9iq3HDcHjQurSJGbYmvyVp8S5L",
  "key15": "79KUTnoJJ7NaHwvMQdY4DQYFYDeHWWhhkowVt1bQqc9VXkP8DXVQf2SQ6WJgKAVsJisGADfPr7poneEF6kW8xVH",
  "key16": "34NFkumvKDxTHornn1r4uwDQMtGNspCGENba15t8oCaGMKEK9DuxbqPtA9VE2HUyVM2WuMdhv7ek1FMjm26rxXjE",
  "key17": "4skCcLy6QYCuwDtsWo5MnafSpieDaJSpZ99jVavzpwD9RtAUtRKaev7qKiKCwxzEkjZnhhSq9UzVB4LdCuAU4BxW",
  "key18": "MSsvZdngPXS8aqY1dssXUV8yVXsfWV69CLRyWCDCQ5T8UwkuE85nZiGtZCZVky8qNUaqKoe7kMryBcj3UEgBst1",
  "key19": "UKLn6NGnycAgWiRXW6Wr4YbD1WuTar2tu955QSFpuRhVmVXFR2cbrMS2YSavkpkzDcYoBbfh3Yguqg6S4fx5P78",
  "key20": "2TjBut4ZaR2j7mbMFUryKigfCVWUPgbHo4GKm4MHupsmXPzKNawHsDHuepYztHiNVFZij4uNeQyXGtpjgEnGga6F",
  "key21": "KV4rvnxwi8KQ7tPspwzvxVGGouEZTUtJyN5x6hwXMQPB741tK3Di4R8tAkKRMSSyEMSKBknB8tHUkKkpiwzzN9n",
  "key22": "iKsCgfuAsGRwXaEb6MYhWnNzHKoZ4TheU83XHQVsRpNM4Z345EsHf3Q65K4tu7Lkqz1pdueU5enh5f8bwdViTa2",
  "key23": "4UfbNNcvGQwPKj3KeWkC6UCW5YTJi8r9SdLa12vKKpaZvqUMnhHZ2D1t16EWeaSZQmvekhGwPcaUfZPwJqtU5kQc",
  "key24": "3VdtnVw8q9J7Pg7WngcXBJcgAwrnWFz8RpMaMt1dv7gtPxz4Ye8K7mwZYba8a5Z7SVswVopPjZaBkWXyqQGsVCt5",
  "key25": "W9RDWZACabHTMfM8wwSYzH29YqU63WHazVGR7NURk6M6Tk9nrPNWra6fRjbCP7LEsuZgtafAk9mCGYhpeNFYbdk",
  "key26": "5q8KhzGcG4qMuBahp3zVeZStrjFyLDuJMgqQnSaiynsSVdv7YTWwxxHa5ew5Qk4Kr2NAxZc77eGXJchR3DYmWvWv",
  "key27": "5BZr2omm4KkXdqHqt9kRBwzTfTcc9oksfwmeCk9wnib9YK2DoFZFA2RptJQ58ZAhHiwt7fgLzs3hzE8gWzguG3GA",
  "key28": "58AogzWn39ZdtTryqq8cCFuA8ZA9aij1Ppv52x9ydJWLxeCG6FD8qoMSfi5F4LZikBgp1bQpZJXJXVho8ZNrPi7R",
  "key29": "3atvdyBVNW2KcdZDbkx42hudtZexbErGPmJ3LoZ4tLPnsEogHZ1pfqD7mg3TfASepqFZXNNAj79sNw9ZJH4ZPEPi",
  "key30": "3fDA3T8Yc6uHeKYcF1JAN2EwH5gTViF81smzRaHUae5rsjXE2bTvd2xZx7JCPKk6TBxugLFPtJM48Gzo9urcQeLZ",
  "key31": "5ownhcvkkCnsoUpAyMu18bTkGiv5K4DfkeggxurydUJWcFRUYrqu2qtZ323WpZBTdCm9fum39k8vLzauLxWZ6M1U",
  "key32": "3XYy1c7iH22AKGBwcxy5rrFsNqJUxnYL3M95gLwa7EvDvL8ocEngdXFdRSWRDqR4riZp3c1Yz11xznTsn8FkceeG",
  "key33": "55pKWGMDwz3CJqBtxafeh6FJKgzMLb7s8xhDrv1v6RyvUrn4uhxDSjhRZN7N5qioJU5Z6U1yDbBPtC2L7ShuqiEB",
  "key34": "3x7kUHjuE33mENPVyvjgcrFiRBwEMD6gKHJjMbCSQ7EWWxyKEfQ9GtKv8Yb9Sosj9UC4ViKUn7Yn2h7L6ceTzqbZ",
  "key35": "3WCQpzDrLigHJxQc8V11iMrBkjVN5oh7SaboWHicAfiWV8t5PxxncDEBYuPzoZ5uHJFDkRNs5zmEnQCvdHXikHGQ",
  "key36": "Ze6pa3mVagtK59MDpzFMTcFQ4CBe7UxKY9BTgAnKzd4dErJCjrMaQiHyE1UvhbCgTjmj2S6kLjKUwuNihm8kBgu"
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
