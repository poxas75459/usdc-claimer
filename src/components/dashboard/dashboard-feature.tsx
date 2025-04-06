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
    "4XtcmCem2DagAPgHi8KDj9eRjNbCuoxe28M6jMtpCV4eZ7wWr9Qwf4WsDZUXGNHjShAMcNiUDL71eeeVSrdLxXPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36PCnohS2n9PoABBRwDd5gpccRMBFq6RtjMksu7MUEwpnX4YjK5fvoyip75B6Sh4aNy2irAhBE4a843gD4dnuAib",
  "key1": "46tS5F4YE2t4dBNvFVYcvgkYSE7AcEP1e3dsdbQ7dZgV2A3brEMYUkU9trF4X295GFJTQcgCuqR6trtWQyDkPdX9",
  "key2": "3MKHqigiF3Bt9kLuB2xZakgjJbP9VthJkK3iL44amjBdx2HTUMEpT6AyhKVUG5z7rT6QgZ569ce2MrYUWJJE4sfi",
  "key3": "2EWBK8E1qAs2bBT538cR5KZ4qXBiAPXinXX15P7PXN928N2LcRG8NsJZryxd9J1WxHcJ3SuiEMkWPwrmsWpU5nxg",
  "key4": "n5NJWnvGFuC8rZvg3gdme1hgBjwnWTNRmZXaU8a2GsK4cTg2YcArH4JJwMTzMWfw6h9muR78J1HV4bVXpbdU2zK",
  "key5": "5Esdi8Dd86Mac6L27VtF3biYCwE44q1iD7sSCofYdxd2ZggMTov3fanL4rFxhCx97DF6wi8WaMkGVJ4SSKQFbEqK",
  "key6": "5sr6ca3UuHYp1Qt4efR4GsvuSin99Gx7FMtrBFztWZVKTTeoUM9jzzzUGL8ydRhFvdDMJ3qqQPDpKbu2Tmn7H9KE",
  "key7": "6tLbPLf8jrrxr5gpH1wtJVtSHXQ8GzbPQ6qRhpNaQbqRMqsb6C14zBLXcDucGdHAZR7KaEZZrVVKpqZLEw717Fz",
  "key8": "4XRkYujb4QhmYxBDNFzbGr9H6cio16GrJwSRdcGYMJZ85THqDG2iVAAkWHXmLfN1C4Uat9EBjoyHqZgTXjFMP8mX",
  "key9": "2uTdv3Jqf9YRfg7AWLmf4NduvrQYdZCG2XxGT9sAwbernwLZtptTJaLDgtyGuzU262QXiC7LbKy7BmqWmaanAMtb",
  "key10": "4uPE9EYeS52rsdN19scTyqmL7eqnPFc27gk5JLAJFwcKHhiAAAeQMutJexA2Tz8AGoStDTZM2wVxsCUUTMKp8r1s",
  "key11": "2avbxbUZ7QR6zsz549hLbRkfzEB2k2t73XWMAFnBD4oZFhDxceXzjtEjHcW9y144qh513YxF2i36ikVJjT9m9kBU",
  "key12": "6E8XYUS7A2bfjQouQU1z61PN6DBAyHTA53REQirJi69Mbcxf1jC2vncLgc3pR4Pnk97wLmoUhTP8gmPic2HP5p1",
  "key13": "422jnBeWZeAYBGcLE8wZywci4jkrXAD9p9Uq5igZUxApBogMN6F8rfhSBqGyn6CybhDWTH1PYrfmbBBvLxkHFVaw",
  "key14": "3WS4RcEbAYsYKqnkSMN6tfuk4Y7DUpdbKJNqFcKQfKeTL3PcutUCF1MzVeeqGbvLCQAjfNwwEDfNt2C1DVNdPKn6",
  "key15": "5PBZpMrWRx8Zga3i7RLn1p6c82ZbJBB8SMPtWgba9G7iE9jd74gh9fr6k57Ve4FHr5JexbKmuCbGbARyqkTXEsM9",
  "key16": "3E5MFxBiLbVZwP1oucFZoZ4ds7JgYZBSaNx3mH6pCgXWLppKq7quW5wmDCHARPV5QR6nqzKsgZum6pXKofFtE6Xi",
  "key17": "4CdAuDpb6PkyH1PAnNn3YTD7vHmzy69ZKC9Xcf66UZPN2NgbfPjVy1LFGHviDsTtXjg8ezyhYj4hgeu5fSpj36ct",
  "key18": "WqrWqFeMCXLSbjvLDvcHj78MkgyddRcTSCmVdf711RvWSAg7dYovaQ7VUykfwKWL2uyj4R428ka64vXV5c5EGNV",
  "key19": "33BCj9F4jJMDoVYZmGxruGVNKKT79NM4j1KXvMzEyeezNS4s6EzxiM3hHYYgyYi6uh1BXHPgKnRRDecyyfoZ1AMs",
  "key20": "UhFZjVmxAdqeHT7AUoYuYAnUhoQ2NGfneAYx8QGgrBKC7YceovG2e45U3jUbxCuEPEbmf5HG32XTKBXDXEtikjM",
  "key21": "5hJzLPG8CYVsMoEkgR9EiUAHutYv6AxJxUiCDAnmmhyviCTrWEEetzVh3fqfcpWdfm3ceWvQM7ReT9ccFjs9uQij",
  "key22": "3nktJ5gZp1Uy9JA97QvmHYYRgavmxtehK8dDvpcvP7g8zQg3MWpLvD8sqV3JdMtbEvRnaBPBUQ16SkVy1cSvzNbP",
  "key23": "4KWyKjMtWPgnVM3EMhUAMPhzBZwYB9wWLR3kw8hNf2pUaP22BhdEsLWrGurENaGVM8TBtRjYAdjaZoYARq2HNeMd",
  "key24": "52BytWBGQomqYXZgq5J7WVtHZrMyqB1Pqo4Xfak4TQPdF7VY7AtCkGwoYoe1QY91zBbzFjHEtQtEgeHJCDFP1Phc",
  "key25": "2gMryYU5uhWqrMTGtEqroJ6BB53pyYYmmDeetLw3QbqkJ4B8NTKS2gy8URgN529gW2X7WJBFofLKWpujf929CbzS",
  "key26": "3gbvQJJU2L7oryFEsBQUJCRjRQeXP474u7tgt6kCRdK12kFm4fZ8MYM5ZwLLfHEYF57nirxeEW1d7gihEHa41BuL",
  "key27": "5Ef5wYT6zHL6zrf4XvEnuk88ASGyq4XLyeUgHDXNfvo3Ui9X2iKu1cS46XK5fwNsFnN8oUL7aA23KeCextEN3SRR",
  "key28": "4RyR4RPuoyCURaKKG31zkXNvci3uMsBZAFoEC3CSjW2nDL4F9GFrSCUnyTEB3YWz22B1k5qH5Twpys6mJbAHA3LR",
  "key29": "5jGTrpLtyvGngFUYgrfyusu67XJGx4Kpeyb3RxuemJ4K1ckjAuvQ4ES2rShRhQFSvtB4MazsyRZgvGYQ8cK7xJm7",
  "key30": "4VyCvAMxDvB4wfPwGKC3dxpSfp273rWmwcu43c4gLJbRiQjGDasgbTnKjJGftUG6bFFevo1iqzx2SPZT2FZR4UjN",
  "key31": "5n3y1y5xVP64MPNdSCaE6gu6QYkxqstAD6T5avoSHuRSMr6U2HqUdZ2M7TsVjzSdPHaP5LX7fxPmuas35S9rdzsB",
  "key32": "3nYn1eWCWHrNBPmKb4x7sLfX4HjLMVgz4GQGSREidnBPELoaWbMMckeN1VnzzA5LZKguEDAL487VUnrMAT78t6bB",
  "key33": "3CNwe4srquqa6ZeCXWj32W6ZtVhkzmgqP1xZSaH2cRUFy8aM6nPUsqp3QwJ3MSUPJVF85kCLetGFBuHuM9U5CLDz",
  "key34": "jULjRfegr14MK1s45UEzr75411Xt7imomEUXqUrzbJJoLB4xNfHRApHmuPpgMSLJwi5BGrxPuV5FsWdyzGLyX3k",
  "key35": "5HgBELsHSq57ydPzgnptSmFxE6rD7YAsWne1xj2s3n7swHbD1h2foEMcMDcS52sZWA1n36AD7D8f2e1SXsZbCv9j",
  "key36": "3cQATXPqXBpx6T5AUkCc2ujwUNmiqsGHvsdV9FATgSj1g4XF8c2KVLDVT3qe69YeZ4YMBpjuf6xUcQb8zaTCus2i",
  "key37": "42AYKymDrwymLVD9YjkanZ5R4xkQWNinfSn7FdtgiSww1Wjbghx1hy3EmNWTPJEZWYrAAHzVA3nK9R9F7zNGa6z4",
  "key38": "2yuf5VHT5Ve6K9ZqHwnmzAraqvVBVzL3trEu7Mx6KSRqQNiaptWznsWgDdDc8ZZq8LUAq8iiCsXcABR9sLyFcnXA",
  "key39": "kvLgLDsu96NSPuJE9uYFYdeGPQHDD4F7VhrnvUwTWPmwdg2vUCfQoa5MWph2JXjQF1RSNaFt2Udw1GNrQYeFF9p",
  "key40": "55MJvHk2v9aXPqZxpdsPM3sz3wcFbCwEYJ3w6qK6YCKCTuxiRXHAppqP5u5iH6B6Aq5SEwibr7aJGvsPDFzdXxvE",
  "key41": "D2fycDVr2ahjjtW8GHTw5PctZax4FvHJaoKkY3AmxCP5hC1LjaELVMCZ5BgyEvfx4W4omy68v837tLjbJZFGXmH",
  "key42": "5tncaN3QLxbgNaTAZgXtLvaizgHskgYfvy1J56v1V7DvKgh2S1657LPwYoQMinDpeWxqptdwSbtuoybZ1BM9p8ws",
  "key43": "3rcAYgH49cyQ3Ga763GKt8L3BKUZ5cwUQVvDg5vK1XoiGGHU7nsNpRoduVoqYQuMrStugJBdWB3rruZb6iKFCBAe",
  "key44": "4WQsWwtwe8urkdFEAPxe1MvWHKuyfdwCkSikPiEskwZs9mLRCeUNjTz5CGy6jMHE5WjE2ghFToSt6wVzgf65M1gz",
  "key45": "2V5oXyuEm2ud8rGji5Fvityi33MCdsnAusVbdcqWjDDHqrjhUer8YGKDtVp8CrDpAGxn1v1mx8pb5q9Lxc4mXuhn",
  "key46": "5oUr5v9FjCUt5AQz1sfa2sUmi8kkvuhNnz7Hus2rx3j5erSaT1wButuFH37xpqrbRA5mkiDmhu4Mdu2JYZucm31E",
  "key47": "2mNAsrm9XJRwnZvybXUtbxJhKKHe2T5maghc4V9Eb2HEW26aChXZJGtnxtPBychEtCDET3Mtc5G3q8caDyCEnsAX",
  "key48": "5yCjoiceZ1ZvNyVaMnJC1SifqMLYeECCWqcLsuiBy8iCUc4RLJHm4tExuqMPGygQEYrd3NxUQPeMn4BaRBLtp6bW",
  "key49": "WoZvDPA1my9gMyEsQRyfyg16JfsPJ7xeWrReJQyMjMjXE4uk7LmjWEn1MegTgH1AoRXVCRmXfFCRBBKsTkusV8E"
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
