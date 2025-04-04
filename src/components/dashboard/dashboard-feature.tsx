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
    "5cTEY5tLeoKrfTaYp9wHH6LU2aeDVfkvpBxWofHDXzBQBGHUaiFdxL1GRPVdzX1tadXvJWvsC11bcAuQ4vuT4kHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RvmE8UFWPLLx9HeoGXGcuFbvT3MJTTpfK82XyTjLEApsqyXBbHnYeGNdUqEwEToZEkHbRXxaBtVdXjaorfUK9fz",
  "key1": "vZcixUuM26Uju9HHkohoeCosx6aEumWDPc4nQCfkn22kCCxyK36CTJiKo5QncErvcumoXzsqbANoSerKqqEzRvp",
  "key2": "4eaU9QgehPQG8vbGHWnUErG3RwxAtdUyNSQqNeQTMPpzqfVZ9UCFU2dprkoyGGBqhK8PpxUf2TZwfrfivrdcWkKx",
  "key3": "3msxxPZau3kH4LLyzQfeMqWUWipu3jVzBFSGRhUpnZziWUo2W4n5XAFQauWXHa8BaDQmbGrgBTYVzxpuN66YgJkH",
  "key4": "5ZJJKU1PiTcZkV9n8b75ZWYViftfJADNohvdU4jd1m2NFght8LWyzd4szkTqz11vGwAJW8Zqo3dhNgUVHCi18vDB",
  "key5": "dCzYjzWfrvHbj7q8nDmcGe5dsviEmth9iTvteXusbvYqRLRDb8JiLRzkS2T7Do57j7z6yawRuMqUCSzLkS3NnPQ",
  "key6": "3RU4gy8b9tWvvHbp7yvMKBnGCipepeDBKJC1d9VPqjuh8fJkPTKgMNhXZW7Gs8MUzkKPRZCj4TXhW6Q6SAL7E89i",
  "key7": "64yMYscRSxG5iStULo9Vz6E8h4kyJi6SFkjm3ATGvxMaKxDQaULrAFmTWaiVGnEC34ea5xNMhJA7FVB6NLYizTyC",
  "key8": "4zYpgZ6JWZqrkgEU3fRkk2w1mYunZwMxR7FijNAwcmTPfFk2yt8T21ExbXxRvKGqvU8ErjRusBycJwMj6mrjvwZn",
  "key9": "5PbY2k8GHqAHEbwRGpLjD4w2uBTvAdQ2M8UuTqr5LmQJrsZhLMdfwUr4MyhC88hWWr1trNz4mzXt1a7RDN9Wr93B",
  "key10": "2vZodmhcJAu41mczktuNexM1tVRksfX9NbCtWJytgjmTb9PMFfgKavGyDZkWbxPDXrsMK6CYneaduQJHyfyTTHqu",
  "key11": "3HtqMaq2iM6FkBk1RN1QNfPQkifjiWKzArYsXwAGLnVqpvzseCUrsSfg7pM8DK6Jcc9qBuQgW1cvw3hhUXoTh7Jg",
  "key12": "kWgdGJT8PnvzgjTj7fx1ZWcH7jRDTq6pPds4tNbKvt9gHeLityhbtU7B761Jp2oMo5GEZegLKGxgAykYx8V2rHD",
  "key13": "3aMSZXnpESux5ggChdWactacswjQD5aEkKYRdUFaDYPB4EpjcJriUXvjNxubqufGz9zRD3Aq86NjjPva8oUCHa3j",
  "key14": "24wP4obwS1g88fmVy9qL3XC7cD8c1BwcP1cs4s7P1Ck3dme294TpXf28pgw5rup5wEcmrxGtP5d7fByGbUJk2y7q",
  "key15": "48EBvPki9kYmZdqEAnzDYXEdHmaRvi8PLmrxNuRypzgN9RuezTr9gJSVsFuB9cEm7DDKntmBC67S83LD6vFqVKo1",
  "key16": "4fNUJTGs5GnNg4r69ZSFHcRBbCrDBhwGpgfm1zwT5BSjDPUgmBpPKbsJT4bhts8njek2rr386iRYwmYR3Hty9eSE",
  "key17": "EsM5RQHm1Tx1faSGJEk3N1wfpx1Puk9uXmwfjR1HnjxxQf4kDMLxTqVNimukpNNfVLuQiAA9RPRTvBBdpikCiBW",
  "key18": "4udKJxYbyMS7k9nSLshhTiFUW8SWrS68kxuum9kFCsNDz6GEQ4suwSWdDyBgw9MyjQbi1ET5JxxWfxZjupzAz65z",
  "key19": "2tWVHBocSR6xK9eFEiGPvxrksCHGSbBW9wFAy3XfzXqGfZVy6519qwHVBdgKqvahd83MUz87fQQ4CdCnfbqmCzuX",
  "key20": "4NjJgEW3HwPiCahdZzzyuoiyq4pBbLbaGpyhmb4aShyRywf1vVJMGhWbLGxQvCbrLd1ssi29UtzukLwk5WsrK8Mw",
  "key21": "4q2nfizGfNkmcYtkdd1tH6fybcWxbQkuX9Z6ZrdFmWdbHTmb8VnVKWCjrCeQ6WPUT2m9yViPfwYeEKfQZwCeFsSo",
  "key22": "B1w9345M7Qc3qbnJTB6EGazjpSkDC7Tx5BYZiS7w9ZizxVGiobEqb68A384urUKTruJboTTmPsN3cdFcDjkYLwA",
  "key23": "32LMQfrCcSRpprdHmGFuYdJ9kA1ggQq75hv6pDoA6ufsAoR8ASc5oeF5JBkcanuEYGZwiocTeKMAL6KyujnndRdH",
  "key24": "4C3CKcZyDzWZp1xqMipMwqRFNGph3tDsRXTmZqqLCgPFDshrY395u1gBZWhjp8fz5SztJ3keueZsf17PZQ7MjoPF",
  "key25": "2xEgs9t5m2wEeSMiLrpSJQU5bxqmux7iYoT9o8FySWYEfjNkUHzr6RCacc2SdCgZQURnEHEcCMBs1w8ccesjYa2q",
  "key26": "3akUhiQooUw6VsR9C5BPa6hkimH1Kzi3vmrA97WApCZq7eyRrY21VoivdXuKmNVAuGxxfqxREdLPtjEnPxZZWZpo",
  "key27": "2cnE3b2G8WZbrbpKbR16nnVNDf6pszdv955Xqdf3LUFAucJhcqL1TTUGXhoM9VMe7w1TJNSSZkip2uT2hdmWqYcG",
  "key28": "EYUebbLsBZCLFbhETTJFNGDFyzP6wWoViYsDiZXsEWXQ1jges2on7F3H3TKezcBtT5xtDwvqzpJZyh1MdZ8x9Lb",
  "key29": "33y6E5GEFKBFbtVcLwPSNnpT5KaTgfQ9FMtwBqG7tQRH1DCcr7DeftgL5jwREyQtSwc1KryUzZt7izWyyD5AjwR3",
  "key30": "3r4qKMynhsotqpLXdgtwoBajjeBPW8sjED7CtphNvhh36wWtYy9msBa5FwwWqoCk6F49AY3sGYpKwKrBZ7bsUhhx",
  "key31": "3kfAsrbsL6zepnCjPMkrQFxGiYJH9gYR9ipiwQv69VTQAMpiWzG2N9ggYa6aYLBPgxziMTmFPCnQ3AVskcXJ2Ckx"
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
