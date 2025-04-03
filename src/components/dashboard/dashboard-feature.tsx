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
    "4iMWfrSb2RC4KZG5hWrC5aHgrypEpgZw4NxVGzP6EXnBuMGHexSqtgDT7N631ZHrQKvy9fBqN3s6pAXdYt9hcarY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zGrnkiLTfkGbgenUiuquQ5NqnUFMz2UL1Rniojz2KGseCD2bM1fcW5aQMsqW2g9pdt5ig1RRns6CVT3MNaxt9Dv",
  "key1": "auqoCH4ZCmvNJJQobimNuJ177YnNJembZpca5bSpjcPHdpuuewRBQXfbpvMBdgUbLcUwoNHt97Np8W8BonvN4mG",
  "key2": "ULeWcweYQqtNST9UaKsdfgQWK8xw76xJ9RYBxMJARSmQqGe4owgxoduQAa5ZgcKJQgezzng1jRWF3QBZABao1RR",
  "key3": "2Vuak6Mq5JPm63Rpn2USVgJeAFnXf9hXTGuECUupDDNpQEEPeCcoymn2KwEPj7Tda7M3c7xjXin5SoZ5jjhtyc3H",
  "key4": "3sKc6eR3E4EsZ6hgHeJvovdE87ouJ8Seosj6jMSwmp3wvUuvaBKwwxGBnm6FpwtaHhC4Axr68m7Q6dWEpirYJx7E",
  "key5": "5QriQjvcYoZGQAgps73i1arHpf6uJMTzpQskCNQASa9e9tqPAR5AFaVSYT9bcjjex6uc7YWmwGWBZKczYbAciy5s",
  "key6": "2XQG4ny1qPcMZbGpQ5hkn9f4pEVhhnP5ZN36J2fvmQ3xQyZU6apW4mnbS1jZaaKghDqGJer6CCzwGU29oDHk1KvC",
  "key7": "4DCnepc3g5ASw6rBvhDs7xVVKd8d6wg2Vn1WS3QXkTPMne8W48God7QHsBqpTtne83hUvvwWJ3Dg9ekNYr6t3cVr",
  "key8": "33oYg5ur4V1ytw7BugZrQv7ei4y8Gxmzu17VWnZ37ragH19C336Yjzv4qWNsKEzBdkx1sHpTG8dFzRsf4CsqF5tG",
  "key9": "52JmmTRfeFgonL21dUpFWtpWAXYuywn2Af8N7ZV351q5JBLbgTDKc4Ry5JFoz6zm6qm1qfiXtmLmML49b9PRumRs",
  "key10": "51iUbrxJXtNo8uLTu1SjujyUFQuKkFfVcGbNAoKEDWptPc8BkRqyrLgLv5BjvxxU9JngGKWuaYHB1xKFPqRNY19n",
  "key11": "3jmiQnuR3qWdhgU427wUNxMEhXQKheKKAxP3DUStztdtyxu7PqjMenAzS5sRZwNtByC6gFwjAPKyyuE7E7wczF8L",
  "key12": "4uxhVM52sDMfwFQmvcEhvmLGg2zfUFEsQb2tDk7vmys7mXMNcLDs3DR79o2zs2SVepZgvphVhCrMm93mfDsBBCHS",
  "key13": "4cmECMKoEd23CuVtrMDu5EFEgzgcAppwQks7SXFVpL7P65JYE2qi7UeR7y55vj5HUe7c2PCNiqNmTd3tp4V76yYT",
  "key14": "4AC8uSuBQBR986Vw7qkYJLJz5xQEUe6xfsMrfASME2utBvA4SxqdjnqVoE7ut8Ef8wieq35o7kZBdYhq13qpvq7q",
  "key15": "3MeSQYjLt9dkM98FvEKxP69rFGuVZG4RYDH16aP4kLDrJ8LV8sakd3Kq9Yt5TiQFWNbK2uqzJMmWwJ9Wn5bi3SYx",
  "key16": "4pPBkwtndo9t3TNCvZ28vaUZW9JvZ7PMUtKoDUjxWuiDxV99MC5YgxoDRVEH9Vt1yVFE6Uk1KKHAPSRUirPVbs7R",
  "key17": "5fbeZeDNHwYQ9ueubRmCS2St29fR3of62e1kDq6AKvNDdaWcZ5MqcV1JaZPmJpFnGhu52RaJFzUFCYuqupHGPHzQ",
  "key18": "o6CUC7WUSiLTrCq6J12E1UAZ9TnocJkcY3M63u9oQGupdpsD1ihdbK6Ceyw322LEjjLw4VNGvFuqgRWb8ihh16r",
  "key19": "5xBKPQQnsgsVB5B3JN6CrVRiGz7txzL1sfm46fyHVQHfijqm9JyvnhndVZEdySqNDu96eoraRzNktpvTPFmGLhoL",
  "key20": "53jQrczx1wCCXh7uozNrSV1peMtX7yCuNe5DXGaG9GGVRYb2YyTM5Gm6JLaqA2gzB8veHhy7DxNtWb5VZ51Av8dn",
  "key21": "4G3ZC1nochLxMMySuLGNiwPgk3tSYBqiNSzzKaJpvdDXtodFLZ7AbM74dGYmQ5Wsba17iPFA83H1McmJHUiPj2iy",
  "key22": "4XhWx49d5bPX3HY36igAmeapH7mWugBvbKAiotVpPPJvWWjGW3y2BhK3yMoCvraizosKunKxh7scH3uJ134V8zkw",
  "key23": "3gsQ7mQwK2p3GhzyZxmLUsUCgR8tuTgfWpR86PMJTFooWmLCdcpD8eiSpmaxxDcHL3zTjkXvzQebWZmmZHsweW8a",
  "key24": "TjkT83J1bGKpibSJbWw1dHTCZy1kwqqtgFMQ95V7Hi7wSoPxK2ntpG4mYwkvJis8YjadKY8biSzihKVDdD55Uxa",
  "key25": "2hXMWeLxP4oiAXUStEKD6XLmSH1Lu1eVdQubZSJyrj4njgF34AkoCNB3mna9wRpQZ9nkadcNpwdNqfRAahXA99T",
  "key26": "5Ht9QS8dTATJYKyBpCvj79nAQh7tCiqPf6psRurXeS4u4yWP8i6f6RBdBoqcivx3GXdmxNQQBpGHD2n9JYWoTvar",
  "key27": "fA9x4xWoaXYcGhSLifjYcQUQW4GU4GyhJod7sFxKxzZWttEBKdnKEXFKQkSE7VMJpuEJjxTR69bbbwq13Crxd6S",
  "key28": "2Wgx2zrLFonywgWbTbjZpYWmp2seW642AuQouKhTDqR686G18yV7n3Dy69zo6kHo9x7tGW6CATcNwgvJTpbB5C1s",
  "key29": "4tfbxLrFPjpthHK6NNCBpAP2VuoRujLQcyJXdFDpNLXChcCtAmuX9hFghfEt43xv6Lg3Gnc9cQYu4fh7ckTdc98x",
  "key30": "5uZX54oGqgjE4m5g6YfKD2DxYHzaTTrmoKNSQgAVnCeTbCVRyJ4Hp6pkdYSpru94SXsFfwBYW7XMne2zYs36HkRh",
  "key31": "47xTgKBB4hDfd8fiKDSHjv62UeTreUPxxZeer29byL48ZoSsfn5WGPXcEjvvBRHHYqGvBoFDWdEueYfPBaesQa4A",
  "key32": "4k4NammQvQjog8jAGDvNcBewiABxL8wAnYnhCz1jWpsYJEvcKe1grm4kSjdUZmtLqNxuTM8VjAz22vSRjxqws1rs",
  "key33": "2E9Crh3JuRdCU6sB4rLPrdsLBSM5ZrfUyqtjQUqXNvq5DWVysM7QSUmLhuNizc4c42tqBRvGdwjUvR7jbLnqfVrQ",
  "key34": "2rJvxn4NkKgRvVDZcvz6PJt24Sjj2mPo24YaxaRb1vJEh5WUvUXXfzTvip5RN7BBD2gmzZ2brB7sLuqRqQtuNmPj",
  "key35": "3k9W1We1oXTro826AuZADAgPTCcJacEtDQZocqrsNunEaMBX1EVbSt1UWtSt1hUy7Ta49UuzmkGGyiEkzpFEf4tq",
  "key36": "239QwPuJwe4dL24h9bKzWRae7tVGCDLrfH4nbJ7yYHPuB7ynJvMVDTMcFFQEo6Xn198pRu1dv26zNRnL5ycMPzF1",
  "key37": "3gS22KY2c4f2637Lhhzk8bkeevnC5Dna2bZ8Wbt7b81W3gm7uMsfQAtKGQQtEXv78UQs1y9PqkM9ErXRGyVXWRGD",
  "key38": "tV28Vgfvyn4BkpUS6ErvBJiDAWaMr8zPWrcnAbjRdhgroM1iNhm6ZxybrsPN4dagrujdwHhqdJ1jVKSbV1QfAke",
  "key39": "5BSTwysQiauiK1nG4j89W9yxt2qpF2MZ9hnrTpBEGr8tsQsaREJQNtMyWkF7b1chW4Q1k94gzSFEDrjCdxiEDVUf",
  "key40": "38T4m2SYL1LkfKCfUKxP12H5bZhUK5XwertQNyTrC1SvmM2LoUGfgrmHQftL9VYm2YcF1mQ6dTeepT7SB8vfUBaJ",
  "key41": "4FLtnLCHSydayZXuD9gY2tDRde5hbBrU7XJ9MrXYMR9zyiU5Gr3SgtJgMGSpeAJQwzfgudRY6dxgy4c8xSYGKWNA",
  "key42": "2cw4natjLMoCQhyL8eyqfhcpq3vyuHgEF2CoBevi85i4ijUG6gBg9BVwt9CucwhF3h9HUbuVFKkABpb47vWHLKd8",
  "key43": "w9HpPtvKpKAqcMhJLfYUbB9xAJg11pDncitmJBgTxQfWzXYuvGmwkKjsGCRb58XDuAnyhoxDD78Gmk4sP264ZHo",
  "key44": "2itgknjY6JHDQfzZ4CqnhqdDDdbvPRzJYr6K8up1KVSmvm8V6ZcdAYmQpNpz7ycbXii5byzUge5Gv1nQ5R39uMjJ",
  "key45": "4eZvgVn47RjrwNSDWkqjQyumbpnM1EDQrd6EPED3tLndmdkA67qcpwZNktybMn3kjvR5Q2PGJxMVzU4UXvo6Ua1P"
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
