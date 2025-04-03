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
    "4qc2Gt4b6o7jGPPERqUvF5a6qBnSLrf7FSiHV8GUj93VBDtaVFr2Tmf768iWi5xsoCzdYEV9Ya1LaNryvoc2BtwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pa6vtcE1RJNQTCyLcwJ55sYo9tn1fg2Z5FTzr1kMzUzdkpLzTrSJHcu5AqKyXCGVzUZnumEDuVvjaYGbkNtvGPG",
  "key1": "3S7SARzDRumFHbcZ3a4WvJdN7836u8JhY5LV8MzH59grP6aowRMJk6A2jepn5VGw76mnXgzhrtSpoDDR9yfy685u",
  "key2": "5H1LaRB3kmtWqMkF8Vhkff1mgfVbU9eXhtUt2nY1w3CMWugRKCK9zFSWZPXy7YGKEkvCY6JXAxXj6jquRs3MkxJ",
  "key3": "2Sct8SkhmD6PuzSEMEKYmdkbsuUHWz3TERcp8soTkd6AuYgv3S6SBSryTY6yTiz8SLw1oP7ZBRe14wXvc1LXenae",
  "key4": "5DJXKHVXzZ4DwjBg1XqFuShU2bpPaXiaMpYnqDvR4EzeMHjxL4SH1ZAu7JpTdiV3xWivzFGrBTmtmvXXzHcM2hbs",
  "key5": "iezkUnHLSWCcHU1n6bZr6EyCTfdQ8Fr7pbesMQa6uSbDT72WRYPLF9cigPEUUpcUbFHTc2gFAqXJaMhq2ZtJZc1",
  "key6": "5es1H67k48UHrUB3Nm6jnwDmikcMa14XULXFDoois8AxkStniW9mU4rWCm6bSdLSsygHrugtXsY934BAdBzXBx8X",
  "key7": "4eRfoF9pnX8MsL6agq9hejPndTnVvyhDCfhDRSWPAWTBAezCdLdmvGGac5zNwA6oWbjzsUeoA5uJMQhJCFiah9UR",
  "key8": "4x19wqp1n9VFCAUPY9ud6H1X135xqVr1N284LfQK9nnSN3q86UycNabrxtnZR4NAN8fGhEwkdmJzbnWi7nDE26PS",
  "key9": "2HxH6vDAtUiwNoTnzwqCdxBsvi71tnDkUanQ1SsPRMsB62hfr4bPu7ndNQgkjRLMnQc8gVtxrSsinAXaqKZCJGbN",
  "key10": "3CjaTfkMV15ZqJwjk77Q2dvbXsY24BEX9J5PTDgQH7nr2SjkiMDXwPLYhLkYuEQW6Xx8tpajAtwiVCz5FSmm15KK",
  "key11": "3t9eEM4cnF8aUEXoRsj4xwUZ7pbzWnjDGJGCstCDUBYmCcAenbQRgqeC4NRfreea23u1fWkKnHmgXzBTMUXpuBU1",
  "key12": "4geqhwxtz6fkexG5YQZumhVkKEqETLPF8HjiNdHgW8yhCa1KgamBov2BvR3mitKXxn6zNBveAUWVVLTWdxhvxZ8u",
  "key13": "2fZsWQf2toxc63ggBhwF4amtHZc4HViZ7KPEUcMBzrJGy4ZEPodWAuX77hUpyRLdhFLeH9K4jrCgvTRqt7DGT8US",
  "key14": "qPDYjZ7YRtAxwmzuVCZu2AVVX16ETGttoQ8yDZ2rgaVEktwHJZ8KQUrV8ex37gDW8M8viwmVgiW1BhafbQW8Mps",
  "key15": "5M2xGhodbGUNgmXbKGMtfYeDHVajGAiYDe9YX1En4YCT6MK5NbZ4L3vkHWN18iFHxJ5xK9WhtSEdcYihUxqGHpQC",
  "key16": "5AorVBWDJcb8jPsv4VYT9Hp43DsXnTmzz9Awuv6tDhztRRqcdKBk3BC8U6mYV6gbozUwWfGDZiHATBooJcMFZMkG",
  "key17": "21XcUEkMCpPMP8AoYwRvLt3cGdxSFfc313euwMJps9GgLZDaoo8rn1zbraoJ9Ercq6RvXQG1mwgDSZG65kgrPmLu",
  "key18": "4b19uZweTGBHjN3mP3oktAYWQ5dPFfPUSzGsEZSCECgRvdWELM8sZsiPbjyj9NNsrkYmrYA6RkjntQLFtkDvyKY4",
  "key19": "3RTnwACU8y38jjZ4L8REDLWCMNiyZpFW53ms1mreGWrMo4zKdc6UWLqwFerUwRJeb4vmgkibzFxqY7sxLCN4kru5",
  "key20": "4igFZcRtq3iQeo3rpfPz1JnaT6uvwLFfB7KvWq4hQ6tTDt71Tb18jW1MdDwATLQ45jvgoLCitr6hr4zRVMHqHJWV",
  "key21": "38jfKMN5qFfYpnreQFdNzaWFMM5M4NndtyHkCi4tD5PiQpvzTPiro5DATfoWB26ZNjkPz6tkrawjSrsi2RVMBjvc",
  "key22": "j4KAq8s5ZymeS8LGbyrhpH1og7LY9YCoqbwV3MTJVyyqSn4XccTnFoN77bydGKgo2dh4p4RZ2xCRpXNpwbj5aA5",
  "key23": "5aEa1orv7C8RY7zrspJw7r5NnLnAMsz9V5H1HeN122KEpqoTQQPifVpBzSfYxhBZDZxWqWYmUdoBskVC8fmorRmA",
  "key24": "3WtSbNEuMDEcBsY9nBb7KE5F9sisAGKhzuuc8WvVpDohZEBvMHvfwrRcHKjLY3j244LjoM9T2eRTGVcuWY9L5Bho",
  "key25": "3JuUFRNmzAxGSjebY8oDEwcnfUhHKLovp75HuPrbgcTQNcib3NNS7wDfNjf9XPxUpJ3afegst5wmUFLJeNAAtvNY",
  "key26": "2mwZZwjpYi3RwGomeaLDonMUzdZwk518bvHYMdn2DfSH2k2TfvGvonkrURfAH9qeiT9cNKfE5NSUL4jAr7WmjbD3",
  "key27": "5FwbPmenoij9BuwWciQQGvt797DeJEqjrRa3TUsu3hatYUtp5JHVBHdLsqqE5XXPxfhSYxzgymorMLRnNy6xku2Q",
  "key28": "3hvD4gJTSCEks3f3SXAkTk9tKSjyPwphwJQowB9WQ4aXoNmHBWoQSKJLvmQD1w2CFfsjSFs5ddj9Nk6yh5pPJcVD",
  "key29": "2KUhWBng7aHRYi3hhvdhnPioDpEVh9tQKzyvUXhs78JB7t5etZDAoz97bhdsuryggPa9VYADBUYYq7yza1RhFysa",
  "key30": "3m3yQwVGWxWaMjzgWEzq5H4AAZBtRKSozuTvNpQ8JWNgH3CMhuAHYwUqJcqrop9jn8mTLJJavjCAUriq9c2GV9w1",
  "key31": "5LrzqH8grZTDStAkCnYrD7A9sSGBmujzWCcqJTBouDgpJzMX6QCWTNbpycbHQP8yW434qufiKt2HzddahdRuw7yq",
  "key32": "3QTXFU7j698MFxjzQdnijZXUDjojgxu7q8ss3StXKkvNoLchJQQKGsfESwmhpnXQwH2mgwWkvaRP6fYgTB34Aa8X",
  "key33": "5fsBmS63TCVpZWciY6UiwijnhUihK6LV8iCGRnzpugxxqkrQuk2EVP6gQB3SD5RG8wjybYMJxcPDRRzih2MReSVU",
  "key34": "DrMz8yovG4hkBJ8gSyUcZbsmFkY8EwTvzNv186bLdBZowaFQ8nWCuuYUpBqXU9YQVyNge9UPeX9kinat5inKChH",
  "key35": "66UUnhVABwMzx7NMuq4XeeYEBFD4pT3KNydhsbuTvxT1H2mXNFcKcUaATtV8u8Xt8qmfWLpDjQYKGqBiLP5UCt9x",
  "key36": "48o3EuPggtH4cu6ZibM2ciYFoGfwtnenQU4vCwh7PLNKLaEyZkBmSYjGbbRSPfMZHPrBos7xUPPeZy9WTn3dxQ2e",
  "key37": "2tfgEs8Ez7czugt559fJ6DAdhmCNqJfwQ5dJz6ei3N3v8taAJfkaryVpiHEkexWaMKnqFgsi1VJXrFvKeryJ6i6H",
  "key38": "3DjK4F77q9U1fFMFWUPpKzQJN9qP6AZedaHBts1ehBUawvyDjWvpkZFZdbWsbha4jc5pcoFaGtR7c2TD9etMHxeX",
  "key39": "2b7cdPYzAaR9jpm85rHU3MEkXtxA6Vf3G4FK8FHPmadrb46vhLynboma44c9hgz6tg1cajryi7iHFpRWY8eBecq6",
  "key40": "2TdjrTuEXhgbL7vLJ87QXDV6RF9ge3WVk3J6K7BCFxK4CQMAG1iGMqDVRDJ4ANPtPgS8CD5v8y3HEmMtU52VMe5Y",
  "key41": "3G9Bxp6rf5yht6zJ4ZiVeYMFhSV4V5sh1yASDKXd7p6XD5zd6pSRVK1bXc28HPVc1k9S85ceEcPVvmkqfTkkb2iW",
  "key42": "62fZkXL2owzpU9ks6sJ22L5yp5qLd1X1BX9CbDzwaSHaA8tzwKQJh4PHSzM575vNzh4BxBLFonwgLJz2QcpMAh4q"
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
