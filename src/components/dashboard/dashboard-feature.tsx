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
    "2AaewWuoZrgzrsXJccoah2XuGoLb9K15NwZSgPkkcbXYbJkRckBEQqujP6TvxfqjXLaVR8u6CGPLBX6PN6QAKCae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vzQnRxFoJRrC87z9R857Z8D677SFKmWDmTQDy7MEkgkrsGbvDLJjYabkCipaQUCjFi5KTtYZ5DtKXSMNB8fEHy7",
  "key1": "4ehKof63NQvHNCZSoBy2K4iMdVQEHqcprHRy7ebxBQxqrTtKV6mujfcj8k2qusUhMqtSxWaLbti4maN2YGXU4Fih",
  "key2": "5Vc2XTMcSRwNYDNrag4h5fY6u9B5RRXN6zuxbmNUeX4xWDjHfSWPBgThBJ95HAHsp5A61Qz1wks5JaxTqTNR9oFm",
  "key3": "2M3H4VZft8D93LGvPqyx6G62LYdC3uxuRYAmjKvBLCLdFW1FX3CJ3tLPsrrjnzYvo2N6h5wvE8PLiDQZwGin7NQz",
  "key4": "37RErPvoRcvz4y3oXPEcCAhg31c8JPsjTKCHpi7noG1DT6XCqATg9smHDVj1RX8xGKt6Nuvse4tiUHrWZy7H5VVL",
  "key5": "4CWDav6MVqMMEEcGpiL4f9LWkhhoafcnjEN3svLN7CopVBgKF9R3d4hd5FmMphYCKqK6P8jiytKe3kne3HAzhpGU",
  "key6": "4VjQaB8vXpDgtUqTKX4PrMr249yaXGE1evv2nRe6WCdpaVgqq7PpRBrYzxCYK3GHyaqks1JrcexFGHBgREByg8wo",
  "key7": "rSSmgfYhFfcjpC4US7sRWNZeU1XAFKfGxUj8pU4ce9PBiHZ8kLmJnrKYHmC5GHyjuGH4AtZbYTbhyzYQ49qUc8e",
  "key8": "5xP6wEPy5PzVDTCMqj185M6ih11R3ESuHtHsPLU5z3gdvhmMWS7ifv1f2NpVofHUk7FG1zc9rTXiKqoP6wq9JAHD",
  "key9": "iYSiNhpE6XRmzeBMRN2HeMZeEHbeQe4KqZt93aNyo4n6rYFSdNVhbJiXnK7TXfT8P5L8WuemCz5tgmzMNm97AME",
  "key10": "5j1sRUUtApfees2rswTvjpLaBqvwJAfxDvp8cDcvTnbw8ChsSsnKv13aH19U5Qr45VjqAn5cWdjH7LHLLKLoJkC3",
  "key11": "5fVMXahNam1DyouB1C4ALSxxW9zSu4wbUCniqwGc1fjYSfXMDvS1MRsbrg8o5mT2WFZrzY9Gt3q7HCiF3u9EC74o",
  "key12": "426YnWLfre7DrQSrbp7j3hGqVvr4xSMuf2vKaYq2XHafL8UDuKGR5mmW6edBpBFXVA2HqpURJQiqoqPxF775QTBS",
  "key13": "5Gtav5JkCrjArhmrRDhJkdjsjjY49VvWvzMM5UMzV2n3CSSEcoHYpLgJu7UbbTrwuvdeVctVDovdkXHaqPfwQQwS",
  "key14": "5F9stwwUk23nDjLTiptcDMf7dS8s4CGwMZiahdqPmVUU1u2fUa5HMdcWxBXuSEfdLDRESq6qp4SSRrn4UWYHfMfa",
  "key15": "66hWaEEZavjQWfHEYcQyR2cKDjhXWTtAnrVTFbQhCMeRCbfmVETJhHkuMZMGFa4meLJuHEyir5CTnNZeuFVvuu9H",
  "key16": "49eRW8edKu51Yg2STUKSCMC4zxt2hnTtaz2TK6Dty9JJ4vPMfUg5dtYy1YPXroy4DqRusNwnTstMjiT5DGw9RA6X",
  "key17": "4dyc7uVyaUd2cTkXwUAciRxUcPovBDfjmQVJ8bW69zGGPRUosRV8w93AsoYRssnhDaJquEUsS5k18SFajw1DLGPJ",
  "key18": "dj8eaDP4Y697oXRG99zQuboH5x2u3QhvdUhd96FBxHpBrruWX3QuwSJ34CWwWgcSu8ENyLJLc4FME1QmN7P3cuX",
  "key19": "2ic18JrJUgMNn4bNa4exJm3JQzMvG7vC3KpxxSd7w4enmBnkAsn9GC1gdSGVsikgW41mvPsf5sa7JXMNzA7BnM9A",
  "key20": "GuPu8sA8QBkNT9uPdHeWVLmtEzTskQLEtj8LAoGV4hVfeHxYmAGCoChVzSVnUUxwzL5dsq4v8cT9dyTC7h2v6wn",
  "key21": "Sz9ZfCYYF3vpWNwoenJHrfLSud7nVeVu3CoqoM4rsE7bR2CjabreED8pBuFo1BciHFcSAnf84uRnbuQedDJu76K",
  "key22": "3bG5fbVKR1zTSFoMXBnqwBnt4G7WhdKZz9adu45G2yNGD3bAYBWffb5pcARjXEji2QNoywsssRB4Po9uEGn1N6x9",
  "key23": "5nBgZ8pKbtg73FscN3tPdL2TRE2ezif3hVkjK94XG3h66WCRAxaRJkTTusgTdd6iNQQAYcLLTpPVJ96iQ2EHwhpp",
  "key24": "3MCa2mMi7qrsogQKG4ECDjFzauDZF7tH33MPPEGGxdGXstU5Hh8mjM1v9U3Rhq7mNrYpHHAg8yVZxxULsqUCBbsQ",
  "key25": "2notE5XYXHSvLrZvgCMz8KzNXZK4Gw43rUY8vXUjkCmrDPb43buKYNX8RQ3KNNHeDwmP3sWNkGRtNQ4cE2BgbgKY",
  "key26": "A6ZAveJGq8YZaBUfsRhpHLfaanwA3YSRQwXvTXF6qKL5HnHPbK8HAPHyiQ6tbxKRvTAsFCoh4PfikMp17rKLh9h",
  "key27": "Rzy3CyNkkYz4PggxbfWHv7xYLyHbTG13ztfA6sqcWu6hoqM11Y8jx4tmT1V81hjMzGi1Gepstt5JPQ36j8ukeVQ",
  "key28": "2ACzb2K9AFB9qs7XvZoQVuUMEH6PyXNjFDuCbiuJNssJjZXojataYnsk8v375JchY57D1KGe74yQseo4H22ECGi7",
  "key29": "57cQ1wZeAxMPtsa4poY8GJRvBBTEy2mrNbaMxLdir42wuTdapvSaoHznaMwgVUejjFjY7GBLCgFm6EeKrnj3y6Sq",
  "key30": "4Xf86qF8JCqTGYRjNpVtLowmf7WueKTGwmt9U4moizqZRJ1FcDvCXBsRGu6QjqALWZ2JmL2AVgCEgSjZTAU3RaUG",
  "key31": "2yCVXRdgoxnYJ1wWhftZmmhYGhmrdmxk5ywsJVMkNXRNRgPw8o9w1rFnU6emZMtTUaDQi4Yis9zTbiUS2g5XH4be",
  "key32": "MiaR5tzWo1cHSu8RegUYqoEmkxS4MhdeABHMZobMqE92HYYqh5zPAThPvzRpZmc91DbvNdjeSA1DBW3YxKApM6p",
  "key33": "2rsGtUuRwmeYixGjrVogubAKLwsU1Q43NssPvuCAPcEgjWVP6HmQC4vp1kMkcuK4Gu1o5kbB6piVm3hQA1tGxRUs",
  "key34": "dsS6tfVkiD76b1KEsPUv6v7y2svefV1CkSHg6w8EL24a8VEu8PdsiH33m33iA1373yAczZ27BSfbJQDenxsFwso",
  "key35": "h3FseUbkD9v1Qj8urFVxrGgK2erqyhrtz381CV6psxoJ66kDPn57dxmqwDLSaFZSBUK8swHzLxZbzZxsEBLqdXF",
  "key36": "muoonUNSi79m4DUsqXmUwsaumcUsxU4dMwaXXTgzmmGkL1ipskc5f2SqwiJCqLaRC5MfKQYqYyfJ4PrafRkeY5o",
  "key37": "g25w8kruMGTfbzuBT3eCTRDCo8AEkcAuEHtPJpH8fhdqduo7AyVBbdhpcjpsDZx5xSd7Uu3do9zLDHPcz61vgBw",
  "key38": "4ZQreru4BXpSn55y8to7TLT7CUu8QgWLrpMtntrzAuvbGtfNVD36Rj1wWcyUtR6FRkhxB8s24DgPVBChn1C8wimv",
  "key39": "5ANqoiDLcYxcy3ytbBaKAG8j1wzD6ME6J6GcTk9BP8z9LetQeFY3uTHUnfUn5yzePVWKWhLJ3Vj8nd69ie4Qst3t",
  "key40": "mMpMtbnZsD7NsAF3Bsz5YR9W5ruoVPTMqWBcdz1UJggUsyfPquVe5rbALA6wFsZGpAqFvn8HtsdzrM1dfq5eZNe",
  "key41": "5BXbx1DPgyxPJv6afH3JNBYXtAXY9qXCMdKxH9eYkfcQUDgXJ4XKFV5fuXrrjtogQcHWss4XJij3BCJ3jhQLg2EU"
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
