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
    "cro3V3d78MQLAioTUgZqrG7g1Kj8GTDrihdqSvZGrs3C1Dk6Ek85iBUXesoU2Z8NnAAiFbcvAZuiSZcMdUhzV6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zcVV2HGe2bdzDFVgz6NEVHXBHmvCpTQB9R6xE4F92gs8MLwXKHS9WzKqh7LPGwj4mGzbMwnUxeWEuxtUJPJDssq",
  "key1": "56cv6y7j6VdQP5iDJgdwGQnLJVzNCE43t8YP9r8hR1JwFBsfmB9ygfVHaoqk9VVAWjaXhLXRGcX5mDcgruhJoH1L",
  "key2": "4ojj628F45p2MQASQuASqUQ8v98jcfAUpn4DyZRiUJ84VH6haQ3VzxVDqZ6aRRpSGAmnQwifJwpbezDQNwB1WD7f",
  "key3": "UhgfJAh2YNhGcmuBknUJZc9VurstBFH77C2mZNvginmhBpkHo4GnSHufWfCnUYyiAnD7HhsfAUnRG9GA2BzvE56",
  "key4": "ZB7fgXCYwnHocm2GJsKYAg55LwctASvLoYxUA3uq5PD2TXrRvUswuPmvpTLjpYJSgpLz6EDHdAYjbyzDWMMWDFw",
  "key5": "5fDjMgD25RJqAv6jTSxQzWPtLujuaoht8RST9wiqerMsF9mTgk4PKjFiLh1fC3WyzeK8JRc6Pb6ngibo9HQ4hzCg",
  "key6": "2nf5NhMw1HmD6TA36nRoib3GMNm1zTpXTyejKpym5a9gMWFHtrqizgSnELuL8bnWr6jJAFYQWEX6CFoutmXZ2Axx",
  "key7": "4CUToPqPoyDSdeaksLByofBcd5YBTABCMcdP4PgPoV88JPWDXnVzcYcHwFFxkC69e1aUJXhiSHdK85ZEXF1BY2JE",
  "key8": "5QihNeGe9iQHDHLsv1PNQhiZRDdJYpFrf4Jo2ECgVAu7vFr6vbWAqsTHzKHy2teDejZbAZnyhkvC4hB3uofAztLH",
  "key9": "2kgsrdkUdAun1eXm7jpPqiYFExwsYPF9afudtu1s564Pf5ndPZ39xtArdHSTyGzhyT67wMWBHh3rGcWBgx5ZaYG",
  "key10": "38A9W2BzCRaAcLP342WbUegGyRVFwoS3Zds1xWA9SR7WsjkMcxzQD5D2PBziM7EJXLyH4KeNSSQXaQLUAAfNNz6W",
  "key11": "2FVJ92uELpPniu28ZcBPVWLfWKY36HrcTFMUKrpwz7XAv1MwnC3FfiGinqSpkGzLQf7k253Jnpr1JKk2ZXpbkQTC",
  "key12": "25ADkzrxKFk63QULb6jC1McRPoWybYGocNdfGLMmYzJA3Zeo59HKWXqgNhcYjMubcoHhqwWobsafWQL7LnDma6Rj",
  "key13": "387mQSjpTK9YBNSaWS8Di59AyHDruSHNAtU8SHBhioVMS2HMfP5T2J18c9yM2DjttinmvUhYC37hkbm2N9TKJFNg",
  "key14": "52GqqLhjvEbZBFC2p7XXZrpx9huLmNCKPdgWe9RXHhJx2tp2cx6LYYpv7i9U1zoTJpCUvotegHSpqV9SwUq36hpe",
  "key15": "27VV6hHuoqtBrVFcaHTow3wadWyzGkK8xkMgk6PJ6mHFoWegm8ndLsPkv2qYzdyxHifvwxaCVBYrCbjPGymjprk2",
  "key16": "2hAgyxrLFxudvzF4bFG9cygNzCroZpSVAXA5HP5u3pu4pCwbvwHHGDvSWLumpghM2Kn8Kb2ymdhXFS3KgwME5uRV",
  "key17": "5GrELFoGyaynFjC3BMUX5pkggYCoZ7CGzpM5MDX3FMWYHer7U599MDUo9aLiuM5qjwV6d5FaaN9bNcfxZgQGD7GG",
  "key18": "35QCBm9nQAuyAwiFrsLnCEo4so2HXrAg7iU2qRYfyYhhKFrENbcWMHL8qHkQTW9jwRJAA2SnSf4Lbjd2rPoyTBS2",
  "key19": "648xuPkeeqFzv3BBMSMHb4oMYpPnKaPpN7Zm5HoKWw5Sg9MqkDj5iY7RHhHKCPPDRUiTs9FwL3dWdnAB5PEf6h5d",
  "key20": "EfYRJBr8QEAEGjjddtydQGtTK52qdZqhJq55pyqtBYz1jjxiWhieMtKYdmXCoqmgCZD8D7Dyu6NSYi8tZ8h1k2k",
  "key21": "3GPVuTEdRfZZHy6ThY49vfJgWPXwxUgV89Ga3fxqbu9yb4kawem5Z8gJzdwSfLCGY9sDh489pf9HVD1jq5aMFq8c",
  "key22": "5PNy4vTPtkpvD4DgevzXfjapxA6smzCtpTa5kuuw5zeokEoq5N1TZs5C4JyVm82XJQ6uF4t31oMMroSutkSHsQGN",
  "key23": "3fpoSE38Ho5d1SP71G3gbmRAUWD4ooTV8JorSkN7CWYjrUinDKv1fAa64173r9uGB87TDB95ggEnjvuxj18WXvUG",
  "key24": "7GLh1Y6eHFMxU8iGRvB864Xq3tW5oLX9yNwN7T1tZEEqstxVvpvJ3uDGavVb1BobUdaobQgGiAn3spxQScbmnek",
  "key25": "2A2n9FwGJQgKpQWt3V7xtg31reD5vRxC8jH14x2cWYdgfeTVk6iLZ3t99PN74c7pYF9uZLZg1fHJGrDGzKw2f3Zn",
  "key26": "4guAzoBxEFx8u3Zkzc4UJ1C5YNAASbeFiNsZrAFyCxBPiBdhKFAXw3JY3Wa4pfHoFyUt6H5k6X5XhYHL16AKdmD7",
  "key27": "51n9mTDy4q3AMUiSQDzL775vKsAEPFHgdZk6TShBbH9zsiaZV4J3vt2wUEEs2q6EYTWz9czhVJhLko999wRWEunm"
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
