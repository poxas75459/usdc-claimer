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
    "daf3TGRFDxPmMscsKymgzphCuSpY99jpoi5XhDpNoqxnq7NT4k4KA4BTaxhyA5aKtroSjVZ3emDdtn4yXzRCnpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RogEwyLAUvjemNYLsDCnKpXLcebv8VB6Pbf341EX58cGtthKewrjre1x8Mx6x7D7Rm9rAVKzHoNKrJDCA71LVv9",
  "key1": "2yXjZ4smMRZzKhefHbvDAtXcCgwCNJ616qKLD7jNjHhwH9yS9x5z15X37vkZqb4JDmF4HuzpyKGCSMVUiziaKrYs",
  "key2": "5KJs8qssMzaPKHDiVRg2yTV8GukHEhrf1Dw1teAn338gn9egNn7DG3sfVoUFkyB46mesoCJpbw1mRYTqCNKMBwNB",
  "key3": "3a5Y43naFAQPhrXGnjA2uVUyKjxa1ntzvtFWgCmmVAnmiNVoMPScpXC7xEH2G5wW2dTNMRpRCPeP3k5g5RNbmHre",
  "key4": "3yqZ7vDASg84ZgVUnqheMKXm1hvHfcdx48gUHAwpN22oPR7UNeDeQS1z2kJxWsicMNUKiNcBvsZYu4LQGpTDy8Sq",
  "key5": "5LqiDBGvyJwXMjizdDjcaNpXe9Ujb5zWU6Sbh3hYAYNQZLJNMbDtzpWVd8vjLiJyfvFFogcarbVupaeTn9aaz1nn",
  "key6": "2yz1rKRVdFT8hfh2JwNJMLqrDGtruHLiqAXHCGtS8LoqbfkKS23F4JXvFb3TLYpHsas8HSZhWuUVneaFUVMusTQL",
  "key7": "3mZVNE3voYqPW47TNEoRuxJtHHHUrChqRw6W7dfrb97q2B7fSjkxngZu4Yw43xDeRHAuwsjRuGvAwYki6XFHrvGf",
  "key8": "4waK29DW434JfznsmdtRecv5uVgF2CovprgkbenGtZC1VAyUUTnUVEkyQ1EzaHA7sxx6tj98yYGmGi6nM9EgP7t2",
  "key9": "3SGRV2Pf14m9CWngYe7gU7g3v9qk54NoaTPm8w7iDWf235i2ZZSptFnWsqbobbmPatbLXcP8z7zzUmHbjf7ZzYUF",
  "key10": "vzUFPHVZbX7bZXahGxTawk842uDGMDPDg4ZnG1xjMUDciA9dTYLwrNVJm7WST8XetjYvS8G4Xz5RtbCyp8V5BRn",
  "key11": "BKDx3GaUzbi19DTxyrKs9gxk4kztbD7evW22nezrpTxtervBYojMsiXd7fzkPRzum7sQzGUVjnmnghJsFwkmrVZ",
  "key12": "3f8Ru2vcpMPz4d2cjeocdxWbBjH5ESoB6b9DTWH7VBKqqeiaMDVshNFgioNXjYjH1V14Lni7CxYpt98Dcg8ZTtPw",
  "key13": "2pfT8ZnE3YLurM65wWTaE5tSYEmp2Fzc4TeyBMshNnFq4wkyJhESFoFTGMshm5S8ejuM6w7GFE1ZgoBzPRFRo3Tv",
  "key14": "47gUJWTUzLnyFr7abffHGh9XPHmDX4sWV3GP8NmtBWwr7yWJ6FcQdroVgTL31NWhftfUZWPd69FYH3MeVL4DtnKJ",
  "key15": "4UT7qJpxtAYv6q1zN6y7cssVNZkE6vtwepZ9hDTdnoDksmbYjAxkZgXXNzxaUigtdhBVfskLQh1qtXAWqKwv2JVV",
  "key16": "3YKVqpiPM1NWmNWtmbuYwWo2zPxDF4FidHNwXuUsYSqcPdc688w4e2DTmqjWLMKRfs5vGLCkGUgMFULP5MSnNZEN",
  "key17": "47kMSQTQQ7eBiAz8dzyMmvQ4YRLiwxcnr3mHnC7W8q6N1ag4cq8Ytoey9BZkdiADTe1WqB9o879ZGmsvSH1QJHyV",
  "key18": "5ZRHYi4PBcwSQpchSkc4fCnGg7gYWKAJhcygbUj8zWyQgji3gt4Lyfu7kUbGpn6HRHrfRZwvxfhpdUJg4WyhSaEi",
  "key19": "5z1RkZ6mgM3gWE8Az6W2uTBsKJbYzQ2kTuizgkzYgewCC8fy4QHxZVEGJ7egJnmVQ9mViJ3izFpRyHXLzsYigBoQ",
  "key20": "5bK1D5qpWKpcQnfZWmE31JBj6LnXykEN1YjXCw6i98uDSPDsTAhvAjtvjkFpSvkZMfDTqQW6bKznUxZx6Mo3wXwq",
  "key21": "NFBJojuHgtBcnEG9GcNJZcdt7RHTAfbKUfr5VPYfTAxCncZ4WwpvXkojWs2CM2r9njPzUArZQT4ZKFobQFS1LeQ",
  "key22": "3mbChiRWbCSbX1JH8VbpzdX9qwBPSb8JzNmBt8mMyBFV7AD9QrnKeEfwZV4quhQKYDAja73tSL8K6fHGQEAVXZf9",
  "key23": "44h93FFHmth7Hj7dhrqq6nMSbB4Udhz2VBHn42xQF4S44v7RUDzM49dG6KbrpokYPQGLshE7Uqgqi19M5aNjqkhy",
  "key24": "65Fw16rYVq3vSe9LDvhiB3TWrnuHXbwaoZtCyG2Gu1fzo9t2mMoF8nWE2vv2JDeb4gzPAmauNQr6uGPRGq3UPeBf",
  "key25": "2wduURpBDqYRBvzkSmpEpc975DdGideFY4g1oyhbMi8gAyWwCYUU3BDvmjDzEdRjTZToMTL7R4PEJ93WEDs46gFC"
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
