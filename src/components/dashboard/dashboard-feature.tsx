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
    "4CnNJWsvgmJgjDzKpmvKxXk5m1VtcLpfLnDA2f1HSvinQMZUmRd2kKob5cJvKjjjXTVCqWCH9V47ekDhDVXTJ6cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zpFxT2ZcfQhRNoRutez4Nuh378aTi7RcUfqHiz14PggdcXZM9H41Wfg48CbuLxaMjUQ1nKQdnKFFHk6Xaa4vscQ",
  "key1": "4HLj5Xnku4YDa2ewyEGmzdpX81AjyRbNHHNQGnxNzijsrySZtzpcJu8vdJcVktE1dNpG3gYgNadxwRDBfuRdNfHN",
  "key2": "HdwDM6BihuxqckT9N3kNutjqp7NYSxzduXRAaf8wyG6CXaE7mv8tCKDtX85GY6aVe3TLoQSJ1KbgoS38jWmDRqy",
  "key3": "VtWDCQL49tQyLFEc4mwz9yUz9Ki7QP5J84TG9LydPtikcsykRkUYqGcBXTM3arfV7Rt84BRi9MeZFN2EtKUP4Bs",
  "key4": "2JAzmgK25cSh7ugawvtetmh4ghm4wTD2ekvAGk9wB3uMW6tUEo58qdkvaxFUxQDq3bU7e6mbGGDcdg8SW2c8y34p",
  "key5": "GBe9CYwsQQKXpakXztVouWMydEXPVjAiD5u56wwFh8kM1U6VwTRE36KLBG6qXphuzg5qr5LU3KLk9BPLqTwgzbj",
  "key6": "4kmcrsQekdXewztTXs44kEMZU349iRTGQKCfGGXWYUsQZwDjHqhV38ZHpxDRDwUKEyJkXaKAX2quBLBt3c1jYtyE",
  "key7": "2wRDvqfQQS2MdUVLnA9nu43xb3zNT7sAbomjvpQ6cr9EppBgsDhonPYH64CzwsUbWcniVLDo1Rzap5TvxFvkEtKS",
  "key8": "2Q9eHmsLL27foMwzBxqbgvUs9fcBFJnsubH5vyXJyxRoLPiz7YJikersjDUZmPKYBnpxEmvy1nNMMQFkkuaLLQ2v",
  "key9": "3AgvJGMZgUgL6Fp5ViFeebckHbewN9wvpjJhJnmPaKCs5LLMtbRXcWojVx6ag1ZTL2r1JTerUwTDU3ASmaZgn6g1",
  "key10": "35pxwdbBhJx4DtDYEt1Eo5s8e4F5w9LJVJoCsWL8mHzgfsutouWitBaSg5YfthhFLyokuWtVeMvSPu4gVweFVudE",
  "key11": "3HVkD6jbosEm1RLgabSpfJQ8HcyAqKUTvvQs38j3WCauVgbgJdwQsCy2BDGzRbBQsXoqZZLdUFfvCuCqRCps6zXA",
  "key12": "5kwcH3xwtK96wWfRyD4RyhnJ4xCuFL56E96u7xZEn4dUgf3DDmhGDNYEieAQPo8Z9RvP1cdwJwYzDx7y424RDnm7",
  "key13": "585qvcqAF4gmQPvu2WokmkMVbxTUuTghcpjtdCTWRvZb1kCB3CDhhKK4TnEc1iTVNHyPC2Kj7dCgQ6j8RicKMmam",
  "key14": "2EJz8dYkoyGMqiU6f33XqvFPsVXoG7hFh7YgyuGKhm4A98e5qWYML4y3odtDz8ACKrz8f9GRDgD6W359erXkbGvF",
  "key15": "2ss23bEkQTNhJkyD7XrgJxEZsy1CZVX9k6E19Pw68CW3diKx7MA6jUiinw3ZuUTQqo3JbvKudFCxVQ6J6XF9K2VQ",
  "key16": "hfp5xeJXxtuySZSbxJj4hNmwPaWzPHMHtnXebdSq5tJw2S87HVYeyfBs6C9gr6hgQv7RBti3k5V6bm7zqdwDj6e",
  "key17": "XLn7NqV8Umd1s18ncni4Er6bPu7bKozKpWtT7bj8ay6wYaZwox7yXAZFfFEYdiKSGRLwNfPGVyZymEb6YK5iLjC",
  "key18": "614iSY9KJ1Dpk9YN71ZwSmH8t35aGiqRCyYuzySVBy6kzJKr5M89rqaXmrteYgikMZ68vBvzVJmht1ttfjkfazDK",
  "key19": "BxTfUNBs5R4TfGCEUbhvxqHm6ysXU83fRtp9epswEYZkdGDL8x52LUuKtHEnpsTPGbtRCDuDGrFkXof1NjH3sTP",
  "key20": "3zh36XMg7eRpaPxiTJGfcHPJLzcZTS9V9gsKXTWAQFhoP5tuUDyazv6Ja4w2f63k8YcAtNxpfG9nJjwmYGVT43hw",
  "key21": "NyGgp7YZvBV4kko2eLLMHGiMGs1dP9yKDYQYjreQKjnuKxCTvcCdPW1fRhpLJFtRHxZrx2rBCD7PzYSc5rSa29o",
  "key22": "5LEgx1f87PoRgoacd87hHjz34XQg9f3CjeWoNQiqr17SQo98xaCF8sN1Eww2cFWQsER2kzJMn9NM3Ge2TP3mFx1t",
  "key23": "4SU3UvYitMJRsegXiXZdJJDGJXV9AU7ZF3ws6CJ53hiGPyWFd85jzggoPHvR3Csie16qcKPzn9oMU8yfqv8R264L",
  "key24": "3Wf6yppULHMwWWZsbMGKvsZNkv3RrBVsF5EUnqoeP5cNHHHibUGjfJc9ZqhgYQzq2voBnnYVCmu2wSTsBbiWhBxN",
  "key25": "4viZKZBK5inw8ZK4vguA8zbfDszakHtRxJwpiNVSDxRTgvRsXWhka6wWAqa7eZ6AN6vVn7QJqB5Gd8iuDBPcyPM2",
  "key26": "4aBQGNvafSrcQJL9kLmU5ec9zVmBKMb52XAkW5rFngxCtS5KYS6CtnHY2VKuEVFxrdbYQVdmivqKzFQ2sctaGo4R",
  "key27": "4XEHgWXTZ82HPRMt184psVdUvT9uYhidgTcrEHhHtPGsFvjyiwrMKP9KPCGKxioJLaKaPTSe8Cw3k5dYENMNkXXq",
  "key28": "ykzmW2U5ToCmUjkswamJTj8ZgM6MrPyN2JZ8wHP5VuyPqwGGaN8WRgJPzrzzgRaa1BQcezQbQqxqPYhLdf45W53",
  "key29": "5ypX3HywTwdEWgc4qVYJrGkdVpm3fdyj6F72CCFWN6R8ir84Pp6inHPYUMFjtUbdkbVDGodZHDwDgwWjV2Xrzb7H",
  "key30": "3wjxbb6zVcrWkaSkFBjHg5XB3ef6gwM9659yDHevQYSqzz1uK59y5tZWKx7iyQAGofr38zYyrFHVcoQKMpeYzdxq",
  "key31": "5QCHHPcaB12Qa4EVgkBcTXF7N2s6jiPdBjMxzNCQDc8V3kZNR58ZVd1RaRZDhbUBC7i6YU1Uw5aXqZHqAGAD4rwJ",
  "key32": "LJRPB1VHsjEMTsAQwQ2ucdtaubadvU31impojNpX9KpPC9HFfAVBuMreAaur5szTX18dRCQUMW3oHNonvs6DMnG",
  "key33": "6znf5SVa4BPpkgUARS6SzCWnKobW29kMZc5xR9KsiRJEvZMETqf7NkFqBKg8MztrW4h7YtvybYUhbiVovYfnjKy",
  "key34": "cq1D4uJp6U46tFysr8jh6QFSFCx1Wy5PTBxXFgabSrVHAAbDSGFAtbf6y76LSDQXs4zybW5J6yEL2j9QcEUf8SA"
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
