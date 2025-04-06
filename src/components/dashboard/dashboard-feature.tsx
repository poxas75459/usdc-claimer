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
    "3CCDaW5GCavoWfP5QwKqbEf3hp8YB68fYUsRaiq4gSUdEu32yMZ9xErZwqSdidZM4mbUHjKs5fJg89wd46iDFnfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51JY4aHkdcRaPN1t6qjzmykPMVferSExPSN97jrfb5cP5CqJddyyVEfPiEgCDK9tAaQC85SMvi4FcsUNRrna8DJ2",
  "key1": "2nv3fJMrNDX1GraK7NpPWeCpH3QZSY7f2pkv2weNytnuc2oPr5vXQoHS9vyLHAP6JNQo1fsDto6WR7qWkFYGM8PB",
  "key2": "hBV4bnShMe45ZmAS2g15kXRvENaXWNTPkFTCtCcBVo2k3478NpqnCH2PQqMT1xDDnpZmkpm5w6bbLjQqJLpiVCL",
  "key3": "2hM8hkN9xWZcfdQYwQLGc1DrcJtFicD2M7Tvpkr7TRzHSNFmmgKnDMwCBRZzgqN64TdNqcWyamXJEyKdtJ6u6hG2",
  "key4": "444AsBMsVHzUjNTvRxzvzPYQ3ZVRkNaZFRS2JZa2iXeZUSwGhnjrVUeTNWjdvDVTLPtdSDhevGXszs7NZG9Y3Chy",
  "key5": "5WJVR1fMkBzhcKm7t8uivhqGN67K6TsfSFhRGicFk2UVqFCLiWizEjCehMu4sMwYeHMGL2o3pe7rPwfsbcGxmXTb",
  "key6": "qG5Lh1XXS2sB1FV74uvxqb73f1mPowcVAcFb4b3LaoVHSa5Hucpb6qj72T7RdVoN8hBge2b6khna9FUGkqUUNGj",
  "key7": "zKEncRKLmbycFow9yyh2yBaUz348cYM2mZ5JTwBTy9umDi3cviaQiVGRPSfc8is9PoA7xnLoT9U6L5j2bxaho9a",
  "key8": "2v7RujHaWKhQMc2AxuePSrSyszQdyGszkGr5aqGmfgKqjoc2TtEvhBgQCG5H38onxVeNWXhzFTkpkKuCHpqDiEk4",
  "key9": "5UF39dAiUuHjrAE21hDxgZdez5PZcq6F9ThoYK1JbiCyvYGhhMrEeRSEXaEd8MXNHBB45vLKHQEfxUKQJfhoCkgX",
  "key10": "3u2zof1QGbUHFxwCkEzUM79CVxPvPXGkkGSkZEifkXbFB9X6uf8BTh7J1hPVnnu1x5kx5ekHQJFpU8Cq2FPRwYi6",
  "key11": "62bX5FSoryasCFGzG7ZnT2VzpdVYTELJS4g11bgSnVoSBvB2yQpZT2ovnSzjHHjKf3YBXYxU4BNXgJZr1wLZZq4f",
  "key12": "3nv666ZK8btfMCVJjJ2gasgyoMPrTB4MUsxooT8Z9T9CAbDNkDB2Ck3xx3nKYLWFbuuTkLzhR6U9mqQFFMkvgmAF",
  "key13": "4Nh6ApnU1K67rugCWmS4MaVUmBsNY3xNUMiQmjFbJZJuSkDhByia9MLDETp5QovpFsqB5xirsdZSSHfLDoHYY7x3",
  "key14": "4NMR3HjEWh7qrQrGCUe7cPgtFJBXJuPg4DyyCs93aAZQvNrCf1HpLZeqM5H5wwf4pVvuG4d92rMfPUEDiq1KJoK6",
  "key15": "4EwgyY6kFrFwFn4wpEKT3sJiEZFPFJ9VJWjQtSwDeaSiWauMaAEZs2JJsGSogT769orr39hVYp5fXHnHVqtajuWq",
  "key16": "5222CMajSHNeTvaF5dJUMDuT4tUQrf5WdFX1LZt8qAk4TodgDFu8YPn2QghyzF5NRWsKLvt2AvZRoknHEbZfG8eJ",
  "key17": "2EuFy67uPoT8NP2b7KAzPX1UbcwxTjCtW4VtdCDyJLHvGhbtBWuu1khGzfYHSa1XANvEqtzAin2cpReeKhRdFBae",
  "key18": "53j28ED4Li7Gs29Pq9iQwLQ7MHXQBPHTYBsyrwLCJ7MRSyCn8f5j7UiBKoHbPUDt15epF6wqAh3DhNsoEeTCW9Me",
  "key19": "xjbmQPc7K3s2GmM3HaQAQdmECb8j5ExM6usoMhpUGe6TGfrsHNPEFc239uxCQHeQx59va8nVFFDNQE6RrUvXwft",
  "key20": "5QnKDtqqHKoRLd42k4DUWsVYWhNJJhqXP4wCiRcTJmwVcM8Y3d5yQprcaeGaqwGXsniNNsqWRpv7Sjss1qXfioqR",
  "key21": "57ngsMYSboJ9NNxEkRp9bVGx2ocrhroYptymsvKRto9RJHBqtc1y4yXsUo4JyRMhYokgZC7ZL8qF2cZLy2DFqoDe",
  "key22": "5xuNn52wo23HtXhoADChu1ohKtA2Pwzxs1eRahPyZCWwUnW7JXBkpoqxFrz2vjZD7NZcCNUUfWNbSLjuoJRpPUGy",
  "key23": "2abogJcGpA7CPkG1RcpJW4BPTE8iZ3EE2rCzESDHmDcNTaeWACsd7QYSptga5r8vRy7t9zK4sL2ekYEYHHjun5Hs",
  "key24": "VVPiZSCHPWL72khMW6YLarJUAa6s9xqh8texsN2i2APRcm4FT2dSUnKyAZikZKyBwFqmvMuCPyhYrZxKU12t6ak",
  "key25": "4P4pNR2mVC2hRakGhRy77iUrvKEo35bAmZhiKAecnFyaBsKGSj34XrjRYYoYniXaFHn5CU9MBfei9iuZy15ta4A3",
  "key26": "2Siu3RM6bcDmBeHU6x9qhMRtF7Mr4pzX1gULo8buRMASJL73J73dNTnV9xENEvHPqXNRrU2sEX3Guu3WJQyF1gZ1",
  "key27": "2ZEwqcbFJ65JfPMT5nkXJyWAE9V8akxBuMKue77atzgGUmSnvWf9A8nMRgYsXcwanmxSyfCpdaP8pQCU61U7hUa3",
  "key28": "2UsjwDhZbrLukgX1AQb2tQ89eoBrdMvGrjd2BdeNrxsXxLmY2LRBVdFVNtfdSqrxZAzfJvEX4qPBN45enjqmbtVT",
  "key29": "4yWpudhw6jfeVfhzBSAwmBAVegwXFeu9v9K1rqoErJEYjqix2NbU3vvgCQXyAY4hv7g9PtHVaKjv4BMFwYW9isb4",
  "key30": "5JTm4pNsW4smXeh5heSpr4AhBvUkVnB1F6ffwEMdvDiBEUfLk65hQfLAJaBY5fCFi9jdmjyFt8StHZ1ESNfSU5Bj",
  "key31": "2y33ervSk4jgLn2Q3WYJozhBU6hwsFBUJEFKsXuzMMSdaadgtpZw3gYaNEpWmY18ryFzLmQ4P7FF7d4SFwB3QbAg",
  "key32": "2aebAvMRqejFkn7V36WWFoLNPyiz6RgZzkkvo3QHbXDFjjeXjUHHk6Ax564LX7b8qyy5XupZ3ZBocsC6A4MQFcFo",
  "key33": "ZowrZLgBjYg4xvF1Fe4Rffb4Kb4Wiav4dqdZ9Eta5QkKEB6FyENcACVWfQqUat8Pe6dLct4oArLgtGvidjhwZzg",
  "key34": "46oFv3uzAQdepDWLBWYgozHNePoMGFqX6riqZWetkkqab2FvXDcmbSC3hdRK2vDrTZJTLcVZafTTEnpyqQHRuqyP",
  "key35": "tXiSyzoAZTvwGwKZ4wB4TSEkVFwkh6jDcuGj9drU2MWLrmAtk2VyntTqie568oYPQi5UmtWsrZKaJwb4MGZtUz6",
  "key36": "4b1tiyos1N82P4NNt9tUZZA7aBQAooUrjzyCA4TXZWUsctbtTJgwvUYRtCRxnuosJ1ARtEhaFQei4heqPmm9a7ue",
  "key37": "3kigs6dWgq9CbJayZ7pHF2gjrpxnFZZ815cfxZsZEGYNzDoHgu91VyjHJukXz2RnhE5ptVy9VsVJpfBPst1SirjE",
  "key38": "3LayWJTFQUyHdwJFEWwCjkN84gTWhyFmDAYTKj4Mkho1WUerEkC4qP22YzbkFjipqKF54DM9HXJtA8UGCXrBcWYr",
  "key39": "4K1jhF51LYM1Vx7N8k3K1qG6W5KJ7GTtBb4ke329yvM7WXJzEcjSjtSHV43fVicQdSV96szYAFbrvV6AKEgvWcJw",
  "key40": "3zYVsWpFVuhk4hKxgffNv6VJ7GLc9TypifWXX31PZCvVdGYjBXAKnwuaYAR6SW94Zar86mmnyxtb8424UHVGSBYu",
  "key41": "za7nKeBLTVStUCTprnEzsKAKLU5VUQR8usT6n93SgXCLwy9qDYKLb45S59hJ4hxH2WEixYbTCrCpxQLEiQhvpG6",
  "key42": "5UGAs69oBxYWiFcWg3uaURYyb5m8B3sEj7rxXLxtHTY2vSzEbDmY1sNtuGiAZh34erJ9qre61pwMRyk8B8TvEp1p",
  "key43": "4mYwhmQTn55EkWGCbEjPue21erRyNpbr9NQEjQKXh3BiuYunBmaj1KNyjNEny2u83p9ozXEESGSkXEKmAv2Fnbhd",
  "key44": "2TE7ekEiRp5ovSzxaXmFkQsRR58cQGLAXafHNsdktFrxuGDGxJc8XmoLXSvnRFgdHpwy1EVnKc8J9gXBfCi6hYkN",
  "key45": "22FZuwdXvy87zJ7Tphg3CEZMj31Q4kebspCp33EFk7ovFbJNFPDFJv45XKbF45ziTjacZsEfeMUCrSupCbm3oqV5",
  "key46": "5D6zwToK71oHtiNUDrhbw21tsScVwCRymaQDQU2im1tbpNjXw2nPQsefpNgXtQjhrf9nPdwed8d6CJ3Yh5YG3iKt",
  "key47": "63CXJbyAdNJ8LPnWMM2qvkPB178kDWJfQAuuuMva7e4HTvcdVdPRowAmxtk1ygacxGAGh91uXWTbYeCavn1M5A5K",
  "key48": "jaJSJimNjPWUw1E3zXYWTZ1gVzVq2t3Bf5fV5FiKw5jDcVVrTDA2QUrzFtvcyH9Cm1dy1xDatBF4jDeR8ygRWMd"
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
