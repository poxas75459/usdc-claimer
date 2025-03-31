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
    "5E1vkBEYnUFNuZxSNBdtnJRa4rnqVd3iUpbj5V4FU9hBi4GREAefzoMqE3KeQeZoaRkipouhnbn2edYhPjVNtDbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ESgnVYiZxXWFj8577GYg73VXcuVnGTgZx9bmBRjPHMx1ivGf1aDTmkUBkt1zzn2H9fYUmLb1DR64ZA79uicTyj6",
  "key1": "4PVznMCq2hZasCJLzESUtkrTAsHRXPudZMXTdrFHx7kf4fB3HNpQAFDSGk7vAkgwT1MZ6Ye5VhkPLUDRBr5FtJSf",
  "key2": "2GXkN5sVp7qGFjH8TsWFA4APvKLKHcmmwtgKWMeXcTtveTp97t1Worw4hzD9A4icX7KWg5cDN3BHt8BoxwTxTnUm",
  "key3": "dYt1Qc8N33rcMxvLJQnejWwKfqBSBvcTByMGZf66ZNriWkbascRdQYb3af9EBQCyBDx6vJDWa8DqqFdvsGYtNLf",
  "key4": "F7TXrzvgBVSxE1rx6ATsHnvYbusYBhNQRLTVz4sZMXDcmARAhBq6DcMzAqYeZ4YuqaD58RVJpE7KJQdAZyDAhZ3",
  "key5": "5iw5TugZaDhx1rZ8WAue8pEBC3HaJCzf3CLESufLN1fTZr4sxtWP7Lk4m1LanBZzRXviDzRQ6y87BRLApWPa4n5N",
  "key6": "5xn4rrFWQfbUyH5ZsXuiQW35zqNtEwC7aX1ApLhwKE1zZ7wtM4UVV3mVaLbRPmYTmYsyGtMayDudDEEMrHkjMmM5",
  "key7": "EKQQGcHeNJW7UN6hhB1cWHqt2RioYffu1KRikL5jvErYxhq9Kzs9cFLpYYMB5FTghEFA4ohywd3dUxTk8YvdfaZ",
  "key8": "5U43FawUiJfD4LukaYE7E61tfThAFyVPC5HZcRxCHyWGdH686bdDQoqmV4UQQb69Wbe2EMivAm9r7RZydyS3vC5H",
  "key9": "4cVVW6PxXveJ5BAKdAHBsvdJ6Td3SLZe2oUrphiYtgtSpXC1Px7i3EbcfyXbSVYGX1yzhZvsuw4nBMgs7Dcnjhbj",
  "key10": "2aTGDTQjrnWrHeRAEZX42tSYpbgfo2SaNAznq1rtnMqVefqS4hLAijYRazaBxKbCp3qpvZZk67reX7rJ7TcoYePw",
  "key11": "4qZ1879EmfzdfxfBh3Mx8xXsJanHWrHzgUVsqJfc1RMe5WiM8EoZsvag8j9K7vDZqMQTsyQFcdAPiKMjZBxWRDDr",
  "key12": "5hBp8gvDzwhbaAgWhSTpkygwoSQHVdwPPJuesiyYfouUfpkVJgGYEEn86tjsytBjaKHagpU1sqPGEDktkMfTT7Uh",
  "key13": "4ExqvZwBXNnZAUBqUC4EKQsuYL1kUFxsdXuFWNzF6RuEW7qfRc7SuE6WzAday4q83Q6xgkxGVvHP1qnFgYToDDeG",
  "key14": "3UN6R4as9hbTqYKag91FNjACU7E7gnR3c8uhhhLNL5euDsnvYYW2CSnDiWjasoMo3TJ3Xrq2QHpL34piThUZR7hY",
  "key15": "2xqSnLFUsFVvfYAJNZzqo4HVYyuq7G2NMG17CXVXVibE1XKycBJxyBeUuMpByYx3GLAb4BYcMdM7HAZ3F2M8maLd",
  "key16": "GrS8dwyXv1ZNujxhMeZBUTC6rBjkBdqdrHfW87LZNHqSioZRdyp7Ko3PVxS9Df9xnCXmF4Q96gKt5gPEhQknuAt",
  "key17": "43TbMzV8qrt6kWYipMX1C2oSwwd3B33zmgbHbMGbwLy7x31mCq6PtNZH5SSME13BDYgH3yjFReCuzxUHVMFswvS9",
  "key18": "2QDD8Dw29bVpyQiepiDKbijgFHN3RLkhudoPuDMsoieVQ7yZpKQwcKLz2MBDfdQa8iH9Te8QB9CVn6grTKVjzqTe",
  "key19": "ERTREZjqx3abuaaQTqmdHDSCLy6PvfHR1Zz9BdqV3FrniCseSXFdwcjVAVeonQjoRSqMHokHmQz6f6xXcZcfMCo",
  "key20": "3uD4LddTpVVTu3ejNe1bh3WTGFbXFcUU9g9UFgu1A9q75BiUrns2HBGrtGWQ9XtsgFG85mTDrCK9fMTavrZE1kC6",
  "key21": "4zbhgSSSxsNKUNCE75xMWNc31LmfEqwu8tC1FxPWkuK3XBNSQcN8RV6QvDPNDGd7i7mM98FRgGbAGNtPkcLsE4Jz",
  "key22": "4JDa1Grf78L2bVi6AsVAHjE3WsDZWKcSv8s5uGdYHp5Q6R49G3BWLx1CdxhXYD3Fb93pggP12mbZ9o3ZyHSvQDR8",
  "key23": "4dqwmHMTGwoCXWv9uGa4niucBPbSYoP6qRuPJzmxTJ9p5QhYKumGsYSoaEtjYF9SZcdYHiJZ6TPUxKQRYKrNFpB6",
  "key24": "5nh7f4EFXoNoRApSt3ht8HX8XiCvN8XT7WjZ6K3LgNxshv9kuUr1d8HjGRcUuPCtA8JbvZBrvfWXtv51erWvCoGt",
  "key25": "4EfqoJQnzFHo6BJDyFJbytn9aUXH1Dv9N1ieBUSoMAatFyD24XNhMeqQJVi79NAQU5NrD9NRohgH9LCqzvpNwAfU",
  "key26": "5CjZ7aDKMRoeV5KkTmtfHZS6JirRY6qniATNqHwu7w1T5SBHkbG3GcdfG5pspxV44r9d9z6GTfQ52ssavJ5yRvsQ",
  "key27": "3fkSoH7xggBNnDeAyUDzRzkiwroYVEM5JwnGUbCFmgBSdTQUVfQzY1V44qrFQ1biu9a9mxQBcQXnQDVdy2oCmqyG",
  "key28": "5jVvQTPPghiGHaSWdDcEtB282yfF9U3kieXyStLerym2pVHB66MtrH7Zj1XB5W3nCvaz7iJextHM7b1tK3yzQsya",
  "key29": "2w93wtW6ah89sfN2ydG66TqMkT95TGWYGAAWebQX8gzGLTVFSJc2CyBC1RXHDhXBgLGymAUymJ7zQXVGn18YHY4b",
  "key30": "5SgnnRtrG1wxhsruFQNhekQ59pwMVJuJpiBXXiUrExjH3ouXrML8PuyToeM6jU9BPSn3gAYWEWWBJ6n36Ed1SCJK",
  "key31": "56MwePgD5R3ZEEbTvu215VmLaGa8hiJZXzoCVvjhaTpvXdDfxyueRqBh8fW8MvXJidT7ChU6N918sZAxSK5v3L71",
  "key32": "E2uEDFsXipC6vyBXC1L2RFoErt2CZdfjzo8jXiistPtYXyPDD7XVBWj5bWYNxfM8CP2xEAxr84qwVSi3u6bfuec",
  "key33": "3WVeH5vtNoPP6WNweWD9jHbFiVJFtT1DZ52EA319mb5RCGp7WnkByy8d7sBNQAH71bm7pqNybGxnSEqqT4SSiDzU",
  "key34": "59DxjiKasyiqRgvPD365zzLjdKnSz9sSVfAYZaP21U28tUw3uxFhTn7CfNt7NmDyVWtwNJ5oWtsp36yWra3sqWXa",
  "key35": "soc4Xr5dbD5xtc1GKiDwJ9QyMguTB6koX1D27hNDMhvLWArX1Srnctoir3UpXjXyTK8E1oHKAtEK8gyJqC7ESwd",
  "key36": "33SrWs5SJj7NCJfXXmX9ADA7Q19RNRhYT6EKK6RBfDedwgH3WRTTe1gxM9FWgheZbMaAM6VFgLQzTDKpSJomKX8D",
  "key37": "WohAuZGkM9YFvcyD6FjJWT9kwXchhmGMomfoHKB9DjZWTLLprKZmH8AtNM3YBkYLjs8483M631bf2jMJNx4WaB9",
  "key38": "7wBxNZsn2j2SVASqnKCZHwv8KkRChjqzEUjbHB3s1qLTwnNsPSWLFHuvS798TdUUUjJyDNMubpAhmyitynojPtr",
  "key39": "4XDJ4a8idJzhGKU4Spo2cKD4VmN5MUEezy9DsHwqakPphar2VKgfB76JzjU5nY6ZiDAN6yVZ789YxmAGeCQE4J7Y",
  "key40": "3n3QdhgGuXgUkpWSzpRF3SbvVfCnbiJi7x7SpEm2D6M8SL868CBc6JH4jKsPAGDRgLUxQnjKjKVDQco8C8FufPAc",
  "key41": "4kRcxS81sjrvfiWXTemchQsCo9KAWdnh7ZrFRuqBqVzdHykbS3vckinKFQf7aphFgs2afZoFhpX5zff1YgD7pVvD",
  "key42": "fXZLvskys1kGpr7aWk9rmfUMHNVcpanGwaidVpv3YccxW8Khv73XDjbbiCWHF4YgwuF6xDHXc21a1DWwn4f7nnH",
  "key43": "4TmWckjznAtRstGWrPhxdYpYnt7eYLwjCU7etiSyJ22mVoaE67y7dUHKHcDRPofmE4CfhaCdiCfBNpJjGDrqkSbr",
  "key44": "4wDgUQFzC8EBwEiLctVX2Gogib6kjbDr6kxwCtj5zLu71AmqH7aQ89EgbByAozApapt4QetLBpu3GegidqgREn3A"
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
