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
    "2gCaBKPX2F5fXb6Uw7XF9jYyCvBtdYS1T3sz2BP6xTfPsVRMNMvAkvZZwiSnw9UgBm5Nq53PeHfokaKdYuWo9Tbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vZPJxza1LenEtUtz7Z7Yhtg1ppXbjjVHdsKaKiYtKN4xDfpFzaR6BRCSeo257LG3aifX4CE4z1VWgSdaEgHtWqa",
  "key1": "34hxMjwKJUgyPxPxvVLpe5ygsq5VLgTR7Dw5zMt2WmLXpvHvGVVmP1CJ8SKoRWnPhYejspXEYuyFkpYW6fsvHLDX",
  "key2": "29TYAgLiY6M3XYxREnEQkhzxXdrUUwY1bX5jcivRMiaq9kwZ56T7ZCZzUCBVYAjvSyJ72rWWvyYwaLbU7MveimCD",
  "key3": "2eKsduzecuhkt1gFU5PuwmCHH88coFcDXsV7Gt56mgSDoRQdQ6AWQ44CVfxc9vMMCN87gRrDzxRTSLYECE8t39fi",
  "key4": "2m6VdnL8BK76kGFAA11gdPBCZMgU7w3vHtt4btuRhgUqC9fYPmXPEigtgVxdFUN11oCfZnFUVCEbru4qAVDNcgXC",
  "key5": "46jTRA5DkUyirBymXKPy6USmT1rgba8qMZrLCr57KzRnnqRcwqCKpa9yCb7hAUD6J6629CxH5JPn2fnc3nF7EeaG",
  "key6": "2x1z8WH4WpZpndYhXXZoCUYZB1TPABkAp9asVChWztNpu2mfT2QQraDH2NQdHJQpvapYrTHaVoEAaK3pgcpeS37a",
  "key7": "46VfbkjcJBP7dudTz5Wwg3bQJqRYR37M7TSMP8UaaCpeDNvvTfArWGGAdu7FGe1K6viRntYNCAX5yR26YKEJTkot",
  "key8": "3nqvSYrkEdcrA9rzbkpdFTYoFpbfomyZUdtAEDeNEtYxy9RC86TKw7yZ8twghQGnjEdJuZmgT5aWn7SegXTBhaBb",
  "key9": "5K1VWzCLZer9xEP7mbfWmewPgnuy1wNRTXXfV5CpiZprYjmg27CycnRuaSgXthTSxw9DAEb3ro6RDfdtVyDxeRYr",
  "key10": "429f8YooVNb5VJXGzrsVURSNvaA1tqBhggyUfwZbXkJb57keTrg1d17njDE9EGrVLigjEze9dsqACZWzBD5ZXHH3",
  "key11": "4PGbneJw25Wy921dSjHv1wGwjfb2hBezMVaQu9s9ZXmmUwWxZcPPU2tw9barge18uJnodtYmbQVhZLK7xUim1cP2",
  "key12": "3bbXnXFGuhEx34HsMcNcYBkJ39Fve97RxqGi6qUnc9WfUax6ZwTYqhREzDjHhGLCkXwzNzJs36nb3FFoRcUyXRd2",
  "key13": "5SaZkewGt31taPwwmzhXRfF5ihP5uc8WtrTd9kWia8AzyYohU7D3AU9fjz4ZNN4iEdNKUm3A6FxHfcqntCDD5J78",
  "key14": "3nqqvRm3cNcu4M3bVSKLCw7c8fyFTVZEb1sNJ146UiLoc1jtDpBfF9HAARh82xjh57KpRYsBo7tsanhT3RejmbvS",
  "key15": "3CkaXdF8wBqzcwBvXyJpnf7KvaL84hMwUKYq4c6zT94rPJ3barV4vo92eZLoLyC8AjJCGC8NZFJWtMX2ENbBpac5",
  "key16": "3hMGm3Bu3F7Wx15EX4Z63z5d6772MP3SCvGzEDdqf7sLvt6DifHhtSfPFJYBhcBRKMWXVojWBtMz9qQXvbxLf7cu",
  "key17": "2ay4dYMZc1Su3oiMrGfTm5nHA8hudSh9X6mM4US9A3EQ6A14mhcBs7DrFC8rqdC3tzezHdJAUyqRhFTYWHZHFZ9h",
  "key18": "5J6yax4JEdhHq7kPgtU3k9q45TCkt7yJXC7Y6yYuuvPxezuvGEbVTF4dieoegVNe6uMM62xNMjBCq7BsvcGQo3DP",
  "key19": "zmjHCERWjCbRSg1ed9qex5eUUXcPLGfKaLB8krQL7cX25CnzFmXpYs7erFv9C9XhnoPKzLSQqaFEYjNwT4AsCj2",
  "key20": "4HpTrNENZFxTQv9q5wSJGM3o7PTDbo34QqFEAsmJH2zrDU9NHcFJxtsrdXzrRh8JYkRVsY5X2xtPh5yrpNf6pfPW",
  "key21": "E4TvsurYs8PvLrxe1Q8dfK7RSmgqmt3DVvTbXitfmPx8zx4ttgr58mWVL7kUrtmrSuU4oLf4XmtXGTbnmWNjCkB",
  "key22": "4iS4aV6D6HNDDxtaCmaXsLiEK52UU25PxeB9UifoyRXxDdsQ94E8FFebba1ozN67NcKiEpPa8CPz9adPhuiKPsxU",
  "key23": "3XwUcjy9RE2eszLwdV6TQ8T8oUSWDHdLeroAmRLRkeMfaWCAxopmLJtAxXhNfTcVd1r3Q9uV8d3UHTnsqoSFQYxq",
  "key24": "37TLsw1LArouajgJmcf8Pd3tQ7WkRjkSG1kvACUbqFNwwYijj7AMdaNWpAyoFYYQ5vRKsynarR36Mat1EegSDBNP",
  "key25": "ka6EZnt9FzbtVknYQt4bC6iS3GYht8FjzP1redU5QH9MgUjSAC94RrmMN3PtnM332xmqv2oj84x28KfV43ER8iV"
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
