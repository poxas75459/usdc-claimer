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
    "45sQymorC8ACuqirJbup5MqEjYPRRFqgpkzsHAk9FUq7KuE8jGnycRdtZkwWKRysqw6zRM91RiBKxYWZrARcY9Uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ehmJVuXtk2CzZiWjucijXy9YTLRNgb9KqUton28YmY17wdVUezeJXENVfA2iduX8FBbmubyC9K4gq96o235PME",
  "key1": "5i752gN4ehKiQQXwbsdCowLmkBxNeQ4S6PRnRDymqHiJ8miTcix6PpAnTz5n1JcwGFTXEZprRDhet6Qx85pagA9Z",
  "key2": "4E4wdtnUXKD1Vi7xHNrpmqoyEfTKDGQUnb6Szdm2dHQLRQ87DLxDN6jMr9SzR9Gm2LRNtwJRDBp1GdnjxCNwp3Fb",
  "key3": "5Y784cCKKHWaHKF4ZG5JJK8vBzh5KA5JhHy2hVHnbgC2w2KLm8PMQ9hNrG6hGayWNXCzME11wn12bp27fBtqqJbE",
  "key4": "414fmQsDc2Zkb1FU27aqqwojsQmS8RBHf3wAjpYbVCbgb9Qz2LY7sb8bd4hNZxi9qfD55bbUYzbJJ7F5A3Qchgto",
  "key5": "u5imoXVwz9affGKqFvt68zv3NtcbKPVfgb1sth4SJJUVwWkVYmyZcuL6uhN59knGRjGenoEXfZV7bHBNhZvZTTe",
  "key6": "3bsGnBnzTzQcZQUnNfEgmxFTk5LL1uU2kJCQ5xMud1WAJ25WJ5VLqF5V3Fje1THb9p5B1oYsuCWDGEz7BxgnDFXo",
  "key7": "55rVccaqmaGEnXWJpP4HaXJonbp7hddDpFBXTevES85UGNobTBb4yRoLQQvVpZA9QvHP23La8rYyWoCsxUAodP43",
  "key8": "y182c9AgiBoBfJEG8GCbZJKYgMzXTtdfMdmsd9rQ9rJ3yNG3dHgBsv1KN4jC1TMNpHrbFShFcZhpKCSj8aEM9fH",
  "key9": "2nAtawTrW22gHUmMynmCXXdbVHCpoKH4tN4kFEiDUV7XB3P9kwFuWYqJQT2FbedniLynpxVmd4HJkrYHvzhGyKZ1",
  "key10": "3gh5RjCELUyYemzUCQcBkG2SFYYpMbMsNZZ3iXm5zjG95bpkUGrrzvcRnkaEftjmXB37xCwyNiVgeCdE532oymta",
  "key11": "3nweBLPVek2DnwUG9kkSTyYR1FXTTX8TRUvRY64aLT72YCNGx4y3R1eHLSZWYekUptD51a3bQCsxekxPHwTt8pwE",
  "key12": "4EJ8Mehxa5CUTr13jw1rTkVfmyCYi4AqvyTLJLLt1sq33VEdz7o8gq8S5cn9NSnwUro8wEfzDdiCy6Gz6jRcJevh",
  "key13": "35W1HyxzZ8iyd9YX2Wj4cMiRqXgvPVC8ftGuJQrhV9Lsezrcdupx5CPEiE8GeJo4VYgNqQzW8YKqZr5M3osdz6CG",
  "key14": "2N6kLnnjx3RkVPSgmHzFiWpqJEiUZ4sUqVuCpWQwWPySRNU9TcWRQVShEuNGM5jcFaSFEv6VWawP64My1jML9jhS",
  "key15": "3Vf9FgA7458nJAzaAfVJ66YjtFRPvBVC8aWGNCC6Eakk6fmsPH5XcbScLAUTe4ANd1Aei5SGwvC3y1NwqEjPDXcK",
  "key16": "2rsoSMvcxX2yiHcG9k9yqUEfdSTaDTv4r73zEwSmAvDmhcv6dLTMLCN4zrcscwycJLPCXwZjhT5dYTbpxnBzh99X",
  "key17": "29dhM1Q7b8iqeGJ881p2PVZ5qNEkLcYp8ccZfYa8dnUVduQoz8tdpLKH3wNoXJZB6dBqecgaFN4JjWLqPH4RCBUX",
  "key18": "41gmh897YHBeU8LjMozjEReW2ZuUDoquSpSBLWm6AJBFtr4c653Ywn65dgX9YRV4WK9Fq4nUTvkjtcCZxkzjNnK5",
  "key19": "2DYnqhu7W67q9pwRUbSTVABdseLcsqXqmDKn5M94VKzCrxFxbGHshfMyVWCdEdkB31SbA5Bo6RQm5rhR3STx7FYE",
  "key20": "JCToZ5NchguoHfzFG9AdJ7m8cPfFnN6UxQzbtMfaUApMAHNAsGGkSwJ8u2SfFHnukYnaYWdvsZBm9tx37x9Ebo5",
  "key21": "7bv4q1dsvKmJSvfJgqVo1sWdh9TanYi5pWC4QLgQy4ftidQfgVfamsZkmMvF6URtjUV7aWfM7hEdRruJrPB2idK",
  "key22": "2pNtC64Fn8eBCDk7NQubZkCsjxgxw1DN7k5qURKNXDN5PQVX4AEJo8aKpfuggg4wqRAKd5ED5S5dyVJwAG7iM2x3",
  "key23": "2yjjLNjZTFE8BteZtuF9Mf9CL8pZuhyPiYLEVZQUkwdytkoDrhpqH7NxgbQJpuX8bN3KiZYuWjyHC1DLAbgaA9gp",
  "key24": "hoHaUyuBze2VxyazMgx1t3hjnyD2CuspybHcoBu6F2RBFwVKavwt8dRe88KecSYyXWGP1ma2DMP1R3zuQFE96mc",
  "key25": "2hSSqGcb9EiRuq63P6NAWAMnaFEJXex4MmdQSyP4RD5TTeqYE1Eeu9Z3vfiM5M13Gj4YCVXBozXpEDPRKFnUF2Yi",
  "key26": "31LS7gcH6V645RBsJnE2WeW9ZZsK3b3Yp9cPMgtyU37SbSNyKQrGkCV6HUnGaqN5AnAzVHc6fbfPckC3VCh4SfgG",
  "key27": "5jjGtRN113XSXKPAD6jsJZpzQtqLD1ysDc3K1rcbqaAuosYRMHMQRDd8WnBFJP6FAvuYwwPegbbu9yN1H6EK1u3M",
  "key28": "4BMWag77FX7jF3gDQfLrq6RkvAr9Z7GcHEro2LYbFCcqY3G9pYm4u752X2k9VpMu1TTEkCna5GS4rZK4pr75KKsa",
  "key29": "EfjpoRARyy4bXLkh5buaboxkU31meorD1QSWpp549tQ9Y36F21tKBmV4gr3eU4YTp3EYUvisbx9JfU9HEaYd73N",
  "key30": "53SGgES4vDqHTg1U3TEhExPBHHa6pFw1TwKjx8H2hyUFT5MAwWghbN9UVTFPjrCBAE88zcvnnLhVUG7vNufyjaFL",
  "key31": "3eWJZ4pJPXQwTWK6vGYRbGjrE8Wg51TsYKUWj6DN7df7ueTj3gmTkD4veozgSEVR5hACBp3Nz86WuLgKoSRFuwM8",
  "key32": "4JwofwH1W7mDgxeHXEko9ZYRnnzQ2Q2ky6XJSNNpn4Uzx5RfqfcrD52YAyU3868GWYFZmzZLmhA4vuz3z4cKB31t",
  "key33": "5RNRQAnVYKvn1W8pGsXtnva7a2Nd2dKRwj4NAtHnxUpi2ZK9WB8pdZ7bZQTXLb4bAeHbsr7fuN9qEvBHdg78T2SX",
  "key34": "3cb3wicMrj91cTfp73LWezZtLVRiguXvW484hzuUUCyDiwaFLTpxmkBXRAjLpsxniDhb4LRhNGxBzpwzm4VdUKcK",
  "key35": "3onTFGi8CEewaxB1DeHMF7bVmfTb1xF18AqJ8eCJFYwmnUynhDEdJexqufaB39LSNiXno37MVNHtL2NRaUYLhfrs",
  "key36": "66oLkxK97huwk6RopXLFaqEGhyqZLxbaAHH41ZcStt3LbmVkgzv9kHsHEWchJaDKLco3gpmRyYnrvowTqQuWLpqC",
  "key37": "3FiQPhPL1PeeaTGUTLxQQqfACBG84DnxnknS1bMvWZtQUGWf6DRbRWP7Bm7BxGtnshp3Bhj4BrP97TmTMZS2bHfP",
  "key38": "xSQUcJGdn1gvboccvZqs4YEYszBnCSGre7MpReGHb5f1FyefJetVgSQjUw1iiymtkCEKZBKzsGuE37zVWA9MQVg",
  "key39": "bVhKyvoCuVxuxJcMtj2cGoFisrqSAWkaWTYSRgY6GAHYDZwyEYj7FKAmrStjQSHGisx8iucWqWy58fX8hYFokTC",
  "key40": "2eQpvFsuzxc6eqPCdagHYmH5YJK7WAyH3enhH1RmtKaQb3GMJKhZcRvNfQn3MAbXsKL193mU3UYNYs1RPcLvdHUD",
  "key41": "ZjDAAUxZDGxhK6nV2yc1jCFQore2FRc1YXSqe3brw1CEjnUcPGxaVym2BNoJv3ur33vjSs2cF6zdHxbQTPagydS"
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
