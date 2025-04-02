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
    "4LLMpNFMNukKQdHxV3UfHgHsu5YqyH1fksdFFNucYwJZVZRHCUmAAMGw9jq5gHHPA6CeMqV2p2yPD8dnYoyVBMRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d17u1tjZqy25ogarsEpBprhRRVDKiqH8WEkYm18P7HpzNhB88B9FmQCto7Hd9NVkDJPgNFRCZ4njQGxGG5fFhn6",
  "key1": "2wkh86v49fJJXnTsbPMqQBZptnePXJhxKJv2wWuHDoWwErpR7xXCj5GZbDEgS3f2wnc4ztPnvSW6mBNQ9U1ytnD5",
  "key2": "4z56CQ4rm2rxb2gZkcsWovwuqdxkEZuxiWMYZQKejcA8N75CXurnHUpeJcEdv7niQTHmYCpbdKeGqeNvvsUe4LnH",
  "key3": "65WnDdTkx5QwnqcvVNyJDAqhCqHmeZ75qi3CLoht5nG21jzXQhTQz5FnQic6VyUeUy6n7HV73CBoYSCPaFm5K9wY",
  "key4": "2jDtCMjL77KfoBAibMxD9ATHvcevyY48BpPkDSzcmaWixKYEXduqH8ekwhNtKRVp7J1A6De8KieRq27PL3SC2Som",
  "key5": "3wEgWQcQcdHnqiBt9eD1gqnx1dqT4EYJ2cgkSncahZnQef2MYF2iC5QsnVzV5wEKYTLf3Bu8whz8m12N5RytWKnb",
  "key6": "44MN89SzgBGHQkHqFC9P7xV8Qu8122UPKQJt5TuYZWvrRRfxLHd7LzUxZHzddR6LTtiq928411N8M8E2P2timeu1",
  "key7": "3Ys7rsXfJDsH5iraN4RZ3kH7FPCqeQMXVQVEEca1B4yfU3T8XNYrXFdUsUWysjCFDnUUyDGegimgBBWxCaS2Tbyh",
  "key8": "2syzbHXvY1r8yBcPa5LtkPb185UBgTQ3v3HXNEoDaPpW8JNa36wZMfEnsjjmM4bH9E1zRuAztCjzA7UcC1sLooLx",
  "key9": "328gzmbEpLdierVBVgSETJAoRtNaMAZ7KseKCgd2fGuVZwFduJFvFU3YEoEovevPLEJEmiDy3ttjdXbYLdyUde2e",
  "key10": "2JnZmmyiVV8PdR6q8DELwRKJ1vRosLBextAgybrVtziA4mk92Xc1YLCVM1nCwGDiGEQB6PezWKDZcYYBLhTmzLRj",
  "key11": "2xikfjERCJmJwjAU3kAJeDB6grAaHK8gJH56u84mDCk4nTbgthBdo243t35npntn2v9ftfCtRPhUDQkMAdRw4SBY",
  "key12": "4L7wZn1yXgYr8ru4QU6p2rKAkZZL9eQpsf6HLPDi39rJWRDtR5NXSy1791Ltvb9UnA1kKGg2ausqDHBggAAQ9ZFr",
  "key13": "63UzffYr84fDLgY9E2CpkuH1k2pAP3kXYaUWxFuixhAoBK9J6fBaeaCspDdc2b3sxPy4wfy6hRM6Rd22NfHb1Cuo",
  "key14": "9bdQLWXiEuvh2PJ1u3LkyzirDatg8rZKnXbuN3g7Lh1GBjCVBcFoMKJ91sN25XWrS8kAa8e9WEcLSspKtpHtahV",
  "key15": "3KMXBx6J51bfqmRpQjZRN9dgoFdiTUTg9ZjptFajcGzC6kMuNPwkhjdp74WeBQRYvPG6KEQpE7ypnG75oXLz5mio",
  "key16": "naTUhaWV1W2CuFAKheumhn6Vhzq1qTpEAPn8P25ejLNA9HLKkUv3eNvGbGn1Y99BkdHgHvhg2iqaJrP3JowqMYJ",
  "key17": "2SrP8pTTCU5jBW8hXGDSvNqhY3gcEP1yrFik26kypNYwP8uPuYj1cWfwnCncsjXquHN1i8U8ZtrrMooygjoQxCui",
  "key18": "a3unoYv2nTWSc5K7HDtQgaq4gv739K4X4QDCmYswcYh8merebmim5Bt61adqFH1A9towNzwsjXZ6Aog1yb9qubN",
  "key19": "4SYFEhAoiiwCqzyochLm1fVnnBxu9tYXTs2qvhAwLd1zzyknCrGZ2rxypXoDgvVLavcu2vP4Vxci93UcawBWiR8w",
  "key20": "3beJiz5v687jvuaTdyhFv76Ca7m3cF1cqi1edNizR8izuj7qmJvQiiRLaCLon52gaY4opczGGMpoDrjSswTmYgFC",
  "key21": "4QTyX7AbuDadudPDoi1UVu2uYyjqJd8pWdycvv6g6SnKRYdUEy6voHdDTzWHEfbe7D6nu3vvnQQQNsQ1XAZonvtF",
  "key22": "3JsYiigyzqXG3XJhj33SKwvY4gEbQstYtDjY8XMYSrjtAxNwejGZYks2J3LE8oQARAi9GRLQz9D6asqbD5KgAH4a",
  "key23": "52qzZfUciJkLeHqt8voDmpqp4VSs5ovtX86imo9uakV1u8iWcN8S56yrvdH3KTPnzf9VFqmHVh4vR1JXCyeqgnpA",
  "key24": "65KGSUQLUyfxCojV2fGdTa4uzsYiEgJbHpy3DYZHjHJCS2zNFaf2wH7nySfLHNpaWTki2XiuTqzPCpKGvHfZ3ELw",
  "key25": "2UtGkmMCBgroE8EpivGbkBqVJ5QUX1aWdBLA6UvMudqEPTWHrzT28Ce7Cj28GpfmVPiiHeP4pHNfs39BpFHBsfdh",
  "key26": "324UR37K3g3ngZd3oerboP9digAZqJrb5GrgS65VwxbhKjrzN1q8LLiDeeeoViaGCePt3G52CEXoJ7KBbPSsYPMj",
  "key27": "45P89NPF3iVfcbDWJB2Gpb8hsPMLeP7Q2MxEQmbhw2P6EuX3oYKnccj8cncPpxSkCj2pnBvY8KQnKWrtyEgY2EtC",
  "key28": "3pz58WppFc7LsuKm216az7H354eSJHr6xmwurKFN6ay5YkEYLL8zfM2ianCGJoDtB2fZ5SJaQxhpVGkrkywTiGXA",
  "key29": "fkA28VzmmFFErBywuAZbCiAR9pJ6xhFH1ArDbMXympogNQge9JJNha4xtJ3skz4jdDXXbvxGptfxXUAuZmEW24q",
  "key30": "oP9FGCDPqhtDPQQ2agrVnrRih8SYVD4QuWGqTZHpHWCzpvcne4XhzYkrFgtc6VuF9eTV2XNBTs7pFzMZHQqzC3r",
  "key31": "4M3G5JSGd7Ku1C5xYbDgnpAKiKVAnyNiyDVepyhz4ufcNir1bZh3veJeFBnJySGQZLdTBNLdMug7HYxv5UJfhhmZ",
  "key32": "5HhkHwjfrfNcTAsxJxNSvb8zpa5aK5QZTv6WruddD2tRPKcyEBzAoBALe1YKGVTbgHHTQ7Jw1N7uJUqkMj6tdzEJ",
  "key33": "38Fsv5YDGPf2bVApdpvbaEHdbDNDmGKqVT2U6xeEqfnsbMVWs5o1JNA8CiNGrGrGmBRAwSXWvW6YTBMKPS3pjebN",
  "key34": "3H9EYCbDBRNvzekH6nJKG8aZj254r6NFBzWsDTiz15T9T1HLNJwyCJ4wbPQo11jdKAcXSgEZQVcLfoNKt8Gb5EAC",
  "key35": "47taCu4md8db3YhyyZTcnjDtHnzaEvFq8x8hs1K55ghUNUfLMfSwF5jwWBoVPUVtCJyGqLi3dgkseittZu1KaGrv",
  "key36": "5Cxs5TE7RZ1XwDD2fwzQKetP7sA8Thkomsm5YSWkZ4sZ9NAPoeb9D1g3tCVuDfKUExQ35P1TNT2oTChbJrarAQNA"
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
