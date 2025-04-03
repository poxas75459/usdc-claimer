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
    "4Fczt5vdJUi8rpfBSzE7kugcZG3AabwyuiAAqwLnUfvvWsAFwj8Kk9HZnw3uWnwE2Rnpn7ZWVufuVv5BSvf4iZxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wrKUt9EVCQqT1BGioJhSfc58mz6BxfGJ5TvhprceivajkJYFz4npU3FgE3KTvkh5jviPGyUqSDxvh5kuqvLm3k9",
  "key1": "oHamRP5yYschP8cbC1f5ZrCxWf8jhRRzaSCJC55W2sCuVyGVNEoaoam7BbVcrRfu6SN9M4hMhEvgJdnhjErj4oo",
  "key2": "2T6oQLuKm1KNLLespEREcR3Qs2mgdhPVHNx37u9Hw7G5zCB89Egk79CKXiecyy1rxptVA4YTC9vMkyj27ZsBvAPh",
  "key3": "f8eXtUB8A3mMGUJ2bmefJ8HAzE3BXxPUxDDUyv7iiwA1KBrLRy1NN3S2c2i7X2KH8doe9A75qAQ3jYSDvc5kCTU",
  "key4": "2oSoFDBhXWwHq7s2dZVGsyCwrSSjkQeZQty1smptY2PQWJQXpEV7QHq1XBGRi2ho6RQYuc9SxBrj9FHjkNUfgLdU",
  "key5": "55PVt5Tm2PwjhXAyKbcHGo5nwWsGhophcnbZWnNntLfF46Esik4HZddyYXCSH4WbEcZpwhExrLUdDmkGiyojkdxu",
  "key6": "3vbyUwNCqHsA6Tr19hcYCybbCwDJEqFwbRwiKMMqyb1fVyM6eeuJSN8V1xWioDnT5hQoQSfCyVGGyFWmLHjUVMmD",
  "key7": "3XXBpXQkpjBPUxscVfsRZjRND2GFUihsKrjaKbtdHeVMT1wcEfcTrkbrw52wNPpfgVeLUfzmH6EEfwjBq5fkMK6V",
  "key8": "3LcsecQ6vYEcxb8tZrSrn5AZ9JwqpgUcGUbfR8r9Va5zvMuzkw8awg4ncewZLeCio3q3hiWQrTdgvH868PXj5BNS",
  "key9": "4r2XB152wigSpZnnyv3zonoyZoBHccT5qjoK9utwDtyUyzJrVqGSpxsQXGrHbxV5SbghjsFL6UU3zvdmfauirzNT",
  "key10": "2hE2473JfftgMk95417SPEd95msM6NgYozW8mmCZKx6J6YFiFcdhJGwXNGodPHm9jofLuNSpkhj21mzMMRMakPfS",
  "key11": "5VWZHwkAnpBQ3XKvaRrZC6ViMruWgr272ErnhrWYUDc9MknJz6Ynd9RUNoPQ2zQX7vzPQDUiWDKQrdqviFxAq9ra",
  "key12": "23C3a1XGMKDFpWj1sY9aQKMjK5Yn2dbtCPR341PLd3crKiDFbwSqde8LLPnXkoo88wpc7e6VxhKXqHhtwAZQCMEB",
  "key13": "MtezyH6cHeaQ118TmswEJP9TWx2DMQpZtyYkaTGeBD6EkvRWzcHWf22MLFREe6KDN3wKgnXovorZt2YTsRztrv5",
  "key14": "3xUNMEYM94CwB83GAyhtpXhUVPUgWAtRkTK5FZdmr3Q4C45hQRCzTCZuMgnnp1vUYfs14MnqYFznGnEiEbotcS1P",
  "key15": "5XNwzvocs2SZoe6FGi76r9w3WkTPHP38TWUVLWXXajZBZo7sRf9cecHd2JQMCAkfE5XjhjsxveBAiArWAKh2VTGm",
  "key16": "3gLBMVYEkR2AcXe1uvirD6qUthC64wjPDY2qbUoWgJHC7Aw6oiRqgdwEMzqEUvUUuZQL6xrFTY8Z2VqS3ikZ42TF",
  "key17": "Nh9a5XwWVKjT7gL7je8trgiBiYu9EHZeKt1AEGsTJoLPs6GtFze8JoNhtzdinqMqpXAW8vZZ1Z9c4oMYJwi97a4",
  "key18": "5ticKmx7USRJi3xHZs8K2RmmxrXteqWicbW67FZ2GTSShbP7u89TrBF2YopmoShn1eVGYq5KKqyEL5WW7cEMfALx",
  "key19": "2L6cpKtB5ycD5bEGohYiM9CzH6yNCcx1qST1uUoQ7PycMJep9CqivsCvb2xTXgjDnZR4pXMLXMkJ8QpERySC5EGJ",
  "key20": "4kqyAPoHti5wx3rnBRZXz6GaN38KCTmJx4RLFkcvb8jCVeYgKbbCH9hfuniRkgFQL8svFnYQGw4imUFqci3SZmuv",
  "key21": "5goUXBZuGuuJdyoa6yEkSWbbp7NeLCN224reTv3nWhpg5Xi5bSGWAgi3YqN5C7zVYALAb6Ec1fzeiAEwSmweDqTx",
  "key22": "5upQQSGVwe2PVL9gyhuTum2VNdha8h6vp5HQbSY1Jet87aGyygPM2a1r5YGsHFMnb48Rb8sNYvSfumjMviSwJfSE",
  "key23": "55va8dqEe6SbtZ4kCU3puYcB3NNM944PBYgCxLsSsx2t3URp7iUpRvw89X2x73DcxjXRLqw17fidTsVCyDEqTgzZ",
  "key24": "2c8pdLU2uyuhmntdBTvkRWgHc2nqRi24wNqohcpLru8fKnXgB9HbVcJsKgZx9mBXrEh3Puc6YZVnBWirvJwmeSJD",
  "key25": "Ns8WaTK1d6mREQWbbQdi7tjVFk7D2eMkCGi7SnjRKpfLqFT5WN1fR7YUvcjRjQbDTW4pfxvMZ2bSD5G7zjMb6vY",
  "key26": "242y5KPkhEZRo6RNSe12BqBRiccg8XDCF8YVUUhN457JcsALWyNrdztU87qAcZbKFXZmXCvfMXMV7bZ22ExxU2M2",
  "key27": "iEet8LmR8eNqbB7xsLN1HgtoJCK9b5CDmKwNaEkkxa4JURgVj5Y9q4yxsGQJZJRTyinhTRpDdw9eYCAmqVqAJcW",
  "key28": "5uXLmijwPWdM4tgKGCCr6ivoR8QkGnfDnYNYS9qd6dWQjkM4SXzqL49nW8g15UtM856wfX5qhjZpjJ1diq9f37gw",
  "key29": "61TFn4NskqxNucgmpZayC5gkeBzdzMHpBfx6QRAhXEJU1hui4ih8Pf4nEExcWUDgVwykM8RViFTZwPjGiB1MnyWg",
  "key30": "6siBAdeeXcQRPgtdFpqjz4sHFbBWEpUvDXYeafYDMbQMdufHW6vGwpkMsr2hTLQLEw3Gi8gkAjrbddXhwupWaAs",
  "key31": "1S3SMc44wKngSATXmuqRn1rJKe4VMHSyVnDRTymTqejRKsFqD2owr6gjQwW89SDRwMfbu74YaDbNtCH5xEC3vCg",
  "key32": "5wmCJJa7LuFtJ8q4ATty6H4RVscLXMBmPUX77YyuU7ULNvrWuGKcroxzowzGVqWMtPv58zd6Hc5rT7TuiGfDGZCU",
  "key33": "4hWASbaQXo6W7xU4jvoLy9YY7UySoSm1i1Ab5h8S27EPPfRqDvb8BkjpxDg8nVgnpVASQa3npKMnFjMETYjCjaDd"
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
