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
    "58uD6G2c3nkHzCFjmJarmW1oSr5TzpCGDbtMMLgNzCS8RNkXGrX4v2B7eWZCB1rhV4bfCYHPoJynxmKNaBQ5PDC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35P96dLU74pyyLzyFnhEUuNYdjt4qNsGnegx1WDnMZwQhHGsSEW978bHNUgwLthPwsSfxfBT4P6R2PnRG9uSvtHr",
  "key1": "2XYv74gcCudp2Yx4Gfc7JEv3zD4YFEyYD2DMWE2v36RzyQ1UR23p1ywQzN3uth6MH8CZ1sbFK59TMP2WdQwNZtYR",
  "key2": "39reqKJD1hCT2rNrjhsJCetYZYzXKV6T4KXwDjTe1MkkQwXj7WcywJr4p1RXT3andYPki8k3EivfL2SCJCeC3pR8",
  "key3": "2or1xwJRbxzzK8GZvdAsBbboQJHqSmYu1EErTyokGXEnm7qk6yXbmxhKwcMhidHU7LDE87TJ9ihKCtfNgshCqa6T",
  "key4": "2oapkcZQBd8EDR3YuHjSu4TeaX3wtAd8LntY3QeVjN9NUXEmJcxgZqyRahw9EehejRhurMeAa8EVQLvCo9gKfVyE",
  "key5": "221fa4VTb3GqQwMzQQv4dmaBr5Ejib73hFHL6Nchs8bneKHbKzWguw3RrnbbP5ddrrhF8sZ16scuqoySGkiUzFjm",
  "key6": "3xsq5Pp8mUMcyWSUJ8ph91hiLZNGX2LsU17SK8YSTN4EGYuWGDpKKiSzajWxzG29KpP2S2PCDmTVYea18rGNTJ7o",
  "key7": "35LjzGxdkvpyx4ARMMhg6BfqU8AAZf3LzFJR2Eioxg8kEuZsDiNR64jnwJnDZKY5jjpEwWeq5qaWNKWXmdPB38NN",
  "key8": "qsvdztgZYrrXLscAVzPMoxfhUMczH3XPG5scJ93bUfHSzwxo7HgwZt2KEpqPVC3YzzERbGioQqvkdaogtbdVFW6",
  "key9": "3wnesmkoMxjuURYQpRLo2m11MGWgiocsRjUtrkPToYPufv2ScZ79VQ1KJWt2LCHeHxRttbR4CQcMXK7MCJVFRfNe",
  "key10": "3vNCMdCscKCJmNArGYkEoDKtStZAkaskUWP6154tXdRJEbPvJbGJJ1gGWF5GUmtotGXS1rX2sLa2VGo89NgWivt3",
  "key11": "4pjVWCJpRzQ2NRyfFTjnocUB7bZNngb3AtoTdgpEc3Yj6Ws46FC96s4JzSnZVcBbc7JvAMnWZgpt38HPSqjfos9",
  "key12": "5zdNQrzbgKYNtucf3gCTvCmvy9FDZzdMfYpNp2qToUTfcjpjwceEaqZGm4VaAMu1APe4daPhLEvXFJ1Z7sRzdpN5",
  "key13": "62BgFrhhyaajx4YS9NYWvtDqFX3qjD318htowA8nScejbmVGYDMsLeV9mVWaW8nwQ9QAof81ECZC2TzXgh49Qfqo",
  "key14": "5DAZr5w251Be8gPrCwoJ98LCnxLFoCUiZwWJokknzoexo9EjiVAcAT4gZW5wuPFmuhxKLx8kqKhAGQ8YirgzPvTt",
  "key15": "2pCW73nHVioYFwwT78iJi8CM8Lv3SS3UiUY76Kha29LGkfAyZDSvppm1G7iZetaL2phHRgkGQqNceupCFrAQtogR",
  "key16": "os6GEpd1uBmkqzi4B28Lu9Sj4dGDhCSYtN2inmM4nchgEZmTw5cHcPNLau3Tc2UWU6BFZxXBNUAmDx6NyAseFTH",
  "key17": "aSNTS5Ybj8gn9PU5isFuwJ13AmuBkedEMTUsaEMJu7cUvUzpcPz5p3pPPWPuPZQqzhGkNjCtAdqhEtRHU5h1KeW",
  "key18": "3ZcoW6sYohrLYrE4DpZsJi4nFzKJbSTDeAeKPZbWKNVyJAzcDegvcEJL6x75TqzexAArasuPNQ4CLMDRWtDnSRYK",
  "key19": "CzjWV3P8Fhaf4Y3AuwvRDr9cumn9WxTZt4ZNDV916N37Y5JgoipAexeqHxjrWWoNhsXKGDXnhRx2aLr28K2J4Q9",
  "key20": "2zCf9Qk1dmZgJwBwmYhbzDF8pdppnAqzWD9GJ8oc2UEdNzhwE8YLmqMDpv9ZvcP52JruqCPuUsQBHJj571ESZj72",
  "key21": "2BQxksYJHPMgi95zHWUTaG4rWrNRDBGZNkfg5PCXx3U7GWPBgsK1USrvSXSxZTni7CnJRMuKuguMjtyFbgd46G4r",
  "key22": "8jEYQSAn8JmaC2G5ooeTSbnUYQMy5FRE431hPUP5x8XDyyqd8EdhiLKBqhf1UiSHZbx7xvpdtLB4qCsZQiz68pa",
  "key23": "4mDoZrxvchDbiKGoJpKrB7NkcjFCgPG2BTjaHHN8Y4BmUv3uJBfSna5jiGAnDVGSH8xwTzDeHXeF6yR1LVk6A4yg",
  "key24": "4Jdwhpjk5yPXDYaphfUgS7eVjdsUgHrkt4VcPyRJJFwYvwruRTtRwnMZZV4pnZrm2nZxVncABwf1CVEzPCgKrpYv",
  "key25": "3L4riFexqxJBCizNozvjT8E5zU5iea5oNXwh7XpdoevNC7rz9Se5Habbz7AAd45HznxwurQyDjpc79JULXbu9RDz",
  "key26": "b2HoZs1AsQzvYFdjp6Qht39XGpdaUqSHYxjd83rZHoRx5LxdSRb1BAFUiTBGsmX34Vt2g6Yu3w21SGB72kDa9eY",
  "key27": "3RNj3haW45swUrYBq3FtmDbSjktMrsebR86wrTWMiGPxkfbkEkyjwavDbFPDgz1T32sXDyQVc9brXzBEt5qzJP3i",
  "key28": "5hJ9q5EcMZo9AdvwozqmYhTQdfNhUZqj1wEW91EbhCYSruNLpYzRsuurcRH8Y4EjFARtLWaJrDjnBXRyDhNQfqpw",
  "key29": "5qLK3VPjZAA7gGJtk2iACmCbvdoojyLeNx7fkF1qPc43qzrsESNt9G2uZZM5gRQyfyQ3jp6jq9PkFF5sGNVWvWWL",
  "key30": "28QQXfmsTnuA14zCxXp89FqcXNiuGXKWUSbE1K2fuyJJYtTmgsp5iUdgM82ZzjPPF86b2ZyRa3dthjLsuRbW7sGx",
  "key31": "UqBZsaFHQUC3a2xVMyaehmGc9FbN5rXgtJ4ype6GNvPuMXY8Myo3MNRaKaSmUjoCa6NtwqeoRyUFgfXmyGp8LB3",
  "key32": "5y8fQy9Y6bQ7U6sFpBed1WjkFkfFyUmRqttw5uRd8NK5o7jSu7qmqcWtSKD2SRGmKKCn7VtSdioSGHegnFdXQGcY",
  "key33": "3W6WcRcnoCPD7bY284ixEqEgEXK47JLf3P7BQ7Pe6kXXZmSsoaLMmxVz1xtvkyBiEB88wPBEyrE6ddkPfN9Et7KV",
  "key34": "2EpqEWor5ARyo4wjdiQB3Zg1XuQUHeXttEM3723cBniVpqDMBytRpoKx3tTRKf4yKNoVUU1Fu62LoYokhhZLWwwT",
  "key35": "4h5G43QhiwegmECwKUXkNnFVqUmGSSbjfvhm2H9ExvTTpLrQZfZPY9jGK86J7d1B8K3TfR1hwJoxdcgdrdLzTwZ8",
  "key36": "5hdoY2hxtzM7U25kL6zFNP3DR8VELtqLBo5ZFPWosmGiBAcHzaLfQHgizHwsyqaV9eGnW7c39E3vAT1vgdsJBYgm",
  "key37": "5CpLqv5YUshgzKvkVwSCd5qjJ6nxgHzrPyjLWDqkbiwYDuVUijM67PjGGbmtXPKnpPXsRTWMBZLMRPxe2igwYKGv",
  "key38": "34Sma6WD9ehMvdGNgvTgJUoH3mmmJQzRLFUaLASBN46Z8jhjs77JYo3V6uzmDkaV7mKfAxfkAbbY7mq9QCvAVZuh",
  "key39": "88izaVnhcWw6QCrLEbZmGyX5xqXyYXp77bDQzoy87fCAXkWvdFjqCa4ichgoKhastUGyvjiYH8hPoTVRDmjD6aC",
  "key40": "3hxAeAZm9gbbiNjMmVyPzogeMykWGfwHRUhZoezpJYeRECpGAQ1e7VuTWLjYTsi1nYJ5Am5i46c1EGkSZ7FLCnQp",
  "key41": "2x5iQkojdQLDjZBY4qiyyb2r6vmbDet9o7aifSN3Hbco5WHLNcumJmqxT4SX7aCa6dkvkGv8sr5Kk7tSfsXosyhp",
  "key42": "37ySTu9vz281FLXdT8YZnoU3AEEJfHNAWQhNmQ4kNwoVJQdtHMJRhFZszgFDUVqnNrU9ezYmoKc2FPwWTnpFBGwo",
  "key43": "2gz59DDs2wQp2dLyFv1jbnMSD7woj1MAFFrA6Mhm7D4jmFgoUzRukSHggbSCJRyGSw2BKRRdrCbnUWSYbtUMXpiv"
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
