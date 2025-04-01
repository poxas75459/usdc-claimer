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
    "GTfZaGzWbDYqugfrqsEKeAYM5Y2wBaxeqJK8z8FUVEVDz9P7tSmtenkXtPnWsepj2fZ1dXgCF2sms1jKPLL9KcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jphc23ZEZu225LZLk84ZdJnDN1Q4h4hFRLPvy8JpkjkjMmZ47QnrCFMaksuSKiEdnr1vWzPvCkW3WTrRV2CJyMA",
  "key1": "23Mh4tRRZ8ZpYWrkcYvZ4fpnNYwzhiP83ki9kDnWWfsVDAsFz94wjnUNb41UxFMC9Wxa5wk3tgXBnSy2rAjVfGnv",
  "key2": "5cmVkCA87U13BvrTU1LE76NVGyZ5sEbNrLBX42q11y2NMH3X3rs5XRLZhGUnDdz4ChSPAXtArjbuzqC1DW9y7aBX",
  "key3": "65AVd25YTvvAgqpGAscSPk22URdbcrdbVJN4BW3ZH23CvX4MWy9qXgUJi1oGGjxiJ3uEbpNvdfr4UWz588xuX8Vg",
  "key4": "667ayJP21y5RurX21TrDRJTQwh9whVQEmkK2DXVgJYHDZ3NdoUbUfBv2KTZqURHBawYxY796M3sgoHgikgurAtAx",
  "key5": "5geiZuceMttfB9xTY997TkwWw4bJ4Ft1oXpTNmhrLHX9e4kRfg8VfdJH1EeBrQBnNCU5PnZWMNxU6nQrRsvtzg8E",
  "key6": "28DteZTFh8AZfMz39oVrevnRByuaHuMdMfhnBCCUqEDsJVLMZX9wDMgkrDMZtvUDfyzD3qZJMkv5vGNUDETQXVYW",
  "key7": "4pFykf7Q3q4y9mSsgWYdE4y9peVNSmnbQX18U7iPp4z7SanupLh5eqmmQaBL527CTYpxNUEqCoRhxQMcfg5dCDcz",
  "key8": "4SXpC2bd66NPKfyFYsJ4Ecbd7aXjcapbDShKZ3eZFdkUKyxHwESA6pG99ckVoiukUGAH8LJhv7eWMftmgse3SLNB",
  "key9": "4wkAVBB3qvMzeUkTUEWYyVGfZwSwjWfYj6GUqhxVGjUhJRq3cdxJPoPtQ4NSpdb5YHtwBbpgxytttYpqaNEaMdmD",
  "key10": "2ueXF2GyQv4PqvwTn76xrdVxo5t2yRdfk4YefoSDCDiTrMBLS2JeWrURFqNuKgAgFB32BtrWqMNBwPXVQ4zea66n",
  "key11": "3uKmchzcbrAQMscegnDMiatFT55zpPaFknQ9EsYpskmC8epbxQxHMZnEjBvdmLA7MyzEWrav6LrEDjJLFH2Xfdwj",
  "key12": "3gUZ22FcRHRXiDCaB1B2fzEkbu2bDi3ZnWYTSZSr5miJ9QeCMYpBCBZWqd41oTMdgPHwss6GZiYKoPqrGUrQhqvK",
  "key13": "jTBLjMoJzXbPM3GGS46q4zWtpXtB2ubQPfsZ6FycFMmejdYaHaYMm4fpR2rKegvhZtFMhptxBS2yXcXwMy2mL3V",
  "key14": "565PeKQfYAsd3x8sEvdzc3gwAGN1U7pSxNk5aAY2fNRNW21DhxcM4wti5pZRuaNMSCJhiu88TNJiqqW1LaGZfVqV",
  "key15": "5vFxhKNXtRtef22Zh6vTc2Gw3tXbpmT33g7cfWgpfw1GXLPZAKnbb4nn2PWTJPPDJN8GmBtz2KdAVuHKZtemtYBy",
  "key16": "3fYndhXKDXpgjbYbQgqyqdRbBudevumVZucfwTq3LW1SX8HP3rUyzX2jWFzS6xGR5z4dcuZmsqujCJZXdBfBgULR",
  "key17": "5ArdNuxcFj352D3iA9oBTgMQBNxPR4X4cJhvJ7nkj1ZYWDFVKdnsa3WUheFw4Rbus127qhbcDNsEgXMMkyeshaDP",
  "key18": "8ZqqnwLYxrsMehjCCVaa44wknfcTAYmK7GDN8ZXp7a38XRWcH9w42DbN6MtRy89toDv6ZPh5jo7DW2tnjW6XvhK",
  "key19": "376yMAZVWSaZuP8GQrT8ZA4AD9q7VtYXpB9xEaAFnfiWjpukAF9mPvrQ1GPicBgUSg7WVb6iEWr6MwFRREKWFgrh",
  "key20": "2hzsQj79muSimqYnZAmg1G5CR9mCpZjrWTF3j4WTuBSHuwgHC2W3sv7cL6kr31dDXaUVA97Z8mxgsDDYqaUEJJWw",
  "key21": "gsaNaRWfxhxLqiMPNTe7Y64YNVRdefj4hDmW6xqzwzZVhaipkgZT16ezHXMx8ZJJG2iP2o7BHXbn1p3VuK1Dxg8",
  "key22": "CEETSYDrQ35V65rx1rbeT3YNw3aw5fkpaUR5v71hEBLWcMUcdMHtkBVcgumt41BCidFszXNrqHAKhELK8fdVBf9",
  "key23": "2NXjHYNFfZSSspZmkQh4NXw43RZTTTfQDX2HaWxPReZwvN4ZadFRiWQzpggq9nn3zxrYqvbNW8Kht1qmMFjB2yg9",
  "key24": "tFGVMZJ4WwwXVbSoL282D7QHdmBGGx763WePMrt4aoEGVHb9Lm4jUe6iugxRvULLr6fw5uuzRydBoX7oxjDs3n2",
  "key25": "39dcArgHqqVX6qrGJ5aCXLuAGYhkS3qX7Tm671koMmy2PBDREZwM8u3rmYhGn7NYz7EZ24RC95o5zSPUw3Dmju1T",
  "key26": "4EdCtQ96vEhm9mQ5uoHccPZX7AFMKVyGnSEdWB6vkrjAvpYfYqMYWd91Pyt8zvLjyShsnnrHiKULFyHTQjRKXnCm",
  "key27": "44B6bKzwLhMrqX2pmrsqZtBKmhehVMhwFReP7jP9opYxgrmxGSBSAwQGBRNiu2DLjSnJjviDxNhGsMpYA9WD7G1M",
  "key28": "4AznwnUz7fB5tybSVNjWBuBCMZTZdHWiLN59Z5h1pj1QrgjmH5wR3oQ2BPFS7DKNcvHvNeNg3xefLPSeLzZZbWYp",
  "key29": "3C5Woiy5gcWRooN29z44pAagzxC3iT3ZZF1eXuRkoeAVk9D2HqJBCG5zVNQctkGA9ZuZdm27xEuhHNbzXfhdqZWj",
  "key30": "sMQZ7LfGG63YJckbQCxPzEU5Qw2eXbMWAefi32bxfkX3h1VaWBY9QHKf5wrAdv2GDPjKoDTB2ty797pgsYjZmkH",
  "key31": "3mE52jCKdA9dPBAp7iyLXmtEQK8gjhKvNXPLLtyGbV7669Sif9CkzYtGGAmyyey6s8KTsxYoKPcrUjzQ1A3DYZU3",
  "key32": "5xX7qM7YRLHyU3t2pMXVM8gTZzQfpTURYbvsuhjJnrfrvKwwTQKKC47xSt84zmBJ1nqD7CgMSRchfCbiNHycUHha",
  "key33": "4vXegfih7fAnERLWASWnJBy7vZoUzX1LzL27Y5e3hqXiLN73y578Bz3R7EbPvsGjyCZgqJSSs7DMwKGNajuYfzHk",
  "key34": "4gqrbjzfmpPjFzxnt5H2sP7kS1NMKuT3R9pgpB3dE9jJ3AykyJvNH7m8EWPctXnrLgH1zvRgxDe1KWAG6T8ELJKx",
  "key35": "5ygt89Wf4My4w2fn3K1gUzETSsHTqUdTp7Diijmxn7AGVASVP9xxUyBrmYToUzhwzMcGcoV1ekEUtmMuL1FTxqHb",
  "key36": "24iS4zebund3sZ9N2acjnTF634ujV8LJ6kaFJnHt6HyuNXaKZHB1JUGy1FiWx2PryX6saeecKzocDA7AJodeeoGR",
  "key37": "3v7dGu4hxXkLxVaqvdFuc1xxHpmF9k23GqbKkZmMN495Lbwvnv4XPdmGoNtvfpNWJQ1fL2PsBSatqQk7xTgAELNq",
  "key38": "23AyaxedoDZePm6a1ujat69fd4yqrNhqMDyWer1GocvuAFdBodAasudKMmngcnajff72HYsRQHP4qr6phVM61Qre",
  "key39": "38QSqZmJ9b3UAbw9GtC1NphTSbujexoJjuoEC8kFL2bw9kpGMjsXEAQrME7x8gcS1aqYvVkEzGzwrDKN3iLPLAo1",
  "key40": "2V9ZrhmvkBSdp2WVDmxDXD6A6gXg8r7Hws8VovCZRW8FvroPm2JNX3toBxZ2dEknPAtv4B2fYWVXv8aXva1pwd6j",
  "key41": "5HXB8sm9MJxnFoncF7oraQX9kHecfheL9bhoBoMU8maVgfiNUxGV8PZztJm4Cka2M9vMcREWvQFQiNi23UK2SgPY",
  "key42": "2iQ2GhdFUmxPRhKEX4Yu7vwXcpgH6UhL2znF3YKVZCyjwwtvHyFk42HuqregxxxYEJU7DLPUTwp98rhaiGxMShZU",
  "key43": "LvSgdeHBnVKyTGCWgFDz2sdv2N8gcFok7aZi7Y1P3mtw9RtUDLutmBvHyHQTAJWPpFU8gAkmAbs69zmtkUCfJPX",
  "key44": "4BQb9mPPDCKFLS8j6qDjXorNptDrJJmTgepPmkVWBSLKC5B7owjw99wpzAdFbKre7q4QJ49jsc8ytALh8rUTyxnX"
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
