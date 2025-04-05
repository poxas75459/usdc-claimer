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
    "66LQ6SGn62iXFRCsUuKGDrm32Ad2fBfjYbrzEBELLatB8iMiG6uCWEg2F6HaqUTT5UrXzCpy7fJQNSKZCb4qDNTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oRqJZPAWVYe34GwGt9fWhr9tPWydKdKRouAkSMryRzr3PLLJaDT2YYZuGTJmQXwQJKtQkQFzA31kMUG6DtoJ3eY",
  "key1": "4jrgg7gncmUPBzXpqh131nk1y8SYJa1oR7XYPjCwzzB23yDhxy1gTxoW87KmFw4Fpqz5EXBjndXeeHAS1BotkTGZ",
  "key2": "4xbVh1BCxJ5k9iMa7VhvsminMHTn2bWryCwuvbXA6CnVJJotUvvtx9ToikSR5KpxzBXPgxrnFrL8Yn4yWyQ25oRC",
  "key3": "z8BNjgGzsAuBZ2XenBgGuXftgyxfDHhioWXZR5whgwQVq4FaUybzCoiShrfZk8JkREc2UAn4tzqrSYyXNdhtAYo",
  "key4": "3CPfJosPWPEpHFwoq3aKrSexgzZhWu7qEjnLbmWms7SvuA4chQxrx1i7UCi7mVN8MXg4wEXUQDhHX9dxg8tJguUN",
  "key5": "2BYdsrRJhiztRRRFsYMWKtxrcDEE4dTBsjAaJTwyEFUPpp8c7aYxsSYWiGNDUyhQfMLdpV1GCuVF6DfohS1u4KfA",
  "key6": "2eH8mwLDbMB72sZdvbJSoivJaP8CPsbJN7YoSoLzijbPWvLVvbBber13QDVEEy7ngccUSE5hbsgU8rvpn7AWPZ3r",
  "key7": "bd4cbpuehd8uynRiovC7rKmLaJ856TqYTFAAgsza6vMh6JPSjkR3wAWnpAyKbvpK6Xt1B9RziX7bz48QDmQTv5M",
  "key8": "3GP6tSsZnHdz56BV9ubcrgVEpcA8vwwvpPfGpWJML2nJQnth4hMkzAgQMV33iKQYeJsv7zYMKpDQMnr4EABAjAWA",
  "key9": "PHHQe2StHCuJWPQwjXdm6rvcFDWG8KCSPXEjeUkiyDeQgmBpiV37HLfWASQDQspFWNnHcWVMgJK3bhqi59uSHV8",
  "key10": "iAxBpVrmZGYCEvkacK46AF42BNThJWAKfYspWeV6mmj9UYtW2UrzX8oSuWfDcD6TizNx5RKoZh41tmcDz7We7bM",
  "key11": "4PwiaqwrNu6oSM9ZWW2DktAfJmKG79vKLTZHXpLTfJw5FsYh94xwu3Sa1ak81ExCMJaN9BDXUzy34HjTJz2PLxHQ",
  "key12": "AizFyhPr9V6u8AAdoEY7bBV9d1LeyN16yT8c5yBJ1R7oXDM4xQ9uLXERJFhHNpzMecpjqWxi9p4cdP3beAAnQr7",
  "key13": "5uCQo7SstYXrRsamLv5QkXtr2L23sYt3NHN635pouQr6weFWwT6StXag3xQu2zN7HceSWmTHEvCbHVDhWHBvT7Yz",
  "key14": "5JTMjjPHteHSAffedAsqBRZWoExT9xwbAr3DV52Xf4FCrkR8DSFyUPuF9f7z2XCKTHtcHRemnzP44S1iaR7tN2bf",
  "key15": "54iM35FMtkWF8t4PrKgg8xbkwbVw2WxRLm2grP5brELTPbaRiFQyDQad41q5YDFAgPwxt6DNsk9qTfBCn3zTSjay",
  "key16": "2XW3PGPDm9uBXg5Xa8dpvLHBrBaxeqjmyhw1XKvJA7K3CjM5AK85LjruBkN5dn9c59sdZCoAsB9ih5a7e1sY3XDs",
  "key17": "3P6BU21D6ay3TzgZ4hLpUw1EyBwsw1QQjHjagP951h2vBsWdiPavJnnZV3pCoZDbxyP9hV4BkyCWYE4NYRevF7ZN",
  "key18": "4iBxeboms8zcfLzBuKFgFndCiYr6wkSE6FyTcau7MK8Gcf4ECGPsNBFtQttTxViLBYSfzdRUJFL5PsajHr3JKux1",
  "key19": "4MWca5BHYKFJbz8Y4M2U49yimyiyn2boZmefLua26G6S6tWEpp5iaULCQjWzmKhh4GiWom6vJBz85RsBkfJ8mCqV",
  "key20": "4ky5DpqnTKJgLPEQpj3d32s8MypoorgugPDLaVRm5Jsc1twm6YFqCLNoTcuQG1V1ctfrX1CLHTRdPdZMEHP27Wew",
  "key21": "4HCkTc3t89AeQRUD294cS6uo8pYzJs6w4mB9HGyQuUGrQzdyURhWzhiyaxqRWBhrVFijCUENmMCR243bzWa3K9vB",
  "key22": "XHT24QGUHhwGZQPezqQURLjBiL1h1VUP87UXYbDumkSgchsE5hDRusH4cBmTAWsxWHaKsZM3FqrouFtv1pBUx6g",
  "key23": "4j32p9KVxu6P4jVUFL4b82VpFwwpGDhaEb6KjsRFwZj4cYnXkMcaB1FFVeVgbeRZYzAaWJe3W8i9LonWxZDhE88u",
  "key24": "44yAJWwj2fmRGDAb7BRgXUCnQYesQdi1N75eSq9TAMKXTAFwVqXiKAWfu3jYEhEkcW4bBEnXLzrQSyvsjFaqAJou",
  "key25": "2Bn4C5Q5HiJznNA8bzABRfUYHSJxQr5Uo4nVmXKLrSLgyJBSEbKiDi8A2WMp1Nf61ko2J6ucBDHHt5fH2vLBPbku",
  "key26": "oFBTpzQhSKNRfyUNTgV7KSqHEXTUyxj1HudLQ2R9CezRMX3PJFbjHZ774wQWNpQqbaUjmhoazkwPHQoD59Ns6JY",
  "key27": "fdy47c8uKddbWCDpbffiTDNYBwzZK7vchxcfZhn2tLzy9nkHF4g9v2vokBd5sEaLRejfiv4NqRkYpaVAaAvvH2t",
  "key28": "3R5vQz2BYvWap3aVQKeUnJgtNhaFZmXDzcqZPLK2n2ecNedMvhumizPezqEdiSpL7P4rEWcqNo1V1gZEmRNMCarx",
  "key29": "5J4mWc6NPybn4YXbiSRaeBWyes2pMxYfVLQ25fXvFoavsuuBRk3f7ZjtffP39XRkZnp53ZtGyzANV91cGCCevGfg",
  "key30": "4ArVrj7rNuVrH39SNteTwVLS4ox62Y9vAod9u6bq9wSiz3nhUHTuA6FhfyKcJ1Zi5wQppaT8FRXgcp8Yn6prTbae",
  "key31": "5F8Cb3c4Ens7xfvfCDvizDn82Y6MscWLk1zWXnx7iiAsMT7ZvTshzKxPPERWLAC8uEToQSbJ4fY22gRT7ii84PfY",
  "key32": "2QPCXVHZ4xudmmgYL7N9BY8Jzqq2pNNX1sGd8T4X6MEqGvbCiREikjpgE1dGaZfRmNt5pLXAynEdRY758iqMiBYg",
  "key33": "4SvStRb5mboVxvWrkBRME1ntFQrJV6rh7BMufPDbWdeg8mb6qvEqM7aFaQmWitgNsMYPPuZ2DCQojP8v2HLxUaKH",
  "key34": "4n2cgjmd9TqdvhgaK6FUJn7opWEjgLv15fDyE7GUWhJf4h3ZhyG7E6FcPESXgj6H3qU7KsmQrj6ejnZJdw2qJQv8",
  "key35": "2P3QrZamVZAFn8S7Z4ZydQrFuhDH8fHycTQYpEDgDW7nTe8MV4P85qFh9cmBCfXYyLjhh4zHgsESESHooiNxJ8Ps",
  "key36": "mFb2hf7Mz6qqTTRx1zwLeZqCpUZD9PUvu3jwsoDeSjYu9kkuFVpaezHwpvK9qUookk2LdV5GC59gf7MHoWDsAWG",
  "key37": "5ANb6FkMTy6VLcMvaSTFAGNzWouWHzi11fq1Fequ9XRYAMgZHmkGotiCiNqoenn1qCkV5asz1M3vWVqgkoR88fjE",
  "key38": "vBD5FLiM2oYX4n4zrzN3RPfe4U87J9XrwLfSG2q4JUmyi5PRBuQn7PytLS3mEbJiCYVfhMFMeZRmMVuKxZdASaK",
  "key39": "5JAYAhTqvoNh92Y3Jj92yiRBs9u9yypvQvPM5EbgiWagR7HxHhFs5sSNqhZPxpzpSqpbRJB9aqtazkxFVgu3Yjr6",
  "key40": "5dR7nkWBaLvFqxEn7tfTXJSVCH7PMqVqhpJQiTzraj9iyhgY3choFuzKWxw6WjCBeg7JdxK66uNBasig4CQPQqYV"
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
