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
    "2rFxUh5Wix1n7GfQvZjsxj68zkaWUtievbD7pLFJtG3fnKFk4v6WfJT2szw9kuRcMn69BYyTVgjy8yojBZBzJQnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N23MawdXiU2XkjEBKFwbchY5SfHsmKdqWNRnRKNkzkzqKUrXJtGhcT9A4off9825FqMB7DeQjubJz4NFoHHoUCU",
  "key1": "2q3B3rMfYt6uNF63SJWFSHBBNrZx6g7Vq8ryGGLaWJBjbDhpbTZL6a3TRQ8Bf8evQrmQXkpxgzAnZzs4xMf4MLcL",
  "key2": "2v7VGDykKQguR1cNyJoVwFWS7cF9Kj26Ju34Z69EBr4HJDejcXQDuRjZLfmnMBUStmUypnkXVJZjCg8K6hfHakUC",
  "key3": "4dwmBSjaj9rStn6QihMZY1eGZRLx8HfUerhzfUtKD7K7fpW3YMREfp4x5azpKcsZmwFgmuymNbDncsDXThrtNT9j",
  "key4": "34wJymq8u1D2dRbXLi9E4KkzhdsL1NbHtobzbcMwo3mrWZHNxp4ifwqE7pGwcMDDu4kbqKJ2ikRZBCHHN1pzpndY",
  "key5": "Fwdx7vmgk2CBithnrRqrQyBahnMgV4qSNbWA6uztij7c1B5Yz4f3bdN9ii8j1kpQXJFSp5KpEN3pfLh4Xm3wzfd",
  "key6": "2sjAi2mcF95P6gecckGxv3TXHtcQ4WsH18TfqvgtEBkh1LaSUkXGrBDvq7zsnoQRCkBPt8hr6kcufWQBR5uWsGSy",
  "key7": "4WSH3HeDrj3ZLew6QmqprSrcdfvHyS9KgVm73AiVq8uwbhqxW2cLRQ4fFzUKCbapm56gSR8ava5TXWK9uYHwZoFv",
  "key8": "3tqV7krz8nRKv6dvqUf6SpMfUvgFtSicRDaXeTHmiEZnHNWRkYGw4ffhPmzAJSWrw4d6qJ9fzisnqoACrBavaEDt",
  "key9": "YBuvYXPmnvS5ggT116U6JoSVKfg2WD8hB3FMMwFtBFkcUMu38Ytkr74zapWtDWQbQmD6igmu88xu3KcKbwNiws9",
  "key10": "3DfAzEXTdeBj2h59wcWbp2Ta4ynb7H15cYmNG88wVZ5WEyQ5iRpXE4HsLwoKHLF1S56Sx5DM9mAQRtLMyf6CVGsr",
  "key11": "3JRYzVaTsyU3sgNZKaQibTUA9ScJh4aRAoYU9mNa57muZqWbkDCXWVo7QWxzGEBtdnD6fgdqcp1dh8i5Y4r5xw1d",
  "key12": "byXH86UmsQs3mMQzw6wg5zzuPDQMgkFowqZn9bva2uwEGCxZDbjTnQx6SWR6aLbV9NauLUp8tqK754mC6PnHknv",
  "key13": "53zEfbVJmfAXGVh7xdextX53pJoZ4qCcvnUGXUcUZ599nmEv8UxUb6JgRzorpa34t5MbvLpTEjGy63y12ouXA8td",
  "key14": "4gWSoykJkrzqTJfbSQxr3wq7zqgiyfYjWxLTANeAdKVcpHTSsZLefjukpozEiHcuTC7NZzk32z742Yi9er1y7cBQ",
  "key15": "2CmBASoAjGgjTMraHWPNr6DbgnAz4sReNupL8D8fSbuDKfTFfQYZA52U3dDTuEypeHBDcJbgqnAVcv3imuSuAD3N",
  "key16": "CzxXBpQ6F9eb4p3RSbNj7Xkf38XEpKand931JwepW2CbNMFG9WUBikknuFsFWUH3YUUu6kguL5AtL5ttfrCEa3u",
  "key17": "TTFmav2wCjMmrtH8M4wsW8YmMEx8UCjMtQMecieE1aHtp6xMQYsZgFnkRMP5UxzzZTkKUSBXqoHMHrdrjG4U5Rg",
  "key18": "2EHbaNF6VxLBnGoHKZ4pe25bA1LhBX7sZR6Nib3cYsCExTt7oA689PMcn7LhJk1GGpPFKdQzpkQKZPfSzDX1WB58",
  "key19": "92P7PnqiuQJCSmMFZPJRk83vjsutqiDtUaKsToVrENgzMsqj9GKoxb7UZyHbdYN7PJmXG7mnW2i4d6z7Nh63ktU",
  "key20": "2wKCphqqjroz5ZnDb9BdopkfF7q3XyJHx4hzECqGeCFcVjBtAUAYn2ySTfw2SBUt2iBNm2NaMVGEkyzYSLuX3kH",
  "key21": "52rFXPZ527v8ATHWb9X2Kyo8HboyhKJaP8veBdMQf8tc2bJfzv9eZvkBd8rZWUiirK8eLWTXcWqbymKnnyghqD3o",
  "key22": "45GhtoCxYhLKZH4XA94e5aN6n8m18VMrCAooShQoocCD1uHVQnprdzdDXpxHnD4qZ2BsrV8k55q1JGMkJW7k6J4F",
  "key23": "3x8a3uiSUe4qTPipZB5PkBLFcV4duVzZX4x43spebKmU4mLxfxnxdtqyMomRX7f364vSCqaegtpySSxFHGmkdKxo",
  "key24": "4CfnKbxMeW1ZmPL5FhC8uzP6smXf7rbyqezspctnFSLWGpkqBewFwBtXN8c3KSn1xKBB8vKb7Ynb77ACrZdT9AAQ",
  "key25": "2KhbZ24XqYriTWgcaSKnw3keEsfhBEomZ3ui8EaF9GautjT3Niy87185dGCJbG3qkUe7MnYFvxb3MkiMP9YxLdk1",
  "key26": "4QrP1wh7FvGNhLKuu2sV4vjP7cy3ZNZ2YJCUCrUNePSWGZaHT1MVzZcuTE8enGFPrW1dJmePbErwBb7Zk7Y923Xb",
  "key27": "3ZGbBL7cZBsHMVdgUUd9jUPsunJyztPZC9wtG9PgVohNQazissG2raqkG2XTfFujBQ5ceaKLoL7rzWyvK7VQp98N",
  "key28": "M4Q8xMZqG1b413Ke7QW6EnoTTcQ8Rcc8YhDygc9QLaKJ27JzuuZEGA91YG1DTGyUTJHFCPdG3ZGhVZeThLBmr5m",
  "key29": "2CTXzs5CdxmvMYwJUnEsFwQTqbNZsd9ntTFhigBJreKWvoVRPLX48PxWQxVv4JBYxEBSgdg9622H6XQeEQYhtoVC",
  "key30": "5F1mzUFGv1Khz3Re2jGPsbwQzcycFXWoZiQ7KWDu9dg2ThswJ9jurrimfceAzoDNk5hwc6uRU1tGWNHj15CL2A6M",
  "key31": "5298Kso9W8gabQMcJBV1HVqdcKgRbjWtj9QGJKd7MZHXqZygSnbHZkC8SYHEXtaAiMWoQZ3cFa9HpCitSidHkPcE",
  "key32": "3tuabR1UTYLdaHs4fkkWaBpws1S28VMs4kX1RpvThiovmkHXCH8okXTtonVrvjemWxWg9zr6vX2zCKvPf1pa7ZhP",
  "key33": "yMhf1emeUz3TLDCmvbHTpmNH9sK9qZa4zeE7aE1Ga6ZHXRD8uZqNrZivTScrYuNoTVBbF6fZMAUCJiaKbFCqq3r",
  "key34": "ybxJFvaB9cPkN4hLJtcw2p3gJMFnDQE7tHWUXKUb1ELbEYedMUwnc5fmB5jgU5X9a4B8GRgXH1gHM85HekDuQ9a",
  "key35": "4HpuNjnujazrzgr3zHfY3Sj5Wuy2WY3Hsm7AVa94mJ18reAyDdZ64BUZ5qFmHqi3FVnyiu6YbVSigXnCWzrw3f4R",
  "key36": "2j5GnRgafUzwp4hb1H2vLBfxREeGeZnFQzzWLfQ4vWoD1cZi3QC8sBPeznSpY6Hx1VeAWejcCjNRcwrkJykT9Nqv",
  "key37": "2nxxJWwYwtYtMMJsLq1b1aCUAMfWjidWkWw5mSSZQcdMrAExFntejdy2TbE9GuWrnkVN89UzrNxGuLEsiHPR4WwS",
  "key38": "GDLT1yHwNeuurfcRK7esRucfmSaHYJKjcg7DcrijyWU7X8h9qCTLSHrDHB1pgcHJEZe7ACySSRGuMQ2GAqhQuRg",
  "key39": "3KHBhDuq85HDx3XP2s8bzCCE4ddxbTCPitDhKXcTGrAPaFAEbmF43ZpM4C9eHXqpqZDqgx8wtddZzUqdunnvP3yC",
  "key40": "61nLw25nKP9nAzVohwJb9XbFUmfphnYLZrpZNpSkSDMmJha6BX5BcezkCVbrwhA2VCBr3vewLBi8GLKCdMPJAxQU",
  "key41": "2MMDPKKAXdyKDZ65cWbZq7Z1FH6x6dRhDWGiNpqgcCY6Z8isLVDm5ZoP4wNKwRegM61Dg9MF7PmozfMBC8f28yWx",
  "key42": "4PHubn3ew71u6gZDkK633kX4GZZFLzf41vmjT4iKKy2rUpWe67Zk1oVakAoGy1NEBr4mpwh4Jf7VwMrqHx7w2Qht"
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
