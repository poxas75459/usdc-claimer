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
    "3qh5qteEBofWQdcSFBLGGy4Awaa4ajJREQcfq6yeoefCppRMbexwLVmhfHLCZPoSWjbTnwvJtUP48UMEZ3kJYpFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JQhRfhWFEbeaEJYpxeY4KeonAxD1f5wNk3zdGVLBLX1BPpS6eitVUZ9EQDbLTB8UkZ6UVrSCQ9RdRJLVriSbGM7",
  "key1": "4kX7kDvNvF7qHF2WbsZrpGyDWbkkcEsoWdnz4fsSUVt1v575P1gJzTne7VrV8SGY2UFsE7GBaiWqSM5yoF36aLjX",
  "key2": "3qJByjRmKKUPzSqAgqpA1wNyAWh4Y1RBXnvzP6hoJC8EwfGVisgLz5PN8sY4TwfVczUQU89VnX3bNCjU6G3U1d93",
  "key3": "65Ccj1gcwXQ2y9bKUgxcgrxMA8HYpacrCUV9MMbiuZmZEJ8gXSmAv8T97NYNgTJxpdMB3LUrntopzVFQnesV5e3J",
  "key4": "xVumvBaDv8TNeSHZpVLV5zWpwNjCGWnRA7d5K2v6Lt8Cij1hq2wiMxL76oX2rwAnMBuFodo5DWkaV3XzG2KwyCW",
  "key5": "3ig4h2YcY9AHJmmsxu6x8L66qQTaEEjV4HB9mXU2gXKtVckqN8GvepmogpPWYiws9NtRqGLRF1VkNLze9D2BaoG2",
  "key6": "bG8mZdJo3attygFwHvagkQQwQMwfEtndLT8hmMM3yDBP8jXRDrZ2Hj87Bz2VyDid9Wc1QEZrbk1B7cnRCjGKneN",
  "key7": "5dH3XPu7Xbdw88xaWD61WkLq7dQDEhvKa8szWfxg9fLeWJzMjTSyYcGBM2BYcgQKNCf8NieZh1iYHJrf6e3KqYED",
  "key8": "2acFhQ65U6jseJisCGPkJPpXFKd2aecM4Remn6HkcnAhxHLpdnzLr9TqTud4ThFdSGR1ydX2Rsw1xa28ujNG49Ht",
  "key9": "2k6cSBcEaRtT1PcQf5cdL1UF44Ww7Gzb1UPLZCmqYweRVYufRpVAUjpHV6XC3r8uuwgD4iknC68aCZwTvFMxQVLH",
  "key10": "h3nt7T2ctDnVXDVectrBjPkntmvoUvQABcejtCa1K3R3J5PSvMZJY95YNaNb9s61xKU7e6921UtpcRrhLfVbkXd",
  "key11": "3H3xGzCSDYrGEwWuf6iyim3fUqLCCTq8bRegDULpt5u6p3AdmQtSnpB5JU86L5iVE2tKLpQw71tdX7caoifuUnNN",
  "key12": "itJ8iZQzHZ6uQGfTNqioXnwG1bCgBbhsASS36QC3j2A9rLyzHEoMwAtNb5qhZF1QUn2KPTYeBLdaDp6mf6G4het",
  "key13": "31ewEVi6DLkdRKobZPerRRwXVdkW5Tv6X9pAh2kBrrok1wTi1cH3yzQVUh4nofCXu2FSETyyb23q7AbxNZrT23Kv",
  "key14": "2Ht5krXbYmWRoPREN3ULGYhYsY5xrqLiDyvLr9i3WvPUk86MkPDo2RMq1J2VNfKxqjHe1BK1PaizZVuQ8tqBz49a",
  "key15": "2nxtqNLTxyu2EZ1t9keAzgdKy4qjhxr5HrikwWrgdW6Ev8zTtd8pSwaMZ1qmHkrR24GJscK48jxQFqiAUnaL1ZWc",
  "key16": "4JkU8EW72rkoKjV1wSxBjFXgL1M5RE1XY5jyhF8HcbDeWBknkCjhfs7kkBi36BT9tEFyya489jTYaDrf8vJ9Xkgz",
  "key17": "2qcRz5yyKhGpvFgMmaJJ7rxSC9nYAaboVc6HgBMyKwG2v2bVvzMQ4eEi22zibdnyKDZEybJYzPoqhFHm6VNEz3rX",
  "key18": "3LqmCr4coqssC4rjkrcBTnotrHZ8QQUfkBdv3FaVehR4CzVruKhFhNGBwyFn1LmnxPh6Jmpt8svLRqyp1dLSXshs",
  "key19": "27Mz4Z6F85dCBZH42EDuoQVR1M1CJH36vpAU1QW9M4ZwKxbjozX4McMTB3FenuauDVTR4fF6t4Z3kHzamfPktEtC",
  "key20": "2VNKQL1famWkspikAt1TQTDRcKj35XiZkmmDAKMAYu1YPyRyKPp8tFVSnqSQQ6z4bmdYsuQ6PtQG873aGEd7mQvo",
  "key21": "ABWCmykhuXCDRBwf1p8c4w1ccJarog1WuVuFXgaAGpzaVQAeYnqYzDqPXmpk3XuzVADzkdKoVWQEsLwTcWpTDbH",
  "key22": "3ca5rjB9M6LoekLngPV8tSX9kHMzk1zM3APXer11uXck4X6QvhufTam4g71uJP2brt3JjDaE229Aj1kQ1oDw6Twv",
  "key23": "3QcSjs6mXtQULBEQRRfL2Yw592EgtLjptcGphNf6D1srcvGs3nc1bwUsPNRSLH6zx1vhzrr1LoyTRtntcktFVKgG",
  "key24": "5YYoWRGv1Yhry8iGzonhxL1bGSzYF6TMpVZJbvoPf21SMPS6RJA553psbiYWq4R5MkySjptMKAkKpvXK5kZEYsSk",
  "key25": "5EBqPNvUnvAYzDMkqqGawZiaYfsDsGy5chdqq5hjHCFp9k1hyJ9bNwahMTyJ2XHmoaoMfGwM5KcVXvjxxviEFTQA",
  "key26": "2TBm3RstDppnGqmYnAwrw9xHcoTWi5pNYKRsPHCrqzYJomxjxKLJEb5Ly191WadcuvCRtcRGaCiyFELorunonaZD",
  "key27": "5LPoH14GZjpaW9wB4wy3cGff4cGbnrs3ttiPK4HdxwUiLqSNvQ4h4MRwbSRe3mt4SpmkWAEVoanuxGbZjBcuqWTJ",
  "key28": "gskFYsK9AeY1EHwVBQkXmK3fPdesx1wpgVwMSpaZ5PMNGKtP7KrDoq5s38iMFfcMsNwk6d8MGP4Uoz2nYxtZWkU",
  "key29": "2aqSAmdkFKLK7Fe4YKy9Jmo3mPN7Q8nTQgSfoCUs5PA1RXgJbPXtKR385XVWTJ1m3auwSt97Twf6H3jUExK3Gc9T",
  "key30": "ihQpGXS6bRUwXqKPsjTpNR1phFwQMDP8HF9Ckmx9aepeWf6mzSGhEtvq4MroHkcTkZ7bBZxxtCtt6PTJ6NNA66a",
  "key31": "2cDgtRTVntkH1SzJU4ACMtg9Z2XtkyFkjwHiVEaoKRQBzh8aLThuGz7vdmLDqrW31W9fgktczYZDQjqu7vVD9vPU",
  "key32": "npB65EZj6CrR8G5uNEYucvWmNYyi39Q9GCzj988fJM3EUBKjyBeusmUwhkqLVS8XkamsweEUrAidJTbAc1cvnji",
  "key33": "3Nexk6zDZdJ16XTiZQWNdDpmXCkmyhwWoY5QbNAk9F7D8nh4Ycxx96DhEQxvnkbu6CJ5FLACBiPobPcn1sohUTX4"
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
