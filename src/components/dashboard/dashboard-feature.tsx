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
    "2PUo5ifoWbtujBv684vsc6dtnFv9rMeAML73WEaWQov5PyUwGH6eLhJq6uws4kt6UnRxsbQV633DRba8HjRiZXqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mqrCoZmXfLFB7bgWQa5jjpaqVMdkUMnawuDXjhdtm7Bod4Apj1i5z8WqxUz5TCb8phZ8p14SZ2g9VBiAXopGdSj",
  "key1": "4N5c2R6pBSq95dnxiCfJSZQW4bWFAYk4wzekCdV8hopRmQ1wDYfRcgitzotcyi9hkRsCaAKwPYVTF7d4jtXUcL9N",
  "key2": "3a6YX9sbLB542zezRXLjeVmeffMDagPgduXZ4EFzbhc9dbPEoFS8QQbhqYLDRapa1irie92FXUU25zE6FNj4UQY2",
  "key3": "3znQyrs5yvv68QzARiPN98pW8VGxPxUWXrDMTum3xq8Gwf3RtteduSmZLZUyNsLdCe6WzsCpEguA9mPzLpJoCzDf",
  "key4": "GLUD19U7TLWShS9Bt4NmhhFWJtsVKQkqspMzMaD3VgbRYWJ4a2Cdw9zcgDXGuFy5vU4m6rnWWrMELCFFZANaj6y",
  "key5": "2mwWTeF3q25YhrW1mkhdyQmk4nJnhhvHxgd4ZeP2MwaLRdFg5t9bJp9Ag4ASwg8UPp186nWiawdkRC21zdsQbMKT",
  "key6": "2uYCGLxrLeFkL3A95BC99989CQFBtDKj3drT3q19sL8EEDfTLWSGDuf26NKvH7rzmQFvdjJ1x57DFJStQteT8bY5",
  "key7": "YfVdKh6hUyqr5ysASjmkWmqmWePbCY6mgmxNxijtYSU4LBTRR4ByizfCZ7y1zt7EFjQ1qavkYs6YSumKbpnqTAm",
  "key8": "3hL41w5knbGqB1jJviR7Ro6KgJugF61sLV25nQvGsyVf2qUnVRZFu28ye5TxGaLT6TrUbnrSB4RxW9p3CydAVbtd",
  "key9": "4yfB67nuSqb5jEweaUaux1iFYQdgumuu7HtDvrzTtcGFvQPLJ622iqDEMKE2GyBYHEWFWNvNeanWdH1zvAY8oXdm",
  "key10": "3R2uXWh9nGFSt3B7kg8UWtQATFn7vK296WMyddGJiVeYnsN1UeSgstAv9QvMSWVvUowk8rZbRxyYXU87TQ1ooPUs",
  "key11": "3Tvtf3QYYMRggBKDkLB34QaW6FrRtyVJk3UyFTkvXBrtqEPuVdAAFa2XYwpoiGZ86UcSJ7h8psJhoy58DX2kfd2W",
  "key12": "4zihzmqLEyrW9CfYon4ARPGceTn3WtW1UxFr94ANTCzLJRXzF6pmcTPNkysUkNCzdh67xHR5T1NKLxcPv7vE926y",
  "key13": "3sqbbh8gPxSA2JjP5aR6ki5jKZTaz8wAXYm2Zzx1supDKMKKZA3LoY747rCB8JqoarWDXvEb2XxE3VxJoK2Jaih1",
  "key14": "2rNQ5MqfayH8XcUUHhgpmd8VTcAByEr9zZ3QL73DSgLjomfqpMmLmiRjAgxTvsp2xQLhRcpbAiZo7cqNQHxuXixJ",
  "key15": "2Zztt555Q8CgNVQ78a7AGpfRzdcGahUCgAHLjFRpCxCWacfZ4qM2vcDhhr2wyFe9sfx5henDBSEiBmTJToLTCDNT",
  "key16": "3y8BkSC1Y9DNZ9CY44DiQLxpABUJbWTa69zSvZRgM7WR1JsWUf28pMVTX4mMQpwyVwiY1FSwYuUHpiE3uQt1NPNy",
  "key17": "3EmhdKAgYPviuGJsa9AbpuL3TAbvL8bj4G7iYFDTu2Gz4jqocjK1qrSZoxH4DZt9VyrJJkrhCE4yEYD1Y54HjhQD",
  "key18": "64MipUgWwY2p2QqAZHdnL2HpatwqyBuwhMvGzwFBVVPA8Sm9W1bGhisMuYfkarhCC6NptS7Drb9D3UiSj2CbbLRw",
  "key19": "aWwE5HX4XpAZi4nLL44zF5e9uEcPj46SRXhoS32L1PHdPq9Ev6j7Rkvw4tDP3JUfmsFw62JsKJ3LsSuY8P3GpkB",
  "key20": "5ZjMuUDK9xdvT7htajWB9xBQ4EbPxQ5Z8B5YDGHN5aNkvpkz5UacNAnhEv1KXGqXGAkLz5rUGJD6zSXfZSpFBTrP",
  "key21": "3ia8Hi6gKNx9uuheCU8d8Bav1qhz8rnNznJFgNpBsnb1tfC2Dz3hyhKQEvR6Jbc8MzZ5TJTcMvk8gcNaS1vzhwpT",
  "key22": "3V28tcjQXb8EbXmCyTu3qUYceA9M2rcnYZj8Rzi1HRfnCzUfjxKKW7aGtK7EvhqUC26unupAUHV7mrqjnh85kPVJ",
  "key23": "5YBkawXpzSxjshmZESMcTUxWVbGiNMCp1vfALzYwPPZNh4s4JqWmjgu5DAoUytGZgAFi6ndALGyzHbR4WdwWPpfh",
  "key24": "2vFfvCH8NohA4NX5KnSRcGhi4YratVA4UU1Dp6o6yxNLeDcyvJ8E1JmPwZH4nNReQW6KZC3XUs9G1adNd3GLwMrb",
  "key25": "2taRSBg8wir5xCZeifmYTe8HfV6DgYKtzFvkBPm1NaxYYYqaAKfDySwSNWzc85mXFtLzqnvm4QoJSYtPifvUYd9m",
  "key26": "4b1Q2vo2XLZWYZiqrfiEs6ctKTrdRavifepH1VzGj5Ei32zYPtAdNmKoj1hYnrXvqx64Yq1KLL28QdsxY2bByqLq",
  "key27": "3BVUQD6rWuKueFrEoVityGt88JRCnn7t2SKyuXqgV985VvGP2QymwDnAj9fhPG6YsPFXZvGcWPWgtdKNtSYRtNRn",
  "key28": "5bx6EagHzGh2Lg4jPqipRoCN2NLPedT1oVcsMcZUVh5TMLzgD9NknyBTdk6B63ecCtTEfBK3dR9iquS9QeVGo9ke",
  "key29": "3dNcN1jSkLhAzTcTw5ogDbKE6H3S7ofu8qHUdjLGrgJBZqCpzVWXELY55R6meCBmL7HqZ5xAM3tFPt7GYCZvqmf9",
  "key30": "3G8iUy7uQnzabqJCkvkY1Qazmtq6CUhBGwqVihPbjPHJK95xnb2bkMWZuXRfbniHBxyoqbTqEdS1dbBsaeQpZQev",
  "key31": "2hSrhfaZt92dp63H4WkBFjWbWqeTPUbe5dzUqpUGc5ZpkAFhJLyjQ8nfgodSLctZWnPrEZ6UiJQmhHvLxuqNmnEf",
  "key32": "41JUMo9nE5te3Hq1SUc1fgdu1JUtSQ6sR297CHJ6TkCjQKJkFZumsWLYfmccZAkkj334ao36JHG747jeLcFBvBuj",
  "key33": "3HA23BrCM4LAL8kXF7cgFgnYBMVDEQyo4hQNoFroxN8tcJo9GjsfxjLem82nNzPnR5UdNPecjxgsdcYdoGrbS6sC",
  "key34": "2cTTdvcRj5ZG6ASQ3sZbwz5Xdao528kEA9UL1DLGjJcRZN627rLj1Bv6KWkWbivLpUE9Vwdykk9hdKzbmRgT8gRN",
  "key35": "4rTqBRhzn5U3eiQE9MJ3Zts4959uVNZqYecUYqGuYUSYBCgwtJsRt98DvDDGJiRBh9oQsvxX7BR75VxXxjADT1d9",
  "key36": "5FXoFgqBwLoWBaFxBQVKbHHu1MEYuFwfPDX1EMNtyb61ntEEUT5aqtmoZxRKXMzDadcKWQq3XzuWgEEAyA3Dyk6T",
  "key37": "4jjP42vab1FQtPPrDgeRFVwsEnxYf1ZWnAxpqS2PhHwZ7rVTj7PhoAKA2Cfg1Qakv3RLdrRi1ws3PaH38Ep1PpvZ",
  "key38": "5zSgfVuezhnVpAq56Rerv86gxTjAqfLB9RuGyYGkrnPvDM299syx8KejovRq3T59CgAn7zyWC7gt6bMBowXqY6Bk",
  "key39": "5bt1kXTmrUV2mMogXP592FX4AAu98WC8qFj9Mb8rkPeGLTLXB4wcVB1xeVnyhbHLfvhEXd2TJXj8kcoFqLe4ZGgL",
  "key40": "3pkxS8o7RL43DoAtU34a8H15NSZXX4ib6LSRH7GkZax3u1q99XSZxG43FXx2XiZ6iJJiDn9byWXNiwMm5tjmGzNn",
  "key41": "5z47bZMNqArpv3gB7AixGWJEzhqFXnGniANLthPHteG16wEfDk5KChYqDWpbfPJnJdAY7atvtj8H5q6PYaeY2MMD"
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
