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
    "Rj1JAZ3AEW38PqzK9GF83XWAcViANGV9FiabURyP7rMzW5MirQeNHVZHUjGSf1yZWFqMnUGdooBPcq8nwqdndkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LModumWg3bnbeU2Tv8CBsbAQ5FznysbdGbKhePuKvQpK8CDG2SohEuBk7rCE8CAWHCSjVRMrFFAxHcFGsdzMmZN",
  "key1": "4hGWd62FXzJXyHpeH4BPth6BWauqE2C2qXN3xMqCRexW5T5XUyNF9ydVTooPAAjktBc6MZuHG7tLhqMNRiWngtJx",
  "key2": "4Unhw8x8QRCpxFRTiVDfqhDkkvmdhAJQ4FMiLwGqKAeuqtZEVRBtQTEq4wmW2tCFcqrvnqdCbSFdz4RjTD181eXk",
  "key3": "3QK4JGtLnn3qKGjZBpcL26KKVTnCnaUs14G5aDCsZDcUoCrYHH1ZdsPLoYBKhKVBESCq3yoLktZrhzjQBHqgtn7t",
  "key4": "5RVZQ7KxgcxFeWDkPK9YPF9i26MvEtXafV9D6YWS5XqjCNLEYYJzWESe92KTNympYZopivak9UfERwr5hnPBTCQZ",
  "key5": "5ShefgYFpPT1re8oyvu6VqY5vzsWhGgkJFdEU5kPqSpGxGkYxDmTsYzJJD1yUW3b7GmXE3rSiptsC1CLwQxMVmJe",
  "key6": "3rmyd8CPHj2DjMWHkC2xjQdyxaELQF6TZG5smjbXDykumgZStUSXXpuF4Do9FVqdFHMLdqYnLK8HfBCimfkEjWWp",
  "key7": "5NuZ6GcQHjmuSDF3j1WEcRyMxaN75P9Vxny2EPDwDDQYpvHhb1BgzJoXyq4Pt7bamKN1eUVWz4zrNkBXpAJ6ScEL",
  "key8": "43iC7RwEay1UkGHfUr5B99Kyc9fSVi5AZm8FzNHa4hTrHimXTKtvLWqtk71YspyXWXBwgcPNc7PzmyLHiTf3SyyC",
  "key9": "3FiSWrQAcBXo9cfoCG6uwRpsQsGs35TEu4nX8s9PSSFWKyTKw9KSt7kGzGZjxmNFaBqNNZM8e2dVB7xUzHJxVnvU",
  "key10": "EaC6hJR8UmDk4Sg9pbt3MV9Y2egteMxphZKW9TPwdZ8Hw5jHvh4ssEfAB8L9NV7QcC3otJXNooCAyVy6CgiGq7r",
  "key11": "4UCY9G8DtMZQBjLULjY8LiNExKAGMzv34vmo7oBSc4S6MxnHVJEbrc4QVupufqb6CHfv8LaeeodLnPy7vUbgMcRv",
  "key12": "4dpQrpnL1FCvhhwh59YmssaKmKYjxK1i3s6gachPmi1QNtXhWHfDyUJdqU56UGhMmZsePSGoEiMrj1Q2KCxd43d2",
  "key13": "4aTHS3XVWZ6cyaVhTxQuRhMWGjmmVfdf7GuoQAQ1kkQ5JwLXTRhh3MW6DXso5GsggZjah8PzyK7hFXdmGw23ahtH",
  "key14": "3cFGp3SbRkH4vRJo8FRYAQ7AujPNMGVgrCe69UaKyxTWYqXFHNMA6fbnUvDRznupJUEfpTfFCsGAb64WvuA4R324",
  "key15": "2xQRgNJ39ewhPEr5TRRb1SrbvMT12LZ48GdXmfNXRUgKVEpLSezUV37KSSphFEuXh3N6sKEPA4Fm4a5iVfVscgwT",
  "key16": "3AUYfUUwp5eWXm9jKGRKhLsnKjeGs3r2rpxNRVtoVjXT9Thbk8XTa52dvePSecxBGGiY7Qk1EJaeJQwEGUbREHhD",
  "key17": "631vayfYHXNrMiwuyuboFizh8GeNA3KX1HktnShE8CRh4t4iz265khTFf6YHQJw3fy8YmQudM5aeKRSibgeebpey",
  "key18": "3Q4hoE1P6unhQEZb2JQiripLAJi8ETatT9MP4euaYkfSmLRzzny4SCkg76bSQSvue6w6T6YdvA8JJPRbRGpPDkNS",
  "key19": "FDG7LHr8sX6AW4mQcJNBwp4gsc3PS7p7yj2dX6maivCfygE3D9hxNNyVWopmaPzq4MsPiRa6dsFbwi1eysqUSgP",
  "key20": "63uhWnVXhoMj7jK8c7uLXAmoExeNZF5jQmvFGFNZh3nKdnEYtamytrLRtqihRR4kESshU5bZQiC78xDtPMdSsL3h",
  "key21": "3hCFuz15AxeGncM6E2BwpvLk3CSySsM9p4yaMHbAeLVFftPWzXqajqESqQgyNcfMdphvE9jAJJeqerKc6Q2ipMPB",
  "key22": "4zqrzNP9t8XCpK6oiRsH7Ks4rpgezCMkRDpwyVqroUM2pKHtrHow93cJLEpNCK2jpvWSP9pNqF37vwBEkuk49Zhb",
  "key23": "4JEwH7adbnBDi8hbBopXELdAXbt6XLBajD2iar2k17L5WbjmTMS38UzgrBqWsY8rjPkiy4KTtQUa69egoBKncrXs",
  "key24": "yo3EzNmv3X4ZuTJ5JRtLUzkToqhp8rTM95oFqkw2GGcDSP8RyyBuNyLjmLUsGB2T9L6AxYwDgbPPz2B1bckscR1",
  "key25": "5y96cuirvbdqWSbneiwoxbQV6NC8s77ab95wfdg47dZLz9cqXsb5yKJo5h9B4VFgbPJ3CPLC29sUQC66LqpkqRSr",
  "key26": "3GbBHhrFGVYBNZJgyNd9Fdesmdm2yWeDBvu34RkaEygyhmzEs2GJAA3XfLhTmVTpqd75zm9Boke9pVRd7n7uyrnr",
  "key27": "54UZYWLudfrkBMRAYqJ1ohmaNHMT3aNtFQATn6yPXeujrxBbLrxKGUhaX9H4yyiYsRgEZQozJMxdTz5h8zRc3ALw",
  "key28": "5w64sqwhp3LWrPEvvaB6u4qkwAKVxfKN2aPQC9WCBbvBeuekNMGUtkmm4MAPjcamxDufqfQcedmdjGnkJKPoWtV4",
  "key29": "n2Lmrz8fE5SBjp1MombQ17oTMh7EDKSfZePULXPemTgjrba9YAv8yjkXDQvodFvCcN6GufMgBtwb4yT95Wrgwpk",
  "key30": "4dwdLBSiMHTUrXkEC1JKnVQTegXaQfiwcXh8USpVePpZdwnkJph2pFS9wQh8cLt9oC48HrWjHGNEfRc1AzSxjuQS",
  "key31": "2jtTPndtZtidNMFMRFLjQJdw9zK3maJh4ESLVvWK2GQGH1QURaSBM28yJkqfs5YkSGFZn2JtDR953nuBz3BXU6g",
  "key32": "5gySgv9Yde9UHKTn97Rkff64JhG5CSGYBQzej5fnrLE88gmefVB3AsfnorBTVwYRhoChJiMpqft5mLzQrigLSWZG",
  "key33": "5waRcidvF6PZgXC2kvE1KeZMxqKCMMuCUAc6H4JyvnwFbiXP2XSnhhZyrvyiQ957BidZp4ecwB7tRvBbjg4zkmLC",
  "key34": "eBsWfM71qkitg3qAebPxN1ZkqorRQ6WuKwebebdbAkX9NPg1m2sBZxxKNuiQdwBihKBZaHQ8DRDWcq4K2kup1oz",
  "key35": "D4x5scfirVQETC1VXT1k35RzT4YEgEMKL9Rkbn9MJ4K9fzNTgN596p3Z4YpWAiP4MhJ3d2b6Ruhr3abWgpjy3ur",
  "key36": "2MDqi6yoG4xHkKCtMZ2kEi3AZ6zmLYr1UvXVMNX5yJFaK4zRTDCwVp9pMeof3fgoeyU3vjugrvWzLr3bghhs1AqU",
  "key37": "1ameTXBUiHLjZTbzxDoApra1PYHac5TNaJdX1ecSrdaeprN46hYPDAHsLTKFCW9fXUxBqam7xVLyVxDzt8HKsiQ",
  "key38": "5YtTCqiduSHJpJPq1kLUZQvk8q4kvR2QjzyZMqwS3CK6na2wosguRiiTyYMzNDi6ETaD5fcueZcDPFTtfUPvfWs4",
  "key39": "4C7aNvqL1M63TgTv58A2dmZ2nK47GwEEoTn91jMdd5Hbk853eeKsiBj3dL9atJmKVpmFYJrxAAJpUknm7HoeapfR",
  "key40": "GaomvYJf6cDw6PhD32GpCjMU2jfPrKXKuKoqxNWA3x2FRss47FV6v9oMpjKexCHyQvhSCPB87grRdLAU523nG7w",
  "key41": "5tarb68SJdR8aUa9eMxUpUnZ9BZ274qwfiUhJqmiZ6TNh9HCScSMzofxpKydHaBxfvT1sYjBt95iuuBy8ppaSu5z",
  "key42": "3GVZhFd4tuhd6Rd54DjMivEsBvdmsKrf9zCkBwrMuYaSHwWRwoMddSbh1SsNk5vYQtahgVYLmC6SkcHZqDrUdDCy",
  "key43": "4vPdQ3bXkqS3xF4hphwrBXZAjrVXts9RhC3SLpG2x8WuJHgojvEJbHDfLveLAauYwBnrLCENeAeX8zS7Une5ob12",
  "key44": "qUAwpcsAWneTRkuVUqXoHnfdnn1Pyakoijtvv9fqrV2PQuG7J2Y4LgewzYohYgvfQ6pcbHeyoCjMRrKQHfazNyo",
  "key45": "3ASw2MboUW34c9MEtj5YbjtTgK31nJAS5KnvXeSMfh4iKWpdmPY8SA55JzYttUkB2sm4f5s2K9EmptAQktAnbTwK",
  "key46": "2xmxNHHzsxDeDk3VrVfrfwFHNHuqGoKZcsF4LeJnwfnDVnTb26aMqXg2UniyCkeS6xiWDHhiMzpvo9qVuJbKKm2X",
  "key47": "okV4mRwyvQ1RmqW6eSuNDpEPuUMbeDVX1FTeLwTA6spcccvRYn721Q9rQCDHUw4k2FkapcGoQkMHGRfqHg9nBxH"
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
