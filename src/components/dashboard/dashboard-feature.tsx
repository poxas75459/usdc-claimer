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
    "5TXuD6zfpypp8gZaxWV2Ndno3h6BzdFn8pwVKoB4CgYyyrEYMzP6v58PGGVsJZKaUSUriMAZsnfrDhVH7ZLaRvBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DDCBGFskK1Qyc1CHTREH2u4YsWsAcfHqQd12kDeBrP4UYPBr4JF9xHTvvtthuDLDuStMW7a7KrsNoZSMTes5fBZ",
  "key1": "5xq3Runa4CC4acuCRGVJkAGpuz37uPDCT5SWxrHPdzgLvCjstQx62GCVhFKgU7J5syLpYvFCpMxbtPSw5PZ7M3E8",
  "key2": "5QufaDr6A2EmF1gigMEHYsvH9Lphat4vCyWkTjSEhpFffkQrXe9ktSc6jGSEmHbJQcS41fJs9apYQYee1HZoYPg1",
  "key3": "2grfY9deTEdKi9WWxP2Z8EJeEb5WynREAwsz612AQYJSt8h4ShG4Us64Lt1EshWD7LGvZ9ry1LteM4Hq8MYsLSGy",
  "key4": "qg5GkwcmsJvQU2SAdvXuYhyWbtvMnJfvG7tmqWEGiq3uFRirrwto6FptQ9NDFgVK3hrCq8hy7bQuVPmQSnRmQWv",
  "key5": "3TxAzEhDGiReTBXu53pgnkkSE8taP6bn5kqubFYmCXMqkLMg3mdyhpistPFZtbf2sA37MSpemt42CsKcqwZ4bUfu",
  "key6": "23k9Dpf8Hq7SHAmtqkJaQ15ntBSRDprNJFxWn1q7rsKFoV23Bc6VH3Uy9G6wr2LYGXs7ckxjZeJz3MkQaTSjE1w4",
  "key7": "4q5pMbbxcDEVgw6G7yJtijyvB2WNw2UyWmqJswYMMWRWMQa28NfsChDwQuMTzyGsvQ2q7uaj5c9bNLqhz8NQ3nNy",
  "key8": "wYqbW1i3X5AB849dzXDcndT2Wcr1Fw8vcN7HtRRTEtXURfttMNHiaWMSc6phMkwBhvNp8fHuF5QqX8ruqeciqm8",
  "key9": "Ac688P32QvwaoFMAyk36nVUchRc6GPN7xgfrrmWi5GCUZvFRFdrSm5svgGd5BJvy4pLTWP75qBx5Vh85ySUiVA5",
  "key10": "2sNYwchwKUwScW8JtibP1ddBiBKohic4vesWkYr5oYboN9d8PCqpFLiGYsUZW9a1TEEr21jXc9Eears7mH4mZbSn",
  "key11": "2VpZp8fVuq3hj92M26SK1krWefG13hZJkn5PYezQnp6Nqh3aq35mrADK4NAXb4VrwiXiLoRdoqUTeT3hEAHyZ2kk",
  "key12": "36g2fKRZy5J9WD5b8fbLnCcXXKDSCh9KVwohjnt1UGnfo2JPE8MUPHnQ9iJKigw9s741X8u31W2XEkxcqj7kNnes",
  "key13": "3MG2RB18v1aoQdVgHfXMN3AbDsBEU3kJL23pZjxGith5eQkCGCyCFMy2jZtLG55uf5vQ88w531EBr32s2WZPpESJ",
  "key14": "4AMY7ZEyyHWhTFZAjTAdKZif7pjJ3D9fPLBfyvK4GSZUAaW79mqeTNWkCW7dcC6E4t2kHtfbrXPHd6bg9f1VBJEi",
  "key15": "4oRdp7FEoebACJzhGWT4ADgnCVNYTUHR1wEAZKezkQrZNvg1btrJKkzssdaENnLh2CFwwYxtvht1EDHV9UVNqt6G",
  "key16": "2fzg3csUf1FRUA4t5wwJKSUZbpHf5XCm9RxkqpgTVXFeg4U23k88ugDxaXeK8o7LpJqTTTPAqT9MQVwsJbt9onY4",
  "key17": "53q4sVeUZNyjL414nAoNgraWMuiy5kMxcFz1GLPizRxWUR7EHqBje925LHzipuMVcc6hAe3v2ekK9vQETv1r1QMt",
  "key18": "4UfxkpALQh6VZmBgiLDnBprw8Ydw8exyr7EREy9kXudApnTjUPoiUdSNnVeLbWStFazAhRyKJxhTGCHSA9cc9W4d",
  "key19": "5WNQHRQmNKCXhogTisKwPirVB2CobHi1ftwvMyPHg8Xj3DbMnQWEFwHrw76yHynBrS1gffvhtnBmaDotD2qZCGVN",
  "key20": "29Dv2kHu7F5m6GP3boc8zy9NNhxTqeBdaVAAAKRQqK652fnjPS7cs1oQGitMGF4mK5PiYGrrqkqaxRZVzZdUqPSL",
  "key21": "yNb6wuS5hune1XqhJiU8zUoaiBL7MB8S4UaonbEWeHGu9LGGbPZoabvexijnSZeKiX2esWNpZS5QyhAZQhQXPLr",
  "key22": "5nFudza5B6MFEFbihrm3sPcQuYgQV7U2Xt4SqM6gZT1bGJz1VuySy1M2NhkwUAkmNbN7A5r9uX19gfPqgAmbFWVb",
  "key23": "gp5Li9i3MFurdg8KyBo2vhG2up3DKg5bx4FVo76TVZTuo9PwDh5d6kzRFoeyfuMbEwf8rPTaVzetvKfuwmWmqyu",
  "key24": "4RgkDBLK5rFPw2QYSJtBqJwFrjSTPRfEZu3Gn6J5WVJRiqEevHeizBeMBihxSsYTmhRiaBsjnWmnbUdCFuE4C66N",
  "key25": "4oKkEXzeSFniZBVdXDcnpDtGfLWBKFyQdj6pCXzktDk9dZjWoDfXbF1kBFaXHdrexrmqRPwSUak1HRi3n4b8yvvd",
  "key26": "2Lc8exzR712U5DiGsywvvTxWEeaxdqcRxA35omyAX6UdLYD7V5n8YJGxZLkodRm6mmefmCQH4nbf84Qd8GnjikN5",
  "key27": "4wsXqaA1N5FnofMj4BNNJouhGRpsTuZhdkGNq6dF3HBVUxoDV6rMCU4NGNeeAibqY1T3SD4LSmFEUFfJbHzFcvY4",
  "key28": "5zbhLJDfw6qMAp39AVvCfAzc8JTgB381sAWsbCSaF8fNPJPFLLSpaNq53L8M8oEZ4xhqJNS2H8Uj2Sh8PUNx6dSr",
  "key29": "5mAvGUjyewpRTFFvmoJ9yo61Hgy4AK7TrDqGFeRCBWBVuSdLvxYojzxezMUPxgc2tcCb24vpWjQKVeVnPWQLjp6o",
  "key30": "4UqmqW3dCRd7UoNHKaGChn8nCULpMaBDJ44VjAaN1UHtsAgv3GyePL4C1dNNVyUZN6ZM4cjNGWF5fnZkGf77L2zk",
  "key31": "QbhBkAS5Xe7sqsEmqeFo48Az6a76ctRjnVYE3rAKvvaXkTx6VSVK1ZbiFyM3E2aXqvATXfa2NM3iZVV6uyUZg6T",
  "key32": "5XBy9h6fHzPQvX1DrVduBpWpbUpQFf3g83gK3YhUqeXshYLzTAZYw3T7SoSxgFNSquKU3TdMzdR7zNE4NtHRndKZ",
  "key33": "48ndKwTTNYVTFaQhvsrAwLrpoHLWwPuesnFaygVa9whRGv5Z6zdCf8huBnZ1AwGLrARfMdkRUX1LWPV9vsx1FBEr",
  "key34": "2R6nsg8MJsFQUpEyiZ25rTg4njo78YVMYpSTVgiTvXGC6KddRSB1traoEK5SKeNPWZGNUzsPv4ort4Ley4zcQJcx",
  "key35": "4dg4nVDutzzRyMHwsppYU5E7Bjs7frWtdmrHCqL5mBY1aYT7tfJM4LC7xuQEb53b6mfX717nBgApVbddgSENULUZ",
  "key36": "5KCb4c79bxbaP46TCfSVHsMJ6fQHBQt8di8njeYtDUUf4xs8EodxoZXLiVVohrdutyDG6NAdf1LxUaX37B2QHsey",
  "key37": "3fkkdkCVvA4A9GA178iPAGicqLwEp9q5mPkLbFtSo6by4W7drpwHBpKb3EsuXjkarjZsQC7oUsvzeD8ujTEoxHkB",
  "key38": "4iyK7x9ExyvjtFD5TuAUeAQDbiuJ2ER5wAKRC1HCPjuAjfvSDUX4Kw4WRysNm8AxH6E3gGeTzgwq3XKbRP3U9mvU",
  "key39": "2KiUgyiydRyZKS7d19hvPd913N4AYADAYzbDg2iC6ypUFQdsppcP2cucU4fc7zmkcHR16NSeeAfWw2iSWKd8BcMo",
  "key40": "4RF2J81XEo6x9xtgn4VXxwLqCAFGwrQvccvBM1RRcEkCRNtwPudqEkqMVAnJ3DBsiUcf7UMgSXG3uey2N934t8N2",
  "key41": "29EXXxatXEurxVXUd1sHVgspHcBa51PTnSBeaDdPkb29LovdnWm1rwiPkK6KvFDPuhbGihptFs9SwQASMXZresnC",
  "key42": "6sm9KGDouRKGrY8Yo79Qo8Nsy3gtQpggAQ4HncKjV8MXuNhtsyziNgEc1vo9pPwhDY5e2Bi4r2xpenvbb7a1JaW",
  "key43": "SK8YKh7LyEhhLEdmkn5TJjbDry8rx1j4KWTjyM9ZffK8cfcW8R3XgfEcLa2nTfnhDUm1earUqxz95gyQXgsWyn1"
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
