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
    "3HCueSF14SBimMtj5X98NEyEGneGwWnmyUFAHeG4x14PowdxFnGKCzHo3uteK422mqdGvzix3UVKfwuEyKbXN6hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a5QKGZtF9Yho6A5f3RUwoRLGF4iAUEfgriDGWYHWPVpNtjgw4J27yKWzYmXQtAjGADx2x6n6jztd8FbkMBek6EE",
  "key1": "4rDp3DThFvcz1jukBAPvRHe8esTYSmJShqNBN4PJdSDoDLb1qU5LyMLusd4DrwvG1f72wTmxBeuMNGzZJ4W9ncyz",
  "key2": "4Pazv2x4PuLBKeVThqUWeUCYABxwdktY2JEm6TNB7AqccsVop65THFiSqrMP1ZCpspq8BYJtVUcpRLGYmqwFZKJz",
  "key3": "2FwDZwBQQ98nCvf1717juPMu29FxtvhBnSNgaiwg37zBfTvMmMd1xNuLN32sckWPsn9SLVNNJKnosGjQUdxsQCa9",
  "key4": "3tCJKHKZ8gNF5Gf5CQTsRo8sSPkG9aGeTQuURQqb7fmmeXeRr1MMFhpw31opk3Yd6N33ff3EvAfxtWUJc7VLdVQU",
  "key5": "4rZEmJLGqdzz4qXBnZc3zXFwQnG64kamAfGnJPuYWosZ8TokfPr7XkaJGUUo4SKcYWJnsBLb6J6FVR7PEY2tmxYc",
  "key6": "5CXmhPxEqZEJwLXYLVx7BEip4aztywsv36sGYEXMZjfbUHuZV4qrig8cfRYygZpgLpsgZeBRPZZy4H1zMh6u3EsL",
  "key7": "EJeX62MCXMfjaEtyZrRag8emTYJzd2iXY4sagbyDAm1UVkvpU3QRjxibUgqudqztZabTJne7Y1gVBaP5vvs3gur",
  "key8": "3rQW7xKhw6ooWdaim1UU6EzQ2RepS9z8ExNQNaK6dHuNZSMzfySQhJeBaaPSw9U4DQYCuLfkT5BfPtNcWRUQ33Gz",
  "key9": "5vjnNQ1qqjQqvCu32X4bgyMeZAKZjyajEUumEj3ztuw5uMmou2xu1tNqVpGPxY7EtykUWcjJJUrwnkNVbsGLv2Jg",
  "key10": "nAp2Dfgvkwif6NKkY7ze5foawJ8Gh9VojmJ5yQkSRoBZUG5zhDvioq4XrpfhhNAFt3KBpPBeoym47cvAun3rtgB",
  "key11": "67enn8dKJyFx6WnzDGTazdKtgR56F6vMNPURE5ajgzTt6c1M8Mjo1o7JFeJ9rE6a87QSRVmB91KQrSgvEqH89GN7",
  "key12": "kmY8mRjdYLogHa9sFwnreMtDCnCMjzWHwiVHewnnkJT4mWrd6PRFgYmo6DSyUzEUhwD4ssv4LQcNgH8KPWdGEAi",
  "key13": "2GBT98vCygqB1U92UMmjpaw1ynBcds9jnRPsgUK3vC4KB4XVXwM6mfykc3xxKcSr6diGyRzi3XMf3DXkPjZGPbMP",
  "key14": "4cUjk1P5LLxqDGWKwdU39YfmMLjN3Dj9JN3jBW3XQDbSBLpycgDfQF7ZQatQMbjTZQ99o8UKss7fThiJVG69m1vb",
  "key15": "f8P6rLhMHKHCUWuhoQtV8aa3WcVtNqUMUAf1NLg5oqrmiKzTRw1U2YhitVS5Fj8JxxR5iGZVXQifygEtU3t8Foy",
  "key16": "45v3HfPWrH3pXHHKhj83q2jzpnSQ2pqCirnZ79GyfFdSZpkQyWRRSxEAxoVZ4kxvVE7CnjZLaYpp8U91iVsiSDUL",
  "key17": "5AGe2fqXz1HSAMyeez4fgDVe1f1qke3gB5bXRpZ29gtW2o6xr3FExsdkFWe46qnv3pU41kboE22PgKQwq46nTLMV",
  "key18": "6cUAq86TTWkdDe15kjtJQwwj4koubBhwX8kaeLumiVYTPi8FX5hGQ4eYbscwmjXviecVxWJT3Q9hbQVqtiDt1jt",
  "key19": "3zyu1SxsvDFQ1FfqUhoi8TjEF2UyZroqaXi22zFNkyQBZszFzFK3ebNso5L2muXSW7aDjSph5yri5DvaXckkqFdQ",
  "key20": "hpMp5qJ36BdqQztVxa9ZWjBSmriHiAR7vc6BMzLVAnHvvuBz8eSvNMLfRky7FYZ5RF1ANeieWJQPRkmXM6xqcdS",
  "key21": "26cU7EUm9GwkSDhBGgDv8656RUPf5r8whXc9AGN5aaGzcpMMvtNTKVym178RkshED3nWd1x4qB3by6UenicBdxTb",
  "key22": "2o6CFAGjacTfc6ECu7mcnqC8m9MtoKuKoVEW11vsn3RwiGuBNnNFXc8dbS5dRwseJwzFABKSRiQ9xdPqTer6XXvD",
  "key23": "2q4ofCZt5sGTwUdLNEsVmYNvLeAbXNb8aHRNAudnR8mrJ6rzVMSRvcZDEeEJMAgmWcvsN8i94NpW7C3uJ9UGitFQ",
  "key24": "5hrXfvQVymzAmbgF6yEW6LhsjmCQhE6dSVrFfmZ1B7yrHTwpd5qDEzqPHsF6TLHAjaX7kVSVCpG2qwUwSwNrXyMS",
  "key25": "4qLv3bYSG4TLqg9u7znnWxJzMiHrpYJ8xUHt3t4XC35fpy37aDUEP8i2ZLkTD6munGRDGWyNoDS8PBDguepmaVH7",
  "key26": "3tL3LcjAEzPxW3durNGW7XL3biSG8XkU6hygDzQ21a6whVV1JSuacnmHR4UrvK4kYophe5asjunjC4Tj5iTMPRMo",
  "key27": "2xm57i6aXKmUDVkh65A1SjXdvjuy49HhnizQhJrBT8tHA6uGeApRn8DBaLtR6ipFgbZUWep6QAyt4YFbyXQGzjHi",
  "key28": "4eJhPwFTH7SfJCKFKPZZWzjBB2gWNxbk6TEZ76KvR8wg7xrLvsV3k7zaVvDFE16o7b27XE37AuUcTQN6W8fAJa2f",
  "key29": "4MAEygAqP9W2zCtE2Wn9cdTCaXUij25eHAf5SbxasdRHF4L5YAGwkNvHzVFHGm96HBfaqhYfFEQSE1Zpa7bkj1nP",
  "key30": "3zwWzcWSUe5JspboNDxBVTxftSNyp1PC4N113hkAxqxdkqFU6eKhHGCDx5ccv2YJD5sgUrpFJawcn4DSs6jsv7BK",
  "key31": "4HNHXigVz9oTy6nttQiUCjAes7TF1bDT1enSTK9kG4QtAgiUJn4Vi24RLsGiGRbZKGniZ8CUWQpQ8fy5uAMHY94y",
  "key32": "kBWCmpn9ejJRRpRKsxTCkNCJ4WXEYLxUbzg8HS21Z76SQRCGTENJ47Z8d41Jhf6FhbqbvoVY633qG7Qqeyw21Bm",
  "key33": "NTpiY9DHEVPeoicQEqdRDxgUvLgHQnxHQF22hfg9ATHaBuB7Au1NBoxuxbJaTCt6HhY7M6MpcJbokXdaHHGEhoh",
  "key34": "2dJ9zLtp6ucav1UkLXmhMiFjZS5KB9KktH4BZFC9FLSGVvmbFEsJYjrzHACpEmGrh38DEH3db9yjWH5okBBW7hi8",
  "key35": "kbZB8MiLk3nBURJkKdCZdQkThANZaRcgjkEpgaGj3V5UA2w5EJcp8DRgWpPxcoyQmKG4YAYmzptafqbyAMN7QRp",
  "key36": "4JqR6AkrXV3ZXNDyHTqDJM8qN5JTwYcdm56ghcEBMUFHDJAC3Mur8Gb4iCt62bw81Jnh3DBULoXCoaKPJg9bamXG",
  "key37": "wq6KJ6qqUS2bTCMLUDvNGsXMkbapE9UxTDdWfPpRLtUwdHzfXr31GDTvWaD2FGA57koCSgRBmoa97PK9Cgom9UQ",
  "key38": "38rxrpuJh4CqZ82ihCbZuUpjtSezTnGV4s8gG4DSsJQ5BCFa6Xdpf5XDBuC37ZfXKuQny4ZKoCHL7yZ9pQucMDVi",
  "key39": "5fStg321KzbTZ1X2nUYV72pxMBW6uJxFGsaddQ74DAEHBooRX6Wat1btfiPDsXzzogoSrRoU6vmoM23SuCSkaaSt",
  "key40": "3uaR1r4ivxx9NE6fdJzDw2tKakug4owqovwTM4jczVooWZWcmeN3QZppYDcLmrztCGh4g1vmJJmScfmWw7DTTDWJ",
  "key41": "23AUNejEMLJ1GBSkpYtvnfkzD3hsSeA5pQZiwVWdDiJ9CjyLs1eoRTcUJNfSBcEMTiFJKt2KBXYC7935NXm5v4u9",
  "key42": "4g3VwJTFPcmDN5kALradxQjdys4dk2PS5qZsbq3eQP6WCv1LqNoe43jj8pQboaxgVXB8ZR6cbdqz5AS5hQHqbUDG",
  "key43": "4uGh2zwcSJP2e9NyiBLucoiLTtGy6CbB1ArSdNMbzRbMWkE6GUrr1zwwNmqVdZiUTChAd7wpK2jcHtNmYKyWcfFE",
  "key44": "3UWAUnFXbreUYoJAQDqN1gLwjrcngjhcnsVYJHNCtBJtDBxuVUDJNsXArCCjLToYPgZunTApbKBgE2vJk2VChar7",
  "key45": "4NNMemvXecQueLJmVgRdH8eyYJnDvW7dP5dKcJRHPm1kdiy8RH4fig4e6jZ1ZbdnfeuGDVG9JJZYQXnje343oENr",
  "key46": "2gwLaY3hdTvmHwBU8MPaySf32i1hWkkGa57ztW57ZttWU1zHVzmqzgQAfZDNeVsiAbFJN2vcsfJdFzhuRGDyvKJq",
  "key47": "2U8PuXn4bcetSPxrqtjdJmbtYe8LhoJi1DWsqkMowsKybs8gL6aJ4EYDTFRmQvrzSCCLVHR5qpj9ESgjtDgAduXo"
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
