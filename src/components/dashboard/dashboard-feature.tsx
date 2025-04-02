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
    "5bJWoC1fyvzMPm21cXT1eDS9qJL2EmUmuzdnh8hTE8nARLJmHuwa9G7M29duAU6NYYrTDBcYggyjMUW8iQZL1ngG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jc6h9QZHJDacmHwf88o3TMqRrmC5LkRBAQsZtkHx9YaBz3butuLyaquo7Vvz1wcNXUnFxo1SUcqT5SyuKDFgdme",
  "key1": "7NDKp7rCjpTGapusSLgku2FxjD89VqCZ6aY9iBCewbMFRdQo1yCXaDAQCiqsPqQARvpLKnxaXgSmuBfiKKi1DXP",
  "key2": "3SVhQ9WMs7Tp89YWrGcDFAnUMoRiTYHr3vtDEQJTouCNabHHLmPsr6cBk7ydBGK3Q3L6upuDbYgvnqBF6sgDjbJE",
  "key3": "2KfFhCf5oYvbfHM7GVbzF6n2DCUKrksW7nWaeSqrDJyBZvMhvTLVjSsoW95UZnPPcqvVhxocAuCMpLc7UGtN6JjV",
  "key4": "31EuQDKJj7UtezavZK4BoWnDi4Dq7U4E7XD2BX3fThCoFxb8Jeu1546zrCCkCp27F5DX5rEucSBv1QJY2nNyPvHb",
  "key5": "67VnqZcsFeg29uVa8HoN8tEw8zjtq9jdtkKvjSdAyP6C6d9BRXPgbo4g2bMFE7Wcybwpuc97mFreJXMnPifTRApN",
  "key6": "5b9cGuwU4TX6mwHYYWNRD3hajze45ZzaGp7Pm9zsaWMFpZuwhRVH21G7bvG87BFnmQBCqCjiNtTbJWcxFAUXCo4G",
  "key7": "4q9vScvtV9dMPoT4FuuCwPg57KPTQomzxC5rbkg9fbaXRQodyHdD4qKZnjFpM5GzwUgKN4oF4T1G9V6y8V8TMSi5",
  "key8": "5BXg69YULgpSrY22uNWxc6BxrbyhpuupgQQx8KPhmcdBeAD5fPgpCYVryZZr9Qo9LFDw6av3Sh2vqtbzJNiNJHBK",
  "key9": "sqvMVDwDeCSCgJ7y8k9shwGHCaMMUTDqJign1M4BLoXEvVuVv9zWF6zMM57MXJNuF1KJ525zshEGseeuXDdyykP",
  "key10": "FuE9LMuG8FXe9QTv13sxJoe1vUmMtSWpxkGHkuPU3K8WedfWPtj6NRpL1KSa5Pom614MPemXMTxzYVLz7N9iopP",
  "key11": "5MJhHTSmLGT3DYngCznPd2LUeLifR6V3dpbmKm6TJnxu9nvawrBNx6VoTXrKiY2qc1xVvGm6ps3QMyMgyykqv7zV",
  "key12": "2Xq8m4j5KdUjBFL6278FDVYzDz68z4y3zPkqxDSP1u4s47j4wFZoDFXKxaeWpQNGkhEEZNkRQ92mMTNTQ6zNvH2G",
  "key13": "4ncb6Ceb8sR9ceRKVR8t6PJonCRFNRiFs4dU38t61Exkxu4i1Kytegwv6C6Se4cqhXWgu2kApQWouzKQELD2EXtb",
  "key14": "bi75B3yZCMDUw1qm86VP3JGpqz1JPUTpKPNyUKzijQL7CTCX4Rd9pjCz8E2K86yjbgSgC8YxjxJxstZvqYXmrdg",
  "key15": "4L5KfJ7exh946o3Jjr7G8TSmQ8HAxbFSepZn59V565tkxLTBG8GkvBrGEEWsxbNR4qQGmyP6S5cSkwdJhTSRhn2c",
  "key16": "4wXZev4QfLyHLsaDDRyCUghupYP18hAfkkdt7NPcecvAdmcReNX6sB2wG1fGomDjW5UwBxgQMJrJtrJcXHEQb1JR",
  "key17": "4E1MF7ZfHrdm7eiVbys47cZkce2N8dVxr8zYMxkC72VAEF5QaMAfbciXZJMxuuobMkp1mRvBjt4FpzgCU8f5ugPM",
  "key18": "32kznEc3iXZUWYVt9vCjHkU3BRriyt9apwh5hTJ5LXZ3hZ1Shte7dQ24EWT4apHpY8cTZ444QDsuXfMS3vsunrbb",
  "key19": "UeHTHko3Vh6R6wWYcuhLRLafuT9zex4icDkYW1qvV4Anf9Wm9Sy1TFSnHT6mtDm5EUESkfE8X46FqpZMrDuCEfU",
  "key20": "44UfWcCKEvkC6ijTXjmwkAP8fazUi9d4j3DtmE8j9fPV4DJXVLCrEM1j1vf36Q8oSYYKxE799p1K5fMiH13kjPEp",
  "key21": "xGbMyK3VMYHQWKVzt6pujZ4J9Nbq8wKR6Fex4Fv7RA7QpGKKcXiy8ALf22Sxmoe8U94CyhUEAAJZz2MuPVo8tMQ",
  "key22": "9qvBv8dvS2P8YpCXNzxFV31Hejau2oyjzkLU72hWNjd4xN2KthYvwvoSvWhck7PUi8pz28MmNSDxsPg7jnUW3gR",
  "key23": "3V6gQT24PpygbwKjr2wovxqcP4Z7kBkV52uPamrueuZUtQU7ef1joFddJW6G6w1CKaqrr5YFx1UU9X2595b4chAC",
  "key24": "4CxCeLCwhspCUCopa78esM6faiAhdp1jW167wUm3scn7ujHeaLj5D2faRHmWM2ECqzzM8vyxTpkBLgoeVpJq5utM",
  "key25": "5hAwqoLK8YHw2jpp3kYYsm6UoGQ7aAvpinLkzTNGf6mDuzPqq7FfSZ8rwtXZUhZiX1fQeneKwJjEuv7CiUfsHwP4",
  "key26": "59pzuZSwhxR1bR5RtdzvbQpJZb4WqT5MX5mmpUaukyhj8QvYYPafafjytcJKdjkqcEncMfXBPNvRW7LZDmkRnEMp",
  "key27": "3AVkybJEpFMgaCEiaaxsMDeLcSVPArzuiaYsphxPnFJPvuGpc4djEqVp5ga8YSqzWQHDLqh3UsbX6k328j78WEjE",
  "key28": "6327Gb1C2AoJ5ZUsLX5SUx7KL16w2eJmYBy9G3nk6cnZC7vpUVj1Jcy9vWUNwZQjCYub5VqZowPYCeWCDAhR27e1",
  "key29": "LGDCjHaCaUr1wYfPHBon7TjV2cvEAj6EX1pxqhFguSuKWPRx2Q6wkVsxavRS4PfPitd2Scf3UKCZ4CoSGFTuBQn",
  "key30": "2VaiqNcz7Ffub9VZiPmzU4pXZqRpVUxGxGwJvU3h5m9XmtoffD47N9AVeKnxCZRwEPD6EqMCmBhcJQscVDNTAk6B"
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
