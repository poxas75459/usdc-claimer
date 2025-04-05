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
    "E3kD7rueG7yrRtgbJ9ujFCELP3nWV6n34w8ZMtbGAUt9rXSFizPP7Ekog7hJYUPEQMUsuTLvRoWADi18B2DCUxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qJnCBjePUeNTg8vtELnvAYNBpJFAH8jAq38NRnHYQBd8gihMsYuQoYLDoHCbaBekwkhwqcLQzrirMoW5JiFfWLf",
  "key1": "38b1MgrfsULd8V9qswR19qYYwXa1UfC1kAMfmGXQjFmMJoPop6y8yYZ7teewvsVG11vQkzA5ppXwciESzhHKca39",
  "key2": "3zJJ8upzLVHnm5vba9oh65zcphWSsaQPxvMou8h5KK3LdBY26ghKfvVCQJpKWpeDULiz2vzDG9JM4iN9LufsPP5f",
  "key3": "dZYtYWM66vSMxyoRWW9vEYEyvuNf6p8XXUHfFfR8Zc2swrMt3YVLoHGbFd3zCbnRXZw54Xh5H92hjDD72u3netj",
  "key4": "2MRGsHdS6whM1hCwxD55CyKgepwTpfKWg7NV6dJBUJ2G26xiu7tJe4c6KKiQx4sW5GfoZcuG9WK7WUokTnJ64F4m",
  "key5": "3dFaY4KWRkwcwhpsJpkhne9pYxqJSYiFK8BTudn2YuR6Rh62JLZQkHYsvDmPS2vCVNEVtC2E2B5HrG5LhQ4XHDez",
  "key6": "2CmEuACbiwG9nYNVprAiJMLZ99VXHF1TzfvF3t8YtZKhLjF6JYBnNdaqXnFJ4dGnHie7rHpZkcQs6XxV8mGpQdu",
  "key7": "4jF6FGT6UfjDdCsPytmPFQ3syFvecrrpdZFQPMLTsrdprUjCM7972vjDkZwCrCo35xJfWTC5PAwXqrXzVBjNUtaK",
  "key8": "4M42Xt4Lb7XwSdtpa2Wp2s5AwuDAPJo8vBp8YuRKPTStdNLkm5jcNW7P4UUti66uhr7ZTxaYavBFV2ev2uiH48Xf",
  "key9": "3JbZkivm2K2W8GxZohXLVGvLqnniszegDo6aMJcWnbKhygB5jM1uLQQH8c2dRbNrZXWZFmm14DnY6ajsviqKoEvn",
  "key10": "3g83mNXF83Hec7hEm5VeQuoV1PSjara51gAoqBmPp8dB2yU7gpMzAkBhwjZ3uDjMMG2dCFzdf8ijfbrv9XTbgTZY",
  "key11": "2V3HFaQgQ5YgZXiqkfSdR685MbjH97SPBAanqjnAKttZsigpZX2QEo4RzNbB4L3psePrBoQhq4UnDmL1k72ZcXZW",
  "key12": "5Z5pHfHsGsrJtNWQV8yXJkXcMnktY8AAbCQTAXujeGjXXo33DPeJkZ57z12Y61MuZGYhnYiSzK5LReTtYLMtMAoR",
  "key13": "3N6L7q4VUTL2d6MkXACCqs8DBp6h3TUnTaqacJpmQ8KH9rqLUNNkGcTpipBNS2XmH1Z5Q6LT1sHaU9E6jX14GseN",
  "key14": "5oJVHvgTsnxr8DaJBnjZbREHFf6fEnHzM6JW9KADqXB5gwDzx91eHE1ToLdGXSVu6JETxRpEE5RhjjMRCuWA9k7F",
  "key15": "tT96z9pwh2HksLUnYzFjkxnbmu568sXr3gpthsN6AG7aWNRWDMY9tNpATypDjipu3VdR8M8CHqebNdxLrjHoGPV",
  "key16": "2kJztgH3BUagSExiiLP4xNpH9kYZL1h9C2g8db4NdTYY72LZRfAFnJxrDR8DYhZYsXUuPXLsRVRbXFyRzUJUye4J",
  "key17": "53SEyuqToPAnMMzC6cUqFGssyKjJi9J7AHzTc7WhedTTRSqtsexQMdYXDAEaouWbkqeDYjcWgoQXUPn29aEcVQBY",
  "key18": "49tVNcEBz1aUb9hVj3H4u3WG96Nxacs4MsVurSLmBmYTuLtgjuGx81sdc9oVKCwRrhV7uqjzsYpmw55geTdg2Pvh",
  "key19": "5se5xRGCFnh43Phwi8bmdhBznLkm5BUrWPFyZoAkmrjgwnBjRQr3BBfXagE6fXnMGFU7iNHvwp6vDvoeuUv2d45C",
  "key20": "5EkzuKPF86pMBMxeWXmDFuQScHMK37uroBYSSE21dvx5FttDsGcZmmpE4XTbiQ858GFC327kQSheDMq5zgcMj64V",
  "key21": "Au5TJbmQn4pMCJH1oZ5LVk3VjYLQ5Dwx4Bx6RpLD9qwQRU9LeEXVJ1Xf7G63wU7dVsMvVa2tJontbPDtkdE5UGB",
  "key22": "3AdMVoGYdGyTnmuHbGA7HWueFkjAKk4NssQpgDtmqcP7dSm1pdJC3o5JskUp9CwYAdAZhkrUtUQzHL7vTmLVYZon",
  "key23": "24ZrUhMtHVhMSiXZh1AkzifYogokLkinEH3tdw2MEuNbsUYGNVGMBDFqVJaxMjeiA2skfY416Y7jsU1UVv8pLxAs",
  "key24": "3YnNRGPCg3bbkhNasiKv7dnx8ogiq6jJXmNR9cooABvNokohzgEFkHUspePHdXAds8HEnQ1Z5VSxmHKKPmcvRq1u",
  "key25": "2cJb14CXJvUq8C9jJGnG5KU4Tiamt3NaHERCQyBfsPCDwscXQRrXNkRMV87zZCpVRwc8XBTxk2ur1vJjgZ8CiMgq"
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
