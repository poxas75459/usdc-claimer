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
    "5WNx5AGCocYADqyPbYtc5eifbrmP11EVU64DHSxEo4PE3x7ExrEcQ65o2bN1B5fGc5NZQ9n39FqJkket1NPM625W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SynLfXCskfRrCixKz19PYdBMbRSEb3rP9CZM1QiWWC4trFXuEQrn4xiKfTMjJiEmqiBagaEnH9SFMR8JaJuTYz1",
  "key1": "87dtaHbpYDjSTknehdsBLXVrG8NWz1DwwpEdZotf8EWUY8sxxfivRiX9WhBYYDX843zrv21nDwfXmZHsc9HLBtG",
  "key2": "3ePHxPrx7V7ux83dXpr9E3zgHyuKSznZCyft7shg1DE3JxXV9c6s38LefbgNMogfq4ukF1wHvqftC6qALKEu4yvS",
  "key3": "5sSZQPKaB1iujo15yRXUePM63oicvHrg992HJi2msJHZFd7Kgww6SvFArFvNau5N9PMBnFQfm3Qgqg8iq4jGUx9V",
  "key4": "4f4ne2cSXLRx1ZRvpFTVo3fu8kC3a4Pxirmr6KMVtZEWdY56tNbZtjwpr1jidMkyXUvsbyHuNoBDh3My58JVk1H6",
  "key5": "4Etw8HPN2VBTDg7FGHAejDQN8MdaazuBrR4Ad5sfZoGjSDhs2x8hVXNYJSD13ejpx4wX8bDKiisErbNqy4E1FCo3",
  "key6": "3oPaxqkFY34zmCUU7K2VEDVVDJ2aJh9pA8Wd68Gzc8GXhUsJh1fzTrEmeLcZHV4jVHYmKdNeoRtJvXQLLz9WSoxM",
  "key7": "5m2VNsxWbBQMQNXvZZhdvUUECoE3gEVhUALcwPRTojhU2mNt8V8BkAJ6LmraXeG7RjU4BjXK4tKFuaYBLRFUQ4kL",
  "key8": "52pbcHknXWiVhYKys3sVWovNGGihZUTqjpCW9cpWNvNdcdXHA8vv7T9udPfcmx2vCorG8nLHZsHgZAv1NXXcaCZv",
  "key9": "E1YtHNMr3AyAda6Sf726Rtt5wpQ8pJnBv2ZdGCMS9NMUVabTx6QSJkeqU3YjBE34i5uYQx8Ah7zy6MLHPdfEuYy",
  "key10": "2An2V32Pp9kKkNqpGexEQGKcqfUUX5cQ2ghH21PaTNUWGvJRyXBVXPUBhsHcsDqLeufin22UmwR1Uth6fqhbbwBU",
  "key11": "25qWSTCb9gtmfUhrFMeEijjMDSoiPjssYjtQ6KvMbH7PTEMTvVyWmK6vKG934QVCg5Sem7HNsvszMygpem3E2L31",
  "key12": "214HstFMPsyiasL5WeuPtcMCVaKxsVyfdF64YxeYritwXCyDFjEC6LBDBHVgKFt76jQpQ89JfwCg1WxzhL3f8YyB",
  "key13": "33nZe6oQ7nTn3Ng98LMKosMMoN2n45Kyee2cNyCqBihDofXNKUzzSRtHZnttuTPQR75LK3rGDYKJTQHF8GXmxuMf",
  "key14": "5C9jkH1UXunDw3ozcTn3X4MAdrKrqmK1PXQA7oE8iG3H74xJvaQjD7ahB3LVdjHo6EXp6u6pWn9Z8kc2LNExfv77",
  "key15": "4ZWAzTDugUvD6q2TT3buUrKzhpDu7rqrasxPUKwZe49NnFhjKfrVfq7gH5nDvSwJdCSYbGPdTrjCd5rLGchpFevM",
  "key16": "27jt7wJ2iXMSypM4nXWbzMy8FWXsUtfioDT3PrQN9UoVCiHBSdL96ukBJqfQiCank4uq6KNQLKCGeCT196QP7z3Y",
  "key17": "3imQMsU5eXNdsGfRk4J7jwxs4ycMa5fgCGgApeoYoeSwNHYye8E8uPBqrYXm6DqXVmYkyzXhgjEgQTiZfuxNUVz8",
  "key18": "36B43AJXPWJ2ZUu9AyzWPLwrVprNfD7s64LeYMee16JqLFyY8A2yYbAt8kAyT4usGeGjgn585Q2YZY8GfcREsfPR",
  "key19": "vo5MG5iHtRwhgum9TaMiBJoGoW2M4REKdNsJpjh8aD8Fqzy6prjp7dU8tWtP7RH6xTUrYzRYm314QcoDaFaSZFr",
  "key20": "3PU7xHzJmxukLBbPwCuqd5WYUNjkYf746VZeptYY49BZJAKV3KLtySVfFkajw6CJB9kaVerRxxroDGWtLAasKx77",
  "key21": "ccsQy9i5bgMrGJ8Ka6VMBwgykSymBrGgfyq2XBEBKYr3tuf8zeSPfEDJYwQbYTTBzXF4JanppTMy72VeiSPGPEs",
  "key22": "3uyMDh8WSXUYkPpHWboVcjfHT478fuBMy8krKMf3jCrLkGrco955Jf4rZZH2Mef35QQduUcswZrS361dSeidcCZs",
  "key23": "5GY3BmuL4dj4YUv94jyq7wpmNd5KHX5dcLHyn4mBwLhG6DCZjQLYgjMfrqLA4WtJ8TnHwMHB8mbTQrZ6HTrHT77C",
  "key24": "5iuypLbN4upC5CCd3sWKEpKq1LDQrRSb5b32ZSpz6qGnYbS45g9NWSx8wR6BwKr75BCCXCbTZLG7Pk1rSRUBaLjE",
  "key25": "hFCd7uhFcszHFNosDhK1FQpa24AHMfWDLWbZbLYRKVZsnTCsFEFwZxb1VhbEDBqSviomqHyvR2h2AR4NWABR1r9",
  "key26": "5yfu4PE5tTQXa6ofwTZspAensmshqWeCcf8UKYm3ocWSedRSMXjmXKPTPfoBmjdP1JcffrucqtaFz9r2Lrhcir2z",
  "key27": "49zAJJjMytaGTRTfjTc5kXtHVXKwGeZcgLXGqF8XwzTSTRdsf2dvpfh5dRtvKCnha7g1oA3NNQPhEQR7TiARRnar",
  "key28": "48MsvezTNJ6AMJWqPyLWZfDfmZtkayjNxfCVeQnYmpraDtncWPYUuQLa2jLuNNFPtFQ6Kz6x9d42tugLCSQSyTgm"
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
