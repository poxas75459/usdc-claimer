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
    "3wLhTKRaib8DWJNbJpuyX2XmaCxtbwqXmFZECLgVYi3nQaDPSAN6kDY2deyAA4ahgh4nfvSu7k5SD4tGRgM1GMxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YxLJgchMmBdti4j2BPYx1a4FSRqwuAPgwb9U3hiHwCRWXXax71HutQU7eagHjSdusgeRd9ayUzAVgMwQiHg4hYr",
  "key1": "5QsxUzfwJir1BB5vZVYKW9rQfJuthtKbAVGzNspq9XKbHyZ2V5Hfy35AMjFLtFjkuaGEeE2uhu7wbDNHUuQ8V2VD",
  "key2": "28uz8WE43CwnVAxSLQMzGaywAG8JFKPNErs32EZrmkTGxuesees3pTnFc6QcwDHYTQA4FciAsnJ84dLKESKv3W75",
  "key3": "3VLwdX8o42MrbYo3V1HcHGY85xgZmkMxKViWQjm2Ne1AfgkWJfZgc79rgNw1p5Bm2hfnfw68bgmE2rSBGjMeYFE9",
  "key4": "3fxHXPo4NHc6iwD9YqwCnKxSyzmqtmS8WWgmTFWPcTjAXo4LgTy57AxUcK2UUQriWoW2PxnX6Y6cqC2zAKpadjd9",
  "key5": "57cHC8rVyHxYpmJY7MHxLa56ZpLKvgs6dZFw48X2VWxJ45qZdaHXezorzX9gRDNHG7HqtrMBQcejHczFttW2tP2U",
  "key6": "3Gcuqm2mKqNUXxiDqASZ9yAizQwJeZ6EznZUww7mL1Fi3sCxMacbjWWBi4f6NMsexpcivsTZ4cLxqytd5mpu7649",
  "key7": "4fpwTUxD6yDadjVwVh7kpqAbDHMEAEMEaMpcrf7Wtn6WPYHrAbhNewKp77Ps1MfJ5MkkiMvvg9FS4WiwSUk6KnYL",
  "key8": "62uY8My8Tz7MAqjRpgSXSgarQwUcyZ9bHdv9GEeWPrzqrg3bf38mQdCp3juXAcWrfAxqQQEPtdcPE6U6TmUejLNM",
  "key9": "5jhJZcpq36mG29rPhgUn25yNMGhx6kbuNfJsBQQFyn2FjUKueFa9CcuHcxY5wRqFemJj5tbsh9CJSUQqnj4rU1En",
  "key10": "4LfFPicqRm71rRHKMVg2j8QVdrjSJJMM4VP49qaoVZ3m7MF6TmtqZMBey9KhmVdaz4GFUWXZTr6V1BVkT4VU4XYF",
  "key11": "PqNXrLyTgKHJtEE9fN61gv8JUFfGaimT42Sd96BGKQC4NKQU4ZPExuwMEMqx3Ui349WpkaqfqfapjdfGHXhBBv2",
  "key12": "42r61dY8JoaBaf5Z94QFWJ9osmTgMj4M2CAXYJKgSYWwfvAB397Fmr7pK4VAFMTYJbASYQFGV62hh1tb2twjipLz",
  "key13": "48KJkgkVez2oNh3RqgZaHuSN1BPcb14AfRMNMg2PFxCkvExfFbDsmZDE7ash2Lrqmc2aEz6LKLpBnBUADu3Ut8w3",
  "key14": "3JYf6KRzWygnQr4B3mNTCFxyKMg78ibdACT8u7KWcLC4jtuJdsMUEJBPuTv2Je1uvjqqgFYxNCW14ez9KVSJHrtD",
  "key15": "3vxWe85m3tjDKTiC8id6UfC8ejr2CdnjxVLsQxJHoCbjA9v2Ak4TbP92qtrkkUY22x5ZbRqbkmdU9TXea3dH7LTf",
  "key16": "2oe8SoB456CDp1RQkrvh19m7HcEqzkRcgQJPz83pCsghn5z5awBDnDkvzsc5dWHwxS29YunyU39d7XKDt4XAYkFv",
  "key17": "5pDaEy98iBt3VFtXVaotzxj2qJnSoiPZhsyUb7HyycgzaKTM5MADQN4gxDq311EskSp8VuCKrPfsLfBc86boSvaS",
  "key18": "5EJDYjRSMmDq1rokSS16HEwx1X814CWTZkedxSRz4Mi3kXpxCmFDFEJodm21ADwuXsKamg9kzuTSxoXLfPo1Kvtq",
  "key19": "3fpfmc7jhxPnsWGLVv83LLAs2ZFTysmamerSJFwd4LTshFrdZqvcnbyNakH5dKKjZHNgp2DBELf7NerrPU4WTEBJ",
  "key20": "52u4jGt5zDiMWnqdLSMJUs5AJrGvdrGE2od9wGbpqa33DVcofTKTbzqGJLh82tLWoQb2cejCcQN7AW1WFJypZEDQ",
  "key21": "4GTyte3i9kNdVYiNDUyTmnMstRS2tRa8jCH3S95iJS4d2mcd5vdL5TyX3Vb6kCm4XiEKbWfDasGySnQtNqQwGJi1",
  "key22": "J6MvZZbV32c1Uz9agoca6juotH6m6E9zQ4YgBW3AccNsRqJCt2TEJtZsnRMZ9JkQ2qWh6TmA3SfHEG1nuH6jc2u",
  "key23": "2Dv5QTDfvXc8mkTRCgjrBaFWeJ3yEyhTEVRkY5bfsXfhWKcm5JQb2BCr2F9vJWqswv61df1G9XuUFua9DD1BPNQo",
  "key24": "4aEgMk7YgPbRPMBYhFXYXoKnqtQRqBWscnapdAi9CZjDT8ir8sZpv2DtkUSkdfhtbqxTRtto3MoRdDvRXji3LVeP",
  "key25": "3ZuUSfELgriVeEUhP7gSUS8U1RrqbN4ugs4pdBHpaPQUhWorpY1MJz3gnT1NeRsWoBmrbWjkpDtNk7gdFHjyEKMs",
  "key26": "4UYpAJFUAHMJiuuUDxUKWaaQX2zPb4WVpMxH3J8Ek3buvQWCBRicK1j2NtxSpcPgABqx8jPeZw7uu3PQfesjftry",
  "key27": "4oG4aizJegqsqSMiapausBR2U17Gab9bMYXVhzbJh2cCjtGA98Su3NE7oqDpm79i8MAag22hA8kSuSg7SbKwWwa7",
  "key28": "DpatZRnXxKwvqLW86n3kv44dnuojU75iyMe9e3Ppv3fDhzdFPker2BBip6eq6fXNxPCznrusTzAPHtPLZm2k5YJ",
  "key29": "3fMsMQwUiWPfwR2QuRKKDqLYrZyLtEAc6HCV7vW9YwQXSxAhoSq75PXpyqE7hihNgXVReKVugtgTBX6TjQ7bAtjE",
  "key30": "48HFbcdCCqJvbzgsm1jroHekEWXXA6t1XuGtLScpKsNhrCu4A7vwkuwMjGWytt7pEqhAUwbL9AgyLV1oadhmH1v5",
  "key31": "qCBScTtmwmj5EeSWGhZiDSYLv8x3Ffv72UTu7n6pbseMoBqsumAKaMEn9w8DgyeSMXAwQc4UrDvRKTyzR2981iG",
  "key32": "47dEKzosSUY5QfqhxxbuE4PHf1CLDuzYKnAtSad9UGwpTu6mMeS8vRZF9HyadG3N52phvWF5Mk7CQt4ZYE9evGvC"
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
