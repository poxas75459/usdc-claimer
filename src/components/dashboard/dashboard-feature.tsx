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
    "3dDjqjTpPdbJjiCUwQGUS5fdpAjmqpnAZmF6bMEJh6qBeBAAqQcijfWyydHdBogzCH5T7rboGtquzjm4W3JXJymY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46PYWoXnyTPZPRvSUWGGtAMH5LPPKsySDa32i6PrYCbXwcaoAVm7tdUe65NpQ6AeaMcFWM6Eg9vhRyko55pgs1s1",
  "key1": "2GLAfaYCghV8mkHkvkcifayQCYDA2n77ZhyRTrSoSVBFc5KumxBX1kvzqUnYqbZBmJos3HcBNgGg8k853rZYEp1r",
  "key2": "3KpBjgV1NZX6hfnZBNUYW3FYkaYqcwRPF7xcet5Qi63M12iPsJxS45fPFviTYyX6seSkoLt6335P1NPuBZhZ5UKN",
  "key3": "Bvrfiz3ELhuyNevAyeeihzEfD9DtAK4XVEveaDLqoV1mgiFPN86j8bs3CCGdeDGTWLEcLhNEYknS2cchrR3T96P",
  "key4": "8MwqkjBL1DWaNnHYeqcBGGzLVDzdWK4aXyUqHWWxzccSd2eYaEcuj4P6yqe5rBoNEvGvTtwpbpLqJYYFyZjQnpj",
  "key5": "4weu5Y3HHpK6ecJrQ3fncHEq1xtiC7tvJmJno22zYRbx2Me7exRjsJEMCzMYT9GwC9KeKKqLKt9NrDDBQDnb4G6Z",
  "key6": "2TFnLze3JScCdzPTHdL133Av52368yJnNEd2hxUiBpCu51ds1wGSMoW8HtBWB8tjw3KW8M12QcBtaveuuHK5jwuq",
  "key7": "41Fi394PLciPy8PCuLTBqEsyGpm2GhoUWLERWFLwHF87XUasqYwahDDT4eDZfRik9jU84KgTWQ2GW5BjqC8rsMDR",
  "key8": "kCW3mExVUKLrP3KBaD2GNHfAcgWRyWZ8apN19fCq6bwN5ykQ85318WfA8HqeH1HKwf2JEL8WG1dWA4Z4Aa8c2HZ",
  "key9": "56og1UP6qGn7J4RyTYyv5JFAHwvUCMXqA3jLmbp1buH3tqunbD3j9qZgzZKLnSYctk8RMEFDG1TW39AL1WiShHxe",
  "key10": "5b7c5ENqp8xui3WzPag8p5rAXmZB78o6Y9jKUNLvNeWv1qXM28mn4GbYPaTm9f374w9pg63zsNj4C6Tn37G6x9Xa",
  "key11": "4D2Bvpep1tDNN9Mmu5Yzy9X7xoFvi4nK7sjaTSDSqyqwLFdwECvfiNJjywar1bC3PyphgtrX8d4bRrgtXSJsWeLF",
  "key12": "36zGiZyPgXE733jo3BUAV2trtcpQWhXYhNr6YCF98D78wjzauhCcfE38NkjphXQ2C8uVVsCPYeCp6NG55YSStjtb",
  "key13": "5sMhfSvDRA4ZVLtByjG2Rhg84cz16AtK52pXJMEJpprpi3bY4JFgzYN85RMZ7QYKCRDkcTxK8H3aU6AXxBTe4zmx",
  "key14": "G2gRZmRnPzetkZEkF67PL5NNwwynSj7FrZx6qxkF7QmuQjcn1DP4g5BHcr38aXTW89NkQBXH3DEFpUBwRUFAYPJ",
  "key15": "3W69oFLuJj78KzHaqvYbAn9JugpXfs6XK3yrBfQLxreHqTQ4L5jVjaFm5qqCGJHGUNLQMphgXXRqnCgYpjE23HQ",
  "key16": "3MLWLGQbZHTWNJHU9d88cG2nFozYqhCmLguRvbabHQd8s4eGcC1d9gLX44hKLYCLd24e8wAmvLDQY5cGNq3xze5Y",
  "key17": "2CMQYDJ7629gywsxBPBwkT4yXx1NNQRHsKdgacTooQ4ZthiDuSpXxUh7u3mSGLvy3KsQhbeWxvjB2z5yxSRoY7GM",
  "key18": "4iYPWCmNqwUgXVpdVhLe7eGBHGNKpYHBEBviLbBiqZy7nASktXzDnRduiUzoVEshigPwYopscEMNRCKqAANwJKUa",
  "key19": "3T9YP6ym187KjX4AzH6LhFPq1VonzWuTRh86Rn1h2JWhMob9REfRH1DpbBE4oXM8ro4QoFXHFR1Kzzzf1cfJZRJ5",
  "key20": "HeaAjfXLGQdiFSJJduUvhhXc4xdXGDk77RiV9BM6LgKcbLPoF84sqF9BcGuietJarZot8hXkGzQTJtjVMZothQo",
  "key21": "4wMNUVJ9pZxwVVQe2auKmHojQsxAjbDJ2cVAFwAfnnpmhZggAQiha51tKkd8FY93hwkWgghiz5YuBoeLeUpHzCKc",
  "key22": "oR5vRTmwLnms5LABDE9UWThQS8RmwWK8KSxKP4xwwFuarm7LfqSMbAkM6u3waMLvKbnsNSeS35Ndec1S62dHZvv",
  "key23": "5EM1aRxKuWBvXWpNvaffAL4xvWuW7JuLNk1Y8tZiYfCDd1B98ZMCAFWEXPZot4X618rqYHJxjTMJhu3744472uh2",
  "key24": "Fd2Vp849ouvucDJpSJxcwqTf6z5u9yQmkgKse8WksaaJhdkNHSrTvhGVP4NR9WU92uut8hfmFmj5avw7xcvUSpE",
  "key25": "2e2eHKxpcxtEZLXaVj8GZKgZWX6Mc7BpE4H2LeQpEG6rHKrpGfCcSUVavAvZhrYnrEUiN6R4NqQaXHHm1moDfDSr",
  "key26": "5x39vZ8Cv6P5HU7jtBEjaNjqoXzLdKU6sf8ACKt8Qd5khMAUnzsFyvhiS4SjumTU8NicpSahndrD9DvF9DUPtCvE",
  "key27": "SJGxhgwYENVHvQJzrsBRXW8xkSnYZkAwSPq2P4wN2UQzgZdEdntotdUeFMx29j5Hs3avk6Rhn524cvgibwkbsMs",
  "key28": "3HgLRpqdf6HPzTMmqY3PtfozFbtGSqjN4CiM9buALfxm6Vh3c3kB1BJHcUqdeCMpZp7gkyChMni66V9i3dnTTjvE",
  "key29": "32zK3XC291MGcpM9gef6ixxuzTFjotgZF9c2FM4Pp4Ka7irbVpkmp2cCGAR9iqdBawqZ7tb4HRkbHrUQmss4Ax5N",
  "key30": "5EfsspQvpWhqEb8D9MzFsJtXbUQJZPfUo5XPUD27PfsghBAYomeRN3S9eTU5apwD6U8AgC7BhGM6djoZR1UEPSt6",
  "key31": "KJXQNrSgjSvMzjAsxbdKjgh7XNhnp7BqpJEiiceKaohZVEiQLkchNkTDGG8NDFbG99t6ebKbjWNzitK17jKWY6s",
  "key32": "rYYhstr7w5dE9fXHhmdcfevf1Gax5HZzc71A7yTePQd2Y2TbBrkkSGdeuy4Wba8KSnsfJkBVdVeUyevya3a62aw",
  "key33": "5hRhFkU3wZHAV8t19mnTFqdT6T2Hz1WgBjtyPiH9YVsJYEMQL7acjmqu5dBApJ3dw6UhhE5n93ay9ABuFUQu9nqm",
  "key34": "5rSGNWJMj7p34Adpmm6hex9jgcRbrQdpb9qFYxwrRPQaqU9tYDMqoG4ZEtUSRoHtsRbNqp1MvMYC5vUwgwwv1UHT",
  "key35": "nSRL8CwAHq4GHYaqBmZxS9nyFxftwKpi5qoHg58wHZj2ZhNDUGQ6uepVgVM3uv76nAVig6eP1ENGmjJAq3AhzYN",
  "key36": "4zVff9sd4vktz2AjG4FmcejPthQNEabEAn4YtnTRb2GaKLHPjFQBCz3F7AzF5CjpEieBnicdrNoqStnbNBEjEXHx",
  "key37": "5mnStdFPPULshwg58k91aiobqVLtHE1wwk4uhSZAaauynV2e5c7WGjvyZKaxZq2tjtNgqMBChCKKBDcUzJ2HxLbR",
  "key38": "3687kRMHBzpm2kC747FDqrMcNPgEcwteeD4wfimWYPs8en9Tnq6krHGaEnZM9RT49HxMYRxfqx8T9j7zYg246y6B",
  "key39": "3HJY4xKKfqas6RsNWv5eDgQisXHsW2HiWH7rAyU17aQtAacs8esUgACZA6X231ZCZfFcBDtNwf5cuoioQbEieRKT",
  "key40": "3aJRzZXPgZgyQmytry2cQE7MbBLBeKxfSNwwxGw3QpBoDSpmLNjn2ohkbW8GV88nnUePVEKxXNCHjtN7m3tQicPx",
  "key41": "4zYi7aHeKJybzZPyL5rjPBHokpPs3YaxEnAEZSJMcgQnTpnK93hPtTCyVTDoq9BJ7mvHkLoQSctPvB2UGLXf8rmy",
  "key42": "RAj6ucDtiR6N3Qsdgo94WYES3uNjKTX8poaVznEo9ZgJz4KRxRdJtHh1SDEYh9U4WqSrwPPhYE9Wy4dZuWh2fjg",
  "key43": "3qLLjNUSDN8u6YnxD8Hkdii3oC3fZZrN5npmMpuxFEU48v38ST9HCdCjU3yd4VJpgDrzFa87NUoT2f2uekv5ioTN",
  "key44": "4oPjBRaaFKg3VBtHYepoAaGuwSYrDf2w3oiciT5TorYsuB5CS7bXSHBRTSTjpk9V5YSg97qJ5aX9RME1JV5RqVka",
  "key45": "da4QQhSsrDvtZNC4ei1rqnGWzKZYDVA1L3Robb1DZZqiyn6aG3r4dm2c3hXCtFQpiBfRFF26wW3AoRzKGd1FLoz"
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
