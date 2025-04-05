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
    "3yJaK3zoH2KezBw1WRqYSpLe9t2tdGQWMXvJ5H4bEWPmX215Nb7Sd5U9wYT4MCSvXe4BqDtats2jhq8YZFjj9mUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GsEcUisvveViqyXGUnwc7DkzUyoG2FSL1XRTSy4wZHmUFDKciLhiv3zUr9Xfoe6Y6p1Eghvx5gUG4sAoGQsxJjA",
  "key1": "3hqLBC7gQeBQvcYE5QjQebBnc2BoeayYevuMwyWCCPxbp1CsXdkXGhg3p8r8589nNEMoVqWc4wn9PrrPBQH1vc59",
  "key2": "3WsAupKPiHkNhLsb7JjWokYKyctFuUTWSgGmioocwJWP5QD7X9SRBn6czuv36ZU5zpyZJYBZ5tkeocPHFnN1Y3nV",
  "key3": "3n8p7FtU2LSJNePixPS7jmSEFkCArEHHpYEjQwL7i8x4g5ciU1bpBkoh2zB5z4oHBypLYDn4zqr1KqzhDeHEXiev",
  "key4": "4yyRGquxYQ3ED6qQMbozVCcgWgSfr6HeYsPS8XxcyNzQzGv7nSRvK56AUJi6hn2ExhwPLBKLDADLYkxLRzKY87kP",
  "key5": "42Jdh7M3Z6w5zaGAVtgKjEyMKY4T3MD44Banv4djV2nZk1mHXZcP4iAjD27ZBseyyjLTaBmDWSaUGdXHSKj9MTZG",
  "key6": "4XQKq93pVnxJexsC3DgD7pH424hBLszAJS8hRACSs3cbzwRa17ySQtWxDCkDVKhgSbxZLpVGN5fVbCrrC16KNDHJ",
  "key7": "5w1JkVjf8HCpeMfy4FJ9FTiknzdoKf7gqXxAX75oSoH9HbcECTkjUF1Wm9Mh65Wj7ZhhcuvZzNj3f8Bwz8UARhiJ",
  "key8": "2uPrPXmpP1NuGvZDNbH3Y7vohyXmjFdHfoABtSNvjvDXbDbobyDKHFkLykfHS8NaJZFZKV2BuoqbWCi7L7349usi",
  "key9": "JawkwdLYgQQ65ZPo7puzQsjHJUkr7cELppXM7XhTJ5G5UATBn2vL9w2q4YzuUMYcTJgKVfwWkezZytrTNBQnecg",
  "key10": "VFvZbDyXdERdBybrg59Dx6L8eET1rSyGh85t3kwPAv9oDvaNH66eEZ5vNBD3UUZsxGhAxGdVhVNpuFnJdhVkaJQ",
  "key11": "WZ14PEcRc17oUALoRSVJ68wQab6xQLnEAv748h657QAqn7dvxGVrT912TgYe6T5RoBCg8arcxG28rkcMcNGvakq",
  "key12": "pYAAi6ds9wEspuyJboL58sLiy3FNj4xygvco347KpMA9eygCFQAPhqEaMA5qHrcG7dVUxV3Z2xzTuydkh4ECqGZ",
  "key13": "2oYZQf9ZrLwXLWTmJHxzApu41GunrmEcLtNVGBbJEpS7kgUD96rDgxt7K4t8vqybyymSUxdvoFJ4e6EAW1pNLBU7",
  "key14": "cZkZ8buTrjaHVtTvzJ7dSjkT5L7sEZN8gj8b6srafxiznazxjf7GK4BUw84g8hwE3kifhCZpterqwmCVv5C79NJ",
  "key15": "4ED5oKxUmrUueGUWFFNiKCXEtbP3N5QnA8WfGnFt77Mseaf2Aow5GJTuC6ApNxW2XqmbSznGxs48FkG3mcDHbzu",
  "key16": "5UUtgP9uze5Tuzp4vdNpK61V9ohPghwn7CbwMiHzgwamNWDe3yrB3rxyUuFzj8KERTpnAw3UfiHTKWjoqzKUG43K",
  "key17": "qMHdMXJBNZFjZ88eUC5DGELPGAw6NmYKfprjAEcz2EUc7JPSX7E3NNpzvUrNNgiBzzEqqpL9DweqkBFu7EVXtbn",
  "key18": "dL468YGtMmymtbnFhhK2RaBA7TGoH6Dju8uKqrSCYG8ufX62qbwVpUAynScXrstdd7LApUXMZY9NAoXxhA4WaPt",
  "key19": "42LcUvUWN7Xcz5zN2YsNr4zbgDQesPsv35RB6Fc2YDVpB23hfZe6KtyoCLHsbtdUBiax7R1sjNRWA481fjB8U26J",
  "key20": "2SPf6DrUhRaqi8JQPoPjwexjP82CNugw3t5FFL94TsCjtXKP4BypRnTFTZpwvqN4qa5pKy2DVqZVVzQDq7HFQpz9",
  "key21": "3wgWnzqnRJzU3t3D6KmWPPnHjnLJKAXkGDqq7nHyc5gnyVWFv4zCLY6SXdF7RAjqxDE1ZQHbLrFs8nB8jUK376sb",
  "key22": "YTqHWaDWH3eyAUZvVmMJ9JK2jyy65QumDhxkLHzWkxrSRKzSDeKYhdHqgNy2DPdZH2FEtNr5YV5kKMatu6SRLbm",
  "key23": "5N3myEHhjkRKZsFDnVohwjTPCJJaNBHUzYRXsTMCo2FMsxu52LSyBFsP5AR4qoTSGJKVhxC8nazrspjcaST9hcxY",
  "key24": "2qYRWv8snpJWmiVvEDS25fn88agjh811cRH7iNendcM85jEvMNmPE3HBSxafQb6BjwcVLRwsUcv2rSNYZfpqCvPK",
  "key25": "64fZLF8TyMmZybWzzib4pCWxKkCFTBgoaFqEUCtjcSeKBm5Bpmk3cj4h4GR3kqLLkvNf6bUKCFJRzJwn9vePgEiX",
  "key26": "375GCkrqzTKBJRhbSbayzgCFSfEq2fotyST6ZE3kaKhHvaQt3i1xK8fe4uZXajqkojbAtwd2eeXTxCqMQHJnsixu",
  "key27": "49xckDeAhxCoyhnCZNrkViwrh1dngCJortBDEQGfRxcYYioLyX6817WXkKjjNfg8s22s4FUcJG5SwtyYatZ9CNNB",
  "key28": "5gvHuTBU9JrZDz1Ae7ixTQ7CfNg6jDKYhmXW7yj5avL9ZmfiRFbqcT4AEuHigiJ7fgdKzXvv8yupnWWDUejNMWt9",
  "key29": "32axzhDDPdRWHMX7rnpMA59mmnvu7m8bVJNBauAEdBLnXGvgs5GGEWzrRvZXxiZGqazQCyeSAAuCuUZDUkZCY2tR",
  "key30": "2mdBudSZV7aqCdhxsG4pquCV8aL9d9omZgX4FDgj77QQxNFpdK1gvCKtuP1AEdEoN9E8VnoLjakKNixXA8PQSoa4",
  "key31": "43pAQPfMwHo53oXNxvj4JUfqFtcyiEA9G4HDKWBoSpAneyEdiosRQAkK5HckGaTeqLpJvwvEohVUEJMDjCBCxbS7",
  "key32": "5V6sRjehTfDE9ZvNpcuUficzTJeXmzVNAnwLd6aUa6ebJYzbGZvXF8gQqrQeCEnfPL3RDByjHCoaz8XBMJWNMq38",
  "key33": "BPRqwighLSTVqPPqCQ5JCt4DhZzHiQTbJcbBbqgrGkVadjXna1auSbB52Db1e3Z1z2Snmw6QnkkQAke9CFwAqJw",
  "key34": "4a9snBg5VZt61zyCzZ8H5HePMArv9odBLaJpVSUpH51RdXSXVBkc2ysTzq4LJPZdrymVgXTfzZTteqJUi4NQU8pn"
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
