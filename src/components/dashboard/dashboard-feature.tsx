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
    "4ekQMnEihMPcsYiX5yDgUDGU2Wfq4Jpkz3V9pnKPiQvr6at3WeNAC96f3k3PqaAum8JnREG7JmPsW1jBs9x7UtdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G7WBW9tcTcBFZscftZMCjs2xbzjxG5Y56uyAG3TJRmiGGnMm8K28ogwcuK8BLvdjBoeimgZizL7Dc1qcLG8ba15",
  "key1": "43fRsjGaQrJQxnuMFx1eN8UZa4vtY1r8ppRfFL3LGUCk1uGoHoTuwx2XDJUk2spYzzhWf3qziHELWiauGf8UQ5Sn",
  "key2": "37ZxjmqXddak9szFasL3NBPnXXuL6gGUdgsKguqJRXqwUCA1JJ6QGcSGXdPMNc9cKxJbcznxG4hSCEsw6Diu7ohC",
  "key3": "37EjhQ9GWJyB6kpk9r3tNGRQ5CEP1xDcjYPZX2h1MTVad4S9Hrjrwwbk3BTPX4BZnQZtrfbrJ2xQuuBaoRpSNtFL",
  "key4": "5kq2tsKH2b3FSiFbdQGQpzVV8nj1eTQDRfv3PAPC7LL537LHKfuh16tUdYsjjekALrGjBNWJGo9pxohE3i9aQ4WP",
  "key5": "4H2Rdb4PJQTx3o6dQfiZk1BQ8MC8TNxEeZAbw3jQuA95yLScC3E2vbMjeuYZgULT6J3XdYAaLvXEaWtMsbAjHkBK",
  "key6": "3avYTyBWKuAKHNwPcZ9o9ihp5LXPfozWjhobRaZgRfJLUG9CUmVoVadZyvNitQoUb6yde97761huzfkJwuV5Vcaq",
  "key7": "5aPaiu1EeTpNJRvwrPSa6yqBx3VRZf5HBGvzQ4TQJF8Qv5y7niw3vV1nH75VVqMFo94Luo2bouSmci5sS5s5xwAP",
  "key8": "4FUaX2JGtSosdMWPQUMERn4EVuTHLGfLXhSZJp3QLSMGeXonwc5QH55us1e9XKuWwAshPL34MpvgCKfQUay7sJt8",
  "key9": "4WUbbCqk2Ed216B4qy65rZHsLeD8UAi94UzaPGhxyfguDRRFo7GAnyrJnA1pVSsvMpARCdJfrBdSkdohpNYyx5Wj",
  "key10": "63ZEQogHCmJ2jLMXnYpc9oC5yDLxitE5Wwd3VXgbiz3d6Cqg8rhk97SMqEtdgZ5ErhUeprfuYTqN5kRHPzpwqetX",
  "key11": "3ZkKJQQh9hoNMrTzaNMdn7aYwydLrwfDjPcmmP7aKWU1GZgmc8yT3jVwVv6cx211ZwXXoDvovXkkarux6gvNQ8dx",
  "key12": "4rBgaYss11JX7KHeNy9wvQzSswM2NRL5UWSsDe7GJQ1QW9cUiWYqy8XkvzFvCwK6mtmDqvha3CbY1uzwkjPjej4V",
  "key13": "5XNosq5ohsFn9fLzkjpVuMoubTFmk1sH4kKtybGhgMH6trxc8Ue32hw673NFUdKuSjwn6Ld1UpfGK6wKmZ8NcZWk",
  "key14": "5T1VFFAsZqNsJYRk1SZNY2JBrKA29HkN7ftbGr11Agc7h3FLz997a5eZr2t2CMuMcL9jh17dw8tV4iuM4VxjjRRD",
  "key15": "5PShocGLbXwpZheGQSvZV243KH9ojhsLKVa4qSLrcPRxBx7gzYo4zeRxgh4GSUeSYJdB226HqBUR7CoFzwuyBcPN",
  "key16": "3VqifpANmjd8xmvtkpsf6Yk2RQJKfwo4t9PByAqCfvdspkn2SRqLNAaz9MxHNnmUzoWbTxM55yc3GD9qGMhKfjJP",
  "key17": "32uU5q8dhHomQTm1Kc1pXE6qenzgdXQ62wty29zW8jnbQeuA2kjYmVSXHjra6fGtTLg9aLcmtqiQRqzbS3dBurgQ",
  "key18": "3qSUtGtvxPMGG75iaa7gBmL8Y8CNRB6DqTffxdER5Ra5cjjHJp4h9dWB9AfUsh1kDmyR4nihRC1jEMF6bvVz8PB8",
  "key19": "2MJ5D3KfwwX6yT9Qy6ACxrDxgN73sHvCgfH8pWJx7xRDfLdCnih5yq2P8KdaFHDarLX65pA8Lm2TuGbHf7S6NVhV",
  "key20": "3zR6fQtnaPoo4CF3JSoaSn7Ga9eHF1WzAyRMV8mfCAFJBqMbhk2QTCHaACJumiFLWuNBE8PNsDQecX8xN2zJBDFE",
  "key21": "iKkjUD9u6CBLa7rcuTjo6FTZZRnrq92rwpCbeygYzZN3ZgufndHiSZW4rVHBjZV1fzJD2wmo2oi3SZmBxYDZr3n",
  "key22": "3wBVYJo6fh4paPpB7KUZEVyuSEBhnD8vkSD9AuhkBUjATKEjiuX3io8WWJTnGbtUr9FnMxBRYCNfJhJdrr5nfJ6o",
  "key23": "4Z3WyPJ8zZdfkyL9FjyCcMRtzL4Aa2S4JVupGhpU21GRfpxDdzAtGNLc1i9nNQJnvAckY9mAWaGtucszQ4ML4FUq",
  "key24": "5RvkWqgJo9sjG1wsNsvy5evH4C8dNiXvXXcjCCRCSxhhwCYu3zFnDJhQr59enXcLwt3LXEEQeiR2Fwze9QRGLKWE",
  "key25": "5k2DKuk8TtsC3yc2B1KWBQV8iCtUuQiBGmkZPy96A5iuVC3dHkLeogAVKHPFP1RECrgAgxUp4QkQE8sWSZAzqaUM",
  "key26": "3i5KX9gLGuZZcixgA13p5j4cDvUMhiddxcWnA7nn4qRJqfWbytvdFA3YMuZafns7d5CSh3dQcWTrSSfN6Sc7XgRS",
  "key27": "4DDguSuGc3BXLzU6EhMHmmz2Mz9m9Jby3gNyGFuc8LVWZGvEAcLzb7yzr3qrShtpQb6d1TX8W13c3XQjWDYrv5J1",
  "key28": "yPQSbnopHZGnCnKnjoxVk3MgC6UzN9aqqLpH4XWiePnxcp4MdiSAWwQnDZJJxqS1amigTWX9DoNunPDTqCxiVVV",
  "key29": "3LorGVETH53biVwzfGhFDHoiztLMQp7qZxbi7E9wNFxc9R2awxiHmxo5r97fQnKTT9CvTKdC3cEkRSJLxuaRW7Vw",
  "key30": "3azrAYSnDNwaFXzFTfEfuMSuzxSfVxrJVRyVynjM9ZUCufkmXwZoKASfWGeJb4Q9GHZXSLp5Q27ENFvsdkMXteUH",
  "key31": "yeesXhGuqPcY533Qfm6FWdvGxTgEi2D8pBYRP4fAbntADZPzXbhUoYZZSMWz7c4UShmFF2c3cAAY91JyA5SNQcR",
  "key32": "26A8AaYAmyX47SET2etxoNFmk3RzZMbTinn9wWbPiJi8222XYPABQ9MadxzidBShZabQACkjMAZQQxhkN4MAYChg",
  "key33": "w4Tn6M88DdeG3g6jeo6GUxTsHx9mBC44NtDMssq5EY9gE54HQWgFsH9WpDGG9ZHEFhVUFP8UjYScUKxSmLvCCLv",
  "key34": "2PmeCTzWR4R7XqDDLLuQf8cGaosX42PSUATDNX138wqvp92byYN3rrUQCawSfJaJv5Hozdpdweip6zSZLq6GxR7X",
  "key35": "eqxrdT4n63fehzBf7UANXpcXmxsoMETtcS3Ft6CLj5cQsohj9NrPggAu4mxtRy5sAeXW1PmNsq6PgaSGeMizXP7",
  "key36": "Uqg9yCnprVPPHMpK9Fc8bhnTFSgPysPDo8MExE2qFNvHuAaEa6FF2ChjBeL5tMtFGhAsKwsvXLQZJMzLB5h92pP",
  "key37": "39NJkn45CfbeTBmob6Hq77gsMkkh2bCtgGrgfVNfMrUwdtjpAnCebAWGvCvzXqNb1YYyzY8YAeTwyyEJh1HMdryr",
  "key38": "isu9ZCtpXfdGMGkPNp6CeSy9ajgeKQUfCUPgPemtKke6ty3bANHqqj74J45yxGiKrTU8JJQL6P7xJKRmBdUGQkZ",
  "key39": "4TMPtZmSDGQA4A1z1QYEeapB1io2YKZ5VMCe6NTpFZGf5433mY4nGnugefGoP9x9HsQZtkHapTbN7TvbrU3u4WQc",
  "key40": "92F9CLBLHbzK6dnXFueJQr94cidnFpmCN9ojSijPQWVzC8PjosN1vuoCrmD9n5k1UXnFwbNRgji4qRcugmPATb4",
  "key41": "4u1pmDgHnn6ELxPtiuJPXGiKtje4vm2TKWN7e9a9dZAiXRvytmcsuCqeonRwnTUUoanTNPgCTwmz4SzhyUqbDt7C",
  "key42": "3VUuiqNKMdS4CRCJsx7998NQHF7dM1mTusMpkv8RGcLX9NuztYbTDZf69fRMMYxhfWoaxP3nSwQvnePVqHoWWbs4",
  "key43": "29tcYWUShLjwbQLgt2epn49LxN6v3gyKPBaxuZ9u3dk87WMAAD7v5Uy5Z3LKQpPY11th2sTHbrfSV1BJb1Z9NdnK",
  "key44": "28SBSdQ4u4URUUFNhLY3QkoQn4XXgJbHxwkgH7d4z2EUx3Ve9D7MGLWKJYCoeCjwvsADdwA378Eb9KeRcoQLuyZM",
  "key45": "5ZEPZmweB1gyxtxiKpBgdq3EjT3Enthfnehwby4yFyfDqYXgG9fq8tBaiGpegbk58TtgDWeXnWp6LZ2CdvWjJJ29"
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
