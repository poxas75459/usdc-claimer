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
    "2SjLjQoXNocsEwdRm19A5UgcHgpknvCdWrCYwKVLRrYy2DK528GCUER9ffha3sFyLg6qYXmWHayvL4DPNFmVpspG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kDBpohutgwahLV3pPivz1DmyNcL7DQzLawbgCEt2jorAfggCmUaX2McrT994G4od8bDXqYQV8jAhd7yiibGhUNn",
  "key1": "43GRQNFpJcwsEyYtC4iCY4WaFx1JuZpR6xDfAGWg1VVrEYuSPb5STCT1BvLLYkGKoGCRRHDqH5ogd7BAZrrDywKh",
  "key2": "2urajNaghTfXn9C66rYXN4W5nP2S25NL6Ks1uC8FzPm6cr16AnwB5aanZc517TYpoowkzkKWqpfNahm1XRnHmR7k",
  "key3": "t32n6Bdpp8s1JUsGnBDTqP6zHZtwNd3YV8xxge73mu9p7TUJjd675yF4YSC5APhmAAq3QmDdDvgA4uAzMFs79Z3",
  "key4": "5hd8eJvTR3m5jjHVvnKYbWXAoRwm4RLSRYpPxGMe6G7EYBRZBaDTX3ZAqztmdJxFRQ4i3gA84CSKckYEDQvY4ZH",
  "key5": "2i8owKM5mPcWvq1t2MaWHrFVxaM1oc7AkbHuw1vetfXD4ZyPxvracAazMvtuFxUSCgu1Vdn8F8iGypDs8xU2GQsz",
  "key6": "39aZ4a8nB8gxsR8aQZyXDcrUeCB8vboTtN6FLkCPzTEirVGQoGNm6AXUsCQ83sSixGTvFKLWDKfzg1sYK55GbPk",
  "key7": "nWs5wJCHwBTauvHY5GhYU9AeL1q1dapaEpY3kwYeHVgXmkkT7w7WMBag9sUGfMGfCApoh89Jrmkdgn3rCKrRYwp",
  "key8": "3vy4ipnFWtsYypK39WTJxvwDA2rg6TgH3kcvSxQx7RDwfTLuk2QJwGcEuYF9iwdjMbwAqLscs5oTPAEgsVpGfzyz",
  "key9": "61Fd7zeoQ73oMZeNiyD2Yw8PyRcXcFbKdD9j4E4sHQdFFfdePAc22GUwXMTrD4z7wa1v5vLFLqh5NoYpzkBsXvT9",
  "key10": "2BuRuSqkKXqxdNpxz4HdQWb5UGYqYmsVDdQzkq7h87VJ8KmB2se8SgAvH5znC7Gv2PZWmbDXT2vNq72XDCuDBq7Y",
  "key11": "41DN9XchRt3DysL8kanuCz4XHdQUGzu2YdRpgBqPqrbPrnePgBxQ4tUhJVRjuEJAtVLPg1Z5b4z3k3A57BUvtH2w",
  "key12": "4mT1CzvK16QW4vws8GyPtGoDdsDoVoSa7BQLRLPUQoE3TthkBwzsUicfni3EJiXHB4iHfdYJAu2QKTAJbk9YXsLf",
  "key13": "3GBXYo6Ht7LPcoc4JbBoDBWuhNWUH2rC26pzozHTu33sYcgU5yEaV2u27JcaufNYfbeHXwky4V5uPFSi4H3CeE5o",
  "key14": "49Bj5W2iXPavX1feZVxjh2tAViXC6Xi3KRFBd7mqHyuvhgb51rdobc6FV3AchkwshmUvS6t7WGKsaFWwuSyYuqvT",
  "key15": "usgBYAU1Vep7G4yFfBdhapyj4XBk9wUpNfBSyAeUWwCLS898w3rygEEUAumrSMQbT9H4v7sg7HGsSyfXhG59KG5",
  "key16": "4PKj8ahnFDpRKyPu3Lkzt9QMiiVEVaRpoZouCPMAnwcGspZHHHovKW1MZ8Mc47urBhnRj9feSLdnqxC9sdixwyzf",
  "key17": "2Wn1nPJNYZ2iHDpv7k62UbVc5E8Sd2Wk4FwxxusXD1C51HtcVu5NDE881rTAuo7gF9PG2npxyqwRnnC7zc2uH5hY",
  "key18": "4bkNdixMrFFwYLyzwkbb7Wds7TnoxX3GqzcuMFTxGkdMDUPjCbSED21XZScgfM9uHSmH1cDoR8evtykbQJYCQRKe",
  "key19": "RD7ZWsKt3N3HBFYKLwPrf8Qkg9SpDp3o8XFYQTogkqkLkhYjY9Qh9L1dU3FtBKn9dYCHrDYYnUCYM4RfZxpxfT9",
  "key20": "3R4S6wv61KAE23fsAXkVUPXkC1XSaySbLJfPcDGfTuHuhGA3Vqv3xb9N7xXAkEkxWxja7EUQ67AoBU2EX9UUPfuZ",
  "key21": "2Zpx5c9xzfjAJhxVuSWBw96bsSaRFT28kHaVGmQsG1HUaPmesWtLGf1N8uSd5KgpCkHQ6jfr1mn5UMy889mQwfdN",
  "key22": "5mtVruvkU6Mtqyfhq9P8M4nAaw227KaX2B9Hto7ahzyW6EdMsyeWKQbn8nzNmDkF9fKNozWWKdF7YeNYWiNeBLW",
  "key23": "2q3VAtMpEuC74wC8qW6HC9kxsaPjWpF2EXhoeZNjuSkA2rmMScZrUdLSMZtbvaLoKo82xb8EdCdRFhY32bttB1CQ",
  "key24": "2qJRdeirJKuUHxVugv72qHsu8hD1QzkV8NaXqWanuFcEcBeNYFQjphihJuuecRGihx2pZP6SG6nYgpKMABbmdp8y",
  "key25": "5kGmJv7tsBvfwuXoys9SESXTq2ppvzTYGp4PYbEJRvCJ1UvvgARP6NFPu79sxvEvpKwsK3XQ8W1jatjbs8DAEL2H",
  "key26": "62j5AqWVeRhYcoGnMuujTRHFKsjgwt54NGi5t8BnSFyMB7NmNVCHERCxP19xySN9eLKAU2qnjGh3hT6jRzimt3aw",
  "key27": "3X5U8dSrMuJgFy6hNEzJmUta4kEtWHqvUQM9Sj6K2e5f6Q3RAhLwmpJTEdSekq2quHLm6yf7LhajKAgjDnuZ1p5q",
  "key28": "5JnzqfswQUw6bdanmDCjEGXQjtUnXbuAfBEwLsBYzPxov3aiBnArh38xggbZK9FU2GrwkR3QkXj5EkQhbnLxgUSc",
  "key29": "nVNWrmTtAUjVB6DPTkRzHwwi6ZtPxZniwdDTGsBYQhsYhva18zySRXVqv4x8uGjeohdUFRbHu24GyGBeQsmgtSN",
  "key30": "LJ6JxwcJVKCRe79PeoEF5kUkuf1znwqricRZwKURvBkUAJxtHZVGBkQc5C2MxzThCvN9vo8i1DZi7DKUhgXj2KX",
  "key31": "3BxxGs1QDTCAiJWs892PVYxXKMV1nSSH2bB3fSeP1vPrhBCsfaHa8tkXPjLLkeEs4Jar1ikVDhRoBjzaBffbYm2Y",
  "key32": "3MCtsPtdtQAG31JTUsLXWvvgK1geBRnWhaBSfpN9Ed11jBevkg2oa39Cv6Dpwk4g9V8jSnbE33HmA1CZsidowXKb",
  "key33": "29NL4oqXp4qZ1G6KA7cjanQAe7CcFQdZ1qdTGMLGSTVfbr5Y8a8wv3XXgAgNAY9vmbvWfpC7V5KHi1xtEoX7SW6v",
  "key34": "3ua7wASSahXG9JB8mDghYeekDQV3crP3ZSFdQcLTQFXAkqddH1FDyF9tZ37ft8ujPqkx1DuYT87guyZMdsmmBoWT",
  "key35": "569it8V83SHJ3Rqn5ajXuTH5biAPFXZpy5Xw1S1X676CNmrusuuWPYL7ba1PtTvgQ5g5aLjHkLFxL1262Hh8DhZ5",
  "key36": "2FMFi1xn6yRtAvE2EjGfaAXt6aZ2GTUUACiA7PAuBR863uEcD53BgC2m4cobBP67fzAe6MkWFTAwnSoHmNFqXXD2",
  "key37": "61YzYcPmTE6eKuCNjLSAuUDZsVn9AqjXd3ycUXYuhrtX1uVKDAjeBFq8vuxoVPP5LUZqA74fX5RGCr939fMuCmDE",
  "key38": "4jw8n2bXparJJpcSpTzCGSfvnwRnqvyRwxnqdtfcvoLC8PGqQUrn8RbmmGxa6NLHRmjbMLBnwvRi2E3kwEyLgQH4",
  "key39": "2SyneiYiUaoFGQEHSWWsZSUiGxkHiWd2c8cM7RjMQCawGfUJAD5mfZgRYNXNYH6FCg9Hmxj1b6YgmnN2rL8ACKZG",
  "key40": "3Hcqo9VcFFXwrtTCStbqU5hzpym4QdoJ4Ae6iYmyQNw9yZmyedUPFAMmMoDsyKqfrSwLHouDsaY193QwbHSwkFEh",
  "key41": "58KGnM2aVBNWJNRUWa4niyrEYAHNZbBwNcKjyDciqET2497vaEbnWkaZsigLBE5rX4Pmxas7Nuhha4KzCYFi5snJ",
  "key42": "2MqPiGck1qtDUBtZASQiEmEAs59QNrPM2k3qRwqxDuzkfyE26mS5bEuR5HhhhhnbzbSwVgurPqWjgMmyeFzUgLqq"
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
