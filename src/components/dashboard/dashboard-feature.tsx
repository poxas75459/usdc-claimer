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
    "2VGy3rYQtPG6jAsCvye86fL4RsDp5tXDu9RdYZzsB8ZJwdyp4NKyhN3Qo6BLi3JZKUGtc2vbnQuW2uyhS39McGm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3irCUeUhcTaUBtouaQyrT2hP5h7pwPjuFf2EERAD2g2guwmfkezdbsUig7Age2teiG1cxGpr54fMMzq5NtctbDYC",
  "key1": "22FsN7VDs1zWCFJcL8UgghCCPVNWhHoEWA9gA6vd5K3wjfTMiGkEbf3EJAsZTrnFwQcU9E3tDUTafSxWXDNRpz4r",
  "key2": "iJedtdtoK1s9gRVwrnbQqRuY5xRLzangfnxsVSnZsq6xGS42LyChi22WWPE8e9ZYT1Dp8tkzYnsKfoZ2tbmFHcR",
  "key3": "wfeCpvga8QMppZubJ5XmvZfjCqd6GFpnj89GPoKkQei24CXUctaJEA29P8ifTD7sSu6UW9ivBo8yxxHX9Fg8jAG",
  "key4": "rxU3rnVh2c7HkcSUi281vjHCfDBxe1qfvCbYkXr5ZWTm3wSb9MeEtdvXxPtnoJgMadcWBSkGodCmdZUT2uurdms",
  "key5": "3ioUQdosnxAx1oZJCw31b8m7epqZZkjiNLAmaLEjRYuKTRuRfBa9W581N7XKZsgHQBy9bPKnBapi6biBzkw6x8EB",
  "key6": "5SG4u6CcXaT8afmf3afH1B48px5Zrr2V8uaJMWZxBR67rmuRymv2jNHgF6SiuJc4EaQq56phyTdFAzN5ZFy8hKk3",
  "key7": "5PUJw32u21TrwBrKjvaSwvNNpt3rqx9utK99B6FZuEvLtCAhuBBSHa8zjWvr8nDydvVq4vVhHEfRo3p2rocU2Tnk",
  "key8": "4NeAYXK5LicaopNYus9VLv5FT6Xxn5y7dm5EcfPL6cGPRd5uFE4tobePhyrCD7euxK31B1F3rpbWQuEB3wvHkuka",
  "key9": "57ZbqrfL3RbJPHknAMVxDjMh6vfsbuzmmugJ1wUAWAqx9RueF15GeYzJ65NwjBunUScscmWGCjvJVeBWEuSAdTGP",
  "key10": "3uityhY7xswVvRvxsBGPYBwWtKGAgGvQysAEgw4KgSwzbz67ykBzEP86yBvi1q2dSbBdmnfdynNXVAwT225hAkfB",
  "key11": "q1Qz2REBM9ZEh3uygNsg4ynVmQS69cVueAAJst3fjRKF3Edq32BqLLuG4vKpMzAsM2jXeTUNPCUheAgqHSjT7pB",
  "key12": "2A4k4tqqahNVZBmkGbjj16D2whSbnnMiQaVpxNfb9mCvLdznXaERRkxtKnGBARz88bcoEWa3DjfrDR8uQ7is7VCn",
  "key13": "65wf2VSBGC1632miEXMJ85c6H14WVKrjVNXwRENQKCZEw9tnCTg2JCQJ5112CDftGoYrEjd9EZURywjMQdsvizPa",
  "key14": "2KuVgkE4PuXMG6Ho1N2CrFPUrEN2L7RCi1H2bSUwPPrPwUuykRyygWpYPwmGgyxMg6NMcqwavCqhSWrvcyGZVsBt",
  "key15": "4nKAXJE1uDnjVQ1rnH19V6zhMFqzufVBsfD1QBXjRDWvs4XPhbCs2BPK6zhc1s1UZa4G38shCVjZTepax6mEKD58",
  "key16": "35zWcpoqsDFzhnj9BiPFvdEBbjqjqsG5XZ5fqMH56xZ9sxwYnBUrXicDUzH4DLvSudJQ32eugUm6Ao6wNtZvg5Nk",
  "key17": "cHnqSNEBQSSJiNBeUgvuLcvM9TL3CnNDCLWx2KDyLUYf2M8xMkKzKBKD1NBTn6FNcvkvYj8TavsYCUJCab7FeBH",
  "key18": "5AWDGmo59gTGi9Kved1MrzBKGtXvcFMgfXy41515MrSPtzP9ziqD6KGb2ic3RjfNpczokhcMufBJ8W9PNoTqYcYm",
  "key19": "2J7BDFYhgfMmLJDFPvqbMDVZrxnfS1BdSqoiHrgTg5xt6XUbrfDV5agEp18HhkwTA7Df6CVFt5VKciwHro4Gxire",
  "key20": "4LApvnXkDV3riXJ9siwFgufdHR1SRu383fcASAfbF2SEFmZycU1y4N2GTf5MMvCmhSMKEsp3UCaBTadH2krMFVsd",
  "key21": "2W5Kin9Dgnm3RkyHoLiP4Um938mySxu2bTVmccRc2vztw4vdoERgrdJzuLjDoLjsKKQxXCpRPtH7KmcvRVV3M3bf",
  "key22": "UzJRepeDQH7uxFg1oc2USV4TSUeLDAoKZo3xntWNxgG9u44SdpE4q61eLQZUYnXac1L5sqQW3XtUseh7vdoGeJU",
  "key23": "4hTngKfa4vMHxyPXQ45x4GTpEsSL9Xkt42Cj3zVeEDRqfznAnss78Q9VVqpsfBsZ3Mf8J9TTxXRfCo55AriF6cgJ",
  "key24": "3L49pPPVqTQjKiDFxtJ1tDGxM3Hdqk4UzbbNnFMGT191j3L8beMzPLFSMHae9BLVtqoaN3TskAMEJJthrPe8ZK7L",
  "key25": "4zbyDXrSyG839Zyuknq9rtQPbGtH5QpZH9vqiDbZSivmEuaRdd1Yv4Tw8oue7dj6TkY8yXvioVnEf8DWQqYtZP7S",
  "key26": "dC3b4PhLgpgs3vnBQaJJbZjQd5fwhB1G3n2V7cwP4euuw9tRBw6tKSdwLFBNayRxfFqcUbGW4wJGnvqg9B84nqJ",
  "key27": "qPQyhL2j4YA33jHZyGZKKCLxoWjbLo7SeBFz8ioTkDYM58CrWu3bs7Wdg3qbcmjGcCNGa64B9S1BjHkYN9hKJqD",
  "key28": "3ddChPG77L6uS1whXnaM6G2migVjxps3UVYaTm5rp6yHcWMdMQevpmFMUoeneHpZ86vc6wqd2qogefPkMkyvjnbg",
  "key29": "4uLLwc3VfxsWUsA166jmU8d7izV4hi929Gk1JFd5aXP9fskDbohN4beHZr53U9UmJ2PucSZMLZjZqXDk4Wf13TzL",
  "key30": "53EhnKQrf8oEpjWFcH2eQJuwAG2woEjQLch6Zo81iLGCCjm23HG3KeFfpFiFHoEpj77d8VejvA8D8sd85yUEi923",
  "key31": "3QbfqD3pcBNxhg3YjepTP3hHiZrYbdxoC4qeTbhairfw2p4nSukFRroFXLf94U6dT82S1Q8qfEwSzMAWK1cjHLCS",
  "key32": "2LMwZNBnwtq7huBi5iyD81hqY3YYBSK1uyvnEDsGUWpWoYqpw91BbcBL6Nyt8P7i4roXPdEhUw9Xt72SRB6GUr6A",
  "key33": "2iYh2pLdnSjMww9N7aU75p57R5gVZcNFCZ67jSKTMciW654aT1eqeG7um22KhkSJoEEWJPXARSTTqsiDRXjyjNgJ",
  "key34": "27D3Gt4JgJJZyavWN7Qd22Yyc4UFjEFmPgjRiqXZV7nTGomMJeJmB7uaKgB15KtPMbLQZE4dJxL25bhusNGKLbNi",
  "key35": "uW23MYvG1tbUdYj9iHZ3HxLP2CoGqfkjxVHhUGW26VRhcpxGPRAT5TsN7Ph29LEk4BaLCkzhAC1z1dUHBVypW2B",
  "key36": "3QBfepvbLfZ7ZgwHkWpCWNaMJbY7dHUAbYdw5NKu7D9NojgHZvaWaHEurA73JiqjptyAuNUpXfyJq9qKydBSNQHs",
  "key37": "3GQvVQHGyVFE9ZXo1FLbMTdZKLXMzZGdexJUCrZUFPDANkKhdrBWsQ963hDqwAcjLBoiNm5cXU42Bi64y3pz8YkT",
  "key38": "63eivkHA96ZDv3dzZ7YsDUr698uGULYaqEsXLNMMmd7er5h9NXUKYXrSyzz6jCCY8gYCedM9rgNXbFzoWPZbxcWx",
  "key39": "2YS5VeE8LqpYN2R5KCPuRbhTdm6NFqQPqwXXNtMSjLK7y5R7R6CxePHmWpALM4Z1LBKrZboYcwYZEUgGe7hc2jBv",
  "key40": "5GwXLFJ9jQyWaBz1z8wnWGYS3FQLY4S9K21BofgmaGxDgMXFhx1BoZBUJN1BRV8BmfZ2ncejP3j549thKakAjAF1",
  "key41": "2gYLAdd3fFbkxq4RiWkmsAfMdjDaMakWL8gP8TztnAfNWdyP8NEhRM8W2tbG5WxzFmiTLixWay1MspK5tuiYEFMP",
  "key42": "28jmACD1qDr2XGKugN4FQgQ7waYgjhLQG2woFw4M8bfPo6GXqvxz4hf2quvNRRr67wpaw7BKZ2TRjCLs2KboMhvv",
  "key43": "3uE4Pov1K8CyTmArbPtFdUCiuyQ2hoQhSaXEmeWQQHcsvwaFWd1gZ9T8hoW4nasTuMrZsoFaUf2Q667uaJN5Gnni",
  "key44": "4j4FicSdrR1TW4iEXhfBxqnnpFg4NSn6J2uizkJ8eMpB6A7GxkhgzBnHvbAyCAwrzYaiTn2Lx5KFdGG3RkZMByip",
  "key45": "3gfhL1wY7Lfw1jGPf4dPaFECvruxDKwWqYW9qkYWQ2Q3YbaCzCnsh4sdouMXAEMY9WrwPgEKgQi9BwibGFry9RWv",
  "key46": "3oA6x6UQCNDrAGqeVEM6oDjMtfZmzqAsnEH1kNn1JLMnHfgrKCGvbnQZNcdHmWX4JZEKMbDRNd6R5HbFWpHyXZvW",
  "key47": "2L2bx1YiY7CnhAKxme6iK5Rap9yYbcVb5pjRDc2KVU3PtK9KwLMCnPM6wCdLSyEdkZ1AnwcShC8bbnyH5AEXcwq3",
  "key48": "3mfAm44zsWQs48pVR4KH5XkvZxqtPyc5n68BvmbdqdX9N1JDXq77YDqCXj3ie2YmiJTpXU3rMy8fX1ug5MN1teWX",
  "key49": "4hBFXxLzqih51L4y13J6mWBzGHfsWetTV2rapK49FBwyGFDKR4oLkVo2QbRforqS6wfTnV1G6BXgacu3sLPh8EHb"
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
