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
    "XJWMnVk8esvLiFCyPFz8LseFANs3hzYFKC6Nv6ouphPfeRzWC2oAPftEweky1TcmrQbvid4qJna9vUvtThd7KiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AWMLAqGZKyGM8E76cDbmqVy39dhfcWKZV1JV8TjZXJnakvUxHmVbEqKgR4Ls3qTQ623J42X2fXfMnERo26xBHDx",
  "key1": "DSKjbmBJUVV8kJNu43AufusoGCT6qPw7SebqrfgMXFwz6ejTvHRpCbrFXzn2wwXiP91ZD5k2NTzPQN8k9SzHF9n",
  "key2": "2HhZCikqZQHBbYHZvt9Nf3VTK3jEA5XvJFaHUAfBEMmukwanQrGNrWEoR5Lxg2T32zB8XBESdSrrKf9VHXzTpsSV",
  "key3": "oudN1r7YBm69gRat9YMjNgVkcPQ6WHV5WfwbprtxDDYDd2YfU6rRdmj8tjssYjXqwGtCseBASjUPMyGVBHuL34V",
  "key4": "2vRdS5QtNHNYYtjJKesNyMJshV3sJGod5i9CAB7wXS7KKfwSez2udkxyq7owxPNGK4Z7Cv27t39Ce1iV4ZWya4GE",
  "key5": "22dbwYCyW9QkJzerm3QSiLGjLVUSAGeKrYMZA7SFTSV4uUP5kyYHpPheE9nXcFJieAHksfkyUjYyNJuSDnMSPqkz",
  "key6": "5au46BVttRjV2wB848YKBG6Cj7wwAqWUP4c8cshqsSPiryvgFLdaVvQz9SW9bdNVUGebiJaNzgSzc1U945cFkukV",
  "key7": "5UebF7gZcLjX9qWhCQZvgeUSdXK3PZQW7rCWbtLfnPziib6LjRyZVCsHSQeuSDaz33sqx6vD58YsLjgpdakjZdwQ",
  "key8": "5bxBxvQw7F3eQvtU6W4VRnHGWPLCTHmLpTFH6J9GBv3iz8cvS1mBcXxUwdaM5Xv4gi7iLjpnDLqtj32ytrtJgXC3",
  "key9": "4xLh3yVt9EJJTpxzrshHYN5tW8nVPV9NMjyQAE8LsouLvn3wUVVQjyfddv7XhZiNUnMcrJbSgM76KfeRwWFYLfdy",
  "key10": "axoajYfyeMwbcEa8UG3gbZCo7vY8m7mTr7cbcRVUKd9dDvhaYuvhnGpvnRpz4ECq1SwQ21sX61wXNnbrWEHYBim",
  "key11": "u5oZ5SfQ7C64VKmbX1zyF2cZkzWcBX8jGfYemViy64PDgpQzhCkXXFEgXUyMYkAN3MucKp4JaoDLUJivEFqAPW1",
  "key12": "4i8QFBZuZpuWFF7TFveTKnKdqqphtzdmvk2ugdZr3fU91sJgLEf6T6nPoxEHKHKBYYwwFn2uXjqD85f7h3PbgxzS",
  "key13": "XaRpR8LVuXXoyNpiy2J59hftbGi1ZMXq6E1iBvXizFQkyvqWhj2BPdLrZMqxPxYNYzEnXV4AMgXBCFBXVwFDLo8",
  "key14": "3WDbTKQrMis4TVF17mqY9gNmvooEs7uGwpsWeKuWYAtFPxUGxXMDq7QKkvMSQdzqoPRPtYEUaaHZHT5esVuRF4wj",
  "key15": "yS6BdMeCCfXoh8M2j4C5wWGrQKGDjYyR4gqfRVNRUPrbc5HCm63H49wKKpDT22UqyesBVTW3hMbSW3kdXppkWCP",
  "key16": "iF2D7w1eJbs1LwsAUnjmpjECnALQckw1NoKhwgRQXmrNcsbgkjLdGiqt5LVEn6WcnFCnGA752AQebeo3gWrS6qj",
  "key17": "4MwqHMwfaFRTec6NvxXHu28pzMqHXzytpRRRS5w9UjjAhhNiCdxc4jc7v4LyRjyBJtPghJb1Loh8P4Xf3hyXbYiW",
  "key18": "5c5Q4uhDPfsWD1L6h6WtRpsNzwyrwJmM7EVTyekQSkAyfpMGeJT6wGvA6L2nnu4NVpBh8xqu8xVpEDKBu9ZKLbcv",
  "key19": "Kar48AtHV9RYvyT8RkHvEaZCzqNdvYTnSNSRZunyXkiBkkuQmS74Lq6pW8yARhRrSJtAU5f2a4jdBTVK9zUEDG8",
  "key20": "4EWauFNyYutwnZMgVihcEa13wZ9Sc2azdLA6Tn5WK9UTZEH3kv74faRA4Q4NHPEsBoZWQBSTLPS9amyFsP4mZkU5",
  "key21": "5LPf4eThBNcLZ49PSCWTQc14LNmV4La95ybFbhu9SsBCAHBZtv7FPzGgPxuzpHXZ2PeTQgPYp3RkYJujvJv55skY",
  "key22": "2fuzj6Mem5H6gPkMSgtgZDyKwVLdj7WFTVTrVrmSjbS7XoBW8LiB83xohDv3cBVXQS49oHyXLxpruCVxiMi5Wc7N",
  "key23": "3sZLGEF4DLx7vinipX976w8nsYgRA6mjafX7nKADsyLkDGPnEA1venp72p2WCTmA2dNRPkowEvkWjJ7h67CTWT2r",
  "key24": "5bSrWmEB2XkqNjYqXr93scCS7yWvSJhAPEN97sSbiZzQ6j8XeBcmvjnMnb6roX1PfivdR34G2ALGEMPgZw7PAwUy",
  "key25": "2wZGMnrgzVsUByvUbL4UXzEFcwpEqkMCsLkqjzpUbPsqSPaEMYnv63HuwBkLLRAegmHub8E7aPic9ngdjsFtvUum",
  "key26": "2yP28XSWwtJT1JZmiEf7vdWJGF4ofBn4C69DjaieCjVdZdeQAZRrdk8ZAYVKhWHv7x5bFkE6DVoxat9xdfJSD92R",
  "key27": "CRLznVEPNkRLGYS2pexB3F5M1xW2TwerkEpF5tAqcqrJvkHHcEfChSiP1JEXTvEopQH7NAhXx9EMkpQ3BzHQrgf",
  "key28": "2n81gdXpjc2EPgSgT9BzqVzDTHsbHsJY7owKad9hctBsJ4T5XvGV5LrcgoRHKjfMhpu9JHt86x96YsgcwrtUjKcW",
  "key29": "21WYM1Jx1Q7RnTnV4cHB9C3hBhfzvTR26Cnmmo6ujLaz8Nb9duRPkdaPcmM5iZ2csRk1evC4jumoX9cRmhX392rS",
  "key30": "4y2p6x1dTgWr93Y8zqpuJfXmQ7ZfpScVHcE6852Yh9YsxVA1AvLtbHAwSjJabKrL3Cf8WiY5Woc3zw9Qe7gztHQp",
  "key31": "4NFRVKrkVPxURWtMAc2yCD9F15N76vvYyiijeRBGHQ53FuGrciLPDA9w18q52wVwLwaYs1yu3Ksm5Twv8osUgy1V",
  "key32": "3XPmxatdR1WHqMRUDRLGy5VcPX9Mtamu3ievRiExALwd9nRUWL1fcteRQzLUkUfK2bysBdjuqBD7YYy7aKkBGG3p",
  "key33": "myt3TKGSBKeitcNHLh9sacxHTg9weiUupsTA6c7A6rnMnPza7uC7bYVBNhVMMM4DabaiWGWSoqjukHfvCKZuBBV",
  "key34": "2aTxp4GBYGfa6nSjE5wtXjB1HohmPn35Nehe7CuuWFWgFe3XY4n9JCufcaw4xrxWcG97zifg2UddD9hMcmfU38kv",
  "key35": "5W3Gw3CSm8gZZCKfCa8yyQPQ1nuTpHjJHdtGvvsuVhLbVMYspexh7fvy9Qu3xG4LhCCQh3GRWxKwWkCTbiCqDGup",
  "key36": "5u3FpXavXGrmTEg8W6QaZ6hBuPcsxSPnUFcC5xdUkTREo6KfF4orjeir5c5FfEEJwbDS8trUfe3hixSA46k1dzMM",
  "key37": "5EVKQxX3zW3WiHFh65MqH5xqkDzeKNQaVkwaK5iDv6C3SfQLhHFvT95wCGTiq7srYWixudU6g6gZ9hZBn1iWGLJ6",
  "key38": "2MHr71jhoP9cUS11UKNhr3dTzQnF4kf4mvtqbuJZDDMLK1Wis6dhtccvxosihKdmwaSELnqaNFcNj723StLavUfV",
  "key39": "322UgzkQLN13KvvQQALjchkRto14S7WSXDVs9nwG4e8m13v2yP3hbZZi2TnVdH9iKY1m11omETCiS8t3FuL8Q9a8",
  "key40": "44DLKeACcAKx6E7LV92bWBTitsmtBEizQFnnU2678yJoXxKFZkp8m6GFsdRpyV4EDSCo9cmGuhdFDMGVjwijvpPy"
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
