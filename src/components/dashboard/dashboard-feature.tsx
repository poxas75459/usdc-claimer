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
    "5AgskvhztwdwuDkyzYachRCEA1CKUSdfiwHBF5Evn4nQ5Xzn4MKq3VjksSosvJoPtvqR9zZeam9nihHfMMekCZLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ie5L4QxWiTLzYrDHobMZkgahCEXnxKV4rtq2VzyH1Cad66T8pBvkLZAerRwdeEEuvEc5mMkNB9KMydpGF7Lw4X3",
  "key1": "2aV2EhyfDpeZSx3Ge6GboskmjrStxdCzVZWzkAgLG7tndssNthiVY4kJJFVaWrf1VEySVgD2sLbLRnWr5RwfWCKC",
  "key2": "3dHxEVc8HXUhJPRXeKUyw3rhhc7yz53WMggbTMYLeC1n3Qd4w2KVvFNNDFGuM9ex9qKDtqy36ZSiCDdAjwZoar38",
  "key3": "3cFGuzfj7mWzwva4ycQgYvFDfHWddrAknmtAJbv1ZoZreLLPwBushxbjGoKnJgnba4feMWxpAm8giekfX4dduzz2",
  "key4": "cN1aKSruFpo9i1n7atzriDFiPeLARAAikkd1KH7tEwFNvdwZGb1fHviJ2dstMbMa969ZdjFAwvg2AHH6xJm4ZLz",
  "key5": "5qZxfGVPuAMJTGkfijb2kGEH4dfpQiVKfgJ1ANhGkug9VxzctcsxPaeShUrGWL9u6gx1aERWYXjtk9np9YJY91mv",
  "key6": "5Ly9GEzMeKaVUKCkGciwUKCjTu6wX8BbAUExGQcKV3ZF3eyjVK2K4YAXH3QKcFHf8MbP7aGFYocM6deTn81Ur589",
  "key7": "53vrg6sLjQDMhw3dNmQ7irQRTge3G7nMpp5JFjxTuKf7xT4FSLMcLm4fiKRa1MKRxP3c2hYf7SYgjSRPyLupHJa1",
  "key8": "4yDdFZaXBfPAaKThQCmuNEB4aJdqfm4gmPCvyrH3Rv4njorwscxa6TtxWsdV4SyVxa4B69YKCZCq4q7qebuH2KzG",
  "key9": "36vL3bd7JpeQqz47soMRqzJiiw6o4xaJj3VEP3FmRKGJdiUW7he5edofGePk9GE1g5gzYR1tFk9dWdiawMm2BdH6",
  "key10": "dTND2kQ32emR7iD9uT9qMNksH2zrcWxtoGaeBbowxkrdrvBP8HU9NKscaxFbKc9DrVLVTY1bWD3Vn2zXz6mdzq7",
  "key11": "iQ64qZgNUeAuNuUzpMbfLJRDTDLUC14F4sEBJ5GNKtP9otrAFw9E9231TXDhLjtaAgiu6zFfxS8gs26f4r6W5qP",
  "key12": "5t6LBiMDKNA61A1FhLGQgiHWSrEAgANCDUr5acxxUJxMqjEHsHEJcpH5dqC64rN4BuKpYsDdAJcuTg7GUshYUgja",
  "key13": "35TAwoZxJS6ZAiiUjejjr9TnaKXUE4pbLZo9KNfGxnVcG6ME5vWydhxveundSgrHeRgULLTTXsedQjhM3q5SghHV",
  "key14": "22pvYL5saA5rtYEdCAQx8Fq94P7nJy23U9bFsstUjeokszfiwfTPnRAdoRr9wKVbz5jEa1eVXohcVk9wRcqqjhQf",
  "key15": "3XwqFqh4TAinqUX5m9MHtY4oc463epuV25W7yLJaN4SNVPbv2tuv9EHFDQRHT8AmC3N9amkHQt3CwfAb9sbX1kdL",
  "key16": "2Qo8957uGnsi4iPa5Peb7NZJrCukiDuGrikgwZi36DsYFQ2fYcfw7PpZWipTFPKcL11NFh9apqYEMwjBBQkEVuUs",
  "key17": "4UxmFubWUW9iKneQhSpFqnzaUiTXtqMtYBSQbBpE4MiXeMWH8F7gBbC9hov8JfxTVac1kTA37Z3rPzoAEEbkjta6",
  "key18": "3R2TZLBLs6ft4WJvGZSftPWt3g9ST4SDVkdzxgQrSDgZFKGkatUE9tYQjHLfbkFxzzmR6dht4HzEWVBc1XW8F5dh",
  "key19": "4yfcUaaAPzDCNnPY2KG5hipm6Lc972H7xhHiXp7ePfjPxZJdK6m1LopT9zcqGgNBGnuieRVKsTY5sw5Y7bMimX3",
  "key20": "3NbiEDeRwxL387eGx2hxYGuaHx1j9qK9Zsx6Fdn3fS6uD5DXtXWGFZKTo8yhD9aWcB6iFdBzCJMbyJb27y9HGkWz",
  "key21": "5ZHvDzP1wxXLG3WbiV2VKrAjFWCNNrZd1FLFA7xtoWB1cuBPSgGcbMicsaaU2tsmXiwPKdFo8zFKVenkNFq5yH5k",
  "key22": "5RUuTds1zauPzFWD3uNLoSfBJUxzDfC1aXLMTUoCpuPXKDiJcURx37AixsbmDCi9hMrVqL19Mf5FD2iYgkjnjTWi",
  "key23": "41tUSJMV6HtzrdWMr3TUczKNXVBpQPDZ8HSNQkVaCCZ3qr44j5z5kL2KDv7g2ZHxc1yANNJMYgWtTNSPHs7HFBXn",
  "key24": "5q6sUvBMz66Yv59zwMPQoVQmyb4nu3kkKAkcYXrfJW2rtyKaJuR1adjofVp4DsbonUdoRVSkuxJJsbDsbW5CB9Mg",
  "key25": "5PpXwVEemLYz7HzCqTU1197vn8gCWNynTYe2Xp9UGGqbji88kszMZvhUkpBioQ2jzmAMhdgpxPt5crAPtAhzmRjR",
  "key26": "3hEUAf4XE8dnU7jR6aKcmSEAQscCubqpBkbbMs6B5trW4fkuBeav9nUdUmcqP62DqLDtBqM7Si2nBg1ugCP6V6Vs",
  "key27": "geiPTdguR1iMpymBSffuPXgDbHFz9G6rGxJpu8x9oWXnGEXzT75tzCugMrdQcJRtr5gLwHw44gXrTjvAE5BZyz1",
  "key28": "4Kxu8LYE36mjjChBVP124Bsw8yD8JGGEUpMmKEUwkxKWfMt9fHzK1bdWowz1r9RpiDshSUwWGN5P8r5Yb3sGGDi9",
  "key29": "xQmBGh7Yj1Y5D35i9APWrUVoqHYyGdV7hpEHWkEWh9Ecbi4AtJaTfDxqnGTgxrfnj6igMbPLjfHtZTwTz21qtDH",
  "key30": "3KxQFmwae1UbzviWEQVysUechN8WCyD4kQgX5HzuvuLTX7xMxGWSUSJbtYXqiCgZ54uLJLBFwZj8wXLTCjBS1Jtn",
  "key31": "5i2XF8V3CSCg1x33aLeZ3CLYDpPCP7jzNo3KFrVgKUMfPSsDyQToivR4oumE93oMij7v9ZuUK5qxayoYtHhBxZy2",
  "key32": "5Jr9ynqpiG2vzkam6G3q7uwW4H4wRNbNYo4xNweSzBsZLxUG91k4wpDxBMeMJDpssYiKSwAhmudVrdBWcv7XhCjY",
  "key33": "2sTbgivHyZf1ATzfoBN6DhYx65H5DUbU6NKftkuqmWy54qqHmZp9xqes6yMm7DkJHW4sZ2qu3QXqJcQsLAPn6TMn",
  "key34": "5Gfcd7uqPEEbVw2e2qVCUyWViSYVhQMhcM4fi9E9ZoregmLoNfjXsjEGkT7u5RmnJ5XSxaGDRENhrTfrHtnrtntD",
  "key35": "4LfpJxEHWhc4Be58wraccfjv7PZ3FqBDMFNwwqvKT2YX1g7vHWaZk5uz41rpUPY86EijYgy5FxmkqFUiwZpPf6on",
  "key36": "2waRX2T5MnPE1osSYDvmMeXKhB5XtaSehfNRcAncdUpAX14Ye7eLBSKPDhhUN47XXYaM6Xn2YCBgVmW65r5foVdr",
  "key37": "2wctx7QVCBP6BVDJWuADJLLiXwv95JRZP3JDhvpqjVrqjggtow1LZ4gkBUSUZ3RVtp7FdSUBW2A9AxMfiM2r2joH",
  "key38": "XPN196ZuZuViMx5AXXfWkTpuRiHfyzmk4AkYiRZg6mJDZg96Y6reMBb3cDyyjtrLvXQ41A117PynU1KULqNwdzW",
  "key39": "3deHMzkfjqEfDXc8Sk1vPdG62zDHkNT8nYd2X5StKr9xznfoQRbSpqXK8HYz3XcvEPNzWptqskfZVMP8qWNZFD1K",
  "key40": "2c5aifRnCbHwP67qvJHRBtgmp1QEHykBH2uTHhK4kmHj2kRcz6aY2xZjRmNkuW6dFx4XLWKdqbcayuhaJaZQ1KKr"
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
