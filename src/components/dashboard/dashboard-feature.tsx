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
    "5R7DQhJmQVzzGLiua38exu7fySgQ6t2hSNgEbkf1uMfKnsuZJN4FAWbvj7kxyvFrhFqj4NxE5YgRUjt9uJaCyY8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xJjjQ334p31X1z7S81oiqT8fDfiwZyStFhaMRQcx9q18aJgTst2xV1GfFXXtYAzFtg3V2LZvVUrBdch9UuB8Asx",
  "key1": "3KJRCyMxei2FeaVFzemvLazo2hpSdDqsGLXVEYqxdVyopqLKLHSzDR1mkcBUYokYwXboFDvrwQsJ8ArqusUqddTh",
  "key2": "uqc2KuPDWFogQU8S1WoRMJrjJ4wdBAVBYco54MxhC1oBBUCATSZ7y96bg9ZhHgJKbMABJ4ZCCiTvRhEMjAvtqaw",
  "key3": "57d7z6KBQFUiEYpgkxjoWt547N5TzSQ2cXaoY9Eqi5D1kGMTw2UJqor7v7GJegXzgC2oiNiQvQt2C8mmQPvZWgkp",
  "key4": "2uRxDbxj3NNn4MgavHpJ4QcLNqk3pxy8uawhvaorhicHgye6sSsmDyeVZ6pCinXcw33G274waLGxRaU6EWDnyeW",
  "key5": "3nmYiaEeVN11hueP7JK474WXoehbeU54nN5kC6KqCDaFdMyr3sU3XmCgoRn8EP2eMFMbqqctrr2VVEBAw69i7m35",
  "key6": "3nYCSjVAUkr3dyHPpbF6j3JykYRk8cUbw6Kb4KNj7zVGZe2fw7yM7mCVTPwgqiLk2zi9NwJrMNrUCKcLZN9TxQrR",
  "key7": "5XqeLPAMXfR7A5fEXLzRgU6cKEnJ6uvRGc9TL1gUJa6EZpyhX6FcPAW23VusyBnqG8zq97J1Z73HgUxFbUCvyH5Y",
  "key8": "3PLR1iXQNxadnoZfiMX6chEK4GU8r6ZK2BFMSZA6Yciak43nu56uupJ5pXKgKmo2cLEViMHb2jeT3L1pSk2wV1gc",
  "key9": "nK6MkiUcKvGZs42Ka3292Y6yvqWPXrgugvuLa8m7HuXJp6zZvN1C4gWZAtXDzQudmM4iocUwRLqBTDNZSvYSWFY",
  "key10": "2bpoQzEHcQUv1RbEy34Kibqdo6Q7KMzr4rEnHeLqR79ndx7X7nCtJmptTe2Z6mKtBC4dEeMGvXb8iAbU8EVPzYNg",
  "key11": "3dyjwW4DQmmYsRhJqs6t5NpAxNuMGAmtZchLNAftXPZyGnRuic42kPCByEXxfopJnTTY7YHoDMjbxHdRjAkQaQYj",
  "key12": "64WD75biWDde8AK57TapmntNM4wv3BUkZWQN1gJbAopH3mLKJvVaoRqVNrHPH2bKBtS9wgX4guJs7j5Gyee4YsqR",
  "key13": "5LEtveR2E2vFvcjjZ3DpkeUkiJuE9Tkuq6Y2uzgXJY19tKCBfPbhL5PvjQUhGRC6z4eyj82cVH4Cq7vDUBhhRjCZ",
  "key14": "2SNFBJYUBHiY85EifM1JN5fP6EQNTnU6jXWvd1jxM4zjQDGvMMtNL2eFDBuJG9AwxFdiiBJ1AtKxxp3V6wwTW57v",
  "key15": "mwPQrPCyiDE1G8hDuJfJH9qoUUSurVyLvy9LsyUZmbcnz33QkZDqtRniVPykN58ASxW537aToJd7zvd8SzMtpPC",
  "key16": "3XDeZgg1B6KGAQaHyN4b3W9wJxaDDdgZXmFjGj9qcdvNHM36hmmixmFBrdXki3udTHDgsRo1gp9pDc7gkxvbcPJj",
  "key17": "4X1pFH6NSBmTbxpvm8H1b59GZoKviMn9VbRn8iKUtGhXCL3Sf6Zh48UpdUMExkijFgKwHMcypX5eHRG2rjCMEg2h",
  "key18": "hhjXmoKomG4ttKr2KM9fuvJjsmZVYrtLgxYT7R51YSCXxzGxiN77qKK3PGib7XJs6oa6yXhgR1jqay7qLDwDcWF",
  "key19": "5ViiSZuRXR3351DSu3awzeditj2PJ8Rkr1mMPSYhMsLjF7N7eLndAtscNmnSqQzJmLAVsXCSd9tYFd5jtYR4ksq8",
  "key20": "2gkYa3bFta7c1SSehCgsFtn2z1UDXYUUnZ8eSQRVoXfDqJp5zz23EEuyFPHMVbic6oiDYpX8KJ8SBHN7kFLmRa5",
  "key21": "51hgoMjkPMbJGGwEoHCE6sCv7X7pmt4PmNufdxSYWFSa1FKrzbd8bcx1p75oubjwVvTk5azZtBXKCGEWqFBchcda",
  "key22": "3nL8FcFGYSM5yKr8nRa3ryXM31XiwDXK7uf2LB5pNHybXQ9eygYsrCSXL7juYdZcvxfNxELKKtjAN7PLZuGKKRJd",
  "key23": "3NcKNEQqg3hzvkiMWowQGymntPSwLw4xct7VCbBZ5ZDa1Fbc7tYLzhXyDx7swh91QXQYG43TVmtLCPomUCZTmoip",
  "key24": "n23GmNDgCEzGQeEFPc5XJJp6fJx6Srab91j27KM5aTvtQdvvqrB5xJsjCTtq5mybRkQMWtvDELzVrSMJGJ33i9S",
  "key25": "5hcy7CuLmFSTN2btKJ5wfsWMhaF3665iM9fqokogpHWJnbsXxTgTD265TyRVwvuGZQCfVWwRXgRum9zzcixmmTTd",
  "key26": "41XYRpCKsHRohbBikNKYkBsyTyrC6Nubg9fgZ1JNhyF4NxEEALtynf6CWQiUqtTsDbJBUMESNGPvst5n6DDHygzx",
  "key27": "fJkofqseFdRNSU5SvfiHJLanP9XX3v2ExvRzFoGtswct4dDKUWRuKozsAmbckxYEVoxAUqVFTdiqWJqMKawYhCc",
  "key28": "3h7DREHDm4MpiHDRWVssi9dkppwyW1hignEmC7M7tFwZErK8aWav8P6kTXBibZwhwbVDY25ibEPuvAxPbLphVvMN",
  "key29": "4bHbweXSyhuMeJoXueFgZvxK5V6R85CoBpTLG4oSQ8yYMPmuqHaeiDfkdp8xKfMXUJzDegiiqVYtsetRVMom1LvH",
  "key30": "3LTqFz5BzMr56TbCiwD9zWkRQBQaJLc6EaCkudkZD3qNeoYT8pefDDBFqhqKpLsjQrGK7P3VZXtVDsr4LtPmxB3z",
  "key31": "HagSsMx17Egwiv985e1QEtLuinTWc8b9qba8fhMVnKj2fNHxovHQNAGALSTKqdvL5fK8PjAbjf7Rry1YJYJk7XG",
  "key32": "35nAyoP1ayYxQY7ZNK44eAPyaoLPLWmwmAt5na3ACdKJinzo5cYarYZqisvmu9kvCBk8WNvYiqGpZApFESS884dU",
  "key33": "UsAgmx1d6vUNXGyeQB4fWNJQysvXWCTu4ABWymgxayPMbsjV4d8Ws6EGq7mu1V4cyJr8EZYrfe4w79q2AK2J5r1",
  "key34": "3cgYjPhekAXGUn9Lm7gQAurQcC6hqqXJShrwicsp113JRgwAzfJPUyichmzQGpF1NkZDgkzmn1R9QjSWSzy79NhZ",
  "key35": "5vbZzRkxUrFEzQJumE3yGYbXoknfQFrdq1udkBfusYfLunzARFV4NGbp6ujRaNTreQ6KxAdUtApaCx3kbVuS1QGh",
  "key36": "Vw1Ke3dzHtL27MnA3XTSmFUdzW3TT6NggceTrWcpsUyjLWoNYL1ZrWKnvyVdgPBbNKCNzbPG4TvdyZdHUomXxi9",
  "key37": "4Ubrx46FVbS3dhR9QCnggG4JzxSsBkDfmpdmAvuPwCyEddYr8mfR8qBQiyFkhcwG4T1WwQ8htsJKYnK1j53JfgSg",
  "key38": "2vU9Ers2AfP8vcvkK8Es81swJrk1wiZuYwuiZLuMqSaJQxACmKoB3SPu8Cbo3MRDK61vgH1g6wTYZeDt9YE653W7",
  "key39": "2DuUBmUTqs83giAkKVA4ayuo9WGut5jPh1HUiJjnkmPSPe5hddEVCBY9n4Ku2oKMK9UqLrWsM9kWWTX8WgcaXgad",
  "key40": "4EG6QqorH6s9u3cHJJKy6VS84ekJXay4L9kfjtTL6g2rdu4CwxSV5zkLkL9kc3B3sXGFsyNLmGNE7Xti5Xt6vv2P",
  "key41": "34icgJ4bY8ViWxtY4AsNT2BfLDdgCkidhBUQkDq8RvPoRcDzwr1T6iXpuC812cxnsJvgnz9dhWDbRvw9XoETpYRJ"
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
