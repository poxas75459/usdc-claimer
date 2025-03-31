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
    "54gLXhDwADi5KaSUwYBVnGkNm2RWNTsNfqghPnCd46L91CTsuPPjSy1tKyPyAWrFtdfV5u53QQN8V2c1PT2LVRGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45oD43VePNDow1AwCqXyKLfXo9UCYg9RGbaT2GpSHgCS5s8nQhoysMbphDU886T5KyDWv7AgShGYFnn8bdyaoHum",
  "key1": "4RihC3WFLWm8KdrngvxB3hJKMX4SDCjnGfrHhoiR2SEDnnWBLzXAzMT1236KJ5kjq7QiZ85AvKbYjjGjSp3sCNes",
  "key2": "5VfaXnVzMTU4zYhi9EnaEdwGFtdeLJWj6enD1gYg4KsUMwZNN2aej2rowHPUVLrUh5XwjPVRWuUnBiWpX2eXFd6y",
  "key3": "5kScGiwBd2xDoqP9LmgjfMkhA6YrLfV2F4TCzgQLPuaoK3xij8iiEJhef62Vh9QTC1rh5P8ouvm1ThFEGzfa8eVB",
  "key4": "4eQYBnJDDtzCnqMnyrDMzbswNv4U2DqThUKBL1NHpiCZiymyjC6FmgPZBe8tzCu3EYJf3CBFEicVZxwV3oWwR8M4",
  "key5": "Y1JDJhgPtyEyJMrYKYiDFhGF3qadujvsM8WQK24utCwPg6iUVHg8zQpfumXPC12kchnkFSi6w8XGDoemx9iFg1U",
  "key6": "2D11V3TFRrQsavo7QbHcJ5pyg7kiPoEnMsokCJxoBjyq8FhsotFA8474vdXSTzZHW3ijFuRAT3Gon99LGbKqwfif",
  "key7": "h4c4dWS2ucxerjmjDf5mTndPAB2MrjaT1359jbppLLn7Lu2FtUY8fn1hH53HA9M92ynMSd7zJgHbfpUbsoXvK2A",
  "key8": "4JFLWUqpDRohfJWM2A1cS9pgb8wfrtPFQTXehgwHsuJDD1afVBqGzaTzeghKD9GHWh9V8rHMMPdhrWcX1L3maUgY",
  "key9": "4Sms6N184WbFN2DATxZ5z1iTfRq7fYjMfe9kd7pruthZDAe4fiKtWG7fM9wpvEHbrKqyFUZAkWeR8Rcr2VF9oFir",
  "key10": "2383TtWAgFvy5HpY5D6ifzMs9S2MG1oFVjMeUYDuTcSX143Hupjjd97w6oizEencnG9WcdkVxLNg21Q2bJyS8Rdo",
  "key11": "31oz2X3zb2npv6nGR7HXQ8qNgj29Bukz2MsWenjGcE9LCCiiPJJoxxeHYzpTapT7bfJozrPNmnj7bkbGi5pWYkFB",
  "key12": "2ostwcTqgDKnyVvCwkU8bArtxyt1ZdMGr5gF4aeqWsFXiFK6EtmqzdjhBrEP3xvj4SX94tJmjdi19kWTJs18cYf5",
  "key13": "5RFrNSU1mSAJpubfQQakqaFnTKpdSuyzP22VwX2Eadv7pp5zeqAMWHCQ46AV2Vjh1vZ8Eqh4KtAQSyEC27uThvfB",
  "key14": "5cdQZzeMHnZ7keMX6xYv1vqVo6kJ5mxz6kCrBqZUpLXYYL3e4HTTx2tACmugX3okeosoeSWKWwefQWGeyGDf3pJ2",
  "key15": "4JLpUBLAdm2icUMtA81Q6NkoTusRSxUyeTGDgSr3UEQ6E77V8vnxsgp4smyZKWtg6oE8G91TMfTuqmSLo6NLWbfq",
  "key16": "2Hda72j4AyRkvMdo3qwgpH3wCmKSYWhuJ5tQeUQhT162p9L4SoYMzyoVPjRjzKGALwtHh5SBcdwivrYHRYegxL7r",
  "key17": "4NaF62MRZPDaZTEdtxxosKdmZCQVoEJBJB3CXU1xxmZ51cS2Z6KcB3yFdvNatV5VYirvcYsX6psMhq94b632pnjE",
  "key18": "RZmiSxV9suvaDKSzpwivButKDkjsijUwvuPTpzJRWYrqbMKFZzkH3afEpMSEKpFFGwmnhe1sDDabBRVtSFk2WCJ",
  "key19": "3idqxbG4DutbSyFUyL4JXiWav5iYvSDnaoF1Qw8VUDnxgvLBDd86WGHiAnGjBYgM6anuMTEWLj26Um7ebFjSDXWM",
  "key20": "4Rv8pM4pLMFaUoTcgL1xvcumM5FnC8ABptTpcGdMC7yzieuvvNEA7HWh3tMTZncMoh7gNCUUWaT2c6V97iZNEDVM",
  "key21": "yGJsBHne7MQFM9qLwNPaXrJLbidFzekg8yzQ6ugrUZGSLFsgc4EXHW7PKfz4cNkXU3fch6WwdLdY7RDbRZZ2amc",
  "key22": "5XsEuVyZnTidhUWM8DadDM7MsVmAVuiw2oSYL5e9bio2hiK8ALwHHvbaYSzVCewMmVzkJAePPe5nSbK4Ehy1ZTNq",
  "key23": "5aYNemiHExYke3XfF8LyRWTAhXyMTg8mwchDs5UxF3BqxYu7Kn5hinSbUMqc6WN4mTHrSEyskzoQuiMHBND3YXJV",
  "key24": "5jftC4AVxkQu3MRSXxcBp2h2hJZmhQm1Bjh1Xfj9gGTaFiNng4ZpkCzJZEp9zeUfe6SFUdtKg3new7mL6ViHdbv3",
  "key25": "5AcMPg2fbpesvW8L4wNQtcELoFvjsjQue1oWkUU72u7B6xrrXoWqWBJNv9rNEGhKsDyUhPLG583sjeonhySiax8f",
  "key26": "4r7wvt6vSnzyjK4PCB91RMhijtELTiUF3hvo8pkGtWByzJracWdcz4585fxwLdBfH8QAnYG4iNUk3kvG7Q8BB7VH",
  "key27": "2c1wNm3fY2MUQCSKdjMREuM9Z7D5dNaYqcEpnMr6onP3xvXiLWqB4HpSy224Xsm4mxSnprAFPdE91GSRxGLvxxm",
  "key28": "2xR6PV9mQYRWXAxgLPLWNRPEqJ2eTqdCFMAn3tiCvAjnbgQKWqBvUX4uv62xLvhYZ1a23pKKTZRyhHwyNjm9w7pv",
  "key29": "pWvfiWb4Tj1mC78XKRvrU54nrAqpfTPbY97VmPDWpw5bKJ2x5xSGpDAQwvyj9zXY7jbxtv5mACEWDHachrEP88Y"
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
