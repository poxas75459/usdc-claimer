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
    "4rDJqZdGGvWYWPKASo8Q16kkCpwuCAPsRkLYz7LYmMJf9LrZMni3Dvhnmb1VZT82s3enACrWzMrHqZXzsCC74kCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "387xohMDpgXWDTKKfmpJfhhbHYqaE1mfJqBTen34Z9eBGqAasr3bradedAbnC67mSWPy9i739WTyMHvVPoRXuNss",
  "key1": "u1H8YXyc94twbBTpqYWmbZZGjhiy8NtMzm3M5rotXY5rM1KeCNA6TzGa9YMvJiY1rKCLVCcu8Cmhswmu4kJPnMZ",
  "key2": "5ns2aLzrpVmfgKgNLKEh9c2bciyFEmCD49awpAPWdADXn19nDWyNmp5GjxVv3snM62QiCQRcb673Bc2aWEpRfRMj",
  "key3": "2H8uKWaH2vEqgdpLV5AwmWpBvsCPCzSeKUZgT4rxAyeMvqvdNDyKjDbmWuCZ5ESFTh7WXmXAL4jS869nYZhJvJJ4",
  "key4": "5VkUvteo3qgC4yh74RqftfBWi8yvkN2qYGiq45GWp1XPPHEb7HhZLVu8QdpRZUSccbx3zDEPkDBHUdDA7mPJivbf",
  "key5": "3gQYexNvbuVwGokjJShmPF1okxLrGnpRZjQiejkQHaNVT1gXtPagq6X3s5cfXd9CUfEwMUsPQ5KEKM6nCcCokQ9U",
  "key6": "4CZEwrzUMwqjK5ioTY7fALFsdXyS1YLRd1EM4daosBdTmPq8mgH4bR2iM4vRz5KYksqjxVQaVVsqmP5uZypYEHhj",
  "key7": "9gj2FMNqmRkWFGSHy6CJ4p7ANqcQK7Rsb8cdSR4g4oEFqUPpurnQxp4uamJSxWX361yywM5CRrup4QrdGhgusr2",
  "key8": "3qMEJrfocaVuXhYT1N6WqAGTVVCu1RqR21FMXEhT9JoiYnpRMhPLPZDPfy89p5abLxnumFbaqpPt8AMdFZ6niSoA",
  "key9": "3tshz51vV59L3uD5icoK5tes2siC4wcCnTpNNTwNZ7UENSwF5ieFy2ijhYETWLis2LDuYSRXXPfvi83gR6w5Vz6P",
  "key10": "5BjahjBwkjHB8xX9PohaGS8ttTCdNrxUiaTU2cPW3AWi7KDuQcVteoRPSB4ktja71eELTpi9zF2WXitJ6kimdWrm",
  "key11": "4vaM3ibvoP8iJNT2SpUY2i7BoSp6mdJYMQGHFUu7PDA6uxoWWhGCN78aotVrPDhw6rGg7ucmJjxmUsp2tzxixoBG",
  "key12": "2VS9xAphaUsavjWaVySYn1sAFQRHKd7T7yx46EDJ3gNgs4JXkgSR6XEJ4azHjioMh7au4Ff3N9TEr7LFaxZYR8fD",
  "key13": "5YLjcNfxs7FQdKZ3gJaf1yb8dfjrLu4VgtKShL57Cqxo4gDPGru5YCR3wDJC4pyv5X66fBdjAkD9YBZPVXnR6k2y",
  "key14": "3batqFTFWSxzz9dBEHJXLmW5MC6iFMG7H1iorvM2fYxTdffREVHxFrfRETCF3SVUrAZuGUdtnxHvJ2wjZ7f5vex7",
  "key15": "3wLRoGeD48tfsmMLeM97B4xaE8HF8KsjWMZwE8SSm7ytFPRmG339CByji6JXsSqJLatstynMoPyfaJfEWViwkUyn",
  "key16": "XaEgDcnKVfPtZvopm7vJssYmKcz8aJ5RTubxpFAP6hprms7rwH2wJyBV6CXULefUx3bndxGTHhbFepTPANMpt9z",
  "key17": "4fjwXhAc4dTNMc7cCP4mXQth7zwrDtWWiQ3dkZ25GNGsChK2eYfL5SsnQeRsucnuHFwBqpRRLFqWvb9JWom4YWVY",
  "key18": "2Lp1C4CFwaX2hLj9gq9ymxZLgUGTgDgY7CpQ7c4Xt4FA1WUMQVVHw7JXxXDkNw8So7BGxhuoyKt9SviQz5bWmeE9",
  "key19": "55TUTfHpihoKp88dx1gZNKC5bxnPmEJZoyVJJ2Q6K6zYqZoyaKVaRmuxrCLbdWkq7XQ8b4kX97kj7dZf6cLYfMvA",
  "key20": "5KtsyZPeivefs2Som1t9ypZyS7RtqJZYwfxnP8pN2htJ2FN345RNcFtjL8a2khCdGaEQpsjDN4XbGyBUcFamTM6n",
  "key21": "Viu2Az24waNbfh8vd4NctL2GS4yTKKySaBkySdLTfvWcgeVWfMHAXcty79CnsrKKQJQB65D8qfF162yXb8PbLmF",
  "key22": "2R9kPwkkRPGSKd6tu4FCwKmNtqhBZTd5bkS2NcDK9yBj2WkBGWzB5oxa7j5y5Wpu8Sasx5m5CsmRaWvaPzYydaTw",
  "key23": "54Dt6StFodEvnnpKYSe6KTftHpkSr1M8BJ53sGjoyfWqXETjLZVmEveagqLcnq78n2mC1Va6UiLR7mJZjr6Chebi",
  "key24": "2zd56LW8jMUMNhqydDpSqVsKN5SLAUXpQJgXvk8KpWo4dX2ujYVGYfaHZ8oKGJvPKSvmto64mqAH6oC33aRhGDCd",
  "key25": "2yDiRkCwtKS6Cw6mv1p4bxc621e5n6CCmywvzsCqit7WvkGsboduBMAaWfP6jJ74TiZMYiP9h7jvUcCJWr4V7fNK",
  "key26": "4JN3FWfsBb3Di2uvZd3qePtC2GfQmrmTZd1ULBuasWVTAtMubRqWEMJGMGL5BRfN3K4mRGChp6vN2zPquJK3ZcS4",
  "key27": "2SUQyTitFy6zrB1qsuvptvB1PXxmAkoru3WwJHNHgAaF5be27XnBGocEUV6BZ9GQBr2AeppDzbbhrgfZB7noSegZ",
  "key28": "4nFTTqhjidm6pmZDFSdjyxEFSVeTixqpcbkcU2qKUi1Qo7fUk3tLpRV7mBymERninR2UBnpdoyEiyChzvmKgjJjQ",
  "key29": "57wrn9NfYWqqTzazb8rXuayovNuDrMnaNRinBVu9nCEKe33w94oEn2eZhCwbJ7UTUTjTBCDFsYQev2mWx1BrhGUK",
  "key30": "4Mqw15FHiUaPMDGwDMt8hiYZ9Pw95kjDxUqL1bt6CpoSDvMJeJJARKhTow3FMfXcHaa28GQ2P8rimqtNV2GLtt6Q",
  "key31": "4J2Mba8jhxKEiNSZnMs3VKTKvt9ijmKYbmjPQ47rBNLdthzfKC4arAK3maSahf5nWNomCsMgj7oAWRriZMqdVzj7",
  "key32": "44tZtxN6DXa5qbFZQgv72AKi8DUpscX6VvNAGwoN4PkHCxWiKkMCTpM1qfGDb3Ps5LcesyFxW8CXstjBCYqEuKp1",
  "key33": "2SQJCx5ycQJY7pB4FF87r6Yqkdb2FPDRqDvwUMREjxLdSfbsp2pxDMCwdXhcfo6YcYdid5pcX9P51ZTjrp6yMLcL",
  "key34": "4GU9gdjJhEwnvw6RGbokGeaTgWUi9TtMg83fhyVdUpLtgHB2LDhms9ztMavcfYyEZ9crPYv3RqRK7Zb7Jsn6NnkB",
  "key35": "529SDhgRoqK2f9taduxBwTE9zkqJ3AxBJiFaRKA8p7fwWxcRUZfoUCGryfNbDRELXcH67jRYwLRhB1ceY3xbY67W",
  "key36": "3gGTafhrnoDcFrc2foPJrVH5kzwigqUxinp4E2bADoeiyRpkA3zqWy6qGdyfVArAzdEydbrRsj1peHBeJTJMGMdn",
  "key37": "Qij98Xezy3Yog4xA1ymKNZypZB2VyAwgC6fx4R6fkE5gwgsdSxxof4z1jQbj9wrpLqd95pEeJQhAU71xbc7u936",
  "key38": "5V3MKKXGiQPGpdx3xdesgjnL3hx9G2BCqHC2XqyqwiitdHpciGjBrbNBzgpX9HWwXtR8eEP6GyAF5RxAQSQg5YCt",
  "key39": "A1dwE5baNMPZ8RmYnNSBRAKTB6NDMS3q2ZCZHy295KUyUudH81TV9YPfPsW2oavxupyq7LKJ1MQnqBzE2NdkXpn",
  "key40": "5deqBH1j58EQv7rXGzYrX9EJKTX1RAJVCQ2d4opmxh6eS9embHH9cPWAZezVz4B6tg1wntBTKhSiaThLXtvQiJ8p",
  "key41": "4e4oeZabsB6GjVRvqnqCXd5RQtjbZJs7AsYA8eDx7BwGpEdzc742GJVD21fQmfTNuHyLjbhWARrUhsRpHPuD625p",
  "key42": "21vMH6cpMQQHC683mapHb1CdpmmTNQ9QoPPnD9NcehsNwD2jbWq6txLW8yZMf5K1d1P4Mi5jjUxx8epoFefzu7VL",
  "key43": "4Wc5kLHNNTbqaFUgyscQYAvbk6sKjkGKbzAkwPMVYMKV7iZvaRGmokr5b3LcJY1x1qzMYTbJgUCvXwP3WCccD1Ur",
  "key44": "1LgYvD8rRdoaAMQ6CsNfoPfmhiNuKiuEa9oWz5feik948vLYdQrNzLA3jCdFePWNgvXbnPpn8yd6NfYjh7RkmG3",
  "key45": "aVkDRrWT7pew5PjspXGkKpRvqfG1iqVGPG9rEDWLEtotTi6PnNdF8JeEdKHccovTmdpsRGzMXhP6M85yyuzGhAb",
  "key46": "4FFBR6K8Q8uVZnv4zizpUtU8aQgWWA5zxqcdTVjfggzznB8Xb981kox3gHo97sVVaa8uZtRTra5Gf6BeFr35UWvT",
  "key47": "yiE9ks6KVewhCX8Lm2KZhfvrXfQMkyDEG6rW6KKYYiWC6nBJamtGJm6byZmRRx2JEX7UJuJttmfDuNFbJwkmeCZ"
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
