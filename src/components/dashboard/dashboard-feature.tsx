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
    "2UCJjUsKxVD9eRzVJ9govWEh5d8YGJJtrtRe5kEdqVnjpfiEQjcp2G9ZYXWg5fxfLEXqREMnYytmmFmWRaQHNuTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lcv5Xo3ZYDLAGPnZdG2WK2qqUhQN1XaP3CNzYUQwS9A5NvF5YDhhakoYZrK4Ttsq73dYjp4QUekMcRcbWx18faK",
  "key1": "3Fm8JyGSkVRmqnrtTmgEGKbCha5C27RvVphhXYkV4sHe9HPrg8EinVhLfQAUEPV4SrtyUM9YewZFq2Zrrw43e587",
  "key2": "4wKFbDhThPYaFubnxrux9wfvZZXYLVTe7PjzjybCLo7SdMZd3nZzTQtuzXK5rt4HZJQR6UwrQcmNJbUx4qK8bE5g",
  "key3": "5X2gv2H9Fw2zxLn6dk7NNhP9rLFBNPHspW9NrQCQFbBmoVf3NwwVAg3J8RPdrTzRrmcNUpgQF4qqiyAwBmhc478B",
  "key4": "5qKEbakGE2NAG7rATctQ7v4JkzVji1nnYwDATgxLiijwzB92FA8FRA5XFRA3HwYH4A4qc19SbrVj91XsnNpf9RP",
  "key5": "4yVve4qzEp8vnkcmpa63hHuBtuQGisr7oSo2Zu3Nbh3HoJEhjs94Aa3WLg1TiaWWjef5kdyosDMkZ7imgJUmRYvZ",
  "key6": "4mEfqBKx9cag4wsJyBnvE9zz6bF538Vf1XG3i3ySYptXVFpNTdwJjGba9zhJiYRoBT6nEJKbYBccAFdkjdyfHiax",
  "key7": "44G373WC197AAQsntU7R7wEuEPKnM91en7T7v6Uka6JNww2RrTL1QBXMF65Aa2jSurTTjbfkt71U8oYP8BsQpL8Y",
  "key8": "45JBXex4n6DwVjUCtdXciDEi1oUUvWkxzGDfQBk3arGez1Qn49fE6t2jyA7t1jL7FbAX2K4Jqv77nVpKhFFSajva",
  "key9": "2fMcKSCAC45FRNBNJA7MD4p2uJYXVSePCyfJNn6KDwzrcL5BDoshYZDqVhYuKU95RSEY3pY6R9w4e6hyMfbmeHi5",
  "key10": "44JwyMEXtfj32uMLYeWUR37pyrWma9uHFNmcaNPB9CygNoLthKrkwXmARkmuH3Xhvj5CDrUZ7fr9t5BaEGNjjshb",
  "key11": "2pFwbvLvMo9q8fAc85F3Mg9JzrNH9VATjXxr8rDEVA115NjKnA3ggRLZrvZPM9AQWveWZynrFt2gQ1eA7NxxCK9u",
  "key12": "4bh9D2m2xWyNTPw1cWznoQ3GHLPxrKeqJ6AHJWCrjakN88amYD7Dm5yjcGgYnqSyY6bEvThXGebo319k3kzJLGhU",
  "key13": "EKXcpxXY22GWPAadvAmabMD1w8mdLzXdgGYAVwmXGLeyudMvuHftoNL8GYhMzYQsk49x6SVuVQSew7Euvu7vz9C",
  "key14": "zo1DTs6ftkhZFrMyR3aXDCLueHcJHKZg7553QekHbfWW7H3mrDhXkf8dNZpVdqsWb9D8kfrjxqpXC3NRLFaWdzf",
  "key15": "48SUF8612pxL6RoQpyZeNpYrDt3hBH12c31tJAeAGBQMgB2UhRT7Y3zAM2MD6SHL2qJiqZgnP4FQaeQqH5nkDtv8",
  "key16": "28Y7E5jw8it2HGNGrL6QfkTgbRxUuKP9XKYpVTHqoiTbFF4MSw7iPcPnhSvAnxWRucqYeuTQSfzyMLE69CKBgNLh",
  "key17": "4eUFQtKRVEP1wvmF3hBSDiDjfYjcWiQSiecQGNa4yXPXMc4hSMKvkMRCMNNetfNrQDaoRL3U3yWZGhhnbKVPic46",
  "key18": "4PtCnnZH3EHLVzFDiq5vpdV2LvGYW2LGuc9v5PWokMc6gHMc8i2unjSyGA3ScapsHEXXZrYTi1K4YhjJPmqmwYcq",
  "key19": "3S4LdS6JKZZS3CqxttFnxwNvM4KQoTYP9d1pPyDCKJ3zaygCzerPfrFfmfDN2QZYu8BuDJddvDwgCDFJAPUUF7nr",
  "key20": "2Y3Uponi7R29xkLqjoUnohp1vkS4JqX2b3ZNsNvFj2uoqiBATFSmbQecLiEUZZNNxcMZeu3XmGFFwCjJb4qFeAHi",
  "key21": "5ZjvmxfkUu5PcNRaKjp5PAnwkLUAxVkPnBQcaRcjcTAN8z17WcSU7E5J1YzVHRPoWiXo7a9wU93zYoTSMUP7Di2s",
  "key22": "3zucBuwUzqGEd9kBHnmrcS4DAN8CdWTXj7TRjaXuAcW4FrCjDcCntfnEszux3JgsKtd4fEHyzFqPG7n2kCXfKunC",
  "key23": "5XDt4cnZtZXgPmo4Lifo4U4yHdWBTKjh4VzD8Ciesy1YvrsLwGLHt3Jza9mccpXTXVaipmxhngFKEEj6LkRtJ8i5",
  "key24": "2V2LtNAAkgREp3aPVW9g48jPCfJVUL8M2RY883gC6ETCA9GkeK8xee3sRM53C51gi7m9CC3pTtC6xjfVyo7s1Ssa",
  "key25": "Aj6VWaCCUm78PGXdmsBd4sRQaWQURfVKyzGBuN72jDzZavUCDSMW5z72nwGD6iKpSM9btuXa6K3cnibd3rFGbKP",
  "key26": "2fBZZxr6iS3zcjRzNHBdoSJsQPXvovWVWJ2VS6LMbZmmVkjAhHChTpyDvwCbRX4S1eYyQBf8h2zjG34doFrjAZXh",
  "key27": "5LacZT9s36PAjBAsmm7WcZNXoUFhWh4GxsN8cyR3nsksT683UXidgV8qXukrQzakmbDe2yQTQ9o6yMqZD9Rutxb5",
  "key28": "5whB9Q5pkuu3NVcTweMvDn85FmoPG4eh844NfrkyCPuDqMKPycHeXsCtFsZJgsP9xzNeQSxzhoGjEukrwco5DMSZ",
  "key29": "s2zA2bu5TA6idHFx1A25DCTZAB2Tmpvwbj8QsyWJBMWiy5uf7tEse68GPQD2crn1113CBdwZ3eTuythtxtou9Ea",
  "key30": "c8HnTkQuMdV4NpRvQUqtWcz6oyJyDvGVbN2CCsi2Bw4R8BHa7DkwKxQSTzquPvnS5YSm1QiS87KivqQL1cwUmPk",
  "key31": "3TbndQQL8gE8Cvm13dK8u7zbX5YKtF6MxT6gJBDnSt5NTvsynN88gr4DX8fDsbFKHQtseNBQpWEWEFCioc1HTHtG",
  "key32": "4sj6rSrozgYRUBYLUzKbUd3xcWzaiGXDEbH9UPumMu1LZvq4VNKANNgU7hMS7dw6PTN7ZGk6GUSfYu22u2UDkm2u",
  "key33": "5zQy9RCroVspgcZoh73C7S6fQr27sEbfx8drvUdx19oicywD7Sn14CrhATf2QEfPZXGPH8NnHViCpMGj5CnRuvP2",
  "key34": "3xAdJBTZK6KCvGCfSenwJSpth6chW3wGsgBoT14SYnr6TVYXqU2D2NQjLN512vJcxZsStRRJFt2mH1WtvLHfrpeJ",
  "key35": "2ptbRW75Gf4FrZdEdeMdbUGGpThUB79F9Fwaw28aTdREqRbjamCMrnNWEgHbScDCphoMSd1jbtsAnu4Nn7CYtkhU",
  "key36": "2iU642kEZ1JGECc1ga4scUjdsza96JDcCBQCHmKs5SnHSqewMurjZVmwe8fjo1wFxtHjrgt1GsxrS8vwzoSBKWbM",
  "key37": "4xXP133hYA6vX1LmrALJyzYfvPcTHQrzacJUt8oTZPjt7Rm6sQRG9iorFKvhUsvw9hrkfzkCwSHkrHxy5RgVHRZw",
  "key38": "2L6Lqui1NCL22gGvAZhQUPXZvtDPWhRc5iuJGgQ55LkMZpGnfewdfYLZU5455nTAePSUNzZVAkDE2cXptBfhFbb1",
  "key39": "5HpvNPWxWrPAg2y69FQs9gCM42N32t2JcXd6CFo2i6Kafer8G7C5xh6enV9SiE2hZ5K1gNBcsX9XYGStCKRYjSrn",
  "key40": "4uSt6GFGjmhMN8ARyKRtBdn6RU9vVg9ybJ4w1E76z8W3Ei3C4JBJNDPK8FHLdyaUYK1cWkerJ7ckmBvr4oUHeMCG",
  "key41": "2NzG8huvS36hJBCdPhdctXLuA6MrD95RMv39biBjk19vDH1PFLk9dc6KwfJV7qJZgpHfK5BF29VZjMt7eqbXmx9z",
  "key42": "2M9hvBQ9XAoTyHjjHeUGNH6UeFhqbt94EZKV6msNepAYg614QVZatr3M2arSScF6Ae7mokZU2PADKhKAqCZf1wD7",
  "key43": "5N2DociESXLMujKJQeGfUo5MUEEJ4AgM4352LgkpjsLXYJVUjGiSmW11NFhgZJN9yxpJiZr8EcfppzAQxuPEjipX",
  "key44": "5P71HWrHZDZEKqvjXPkbridTPxhUP2CmwYjg9RH3zUNdmAkf6SCqfd8KaY6TGjQ8MKjGXDUGWmd8DuwzcwSZvaZ7",
  "key45": "4jRHyx1WsPNDs2CkMzvr7wCqBRo6xmHHQzDfPa2D17LRtgsFwobhg5HweUsk82a7D81TY6ck4F383SsqDv2tnb8r",
  "key46": "58ZHinJhihQyPct8V7t61vAHz5n9swKcyaZZfBm2LCeXWNqpxgUpM9eWyeecydMA9wiMBAs4dcPX7DsrfTQmjH1R",
  "key47": "2bVZxJ8yQtLQonj45FMvAd6NPzAyoMYWWjnZShJix4KuGpnAxY2rtzwP8u8ossR8aSbnhA5SVpGdo7fvc6yy5qp5",
  "key48": "4Mdy2Xhzhcbzi8AWzik5vHhfyfs3Gf7CaVXSVTkfjYrAxtjjBRrUTLJrdrLSkmTAasz2FmER85z6wGj66mH4KLfp",
  "key49": "1h62ghgJry9Mmp2Xbfk5rLYZfTw4nqePjDDprJ9Bd1tBdg1QSCKCGPFA9Ke36jgrGj6JvHPJSfLBcW5tBYJgAjr"
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
