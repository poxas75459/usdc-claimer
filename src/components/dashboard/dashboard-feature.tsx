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
    "275pPesJyV5DseWdfKFjWpPgtbefYzpKica9Nxez7U92hyUfKmBicRbemJ3jYMffybBs6zSVokiJedEqA5VWBJ1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TTmnbvxUZGEFcdZiHwMDmUux7MYhW4nii1vDhH6hPt3tLFqvszwio6tmNc8qHVVzFfP6RBEErVcMTdKdBDt5Cfv",
  "key1": "2E86NNVJC5vANDw6uRnZ8CFd9DAM5kqgcNfKswefU8WQ37UDWzhh59YnEY1gDicrUeSC88RDuyKyzukJHVb3m4x9",
  "key2": "4nNhZDd79j2AvJUDGQR4TQSZ5FB5CQW6t8ymTyjTcS5WvVXfrVWUfDoiw2kEWKS3iQTX13H74FxJqjg3ozmd9dH5",
  "key3": "6jjFZRw3BjGy7HRsRzA9XGqB5BGAf5GT2Xzvz8Y8ZDkn6phDyLGY6j1bjUsLZLnuM2hHNV5k5DiprFYeubzEnaM",
  "key4": "AqCuYb1kPMxikLrMpQ12UUwcqT3czVtg5vospAtD4NXnF3kgk4evYLoCV5VdseGY7ACvZokfunWnUb6psHnBKiW",
  "key5": "537cbW314yedTkGJn4HkeGTfWpRaYVFv3skLaiLccgF1bsBak3cCAkD1UwGXG8HeBZYVZdwQpRyXKYFweEySHqHV",
  "key6": "3rvVGfg8azzsgcSw5G81fBY57ix94chMstZGkCLYdJvUK4BTxgXoCQHJKwTDd23HKJcBKwVEHTmdU3c6EtpTmCsL",
  "key7": "4F6HVWzjAkuF8urinvSpCKyUE8xNvsf4z5GTjAwfcLmQ3ZE3nMEajx1ZMdfitKrgYh2oHfn7g51rJvR7DZE49xX8",
  "key8": "2inN9Qq2XjmC9DE6TANPGTfb9GYdkphYqvRevjJwJDSwsdiLTqRJGumnVKCdCetvKDJkEgd4k363W9UXpQ26FBcm",
  "key9": "xhRgVE1ybtV3k6LVmvoUbzieJ2EGdiHWJwGwz9FsNY76gfdH1BrvxftijyYYUSho4VoVTdez9oyqvWbqbQtFwfK",
  "key10": "5BHx3xN7qACbRgdFNFHBedee8qind5RWjPFVVoyEnp8EdT6zapmJfYTgmP7SFRqvhQ5prfJhuucdtcmA44ZQZXmq",
  "key11": "2SUC7Vx3CZEgXndEa5iodxpH5nJ2ctjtC7rsXGpZYfBhkCMfNotqZwJiUChK8GYrz1MxjD2DpyDdwnZMrbVwKnQo",
  "key12": "2ZrP1kjtgG5pAv8XcWqNhWqvwkN2UrQaGXZkMmoNYokyakRnnNBVnnh8WQYqWjM9StN8eML6VBz4RjtDeBH3BiX9",
  "key13": "26PR37F7ssjxd3dyiQYnk5CdKS34a7UVh11LkMjDdPGJCsmDaen3fzNJ58i8uxxWvFMbZmzTy3RsXsjcdWWt1qkT",
  "key14": "36YGUgfS3PpB2V8gicMqEVx3iA3mbd5iKPun4cDCA64eP1KgCY6MjXtTQiFugs7nHUoiothZqbC12A3novdtiav6",
  "key15": "3B2cT8s7EH2eguVbsEMTadZbDN5ZKRcShzFRq2EBh1APmqkcKzqhojSKJCAnukA7oAaBBuCRHiNt7DUYEtzH5Yq3",
  "key16": "25k4dNAz2Qj1q4be8SxcomSwuhikxqtaHzkec4HJjGA3yQFVRAtHNQiswyoDJcnppeGkNawJ6xqXFwjwhDwHAwoX",
  "key17": "3KyjXdhfgaje5PSG9qkN1ZznRt1NG9aiTD8Giefoi6gRA3kKRgQRo4Lcx5x2nF9rx6j7GUACHriqzaiGswWMR5KA",
  "key18": "Mx7oUA6qTTQ47vCcGeL2QSC3fDwT8uXRuMLZ41RTFktdLPUayurL9M23QywcmsESGEzcMGVQBRRXhwYPchRXYN7",
  "key19": "31eCi6TjfWaygzr86NQE1dtofRPLMcsqjjVgxpcRzpFs5DctUg3j5637ww3fBHwruT4mGmhRoFtfLhQ1K8YapPPx",
  "key20": "2zECir2f6RaYo2DtEFuKJ2s1SdaioKQosbcaSUVrcVtHZYpybi7AYQyfC2xixLKhoke7GJaXVX5guh4F1M4BtdAf",
  "key21": "4gj5JZaiWa7GHPVFeG1oeWMJrWSZHJgMKxqgnqSpyEgkb95H1NB5hRecmgmF3tR3naiF4yZJm5xe6qG3v4xLCidd",
  "key22": "37Zan9ctQ9DEx6VCGv3tgw7UdDpV3yg8hGDkZxoYgddA8yUhmC8ns3ykZqxjK5drvLBTwFFDzc4sJtB2BJzRAwdV",
  "key23": "2jL6HXvnMWdHahmV7EZK3bAUHfeULMTbEiQgbFJwmKvZqCCH4CA7XhoM7GEr23aLB3T2Tt7kxrtFxeUx1eCKTyby",
  "key24": "2cDmTmKYxbivqP4L4E1Hk9qmtzGum63h7JuyTEMzKhFhLgzBfJ4UE1jWsvHry8xYRHxHZUCFbBMWXeNejWu8mwHu",
  "key25": "5vD6rNLXZhbTETbM8nBARXGn5fB8cBuUdZApW2abGPJ37ttFjxFxh7CNNwjgQsySzBwC5fxnW66Kzq2bMJSgmXwy",
  "key26": "mdbt1Yj6JASDaVUmTK3cnDrusd4rmyMBdpif83dvbKqgxL888H7qKxHHtywvDWWUHhC9tUMixT52jfyUWYmoDct",
  "key27": "3fNGWoN3c24jUNcvgHFmTncasnvpYC4m1htmQ4am2JNzhUwpw73QNraWMukYnoUBShp5QL5CMLr3k3yqKoim1hne"
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
