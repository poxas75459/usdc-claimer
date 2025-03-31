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
    "2aY6cTNmSuPc5c8mijW7Z1RMb7v35L1V1pfN26J9tRJKUYwA1QgQXGzR4pTiCea844RGXnSPmBuLcN799pUYprRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6nRXvfYmKKVKo8udebmtq5Dowvu63RZUGM97QHpVeFpWrvGqngq3M3xcayuMSkMJuqQCXhFPFW5oVJTHnUyCqvG",
  "key1": "2LHKkSc37ftmtDXkwNyGuWQWc7xKN8CZcGVRCooUVVmXqeVgV1n61WdEnzw888AJh6GNMieniDbocH3Knvmdvv24",
  "key2": "2Nq7n8xDSvGzMzUGEhVj9w8pFRDnof1DssC9xz8YfxUJGQuTXBZrAb4x9Bk8HqmyFBHUeB7jTiaCaMDUQ7orXbnF",
  "key3": "5jY6Xmgmp5VTXB2aTAc5Qb2nNWUGDZSNTzRYFzfBVSo9UbM31ehimk63SDDzJFfLydr8Sm6Qub2vbUTZ12oDwrWe",
  "key4": "5qYrZ7WqtRrBsQLUya6W6kVqPHTRT2k4Zua4L58vASicb5RhRTEn11TqR71J7duXqkKR1NV92v1zSfkoUBREuHDu",
  "key5": "4XxCXGcqyQUyAncj7Ss7saB7ksBoGGcuYbwxbMTEyqHuoFxJ8RRTwwJryVbhppGDwRQxugABMqMDHTfvPFuk2k2V",
  "key6": "2G18VQRfxMViJSrSUF2LX8t35owvKd3vpY5igWxfBWokeKoEvhs99G3Y5dKcazQuD7VPs57TR8YGhG9FmgwqGKZ",
  "key7": "4BDTDZszA65WXCrbShKYSLrvHoFKuKVKZzeEx4AdtUWyJyfrxHQvS2SHUioYAKwyhT3HqTD95s4h6umEjoTAZgC6",
  "key8": "4xSr47SUizbHV7kCnto2cRV7m2unvDMW6sr7FdeUwne6kxZBY2QJnYjtzmLjLzMy7yVibvqHekXC2MNF88enhCyc",
  "key9": "7iqLAfrFqA3WSt9ecXGKdXncdKjnmLCXhcR8WT5HQMvJ4VaNhjX4SJBH5zRWozdM5wbJ9hnipHKbHZVnp1wkASG",
  "key10": "5C5jbiZzFTtvzMnMH9LUuFfeWcQuU1ZuQWz4sRDPj3ALRf4GZ5uiLZtyMvyWMUUAJcA2UYg7qZZvhtLpzgZZ9Mzd",
  "key11": "3hti2Nt2y5vbLoaD2qTtR4N12p546qj4QwgCr6AamqX5AMY53UsvGqbwXDVuiFtWygGPBBHrrJCNmDYw975Zg6ky",
  "key12": "359uwsjsgJy2zz5Kduc56FJ3kteuL1NLFgYXe78jFNR7VdoNUkGZtL5gzozX9RdFg5A11S2rbSp9fuhy6DZLqNHZ",
  "key13": "57Gp45YqFTeUvTnzBJEP7y8DJQp5YFrr2KHFJQ5ewN98uBQHq9MCk9hWQVB4YvNb6P8usju5mAS1b18uqndGNCoZ",
  "key14": "3o8SWY1gMR2ag36XEb6bLakNXXWig36TxZ6CzoKkyCdk7umdoeahn6KUwecwb6ZLNw3GNkdEaFTER3AKK32fAQJc",
  "key15": "3eLwPFLi7uWiFgRPi5VuziXpxf7kzkR1qLo8qY4r4M5862osaMv5yFbeb8io51vKd2pdFjrsCPitoGMpoCqBp9b8",
  "key16": "215DRTDcg3ZrQNS8U8ex7wAJBBZkH952wWhp7U3cDjkMipgVBzhKDxDHx4ApKSSgKzAemuj88ZzatgtyhevFjBqV",
  "key17": "2YMLyry5xWq17HJsFftNG1Z7sx2X1KLr3BJS9xkDzwcENivmBQX2tkAiXWWwuwayNw5nuseDvHUBAN52Z9bK3wYi",
  "key18": "66i48rEFbSstobDNk7qkSU9RwKPRUueKZaifiXJ9R6AyJ4sjyX2z7PgyjbUD4GRsDecd8qDfzhodJJZ48Mz4TZDQ",
  "key19": "bbtZCVCwuAidpCTT66V8BkM1RLwNm7xX29bx1VxdxSGnGVrBaN8D9asoNompMC1sUpbXXMmnDMaQEJavMuWXsmX",
  "key20": "tjDUFyjbh8s9869YNQWmiGmgXCLejuHoQntNNyi9PKpdHSMzbm4221K3G1wYSixQPDgyjddPHmkNQiq8KWP8XBs",
  "key21": "4Hoif6YSaYP7g5kuc4GPqPQJCiXi4PEcUEZpSNLQ7ToSbB6VxhnP65aXHvF45q9Q8GYgtrhDv6gz4Qc2yZXJ6jhk",
  "key22": "4a8VZvoxMC199mwhVLdmnc1boGo9NacnZFLJ53Vio5DADdnXNY178F9LTXeHR3cuLwL1ppLBmDuxj8pnAD4w6FfD",
  "key23": "27aw4j28yhETCkHW4H4m3M57cv87sM5N91vXzJYzZHUSY2fsYGULPssc2cu4mKYfyWD79FuejZPJ2AyhsaftgfVD",
  "key24": "3q9EXtwAkqVKnouWYdxmDpYQgAgKnD8vx7EXRZo6NzompQpBKaTCQfuNSx1Yksa4wTCSsmBKDcPjC7bDjnCZdAKE",
  "key25": "287xduDpjWUGJTNGsvCZWLpk5t2pnRS98NSa2sSWDyZ1ajJzdXPd8HuTFZiWtFPiTcMQVBo4q894iaMzM9WoGvtt",
  "key26": "4DGcvfmcK3mTRwbnaSD55QaMtBmuVoBrjwDyk5Eoxrqwu8k6G8C9J8HYm3EFxzbzaycJtWhdkeKyANQ1s39Un5vE",
  "key27": "265PLk1BRtRRbfUsRjJEdUwm9vB2CTuCWv81eQVqv8SWkBPgwpnSsZqor9L8AyiZcVoSHvP8JLWWtZr8fotseLKS",
  "key28": "4YRAaWuD7bD38gvCiZUob4JxJN1t4v35eVrqRQfchpng6kps3YE2b1sctRSpJ7bZf5w9KLrycdRDhC8znf9CPjFf",
  "key29": "mpsLLJSYoQhDRMRyxnwonA92CXLay2euduAmcaf194o8kvqxqJQD9Fzc15MqrQpGWGujUxzXnyksr45h4PEZv33",
  "key30": "G6Mx1tVBojXzFbroa3pZxTMPmY3RdWb2PyWP4LGPuJDfBbYsgVVKLGPwyNAg5DETfS6uEGKDHKegv4P6zFzCByM",
  "key31": "5sEQsbJXuDchquAhCFeSpa7Ee1LTCoXMYta6Lxd6nNCdz7TZY6Vg27U1k7abQ1UGBYUeRZDNdMhdGzzKvsczWktf",
  "key32": "24HrRQ3AnzVF5FJArnSw6iefn5oJF8xmWujC1xdAQ7DBQY2AaTK1eScGDzT2qFAF48xbhqgqD5UYNwsAz8JX4FP5",
  "key33": "5SnTHcoJGok1igA87xCJGtFkumoXtYp5vnfFaYtffz7zMteoHVBejMqmkqVVHWFYMUtoNvFTTkRhC9uf7gL1f4hd",
  "key34": "66SSgSpuFHKKQR3cgip68wt2bJ2niUNw4NvhjsepmfmA3F3VLnykmLB2FWzAECodVL9cbETz1esJHrTCxwqxsGcw",
  "key35": "2RjbzTCtAhYBJG8KffD2ZbouSeaUjXorQm2fNFgqyg7ghHNTYKAWUhZYdXxCdvJv71NJuc7aVmuRuugjSvsm22We",
  "key36": "4PStjwH3Wf1LUBmQKqfzFuzsfH2ytH6GYiEHLfAFsHKG9r3KppXwbDWY9xcwVj2HdhypesHQwoMVJjdcuoWM3bzj",
  "key37": "2GSrQMGr68wTSxCiEGoNHk3nwig2zYH35oeMaqKrh7Naqpu2yD5FkH9Qm3XUkNdrx1e5LdDKkxGs7Vr7Bx2qR7CQ",
  "key38": "5aJSDxDtwJfyhp8NNCNqZKWcJtfWdYnPUbVDHbctNTRpa6gyBqraPBMcKYw9hYRB1udoFtfkj5Grr3TAUZf9x99W",
  "key39": "5zLUmbTsaZKrXDyHZHYrtRLdUFZxcAzfPFZRqFVdXV1c2DnxFJnXKgSyR6vGqWiocCWYVsoFKrc7DgJZXUCi8Nzk",
  "key40": "2u4ZVfpVodTyRMtXcf8m6xS8NQyMHABmPqZTz1AG6gamADxBsGXU7hxXpj76r9fFA5yF8N3GmhRRw48hSuHShfHi",
  "key41": "zWPMA9uakL264cPYMttePx91NMnPss9M81K3UpoE3jnBnxAYHEbKa81CXCfzQtLFHVrPVFsgLGkCLSSXrSEz2pL",
  "key42": "2bDFmwS6VzsUkf2ReTGLGUUA59Bw2kFg6CNqwZ5X7jDoyxGPAFdtdKnj9F5HPRSLzGSh5sQ9vvDCRvCbrPyEgWpZ",
  "key43": "5VuxY9MJNwv7wT8HTF27geveih5QzUBYrJ9gokocgk6YUQkLhyHAXJz9vnphNaTw2FCc1PKSSV1jbQ2ZVvGdomro",
  "key44": "rXH7q53dHaQn3s6tbXPuw9V9fZZDvjd2vP95g9To37EtrQftDAKTJmxFCM2cWAEkWeovvpG3H1sNdAUq6BugQoJ"
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
