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
    "AKNM8sdZkqpXx3zu6UjA6JLbEj7Xbbv9h8YiaxyANsAF5GAWCQr6TbddCeYYWfUjvaWMVWAscAAtEtQTHyRiiN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HDmqPttK6u34qAkWqW4WtBWxYGGKtYBmasStRucKUTEwqG5XU4tYxhxh88baEyVttUZjXr1Jf9PCtXxN3aGwYXp",
  "key1": "4fmodYBqfTzJ9Cm5VF6TkuLEFbuNAsSUm5qgSoL2xqk7XjTfj6Wrx5Kc9JycFLMA6XYRSn7E8pRM9odqqAgBGZqL",
  "key2": "2jYvtTU7kz2Z34VkDRNPSeLgPK2cUS9c6ugPxRim281CKiQBnCYLRFDPSKY9XFZRHPaRSBvyMvApfSQ5e6PrM9vQ",
  "key3": "4AriDHiP56HgUPXskfcW8s3NJQAJ94tm3kF4q31Zz2cr1vvQDW6rgnfr6qcUFrzSvhmq79tsjFArFwncR6AsM5m9",
  "key4": "28vjVf8FPfv3qRrWjn2Z5Xgz8pRDfxZeVskcuPiL8qdwUKQi825ysrP1VvVKR2wM433r1E8U3MCZrEaPEED4D2uq",
  "key5": "5AfKKWeqwAuos42tiXH5A8gbYZN8hZ5PisNZL3UVUnRgD51Ci4Fkc1pJCLFYRE4DqE9shVRJg4Q9pb7WQ4k4Rwza",
  "key6": "yZmKBZLL7hcbrCLSuVrDY19T7pRJr3XJJyLdiNi3QeDsgt1dw6RyGG9pBTe7qyFPTsvwiey8jYbebhfxrTQxgL6",
  "key7": "52cBbEJefWpnxKjkfos1iF6EmTRmD2S3XJQ2W84HmPVbM9eFKjvoYCwYQKwHqAbhdR475VJboufu6ZdF6TtUWS26",
  "key8": "56eR3JB2rLDyYBe6rfJoMVFfLDyedWvAWbDdKgGdvkhDAWCoYRJF3YyR9LRipm5p4gPDe1mNgSngWEPWggtpqRB2",
  "key9": "SZYtiXuR5HtLbUoqrVTscKUWZc3S99B8TXR2bJxeEyBeFK4pYSVY8GViEUYtV5Y4KgKHaFLGpcdATJMwrT5kXMa",
  "key10": "3iYxW7exfUKJgM8WjpcytgYHY8QVxEPMcLnF2QK61hCvjNVuJBi4wYVt3pprqC3ZNiTNjqy4kPnnKe1ULyeLxKzL",
  "key11": "3H52ZjSGxbWizt4p6nhGASPEBfJUiioGj7aXTmUZ8gj4fvX7fLxTM8SfWKcVcv4fvE2krz7zbAfvnH8vAMjmvZRq",
  "key12": "2EouAuBjfi6BBK6y1oekVXEGpC2rK5F8ruVRt5Grrih41pyVdg5ouGyoYcMozfkJDpXjHSCuyg74JuPRpZ194tFE",
  "key13": "dnge8ZA8t36pyTe1ifjVgMDprgjxMf2gFbRAP61Fj2r7ECKVhAkqohLvPwXm4DRm6z7eYweQGPuu2sMZCcALaSu",
  "key14": "5wdsshM1MntF95GQrrQTut8s6SrD4nbtt4rhZLMdxKt2vJy1ZpbQdLzdjaSKfij2GxEMA13wGtSfy4PbLFXnVL7u",
  "key15": "5SxqSKARsUR1NETPgHagEXTPadA7cYjN5dbcWK8Ktjnw3sq13LvM2UVV2fPHcLyKUqASerVnBm3cJaYQpjBy6fsQ",
  "key16": "33AzRvQtzNzeQStWRgwNs6CWBemAwNxZf1hXrEdFjBDxMdfMJjbKRUcGq1CZhxMJDBg4jwfNWqtgbQCDBFQhX6SU",
  "key17": "4ssSTGUymCjpW4wCHs1bbhCf6TtoS5eiXvY8FVZbgubBUatLbMjKCtybVPQBAUUd78yAZbLmxXz9saGRwZuRDoM4",
  "key18": "5gEDpv8DpR6YeK45sn9LM98hGs8hntbCEyi79N37GxxnxiGy1GCbrjifxpx5zBak2a38vdjpMunKcXVkATBi88kD",
  "key19": "3RFz2rMMvdBwS7C9YrE5aUx3cercvrB45ZeCGq9R2AiTg7vJAmZR27QPyAENUrwDWCTWZTciRMG57BD5c2V6F5JH",
  "key20": "2o9nK3eMV4KBkkBhHqCgFFnz8XdHD6wDVHFyhpE9pch2LerJRDScuLbQZ6HENadmVD7hHpVSvkeZGhrCujp8wTW6",
  "key21": "5baCbLBNejNvrSxnkP1wjg6ZsGr66BdJqiBSC4d5fKc83JL5r4RMhr8MLdLPeqZQ7wPn2pb3WTfXRWoLgX9twczs",
  "key22": "4ppYZSV7Kc3PoanZqdd8gLwX556GT5f92irdmjh5d3ZvKhesvPNt5qdTJ6YEbvrYWdtAFFVjFvm277fqUR4KoYMa",
  "key23": "HzZq1yGBpkD8hUi2hLGvw6wsaMxksVMbLYnr23WxAZc5G8SenR1DXRZJKF2MtUj9owKj64GBAibZ1wvtcUNueZH",
  "key24": "5dhUDAKNPFrTNbo8fCSo7uDpWEderyhVcV4cuFHT1nDHx1aMUyYvCJ5XfLdhHaafnnF4qjRauFuWKrGHQ91FbVkH",
  "key25": "3akfUjiC9re7i3brwNwTNqjpEQd9tWpQ5HLbLCwzeQNjP3p7S5SX9uycCiC6WZm4cvrRnRuhUBWZNuMeyJyNvpor",
  "key26": "4RFaP7tSWLBJDc8fR8nutmHabnPTgKUsaAxwaVwv9Ksmd5t59adYtRje53vwFZxdYXwxE8k8mz6bxH8d4rFnf2Mk",
  "key27": "58iS6YcNBHmy1EVnBWsGHHaeUojvAH2JLB6ULMqYETKTUb9hsyX2QH1pvMscuqDigxRXo6zaz1MdDmSrNU8QMYAk",
  "key28": "4sHVV4pHkeJBYKg88bQv7n37tdcpnqVju6N21xfNcwuFvteLaTxZCdQoCQ5ngaF8pHyuf9WtqQx49bfCH3XHfwHi",
  "key29": "qVQCerVjX2aCipyoYf81UAtvt1vY2wpXALkWrBjBuKoXkvdBF1H1dS2kHLwGcjFtpf56z7b3XvkvkB4oZFfN5mh",
  "key30": "WVPayha7JAD6DA2cRCpZHwVQcU5Z49rHd6bSDLdA8BkWdBjCXuNmc4KzxWSQCAWkgTBDd5GiWWdx9wzSxZdDc4v",
  "key31": "2QZ7AF4CkEaVTBVnWHupf5mRdeoDERFSjnXiMZpi2hpuscj3AHiW2XtPCxFegC1RBMEjAqFezX9RLkdkGCRbecj6",
  "key32": "4PhDSZEQpEkVLCG3fUrnRTww78MHi5sTn5eRirmgzKBah2zNS9D6cg6CfjefCCQ7edisZ4n4v7D4DtqSqCqtnLaB",
  "key33": "3m1sk2fqHBcKo9VjJZ5QALycsAcEQ9AwFpdnUWvNbnMpPUegAMbmY1a9S7ryUrUwmhwsf58eEctfN1WuAGKuM3BV",
  "key34": "29WKEAKdkeWJwcpedeHWorH5jjiEZX7sCTnBbdoSFTmJ7vmGuveX417JEmEqgoja4nhrFXN2soVSnUzVTDViBks5",
  "key35": "eSZMbZwmT8oVZ2QSuKLzHu4Ss5PCTMut5G8PmTT68qAT1d912Wbs3HLonWtS5Z2H4hKz64AbC94bxwz3ToaRJLX",
  "key36": "2suyhotLXWEPJtL17maKdx9aWH31WTRdnDzyovnsTcbnpMa6aQVPmAkDkBkL1U6CxXaa88bSzsAHkHET9e7o1y4o",
  "key37": "4gEoddnfePMj2Zd2rgdRm7ZeR6NQFgpkv9ukD28FBPqNYdAKG9PeNrWNfDrhuqvYbTrmRJJqt9xmXwpfavWPxnEY",
  "key38": "J8NCXJVpMsW9LuKyU9BLVAgCDLMF8bsExBA3DBKE6852z7pEzGGbAG2o8dvRNyuEDx1rtZMwCkZaRyWT7Q2pwZq",
  "key39": "4dRATGdPzBadM3TmLVNMv7Q6mzcMsZ4enhUvJz73MUsK2UQRK3wmYKZPba56oR5J56c3gdabUCJSScdA5M4MpkPj",
  "key40": "65GF63NvUaJy1TwWy6rqjzCZkbTcB8tMJmf2uxAY3tMkXSEt6R1nKTF1bE5WxyiKtgdQ5g8tVAtiqWbD56dXB7b3",
  "key41": "2rJmhi1ydPqe89YRX4pHMfr331fqTMqfvzxeDfc6EAttGyA3T5LZQAW4s8QmAnmFxRCEstuMrNWe7d6TybKFQ23X",
  "key42": "4f3g9fcJwnu6o52rW5xnm3hBxcUvoPV6LuofvD94UVKq8CxxxrtE5LmvC4aJL6hM4UhRDjvzLegZqUFr6ZYfbjTF"
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
