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
    "4moyPZQViPhbFqp5Cm4L7Qy1muQ4nJ9yxyfv8dmopU9xERxf4zCxamnj488PkDESwVFPkKC9zvMHdgP1rvuvMBFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nTAko395sxLPEWcsCdynzpbQ7BNS1nLGjDUNTE9xTxrqShWYDwRJ3gd6Ehhb7enuT8A6NAF4u2kbT1DuzBFiibr",
  "key1": "HUus9NF4SY7L1sRwRhza1USr2xcXoar4btRvWm1NT2NskSWZS69iCogMrgwm472KZf1cbdhBKnZpv3uUPHKt8ye",
  "key2": "5s7bZBJ3TPtHPtHFpWctA6qUhgnWtGxSakPD5beyvpbBa2vb4qSHi9iS9qARd5NPZay7PnMVP2o5XMDLvexY4332",
  "key3": "5WyntHQeJFMAh5SgXWJQecCyLif3rxLtqLJ3USuMusPQ6Gn34eHfexvnaJu3i2CRzY7fTDHC68Asi5bRCQkM7CHn",
  "key4": "4NS9PeVggwJnZiyaTN4ZUUDv4D7DVuNQsG2d36mTNFDkWDeRjrrxtVD3hXuY75MegPArtDoU2P9BUpCPUkJdZ9jk",
  "key5": "8XHmmmYMgQbCuZNCtmVAwQHhcUP9rAEM31tBv2psd8Vnv3GeHBTyvJyYWweEYPUGHXkgeiGsc2CE91mYAKUJbYK",
  "key6": "3CQcb4yHHsErHq7xbibMHvSPKKTQGRoLmFZyZUX7eQ3khb3qWBfegrp6FJDBGLsUBJ4qTgAiFeArGvrQpedT2c1g",
  "key7": "2J47ZJJhPZdywbVzVjmTBtENXzokv2isdXRSxuYEyv9vyuUuj4DfhRCcCsMjBmu2QjMCaT29yoB4n7cLoVBSxmQP",
  "key8": "3kkHcgrzWhCbF4AkAJEjqJfkRfof9EbZgcmkVeYnA4bkHS8PCuoNrd1QLs2uHKbTrZYVcn3czPs8ysVBNcPLXkbC",
  "key9": "VFJSGb2ebXv2quR3SmDAsVTcs3Yqyzks3Z7zNYc8EZcCjCDTwQbgPfRM559utqpt3a2J4ikj527pK6CVyLvwHD6",
  "key10": "ppidr3ZDk7HT2nAbopwSXB3fKzFXAXdHXdpxjpMJhxrrjiQjUfWWYzVocDnGV3B6t2utwbKMcy5ZZGoxQYPa8Nz",
  "key11": "5jQbeDN1nYxProTNiR6g142JPEt7Gp5JrSNhtTnVkpMvomwqNA6aWvjyiUUseGaLCQc1neK5Mt5bvTn4FoMcFEJq",
  "key12": "4hgFBGM1zkgrUqgevy8qCacvFqtK2UpvbE7smeqjUrRu6U19ZQeZhVy9sxpiwmqrNnRr9weibJRyEea2FDoUL446",
  "key13": "2AWbpxSFjSQe1ea4RQRY28h9jurMs932BwgtpZJTGU7e3R6pLT93QDoPts8zjEvC2FDcKgmHCWc7B4AKDYNbXmx",
  "key14": "4i2cup9zHui7xmwxLKRUdrLB7FNuy2TALuz1kwCfyHLgPTGvwox2g97w8g6bMF5yc6FHDMMH5jVe3PHvWLu9RPum",
  "key15": "owxojPC4v5ZsD6ycKifprfcACweK74MuYKqZfKb9XhhmRrbVkUY7fyqX4endEBXzQdagAmrmUvNrH3rwM4wcKTL",
  "key16": "NFPj6H4oyQQ7BDDRkqwxQ7yEvrueu1gwVwr33jgaMCAARSsLVqRUfRNSAuxVyQCr7syerP2WmCaEM7TuKiZRAht",
  "key17": "3gMY8L6LupRpV5hgkJJM2KJVvdkRDNf2rn6fVYkbm4mh4WsY8aJWSZPogveVP9UhJR2JeEb3iy4UTozv7XjL2wfo",
  "key18": "4egCaLXQ4oQgcDWohpXtzDrmLbKveNfotECrZF5h19uKJahet73AGayahnYKNfEYngoaXgeSatjdq3JjAvAfynwv",
  "key19": "61BKbbmq1kL7DFkRVRW9FKJZW2ig52dSHAStfUA5hUEF1ziKctDUfJwAsjpcPGRSbDG6ZGNMkgCAhZykjwchjVDU",
  "key20": "2jfbopuJkdq7ByMJPMCh8GcS4BdxNULScyiSmkhq4pH4XzfSC6UN5wdXUG8SugoYtZybdCPaVTZNRR8o9MbjWq6x",
  "key21": "mxsdP3Mrc1CVvckWxNJbiNgZ9ijjwrfjC11VaycH2KknU8H4Mbpgf9oPrrW5w9PhXKVN57ZQYGV4c6aewSmqJWE",
  "key22": "2MR3kNkctcVo84fGJoxpkFm2v3QEKehyUVLNk6mamSdEidvfS5cbTx9zpfanBs3z6dxFAXgzKqC9m3wAyijgxGT2",
  "key23": "J4CaCY8Errgsc6YBWejcVvZhXS9SsisRe5goP9CwyT1NQQ8zMop91nSAweFAmHaYhQ3cM9uTnkyyVFqs6MGP8ae",
  "key24": "4SjZHs2NT9yWp27AiWuC29FEU13iVMApbjpTpNBP8vRsEkHCAcTWHqjKN4YsSWnZM8HSqkf9gSmv22WBtpZKEB1d",
  "key25": "2h5tuZeofCM1Ssw5MHJmiserr7oGaCdYEMgVaYWe5krLm5T8xxWTw8S6sgvBjYgq9CzjZx4XywwE2x3CLNQWxntd",
  "key26": "5TQUDSUcxfTDvVrsSBgrmStqspVYqKrbt8XyZa4GJrJqpa7fRmzvDP3LkyreVPh4ZZco542ATugnoKJvgqs3zzVD",
  "key27": "4Gpgb8eANuGrCuWBt5DeDPsY7kDqGCeBuTZBqTBqeaJPaFb89ap7YDNk7EjdcTRSqG4FZnoxaqc65G43j3ato5bY",
  "key28": "4po8vKChVm6iSdS8VjrtrWmoxoT55WGoHP9dk6Js8Ux1Xddbawq6hxKUW1rGRfUFBZyVFuZAw8QtWuwdBoqHZoUa",
  "key29": "3saDkumDvQ1iQ5GueoFCynF95KCFiiUpQ46HbXvn14sCEBeE5yFY4rKSzg8fpNCb4xsAfzKHKffdHj96UiMbdy2C",
  "key30": "3gaSkpude3Ln3z6wvxKUeokBErbhuNqdFQYgGAYUT8hw5bmkwmGKvugiet6s8qZA3F3Gak14FcvejtkHiWPrXKT9",
  "key31": "t2674qxwoYHTkmFh414LxoZwVxP3eLv65wcM2nC3UXAyshpzxk1ABpcxs1uoGHJ6MibNeihMkEtMLWxQcwrfb8A",
  "key32": "4LLZuaYt6LkyZB8fHwyd9WH9od8wwHxeKYPZsuWmKcvMmbiFQPbmihHDSYFLSb4arjUx1ppXcGdqANJ5nBK65XNz",
  "key33": "5iPY7p4MPrydeHNFqxdCeZDYgCuTSxBundKnan58RE2jR5jYMCC4zFEbCpivRh5XUCetieA9gbmY6KWGzjyytzJg",
  "key34": "2TZ3t6gxEBsy2AD725hSYQb6vKXF2SE87MFGuyg8ayD457q1aNAsrRYb77gU1cBfzC9sqbRu9tZpocLTDp2VqVvo",
  "key35": "KLqXLrATSnHUH8Sk6G4yvm2iBzMsWm79r9QECCX1qQjvYTV2TnzfG3CdRwaXLQTcPY9zrTqMqDqbNQNm6iM4yM2",
  "key36": "5hfyVBYT38gQpu7HQNNV591HqBqb8shBWPTN24yD8riZ3bb6DTv6Qk3vX5zvwM8FTxFPZWS5GFnCmQi8NW1EthgE",
  "key37": "3r1f3f2c4rQ7a5JtEob7iPqa7FftfednoypzezanX2UiiDdhPCqs9awbVinXiPG1NQRtxB97tsGWLujoimsp5oEZ",
  "key38": "66qRBD64zixN5Ch7gZ8MxFteTUfA7hxPrehNm2qtnshmZh8VzHREipk1uXxyGzZRn1gP6UyzE68n7UmvVtZHthvY",
  "key39": "3VFfohnQKLgUo5mQmYEa3DSx3y1qkXFas5Umr4w4KgkFSdxwWDN5fYJmLx5UmwCDgHMK3Y8CM8LjaZrNaTyATddV",
  "key40": "3wPdXVX3BvPzV5ZVW6h3zTdjRgX36nmecMZfwzXEVxf8ZcnzdSHR967E7qwAECc92pRxZ3akD8iriFNziD6GsCFR",
  "key41": "EkexXsifhL1n283Dhy6TGDBgesr2Rbv8VFXnHjiBASzo21ziiNTeMxJZmisFt4CdBBr3rpzMUmh6QqTzJytkUmt",
  "key42": "38rZb8k6a41hJWs7UspmXHHp5fr26iKdXuxoYgrgyARBop8xmLdVoRFBcLcNcqrrk94beBTUSZ9zy3TCWY67r43j",
  "key43": "2LoeAQQvUBJwbnPgQnScg1ohxaYC2qzGTVJTkUhSdkwrv8Ddgz7h81mydMjzuY1agfEgARibieaVX95wRqRwnyga",
  "key44": "5oA2aP7mRma2zEN355QgCnZVmVzJsTrN6KkX66qytR1RdYuctiGMB69kx5fnwPidvHJgd2KsbEQYUYxkS6hXwQbi",
  "key45": "2vAUf2LNxvg2Yah2UE1A8Ji4XdDVHaQnUZfGqwTy4FcpLym8549Sy4v6d2NaJHXhrzBEgx7xrptV7CxuWBZg7Cvo"
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
