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
    "4erNgFB9Pzd1GUhHEjY8Lfx8KXuJT8fQoPBUtLMZaFT1ko8EBbgdwvVGmKv3HUwmjW5NVxtMcPpACWufBTvkXVBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DeVQTnfQy72o8Y2xGCghwcFmW9q5xdwVHCqKAHqvs8agdH6DLChhw8mnXXNZsr12eibQ5mu8ZwoUwVNbEVxyPqp",
  "key1": "5AHs8MhJpo2XsQYBBz5KXNEZQmbsncRKG1iJTbdzM2e74wcHvtjEmdsYLpBHGHtSmmeKboN57t29kqbXmBinrwvQ",
  "key2": "5mk72btTQ1s4DZxZ7VRjdoWxaxQW4bUV3sGiuroqN5yx7oCZiKEBx62yjXevwa5x8swBhu4q3X4PWSMWo3pAainD",
  "key3": "4nyKHxEzThkRpjupcAKVhd8g7rSFG8jAqBnfKFdCnavfyr51iyJ44V4zuEpXJX1C1DQgd3L8EJ5ARQWBc1bSuMHN",
  "key4": "5N9TVb6NyPnKJYWTufDJ767kYjz48GeZvKLKqwqqKAoFVjpastUnPyJaMYYBhpNud5tQ8zEodgnrNArYfPR4FnFs",
  "key5": "pKP54c4534kd6XFbxJNCbftnQe5Uchw5D7Cgjtp2pEtgAjz6kYjdj6vXrn5P9rCMTVYMxHAi6gwDvpaKmokTUL4",
  "key6": "5kLKGKyDbGMG3wXdA76Zhb9LrXGwtPmJCzRv29Fxc2HqyfxkpEYDDoCpH5LsU5Pmc2HwtzUWPSp7egih1xr5zJXM",
  "key7": "5M5yJ7rA1ti87SvUhf3qzee6xH3ZmTdnUVpHQDzf7hH13YrScrse1Fm7edSStHEwfdgVuyHRfU9Cu8sTB6Uv5qyS",
  "key8": "4eqJd9EooK9J3TTWJkH9vKE1mifbg2dkcQhmekwzYWjQqWeLmUCGPed4KeojvmDtAzeqWbyYGLV4soQs9bjfL8xt",
  "key9": "42WKUaaBgPQZLArisZKENLpaEdBCXb8rh3ipHpS6k2UJPd656H7DhwksiBXpuVxYrmojNFDaD4BfQeXuemMK16Q9",
  "key10": "2z65D9oprrM861tYCk8dsVC7owPFQoNJ9HsE7H2154bkVJRNBKFQgAr5YAoQpqSrgtHEryusvegiTonqte7JZhm8",
  "key11": "2kMpFXBGmpCSvztBpRPAzdsGshr4Py58vvomzomh7RSksqVazRa91yngRGqJeqUjwWXcAAsj8sdf5XzLXQfLQ49U",
  "key12": "56WRFi1qQKTZRLz1QbZqZJHgXDWBfQ4KSwBbEh8U6HAcpStxV42nyJUipq1DKNJj9AjTggHy168ZPrKkG3bU5JyK",
  "key13": "z7EA6SqZNMsPepJkc2hazqLkoKLvywA8bd7F237eQDSLxpb4L42TnRMy34zkeibnijFXfsGxZcN4DTPMsXn2pA3",
  "key14": "26WGMPQRiM4U1VDyCPDiGxKccAfzKa52N3JveSz1Mun1FAN53rAFdq8B3YMic4XFGbhD5cAxGYzEYa5FBhQGepqo",
  "key15": "2M4yXS7HjSAvWGRsMcCqf8ZX9pQWpeUfTEWMw9ME8ibDmPqc2MGuiAoetfM1S2BRUjJDfk83sEaXcTzmPpJacDe",
  "key16": "4yZXgx7z7vbqDN4sormsZEEqdohCNxBDYyDnJ4jfoxxbq8A1WjASwh2orjgDtupmyZB34PzMpucP3UVFThWSbNw5",
  "key17": "63TLztrdRq4N8oYZa1mnhLjzmZYULVFTWJ1ycGG1iehBNqv8xrpe21hFfQvhDZjQURfCz1QdabrqLVq9uvAtxWYr",
  "key18": "28xCYDmXZHP3PAujmP65bz6msLE6SE97CRvEXEjGtQ8eUTcieXXwop3EHXQE248E6XrkDvo4CRtRBT69dLrmygty",
  "key19": "3vgBY7wcUkKM9GK8ranXP5v5xbbAXKJWwtr8vaNPL6nyxhqGKehHi9Dm5sj8pPx7qpThoJFHfnu6U3uxoJJZT21f",
  "key20": "4LDfD6vT9qdMSYufjvGNKzWTG9WeuLB3t5VvSUnoFUbC6ssL47MR1edeQbX5YQEKryzarTGC2pgDXwe8CgQVEJqS",
  "key21": "5UCA9sKKtfEY3dmgNMRAA2Lyo1dshx31f3dWtnzDAZeNyE1a51A4ysJsXYPNbHALmpUtyp1zeXXsQcrmMQv6raAt",
  "key22": "42hkGakvXJzWa2JAjm3x7izGV2xggfJi9zthP3ptzcLvoTUpUKqN9mcSkS8UJGsAgCxxebuz444GrAUtwmj7tYpb",
  "key23": "5Tg3KjpbDQCT6C5nLVoyTSvidncLxHRCpEdX4RtjGgUH8SLp7GnEFT32iJ9veWZUM5xtyXxgYKh9pcgQLA99pYZb",
  "key24": "4Prip2Z2dxCHioXiz4wcquuiM5mSt92jaPs7wQtghNW4v48dSYZuQtQkW3e2S9Rt5eLVp8KWoTb43TKjzD6kw8Wp",
  "key25": "2fuztkhdxLbPytHCiJsH3pFy5mnoWGrCac51bEtDgkSApWaq9GdVcUtdQUYyDTuQECdNxPaHtUxZbEmfq73Cdutf",
  "key26": "38KgeftF62T97w7AqPcLm46wEkFWZLnK15cC3vNjFGQrHDYCWgjt6F6u5jftSzrYWPZUEuEJyUtWszJncx13i11U",
  "key27": "2tkNSTtnE2w7ZS2LVYEdjVxPBNTupd2Kkns75HjtE6ESGR4tbeFryAT6zW9ipFx9f1KpHmpv3JvbC8zTkAMiEbM3",
  "key28": "canQU3MspUY9Kn7mQ7oji9wMrysVfFuvLGSzrjkyvqXntqkt2GzubSPo3fhJD3G5cqDqTwFUnA19Le152nhn9Ui",
  "key29": "2perL7ecxDw6wAvJ1LKTHHPcf3xsDki9jWhuvQDZxhmnigo6wn87L4M83kYeWwRemj7Ke6gyH6JAp3MQWwDgVuDW",
  "key30": "3b8z3NhhCeTY82ty9LXwRRmD1R7fjV27wSW5DtqmTrBxUNzPLmbnL4LZv9LNwe8PYv1LNB1FLSfBKWR4u3H1255k",
  "key31": "5yoDtYmA1eRP35TiGQjL8TEM1B5NYeq21W4yBAKdNeye1gYpimV7eJUbN5g79pKprwVjUdYCjJkHUdCig9guN6nk",
  "key32": "4uqmUnoc8YwnW2mcVRyVDima3s3ifPkyTqeUX9TuL7v5sppyRXAkYW3kYxQ3RmKtsJXZkX5oRRrzHkFJNATNxrst",
  "key33": "4n6KrwVuYfHpH6QmMDhJ1SHrnmtP9xYNND9x8KjRM9LozDsLqDNDC1aHjRFtjf3fgHU2i6E46aoBZbv1ZTCDXYXP",
  "key34": "4LE7cVLCudq9hK25uDP9EgJv32muTsXpLyyWPn37b1gcxLZ43ieQZ92o1wxmT9pMCuiv6BTgFR1xSxXdGhxuamLM",
  "key35": "5iWMhigacQ3b1ux7hYeWXS9cMC7qTfoLV5pLZQWhsYWMh4jveUabfUNKPEkiKyBGv6oHyqtaKEPXtniPoSoPmBAg"
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
