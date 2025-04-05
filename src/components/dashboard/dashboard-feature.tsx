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
    "3QNhNoMCoPWZmQaYX5SFEpX69mqSDcjHKb6qQ2jaNrRXHXfU6GiPQ3mToQqAswsCZGbTdkECJUSRK24xrenDCzR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E9jUcMiQwL6Lmq1EjCZKPEAJ48aRrG6o1LBHmi9W4TyqfWF6NasYyfGUQmUiCHihbXXqBjbk89mexqwd7RBnrHG",
  "key1": "61Z5oGgxt9tyLuTzaztmwJ9bVkjiEciDLAP8dedN9QmY7duQUtjLfVtkyuXhSCGmJwqn1JQCABUkHzK4qG9G3eSY",
  "key2": "27LPZkHhAZRes1U1u4m9xjjZa1mn92J7SMkPsJVGE6fBAsc6HDhNDb6LYZYTmSSyWGJoacvbNL9gFCvBotEG69VL",
  "key3": "5nLG1Nh7HvH9fnZKKzibtymb1XuyrwbnrFjrAgLjyE7L5vYEXL8e5P9AutdiPT26eZfh2jHWjYX14J6H364TFoBd",
  "key4": "AKjiiwTkPh7TWUJpJnm9ugQCboZX36EukgozhYPivUfCPGSugpZYZMAyBDkxadpXGxVJGayrUf6N4WTc6P4KR6v",
  "key5": "3XPktpb6GqTHtoepkVKLxPa7qKNgi82BhMrG7TwARQCFrQWci5uAjSXz555GQAnidShN4z2ZRPWsrDxYKATYNmtv",
  "key6": "5UvQPnRb3yRVQ6Lty7KTxVYkTzjRcGWCmdWQnEtZY9VKPbLY312sJquMEv4QXXrXv1HVRyNdkqPi7CkmAcACsY92",
  "key7": "4LXR1csBGMZEWYTw62H8J6wpq6ymQwaZjrh5McyRRTRmzBwj3x19121t5ZSZKujKceZmbBiSBkyUNkF7tSZopQRQ",
  "key8": "3nqQfHgdxqCcJUULoEAZC6dHvpomSw7zxqPMwbjmaQDVPWze5LPcQvGEYKZGnkLCWT5ovcB8XWRnpynPuCvkx3Eo",
  "key9": "5Dg11zZ4RCpNYbRKLUJC7nTZixxzA1zMfmBRowvPTfd1ztFLgcGHcP2BwyZeBZPUzQVoMWxyqffAABQ7mD9tXrVU",
  "key10": "4t5pzVifTDAc5dTSDmY1H8J23XM2pj3ivFcKWda4PpmZd2V9hvAoXan2dXh3YQzChitcjj7kF6BhX7g5fWKw6hAs",
  "key11": "3McosN3HHNAV9XXBg8YPXUJjvcMciDKtToVzD7DRgA758rAFLbuL9pBoArACxbcRSzdGY7NzQKU3DzxR9buRQenZ",
  "key12": "5NvNvcUrYXve9vhLVZseFCbs3SBkc7nJzExMzzo9abvB8z4Yue8AN9HzR3kAVRH16jNXwYPofb9d1T3KZqXn5Dqe",
  "key13": "4mR1hqVuqecXSM6JjxqemAdpKNzD92viL9bWJCRMxJF65uajXG7K7uxgqhm1QYLqBxzhQM5Ss91i5ByW2psF9xjp",
  "key14": "51cwm6CdYG2nfWhY2p5QC29Yz2AcpBsuWKC7qKNrgttyEiChA7bt5UPxsLeWtGi1NjMA7vdwAkvSh4KHYriUYhCU",
  "key15": "3QBusSEm72FZU44QagJzwjrRwX2tCbBuDA2Hj4HJZTgcisExb3fquHwt2WrZtGn9vACF8kxJSno7wMcx4su9csEq",
  "key16": "3Eqir6K8ucWbKWFjTqh2BqD9M7pp4DoHdnrirrhY3ALPfruFPYdESj93cwrUqBgWUUhaGy5gKeEzhq6SrZeupspE",
  "key17": "5oE2S8SWsP21g2y9a5LzwWKxC9suhDWqu1cUuUmGPZ52KCJA6ttdjxV5ZccyznYyqnAPxBsT7jkeJPuTFFWY7bAt",
  "key18": "2ooqdrnVwvssvfkZaKXSboAhyR2TkwmRwSWgjhDv6jbLFqbZXtu5RLVfTDxRSxt4h8dts7doNnYPa2h5kX71eaw1",
  "key19": "tQ5SFs6GgzYVUYF5mGghsaffJWnEAt7TZdBJ9xu6us5eAnwBEDbxc3HFWxuBkx4iDbYSYxWQdXca7XuX4im6qHN",
  "key20": "27yAeDniKEipQN24ChWd5KVUptW7iCHxPi8nBGdEjkea9JqKgDQxokwaMSq72YFa8wLdLqVh1bpiizkEou5oMspe",
  "key21": "4PTLkC4FkhQehL1cokB78KC27oTRBM59X8wEm6qUgwzwmhV4GmFxq3qUzc7p6ze7q6raNiPXDGG6yaUc5jGt3r54",
  "key22": "5DvTnJ6Nh1K879DidrAjgivG8D3L8EtSn1csWreyA9nhbonwW9ZjoMVx7GRJi3E5tzsCJ6RVswYXCv6ToE4RNFLZ",
  "key23": "4yRuSnyJPoj3T3r3NbBTjEmXUFEkkmLzyZQ4ufy3vJhggeLP8bCoDt9oYDsu14WcZ8GnuWFMEoxZ4SpSZVcngj7u",
  "key24": "JQnDLsSezF1akTj9jk57Bc9Dq9AaWBHNPpF1SqXdo9wk3H4W8AArNMSRgstnbKMhVGVsD6jCnDoGe1eDoNdPv6s",
  "key25": "2RQCwCbDM9vhFWcEJu5NKqiwUEtsqJZQNXmsJYs7iB2jAxnsRHcxmTHuughkjJQkDPXUg37qkyFCaCbdrogdp9Cb",
  "key26": "31BMGyqFshtn3W44okNW7gGk59sx5nDJpVdRJk5zuBXH4oNzKuVmnyirTNwMLuP1bWPWsumCb1ojxc1QMkQ7KWmZ",
  "key27": "2KWGKkScGzptM2abukHizpWvCVDSvX9q2MjnpjznidpExwJ5TTbwSBzpC33Poswu3FXrdfhpYEEMSnQE7q1eHtqH",
  "key28": "2DTSDm8jLSPLqJ37aTaDSQT1ChdnDLGPCqCD9zTa33dtSPkiXogxwiS7LQvrGZBHcurz7GZzYY7Kny8xbi3g3qeo",
  "key29": "BJcgvvxzh12Fgp389coEE5Wn1jZh2SJFS8Q4FEiR9PJTNGU334dGanGvw5Ks6tNeNd33rqVC3Kt8ujfhMffzzdY",
  "key30": "2vaaB4kFjs1ETtUrvKhvwAm319gMSssbrkwTzPrAYgpTiSnrGWK5XNWY5LtQkvzjw8ZdWZvnc1sXiCiNZABPXpwh",
  "key31": "5rvwbQnE2ktuhM8WjrzpDKK3pJUu61iMKekzq9yH4d7r4j63d9jneegBB1Hr4WpVCFr2D2Csua7ipFrRXZ77K9k9",
  "key32": "35t4k7eRWf3tNNusic2zjRZt7sMZtU146Qg6xdyTLuhSgcAiJk2GKMDpwxqrT2EjFcJwFSS5rVV7tnahtzEUzyxZ",
  "key33": "X9VKUfS41Fa92uK5ZzaSvejB7fxmMzHK9V7WaTT9B6MT5rLLYH29LLYQSqKaHu1zCXmdXEKtexyX2efhPdVpbkq",
  "key34": "1Nv6TxcR2kxBqc9pTpYEr2deumduHXAZACXQ4m3q6CG26FHEmAgjSgqCPvFdq8s6Hj3e5c5FZ5jMPgF2uvi8teb",
  "key35": "432YahkdtE5HznUDyzXqE5CXRVguXrnFHULD11fctHtR71DCFtJhQdWMauXpovWxx5RgCohiwvCtqQBhMaq95AT2",
  "key36": "38dsMz7pJWjoeW9hSwXVLpHZ6b3gLCeEgq3PBMKUDL3wX4CXiBsmoCpzLMVLXBABKyqEWEBbCZYuzMUM1ftZWJjJ",
  "key37": "5ft4QeLZrum8dmczavbsS9c4VY5HsKjjm2szNdXDzUBxYkEf3AurzwSYyAvDANSpfoDzKM72bcMq9gXM3qwYhmf5",
  "key38": "4YRUGqVp7JeViZsi6ffpn9dZBBGZXaNYPubRgLdfikhQSzzYUVkNHn3hXUaYnGcvx4g7Sn3Vdo7QDJK9UixfU3Q2",
  "key39": "5Sie4jGdbHnG5rjxgezmmT8LGkc9p9MLUJuHNHRexNwp6fznYN51FiuYv88YC7mBAktsvyZo92XMckHCEgvxnoQS",
  "key40": "5NLZhXc6iwqngvY9nWPNMGiGHuesjryM8oiHGaQ5qc8WPA3f7R4ZSsapcAN172UxBodDVJp3QbtgKjQvHnsQC4Mx",
  "key41": "4X8Cs18gFhAneX3RNhFNS1AQmps8ydyJmYt4sAEaBDFGqRBHErhnNof3rYYvQxNsQdKoEkmgRk83JjQ53nXBXh3P",
  "key42": "4ucYWqXFLJUdZ8FexHC3vKuAFnhzwMUT7C75cdWSmBjF8raonS6RfC2JmZST5paWMQwstA5C9kUHPcVi3Bi5DcTs",
  "key43": "4Am5ffL3SZdBorzq99vyRcQ922GRsF44mHAc7wFLsMcWMUu2cxEVks8uNYuFM6K68LkT8jotvi63JjviQ3HXiFJa",
  "key44": "5Eh46udTocnBWxW3jMcvbNFYFwN6JgmwUiBFEfwkPaM8W6cJpyQ1AX6S27GN8VaRh1fDbbRRHVreP6sDkfYReXxm",
  "key45": "3uVmYfLhFcaLBsQidwURPUtK2kcfXUUpDo8yWGy95JnB3NU1D1N856iiPpHKK49rw6rvpV3p9CwMFSGX5pF3pTMg",
  "key46": "61uBiBNeVpruQnqJ2bkkFPQAy1kKBRBgLPoiZxC9iTqBJQVaS4tTGLJwZWtM6fu9SWiv9kHoYWC7rUAkcD7qH7qr"
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
