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
    "3Uszqg4ZhPm4VjSNFU1L742CN6HZLZ6coBL79AkJGLKK7emDUKhd9LidMonJkibfpGSGsA3AYzFWCfjL2mgNnUJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D4diVHjXyEszbdoMYiKFmbUF3F4kgufAQr5DpdfA22FnShd1Z5mbfmqiDpzQPFpKPGXj8npWPejK3hRxfeRuZKt",
  "key1": "2JEvwWa4GS22VmTY2PF9QoEZWnPndFkDCZmF7Giq5462jSdobu3G9krhT36sDRsAoncneQbc5cuf2SRi4Zsxj7Uy",
  "key2": "zZ9zLrMHbfYhRZ8kZ9A9a7mUJRLisqkKFMZYj39hnEBRiqwBb9WxYqg5h6d1A3yMaTiPNBBc1xz2efFUhtq94My",
  "key3": "5QM4ge2xKtkJzBmVyrLBDDkVwpQAojzb7Wm9oGEmL2amYwyxGvkJMa74CDHUPAgzmNNH6ZwixmVxMuM854GPsEJV",
  "key4": "2SpUTY9Fs5sKtaTipxiiim3mfo1werxJ5nDBr7FWVKeUqhxiotpvu41bog4UADqfLX2h33wqchqXe88caur7a7hL",
  "key5": "aPNpDCHXFN7dLNtLNGML9gcErMEw6hkkHfS9aUZ19WGiCnHt9FqrcQnCa8hAicc1tM82CA2ya28qAXPxtzjocCs",
  "key6": "63F6chspuQ9mqj9jFbGnc9hDyEy9tU8bFSHvqVT9zMNXeVdtCtFMLZSsvmXV2rribaYWQ51NwUTACPSaKPb7uQ3c",
  "key7": "ptG46tTnbNvfCsXnhbAXBJYn8pPwMKcZATArZoDz4MedytSTL3xpYJK9wpB9ZYoq7dtw5cV1J2aN1qhHj6HQCZJ",
  "key8": "5wpfVTDLCfqTNoaFEAhadhYiJV8j5VqrAVpe92Yyep8cKMKUHo4nwQMs14WJJtxjZsvXVVNzAwBAxPeSuo32Xedd",
  "key9": "KLkjBx5keCW1kYCue3ysDmX6L2bDzQfCP1MjWcr61aQyiNCyKHvdhJrsxQdr3HReMusBXWRZDeUTRgMXL8RrucF",
  "key10": "3FstWp1xMMPXzDhKweMoTDNcrB2AmW4JT2otdkUVC1NYnFbtFs5FXyeRvMDzppTShJaDc49draaP4MTMWSPHDSSu",
  "key11": "5ACHS284Qt4pCVCci6qpoNT924Zmf3uc2p2iWfCcNY2zv2cZ3CgUmzLXBqtLkgK6gepmCqe89wdSRBqvEnDhUNdo",
  "key12": "Xa5b8DE1jJHb6kER9ewJJ1W1sghDRFjUSMgnavxSpFtfUAEEj2H73CUxsEzYTTwkSYQm721hF3BgLuHVryMCq6b",
  "key13": "k9EDMDB3PhL3rm4piSzVPFmGcyFiwpuLAxp4bamPQEtNXEyoJ4E3xkRM4cDfuCeE4h7ik3KuRE5UVUPs6m4c6G7",
  "key14": "4UJww2uL2S1pRPnZitLJTNtbqctpzMDZcuxLTuwBkPfVAKBhaAvt3xkiPR8PaHo4552GyzJtjve5qwX3kMgmCqmc",
  "key15": "5asgz94eqE8cy4CbCVbzeLoBKHuvXs83gtD9jemjRH3zisuf3MSJNr745PBP2wTp97h7gKeo7YXKDoieH6WA8qms",
  "key16": "5aAqJxjiWxfdEu47xEXJHfu3WPtHiEoZSKfjQL4UzDDbpLysduXwqQRvjLVbvYQZMnULHxmvQ7bbbKkmtroSUsh5",
  "key17": "5qyHdiTQz2gLQtuN7kHYCBg4JUq5qH12WVVY2z5r55VVpoSrf478Tu8E3QBjQ9uoXqjnkwS1E3jj4vp6d6xWHstq",
  "key18": "2H2W8Xj5FDf4gJsdYUfGGx9bCWqiZyUZu2Pon9vgsN7TLAATu7NNdMFFoVCVX3nz2TTc6GDhiaGbJYP3oBghKuyH",
  "key19": "2TtRMdbEEyk1MZqo6iFA6386p7uYDCcvmNVkiM9d1Y31a4QVdfm1o7YGQyeE4YV5aTQLFiGqoSFAkf1VHfky6QkL",
  "key20": "4xhkg548yvbXMGonKFo8NuVChRuyreDw3Rd7ja6adsnJJatn1x73QTwHbKZYETm8px984vh4e7pFCA7ktuke3iTR",
  "key21": "5fGtpQBtiZXrz8rL8ZfMFXXampDEJViykSy2nhjdVjpMx6AcgyjhHiXkAS9uiVQZXaaLjASLrUWmKrftczneqBQP",
  "key22": "4DxZ9suqj5GCTdg3Knr794Kjttf6aB2tvh3aAJCrytUA2219UND5w7xKg8KFNW8zCJEcUZerVMfXFJSrM8vWhHdo",
  "key23": "4oU9T1ptfhJxTUWj6d579Fj3ScX3CQsrYxGgsUwYGjgBYX8j5KTquat8FqAEzE9oP9aZE7tMxx91xKRXPuCWsorX",
  "key24": "5ZfPQH9W83oSqSf8DuSzfozVnNFjHkeHckPq3K39D77nm25X5wJjcGmNqpRdFcuBuJTmZRpf1PAq5Peaasv7B21M",
  "key25": "Hpy1ikRF7Ut9354BE4UXnehkRPNWhvxG8hL9XQ5MdbQkwRoHweaepzWqLXksciHiFv5Tws122iyRKxMKuysWRk5",
  "key26": "3izLeTKbenWiWu5XvPRTxggXR1Z4kPxSrJJnLqykGaGwiT3gtsaSbAb4zYvTLVmgUH67eXNv4xJwTj3Nygt7jVbC",
  "key27": "5hyASDSpRFK8iX1tLt3JeVAwhPY4CYFYfz1EvpFfGSGB7fnAwYUqrjdYjLPK5u6ymQiEBtGsRkrz1PNytvCRwNRK",
  "key28": "5aerSQPWrq1N9tgJCNRZ5tsfkZv6syd7Vwijk4xmBaL8t4jZUTKAVs4r6BAreUnwRmFdNi5Ga4ganV5gMVQAGPFd",
  "key29": "3ybk5cPEMyBmBqxf6WbF5XCcdWY3D1te78dfrqbJt95x864fX33jPTmwBBMRQNHcm3NB4EWrpPrYhGcK7Y5GQZXf",
  "key30": "4Z3aJMUEfKRA8wsuPdiFCub8Jq56jvyWXAfFG22j3yeE9JqVpvLJzZENfMVXVwiNnCaz6KFAquhw4RwgHBZcqQre"
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
