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
    "GRMqJW62mahUzSKP4jAeVQ4HwCkWxmoqpq7xCBkY3Cg81NW4bg6d65s6af5wHtEHGiuE1xocVs2GN674TBxww9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XRHCTHiit2Pziifxn6nFyQgaGKSa5dXkwkwSUBp2LXZg4sBPKYS58DnZy7p3s1oT6CxMpKT6JF3Fx6rrwQvT7E2",
  "key1": "2p5Sz2ubqqaAuNmHnegDYeVAd3KNmcxkDE2ztq31at7Q4NsqCsqcNxgBxKrxYwVMAAbF43yqeMjwwdXinWnbnB11",
  "key2": "5C6T5eR2FjTHf3P4ppjAQncmcRBig3sfdZ88ZVwL1R9V3E5KzzFrSYmAP4umdRhZeA5SuNGi7vXDDnyqpZ753Wcw",
  "key3": "4riaQ2BQbgz5CyDB3W3FdmfdfBuQGPYJta3RQFNfGjSviMbVXCfTLvF8qzbf6ZkDKwG6xoxCWX6rSKq7rTnBZzQJ",
  "key4": "4nWSBeeZMqbAhSsrjuH59ezwXvrC6uD23WkXDjuXsCA6mC55oN9NruhYQNoxRxw6KRcrLeyA9UxpEARpDAUyXRB1",
  "key5": "9aqBCDi9JmQ37Ccz1QxQDdFAMZd1BXoKuvqCYfR6TVUF1TA8DGwoHecJsFKj1SzYQvG4K9hoJ96PPXRywAoSaFF",
  "key6": "3JqQcPSDEov5V3XohyZckUJy6jfPe1CkKtNB4jSKrs28dFqQm2DZ6BgLP3EqErosU4W7YAyd2AcxQdkRD32z6YCy",
  "key7": "BVCmnzV1131EeStJHDcToQnJLeV4cFT7H69QMJLfZLDSYLQbCXk1WgJbX1uRrdaLCpXyPCsbmVNk4paDwQfeXN4",
  "key8": "4ntupdn7xgLVMTNnf6M6PZJnkZ14s8qMoFnPLUt33CE4SpLjoqcVSafyh6PAKsG6Cgmv72sBj9Nue7tbLn4MVHwB",
  "key9": "5qd84A4LLNpoRPWbcitEVA5kLmKryiQGrqsrD5nMRCHUVfPjL6E9FbEtVCJjUARUbPg958h6EvUxUYjVGM8CSroZ",
  "key10": "4e7GtkEcPJMcd7R2FVGUseN2pTgQ6fNNSi3rqJ979nH8YEGQkeaaMARsyvTjySjLDH3CdXHqXXb3ndUFFkmVhY1j",
  "key11": "D2JzN1uRKXtZ6hqBgBCsfL15VXkD8qwNkwCAvvY21LBBFePFTvAFfRi6uuSuYmqpB7MUKHh6m5H7NKXs9WFXbGb",
  "key12": "457vhQJLQZPHR2K5vqKeg9aWrfNYXH6YZ2WSSuV2EwjfYSviBb2aZJM3aVsQVQBuLa7YQ2Unt9Vkt2dnPYXrYany",
  "key13": "2n57Mih59h3J3LwQQyZJP8D3eUH5VrBjwqtBe2g1rkTRMCLrkXBbnxXMZ6aXS1jJtEbp6TXcWFczMT8fYqCcc7NW",
  "key14": "54HofnXSZQFcFxLg3LsiZZ12TGGgsaPAsxmxNk2X3U3ogQobBK6e8gBq7DroraHQg3UnHNizGxkp8AZcGqskcNpH",
  "key15": "4sTDpHFKeMpULYZFJbS941XBGcJv2DMouuJFos4tUXuXgrjLSD4y26gxDYcecBVzB2qqw2WBkemFAHsMoFJNhcrf",
  "key16": "3zAVibtvA5trvxyqFUafLs3j8YisTPuvgRuy3DnW1rpdxFJz5iyKvBRRtDi9b4nFZYqfbXMYAUxAfinkeobAhxpg",
  "key17": "59FzSoEZWKApjZquEWVURik82oNCBTYGVnBbMhSyKuaUcwzpQjHfGJSTZs2MoUkULR2phjkzvsVF25oX8GPrYS8V",
  "key18": "5FRWbvp1j3pEAryHgNzfKZCenxGnCYigmxRAzKa5tiJdcH8RF64uxEez8X76MtvRYLssnMNvu6NUvvENvucvuCLc",
  "key19": "nGRTJDsebiJubGNeRaEVPGDU2hudVELvV3EpaQGRVvyAxZ3VPaa1WMdJCyUD1cJBMes7gPu669yA9WYoqEEfvAq",
  "key20": "33HMchmJu34qKrZrM522GwqLqLkJqBCEWCGKBc3162AypyrrmZUoKP9U3tcTmcwoRgtusccqDuGnAGhNb19mMQy2",
  "key21": "2oFgLmd8fvnvprtkoSTpx2c7xkdwQW1exi1GT2BNNMUFsUfGAZDxtuqEKapfJUuKNkHCuTcaAtep9GFcMm1UUn3Z",
  "key22": "4bHL7hHhYfRRewcZAhDti5b3kW51T7YRuBEdc7PdjTEdzvHJvvxRmtwCDeAG9hiBQzV9baJqtYUBYt3cnKGBRST8",
  "key23": "GrSvFLk4vfj8qnNoE6SVxD5NW6iU7bkC9dTnnt32CcTy78H33TF7XgsvATfAtxbYrNWGWrPT6G92W85oTQgt2zq",
  "key24": "2XnAwaiVBCmdc1Kbp6VT373CWGwT5wAjf3qYEhScy9mPZVXLRjD17Gtfwh3cFK3iRozBVyECpD9dcjSXm7xV2Ret",
  "key25": "xWQC8WnA5nNYfxLXWPgKjfzHLzdw1BrJsm8TcM8DGRinnvUcwuvq3M6tnJJiSdNBGpaX132aAsN8Fv3M8S5XEb1",
  "key26": "33m6mHVWfvq4yzU6DRXgfubZxWRDmh8JNudNU5aZjEzLzuwqBVzbGDkBxQzbnJkbMJmW53SUJafrMqkAQ2RFnLoN",
  "key27": "2h4zXA8KXqv1nk69dLpU1UgeZEBxbnbTQTFkniwFAPEjXHWWQzp21zq2TpoXABFVe8AtwN3htvBh7fjAs5web1sE",
  "key28": "rmSxoSgFE3LZfBt9NEJthCyufbn1Qw2ayTax2zRgnx6advQNHVtibsf3TTVGZQbk6cXf2DwAyGSbfKMtsPkPvHT",
  "key29": "3CYsEsJJssqYEPs6g8LkAYD7BnZLqqoWS7P4X8LCH8whHkeXToVnkwD4MetA9Rs9PNYTNGCneBTaoaeRk1BqDgn5"
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
