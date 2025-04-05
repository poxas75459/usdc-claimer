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
    "5XB5ZFTEZSJqKsJdVtYXVrkXcCU1kajVbHbNShgnGnp33DU9wo9oXhDx8edrv7rACHPQiP8wvAMyrVbz3vUrJdua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AcKjsGCVGtDMqCsmeAit4b4YZvLw38guqaHZSfTHySdZNvMNV6nHE1GxGKa4GUiWhE6cyUv7HKgREkEX5XJc9Ts",
  "key1": "5z3bF72G7rF9wgPz3gp8nomDTiE6eHAMd8vPK4yMZ3LjbHn1EFU9yQnNUPzuRjC135dxMdf22BYDDF6rUyGWejTB",
  "key2": "4cNjyRUUzjRrPVg4qWaPTqR7R3rnnkURCBvFfEwQRWs3zMr2rXhPnrSawGXf7Hg796bXj8WEmSrUCYwYrZSvMfDh",
  "key3": "2Qq3mpThXknsKzwC4aHkQymfMopScYhjyUGERUNi9Z1JPGkYEfPrepNLjtN5MkrqxGhcnWrbUa7he3MAUX1mbqVA",
  "key4": "8DQXzGh8FRdcWTFE3btiz29aYrdvKxQgADAUAocQCABF5QrR2eWQ58qJYosKmQxffL1kfvc6TWJ939uJW3XpXEg",
  "key5": "9ZJLDwtGrTJ5DhVT9tJQJymRKUumJNYvq4aq1weWCzLjssSKYgGRbnTNkZGSjV8PrdDCMP5mn6zHx7WFjwaWJkT",
  "key6": "45VaM1jbsMmJ5QQSeiKSnbjkRVrJH4uog1KpW1ZzvGPz5A4fsAqGFKuUwPpmCgts58EskeyypretS9f7GmZXhnuW",
  "key7": "HVe8o3gR94MWSk1MY8oxKjSNoML1hqAw8uKtjtYQosTKjE2Mrnhj17hsNn2CThPDARMRxyr9oZK3DSJhytBB8sN",
  "key8": "C8sReDX1hdnovJZnX1m5z2Ggcz3MPbAQ956auwptvreaPejx8WsrLVDvc7TAGhG3ep25jGXHK5WaKep1M9iS5jq",
  "key9": "5BDKWrBDvmi1voEzhBRm6ZJUs7EZRTbXR6Xnhmq5ndDueNr5ArthLbQveohzhbCJZ1rsJggJgrJyaNgdN3yUKeq7",
  "key10": "5vZstpTAQ89vwCtftoZD9oR9CQaAibWWCtiShfghCQaiK2Xw4mc8uDa7L3Cvy5FbmJtD4LWV9aDyBNARXE52yEJE",
  "key11": "53qDJxPWneEVVEgXtJuqfY1sjpEetofxrqRYMBo5xGkaeriZbxQsrrwoCVJx7LFnXBfV9mTjpP4KbyvcxTFosjLZ",
  "key12": "UTF24KDNR4eUAkSSSMfv2CHQAWd7omMNzgrTUFAKWym6eqdBs6CTUeSmqaZvvStpCRi8ezteX5Hq5QKw4JTDqfs",
  "key13": "3jKMgJkfjjdKZi3HR5BbwWys27yp6f8pqzDk89iyBmJbDrgTXTHoKXZMPFcLrULxvoN1C5BhputymnT31RwowBq1",
  "key14": "2Skk7tfqsFFDA7hLiiKVeVAHWKf3yFJAN9zYbV9oUM4eFFUmphGUbycFzkzRych54yjFJ3HnYPa38E7QsECWDHFY",
  "key15": "3vNeXAVfANmDcWgkxVWtjRZbsS1E629gSksqjHBG7JyKaDVpbzrWRW3QetThAqUC3QbkTAThpEwKdNiCCeBfcgLk",
  "key16": "3X28V46TG2q7fkjDvyeTigrPttuB9SpoHHTJJRLJxrjhM7t9YHjeW4tFTXowsyhodf2tutu8yQidbJEZLLzscGqJ",
  "key17": "3Lhax15e1r3s3Lo4m49WBezUVGmVxSyjaCh1ZctEJ7d9ZCuLzf8iJamsUkfLgS53QfLdkHQTDDjjZMKukba9hwGo",
  "key18": "5Fb3bZSPWjAYWt5gGY5NaY3VD877HewX3qUMfDBCjN89ECFS9rNT6y2wUgZzr5sWoG8GZcPP441W97LSvWfxWQVX",
  "key19": "3YPWUQcxCYKNs7e6sHXrB1syu4rgWJS2TDL6Xv73BUZJJYMoDxcQWV1bfeqVTvTdgbBDnckm8aH3iFQVxvzF5DdQ",
  "key20": "2uWwEh6zqKtPVnJigNNL1gmNanizMMDDtdQz4zyJLg1zkGRSewXipa93F1JoDRs4PWqf1CxZFmmtDtKoJnfHr1Dx",
  "key21": "2ypTKhm8Vcn5GYxfF7qeJiRe3jWF1bbhASLTp46VX9DmLh2X7J21by6tHb93tK2CqqMXzhg8K66PWUxnjSD4qD5C",
  "key22": "3n3kCk36XDDAxMvjwQGUAEE2XSYHpaq41LPSmVjyrJPGsfQwWXvhb8SvWXtPFMEK5F8xJDvKFch1VzAdqAmjr3Vb",
  "key23": "4p2uWWDwHExrdB6L6NsTGnGyn4m7A8w2MRsG7TV7scZyNkmb5DsmkMxGryrRPdfHapRKusXknrTFDK6xvhoh6dBs",
  "key24": "2Hb7kFJcfUudUmxEA5YzMNMjcKAEaYYwzzbpxijKpnMt8XBWGkSdprtNiiF9Y8VgUe9uGiT2H1h9zUUZrswmWZFL"
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
