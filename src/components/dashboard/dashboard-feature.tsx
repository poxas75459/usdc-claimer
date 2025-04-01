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
    "3t86oyQYXeXBAqope7uBQCYLphbSLXcF5puvBUGbgx1osaw13SY5Gnhch4o6G9AxgHibQyUQ9Y94jar8iRpdrDpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ZUJmk5hqF86QxxbdNS8S942xVfre3p6w6JUaPqNNrjooEKGShhSEtg1uE7Z2ZjdNP9UAArDD5eBurvnTJ8eHLE",
  "key1": "4B48Je4WrxDjFDP1gKVBabKEpoM56NkvwAL136hcUPKCKXJyLhupiUc6qfig2Z6huq6xe8nRuo7MbKTCE7FTNe9S",
  "key2": "fb1ZkPj6ZALJtEARMJWeHWgWAEVBgrs2hM6uNmVwBBkQ7KKrE9ugKpyoNQB276B4FUpSujrcZUn1uQZbyLLbTii",
  "key3": "5gvwzMJNVR44o4EV3L2ApqJqa6zdqsEbLqJ4eRJ1riBrqowewX5U7UP9iB3KpBoek6JDRTHi4fK9cKcrUB56En2u",
  "key4": "2TZAoxE5ova5cffsq1nmopAZzKSPCaQnDjip59mNwbRnhY4m1DfC3m6jP1RftWtLrVswY2neXrFbQparJfdsgoDT",
  "key5": "4GTb9zN7iNKkbSPw5wyKrwDtMWGt1CqcB5Fj2NyymJ31NkJaqd2cmz326qUgohe2czdXo63pGf5Km2rYbNsbuMfu",
  "key6": "26juvMJoxgjD6RjJD9tqrgHv46PRnjiZcVBbDZdAni21tpcc7mrwu8Ed5zkjH4kSNA7YWxuxPtUwBoxftRnzZiQn",
  "key7": "F5CpsGo9VFecLUUTvkX97rL8dks1Q8NvvCRMNNQthFZMTFF9wcEUpxgwNAPZmaXTyEByNsUxJhdaZzpjfkb2j15",
  "key8": "3Zx537Ssz3RtTyLfmf854GF9YZ4VThau8zD6szpcW9CU8ZRfWzMv8Jinwmu2Qc9nKUniy8nWRxrXs88wMRmN5DX1",
  "key9": "3kUxUFVA7mZPbEGFFBgsqGFPxsZkyAraeQCWxk8gWiNdTJ8uUMmeVFYRZbAULpPELQb8jL4odQXqNznq7vXezWbf",
  "key10": "5zraNZ8SRo9dtwwXYVxogEHEMkomghXVu2LhhHdQPxchukYkrKrYFD26hiDANpeKrNJjV7Wba5wasuCRePk9RDyW",
  "key11": "ewsc1tgybg9mztqdTdBsfmPbexBq6ivAzSCgSKQwCqoJQ2BZqtDJCqiU6qZw11STGkHhBPHk1Zttxn2cRb3NRF5",
  "key12": "mGBoQvsNpgij2YvpyUc45dcKAgWG3tERKcNRWJnPY6Aaf8iX8oukHsDxEptuvCzB1F1hqa94HnpkcJYFopKysrG",
  "key13": "2eouNaV6YTDxPp9RvCBRVVN5UEYPpYr5zmngWPxMg7bXarNr7iVSsjL4R6pNm7hqcobFG4NDmkfMMJLcjtJyxcsP",
  "key14": "2TcbxjRFbrdCamdpwZdbF3uz4p7Xn68TXnEa1XE25CrBSUMyYmXuQEtMKMGPWajsXr5SkS9hFLAqnYMnwRo2xCrR",
  "key15": "2rya6UABPpQX7ka23hPaFLWv9Ut3up8LThB9Tu5BnTnBs47qjeNa2MDCj443FktaytTzJeTGwTwZQD5vsReeVxWB",
  "key16": "zWq1ZetGhaQRrugt5urvHWtcK89h28cGQYCmj2gbXBtaCmbfozf6iH2QP89PEZVwtaZRduoUEpNt5QMCLiNXLTr",
  "key17": "5mYEVoGytL7NpwQeyt9CZMQJ77pdct1sEzWYsmkzhabdvxZRq1xRWL4TkmFFRJKo1Lo6FEK1XYo8DRXirugqJNtM",
  "key18": "2jiq7S3Xt2ugrde2Pg6GAju82DihvkGBmiF3PeSTaMZfoaoLffDTZkewC392LvvxiMbBTNH1uzcbM1kf2aQctbBF",
  "key19": "41rh3kMb3rhGT71fZwCCsHti6ESpPRcoMUvskEAeoSYBmQHQtCrwwQauVcF7vaeaj6hGgWaZJDyi3strBzGnC6NW",
  "key20": "2m51BfPdeEJPQVR7ew4wraNbP2R6cnFJa5pziRZkQ4giadXehHmXMUYXViXZRiRnuQaWu7tgJSoc5TQK4jQzjsrs",
  "key21": "29gm7D2xTjYdZVCxxt12NU9on6eUBcJ4XCnpx5dqMRzEL9YF7ubBjwLHw12amaHJzhLoqkub581DiwZrQs6EqQKv",
  "key22": "2Rn2heoxt3SPDu6rJKjk11P9X5TDvFj7AFeX9nGr4peeMXELQyiPraVqr1WNE3zGxxte5Z3Kou1yFCCt8P3g7Ki7",
  "key23": "46rCNQ2ADpqBeUM7U9fYNcJtcaHTJ8sggiF8sGXyXz7zxiQ73w3Mi44bVuTnQZzyr1M6Bp9BUbwydmk1pPMfL51g",
  "key24": "2V3pTwa8WEwU1mBgSqUNvkgEE2bfiboE8AMRkHU3Be95qo9H8AY36iBQxkWmrD7BKcWj2N7suqgUUxVU9HQg3G9w",
  "key25": "5QNbBkpf3QgaEc7N9C1PS64w726KGaiwH9NdioYh5DJMGrJVnkodbvhVmDwpWrDNJDagH3BKQz1Hwzo86Aqv6F8P",
  "key26": "3yAwgjJtFHaHk36yhPNZPt3CwMK1U14CAmNyQpJ6K859bGQKrE6NWfLAAYhZhn8Ah4ZvCNyBBrAaZzvsTKEdmkw5",
  "key27": "22KygbbPP4gy165qH1i92RfLPM7swsqVraKYhCfUD4gvpgqAgoNTcayT9XGKxKcvTReBdRDUvsCooHgjcPjgVDv5",
  "key28": "2Q83MuLARivjazdLRKZimYuVYponscbUBk8p7gL6fLiSK3Thn1UJ4eKiKKHoLfKiyFN6dkS8hNmMLmDinEYT4FJ9",
  "key29": "45xqT3aUFLwDNKW5SdKcUZbu2BTUBu1hJ6Lq6UqugDUCafU3GdaJFRwX9PX3QcG7oZFCodZmVHay66es4ktz9bYq",
  "key30": "3VMCCRhbGSq9Kq7dR5YkkbJ1ZJbeW766QUWeSuhTbumbX1vJRE2b4tBjvWqbcim4XPH4RzHQYm4Nz1dC6Sa4oakz",
  "key31": "VxNxj9Ghbbwi8CdFG5HS5cQgqefBxDioa5eCeADD4Krc3p3ppYZd7MnJZNYZeEKg7j71Xi8m5J628QtTA1bQtMo",
  "key32": "3MQE8C8WnYhTm6qVtGmijJ9eksRHqdkfcP3iEwxkSwJjjgRVT1wvNNeDotBY9zwiyEiR7ka5va4HirQbUq9WG2nX",
  "key33": "gNadne4G3VZejkzZMP2XYQq1q89QKrBsXTfoVZDrdraQAqdMs8oYjFux5EzCPG95nebySpdDzXseHxsnwCyfPUj",
  "key34": "BTNwdUGAmsWbNNFhQDgLt6xepyv4XjtWh5dA4WZXwgaTqr2D1kqGErFC5B73rYj1mHeTU4hjwkmk3q5crUoNQ9H",
  "key35": "2LpkkKvEaKU7PZyx4u4Qv118Y1g35vD69pGGcgUhk5jqNgaT7Goyj3pdxLwGaXXPqtLEk63BYt7vgQMck2EnKzbP",
  "key36": "483YHThhX6WBi3C6YsAiLZ6gh3PTraFpKRGBGMgZ5TaUyHNuZsPhSArpBvMPTdbMow1umzt998Tx9gQe5meJYYpM",
  "key37": "4FoLuYid6M56vnRDfGJagKHqcuMWGHKrk4KpWWUrssrZj8KGLjREbJMDRQHeqCPUwo4WgpNpYxe9y2wjqRnAru62",
  "key38": "62erPWRiikg5NM6wyy37R1mrrrcvsQakP7uGeTBS7TueA1XhWFDvNnMX8gCCPedFc4AtGjyhLeZ5wqvuTLYfa6x6"
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
