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
    "3Sjsz7ULpSeM1MwaeLEWSxADLRCnz4iJvYmf4iS4Pk9tbt5Qf3qqnK9oAK66qFZjP1NVzAHMpePGDqdbGNGWzTjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JEZBK2nNj8nv4eN1DqYxwUzs5VYWSvvnyMbiGjgpizZxQhgn6NN2Nu7MDYhuY7QdffmnWhmPmwKsKKMnX2vHox",
  "key1": "JsDJ2YZtw9m2GxFzWCCqLyeAQ35nV3pkLNDoHyW6TCu1g8okyBC1NGq7yFrtVMP4GHdrDzp9hNJ5B1SFCa7Rko1",
  "key2": "4XNKMxW2DQ7kxUoZfR6PBbwxocrFajvhscLbf1USYZhY6DMUHr7B2pBornwpBap8NJdreh7N8KdqWQvLQ6cYTbC4",
  "key3": "4Lk69ZV88gct6ZckDyywNFav7VhCLZy4nucytpG15XmJwMDMULVJ3fh4J83yiJsfM3cu7rWD4YQLYC7hLX2EAdqV",
  "key4": "55axcESshPw2NcDZ9gZbhqZtQW1zpEFBxc5ViyVRaHazs8RY1EfBdbbk2fiEM9WS2sbjfBoaznTYFj5UuDmtB43U",
  "key5": "27awR1Urbv4wkfJpvYaUdsp36zTczmaWonEFChUc1j1mvXsiT3Vp2NSod6VJALsQgkHnkwZi7m5MkLmHEH6SxhEb",
  "key6": "dz6DpsSemENFtFnsBEQcWjTDH9judmAV3vSTHQ8NJBn1NJ2ZJ3whmCsVuhoCQJT5oU4F2gctpADZW3QY3nzHa1F",
  "key7": "4SBLaysEyas7Yedfkdysb8bBBV6UkUM5CmtaamRZPv6HsQ96KNRM28zT1MY35jP4EvS9kPEmaBZYrXKiL8GyrrDL",
  "key8": "5km2pk4PcESsCQdLYDhre5uxhXj3NdMA4aBXRYqaiFJY8UL95ECMBb1Tsqotk5gHPJjoQnnYQU9KbhFvVGRNB45S",
  "key9": "5mnzisiRREfQ3rvFn3Q5k7DatWnFuzLA33uJ565GjuyNBEuvniw7zASLK4GcQWPfMQVq2Th8CU5PnQStAgad1Vu4",
  "key10": "2mByS8vKsiaYqhoAZybfFqLcdVDdnU7JCKXQ2bUo1ENkP6mw3Cu2iebrgtivoeEDijWVFw8UwXvw3sFZuVDrC3Yc",
  "key11": "4JxDfuqhy7JDUNi8naURBypPd5vmkJnjGfy1G6KjHkSAUEZri2UDLnJgSJHBsSBkETqrZ98uF1Aj4hsuwNnnAui4",
  "key12": "diNyRfCXU57NoNzpuJvBXw5g8hELUbeRSRx6oiUV12cZ1NpaZ1sy2hiHrb8CTKWaLSaX1ZVp23BF3ddWRpG9UNt",
  "key13": "jJLKCM4EQy2Xesq1Bk7sWS9tQtGviBzrGvpTdcgdBb2QWow86BFvHJ8vYY5o8p2ZsaQ1nA8V7mdeDvLmvK3KBVz",
  "key14": "46Z4T2vYhFH5o2xSDmJEQDDNrXnSpNYyHD2QtRZ5DgXUgNvFNoyvWVUQXQ8LoApyU9VJJHQx8e2hviCzLQo7De8o",
  "key15": "2hd2q1DFNXAdQSbeMLTJ9hgu6aqWjSuHGw2XyGgVTG2ZdijARLvRuxzEdcwGWhEoREesXwh4QAFy5B71EmDnJKrv",
  "key16": "3JsGm2WCBxUWkcYUbkV1xYGiDKVapdHeS1PaiDCnieT2gDZvbeqTevzVMJd9rVW66C3f5sHf2yESbDW25bqWLj7P",
  "key17": "4UKe2BbchpNw9Yab38cEtLtkpGY914FczJAZbDuPDV3SWFFdoMEoiGTKCzn4RP3EXhZMEargEXP3B6zu2WeQ1ymM",
  "key18": "4gzFKaoPzvNd4rB38SFnnjmTuMKNF7uMNTSZyxQZChn3ynqVWB7hsfpA5pfozwuYWkA748AtQF1BsFSQuzhcaosi",
  "key19": "5vQfDCozy9ajw25m5y1ihGun9ZJ57nvVdgvs9ZrFxARB3bwxs29UpjgR39CUEDj3Dke77PosAhmmCmPFgpLK1N8u",
  "key20": "5XqFUtpof2T2Yt8ekfcTrff3gUEU9hZ6A4h2b2VbtXymFagg7zDdpM1UQJy2Jx45rhYuHVvTab9rTk3rP7FABK9y",
  "key21": "2TCSSXCSN8s5fyFUoMmrUH56YP1yRg7ckph8AaWTWF1Me9dnY543vYncptbgJvz4Lpi48eeewpGx1625zXDAMQhT",
  "key22": "3K7eUFsmxmYnmSGY71fD1BUFTqP4nAEbkA5aY8kXdsBmKkar92yPTwWk3KaiLhDfYDvkBYuZZSeGNhb9Qs2JsD1u",
  "key23": "3pvhTZvzEA46KHrmYqUHqhzop3mutKakhmj1gjvpj8gnBeQ6t7wjhwnmHjUZXzAqDF5KojigbT7X7hg3G6U9yXW1",
  "key24": "2PKHXB8Kq99ZuDhr9EoYGFVD7NpHB6un6mvuC4q4ukkhrSV8U6tHCH4JdN3f5BoqUQk67qe8pk6Vc9CDDJnPE9E9",
  "key25": "47D69cwNjxpSB4Po4Qu1P4WoKuabxtKegKLPkpx3a54FKNxEtRxakXMdaLW35mBSPZhkgL1EhTKw2woG44Edr79A",
  "key26": "2hQswD3sG7iWLKJe8TLD1BpabHLf2J9t1EzuWtDYQ3yumtUN3gKMAhcPPCxPXZ2L2rKwS5ptWU6ZVVu1PAs5sCAa",
  "key27": "2PegWDH1fNRcKTtCtE5rr2YKVWxKgebeVWjmTxYKMKroFRiCy3YM5WoZoWJXoaZWU2z2dPB2UMsfqXf6jJbWJgp",
  "key28": "4HbE5RqHZhcfkbzBB2TxNBTSKurLVvVrgveZcZnWjFFAUuPLF9PWmfkWqMBTu2ipUhaiVsbBpzmJ9hfh9RfC99YA",
  "key29": "2qPqCdFuXEunZVh45rcY73Nt9Ut96etCn6TUwA4jNJv87iGNyS44nkG3f1CBaCMaFNeKKqZqVUcwPYJ62bnoV7DQ",
  "key30": "39hsRiGHTYfofqVg5HyffgyWsFtxYMJxecsHM9gGph3xZNTpB4RBSXU7DyVKM5UcZZomvNz92Uz7Re37oe2toR7C",
  "key31": "2taYW3riuAndYTXKpyh8obdJSu2GbuLS8qmAR9V3iyQoAey7E4RkWdY69ZuZqjuwfXMr2Gc8tE9tkFJ9DH6woGGb",
  "key32": "29wic9dKFinm628E1K329AeiZQFdHP99A5JiZLJ8Cv37XHiidPtzfMrdNPffwhsnNpBKvr5xtd8scZ2XN4Eec3L1",
  "key33": "3dP5neoisFFCBp8jHUnE76SjaRM6SE9toEZPC2Bjuo522LE4ye5vWFcPARiKBRa8LSL3SSQg66ZvLd6ah6UCBHu3",
  "key34": "3mq9FiqpgqcvMSMob9wKBZVyzqvuLTxcCNSVQyt3SVpGnVVG3j5mBtVdxDkZ8fD9CbFa8gw9uySnx3BUcZtyZZZY",
  "key35": "3Es8ZTvPgzTMSucKJmmSn8QL3UCLmsCkd4U7UnUaqnc2w2xyTL6xuggzmLKmx38xiqmu3ijPCQ9wPngJiopvo8L2",
  "key36": "2baEPBSzn5rRzcY5mJWk4LwwAK1Bv89nCaS5S6zNhyujqmA6UQdkSgK1tzck76gfgerZyaUnbrAc8sGkeKwZjhTB",
  "key37": "xSomunvvh47YWcMfxQoXr4DUuxXChueau9S8JVZsYU4z9njZkipoeyDKPKHgXdwD8rS4EfC3B5Z1DxRd8QhhvYm"
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
