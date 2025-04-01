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
    "3P8jhktTM8cwH3b4ctkqCLBcygdpZYr7JcVsnYiPJ11zNu1C9ihjbkG6VJ5yzUdixPBKnRDpZqZLYs3xDsqeASoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s8aiBjGZhSiQz2QnF23RZ4TchLwYzrDUjSnxtnfsSjNrVK9eMFdDcz2QAzNwHfzChEYPScPq2sMkqqEHnM6a2sr",
  "key1": "5jDNvnY33zFgBzALY1yG3LwkDi4K2LUkHDS8FbPV1HXWytdkv5JQsJLDo2483FqWDPnuZCjRoxApNbL9gyp8GHdi",
  "key2": "397sWHQaSbRBAVggUpmF3YaP3WWMhv5G9eAPPLGmt6xvcPEiU3vcctdwT4N3TAd7MVqAzdqum1maHstEhT8TVjFR",
  "key3": "41zKQDMJR39nT2M3BkY6oMGXET8bZXbxXrmgqatLTvxTqrdgXtyKPApDn4eEDNxLHjsNX8V7kA5ik7GY41exZVxi",
  "key4": "27uReBtkvjwS9XeQRy1JZvgDcQsb169FKJkow3t15iAoGSH5K7w16yK3HcFRHMGPgjgC6aiZi6QCMB3wzmug9KQ1",
  "key5": "66KiPwKWLVUieyjukRUuVn3eRh7jGLxpN2eYw8rQRzsmtBYTJHYvq4NBaJCfQLpUjaHF9KJPfQ1fZqgpPupru4Dz",
  "key6": "2dyE7rRgmxmRBRdrP5f3SH36d2GCHYA495Gn5MrmGG17RTvEWmK8PDGSgFp1UxxW8QCaes5BqVZFShtVYBNF7f1m",
  "key7": "3Z8cGz3iWHiw9NFvWZcLLVSSPVvbzmYeo8saNWSnPXEMjDTCaujTd4ELa4WGMFWPrN49eTiE1dX57sknrgpLVoJB",
  "key8": "27bh6P1q5R1SoeSGNgmH8bGG89Ha6kDMDf8fyLNzWdPJjTCiFkT6YXCbXaou6YM8rL4uKLWUEXXJ3fu8BAJajoTL",
  "key9": "2dVS2GTufXPsoRvCV9hAGbYwFTck4GXG6qM4AvkF3c3pP7VSzdYmJ1qYE8gahP8oHFrSEVKqQRvQUbbSCryqDPeE",
  "key10": "5LQd2WLrpNruD9cEekXAh87f4XhYpUX7T76yaMpc2DocH3yPXQ8mWuG3bvVvwcjEmVQdyUjfdEjCaK7uPnJDzXwR",
  "key11": "5kFUvnH7AjaA1YWLmVogDnRmeTpXyJJ9pV7S4P28Wva5X68BMmobvEmiE2XVi2m6HhKcGXbDM4Mmh7vyqgq1nftz",
  "key12": "3HEjvNU5Yk7PYKpr7fDTrPWoK9TVHqRcJTihZFjqDpXqPPEqR148pPzq1sSi6XyFBEqo9jfBSc3F8G5aLXFk3mCV",
  "key13": "ZnLjxre73Xeb7uNT9kRcoBJzVbAwNUNDEGEQXhFWvDPHxsqFHzmHSzGcyr5fguHq8svRHj413w6yw9jcdvgqsaM",
  "key14": "oJsmCgARyUewGAHDEXAgFyEnT1dsRaDL9531rdDbFWXt853DzTnAkiLyMqm59FMeVrdyfGLZ8d6dDiweauzhV6e",
  "key15": "2JA2YB47fTgdyL8Ypn1nF7dQWfRQomnh4timYU4FCt8eAhnn9tRtPaAMhP3dee3zT8SaEjSKRWfahP6cLBkCgjHG",
  "key16": "5aTDzq5F8JiNeTG4pJ7ZsCi99ybsMxVxafSjuFDj94a2FUJuGuJbWhJe7VrJEQxLNeYSVbx8k2VcGzm4xkVXNA37",
  "key17": "3hGF6NY3Cnf9iESbyJcmQovY89yFoZBNsLgfU212EWkNSft3zTrtnqoDn4oQ3oQGPHG1RHJaE6Z4Vty7w1VNws1D",
  "key18": "zhBZdtwCWddTt1Tf1jtWmEM8KffeAWyUjdNUBqCykuBGs2e88m2H1zyw2f2rHjVFY31PP58RAqs9gNwHTDczvpA",
  "key19": "3xU41mX1BssnhEm4bSaLP2bYm9MJRMuGT2RV9vK1rtS4j1h9PUTrrVVJSaeMqKADQfNVAcbZ8q6xV6s37FCqrsaw",
  "key20": "5fqPF2MPZhNY8NazP2DRnFT8anrFLXDNpaFJH6RZDxc2enmYxDcJgUE4VhVxPEyFpLHZoGo6W3HXSsT5TzjSfMeo",
  "key21": "52hMV1q2bGszsGRrcggR43SzzE9poasxFevBUf37orCZGmDK56A3AvAT1uVZm6pkiE5srnu5mzaUwm4SHuU3eC5j",
  "key22": "4g8TDtgPh5iChNmX3HdeVvjLQpi8CbTsqqkwyrivLWkxfqKjmVKej6gFHxdBsbcDf2yQQfsWMuVLfuK8P1eTiDtq",
  "key23": "HF8pXwLBSwxJs3aPErVEWJf8KVDTenPZyVYuNE5bUEKcTcSpxZ9ZYyhp4oYMsjxKotJ9S1hsnhMRpd8L2yGKvYN",
  "key24": "41q8ovZ3qqynQWcnUNeEr9PS2YRxGqnEBwi61f7FazuMCSLMJqjLGza9DoAPWaVCN1fdsR2QE5f8taWMq34nCqMk",
  "key25": "47gZZfdVJmCNzeTSQwUxCc13GvP2foyCbUp69HVB2C5Yte6ajHZExc5n8zGmGeTgpUtVTBf4PRyWkadBSmnJtEXB",
  "key26": "4FeyQaKPJzWfp7zBuZ1KsYoVg9KS7YvL96s1eckqNc3frkmAARdKYP3M3mt64k4wb3eiqVcwWS7uZqCwCK4y1wYv"
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
