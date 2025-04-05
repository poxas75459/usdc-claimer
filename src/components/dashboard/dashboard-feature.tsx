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
    "5HL4pGd2kh2HL9kYsH1oJRyMY3pyu7SsD6aFGhpieutdXTYeQfoTfEZ4Mjxzqf3cBY1nbpeatzhkbhtCsdztxNQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GdooSpyxFqKsqcNymXnqPxjkiPjDnxTVvWjJ5SuEg1YqPqs1BLkBs4YnwZSeQz5HH8Mrfym5RaogpfsJogshsVT",
  "key1": "5b4iq1BUCCXhXfYt2wXfi4mkRBqTRu9gA5ih7HgcdeqnD2Vabn6v5Xj8Cc58dPpvVewJxK8x1s5TCMcdAyMY4UYd",
  "key2": "bvDL5NHekVGSfFVk2xFohcj9PMZYFT5QXjLbfxShetbuYVDgPnTd7z7dELeJ6yYse2u61xckPbErVdZypHL1wfS",
  "key3": "5nXT4qe6vJdpEmHxAMzHWG6dxdZX9sryw66b6GfvTiwWTTtJwep2kdLD6kcnLAoVRJj6msRBsf7X7D1Bpe1rLWDk",
  "key4": "5wMmbBkCsW8HFCbEjfgMg2WgzxbvcS5CdqzXArBmhPAmLBJSbCkCW6UAuKSmrhXhb8QPPuyzCVeWjGrz3ZsqEnvJ",
  "key5": "nsZeoMEfvRPSsokANHAJCbwTisuacyJFvyoFKoV6rKa2akTjrLKsCkvbdZRCxAtHGLoyRtUryCKvGZ2TGBQj7yG",
  "key6": "2rwL3n43F88YPgScFJV9CoaaUqT3jTDVJQYga8xbXu3QdpgS4gvFZZLzbkSNZugDZfTgQKfpbLz3gTBbaEMoJ6ys",
  "key7": "4twxc59JvXa1HxrGRgJNYfbZ82SuCquj5Kf3pUmRf7cNPzQXHEEPf6Nug2M1A8NPrhexNUqfApsosasZifgdohmZ",
  "key8": "46m1sftFt1C6yQNEoK5hKEmbutBrHUrGfwLAzYjdjDrkVv8wtXVCbVvC3eWqcLPJNYH6PD4739knD57AahGNjpCP",
  "key9": "5LdZuqbT9emCAtTi7U4tcV9GJmv6tiSAGrYkJmus1xRwoByU2Fa55bGJUeUHVMoFzyWv4Lx4jUwnPnVGR4GBzhDz",
  "key10": "2Hs2MMuBHfZ9FM47Zz2tvwXffB8zihNxnk9XfFJN4gCdj9UGnthN7Px2kKEexCBfijALbr6uF8kmRzLqUKFmq5ks",
  "key11": "gaVZFDk2dZogQ33g8pSDaWrh1qSfLvQe1TvEhi76oZKJAgKGj2fuEk4uSpSFYzf8gyrru3xf7jHwRXyNWXTQyjP",
  "key12": "3YCwfPvftWNPKJh7TnTxiBjAtNrKgwESSu576NsF5RPss7GYaRv6u47hojrjpajNQpxcVc93DPQW6Lbc76Xgs8de",
  "key13": "3NWYqFvGtQ9FuZKMZ6YrLMUZsTB4Bcr1EjS2P7aWFZCy5SEiwRwfGnyaBsSSjDrKu77wYkj4dcvyY31geDNXQfyT",
  "key14": "3FiqJwaJemWkC1kC5KZ39gKaJKa3PaE2VGGYNnvFsWQYByGqw3hmqAbg1mG4uDgJNKtDNEX5y17erBs622ifFaGr",
  "key15": "2Fg65sAencJvAYW8oACuLYPZE3ZMC9C8JNVqT45JgexWF9i4brUAv7kwC9H5cAZnsfkocR7dhZSZf5Brwn8WABLG",
  "key16": "2fYm8Gp7SrwUKQpmrCa2JiDbzg6x1GHTW3S6zdqmaDaMzRqP5Mz7GtVB9uBbuzzD8tSHffBEMJ4bWkeFJw2ipA1r",
  "key17": "3MyrxXGRk3oLfxv33wwo6kP9yMa1HkVz4ZNCnirzKzbqsjriZRJi5mYAnMJ4a9Rk4Em9ve4vGEvMSBDoxaaDUpzr",
  "key18": "5V1br81Y4cnCnCJG9nbfuQ8d3hXVXN2MfW9YqbexzWqfMFpYdLGLGPBYPKDpukGzmGTPKdksJTieg5nZnv2fzs5w",
  "key19": "2N9n9vfEGadAyk4bd3aZZ9N1MTNJBjWeYGfYB8bc1s6pT9Zb1G11nYtWG4QpEb1mWBP5fxa2ENXLoHgogeqyGUCn",
  "key20": "4C7EmzhypjfDzQnSzVqGPuZsbWnii3BiZ2hmJdmDKSM4m4ZZEh6KrLDPqDzqbvVtvankN6m5iEtwyDiqzQ7eQc57",
  "key21": "5QjEyEcsYeSz9KMxD45sQPquLsJ1cibNuwtMs96WbMfKEJPyM4ZJau4xzsKnjwVFdNhrjjvL3tYjLG8vAwtqhyG3",
  "key22": "2wDZ1Zn7a8LrnRNMsDHrGrGB6Pn88a4YjaZHQp2g7yf1o9f7idQX8j2Z1wHDikSgNoijJod8UDhxsN61R2waxQKu",
  "key23": "PqgXEMvx8Vzq7RcYMHeGMuUMoWSnniKcC6iK45fxUJv2PFPbstVqyH2RwF1i6SfTRG23XkE18TH4Y82zLrTB5gz",
  "key24": "5e8T1XkoeAyzbF3ACNDnofJCWQHTajga3v15EoEZbPBx88VgpeRBVMdzr5Rv8v8fNoiRedxQsAAQtyFjEW7hEQLe",
  "key25": "QGvRMspuDsgrzeVq7sgLGiKm2jgpebvxinZgiREjT7aPjz5rdjjKRbJ4GPhrobEEnEphu7M9HtzNR71AxmFtdJr",
  "key26": "2bi6djCjXrtBoGbqsoXaE6wGCL2pJT8RoWguDhS123bJvCGJQzdnmwSaTfyhToztsadMmdz85qAh5tX6hgJmPfrk",
  "key27": "3JC9Nk9sQ4T2fVDXrh8hBa3AHRLWZDee1kmZ7oHybuY4iT9ruvNBbAaoRBVbGf3QLsQBPCz1tvhMjE9QeaaGUZYg",
  "key28": "3CDGz4bjwRKAjZM6UtqwPpegxQGbq93AL6FMkhQ6jbAcVfsEHCekhHFk3W1SitVBnR6jXcBBGhZ1vZpXUnkZLMpK",
  "key29": "QME7EBFoSsnJGdXi5cnMe5MRQU5TFU8S1het2BFdgfWcL6aCoa9TuJs39ndSfGh1KE7u3QhDRTxCm1FDECYqhFf",
  "key30": "5vt3eBFb4wptzRtpTpffJ84a8RhbzbzHq9ixStXD7RGa6iZXDWwWvs8etQzkGhP3GgAfzgxnU1fNVJt6591FAw2y",
  "key31": "5sDf7pdLyuPMGiDa2gWitMvhnDt2SL9at59CMeqTivZqLFJWJjhJmQcbjTgCecfg4BfMro4SZHchD8fLPMc95xZX",
  "key32": "3x6RAUKNja89SPTC5UiZYsLSd3Lpm9FYsemM4h4WkCKdz8LLqHnuxap5WxppKc3wsHYNgPPJXSQstZ4y4fmhRe2k",
  "key33": "2EMDQNBhvUfWSBzhPNxqtQbxtiNVegUYUCkpe4grAJXQ57mTBUgAd25eZdxJbKPfwrqX2zYwsDQLpr61A6SPSut2",
  "key34": "4Wjs9TV9x95AZDv7oh1qxfNz6KP9PabhJGu54trbBh4CPQsFk5ePVdNVM9zrSnKz8swrgipRwhDqvkxL7qvB1orW",
  "key35": "42eENTbkDxKFcKfcMa8efxroas2kGn8D3TwAvFEE5oU9HhMmJuCiypEwaxdKaAVF8uTiGiXnUWHYKjABhP4peaei",
  "key36": "5AkGuuCo4aALGz3m6NTSfzjrnyMxo5xTPHiSAJYKJpPCHoGmTGjjXCaTzoDYk16PgSwzPsDyifD3rxv51yVPtdx4",
  "key37": "3yj2tbASrCsRq5mbzFS5FUiuNR6Jb5cbBrpEi836ApPARbPrMtQNUzi5qKgi7zBnfSQNCtD9P6yjdx5Y8ZRX2gkf",
  "key38": "4nPB6YsezbcW8oLYPveUdnmrHYR5Y1CHKdUUB88fxLRVG2fGaxM2q1cb9hbis48BCUWXRMQ2i5aTMHPGfczLd1NJ",
  "key39": "5anQRNKRtd4Nuf8k1xaU6MxuCxruLWJotWSB5Fnn3camB82RNr1CdjWF3LV7sATLYc5P9TdV6mdntvAP6fSaWXQW"
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
