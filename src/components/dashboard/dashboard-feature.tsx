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
    "W8PuhTHnLQovspERAM4a5ETwkursDVU3wenxxtbS421FJFX9eeCSRVPQ6i2gkvB4hSZCpmgMPnHy5JgpmdNctjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k3GHTT5mj6GTBk9wCyyqh1Wb3f99pKfSkymTPx1PUvQrvFFG792JjFpBZXigiApajDFZ3NJwwmjQ73ECtcMiSZp",
  "key1": "2JZGZVdUfzGxdYRZdHGNVqRNXLkzVjGZxSTj29vUq5aiGGMKz5Fh9Fh9xYiwEQwtCtpiPiRrRJMSktvcr3ZhS3Cr",
  "key2": "4Wpo9zQqhWdtBBygYphFrv9h9eD8JJ6H9GKRjbDVbFf9tmK79QvXkxzdQxpvGA3hJ9pYk2DaSf3Dgw8Xb2SsRYWf",
  "key3": "4VLXvu8fHyoL3mubH6QmqQt9aZ6ubptHEeYcQduN9PBTdFpiRhpRbCSRgViwbmmroHQXADx9k2YdLFbMNNeqWhU5",
  "key4": "q7iv25hkCWEtQVwnkrBUpRvggyPDfKHYwCufxKudfsNAvWbG2BFnowkcEMmurSPwgsLSHfkji6iP2ZV2SGBmsP4",
  "key5": "3DwJogQ9awNEkZ92XY4uXGM3TwV6tEwxANJhCVVhTSrJ2EC3uYVBkP2DMf64Cpo2kM3imBkxg19skFEp5MBh9Pn5",
  "key6": "ZrADXDdQYvbguuJ7sDrNN5DTFDp9DVNNkivAgJ5qjJSZsURuorjPhoKSXM4Fomrmh7LYLGg6S1TyCYgZtcWjWZ7",
  "key7": "5d9BqrMCeWUrkbQ8GhLFexws9aMob73ZvBheGJMFrNPbH4jaUPBvxKtiwRqRCX5AjQPafyv3wmdK9hH9dF8ipf74",
  "key8": "4xDR19TDc3q4GKLzPt46szv8mpJYFRAWVwvN6X5u2dNGi1gsVNq27K4nKRSrXAWYuWBLXz92FwHuNRWJcd7YHg8p",
  "key9": "4iD1qXcTH1rnR7uujaZEaUQ3Yswi5718j2PZZPo7QDZaTYHwDwCrTEGSwFUb4hUt7Fc6XGEWEMo7kurbGMDgXjAG",
  "key10": "346hquyxwCXVGMhkjh5otJ1gSATrDYHE7MHTw7njFA3V17XxX5TFZbStJKzZrSe7baitJ1VKVfR15A6SRZ2gG9AM",
  "key11": "2FJi5VY45wDyT32R55Ry85e1zTr8UzwqmcaveW7HBeCkRRyCqBCEw9uhTCwcivq7wUtdtgqFfiHSLmKqj1GVZWpc",
  "key12": "4eqpK3m5dg3nJea6VTjthdAxgrciUCCPetkWzNuTVg4ng8Gvo11rbfLiLYaaX43MZTQeSpVqnRe8XHAEu3UY4Rc5",
  "key13": "5NeqZysuWbdViR6Bx7k4qRVJK21A79rtmxeN98rtRvvogXXrX2GmtKyFgWTVzg5kmxuRh5wLPgMj5rrwsSGDGT2h",
  "key14": "3fL8kTKvMbDHiwNKAJ2dptW1WiZJQpxruYuf5ExnnBgf1ox4p7jg7NCd4R4S7hxaPLJFf9vbwGZm6FG5tZqe5Tmu",
  "key15": "PSt9jybrgqLSmDZMkg6HeD7kcS34N99z8XWnr2Vtna61DGXY6iqTRmRs3WMmtoFQEbVzZ2haTWGQGVkLRfaLMLk",
  "key16": "3gDNMqoUPrLbTN2kHna4FA1Ep6iTSKck8Hs1bF1pkGPwtG3eKXZTrrJSoSseVvetez66LBPsPfu6bcJefySBy8BU",
  "key17": "4QxxnCh2czZwPqfW27EDRQEo2taxt6Lxg7uJVuV8VQJdYEj7wdDyBk4n3pnNh2mUkmyzaX91NZh6zc7UsCNURCUf",
  "key18": "Up6xA3gS5eAnDWGc7PvsG1AK8Pwvs9xrgSqW2ppTX8EibbAd2rA4BhEt9DPndEoBgtV9DTkX5X2sfPgSYsCdxBc",
  "key19": "2s4p8s9s2WMnmA8Ety9HTmp8hTdukcPCEZwhJfNihKSoERNNMBZTb5KBsMecLhj3ZENdXuJK1gqERPpcWQ8ESPjb",
  "key20": "4biSrKM4XwsW83pyxeoTwqf5YJ2JNsQtasy6CCB9zFaBBkf4o2DiTBx3ECQemG4EBr9YXYV6vyvnkYS1DfyWfj4A",
  "key21": "41mVt89obsHNN6FdfpGcet9xHD3R4eiVJs1VY4zEtgMKnHMsZswR5bEKmXaW7NvznVaAYDEFkf68X3YpB2hJ2jbF",
  "key22": "5vV5VbyMNbxohYp8ZsxRu8ycXZ4W9pBsNqACmotbgLdrLr3sukoMretwok9bQDvLpDHYSC9yumXUaGa9q49UeS5M",
  "key23": "cFopPqvcNosFnxhKKbo6KWMNATo5f8NpjrxHE4DJw677Kh4HT4pYX3mzeCyqR12jGi2sDz2zXyPDujCk7MT4tuQ",
  "key24": "3rDBNwJaMoTpmZ9S2CiHEPNfp13uLPNqso2UpPiipcXeWeUgLyzy1rbRPV8hmd8kAYB6CFCn4mf4tEcPeq5kDUQS",
  "key25": "123mtHJ5yFwXic7ejpL76CEeDaatYkUxjxe5KY4bpZPXrc5HjdxXAFupH9REVsDGMFicEuJU4dfeHosk73sYmXeN",
  "key26": "ApxTQZfNYqgzJ5XxDHkeEW8qhX6RdoLVHmA8DdXka6KnYdwmrs4J4DK3QbH6LQrLpM6ZqWpRGepEa7DZdFjNFX8",
  "key27": "4EPgbFn49miKQdxRcJWk4ohZCRxJxLoMUAWwg13MbFGWc5HunKEpnrdfxZET5Mzwnu6wHzG1gTUPQ3rAz2UwWVib"
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
