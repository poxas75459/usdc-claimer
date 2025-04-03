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
    "4wAkyQeK84h4G77dM9ToRCmBj64Uuu88f5shF2uxBHxvEKvC2RmmRQsvGoSKDDbwx4GoYSF6KPdGKqtjrfKKCe7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gxRfF4Lbuzjq2iv9jc1etQTNqfVq7GB2fVGbcWZQUfnMn1e2KRJza3iyS1CY3XURpqTDw7PVGTxrs59Q9f3kp8h",
  "key1": "5HNgDzuZUq9fjW9cZuBkxkcFRWntoBtvA9CRYpTGKrNsEcKJAqKPMooNg2c9GtTpwjqSyViyGfBngGQzodMi4stV",
  "key2": "bX2AJg4brfsawh8nnx5n4BZjQzQBDFzmKdL2e1L4u2ZueLtVejFLJnPwuTJRzT7uz6VYsMy9HzkJn9ZXB7hNEhi",
  "key3": "4hihoiaQWhsDuhzkV71R7ixGNEHj96hoBG9eXVn9CUxY2SjxSsstYP1eopkfgsNokBuZWSoiSvnBrs3ixEnSsJqN",
  "key4": "NGFJBjUxQbjFcuXFiz2RqZ9aFZBa7BMHJe94WER6ATgaFSr86UMW7Escjc6vhhfdZtqCZcXasEk4RvM4rhXLd92",
  "key5": "2CqcvfTvaNYBY2uRaAhTpTbjHCfQ1WnNwBY8knTyiGxiCfR59iSAsU94aWjjWyBmkGtvQ8bXXK13zbpRVVBSvxiX",
  "key6": "4L684ZPxhYGSJ6qu9vSE6V63hLyBD2FfXn1ez1q9az7nVnux6YqC8n3JUDXnH6qtKb6FnhUWV3TtwcurXfVptnAU",
  "key7": "SLm8TPJ8juYRHzf12RQ3JG498AgZRhyWfzA2cKet5eyHqFXBco6XKGEvPm54VZEBQtBwTbfWvDeVRWZMTV5peiy",
  "key8": "5Mrfaob3wFxKE7Y8h2xqdxf9b7FpPX3UDSXEGQ46zbK84vrtKvseH384oHTGgXgE9N2UJQmQprK19AKi1RpKE1VD",
  "key9": "5FEHDmJM36Cx3b7ryyZqRYhon78c41hCVkfSNvY5JQTBxuF5isjTRAVt3mknZZF2qSYoxK2MT4o17JfL12hXacf2",
  "key10": "QPYkuACi7FpYBdNr23JoJxK5cMZ53WvFQJ2RNJ96yqdMUzrRT3WTsh9QpsiaHdHu6gJ7th4Bx2stVM9dxkNQoot",
  "key11": "1qHKos9usG9sv6Ke23rj63H4GPPPJTVrMnhTpXtZ4zsPTRpGyik5Q9Kfrw3nFBXSrbszMfRS2WTpkH2oCEw3MdR",
  "key12": "4wNn15DRUCpHqdT98e5ctiek3SWHyYxBtvRdtGyYhgAJPBjw2aViGrPm2eUwt6RRBUonKRH3qHgywqweADtuebXQ",
  "key13": "4yRL9owC1JH9L6A2n1TyEfCxFoLPJQ2jLLWvdy2cuZxiwc5cYS9FHYWXaCrcNucPJg4Sdcb7vrr8dRAoeDGcc9d7",
  "key14": "334Nd9EDpMqzmsUq1BdKH61LiwHRo1kMKgMofZLKPLrSwXhfwqUY83ugubeJqc2PLMc49ZBryrpzoHPmaX8a3iVF",
  "key15": "4ZhC46xgPSp4cQDrDaRFkgVe6gdTRW6SUcHHfcoyYSWkbytYKfx3QRh9vhbrVX7TWfo3fs8dAtxGkQq78noRh4v8",
  "key16": "4sKCbkREXKXWd3GQgDy7qpcUVHgnLdpPJD6dGLevxQecAYBXrf4x9LWRQZZ2GVNiCpFWvJVL96gQG8E2gT5fR71e",
  "key17": "3F7TkBt261SMbSeQphaNbazQbDGfcUJKc6scWvyWHSgAJt6sL9tJmE82mtH8qQknfKT3AHEST6wrMBw9Arky6nSJ",
  "key18": "CRf4YVQxYCogJPRqQPSsw2AxGSJ5BzCebESaXPUsR1na1uCWHQF6oaykrN5h2ntSkorzjrvi1V85uFdqkvUJL3m",
  "key19": "4yGGua2zyeTUizcTV1iZWyW97FoBW9tr94tdiwVmKhtSgqMPy3rjWUvBcXcPfFMQKjHRhj5pBww3hnrABsMyBxLr",
  "key20": "FnZtzAWx2nS7C1tufoDhiUQfDsJdH1YQMVPX5odFTQimzHnM5qV3rtRhxb2wvc4wpELKrKcVpkiQSm4wRheoD9Q",
  "key21": "3Tnfy5WKj1yuprrz566w2c9GgaQW79h1qXhuk3zShXXuahdYkTZmCJyvn3MRKr8MwDXScLgfNfoWQdxFRKjSSAmw",
  "key22": "2jqaBJs9wMUsBq9T6GPgn8YgGFyX4knTo5mnpjChFXCwTyQpzMN46i1DP593ibYmSgwBdwpwYbcntoZRnWf18T9r",
  "key23": "57zTWtGyKhUUTzH3qSv2QrBYj8ZvHgn8jioi8kejW49wSEtZbrqNLsadxVMjBrqZGxvpsUeho8r9cP3N45ZjWHwv",
  "key24": "4CCtYs8xq6DWejMyfwKzgyww4EY4nqqBHPdRiV6T958JWMPvNPYWbijZbNC6PTSvMYGDTx7iq4EnZYpZMKP4rDqd",
  "key25": "2cYuz5FSgeTxVwYSPPE5dK2TW8niAoQCbiYZ5m8ccKhjnA8XR2Bjz3pWG1RcSwYv3r4SaieEiq62NJt1yVbca3su",
  "key26": "26Y47P6o8bcMph5djcDdRMFyFDMTPtXSCB9tyAFsGdXMAU7RxvaCZrtbukPkE2swU3MwKB7cNCRjqWcmS3FHzqT5",
  "key27": "4niU6dioxGHjtysq8owysuwFpfQhwJcYX9UsKUYohh5VrQ8VRQmCGkVmF8b6v7PtRNdXwXQaZAM1gGstQ2sDWG3W",
  "key28": "WZjjmswbLG9rnuXbBGaPuXC4T9rx1UBn8tNadXUpfHEoHmBFhqkGm4qwHW1E5E3oHHk1EZjtVCucn42dmcZknCW",
  "key29": "34YxJGRmrWLPumozED3ntDnyvNm5qcWUBaHpmietbpThBrc3txaCHedQ1i46wWjHnNgz1A3fy13fva4H8Le5vUyM",
  "key30": "53g8ZYm8gMbXLDpQzePR7X5nysH1TodsVXzheLhn4qUed6RA4ksiWoRCRUtSpXPMg4Ne3tZxjMpSYLfyuWPTp8K4",
  "key31": "2yiN7at7dggvJbFBZtWHTUuyqiSakXYrrB8wMtoAbnDnroCBEaJiVB3ae6YvzwjfKqn45t3U58UpMWJW3LgUNaZY",
  "key32": "xmGk5yMTSHfKQjJczZc26DZiH6HvJPH5RuFCdjhXjow9t7v12BUnp75joWuybL9efNPt5cCDZfgwcuNfsuUx7ss",
  "key33": "vuLyBQWfebZNLBMBZb4Loe8U4SwxhwPtwtfo9XxNWUbHA8iYwzdqDa2rbLM1diSBLZrd8ygpxmvu8Lqype7bNbt",
  "key34": "5jTMSKq9bWUztZdpgeSbV5eCWpgzqRogFePVww5iDURz34QbrfrHGAfK4XRbkHLeZ5e9fhy6Lp97vCvHoHCtMjMS",
  "key35": "3M5TF3Q8WvejdNdboycDWkmevJVUzSVDXppKYi4jv2AFG3NpVmxJBjRcR9Ca44aDEACjYc9m9RiCjEDLZHivT3fQ",
  "key36": "3cV54w31QUixpuTQXhDstf48mEHoUEbdnD6Z6hHeNLne4z9QVVqgbrnFWZu4GUrSmbtxiuPHz2HU243iwdhmCkNo",
  "key37": "JGtRBJPfv5CGBAZ73DkAPDdmE3voRYkhiCGCuPV9NPp7JtaWqqPxiwCfTo16X7pLCJuqCLH4DiDFaun7rHkTsxz",
  "key38": "ofn4ErA8sU3fxE5xFA87cCCx5FEkvrC6yyebdsyt87rT5DjT82G2zSakobqbddZLotEDWBLthC1gjHTYZfPYu9M",
  "key39": "5vFh4E5t9TV92Mu3jssNd9cmGYoqS5Ky74znw2Wo4rwXe59HzRDxnn3e536hFQddwks7gtsXJGWATSHtKdtPfQiz",
  "key40": "3YzNxAUv9bfe3BNJqy5ftTVvqkxBSU7Wr97FRf8dTQAFYKtjsnB9HsyTooAASbCfbvNv85mXLxUZvMsD73c2nsym",
  "key41": "5DYVzPZWQrnA61qXj6h1ZKac8TKtEnxicu9VGNWW7hDcV4gzTKCfamH4biYYNyzdkMX6bBb2jovnL87D8PxgEwPz",
  "key42": "2Fs4wbp8ipy9Ms1WtsH3oysBGbmKJ23gpPrq9FtbYdudz37B9qB4ytTXDCGGRTGazf8QBtFjTPTSVLYcwi9A8Mfg",
  "key43": "4JQZ7d8ecL2aAsbpNeG99Gkxz7etejb4pUQPgvkxYMd1uJcFWbqGyJn4VS8fyLYoQfp13boxW5VHCtuWhH5B2Shk",
  "key44": "3xAXV2JXDXnvAsRBpPmZxmnyCTi1b5a2eAEX9DHzKzZf4xhsoj2YfrT6Uv9CpTw9QRSciVGuBVYJfdP2iGtVpsto",
  "key45": "4xFNhubhPSbjQwzNC7LWWPMvn86ba64YxPfYbWFFaosL5diN1m43xMQzhHSqbTRh9Fwwn4CuqcUSKbg663nsvKxw"
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
