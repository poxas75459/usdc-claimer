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
    "2e6PsYqk3NV6DRriG2Fqi33At18SyRNZqnALcGepA4CSiBjLY38cwgwYGqq1ndd7TjLkd2C7GG6KL53pSPg3Bnc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21TkyCJ8v1e1h2y9HCpEYjhexBDQrAGdYs83Vsb5zRAh2yoJEEPvBeihd4XP7JNz8dJShZEp5QHKN9vKG3wdBrEP",
  "key1": "5CkGTEg9ZjrXxKbikLakudfWpTLV4LhxFsnQSaS7f5ftAJFqTr7Wihy6wQ1HqNNA3Ttrfty1poC5cAd2qAQ34pdA",
  "key2": "2RcFJz7fvSM9sQ2FbYMaZat44qFiGXP4YRfhAC2rXT2FW5Yg4DJ4P3rFxJQvQbw4bmb7J52zgzu7LtfazbZBjQzX",
  "key3": "mwsRnmJrtJBGGFLPcxYEYNmcmxTZiymuDq14VVqgWMxrfnqfioZbimpBVpybkKfj37nN1gtKpEgejRmTu1MxZaj",
  "key4": "581bytmJeYqcNKwd9MVvxJEcoaxTzdF2kA2K4s42dAYgkFCnQw4k8Kapjg28XrCx8P366HpNsz5vSPZy1DkxgP7b",
  "key5": "3swKhVoS8ZRA2tLiPd2pB8BqsUaYPXSNQhFsNj15vn878QUjL6wkr52jWbuN2XBnBN1m8sPqQXWCBgMrYyeAHNxH",
  "key6": "t3GWzvh7W4eQb1zqwaKS4bd9RemrmxpgccZUb2UAeQpmVBTHdBhyv1uGx2r8U3u1kXGgU5UDaRQCTBAVber37CX",
  "key7": "2JGAZ6Tm4RhA8RZWPQWQTMGQv4R4xWDac4xFvEzD3WHnwBP5ycNCYGVVyaWQCDXp5VuKiHqo4vVvucQHtxHXquFT",
  "key8": "4uu5oQcahCcv8Y5k8FTYhuZxERd9ucREvsJrKh6ppmTkgPPyKNdLW7fx2kp1pUkZaRhmsFBAV1E6HoBLg9FQpta6",
  "key9": "5yv3JTuqACYaqSFbzA4WEmLmPzYGwyfMiGQaAmcKj2WtRGTjqcQBERGVbCe7Rr8ZKquNivptzzdgCqP8SkxA2d5Q",
  "key10": "4RUGynmvmNw5FdYFnX2226j2tKQ5FyQuhgEp3RwSJAtcXDyVAPcz5wSSRFxKAu9vz8MCYt5KbcvxrPudmNw2YxsE",
  "key11": "5wN7UecrWgf2TCqatd884Gau4GXvMbq6sb2xxVcC77wakugTHAGvKS9CbrRAvZmZZpXdtd83jU1hMdE7vv4HA5hQ",
  "key12": "5F6oVstYXqFAHfjbTjnmeNmAia1HJfAtq354cpiJgEzUdGZeXbVoPqcv7gixJ3euzH5QSV6cnTUnuYrPQpZ7vHiU",
  "key13": "5wvnnjH867mQsEA7zibzsX8WeKnpGdyhG1gJVxfqFzLKvrZfdh2HzjMH87RJb6oM4UWb4G7CDrDHXQdht43JMUoU",
  "key14": "DzN8TteKg6DWxnTV7jtvkg7tM8Pc3AaMCBzLZ5F4sWtip5XZj2suWdB7bzAFSEbXnQf3xdNPU4jB7ZMv5yutWt5",
  "key15": "4zB6shqaiN32WLt2VKLtc5QM9XqZKTee7QvgGfKk3zWsdA5sTyzMYkpyv2Q7wd7dtp3xmCdpoV2RRygou8ej9oYY",
  "key16": "5yxhzyq92xNdQed8Qm7kwt3zJoE4w4QQJKX3hBCssotKetFXdBvEJjGjxeRJBQNhmPpFwcFGq1APTkEH2VDbj1sE",
  "key17": "4xnZ9TLcHdB4YQYHLjUJtWKL8RyB5vead7RSTse4x3bEPoun2M8jzyHB9wA73Xh3fHnEvwCCBXaCu1N4MVTygLb4",
  "key18": "6dRj6kqyDvSxaPWAcyyggPdMzu4ZrD4mNwgGdHQmazbSfJhmDUxdPx2W6AK7TG7w91i3coU3b1779ap98zRt8TR",
  "key19": "KHjDKee5ydbcAbLmEVN7QqV9iYPMWZ2arcM13tXwZPHzFAhNq2p1AXdR5X9naRb9KJAJmKzLcT78jcKXdHgNERJ",
  "key20": "ZovVnUBpaJ7NmgG2n3nuccqQvQzfnrrHh9PeLGrTzxoUQX1XCTc1bRZxYSUfBT6DoRr3n3PQHYWeRcfXBUx6aW7",
  "key21": "2jRBM8FrzAAAcLckKU2P4ByxipTyMgVmS8FnB7KB5K3B3vJznenq22nncpiD1inQ2pYgqgBB6XnpgdD2Fg9guAgN",
  "key22": "2pMTfiRiapjKx7ofXy9jqsoy6JFQXVbyKz1seKTy5RHQ2pxjxmkCbEB1nn7A46Br2Za5f7mpofRf86Gt6AYeqskG",
  "key23": "3T78YMs1GUftcg3gnqqUtbst3TSbupJLVBfggXyM9qpmijVE8qm3oZuNYj8e2p6FrTiqiFbKq9ZQh7gqQtmo1eM6",
  "key24": "59Zi57Jrntcaw412WhxJ3XqioWD37gGgvYA3p7pAdcoD6bQgP8cxmX61GB3cu2uPoeAPZUzd8fkCLSrST2T2tCJg",
  "key25": "4wbafNJw7zyGMvpfiFFq9zS1eUSnxPggBiXPTZ4pcFCEBd3Zk2KkKapNQ9xfywS9Ny1qmB6tgXdqmXTVKwqE6Ax6",
  "key26": "5rCU5dYn6uWxELFnWKkfzrvz2KNttsdxyAr4jETLLResA3rvT9asqqeduhzeQ2YDzntgQsxMm2BzRDXhnUSdhsk"
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
