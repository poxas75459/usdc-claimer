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
    "4amuN4zMk6LUtXhYKgeWu3cwJn1qwq8xNAHq81Rpqjo3xT2L424a1oEg14SrpEunTuHdy5G2WUmGk7EyAPB8Tmu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y6vXrYCz1cQ7T2zSVAuVavtEbQud24e25TftCBhT5yfC5nETdnNEaMfkQqrfcyVDZdyew4ixXCsXBF8rJCL2dQp",
  "key1": "5PmX2kfRUCsj1gTFTmBm1V6NToe9twBhz5jPv63HNPQX1hgdPCsaepXHQ61rN9r6WgVQCggtkJRdyU7szRCMKdFS",
  "key2": "5QQjMhV3gt1renPCXKKthBap41XKDsZnCgTVeVdPVWgrHSUr3mM4Hu2AwB1BHugdJiYL8vqwvaXVq72v5X9UgyhL",
  "key3": "27GnEcscUFkjzb86upCVk9enY5Ffyt5DiJRTiWb5qN3yK4jEU6tS7HhvZA2mr4rvYdE7oFwLsnGsN2yFmWKTBuSD",
  "key4": "1EKoBZ6immu9gkW5js8v5nhrSdRPd2pQ7vi6HivP8KkvJ3ufjwVBTqfBXRMcE6qexVvUm3FGZR9jByoPdammbCC",
  "key5": "64NWi3WfP2pG9ZRrTotSw9ejocjVqtEvqPbXR1sPyFYMr7fmJdvMJtkdBJgbmVXxfyu7dP7bQ3Z85NNMvT6yhsAS",
  "key6": "4FYk1AMhVYbbgkSdVdFZyDJcakrDg9S8k1NQximNaTVE8Xj895XtjbscvvyGgNR729c6ULhxZkjqae4TseK3faDA",
  "key7": "4x6UB8HXBWQEMrNZG3wec6A9sou1LCtzHyFNBNRp1dsukB8WCmEh1XkcDHojNJBkeqaVHEEhkmPDyDxFBWGYuo4w",
  "key8": "LwJxdiWnxTPiXWiB4pw1ts5TQiHMGFgimF2XLUX5tzDeQAFXwhaoNtKfP1zqgCtYNAS7Uht1yUj2a8uppGQ6hTg",
  "key9": "2VvVRMpVDiXojKMw1J2LGpVEr3LbeHRrNuhA7tRt5wyQQexr482iVm5uqu9x4MnLqKT18kXHm4YjmAhzJsvn1cFz",
  "key10": "8kbCpiUnXryg9ZGbXv8jgwNb1BtNH6RabsszGmjX5eaZ3JyqTusitCKkQe7YagWCfKLLZZHbgqweSvzWjTtvaX7",
  "key11": "TdYDRwK6GCVLBEivZ8TKMpGxKr1KyKdue6Z8PAfmcCYzCLV9B2FE2F7sbT2KusSLcvfA7LFoCAFFHJbdV3qqSxf",
  "key12": "4QkSK4Vrxu6Tb28SkwGxpHEkk5mwgsD7YsovkZRN2ur1V9HkcdUJ7u8QSjy1H8Qxm87qAdTEcBZapTixWqFvHS8p",
  "key13": "3Bg2pmF69hv42qvifqTTraRaKbDhT749sPcoppiR3yaJ6ZEWVnwA3hxSNAUgaDjgVboZ8qYLqRPBExi77ZF1RJ2z",
  "key14": "3RygMCnpZiLtHqKBq1AxLpTPEGCA4yydJEtc1uwnKyFVRcVg8KjfnYzHStPiQiFerqzsWt9Xx4yqvzuEriuiumBS",
  "key15": "5gMYNs4AFtbkSn8F27t3iDo6T4anuddVHejTHR4pPvWqK7njQvzJm8UZsxGcNb8Ywwm7kWw641UuExqmeyHfNe6e",
  "key16": "23FPY3xHHuxTDbJpYSh29oAJafksqxgip4U1WHxoF1krojqpjRhwkxktYmhhZJtDYtJ7yL848agHQqXFyaXMm4sH",
  "key17": "2X2EGaKhNQ8CE6Z9zX9W8wqAidCFG2KRQFgPaV1NaKd1r1Ey6evdFfN1ewRG7iLpZoCMDWnjeDUjLwiqPkKa76J2",
  "key18": "28XGaDrKEmt3np5bLPWEsXGR5g3EvdcGArnayu3pDYmkGkm6JMzmR2SgiKpKhpNsot3QB1qVCNmy5Q3V2p6JTMyh",
  "key19": "5iG9u7wTCyw1hDqcZt2QBj8V1UanspQnqdg6xTZwPD2xsn5u8uCcD9T9KPbgjCVeN5rvpvYFw7GU6V3sDBnaycTA",
  "key20": "2jLQyEXvcWRvg58yJMQosnNwRnJTJyGz5DoH19sGwaXMMYawmMUts7oCZhafanPYEP6ikXXkkNJMLqSRKz6fjMjp",
  "key21": "4nN2sn2eWt34U1qCb8mVvCYcFMTBYSGkxeMeaMJA9PoP9tSSTqbuNXcd5e26yKZhrtdXieU3vbPh7pHWaKDj9qkA",
  "key22": "63dQ77sfVyniomZuSa85dbAjo24EmehCq7Fc9Mr4zme9PzjvU4uBdNeKUTMAZTbCQuxfgtoyaCX1UdLPTCyremYb",
  "key23": "5YpurQ49a6WkdqSU5Vk4ADYhH78HeUDMHhumprQ3SJtZoRjJawxFcMbEf2hk8veWwfgZrHwUiufkBrqRxaJjDovz",
  "key24": "3MAF2Mme6WD9kGy32oZQeYtpVREn7jbXQ9hfX6dzdehtGQJWS84T2YdqF3syM4jezsmn9x6iv5o1qphzAcs5omRD",
  "key25": "44D5C2ZMkWdPzMXdhDaPBRiX8nyQBaJEmHsN1R15Sk1MuDyxgjdCnQwqUnLdtMoc8mioT7WEuRqYbdux2pNzhydy"
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
