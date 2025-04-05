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
    "drvgcA4BrLAKwJqRzBpHS4Perkh9p28h4tNS3Z9Kmrnzkq6RRmhAQaixREiZ3mD8bAmysc9qLk6VJaK1jrLdyFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34qVpZWcunpZZFMGFHrvrfhPSE77Zu8qc93Nz9gUJyAMt4xzZmZXRnj8azE1r4H5guHSpFpc2ZVwcGM5VXVQw3Jh",
  "key1": "5cudktBfsaWXESgWSJeQTpGmkVMQHQAgY6Wj6sGesX7BJKBXWvrwtxiRY75sACPCb7gr3eA9rqN6xyXcEju4BbjL",
  "key2": "5UWNXeC4Wa1kdaMYpLeCW9DyXdCJbsYK2kWukd5fCzujUQeQZAiuWhqSPVaCcttAzyMQ9DGNACQ2TCG7K8j8kWzH",
  "key3": "2y3GRMuECYyqgvaCi54dzpiWFPJkEVfn4yhELUzCc78R17ctDRYv1hw1D34cqN3QwCyuF5CiVYvEgBFJWdHSbRHq",
  "key4": "2c8tEa4DySCxXqoYC7AkcE2FSZtteUK63U7gEoJp354KKvBdeFivX1udhiyKvKrDkmrD3u7Udbm3iPPrX1RA5wVz",
  "key5": "5KdrwvAwPSSKLZqxErMF1THH9PcVCmEoUs9y7vKUPo5Fc6vue5bFvkFdcPDrbk52zfvaLPP5C2CcpjcPJD5QRrYG",
  "key6": "ks2xeAawd1CTUZo9bwJKqyPLbPVenszwsUSR2yHpWKB66YiLKhb3br9T2VeadQqf7C3fe1V4gwcrjGv1aJn1poH",
  "key7": "ouyDDirELBM6pAn74pGn8fm8RDGTmn4g7WsmvsxbNdStsu3TWjhxzdgcW83VzckuLTpHMsHTFCfZbqgtckWniDF",
  "key8": "2mPAdMpNhhqWim9Jv54DZLXAPHLo534LPjJ3pn9NKXCyGhTJKB5KiqxzP1FBK2sLfpjt6GBUFJpRKiaNLhbbcniT",
  "key9": "5jVix3NLmZWwhYX9JN3XzcHPMiZ91LaLu9gXwe9BiD5YdUJUDxtUSLezb5WnexcUyt4oqTJ2pu7vq9A8EeiUohx",
  "key10": "52RsbqperSFVMrBfTxdk5xVEtYucS9A1g3BMZF77XRqFaxwc6gAPf2ZGTia5f1dDrJFeTjgWaxuG13tC35vXFb1m",
  "key11": "N7LgtQxhMZjiRnLJ4so1c3FTBcSw3Tost6NwpEXoNWPpXoLt4kbk8SDsMfZuKTKZt7RcfbWLpGdtpp8ZB4Dm1zL",
  "key12": "3qLK7RinSiXYZ7MiHdovMr92Y2rtqsQFEjq57pkn3rm7mBnYvkfqtasmUSdQjAce6BhsS86s1ykqLJj21S7MxGzM",
  "key13": "5EoucqS7dauci994aQ4uqWF6QKhbByHT2Gq63JxUFk6QwfuHCne3frKEezd5Kh3xFGAwCD4puW3fQqT7YffrnAT",
  "key14": "3jNmVJNEwjryhiSnvr6Eoiteua6w4HTuLWePzuhmibZ8BHsh7P5utU4Stix4Vni19kXmQiKD9zUMrMU36rMsWmL2",
  "key15": "fmVBLPVZmNx6hFe1bVfoVPFM33zXaxhW2YmHyqmSXgg6RDJMm5wpCPEM7bpr6zsH5G9UVijBdCfFKePwcB7xbkj",
  "key16": "5UncM8LW64dKNAo2sPWviYeKTKcCtvnf3aardeBuUphgJ6AUDM8SeY8U837EZyoWEB1zRoWRmhmyf1PT7UhJL7Er",
  "key17": "2BdBokWyKm7YPzdq4vZXfPkkvqx6rtNTpk2XKEJk7XqaBFwNUQLiYKjc5BtzQ6Qwe867UqZWx3YJK3QUFuqBq1Ea",
  "key18": "2p8YgJi8gZ3csLbMJjikXoLNfv42kyihKyow8k25NwzBqiGZHNoNhD9M4MCKuXnprKz9oSk858UybUEiAfG7MdYd",
  "key19": "2hEPAgrByrtA47dyfbyddvkD4mJAVzSfW2L2w8R9KLiNm3HbZ3ZzeSKSJPtXr1vjXsM7tQauuY15io7scZcFACeZ",
  "key20": "4167Siz57FjSKyae1xKCicomroG9egPho26BDfMUGbuR7C1Yx6fWG1fhbrYVMFJB3YV9kymPz1cKGR7zgDbu9G8o",
  "key21": "4Sz4vjHSVNKxind4U6Spm8pyfV3GkBnE1xeY8z6jNEP4cTWbbWBu8Q2M9Udg1XamBNYE73Hf9KfviLKK9dXbnb9Q",
  "key22": "VSuktqEpoSjvsp4AM8Q9d6iLMsQTJbmaeMGUyZ7oJpf9iks2mjzgmFJYYTWLTmnAvaFeZ3v8vKWCqXYkdGHxhSf",
  "key23": "2BikoW9fmiaGs2HXSPJ1hZkQqtBGsMDaStLJb3TVv1VjVF5yqPU7tLB1F4Hf5Y31kyDf1uBnFvPk4NptdWgGcjgx",
  "key24": "3anJyebTWv5ZUekPoRiuWg6vhkBfqxrEiEbWCWeu1KgpSQYY12DfvvwmvbwbVZ7Li27pBBAhXxUmztcunT9G9qyq",
  "key25": "2eoySWUHdUQPN1aQy9NjMA8DjyAzNDkcDYLRGdVzBkfoBHBK5UKFpxXe2FmS77sFo92wh1C1HHJFm4KCPCXkPCNv",
  "key26": "2xBjv9Z9T9prXQW6AFgsQ19NBc5h794mgKYj5CNukmpMvwjKKC8nPxG2Xu23KV6RND5mNh38K2bX17PTVWjthjqK",
  "key27": "5B5cvLPy6KivaKnfqGpvx1LDFjAcaN6ejsk3WJ2K5S3HtjYZ7pX77DNKphkDpdg12mMLsoPJuGYk1yjZ1FvTbzNA",
  "key28": "N2s6CE7qsCw9D9c9HvriYh3czoH8ZBGiVdVBXxQRwkGor5Rp92yG9QgCADT8gazSY8Fzn9kVWvBmH7D8ok52yuH",
  "key29": "4SUeVD3QSRQRP1P73KBAQxbMV7rLWBHnBF1CvAnH8C8H3gN4R9HHJ8GU5afT5DhNmex14RzNW8nVrXkF2N14REiv",
  "key30": "2WF82BXMosZXDBgKDeXLywcAFHjEvZ3LWdLMUm357UiMNgcFRYLdQyoCzMB2xWhE17TCqCByjFKUCoKG17Rve8rx",
  "key31": "5RTqWNfAdFaCCJbmTtT4U6DTGAQri3wuaPovVQ9esVHBkJZjHiBv4RD6BoMc1to3yzzvZ5JsQsTJ9ppWXE9EGtpi",
  "key32": "55C5XCVCN7dfFwzkZ5vPLadgNK8XaqddxxmDjwskobs7xzguHXwzvE3UbZVpwYqh7qadHumVebDd57nZD3nT5txb",
  "key33": "7u1YkVeXUSHLLzPiQxc3HKP9NmsNgdWT7BLJ4gTqZdSPoNBFFMfTPHMKMgc5BN6MtFYjNbaQLfHKyecVh9sN3zw",
  "key34": "37xziB6V17PRL7Kj5k3Z1oQeRZJGD2EYcSowPH4oh95o81nEVsJSJa8kV8y9EvSaqg6DywXzFGTvB8oNRN87up3p",
  "key35": "2dq5NDJdNA6SvYtZPanwqvnyASW47WFGyi4ZJyG2pwdnq35p2PJf78mab8oZ3ZGmMD1QgceTg2i7i124mdSRoVm1",
  "key36": "2YABXkRBsi5rfPvayiMGxFvsmGSaUYhRsqzNhterPLHwV8WEaRUDjERrZXVoGUWUrdJnTrJK6cAAuDB4ouQ5gnDH",
  "key37": "51jFmhmRGnJXwwAJZ4TUzmNE91AmbpwXHWu7ceFVie7RaDrjo1HpsNMXLf2vWbcuxRqma2awpwnHjE9KoMtRY8Fq",
  "key38": "3TbeptWdyBYwamBg9apbPE56E39Sxr4eyBrkCwNr3tPonz9ZfeAFwrkzbXTHY5Z3nmmZ1jDxUzFZyAN6z3MZJ9Sr",
  "key39": "53srV3pGyp2w4TCxiXUsxuexBwpgeL12vjZVCgscpG839dtEmCtgsDBdWNfzhqzoMseeKuhX2QekyPhoV4et51bR",
  "key40": "5sBNoQ5q2uHA1BXButQrKsrHZHd99r3XGMqHAFAbVUH44M1tcEPXKg98r58EoqaN34mRQTGxRZETkCtnT5tM6Wui",
  "key41": "62zqDZyLHKijVBvtzLzC3PNNUwxdEbrRjBUZ5VsggwH5hVRix8xkqgHBwNQrSq1u1ZWNemh6RvQ7FE1S6wZwFLxs",
  "key42": "5SHLRJnLJbRoKW35FuPs7cSbhJZjRkQxP66ZxEwvaNUQhhRbG1wCNXKAN6X68fVnUjquLrVHJHzLrZJa2PELqVSZ",
  "key43": "5vRs1L8SsRSQgohzd9YREYEhDJzeT5zJpYuSo3KdbjtA4V4554ywcXXBJrumgo5NsVxBFeLdjs3uaB4TZBfHbDto",
  "key44": "48qeosH4QNEwbALS7eyNtwnV5QNgRyeALzJuci2JhPuHb44eaMwXWjZpJVUhcw4bcyrnyovmyxgMnYTqQheSc8WQ",
  "key45": "BEZC96mAyBmGfrSWwyVPkTKxWan6U3z6ycSYRu8n6gTA1kr1eEiQjNmsjXo3BV9vC2sfJxbJkN3GnNaWnLkAEP1",
  "key46": "5ULdHzPd6GwR6fXUzyjWcvrpigtThGjHqnxpbRmW8eRasjoBLihcXreFuMEpA4cdmDmgCcGB7yXDg8AN4ziseRDJ"
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
