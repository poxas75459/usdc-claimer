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
    "4w8fW4YxkbtTr7qoePnpzDsa1PAmgzMX2MgC7rsGpKnbshxiBGHWNgDSfKSuX5es3g2cgS6R9wLZwBgv9jpEb5PF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6NbbRo4p3PZhJTHCoFYAkGCxxPMT8qt4WGY7KQf5YGjDkRtjkpdWunp8NbcWqm8zJDFkKRqA9WuV8gUsn8rcKRk",
  "key1": "4uXCrCFqanzTKW12rVRr29gVWE8qA7xCjpYc8gDghSXVZSJgLoAJE3VQWD7ZQXA2NUyCmkpgipMrzWvW6eMuJEZJ",
  "key2": "64mVQZP4naixesVSYEotuJiTxLw9buxykA2vaz3Jd82kd6DFgcLxx3xMrUg4xvM4acKdjgQric7cNLj1Wbfsmgzc",
  "key3": "pucAHb3uV82wh2i68j4G54kgxa8Khk9mCbethUud3ndVTjoLHgcXorU9RkwmK451HTpR5EBJ385MCtKwBLpL1es",
  "key4": "3Vaa5dFe6DcLM8MRUAEajtjykRX6CxcCoZgm6VsNvJGP9aXvfz5n64Uwzn92CuRR1f5FPuNfdxjL2YCae595zjug",
  "key5": "34fSYW1U5DzfvhtdVfNBLiDzaVQMqu4trDuQAumv4eVeJV7jjSV2EZGJxYrQrdUqSq55sGJBdFWKisWET8fwdETG",
  "key6": "5UwyK3PStFxPEMZMpBYmKpC9V4Gw7wSDwJ7WsXSSETqPYwrsWxqqFws3ABMaG7GP9N6G24weig5aG9RLSEoXqdHS",
  "key7": "5fQDr1Eq9PxvR4MnYKCdo2wK2qntoGaLuPChyE4dNyJqT6AAHXJRvvrrE42nnHQbPa359U1tNQWUYvsjyVMg1bwZ",
  "key8": "4ahvDYwhiPLg8t9hJCELy2PPWdYvDgisRoF1igCnVKXZAuicU6MqHM3MynXk2yfPSj54k2jZ1YWEViqExGWnDWQi",
  "key9": "3n4s5CCSSS4veCmpFPncEKZpQdb3ayLGYG8fzUSDwThDZhSg1ejQZqWtUFLzxJxHvZ8BNYV7cgv4qay8sJb5gV4f",
  "key10": "i5oFgVfVXW4cy2eKB2H59fdqXvzvLdHuCUVtq4rZk8uzguM2r7gPp5hsC6jiT2LA89FmXJa7muvbYPNSVZYrpyC",
  "key11": "47V6UrLLUyzYcXMcxZnEzF5T7FKQFN6rd2bdsn7B5CV3kCY6AFvaQPPmPyfLtSW8KkgbcAW1nv5ej78RBPMUxhk9",
  "key12": "4JWKaJssF4hbLqthPFYpxmtxeM4xexzFX7DBKNEvRmgU9NcXqQZZieWM5aBbMW6JUTDLS1DaeLxsd4TqCgzU8VUq",
  "key13": "5mHAo4tJJB5E8ozRbhA67di9ZvcrGdixx8NnbQb4y1KsRyf93PDiKNsV2wni1REeCtqRhBYC9LznjRcjChwP1vsH",
  "key14": "5nCBvEBQKBBuGjVtP8JgMtPsF222iLmUa7PPDde1Z9FobunG5pVWNqWJJPAn7Rj3tg8KNMm7ByHBTg1R6bfmBbWw",
  "key15": "2GAUWFQ8jDEnzJwDxKJKQkMkHdvye36RYpdwCb6bSbkvgu7h3n49Fu8DTSC57SjuL2uus27DuXXwwPF9pPbMhySs",
  "key16": "Jar9KMaLQRUjZuj7jeDAZkAdwJWnK8K1zHNBN96MefJHv625kskeGWpzypjwM1QZbBSueSD1TwRC4QvCAGPsrV4",
  "key17": "5tpGp7VAKSSYE7R66gHPANYewWFBke21o1Hx6rFPd8UxwszjZYosJ1E5h49VmcSETqCAwX8V1F1WsP6aQJxTN2T7",
  "key18": "4vKwYnFYvC7J6gi27QhTe7Rz5ZcV7c2qs11cEC6SuXNqyXMhTEAuFKzLSWqSdGW58cyRuKZpc2z4Ymm74rN6Tcr7",
  "key19": "gbCUcj6AFRmTzfhnnFyyBhfSQvN7XCUaMD6gvEzHTjtJoamvwocj85xwwKSEH9goRf19DxaA2iJvgShqFozrqfm",
  "key20": "1uk2TvoN9FQnfyj7oiDsoGfeNrUGUjZ23qUzHDPy9TQg27hKhbohiDugdLDX87WZyxfukFmR3Pos4eWJfPUPMn5",
  "key21": "4v4Qo4DPwjVaw5nfg2mBqCfDW9yvFT3wcqcAu5ceaJm2jJQueAYqxapPtxjSwaphieGXLMDTQg74pjjJKouQA6tx",
  "key22": "4FAdVDus9TQAZWqrULrCvk2LDVjQyj6tbXrnhoZG1ZUGHmRAXc57TUGPgFkfyK1KdMMhLjGd3senQQ4qUCPB5Ds9",
  "key23": "KDL8ndzzHXPYWVAk3mRzoR7XNLje97gywHEentAJkG6e1ikrUB3g11n1uCozzFK6DWqQ4whB43q95LNNRutBE4o",
  "key24": "5qpaaxemhjt4zD6X9sNMsytXqX5iYbZisaho9JVEwfyYHuK9VKxwkoo6V2pS1TGqp3nJQNrv3mT4DeL8LNhmAP4f",
  "key25": "5yAJxBoZVt8YosYGJtahh5Tu8Kee74Xu33KNufkRuzAY2oVLPePbSkHQwKqQJpkWnnkLhqXbfcQuHLFUwJ2f7Vry",
  "key26": "qfWjeCAuMFCA6ijbh55nSGyiG3D2DYKA1e8wDpSei6LuGijg2q7hNZzQqaagULwb3wCD4wRGU7vPMTwpRZFqwCr",
  "key27": "3Ds9LYTMUPkkQnE9bUJ6mTXsPa4oMPiXkVfttvw9Dx8hiHBZMp1CJbvTXYrh5fBxLtjvuMr8kLwsJfw5SfT3cuQ7",
  "key28": "5trBnMMsuT2187VuJVjHb9X2VwntD4xX1pqKhyCWEtbuEvqtyZMVbV7hRBcqFH8P5aUKBtFGQpGtTUyW8JKdaAKS",
  "key29": "4DqWSYGCwVDKhgfZg4vtBCg44NoGCqTfed2zokHVVp734fGZ5HCvboBTVjMmN68GWAP5uk8fgQj5EzW51r548vip",
  "key30": "2ZhTRTYu2URTcZSLnLFpAbV7xdC5kNpMUmoDUFsjzd12aVvPSd2wkWcmEnR5SwxgKM8yaBf8uhVzWQ9ycc1JiBWA",
  "key31": "4opxc8h6UDrmZrgzxSwdsjaUW9fWEcA86kcQgQQoaeJ69Skj91YxeHNuDEap2dCzkQfwf3T1N58G6hKp6HnhRbhU",
  "key32": "2rsWy3UcSHq3N2yz1msZcW3pu3UnrmR6eniyKGP7pYwkrha8gQmKmKKjXwL1iqRTWxR88G9DFwSqhKHy9MNSEX7C",
  "key33": "dZKXdnn7wFJNj1RitR8x92LuBWiKM32qAffoPSktsSuT7NHiv9XfuwDAHutNx1aRxVYvWHxf6iUTQb4C3PaaKwJ",
  "key34": "4mRcjEgMhiAD6rPEzb2McbXem5tUNf9UqvrFuZWUP97cnQZiiqpGJN6uDbsoQv9pAsSLi1d1BJb9cCpHwvRrZ7W5"
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
