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
    "Zm9tags5nZLZ2GujByLwnxkfA9MM1LnG9JELL17XiP74E7VGFKE7E98vnZvV37p8cHfknBsTpQQkKyx8YG796a8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33VtqaC4bcsQSdaZAU16MsDxd7rcmwuNFyaGcaa3bH1pbmKKn17u3VjEAUHsgykG34L4bojbr4Ncjt7feYW62Kaj",
  "key1": "49RSbGVPjmguKnmgFhxFsTVYTSnyPXEhvSdztaHS8itJaM2kkwQdAwCdGdjkuhgjPtqzsEx6dTuMBRBdgKmTnWAa",
  "key2": "5A6kBgFZuMm8YGZMYVf54zBEdfFJsBCTdT6q9GwVsXHkwdHTvjzMibysAMv2foKWyoXoXfEhsxpbd5bVQVUZTD1T",
  "key3": "5b7JqhCnu2vXkFhTAdYiZjvdcdB8yNoeq3fWadqaxD2PQYeyz2tmHgTc13XQKT9EUGN4K1K9356DEsKkrSKvGwf",
  "key4": "299TAg4hvPsKgNxarbpMYwJkyZ7y1UwbK1wVygPS7qBam88U38ZXgPBvVBssoDfpbzRyYAB2xMcbHMW8dw1MmgVz",
  "key5": "3oG7atAa4FqbF2R1Z6b7GT6uHSYxd2GHBDCpk1tFSUMXdArjxauBSmBgPuxQmBepX2kRhHBRNNS4UyzgLQFZhZx3",
  "key6": "5AiYRtxKAPYUAjwz8F8u2TjpwBxg5ibYZfpFnt38ZQh6A7XhZZzBkBiTh6J4EhhRbwpndJFxUTBq9RkfMv9i57rw",
  "key7": "2U1CKsX4T9F4YBDirEAdLF34FDVwLVrjM2cXTi8sqjfEZcbUr1542jTga6mVzbugHLeBLF55ykRjbNbbUXkSouzn",
  "key8": "5ZJXCpCLQraTkQLVkWAzCLx8cu9iWNaPUQEX5EkhZX8B8cAr9MZFzeD7Wbavb3MDZ3fWsvVMGFFg2naqeArZwCx7",
  "key9": "7g35KEFijxQfauFxoXAjYtJntpFCEYGe5MvUbdFDQYxvkofPNfAv5DzPDhRAdGD7Lr1EWbqZxqVZSzsTdqavcrn",
  "key10": "5LLdhXD1h9DPszq3w6fNzaEKQf6ZsCfHeQRJW5b3VmzvBx63Lsh3G7sQw4JwHZKYbEYnHP4UART4MviziKvr4AqW",
  "key11": "2C23xPY8tr6qyn2ChrJZFqghdjrKtaJsGatik1bCLUQ4uJmPpRbW3HCiUsCM67T8xj3LS2ErG1oUT9ij6eUQVysi",
  "key12": "2JktDkse8Gg62D61gmWubJAiV2WFC7FFr3ALK2oDMUGPKDYj2az8LcRjvcmegNiPCYFsJbgBD59MsMdbLvyPQtdt",
  "key13": "3GZy9gUZqrLZ3u9v6Wmmu15KFSs7sdWLueaKc2zoZp4kGAuEVckpV4dKLPWK9w2cWh8GhSUWfzCqu8xrQWX6tzeM",
  "key14": "5ghPeqW4RWLsPZqPmHm3Ng79WpTamw778JmjTYZAM4UsYvtB45QkCycFuyWwxqpXNcRE1ztro8LKNydirWyjnCoL",
  "key15": "4gpno1FCBxbexnGmafBext6aPpf9GTvcjCa5KqwdTuf55jDGeYH1vGqyn8gFgwnCVbAgQENuABsqkBCM8QMLTsg9",
  "key16": "RcErCVQiTr2N9hP5fAyf2N4grnWzYtontsJQ93YhDVewqo9jpy7gTW2yWZv2MNJB5AP8DNFASTeLHEZ6ozid1pr",
  "key17": "2yfuLCBh3SycyymMGBc56yYeQLoE9veWAfAM57A4gCZj4R11JHhvKTXALspVqugb2bE5RCjFjm8kHwDUVA9irvSt",
  "key18": "75yVD1fYEQWqABaAsSZ2kUTDZ8HmEisCScxKFRshGdM3MZe6wf37h74b2B53UFzDggqnpbkhghZv8CcUj8rxjuU",
  "key19": "4cJrEnfRzoRUPycrjNPFPnmDAxmjTrt41MNtkmh8pxiGDvfsXMXUEpmKkHdCVknCyiVF6DZnk3uiemxDjZUKSHcH",
  "key20": "28AqLvFXJg5C5QjN9jFjYDTHFKG22bHy6CDHJ6xW1d3zAFrXmEyyeKDodZmUp7EBrK4GWET5X3oQQ9wydSRJ5uBp",
  "key21": "Ft5Bi6eVs2QCtxWjWwbxkMojcbaH5m861KTqqmZMMzFpQKKxJfPkEmJSUoCLz7W9Up9UvgkciEvan5KsqQphzuc",
  "key22": "2ZBgBCrqkKFZwqXw1fSTdCwj2MR4oZAgrcaRWKCY2j8WLP8qWeDEtJMMjN95nHdT5jsUb7LCivpkgFALHtFxAnVa",
  "key23": "2CCJRMrB4rPk4hog8NyNnRWYvjFPjHpQ1YJgRzwibePXXVEjUsVKy6pN9dgDrdUFNbmDmnM1rKfGXoAvcuDTpaMz",
  "key24": "2a8Jcey3BMNjqauAmZ2EkNKdyrCC2V958GsADtnU5EZnMjLxqCfHn7V3xv9hZZmjRdaDpRH9QG4DYUmtTFEwpYw1",
  "key25": "3DCbUfH28Ugm3X7g5pXpQ8UBCrJPKEvicRoQWZR6TEL48CbsN5DZqq1Se7scSBfdjYc8DD2KZKNsBbN2KWKm7zoW",
  "key26": "i2wGb89PzqQ8oTDgJFGTfBPjFEZiWAs5xLW95TH4fxBvZ9wQev48EdfFgwuH2eitKBFAjSpJ4UCMxJf5RjzDCRB",
  "key27": "quPF9ixiuFFs4DDMp4nQDCTqBwvd59gquSCuHsZXmGps6N4PzSK4CLrhjwAAPkJoVRiHsPxbvcbdo7U5Tv3drLu",
  "key28": "3iGAJcLgCwMBsnjRtBStYRMYpUCCUMQc3u8tboUtz63UN7qruavpkvZJHoUxXCnvmuGL5HDQmnr7gdpboLBo3Nma",
  "key29": "3WP81sprkHmoq71QyC6K3tUnubAUVtMiHM6DiUdQSiKp25J8dAVxZh9revzcnUkcbUaBZZ9EurWVk7yovoChdFSP",
  "key30": "PnPzoruu5uR1zStY5fq3PUUoqYHF1xCo2fUo8uXYL5b38uCnD71U4wtLAvEgPbMj9XizmZn6Uno739v4xkQY8XA",
  "key31": "4bAiv2wEyAkxThmuQTcU5hrPbJCea8oSe5VeePR3ctj7F34zp9aukDSo3BGtTLZRUVF4Bz9cTXrF8RJVJpy4acdJ",
  "key32": "4orCKdEVA7fX3H6esUVFN7u4dDBKXv4UPP2TtZbBWmwrD9q4XCZu8LZpSQhX8B6XABdc1Ws2gbZnxDp95AjUrCun",
  "key33": "58N1tCBecmVU5ZMsgitFfavTd2ajvuDLhqmS1eGDFWS1c1UFjqHAvMVNAQQNQHfBih6Ld5J8bShG19F6XUkWKZ5J",
  "key34": "5Agdx8qmAYrxEfmu9kkrhfRyzmHCA5iwk77DjEYA5fDv7bpgh7vx6yEuUEJhkSy4mD3JgRdf2hDqsTK4nGdNLSsW",
  "key35": "48x7txUzL2f7YTYfn3DCmHQeMQZagUY93zT6PixkhRQcduww6GmToM7MFTTWcQgXog4ZfaxGnMVzs2RHZQTmr4Br",
  "key36": "4MgXkwjmZbWjHNUq4MZBWiPdUNoWVNPYYbivro8GyoUGQngFxswFJsUpBpsVTPmwGtBchXhrEPYnDDyxbL5Q3Qc4",
  "key37": "5EwTbBgEs9XPibbFLoMUdzLQujsQSfozC6ecGJDnzJwqTKVFuHhBWE3UFiGU7cXLZZfdBbBnCbEtwFByBh8apFqi",
  "key38": "2JTEeRiJto4w1sLwi3tTgEJ9NUC2hSJm8eV6kZkcrEgWdT58hTWL2nr4Zr7F6eoTqdViRXceVSbyKxSzmpA2dvQw",
  "key39": "Ap9vfSHvsvonKJMdBv73mTK944ZCT3qhVXye2HbqpGyNcSvC6A5pCyrYuaENk8cjUc8kSDDqNJYE9R6SEHe4AH5"
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
