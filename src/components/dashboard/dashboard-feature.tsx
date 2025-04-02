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
    "4rLsponU2KVV6gifjE2vypC499R7FWePbLRHscuMF1G62JNQ93yi1V99yVcHKxozP3GQ1FZKrUT7EBvooHAbFqZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fefnhusH1DMVqybWoPJASJw7ZMBSWDyMVMuvKxTveY1nCAF6bHfrkVTRSXj8Cp6TjZkRacLw4aRBdPLTNjqDQuJ",
  "key1": "qha8hhMEnGp9BSwjntqvUyzHSi3MvqhBG7jLYX9954yg6ajeh4HXVptiqtV8vWyNMtBVMaCZpiPAdTYjLfYXH2c",
  "key2": "3i6y1QyqQi9TS4QUGQ5TdqUEvC9kAAnCJycFjegw61Yiot816WGEncvgthPWRXw9s3MwUWJXFmcSCWnuqFHmEoEL",
  "key3": "4eTxZRLhndTvy74UJaaCazwDt7ggdpkd4CjCLGdk2JJQhgAmwW1XNPsfTRtYP2L6pXk1cpx5KZc9FPTwwg7DsNDz",
  "key4": "27zvKfJZirufB6GXnWdbpfJiLsK4U7LsLTpHFrEizQmAn6pYDK3FddJ2xXNhmuGzV6qPQvg7CCfXe16GPjwFXTpH",
  "key5": "3V8aoSYrc9ypDC1EA9sjB5pbxWs2TQajTsabv7GdJvdxps7Rvv976CU6jQxfZnRMcHVc5T9mKoQb1iYiQ1B6e6uM",
  "key6": "3gKe9u3puqKT1ojFkPPTzRGCEsXaCg1mVU6oxeAsQJwXD2zawZFNSoc1oLJYurLykCzKay9j1vV3KRV2jtgk1G6T",
  "key7": "2tU44X9rnMPNQyThjeARfoMbqeBAvJgBLmpMwcXB2Yy2w3TkxLmBZvWs94VKyqu9AtztJy4qnvfoYguuP7YjsB3T",
  "key8": "yLM9oJvwArtX2owJuuo8EMRUpZq4cLmU34PWSatedjGxXfmnaMj7wEqwprw8o5L5VNN9Rhvo7xF4Zq3zU8hYdy7",
  "key9": "2BeYWCEe2xYYZL1wL91zwsYGM8taFVyXHwHGJBo9GXN2abehpKJqe7gnv5CtfcZuMxD2eT8yUPzY8HiGeWsTYXpt",
  "key10": "2Vem42sujsgzAVxtYccpd6cLQegfYTM4ajFKCBY84YAhvALeC84EzZDZqRtvohuV1vkUjPhBwRxtpATTYukEpsp4",
  "key11": "5dRhpfiFbzkAo4kULGJAF5r2qtvmJujzYk2y6kE8SXDq9AxnkgtFGwgDCM3iFXkibamfLHX7QJExUfQA5yxfLQm",
  "key12": "2SiNMditPxSZ3Hj2zE3X51YYJomcYbqJ8jZefYdB3xvhGv4nuxYjRsv53pZWcUFpPKF2ekHQs83X6oPvy7EWKbPV",
  "key13": "6Z66s8iRV8u9d3ZPNoY5ft7D14XNuCbefVoys1TGFZTKM85gDvcK3b2eqVEaGXcK1f13duqZrgk97aKVftP4ZLo",
  "key14": "3Drbv2LnGAkLnGvcYrXwNor1kXkuad2y9NbXhdLjpMKajAqSiUJGA1KkrZNWJkZSCvuf8FeLAe6kqKFJ3UqY727P",
  "key15": "QwraUmTpiw9yJrdyNpXx2FA5b2NUUvrgpAGvR8ze57KpfBxAHfVc2KRM4M7WpGsUK6DKe2aJXUeF2wgthmQu92g",
  "key16": "2yDSkUbguvdMEYoMkuKPeKVYPa5oKk7hfUnCmLyWDXEiXc2pwxGkti3Li5KtLu929pzvdQ5kyJEm4vx6KYBnhQy2",
  "key17": "4rohULygPH2WA7S28XAQRDBcTDAbHAjd9kzXhoc2Qgwr3k5rwa8Ur18kRz5MLHgnoJ5FkfvFTkTmCGr6rRKJULQg",
  "key18": "3aFmqJwNapYFBadgZHu6yw4xTUp5efpq7yYgNMpWvbfkDJViVTg4ome83ucBtV6Cza82d3teoaT5aH8sAoX2L3mp",
  "key19": "5Rr2CCBfgw7ZMNAfNbcfqdpExSrA1zaNuHLmgFea69KBFHcWSYfAdw2ZTszbScNL7Xm98pF72LkXdKGJk8vskih5",
  "key20": "4odmeLuq1M2VXuQV6jQxSvqumFgLpK3dcMVR2HqT3op3fJWyfUFVVEVZdF7rcG7AWxiQQdRCFqZzGUj3Z6Ce2it2",
  "key21": "2L8ven49oHfqgYHJFXiAfHNFF2oMQv9kF6jvJ2cbBr4YezzVByjN5ucPhxjws3QnFgwWWgc29pG5fAneWH8uP8sg",
  "key22": "346ydNYdy9BJKyykcoKRearV7Mo2QPowL9us7AZZsiAyiR3Tn4AsTk5uqr48wykxpUHxmqnsmoStCNrTUDVrZsnj",
  "key23": "5jZ1uzzrysSzmwf1K1fDAKQzbm2NtwtfjV4WdBoYVQ2U18jB5tZQZS8rYoFZfH6GzshNowXoXCUo7dRExB9iAGpe",
  "key24": "4iC26ihfwLDgsRkqqx2jXspSBA9gzmcFFH6JpCowq1n7dCreYnsc1X3AmHvXPvu828BVLe3M5Y1WUd7tMBVsm9fs",
  "key25": "jzvXG25r7MxoLK9wu58dmp3JdtHYu86qzi9iFGZGNYr5fQxBH8pi8kLdoRpK4HoBbXp47N7W91Yt8JjqaDVSo6o",
  "key26": "3dgx713UUzDTY2jvemXpJVzsZwRmmRVD2Vzwhv1y8b58vxkssWYawCQG9tz7Dhj72QBVVUBm6fj8B2Jcwz43Y7mU",
  "key27": "3tX4GCy8RZg2crdk3bfJDrYTxJSq7xEjfbERYRa4p9DyVEhXP2AMKt5dcKhZs1fjZBx1t7e8c6GRPev73FEuit3y",
  "key28": "dPQMa3fbDLLvN7pRLpNgXy8JcpCh5ADeAsKLs3yq7rVYddXXv6Wz7rtVUmpMhyx2qLpdjQx9S19UpmVMHMtdF4h"
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
