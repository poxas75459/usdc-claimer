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
    "37Heyxc1oExEsDNP9Ut1K5JuSAN4sv8Z5xupdFLUtbhQ1U4opyFrGPvsYDFKP1QiKAXsovvRVGvteRj84K7Pxqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TabKykdDgZJL9QsvrZ5QnKeGpnA3ov7BqehKC9EMgmTWYYWWenSxxs3aBdfVjfZ983a7P7YafaPafrFRQBmsj4j",
  "key1": "5HrY27wsHjgCwbCk1yGTfV4Jej7VUfDcQzdnSjEyzGGLqBRVRd2dTfnqd9u314BhzRWDz5faidmUpsykJEG2cYTR",
  "key2": "4SN3waMZn3oH3VNTkEcbNmUfDTH5341EXYWyrwqCYUD6fF38Pvm8zqpzMMoBHRzuDygM6D4Rk7fwy7wxGFGV9ty4",
  "key3": "5KXzA5HsdPCPG4idw5h39JPTBZShHByVK5nufkGiJ14bqDXWGcAv34jKPWkZ8kE6HCQetEMm9pTLXQisfyd4XaaE",
  "key4": "2LFa7RxbcSQad9Rf5EKHBtsL1WtwB26RjMkXDeYfoakqSV4vKWLzeESedZvtfnCQ6xoV8BuxM9TeNEgDYM4viEo9",
  "key5": "MBZ9yE5QvNX9Z8epSdJd5zaUeuf896A5UzHU5iqUDqB5DEkRHGQPax2vpfS2EeozSJvUCdcGW9LGJANsBMLCbPE",
  "key6": "5cPiyj6XqKfkxNC1or5zjpw4ik1pcoPeJ3xZyLdteMMK4yhK3FW5K2wHCD5dkdCeD24g9SmHePQEvTBVc87Ao9Qx",
  "key7": "jJiUqoQJPE8tFJfoK9JYrJKoq8sfABppJGv3UZhR1Gjbayy7z9eMiBw1Q4rQKivh3MAYWFD9notBXzWRQixZkU8",
  "key8": "3NT1YvXhcmX6TE7Ftug7fKBP3WH9irdJoRaaZqrfLUG4DC5F4BNkng39Sa6eJHQ4UxQfcDUvwQKmPcGjE2yfXuce",
  "key9": "3FNTz7TD5pzZ4oXo42QPnSbjTu51UQDzjbsk3TYDNKQrwcF5X5U7RfaQSgDqrxiGoz1YfkJ5MuEe5rGCDxWvdFRp",
  "key10": "8oTf5Ac2MPsHVh1HJEDFPTTcrJvn4S2NDc1mq2gvFoLxcxAHNf75e19953Fjb4DWCQZv2cePqRNbUKoHajL5jLV",
  "key11": "2kLNt6ZEXB3B58HByLLDCCKeuqSQconMb7AoSD57nZifzSq5M7MowEbQe3gbmPCAXYbU6K5QFZy536MBz58XxP8b",
  "key12": "35qCcdBstw7xqociY9dJ8hFXTVMdo1bWQWFRCj1QhoHTbeZRcYaUVVyCT4vhfQqMePNbcYLj6f9LmXipxuu45v9Q",
  "key13": "5bSk76Uz64tLXTnPFtGLy7QHdBSnVWyF6xFzMQiTbQ6okSQDLfeik3ni8J4Jfz3dA9P8UHzpW97eQf2Qsa9iiaXd",
  "key14": "5huEgoQ3pPei5BvHDxNAaCcsipNATXLcuy2xAFpoqKXi3nppyHkFH8AmqjdKPzPp53iQP5irGmy97Zf3TfKKeA4Y",
  "key15": "5Mn1YhEPacxZxUmgzfvaCj8WeUNuoX8FEybEZGx8BxWkwfYUykqSPdiJsHNCfpviPFhcmy7CU44KdkSZtsb22jJN",
  "key16": "3iBs7jrFjXH7kqrcoSy8o4pVdRtxgskqgxgPZX1Ag8JsJ3frtVaPFYaU7PCSAHundt5KsJJnWpT8d2oXmiPKesjE",
  "key17": "2uTp5k622ePxQwTp6NF3YP4kukbBoZ2zuAs2e3ZiX5KNEjupD33XSVcoZdNjWp5rPkPh6UGADPiDgAo31J31j13A",
  "key18": "67nyFShqSr5VA45PZwJ4Yiy33T3iXTypQTZSG8NiK2QURW82EaQ8USLtyEN2NYigEjvRPcfoUtbmH3pt8PVuERP4",
  "key19": "5yr3g8NkWFPrhdDYfd785tNigxeT4qgJcs7teWE4Xk774bg3iwGUxJo876oEV1FRxb5fgJBwaEfkxvn2hXbCumRX",
  "key20": "2EynhQpx5YSKkk1iWnorJ8dK1yGx57iRCi2XEYNUByLeS35QRtnFBRPRwHyctq8wZ1G6B8n6oYxSrMesf8dNvVTC",
  "key21": "48AzT3Bp1HF4pMNoUz1BSDLG9mUE6ZnP2v2hDG1t97jtQ2WmRgSMrv3QXw9uqfbVwj3XGpgRFmYDPjsWovVvnWEe",
  "key22": "QZxhfCEQcAAWE6b8zr1XmAJVUueZYePjP7RbHEpHF8aiAXSQEUDFtTujNdhSqFpjadkoC4SE9bDbRvvQQ6L1WKf",
  "key23": "VizYKURF9Ebhod3Tmfs7shWe5Lt2K2qDqnMrBYJZdjULSFkViPGhUWSEhVpYFbRvepuGNa6yWhnxSA2tfjeQyra",
  "key24": "4oNgzuuQwdrdnLR11D58NWCyauNYjS1bfAb8vpUJrNDpYcZNevRVQfKRadkoVEvufbuMeZybywDbCSbP1cyJ2PQ5",
  "key25": "2dFqEwAYuj4YvwQ3Qiba5Tqzj9w5oaQwjXDrf9J4X2FUtH2EssmQuP4ZBdNzNt5JB2oZY2CsBS5wAtPNf17nswqd",
  "key26": "5DJGYkzC3Y5RiChieLSFhjTLUZNfvVT1V34tyC26ctXBz4eUfcHTXsg5puwZfc5irzYfrqfA2u7r2zP4yPpeursx",
  "key27": "5qTxTiERGLhCftmY5HVg1TsLN16zfu32ozbJRmSRAkNxKGe7jGb6xoicdqDcsuejG7WsCWGU14yGYMmCTy597EGc",
  "key28": "62Dqw4oCnUdjHTw6s3CJTDci8pfky3jmsVsRRFf9wdzUNBjwyLgu2jJMovcbQrb74P64MS8uVFPq8vqttjoRLeVY"
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
