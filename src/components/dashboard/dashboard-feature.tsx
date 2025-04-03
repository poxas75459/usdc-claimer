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
    "48j1LRNCi5PfDH56fJhwhfvXsamek27s9D962PZMsBp3fH4Uvwp9ECBSbzP9uMfpPeZaTVne25oEaN4BYVvUjP92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7XaU5tWnCErCGByvKhkN7CZSyydUQCvSzaRZ7vqByDcEnVEkTGrkNUGM8dpdf9gy4GmQGSbjSYr3BUSHcoN9dLQ",
  "key1": "LUtVnRehxvYqiv7DzwBwjTCDVgZCZogzDgYDnHDRgQLjzNEFyvEgutdV8vaWwzi1fHycdt1CBXnSo6PKQP8zYxX",
  "key2": "3H4tntqyiEyk1C3oE2eqsQawYCbEe6LEUUnm2CvbHt2C8AFooeo6pgwauUebmLkU1TnoCkqenLKfRxdTEkRXQvbX",
  "key3": "4it9xh1stG5mjcYAU1Lrqwfk5BCH6218GPXQD9NAcjyXF47C8D9wbuC9hzSb94w2kdMT6SHabJ65i61zyWwsnuzu",
  "key4": "2fo8v5B46bryyH1nzCTbA9baQ9Hv7HmK9wfRi2FWKKMfuDgcLHp8Hvksgbc6nyfuoazUmD1ZwJDjLggSESEb2WMG",
  "key5": "PXvgR7FjL1p44uPkmD6biFNjjHrAD7M1WabGMCzAf6VcWMPAg5oJBtBL3vTTDKJwGibjpLgHHi1oXT9xcoViC74",
  "key6": "34QwiLdrvz4DViK73NrXaYuBuS7bU3e9mGyN9TrXVyRMDxy8UBVasUZP8VWQeJ5c8W1d88VFn3ic8Fw2mwmgKBFF",
  "key7": "CTtQhczfroWbHmfiWMNqiuNsBfwoVq74LeqLDsCN2N9URHwS4csmpoHgLMCQQJc2fpxwdhHP2hcwLojYC2MjE2Q",
  "key8": "5YSt2BdvUbePTg2vASxLgUpzaF79nNsTXmtESyf85mcsUbFGwq8yDoKu8DngLQDvEKcqkbjkoj1yLufJVEEHKBYn",
  "key9": "2Z86iUZhP8WrT4zxv8We5dwNiWwQGax65B2HtrB1dP9tcnscBFszBRjehaUScHBxH3TkgN6US3H8NXpVk4n9T17r",
  "key10": "3fARZm1sA5tKCrKGWYduBFDwAsceNq3bP6KEGDW8Kv4yiUpGF6Z3wdvwwXMNnsaRQVQVaeFyzGUPk6fWGv1kfhUE",
  "key11": "2xwrNzLcEoGsySYpGSUtPUeXUdnhxxwtx8Ttdd2LYnwd1h2czY7suz8ipR1ykbfq2Hko8cjqRfFztLmQ97rxXwYg",
  "key12": "y2rjTBsFexv3GbKvXNyuT5TpU7h13HuK28ZpdjarjJxaqGHZcLyv4p9GYLdSmA9HMHRJ4sRdXprjA9jrgtysxTW",
  "key13": "4AERCdzj8UQ8z7FKCCDFd7nQ44DkgoDXMUZGZ83TwB1QpwAk35PFPzx6gLqNo6jK7Vm3FSArqcN7x822G4KgKj4Q",
  "key14": "2hBvd5jL69snUiMoAhW69qa2hZQukk9wbHuJdPajBVx41LjjHbxQEk9tf6MtFayKkqW12a193w4iyJN61twRy1fm",
  "key15": "2QUDweTQ7DFC1sZmSDrfmXXbZfDeCyB5kKmPUyLyT7Gwd3T77bRwwu7YddcZYeQnYUYjxqxxWhCM6WGkPNt4dxez",
  "key16": "3q8MT3BdZyeKodcHF3kP6Y5wSNSbqJ7JTjW7GMDDiD2rT4d4G3cF5g1XVFUsrjcetf1xcV2E82Np6rAS1rcRpShD",
  "key17": "5L5h5T4SFyt9NK9K5X1NaC28azqJSGWLa4gKrjG95NDYh6ZkBceDki8k8t97rbm453E5ftup685if1qqowY1RDFe",
  "key18": "2QnPVDUr1Zr75DPCLGAdwiRzxcZsfhtwUGgNsVDw7dFjk3TzzCW4ZUWf6W9y9GC12ACCQv3zqjwCxBGF4cAE8jrp",
  "key19": "4ouJw65KY3hW57G43W62SxFvCkoh9f5howDKGWmAm9gCVAwkDv8Cm39Vrk3DLSxyEpgTCSf6uEqYkzRsjieh3NjF",
  "key20": "aCEFeerY9rWbVs1hcU9GPoCK3Nsrj6Hd6nNdSSEfNupsAmUeu9rvJnvNGpndEuRg93Ty4jLmBH2BGYbyC1Trbok",
  "key21": "bBB8KcGVAPJTxKTBYyLtDNrqEtJ4wdpmf4tLvro3DZ3tN6GPbhSFXCFcre2xWfzedw5yUNh6bH89NJpy6VDRcV1",
  "key22": "5HJ2c2PWKH9kVeS13t74wU9SZebeZCQ4Ud3guNjyG8TU42QMdW7SRHHRAVMyVH6EYG27Nptp3nDChvxpom2mpHYh",
  "key23": "5q2NCc9jYKGgiYYymkUci54vtpTRCwyEHyb3jzbuvd7QJbgBDjjWppDP8hyQsouL8cZ6ZwL8gJfQGLJKC7ZBwgST",
  "key24": "4MdQxLEEktiYa2k8TczPFLve91BBrkhG2xLrUefp8ou7a8jDJULfSj7PB69QFAyjr7QSi6rnQSCY1XKrNqoDFgcJ",
  "key25": "4FabSFRa5tW93sZZDTP9Wads9uq6doEVvzT2wWdHrpSk1YAZ2NRjaYueVz2cry6Hh4ttXSpwWrHPjabzghMcRtDp",
  "key26": "47qCEv1CenEThrutVyDDa9jXAm2HvG1uqbERSTitzy3gd8d7Xeb7P9Vd1bU1cfj5vmEcEKqhQZsNnw5nw9V7aEHC",
  "key27": "52PXUWsC6CuCt55PbTzAy8iaN7LcaY6LvMMcByeDoDsVx6PYTGfpFkqmyL4D82fMQg5q8xmkQu75VqD7rEGmLZt9",
  "key28": "4ZbdpLxKvDAhBq2JqViDUPyJeirU3E3y14JPTpXXG7dWc1jVZeDBM7SyVD5RNbyK7HbNrs4BJJerQXx7kArWUZ1c"
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
