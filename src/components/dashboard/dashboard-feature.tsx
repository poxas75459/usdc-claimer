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
    "5LbddmApPrwjwJm1bkXnNAt4n6S6docMFjrBGdQcEHZ1BSLxfABUgHWGBk9oLcsmcfLnvxiRzohc9D8WXUkB2u5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CYbpUSCZVquiJLa79Gh4UgrChbtwDtbS3NU3BScpnKdyLxLfn9p6xpDZ77fTv6ZGwzHqbMTq9yxy97DFJwn1k8c",
  "key1": "5f5thMJV7ienYHwuSDzDgkBd1EXxHbBXgPPTmwTZ9nNbStLv9KUjJm991ASitNkhs6nhVQpEVxGvgnn33Xg2QvJZ",
  "key2": "5T33ErwvFGd1Fpo3vmhApGfALqnrHXYFu6C5sUvxqPfWi1PQMW5Rb5jHpPQb2TzL2obFAsQWMdrnLk929gtALvo6",
  "key3": "2yk4WFPpvKeBxC9At9ibfa2HHwm5qV56vH1a9nvsA12fQALRfPdWnuM1QNfKwY7S8t3rYvdkRmmKuD4vHkCq4wcL",
  "key4": "gqQK43rP2wqvSoJ9YvsYV4TQVFrGqrWa4GnoU96BFEv5GytzW7mZjggjkjeovcVKw5XmF6oqN6PzfmXiTQkGqXZ",
  "key5": "4UVBwfNgoE4GBPoZ11NPLw7RraYaHsLDFZta3BWgUgXCfwHXpSeejzd9J7izQDn7LMg8c5Nj8dwmFEdge9N7PvZT",
  "key6": "4gWJpZv5agnq5msuMi8S3trtjTriqLuzVCjcDNwis3NxFESUwypVVT15LbSr4cm7SoqBhDjV2wRrtVh5HgyTKKPE",
  "key7": "45G6DFgo7SwbAQ8Fzr2gdwfx7v3jxMWrfx4a1U5U71WhiyU1aYnHmgzNF2nYraA9vRupuANhgeexHkocM83rqkfD",
  "key8": "dJW91oCt5NzJvh242TLn4Yg9coCBWmWRDqvNNrrUgw1C4bVPGXuihEpkoXYxBhRadMW9mdwuVpwGawSxrhokkBB",
  "key9": "2HfrXYY86Gf9wZicJ3HRP6keRZ8tU6rdqw8hpPTpswQqMXT6vUWYMrzgEQNRAdDdaJXCfcmCNH1AYpJ6gfaPo2E1",
  "key10": "5rV1ZarzYHXwmmcRK9KTQwWDnKfDUYoiTrDojLz9R5gYimpdcSqmZvgxULSapARj83hapDWHvCzbBUeqJmUtGHBS",
  "key11": "63fjtEx3KZH4qGtJ7eHgtGSevY4gRnXwjqB6YchQnVQKoNCm2kqoiQuNFcZxGHHH7gnHvFPjFoMQZS5kGRMvoBvn",
  "key12": "2pi1tn1iKYMN28SrGCbEerHMYTVukjzQ7udAbFv59DW34rjDzqbBoRvyTzmnMQtLaZeBn2sieVNfDGVfa6Tv8cb1",
  "key13": "4pAJJEu4iC97V872T8tFwkrpxc85yWgJnNJSYFWVjAL6swNAi7LF8XrEzJaa4CXLMzwo8WT11ffjKD2CrFm56a9D",
  "key14": "5rY4RHQhMXBQmqP8LUfydfkp1CUz5rXWb3DdDdt1aQoPtc5mUMYpi7aV4C8xpdYXwHqQPLmCrPkMexrZ7jgPB2KG",
  "key15": "f7H3nykuxJWgZ9bhHEoRLsXnq1ZRZnT3edsUcnZpNqdXy6PBmxQoeQUgXAkT6kx2dijiWA44kRxQhGsJX9aoxqv",
  "key16": "nDC8NAafD4qMYPArNpof5M9omo2D6ptWp7m87E8QhXob9KTQGAo7FBF9fXMK5cKNoTMy5sCjbSCoYuDuhRhawPf",
  "key17": "wdMboApCSKo41dn4xgGUHFr7uu9vttPEVcPk5ggb7D6zHrVRqZepnwh4s8ozdBp8xF4Z2BcxcKS9TcNoBpQHP6H",
  "key18": "3vrbwnb34zcTGPUjq1aLXpuqtQwwv8HfejFohCXkiQRzCvh5cbTUxGxvvxocqj5vdUFYmLUyf7KLzdHP8pDMW1r1",
  "key19": "2cvdwLuFvVMD7heEdQCSyziwqpacJU6hMWdicz7LgShFifhPaaTbF9czojiLdtoDPm1ePAz6s1eUi6FPWtsvpzE5",
  "key20": "5nrNcmiGgCrp18kDxQZjDES6y7g5CJ1gjSKd8da4jEG3dWMxcE59dWvqM5prCTDDhEwxMoyLEPd4egKQ4u6W4pwg",
  "key21": "5YVeNwNwYkmZUnPYfd8Q1MNc2CPa7qPfA5ydgJyAUNbbFDjRVg8spshzRUG3oo7chY1L9WRpP83VXnSRbrQBxcPi",
  "key22": "5Qe5Pi9sMqC1H94qyfzQBCFYYzMabSPqeBjmQXWv77VbyxVN5rwJKc34XenwT8gAjNAwBbkQ5iqJRoaijd8VxaJM",
  "key23": "5Nqw6x3MaPyponjMvH86Yg4KgxqrT9Yw11gnzmrSP74QTPNwXTwi1vCwQ1vCUhPdEySog3563T8zTMwKdXkjFfhH",
  "key24": "3AfErtgCLQAbCK9wznM17ePz1UEGYhitwbTNeBA3LfqEZqbQyZmRcmcSVj176oQ68DA1rRS1U4jzfmbD3PGNt17T",
  "key25": "5r2b3byEHA4NifRJZ8vUek8TLn3gmjnbvXc4BNDpxMZUiRpj2imsY2jgks5qS54xQfJfixaEE1CvK7hsZGTbzSUb",
  "key26": "yPkJmcyQ8GRxa5DH3ssUdo5N7uFzh91qFiPKSVCf1A81Rsa8Px3BbZvZtypF1RBXYk8NPK1CEErBPatPbZf6Nd5",
  "key27": "2qXx9HCofZUn3b6qa5HFKVFStgygbnYVdUEeD21vy247snjFoizK1hoEq2CFBGN2RAs3EtZBtMxrswka9HJiMZpT",
  "key28": "5WeJf2W3h4grYJCo21YrE4R5y8kq1FwUx2MsT8obNG3REsGZXtdtY7bTzs9manstyiBHRqMedjAcGw1w4h6VE5BT",
  "key29": "4KKGRCk5GxDfp6WCrN28bzgAsoYVJDDyzsycdGquNFy6EQyoVUbU3cyZfQUNQiAa1G8a7pWoJyhMFsxgyL5sz5bM",
  "key30": "bbxodNZi5QcDTHm8AS55hfi4Zd9EaLmVPwCG4xfNx4v79qsEAogJ2rHAcEK75qweSHW6cdVnCGKyTK9gaPad4ud",
  "key31": "59BtsBebdFycYFob2MnFhjpE2rGonTLHrPKcfJ9zoA5JBxmyhbPHpM8wzbsddotN3d6U77vTG6Huf5bb1crUEsoE",
  "key32": "4kPEYgeMrZZbzDPvoC2Geh5a6rq7RzLbyHU9TiEL8tam6mkiKpS3ma92em3JHWTivpknn411GhE79cBT1rrf36iZ",
  "key33": "3AWaecCu7TrTwctamyJX61SLcqhLbpA2Z2oHw9xtYbtoRRcQPzjv9XLcNA3QYR999Tqi8qRbi2cUjH3U5BxaxVzW",
  "key34": "2dWuJGCuFdUrUEVp14iNQqJLNyJLN6GEVYXbcEtFzjxDJFGj4CKgdqZd6RjXiMUJLks5NBm52Ad7GrekXJAHK6yf",
  "key35": "5fDRfafXe8aNHdTfRsQNbUbaxLxJGUtUcvDFNpj7KZdpbQG5dTKrvRYxEJzs8TZboofpbeyJ9kHnFMwVZh7qiL7Y",
  "key36": "65B7vLJDgNGTiCETyRrwaPvHCWEwPcdoj42aFuF76d7GPRcxiWappscU9UAyxGFGe6NPA6AsTWktjSBDXjBCLdPi",
  "key37": "3ECWsdnD7TKMy2KR1KtrKNykVKTRsJaCpqMWHQMVWN62spepg96cwz9gY1FYhRLvKivQeiGpMjju1BU7s99YBdUE",
  "key38": "2RSFuUmjGVF81PxLAtss4C5Bo32TQ4vws4CWG7vHvwc73uN87EPMteZM79tsdSNokL5Puwz32V2Yfcmgb2nC55nK",
  "key39": "4yUCFkUp24r38ZGCnCSTsQ8h1GVLp3eHab4N8hH6LkCfrfTYwTydPM7jbZ4i8Pr1eaFYSWycc7iSXFhTPgG6V3m",
  "key40": "3sWoVh3JoVGrATGQ158KLsZvC7esZhgvPXWnqrhWuC91jTQamb4KJPUf4EJMkSoM11zrPeguEoMxBusk7AohN3zp",
  "key41": "CWMr7q5jtCMSbuXn5EpuvCmSE1JFAyxHdtWPeG1ZDPRqxbGHXZhiiYWNh5Kc6Aeexyzzkw1rr89TekW5FCenSVg",
  "key42": "3xYFFbDKb3Z5UQShLyfvFBXQ8eWLAuq9ZVTQ4psQ1iP5GTnccAC5JiRCQhsigQsW9tJMdcESF1KrF2tLrzxJmTcd"
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
