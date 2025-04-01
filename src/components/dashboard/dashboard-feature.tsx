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
    "DuF4fgbMJJbZJoSPXS5rtFdubnH7y99UZCRRj8bGscg3THKkCVrsAM7AtiHCJZwtVswVqdEkpKvmhSAWpm98J5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qrS7K43PGwQUXoxCKDrWgG17wpAurN5ddpuYMYoWhtYesYF7LcBgQmZpyzufmngRmRoSLK31d57KYVjqHWEzH1J",
  "key1": "3CmjQXCpNwV2yU19oh4TCA3YBB9LpYp2ZZ3qi9qxcTgoVypxuwvM1TDH4yuJUDujNjARG94ZqCT7EkQVMe79benL",
  "key2": "4pxHVdWogKUWoZewmPN8a7uMoSBmf2LCyDcXK3RFPJN3VZWof3yc28Yb1nRHsJcdCkg9kTRGWZC86c8gKB1aogYf",
  "key3": "2LUC1duz35mimiJBdCcaVzRdRoophyrZv9onNjoRvZbx6FM7LevvSbBm8GpQ92EA2hZbyYeTDwBCX1KnpUqaJkQ4",
  "key4": "TzkEW2pfMYQNuHG24GKCET79pRVpWdTnejhoMQjT36Q2LGErEkFdGEMyxSs45YyD3KFZ7iPdNp13xAFAhbtvfng",
  "key5": "3LW1YAa86tBs3tpaqyuZHgsEpLDvgGaBuc4vgJWrox2Leaxt4YaGawxjooreYmPZHHqA8Q7EhFvYPespRYMopu2e",
  "key6": "67HySNrqHhRTZ8KMQLgxDwF71Y3PwFb486MvoKeoGXntDVzCJ518p5oEkb5w9zRQymV9pr9f3Ski1fUNeiLowByJ",
  "key7": "3kE7xSQDXVjNTTsKgrwBk9WgSJ8FKrvJUwytpPLpdSLgS7MwThBUXw5ekgPkXpSu4JFAK1nN9AQErxzaMkeTw3jq",
  "key8": "2m6VVN5u3K4Fis2kX47DC85usby6y9zynzXmiaEsGH6cvf9kTj6joPS9XufWa43HNwNTXfds9HWWsM3DaHPtq9qH",
  "key9": "2wGkcR23xJwFhqBJAytryTUwGWcLUSq4o1JcDJ8xb3Uu6tAKdT8CdKEMC1XJ9qMif8LevbZ4z6WBScmenmrVDKLk",
  "key10": "4qfjz1W2H9g373K9evgbUsSmGUVxcMLXDpK7Q7vmbtqakguat1KUqWKqYnTLfqCY7ZVvExgV3gTiUUmmVJGE7Gnu",
  "key11": "31QsiisdUs7kXDSquCjteS3BueP13qvdxgyKQWSEf9vX33oyD841uVMSuWVjUsQDFrwN7UGKhz73rfb76S4Afjyi",
  "key12": "Gp9BQZg1Z2acfe1jZJwfeEsWUMfnC16Hzm28J5JbJsmHEjtBJfPRDNTfo1yeyWkGDL3YiEtZ3XEbfF6fthvboNM",
  "key13": "2T5Ma3iFoRokkL1aMu5HYQNpumNSrhFiE7DUWhtKZnsnZmZMxSovhtVyWZoXA3gm9PdPL4Zjug7YMdGavcpRVa5z",
  "key14": "2Hrd1nSjVXWfLKu2qzrN7Diy6QkJfQmsz5ricHgZKhw94GGz9i7z5a5YTabC9vgGUSCU2tWMwSqgGmpeAZTbDngP",
  "key15": "2EjD2wbVPP27vC2XntV578f2sv8geis6JsnNLYnMZ8Ljr6NoXTJz4U16pPxFdtiw3HoyoSmvU5DJYgPWJ3nULETL",
  "key16": "mheX6mLCjc4YDwixA7oue4Xc4zNdPrrYT2cng4wDNLEeVsBRP1byULPARBXJJXJnq7DkjKKiN8RxwM9gQiq8ZaF",
  "key17": "5gZoUdj7w4SUQcBs6UCSEtgAS7mKAbhK6nUicmbeZSPEBL1CoGfELSrpwf8HjN6Dr8TUCiBVoorbhEh9RwqdemQE",
  "key18": "4Rzx9ZDSJ1eUSNxaXusTyqNdnWNBwn6wn2ZMCbv9TBQsnqaWYZfRBYJtcubnJLy54BjPyvQPBVEk7PiGQfx1W99K",
  "key19": "3PgrCHy24wPm2UYNak7VbSnmxNtrjtgFpCYEvsxpahMP4gwu7xg751A9xfLf1gZ2BTrwokY1recNgnQa2RPMPkeD",
  "key20": "3NEMGvnGny48VdaMXjvG6pzFRxsiuTbohXoZSa9JW67kv3KncXTZTrkyv5QPjE8tg6EN2Fd8narsM2nkLipGJX8S",
  "key21": "7zjFjKRjid7VZ4dTX2WHEAYW8YzSycdASzVZfPvmF8vWV5oKFu6uDk8dFFBUdnZbKmvrFDSx6QQdX92kTV5HvcD",
  "key22": "4DCkKPrHSykDoCmkNsu7bkfNQrGj1EtLwaE1Se7J7rRD1ZdU4roMoC7DunU7aUFZZK4TN3qMWYgYz87ZZJtkdsYe",
  "key23": "4Zkvo21und7PQoua9i2Wq8zhzcisEQNLjaze7v9A2Yk7KYBp7vGYQAYrydkiivti6SD71SSv7S3YfuivzG4F7GTz",
  "key24": "51sQ22jdDRzAbdFGD7inSefBPNieK1DATyiKUz8FDFboDVfS7Ejsmsasrqk7sgCqrLpevAqYK7GJxpKzSD3oXL3n",
  "key25": "3bmEWU5JPkL2vJnFseEbmjmgRPTF7RB3vL1C4MiwTPhBqvzp2bjZQFzvLGZuFMQGPRnzDUTdNG1bFD4jEQZU7LHT",
  "key26": "3hnSf182Zv6GXTnqScoS24bBzxfpWCuJLL648rnU2wr79tk3WBURo7LZ72LEaUP2L7kzH83X3VzbGXSMPuhpuk3R",
  "key27": "4QnB7itb8f7ex9UewcWgtyuaazRmrGz6iCX1kpz4dSXq8NL1MpASTikboDtkhJH6s5HpiWE35kxiuowJX3DWEAJj",
  "key28": "2fMoMcEHKnJH5GNv8gCrESVrbwsX5XjY3tjRmv8eU1pB1Gm1z5NDKEqQ8GYGomdo39c8JCnQVC3ZoN3P6XD2sNLi",
  "key29": "5FixVcJ9zrAR21fERpMe12jJtQxFFcYWKgUjDU3b7nyYj6wdQvUeRwwaC4DVAH1hGLpw5Hm8KkLpJUvuVMn8MQJ4",
  "key30": "4w3vRtUVbvBj9EEJVP5jcDYsbmi4FQdBMEeq3UPMMiCmwZhPMD86bvM2mmJAJmPh5xt8MjSFLV2W5f2ibTBFB9QL",
  "key31": "5Bfn7VdJLSHsw73zZPQz765hYYtrcgMZNDPEDzZKqoMM3vPuRSgXP1Z37C4G4BR4nYJVuj8nFTGTFBkQsENMdZue",
  "key32": "389GMjQWJsVza8zQeqSZEUkex9x5iY2yM8115Z4q4aDZKTRsowTfWwapREEqdi3zHnf3Xwxwr7nE6k6jg8f2cnfD",
  "key33": "w5vWENMqJ4vSUQmrEq7JDjc48LsteGWLSKEMy6yc3NxGnsDcqoPiwgsdjt6Lx5cec2LqbGN6H22GSd2yeMjVpoo"
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
