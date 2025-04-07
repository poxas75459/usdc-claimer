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
    "pbjW6mRqsgkeecahBdBKcUbASS7suBoDqAE2hC1nJkz4XMYGhToHBhnAkYMqTdtqPfJMuqJsfFJiT2SdJJe2AgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V43ReHbt9WPx1VB5HZaMWFiYcn5h6Jp8NWUajjLM9DdZd5iExYZvxiW1JcKgUuJrQLFTukpmnSpgJhSGPt3xUXE",
  "key1": "yvXbKjx8Ly1KLD41wHqj5784hkvkqZ3uHSQfec4XStr72irKWJDbNCyggcMLu5pe3tKZwkpRaA8Ttq94iQy4TSd",
  "key2": "5PcTwsKUj4rAPBzTyF9KDq1yV8v3X439YgRsPGn4BGcqgWzoEZ8KDSuUFPgsD32synohCbBpPb7MARid5miPKxse",
  "key3": "9MmtG8tfQ2Sh59awvdWSAoEXaowzyWsQnnmcu55dBHCyhFQRD7zaTyJeFY7cV9Cyw68JVRsADh4yRQ3RqommxLP",
  "key4": "5nFkX3kpjZJ3qzutPaipcuaiRXKjUsMW5x95htajjmGd3AQYb7MjGqe2qiVJrikPuBDku6pxoPtcg7dBD1NRoxRk",
  "key5": "2csigGBhEVBeZia14MD4TyrFbTRAXKEBg27MuP6DXT6n2ScLqtz33XFeLyjyh171hxGX8kesM7MpT2M7MKysZqzD",
  "key6": "4cKSJQTPJvjoAhiBftcxPsjFQHDxnuipVEu9UdRNQj3GQkBLAu1iYLupYZoycPQszC41rqZhTR8k7gs2FffdTTFf",
  "key7": "26hUM5FmkmrkqB1e6mwWh9xew2BGahe5ie61SDKk4pdM98SxuNNjQDy72M9ADUgAPGsUnRgnq663LQCqustfcVfF",
  "key8": "492ALE6GNRYfeUPT63bWkUXxRChDHU3QPfGfaMDXmS9fn7UBcWBYDgnG58F4ppszNonkqkVNiAP7QPBQhNSJN9ar",
  "key9": "4PJGBmVo7C6EBbibhXktpEmpW2HXf1J4oDxoib9gM6UqerGdoKYyyLfjCR2dEodogs5u3aWDxAHDeytaUV1YAVD3",
  "key10": "2DNCAmpCeqP9NRnLo9iAR34U8TzRZ7yMEanixVncBGFa2BJGDKmj54tRK3WoCVwdR7qcptFG8FJq4CfJoTSRJBwo",
  "key11": "4Jtmx2QXC82sQ3nanUfDoigpkfKwsrvmoQwJ22xEeqsBp44qJNqcoQfTLqSJ5N5ddJVLiimzeDhzYTST2zctPuSc",
  "key12": "378V7DkJtiF8nHmUEqNoyiwXk5U8PJSm2C1hM8s4rnRmFaxDrXZTZxSCn5QA2JvYGuowGYDKo2LgLkkHzi1Upr19",
  "key13": "2Xxc7AYGV67KxaL9gdVWSQ4qJqi893MKMQVjZVmtcPvjcSx9kFpEywsAPsgsR5FoxkxzxmrHX2MVZCooyAQkF2yT",
  "key14": "4yAVwJW3xTFziQ1UhqA5PMPo2tuzo7fL8ZuqC9YGZdyajx9krKi6P9JXyr4Hcc8Nhm6T3wnGdihBwxhkQvHrJ5R3",
  "key15": "5d2pe1iC1HBSx7JVaqK6tdccxcZUizZPFLdtkk74Ytxmipj2F4B6GTmFf74NoxhhYzwwey5YjWaWJ8Gzna198ns8",
  "key16": "vDBWBAWzAnXvgAknfodCPbvJNwCaUkyTm3muj9egxKWWrcUwA5ZProiHaUiBgP5HuP3SKfs5Ro4NRFNdexk2k6A",
  "key17": "mDbaLMDJM13GUUh1AUXffVV9xFqS92b7ytu64zYXpsACfbB4z7SeAh9Q8piQJ8JipQEw6dDrqRgi5CVD6488bQJ",
  "key18": "39JpX4Gr1Bimyr2GGby7Yd5xFpesGYyLzHEEyoskjKwWKhrWuTJWNB8Uxm6QtSZcoPincgacBs759Wg4f7Yza9mN",
  "key19": "2bQvjosd1DikrVpCS5JopvJdBG3Ug1J7WMWoTQ8nS5vMFn3X6m5iUbeseLPaRmSG33kX87JRAAhtP9ShHhuS4QSz",
  "key20": "3Ve94GffmN3rHCWa839rv9YYTWvzeskTktTN66EYWCVzD1DjAvwWEACfUoGDsXsc77HbJXxaPf5tLzis7RG5B7zB",
  "key21": "4yV7dhbpxZk1ZXvX14xJoRjEb93YEEuYVUB5HNuvozbDaWHWUGrQMHaUWJUqmGcr9b4DkNbTYFsLjWxY4Hww87BP",
  "key22": "4qJFCLL4XL2TdFt5tKzRbQf3fhWzLryX1KB551kxu3MEfZ7yzexoXmz6G3Diq3pc4UkCLczsUfB354ZXyzA8FC9i",
  "key23": "5topqD5QTBLZ2pmqEYzT9hJiQ31aoGiZgF4gzyWV3JAjtCMMFWmdHGkYnvfUbpaCYXgzHHuKGLBt1J5sJAFEbniH",
  "key24": "4zYe4FE27pUxmTsixmTP4njdor5ZgAoSA8LDH5yw1zeEG1Dyk4KmTqvM44uuCLyq8L9TiRf5uRpDF9fEjT4ESnE1",
  "key25": "3ToCG7vV9GQ47ZVwvH8GizDYnaNH6ZjmCtvZSF68ceB3KnMESmFzob6G9U2vaGDbocUmjDi3KDjFnNKAtH1tEuV6",
  "key26": "5fiKqNVv4bKytTYC6CsoYi7ahyjvHoRc6kRE3F2q9bb72wLDvGy4nJ9nbL9sP4PN1tjaMLhWTbtXCB7Ca8iN5CRm",
  "key27": "4pg3cm37gZDm8xLQfbLfnPAkHNmR2Ed2FThMfi2rULh6Uj5QoKvPw6JS2tDR3uB3XNdWVeovorRC1BMhbb4zpEm6",
  "key28": "32A5L9vv4kK8Hp5vHDRfkDEPbF7riRPUPyZ1qAubPwWBy5tgaZJQEJvABAXVg5yWL4jNXBDNLDai6MdWqPf6cr2J",
  "key29": "57LckPF8HPrSb8t5UYrEvMUxLzyU8pNx6RHj7ir1yRDAqsbiCqo3qqsf8VUtwWEh2DC1VZwavMVzHKsLtzo3VsbG",
  "key30": "3Z9s5bFNUnzhzDh7yiqiCyo2Q6gfssPUL5W1wTkDVHUTvmFFGW2jWfmzc9C98wvpYVznMhGmCRP2RPFVCteAemL9",
  "key31": "vkCR8z1rrtYd6928NNBCc69ZybxW74Ghek7SoQYZcdxN5uM8r5Uf5EwkJDKQ3y9oHE8thzEAn21RRYGNTzARq9E",
  "key32": "MQo1NPmSGzCEaEXJuuScWJmbDHJuqAsbYmtenUBn1BnWvMH8fhX5jfcaW2jk7RTCiADrCCJEHebCYWdPLNgLESo",
  "key33": "5JBSk3zU96usX4qNUdWTgTfQA8vFVz9t5z2Gjsx6qa7h9kbNn2m9ANGYrBd9NPc92b4GBpgc5xfJRki59coUZWvt",
  "key34": "21nXhrUbTo2o4AXgkF3xyefkydXFUkUzMWxRT3jJdLgeyCRMaAQd7LEzxiNZj4bvZhDVUDkqLsXbmmBMwSDNUWyK",
  "key35": "5VcJt6iNLZ265NfnE4zUg4ZG2uUHBjD4UM1RYVfFWBjazYQy2nP1ZFXRiyX6UzwovfmNdKvXnwv2Q7DA858bhjZY",
  "key36": "3kBt93bMfSMKP1ZWjdfZW4oZxrGhsqRuj5fqM7zV4WThVWGEjYokX3A9Jru6w7B6iouZs5m5aAjv4txG2kzX4dmE",
  "key37": "41H39CvHJ3LE2vrTvY1T77HFPGiPcijEhGCUwGGCh2e9pKv3ihLyiC55g2XV822brf3cJSivyQeoQFXgbLoxskgH",
  "key38": "RDxCzek9mR3H6P5kGTpENEghPphuYND6rJx3KqQNp63Z9ep9pSAh1wPjVchC9jEyNdP5DwDci7GsmenKuYL9fyw",
  "key39": "4YkTXHjeZk2nPDBgEcrGf6z959mrrZYpxTz2zCpi9DyvjYp5n5jdMcYE3nHu3N1ELKuceiTydHJU5FM5XGEttNWv",
  "key40": "2m7ZCRnh3zj9DFzdZ8cjN2ZKbHR6tXSN53vEMyiW6Z1ptNY9uRhwxLC8ysSP6hjbFneMfXP2mGdrsZjhi4M5bYrc",
  "key41": "QBLLpTvUthAdnt85UbxkbrHTdwhmzVruozm593tWTZxTuwLr5mRkf1F133tEc31qeZsHUSTrPeQ7ydfGrJ1C2i7",
  "key42": "NGGrBKpjUy9xhHKjgaF3ufb74nSFdApc1mjwZj2mgWFVagwD9BL2FGMW56GDGtfoyN9Rvn3LSxbt5T3uaY2vDWH"
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
