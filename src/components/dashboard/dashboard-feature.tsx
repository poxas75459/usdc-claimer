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
    "2LLbYw3Tf88vFCJ5cu9hBksBKpz679CFGaQ9eDgu3a6BRTnLgHyfQjGfS3rmrEfxTVv2gDzrJvwoVdpuEoP6XHWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ErbEPrVgUB8mAAb9YS7WNBiU7dxdQs7DsYLLzC4Rbn2URtoq2Ebs8G2YzNUE4RjZipoJ2TVxdH4XQ93DPTYKumA",
  "key1": "2UkNo1edJfnT9thfTuJWTqWN7x8yyLUB3dLUvTtweVrkkVv1JNCYJ9DuDzTFLwu2W3u1uhBH3u2vF3Hv1R8asJas",
  "key2": "3m3ABaNgEtuEJUbdLhD7njFtAk6w87kZg9EMey66DJzZBxFvTrLG3LyBWqyc24v8sFX6WzvUUfSZBtTJGSjK6tzB",
  "key3": "8SRkEFDuysKUdCamMnWFS4uHbWGdpPSNtftU9RBcstPkXsb9evaKmQVpbbTraMRX31pYvNycBJG4zrxQV2Gfm3f",
  "key4": "sUbwCbQhxW5rQ7pCcqtaYBSr5getK4ZVkiCXA9eFJeTKKDfjP9N83mgDDmLFdjuwVEkcgtJGDaG9WgwMcMava78",
  "key5": "5qZp2L5S1EnzL5DPY5JHf7edzrbcoyHcKb5HtBDd6h7AY8AE7BG8WbS1ZGyuCdQiCqKtfhgmEHvenABWKLQ1dDpK",
  "key6": "21AKzG7yxrdFtvCyWZB9NFKMFdeq4zhaBAjZUwQacy9ZpvtoCp398RaVFAXrD9UfyRyui4AzRbdUdhTPTQfT3KAL",
  "key7": "4VFqMDXK9xWKpkaYew12ozv4eEmurzMs5VV5cDKLNBUFxQrRa3XtKMZqga4mMYbEkX6o29p6DoMEhLCEKN3WZR5T",
  "key8": "2SGWZRQ9WFQNinUpt9gTWCHmruXaaJKNhMTJCunFzryoo8beivCbKVyJ3zcXmDmnHkxnGGiqF3g3jhsuv2yhSs3f",
  "key9": "4e1aLhJSqpZwruuchdm8WoAnbTCjoWxVCdck26rgbYYwAzzwZbxCB7NeRYG4hxXZPxB7jNQYr9o1nmSDnCwWSDdV",
  "key10": "Qmqpbv2DareV2Wr2212WZ2wYYtdXy3W7LaaQpvuS2T2vg92yV46DSwCHUkJG57wwJqR993NYg3NeCXCvjoPoU5Y",
  "key11": "fp4r97nMY4YJTV2niNnMdx1qcFnV4tY9wJKftZToBdQL6AKQSPkr4y411CwKeFTLeQzNAAW3fnovg5Dbar5wEcW",
  "key12": "4S4ypYuWugqMhQ6a5jixkytGqAHfBQqxDcZ6HLGtkaEdKAXuhc31kQuVVA4JNpdwXrhvzjcv63Fy8HHqn8y9yY3j",
  "key13": "3ABvKbowG93819i4gPhfF8RLtXTgo2eNXYhG5ZMKgXo3dDLMyvpB46jfBLT4esJYMTQCUhyGNPx4SBPP7BPGowBN",
  "key14": "29pyBQq3LzjH2JhNnxromDkLYBVw5Cs3kNr466dNxEPJukJyGBxRKFYY5nE1TuKTXRQ52cRvn9Sn9xUBYBWMR9Ba",
  "key15": "2P9dXnAz8ojPivnLTQrV1jNziSbBJbezRL6ZRDSxLajyYM4Bi2NbkaDv2Tup3Q669BvU9W8pkHvya5uag4rDH3oJ",
  "key16": "i4og3GHfrhJwscaLQsaQZAh5mhFKrT1uCbz1MPd5QDp3BWXsQDeYPBymV8okWhGrNGogaDTx86Wy1TymmjqpJWq",
  "key17": "S4oTnkNtZVn17Wt1VjqZPanuGcBZo49ZC1mxLu9PgLpk6xnthngm6EPMRULkU2oHe78TaSJNHfBFi4hajEHmypz",
  "key18": "38PsR7x1uAESh7euhjtvirtxJqKioJJo7cKwTZjdaGDJnaFvWM1tybeP5sLYtX1hxXwuL7n87E3Wcz2vhvVCSmHj",
  "key19": "3wSEhNoedkoVjiadJAsA26bRJ8Fgqd9wftxYZa3nsEVovrWaB3wjJ4Sxifeax3Ab9ACgFQ1WHMnvdqByAJMck4zp",
  "key20": "3rWM4Z7sr3MQDKhq2DGR3ysfbncwDix6hkxpftGzikJGdPxkXND5eZmn8EvcK4gQzsBMQKWJzjJRUvncRd6Rk8t8",
  "key21": "4AsiqTF64ddc69hUGomqBCADuddtzCF8oCRvoXjkWGzJmyYCGGXBKtK3Ni64hPdSy9Uohf6RVfJit4TTfaoc4AaN",
  "key22": "4Mc7xhyrCuisRuv3b3yKrJighZuVE3yZbT1oV5GVz6Zd1vySdnShtLAhY4WsEhTvcnQ3DtbfiHzhNoEzpQJU9qu2",
  "key23": "5QsCq8zMFaRy6CZa8x8QFGfV3GeoQR56Hpvv8PZnRcouNLUbFV8hUYbyM2m27GHEBPvEVSh1C5urSQrhfwkDcTjn",
  "key24": "22msReYrDfS2LiMY6Hm6kbWN14ngnwJxEz1925iBZxbKVVp3tYLh3ssfJqc2e95uCvTAkUb1fRPYXnLayGQhat4b",
  "key25": "4Z4NTgy1knpHQDsFvt5pQgqpGVqeCG5qddbd55YLMYtxRt1tGRwETvXP9sqKxyppT3rqhfBNYKSCAcNbaeP9GS5b",
  "key26": "5Sgfnf8PkmqSLDYMhxHhDLHyvdM9fBKQvCycG31KTC6SHEWC312nYBdsPHpCM5Xk2ip1KBsn2iFHMsj6GRRi3Vab",
  "key27": "248ygz96pTmaEbKbWr6gnjmEFNk4FrKPtnviJVDYEnRhh6of9NrpihyBpPnEtZzCD1ULVPfTCPmUaCV93Cy84rtW",
  "key28": "2122kdsFRC1DRR965KTwX4iEjd4KMK3VPCoMCmusCtufP6wUvVHLBiAaArAVRcBNruop3d5CxC4eeHB7FKfrhyn3"
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
