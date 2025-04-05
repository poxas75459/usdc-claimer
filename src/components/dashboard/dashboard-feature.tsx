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
    "3uyf8E4Wzf4wVpf7cC4Couup833zTzQg9Hft3qnro4owjiK6A4bWt4QcG4WsT2CtU5ytFWt5Ys9yhe3EUjuyrCVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HnZEUGY6WbkaeaRX2Lf7gTUYQzStDH3nwhps5oBm87MPbEH9Zyuz6iyaKVQNpfAwVoPvDwsKVFh9JiiYpjqd43i",
  "key1": "4UmPDs4cbbbtEG6s4sBTtXrt2bmxVW3jCShsL8fx7dekuRtJz2f2bJvGK2NuCBEHSypMoY1CM3RuKHN9Eup1xgXg",
  "key2": "3upYvxdsUaqq39zZJy1ouiZxzH7ZyNU6CzytiTprNUPPpBm52UHGj2kgXaCHgNTtEhrF3YyqJUn4i8zMgcpxDaEY",
  "key3": "5HjvXd1V2h8h6VdWpwDQrE4aGtv2mhoYm2sHfvqYDJuPiZ2YyUuiWqJR7JgXjFuwuBkE2hEGRWa9NaZhxTEbXBAa",
  "key4": "4VMV1bW96iM99nezNukaXNLQy4eZiaKfJRAXmHoaymLVrtpFxzJm2iMyS5RwHHZy8e3ScdcMqi4LYpaGKcxjmRBX",
  "key5": "5obhXPWzifHDNJCTzzZiErnUFSswZ5hZAc9BpsVeYPBFNv6YpR3J5QyqqcUFHbtc9hNumDdoXnjsoco9QTVXqBgo",
  "key6": "4Dy4PhH7Lff2PHKJsYbSdgGuHmVi97j7DpAw24bqjxbYgMZ3nCWN2k3AyycfTRNTgWKD8vsCxVFZMRFZ3Us2F2RQ",
  "key7": "3gsqK9fsAHB9gbArLkUopfnwUquk8ECKpnKwm1XRETCwYZukeXvTfuZKWZvemrcTkZdmWC6o7DQeSUyjTHtfjdZ6",
  "key8": "2U3UEvYkokcVNuxUvjP7rWFH3CKtYD7Du8SSz6UBWDEgg1GDd9WuuUEs5MNU5JcWkWz6yRNcRYKf5avZ8t4dJYWy",
  "key9": "53MgTMtvnWb4mwVmuWGkRFxorpSz9irWPv3q7aafvxQKbBGQyMZShbtyV2VDPvNm9391eLD5jfSNayfSfCqvpGFD",
  "key10": "3co4PS84H2txuxXKxM79snYwEXz1PYRgWFqTktkNJx8bxhbqQaELphWyuEafWndu9AofYWVKvxVsmmNRXgZhdrBq",
  "key11": "2a7rtK9ZHJCJqJBYsNckw9g6A4jB6W7PH1R7Q1TT82MXpnLg63vkqZNt9pewSvUm7honDpdX1ZYecLBH15T9dwwp",
  "key12": "4Wqka9cafiNaMauTK6c8XjkvtoGrM5q2MfvBRbq3MSHDz5bBxUCn5J1cyea9pTavUXU8SGZWKBG8JiyYyqqkKAwx",
  "key13": "3efsGLjtyfoYi4khnvDPsKBpNDBwUyCfWEKw3MvndtpmWUn7XHMSqMyVkHGB5RuVmsM9JdY7CuaKaL4H5jDSoDpW",
  "key14": "3KH85suCX1bTh6rbWYreKv5W2Wkw5tqsgxst7nfidPpRSABuX3gACYMtDq4sd11M2qL1gemhCm3XMMkgNdCxWs8y",
  "key15": "2zhwjVXJw2naydVomiykoXUrSppUrLV8PyofhhJcme3Pr6ENT2uKwype3qS3KM9YxtiemsmsnBUY8FFKpmZLLCyS",
  "key16": "5RCvHNpYspxhPy2Kh1fGeTiU5TcXTHsTVZyNsEJLD4f5S2URCUYiGz3p4sbhFddUtke4rBeaJHk4wxvybtuEBjHp",
  "key17": "1218Kap5h3Hu3ymy5imHnLdMeZFxR9A34SVrhDsvrFNKM5DyZ2nuhaU6sr9ACuRU3mnHnBQzob7wPh1iNv5EXa5N",
  "key18": "4JcXWhh6vkqsumw9VE1knGACBe3eeL33Pic9Yv4mYj4L8xWtE3b1TJdEkMrWDUoobx9utFwcdCb5tFK7FZR8r8cW",
  "key19": "3hz1LMrYebwPQ6FjrKcj87KavCFQoMDF2VKjtNVuXkqjtmLYkee3kF818xuBRMaGkX6HpSS4g7SNA7F7wqXHATYu",
  "key20": "4sydXXhU9f6K6p4KWzD2DNwv7cYvgnnUvGP13m1Vs8tabmifdZ8g6pVRu2N1SJyxHQbtMUMmRLwYLb7JLXojdZxK",
  "key21": "3qztYHN61wCm6ZLtQubRdaBboZ167xLuAgUo1WeLwNzSzv6Mv4q37SQngh676aFPWrsuUDwc8C1Tts9Dy1rcRu1v",
  "key22": "4byFZ9AwTNyPtqsvweAm1mVgXs4h7upGHnTUwo2hqZBbX2wXJnPByj4wpqxsjgK8HxZero4dRWiqFqPuwWtcRQdr",
  "key23": "5h4fc9FBAMAUx2EhiCpjhtwN7i3bLh1FqWyVkvKZZJmHgzKs2QfKFiYWm7X1yP9fPh2ub2QBFPtCHMR5kg5USowr",
  "key24": "35zQH5yh2LSLkYMuWvCKCvDbYShD7quBQn1X5bNfAcj3rLQ3M8hwWnUKS5tNqt66B46QdBSy3NHrdQFssU5qfDMn",
  "key25": "5mVis4NzQhUF7rSHYsZoUJQJDzRmwthgJ7MTRUsQj5ZtFH3NPixFe7UQSAYxTkGVPv2H4qjerr3e9AYBPMRvNCVp",
  "key26": "3bA53HeqJE7rFCQ2hKYyFc51CdDWjaqjZG5DwbuJvMCo5VLWeQmfut3kFFgb7dr5zJNZMdxyHHzARZU1r8AuU4yK",
  "key27": "3SM7HQwDk6U4gkw2Fn6nMi9LpE7yRqVjVZJcjXWJdXtcG31Jty1Ki22vV6P4J7wTGHtZ174oKbAnCYdMAQ3KbXZZ",
  "key28": "4LpHKP8yUcpCw3sxZCLUR7N3ykYwqFzUPAXUEXJX8poAFSCvQ4aVmNWLD2bGRgZvWRuKGv8158P3hZw48G3feeih",
  "key29": "25BYAxvzKsFmcGWEJgUTv44MfeU7n6c6AbPfe7d4pLYQokpbzjMAR34bzN3rnKLv59CYcR8Gg93q44NicdbSaj8z",
  "key30": "2rBcNHeVTthiLWzg1JyumYB3pqAMEkPoEKUDyobE2Jo2kS716riK39ys94Ck3Cj6oVc7et8ZZ49cXdcHwpeecpmU",
  "key31": "31UxXSCWAFc1SBjbm83aQBqt9i1PVpdQfZdWXuXmWhDwfHDV3G6eKTFxUQbYpy5QqXkfEhtw2r8KWgnKCMenRGsf",
  "key32": "4Kmw6gftuzSSCq9roGqXeJekELJ4fcxbmiUkctzayNxkxrekKhp6GLiC7dyr6JQx4jVjR8PQdTEJorPKeSqvp82F",
  "key33": "4b3nogjKDQVDiApRYTNcnjscTFa7yA9WpWxRuzYQWBVeUPtwbuC15gdQj9Aua4o1fh4utQUuqHgkBHX12jq3iZKd",
  "key34": "2KSEsNUabkNPmKfZF2URhqtcX54s4A8Vf98g6DLLq5P5JoG6E3SWXNYrU6t7JQTbebTaNMzZxAVqvbwXBg1kfETp",
  "key35": "52SrCpUhY73gFEB2MgXk3EgzkUcxtnZ5xNWNbNCvG1NXS5Q7VD4ao8YJTJhKCxZ9xWJvjiRBK9dVQjWeHfFvvXq",
  "key36": "3ACgPES61sio2YEYvYe6cXcEgUCcqzXo2oAPx8KxBPrMpyhXx2PuuS2rDGoX2hhggyY6zzt8N2oAXPeeJp2A3KuA",
  "key37": "3c4R1xLW36SZyzGG3Zy5jnQ8zDMNyofAXFozGpL6UAvFhXvtE19sWDU8atUULyqEEW4onh7jw9JSwqC44jQiXqqa",
  "key38": "2jHVuPT4fdRZkzgf1sakAivZ33gyN95WbJJ9b9Y76kRqmdZzNnA3cA3jwJMzJJQrt74ykg54sqYbKcXkxz62TH2",
  "key39": "5G3ZMNbqug3jt8EX8ee5DMTF3VnMaw7SkaXftJd5MH3ozBXvcpJBPqotS4x3wvmRrh9nZkFkaVJjPSDVis7KdHy2",
  "key40": "5CHByCxda8bb5uP6cCbG4q8xEDvgLupFrcDnBAe7qtfNc9hE8jDFstMXCxcC881RsNFw8ZEnCprCNRRY52oHp1M9",
  "key41": "3nJMXsw2yb7BnbyC87WiEttrjSGrBLiwESFiYLN8griEJyxYcghBVHaXNf6fvv344vD8Ehg1FxK3pxCLu4LYwdhq",
  "key42": "2fZSqBSyZgfJupuYrktUnjJ9dsmnFoPqDwKwvEnWEfjCFLEDuVg8vc12MS6EWbEPEAcL7SXLML2sKKiXV7S8CVHT",
  "key43": "3H4E5D6Rnpy8vAnhu2oRFikX1HPxUxm4z43bqNqWn9VZYZ9jGrRh5uxZAoeNtM7xAH1gf1uLPDNiXXm6Ttkpk7ME"
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
