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
    "3GB9zJE7aDzYGSH9PCw69VmbWVukRFxoNNHax6vJVLxhiq39NZyEMJZdkXNnm4ocP5zSkn9o5AU1HwAQBxDWwaQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62SPQkWPzW58C6BUyL5UjVvz4q4iKmg1gigFpQVVyB2bQrn1VfPeuPVGCQhVpcmcV3kKywatMhzw4mzF4yrCdiCE",
  "key1": "39L8FMZdJjaKEzDUti7jgrDb7pGYipLB7USjY36Y6EM1aXkcm5q5Pe17A1bDRQnY44U7pfW4MFwjbbo4bNpK4LjZ",
  "key2": "3ZTh3fapuzPfb4XxWEdvdLbxDjfmssWtKA3iqJq1tKucLst5ePUKMxpZRKncuGdTeZ2woPaJxp9t4VnyXAREsLPC",
  "key3": "5q2HDMkS6Jbbh3MiUxyKz1UWyVUHknCYGbSkzA3QZBr4dtooqMsgb4erx24zfFsiAJNQ7wTi7MkL2KNVk55ByKN7",
  "key4": "4F6tK3QcBE4zzProyZ7RZ64Tj6e3GMpNQiyod8YTtDwxWuqDSwGM1xU781yrdR5iHiFyj2YpCE6z2YiqfCCZjiBn",
  "key5": "yXBCcC2HW6V9vuuvPyw7YUTzYZeMTfDea81dUPH22WdotYFV27qLKK1HmvvP93GYxoEsJFNZ8ckteEufV38vD8x",
  "key6": "3uPpJs7ZQGPCCGuSSiiXDuegLscDeHJDky4zdDgL9hoCMvhyxKKw1B2cq5SkEb3GEhjwA6PDFQTkzDcSDwAgh32P",
  "key7": "ReBFYkPgBtUhTzrHeaYMzfgzYRANjT7QpT9dViqkwbyMTHoNeaYUxupMgJeXPZvPwfwYnJjLheLz4CtmMeqHhSk",
  "key8": "PG2hGSN8xLwKQaZZgPPCBeX1KGf8hZ7nX1ivAD6aQ4qLnm86rMNdS55jrszuNsr461Upp37pQehptpwSWGLEVSw",
  "key9": "8nSb3skWVDKpfo8r82bBcCV48ZWFcCSiNE4ZrLViFYtwWapfnBBpH2QJ1NDxjwdTizTavC7iUZDrVqJmzSMtxLH",
  "key10": "2HvT8JoGC2m4xhpdGR4pJE9qxSdyTtHc3JiH3ZpmCSN4TeP4uXuPwjMwhxEoTXAJU5WG8KsCR8jU7Fw93kN7PEid",
  "key11": "Cjwcxni3EhERpUbgHrZSXkhkCfzVb9Vn8Yhbyfpia2JFvn4oyB1U4YLDM9BMsVEaXqjoqfXfRykx4DWdWoeP9yj",
  "key12": "8DbtDgc8SDKZueYog57mbtYHBvmhLsbLwq22TjKqFCnhXkc4W35jNACvSLP2DKnn1pt3EQ2MxnFmZ3C18EAMxAx",
  "key13": "4cSqjkJyVRnGgJJ5WFt3WrvUeBmdmSsoqfNzKgk6B2paUDDERoJks5fLx3x5bjNMmGe7BjuwHnR8hvVmNWEt4iDf",
  "key14": "2kJgzNbefnwvtyybzUUCLBWpmQWhJ6saCQtyhZNJzfAwYYeNbETNsTxfUKEPMcyE3cmU1Y4xANkxVL4A7oY2TJYk",
  "key15": "58s3ZJwrd2A1vp7fuemkKCWK6vhmqpbin5LNUaWW3r8zLr9s73fvmtugC8n3MUuz4Y9yWP5DJ6AUB7AdrJcUjNUj",
  "key16": "5xToCa5DfQ3nQ3FesSV2yF4ydDtotkwZBmwZPPueNJkQNHyYHs3T5b4SZh2TGyA6PUb2Pkn2kciZ1HVW7JcfYoVi",
  "key17": "4zpfcsinRe1TWWA1VCGRLxCUjxztGWzE7GfSgCc7wgipkGGs8nKqKfNjtKTi2JVXuXyHKrD5EPYGopEsD7mzsahW",
  "key18": "4h66UEsQcX4dZLtMVqRDvmEDiwdMWH59dS4bbfLRPsdvCLYNME33wcC2JyWXSmnaTgAHuvMLbFgTDBwGHA9DjeCX",
  "key19": "FFgdbGNFkutXPcY4kKu9du3tw7wWfBcsBdH8DTDRd6F1dLeu1XDv7J9ogXfc46c5b4wrmfd9k3J6bzN9xhpEnMY",
  "key20": "3nqg9pN4KFhdvup9fsA8EYquyANMAqpwZiRqSqMotVcSZp4ziat12JtRteEXT46BwmmPxTnZqtXTU1thYfQUkK4u",
  "key21": "TZCxDWgmxR1M7CfgA4TFgxHqjacXGa8ve7QFkcykjagnraoBkf6HHkovERGDTA7EaTwxeWdw5zxgukbJXv8iBKQ",
  "key22": "5zEujGFn8FxanoRwJkYVEjV5t1VqT9mSk1LgzHU4aYfz5tWaMR47FrsuMJqPjZno3xPhK1SdSF5dhhQrhhMNzaGh",
  "key23": "2mjZofrJpc4VtfhN4aTHXoEeHozYU9MPEfzTpW9nRi8FrrUE14vo8oPbEPzDZN3MmZZ4tFbJ6Fh2wivMn3nKmUky",
  "key24": "SGGfV55jky9bJpYDDoYMPnWzftCQhGtPHFD4FUgjUfVbmdhQgeJCBhgKzmXekfHchsxxUtNBCzWBx3kLrb77ahJ",
  "key25": "CkgzYnqsPr78t5inZA3eL6Hcm9Z1uBoyHAVumJB2Z1Djt83sCzhfZmtWvsZ3m8NXWdJJK8TtQLDQcKPZPytAmvF",
  "key26": "5v59GrfxhsScBo1vVp3vGJafjkuHHtctRJ1TDxsYrBQpss36Ht7i5nPafdVDMJ9Xybpu3QVcVtGfGm1BJ8ojfV63",
  "key27": "3ErttvB2u2n2L4aFx7ffeM81rMCEG3KvM33o9cxq7gFyMEwuHpBvftJBPzswws667QgH8upMCKxhP2gi1wkD4ykj"
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
