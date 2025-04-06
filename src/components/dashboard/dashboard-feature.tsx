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
    "5hNMbTaMsx982LFEhZ8sTiwdWPJ2hSK6mwbWiEd8bFy27Gptyjdx79SxW2HU2smQZhVvB7ahfVRr2CRg9Lkyvusn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uaZ9ARqfQpwQN2NsXqP2fMotcTzU4k8dCz49LSQLuRzVtVhTcQwB3p9Vhojt6qo6os496WYPL9tGk16c6cLBHHk",
  "key1": "37Cr71nZx7GxU4T3bQmsUb2bmhQgmCJLBJVt55mmh2gNYNitU9z3yJ2Nxiy2Zs9NBJV7v4knXVfAeaYstQj26AWz",
  "key2": "5mko1yMGbyACovU8r7oL6HDrB8A63C8AwS1BSWu5Y5639Ai62qsvprg4BkYgUVnC4S4X198buB7hnTQ8y4PBeect",
  "key3": "61tCEwckfgn2eJ5ysuRDVVM6FRusZBVtYDsXYgHSnXM2Tfzp4G9L6M5khqGiX4s1xa5RPXyHb4swWgDqqJ7haqVS",
  "key4": "4qRKTTFwJ8oBmun5FhUaNaMXuMCxnNuGtmAftWDrksXuYkKeFa1oztXRHiDLLsJywzgpbFcpwU87D1fsZcmcqEDa",
  "key5": "35m9uCKJrMbc7fT1V8BYoVQAsDkgyUc2NzZVCBkjM17vLeSccyLs5T5XuQPPARvRsr2rkExc9u3FnF5NiN3LCNQH",
  "key6": "5YJ7BqUv8MWFEN27s1scsfyNaiY5WYvNihERi9u5rshv7htDm44e199dwnw2f1FSymVLcRbxmRECX2HDZSa7i7q3",
  "key7": "FgPe2eq8MRU5BB4PetW87x9iwCgYvjDKJiErHDgFi5Ri5UgaQq6MjioSnWrQRkHkDj4UqsMnRiVnQiDHtPzBmzA",
  "key8": "2HjmUjsVKGP6UKoM8qMApger8U6QMNK7pHEQb9rgYifdw5UVQeXX1zmrzBQqjCh27BuQqDXFKE7WkRbhpeCQJkVL",
  "key9": "4E8jfsyp7GDF3LEbqikPd6AJm3y2Bqjc1cNbZaQ6DokgzrZtSzZcVWLT8CNeifpCJiasn6wsZpiuyQKdtGia1Mwm",
  "key10": "3gFZZaJY8Ee2KJ5PKRe8xCRyTp9jT8FPKSnkggNLr4P4WHhw7XKVBHoovZ7Jcb2KMYCVNGkAW2uxjYSYpEE43e6A",
  "key11": "dM2UzH2zR9RcXJVdxzLUQSzFfG9vWbFkHqMo2WNPHWhjrc8hgZWx1jatsi7HsT5a1Ym7GbWRqQ7ehcYuGZNnPPm",
  "key12": "3Ce4nZahKtY6Ki8B9DHcNCEpKYrjGqsi5nLRi4uPerh56CiquHKaQPT3pfx1LTDATHG1jirTWUPhUaMjzF9LznhU",
  "key13": "CfjU4bESTDvdYHUrQWYM9gzgrwSUSVCXsjWRFLLncew26fKKuC1p3auxUSHvcwhyFkzAc61EVVPmSRYwUjf6vnv",
  "key14": "5mSoBxvpZjZQM8mNmSHNDu4wW4Y9gG7hRa77pS2cEQjU2eadnpAgky5onKdGRX43NRvjfrXwnQ8wjsj6SrJmnvTi",
  "key15": "2VJGYz1mh2RucKsLjsG1vVWjf8kHhA2NrHuVncwFAF481xDpQ394yLHfUxwCY5qAZ195Gkya6NUuZPRbSyBdQ8ws",
  "key16": "xV1psNv6zXukBdonkQ1GgpWgkc32PM2B5GmF6EDoKwAFXyHyHQJEohfPXPSxLpyJYPt7TnPxkpJZwtEnuTLT9pu",
  "key17": "5GykPhCXSZ7PE9447gNmv617wjBsMxRVK1t7MSMQdC8ismPXf38AJ8qHeh5QR9VZhiXgfcP8rUxma9EFJyyojvbF",
  "key18": "56EBu59L7MY4eJYWgtyZTkmgapja4nH6z865WXY7yGE2hq34yo9wMBRpxPiQKg9G7To4prKMSHzWKuZZHsHzraAk",
  "key19": "3z5AVR6tjar7G8Q4CxpWCfNjHHYepuAMSS7hgmLtjTWXqPZhRefvQrsQu8csbzE9FaVKMjZrRxskUBU6bmKzp2jP",
  "key20": "5FqzgCLWTEy8TDDpWNmvrgdDR9tc5twfhryVFub81s56gJdP5T89zuoWdUbRapHwRK368BVfsYG2JoNxYky5sKgw",
  "key21": "3NQzSjocyMthF5deCXhjs7H4moN6ye4VUCfZiZ9BYKhB1WS8cqSqRfydtoAsGvQv8FQ3z59KCA7xiP4o8h7tasJB",
  "key22": "22YxW9o8BaLA7ZcyKgPeGRgLVFFiK4FRxa4Uutdy4518BffbQATEgsC2hMUrn3efghGkcvuDBHhC2cesaw8urdT8",
  "key23": "2GoumPpWmQdvbjVbW93yWt2u494MZdyAzNmpTSonbNQ5TP5DUUgZ9Zqr7UuCUbRNdS2McQsqpZHasd5vAWWwfZLT",
  "key24": "36aYhBKuk4tUgACq45A4At2WhnQLd1Rgtj2hTkB2fxDBHNrRyDiWbNguuihuEPfs15ciQsbKGPPEs4jeJ3GkiJta",
  "key25": "8dwBuTt8GBsPdHDDzYkFowH2pQRkf7WiUYBWgMQ1u5MM3E3g1p6W9ssXrPaGEEQQXcQ8V69sZ9vRjKT8zyhSt1g",
  "key26": "3pkVnQdKctrTQifknVDy32VLWwJufCxmTLnEPeZPFyatBBJUVDKGDsBueYMYc4dhLqiJSwsgvBGx2r44NF3xAwB4",
  "key27": "2C7GdU9v1uuV5peANzWdyzsmJ3eTuiyufHDvM6p6VUrzYRy5Z3ffYTBnrCkcUFJG2LMe5ZJh97YgEufk9HEnYiQL",
  "key28": "3eT46xUhAGheGGRfSWS76cjrHk2MfzwQKNbMCCuFJFWotX8JAnxpUBcHtg2ckjuVHwDFGQwauyFejYY5VrJQKCg5",
  "key29": "3JvqePcGivzEx3LDAgBRM4iB2oWWZaxYLwofYe8LEV4tsyRLGShKCNJRQDg3MmsE6JkjSuERTYTqqXkCVtQvYDmU",
  "key30": "4VzsiRKLzSVsYUxn1E4UAbin6xchzw3p13DTrwmjzQ52BWkt4wUzNbnDJrpqUwc61VPgEjqjUzhSKXLgrEkhbX4c",
  "key31": "3inSEb1N79MHSjFscyXZe8pf1SuTpQNuLx7HLJYcsVPHWGsqpi2Rs3iTva5DuVhSt6muJSnGWLU5FvckFdMhWX89",
  "key32": "Hv3k3T2upqqV2rqFX9by7ac3Q8m1hhpn1sKsoHGb2hBoMhYUJp4H29daoULGiu1T68yc1jD1kL6KnETHGSDMV3b",
  "key33": "5tJt1eZueYJErWVvWXb8VZo9VWMFjbqnsamzL3sVn6MQ9jvpFbMsSdtva3hbuYeEB9zHewrPQjV3xmpX8xZS3yX2"
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
