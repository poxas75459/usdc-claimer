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
    "2GTifwHMQ9MKxBafrukJ2qjoj42WPQDoWLztYjp46wfqav4GYhowHGiR4mNzv3XmE1Ndj693wxbhRkFoSMTrHDVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pyFpKbeENkoLpjBE9hR4rAj94c7uMQAmihLB5wfKECfWLVvMQoVz7qngiF4EvhbeUUiH54bFEq48WN8Fc2J5pqj",
  "key1": "44tgNSajThoQ8b8eQombCNxtNpRWLSmJjBhbakNYhkXhcjRMWVxSfU3pnRdNryvV4LtGRF2Lu44EFUpQP6HDDtC6",
  "key2": "2frwERGDCLbUe1nzMm1NUEpvTrwVwKXcH1Ui1fNEbxpAah5Z8CsLBj3bHu9yLwFtuBMXt1QVqmBEKHmuniyWDGmp",
  "key3": "45wUgGvW3zuAo4PK6argjZxL1e7v3tpNNUKz1Z2jtTfS62c7D6KUz4K79wojW8ebfqPqk5GtoWwnqrpLpVezzBX3",
  "key4": "2TRnfWRrfXp5BvkP8GsanZ9rtYE2hyFeZ3GmVdoQnF4qhv1ZGwAEsALNh6o5wvFVcLyLkThbbR4tKGQCJeeGgcMW",
  "key5": "4Y15VqxHDyHs2FWDNWUWWqaVZjxGibQKqp9EbUGS2qt6sRSiHKqbnVXVNpDACmEFTTB1Na1k7RWU76kxqjuEmD1w",
  "key6": "4Md5dFHDAwPEF7k2iYuLSRF2R55KrPgeHnbkBsYWJj3M6yjZr9h2h8U9TxpzZrZNb5tzE1xzrnmpdAdZpd7AgS6w",
  "key7": "5jQ4f7BFFaWhB2oFk7QxzySGq64AqfQQ6XmsT2k9z3fq5nb7mitLvHbRtcMSgBuACvshNRZdrKQSWT7seTyx1izz",
  "key8": "3cY3FGj6KwrtdMFFGTJNnnoH1bt6M6g9Y9i6Gu7eopVnj4ViqwkWXJbLnBR39tZDwJA1ijyJkcJPcUs31ZuviW5r",
  "key9": "4w43jhcCXQKnGo6B7gRg77qXy2EBC3qjZuoN9PCCv4yq7S2CSNDkFSmjq3CNWa7erXci9o77EF1BtWXpwtowmwoh",
  "key10": "3D9Zriu7W3j6YbYy9y2Gbg7bSvbzfecZU7ND3hKSVE2BbU4U5UxQR7Vic4Hwm1cr68UsZ4TxtqbuESTGrpiRPqeb",
  "key11": "3yXXcdryzFyjhMfnsh4TszB74iHLAx969cyw3FpNDA7ehyFrziitm7BvDUAyMjXvZrYhWra1uaEYyRzrt5meiBrx",
  "key12": "5zh9N5CBzmp9irueh7MAFtuVjR3rJKUVjvmxUP9se5CWhJusABNXDiyqvs9xannzJFSfvxfsE9ByDkoA42NUPJuS",
  "key13": "4TZdVZAHsmfZF3TwYi1DxzYLhWP4F4AhS8pJLsYhS7e3b4KAqwJ56usdVZ5PCPK3rrrLeZtZ3D8UuyE6ocGq5ZJJ",
  "key14": "4EMP5GQRGjpvh5TMUxvrJZLn7jsN6bpqPJHx5fp52A2HdnAxHE76nwuDHNJ1TtjmRuGzfMo6zrzCwSRnFwUximxZ",
  "key15": "534Jg3RBiCWorocqBUSsA3NGg3VbNHkBo6zgyvuY159hShxhh8f2ygQdoSUSHVTyYL7nGfbzyp2pRAc2DoTr2QKK",
  "key16": "5nzf9S6Ebybcmr2oXk5X9HEHS7tk9tFaT8M3kUbCHp8esQLZCg2VgePW29UrSbo7MbVmDmnCd7whiMCdok6DqJko",
  "key17": "WmBULG5cNRZwozKT58KDvHG93MkmQWpEZ92U8hsqUEJwxMYr6nqJZ84grwM7iqz1jiNysAt7bN85L9eaFiPpxSX",
  "key18": "Sj9yXSE3WNmnHGFafhyQMi3DJ96EdB11sZ7LB7GmSCfjB3FF36w38HvrYYdTTSqWfgonR9RwuQMRYfJz844BtAq",
  "key19": "5doQ3m1oMdUoGzgfPMPmBcvFixqyre4xU4Q1me9HduNumLVsoEuYBaUQGB6UPR6wftpL8FAqA9Hw4eVHVd3VSv24",
  "key20": "3TN2ydoDtWKuy6KwmghYQgJohEnwM6ySqf7aNxet6Dg2ZfZwHEZJvJCkWy7GMnPtd6Xh3NUyeyqwakxfy2aorgXn",
  "key21": "36GkrmdfYfLJTjnaezrL65UxFftSdtp4K4LsEYdrbpR4Ny6ExmMbs6BdxeK7grZeHHYsim3fUSuv5uKkUFkV8h3R",
  "key22": "47bxVbzV9qxDWJDRjorqPRT9Fp7y3pmwnLu1iaJgupd9GG1nkVnf7u6Lywr3nkGgByNLKFDCqu6gWEF199YCbsWm",
  "key23": "4oHyAzYbum7nT6WW8BAL4aDWVziiVnSqRxn4vwwfBknVhSLeBkgWLCedYsrq6dsZEXrJqZqHdogCJFcbKsH63Sq5",
  "key24": "5vCiHPzP41PQ97GcBmSA4HDd1PBy2qPFwDum2eGHR7yLbALXQSLwUPrycgrAGGHBhgfrRySFca9bf4CESvNQBFGS",
  "key25": "2W4rJYDZ4Rt6L6wi4ThnFRRDA8HNAkkuhjZWQuQGFWvuDCC86YnJYEo4Vgy4RHRDhEqo1vK41NWouNQdrKwfh5pU",
  "key26": "2uAzQp2UV3QNsEejMmLBM2BT7yRwzcZkuV16FFrT3Wc1kj76eXvyvY1aqdk7bhofu3JVbSrSA4M4th3aCkjGF1mX",
  "key27": "4QoNb3X383jw8sYekWD6sTgkuFQZoMZSJqc4inRPjSEVaR3uXKjjkvNEUetHQ4meszNeZCYPSaMBLXoVt4NCnm1w",
  "key28": "2a2X7z2NCFLbwMW2f9kxjzj2w46Cy3NEnpDJc6hLSqYUoBuJwy8iP1TynSQS3RKWXiGENZfFyGn7tm2tPrefTjzY",
  "key29": "3YppPSYLhMUZZWXyLWExhF6bqQX9xvttKdchdf5PhYoAJeg7dVkFyNZTsHwDNBLDuxcfPy5qchbdoLbEwXQww3uP",
  "key30": "Qwv9vzxTBoCqCwyfMvk2YnEVgxqrTzp6oLRrZ1yaU1o7vUi2BuMeyzGK1B6LAx7CkxvBm64GcJzQNB2PZJ2LDre",
  "key31": "5GG8oCpRZS8RWXxzMxthGCukUajkwte7ZNJkHA5URuFs5u7QNNQuL94MEE6uC7ULwZpWMCfxSuEdHmSbWd1dYoEd",
  "key32": "3BqPxzQnh8Nm6KrkPbSBLNELDkr7itqS3Qnb9Ww5HpaSfJY31SJTVK2DYBPSD9YjDJRyj9ak9MzwdVLhbKEvQJXK",
  "key33": "5aasfB6MdGLnhaVywn91xg5mWNa5Yur1J7cuT6LpwcgaBPmB5j35G6sGe5e6pzTjzMTDSA8hkn3nYkgKjCyro2GG",
  "key34": "5REsTL3LQ5X4BXhwbQ2Nc6nQjjefXst4anm32dFjGes6DfR9rBSE9saNACCKPpE8saqcZQUuaBrDcJYB5HtEjeBc",
  "key35": "3imo9ELMW8Y89VpZ9nnFZsBTqA2MSp16rjnNARtiKqXHRqhro4i86wiHbDT49u3RFkYhrnetJob5oFYWmPo7YV6c",
  "key36": "3M7iWsUHuqJs9HNX2cuaCToBoKPFyBEM51aKdJZN834J8yWZMdz7Wnv6Sk6c3Ledb3CDG9MsC8sgENnQJbw6n5JD",
  "key37": "3kUrYwpjVQfcR5LfEuRvW7rFqttDbtcHziqBdsE98V2Hv7eYXoKwqjEC6Tfo2SgbaUiydT1fE3PLrRsVzj4q4tjx",
  "key38": "44xZa5VZHqeJjne35eBLB5AxaZvystdm9t8PCBMqzVMiWJQwJfLMLheTV99QpxYf9dfggU84TyfoBzFEuR2EuntJ",
  "key39": "4zXM9tGvE6UVJavbjTQKqGskdm67PiE8rGmg8bHwMm3AAJzVVGLzUc7nSJAQYJHaketDJfUR1X2j81XFA8ctuYK",
  "key40": "NyKBQkaAwb34vQuj2ox4vq7Grp3JiB2H6ZueL5f4PTbkkkoJqPHTZ5etFEt6aEL46kSouPqeUfUxtQKEBySv4Z1",
  "key41": "3RPGvkaXGHwTUNeG9pWSGoCFrw2JUXT74ktQfJcboNheqNF1Kax5oDKo48wXJ25NGWy17Homf1iUmoWMpJBi5yTB",
  "key42": "5mBhA6WXdnb4dxNkaDbdShqVsWPHRtUHUnytN8YBzVyNRNf45U2puRxJFdiFxTMqgAxMqnLVYo9fbkD2yHUveEjP",
  "key43": "4BkesyLQ5Ri39VfzBg5oV98p72hD6PAxgKN3uMswahtjeEvrJa9sG7zbxkTuYyjrUCttBuy5Ln14K7wtGX6MQdzZ",
  "key44": "Ui8psDe4hvmwFyoV9jb1WEU1VvNFLt8HrGiwpLFgTD4wTpfcPvET7tAMwDgmTq42fo5DmGNVLN4FT86HcB5wsJh",
  "key45": "FErXqXYZYx69obPaDPDjU3S6vt3iqmqBWF3M68CaiLDbhfdmgYP3fvAp8PW7d4CLJwcdvhzga7qHGyFjA2teCdW",
  "key46": "5jEns5sxbHTrR3QujPQv6JEeWYvcoWuqf3BdUrcbW5EK3L89oHP6AjpN2njG8mVmGF3ajLtkXY7wBguUUfw7m1Xk"
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
