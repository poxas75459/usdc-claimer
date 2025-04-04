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
    "nGr875Ykxzd6ecxfofUwGejuvJkr6tkbNqLVD23GT2D9YYZmKWSDw9wrzFmuPgCfjDbMXUsVPk4Bc4gJaqfBtnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CcFzLTJp8msTpvD7PrYyHyrf9QuPQtrahYK6J2E5QKycyUaAMdqSt7jS58DuupNzWZWeiHSPyZgrFMxQKh7ykbf",
  "key1": "3FLZ2BTsGU2HEwGU3spYNiueNuBbmuioAnPFqVP3e8dmnc1Dr6UKGegbufR234vzs7DHmp88AQkSvnwTmZPDDiUb",
  "key2": "dT6wuobbz7oZic2mfHpNaiy3CehJoDfnSDPzBHsrF72KtCg7p57mkyp2DocRjZS8Hzsh4CDzfXou4H5fmTjpUKo",
  "key3": "4V2BLukrPGCvdaAEQYdzTjmkg4ig87z9sDiLgaB6ppd2becsTMCbATqja857NmiKetdms3uV4fL9euCgH8xyqXDp",
  "key4": "3renLJ2RfsQ8jrMC9tFC5QbWXQhLahRThCVpQr7zE1HKa5nEiYQ1cNbJs5GdrFq2XRECewmPYSqhPsAhFfhzchk5",
  "key5": "5ZU6AuDu2dSNM91EGwoftxgWeJ1woAcKicaVxoUQy1yTRgJP6x4QmsTnzBFxRQnG65NEmL2G8SJK192WpsKquzPu",
  "key6": "4dCBffngWTwX487kojPSjr1dEfnk7puXiPK1hePWuSpUCdfN2doZeqfbT5jgoCESV7m9wiNFXZFL8bffUBpgfL7s",
  "key7": "27SbcSiJK9MSH4kmmxhdzo8BdCVE2Q97e2KyTpkW1XEsyUqvdwN1yV7rMSu15U8tEoUrJsZqZzyycGNrdMUv5n8N",
  "key8": "56mzDcTtb6AWGgsx6mW99aCrPpSZ1JPCHYTVdb3Zo4xuWwQGVaPMyQX36eonQ6gADkiHwJDXXNPJZeNnqrbCgcsn",
  "key9": "pSNNRRdnd5TSLdFVvTW7ifFpzHn1ea9YdJv9M97znkFJLvnmvkEBUmCf2upwZy7TypmvgZyuqQzyNQiDeUyXjWQ",
  "key10": "5dUFhZjbpPNt9QWARNRaL13QsLEaPXFh6Xz1vimMSzPnqQqa8f8B2EVi2Pv4w2vupTcXUtEG5GU49LrdacwVdJNF",
  "key11": "5Rkqpf26S7k7e6bi7TsLyUSnQrqvYgpwf3qeCuN1sboSAHjq7zithU9ehZDuf1A7eq12ka7GDFfJzkyYMHBaZMR",
  "key12": "4AtA29Sb9BaNqHeLYaRMezgUtAtNrggMXXFhcr7td36aB32oZGA8p9nhZ6AUn3847SzCnsU2rmZZKF7Vfxs6oHj6",
  "key13": "2SQEhXqEvQ1d4b6ejHvhgJk6Q9ZxNm5FjBkwEboerrJyhgQzJe6Bi9WGnZp7sWcDdVGPMdCeuX5Ho11S8EFouf5c",
  "key14": "419qEy5FRrcVBEynD5SprNUfnAHbL7v7g7J6YsJhXmpCDHh3gJvrnYFk6TxrtD5Pk1cZsYcctzQsQCHgp7HmxMbQ",
  "key15": "41BzXcpazf4zvSTdPXNQ4ouL4qWHmDHx43SBnAaKw1fQz1FFXAaBZGUz6G3F3KFqRtBy936koXXEQbYpBhagavhF",
  "key16": "2UE7D87ni2znpTeBrpH7CciqWCSvgNAGExsnKKr5Vm4EedeTjzX2Mq7ffPvLQ1tcQGzuAog625YbdDR6w3XEqqqZ",
  "key17": "3b8ASQuQRM8Znd1bRzMDAvvSXXGJakF7BRWJ71zzprMpTAko4Xux4v91DBgFuVMezdKndsPfr1WQPcSfoJgPZYze",
  "key18": "4ZXZGp5Rzfw1KMogj36PWPqKFDaz6UYPkAka1deuT2QvfU4u8QZDCk9WHs73ehySkvDXa5y8EVeHB7swtYe7cnrP",
  "key19": "3nTTijJQRoWM14gREEesfV3rHssHCDWBm8ye9yDhLBje8asQTFgoy7s8rxxaQDK7JeTLHQmeLj6aNVVrC3mWeF2B",
  "key20": "5oAonKtvgmTZipfHyhkyQ1PxDdUcMA7qhbzGPkPvKnLK2upYKN11x6iNDJHz7TKe6XPNLj7Wk2qpQGPnCXDYCGgW",
  "key21": "2BXdcGgEDWHnCt8Up9AvBYbiAi9nrwFimPsDiQxvnV4sXHcy9eXhnUXN9wFj1WDz8h9z7NKAXfAg5ZnxnAWr2b1R",
  "key22": "4DYjU2YtjSowDJsKADYNtQtgdgRegDswTHBN8z3XaHAihopChqwwwEPemcnKhpmvRaVK7VvJWEKUFQEDPHp427FY",
  "key23": "Q1EU9zKF6Rz4x38TCgDQneuNLaXCDLRvZH95YWV5CCT2Pkqe7gs87AMsYxd4PqZswqGwjbbAhoDXfcZoi1cm2Ct",
  "key24": "5bemevSNueD23SjxRKfJ3YqMtdeAG2ZtpbatTcWdcjDnLNTgSTSzCTuu6efJ23H32sCVtxAzGo3Zk2raTDLuPorD",
  "key25": "42YeQsfcZtTFfWvzo8Y6mpXDawSDa9cMCF3Zj4Z6AUVkmR6HHPTF2CnL9k3HzfNPNiMPM2BwzBRqqobF4P5gAGy7",
  "key26": "wWGZH8WhXEyaQEh1ztuWV1pcVrxU7pVRXuGBSzQgXE18NZJ67bute7AjYTg7fV1KVbKzfvDbvisRsqvSKJkeTab",
  "key27": "3me72V5f7op4tdUab32ePh6d3GnRdhNHkCSnLDiZdKqwh7CuqGwTREPhfxJrt3Z7JQqVqAHPYi6m57hm9FgN3t4b",
  "key28": "3aRy4A26dRS6TfZGf81oHVRguSUm55i2yE6XD7dpaNnDzPcHGwgmDrG9EcTiks2vvwnekgMYSEwwwXkUohZMcyWh",
  "key29": "5FRjMWaY5n4KLZ43krEjwwjo6Vhhx5rqU8JrsqdfxuJH5f2LvEf9UbCvUAYYtVSXusGHgrX66MY3r7YNf1Eammm8",
  "key30": "2iCCaauwVAQ2HThSnxAYCbwKoioi6UMnk7EEkFwvbcpoezV1Ze7eT645NFXyWYPzVCEiZpCBse5q5CHJ2ufyQ4Ad",
  "key31": "zPPE1hCgQnTStSZuMLEx3oQ4gBXU1sW3fD68TzQ8LsxbggYuvcReTXGARHqoEueM34g33qbQTwodEjAiMRhHcmb",
  "key32": "3cGddmjSYDBe5xh7jSq9QGQ8CdBALCstL6xXm44nmKQvqTPiSrzfhpMADN3diuTdZcFTBHH6EgcSpimH2YR2S3oR",
  "key33": "596NXbBy6rWBQEBiAXsNcTmpuPA1uG7xxRCL6KnSiRqkEsSGymstFNkXuF988jRPrEBaudN93MMYF5eGVa3HgDXD"
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
