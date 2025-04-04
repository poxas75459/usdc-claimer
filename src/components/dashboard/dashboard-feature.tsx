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
    "2xS9nGywDdFwHoXvcbkhKhU1gDKaYH3g546kZhYZHsFQqM4VjmeCS471K5D4eQdWyGz9Wqb87Xp1YpjFudoL2oDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jbx4Aq9yv7abFfBpc6obyNXFUq22YJvULJz4H2c7RX4gy6xsVxVJpnhTHBtoCSKS7Gg3NMYtaB2VoD6LCoHoQZo",
  "key1": "5c6JnL59oFacqbitdVhAZRvho3gWWWrkvs2MFbdttHj1BLFiMVDCuA7gwECacojM8qp2TzNfiAfC7HCCGZkazLnL",
  "key2": "2VhabsqVVYXbchSj1ErECqffDfHuM8YK6YcJHxLoSHTAFV5YDwfXSmma5GYV2nMkT3GfYdB9bQqGAt9ZZWdNuuyP",
  "key3": "4bZtKLmryQKSPLVyYDazFA8xhDaUxd5Pay2rVkBcVvx9V8PTarWUNjHJupCJy6XCoJYsnoSc3QfcaV3HridZWofa",
  "key4": "32KBqa1Zo4CsAz9WyB7fySLJ2NvofL7VnjrmPXFD6PwurK4cHkyM4Mo8t6sz3oisn83W5eqQSWhjfKaUx6hGj5aa",
  "key5": "4pJnYfbByvr1yBLSdNe7ofLZmnb6HKuaSAAPM544327Ls46XfhvhKJ3MbU9KE6wrzYfigyVMCifaAiJz3xKjWR8K",
  "key6": "9DJrS7MpEgnxzutx3nY4frCUSYMAUwBXyT9ZKZ8GYDvuFZa2GBUcez9hc6uPHtrVRufMYAjFVZ9agJxnLyeH8Ba",
  "key7": "4eVLYH2cPCVFJ6jdEofZqn2L82U2uR3pLP4q9YZVkjSz3YhxKqbMkMaqjqyh6kaFNfkw8UUcimCaQTP5MLKrtHMz",
  "key8": "2UnNvWkp8ZJ3bewxx7e6xAXqE51jg1bhco4dXmsS461zH4U4KJJKNK9H3Py25NJvwWQSHbDkfLTp4oF6vdGKjG6E",
  "key9": "3Mj9ixf92dQZjAtSEySMqDxdQmd7QtFh9pYAy2bc52AGgfZMJmZuzHamjqS3FaZTGoBMugQgfP5CTugiuwTGcj7Y",
  "key10": "2EC9NaYkXFRBbFtmUt7f8SaW27JR6M1CNew6s8DU7oX9xpAGexGj9KeXRPBzkcpsrd5Pp3ASAQw7uenvHRt2ysci",
  "key11": "4qSLN28DiAZnHzonAseWRnWe9zYYuVQNsdAyJAXSoCbWK8rkQHw1KpuiSrhuUaSEhwaqBr2V8Bp5s2UkYYkW9SsF",
  "key12": "qvDmyvNKjzGCToDsZRniHnzFtSebaEDt3uDfST2UbqKYzzfgyxQ6awnehr52oD3KamJFDkF8WTwWj9nW1qG4Et3",
  "key13": "3L7VZtLARRjWKXinQ6RZZK3GScVFLnaFTNnMruuGqgYufGqm2A8gW9Tehgx9mBY4HkJ59R3qrrF7CpRtufdTeU1R",
  "key14": "Rx5vm5UHGkmUaV3C5obLZ6pgERiqHpTDQ3DvtoUfCVf6MkHiK2XLD6LTNA7iFpnqmZT3TEhdSEYfgGrG4WniXQh",
  "key15": "62zrT2avAGL2HP8SPG25HqWcgbyzG3fvAC1H52N9DgrqFH9JgdHFAfYs2FrNrdnAkGVadgqdmkm9YXb9Axd83q8c",
  "key16": "2MpVcjSw9YesQFuwiA8Kjuds59xti4NBG2LvvYvSpQuR211PZephoqQBWVhNFU1wv47KioHghdodhBnsfz1magMc",
  "key17": "3eMVeZYwbZrKvrw9RsbHgVjHw4dUAjAdBHTq4fFNu39NWEsxQR1smwKeZLWii3wpPNzNEmLkYhacQTqNefqGpf2k",
  "key18": "5vrB5jEBpx5V48cnuL2X9vLxFpQQishtmm5UrfE77qwdrVqYSgguUHusv4u5unz41FdoE8syCsBXvvM7z3VKnxqN",
  "key19": "5a4VTp9YnBAwAcVppRDP3azXF2y9saHPwyHgDAnfN5JDnfnDVgCyAVSomockvv2iByPh4mufnrdi3NEprHkT8kfW",
  "key20": "iePoBz1r85esr7s1ZD7VhJJi7u8KpYyGUmU2Y9KuA1MBxEPLwLNz2V69Pf6NDdPRTg1uzzPU5e9ggSfnoJEbGiw",
  "key21": "4ffbNGU8AL5cPNj95q1K4trewBBHDoFyz8hRYwnadmRPAgrFLZLWFVgNRttTbymVmH7vBiZkHZjc4ejqb1tRZFRr",
  "key22": "2hEK8JqBBVuoKQ8mwjaw8hdkYRs1ESnfESLZJWDdgwX1U8j4GcoHFDjFSLCQ8qx6PUs24comV444SWfpdZWmRww7",
  "key23": "3jwjdjNqqiADAG2nrXDqZK2Hvuz8NWFZ1jrqQSce3uR37iJUE1syLSuEfoLypo6WYMVFPWERz9kokuKwtXdHU4WG",
  "key24": "3WqGaE8PjgGxozGJCQ1m9XgaT82qM9r4yZLGSu7r8KgQ4xgjkyKkoPd6ZqpYxom6kLNUNoaa1gSkvYNkxMcaL3XW",
  "key25": "4pwf2uJHDKLGWtD6vhFKfnt4zs93kZuWQtWusCuiMEWUXNffsbmCk7qvd8PcoaQrPrEuWV8DGiXF8baXrua6kWtT",
  "key26": "3rdoDGGE1VP3AChNQ4tbsf1croBP43Etino2yP5rQKFDZsL7jNBUXToz3L9iKHikRh49NEkMxoM8bVDJ7c7znLxL",
  "key27": "24ESPXV5CUacjTib5R8ZC1HEdoYggmq1NdZQjUCibb6FPUn1svMWJSkeMcx2rY56qd2T5a3pLqSpWGddPyUgRxcy",
  "key28": "5qgMnYHPHf9nE34JrS7u5eKB9mJ3YmiJQ15wZCbkAs9N7d2GAqUcGncjCArgGzYumsYhEsU4R5yrKjwMKuy3hQez",
  "key29": "3Hf9aSVyhzUWWvwgTgQZv8nJpuJer6TgNWxJjLat4CRSCiKbdwWFz2p9h78AnK39YFKUrdw7LjwguT6JWAXHHvgq",
  "key30": "4qs3G7PodntbEPoAi51TX5m395mdxgmjU5jZcwMi8qTvd7fBCVTUTfEnArmsYMrmzYMk1AjQ13k3tofLcAsGEULH",
  "key31": "4z4Jqzn5DGioEgodJ7ReVdto1ETiakZVaQEnGvLR1PVUEQ8JoBWhHRDp7jU4b15zrkfbAUuNJDdWiFQjVqhQyjXW",
  "key32": "4xUmeHK13sXzc4mEPzWdBvSF1qcKFkqg1CgDhp6ncpG1CVUgjcmur7swKCwaE8dRoqELK7dMup8GaKvKbSSE7Vyw",
  "key33": "2wKJoo6BxVFcBawk5uFF9PTYhiCEeeS5CXdpRfm6NZQEYNGHRTF5todyjhh1ifqjUa5tKxwy3zJDXLAfmCtxNJHg",
  "key34": "3cqTS4QVe5ezw2jhC1UuUPsVbETRCoNahZzwmKgy7MsJKwokYQH5MGiW3prdYpVrVd7jVfDT5M3bUqH9jN7G6XE8",
  "key35": "3gsNQAwabMHSZyT81oPkxboNr9qQqxDLRvFoUpSF33otUrdg9epDijDGjJFqLNGjcoxiQooP52DH44Nza9TwDFYB",
  "key36": "ehrq7ajhFBLN9eJyBvE6DzQhwL1rwiuqacqqedQNVAFDpamNsGPTxwwGJCB5ugcW5ovh8faJfhYBaxi8HXX1xWA",
  "key37": "C7Ec7q3JhntokSs6Nea5TVKjYz4aFcAMKXtDsZ4kg5njtiGjXkptL1qZUYexRwzc2MMY7dgJrPVSc6t8EAQJRVw",
  "key38": "5ENZm2MKdtsHX64pMBsNxFTRmnBQUpxwibB8DR1kLopZPrn1qVkojL6MgxT1CkS3nezx4SgaUKGGFFw3FMjsf7Z8",
  "key39": "GAQehd6JS44bzpv5Z6iTk76b6YZpjnPeyPXhdhLYD73Ft9N5Ywgp9jk3ALjR5hpEFchbcFjt3AvmZxt4HusZJGp"
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
