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
    "hmLSj4jB6VEsonq1kdAiwri2WePceJLc44WyQVhg64MwtnyaL8vhNcCmrPAvaVQjtV5dCR62FxVaeJFKnpwCXHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mWKYceFZXuWUWh9CagX4xtKSF9DmWAn5vxdXyqjRH4SQjkfu8BooEKiUabtDKtDbXU8NcDLkfhURdCvKe6bAHAK",
  "key1": "wAhhmXSigM9Htj3tgjrHDpZxV2xAHV8MvXZfngMnhTSu95k4JPoLcAxaQ5YiLfRHfBqT4iG7LJX7fpDjb3dH1ca",
  "key2": "35nT2bZXGhUrV765x8ZeGsJTofkr4wgepK9Qtd9chaBL5b75SSkGwWgfkPXgLBVRaeDNAdNHqE1xrC6TbBBbSm55",
  "key3": "4yotmgasJoxHmm85vaZZqTB2Txi7SQ3xMGjSQjPRifq1AALKM82JQoSZTBGjsGqTrNeGqMwSmE1UuNV98SMPuLFe",
  "key4": "59e4Tn5GNrCi1QRHtDru55dH1WUnCuStYtrh4ik1cCeW6Ym7hynZLjUDBTE6gpZCHVEMdas7qmwftGPYy42r9aLB",
  "key5": "2HzGZarRRkM3pwoYzV9HgYReZaZi7wayNZHxFwjFJpwq8iECGYBqD9oeoADAVr7LhDk7zWacBFYjEVvuA1kZ6PFu",
  "key6": "4pX4SyfJEjT4ShDJfhzGE8td2domirqGQBLhVU5n5UmaHn859KRmvFpcrNsfSt6W3ajniaK8GKCQaFLqYgNm3qTM",
  "key7": "25gJSsufU8PUB4V2rjStrt2h36hEFtY3jwfyFoRiMTgRr2XRkRhwRgBfyWNfFYZXe6FwEHb9WhqM7sA7ngVNMh1F",
  "key8": "2t25T3XchGWWiUM6AnvbWDn6eMd3jFKWa7QnLAnM99CGMzagX49ksc4KGY2XhfeyYAMFxsh5FxBmBLSxUSR8sakj",
  "key9": "4AtMyrqxVPpxX7fHLWoekRAkD1HimHKmEaiBeHBY6ZiQz9ML3goh5B6biiH6qGPWRDf1441sFnLqd3YCXTTRUdKD",
  "key10": "4jDH6jZbLdJkXJCUQLw3mzRn6YSyR2DZb3gjXtvcdELzmcB9bdn74YBYhLKUwtydzGGmg8X6ECQoZZtzmeYPhpfT",
  "key11": "5pSCKFtEZGPaqgjde71AxcLAU9w863oBBs1enVrv7LXTC5EJAxgnaWEYkySMPFqsNC5iomQA4fcy4mkXjLs6YPaq",
  "key12": "8WYH39F7n4HjBvu4DcxuWdbWGN3ZioFJhCUxpsbcLnYPTa9Y8dHPtW8FfHeBWfFezH81wrQpLLh3DAaBd9JwLof",
  "key13": "3XVxAeEJSRvK1ZBHqwDaWqBhr657yENepMvgNeaEfuqBt5YH9UXg1tWV8Xk6dqBXvEP5kuT3NWP9XniF4CBVH4LR",
  "key14": "KUBrstVgEVtRTKRWJ5SAmL9qb8A7asFB3D8jmSZ82H5zUv1bP5SGNJTTCdJfusjMYaZgtCdqCoR3hgBLVZqiu2p",
  "key15": "3qu9b4CUNFUbQJexfU4KRvhBhN9X8Vu4XWeAkJ3kQ9aSVkDYoB3nqCKGXx8dcZ5Nsy2HMyQLM5AppBUU72xJpWe8",
  "key16": "328M1KJov2G68pWf3jxx4Bu941FpSx7pk77ZwyRxRuhpcGq9fNFYWpBKeBaWBGtoYEVKXmHuEzFGC8U68cWi4wCh",
  "key17": "5gpjbJwHfM49CAZrJvMLZMLRmgDgGF4o8Lwo9McPHX1t6NAeBsycZ8iaPLFr1zVg4b51hyutjKsLc7pSGDvQxyMt",
  "key18": "3e5Zs8ci8kax9awG9UuUobEAcXcTddbFhKD5PRqrRe3TvUnt7LEqmZUtwRGazTitzXWFHQDQKzEtZtCrQ6k4TyZk",
  "key19": "2QBCA6LwcvaDQX8ZrieA2uKLJqC4ymgHySn6ZgyDnwM8zDUZuGh9iuzXmPYjSQEkvTjJ9S7txDgvsdvxkdXtCtxT",
  "key20": "53kaFenL4b6wojgA4qX2hh66r6kDf7XQ8oz8g2Bopnk2fKP5iM7yak1YdW9YKEctHkU1hSKuUmRTX84vvpdP6vLq",
  "key21": "4aq7SwTRRiSSjjtqNNDD3ygmWVhfm2B86KYnWwqSasY1AxPtxB9Dsdt3pGRYqrv5KEu7vMUmPeJE38cHLEoRPiyY",
  "key22": "2CFeb6x3wXdgBqZp8yyHzDeqDYJQQChX4FWGCGQTsFseVFNyM8BqHwM5vhPdFGLMfGPPpE9e1QUwqX1JRsafAdCf",
  "key23": "4jimaWvZ2e9s15T8crbUqEbjezT81a2AjJMSnF7WNtta8f9grRCH1T5beHXkiRzBDxDzCBA85PeXYJtVZqanHinB",
  "key24": "34nqTfo2tshFE9HxVbLCTNnXwQdKizCXSv4Qcg3fpAzy4WzkjJhfSpneyB3vR7roGkDjmPAFGbFdQZAYpHadbJ7B",
  "key25": "zPmKNVxYhwV99TMJ8Ei2T4CKGhPzRJq4fUKQr1ZtM7syxPC1oTQDN3zBUb7BTNWiUukQDHwMZpLbASrLdthqWe2",
  "key26": "3M1Gn3kadUvMrE7BZYeQ3X6Ab8akA5j9Pz2ayHnByZ9Wev5JGZjp4jBESBDC3nwsaj6uURfJeyuvNCA4pt7H88JB",
  "key27": "HyqrEAGoqaWu2xhX68Mq3z5Jo4LJjDdCKTKMPmgiEBiFPe9ECHPkvcm7EHjdBc6KFcaB1CLXTJj4XuzXADDGBZk",
  "key28": "4r43n2xMAGCbr5F6umQAfJmaCQ51FpbyiBR9Z7smf3L256fiQn4xG66tGUrVaQSfQGVxxRSoeYQZebGwPPUhP2d4",
  "key29": "5hYPdu5592Z12ZEww9if6QW2uPmqr4LPSJY7b7qA5p4hfzJXQpJB2s8wryZSpitPJjGtnaUYXkp4YbRss5g4fSiv",
  "key30": "54jDc1v3L1Xt5VjZUsVdm4jo7jMwqfjwtsQJMr13TnPWK8dvv5Bb1xmkdr1ZaCKwgbwcsgTxqHXcQMmpjk9RCSz2",
  "key31": "2VzLpd5fsXiihp52RZkbKGAU6iHtrgzwNLQKPhcF1i2DtUontzjEQHTvLYianE4PukpCfH2pdZTmQW3sSbfbZdiz",
  "key32": "5iGPjKoU9tVGpsjbid4PTytetiaB53BeLG33bJ287U4bUiKMEF2PAfaLAPWGV33qGiXkzCCmuaJexk5oTLpSP2i2",
  "key33": "2uwFMywE35dvunxcZyhd49DmYXWVdMKNreyZ1gRCidUGwqac3PbcFUoaKjF5kYBnius4gtk1mbRTEK6kUYraHtUt",
  "key34": "447v7M7R3ei7ywdGQkYiQiy9RTLDfueXNpXJ9N2ka4J1WeWv5MndczepHQjwghkTStP2EQhMDvepyL5Sk3cXoKoa",
  "key35": "4m6e79pY988bKivFGcnqgzrPTu6DKqnjdBxD8zaLG61DJBNDUVKLo4fNjVHd8YLUgiEEBeS79zWJge5Cd8YJGXHE",
  "key36": "5PGMH5fygeAGwFSn25ZC6a8yh22vQ6nVp9avqMRLonJg2pWJ8g5cSZsZM4zVaYQXzz9afvh8VoxD3EBdTLtwur1B",
  "key37": "4DvXfuzAFriyxHciwpBSMKNxXX3p6gLNRZgoBNUgXpgJpKwjSMGj4KotFDnqZXfrz5u8LXJtxruUBuCX85fYjece",
  "key38": "4svS6S7dnuq2aMKk82NaM171H2WFV6JywwsCB75myZSsydf6vfEhkrpXYNo5vRt38v1CDBGYoya8T35qMT6qdXz2",
  "key39": "5x9DSc7MnxHn4MWozjr1XrNZhycyorDHzV2nebwiCYY35ZFiwXEmhXSp8C65rKgGxoewTijDihimat5U7uZ34McE",
  "key40": "5sks5u2xngzWc1LLafvit3UxKYykLxyhnZkQMEapdDdtAYV88eqX5WGzjSC4RfJC8iGraUwxeR93gbxakTyuDA63",
  "key41": "1G6Juubp2BEXc6Z87ovZ87HeHU1UCb6wtUoWt3Ay4a1KoekANo9zdMLrAKZMhTEeC98MvLzvkLihc5jzZXmTxd4",
  "key42": "41DtzGa95vDRmqL453JGZrSzqR4TxQd6N2uMCLRutxvqCPwK4Zu6ZdzYqDdJLXGLuQSUd4r46JS6zgiJGx5NyMHH",
  "key43": "38Jmm9B72i29TLcqhi96t14CBmwvskNxXZjEosforH7aDnBsda8WcJEZLkUF7vmFVE1U9rfz4JAXmPH7ucNQKJVn",
  "key44": "2PhfE2HKSYYU8MwBu6zHVcGej1WqenxhHMFxC3yVkKJo1N42iPzK7L2wCbYZmJTms5yKparqqELz12kxHMGDXRSU",
  "key45": "3gXH8WhMa57HRLecE8wsKKJR1c496iwT532BuULPGCE2pTtZKSmEkHEmpycCxuZP5R5ecewifofJBXpwSkmKABmk",
  "key46": "4NNm1ZAkCMKRHYK5G9YrrRUWC31gvscLdzzhj2qwTmMDgDaYh4imjzwaUAn1muqGjzLFnRgzty92oCSJx7PBWoGn",
  "key47": "5TfjHjUge4ANBAK5Q1Nu8s7T4C737RwdcF3weaUgzkEcbuJg7uw8mcHDC4JLdt5qgeruiGrQSLzHVkXVQ3oSy3Q2",
  "key48": "G2XQMWnHVecu5eZYifc9eTqZMMnLTvn1VKzpRu89YNiDo289XreLFbwciCKp9iWJ5sFr6ikca37B2ETTUn6bdSE"
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
