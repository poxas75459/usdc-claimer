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
    "NnL2sawVUKkv8osGHTRrpaJ4rrVJxpoYBeU5tnQch5zhAxzNJFTCCjWnQeuUYaxifw2Kavw7C18ZB5Y9jgyzgPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24hgGaWRkDCx5eMTcPSWo8DtfDBgjbhwUTj2Sv5dd95GqvaHSk1FuaEqSjciHm4XCVD89XjJ7eto8GxeqoDwQ4Yd",
  "key1": "xrh9aXTycAG6U82g7iRM88UT2ju6p31CSBi9hPUbVNCfaj2G3nxa7J1T8rtHjb3ZEwCYaiqb1iH5nVG2QmK8zaR",
  "key2": "5PPSUYZhLzuJ7aFAFV3UBocCRfQFfnVG8EuYAkudZJSoFfdT1wJuumSd9mJ22T3GHT173YsZZuL1AZPackxYsStB",
  "key3": "2ZNjztN5rduxmxEATah1MDJwxTFDH4ixZmRb43eLZHTSWjrisdyUCrQKaFV5BZJY3ZqTf3xcHFz42q7nNi5N1L37",
  "key4": "bJXYHGj95HMGmTq9SunJSNBbbV8TnZxNsW39jbRFYJDrJRJ9LKvyA9s7uKxCUAUkCWXQyPdPz7sZk44dDrzYgWf",
  "key5": "4rBTYVjbw3ioXj15cYwPXhHtSfQ4AE9eq6QTxYULcTYohURiEMDuZPU11uvddHzgLucVKUZtnTPrBKJVaVAt9qPw",
  "key6": "5L63r186EUmPewXqAtw9ENdX5FgYKjCac6LZ7owu8Qpsjpzo59nRZVkcQFEKTP8mfYf2Wk3uDjnmJTfF9Pp26K6o",
  "key7": "5U4qqU2KZFUdqdAfANESbKDXzdn5zEzK5AsBa4xY9Ats34o2pdkE3sP8HwdrjBUk3m55DQ2kHGC5Bhbg7cTUYf8K",
  "key8": "3WXFacBngnrFxZZ4ymauSf76qgYLiVBrgvfDjz4TbmskxwFRmGMmYbRHyscUUc9qbZhNJPrf5XJyMnwzYnbceq2P",
  "key9": "2ZDNmcmezXnKCu5ZY5PmhUKELAE2qtGbSqe9oqg2Uk8uHcwjC7SWZZhskmE1cLrUpMqwCLndzWQQjjHT2EcaAbgo",
  "key10": "5Q38LeSBxpQt1RnBudSsXmSu7Bv27mzd7JEeFtddPofSjQoTeCneD66NyoQtHMbUKjgnnBqQbyyVnQskT75dNzvL",
  "key11": "4TJmL9Lnobk1phBoa1p6vWisRy7Vou1ecjyMYH17r1BtpbGYyKEyXM16ueQ4ZYJpy7hA53AsQXdmfsTaKzHJcSQB",
  "key12": "25WWni4QMZL8jV2PcNHzGp4oUxHArSzjfwBa4kNzTqTANvkjeBwUusPsigX2mRAubPXza5S7o3oxUhQgjQepKfCG",
  "key13": "2crwPg4Ttu8invF9yLyzAdV3Y6rkcD2DSRxvGvGv19TkS1Q3K9gi9Yqw1MReuhDg8rKgQFEpdpmrk48rzaEM4UH1",
  "key14": "bTxi6zfjmJeuqF151mgHHnSem2DdQApMrbs3n6dsoai6Q8uTuneA2MxDxwMz2bwEZdmSqwprraD1tQMWofKVSd5",
  "key15": "vYnKio3hMckpcYSTt4TzYpWr9amQV9rhRdMSmeZckthRxtysMUbzx47T7pxNDJoG3HoziFeLKshNRA97WEKG1Us",
  "key16": "FxK9W8QEELW8JwaEmN663ZeiajGZHCNAfi8eNVwmhCJtUsCmqMoyWypPrDSFhah51AKHSnA4gjSu3VLr5WbRtLE",
  "key17": "5iMqa3gRBoaxa1JBKiZQ663tgX6RAiqUgHVQhCEuX1qsgFfzPjAFQS1Zq6e3CjaSLcTFT1HzkLkMgvmTtKmkiQfm",
  "key18": "2ECvcj1gr7Bs5Qm6cXy8v4LPENNNL4V83sJ4sG6HzohDiDhmj4enqCNk816g6JoQFjpQCHn7hksZEXQ6W96MqwMM",
  "key19": "xry4iiAskCW4k9DRsi5M7CHhTTe5ZVJPVoD1FnQ2EQwRvtLJJGekEZJjnqmoKDiBKC5YmgUzqiSP8p3dRVTfWuo",
  "key20": "5Ey6EYdKBe9rzsxQqL7ig8NybcvzNrU3u7FWzYYwFMA38bQjBiJ58Xm5dJ2m9t8wddDFnLivex9LnEvwGrbhC74s",
  "key21": "PcToixfXuQ5gnGvu1VAs9RYJ7Vra34hfXws8JbQ94pJbJ4kkA3tZGx8CumDpzX6MYz9RfP4YFYu42B8PzidGsrZ",
  "key22": "486PdAS8XH5WdLN1Ybka6kNnwaR71WFFrzSN2a89pHf9VGXtwQ6FDRqWXWtheFXeCp5BbFTp2sAYmZtmowvekcbp",
  "key23": "BMNMih2bNNALxJJgX258JMPSgDxajorUgoRBD5nwMM3Q2rbkJf9JfRY5YJXk2mdKY9ttej3iH4Rf4pKVM3zEwFy",
  "key24": "5Uw3wkW2JAnywVm5durF1WepM5YvqgsPa4yvV8MFMX4E3xXxHvRTikQVBqCzMvwzZaAKsAKotRZLvU9ZNZQfQRa9",
  "key25": "4z59rruXyYc1UoJjy72ki3S6VbnPgFAocefaR2a1czxHRhhoC1HjPaniNEnpNDam3GKRCnpsPKA8z1gRz3iBNHw4",
  "key26": "3oAMX3RR6fCwi2AZdRXC3DQbvnM31WwFTqd5iAAUnGu6nKpAKMEkkHK5vjYq2BeTohGQtHDpzbK8NS6FbmUf2kLB",
  "key27": "atRjFArJvPyNzJAxKFRkv81pNGrBem3wcRA8PLLFJjYpG47gLgD5knsTiXfeP3G2hzxoSg44o9he5bNnDt2KQVW",
  "key28": "2vZuyyEoab6wy4biWjTbk4HLchJdfHZ6t4w7DWPzHTyHKZPKFjsyBdRYNvK8TY3emCkoNMqLe7sptYNo4VjKRTgS",
  "key29": "WRvLyJ4NDRuC1eXec6FusnJ4YvSE6obaxC9HSXJ5ATZdWpdtytQFFN57JWqEZQuRpE81BCmQK884pqwBwfq9fiv",
  "key30": "3iyefASc9bYkbxs4mk5cwhWr2T8UpzFVrAzekXKAQyjyXfHtqLqnsr9RWM4F1PWFzhRCqddvgWepj8vDJeTfm7dc"
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
