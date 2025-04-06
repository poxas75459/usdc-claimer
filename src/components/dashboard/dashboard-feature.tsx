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
    "3RrWXLCgr8sm1y1fZiYVP1tLhaPan9JYzd2mecRTr2pbhehTEDmqsMnWRPrVzSLjPbu8CyX1K5HQL8Emhm5TgpVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q6qdYf91mxK8juhC1q1XBq3wGcZeS9rguEpix1ccfkAqDHCvX2oQJiLTjqNr1tTE8RjXndppknAhB2Qkz5nL5Pu",
  "key1": "LEZo4TUFuj6cNkw5SJbPGAGdCdd9VifxAWWqubsxZkFPJ6DjjvUEhvbuuM8CCz3ZABTFicvTSKmWnUBUNtj1S1S",
  "key2": "4tQXuMTm9jb9VSPuk3CfCQNDir4DVJPKgtqSApEotMhBhHriK5ycE8w7QDsWqhK3S31aCbnV1Q3JZrRhh51DP9CK",
  "key3": "65GC6YbLzHCc7Kt4Uc5Vkufuo5rBgytm28qT282gq97jSCKet2mb78BTNQcN5xkh1hmRJfcFKFvNeD9gNKBNfqvu",
  "key4": "2ibJDjk8iuM2QXaAqG55CRdvyX7KMtzTsnuncTDy36fYw4UgX7iviwzXzN2BK7DzGT4DpxX9921k9a6w9241KMdr",
  "key5": "5gPC8KFc5aKCGGiyNNoeX2shdjFYCdtpdYpc4FZTr1Q8BibfRFLx2AKF3zEdUHqH39Vw44aPRvCdabQWPYLqLccn",
  "key6": "5mxPNwLP5udpZLt7GXdcbjYytBM84n66RyjjGjW7EkQRNk4JdpEcqkQz1sjRYrZZ2StA6b1fFnpzh2XSuq5j9jPv",
  "key7": "4xXVSRggWYB8tMGnGugTzC9PgmdJ3F5CysM5tZwykbopFMSneJ7UNNxMW3KaxeEP1sVUFJsL3dbfQSZETEsvCcng",
  "key8": "4T9hbyUf23JDmBsxyUhWuphMovauh2DMbFtiicMBCW7LMRyY4FpCmr8RSqsZyc2rh1CAFhj9grpu64vBppDeFavu",
  "key9": "4ApqfQRySXTiShHi6sGiBu5NurDALjtB6zjq95NFPf8GM6G32crCkH4osmEW1ciinaFDTH2eqZB5NgQVVKshoNyZ",
  "key10": "4y4TEw5vKoNmnQSLyHZJbFygAThdZY4mvzA3268Zzh6ak2XDSo9sUTqPoLYw6KdDZfwedLoxn1Z2Pehg1NujzyK9",
  "key11": "3WXsmMFvaLFn2XxnFDyHFfHXroYdpb3xyac3qpU8VEwgSYPcJvs7CNkLN4K5YnoErEEHbKwFJmaMJa2d3zSut1ow",
  "key12": "59eHdcUGxYD318WZ1x65hLeCC8W3aC4TQP1G3RFQHrmE6YFi1tx4UYBfXJN9oTFKjup1a1GGi35n7bWDqDf1i385",
  "key13": "3QemirDvtmRMkVLvc1AZrk3ZTQJCmxSgZRDWp8HuJmSm6R6UWc563KqtVUGLVPHGGXVTuGngZbPYbbd1VRLGv7C5",
  "key14": "3DBbp92zDWn7ihZfAA1xFwKfH78ETuj6isA1F84WJStYTjtYKgnXJRmoV1vGonZXppj3DzjBtdXqTLH8yt4nxnqo",
  "key15": "5FxxLvEchnzwUoqGe7wDMxzTY94zQbgGD6JQFoAGMVVpgnQdCA2k43pPGuyiyXuquEx8rwGBwpTNDmERrCxMHx3R",
  "key16": "36tMshPP2bWHwhkiHF2yx5g52kfCJ2uZYoNqtXW1QuLzNudLm8xN3m5qCVA2muargZdkUFULgcmsrisUAh8vsba1",
  "key17": "48xcah3PQoaGHMb8jBN1Mmta1aZ87KMZGQWdobFUPLA4g7bxSbRnZEJhhnHpRe2F8u3UZzxBYgw5ZrPamZwnJjVw",
  "key18": "3Yu3XXzwxML6EHQUbdH6aiow4FL7EhMsCF9LPoUbkx9qtmhoXqZUStu1B9XTXPZYyD1otvpDAXG3c8NqUMa5ZXze",
  "key19": "2xrkU9hvntdCLixVTSWZ2jgeAqbKiwRujTXd5tqudHRHRqRwaMfNsy7RZ6gbD12MUMohyzcptKrRQJ4LeWc9cPCd",
  "key20": "5zuvTyq4sJA71b2KHf2gEoaLqSxmUFAd2iW1bF2eusHWn4uR4WaqeRNH8qKJkJxPHhmBuy63nerFhQfBEyu1QD29",
  "key21": "59dh3DXfZwEVFcPMDKvKPBk4Z4QqjynYi8i6dYmPXhx4BjPrECf3Xwr664xaa2uQR8f1ebCTmqxqrH6WxYfkcE5c",
  "key22": "4GMP4FyvT3sEhs5XwxHR25M8gnzrUDSWE1cFAProR4ToaBmm9WFt2vqgMUEvjy9SnFx8zk7ZzpBmWkKPjeoRDFAC",
  "key23": "J666dZ8V38ELwiU2fZJXjUvEbhtv5vixeNSqhk9qgehc7ygK5dFKqSiG3ya496XA4Ww4GTPrTVB7z6RonzrHDUw",
  "key24": "51edXovjzJLy1Uzvk4rF1ZKn4d8dShXYFEega5gDN32b6V6ns1hHzfWszyE7WGxaKZayyc4AzLr6Dtg3spGJEsQJ",
  "key25": "4cNYC5zoKvwM2fsgkTSQsZKN9J1HhvpAAuaNJSiK1KZTpT9P49TGbvae2zsESof6ZKdMxUsTye86eS1YKnShj94c",
  "key26": "4izTQVDP5Mbg1upUuRxegdDZVWYA7Z7iakAvSc3FuYghfFY45xoP7o8G1nHu6xDUprJygx7ymnHu6U8P6P19mmev",
  "key27": "5tf8BHX3fCUcK8PQEQm8uAJmNsddiArBvYAcZN6V515nozYBxvSsnTd5DFCUhyJb1uc3bAXkwSknBPvHPdGQuo9t",
  "key28": "4AoDbuCSHpEDTYetmLLQN9GPLARr3ADw1tc8UDcaY86wN9cTTbAbGMPaJv28p8TS7ZEhcgY7VuDGNUbAt69K5nVN",
  "key29": "4NqBzieadCcnw1dsJHW8uaCaNLWyV86AGSqLtgTsoBs1pCo22LgmokdQB36Jqerb64JHH1oQSRUCagqeLQEG6s97",
  "key30": "5MawcnhvgUGeHozAWQCsSYJYCxNwDrku4zACjQu483X6C5c65ewqSs6RoKeQQdGzziNVvks61EszyWezGUq5SfA2",
  "key31": "5Pqd3gjGwoHkjqaWBr7vrVn8tDAF1dEkDpnfmtrAGaMAsi3TJLSsinbxLtKQVCwCKn3YJizjpFvPuafdQe5PsahE",
  "key32": "5dUBhpG29GeWgZfKpR7xMXE1fSpTxaFrrVmzgBb4GcsHW1rcyoi3LJJb6MAUBqpqfAXoqg19ug23vpoXMkE2GMUu",
  "key33": "5KJWcFzPe1DagkNPhYrTNRPnCLCbXmsHvkz3xM8CmHJGU28uE3Z5v28M9Ycd1rriseVw9NrjkoStCbtUwHho3oFq",
  "key34": "3jw8UVNLN3pqJggR2VjbtFbCQbTqCk4xsPaR2s1qE6NjPtnRNnYHhQHmf58jxYPMKMAAc98YD4AfXofiDb1dqDpj",
  "key35": "4CrTfxnocbRUULib59KH2pLTPSAw5fnBRCae87Y4qic2Q88sAFEHjnt9a9BpsDtybKNFisUpy9rDA2dvoixGexUZ",
  "key36": "4tEU18hbigCSSyekuXbKFqXiMNXPgEy4fLCq689d4bkaKn5tvjmqLcpGYNxBJ2mYoDAKwy7VKQLweAKrwE5qZWq9",
  "key37": "61d7NyXCk4sdvTLFFqQG41HeBAfKkJbfB9Sik7ks3nM5LZYEZ4yKK1hSwUmaj6Y5xPQ873FTa9b9R9k5qpQtvS9",
  "key38": "3jpsCEsSr1pmw7YNFCfWeALjm8ubTwvRSyBgL6qzGC4A3sDvHaWJ2bexzqaaMcm6rovq5G7Pd3T3W4YgXUKyQMgz",
  "key39": "5V8rrWbt5Aue5pf4GwbmE7k3TL36JeJ4nvwAoqJNdqXoiduPrxvkTd5ddU6UR6SAiEHFJYKMLiEhJeBKDxaac4o8",
  "key40": "2YxYBv1c5rQSbqmsYGu6L86nGPfJz6H1m7sHNfK3cTVEtCaNNQLeKbuyrSfqVCPUea1LZSRfrvYGsbjJQ5X7BN5n",
  "key41": "CrvpgyA7ePeDtqQ2mn2icGTAcHXFXsDjAxFixuaRUoMXuV6uQYfC2UWsefsQaYZN8ti4WnVBUGteAxY7sdQpeje",
  "key42": "5xSvJGN1369r1mvnXD6ZiM72iDP9Ydv9JwCtwLgxX4BqW8sM5r2oCVeShsSDqvp8f8LpirN9EcKtLDmzUy5AoVtq",
  "key43": "2fYSnFZ5kz1zZGdWv2APnpo6Q6zVmgLP9MRZMgYTbjxLzzJwY6F9MkaLxWLdid6U8LgrRm8uygTLZCufiwBCi46X",
  "key44": "4QjKMk1nKT6sn1qa4w7QQ8FDsJcXziFuVPPpNsB2vjEw5z7zAnMfvvvsAjEdvAh48oiVLnHTcKFG6z5gqthAvC8a",
  "key45": "2YMoxyXoxpGRFiASaYXRPY4oHqFyLoQGjKEMRwQLUVHaFT4TqQCeqQ68DkvdfXjVqJm3uMim6a2izaVvyDZzosRu",
  "key46": "2qJf5d5EQMvGQLzZCY8yFqUw4jAokGBsRR2spiwkQLZ9wC4KM8V3LqPwewEZrWr9N9krRqCsGDQ6YMJHZe4956Ls",
  "key47": "5TVtqDQp7E8NQnW7fVBK9knmKq5bMkpRNDsiFgDnLsh8suQ9Kd3ZULZhRXgWjUBPCGQ2zFMQcU5aM7UD3Fiw6Pdo"
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
