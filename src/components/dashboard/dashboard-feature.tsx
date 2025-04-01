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
    "5WSDpqnguTu3tpoZ3CN7UDzfqnNa3mbvfWmwnNs7EZVRZnJxJkoi4oDdyvsWH7rTLPe5DRB1ELKteyPzHDYvftDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRT41rS9fMeqM1zZpoGGpr5dcdykgSiDGNLWjeMbKKhFNUVUeaUJKtmBuZBf85f9pqtw41ZoZnFFMYW9RcbpRi3",
  "key1": "42Y6M97rkAXH5HNozYQCLb9jhguxfLSBFgT5rT49wDZR8jmdQ6PMn5CPZCQ5rSPH7GhKYF4co8542nq5xdwsGcLM",
  "key2": "QdWeBGURsG1vEbJK7dyMS8eSqwXQUdwXVRwLgM8189Lb2Ud9hP44J7YTFZBARcQvY6X6Qnq7XDh8mudnXZrPMFb",
  "key3": "63QYwdAePf3dqkhAMmMVf6mNoHdjdy41kc2yahhRjPEYZ5fVas5tHhyRvyp4AqV9P2zkqZpqNgk6p8B45L3kCZhi",
  "key4": "5mSSDbFSzAEWeC34zUgRgHuUBZVBr2LheiyTmfUMJuLVhyKqVjUw7erS8nBmDesrroAzN4fmXPsmrGUQZV6rtC23",
  "key5": "9G8xm8wgZeWw8JWm69xWzM81eER1puRrdXpYCjUqtnkBzxdUw8L7u5MgbiN4xK2i4hPp1sXVFM19puy6dxVF4vk",
  "key6": "62sbiAQ1tkYiMwWUcNdqkvaeGUaXPpkJ4bbRCS985pbvGCygixCGvf15GmqA7DW8bD8JFzhw2s9FGtSfDPywB7Vj",
  "key7": "5UPyRRJF8nkhB7ZAhFNGUssih5CLKPPDALVg5JrAfAit9DXxCASdZzU8wBsPGSgCpUW2PJ8TcR322TAgWs7D7cjR",
  "key8": "3sDzgULydBHChBLwKTp7bqfeSVWWGuEFm9FngKdfMvCgnsGCiRnqUb3JmvAvYcvx4KeKgA98cqsCC48LRy1nfDLt",
  "key9": "4rdiVQ8xq5YeopT2gJB9JtFjpZheFYadb3bXW5xA3Hr9neXNYyeBUbZJsKbWfhVnsfujPb9zJY5yHXLAni45xgdR",
  "key10": "2JsjR7bV2WPwHvAG5JhG5dShGB1QWAApMydjbYUUgaKZ4ks6Mdg5oMXvGWECMRmZMmYMo2ZdjjF3VJkAgjuav7Y4",
  "key11": "grUJfmMRDgqywAs2szHtSysXbP4iEfWLpV2ZE9akz2NbKaD2tkFVYiyV6YHf4kdLUgbw936Fadn1opd2czkisv1",
  "key12": "5aNHSqEAHCFpLSK9gN6W1eVxJV87YuqJEtyXNr3oWY2MH9ett7jCPmmPBtqqJPdttF2jtK2AQf7chdjfTpZCgk99",
  "key13": "2uV6vbPyvJfNB5kF71rwqKZFTXWUS9yTan9y78svUGKfPxMyQiE2cjRcdrMLjmcvLMNR7wCctdbXKwLYfnjdSkJQ",
  "key14": "TyPrwLen4YabyT3p4yKpLtay479BUPvELqW7RBxd97A5nUSQtWLoSGQmD4tkXWtye9TjvuWHEueSWgE8fQ5xXY1",
  "key15": "3Z8NGTmij9e4tsaVHrpEFAVGqt2C13QLFvDRuGSpASRQN96k6C9YFybViraP8vu5MEKYxXG3RBaogowDoE7Btr6s",
  "key16": "2WcZozQLDUC1MYcJXrzV6hPP8UE8fabvxsNCoVfpDSxxLhFdoqx7wDTKb42pPQ5thoQtyoR6X2iSGLFg2ErFqCT4",
  "key17": "3uTWsraoadD46XfGvfA3P7aZuW7Vbz82GTfwg1yD4zP8KYiM5mnjFjEvgaydHQT6J9w4G1wbJ4RRBLDbbcRgzyPe",
  "key18": "4xGrD1uD4hrULqcgkMdhZpZ6MmrWKQXurhg41jtg5N3mZVCqYzjkxb1hJ2VGWyWT1sBSrbXGmNBEHzintrkTbYsZ",
  "key19": "3grLyG24eMsQ2obCMvn3N6Y3VT8Yf2viLq8Q3XBexuezjYpGNS6AjjpkZwRCniUAPX1tb3jeMthSmKmyzMX26TJW",
  "key20": "611kSRdrEYBwG41RaXLJSPxeKstPHnC591Z9DACQzEAtPRLJDiKjRZWsZ6XR2VgneoW7JDf7fiPtK6W5xcxQqCPp",
  "key21": "51yZ91R17GzUeeRGstfndBSsxD1uCTQJxtgAr6aWT7ArMvECoq57EovNC6Ta5vXoY9VsCnvu9RoJTUz3b59DRZac",
  "key22": "4BJRaTtsX6mgfmYPVQ3p5A6DQGk1V4XyhoSJ4ZiGWhHWWrdB2d6Ts339VKdsuKmSr5pxFPVpUEUVYdVdirzG9j8A",
  "key23": "39JQ6bBnAQf7NaAiW1CGLpVqJG9EWmD8GR9FSGjYTZq5duMvUj5PKNigoMBCSnNGA9N6KM3An5thrvsWYEvhcpzf",
  "key24": "3BqkBCC7BiZNkicAi4hDWoUNuqQxnVPFXAH731Dg2idxC5T6TjWZy2oUtdGBoQszwP8WZugBkozqWy38Jeinc7f9",
  "key25": "4qR36KT7T9iHrYYeYt4dbpxvXmr6SY8BVX5MA1SdTJFiLjC37ikjMST6Szfv7nL2rYXXMXiVQJ7vmZP8dewThaAK",
  "key26": "5Yj76kHCZRRG4zFBt9ikoyEq7osncHrvq6RPfAAiqJ4c21VNFfiQRZYFdJAkFJSqnXt8Vm6g24r6vFEYGv1JfwEg",
  "key27": "sSn53HQspu5aoXsA515HJFohmTy3ER6kWmZchYxJYp4YFLa5EqPgPj7CXkyJ4MA1zcUHQXXEsZghpyPuU6JMcon",
  "key28": "5SHMtfTYSjpEVwvMaR961xM4rGL1tG2x1HtHzbvSmBwWbDcFwuVBqQebo6saSbei4WoQSkzbitWphz7Y1y52qX6M",
  "key29": "4M9pqeik8VMiGu879MazmBzgyHQgit5DEAL5gYUswse3WSKsMf7FWdkbu6LREvXFFx6XuWkNE41JT7aTTZWQpq1r",
  "key30": "2fcN5ViuH3DJbrYmjQjfoEbwyCQbBxPJKy9dDd92EXfyRJabHJerho9eXujikGStqzyuKUbX8m9sQ3x5hnq3SFGx",
  "key31": "xsHbLMJsdQG6CE1PRycSg7VPE2E2cUkTUjFF2otHrW4vCsTAUUsqWtF6waQ2LLHeH6vkh3gW4C9wcigNEseoACH",
  "key32": "34MeNp2obELDJDSfM9cMDppzWJhbeozbjQz2zkBwTFDiGKXe9jTnWQPEeVnn51oVsdHxteuhd17XtnFz3b4nBpxt",
  "key33": "3dSiPpqPbAdUJRkwEqtirsproAQpR2PPjSPvvXBew3LDuv1LbTu3L8NgHGMVkePfAr8wX7V28kHfYSk1KYGRDV61",
  "key34": "2BT36iRBNBajJ8rqnzbjAH6hJRgjuW4MRP8Ew5G6X2spgyh9iU2sz5wzFpji7PY5xWzJMMNVd6JAKty7ApA27wAT",
  "key35": "31UHy1dQZgsSJb59h8gRHdQZ2KWrQe3nGBQQgZt6MCUoZNtL2dZggjCXYPqTs29Jeu1KtLyfJcAZtb2M4jZMB5XM",
  "key36": "2WKm74QeARUr3n9EEpPmjPGfCcWBXzim34HvRheu3oCUVKbjec43rCf6Bf8kT15nXqH6FGVhucwQRDAFiGXyjZ5v",
  "key37": "5YQa7J1BsgJSVqMbjvoBV4oriTYZyuMaFUwiq377fJ4htaHMvVoxwFrN3HzLExfm8QyCRHgXMEjQWjoQiuj2DXKo",
  "key38": "2jw1jUyoStas1CZUCQmLpmA8CGLaD2WFH1bfFgiDS6e5XWSWpqyTdeXzjqooodfmnkz8ynCECgE3RW3Uoa8EJF4V",
  "key39": "23yA7RBQjCn4z3gqiQx7X7PYYEupHzVPzu9xx4ckkpnJs9MzQSuiGbkapjDburf8K6MaUV6i3rMY7Q3TmHrh3dqd",
  "key40": "5YAX1YzvtdexH9bytuFGbWaTPjjaU4Jaj4Ua6iGQh5v7nUBsEE75zwcEUWc2Ld1nRRTS6wPKinDDQVqGwnyjG62E",
  "key41": "wh4Fvoxp5QQZfzY343Svzvacz8c9Q9tvwKuvTXzvv1nJQp3bmDJfCouJm9S1wGXeFDMrWvdeZmz232Hu5JYGrNe",
  "key42": "EMoAKyhCXxTPg3CCuXFWZyvgh9HfvHnvmXGZCSRw3AUBZ2caPWTpBqL3PpSfE74Bcfxex9VHzP1P7tyt1iUwa1v",
  "key43": "4bJANPAostMFtDqcKyTcKuHVVMdNVwDJhTRwkVdxL7LktYSaP1dp19UGijXFp288vT8xDk6pxqaGB4vn9askvF9R",
  "key44": "48gbJGN2Wj1xz4i3gqRQHBvxev9JD23KCW4vNhbfdgyk7CfnfBXiGQDpjuhWPqidgH3ob8PVHKLnDbmqxiGDDfBF"
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
