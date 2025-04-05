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
    "M89Dxe9JZ61juz1ifMgQvPkHxSDS2L8F1hGwCsxV23nQNR2i2d4xZNkU4R41Q5gtZTTZ1tELUeeCMvrhA3hSwcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JCFCELFyhh4v8MkfBwcfMAvKcmpvJ3eVjF8jTfsRKMGzkFTz2Kd3xFyaDCvRK7pvi6Ws2Z7A5u5wNBnFTPXiHPZ",
  "key1": "3NUYYHXLVenpVrgAZD4jy7aR2jCfE68HcHLiwMQBdrRkynv6oVqnnPCWM5w9iZ7odut3FCK8Jji3MM9BxPziyUw9",
  "key2": "2bm8AriSHnqd4qgP49qk2vhQE45YxirdbCmUGnTctTyfgSpDCbKPzDDcWFaB6AwMHCQngn2tRZY5VwYvNFMYA6rS",
  "key3": "4Y3hD4rqBQFam1mFMgDbLXGmto3tT1b7MnY8FWLR3GLRwAV3Z7qLNVWW9DUvHfLPm9my6RPNz7Xam3hdAEFZjXLj",
  "key4": "4yZefc8mvTdA6dwPTqnrToH63s2KVQAyccyL945QhcHkvhXAYLmSbMBA4UeQHaV2XRFKnauFsCLsvYAoHsxz896X",
  "key5": "4Uj4cR8wpbW3iBDzNhs9KigYn9GqWS7T4v3oTzapEugeDyFTtCNsGz2HKJ2V3VeMdsWvV1KGrtkuT6nG4JYnLsiE",
  "key6": "4nPd8xGihongMxaJev4c5WmcpRpDQeGN1GmABP7VreLYAjhuWxmEm6UA1ENNjSB1iucyBHmCJaxY69T3frD6n8Uy",
  "key7": "9aSCmSTQzn53bvN3V1kci1u3ebfDkneaarT87qT6qzi3NoF8bs8PYQxqzcMYb9tWtMn5FsjYgiGj1TZUrmPzTBG",
  "key8": "md5MD3JJoS2yrmHEZAGuaG7Ewm2B87N4CZzC9qhyKXN3nh9hCP911VgCsKMuWoN9uw4dGgDMhGFRPunb3WTKqHv",
  "key9": "5ATP7DbqrPm9L92eViacHWH39sam6BZ9cFcR4WmAggTJmy32GMn637MM4s8PPpDrVyEkX7BjD7mdwmv29LTDo3Uq",
  "key10": "3T23Ua9JSMGJuAmAvYUD1p5P8VimQUSTdZ3xumcwmysuCfbyNMDehPVAXkNqnFD7ZHtkPurea4Wv6GQx3SkRSKVi",
  "key11": "fhw8Pb4MKdcp17zjfk6iPt4dshcxbD9KZQVnaBTB6M4mShVq1Un3fZgmY7MzkHYaGVRBo1scfeCuTFEvAP1aDWx",
  "key12": "LFi7SUNVxWbjYFvcRZqtxngGYvz7Gdoy6VXpkLxJyuxyxqcBRCmF63pUAS5hTV4GiXwwf3oEqHy9pQZMEReAzXh",
  "key13": "3Ho8XyUg1tavKsw9GttLo3sZiEiGY3MTYKcLtd48AwR4T9cMeq8TNXoJ2FcJUvLXLEBBTNpQoVzSLscLikKpjyq4",
  "key14": "53QdvoBJrQYe487aZQUFFEgFZQ16NW8oM3pFeAgLRpjSf6VLpkeTq9nNNhjHvgAaXMeKhF2ZsD5DLUgZgmDNiZyg",
  "key15": "4acayCU9YuBVaWpu1zdFKyac2YeJ2dGt9otnYFc4cSYMvKqbZaLinzvgYhMbg1Thqgd7m3zpdw86K4q1vKeXxTcP",
  "key16": "57gqcnsRC4mruJMWncVYV6a8CnAnR3Gb5fgPYVdJSeB1kHg1kiqSLrJJiHQYFUyM9GJzepgDracvoCjGxMaGFsp2",
  "key17": "3fpNZ23ewB1EmTdgomArrQ1AVdFk8Z9GXDKV5Sq4dnvRzSUwaMcSiQgzYFPg2d5NtfbF3jNUUzVGkLg1n96bv3UH",
  "key18": "5TbEnoKDwjnPQZLRxoNzFGxxf4uaUsqc2DYPirQZ29KmNG1FXpm7mP77G3VHZirUUPp1ZnHUpcMaD7jHyXDyEgaU",
  "key19": "3eUhduKv8qxKaSjv1J5q8iBmkC9iw4XmKyyta4q7U9KrHJnVeesydg7yw3VKCXtRxLyz9yb2KmVSDpCazHYdDqha",
  "key20": "4Vjr12jRZmjUEFSzhvLoWx6jYVYbaeNjgTxDTzcyVXCPHuccfJLYXUjnqJKTgPQwwRkMYUDNWog8UZJsiqrwwpu9",
  "key21": "4Coqzj7T9tAjXoKut2qugKgp9NVJ7xc3ETsqm4hmvubGJicLQJ5JebdkWRHBZqbFvdEKpRFWPhrj2xECdQ9S4gn4",
  "key22": "3x9gQurTxt6Ew62yy1QcW2jez3PbPu1gXvnUgVVmBRi5d9iNK2CbRFB8i6pN1C2S9ZvuBPQH7xfNGsE3qXUCpZTr",
  "key23": "3c1kjW2JtNRBHKJR7iHsyWCsgmkR7JaSAeaXBDmkRphfHZ4kGmSvUoJVmUZG6qfLkBJVb4oUC9jyHhU8FWXppt7U",
  "key24": "2GaQiztvmm6PFwvj6p6QbfEX1aBFXTiK4tzBq6KyFGR6hukXbWrDrUEKb2zpSaBTW7KdCXrnmQTqaNxCFMArNhUD",
  "key25": "3DYH3NFpwjCXGQ9NQ6o6rgsVa66ftvaWjh567mwMFxhAxS2LxDMpmK4ZEuRVrwCNx5tVXrfVk4CSMZcbSDYyRw72",
  "key26": "42Z9AdiWkSFBH2RfyyPfSACx8Hsk9T51NFYBtqMzRyPtsRkpiVxYQNJJHDjfb5vMnQiSUAaG4c18u5NkHN2r7Z1r",
  "key27": "54FwALKtw4ynPGwYBJLmyRjWiyH22DDVYahwiSrA6tX5YVD9h2XexDnhPPjuczvXp2vd6zoTHbdqx4ryEaDgij4g",
  "key28": "57oxrT8b5jipXjLbdcTAvh4FywC72nLWUenMbivwQ5efxmGiGuStVvYvdSU8NLCWBpNKDXE6T5oasDF7ZFWgxErp",
  "key29": "CtdTGHVLiaegvxZvinvxvccJix9TMoWwcrJpeXMYgKCkbHXgJEzoPweyBbZxfFKgrKDLMo5UXABA3CgoM9yWGEo",
  "key30": "47eT4JYop1bonBvch6b39dygYybsHmYucnX43DEa94kcSNBWggKoKSkv4pjLMtbcfhLf3BmqyECpahSFH2spxrhA",
  "key31": "4aeGyfPX3Po8sEs5iPFP69dfoLoKAK9FeAeH1HEPK9HTuqyrGDjJKHfY4LFGtL71BewLxJ14964LTuokxtiS4KBR",
  "key32": "4HWujV6VD31rAy2pZpR7ypXMra5j5RoHeof46SXJdXQvFwrtoifEcY2a7N5v67YAxZxbLsszfnRphfsKhqxwutkX",
  "key33": "3PV8pnZYaCd59q4dQX4iFTpW7vgkDbqUgBccAXDrtAdggQ97KG6KQroEBq88kqVGyXEsuzmrq19C6KWF2ewS4JrM",
  "key34": "5edJ47eYvwdJJkZAKwLFv7fJNcknBQDYQL16rPWTG5bQ5TH8ukLoburxXSxTV66MzM7HcrCgXXuZXvPdpN1q9QoR",
  "key35": "37zKB1Y2RQbbKq1YmUF46zjVc35NLXAKj6kgM9GZ8ekrxV8AEnJo31AKinrCnrBRFT8KpXpyP5TcLvzZ364r8hax",
  "key36": "4ET9STtvHXaHRxF4PeuhapfmUPhpuz6DL3hMC2WabcLYvCEzW5qKJp9J8R9pXLUHFQ8eDDkndcGoe42oUAne8iKp",
  "key37": "oBwwGX21wAhPEge1WiUwEULiB4ow37MgfDL7A97UviJEkwHKF3bNDCxqveros7L1RPn9KxqBfsMKyHbhWFf9fwU",
  "key38": "NQHgNxXRikbSJbWQMSwVpbN56gePQR67KqLscsdgjpwV13cBjj6CXBiBsuLb3b61NPGJnyqr35HXVBfzhJd9w72",
  "key39": "5wHRsqkCzec42AgQjNSQcRTsh9JBDDvPqpvBndoXVt4dYhzahShBR2rw38JXUYC4s38hNqQE9am1rC9xia5C2B4D",
  "key40": "6QGcgWrXB4ysJZXDLUXEvBLWthfxbeXYbJUzd21hd4L8rsEoaaNUMhw96s1vCkyMA3NTjH9Lm5Vfhbu2EVqA5Q4",
  "key41": "AvwKKGBecYpJsvCEPUfE4Yut6CjBr4eFuV2LCvNAJjDaqqAKCTskqUkrTuH62V1jhkNs6q61UkvfTqYkcc6dfjT",
  "key42": "2eDjYBNhFtw76dpyKx2qESUiCgpfFuMHaLr3iB641fYXUpMEwP2Q9Pqbcqt8Nm9rk57YocLEyb6dW9w32buXrjJi",
  "key43": "5RmKefVjgv3m8faupjaT1cctQEbjLAnLJjY9Y2885Aa5h5zd4voUaK84nzdpSYaPP4KAyAhuQen1xpDwHyzyiW5P"
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
