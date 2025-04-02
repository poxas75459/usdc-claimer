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
    "YSG8PrtiFmh3VkC4mWdtjrgkeDG5K5qn2wjjHqQ6EHHZE1k33RzDzVzR8A6WXcH5majjNLS3mB7hZVPL6LnizT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qawqTPJAn8jBzRLT6yReuSCnXhCYrVdSFQECUXcaGTjJmBmiuWMUoU8oh1QK7NUE5nHX59AP7cRp4YMpEi1wXdQ",
  "key1": "3qLELUsNQJT48m9GLH2MC9SrSaJDW6J1DxcrUHJyb3TRH6qB5TJoJbniHY2iqaP9UzApGhzMM8S8qTQnPj6ph9Ys",
  "key2": "2vpAS6QR8LRCg5Lse6AsBzookMB3XfK7SRUU6ayEjrm6kM4vT3ETYzPfwrt36DpWagVCBkZMnFDuZXWGmKRoV2iL",
  "key3": "4e8e7io5WD23gxgMdgKe3iztTX1MpTBK5pA3A86doo9FGQCNTk1Wv4tAE1Fxb2B2t8MK3bTuCW8XrCoMZcdqVtMn",
  "key4": "2LWPAXauATMAHXZ9TzHEWRFzop6GAMx4JzQhwihf23Ain9cJR812hu7TcVEwJRQbwzmPH9TS3MXWwbJND49Vapgh",
  "key5": "3cwaK6B9TyhqCyS34YkvmQ3u3aZW2kGReGooajXzbsh6meRcrgiqdtag5gLyoDcmmisW9qfio7snQuszPfAXtQSu",
  "key6": "4eMJhLQy5ps1B2JRvZ6wKADm7FRMP3q5TojUNT3Wcihz1iL6cf5kHZ8CQhtNJFmjWtdgqYuBMcg1fwoSUXaz4t8H",
  "key7": "2nzNtq4Tgzr3VZoLb2JNtHxHJVaowVcL2gCCn2CoCMJxZd8ycnJkHpAPNqKZuQKYwZQQuDj3Q6zkaNx3KDSqiaDD",
  "key8": "ENtT237t27CPNQ6pLNPMHtTydkmCuf1YXZcuxBGSicKRE8pR9ADW2ZfHM1LjY9uuxjrTb2CMEnHG7nod3KX873r",
  "key9": "EX6tn7zeScGywtdr37sDXFn9mhnsgaAqF6vANrtSEdAz8GZTx7YwYj56RyxUx5XkyPx4ty5mnQA9ZLF88PTTi1Y",
  "key10": "cjQhBNMQRDdWmMZMuh1N8FTkaWGxA89tXJ3zfdSHKTZeSsFUjxQMzE3Qu8xmRMrnTCdVim8PEXbKqj5jQ84uJsB",
  "key11": "4ncP5S3oECSBxay24E9AX49WGzDVFMJm3L5AUJJAmFNVo6iLHNQDVLz91qUdumergJAJ3TxNZSeVS5JNwkAzApk6",
  "key12": "5agJCY83zvtmEJQtyuoLeLe5V2L6Gn9idLq6FnuWsEzhQAt9NsS4HsyH3hfU6AppSX1wGAeU3wEGAvcwRejGDkp2",
  "key13": "2cMkDb1SKo26UMrDjoZWtyWbXpJ6nN6EvfEDhpDxDAJUfBFvW8818o2cnYTQ97FoKw96V1FzPeMpmYMGybK3hceR",
  "key14": "2yCnB8E5ioTCYKYZtG3ZNh1G6M4LcF4JiWccLmhyep7S1DhQ6npGx2FMA4Kyco2HFwZmiKSNQWaJvVNgySVonUMn",
  "key15": "22o2YngDJqa2XJa1fR9B7oirCScAFydMeoAMSaetoyQfn6dMURG86QJe8tB3aJvSMXCiC5ts7796dpKnoxz5oqBB",
  "key16": "4jPN78xV5ZJvwtnEFxKkeEyHq2MpghWXjngsAhM5XE14QmhbERmcMNehLD9P3x3zqDBAfJwtN2Xy6MkJF5XLLQTC",
  "key17": "k65LRTfjxzH15UcuxaZ9NcWog1cRsqAcoPXnjCAu637VPeebAAeiADgXTAG79xQ8n6qWPhKbudy2NzAsQfo1bdf",
  "key18": "3P1FZpHvtRbAuWdZp4zmXCYjCdqcE8bmSGJyETbG2NV2ZVU1GDo2XksAr1GFVW7Bo6jJje9MoiQFZqg7DRgChPAx",
  "key19": "5ECk3zkpWWbHxmVFF1LzZmbV7K3mgFqquX26EAS3xFBVFYSRyZQEnxHcsRBfjX1CqCuyJnCDQpB65TQcwwx4qfkJ",
  "key20": "2ZHkfAQbvHQxVKLhc3Jt2e95Hvmb8mkcBMLjn22zqMctrDhfkemLVE4wtsoG4d3dZ1UP6K7sgmNPKub1NMC1tGLc",
  "key21": "5AgvVYz5aNN6kL5ezdV5D6u2iVpN1Jn2rwgzLTXurQEYqQAbjXcHSMzkA8JWMw2WEJ3hbtavQsfiWUjuUbqr2kon",
  "key22": "9NJKq7DtDFuLgSmXp7qXr4WvtLUHXigSp5QEPqcj2nmmxgCUgodq3CdcWSSeJHnYj5EyzLheeG2zTTRPyNBJks8",
  "key23": "2nCwuLzijp7NjT9yoWEV2MoTewiBepr8DJMHQrzG2KxvBAi4Ln4GhG4RrDx43qaCnnZpjMtnG45sLxH6XbfHcy7",
  "key24": "3jDKDYiG2SnXhkNdoLGXWN6JgcPhTbzid8LDbykWXcAFroVhshQfhbfX2nDezq87soj7RySUCCR3E94mNvwNapx",
  "key25": "47es48aKxuoeJFeYuFWkVSNj6aBiuCnnfKfLZj5dXHSZsDT7HCcGUPKU54KRbKhmJPJRrj2BAuJA17pLGXkaaRp7",
  "key26": "2gX5TySMibQwDQS614kPWAYw53uQ88gU5NXswg7DSsDaYcyM8dBf17uXn3cbndsmjySZWpS8rP7k2dFBduCKvSJd",
  "key27": "2LzV878er53ABKixS9s65eau1KBPzGxLswTHs2Sqxci9zKsGKAYUJfkE3eutgWnrYCCshwL6S1dc5Bd558CeD9M4",
  "key28": "Eaq3aaBNYic4AyBngizVBRMDGfQwEJk3LEPgdRR3u1GKdh1YMoUWgC4EACBgMs5Eui5hgcDdFPx39e15Mo7QoZS",
  "key29": "5DS5sCjDeBRSizL5NS5aamkKUwQ1HfYrXD17LPWuVUeBaAvQyx7FKfCmNrFzuNnkgQMzVS2bdSLfEEhUUPM9pPGM",
  "key30": "Qpwrr4CDAVdoCEL6yf1xTxapj2jNs76DamwsThpT1jzyLZfaRrX1S8v3QrgSyvVUfdfGwu9p39SWyDm5VFD9AuH",
  "key31": "3E11FAN2mC36N58BK1q6qVtWpSidH7Jhsd2ZssLcicUypNCQQyyb325L79kbB5LQT8VqBoA57nMmh7pEuqAwTQF8",
  "key32": "43gf1jSJivnxc8negTJ5cYP9zr2qJRLDVhRkSNRy9LULDBA9KBeGb4xF9bywFWe9FBwBcWZDXCdHjsJZMUwic1Xo",
  "key33": "2c1jHRUESNpd4wjZR3XpynbJvmTy9gfaXzPX6qhcij697GQbnkWaf7jdpKkfiTCHRSVmHJHEqj293xera6pViTFM",
  "key34": "22VrgwzpNWDTSzepD8Wd5nvVy7jnSLSerQkNArwK9G6Y6ov2FDLJSDaUiUVvjUALnQDVmyaC9NM4Fwbaa97GepHS",
  "key35": "pzsmMwvsfr7aE48zUitZJiBBUaqiDXzzPLhAfvmMQkBHrH96snqUfVmJwsrvrnunKrK8zqSzyhDLjJwyWC9sNEp",
  "key36": "5sJ42K8zu2k6f5yJGC7S7RxaAhPk9Kdz7CJrrBR7qFXgLRiyFgH3F13mSD6Qred7cfA7NH8NdHZ79GcHnrv3FLt9",
  "key37": "61ykZ2ngptKtJbG7hWi16VGejuay9kGVKjmeAwa2r1dv78wc3QfuL5VD2aZTND2YgtE23VoSjvM4YB24CxYrHh2p",
  "key38": "4Tp6pLZCuXiWMh1bQxK9aC4wrN3nrwdgxfzqr7gqARyqTRq8pBf6nVnsZGkP3PvSeyt8T1E21Y5VmWMVccaRUVG6",
  "key39": "39z3k3FoNK1mdHsrCyUqgVCA5TwKLDoUMRqUeiU7iMAJGcomk9HUz3Rf1KwDsAxtk2aG3fgqicrqM77EtvDazpDu",
  "key40": "561z6Sxn9ZRDUF7YRDijfUks3XYo9XqJssUnhPWvUKHkHZDcHz9PtXL49o7nwFLF1MMd68kRZgWUNgzxHMW91Wtt",
  "key41": "4JfHg1zHBEqDhhvqpnYdLiGxTeDRR4wWmz8J4ZPKG2ksEqUsCSWP1XQUHV64igTrjD3hDwKuYy3pytvX7ndWyewD",
  "key42": "5RxZzLpyfqNSr1aCmoyFbh6di5wHLUtPWAiMBuGrFUymLsg9pVimbPePQd6gYXjzvRQsg9PcUbNukoWynZ8xUzNB",
  "key43": "EssGCjeCyZtfaYNpPJCtsiz584xhZzMW7CMQv6jHZRHk87hvwXoWP6RNL4mutfJ8zBLUHqFftDNuKhJfE3CFgGB",
  "key44": "2FnrVqsQ5Nx55uxXmeMpJJD6zJ6CZGY6ajwuaYhmChJAZnUsTCrsfYSBoA5oQvatV1ARXRBEZbgi3DqUVh8uCeXK",
  "key45": "4Rp1exNaZUqhbexwMA4esrnMPFMfFHntuSmEUBgT5tRxx94QPPR7H22vb4ZbnrXUpXt8vDTNVaruG2wGZgUcNCCV",
  "key46": "57bnvay48jpc1g1e2yPBmRuvU88vXczkgqbH5CKh59kMhqTPWGWK7yHWFjVnuf3tLuhUd88nDcfpfFu8Lp13qHbE"
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
