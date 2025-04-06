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
    "3gLgpGffxB4K2qwiZ4HS8DFYEDFJxv91pvFmnupccK3tCLL5bYv8C6ocSCC6zpfUx2Aka1rye6xqzQ5htYWQNtsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tto6uN6TwgQjFgJCthXerBQ4LPVZu3YYc82tyS7B6XG9ZyLkroNJxb8vP5oHgaHpqX1LSa8HewuBaTrTnWKic7j",
  "key1": "3MBHFXShtRNVbNr8GzkAg2Tc6GEapheTGjNuZit4vyH5o2J9kKKDMPkMj6e89rzmsm3rafChg9Recbxh9Bj7ma2g",
  "key2": "3GBM83ZE6sBY7nw9GRrnSpUDCgDHgBVBDLdQ8vuyvJD4uoJXWoqF7CYSFGjQPBaziB6XZGBsvpbn6QDmxabvhLCN",
  "key3": "ojnBPhBzWGXDhsAiBwUmcCCdZhxNh1ECGXG9XiFiR4Yy3ZB5gdMnRXCpJq7LWQwYBCgRhLE9eo9VrYAusacP79D",
  "key4": "217ZcMefEGjxqwfJAzqhe4RVqGKZ6KUTTNa1E5ACpoCvJGvYJP8Q8pnE6PUjsdreoZig4rcV2tZaYYrSDtMUxFYb",
  "key5": "48fsLtbmSRJebdGkv9nPK5JqSGvtoy8heKvdDnSRJooL3C4GzmtJ4WoggGtswf6kntw7qepzbXY7A3Yf65aoCae6",
  "key6": "BQAoRg2KNyMCBd6MmThc6J7FgoAZBKGYWPAM4Pz6MVD8r1N9Jc9wve5C8SKchLQvugqPv5SHVqh26K8NjhVfmmf",
  "key7": "hWookYT3GYaGjSUTGH79buuZ1phBoctafX8cb7coZy2cmUUSL8X8myMLU9scVDsFycGBf9QBDXzdm4egV4zwyyj",
  "key8": "a4pDxFtTZhBW2262mfMNJVey7UDGN96ApKNEB3mM4CC7ir2vcy8Sef5tKjTcuiFPDkKrq6W4tjTmMECuvGw4T23",
  "key9": "49pJUaPuzT115i4yr6vm1UKe2fzWm7SrapmJLBu7BPMmVa6yy96PAUEp6VCYfK1VwmGmBCzHjiLiuxF5SBqRer8Z",
  "key10": "4soEWCb89s9VQ9SekTfLpQsx33njQpXZoHaoPqp39awUUayghDGFT75arnzt7i3gaSUGS3juyXwxqoKioUAJi9Zj",
  "key11": "3o8XH12Q55MVCeZrHyskdXNTMAgnUvJw8kxfzF2Rkp4fUiJBkxNGRs5jFGJWAtdujwQsHN6jKuN92Zpy2y9PYCBA",
  "key12": "51gzDQnnsXh7YuM23FP8p7muK6mivA3UCPPK5KF9qs1BCBrkMXjhUSd1ynAQeR6rXNhmAdJDYBZyNjbyA1TVADZG",
  "key13": "QxZ2JAREPxLndXWvkLyi91d1mLZp2sxUckpnaBGnLLd2Fjm6Qb1RJyVZHNthf3gPVGEkHpw1RCVqA8a1Xjwj5HH",
  "key14": "5oTJG6ZbjCVT1PsfDHgCxV9EUdp4y5R9F2dhD6daNWXNmc18Qj3fHdG8LvtVP5eU5VPHymauWQK2hwPFw4E7H52d",
  "key15": "28wpwkwuNQUBnxRdQQhXBu1kzpA8XBXCh3eeuTNoPQdzYCaUCnNurerfYpZpmutcUnKwCuJ9GRyVGX6xpbnLbBo7",
  "key16": "2j4VDxMMVkG3WNLvtCyxCzpBZ4xt9BXzkZEsQQKUG1qxXWt7gYkmYUpRUEyjJH56MUxeG2kPCA1FkkAwa38bPz2L",
  "key17": "29kZsDWPySuhXpAnjd5xANSEUzhcf6wwyCTziN85Y8ua6MZDobNQrkjMxtnBSygJxJDZXpcEwE8VFkYzDbv673pE",
  "key18": "55Rk22AV9nt1TM9AyXyU3tmj8FN2RneXzJyHwUYcUPfe4CqbCRRfg5M4pPGBgqoraufiLihcb5tristmJf8g6uat",
  "key19": "A4crAk7PNvUuG86uCEadhHTH8TysKC24g7i1iKWE9cfPshjxyseEwUMcGVYG8gNAtSFpVbowVeSb2dd3C8FBBem",
  "key20": "2oC3amxm2fAWMZPMbAGWxLTYQCBsoTttmcZz975i9EkjZnrsRgeC6hg3ubwtYV8bJ6CbT5eqkdvTDNoD3Bm6cm7w",
  "key21": "37qUBXBFT5Wj4QNZe7R41q5LHUTDvAzBcBJbRPEuDCbyKgb2UNJqk7KnFJ7xxBUadbVXYtGVrnKbGWa5X1bJ1ct5",
  "key22": "5uquzFtfBoZt23kxYvJuUetLvjh4xMeb6Rtd66e1tG1hvUoc6xWcHmfSuCV1a2zCqjpovhEhWRpYHWnyvC9tQ2Mq",
  "key23": "YsuVycHBFacxNZhEumJxdduoRudZ6WYJRyq2VfZZ7p8gEr7gKgDQgC2UKJdmWmtfT8tfM2HFFgN45NgYgUdKsnq",
  "key24": "4wKZBhwJnYHrvyFC3fd4vs943Y498UzcSEkjqSewq5gVrLkj64cdEjCtoDYLCXLna483xew7JiGgP6pxynHuMpCy",
  "key25": "5ywXL4SakWzkGYS2a7ziFuReoGHqM9o3fdoRekoCH5UePrJxwYg7Fri8RgBr8MXWUKpdTZC8kWzeNv7VhMYh6WSP",
  "key26": "mnA6JkPmgsANzjYs3SGA21bGj1kugMn3jc7FEPg6byvLDe1PgT997WBCB9VcJ4HQGPuAKrscLrP3vaz7rJPDngu",
  "key27": "3HdqHxZYkjGZUejAAGskVvA957p6Y1HGARmaaUmkVW35uw5MKs2TdsZ65CrvBaMKue4vUyinBgsUwPg5Crxqsb1r",
  "key28": "2gFyemrB8ZbsEHbb3TZMW4HuBLjYnPWkuWjtAQcpFGJcBQDTaEakMNbjnRg2xwXwDBCuZvfA1Ckt3RF4YDKKDhV3",
  "key29": "3cWeHrCWXrt1szn2payE6bc5MSD94vBjwh7F4YiomJS1wjNA9NbJHVL2ajKUJ9emv6NjqVNqHbivMev9LLNAdt5x",
  "key30": "5appGjPciyM6GvAz4M2NbJ6yvkGzzE9FuTs6oiTWqii92ousLuj1jsKRB5RL4YWRCQZ3RwTi6W1jMGQneCrcnQgD",
  "key31": "5c3g5QReNvMXo64GaZxoaWvevyxSAvb1NLVoMrZQyw2Vx6MQaF4PwagciWbM4isMxhu3WqoYuFQwtFDBULA411CH",
  "key32": "3RR37HmyLrCCjD1m7uKTxDYahCywAsznvqdZ7VS6xK9bG5Kc7KhKVskTgqbASNEsCvZzxnZEqf1KkLs5pfcvgfcS",
  "key33": "62iWsJ5dEWkamG4RgrX8CjZ4Hcz3X9YCLV1N6dfFhuwzFyJ37uTxu4ayFbzemgJ2n111QjFuVLYbV4Su98pEBDKQ",
  "key34": "2A3uzmioWaNQ7Xq7YswGUoUjdrijSTvXoVnzaRsVhGV1iLRiPeu3cSTukUhWTkR7KyEJZ7eb4kwVFFkijq4xktvq",
  "key35": "3QEsV5K7LXyGnqJc6Zv6RayQtisri2krFEsvJ5apuXfSYksBX2UxHTssZjmW7JHMT9XEmdYSDdkkqapbXDp52GmT",
  "key36": "5ud9o7WNfaNH4ce6qNFDrRGJUJTZGdyQVrbVwnWyHGa5kQ1kR9jb9RViqhdspgEr4QV3Xiosy1RubbMBf4sxuQ9r",
  "key37": "2FDeBTQY3YKxH3ZWYdvL4UH671VGrPb3Frd8JmuSL4P1gViFtm68J5ojTkH3qJoM2Ffv6tvjVu3viLY3q7gJCe91",
  "key38": "2zyijb7V85BwVWaShrGH9CJLeGeLTDWAJgAeS39YXWCHHkgsmvoP5SsJZswk9eWNhoDPEfVpSrFFHK4jciY9gknT",
  "key39": "yHjdv2z3jF9fsPHoBEPzWw9r6xYc9njf7ubnk3YCGNDfYfTBJwyHVduDL6YUf1ZKQ41gnUuqnvz7hoS9eEbZrbZ",
  "key40": "3AYmKwsHviZ5koniyeyNTzHr95h1UQ3e7ekSjSVtdWJNFKJP3KNPCHbAn1n4sqVj6eBsWifQzA7rvQu8XMBMa3aF",
  "key41": "4dpikNq1bWhVNG2bbXE682shNvDuupA5cRGzk9MnsC2VaEqe1Wp26i67seqnNB64whq2v6bGHDPCnaeHkhVLxzdi",
  "key42": "3aAMa2Xqiu3vQwBf3cwvyBBmfiT9rkADjhJ2Bk1Tij6pY7XUiKyV1oKxhy89A9v27QbVbYohU1fuUMtmNauyDLep",
  "key43": "24teXdYi8umLwZpWLkCobmsjM8Rfvfqs2Wmg2s1JRangcRnAYizCaGnAL5GZ8LLUBXFLeRBXJCH7hHBhfvQn54wV"
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
