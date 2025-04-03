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
    "j2iPTNsF5q9PVxctF5Gnow6MpZ95GW28EBrUy449VotByfBYUNFh4CcJfTP1mYwSwovokJdWTnjxVUCbtzkyszm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y8Y9B1PrCXCSQHsUeVZbKsGyGzkPPQFHmxCUwRU8jDvnD6hrH3Toh1yMCWbWpyf3je3kPnvXjRUSzjLitYNSytx",
  "key1": "4cgSkzPGzMrQsRbcUQyfBRZ5j4iz97bKQdGxhhzs17gcbpDHqieAYi4mA9UbXLiZJDw7V1xiQMtbhe7ihRHBDdYB",
  "key2": "5ew5s2FbX3ECAy8bzxHL4RjzqJRJ5PMoiRZoT4sywSLoeVGL5vn4KLSWrdS1QJcq1knQt4P1s1d4eWJFvEWR6Ri",
  "key3": "2knApMkaGQ4ShFa7QCoJXmpyP93yz4Rxbbku6s8VePndwihpicrxYsL5bDUYL1PR56JmgxsyQ5v3kXac2GN96VcW",
  "key4": "2rj4cYPvhDKeyrPgkPm7PqwcApnP8cY3XuZeoWG2SkkwgRcHuKyyYy2rnrxRVjfxDGH6d8Zb6qJn36pa37HetFvo",
  "key5": "5xjmiJ55Caw65yWSwUqQvBkooQtCfD3DcDhC7aSREDM6qu35jU6vZt4CY5CkEzUv9Kko6oCSr2HpswHfHMKFicEJ",
  "key6": "326yhFUuCXGdaXNouKqdFSwwoLv316V5XRTbbrxhFnh5Zac8KWenHA3Y9r7TdP2wUPP4uyBEh9rak1oFYJua2rKS",
  "key7": "3ijQ7gwD43DFBiL5HjpcneQ8LD4Z8mL3BZLPAKi5xGaJE49e5FSEwkDeu4RyqfoNjubZoX7xNWKHCrNPZ32KM6CL",
  "key8": "4PVmpC36bBVgpRNm8EtKr19TPVG77A6peYRU22tRT2Ega1kf8sRWTLxDa45v56eQdugYx2gNcx3WJzP3jwBhCbEr",
  "key9": "5PyJse1d73gTgvkDHQwo4FhhGdTJqxnzLTcQHc4HcWvZRW5h6ZMmf6Tm3g6UnGdymfPwXkjgzXxMJGSWgxKhnwkG",
  "key10": "7zYbmzcPH7UyVG3ChYsBsu92hJdtfFXhraS1Ap2JVzW8CoFrybB9kYwRCxKHRktdP4y22PQ6QWXxX5MG8cbGtPW",
  "key11": "2WpYQc6tSbNifqeaMppKkvZbzZ2YFVAJNQ7wyqYQ3nf7eecdJqjjVhmxbXgZ9mYj3sRWoobDPrcVmfWYeGumDDTa",
  "key12": "4ceAMZKQaWFYY5baCAkqLfztuaTMM1HtSxu7eW3KSNHqvAP2S8SfwegoALSoEDPHsk6WyBEDLvBsLVYVMEuq7ozo",
  "key13": "2fj2oVapdztcxAGuSNCDZQF9VYHL67qXcXVGPyfna9zn1pg63w6GHBMJXcNKYGwwJoUUYWNcBt3AYq6YsPr7MBzr",
  "key14": "4oAstkrMpRH4ScgxCsFB2MoEmzgcFSSzVAfutQg6r3iGM1Xw4tQozAWjNzGGyRADmRKBNLu7JW1JWAmj4cQF1t3B",
  "key15": "3XpHYDhFAT4G2zcPoxU3VX6MzAAspyBZyhX6jD9Ygn5YhePpQuCktRmXdpN9h28qjD3gFaoWeqwweevi6HLPTsdy",
  "key16": "Hf1j1eqvBgEu62ThS4ATC8rzzkgnjbygnbe3y4ZoAXkfeRbyQFgjccrdwVNu74B37PDNfcWTv5M8YwPCT46qFbG",
  "key17": "4nKgBrF7hi5Si61MdMqVR7PcD9MFCtZA1mho9eszRTWMFe7B9nmNeerV84sJjNB9ycFETuwzPxSgn6fSFAPpHxcv",
  "key18": "rY58EZwrwZ5CUh1PpxMe3gFmRfhro83HdiFKtLfx2MxhjyUQVZS8n8JHUpdfwFHXSNk7Awpz228hvVTrbNNcv7k",
  "key19": "3nLtGhetDS5c8SXgtQ5LvreoJhvVEiCDQcy4WZQfU2TMv6WnD3EWzzDHe1o5FQqYdiTYhyQX1kv45SrRepH8FLfD",
  "key20": "kXnYHNXoAetBuJ215wih9tk1fyquhxrf6dmz6fp8q2GNoJwXXZt72vCFdvjHExdJrd8s9V3Z2QjGYEVroya1BWT",
  "key21": "iqYGx3Vp6o1YSuFKnNCZ9cvFjTGDqZqasjJNLCoap833YV3Qy7MScM8X7M7Qzrtw2F8bVeTqShEA5mETtNeFZtT",
  "key22": "f8GZXGihtF1xcfPMoy92pPHMkcQGZAo8eALcyCNKqaE1sgFXtpxz46Xxqa5v1UaqYTNf31DGfHHqmJXrUt8Xbhy",
  "key23": "2CoviNv58tVgpKKSy1cQZ3H66nbFPC9kCgAt9PQEe3TGFffogE1sv7sra4DfB3F4adF9Fo1sHguAzbHki8LohXVN",
  "key24": "3bpuS9vfXB5M34qmu6Q8CkFQi7qBCKa5cThvAsJedSu8Mg68nDsfeNq6HvansZdq2B89PJWgTUU372E1vwZcd7Ko",
  "key25": "2PeexwKNXnctJLm7PYrgUp1Jgp4vrkf4QgAyec628gAsGEvbrX7q6k4Hwst1wbReq2pAg1Syor2uqJTYiqrz96HU",
  "key26": "vAksUepsbvhpio6tQ2HEfHpqdpiBjrTRmpriKmCqCdRWRhux7uoB3MbBHpkvptRwZ9hEjCRcAJn1tGtYQdTM7Gk",
  "key27": "25Cdx6KXdwr61UfKMEAuypAe4kGLzYFdNrBxtFt1dqGoy1ahcyQ6DJSGxMv3RqPUcE4YXuAaEzeUt1rh4GjiJHQZ",
  "key28": "27Jqy8aU2scebfSkTkVUZinDbcy15oy9P6Ph4r1yLdUJgmoWjgjbzT6K4gKh1T5fGFFxmYdFHoXPT9LSHvXi6icP",
  "key29": "57wo95swacKAjrMYEeXJRdHziKxdSgQfUhdAmMediShYrLtLCzgoyeXo1L819w37GkuNDYmqxHJ4q7LUVqCvknrn",
  "key30": "vcaVkze5efM3mNLMz8xM6ikkVzksmdcn5BT3XQGyXxGFG4wuD88TiUnbDm6WbKvSigC4ZFzCotv8Vh9MEp2L1nh",
  "key31": "4pTnmbcqXnge2WiwQBiDjHd3QtMN3CbDbgVQrz9BRTzmwwFmoBwUE2ugT8X9UNjSWu3CbyGqhPcTNW5gxgP38NVo",
  "key32": "5mTfeFApaMhqNsfWd2LPpy1jVkLtq7yHMBrdNPTXRXazdDBNxUchRqmAadjY95yJPpUPG2WrYUKCx8quJLqNKZM2",
  "key33": "3V3YP5BiR46XPd2DLigL48e68VqsUapyFMVej9gpNuqrH2a7Fd4gfzsdmYSi17QTRjV8FkWZn15sxHLUfpfGnZ8S",
  "key34": "5dTyB6oNdxHptCXgduhNziQn2oFAiQH524ZCT6gDk9YHLkTyMz8hKJ5Au16FDfE1AGctzYobkYHrHnfFc4FHEyJj",
  "key35": "oecNBE1UFact9LMATv3UWfEFo4EMbRAWwXP9oCrAYw3x66NTSCkc7FuH9fwDMS5g8jTeFi4CHUDdovURTZqYK6A",
  "key36": "3ofAHCvrcPiNGeYXjenhi1bpNjTJEt2FTQi3xi4xadS5QNi31CzER7ka6tum6ZP31Pb3Zs9GyT4A35PYkWjhhHbf",
  "key37": "5hRufau2X3Rzg5R19tXcaU5S2w5UuE9Q5ENxa4sKfqKsfsbKGorPCBnTrchE26qPr1uHEoczjg8fUn1ab7DKUASY",
  "key38": "3FuSUwbUMo4AMu1R1soPDxsfV1v9QaUd5rRdRaNytMK5mLMH8K22u8T9DmeN4MGqUdm6mCes7r1uUUDudEki2XPk",
  "key39": "94CmWvWWt4iGQfY5zqkaPhwuiWrzRP4WRU4GsAdBanVhPKh6Bj9vve1vCubu7XADjffRPs5wc1dVRTXgjSafNq1",
  "key40": "4BVZZCk8inLLsnkGLFRdpvdCrtCcpja71GzAKSKD5CgzQJdcVWzHYAnWnai5uPUXjaWtFSHPBSfjaRyj2mcwPTHH",
  "key41": "41v1ozcfP26WHtMpFLrqo1XQyYhZ5sRzebpLXdcFnM8NfwxbU4ks4QgoeZU3bSTMBgY98zVVN5sbM229ZLwHd8Wd",
  "key42": "5oeWMLrU8aXw3U2JLPXEk6PbGhixeyhwgLcdsN7eeKvdZ4GtyUtbz6zmfzDLTKf3HFey8rawwcsEgAPi8gJxL8PE",
  "key43": "5uVDc5f3njTrhQuuBumBrwpTH1RfUjde4qFMXCoj7Jjp9HRGRqfB3BLSMejXnqCnWyXWCY5bPQcaPjcjaQrAMX2n",
  "key44": "4ibTsvL8e9izoFRtAhYUC4Ss3vG59awrFqREYiyLktVwSXVrbLmpLiymuNw1KNDwWupzrsnwpxzcZgb4tGKQTyRG",
  "key45": "3r2edk5KUfddbCVBhLb2Be7WN8qLkw7i2r782qgVSQvpTetKk5ANEA3vAbDkgQviqKuAb5Xh1wYupKvcD3jJiNHE",
  "key46": "qcLtL1X3vyKs6yb4M65VbZonfr3KPLgcCVM4rB9hq4Rya1MjWpn52pCgZcuEBvVZvmLjka1jEJmzMUTHHiUGbjL",
  "key47": "m8WdDDxqzjqTgwgY8Hd8RbXrVqwW4EiakLAdeiKQASSn8UxxcsQTMWAt8nJJTCaHwq37TdzgwXGZMcZ2vaFnp1w"
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
