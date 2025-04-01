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
    "3xv3CiDCqCfXbBwfYz4M3z9MGUxWs41FUFfYV9KFMauecWJu7MKzbdQiHjwjx3UDD4TtQussQokke3tg9SjjoSau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jekZC1JXa7C5BJCfZBRMwYk3hdDVutsdYXGwnFj1ttuXtZoCWAcvGMsHfw3jMLBS6ystQGNmvPjFbHj1UX8H9Qq",
  "key1": "34dqyhHY2bgMzny4M5RsSGhKHpk7hAfwTrFtm3GWegiFspamACuWPSV7xvgXokdntotJ6ReWd8hJTdxQq6uKP48c",
  "key2": "8tfyZiwur5KKDNXdTrREJCjHcYugFEsjHmtDtxQY9647uCEPooq5ahz7oGKZgU2CQbTSpkMaDhALa49RsQFwv8r",
  "key3": "4qUqP6cJ8Veqo7fsBKpWQ1pM1RxNcL9aHcyVm7tFthrKZDQFCeUipKWNub9QnjwddMY7LMkyXrY9bVPRF3vth8nv",
  "key4": "3ABE6ha82r8xiTxZJPnZ8tLwpWcMhd1S69ie8CPprqP8euXxj7wFWvR52QWa9bGq3NTGu4tkYJ9BAhNun7SNXvHc",
  "key5": "4hKyGkE7gy3BAc8dii6WMjq2Pk8p1TbPteE47Y9xT3Jhxfs1uDjwEAuJBqF3UUJG3SHCwS9zE6ixqKbnf7sfBNhv",
  "key6": "5ZrhHkLzxtpeD1xmnE3w6d6RoNaX8voaxNhCz522e58sh2dpcWzkBkJxk5eZ9sDwJDAc5VN73kRZAG9U8QXYdsEs",
  "key7": "59GV8LvFx5L2LQx9eiFMkXtDjpCWqFxajaNjUAvoUX8ww1DQ9syvndVgLtTnrdok3F69LA4Bz9QWvQMKdmMhd4U1",
  "key8": "4XDvTMnJWngXC4r2jARqomyHqFmFLYeTQRn517Rdx9ubzF87uJF1Japw7P82xAtroagV918uoragrR1jcwpHtaGD",
  "key9": "2DkxLMYUaAYGqo8BPhZUocLpijPHFGQvrNos746u7CcrCD5yrZSEkBQ6YVjakfDsNimPUJcqcHfG9Jbi8cmV8qDJ",
  "key10": "4xK4t3V55RqPcdv45nV9PkCd1DmgjCkDVtjsasNFhQe1BSwZ44UDdKwiHgDxH1PsK64qoBsTVsdvamseGmj4e8bz",
  "key11": "4A8oRLhG2edmeKfg5WyAYET2rm91zk9wWMfdmLiPMtVWXdcjqgfYoXzgUYQv6HgSbndQyaAxkta7bU1eDnKSFu8e",
  "key12": "5CrXtx75zvCkSwyEgvAGQPST2nwNQx4VAgpnfC6Mt7BANPWNPwnFaZ3stQYRW3yxiJJE9x6Ys3rY5WwURQZV48MY",
  "key13": "4x8A6f341Neq7u6wn1e82W69P3qg5B3tVzKLtQZJiFmHgKfvpQtiXXpkx9uyGJJyaBmhU7DH4z9bh4nu7hExd5zu",
  "key14": "5jgfSbcjLqvdriwaWEtFau8qTUdynsaYXDEAx3E5wAexQtx1JLEJ4efpMt4gg1Dci7uUid9NFfweUjbQZdhxYqNy",
  "key15": "4Nhhwyzvj9cA9FaNLoBdjKAcXks5B9wmjbwm34rSKUxFrLk4yigSyWkQmqeNF4HiDKjN4X9HcYzb8mgC1oVbtMkX",
  "key16": "29xdakpLmfJA9mpZxdtfDBc5ccN5FuEqizC4f4G5xojcu45uVncQBV4jVbh13iHJrSjuKFPpjQg1mBtaexMQCSqM",
  "key17": "5gSiLTKzBwBxBzCNrzYx3z9jebqTdYEattd6FXRg3jek9JZk1jtSo1oHp3txyMS57WuTuD3NXt4qZkD6VFmjVVe5",
  "key18": "2pVvDpCVLjk2f9yM1aSkby1LePQzvqBch5Mc3MrV1tAXgdyquB7oLe7EbayXyQ3AbJkhEhCUQkmZRu4ziFjTKfuw",
  "key19": "Leu7QQiACFSLXijudCuPkG3wHuP7hwz9VzEcsBGBqVPKTLmcXm5Tc1i9JjswCabWR6L9FUZr28ShUbcW9yEZP4p",
  "key20": "5SC8auviRtf15JCYGqJCsrZ1MAerFDNS9LQrERDh4mVGwXm6h1egEmNt87e1oEJCuQKtcg7Dp3uajorm69CyFFkj",
  "key21": "LrH7rLYRaFztmYS92bj3Ea7DRMRgE7qLgEs3PyMv3X35TsJwiHtDghjz4w5Pusue2FEamN8fU8kiM3Q7V2mK9CZ",
  "key22": "4bFk7qnddwHJtrPQywqLDz6EqfyghmYxn9W2dvL7w4H6Whit8kByD9JS8SvJmzuGVTksNfnunpUKiL6Z14V79TKs",
  "key23": "48i3rckP3AHAoFKjXe9CCRMvuDm33FzzSy4YX3QxZNVwX22VnQpwXprr1NCAHWJsE1W2aH1SQ1LAMThGeh1j1w87",
  "key24": "5c6UEuTpi46WGFrcif2M5aZVgjPDa3FBiSW5fsrYw4E5DkSRxo77czuDPFwqXyhvrX78MCzYXXqFqKeYoiaMg5cZ",
  "key25": "42M9MxJ3FAUTVjfNC3uj2s35qH3YWR1FfQJYLrExr1eZ59yqG1hh6eDguvJHfyeMax5ZqjFYjJqyUGQ1dXxmdEBP",
  "key26": "2H8DUd3nkDmTKVTxjSYZr62jZ7kX1DNGBiYUTWHhp7U6V89cVLCHk8G2gCmJg8azMaEc43Ar2cCPzQeEu5bgqB2d",
  "key27": "5Yti55zVJwF48U7FSefmH2Gb5UExmnP1BTmuGqJfuvdAk8ooBoZeJAzRvt6cFeEPFTuaoj7MQurZXkRZgvRDm5fC",
  "key28": "4eDAShHSVfmQG5g4aS49ViDnSN9pjkR19FK9aoDPz2WCr6wq2PRVG2jkMFQaxzHErpkZZ4dhmr4FuaPhskDmuctL"
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
