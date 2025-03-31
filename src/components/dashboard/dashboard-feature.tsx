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
    "5MA1zoMo6XACJnqkqRT6rh4Az96Uk6nMkjWrNs2fLsmLPuSub2d6X1p8CdArDnqAJdBarFhEtUocBo9HwgVonv5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31hF8Q6NgSJi2Kvq3PPqhdye9ChsRLscPzme8bXWCYSiQ6X5YeuFru4atuAHDj6NRJvgRGrYsW8JtEMjSkCtEzEk",
  "key1": "23UB8kqzVd956BYrXzMw2JA7pRTZWNU5rCREQSJsAvo1KwWTick1tBbM4UVBhENXaZBdGCaMYTaC6ZoQvdbntniE",
  "key2": "2ax37YF3dpXv5UyNvamvvA5DiX3vPkhSYwc9qNZq2BRAYbf1rgs1e7pna5dwnmFGYwromoB94FGxsjTYrqPDfg34",
  "key3": "XZaR97oZ9hKFCyWhLh1E639tMAJNYZDRYJFSTtCKiDG8Kj5Qgtd5SBmrezRL7qUWfzxTWDixkpkgTxZy9Cyj5oZ",
  "key4": "qupJwUX5UkYqrpbV5EZeL5AwyJHNhog5m6RxG2E844yTCjZsGjr7unqPE4Y1hvNgrqMTvDAWWNUmKRigioqdsmG",
  "key5": "23TaCAhKgPyNqbPKkLCHqehpCF73PmHm5McDyLZpVMPdQ9wESzNMeU85TmpxgJgzJfzS28U11PiFreVhaJiULd5P",
  "key6": "59vsCVmZZniF258g8D8mbQ4L3kYvvzvU8eeatibW53Nuf25yvVnsesoRBCWVZySPDHrKvkKwH9RVidQtMKE6oVbY",
  "key7": "2T3PukoHAUT9hEfCAjGjKeVXRd5WswFHKToBQDEcYCmievSfSgnSRLX7WugKCr2fQPn45o1NWS4Vr1qVUFZxPbFz",
  "key8": "5j47juA8DwuqAh3KoEgxRbtkhQQKswDk46xrPgsg2319KnCnv6izURrC6kSThX96q5erhBKLydnJjjT3PKLcFbep",
  "key9": "4N1ujUrd18vVJm5jVyUnNWqJ4NwMKmxsmQDR2vxHsoP66bk3XYx9HG3J7swsFiuHCNwwmUCCJkm2NjQdNSXqxkrr",
  "key10": "2423qXteYxmcw4BTX22W1FZpfUQNHJwTrWHczJyTjPrUcc1e3WpHiXZbbsKhZ7xxzR2HGbuReS55yHhpHqrRDLrA",
  "key11": "5m5T1jxoJyGqhGE96A8tchnWrJDuC54te3vh5yQJ6xD65QyCvqm3WbuAoNksvbzRCAffqYCCQD4kUMXkAAqBKWBx",
  "key12": "4itE68pjQByb77cuwCFWMnPWVeNtn2M4dDRmJSJFTPzAAenQ43fkAtvx43Hti4hgGgxky4jXXd5a6kDaHxfdyWdQ",
  "key13": "GoAF3sMdrzbLH57ScWHmxDxbzKbV6xLM6st693r71gHTza44wweRfaTf2KASyGn4QPgKoQhnHaqYKdkPU9EVE6F",
  "key14": "2S8UBHBxatqqdaPcncNctHAzFWDxDo6n5sfHz8qvS27MKwBTNvNXwBrbu7LmV8HkLTLNyjJ4zHc5R6LxwJBEa2iv",
  "key15": "W6y2RmGc8aqqMy33mjq5CtDQy5npjXHGqrdBjM9ipG8t2WNR5yiBakU3kPoW3eMgx3Z1vzaophEHpfm5woCcGES",
  "key16": "4j7KcEkUTmV4S9NqSoTp13KaF6amjajaVexp4cPv8tPookrgf3jNuEZ496vvct8mN7LanuPPuBFRLJybQfJHQuEa",
  "key17": "EXwgphtEvLZ2EsGHTr8ipw2XA5whB4hRU4YosyGuTmz3pX5vSsuJJtKav4ijCPXsbEEytptcngFvaEwfXn9gzAG",
  "key18": "2tjkbQD39CsvP1vNtHvnyhTENxtXeGPC73gcWhg3L1PzcyomqbKHKUMyNHJm7QgySZx4NN5eAxRS9LLK5wMRcCPe",
  "key19": "4htVzkahWbVSsoUXaaNLC3Jqf4D3YFTzfS74aBmP1BqeUN5SYFZGFLaVfmSzC42w9Jc79jQ4E9UEhNvnk4ZFDWDu",
  "key20": "4pdqQGXf2tAjbhKA8N2jvXMfbD4hvQhBiHKjsFvTnja3PzCFYFg9CZu6VtU9HmcjtUqUHu4x59787kPCSKJyEkRC",
  "key21": "2MaGptr54WjY43ra7jR8KVNuJf65D2o49ULAS8U7mGKTMJdFxu3oYxJrEhPMP72cKW4y8KZjBEBUJjizkT4DjgM9",
  "key22": "2vyxKUDwKeioYd1xjUCQ1QBuXC21fLeeySCQW8QyCHZJUE9JCE13Z5ctGp9JhDxsRfbVAt28sibGLpS8QjtNnJjf",
  "key23": "4DHYY2hfPvymKpKWYzGwari3boskwsV6U8vLYYLrrWUr3vJrA14KuvKgMcu2q2wrLg6r7eZbAZKzchprb4X3K7zt",
  "key24": "4SkLfP17vxFGQzSCwY2f3SD5jZMR1pRcJ3BHk7xBtLgbtGf2DMi6zh3vQMWmzfMKVQJMyEF1n7taFy6xxRwjDFFW",
  "key25": "3WJ9Jd3LKqHTinNDiUgDgRxrQeGHFKSnz4UZQsazaxtHumdNnKQpi1ra4CNmqhJauSiQaBBd5LDimRmMUL8DgRem",
  "key26": "23AwB9q2zifSovTZ1PmXmUdPmw79tu4a7X7qgwVbnfsfjquzkxrskoiApJPGQaSLWevDKne2iSVQp8PWuDNZZbLQ",
  "key27": "5uSU3tQ3VVuEhC2CnK5LQJnrP1i7GBSVCp7GVu4FJmUE5tvypLf6ptuwwprmEzw1LFU7seWEpjReRMWcsK8VY93S",
  "key28": "5qaxCMRv9Lj5U1kwFRv8oUfTX7poxXgTpnYuJuHTvQRYgJitBkMKTYNThpxFjXzNdAVrVZB7J7VrcWKAYyUmnxj",
  "key29": "4dix4r2pFCXVdVu7kiy2AzLo3fo6fpyXWfm2XEebwh5rMjEKStr4q9mHYeePVo848sDQBrpuJz8kS8QxwezWcG73",
  "key30": "5zL2UbbodbZHMAY9dgt3XtTMG7fmsQPWiEhExkDNpT7naQxxMWvseXvgtusf8EqcwScL29AeX1odocvqBjdoE1Sa",
  "key31": "3U2xLJvn2Bfk2ptc2etnWa6bXdmHoaW9rZZGjwRcefpLCfSg18XzB22fn1UaaikcaP7aMehkHtWehXhKEo4s4ba5",
  "key32": "5iJHs1ovbkTuFA1aPPXo9tpPTRoURqLf3v1pcsWr3QJpqwfn4ZtRGh7p7c2Ka1K1a1zqueqgt6w2QCi5cue8dLhM",
  "key33": "uELJZA5BawX8PzR4ekEJYZtna1Z4yMbP7x6Nr2E1GqYxmKE6ihmJ9orzdgE1UZzpgy2icHyqxU6ubuJNecRHQXK",
  "key34": "2hxWrKUjLJQYENbTY3NLy7Zw48bvRurekPA7Bg1pNXTfDXMwtxr2jYojCBP48w8ugW13em1f8WLnvu2ke1HZr6W7",
  "key35": "2DtW3t3MUhJW3azjPXmyZNZpjHW1vPCxdawQn3EQHtpiv7fN6zBaodkqmAYhLwvafogogCeWYNpwW6dM2oF57jYy",
  "key36": "4ouK9YuLv8VAdu671qkt1e7hrU8c1aF4pWboHHHvMQcxHwBwpiX8a8xva2TB1WKdcj1AwMgsE2eFqhLWSVwor8Hr",
  "key37": "2FtvZxXh7xuUFwe7St3aUjpokv1L8KFojMuyZTGkDEChvvcfTRxSS96kqccEynYUQPbjw7q9tFinpLHxeU7CMZqf",
  "key38": "4hugKk3khD1WVZFKvxjj8qeEgznXDDqidQy73F7HfamsDWJjtUQBnGJxzuCchEv7kmTFhf4L2gPwtbXzkQrWbDqz",
  "key39": "7hBPxpnKdkiLihejfJDQwzXKBPh97qhaBmnhN9SB6azW72ZrkBCCLWgmwMV8qsf2nukdQBXrqidgVaKY2qNSZiC",
  "key40": "33gyAyiygBLHNHfVF35Yo9sM5UHdLMob7T74xqj5uBBEXXdVdfGRh5exL11iBkG7rmP5PR9mGCay67vHP5rd6FZr",
  "key41": "5irmvpXgFkjsxMdesqaiFSqrk2ynaK4MyQZme36XW8oD5Mrs94Aum3icykRbvtGuRZYokVXioZTSK1Pm4qBLSodH",
  "key42": "4hknsmsf6Q9tNaWNwh3o3dGgoqVmPoc6ZEJ9CKfBbHj9dHm5vGcEab3DDbbNwfiKK4S3xQG3rLwKHpSqYDXTaEkn",
  "key43": "4mTUrGtSYjegbHi8zHuCPGvSy9ZHS7B219M4sFKuSoMUQw5mFiu1K3Gcf611NPLS2mWHmGaJA9mM8q9nqrvsM38s",
  "key44": "2iu1FfMUxdiU194jDCwgUpTS8abo7uZBxrJRkzz42F8sXP6vNcqAc1vdY62pHtcsFoRJX4t8B4YUc1agjpCXc7it",
  "key45": "5b2LrK2WgwpP4h49SGDrTQKzVgpg3Zvo38LFZ9eHTr4zT7enRRtsAQ7odJwDd4x5gMekzncxNhK7WpmwJES1seR4",
  "key46": "WDkBKN7NRcdMVuLJxZdTFuxhmrYopN5WUKXdnXqCkLMguuM2kkjJiym8zXJ68Ch6jZ6Gr46UtG9GMH2zJaU42Jc",
  "key47": "126buXGNmsRymAo1TX1LnupGwCLDhcqwZ3FP5ySWNbzKEenPSh3Zy12j7hRZB9Vk3A1Xv1jrguZqZAQyNQYBBa7C"
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
