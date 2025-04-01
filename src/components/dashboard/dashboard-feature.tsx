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
    "5wJspq4g2BriSbBE2hvo7UV8yZTjRVi6ZPUTx7G9BSqFALF8NpjmUVf3KveWDumPGp5GWkqGLHDEfjdhmEPkjv6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MA1THUXRrHZY6a3CGyYcfuEybunFwbzokbqHY9oNFihNeQWbgp5vX2oo71WkS9nYRx5xbViqH1CK5HtMAfgvYGE",
  "key1": "3j3EDjrz98bmVdt636YffNhLDA82z3VBcdh1dUmkLzypJQDaM5togf6TbM665F2WmNLLQQMPFd3Az88SRAnKUa6S",
  "key2": "5fCHgJVYbPfwDHUN6Dpgping8p42B6XgiKN7Gvbu3i1RvkkqCKq64V5h4ZKT19fdBD69tyiCaKu6NdgNpKBFaMip",
  "key3": "3rGjJHF2qDEHRtc5MBgEPZYf7vp9i1VW5BeR9xhcV9Bk2n9NAn6Jxywj9KaZpmvCrP7AjBbDn58fd37E6Vht9SFM",
  "key4": "5NUfn4Uf7jrC6wZ1XgrQC6omXw5QvMpwoi29G6UF8HgwtPwuuThHYrdQusq98pdXXkAA6srCveTPz56k6DBUyEB3",
  "key5": "4BriiwQmY6y3s4MksakayH1BhkRTBfauRfrRCKSfjXob5AFVroSSxfjMkf8me8PPE98hEvgssTdSUCiAyyHBDEuo",
  "key6": "2JwkFAr2uJpJW4wK9BAmQMDU11kVCKB4NAWYBLiHuMsyjCAGgfZjEuTvB66aZxXzvuJ8unY4GuzSZMPYBEtZcR6r",
  "key7": "2cLZ6zpmCBGpp96y6UU8rjR4y7Jrc6N9VzBPXdh9dKdPUwZwAozEuQZH7SJqFVnxXbkrJB5suJKcezJ3seSGra3G",
  "key8": "3a8aEzdLM7wocijXKCDSbWCiWKnUQfPgs8sDFNAqfoUFa8gqw2jnf9umsijzcdcM357Xc7MSThLpKQKEkDYgNsba",
  "key9": "2wP9wBMjYXGCe4TWA7eQDBLpveZ8cJpgXeN4JMxLnpGyahz6YA9F8KBCqUgnXCVd2aSDJ6ZEWbgNJ34hTbdzJdEY",
  "key10": "4GKz5JGdqwwuZqSsUrEwbQXTyvwKqKpPLWdST6SBkXR8CSLqCnutcCE8FZzgYsggVKeCVDwDSsobSHKS1cQKXJ8X",
  "key11": "2qq6FNTdMRRTVtshygc79yqSJwhfAJhHv4kTYCHJHLDzXvDWKzyF95abX2WjMU4k4nn3TkDre3jyAFZbx3CyQgKn",
  "key12": "3b6Rm1n647bqznZ5PkmhZK2eAjWQUA12aQ4U9jcVb9jEUnM9AaowAqkZoSqWd4UE54vrB3XPJdw99Qz1L8taNDXR",
  "key13": "2K1tfQZsZVvHDrEsLjJ7Qyc57XgTaVdeeFo8duf5JnZG6uRqv9aviopkun7n82hXChRYi7D5FMvf3KYBeKvmKnWQ",
  "key14": "3d5cpb4JtaF6G79DYMc2Wg5MLRondTCWmaaiVzGDfjShyNuwbAFKP9kPYto44QTudtnQxiF2RWXwEg7rbL2RQCVz",
  "key15": "3Ui2XjkCSwDsdAtMZYxdZ4PC5ct7RG8XUq2BypzC2DEx152P6sUobQquVun3b11C8dfcdkdWXe7DK4bP5H5sBuZf",
  "key16": "5uz3m7k1NAMH8XptbzYctJsiHpFvJGLaPHJzPvAZnFzd1Xku7u1FgDWkeZPDSQ4X3EqUrFjGQMcYeTks4okfcNyw",
  "key17": "3Px2aZsyHYKRHwA8dZzMQdL5xoYdAyxDueWbbv5ZzsMC7eHSJbaKjTsrVrsKM5a56SKBY6Nkvfw3T6TsbJn8TLGe",
  "key18": "4BPbaicUDoNJUUzJXniEbEAeDPGDVgpdaMfndYrpGHBJvpS2JWyDztdtHSC127vrDKEsStZm6NqdDHATDQdVS7wD",
  "key19": "298M6ueU2uAzUJMKdyekrPKP9mSypHMAJELtDrM9wi2RxnB5ZHg6JTExQTHm6yJCwj689VKqnPewLymeWdqt2UyS",
  "key20": "4wfs8UjG8akrbV3DBus6Ydc5sp1Zv5KwqB1QSeUtFUo4GtBgJr637nALqvwDD8nHygBUSfVNzGKKw1eudVhrbJLb",
  "key21": "4PH4d6CmNdZ8BtT9tZH8EP52jvJCUofaaKSFLJcjEVLHrnAJUteqNHoF8ge1FBXQYg1w7udkVLcKx5uCwBtqxyaN",
  "key22": "2cGLbfJV5oJhujZ3QAra7mTPxWriew8h66ptuq2SAzwPQgwEDzRjYiTSLQf1v58AorFJyMxfCEP4TDu98pkFTcq8",
  "key23": "2R5eTxdv2cSwtuMCJwRMB2YYUicDxAtnVSsbCqCEHsN9LvquVcVhR1wtgnfJYLcuh2q1o5iohkam9GUMZuEBnN19",
  "key24": "37ZUVoQhnSHS7syLqfbtZyeUHUENLc12Vi5Dny99vtHgBHTPJdWwc1d3NG5fQgBZUsaBjEHNBXQpgVC89KMGAPnn",
  "key25": "4HkZwC85Q7QkczjD7pa9R1CTkfx5GkQ4aJBdyF6QEAMHxfBbj2xn2hXmFfhLAT41C2MMkvpe4Yb1iPupYWnq46V3",
  "key26": "2LfuvjQqeBwp7S64ANqnFAtAULTN6no1WZNrdJZdEvvEDUzBkTFPmF7nif15Z8qxBbwoB1CbqY25gFLy5LHtKZtP",
  "key27": "273wZNCCFqxjrdVAtr2jQv1YGtidvnAAXN6L4osU55nA13n9xMhmWmfrjvU99n6TV6fY55vXbXwHAvj5rzxtiU3j",
  "key28": "3niCoHZRchN5Tuccqjqq5MREXuthtky2gdK3NZUHwVJ6H8vFyjkjTDGjRU1yxhaL5qJssDpzxqkJzpkytkvQJU1d",
  "key29": "49wXhTxLJq8vwtxwRgMoYF6MyBKLG9LNzHsqbZt8fmjRZ7p1x6ewC8p3mexNAG7XrMzZrAaqsjWhvN828HK6YLP8",
  "key30": "2Dd8M5jWBt6LmDcTLMCWHeU9N1hAEELKuLrBB52LhRUf2pPCYnsHxNWXiiPJpymdTBZJqNmCUGLTHc2v8Lg2NRWh",
  "key31": "5tRuTnxNAGPbdhS7e6aNMPX16727Bpn32ZHhBkHN6ohEFYM31kDLeEQw7sYLCuSH2TUT71GE5BgjST9abkHbA9mw",
  "key32": "4jauvefdN3LXUJpVNbbqYsMiCn4uALL4D3D3MQf8q88ryViQznHGgXjVdPQUD16GB6zZpCrfm58pxYn7NrCKFoxS",
  "key33": "2iWCvBLTJx6aNXiY8FrE3Du3uKRMxCrwE8u2h8qhzYof61v63E83smcc8knbE8FKbAUYYtMM4pyjVRkCvs7QmU1",
  "key34": "2AvuBjZ8JSSJYxEu5a5GXxZRTtiSECYfFtBZRinSJVMsPfNvenoNuL1VmUKFCpRZaCqNiFajAodZQPZCoUY7eQzg",
  "key35": "5PWZC2ufBCfzm7qMMY6mD1r76fMrBLzdDKVQRLp4oJQSZoTj3sbEsnCAJiuqcAP7qxEtJPyy1haHkTCL75LS1ucE",
  "key36": "3EZWHwKfrbvpZbQtG1LnYV76WRr8rYCYUroeZ6ahU3YM7n7Gund4UtJs2oJijYF5eU2FQLPK9UMxfgGAALujLQ5u",
  "key37": "5vuKoKVA4gPmzxtn7L2SZmGJL6prCz9BTXgbBFCnSWTCh5DQKFUHnXdaWSMoUjmu9t9NLuM42RJEsCmH1U5qxVZ8",
  "key38": "3sqFGiXmLKDhY4tF1MVDNUFZWjyCqeidE7dWJJrXrg6rw3boqmcVi5Sqawmb5oEKX2L7uStKNjVZCzJJg2DX3LMP",
  "key39": "5jREN63y4APbiiZF7KEN7gtCMczrrr5b6mBbfNbqGgT4G4G19WkwKyzHW5GZsuHjo3To8AJr6hd2Ngjq5v58FAPh",
  "key40": "3Rsd5gnQwNxPrqpUiypK3EneoWZs5QfY7iQMg9SGtd2NtjRf1uyNN9btd4GHc7if7QHjdsiDNANTDTdCwK9hDPSY",
  "key41": "3mJxno7sP6WUEWD9oXCEzXQN9PSVTpYTUxmCMjNgMhCYHatXUbqjQ6pGHMWhCuDg1JqHwQJka46xiZrdRxJr9v54",
  "key42": "4JSxiNBeeJTEhnETBcTG6mQHkjeZdVJ5NPmyX6Qr9Y2f2S3C5xqk7RStbxL5UFikUn4hDKyeukupZGCRaBXeScHT",
  "key43": "6y9SDsASqa2CYuK7WDPK4AKRYFdVrLD7Pvp1w1WiJksxbNtKQACACuF7jYB3KsRHm5EeiTMAVtB1Htw6fTtK4nF",
  "key44": "43a7KMyucBqaeuAswD5qxJLCKDG7VRmQBcUWTdDV7eDCs3s3f6JsXu2GJGRXjqJVZ8rCRujAWbTBdDmM81VvYwfQ",
  "key45": "66BitWRmwus4gVpyVH4CiPaDnt3FkFQUiL7riTQmtj15W6aPGFhFQm9qQPp7jU264Q5aoNzuSvgEjtkbVeCxh6n1",
  "key46": "5LkDq8WLd16rfmS1dcmK9bTG5tb3X1uwgihnq9Bxt6B6i5vZr5bLsJ4cfSGWSfjikp5WWWu5fBrxtHmLhCrceA5n",
  "key47": "rHrmP8zj4TEZdGT74XDXCdvjQv1w9N5SfQphZiKRVxmt4fGNTTNcLLoPYc9nKyuzQhFuXNxwgy3dxeCf6xnbXvy",
  "key48": "2j7iAAC57HqYocYYAzcVaAAcr3qLzmNiNoiczAyZP1vqjqwFTfD5YByYN7XRL7g9VgQ12UrZYn6fgzkbPKn3tvMu",
  "key49": "5idMnVGrJuYD7ghELyhCDSZXZXx7CH14tzHkaiTU71dgyYbhZWjEh67JX1HkjiHonRkJsGR3YU8S3RLggUvn68ph"
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
