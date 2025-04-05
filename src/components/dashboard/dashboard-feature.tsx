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
    "3xqNs3aKHQGcvBXyGrtNixcn2yciCu1cdRcaUY7Kh8pMXTn12X8FwusfTvDbZ3GbxhuReJwMURs2ouFqTTJisJLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5khva5hbVxkhpH8FYUFzvwrszTVypcQWMZJpcpBHP6958wCAWZc54SUJBh9Ru4eJAnwFSRXMrcZXfPxnHNjJvEcP",
  "key1": "64xWGAABwMsXUZTUCjQMM2W6wQBZd1eARfTjfR5KoVGbBugogtrZ4J1xDXnQUDoNBDgn4oHMi8iKXW9kjPjgWWgF",
  "key2": "57Wv7F1VB8RgUUBn4n4d8pHLsLcgnfX6WSyjsaayiGvBiyFXGR5GZyZme7CGaN2MHy6Ei1RSSpskDJiW2oGJsGvh",
  "key3": "4vEXJPeBJg2Vae592EKpt1oonQyTwgzLrcvknma3bvBKkNgLksrPPRLzxVSZgiemYpDRhF1ohvFd5HHKFTK6h8qS",
  "key4": "3LG4v5eGenpoMT3nCDKwiZJ2Dyc7sCyre4KGLTsJVVbSJyHkN9ZcCcT2T7Rs56Kz9My72LWwLBgULGCsutq5bycq",
  "key5": "5de2tL4iprJFTymvJXuw5GvZ7Yqmya6o4hi5m8FuuofLuqgBdAkfeJh6gqFdxm9XCeakmfQnM5ZDSqDfvYE3W7ii",
  "key6": "sJnCx4VcMKwsz6yTpVYZzMzoVdCP8s4fb9kTQAdR14Kg9sizHhz6gnXS2MhMbWoBEyLkom449Qr35rnakMcmNAJ",
  "key7": "4JYavRnt7EvHWp6KRLGALN6q5qvFeVsGwFnPXtmfZZepjCs1fm1qLbGrbLkJgbJ9WQbnARXiQCjM79m7aJo2HJsR",
  "key8": "2vdSJAttNPRyhdk6HJFtr3E4zzjXUB8A4vJ6v1FHxhvHyiuJSQj8juAVyHTvxczQC6UkUnhgVixGiVHmG7wepWSL",
  "key9": "4xUxDJ8UUs6Ku8VeAezoMPZT8iv25yEaCF3ftPimbTnQrGgmUnR3EZBLa4KaU2UWJp7RKeJ55G475rm67qP6U9Lk",
  "key10": "3Vkve81XjGiwq5ZUPWaWPL9nL8jN7Hp2bc1YqR6H5CzUJvNcwHC6GLsnv1MWtAy1Eeo74PRg6bQiDd5eDq17DfnP",
  "key11": "596YGyuTQ9WyWrQyF2i6c1MNAh7NcEe6GSvZ9wn4CDh7ZgbJea5hE1iYeQqFLTC1KJBhzrd7ofjhJAyuoyjw8aJL",
  "key12": "614dDjxFxcE94zjrQc2AxBRF33awKB7nmno7SZWnSGyeUP87YSEhcT7Dbov1w2SxsqrQSKbDJEvEiNexTZn6B9EC",
  "key13": "3eHaEsHGaU9CzUf9o3rrYg5LomWAGUJzxSkdR2VQKZDyYP3AKY64myj43LCLMDcAWc3up2inSuGWfwpfztmKaY88",
  "key14": "2dXayMSzs3awc49WYjLCjzkZ7KY6fffcpe47J5dmRiMj6RKTe5Lg6BA2gHkZLGtbiRWPHC1yAkVkjc5sXATehcjb",
  "key15": "XEyQ4Jmqci5stwn1g4kBoBiSinBMtzPUEscNzfaqTyxEqj9gyNs1HNg7Xq4xMYPhW1XdXQv8bqncw5xiiPApPmU",
  "key16": "BFFm3HDN1vD16aEUjoiUo6JndMzVBRHJ3YN7rTXv3w9Dfk3CToUHHLpc7u9vbLh4mm8AgsovMXfPdzQ1bzMwcXP",
  "key17": "3VXLrSZ2KGVUGqivx83r3RcJf7dWcXqvwtGqm84oEwTZ7x4skkFYEzjTuXMg1KQ3Dy7gPoFu81DsCyBkxhbLAwzZ",
  "key18": "5eeE22V2hSwGBPoUk7L6YqDyYiGHf4tou3KifH7FiX6LF4qqviRT376k7o2agvTP6aihkjrv9BqiuVYBUbDEN6ko",
  "key19": "35SN53hr7iWE4pUsNWQ93FVEb2iRUpXQo2uN9XjEdD46rqibNpctpbQeG9C1v6ooyMXMPPUZuT5WMsyH74VHkiVk",
  "key20": "2mCoZRnBm5iWTDUftqmmMuQp4X15KhCZjKV1YQjJkiRwnus1C3p3bczNSZ2bigw1M59DtUieicRKDoZQpeHrGEFU",
  "key21": "MFWnJm9EdYnPGvVaRWpAfMMLYtJBsRF9xBiqVZrKkG6Aay1BBoKWVxTKpiywnujyk9QVafg8C51jxKHj4TL9Z4Z",
  "key22": "57uqXcjHqct6DdSXtMb2C6LGZtDjhdMQU4wzF9pTsnfsj1TGRynsY7WXTqmJCXcXUm9QLoi3kmtJX6FcZxGUTJf4",
  "key23": "3trawio1yVd2CWtbJVrvWq8wpNyx4b6WaoCnTAw55ePkSmFuQjMQzWCDDLr5QEyrn7ywmeT3WwNV5ABjLFh7RwSi",
  "key24": "4UMbbgZzStVVBLjFHkw83hrejx5cVdHL89ZygVhcxMdKzBnZQEn7eXH6uQrHJsvkr46EbYiZV332wUK1L98DMpCt",
  "key25": "fZh5zY2jy7mtTnwL9jtdBQHcxvYwhY294pKXCfyfk9Qt1FNRw9EGYjr7us8Qjr7mUW6cidq2Ypb1osdkKZ3guDj",
  "key26": "3tLg48jbKMrxxiAswmhzPCySKA62teu5mFiVdBGmaFafTGD9YMAwkfSD31zSXnLB6vCMg4J5e6ScLkPDfDAooKxN",
  "key27": "3MGrqDb54bd2Ez75Pfbu1a3sfPQMrdLWtdMAT2Vhzok17Q3vqbi9iRzyuha5oqNQhFzzE8FZ9dJVKBub57FZMt25",
  "key28": "3ceqsfgt8reMGLAvZaXYqu1BswygPFXSbNc5niDWX5xMhfe1zsD9fQySL8dQbpAZvZ2p2KxVAZpKffQsynQh5aWk",
  "key29": "dgQndfmtjZG7qqJaYwdMQVmtZemkjMEJVafRc3hZoaBvbaHf9ZVSLy8HZcQgMqsQ5xKViQDDyYDLGCdoCbKQgww",
  "key30": "4APygF4MnV5uSy15DQ8zr6jdESPPQxYrVe7FyGzKp7qCDu5PbfsfBGpVZ4XtXJsJ97MqwyHpjiUMg7iWLB2y5ChR",
  "key31": "5eo4ruyx7w5QuAe37dMHKF1rNG9rrcjvJfmBr1GoUbDTxBWsrr9jQmSVXrNzihTEAsrGj8MoXWUFTT2ZWFsdt7gr",
  "key32": "45NiR616edrUCSznQQiKrbKT9MsHTazRYoT5KBEk64AXHsisupkjeDoJg1WoYpmmmTMLRQxeAdFVmM264RRosWwA",
  "key33": "2vpTn6xQCR7vdRChMe4AeA3qwkxwebS5FWJkVCGr9V4j69aeoiW1NVh8r4H73SBWNfny98945ABa2LLg6KQ28zYX",
  "key34": "4ZzyjEa2cTu9nbk7iZun6b6QJMNRm27fxfKcJVe9AKVtjN3rW9CL5ZcqVDukf7RMHMZjsBi2x6eSMxSVPCZb8kma",
  "key35": "UWBh8Jsu3s4j3AL26WxvQrqZ5J47wWXTrXNBdBC3bNyYPbmpZotpfn4k7X3i26E8Rwz94os2mUPoitn4yJdgubp",
  "key36": "mHcniNLaKKThB5bTunxSYP1akBW6V8atZLQ59L2SXPEKnafSXkr6zcBLYVc1aSJCCE4xVoo9dRbjFZscRa7FNwz",
  "key37": "2d3T7A2KhCq1NGERTpk57rNXXFtZkZBENgTFhhBHcBBJQLDLneBXKDnDicr2SApbMKt9vVUjYoZcqFNgDBKgaJe3",
  "key38": "3gjDR6YNtPWFiadXyR3BZHtudxBnBvjLLcpFxLhecsH4TtT2cQgvuD8kUtSUC5xaQd4wiD7uwCQTjMTdA6HjHDAV"
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
