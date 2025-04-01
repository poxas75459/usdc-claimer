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
    "5LNgNZn4DCBA7GwB37dze1j1r6wudjM8DnVGX1Lx73E66e6ifT2bUTPsxfyYZtj7H4DCtRX1zcYVGqsz3RPXDngd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JZkv8HG6YWdz9BPvwqW2z8QxZuoELgLebV1xHiV6DztALrkFEpF6D2o4Jdegj99WM7dP7okWgtfAGVBq1Hg2Wqu",
  "key1": "4Piq1HT5FB439sT4UNpg2PTbB6nLrtWtDyXgxYXBbRqQAa95rQeiuGdUZx5shLHgPqmoVEk6RL5NQRQU1wPvygNU",
  "key2": "4K2MTsXkrCeALpUVVZUFyjaiPcZd7fv9oYXZFTsct82Vup3soV9qG16tfNphWRgRTbQ1YcwZavPHc1D3xkErp6Kv",
  "key3": "xZymWts6qHYXcB3R3HnCcPW9M27Wyj9QCnrmaC7PtQQ97zreHheSj3RF9XRE1PWHwv6ECzAEVfb3aALsYAS4urJ",
  "key4": "Gcy11Q7bc6VjvKSjJoySXGfLJ1eFvKPymojjn3oksaa5vxw8sCczniAbtKQ1yyAYaTftGWjV4KUv1vhq7KTb4qb",
  "key5": "3PkrSSM4fPJJTuohZr1zT5iCy5mHNiHBLR4XMvvVa4F8R3hd1SthZfp2q87inabAcXQr4AFCB8siaDinAXvPbrEq",
  "key6": "59ECWoAAxem3yKX17g42163Aeyx8Y6Y4o5S71cuxQhaaKMWNqyqpbtXN5kxXjfABr5HFj7rsqUCn8MP1H68thMAx",
  "key7": "5zjGGU6Yd3NVaXSxaDEaxapYbRstXAFALKoDFxJH4fE7mTDWkvwRwEz5ehqfERQs6Un7dH1ADn8qLGHHe1pyov8L",
  "key8": "4YSSSG88pgraw1KriWnE6txeA3UXSXNKXePSZNBMHydsFtQ9oc7gbL5UPHC6BDxH8vMxPrHp7atFGRG8xhF2stQR",
  "key9": "5j5KL7Whx1cWPWhAJfVEoG2YkjTGS9nA9rqn2aReq1tBsQtn2NuthA3yQLKGevzLpZDTRuZRnAEAxTCKedW5FrPo",
  "key10": "3Sbm16BzXg6wpbcrKj7fJXsmrvcG65jwucB5m4dUpYZspPvbDT7qJtF6MccUMqu2PYvKEoxZHB1LhsuVZwmteeue",
  "key11": "4rb9tUMmQxgNFGvt6XRoZBit28aqfhhxr4aynjzgGo8dxL8R7Ppsu2D564KbaxwevbjgqksMZkAJLUTj2jbGqJoM",
  "key12": "4rjmVqcE57GjYtJh6xMMX54FumspSgPfBFAe6LMstLvB8wB2HXgbBLYZPyvg5sD4uCDVrU5Z5NYgUKSgHabN8xnk",
  "key13": "5yWy6i2StVCDKhUUSRgw14HJDwatT3EVVUJA9Zfgsa7RWRfXydGoypEfXmFwCxSyaDtCwHnq5DyXLfYQPjEvyZ28",
  "key14": "6GgNdm7afkL4H1W8tVfXgCtPsNcibZTWRLFVytQtHckReL6MZuqXfVvawsBiBZ6UxSAPidnQtZ54jrWQRHkRuRK",
  "key15": "q1Kwjos7wz58x3VfJhsijoe1MzeYvZ8nJuGDzm6CB9BGrPnSs1PnMhysAjFmymrFx7t7fAUePKWaj9tXjd4Kz1T",
  "key16": "4et9vZrrpFkdVCcMpU6gwSUU2yqYvgWHSwQrUG1p8Ydva9wdXkEtafKC8ncFWFhRbH1RyLFLwgrSCFHaZz11gYR1",
  "key17": "2sTvd9GKeNG5Wujrpy7UtYrUZEmRw79MGuMm65uivizn7oMeig7hjbFi5QJ9izTjjGL8emwEnnkWM1rhRX1e4EP8",
  "key18": "61TCefWQwYeSYyowK4NJyidzRHYLoiqhyoVRFNoeqozpCsifv5ZWk3j4Yzb8GooogQfL5n4Z7ZqMEAg82efbk9Rm",
  "key19": "5Kc6i4oNmvxEodi4pbUQgFhC88kiNC3FmF4y8qh291GER41Y6q4pqZiMY2xhnkvcfpv4gK32hbJXBY2NECxL2uCe",
  "key20": "3nnQTPyG6EckjLK8tpuNzVro8QqJxkuui3cUK39dB9K9QFs9TnyUtzjw1muoJHYU8FSoCRBMhzEHjKQf7Mv3Gdpp",
  "key21": "5GG1c2PQNXDVVXXHZAAwtFoykEpESkUQL2qsqhTDe7rpwQ57tRTfZBEsTFd8rsZmvyu7DxV7SBDpEEsVUKL4JpuD",
  "key22": "32XxBuL21GPCSZrG9tT3ReeFwfnaESVszoVhPHbwfM5BjvgZhQ6PgL9KNviEcXcDRn5KMJtZUDUs6cC7zVQDDxyz",
  "key23": "2kZmxDGcQdYDB8D13rXwntP7vdQCq67KcD687SuzE2HWY78CEM8Egb2tL9SnDv5PEtqEsxe6FJiNR9kyS9WfxFvE",
  "key24": "4jMQDdJ1MJCRYTutCtNTuxpDHscHr4jCKjmYKgknYDGQepCvzYE9HPqiYmfiTnT2U8qZq7oLmbqjmaYGFaTxbk8a",
  "key25": "5B4FGXyHw3WV98SoqZthcTVJyzss5HpmKC5NcNQHhPFWFa6LP8KzWT9sh4YLCvmPpbs9oj8kxUvNL1umrMUe4apK",
  "key26": "65jx3XeYNodMVEzxbWUTsLzrP6APuo4hbZWeQpXZaEnARCT9Tq537nh4KKKdhy13KeVcFhp3pi7oY1VjrH1uU9Aj",
  "key27": "4SefxfKoW9RdZFhHGCJW2Ww3BN12n3r5jF28efHFfqTVUaLZ49KQseQpjHU4nuQa7PGP6D7QqZ3tUqzQvTc8EfzK",
  "key28": "5jSg24sUz2ua625VD1VsWSFh5FcJqEXxWozpc6514s9v6ZiS9fNJhXFhFqJZfiGD9oLDcBLPPkTY7hrj44pEeXo3",
  "key29": "4BaKACFisK8KqgRooXiDyWRg1gaRSnY9QdvKtFfScLFY1p7mZr9oCukUvbWvbZ7TjKBaJW13VpWxsi6qU2vEFCcu",
  "key30": "4mKrxjkP1dsvthkZHbgr94xkZoQhWdqfzDWjB6ummDRa3icL4keqB7jx6b8RbGvREzN4BB31jrTjmUytcJTEsA9G",
  "key31": "4izNYRdVjebx1gQjBYQW9fmcEVaTrnYUgY3Z16BLhSgybssrjUg67mgfzfavHKSU6zuTKPAcLGfjUy74uvnFAJ4f",
  "key32": "4cwqfh6C58KpY7d8QmH6TUhxXokC2P3PQP77yCoxkQHGEN5ju9W3WMQUieiERK9oWwwENYuaGojY43So7kqWVyug",
  "key33": "3sDHkaL3tEgcAouWT15aan4c1Lpf9KpSBcHMqURBjjRF6Li2ZVirEgGcyNqqRYUGiZMr2YnNMU4LU75HqgBnKrte",
  "key34": "5ByTcN1k6t6bWcUjgMLmxchuPy3s94UJY9DdCPoFXRkd5Ve19XAvkqRAoGWYLgR6gDcZbJHr3uDoFgJSerXuPJDn",
  "key35": "3LK6feCGtLQtt5oMy5869n9XaTG9RZJgbsPeh4Car6KdZmZjxGKhr8Ck3ngCYA5bWoDZosGDVdgVPvcJSm75cWwG",
  "key36": "2EWbgjhgNejamRecbNbDnXBUGhDAmo97PbPoLWXmM1Bc2LVK7vTzCLzMHmSELfZLY4nLes9ZcnBBTiw9NgSvCnbH",
  "key37": "4oaUJQSH2L1DQhHwCMkUfde4kmU2Xa4u8CjTWHFQwKuFfoJaLvb81qm6SEb18ducV8Cz3S3b3Ed12aFxTa9AjtvN",
  "key38": "2doHx8qUTJDqeyzAHc7NsWwe56PS9wLoS8nB9DPzNRFb9NYXK4LqSHhAhWZr7k4N3sbbFRa3M6LRKdPmVYtzcAJy",
  "key39": "4JBfDRqmJpBforLG5wXCr6CSV4dk767ywyqFJUzbsWPcTnpX5vUcZxJPRZHuXLgS5TiZX88jsmziwL1zQWxKdkn2"
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
