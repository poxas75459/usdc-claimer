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
    "5WSM2mYyVsJK9pxhBSutCYsPmLE7eBjtk4ngTSWiYTYm6FJmB2WFYBA1nNgMcGL1Asa9nebRQf66WsP3EFeNQtLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HEWJEcKs86k8MsWHQz9Chkewzdhd1oRb21WRwHCWvkNyVJwp7sR55Se71cjrxvPijRNGuMc5n3Xf5qCuMvowE4o",
  "key1": "5bx89d85rRgMK5NnUHXARqPu9h88NmQUM5qFzYEPiDUif46wc176fMJ5G3a5j5b1muXdzGRDqJBUJWtxUVm3bLRP",
  "key2": "27rWYeZyJWgzhz3jhUaLV34N5bqctG7oBTtv9CcCyhiruFNnzKdZboWMbij6S7NJAgDpwhek2DphqkRHKK6iTqAx",
  "key3": "JtjmQpcQr9vPGhFGKGTH9V4Nt7PCCE913s5CmgB33rrMCzGQCwnnvWFyvf1qF3LhF9LJEqW2K1ySMNEiV4AhfYR",
  "key4": "2oT7J9AQFUwbbrv5WwBX8WyXLu8oecNA1xLH6ZMTdDqG4GVmBZJs13WfotdqEN4nMGRwHfnXqm2b6mSsbCX6X9zd",
  "key5": "36LxUw7vXfn16GQpiZ7TdiT1to8oRFWE7bauvp2MnFMGz33jYF3YogZTmNUFrtvLE3qBzvzEUimkeVQYCS2cx2uz",
  "key6": "43HhYiWqvFr2bFAqKEkYqhXeY9S55frjRxtGKxcofMcmAkyTBoDUF9Ns3jTg7UHSKWVgh1FAJo5Q82xdRkoSk22C",
  "key7": "zKJbRbERFXXLf3fci5WEUUet9KERktXyADw7yqdvkJ5pZipjn8V26oBLGccCTnL5pabTmQjj784Ckpa1AfUywSq",
  "key8": "2dxW9eH1bYXfspKEfDbU6dD7heitHJEWu3FHr6BUDE4CTeJa6GeFzUkbBD2aHdKENt5gDV6Pwq8AMsM53V7NckDJ",
  "key9": "5R5gFLmnChvndnbw872ck6jUohUUeu2rcga5NDgSrQRDxUvmJKRjPdULcrdscmXF5dXVggATyocR1Stho45cs8Gr",
  "key10": "4DUDCQQRShTmtsbiwPjmBa93ZwqEorue1Aoh5PuUWZiQhDVaxvCfQ1MRnMyoc9mk27Fw6PoQnaUPGv6gRQa5EyTY",
  "key11": "5RanQFvMR33QBi2aQNk9i4BzvKy16VWRKft3irX6fR3zLL1a7gt8ba6FGLkABYf6cht2TgKVvPtvjunN3W2Bvesv",
  "key12": "2ahh48CXrSCiQa3Ke3ScgVwLC61ZV7PhNzkkZtCb69HioHgmaYVorrQwQ2VJ5tPqh2U3nhRF2RDovEpjRJ4nmT6Y",
  "key13": "2dpxcyPXEGCnz1cFeevtDv6EP5JhL7fmmfNdDzvp8DZ7EUMMNXY5CDQGYJzSwS841JawmVJW9WDLtR9JGBQhpZS1",
  "key14": "4dMW63AmZ1wAVcxHJA8WM3whP7QjuFNT3yCW7QNY6Dv4p3TT81cXWXe9KQfGJqJuTTg5bawo3cwdiuGN16oVdrp9",
  "key15": "agpyzJYGW3yVeSTqRHi2jeRjajqvyncvu1Fndk984UYF9uwd1PdWoUWw7WFNQ1JQALCWnkNGXsZ1QHLNMM4nUFr",
  "key16": "65NR27jWQYqgToHCufF53VbxCDQ2YHyVGRR6eNA1qPJ1p5ceNTcrmw9QL2gLEuvfKELbsv6Ph8CLuyNjA8PvWwD2",
  "key17": "666Aeeby7jeo2Kbu5XR7EfXDLgHMNHRzGj3RgoujLk9K4RRLxbCzEEVH4BDu4RZRCkWeteNUpuewNE8aW9igUaWE",
  "key18": "4bvFUU7uWKQMPA8ccUXDSDt4fAU4gMYCRRCpwN9mFpvrY1U3yXE48KRwPBZmLiRvdWRottgram48CUJgd4q6Y5Jb",
  "key19": "2A84JyqYqbx35bXg7ixsgjDQijsSZaMwKcAzDb54qkrB9paJDXASYWtGMVYk6RznKDyNznaidn8ajCfF7vm6sZeA",
  "key20": "5qtiuLVnewgQgutwys2cDvsk6DAEtJ7cW6eb3gs1WN47Szpcw4e9PHZAMMW4cRdvyBYYJWCBkJs5dG84LS5JixNS",
  "key21": "35DQFJXYKais7aWhVG31ZnTtbyNfSrbCuEbhK51ScMjd8X1EySTLiQvCFqjC5p7Tp4vDyQv4U19XA8SoJRYKQ7do",
  "key22": "5fASuzkaUQDetPhBqMpWXYs1kcWPuuE5sY5969JyQzVQW4qS1WVSLXKyEcMdMnKJHbQaJXrBegL3y7XKpdwvcwMz",
  "key23": "2YLxxrskTAEZVf29Nn9NUw5cUACYnW9Xypc5kGNYsdk9hbWXoJiUKpnXn9kKNanEcb8mATaQ5BMxqZSCztat9qv4",
  "key24": "3WZ5foku29BYqPPBRmecPvydmsNku8HTx6DN5ojPU6S4Q11WSqhcuH9k22sFW4ScZBnbxWvwsZnPsiLCkQNmKpgS",
  "key25": "2egL7jGPJhwDCnESVZvy7S2E4XAYYxbydXorMC4iMhmWbZaJBZG6E7649f9At8cgZ4KKMmNmvGoPTvmSjCT8Pxc",
  "key26": "3ZDsoYiJdVEUbTUuEYhijJfdTd1Z1qQo1intypiQbbrSq52TFEwydyC4kAsYw8NLoh6jk6pKFHhD8De7JhFsco28",
  "key27": "7tzB9XvVRnaUhHG8PUb6o9jAuyptdmmU49EqjBaM4PmorsQVRnNcwwNqB6nTok5BRSKv5Ax5rbqL68Pc66G7GQ7",
  "key28": "L5saZPUgMw5zvucCQ5KnZsEnWv1X9XediXM7vZ3tKMKFANxCQVmcBH9nwuo7h3JCcKHHZ8A4MycEJhnY4rpsSmw",
  "key29": "3jabxxv29hpBpNDGB9MH9bGPVpz2YXbh7Dffx5LaYUPGkJoHMk9ARgrEAvenRpbYjG79nAnn7sTkMjjaRnuMr43p",
  "key30": "3Z54ndPnT8va9ZaWcgYfsuduZ87DdUoNse64pvy9t3F8QaA1XVrWBNjucKdFW9gQq5rg2sLDiJbMfVdf8sx5a8h7",
  "key31": "H5oJkFbmXhLwS2w5meMN2RHs5Wj3DThjjQ3hM7yA4k44xEdU7Lr5TJ6gFa8u548KTqzWVUTsuzXfokwRxHdUnyc",
  "key32": "4hU49BygN8ghvYLUPxNRp6pPfmF3tmoWGz2f2z4N1QyaZRUFbLnvSJ4Boc4voRD3jZDH1hUuxBAUBbFhJv8HRSW5",
  "key33": "4y5VUG2zYFK6X4woyimE9uTshCoZW4BiK6XWMPQ1G7BPVuEXNv3kWtVgnEev6BjiAxkcaBsFNaq2nRPsm5jHX7ya",
  "key34": "2Phv4eQeUVWSAwLbThUKxRiDbnVSpoTEuKckpnLhGLnWFES4QTf9d6kpHqnPN2T6L4wmuYFbKTeDBe1VUszDxD8w",
  "key35": "m9bddNMUmjWMeYJWN27Ec3zJ3ndb4oA3oNtHDb4vPDfLnSwEBW98cXJMP1ZSFntup96GmkGJSfDjRFaDVznigrS",
  "key36": "3ho3K5WUwt9Zw8mhnF2qA3QBJXTtNT44bxR3tV5WayS8jCeJCWusZuJf6cBB5VQXNJF3FT31gdAiwxmmx8eZ7cY6",
  "key37": "5FhN9FDda3LRp5kx119NBbzjEmuMotbtYVKEB3nSvzgeb1R2NBC9sBeJPhofSdQ3QtrH8pMVADYDRtbvC7NdBVqh",
  "key38": "67ZncBbQb9DBGQiWfGSDg4nDU8L8L7ca3dzSzMuMpY7xicxhvTVdnkgY4Yp2GP39gUX6CPBrMU5ixwmh6ydMGbGp",
  "key39": "FBPY9qUNhrBMG1iRLLaB3vv6QRoYJjnKDGy54wYhqnoRXBELBZGfpBBj3xyEebt1QezDwuGCkctapBP997h2jWe",
  "key40": "5NkZ5tJJpyUYVhrLgqYqCdrK6wNAku1WaixSEwxgehQ2ac7L9PsiXyRXnyzCJ4GRCLxuX1BdM7rLpKHnFVthMr5L",
  "key41": "3qdQ18tyBPAajKALjdeLBKheLMvntvUexvZn4ajnbk8qCEkMaLwvqYJEJ4L5XRhSJf7wsSu1AfLu5Bzzc1vyi2JC",
  "key42": "3CKaW91QXLG2UntYDcin47p92AsrXiJrZP1yKtJo3yJieAqQV8F2H1JUzUHDtiuGhBeuc71QtEQ4abDt9zZw2qJ7",
  "key43": "5MvEvjw9MYNuQCUsjptnerSi9svt4c5mNqp7UXpDf7mzgTLT8m9kVHs7zRnzxgsnvh9HL9uvAUWWqc2DpM6d1RnW",
  "key44": "2a3WnL2BBP7EySgQ8RZde4GPcCMbsDYbMRxWukxn5eWrFu2Xs4yB2imGKERdvTwWpYnYjDVb2FZ81h1a59SQagyW",
  "key45": "rqgszC4ZKf4oee3cFKWghhrADkXhv8pxxizzUPwGZ23iJE5oiNMfVccNpo8k1eTtX77bW2aVPnka6J9HKcN21VW",
  "key46": "2PKB2EDQBVRSMz7tnR8kyVhctjd95d74SiQUZmd8n2n8xupMzFaaB5nKXqoHYHevJh1d3izzSegxcwktKUH9WXby",
  "key47": "LPMQMEFJC6LTmo7W4HHRHi2r9Qrb82dkKY4Seaq4sM12YMkanE2TNfyeyRuP7SUigtBFnwZ7gQ2ZAGy6qJpUmhs",
  "key48": "5foA9MQoaNU1bLEN1b3yZSrh37BKKUXztAi9GzRFqF44qM8wttzBUaDRDmELA9jvbqwbiD9UCi8Ay899dADS8PoG"
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
