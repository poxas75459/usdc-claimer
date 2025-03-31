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
    "57ey4RNA27M2SYtFoZttVxT9ZvcdrDGL4c3qeKRJerXbWtWaXhxdkFpDPnFJxcEUnMw3GQBAEbKp47pjcaF6krKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JADR2XqaPUfjdwqQVgGMGeFgzFNH5MHs4HRSiegoGTtVEfGSo7PPMYUrg5M7chDVGvj17o2pXAZvdjVRg5DMeRx",
  "key1": "3hGmrYS12er4qQMBe9FM8mHSHFNJRKvMANqqK5p36VkEbbCimnp7Zb9Y1NWJLxgSatDRAgGvpjAnpsLPk2rpQCUw",
  "key2": "9aGRgwbeF7yVDJ8vg8pw2xXoDLanFMwKyLLencRF9ACFZn91CJiXd79d2NpgFFxDdEKJDvgxUDf2Jwpy8HU7cXG",
  "key3": "5VW1rAReUE8JmpRBT6wxnjoc2CcDocDeXACjw9CsoBWuvBGXBFggdAFffJ39tLhdKNdwgkbfoNRgdNyrCgZ2G8qo",
  "key4": "5R7mey58aTiLG5r4G7hhDkXHZgu74nyknHMEf1b6a7xPcgEoR4NGHcfeKKHs41eFQmrgz1Fk6LjTneXfpSuSHzDM",
  "key5": "5HNcMzszjC2jRFUxphsgkPeBcosQ9e2k3HpD2VND2rGiGmuFxr1XmDWXdavnvFomSkS7RDGtKku2fdfHYmLNAsWq",
  "key6": "4PirM3CNENZx18DGMNGscCz7mEFFf6Gcopkrvg4oGoCBmwa7P6kFHuVaWrv1p1zKqKPvhnN85mrjZWj7zcVfFjJg",
  "key7": "7C3jhsSQbMJmEBjwnQHwsGcmTbZDThr45nc6D74PhZLFezpCr3zQLBKJeYnsNf6gDUdfFs99rW4u43uNFqF5dCW",
  "key8": "28JCzNkEQdxbN4ru4yb8t5Pa28Qq5uyj4E96xCyDfLt2JpGJd8rwVbQy9FZBtHW4shwVqgYANgJYgSgSsj6qjiSq",
  "key9": "2r1pi2MeJQzYfBZMuPBc8nFVKLBXxTHMcuvbp2Pqq5esQqrywj38TuVqdDwCjvYwBBU8dYFRthXT9e1VXQCqRFc2",
  "key10": "62EkeaJHorwySqRod1jWGpGAP5cqSij47VHKG51ogFLvKChetDBysfdgCiEQJKUedpzuFE4cDXbLpvSMaFjSiD5g",
  "key11": "2ZUan7mGLFhKCKcTfADVr1yi8H8tdW6wmzHrVjPCoGc4qkMKwGP2JWCBnNfzmhf5mP2fnNW1G2sjzHmJweVud8mF",
  "key12": "2e3NUCiWsJM4wpnF5mTwP2TZ8ev79NcW45nEnjgutwAUL3WsBLB8APu3gWFFYuPBAa8juDUtEoNvKcwESYHihmLc",
  "key13": "4i41ApEY1wH3AoJQQJHziQx1AovBBKBS1c7aE69am7Xqnw427ahAKHQegireY9aoiP9AQG4YPKBWzsUkofiHrW9g",
  "key14": "4Ho8UavykPVcqh5JiikBknovyPu5AVAeYLnrpAxYrE628zHQ65p8125hYD1bit4XfCAXQGyDhigH7i9kFRNMr1Po",
  "key15": "3a6mzGybRhwLQGw4SvGorCp9hFpxuxkF1hHpqUGL9eiUghzRcu2hZBHUN4akQyG2RGizibNxdbZvjpYxwpHk2i2S",
  "key16": "3dGZ1fj8NMCUyxB6hZZ67Z5pGctj41z5MRGAdoAtGp1Cumea7uiVXgknYXdthVKncoR9pani7vWrk47JQ7xPmkf3",
  "key17": "2ESV5nBZfVqzswKDvDxcwMoWn6SNZJbxD4PEgJbdUEncaxTkc6SvEsw6E7QaSytP5tYQPcHATM5gt4MVphhzLze4",
  "key18": "3GjMj4Hc4G9v3GLk1xj6xSt73uhbkErFrazegVET5RN4h887E6NyrTVGaXkB1uXnCdr6zR7qr8yLZASi8KvYXXox",
  "key19": "3qUk13Dt494YNToagWbRLhk1itDRk6YHjAcVDgbQ6Y9GJmTon5izHajAABZMKCRvRtiHbZBcs4mryQE2Ppj4C7mz",
  "key20": "HWKZwHh8Y5CJ54vyzaEe1vu828Mah892VrEzg83M2dotyobzdLFurW4nWpgbLg2RtnJ981EzjHjmtbFomsiLDmJ",
  "key21": "4TZL5PmCDWcwW9FNK7im8qYLAsx5wGqHbaix1PwqopPAyMmErGRo7xtD57Rgg9tGzWQbFw132spd7zWXsHTiLj8a",
  "key22": "4PFfxGzy42tEDALWKqWEwJnMavT8XFFZ4dPZ62LUGz9yq4gwFAzJN11fMouVpY6vSWeWi5fpMvRFwpzn8GDBkfT9",
  "key23": "PJDVvU3SsejCH7nGVfAJteZXfRJzBPhBv7M152mms582foyg2oGWZUqsrhia65ERzTF38aaPqY6JT1a5G7nE64J",
  "key24": "aGHyCsqZgqSk4xUQ4yxPYMZcXqQbm9UrdWDQCG2D5AMnnEnDCv7tQ4BKXAhTEJZSXKoDHxSsLnkXs7McwdhunBx",
  "key25": "2yE7Y8G7WHa2DnEUSVd1LKMvy6C4ycwDKHfK263kxRKH1ccU4zaN7QWffypdYNydHR8y5CV6odTJ1rk2LdZjrvZ1",
  "key26": "4ffCuGszEMRoPRJCSggyFBuRLfhsR6RQ3mR2HSVR5f9Wfx419SBN2PLek9ULJp19HHtCZZwUKJkYTpvev3jJiSij",
  "key27": "3cd7gGFtEuKp5MzHu6pAPb42piM74MAa2QKKDvTWQ4vqhmLbXuwnracqsr8UQ1ADcibFh26QRBVK2VYhk3wRFz84",
  "key28": "3ziAC7p4PRCx8kdtNGEMubEj7hvudGb5fEa8f1GBUazP7CVrkhxZQ4D46Pfg82yWRzWeaXTW4vVEojjdV2u9GQKD",
  "key29": "QyUfLWfUAkX9SuFA2yEJ1mG3fpMqjm9qRrkg2EZ2aNXUNnte5yyCbS8aXzrFwhEdMKXZwTzrqFteAsygMtMo2JH",
  "key30": "43afeq7cacwg9K4UReTXY6KTCrre1dvCm4cgfpYPiVmfSJvgzyriUuD9bQ7AkhsmSY2bd3x7HeWEsDcn9Lez6wpG",
  "key31": "FoWZN9zwKwKt7Egy8QPuPTMeTi7fwCco1GHKtay8eANwoqnSfz28nK1ci6z5of8VVy2i3kQVNrQYgLmv3WDHBrA",
  "key32": "4gWy2vP4YMXBtt51M49dt51q6PUjzYR7ft8M7zaRngbioQJEbUmfjjc7n6pmgi9a65scwRx9wf3Z5MzHCQTCiL7y",
  "key33": "4wB5stgtDyKcmbRmUmjMW9aV3h3Aqq71DxX6ry1yo4f8RegmqJa75EmAvCxqCmh6HGs5Lnwc4jZUwnJL22ZRfU1d"
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
