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
    "3tJhezxk2k6oZZJmNDPwd5p3LCPSKVRJKN4hTJbWwLeg5migQ66o8s5pR1B2BrM2EsYnAUwPXdcet4ynF1Q4rszw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GejVEj7wThgfdkNmq8mmp13eAZvrK5XzPSHuSARCTAFTxJhNCZzSzJDb8TJNDtnz7pnJ4rGX71UnJkbRfvPts2w",
  "key1": "3S9kaxTUPAv55Vfkyn5YxM3LFc2JmHQPC4HQyTbx6Zfbhf6pt8TantunVsLAACwVhB37KrSRXK7aFvvuBmYbMmRJ",
  "key2": "2nTWnkTAbGZDeJr4Z2AE2iTLXxE82Q57SWsJJSuhJUph3EA3uup4AgMnEgMcCGC4Us9CrBsQJCxbXrXxmpXaLrzg",
  "key3": "4jqE8idhPPvYuw6Sok6Cjsni8ep2j9UqJKHYzdPJDhosg79Wm32uDG9ies9MiERcxUFV3TEQ3hYvx91MMbupHXum",
  "key4": "64nkbLRKFrrvy5qudstjUHGHKMWEAoL2ojHqnTiQwGs7uGq9dezD7HFnCe9TsZM8WcrxSePYUpHuEjAC3Sh9zemo",
  "key5": "4MPDYzJN88NQ1SJGjRzqd9qMbkxWC1tGyq8wKG7D1rBtRL34Jn2vviwpsdMPPgcEsGirzpiWKQAyq2TF9R3ycteE",
  "key6": "2cxVNHvC9GrByURNsRV2aaPBAtLKeqvdYyGAsdNfceR6tqGC7hB5pNrhb52ScxcvFZba9FucUKQM1X5Z5bMA9rmn",
  "key7": "2bx1WesxVPNVoYvLYghUHV3gJjqYd1TnCh2RUZGpVnWXm7FEskjfnvVGorvZe7hJg2PrZYxoE55iBcim1CpaeJcf",
  "key8": "5qAXH1nRXy3v87CAPFBWf3EsQhABqoX2EwUnKX78uMo951FaySm1RMYiAXuonytmNNkcczj3yABw6wUVf7DHrnHW",
  "key9": "5oUinPehMi71Jw4P3p7idmCQFu6PDgLSMNeurpjo27vnBmWY5DiN68JAqFfJfygrVpiU55SAjc3PkV26TBFzvVwu",
  "key10": "473yyZjH28tTR1AkJoEtsLdqBRXDSPVGTtEC9GhYfZQbgXN8RnDhdtMF7CLKWNtZzaf1he61jVvWPoJFFsRXUD1Y",
  "key11": "5XpsEneUJUUybMnv5wwSHmo6ZNEs3TzR6Utj5UH4aFVXoGQE49SXZzC4kDur5sqQqZYTCSkeh9ANEVoGoMC9ucEE",
  "key12": "5q6rKgaKaUEzusuFhhEPxQ5tm43bbBmegWyJLhJDaspGuQfPhyVQQCxTJuNkB6Uvsnv1dpnA4rp9bWgpvLjAte6q",
  "key13": "5KfWkSP5CsZfhdwFEnP3gsyZvwqrRM8JDMsj9X5Capa3cfBqGg7mx7d1Xgw72xryVZrVH7rtuakDcv12EZ5REWr8",
  "key14": "3a6XRazvvBJz6orsY1LBc8TaAepBqjcHTKp7oK8YhdnZtiLzHyQKfmKACLQsiDL2Cd4h9cs4Nq3cXN3bqLN1iKfg",
  "key15": "FfzSHnVFoqw6RiCTas6teQDRP4pNfFMYpfTg5e1TMMGcb9M8Jeeyqq5886qzTWNZKgbGEHw8EVAcJdEzUTUgjRY",
  "key16": "2xjPTXbXcQgCf8vDbKsmgJEfVLyt8muu32e8HSQqzWNKHnL3hFW9CynBS2o81Lfiph4mqLa5qLCfgFgrV5mdGWXs",
  "key17": "3ExFoVJEobPj88m6EU2QkXFzLnaRyRjYTVJdKfkpa33VwtPbiZcq7WQnhETDVoHGfxKsTLabsgsUNjShbRioRm2r",
  "key18": "2J1WpSBgg1qdoPWAaJFpCZ6GSLvPVJFCetLj4ugwG6uLPompp7uTrpSLNbTwX97eGnjLK3tv9utzmhRdcf8QNz6y",
  "key19": "4UU59agg48KdpaVpzTVTpZE3KAHd8toyQ8Lo74iCzV2vtbcNZZSNEudH2qnRi2myJ2viUS7Z6Vxfy9EsG383kUUG",
  "key20": "wHQ4m6MqQJaTF9SwPo6o1wtFQ188dhgYcoXHavUVgQnhYMJ7YibUzUmLYUobNJpGaFAV8LSTN7av22TVW4qxjmF",
  "key21": "5uWZQwrBB2KDbVR5zi6k17peTVhsLMA3PpFZGm1QkxjTnyNzRkfx2VGUU3gViv4aVmJN3X3JjxWYWiser7h1DbtK",
  "key22": "5DVsrzRbmuTMkiQEDsxT5vm5gMu8bHoBrRfenEasca9ZfUvFFJfpcuuzGTfe77E2ApBZWMRmKLfiFp8jQu7GsaLc",
  "key23": "2JFWqX8iH5VzYV1SqRC17sCsaKukkbaSe9YgcJd5BbN5y5rHEhdGmRUuaEUF3VGGBH93nnrUZFW65wDpvApXcNaW",
  "key24": "4zuTWV8EvsxToAsRZQUg2vUZK35j2UUCs2Emr52UhDd3iu1GrSgi2kSbxJn5QKmknetTwPQqTuFTzFsBRRXsJM62",
  "key25": "3LPkf2dPyyp7kT7sfWpAYMq3Ap2CZdpQD5mVVUdhJBh99UfJavgyK13QzdF5KsaeW68h5V5wUTNNm9NEpXH8MySv",
  "key26": "3AYSLPXUCkCNEdnprtMKp5VgCDEizTTvFsFwzAVp3pZ1WtYdXAdHYqmWpAswXivytxXEYgUtzJVw9mtHWfDmJ82z",
  "key27": "5qy2Y2njJEsxNncmQddVzwXWZBk6KwDRLoQfbwbSNovmpgRHs9RtnjD5QiJPugM6ixLxCYPALz378y1249W6N7DR",
  "key28": "5xhbUuLQi4bv2Ndw9ZvahxPM4gc7fhuSGisKw1F1jXdKSwgZgrhdH1tgqxTgFVP4qhoxozTVuQvdTtXKz77rcaYv",
  "key29": "Y3QZZTy874qP56arzYExNTYcLUmVR4YMRK829HhsRiCkC4fea14zufbt3zDkkWjLguKV1Cc8SaxfWdwjvs3NvRh",
  "key30": "3fZ23sRk3QLwhvPZU4XPJaedg84PMerB4f6ndpyd7QTUJddjFQEAjjpfvDEdekjDei4dbhLy3iiXYNYUvGTHSY1K",
  "key31": "4C6BRAgnzfFnm2vUcwtec7pTvwiSQdos6rcqmE7JcFAE4DkFXh1psisxQ8V4HBAswTABcBxDDBX2NhBa1ohWBAG",
  "key32": "bNboeZ7L1N8wNxckTA5hxLUqaeiDpHeFZAafQir3FFvK8MaWecFrGRXa8ao7DpNvhmkaEXsc8oHuJmGmu7h91Nt",
  "key33": "3CzeEb6sJiiQjvMjH6qopMySuoqsSkqcqXn8cAzEut6bXn6DLZBw6jN4VZR2BNPy2H3kMbhsZejeWK9a8ofM6rNG",
  "key34": "4PZwgNKwsNLi1GdHYBkHtfUQJSP6JPHijX2XCEL8QWPipL9ufh8M14upkmXts6jhVd4KPK8h5NxBamCuKMhqh4mt"
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
