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
    "2jM7QD5VanDGnMCzxurnQNeyRuvyU1qyRZyLzAeVbsktunKevuEbKwsR819oQU1GWr6TYEiN8fvm9L36f4ACgemS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cY1kffQ7PUcgDV5Q1aYHi6rVUmc2VPE8EpWi6dSVcsCiGnMZ2BNHBv3Ge4eKs4ZAp8G53oRRq8nnXJrd97jPXrH",
  "key1": "PZ4KmmijgigqogA8WLFMqwBTBRRiMvvdee4SGcdBepeB1MHCffVP3EET7TZ19GP2vD2j8rc4Ei3Mkmqtq4WLzyi",
  "key2": "4V5Sws45db31UXLWWPMQgnxXhRqY5AvycQzBfXYz8AG1NqTAgLkHJp92sM7oWoDTqPGGwgsees3ZZtxJQ7sUtZca",
  "key3": "2uRsups2cTBMeH5Bse854cxk64URbvwUPxoNmKpVRybwfFXJN2N87Yo6q4zm3JogPd1Qf8k9CLvgQiB4mG51S5S6",
  "key4": "28YcYYqepHKB6PEoHy8mDhNdMevRSD8JV6yoZ6YFDEfpU4hSPENLgPDRoud5ubkggZGLL1wz8wDey1Pj49Mf77T6",
  "key5": "2BLjhjtLmooFJtuKev376X2YdpZVc7XHDGwbJPgd2wd9pakJDJ8Raw7aMwPeQy1M2poHWcbVoswMZSaC7Bdsjt9E",
  "key6": "54SGP1VMmp3oZyWJcJCcbjmUitTaxdUv8vtF7UrrJbdeL8X5rKTyTQpToBEohCTCQUpuePQRpmLvUnbsYqDX8jaG",
  "key7": "u3GrT57ETR2MAAX32NYTPYZkcLQh19Zc5ZmepNkWE6dwdL8Vdsj6tuR7vZVuDN1incwPvkW4r8ao3HnXCS32b3c",
  "key8": "3EPEuUMnDrqUPRRbvMSnyNgkt8hnc4MA3fCwnvckFhx4EHtcgdgPfSGXUfRBfXSdyHa3zdXqXDpzYkGKvTRsmXcR",
  "key9": "3KX2rHy2YGZadR7vUDf8bBL5XQe4cxyqa6EeuHZkQUJ7KgacTiRX9NHQ31ioiRHkAPf6XdenLtgU6EwkMqNgxWDA",
  "key10": "4xDz13XJD3Gi7ZRAcPNGzRbJzhQ7FCMfvLjRo8LTY78cTULhi2JmPZS1L4wrduGDqnUeCNrMeCuoEwYrEm9SUJsy",
  "key11": "7kJUQhB6NzqXhj4kcYiantUtaixr7ihL9cm54635QELqCd3pAvierAJRj6mTM3LFceDAdiEpQDNioKZk3htAwHT",
  "key12": "x5ajtZJjjcsFyJ7q6qU14cm164EzVTkS2DfHahXxjbMmCrT9Vg4WuMwj2kU8PhjYtvQrMAH2XizMk48DKySuq3F",
  "key13": "47FJ34YcLsdbrDvH1dzaMzs2SpCX5xpPTUeT5WjFuf5zqZf1azt9aAkX7mH3etsPbTUxqh51Er7hELvEsSdPNkAF",
  "key14": "2hwm6bYJ5ya7Rkhks1NPb7JiqKXo1xcxYH23zPz1Ub8HhDVs4RRvgs4si8UwrB4xWuhGLMrpj5t7vhR4uYpTwZkS",
  "key15": "4bUPGMt1aQum7ZcmDQSqMxjMfu2Wz9WGkRmSEHjNXFQrjSA3iyv9dHPi17VK5XQwHkpFBibwQBbJ9cmMgUfUxBBS",
  "key16": "28FiuoKdyKWYRnAYEFKt38WhamBgusthhQ6DciRfztUMmF8jZufuDha6DNENPUNuCrj61P7pwi43o5k4Uzv1Vewe",
  "key17": "ZVVWb3av7iBv1epLLZnheYCnyxpLNLjBedxsAPTEDYLucboU79FMFsDspKPthNUJYmm9fX47ZamWQt36fbQPsM2",
  "key18": "3VgmMtqT8yU6Nw792mvje12ZhXvoLSzLibp4ULcHLy2XqXamUvHTuJ6cKWQULgyRyan8ZDrkBwJXv6tVeNqrYwGj",
  "key19": "3TV7xf5wSdbwDAXLyhe3jteC9Z77BfQ6EjY8qYHgKS1dPbQAPcaEg7WULoMtK6GWrpL5uCtWdCzfD7TH4n4wwKqH",
  "key20": "3sHdGcncj8Cc1rTYS1Y8cEynbeCaKPHRFXfBfbCdmaBMLr1MbqErqrqJosy7srwr74pueLAhD4dhXcFyH3b5WAg2",
  "key21": "5B9vpkxbEG7xKN5aSyDstvGVUUwZEXEuRWbor9v6xk5uQHZBHUZR3R6tDnr2D2zcAN8ALm8Dbe13yXoEoSp1Sscp",
  "key22": "DTs8qpp6WKHrTC1PgbbTTrTducK26Yx6gPMCkXS1JoyHwv8b8efFq7n6YHX4m6JBXzCc67h6UyNLLGexg9VjVf1",
  "key23": "2GWLs6GMdaT2La9ym9PNzPRdEE7z2toHbUGvj4nLtqPkFEJqriPtrcnxZtSj8u7MbYQ8y3Dac6eSYsQC9KsdEsJW",
  "key24": "3U2qcmhTRjNdLDSZYV9o4ZK8WF2YCNu8ofAuM68Y2ztyz3exvYwu8tc7KWroUNfoims8NsFw2774dpQdtsFFV3hV",
  "key25": "5eo7MtVkkrhznfyBHEp4aAC3nzEqbxr9CPc5weDNvkuSbXnGKHCL4cXbcHq6VdCm3JrK6FW4F6wo2Z6WKKxorgqk",
  "key26": "5GDvHavcA6MHJCMtEJpDBAjYW9iyYmhJ23vEhpKgm55sgVrvhJfwwbJxdbcA6tD6j9MLYCjWG6ZgMbWmcPVMdsY4",
  "key27": "f78QM31Y2wBZzb14hbjXpRVWcbhjzYZQbHPy8Xw9BurKFPii6Qq2fPi9bG5XNAofEtByjrVemUYhdFBfibjSxeE",
  "key28": "4Rh2sBNS7jciyNDCo538bFrfSFywMdHM9wN5A1KqEzTRr2ro4VrmUpuoZyHydc756GbmKzsJN8yZoWS68VhGAWCk",
  "key29": "51rZaiSp1tXGYrrYpyZxfxfA3PYNmpEuxyAwy7oQUJLkESwjTFST4XV9Xm6uk3xLk1Jqb3aEYjLjM5AjAcnWH6yZ",
  "key30": "3KEPgpq4VBm6xJJviACWC74fd6iduKc44ThVUB5ykTwQ4PNMg7RYSVA2f6Spxeybt9mZb2xAQgAP8V2jsRRUdP4X",
  "key31": "4rMwCiEFwLmCD76rpMXKm7khL1fbADUcuMuvmWe56ypEiD6wKen3DAqk8GKz9M7gkde3EPkK63DG985fRxCLeCuK",
  "key32": "5YK9igj2hiBwuNi7nKVib8QVbVRWC6f2rRBf8myomEfQxmNtK9PJM6F21F3ApCj4kEj4eoXZEzgkrWB2g7L4Ycb9",
  "key33": "58eEjTzJE7aAWoFgGXqjSwpK4znUS4XbbSLMaCzg6z1FSmpL8zefCm9718ga8c6EsHtgmoPajT5uKTc91ES9fq1S",
  "key34": "4oCKCS7FSe9ELtnkDbMaVsm3DBMYXtWAzkKngkuZW7Yw1J7NqYnV6gJrbtBUm82bhTPzENys9E12EwFE7oYx8i1f",
  "key35": "4Ar6F32gLnpUugvMKA1DwVovBD89Y4XP89CvNUEMnphGdAa8BMYVcaGKnnYq9V8oGGiC3yaaBQXNcztomiZNdenh",
  "key36": "2Xci7Ertz9E9tMXeKcXGvJK8Grvv25DmUy1opH6LUqFYgVEQT9pzLogcn1axKEp4KwfE88p7Gok9mySZKpqF1YW7",
  "key37": "2rjstUQtjgr5NHKeeNSR2e8dHtWGn8QR4dN3AQgVL348UL5xbDAxfq99qmdeEHiMzYBR6Ez6zEAYBTjn477wRmma",
  "key38": "4dd3hdtF5tbJTMdG1tKsnAbxEYdHVQssGDB89weKxwDQZL8y9tbtJ7pG7nAMwGmQriEycQ3m5jgUic3MRUDkJTrT",
  "key39": "4Vzn4BqGNtTn4rBV8jKbGnkCKDsJHkUr5smF6sfFgoCP5QsqcXTpnrnDTnNbDHX3VYwUNkcYPN2oMYLRDzVxtqjF",
  "key40": "2Pne3bjWmh1uwkjLcQksvuZdsGvHZQfw7VVuXASsXE3DJJzT5tyPHD8kTQ5fJ4z2fBkBuXsmRxpnSQjhp9ptJrim",
  "key41": "4xQarnWqde8wxzfLSL41TgKZMjTa5z6JycAtSj8ZFyzdSrchxY8PpErErksbdg59TJwAWXx2LPRdeYEMLQCuUxCr",
  "key42": "TrowE6t8yD2Fi3xhJLQuivZTq5aDMLwj7eGNKERwXo2tUMtAhY9XiD1qoqGbWLtQpEi1HBX3kDdrhbnKDWhY52K",
  "key43": "3opGRBq4HED5DWgzH2hNo1eb8eS2H2WjetJ7ajM5FqQ7XpQu9JEWrf4GaXofHNXNHXRsMqPVCEEhx4Sz3zgvv95c",
  "key44": "2xh5BhrXYzT2wkzbnJTfNTGg7USUJ6JdCCBeivivChEi7gjtWSZdCeTt796MBpqFPQSGAKoEVnNTzYixDYTR4Q9H"
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
