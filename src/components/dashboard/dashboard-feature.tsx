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
    "4Lpqb5MPdebs1RqySrB5wxWnCs6vo3tD4VzumQkkFJzPkyQ8vUfGm8UvzDjY3o3ZGDxyzJmxxo7VWxe9Z6g3d5hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PGo6w5PUaUvJXDDHf1ss7nsfzRuKjVAxEBLg6xjqJ6f1fi5WPgHkTnrEpRRJu12BQfJd1hRUvBLwS7VnZenG5N1",
  "key1": "3hti2CDq9bjHfokmBDbG5qpskBcoDjTY1ybDPJSMfuYi8FzcTGAupkHe1ZzgdivaLhMos6Jm96EyVjMVYwonxH1A",
  "key2": "tiJszhSSeaxi5YsbMFUqqxzEnVUqWZuQ8zBnDca8WV4LabpQXoZ8XCJcTnFt4EYyXAduVAFPD25W8hSyBJufyHh",
  "key3": "2tDZrG19K2rEJCz65c3kUmB8D7XE5T4onFNaKMKfdkJzjcbLjnHxTrpPRAbg8oDrBhup2UAZ5oPnmsz53aetLHBD",
  "key4": "4Ups2xoS2SHPkBz6vQrPF8Wgsoe8gNvvC4wpnrvLwGwaCjg3Akut88SYRrrmYjdq8zvjgYk9Zy37TMAyEnqcGGUk",
  "key5": "5dPbj96JRquJhP7u2YAk2RHc49KiZjpQxS61BwadBFsMRB37oebvKS9otuWMrbvJJyGbDRdKnfdd3voqBDDED8TL",
  "key6": "3v9XJ3Cupe8ZoCQtxLx3Qe8nRdzCfVtfm69a91ouyAcxjR8rngJUuX3oP52hugsRZCBBTsbvyHBq8rGrhN8x2Y6T",
  "key7": "4DDNF9WPyDWAVoniqUAM3MTX4ukgFB3dbSQJRVC2jGLaduVuaRqEsR4j9d6a1nyiBLGNBRy2ogd5kJNzUwFM84YG",
  "key8": "3cfMnXZvp3wSMYZQ7t8BtRiNHjoDzAhvkJm2jeYSBxujrGBMdWMF6oz6GtodRsiLNVgkmxdkqZaWtZELm4wsGTVX",
  "key9": "5B7sZ2PPr5gK1Ak2nZkxDsdUr2DQx7qawPF6hBKsNsKBew3Gnb3YgncYaYC2aXKeB46t3gqExbTa3bY7cB2f4g1T",
  "key10": "5CBZdrxAnqyWy8XA3vgbzytPP6p2gJGpuMfSFrjL6gjrSYeoV8XpL6jYb5hv7dH5BuUsGfJHvupQC5vLj9f5kop9",
  "key11": "3Yg5kK67XaNP5NcYXstfG5aaBUZ22ias7GEqU3W949bMaGLrxBdRyzCeDy4DZTVFpoTYd7eBMRh1E2LhDPFXCpye",
  "key12": "u9UiHcSoLpPsudM8zoEupxAjg43LjpuCBJxxazn6NSsAq74i1PVNaxGQ2VM7xLNRE5Ycz7kTSJ3ekbwxpVSKfwa",
  "key13": "qxfaB1g1CvQcJVyFxKa9YMNJ7Li4ctB7tCXWG23kAMwHPWDxV7YG3QGwBuE5xQgRLqZPuXXNEtoq5LAZVyKaMPK",
  "key14": "26X3t9PE5j1Dpz3M26Sg9Z4M7H1ZPrHTR7sagZwSQ6v3cjP6oRdee3L7ru1aJgSfoCPhnTYnJFWPR2ia8rkQKHSR",
  "key15": "3ULW5RBmHTFW85XA6ABLasmMTTijvq2i4CgnSANaqhEf3JSy2PCvndMJosz1hgSH46PNYZqTuoXxbwfbtXcZZbdT",
  "key16": "44jrQDAYa4Y9EmEfh5Hb5fdk3MNBitYH96AXYvEFxJrL7A322RNxnqAxigj7hPiLFrnh6JLX3AbSWvJxgwJuoVvn",
  "key17": "5JSqFtQRw5cXHDYX7QEEbQtZwLUhod98Y1PCrPoyTQstodPCLmN4e943R4L8Q5LEn6MJ2S87DFyd5vXH1oV9mKjD",
  "key18": "66aEi3MhoLWLQ38DS6eurirM8umzm2UWzawveSsE1zk5Am9fn5FHD59sV9jMBnRJ55uK8V1yLdjuhZ6fp1PDdk9z",
  "key19": "48kFoqDVRrrug4PQWgqe5rawEFbQB9gyYVy7CA4vdi5qNPyoiYDEAz89GB7gLMUiszmwFN5iv4PtxauCFyfsFYKu",
  "key20": "3rNMJSA9yC9hrrfXgPKMPZo6LToixkm5i6fx7UqSBoWQZaJEQx9MhQfRArqoyzxmbDv98jDXAT2Cnvx5qHcAFdHg",
  "key21": "368UhwpETuntZFQsefhL6iN4N2EvqJtPPTpgNjz77HvYeprcJJjD2ZXHpuAUcrRSghksrDkhKN1FcAUGzuKGzNVz",
  "key22": "gaZX7q9nPAuLFEkJP2PKpKaAZhUxPwDTkpCD11nx1MNdcX7h58tx4sUG72RDyMjF3YUzmvwNKC1obC2w4ov2YDe",
  "key23": "2j5EnyLXhEGpAQKj9jtXR7tkxrW2n7bcb1Q6TDnea1Q6KPY9MQQNSmYT3cN2f3L3tTyaAwWxz2vXRB3QXJyrHqnd",
  "key24": "tUDkMTrYooWviWQQLFHVNp15QLG7JBGvNUtN6uDC3ArQmikSSaRn4f9NF299xvNc3PXYqmDC6NDAmWxB6CZgHYv",
  "key25": "4FMZ8QndWap6ux9oCgqUf4nUZshENVzG13KBP8sbCvQXLtwH6qJeHrtZu6VF9Niwqa2z1BPSJeNAYWewHodwXZmT",
  "key26": "1r3ArSPQFTVh7nRpJzD8fS2uk4qzSy76EUfDZzwyA8FpwK2Sto55A35KVQc86vCD8igvAPhfqbukUvxBibuqk4Q",
  "key27": "5YkJBHaemp6G9wziFgsjZ23cFjHWJaf9WXmUa6tePpnZbFzWJf3ybbA2M2mNbizn9tzty7yRvofYUna2cj9tGB4p",
  "key28": "3nJahDKq9erKMynopWy9ipgBxVnbXdw3NkGrcpJ3BQBL5UXVhDpM4RZDaRjXWWbBBe77Mczu5Wq4MLjdZUWfEHsp",
  "key29": "fYe65yEqf7VPDQsUh2LiJGEpvp9rqdnizkPSTkyiBtemeXZc83j2xBVf8ThoXnVTRYijd313VdM5QA17PojAZWt",
  "key30": "641yWVUBWB9e57mguTEtnLW4nCfniAC7ExVcd1KHrs3N4b3z9LbQqzsgmTkiRW6Ws8gvZtrUJkX8VQ9fhq2h1wPN",
  "key31": "4mbMeDuMN8vwQXt4ga5nLgf3ckWzvymrkkpSWvCZCDwZqv8cH3VqYUaWLWzRTmBttbZg9SDih1wbQeXnkuhMjj81",
  "key32": "2ZxKLcXvM1xgw6x4S11hyMnJQVWbt8EayBSHMXNe2RmvrH32qjYHmE7hJVrSUGWEHGtBQTRycB2TYJXDZWKDpqWP",
  "key33": "5G8kxpkjoQgrZrE3G5XLG4ru7rKYVw2r78eGuvXHZiivE59ktcuitPFy87K2EEritwdksAk2uziwdTawwe7SJQTn",
  "key34": "5D6cQW1sEe5K85S8hZTJG93B5SmyKgvpjDwMGYpctbfyTVttVybmo1MTHsd9LW2RnTBMU2mBTUExW51VFUDks1xw",
  "key35": "26fwjgWBVAfGjNLRdpnxg6M6Xj9pzNm45PG69Xd2gRPSjWFd27gbzgfihVsXJNJckGpQnyahjC2VTpTHQnHCgQTd",
  "key36": "pewXES3ZEiDL4xQe4mt3tTPHnBDhEDVRVugvt2iCJGXmpeu2K3gzCe6TYoWjRABpYSG2RZKiECEuPccqMEhNudp",
  "key37": "472x1zhLiGufmE2f5QrPL776zbKwSmRW3J7bsbHwrDqKA62oVvkaEPA7BhXY5HWgcNuTBZ8nSu4jUY8QDyvhUpE9",
  "key38": "3bvPgUnnzphEYNRrJiHTsMaNkNp1iqHJmKDSnn47PZQHuG1DohDgJH5Fbh4ePDKTA1M68GaZpui1n5YumycxUTDM",
  "key39": "r2ivDDUvvxw4xXhFaYVB2PNp4uEeLL9rJpEhQETDJ7zW4zqkLvDGff1oBwqZ6JrFvsiF8YSLBGxcFxUgysRbJsB",
  "key40": "4idx6tg4gEXenu5pToSuCE1DwaFEjU2r89Pn24EkMkUekv6RdPVQiAeJ9sochkUPSCqg7bYrJSwRQfa2Vbh5q11w",
  "key41": "5zUyNnNPQPE41qVCqPDUbcN4uUExZFtahQyETr9r2rQjVGxZQH9ASZ5nbM5SeNDNUZfPbbo7YHFqWoxLnniT22Q8",
  "key42": "4zChckTuRJJD8evX7gZiaYTRvka6LWaZrTZ93ewvNFzQUfYXKTihqYKG6nHBoyLetTdQ4PpBzWyjZrwSGq4nemqf",
  "key43": "3iZCiGJLcUcbX4vHjUsBW3pKjAmjByMqraUUeGL7rWVh9wdKmDCFvDyt92XiNNstVVg8DixvrmY28tbDva1EoUas",
  "key44": "5D86JZSzjBYAoEb2sVgD968PvHZ2yibk6FKYqWfCgTwgXVea4mnPkDf8m41TKyHjM7jPKxneoZyMUeTwYDrcEKdW",
  "key45": "4LXLeq15mudVtnqXQdKbbeyqTXrg1NJA3KBUYVfJ8Rt69k552rmAEK9XAukqw4Zt9W8jxvE8CMJg8DcBaup9b5JW"
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
