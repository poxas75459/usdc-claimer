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
    "5eij4fcSBUrTNyYDEoMnyp5HzKhpbnJPbcHXsUsag1bTKrbmLFDX9xM4HLAWE7pA1ZibjpkLjyLavByEQ2dgBMzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F6wpbw5wv8YtFbZJpd1icnuyRAv5KwdA6kVDzwrjLdsBJBWoeK724aKiDpjPUAWNm6WP13MkZ4fHRkPsBFuQGxH",
  "key1": "rJHyg3BmCfjfVsRLQcMbTbgVUfnGPkUjmTyaMnTb9G4ixkmsUQYBxtJkE5vvpHpFPs2npKQKHtfLkQvvtWKNmoN",
  "key2": "5xJbzDh2dmDTYk4cxLgyyF5ce7KGmAEYfpXK5NzU8s5BAMJdUsq5q1ETZ15TJUc5kqPzuXZPuxuQV8FKcLytqWW6",
  "key3": "3uAt71Btn83SMPWwL3HPkJQuY7YfEbBGLZWuLF8SMp3Cirk6zKGzar7toj651J8QBrTnZvKD5LdGDiEvouQ3R999",
  "key4": "31p1qETTqzKHK5dUYbLULsgP99D5hMRbDzPr3TriFeuKqKBS3JkUn5Md2RTv2vRZtbkzggWMa5g6LZGZS5kVYX1d",
  "key5": "ZK5sLWsrT3jZ9VGvyTGkGTYYR91fS24TEgSifcLu91CboeRwXvRmw1612EMLt8kXeEYoKmuqcfWXJVPDNrysane",
  "key6": "5vAzDNFzog5KSN469nLnQF2ideeVGjMRwdoAWrUrs3tDK8YAZXGivR7otLzKdYG9G5Pq9pxWG4n8dj5rdisZAuGr",
  "key7": "4R86U5tjEtt42BKNbtkR9qTx9a5LZL2hRQn2uN8fNLEVx7scSfr59VXK8GMNUExPY7BSGzVBg5rj9Wzx3H1LBo9E",
  "key8": "289SC9GihuJVbFRFn4f3kdgk8cGPRqFmn4bKrpMdenYGUcd2UW5GKHbZUGANP8ajkchmw3XGsviGNJh9B8ReF3kJ",
  "key9": "Reid1nZ3Gawo6VXbodSxNmyqWHffFNq7wrpAS4qpWXhStFtWSK2YPMDQUrM9hZwXnvPYSovmrizFVeoaYyV2Lih",
  "key10": "3p7XQm3hTiygtBmfjZW5288JpQkUrb3zgw2Z6GC9JvkfFYaZdy4n2Ekb9Z2n5tMHQNW9B5C5y9QrfF8NDoPZW8DV",
  "key11": "3bXLCDaYSbJGytwLJrxLWTRzQv4aQihVWXUTK9UoZJoGKm35xxNUSLb329qF1hLimVnUNzyrGzn3CosYv876T8sr",
  "key12": "5ddrpgmujtYRtaKhv5aLZMH7ok6XoTvxdSF84izzRght1UZKWjCpF5KBmWQM17WkHjZPJ24kmsghLNrqvNZ3ZawJ",
  "key13": "5nhHkUcpvHSvCvSXgxnGExULQhde784CJVMuVjtgSMhRUwwLWaUcuPkX3LoAS2JRBtp8P9Ep8ZuAdUH7ysvFkygU",
  "key14": "2obTzXBEfqw1yz6zLUPJrFg8QmXUAeuajSaszQ4QJz4BXA1jGupWYBKqHBpSsE9sX63Vh6HVMyi2CHSWx1C3aQPb",
  "key15": "5QVxWawtRGhxNww5ih7o1dJshx1sBqSkYa8q6uVKsZV1VaLCcpYpmbg8CbjrkEgZauShaoPtw5QT2hcr1YPArcqP",
  "key16": "5ziBe58nKXCos7iHHqqWuhVMQZfEVSC8fyuT2soo7HkJ8mdYo8zJdnKGZMeck27Jp1kaokL5HpBjWQCcSM917JS2",
  "key17": "S5L8vxCGrvKrs2oTZXpfh3qZG4EjeoZ8UZ5Z6o6bQHu8UHnv3dir2LP8HLRgSM1qB6waDj6TqvdrhkQG2BB8nPJ",
  "key18": "59cQkBYN1kr6GmsQGkyC81Y1QSHQ7cv9THssZCYXhoNsAPhUrEd2H8VAamd4TL9ms1ySwgiaYEyfF422zuc7MXSa",
  "key19": "25eQ9zTjKvMhjmDZ6wfaAZQvGNFNBRBgmdPJ9fa55jMnRvUyno3PZXNuwmMbJV2c4m7QgWyUi8KFxsMiudpzvhsW",
  "key20": "326VMRDc8dRuVo19dzT62YrhasUW9a4VjDN9TXfPwR6MpWg4pXWSeUz3qNTNeUPUcdCg1waa6oyRa8Kc9TsiGXeq",
  "key21": "5Vkpzw9iEKGyxdMo6kb8sVoekXFQqv2CrUXb3ssJxVArYGvAmvJvZQFvMNuLV3jQkTWPvD3MfZeR3YsKU287o64H",
  "key22": "4wzoVEkTbkErr6h5FRpuS421NSBVi9SK1MautWt9VoYSmWPTm77AoU7hCQcNi88hiiG1vmaz3MuiCwhFRcY5f273",
  "key23": "2QJc39LbWbkVKBeRY3H6RdY7s4KRAgTa91za8uP3kaUXDdsyyoUsvPwfv27vzuFjghmRfmbdddWdDuumJv1LaPN",
  "key24": "KfeXmYs6VmJHpoFch3UT9YvC4Aahd9yegC5CqtEW3sFxRfPiUVZcWMp8PLLD8U89bQv5PD525AG6x83XCyHCu38",
  "key25": "2RZHZEnEn1Kq7CU65Xey2Qcv2ZAx5Mch1Eci3DrEirMG12TQXqDyav2qd6YRPVYjgvgLgMkDxewcxTZkdjisvVbp",
  "key26": "56G4bi8ZwdNafcpDknvp7vwzbyff3gk7i5vcFkawUw1t79zRqM8gUh1tb391DunMSW23XHq3G5jbvpq2cU2YKngh",
  "key27": "5t8dDmMUGgeeeCRCrQZcDHHsx1X8X8ZZHkCgDrRJmggM8VGEMEdQNzS5HEp4v346c5iZ8ybsmV4WLYBbRW9xPRZp",
  "key28": "47xMvnxp7exdnBRD93DE7NpCfyiCYXsWJfK4P355SBci62LMf5zC7o5kruZ1JDVRUAxezhVFf1eWjydec5KtJHA",
  "key29": "3fv41QDf5K9JUQ6Hz4GinuxfuRMoxqQYRqcsgLDPBKkX7MHxieu3DaPgpTqnc5x5VDdUb8bayYw5gWhKA8KUuRDa",
  "key30": "Fom5Aec7atfrXtPAiuksCVzABBtQQxJKh9kMkZwwkJMpHmcuCeMaxfPBcKXz9V6AQJuyRJQPsxyHhcjGLNfPsJK",
  "key31": "2tRxtGAgcq2V5AyTzhwV59uJd1N3rf61y2zfB3GzAScqMYLZ5cD96dDKyLiR5YrYmWnKavyfg56aDPD1ViMQRJUh",
  "key32": "tYXyhBNKwSioVEtEGh2aCmSD8zDa4fKhYpC2RQVUYReBqW8DqAWsWgG1vSEbUj5TR6KY7i5PTY3iyfxiq8ZhUsE",
  "key33": "2mbYGGAP8qYsA2b5617PJWx5NxgZTKTbVfcPz9QBGoPt48nAzWkVV7JqK9fMM7947zqqzf6g6xGA9wFmjaFu6PWT",
  "key34": "3fcAZFswJtZLo38Z7XxJUPsHrNMzUmgUpYpcupRgV1A6sNzDASAc5sGNhzQLg4V3bqdpf7AJV3PhQXnXZYHkxEVJ",
  "key35": "4VbQRKexZqUiiE1d4FV1SNdXrHgXFMzD54hPpH5wAQya82ezfSZs18FVjNSQ8FsQdxoM7LnWbSYjvggMD5LaofJY",
  "key36": "5pEtDBzAiWje4mhWvdXLbmnKtew7whM2G93BjDbwtfhdeVwHvHRQ1EtPtCn9XqpNu3sAdRywu5BFezKyaCpc5Siy",
  "key37": "AXH2BcmXJKbYFAU1Yi7bAv2Lpnngq7dXFBGZYXqZ1F4H3pfmqsLZaYPra5TxWzkiVjiv7dMBwMrmSQyo7SAw2QQ",
  "key38": "5Y5ezFQ6igpbGowq9vv4TqRCeG1QzJzu98YBi1XaWQJBV7Fzxafn6hmhZHGFSBnUXLQXCgU16YrF263Sdnp4jq31",
  "key39": "5E3PcmT2Y7z4khuJ2YcYhj6vAnLbQiVneZYGD4FNjuKHRwyesBF84G8G7D33yjAAaSxFvFHKAp2B7sk5dqHdtZCH",
  "key40": "2EZRBRGxYDSjGznkuZZ8ZKPRKwJzEKBVDeKLVPqbhykAY5WDkAYMynzg4tY1ydjBpahBGVbZj91PL9GCjhZLcvfj",
  "key41": "4D8vMQmMMZ2fMWqEcwy5hy5Y4dNaWB8uN9c2ySHtThrp7JWgbZE5WGZnmuPRBKAeMo96MCkwpk9zLA9X4DuM7JHD",
  "key42": "3No78ghScharkwisUqrdDBNmxHjN73jxcKB3rnb7ghc4pf8hxMfgdQHoJb1a86PWeuDAfj2nFZmPhu6xAKarVN33",
  "key43": "4YkRmk4tmQm8V6eMqYVWMGKjgYZxRu1AV5m4MoZaezzqKNcg6ZVsPoWLaeme7dPFfjpurj5VGQjtcEJWg391oUi5",
  "key44": "4h1ocZzSc9vUwHz2UnnUVaJEBNzmFjJ2zhZt55Z7QqcUjZxtpJjxDnvm6NLgvibmzeNQCND5venWc6uGEf8kqtUP"
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
