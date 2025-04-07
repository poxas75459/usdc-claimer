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
    "2CwdSFLfg1EBcfkDyNStq5wGF5gGVu5XaWYWrjeQvceVdwtH1k8hDJTTpDaimwSPq7wyJEficL76jgvm1d9QH1Jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yjUnHknC2v9qBqo6XuSnD3fSuwUiYZzSzTDfknyFqzrtii2sCtgqqgRWJQyAZAFSm9hSnXNfgUYsGE7RQ9akbMb",
  "key1": "4ck7FM8BeFa4Ai8WcG84VZ6idR5fkVqKrLxhP3EA3ojAiYLUryu62QT3g4JHFs6kzEPUNRxZYSBEmWZaG8xxhQZa",
  "key2": "3WbefDeCj1QXZAd8yvR8gjvrP7ZWfYVmKLb4RZqfCY7jDjpCyTiM71tGigXmbb3r34paGhhwh2HuJLp6AvbqYKgu",
  "key3": "TbjKfAe7sihUeqH6hL5VvbLCUuvJ4KVJvPZhSvDMKnFoLk63GwukgfsDbnfFMCjKmc2QYXhMgHUHozyHXAJUT6x",
  "key4": "4XMXmkjVCBjNsvms86FnurWvG5UskZCFPDkHW2Fn87ZLAi6tXeSDwYQBg8Q5MJoFfhMKvYneSZTq5F3Ss2bW9FBA",
  "key5": "5u4RGd7o42s24UNXfmC9KuyiiB4YgcrmwqWqxDh5t4neDqPvUqRuPg4hXTtvToYHtNXQcRt4PmvR7aA1PZi9aL8a",
  "key6": "2at2NhJ1DhK3Ri1tR6AuLyuKuJRv9ayezF11GptXQnnvT2Cysb7dJDtbcWFzxnnrBLqCLvxdsQoJTb1yjxKspQVC",
  "key7": "8HQVYffo4iRQQgXRkRqHn4a1j7Fq7BVqEWx8Woz5nsYXbURhrTgDMm9wYRsAzvKME5kNQxtJNNVQ1Bdqyvr8cqQ",
  "key8": "3nxu8fy6iBMcE3fEwwDGLU4mfjhdWJ5zGYAXjJusnbLjrupvtv3qMyKKLxFdGisbRMyJYF5aYuEsEByPyW7MuJjj",
  "key9": "27bmg7yF9g3xbd39VembhDv3Qobbgn8Xug9GVS2XxSdUMXf9xkuvuHyfR5TUjvAfzk8J4yVUTAJKfB7mJwCP9Kcc",
  "key10": "2s1hKugfbN9FhpyKRugVjp6e99m9bVb9bzS22xhp6mywYG9HUTRJ8rg2c8vhM1JXaM6M8tDQ774saV2Fd3Rjvxaw",
  "key11": "qsdVEJuzxczPwRppzuFryKWNUxXQeuxr3Yz15qdat418LWb3zt31EihKtquP9RET3BMTdNipambsLtQGXRd5EM7",
  "key12": "4G8B21HcjfVBmjk7CGsh17sDBYPCnEvGM9Nje1YE1cPm29e2N78rnZayN93uEMqGAkBZhsu249hg4cRsDgs8kZ6w",
  "key13": "5WujUGSKPuujpSABHW522txmZTk9D5ozXYhDMNXtQtHxKQM3C4RLAMqcs8PAk4sKqLF9LKWdQr5dRfpZzhWt1Spj",
  "key14": "2HQUM5gv7zE8upSsLXxJrHZGg18jj7uRVq9CVJSbQPMHKRhcYeM9SerikUo3PHEZMA8amUUjqrdC6M5ZGHTGi2tA",
  "key15": "5iCGqgXgzmRT6fbQni232oEBkboB5Bkh3M6n4Ps7dHECNW7J2vzeTLztQY16NfuneLp57yZi7Cm4BbKSKFPshvZh",
  "key16": "4doAm4CQhuWre5Y9m1n9ALmtTyXne8dpTPpeBMggTraZgXcWoj3Hcn2AAG8K7v31nF2NzFcFbe56QouRRjUznZP5",
  "key17": "2MDaQD4xonW1uMQxGmLfHpbCLsvePQXgTTLMWgMMKgVPP3VKN6Lb1bj71SxeVzQ7Waj9KJowevVvHdxE8QWq48rZ",
  "key18": "3r1ZqrWLtgoxGEwkGDQ21PREZWnmekPiqwjYPUTF7kxLuM9jAQuzyZ4d8MGvg6Bp25vukTpUFRrQj5XiZ7N7oHo8",
  "key19": "2YDt3okhV2FDgxu3ELT1kFwjkD2DPJaL8bdzzpk2SWvFEGT6hiJPFLWrnMTidKV3Ajph7MmXgXjxq9jNV9fCHBrX",
  "key20": "5Rc5cXnLSuMCdxRt83FpS5YvbhqEPTYK97S4YMgALPwZ3DoBNtbTtX9GE7FLStrWaQFzqraHY5qveUyJgAtHNy4r",
  "key21": "vSPF689fn4GXJBGPGF4Cuz9ptPgEiuxPTCWdoggGE9HNYyTpQEJysypX1VENdsqVVHQpPGLvGF3g8xtJVsHSbC8",
  "key22": "56cyY4jinZngytSYM1AeJJeU3d4Hp2mLScqgUc4aq6AzFXUWprwXqttEpahavdnfLi2gbhPYvEaF7VXoDpcBdXHa",
  "key23": "5jsziZbCjWvFR975hmLgiNDL1S9HfdcgigohXSRf7KEz1GSLQTVV8ZYu3oZKf5di5HXAv1U2m9mCTjqY3RZSan3B",
  "key24": "2JuodAwPH4HwG1Dx3C4prAkszT39sTsaoWfDjMPw23wZ6uP83daT33cUgX5G4EA2VJWhxkDbXYc1wMxHZx8sjJmE",
  "key25": "64W4V3RQHevGcd1EuFLdjecBFQBtS34P34YLBerZRxbndzk6d9KQx4DBMuB4E1ZMNCd9JSKkqFbusqMtrmYHPccW",
  "key26": "31ZY5BCV6xyiW9gEc9J7x5ZpviJmZ7CFjCamBv4CSptEJE5rMEy18hJ86cQS7bdN5dxfbZABUph6z5ahPx5j7XfT",
  "key27": "3qD4tjHMKcJn1oiHjqdt1u8wuUiBb1D1dfxpgMhxJcaH7J4M7hWWYBF5Xn7izQi8815vY1ZnXu8SMUeX7bdYGFTG",
  "key28": "4xnnuwqFmu3p2Y1rrb5djBgSYdKfKeHWD8NvkeKVRk5cGQfc9hKs9yzg7oz5V5qs34Vs378etrkRjjhRdeFwhHA7",
  "key29": "4K5xkpRiKiP2TWLjAj15SGcHGnExAB1fPrmRArLN4TQjfL6cjV1gyiJ5N89tNHJuhnjrtT8G7KfvU7EiL3rWo8ts",
  "key30": "49RGQ78Gqpxz4u3F58K5UPP8JYPxgvSVbTQ1svZ3YqvHSYsSh4fjNuak7CNWRhhezmfmACQnXLukBynJtGGa9g1P",
  "key31": "3nyzimsX1MhVrJf6zcqFHJWVsJqK2bvy8KhHbjS76YasL9rmC3mVJmSToMNkE4fY3uDVdkkZPU9H53gFaBDUJTVE",
  "key32": "5PWrTJ9NiSqZ9AjvSz5r6pQLLRg9ZzJPwYGkTJxw7P6JHwdkxfgmY7SJqj7sRAepXMavBq9SHb4hB1zdQYSsdRTP",
  "key33": "67anirDU8EW2xpQpfNH1WJ59azLDoorMDsg6T7aD6xoAjuY74mtNWt1mFTtW19LCdZ1YjfdEiH2r9AW31i27VEPN"
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
