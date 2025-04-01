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
    "62PxSsHbhfXf3bXNzXPAJ7PTXvoT3BxfKQMqtyVzrQTXRw8Q42cvZJrGfweVRQ3vCTUTbx3VMobNGZUzKL5ePCpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TLgyxahZfc7vLwPYA2qTJGQrg92pPbLDHKuq6Dz8YZjUxMsBAWEMF7uPy3NTq5SdzDpbFZdQ8P6beMYEf6cmEje",
  "key1": "4UNpizrWVnBudTtBp8UkUqxUSabJEcqLf7TGkDxgDJUsjjPyvhqW22d6izdEfXSVK8ZfA2iYrdEgszwfqieRvhAy",
  "key2": "5KspSkafaCjUJWzDf6LQ2Qd6C4XekycW6idDYS4biZX1imFNhWLkwQbWkkQqWdK9z8aCyqcRRMYSzpqCYbkKqNvW",
  "key3": "5An9RG27vDtdWEAiUGE7M5ToSWp1E8AyZ9t4ZU41aPkeKJWUerWcmUo9XPDeDEjWtaMR8myMvtZbdw9T8Q8tdohh",
  "key4": "3NzFZMCFmRqZPCVeAeWR9Sv4cD6ASDAV3p7N68mPQU3QfYkY69zWeCSgrpihdA59RMqXW1mPwVhEcBSNVXfkH8qE",
  "key5": "2DceHbT7JLvQ98Wz2mEFCmmqa7nft8CntWvFLB37364jXf3oPsiZmniEe5iE5wBhtL2kgJE2RoqwxihrWKLTKEUL",
  "key6": "nzcz5gQHH8gxoPmgL6CtskfYg9riw2tVyrQGBsfpXWj6DM5BejMoBzacnhB38S3v1BAM61xgf7ParWEf2EFiQht",
  "key7": "3ghGaWdsV9mqYjnXkCWdbaMJcZLhZ3smqKsYiEG784hDwrMrFZ42aYuvMuU6EUCAyfkkfTJNJKWBHEr9WsZpkKgc",
  "key8": "5HrdJeAUYvs3j4ZY3UkL42W5yQEkGmDyDFq7D9zVeVQMn7CiwkFTgkrrvUg2QX6BBnws6iVMDVv2H91vhopum1mU",
  "key9": "5uH9kQsfT5jv2s8w7nqQBSGy5HcZdRq7fHPkDPKZPeCJ6SnUgfxFL2TYFWMYZNvTTw39kfAi92jGAT26wzUzvaVf",
  "key10": "62coVm2HyAswWjkcqBsC2hubE71P1ai8S12wJWzRujaCBPDT4JmgJimnKaMoLEYNHhFJ8udANTX6JrKYujgYQYqi",
  "key11": "4SZ9SaRg97SUZd5fJbu4BfrvtiCTigM9ckbu4hfV7uyUjxGw78uoSWkZTtnzVWqeKwbSVxWtnobbEDNJERBCLmnx",
  "key12": "3M7bQ6NSN7pcGGmAdhVFtfV4vNN1G4JU8YMPY8o8Lk5gcAxLYAPiT44qcgzjXJ4qbtvZxK1iGYPn3EwNHEH7LfJL",
  "key13": "5FVJp3izmQNhapmjjgahSew529X1A2eSu43PKCZMmpgPPkugpLmbZCTBQqrXNGViwC5XRat6moaWpLCZTru2Vwp2",
  "key14": "4m6D8i7uJbiPJVKKvWY5ffdFn3cGp7U4J6WEQ8M4pQsCcAaZArjLuajpFadEsSgicZbFoLdBB8KijW3Krs9zVf3M",
  "key15": "5bNnvx82AK8jX1hYVDPBSfx83Lmd4nCKuz5zAvLKY9yt4thKShGTGe4FwnNHstNCmzNFcR68XeeXQqCDr2MSH5wd",
  "key16": "h5y9wXpo4cJkBDL5fmSzbExrHkgHkLiJM4wAB3VEzjb8B8HDC19jB1Aidnix2JBwNgdmcmKEWUeXAj3hk7LTCbf",
  "key17": "3PFXDWmkEyLjZzH8eCCKD7QAyeLE4qQkb38CzsF7kSdibdnKJ3d2f7UpSMa2G4JXJN6R571qPfDZNvqLYRALtJGy",
  "key18": "3cu3LhLmb3AgQAxEWHwbf5DFXKUQeoLMmESYQ6Sg2q8CsLWK4mBZggtJZfcyTCJCrEocYVdoBCmKtbsrmVKcSqpN",
  "key19": "4jE4KbagEA9hJcERjAqs6iqkWmcFeiTqdB98rppMcQDd9nECSxEPrnsmW48UWYLifkrrhiokJ6s4gzXgPRZxPBwX",
  "key20": "3eUjse9k47hoGmPamzrzKEgUgC9hCnSJYKyThwxWuuCmtQ7gCiQpJ7eVKLZTf6UrK5aqznebLggNZtLtb7PUf3Je",
  "key21": "52SCBBTnhD4gDrfJVLRm7w2wdTE24q5UfVLpWYg1axsvPX618S7WLWxkoRcdPuzrMaZZcStzstLd5E6e3qXkb5E2",
  "key22": "66BtoSnfxVgPqE1RiKh5PYrbi55FiwuKiepxtc6NSs3zAF8uonbT2YMY9pztp6BwsXdckgUxp2p9poNQyNi46DAR",
  "key23": "4jcKeqSgTPgZwqwRhutHagfuXb3qJAijpoUzMvn7qGgphxzEYhp5d3kqk4vmY4K6UCaxjKE8hPp1YYrZZe5EMWY6",
  "key24": "4hQ7tNqM9NZ4pkXSkKqUaY3kb7PZv5CLF4jkvYPALQUTqkkkGSQwXYDugTfn4CFjedEjuJ5ya6iusDr3EipB5DfM",
  "key25": "2ugjv1H7SWkCKRHVK3wDVMDdHhiD8tqkbiFb3ksxkCuAGEtJYMzoVwMqNed9Vm5PUbDQmdGfFH9HG2DwWhMbpq5X",
  "key26": "9RHn6BZYSViBvGhQuG9F3wuqx2PhBu31D9mGt7kd4rF6V6ZJeMf2g7erDsBszF43DLSTQvr78JZvpPJsXwQ8Bw2",
  "key27": "2i83MaKSzxsekfh899oFhd56xqUWB2FYM8SGXT24qsfYLnST992kibTpxGzT5eFDsAS5cz8p7Ezv75wH1hmTyqp8",
  "key28": "5nTxibPjWRKeL4utGDubkfDAzjAgrHcdpGVpjg4mk66qGGGbEz9NCnVFcmpXhY4oNqA9TPPn7oJuY1Z49JiazprM",
  "key29": "4FWUBSz9Bph5MtdPpSbGWfAf9QCFV9nZdgsAVVHHHbj5MsmZaLAGavEJ7PnvAeMb6Zv4tc8TXxAY8CCP96Kt84Py",
  "key30": "dyvNKUKniVZTH72xMqmEp3VnRJUG1saZLQo1puXZuXkBjJLfTH2uskkszaghZqpTacggSTuRNAgo8rXmYk6eQSJ",
  "key31": "5zAQ4aRCcQ83qKDKHA19vXhPAezznJ2GkkwZqeg5pm23LrHERuDqdhLwypSXfAeqXaQuT7CZUucX7BhZMZwV6bfH",
  "key32": "pKvmRnx1ABoTrp1CpnDiMNKBG2XawT2NZUF2hwbrqdKu8D1tpTKqEaaE1ReF6K85cp5zJujaHjCqV3wdj3NKs3L",
  "key33": "3ZCWPY5mDxz4ZzEMUd37DtrSHyWs46J2QcSfxPuCBccW7aW9rBbKT9d6mMuRU96Kp7m5hv68u4sXkPjho1Aos15o",
  "key34": "2a5zPeLEUfhwoGjMF1Dxz2HvD9mkfKV9Aeh4LTLePBDJZBGUULYmPRsfn3QKLhmeijJZ7K4mFYCfqG1LSPDjb2fT",
  "key35": "5JwywARNdoFXLcDrZGYzK2hifUvGJR4DWyy3L58YCfYU1ThMCGtd5vWbfR3rtQxRghUhdounRChjQwFRHUaUXzZ7",
  "key36": "3H1UYm7RGddv8zhVPvpzER24qrD2W1j32Pr2XWMuuuUVb6tfqjY5zshuCypS58m5vkj9sEnBm3MtKd63A77pM5o4",
  "key37": "UraufKvqK41ZEpe1Yqjjss8ifLWXPNza2DN3WNULXfcEEtLhrwFeEbFsGWHJG1q2QGcraBiXkHuQPqHofukYezT",
  "key38": "4FXV7mdt5F28GsCCPdTeVjQ6h9EB5SDnFpQoAaJZNsPiVAsKoX6yVTCF15YKk7JYuupBwZLcgyutUortjzh8oY9X",
  "key39": "5wdpftZ5HdKKEgvRiLqrPJi9mWGASTzUd39YMjCFQGiuQAG8caV2Apo1xhPRLsdfCtym1hg1p4ooxryVB18PY3QJ",
  "key40": "2U2SEQpZ9MvWFx6gJx5V2T8YhH56cyJJ3VM9zK6XyEYQAS5qa4XAcgGSUpMtSWMCNMkkxhxgXWaYoR12RBgoGFgz",
  "key41": "2b3KggmEDAi7BC3ntLR8YtntYGH3djVqTJ2xj5QSHVewUhtis4fJFoTQpWDWugrH5cJmzuyc6aju8do7HYY5KhsY",
  "key42": "GrLZBR2Ar94TAwucWYEjJi84RJKoxGm7JXgQvAybAvxkYTr8CwvsktEuQa38Afq7F3z597B8mJekf9ZALnBQQPU",
  "key43": "ypnDC5ey51P6EzgYtrjYQfgUiP5txSVpEaDPxYG3WRkCHtXLsGN2Fp165TPXWJeazu6TgvYfv5j7UnCi7PKPbQb",
  "key44": "5GAYQyzzmwKrrxyUbruyCbVtcV5erziCUHWvfGapkhZcNswhRi8e7wrVrWnkz9XHgvwQwwMXwgkZ45atLz4MNMRx",
  "key45": "65sfGeeejk3CzrpEfcWhnewdtTEi5pvn95QuXPs6YuNYCWJkvMDb3xXsLtN9sdUWYM6qP4Zv5Hcajws48AvapWe",
  "key46": "2CsqcH1xrKdAJVfHRqUcu6pahKzgkaKiSYXfUVnfFZ1GMmJWia5XcKcS6eVyhH2saA1nD5ZLK3VV37WzXmG2Gomq",
  "key47": "3X7FDSToktFziRS2Kk5uANK6SByCa4oSzq8afpRGQm2Aabf68n6cLQZvzS5CCfCj2YEpiuZqj9iykxVZzghiMAoW",
  "key48": "44YNiBvLwqX62oNaCY6xxjmAafd18GK2YWNbXUb9ipQpQZPVFWQAQz5g5qA79ZgmMEyZsqRLm2CtfoRsJdTA7Wi1"
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
