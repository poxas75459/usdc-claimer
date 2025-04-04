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
    "2vR5AjkbG8A2hg6vHFeSADoMjfyCm8SBdusT2gYiDJ5eTEDm3E4TyZxivHhpr5aBQPyUiGvPXu3t5GiRcFoweFeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r6ErUZj2gCWporKJoMWeeKBUEvKP1Yomi4DBboWTkBuuh4t4KSe4f8xQaWnKTTDUFrujo1f1SGhEPcQMgUMMu2o",
  "key1": "5qCV7nBkdSJJmNrEmMAx7akoBMxyNf1MYkrsvo9CsywaVAPmyEQsKryDMCrGRdjXdrmyid4z8T9dw8tQxYvHuvMh",
  "key2": "2iuxWZ2DUVM3PRmabqYezQ2aDeLNhxiPAyUf9NxMjhxuGvCtCvSmBdPE9kiCccg5ggJhjSvjS4PeuXVzfDcRWyck",
  "key3": "62zAr5ZrNezaginF2ZDutxukMr3enoGPnei7tXdo5Y42spSDUrVEex17efi4sXbC3QwjW9F9fdRfxcEwCohTGWxE",
  "key4": "vchqXWenWMn28EgFSnrK2seMzR84SzRudLoPhE7JffdDMwvdWt8DyMKHTiybCdtfd3ao6PcHz5UNtvQeayQsPTh",
  "key5": "JhbR7nKuJL5TAyTDNMCEciv8p26VXt9HPKKsvGmg5mHsKaUUNgKV5mGgYfbkSYNX5KD6LRUvFrbsaxypepmS6jW",
  "key6": "5LHCZoC4p4vQuRJL1NpeZMpKyMW7RSrbhZEFVVzoK8GsH1JDBzq6Ej5xG14zY3SLP55Ufcoi4XdoN2DreJ9G5M9w",
  "key7": "5QX5d6hsrUvQGpymAi6v3BfvYYb8WBp35DCNq7SeHR9njt9xQPc8n2Z2EBXJ49874GkVDVBV5HbBEoYe9En8QQ2H",
  "key8": "5Eq1JEh8Q9zmgFZc9gwLbAZ2apBuBJ9pDY6Y7g4moBmDZcjjCNKL67f8rvjpPPR1JSV7d9tRpDabRT8ufMgQhSMt",
  "key9": "2WXyT9Afm8M596rRzYaioihH5GaKz2nhsteCYtBtXYQ3HxPPu5pNEjCYKEgaWpgt6DbReZKipJeiEAf6SsTWk64k",
  "key10": "5FU9M2F9QPF1BUh3jAsoCvARaSSzoAv7qBN5nKbLefkBy35dfsDMGVV3ZQdYcGVyqefLjJ8PkqnfzEAGQWbRZYDH",
  "key11": "SrYgbRMVeFYjBaxfVaGEFAddA2vXcEudoYZwe78o6LhdDdAHuzARk2ZY1vUURBbGGzCT176zKD9ktZvccvm1jpv",
  "key12": "4bfS3uhSY9Lg1AQEcZ9YeA7Rv3NRBbq6GvUPmAtq6nRVSzhTdtMqoEPc8gYAxKJSUEWBduodcRvgmbLVcJv2eviA",
  "key13": "22GuEGnZLXzKpdg2fWVCyfySGAamUMTdgbNVWo2PkThr9VDKPESQUpL3Efc1dQLFthxw8VX2Myfbjrmsu3BYUtms",
  "key14": "2trX5gLAfUY1wMukmPwpYWbhPTApFeJRH1XgYVu4veUowqtL3sJJDma3s6aHADRTYWvpYc1eiT5sME24QDn36hDy",
  "key15": "2uqX1UmPszhREftJheMHqiCPUfFpdNw3GacFqf34kuHQgjVyg7BABMNgTiewFjzhVpH7FV2HAg6itvH74qeiY18b",
  "key16": "ays8etkGYed4F9VsrV3Q5GNcEZkfvbbuAmURjKZnvdD5fFY9AQknmqfG8JZoECVtcpcRJaZMphN7itebDTF2tvz",
  "key17": "4pvj4hygmC4Uc7rf8XUves4P3DhV9N99N1rpXEyjwxD3J4Z2Apjr8g863p7eu6jKHMLvtDUmgAHHuLArPCLoqNpw",
  "key18": "46WAb1Hnc39sQfdzCxquA9fJo3anyNrvcXf9PbkP7bwLc5vA4f1MsvsoUJVPpMZEtE63Z1DtYsY1k2vSaCP8na6R",
  "key19": "51y1p5E7uyWW8txmMNAtGnaSuwh4qhXjcSsddu5ED6JTwe7MxSM3o7dUUxSrfwtYD2MGGFhsSH6v2ZnCxhpn4vMk",
  "key20": "46SHybEBDVgD84ubKXrbUPnrqQPVkb2zii1gRzFYLfLX58qy1eRq4kcrtExpp8e9t2cETfPa6X5dgEqcRzraExct",
  "key21": "5Aus9oWP3TRKsjwvAmKhPtHM32UmxEkQM213UZgnStH7dwapZDwMFdXvzLogRCjdr43yK9qNJjbrfAUePHn3xwGq",
  "key22": "3smrUczdimxKb4sZaKzct1t1pVEhweh38BpvvdfzjYXU73mY8rpuuQ9qGLL7VGBLbCfTHcYq9Kmq5BJiUB7GBxi",
  "key23": "27eNHbudQbohuEmyx76FiYaLyTS5KQkz6REA1d8tadYXf795XhqT3AZReerjvtSEPUL2YWJjj5e2DefLcUcaJvtf",
  "key24": "4Z4jo7dJGk3J9WX5UuL2X2KEKqEKoFj33bDAtoXZ8v1MZTDiDmjrEmxr1y7si4NQo9DLFmBoLK8CSt4P3zP21s8R",
  "key25": "5T91DQM8PU4hnkJtcWcuPgMKQgu8MgsDyZrbgyGtvsLbc1cokJCTxGjJXApbcpwHyPchpL8PaM4FZK9zeD4WBLYz",
  "key26": "3JZqwKUxjFvQAYZ7ZyuGZfXwgbaZfbfeLP223QkAQdGv4Sc4M6Sa8BEKYPPUNXhHW6PN4uRbAd9qJNTZxMwyQP9h",
  "key27": "4LWH1QoD2GCrPz68aNMQEcsC1CggEHxfQZ16zYrRqucsewpCPfkUGTMdNLwp36oFik49MdNbaZ2igXeJemb5XxiX",
  "key28": "5swE3XTrBXDTv1mMdpf3iTSq4UMoFYKwC3BaSAmmk1nc1ceDzRt4W1Ljy5zWzYkf163i1N3F7KB2yAxuGF7KmALG",
  "key29": "uBhQQLAb2i5nWn5nJE4LjitxLTZHYicMyo5tennVrmDgRxSdSRAXTiU8iFCaJFS78nZzF6VwWGHq29xoLLjwhG4",
  "key30": "4NBaudHqR27C4bVKQrMAq5ibNcHKi1QKPWzZ1NUQvXGDd5YrMnYvyrnZwgNygGS4yRuVt7qVm1cEetACQYQAB2Kf",
  "key31": "3d9HX1WVtLGwq9d1dk41srtHkJN4gQf5He8FyV5mnGkcFQxLuF9JCoB7GPnsx1bXLYWbv3VPT2Fikk2PizvuzqAs",
  "key32": "3ATb8yfua1XBaPk861AL8jyFteFFERRxWFCBS5Dp9poBhVNVot1wNzhZZVxGH76gRkLQDV2ShdEr7ERUJHX2Q5Mg",
  "key33": "3odtUbtH5zkeg5bBJLHcEnYivN9gTUYGA1RJJfCsP5PaSDJamidE9L5D3gZH99r6ZsiBsizfFfYeWQ1txvMYKm86",
  "key34": "32DjJbfDMEiCQ9sAQ5FdGciaNqJg56sGfkFUiXtuXpicJSNBMaMAm6XxzfEWLNWibohhb6AUtUqBYm2mAyuEiNbv",
  "key35": "5JEUhwZPdaZX45BwpFMYxFAG7KJJVLEyghvK6AgaCKBw61ddLGD3iUYzg4b2sEY44YJ4h41LurHZktrLYVqYZ3AN",
  "key36": "2Twchv6NDomKKCVJ3hFs2xBPYXMV5Cs8mQSjCPuF9JWXidL74ir17MpC5CEbm66RUWgvyKKxYG66gQQxSfLKnz3w",
  "key37": "3DJDTD48vKtPaXdkwmfL8ospbmT28gBgkcph1Xo16DcHCZ1EzcMMrgKAJ4FrqStRR12nQ97rKmEW12XXNtpvf5Pe",
  "key38": "44J9EYryAZki28ECaSJHAZfg7tqX7tZhCx1E98ZNN8nQNsSGQvbo9AcSRUB7zuYj49nxLWj5cWBsz73EBqPvDRUh"
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
