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
    "2wJokqjStuzgpLL1MyoUHchJRw8mCTcSjx3nyGudGKSKGxWKKFDtUrpurMjDKW2w6zNtHa3z231L8PguZmKc5Hm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZQ35GUakSgZmVqvNdzokdSKhgWVFXM9ELLA98yH6JATFFbcPXNoXFoVUDVaGhZrVJupVrtCt9kFufQM4CyfJ39y",
  "key1": "5XgoFdFoN1iHHHicWFk4yBo1V21dqtMyES6em5JAdRNNeHz76SkLGdvrKiWzT4XtDatwX82tusDueYgFq776SAQM",
  "key2": "4cst1MvtJZ2trG9Q2Jj1vqQ1tJQpqsLvv1vnynYKkgR4TP97UYsubgKSFcNpuHh3qVnixhKYTu15qPHzSbBUaJP",
  "key3": "BqqJFpNU1d2AQwVPTJQaUsm15oUY7yhXi9gRwXBHx5hxEc1MgVQ5jrULZna3dKG2BN5e2bTsRNYVfQdtT7nJwMR",
  "key4": "2T4uXsjC2ScCaRE9DixxNx2bvUiMpRUvY7JyifUrb4Doxq6tPRiaLwW6zG6QDT9w4vzUFGL8bBih9aqUhYG6rhLg",
  "key5": "33UZdk6YF6akBzHBwHwEV1GfMBU3kT7UjXmbXn7UoU7cxuf11Xjg6nPda9G5k1QAs4aYMSxt7kfo6Fm3uoCrApkz",
  "key6": "5WpWZ2qCyrFi67wDnZxMFyZf26REsZUb2SXV9VQBPJwQAhRqkcMWTAbPwKAX9SpFD92ciQ3HKDdKg3bvvkRtuqTm",
  "key7": "5Yjzii3DocQeVEDwcz34ZGKAWjAEanA5ycpq7x8WXr8XG38hynnfDZfV1Q3MTgpk7YnfPo8PQj2dW4cdi9KVscYN",
  "key8": "3bjPV9CvWHBW2XYQi4qu5pV9itEDmYHiJCuTqZ3qSj1qoujm9Wkg7FPPBZzR7sFMPHi7ucYGGvF5i79nA7onkjjp",
  "key9": "3J3fqyMMRiM3iLnfT3Stv41SJ2xw6gpEDPSf9nsY7mVPFbkCjBwfPD2rdN69swz5dX5cykEjVNfSacgqUcxTY8hx",
  "key10": "5Z7LMFVfNdvUmFh73jiGV8DDjheK8jpAS5PA9GZkynhK67it6X4wKapZ2URAYoaReZZ57g9hZVPkEFar7PYxLcCb",
  "key11": "2EN5PsK8yadqfXhDQLwjUDZ4BKEyT4biWATZuJt7CGMGBrBc6JyN8EH3DHWMc5ZtG8RQsUY16GiF1pfG7ujSNzZU",
  "key12": "5cH8jGqaSbGi1BrNeSL2R13SBibY6G7oSz4Y5FVuXgrfWEvJWcuqurcose24d5td4UPcvSfmH1q5kFuFj48LEh5v",
  "key13": "5UQDMMVAyDp2Rn2kQgpg9EUTLyzrChXT1Qnf6Dzzu2HCA1nFpn1oZiMtcPJR72GAT4LG9orLxJcyFYZVVSZAobuX",
  "key14": "3Ssf3WWn7d9RVoGPzMkUVe3KwmQ7m4MHuzwPjMHVJDLnkTfzmHRUfQCZvqapEutCt6HSgm2gUEG52sWLUo1PsTgR",
  "key15": "5YYSkmQVBfmYELGMSifypgb8jfFFqs4S2CnU5wn7JuifiG46fYDkxeo16dvf8U9GX4T6myqxJ7jhDjJFgzGzPkJJ",
  "key16": "EpERXJePcKavz9jsRBUhfCiDVJj4kSrGbWKgA3HFEWagVFWvf6sAfXyxEGRb8f7cYr8988tNvSKdepX24bP3Wea",
  "key17": "4Ze8NzSiHhAZ4vJLhKDYhwU98jAva9ieCBuTDtLHpzsvVuXnk12PV3dmqpntss5d3yxMRaESiPz2jDYMEnXvmyrn",
  "key18": "48GxvikjLQXAKwA4RfqHUmbrttsGPEn8NF2eDmTpTaiaY3Q5os7YJxAa7VLyXMBzFs6j5QZkEAq9ijzFWuW6MS9w",
  "key19": "5U3E5enoqmfYchmB99KUj5C8hGsUCemzXufYWryHk9zVr1bdykNtcJnfwtBbJ66WcPUg62sEYsGWjyHpZ1FTFp3y",
  "key20": "2kprvVf1pCL26MhCMPn95tzCQx1VK4C63RSu8onfKDdFra5h7ynMwoV2MgKqpRdp64JQdsP8PvQ3TroVQrwP4DEB",
  "key21": "4dHHMtobXzz5tyergB2R44U3ZAH8YNtGFWnKk877MEx6aN7E47T4Fww9tXZyS1ZXnfVXfkJApq6rAHSQsXCB48sy",
  "key22": "3yWe47JapYzVm75wMxU346wpH6QQWmQuMUr6rNiWk9nDXamhP7mFn44PgHhXTYzLFJyBsn8LnhQFFusYTCvKRjYh",
  "key23": "5hhjKQ4onYKQmUjMtKjUwrhj2cEHqenSwVfUADmQHNaDnJC1jjsVcs8QV6Vn4F4FgDzJLaAdczWcAsV2htdqkTrf",
  "key24": "26pyRdPKVhWyz7uWLY9xYoc32V89WfKrwdaXM8Po27iCzf56NJAwu9RfvtSv4rgynmcGn6APyxCyr5xYCU7nfxma",
  "key25": "3A7T1V7yEk2EXK66wTrPsp5AMdyDDEvyCrpc99jHArEumVHd4CNEmE9Qw6z6ZKgVYacX3CJcnAVDAF9yZ4NQuXeP"
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
