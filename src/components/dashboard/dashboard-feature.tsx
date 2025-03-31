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
    "3YS7PG5dmptwdUtLUweDPVKDCixtmijgabeafZjjaTpgXRo1XcjFeSac1shdr1ZsWBvoeptnAKwCxF2DVzhY34bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nwQuiXwyfvqctxqbSaMsQPkbUPwa2FxQ28SgeHgEmp7kSdnCbLegAbSHipu8Q6he4ZLVat47bSPCNxEmiSPCPbk",
  "key1": "3MMFeGbezRSyLCT9m1SLaRiya8CRpxb72ezTSHx8VyaiBewmVoeaoR5CJurnmNygpr11SuQ7SKD1U8AVRoL5QAgV",
  "key2": "2kmeNPWS27rZuH7esBua5nfnh2ScJboTZwdidzPXxnEvSYkxndwiDkYSu9oAQVMYetzUhgt1j3oB7x7RBbAQ8Nek",
  "key3": "5L5JuwL9kXDQvYdg1CABV475vdNv4edD6sekbUpfd55CNDnYn9WT2BeSNSsVqgCkxkfbbKfHUoqqmfYa24K3QpsM",
  "key4": "qkMex2o7vTTofpgZ3fP9zbsHwjnbgFyJP2bShnPLx9x68vDp9YVqCvzoxR7X8j9NQMwknQ9LUCwygr3evaPgcwK",
  "key5": "Kf4MCinEd3Yzd4i6dHeTK8w6runMN486KwDYj2PBsgD8oZSUq3Qctgqmu1bG8ddqRn2yL1yqnFkvwixRtvktf3C",
  "key6": "4VyRg8Mn3GuhJn4BZTV1Wygy56vD5zNdge8TMLnkKPzAkDXCEZcJ98pdauzx33SzXX26J5BhcLaD3FDPdBGTzv2o",
  "key7": "31WNVueoDUr3xXEKvvo5uMvY7pUyaRVwasRXLf7KxQ8m4XM6gB2Aua3wTB8ofPGdcbK6ixV6P7Z9BhLdAoYLX1tY",
  "key8": "62RnTwvr9oMFXfE6AMhyz2xuwQG2kziU3ztewNiz3D7WF2RjpXC1cGEixEiwd9TJWki2nzw34e5QqM6wQeFfYVnB",
  "key9": "4hHWJCrjLuyqisMTfJguqyCFwCQev8R3BcczHJH9Hwo2VLb1DJXmu2AcRD1msxYpdT4nrMZdBsHC2rAdBskDvSkb",
  "key10": "58meesU9HCvK1QMupT9BdgnARkVAsdNxACpvF4mGbuLRJZnygn7RRnmotjQ3MBnRdfkK5UnJeYrN8zHHerof2S3a",
  "key11": "23rPupZvQUbr7zWFAfANd9SKLUSiDRQC8tTedYH5V24TFJQG7C7ea2jepn7FJecJGj2n966FwpdCeDti7vRUDQs9",
  "key12": "3EHQmBcyTttVAsGzXPCQEyusHb9S3mGoXLFV1XTPhecNZhy3k3RsXfRtwjcBTSuFLMGw6daeS1XK72N5A1bZm7nK",
  "key13": "5e4V6LzAaHzNV9DXTYUE3qXE3hU8QKEYppDBA5vr18gYstjbPDenrPcBaGwJsNT7dKHxpgf3YCok3xjyNkq4soum",
  "key14": "5WxrzrQHq2xuZYkTwzYHUUcCs1wo7e1LVHNDX6fMSdyg5VLRPKynCnWfzAegg3YbZfKcfHk2ahSYyvKWjkxHRX8L",
  "key15": "vXzg3pciHBQg7wUJiyKHHA6Efw4QodwimxthdmzMgeo4Ly4Med5t73G3JcN7axugVpNc5sT4HGbYVqpXUb2juRo",
  "key16": "4jdthfwGnza2QffFYmDU8nRg63Ei1reV19cw7z8n9qZ1cQxa413LBSX2aH7jWNiyoKZx6wdunxVj8M1WQEwCDNnQ",
  "key17": "5oF4Nj32soiZmtEThVhf9ix8r49LrD5PPQQzLDAPDLMVBAsesgXEWxhvK8m3S72Z6YUAirYxg6wxA8hqv18fmqF9",
  "key18": "4RP1NrdYjBVzLCtMW1scBhAoXHKKAdNdYW1uaQgJHnijWbQwsY5gvpkbA98oAE1TJ4ag3wiDjU1WTLvz7Csfjhwq",
  "key19": "2EPYMbfzUeJTEw5Nk9VN9BLbXmKLCTRzcGTSyVuqfzmJudb6L3rbNhyFkfrZGtHiBEPiSnLSKESfRUPqArdEFw6R",
  "key20": "24kjAcAvK1CAdifLNWeBi3Nbywb6HErhu72BjzhWDp6YLV5msAeBAo2s1aif2BwAqLE8pBuxpcqpNMDaffh6pLYD",
  "key21": "2yTe4ZQxChqY9dH3HtpvuM6yFwD5J8mhuud37SaQ398Lg7axE6GedmTeBDWsrj9rAy65aKqF44bYCzJ6KcMdbnZi",
  "key22": "55fURchMiVoNuJ5PiLWfgh6zR6Ma4WEeuCWFLW3kKvyEuPtfHjukC1zXdT2aWpLAdAe6A321aJ5jaT2GDG6wg7xr",
  "key23": "3EKzbd5e5UoWqn8THp3dnPNFj6zyG8rabqX1qLY3JgjM6TG26p5x9KVu7Gya5ciN3j9NzK26GHAemU86YarYi7Yy",
  "key24": "3sZ4jZy5L1TpRQMN1mszjD7NfN8Q7cjzJ9DLBLt1KDeg6Hf8WvfSEnhrPzsoTQ9m1r7q8BN7BBZ6gRWqJANHDDaY",
  "key25": "5eYQ6RY3HygHqSM4XGAYd6c34UQVFy7PLaSnVrfaAV1pL2VsPVpS83tg7F94uLz9aBrDrtr7c8dTtJVyrVvxw67W",
  "key26": "5ywkQ7xdJmtwZu1VCU3SQBRwCdYw36d17epArFBmtyyj9CxYRrnZT75q6yb5eBeyNV8JxRGNwtBZRZEhAmt6oJr4",
  "key27": "C7FEpeuUxkVKGzcdGm4HY8b1ZHfjPhaxVoWEP5WptwGHKSQgHpvTMPqhAqzgyjCXcXK2VN2VaKPBz5eW44byiR8",
  "key28": "4XtoytUuDTVm9HHZHoNydJv7dBFLPXuJeo3FCqTxnRpuHh5RZSzUwLYJAMfM7wNePrUNPQgVfpsEKaCByyaQgSz2",
  "key29": "5HFygfUATUYbWPEymoVtzxreTXiGwWLiR62Bo86aAbSau4GX5LKJJh22rhEDG75HZQPsu2PGzRBZT691WNsyp5Yr",
  "key30": "5ZPWo2VB5AxhEUfhECukkXRDM2Rk7h2DEiTChcXUyVkWqZxGHxeQdgCX29xVyJ3yakpigU3xPaTmTvWEDa7EcFnq",
  "key31": "2576haMYboH6Ug7fnZY8Fe4kWxHbcevjD4AwNW9qF5oCBVoyikZM4U6Zo1E6NrQpxa1pQppMgsG6SgmSg5ZdG7Xx",
  "key32": "5Pkc7TfDCGEfJE7P6vEBL9SMto3JkuS31feXKZuoYDTdrzGinXPAok6SZehB1rHYPAnZHYRT3uyH142g9tYzJZbd",
  "key33": "5L9J5TM8YkFv3r5d6a4QCy8Semgd3FZFhDS3jsVbv2H2kdxeotHNTPELqX9JCiVxDthyAjC6ipEbZPZ8o6DZFKWZ",
  "key34": "4emaJtRB4sJeKAHbRiRcQ8J1AdRCh8k1Ku5aLM7yxtCRaywP1YHzjBNdncHXA1fbzTY8D8Z4PkY6co9AeNuds2zR",
  "key35": "2Bu7Ue7ok3FjQC2xi3UnRdCSdbFmfvJdY5puBPK4U2b8AE3VE36KmhNMkzcHTc6TsFfRp3YZu1x5iDuxsRkJzmtw",
  "key36": "2pirQV6RyAxdyWGSybwdGGXEgKSEjFvc8BaN69EoBuppsniC9ARELvgwLvrZERdGVDxjoQRmNg7hYkDkK8PhG4p3",
  "key37": "2ghYzDvCGUZfwQbim5E98ckWvEv8n8HXKZP8xDgfdHr5muZhZvkCqGEV69ohLYRZeJWo2fwGM483z6vq1seNLR1v",
  "key38": "4yMLLo9wS9Y7LExhexB11HikQ4F23ZGcuEguC5mFr72BhyjsExJu3K6rrcedsMW6EgNaJ1QRek6mgtbkFbL98XjX",
  "key39": "2ZBioeqzZhQnTR4Kyu69zXAfncTy7NZZUp2vPwoLkRytEu42iL7tEXZoxy7t2noMeBFLPGjA3B2GEbrAtspv4P5t",
  "key40": "52skP6omaaXBJaYtXkXsKXfvkse33EJafpjyWucZC4msYaLxhpHPbHWTdFEFmZQRiTZKbnrBmABuFTwX7FkWYBuA",
  "key41": "4goMrVNcnLYZ6ibZxsowb2gooh34uou8TxUggyJu4DHbESk24BMXFgYoF6xwc94bP3SgfsWezXeMYHK4dSRjewY5",
  "key42": "5aBffkKQZEBvtMgjyEen1r5jkzNjhXz9h55XxiTFB2BL2SV6qfFxk3bYoHyrhLzbT7f58cmfjNFwxn8D2aJKTLie",
  "key43": "4Gz4umfMS1wXbjmPeM5mFeVF6myLPVa4h6KsPHVxxiZyJbYTvebTR8QrFabugcHtCqCP2f2rDk2gv696FrZYsdku",
  "key44": "5zSf3R5GY6yLvJDDhxoHKKTQiB2iacg9UVxtoeGJKd3g5cCg86ubft1wPzMau2hyJLUJdMB71xHnaG5vVgJknzxc",
  "key45": "zvrUX6XQ7tf7ci1UrujMTKPBceYMswZMdragdGJzkpdUjZUVSvubtyjbLMktvPGjgQGGbHGx1pEwbEhg1wkyCN6",
  "key46": "Mray3fjWDKYhYbpo7MbkCp9cZACC3cTmqkAvcrohzdecPz6JPC3CJSosHG7F6iGbKXTbLs8BDi96Cr7Kx5pW9L2",
  "key47": "3dy7bePJDVhXYM4pXY1wimZnApdGt54pzcmmy9XtVX83HEdftJULoa8EaXtTtr4oNHKkXLKFrM2RcV4UK4s1zX9r",
  "key48": "5yU5mXYAeMZjXwxyQzDJ3ukTF77WntBnFJhjvZLfEGcr47iD8Vqhx2RSD7CzYaz2Lh6y6P9XRkLj4FKeynVNjyU6",
  "key49": "2TudTq3XYYeVbB3DqyccM9bQ2FNMzAtM54vr7AEgUcfzd2jneFVTpwhpEeSR1di5jREFLP9wePpeGMzgFLdBggFa"
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
