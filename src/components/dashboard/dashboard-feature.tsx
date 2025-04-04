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
    "42stkLLL8KpPDGDG9MAMWVndkJuEdH6PptJ8VnLWfa3stxjz9p8FNAXqHhqeH9arHeQChQkCVLNzRJ5CTttNBiPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kj3L1QpZ4WABtbYhpPqZnzfeskZPmqVBYCcyfLgHvVXjeDmN918a7An6vhpJ1brdid3c6X3nc1KURcWwsr5eoQ5",
  "key1": "676mYwB9jRPmYQnhSDWktaPNf2KtaQmW1sxoHPQYewxcK6pfYMAkMKfoa2rDu7huE2THr2kZcSvRD2qUH8yaosNj",
  "key2": "5QWnw81YC7Je8BUZDYhtnNdUE3uphoZ2WCKF8iBPdS7UDCDkH2TryaXbJT8Wb67CNsyUkKMqrDPkxgJXbg471cU4",
  "key3": "3mHoRjMMY8vHNs1aouhobnE5dzkXGFwqtZxk2PTbeANuzM9oUZBuDjmLmToypiFJKZ1z3e56JeYSbEEy5HiWBZWc",
  "key4": "vRpwjnWr3aij8sJ9FMwvzS8egMvqq3insCbGUSDiZcYAqfEtf7F1D2TxzyjcWFjuF67uzfKjTw1eTdCnPvHH5WJ",
  "key5": "3tBYteCa5Xobu5uPPFQbsqCZSzVHq7p7YMVpbLKJ4v1wateUMt9mg3PewrXJPtafMzyeCHT2T2YmgJWxMNd9SJQF",
  "key6": "UzyckyMoqNDB1F5RsJZ4ivVc2AB21f3pdB5YG9vfmB8f5Nn3ranqDCNgLbgkKGe8c4jH2PnL9yXfNGJaqqiYQZo",
  "key7": "24zqasGzitBPexoBHSBAGCwW22Md6kCojoicSmu7bK49cwn9pxrQJS9DQgmfQzw5P3omE4bpuxRubmqqqvfixKqX",
  "key8": "4VveK4mp5iFmxsukfKhTF1FR9biNzZn89bWPm9i9vpiDjxVAiwJX6ynNxxxdxbk7yiQWhD3aGRbeKoeT8q7TZsM3",
  "key9": "sF3kpDcj6ajLBrsMhb84U7g2Tzz2wmwywNkT8FprfRLCmHYCHQyAWvKv77yV7zXfhYLW4n47vbtfSBqbDusP6wP",
  "key10": "3F9wXkbUZg1Hf9t7A92XNthd2YHRojQWtXssHXHhhDdrLDSf8TqnHYQPJhgFxxhHZ6StTwAEXM5yFBAyciqkpSY1",
  "key11": "BvxDRyJMsJkpu8eVdeTjr4qFUvEPVjcpEhBwP8Qcz3itXK5fWqCiwjprTrhvrMEXDnEmZ3XMyQXwehWaXAUZZMM",
  "key12": "21y6tZo9k3VAAfCgJGe1nMrBBEet56CtC7WcmXgz3Xj6zpden83fKGjgw3GijZ3B2jwx4goEjd8PjgoT4S5nzjgj",
  "key13": "58rty9ysDHVdFvGHB59GUNDwYqYfGWrsxV89pi8D7rjhFosgMompAdJfk8gBvuKxAFfSpS6NBEDkkMvnpJpnFymX",
  "key14": "2XAF75Wq9JRDqwZLwF33DPCU1gfx6479fKay5yiKfQTBCjK94T3HXhZspeBYvYDC5wUf1HBAasEF936ZJausGcMr",
  "key15": "3GXLp3c7yYdbnKXUamixTsHSAtTdH7MPXrLG4LSfSSJ8prZ4noc4CQ8ttgbxkn3CysDfDac1TZ7giFqt6CwNu8ix",
  "key16": "5jzFPwkhunBwE91qRF5yEmKDEe9SG8Jf7CN2FGcXz7UqxLaFPx1gTpQ3MnVoJ9gT383EP8NEe9gksmGC3Yaot18h",
  "key17": "33bqgq13KzF86Zf4ZkGajzt8AZsQzTjK9FmUPFeJcXLbw9x4278JpHHfCxCnd73NpA3oktZbroGxWePi5GAQfycZ",
  "key18": "3PyNpQbgKVqeGTsNC8Ze5yRqpvZiw3UP23KPoWDBh358qjC2szUxAV2ZtYFLeHAonDUcQyBdMHDD3vfZaWGhzuKy",
  "key19": "4rFg4JLe4bxragGKMJBZ22P2FjNnp2ACH8YkE2J68fpqbUHUoS8qzmk2WzhRt5qDZPCbdeXZLZiYuTiFbQgSnQNk",
  "key20": "4UX7WypAzJ8qus7SuULDUBLBEDfZKfvqPKN5Tu9mzFT775zahhb4vcTNwkH1SWNijYM9nNJEwh1pweu4tcUvp7Wu",
  "key21": "2HhGf2u8TgfeLpPrg77VDSg69H7rHfVe4UYuumbir2rNw9BxdLhKRnq5Yti5NE2mpf4WSTrtvvzDhFg2xYbmvGcg",
  "key22": "5jsqbNSgvmwSwf8FaxDzdGaFGra2g4SJZDY6N4WUPNszEfxMeX61ZcASWggGD2qhY3HEW9VR13E8ALAMNhE9bNXv",
  "key23": "4g7LnosGuW6E5N18JMvkRX6vt423EdeAj7Q7rjWjymW8SUW4MFjmW83minb44okdr4scfQDWk9PSHjnhQn7sqXdP",
  "key24": "nvopa9mHz7WkjZ8FipGYEvqSMdNQ7wg7ttQtPMg8TC21wf9QAVdfwJvDQJc3PYWYFAA5frkdqr2XCpQRXAF9hVX",
  "key25": "4Gm6qAN5eJDEPXidNhsNcRptS9c14RNM2d87z5RTmecbQNQjiqundhoN7aUTFgSWhVPwB8ne4drR7X29RifUZ2dn",
  "key26": "24WD5bYRpKfSNv7sgymcVRxp8q7XYMJS5VnqSMMxfmcbNRjRTVKRXnC1adFgretAQBcskhAzf4HpX1c9TdomSExG"
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
