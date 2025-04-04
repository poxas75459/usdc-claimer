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
    "4hn79w3Yr2MqsbFAJ5nxkn2eYdjVPpqK4HGFXnVYZRiyL2Z86okHsH5bmkVQMScnWHueBivyfxhDeG5u3HLQeDX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WbqZ6wWiETGZ9kkgKQCg7rU7AvmRKn9amiJsWcoGnF7yGQYCdvErvCZ7S6gUZ9b9cbgQZeeATsJSuALXew6aBcU",
  "key1": "q51EPHU1Qgxh7WcytvWB2jMtChzAfx9fkbrKRqQG2tnEErqg1reMdtEdgSN9qSbSvZkzMsCENdxzpyF3T7dfW45",
  "key2": "34Bg28WGbY73XEJwmrzqdPh3qp3jQQ5bq2GMPgqQTVuB2guzDFCrqWqyPwduLLsXkGhLhzoDPNaUX9G6d1zWSp7d",
  "key3": "3opn9XwjB3xyGfpYpEgW6xEWRwvNQ1GBvo5GJdeZ4cDYgvwdUhfxLk3gWJJyhCNbEFV7EsgrH8xKCt1Te8e5y6xF",
  "key4": "4LfKvTd5vjbrKogc623Bz4qmbTh7LBFLh5uUBuqwDxaHm9Atjy6UXQZpvqyHDjS4MH4u3LNt4BjaKqdwLoGzN6HW",
  "key5": "4hrvVK27C3PRanvsrZWekm5eg9cxzhVjvoxSx946BQW7oYKpj26TxsaP1Xc6bbQuUj5M3N99Z9vGMpziTuVDkMBA",
  "key6": "5Q82V9gzAFeboUDCSYoNASgAfWbjsFirxbQEzYjPeMawBTZeBrkjYQXgXru3Z8Y2dL8cX7UP3ortPfDVrrkWsxk4",
  "key7": "GangmziPrho7d2DNxwLeTuYhxsrfuw7pqMQ7tZipGYHBBF15wUkRNtS8oW8kNYzdRmUJWwtNeJG8KSJEermZmEn",
  "key8": "4N7mfViYw1FnQraNnb5iLuTGiTWyeCNQ7STFppDLdBUVRLXWFiNCcvJhqRakpqogjfaE3pFopjyLwVRNLPXSyGSN",
  "key9": "26AhyGwYuXDbtz2MGj2umP8b6m1q1eM8ocBDave16Bbq65PrwPneX9q4Nk2woLWfpsuW246F38VuqJeVNhyhQQPm",
  "key10": "5X1HaQ9XgTmNr56JsrDhG3dBwCFWboaRfgadtDqRz8RuWYYvvRi8p9iT8rR7W844SQAaaJBS3NXFa5uqvhqb9wQK",
  "key11": "4RT5jKkDweiyMa3mzrVe7qhLc3AigtzBJbVS84CJJRrUFQ3ZGbKMAbTqP47tifLRRYHdrfgfuj9pMAycxCnwZHCU",
  "key12": "3yMjwbzTsRC3CgnWSemNvvyjLLMtxXJpozQxZKW7urXSwZr8dxAM7Vo1VcLZqfrJcCq82B8awg3bYAjBrarwpZpu",
  "key13": "4Q1JYDdRsyMfJCYaEsZyjtcWVRoGekfxrpwsyFXsmSKo4PYceRW4ee5rYScF21hVKPR9DsEEZcmfPwEuLwxZPw3q",
  "key14": "4JYrjVPg7FNWCzczDVJLcPk5HdHMrdapwAjpfpUBX5VHyENkAFmb5wmM5jj2brfgXDDXNC18cnTE6ov1sEhEdxz6",
  "key15": "5GuSB8R74faB5yKeH1DSzLvRExBdfDbzqnneVWc8p9M5X4Usyikjiy4YGvySXQMi1N1R2eHxFYm15RCrh9z1gn4Z",
  "key16": "4Zuf4dVTbnSXeabPzWwjfJ1smdrPaVHpRnMG6RozwGvUBxUz65sC5pG2CBTiEbiM7EWdASQsXcA3bPkUaYtbwQGk",
  "key17": "4t1iGKNVurmWAL1MwU81FQV9vYUfnG6QjpA23dHyxX9HWkoshc1tREXPk5Uw7hukm38kCZhcoqKEJqRFSFTB2uW5",
  "key18": "5Cf5rLbiWoofyoAbyCiuN81nrMdgb5v5krjniagDjqjUZ458Ejbg9A5g3JBerJfqNaVnZ55DivywFNrGwzyAdyBY",
  "key19": "2krLGsSVboJcRe7HcsDFmq8BTYBrQuvAcvPhKWFeTxfFHhu1jZUeridKAV2KjH3GE7ZHiYaKzwvTDNiTp44Kydzw",
  "key20": "5hRqdocJbvZXVeCZx3mcWvSACbbVrqEbof8hyipoPDVUNSbnoRtQ8B4eFEjv4etJoK97naYDKbuHecPs5bWDetZA",
  "key21": "2diLRVLdvVSLoHxVmfJXy8PbtHSR5iehUFt9E3ceubYGZnvakWv5EE3xDZsg7BzUTZhrEjYJtzH5ckxAVN3HbVnx",
  "key22": "3AmWA7Bo8VD2Uxh1GvZSY3JAQaEe8AubBkgmjCXnkHspPJeV7qnYkfKtg4Fqo9bx9YQnz9BXnfJjXxC5NGVyV9au",
  "key23": "h353sGVS7fqmDonsFsKjfUH38EJVPoxkFTWciUzuzQbfNbZqo5pA21vnbpgcyAMbeSa9oZhtKvNZqhGsxBqbzXZ",
  "key24": "4rKyyw4cmtGCGwsnT6gikJCbLCCtwCqyFQTX57APUHUmmXNddhZ7nRegNsVaifpZx4ksG1unevyDtDBSZYVAKKaB",
  "key25": "2hTYw4ng6WGeFjxBzpnoFDuxUdoL9JM7Yfd6M3aYdCdm3hjQjQ6XMTEuQ2ZvUEd2ZRYchzJDGDV89mYp3rsUm7Cw",
  "key26": "3ZLfo56sttfzXg9tPRdm6Lxnxe1Nj1aj88n3oAqJyQ8sUPkdy13yzVQtCBupyZMbykwNoHGPPSadNNorQdtZQyha",
  "key27": "45HKZGLkp1qxRP8qcmC9GErEF2Ya1dzeqDaXqhG8yC811qZqcP9gSzUYjtm1WtBigjidsos4Apuknm7hTF5gh1ob",
  "key28": "27XwjoD15uPb1Jdg3wMtKEEg8XC9UAuy2QcUdSPikWM1AKcXAZkckXXk4hW48jp4hfyPbBwBnMSP5fp9ZbN4a2oX",
  "key29": "66gTXp4u9HnfKDLJq2djqWyaubh3kXH5EtZhU2Wzy6c5LAbDyBJFyKZKkR4LFHDMVWSvdDjP3fQkqvd2f3jYnytU",
  "key30": "5kWHUrgfCGx1PxvJs8hBh6wRACdGgd34R9H2Zwn8cQHoLnx4c5fzxUFWMbvi86LFZmiPXGKGcxNvtPHHcxTrDDg3",
  "key31": "3zHx14qsGhcLxALudpqL4sVHmSQHBEN4MFA2FoUtRCPWH1XdyK2Bfpdg5T2XjXv7n4Hav4EeFSdnDZaWq1JNCrez",
  "key32": "4dSUUpzuQkhQMWU2HUifpzDX5iZ4yhPv2fNhRqpdoWyiL6m8Nk6G73NDaKS9gShgm5Dt8roG4mjHP9zSADiMTkwz",
  "key33": "gjkRTSD8tWujd2c5DubjMczHQu12XUcmzs2EhNH81VonU8WkhDfwsi8zJQhyWFjNgaK2ub2FUzKSBdeLjpMZc8b",
  "key34": "4T4S8ucZW9D4hov9P76icp2FTEQH3VDcjwUAXqKWqTumBBopG2hnkKzybSufBPrUZchAQprgxZ2suaJRkjf596ap"
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
