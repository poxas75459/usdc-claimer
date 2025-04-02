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
    "8Tck75zAuGBBjoWnpaVJcpBXnfMXEajVBE8E2MsaR3WpHQi6hKQDasEaPVpbbtM5rDHPjhELaiwqjyM7H91W8mW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V8t5mwPPCpd3xsU4Rpiie9U6ZATUKUtPNZX1NuZRb3WMnQtd3hT6LdV1Nfybip3X8Np1duKxsXCHhEujFguZ6m1",
  "key1": "624HWrYFPMnTU6XMkfFqS7sj87XBfNqghsTnpjKyovAHHdnPMq7c8jTYev77ABSy9M9eJsyZPfVV4KQXnrosCRkt",
  "key2": "5j1h612AZGcRaNN2dNBRzbfnJPjZYAMFeKnCWpksZiyihucPzmJ8SyvwxnxAuBNUKuNFQU6hGg2XPaLpLJsak7VR",
  "key3": "3igBNoZN78uhTirqu4TC6j4BvzhPfuSo7HXBFThsyqdwyDQ85Ucwzz5LN38nfSjqDoLBqoMCbGviSJuCqvN5dtfQ",
  "key4": "2yhvHjFwKyc6kJ8UKonCLkAXZvZDcHdC7TpWiSS4o1Wx1k8r7bcGvHgqFtoymMaTchqDRumRbYY9HRzXcFEQUr5o",
  "key5": "492LVJ62Axr3AeUN6VZNGU1B9mSa9G31i8GbEoRXF8j5B8GWBVsp54g6Efreonixfs3XxsUo6FwrHKjKqB7j74yQ",
  "key6": "2eVU4NciNqf4HAyEFNzYKopXp7yQ3h4d1HdBUFRh5NHeJdFCMgkgMAYenyjVF85ya4hBndR3xiDLgYSDZenp6eXU",
  "key7": "2zGg1s6ypj9hJxL4aq4wGTnBDGkkcyWeiLQN1pY8ynzMNtypdzeqoTAMugNqsxe1aqq2y9k9ZjM5zvjFCSfLDj7T",
  "key8": "4UhyRXwqgndrgqhd6dHQmjBdpiiJdjQzfiCt59t6w3fzPi7GygxjaGE2qne8vcZ76vuZZBUoxUTgcNfGbMqJoAWP",
  "key9": "4PD3QVZpActLHQcpfLpFSZxJAZ7bwiq1WKVRBKaqJzainvD3AAv1sjEBA6pDbAagPDLRhxDSPjZVPTrjfkFeTzu3",
  "key10": "4qDeNTE56JQ1Nk7V6uCvyyMuw3bwEEyYWw7tTqzRe75ihZ1sNfbJ5jkEfGccg9QBDYJxaAjbRKbYk1kcespjACZW",
  "key11": "5F2e96te232HgKR4raMQF1L8MgTi8g8UpV44QZnaUwnSPKZkBpWd7HorRL5AebnsQQ6WMCrkKXiPk3nmcHVnobfo",
  "key12": "3tii9jJbiyWiXVUoaUgmBFphHuLLMf2Z5kztSpnmM3Zh7miuxv3VTM9FQ2LAQAu8gyD9GYDegjeDKVU4sXk2kt1z",
  "key13": "4adtGVWZqgdq2iJP2rchzUya95vjo6zEABaWCBeuxmKfHgygBr6mQGWZKemwkijZepTtts7yX1fwRpi8JuX2SBeZ",
  "key14": "5CKz29WzLbyKfG7vMFQrUwtjvZzSU8nKzgso5nEBBm6Xu77Wo9dPKbGuqwnSuJxxx5cC68gZMgBwbt2W3qVJdbJf",
  "key15": "4HUcGPYVnrQJadtiiKrXKjhPVkcePcxN3EKrJpr2saQBp6SdK8P7eCRRtmFTs8tSkhTMagzrF9TXZaL7RHs3uxNq",
  "key16": "ek7DuTnwMy76YxQG2yFeYBufRmHHZF1zH3ombDA5YssEjz5X4BVhZHTm8VpFVEQ9yPFLybRtKRFetdxdTgF8ahe",
  "key17": "5qJ1t4qADwSGEU1QLSgMCn5WnrtL5kuPneZ1HRAwqdjLsJ4DcHHf9pxKv4WYSrwYQrKKPMzAJqNcFuQEFdUGARKs",
  "key18": "45VSZcKrZEM6bjcjSTsp1uVzkpXN98Gp2o9pV1WUKy71icRnagXyftFEHiB5JTFT1Dd5fxRuzWAnnam3vR7z58pZ",
  "key19": "3K4vZhMugd2MYDnG1ronAdAxHVVXXc9vmCRRb6bbyWUJ4vAVvqPWMuzExsB7tzbmRsPJBEDQSXY9Ur55qSz5MaYn",
  "key20": "5MMkyypbGp7kfoNngQW5WgpwjpZv2g4h82qtLtDuWq8b8R3b1AxzN7d3q3hvhnuSWkuJ3RXhpejBdjjmTEE39sVW",
  "key21": "5Zs4TvAgv9B2UojAuTvpVpodhqtQe4xdsmZWWrEfiwBxL6t1LUvTh4DEqRGZxx9CswGnZeu5CMQ5umDabymwnmHc",
  "key22": "xFmZcwjp9XMbkfykATJPRUqQ2wakfqjvJqXNvd9Rqh3FQP6SboYPFcTojQwPLhqcnAPNtj3amnjT52vsfCH4N2c",
  "key23": "5y11EoPYhnpgqZQQvDMxg6qzER8TJ35ubidH6wj8aYPJh8fRoAf2hK9WAUCXy1uVy3B24X2duL81NoAqVMq5EGXo",
  "key24": "5BX1oAF2fs9cLsTE6ybzwVuE9bUfrg6fr2KcXH6QAAFUVwHviemnNancP2AWqJiTShqQeiCfwZnGfmNHLXWExWuJ",
  "key25": "As2YoL5vqyfPVMM134Ep4VZeL2mbfD8325c6RrsdEJZYL1HSYkr1C8aeGVzCuWU7oYhEExb8DbscWmvd6BerHS8",
  "key26": "tpdqEcmRUuERYGkmdFFWKG7T2LoNmWwmHjXRxHz7G7MRYqYd4jnCPbYN6f2aVk4C6iWmWhiuUyKrNJKUwiyhqGW",
  "key27": "3x9onE8VXKmFk1FeBx6k2whoUNacmpaxLfpkWBX1xFm6M9hTFXzrhgBiXpezAY8RjFp3q92YPRNxEVnozKe3JQnf",
  "key28": "2aLfoZgWxcSBtwRBqQFNBdC2y1mqMEkHLSPj82rY98EtLMYTHn8rYgE2wFvThKKPuFeNFMYaoCwhd5QMNxfL3wmg",
  "key29": "55b7rWeHS5mYqxQmZ55neYckqAD7D7aK7qgymzz3UBu1FToU5Rq6JqjLy4f3L8zqPzkJ3Zg61e5aXWtCmPRM7774",
  "key30": "3obUE465Uo1nQQK4xr2RaRAcJ86fLpQmJAG6PfcAA65wBEuu7AHWgZAiUjJDaxUzmUEXYpMwr4rDdiHnYPgzgWGo",
  "key31": "51NqcJnQQYRhyjUz65SYGz4r7eWSVyWqFSmeqJS5fehVp8uJ45hRgzSwJD2X9sitn8EBomawUyn5CKWHpMuczTVJ"
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
