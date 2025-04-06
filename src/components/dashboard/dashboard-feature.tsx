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
    "2mJnyCNhxo3QhKipfiafdLsCpFi623jxGsNZ9e4W2RbbFGtX5q2MYRtHgoSraJCbLTvLnorYw1J3y8Sk8iJwsBQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pLGDhWQRufgkCxqjxkr9NGENbcXRPQNQTTyR1aEqvZJ1mHxAgCFxx3XjKZpJsqgkESbuE4yq3L23cigTU5gxb2e",
  "key1": "beNFCNfmFCPos7cnQFpNu1yS1cFAaTebbrhubTBsZuBN6auHsiy6TgXAwR7XwzMxofJ4HL5CzBJdRqjf5yNW2X6",
  "key2": "5zmKCgkntTpDwHtu8QeGZhnqdGyXNreQeem8vP4vCtPxEHPkYYj3cyig2ZoCkCaC9XPHxUp1zNEPrZQweUayenyN",
  "key3": "48xqZVtQsJ3gyADcufunKHQ1jxryktxp67wT44AWm6uJHZa8RQ49uGMu2K2Tvw66pmNJBpqKggY53HijVKsHrQdL",
  "key4": "2aF5Nni4mCgJoXSMougDanbYb54r792jVoFzEYWRZzhpsSKDEmCJc8vaZN3HG5nspCgan41yFzNccAjawtdZBQv9",
  "key5": "4JzXiiAQRJbbk8Egn4dXKfUzTmCbuhdJhJxpfKNU2pd7CheFzh1qdsTpPdTrjNh3hEzq9yvheQLujKVwqXo4Xakx",
  "key6": "2KWhUpxpEqd6ZieDkn1zscZmuuaNRYtPLYK2zNYSpvggpQgMvcDVsRFMJcA7z7cR6KixT8ggCxzPR7EHpxfRNREt",
  "key7": "Fz3PohxymhsaZzLV71WhCLUQzaLv2Y86bt2aKR3p6TE3GoE6iyJGnMVUXom6DHU4KpUQpwu6T9PVcGmU4Qof1VM",
  "key8": "5CGtqDo51eZaKzcZHQNNLaj6Lr3yR3xMNzGZf3zA5tdEmSrqn1RnxdoSko8H1aD9pw1Bwq4k65duXCP9HjEYADna",
  "key9": "2XS4Jxb5LtKayFtkij4BojjMACvct9uRf1zw1pEKDceAeGUo7MFmfcL8MG1aWVxFsNt5WuF9ZtB8BVSycz9sMzto",
  "key10": "4pa8iK9VerBK1czWNAebtBxBaNagge6xUHvHmJbkQWJ1MGocmqxuhqshg9TCDE9kVTw6kLVGG2E1985gos8ektLj",
  "key11": "2f57VNgfvrnMbTheqayyVi3abMuF7vfRhTD4ZjyP3QNT5qMUDLpHmGofJihExnJJCr1hJWcSYEqxEwiQRaMb7Qv2",
  "key12": "3fsfQqsXvM44zKHo5jbBFgVzYzMZGd3T2UeFgic5X8Xy1ihcm81kstb2mLkXCQKLof7K9jFwCau2KR5R8L2TDmtv",
  "key13": "3bywqZ4HMf8n32AbDFZtCyhGfYChN8gzwDr8gXATARNMD2gwDgUKXrySv47Ym5E6CzFL4srLv35ncVq8wnbSBPB7",
  "key14": "5r2uPW3jdUYut49sV7GZdg9bPFEY9W216Dm6sbEb6Pf35WefkTCHQgJwJqmYurY1q8PEi4orXHTWaK7s97Nx5h78",
  "key15": "2mPnEAPy4VfTimSx3gkzAVrz6bjKSXJEyv5rLYREAF1temyTtyVjsv1t9BuybwhEf7ib3y3N12k458qUq2DDF7C3",
  "key16": "4DV4Kv324qrzQr3cAqgdMtryNuRmmbWUqJF1Z2ohscQkDSJ5nbgKwsHpxnBh7feNwAFk2B6dBqPzNF9H8goneYRc",
  "key17": "4U7eAk3TutAvPUQDmmX1Luw5meubNQMaekktvL8RLnanhFPEF66aK76jBsrZATf5dRyEtAfMUZ8RiwSCSF6mR4PZ",
  "key18": "5gnS58HVJdgo7cqpoJ7f52NnCCofFovPmeonAgbHXNyyR1AYdufEU7eUTuFzvBpj1BKdLd8UnoLsu2DdScXmn1J6",
  "key19": "TU7yRJXRVt2AQkGAR1FT92A9X2YAdPv72F6aA3BjniQ2P6dJkjZ3b1P9ttuYNxvbn8mtsMSQZs5srrhdXkSkGvG",
  "key20": "6nFfpK1E1bXToMLz5FT8EyiBvo8ngJfR2gbvKU22yYE5GdZzH7ri8z94JFTJNJd7eeXCYx3vTPLeDv2k4ZAipnH",
  "key21": "KdeiZhCQZNiFD7V6uczUf1uz2n1DyW9Fpb5Shss8944Aqtqz5hayce3mRf1cwkAtdac8hPPLAyjh2kC9TnUpDvZ",
  "key22": "4v55LWqFbM6QKAZNfDgQoDLGr5yQ2REn9n6Jqknr5yH1Ze27A3BcWaBQY3KZeEYKF2LLVtZUeFLTNeKq1TeN3CiT",
  "key23": "28u5YRRbvU5AUMpUvWCRCnD7NYhAdsTR14bwyGiSeWTCe9y6EE11LiY3AcKitFxxtAtzgPgefJoWBLXSuinvHKK2",
  "key24": "5bncsPwy8k3VyU1uvd78dN89Bn824BDLhiGjg9sa45pFCRxuHVbfXTkA4M4f6MzVbTHULAs3H8S7Wq7LHNzrjyvj",
  "key25": "3oyajYx9g2DAfniFjGrpMVst12smuecKHyFe1GTZVxF4o2xDvy1Ss7CEPWBD267CtBHxdRYf9gGSQQ3d93ZZ6P3D",
  "key26": "4Crdh3MFqnq6PvPxcoJ9fAhCbXqaobWjsvwVGEVKucTMPsoWuuRU89FGodTgti7zLTehTCv9Y5EBJyWpYGnw4qnr",
  "key27": "2YnJCiFvRAaYYcstow7JPSEUePr65euKjNftqohHXchy2qqGXuu97svfKgbBnDDmRXXXvFqaW6PeTTjJR5zYQ9HA",
  "key28": "H19gaoWkgCCoZ7LHZ7UMbtubzwurk9AmaKAwtmD5ZY35pyke2mKtTYi2Grv1VzM6aHPyYe2WUQSqihTRjBZFyVM",
  "key29": "5ttZcFuL58gRMPe6NNQiUPuVF3KFUtKjbKZXewC3YddrnqYMcnRrtWgynoiPRYTNJpskWCC254nL1SrQjiUeWqCH",
  "key30": "2BVdkNphfBynMxdxDrRsxrbPWhiJqoPpL6K2uQUe2thiNfNX8iwX3XxRDAzDa6eYYaw5fGQEX3XohX1aAuTLshto",
  "key31": "XCf3CgbdbGnMcjcxgFk9nGo2rVUBKBvo9kC3V4dGT4AfegAPJWPYN8u8GNyAJVL9C423ER1hsSmLAV3E25yX2gL",
  "key32": "4Dfvj14gHgttj3mUiwLXEGpaK1REkZeR7atVkUHNKgAgj48qPXWdjJhYzEWsCMCBpSbgEH5AdgDBAqv7864Huy1a",
  "key33": "2tBxqdTQe8cPso3rS4dJRGd3oZagZSL7CytEw3frNndYKkRsgqnpA7hP1iK2HhvFayHqvnDmEUqFShghcyRYQUg1",
  "key34": "28sK5vpxxAeucHkV4K4R2hGjPJ7L3SzuRUXj9X67y5b3GnevBkz3WwJQA8HQjDVJ51mKx1qkx7QghsyRA82BwLqK",
  "key35": "5KffBm5HrCaS3AUmzSyRday77T3A17DG5Cxw82xH9tv4jaRniHVWCEeEPxBXwhdtFLTT7ua82GuNLgjjXqgSwb6F",
  "key36": "3Cfh4tckHR1SjRfB5BzAkZ5wdgpRiCWphnqgbaPvEMkTqkKGDTkVeBcqHigekCyb8XZTmLkZPr5JDvh5MM92seMa",
  "key37": "2cy7ThqhVouDJ3th1N5ZkRL2MnEwugH1WPBvhi42kwDxHmcgpgV4UniJtdcEmDo4ZEu9rd5NKpBhuwiQksqjpVZ4",
  "key38": "263y49HzJ74aVU1c723QzJ87czF36A69ewLPjR4dGJFHTgZzMVgPY8eE43T3WqxVtF9KZiAj43q2Qfe9q2JgmcKW",
  "key39": "5k5DtpCDGcRjf2yr6zZat6UrwzCp5Pz9V8W3qLU1MBr6VGwHc3GA4cQWcADDpRSjbCY8viGzsRXu84ruB9f8TJvW"
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
