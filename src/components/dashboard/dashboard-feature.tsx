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
    "4uGFPJZDmituyiQKcx8C2DqEdadtAzBvKUeE48edmBkaTfJBSfMKo51Ff6iy23QsDCw9wNSV51vn1kdCZ41bxsZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X3VrwU5CfRf6asN3eR9fUqe6r6E4kWhnHsBCeeKpzCVHKHc9MQ6xsyf6aVgecAdnnYMHe6hietzuqfZqPg33mYo",
  "key1": "45a1VjdgPVUkKe9kZQ1TVgy2y14ERWzqJUo6THFMDZUM2DFNBhQvWLZUxKyCGjJmLLeZtWA3nS4C4aUQcjFzyjWj",
  "key2": "4TVD7V6gb9Z1U8uRFEx32tkk197GVF6VdPSgGFWbxqy6zDGWcwpDE4oAS59AqFyCiiTD6rCULzcqpznVGWMScPgE",
  "key3": "2nXZSaqCHCBcxhfeEFEWTYqWEAeqwzif9xCQxDfen6nb9r8Cz2Nfb8E4JiL3WVvocALHeuiQedFpqsRXR3A9z8z4",
  "key4": "kGABsXU5hkmCuKDMwjEEuJkpYh5CauXQt8XbBjRYE6KtpiiBALoq9YjuBFpu1FUquKk8bXHWtczhwD7e1rdRQHm",
  "key5": "46TvPNmJQfr5Gc85r81kZ7UvJAXmMsyePPS9m7HxCq4KQ8iy7oAt4GsT7ZXZhMwKKGDiijRJSu1beNEmiMqaQR6X",
  "key6": "62BAbf2c87P1BvKLMkmSHtbLXKJ1NF2RD1FBfETZCZDpbCvXB9HbuXgopdp99LVhxncidLKW2CP3bTVhUxz9b7yS",
  "key7": "5fqjEdk3bexgtPNyvTEqX9VupTzSUJ4uTV6eouWzNgcxMfszhtktmDkQ3XTqm7N67SV3b4XHHFmp4C74DXnKctDy",
  "key8": "5H6KXtNvWYfDbp4WjhedJf7bfMYixVB8pDvNZNchGHpzGBvxhU1xJkSfrigZN8mAGpfxt8HgunxnHNj3dtGsDZwd",
  "key9": "5PCrsTGxLnRqP7vLxZ4Z55dQeGXu6fEB8sD3XUbpcwY3UYiRsnBUsxnfkvR1ZF6fwDv7yuoDk3XPdLKEwMS4qHjF",
  "key10": "iwpgn5RJoACxaL6RTpiV7hiwiar5KXr9kApY26A6Pmc23Uwi2EtZhYFeEv2nroWdhuowHBKPDQ8V1HWRKjNp1T7",
  "key11": "3WDn2tXLErJTTrACTGBPzbytkqoEDzc3AUi4Bg8i3Rb4EP6kD13Q8zizkoVnP39XkaLqFo1ysQV2pvm2YMsBjhJG",
  "key12": "vf4zrFXLTWQqZcz1DNKtvUWtgpseE1fjgLz7SpH5cDVEuVCaSR3SWHfSB7kWuq9HtCpyjVjJV1KFDp81ZRL3QDW",
  "key13": "2YvDrogXddfQLbEGZQKX2rVAggKfTs8TfvFMSzUoKT7oX2eU6LVys4yCooxMs5EeTUBvcoccFfUMG8NB5PjEoW74",
  "key14": "5qZza1NwrUraB22RGjJUjffDmu1GD8GCBQUSCDzTYioiEL98hLFsr5vDCcB2Jdfrjn6RuZdkARJQLJ6bDsSdGRcn",
  "key15": "613f4x2us3Sr46WtoHyajgFbEdzpWnw2eHK4mhoSZLw1cVYjhLnZGDUbb54DXzDaQKdQjUP4dSRiEuZ8qK5Qgk4j",
  "key16": "R16oguN9bc3PJRjtCtLYXMNN8fjyGEhE6JBcas95cM1WrRiKLvMX4m1URJ4fxPpMt2g9pgCcbFjSm7i8JaH9XQ3",
  "key17": "47s37jEEhcSJLDJ6s5LNoQNU85U57pRhgeWBbGj5iui4XzHujkXupHTCZC2a4Ep27fTC6MGGjrjmGMykDmPLxBSc",
  "key18": "4bovHc9QXMEiKxr1yqSTGg6bnJNQjP5iqLywDmfz8KAzJEdzL2hHXSrZEb7MMbxXDrWRXihcbPrF8LLqngdHEpGk",
  "key19": "4zghZ7UqyUV8vZMQ95Tr95c8mJh1bNixMGEgydv4VVAXDSfAhJRkcKyqF3PSuEoQ7JPHWAFyqUuRQryKsBAr61o5",
  "key20": "3S16oSWzi1KpCDbdQzk5yG6ac8qF3WdSCoKNzoLoUiV86hJdNPH7iKjGkYgoxVcbbKKAh7LR9gyFbYHFVj83HesP",
  "key21": "4QHAyuzcyjphzeb9jgFQRAgdtGWEm4YwRahi4qb8xLyvovL7CoCTYwtaCQrQLiYGXSCmxPz59fQzoJ5MRPQwYugz",
  "key22": "3LRmPedcGDeBa72ebv3wdodZj9TEyN4oKRu76FvKWaJx6wKkPx3uFrAKgqJDoAKPYribjNs8aRQ8q3yJExs3SZwH",
  "key23": "2dqEZh8aV8ETiM5jpuzMQ54xzu1BcEuhP7CQM4cQcbCgKyytMoPm6k38wWenyvVsh2t8HwA1eZchN74Df6JpTpcC",
  "key24": "jqZU8qR6gtQXgG75aQEYE6WUSdp9Zb87UhHioZ7gh8fefqd9YBoMmwtUNbZZDka3VU2hiKowoKZH8zyzvoLnTs5",
  "key25": "CGF13eZxfsoATNU6AYVTLaqyRjJWjikkjkzmQwEPjth65Nkud2npYxQpu1JaL2psD77dsBNAyFmBskCsGfeEKZB",
  "key26": "2roqraKPKd3hkJexzCGGEUn7Cy7so5YBijDu365Jw5ktHbuwJ6Z9AkucvxTicTNHgJQxVbxpP5EzLc4P44TyDiQ5",
  "key27": "54XMbgpZTDeKE4mKaLQ6evXcsF73EXhvVgVTRnnicgf47iVgXX5THG7NSUro8hx1zxqcMy7TkbfkXVxZaRSy2yCf",
  "key28": "4JDV348YLsva2RvVB8Zu1UHzP3URrR74pXkjXt6ceppfaaZRAvABcN93or4B3uqdMx8DQMKdCKqNbhNqJVqzFGYs",
  "key29": "5m56mGCBA3kRr6d5vHMNn1UwLSZEaBo2EL56bRpneNAhch9tkNLVa4gSxaUNAg7wjnA3c6YMRXrwnYcsrbLwDSzu",
  "key30": "5SYo5MYPRuTP5nYPqoZTst5rHt9iyDjsMCoWe7tUZppJn1aLZVff68qbUWmZfduCAHJuPWRQtN3SEgdPQKyuFjEC",
  "key31": "4rPLshVdJsv673bNxVp2nzsV4xsc6X5Y7vPnyBect5vQt5yqznpnvu5NkNud3i4sFZ8usAJysV8FCw7FuUNGc3Nv",
  "key32": "5uZ79GpYoRcAXDUX7XmVuW26Fg3xyKdLKvad4ZMsZTuzjR7NWVPWoajhi3EjvsFP1yXZ3fKJXxN9EKnnRzwjf97E",
  "key33": "3ie1TKAUpqrwbaUVLkrMTDpKq2AWU12HXautB2FS4PLXtUt3WD1muT94pmXMRTXW7Dx6eS3kDNMtzkp1gbQCHGMg",
  "key34": "NQsjVTsqj4bnZ8GMAsG4FLG2oZswNCbKyPW7mTg4xqqzFty82uCcApvk5ZY7RQuFwYn6GotcjvX9b1fFqtBKEyT",
  "key35": "4GTrHy2nbuw9smQDWLg7z52yoZnwURdXZAPLFuAutfqFRBDPESvvNgKFPNRcTQFxjm4sGWwWwVxHUk1PKV52iCLy",
  "key36": "3sbSvariqJ48DpQsixdFVVLu55yyv7pEzyrLNXRmMAXgmbtH7vJhxwcSojMJEeJtydj6e13tE2FtYm1q4YiBrg8A",
  "key37": "zZmCewFd4Sz9cNjc3aUoBE6St3stM3ku47bUWBH4CGyfqQZ6uSYMtq46DYW9HBQzRp58auXb651BMvufkPXY7fC",
  "key38": "2ivXGKTQftavbLULPhDJknZMhFk9vtGGFUVz3Du7Hr5CSGUzA6KYyenZpgzoh37BSn6VkknGAJJ9JA8HtVKkoU26",
  "key39": "22dbukLtq39oazCBRUUPVErTwQTEknHnnF55XRURjwFr7oFKWJ8C9N9cTj2NnSfTjZMGhnf5moMutEf7F4L1ijPW",
  "key40": "3aJW12vdj7SjwE2riQoTVAxGWVFxxLChVPxxNQJuDR8n6KMxn6ctBpujGWjwg34PozJ7iM8etnrQuAX3Kod3F6xu",
  "key41": "4rSa9fSmsmiuqyiKB2yy3xxdzx6aVAyqczbygeNuSxQ6PTiVVoYqK1v4f56ZnztomBFCBdZZixJf8XFNruQGChNM",
  "key42": "4jKihySfnU5NsX8bTW1WtcA5MA9FkPr97c5jvC9sTWVMFB5iVrn5q9CiLpqezNqyU93W1Rd5M6H7GriyFEtcXRc3",
  "key43": "5RDFavWjyWHUv3xrKApRwMU2AZ2Ycvg4h1n4FcZyiKGwCZRmGKN7WtJ5UqZRwUVP3wiXm3bWVya9pPFhSU4hkjEw",
  "key44": "421Hb453LrdjRzFJx8miCGvX3rAs5HehbYRafSsqpwtAbsLnWwZCT4cBbQuDMLuzE8ceqmNnCscgGKjutcBu5T3k",
  "key45": "2XHgqQ1yoHHNWb6zdMSkPPRFsN6cCpQVDtyhiVaJohsqYa8aGrmSDoTP1w7TviBiJsNzLp11bniFfXCCRsFJEQkQ",
  "key46": "3qeZLdNTdMdDHpNfjmXLB9dEEPCxGQPX9K31zFSLDqeAjzru9F43cmWBhnGQ9XicHZSnZ3C2ioPWo6WdifYVj5BK",
  "key47": "5CcQ8Pz2XA6xAUksTNcoEvoT1JU76SULkL6rxLSUZkUhq47XHHyxbHY3yzJCuHaDjaZSRnKJ7BZztweQEyCCeWxf",
  "key48": "4o8S1CFHkFPdHauysxkK8ahTLwuUrBdqkUcPgCMXjAH2BZu8HG9eLKFWSQxQx7UPWKnVdSdi8wSy16B9fQkuGTAN",
  "key49": "iS45xwZb6MsnkfXg1ENNmih1jVaZJHFwuvH5EoqJYZaX6N4jFF4KSEkuS2aBa7oQ7JGBBCWmY1egk75Z8qWiNP5"
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
