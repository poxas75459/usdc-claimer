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
    "j8UAsmaPJL55jUkbJqQbD1PgaAzJSjCYnfq94K9e3Lo4eRQT4LuL7tVbXaoYYQ1caaJG9HhHbTVLi3kwGV4Y79E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ca5be2JxWm38fYmbwbDW8uZ3zCdb2AaYZHS9PkQRyiKu6PAppczUfgoSU97x6T61sAK2dT4z9fBdh2NMBDQaziN",
  "key1": "3joSKXC6G2bmhQzY8zMuHB5cArnndMLeCUXND11VdjjkgQvCQ6TCMQESi1DJsJY7nsmqXx8R3bL9m2jYqUsWbA2K",
  "key2": "2bgXmmVCEXjLVViBVDz2UWSPYUsB4nkpRbwR7aEehpLipjRLeDFvdrJBqKN6xYCMbVZSNyqEGmBbEF2gM9MCKoQf",
  "key3": "BNGGCEcThP4aG3Rt6o7RX2Vdct2a5rroQ5SKoMDibVtoQiCThgCRL4sc8pg3wbykLq4Mn8yCEJNPwNUDaRv66ov",
  "key4": "43pEG6Eqon84t3dHYSwNCBKyRV7dCfBy22MMdze1UzcNVf2R393wWaALQB1FUcidJTs5kbr1nz77r3RRaxpxCQk4",
  "key5": "8SQ4Hr92oFgfLNyDraMACsPhcHPSPqUZGaoRWEqEiQDtUj8tkveDYeDTNzmktvp4yaMJnFnoqbzpDFWgsCC3WBn",
  "key6": "4jHcqWUyYrv5oNR6FgKM4wr8Bu1F6czNR8JCESt6k2ZDnB86tvrTA6dPHcuWfzKvfYE9KqLEgj2nQahF3VXxyi8b",
  "key7": "2U8PTPwykhmCTQSCmXtibjXSsKCnBB4Y3GSFgrF6ntMSYadf8vae9ab181SoCCNfHTQ8XhHJR9g11n3YnHfGnKN8",
  "key8": "5kkfXz2gthUdNdApdCs3VpbdrTySeZMuWw5h7n1ervepaUxuAddkXTmGZE45sTUgU1BNzKznFQXjQ6tQV8pmdHQj",
  "key9": "KNScwu42eWBgjToz2WKeoobW3jcGKEj16batSrTmpFBvB3JUyAP5wfVugZkkUuavHeZ51ekJ8mRisovEkTEqLk3",
  "key10": "5m5zhUb2HWiCk23vBYDRzSFXQJ6KgU1xWmQNn22hbkUzZzthg8tiH8Hx15YbK5Ft8pp92eNFenPTyhi6Tbh9Wxme",
  "key11": "5oTheZUeetnyrecZRFGcSHRPWJ2nSuAnPDp7aqvE4SnDGuRbHD6HqWUtc89AZkAzL8bnPUQC5quoDQkYcFC4qXBE",
  "key12": "32PvyiDxb8nD75oppPdANa7QFrz4Ani7a5G47vgfxZvN1gT3tEY2NYcmTh2guWsZh4zF1knNs1KzSfQJHGQKEnTP",
  "key13": "3pwtHPDTt8aW3Fnb9s3yWft6PhVVMuYrNe8jbFJ3En1MhZCgkoX4vzg7HA7LThhM1H8dLsAPHUoNe8BYBsW7CWPP",
  "key14": "2391svoTYj7eX55wb3dpidUvCCmscWkhUg41PpuULLi78yBD9MVPCVdrEVpPXJjM2vvdBWW2FPgfcjybbaNdjw86",
  "key15": "5ti6qEvjtvSn6j2pyQYEvoUP2dtCmCoRQH5Xnqj8BYUiag6di1XiSUe9Ps9aQbDQtLGwShbMThFwk5qiGQmjsDFx",
  "key16": "2pLCKWRhRiuyXBNq8AdSuQfUCZ8KA3bMKs92dK8n3ZG25usxMEubWuQa21nsZbXrnfWzWB963S1YPjEnkM3AipWb",
  "key17": "46mU4VoT4gSuajsJhNqYUYsT9YANaZQeq6MAnEVsRXwATLxwm7bfpArTkGXk1VDL5oVexX1Tc1Bnkp6DNeNbhDDY",
  "key18": "Yu4nhEAuAnMav43U8c2qcmrskQqPfYyvxqVMEbgokwXBta77c9wZKb3DeTJEiTkQkHorNWQVzfgp1CiPQDRuou5",
  "key19": "Rbjv2S4bvuKt7FrxEEXLstuJZ9eFttCntEC3vbR91X8en5AkEtdyUzVb4J6MgQE68ruGtwiQAfkJKhQzPfFmpfb",
  "key20": "3h3zuyu9mDQ2WBsr16bzkv2CFjJq4v87SNg2uo9MxoBZ78EUspu3maZJkybw7egfUMG1PsrVxEdN2vwa3uF4tYzt",
  "key21": "2eQtXCaReC2gxSaRoX8mfk2PFmMjaVpv8yctg2SLcM7NF6A2sP2Q88PNEy4d9YruUaFeD4tR8s2e7dpe725nAiYz",
  "key22": "bNxd4eqAsmHAWeHo8NqKTsUp8gaQhe6hCtKuDYftzBKmGA5VAWxLjyvwSS3dtTTwY6YtRo7oZwgZwhCm5vtw7Bm",
  "key23": "5246LnyqBxysVNGgPJ9cTshyxjJUk6gC2u29n9bJfQQJa9H3tgqPtSEipYPHGQD2GVtp9jfogRDykeHf4qq9zy2d",
  "key24": "zbLFXL8hjX61pHtdY5SRYnDJPEEw3WCxKJnqSEoMTB7kXfrb3GArhgVf2QhBGnYgZZUbKiXmhJtCJ24pUJFf7Dx",
  "key25": "23L5zF6G6dw9QWfRgiE9VkSqFusod5WyrfnTLUpCnQqfVMFpD6xzX4qQqxgJjePPf4J2Fgw2NYkxFC5GNVbi74ub",
  "key26": "4TiFKqWeep4s7NFKbm4EPKL8LrLN1k5VMU9C6z9iVUfdTHDKuuC9AZgWxbaGschPdd5T9kkzfEVGDxGHtxMWcPNi",
  "key27": "3opgQMFdYECwW74rdxKdVgjJaKc17p1wuiEh6gFNefivcvgvKz616rEg8BKdyyuF3gu5QZHK1YCr7hpJT8fiCAhv",
  "key28": "55Ted5bJbwc2d2CYGfXro54RsR8x2A4ZL5zUd9UqAECpaNhxRzWJWkXqHvn4Rkd8o5wBdCU5nfWgKqhPdHbDK5V",
  "key29": "4w4Lkw14z9nsazdkJ9Ya35SGHZhE1oeKQftost1TahUqYhWLrT3ergYGeaWgYT7Ja4H6BMhNyemMbXJZZ5RE98q5",
  "key30": "5apeWkhDeCxPJXuUw7uCQYSRJdadc8KaapkXWjEGTPFGwpUW3ZpR1r4S7jsR3iCno49xYKycPe3GMcU5XxvMjeNb",
  "key31": "4sJM7PPRttxjyqVWzuoa8J8DhBnskFDhySgpeYRKfedykvkmnjcAbsgx22LAri4Yaj7jwXAD47VvMfvMM5PfzFEr",
  "key32": "xCh2bFbE1gQvR19rounz1j3jMAk8Rxa5bJ7djxwa6R7ELMG1TcWth2pwKqyCD7Y97FnygG2Uwxy2b7QXW46he5j",
  "key33": "2rNjsrCuQBCR9JWSACMPWEM5piexQByJdw6ispqizqBYnCwMRvDeqh4tw3AvwXS9uL7U7i4Mr3V8R4jpNzEiHtcQ",
  "key34": "3AjrbqhcmxEnybbtq94E8racN5wA62PYt5zkPz8cey6QKEcNUN1RYroc124Dar4z1fNfTngM3QqEWdBgQJBiq8xw",
  "key35": "2Ky44ccNsGoANSmLhcTCpaUApK3jTjX3zj4huWcUX5HhiZK5QFRF8rcwy2ZSyqCAjZCRHDF1JzsDMof5TwZLsu6K",
  "key36": "3fnBzD6Ze7hGdeepJUi4bk8k2GctyG4e787SviE5rvtHeeRnX9UxLp7oXuZDnmHz9xMPybAbhmAmQPphbaZVaQAY",
  "key37": "2SCSjw75suSN81iRrTocSe2oiw83EhiD7qCGqN99hnx49AsKUriu3GXkyCrGRrpXBLiW4zdfzwjQ83GPnFrgP7ot",
  "key38": "zKmoWy7RqvmJgJd4cSXpYfN6jiaMY1fky4key5iouY9MatgRGUD9aMyVpPePoHEJup29s4TnwKfayX4yk2YT6Cb",
  "key39": "5vWyypgcGy8sY5T3a84wVt7jyaMLbuyb2MkJgYnTNj9XWZiQvDfJ5AYccLAeQNAzmy6wFkvUJkoL4s9ekgZ5h6Jh",
  "key40": "4nWww3u3zc7Dy8NVT8zU5Jq727TDaLj3E2QCUsJSCfuuGivYygq5HCC82zJbh2Ad4Lf3fB266bt2nmm2AJD9HcTB",
  "key41": "4MkxkDWEg1Ueiv4RQuYBA7msate7FVpnQjAvUZSQ2WxxkQpd9t7jz88VRtJ5TA64gn4a9es2wnz24Pd9ZShxtEXi"
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
