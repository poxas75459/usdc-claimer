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
    "3HZufwdx1BsegXkJiZWwpBG23WsTsLA174T7p7PAUZJB5S2auHkHaHAXdkyeS9rkimZJNcUe1iLFCzjBhq7fSQFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47bXEBfGwo3vNTyGUiztY3GD9MHQTz4AFgSqDLZkgn4yDkd3z7mpjykjsSAByQWwCygG2inFzRdJ8xhGPPR2GTGP",
  "key1": "5D1TBcNtYrTimzk7wUxDozLJ8CKr7jVm2GXc1QiC63aDT44R8wiGC9w2BK8mFFdv7ZHdDAfq4V3YneHkeKuJmc6v",
  "key2": "THDRjppruVV9YjocFwkcubvGjAcgCemTuEtemgXo7mXVatuCyhG3VKPsfaUMg6Suw4YrMGURQHWTkVPtAERaEyA",
  "key3": "4hSg1bePQamS5gM4tnEaxgAGg5ws7ecen1ah18q4jZT52q2aaB1y56mMjCXJquWPh1RFPcfxRAx9KSB7MJYAtF5Y",
  "key4": "5USEYScyfyoho7ZPJCe9APRMo9RqZ1fABiVUcwaWxPtsdjJ2Fa8Zq677X2i6yfvd9gtcMDbdtYwiPaDE7P84Fy8Y",
  "key5": "2NR8A7b8x2qDrQ6AbVQwfETMxRjBthimVdfwVEhXy6KvsamNgq8MZS4PYc1mqt9rK7PdzzJSAHSqsykA4xHXqDs8",
  "key6": "3umgXAh3MDRWjwmdSRXBJrbiJaN9X8EN48EbNG3JhCmJPLk1mMqwxbJ2S532YoEDMjs3WVpozFkNzW66pGPbXvoX",
  "key7": "5wEHqteb889yKrfyjRvEHXRGrqxzNkzsFC9pMsjsmXs5zKmdERfZiqd86oPW7t96bFoCkdfLFTsNMS8VWWcYmBfp",
  "key8": "2ownmJGU2HZtYuf1Y9w9TF47fmDdsGKPUFV1cqVJTBqsKDumGKmbxgw2gkph4UXbrAWYRpyi7nFoNRXTfz7oGrmi",
  "key9": "4vnDHSxdeKe23UZdHk6R6qyxgMMACXUgJHyASMotBhy1mfwDcAezNDn2jKy9zVigoXVgzg6nzC3cWbmdpTrF4rHK",
  "key10": "3tKX3UAJF8Wz3TRDqgJdowYkLCd2j868HWXyFDQkQx25DE2jGtFnBZC7dKvLGKSBP8ZW55yknMpbitJmQtQxjd5A",
  "key11": "4TW9vGB5oFLzntDuZYqgFUA3j4qiKswcCGSaz8DTFYSnLDDoh6nVbj5nL7irgApKAvTiW7ntXf6Yd1uviJ4zhJny",
  "key12": "5XHfQuDZZQd8wZ42b8qSdgmn3JENLu1dSDWNrUK2GEBA7iUy8DQpay9YEGJZdW3ojQMTjWhRmM4UTrT4dKha2gMa",
  "key13": "YnyZLXwjp2fR9hxef5RXh4aZ81Qp4k1VE5KPLGjw7qFjtrNRjJmyEkVCHLuwRcihScipA8UTubnFzZiMgwg74dU",
  "key14": "52x9uTt9WeDrsc17fgEHdz5kRt2yAkQGqc3Qu6YLtJBmiC6umF81sJwDVXMa1mFPc1dJmHqQAx1BVcDFotqmy6XB",
  "key15": "5ntQGhH3gihAJFxKwxbkK9npK7m1dHnf1T8PDJ9thM5uKDFzijHcTQmDyyzmysVV8meidxEFk3jFoBfyMUJ1KGXn",
  "key16": "7WJbCAKPdyTiTBtDM1ruLo63dRQMrKbsfUmS1bimxdUHPsMaeRMvN59RiNWe43S1GkkaxUZEodRqgL9YiP2Sq9j",
  "key17": "5mr57D3PTYftsvn4TroNkH5iRwiSMYrtTpgkbtRUXFBbJJfwqaeLu8k8AFhS2av2UAsDS2C2mtuZahQ3FkbopUAu",
  "key18": "3Eccvd3BxtxZUFDgQJ6pVEg7YRhzj3Fdvr2gNPnfT858NBq2WXmrWZnX6fEPkxVLV49Ac5dCsQ5k43wS72iriA8q",
  "key19": "4X7LnuZVzErxyvRBwr65vuaUpXygFXqZ83JMyry1HqkZGTd5K6jJM5XDAqBrb31abhgqaHTeZAUK7LPvXwAiwHvq",
  "key20": "4ZFUXRkSFC4n7oN3W4H4mFgwMyXen88BmrLZL1jqwvapgDiydfFJ3tmcrz11hUXsr6vuoetfU1TbsiGigo6c5aET",
  "key21": "22ZxnQ4rRpwfmrZvw8tpzsoqKfqgdY8s5w9zVpqUWBE3FmW1hwZ3vUJkpArsaNj3t9mB3aYQrU3JKfmEbL6jmXzW",
  "key22": "4JYeZs88tRn5jqi3cH9pcDNXckT1Kvmtkym7QReaF9woephZXh9JER5j3EWTNf8TzAyW1SPR1vh2hgxdu8U5h8yF",
  "key23": "VcHSxMHNKKk4X3j2gmEKdWNPLym9cDrQ6MNp7Lbo7Z8zPNHd5hNr1v4PkDHUgHtEn16s3z9xXS8ert6hcsnB8dM",
  "key24": "5Tg5E2HHbasNjoMvaNonAPBShaV4e91VminQ9rW8wbZAwiFTYHh3sPRY339W57PSzFDAv2qNmepha7j9MH3SWSys",
  "key25": "3oU9EiFAi1hrHcNpz4CdxpsoGbc4Kzdw1Y6U1NzgMDBkA3h1xD7jstecXHWsDAzZVom1MMEmiyBtNvCvUgH8Q4SA",
  "key26": "yT4ByEQS8pPGbKN7mTReMxxDCbWFTUgqmu8NsJAsZBKNTgYzzZGVymDUSCgcqX3xK14kfTByCA9A1fwcZCYeHuF",
  "key27": "TajBuiDKzW7WTbUQrt8bbKosvNB9Ex8uWnSLF6E1swPFFhmb7RQ3J96aF68YWywLiMTnvLbCtDjSu61U9kaDv6K",
  "key28": "4L7ZD83EFzVg8hKauPf9ncJVLSX3DjF7DHG3faAuT2mMJDzvwgcQ4BiJ9JVSuaNuuvzbKdBScE6xw9fxJUHBacd8",
  "key29": "2LY2rTyUKQMYX8GisXmicTfxfepJD18648Tq7ssa2HQ8bq4vK3tEfT78RqmmrfFk9ZZ4jk6ccwH7DjJjmBgLnyMV",
  "key30": "2QapyAxsec53mVdf16sp2abUp23ZGnxp9NjiH3uTW6wAUPfF64hD5h1AZZAvYaNe4aRPn1qD2eRwzrY2NnXFjQo7",
  "key31": "2yjFmxjJYbqu92x9m87ZUmkwQzKoJPLx3spRDbuV2kKNajRsGp6jQVGhdS4Jp1oKDnrYxKP2ikFA42jjX1eeu4MQ",
  "key32": "3t9M54aGazgbxgLg2fZi8QMDJXAdT3YXiBL1Ldbrw17THFJQmaNTCr1NYZ4zDZdgb422mfY37rrvjzabFsPNwhhK",
  "key33": "61htBpiGCSjvAahSFcj4SJUcPiThnAwUZxTm8t8x1bzPxsF4wQ1ULwfpMGUkwDpDXZuVd9aKymGab7L2ibGL7s4x",
  "key34": "5595wn84cHhc3k243CoQi52cw6MEW8DJnsnB3QWppEp9sh9KoQESNY1JAkmyP8j7k1KRHEr8m3VzqotaByPaCTJn"
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
