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
    "2fS7xicLinULC7xF3RRW4C8riDjzdf6ErjohyodtGgNSYc2quKcwmUCUSVWCYHT6kJ1zDJFGFU5G4kY3Bfxzvbo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZmxceqfYAqkFLEuQgEHUSNcewY1mQX3CzCpH2aZqrM1VzVLSDr4cRgyPFM5jEZyqU3pntWKXERNWruyJkG5zaxy",
  "key1": "9xAVYaGHCeBZt7ayQD5HTdwA1bSA8snLEbWyqDNypoCqVXAZg3xTmzeVocJZQmBc5yVkRp5gLxf34VsCfrR4cYc",
  "key2": "3S7Z8kUirERF5LZB8X6nBb2LwgLn53LitPQ1DyzRzr3nfFVBTDysiHoFRgsnL1VD975LerCKUnPRaTzw8mgrAUpv",
  "key3": "2YgMSX2eujtXdgZ66JnV4ozWsvPAWZYgDrmv5PbjaxqKGHdqBrdy2dNWsRnFsX7gxqsA4bJetBxxQnM1zNzxobEM",
  "key4": "4hxPBu8rmH7oj5nBBEj6TRtoWKJuXgroNxtK8nQ9B7C5AYtw1fHpc8RFVUwkG5oXpWgyPnjuvY4B2rpvr97Zq5TK",
  "key5": "4TwTn9rAvtZqiWcXPvLbcYCSnpGmPWqDtpb88CbSHJVFenKaUhNHnKc7tESbLfEARVeaE4vjPcwVLQnaeGEJupSV",
  "key6": "4H8isnCEGGnfQWAKQdypQu39kEMvWyJvsbMVX8WnFcLLvDbUPmbuv9mEGPETw2SPeYc2jQ2jDNuaWHMN7E8nXpyi",
  "key7": "4WtTVgbX5d4FSFhpp4SM4Nhox6Sc9cALvewaJPWv3onFSYCWNU9RAkweCAMgDY6U7vHQNdx2qmCCCJnfAWCEfU1F",
  "key8": "64kpGBLKBFMkr8Vn293kPjcrFVXA5qjLC3qxjgJzNGsNfao1Qpz3RMjawRyXw7AkH5K55ndqVFPSiTvFfFTZ7qQs",
  "key9": "2L6csqCW9pRLoZzzG6RM5Jrc5ZGyzuBNkm6SkCkDoRMTA5aAX9iKStHihgtqfqCdcVbUy7pNLpXBN8DJ24t2iBYS",
  "key10": "2pWNQc6XucXtHZEpp1MNm2ZnA49WdmgXbrq4GfveXonbyTmJUiingu4tSQZqn6Lz232t93pfbrwGVSGJ2Yh7Qv9U",
  "key11": "4ZPUv3TVCnFoUwy7GwbyjS5fQRCeucinMdPAD9SmATg7V9XxioHxYAnVEo7cfu1HbDVZ4cyLEtL9u5QAfztPNKjf",
  "key12": "4AQWZadvkELzbFH6hMv8NU1asjt9vwyGdeADBfULxN2Hs7ssV5RukEwHcV9RfCRUuMkwzYwkaqhHP49mHpRPGv8J",
  "key13": "2ofb9Qbp7fpZt55Abd2kZS22aLSg9HEkRVGjj2vXhAffHtbdcx56yJi3iFju4CLqAk7tn3BJNtdHNgPseHBtKFfL",
  "key14": "3zZyZM1kRsJo8NC9JCWgJmA1iirgxem8CB5LwC6fPApQyrWaN2uJLnSozde9wCRCvuqk7z5bhS5u1FEyKgdmfmU3",
  "key15": "4tvnVcXGkWpPdur3fcQYbyqkAL3j6hJF7teezghWUQJz6WgtBWg3tPcUMNziqGVGD4bdBTQ2EDK1hhBJyw6j3gLq",
  "key16": "2EmTTWdHCURWb6iB4KnqLqHR6BJetNdaZSVBHFpX94j5aWr2qs3wDzzcuRa1nA5RUJ8ERrNuNJJML7bFd7BjAWRK",
  "key17": "X6kYW8yweA6gT4qkLwALLtRHqhfeqU3WrQ29hPAGjDZVXnwkBxh7TFxj9pSPT9am5JgupXUFXcBvTqqrJJzuma6",
  "key18": "2dAbDQK84RLCSxvXU3saWkrAix3rqfBKtX6Rr3id39u1AVXejPcDh5PXAzKUvumo3wAZFaZW5r55z8AzmG7u2Ee4",
  "key19": "tafRSW6DYU25nA5M4WENX9Eswsh3mghLvgRUFk586xTHKodkyo8YBpNMkzxpqafE6LdMs68K7WKmLixQES7c4hU",
  "key20": "641Y8afznWwT1KLu7MpfV7qPxsMsPhrp1esGYdZCG2dEVyAZpfbN6As8ip2igTPmHmLzHmc5jW4LeSpjXXrfGeQp",
  "key21": "NvLj7Gy6NVdeUXBkbNwFM4phwcrMf2bHLSx4B8xuUhVmhqPqdCmGVw14fEwDJywPKoJ9cNy8pmvM4bH6M7v1ay2",
  "key22": "Umz9PmUapbQQGZ3dHPQGpRs1Ym4N9Ndb14sQmdv111BsusgAAtADcj9jVniT6KK5pthKDK37PjvrAgJSS5LNPRA",
  "key23": "W9GPVw1SLjj3GJ6Jbsg2tWzdFVBrykjqJDpSj9B5d8caGVxyr33g72djLVE9MT4xsDBxeiEzEvTUFaAKRLyptGL",
  "key24": "61GDLY68DtrZpn9Evz76eYJScHEDBY4vSTBNG6apzRjHpPgHLoqoyoWn4rE57yXUUS4jiHoirraSotdGTdduTYtF",
  "key25": "2zjHCciWT9bhsVYSidJVvVryc2j2JvDcYVBrxFtReE7K7C4YrxhyhhjFyUmuiursycNeB9rwUkwkBJseptTrWMsG",
  "key26": "5SaNMZ7GGSGQGzu2972XppuvaEeZunszkgm3kBSsWUTWD8tPkJ5hFTCgBaSiGxKVLweFZMbqgvBB7uaaeqBgFaqw",
  "key27": "GULoPxSQ9Ls567veSAvaAZbv6qDEJDJpaZeYoFZpJW5MWvXVbQBFzJ3npbMK5qPJpYcfC8fXhVnL2b31g5hArvg",
  "key28": "2uKq2zYgCDvjKNh7KWoPj1YC24WkGQRWXG9XBXjVUG3UpwFYE6N1cgfyRv6m7ocUjnAS8n9KjSwBGSPv1LjUYxii",
  "key29": "3sUoNfwxJpdQDLYTKGPjyoXL4CiEuUoHuSv4KhyY5Jt2WUTEPx7etJJ4X6jK1CYkgzaym7FUHkdjWJwdaEsnWaub",
  "key30": "5CVHguLMqraWQYMeiFEj7wM3hEneJZPgcBFc2YYd3eYLcsZRunXSPfYFaX9we6iBg7WEKouns417UtmuKyfor6n5",
  "key31": "4CT1HcS9SsMCHW1fGmZoGaHZ59f7WjTLMDCoWTgSDgBZDQG3EdpotmUY2RHgJXJ8FsiRdWTo9bQqLbUt8h53np96",
  "key32": "33yhC2nEnFkrKGmUj4vjnQP2seAJmR3CF3NqvrUui6ANdfGygTNgwyQkDtmjY7bUDhxpp2J5YjTvhrLqmTfiXkyU",
  "key33": "3KWXuwhiZhfdZ64tD7apqhz9GggPcHvXRhWNT5C3pnBHXC19yno3Jw1YCefap7sgscdLpELaXWanH7raZyNX6tjr",
  "key34": "34N7pjhVNJzEEYw749xBFsSQungnFhCtfuAK7ogyvg6zMKAeT1yM2bF333Go9vFcE2jRxvYeGTeqHWJq3JSoYVa1",
  "key35": "5vfr5yJvNTYFkihmdfJh1MY3ZE3kAPncL4GjLoB8y6aP5wmtzDq5TawpTdr2dHG7chq25X2dpHrFJPbVwyhVyx25"
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
