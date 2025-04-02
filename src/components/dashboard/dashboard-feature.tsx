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
    "3YCS6syG6WtkNj1fWmN6V5Eok1b9RhuvqBCmFm2Hfrn1vmBvcVYLrsinjTe4XNeRVjwY95HnTKL9ViMbGtZ3ZsA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QvrvrSepA8n13JN7haMbU5qpMQ5LSkf5TMsxbkeieczmP2Hw4gDZkuCH8XudVhRwadPPcPTJc6jYGL6L4t2fpeZ",
  "key1": "hgts6fNHzzJzpYbSZSEuuTxZwc1WJ6XoVrAZk2LpBuVhMbJrAuk5ajLt3AMFF7x5aLx3NG5L6iJR1FoYXsXcymi",
  "key2": "58AbkmsRHNaBCNgk2tC2f8i5o9wWsMZnXX4V9YGWAdzvQSWxwadYHmTXTGhwFXy6pWoMotxMTAMNb8BgCXr77txa",
  "key3": "49PMEiyAuHQ6S7EheQj4ZofzY9NyzySH4bkx1dbeaauDmfbihcgvBDSzXD4DSfULHPad2ms9NLcR9f7t1r5tHDGF",
  "key4": "5Bkixw8mYFcmQo3GB8fehNzwuhkqBDg4ndFPRZetvQRtAaViYrFZiLEMmGsHvkJSKDUqofeNVhUpPfJoCBnFw2oZ",
  "key5": "2SECbmpALqM81GBZhVVR4YDBxraANaWHzCnvdXx1bqtJTo1196ZSrrzAtJwxzjbUcEvadNjqjqPXz8s7iDEfyGN1",
  "key6": "2W4SnZRBLzNjPYHxJMR1ic3T6br7Z6XV8qPYrzbdkBN51Cnc6axcjsfpsKbBcB17nkvPmtGGdaaGLGTvDEarumwk",
  "key7": "42Pz6pApP5bGoAwJsQewnjy67Vg2JbaUREP1Cr32oxzbSNrB9DtdnQBoLVx5Y13EQ3gnSBj66uaFBG7B4xaVBTdn",
  "key8": "5qRWnehcUptqHEq9Suge7nsjZQzxfQM7oY72ewXTF3MhF9W4Y83ae3zY6dGSZRdtSRhN5BwMABm7cuk3AS5cCjpL",
  "key9": "2HQHanb263824GSAdunW9Vg9D97AgxMmxBX2pyMZds6YkY4Q6zD4sd1fit31GViNcncBnKZTYWNHYdZaNKWUXYqC",
  "key10": "bi9dyFo4iA6rHNNX9FQ3DuHbKPYT2WxyRiSk15jQbFZDbwYqDVw4dN7AgaRfBUtv5oCAHJfYaCchrMXA3NNz6xY",
  "key11": "4ycWbdF7P856cai3MGrttZPEUzqggw9F8UmwokgxZTH8FamoYfDg28Z4q5URXje6bsjQgtUU5vPwiZN8Gon6RZYM",
  "key12": "4xd74i3mFAUCD92Jgz4d8zKsowhXqFtCK3c6YA7LBGf3BF8cxPgKqrfAeeQ1VoAaHLUQiQN8eQbtEsKv2Wp3PnmT",
  "key13": "VdLfFaMPFK8EMZubTZ9UjbZNDz9nrj5aHWpPkTyBaodhtnvwA4m1idvekJgrz45ottXJqnbMNhkdjFc423G5Kkw",
  "key14": "znifxb8rweJU84YJb3fDNaZ1zRi3FnVSg5dP9YFLQVkrHhLr1wAxonVrFLKCxr9viK5bneN8EySWpqh4LHBZsAf",
  "key15": "5taEbpm78q3XAcPxiQF2h6Hx2jqsWQVBW4RztYocBj8iVPXwyagQZDpys9rmvochHXp2VYhX46o9DXaQrjC3riez",
  "key16": "5CkByG1bFtSyhCttASds2TL4FzTekPsuzH2jooEnUAJdER93wEWYiVQfLF6a6mLpE3cbV2rb4yWX53PyfkdFkfvH",
  "key17": "3veRCCFm16hcaRJKptnZdAYaqo7jY11m7XKRZ1yBXTCunu2voe8X6VjyfTiMtNzaCuxSbFAmuaSbK6uDNz6fi9Cs",
  "key18": "4pNBioczTn82PQexgfiyQQLN5M8SGuNXCmdTdXfCvNCBxU9y8gy9EcB7CNaHRjnvxqk1MtPwsRJXZCRfcTTiQxZg",
  "key19": "2ptpp5ohP31JveBVmSk7BpYKUUiUomUb81u4ha3dCNf8cpEkzPbrVP46qFpSVvSAYX4LnKYQH8ec9sw6xyuJLt6s",
  "key20": "3bHPL2auJuvbD79o6NwPZxW5ZNwYST79vnVTyjNTxKFog4z1S2d1EpQJGiWn2L7P2vjQmRHCdqejeFdVAPJa7umB",
  "key21": "2VNg1Ze5MmFW1Zjm1zvZLGKiFT9NvRr8s5NiWyq1ZTdNpPf8huQXhtkXVieps5md6nSBusTFFUc44wrjgLcP87sf",
  "key22": "5Z6A3NqK2CR1UVTC1Wx3Unuz27QvZVqqPtZM3kzHBjfTSLciV9a1R8kF7RcVYFYbxVw72cXcegFp7y1PgFAFjyBL",
  "key23": "37a34DkGqvwFNhB4npT7Ljp94NDi6ecdYKAFa7UZUxRg4hPYQL7SLY5NxyNfKWtqwS1cAi4bkVEQckDc3W3V4B1M",
  "key24": "5MEH3FK35X4yfJpij1WDWCHnTHuvav5DJvsJNbHmhnDmnQCjk5twqbwAkT2RXrEDL2Xhio3oYqBhNH8yuWP27S6p",
  "key25": "5qd9GdD3LaYAXVkLwcgCntoZjhZrsR7ccehM8AqoScBv5VfwNBAVzziPmtFCHXuBehZvTq1hqm4sQuKTap4F8iA9",
  "key26": "2Xdi6UfDihjDfXpVh2ZKwMydNx6jzsQuKgpZDNTu7c1UkkWnnfJsj6kQsGb6oyNPnbRmPy2GH7zkgxZav66158ZC",
  "key27": "2UZfDWWj6N86ZdjCwq9EPzi75xTW4txwbwmDhqytjXL1HM3gzQRcP6n75mqvS941xSANBEvzRav3n6jTstNv38Qk",
  "key28": "2fepoWmyJatzpvLoy2KhQkT2WEoxYRp6q4EpWXMQaTTn73TD419wbrzrDBWaZgyZm7NCHMXk49hp563p6FCkkbKz",
  "key29": "3kivzRAs1zn1LWvuKp52JUYmSQEg1JTnZMxgq4f5XBB2MMApdTEZHav4o8jU9VN6Xdi56d64NznR8TSN2CjFUKpd",
  "key30": "xxaHo9Ly2z29YmHXkHwgj5MBjwwgMa6Qg9ZuLmyjkRDq3NntfRNVrJ3mv92XaWaWjhJwBZvTDQPQkJ9ndiebCMF",
  "key31": "3Lj4GTnLi6oomPatJf93vTDKkghZRSHZzxe9iWYzzK9a4Uj5iXSMqA8NmbZfqcPtQj2nDPHeWv5pDgtEnnPohRzZ",
  "key32": "Xv82gaL7DyrjPui5eyXLd7ko4ySGj8sAvDGSCCyfXzPpkLDCwcFSdjPCuHXohiXPDdt77MFwC6LH3RTFi4bVzpf",
  "key33": "3RumyWZiNmY2z8mRESXZLsvEzeEf3WCiBkQAfrxYZQR8mUNGuxcWRhcERm1KzubJSzG4zxqPA78dFQhPPTthhiUX",
  "key34": "Yh4GZ1mfABYMxE9kjdRT11r2f74pAMrfkf4tQd5mTjByz9G9y5Kmq9LeY6RBGgkxtJYXt7FWksmtRW5vTqpHaBZ",
  "key35": "4LrwTJLjhWooQNPoddfVnvSL2jC96oH77wYegLH1votv8CTHLvi6soSByeqfxKdrZZKhDWKkUtJ8FQ9bjzdq5LyP",
  "key36": "27HBTSJDtoM21Mpe7g6EqbdBvPjLZ3VarXDpE4WuW4vHToEfFWS1Mzo3zGpMWL1axzMtwmgFfjr9uajjCFT6m2fv",
  "key37": "4H7UN8JDWTCPDJjv33aNwWUdtoghEguXvGVoD3n6aHD2fChko9YcBU6tfQmVFuRwUZGwk3JBfMHfYDPeHEK2U4Vf"
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
