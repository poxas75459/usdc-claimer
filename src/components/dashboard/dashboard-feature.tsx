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
    "LWN1sGt4z1nq1gG2As7aDq9DXeaBEuhkw2UyCWaRS4ru7EVT9Cxfx3xKeDWRz6sXk9r1UxgEfZuJwYYxEpvU4yG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mpQkVuCe8k8rp5YsP8aPzyzG25g5bj8EPZfkn48LnnAgJvVgbewVXBojpMJwdkzBFwhdp4fY6ucAG9Fqku3oRFM",
  "key1": "5XJYNjE62iaXDTkVtC1BctKnH43x8qYzSD96Ez7qh6to8RbsicvqGorESCPEW1WRoikGbVuJjjXBpaEysu5fvVan",
  "key2": "447dSwAW8MvHsfLW4DpvGaSQQYofCmETmvCdtRbSg2hUvK2yvTVRtany4VTcHxKjZzBs3cXkxh7HrjY1Vna8F6Xn",
  "key3": "3UbepbPTwNv3P5VnhEBU555V8WTSjMGWUCVtxrL4CUth9tA8PHz6caSMzRv6KsaKyt44oYnSnhy58gX69ipK4hDR",
  "key4": "23wDrPkfKcdfJtTdWPnHLKVq3REsdW1DvLmtTD2o185KmgaTQUoYLYinMH6UWm5A7b5AuoNfaeZjcoF88Z3tkttp",
  "key5": "ddTabHonP4k4tFJqNcySWCQVNHkVBu9tmuhALAiDmC2Wq1385m2uyH5uFqu2JhetSeYztGrKSucPqq15PZoSa7M",
  "key6": "5nsFmyRV7y5HoDuXgXwP19iG9dFuAnmdurUJPsjKARjPZDVWytcih62XF8mtT8BuxYxinw491ChUVtpJNBJh1Wmq",
  "key7": "28xRCckcF1BgHryj55CiH4REbGqr2ozofpk7mDnCk39DrMEVELAWwVrzpUZkkUMUUW7fPPV36FsdfLkKPTzb2jvJ",
  "key8": "329E6uA3jMwwVFsWRRmLajua4hkNtychockJaGymXqoGbPqZ3TWSyeHPvSAixiYv43pcVxoymVyQTu6CFGbQkb1L",
  "key9": "3JbfSTt3UDYm1RCg7iZ6Fh4cTzFyUYZkL7LWz5NZZbXmxPqhYt5YQ8v6bzH9G9yVmPtn6U2fChanLMr66LkoEhyk",
  "key10": "krb94UgZLPAVLXvtYRn1DHcAgJLJGt9yGez52AdqEJkGwygbqhhwfzFenpVgZyNaspK2gTfQVaVkec2iEwnC1qF",
  "key11": "3hW4ks832vQEXLqkS4beepDiYtfWGGYmsYXk2RqM5XAF6gCx9rh2VAqnyDvqvogxrRzfgkVa74cgV94zzCybTeq9",
  "key12": "67Ly4DCFYtw7tt3xYB3NEEg3DeSyXLXNsitDdohjYm1QaF9rKZCrpZqQXJ2zmY4GEguoNi1Hgku9uUHsH3Ts72xf",
  "key13": "4SV3PAYFvnaVNrecFcGgXcNartPFpiXJg3DKiiZ12bbcPx6VBp5F3HWfZqQ3rP5zTst5qmnPCuPJP8RfRWdiacMQ",
  "key14": "4dZcUrtSNKwX5YpJKdNVgHabJYXge28LzoCv8dWxjzSouYkoPRwJ2sPKbVPcBiuqkaGqaQkwb6w8C4A59wF2xXSS",
  "key15": "5Mv3G5o1EyUWD26j5nLuMBm2oj4wbZHXHNNbdqPfdc8MTnPyvFipxKCzcPMhbuJaNdgwpHFW6ENfHcg2xiNNQzb8",
  "key16": "3Wn9y4Zbg97mSGg9t8w7xwTz7H11fmhHQuvPaK1TgxXeH5Xwgvpn1qgjVFPqgWswtTYjTRXnmLHQaW277ctapaFv",
  "key17": "cLmhB7VXtqQmSt6sjnwd3Q7oWmhN87NdxkjDYdxQyFZjtkVscSVq8fXvGzM4CoYhf9AFDAjTwKks9KZ8B1qwCCN",
  "key18": "2ASSAndzqR6deQ4uVq1MpvhbtvozT6Anb6yCTHZayL7ThYGrEBo86GsSo7E5gV7BMasaeRwmcXqnDVCnpmJQHvtX",
  "key19": "3k5Vo4dXyvBkoWC6x1bqqQ4pkAuoNQJJvU5uE5K6zmW3qw5JKoDr6ohhL5XKWdwXDURmzRqyYg7WxDCF1RAHzphi",
  "key20": "2qZXroYUYpVFnijNjzvggoi79uWLQyBVQnXSGiAsWfFfLYm8TTR8EX5PyyPzjBfFw1dz6eaMWZ5Q3yAbUG3wh3EC",
  "key21": "5BneyPNXejccKojWYA9grRvwHxFRbR5JjKBs3g6MKYjPFxoF2CfymUVhkwUY5hFcPtZNXGJLJHxdEywa1wF1pGpu",
  "key22": "bT7UKTTuvBdnY1YLnd8GQLoVCWB2htWV41D2VZs5wKK1rb1FzjooTiTNzUzn1w8XdvLmFbbCH1hADsoZwxzFFda",
  "key23": "4MXX6Z7u9xPaisdmsh5SzHeR6GuRvERrxxBX7M2bARyyF55LF8VK1kdActPaGxqpSVJbPCQ3Mt3NdksT91pGpf7k",
  "key24": "4HDiJy6neRxzPxHBay8Up2u1Y9XGjhSoheeBZnxiTUqwMrDN77iYMcnuntQmJEzugMUy89THwBVYinds9nDjG6hs",
  "key25": "47kWaY1APtjyMxahyus8muME55QAwQnXTU66wLpCUCuCw9SdxQXD5w2J8aABjAfBvzV5NxJEwZrKM5SqeFXxrfou",
  "key26": "QYWVtkkbmqUexBRpB5sixRgknY4YkbjEEV5YhqLg3U5WY1P8ifTtNV6MWeLru47WBGCXbWEqmEVkDyqJWYp823y",
  "key27": "Tbu2dy48cVD9sbFr7FZvm6oXs5atfYGETg6jzSr7v7DGiZ3EJUzWwTKatXZxdeZxQUgKTPbbxPPnjLo1yig1S3z",
  "key28": "qzGMM6o2vBExeRJN1eTSasaJv3KdKYwFjZ4f6x9yPdtVKX9iZdo8dtaADjdvwQAfSbHLAGtxLuCbdXiPBUdCy4k",
  "key29": "4nxUwN4jY3hEFdoNqJcMAKEsn6SYTfdqVLadLrdPTZsPXCRWutqeCLB6uEVPQYhLaYU1HXrJFNHJmCVbptUgAvtB",
  "key30": "f43MKxd4XUFtVeNr2ZmQ41gWetmJefAw1suydZGAGrNzE2Wc8tQnivNk1BBQkhZFMJjZ1jGYDbrbQy1m5LnncFX",
  "key31": "AZwMidvQPd9Fj1rCHbgGqG6ciqZUT9Q5YbqHekNymdzB9NbmeeKztRs2Tjii8gwMqkeVj4U5buGB55gmYNrZ7nE",
  "key32": "2dHLtzE5BMHwx9Gm5h2DWr6HiAauhuTfofvGTM6VifSPV7E7PPss8HvZaxPTxBh7xXpsx68WrCJzw4T6PJ7qUdVL",
  "key33": "5ktP4EjYeSqTnKKq26jB1ne5E2VTG8Z1zWN8mFYuy33z9iQVWFvBjtQFPHQvK7fcVT38QmZoinA4ok3RCgpQ5pXJ",
  "key34": "2Jce7kXNcD7ftHbKMKMqF8b71PCtEMjNyRi9xk6tBKj6Q419JmRiCjU7K7eJ23RQofqGPuBDnftrx77NQtkQJa3V",
  "key35": "37qqZexqU8ghmn4zgWQn4PJHVSDZdFZx4em1bhdsbjoFJQZPqnJrCU27YepKuhhPdweWcEA5grAEEoaSixnbdBD5",
  "key36": "4oK4JZjpmtZoNBf7GasDv4fCPH4M4cQHuBG63NLjUGhJzthnq5GxJ1xQB9hY9SwrTmHZxwpm1F9f2nKszzFdmVcs",
  "key37": "31NGNoC3oJhwHwSSDcHGe14HvQuGoQmeJqR36YbDSK4KQQVicYgBce1RhQYqYudmxtXW2tB1DrM6Di4ew6N22R4t",
  "key38": "2TcC7kWML7pweBczVW6V8e71bu78FV2Vn1h3cZtwo2R3oGeLW528Ta3NiGUXJqFndPm4CL2241Ey68fVvttjtf78",
  "key39": "5oxFdRAc9vDqkhQQgQ5eEUKb3Jy3JKqpaHifj87Z4nWLFGZPNr75BYS7GVoM3BwcuXzTpSeBx8tbT2iFFjqKBa4r",
  "key40": "2EG2avRRmDSrtWups46rsXUQcvaKzeZxSqKhKWRuCRKWqCCLtyGRHxVsF83fX32qS4TfBpkGus6FjyjDtt5iofiM",
  "key41": "mKrMHZcEXGA1LcjJ26WcApiVGqMo7fqGYeKs9ZY92N5Mv3CUtYUYtkRSpzbpxdgskfXACgNRh1eXdATa3Uamef6",
  "key42": "3Sde61iNRCDa9SYG2eCG7LsB3UcrU4xjP3BZBWNUr6p5s5i8F2GAfqY5493pqJHtfssj9UYVbFkd2NW48nyahBgJ",
  "key43": "5XanECs32mvpcNwU1H3P43W47eVgCVEGFvToNsherkvL8LnuHR9qbyLM7WntXzazJxYS7qt2pnMCXNWH2Wa1xQ8m",
  "key44": "3AYgfUJybvDdpkLncVEDqtL5QqxdDiSjox6tcZr5aU1TRBeBjCsK3MToDp9NfX2rMxws4nm6yp1VwUJ81QtYZh94",
  "key45": "32yjXpKmfmM4bVSRW4mZ5Ruyo7hRHvmAw5kih64SsokAUJdRijxAV9EFYmHSY6isvwg8D4Bmx7VuUZv968dQQyJJ",
  "key46": "4SepYqb2QtVTcpQdQivFTgrX1WEQd9yMUznqknAZChXdFXrqeZGkwymWT23Zhn1aggLUUNb8a5YV4DZ1EERvpoxw",
  "key47": "2yFoaDVk7uAAHaiEAaPmRJz522MmaiobtBEQWVb8nntTsPW4t6bJ8djovFuehhcfsye6exo3CrUNAPgK4B9CNpnP"
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
