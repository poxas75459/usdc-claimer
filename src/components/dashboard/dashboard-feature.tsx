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
    "2jYedeVfRKL2DZ8JhMipvPqStBbMMWN7pmLmaqNJRW1e3wn61frNbo2YR4i6eYd1CtBRvQQLjRmcpHeKsUtJCEdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EjaRA4vqjjAoHoGuUKLmFNJmHSjcFSfRT38orfJXHdxGHQJvm1N8mEuJcDc4PiqWRPLQCNLJ1Aqz9s6qrQBpbFg",
  "key1": "5ZyUSWWBjuBwKp9yTt2LavtGMRepgEAuKBtLBDRKcvpynXsjMM5tTiLr6sQzsZYdvRbZFy2dnieYFz794ySDQVcB",
  "key2": "4de2mCuEZHeEh7Gcje19SskWFUNejs9T3Q4GsmUfGZ9BBGH5TXjJmWvZYcQNF6nuw1KBJahMsS6ij5E3DTr38EMR",
  "key3": "5UTnPj9L8XXBXaN3p4cZv1nZ84DePA792G31KfFGGFuRdudjH4jeAm8Gyx58w6pwK2zGH8B8UCcmdGNjh2nqcTXt",
  "key4": "5EqFjtmV61Q4KyWTGJGPH56QcFwhwSovQnvPFaUvbvUGfqAyiKmeJ6BLosuvvvvgNhrKRSFWGxgmvt5i6mjaor37",
  "key5": "2cL2LbmmG8C9pdJ7Y1xD6fVLWCYsou97XSKYjDW11343yXvTaRatqpTTtmAc9LSiPDR1beVEsc2xbdDjtr7MqEbj",
  "key6": "5jQtLM7UzTy1iy3sh2khq5dDYzzggwUpe86FYW5Ce7k33vQkwQzhgbM2WCk3ZDbb8FQw5YdxDZ8b9ZYfBSX7nsnu",
  "key7": "5ZrmXvPufjVHFuF7LcNQ4rbUCbJFN6c28peKGgL8KqM6MDZLnBSSB21LDfrWRGUkAAqq1zsgtYateGroqtCHvCSU",
  "key8": "5cYXAmz8zWLGpznfZSUJHNsWUUVmFdMN8p9ckQvpbUAhPf56HUYV47FJJZ41gJZ6UYD2MeTtSu37hKPx4LyyJeHo",
  "key9": "3SKRujd29bAFgjJkdNrE4RHDa2CsHJBKaUyCLGKmZb3iT5D62yk31MHnaggFQyTJpFjKbn8HooL43pCpSG3jMdN9",
  "key10": "4Q4JxxF8PonuuncPrgHPt7ZD89ZYFrxheZpjaKq2qbCXkwhjDvLqBQ4HKjCDmcTPgVwWnL6GaEYXFfQFHwbUek23",
  "key11": "23iZL2jXmMypBhU2a6SbfoRwg6NbmqotsC2fcxQuuTG1Cu8fZrxXEkDTzyopdtczY1joJGVLeLorn5YJNVzyjAJq",
  "key12": "2mhVCuY3KyS5Mj4wqdEq4WRyP3R8Kw6PsTDdF6wii8t4o9L7KF6bwM8tGdrT7B5mZgRmnkJZVsXSKFB6BnKnYGGB",
  "key13": "5qwsGJrY99WUQbuZsnVf3z5gb2ciixUovr9dYv1p4LsEtGkYQkeqQmB4wxDfJqPU9T1UsdmkRtRAP6CkAiaRKUSa",
  "key14": "4kq6jMhzUgVEbXFLskBdUwTSFR1iBmr5soTaq33CDZqbAVc2qHv7eitNuWHWSpeeKXViCLQrKYu6dWiDTakdjq67",
  "key15": "5TDgvjpsrS8KGvmfx9993iCvjZs9sMYx3R1aYyKrPGa3yPQWrNS4Ld97DFh65HCT3wsKJRCGybdwde14YgjcNHe7",
  "key16": "4wqFG6BT1QjgZShVnHwQ9TCXha8kKdzE4HZWYwd52RbGrvJkPcdyWSgNN16q713ByzTZFAFVAbLjvtqwZMefmYVo",
  "key17": "24o29rBgdKVWG3AW7F5HZXyr6unZKVNxvDT6HiPLs54T4QGEF5B6qyAGqDkHYa4h5xLaQ7KLU1caPkxPw9F7gtmf",
  "key18": "5bc6mX8rYdP1uRFfecoPSBstxNnsxV2o15sRmNrBgdhKPLbdguM1eQQzW7XJMB3SDbKywi6BfpBgEBYuSkSCNgQW",
  "key19": "3Xfzv9vCt91SRBM2bfQXSm1yGThmuEP2mHck5End9odCWTitLf2PZoCvx75ZVQ267NUdm6RJ6LxobRNsAYCFxS7u",
  "key20": "HW4aEJ1wmaVANFXq5GnWbSEviTaLAU1gVU5vBFsTG7WpovWfmDzZsWXMeHMvmBK42khxWTiziLggntH9rpKdujk",
  "key21": "5LSQCvzDZDGwNzH7vEpECuTf9859yED4eveVSSoDBMbXB5PQLQrXt5wPjd3YNXuPDt2hBfMwrJkCzJJK8Xxb6ALv",
  "key22": "3ohqfW4Pvo9cRhPvqbEe47hiwvGqwuUxWUGmAuqk6dVHpLwZdRe5u19XaGZnc1yRUpK8az3cVmNwvXzdH7undVEt",
  "key23": "Y6ANNNTT8DKHFnn5571qEjMbDCFh2rLd4JNeNeabujPFGZC6JUSNUtDsn8i8e7ZZwKm6NeQMf4DnuC4nFrt22qf",
  "key24": "4KRZNyaXiFBL6QbW78gn8juZXwHKS4vqtBhAv1EnafKsYAZgKxvWSRYz7NYH51JCN13c5FnkvnF97dALC74ygCrZ",
  "key25": "5GJyqQXHJyaDHcoeqYP4wZnMpM4WBeGvxhdMbqhmZEycSafExt83FFXruxbmjUcekkJrqcc7vqnHUH9F2M57UKzS",
  "key26": "3m3qMi15Lp2tNqzBSV4riKf8zXeaDH8Ugh1GaqQ1R48EcmV5XjnV1e8GLJgAui6DcD3Uvp48ZRzzJefEJY2quAGW",
  "key27": "3Hv16dELC4QEX3afZ1wLHUYs9CgEoWRDtrA5ojbVYsVnEcg2X99V5NzeCTrfhRoVbXpeD4V3Jg1bS9p8TcezmPiS",
  "key28": "5MDTgjeTEJ6yZJG8Hwgub9mYUrgLJSadH8TATaLfMD1qS19jvJECwxnsJqGQPbWwE9fZdEWS9Lfse2BkJE3qBS4D",
  "key29": "5KN1zcw2EjUSPDeYBC4povkCyZkoFTmaP51wi4gS17ZrinZJ95t4f2KsYwUMoov172RXGFMfirPk6LefQkPPqtJ3",
  "key30": "tHcZh2xSJJtAbW1yo4kP4dzsbqmr9bD8J1XdQaVBrokKJgXK2cL4E3m9n5yVVgGB77CAvXvNhodSuxs4zvAAexX",
  "key31": "2rwvK4KaREjSw7ARhgxaBLjBRgo8Q6Br4cCnGk3wMkDz9x4ePF5pwTiD2d5aDV56MnphQFK442k9MeY7sx5UDrMQ",
  "key32": "3wEoLrqCgu7TYLVXmS1t7DdJiFWP9xGE2YoVsQmSVWXfUbXSeEo21qZKXpuzPzk7vfZ6R4TeS16PdgDnZoAv7523",
  "key33": "4tPtR4vdaNLQidg5CWimMwjeEkwFjRqr9gZqkN9jZjC8cvaFbW1qzDW45NDFaNyDagjnt5WB4X36bdPCdRye76Tp",
  "key34": "f9a3pPjNhTwuoCEdK7TaoVQLdTmjgAcARMVq2BhUfXfSsfToA84nJ3qhV3LQZzJz43V8PjA2kCbxdxhLSyaHKTK",
  "key35": "4dEvuVoAbpZMp9Ey5Z1ZqqmNeZMeW2Q6yHVGLr88yWLFRu9Ac3CqBzfeYWN8NwD5NSCkpwtsStQ9XNAAM6W6DBLL",
  "key36": "2vFoUyJXvSNCWFJJ6ekHnt6yzxtodw7neua2CMkAViTXDCos6WURWDj2KWLtUzQ39wPjGmposTyuSqUt3fAncQBY",
  "key37": "k57vhqN7SqKrgX8HVqFtWatuZCsVMNwtmQiPoWsgXHmuoFXb2FZaT8JLFXDz6VmEovbdHLdggfYGQadZ8Mujaqf",
  "key38": "2RuQEytykgddqnwkQGWtevmqZi4EUexCor7m8pNStLuvPrqDhgMwX5FeHWAosn3feWfsdcfngBgrp4QKLXJNoicN",
  "key39": "3nQDWgEVu7ekFmFKrbVcg79AqvJN272JJjuqvXA2exQrXmHz6CnS87QFgxGbR17CETBPytVupwPz8dkUSfzBPzjC",
  "key40": "5VAXn5rUKDqeHX6niqiyr6WwaTdTcyLR6k9D45ubmEQPbJUcpbo6UkCTBFK6iS91UJxQDAhUy3w6b1B5efjhco7P",
  "key41": "3QgcUeva5oZrUzSPm2g4GzDv3JDD1AJPdUhapxAHpFeSDmDdsB6rxuKiQi2ELAQvwodSuJEojPfaq1MKsdMxgpZp",
  "key42": "4zESmrZL9RdQzfG3afLdxgqKPsgHx4JqJYDBiWhiSHQK3VeFzmaPCV29taSuHgnrJCN8bF6K3bp6LEStoqHArgPk",
  "key43": "2ZTPt34DvozhGJRu7RhgSTDyULZEkTMpUnXgFccrdwMs4jNR4nUGLv1CrSy1oZvJ1dtTA4gXC86yFKKmffNk3QKr",
  "key44": "5WUu5z9qpPSCF3mCkXNMrQLFVa3rmWQHuSjBox4fogE2R6gBpfndFmZUbDNVfP2FmQTfFmzoLpZzSmcaHkhYH6xt",
  "key45": "2wYCRZ96jfJXxrFJeaSQ1yBcC4eCVURzXDx4bKWEcX8dsUGkwERv3APgNdQK76f9HSbdXTzgvJhkK7caLWejDQJ9",
  "key46": "5Pz4BwRPgXABcutwoXcz7mwJUrJVwg9uCZ3xEEFtKG3NeJWGxKt29Eqc6ae9z7ikitALLYsfEfGiZPxCCpFUFnfS",
  "key47": "3kctB5y6PD9NuS4zGNueb21GpbEPeUBvWxMBYxJokoMXYMAGb33u8nsZsZzazrKpDYbn6wr6YiRpHwBGidh3JsgY"
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
