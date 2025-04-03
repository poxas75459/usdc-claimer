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
    "5hVxNCGGWKyBtP8MCAJxVo7mvGTX2z2WvtA9zmFw9ANrcwNJxwwmTo8mvcv267rC5VCfMkxwDWEFyGkxpvG1YLRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nxA9fVoV3bnNNFBeRjfA7WN9gnPyym4T2bobSypEVj4C7hLX2bSqM255m8mNz93PUEs2Z8eNtV5eSnwSdapeCmH",
  "key1": "28oi7bqipUmpL1bS2iUCmen73jraJ7hz2SQjJiPDpZreDDb4h67cBM6jhpjjmPvecLEdDV9uWaqgACeM3hb4iBGj",
  "key2": "AvaRAWnq8YMMYAAssaEuPGGY8V9v5koE1gbh3TnrkDKZa4jFgWmBQwc3SxnVjqqHuWaE72tYHozSwaBbVGQHT5U",
  "key3": "5Xm98CAYyHacFng1XQEN2RoWg5pDQERnwTn1SSnbPxRdoKTYEQaGuWjkYa4NCrjC3QWUZFbrUb2ETT8HuoiSi71p",
  "key4": "5ghQQMTWKQkRZvkcjAcQWAsZfRPCSQgT4vQGL188h7pRBRoWXaH75XbrLm8MUg6ssXbUQ4FRu8pkgt3ybqN1ytvS",
  "key5": "2zPeiau78FBSTRxdZ3WoWH3b1ZLf3nKtvs5wEMxerxkLrzLZMFyU66aBXDeMGspRzG2isBiPK5HkDjBWGHPJeNSu",
  "key6": "5eJcfjgotMcVg4yiJCv9KwcTpz8iYNUMGBug1Tro5To9h324BKXTNsHq9ubkJ7vTdHusDPYjrU2Nh2pjaML5ME7Y",
  "key7": "22fNfCH9g8yLj6GQ9znyGiX8tF2skNFYTrtWcEUUoEouPunDiSyhh6zUL5tn1diDYsmhfcg5EnTMf1YMsRBxfQgQ",
  "key8": "2WsFZfDKnxSoYfytZa3EtS99ghp9m5XPAMtVfZWX5DmDxpdJbiU2bK9p3uqKkKmVoMXbrp1P73EBxuyjNc41s7eA",
  "key9": "2WUDTBVG4Y2QKgtEYpYRAni3Qgdhe5Waf6cD3TzGbxfeRiWmDLia4DWzQYUfU53rUoXYSfvq1que8nWg3HJHtNsY",
  "key10": "5bJWCLWUnL3at9b2AoQMtEWKKTNzw2CcdMyKzRXmWJzYnYyB6BMLG9rZstR984A5GkwPEC2eskg5dr1TmFfnLsFc",
  "key11": "3CrEtBdAnjVfWRviLif1Em4JZGzd23FvdmXRZbA3St3sLQZHfvMDwRmDcdsnsrTxirUDhjdFnwwm2mRwkmXmU6pF",
  "key12": "2bV6drYfdgcQaqjYaGxgD7ThmmYhB6SXNkEvcn9LdQN1QkDUc5vDNATmJ8PgeER5SujLUhJMvrY7KouVWXCrGf2N",
  "key13": "5BGHRub2jfVd6Rv8FMF8oQNYAsaH3tQP382nbZ3zSVX7dPutH9exCTdbEGUYoCy2YfXTotoh1JNF5x5CzsF34x7N",
  "key14": "2kheh95spzaz2kXC1vXzeWMW5dnkSByvSVV4pLpqtJPNFr79swTMC9xGvHupPdARbRKgSWp2nkq7ATG47Xui4jVn",
  "key15": "3i7k75ujiEoXKwRfFNRvMTk6hkoqQSvPC6ubEBmVHQxu9YDmy6vMnNkLiCba5W179dcGoi7E91jyJ6VeikwWwdNj",
  "key16": "q9PqpuDLaydrCsqhv2DEd15wL2d1ncbr2jESGPhYdm9uKnprFcFsHfPD7MCVCq9Xaiddy9sS7iGA7vGG2Ejk292",
  "key17": "4y5fVZ1mJgsKYRvTuu6yM1HkF3rTzyGQPB1XtZEi7gYdGD4Ut6gXnXLbAVXUSYfvtGVZiS2YNiPKATXxdPCtLVy3",
  "key18": "ruGzKUMr1NzsNiRsEXHCy9pVfuqmp1MRKvR1XxCedA8juGQPeZoex6mrkmaLzEiLFYqFkTcBqzauaEtXSs2oaCf",
  "key19": "rwtLxTgULXFtnYv1gobhmz6STaEjpJe4k9yeutEQpsjQtjp92hx1FzJTaVWNw4Cnnmqc5dbEVeCmtMckLoRyCAm",
  "key20": "5jEreFBGzDBmgMxJoipot1x8YDYWfLTGgRovqqMJbTzwkP6cqCx1nQq1Z8mnzxHuBQy7oAReiGH5ktBtQaxX5ha9",
  "key21": "2bJGutx6PgGyTBMeWrda6tnzXgcmcd6pBRuKN4vfoFkfTbmYDE2XSpw9XUw9je5Y4vhbvM2x6HPsDeDvoPQEBaAc",
  "key22": "5wQzAEDniQHybsAeKhMPH1XvKkmophyukno8F1cyQWZUPrdCFuTiJ7tnhPj5csJws6sk2uNbb7DscbcqQteT1e8c",
  "key23": "3X7B3SpWVz92FtxLfchyFqAb8oR5GxwZaspPMNEGx8Htzj2jXUpD3eBffu4MuyerGvbCbQNJgU88EKTJchjWKgMW",
  "key24": "jDg41Rz6sgqkoggxHvU63mmmQVm2Pa3w7gbHbiCbr33GGccTY77n81i1GxyyFpHda9KovVmWSVPs5nuFm8ELj8T",
  "key25": "4YFwmDet8iFttqR1edVc5zXqmvaWgu2N7y22tMDZEiVqXGvrVmfQKUhAAEk2vAr3oB1caQjwgnM4vyQdEQSTKATa",
  "key26": "2sAn3vV4XpxM6GTB89PvBVJkAAHrFhfARPyFJsd2b6p3F7h3HSaTHHQzzX8sHBdz245euptJzHBTfRismXz9LUJS",
  "key27": "2rNECqvyWfZcyoAh61UkKfrefXFosBxBzyMnCqgAfSyr7D9X5btwU2VsUzPXoajfsDVszN7PRTqdeWvLksHqNDrE",
  "key28": "3ssW8afGNc6WYecVkBhFH78sJwiQUdstQfYBEJdyLoeSXeJyDMjsiF3jsaLuTjvKdGu9BUF2K6gUXCddz35AtY2C",
  "key29": "6xvbGwuz7NtQ8Ut7o135E7zebLV5j39gedgjiDhAgsFN17Sw2eEKVvjRjHRoKCB8EBXZeFy89KXu8JyDp5AVmAA",
  "key30": "5ABMWRjEKLaWKyMAmdsmCk4krvDQUoYQvdGtKLpbfGwanKCDPwZ84QwXpapLAB7FAStBKv78WyAM9JjnEEHBt8dN",
  "key31": "31y8rx5hUX2Pn2UCsWcw7YbfavqJGxSTNazM48GTBaCxzmp54jJyH34yZQfHr21gYeUUVB1PW5efCcJpMbr59FXq",
  "key32": "5LWHzN843qCD5KKp1YaZLDAbxAUMaygnnRYo6R3TdoiNeNH6ooW5sJCtMSGvTx4u4sX1BzBaU8jZ6VQcmf4QGV6W",
  "key33": "2Ao7wo1vzgppy8rKQm1WRXqHPaR7jiRY5CBPDF9chSKrNfYFk7LJV2sEq2vVnwUJLZf82bkJAvpriSuonUum3YGY",
  "key34": "6mB8NaCbxiZmZNCbgABSJzet6H5P6KurWnXgjpKYYHBwH7yiv7LdBBkm2WtnaB8Jpvq5DMsrSbH3cpJ7qJrvmxV",
  "key35": "2gr1GpJF83V1jyfLr2BWEoWZ6Fkd98nUZhGd7xz3g3hAVweQramCrxi3C52noFbuh6MEg5NoheHWuod1GjrJdgrS",
  "key36": "QQJxmzdDChicvSUe1RZmcHeigxbCm8g9mDyRj7TjxHKbcgeV22wQmBtNiLGqyzqnfBQSL7AkjGoxir3N2QGyLYL",
  "key37": "3Ln4ig5yEsFh36f5hq8MqtEUD9jwxrAUkVTTgXwLa2idNnjnt3YRUQ7Q5ZerH3no1gmfbSGXZPXdedjE5T34V5NR",
  "key38": "3W2vH3V9djDQbaSTQniRJ5BL75VFPcX32g7M91KsVoQfh7UcYt6MDBFsWC6ibQjuLo17gxiT1BSkuSRNi4afJ79G",
  "key39": "49B3PS8TzmSnZgpieiCZfMy681n55btbZoPu5XpMYMLG9gw7eZiqxJrhuTUTsez2t8fBfAdptgFyoHrd7NawEi5u",
  "key40": "65NmZVdYh1SJJwqf8dpFTSAaKnxG6MtrzpAwaoKHqLvRAtVKMQtLbzorthaJD3jCEeoNbPtdM3gDiQZ6yLHyNDcP",
  "key41": "5bQ1zN6ntKT7KbodEwLUkSKW2C8zd85nXJ2tTEHAVutYP1T2iLXjPZgceiLLLokAs2GXVD7h3238ZNZAfSsvJVSF"
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
