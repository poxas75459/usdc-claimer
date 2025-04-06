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
    "5XvSXgTYu1T6g1uFDAjoteBrfaVFVRCevZQqBvFYWqQtzM8Ev7eFGruUhEe2eHb7qeX4yzZenh6REho1JinMwxD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qYC4HQ1uNma7itXJixHxu1itrKDDP4Rh7WF22u9B3yLD6bdVW9akqaab2TbN7cufAP6EtDCoAGsF2Mie7H7CT87",
  "key1": "3vLFnYYG8fxKAiMH757quoZixgddNLV5MoQ6SiYuH4s8XJYuTr4gpYQtWqbG71aKQGCbvfFj7YLt48YoBEpUWiSU",
  "key2": "4Qp4xmAFEVrSRWUq2zg7f24e4oCQWumzHSwfu4pPcwFCCNSziUNdNLec5xPjfWqjvBGQEULaEj5QgUkmyqX1CdUW",
  "key3": "3FBmq155njMP6pJQg7QCxe8aXBXogigGebUPvJwkuygfy6LEE7yEpsrodAEdPTZW38vukZni8dv7ichBEuUeTVkK",
  "key4": "4YW2cKR2LYau7Qu3rwSq7j723z3LU3yMBR8TZFQpj2LZ2cQ6RxHgBk4Q6EFsTppyWsLwiUxZJe3TKj6cST37GfnY",
  "key5": "2aHVrXUuvDf5Gzdwova6d2AgkBmpTFuzf7suMch6c7Vs6LiLMmsjPq45vsimA9sdg6xPPPxCZzWS91QHDJHLBCzt",
  "key6": "jAahmwsCmDGuyigPS78WmK8CJM3vkiguBS8H2cKCBDjRgchA8VyusbmUrSWbd5w7zQMbLDjKUeVEmNzRixizsaN",
  "key7": "4ak6Ku6UsxyLZNUwfqxV3sNE2m3ihrAd8XAKYdgYkm7bLG3wTC2Q48XWkpiZrFR9uDNM1BVFMfxB789TMHz6TUvX",
  "key8": "2aPL8rPMxAVsmU9SzKPSPrPwDAiu5hHx9f1bejpzbidEn45dCF6K19BLKpK34sxmQFnsN9HAMckW7ivmmcPnsXRZ",
  "key9": "STNNkhfU9L5zkJx8oT4cka3LbKJxVUHHhqWr4cstjf4iaGqUaCSsrS31yY1WYFWN3pWkj1NUhHnN1G17brDngQD",
  "key10": "1P2zvJKjVUPF4EaftnLxckzLSZJvadeYWmS4hDGsKDMK98f82Y3uazM5gfD85K2Pv7iKybumfcD8BiAh9MvhNiN",
  "key11": "54ZZe4M7RqpfmEe43Vk5ekGG4kaBgFazRBgjZdGi1G6sSd1D8zzwsWnZPEiTmQ977bRwyKcCKybGo9qwboAUeeVs",
  "key12": "5xxt3Kk3r4a89iRGA2oAN54mxMinHjgqUyJTUnSrigXqEuFS5y4tmLYixnLqgi5KC3AgpJ63weJiuowdVyYXwBFG",
  "key13": "4Z7aeUtQpnGPyqMmw5bWfBCtEAVcdBhkrNWhA1PttZofWaEbpGf9stdnk23v4aNdthWTxJ3Zs5tcfVbVsxUAtLg5",
  "key14": "498JFNwpijiEzYrJasGHYbF69LBdGDocvfEqipFEt373LMXpmNo6zper8Z4KeKMJxSdUkuVjGV31a3n23y1ahJBe",
  "key15": "33xudE3Ww46skRjJvTeK9MwKx7Yfqts7ZYtgzfnjaebRqw9d3ntodHi6xiiDB2CGh2xevTzbNMcRzPr9YzeJXVo7",
  "key16": "7QkQd8gT2LE9unChQPM7T9jVLXra6RfJtaB2gWZkwzk3FQds6mStqaD4wFXstoy4bR4kNc5r7KQHyC2Sb5FN8sV",
  "key17": "5kSgx7xeuB3BWzzb1Eoj7RxkggG7SoQo21P51wiL5496nzcP4JzPEFKnCrETahjoa6dCLTVbjvduB9GQMkRQdA7S",
  "key18": "Q15fp5w1y5JjuEZ2UqMmGUcdKRzVaosSN21EueLcSbWEfrdn95Rkj8eqsRUxv6BmxCCZncnpsou7VCQuv1vZrRo",
  "key19": "2pzYNfgMxyA4jA6uJSVEvvSWpXTgZzS4vKWufF6Uj1pV1v3693mLJMSBM2Qy8ngLMav5Jc3C8AbKRZxpJim6mzix",
  "key20": "33GrCnD7gmnKqB4jdyvPBk86q9itxQQfaoyeavrL9ZyAh5thmW2sVrSiECB3dv2HBzhMuENvCZVJCuJv2ExYpTuz",
  "key21": "2go8qizJUkm32c334eTgiiEPKWMtCP1CXnZeQDeGotj2RtV5zPyCYKfGPp2BvZZXfMz4UVgRVhLGMGZXekCjj2pr",
  "key22": "DZioLdmi1pxazJRsoPcrbUEGLr4cFZjFFeyjWLc1qRRTAoVWSRG9zmU3gVjUR6s4hV63J5LUkhwUFF22Tuixiyo",
  "key23": "Uebx5QS1X1SB2FiyewYMSHbu5hv1aLi475g1LHovkEnaypA4kTpK4MREhTcNU6sFnEsKMjRveifMxpYcvzY3yPp",
  "key24": "39ordca9KM1epzXzPe2fdceqvDnRd6s9apxko4NcrAtU66rpV7KVwErJqMJgeCVUFA8snmeJnaboEsDipBjBEdyE",
  "key25": "2fCxHNmMnv26xuWAtBfm1x1EEQMyD9WczPMwVVbzUXMUifTJUDSAMmroYxZ9vdCbUcJV7bpBqkPwDu6Nqncwg32z",
  "key26": "64XmzUKHSXbETehbzg9G5RMUQtJho5T3Qu3qVD2yWAvRVm4W7byv164wQCxj5tq2L2Ngb6WYzjsENiNqmbjjiAQs",
  "key27": "4A8cqg8TJq4E3kZL3fwixh3QB5YWMzB7FPCz7oF7Guha98vq41EZiHTywkhpt2eY8FJCT3EndpFo4Pj7n2b5Y11t",
  "key28": "2ty9mW3ubUhqr8hvNgXyQagkDLM3M1qLZxyDTKHSdJ1NYeL5xCFtj1S6JNwvcR6bhVy43k1vdnV4QeFxWi3Thjit",
  "key29": "4SfKJQ9uuyYr5FCCe3YTJAqZUEfRJXXeVUX8tebZmCwqrVT5rUkGXwwSByjoNeEpTNKTUYThaNYq5jqdD8KwmGTE",
  "key30": "2ra9QJesDXXbMecoYTU4tf9KkcEoKktsqyXJExT1DEQBa35WzPF6sSQtojfQdfDq9yWWmLbRxLmCc3BJyTHez2P7",
  "key31": "5yoAx6RBAj5SepkBcaf3eH7qn5ZPZ4kAH758yJUvPUPM6LLvPYMypChZjdBieJcQEUBdVkV3FC4ZwsG1fv5V6irU",
  "key32": "2gwEQLM5jhJa7HteH4hfuNe4wZvHgnrKZ49sFYCN3GkdXyV6VnXLRSN8JBK7LGfEnR8YjxY2bbFoZB5mWuL9xT5a",
  "key33": "5PtmVQwuCdBiZtsojuBzPyBfMvAsQHMyeppSWp49ZzfL1VhJibeSHu4nmQqJxGcHnaVggg95Gs8wFKKnWqjuT2P3",
  "key34": "2pknonSB84Vs7iph3XuaYWAdecgpkBdGaQ1GpAiUtZ6qjAxkuhgGiMsHZwP2pR81iYEKLwfsA1uzZa5K5aoPhNMc",
  "key35": "2JYptq4P9ZnFCaDr3smDfH5NnSRGnHMmx58ecQRG6rPbrRZjk3s1g5JQ4PkX6ztU3QE58oV8fEradu6VzvhvkwZZ",
  "key36": "5nrSKCKswiSDbCRUgnTQwp1g2rFr2NzqSUtzJEktJNxubt21wfEc1hwuN54yrfd2tFJHqbCUqNXcy1ZoxKRuUzSw",
  "key37": "4N5cGdTSia8WGrvRXD66cbHDqvNY68wfTrwVQeBWrSpGKWRnz7V2s3VdLe4QjYnfRy4G9N4LdWdKhxiwvx8RLQHr"
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
