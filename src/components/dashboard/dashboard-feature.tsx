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
    "4XoARCfyc9Z1diahgJdfdMAurBptzhbm5UcbzuJUTimBnNAqihpsN7vRsGEUNxuA1zgQfXcJ4wYjPHbU4qy8sCzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q4jL7qBydWZQ5Lotp8ghCSK94BLnNP3m7TGWY6VhZueBrjEirU63kr2BPMhB3yzQkSXCPSNH4D7Ld3zMH7DvS9N",
  "key1": "pP7bdLbtXxcHF23R6eZymbka32h7QFfEwiuVxmzvsoBB632j54XcXAHvJPeDKw1BnZrBCWVm3kMCfwPrvB6GVVT",
  "key2": "2XizQF6gojqjqDpcK2DHAz3RueEC3sFgTphdtX57dhhLKBwowVXWzmdgZdidCzUm38PHynSRLFpQFTWnu5qwH9HC",
  "key3": "3sCTxd3Xm4B7hJK8ogUyXBE5FsWcq35UK2wyD2tTTzFJTQVF4CjcjBG8JVLEkPJ1cKD5u2qgALrdnwjatPvjdZG9",
  "key4": "MHBZtsf9yysYdLXMPXLmJJKbwdzM3wJommES5xLyMc6AYiLknw6dEqz77bK3Y18cmkkfExxwCUKTxUKbJmKQkMp",
  "key5": "4mua64Zi7LAUrPP32XARdQpveETsddGBG93WcuCcVaSTtsVJ54jGsBVUwzjCaLEtwqVjzGZpDTabV39Zb8djVZ3h",
  "key6": "2WXCg9d9njsn2SYw43hFY6rvFLzm8YTnMvXdC9gW8ZsZrZfQXDXmWRdBexNvFK42DwQDxF9x8cFEZimj92Em7t8C",
  "key7": "5EAGdTTr5oeeLzuP2ouUmqrvuhnfAZNE94BwhbzMwE98JEdFa1YwcqgwqHoV6FcgJN4eQX1FFVEwRj1X1r7ovryU",
  "key8": "49x2DAgRJcCodKdQx48EZB2Tat3EzAKZG7X6eeRcjAYuQ4sdKDfJk2iNxyjerLMg1sZSY9PSbkz9ekfQALZia5ZN",
  "key9": "4PfTmapFFuA26D9uFaqyWJB6pEk626tFqgCABZs2AaCREjdt3LFYP7GKAdq2VoZNdLoan9o5X2C9DWoCuwanT7rg",
  "key10": "5kR3ZyMxhkcUiJgKy9TCUdWRGpEu2nWKQa8kBnuiUjNKeTqEQCH3wsL6gKL99GpLLzxKWMrhWuYpGMSUQKXAgL9C",
  "key11": "4YN4Dao7df8fmp8Y1CpLrMbs7NqZuazJ5452Sthq8yXEXrcuv9prvUM8dTiLxnGxrw6aVC6SVUjnykMG1jGrboXu",
  "key12": "tr39m14vUvY1GknA9yZZhFdLTyX6j6QBbx1ga9fXmPChrAVfCuFNZtSCJn8UESMPJCc1smeFM3wUczRv3xpaC8X",
  "key13": "26nxrsfCU36PorGHMCShumcgASyFEdMa196zB5ussFKZnpFL2HtyQosT1nHgyg9zZoGqaGPv1JZMUR3Z8AnyuPQn",
  "key14": "2CN1Ecgv46a4rZjoGVwThbzafSiJtDrzX3J1sEkRrLFiAUaSZh2Seyo4Bb78N3P2F8NVv6fNdK8ZfJFiwd6Dm1pL",
  "key15": "3jhfERxM51S4sfQ2onEaZtqKATAgTPzLnhpV8ypAv4N8enCJhmdCzussbiECaNq9iDXMzf4g4V9fK3PSJUoM7Yef",
  "key16": "28idF69uMqowknMt2ofsWYDfcQsBoEhX94oLxWNNRfukRTEkq2P4rusfLmkGFp5XBfgyaUyK1VQ4Y2D6KJs3uf9V",
  "key17": "2KRmjsDHnzBWqpqFq59Kmf2NRsRfn3dQeTN75VniyjbRJTWEJjX6JJ2fmoWke2QfAatUHuUnWLR5a5UbonsvuTcT",
  "key18": "xCD9BCc75iP8FcWYC3tQ2AxAi7VJoPxLGYmB4u1FBbPLr3qhDktd16rnanmk3GVYicrbpYr9Z7cavTwke9BRsX4",
  "key19": "bCyx2sSevBg4KJyXpJspLQyjX7aWvFnCSUQDSYsiMeNQ4vqQy6EARxrXti8d7dmCEMK5HXBcb61uSvoWASw2BTQ",
  "key20": "2iq6Tz9BwBJTnzQ3oRr1vA9YbiEyGojJQNsj6SXTfm56hSBqnT9ZMXWSAhbjrJ4wpNeuRrw8naPgqL4roXf1mak3",
  "key21": "5FM8E5yiWngzxJHo7MhErL1s6AfCmGHWcqEocMpAjxx9NYUdA3kgZxmBEgv7AFQMifSSRHg9BW18EXvCBp1sR8pB",
  "key22": "4dYLbBo687h3jJfvkPe37mwfV3QdGgqekv3UUi3Zsf9wjyWkzMBKqKAnTLbZjbartnFSr5Qcrb3kdS2M3YixoUci",
  "key23": "c7GNxpcRcB2QJTJYeNjZA8sQbbUV16TGwuztTH8SJg1LMgbtqfvydMaUBiEj5tCduPCkZJdt4BRWPsvfVy2VfSf",
  "key24": "31CLBvjdSQbGgjqUMr2nD3dWyzbYaAMh4zwUu82Dfux6mXZJUHXwJvH8ZcGJp8zZGqSeTF2PDDo15axdw1NM7Jx2",
  "key25": "9QanemKaqWjtH8TVLEHVWgKzJ3xeGTSS3JKhpYR5M245cJEdmQpDuufLG2PzNG5cjXskWKJFHi9p8oMTQH6fTYU",
  "key26": "5p8C4Wv4QPWSq52ZNBFFHji41AYhHnZHDnitWkP8KX7zpRCeccwXeEozdyNRnYYyjQ3D7MWi3egf4jJY8y4p8H9t",
  "key27": "UXqhD5bE3PcERiu25wqQCTf5Ev2r3oWgNjobBdeuKgbYfX74mSGEJtZaZjSShUhwc6RvFg4TNGYSVVKA1CjJCvZ",
  "key28": "27WdoDoQbvCx7zVLEKSFNsp75tPA8STL5aDdNCqQrCqYjq2mTgojc3RtRZ47wgty5AZchoQdxZwebQ7CNYyMBsRY",
  "key29": "gkWZEoi8pcYkZ1E8ceDE7sReHeuYyWktSNWsHPe7wL455ksM7q2CbnnrapPdRFzdvPdiZ9dEPDYuW2w7fC7QwCr",
  "key30": "5kcFyFfZwhmhdz2TmkYRcPLKb2hU2XEGb3y157h8TPFVkr2s6ZDcU2yCuyqKAUopyz4LjJbkKreBHnPJVbtVmHau",
  "key31": "sGxNHVtreQiTh2qm2PhGCPGqKv12n6adKCwKPgZrDtZV52oEqbLwHU4yTCbvzohbio2y9JxDstsD8jby9CiPUTG",
  "key32": "pu8CpG3D6DRn1Bs1m9hYBsuhKkaLMY5DvB4euCYbX5BXNTuUWqhXdnLnayhXvU11kn1y6U74LSReE5fvAjTHVMb",
  "key33": "5KSYyZXHxaBV7b1b2b2rg43WQYnynvabcQMz1KgADhE9YH8QRudKtbyLMrxV65x5m1P1cRWSE8U5Rmb2X51SNAiW",
  "key34": "61JzWA5EK7qAhFbHxPBBE2zwzuhmmq8JUcX13YXPkowLy8Gx3kHgkfjQitgQrEFViY79tAkz2Ynt2ez3dcBphcD9",
  "key35": "Vrca3wSw1WyYEytkKYMcjZSimGzC4Vw5FxFYaSGoFZJuZJsBtTPW4uVn8p4MKSuepmNRgWSJbKwCJeUcXXWoEL1"
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
