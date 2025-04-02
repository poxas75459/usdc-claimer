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
    "4LULSjvPuC1iby7Xa3WFa8xbFEmAQZdFf9iZUTX5fuSLTTUucxmNYtFNf4ZQ9cF1uNdNU6tyKnpEc6dom1nrrDqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tb6GW8ujMcYGLBM4FFysVr2ASBgnQxiUN9EaC6oaNztyb5JjVQx1HusbUuipaHRea1nm6DEVkNNy9thrYebJ3fD",
  "key1": "5tQPgpesDx3Y1TJJus4uVRmL3Cnf4gpxUGHbs1RVSqNH7ETPVGKPCW1SLueFAmyYX89cnzpeNdFcY5wV2Was6zAh",
  "key2": "muw21kyHRVo6hzJAENbB9hNPWZmjtHzw35hzqnmWRw5ggfCfE9jrQNKCW4pQXvUTMHzQCUcuWPVBghFuZa2Pwbm",
  "key3": "32q8tvttRGXtQAwgEKPN7bJ3HqdQMT1cYU6KCnS7V6AXUuHSfEoTUn8TZLx84a48psF9uEJKPZZGK6ZHR5vcRmtM",
  "key4": "5g3XgP7heXooyS7eAsZ4XUKEhEd24vMWnaQFQuYSuHKdPQ2GtaZtq5cQEFUSEugLVnQvpj6fqSAp9v8fa1MLQtYp",
  "key5": "263mzs1WRfe4ddk5pKXgMThzqAFWcZpdZ9sdH91MTT372jWjWauUDaaqpZqnofJeYxGSo4fr9GXcwHn43MuTEF9X",
  "key6": "431tEEXiNatdZBvx6v1RESvtEKokTUHtNyShVxFrHHmibrStTut2fdG8AuVw6kvh7hNtNbTHDWNZxJrBBBTMp63F",
  "key7": "5XtBc3NDZRNkeLLoeQwjoHseARnpN5gJupNrb1Jfxjz1ebdZ2kWxYXmM6Q2xxaLqydVZEMsxQp9pocZXzyRCVf2j",
  "key8": "3cCvEELtUegn1JASSEDEXB2nygR6FxNXXYjHcoCSHgi7EPgxT3JYL6PQ31cGGfEmzrg6fDZmk2WYyJQfADZXyVZv",
  "key9": "34zLBarkgJ1x5EACbPaPZCDbYx7NyNLizcKgthS4ByVnWwET1Hst9m6XChfTKU8NaRTFhLCGE9JA6sszUNjoTkKe",
  "key10": "2UC4rESCFZ4qXTHGJrAtuaMUuZ3tA9FiFXwpTcy5V24X1BvtVnwLHRbvFKfvMfQb85b75ZZvQGaPzhwCJXChSCPs",
  "key11": "2PopigVFZs3HBT7dtjAFinKFrgNRtkjTvFRQuXutL3jGHhM5VmoQVZTQTbhAfKVtDzkaTsrYHb7uo4WfBTsyvWxr",
  "key12": "3Rx3eSythaXCxKG3LoiFAnvfojWf9xJGxwUh8bHBraxZR5eR7FJ5Ei8kTPsuHYcSf8gvLDoDFgdawZ7SibB8ugKd",
  "key13": "Rp29TCP14pqTW3Y4o6PEF3PoiFTxsgiKCyxGycZGemq4Nknf3CSzBdT6qNVAJR5p3PxLxTJJ3zDVePLmqLUCwTm",
  "key14": "3QaSECW2mFEHYfLkH5kxkjxtVneyVp91hX79XcYEAp3UwMBfeU3T3MDeNRQ2gzUydyJAzfY9D1UgQWF3id5edtJj",
  "key15": "ixaCDvFuVrCERfam4U1iPUNTCz7dyfQZK51qTXbRjrtQTZCjXDR3iAVFrKMcZq9asCA3DmwFTtv9To6JdpmweFk",
  "key16": "5hmJ6vrwejLw3McFdbju326GxoGcagQMsYP6wTpTZUmDhofb5vK5gT5CyrN9ndim6zjKz6KWqy5Ey8w6We8mdg3H",
  "key17": "ys2HvJpyMYTdJuZtCdyTqjh9wACkZ2PqENMUAbpgk15EaaYgg8YjyCXc6GCTNhJp7FzjQCKAmnFCodFTKvjtQyV",
  "key18": "2f5QdcXQBu5Qg1iRnwEwkRMMEaWsUrSUELkZpYtbz4yDGohf43Lt3t72pDMFBnQwqvdAYWMZWACrvV1ck7FhbW3v",
  "key19": "7WFH3hfoC7xfVzadMWoRqiDCFkHEqnA3Xe4gsKCySJrh7eTwek8rYDNoGGYnr3piSwRBWKB3tSyRwVCGZsy3KB2",
  "key20": "37y7jG7U7i5tjiqgg4qyBFU3uNj5Yh3u5Ph3yRJRR9pjSpmkbzfRzc2whviHEKDRHNYAyP1y91dqhFbLwurYsBim",
  "key21": "2NzH6ZrdB5DsDZpmvsQQKdkbytPqPDaMFyq9i4a1CUrt5HYmga45E7KV3Kd8BiaubjoCWJ1N9L9JaXXUo6KSJGnA",
  "key22": "5X4CHpcmckTpSkFZnPA5kioPcHEhrx8X4F4UFWMVr8otroh1Q9gaZH69QHiLrT6Tb3LvQcSvaEzApGfFYmkH8H5M",
  "key23": "54iVqjGwhsLh5CBNhwQF99GdRiYCa5YunSTPit5RXUcvSVS8bDC16Q6WfWqJmF9NzJbkeG6ytSZXALWJWpGqiRPx",
  "key24": "2nN1usxH9jQPT1GA216VVyXMLkjLynf782fVT4P5dxrdKbRWQmfiwc7LUZjv8pkLXP6WdK3HWjR1S6VFFoiqgjJ3",
  "key25": "x1mqrFKyQsKteL6wY5kHEJN9fokH3yBN6uSD2PyHGRsdJ8iEyLFrzYE5JewZj59Wvjsi1rii71RTi91kHgo6sFo",
  "key26": "aGPJa4rRP2LJGdQ6Z6AD4T91HMYWnYqNxSEhZaKdxWo2E38QAR4PCJvZZN8WUFCirtKRnSm7X8XdWbVKMFp6BLT"
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
