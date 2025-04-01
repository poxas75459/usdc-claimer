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
    "63f7tyqXrzSgkEEUhEDvSpCURTt8fPvDa3EzXkukm816bhwke5TiwK5Gb26f75dbA2j6wqDBjmgA4fs4CYN2YRxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nv8vQunRb7yDfeFah8VCwgQ3ygB17iWdB2suhjHj9bEZNcV5soYa9GWarBhf8iKnTVo47ab322VVtLRrAvSZtYG",
  "key1": "53UKUEPaL9sCGDJKw9rhcCGd3AnJMByXUcnbd2MnDkhBYwUqpHpQRr7Jc1BazMnoMyJ8nn6fT1iGRXxM5498AqHc",
  "key2": "5kR4z4WNu9uz6UpUj9DyiQJUYpnsv76KhZk8UgE7viwi4VUD1eZmNpc4zL2cKo77QAmgmsHCdQqDykL7AkpA29Xs",
  "key3": "5Sn12bjwzLHae3CraAqk9yNYWCpXAwDFZvyAaNDb7nnGTtaycXDZu1nXoUzLgCDm13cV3FZcg9q743drFKs4ELTp",
  "key4": "4fRKFWfaReMpfLpghbWcSZCm1Pg7pCRe8WbRyAiGGZcvVw3SJwgg86x1YgzbWHihqX7EUz2pFCCbDJESanDHACER",
  "key5": "XV7wfiZZMagMgH8qN2JyUdVrDchp89BnPZBU37iKzza3sFGPgyxXBBdhg3yTMZAWp6mUsimuHXGzJgoH8PYGeSe",
  "key6": "5VAvE8T4TEiB7KvyPTgRaw1nGqScdGvuyqAhGmwLAUw98A5WRTUVKPfcMaC9vgJd4Rfbrmy9XGcizqd9YLcthjN9",
  "key7": "MNwtPr2gsb1JPC99JHJPm7bsYqpT4ML6rRRWHPPqKUMjLFuTJUUZyrYfPboG2LufXinAW3D2dBEx3XXp3jt3mAx",
  "key8": "5Uf3CAyhdwNLLe1aYctxdavK66QyNjC2usZK8bSTeNrLQo68DV8EoyaFH5BBZSWUXpkXQ8vwMWiGmE7xNXi9DScn",
  "key9": "3m7zd6HUF8c411zWBrdDf6B5EG6txKaHp4Xy7u7yyyjJPDftKF1wGbpZ8wvP6t6RTupHM4KmEuCXHf1rKA8sp8AE",
  "key10": "5Hhzrgz2QPrGEKhSAarJocPXjBrcLh2iXKT7SEwx2FYuyxCbS5xUzyKUBQBJmiXcF9CYtEXiqbeVUryYz9urZKXy",
  "key11": "2AnbVYiUzQUxJeAcUfnJGw9wkZ1NKizg226C3PebaPCDtmGvXMH8qKsyYs5PVsC1KNYGZmFtspSC5tTuxsQ25QfU",
  "key12": "vNmFCvfPRD9sNvJBQ1zayEDhYFaPrgV8jfXJX7WhAuvG4SMZt9924pXqinrt48H3BgSAMLce8erYomp88yHiZ8k",
  "key13": "62Gpkn3dfHBVN27K8WmLuH3DLAPsWkXHDxb3Cm8jMCJiE2CU382bnZ6E1RzwVNsSBr1xxC9qdhpgGC61ChGsieXB",
  "key14": "4afe6wQiceMJqAQkSDG7nH7MUcuPDsDGR38dSX3pY6mp4cJhvyaJmBsJpaYTkDuvgNQoniooZ3F4c2VKyeN3DieV",
  "key15": "5LPfUmaZMnGUBTaGH96vjTRRbVvGCsstktnxKBM5T1R1sGPDwdtAHfQtJR5T567JwuBnACbsidBucWjGSNwwwWha",
  "key16": "F5aZ4CqsdMvKvBq6RmpFprEjoyWg1wB8FbZU13psp46VfKk5frscW7zHYVEB4vatzCXgVKMrhjph3Xv4aQZC9mL",
  "key17": "3bxQzkcLSSYrpzCFgcKAMaurTahSKkiXBnWJ5aErzXpdZf72KvxFdhzoZutrYtpRk2cM5xdWAdJNSd1bLoxymhxY",
  "key18": "A6bNinTdp1KkSFTVNdovqhBaiREuTEMVefitHJ2EqQfM5mUHyvvwdNtPsf97gsNJjbGMqbKpag2Hdq6c5rJVQfP",
  "key19": "4JBduA3UFGjA3fKNfFSp2MNw9RPC92g9CV7XMF92Qq9eHcYUSdqhvsgiageSW9YcYZzXc7mttb26PKDhTLZD2T9J",
  "key20": "44jAETQTdDCmhxRsetAFGo172iwwswiQm9P1KpECReCcURVj3oG22Gc9hiiydk9hqWZKVGSfbsQDz1oc91R7DLTV",
  "key21": "2nyahFKg1LbNbGJXMAyodW6N6n5W5JrrtU3WyzmVMUpnqmtK3qfqvaswwoaQJPgG56HPgCyMztNdftvtSKbhUi3A",
  "key22": "p1MeMFTSDGKFQ2Fwpk7du2hZJBCwGYou82r3nSaNdsvpbZC6TBYeryAKDrzMa9n662EWnVgapmRcLWifZnviumo",
  "key23": "4cymyVf5bYSsr7exdjZepzGFAzaqekazrynysCYUwuxnCCQb1BkQraEzA8XphQUVH84LjQ5EXcHoJjo3wG4r1x3v",
  "key24": "4nihph3NTLr8K25viJmejUB3EAD2LGAkrWJkDLKQrtfvs3TDdGsnQdZQ5YEEs1HaBXKJzNELfhmHXLFG36od4zhq",
  "key25": "5KhSoYG3HYKVT9DQhsen5XyuKv57cGCuvp6eLLKdddjA9ERVE1VS6FzPDgujjfsiB8Tf9fGZeSYGUddJHz7pc4YF",
  "key26": "3JsyyGmhxiiPVMMXFuick3su4txnwwk1pjfMxTaYV5X7VhXgBywvMGtTy4pWEQXck1CGzh1LN8rNiEqjPwT5oVSu",
  "key27": "HtYE5pepQUtUbWD8FYC3EfZ3gkVsXc37eujLrnJSz3oxgwXcc5TaiHdwesUHxm7QH6f4HuaD4YQRgcdWEF5vpGz",
  "key28": "4RjmLxZJb2Mq7LMt5t97XTjWdh2HNqYnLsdceYV4i8BYRtw7GrE8GD6rznyVn2XnQzXArfj2RHtRzcrF3yQTNZiM",
  "key29": "5q2Md2hjHt8bkuW7Xoy9ZoXrvXzPYu6BdhztzVruYCFgu7sr4g5rdJz1a3sfXezvcFyA5d8gQsMvS1p5pR8smFX6",
  "key30": "2i5jSk8DCXDtwsvAwAkq7na5cRgEfHFuwktPSWppBP3N9sqqy6urifnhKawMwwHDMvPX81iLp5D9eqPEWqUmWPte",
  "key31": "528ga6b1TxBZadv5vjG5p8iwvkWJrex2kDyrUAAspRN1iRB7HxSJ9Xv9PK9Vk7PJYQd3rnKYvJTj3JTiJ8aPaj6N"
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
