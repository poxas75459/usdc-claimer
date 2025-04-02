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
    "3zoxWbixiAiyzjqLHWy1YGoUKUNB1dRYdnY2dQxno9ih5E1yycEisnMtrnUKxYYMJP1KiLQBEQysKp8K7CRTGEur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S6X8EgXC1StXpiFYP7E4P7mJDttx7rHXyRXCUUuMezsBCMxEJY7kBuBqZXunxMuaxdgXsG2qSnAozUs6dY7c4XM",
  "key1": "4Ebsqapp7JeKDH83ZMs2Pk71GN29QRAxTs3NZpVduEywvGyAnPrZcKQPDLZ8a2qfYmAm3pFL4nSzcfpAcDPtaRAf",
  "key2": "5qCRMn8gfVBav3aDABziAFUJ6XciGx2ghA3WTmxejWQJWfC2sB9v4EGyTpGe1XxwUob3dt5rxWwzcodn339JJfzL",
  "key3": "543MuS9pXPjJq4zTc4bs2pn7WgebGKxoweungmf8ZaRkVLmsYBpgDqABGcfCAfbczzi97uNcNRmMdLBmH3MRG5Lu",
  "key4": "28nqd9BokVm4USfy4bLM3EKNFAvhhihWEddaXmYv2q5begMnTGNYizNeBxBDLxVTVVWy5ujEzvh8fDiAe5CdvxEC",
  "key5": "EbCmMN8sMn6anCEPqLXUrRSmxZoi1QBaXx5Nyrs8ejSn3B9ZfCTDxyaaLPemW1gkKa7u8tvFoiXqvfQue5PJ5aX",
  "key6": "27jwzFwhVtJS3Gp2LephCqh3sxFrmP1yk7zjpNBw4cErqm5ZkYyWfSHHQVzETB1k9CsJJrB8ZamHf9XdtTeDis2c",
  "key7": "2pRKt1spHDxQnRucFpNQ1fyyyyg3NQExAyuM3j9dzhxHxvs5AGFsgurnYSiAdEN3cgKwzZXJB79cuD5kporSfaP5",
  "key8": "44FS4s6bBMZtP4Exs8i727UVwE7ZiyNuoo6qjYsqJaq8HbXLxvPvHbRgqzReNLRvxHy7LyqSzgDKBW1pHBh7NGu2",
  "key9": "3i69LNkhMTdFHSVVsz3U47op7AVUyjCygBjjj8jyY9FRHzdeUJMti8PXvGL3xoTu88ohWUid8Fz8vBACmrznfpY",
  "key10": "AGuHJTjTJ3n23heu2C8RtAHRLWfSexnrAkYAGcRg1guDotr2taNUPk2p7hvAUeXWSD9N1GKhWYMptt4sXTqSq2d",
  "key11": "4LSHuEYTpc9ZBcdiAd76jg8qjpaySxsX4cGzsSfPMqJMDEm1Zrha5FBvitbzNTUgCszfzJcJy7nnFoxWj5YjRFwN",
  "key12": "62c6NeyEzJ3QmF43uUdRvLUDcBPYRucpZ75f3wjNRyaekxDxA11GYEcgjkn5K4PxGbf8j5swDMSbL3c2aNBo6qxp",
  "key13": "4xKRqyTQDzgxjHoKx2TwbwBuAVA2RQXLSrxLW6RvKZnSdFKH7s6sjBkm7tq6E6Z4yNHoFgQTDTpXGVxxTu7vnsc9",
  "key14": "3T1999gY6UEHdxcmvQiU7BBi6KwDLRJdXTkWzVUGzhZXjyfN3HS4RrkDJdYNMJ9mHsRRg78WYM2dXUbs1i1MKErP",
  "key15": "2zs2RSAzTd5jBBHqvaXxxeBZ5fmNdxw1qU39ACaVPF4K5ZzkGNbXntHiCrwYQz8KUraAR4ctejy6SVmWhVf8KnUe",
  "key16": "2hzVq8PcbdCdCuBgYT5xJEt1Hq1e7ETttmTfr89NUFCqnekbJAqhk5wubjQMo9EzQgcWzncrzcW4nNUvBCmZxe7b",
  "key17": "NXHwoQtqyCwgCbXQzoCDu5HUcR5czz4FpibsZW4vQ3kMFnB6fd6RjQ6Dk811JkLGcgT2BfzK2K99RK3vP3nCmxr",
  "key18": "5f6NQZhUnJXE15FASfhgR7RLqHw1Svz7sPZLWm8VDGhCMUfDGPWgb7jS3AfFejQVV9xZybLtkVBygAZmjRGzJNk6",
  "key19": "31Huu1xrVfnaGXiTe1wbFHAvJHBwDZ4Ucc2vC2rQPov8tZGxk5WXFc17RC3ANtCqJbcSybdFCbnfcy4A94KmMT9B",
  "key20": "3dBbiqX9ZDsWzSCaRJumb9F8DyYcDYL7xm9m17B7qQxhcTjbV4SvKq61bSNuMoa4K3TG6hfNTrUjJvPyGDmMvs6b",
  "key21": "4vsAdUhUeZ8ReAyLkJxWt5hMH2bdQbQqFdDqJnbF9BkAGxUZGgRSfFNzwu4oDyi4C1hgRbRfgJjPqVjtAjW4dAxP",
  "key22": "5payH5NyMdmV8Lrh2kCUUCS9AG6k4u5ZpebUbaKto8WQLQr5W9wHoGMHwvZeckkDC72hF8aUHhUgNLry16gYzaAu",
  "key23": "yCFHcb4zDJsZMJNjbPDHLqCMyPiVm1UTqRmFXYmwuxThBxbCSLLs2iMituvamSwpQ5bj3rj5V9gE6bh1kcBpbKU",
  "key24": "4csBUfYUTGyjJXqCcucpPufEaJ3u2f5CUTFFsAtcpMJZKMsihUVbKJfvn6xvNSXVC7XaJs41rNEzzVYs1vKzRiet",
  "key25": "3cNPaFveNw9UvckAhwNuQkGpaiFhhc8nmwkUZBVRzToSTph4iK9dvTpyUbugpjSgBPLXAgkSMa5JuCx1RLwVWbTZ",
  "key26": "5BLtgPJJsgCsCtLXRNren74kdqokcJRmBQ7L6pMLs35cRkRCYcLEFUsLCQoujJwFuWSjhG4q4ZPxSCED14NqiraY",
  "key27": "sa4pCoL2DVBt8bp8gYvNuE4J99bRi9NeSmYHxuDPjChaVswfv4X5edZgV91TEbhLAbBEjN4ZRGPzHvieArHUSEK",
  "key28": "2KVwsoCNWtQosQnNgZhP7VfovFExTGbgyTkPeKMsmNLZFAj33ASRFwrCAqxmiNeVdUDxicUBSer789NXhVZ6YCLm",
  "key29": "5Y6T9ykQ7yzgUQHh6RahgvMC2wqjRxqUFBmVfJb2WunbZPXtuFCk9mvQc6Ft2gMMjsbJhqbz2ZmG5BzK3baUQdxX",
  "key30": "4xTm1wrS8VCVvUWhBtj8PkPX9dr1RoZ3MdBBoAavbEnxKQGbK2f6Yey6RerHwQSGdHs8S7pnyBvgdnNxU17jEjsh",
  "key31": "2r3VZ6RN5UkL4cvQ5phaDHzARronwJMAf7tStyVDQSXNrnHXndDedcCQLA5ZQVdoZg8NEFLdjXMnVJjgys6xhPWU",
  "key32": "5SJzNsF9JYy35N32FjrmwRaUy6M9dniVEw4Eh8jXrKcS6NADX2bZXmSegEv2GTbtPa2odsxgEFCpRXMA2yzdw5FU",
  "key33": "QQVh7s5YaHbYjvv1FdrMHthgCB2pG4MnKrqy1KFDqz85BM3SifjMEbiDHsDPQLW6rGGBXVDFJVBoio6GUadFnGi",
  "key34": "yufRoMGLMQHUHo4U4N2ZoFhufafm2cC8jd1DKc6f2DcA9crrqHp9rzKGa8DjhABgiRMcoS3irsGUujubP8GQWUD",
  "key35": "q1rkwcpaXHCwkpxE9QxswC9t7FALbzngPytw1k8M4qGACcmVHyibnUorRWvaXHQQTYLSGz7rJN7cvu4fMUqdLS9",
  "key36": "58LZY6wjJ3xWEX3szutw2V8WTcFhypRaAg1DcPGwpNUCGdovafZc79chGBv5QHCjx6T95QJZE5p7e2jTdbWzK6wV",
  "key37": "5D12ATwYFFHwrJDB1T3sVCkuiR7pE98UogXnkfZqeyiuyg7XLN83D1qEj8dvhEvsWeFay3tVrpUiB1RPCgeWj3ci",
  "key38": "5RxEKYFXFKRQRx9DGKPQoAYFKqpJn11X31tMNVxdez6mwdb6h3et5FbUvj53MQVb6pKdoVwDxp3zKfXiEmkmGdU9",
  "key39": "41iyGyEnJwCXdNmTCqEo3uc3NzWQZazbXEjKFC2QaRUxEEJ9x16DNx7dKqRmmuF3PY2bP8XYfCCN2tBDouGC8RLL",
  "key40": "piWGBHsgNcsdaacuiuJzzEHnxqNUN3JwcdvMCffRCw6QYGrHdhJgUwXAygmDWPqEop67tn9Ch18da87bsFqk9FH",
  "key41": "3DgtVLPGyHMfKBDHEd4Dpg4S4XeazLNFaL3ZwfNe7ZYdGEsyhTRtrnmARSLbS2TCzA8sTJY61Sss2H9JVBUrPvXc",
  "key42": "2d8RvPLmkUoHbGiGedqeMQqrSwMQRhK9U1YFWZeb6AzsTCVwGzTNJtbSr23XpEPRxo3uTW5tj7P7yQ8Ze2g731eQ",
  "key43": "otsNbcx97g4EYv5U9bdEn5aJYfrj3pt9Fha7nGHkJJKV1e2o19aRHUDstNuP8bvV57nfedW2ckkEstv5yBpWkPm",
  "key44": "4qHgU6UzUcJj8FbfGXt9rqRnDaZtm6BxrrTmpv55fL34eL632hE3S9bjT4brs7C2hyUCM3KH4rcVgyA1vM8VL2GY"
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
