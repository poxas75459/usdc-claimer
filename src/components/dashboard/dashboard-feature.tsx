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
    "Khy14dgbAcRuQuzCRd8fVVEynaR4TNNn7RpzcxR7uEMPZgqZDFLuK7SNu9zweMU5hPXwcZHJmjW5jqHkrrFaaKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PRnVg424gvEc5A99LevV2aUfVLncVs6sobvWuZVHY6vgAxyAUe5y3fbGabZfKbHWZin4jPiknwN7f4kxs6US1Lb",
  "key1": "2aNZwRqUV7tC8VZtVJdJusRKGxufVXDVhjHeKdThqYpec6yJRwEZ7X9CPuoqwZBTsyYxZ2HtzJARQRLWUrCYktEC",
  "key2": "2PmQB2jnELq2F5n1QnA9f9BYBQQaVhk6AJ2VRsVhnaWX6NhyZ1qmw2vVZXaNVbfXXwyHhFrWF4cPmj7H2BnjZY3W",
  "key3": "3PdgobbrdhqgJC8UxSpwz982nTLcy15kcQ9Tgu2Qh7zbYAViTNSqGf4dr8eWcNebdqS2tozhm2n2R3zpfwDErZcr",
  "key4": "3TcDqXLXhTESve697aqffJ5XWM4GkhsVUfmAyUpPqprx5HCsLwED6wmaYAuddUB3aQnbEd4qADypdDnraanAqzbP",
  "key5": "2MvUkrV22gDxb1mcWLA33jVn36PJxV6k9onTLvFVbkqc2pnbyKUdUJ933h7URUkkRAWZvAUoFqgFJZi3VKhyTXfX",
  "key6": "2mSM4dmsnK8jbUu3H15c8outiT5L8Bd7JekwDf24sTNTAYCeLLtWbNzBphuZgkjrpGGQ19E4LhobFhahWBYAsvqu",
  "key7": "3vVEqV77uGVwQzKjdHaFsHrHHbjFBhg7r8MeH6JaRAfgRsReShnPXTaDhwdHFNjgYZJmyUpjqewexEF4fzwLtiXr",
  "key8": "5knShXkZU5hYnfprmMbfokomCZVXphMq4huojLudA9vL2Wd3MjgaRvnQ3CPWBoPxaNcjiRfrBmpTUEnjXWTKkHuD",
  "key9": "25BJAEGaT8tMjnNMZXYQuyE2Exj6VkNhJbP1mq3PP73RuC4jPyB6SiHLLz3mEjtV9gQpmatweDN6pxrn1ZT5g7Fz",
  "key10": "4vXxVvpQR3oW6h2298Lq5HcF8erSdkZqex1VAgt9XKhQXuGvz3R71f3QkmvEAVe38dLfvxYoi3pCGB8Zo7csYbV4",
  "key11": "oYWWVKAfiEg6RutweSsrykbCHsjG3wK6rYa5wcvUJopC7ySD7Jr7Y7xLES6Sqs3NTPXLi2pEkKNzKfcatohEwrD",
  "key12": "2Wfo4ETczMewKQfiQQfUGNoQxaqBN618W87ejrVS9QyDxqL6hiBn4fhvGPbjFRrwZ7quhJNmUhy7SimgMCebUEc8",
  "key13": "5FYeDj1AFukRRvqahczLuyeheS3fggkEfwf7VSGxuFZycJi2HwtA9xWEu27fJzmxu9eVPsfvp6XQaycspawhuyBv",
  "key14": "52vVK6eLWEg8B9GskbQGFSHuzRV23f26WZoFktUHeL3feoWgcPsV5ZfvV89ojtSonsr9TC7N6umXXMzn713rqAQN",
  "key15": "2TE5ptVmTezFxc5pCVBBK57Y9v2bd4JtYPCeQPXRTaEqaTY1azZZ4dzdxtfQGvoSFrTD9vJMuqE95CevzaS64NiL",
  "key16": "5ZYxympTbskSVWH4z7fLesWH7LHCxbFNNuk42KsC3C6iY6rwufiTWU5cjoeF8x1EVs3PBj4s7zUH7eNFwuNpnF7E",
  "key17": "3gH2tjHEaxVd762MZ7SnMGTkJo1gbAkqrwBmJ2omSgY3VNQncnRDGqDb5ozYunoTYEuDEjPxZCjeVtF8V2s6yxPT",
  "key18": "DyLXJEDbF4bYSkzb8k68fBCk8U6m9kcFE5EyNYyQ4xcHTQfMMFjuD6cfJBoUSncfyBmG8C3x9FWmGjqhEATxGC6",
  "key19": "SDJ4uWa5b4afSzNDBx8J8UGpDMAcv54REEn8MySJ77wM3DKGg7f9TWRg2WRESPQPwseMVMtr5ExqgcDVQauKhsF",
  "key20": "5gfwaTYwaUfyt2CytpcqBtqN9RMBApNuwHBK4vuQsrVtafLqsknvXNCDTE4rdjjtCab5L1vz252cUmUfoyxMuGgb",
  "key21": "58XkSZ6YSJnJLFWJmgcj2ATw6LHCMZ36Q5UsetqwF2RF2d7rtTWKnG5ZuqxPekvXQmBhWXRwfVsAtWyfQE61GapV",
  "key22": "5ovk1goyxAv6gpHKt81vfvoMn2JJBEPXx8eTvWwqxvyxZrThoJo5ogKobz85KoFAojJvRiEcBVQ69NF6P17Gv8gY",
  "key23": "2U7EWfbqhhjtkJCK8ezLGAjGD1LZbhCLcep9A1a5vC96B3QgPz9Estz9MVjqFR7dUGYW5EgdSoJsAHMpKHDC6u2v",
  "key24": "3pEBwjGnv2p9qUAhKpqtDYuJYJokiTp5cHrqC3YP1wsFtwcgH5SqRb9aLPiMP9K5FMChTyab6D4pkTocTfgXDCd3",
  "key25": "29P5MWjSbMPeQQffv9ZEKMeetvgNaGffwQ9qauFEVuiU2gm9GmzAsMUbdDAdwdR47jfPxNPNb2MZH9YRVgawovGb",
  "key26": "3wtUFGYjo4aipSkrjNCtRWGyuCN5wDYN4KmryTny5WN4NoNBNcYEePTwG6XBjXASdeSD4Svw3CmNSATWQkuTMcwb",
  "key27": "539kDhTvWK6fRfpQJF1qZpkzY47WhvsCGFquXhGHejawGzR3QKvasKUTijN4UNqLSQFhiMQsA98fR5wGqmF8mKn",
  "key28": "7Mk5hbSHXjqrq2o8gvyYeDsrjufVUgWiS2sxmBbEzoWd2hAZaoWDu1fL75AnpRzVLWRo8awJDbLRAHruVNEQS1t",
  "key29": "5d4eUrZrqEnfhf3fgD8jT3GLm3xBQ7vim9yBUJMfLgtCGucSBB6UvczBp3APfREXLaurcFqgTm89tciJviMdWYqD",
  "key30": "5nCvXeJF7BuyAgGkuMoGpa9vQZktCmsdkaxR19Fq9Wcb4CDZQ82cB8dx3QtDSbDJZVo9jSgDzKN9axP16rynWkAb",
  "key31": "5cwhK19QwqNBEs8k9tWL1kaNkJ9KasjUkA3AejKQy6TSJjUobQGiR4kHFgRhQWJ3s8x2AimjcmioTC5c7pjEkE59",
  "key32": "F6HfLRk7pVXNoDLmqfG7Wc43Sgyu4ae27QyxDncHoq27dNujzsLB7Raiong3ZyaH5mKbJ86Jpj5yo6ghvvR1tV8",
  "key33": "5EmeQ6NsvF57E3CECWsMQgQTgsngSmk5wCki7djFmTX8ctQT45sXw74rSijcEYZuvQgp6KwE9WtwTxwFhHAtpZWs",
  "key34": "41LUZMKhoNBxm9U8D1yPyv8qG9rnQWo6mFu587Sg66CL2HSnwmLNH6J3AYLjiZtUYsQG99zRrYg1Ek4FjTtfiaHi",
  "key35": "3aS3se5p73PrhhMr69iwYhYto5m5BM4wkemP9F5au1FvsEL7erS6gdnuqopBPAWiMvy8P2Q9tDuEe9dztp8aCQz7",
  "key36": "5jXERqMK2uLiu5eeeBsXXMXRQ7ffeFex9saQH5UjJH8jjQwhJ6HUZ2cyzVMLHWjGGZeC5Cwnwn3tiQ9Ht6QkLS15",
  "key37": "5H7tfH1yXWf8jVjmweS7hTmt9XtYMkpphnQTQLzfiy6L2WzEzNzQi2tNv6peFrrPoXDPNSdK9BTY2U9GzAisAjaK",
  "key38": "5bpG6vKFbTYTRukJkh2Qci4aCCcmJFdtGRchEB89bz54BLiFB7tXCP381u6smTFRr5VqnQXiJ4Mny2zMRq3n9SXv",
  "key39": "5QBaMQSFcTVu799TfRfEFmSzoaimrE9FmAL4tpQuZcPKdwz9rpafPMSuGR5kuazJvV11cbdutRVibMH1ZMTEGN26",
  "key40": "26pPVoD5LBLeac2NBDTVxTWt71ZqtXn9t5GZPykBenvWz71BxGZ3otGTVcjFGEGh8Re4iwthKFrW3SBfQ4C8FPMq"
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
