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
    "2zxG845GdLxYmHeCppUE84oTymAHzS5pKKZcy7sJJGgzrUcPGdNgh1pyjLpNGijvfnRTuB82wjMfzbA983W9MByT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZU4nUHkii54cqsJi5nMBQeTx5BnF3nJ7RTwkFuoak3bJseCK7f5T2wPXHHLMe6eaKKjKdTbQAXfvGiugN2txtLL",
  "key1": "4GEhfU6odFaCB13UrUagTQEBwZb94kERHLwBGf8zp9N8o6n3yLDV91gt2kVWJ3vcBdBZJKzByHueAGXJ2AVgJnrZ",
  "key2": "5Nwi153vBuFhtzsxQyfuQ2SDYANgxfhMxWAUgwnHP5ZJxogsMoZJhYsM6bCqNGdkKv8DBT8GpSaJJWoZLbXhoJzH",
  "key3": "2z7d9J1YBAsFPjzgv2tn3vSECZdY4cQxk9Q2Dx2GHs5eDDALSuVWcv73Y6ELKsTgmqtUbR4ZhAQeA1ckA474dzJk",
  "key4": "2SYKgZVp6y731b7h7iYwT4ERX6ZGj7P9ECqW1YK6FbJePzMb5xkSCs58P1xYznLnkpGdaaxbskazVgDwvTq5fKp9",
  "key5": "4gsaCWEWFK8rhHCXM4MEaBRsfFdL6uzZGH5U8sqcNB8C9uNhzuprAA2sGxPVMAqmFRKWkLBikiwQcoqsE6sktTJH",
  "key6": "34E6r82MB8aRga3ehiAXgUo81TfbCvqQEdF789i7dQkiJKVeb6EKrcXgbNg2Zg1GwaCZ6ZfSPdoTwAwF5nVeWpAX",
  "key7": "3W4GDytizBEoV2v55DhgG9gyfZSP6FzKMDCEk7JZxkNZf2LPdfLXHevLB6vBCcmmEGy5btZxxuDzPtxW5zhpHrpP",
  "key8": "4AKLaovfnLJt61UgKt9kExo2UyxNedXXZU27YSBuZdRZWAuVobjkbRqfG8RrLp7jaHvP6grNbPiVFv5xW6DV1196",
  "key9": "3i3N4Zak2jmRTMXAANwuTTWKPtiEvnHtVtyCL1VqLsqoKwenrUBeTneEPXChLL43YeJ8gSPF2WMPY9i78YQr16yW",
  "key10": "2UTYR1P4XzSAP3uEiaN7WAAc8Aw7iJijw6Sqd8EH8WsUjxrUVxS7H9zxmFsQyfNKg9kkj8FXLGwn225UfPnhU94J",
  "key11": "CPpsS27DDNKgXr3xDBe3VuoZUfxgyiKWe28xWsFeU73w6PBhj5SqG45tZzyP6S8EVKSSVxMKgk7TMRMHuWoyh7F",
  "key12": "5yYubhnan3MXfN99nzQdTPcH6WvozAL46EGtUiuMKbQTr3VkZFnhqEKAnveW4JVWNoCLAn8xujzoY7JTFdaUCDKb",
  "key13": "3ZrKhNgPZaYooHPwVqMiAG1wJn4ooq1cfSGcdQkDqwWLA9pYCwGA93UThx1CYb8iKdzUFjXujcasQUs8X5126VBF",
  "key14": "54MuwBKSiMsSH5bvhD6WYPARDcVYgfi7vaDKd2VBN4zLJjpSjCaQku3SwZfoM1YL9sAxMDc7Lw3BbkmDCR7SNGhi",
  "key15": "4XghCAceZ8jErbiUdj3tHxoTH5gsa8Y9uHZq8uNdoBgwuwchSGmJVoWMkHk2v4UGXwHn4KxVerSPhDY1wSxXJeES",
  "key16": "4dPQTcxziDxCNcwngS2hR9StW9VvmZNyREYRVVh5P5WcEJJzLUi7AFmyopKtzkZ9q6Z2s6zoKM3ib2XmsSQFbPmF",
  "key17": "7GnyqjaCKP5bMEH3WxnwpepNLgdkBf774nELia594ACJ7su4U5JEJZTgu5k8pYyeSF73KcTVP4C7Lszsty1KpAP",
  "key18": "3zSBx8TS6De8UUgziwySSRTZmaiKHpDLET4SyZ5qyRFSS34823BgHBd9NUixuy5bWhdFSWiRqJLPZNMx5o6bwEmd",
  "key19": "3AZP5dTT8hEkStocCMuGTJgxCTDZf1xyp3LKQLs811zWQg4Dd8fxLWNyLJKJonGYZACuKNKTBNjCc86LdAyCeS5W",
  "key20": "4FsYdnnNKNpx8xhg41AXZ4cxPzS1CdpVc5AonsKBgw7ocQavNDDngSrvjE7Xoz1EJW8fhACgSjRy7McZp9uYkFx8",
  "key21": "379morDkwMnffesEVjPRSiVTKTx2seU39ZVcWaEXAMQU7s99U8BbNrppZUjfHSAPiEy7CaBir9HcmKYf4j8GgUX2",
  "key22": "3u2NhwxjfTyzyE86r4xBBMpdd3tpu9gMvzJQQRGvngKN5gMow2XHXmaWYSty6g9npAWEFLWXoAGtwXrLcXiPpt6D",
  "key23": "3yHnkTi8vwJCteNe33USy3PaP3yesFF3c2drDdx3DcPxiV4DYECeiU7Mj6Af6jRk8vHGVRzeTBt7zRwf5J7Th1Te",
  "key24": "3kx3dqRE9nR6RKLsVMkNexSPWJTfLLGZ3A8nqs1qrm8yPNPiDg1gffHr1was8T6EkAFKrwPY7WY7kFxDmiPNNo6h",
  "key25": "5vm5JDFMKHpph2nC9aFUa8q8ZC2JJGLXDKwAf5vzsuurFHfgtqYGZB95R5nBsCn5j2UWJxEM3zdQX3DvTnsVqwFW",
  "key26": "5ybMJCJZwxgsK3ZTLh2beNQ6P4P9En7q6YB7XzmBKHfTay8TJC4y6ofy59VTUSnRovZDDQBFRK6ibb3kU4uY8TdH",
  "key27": "4AjxhpecWcyrvVBmBKAP3UGaBCAA9hgCAdwCKAgYnT16cyPTQJMEfcuCMZMHf1NotpU1gzKnMziPsYPasTQKj1tH",
  "key28": "4jnwepyQL3ztjyqLwGZquZkYZjmZdzAXN9qF3vWbJiYFrDm3VJnx7E1Q9yhG2FW4CUN3gddJTfLT9z4WLZinnLaj",
  "key29": "qNeiixGrSmsxNanXocfZNMbVSr5MKy5LnpSTjbHpfCa2TSc3Mu9epT3uVF9wDzd99i939Q9UNMeGaSGxUTnccUW",
  "key30": "5zQFeAksU9wTfAWhTTjWpDkmbFc8KtPgr4VJtyPPdFMsKvNRZbK64xmPCEYbt2v5CVX7HWAq6viU95SP9NY3jR1D",
  "key31": "5Ba8Cwtf4L6DhgRXoVQpDLV1SBq5TvEfoeUhTWgknBZA5GHLGQ59rDbNAbq8o7g7zm4wwsLXNd1XnQyDZP15fDVX",
  "key32": "WM8jsuUUfzURAZ9ujmK1oeBbgapSHeG99MMFENDt8t6t9qxZwuSHfiLzVRCnMw35Fp7ENSY8PoFqV3DkmM6nxBT",
  "key33": "4Kivd9D6nFJFnN8WWhk2GfE23M8nP2kSsALKUGe9q3CBsa1G5th1KQ7snt8wMkbKpX7THmWPd7PuZuzikxPyn5dc",
  "key34": "2Y8d2aKCXM6gA3y3iQSNVzhiFK6aoQZuAeWzijj2RALBmyLaDxr8HPScsMJMJErFh8GhdCd74DckzotGhakk9oXp"
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
