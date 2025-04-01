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
    "3fAyVBCuq5wjBA6y3jfut4BGzvw2PsHQ3vkK7A9vqQUc3DX4BmDp7y6RjCPMjQF15HbzLR181rhmezRa2EbegBzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t2xtuZSAP3qcm1ueKf5Z8Cky31pNBRQrU517tQ1AGWU6wvdoRmfHmCxuoF4WcUKB9zA6zpgX9bnCkNW5Gdnna82",
  "key1": "E6uTUGGkXABGuZ3EoLJ3xYXZi3ZbKfULXnm9r3r9zhvGJTpwqyg3DMQtrH3cV5CZ9DdZBKP9Ffdbmqep5TBdDnA",
  "key2": "2rTEoTLTFepoBEru8NWQ2Fp2padpiM7268WCkRKNKmCMxzzZkBNj56HxnD2RCe18GoGKoWwnnCLhUb2zE1cw9deH",
  "key3": "5UMxmRemDeqqvdGUXZve3oUbfk3k2YaYaaFVL1D9eSF9p4tVoZgxJEYwgf6TJz2dJSvruC6mzM1hjeWjzj16xQMa",
  "key4": "3noc5phxdNnff1BrcUfBwNiPg1TxwP93W7SyHk9prUqgtAapbiU6kWchMxbYKWKoqDCdFN51Asz7yvNWdnGygqd",
  "key5": "5UFBgT22QwDWHDV7ZLsJthqiUiUSKYVFZGZ2mUgwc5JvLUv7JKJhWv5uQQUZcYzqaJyP5ik7qAVyEeJ7dwgZ3DQk",
  "key6": "5usuGdJAAVmtJsvL5yoh7G7SDhYApk2r7x3BoZNt1vnwixuWt6qUUV4mihM7BvKRvesNTSor5WTdTmhXM15cATyK",
  "key7": "2Cd3VVkQptXuYJMBgzUYpdRRFECoQYhMSgnLydSn3PqEzMU4ebiYbMKak8XaTg6rLmLea8ntAh2pfscXzAw6ZFaD",
  "key8": "54RmisRGP3De9BicvyUXg2f8yU37Y3frRRy71JekuZ9edBMdBvhc8R3B5Zf2cZke6Wv8FLgNYFnaHdquiUbvfq7z",
  "key9": "3nMWViav3P44d2goRh8UWtaXfELxghBHzNvZPYtPo8UvRAvEYACSCmK2amsdZw7SGr4AjVihqG6BR3UKDmoj7g8q",
  "key10": "dDsUmNSz8B18mffAnrps2E93J6SMwjr7912upqTw4n32fqTgR5RC2GUM8ctpv7HJdES877a2CWyxEgr29BPnYHY",
  "key11": "25uysYf3Y8KuBacCAWhKE2BvSdJB2DQ82RruZFFYAQJhXuowKg6gu9Z1s4E167hReMzby8ic2ox8mRm8bMmuVyZ3",
  "key12": "2i3CR1aF5rAYsfFELiXnz5yPSqRKTuFoDEzEFkzYKzz8eQJqS2acjQYeYrzEpP9NMyDen5Hk1My8mGgMFaC97BWq",
  "key13": "3dnZVD6wTPgDyoQ3hpfJ3taAEy5dzUN6PoXBGhmM3QS8B1cETEkxiLk7WD9U4yN82MzP1erSEqAioea32cXgUUvr",
  "key14": "2xqCsZorgihj8arDNKvcYuDoS9qnctLrRtu1wpPWqRfYZFQN975f1JQThk2KaH71Xos4EzgyJrWvZrAELXkGVRm4",
  "key15": "5jxKKcXNPEmDWTwJTLauagUrHba8kBXKbPMt7oQCTGGHb1kS6FfCBntT9NqLgTCc1QrfBcYd1ZsQ5E3dFJx3eiEy",
  "key16": "4fRHWFhnC2sdHKmFsR2Sh3p6utVZ2GoV2arDbDVWpTUMvLCRx2PFf6t3o2mYpqgEfCVXi4wNC5eDCdA9tGvrFgoc",
  "key17": "2in6oPNjTUGnzdzGecK1xH3hYwCNAouUbEaHmTQA3kEQRUK4XuiLyskwRsncdPqWCM65jZy1Tx1wjXUS3EWjoH8P",
  "key18": "3wEHZWs6HYB3WbEDsfL9GePwjxHiRKqrBZgctUFxBdubYshnjfKS9ccJd1Rpj6PEse2zFnyeR3PzzqQquKJQf9s6",
  "key19": "tRaSptzX9TCCuLNtPXGdx9ZhSijskoJTa1TCc6B92xn2c7VF2Nzd87248iJnbvsGd8VATCjdJvjshWkJAQsAxeV",
  "key20": "5dd5ELScMCQ9BHWxDzEkjoKLsoUXDwgmbu924W6MqmqfCtjHBjDZWikSgLBvAGdm9MwFnHsbnNNpJk4KwHA5utHC",
  "key21": "5RH4TsyWagTtg4HumWvxhNmZrhYeHDnJJhtFe9iruSss7MLwK3yWcqEkdtqekpvFPTD2kbeXAX1NWwEubXgmAbk1",
  "key22": "xCuyX17vE3RZJJZYX7w5YQRVrnLoW8pivaB7XUonwZtwUHeqhCGvphoW7AedTtKv9xAgVZpDA1qgTb2yCje5bKf",
  "key23": "2Cj6t4eKLnH22UJEHUEp2MsJNdPuY75XxFXnnMkJzTzRwcYx4fsuzuSzoBCe4LMBiTvsHYehUgRLZpTuFrYgeYeL",
  "key24": "2BKeaejWgKiggAdjHe2pSzpBBer3hbJbyGpi9hDFWS7p2NL12N8nByzKctzA9SRts5Y1Xo8nBsdUs1ZeQu5hn8KJ",
  "key25": "2HZVvQuvKLYvzYbxgTdzAyturPHAtdizRfWJcucbAnW7BDYqwPtGLDooB4Cmvf3jHa5WccJHwxQYe336X3H7RL6t",
  "key26": "4QxZYhjSQZY7NEwu8SpELgwLwdfXkTfNuxdVavgS9tx2FjJaDU43Zid2f51ZNR5oureW9EnP3939hopZcjC5FFNT",
  "key27": "3NimESTicPVLb9VaY7sVP9bS9fc9EzdBA7RLPZogdV1BuKGp6hYiVcxAjxtShsejDjuyv5Mc5PyJJK17ApUGCmp9",
  "key28": "3GZmJYxsNNiENejLwN9iD5Wcw3QLgu29795Kou4BFWUyr1U9RgG1tkU5nmd5a7TcYfsUboK9AHy65g7pZEkF7TYg",
  "key29": "5erYCrzSUyjU2gJC96L29kgSojGWvBij7GJXPpboHyqT5eqfiWdG2aAnhcGgkfDgFkdeB1pTWMrZQFu1DDViXJJY",
  "key30": "3B4sZBTsSRNtWRBSz7HdEnu8TzMJ122KVgPscFWcwLNe2os11ugkXZFjTpqDXJvE7cW3CsaJ7sxAhxJ7jyaTP78s",
  "key31": "4m5GEgxCFMGRctZJHZzMhhDGvagwsCBEFmNJpYoF2R8Exu2RzMEkQ2PiVBsEFFM9xoNadDguZxpCc9bj6mxtarND",
  "key32": "38HFaXJZUh9NR7rsHFbXdBXmPKsWdDHbxAQSjy7b1ewDJRAf73yLq17hyfYEb6qXci2tvKNsQCoYtFCS48vSUm3t",
  "key33": "2gskdhBLbggMb7oDvuqesHPsBq5vfXAwxKmJjQGZUqAzbfzG7GA5BhohmyHcigQekTuzCw7Cro2kJvBcB9iBzYEa",
  "key34": "5p9otXAR4NrsMHnTRd1gBoxW4Yeyd9joNzN9wREHaLaXgevb4HQ8x32MF8Fm6S9F5YgX1GpA1uZpUt1EkUVogrJ7",
  "key35": "grwjiC2nNysPnm6Yp6QGEQWMtXPcPyMhyt5Y76rK53rJTCpcejUvoBsX8v2S1Bh58GV5fSQmcjvxFR4qnSCfxqL",
  "key36": "3iJCM3HyCn1EuBCTUX4UwRvDYB32sNduHyv1VXe3soPP7D3g7eJCTwKGPD1mggjzhALwTJzBNJqtFc5rM5MWoJ4x",
  "key37": "3tE6Q8iD1PnzGPWmh34sqP3uZkm6twBK5BDb7UPBrUYCughXHauYsHZt36cUgcQVnyupJGYumgrmG6sKiaXpPAmB",
  "key38": "2vFxWnsPu8vhEfYyprcNjdCxEvNuq1LV5tG9DhRHdaccD5B8CksCj4dLMx51s3gXFQtumu7dNAFWjLeBa4N7siCs",
  "key39": "Wk5nwV8XaN85A7nsDpGa5AzwG3BnBcfMSp19NeVgww69NpSvrhbK72GJvdemf9W1PYUosH6quyKLQJDHjXvnSua",
  "key40": "2hoGUHixaqez1SweGgkYyAjhzizR5Q4ncWUAFXWR6Dbg23HTNY7PGpQekmQ48s1CuGuzSMkDPyUgtTk96UfVbZmH",
  "key41": "5HDCuqcnxFZNQgWwkMGa3ZdQHiAfnyeubdjocuWanNfn2vqipipDHoqmuBV35xcsVjFCuaXvDrqT2saakdu2t1Mm",
  "key42": "ZfiBhpb67xxnB5X4L4XuTjZ8tPd9oJCMduDubBYbCaQaVTPJKBo4tbaokgeASdFhmH5RpESmA1E7nExhbKm6iXC",
  "key43": "BnppTYuqg1HzLsLW6sq1QkKd8MVfZ95DNtM1pJaGKqp1cUM6jCxSwCGD2kWZ4hXs3etkoFeavvvAeu83Uhb9P91",
  "key44": "4rqRkTGWHwJ9QiHosHap1DdsxzerAzANhAUJ5Ai7Ae4GWDAe2trAxCzAX4sghgAJvyDNFw6bW5v22oKyQeV7Wqqo",
  "key45": "4t6ZJjrPYuhrNDWw9nN4t8akVuDCHFmadJsBdenRm3vhikVka8AEWX5LUrDg1b64SPdWzkWHQW5pRYtisHei5g3c",
  "key46": "2HJLLRv8qtbSKUjaWgXjDwX1i31qEqpxxS7bc1VnNQyX2MrjvYrusMcaGssKxsUUeLxUU4piKebtnSbWeQ2pgGQA",
  "key47": "odANAqdZPgHjfmbbiaUA2C7EzVvfFuRZV4NhfekVg9jz7h8exK1sDY6Qs2nU9bT5RmPANHjAGXPyMT2ybF13RPy"
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
