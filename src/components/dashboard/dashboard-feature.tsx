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
    "5CziPmbStAXD3PHPZH73TtF9v495TKnr12HMLq9k59oHKtTADCNtGyre4MRRKKcS8H36Sdg2cHXzUR6ibZAfoBoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bmGpoQJ2Nov53NXsC7qzwK2YSWGvyLdxFMa6MgnUE2WXRh1HWfXb5WXgY6wrJecMszqLJtSGNgSpG7iVCWGnWUA",
  "key1": "4tzjBjLZ3do3A9jTmVbBEG4ZkGt8BG1oBW5ArAw138ZprMML75Se2VoN9JS3LsXt6pHmQMK5GDu15f1ArT5FCjqv",
  "key2": "4rxzha32hnq55NUUapGuqyP5mCFjCKWg1uFkDUmXyhcr2o9oau7kw6Qh6eNVjBNZGFYXfUuifBJzWCzp7UBBfcPi",
  "key3": "4BLe9kDggZp7bXuT6AMDzmKYnntLGLFEmeaQiFt8zGbWSTUwTikeWmgmvveaDhSp4LBsNKGGqbcxx9mfwuWHjNHp",
  "key4": "54ZDXLdjtNRShXF9KN3KDNbXmX9DcAFQPKv2no9aJuZWctSHP6AD7yk6p1KFj9hiphTo7aotdhAxNkvscQeMx2SH",
  "key5": "2PJWCQF1n5SQ1wxz9zdh8umCErDsXJ7aygjxDxSiRpNMN587ovmL8oGvuBgQjuUbHLFKFV6G2vRKtbPMqWRwjGZR",
  "key6": "3VjmYVpZbajQEE1dfc5yCa35U7ya7YHhoFtxGfZHqKrNRpL9ZqbdiBpSkQ3BTXHCWfzcMmkmVZjRtGrhCN765b6K",
  "key7": "8psb9eY6UiqoXTbRhxnFeDVHDUihjcRrC3PtfNkHtHUTUzFKEZDe8s9bMpsgjdiNuen9e3RxtEZEHFrn4YyNGti",
  "key8": "fqn8DBTKdkUG3y5ZDQMHi9uZmLhrLYNrCjXCobkXSc3s2bFw6skbU2PqHHW6cQoZfkgoZWQrMHUMUt15Sb1Wdha",
  "key9": "2xhybe3rsJmBnhpuWc1hnUJF7He5BHkGKHeMpZz3uJhYjbyVUPSqcmu6wh5pufwVgYVSw9vshv9yMuxMTbMxfYCA",
  "key10": "257UW6s77482QKnsPfLroQpLx4c9pUw8Hu52XTE6E69MwS2vQvKW68bXaw2jKstarxvMPM6qVUw2RUDdy3jxgkos",
  "key11": "tmB4gXVDwjd1cTSmmGhSpiUZ24aAsaT4dgpvg3EkZYsS12qnyTSU9jaCy9fxWeanVw1cS23wxGPqBxdWMsFmQ4L",
  "key12": "62WdY8q9kzV9MGRaq6Qg45vC6BCX3jWvpXCXXAUTqMBjorvwebYZBm739J8to1dtNnhP7FY1EdjbByGXZaEpECbb",
  "key13": "2rQMJZ7eDXZKPnkMAgbfDWiU16nbgfHSSqRKxZB8rNJCasppFRGfZKrgEv7hKFGnSxsbcteSmSW2wFaoUL2uxXhE",
  "key14": "4F2hiw12you7Bc3Fv96bWCb3M9oEDWknfgEtDRStTSMWBbozL2Yzq5gHWngrfNXrC1npexcxjWbHNaR8UKAP1Gh4",
  "key15": "53e87iD4YgVeN7KuMAcJmVYgdmZX49dKihz1kAmLpPGGHkdqWCvQYAMGxvwe4UM11TsjTe6gCFao2YrWeCwRk5PY",
  "key16": "4Gs8bi3g8sLNRsXefw3ZGPAZH3WPfCxriT4ogcKAnGtBCMc28wVQdxyCV825F46MxUjLfuVqSzyAGdFqnouWJrec",
  "key17": "w55umg3AQjpgpXaija2MpoAd512kHmVPyLBQyCyor3bYgZXPn1Xfgv7sdDYD7G6wd49sxx5V87TN8yCJwj54n46",
  "key18": "4h8DY8KzL6rHDm3eqoGubmTnvgezGTAVVb7u743YruMhruh5ZeQVeXofRbJ9NjNTecSPYDZ7dRRsz7Gn8vWHCk9k",
  "key19": "5zakjRjQzgcx8zeX7sCvjFTB7neMYD2zu8ZnhDr2DD5MfRduLnH4gfF7HUJaDrV9JbLVtcL94i3jZWeJwaLB4Bbf",
  "key20": "46Fu4aFU78kJLW4iKzKNeswB2xsMBzgTNtLPJ3VT6RdCbgtAKvi7bWnPj2yYEqZFhWsrnHp83fHH6ZcbGq7wh7cM",
  "key21": "3FnStXdDtkgKn6VWVpazuEaRoKcEK528zaRWp9CoLwtTWR3smSYgKSgwSwMLDez9WHojiRnC3hR6ryDL831pNa1K",
  "key22": "2Jg19LvhyETNC31w3GRyNJNpjHktdfXNoaJT3qNst2h7CVzpkzzhQTsnDLeGJxvUSX3ejKyaVkaRoPXAWHhptF4V",
  "key23": "BibGSCRD7USdM5WoNwKRqMfGJgxX9N21Ltau8kUTkjJFTbnwGFc4kYv7SMn1vioxjrMxbykNAHbaHTtA1MkeGo8",
  "key24": "cxUyEg6xJBdCVtyhEop4UfbMggQ8U2Z7ct7ZYaopgh8emacqBXFMvip5yvpSZoStBKWXnULDV5fGw1mCK2g9AQa",
  "key25": "2zU2j8HnNn5xdg9F2DyiPuC37aVN5MbPRByS1fsibVWdvqcJsHLGDW7szeHpm9sPH4UvMYoJwWQTfJq2mihwNyW5",
  "key26": "4FPj32LQmWMKDeESepgdpwnT9pPQC1YxVWWykVEtRSDNvjJsEQtnNafWuLHX351CesgRWrbNn6AVjq85NACSGFyN",
  "key27": "4qMTzBKJAUWCEDw46zHE58ciAdRrHruUVC6xoPvUo9KP5xGTdht7nFVJ1RWX9Vy4pUWfdWRjR4hEcTiMMVBhCrdJ",
  "key28": "3MSitLGvbJRGB3x4cMqa8Hb3QQ4tGpsMHYG7M5x9z1JZECPGrZfkhZdwzPLiJGaKUu3fs7LaT9Ar3erHgFV6U9Th",
  "key29": "4EeXxZoQiQHUn5KaNfGqdj7HBdr1WXnpExLmvyz4wcNyAAB6MUp55UsFHobeCJ7oa67G9K9RfoQ7G1d4iRfACG2Q",
  "key30": "3e8kXnUi1TXHSakZaWrNv3vwqr8b4sjZodfKrAGNnyn8THd3xh2oA1Vxa4Em15fQ9vwFWNEF61zdYur75P4bhanA",
  "key31": "4dnn1TEn5YvpNtu9a4Yb5W6yjYavk5W2MtgoUuQj8CibCVWydxNoJSiMceeRBR6hcRyMSGzQE6oBRhjdW7givG2y",
  "key32": "ZdxKrjAFXCSa4vyCVZHmMJ9zXegTznBQQXyrV5nwGnVcoxb7yr3qhjxRxRKwvJEmqoEC2UfZAocZvp5dbVk2w47",
  "key33": "3UPAJxz1L3DRUfsc6UWewF3cEiDimukqQQ3HzX9uJaAZQaPxamG2zafoZDjcGa5rUAjLwDKnwcVo1Nem9qKUpGou",
  "key34": "2QwoH7yps6LRkgy46hDU66TcyxvA5j7qiFfNgwppf7XwK3Wo2CVSHxNJP1tUGXUtWQH3NHyYoUEsYJqNNjTzS7d4",
  "key35": "3N6jtpFGf31ESC732sQHswhTFmrrU7BdE6Qn44jXfzWzKMn4LYBjibLe3EpYPuj6GQjWwZQgfJabXaTqqBi8xVCB",
  "key36": "Re8vwoK4VdNzUDDftoHucMAFzAR52jdm3rgXEYMcrTrKzLFkSMJRkdf97SPrJt4pdcNg3uBQ8rkD7Y4aTnDfaFy",
  "key37": "3Fgkrjh4qQgwyBFS6NPTzRmk1o7DVifjYoJnxZjXWPvWomnwrK9vdjvKuJ8gUkDM6v7tUzXH5KpJYX3Hi8bmjrFk",
  "key38": "28tNaJs5qnT3aTgs6BxssEEFbKzf8HCctkXUHQkRCoCUk8cQMS7JUegf4wSganmxfQrqCgX1CCQkQ6TsutCvDemQ",
  "key39": "2t32HPjhFeVjxknr6imcyXhvXrpZB441eQe28uJbcBoJfiPa6MTvbpkQJH9khr2mNC7avjK81hDVnT2gkXRGNLiJ",
  "key40": "jW4LV8jW2BjbDHSoCunKkV6Kkt2srZJZ6G3WfX5XGtLcUn65zKVuWq2ms9BUjBecCtFamxVPUUm7tTWevZD5Uo4",
  "key41": "UPSBKXpgi8Z34bEcEkNjyDDLh9Kajy4fmVQcwEsqdhX2H7ZVjDk4zF52UrJYC9gdezmubtvQantssMk7UYSsAde",
  "key42": "NFZHR24TZ5cyTZKdwNBGBqJJDzCGMBr5ump7sKX7xzx1ne6Hzw3j8F1wySUjBn6htYiUQjgeRzh9zCfVU3csoTb",
  "key43": "9XHtWwLEMBtGicpgFYNGrK7mB7cqGiR8E9di4gdD6VjXfSCPjeXSejEtYoSjs4a58W9qWwVyD1rtRMkCuNvCiGA",
  "key44": "5rNa2Xf2i3WqYzUArCN8c7Wz2xm1qXzraDmmgaXpzT1NxuNBkiX4kcQfc5YiEbsDoQwbvUxSZetqfhRbrJ8faYVv",
  "key45": "39pABbFy8uBFRnkPpf7mbERjLTxdHfY4ZDp1s54BjPTDGb6Z7RV5Ycq8PYjdpNfTHG5KuoquLYwZ5mnSM5qiK1ZQ",
  "key46": "4skX5gt7MaJrRQeBbcRZx3Pwv3yTKYqQDp6geTGHFwB5wzWWWAhSZJGqqNU7xgMyGTZ59S172oU2XfehxsuefM2q",
  "key47": "pBmx1F1nWKYErGyRpg1TTRUhCH8cB7muJ5qRJVaakd4LFZ29KkjPf9ATiSqyQFDq7ffYXknseuVjDVA7FBDjiYf"
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
