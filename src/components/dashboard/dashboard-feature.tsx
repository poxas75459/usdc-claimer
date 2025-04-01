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
    "65RbtFYbep4Z3dXabsFzqiNB2KfPRmTTjrrXsScA2PYjtKRokT3DfcFKMNqNtTZHZRwrr5W4nfHiHLDw6ZTrr9jL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2it933dKuzmqKeGTQWmnWLvqTNzPsnod1GSacP7bWjkqwwSytSWkpomps2zodJf9CBgyMuTcqhUEgYZPJD9PSiK7",
  "key1": "3GsNH1zYrnnuGjL7cmk2kHuQTr3ffiYyeyZc9VaxbBEL3WfnQoU5uut9NW8rDLpJK2mDoHHxaVasB8vQzAFiFH1j",
  "key2": "5gTeYMMgEyCY8FTMnaRNpEWxY9jn1jY61UdxLXFjudS4SPn6ByFXzqNDQ6HzxHDgZcG5wu3BdbmKkV3EfpeeMUXT",
  "key3": "wYxaGybQ1LaHZ4o4bvk87M1A4VSQxmdPkNzWovgZiNPvRCJyGkF8MJA7v4zbnKCRkH3SMaqj7jgS8QhQ1kYD2jr",
  "key4": "WWuY1r8rxNFJWtKWKf1dj6iR63QqHZtJGtoRpqAsvqgJGzmiZgJDQvGYmBQn1hVrUrJwnKrie8UqTjvpMZhzSrK",
  "key5": "48KbR8kwxALjkAzawJkcTpCwEgwoDkt7e2dUvV2xW9UMLQXJrx7DqKWHUjEwKqhiCfxgcz2zvdULAuHa3fCQeVxp",
  "key6": "3K6Er62jaVvBEr9VjuycAXzLYK8caNTdoeMogKJgNMt9mhJrLWVXo8qfHyNWTyy2cSfnnXMxVbVCQtwm4HM5xmni",
  "key7": "2X79QGVzJfEaAsSzuMAmowCcBwFmbEeRK4UPFkgdJTGFmFbh7AqFT4gA4xtD4nLao39LX7jNyUfpJYYn7v5AxkMP",
  "key8": "4TX7eth6X2AxQ8CsZro74nwFieDvJzAXs11eu59wge56LfxMXGGngJxWDUnfWFLyfS51hFoxq1WtCscBuEcLFQ5H",
  "key9": "63w41Ffesq8mckkLCfxe9aGLE6bXCWBFytBJ5MMpLU25QDW8DXjxrsZNRQJnsNVgX9YanqRzrd3UPXmECPCaUQ1U",
  "key10": "3m8d365hYb3Qg2zRkW7sF8PrtNzSpM4pd3ipUAqBRSbQsXRRXE6fCHLJnURtgjBGBWqSMwP7FRxDdAi79T9LqSqe",
  "key11": "LbuY5vjEpeWP67nEFqbr92HJtJtRWjFBfAqG59g9aKi5bRVMWSaUpKQwdSqvC1dTZ9FZA7duyE1DwVn3GnJud4g",
  "key12": "3rQBQx3GPYKDDe8TjaqbXnWPS3eZCF1GNuyocqjXSnxiwDt1YGc4A93h3JRe7oHudXmYPEJzdFeUhBXLwqRvRqin",
  "key13": "3cS8jpyAUDh9Sj64mBb26NDPB3oqZFzk3iDCSECKtFaa6Anf5DyQn4EwJQGqWN7oqVmw1DZqNz7GQJ8jD5PPia6S",
  "key14": "59vjMtnkCYamzRK22qXM8Bty513LdWtCV9EQNsGK99JuVnSDUfiDCMPqMyvZXoaugkMQFvjxRn3RpDBMYtLMk5oN",
  "key15": "mP2HGt91oT6M91EYcqBNAHMkrx3Ukhba6exM9nMSc9kXeMvXoHnbLdkGJyvihoZ92z7uo4wHr32yAbgQ2vUyuvS",
  "key16": "5BEc2c8P7SEu9EqSXdKg885QLd9VzRE3QWS9pQVNJryzMRE9219NGW3TkuPkL39ggW3VxPprHjC92n24QmZM3Bks",
  "key17": "2VMNNqoXWRrR5VQQGk8BH7WL1Rxw28fBrHfzjh7XnGg85Sr1KRcetKQcpGijhiXZ62BMtf6mpMNnsisUHeTLpxuk",
  "key18": "2J7TtMCn3cLQ5h9ovrUzsDxWX845h4ZTGXE7wxRoAv7r78ki4aBzEQMo8oGFkk8YV4SjJKUQvQMHKG98AohQtv4S",
  "key19": "545fS5BqarFkP67FnhpPT29hagR7ZRijisH3vJfJgsHKwMciPAmMbfbAYengbSitGxwJvto8tDYHs5Atu1zJJBrP",
  "key20": "4DqEjEdAyzxSrxAR8kAzJeD1NRszZMnmspRaQaNYzrNBqrnAcFiXb54DHRLpfHUVg5Tgrrh2yyc3rTRtPfYcF1ZB",
  "key21": "3CAQNXV1zecEnR1ySQSWfcFn6kUe2YA5VHwLoydv7sjC1w5YzP8jGzA6TifYYZa2htYwfeKhnChVmkNjC3Loetnd",
  "key22": "4dE3JoU9PmHLVmuuv6w5xGmj9ntcnT8m3FfWBHn8Eb92xq4he7EBPRrGubnYG7yxE3zhbUiyt9Die12RLmvxBK7s",
  "key23": "66jCsSpaYaXbdyHfJHLkKjF3wvg4W9t7K9iDYgqAotuiegBfJ84YT8Xepe3ahmu2jRHpL2Mddgk1PUPBo63m6oja",
  "key24": "27Yw78h9p5f4bTJrUmHqavLHuHgAPmdX1kVCoH77cg9z82Uc5GbaGRQf61E4u6zuDYrSBEaoEiXVJ4MVRL5TLvN3",
  "key25": "4PDxs1AbP1r44yJZbuoDw8XZzxfYKSbBBuu2vPcrWEtEzBdQtdZnWUBB4TEfAAGBeKVJ6ffPtRiWrsxzBFVWdJGo",
  "key26": "41Jrymn7SGNoVYp6HZLLngde1kqJ7n5GAKzL9bAc91WQex1ovyPWqMmW6tP87aPHDsQ1ZLgsS52wj4x9GqVb8gUg",
  "key27": "4mtLN2rNNMr6uuKP16gD8GtHK8vg323RYYh7KStGmUgEvB4T3UtC7Bbhx4QQi5ifoVP6ownbM3wGcyPycKLg5yaz",
  "key28": "3S2no7xNbUabrMt1LEZz5M7nS6eAgiALT9ByV3NyJrB492MXwuTgV6q4yZ72RbeuhucWZscb51rnVxCFFPeQ26bE",
  "key29": "3Xum6LPdZteUoVBAMccy3qN7MpxYdPvEERj8gYYvvZwKFMGcTJbjJUnzJDNYLvTVj9hH1wzeXtgubgedLv9XPnXR",
  "key30": "2rynSZTbfokYPtBU7RMp4C9FR2SNqYj3qQ3T318i83bq7crje2JRgbUEh5VWZmqLGsAPDAG6w7nnTMCs58xuta3u",
  "key31": "4ac5e5AsZcpNbpcPWCsWDoESi9vHsEiLSnzW7GspV8yX3utPknPtACYzfrAwRt3mCiwU427dRRH6TqGnA3uRgM9d",
  "key32": "uVUBQTEriaC2mqnQBkJp8836yMF48VLAe7hW5246udf7E1dZgqQhHthZA27xxUJcU7Ui6hu3E75EzqJEoHKzxJz",
  "key33": "ZaUNaSYoWnwbzBJPVJx7hyHohAy1tDCm11zTre8z2e3cGL1iaq7WznwxtzyoJ8bPjaBqTucEUfLuswagVJroeJM",
  "key34": "3KzJBUo9FqTprpFUs63MLVNfpssBmrXKg99UEwHu2UFTfxgFwrpv4NfhbKPBaWCurr181b812REixrfesVEkPBSm",
  "key35": "4fDSsp6GYEGfgmpmt9Eo5D7CkZLg1w6qhkjikV1rve1d1mJWgw3h4skY1omxFfxj1yekxMzdGFHonAyjXmCdHjgs",
  "key36": "4yJ7JZko8aYQt7o5Yrw6F2nSY6gvQ9k21Lf3pAvkMoZspCJx5DMGnqjzvRp8qvtzNM29F2gLWVPTfw2bAqAErPdW",
  "key37": "5ukVRPR7ydwu932yAbdtCgjz8kpLioiPGSWX1p2NENnrPhN9CcediBRkLx6t9dDYfWUgSqDP1dQwEtuKfamfjjLp",
  "key38": "MZDRNzBAfFHewo2GvNhvcJ2uUV8D3AzUWueTvbxYUNANaXMEAtyX89NHLY5Aigycv8gBajumjQ6s8gZAGMfJiCD",
  "key39": "uW8bHAyn26s88DdAoYG2Dq6DXey4XaqkN2C1tPRTPBCKmG72Tzc1WcmeMehwns4L79ENXKFVb8GpanCSWR7hyxR",
  "key40": "3EA5AiREYYCt5xTgaxRrZAavyGqfPVKFfHG9vbWs7JzE971GzYiM5PytEFi8pJKhmCeoUPn6YqvjYyXMt6t3SCM9",
  "key41": "5gCyAGhe7MpCAkAuSXqAf8xgvj2H8YrTAHzJihp2qcnuxDGi3i7kkmRC12qLQtmATL5W54cfVfTFTWbp5MkKSufC",
  "key42": "5cDoAsfnSd1sXB1XN9r1NkiW2dDLwGM8HpFs8GYZ8T8qiYQ5Tzbqxoc1ctz4CAEPWeYPcGPqczrXvYrEa1SnwRbG",
  "key43": "4HtfMrV2YELtSY2wbSoPmrB5kPKjGR5RwjMSkKMzgFC3qRiSSnGuAPdnr11GP8ETusCmLiraEM2AgrXdiwPrKWtQ",
  "key44": "275fwzmxsuq92bAbyTheP9bzNkPsgrdPMPrVR1HmNiWAdk5dctGa94YcNKToRhY4Qetqf3WS7t9Zjsh1tN3TACnE",
  "key45": "2mr8kyftWGJqfDkE8ywgoiGSQbP1DhxBuae66D7dA9SXBCq8nGsS1QQrJtu3nV1HKFT23RYcRhPE88Mo3xaSA55q",
  "key46": "58qVQETRUXUCtitGEtcwbChUYvMVE41ZAwZgmL1FbE74Lh7Ej2kiY2LWEBEpVvrzjXGsdaaKxJC6MYfRRMR3x1c1"
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
