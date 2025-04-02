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
    "mtKzxdi8CY6g8374DnJpBh5iezcLhMhYYSrk9f1GXbZXWcMo6Sh41r9tNew7Re8TPrNCS2EQbr8uJw7z6rkdmei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dkjimvNJ9kGX3Btyew2BSC2FW2551kL6Zqg3xHfcVDkK22sCVb61h5HPfyGFFABYkKuCcNEJHW7K3D4sTMYeddt",
  "key1": "4ogmCi768zC1xSNyLFeJdzSJjbStPguFNG8tkZ3HsNnsrGEZ8GSnQXLYLXxH3gwjq2Y3VX22QYDeB2n5feWVS1Z2",
  "key2": "fkNt5y9oMd57M65Zscw9svptNWWkTCFULEaWtfmqrcZxyviwMqx5gs9LvRBcGrwncGjdjW3HSBx9b2PXbiE2Dzm",
  "key3": "UVtfFMoGGvU5ULfwdWw3eEhEmAT5SfCpyk5Q1ZyRBduUaLZiTjPYSkbtmGVgmNe2LbuPbrjj7jK7Vu67pW7zDHq",
  "key4": "2oPprcqBYRVJ3mVRqHFhiFc6f2ZrLMojfryVk2Z18craEbLBqzefXuYUGkbqnBAfQZhei8z6av5fkWkGB68km8QX",
  "key5": "2BpM8GexFQGKZirQ56LJM1EHziNMtEgamtkXU7ECzAA9tJcFvT5jrVTTN9PgQcXa28gBA3mEEZBkwG1ZGzLZnr1s",
  "key6": "2tUkzh1LeKGRRijdM2sJ9tPx8GYhe3VnjRxwEmMb5K4ddZ1SVfw3YA44fEbhES89jsSUxc4qu1h1quU1ppwuM7Fm",
  "key7": "52qbsCCJjSHiSf3nkDN3UV4zo4qmMV57pcNbAqhXag6d1uhi1JR4fLsNNex3kcrbEmJjwKWSSP34UAnYdGkJ2oJQ",
  "key8": "3ASHF4rzhZ1czMqChCQPYjPExtY3L8p6323KdXHR29gRRkK5prpkJrzenhzFbAogDPXjfSJwHWp8zhDKSC9unePn",
  "key9": "39KviioysX6bpxGrHb2VGSZD8cTtDewNunowCLL4kqHtoAxuXgH9LtY5cDmyUJ6fdp8cDfuxHHFV6BugvL22pUYy",
  "key10": "5fLk5E298BqSBKawQg3mnJXbF3xqofPVcmBSHwqUbCtSufcZq1jKNP3ZPnPqhRDCoEtbXk3rdo1CzdTMouRSLBEj",
  "key11": "5tGRuAhJSYd1D36GPXqYkdmb3SxHevsSUn38wZJJJdFg7Z9poJx3fCy1hsuDnzmVSYzNnC1qu2ZqBaNdzXrXN1aG",
  "key12": "4CXtioBzfKxA34ifCJfXL1gbLFX5KhCisbo74kwoi2N2cEuGjCkakbDiVCRUZCTWTX1tcozeZQMxSzV36UzsFujw",
  "key13": "5sgrK9JRmmFCcMMBjXpmw3PsUKtfdxUr7DFJ4CsK1ygBiQ1GynC8F4FTj39Qfs97hu3nTbgMgvvy5TrAeQDcdB3j",
  "key14": "4SCWWnLXDdtrykBJ3owMiyYKW6pdh3Cp28MxPaQ6zBYo3e2ejxyXkdyeti4fgJ5M9XarnA5cpmAjPKotVXc8NrtW",
  "key15": "3eTztJJpBQmxPRpJZKty9jWHToMQni53NmSU9jSDaWNtt3xYHKAupn9ikDHMTzXdmrVNwBUgSe8YXXvrubaUGf4R",
  "key16": "2WD3yvQjT4qFXFWCMMNCcSaYwngbZ33rGDLTH9kQ6DjJqkfrtK9dPNsT3erM472GDgdV9gDAQGoCGRiZ5A8rAwoc",
  "key17": "5pqjdvsrVaQYe48vJATQwUMgpLEqoYabPLCuPL3QutSAyi5G2AzpQ2RizH2k1UeURoeLxjTRrKu66dUdcaxTEjiU",
  "key18": "5JRKFTYawMFB7qCwiVbAnNX7j2NcDYRjjQnEZtER5EdrPEvNef6wU3F5KgFBxJNeWypyz9Gc2io37YWhHnpAguxR",
  "key19": "53zMsLYJFozNVqtPsAoZPbyFHswbbaTazsq7iFzHJ3T62y4RkY8bAkZV8vRekFeBtX1VMWrmVDH27D8GbGsQgRie",
  "key20": "2NYGvtshQr5hEdP4jZQVG4MM2hzged7TX6snf84CK5tVmfHh3HiURWD71VskEf1wYL4AZPuVpdi6twR4g7Ngvq61",
  "key21": "41njeoCqsWucucGR7s8JsXpz5uqkQAWfhxb54MAffPTzvpCQkLAD7bvLn32iks8Y3pcgZbsLJz4mNf9KzTX3gqse",
  "key22": "37pWEU3eMjobguFbcu7P9U5C7JgbFQ7W6EWCGWqpNwnH5sC2gq7UF3XXAtxG7nXGYTD8Lxi9m7ADZD4oGMg6wab3",
  "key23": "5m1az1SQ3tTRaXfqNVFNExfjhD73nNeH3qJeK4oP85Ngrvme3tSz5z6AGLUGZcLsekXfN21rHbUafbZYd18F979j",
  "key24": "5Y8A8gVCoymDqqKMroKfTsrD4hCqDWDQvMQ3LvxKH37RPTu2DFKJEwJUVi7egFGwG4k1dWNaKXkFW5Yq6NHAgXZW",
  "key25": "4qqVRpneeX9eUXe1hmaTzpks122zRhQPWUYTt6F8bQvkWteqN2g1ezAsvPrVfFxu5v1JyxXE5Gr9qirj3QLYxZgX",
  "key26": "3g4mKPu86CmK7Cu7jLkDgfkSM3BkJLesxkJSbRvNAS766iSpqNncosd3TZBWNGZhRFYNtJYpD7Mz9JbEkfQHQEyR",
  "key27": "4UQ2eN9BemNgH8gvTkgnR7xujXYMc2hDnW5eg71Tk2Joot4wrTRnqW4Fa77XBoVGjztLohp2aisC3foBDgWFUXwg"
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
