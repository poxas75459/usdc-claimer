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
    "zsGGEABAogGdEpyZGMT5RsvoANCbmujVspLZVnSJXi9eJjVBxTSQ9fCRWLAKnGmqpYSr981SrK2hBiBfCt2GWJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PXFRjwz3U7K7mCkpqMFGZnD2rR52ih22joWd2hEKrukZVTT8wfbNRfKUcb2DpGh8Lyamr4gUPe9paLaQP9TpcDe",
  "key1": "5AYJeDX9jwqErwVJUnMsKYXMatFavKYBvw4cCK5843bRn4EDMU4gPekAqxZCCJX1Y1jFgKbnhMFHxSiqVze3M812",
  "key2": "4ZEGdUVA4rGkh7bBUhTpJLKyKYNVkc3kKnmLdwzFWT3GfkN6PbPeiX9yCYRCouSP4EzV9FC29ptW8GhBzxqLcwY1",
  "key3": "4thRS1svqEXDYJXdEoJkjCMtp3JS5yFwTEA1pooA2CHEG9dLXPZCsXgnCEMurh7ipuWBuyaZZx7KRH13bcVZJtUH",
  "key4": "YHKuqLe2hYc48YPMJSYUe9NAvNUCEsBPYfsdkD5qzRfCyiSFXbtd9v8qg9Xav6RDa2d9NsxDiY2eM36QxkxT1tY",
  "key5": "f1tpvY4WBch68Kr2reSVxSvAB8RXp7cg9SU9NCvowfn1nxbPvpDkjVpCnn7KfBWKAr9P14E5pYiZ6oerzj9S5KC",
  "key6": "2jqjsdPwLKGasuBLkQHc3fvpaiXfG59zrNSbsZbVSQpGtyupyEYVP45CBzPnmg7QwexkPU2HcJtwY2u9Xv5Sv9MC",
  "key7": "3wFNwuTCVxisRBLSJgAYAW1bEyLpFH1ine8Yq9zxz63GS8aZhG7f7Fj1xVKWcZ47qmGjvyjB1CHm1U17h9JajupU",
  "key8": "4WN7y7ReXpBVG4iPSVGukRy6nbKQarZ2QrdQzAHVQ3K5tJAWRzWP2MaT8NH1SkXNGcKLQYZqwQr1LVvfuTCz6NC4",
  "key9": "37HK1AVX3rqTwifvieUoLnaoefSMZtPoNzDHrWnyzhp34G9VeF4gS3y5cybhdVAoakjdqeyAfgUpt8BrCtsGBSpZ",
  "key10": "5odzpj7PGaYS323YTdeuy97gLNnpB9rcXXX85sVM63ieFG9z92fzMM89qMN8ip4HeQHhwUejYRu7GqbwYUzXawMG",
  "key11": "y7BwSTfqRLufa1bKcdfQdE85aF9e1kDFbTCA7R9psCdqcpVYy5bkJKRn7YSdmXTXxVn2iS2V8KSQwtA5H8ea8xf",
  "key12": "3QJF428EcuGmaFYTnSTunU2dryV9bh3owmVeZfZ25cdz5YTogz7xzYSD337PE3H1k6635PN3ftvQrD6TnCNTib1M",
  "key13": "2ub18fQBfhybGLMdYUJP8bPTke386gY1TXfNBkdD8L781CoRJbk3cny5MK95WJV8xuRXuXQBXpvdAX6GdAVCTTyG",
  "key14": "2BqbsF8ZZZTv3x9dfgdg1JwdfB2cG4f1un21fTqRJCrBEospP38R78gyt77U8kyykGucfpYCezHM3TmSe61jZ6kv",
  "key15": "S8LLMmkGc1RdE49mbFxiv3Hgs7DmXURV8cq4HMBfwvrh5h9PBUcyzSDU72AnhZM5itQLZCR7iqs281uZK2UvYfF",
  "key16": "4zQbQ7i6LqUYz7ZPsApo6KGsTuSZ5i3Go9Frgk8JkDz5zB8iuuKAfU6Ygp5zNgH7KS22GoAxivYNZCWG3HkRMWHm",
  "key17": "5K42GJXyfkzqbzZSwpt3ApTgDQQtTdsby1oLWC1BGHqsiyTHToFCcKX38Qer9NqwBVbZRyym8i8PkZnkQQBoB35a",
  "key18": "4w3ixoAmGDXfdw8p6BfsYUPLPZw8iigw9rnyGwEpML6ieURTd6LaWmRs5CDfmW4LH7sNmneKL3FJW8AQj7ReHVJJ",
  "key19": "Wi4AT9uh1NeaBG9WPBxRumTUUsQc9uG4C4EdH8DzjbAFq4Tf6SU3RpyTHGGw49XGeQKwUUDmrii8EaYo4F3XUsB",
  "key20": "2e5uvZxpZnpJEKP3cY5y6UzwjYTqoubzXRzuznAgJuZmN1hSXkwQzSGTyQv75ovzAnFAkCecjFz9nZUXDNtqo4X7",
  "key21": "3RFeQXxmuUikx7dyPrXqQadR2nTEgd81K3DnBqHXN9YyXGYerTF8ZRu3cFeiwBz3yGFkHmxco1TV7wwcwwG4GqrR",
  "key22": "3AH9A48DdZcHLABqjtH47cNUYNykFrUjHLRhEMn7K66KwhE8W7t8TAsi3ap6UXvWLwcJorGHFL2ZCwgZ6xxDN6yB",
  "key23": "5fFAnnDnLV3RMwDfUZxPgeWpNRw5E5CCwXkw2HooRfovP1PLXjzaBSgKUubMtksUZB2JJcH9ehxfmYWmM1iyGkKN",
  "key24": "5c1fsq54snQ9s38RBrZLXipSQvVUiJkiVoSkEbxcEvEFkMSS39Z8trFja69xSfD4EsHGjw3jDNUoq7jMQihJiaBb",
  "key25": "gGDUaz3myqSrYgeLm3k6bFwc2fBwr5BksttrGRW63VHW958F7BR9MZ3huLbwVgY8Tjy1RjwnDBX5aDeqmP5FcPq",
  "key26": "VUsb3XFjdwsiHLiCdYNrF8uN6MsszEK7BmwdP383KuwaeeJnpTMZB6yMoDRMoQrCRC2tSCCPshE8yNc6yVETJdS",
  "key27": "49zkfWjDfLebcK6HdLUJu6XQi8FByHM1NE85eXMuyqQSDS6ADTqoqRHqsgRR28waiRRDtdBxv9XkHwmmrXYJRTet",
  "key28": "5b1L5h8tLQkWTGwvgM3ybEBbr5jmBj5ARmrMerx717GthMMZ4G93sMnJyjUcxrCo185a6qC1vEYM4tvDvPagNpM",
  "key29": "3hFAayJNUZEu5SGbv1JjC5ZzYEb9wcoq4xepAqwC7TWXhGRLgoNbiiPAbYbLJZBrShwkj95MDtnTamSp4L4RTyhR",
  "key30": "3bDPycL5CNdocWq7MwqfbftiaYivqQcd2PwP6vr5DthBjJiV3RvV2PfmLeVanbg27ZgGvtnyHD5Cx6Qhs86XgiPL",
  "key31": "2ohfZwaWUZ5B9fHdzDKDJ6TdmshWuX9QDG42pLfM8wqPEjytKHaJEHBKU71EzWio25dX2BBMA1kbdUr7C3E9JwTV"
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
