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
    "2YPD2ajxHkt6e5zgBGR8B6TtwiEQwnFvy8VM5sD2gSqMPXkogmxLNdiRRUh2qXFYoFjQUQQS7Jnungd7SPFqYPqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n4wa2sa82o8UJDVrzw2kg2H6vsCJ5Cj88eNoxRDMK7K75wNigx5a3Rt6rC3d4XFJuLqQvdFG63hhyzW6e88mKA5",
  "key1": "64tALGYzQTuXtiNPybSfvZ88Yj7aZnBpnudh5V6M7ZoaW2zFzLScGA8rVFHsakw5Ka3zNRGXA5QRjhrGmniGzY1J",
  "key2": "3TVdDgUkBegJGz9PxNXEB9bT4L2TgBdxaHkiYvY9xe1iyD2bhiKZ6VadXKzd6RtYQcvDp69f7Ng1Xgi5yF4nCT8F",
  "key3": "5NwhvqytbyruiDQUDMUcFaPWXdexMwY8p7BVEMbjEbiN7bdCgUdKJhgwzo9WyBitcS7rxoFFXwFozGyZZdfqNVrj",
  "key4": "xKX3ap28zqbi4tfDrcTuFAm4zszZhXTLfxpkmLmJ1Z49h9tS9W3d7QaSUoSnHuzEpuQciMUAGshx8PKDRVh1sEq",
  "key5": "4frzYDfnfELYd4crkeQk97KD8D1mcvKchurHAfFSVD9KVTe4UEt4YFRf12XuSauwPZyBuFJLL9JMjn2f23AWcdxK",
  "key6": "3zEKh51Npx2nhk52vGGJGq2JzerDztB2a928vuj2ZwxkofzXbB8UbbiMv1yo8c3xtfuGAbJPD7AwtW7tNhG398sB",
  "key7": "5VB9tJV97TxQpvdj5WabUWvH61g4WUMaLuXmnjT3BEXKsVUutQprQxr9w8qr7d5jE2MaEKYSuKjxeMVvEo2zDW9Y",
  "key8": "2M2z3HxDpRyQJnyB4bGsPfiEMWqs1bDCecMtEVwotTrtjjaPqJz4SBmeJ3sG8DzwScM5cVVvqpGuXuCWCvyGgwGB",
  "key9": "3XaZJxTaMs9UM8BJEz8wEx3euFai8D7rjraQAnEo1ucMwWmQt6MiYXnanD9kt7C1BixY8SwTxC5R7ZBJjU9yuZeW",
  "key10": "2m4w2Y3LrU7xcLemLX4U3XWNiJTyK6WXDXyFe2pxxmkrRrzFcuuAd9zLzjqbHddGU7bXvjdj7J7NTkupfsJ6ihvM",
  "key11": "3C2ezeeM55LRGiRjS7PiFi8maX2bmd2mNWgWgdicuCMxmQFwiJovY6DoUpA7pqHcbjVuHqHBt5LgS2mSBYz7oMfb",
  "key12": "5xvCpRSNPZU7V6JF7enHV4Zu8HehJieoH4onSLgeqbphnLUhhyZtsdjKX9k5s6VUENKKXAbscDeJU7b1XfCcx7pc",
  "key13": "2YPU7KpnY6QDSSfxrjiE5FJfP1V54J5EyhgqmuotEqxu1YTQphrBWdetwzz1nbkUCdHkqvNKgKadqKUaXC6MqB5T",
  "key14": "4Kdgb7YebkGCXuJSAVfpsMLEE7EefkpBKCHztF2PaBzKVcXiaUnMuoCyaD48y3p2mYRgkWmgZVq5YK8mQziaarsm",
  "key15": "2mULMKVZkdDfUuUVRDyoFQ8BjyJxagjGMiwwY21gttEdgjzpSSH7cTvDKkDe1acipgVvbi7vdgZdt2rWJqzY7MVk",
  "key16": "2WA2cqs5Zu4XFV1waVrZXxpV74XNhUoQmTMzw92kGj2X84aG6vukxADUbjgktND2gadhUMTwWFMeBrbFLDT96DZW",
  "key17": "2S2DPM3AnAKzmHKR5PTzanhp2bbhVAHYHmsAM1WbzTm9rkhvpg4F69eT4SPY6uWBEU24W41SkLjEEjUwFBiM7awE",
  "key18": "2Ka4vNqEtPXuQaN9WX7Yycx4T6TohJW1yHgyjJzUzHcHj3Kz4eTpRtkxi7meMtysvWUEzjsy9uMUijTjbhJqKGpf",
  "key19": "4M3LW7TWwXBMhzCg7aquiFu4yR9rACsuFK9HuxkVYPdJjZYgFsXwSekBNPTsp13a6g4BX1VdQNyzZCLWkLHjgu4m",
  "key20": "65hcghv3wQ3SA9g74com73wHphXzSpVtv9Aedysgkzzezb7vviwTz213GuEFQxbpunKbTCPyfpniepPuD4V9o7o5",
  "key21": "92WbU7dst6tk9tZPUhzxqu5pqh21xUSrBfxDMPWcfwCjYfbCcfWb19fSKrEUWfG23BAPtrvM1irebSnUJiMstFP",
  "key22": "2NUCYHoojxyFkGJ52SFNZPoQkQFbXhmZNSiRiEbve8hL4G3Kp6iZUixG5z6VcZN4mvtp3YJaXsitgWLyz9BiDxb2",
  "key23": "5iK9hcWV7SCHt4mntX8zXyBsuR2eHyvwysR4PZarsJfwVvaeUVL14MWBaWyA5XDSmUvXT6KfXbkjr4t1cUiFk3TM",
  "key24": "R7X2Xm5tKcUHFbEM2oGqbB6UbkCN2osUkd8bg7SrSWvWEXpGsQ3EKG2Hn82F2YyQGDQz4dz12weoGwYoV6nxyoW"
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
