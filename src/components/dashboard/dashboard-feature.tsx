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
    "5JAr8TTSY9MDjVBGYXGcvgKUPbywtLDBHKqnq7Qg4br6jrj4vVzrsy2DWwDtoDcHu1KbjBtb37pqtx4fTD4kCxCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fbWAz98D5KWWbZ4TLMtgLAMcKLxuxG6sg9zWmbLvog8Z9m6bVJZvjtGtH2LK8NttfrcTJd4nuR6fV3WTYyiSx9r",
  "key1": "bMpAti2HHcCgfXXLD3nHsJLdL6p5eNLrx15EsiqQWFyLC1FGw6WWBLCTfucuMckhBA2gLTcF6jrmb3sMuBjkVUm",
  "key2": "3oCqPXFLR6B6Ef5h62tAVTtKqhAViKjYJsWRwrx9NCuzfruj361vzv3LRaYA27LmUuMJNuNTYoqVY4SCSKQmKqYK",
  "key3": "22gie6BNjdCuHgAGyKTW4tB85bLuPu7GbMmFcYZMzU9vYXYzco3P3Dn5mAtsAJvt8FwWbqGVYNq9LTpKYeuqNBfR",
  "key4": "3fKqh1hiHNhg3cPs9pXECq6hX2iaURjUm7oLTbfYtfz2co7gdGguRwza4PiG9LmB8FBwAzQz4gSvXUtCBsNhdKy6",
  "key5": "4AfiwvrzVzRAcYwit5pGhNUXXtjWCFhZ3MKKuFdWvkiXQmicqNfVcxh49rGNH1tvnimMt2yw45CiL2i8YSxF3cKE",
  "key6": "2bebYwAJqEwtzu3NmZDBksNw8zqApncUdsqicrrtJ9hkywkMY9XmsA2Qr5by38zNAvcv15EfcrpYYz8eLQuXFRxA",
  "key7": "KTf4YF12fRxHF1HBB4RiVT9u3MoKSnEPnyAMXvdfNLWruam4534wDxFg7EkYwkMqGmwY5BeVM2v6razJrrDJ9pY",
  "key8": "5tJ4XY773KWHZTkPgCwgr8yBgGYFddYhdp1boArdgwCdyyKe7ZwTHusjJtTnZiwiYqU5bJKTTjG9Dijok11U8WYX",
  "key9": "5ntvFibsiBQkpG9MUuAnpTy4GFd6zyKrXzY5DkpMXUfaUXtme2dUE7YHzssfWcDaMtvZf54RKrZSJ6FmtiSRAmFb",
  "key10": "36qaUJECE99KevHAZMjb62ZnvXMzY1guQx8J52Ksc9jojDLZyknX6AzfVmaA71maerKk5gfu18Hju9BBvtxxmY1d",
  "key11": "3AmYFV5FYiwGqVKpcTSgyes5MmQDgx8ihRB9mCsFTmaNzipjTgUo5JccZU4UALjeXLc6txBb1BQv3jJVCTTcaS6e",
  "key12": "7QVXoHXufe6BQkJ876ZcmybxqnZCq3wr2QnuKHopGRg97KLuiNvdBHKbRkGpsx2rqjQno1pnGLNgKQCtCTaBQV8",
  "key13": "23dkQ4Eh9Nrsr8WybWFyn89jqJ7g2buY47Ct3G52cRa846Rr6gYtqBrs1ZQrRUSs431hBJhtJpzE73yMoPWwiLDM",
  "key14": "2Mish4ta3eSqchLfN7Qrb5uEamYzuigeQURLKZztt11LZxBx2A2RNjHQLbcCcuC8jXvKT1sLkS83Wp7VHC9keWjf",
  "key15": "46vQ3TyTSSZa3NyyPS7S87Dv5ZvsLr9HfuRce9rrY6QRgR836jrCFupf2ZFx6DZRbsox476zxTizXHYtLDpcKseb",
  "key16": "5CVesjJgSJUvYxYbhRgT3XmgEhS9ibwNarrbVFvFDgZwbiR9qWGTAkPTTF9TG6QT9vqZxetANoRnVyZLZEFUyeqT",
  "key17": "5upuKEfZoBBqEaqmRiGewaVvqXrQTzE9GfTiqRtTkZJvguzDdrJZ9yeKYDQgA3QfHagFoQX1R3J8UtbFK9buqQtT",
  "key18": "Lw4CNCkUdZ5SBVBx38XxxA7Yd84TdUmQF59AKcCcXGzsdkWymKPzfqNqm1scEJG2PLVLQznXum9LkwEUYksDPpm",
  "key19": "3dznp3eX9CDNqCtbtUUG1ftz68bevATeJPD3R7qpCaeGfmLYLvZtcJNzdJTtdbFKPwFfqhGaUrNFNHG2nYLz3T1z",
  "key20": "3P5bBBv3wBUTpC9Zr1hwVd2wQUcZ7MtQjN2Gn8ZYhq92ogSb4mdVYhJYsmW334JmMBYTLHMCuGSGk6PSTPjdVLGY",
  "key21": "5TxuAjJ499oZKgMyDdUpxzivEzTdCKqHxvoquUbsPSy2LLpiA6h7sXnKz1p3Wy2R1TWZJZTazd6P6U5vLCWN5oZ8",
  "key22": "5JgYMNGfris8dmk5rAX3M6HSD8Gg49yv5yZTiEify2ygcoF5qPv6PiHv7hm5Z7XA2u4pVo2j9YvNH6xA5qXQ6HRy",
  "key23": "34ZsB31wL4EH2KfhrvD5tznu52BQdX7QBofRN6VsypPm2YkFmY9oqCZbBby47y1SwBkthv9pTYknhrZMMJ69BYQi",
  "key24": "2ejX285D7wnmRKaRSYrFJ9HcJMfBmooFAkjfn6kp1pdeD86awH69WxyqJQDsYQmYyWzcJgZQzpdhQy29hkfF4BRm",
  "key25": "2Bu3BK6ouyB3kAnAqNLh277mSXTDM3wExaKafyzkmKnq4YbcMe9U3T89JpKxusnHQuCJ4nPthpESmMBhahgiiuqf",
  "key26": "3LRneDsG1bmYCmbXQxgKUf89eUJJZonWLi7ceNqv7Jgtf4QfR2mym3Zjvqu2AWfxDfUL8QojB2SogHdPMYnSCq8q",
  "key27": "2cQFvatrKWUHcmLF2r5PdK7zMVD2FJH7ZLBKxw2e1SHxHiiuQe6x2QRDHV3AkwMnHmoNnxrh2BYotqWnPv6xZT6w",
  "key28": "FGmhsQ9bAjhFmgLP4P9X3yrTfhYCv2wBBrcbccYCEUb2ide8UGin8wnyNB48RwgPfLuChA1ji1Aj4NdL4ptt2im",
  "key29": "GrEeW2AQyJvgQXxb6apBHSn7rHzKFUA84593rB8hMEVvw7quh8Hqx5tfXj85SMKKZdruad9aG4pJukuUe6RTFzA",
  "key30": "rC99LC2UNK5y9K2EZ7CLiWmMz9GRr7CsLVikHPsCx9whv5kFujWPDXn4h1nXXt4L5qHyUdzdSwTmQPDKT7CnZoe",
  "key31": "4bVZwfmGKupm7oXdtLuQreZqRJxKrdzzGPKKG67wyC7qpA2dR9Dc1U4o14wRbJ4B9cLPTt473MjiTWscLX8cbeY",
  "key32": "e8LuRTo5FpvV4jkHjompj2H3gMseMKjn7Xo4LQJsjiitXnTTrJVkEeoLJEs1Gpwk3grieyiCGWpcu2ftEmvsHDd",
  "key33": "4bQahWpLuYqXRcKH6XqjBFLAvAyVjwpuhTaA1HXSCBfb5TK2ovBUmhiYdZd24pAdD9Xhiqgo4Aeufc2Pjk5UQ2Vo",
  "key34": "5vGjJzwH17BKB6UfyquKqJyFZYSeC314onbgCYdeBghQTm7zomv3AkUvFnu4rWoJdB9BF9YQDeGdFewYbPhh6FWb",
  "key35": "4KTHKAb6QCBCtFYuhkcQjfyGynuV9h1w1GHYuqfPQYnHKeRdxmVbdvVXFRHnwrLEdwECAqYP2Ywj2vhTtcgqEw89",
  "key36": "3TTJbVUBrLoFQFTuDKKQ5Nj3JaWu47WYXYaimZYNw1pJBwwzFHuPp4ATq7c9dBLfRHhVEkjzHxa6hveipcUSSv6Q",
  "key37": "4gb1XBUz7FosWLyKKUXu2n5zo4o87rFkWfoDhC4rxwKzpjL3B22qxNzbpFkWDcT3DGRTXSneBaD3jEsh5WtVzb5t",
  "key38": "32xdL8X1vX8pPzPG6YChKG1E4mcZ25nFt3KsXCqiRQ6q9UF5YstraehX3UuczLbmTg3FLBj7P1B4AahEqmAeTkDG"
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
