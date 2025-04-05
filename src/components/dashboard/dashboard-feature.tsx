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
    "3V7VyYntcSTM8m2Je9gbSrYGj2ggRUGnTnoWrmxjXLMPtHZLiDFCGCnEZbw7rdVrxM92caxbK2nkxsehsg7J6joV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BRYcv4sYkB3sY5i3WQmMhYsejD5RQoRRkJXzrWA43SPSU5nsh5U7c5CXyjjKqc5Juhik5rC1sSReQnqvKtQ9PiU",
  "key1": "4e34Gi11L6g99meYyyx17L8staiV9h57V5qApHWX7T4RE6uxzcc75LBGueKrwL8wsnPRgrVVC1xNkA1geHfprth7",
  "key2": "64hXLDyoFK1xPb5Zhdyx4VsY7qpN5MCPRcnmZfJdis2bR3LDQr9MhzX9mDKWAqAJh4DkaJHU1ZZbPPgkbUVSSrM8",
  "key3": "3UJCN7qx9YmAVx6pHoFvGDQq5mfKzNA9YHybDyf6U3pUggwoUn4YVNbEUkM68UsvnvPSmYQpmtkxwspLj89aMQTD",
  "key4": "44i2GtUSgQfbJSGbbcWSkqis7N1JT3cUZto6ax1qoYvpcrgPPH6GQ2odgcQMcMuELryeUC61Mx73HMCiCany2ryi",
  "key5": "3oroX2qhguJYRgKjPf8XEyH1q3wmPQkvFtLu9ne1iovqTeYtMQnvc2i1rDGUhZbc1gzuqp5MbS369Qt8Vc3YdQr5",
  "key6": "9HeUF7vXiyYkykxvbiNdY7fqJvvTzr49cZcM3kb9hj8VePMQHPmkRRfuomq6cip7mwdEonqAJBAa7yq2bEK87Qw",
  "key7": "2ZU7XvekExcfNx8NVRHFtPywufAbYuxyXNFYLm2FnS3RSovQHTEQtRGQMgV31BFH8aoEZQ1Lfb4Kba7Btxf2PDD6",
  "key8": "4pXw9E722QfNeWCjs9gPzRH3Dgm8M3NH9iZLQNrEVDQx5aUfBYhQEtq6fdSPJ5LbY7zQsEXE8kBnKo7zmysgtuXP",
  "key9": "5svsaPVP7o727hM4cRx3jaj4ow9Kw9YpXPPTyWgbSvyomkjBMzewkh2Pw3vr13SxYeUTmEbCY6tMDorYxXHhheep",
  "key10": "2JxysYSa8vSauSeQdtdjigtsvMsJ6obnaYWEPYRCfg2cwiBRKozCRArAR9DpdcTP1amQbpaYERtz1VQuTpFkRDSC",
  "key11": "7LQ9iGyQSjqwDP2dGLGXcR61iK6V82kJG9sRqQQsNobbqczSPWjGUGoqdP72vYFrrkupAaMAkpJumdVkzda33nT",
  "key12": "2CQyiikZ9Co8L7qqFgjdTvGeb1wzj2EuCapGNoZDqaVqnXfDpouUDqvcdh293fY4apQERUasbnMiYtxTetJLptmh",
  "key13": "3up6eyQe4xACRKVuxuuj3MPpzHPL24XxjbN6aJSuaQcerzt7FKyDQBAXrS77fdd66szm1JS7UWQwGMNTWvPcuMKG",
  "key14": "54Y8AmUQv35LhbzF7cNeZ6zNgsgTiVNriWDFQedXFMU1xe7vUgDmuZPhfDTMhwef6jmCk5BMHZgEbLnw83cz9WD7",
  "key15": "3BREoUmmusQ1jUC2VHWUHkNPPR4cyRLdCzGjYMvWFUXEPxQbadzSXDsH6qeU3La5UAgDMG99Yz7equVNooacLq6H",
  "key16": "3FxDdvLJf9HZRTAtdWdpC8VCzEnMT94Ub1XuBoGSDb3yTUjDASzQMD9Uub4FgJvKyNqNMifWQGCLe88pGz674DXm",
  "key17": "21n3XbyLfgvcaBgQpsZefo3u5iiay8kqmGLJHTNEFsXfH3q9jTBe1ozC6S8DxNDKzDecMN6Epm1xhXag271h3WkF",
  "key18": "K8UkkCtnJb6B6Z6QZb95WagxGMHVNEKFMfA4bEtsRYDhYTjZBNzKEs1e8182Huz5WoCNunoUNnE9eby2ZcFyWoy",
  "key19": "5kUdLE3CdixLVMZyspnRz7prMBsn9VZySugxLctU2MLiY75Xq8ytULPTMn7GEf962cafkd5gv3zhgmgTgZie2Hb2",
  "key20": "1PQAa7ULypdPjDRoSCJ8hKonKCtGDjwoU43gVQjV24GsVgpujjX2j7fQQsfKrDkPHHNgy5PkKE1oPgTqEhkFpU9",
  "key21": "3LZzUuLoWjEwo6HAk3Zk1JcZQvmRTVS94SAopAjtjxtaoNqexk16aAhgbpxTYGeNLEUz4eVdwwTNA78zNU8o7rS5",
  "key22": "2bFgHnXnjhSqAkctuaTF5yLC1yMoRvKQ7uHAsftdzrFxMGVWb2GNGgGchGQgSCfnUSbmtHXL5P17KVZSyjXzw1cS",
  "key23": "2RWP9ov2t5uYVpx5RCxXBqYGcbHdLJu6z6hG5bkvPKC1kWZJi7YZFEShq7XNme6nnMXBzEJSshNibbhFaUhgvXW9",
  "key24": "2jgyBGJH8QoWMCSA2EqeevkwuaGbDJ3EeWHKwJgkpq1r2N4bF3yFXeuDs9j2nFmLYJhFqUeiMs4UKPXuNHZgrAmt",
  "key25": "5cPPrgdmWjQwR4b5PXC32AgqJfUc7qkBvwSNZvSifus6uDadhZMAdM3hRH2tMDA1XmUnrm75nnqLeUWv6tHAgqaw",
  "key26": "47Wb8VF1cgwDBF9BiJUukeY4jLrZsrwp8ToFx49U4uH6P85Kue8QVaMBVVkxuF8iygQuPtAQ7r5QUfbgPU2peBLL",
  "key27": "WPv8wTb2ZXwccBPxwq27G7KJdwoPrKhH2qA6eCrDreA1y9d35pNwMRyh5fJo6So79fUFKybNHf2qLpRwZs46j7a",
  "key28": "2QnGnjqxLxi6wygTKVDXoPFUQqtkuSJsm6A75intdydhBx5hjMtfAe68kTmT4HZkjQtS7dzeMaB2ntFYQAxRivyP",
  "key29": "4ELkTStEPty187UCa2e8gd1tLo5kMTQbKrzoHpxAf8vNFWkt1NLP4qBGwtMFRGEhmb85oT9yd14Uh8GTsHnjpYWS",
  "key30": "5Z31qrLrWXHd48dMLARgs89U2CimUMGcjeVVfHuDGDNLj36Wr9gXxMhaY9KzCvovw9LGKhR555FUghdqrZj1gk4",
  "key31": "phLM3K7ZnkeNL9UzNBqabpeomDfBLNuAQnq2iBdGbheTmfKxuG3vQnNStduCnDoWBDgpGSdm9uL1E1u4dz3hGYT",
  "key32": "56CBQC8a6wKjtYGqP5rCsc9TrHW1ZWnLr4seDgdzmdA7aY8N7EFBFphdTdiVhu5cizK2WrBzTtP2VjZa55iKgjtE",
  "key33": "3JQTqMxga4wUESrkJjkd14HDhovqWxmDwLbWnv1yvXZFQR1AzZFCpsAeZAXBSphMdAhdCX4ETxfgxpg7JyvQrBKU",
  "key34": "4mS7uMHSdXygUeFQkCXvg7WpMk9KQZ9QDmUAt8uZJCy3nxR3EpLuL1TKAXiRcknVDKaJTMVnfsLXfZ7fiKDoDL2r",
  "key35": "4kzWW92hq3b82S9HcXa84dcinVy7wNUQv1eauo1zo4QM4dEXoVMN2HMVrm7Xmyd9z2bTyBc86RZNSkgnV6NrKH54",
  "key36": "rGjAjEyG8YF2XHgns8ygMziGZGmSGbT3NNJX2oWNGHkBakUF33yxhvLZbBhYsfdGfEHCdyYwzdX3YUBYKQAeC2h",
  "key37": "2NQngPHQ3SyLQnmQ3wAm4tLuuLDnX43Kw8AxoXpdYVggGbLXjixE1c3nA5TnfG7E45ix8CJCRsCNSszg4wGPwmkV",
  "key38": "32dzuXqkkNrgA8XsYG3X6v9d1UBDKKK384GcuTMeN1LftfoPXsDT6q1nqxxDP7CvtKJtTsvimWLGwXDeyRmkCD3k",
  "key39": "3iYgc9w9U53CVLLbYTvPmrHTeq6rnALgfz3eTUbcmBzGrGB6e3zekFg1kBcMH962DqtGSXE9j6DGMtA3iLvGjitW",
  "key40": "7AQuN8mRub4w19fwyWWg6TU4pksgb1DNcA7xdeEEYoJ2825KGpcQ3dsKZUe9hQCC49CuWFWscWg1CHghLDaWJdm",
  "key41": "2acYitQcJtqdD96tASDs8AEDmTjhN22Fds29iQ8XgQbwAyMaZDSbapfjUkVQUPfDYhKr36wZ2j4byzaFdL82KDAv",
  "key42": "3txeCbUqDLKKHLqtkqp3Y8xAfR94645koJD7Jtix48ozMELzrarudk42WUeLBeZ5coKLRo5JGNJ5PZev9mXkY6e3",
  "key43": "5SH6Wvt9tXBpTEb2eGUaFKtWy65EjccEpzTf6Y887eUfm14A2nbqKTcwDDHo2GNWA2vkdpgJYX9j8etu7aQ7h6zy",
  "key44": "27ZSUgCmpDuqtdAhcZgcWPotvwjJDvBRCd4r5Vbzv5b3goDobx2LYc9WTRrTuvCs7k8YfvivgfeDWYgaK1jYBvqc",
  "key45": "5nDveqmTXjs9nZCJTiSfKXN4k1Zu1wxKpy1AGymgexiXKmworrLjsQLkck628qsDWpcdnFxTRRECJqm6XDdhnDA5",
  "key46": "4jnLU1ngVuF3rasa14F3pmLtAZY8z7ztsej24mcchsRSQd7QQbCoxBrcd7msSx6LaJBMtHivk351b8JVHuGPVQKJ"
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
