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
    "FconGj4pbhxuNpHt54ME5kkmH64F9T5KXKj83TKShhsqsjeh7ALMmroBoV8cZgh73VSLwuePAuFFEwxpaRAqvK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sWgCNoEiVVQnzkeXc5tXP8fxuycsaJQBLbMcfj12XLeSYn9t9uvcHbGzcdXkBanZ6cxJfpFrihrFZLvANqfGKJ3",
  "key1": "35GWEp6dikfp57i8fnhPK5LbhM2oBZMDo7uCGg2SnBBYjRVFcCF9wrrVPdVWDLb1J2SCeNbeuEj2HZ92dJwWWGuJ",
  "key2": "4Zevz8s5GaFEYmVBvTqsUA9Jjuqvf22NP6qQvdFCUNfFzpDTs9s2utNFAzAy84CMMEJpfMT9K6aJs3o36XNsdvE2",
  "key3": "3NFteUrWvYWjQYP7gqwrwGrAsd7F4RptCazhc6WJDkgcPN2LMqhY7GABHN13VNuwyZvSZmR57trwnTSfAriS5u76",
  "key4": "aZzGexDV2u5Um24vXwDevzf4gDELSXJcKDvXhUkc3kdHZYk4w3fnK5av27nHmKRWwd5ZRxY7LuM2Tqrz6ZVjUYU",
  "key5": "Ys5UEJDdSc4VwdCRzi6Fg8ELNoQDmgyuhXSat17jPtEAQ8wAQ5JZXshDBNvemJTBPvMrU64kzt8ngpZinhNijqZ",
  "key6": "4CrpznNXmRTGX5uzAfeBuPV2PxCwnWv2uwYhDFk5aUAokvqnF3SLC7VSaxtB69HxA2ezFMrGpuUBczLaA2RQ2J9G",
  "key7": "4HofE474LnfJQSsxoqo31L8yEimkd5RQLCn47cTQUGP2pQ8xNxS1izUYcDFGhb4UvvHXiYmm2E1unH8vg5Mynwxd",
  "key8": "3ip5johrHg4yji49ATkuAX3S83S3AfHmsWUyc9fAEbhXTZqXZpbSRBbwhBHxBGpdy8DarAj4uMCbWoJJFeT9NNJ",
  "key9": "41fhFqroaqJiRSBZsCEvSQSvMSZsDFtsLZzAtauyehjFRmj3U2hjA8LtPinBjQneucZ5xNnNDjAbpd2T86UbJvjW",
  "key10": "465xwuTArAdxe29Bzis9qCsrNYjTp56bH1MsRpAMhPMyP3zzbsXmCKi9CAuDfigtzgyehKt8BRrrsGTKAuR32dfK",
  "key11": "23QzxJeAAcNAQuiwFpUFnvWVRzZHxgzEuULvuHdjEMtCYkpwtEL4wgtBT2D5krRMHj8zvzn8kzadUV52YZoQoN6K",
  "key12": "61h59ABZqUAivyw87Q3Fpwc3o8C48NuDtfp9jy8iABspAePUiRraA8ts8AzbfmiiEsZ3pm7yxuDD2LKZ2sAstnHR",
  "key13": "5KuWJRRcfwJJmu3HLxtLBWucAGy4cycpzKKXhcLjEbyC7hMZJ2TX1a8Pg3vXefhrFsMmtAnTvauowE7tNqJjxqwN",
  "key14": "2FEgA5L5Z1qKCm6D6bjYuRYfNEY4gekc15N4MksSC5SxNevV556r4knnzGahvgEQ1YY6Ck3KR72aSKd4HxmkAKpK",
  "key15": "3jm3wu6RpSQZFxJ9r8uynxUzGCNT7KzNi1oUWh9DRLBbfWLWEskhh35p6V7tWYaskr2yYaPmPHHXMvA51uztzo3w",
  "key16": "5W5n5eFhFdxzEVmUapMnSmgXV2hPgfMKxp7RpxorXu9Ccyo8Jm8dveWYDVBv95gWj2vJaABoKavbuep6otrun5AV",
  "key17": "2EJVoJcmGb45iyJHf82omwyVMQrTJ4WR3WQTGrHVCw5EdLTP2rrQKA7ANgNzN2mjE2aL5XcJP7BytMByZjiXFz9x",
  "key18": "5eQpLcjPGcSjPjV7P9uARqcbZbVVVF2JHM6FhUYc92tUna9HXu3kD4WUA3357Lfb8ovSJtxwBCYTihdQxkWkusQ",
  "key19": "4rUXAAmpxUe2EQvHdyXsnb9JGQSoVEhTPdRn8FfAXiqCKXjrAmhc9KTDVugmtEy8jp8GjQedJkto2rcrqn5g8x2y",
  "key20": "4DcZnV454R8pBo85n3VvzahhC3r8SSyL4y8LuiqXJxYjdWQR5SEziuFNwHKPSi4XXShjaoJXpWTf4AmSJFZqyRTx",
  "key21": "5AyyTBYsgqQXnaAZtHyfxtc6941AebMucVKidBjNTqQeSYkCsM8NVKfRL4vZvq1drADufhv6th2WUpSGGdhXQAGg",
  "key22": "2nBrV19EYHDq8zNgfLbRiUQrXqzUWXSPysjVWG7byBntuKqp3dvPMh8BNCKNE6hSjUr2EfR25ZHgoASj8zyaTHV6",
  "key23": "4L18ESAF1bFQzyuVMhoWExj7yzhFkb53KX1rjq9jtBsaH2dgBXsGQFZ7Nfb3JzVzKXxM6qjwpNEyr7yAdUWpfJKH",
  "key24": "5YHp5FEmg59FMEa4mMtayj9e2FSWcpuSjRVbHHxQFsjvpqoTm8fpe1xnHGnBJjfBDK6WPh6DXm8HLGh9dQ92pSc4",
  "key25": "4HJg8ApnambRAS5ZCtG3kRSZk6Cusrc6QV9DcwGW8sKigewsQGrzfTUDNrM6DALsoEj7QNXT4ivQvQJVmP9J7vn4",
  "key26": "3aQx3tmfBzXy1a9wtTTfC4cYBinvn4JshUkXYZuPSCGXduvqXRwZNiUWoK8xSkjRyBZTy64Vmvoiv4K9WD7JWqtY",
  "key27": "3JqZcZ59b5h6S6ixYAhkqLT5GdP2ok67FCzGvg2UJZaUEoNNuU5SqGBEUXdAmqYkYRVCKTsDsiwTYdvYbsr4qWzo",
  "key28": "Rsv2x6D6gcXsbyeN1NFX6nJkjCFt59ywsaJsYZgdWZe692QvX36UQPFNdrWtHy9bR9yebPVDsXKa6jLRe8JtMzz",
  "key29": "277q1JFcB7y1AQaoR92jd7KhHWthg6CvV1wgrcZ2LEptvYzZyhYjmhEWXPT5GiThpMoeNmNJiUKXt8PbykXBxCGC",
  "key30": "4enh93PNzaBcNGVh9vPrB74z4d8b15t8Jy428xvgLxY56wgewFrL94mxPzHymYeLVpy77vZYovfUfCL2cfNPkmMX",
  "key31": "2hxxSsEqzYcuwuPeahkKkGz8sThAhGpvFsFLuDw25gLGXK78RnFRnRGpRC2LkZkFYLbf5tLBWeDcQRR2jA2LdCpG",
  "key32": "3NC5r8C2YCcKo8w988qFREfoQsuj4kSMkgXeF9AhicuXJZfuAbw4eW7WDvspijKKP1cmKLUSXbzUMmMJgw3gCWVD",
  "key33": "2X2soMeto76pb9fVyqEn4u7Gs5CxP9shuWdhe9XFqP1XCcVQ29eJKHvb7Sn1xXkW7ir2jndvcdmcihLyCXq9sXHF",
  "key34": "396MuMMbWXX1FVDnxUGnhmSPWUkCj4EsFSdFEqm9Fya2z9eBEvgSCa5cbHDjkw3p9NLebexaakVKBVzyiVM4TxHR",
  "key35": "7vt7o3PkooQNCi3272JdgiV2rMneN8VvaqearJMaBJsSEneJS5oJq88gbVNkg6fx2RvgV6AQ8orCGBuUHVuYAeU",
  "key36": "49VrEWhLzofmKN4qdDMhb5eprDRyxFi1BZkWSUGG9Nnh3w6icxVR6JASSd49kaA7mvtZQKQgHLpihH5K9RB4jSa3",
  "key37": "2nQRva8hweXn86Q1FcUcqDZjMRRp79aJvCuQGc6FBAwHdDYCvSNieLoXTXHxh5zfVc9FDZMLTSnXRuWj4jtVAx2d",
  "key38": "4L14RbTWVzbuPZyn62zWNVM4imWMQQtXLetwE94yEi94JMhC954EL8vG9Tz18Dsb46w6QySpZhUuhZihFzzRL5wn"
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
