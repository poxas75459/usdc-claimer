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
    "2ZLgkzh2e7wDoNLNAWKZj3LWEpEPovdmeeyodByU6GM13W6VzJKis56j2A25eZNfi4xf6gqfga6v76zyrg264sLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f5YdzqGqxXkxvbQqBoC9JB9fLxLTBx2YWXAnrEiUyVQrfKF7rQevbcBCVW9utyWk8wJazkg9YFYhWCBmNzh3AHz",
  "key1": "4kqaeQX1sxPrQTpG1ZGfucd7kbSHu9Nkvokm8YpFeCF4EXy8ZR2q23byQRYh978MHR2zFeDTVN7xHY9aRMak25Pp",
  "key2": "2QfRAjSeHmtrn3insQ7r6ySesRvdcA2sKea19fHDdwS3Xikjo8QKpz75KvJNtijxvgREe4U8hGHA5CGz8RrfUL6D",
  "key3": "db94n48em7ADBxPzMdifLbDakcRYwdGFJDmfAfSiYbUpsaUgRpXxjFxzGTq2EqxWXi2ivSkEV1ge1etsasyNumS",
  "key4": "5Zs5C6iGdPzpFjDYouzpP3dDXVp2sxKVY3F6yD8NxUys931gSCjqzWLsV6UmJXh4Fu72QHVqLK8VuZCVHdF63TBy",
  "key5": "3c3wNByAW51vCah9joe27YXwjuK4gZwgZap5CG3HWjsnAaoDpJxKuGGtout9pCKwKJuKsMt7QPXGgTHRDrUPyCYW",
  "key6": "Pif71M3A1h67n9tkZKWKbMG27rUzdSjJaD9AQmVrM2V4QZkiwGfvQCHX9x5FWdJzQuwjMgaqfn22pES5s7TkKH1",
  "key7": "4cFdjY4dsBDuCPmGokZyTYxvsaySZfSeQRBfBDnYmZTDMMTk2oc3WVXrsfbtgyyqnsfUUVaHMUZUjjjsZq54FPbM",
  "key8": "4gah5vCeRQLJ46Dhsmdw41pVBBYWZGxVXVDmLecduEwV6eC9d3zRV5tpw2v4FHaJSPyH91g7C7G379akfDUNyU2E",
  "key9": "3Bt1WkQK6QpJEZ1x3KnXJKXhkaNsu2T8n6qZUBqaKxvFR5s55SbmY1X1xYew1C5VLSQR9WqVwPrqLgzK9UtMtdHD",
  "key10": "5fF1qDSV5KgB3EsgVdooHW8djwshzGChmu8xvxiHEa4FmvDYYRtdELs8fs4RPLiJ8mGj8SKmfTCV1G38eNv9G48E",
  "key11": "5DQYvZooFJHBnHyjNpUyhBjTnqgoBSUPofcPf2auvhN4HGMQ7tYaLzZFqTjbzSCxAfyuzScMC6nDG2g8TgaGTvjF",
  "key12": "4C2Y9ZM1PU6bAhN37388h8Huu49CqiSCcbP8RcmerwTjDLwSf5t2cL9NfsW7fmGCTKov3tZSyUoptJHPwTT17yiN",
  "key13": "39HU7psa82mjYvLoZAPYTFBMkwGktp8NWzzKr3G3Lpos3JTK8QswfYyuBfMD9NwWmxW62DJNFqruhEFqiVy9ipgY",
  "key14": "3k8faEjn6yadRTGUfvea3V8fWL8Zi6m2yiyB5HfWZZPaYY2S2iYYf5iHS63WMFx64tkenjj3gwC9nMrMQ2z8zWbA",
  "key15": "4Tpxgi1oMbybeBaJ45uMHFueb9N1dWVwPT6DJ2C71QLoFqs4sDdDBCw1AcyHGXYJHZ6kkw4WvznaM2xHqBAjjgBc",
  "key16": "dMVv2Mkmp8yoQBKCep7NBF9abq4dAqdCu4TtFEUc9e7TwNKEAxeVG6pQ2cCvFphbrvYdZULXQUxXc4Vwyn5jVov",
  "key17": "4FUnQG8Ukc7MFNM2PYfeMMMXmpmiWeedJcpiC5bYYsWQ7n5ZGydeNPvaDcnq7B4BrzgV2aDfsumDUJ9UQHk1qFmv",
  "key18": "34NmRcCKaoYLLhnqwQVVPy1TXDnVbk6gqKN3Mwi3uXQ1FZzHM18PxMTWPqbUsXRTkNzT57modAL5ZjBBeDGub9rD",
  "key19": "Prvrec3tnBv6HGXjKfVuDZwQZchvaCLSFEAhiTs9zE3mvRU3aRxo3Cr5zNZXVAfrBzauZMaQvLdqBezNnxJRwMR",
  "key20": "4f77TYv5HXhh3CibjnfbQ9tZK2u12EbMDhV9QSQYRFLLbZfiCcK7GV3xYZ1Pp52vzLpTT5HKwtncqY3y9zmC5dPW",
  "key21": "5gVwsDGsoLaUVxUL8S4rEU1WxGAywkNGiENpRk6aotwwSMQ9DLJzPrBByTC3KcwjM173PPYmBnCQ2UNKp8v2MQZf",
  "key22": "5Z4zkgbKLDyPhWMMPe69p1Bu3NRGNZRjxE5281iDu8no5i384MEB1jQuFnTSQMvAEHWTJNvRdqypDvX9MNTN5aMe",
  "key23": "5QvxQRMEFrziERRFr2fpRSsiQJYuymdPJicK8kTZazGUtQUkpJzKPvXMxKqkuRt7bhWeCeg4gXwtp7WCWeTLdMMn",
  "key24": "47nx7gGDu2LAqB948nALvykmwB8QcK5HXuDTsBVZ4EA56AUv6D6b43PYQhvFvrHmBxX5ZWTToq4ChLcXCfeA9U4e",
  "key25": "5LgDUmgSUgtTiz2AEUponiimXaG8Jje2YZ2b235ALg6CoZX3BoCvvagZhmsbCkdyGk4SzftpfN4KiTnA4xjdC4iG"
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
