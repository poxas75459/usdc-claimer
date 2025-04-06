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
    "5fR1CWixHi9aTbtt7sgBVAAo4HJXgfazi94VThQ4oJTRayJF5T1XqJnqiYCYkDAu5ULwNwzh2NytDLxvUE9CRuHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q25f8wNPiRHCzS8SQPH6nCiaXzkJdQ2WVhM7ov77Bd3Uunh4ukR7ngJBAXNE1Pyx7XmBNomF9SuDWZjFpGES7VX",
  "key1": "5wh9wZ4HueP61Sc3u9e3sTjQE3AXVx9omDLn8ZkDr9xmcdT2EV3K8N5nY1uF3PLTsTvvGBpBsP1VyCnM33AJmFBZ",
  "key2": "2SiVdg6B4Bet1gwXkq79ApkoiypR34dYLDC7wgjQcNFmdyUEqTo46rA1LEd1EWWSogSJ5pRSUm2EAJbD5jgsGmq7",
  "key3": "2y3YnzQiY7yFy2X6knSSguECg7vDMLYyS6ETiPDrEkPLEQvCDt2wUfcBaxkSDQp4CyNikGk4EiYLyG1q1YwyXifq",
  "key4": "4r9KwE17rkFQPhmduFa2Y8cGLZZx13CJNM46gTH7fnhTDxvK57akyzQy2JBypCYN8iLEnTqvGo1iDWtDte8Fve4p",
  "key5": "4KpgX6QfUY2HJNkR17jKoxsP7mMRfJ2oyBEHKuiPnf6kjqeUUkUnhZFaJWW3izFT5MHyias5GJxdRxjqPtSGxhu1",
  "key6": "35BuYH5L6NVqXTF4MUxASEZrn2rLXtmudh4zf4EKShtpXRiFqugJuijjThvJ8ATaXzWLvszdw5JPYb2u6RPFFz2j",
  "key7": "3W4mrq5WEEfs2f5DSgMtJABvZVTdKx9m5s4fXMrLjNYFtWcF5V629tcrvDRTic9rqD673yyALQkTh8Lc6dd7kh2e",
  "key8": "63wYctkDkaSCxZESFqxkk3uQEuNEJMZXfbp9y8JYG4AupwSCyBDFWD8AxGSxGahExwGGE4f8kVnveTX2312dtmVA",
  "key9": "5Dz4yKzqnEyptQLJdsDkgr4nojorsUf3ApaqLLqenKck1qEu8ZGJxr1s3HQE7EZAMRQN49VAxqpaqpG9aLZPif6z",
  "key10": "2iFRPgBqV2xvb7YChppLa7qjw2bWypbv7d7wgLVz7Txsnbd4iQq7p6ncbq7XruAkbCjNZPtUBWCsULbskg8Xuwmu",
  "key11": "fVNuZMgqTfMABrDwPLKhGccL44T4Q7QnDvbc1qKKJehAZzH3x1yCGacV4DSaD69KqbJWqfMhTavgPXgUuwMjPot",
  "key12": "25v2AWnqaux2WJAd13tAZWei9uT5LNEqtNNFdumGCzSE6Xo8jspXpwwnBSAQdAKWxVqWH2TrbE5v3jvWD4LUeN4X",
  "key13": "4m89qaDa7YCnPVhpRHoHqfNxfcnkByL8HWDxnA914aKVj1E7YYNQsTMYVfU5B5KRjVVoTGYB4oa5GUMKxYx6ZJvz",
  "key14": "2k1r58J49WjoAowohzzajS3ZmgPtj8wVRY4AJyru7xLsY5hXLh9UHFtRuPi92fswZBaoN95ARKiAnmnKkVpHmPJL",
  "key15": "22BHVAdYdqXzaJwZCCRv8VB1f74vPSsQzWWUpP75tp6Pvr6oTFs42iavXMYndhbwiYL64pDFpiaL4Wworjq5zZSv",
  "key16": "3fdnZmTPRgEsJbm1SL3ket5RaycHngHvJFAGbzzpHC3s4o2jGN97rR3eQW9AFAruV3tgJYQA3C9a6Rnj6trc3LcY",
  "key17": "2ZG6E7XRyizXqJaWEAhoukRFRSuLHpZx381CKsD39CzGKz99fHfJ5JP371ffDEjqRmVPMmt7LFuNMHtU8TaH5yTT",
  "key18": "2yuNGDm48ohUDj6NWpYNk6FVSc4MKeGSLQr9RSjmM1ab3QRsLDwNwKaXcFdPaxce6yk4En6t4wnDPYxcCQERz5R5",
  "key19": "3r9sVK76omdQHynS2rEgyyKYqjCpBvhwa535G4pKUqAbgRuENnR6vmE59TTk9XCD2ZNxVkkQFi3amMWTmaHioKyV",
  "key20": "RQGKXobTQZph8XVv4zfg3UZGUnNTKpsYxUJiiVdERxi6NAShWg53SkvxhLtvF5y1LzHZfwt78mwWihVW47335uZ",
  "key21": "5Kx7RAinjHfUdeyKgqTsvmS5dpqHb8efP83ZSVAfmeJgRh17ytP51iMAFxjeQmiEz7qQPN1iCQPFKZhDnoChvW4Y",
  "key22": "U37eekG2uLYUHVNaHZxh3rF8zRWUVJhwqdX1cEegPTjc6deYWMzSZw18KWckhcY6CQ67mv18MRDcd6NYRErjiik",
  "key23": "3Jw5CHWto95hFF8EQJaVipaHSkYmw41ziiLw55zDko7LPocAXSiktVEvx8haj6gkzqSSTeiYYCm1AnpwwcVGEyAQ",
  "key24": "21vL31KH1dJueTWAFDAXjxjDv6r4KTqyVsDqT7LkVHmuUUHoqx8SpWQXirVFRocxNtoY4dxxCyqZNA8WzP86A35X",
  "key25": "4mWLbUSDSw2MQiZpHgZDfg3YV7Z5K37gQsmJcWQqNhQyWUAc1MG5VTwEnixnDDrWGWueNCcmxQQ7WhKFku7ECTPY",
  "key26": "4EGchEo3KsX11yVVwts6ADtnxwgCQQUopvpufeNkWnUNTNYLbP1w3FEi9YwNUZTky5JdY46esfaDDiq1SuN581YA",
  "key27": "5oMjKnXmXPW7LSr1QhiMbsWha5DMKnDxGyUEe3G6zZQJeGdFMkreVfBoXWMCnaz4D8YqdGkoG9BLVQJkK48pS4xJ",
  "key28": "4oQQyTMKRGK5qPWjE4FfeQawRq6DrzhGUcADob97GpAEpUHT6dvgyU5ujKcbx9QKbQ5dGhn7tpgjeygRKAwbt1hQ",
  "key29": "Z7s46KM2XWQekKrJjEXTQMporFgMVWbk1X7G4bnnaEJ22HerrJQ4WiE4En56KibuSBipTYuE4uqRLzLZj7e6hwu",
  "key30": "4A47mpUPBLma2DJy4pCUchK9c4Ub8qxvQojWnaFUZjx9DbRi2KrtKXfX9nD9Pf5ZZWpNySNyP5CcHZvNCC5R8HXd",
  "key31": "3ZtgfyoqAUMXNU7VJim7SYLS6DWkszhppQMWUoNeajx65xhgR4xesSS1Y9QbPX7b3khJRJ5zjwSqWNwkeuqWKK3A",
  "key32": "24Ee9PEMsknb3fHZJJfNBCM7bvsTDv6GtAjrkDiykqYyvbt8zDsxBjPxeqANEkFeLqc47Pq2LzBin2KJTq4s9PNu",
  "key33": "3Sbmq2RAPASeyF5cjLUWgRbQjeymUek87r1frifWnYZgdya3ZsZMrsfM91jtFZ9PaCaiPtEJxsmqzvdng51BHekP",
  "key34": "3iNSyT1dczVFysSXcZnxa8yTwtSuUiD6bnTWvRe6TiTHMpSuD9kQgcAWbArwfjV3r1rLJHma9ikRYgvL8UjfoKM",
  "key35": "5XkY9vyfdizGvPqpNNKigesjPWA2YcxvuMVBJxDmYJkqfyNerwSJgMVGcsyG5FpKwQfvzuxkgkyJdhd2okux8kcS",
  "key36": "4HdJNSRVkohCMKUzJ98CnxvNpi9ikRTbKKMyCgg7tkFkdEVFrc5Tsc8KinyBezMbSVtHVfZkxuzMn4AxAhS8tKyB",
  "key37": "DuwEpx3oirVtoMMwX4EdeC2MBn9rMhbgftSUUQGU1pvC8PXH7op2AmeTvsBMjD1QrFbw9oqDgrspm4A2gzcoLeL",
  "key38": "4RW8Vo9cWhXifsgXhASDg2Udj5yeP8tR8oYmGhPyk7hcjz9Dd4JUm8cp37QjB788QaAbc5eUUA1cpNGcAfgT9LtD",
  "key39": "5ZGoFWG7CkseCDrxTterL1HtntRhF5pG6eQAKycq1UEsg569qQpwey7gzodSqCLFUMN1G9Ntx2FhamSyHPTExCMg",
  "key40": "2SD5ohMrsXVcvVsn2ywHFD6wyB7sMLJSjtEtXTqmNcS2BogUQpnUi2eGc2gD4jNEGNiKjyG4q3TehdNRhLk4zpys",
  "key41": "4kppdRqjSCdX3JktDjM3ZpNhhJnpLfe4f9KUF8RX2Hct5A9rAmfk36eA1exMjd6ZgNMaF67nTgfi7vgtW6fxSjrL",
  "key42": "3iWM58ck8twtS8kax71LhjeUnS3NyoH7e6pseLStfApBoGhMMSvz4n25YrTL24c7Qgdo4sRaiX46A5y29Z5MAcvq",
  "key43": "2iJ9vkqrtZaeV3p9oNSTmgeHUiPMDJX48kdsD1KnWkLJMUxUQXhKpSxzak3iUe92xf2x8YraV6fuC8jdkv3CRsVX",
  "key44": "5WjvB3Qcmi9VVtXJ6vnKmCAYMdaGuXG8QNwPHztwKztYxfVPwy48uBwWAF6KmhbT8V9dd8tnJ1uBaveB4MLNyDsr",
  "key45": "4Mc9Wk4xcwj2zSRXz1uKpEjUpeJC2Hrmy6gUjPe7NPLHwsmowpq34eqRhS8YzDhzFJN26ymr3ZBUoE9jjQpqQjC6",
  "key46": "3VRgt9hf5aYoSDHqC1m6jVt2KN71WKDcPs5kLmy4B9Y6cvQ6RfM3y2sCWjLCx1zKkojPr2sXPBfJS1sv7rstGuYH",
  "key47": "25UF2GoCpfpDJNaFoD64dDjYh3TJnvS3Afyc5MnvwZCT3XJydHpTFHbDW2LAaztRrdreQUUsGJRm58s9azi7JA32"
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
