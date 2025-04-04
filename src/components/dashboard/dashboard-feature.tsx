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
    "fXY4AwiwoeaUNeAoeBqpJNirjSYAcdKMt8xpcw4V3MyjkHzaaqz4jcH3UktfryP7XWVR5qSb9mbH98fdKAwgHum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dKZaUBuAstRGxCCUHNvj7bfUf4JMsvP4652sYUJqPf3eWQhZJRJGCXJuU8sgW8WZvJdUoxPwAoTKQay8DhHEoj6",
  "key1": "anrwPSrhaUS4k9tL33PbmhvQLWxcVzg115JKysBNd7yMCL8YfC3K5en5LQf9ujoVKo1oA5hH8YtPX7q5xn3c44L",
  "key2": "5ydVUwEKcKGEyMmmrhe12kxReUFXzdppVVeHwoyz59tYsNmVBtnrJn5REE923xGLVLoWUueGULp6bLALdJSTcS27",
  "key3": "e4Ebg2LWmmwTc7HPDAwWUUkQKpaSU8Nd4Mdq34BY65LZ5mp4TjyiLd6ateDSxtbfXJdQa8pm7ke6CeSTPHwTUkU",
  "key4": "5Q4aK8XXnKhWLkEtsbgrYUfxUKMBdTUEzA2fgx1QabMerqSNqtngqS1vHJSH4WvbUp7npLX1jAxRSoruDQYeCxcT",
  "key5": "dQcWVLYnak8HxjEdzWu7yyANGR5UGbjKkgSCnHp1cXnMphaUpXgiwVZ8iEpmFqPJ85cEi4Edn4AukrVsNM4kQfg",
  "key6": "5ggmrY3ioY5PpnZr2pDGzhV8uwwp4QabiX2fBPQvCmydFgsxjoB5x2bMT2ZMPvg4UkvJgerpu1HWGVYfYcJpQyTb",
  "key7": "xKyeDXgLwQi1aF3kNDbUwX8WGbQ6HN1H6yuSLXbKYgLGLKaNF5hQPebAt5faEcuCN8Z8c9Vz7xXzyHoFPxNZooT",
  "key8": "v7osW2bFNRHHHdQMKjeAzhrBATGSi4J9GqoJazAcGnVAdcGNJCmnVj7SWM8N2k5LU7j1dYMYTJqifTHetMXKCKB",
  "key9": "2DU1g8JR2sXvRxpitv3oQpUKZmeSpjUJuBCNeiiCnz24aVKiJK2EaQ2rUqSBU17DNfYsvbKGivYp8SW9ZrXwm4h6",
  "key10": "BNkwZchne64ixTyPu7FkSNFMab7wtZivLEBjG9gyusKTSBKRrYYGTWjFdZMsU9CcYUFrfsQ4bHeCzjNcqDYaeuY",
  "key11": "3YZQkrxyAAdafBd8YP5ys2UF7nRnGgEtPDvx46PnVZPUw4HWv22JitFnDNtJWxfWX9Uspm39ErcS2fRiNNq8aWyb",
  "key12": "22HL28YDFFVn5YnKtfPtwKwF7dMjbZvYSTA3aHwB2DNCwXRLzHA69Dt2d4AGy3YdMSV97zcrhfDX7zbYHYYLssGh",
  "key13": "5aKw97kd6W3LfZYRYb4d8Uy6omHe4sMtvgag5omfzbbPedWUkJLhszcBVbCrgzQKvoXfzgmjxSBEBxskfVUwwbjK",
  "key14": "3YoKeKdX6PL6f97EgytCLCiVZuMWbikM1zZtfV5Ggo22mdpSFmYMUv3vt8B6DEpgmuRXMrLhpjA998gJs7SCvuTt",
  "key15": "3555xq35JNGsJgx8gTov29g7fSov8xnPZfE4Z3S15BmcmhfZD7GspUYbuzdsLVPw77tHCGcZ4eCsQmGfnspwQXpe",
  "key16": "5FbVknydysqE1cqv8AJMnt8hMTaQotDUG882gmvp1tHHeX5fCmRFTW9oH6VRFHVw7QhCyux34X5ioTwEGETsb2rj",
  "key17": "qR5CS3g5YY1uXrYMHXRacdjfC9MEsFKi9GRnPTq9kNvAFsT8KYrhvvcaafqQmbwLytEK3MjRshf5EhpWM74m5WK",
  "key18": "3yKcmNS1mKYjinBLaVPBPRkTUcGANAKNTPUFrSX6KBKFy6WrdtY5n4NGEbtJ6i2h1smjYGkpjQ1y82p9YM84brH8",
  "key19": "5NbcLk2kv9raJxeKEwMcCqE2jyo8FMkTvufED3NfKe3RaBk6vpM8x7ux5iQdbgYbW9a1WDkvYDTPpSZWWdjdGxJn",
  "key20": "4FZrWq1A5o4p91NGbPFZmqq7TNd4m2MtbxwNAMxBmq1vrJCgJ5Uu5cQFy52aMh1MaTPcP2huwTB9FajDrQo6Qk6d",
  "key21": "4KXqipR4fXQu2NPhKRvkMsTekbiqjacAee7bBkGAxQm34bJCtQizZGjNDLTfjgZpE8PgFTJuD2CUyUL2RfMYArVc",
  "key22": "2CoaAodHcYKMhFg3Xur6CqhHLBDC7dnr85MTxKxYD57qgeFRmWudjddByQ9FnHDwrrYKpNNWrCtZ9us1LuxWw6jT",
  "key23": "C3FR1BjwE6tJTgbTQfmFMK2Lhd1WFHJhhXbfcVxmyo16HFo4KzuzfM2tr66mfqpTS2BugZQwh6pJPKDWWFbdhyc",
  "key24": "4rAD6Wrv5T2VZADkLtPEADJdrKzj9vDjZQiJ2YM58PEsCsUwYxohK2WDHB69uccKpFnQ2eJvqSJvEeMFRk1X9diG",
  "key25": "2SfPncL4vpphtE1FFZpNHpVTzvkioVRBpxGC7RvR7wmFiBNsdLNaT21CV186ZagFEXwEdzgLT8y5tnpt8Q7XpTiC",
  "key26": "2VDXMjWeLQvgVAWQYbSQ8gJqQ8zgQ37sVtCLntZpXaJALoQirL2R4iKL2kJd9XWfqePs1qprTtoieXc3oaycLG9s",
  "key27": "5LXKYTzxrV3y9HanLVeJSap9CWutpFaoxurpAYpmUEr34bNREKZzcUB6cW6yH6EVkxgr6WYzBSYWxAR3GgTmLq3H",
  "key28": "4a6QbiyGWaQ8ReZg4dAcjgiQTLxmESzRzwhwqJQVka5eSTDcfurngS47gz9yZhWdL9cnEkmq7LaSbXU98q4AqhKF",
  "key29": "tUeCfhmWvxmev1aAxqtNRAc2Fd3jkTpSrbKbevA2tshxHMhACecT6FNLKw7NYos4NyQUf3aomQengGSebVG7ETY",
  "key30": "3Z2wVE3Vpym72cmqXvFCEfNfJCkZNtr28NpiJTYKZVTZgeEstcQx5t4PRMtdXF51sMtoWHs8VKZ9wtfjk5F1yoRp",
  "key31": "2T6qqDHMsQR6ZWmaQBh1ThBgNKQxkeKeLdEm1UzabRp7ofLkeZScCTyx6yxr3CKJMQJW4XLCT9WTyQSxAZ8F7R8W",
  "key32": "66UFcykZY8hNf4ENUR5ztSecYpzCkJbMZ7TRKdWDfRcxQyjLbxSfC4424o8ZQwgjkT2rRrWS8YG8SC4Bvt7MnT3H",
  "key33": "34WqEWo4XBTrwuFYsYENpk8ypAGVyW7BNteTjcBSRcbGZQc6GuWLUNGX68RVj6ZHbU94iatg8742Y9w4FsnyZiit",
  "key34": "65tj6rM44SfkNoFVFko8nADXXeyE2AC5557Rf3UnhPaXhqhKPeehc6eXeQcsQ5ujcHGxow6EVkJQKtXNWJP9Xudf",
  "key35": "5PBj7ghFQ57HT1quMnmXmuHNydbbNzf8WH76Rm7WuMadCrBveGSfsGqtHWSwwd9nfjekZo8QCnRmBSdiHt832kSv"
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
