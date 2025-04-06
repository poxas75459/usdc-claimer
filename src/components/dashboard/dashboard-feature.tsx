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
    "25FHtaTPaZjbys8Pnj7wSyx3oYToC1KsftzpDpqEcj5GKUdVthqn5RH5KF2tsamz9Fty7YLj78WmTWBpQzLTCyfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hTw1rst1AvgouA8ueRT76thFsYyJu1fRcRCWTG81BugsYiXNTBpsFx7qfXgbjZvqXSPCpnsn4yuYAb94buca24F",
  "key1": "4F9TwYXm94pNNjBPeL7Cwe4aZcWcgPNuKWihwqA9qT8QVXf8Zzy4SeJn4wxz8xmx3a4t9d5LVcfNRtNdpLRMFZXq",
  "key2": "3xAS3UisQR4i7xPzfPRqsLrmAT8Za48eqX6daKRm4qPWm4RcBVD5ryLhr5KDGxXbJBbQa3wXG8JxUjBAtq6FZBav",
  "key3": "28b9F1AG6NgBkw7Gs5B9rrPXEKkYZ7qXmKETb1KZzePPzfNcqZzhQ7HiYBsfJSeutjm5ozx7NTUnEhKYPPNXEJhS",
  "key4": "2oPv7AtEtRMNSkQFhZLsQ3dgVRDgZFWVvHQQzcdTpLnUgPPGLLrfSbFLSY9iLJvMr5LWCKSY3urDULtKkQXM8bzX",
  "key5": "3mLS7teAf99KR1poy33oTVYbbYwiXhNKh6c98avyhh76MHfi8vP62ZQ4WhnC6Tp88HPLGuK66AT1wsSMrZ41Wc7u",
  "key6": "YtHCA2gqwkHPbrjLqwSfYmWaBcyyoXJouUR2APPFZyWoLCkasqEmroZBoAouELHrgmBErXYyFQS5CziVpvmF764",
  "key7": "9TP39Ra5YyTZa8a7fueGtch4L2MSvqiYHafKN5Mz94SundrtNsmeRHjRfoLXsbXwBM5qMedhq53gSrcV8V3gSK4",
  "key8": "3HaiEWntnBUK1Zd2kSaoJtnMMsWi9DtLiM36YqHbfzq5g9tNk6sLWNTHyW3vKJeFjjoY4NRSiNJGX7AxyECZckHh",
  "key9": "3bzJ1AsZDHry7PPrkxwgN3yQCDE6s18EVcsMmrERcUk92Xrfur8XRo4EP9nFWdg8BoSqU5F32F4dbQWGBaGjPsub",
  "key10": "4hdE2whkTK2rw6imPQJu1bazi5rkNZqwp6nJfNRuvJ3nZT8EEeE5whWyaGp3c2T258ZtSiKeHL7cJiNYkyhnPVCU",
  "key11": "24iR9ALtZjTdSu3hwMr13kNTZuKeKSDkZoLuBPW2XvN8mNuEY5Jbpaw89U8GCYdyiAZ31SqXfd1quUtEfctHVzzG",
  "key12": "5mnZRdt6emrDKTVwvFfKqNMd6zs26ys9EPHjttu5fPCTjm5Pedjxn69y1FujeMiLzxjyhPZoBss8vLyzvWZdqq5h",
  "key13": "3pE4J3J4hQBLNyfipFboVY8PMhYa8Gu3fYRSu73GPmRAVyTyHAHfNe7X7up5eWPYe6akrAZk7XqXhmkAs4w4HDnA",
  "key14": "3G1CxXL2FQrgEjf4mXFKmwHzx3iBYq24NHb2rGG5AjxWDW3CURcy1HMxNmWUe2KhB73HH4mEqJXuaacBHYqtwJFj",
  "key15": "HjRzhoENqfd85pTYPZzdKQ5tAWZjMiEWCiWD7a8HNYgBT4F5Xaqsno45R26ac8QBwvPih2uAhEJ1Z2wpzHAjNzD",
  "key16": "3v7n3FNoCt2DJGKooqLvXrV8y6oybFfmTN36MjdCdux8uhf7DhTPjmuRiPydj3dBJL2P4dGJR9BweuQCnMsviNaF",
  "key17": "3ATmYLgXHeSQ18JmHzuig7us4fMzBeSh2VYepmivzyJetkmgZBWpPYA72XsQVX5fdJu7qqSEmNaEY76R6RyVUdAx",
  "key18": "3W7e1gGNGEd7QafT9XvEQedRk6HeiMEhdzL3yyCs6e7vYYC48jv8swB2CPmwvAJKh17g1ZUP3kP9FXPvcQUg7f43",
  "key19": "314kjj5fA1PjrtJKyQqs83NfvPkk35RVNGUrE68bZYVS3m2kPeAZwPssD2c6EuUUtwRF6M42wPkjN5DpEqiZVriA",
  "key20": "rEJ7SLizMmP5tv7Ye19weoFTurBHRfWGoTkspcvwN37mUNjpCiVyHj1MJfkkwzBVQCLnec6SNcfX4bo63T6PB6V",
  "key21": "2vX4BQkqshowBm4ezTffyTp71ip4TzVNLZFf1qaWcn2CWNCpxGEJTmBN1ywnkuF1DAKZyiP54BWFRXHYn7TquYqe",
  "key22": "TaAGGSqtSvau4hVXVzq6FUWwgPUKcv6PFQanunvq7F1BPB6jBmQAbavX47XgDDoq9vKZjWbf7KCSy3o3F9TBgwg",
  "key23": "4BYjhC7ijpzTgjrSLcN166bbXDofSa1AAg1HkF7fsCojni1i5Z3zjhmLGnQuBAv1y9QsksDoesendKJ1XPk6PniA",
  "key24": "3atq1QJWguA1QkPUtfbMGcdoLWNEh4PZxaSsArS1tXKsTsWyKk4HZWnBK1m1uoXomth4jyK2NR7ZoXD1WzEQTCGM",
  "key25": "5e1ioohUE2GStvA46V9kU6v2wa4dUnWC3AVzur2fk5KCJLsNtf67PWWMnVbThw8bae4wjLgUkTTyRqRHDqCq7bCb",
  "key26": "3wpDK4aDWWfAgNjVV1Rau5CjtgzpPcCPCH1EhBvbUvYHvXCSmhMC3QMNUva2jcyurvL92f8cFW2hrJYsEU68g66m",
  "key27": "5ukJD4VjDvNFk9Z4wwEi2GuDLQhYzRPLjfypmW23cCRdiV8W8ak2upwDmaeqybq5uM7fQNGU5HhRhSWujAAbdfzw",
  "key28": "3dmvuC3DtHdFs9HJDveNQhpKTUcD6ThMYMcEjbufZZRCMhiFaxSrretRnCZkxbmcy3aXZinCoYy4HkQb8Nn4weMA",
  "key29": "2Hq1SCd6XfBgkHU4KW5hmZs8RjWiFStgxbKSDa1kPFtphTGUjKTmRJ7X4C75ZrTbCmztxJkisekPyVinQyJUqE4d",
  "key30": "1Q8Jfrz9UAEevhEKsGxeRSb4Uj76v8sUo7R1GtLuUXc4rSXpt4KMSLMdqgbjZRnbbczyTrHE7kdXZc1SrBYxEFf",
  "key31": "3aeVjAE5czZei7wJ9RTgcX6skismQM2nCaJWyNHZ59akTCsnsBA8asHzqqeEZFTKHCcPE5WRZauFdnor1TAbpSjQ",
  "key32": "6GUWy4h32o2mhKRXNrPUsuweehsdJKdGw4eDVSAJZmQCJXUSJZ63L3NsY6QdmtSsJhea2jhBXaAVQUTkuNnn3C6",
  "key33": "2y7V26gJ8EJAHtnY8uKWZQtS9KYNoRuDJuh11AQUxBLXWQschRaxg2cHQ6DfnYM6tb31YJqJ1FyMHb6UfnFqH4p9",
  "key34": "2hZqUw6CM2NzvnK5qFLCxNt3PvYcdpWeTXEsKwx6u3J6Aa8KXLKsCpEHuSMn58NyWEwDbquyekvDUMCaXpDUeBtw",
  "key35": "4ESgZ89PLZ4omvFKpLeqLrxkgtVhXHdEPHRigC8RTtLUniyLJvgnycFASCnooQ99Z44u23toaUocCNkoQDqXHGFe",
  "key36": "4io4FjFQ49X7wb4GSWYDzVWHoMXVUPGFwnKDW33U2TKo4VTEz2UJf1gLoTXq6NV7MTZE7svvPg3hHtFosVU2wej2"
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
