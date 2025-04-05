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
    "5gkvqKAAFBfieaRKyzdNMPYPqUGTfpCmYm5snp1u7HYLxkecuEb52WJPRQ2deS4zNrDvJYe3Hbc9wkLJjjEgaH84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53UrdSRR14XPmSNxTABvYJWg3HDNVtmnB3KGXRvp1DvvYaHWhS7NrZQRfDrd3AhPhreXabY2U6B9kQYgXUjjNWkH",
  "key1": "4gvcsE42GM3EgdbhEcHnuj9xYVYjDrLzyQPGFudFDGMW6maBsNMpgG4r6nEEzdpvSNoweoxzUoRNBgqzDa8D3MtU",
  "key2": "5EU3RuAiUh3k59yFmF3nstUhrqfuGJAk1SDGnQz87LFDDEU85TqsK8nJJzH1sCBVVfDb8KJC6Ttj4GZ5P5XptMhZ",
  "key3": "3BP37VZX6tD5Y7G3rFTgG88wJzHMkZGndB6JT3zmRuSHJkLxzYwjzJmCzNzFa7tQJBzVp14Sagmnj1vVZLMwjwro",
  "key4": "b5ZyasFZ1ruqynWe8hqePtPjpPcrfkBFgkQwkBfYg6r5yBixkJBUCgfYFahYevVxmnZ4HjuWFy5guKF5YXV2Q5h",
  "key5": "4YvEKaNUHda6cKS95h8veQhZ1f6fRsrd1VQeoQJGjwNFvqJ6mAAz33moqcBfLgQijT7baMUZHBByDvwKG8ff8USj",
  "key6": "3feRB5gAshgxhGndcvg5iU9VM1X7i7eSUyyszwjGaAmtBXiLGA4cMLHx2yKAN4noDz5kQaEwKJadVfzEHswTdY1k",
  "key7": "4NUUczbWgk3EX2diKMr9dFSSRrmPWMWkajtt1ggmuwSiKERq5BAbr9UNQwC7zX1jgkqDxnV9FhVsEpaFULmsCgj7",
  "key8": "2hxrpP5gQmkDfw7qhN2KWkph8Cx2gnrwwYDbyrNjocnPXBeTPymKA3M3CdvjaJspv1cccxrtH2erPxAwRvC2hpLq",
  "key9": "V5gYXKpBYHyWt8mozU1mzQMgMQx3wS4dyg97WaFacyTuPXY1R2qNiRiLVuXhwDBAATGqKyF8Efy37gACX8k1AP7",
  "key10": "5iM7YTRT1M9Ady2jSroCD6z7oC6ajHK51ecDNUZpY4sBs8sPKYD1WfpyRrnLe34WVNmVZNmqKeLjGXKbYvAacKSC",
  "key11": "2oQGkqJg6jv4wygkJKnkG4KUsMDZzdqctLAAgbVDNKtetz2z9ssukJjJf5UjhKMwGS6CRUCSCFHF2gZaxbryfeUV",
  "key12": "39Mq8FDT9DPSgA6dQkEZyMfqMLerX4QwNzpDCkfzpbmSZYjUscUVTBL1rhc2PHCtXqw9Djn7w1QtxDK5QchawQXj",
  "key13": "2rR5vGMvLQJ4vAtEZvCnShGfZEssoMMxo24B6b5iVcE6XRmPuXmR3SNLbrKJ8LW8EosPfzrJyD5g7LYGLGXGt9c7",
  "key14": "2ZtZY1sYSjNeJoCN4D5eCzZ27QrfzPSRZ7JFbAhgvsytX5ah9ffXVaWrDj6SSnfKc2XAHHhmAUfWjqwraPx7ZtSv",
  "key15": "5KTKzMHcntxAkFms5sDJmRDpSFuDrcp9Q9vKf6MpwXigdb1b242AzrJwZt739u5TFj9Nr1wpaTkH5Lt2gtfjQW8N",
  "key16": "29yyGvSMYN1oLzCLN1BjQkDsk3HwkyaAGmeSQmthYLXs2uDMXo7p21oLBHJFqAYbcVaG2t5BQ6FNoiFyyHgX357Y",
  "key17": "5vwvKdSeSPKVxef53493BqqJSpbr1DncNJPfixwDrxZ1QhJ2wTuTeFx6UxqgpDCLcEzK65eU87VhP2zxnTmnAGZj",
  "key18": "5chsaoQXHmZm5CZTzgs1Yfse17mN6oineKjBzGd79TLhyvbZojZp9ThsLmzdYwtP9QqmoSgNrhpDSzYBowv75Qr8",
  "key19": "5mFXQPBQwomfB6vqooLvsz8HBiiiZ6VvL29geNRNKy3gTUXxgHvncuySUottYyS8Lf2GMv4HCqhJSJXSgCjaydZi",
  "key20": "4ATrTc3KZ5sFK7ooMfuYmGbAX1MAyjkehwGRiiAt3jiBtyDzXorCEfaUZiXGVRf3nr7AgB3cMDkBs9pyZKDM57ZH",
  "key21": "3TgYtKPthTuBnYNNzK6WhYQtoghaiVqj3bhfUBAHbMFn1zPNPBpMGZb1KEmeLZeU1CjoYGmGbxekaorVAd69H6eS",
  "key22": "5kFfdciRhzibJxj4oJ565pAXmvDhYQcrvBSy9JmiAo8gS8MUtGZELAzo8SYePhpaQqA7kfFHohaRXGezvNrKgQGY",
  "key23": "4i39sgpEThqDKfCLg6aBxEZfc9ianMboaK4VMtxRwxBxxbXxGcnQEmRUwiFXqKsgzocrvruDf9y1275eQNzYU2vR",
  "key24": "5oHSbxxnP4iPRqtAttR8QW29TughU4Ltk9bG5LUJC6VVoBSgLfFyxiNoUq7JKYwdNYwLHmmenrtgbsyFJ9WX8wfb",
  "key25": "Z8h6RoeQv4hcPrvCqMzG4P2iSAKebmTAnX3uXVvemwEhosUfS13rxBJw5TndThXxeKLi4nq7cjKWdjnxAaR7NYp",
  "key26": "2TiE2aBS24eTa4upE3fk5xWd8ztRVjF9EEnKQGWSKW8ppeBuNCsFXuP9HsRaCBguSRm8gfYg3oSWgxuZNe8E2DVw",
  "key27": "5ai5FoY3CLCuS1i8MfxkijWa3H3Tz6yV6mbxE6T3az5z8NVnEXGcv3Au4y1xJYA43bwAphSL6xHiAwSigDPGE2hF",
  "key28": "Ms6rUi7UZ8EQuTK1XkKQ8zmY4mdpfLSuX6FviGSeaoc3JrAWyj1X47dwTXzqNs7xyUB4FsCR2EAnMNPGvb9tYQP",
  "key29": "41e7LMuVoxads8unw9t2meayMryC2E3JjG4Us2UMtKxUsaAsY8UwFwsDHtcxL74a1ufoX4zsUge6NWx8UV9TbCxP",
  "key30": "4CyN7AboEFwiNJmk9VkyvFoUHvntCEuiRZNkCFCR5QUvttx2QKPu6GT9MzriYcE96Ab3qdbJtoj8wCAtP6a6LWWk",
  "key31": "4r1ZTW7EghaMF9gL3HtJSgft2WRsdhHiV9qBH1dxvB4RKGYNHfkCZpxciTC4ZeufXmdxrdWqnDSR33KERf3GRUm9",
  "key32": "5Q2fZgBhjPixRnvxSq55wDYN1FyfFSqHRP7v8u7zYJdkTnXkrXm3X5Kbzom8PynTcAYxFPbqMhHFTpVA3QUfa6ES",
  "key33": "2z2c3BfdxWdtzBH2podoTTVJzBP6av4SNX5GXjmEXdx3NqoHzLqGsf7G6vyY6NqqKi8juX5DQyDn2ebEvdVhnsMw",
  "key34": "3k4Ksa6pdMXZ5Di2wKm6X97T3ZwiF2i4RM7VuGXr6ehfuDGw2c8xK48aN7V4isVhVGYCbdVa9SosLqY7dxnZTdv8",
  "key35": "3rw2LV31xkow6fRSaJXgaZmxFXTyH63XyLVFGNQE2DfyuAFDqPwL9ZkjWqfD8NzmTqV9k6wpxnXNQ8TBA4D9utCC",
  "key36": "2Xy16oU7tWzABqwP2AVhYxQretUeyADgaNsfJs9fxDXjcEqTeMdbwtvrTrUVuvb9e5bkwu5cFyqCg5SPPn5AFeAi",
  "key37": "3fp7KUrXjA4CD8eePTmdAwMR2FSDp2QmcUm86crp7MqudCHdXqRBCLv7zawy2PghU2ydcaAXNLcZ3CjLxkZSWR3D",
  "key38": "2wMShVXdGfYT1YurW8psDHkrbieizoRBzUqVvh3NVwFZR4c5yGMk66SXcp2RXd85baguA2aSdjg2rmgEjecPPbdu",
  "key39": "3pNFTPY7m5wAntQSiT7HrctQ4HXH2LCLykLzbhsBStkVgSNtLBhpCm96umjkenJTWaeR2Ri5ezA6zyGutc4nZH4F",
  "key40": "4wf9mKVHvzQChLRuApXhHSpmN7uVQS7Ai3BNPbZY98DYMCQ6ccKsTMT741FFaP2U7NjvQvizaUv9FdNTmrAzhZj7",
  "key41": "61Cvr9Ws1RD23agaumtz8WdwqPBoqpxynTZUsHuU9ieSMsbQiBs3bjNhEqX2dRE47t8PenE6Hkgs9ft6csQapcvz",
  "key42": "4VJy3FmNovPk8TsatZp5xLyMdQpQo24783WYog63W7jwn84KcXqS6vtTc1pySGqEskLyfSAkkGMiDhPRwSY8A8Yq"
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
