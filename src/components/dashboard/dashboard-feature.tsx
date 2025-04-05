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
    "61uhWL8YxJAcRaguBUgmSZxkxXoneFn7N51QBf7JzwTkZ65MTS7XJroico8ksV84NKk8xmyqy32cyswbMs56HQrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24qnvd5BgqxHvPejCJkhTswGsWNUnxUUPRguxsq3woLCKCiKHBKpwKvnaR1NtxVHtZ9eoyQGXv1V6T1jzdRDqtzq",
  "key1": "38oUbCzKBUsoJA3YKriN2EDe51faaTfd1ZVxSTdg8QUuM7tu8Rr3Ms6a1cYYzUhnyvUDRqKDER5v8wUx3j7yZ2TY",
  "key2": "tGgvbXwWQbDGPHcFT2P9QoNKwDRH67G2Dt7izcLEy3qFbFD3S3jgruzk2hqNonH4LfUjLffU2ACtV7pc4oTgYrJ",
  "key3": "Y3cNh8ymT3XZ6bLYeCpPsDjyyVNtFC5AZDCUn3Wrc9LNFHa2adaEUAupopkRD5WrT281k4fNWuMgDT128LsU858",
  "key4": "4Ypv2nmMUH4NMw7ji4TLvqmdpjHBPVKxzmjuXwmK4x5iB4hBwTWgMwLNWZsGAGCzNmWaJKAgUhgAB641TNNit8ou",
  "key5": "pYPBcrd4BjEq2eRneWVbjh6BWfNxyg5a427KYnFgpUwGQSAVfj6jEPD7ZB8LucuEv5yVhVEnN1u1RbMLkG4xBhy",
  "key6": "2NguMviYLVogM8NmfitTxuMWLwshu8iTkUQ3G2uVbKWK2twBnq66yiPMNMdeveaoHY7fJgE3DMShUnxaZGvPgWm6",
  "key7": "2A52CNa6iJuYPqNFpoVXGUQuLNtJo92u37JuFq1eBmmgU5G89ezYg14X4rjCKpA4TjhjrVYquAjAxTW28W7ACGPW",
  "key8": "wXvfU6VvyMzDLbCFVtWgAiq6Zbv91cmDZUDFpNtgnuvRXEqKhxWpZMq445gfBRv6hvBFuGegFTfaqyM3ez35ZZs",
  "key9": "2Gv3moc4DBcUT5frDccHp714MRACUsq3CsVD6Rbx6ExshDqpf8MmZQZKYZv7Kdn8PKXZYZjxCZkFeNLaEs3yt1WU",
  "key10": "VXLV48WGZcTMfLecAo7NKijiUnynbjP1cTquMGsCRc398Y6pyfAZ5TgaF8Pcp36WyF3cPzoyCCADCnhQy63o1Gz",
  "key11": "3M6HQq1RQn3UwZysKfyvgrZAmQ7EV5dooyYUGa5dSYzN8XhefG52PX9U8uZRny4BdfcP3jmWdfVyUexq3mBqzoi7",
  "key12": "37EydLpbknSMH96xGEzfbALjm8F3ovFrQisgqP1NmWqLTaHxJrAUMdg2ExxeJR51KFejV5e4WD78hxYtgWjto7FX",
  "key13": "5EFikjEHSHQsuBddyCgsSHDtT4gs8Jkz7uWwYJGD9WTKJ5DjrRx1C4TGeKfaQzWcTLkZ3EKeivadeub7MeD9tw6v",
  "key14": "61fukSj2SusJMHQP1FJX2Sd7MgZ54Aeu9BxafRnSZLwJAkjue8c9aM2TNnQ47aKz8NJUtQBRsXJmSgrSfNCnKjMe",
  "key15": "25SVpNS9CpbRjdXBjDj6tTLu9Wj8KgmvaxkSUWrQN81YgBBpw4y4n6hDn9ZUKThnpBCBLWRTGkNeMjoWrxShu6xn",
  "key16": "3YSutwnwwPUgbsLj61wyGvbvGzyiHunFBaid1FZZUHVJNj4RpeTH44cc1oC4cApyrjBmtdMfVbMJTGFnj11sYr3E",
  "key17": "28w4weTGfBb3pGu4jYWhxryY9C3of3em6dWidG9YP1JAxc4pGpU12aS7DeBcWxnHPuHC4GmVCRGv2KJqKabKRwJv",
  "key18": "xfzSrVU5FhwDZo6RGBZcSJhr1J5WJPr2Hk1zNb42RDCGYjrFkuUsWm4Ai2DsFxqCY12zv3oSTkai4nNEW6o4SGs",
  "key19": "4XD5ktzDcvLsaUq3htoF3PRNc6qtcGgwMYhna9hUQC1wpoTuG9evDQoGNyCmoyj12Z4StE76HTuNqJT4pSDdjaKS",
  "key20": "qZ2u8GHmTGYH4YLEz4eovq1YxabcoxLKj2Po93f9Ghiutw1D5ETcFWcCKiYmfRHFpuxxNkxh8T74nEp7Kug2akS",
  "key21": "5uGD1PJqYmLeV1nBkNiNcgPycEJyStcB7V6e4EKM3VpuGAojCML4xeDPFsPpxeqD2Z5QsZPENd5KrYLGi8cP8PGP",
  "key22": "2JMXXrK4dMpEGHXepAeEUvYD6XgvYtoXxo7JQ9ppPB7iB2pFjADwUSs1Q3Hr5yzk7eXFQASr4SBBN8Giux3s5fd",
  "key23": "4GTPe5e2R8WbP3CFRUUaNXxsdPn8WiSXHFH14Wemc3mW9LvUeGVSYubgWCSnVeGGih82x3ukfYFFD4p4s3WHgRrc",
  "key24": "4dCTGiSTvSxawoXnCcUc1kn9r9rcs4kfGhtfW7BjVTMBZ8aAG1QK9BE5pNWzV8t3o3CxehniMyaoeoTq8mXRMYHt",
  "key25": "4rpBdohWj9c1wT3zHLB9s2CQF7WpheWsg6g5j5kJrnEtjBCpQAuWEAfucam6oqsCYSMnXhtHu9VoptWppNAJWGKK",
  "key26": "46CQuHsrgReswetYG9kciGL1mqvMRQV2PFurmc7DvwKsmnd1yR4mscNFdMP7RNAvLzNynzgusNSSz7HHKPzbSUdj",
  "key27": "2s86AdsUkcdFmXMmDXBFD9BApPeSNMAtMFe9xKyxeKDtQvGatNJtV8tY2R56iD6bZ8ShBwMsMbKbDiHKuhk4Ps5m",
  "key28": "qGGJDmWRz5kVrrGCtPp9h3HKbC5KtsqDhDn4iu7R7R8WpzaBQ1z7aXeScSJfrgogKm58TpkXrg2Xviias3qHyiD",
  "key29": "6ddEYFmCFre8qwK1eynW4KdKYRvyDH722Rb8NTdQ86sQw2ZiEhpS9ijbdUGv9KBUPQGW2M5Hmfnkdiv94MVZHVB",
  "key30": "4DBzgXK55WaymKMKAFygm5KBDgRvf9UXz9rzUz2HwJPqi9P4huXD74jau2u7e22whuzymyXXMo5Bd3vhEEzs4JDs",
  "key31": "5Pgv78FjMiyEWrTUdvjkcAt7Nf7nMz7ymR5TYyhXx4Db8JB6z1w99dr4vpLUkQH2ypWGW1P8uP4nJbjWosGmUgBQ",
  "key32": "2Ls6Ve5B9jx3w8XZKVhLKefkwE1KqzPen89W8ZYMaGrE5eY8iHzuifsm9twyySy82Fwggg9QucbpgJ7ZBeiJ8QJG",
  "key33": "De3ZYrDPfczcHjK7XVYNxnBPhT4o7fUFjQNhHGTGmpFx6C98Pq5bcLt8CPgEzDuH7u739X8zr7DqEu8S7kphiFQ",
  "key34": "5ENPmGEvMpEnG3V8JvrzygWLHB1JJfBqyN4A4vauMQLTUy9zkNpk3CjiG2RgfG4XonNsBSPQ3k1g8TMbprBNtgKY",
  "key35": "JSDK8knhES216qHzZiwmxLk1SxoF1HCnMCZwUFDoFTxGQKEmrduXoPiW2c5FsTVe4efS5Fqh9UbiKpzFj7GzFtG",
  "key36": "5rMJTmZ1oVmEjW5xgxvv53GceQCgWnL3xzjow7Jpbqm4SA7bGY38pUsLBzugHDzdUVws9U2Ynp3zS1tt6h4tTdU8",
  "key37": "5U1qeddsNvpsY2oZTHvTW4eG71AoorZae69net7bk1fjaCyuf4jdM79cdNfTRdjGvw8J7pwmKNx6GthhKM81mLHJ",
  "key38": "39ohArpTaeseJsh1wKyNhy7xZa6kf68pAAWmyZWdKdYZyQvsCe1pzHYYYYVDHLPU7fBk3RjYPsLuuG8E9BVhUP4K",
  "key39": "2BXW96yZQDT6GcQ5zS4xyj75cN272E1BdZFrVDKqE63dA5W593TbYSLYBUnQhjtH6jUo5SwpuyfhBYcajLjF2pyn"
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
