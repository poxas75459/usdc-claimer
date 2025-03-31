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
    "Jra2A2VUtkHmugC5hFDnEaz7eAG9L9nZmbLsLfbtbo5RcCc9nWL1A7DBxGDdXxbNwDZokh2AKogqzqPMPmcJ1aY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jqghvtTn3yjPoEo43cr3mbZpns2nigP2fxadKn5x9PM717yUKRM89ZLd6z8bSpHuAPUM81ikg6tjrkFRCqd2sEm",
  "key1": "2Swng29xt5MtgQDF8C5R6j9ycr9PgC3KNGXuH5C8r6vpsK2Vitzr7TF8DHCLNaoSKiWPZPYGYzUxSfA2boQmGgMT",
  "key2": "5MQC2CNBAByi4mUv9UGcW78HAn62Z8bRXwy2M3JefUpN6Q1PLhttM8r4PAAHWNnqYaFQLGazRC14fJj6NBt5kiJP",
  "key3": "5jy8LA6j3bK25Sp47Z17n3646Ur16o9uivXKmoQF4yS182Wh7DDVCto5w1ipkkuxfK2iTR3zCXU1o5XS5gi8n7hq",
  "key4": "41Ch3bCRgDJNRzi5664L9AKd1FRx5vhZx9jSh9iFFsohHJSobjQkq118rHrNtbfFXkVUs9GYh5NnihxvqQGDj7oA",
  "key5": "2s8ELbtzoY938GeMiJwCPWs4P2ZgPGswSJQJb3u4M3P4CzJM2diM5ktbKQB3rsbWjD6KH7NmTeafC7Dm2hH79Zw6",
  "key6": "oj3R71pZkSAdfepManeE9mjPzXKBRQopVUJvD6a4XvAhdd4whNTyTnvDQwGqPLvfE8ZPCsm3JMEKTHnbFZVvkS9",
  "key7": "Xria7DjepCp8HeLS7LpGdQadDfqhvXe6MKwNw1Acd4ENpoGhTf81QwYSZey21ZSfBykVfNoit65BxgmxnXEFAgH",
  "key8": "42qj9FoSKGbccfYSUiTPazeCahXAjHDsc8XGJZby2kTXdJdvX8D6NZW65iqKrqRb3JXm6Yia2SnhT3HLu2j6XCGJ",
  "key9": "2yGynYY2azn6qg79RK75ikkb4ix5j5PGozQtXZ8R8QsnPKs2Hbu6PQhJD7fwdsMEKQN4efDbKvAHjdbPDYBoBVwF",
  "key10": "2S4Es8d2p2NDEtbdJfYAaJhwjj2oUxkzrk39kqtkELZK6WM3rsTDiod1DxW4VCZ9A5FxxiPZQt8jWnAAmK2AtqcF",
  "key11": "5wNKBgEheg5VQ3wCCdxaquP2ev9sW5pGFbrgecJZf8CtaRDvYB8biAJbQTVZjKDiQgtU1D6LkquLWUoTd86KTMZZ",
  "key12": "2aqZqHdCHwxfE4X2ppwB38rZ8o3dyQAdXidV7a5VkEYJbPQZUh2p4kUF4ih8iyJGhQLo6jM7byim6nHyU61Ec1uj",
  "key13": "5g9GvcDKjgAiKVC88s3d561qDZZo43bQFvKTcai4zmoSti89L5YpXntoqYXw4RBhmUo34g62yWEyQFf3YG6sns1y",
  "key14": "5DMh2qqVJw2PsTXqcpZBdwat7ikbwagc4z8vSNq9ds1RYRAcmZyc1BdmH6z8Vevvf8wcxFVpAzR7QZdiLNjgbMoj",
  "key15": "3ePrGFCe7MJTebWbDG3SWCXkm37DqrQiapi7KTgU7onNowb1FVKyezwdJECtB6WfdYENYCEEmad4mYcxWuDcgSGK",
  "key16": "2vFnPU9METEh3AUEDeeC8UPA8rR8u6NhSm8aqh4hdPVraZsP3G74rtCT6CHhBvwypYc9fjowcGWy7hVfnL5F6kvc",
  "key17": "tzHp8Fwt5mP1hvYhfhrkgKCcGWRfN6K53M6eKXCiMQhZaLf8DyRrvq1HxLcPfca9YfJbaS1GTGAmXE2jGduuJTL",
  "key18": "2xth5zbx2bTZWeeau1Bog7WtZnWKjKK49odA8GyNjhBVm9o8Ax2VzYtgHANtWXAtEmtsmrRC8x1Ua5P7VtkjM221",
  "key19": "Qu4jud5AvzEqTkkUs9KQzi6kWybbVuFARkdWFzDtZcC7jT4cHWqECzd8fTFF11qWor1sFYG92Xj61hamDL9ejQT",
  "key20": "3PrB14qP5wdQnPfrDRySVKRQ9kxd2XCnoYWBbTRefz9CLCnXKx8rWyVyWABLTFojQHYfRyHfvx1RdVLAN7PUuzzW",
  "key21": "3v3sH7vSSPtkEPVcUx62ZDnFBRPPX1vM3wuUHvUoBUrQaDz634xodLTFFWtC9e3FAXoVE42bYEUe7to3L5zzG4ny",
  "key22": "3pAbktzUss2bw3cFBxQJL8gSENAkMaHhB7Wj38CkkcrW2uYUkD8QFFEB4SsRMq1awKjcARHxjCRy17u7dmHTqEfd",
  "key23": "56Dt4J8BroL3Fpo4TZ73GVgX29iJ1PW5u8oGhYvFmNQUZgc35pv3eE56TbmruxMbTBGBeXWKSpCN1rKqx1LCdB2V",
  "key24": "5skjZWzRkHQnfC7X2vKRXas7mBJfsNrCxiDMz4HqZccZjriprxE52TihPWxC6oAsv9omTNbcZsgJsUFhDdMN1WXz",
  "key25": "2AnwhnwV3NJgrkEzgiTqAgLoHUsPd5YJAqQBMmHnD1xxckkaLVTqcRmQACiVau4CfMuJHCmnLDGQFDwb9iVpmBQu",
  "key26": "au12C4NBcPUBs48urGK3PCmDuBuv4drsECs3N1aPfbyYXwqWfGsCwV8S2TgA8UqqYdDV3D8dXiWAtV8ieyom6eX",
  "key27": "WJ7hUuTvWEPgtRTqod8qD33rmyZ5XDJ4BwENvZ8DNkgxtKBoshP1Tp8ZUNqQUtDDoQGUjFfYLUXedhmNADJXTTN",
  "key28": "2RRisfAfmFjHXasxrcZnwneHpzDwvdGY7CYAwfdBY8Nwudkyjnpy9fQhaUF19UkHzykF1dBSWLsFsLjVaXqFj2Up",
  "key29": "4X4eKxbFrwJQnX47LCtuQ5LKyu6EpFfhjKj8zptCRdzbMLfFYqt1s4g19FU23BrDp8WBXyBH7bmU3sxLzwsJdkgr",
  "key30": "48fVWvhgUGU8vsdCHo7QSCrWMSqWEYT497DQPPeePgweWM5ZQ9efmqF8Sjp2KDSMUGW7ob7rx75wXkTWQXNZsLZn",
  "key31": "2GRagDgppHpLTWa6v6Ut5mktVy2d3oeDVLXS9rWqA5c3oeiefbN8Jyb2U3u2zWDKCEPmxtHrvMb5R8cKtHdv64z5",
  "key32": "3dFnw5ic4qHS2PwBUGKeQP1ktgasGLTSZJsc6ggaeMwGqnsfjuHgwowHDhGDaWQR6KJ1jhvYEq2wrHSjnj1GF5vL",
  "key33": "4viBfe8BnrDgRwSiMW5JsiyM11Nkv7BarSqvaD9HXhiwyiSaurserL86GZvhahFviv5nsUCKu2keGQuUWVEyuBCR",
  "key34": "JvPhdqbMADgfTUj4LUfg6yEGq4C37yX7kvPJddvW31D4vPCK11N4PZMdz1zH2Zc7HiiqfNpdXHZg8raFZWYotzt"
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
