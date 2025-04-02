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
    "5VUtGNqBvCr1ZKCZyVJty7ZKPV6uqDCq495WrmaSK3kxo8rNebpWdDwmnS9KzpCtNgaecR6DcCRt7s2omxDH1xb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61TduoD144qZMSMq6svW2VVe6xQ3aXf4XmA2ATzjV3sQAaNKN73ZpPM4mqZpnKrixmALoXGqncXgu4JrjNJh92UL",
  "key1": "3pQrFsGtaLVzmAhMEuBqensSUbRA9dstePKciVfkz3xaoak4C93G4X3tkxKtEFFTRdPk9ioC4wAywyF9ahvEhp2Y",
  "key2": "3HLnERC9JFGTYn2ZfvsWtb5YZcgK3SRxNTUwCDHqponymTtf2AQEWfEFDUJ9P2HYzWJ7vHs92pUPWUugsqSR7cDX",
  "key3": "5XWze4uM9gdDm1MnehgLqeyimxVFcjVv66i5KTYsEbHLBLmPfSeMcpEv85u7H9YVhKbRMR95fTDh5mf86wGSEuAg",
  "key4": "2FaP1sf5JicxAgfMkGF77p8PHMVWckCXsXFnCz1z3W3igbjUXgtqQum9TVnze7CC4A3gGqqGtRbuzr9kzw3QDduu",
  "key5": "5eJCY4pKVEqSwEQVxaNACFExTAVdKydJZt7DrA7oSHuHsaSYpbBSPyMCCXwNh5yYRpdVUguHfhTJ4TmRL3hyH8Jw",
  "key6": "BnhUmWuZzYjx7LFVnDjvpRGfrfM1GpZkPwd6mDRbPy1BWjmYNnHLxahqRR1sN3g2kZtV5pn1sj345iy6szhQRf1",
  "key7": "42kefRMtcNRruyhVppTjKdZVNs3ws8H6Tbv7fytftKBxwFwHJdQbpKp3tRjsf9B1sU9pQhw2EYZ2gvYUjCHb3VBq",
  "key8": "2zrW7riuh9MirMZN97PexHwyiMwAp1dBkUZLdWTJ5DXsdxYAUiQsP3VCoJMvYELSyAxnRnfriaqiEHvnGJyDsLx8",
  "key9": "4tRdBVQxZraFCvf469dNgAAP6CwKATBttDsLDttr1C9L5uUKWezseaS37u4ThAD6Spba2JHdUPTL1RAcTob3hRVR",
  "key10": "kW34xK3UgFBh76TjhKhHNkq9KQA2JEubhg79kmJ4C1ci9A1Q7r2j28C89sUxb9JPy2qnRNLjtjFwc9mg5z5niqf",
  "key11": "5ewwfqL8bbnURCQePFFf3BzfnW6w1PHa4QHmP6YQjoEB1TCfUjtLutaodXzqVANcdnFksz28svg3zE5EcpVXRZoT",
  "key12": "5edoi4afRvat6hrdsT38b4sMUxurZQ35vRyyUap59Eq2XTZuBbS3b8EyEfV7JVc6sKAisHB7J3jCPHm5rpDFdBve",
  "key13": "HTgyGZQdnby47KvyLSUPV33n7kBgTGFgSZV9TmtLfdLdkiobTsL8AuCCX5n3azBT7qMc424b9gfsGkQdgNwdcTM",
  "key14": "nVyK1dq2jKmuN5EFaEsofF4TbfV1cav2XVEHSAZsY9Fh5x2QxaVJCydxFSn6Xkqnqrv4dKYa8CsGK4YMwHU9T7d",
  "key15": "4ozxSFWtTYQFc2CVT85AqLm2PujwpAPZPQAGYiqP9uUV6LrHoZX8PUQG3zVLZKDLNWwsZkvYBiEAkhiArvwSPZw7",
  "key16": "4GUhHyWz584vvfSPGcdviqVpGvaHJnuUYf7KYioot4S8UJCNULzxNidLursGHtH4E1oPV7uJdPTra1vt9eHjNG5a",
  "key17": "3bx5rdc1fXQy3ZHt6Rb7AdPa7KuXm8aEKF2hPDUyWWC2Hxz92TrpEfuYEZHUqkVmspSDsAcq1APNJzRC3py4MzMT",
  "key18": "2YhUJghnvA9wSzxQojLSXHYGZ6cSSANWLoJEVBncjZu6rSwVeqSPAMQw8LameanNR7PDectpJJamEt9tP4rVpmCT",
  "key19": "KsST8TZ5hDtjwhrHxFS3fMLpAxNoPzo7Xz3tViQ4EPoFoaCHpfKZQShYXUVHeYRN5RYybBfZUrsT1xzqyvPzLNA",
  "key20": "ZeanavCaCPPyykeaYi4V9B3L2G3gpfHyPp6fbnDxaPDTQAD6MLKKW56ud7f6NnznKWs7VcyfFQx599neKoYWYna",
  "key21": "2sgxnHkt6C1sQ3KjYSkcHahfmtDi7jpAx6WDU8vyQ1d1FYKDF82ivugB1ZG8cewEhLW3eDJgLqT6iQhWyNbcfSBK",
  "key22": "5tq17sNqtJzcrfA1V3dnJZaf3mbh28Lnwh9gSCLd9p39tKzX43KoXDEc66gckbjYTy1zZA4NdnApFZa3L5TC4CsX",
  "key23": "sB9gZ3biewLN9DX9VhtjVtbQh5mLRKUjsmZF3BYbsuVHmZtpVyQnSbGkmNXbBhfFt3MDR4ZZU1iekhs6Noqum5V",
  "key24": "5mWdiP8ri6qJKzM1z6gHMcUnceafmHpkQ7MJhQS4D731boeryeTx9oQwbA8mjNDi91cU112zs6f9MqAD1hn9mYXw",
  "key25": "5vnqZ9xcxgh5ovtATNde4k5xhsfaeBnFm4VYbazTE2sRw2fz4w6GxhMrURWVJJBzh49caUDRfTXCFBN7N5ycoegV",
  "key26": "4GbBveya8STJGbosqmDW7BmznQ7Sn6ZtDRoS5PLq8R2bq1FPdTjyfBTt4jH7or5EdBdteP82APCYTtc3eh9KLvdZ",
  "key27": "4EmYUXaiVrnpjte5GDoXiD63hqwVf85E48bPRiTkYR8aTz4Eg9gXdXMkNFPuwNr1H6pUVR8UbNQmoFYzeJCVVmkD",
  "key28": "3N7qsw6y3T8gfrdRx83QBm1pydoxtwq72Dt7rjZWxt1wG1Lk7wHvyfwUY5Em7HhVd6PuxpCHKoTSiDTQ3XGgtD42",
  "key29": "4vXFRMZrfZhdfWmCio6j46bgzP5MGc8n9odR3sFD8P3GpFG4BuYN5ZRUa4uCHdG4hMUe4j3LEpDJqKu4SCPnENDS",
  "key30": "3o2KbKWmgvMJEfoyBQsmJQGZuEcq1zpCSYjUEsjzkCDjzGu87CCWVyjxA162s1hj4ftNphtmzcZBSTUg2DZ6Fe2T",
  "key31": "41gUVUrKkyDAHRC5wcpCXBSzzsQ3XibTADqnYGF9ZHqjMLSUA3a3q9ToEkSo9pPbs88v19kq83rB8MrZQzPGeZKc",
  "key32": "4ZK8k1mAdvtqvTe2aSCs59uL7JUhKKVgy9hLsE2Bb6LDhu57bWLb5qgvMYGKuaQZ6Mcv3wFEMhaaYNhFbRd3ydde",
  "key33": "36wzNjoRwTZhg8br3bu5DDDzWaF2jGxyQ8q7JynxajmgxNUB7DFMD9ZCBvqnMs1FpCmfjMMfAcUhkef8yjFNJrzQ",
  "key34": "avWByaxaZJk9iy3BbQd4J3m7pvxh7ZKbMW7uZfSqRGBHiCTY9FSRRNuDGVaawwnSX6HwQuM1VeHw2guDkYptM8L",
  "key35": "3QBzQCHMoaUp3P9p9YFypfcWQUw1eKLiHSGb5b8E5E26wGmE3sJkm7ZrAajewUdU8roSGmhNSCcuuYowT9Gfucpb",
  "key36": "4cjpoJCWb11dvWEE4wdPnZGcjw7YXvJnTdwLH7NkkYvWDnYspzBVvKSM982GpA2SJ4YJqdj86H8oGYqkfTjuwxGQ",
  "key37": "5PzaB5MpAJn9Vt3SreURAeuq2wAk6Wwmw44spb1XgE8TS7muEHC2YZgGAF5gqTyf8FffuiNNiT4sA1A1GNJ7HF5D",
  "key38": "3ZQkqzbWuDw7jbTbNSXZaUrqwtaXnDtGZ9mppdvH7KwQQuREoeFqDiiEi5Q3kRBpFsbBN2iwsc5DTVnG32UfZ82y",
  "key39": "xw9wRMwFrbAKimYr19VsLjR3hvSWcH5dGzcaQPNTVTPiEoi7t2wEXjVrSZQveJWmgDSvXPnxVgokNh9X6Hr1oRT"
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
