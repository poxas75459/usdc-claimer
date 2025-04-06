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
    "3eWY4DzvayZSSbmf1EfbCUfdZumWcNonECk4PkM9kH2yzWaiRcDTdd8rTD5QW6Hd6Lhf29XG5Ux8ob4kcqeaKLZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VkPnf6Ex9KL9xQt2WzY1Lz6UjpeLNeW27GcM4ZX1EW6sDX5hukmwqntday5GzQ3CEx2gwU5apg1dyz9SP287TGk",
  "key1": "2qWfjYSvYzoWPZxqnp2dwtfYuhXRnxudCXXvgLegjBu7HkVzfkXdkV5K7RxZxPQ8U6uGNfaM7dqkYFBmJJADM9e2",
  "key2": "62tFGrEKRzu8xt1ddAjJeZRt1tv9MJSbbr9WAeGCdCgqH3otSqFZsUJNRaSAAtQHaRvk5fHeLreJsM67zWjh9Pit",
  "key3": "4mD8KmoZTvpg1TGPs6eFWpkmQU9UwB4aLVhT3vVcpWCG3hD9vRrHY7FSnfb52KsSHrXsb3X2VEdLd76Hxk4oLr6M",
  "key4": "4qLKWxfkFoqxST8frHyFrW3iH46FEZNKdmZewmn1FX3d9tqG9ehLRj6jVRu4qdHJqD7t8oJVJZpRJT2JUXRAURCv",
  "key5": "4sMjD77diMkrV1gB6JMxMiFxw6uuBuhLW7DE9JiJEiJy8Pas1eCVwEvKcXEJuY6BN6C7a1LNPrrnjXUM6h6wp2wc",
  "key6": "2YSqe2eFJZEJD74L44RaSUEaCZYUggfz8upL2pSsLFCEu39WoopmhQQwuheoZgZef2qXHxcU8NM31zV71Ur5QiAY",
  "key7": "23dCuQBbBRZHfJqPPAwKA3kks49StzLJjgC5N1SXjsfcx4FYGtthyLKHgTPWH4ZPzoAt4vCUJXU2TB46Dwdodd6L",
  "key8": "qigWYqVAwfP64JweAcBF1on1FoNERpqDSVXYgmViMfFxYWMEqeVXW4oGMT79PV9T2pYTXqHM1p4HW7pK36pXFTX",
  "key9": "Xk6ESBoUXYdZHHs1qk2VyrPx94R3Nie9D1AeeRjANSLNMmnnZcE7bGbaTC4ZnFGH9NkQmZuLkTSAHLERo4wkzXt",
  "key10": "NchfWEkAMZcnX5r6LLscvR9yz9ekzJwt1pY9zFpeKfWaHpUB4WXbJMMxQwTs22m1MgStZHDAR9Zy9gC83fHpk7o",
  "key11": "33cFK7M66P3U6H3tpTKna8ZazQxgUaZLj9uakxhwqCWRDwNdGJjQ1xi1UTs2fUqp1ogt5tHcwAcYF961JV8sppbh",
  "key12": "66EKGXsaztzoJf2rPE72L2eakbqhb381qyoanLgKGHjoJHcNnJEdGF73JsLbTbpKtp86JbebGEy8faGo8jVSawiC",
  "key13": "4MWJwr3txvbLrFMG1cpDr8tbxcwf7n3h4uBi6BF5LpFjYXxP5MGZY6NbyyAorVDVGVufK4e2cEhHjJTmqgXxu47P",
  "key14": "7R9azhz8YxmQFTHZmhMPmovuT9bsgoWJ1xyCxRiUCUQ95suCbzBgzyAeU1gPzx14MeBfMzT87ZNig5q7dXq6Yij",
  "key15": "ttGwEvEJVJVuHjf83sVAVv6GBeeL8RvqL1S3Y7fx1KPwS46C3ykNSYYrQvq3BaNX3TwJSdZgmu862VV9eW2zJpn",
  "key16": "TqZk2o6BxeZTjZwiomSrY4YgaGVn6YztYpmTBpyQESFSAkUQtjmMKi8dQwCkdFuWZYt59toTQ6TxVeoTvUML4AN",
  "key17": "3nRY51zw9h4tJXRies2tangyvde4YcWcga8auewiBqyVHvHYuqaGys8ceAhHzRRmCmBsmPtWKGAtcHDxtBZQkE6X",
  "key18": "3wmpZh5TznuoCfn89gePi46ENedE4LAYk1DrVbeqFQFaRTjVrz4ZgsDTxLqU179Saett2XD6RGMybnv2hFAVASBY",
  "key19": "5DyyH954Qa71yAdVcUvXxg7Yu85LEFse11qYed7Xf2nMTo9Eao3LuJjBgy1AmgLJHyXsjMkxuoZHoecywYRP756p",
  "key20": "AznJRKtLmmautEBntcVkZgp6DYcMFs9CgXta6zTwomeEKUwHdzLkuYrR4vYTgZ4xu2Qn876Rre5AVw26kbidJtW",
  "key21": "3ENEwNZaeV9rma262651s1pGj1BFwbnpxE71q2qo2M6YnpyvdQLRBK8eFSNMfshXh7K6X3RijH63y8dfsPiUhEnh",
  "key22": "3YMPbxfiYqMuPGx5rYL35Ga6QR5oPyQxBKRarRBeSGCWJnFFihiRz5wuconuTet29fA87rj2TCnmJcBYHQKMm2Xk",
  "key23": "49upX9qQLPKDS1Hy4pnYLjsDxmbrXmjjqB5y9e65uCvBwinzqwtSNR1E7NS8tNp6RoxCwSXnrJfuTZDL9jR5FUjW",
  "key24": "375gYkok3jM98Dh4rCgrzoeGhSB7LoZcbfr67wcCc7VbD1wGuiwXoEPbSMRwgCq5xQK5fmL6PYFRRnJTUJjfwUww",
  "key25": "5mV5TCz56a9esPrM8Xk9NofLNWduX25ZuGMHeB7DndxLG9xJ92SNBF8WfG3vMTb4gasfAkktNvLwkmoWmEaYtJSb",
  "key26": "3hwUtJ91314tnUzxABvbtZXuTAPJe7Nvyr7CLaxtyw2VK5cAaDVCj7YbNpE5gcdhrP8UVKKU6PJvbNfCMhSSqF8e"
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
