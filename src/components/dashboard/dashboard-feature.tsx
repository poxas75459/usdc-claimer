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
    "3kgmeHTKQbon1ZGrc7yy8v8JMhTdJdPTFYghR6GsJj3db8QFvAKCK3LbHVZCzaDufVnGzpvq5kWktQDxbXLvBtRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2APYsBeGJkX36WgCR2C7GQTyGTpdAXSyxQ3X61eCx7NS8meatbSiW1FcodjSJHRzMi8jjCBjjDMTxdvDGCZAWeJ8",
  "key1": "u8xTRCw2nxRgajJGvHdfQoYX8hiAcx1NpJRvmWff2f1dsNqzz3jvUyzm764tkEJmvUnP1iaXf7BhsgsFdSnNcgh",
  "key2": "2Q7NAgpi1w1BL4udMGr43q3feowrkkpPRjyn7GctQYUL6naorqKng8LuBEoZoX5hmb6NuaEcQgWXwC99hMfqFb9r",
  "key3": "5xuF5gvqXuPETxEZdoiiixzNwa8hHTbxcT7KMTX8YAStTeYu6y8mMfmUSSdkzic6qoKeBb6bhcFAxv339FxCBc4a",
  "key4": "4pPVXeQFoX9CBG7dxvAg4KGwtufWCZMZyNDzK9RgKsyZCXvYfuJFHXp2PvsCb6yn4otbzrmZZUjCknB8ewwqZUH9",
  "key5": "2bJAxs5rgFGP4H7DG2xWJB7VCby7ppE9RAkjx9o9RGKKZfg9wTAdamTPvZuWTVSLehUSm8vtpUfonfWzPizrGK4y",
  "key6": "3uNSKrdLKMRzuESxouKQRcxxBCfQb9sWLoFXEjrP9oesuuPeo2CEV7YCdLQJe3WDSJx1i4SwhJ5m85BvVe1EjbMk",
  "key7": "2oJd2tvEk7zES9CVRtvBViRetrQykgDXniPjiuZV67GVSyjt9VVqEThQrVEh1hxDUsVaMWXwAtnrMVYuivdooxLy",
  "key8": "jSvjwMuE8PtzVjubG2GudMdUwiAh2Qp2GmJfqva6XN6LR91WFevmH2HLwtcABXDg5k5NczvZXps4qyaE6pAcY8p",
  "key9": "3m9njnfEd2r1YcjaM5LaEFj7uAWdquybZF5ReQPCu4CpYCUXyMz5VZD6YoAURbP9s7Zgx1AKE82Kfe1T96UtVS7v",
  "key10": "ydP8QqE5C54bqZHPKgR6bZ8iCa3RsioTgBsQvAZyqeuATjgFXy11tSScHA2BXtpJBSKckF8WShB1LeJeaQGioDp",
  "key11": "4ebvnkGQr9rdARoQ66Qnuztxz1qy4MM1kfVhY2Rh8PaRvadqUNHq7QoQ4mKJ8Cw3W4hAV5tNNyXqV7tRUhq4Z8iV",
  "key12": "4FLfpS4NRi1rgyCkXU8BwaBagTW5yAmgVWGq8EZ1yniBsakeEZkJjoCkr4qt58E8hTh3Sg4QotYZwffWwtnWATCA",
  "key13": "3AndKacykE4FvFeuVmRLM1uzRSMe3j6Tc5WGUc2kpC5FwDaedcTKPKsCdAGrsFbc6GBBuQRtEqw7g7yD3Nov1heA",
  "key14": "2hue4ZbQpDmtk1HvunsPXC5XrUWvDTJa2Nska74SwEk2mLkheG8cUBfGThaAv9SsTG9g4orZNBde1TnLUJcPmGkS",
  "key15": "53Ak2wGBcdgjusWM5Mt61KBn9RjkfiToqpvhHRtdXQ7GHcJan6Qca2bV995fE7ZfUmnh17HA2B6fcgyLTWH64pj6",
  "key16": "4sBrNpNqVizydA7gzrNGo7dCvrgNeDHnoh1G5qrpkEt3CAxR4JK3MYq7QmM6vKcTQL4RfStGS59aqZUxtJR94qg",
  "key17": "58REP9G5socif9erZ8jQYCVPaABuNtkKbmH7SNNwZV3ta78rQeDiaqsqSYUHpdHoMeHj1M9T65r36YWZbXkgS1ue",
  "key18": "5d1zfce7X1CwFbrPsbhf1vMJqVhWrJuTHFjKwVo7T79biwWaDhuDcoQY2sQQieryBiZAipDXQ9tr1wk6gfDUiyAA",
  "key19": "LxNskGqdRMbCg4sQWkHDt2zLuFPuFD1kwiibPrMTjxAnH6yjG88dQh3ECrGEK2wx8Juqd8nZPeH94gPe6rtnVWg",
  "key20": "pRKMHPYjfu2iwm1uNuTNPMPuHLPS8daakL9A9VypxKZeTR1YcCgiVLbcYN3bmSBPMCPS6moQYgL5ZffbogXaL2R",
  "key21": "3qBujVbM1sHpNtToiqeqvpBDgikXRxhdff9Y1F9KnpyuBKJhguVbvAefq3e3ummPvxNVSDPxjq9xZJN7foTfc5z1",
  "key22": "WgirmZtZ2XJZytV7xQkZcM2De2ji8xFkjtHzP4ZrHHbEEthGmV8q2agP2FVhnnMzzgonkEq7puSi3Uf5YMZXnZh",
  "key23": "3d46kAExaVyWJmVVwJmNdibXgWPDXt248CyC54EPptaQYzfFRjsKrQUPsSaC3TMm8y24JenQUJJgfS8nv6NdPLw",
  "key24": "3gXgko3u44gcW8JNNWgaEMiCUwoDvLXbDYuVrpiUfXy8FB3rvo8HiutaHZMYyfEgkjA2i9CEL2WbXSajWcLxQY9N",
  "key25": "27fjiPB85hqRtiUhXVfSs5YUcyYWsRNQBB6wzfmMNNtwBydvJa9n56tBdUWBGP7VuhqyzyttT7QapnFaYCgBVknt",
  "key26": "3KQsPUywi2cJoJ8XT8LUfkXoN53Dekvbo9jaMZhduZAvPsPPHzokvqW6mEhANre48BmnkvgRaRMsnnwCzviDn5tM",
  "key27": "3cWD4cNoM22jgt3nMud7GBGmGmbsaYEgUG8zdm4JzRgDKSiwq2WhPFeFrhEquPH8d2aAwJPp3LskEMHvD8oKX1h3",
  "key28": "2DN5BuMZQpNKh8vgdSqLQCFP8QFBQwjwugJR9Q6bDPCraBh8W87v2uEM5gBvUXVJNKRkSbx32CjV7GGCRtv5tNLQ",
  "key29": "34tTmmZuKLmgu3Zk1wTtquQrKq79ZHHDgj1YdsKwoyvH9u3qR9xufYCpwYSxsGuPnUaJnYZY3iuUSV7jELf4znr",
  "key30": "mkg82pZzHzVafbbRYYbWGAndMUtbLDeNWFgw2QRrdEt13dn4VovEZZ1gtzynSQx7mSK3tC9Cyhf73eUgewySEbp",
  "key31": "5iTqQ5oDGtdKLZVnaSkEpFcwVd7wVijC4LQi9tjrtBRByoVDUT8cVoKhnhyHggf3umk69cy6LqpWVmqKE8bTWdbe",
  "key32": "4tGD28x8u49HSKv958Tw7w9MKehPFjkiaLi1AuD5At4CLLe7xbC2JJou6K2n53uPV9zvCKnYr3hwB8DMDHzAbPDD",
  "key33": "2sfoKBFPbyPdwkPo3vdmM2s8SfAMAHATEypDdvzpRCCqp62CKCnL9SoBeh2664TawByahidPXW5cQRKTQPNydui4",
  "key34": "2dYMiTaqEC7FkPA2KCB97wqFQZxpvYvdzvqAhD21RfQZvnC4Lp35tFA58tVhZJ1nUn2uwTD1ez9RQeNZYuqYm1so",
  "key35": "2SGU9Sa5QN2nohnXnPVmzbgJAJ6dWUE7bxomCTCnuUguxwkst8MqYynkAS3VnGt1mEjUdeeSHBBW9DPyJ8NHjam6",
  "key36": "8Sg4saf2bBs4qWMYwGTqBcoSMr4moiMF1udYNqcMPnWfxJit1VfTLRqKSbFCx5LhJwCvzGN9Ya1fKSPJWUro5iH",
  "key37": "22PWdVTt6nfdjZtDFnMpyBdU6SuHBXseT973uexJKj4Ptgke6vzF2XgURRsSTy7YHDM4bPEMKPVcuJNJe9JFPGRR",
  "key38": "2QJ1cy6VdjNuWqw1JJg9umRMuq4AKZYGUv3JTNr2uPugYie723mjTd8Nhr1sxcdzhNDRNZSfURBB3uXh8Zh6bM4D",
  "key39": "4rgncVdJtPprfrdwYrXsmPGzKz7AgNfxLEQbbLeWhwravNz2YZVBph54UCquDRgjhi62RZjUk3BFUJsWFXZh1uSx",
  "key40": "fyXjaLZbQ4G6spf5nCssRZnFTsFQuNBjMwDtr4nHHMsRCJwvPAqYWtr6MhgASSY3X86LFj5gQ11sCRGErfYsJp7",
  "key41": "dY8HcwxpmtHyCTh4QbHtWeUErwhgtucE44J8eHqKinZ3BEN2ajVBURG9o1w4mU2HFkj83cyqNQvHTDSjVUBFqQU",
  "key42": "366csuefYqBB4rfnPGroH8YXNtX2TiSagwnCH9v4EjenhU1S9xPUeX7Tqp3fCJHKP5YUfXzsrWuBihpRFhrrqyi4",
  "key43": "3jkxPo1vFFGJpj2g7zQ1DCxNE7mq3Yv3vLKC7K9gia4GgujFwDojLYgphhakweB6S9X1QZtQtfKuYnC7NWKf87hf",
  "key44": "3V77G8RL6b5tQHgTEJ6krf4ACgqY8WVw8t31jQW9MowTPG1awe91A7usjMTzsgYQHRtZkGEvSSXq7vGVWARNFrC5",
  "key45": "GMx26oSkVQgQbFzzUNL3Y7Msqw4KJE63yW5JNeektSEKnhgd7ujKUTxF3hiSPm7f1ZTcsV3fdMwFZQDWSGd7kut",
  "key46": "3AfkrVQ5j5dGfZAvFgBviWgpikx3wo6UG4uE3jiaQ8YanpVHfDJtEXXBRHMvToiQQoUAVU1aJhBzN1FCbEbAsChe",
  "key47": "3E7nizaUc5FA2emp7bg7kWSUHuk1ATTJ3BRfaFfJZsS8KcRDQHSdCshcKCeHUm436r8sXawK6quQ8sJpcu2STEWw",
  "key48": "5AexGnwu91HVH5G6wDNK5Xd4xoZAs85cThVR4BFkFvTmzHJMuYXr4KTPkYAuBsAEmqMFKRoq1dZPpjrm8k3jkTto"
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
