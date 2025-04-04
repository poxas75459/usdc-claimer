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
    "4c8u2twEjHtNGwtsBKStuFZCkWhpsVJu3xM5f2ezE1MUUAdXDVmgiX7DLEFTAQh6C99JohxxZHDQXZz7bdT6BxZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6NXTnwRCQnGCNQTJ3Xm24SaCdUnhsHT7xWvKsx4Rg3AYeyuqAStv1USyWdLqFxYoQZYLANmyXqQuDCv4PirJne4",
  "key1": "28qCqV1A39iEnXtqB8zEqEAMrptavPQEaXEx7yrr6NhequtLgnBLK4hQG1gkP4UpuwN3bGYTfJLWfgVWLN5Wdqff",
  "key2": "Tt414jfDgvoK3SUeT6PRp2VdGNrEoaxuPEWENGokKTVfYjjVMYvBsE9yi2jbXG3HjFEG76FiTUtmuaEfd2oku1U",
  "key3": "2m9b2NUgTX8ikLwAGsge53F3Djb1Vw4vRVUUDUvShCb1ugmWsqF4cHMMf5932aXPwwLkAKDnvvLnFoHXN9acRABQ",
  "key4": "3GA2WduhyMMsXArFNSp2adyKN9sME9Zz3bnWsbCZcgT1eh6NsqM7AonSoK3RaYzti7FaftqRQV2B6MGQPKKwCMG",
  "key5": "36i3xmmgNwYKGBkzc4DufPakp4Utsgn2ifenBC7GX3tS4iZsvwb5L5NyozK4b3AWtM7QFVw9L4Xh4iw5834iGzV7",
  "key6": "2ztYd6iY9ibzv2WGdppNrvKWnn7hZQ3Ntu7gbrAs69QqwWgvsB3a9ztZSJ3HptWaz3MaTbf5TM5AWckx2dvzvbfK",
  "key7": "4e1J7Jdox9S7T1LawHkbgAvpR3KDPvMYAgDCxtUbe612sTL7yebr29y2NzZNA3uTowzi427Xoxftryg7yQjFBVob",
  "key8": "4voqco77YC95UFcpLaeUB45w6qHdhPk8tL6jp47Tj1Db8AFrt1DfoCKYgttCnznwBDbNosL8hVF7zjGbftDfmtdN",
  "key9": "Vm3PQLjaCroyFYYJJ4sUMxvaPH6tnWgAYUmk3Hanva26yx5DkvUyXA5fpbgzkXHLFnnRihMeej63XZGbP7PieMW",
  "key10": "5Qn9PgXwtH9qwCBaUPRE5p74NM4r6UiCC8cVAuYcEqecbft6w3mP6JTQPp3NH1nso7HzyjYAEWAoLFakcDXdGJd8",
  "key11": "4Ux3cM87nJ8E1MFKbTXakwxhgtCD1rcUDN7VdJDixSEpcujtue8Ns9Tg61aFNth7A71sSzko57QWhStLUePi65fN",
  "key12": "3dZAxmKXTowkSSLtC8UxUoQ2uLYuZmbMGCNcRn3khdmyiA3W8SxH7eCbc5Wy7bxMmtbzXTGjthcqh1kFTDxTK5T1",
  "key13": "4F7hFCD8S4S6ToBv5jphUVuUN2mpVCeU9WrqUfvsWV79WZV5nveiH2SPwtYbd33mDcav9RMrMyfyhTZiir5tXAoZ",
  "key14": "2yLnTGfYWVYpL2tpBUG3xeVCvt1x7hzkJpswJgeNeSSpYnUS1iwCxWX3cxe9XcEWZiz4JfKCmzs9kSuakEzhpCkT",
  "key15": "2o8WyJnZ7BBAR6L7deS5RJuPxtjikY4FMdVM8MmPuhbQ3KDXxkVrqR7J4ZKkp52GEWNWgHpDbsQnsAET9K4UvPKb",
  "key16": "htJhzgxomfUXdmTtRz4ANHdfQM4uNd7YGraX6T1QcjQmExZ4MUG5WJgf1LTmLjBFBBD2eiyqp9Knvq1U6P6ikKG",
  "key17": "4SLLqFayq5dFdwo4SPbeYDiJ7pTmwfRdtQjbEKdHuG5mdYb57LGf6Qyk6xMYnXkiYNsqDHDDwjE8cgr2Df9TWyBe",
  "key18": "5x5PR74g2cG9f9dAHNy83VgqbVcsPkyCCWow4ibGMtVTkmAKWSssCW1xLuWpE9VznMSw2rgrz1tKgDcp6PVAM4MD",
  "key19": "5nAyjpyS6uf3jRnbSfe6oEyXXnx21YB7A8qVzqtLbKf2TwDxvVMGSioLDksiACXbsmjntcnaocKZKGMRh4Wx5X1",
  "key20": "3ipxqQsSYHguv9G2xBHcQ57bobq9syEGV5N3Hmgj6efuAeEXAEKQ4PLyt6sGP2iqSQNhudiUFSNQ18LZEHEEnAq4",
  "key21": "4LJHqwXqf8MJCJJ6PBvNf4KoS3QX2DnbViMrme3vTqbcD8B48FFYY4GDK89FtPYqswn1s1K9Ce9Xt2jUUPpKEJw",
  "key22": "3rU9DRR7FNEyfpa2GeAFE4aerFEvPWNephQQE62KFyp985GMcxEnXqwUc8MCNbHXyUAdZDJykRxRkXP5ivrqwGb5",
  "key23": "5xMSMQ1rfgGZHoFguL656xcqH1cU9qg62NCvyoFwezpPq5w3XZ1fKBrCoGZqhNff6txW8SG7UNwkQaCDvcPqFk1R",
  "key24": "53QuG3oXr8VQ13dkm6nHwacLKkQ2fdoZuQ8wo5ZNfoEK38hFazY8ZbM8hHhXXnMgy5pj29E5AKpqSXnfrrVcxaR6",
  "key25": "DwfdicMAQ3kdDcQrGBbz7eNKyCXYJsRw4iSzdijVnzfsMeXdt73fHasdnfqndFt7JCPNWpPM9E7Tv54o9WT9NoJ",
  "key26": "3nDwgEKxGDxBspDHutQSGyy1umZPXQ3DBUrd5SZK6HdTVgwve1T4HKdsj6CdEyKKMySJK2H67Beb6qKxzXR5V9u2"
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
