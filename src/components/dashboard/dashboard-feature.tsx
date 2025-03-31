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
    "CSLSxMJ5rPLmXh3vNuPLJydfz5dvddLHb5buK5Ckp4GEFszJmoj6aJhzTDf6n7eCGNgdZvgeT4KaWUGw9kqwHSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yivb7gqpPqtoJhSh7QBkuHofhHW5u428G7f7E6pa2Q7QShaHDcmBWhCaPSqfFsv4N58o12YfqfcFtm9zkSTgAGJ",
  "key1": "GhcCe87urGNZh2jfdYsPK75HGf6Lyk7CNujAPnCDtKFxQADdhp2aXiePTSzTCQRt5dVPoyj7KFW5qiix7HoW3jT",
  "key2": "5uMKDhz8ia99WNW4K7HAHvBChiYZUYksYaBaJsqGC7VUsFuKXWyw4F1psamypWHEvszZcEGaKyWPofB1C3wfEycr",
  "key3": "3SDpBPQGnmGYpkiQGFHYZwxEKyvK2YGh1HXJXvKRzKJR83bLihsrA7dqo9eAZuGrAgjw4CEJfFyJXnZYfWHuEq9n",
  "key4": "5kpSbHFNVbettchUs6DYzaDJm9ePLopYL77EQRTgwGDxxEhLb5eZ87Cms17videSsuTwT3i2PVHU9BpaABzYPLy4",
  "key5": "XEVYocLnv57LSQUeB6UbRsYXPnYNJxycTPrmPf8MAV6RhJHbtWPLM6VNS6isdwd3VFBSkZfTBBSdQMKm1hAvVw5",
  "key6": "jZVhgDVtcqdGE9T3fBgkJp51fsDgnSiBiWVUoG1j2dhEvgrNfnvqFeLQqouhJ2Pe7fGtUkTh6A3NV4WsLXfuQrs",
  "key7": "38hVfarSi5LH9GnB5H2XFPXgzUH5XeJEEinK68Q3zW9MmAzk3qe94CZ3YKQPcaijoas1bzLtcHAgPEyLBnRmXcUc",
  "key8": "4HJn13vKrXiVpcrcmdq42JvUTnoZzSU8Q1sEncxsirpra9TARAxPobEHnVimtmDtW98gPo8wakw3fFUinWaCLwxL",
  "key9": "38r9PmXXe9bcD7D9XjtwDpUu9oahhuZq1i3QCcnUVY2SHuwPRZLGeKf5cFdwqxak42BPPnpsrSsRGsW5rDUtaAMy",
  "key10": "31UjNpjeKS6M7rLzExT7MujWpDw7Fv9ZBX2zZ94R1FTK6Z66ZLf5BgmcZQiWmUwHuNoYnGUAVNineq59AbWj2bpt",
  "key11": "2gJxA4HuGuSyGmCHNVvkEJfoQSbcpGfNGRNzFdjTxSJJYrifHZjRWS11Vj2cFxrNJCctKCikNwwCHxYZ7834uLNS",
  "key12": "4CDTJYWpqiTcFSEQ1CwUyWMy2CCZWWTqor5rTsdKhVFG7pvCbor8WrDsmVJeZaTkuxEahrcLsLCt4RGL6pdezFyp",
  "key13": "3mdCUCqbQLQEVnKQJmR7A1K93NNfMhJMFDARGVneL16aKsLbU2Rn5uve3vmRjZgkNqrYgvjJ82GsNyrwtF3bxwyH",
  "key14": "2JkWTUZoZZZmCGggNw4woTdKzKU1VmxMFmk4wf3i2BHF1kaGLuasMw8rTuVki8QTTLLZdUuxfa1NosDfdyp3GWeE",
  "key15": "xF3X8bsSWVfQ5Gkfon4pgKagaauFeAHsjMuctJ9y3TuhCk5xXLEWYeoQuTcQ5VXivmTFxuRNWmCoMdzNSSsSSU5",
  "key16": "2akatXhpSJPympnCqHpm1ESPjp9Xi3uRsLZrrCjW1oJWd1fzyv8hT8jjRCyKQcRuAi2pngKGM5Lz75Nc7bB9kKBj",
  "key17": "3D18Jw6J8J9N1jTXTBdddPpbqWrFhTituRvWLtjdeoWraJ5mvZF8asgc1qnMKY6SLsPhooqp2VzNEtyLUMdcMzHq",
  "key18": "3a9gZmWWD3ct8BsrpeMcH4ZMZjZQRmRCBeQmYryczvvzt7eYAk4vWpAsKHkmBGWtDN1X6uUMZcHqGrMEdjAokFca",
  "key19": "5JmBb9DMX8Aw7YbvkkeXsbL1msZhMXhVawucWVb8gwhoHXGE9NHquMXSg19AY7gx8yYyWAiJT2BGnKvJn5TPTZew",
  "key20": "31LHEzcUusLKjvigyZUMag6hc3WmDtUTQFadELK6SDT36qZ5nYjqwZLNgWJekfwzBiQUNY9rjLg9Tpjw9zvFSetw",
  "key21": "3hK3S7tZoGSMtitvuUvzHMeciLibY7QsSqmH36JpttJ2AbUco9D2VqfCM9sG29JxsxqzoKmbUHXSvvhjgXGz4ed6",
  "key22": "4dgZCocaWiNvu9ihxjnAVp1JM2Nkb1jE6vqSdW6eY1qjBGhNXdup3Y1GDtFbLCYtvku3kwDxiVcFAXCcRijVrq52",
  "key23": "3Bxz6hBcd98HXNKBM9yos8mpHXW6dtX4CuSFaRRh5Xt8E7wXkMXXpEAdhpcwq8MdHLJBkRTCQQYc1fYULNi26W16",
  "key24": "JqsEiHEqegSK6c9GKxmMW3N4ZfTQNsBvixA6UrBEWWNuXTHaF8yawmVGMMH2pNs8fmcjhBwq7y7tLQ7CchgdGPk",
  "key25": "54YxEZKBw5Wiq8pAZj1mBGiuXtYt4hauAbBKM9dFQmw6RaSUJcm2q3qeHTnqsdexhq87b232PrAvZrqjEnLMNti9",
  "key26": "2vDKRgvD53s3yvtcAF7wb43EXZ8ii4Ve5HruVmri3H8prDXcqhnUH4nUiQMCsA91DiWD1hAyF3tMSpUmo7YmQQ1v",
  "key27": "2dSpB45AoEzeaNDDxFMjeoMubgXJ48Y42Yp99PcR5RTu5yAGyZK7vastPJ5fEfY34PUdBjrnMiyfTkFUVkj13uDo",
  "key28": "5TxvaJ4gkkbZ97nQ4ui7eh2D4JacGJdtDaqRrdtwVuFWS1SFLQwqD1rxiDyXAyyq3JFuLrMwZzmL1jfcNyPHwJaL",
  "key29": "y4MwPnW3nwZgHNSnFmN7ocUmQ5hhB2PhRhHoQCsmr6EuVCZfr5vFPe6UB5JD41i9VTj1fowecJgUQAWowv5Qqjm",
  "key30": "2cF4wqTgNjvE9xmRwA5UocbTX8RqpCBzaukNhWXzf7TZhSp7DEySkpUC5q84g85bCjpxnqdYZq8fHwwfKGenB5pL",
  "key31": "5AAQSwMaa6PiiQBQuhKLypq3rqREMCaEhx6A3dosMfdJt1No2KL4UFohUnYSYLNfciyYdTwCiV84FgJ9RskRyz9F",
  "key32": "46kFMVpQxK8JAXjwQDU3sn4ZS5EZ8h9KeHKrXnWqNsHFQPrJwL7HY2j5ubjQVXW4Pc4TReo2J1x6ibLHXfMP1ADJ",
  "key33": "MxT2sDzrZdtFtfFnsQ7BUngKRPhsQEqG3qyPt6PBw43f3vgRsA8AzAg4vz9nUBSrGs82weZ99pSRTeoDWqXhomt",
  "key34": "3qjQhjSjU1uhd8LMP6PtQpVDZQw5gtRM2onH7pi57LEHEe2QECBY3gDyNuqL9r3d9NeYy38jUGP2uCVcFcdX6z2J",
  "key35": "q2D9cBRCKm5j2Z7v69NoMaBUmXiMiQy3Zn5QE4Z8AGKNEWPS4PfvoR9hXzk3FQ7RUmhzx15bCAo3WN5xDzPnE9U",
  "key36": "21xE3tAwGZyPmrkR8YxdYbjMoYAGJA92TkxepauXfJcDrrKxJp9sp8RAtjWJybxoNLKd2sAbW4ikRscYVECERLBo",
  "key37": "3eed5bH1QAws9CcrXodsnfLGVSUGzVC2Co3gWcqFjjCKMfBBfu6aEwngG2Zmxz6epbpWFSQRozxwGNXvyKiEE9up"
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
