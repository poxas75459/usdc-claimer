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
    "65SYHtGmWiY7bDdi6xzjarwD9giTqnp2jsrF5bfmWY2RDvscpLipkSyZS1xHiHz8S84zzaA9FRkbTVq1QgWSKU2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wfiuBBWFUm3nS52LPVE3ywAWU1rk3QsKG9JHnRW8j2VCfB1UacRriEHpxWDiy8mTP6uripEc1mNZe85c2maA4c2",
  "key1": "2FYGesyQsLy2ykEXu91TS8MAsSdkSVu3bhTN8rWpZJyJMMnhNN9q7bevSvSMAAzEgqFx2gap5rcc6W3FJ8Df8kji",
  "key2": "5S62UMqin3NJzQvc7LGKPZeRkEjaEe1uKrRpNVxvK7dSoj5uoBcakvRywuvAFx47zKpjFHZBH8kYqJgwzRMKmJ3P",
  "key3": "5BZ68xtKqA4N3T3tbV7uJtRF1UJENgV1W2bsJqHvT8GCvYWF1zKip2yHGHYSH4EhWcfqkgoi6stHre1NygSfGA1k",
  "key4": "43foixnN68DwdR751UT52Rk7oaYDdy8ij49PExfqXr5BrHFWv2CLCBq3oih9HN4MWRNbrwrHtVBaZRnKzKmtiVW6",
  "key5": "5wQgQTB9ZGB4adU3LwwPPYQyHfXe7m1HDNympGBxw9WR7fPkFhQnAjt579Pb4FKQmvvHK9xJQGRWgbTom9BudMgz",
  "key6": "5j8QB9uHDp4mgAq7QZgL6b9XyWU23cxQUbtvPeLq6njXUzp1VYzgumX6UtwUo7YTbnrvjVdpb4bTEvvSQ42QYTiw",
  "key7": "645iNfCwxrchD1w4hrNemPAGSVizsw7icLwoQeRUvjjNCnBHVoytJyeQp98BaHwxShA6X7L3DeMtdEM22NnZmei6",
  "key8": "36LcPJLn6iSU4EMEhy7T7ge6WYqjv99pPKMYAHckpk1nDfoSf2MBZ9QbhTFUoPS5SmTwNvT5dNfs2A23SDfM7Dz2",
  "key9": "2dVS5WbRHmajyFCXFaMjumQiHizacdqawspAQPcxTGHbFSNNVWaHMkbuMAHzdY97uTJ5Qe1YcpZqenaitvujGv3z",
  "key10": "3r3FB2nbJk7PdbgfqvUrJkyeFb9UjZ81cDrxubdRR8VP4J69GsXayRQHGtbtdUiBvsxVJRes1R4e3dqfqVkEh5id",
  "key11": "XaASnT1CbpnRHcukrfR8FiiMBgoAkXjsLBCbefQ3tQVJQYo5QELxdFtgBidAeubpguoHfbGjXzo8fRmpDeMXbM3",
  "key12": "2utzKyU9gXBzRj3Tgj7vBD1kesSKPLT9DeRissTGzbWSM8ZZSwo2BNVcuiyh377sBXdyPNa2yqJqadiUtD86xihU",
  "key13": "3FGC3NNXX3jmR1SZ7LM7QrpRCKvu2ChhRL5V86bPXeko6NnPnHhHyWeWHELCStMbQquok6HWcKh918x3NJ86NL3X",
  "key14": "3DJ11Kh6WcszaRquaz6YSSYv1Qo69wxka9PAdfFSyE2VKxJrvGvrXLY89tteoyXGUGkbGmsXuVVk5KSdzgybvkQv",
  "key15": "4mcwKd95YQxt62fAMMtD77k5euVpNCzH3zu4aAwGm6Ehebmx7Cn76iN9Hpkc9oG7vs8XmtcuVW62jK1AVDBzsgsw",
  "key16": "4L4JGGF7B1cmuUpVwcooNEhMUtvhFbL4xYNjtdjd9gKpJs6mu76EoXZ1pwFwBmYTEaheTaWTbHvbDQqyDjD3NKvd",
  "key17": "4yaxk4AUJx9BwKCW1wtwe2xAuA1F6bF6mF3u4UyB7r16s3KYZaSpD99ocbX25TRwrNoNhBwmgK2Dd27jY5fWTU4T",
  "key18": "kLGHoCJGEJGWgmLwBaENNpwYA3eK1bKmQdj9iMVMzK7Rf6H45W9AHymguReZ1d5buhCfQVBVRYhV9hp42BNTy9s",
  "key19": "5pTiH2yMwFeohFxwnLxuCgM7q2bNior3qhBJbBQjYeNZifZGs9jqduMUz2n9DHNDFhyAV3mKZuq6uVUd8XfuGzcG",
  "key20": "25Nb6VScCnotY2mJFo5j8xbwRvg5hrg1wnC8tKV9ie5Q3o6i58reMRjQC2EdbcJZbxJ3Ryy3K3nuPCq8baYexxrK",
  "key21": "2tH83AjSffrUjHXww5Fu4djUs4CNJDiFqoTtz3keK4RHcytApyTrYJmBnpLatSNYyF7QkahyMXcEEvwkPmhkNGcB",
  "key22": "41bz87Ha7PU7q6KUFSyNtGLUjA4uoARnv3BrC3PWB5FxHxoLodyhDFGMHyWP7HrLzka8KV5MkWctNaTjmf2Y24fV",
  "key23": "KW9BxJ69GM1uNKG9np8TFcuDwti9eioVMegkvaqSG8gTbdEY7BpaZxGATVCNU34LH21kHQXJ3jF1puYYi82KtuE",
  "key24": "3uqbq9B7NKiL2pghHmA53XctTZqKq6myqJ4EUWjt9Kjmbb39cktHzoRkNqJkXsaUE1hwuzK5u1mc2Ji6xNEr6wpP",
  "key25": "289pX86okeZ71cfA8hUxU6MVz9NpBHMFgFahZvz4Hv23cSf8Qfd6J5NYok2uVBC4jPpNyeGVvhYcXEhXxhwd85Xi",
  "key26": "Mnnjh95LajxFugpHbYXerdRjrCimUVqGkVEHjfgrnTQo1Gs2oHRdGr2tX1x2UZSJNp7Cjdj15CkyvhPXVJzzGPf",
  "key27": "5PwdP25FvDRMDwkw6aQF2MvK8UcZoucqzq42CC4zcRM1FBModTBiKg5v5YZgymQsrBTAtqYu8Roh5VbyUzwLCerV",
  "key28": "44PujaemPeiJutgnWTn4bhkUSiqJq3mmK1t2YsNe9WsKYA1oMGLdRsyxAmsktgH4noNwN4uKNdCy2oSaGMaE3M7B",
  "key29": "5yGNKgQvkRWxbiMjbNrenVN3BMYyz8jqY8D2JGgsY5gggvoysCAf1kwXZwsqMp6zmv33HyxfaEUqpr8yn7AJLgEV",
  "key30": "2ooJ4yEJT4y2QZ8L9zosXnJPJ5kDNE9wakAK43foY76wSPuyWkzYEoqtYqb8f7UKNtuvZR2S5hpAXEqVtNHWxotd",
  "key31": "2aBaY4VbTbtiR6fvEFAoqzpZBKkfeoUtXjD3cEUaHmgjYuxtb8rLeBNwvVq1bbh4oAJrpEnYahqx6TnUvr4E4F17",
  "key32": "4LDvAAS3zXRcqEiBFgobUFRT4CjWDeMG9ot4yi43qBT1JR7XDyQm1aEJCvmeQRzRD565oyMm7dNVg3Ntmbgwq6PF",
  "key33": "5YoVewYFwZf7tgf1YeueYeJ2aSJYs3cWTdFnrYUV8VEMtMcgYKs7h6iR7CNg6EHFkZ7ByJotQBjp8YAEoQSE3rTo",
  "key34": "7nSig6CYXnFWtZpJnb2Zv2MahKo6X9ckR4hTZNj3oscGtQApavCD6azU9nJ4i16bJfVAkgrS29hbe8DHhmc11B2",
  "key35": "67k9939GoNi9qHoTLq1x5zyBbWDRjqRwchPauxNL9J2hW72R5sinY8qR63P3heKmWW7WLw3DbjYsYLXBXxQnhWPE",
  "key36": "5PTy4xtWcR39PPKiJu8NKzj7ZCcddXiBLQk4J97Te3Q36UgTeTd26jVberEvuss2NMM9jmbkznTaMff5Hso72qmH",
  "key37": "3cVyNXBL8Qj1vaoxhtPs5BFva5BV79rMbYudYYd61AXEPDZB6k1W5yUdb1WWhukoei74m7zVSU9txriBeABL7cwe",
  "key38": "a4NoJN2pCVT4sf6Aid5wcGJcyHZa4HDxgGAWdFReb1FrappYK5BoKSa9yakraxGqGVU98fpmrsr5Gq3cq159qvW",
  "key39": "2kptoN5PLDf4deBVpvizu4QKKWFd3QTWuB5SBh4zMc7TYPQZdWsMq1AkbFYDdhAV2YaCykE6hBGpx4Y6MrN9gWfZ",
  "key40": "5s6EaDcdpZ9Ee14hoJZoZxrXM2yqrJX7wjBABX1pRfevaUdyiszzsvP4EA4X7eucv9nG12oMxcUk6Zk7xvvDcxAj",
  "key41": "4tVDTA5FvWf8FJhadiFB5qyfa7EzHPaqhdzLF4M9SMpPArk8tRBumAGQsYjC7fDGt4QnvQHnoY9rD3D5H3J4hBWR",
  "key42": "37RUrx4GPcLh3xCYANVh8nhLvKf3wVgyipyvEcYotVGXcBDXa8h5M9SwUF2VUsVUUasPrQREGdBNAJwK6kw7zmXp",
  "key43": "51tN6DvNdiwEjtqGgEgaRkvKCvuUdRe5f3x6gC7g6xg4Wimem3u99qHyLL8s3FGKS2fCZepe9mc5UHkYxBUxnvZP",
  "key44": "3qpWyWBpfN7uBJPQqh1Jhq5PrWrwjTEfRnwYb89TGfMeJZ8fTU3SmSDbiDfmWPsAuZtRjzghnoDzJNPYmCVFBzUw"
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
