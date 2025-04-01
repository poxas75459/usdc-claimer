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
    "5Z1xo8j52X4nCaueD6t5AFUKu6kzyARiSWEW79CF9RUqmx3SFAFD3Xk6eRtwRorAaNFzoWpGQxqGZJLcNyarsRMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xirrTLd1VLihrNwUY7TNCzTBH2Xw41mHy49wav9kFnGFskAt9YDVR6id1SRW6TFVibiEWGmUSwCncYYTVzWmzeS",
  "key1": "2Q3WbRXpP9ZdGAjQAAoRx2Z8ZjhGt677e7sMcHvwz8XkL4QqkDmPZYRt4xXJp5GYa5BRwNygvjQ4J9MTitSRrKuW",
  "key2": "3Hjaso17yLwyCTMAhQxqkAHfNVWbbVZ4cXeux8jcwBxMrDz5QP465XXyo51KwpRiDj4yizr5MZL92KdqJa5uPPH3",
  "key3": "3G1SsRFi4LfPDggDBm63WhctR1jKQJMyWXRt9yFdKD2J1dmDxHBf93y28AWeQzAmnsd8xdzTsrEAct17pGPRDevm",
  "key4": "5J3s7e4w9YGfzCj1GKetWNbqAcxsxE5bSJR7fCscN26Pqaz4HQmjzm7wEsR2Wuu4bEALjoZkEbjixT5qirhLa8Qw",
  "key5": "4eHvENVLjpLpa4tmy27NUUKsGc7GA8Buho2gYPHQxbny5vtaXffDveQ5u2wAFXa8SmCPA4QDhb64Y6gFjykhSwKk",
  "key6": "3x9zgdb1idBAvgSJEtU6rU8jjpzhE7SJhGMwdRmSqfiqoS6b4psLZF8MoYe3DWk8Dyrf6TLJVmmkcatoGnvwFZ26",
  "key7": "3fj4M65PF79EmaDjweYSpeUYH9KZHpFRtiXYmC5PbA8x4TkbjHEQAPGhdoaa7iQWrcYXMgVkCEgHBBcNQq1MfZkB",
  "key8": "57r5Vr3oRed2N8g9jwkUhkajxrJwD2JavRKAcMcBr6QZ2aoUr6Nz75ern7BfuybiMakoXwgPppYCSLVdfbsNsxKb",
  "key9": "34i9SWqr7ob8xBFXdK8CYKSfdWbekrZhTV2vQrRs46dHhCzU3nkQLxMPRJEhGeNTe1FovbAD245ChoG2o15snuPC",
  "key10": "4MRavDcvPydjZLDKhPEkYAyZpy5qm4CcNxtdeyfp14JPzufkBGxgXeYyFAzafuKauaPP4UMLGrPRnJnz3Eb5UKRQ",
  "key11": "4LQQLuhZgaA5dNJH5oWdMzK6Lk1drf2LFAyQhku441raumZneRQYrtYRCBGLymUY3zuJ6XqY8hkf47VtAyKvAW8N",
  "key12": "T2WhtRzMkrzSmrYBRKLiVxxFH3qrXrNuCocMzpii4SZTBa9Xsz1nTEqwWKDDxNB5Lhc7PDWRFmem5NJ7ZBGbgPb",
  "key13": "ddzzW9R9GWsHsf8PCcLB2Fn8M4aTAf2s4VXkU7KFxDPn12byVhdvqcZ2TysMLTzsuGz5AF2TMmZEuds8tG59v4S",
  "key14": "8zErfqKy86Nw99ohV6nKzntyBvHiFZxXtU6wNRPjxhoxeVkVUNRQbr1QqzZaK4Jr7Z84iManp4KshPKpX4zupaE",
  "key15": "3kCecLEJdxoqhg8xEq1y52PLBWgjL9XfCAqeJfmqYHJD4EPgchUvwRjTZ68b5NfWt66jiv3E8m7oi5ekH7AXQkFY",
  "key16": "Jd2rxYLHp6H9pekFaf72XwVDR2y3F4F3H83fWz9CFYJiRD7Utc1FS77GQxtWLYPvLuPhL2Q46hcxEFG2kS9VdZe",
  "key17": "5rESCf5fGfgHztL74woKaEFBqejQuRHgDdGvNhjkLTpvFXp8FJnR3W9hcwSDFX8HN17x4Lk9TpUPVrcoiLz6e6K2",
  "key18": "3nTqEmpW97SVWkEg3zumGgsQN9EXKG9CUJVBWKTMFZBHHcYdXtQxKgznfcfayee3nE8tNcX8AmTFCmGohteummq5",
  "key19": "N7D7gcsVzC8j2teZjxGrihTHEjaQ6X49LnmBvf72m1P6xZM5pYuyYu9xQGQs38yu1fwxqSWUaJhoB814pzcJbXq",
  "key20": "3yv8EsvBvYSea88J7qjA2xhCRs8cMgYY7a5JV8Nt52oKAz98vmCvhn7JFUgm8sVnQkppVPgmFWjaS64fxQa1RZo3",
  "key21": "T5SA2WwFcnkiZeT41aS7CNCq6YYQvWQd4oLhJTysME1r2CizPtdyttBQMGxC4XL4weku7zSNB8ah7BwCzBbhokV",
  "key22": "2rsH1QaGfARE6KnN4mFqfuxYeUeUApZeSfJ2nbATFSZ8wxvqPH3S1CtK7JfCimLQhG3YxPfu9sYERXBfBhVTpYg6",
  "key23": "23yCpS4XATN932Nzdh92Nt4P2tcNpd4tZ3eyMkCTA6AXV1vLrYeN6GNhBsEvzUekb9dspA5ctkQw7CLKb5bAE54m",
  "key24": "TmgC7XBUQPVTvN2wFLGwYYoB77NFd3cp1h4d2t6KT1PXYSUUCLa1dg5MGLN5iR2aUAePDcUq13AirV2SmHz6EmE",
  "key25": "u7J8GVYuFJApyT9nBKzZExjJZWdZckD7PSsQNeEuXW9ExLtLv5sNd1YmnRhm9ZbJLCZ9uJnwDB7TWuebjyr7LCt",
  "key26": "3pZxJcv12qSBqrZkQKPnRsoehNyw52dHA23AQMw7Sgo1upKenrx7BowL7m2wPTDiB8vb2ogHSP4KjjoFNjVV2nRH",
  "key27": "5LrUYUf8gC6UoWHiBJUKc42c4vqC1zEhsXRzJZjkKYXMiHnPPym39Vb9PveXk23u9min1bH2EhLPNAoPLccfg3S7",
  "key28": "ZeRXaeXSU7rEcTDkgMBPUcZjQPnnpCpYAdUw8tdCxWwpZa6g8jestt5EU8NQBM73t4BoHphssNQXYkSCsW6eW2x",
  "key29": "4oqNm5oiJqBkG5HXsywKEBCACqyA72gGZ8jBnf7gcSMmZ7gLnRAuPa5eNkjQyECwtTqNknuoS2RmVJDJTkDvA7DK",
  "key30": "3bAf9JJoUoQuYD2FR9BELJvjc4s8Lx6cYJhi4JMp4pa4mwUqywRZif1jDYLuSRyUVq7hg9JYmS6L8XSbAHJSH6vJ",
  "key31": "5uMuLHt6kmYW6sqpgXDV85gddgE9xBEDQXDLztd1rJCJLeEDmkx3PkVn66wP92M3Fah9FEW7JwrtEY2zBgDHEvmY",
  "key32": "2hjNW62PpUVszQL1qdGFQ7EDNaK6KEHGz4DKnzmXyZWtTvdhzdxwy4KSKjGB3MCaGUdFhiqesYKEfesXp4x8Vk6",
  "key33": "5bvYStdQ1B6CJqWxzPsjFDxR49qxRsdbZE4paAoMkPnzdUhcRzUTUwPRbtqMJ3p4HuRrimt6Cb1UJ2xjLi51JM1j",
  "key34": "3McZRxJjML7j1zyCAsmn1rpRctb1A31mP1afsNXx5zqurVHnZ1nsUdRzsTqGpkYQcqckYPb8dY6Xs6K1B1HR4uQf",
  "key35": "5WJ5SGjK8mtxMKb9nHtpqizjBys5M3ZwVfQcymJsrMcYUueuSxJ7sdwym2duGu2iV3Vt2fUcq5FDzVx7Yjmfh5x3",
  "key36": "5rqmAFjmuZrMPdDD94n4zkr8pw5CSBDTsKBw6gDSjjMFr5gdsBXW6hR6QQKcWkZQ8R7XVBY8jnkTk9QLDXZf5Zh1",
  "key37": "RbC1YQK7s26HEcmLtLz8HFN2mvdS1x5XuUrTE68cUtSBPw8YAQa52P5KAPXg1KgqQ61cHKqfYCzcAvJnGEwZA8K",
  "key38": "AFaYddZDfAccdn9AEMsiXrED5n6hMCSf4QwpBZT6vJt34Dqf8MYF6WdkEHVeqhq7z4pSkUSz74DCWCEggSdx1c9",
  "key39": "39izmnd51S7tp9DoXK2Uav5hxkKVYrFym11TRMtUbjzfDWfCLWg4qMyVQc6RDEgu54WojsEi76uSGjJ1udewDQ3g",
  "key40": "5qizHfbLJwaZ8BXh6fq9ZZAFqrsEyKeevMNe69nVt4zie5e8Fh9YBZyEUJynuTpQVbB2ABkwCFuDLjgqHftcSLgw",
  "key41": "2QeUEbBaDbCXYhBjP9QH43JNCkPZrVby6NQyKxqayuK82KJRVdfdxvZeZM6TN3Y2JZK8Xm2QxdutLPbPjXVT9iK9",
  "key42": "4cLPP9WNG3wCNnrCRz2ba75M1VpVXwpuWBbJzr5bAohiCCKsxaSMFHhccsRDV6UKmhfarrKVirfk9gY3vMN1XX1D",
  "key43": "2P8uybrat6HkCshNaiA69pqZUYjk1bsX1AV4dvKfqjBX4RNXtzZeM9ScsvJJkboZ1eW5C16ZCTs6odpQj4mn4Nwc",
  "key44": "5BGN2MrrevkvcAVYgTgEcP6rHax7GNEigQHkjr5fmcQx46MsYi33XGaNf5VXVwZsckvLm15HEQ2hUZweaQxPkqTm",
  "key45": "395L3ePi2gC9BuUvDzPDiaz5nTiox2JZmfN6GHyXBwNJVuD5BZEFstQ2QXn9SPRzRar3psXFxcu93WhAxcYaK9rT"
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
