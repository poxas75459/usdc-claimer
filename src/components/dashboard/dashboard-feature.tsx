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
    "21jfJm8RhaAZ94gkkJubF6KZsxQx1GsNMHv57yeyjAZJJK7Himvqz1MrzAuFVMq3JGxY4SBPe1c3uKbUgyJKBLKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MKouRSpFy7Y739HixsNZnp25FB9WSN5DcfetRBGm2bBUgJ1CZTWUCGBbvey76GjmRFFVdBZ4yms2PKHQMTqkFev",
  "key1": "3YnuB8EYf6kN9hZokE6Ewx19npDnnBTGDa5zGDUE7pev6se87LckX5hpWJ7hBRAJCq2xjMBQyiH7NS1nPXNzuQzJ",
  "key2": "63M9hz9HK814maJVBrAPqLY2B4XApCNr3qmBgEbbsDsdZXR6kwKNQmxauSfSgYkLQH2A5Mco6LwaHq1DmzHDikGw",
  "key3": "Wb1y5bHu4PJFFdGY7aiRsHEoSCS37H7JMjjcNnGkedgbFiJdnkanSbqjNGNRPJLP4dQgribP1ypbh1VvFno8npy",
  "key4": "3xsUFqdG8KxTEzFPRLrAEshHaA5mekiAe4DE38pgs3GSEapSdHR87sTGygtfEifZGkoKztUDUMa9hLUMA1GzoRwV",
  "key5": "4739uGETgbqpWVeHMQ4ErKzjB7o9fyHYy735bjqdjornSwSWvzz3Cf559v3kk12DTXZMLX8V1uV6XgD3sYgN2dQf",
  "key6": "5DuqhFqjHqcBQR75m1kws4dWAL3CN85TPh4X1CDHtA5cWSiFwr58Ue9UfawxSeAmhEdaWRjeqjYjZAjg9u6FTcPw",
  "key7": "28Agv4wVURzE7QDTUh7rWU4HQFarhcJD4LxqGzWVBQRG9qjUd8DMjg7sdqPz9CCPtho3Nuk2Xx5dZxQSTUdb1Mmq",
  "key8": "5kfgyZwYh6aTashWjPGXtawWDGdw2rp54fnJBhRaJPtYQA2BhQPgS7NKajK1NScFoxZY5suE8HxBWrcPYLnWCwZ4",
  "key9": "31uLmrUZkMorRgbeaSFxDXRtfLdnydTA469F4R85crtDmZGgQmswyRQ8QfyQkPiKxYC1KDuH8ub7T5n4RARTg6Pv",
  "key10": "3MDC5oiu5NWhfNZqypisB4M16ytjHr4JoCyx96gxcvH2DbUigXGYSAaBxPaLxHeX8GcwJxSPc7cTxbKDnxdADNMF",
  "key11": "4w4pH2FD2jMr333TPCxBdqqbpTJ2qzSVBqwmuMdVitSEnRmNa5SDe2x96zfjQPC3Ykxee2gPtpaMx46H9FFwFm8D",
  "key12": "42K8bGeaLQbGi2GnfvCuk2Fssz2jd3tvtkwXUrfhkxrc5p6YKAeYXUeSTQsaoHPr3Sk9eUZKDUWzpyHuytey6Zy8",
  "key13": "44jANz74dTf1zxGGKb6wUMpTAt46fUaRaCqRt9Fp9z87KcnT5Pyu2rA3U3DwQLvULSUKUnx2dziAwxND4py6LdTU",
  "key14": "5makxwtgYUDZjnxA6TvR2FA7MH6nENckP8sQsFipd5B7mHoPqvvxxEXccqmytuzyXEdnkhxs8UjeMUkxKaM1pGaL",
  "key15": "24x7jWNm7RDCCCd2tMAnYpNu6yYT2mFbVUmjQrpTmD3bZuvwzxrLwNePr37VvBxcSTT9FntdJuGFXjYWenK6Rcu9",
  "key16": "29q8HvP8Ba8ykHDguGXZoXMdwotpt2gkRVMnxX99UYxo6uNiJtK5n269Rg4mYMxuENzs1CQDJQxHJXqzWUVxo55Q",
  "key17": "5guHrGxM2rEkNX2du1zmdtkAJSANBMQFxnrRV5uH5VwEHGCU7i3GS9nsxkGQbzJwuNEr6F3KNLaUYo6LTLyPnUG9",
  "key18": "28oRv4G8TxmUXqUQeRz77So9WQB3GVSJecsR4nGh4AjpMHMgCaCUL32LFWjHPvXLpQdP9dThm3hFvu649SR4nqNF",
  "key19": "51z44yHKczo6AefHjTERMCzx1w9Q5p9NvGSoN9pvgaUvKfsZuAdgLZyUY3WzeMHfhdGdTiMaKNzoEC4pHgToSZ5R",
  "key20": "2ehGHCBbsmobKzTzSuartVCo2BBzJEFFyVynzRQLqbdLWP8LrGNP54reik1uRFMzdrW2sXR1mbtw6nzVdBuL9Dc3",
  "key21": "2iymFzD1DmyeS5oY3CiDRUrcHnFEqpa2w8SZUFehnLuiKMATRKzwUKpWGH1WNK59zCJwgRrWjJBSuVhPQ7yUfutv",
  "key22": "xjRkHKdWzERtauC3jpPuzikdWNRLUgFfZiMwHhVEqCz91NjRPdEezMTi83NWxCRqLqytQyNdtxmyAkqWadr1h3J",
  "key23": "2RAUwGjzgJ2V2RXKaaovxkeKBZ8Si4XhUkty2kKhfbWCCWVV3eKqYVQyc6U7aNqMykt3Ro7n7UN1g5pYbZCDt14x",
  "key24": "3rLAr5YnbXKuQbPquJH6g1pVmezwu3ZFzqaJpKWcm7hgDjLrrppLzMHm4Ucnmae1U6FT3hss2s3iezhWpFGU1mrC",
  "key25": "3gKQRoAA6SoZB8rhoy2MAtKjBRuSSwEcHszUCDCFfrW6savg65JPRFkKUwRpcETD8wJ9pfHNSxxFNTbP4AjyXzxM",
  "key26": "2oFQ8AUiJRxTKEPbBeffGUymgdnAPXKjntQNyA7uePQRtcXR9DwrNsKeDXpwfEqE4nh18YvxDVjFpScqf7E5Sueh",
  "key27": "2MTbbMUfoY9HgRZ1MxY5TNenMiDWdwgSgLKSTX1UjFzrrcoEmJVuRMp4m1oW23hCt46UfQy741DkQpfF4UUg9EdC",
  "key28": "3ZhanxNJB1ocZc32eupJcqZse8U7j3iabbj9piLrFv3eVt7KtmV3TC2zB2QpxGjSxQs1VSBfYm1of2MrZcQVqfXM",
  "key29": "fNsxWj29sjem6tjPxmqMy3hxek5MiyDUzrgKCUXQPAFrohikwP6AvK91U1fq4AbnQvCh52nxf8z3t8tpTDuj29i",
  "key30": "NwWQq1WCXo2vt6Z3VmEGD5fZxqyrUvHRx67rVTxTSVmBnG3GYVxSSkQb8gi3MLycGCDQFgsWCXrLRgnDqTahBWT",
  "key31": "4gZYQSfdg38WhHt8caKWc4r2tnmxg5PVDH5UJTJKe71LFidzyKKa7JPFhHPyvQLtwYaV35nVt7rTy5KVPmbSbPoZ",
  "key32": "2ewyWNv1PvKGmPyCTDddF5ha36iMC6inELtFiT1neYiyLA1WBNT3eyjaNVQ9sySAYE1HVq52nZVo6gZSU8LhiRih",
  "key33": "3vE6UK39aG3MCmrchMpmLR89kY6gtqCK7E1hedH6omppdaq4LtnHnNdPmtWPTckp1rYyf9gpZqBoF2MUh7RL7oBu",
  "key34": "2P2k58vfjTWZMoQaLtYCMS7wyzFQVJftMGHXXqXyTRDgCi4LUkbhCiuC8J18GnRqJnkoJNetRU1coSStU9VWwgi1",
  "key35": "YtYqfq7iswcDQkKnXhxjyjqepGR4bC4nYK2kcnq31mALABCSLfr3ZjrzaHwi2CXxfmEhcafmpJgPga6BM1rxDgr",
  "key36": "5GxmwXZ8zT5Kkvxxmd2ax8egpmU59JHMHscv8KwXiZMzdy3BqNW3hX5ALoPodA2uoakAjcN6AGwcLGZhznzZZusb",
  "key37": "47cSEkK6CAvnzwu46LHA37TAyToyFiBj62LM2E6hFm91RPTTm8gKEFWrqwu2oKuJ7vwqVicXRwZQWFQdJQ1qhQPi",
  "key38": "37sHPk5pgFwmTQX2qatEVMriXXdQLzUX7GvgnJvmyybCQfENqnsLtgeMQQntaMcRrdfQM3kSicHvez7PZ11SjpKQ",
  "key39": "5vtNcRPN1rkTfYHn4gdspXifuHoBeUpscfN8qRxDtSiRETdfA5W3pLQmfzaVE6kwHCXJ1u1vX58H78r7FDxkrLgL",
  "key40": "3i1q9LqYRTv2Qj9jHDTjoawD4s3Y8se1Fj7yQDJvLpunVacaUnRYRKnHaYDnjBWBAXhuxJcP77P8daAq763Y1xQn",
  "key41": "4CHF74jK8N9Tnb8L7QZoLV7trPtzZPcLtRBXcxpC6ukWA8J2wTuBeh4v8yC1BKenzadCFeFi1xEeQWbAnycqJveC",
  "key42": "3jBbBd6AEN9cfCFBz27Xm13j6pqdFZpBbwfGhxmekEBQHJezwqgDrK6QNH8hgxozzSMqXbd6m7L68yDXByjkENyE"
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
