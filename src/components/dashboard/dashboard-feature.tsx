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
    "NepSTri6AZrW41BPtzHL9TDKuqGryGggoQNrN94GLABEMtUSdNmNf3BtKZN9WxG1R4g36duzEnA742Bfj1RoHJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hwUoWrqMUHMPmn9o3jGsZRNs9wkNV8CcVTqbnKadxoV9xnP593isd9sUUMXocEZjMDgKLmvKGQs8pX9kkg8pQv1",
  "key1": "26dy3rCV4xQHnqDcjR9H51BGaUrDGEEhimek34iVWkWSFECVFuYCWjn3ZGEFtnijehdYRMx5brRJLKBzk3eLo4EC",
  "key2": "3pR33Xe2H11cKG1FK8TYgVzcunt4K9aGPggCvJPsq7jxCvzoUZrqfbPydQ3cHUm3C7RBpT23E7vUwCQsUwy7XYny",
  "key3": "2nwNM8ikSWNX9P3m8LNepGLSxjkpzh7ygGogSCvahZx4Vksjim1efABvWzAnfRuki11LzLdrrKzXV3gKTGbWJctZ",
  "key4": "SM1FyTQKgxcMWoLJqaKe14N5qkhGeC5GYdpt2P9shxvYZYU8FFB4ahUNLCXk9Hge7SYDGHU6D4qe5Ph3UoWWpZ7",
  "key5": "4YcVH34PGVofZDzeD71JXD2RPQjbNwbgeC2tVb7QGQfQF9qxZfZxeMoB2WKaczDPsCsRKViffe7MFNshd81qNfpY",
  "key6": "phvvpbk1Yq61WgPdq3CuUuF93oAD6aCaBagqrLP3oxFy6n2uL8NNcmYfEQhtjpjesp6zs6YmADiKncLA4C7d7GF",
  "key7": "4agaeeUA5rCAYf1nsezEbi1qjPN5ih89PMZciMr18b7eAqtkkGhGugytbjACygDdaLBaNssgnL2ZqVGbCFopZsfh",
  "key8": "PpEmT8RwCv87tAm2zaQpNecrKomm3pQmJndQ7TmpfwmWTrdWHqmoDSuwvD8sWusJ6SEB8RxKN35HBZHAGNquHT5",
  "key9": "iUACdMNQH2XHiKeRJFk5fi8DPbu9i47f91hWg8pTpBoqhGvvobYaG1KSztWihgwN16FwctJ48uULSyhhxzRhPzG",
  "key10": "51QGp4Ju8SNNDcBunzeNnmeXmUedtvWRYLNbetiSQPkHeVaFmBdtPhDJywK2g1wV3EdRPcvZjsD5tsBGubmFhQz7",
  "key11": "3VWSe1QTz45F2d2CdQ8bpYByzANjQqHrZwmWjDXuNziGBCZAJPwmKrUS7LT37uPvXM1cqz65Y1wZ9pCv4s8yX26N",
  "key12": "1LAe7NAtncDnpPB1fBKfjjRqzcA9qxzEfVS14vE6ce2YepHQ4czMLXS9C28kZqehV7RVcGf4t58chkhK3NtvFp",
  "key13": "25EXsFe47E7bjsV9Eun15DfcWcRzB3yy4qZNW1iQ1bWfhwVx1qfdytQnuoj8X3DVyHFQLKeXJj6AqFib67XuH69V",
  "key14": "58jokuXE7AHKp8MvoWAJRzfK6JbfZyAj6jyKu34ZNYjnARfWTuoyEHnKQWUefTB63bfxbdxdSVfRB9VUD7ruk9dr",
  "key15": "5h5xPY9DbAu8M6H6m3cnbyDHXPk6BZSAx7ZjDrKUXW65s6zZ4zsefox1Tci4kSTAnkVyWFfQq21S5a5x2CWRrFm8",
  "key16": "49QKDnDFNPbKWyFGkPFRtHmCC5mD6rRqLLwp9apssBRqNrjstvotddzdtZKHageBRswmWX1zQVYMkstecQ63jfAD",
  "key17": "3M4zVfwXg2agVgNidb2i1brNgdy5fsJNYzbghoX9oLoDRjioVzvF8dxvu8274aru8bUDNvZCVCChh9dF2k9cNs9u",
  "key18": "4XEHjiGY7Yh7khhaQWZZm5heBkwbbFoBqaXTZ4Q9fxE6kKHu4fC7v64tZ7928KjsSczq9J1FBKZ6PeUxDhtxEeK2",
  "key19": "4j1ntKW67FnYyPaEK2P9nLXR4n3eXVhyB2ih6AXNuf6yWFuH7F7D95ASq8ixJ5XsyFjhHWatkMS6WYA9936N7qok",
  "key20": "4C96E1ZxjjMscvkaDHa1QpQRay6SSoaHFYb7VHrMJFVX4NcAqBhV8e2vwHs3QmfaqQvAbA5Y8ZZzuB1kp6ypbpm1",
  "key21": "4nsCNmkYZabVwetTtPM4zo3bQBXjiR1y62wo7NM6sQjNPVPf2vpTqgCWoC4FU5bezmGbwX3q7APTJmni7E5NGYz8",
  "key22": "pzhAu7TSW4PAw7UQJjWGpMMf9DspWZBLUeEziBbscdDys9rFVLZERwJrNKyZPZuBj3pBqAFcJhU6qw8Ssgw5my4",
  "key23": "5HxowhqyQcjuXtSv2AWAxTn2XEUaj1TKD7oPQE7RxfscsRNNzyULgSuG48Z8Y4ZctYfqRmbNGVxQnxXFWdADA1UQ",
  "key24": "5Fj8anWAkY3JUZgAqSKzATYt3RFtzQnEUPd4HwdVK3qGYNvTEyxgvdk4eRyKJeWrcGCEWeXDqwHGjeDErNFFzsr7",
  "key25": "3CQW4CH9Be7HDAeiMxMxWQogiKM89zvwuZxAxkiVwsTFXGJEd2VpWAG9vthq2mzJBbCrM6UX7wNEZywi6yFCHEhW",
  "key26": "4WATuBtiJd7jvrhZFAjt6gRfZiBD2ztcmSXEuHFpBg541J4kb5pmFzkozpeMfGAZF3ZpdKy6ZF3p5EjXLMzFAiK1",
  "key27": "52k8kPThqaktRuFg29TkJgYn5NAadnb2GxfRAYaEqroDgeLKbLkkcficD7Rd6J8wCS9K1YzYe5P65e3qMY7TqKbT",
  "key28": "2cwNDJzu5U8k9mL1K7xse7upXV1tcTmSn3jT9ZwrhmDBWWtVowHu4eqj96Gm4bxxRokn9XryXHTppaaGgQccixZW",
  "key29": "53iRHdH2K9iYVBBnJgTKYVJCHBacK9uHuWjeRemjbXTinH2DL9dzC4ps5e4y7NXvTAxM8LU1AnCidLCFj49KJkx9",
  "key30": "57JZazEFc2wgVvwnTREyMr11LLg8B3LUk52VyPGTXoDgZTzog1xBwiVa6X6oovEqiY4wZFMYQpBiiYGS2nnKb9qw",
  "key31": "ad4GfRQGRfECKedptqjMCEFPLEGYakGznhRa5XAfeceCCeCobAfQXpzgCoeqkqzJdzL5KG5qtUJgQciiC51Hoqh",
  "key32": "24EZ8cENq4FJ3gub2YYz8LWC5ZivDy97zuaGiUFj4eauVExvME6ND9KYAgRLUQejt5dvs4JecbLYDds6ATpD84th",
  "key33": "4QiHAGcdLn4JYssEjrmEf92fiW6yL9gAN79unZbgmHCfBpHQgjuXesQi5iPSUUXuYNGA2Zy1vbGBpWGtfLSyPHen",
  "key34": "hk5h83hy8HM2xTeqKsqfJw6P7vuMpivEZjYDKXu8MQ99AbF4NH6MVCaWB3e8TYrkLxnq3VcUFvSGbsEucuFMwNW",
  "key35": "gcbQWeCnKp89SweLrhumKhSYmg2bfVijdUq5A5t8gRDLz42nUhEeoKxc3yH4gQaBzPaRHAUb2vpdrrqfrnCucRY",
  "key36": "XdN1okNDAh5KKtp8VqDQjunV81VdJUYAsd4tnJFDH3wZEjEweFCkqnWj4a7oexCxzTxbBy4H1B3UxHin3CCPYe1",
  "key37": "T7jpUJ44zQvi29QypLriJhoGcjLyWTL8GWskkZoRLCrBvz1yHNzJ3NzVMq5om6Ex8KeWpsxfeGyY1WDMUfqjYrT",
  "key38": "5CF1kriXZ42weNwA7sAnNxm4y1XqWHsQA121kJjfLE2AiXLHQDAf67Yc4DKJWDzB4pvrpX8VxS9LwfQoqRUcG3Zh",
  "key39": "37NbpcwKAgETsZWWVVKTuAouqDjVc75qnGSgryCZxGPd1qCgAwuPPDGYBgvQqQ888Sehmyq57VNomuTPd66LUxGz",
  "key40": "4hez6g9U2e9gdem7XwRS3kJgoFzE8bCZYgceEdKny1SauP4aHq38ScB3TJsZVu4PiaMEmqWVuXwjSNv8L5aB1vWQ",
  "key41": "57cxw5nwmxAa96h4JPzT9QckVprpzYEV3wQq3TFa6ByQuRLhBSC6CwCQ8NJ4e3NUgewp42VK5WYViN8xvqbi6Sca",
  "key42": "2nUKDmY7CBJGQB9dbPAUWWTKtPknGPhvPpNyCYLV1fM9DEYPGC8eN1PjVGfyy4xyhDLtmFg9n4XrRHMBhc2a1Fwv",
  "key43": "3iMTXLDgBSgu7SMjdoQCXuQcfE2RQcd7s1Vmc9th9vN5tFotXjYpRdnGEn8W2WKEzmNkvWWp8ZZzpXNJe5QsmD8z",
  "key44": "27Km2PCpW83XPDtfHNhfkWGAfRmBHMrnMqtuiw2WfT2r9wrNLSBXcGCMY16SDRbbMh6KDBj3V5AfhL6uZMXZZrGW",
  "key45": "2wSaJmDTfYZVWTyc64nLjGjJjrLjEMhzt84yHykoxxhoowpGy1Q3obkJGjzroT2RRaPAtpHHcF9D5hDigZMTYrB3",
  "key46": "23rsa4qU32Tna4etWeKrfkfHWUUaiMXCyXcjwNrvdxFgjLf31c9HsUt7eQeASQBiTfuGZXwM2S7v5zgsqmEfekhK",
  "key47": "621rqnxUowcA6R1NY2syEtNCdHTSSVaEnFoByQ63xTNBCWUafKa9UedLfxgLoTQsdtMH3VyZ3tW9CKP4nsY3ZT9q"
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
