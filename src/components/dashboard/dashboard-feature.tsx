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
    "33vcjj1oMfkgH2wUW6946oEcdAjFkSiwV9BHvcHuXHyqqnhm7L37DctBu7tpUkXcTW5CMrt2bYNLW3f8Bgq6Gw2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rPh6c8Uv4cRaR2BfVtT4LJC8B4ozBwGrUXZvzAW22T5Xa9dKbxYWG3pMMZkb6B1EfgfnoRnKaGMzM5jBWHXRzax",
  "key1": "5gLC1e5dvUAxyW3XLYjHTtNqn1XMPbZhHszdAqDkc3YyUtkeXmbWLDgFMxZSpwbA4Z8DVdjAwPT7Ro4dQCtTF4NL",
  "key2": "5C7MsB5fA5wBvtZ9U73DwQMjQ58dNe37uzcuwPRvVHFevSmJ5Su6j7BYuPDEBDyPEU4S9TuzBLcXnRU2jCvrdh24",
  "key3": "uGvctDW9LR8G6UCkm7ZsHSLTL438cVKBjHhGxHoGTp3FiZaWagcWSF4CAWbSr4doC47MWotrGKgMGcGcMBqaf6Y",
  "key4": "3hkqZeeStXXqK5VgmYVQ6PbjCmKBhC2RmtXrPnmK24Wo6eAETuBNeKgWde5pr7q2FNeWYxNKdhyqXYzbrUjNDfmK",
  "key5": "32Ka9srePDVvFGYRLhhwQZ3x9hCukGwCvrJmb4msADijMzvCaFcNnxKvPVgUxJ6PpXVHXcEgTY7WXCYjkMmqaaor",
  "key6": "1FFKk7SyfuWZCmZvQXCWCz2zmNAGK1ju6DizfQXMH2xmF6rjF3AVRSrGpFHk5RxgHMMqjUJmbgtqt5vscDtZpnk",
  "key7": "5jjLqxyCo8iJYhSrNyEUqh3HUmBtxMNFtw2ki295vANPCPQvsg8N8Gw9breSW7qiGG5H8dKRwyHZA91JQNjyWBd",
  "key8": "4NnWiQ8qzARTHW1EKVUFccHbVLxTvaeGoNdsqzHtJxTYGbYB9YdxxcSo4A4aU8htv2b6uLLf3ZL4HHCTdjtgwi6g",
  "key9": "4YAE4a7DKKEF3hNQgGynjouud4Nh1BiSAkyqeQhKYfZSt67VDt1N7eRKUcNizx5nWAz4U4KfQ2KtyLxkuKciJM2o",
  "key10": "3F2TW8RUApZgnivdKj632oxGWNAhrjogJAnhUweye88NSVJ2JAffBAXKfSs9QSYdEbjjftsCRJePVaCYG2VQZWyv",
  "key11": "29nGjzHHWe8oxYtSUz8gyG4vbnCzYY2WJGV25RKiVgV4WWb64GFsVUK6vGMxGcfkzVZn4hDe8twLBD5i9QZv8CtF",
  "key12": "5NECirYu5R9ywumnPAr8fNGXjzSabfEAsCsJGBNGkkNuNYX51VQkYqATD63UiscrpXYxkL5GXeGLJLHShqMnVJ4e",
  "key13": "2jwuT7rXMZCMY62QYBMHJXL64MUuh9578U7npcVwicx2zUwoxFSoagQVGwyYHNBe7MAs5fVyH6rgo6eh7H7MnTFJ",
  "key14": "5UZVhxaXdxxTuV2u6LJt5csdSMcVmvy4Uc4brmKNVmULdajobDEkTmPESLnFjbPYwBPbcePqfiptvg851SKt1UP5",
  "key15": "2m1H6w6DhiP1YaWRCBWKMt8xoqk3D5Vr8QXBZsAm9rwYNmCkbuVtnhm1fGzWvL9dPyUoxUyCotPfLdkP6r6389Mh",
  "key16": "3xMbRhHSuxtpbgGK8KCAUbKQ7ouGDLRaFrdaYPWsrFVXGjxRvqck52JNAVpA6EaCvi3P8CzUsJ9AsWEQTABxPsVN",
  "key17": "5dEATkcNsfrYb1iMLQ59t4RHN2GrmS2SHfB2SF5YHadhSaoGLiHsGpDqxq3AcKFxyUHuNJmu6inqGjieCRyy9kp",
  "key18": "oHFKP1quuzsUXGWu8SeSiBm7RGvePi2NXLFmXyMQLPuVac7EvdmS26dvptg9WqyJQ5tW4sweqmN7caeTDvWiviX",
  "key19": "4ybQefGz1chbTRBPGVUirx6zpuJpavJ1ZYDkmS5xDQRPgcotGnpLEGQEs5np1UhSfJPKH6S9ET6CXwWMH6Zp4XkY",
  "key20": "5z2zj2Mt9k2FEG1VB3jF7uRs9Dwgsrw36Z3YAzYZbwj4fDbotdoZuMYSpQhHhGQA3ecwyQ3WxcCpQgRuxX8aTgAS",
  "key21": "3YhptGseP4rh6G4paSfDuR7aneEy2Ly3wdKYdGuj5Fb2M9ASySycYmbQEJQfck4PJmcBQPKMCucRFgkv4coEQTSQ",
  "key22": "5BCtACk6mEzNTMTzX4c9ch3vP95csbRkgRwFqdzq1cwSVi8NaGbxosDaTisUPYqbngkocjRsYzfrt5v9BofSckwi",
  "key23": "acqayrTQt3cXcXFLEMkRShZzV7Cm4o4bdrprDr1Gmb3Ef5chk5PytznUXFKvWk4urmzJKq1PxLsbd63cfcRZDHE",
  "key24": "4MpiCjWMnWfoAKz41F7QTUgcFAwX2QwFUBNKQAXEqQw47aRqoJnCK2PDeNEpGY3EY6q6F4SZNMMmtqrMMCdFd3UB",
  "key25": "35Z28AYBEi1qQJKUuFcwXBywiv7nzqzdL8DogVmmLuqkBJn2B8XP1Qv9V8hRAiRQeEbqHN1vhkSDQkCCe351GdgL",
  "key26": "5iCQ5pGogU9yVe8ajUEpEBYTLfJBiifFpzPPLbr7qGjAgfVdMHbSYMZjLx6tAM8MvJwk29xc1BQi86MLjCFM31W4",
  "key27": "2q533Dw78taUZNDcFCUPSqhqRVSbbqbyimvSoS75GTJAGbaUAvpkFdgmxoWWsAPkrmScRHrGmKpELReptfAHTrPk",
  "key28": "3P9gWGDod6PhiDFsRWFnNzr6PQKjQtVx4sgFaenRRMKQ8194MZQ2qFs3xBvMn2uZzNdqpxreKBmLsRybNxbJ7skB",
  "key29": "3UDKTF8eXFLDYf1oTCBSK6RTccwQJs4r1PDey9T8hLqmxkxQT5jkCxWxUF4M8kNpvFvzDFZWECGoEVwYhQkQMURe",
  "key30": "2BTwyRPDdxKX6NfGCdAiSSwWL4xWpEtxvikH98c5CR9yHBokvihiPccEK5EfTGKX2fy2cK8wh61AaTUkAi7fnPGG",
  "key31": "d5s5tWMwsvv56GfDZ2sDfeDfezYrvnrYQ7mh7evSctidjPh3rT1uyww33bvGms1GDym3mkKkFaHVPTkMtWRHGtS",
  "key32": "4r9UUmY6133YzpkeTcxcRwGxmLKiLEZrgzdAeXgW8BqCjY4Mp2T5u7JxkSRbTBRRc9NLer1xitK1a2yAgbKzSUto",
  "key33": "8dwo5u1uBFxxmaECSvhF796443PoAxYVJwenxwBiA7J9nLexsW2qxxAEhmtkDWKpu7hXggruNxEThCswM3uNysV",
  "key34": "2fozPBHVQx9NVvRQSJZqXGzBAnePr6cvqSHgAV5qKXMX3xmAm2bzixpFHKNnnqrcBJe2dNsf6oc4HDKDKcMUzJME",
  "key35": "5DGLtmY5QQHQdncaktFHF37djZNAei3NhczCj9uhvsBYmBfgGWegY5ujahLc1SuWXBS5j9WW4jT28MVbGvHgnXJe",
  "key36": "4FjY4RmY6TtsZStmCmnE17FgWLmci8YYQL6hhmZkjXXfQHoikzCFQWd18qncDREGA8WkT68jNd6xG431BYs77qsx",
  "key37": "5z7uo9ub1cUR16ywLQvVM99pmcRDxGjeNUsAKvGrT3BGx5PgdauX66U48gPPHve2RGkLCEkCQg1LioEMCfz2vydC",
  "key38": "3BeEm9CpNAugFbSiZHP4Qmx8g3TYK4EF7eAhzdcXVQMxxZDeioRJxiB2idj9hmEUR17ymBTnQUnMC3kjCNjBMakh",
  "key39": "3r4yNaPbR97RujYR7QPHDXSUpUy8ZJnt4BfwxGWaS8N3kQHqc62ymFecS1j8jpKp79u8CJtX2nwAZCuNvJvvHRJF",
  "key40": "ScopJfMCMcYRGe4kyFveqCpEHpUW5aSvVZ1M1XhNHruXgwHGnMP3YjUELfo244awUE9ALw8K2QYvwn1feAVmKMA",
  "key41": "4KGAHEPk5LwJhMNbiZ2Susuf7Nz7DW3gRTcZSNK4zNJi8i4e486JSMbxtvoKgWQvRMrtZ6sYYeRR6q8NikkFSkmG",
  "key42": "4eQadjQ3BNnTB2D2ceyR86rzhXEV25GpXXBL2rotgrRXsyzJCp4P5UwEQ86LrsaZko2RxZmNNgSvyEFGk5x3mKU5",
  "key43": "5HXtFco2sDKE1xV8PA7hPCLVsNgY6zXStFzoPxqTzWRkUop1gcN98WgMjDw7ChbQ2qkVLWxd8jdgkQVMzTi8h7nL",
  "key44": "64Zit6ncFEX6XaaeKdhxfnzVJN9CtKtETkPxoRashx89xa3RFGmSeFC24s3Kbqcxh8ruNmMeLMgk5wFdpwA9ujaf",
  "key45": "5bb9fSVSpAcMzkmvM1NA9Nq8WwdDZqn4JXxA1L3SVEx9RHRiBYHwYSRMKdD1WtRvErKKHSK1UzFUTSQ7fpctY5kU"
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
