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
    "2wKGKNg9q6ve9GVzQS9fMKsea8kWNb4Da77U4GfTcNuRMgypwpK7ztdtXQX5JcMGoW35pHj6nW7fGGRyUaWammdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXvzwnEE9UUroFiksX8s5PqfiQiSDgC35c76EhpGeJp98pbFUXerTdDFWBoip1f9Yp1CNxxNhP35VvCMsnfpEDU",
  "key1": "5tjYwN4QaPk7rVVXgCUs6Y5TSXHv2PsPUDBybHPfj4jduhLSBmJskHNnTxWV5Uqr1ypdoNhtBWpDfdMBfHMPr9Se",
  "key2": "3fRXGFwgfhygaFBjz7n3y6ytF2h1PF2TPzzqzX63qCjVZcxFK1p3rMfWms21x3wnUAiCme6Tk4mXpRbkVEMnE2Fg",
  "key3": "4aRJQt8HGRzP27UVDg7fuxmkoKKCDEZBxA4YUw1Dy3mWxYPhdyzvhdiHBtB6sAvCsmKG5npvR6V6eycVgpbr4i8b",
  "key4": "4akny1kLx7SkMWdZG8Ep9QpJaJUXT77Ycf9sgYzjhZBnB4g4Zm21foEQ9WpY2Lpa5L4tv6tiCFNXxq92cbummKeA",
  "key5": "3D1k6vtE5gtkgS8zepjoXLUKLmdqgHK4s4fQqq13BBJZaCkuMvA64XRmqyMBTQwenjAsVAK9pAtLU4F7g6jxVg4t",
  "key6": "2Y1MJEXEzWfB3fr5HgkwrqcV1FZjvDSGNu9pPrQCgjKsN9L5vAd9QPgzNcUfiukuXd8qLEBfKnK2Hr2LpRhPh2Sg",
  "key7": "54hubDCUPdfFK3grJtpUD6kMbkCfoXtNMoNKxPfvg3gVwvekwM2cEVdY7kv6BsvkTbP1oKNtX4HAh9Hf4QSzTL8w",
  "key8": "5oe4UxJbU5HsDHDGprFYPN7mNrCrFhNmVgzCSmSoLymaP1ttASRreyxLzAQrtpUqdAyrmT2mcvPcw1Bxn7cY2nnX",
  "key9": "398pTohwZnQcR15bZLB9WQ9LoVU9CjrRXsD9FGrcW4dMYeiEzGcta2aVcG8x4n8Mx4a3v7pN1GmhzVupH9EhTAUE",
  "key10": "3yBW6LNW5noaitckK8HbXJsULXNUppBgtJhqaVUuXF9JLm9S6fnwBQiPhVCshKN9sJPWC5LgjSZtMUohMb7VCZJo",
  "key11": "pW8RDPaB339dUbgtk33c5Afpq8MQ4TEh6aidsBZVjLpzW53im7HBrqQ1Vhjfyebk3kYScXtvjSGRRVrKrV4bnad",
  "key12": "2yjjQj8PR9ERojXhrkSf9yGfDZoMrxwoD6jVrv6cG9HqUzHecm5PEdjjjaN7wjh3p38Dqy6drR4pQmKGZ4cJbamf",
  "key13": "2Jc1BC9M4162Q454vY3JxScW9v6ovF3aSFm2E29fNnqT8V1jgpns9z4gjWUtZ1K1vAAeN2pRFBK1YLLH2AZCXkdq",
  "key14": "44wPaftXa9Tvq4riebFbLnBT24Bm5LQ9fFdeGrerwKtdiYnWoZFgnyZwvyLdLruCEWx3Mu2itKinKmPLcFsTXZF",
  "key15": "3qtPmig3BaFweSpaXc8dzBvaJRmQe3AUgWrbpYcdB57KdtXLYxUuy4rpkQiGTaHz7BMSqtFC8SnMVGgVZsLkb7TR",
  "key16": "2GY1smvdTrECBdsnvveavT1dCfMJ5XV2kXJ5iPDvWXjyEwmkgcZ91ojK79d2dh8Bffxyq1PQZBbF8Z7d4zfyLSr",
  "key17": "3UEMQJr541obB75UVCDmFEmbnuQFDmxK7gv8RdXVmrgAZ6ZBpQjfq55SEryAmE2XZqB5EWyi3reGJMymC7rTAJdy",
  "key18": "39HwGX3zhwzknQcBq3i1mrxVRH7oZLXfZ3qcCEisJnsQV3gS5zgF5oUZCtiLqEkXjNoi12sEVuDdbdATxFUv3yHe",
  "key19": "76JGybrFaShRoBpzHvGrSxJwYYdJFH27tYyXwckDeqbDFcej5tWRbZErGveaMzGoKQ3AYchLscNpGDrNJrKUS9L",
  "key20": "4NNtFtvjYwyd6SrvZrkFyfAuqQQ6pd4BjmoqsczCi7T9rDCvYDp1YY2wM4iPrSVuGgZ6GVaHm7Sf8CqyAmS1L4Xm",
  "key21": "4Y6jCppFTbHJ5iyEVLLhhcPT2sdVxZ8wZK15dfHUTA7Hotpu21bm9P9niGhiaMrRc374waLvRbP63CJBWTeQNQnk",
  "key22": "5tsmjE9wiznAtkuFN6LSwHXJdye5Xyhf91gYQpajbkMrsKEanuoFY4iLMvskhzA5XfXEkjoYpqwAzfTAo6ysTEzM",
  "key23": "3hKLTBEaUyeoXFTroLDvbmAYiR9MKREGRxYdguxwtQmFYYtrkrKexaDgR1qJ9iTGT2bhfNrb14K2RCe7eWKieoin",
  "key24": "4xQDgtGT9ifTpjVFpRotBMD7RnMcztJMS26pB8GpTgJY6j1uVeSjxC6XZRAfvd1R3d9SzCpiopqm7doGZWzi2Qim",
  "key25": "2uhErmhCwpMk3H9vd5synUSuzG55L9zfSjZtywF8Q22xDLaEsrWTqDn3kxfhxHdHjWamEQNU8ixcYGfm2hVwkxQU",
  "key26": "5Ty32M8sWQUhYwg6V5ZV7kvmkAZ2MogkFwqw3SRvbHAG5vcx5GdFDbPAt9giGk7P6vyBmTuy3hq28J2oX61x7gKv",
  "key27": "2qJH7ZwArzSwbsWj3TZrq4KUYPEbkSYpwPmSCdnEm3CJ8xPJqZaST3NQyQsc47nhfbjFfEDVnqs4xw9CLs5k1rxb",
  "key28": "66Evjd7aQfxPt2idzgttLKomBbJsvuejV5p4raDz14QAzu8UVQZYbA3pniaBLFnwh7w4VdS8sTbyQ4EcwkP1zn6X",
  "key29": "3KCZt4xaCGYk3kULgfpkv4cFNb2x1BhVpwR1U2GzoY2xsvViyACTtWN9jebgo2bXf9gmc2R1ttBRdayHsnFbCALc",
  "key30": "3JuZEjbAbMUhUvq61HuSQ4iSjkrwV46vnCELSqP6U2qv2A9AdQp7YW5QF64CE5KihoJK7m7JESzw6r3ZvnsQXrtH",
  "key31": "5sqXDijqbUCxutTx1mfUhNsnG4sw6GAFneR3iwk1Psse5GxRyUfiHPULQy9t21PYFJdUG67vTSGXnwjuBd7evxFU",
  "key32": "2YviziJCSMrLeqKs6Q9KwonkoP4qC5ES74kK3r2yVFqEELMz4ngm7uTdJHUrYaLkx3sDFc3pGYY7EpsYF22BFh4T",
  "key33": "4X3UHp3WqAk3hxDpohzbRdg1Bn59bNHzFsx5tW1FwtfogMtpagSxtL8yUQWFncnPZKixECPdW25PxJESHbUDMie7",
  "key34": "NWVRaH5XinEaA819wrxCJSvPqjg3XPr9SZ79LnK5Enveg5W5sgL6oKoTzxYswxdia63r4HuozDSPNYuciw7eQHP",
  "key35": "5kJvaF3EFpdqZFxXaCfrvcSPvp4VugECuTUTEnEKY4BPUAZCfSWqRyFP6VH6T9kq9EPF6n3FdEzSK8XSSiyWmXnE",
  "key36": "2kLuCrWtYvX2SxHc4cbUWch91Bp7cQrSbfeGHTgmzx8ZnTfdSESps9CdFT8HBEAgUMiz24MngkwMQ1PjqPDP3sg5",
  "key37": "EbJn99cmnFgtbRRJ9ZQUhZE27AzZTupfCahxZtRVMWovANVYFji1yu14VnmT6GuckXVcF99c7SLE9n4j2WSREyP",
  "key38": "233GAPW5d2b5UyJ5gzBqoYs7ZWvkvy5E3GqQGBVTT8UooVUenrQ9XsrmrSrSnvJi968AHLyHE4gwuCxk6F4N1rqt",
  "key39": "38AwAoY9gvuv8URVsSQzRXmGG9osdpLTLenAv4DN32Rt9omkKexC4DYTCnD5mdAL6HsCfRzaoDiKmh6zXQEZA6oc"
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
