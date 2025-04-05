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
    "2QRyeC2kBeX8wTCmVQ5uauqA3RFeV7kLxDZ33cEZJHeLYDBQUsRN1aLMRgQAXyg6id4MwkrM41VbzXLsfexuCKS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v8FA69NcDiR7uwNdJYxygXt4jG21DovDgWA2agfXm4kTg94aDvXCqFYcPY52SuMRN6WZvckB7hLxUt7kBSXbfGY",
  "key1": "2o7zqkPbinGCnFyUD3s7MuwJ3RAm8GEBzc2crftTLW3iRv486jQTQfmNxYNsTw9H1D8UryV5MJSaAd9Qp7ydFjFV",
  "key2": "3TC3eLjQhKAcPTc8fdfuMZTBSye7WkxLAehZh6RLKjFiLbePMxArWFcTBHa3G71vkNRvy8qTgSViEHo8XWzyWHdd",
  "key3": "4VbW256EL4rzvqrQafyvSCfeHznujP5Z2reKBvBxxGzh2RMpHoL5ZGyuz7yTKJRsWmtoFTfdT9sbdSD8zthb7buK",
  "key4": "3BqSqJtGYFWvFA4euDdsC5SbKpBe4cnYhXdjy6vwumrSL6VgkRVjYSHH7RpS9yXW5JbnYawwryzr56gHcKdA3wrC",
  "key5": "3Vh2KcfsPPCZpXs32Ca4haK2KNAjpgCZ8m6TJHeRGbmk8hkoCXCvkzcjpmasrVT6CEprUFZedfciE2SZuikhxTF5",
  "key6": "38TPeuK87rdB2qFQGo76xhw9s24m9tmdhzYKTe4DwPubKhJghyGXnnuQ4DGiGQGZ4H3yXLRZCQADyaZzPXPpspmB",
  "key7": "tyFgjhN8mpPfHZJB3jdox7yuCwNAJq83rx242MuNKdVMMAccQacGXfzQFbpUTom8BrqgCYNfcpvCNmtnrCKMMLh",
  "key8": "4EwWssQbs5kzUETttSjZFr97W4ktBwvWPnNoNcMBdn7sNmvJLuNmey4e8nUq7g6p9S1ikk2c8UzZbE566orr2gFf",
  "key9": "3YZK2a9HKV16RticVE1mMKZxEN4iecwWHkcPpPwQXaQfkWstEgULvyMvX9nxcaMEm6sCHzWFSwKvCyjhqLk1DXMJ",
  "key10": "3cRcuNM1ugXrYiSCx5fNAyE227oj3NmChyPoyrZcE7SWr6JYXi3oS2shAG1EYUrGu9FKGfHkmUUKjaWS84eWeyve",
  "key11": "5zK5q8RM7APWgnHeAtKdunXrqZqWVT62FeWQTBWZDHrphhgKrKe3ZT8hmnNXKDByzUf6DFPMkbLTaiwxV93Ym5Ly",
  "key12": "FF22nzbfhgDXuritdyoUaEJpm19abuYCtMzDLwEFM55d7soNeThvTBeNvtybpkgtAibJAAcWEa3qJSvFavsk8NZ",
  "key13": "47mg2dWh6FNGo9vTUnJNhH4Uia34cQd7vHJ9CF7FRjLAU3MYThrQN9cLh4u6x597z8u8cxi57ZstSy5UeR6qRCR",
  "key14": "4DHLYAc28Yr9Vkbsp2NVp2RvECfGiwBYH8DKZTuqR38mCSyR5HAxqMvc1HM5tX81moWvyTZEKAsNaKKaZwWK4pTB",
  "key15": "51jYPhGUiVX81DKXqAYEmDi76NLksRYF5nLLdL52tt9Fh9SbkSzyeauk1FxQA559bFwpMQ3RLuvPAjeMC1phsyVX",
  "key16": "36k482BWQqmeo4houVLBqHhF1MN5QeeW5yK6TG4VfWvKMboygKcAC39o372VN5eyDPfq4wPqEKVbBR3uDYEzpVKR",
  "key17": "4mTf1ks2LZyjQX28FHgGtDEbzio7yueartML6UzdmdY7DgsGjWjTHdqvV2Wz2k6mgZBb4BdBv9koGW7Kh5M67X9D",
  "key18": "5NHUnQG26V2aCt3RKhAyWfAjcQaW5AKEbRV7kU6pE5GBQEMLyu9madMibZtDRdEoKQcP3jrhMmpqY9EZT5nAXexE",
  "key19": "v2Qm2EDNxPYfgneURVLVReM8Nshm95oHAy6tCP1yerzuRjCJYjh4N1cYv2Kq49MvXYKgKo6qQqYaHyBXnM9ekJ6",
  "key20": "3T4M89t4KVYkdLrahcMNF5EhVV41fZ8egUWJsydDxfUiAXmMTRbawvEBkC4rUHL3emqRNFutct3oeRenUoPQ9wZ1",
  "key21": "C6FsoziHwADdJJZ9a5Uw7H3M3zZ7yukDBtKc3jXdPy3gmJ8ApKfFFXWnocUAMMgowbRtjSmzxDcGAG7V1oHoEgk",
  "key22": "2hFKRCQXAssFKjaUqnJJGmkhRr8Z4p7JvYyzmsyejVXadpPAET6DKwnJVN1o3xsgLCBYpXuh5fC7zqMbn6MEB8L8",
  "key23": "5MjNzB4zGCwXrwXaCtkEMwA6P6E82HoG6JCMf1r7mmS4BeKEK3eUHRMpfib6xyNbZbLUeKjMkhj3cApxXzjRzj26",
  "key24": "3E6wCoGHciXpqcztLszUHCaYdRCPYxvEoKCgBh8ks4JjcRJy7nzapMob7UKXwXh7YARiG6hPmQDBibJ5izCrHxDj",
  "key25": "4v1xi6FyshzdA62W3WSipHw19GXhHEyNa148kdGXGoFGtR6mAdSPKXCnR58WWRLL6nENBMRcah4SZQtA1WcdHPwg",
  "key26": "2vtwNcxSD6bt5kJ2ZSZSpok6RtQaUsq5ia836c3UFNiAM3AuqF2wd73ERhsuXacsTp8REh5jWmFEd3eMGarmtkvF",
  "key27": "5yQBKZafV5M9VcqzQrLYZKKYYRUHwiRskSVidbDPKcmrcd93Rv84JoE91kCJkwGFkLJ8zdKDPRCW2YRscmSg7rFT"
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
