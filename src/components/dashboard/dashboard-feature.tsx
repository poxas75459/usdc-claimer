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
    "3zLoWy6rwLVBxrR41sGEAGP8EJeeLs5RpQpm7n9Qs3NaujPy1f2vVyTAzYsRHbCteXgV1bdSnevfanHPLdZwz1jJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KqbbTod6qAosqKz5KMnng8fUpnP5L2svo8DFL6FQN5VGrKTtT9w52MjAzs4JWGETFsivLUonzJjHCYeDMqF4mVr",
  "key1": "42QrAerwsKoRHXzX4H1fG98ezxEqx2L5rZ39THEJMiBcPCdjmirHfbQZgygS6jq7S4TYKTvR2A8dXfqbLjEoFCpJ",
  "key2": "L2wqpRrBd873nrofwYkLJn1NADpwLNmwWEPByniWjL1kg6XBTLZ1Tcs8FvBEckdWhhbYBVH4CrYrJdKQZHrVnqm",
  "key3": "3PmzkWsvyqUNtD2XenzLqgtBUn2hxaW63PNwiR721fpNbDo9PEejdrzqg793rXkgVFVJJzFyrs9iGZXW29dCtUaX",
  "key4": "51SXMRn5aMxhbDxEvUgztGQPrRi4Mgcb33jSFMvH9UwYYx6QCCZpr56ikVYxFKMqimNLHuffgG6rUaxY8rMC5wNC",
  "key5": "5LwLyHK25eTYvcQbiDFGnYcuaM5h21PBnU55tCMrVbo9TQJwoMX68eqGeK61tTNZjKRjddiXVpz3mtf495kiNZhV",
  "key6": "285WusnjmRBVDwQobFcceXRWXHUpJcF9naoEFU4WnXyfyU7mmJ9MNqEdPcfw52rcjBVCU1bdCUoTCiEqSyqNFQpk",
  "key7": "5w57kdz7r3kiSwgQPzQHeNrtte8QbR9V7puqrtmdZ8nEBUsognPNHpMTHzkKFJPSJf8CtRebv8xt36zUCZk163hz",
  "key8": "2dF1xpQc8gToDoS9un82soayafyukD92fPaQfDZye5aVjY7xTDjYijrntqXYBcYn979mLQB7cwnDd5YD4YGJxRun",
  "key9": "5gFc7XLtBujxtKowg6yefKH9RFJDxtcKmTMdxp78EBrHmUUBZFnYVxwLcBTk3RPm5q1baaAkAsh97wHg3sBPusWn",
  "key10": "VVzeN3R8MXvkamVyk7YJ8nhZnZcsosoikzJ9eiBPETL3ctjDF2J5NcWMxa7jn1LqFtUhoDLMT9ci2iP9gUD58x3",
  "key11": "2aE6bUPzrQwimM5bhwqsJtfGHDWEAeCVbitd2hpKuqHrGQCewbKcXK8SAh74pbpeWhaRkyTT8DdKRf5pFBkdJSPs",
  "key12": "28ize8ggZEGW4AX2XMdLwfhea44BmKpAFs4V4ZivrmRxnAAxGBb1SXQY8YUKrZRzmP2AqqkT2wnzTAaN1cPiQ9hN",
  "key13": "kNoWbXRP26YugqZGwNTNcAWLJu8qNogWSbCSovL8C4BamixZuRbRZeFjLyTk3TQdioer7Beacxtwwhm6Cvb5rh6",
  "key14": "2emDayfnVAtNZq8gVkexyrK9HVEdZFrMuUrzqkx4y3CYthPHLd2nL4WERVrVkRNLbYQTviCatzP9BfXg99xejkzr",
  "key15": "3ih9J2UmLo8g8ZjhQB3Lr5vG7wr2gzse5kdCywP7W3riwLHuhVm1jPpaqcMMax4ELdXwdEADA3LZfTCb99Js6PYV",
  "key16": "2tF1ASaSS6H4w4FwnjfZyAC9EHWuiuxbaG4WjGT2rpbe3F7QAWwkSCGmMA2JhchvBbTP5QjF5bUku9WLbLm2hCjk",
  "key17": "4MSNjthSQ4jkPEMiKAUT9i4u8VkXoEQA4Z3KhCskBS2Lm2fRZqUW2UncVW4Um2ZTbG2Sm9Aapv3v8D7rrx1Nim7F",
  "key18": "5JZVAVUSpxDn7epoPbSKS9x6gRTq8DoZPXBqEVeS6k8gR5uMfuadmckDnkrcdKVQ9ZfPjprKkEdx63tNmsPoFmY4",
  "key19": "3hCxuFrCS5TT9CKg16MjDkXektLeNbACZJdzpSqrofMVCnKUH83429vpm8dMnfqHbtZNCgFnrkWKosaapbjnVhXy",
  "key20": "27QYLpgTDtiJJ4uYofUa7pShVyzHimDLM3h2cNhMzWfargXZ2jFVeAKEr2x8Ud8kjJcMDXcApXXJeLYGfrMwQ2mr",
  "key21": "3f8zoL8KKwZ2yX9gp31pLahzJvhE6D8qqcDhWCFYZVFFSRy77BmA7ZeoYgjw1gborjSvRSaAShZYfmLFUiKTKB9c",
  "key22": "229bgVZe2H898ujCYFx17mYtgAutcMAZVc9o5wNFKt5fuMRGST5rFLcqZcbq9rMUGNxpSr2FXVEQoeQiksnrBHJt",
  "key23": "5279EncCL1XHvCdjZrdRi1yuq6iaKP7CPKXNNxiSJT1BL2m9Ht4xbE1XkABEzmmL632jSCVUhQR27cCzMYy8v24W",
  "key24": "4ppNJQrdPLJqqP9xQyw9F3HkzfeCQDJ6NSvkXpSWB7LGH5w2S6RcVW7qnQn39zAiE28DcgECkM5Kp7QSMubVEFM3",
  "key25": "MqbLHQeEJLCWUBa9VBmxivozeC8qzJe5TJH2XygXW85W6f2eVDsbq7yBeRxKcBCBccrvoeXqCKQmaT3WmwjcV1e",
  "key26": "2KMW5Cm9twjesyZ1FXw3WDDVpEWwzXBbX1Uqrny8yS4yZwvG6SYHouMfUWuJTKtdkEpQVaajmQJ1GRVLStjQ4L9m",
  "key27": "4qek6dvn5ugEhpKvhtMPsQV1siDjZ3WMDio1LVkiSqmKS3a3AQFv5p28K8bGTduGZoGjEvrGqja9fT5xBEfbCMes",
  "key28": "2DAzwn6fUShFQpM9vabLNse5LGd5b24xtQgT1WmD6MHV1i5mctVRQ3WPcDGnY2a4vAARpw4gmVg6Kjn7ZHJM9MDw",
  "key29": "c1SHTB25JGoAituavfuqcA9Wi6QeMRDPaG86C3CZpwDzRjf1W4VuPD2nazDvDSzC4PDwZf84QzWzShzk5ZJc7BJ",
  "key30": "4Bu7Xt42pKfvzqpVa93yrW63abp9ZGXZsYqjfuf3aekWuUPyk7D7fRN9bteBdBEzK8Wto23obNqCchPAJLeejuWA",
  "key31": "5oNKQtiFNzxsuREz6k2juWNZQ3Pg4MpGmWfsTFmFQYdpEwyfaa5qyMWZsmBu45nrKfm7fdjV2j8C8KgWg2UTZWUQ",
  "key32": "57mnRrkCK9mjoP6VX9vLvge6Cz7xVyw1jG9af9U392Cr9TV9YaEkqFq5fa9o8oTvYMTtsvjrTknWF7vYJxmn9fpf",
  "key33": "g9epsxDhfBfEfceoxdWNycrED8RgHVu26fDWsj7vaQdHRrKG9MygQi18NWCGpdmMLeTyJYcupnvpSV3tYpsLqyh",
  "key34": "aLrAGdqXuDZKAQ8BsQuSzWzcCcjd23HqzLS2yubF2DwXTfgnvYajzuAx19gHxzbhLUa2chP8rpWcmBjNh2u95i8",
  "key35": "129gQh5bNA7DGDK61wVEmV2ZDGMV2r6xxcRqc9yn1HNvmStdyQreHQk5nEqa41KAJBUDmLESrhgnu6wK2GzwdskP",
  "key36": "2KtUDtUnTRBjaW2FzphXw4qaLVYq67Nv7nofdpcve7JSvSTJUxojUyu9fZ2sSaEFEdLy54jLbE2kuw41x5wTpJR5",
  "key37": "5Ac6tzqLwKqMdkKuprNzfr2WoByAPXBhSDejsf41JcArSUb6fmEnXUrST8Jn6XfHnz2sN7KsTaMA9c8bfFPgVyvH",
  "key38": "XZyT38LdXHxxzB1Y7gSpfUuWgrj87KnBa5z9cskYJePERKnN4VXSA2xKPGpeGYkvga4VfsTpQimQPd3vyrAHKsa",
  "key39": "2dD7T4iqfhvFD3FBuzoRqFmYsu8x6YRC8D7rBbdXSBeJoQ9U8oBgTXJrHPB8GSwf8xZXgSZ96JEhMK1pvdgNWHMb",
  "key40": "4xwpQxyv1KcykRaLLX1d381r4No4j4ScWEB7LQXGp7SSn331c8pKzeW6qtvVdbUZchUmfrogTTNJ7E61zCVVyWmh",
  "key41": "5NJfbgBPwHqTMPbNzkE5sJf8mG9npEGuJqgXpeQKm8RprrqG7pCkBMGago9w8gE5PHrqqLgtC6w5RRR1zMWnGWn6",
  "key42": "619NpPi8nz66FHd8eWkpsBvha4UY7VSHi4JmMp9jDWoALhu5CBL9FkZcGiTTs2w3mSYPJogTwmLRLknPup6J1CeS",
  "key43": "5zvA4UsuadELkNEox3agwyGKLfJZ1qP9Fh9MSxUJ57vmppLPj85QxCRTxE4MfqDMz8eCqrYbtwTKQXoEAGt4NdsM",
  "key44": "4jRvwXDYx1cSR36yVh4dWLcw5NUisTaHSfyS1T7FANA6XDUBLqCpDbPn4WJFZ7wmXiqXiVwLZQmvWW4QyHSYqs4Q",
  "key45": "62i6R767p6age8hoUHmgiKFaTrpWmymHoYJg7xqn7hRhNce9E5zsgQk5eTsWbLBrvCoxCCqNYYY6gmMSBzaP88Xd",
  "key46": "5iUmRs2H59rUrPD82d9n9XJ3ravVRiweRVZ5poxTNSuBoB5p5DydCuqbsQu4kSfi2KcbhpsfwrsnoVSmiK5PrkAR",
  "key47": "UdEz6tRJe3D24D6pCBsfS3fEYSvPui9vKpaFwMiTzxGqEd5XHX4pnkiTLH4fw7BcJoXjDCznsteRHfCdknmBiiJ"
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
