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
    "4y2yEFBoWpxsKHkFDZjvsGNXsD1Tepdczt5SEfZSjPru3FgmFHrJCh4BX9ExATycQrMP3ptvBuUTJKe1Ze7Wto5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wR99cPUcjEq83uMmYhfJsbnJQWCgYQJT1WAojeaTSztz5enqVjXMVsWq5E566cxP16AGa4qGNf4rjMRhRViB58s",
  "key1": "5JGzMZddBpupqaMnSS2ZUqgALrvX28wW1K94nvweMXigKUoNTvD9vEBweeqKpdNSWgLcZGk6sYArNP288L85a8Lz",
  "key2": "2qEuzwjktXR6NjYZsD6RtZJVbrp5MPPK6VgpK7Fqw9CtqUKY5MbjC2Bvz4j3iyZRwe5WM2YkDwCPgsEy8svdAxou",
  "key3": "5m2A4zNs6VEttmV663A2P1SZdkeKeabiKPAAdE5uJGC9xBewGxzSY6XApby5UsigUYEsr2dcyobMdE1AJZ4UrZWt",
  "key4": "57vuTPHr4UaWc4YNy86q18KK9YbdrTc6aUFnv9xpwHwHod4KNxB6xyFpw3uAA1zFSSzXR5JgyyutL6pup1mG3qsJ",
  "key5": "3BeE6SkKJGUxMaW12sNsmQKaktWnjm89EFjjwGWvEvFDH1VKrKdpdQ1TNEJ3eninTr1Fj3h8oKLHUtqyqRvys78t",
  "key6": "4fEvGU8kyYbZCb5dYRaPYUeF4yQC7tZ6dsQba5dH3B9bm76HvXRyLKuSegVDWniZCWR4FnN1b46Z2RYviQhdsYxP",
  "key7": "2RVpEXqTU9kgaNJPVAg9kkW689aqgk3Studf2jUGaPCFtuQWZ3xg8icFvDGVaTiYqQoXa5FuXXKEmj1GtGo6dQyV",
  "key8": "AUkXM7gH9RMUjLY9DtSPczeDubXgpxFxMaJV7urAhRJXMsMiM9gyWSBfdwMPC4ZpYzQrChdJcjVmdXYULB23SVT",
  "key9": "N7aY1eaPe9tQcN6P3xKzr9CswA6AVChuJVVbYFBW7derL4C99yYL4Vvxe7KCLYNySodQJBqseQbeDxYCCrWMLb9",
  "key10": "5pN4rtGK9NbHQDiMFtQknUUVScB78kQn6649ubYBvh2tndjXuLircsfAUAgNNK9LDPw73rYh4enN1aSB6LwZkz5z",
  "key11": "4FpY2D9Z8zj5a2Tqhirpw13vVRkLeXVx9c3vsKesuoQX6SgC1ixcvMrn4TCxcdZGpshj1JQnSHr59boooWFmYJEr",
  "key12": "4XJQWxcJgpvHAPcAvQbnQaGSZzVHDKzBz6BEQrA1U32jaySgoowtrwspLSWnjrpzSt4b1S3ZoKRkLnaox4556Nky",
  "key13": "2h4QvHgZdhXHLDeCXfteaU7g2wbMa29P8C8Brx8BN6cYffbjfGVTajNCSpgN2qzVSbpohdSn9jj2KyDay5XQHi18",
  "key14": "3pqxVmwGhUdNtdn2biEpFrgw98eDWvjCHp9vYu7txMeBT4FWCBMLSYbiymDt3k342g6BzuD66dPFxWQSMqr1HPPz",
  "key15": "5vGoqysmsTHdUJzHbruKYBedpyDiSwHrDGUGbSDPfWKGQDeVpE6QbriBuiJJRMjSPygVNjHZQQVFmQ6G37Ck1zt2",
  "key16": "3CWmhbmqftxx7VVDkEBdDR2xwrUWgxMa6Zmzvavt7X9KTcEog5W2QoJ8crcKqaCJjbsoGrkMqa82Z2hRhEj91FXq",
  "key17": "47nUtYuWXocAcR7BBrhcUxM5M18xUKBq9ZGiNnp6oSiFtb1HvKzVhMe1pfFLnRZ2gN6LAgQumH71Ak2wxbhuaJdm",
  "key18": "4JqAQpUDmtoEYGnv7oyETi9rXdfoc4nCYtmWNAkJoYdFDZFvsexGmz4wTpHaULgVmEfBWadCtWC9rN92MTAyvZ9K",
  "key19": "swpDWjwgFusaULApokijr5r2BTnVtmLv6M7aRMdQFTHJHnkYVQGarvGmABSBKUKHSmD3HYEY6s5zRzvgymrJZGf",
  "key20": "56ze3JT8sb9btEbZ7FiJMmr6MtZAq9GSjow6fpPEzsCRGQtZ96SAKnVXySGkP9QpLdiG5V6vCFXR3LEmNtMAE3ZA",
  "key21": "3mTe7peNu1y6VmnRhvNoE8ALHb4eC31Fdbey5dZxD3aZMysSKPP8MSGLDXrcaHa8jZ4N5JWhTCPbnx9oBNLVjzFi",
  "key22": "3uBU1D6KByLj4CkJoosXUPduXe6opz347UN7Sqeoh1rDnw6nV2YwigX13JjoZgNHfFrfwwV5MPbiKzus9pgXPzXQ",
  "key23": "3XfEG9C2HEZNrfz1Cw9K5Vv2KvSSw8ASnwBCSrSymz4g12XLPtUujH5BL77ZJHGHPGs8qHVD9gV1p9pknMUyxkgw",
  "key24": "5LCzAcaJG76WjjDnfvxaEZ8Qhax3gtKn3Vn1DbyEpJkTaQ6J3qpZugVL2HgeSQag4HxQJnVF4n5RtNjm56ZY9Awt",
  "key25": "2jbioiBbvPpfDZchEvLd4DApHTtNt98EXmLkUHArq7qaaqov9rWA9eudWDMHy5TfUo7axWtR39miY73WdtbGPfm6",
  "key26": "2rDJfZ4Wb9urPH1cTgqzN48NVDtH3Q83AFUckdJdmi8p9aPC5izugDLx7W7p8Dm7FMya7Liu7EqtNLEK1gFE7yPV",
  "key27": "3hnEHundHna5RKcf74NHHtRkcUo3Y5J3inXsUqms6nZ7X9ZbqB6Pn2FC7tM9tssJwsUjSXemSY6PmLEcFYW4bjJS",
  "key28": "5U1PzmrDVwSRT4ej2m6Knqw58XSKchv4QTtFSqUny655pQSMeZAMNzmK9uQdPUDNia7xdc6r4eFmYRwgoHwGroWX",
  "key29": "5oVoVCPG5EtZ6Vkd6uQGKWwgMhGsocx7D1wYn1ughkHodNEdigxChF2ZcWYDbkm4wXHQEvhC1nH3W3C5PhFyc51u",
  "key30": "b8QfCAtS2gtoAip2DVzVCQbjvSJEim2tbN6nmwXk6tyaXyBfpXgG9KATZvsM2zb2kqmA6usZNBzbtWLG6KrXhMS",
  "key31": "2eecCXTYQfCdjbfKZxwoB9Kkh2vW82WNoesHiiUsqMnSue1UhiykGw78osqhELKzRrvh3AfduqPBQj3BDQpdRfn8",
  "key32": "3jwAodcRh5FRiLkLhuXdcAedCcEHFjqxekeKmAhsaoAwS3r6eck7jxg1BWcTukuZmfes9skvmQ2hD4XGkhEBRKMU",
  "key33": "3kQ9cWfrMz8gKjYe75FAsNomJ8XJzMzpAq9ddqQACt4eYrxYgNZJHKYST7niXt7uRv2wLG1RtaMRr3Qv9sXKshYM",
  "key34": "W1tE6MtN41oCs3Df1VH2tzVBCADZn5h4MhNqFAL6japVctsLfMFLgYjj3Qx1Aon5pGfA5UTVFEpRpwMDntN5KF5",
  "key35": "5t7wTyHFXtu1k5u9dAhye3KWWzsCBDvAmpcNs3BLYh4RWfh4FVu1gCJcBRj9KSPMi6Mq9HBTC1NQo2BmZEdnYYzP",
  "key36": "5P4KA2PqHzvmmxGNvUTYiv4xqKzyntV6S5npJZh1Q4jyGnG1op5ftMn2XNT719dWLQhJPpTdKU7iwSXKB9oays79",
  "key37": "3atzT2n76zKBjBy2xbijuL5nmd5MxAZUUraNEifFX45mmi6cZVKpMgxhQvENW9XBZapLWs7N7y9ef3JNvbE12LgD",
  "key38": "346aDnaYDDq5gxShkBkNGsKV4Q8XQ8JNphx3rdtXS2b54Ur6yfrnTENvr8X4nyERq69KQnycNL9bJh1zNtyGJMWr",
  "key39": "5KR6m54zutRrcLxbE8DimYbrCANJ2nyKXg3UaGiNePNTqndtrZ7CoddoGAL9FxDRLn1acNugbFCytD7DEw2zNcjc",
  "key40": "QgfzeXQvLYSmugKrXWFLfcgw1LuVPukJ7DXXE5otPREwt6LdKwxS35qvxFV2a5yh8aY3W1Ft3Rj5CdrQccUUCNW",
  "key41": "SiECvvm4Y4jR7QAuipceAS6S1pDMKEHm4ER329tgE3dzVB9Z4GfohhpqZiDMgX4WejaLPTukRJ9RvoXfNEjuWXX",
  "key42": "5kxDmaFu3a3cry4ktsSThwr1xiBoi3xDo8rGjFkM1asZMc9CgzAYdyu94VxKAz3PNMKfEpds5aL8K4ZsxjBiJ2mh",
  "key43": "gw1pw5edSXbEbVD674SHL643EekBz8KA1mEzdiMYPSuF3DD9z7tQtKpuddxhod2ST9i4UgGKiSSU8Pxm4Tty1gC",
  "key44": "4G8uaMF5Ry6ZKbhJA3XsugZSh5csPzxKgGEkMctvPoo1DiBJjeq7yp2DunfthNMdAxyK9bDquriwr8SM6tME8AR4",
  "key45": "55ZRmKLBZgZFokkD96JnqLpCfo9U2Cv4ykZfvmhcdvkPboTWD5bRpWyfDPxqNM5prRY9CR5yPKUhWhSVJWwdwNRH",
  "key46": "3182ScggFeoNRTdX3qJhT7CvU7tDSugkNjEnFmTwMoj2FhURkhDsFzNiGg54V39qFa6zcjBATMkgYU7dEbPV9Ysx"
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
