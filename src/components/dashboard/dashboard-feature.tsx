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
    "4dfgG5b6yHtAsweoQACQZao2qfbQvy7uWieXk7ETuairttmsdJyH3UQskoPdhXVUBWkdHPDuxi1TMU2jqHWmeNHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tEckqg7Yjhiad9549TQgkdQ6YygQgGpvT7dYDUKNGQdewJfJh3q2u5ZmwM8F9i67SMKucHZogjKo4tY8A1gu8zS",
  "key1": "2dfbMvks9WU9iutVp5z89DAqJdtuBS8R36N4xj1F5Kct9Aw7ZqhL7PDQh983d2nCKTdZ1pVdaPr4Tq8FJcJN8TzA",
  "key2": "3BgfcvfuWqpXS6zKNT5pRcrZ31BtUc95KcVH4aTRxa4sdUiKDsKLXF5uHDskxPy7zyqYTzsZNX66BUg5vAFjYM3x",
  "key3": "24UcA8TqVe7bokM786G1ngBUgLrDPWMaGFcfFqAQKCeRjZivTtHvQNQkqpRjqmrrvsJGwtvuZ42xXfLkoFipaxbo",
  "key4": "2ha1viZBtH2orGoz9vENuzkYcp7Dt3odHzqYjKVDKPpdHxmKuRRyNZruL78GfnTv435Eo66cz11pGa3pLVXgrgBJ",
  "key5": "2L6HccPiVanJ3Pb1x5nmr8ERsRzDqnQjMGJHodfUQb7VCbEC78T4erg91jw2LPNipvFWi5dEiLg6LrVH7Vs8DGmF",
  "key6": "43F6qVRL5RB683t4ScBiSs8iUnzw22LvvntcoXeBeA9t4bex7JcZQaCoseghPoNYn5ACvoKKNdQ4ymRr4bzV4vGP",
  "key7": "3jM76EyuH8dGJbJan6xKU3BBVC7CmNEh9w3ikhtSuuhCgd3TbrKZx5rfx5gX6EJUhA9EHEnnx6gqPQr4wVA7cskD",
  "key8": "5k5DroPopRvKGk1h8Lax9D8CS6eEgqaN1pgY4kdLU4jGCC6vqwbd4PhpWMB3rZCihP5ZJKrj6tQ6TdvVpjos7Gx3",
  "key9": "4cB31xDmJ1gA4FwZbKrMxaGGgK3XFNsV8MYkpzL3r2YNLLbpfZ6F6mCbmkiEP3XzTFog6rjcVh5oMy8nyhhN519t",
  "key10": "uJsGBE94HQ8oAXqXvqDXtwkcsz6CX4zhvMXFygxYoF2d4GNUaq9Q8uqD9BjUqJ4V4NBwBK2qaXjAGtJpaSFXm1E",
  "key11": "5zsNfbWcaiLVLDyv2szw8cJvSZBnqD4FNbfDdsRHMTNhG6hVahyd4WdK4bb3mwsoqC9W45Zd9xCn6qAn3vN9BCEV",
  "key12": "4bDVooGb1DbhEmHNYn68VTMNS7bpd3vTGBWCSpR6k6H2UCj26VhGVuSWmKpC22pZMmk4PtJwY6nZufu9RBBCgUTH",
  "key13": "bfqqr5vLdRtbGdic1SSXabTxQ3uybC1RtFCAurgYz8KoqWNBRMhLUwMaWMWRrzLSBYNGE463SpfEXKCLZNyzoEf",
  "key14": "4VFuhnd7h45vE5YRrTYqiKNZXhgRMh9ySkKpALN5RkYkLhVFjgk7a2BNcaExznS4WWBdKz8syj94ib4a8ckD28Aj",
  "key15": "95SdhkswF8fKVB71WvdLJ1DZKX1faagFen1kX7avtRdT9wQrz4ovNFCBogNkjbfczkQ1TFG8AYcR76f8sfFShNa",
  "key16": "3Ueb98LaLkVu5YdTzHehSQZxGC1JKnnnZ7yuPati2vnXmokwdCYdAoSH7gy9TrWT1niDFt8bRvAzT7HtLdaipafB",
  "key17": "2LTD5qy9n6P3CQec8JfT7tz2jJxU1Bp3Xpcpo3xMLZt3ECKEP1ahD7UZH7kdFmL7tuYWbKYZVBa8dixwf6F8zUR1",
  "key18": "48PbuGJuwaJLUB8L4AdSNaRAzDnadMkRgXrRUkCQMo4UEobYsk6sDxVVDEMeJBEREcYF2s3pMprrmQFeBatHHmhm",
  "key19": "4DBF3jUHeUpFi7umxJjbfFwrXmbeNxk4GUtcEhEdhx6dgT8yFhFSqVEEBQPbxhJwg4G9a9aqKzbdK6dcq6Ug299e",
  "key20": "2MdUM7bvwA8PkJ8T3KuHesoNYUgsTpBtndrpFwiifKjzuYy6mcKNzc4wW7qMGTAKGSQAtjku52dv4ms72hCNF8aU",
  "key21": "2GV7CEx22uEHGPrScEdnCuxUzKAX3LEdhrZv6NcGUxRvAi6i5rdJEQJf2rjj96JTdJgoxJoGuTPVH7rDeC9X3QJT",
  "key22": "5U2bHY4YpZzqeZpQHtDp54VgzULz4nWCPtirDzjuN5so2YGkyf1f164C2vRHyj4dxPVPFvqgnAKWXxLiYfbRzM6G",
  "key23": "4sad6PYsJ4R1EUqVAFKkqYDvmAnLHqU1hmAcxFRYGv9wYAKHYYnQ6Rp7UNhGyG1pUXPDGQY5TMpkSGDz2xnEUUMk",
  "key24": "61R7Gq6fGD2UPUtf9JUsjNVGe9wgfXyJeUhNsusTya8jQcQaoNvsA9NJzJNtQje4KjNVoVqFH9sx4xFGCE8MeTeE",
  "key25": "3vS4brCAczsqr3XyBq1SpVWR81owXyvTD2v14UsdHW3CLheYREH1VBex7trDYkFrG7MX7XP1M57D31ZeZRyyp1i4",
  "key26": "4HHYBGVxGK75CUSai7HirutW7iJJrJQpQS7d1c7LBjhxzBkX93NxHckGA15ku9zJ87Mgx9542BZuLtz8NcodzBAu",
  "key27": "3jZokze9tRMSDP3CKPRJNCgY4RGQjfmVA1DfZ1xm9D29ijx4u6nrRxRGPefuFyhehSPB1Cq4CHF3LzEeEq71tk7c",
  "key28": "3qXotnoce2vwjCbH2o8F6yjEx639CC4CnwAwjDjBXTDPeR7ZoSwRxyyteMaZmsHewkJwNN5vbpmXhYjx4X2K33ah",
  "key29": "3ZUx439SkM9jnkx5DETcTxiUV8ti1VxcBGvG3gkJykLcEjKu6Woa9dsEn3D5p7B8WeVZC9oCV1JBMeVHS4uFTAoK",
  "key30": "2mj5ztgroqdz2Ye7eCNzrWqy54wrNgdtk34Gc3SbnBEZRymbC8ve8WR8C7fLUCtS21RsMhoGPMNzXv6odD9DfQS8",
  "key31": "PpYz9Zb2APjRfJQiDyyUoGS5BgdcR9Sxek8a4uVJAiJuTz5jDXpV3wZpY6aQbxbrcacnp1zdpciHDVjax7Ak5oB",
  "key32": "36SWcUg7xMN3F6ogmyurwhaiGy5hej7iSSsNmu5j9bFmDRCG7QVojg1NFGrtKjmCJS7dckzJqmd21362suJk4jKu",
  "key33": "2migAaKjbUPD9QoSx4UWUqW8hoRex9bHThDnHsoFbm4nYyPTWxJRE939QpxjjV7Wgbdrxh2pbJCeU4v4qgdL5Jnd",
  "key34": "3YpBvTT6hdHTSF731agonnkzyyqWth2nU7nzC2rA6XubVrt2nHQX7Gi2DRcw3KWbfctWTHo8BSfWd1FAniCFVvoN",
  "key35": "2a9WB1ZFo1bWkhGshW35DGTF9nrduerdCJWaMnFNJBV4t4jzsFUnScwNkcDkWBDLoYnJ8yKLqMEjLcMB66D6pVr1",
  "key36": "4H26sW6HjraohuPvgQdtC1wjAeMwh3vmj3ACmDnJmF7buhdfELeJZVJigoJv4sKhvkEureB5Encyy37WR2csFYdL",
  "key37": "ZfjwpebnbCKgwbyueLr5VfKj6b3b6DsVnw2ruhSLW5ebvmYgKfYqV6bTV7YSPitdFJkCdPFZyuw3niVqhJEVmTi",
  "key38": "4o9u6oGfnompvRTM4w932trM5kDVvV9CTrpUoeLwUR813q7bnUy9NRdxFGRgVGJBvH8g88g9mZLUvL8BBBwkFP2Y",
  "key39": "5Ur8YPttRLCikaEbWwtjtQAajZPvbMyoM1ojCH4k5evnsZwwdGyh1YT54B2hsfCPJyonRLxaL6EjVQuhBniEXM2B",
  "key40": "4HTjeUFNto2i6eBet1yZxJUiDPpUvypd9hHvgmhYWHQtXD4sVMgAyB86SrwzyjBfHxmTG8qStTG9r86us6VYNcUf",
  "key41": "3VonmtZQxiXz2f7KEzeLSgHbdVyALrbX4r8GGU1DGnrm2DfnmSyh7pjQgurD1R9h4HDHps4ikjn9MPj6Dnz5ifZv",
  "key42": "xnp8iExJh8k2ZWu9VNaTUoLbe6PQ3opK91wfxeNP14U15zQYCYLhBbi2ziEz1wXT1vNxqjRUdyNFysTp6CXKcS7",
  "key43": "5Jk5hXRqjcaD1u8djDLtkKS6dmKfPqKWdGxAGxhdyn6weMN2LpjDjgB3MaRgfQ5EQ9got9fnqY5bk3v3R9rSxxtb",
  "key44": "3JdhwQd1F9VY7HYxg6u42yaCv1fL23Y7d2QurmbJmmBFiRQmznsTN4FajbesvFzjX8SVMPFw7zCWN5DLuEZqecDg",
  "key45": "4MKcF1tfUnQ5Cco4oGZSCkRyD2LixQfNBd1q1pCY5TZsPHLApTqjpLhPNmmqWwmAEMQQ543oDT1MsAFBXBjegx4i",
  "key46": "od6BMfzoUJ2yYf23ZMox72HNHGkJvHPoEjy5ppzDmA1zXgzzD9jZCQ4vVDiT3DeRtcy7Ghd3nu2UZrvcKzAAuEt"
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
