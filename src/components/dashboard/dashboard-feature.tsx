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
    "2S1ZkEC5BFXpAzyAuojQUV8MuwVkXADNKhMnVwKUPtAj4LqFp6ZbviNP1iMS1jK8DmdwzTGqmYbrirvrMmM9khzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vz5VGZjaYqNbY2FuNAKLXC8do87An1GHSkEh5vwvcZQtcpkckRGBRCYABajQY8JTpcxtUUECfCvGp8Bsfh4hGSC",
  "key1": "3ZkKKnLsoarP1sdkeXRFpLRxndbYij7ZYCEmLXKEhE2t6EgxzozumJUMERZtmCYBmS69E7PTnkLa5G5dTEZYabiv",
  "key2": "67azHxwzB62eL9NpUrh9NDs5apsxTUFTaUL7zed8Twy4K6NwYPwGZuQ4grzA1ycEUJaN46DHLAdVsWGfnRzY3Rg6",
  "key3": "4vq8GP8yayVWo1bgaMfKJusLCwuw5W177TvYPPrhDpRFk1gcCmMugogpRCKJhv4qFUB39QJJxQHNmmJzuvzikXDB",
  "key4": "2DyWiVzHPADLnM38gdH3EpbJWV2zhLrQKrD3mSKNSHft7jtQEM3V62FrmEqXd7D3XckVn8EKV3jiMmkmUHiU8qrU",
  "key5": "58zjHS9GFUxkhUuiCsZvGZ3JVwYXxHrFNPr2tzjx3o87CNiYvfFE6E8mk15LP4EWzqvj6mrT6hkB5ouTAkLLSHbh",
  "key6": "2baBJAswHXKXVQXRcvSHryVsradbgt2M53w7vg1pwQAeW2Bqn8Fvg6N7tGa5p6tCPRBm16HmE2SgVaJv4ZUfdads",
  "key7": "3zScLPVYoKuxhbgYgXxdPnYYRepGAGsJ6Nh7vXhu29k4b4n4BcUE8sxSotsJKtLrRuUhKtCCyk8wUiKoW4GVFF6Z",
  "key8": "5u8vBB2EQvMTfqrdmn5fMrnQh8noBS9DySdHmTCxn9W6yunR9wYMaLf52L138rLFZSBrQ4yMQxj3x8hE1c9CXQAy",
  "key9": "3iDEzG9hGMt8AwFQQnEyHAFJPp79ndpouvf5hs8UzXoemthztWMBkNigJjCsiFgvy96dEUhVP81fs8rdEE9MLvzh",
  "key10": "2iBq6niYt1vhDTmixZ94CZ2HLxQKcfVqqjc4MVwoMwjUwHPBRg2dYCNXKUcu9urK25ME4q3jW7aGNV6u5dn4oGMA",
  "key11": "2B4qcGxMJCkXZiTAr9X1XYJP2qVHTCRyoCBtHJ1jKsXAymvFLhf8e2aqypKorBjCmmF3qoi2KHCQ8Anb7uJDv2L3",
  "key12": "3utFUHQf6WQkUgrUX4Cis4G2wbhsTiYmfkUGMJLdXCsh3aRc4Tb4iiLPEaSXyZAFZPsnCiHXSTiAFJx7kpfjnzKN",
  "key13": "CFEMPyoQCiD637TPgDusPVePHLQA567QinrtGpvBzLrkxRijK24xd4FTRH1XBKMj1sp75MneDKHYqU8jh6M9PBc",
  "key14": "be3vZkiZB4hmKX6S3L8cNt4Ef96vAiLVcrF1mkhGE2Q8JEJdYH6znjBDYG5VAQob9ZpZpSNgEUwU9WYWZvhPtLP",
  "key15": "cbnzxprygrto4jHXLdrFJa7Z5zp2GUskMPkSTGxY8SN4v4Z8ZVtjX8UMWRAngoWLWZiRSz6Ae3WHahPResk81mU",
  "key16": "5NSQW6JRdTwiWZMpZUrfesBfHVUy37PeV42RNkx22AT1HEUZThFaVcGa9gBjyFwmnhcd276xpKdUZRRFuiqdN3xV",
  "key17": "riXF9ZyYXSiNGRRJe7XkCBkEgmoPGZAwCdU9rCpQmgggsUNdmZVG3nQ2D7dFUzfP7PSFgwtYPSX2kcXHh9i3SXF",
  "key18": "54dxpZ37VWv8giu1bLoRdzDSt7NkBuQMfUosyFNcdLDyLpv2MqKqUrznRaFAvyEN91JsPhQAK8mdfHeSv55aaX79",
  "key19": "5sdczaZdkHNmh2UradSgn1eABiThLNauBzCYb9WCUzjZbruYgfivAhURXr6zi6UuuVFHzK2wnRGyNEbVNN9zfnTC",
  "key20": "2x37iFr9wQrcizjnoRfAXH62rPfCgRzJYsFD2gg5MKJxG9kA6wB1rPu4h5FFjaGTGbXeiZtgKHHX4PgnpbTp5mZ6",
  "key21": "5EUuyTrDivAATMdctWWSn5HaijRUUdXo9MxRdRDvx2coYRZD51sYq8E4KxdamDkFXvQkPdiPHMTDdseFKEWsXYUp",
  "key22": "TeJs2ZQGmHwUNJZtdYcYsS2tboNEkx4zQdfzqrgtJxn4LSGvBBU2ub9L5xCBP793xZTPN6G9whxAxDe8umtmZ7Y",
  "key23": "4Q9cQhShqk55DYMpnMZmfiHAngVJK2fP6F6F19A5jY9kYJXRYUYCSi7f5JusbfWdXDViGDwQyeV7sij4Gt53WeSA",
  "key24": "4cgpZCWecJNDs44Nd8MJQAjxWZV7utdeXfmfLXbsDeqA6WhcGvBfSkbzUgtBdLG4cbru4FvciyKwckaafgWhS8YH",
  "key25": "5CYnLKo6FEu4zPyzDUJaY76KjhMGErTGj3CUTKxxA9mjjxJPUa7Q8CCaAJp3TqFyWxXfVNCPwGWtv1L16nrtBhki",
  "key26": "5GRptCp44yF5auzYtrMsHTUMicSzPCAUZJmDEUn47PsiE4PdmdWHjVZrffSSVoGH6cRx6SzAhxtUSTofYhvTJGTa",
  "key27": "oWCZ7ceL5R8TrJ1YNPLSiAnC1gXcQgLuv5D4nMjxAoyGYCjE2Ww1Angk5NHgXh5UKeZ4SUa7WB5JVKrHSyKBWa5",
  "key28": "5Ldx8L74fT2wzVC3VoFxxKe8xMnhyWhSjFTirxuMaixSg52Aeu2NxSLtJ81NWSYjWmT4bhAkBcpkugcCHz46jaJQ",
  "key29": "2tMr6naJWZvknBMA65wqHkw4f9JiQXwnS4p8P8Q3LDuWDqhdAnV8Uks5qFnc62M9Zme2C7KesVKf8X4Rcjphj8zK",
  "key30": "3FiadLG7Kg2qhgBFXQy9GJUzmwzrte2vB7A4UPsobNA1stqabcN5M59UowvL5FT8WLfEJmsrh9HLLpBA61jRp62V",
  "key31": "2StX9WMEH3mLZzuEMBuQVVvYbcA4Cu8JKc278yGwyWa7PQsi4KXRyrG4oFhrEjrcDinFXdJSfNMmJ1kBFNNyJiMf",
  "key32": "2j8jZA99cVwcmFvgEE9UXCTHPCyntsmgUfDQjDz6bFfhBtCQ7eQSx1jvFE2TRVvzXFD1X66vr1eqh5b8YtDN6sMD",
  "key33": "sLKPtrsAnD8aXcLmvnkeBQ6LjoBaehSCCEJPonvq8TA5HTViZ2B3PJqktZg5uRq68bejA6PqWSUyiaDk1cVfXi6",
  "key34": "2WsKAf7Z5t8YqwbmJmQhtmNDwt6mVZdHpQYoK6isiFTjpeE13CDLVeFzau43RTwb63rpx5TN6gVybEWx6Ypm2x9q",
  "key35": "2q8rPjL2sZbpJSF7Pm1c425ZDAfJ6r6b5uSAfvFwWDnwuMz3xBKwPQKLH44Z7kCiEiNQQnstdUikTyZDDnqTfVnh",
  "key36": "61BdiFg6pk4UxHAeYDGYCZUtLyE2r7uHiYjeAWwKMxxGXNaukejTQANZaQVymdc3VdcZY8ASm74ffwq4MaEYHPai",
  "key37": "2heqRiWMSUG43nDiYi4GBsBZQ6EzLVhuE8pXvg2Tjh3HVP61jggH5picTFwDSzdVP5qSRju31zEyKPervJB5uenP",
  "key38": "4FHshskLW69ovYsF49sBjryFKPzt2VRHDHDGEVMytqVhtpSUvVpfHWB7kHp6fCnNcYXX8ANknVP2CitvwwmEPB8h",
  "key39": "65YPkenVouynCDBiY43qt4V3P7GM2j2mqwx6eJzmTrYdYpDi1YoTy7S99bw2eGVhVZxe8nj4KuTgvRMKRwCSeKg1",
  "key40": "5pKxtFvaEVDNjWJdYFWATnDdd8d3NKTmtokenhpBeidW1bZqGrZktv3Hy6XHDDrzhAUUi2uFWb7fUddHycevRtbv",
  "key41": "4gwqrJMCNSg33Uk8VNki28yso8BA7B2dDuK7sbBoqrPxLjAzG3sNdnS5UKbf2oQ3wnuy5CQRiACiMzQvD86Wzdef",
  "key42": "4Z1aiGvfo7FgoGutmTh8uTKfYjEZUxevWgrb8CwVUX1fTbB1bRzG1fb9oXnrxE4FsEvAH1E16QaPnwfJoXeyMCwH",
  "key43": "oiFcPzqTD1FN2QpSGHGjpAEs8QwBgd6MV5NHr9CYZCMxQV1ht9kRv9u1aVkiGx75hfUsNyVUpVQNfL1H9L8ZAZH",
  "key44": "5zKpfRHh9YdpttRHReDp17P7pjFA5o3N3HHLCRVp33fm7nGCTacg3JkKVeriuStBmVBWEU8PGLZobVPKozRv5YdB",
  "key45": "2xAjGAdBuusRshiKhnE7rBjouD88AVrA8NySGJ1rBLbB8eVgZJYfiov68DCXCAMHQW3WeQEZfF95fE68FRBeqFJG",
  "key46": "5inWYBgEEaXtcKq8mhP3TgheM7HuBrEbASKFtCa8faEcLwhzJ8Ya4x5w4gByjum165QsXfUVbrZj7kHjjQfR2hPN",
  "key47": "5bD1SgpVEocWWewGY38YSniJHQxMp9aGRPL8GyswmdpgtAkkC2T6KpipztcXcnftAe4XHsU1WVjUsG3Nw1zXp5J9",
  "key48": "21w9xy2jZ8yyDbhYwWDjCH86kCKKGPRMkaj4LGNVpfpHzHodb2nXG27wx8PX1MmXm4XeTLQSyZAXGqPhLGHx4UEe",
  "key49": "aCPevQeDiJGymUksDvdjxctnrQvmw7oDyEYst7r9uZPEowqh3TkX1iGAnicDZwsZZUbUU3PPFeZ8a3u6cz5rtDM"
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
