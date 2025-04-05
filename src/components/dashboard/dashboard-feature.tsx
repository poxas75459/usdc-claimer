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
    "QKU5DkVAo5mexbZ4MCkn48BbvtWmWiS8EMjevXGkV89CPcoNN46gjRwFThsmYQhRYXZoPPsBqocGLXU7BA3xwAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3494ooJZj9mTqXzDZFKiUypA7Fm5V1UCB3W7hjHJRQALozmKiGSTqfzxgn9dkmZwV9UaxhZq6jwaytd2qAqTvmKy",
  "key1": "4uGqrez4HKLuuWqhcQrUunhvSiQoAbU5wioktLNumwfKVVQsSY81FMykuYkAkeLKaxYYPTUVjB8symJBavW9fMFr",
  "key2": "4WduvZuhLdydzvvax6X1pK8AM4HiaHcrGA2UFQycoTC2sw8Xfac5mWaGPBQ8EfXwXvnuEnH687nvYXeVatGiNkDJ",
  "key3": "3UTZLiJKiVA2ZuTVYBw1coxYaz9PyeoZMge8nRyYhc4JxYiJN5bnXScGqH51uiejsX8emHC82ujcAiFcGFvt1wMU",
  "key4": "229cnU4rsH6HaSWCrJFwg8ue4syxFxzr8ZXzSeqQRtFL6duotyHBqZdsXUyexVrasyHkreoBQg3wfW1eYdRYRRVt",
  "key5": "3tnv1HExCeF6meEi83JqPDYFWYnqkYtgCUTSu9EUUrfh3oaso3U9cwjyQcxRRgEjKgqEA9jJXmNDqaQxhyq29CTg",
  "key6": "3HkUic39AzCfmUaK1h8vMuJj3biNerbFnMurAB5WThnYGm1Rkf3AT852kxyHTfRUh3ZgU1vPGVezJEgdq5CxUNzt",
  "key7": "5v3ZAR4QpK5LcJS3u75RBc15sybmNhRXNghKXRuhDS2xFaZsv8r6UUZvqAEcCyhpUmMS1pyD9JHaUdMENGzjxn24",
  "key8": "55ir6VEmocpdGnXiMx1D855qqVJoCChRSZAWLirXnfrDqWvwbk5KmZGHMq82po1PNUCcLxcXkBtwUDoCuTGTnspr",
  "key9": "dBbjMYGPQFXSRvWvzh1RS6N92eD8p9FDknZ26o75jjQTuRkaKL2MJRmz2DijgeugqWY1DPqAhFbbnXXZjwH6TXc",
  "key10": "2un8VmorgmUtBJ74Pp9XeswEzkrRAnsSR7FD25vw76wEJ5KpiXkd3PMxqDviQhhu3cogUYV2hfg7jNZmndLD1xPS",
  "key11": "2QmVVoDyARLBnJCPV4bek3z4paR1DmaKeXsSADMWQprzTJ2nKtPsEJ38r7YZ6DYTJbybpYrE8WGYSRFTGmaTi62F",
  "key12": "5g9t9kvKdi47jaeMjoigVYYSQzGPAkjAcnAVbyEVtFHQCc11EiyPwe4pVT8uswnKpKNgC8dKpcsXG3zRZuLvsnNr",
  "key13": "daVSrPM3pJ5K5aKepQ2Ziubs5rA2x2riU8f92cc3WTqPuXkDc4pQh2G9C5dCoqr2YnxfPD99G5X9ZoFniGyeF2m",
  "key14": "2SFF1nvMc3RNjTB77G1VDjyRamS5z68j5767fRtH5PJr9tXAuMtgAMoTNYb4fjXaBAWBQWXcb6wBUUuKE9QJ2311",
  "key15": "3MoUssnrCwZNn7ubKUxUa9nM4r7uxtV8VvK7AWrbHdY883oLBu5sfdUo7peG5F6Q28hx61pLUmpR8NZuZZfBtd3F",
  "key16": "47xniPHLF7JbiZhhTFCoyhUCvsSijJvN1GRu6c5xDXLv4nSTCLYdWJB1UV9uHb57gRVa3LpSoG3duPGvTCB6jTnC",
  "key17": "2bz9VnxUdhf4Z9j4n1zt5zqW6y5a7Q7GGpVSP97QeePQ6GQfysujxSuNgMDSrgDQwLzndxvPyAZi64ttovNgm49",
  "key18": "67YVyGudW2EBvxsbpi71oAbhJBy8ZtY3SsRUYtesgNNUEeuurAMFFNwYSiAtFk7tpRk148YaAngg5qZYTyctJTyS",
  "key19": "46ddMzQvk8a6PUPnDnCUJV1i1qtuyP9A5TJwvv9cTaFs6DybBePtcQEx8mjGZCcbaKbQYaLhikXDgSPkCpWcMMyb",
  "key20": "3hzJvmaHQQRMsksvHHVmUJXinUqBqP8PfGwmDVbV7BeGiS5g8aRHYS78ZJP6x6ewAD2VjPMHbRep8FMG9p8yoVhk",
  "key21": "4pr7B5Mo8cLpT6Yp35kjp6ZKDJR7mGm8mGqKvfKCrAseyd6EKyVH4y3P3TqjLQQJ5dUE7WsJcFkcoPpKNi66So91",
  "key22": "4FTY5xLeHkjmCWTwftQDzELGDkZduNzBnoAfvxUyGWzX1oCDkocpHzJrf4423zWnwao2p8iJmfQzVuFoZqS8rE6P",
  "key23": "2Jzs3E5WpkQnASYEfY3BrrJgCjwK1PbbEGHLyqoyNNELhhTS3Uc2zaPZoyrzkndRHPpv5kfmSDAc282CirYSsCsK",
  "key24": "4fwT8CHr4CK66zoRnAYrAANXL42CamVy68cosBr7d19occ36z5SMxSkXJbaqBFH9S4r5264E2L1UGoAi1gHiQcsN",
  "key25": "2UJtZXRa6bnWZWEMkKMg1SbHwXfk7tHAwqrCLrxiWFTVEsXVc4neDgRs72vwkzaHcafWXyrJkaLP7n2VfCNNVZc9",
  "key26": "5whgYPsubiTfEzCiguBAcz36w3PpA5xQmvABm2YVbFYgRp2XpvmzURebKeRGf8VZumAzaCS65NDrp733w1XbG1sN"
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
