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
    "9ksMpAoPFPndcgS8qhDH4q8A2jWxG3tWF6jNymcCHHvRLNeooQQUCZ4ZwfiFjk2CzrQfdUVXw11cyfRhih8tEAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NWKStwP3EDDTkz6Yqgknx2fcm8R9Pcu6jyTRjgLEszzCto3EFxJ8uhQiKzdpRBM9o9vUe44wCwPRkeJEgVQjx3P",
  "key1": "5chK4SxYx1qyYJKmwYD2jVSRWN1zicsSq6bjrTbjf6Bivz7o776chKYMJ7otyBS6RNGRiLMgFE3L2QUucfznozBu",
  "key2": "3ee8yxjQF2mnpcbFC7LXP6GcUjPbW2XpoBprE4TXa3pWyvjuVZbibFS4hR3kkg7C6wcrT2AcaRgg9RvuB3Vd1cqv",
  "key3": "5DddSz3Yik3zNpZRBHVWLHX4otbnTJiA5VPJizB5bN5wY2T3f5jUPPeRuC7tFaGPYgqLsy6iZ4mLmjmQhjgugZ4c",
  "key4": "64yQEs1RyKcEpgUKkdRobzvNAADXM7L8Y3rYKobMTyKBa8Ngne9mrJmeFXRdX3E6ZzQZorT9DFfWEWTCWwmbLYvY",
  "key5": "4qVaXzDjN42kaoBxPpytFXqxyxRKp9XfJq5KjpaDMyDTq25uMoyRbmUeEh5ycc5776nwGAb7ua1UPgNbnerBUg2Q",
  "key6": "VrBxDB1VmdNqALYjHg4d76bEQ87tbTrWCtyDnzmxZzWjX1pJzQVQww2yRteUCipKKRLMSkXAmPbyjuwmmAoUSf9",
  "key7": "54RYDAJVZfErnN1XUuR5bN8gAXaXmArQGwZ2UrNc5mgukbLSA1nYej5vYNCFrvdiZt1qhL47EvXMHyUgttCkZFTm",
  "key8": "a6qUTxh8xj2aAk1EFpAxGaYYJfHncTT4xLaXwQLa9j2NzNDXszyQjjqadSHBMDeVxqTRBWi3A9PqBVKq1okQdWo",
  "key9": "43cMFPDG3kBwnXatQ3hQi6pcjQXG6DZvkAFnSB8KyCAuDTUzARTAVuNAC4uzb9Giq9TAvb9HY7tUNGxwGsfKLcBv",
  "key10": "3R6TBP3RFuN9Us3QTRLrmTiwyEC1zmCcUYwRAvuByiWNF9pqm5kLhmmcyuMLiNdFXJZR8wveetHuxWe5QTXnCiuB",
  "key11": "2vGLqLWZQZqea9BQrL3JTDzN43V3LzjZXfpJveWdgysxMjeBimmEw55gje9TsGEw9wG83gFa1oKXkK5ZkyW1zgvN",
  "key12": "3BSe1VT4EZMPcYWzgaohGztnEG7pauKkatYZnbKtkuM6ebDxgWbH1V1zX1ECSXRFK4i7va3rN7QYiG8tq7pyg8Re",
  "key13": "51epj5n7wRyWCLV7HdD2fEaiZAqm9rQFRyYYkWzFB2f1ACVKTEYkvB6H7BmhNi2rg1e43AsVFx7SUGZtaAgGnty5",
  "key14": "4sRFvANinmXRmcFKR84P8HJD9Z9JBcDdPEPAziqUfdTYjgTZjxRrdBMWg4R55sQzXRrTg2mDYFKwsWsktK8ch56Y",
  "key15": "3gGdb5VUeSFYotsVtzb2PNrssejCayEJZ6T8awgfrfg15rzuM9r7tpEU5TkRK8brDu9KQaWcAm1eHXm9Sj5RQvr",
  "key16": "5CFNPLeK48j7Wh9gzap5kCDpcHvWs5qHodisXm2epEzG9uf4jGdi7biUiR3pKCVpQkMs5FLekNFD6B6rKQoecZm4",
  "key17": "2xcJaJoFWTKd9PNqFUmej73jmdSdAMHbmSnpRR2gK7yUJTT3hPaQHSrt7fenFgVLpiRqtM84MpZ9YFCz2keHQmsy",
  "key18": "2WExAWGGZKczQyuzRA9QpgxrCP1P9DRqzHRHcjUJf6Jyt4BQBWUWfyHWNVvSVLue4QywqSBQ8fMG28SjCQzaBwtk",
  "key19": "53j9zFRmxHyezcTTjn896hRBMpQZZTaousC3Voo91ULJUc22bm3Dk6jYbm937S9ozUa4vfuBSYskCeBxeHeC7mXJ",
  "key20": "2WMUXjLTQXpyCBPrzYbfg1eshQ3fNehNZWjFAedt1QSBBYCrXrFdsPFXRpAEoWvLJRM2Ai6qhLVnWCw6TSiX5A5p",
  "key21": "rcU2dHuXpizWSCcA6iSas8fowexNZ8F2oNcUsyvxBbHLhwDGsQxcbfzsPnwQyKgxhwWWUM2jS2JYTJrTY5TwWV9",
  "key22": "4eV4TpDT8fBvGLbSQkCWzSeYGsEPyKsUusGriwWKbp4KKCsWasCHErcR2d48EGhYRSerthkWzv8MCYJ1poghre8G",
  "key23": "46Tn77nyerNZsrsjiBzp8insikEB43CxrgPMUVHzDE26YSVTv3BHbj7pJaunGpvvdV82A2UppA1Xmdd9vMVsgfeZ",
  "key24": "2o8u5RwUnnLd86GAR8enRkSA3qwo7HpbRTLa8SpCrVjuSqPh8XjcHX7mAhMtqXnH4KXg7krnmhHChLKNv2wAQaE5",
  "key25": "62hR9AnvPCe3jsBa2Ni6ZZHfSyyZv7HgRTeqcNyuRMxFPFkXhw5SFKvetMJr2A4nV6T72UKQUnX4qjs1GNbHxWvS",
  "key26": "3LGqHRVNkYMDKLd6nnoaMYWdbup7B2dPThrZFyUjwQhZ2RskbwXdf9bogKUq2Xws8byALhR3ug2e73UDvoycQYLj",
  "key27": "5UUdDVksV89ZnjAiNHh2zMkdXiPaPBNLZcD2FHZ5gVz9SD2JLNok4C4Bxi7eK2wqawLYDLdSvGkVX8HDjJKDyyDd",
  "key28": "3v3Gpec3KSWYDntrdTYmeGv6pfTSs65M3bubckEzcNdmijRQUbP8EMBAneC2132WXUxerwKVZ43TmrwMS4fjJ1To",
  "key29": "2pnVJSHw7DAZZ3kWB55hFKhLVwe57avMjfCMggyKDA29iiLt9uhFW88con3pc7zY1FbZXcyxQkBAQYaUaBk5NfLW",
  "key30": "5LaeExKhUvRREhTvCHCdWLSr49Kj7jXq1YP8jsstM89tU3TDXBhREWLqwcBYH33kDqp84r7XmSv4Cy7FFAjvJwMP",
  "key31": "xaPmbjtJvaemxacvMm2nXKyTqQHNiPQ66tarMo5sjbPoToyWPNdiW2Zjzb4phJP9T6jN6LZc4AfyeTnvpNA5dQC",
  "key32": "2C651cCf73tN2EmjRoe9ofRDqLvq3ujehMTBzJ3CQpgqHoSaBsTsVrKhgDiGBVAQT91ZyVnMyor2vAbXzRK4cV4w",
  "key33": "3Ln3BqVzxEEFNsXvXp5mX3bTAneKTxVdn5n6ktHQrXK7oDENq39NiVBYbRWeffpatKZwuYzrbDHUHqoxUHatA4wT",
  "key34": "2XD9kxUE2tUdoh28tgV7Z265PxLRkehCBbJXpxpRQbNDhpLQYUYpsLrepiKVgCYrr8PLqGsJj9avpDwqHP82akrc",
  "key35": "2cMe18JZd9weXJMyhaaxfoXG2FezvnPDYrUALJsQNMH1nyLJv6bvRgWjSokRPAUUb5wFE398nfixWRX4VpUL1cx6",
  "key36": "2xUvyvj3pHuAMXRMCAfJvXEEmKjbrMxdekccfSW2o5BHEpBby6jfvMAfAMiS1UBK8D3PaSZUpei1s1hYw77wzbP3",
  "key37": "3Pg38mSuiBBz8BpZ92TsT9MT4TTNXdwYhNmPjA24FcMg5jrtbYXTewmiPn2zYJe9v8A9TKBk7in12jPuzzaHBjuk",
  "key38": "CFMq9sfywZ6XfpokwZqTUqkqnJ8FrkT2RRFneaTg6hbAH1L4Npz81TRWwAkH4BUZJ38CdCzuVVV9WdthU5EZ5nx",
  "key39": "4fRrymgwbZM9QWLJL2jZXGDBB8htu4UPRS7io4DBUUTnGV1btHtU3fgtTNE1e5Et5kkh23Ar4WHd1djeG1tTx7SS",
  "key40": "4ryfEKFUjLLAsGSbjnet8sDcZTcyHSTToAvPbmsoTQMfzS5Mn3Wcmj9DuqK1dFphqCEp468Cdrz1uA73C4PnTcLY",
  "key41": "2XRvVrivneEjQ5E7FiCiWHCg9Xo3UjsoeChcfYm2PDgviKSaVDWfS674RoueY2ZB3sBtkuiF3j94LSguFYZBNr65",
  "key42": "2zjDNJkwbjT7mUKpH3ibUyekp3ZYtE7H213cG9ahit9nePqwFtviKmezkVH8N938CJNNe3pYtWReT36UdnTZoskq",
  "key43": "4PqrYxkW7Ui2yj21sMt7AJmKbR1ytdS88fP6TqCEaNhW33e3kVZ9Wcg5Wm4mRTD2rkBmEM5VzEmfbDhXLiKoEu5M",
  "key44": "4wgDMAT6TTjsY7brmW41cLphwA7MqVsCZSMy5fAL6nMQTzkHmxrK5zG8f2WAjkT73eMGFhdvRnhzAL2T1Gg8pHN6",
  "key45": "49M2HXkRBe71V1V9h4zxEziEhHRYfqACSb6cAJHXZx4SECu8cR2QSey172wNjtSbBu1Yaxsa3o5dm7HYWimvNGFC",
  "key46": "3J8WosqehPdcRLvULaQeiLpMNh4QVBzSL3ySa3cus2kihwKCFz6rHrGsbdAvd3u5NwCiGWKc73rfiAeufHNtdqVh"
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
