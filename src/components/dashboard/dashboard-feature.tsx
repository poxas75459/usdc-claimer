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
    "4kGqEjph7wPACXrdpLkFzRAGcvvxa2tcPdawfUDKDUWmY15G3DysZ7X1p4u24pAkXwcQTBzHPi8UMtzPiGUP8ZMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bdpy49yLmbC8A76sa2tviVE3gVhnuHQXBMCkKJBg9zRuJCfRNMQMJSvuBQiJRPJjWCqJYCLmXi1dM3NYfmVwn8N",
  "key1": "AKHHWQSNacYM5WLNiEt4BzhY9gKbBT6DawCdmSrVsnwnMEmcZxznYHXAwFWsWgU3KPDhrGTKV6foPnhaEnzehJp",
  "key2": "4vGbTepUaR9gRYrJiK93ops3CXTCo7yJ6WiziUfubZLDKzWSQWNRKgLNc9whtMdquypw6x5Z2YnBSwE6dKzZJEUf",
  "key3": "3GM4Wjq6rycgdGunhaeVjntiwDcgqPW2GwwcXhVVhMqAPaz5PQNiMewwWBhyDZi8zchd3QRGXm2MGXuCTbZArNsi",
  "key4": "3RRcrWPuFYhpwSDcZBDazc8AgXyecxFNnqjTCmVvy3YrcZFkhjT8EHSn9Q6K3topNmSp3KSj3NDM9mEogoujdC24",
  "key5": "3wVxJBKfxUtgLkLgrEH3protPf2qVjagaSZzBZ4hLUS1oCysGQG6LeJkrVbK8qVBbe9LDsNtLzbXMPvZZ9kJoYgv",
  "key6": "3sPjUobt7DtyedgDLxEtDWYwaU9sKVDj5544ktNFbgvygyRnouHvvfKbMgGG6fbUsDkf7mY5WziUWT1ucCJcDAhY",
  "key7": "5Fbdbjnx43CNBDzpg2mnVSvsgLEjR23LKyhNU6StgVpwXzWs7YaezfE48swUxDcMKHUSjLvR6qHjBWhv1SsKtjUz",
  "key8": "24RNSbyk4CAM9jE4NSwqrg7BHEjwNqihaSYmp29TQ5ZkAc7N3D8CViUeNTuaXuDT3di869yn3jqc4H5JERUAfT8f",
  "key9": "2jfje6F4gRGQKhFH4cRV4CR664ogq7obJrMUP2Q8k1JogX6wnsuS3XdUBbt1qSsMhp9S4yDo3NHLsTgnZ4htpsEP",
  "key10": "3cD3mPhc45RAFawxUTCei1tgELu2frmEmjh47tqRY1FcrxVC8WcgQce8W52brpnDYTCwd8K1pco21AL4xRouwiuj",
  "key11": "3YpU2dQxV5tPn4pXCauefS3W8V8HYNwjLF2BGbjFifztKnVi1zZaVvjSHD8zb4apqHAh5sVmN5eZjGFC7DrxEVWn",
  "key12": "32iAWdsebAFq97gwDvXQY8EdZT2brKhTLzHJydvUqApsymgd7q9bPTNNfwswoSZRb87AuNgkdFKMPRWA5viYuoHi",
  "key13": "5WdJMzBqCXSVekm9WTDZJ4hJRrMoehE1AGMhdgGpgG58P4kBRiDypfC5V71T4zJFfqqcfT3WqyLqBXRWtjYvHURT",
  "key14": "5pA7X23GiWgCfmivBcbaEUJeCn5p9bhYht3gfw6h77uQP59yGYktapRSsa2ASPse2AyBUWjSbesMgPCLYSQhxH5h",
  "key15": "2227Jdv4RfX9oizLzzRWSkZbEL8j8RhEwdVs2kfaPrJKRB4Sk67vvH3v1tJJN1fwfdpvsuSMTHpyBaFe3AvsHS4M",
  "key16": "3qLTMUnYhZdjtVqt5j5SnCq1gWdiPj9DvyebNGRTEk66tA33MxXAioHqaHzPzTWUMx4Duw1JRiwk7TSWnSe1B2Sc",
  "key17": "3S1TPhUmCTppb9cBUEMpVohdYLzJNXVk8cVz9wB92oDAGuP9F5nvNXwyRBcAhEdHFqVh1wDRFC4LY1D86Pkyoki3",
  "key18": "53dvWKwKnP9EouYQoNQ3qQg9ZNFQqFa3hs6FTSExBAuAXD2pMXc7g1NFmFbUMo8zrBQ2fbYir8JDfcbNKjth5akc",
  "key19": "2LkckkuQVSnzz7yhMryVQ4nuMLcRjrFv3XEVqKK6QzZYVuwbPj5PamzdfX1FtTyow13sue8vmwHKRywfpZ7a6FuD",
  "key20": "3wAxMySdztjdFJ4ZRwFTu69LfLzo94rGrFAFHYfR96SALD4y6C1msq6M4uHHaoZks123Y3oq5oVnrUdpy3VFvk9f",
  "key21": "BiiXagQAdWBUdMP3mbq13uVDCCeL89HcqBHYAXRBqVEtNEPbAC4wJSX1s6rAi7xAVzqeJa74gNZCqDSyrfKn7so",
  "key22": "2bVyFfVFr5yPs21XzazPhfjCKc2hZExb6xgueY97kodtPLsoumVcCK4BYs38JmKqPH6dheVVt36pf6c6xESvYo1m",
  "key23": "5La5pPJ1yGjwtvpJm8KeoEw373aVT2cxyjPZHgkwpa3hMTpAa8p4dyz9by8Le7fvUTiHxjs5M14ujGc1fTJujF1i",
  "key24": "3qhWw3dE28Q158kMQSBa2kpNoTDsGpCnqWdYodzNg4mWbSfjUzX8pyxMKLHN1cmJhtmC7GQJHXPWkF6Gs18WKWpm",
  "key25": "5ot51SjHgbjRYSuM6iDeUdsSGh1wNVCD1sjAMfR74dnYViixKDJPuUHJ7nEVGkHvNGMRjVsHEd3ui1S7RPEkGUsF",
  "key26": "5tx22UrPPhb1iYcucC1nbyGLrXdKv1mcRhbVHYz5sgrcerPko2fBUkKo2yKhm7LQryEDiX1kNmp3fkEXz8HR4HWu",
  "key27": "3BdXmk6o2pA5bKbgjCs9HkQDJpQ7J1utwfn3TXTLHzk59wyzJyYruLozyeiGbunV3nXBEsMx65GAjk7V4W4MkaK9"
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
