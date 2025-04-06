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
    "3VNL81qqBBBw1QVMeE7UMqEefoM9UoE38PcTT4gzZ3253Lv3K1pSkH4akUD3G1esTn1JfxpzXaJoqPiqzbSbSCHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HvET1ENnE7oCy8TYknonRxsrv1JeyceFj44HpMf5nEUxrqjSi5S6kJGDhX6Fje2c83UZG1AoznrXX1Kzm5aqptA",
  "key1": "5i9KHgQwo47RNTdvcXdTaZtRRsctEpPKniDvqpae9e2xa2yCYpYtDQYy9qtafpXp8W7kAqyifyHc4Wmng3fDvgU4",
  "key2": "3vCJAEsp1SQQ3Ts6RDzoSJXZJKthPahaw4TEUtxLDZSsoVvcmpqNAf3eeZ35z4TP2cwxMpvwdPuHVCCGkD7kZm2w",
  "key3": "4DoCnMrc4YzPnrig7n26T9Wi3U8qdvwyy9kcPRE7eYmewitLLVuNhKX5rbMfBMmoq3jTcvRhD84DY7YYpb9GManA",
  "key4": "5a7MUiFvnH1o3dDyvVukBV29LFWLedKWsDPvNMcprwA9eTvwTCAEE97FP47kLW9fNW2xeoPDL5Mb7sQAe9igWS3X",
  "key5": "m3iQgCPdzi5sWwRueGgU4PSkW8XuaXUSieumLcUT5y3ir7HqoKZQhNV1tixdoCfWVrL5JY7DfX6UbMhnqsFKHu1",
  "key6": "4ksheph1qKWvYuhoSWV2mnyQrp5auheePvn4M2oKcNuNhEcWzmZwBBCKCjxSzmLHJCQWdBNK9Uzyi8WaWaT76Vg6",
  "key7": "3eJwRdAjztp7Bc3EHi4zVGoZnXrcT43mVmjYJbh8Lu334ZQEnaRrg2AXBKSLUsXuPLPAg21sQbn5StHUXS2xtWqq",
  "key8": "3tBNrtgTwYC7qwQ5WWEdisAib1bzDK3Vn6eYduAR3ykTft7dY9fAcAp2CsFqPVc2TS9V3RyR6fWGbBhwNaeqcBDT",
  "key9": "5wjWquk9TZjEX6T2ZAKTGm2jEvrVfQb4U4JU2SJHUwGB5qjxbNAzHtQXythkTdxAmhGD948dHxXxLJN48frbMNqi",
  "key10": "57QoyEULxuKZ9zQYmrTMJz9F92tVKMCBbA22yiaHci1aBkBcQk6rCeEAWDe2AAXNaP4choLcuYD8wccivWKVXDxC",
  "key11": "3WmAutynmUJZXqfAqSxcjtoQ9CheFL1DDogaxfJutpjqNDWavo4A3TGVFdvGnU4oPyXzzGvsfeX6ae1Pk2hwhkuT",
  "key12": "5vAyBZSRyAkguQ4Nngk534M7gfFFYqJhBDqit1qpmswnfSEaLZboTC8mJh13AjJ9WEQiQMkDhSy21Ed6V6eyNUxk",
  "key13": "2rfiCKgjsgK9xh6fqZmpaQdQnRSogkFzYxqSdbaCyfyHA1yhUzAFahM41thrt8yPzDQMqKGwP9gYGLw9fRSvKPUw",
  "key14": "5UPxA6K92xajvk1gGwKKndhTvszCNFUBacwwgaCDbUNS65acNYuEdWDAqagVrei7Vvav5a9HoWXhtPfPoqofsJpQ",
  "key15": "3anfmJB19iLagurycdDrrcSxVW371vVtmyPHcB6k3AAe3Ke8rShBn1Ym2U9UcCrHGcuZckpZWeBigrtCvdE87CEJ",
  "key16": "4hKcNs6EZ2YaD6eFT3JwsuWRSTtRGLSm6gdtB2zxdx7bvMPySG8CbktShi93kbkgFPL74ZPsThatDLxUEVeSqmoy",
  "key17": "5Twki8GX1f56oSLceQDQWC5Up5nkn5JZNbRRuzuds2fvep8KcAFc9oN21JJpfxPRzgJXphwp44DspaRxsJTLGEab",
  "key18": "4d67fPY8d5EFLZv9PVixUfKy6igTtPRD738T5kwXSyr45uVPXtEWLgDQ9ZAyrPk1QExPCerPo1gWzaATBmXswv5H",
  "key19": "55C16p4EVLSPqmKpX3RqQa2JdULjwUhWp9sRtFUEXwEyTiquwVjsVNHBcEudgeCHv6QdjdrmY3cf2maGoS2d9FbA",
  "key20": "3dhpM3cqJXswiWfdRihVtLMu6arX1vU8a4y8AYyVWHtc8CwZL6KjArvSa5d6DoxmZjTHrq7LRryBmUEFeHc8pgZv",
  "key21": "KDEBC6MJ3j8N2oLLboBWGEwUXzrekZGTUZn5tNzdzbFtisAsHafzqQVa24TE1F6ooMfwqbpLSEQxToyvFgaGRgf",
  "key22": "57ULk3N2CRaV2ktna1Cmwtv5NuxxnN2iD3BbScSWWydaq5cefDLwXmyV1DCFzkqUxv1bNQf1ogD1FZuQuMuXEdtp",
  "key23": "pvXCRC1XgiJVwaunEGcxNrF9iognfPE3Gpmbe4JwwFegiZPrvEWwmKhzUoZWJmML3omRSSXb3Zejn7ay5tXCUeE",
  "key24": "4CteBWnd1E7w6ayCMsi8mXUZC253wBiLEbYXLnoVqMnsv4moTG16sZ2DFjeAL75zHBHBotC7aYmWCdGuv9QbekzF",
  "key25": "45r9eyBvx7YpdZAdQwZFAcnhG8t4Vg35bFGwhEokawpRnQzyL8VVFhiQampbTJWBh4BitJUHBDVhqPGoHm4Fa9fA",
  "key26": "Bxz3VpFvJvN1gQmpeSWjLEGoXvrn6dX5ReKvTNGSQSyiUjaSQxj6iWgFGyfq4HbzQ8DPXtX8622TP2z4mwpKkx9",
  "key27": "624FDh3DemMmrhXzA6b6L3UxFuQANFoGNufkRMGnQ1gkbw8ngFvuefECfNk72m97AorbqiLuhVz2ARVgY58xGzU1",
  "key28": "2WcyS8wDop4tijt82T38bd1MqputPjEuoUYFwQeSudBLA9jXaK3DyLxNfptFEE9d9UYe88ZdK5nmVhPpoZ6DvK99",
  "key29": "2zCeH29GEouBgLNLvWNnbbGmLb6XcsnupvuTmWhBZTMY999QQeMcRndzpiPP4RqxqwTQEBDQnRoh3QS78vqmfT7G",
  "key30": "6GDMj5SnpGWEVLHVNxbQaq4nzgUXvntDePNd2Xn85LouBVQxdvX5S5H6MmXN6cJxFZnNa5aQ4j1mTTQRaV5M5DK",
  "key31": "3nHGE6yfWtjX7JzoUbRubcDc18WY8SXLBPQYUrodAJAtxDBYWUvEpjCMisNFnqxik98RajBNfjpESMV97ShvvYHd",
  "key32": "5KycRTabZqDAAAMECDXxpAx8v5DrUA37bdGcGBdQRYpQPZQ4NLKwB7kqpJtmwX2qmy3eVrB1XgZHAkpLxkRYRSsE",
  "key33": "4HxgYPrsjQDrhpco8KUGy69J7gNYQ12asaA8AJ5zUV63HJ4sbHekb2CZpyYwbjxCQvNTbrXm3LKyBGQjEdAYRprD",
  "key34": "5xcNwncnVwB3z48LeDNHef4wfzvTJKbTEEiEjSBvtJ8QAxpAzxzsH9R5my5UDLhrQDptWaXBQm2oFQ6JxnREiVrg",
  "key35": "518wxveLtKH5gK1gJYVTBaogvmAYBt6vexQYwy8zDSzJgd9DexFKnVUyDHf8ji47ZVuFu7buAZcQRWhAsFbfb6zA",
  "key36": "5G5yfLspHDfkJZ5xKe3hBo8zZ4KVBcHJ38noKYeWw4CtZLNPt4csu32CsEATTBxwnnrrZyVdEN9SuMq74SpaByrz",
  "key37": "5X7o8CmAmAPnEwhYhhtcWqULZgtjCSNn9khRa9eLLMNnotWjQT1GvvBoFyNSo1p9D2MxMRosoDF3hGobKrwLzLnh",
  "key38": "YF1wADzZhxWwBPTWxqNEoVTw86N2Ro1s3LDykuBohomB6NNKZvFsJn4ePohYEduP37HF6RcDTPZVYruraZxRpBw",
  "key39": "5XF9rBRWmpaskzHc5DuDA8Bv4wJxrCKwLGg9tJ6NaZkQPZgrzubjzhTT9zKgcc2qvbiaaHfwryzfwrTcevjpc474",
  "key40": "531NNBW3MQAJWHst6T67p4uGfrgetBq6SvcTHLiQwNNKMpxaB3HULnFa6gGRRMTy1XWAr5sboop6RmKrp9Y8ZvkX",
  "key41": "2P84vHY5bidapz1X4kHeVzqrvSR9ieLnfuV7DazbxNRik6F9cDhEmWSRUgRT8ZEFnYBQvwGbsbLcPPU45KyZKFrY",
  "key42": "5ZojHq6z5srTbxbya5DppgkU9arqUTsC15qFdrAv9HhtXQurxS5MirCSZrcVoqHr51vqe3R78dTgw4CvVdBjH3X8"
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
