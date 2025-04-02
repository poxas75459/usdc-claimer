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
    "kt8b5FNUG3o1qVNmfpVq5YYy9Yz7JuUdFh14zfqX9ygB75EoNmjVr9o91ZoL58VEJPdiq9FyKWrqJwbWYp8Vrc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S1rhenq57kMCXAdBxtNBmCrKdQpBnaU2MyKiY1xGFTpkSdJaix524DRG1R17SsnJ5QANZBFVggAcwtWCUgJd3se",
  "key1": "44fQDiGFxWUjZwsRrn8Jrpqgr6De2zrJ6TqEKa9rH9ChLs7BVyPtAwLWopTt4Ld8tBPiKfbcwMpJSsoL5h6oavqK",
  "key2": "65qWLo41bHWL32TQBaEeSKpTJJCYk4aL8GnDrPAR2XkdzJeMhFBqcV94edWxAemysQn4HZdJaw4npH1YkfVkSE8L",
  "key3": "3NunrVDfCMU4akrFDSx4owKv91XEiVBXypjBH6e2GTHiZt7rPv83udS2JMLqmRh1GSsgRyuaqDpXHZQVPrDpeLuf",
  "key4": "4LxoPgup7L4m9jWvk9rrdff5XKesDADheMneZiRmNkrhpDvLiQdJsAkLk36mi57zuD91bnq8KFhPBPUpLvzS6F7M",
  "key5": "5LqcpQVTU3wDBjWKhdkQFzDfdkSYqVhB8T7SNcgKpTkmTGdZfQYhSrTXhCQ1fNuqHQgG9zhdqHWF332mKoDzskqY",
  "key6": "4ULbJQP5N1y32igPe1H7xQD9528u8EQDdSVD5vXwHCquh9L5GMacS3ZCHuHAJ6Mik8oZeHA7gjJy8RB5NVBcSgF",
  "key7": "2rXbVaYVGA26DJsZYWeSjkUMRT2FiqtNgajY6jrofKVNDy5UNqWseqiRwfZ9tAenf9SYWBXjzkfxnDQBQHPjm4Xm",
  "key8": "5Gc1P1Hqhxbw1jdZzA9WfeDKKCWbAx9brPQi1LT29sWh5r1TGw4P4H3GpQBJ2iP4ZxcC7TAvWf6Ff5K9jyuanxTZ",
  "key9": "5sDyVdABRqYbPvRKRpKdT75rMpPpi6nRwHrurwTtUCpMX8vZVSUZxrCpumFxnL3VZMhSvoS7e4cncsaH8MpsRQAK",
  "key10": "5vdw7R681jxD2jimKkneWsdYHjiUCUvnBZajD6ENyfrNeQipeKNo9GYq9HYw18KF5p7KdqwqDnYoYynjkXuSnSUr",
  "key11": "4iPgRQTTfsR6JFqyUN3ZVYX3REa6WpJMseDPbFn86jaPrE2XAQWX1v2g4XFMTUxqvhpEv7tSWw2VsAYUCZ4PSroW",
  "key12": "4QHf2oQdjzdKA1aTU7koy9QJQnuXo8CdSRsz7dLV9w5nc63mkNQi4eVshwgaoEyRWeiBZszg5v9fAVUAwWPp69YX",
  "key13": "5G5fgWv9ESWwyQwNQ7xNgq4BFz4LSmW7sZzAsfUXu8EnegG6CeCveCtvCXEgT4n65bbc2gQ1zLHmHWMA9Q7vRxYS",
  "key14": "3x74dpb9XoTXSQ3LRbZU2mutnuP6qXZhwpK9jW9HCCKyUQvr93pRPQq1xMRTwrewkiNsq1jJZTnbpmzBTxLnEhjk",
  "key15": "2ZoAatHPnUxA44BSHWeWJCEq2gZkXRNa2N7bQhFNeccN9ww6PVWWmtQa84jV6Hrrtu9BbdnaEmw4nR6SUfTCx2kz",
  "key16": "4DcWYL7U15qmePrTwS4MGyfu9zSVo2prWCjbrSSN2UGsVyGKZci5FddaLgKuvJuQxBX3vJM7jXoYStmRRPCv97GY",
  "key17": "pdsJsjGyMmLc9VwbiRF8rMLQ4EHZLaSW5YWGSTEj1TWcFa3YKNJBwYvNcF2hMr96hnUD46ocGWzNspLiBsyhumg",
  "key18": "27mn4eTckYMNUgaZvWc2MDHXJJMEUBEt3QSzNZHeAu5zKcwnXZE4wBRyabHwrw246MNy9dszqaQSEUjzUuWAevta",
  "key19": "4Qs6nctAomjFsvjTnBmaiyerMXov4NN28hdpVKGuLUC5kBrrJVi5CJDYHXYRLzjjcViAYANZH7fHBXzy3iMAvPpA",
  "key20": "2h8rR6znx35fVdBHtsrokb77UmziVTxuAQGxNPf4Z3DgKs4ijRiCA9QZgrWvZQwLmxSwYKun2Cv1EK2ZFzJYKRzz",
  "key21": "wEfxxgA2spqoukBTBaeLce1MpSJjshMHKzNDCFwyQaX9kwQcbHbpx3gBSxV7Ra7KSsPvDaub4mAh67HQ4MrYDqX",
  "key22": "ETuhRyoGm65zZq1mrVfhhsK6maY5q85LNNGL8UTMm3vHUbdUfQCD5KDzSHjHENAugQYLcpZEsy2zTk31gLhK4qs",
  "key23": "dSyk6NEav8aLWt3NsPxzwwzpqE8k7iXBewVqN2jJm6T9GiXKWoK2qzTawQV22pFjVa7cEdLgs3nQp2RmpmAr2zC",
  "key24": "4oAgQQT12LNUFByBqEKeaW1xHtALkA7k7VScKAVYreYBJS2Y8cDa9vKHTEL6WzQeQajZAH47QaJBaLNozcSFUJAT",
  "key25": "55JvMB4XqcRrDoPtJrTDKBuzXtzMFkLsMQxMd2eQTSiykRRw4iPFqy3epyewKnjeJpoGC1SKsAZQNKZ2zgnGfkdd",
  "key26": "2YUxL272XBDZTvPhqUAPZ3n6au2gosCyQRWdiXJ3nZTSazZRsEqE6KsqqrABGSPF5ZMf4DfnLfovEd9UJPD4SXip",
  "key27": "3Vip3WCRqp2uzpn2LQmTXsTVpizqGDZnh1NmcQQHN2Gx1qrZxLmVrqHN4bDYM8v5E2kuygzUsXB5WohZdZj37Bas",
  "key28": "3G4rgYFL2oa3eTWzGrGDnTG1XjXbZX6Chibg5usynafBU4SfbfejXotydfDXPh9rz4z8DKXtSjwAAAT8xB3WLnqE",
  "key29": "2i1HYgNmENuMy73Kft1dAZYcVkvQ8ft4SyfGyD9hwPQqLbbcTeikzUz4yGeuV2N4CiEe1FJTrkeRssYwgQaWVCfQ",
  "key30": "2B33trqnbRdgMwKpuyYVprcdMywQqWy7ffYG6TaVqGYwhDioSDDDjr7XU2MsHRRUMuTE7xBLQXioxzjyu79AxWDF",
  "key31": "2Nn9VZ9F14iNNyU92MUr9SyS8xWxzpDWPRkUTqxY1M9fVQBya1UC84tjud7ZXZCT6NoYzk2tNXMcKWbrPb77hEXa",
  "key32": "2aKTAWMkv7DDPsvi77oZqBDudESrtf4xkzpFvfUS8euMescsftvpmHvrdzeFXAmhGFi1wgAbVxNAnectWxogNRNr",
  "key33": "5HekQsQwAFyjx1VHcvHm7iGYDwjL8WF4SJmbVo6txH9QpoyNUgHqdEELYdJeecdZXXogtqj3CvWqbnjKhc4bCP88",
  "key34": "4XaV3tL5B1CH23AaEDwKBo25D3cDjPFoFnm6nkbRXvVXPBJXdpuhuMH77TW19LVTD32Xyk9ewnsnev615onBS3rw",
  "key35": "5DPbd4qpZPfaQcx3JRzvTMVssRgKnqSDUzQ3QQM4Kp8sz1G73S9XAUKKznr6TnLs46pkhQu9rb1MVEyVwiNR3BhQ",
  "key36": "emtYstqw9yjHvREwTeXd51JYKrtMD85WQD2eR1DzotVpMg6D1EsRd1ZTWdZ5FtMe8dSkaQpsWs3LM4ZiYnGG9Vy",
  "key37": "BbZTUadojSs3bm6MY6P1HqsSuAFw74bgFzygt1WimK8Seg9YMySZXUrVN1LaVii9Ewci7rr5jftbcHkXcTFUXpn",
  "key38": "2cUn4QnMaEwu4SAwBf2ZrYucJ4MxVJLQ198dhbGU5X58rJ9GUBrqbqGudvRDLaUovdRLb8s9WDC6MyeLGUh1fKHU",
  "key39": "4FwxHkAZKkuNr3547KeKGgDqbfby4Tzc2swovd7kjMY7uSeQAsjfmWJwMrNs4N2MwHugsmUnNGN6fmsZzAqqbgkQ",
  "key40": "2xq1YNcnsodfihzxmCHbvKF6hVg241ZAHj8ZteBx95fean9iX4xRwXmJ89vkMebKBQJ4qdAtwWDVkNSeSymXHNYL",
  "key41": "5FKNLzfRYozpRjW2U71bReQWDEPiHURBBD7ZTg6vZ19zcMekSZsatqbyDtV4XmNgLYYk3uw7biihVUByFPGST2KE",
  "key42": "2DWDWmRetYsyDYAyhXJUKb7HUWKThNVyDYUoGUtaaUk4iScpGr4Zo4pYhuR5BcWYAohdy24NNVrqAEt9Gdvn2UDv",
  "key43": "qEuG2iqaV1wXt4VUKvYKnWHkrG4LfExS8XaFcqShUw5uHERg4mW131vB5ZwcnV3qNtJ4NsXPS7nM2hp4HUmruiB",
  "key44": "4VAJLa9ZNWe3o7oFX4pjHUiVqwbG73bSwsFVsZS22HhS79qFvWdxzDacqxLgFzUxtrNaWgX7d8DcsGrv1u3ngM2m",
  "key45": "2p5vnZm2EWgyhtweSRDzsbsbScZo8u3jHbKZKS9CSbjNmAqRjxvYcQ6c8iqEEtaDzxS8Ae3GF9KkEVVvgPaX3rdd",
  "key46": "5E5FuCypcCZyFsC7WAEN58yG11U2pcM7XK5KXWdNThPdtMjrZ9nvNmPtLxRJ1PNtfFd1W4sp2gzRSkCLz1dRmegs",
  "key47": "4gj8cAhAKkUneYUVoe4xUayV8GNAT2wWKGuQgCJMChNCZ5hpKHdogLpdUCdHBRNqiNenGDRbwXJLbzGBr352kPLf"
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
