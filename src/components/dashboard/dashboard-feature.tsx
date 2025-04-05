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
    "2SUdHAP9RGLSnjCAF6Bb2PXyqJsC6wSh22zK4YpyXnCB6eXimjbd4hVzaemgBwyCN4umoxLmbhL1HoQB8vFa69Bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4axg3vf7DUESPzkk246EuzPHAfyPhpxg7UGMTJkYR3rncq4KuTNPQxzAcqutrvGwBWmY4Zn5m5KoLFmwUkxnW87b",
  "key1": "3KGWF8uXkjVG5AUefhLgvo3Vq3MwToPpfGRd8w6LiL4tk4pWNY95Cy6MH4NvPeKeQsLNGcFnTX3nCMuWrAdcaK9c",
  "key2": "2JvZSXi2kssbrA99KfWUxK3eZi6vcF5srtVkDGo27JgnAaJBuAxZYKTfWx1ZzfBVNjJZ5y1K2WshUREkN9rH3HXX",
  "key3": "48pFUweyFJKnmRJxZDP1BpqQ1wDubLkTbXSMSu4rTV8zVzfLHzRUSbgHr94T5y7YKhWZH1V4Tkfitw5vegFVHZZV",
  "key4": "4QCxgyB6BJczaAEzmVUPW7xiRU1U6JrodyDbTBCNoJn142yq8KDa7wHC99PKfGgdNzb32BbfAxYwUeY3uHUy7Cy",
  "key5": "kNkzrcgnsKhpcQ5rfMCjafdvFyjgLo8ZjfxYEtQcs8MyvmkNjF88N1SNrTbRM2n8TrLFiojamVFMn4tRENpgq6T",
  "key6": "46LPHyGD5wmq9WcBn1fBehjCAp1GM1fTjMcvu61ZXAQYQrpUESWNGsejageEvnEY7f7sXQFyCWduSRBNC3KZD1G2",
  "key7": "367uHrw2JQGjFzmeKemncxmLgW4wyzvwVJFJ4a91zxi5nJcUGj6AzG3zWwFXHPSi7NSCr8Gho792yxCwBm8Y2UUF",
  "key8": "5xorrxfXkzg4QbNLe3NrggngcCLTR5RS4s9fkz7pAsv7VyX8NbxT674CzZKhQnWgyRVZYQe1uYpvu8HeKhBxNC94",
  "key9": "4RDg2izLW1TPRq79dh5AfojFMadyqQH5jNhsHGA7eHgmBvpbhskFR5xrRoABHNPdCU8gTNxQa3GRiNYntm9a5oii",
  "key10": "39pyVHxThxZdMNrQ3NPCRAE2gDSHR5Mqq9q9iLPnSohTQYErkMYuEwUpLb4kMZ18wV49CmA4rt12JQwBtoUEvfdT",
  "key11": "5FNZa6VZvjvudG5gzMSndRAjU9NXAefgKgaQE3ZaNZfnVgDqdEeCHYSgMcgGZ7x8ZmDksXyY3RGUSQEv1J2hYV7E",
  "key12": "2dBRtKEC9DapY82vLfDGkmkfDevkyDsHE7q7DMye9D9ujs9Ph9PSajZje2sJy6LhFMEwFdZLGd2v5FrwFYEHWTux",
  "key13": "4ceWbn98162euJjmUe5avoFHJh5P5H64WFycKcg9ZdQEJe1wav8Xnq4BRuk2bJ2HEDj2Sy6igQ7jG24AZxiHJwzW",
  "key14": "46jQbTXKF5z2VAX4Hf4WVMS1ciwyKghjrETYUyj96dT6XXtmmEmPS9aHrFxJLaf3ArN3jfPDseZDSmcZd2mSdchc",
  "key15": "SSb7Qx5TWa83qXCq7u6TTHMJ8DCSTv7jPdN5V8RN4NqGpRdga2XUzr5iGFDV19UZnAmutFpCoPt3soWX8j8bDvt",
  "key16": "5SmHb7KJYiB7JfbFXzCrCsobPC7VyTBQqdaempxiwGT6zRby1yUM33UqsVEN8ETJSizWc5xT9hYFaZxx9sUABFVJ",
  "key17": "3RthHsq4JidCr4a8RKLMhh7ohmuwC1b5Zef31qZqSirRYry7xu4VkqxCnzghe6Uj1GfD2dmpM9sb6MoZotjetBUv",
  "key18": "5KCeTPE3fqyD7whdfaYbsMnMj5wMHUxzHaAmy1uYDkiaD3vjBHwUbPT8XP6mzV5WMMTMyponUxWG6vK1UF8ZcSaB",
  "key19": "57VbXSnnAWdjkrjfihovsa8cUbetCbhqvX6AyqE9gaEoVTvpVrDCCttaQpxJzZ9pDt27raHCeKzrPru6CLdKUwEw",
  "key20": "3TdLmkJcJsSVLbg95QWJZphsVTmnLVpwpAaX85zqcLNDZq9fsU8WxnkRFKuMEnkxwqTDNFMxeWADoqHGqeGqpVHs",
  "key21": "4bKKynu1bxdRd4KUtt2GFPz8uG2gUHyE7GJhwxbHCQP2nwy1gik2iL94dueVj3DWgvv3fZnu1zBmgJvMe4VrjQkS",
  "key22": "nURuwN6h3PSgcTov6kbvEcxe92SjtDwkhmckD8Xiah16VdcGzebHRvabUCwNYXMVFC7ShVsPunU9NJ6RPUsfeCK",
  "key23": "4nxXzu35HmK2tS9vb488jLP9fz63JS7fuA8LaKLahLVGQbcN4Qve566qzfzqQ27i4YCDwazZJaX2azNsd2tD8k4P",
  "key24": "3wX93RrgpRqy1sakHLN4CccVNGhSYDdbxv7ktaoH7anZUrmGXaAhQENWS8tJX1GEmaBsiEGiYoW6DzLbESfwfXRh",
  "key25": "3WKX2a3f9pz2CxQ1veTWXTwfPaq9u5tz2tePdpcWao4W4KFrLyu34ohRv2zcaPrn2ED1HHTvqvZXAWqLCHUeNxJN",
  "key26": "2AC3hEuu5BWU9YVzfkpNTrcY6ud1154QLAFbPFCmgBzSdbVGo6cAXr28d2rQ9rNF6wvt8FiuRHomw2LRBzvsmv3b"
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
