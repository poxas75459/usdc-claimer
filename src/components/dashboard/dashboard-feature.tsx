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
    "2LVB1QiEQBrF95oVxmBBMBa2fqWsqrtAbWzvaJ851PERM2khFrSzpT4FNvzcih15hTsnY2xqeNZU1rJFasMmXv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ruNKME2jiKXyx2Zp9N6B2dNHD8hECt1BRFZdYeGWriVmRgub8dLRngwBUDyXspA1JyDESkzVYsXNWctnFFWRjzZ",
  "key1": "3p4omdGfzhB3WH4o6pJp8yxy7BMMdTkXGGkJrKisodQ9D5s1Kx4pyg2d9e6qMQz4jVANjYCxfY5Li4rKeXp7bE57",
  "key2": "2zyR47QG46e1SaGx3LVjeBi7GxFwkY5WUwPva3TEGSGxsrbAnN739uePUWcctckBgXdTS84wP9zsvKC9F6QUSgEX",
  "key3": "2YSqvP8SA9aBfXutB9X1TW4zGFx2oPftm3eAjwWJdGV4QVmSoQ3VxZHjMmaZcuX3vEHx2RPocVJMSaKMV3Q19LLG",
  "key4": "4Lc1ZSxTFe4uT4AnAynvbWrsQEn64K3ifa486jRjEd32ykb9DRJEE6pKyoWVUsJjdPpPQD81Nc6HSoTA7jZ3nzmP",
  "key5": "5QsKYHc6qLCgQYbMMVfiUH6Erxg6JHpbMFNtNJA12gjcSyi6Qu1rrxVE2WdFGYneQF84Ff8jnnd3Y4A6zrkkTrhQ",
  "key6": "4VM6cis2H2eN3EPS4242nM9e2GfqnRnZnpYRPFy1nu3B2YvBAKsRT8T9Vp8ryB7oy3rBdN4azNMZSkhZhCBPyhY2",
  "key7": "2ckGhXDDBPBBRuhjCsPSsDo2WSQAQchmfP1DBhutLKh2PCg4yTwTBVFj3z7neLz2NfUF8GbiJkdFYUNZiLFG8YRF",
  "key8": "fbWa8UauMin6uCCTJZjpvByLGv5CRaTBtHGSCpTwsLe6yfZHhC8aJ91Qz4uVHyWMGpkQhQnvhV4jYqtu6AdncUy",
  "key9": "3nq23JCkMZHFxpxP5GsvdH4Rye3fp2kRE6ATZg5BsbWXVnhbum3E7iV3ZzyqNT9jYdf6Dees9yzPvC5W4GmBJDVW",
  "key10": "4SkbNgHc7k3tzGp7RKcUXyFFPRRiQzAkitNvAbhoQrKxqigtTupgRQoyiSGtMxPzHhj7XBKy1A5h1WmKxfGLdePs",
  "key11": "sZ9SaFy9vkYBCovy9VDKnjqxpcUTT5FBJhBvXn9G45mr42GCgaKojCuzSUELnC6ZXBe2CCrJ7ctLmbd9ZMgHjth",
  "key12": "2G7HUVoqp2jjJVNjNwjnxFkdZ6Vs67Pst8JJ8pKoWWGcY863dyWL8hCUsxhv4HwXfBUEzBHbY3RkJ3qwkMYuAHiQ",
  "key13": "45BmKrXgZg8QSkn3RWYWGNzCc4yVBYYNTn5RWDMVi8TvhUSA5AuZmk3W9Etnjgg1oZu7rp98R6q4Wb9YHZdZ2tdW",
  "key14": "ghqdMLWaCLEKxMCXDhRZUsz5zncRSqJrfDXY3CHNGhufEzkKTyX3w2gotofV48wXsoa227SdZT5NBxs4BC58c65",
  "key15": "4m4qNHQQCpX3Pemxuc26YPSwvskYgYCbzBKQZGuVCznSL9DqURKkYfy36LwvVoVJUkmt25Uq7NStcw5vdtG4vETW",
  "key16": "34i2YHGFD89TUAiYe2mEjo3Ni6G1wHhKDiz1U27xsy7ZFBb2XrstrmAEpvZt3gSKCzaDwW6dULic2fnjfurqRvyC",
  "key17": "PLymiMsm3DJaoYNKpcZdhEMQZ1UCHCUQt3gYwVGhFyiC8tADDdUGR9pfEuSibQ2w5dnqxUk5jUZcYfuuFccVWho",
  "key18": "2XLDd3hSyyZLHHQcmcN1GXMFwCgwntShCUsQQKHgVgmCNPHJmEHzBAgPpjFnqi7BxESDiWybbjppoqoFCbTipTfx",
  "key19": "4mgzgTHc5ufh5cdNJLqVkxdv9W5gvbXxhDHduFrTU2REyZ5rikKckKt7m4idfDfYondRvyT1tNW2DX1Sjv5Vd5kS",
  "key20": "4phbdwForjd2bNLF3mMhYu65fayAumEGFxACTTE8A9QuFDonxhwbuj8RLdkBVT5T9CXeWuM9241Y8BVUQPXHwsiJ",
  "key21": "PoVjVGAqGSzJmGjYPA75jcAbBXNNZFDoHoX7vLhRuWc3Hv2Gv1TUtzjmrLYWSSFNMPTrb4Qg4tsK627RssJAMeS",
  "key22": "42iZa1fqEGAk6zLrNyKkbo6GdfDbsWtAVwFaMBva3C58MFV4fr4PhQVuYhwxkYznxZaLueNZqUYknbeyaEi552Q",
  "key23": "2CF8PDX44jYMGiFGTJQoNMZtmFHB1J5PJN7Gqo2B5WPqSdzqgCvBserE5pR5UxpN5yWHKBSs6BLnQqap7vcBuMD3",
  "key24": "3fNqyUKXc2Qox8pnzwZG7ctdScE8Ds4wcVWujk4u8vP5qssh9PxsNSdhE9AXckU5JxzxpNYhXGeYNpkHHet4Nqpc",
  "key25": "56TxnmTT3xdDs5nHQF1GuvANQNqq9oZSQ64j4rxpbXYGTt39h6twb9fqGEXRaFajeTworcLwcTYGtA6J2izSo4tF",
  "key26": "2ZDskjppj28UANBCBp68f7dBrfiEPLSSJHDKQHKXCiQWY8KQ9pqrtt1uZBAUqeG8ryXUQLpLkmHhedcmvc5UG3a1",
  "key27": "4yZwNqgFKdB4u1zfCQpAYi7wrWXZmMqJKkuTy9pVqG14KZZNb7b53GwKArGnA1VByYUdxXz4YHuLxJYtEDoaKRi",
  "key28": "2maw8VRdSPNZQSwTMnymzLg73e8tWJxzjYwEBY7Svw1Q7ic1L9tqJzJPavHfoBp1uhjbuJK7At4DWqJ2RDkStEb9",
  "key29": "4zVHpHdXtFrvfvdxnSXqqsE9E3FuDZGbwKzsEyXYstPTzAUFSagJ3dgTqLQfEgNxaCxAmLF1z9ek6hUxpJYoFtVQ",
  "key30": "4UznsM4Dq3cixmLm7wSX573YfN8GYjoTeLsq8B8rkJ4Jp883hYKKtqvhdbryRhwz5Tc7C87C3G2QePiRywsBKYdL",
  "key31": "jKaJE8LK7Rsn1Hhet4oE1GDMAtqh6YhiCx7EMM5HssJFCg8AzSXB5KBn1PyKpoYUFjaxrwpBf9tNqFgAXckfvgH",
  "key32": "2E6qqDuD42CXJ9NW1s4Wg4NfafP8YFevBMd5DPxX9Aek1B9ina4C9m7YVJ8obfNSJmxKCrokfUP9HN9ZiEFzCUCc",
  "key33": "42xfBomNPXg7PH9QN1MevvcCULt8vw9mMgcrTWmVWRA2sCP8rJMfwa7WRMMkyBczoM7KdqDHdNA9ZHaKnVwj5Wmu",
  "key34": "3GYXTGFn5ZPb6Y8Y29rZCTEjGSEXaFUpNs94kBkk5mpGzSiQVP8Q7uMT8Foz5ZdGQD5ZwVvdeGM5RVDev84XeuMs",
  "key35": "2Vbgp2DKw5sCZ7d5nQBibWyhXPoJys5KBKRDGVrPA1BMSCEaUALHizXhkPMjtqNFriRfJ9Yt6kPHo6W1K2ssBnp4",
  "key36": "p528bdeAZe1DhXhcTs3ne94fQFCGaf6oTfgd2dg31jEHQLSZ9isCAkBn5eiPqmnsFSWmyPfcMU2aNCfmQ1fKyve",
  "key37": "5ZzJC8ArdKH7kpr4afYePibom1oHDCz2bNKbc7kTxjeLMziHDUWh36M1x8ZBmYVWzHGw8sthYxnTuxfFmbHbXMcB",
  "key38": "3BxERWvfmtx5BSH9EsC7jZanWg1iMRTu2X1fvFaM9o1drqbi9QUDbjUXmVN3mo3hySXtWUwriNiBo7uKAVoET9Wo"
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
