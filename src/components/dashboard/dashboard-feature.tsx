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
    "2oxYg2uDdC61b3ageq6YwbJ3jMnU9AA7hGbY6tmgs98fD84Vui67mfM2H1T6TYQZ7JXCdzhy3gUDazWSkZQRBqRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K71PGSjCFzMTgbHUNnwBUKt8X5Huff66rJ3GmM5dLta9qaKBPEkk1wqd36irJLAnamDXza3ggWNVx3RMnHf2y1k",
  "key1": "5HGPZU7JX1knSgZiRzkh78CcF9wFLnUsBt8p72VyV9wubpPVQ1HmcPdPVVR3tN3Crksheb91tEeNfySF8vpiMwxb",
  "key2": "3HA7epyRtuQp5dDtr26m5SmipMgMfiib6LvhyhsFXLhu91mjxq2qffwDDFvxBGpNGHzQzsEhuufdgnvJc47YRrTS",
  "key3": "65wvZxP3J9NPqxCssLhqhooXyh1tRFp4JgMiLBu1o9pQYxKntg9Me1tbScgT4f5E4PieLbUn97dPQ2CiE6o39HNG",
  "key4": "2fjAN5xqut9EojbhBEkLDYjcoReWTjXrffYUApsGHixFvrECbvTU4tq9wySBJkFcevuLfVajMcVJu5dNvNHvKneX",
  "key5": "y1b3ncAdoEQWWmgTCAPrYonBeV5DbiocZAMDCqUqmbJX1R1gvCT7oWVGb3mXFRFA436qxg1icdUpKczPnqiPSEm",
  "key6": "5EWztmxXPr8mf12FS3PFKWEQgqz4zMYt4TvQz1XYsRJRXq5hc7HqPmoGXV7HrRr2DX6ZkwzbKRDCBm1qdRpjpxYR",
  "key7": "5XSFhDNC2cz4LtEXpC4NbbRXoWoxafixXaeBQF3RB9bTDnZXknhJRV1p33yfKjxifUgZCwnrNkLi2eroL6ZPNa8H",
  "key8": "kqRxpygLANqgCdR8kvR3SB6j8Fq1qKrMfg1hux3rjuA1dz2JREXrdEf1kYGxgM4yQCuFadA35amcZRU7nohmeFy",
  "key9": "4sgxEmbLEcLMWjvDXnQEEnDQVcxU4JwVx2xSstaQWzKD26bwi3mykkW71gwb43y6exE3giCSrd3JYMgNpH9Fx1JB",
  "key10": "5NUqmSox92PoGP78Ck3WLAS1NEL8saNLeqJJq5y7pZnnYdXhRD2d6W7pcQUTjhvehkuLGFQAo3WLDBeUxjG8Edvg",
  "key11": "kMpmYxDULhY8cmn2EsbM3EU84wQMUcW2XYmNAMrVqL37k4AqteRRFoLpVxYSQebFJZA7hrbW6siWhWzpYQWDC9k",
  "key12": "43Upnnr79yNc9qBBBYqp1bjv6Wn1wNSujabdm99Vr7vmWmrKctK63yfx2P7iEu6w3MSyjG656uhVPDncTasH6Nuf",
  "key13": "4DSfGt1uyc3gDxWYHnpFmt26Ff9D8Cv2yMiP66N1fQjyReqeDwT9TRBKz3Y5bbzVxmAUQx38cdEsk1AJKh4cDepK",
  "key14": "3bRm5RgD3dgoPSS5DJk49sqdbfXMsQpsrwE1BoUfnba5ewcYBDXrS3T3TnMmRaz6vMvRUoAarChw8TeUqgcrDTAD",
  "key15": "5GFjRwxxRTn3HYGMsBXxAfbswxrqAD2HiF1gjW852PQ3mwz9PLnTd7vqXWS34xgGk633BmMoHuopTA2HGYMYsomc",
  "key16": "2PkVwhk7SmUBf8V9Cri7AiN74Zbr4NKbsv3BMcT9i2c3AdywwHYufsGRzV5DoYZ9TYQEQ1cBYGouL93vXasXPPBu",
  "key17": "3hq8w3jZE5ksNcKHpZpCnb7ycTve3YHT297PNBQaWpWLacRFQgwsjGLPGzAMxTxoQJDPAyxHjBZh5nAeH3V8KF3m",
  "key18": "3KY8dRdQXtCp23M5i8qUe97358YSEQE1S8XzK27sJSowjexHog1N3TXWgPQf3WZZQvPKhehRRjyvZhPDezgeKNo5",
  "key19": "2R2j2gfwT75DEuu7BUA665KbTbcqbZkpk7E22WqfMmc2fpRGPVJgVouFkQ1jaqzcSVCTaGkM9SvtTWwz5Wa3zQxN",
  "key20": "2K1ia8h3sU7A83k5TyzoQ9xNvdd9z5qwZo8qpgVyjmzE9tkBVspFq6RzZqqxx8KkuuHewaAWhkynWhCK1NFAbfJ9",
  "key21": "2PXtBqZSo6V1z97XzMedyUGCoSyKKpVyuCq66Xt6oTGbLNs1WrpQKHmYRzkbxZhaeUz7KRxBvkiSa7EUgFvTLLCS",
  "key22": "5zsbVjbRa5PSkQrT6Lndwe6Hm5LEYDNxy8g3YZ3V9gQc9eyXFgffrw7n1uMbP6p2RKDwMtJbamTpur4YyW6tpRPp",
  "key23": "4bmtdU9ZnLHGoqBVLYUomKGBxZVrThGbvSMHicqxpc8z7kDaf9GDVEwBd7oLdM1UXbgXP8u8g4yM3jvX4RcTqUMT",
  "key24": "3PLjTKQrFZTqW9agPn6pRVrBY8RQLPR7ADNSZjETQRo1FfZctgiEk2nr6evpKBaGKkzEchYpZT4GynBq9DRuvrXt",
  "key25": "3WEpFMthTWAd6HccZgeCEBrW5EaMSf2oDZUSTFHvc3UCqkJtZeQz5NyNoJP4tcMvdMJJP88gZvBdAB58gVrJE4qr",
  "key26": "5ZB9w3UfWuuqgpw7ffZWLbff8AMNkhZwoCJBHLhVFFMKyzo8ekhwPxYdCYSDoaXFQMy5J6wEcGgnDYG2h6jPezfe",
  "key27": "tetrzzHmorMK4XAabKm9SNyWaKkZUCykGLmWWEw4qBLXQ87SC4zXN4XqSALLTcScF4xjW2yoxn2ryU4CoZ2Yrms",
  "key28": "D7VFXr5XaG8v1s9hdQijcoqdQqrwgjdozagWXB3LmghRimBvd3YhnZ5KghudVVVQvp3gC4UpX5MPYzm2MKBV3cj",
  "key29": "58XzgsrnmUbygQULmWPBTonAowKsBMmq5ET3uYh4VnjSjqaug2BEQvDi8z86FgZ9XKY6i6uviRdJcFgJNxhyd3Pt",
  "key30": "2cnGJZZE1rWNjeVXmKhT8YicD7WXatciea848XRwkXNuMN1ykF3K1K4QitNbufQAxoJabaEh1ia1gkrkNuuzAarL",
  "key31": "2KMS9YWDmyiC9KoDUZMbH7q1UsrgJR8u4xSUp27UuRzLVSGHXy6muVFU1wdkUKC7jRhcG3KiJ6Yd8hNLLgPqaEc6",
  "key32": "31XfjuU7BtkA8Kzj6n8nTnbU8WMHFioaq68zHuB3NAFFy9goKTb4E2GGXF4HYtHSR9XmpXVpBcMR87dGiM6KGM4X",
  "key33": "5pqUvUMzrUSoV6nazvh4w4dGuYemGMvbiJUAG2QzRCKaQwUuG9Xnx9UFej9cSFo9111rcmVSc17zFMf1CvbgCCRN",
  "key34": "2ZMJmZVcRV9WqBWtwCib7ZCX5kcSFCK77t1RwEiB8DVkT2TX7myJWG6trAcGtmxVHWiW9a6PChuA8Ns36o9BJXr1",
  "key35": "3odAbM5WqdnrvEVp5M6qG82uMSTTePVnKk4ht35kWcSskWxCT7cVVVTHkFRnZQzdZgNmRxzGWpREZhbrwXkPtjiN",
  "key36": "2pewEnkdk1sFNVT16TMsFRgk7q1j7beTWMPY96SXEHKc7X9WDr8VBBTvV74SQcYeJBMciiCmHNgnavQPVU3SpoR7",
  "key37": "4ymwKoyZt1BgZZCskWJVyovRSbrRAUxUriudJ3TTwrb3oSiSzrtkYdMNqaos7LvwUzVTGpwgAjc2WjwQ9nfVutvm",
  "key38": "3cQidxaggxyDS9WkFMSmZFdyn1xt5Di4iCcgFZ1zHFgY95zmXK1hZuWNY8sReAZSt7AXMYbZK1mFV2fZG5Grpy6A"
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
