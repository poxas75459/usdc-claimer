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
    "2LELNPu3GEEhzhczgAWeYGsFhXWf7Uf1n3pwooqfTV1iQCZrwe7HSV2M2iVXwCFanjFaABQM1cQXGCDdoSEqBGpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3THtxhRBMq9tJTW1zYSuC1sXFULmwhx1PmVvBtFofrtdAMUJcjzt1JtzMhtorTvMKUdWVDzYhL8evVoQ2d6gyp41",
  "key1": "rymWPfs6ti4JWmhqDHSaFumkYWK6mAagvajhbkqGxV5QWteX5W3T2kpwJAp5K74mswUTAEUubkv52AZmDuvZMrL",
  "key2": "2yHHP2CQXUrtogGDQrkx14aLKK78NbufyYPDBSvHg7xWsThr8GqQTuQwjTGRR9AuDKXbxRE5WyqC2916icUrVLnw",
  "key3": "3wtTTpmuJaSzLsjPTAPjrK88Q6na5QZJaKUa9QKVCv5vyU6aaS3qnRixYdtDmsbm8ghF7ReXdLqmhjx6dCBTWC25",
  "key4": "4YFKX5FubEsagrbKWDSV4RUEvZFd716iL9fkNt5BQwuCp6p2zMqUfMNxYx1Xi4ZJtsGeLmGtUhRgXD3GH9ktRtTD",
  "key5": "5bEwwk2UeK53aGc1pTbykftey2eMQMN6UgPNZD4x6Pj3uYmocJh2hTY1nAL36iTjjMbWi3dWj5W9Mw6h8L7yBo3P",
  "key6": "5tAt5TLbnvWkYhYTQtV4QVxvCXHszhWSi7JCAxrEDh2HwMbi2fb7Ss2iDnnJaEDLkDCNJPj32e7ZQMF9SVzgZJqt",
  "key7": "j45oBGba5a4WmPPZPqGknNVYg15eT5151cvuxiLUE6r1nWBW2i3MFFnT7Lx9uBKtWntLNpuEwvyS78wYKd9FWwj",
  "key8": "KXGZQDqkq7FY56zPgYsKMr2UDAT5MaTqhvMt9ZALe7oKGZwa8HEuMEtKW92S88Fet6hoX5CbNzC84XoSY1oCi3F",
  "key9": "3x6EbeuGNwXiPn1hyKCvACBN7ztX4Vy4StWyimgCsiUTAEuMYbAaVpYJCVkw9fvKNsvaifMm7oxVLHzsGoWsYHib",
  "key10": "5oMPgccsWP6kWkE6uKuXiDUbodAQYJi3VGtBRmg1ECtuzJMJ8SiJg6iPAvLYcArwho7grRvrJzHQWw99XtwYiBZo",
  "key11": "5oogFAz1muxnpNofZUqWVRXNy3i3FPiixUNeU7F6vfhxUo29obaHHGTPD6dXXjK5NAQLMXJ6Rosdf4wgAHcgDKnT",
  "key12": "P7JsYSkXqEP3mKemKnavVmhU6XYvBKW22MZAZHFsgqDywYZ3mHKz1aY56X6odPZdD9YJoayYC9hCftxNKEWuWWE",
  "key13": "3pYCesRYN5bkX3NjQUBS7qH43zhvVzp4G45Aa8GDD3BGG4bZTJqZefCf9fjBSL7oDKVRQkt6RGbEM9LHAG57kzJ1",
  "key14": "yP5ctQDo3GqoBSYQqTGH26sK3YFDNrgE74x7KJr9MEBvwiaUt9NrLAkaQqKuaNniuK9CpUn51hi5ssmvYN3rscZ",
  "key15": "583nqecsYTSguwGL7X5GTKKk4k9968o6M6UKmxyTgDEWb4EEQTDj9WUzCSRTrfowQC7qy3qjr4eEtWs5J18aHwtQ",
  "key16": "4KUxoW4NTnPruAdoqiaPggfdeJCRqHPscz6zkpi3nGWZcttSp8keMiCnpVCkeUCwUzLtC1PDwzGzfsuZiTFM4KiK",
  "key17": "Pf5beRTEX9tTgAZsWMpyVj9vUsFUfZmH5K4GQE6Tg2yCQbp4tKU3zcut5iisPigEuZ9qziJQnjXeJ4JEMbUUVxt",
  "key18": "H76ozPQDuSLkRLrh63QgV7okuHXoS4UNku4HhhPP9ECs9ffLuoHdWmtjErS3JN26mAk26rSs9AjziSkXN6ZeQzr",
  "key19": "gfcAn7Nyoa67wMZ9eH2SGD9ouB7eqwjJH6mGmyzKCybZjWDCV2cHd3YmfuJefKZW8ACRYamGCdXgEniDcABg9EG",
  "key20": "2ztKpr8Fz2kAz7sJWbX2mq3RSobe8agvu9rW2spjphPGtGVrN4wH6iATwrFWqmPZsLgDDUbqKPxwBmpuoZKDVjQt",
  "key21": "3kCm34AFosVmGN51jkJZdKfJoX4ogPY4cBPqNoWDmk9w9Y7s6yP9MwNRFqts92MKo3aGSF1nWJUafs9Y4vigqbCa",
  "key22": "FiaG5waPduwgiR1NrEmuRzvQhB6QcvkKTD5RZQ6A9iKPKcU7Vaeco7KKzxzhkU4vBWDZe7gjpyf16gfe6gEmPgg",
  "key23": "6gmcCzmxedjpdam9hncTF3RMU2exiSAayboYXHkkVNLF2mfBhAZsPJyRVMxJXSyBGoz1M3QPzPguDCk9C5RQPMk",
  "key24": "foJwMWsu21heX7eF5uD9zjhvqaxu3ecrCz87wXUTwa7pXQZ7V9Dyb8k3hJpvJJB73Ktst3MA2geJ6SW3eGEBDSA",
  "key25": "4HPyWkfaD4ohAnFKZqNQ5qhpb3iioZa9kEhw4Z6u12EYfbJrjQsz4is7ibZYigUHcRZbd58ma9HFnbR6XqWMGmsu",
  "key26": "5qJt8rx9xZaj64Bu8aUCE9tAS8keL4mAap9AkzvYCpKHLS3WnoQDT3EdxUZPV8VX2kHSHyEJwwjWywgg6VSAF9JK",
  "key27": "424ChCkMAht25bHjfsUwZsvHPhTJ3zN9Dwc2pu1ggfebYRSbM4jabcZAjaMhtJyeVfkBDcQYax2pMxUcvPVkAq29",
  "key28": "3Fpi7niBr3itbDSosnDYGjKMMWjDFEdEEm4VfWninpVyuKD6v5omXWcp8EXQXYcV627Bj882xkd7o1HDUttdaV6L",
  "key29": "cvwgX3ow1a16MPEWYo7RfvX5U1EzvQK9qR3kshvERHJi2Szp2sEQ5pTHAhnuuJRnuyMRWosW63sxQp7hxDPYi6z",
  "key30": "2S3t8skmehkQRWYjJY64ArhnWbr6nL4v76HTWBbrLRJ3icrHRazhcJ2B9mpG4xrfhRsCe42UbC3cjkRRXyGBTry5",
  "key31": "5jYR63Hwbb8BjsrC7gQ8gRLtidphciwQJcYZ7B6PqZyWzCUAjHWpUQ1ohLz58Jc1GGrTwrHV5rfeiZd5zQkFVWrM",
  "key32": "2kSA9LSQCpRJopjFqFpaXB8Z6nzk2oF7Qke7yYK7otADUbNzH7xMWgt3QfwcSgcUAnaa1Pc3EFHvjNx5sm2zUYNU",
  "key33": "3UEZAtz3Hykt781tHD9Q87GN11HqTSMrsheY7ZsJHEtknVVokcUkGASVNvjP8jFZZT2PUTzieJnGdRnhwFjnPwAo",
  "key34": "2XhyCDjda4YkKSeJHAaddSh8ZxhRrdUnEMNo4TN3HpYouHcyYG3Ngk72W8JZFjzfA4XoBLRhVdFmap7TbqhEP8gd",
  "key35": "4FDXHp4Seookp5XULwx8qp1PUT9w7JDtsiLZ7bMJhKNM5YZGepvA76ZNoZs9XEsUnPt376JzqJ1yNY61XdWJztXX",
  "key36": "4gtzriHCwEksADcnFekPMcYHR71QevaKE1KFsUKt8GL67x9KiYkygMwSWXKowVMnwvc7QzokR2QM3eixuZffa9uH"
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
