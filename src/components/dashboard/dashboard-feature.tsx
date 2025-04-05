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
    "2s2PjNAk4EjS6QeuGFqbVwBHmJCKRtwEaxdr2ZtNKuBcDv1CNgCKwuQtnCFuX1294Lpu7R45pCsmTaBvbDdTBKMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D5abSru5BnNsRevLZs972YrJtk7kty8YTuBU4cPNaC4n6QzTbqrNoj5qJFqupWAaidEhwZKnSjat6onXxVXhvJk",
  "key1": "2WyfDEuZSdCf6dhwV4ikpnHkLKPZvm4Z7D8HBpuPGhwQQrFmqYnJ7xLZv4vPJAtKXBSRWuYEzQG3JthmsBSpUvMY",
  "key2": "3trbsFX6oHdfTXVodFPQ67vEfWfsQeQ64z62JjT5DpV3CRa8diTTVL3oi8dsZpwbQD1YB4DT6jyBb2BTgGkibWbZ",
  "key3": "5HCQ6vzPzKnaNJLpPm1vbjwBZnHTxZTsBNJ8YNXRmEouvTaaev3Zsvb8WzEKMBN5WtbDWmwfhpw7Rfg5P5ASKToR",
  "key4": "5ZTzeERnYdRHX75BRKaUJmZTw8CC8J4c5SfZJJTbSgn6xaAmqC2DEWRJ3iu1eB3iUBuMpzorJDT7YZ5gyNLEEYYA",
  "key5": "mb5kSSb8P65PKU4U91AT9K6W55bJre1BGoBXnKkVLe8yMpiqMYsdLPchNDxUfDAY6rdZTaDMLK9JwBMJn7qrPtW",
  "key6": "453gu2Y8APFfBz2bBD7Hdd7Cmkp8f6hPVfb9EFVZkHTdq3Fcs1Sneadei1v5UXhPnXcG13zCNSMx8dsZRVSdDYy8",
  "key7": "3JJUc6UFeR1iHqaZmMs8s7jruspnLh5Z2RGu5EmozZNcuH7WCwgfkfr4EwuRiKX1JsAY65sWhgNhCemJLjZnDpks",
  "key8": "2o6D9mnABBnvrc9J6zjFZAtjSpWdJuWDBMQGwhFsj7xjeG3Tt2Tbxcts3D7hLyMqH2CchrkYRVcMAk3ycRqb6e6U",
  "key9": "3KRZ5qFknXYggRSdhKyWdLLim1hsmE5WCjskmdAf45qBnvHPDcj9wmg3ioWPcz1mdPALo7zRFicA5mVmLFhU1wLr",
  "key10": "654wGZ5BYFw1G7gMgQ1YbHkk7hzaSkot77TQY1ob4U4s6gevtZiLsggbVbYSbVmE6TnY4ed1Wg3GQmqcXnhQ9abp",
  "key11": "5WuSwJpRiTyKNsyMSsMoW3t5TPLEbQRFbc64dLX9RjdUX4i3GKpDpVbbNM5UDk2K2QLw3wu9hodXu7abfhMRDRXQ",
  "key12": "oDSHrD1ihD55TZcQQ4mutcHrfLmvy1A7XFAk9GnRdcspTbP1aLmETg2J7qtJCXJkjHeiENhGzB6hpt5eEkWJRjV",
  "key13": "4tFAYKDVvqgvjUhEQ2mCWLMaHzAMvJkXiwUBSTLVLQqB6hB7RJerip6BTS36jXzfUQLjcCnX3wJeuZd3riptakXo",
  "key14": "2PbtTCR9YWHAqPUgRMXjv4vGiPJ2aoVadmMoPzgvn14BCPztZ9x5Bp4Nw8uQ7YdMmA2UkGLYqNKTWu5fXzUamn9B",
  "key15": "4Vj8p5FXtQqnWnz2rpwkSNCd8iNmmmjisjMrSRBuzBSKJpgHTZiiHWCGvujeZGXAkUWnQSEKUVmDkzKmKCqDYngP",
  "key16": "4BmBpBKvcdCw6ZNVxwTUEDmq4maxuQETM5RF2RNtWRB7kaLRSNztDuPu4bDsbMg8VoprpMdRwuevRmdb2mkPZoyX",
  "key17": "3V68rv1tax8A9RXwUmUjDcWdpBVVhWvMBUdUcL2gPL1bhh3h2TzHAZ9zGtZUtfpJP2PiqBXrmVBr6kcFYd6bMXDW",
  "key18": "2K4RQqrdS89DRifbXBv6UVc9fd2hU5zAJvFXv7BeSi7y1ziBjCcvNxZk19tU3fdccvRjV672q3YbCgGy4a8cZsHm",
  "key19": "2MgVdwgWcB72siJ99v9WSJQRuPgzrT5PZ5sDJMaQako6d9P67ehZTb6SYJthpU5jv4Q7nfAuz4sQKY9eRRodi1iv",
  "key20": "2UxppJhhJohxDm1esPPqWgNePf3Bv7BwrToHFajscAiqZvK1AuZoY78TEoWPzcQGaxixCTiMmZTMVi8ma83npg91",
  "key21": "3xFW4ZLoCGb2YAs81hKjDMAyEzzEJmXZPapYuaEBtHSmFCYZr7bgNS6Q58wuHW3XmDbuSXNdpN4HBheAo3DDnyAW",
  "key22": "4wtVLwNQnGH1Xkz4HxtWePjUPUoWuEd6j15zuob27BF5yiBwu9mjneJQRgjS2CxpRjcaMkEifiobE4tHhE6Z1NaY",
  "key23": "2TWpkbZpjECZiMWbZa9hFNuCRt2ftRwG8wwUGd34mpJXUgptptgjReBEt3FSPTB9K6hVUJ7FEkWvHeoZNWotbMeS",
  "key24": "2ZoFjSfLrNv7K3yLL6SRgENMd5by5Vrbuw65Lx5HgWKNppFbYoTAiqop6NeZrUHCRmYy8RCnJa8Bg12sM1Rc9424",
  "key25": "2GvgufWPyHBon5q65s9s6BDfbZaUmxr4WPkHCqT5ukv5UZWVFb44FHJHLW6zRNQ7Nk8Ub4GdqSkQ8YqBrvhSYxvq",
  "key26": "3mnec97tqLvDD94HaqgKNS9AC3NBGy2K2t2VSqiubUTk2B8nj8qaWasbX6JvGaq17KeNmRM33pWW1cCyLzBMFXXy",
  "key27": "2U1KVEEcRC8SGuNzcG3ADF3JoWHjURnrcrUWQuFSsBrECk5bcLKkEX4UoNArDdgx24GzVej8sqRkMgGsJckpKHMw",
  "key28": "3cSrSYn6grVeVb18thmVBrcWY26uwE8HCbJ1XeFGdqc2v3vwMjyG4qUhkvck4vkk3WQwgaF4G8QxxwkY9YaWCDg7",
  "key29": "2A25AVP2JQhanBKijWxdCRTALrw5LRs7n21eVokYtX9cDT4wfzxiGE5mULGdkcoypzwZtjPx83pFUsACivbonqFX",
  "key30": "GkPVy4t9nzV6FAA8bJoUr8Nf217q9uCE7NLbznFszbay9HvL77bXir8dsTPn9apfDWpAhPrfNcdFcaQZowjEWSJ",
  "key31": "3YyJ9HgzmoDuwDYLGvPoR82oZtAVJLyGoTNmr1Jqy5FiNoxbDvnGr92LWNmtbXgDabf2ZaguYWUBgdMG1eMrdjpv",
  "key32": "3YxiNNQCrsjuxkmyNa4Xk15Y27PH13u7MhyHUy2cHPCLGKXv8MuvjEiNQw4Bi2kFx6BqmeCo5LC51xff1gWHBnyw",
  "key33": "3ygT6VkdqWJ9JwP5TG1jwa24Zy3UAUuevikotEZTVDFjdHMVvK9NCcow5rJJxDGTTcntEBRUJKYJ5dtCLwrfkb1k",
  "key34": "4ppqUdtJyx63fDZ6vekkDNyCzc6hZJJzL1G3WXePTfmUsT8tBbFxanzNogEv6nq98aF7XbCQs2971C6426wmy6Bp",
  "key35": "34Nqw9Srn5CTUALUf2FLZXV7aBeKPCi378u2DnypysoqTodRhUSBaAv9zXpL4GcUhSaXdqu3YJAfDSiGVAjGArHa",
  "key36": "4PfjDmSjJRccSJBwkwAnGzWZWrHkibtWUR8yS6Lzcn44HxBnjZSSfDTE3WqvH7We3JwLZQyWrjykyByTyDy1kAfH",
  "key37": "3b2gackKdSoJ89RZMsjC4PAWcvi8Qw6d7NreMHhsHRtxgm1QSHCYN5BRe6dtobxq7rShQX5FHwyjusUm7qq95RHP",
  "key38": "12AQWfZdFbtMozqRM2BcAHFxcPFEXL1TK3mZpZEuBjj2MJUvYExoPzU6JboW4r5MHmaZCnGDgpPwyJa81JXcwda",
  "key39": "34sGjU9uBQ7LHbrVsHW5GVdai7G6q9NC9841VGMYLxq4NcjQqFjo9H343aeDMVhs8TiHf7YRmz9yjxvLLSfMRhMt",
  "key40": "2bxjNhpq3WfghU4XPxTbJvZTZPPpGKLa74f7DBijjZgRmH5wYeeDzCVACZxZ8KpManeSB8HyzYgsuGSYW6FGxhLA",
  "key41": "36yH5H972c4AjSTpDjAV8ho1ECc3bndWvhq2pp6BXSfG31dHzSKgwUx8HKRa8z1CzprXTjh5rBTeBDmHWcnS9aXT",
  "key42": "5QAkzDYJeJATRskrEgzVRmno9GLWpYEejp6ypTVzVLaFQBxBuKq2fDhYhxzL5hZXzk77scrjmqbpTN96spGTSYAU",
  "key43": "3HW5msLm1T8xGWC9iTMszPVeJgWTWWt4GLRamMgytBc8BU7wiAgGkduqWDVVwxnwiBtS7eyubFWSuPFmvQAo5yah",
  "key44": "4MKNfw6Nygi8X9anj7EixGbyqDrJEi6FnASAuWXEVXpBmGvrdzw21Fux9ws8PSMpxnaFBZxiCxPz9uF28xtWM6k7"
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
