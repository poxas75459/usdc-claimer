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
    "4DCwNbt7twCSRkcD37g7x6Uu6pi2RLk1tprsLx5J5gzp3656XJKjLyQvTUxjHXr62EuNUy3d7X1XnE8gmy7DxUfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gbb28jyFuoZ387ZLd9aisKZ3bdYypBGLsFnbtNe2wXAS2rH5drfyoRHSxZrhd1Scchtknk7HcRqC2ybRsKScMio",
  "key1": "zvr2QeAFN5DdmisHatBR1HNLLVNDbxU62fWPhuuhiXaCkJgRzQ7bNtDdiXRn8hegmv6RbiDKj78x6s9N4EjoQi8",
  "key2": "3Y9qJ79TXrnRq1waWXdMGi2GkhwFB61iVWaHNKV6sTLyP1SkH92h9x16FEUAmg93zEjm3dhL74CVvVpbAiVSkZQx",
  "key3": "4xjENSDmaFMZmmRPn6Fes5ajRAzKaVrdxhQcLmCULscC6Qbnx8f4gDQkKYvY1Ye1HiSJhB3Nyr8RfjU8AbhNkJ9J",
  "key4": "4e11jLtgP8wtNxQ3wmG4yJHStpsb5UJ9dCpeGX48EfTvh9taKpDWu6HyQnCjLs2s1LbtSAZoX7awQr3iZCqH8tpK",
  "key5": "21deks439LAMPqxdJAhYLiWqB4QD3ASMWs6oVzdvpFkYNxcyY9iAx2x8DtBxjW5dM8TikGv8ux6qiTzzQ5ukvFSi",
  "key6": "2yoRYfpY4FN2uLZP9VJ1bpTuePj9gC3HEGpS1CD7sQN7y1sKzUdCBssBuskYq2qk12KiZNmQVTVBUfEHfVAsfNng",
  "key7": "2WNtuqQJCyDeX52Vg6DPKrtHLs7dZc79esCsbjizkLYRPS1ZDYoKgg2X2NV3Z2oejyus4RmeANZtDJDunPmqbFwn",
  "key8": "4Kabd4khf9SP88JP38U1oLWfUiJtDNp43xC4jLKaoSugbbDgdy54VfE4QU4iJex2HCUHZeEQwLbF3EDYGG6MQDxT",
  "key9": "61QjDm9pMuRTfu5t2FE2rphtciYM8UQGvf54wEVeDM9zcMwFVKdM4p47XnE1psuvwYHzRKmjVa1Bb1fynpUEZSSx",
  "key10": "4fu6M67f2TFMy12Ke5wwRy2ECEDjMeFpm7YauGoe3WVFmGpmb63NEtwipmD5XV9mdKNKp6SMYzfGwGXQYan62VPN",
  "key11": "4PS6pJfzyvP2cLSmMLvhf9Fm2ZMMnvVDKm81Ljg72JcuGFQ8FpCmSYDaV98T2MdHwTEzVUZnjva6WYfzxBwark2A",
  "key12": "37iggm5ctQAFTTCgb7i4bYdZSmsu5ZQiTGksq1JSdSpdCpkaNbgDGkHHTw3rdgCTPLfvoHgoiwUAfLogXED4sVxQ",
  "key13": "571N3GTDQEfDVY2BfW3Zdb2x2aZHekrqRyA69CkDoh3E8gMYivuHuofgJj8iuj1h1XR2tMUWUdPWyFzmokrDmigg",
  "key14": "63FfrgM6eEhCryM5uBnYFEVMw3Ne2F7FC7cYA2cBThoUEvKrQsSHm4Gfbkdg8eDJUovt8wPPkd4X43YVncrWtvhm",
  "key15": "2PPKuqnYoeromqPyJ78US1Gkw5maTasv4UMM7j1XPqFCXGcbtFuoHwsZeGS4FYmmxvLB8Y6GUaCkvKBd8XnGghFT",
  "key16": "2pBqLwTzW7PPJCKyrZCSRehZohR8doKsUnWf8NfJdW8z3QaQep8QVyf6rCzz4hQUrui4YLUrKmzdTHZmp5sn2kZk",
  "key17": "51QQE7HqAvcvLszX4b93csjcSL9NNjXQTGtosGdqtLq4gQgTLidHpXKmarto1i6VYipnRdr3ygeS1SuDpeiT63pT",
  "key18": "5YhkqKNbmskfpbPZgDNr4qUkPmiA5Nnvxodj7zKnMtBtBMg7JKEaqevRGo9zpEMTeyBg4CPyiQPmN4HpjCKMnpZS",
  "key19": "ZNnKZymPhtePdk7PRC5uuhs6sFpeMWfQwMpbrQWKypL5XTyE3oEqJbMC7DxGiM97YaNDeZEgCW9Z8gx7hTYLmNa",
  "key20": "2ZAwLNbuxBna9AUGaqx5GiefNwYmrNpEyg9ih8tMC36Ni44j9iAcH2qXyUTBD8HridpyaPKbZnUeL7rkBuFkV1JN",
  "key21": "2xRJ32nQfZkuq3c4mbbbCSrfWQjB61MEkzhC8P4cmjjqUGebKaytfvZ5hYEVw4LYpu3JxjSD44VWDh9Xyjf4XTcN",
  "key22": "4Vh1VH61jvNw5deNueSVJ7JLicTVZ4oX9uYBPvLPYERrER4FSq2MUr7WQY39AM1PTUhvFkvCR72S3WoYGxCCWdz8",
  "key23": "5wubwGXNgrahyaCK22dMz9mwngjGFu6f7SPF4k9Y9Q5xc5RXbgWHZANjDSEcztC5FHsVWV2633idXinKtqCh6Qea",
  "key24": "4zX3CrYqVw5uzr3joTnHTfrvWvfN8S35Yp1YQ7MKZcfg9AF5GfBkRLwx7zeKhnjNtxsfnbEwGzVkfZjmvcUA2HUL",
  "key25": "577FuTEYGNcVm95Efb7E8w4jRCC7ToobLguayWCMKdbZr78F1Hr5CTuEsReATRHJx8vBBokBBT5Qfn7j2mio5P7V",
  "key26": "5ZxbaLfAtAqcyJGnSkQHAQHpsJGpW44319SLqBULofP6jmzh7BGV2v8qg2CmSQJDqGCRtePZEDA1pFZBzCsTZeRn",
  "key27": "64Ljvcznxw782Mbk5bqEFJj4Zb2HMAzqvwZy8CL66WdC2p8xj641ihCAkuSicdeNob7s8SrEXhUtMgMwPso3HypU",
  "key28": "4A9ZUYpJMckBKFHqU41QkwAEugNJAnv6xR6ZZ4Voxb2Y23xuZNGhWzmGrWZgCRPe5h1K9vWubghSt6RDd28jxtFe",
  "key29": "HrcenSY4KKso8a6ErSff6NHbCBNhRQjcQxvGepwn4GfLUTYYN1FCn6cA3ewjBWv6rPuNXrvCUM9HC2G3xB41fvF",
  "key30": "5mEvFRfo8sJySso22suazyU3fuf6XX83ZE47Zo3J5yNQap11rioYXLn8oTaAg7n89QUMn3vMoTcZnRCT11zU545u",
  "key31": "5qQMqEaAJjqKEbdK99iwbmV2hbCMWXQpydE2rmwEPG2fjXPdipdAytDW3MoiYGoTHPMYgo1699XLro7UJtQ4XWkc",
  "key32": "3cezopZYuZkoFFaQbaba8rsxS4UYchLNzPTyYKsaQSqnbg396GbQnpAXjAPoPZLxZ2PoVU32gcQD8cYYRgN55xXA",
  "key33": "31KodAkp7uQPzUyXM7zgeK9W99toi7LZL8WdD1FVkDeYvo91ECpBgWnWbA2pU4PQLkweAr3kJ9DCcw96nAHystao",
  "key34": "47JBY5u95iw3AuGHVWKLUJYgUdXVP7XResDUmKBwSi2RmUCk9Kd8V238G8EZ1JppYYk1xE7tqHUYZpKfRAjjTJAj",
  "key35": "2FCRuJd953vp2oyanZiYNHdQMmGeuRApPUAKCzvy8T3FgAm55heGWU5T6vKFajp8XuFXpoBpudQLAxYf1K88AU6g",
  "key36": "56Xz1qGzoMWzJtpiTreidZLKdrhr6kBQmaLBT4qUGhhhXDjr5pkvbKFbeEXbRHwA2APqxDrJzurHd4VTRRHn3koo",
  "key37": "27B6GpbdVj725b7QRA5oNuq6p6g1SuCy7Sj3h87kSUTZXGekp6UMzTpFkHgFQkeaVUshfZKESJyp1hB97JaKJK3b",
  "key38": "p4yVozGXjZrLEWYQ6uB8gVvGQkpWEyhN2QZBHkAdgBceWTg3bjbPGu9LvesHgc9rsGqEZPmXDfQHT33HdNtn6yr",
  "key39": "4ztyiFo85joxh6WMA5Bf5iwiu8aussBosdWRevndiRKHUXSzkMdmhxw8Px7LH8aUZ3sLLz9KNcF4b3E6ohB4rDXW",
  "key40": "2bgMPsptqpeTQYoUNf6tYFCe47QSxVGqw9ys5ji3jjNhrBc85uhaPrDY5iZ3szXvJquT873jzSbai6tuuGxjLgpA",
  "key41": "35Ef7oZ68zRQ9JDcQi32bqSbi81Kt2eemrssMcSyvRQdVYaMgPHCm9H6j3xD2HnrrejCQ2TwWeuwvDx9zzarEWc7",
  "key42": "3w1maxg6jEnJBVz84JPc3Zk27fXEVrbfB2WMzp7oQD2nThw5r22SYzLMcQDNf9hMznSFjLbe6rLKoqANNDu2bdyQ",
  "key43": "478b5GCCQeqGiSswhcTUEV3RDfyqgd3FaeWkDkg2oaut893abw9f3e6DAHhKpXs85uFVmQvswjqiuf6FVBKYDwu7",
  "key44": "r6q96gKiCRPFYcoZGsw5C7cYLgYQJjQaGsNNEz5iiw348ika6vBC8taZPnBpjs8cxnphCBfxzmMm7sz8BWoxNKz"
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
