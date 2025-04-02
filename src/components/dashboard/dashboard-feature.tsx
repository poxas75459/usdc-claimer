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
    "2UtEgP8JdVwkhWTSEtDuBDJM767eDYV8Ux1x84Kf3f1FesQ4nHosZaL3dsju7QsFd8JRJm3pg319rNT1fcqfRErJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eUAQEQVFg44HUJ7NwpqtJLk9NR9q1cFPh7fogkf9eXhY2jK1ihSrwCGE844m4vndN2yU99TrLfXiasLfcgkTF37",
  "key1": "63YPxgihmWgax4drsvvQb51d2ZirXJgEzErLcK35ZdY1YzUxiFHmAbqguGtoxxHtWWyRskyi59HmDcQAKPXuVHPC",
  "key2": "5Kq3EuuWgucVSNpAiYfks1e4Tq5XNNSt3zZr4a2zqbozviHkqGyMzvX39npgF2QiFrxNk4vgkEPpuX6B8d8SU9LU",
  "key3": "3Z1u8uuRmRu2kFmGzVhVe74gCMBi5PJpa1cJdCDQEPo9Av2s7u7XneejK9xjiQpEUEguTuXeTSUL8ihSELSJEPET",
  "key4": "3sJf1RX746dfXYCU6jcWFPsgJujmqvU7Xk94PXvZJDPQVRR4JMXAA9YPcQGkXwPDRYuoEoDvhhypB2BV6ZU9j87f",
  "key5": "Gymqwgu8RZTDtnpPy86RTbqNp5Fo6DWDtrjVvFQ3RvJ4CHomzxSbBDKuZ2AtpnAkYDjwvnGGyXRgEANNrsuaaiX",
  "key6": "3r1LchudGbJ7B8oWaFT8Fp2XZh27j2m1TrCSEkdGhNzo39MWBe1d62eoZAqSQ7nreAnMihZTLb2YmBC5KzBmmbZ",
  "key7": "4uR5XS9FHmDiMdjW9gtuzbz4CKtjUuuyERQkoto4euEXW8PcoU3BSstcryj9eAf612SUyLLB8aaVv2rGEDGbMWmq",
  "key8": "5g451pwxuBdMDXX5i9yswECswdYruLj2meYNoczrJWDmVxDSjyyqSd8zjHyXTu2jzZKE17kQ9BaBbvtzyRCZZd8X",
  "key9": "5q6b9Y4bko4oej3Cvz5rM9qP8gSe4FTmEzRefXEih9zfLo4AYFUQ1e83wESeTzUn8UGTLyvbVZREbbVV2tV2YqAa",
  "key10": "4pXB66JVdzxFApikARLjDRhZTqnT5bP9a4aapFzqrEfzdbLw2hEhghG1HEXVQWEosqntJSZ3kMHvFRUGvDkiiA53",
  "key11": "5kJySVHgFXjV32PucPKVb5z63DZNpa7Lrwf6qm6Zq3qjm8B2dRnPugez5ADUpRBt5o1Fg1QFkMG8sZ6MLEEj7BbF",
  "key12": "3c5vsLsa32ygq1L96piTaczjpjaTNiVYX77TyzLSpbT1GWTv4CfWiWi25UrA9bk2fqg19Y2tKqrfYGKiCrpXJTjy",
  "key13": "2eiB2dvuoWbv5e8CfW6MPXyF9gCUrSeADQKV6QukcLuixsYWXMYzLgKZL6YezcYYAoKUTNwuMgpt8z84FyTvL4Xw",
  "key14": "56wNpkAdfH4x2qCpx22bP3tBrZuo1BuvnpsUJ3rY74NzF81sUYkTrT74YmEUZXU78qKDwUUxuuHjLvRWjJnM8A9T",
  "key15": "2LS71YWCQ5gWmJRgMkoeqfmaNiVbSuCHe61koEnQPraMfVo2qYsSvn9o8Fu78zkndtmmLPGr5YNwXCVxeiYD2pf9",
  "key16": "5SMmBJHvtwgdBGLV5zuDusiesBkqHGh2fJhX8HFfM2DiaLNqmnZKd7xwwBUC2y3hzfUXLQbqMpuTzUE3YJ5jebpb",
  "key17": "3VjKopyWU61H7hDUQdVdYkyeTsvC1DmUULmdWmogM2Fr7895iPBJqgvvVggKkVPJBD3Sk6ZggCXdjSYqkATJVJj3",
  "key18": "4m2ohAVGGXiBB3UjSLtQps6ZgbcvkD3tUygh9jpcQwJTBtupK5Zfi3SjBPQVQ6Dd3CdQqx4H2E29Koxk9jLDekyf",
  "key19": "3dzK867aZDJsKBhnsHaDbmWMTUdYt8hsdwCaroywpVAEiJwNsFqhFEkwKjr1gxTHPULKmKyk9RqbHEqVZBiH9MNP",
  "key20": "aUf3eQU1R8RXyV2ue2Q31gj6LpFEMXfYevp4D3P1pAKKKcPpdhFg6ErYCydjMRPViGoAeuQJvFAbHN2n9jtRBYj",
  "key21": "5C7vygLY3H3NDfug92qSs8GusFeLKQU1qYaVT7deJ22hBMDEZNsrQjqjuS2NDGBAFh2cTN7cnu2DVKZCwskmXTvb",
  "key22": "2orLvEnCGqgzhJVPRwzSwnjCPmBMQiTUjJMctQGoobcWJQZPcVQgQQomBapa2KeDFaC6KUuC7wXKs1FAmgUiD6dB",
  "key23": "65N7zyj1VLp5q6xTL9g2VQFbjsjYeLsBaZBcjzx2mKWQ7PrQaRi1VVBEYWx9psYsnqb5rx334iNtPxNe6NdQyqsN",
  "key24": "oBCHiqd6ED4wRrJTWjVNLBszJ9fSw6Pdi4BQZqNg2eXzVM5oomN5ct2qfSqQ5wwekDC7EaXJgq1MopHZCENhxRh",
  "key25": "5pEDPhNNctnd8CfNRYiJyFXwL6dfgDFRmay2zfp7ctVpshv1bPhKxYCRTDTnCMfWTWCURfCYPkEqCBc8ZJ3posN1",
  "key26": "3GgHxeYAk3ne5M3tJdwsCLfAB8k8LHNNb9DRfRuvmx38a4wcVGhch38nEGu8h7ZxWFoj9bgVQN1EHedL998CXi9d",
  "key27": "3osfAfykDRNSaDshBdaWTnujjzH37sqZgv2dubQj29biSFNsZF8gLt1jCtM3U5vKfwMpoqYQN97fnGHXP81wSPse",
  "key28": "4CRCgC41Wrxg8qN12jbEXisRdeonpXmXPit6Mid22CRUSkCR17dVdhQMGVap59xSBdK9sLGryrc8tB9ZArseLmAc",
  "key29": "KgqsGhGoGKGsvuYULwxcwkj71NsMKxgrs4Jkm2brVtuLngmMTKaYzfwXij5PDKa8U8TaJaF5u4BKEk5CWxKX9Yu",
  "key30": "5kwoqXRfprBvJAgQNkgpEYLovvxLDD5JHyVjQufH942xM1S3u7W3gJc3hTqje1TM7ycjKQQ8cFn98EDph3aaWwfj",
  "key31": "5se1rxELtDKLHRDRCFKB6D6EgcF1rQLLwtxGEK9C4t7xk6cYHNHeif1Mq6TtpjsKte9UxjU3qrpc2hfRJPFnU1tp",
  "key32": "2zwhs3CJAydaaoTP2rAvieTiiSJUBbsJZfVXENckZtfr264SAPosGs8K2xGkYrHiPJpQ3YvWTLm8uKqPegdHNFBT",
  "key33": "Kege1Nx6EwZLy7U9Hs5hJiQSbeEbysq4G3bMztK6bbkY4Bk8YdVDtKVwmCX5wtScYbhxdaKdStn3dCt4sz1LaX3",
  "key34": "fgN1uZbhUPCGmaxZexmoXZ1dSbGp7sznCLHLjscfD4eq1uKnt32f7CBcVnMN5iR5ZWkVES4A29776i9eXLFakeo",
  "key35": "5V2VoFkhEmNWg9DwKQsWVE4w38iauUmeTfnRHpFoQ7AQ2HNiw61Xuoi1FtDk5RBdA6kw2MDH3ZnFD5LWPuYxPpUB",
  "key36": "zMhh75uE6LNo6YrHTo79XPJfnCSGJSgKHNrG5WJMMUvAtuR17UpowF2SLXq5idXMHwjF3c2d6esWHPK57waiF6C",
  "key37": "oj2ByAd2XvBt913DMxxMpNw3xLcoUmWogrXn5cHLVin1F62163TWiyESGMnc9yYEqqV2rbP3az9inon75YViuLp",
  "key38": "337TDeqYLSFmPP9YtFwFbUy68KXzBEustqW9zmFvG2sCYAtCBTjszdnufpqGeBYenogafzLpDzQLWRK4e6cykzGb",
  "key39": "3D85UMog5D4HduqbWm9UQYeDhpTtgBL6UKz5A7nzfwSRzEXLQ3xUCTFmS61M3qkM8wnFDFqnj7QUsBWXZfgHE3PW",
  "key40": "21WvD7Z87MrPncjBgAKUSgTEJN8dvMm3avoQCXt1wFWP8bTXRmXDLsaz4ehCMryGEnD1zwg2AtMadVenFPcTJYzk",
  "key41": "3LYFb6tjiNbj64yBpABVZqi3wioZHG2mC6u7AeXRBxR7WgktaB3FRwbHeiCh8riiKbVSTCAKVUXhXmVH8mPUJ23b",
  "key42": "5Ysqj1ugYueJkKGqPJvtgsMgsbN6Y8mpNKumTDxtuo4qJw1DQ8G9u4BfDtU3F2NoGiDsiMKPZBS3kCBWHcPeCJXV",
  "key43": "8hWJttyELRST9sjcM61wyaHjoeLCM4HbrFw9cEUev7jKBqVEoggTmPnqcPhPKsFVMkfwAweqRk52ZyJYQ9TLhs8",
  "key44": "2jQet1DfJLeqY7eEWMBkCs1psiaUhKPSosMwK8B1zsvW4gU7UcjxmwjB6SuMMt2pD1dEi988ng7odqQA2xbcwQ4x",
  "key45": "qeYorWGAu8FiwcUYrC8VpsoTxnLRT5vcVFwuhRT9szp5xV5xfsWY2doFM2aC3YpKx3gnLi749DRkE2fntWzmUi6",
  "key46": "2LrYMpJXF28Suoej1v9VfT9oZJ2c6TfybrU6WY42DLZXPq9qr7zFJz1VdKsfoqfbsVff5sFerMKPoTcXpMzT6erA",
  "key47": "3MEoYecbTwnKMyH9MQGXFncJsk4w4BweHZFZdDiWCAH3GJJZChY3bneFQYFZSZdK9PeGinJ8orM8Luzb5AjBxkR8",
  "key48": "3CgysB4xVsdjCiujSKBW8EU9biMm159o3KWU4j4TUFZVWLFE5EAnGLdD9ipqEutGfEYf9ut1jKXj42R52y2upqto",
  "key49": "4tpd1YddgZFfGPyPTyVVRBRNPr583XYQrw5AKFtvMDWvy2D2vzxuxwc48Qa1wPie3odHRAc7t5346HGWuPP29iSX"
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
