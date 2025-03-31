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
    "4325ox3HgyTZghkiQhzEToGGNE24uP3ifNuqhLnBT9aqZPsbmq6SADQxDhHGgShhRooB6hLa5zzSWeTvy4m8RuVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oxhyGAsZsqCHtQN3KQoY3xr73SWoLT7hvVcxuQ8xgADoKXS5rn7tgw9apVpFqBW8dZpbjoAcCnwMPnYQKYAAopL",
  "key1": "2WYzA9L7ERtbRK7ye9T31HMQkaj8hc9Ehhp68JvDmqp5FrWshFJBi9bpHvJrPiGpmcjqhFTVp7aye5d1aT9sP71p",
  "key2": "3rjDHXxozwZtyRac5iNKMpymVwDxejTTW2qUzEYsE6eB7coUDsyX5ePWng8mdhx94PXM9bW8gsA1jPsWEvLse8y9",
  "key3": "44xKJuPcQFtN6hWABc5iY3UWmk8JaumxowEeqXAk8eM4Jxd7Hig9CjF2ma5bCSjkP5kawc69P8kpMVSytuWMgdSW",
  "key4": "2u5MjPxCFG5GFMbrWUj8LJLq8Kzgcidro4y36xG6CM4AcGXqLjNYNWQnvPj2GGwFjDNw2qjSkERwtMmYzdJ8Fo7a",
  "key5": "37vEVX5fR1MwJdMkdypt7AtqYkdWMNUm3KGCo1y89YLLb38DhHP82RKqYBGjLQ6pgiHWA3mmC8UGf4HDnmhKSjU7",
  "key6": "5VrS8GGrw4TcvK9656SiPpNU28iqkLucPpAxmZcyVWzPM3yr3H9BDHWWfWkh1RA1mn6mGqUKN4jLTmPSnhEtYhhT",
  "key7": "2nDZEJP5dogbS4Z9YR8mNxvhAukH2kLWywUBrTkwmKKwpZgh9sddVkws8w89kHjpeYh99TRUWkTeDtiUxw2vm32H",
  "key8": "2TF12xvrB6rwMR5tDWoLwqEskbTnxYikoTU6phDSoaXLsmeqy7aZymyo1PgairR1jZu39fVQr2LZYF9YUf5zcaCK",
  "key9": "5geJ9XkNmq8BopLypkwiYFLkJzLPR457KrAQCceG772vVTvMSYmpdCXap6ZA3qkQ8ZwPG5ZAnnihrXM2JSJdfvAq",
  "key10": "4AV1hG5ppUFjNm5eeN6QfPUAMP1FKJ5xhMbxzc5Zvd5ZkhjUJezSPcxvZUwxnyA31cHp8DQkpAwi3kpnU7SUVjp8",
  "key11": "2PvoL76Jg9EfGwbprQCeYh4EqfLJPMV9sr4cPxT5Ps3GbVmamUEvgAX1S7syEXnQzF3ER2aBbrGPjpBFtwLQPKv",
  "key12": "2yX9eKELXE548aaSEUusY3Zz8sV6Yq4SXW742RRzScUDguotRxEPZAa29h9uo5czR9wqpFikRxHTi1nJio8aNEfN",
  "key13": "3iVWVEgresbzZFkbthbChxE573sg3KpY1QfoELi4FJMD58EAxLfHxJnBXgM3rxmqA1vSU9bhzPem1iSHVHX2xHw2",
  "key14": "2SjfKYg7PZADrjPJ7etbTuGys8G5rT1qy4iVA5fgmRaSPG6oMSqxyfM8CGuS6gzLyjwZpZvK74h91ZhE95rjXFj5",
  "key15": "5X9KvRA28n9h9D2j4W5ZHEdBv7shmnihLKCkaEdPrFzgjErRNMk9Y6uPEHax1JN88c6tcFymttsNhF1ENDTL5bfC",
  "key16": "ngpCYTogmSv8rqKTSK5Evf2BZAb16UEyWvzK5Ady66fZu1e7aTyzi2RWfrgVKDWbsMUFbjB1MHan4Wu9mjZEvf5",
  "key17": "4wf2YeUNMRNmSPLnSUDvPya73YW9zo9anRQseY4sKRrSNA2LxhyGGpMe4AmT2SQoypbbwdYk876Hz97ghp5N3w2e",
  "key18": "24h2AevNQ5BMGSEUVSmDGUnvLF7kGiu2kMuYQ6DwgX54KrdEFhDU8Mf52mCpFVcycn844tatMVEAzJu8fMcqwRpB",
  "key19": "3psSHEzTQqzkNMGn2J9KcYsDoy8qE48N4bCbfj5ytA5Eg1axTdNQxcHhUkXWrf77svtVyGqwJdXuEZ9jV9SWV4k2",
  "key20": "5bRYpoKKsbLCt4P83EiV38VV8Hpma4AP6g9GwfwuiZZsyL47jjVU8j3xDSWtfihDXnt64DhwNwhPnCKxxD6EsQaz",
  "key21": "4nZQ4TKMdhfC73D1D1uUcxzh8poMZ3UKsgd9JnL1RPQkKQBBC4rVnWVoW59MN8dbAxkQ1NJVMnFuL9zmn9RwWoCa",
  "key22": "4AAGuAFni87gXbQ6iWNNzkaMpsTFQktijiUDNwa7196Ct2DQokm9FC8LZv5hDoBkaxZgm4Te9NCymQz6QQZPSTng",
  "key23": "2JZsefHXBFyHRpJZAtFhPqFqNHEKVaHuyAaiy5tDHpwMsvtemFMDP6jfm3wvnms688HhVu3JpdLMWqznR7KtZ7Vx",
  "key24": "2G5QzbFH6hkCHaUcmcAhzDR6k34S94ktt9fAn8HjAtE96grfVEZAw4mdsyGdFC9v2ZcDdQf8NvxYSrESxdWp1Ai8",
  "key25": "62whDnhgfxme3SWeCW5FwtLWx8qLcLNd7JGLWZQZQGxiTXnvpxMEHQCrxQjtjKFWdc7jEU4iLBKRipv8b3E1AQSA",
  "key26": "67rapD43nKbBDQjcVUjtZTt7wNziPQyVchDh3RjhSZcP836JB33NiUxiFU6ZUi8MJnnUqQBFgjduZRJxSwFNXtRJ",
  "key27": "65oQUi36SPbE6Pvbehx8Y5zUopkGjs3Da4CJiGqxawyr2yUTsnkksKpTRyTM7vF1UqYzdhYR8LEK7mSrCHcsG6f5",
  "key28": "5eSXiio6tQ76U48LDabed3TdGiTunk2k2h1n1SLodrjHVy5TC4nfM1hwpT2JDLa9hcsdjLu5F2pT5VpfsJzA3vsv",
  "key29": "66htvuMgHj15jMd3nvNdeSukWTttERpBocnvDyMa8CqdwstMZTvgrDaa8B7pzzp1dUSxFttpjAdFc68GFW3DjUs1",
  "key30": "4jpAVyX34qWXTCnf3cVH9i4W9aJMkAhhUtpgraW4JjH5NaHXcFX1ikjGaCm4vtrCDFFErUG7FGdJpowLoxZTULu8",
  "key31": "25ka7LPfRj6LEdMdQxnRA5fZzHMHzMSfyMhNdy94hauZYzhvL4gZpByiGG2mRT3ydw2BAVkYFMaYf7iBYAL5zRQD",
  "key32": "3GX3ABoFvBDoZqJdG4WQevkfUiHHd8iNrtsHZLWRP9iF298hCqqid6BykB6eMuQB88Ej8Sv2TtW6Bnb8of54CPcT",
  "key33": "5GQ39qYvC5mKHKfm2mneeeHkKTuqpWYNeJKkMNdVhGznNZpr39rqLCpPkSd41dwjcfAg8sKhrsnHYL1ij4iqcffM",
  "key34": "22kyCUoPrSzfYTJLvFq3D9RYgHpnosVye49qxrCBfYvcBVDXF6NWGt1nqbsM5RPwji2Q359K9srt6HwoQgGkNg2e",
  "key35": "3XJ8FN4zE9cVtg7iitBMYVonkqT1futrXKyyTQhoFLFSKYUJUVCHhyZMrzKRGghhcQwZeYyNhqB58frPekhaEktx",
  "key36": "4n5GJyFYnooy3SdxUrHAcvnjUGpPYAEcDHASG8ppWH4jc52wKyhpkipTAb9L1vi6z5RHD2M2zYPioEn2YGkn24p7",
  "key37": "5sPDmtAfUXwuARZUC4DsakWfoyys42PJNPZgxyjxPuByc3djHypDd62YEf6nq8otjKPb4MGLfSatKTLVdruF6AaT",
  "key38": "4qGvYfbTqVEa1eBW8Gsy8hAn6u6ku8EoSwMtq855TcKhwRfkwV1quzqtPdYatuGmTd7HMDbcnkL47v17PKvhwZAi",
  "key39": "2cpZUK1cFBzvfgnYoYCKrM93hbBLMQ3CdBsALcnpBMyTrQXARwCJq21EpErZDrmMrYGhVgNEUeTvFY5grtZvgq59",
  "key40": "62oGxFn5Km579FEn8z56rDjrNekaCPQMKc3otZYzj98vx1aevw91tzX22idzaMQ3SznEGkH8FezKPWro1uziy2Kg",
  "key41": "4WSzfowtSdQceCGsKsGeTDbQwirSJwKTBW4rx2AoxCaaF3wVyzNfZedwXoAUpRoLx9njsTHqXFNayoaLKfEvET8d",
  "key42": "9h4TxFubziwELqPzyBuM41rNbppbrTjvv565nBzJCckKLBWwJomLvZMiPQxhr2TmBz2mFnuDHjmzCfUT1ep91hi"
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
