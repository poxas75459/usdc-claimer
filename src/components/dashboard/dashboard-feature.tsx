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
    "oGqx1a5frECkhNmR1FKdRN3nqGvDVfFf4ivtg5ZL67S6GSh9moy2vXvVPxG4fwVZB6F3MdiRTtZVuQKB25mBFT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QnfoEfMTZey2fa8pwakvtWtRXUZfcB3zi1ezfeBRQFYrsfWHxCnLAt2zo7EUXVsavQHUWy6LGtn2uCxxGLPPNm6",
  "key1": "skC6TaS12Qm1ZKK9G4oqRFnNUpzV6UVmtgvuRjeBd8c92mzBunLjUZCrY2cbveKd7hdHemzv58VSHkVvh2b3sGt",
  "key2": "3aK88BxAfD7xQGPTmggugJv6zEo79dqBFdHwBBaPMmExjvSB7xhR1isQcXwy9Pw4UqUNLQXPghmhF8WnfNWcW9Tv",
  "key3": "3yacGJ3tAULJmHzfP2bQupPkPndBQ3piJxHarea8EfoD2c6ThiMcgdSLwYRz3sjd3VZSsKdUSrJu4WfXSWYwnVKP",
  "key4": "3FVoe4Gv6z7t4BzumuipxKcvDb9bk47WDKocTFzRCoowmki812FMif6NGd5UTcpMCuvcZyX4zYUYBTMU65WNfvRJ",
  "key5": "be5pbrnG7GA4uyKwe2w4sBmXRettsht3ezWZA9f2eaCuiML5fioDQB24enMqrNCGau752jkjuKMN3CJgrYbscF7",
  "key6": "5ERFtGe9hC2M75d6Z2h38c7Gm6XG19VVzPBCTwsvbsrtzZYFhe49xhBwpd6B9HsTcooaeJnjyetfG1Nw8h7MeqPW",
  "key7": "3JwSX5nqEUy8YVsM3QXHZ1e91EwqdQ7nmySgjcBaTuXdcgqQjqyhoEKMYYMxpUv4mCbZgj6BXaYYpky4Koc3XGcc",
  "key8": "3EuoCoUEJ2eRWBTZrAqrJmcf9RWgbnHZRa6zjDvyaCmmXawif13qpbDD8LQ1hSzWcVj1QZrHEzfDiicvZbiDbNJR",
  "key9": "2ANf12iJGhiv36SsadTrvCiDCaiYyDWtkmfX9YjbchHdNoFAqHLSugaybqwcA4ZZt1LFhV1gRLu1hSY3ogKCEkVr",
  "key10": "4asnQdZqQW6vZ4HRVQAykdFWBfV28Y8JNtLDD9RoZmvUAmK1Q4PRR3tVqgHU22K8imcKoD3bCFAcnpYydZ5Fcutu",
  "key11": "3QKATCK57gTuB1M6smEbmt7hsFHBGj7axiVp4pwcwj2XZEt96bUn3dVbbFYZG2YfPWSteb1VgrCJR9RmYeuYaJvm",
  "key12": "N6ET2wnb1C2mEp98TFbHQSfc4GbZzFZKXwK9ijrwDJeeVAjATuzP2kKub77DPov8t7K37c9Ya4ESxLveLPsFynE",
  "key13": "3aRD6PNMHoDT11oinWdnMPnQZFHJ7v4drGZtKYz1aYtRmACZUg6Pdw3NeKnZXNs3KYVj1SgGzNyXjC9yUwP8VCy4",
  "key14": "4Dj64HroYcRTbw5xrPqPK3JsuGJpMRyfD4azxkubXiCpnnHX9eFNZDkjAALWpS8Bzo3pRxeWjK78SF38md5FQWhd",
  "key15": "5QX9ttjRo8DUzjpFUfykJmVj9vuX6vGWiEf82MscJbaVUWeYA2XbtgBjgijYfVVQHBKwaQmXPN8y68775ZibVYT7",
  "key16": "2jyHVgF4MtYfryLWBR6Kr7Wzx1j5J5iMjdw7TxyKz3yBdsCNaSbyYMTj156anRFujJu1W4R6L2vYMaMkpFsNYXmj",
  "key17": "53pNK3bpkayiaZerjuqzhEb3xBNXsEALAYcMFdSLE5Zx3oQaxkYjMwzz2Q2mbeaD1eY35Xpuk4Qtp8Tgp97bti8c",
  "key18": "3rBrtSBCZ9JYoas9R6uUaKG7JTjDuZN72sGRZmkmrpXZs5kbDoD3oHnSUM5L1FKsmzSbihbpTR3y9BewQmoTigzb",
  "key19": "41HizBByfgVTFxoXbeNvyRivPiziM427aWGxR9wqPeg89355q6T4Z4NJUjB6iRdGiE58Dsb64VXRtnuue76gpZ9B",
  "key20": "33zap5PhvFwiJjniwdqvfdyTZVQP2CrGkGJFrCr57MqXf9G9hhYae8H8CWLC9MuJJ2WAZ3ayhaEa4sPGFnaPChZt",
  "key21": "4hZtR1BfqhunMRdsFw6GSWyEZeCqVBTxizJPvCA2auh3LYp8xKcA7xgMwC9oguZxuJwVbNQw555XupiaQS14GaUh",
  "key22": "EjrodpZe9rNr7aUA9zMWq59i3hhGM72cLwe4NnDtkTDzfbjW1NDQYFv9Ww6WPJwLV5m3qB5LSPTMTVK5SCx4Rt7",
  "key23": "3MmbnW8RSPrDXWd7xMhpw1Ta4WY1kQ9K4xCt8ugidUdHkGi9wwaMJowiBET8TR7TZSUvMpsHfbNwvQvBdZ3XTtbc",
  "key24": "2umqMhug4hdY85CtFaXrAq5jZgUW1YoK8J2xQRhpZd4PPnRcewLkVTXFQv2x7225WzDBorTYa66f6Yh3MBe6L1jH",
  "key25": "2BF7uKMRP65Q6rRic9c7aYNegqPMQQR4XmGfbom1E4j3KuNzg5VFDDMYta6Y9QEggmCbCcugGwW4wMPEn6og4HmB",
  "key26": "3qS5YY6F3p7SYGk66J3XG8sMPLuLq7gMBPxAzuamcTbGJWhvDFycLEHMawaGAq9LNonnBb5fkA7ZRVcTWsEQkFVR",
  "key27": "2Hear3Zs4mSfKUASC538kHyLJP7FU2bfwH48wfLERGTEr4ja6dXjqdHdQYJ7HYXFMRrzrwBzV933beEy5d1RmcdW",
  "key28": "2xd56dyCpRFwUo918AfZsaBRaXs7FQercBSSokhwZtN5xdLrWaoDr7PeskaJFsC783H8fBX9mafc8ik5DEK6155p",
  "key29": "4Gv6PmKR99XVLqWEVky1SwLSWjMxfFBkSzF3fG1oLa7YLXpBgmqr9G8UpLb8XSHWtxbgZ2VzxMmcPLTVjKWMCKaL",
  "key30": "4FCSZrsr6GK4LvniDHVxivQ1Sto9qLd6ok6x38HogR5SYRyhAYzr4NiEBgo9QnNv6yzNzm4f811EsVjNnrQqHWyV",
  "key31": "31zsQC2NZ2VS2rudBRk8vQj5BMYkZJqJkTBwyzaiQanxx8doCeW9j5NR1oAHyVeUCTr5Gdm5atbB9rgPDJ97LQWo"
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
