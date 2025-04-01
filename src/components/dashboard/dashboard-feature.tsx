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
    "4q9JE8zbw91PwbmMu2i7sxqDvkZoXUSee9RWbDz2TL7SoBnrF5GLBa6rqBbkcbu8NLYwpyveN46M287zzVKKc5wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48RTf9LL2A1q7rn64maGf1nErXtDwLe7MefEGP1wPfgviJpZTtZahN8fzRxNNeKs1mug7uHX3Q7rDykNqbfuqCLQ",
  "key1": "3nS1RhsjbZetH6faopm2bsgrN6Dxe15xbasu3D1BtacLAsb541VZmiRf1MJoBCGP2afACYybamgrkxxgxF9rWjLL",
  "key2": "5iqKTjGx44H6qkKae9YPkeNtzUYRQ1M4LUcKESVNEo3EZmkp4dcon53pfoStXbSmLvJwvuiov3yoHWrWwUjTgU82",
  "key3": "28puN92NahwgXKPc22WExcxSDsCEUqAbLGmGsjhk4LGjLxDompwNwKKQGdGGu6KK3x7WDz1t6XfYEk5xVk4oBPUh",
  "key4": "uCXVHj45wDwgffNmMntBieJRPU8FvfJFEzsvryq4NvNEWdXXKFTEGmAU4ASmG3vLAcU1E9b85CovEaCibHrp6a2",
  "key5": "A8L9AfVnXfg35EGRFrV1pG7mmYBigLZkrUA2af1sgcbCxmnUpBuy2eyZ8DjUcDmJLBFGN52CJYotoTAA6kJ1ydT",
  "key6": "51yRiMv1i9PVwcp67HXVpwoWsb5ZRH2QUjCQxP99c4wwX311nAFUh2QP48hGJ69szjPAszgsSEhdKDKMftMi6cPN",
  "key7": "28wzDCrsBuNazxGeT35r8Ec7fWanqhD6XYq5Svj4N6jXrCQ5824GQn1A7eiLUK5CYJSnGtQ1Yz9j1wC9Te1KuBpB",
  "key8": "3RhfXqFMRE38tqSFvwGW94V1XcLQCkCtymkEKmuoLyxw1W6XfN8G8noWAV7q9kZmz7EjxcZ1nn7rucF5xwmZ2EoW",
  "key9": "2VAjEz1oqhKvkAxG3DPKqGr88crUdiw5b7Nm1dn37yHy5CXm3u4Cx2ghaLJSho7KPbKre3qpjoKpdZLDesovpYCj",
  "key10": "3PPevozG9eQU3oemFACV794RhDVE4ECJCyuvN3mLUTb2iKZ7G4vnmVu4uoDqSKCtCXGftn2ejRv2NBW1xUmnyFoi",
  "key11": "23GRaoth5mrUmDZJku43sUurQf57tPuLJw4oNRtShaTLnytKUN3mSe5AMHmXgkaDaCeAeqkaQ4A55cxYsb4f7Wsy",
  "key12": "4R3UKaHtdxCgU3NHaCrMqNUA3VcjEfCTGc3ZxhuxmaoyUnBtokibkdK6DEXfgahzCscX4xZf6UFairrUvXzQuzFF",
  "key13": "2tGx7QLyxmqrAYUqRB3jnesZ48NHkZda8M6qUuTeVpkCBB217sfdgYxSraXqfphD2Bhubgo3vZendkz6nRG4psZr",
  "key14": "338ZYHVCRP3b9iMMeQbZcGxqUF2zPFfWF7e3mCxyYUKpFecDevw6sd9mVTk5mpzz5h7c8n8u3GYn995Ny3DPpCC1",
  "key15": "5eVmNieGgCLnXKjJtj662S8k7hF99BNkZbd9QdCnSgGavtTZnU9vz12wFZoEn9t8QyJkYLxt17EL9HqcZYhhAMie",
  "key16": "3W5G9YBjmbRCfXkTtiCenHWfEojVBjdWpZ6tWbCtu3KZF3PdDyoxJXHbBQnrEjwz9hRcYhR7MEYsUkAgmyVSGWGL",
  "key17": "VDuKhokg3Tdre2GDxkGhiZtBu7Pr2HeDBnymz5mRLLKCE4hJQhqdxmkWgzN9ZHJ8kG9eR4MaHoT5DwUg5BYe2hk",
  "key18": "3a5cb115SmU6S3zUys4rgBsPAiVtQtHvQZe6FANn9iXQ1E8Lnw2xBvLgosjQNKKkrzHM9EWUY4fn8FF7KYRK3Udx",
  "key19": "2zueqKYdBg7wgmFV79zQ4nNQmFMGATupc9TiUtNn29vs3EwsWLByC4JoZy9Nnz8XFVT8TeFYwDe679hxAPawtez4",
  "key20": "22xFFbe4UhUTbDKZKWAtqVG8hm39rVr9CLrSJ1eGh4ZNLAjVAgPzbLUUvTqyjbGfkfLzVwEY1CxtiEy3EHmn3oPN",
  "key21": "WitXpuRYpSaNdnjNAzw6wM5GvCHNzz9FjuuDVwLHcGHYrB88sHy86aEUvqDcJJ7biZZhZxffs4Q6ci1bvH2gs5i",
  "key22": "YAq8FJzSe7yJyebvX22zMyAREkBWi5SxTHvfrgXGuDsbmNAF5wVaZx5E5yG5k7vQPFyxpc2QbC7wy8WDmFgzDk2",
  "key23": "3mozUb1fmfVH4kTqWaPca8ukwLQRkijwmAHgZM6jfms4nwN4qiWucQvTnnPXkjq1tGDkLzodCUTEnjYY9RiqpWYJ",
  "key24": "2CXYsDdbjsGNhWdEtPz5wHUQi3T68HgohVjoPM3tr8P6wFGBjKUNW7o7wfva3YoezVU9QjQRaXatew8oWwgiyhQv",
  "key25": "WX4SduVtkrDi6JiuNnnZGSEe1d828nWVQBYjfCKQeqoupzuvRGqGte728en3oEm6nUye7a5MFpxQTpsLF7uTSfh",
  "key26": "2cbJhQt2M9JKRjJnKrKKcPiqCSwuHUg6B7XJMj3gpnRiVzyUr2LT9r3gqs8mZ83VoGaukcfpn7VvAKDS3s6FC8Lh",
  "key27": "21TL5yYamRKKnqe2JVuKin1LTgrcaQB9s2vcJqoQEjDkcrmFn94gRgn5jrRchkRfwetPmqqgXGKaMoezsQ8iRa44",
  "key28": "37QMCLJeWyuuniqNqcrePEfJvR239Lubwx48g1tjun99RqxhGpXjZZ99nUErZPNSqofw2ih5L6J4JWPqsUynLxRy",
  "key29": "2ZuY4fjiH5Dneu4zdCLASjkQVrQJWNkvHFWCGiXVHHkq38z476TGByCPq36de1ow7ebnD1zyU7WMRagZAyN7u6yf",
  "key30": "4sgHCceXRqi5MGaeeXfzwA8A2FnkcXTNzaJAG1dokAnK3R6GNt5VoVqxz3sQyP7LA9UBQ5A4NxqJzvWmkUHPw2cW",
  "key31": "ZHmJeBMxFyEDjHXJmTBP1kMQ1fRmhJeKTjQMAhrBNkoxKnVGXre6PT96tPHe88hjq7gNphh3uoLzhWxrQ2jfQRQ",
  "key32": "74A2H2cLztWs2HABq5QnHWxQZ14kAaL1jXCh2WDgs6f6GJMxrS2rjutEXiC3U2Bvdi42g45U3PgJwJg9aAZ25V2",
  "key33": "3QaxXCq9c26EHsxGAa7jAv3h5fbCcPRWwkusJsM2kATnDe7kUTbtCL3F55cWVbKVLVGyAsWdEhDs1uxQoQU2RMYC",
  "key34": "36tcrbCM2K3cmHSpVUejEdMGprNFQWr7hoNZn1Wrpoi5T2Yoe4GPesTFgM2vBFa7vhEUPiQzsb3Gct9ygoDE21qS",
  "key35": "5hZvSpU9Vjrv11ort4JuV24s8sWSUN4cm5kctASyYsFNbYjDeNSo9DZHC9Z2W1iMg9kqZrXgYXVAJ3r4NRPgzwov",
  "key36": "2Bks8byjg4kwtJPJf64k2R8nVXCT1nL7yQyszdKD8tZkE6rc59bJWNDdYGEwoVhbN9uAhQoAbyRUkwfy6xGea5LJ",
  "key37": "5yFJ4g2uXsnCb5QY2dzyXy4ppAU7XSVUJ92cSxKTfm24GeVvizRxVKiWx9vuD5swyKyhffGokk9NoeZAFttY6gNJ",
  "key38": "4WBdhKG53ahrFnXtBv6QaFW2EcSa4oRa6RcggNMSWkwPQ9zEPNFtPMFkPsSVt6zR2tjeJhhDzpZJTfsr8a9UEXAr",
  "key39": "4Uh7Gdih3dhm6mHAqzHCCDaKn5x2hMzWppbFP5JFLye4HVRyqiiAcZRyrqi4b1AKqNN2akwHfrKy6HcmXzX7cnyz",
  "key40": "4hySF1hYKrtJHQQT9C7P9yNe1JWHVAYmnZKYoG3PvAzN1NQbENee4FxnQT37qamwdZk4F15iHvAvFMd97j2tHfWo",
  "key41": "5saLTXPXzfNCp7t5zhVCrvvm6vMeaXYCQE7m3sTpSxp1D7KQ5WAuRSJhZhrq4byV9cZRk7czzwoMkVWqpn8mDMNh",
  "key42": "36hj827sfoBQLqF4RokSbJLXkYNGrCQL3PGCak9h7n7k8jgaDEABGq4Fyj7MDcgiAFKqeSu3MUAz6Q7kdjx9Y7NW",
  "key43": "2v3H9BNk18S1MwkGk4JnCeSApj8dqquW8ZEpX2WwihakxT3g9TytTdSHKdgKiNhVB16CDudT6GWjDm5spmNioq8p",
  "key44": "42h3s38T51in5j7HnQWogso6GNc6bmSH1jCPmV9tZ7EVXJQ94KH96hdG4X9PvxExkFcTP2SLPoiC4uCrGa16pCMm",
  "key45": "NWdQhUC9xwzUjzG8o8Abcnkb5QK2BUuBS4bdnT6SDYcZfzo3omLz4GkvjPUFvUjJfe1wbUpo3m7BGXKTGin4HJc",
  "key46": "57YohfSjBvM6qjGNGPbMAgq259Gs8fdgHYSWp3uxXg8PRCHymCs82BBy8hcq5oTXSVrBAXwhHvZpH73JBgstmFRX",
  "key47": "334FAgrNgimtMvQTq9QxBzraKem5dHSGeP45Sz5nyobwYXYm5dMhsWj4a2dWL535NmD3eYMHfg2DhcxMXPFaRMnd",
  "key48": "3zGSeNS5rDLDomsP5Pp24nnUG2LKQnE6LADe6XkHi2mHxpd2M1bb5jk5c3d7eVkv8hW4CH8jF7u8TbpngkX8yqSQ",
  "key49": "5ZZNBrWBgwAcwNZy8SAydZgEtDVRtQVMtwAv5FbNPxYHqhDd2mrKvfh75F8SzwAyfi7M7sE4mnD4nWbDCQnuyMBV"
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
