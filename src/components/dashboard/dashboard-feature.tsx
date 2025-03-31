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
    "5yF6EduYNaV5y2dYvcBDE6RDXZDYYPST5k51eUHLE39G7Nf8LFHfDskCpnUmcTcT9tDVP7wjhGSpAKs9WcMeWYbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yM7d4myhBxknz82qwQcnRVSY7QzEkEcAQLjwssKkWMZh7pKbhK3rTztcBiuQYVRfQh3yMLQoVoDKaErPFj5oetF",
  "key1": "659SDA99zZhraUsGyMonvwQTAY4U8hrDMTsiiFqnkiTNGifZ9EQ5ru1hhqK3SkrCsSR5h1V3ezaGABADFc6gbguM",
  "key2": "2aizYRd2uBpi9oPcLt7ffQowXHrHr6GT7oPUy8pF4Wkt6viDXtBNm7VK8E9mVNscZnBNQX51nYcqTJrMHnyuZ2Jr",
  "key3": "2iDtrjBRL6xRcJ2VjuBXGESTewtDFPXKCh2EiMh5VrvDiXY4c9xCo3v44KQPZjbskvt7doTZYxS37DaegJioTqah",
  "key4": "3BkPwnBuU2oMtu463eh7ayCe91QkMmYitgNFpfUZEfnd3FqQ9BH6sMb7ivaHwTmEZXsB4zTx36xydmvPPR6AwJvG",
  "key5": "3D9jTVnQoDbi2DY9wc8SwGtggKkUMnFFGrWUK6mBKtsUAQ9K7vT3q9X6WiY7XrLquXTNYUj3etnTzcDn39FKS8Qe",
  "key6": "3WfkYJCwZBvvQUa1VXgVam4rfFEEGC62opNZQgtv5vqNWQscQL8KXsxmuGRGyC8en1oQ7foSKpLcYGLScQEPCu98",
  "key7": "2EaxpD3JhTuKRySTWrDEUhR2eotoJKV3eRatd1zCsbNNY7X4GxoDGhetnC8TSgZVcYowggepx9P8qrZnMVxvCEz2",
  "key8": "5zTK1KUU9CxRzAZgk7CbjKqo3Tvw4wggCZHWCTR2C2wd5gkTef28wkCYGEKoTp5ahcYCHcJTn6AV79KHdS4rBnyH",
  "key9": "qVb9SXp9vTabpBFuyvXhCDEMzE5T737inu6MniyWUu2AoQnAXjU9avgr9ESTXVBKPQQkegbGULuGekFKAyRf42X",
  "key10": "2BrsbXoeFrbgjqGk3qtjJ2hNrNEuaBxkLW5s4quMHtoGQXXZxbPq46q2LDBKFe2hNufcHaDTwDhaCSXYJN3ULAvL",
  "key11": "37P1rvYDCZrS9XxJSSKBopggceadvLFZ67gYbAFeVxhEsCnVaxN8tCck9kPK5gS3nr9NYpGW3t1S2G3utBx4KvBn",
  "key12": "5ssgKaipCnQ43pf2WTwdmLtpUcS18Nf4p9EobqPY7HPb8E34s6Wrg3BiPs3oXwXXjtEWu9ETs9zr7HtNgVsVCvEW",
  "key13": "3VnZCW1jPePmgHnQgerHpEXXKXo8xy4BsusxTwQh6hQb4br9P67BssSNSix8APbLS3Q31aDsB9HuKpidijSKbTY5",
  "key14": "4fxr7XZCuesckfCFoXCVoPjBdNsZsxBWLF98VWYbfsMyyNYa3Hp9ougkWJKRMU6S3JmgAKcfc9ZqXyDq62td4LwM",
  "key15": "5gLDJJeBpSj7BR8pdZRmZK95BKYm5ntW74MfSh6uSfPaUTbP31Vihh7uaikbc2FDmnti7sGPVTq8ST5jGqBzPh1x",
  "key16": "55sFDzqnFLvomSXsXGAWWpdTsxzJxepYLP21TUSQPgs6UJEsu4zKfKci9kpKXHxjNogHWkDWmYW85FuCw84FENzD",
  "key17": "5JDwB5fWtPxqaX4t5c1rSQ6JPxaJpW7RZkQvPEwoeScKbLyzzQdRagB959QGGrenocQpzMSsQSPZvn7q5ht7dtk7",
  "key18": "XaGpEcLkU7NdtJHPeewxr42zWdx2mdX7efQVCVjXHzFBtwMzN1RQ7vpMuN7jMYtVfFChjRCEj8qJBP6nTV43iys",
  "key19": "2CgeLFcWKxxm4aVS9xxwSDnSyNLwG17ujKgKrJzVsorgNEBgn5ErLhTKe1Zd5Xd3nGDMaRf3zv61NgcaktTnUiZ2",
  "key20": "2v7ixAVtLyzbaQETta6Z7htHGL543YQusTxiP8iTYz722Qy9DMxBekzobWFJTrbJ2TG8WSzw6iTskXiQe7Hk8uBo",
  "key21": "2Nbh59tLtaDJxWjGTAKj5z2VU3kNVifU2kxHZ9K5YdhNAfzx21uaCHoj7d7Hn26U8jsAuAw3c2Nmm9Z2NVHrFjno",
  "key22": "5CLBkqo2v13n6vodR6k5NJcRho2JVpK1XsxWeqngyDayE5SCk8mXLMeBibEbYcojC2FUviLXWphDGMsanjfDMswD",
  "key23": "5B2VA93BgBdyjMFkdAjHiC1UWgWHmjPsWi8beAS4WSN5UVPxh7rCP5rBzjZNcyqTHmcLmziCt3GTDUqhLrxyq5da",
  "key24": "2tsSkPhdqB4anyFZe5x74nNapCjM1q6JMPNHwdK1tsNBr7V3Tnq7Tath65GU4aeDW5UMCtzwkP1g5BHDc2sPVwLU",
  "key25": "3RKLbAG74KU3eX5o8dyHywPM8kNJMMq364AZLDvTtf29xnKrrXrRzxq288ytfGZvxNUBNqeqjiPCMKZxPw8f8N1Y",
  "key26": "2pWdEN99LLBVsEUqRtcfiB2Ty4P35o6xNYCftHVpa87UPmC9WrQuTY7dAPQnXaS5mz9uD5CdQna1QKXXWetn8Qca",
  "key27": "4h6Y38HArHxh1Xuwi8H1DUKpwpKWSRhtuCUVBcVKQxYoTQaF7wKDMvVnq4YdNqEvUr3LcL1U1KR8mhtf7ddhfuWQ",
  "key28": "3fKRmohkfCNdqkcPy4hhybxMTcPTq5bH5rTeSHH7DR8BPpojqsMGXhsQm5TuFKDpt2fe16ySW3iHqrKLrAmEJvJq"
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
