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
    "5zs9DuTGtYF3DCHHdKjwQa23CgPyrvZbWdTeHT6L5ME4jXgJXk6d8j14Bi4qwZbMfRx2Afmkff5ivjZavvECiWxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Kz3v4XtkUMjfiZRVeqdzGmd2oibN6JpKawVKJVudRRwg2fjJUjdUpSTv4BeEaAeysV84uEaosDnzshAwzZue1A",
  "key1": "3EJ26ouRjXmLpGEauQwr7xiQrqQC3d1ZS5g3FZyJqmsoeMnyGgP5K7H378BT95KGx1jR3oQf7VUJGQJosuu2TPJv",
  "key2": "5kdw8TkgSwK4mXeGdCMrw2ULQrHxBxtxgnViqyE37aHLP4WNirobJ4ie2vbtUyCgKxh1cPMzL5vyZMf1ewh9if2E",
  "key3": "4Gkzr5EJe68TXu2cdKLnbMsfGWkPfddTafcRKeLgWqYvfaFRDfrNBiQFf4Nyd8jGBPhA6pmX7GW1t15E72ZLqThp",
  "key4": "4cudEcXGKr9YMY3xAgDz8233nMxmcdC7yWjpPjcTVwgVV4mveSfosngKseXqUG7ZKV4pp8oUcSkeXAKYS4iJFyGE",
  "key5": "4FQd9wb59z4WXcrhK2ssY9f2Tkcv7yZo4khRvLtLFdrSqfqjN7MfNxvdRKWmmDcRhW67KzQhjNhRwp73vXpSbrJN",
  "key6": "4X393KJTn25BY3gU4Cb6pbnq2UspB75Aam6NVw9xfyPVaMnkf5MXbQWhq47zkqUTykTdSzRtFhYrrufy63n3QPnR",
  "key7": "5PY5u3nnYfKeGqESDKkL3v7eEs3xC3uWwLkrAiaEjZJukio4nAVuy3qfw8pxrJ5Tbzf34vqCUGnXJCQRrzBPT2DR",
  "key8": "2J9d2CL7cvaRD2MwQVkWFfjzJm6YBsE2We8Wf621iYoQnRY6W1qjZcxq4QbZmNc5Xe4T9CoJwvtKJNoJq1VGyYCQ",
  "key9": "2KWz6Bc2u4coFnpzguLzkxvqogVCJGGjfX1h3LbVgQeLfh4JEnUeuPxxnYhhji7A5KK47G1kV74n5WX38FsZ4ou6",
  "key10": "3BnguwKKGev6KtWbuGham2bZVBhZZEjQKMSLc9aKCHjuGnzW7kTi1AKnHEUZxnfqfHEZmXaffLxcNgUGjFsk2Kjk",
  "key11": "8qsAQyZvo8cvd2WaeTgfLabba1jiZzsAr1Rrne852CfjWfC56K2QY3uARs6zhVMYbpNcc83ppKnKyAX2UM6GovH",
  "key12": "MNMpXXRzgfU2knr7hdEqVUyL8LUMAqVCpa6rg6mnGdq8VSyq41WQBTJ5yJh4wfPKLVdrspejQHwjshHFsTr2xiw",
  "key13": "9WMsUZqFcSx2Ura8xpaLZmg9Z7xV818bkxJnpm1VqCegEjSYBGxbfgCbRpk5sZ3qHH5Z1zqdcDfhVwtpADrA7Wt",
  "key14": "494aj1QBjBXiZB5q6wCoUm7c6Anuy4iqb6JBfxyvSkaweXPA3Eta5dUr36LeBWfvabtuDgtT3iWaxJDc92kD7i7m",
  "key15": "4p2baU6dRTZDbG6sWpU6y3Dr5raWomPZCYDatDN6gvxDiqhM7uibTkQchM6ksDBBc7UN1kmXwoy1xxe6exJTXJXz",
  "key16": "58fuMbeU2mgNmXS7yTQaX7kMs3Hwb2xFknvnSiRMwpFfD2UxVCX58iJbbTfKwnSFP7ucbAGdmRpgNQrXWXshhUt1",
  "key17": "4hopZRmAvkBtAFtkqb7NVXKZcyKSrCRWe9tmx7Peqvp4yx6oNrddxgLWby6rMYp14m5thBXma5knqJYx65KWaMdL",
  "key18": "7R7tzTGPvnScCsuUue8SPzTK668yTpG9Hba9g7CpyzKyxNJXtgA3nZhypxNTxTgFq2X6aP8zT4HTrPcvC6nWyvg",
  "key19": "121FqCv4NM9Uv9Mitis8jM6461ssKZ4FPXFg3mcxMpWYpahSKhKmcCVALqvH7xav3rVAC5PfKeXJ29KeevWXpE19",
  "key20": "4xU7RC5EmKgzdfZ8YMb3JVGAFhWea6B7B3hbA4Fm8DxmYXV53S834sJxzaWnEemDiYCTyDCH4CDGxDcV85q7Q8sH",
  "key21": "4Daa1cBNS1weJ63sS48pLUqZvvKAgq9SWp311Ywu7KnyqGAt78WujdbFF9Aq4ijVa32cPdC5Ji8W88nA5UkcJEmc",
  "key22": "481FqaTFKwVs31RWYgNkXCLtg5p91wr7d3aXcx49jeMFFfYRRLjvWcqH1V5tCrZrFyKdp2tJHpQuPvH8GUsS8N4d",
  "key23": "39uNC6BQexsV41QWDwhrP68vt9Ce916oKkhR52Cy6QeX4ky3zLgKPTh9FxKDRdvYdLQmmbzvd56fikme7VHAf3Tr",
  "key24": "58B75gwQe9fhHBt5inYwCaJNzMihfkRJxQiR79n7SEZZAAFbW5yPoS6YkvqGCob3xsNLUTB4fNWcciv8CxB9qZJA",
  "key25": "5FHbAXrAT1gsrrA279Zb49nUjnEQ7aMif4K7fLrnUHhbz5YDRE2juqndjHzJxzhgyfMLCkrqYcuFSGXrLi6StMzN",
  "key26": "5u6tdNb1szJFhfCEaWY4feJiuVPbrYjvuhxxygEwpp6rwiA5Jmwrs2KwMFpkrZfrD9WdM944zdGS7P7cRNcWTd9U"
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
