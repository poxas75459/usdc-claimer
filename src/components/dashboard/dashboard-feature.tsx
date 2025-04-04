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
    "4yke4TM9xX9wWhCr2zbi9ZMEHsLPsfYLGScAf897fbdY1FHUSRuxtaXQNhrwh3r4ByAde3DVbDqVJBbaKwXum63b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mXH7QASP1eYsjSQfhZvs9ca8Md7oLKhaCAhHoFkoRWXUe1znzD3iDGeZMYNL3vacDBvJdZ2NCfogRkFnT6nHETL",
  "key1": "3E2xPxqy1tPfq3cdQbyakcTodtfEEwNuQM6RBSbPS551yJFYHmSaZV3rbFvDyZGFFYCFuMtqLx2XVbyczwicdwgP",
  "key2": "cpDYdMNsQv3SdNVQNVN2ezkXTztbDBQv4o7Eez8RchRUhPTnvovJWVGDECoigQZXim2LGLJv6Ej8ce594Bgbjb1",
  "key3": "3JcwX9dDN2e8KkmLbj7hHeaRZ8HdqfwHVq6uvgErTe71SWNHbBDq26Pie6nmF9VTxFHTnsbyCKRAoQ4EuycVLHe3",
  "key4": "3xwxBtnaAjQFpyfVpLfjAX3veuTquFfD61tVVEocfq9CceZKZRSf1ZGXZZEujf46NAD2jyWpf67LDYA95FG9Sj9",
  "key5": "569FBwy1KeZ1eHyF1vn2nEYBwf2wLGNNYsPAWH5zfqvbRBrXQ7HG42rAfKaD54R7UVeEB8rQ1zvJYfDxcRoRzCwz",
  "key6": "3Rh6dj18DQuJwrnvt3yan8KbBVVfAyiwX9c7BLPBuaAeGfyDbjFzB68njGHeqQUGEDdpDHS9p2eySVH27Zfpp3jM",
  "key7": "5zFyAYFARPxGyiwur8haLCWu74e2gDAWoSm4gkfwJM7J6GDsaV2QbQ7uFVbnbcEvbJvFuhGrpPFYmWUvB5Tksd9b",
  "key8": "4nTuz7gQfzUWum6wYxSZHF8Zkfi14SXTTs1SyQtgXRh9Teqtvrdg6xeMpGmRgN1sBcnhDFjasXZjqCUhvbuCTdYX",
  "key9": "5qLKvZX5zWH9iRSQ7GQnPQTRpSY8V55ngyG6bSnkhD8DckU2vVN1QxpdQdRiz5z5M9j9eS4TH2A5SNaqU6iNxkUC",
  "key10": "51caDbNroUkm18PUuZU92HgrtiPqAFEZAKsSm2hF52YM9dvSxE9e7tZDhKNmErZC3z4vDeH3i5fKN4Abx3FjaykM",
  "key11": "ZDkH91Rmg9zXo2WYg7EFNe94GaFoTmMLySK5JgRtevzAKNnoekxpEjbGdaxnph5EFJGBgRpKXRZvK4Bp2cYTYcq",
  "key12": "5DZwvdkaEvN793sqvjGXqZ6BnqUp5UzgwrgEG5HhdxQ8WZ1RZ4ihgcuSz4qbVkmAontpHHVq2BjAEWqQMfjUjgxr",
  "key13": "bMcHa3x94EGH2PWK5bozGKCZxdpSK3oNkr97b7onceKgLVBEs9T1vLyqD47tpVqqHPAYVrdTMMefqVvEDNwTtNf",
  "key14": "2bakik3YCMvRYgbTwdpPkhTNMWWkqrVJr2uiXSKchou4s9NwRBzp8toWYacWts8vwWt5Qjg4fEgKDSimMw7hZuem",
  "key15": "61aVnBSNHYH2WY4PSm2dyHDcrSdgVAoGY5Wta1Fw8TnuuJaJYKj1QMkq4MSFpVfuBAcDSGPuGc7eqF72hjMHxCjy",
  "key16": "5Puu6RUPDE1uK1QTjd7mogntmiTrAWA8cgYm9SmPRc8Wp7nFuciu1v7DmYE8Cfi2JGAJm5dw5Xfb49k5qzmQokWT",
  "key17": "4KFZPMaFkbDTkfabFWxgAoBzfUihvZ8Nznmi2grGSn2WDXM5jpXW6cbydga2zsyxaqE3RTTNMgwBbdBYJZjFfuwF",
  "key18": "64aZ3pdJh5ArLaCGPRaJKLkZBt9J9ZXuowYGDqPrWYPUTmzzo9siVTc232MbyrjU7MbHzhyEBhpNAGfVL5HzCtyo",
  "key19": "33PH1JufVK4ed2BwQ1QaaaA9zaCLLQ32rSrPaw3uyrQJtTECgfzaWhwc6eVYSLiJfUa2zgjyYfP7EEtDzvMwDfBe",
  "key20": "3DxdqDj4aZQQGC6SWRBWrvntWi1G2zvNyj18z26gcvXJ7dMPyMRhCoge9DjgSEtxgKEbzrJ7rcAZ82Ta69CNuj15",
  "key21": "3f2nUK7LyKsfjYdLHkKcWnMxA4JDn4kkbkhY91DrrGstiQfmguKgn3KQkxGU5TLYwh3gW6asQPh79C45cmzKZjXL",
  "key22": "Z55WZb9ZWkEvdtJ6Ud7WcrSxmrn5TEmAFoAcisiaALLgE7a3F39TXFpMPxsXeqyvmbZ1NsmUh2o8YNdgXQw1pJL",
  "key23": "2BeSWg4cMRZUDepSQWYHVw66f8FzGAAYzq65n3pQgN4HRNRVsC1MYgnFXFeQYEirZKWAtGZSNeDrKv5Wc36XjvZP",
  "key24": "2KvKNcHe4Qimk7RvnbHZayDfsWHESMNDQ6paRvZouuSX4sPVMDLGTd9ZwkGoRNYShTs2uVtPdjEXXdzzce57qjru",
  "key25": "Mhy2uzFcGBmz9nQGQ55NmnPVdLpVJqdD2KucnqrqHMq9MJa9wMK97JrHpBS9E7ouSGaPcpBiLzgt3VXdP1stwrU",
  "key26": "4Kbg3H3HSqnpiF9rLwSi431Emnte1XyK5SsbmKqMSFUWoTLxJaWn7xfrEStrcRNmco82sasgAfh2QB7WbEzvqsru",
  "key27": "2fvx9TX3RjL8q7u7oVe8LBtFApMUcL5UmCR8fhWd2e6FbhiYzDDqdj7nAbsTRL8af1HF5tUp2d5EVXCvpg9kok9",
  "key28": "3c2xz5KnenFArUDE9Nyd1hwfyVpKrmJZSN5YFUtyfnYurH2eFgtbPz6r7XeroP9LxNi24M39MkJhVPaQ3YdrhKS8",
  "key29": "5Zd4gYutZtKaQHuJJGMAq89Bpn4YWdybuhvW7gWh8LcjJ2jDJYCxxe44mHZXYhrr1FTB8wn1h7yLbNmjesuyZU94",
  "key30": "z9zix9Vu1q4gqj3UPJoGdcabUZo1zTGM1fr6bbcH3TTg8Mh4vRaZVhqHgSgLc6KDfVhYbiagUGrTtB3KcEcWLaA",
  "key31": "2zQZgE4tWa6u9r5Z4AJExSs4gmpFnxJf429nqNUXoxEhhipQJvexvMpKqJ8r2v7HfaXAUnD1VBMm1C4To729kBFm",
  "key32": "4pJb7HNXxWf83tzSdGb3iyjvK3w1LEsKyvCY8gRB1Pxg5xvAMJMbK2RioRj4NNQEw5DJ5skPn6pVq2HvTqLtgkCF",
  "key33": "5yCQxQBWv86P5ivGX76cJmPc6eRGSdceBXN9bP16foyD9XZUWvwMjZ8AuMoWM1TpcTMkdFCDBrF3YFB8oJXb7znb",
  "key34": "4U9UaBCc86hCV1Wi561qFikpsKoJtfZVzJWQ99Gr1dSoZatqF28Jk7K6UN4tcewgqSu1bHanf6WEATPdFgNiEQpP",
  "key35": "2WW5mgekH5v9GECzouN9ydfqWy9YCJri6FuG5kbyQTKFtQ3sV469gYxfeXVPM48PnHNAobdpD2cHi11j5pjJyEUJ",
  "key36": "2FbTZTBMS7YyoVJgNMNaGLWNswiPHA3PvxoeqGGeczFAp44Psy2gGTT9sERdeEeRej16GpygtWGdKTDhasixRycQ",
  "key37": "5YmGHLiMBJyhz42tgdQrMGkVjnunhDif2y2THcJdwzQXgbBrdJ76kb2aaFmd35xX1p3LaPcf5x1355s3ZGh5zGgk",
  "key38": "3KMh35f4VxbuGYKmFEkMANVo9mZdHcyCJsRhcQruJGNAqJN8ECE8s6iagiUdP8jpoEfgLXwEzzPigJ5jWAHNE1E7",
  "key39": "3nv4PsnwE4ixU2wqL1YkwhhjjCf2XBxHiqxedj9DhzeS3fWwmsktQ2Kpw5VPeWuPBMHY55BiZizcudB7gKf1ExHS",
  "key40": "YDgBmZXkhdBieMahGG8nLZ6qsSf6qz8FhrJm4CTwGF7CuiXKwaTyoBKm3KD3DqoJ6f4gCrVWPGLkb18PqwG7a3c",
  "key41": "4GGeGcLBS1YF7LR44qz46FsFbbiSmGpfqRrQa67cn5M7GfTSJz1Mi5groLGB4FM5btQT5C81XbYEwoNMmRysoTkm"
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
