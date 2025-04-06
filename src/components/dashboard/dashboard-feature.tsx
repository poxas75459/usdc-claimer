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
    "2mcnxVK23MsuYFTawknFsW1HtDY8S4Cd6XZsEMZbxpcaGy6VgLqSm7KuRe6jtUsWP5HbWM5inSkvE8ZU8pmPtjrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VzQgtssL3SQgnZqzAQZQBK5srfs1eoawMgmC5jpMUtMwXTim6z1NSkmEcdHGzn61Pz24srgjHHPKupsYN17Rrfw",
  "key1": "7chfdz3vFeH7pzRjrJBvD9JFBEynkqY5N8cFAWh2Acxm1onPmpQLRZYvHpqLjdwtAoHVb3Wtj4Tbo3ZBWVavjUi",
  "key2": "4o67ZjgjWn1SdJLRqHRD56QsT574jTcFDykD6x1MDqii9mbkTUyogXpAaMWL46gu6Z4i31efsABvSGDnULeohG8M",
  "key3": "3eWB1YFDKTovczJfVzu7orqWsXRedCFkUrrt4jd55TpbQVtixGBBLQUmQbMLmueuygUzvYgFNXFDfP8ZXt4VpoEL",
  "key4": "2JSw8WfTn2vJUUW46RQ3CnvdDc8SUdK3zT4tNnr3V7hk94xH4pWXpsPzvNm8P1FZNauMAFsLbiWrfQb6SYS17q8X",
  "key5": "upEYbwKxCAHshpjmZ7uj7uKhBTUEYqn4Mgcfp8RJt5tmtsnsBBwdvCBj6Zcb3Yj4PbNWC5Y4FLdn1Wx81e9sxrK",
  "key6": "4LoGrwTV1ZaEJTA8wgbVBMAffMk31jeZJ7xmHGLzMBWzMD8YxQK5MW27DXobZd5DDY6dKAcP7wUjJngqtVDWExmg",
  "key7": "2X54UWWVNJxhNKCkQfN6KRdxp3jByshq5ASVgNHHpvkBC4j1wL6ywqav9GXrR7r1RPnyx1ntVz7nNrysrgUF28Rk",
  "key8": "4xgs7uBEybY4Tfkxi6vBmQTyoaYJmLargk499UgYP3MQWdSBnpq4tao8JU7eaZjBcsHjMq7SyMy2Lg8mUhZmSeP9",
  "key9": "2hH1hax7ZXcTW4mAHNXwus9Kut2CCMxyDiUBgPwB3YNJKHm8jPzis4Xyd4c5HyebVrvfd3prv9mwaNg7BMNQGA1d",
  "key10": "3gG47P9tNLY56M1BVvCqBdpgd5vM7NXvYZJocVkgi4HybU51A3oC7wfioVtDMET5d9XPzhvUCcjQK8kpAXhW4ALg",
  "key11": "3byfkumtQdpTnqBAiddZAokW3eqUrXygXBU44MshWN7grAo3Tdm3LBWSm5tnmb4qMT2n6Spw6Ry2pXVjrja9awAP",
  "key12": "jV9PJrhHNwMcEKE1zp1uYtxowaYyt1wzpT4iiXFVS69eVsmPRaBuDFdARWpkrAgixVK5YX3asaXtyDfDF2EcVJa",
  "key13": "5DqgQLER66kyjpzuPRneRDvBHt1tGsiWsu7jygQ5FiKKvviefmVV2aNfE5D5ZBnutgUtYtCuDdKRwXqaKbx5XC6U",
  "key14": "5kWzbo6sM9Xee7B5sFxotynzKgYxiW5Fmc9i9DLbLPrVoKtYSTxbqSDf7mTy2rV7inNWVQPjYsE4qRP66tzxG78Q",
  "key15": "5eTMV8xtujqEYtf6cumxspRauaHgjmA8vzpb9HQoEauSSRpPc1TKmyij2pYo62FGZJEFBG9xT3wyLk6FKYC6S7Jq",
  "key16": "iVWehTp4TVPJB52q9bF1shjEAAeWWnXP2KWPoUFCtV5Sw63Z8AejfTCQPh4CKGq65n5RNbrwjqXumBmNWFnEeLf",
  "key17": "1BRoXEgNss73sbwcReR9NLiMJJQPefJbU75p9qCUbopJtR8TdZoCKuBpUcXweFRjsspFVjmSqptq15nAuJfemvZ",
  "key18": "DMfM5xMYoi3EEJMdc91S7xwVNBH9DjYi3jqTkS74ucJDWarXEKghsQaP5se87Ef2qpywNJhgt35MijCLG1wPvR2",
  "key19": "5iR7kG1Yvcbn8fPaJ8prz75xvdihva9bYbJXDmiGgXsSu91r3a2fhdioE2t6ZM81xD5mKB1K92PnGfAeT5i399NU",
  "key20": "3VYMJPdxi9qrCjC2xUKyX2U9GWtJXigFDK7VwUM1GcHBHpeg6C8pruadYMnhdfHYD2gbofdnyZdbpm3rujgFm3Bq",
  "key21": "3HdZJQa9CKU51Tbh73tH4HRfEGS2PTdr5SuoM8CqjJFPjszY4oCvk9vJzVWHuqFqx8h7gyLSGXEENQxa3wSpc8hu",
  "key22": "52S386AYe2g7qpf3DG66yL7E2EEJsdHPTeWQadg691CeVw4gq5uPS8SGA7vCuE1W2ERRv2JELXkLr2PaTNsrQ9hA",
  "key23": "ChkcrJdk6aVfgh52aduHUhwv4aqPnug5BfBqLcD5XyxjdcPWULDrUscRj2qii1wdy99bU2jzzZrrNjhHPeJ1F4t",
  "key24": "4oGURCLsQVRUuNgmXRiSkXeGYjNovbegytdoWBBiCRjPSzADRUKA2urHddh8X4Ra53bHPKrBwwFhSsRjrJ2mz2mk",
  "key25": "26tCurYEMkDMTGEqzDaA7LjNRViqGUK9nLsvRC5HEsznD5GpWFzn2ULGGdBgHWQmaJVYfYWa71abKpHj49khpXPz",
  "key26": "2GzRUbZT6oF51tTVjaiLPdqQMbU2zvs2NREffGCXkKAPcwpwtRzmQ7FWjtcqKdntoNJBTwFN9i97ghgG7kjqDCTB",
  "key27": "4QW2wj9CtoUXPc8AZHaWsSHimNVeAfHvYnRoh4c4ctz2zweYkb9y4qPvdf1daVaLxkyu31PAdqJsiCVFpSTnPrdJ",
  "key28": "7TqFnKrgTdKbiCawWpwGaK9pP2hAUcTSxi5JnZ3vsx37TS8QXEA2oiGpVs7mhUBV61NPXt7pLdRqcxPoqXbg1Jf",
  "key29": "21QpN3NXX57pJwup1dcBgNAvEors2wQiYjo9CR1R3qrjQWP9iE1bzjJK2GiZQogWjrhrc9k6ijvUuKfzUGVD9HjR",
  "key30": "3rRaP2uVtW9oMY3AsyexAMnKVddjUHT5gGyh9VUJfqPcGnmxGK5NTLRBCU3PKFShKzgMUSPVz6mx6adbxKRWnGDD",
  "key31": "49dQ5nGiYmUt3Z8DdatynWwk2BtXmSUyJJzdsPL6MCXcwTHoTyrbgBHAXRnAsd6CEFfy6JamfBQdaVSp9zSH5kc1",
  "key32": "1oBFJygLcZ7qdzjpWQYqr24EJpeVw4bjokWTM8FZb3UrwvviZhjWvTnR1bq6uXRBRxjB9u2wwBT93WA6Y3azSFL",
  "key33": "EemfzogNJJLCfePB36gFfzuGGEjKH6k2wyWxBMK4uVd42TWDmxrrg6ZgWi7ny1bF9DivGEHtEpDczamwcXBHjFz",
  "key34": "41nczfNZ6M35ag3jyCSizq4oJ5eWasau5LgSWtxuL2n817grSa5onSgc1m9RQJvsvaeA3RLPwLTdaKhGawEYGKX",
  "key35": "4sR6eocgYhTvjX4bCoHaanHgjWT7pXKZrMsNZtZRd6G8t4vVPM1ypNEGq2tkmSJojoo8VxYsSadZSTMJvUzBehfh",
  "key36": "2nGC2Zm9hvKbbSQUeghGoKLiuzW7wvwK5CQAh7MusN5k1LApmLEgXzowCzaqH154jLAWSACUDDvckc9WxChzACPw",
  "key37": "54tce3QSiX7nVs6E89wpWt7XFukXVf4z1RdJuXQ9Lq9Wk47xypJ2cpNAMMU5n9raKJ54H4E2CL952yynScGij4bc"
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
