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
    "3s5HGU3oNmECzjFYeoaVzFyhitCR7TMVTzd3rR9QGoUXcXw4hcR86YcPY8hmLPRbZUpzwGQsLH756U1mvYxLvPoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q5rQJvxSMMmYfWSTr46VxSzePRHUo9sszC18JszJSqZiHG9zhfukjM8fcAh6j88nY5pTYdLCnhn13ECpjtETG7j",
  "key1": "3ZgMsLRGzWAaSbTEQnrCw1oH7mnANrdgYJvE7Jyc2wAL84qMeGmySYtCKqGyWnwYc6ky3GrS7vZ2p59b6reo8Y9E",
  "key2": "3cG8Bjff6d7Crzi6JqhfdKsCKRgzcmtck9yehrJcGAL5PQSwELSf1pfU7pn6FSJYytg88VBt1d7wR7CqBprawPA4",
  "key3": "3zGX8wXzitq2wacBXuDWS9iEUg1breAB4HNAKetfLhVdb6vQvjRfyQKvtpiUHk4jJw66eVSW77khD2APnteMMPk6",
  "key4": "54aUmBqMBvXkWmA3kCRPwjk15kvmpmuBDCFQJxPVePxaxAnMgGRHoiLuQBpQ3KFKFLqoJx5ByNDpC7MyzFjwQc9J",
  "key5": "2RH39vQaqvcvcypc6HidY9McMV4ta2zei5rRYijxZrBnNn6RyKYguEcyKFWwM99bx9ZQYC6RcE2gFeEhjyYV5QgX",
  "key6": "3qAr85sxncEZoLPhn2rQMMPXMWKr2sF2XPSDTbpkNcwVB35M4reyf3qG79bUcgH8V9EfQSNJ8v1msPwZ2ysVMHHj",
  "key7": "3XUo66x4S4fre6x8K2ndvu9AA3TFgF14oWUWYAYxD5WMYt5naFfgjHtf1hHh7eqn9eGprFm4gaJonEPg1Yuu2WFX",
  "key8": "2cAWDDhS6kXj6Uzb444x4wTypU4DTzBrmzqmPpcwwzE6hQhS6AxMuAAKmiUXqMLB7FwoTPRwimWmkdmhRsiXDjgP",
  "key9": "2jDGMCMV5VC3w9pJfcXDdnzAX2662fLfQroLRGaD8SavWBjfksjVf86zQQ1oLxHoqgQUg8jUKFpQmdzCNp694Urr",
  "key10": "3CDLau6ETkq5JAshWazxWowySUYPBA4YhykhP2QFGCQuo5Km2HVxv31bFVWCi8rwcy6FS91QCY6dekGrSGaxishn",
  "key11": "aPTeyZ68QLGjP7s5UBd6QgEou1G4omQR1u9kFYBGiENo9aBiw9z9vqq7ZL8SQVgiP7JRUYRuhsWfBnJbJiiou2D",
  "key12": "2cqLS1e7VPMXr7v1kEwFxSJEhCNB9L7zMDEoPHtrjAKXjh1w7VXSvh4JhUFfKEqcRiP6hgotHnAtEtj93w8Hnmdi",
  "key13": "6tcTZ91kR8S7RyvYSeocJkEt5ntnXDWmf8zTRsBme7ZjR3RDLWq6BzJjC4rbLBHV7rURRR3eJ6QQpE8K3A9icbv",
  "key14": "2HvKJNo3eAMT5XZR7m1ANNzwJAp1EnXRETQYGD2RfA25KZxmEqRHyQZxGT7d7rbEDg2PyMq4qaKz4QhahzZJubrZ",
  "key15": "j27vSBhrjn8XyTat3TtPqaDSwzQinFth95oQzawPLUXLfsAzbtvgj47Uinqdb2yW8qF2WMMtZWuSvwXhhq4qXF5",
  "key16": "4cpQ6QrhGbGYUYZv8jSyUtucVy4Kj1fgpEUmXkETcYBa1uJiEjTtat2L67C5RTJAWT2XpeX9MZZsv1isCcjb5TZf",
  "key17": "a5WzUxMc36VhpkBUV7DqQ2xiJBMoy3fxrJiHRJ42e4r3ipWQLzSzjXAQDLiaZSyseyWWBTf9RrZQE4VNiFYJuwb",
  "key18": "4Cs8xmctawD1kQ173PWn63haF5qMNj2iAXYyVoNtETNrVtpu4ERWYrqFaLVYJz6ZYK1QEdnphjyanaR3Nsbk22Vt",
  "key19": "5aBbrKzUQdwfwrPUBR54fWLG8JVieKBJvE8PjnBgHLuz9yoGo13JdeRbo8RQTRgBbn4QKQRQqRsVrYUnEeLKuJ3G",
  "key20": "axxdp3T5iTrZnPqHi9cFRQyyizFD3QEt7C2whVCWuxmMqjVLVjCg3B6jvK5eRBDLcut7CTwBUZwbP8LhZzLmGNu",
  "key21": "52BHS3FaBwXThBXVDG6LMopKrW2o3bwZ3eYYQyVZLaek322WkPZAvPWAi1eEmmFqvaBjfVZAb13C413DCeQfdxHj",
  "key22": "5V4Vp7imFcTvEftHc1xAc1fq7C6CbHALNrbhpyDtLqnZQU2G7gjYgD559QxDTwqoCD7FTKbdbJvTQ2wu4aVFMeqW",
  "key23": "2ad5axSuZNBByFvRfoBySraTNrLx9q9oeu3YKHftfSKkZ5Bd3hUqzU9geX92RyCRDtSkF8KRjx9o3FVzSZJsZmsZ",
  "key24": "yAkQetqtDwC7HYagZAFZaKjyTvFm7QiTUjtFGpi7wmwwFxHfwNu4mpXX6BMBEHTKKfW4obJAHEqE2J15xjoJNsP",
  "key25": "3SE4hnisDDVM3JX2ckNbhZDTg2QgC5NgNfJfzksdrUTtBKyaMSndN7ShVvCJ6NujkafpipfJ5gDx7iaboGTeYwkF",
  "key26": "2nXcoKR8EqjRH5bWFrTdDiafmF8krP3AGzNvQKWHmv1ii3JtY8x7NS5EEUziKtP3NngG76Gf3exctecxcD3zmPCg",
  "key27": "62GJ6KSBLVc3ck9iydC88tiBDgvKRLbsic7uVwejBP1aW88ZjQ61Zg9gS52o327w7Gm1zxPrNiMMwqq54gBiPEcy"
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
