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
    "2DsfG4MNoxbnTrm6GynT4P6VhC7N5LrhQqkjzoGXrWYPXoYvjwnJL9rvmTeRo9ZWFwHPxgU6GH4MHVawEhxkfbpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DUQD6V2CSFp8yP1rutYR2kJhYvgDdTPrVGYq7pj8dbUzyHW3Can2pFVgzdGFVYtgtcq1vXKAgrtCpENVBXxr7aY",
  "key1": "2KtbXsBFcy3EzQJa94uVTnSQDYzr3zJ4A8qRyg9Uw7fgNegaVmzN3TFVoBMgZ9fXng4JHSCaCYtdDqSV4ACTZpo6",
  "key2": "5nR8FHtc3djUFyLifhRFnZqYLhmXLh1U1Resav4jZenkSBCfgTrR9b7qWswM14nNn3z1GTX7STo14x9DDkVbs1s5",
  "key3": "2Xozwg8yuLTny1N7HpRzsP4xMqXEephA7ntsLG7ZV5jUcRVFwF2ywX8o1bArXxTfLSqEp11bn4CExkVpR3uuG5o4",
  "key4": "mAqePFDpgH2473SzEQnCM6h97cXZwwz1WbRunJqTT4Ub3m8PDkLoRfghLXa9bFmVWP6JiareHNCveMynqQ7uieF",
  "key5": "2dTDWdvyPRBkpVC6ctkZo88T9ihuSeyvTMbmxq5PFEu3ptDjkR3NCK1wy77GkjvAGnJywLKNpuudiSbHb3DgByvU",
  "key6": "2EmZHsPNX9rdowTRm5kzJ2qGardU6HPX84PR4Ygyrnw8Um31EXeqW9DJXKtSQxVoBWdgEjMjy25TT16xpJYB9Pj3",
  "key7": "z1skQh8m9Vw9Evmcx9C2fMBoh86cUPQpBApcmXdGJiToL9ym3RcV3z1WksGLJuwjacmqiWiqvoFRCZEkMF3Fd8p",
  "key8": "4Di17KkR3J4xBzMJd8MMrr6xozPXp7gfMD4KhDQ73HbHzaBHCEuw7J6rWLKEqY1gCLnDXzKKJf7VfQBf1BLPnxdv",
  "key9": "4hLAvwXG9W6tCEXLAUftfME9ogmVH1T1iUs6cbFdSQcJbPsG8qwhL6igAdypgK65UgNwxEq161uMuoD1HhFxJm9",
  "key10": "2vXaPFBuGt2PZjAknavcW4maXzEzRdeFVgUQRBhTyoFBSFL9jkioJ1kfYShYCHGAz6qARNckjzb9yjwcnk6Ehbse",
  "key11": "4nssKeutYbRrRXhycqSrWprQWU1sTGMJi292LJvtNRQxmcGV2hhsXgGLZXPjvvkgHbnZ5eYnFfj4A78DwU3xuudn",
  "key12": "5DSiaVekEAUf7oyxmEd6jLzMmsyR93Pp8pvKMDN6KjsuvbbMvgNojWjLbtEgxLL6PKe9zWVYSoPX5ZZ9wSA4zYM8",
  "key13": "5wjsuQyo6nFMX8wNtyxSyUeTYuKdmLUsXerHbcoxcxec7Sx2E48d7qUxHhRuBBjXGrdvGpL7PcepiUBEe6TX5LCX",
  "key14": "3xvtQ8scNKd976L3frXt8sgw9HzkVBhFuuitQVRGS3pBWmBbTiw7rCBD8p4cw6JmLMxUnoi7KF49Z713ZELmTQBb",
  "key15": "24ASCyBcBCWgnD7uV9SUQVuwwcAfdNmBMp1QhpWwcPG4QDDZgEWr47SoMnLC7Z73ZtNAYfPhjJ9xXqnDLAgKkRzB",
  "key16": "3vp2wNJb8pMNgnA5BNCm9CFpNSxPcubb2zkUBYDBYz72z1sCq93xkVkfxdDTMk2TyaUHNLhmvW9i88GnrmUZzCni",
  "key17": "3iuHRCZgaAjz2WbjCJx7ZaMVg9cmJe1ykBwquZWJhKjybmyS5cDUYEXjnEYGXFZbb6CFgNWmN711xMzCAnTBMngt",
  "key18": "5vxur3cN9xide1xit2o3UcmQuUsMkn93arHuKYrwrrZ27EeBGLe8nfTD4rp26YbFrcE6cjZRpKq3ZuwUESnG3651",
  "key19": "2UWxXA4PuqC28Bbxosz7vxJDRK59wtcFN7EjQsQJHjRm7gXijwZ1dwZo3znBP2R4PfWNZctvoXp7tbi2txoMwQvo",
  "key20": "2hmAZEMaQuzhpGSLgKwooRdGhxxSjqW7UetUDws3zQzKqteKjhyupxQtufG8gaEdee9V6gVs1mBYktoxaAb5hrxT",
  "key21": "Ce4RQ3Kz9vyNvN8JJA8SoD1dLwp7HBu4LtZs6eESXuEZ81VzH4B1GS39HwioYNCSb1vNEoDRQhBhL5ECSwXmYx5",
  "key22": "4bXgs1DFAe75yhUHi5QYCe7KMJKvMP2rdMideGqVuJKCkRQDL21tWg6GJc8LVSNSTSPjxVVhD1yjAp7ZV89MjeX4",
  "key23": "5XmDY4ZCusJLuMr5mmM3o1UmPtyXphut7nDYGVPA4AkKXrCwf428jHYUtb2K2cjaZPdyh9FMc7uDVeEBD9d2rYgW",
  "key24": "5sL3pVVbhKvZKFwVFm6eqnu5xbQtEBfrPx58EBWqvUa2JBqCDyux1aSHJGjSamKqRKnVv5Lij536BpMGJioMR9EM",
  "key25": "5uyhUKqaQKEvXvcJfuLtmfqKx4P8hPGf8nYqMtTozGYM6tc9WPc1NKXAmcqHWmsP6resiKkR2rmgvUzyx9ibsS8a",
  "key26": "5oUYtfKjabxWECnoHqeg32p7m5GTXqCsbb3DNBm99JBf1Z4EE1wquReuoWosMv41zCKrYa6eGEksjUhsJyTVf2iP",
  "key27": "4Jy5kt5kB7iDRNnrQRTWEUsE9yyWi6gdVVZ32coSxiYWthvKitTV49gDG4z9yqbCAqRfaNaKTYzELorrcUSxMVme",
  "key28": "yMeTdnnQ4bp86jZVNyqcJJXgSEF7XJWjoz6y4aHQ91uTHPNHhJLyj29ZV4cnps3FPKVPojPRqwLf7us6Bbujzh5",
  "key29": "4DoTQWacQfs8RksWe8K2HygkGLwFrenBkYrR4GZH7w4LXPSgaQjk4LjFFURjjjQX5HbQeSigM8FPkLbtYRvVDFQL",
  "key30": "RQmcPq6bh7zUrVFvHGuNQc26NoZAmgSn1d12uARzB6LC6tuXDwZw2VKpRNZTDQCgCkKo9rmFwEXgyKyZbin3qsB",
  "key31": "4v8Na4cZvdBQrR9aZjkqAsHmyWZ2hW3UwsTKGmYkXUdnZG3ipNTvRSav66gsKCeEgtSCLDACdwsiydwG18AqKkFB",
  "key32": "2pTtDi3shasc9qtnA21YWTLvDRsTVn3SexRbYb4F3u8w9LmdrqNCCRkPFPvue2FGAc7XPYV7on8sKYEgByQxMjVQ",
  "key33": "5ej2KUuWscfgUERtELCiYKUTji3bcFSi5KBj63E4uq2VL165PNe3YHuwqapcJ9e4iUQiWSK3uWjESwAoL9ZbCmLK",
  "key34": "3UWqvY8Tg1R7NkkDYkM7YcY9p7TAcr9ZfFtzZrqBKHqrTruQS6etSmdXwhYNLPZnVxJ1nw6LebouzBH9Q9KMLEnx",
  "key35": "54QjNaGjWbGVFAhnYmS1baruQyFFJtQoA2U2hAYSGHZkbri8uFryrXH4Ah8nkN2HFhkEJdfBjZ4phe94UHgfQ5MC",
  "key36": "5uBdPB9pbKFcL2gcdQZoS65LVUJKLCgWjXXbAdQCFjnjp17Dk8mDpyeZtz7Jc7fGzZ7Jj1R9jyJXarcWPzHQSLSM",
  "key37": "4ntdm5BGgvskkzAvbEZReohKk7XrwHb1pfcKxCLBYqSxnGitj8HnY64zQuFvDqU9Vornmz42srZmJKbL6arXWCZt",
  "key38": "MoL46SpFdX9xW5bmm4HhJ2qv8Pcruur757zuThvBC557nkxxynrdiZzQJ7s9s9sfhKimBAG8NFmmKR6LWF8dW8L",
  "key39": "yE976qEKVRnF6Qs4uPkRVCaBpaaFtfp55Q4QqX41ahm2tKr6y2dcJgVDRtTDpzQJ9VsvYanoNddSWZ2v5BvqNVg",
  "key40": "5SmpFGp9GFuxVFiTtBBwrTVPJ5RNPWejpKTC6BF1J47PVDcCrdNAh268CGTpYKMUidMYPKp2he2Mhve7AUEuqDoz",
  "key41": "5ECizryd1LCVnceGvioL8ApdfaNp15rrUW7NbD62XMn61xkJ5PSisGsSuFpjWgn7fabnU5Ps1m1HVHnDEraRZZ4b",
  "key42": "2GzsdPovXRbJDZCDgbppLPsYypN7at57uMuHDT6CmKxJUMMetH8dy5CuxqaQmFfg7NtuVGu3xx8S2fHWgSfM7eD9",
  "key43": "3bnr4S7jC1uBFwfWWozxNDNZZgJr4Att9thDDPDHY9fMtxekMd3samT44ooKuqSA8mmvw9Sd3CJzd9yCurwQ99h9",
  "key44": "3wqHFEpEksi8ynHqX1qcUFK6ZLL1XW2dMK13fRrKsoxHrn1o9w5vGqRvc3PEUZazwqs316e28bFbqwCqMCzMso71",
  "key45": "NiWVQQMiijhiF2joUsE3dwhUDacWPDurD3WeepM1126acDmwB6t1q5EZP83yaTdkE72bNiKGeqUp1Gk3Qgmrnqo"
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
