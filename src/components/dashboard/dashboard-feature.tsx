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
    "3852wXNcMjotVqWwcodT9ZD9VAFBFcbXgSvtMFbuuKYdT4qamup3y8siRnGsQdznXWGqPs9y9Kjn9f1DzXgL2Bg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WExsAku6U2aA1iZJvvjWYVWe2TxDVQdvXoqwj9N852jDsgkebg6zuRse4SpuqvjrxLAMGmJx6A2WMDESrrj1WhB",
  "key1": "5H3o4NuwCfEhTxEuceLYMN1j9qtKGUJDDJzWdDEXkfK6mLbf1rW6Ri6MSvWNeyfoMLxUA4k5VUD7XCfzd8ZbHCuT",
  "key2": "2fsdt2qy32h2M3y8u5oiu8kPcJbvUNh2LsEhSeNGnrdTDNhwSTpFdGaQdsAheQqZF14bkS5ED1KfYzZmPdPrLqRd",
  "key3": "5dDqmDDseeDD9EYVbZSjNj4d1e5F2Wgb5eMYrwteXA99rjPHZgMDUUtBb9dM4sSErjeQGshco7zRXzHkoiBN6NJv",
  "key4": "2xZSENQjNpkZFqepBmDj1XJaEyV2mRVBH255fFDgYZhyUgGRMpS8cEGQBmyJZnDWU1GE68VZkSXYNeyQaGdAEQf3",
  "key5": "2XWehoW5px1MmzF56H7rqLzcSmUgUZQmqRAwsYVRWKgEGaX7uSmX35FRqDMeNA3XX1bZgLKRuK7h1xz399eWUdYk",
  "key6": "AFDGtnQA7fL8fGCiTZwNVkuf7ycryqePpaVtz6T2tWbUmzv17TeinhsdGAeJCw77d8TG1AxCaosZb1zZvHCxavN",
  "key7": "31pAb2Lip3E5bdo2sLgYCiHNWwCwu9Pn6S1VZBbspWPiN2gMjNahRSwfMs4KLhzh1ZvfSm72GiC4WepmSsJPv95k",
  "key8": "4sRqp2MT9EqK4uh78vFUf12kfY7DKbVWzNikHqMGsx6nEsjmvBBnd9KJANutD2PpMB6Qbt5DwbsNXgbyaM31gFAv",
  "key9": "iZYm19oCiLYqJfq1EPr3SSxtNjTRJSG4yPBC2dvhqkBNDHuH5B5ksdYvoVUp9TBGzQegGekEyWg8ijQeVDPzhmk",
  "key10": "4wPfnMjRcPws19PH8nKAi61a9TMhBRocC4VAJvcv9Sp8B9MVV6HYXgSENMWA756qD8HLRQEBPGem24LFdz5P3zV9",
  "key11": "5dkJS4ZYke8Ek6tb8B5QrC5Gfc45cbpRVJp3s5zePaCH6vpTSMCicAufcUn88baQFpTeATC7hJboSr4FJayTMRxQ",
  "key12": "3PMQfddmN465CqYuoDd65oZmCN1z9dN4moL46NZ98Wg1TxqyCguNB1QUTZ5M1r4EpwuxMEYxSod719aeJoQopYxJ",
  "key13": "4poG7xgttcabjBUFiDDmZdkxnE8QsGYrVkabGs1orHDntAcYjQLdu7rNAjSofnihUgestmafEGSR2h1RLZcqZP3n",
  "key14": "2KTzw3DVcaNzLhi9BCwULxQu4K5duWbQF9ZoA6SsKuRzKdVM2XPE7hzN8aP8K9CG65SgG9nXQPKQrPvp5e91C6Qt",
  "key15": "5u61gz2A9VSQrbPYyrN2mCpK5x6eGPwecV4L8EjYjofv87jzfKebgUWGxKawiqwScRKonG9V6AgbzVuGU915gPoH",
  "key16": "5ApFYtM57igiwfs5iLtSqJ8YyVgZqpz67yK15Gx2Rj8xZVLDPtbYFjzqYA8Wt8HTxi6mkfci5sYaQ1HD5hhMfq1u",
  "key17": "3NB3rBgA7VqEXrhmTAR1dKiH5Xq9MJ6tgpShgf3ZitjXfpnjTmjcvxsJqRk7W3opurppm8Y9yTLEhfhBuBuzLnvE",
  "key18": "27KxoxnGPuYmFYJEsu3kFxLxzUaFHjfGKA6wLmBbu4NCFK1fkDABu6TQtUxVBCU4isM5iynQDUmXx7yEJ1F2gwud",
  "key19": "tRmR5MwZbLkG6u4AmXNCRqNAms6wbE5e6B6FegZ4UDurzzG4VJmLpcAGk8p9abkuLBJmvggTf3jtsg29TqGkgSt",
  "key20": "2uWet9eoGnrp83H5M6WyP77x5zh8Zd7Vbi3sTbM7n7xF7iAbzAxC4ETMX7XLFHCdqcauqEwPta3YT66eaTSMT7w2",
  "key21": "4mf6EYhcmdx3sohWTRNzmdRKeXj9DPeizKVgrfmM4gak6G8qBtDLPqugftrLJ4fNpUFATi5ypwCts6pjGKwC45jJ",
  "key22": "MFATYBKsNJM5Xt5w6WJFiDQGNUH8tCEPNtSQJSqsyviCS5BxzauptQTrh75Qe5WCZ2fcnM1VUuULocqwKqKyoat",
  "key23": "37MwgNmKBLVKkehTdqPTY4jcywzX5k3jY66W4p3r5YSH88onEw1BEsJJ8tsvrk8M1JYzTZAAUgR3pzN4GjQabYio",
  "key24": "5NTYX8KCNvZ8zgE6Jz9MmwUXwofcMmnkcjEybcNHYLNs2JZQ9M1wN2vVLuhcRii6uti7b4RPKQMqFtHHQrFGfoJN",
  "key25": "41R3BfsEhdo2Db4dioo6nyy6m4ig2RT22XZnfi4TmdyXVJgcGXZjGsgJmwVtWpWawutDsUBrhAsJFpk85DJuPRBa",
  "key26": "4XCAdJ6fFgqroorJJuMeubCeugRomBiTPECjkMPchKdjUE4Hvx3eFoD3d4wSDeokvzNuLJRvjmQXS1L28tevEbMG",
  "key27": "2ZB9bZmbUHXjEzKQxKARegfJQdDsDMGbLqLVSqouiovSMQVa3ymzJNzybnZShMgFXC2fUKYQDz9ZPcVzQbfVLEZd",
  "key28": "24hVNxtKA7xXhW9rkEQ6dKnRZSzk3hoZMrTpdPkcAwzEAntf6GayHwnqnxVf8auVeAM5TdkZpiGAUnTyX6mYFcpM",
  "key29": "gG5mCHcrccv22edHEJJzCrFmxt5mqW8XkWYBztRhqhgy5pxxakCxAymaQBGVaLjixUGt74cVEL7qt2z5vCukyeT"
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
