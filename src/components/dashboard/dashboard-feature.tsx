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
    "56yA85PaeF4JEE2edvicgSoxPMFkwe5P9Af26uF5ka9aRaJozoZxV5RCUa4zTbQFxvEtTCF9hCvqe1mBG8zvdxAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "htTrT6MBHRM3iHhry8vk3UdpHXjBTphByvNkAZUZSih147vxjt3RhkCmC1sMLLLMC6i1NAqq2deKE49aQfp2NwV",
  "key1": "4v2LAeaSDbRYjkMooBaQDgunxunpycT7uuSMnZ5vVgUqiqRmk3bgZoC3UPz4G2wmX4bcWc6AsGyuUbouugcJ4dnZ",
  "key2": "44hZAnqbEJ6ihf7DYNe83DcC5toyyVVtLYeXtFL3hCx97f4gU85AmfhFi9wNfTFFZwUPTTm58tn4b7AYJkAdjmr6",
  "key3": "2zaHpmEWUhHGbLt94HEyGH4oBW3TXsgJ4TrXn2SNzCYKD6BCcLXrpBLXbrEZfYKKKUhMoa9F8HuKKX8LzTB5egRQ",
  "key4": "2TxNwfgx1a4iC9Qh36UjoLF3vzUEJwxSyZXCdWuJPzuxCzEPtA5tPGmvbmHbMuQAMsCdktVDR2SZwodS7ySSbN9J",
  "key5": "KcqaS1oRa6129s6ZTk7qyG4eZ9p5B5y49NxDRV3HufnR2H6KZw5Q9y2RptdCb2YgHzhjwP5aDTXMecDFdsyveLp",
  "key6": "4LCGp5hVfg82T6G4FXD9jTVT77kcmHioyDknbJ83n1inz14hT9fuf7pL4cxbK6t5VUnWjdAQ2SD8AStC2mf7GVYc",
  "key7": "26s4xDBZ1WdXqmWBTPSMFGUHwiV89peoJViEiow4WJWdgorotkc992WdWvUePA85Jtv39hvKL7xyWdR58vUVtMSK",
  "key8": "28hEQqpNtifRk1H7hdNQ6bjV2fndwa2gSoN9nKapgCqDbPsSg4fus2nmnCKyjwqCYKGPt9pL4GP5Mhq1qYzJwpV2",
  "key9": "1S6yw4ZqKBecGmnjq4CbXLd2PtJLCUms1BSprkD6E1np3uAySn9snaMfgTAtPXvpNBD68uu1PDTp9WhjeXkRJWz",
  "key10": "2FdkSibxk72hsUAiskiiXbKqqeDEPWm2rTuAEALukqwCyMk3kNWPh1zjoXPnrQ5WYfe6DUvKhzq4PwwfwZzroS4F",
  "key11": "3uqebAjMgRms4QoJFUSr7Snv2a89HqS7tVaqYQwf6inxSFGQgq9DjgzQHLivLC9nsCC51h9xdtkiLpu8v9VNVxdW",
  "key12": "5NdmVfcnoTHCEtfPQ9YF5wru6iQwf6KzNvkxdKsuSjrQqdhREEuxCjzhanZoKCfoAjWMk6f9VYrxidw4wNSsauQM",
  "key13": "uPz5nV8hxFZMCE8FxTiqP9jnuFo2VV8cpzCuhr9UzeYiYpkRhjM6WPdcaV4kLZcJMccMzrwUaeUQsNHNCuo2RUy",
  "key14": "WSUQh5Jh6gtM1SAnYqMDgMAswiuDppf7EcH3ZfrU57eFAUJ226hSPNchWNnGA1AUkh2ds48RBNefu8eETB5VkMC",
  "key15": "4mdYYRZ1msX2C5PbqmsqMMxJFw3uCJQiZMk4dPp64ZTEV4jrRnxWvQFR4cELCZTV9VFz888VhTsih5Cq6EYQHUJU",
  "key16": "huLEwdB1wfLCqCCWSGsoAoMPEELyd7TrL5EnxhdUNJQYPWhvuS52dfon3vDGomuEpxDtfiqGiLQLU7xsr413rBW",
  "key17": "2FTQuygsGhuCS1QSdRn51eXiCfh784b9XJoStPAygU6AJJskfZ9WyGTSmBCchr7DR7xLkcTLFnqTCQVq83P1XSBR",
  "key18": "4vUDuBUsgQUYkfwiJcPg769qEG8Cgg42454HCzraGZU6xdvjX8L8HPoMkuZjZpFz4KjpziEoFcGV4cU2PoAEQs4F",
  "key19": "DbdR9f5EySezPgBS32QUPHsLK5tSz5daTEayRkWu3LMVJdd4T4LU29dNrYDnAV7Lw335dpb1GfodMo5GkvvW3pV",
  "key20": "4wey4FGxoJFdB629JGZvCeAGyRFQWEcPKP4p7tbNDZx7CEoiQ6JhjSP7ioUfns8UhyZ7xk7CvqTMLEYcM1SKD4VK",
  "key21": "5MkcdDk14g9oRXerNax7s9aqNCziRKFS4TMULhhsYd5PuzjeHn3AxyL57HNm9yqbzURXnGL8tyt35iFsdDjiQrf6",
  "key22": "xFdU5S2Gn9L8iHpzXrhrqBDxJvMSiw3JPaidpVMzbC9tbujoC9VN16o4EJ7xtFUEFGMPGgJQxrfLwgvqDqarwAc",
  "key23": "57ct9518NWsdFW95jUZj9Fv3KPJpHsFikFqRbkFaRqgFN6DHpD5oy1yiXNbKWyaQ54CbDmNPUSp12N4c6XgXA1zw",
  "key24": "5C8TqgFAhLVgGmfNG91ZNyhBymocHTQRgp2A7kxn6xApxMWotKcGDhhSBsS5rxp9hpoWfCKiFAu3X2bhNAFa5qoG",
  "key25": "51eDKqLRCKGojxoFcE3wBoiDg4SNGBfrrsELG6Wz4E72mXHvWav9MhDnC5dCLF4JxUdjqGCJfCZpDnorWYqgqXmQ",
  "key26": "2ARu5yLN6v8gKKtc6YxzqSv9GitjQkTonBQm3PjPFifcSS9qC1Y2hJMEx2EkHKQnnE81GsBhEDmte6GXQRmTeet4",
  "key27": "41QtRYdjhQ4CC1pkQqGFtwBnNhRbeuik7aek8jq1NPDkcmcRRZJr7v3soy7sXed1LrRLUYb3BRmtJa9qoCfvndTZ",
  "key28": "5HMwCjst2BA1cqjRVTf9CFUsfNycoPK4aapZMLatx6uFWwabnCeDJoENLxD2rSHbqTWEzdMeCzoGtHZe58FQLGo",
  "key29": "2TkPuzcPmRW8XidXLMnCvg3E9B8heBTkUzsu2MiZ79tBeDLKiKPNzwcCmeXdDJdVAfL7rBejzGmhwHF9gvFUBVRv",
  "key30": "2fRTNfLFqYDJiD95ahxD49Dejo37SHqgMM9SwhMNgsnngJ75xAVj2LbwAJ1VtsWtnPjuegeB77q3rMcVPgTNwWhz",
  "key31": "sjqFjqqDgzQ6aToiEXHdKDmktWM8fdrqKp3KX8FTpzvSr8G5ePmWiFe8TsmPAzddZuxTJCRs7qyfzmtLax6nkKj",
  "key32": "23CQSNJ1NZ8UEBvet1zN521vdFx36fEVCzzFyQyXRiQ7zdcoJmGZnGJMr8CkAkDtqZ4L2E4KPSwCQBjNuQSoxG6v",
  "key33": "re4EagBbKSz3sTgprniA79wGbXbHVKw63fiEYgpAbiYSDfpiuYE45Gsx2G2MErpYx3vwwikxiUX7jLNxVfv9Q9p",
  "key34": "aHbWGCYMedBeRgth3F4CZKzfUqW6jVx4BDNLmciw7sHWuVe4UZmDEddzTNqhtzmYc5i47MhiJjy1zthhWGKg9gL",
  "key35": "3JFAJj8pmcRu1k57Xfu3s3jGTRzt8GGWyVJ7VUbYjL1Efvx3om5nEoJmmk6VJMXVixB1w7jjM7mfqAfP72k9gyAw",
  "key36": "38WcLYJ2Pnx6nr512jQr1p7kDkWxfvJU3bFztVcUTBhijUhetYabXMnymCYy7vBNPkofw61wpTZtHSxbqZwUt8ux"
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
