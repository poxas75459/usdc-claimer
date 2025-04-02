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
    "3tHaz8N5KhDoMwT58DGMxZT3s86ohjnYUwMBVF4wc9vQY3jKcpAksPwS5CKVtezu9i6qihFJiuJUruMwTJ9A8hck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24JyUqs2tdHu1VuU3Wm3Nm3zUD26h8MN1PGfUJjcNu8M83sfFNJ5eQUesQBuzju87pjd96QCFqnkLGNswNm9i5uX",
  "key1": "629wuZrRueKxXdi1j89swfEuwiydScU7WrmQFqfBdAYutwGpBZzxmJDkpBpTNbYjHxQCXatrQh7ExU4g2nbXq8px",
  "key2": "48NDBScNed9ehKGw7Y2seDAGL9DFPn2A5uPaccj7pxDFhD4WekkZbq3hZrpaqxDwMqnsLDwZFQ1GBZexMe8RNvt1",
  "key3": "2m4QuCheeSPzX5VXTWkGy54B2cwbmyfyz8NNBgfS1VQPG6vgqyXXxWDYLC6i8jasvKTqSMiFuLU3KfCp8AMvRRJP",
  "key4": "3mNRDa7EfgEre9oqwuFZwurJghPP7o4BWivaRRuqdRrYvW9fq11vFKDC26h7b6D9GJnrU2Uoc6maLrPWanRrsAT2",
  "key5": "49tg7NnWmVdfu425en8NLFzd1gmfaNhhnXbjErN3MgyitaDGwXCGYTtrt27e7izWhW7R2g7nXvZ9Py9Un1KdXJHT",
  "key6": "3PDk7WxLwerMrPpXwxN9vGX91U6viaaFJE2KosLRr1DGadyZ2oVxJZz4TD3pkwqgvD6y9Y5EocqNtqhUPjvUGu6u",
  "key7": "2UGKywySWdpgRYFLmGA3n9g1xQUUE3na5YVE2FAfKQuyW7mHaG3wHkxW3ejJMkGfnzF7U6s735hVGUcSV9FhNp9v",
  "key8": "58gdCAEKr5hg3JzvqWLKPdHsSFVab9fFvWxra3tHQXFzyPx5dShvKv5qPGgxeuagyYsonN7qSCTBqAciD6jp7ReC",
  "key9": "4Jh6uobuBM8PUy86aSURsBmCxDMMhX94oXMh6AZAXHiVwXMFQwoWKxCJzuVkjsUasinVjniW6kej4tQZdzFmwNtQ",
  "key10": "AvT7xG5TJUjFM7ghmQNHU5GQ4iuCQkYABtLUqyWCxPcXK9rauxyGhLPHkYxUhTSJY5amP3sbJDaHNUo1taDwuAH",
  "key11": "7fCoLfmkrZ6NAbMH35qnD3JnhKcwXBgmFe4ipahDV5gLFarVyRwX15cVpW6E8JoYDV8XpQNrsV85MXuuTTTnu8N",
  "key12": "dzzTdaqzPkE1tSM1SuoebmEAHFPgAz3pvBXz8fFELNjK8DohFyzCProJuNzgUj6y68kKwCW2PEoyZ1KoBSiZbMx",
  "key13": "2YUh22TZGCpvhar9BvmisVjCpNew8saZJc5npgGDREBM4FfnpvJvqi2am76u8WC2pXiA2zV3NTtyZgZ4BKPyLgKb",
  "key14": "2qavaZWUa7D494LUuH8auozNK7BzEvMKLkKLM7jm5A65462151563jdpKDGeSskw6eDaVJDcDL7hDeQTADxJBxqD",
  "key15": "4wY7tFTC721RBPtiLbRvGyF7rxijeAXfCsrNtWsJUjxsyg6AiaLBAmSND7gkcRuC8Vs8vWc6e6tkf1g7gtCdHH7B",
  "key16": "hA5H127vSZ73xxGKs8KKEydrPhMnpLeNuMwzZBCUvi8DtkE5qheNupaYg9bePmG94GioF2GoEvrSEUwfnL8yXYN",
  "key17": "VHd2HCn6XgaxEri6gD3Uj1ZvonRudfSfoZ5z52BizcF68qaiW14jn1fQdCzc3WagJQ2aV4Bkf56qvPLGT9YhBQq",
  "key18": "3MBzqPJsFn8V7q2yd8bzutit42JLSda32ZEGS1gRdEcgAAoDZMABe5uKhAsbV7HNhJ5Gs44KsjrDM4PcPFVpe1zN",
  "key19": "3Xhn43851rZ4R3NBjx7qb641irMYAxS6rnTbFudC42YjD9zVqBvPfLeSMqx84yBnd5RyE8jVCn35ycx2kwEAbgc8",
  "key20": "3uu4X38xA7v4ZpRCnpediDrtM6gR7FZnkojVAgnZwaSerFJpXH4fGGTho1F1JSoeWnh9B71CztWxNHMtDxVaWQTU",
  "key21": "3oLPJ7Qni2JXcHfBfC7aBjpKN5Fsa8QzCFCpjxJtVc9wLpgcdgcv9RiU9vjaHJ1KfiNbfbQxi8LFc92aMdfwhKsF",
  "key22": "Ap9tCBw2fhkCeetc5fPrJtgtijPLzPH4KH6ejSjuPDVtYaPY7t3wqcQF1Eaoic8fYXxZwbskZtY5MfA9N7JeFGn",
  "key23": "24dNUas8WvtaDmpmh9pgrHfN7Su7g9PozXuPTXCAZCa1Zt6NmxNt44PZ6VgKcmGasFFi7HLZHtmRFWcftAfzktFh",
  "key24": "2zAoJ8pm6uyXUFMBnHCydMNqSghwfUB4zQcvGWVVQfzKw9YmoQDggm7kcokkku9auXAsjjWduhnUqoTWbNXosNnj",
  "key25": "2Bk7yVVj8TZnKkuDPKpviAUc21WyXi9AaJrFfAVmFWQuq3By3FpVuvPiez3ZzUKBGu7xwB2qmtNpNVMKSGRuGsDB",
  "key26": "2CL4RZKQyzfs6JhcDgSV5M3xj9aHexXnAPg1PknNJcPGREmSFTqyR7Ny9AinRMk4ST2HaV3rUeyNy2xnDQoH2DY",
  "key27": "4zBBe47tK1bPR6G2X47keLBbMgkHp67siyb6zZ6XiKhuuyet6qcbXzwVwAXKAcDT1PypzRv2NkxZmiARtrnw1Q4H",
  "key28": "4ZUBWdaVv9Ztu6mKntsdHXHCpTuNcFCBbfWcwxmVW5vjet3BtbuHsciRqXUGxqxGooVQ1C7v5UxoKQZQXdzAXPgy",
  "key29": "3F7iahHeP7Uz6nN1H5QUT4XBrzJEecKfD1X7udf4FpD3AjCAx1KJmJUgLZtDiQyMrcBnUPvdpbmwaM7P3AG5FFyS",
  "key30": "4dBD6AujSmC6sHnqPJeZKwocK6J9n9HADGZBZ6HGFFCF4hKVsAVuDXsrQ1KjaKT1cYfyT6bCcw7ny1NAZ5L5R6oT",
  "key31": "2ZC3ckHq43tF2Q9xsRST7nh8cyVECenjhM17dNBWTHK7U9Sd7c9JHoJwj6P4iUPUQBfG9uzFB8Xug6HhymyocmZb",
  "key32": "5dqpLbQf8DYFqtu7eVTa3zxCnQj191eTsfrDNpw6n3u8BeraLo323gDoVv5YGk3BoQ5ABpKfHJ4zUQo3MWMgHJq9",
  "key33": "2EjhQRrezkkBYLRvNaAX1BKim8eYNLJYgCkxw7tKv4fu4VAGjZ9JDLJg7XvPnVM3pgSae7E6fnQJx1iy4pnx682M",
  "key34": "aM26tstmkttz6Tkfh2uDmZv9RcSd5qtWp1v5tujjccx2jwvA9DH6tRL2G6PiHjyiLCmZVoXP3EKyvzzdDSXMmm7",
  "key35": "3HPH9aYD6YiLfDcQsXH29U6tgqVqj3uxVaeZVFgNaExwdgzyMcjh9zWzD9Mw2SSgn78qVwRahrYsZrW6hAyfonwn",
  "key36": "5ZttmSSYqDBGPqA6dvWaH8frA5qqEGd2jUBg4eo5Nkc3jdwXcXAYMbhrCuNBk3XeG48pffTeqq4XHQY4gq1mxRVE",
  "key37": "39yxn7U4FG5tT9eLpCCWsMgY5Rf3LKeVC6RCZgz3vdJQN3Lt82LhuDC65BQ7XdMTBvaCX2tqqJbXH749f48vD2xi",
  "key38": "52KeNVQqZq9vGTqekJWEhWKd6fdWvySmBDw2X9VEA6eCdMnw21E16RjoKf6sRpghkVVnpuiZAyqNqx92hYKAkkyi",
  "key39": "27y4puxr8etrAJXWWfKtZDZH3BbXRrTA2pSTqRmKpiqvRV8LU2H95fRbSNZTAvXeVtjsSQ7dchCiFaW33CgS7kdq",
  "key40": "3Xjg8B3vhpBAKNnMPChAkJQ7NCHPiyJRkj6oQHKLDW1dyBPoJVLqJJ4eCJqzsx4Yw2sMVzymjv4TeRx5SheyUPb8",
  "key41": "3bqnzWBv4UtVYiTFZrgM2PWk1KdJje4SwwPcv4ssThacSwuU3SJt2TEqunToXyVyZJPBNXxNs2JeJh4aBAuKnCwP",
  "key42": "nZsE7Tn7fxWNpwUU4DxC7FBcFRnFKYEHBB1noMrqbL7XiyZSxyuTpaQZ7LeXzGS7TpMGsSDmEVgtFcgA8UDazSh",
  "key43": "LuLujmE5hnDjQyggeZbATGRE3CBeCHKaxbTgFqNAyUoC13TWRjKQjYnB3vGcRakdzaCQWmzixS9DXCC8nFxLgzn",
  "key44": "5SdoeQyxRn4pj3Ghwsgf7JdMBA6EsMGxvi6BXggJmzTJq8KQDNhdWPMfyd1WAUX3sJyCsiNMmoXcBuwTvVZh2yg4"
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
