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
    "eynwF1375Api7ZTXMkH2orFXqcwvPucZLNrxwXDQtT6EcjYdEhREbNvCdFtPn6bHWXgin6TPTpvDYNVNaqxd9kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U6fBJQV7HdxwrnJcAmEF2oxi1N6Kx5wAT87QKGb5pjcDYLSGqwnLPDPHGkUit9wnRvV2R8FvwrjnPMUv6dGkgW1",
  "key1": "5xC3VWSo2BrbU2T1KijkkWsd2TBj9MFMiy2khYg4PyckSuGUtuwqS2QeEHykTBf1gnngKnm8fjSzSSd17PHSzrYL",
  "key2": "4vdPNFqGHNQRJPLAhdJRYy34uJLJ61rRUAxzSgzKuWyFyhQGCCi33PkPrnUNPobrZS9vX8J8Bu7tPxLWsgjyyme3",
  "key3": "bEjPZ5ho3SdXCsogeH9sTGynziiHh9QXgT6ZKkkn4TkokxjKyiMAZ4E7B3YWkbesUi5NHSx5H8z3r4dwWqtTQHP",
  "key4": "LiBXxB4zqbwNJHqDZJj2MKSsSPbEChMFFGVsN2xRYwCvYnGs1igjpq3z9XgDn9JFaHawskjnP4XaFRRhdoTivEf",
  "key5": "8FQiRBVwRGxzjkzgtSoWUwykLnExT9KWzEtu6aANqbQDM8XVfrQEevRUxiRDymXpAiUYVGgSiDP8FDXhbMUtM9k",
  "key6": "WFkVRKB6mdGq7bK2oEvHCKyaqGpCgSwwG8X6CCxfZixEiekw7RXSsigcgjmxJCoutiq42JqorDgRKV9xj8pcT3r",
  "key7": "65SsdbWNXX7Wz1kGEf66EjkFCaajTSLkuVFVZwgKRG3qJHMPFNfZSvBSaRoaEGyWDbouosxdgZ12ghmneZdRBsFk",
  "key8": "5JU48dVDpvyHVKj5MFwHJmSvEGSA6JoL5cxiCe6C7CxyL2za8Df1foVv37QVv8jZbQP3dSaw1QxvrEzBUoqBqCvC",
  "key9": "2R52rWxugZD6Qh2Lge5JfKXmwAu2zAds6u4woZ6GtoeLTEoA8YerTvxT5BKHSPVy3EvDQRsRjKrKZVPaAj9cqVV9",
  "key10": "2GSx11DWLeSbiQbm42Hi9nkroM1mARtkTDnRw9BbEDRb2h2WSSxCjKiEjUDS8pnhxysovBoVMPVrbe1W2iLBctX5",
  "key11": "4sFdFYMPbyQU3tTYj5hJSVhFweBH7LY3RZbi4YNQjRxne3vVRWdayLGKHqyvnSdL3CxMx6tKJk4ENfztMjMWYXAQ",
  "key12": "5MF3qBPGU67iZ6FNrrux6EwGd1YrsS3RaDNSqhNFH3t3aosZsrAsXwPcPivn7onC16n1TLh9P8dMCg7HewXEb2bF",
  "key13": "48WKwobtd7mgxP8HUqcE25GvemA2yrPagP336BfCGQ8PMVrRZVsrzYq9ZmzixyXtYskPa2v1bau5wmB4VeDp59sx",
  "key14": "2haUfx1jHLixtbodBSR7Rj3L21rbyqc4MS4b43Pd1hm5meabmhJN8kNVCr4wveGBKU7cGdE55CBoVd8CMbSXcYbU",
  "key15": "jE9VYBz69ohiWnS758YsXTzs3iZ897h45kRasFUUfeUnDehXYHnu8yoyscH8xh1dsuvA4DtxJuoivKAvSdNQ3dX",
  "key16": "5a5VbAjMVkKCTD76H9nBGqmXq8jjoUeyqR83aQ9nCvEtRmcc3aJqMnUeQej4vzH7LtGydxXKQaJ8gtW6nesPhkza",
  "key17": "xipYcU25VyJzgE9c1ZbSBsTPbMqADpeT1GkRfc5GxAY3sJ9WQ3fVou9X1ntcsoxnKCeDWfXx4GjV6P26Whwop1h",
  "key18": "3RqA3WS5ZgA52p6iADNS14b5taWc41LcuHYDSHvJwCJfyH8DnVZpBJzD2HQCj1jp5bNtPxq6nX8KJCizGXCsgXwm",
  "key19": "zUgvNGFni9H2m1UN7NfwZHhGe7dtyj3gM8HxTYusF1fdtsyv5BiLyktKYYgE5DCYaWHHAUM5t6bYKwGZkwxQzkz",
  "key20": "5v5ZmTjH1WUR3BvxZVgw9semcZFoXFwwYgY9SAByHJtCsmGB1Ni34euyHbemJT4mGk6HTpgFiJaUJhNogffuqXeX",
  "key21": "Ta9CvSHdujuc864kaAK3HTQreryY3T3S7xV7xUSrGWN5CqizYGZcBRnku5qiEUzgVvH5yqL1ErcqMh59CFRNsgR",
  "key22": "2Q5egwqJiyexd9M6GanNkE4hu7n8mbNuD6nNbro6h346Q8jbqq1wydrtMwXTw9pHZD6JvRkqipMrXe4TPc8ezyub",
  "key23": "2m1w3moEfBRSz1HSBMp7LiVWubKuxoyFWwg4sYgMDGXCeo5Ze8dWywoFsWXRvNFEKGYYhWFmLc6q8PfP6DC7XgyW",
  "key24": "3fp3v9LcyvPUPd587omkyrGJ1ssByEc2q5zrbKwYgsR1ev1XC3bhLUvSGmAN5tfJP8pAsJZLoqyhbEn3EBk8c2a5",
  "key25": "22bxPMEUmGzbdoRyuX6FMgbJ9KknLkBh6BEXxqV29cQvHdhrursae83UV9h4Yj99R3yXqCbmCDTc4Tpe1s4ebZeS",
  "key26": "2CpH38bYfYpj7nHdSeFJh73iUzxL3ZDQ51f2nZJYNTKTSxAarp2p6PRf7C5kr2QSWpsoASwCcVTZQf6KAWBtbyoc",
  "key27": "5aronQFhXC53waziroo1T5U2Ag4AfHH2rKsfn3eUd65byW5fYTwM15L4czhPCof41cFqbG8oGvfrwDy3ZMksVaTo",
  "key28": "dmqZrDqssvsA1FBgPhohm2hrcTBadCABsRCsQH3QpvPgLq5b9zy7cmgQT88U6KDfVNuypvNHFycFz6kGJ3HTKFP",
  "key29": "2YCdTHwMjpC4Cdt11Lrxq3eid2Dkto3PUtxKf7gRMh73F1j4Ht94Lhp4ugDHUsjDpbtFF6q9TFN1c9s1gXxTtajH",
  "key30": "41zS77rhE8YmfbapWUpTSNTXYgLskp8XMYi2RNk2xsMzRZpcdZHo4cBxGvpu3tcok6pZ3g4hMY2aocoEkuzgYR2m",
  "key31": "53KAJBwFUjvmaYRoi7Z7sACR1zeCJhSRQEatBU6s6Fj3y6MvFb8Dv4G9axUuhndvScSyBa4g45Bk1DaUeVbufKtk",
  "key32": "hq6TSa7Vq8YYCTzz2ArPWHyo53kLuK67VzNAwtwpHE8vQ28MFJxzJwyMbH3EBEL1bh2VnzxGGqVaNnibZi76zcN",
  "key33": "NwPvN5tAQ9yhzftR66PnFXL28JYnTR1o7czVHp5y7xQcYAKNqHd8GEJzPgEvZjQiu5wUmiPvs1a3BWMNzg9zJCG",
  "key34": "65FGw1UZQHriEhuugcKYqm5rwm52nBxhVjkBtB8UCgq5pnZtHiQs1vSef9GzHMwkSkTK9JPWYBenjYFkPihSKsYX",
  "key35": "DqyQPwf2Q96enrYkePqxfrUoxXP634BqEvE9QhXs8jhtT9kHKFwiwATyrqQhEEiQPgPp7Ccn7u1EkZXNSLGzciL",
  "key36": "39Y3m8n5JZYBxLQXuFs2kLbUmWZfmqpGaN5VtENEN85LiqB3PNVyu4LRCYjp1i6uaVJb2WWm4JJtkxMg1TSngTws",
  "key37": "2fVULbDEDzgC1uZEBrZ8qrL2jNntUPWL5dqHHJPp5hxrgYAjYFW1JasrKw1ymY2678hqhi8P97gSnwtBdeZuKjM6",
  "key38": "yPMQda6PMh7zidGgtvDkpJ5BnZmqZHB7x4avkaZpLLCE2Bw56xEYydb95sncxAoYyUmGrWtC2tQapmtiz9PHX14",
  "key39": "54b6tygrCRkWKGc4vLq2J79T3q9TcGP4ipE2GVX5Qu4J5mmkdkDsYLCXna9yUgHtYk2WD6HtdFj1V3zZsnNpXFAk",
  "key40": "3vDXbbF5gZXfXiiYwn8FkumtiZ9QzzxrBgSSJiLkBgbq4kKQg5QoMG2SJyGcZGg84Xbj6uVytDMXrZdfbJ2o2xw9",
  "key41": "5Cn2qL9S53RyMxkjExatMw4zFUaEpMDXDEE52NoniVtFhBT8zENbz9Z1d5matSw5mGZn6P2MP9HkUu2FUzCpvbRD",
  "key42": "3GDGJZWkEkwY2ibUVAYz8mnC3wokv4DjKWGyxtYbAK4bxVrUSZMopBbbXRmacAsAvKxLQVpBrJTvybCVMoUV9AJP",
  "key43": "iMDuFksLUadbv3igTL55p8AudG18Gfw7pdFwGXCuXtCKhHF11q5NAJ17S9hkp5qsiuaAzP27kiCiX7mBymvGQpJ",
  "key44": "5QkH7zZKiZJndEfQqYLEkgNxX4qArCRPwGMHMRcSQSWChJTUhVSyGA9jygGbjGjU14GWBvaNGJvYCgFFcuygtYnQ",
  "key45": "57Uwjr2Xcvy5iWfBextSyssdWumHxQ5yBrMjfGrQcTvSCKpiffknFgxJjLRPPiPeBFR7jrBtx32Y1dobypx6ZcjQ",
  "key46": "4G92ULWNaXHG4uyzXNQN8miuxqyAYtM1eaRNhsy4SyHBG2gUzwLraDvkw8S4nSuT3S9sL5HmZHTW82wnKmAGRpHg",
  "key47": "3ujUmEVTcpgLuFwxCRZ22oCjg6LTQpfPFnca1e1cJrHmpdNctc6qcJkVuKQ93E8DVDamtFXuw1gd8FZeUciBm8zC"
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
