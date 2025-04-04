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
    "5JLq1R6ZvFfr4FnRr3bmBebSinaM6HtGzXP5P8T8ZHtictnEywfeEbqdvx8HsK7sNUCyQ5JdP7jaTCJZnhFmGCum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S2tUTzMGsjPQtBQj2brm4vTJ1x9HkeRYPL6SovD9gkJtrQ7zmgPuLKoANFYNrwzdbThp6STj5VxDMUBeAkf8BQ5",
  "key1": "2RQGS4fmUSY24xpXaWrd1wnUqwi2pvWc2WnhFPvU1rYEp3mv98DbNMkfoaqVpD3syp86qCctJAAzpr7gW2aP7fEp",
  "key2": "Fvsfw4jf6hoWgHaUHZrn1EpU5CwnXPtSYhVsjCx7ium3cWQGmftHxKwFxDQ39zSwQgrbX3vCR5DB4m5KRiBW2PG",
  "key3": "2qBVb4r6eqBZNCJNYqBdRCSFzttaxoiajybtgPjPfkbJ5S5XBNePaquzwyMiDNxfvmSvHn9FRSwGboEZdiHKLhf2",
  "key4": "3CBvqJJc5agXCJdD4LK4ftg8Dy9k4fbkC4tHHcQCoLhMCSE5MYBCi9w2WzWnj79ioUom4JNpzXfeJDPvuFy4ma85",
  "key5": "2HKU2y9gHtDVYPAXvqmSzxdfhoR6ctPapqQmnFfnNH6joENd3KwmQxg2ZfpFxCQdvsqyGDYr3uaje6m1UmNV5fM7",
  "key6": "3PVUFxCEBtFNZM1Nt3mPjp4qqNXCcph4X9gzDm4nwCxNHEbAUtUkd8zWDfzsrKtx7dA1iBJj9H8ESEs3jcovQssi",
  "key7": "5GKzmyRM2ohd8M3hQgnBRyXTjJbNVdGVmPJ2d3GQ5Eb87dmbdxUT9TyWGrn5mm4JfMBGQ7UeUoyY4koqYj7TKn7x",
  "key8": "3xakUW7rgR1JS8u6Jqaam1yfjt3EjSG25NpfEvHRPNF6AfT1TZWmWPp5xNs38AGmewfm7MMswk7U61YKLp95cJRD",
  "key9": "2W1pVYaGVAQQCJnUNSBwFtGoFsmXXizGNYPQUxyQLfdAWST313UDEUFHtugeUvvmu1vMMZyGVxh7WPHv4xwZmKwi",
  "key10": "5x9fCAdNRmAXBWhw3DS7r2bKxA9LhpCUKebcBAPpx4PKBBePb2HTRtg5a34zhWqLAhkyYKD8sgBdebuT1gjzyrxS",
  "key11": "2XiGWUYSE464RU9N6TFK33Pp5UDygwdP6qotnwrAbVfbG4sEMsjgkdGXiRYFRH7ouH87ULd7yTkrdDcoVwU7AW53",
  "key12": "4nFzV6xzS44yCsxYB6qcB7jg4LjVtKwYfqMcnWaXB8ZCxKXY46Uk6z8cxic7ttmze1zVPhM8HiWgB2Y8DH1fMwWr",
  "key13": "4Eg8a7vQ2Wgg9NUk5PWt6CMxcqmBD5TWVDb1RVbmVJWLJ9D5dTMU7qxbFknKyHu3yfpEiCPE4zmocpWdxvjeqSvk",
  "key14": "45fm1QfSJtxAgMPBwUyTdpvr3YSa6sHqxRZBLWC6d7yxDsoTHQHu6VbHR446zwqHAqusFSHxGnqK9jP88th1eV1y",
  "key15": "3hquHcYwhBSiuVCBvNMzMRKWzZsDDKqX2YA4f67ArGihgdTMAyuVCeyzxAiWmWBsKHr9waAXi7QvqMZCw17kKoGn",
  "key16": "TnrWdq6cdAURdvnSry84ZR79m4R6ZCvgrcMj3KfaTAEdiRYd9VoaGQ9JZNkVRkdA3Ly3EFfi9c5JCNH3uYtzyXi",
  "key17": "YRuJXMBXP6dnZMFir71RvVkgxajSPaiiuZ3nm6XGGBRihhKfWRMCUfP1kkqeQ3rVWAfetV1RYhv9BFzQN3FNUyq",
  "key18": "4A5Y7c9Rz21XCsUgBsPups6a4qh9W1gHH4HkHMkAwjTMK4NFHRf9zTK7D88wqMghTsfb4AH5Hfs56XCy4pjrm9U",
  "key19": "2Dw3jxbufRUYauvWJpzy1BTPeP5owxc8zMRffVkdpGGDZTds123J4nrszgxUFuXuqAmjYU7yi19XCGgNAvAWZBaS",
  "key20": "C9xZAfoZjc1b2izVRhL5XBNoH6affNiAC7WyZj3eciaorZg1zF29T2wc2BMuwb6Ns9n4xfUCESLUSD1aXLgGxLh",
  "key21": "4iCemSa8uk4xwZzWHvbLYnRwYy6Dt3tccf6nwvCdPSXcghhWvYVTpmH5eSkSxZ8yUPtzbWz9KhksaD34wH7qyKRj",
  "key22": "2vGj1E8TPn9w2vLBWgXNQp2tkMvjHdZFe4JyTDeXyuk1CYWWrrLa59PXoQ3nYjV8AZhusvjjwV5sVHu3tJ43ncd",
  "key23": "2fXBEF9FB9aY2uuTJ2pSRZijTQSpMPJYymA72dfptjMCAV1fpfJFaH9EojXUcdGz3cxVtygW5LHgiAPyGcAHcbAN",
  "key24": "34hRTcNxQCecqmHu6NzPPLx3eQqeA2LcYgyw3XAH7uczRrVfht6KUmFCRqb215RcMvmMW3G4zy5sGcUNjYhiGY1Q",
  "key25": "67WByRMwfcVQ44oQg4qMWa4PMJmQynGPPQ4J4xuRPeG2Fn4PwxUoyTPDcHHKWu1AuawgE9PzGWvMdXmvKertVK5h",
  "key26": "5iLjLcd75JdriEZVLV9zoAM1xrhTtUafgNozAoKkbED1Uq1EKdTTjDajNTkr663v57Uemnw1JNAYfLgKFp9NaWqU",
  "key27": "5QLWCjPvvy52BejNytXH7NcvNpHv9qbASP8wAvQN8BYk8kK8oG12w4FNy2E4JGJagp1N4sNPjMtbNFcmg8tBzCnU",
  "key28": "45cVHc4uLnS8n7CWm5Zd4uVySSHm2gKzF7zLZ22yFKyKZvFVcAKeqKVfkjP1RSqd3XSWTahDU3LnzYbB2v1K9SUA",
  "key29": "KCkhfaFPfCCaEUfxuHmSfeV372o6oLeVAsNuq1tR8cm9ZQKrbFqWisDV1ChPSN7K3sF25bSoWqPDdnFCuath8bT",
  "key30": "5m45gudHb5YFVqyFAiiu3H7Wn23qW6x6dXU2kf84FkSoMUfXsxFLF7TqSYZhMuVpcYBqB38diRUQ5p9YKVUgZnHC",
  "key31": "36P3VdfnT3HLWcJrSRw3C1o4N1Zydob3odhxrLgrVb4HgtR8WLSewHh2M5CVRtggPcobTV8AaE1B6sdTAwUL8LV5",
  "key32": "wb8tDy5P3XjbuuNDJeLCbJfnHYaFTEwuuZYzhuYSwryVap4AerZhKNGATzY8iG1DxSimcWr5biqjYpMbYv8Kw6J",
  "key33": "yqK14oZX9vq15HowfNyZG1vT8DyiFfbQLAG8nXPkjjrXF5iGq5KBZe3pCkQyNnB7myZZqWWj69S5vsHr3zP4PXT",
  "key34": "4hVHgEwgZwDVx61KJkd5oLb4gLMenUTaJCr9ymyhq4b6K1UcSg4fZNEnkMGXhSQJh1tEZDDdnGNTZXJmUdq9nPDE",
  "key35": "2igLWA4T8qJuRDPmY9HJWpUxULKGMwF8YYEJfaxQKFn8kNXWy8fo9i45u9EqkqgZcHZi2wbrz3k1F6my9DG27tHA",
  "key36": "89HcAwjnUaoThewHJnHDRFurAMGn4DzVyJmcu1nnRFJBm7wiQ4BS9xRoP8C7SGZ9trU8YdXZs1FxaezzHr5MFFi",
  "key37": "3r5TF2UEqyMYoKH8ZxeTi6ybvrunRWoUiMzQUDUdbufwpk4EA6wcKDt3wS9yodbdoSPPQkL72hk1MbpBV6L4NKeu",
  "key38": "o64cBpsATzY25NBht1uK3hY5euqDbvxBE6bXbibE6VJhncetaSacRLBf69UUBxD2bau46DLFQmXMgiVShJQE9hF",
  "key39": "3BaBJA674ScRXD616e4T3qW7BCdJwZW2MkX7KcbACYzxsq2gL9g1ZpZp5NLAH3sTf8GbGm43sDMShMG1Fcg8578u",
  "key40": "3zyBYQLKa2feibM7hAGNnELCiRoXxDkLyGY7gbDEqXq8gT5qL7zJxJdhgrDmGvnx1M7wtqkupajkx72f46Xm2yhA",
  "key41": "4C4Y5Ap9TG1213BahtuHsjnfnTSET2bYbpFudXUxwqqCwEp5pBeeKZWhvdGES8GWQPDfFGB6aFx1YdspzFgx9fVi",
  "key42": "3QRHy36vdRcNjKWYX6eA9RMYj4p73JokNV9HQrG5N6GoQU8nFQ5eSgfUT8Z786mCXTniECY9Eu3H6sSbNJQEEeWw",
  "key43": "4CnBjh1dagirrVQQw6sptquKWg5ygNWvajPy8BroSLzAE7X5KPGyTakWdvnHrGVPnza3yufa1YMTKNGqdrR2z2xS"
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
