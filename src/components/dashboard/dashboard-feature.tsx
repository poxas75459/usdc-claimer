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
    "3iw1YcweEVZm26QXPQdZrmtoSDJ15thG1d23tvoupRE6LRcUsr27YVcraGShfBXx7XPsEZF5Wpr1JaUrkT6FAGbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cCiwVQRh5Z7ZpPLLWg72nMuJUe3W8zcifLkWL3SCqVUqkv3aTwo95qp5sZxq67YCxQT91Ry42uQUTpLjNbg6hpC",
  "key1": "3RCpE7ZZ9fp7o43XVAPNW4YiZaDWAiWd1iAEzbVE4zuXfSheQ6DoXria4PuQKYUBtuMftVcbZ6cVaYXutQzt91jH",
  "key2": "3rJKDgeATDoV2MopqkKjUqhqf7UQRqERRMkiaeaCUuo1Nec5EZRz164QpM8AEZ3tit9bzqbHrWPjhkUhdsJzwSMT",
  "key3": "4zD8MaqiCMir2a2n7pjBF8VNRWuFNauyGpEpxthYbfjuk9sxYhMWrrgpdk82jGMubsNojpFgwiA9DY7Hy4wv7rZo",
  "key4": "5NzLmEvsa3JT72Wm9d3zYFUGTmpRX5paZNsSSYgnbvFZB5TF23n3697MfL5ddkBe9uPtSZWsZosXSyd6AzLGyGiL",
  "key5": "582LPcSvM2N3AoqjR9Ck4CjLxeCntVnX5QdsTsrScqp3QYfeP7f9L3ehR2DSNtBDjc76mB1eAsrf7pNwkqrvyTXs",
  "key6": "4DAVpTnkcfx1VYqayLBmiJ5wXSn85DuzcYCuSZiwovmdexYSdXkJvLh41w7WE9nPBUtjFTzHGFVyusNcA7iJVFyd",
  "key7": "Vg3Z7HzmQ865AyHpCXknHx6oLxWSSpKVALE5dq4zbEMqyiAF1tSuaikzRku4x44Crz4Dq4xAhYFRpNbhSttvW32",
  "key8": "3MuoxiuRufkGWiq9nds71mtpHnh67gSDpbNGFte2jN7iWeFsF221KCcJVXF3aXAtSjXGtZ4whk6qwbFr5WDQKxTA",
  "key9": "5h6SK26WoBLJhZmSjh9pMUQvjue6wDGRNVWKpoaAtZY4Rc4ZbgYUibAtc4WnphMoShsngBtMFuuqnNRyGixMkTuH",
  "key10": "xxBgYWbf6tDYPk9LWFyBafhxVdrJY7xQHrAfpndbuooZtCdELEp9Ve7rUYYqvAtr6pdwFYbXiDRSb196cj9WF7H",
  "key11": "2Hdq2BuzAUGz8aeZfePjW6mxguGautBqBULGfZgtS19VE2Jq1hd74JR4VpsL2qBBUbGsYDoyfUV5aWqd3RVwRk9r",
  "key12": "5Sjsd5WDQjeHfNvRu2rRWGyCYTx3pygTwNnc7D6GgtNZXZHAipz1wE9XebcqeaRxshX9UjsAwS7mpGGwkFxSWA1v",
  "key13": "3onZvigkszaJzLPXFSQNNyirdedJWFJSUCMEGL5rQENf8QajLzi483j4MgB84oViXyxxdL3DqH4NWLeSAs2LNhB5",
  "key14": "2Y5jcyuGs7KSMsgCvFznyCArg84EiW3Z7LoXcCWZq6k8DZL1ENdCsWed5ExkAvqJpVKijJife7ScKEujK2xbMw4T",
  "key15": "4jA5zk8176byQtwA8Bm7fR1pGhCyhYkWPLjX1AB9imw8C1xSN113A2MyCHUJa3zjYfAjWVAceeWaZjfcVWKZhrc1",
  "key16": "4i1ndBzYKJJNzHj4D8jJoLUQnUiQcT5mwnJsUuH93Mx2k3QBDyP2kB6JQif4K7EmFGVfzE7fD4PwTihg546StAnp",
  "key17": "RxXsiXFatoZpHWSHDfXjA2uvT7eZjN6VpNiKomTggN82geVt8XvanfpPododoQ3b6y4kP2SZLMNoutEie5HfcNx",
  "key18": "5r2YShG2pCPib8VHTakN5vqtZjvWsocw9GrYGkWCdqQZvSKUk88fdjWznB9Uda1femQuehocYkG48891tchx7AT4",
  "key19": "2FeBJZHREkFfWvjyYD671eBvm5PaTTyj2SzHUW3mxawRu86kfPsjDDPExtHZb2GFwu6VuUZidXawFV9QksKYGFxj",
  "key20": "3CEmyGGZRGHinpdw7aydZi7AiQUjJc4zPz1ZL86jKBp7iCfKAc7EnoAMnoDyMJPaWYbkQPFT5Qzj9HDtAaXt5Mr9",
  "key21": "5GqtTtPsLUsHSSvF4AX3ZeapVh16pmYMKFstPmdsQqAxZhe4pj7dQLpTfAWfy6QsmaPBwrgVrjsak6s147Mn8gpN",
  "key22": "3rnHqNSm1phtDud9niXL5nqgMkSgd2pdMcszhLJWNSb1VcfXkeWhmEPVuHjFcKmMLtCUKm8SWz54GBW4an7TKArb",
  "key23": "66QakqCQXaus6dPBpP9xqeLiuXFwwvbSEsu6tEzmuS1UGwYvF9HFaSMEXPzYEXETizXGQkaKowe89VFpYcQQn7iJ",
  "key24": "3PFTcy63ibixhn68p22AiLjdKUGJpkKfqPGA8w2AmmygawFMiuCBPjikRHhFPnJsT1kJQqmtwXtdKc2SkApGr9mA",
  "key25": "5bTkMJ5mSkCLFTsbGwRwe87M2PHucEEsHjJPaRrCdc4JLreYcWFp7cLXkXVsemmDiyR38iez1UShhCCranLQ8BUK",
  "key26": "5D4qN9WFyzTd9qESteiPMWC2fR5uBiykhikj9oxfS1LvG1h5WwkjyMHRE2tu8GBBWAdBURX4D8314Uh8KwnnNSZ8",
  "key27": "2MUeV38WPwbnmzXqzJuN5jZP16exc6LFYajfjHYRVMA7L94EUgvPQqo11oLK4FVKNhTqBsnKvcw4MyLSn3Fwn5cj",
  "key28": "2ChMgBaHXt8CUN35UFE2RB8wu5Txc5LHFDSda23FXjA4zcLzTHMwTzUJ3AnoZiXrNanYL1GrbFBUaCiYADwdg1Af",
  "key29": "kNECeDEjoeU8Ak1fsL6DoSuf1SLEjNvjhQ5HhDS6KXm99iNHuhFryffQFZ4LAQfn2KyEiQzdEn5tWeug8QyEZMK",
  "key30": "3gfQh4rKzMkHH5Eg3Lm5vc8Fnxc2jf52pXRbAiaJHLfVnhH7Q6z1DkPCDpsoQUf4Qnp9nddT5CayGZvEM7ser3WW",
  "key31": "35LhEBxFZaLFmriQY83v3hTEXQ1Lyax17ZGqH4i3znQFp1FsfS2qT4jwVYRNgnZxu26A5gm4sevQtoKDavwiZT2X",
  "key32": "41BWE39UuSqrkH3iCWSmsj5MYNJftn3H8ebXL8u8tss9Tebho2jNgkWzLrMuUiPVJpv3L4X1wxEsuB3cdkCfMeYj",
  "key33": "4yuz2eCoP6w66d24DjJJJzmmsZAJNbknhJYneQ3hZc6Fhsw1pC4TgM5jtxMYFZoBiZCDXKfaQ7R6kMJ9qiXRu2eN",
  "key34": "7d52wEaYEtTrDRpELVwMjnSJG6yEgfrDTFqqh9kV585sFhBh9CJmKCkQKJMJ6AkkrAwhmrQvH1qK8Tf5zpkHyzE"
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
