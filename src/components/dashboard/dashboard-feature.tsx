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
    "3AeLJjpExH5NyhzHQ9TWqNeZRuQt5GBzRrexmX2tDH5MYmJx77vTwNEFcyt9HpRuDYwPx1Tj15Ctb4q59SBWgony"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B1K3EtW8QpUHNo8HsHzMHbHs1fXbhRjHD9xLia9c47uxtPeQ2Tgm1wD3AqfnspED9B7K1sw8KVBHoCzYL9nqn2k",
  "key1": "2pUGkypD6N6nZEAqQPzX3PDNojkv5R7N7Qip8XqNthfqKz7L4gVJ8Tjib3fuXG6KWiMcmjBzuuBszFVrfdFdRcbd",
  "key2": "WNzQPQ5Dharz4AdqmdgR5685YvEsry7hb8oztXBnmZkekLyosezQXAwL8w8BY5h5WyPD4quwFUUW223EHyeAX4i",
  "key3": "2kBtFf8fzXHKaGVrVxkq8gH8k2SfGP1RXGughWSoHPacmTZJyupF18oWKN6Mi39YH85YAQ1WpbDLQNxX3a9uVMFn",
  "key4": "42hbvgYCc8Bb1WFZhmvdp9G2F32SwpY4TpRBoHcg2pKZWN3AZ3iLC6GTshYkXpQbJ4D1UpSsn5G5tARxefKUfS8C",
  "key5": "4e2hPfyXwQmWapo6nyVZ5nscUBCfn3FRpUfaDMuTbmbyXbvzu9TRoiELMXvZ7mRHZRf5S9vVX9qARR6K5oUUXvFz",
  "key6": "5epB6K3JEpiNxNRYXxPck4xCHpYT4m4PsCr6DL9AjD27tLjuF51mCUjxYS11aejmDx16ihXBegSq4MgkFXB1Qmcj",
  "key7": "5jvMmnTpJQDK5pn8Bxzc5XRVR3ZeKN6sF8jPervreE2azZWTvFvr5Q1SqB2nYsCH3SzZWeLmob776d89bHH1apr9",
  "key8": "2xxzLQ4eyVbufqPUdHbcwMwruqYhpVmMLMUPLr6Li32APCXJsZD6B6DvbEc8GTKAC5mQowbfKKuXVrecC2jUQrgN",
  "key9": "4PjP9BZvP7Y3mTmR3u4KJEzPvMcUk5VoFgyo6TPtdQDhU5WoEJPizxNknFXsV64Grrd3xCuaPWh46i7SBvHrnLoU",
  "key10": "XspaG8eH62cjpNVb7KCyFhiAX95APjEaocD8bfCbg8hyZNhvUCgQkuKiJRsRdz7Kj5DqjeA9thtDndmRaNRmxo5",
  "key11": "2w9CYfQVkJ7zM6MV56hcAMYmrNVWVVCiXrmDrtTsZuFZp4YSyANbP3p2j6vyStwY81rtgSiFtd4T4ov66UzfHnzF",
  "key12": "2HMkjSJEQ8XsLR96BFAqPQRbhtnYpe2p3jA22Afuu9qvPhp8M4GtbFFRpL4FnN9ZDrvqhQkCUZRay8tzSoC5aQPF",
  "key13": "3iMj7T185XkcihEQBrhCsqCJQEYpwfr37yzm5o9h2kX8aqhtrpJLdSvtYUSD3N4p3h51HrWGzFi5wL6PCZ3tMksu",
  "key14": "h8MkVRvEs3dXinDjZ51nWzchTBBYXUTBF1haSQ72tXSGw2L128AtgBJhKk1CqsaeQiJd7nxSDhPpZivuEL1av8H",
  "key15": "jNpL1rj65iCA3KMnktLqbuwwyu9P4YVeoJUXHYNs1vcH4jXLEspZBN9jtYnE7ZBF5YBUYPKUfTojR55DDnewrzM",
  "key16": "54s2ZdxQ3spZ8LGk67m9EbxfjtfMccksAaJKo3ZMUcYy3jjZNwhF1eJWcCsVu2JH21x7Y4VBrJqpaDyptU8J8x7X",
  "key17": "3W8UnkAmj8U7m6qPjCTor1xegriM8G2pXwHuW9tj59Suv3LoqQxhE93i25n4UNdXcaJh5kq6Lsg6DbuUD8UhbNbg",
  "key18": "2Av7RscNd9S9Aa2oTKxVY2YVUzF2UP9dxXkAD9kCbvVyRoVRs5nA6p3qoEDVL8aanNbVL8xwJ5xGKW5dTgqJDnpY",
  "key19": "JmG1ox2JrM5PbZ84cuyRrs3pcx8FXGFQu4z2UpssYrhvw7WxcY5A3YACTXXBf5CBbvDBNdtqMgwFY5gNQVYxGH2",
  "key20": "3eSeuovgx8ZGRrQu7CGKxrL9QgpCeepDdmEfV3tYCDDDQnYRpTv7fpnxK2MYRM2AkZmFGQniFWknBLkEb65fh8oy",
  "key21": "4BhBYKJi21cJVCsxnzj9CWSzADFycSHfNBZzZKFEszRuN8crZdkq3AhnSxtYbmotfLPq246Mas1nFvcAeUgoJ4py",
  "key22": "5DKsAVvuApYyEAdoYjkeuk7tQPgeCqZvAJ54A1vTF2493HkfRw9qWD86cbGCBSyvNHaDWv1RnPhA2NgQFgVRHkE9",
  "key23": "2NPRaCjZXBGzqhYQsqjPE44AAV7ZP7Hazqs3BcQ5CppzSNaeLEGy2sEtMvXuvWYrpzfJ1VcRp36oz6Ru3nPpRvUv",
  "key24": "3RZ55jzKzpGDu33hBLJSWoFqcuffDSofVSJCDyn8tAJZgGPdX2SHbySb3hsrQmGBAF3yJx4ZkknbybDWZz67k86J",
  "key25": "2WXnAtE1qSdJzD61QNXZZsp1WfMk3vPYrYE2JYkWUY5PF2adWaQAogbGV8AZy5MMVNhTYW9uP3vRybiFqrEoWHhP",
  "key26": "2S6yfKcMC8VWCM6BZHq2vTw4DoaJnoqhUBKL5xedBNG5N7rtEP7zxnjPpfQA2Mz3PJXb8E8E9azsKPvufXni4uSg",
  "key27": "5o67rwHshqP3FJK78Wpr9qo5TDipW6y6MENUMporDVXbvxARrrdJ3cGFecttmn6DVWsGTHZ7nK4TwDKc1QPJj8T5",
  "key28": "2YuX9krXgAouUVxXhXHW764MyiWuEv2Sw4DN1wvQ3cf1hTwW1gqZotK73mGFD8yZrEY8bwDyhKft5Q5TanYbECQK",
  "key29": "2WpU4z3KQrb3nabtATJbxH2uF8cuFy34nBTqub6SgB1V6b8uHaHSDSecAUvE6kDVwaM4mrwKygsDbfjQxVKPMBsD",
  "key30": "4KSsu8Y2222PQ7GwTs1hgkQLrdbpRQEVgSGtrKuHuJ84UBNjjkaTR4wEDoCyCDa7qmrKjJHovxbZJ5x612jdgPdn",
  "key31": "3PBWDxHpTPphGXYnqZKfGLBWiz4PyjKvDybzVEMbHCxdhEnu2uSgYQbRv9kpb4kXz9jAzft9KZJYEvm1aBK2oL3Q",
  "key32": "WbSaJayDRR4TEM9zDSbB6J9THQGTUp2gQxqfVAtNEoP1w1C4SPdJggEF74XMaGvFThL3xM1TXcRwUQLneK9ff1L",
  "key33": "4TZJRLaDor1DWudbUHmWTp1sJdFGv9eVh5sPZbJxd3SfPrgRFVJHNEUQde1xvmCp6ygu3Lq3yWQ1W5rBkUPQdSV1",
  "key34": "4y2zrNxn2x9tJ7ZhHui3DExNgfEZ731mdduWrxRn4AmMt83ArSGgNZoESZexiGCU8Xgo7Ri9reiZwF5UUmxwgqB7",
  "key35": "MKDD8AwAVtorLiBeSjhMvx5Sp7b6AgZ8eG3p9d64PXd4HCzVUC5RwvhmWfzqoatgSZCm7zzVzKMyycSbML7xJUS",
  "key36": "btFWwLH7VjpS9yTocZwMyJdioYqzGBVBi7ujp8y7GTLuBjmyoz44FVbeqQfma7cQbXzzeLQ5AbRSVL6cP2YwkbG",
  "key37": "2kj4WSBdqrSiz77BvmBrce2FsjwZ8Rh9QAjm24s8hvtVi1FUJdrk64H5UEJkSjvvfEj3aFq8dcDMiW3QWtmnZagT",
  "key38": "5yVNKh2k1ksH2vV7tcqCgF6KJys63p3o7TV2AgDLni9yzscic6QzQ1zxZjJKjNVh2vPKBBttrDiLqtk7KRCfySLa",
  "key39": "25JwZn9xR8ov8TRyE6BJG9suQBRQxxXNRtcZE6drGnhnmh73zKavDd3S9Tc8GvzSSaV3867gV9xdP8gH7dWm7Twu",
  "key40": "2FMRgpfi2LUp8XnumXqTzoDut8ryG6aAkN27EmsWG3sz3QWbZ613wgSdB5pjij99SXJm3AtUC71Q58gydkw9Nttx",
  "key41": "4ntPsyTSmRJoQPLtWu9ci39pGikCXi6eT8Fq9rsdqYpnnMEzdUqhTH54hSk1NPJ5Z6Vrp2X2w95qDikoBuHirxwJ",
  "key42": "42JhshivryLQhE23bo9MMPSqJoChg5AKkWiFmvbzWXd6GBbphnHcMdUdsgspooC8MtoYejrNU7vKzjEYgXzrsqTs"
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
