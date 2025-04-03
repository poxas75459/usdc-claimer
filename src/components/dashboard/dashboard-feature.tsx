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
    "2bkrhkNRiu4KTS2G33ZU2QFbSPF8VExChdW4chq5ZoYJnieDbxgHatA1kS5xrejdkApPT9vuExSLDVsmfgDDrSq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f397Hjz8YVzwcZCY7BxdMAsesRZqkn5eGtVBETzQtmW6qo4HqWgPRA4QyeRoE9LfyUpY3fUX9Zapx85TuzUtunL",
  "key1": "UHyKMAL97y8H2C3ynREYkASsDLftnSjibCeyPwk9YCNncLqQ22gsZXkHTUkvU1ALfTTAigEATSwiq7wfFE887hK",
  "key2": "61aP2Wm2rreX8BkJZ2YGpYi7sqqH7tJW9Z75NhUVzAJgB3eCWE5MizsX6m7fToBRkyGPqASoZx1dFPaudXZc6qzj",
  "key3": "5e631VjVSF9orXPPCgcGt7uG5PKR24isvohCszYV56JH3sRGPGK5oLim4xPPxcn1b4HgegAzLBGYVkf6S4GTHrQP",
  "key4": "SkZF3S8ngURcHRT2omnYqh9qGdrQayyg8ANV34Re48cn7kAUWAbVQARG8gryPsXX3d1irGMeq2BYKhTSNrPiFde",
  "key5": "5fwY9nk2NroML7HdGcScKaQdVSHZgRxLgsDjcE87c5eQxhtWWnYDsTbcG1dmeHZXafeJYLMZjxZEUYoJFVyVW6gM",
  "key6": "3UVBUNZpa2p3ijriHxYjxYq69gK4bLeH2vgjGrm6XLtTmrjroaCvady7No92hLvABnEnbcZjX7Em8VvhLQZ4DwvF",
  "key7": "9YxxFWVdUiuhpMRKG69cXvGwkJKEGUnN4E5cx4TWD3tCqpbtLpWzWaQAHmkJqVvTLp8TVt4cxYVz1hLQ4DfK3f4",
  "key8": "2ondnm7Ty98E2fe6ig55NPv5NKo7c4kiBeaFCVPQbdndJ9v2ef4jaFadxR4womtLU29eqFmWbr45EkMrxG9aDttq",
  "key9": "YmyJgzew9ZHCjdF5Twa4aZwhH7jGaPkhiAkCQ9FeL9uBJkscYZnvCrYuZLZAwxxojNxTxL8bSdNGZ8cRkmg2MnN",
  "key10": "5F6wvAEKXjkPmY49EUSGfsDEZttwGCFHBEQEKZFEBvhXAvqE8RQDxVZ5C4ZN4FS2owWgs46MVsF5XaxM4bhJc8gb",
  "key11": "5nPmTRxjkUcyvdUxHkRZr5jrehWhEg7Hv11YJ8SojYHmsP6scX7sSjYZxzcqSc3imov3AXxPfq32TYs9vNRZYr2d",
  "key12": "4Ap1YY6P76XMy3cCQHvT62oc6JdLXRYMhwJDABXhTFGyxSPoCKWc8M27YVk9f1DACzUR5g5mZNFqhWxJozhD1duY",
  "key13": "kcCr9acovmN3fKr9ivBwgm7qfcHoEsi3ZRnr68ro6CfjqnT9PX4JiqwZSLDEtZunyCmKaKbAvLAXKeWoB9YUzXD",
  "key14": "4QGvFFFMqoeVQPr2bZaJ1m6u8g4WUX35hx2rZTfJ5anF1JnmUgorAPhuUbhcmUmi6vAcmH4YgoXLhGEc1zr4sxTi",
  "key15": "5U9u1Nx7JsLwnohgwz7WUYiz2um8huhv2h4kXKebdfGUYEFyrX9VgHCvwWYoC8ewFPwHXqBgkm5o3YD225G959La",
  "key16": "rgnhUEBryxwrXCybnbWwdZXDu6YPHnDwjhYpJvM748YNWERWy91bf8mHjobH7YHeXw81Y6Ercj3rXvnCorMwrLz",
  "key17": "3GvFtWVnqQm1Me5MBpeh7pN1BRunKnUjBmpqtaNeizWqNAie8Ywf3Q3cGHaHBjbRmJpPVtPGAJjwFWm8pu2MQhx1",
  "key18": "5ThohJS64jHjPRz28KDsBeswvWL1Eeb4UH41sBC6fcfVQcPP6kx9RsnJdKyS1M3W6YEPGCam3rQzAKBWuTE1JNas",
  "key19": "LZ7CLqK4KyJqNAz61arzHNQ5G5yiKy3RYp6wS1AJQLkTXBXnZwy9fxELKjTMqUneFQpF2tJnebd6hqddkACy3QS",
  "key20": "54T5W8zBTuv6vdcXyFQe8L9oP4Wm2YgTayvNQPWXLpx2nkeAnpArhtH4zNBfaUEAzJnFTd9Ac7hhX7cg3nd2jbAr",
  "key21": "5LTzPsnZg5S5LMRvpdXty8zfkYmVxMnfuPrUNJemjXTjoGpscHYGDjy2E1AYJHLwrP9CfLSqtzQVpVLE7LWQPpur",
  "key22": "mYjey83hRV4hhHQWTQALmatr86X7Rttnr9WNTm5E2zRgT6sqijkbxPQnke5ihmdLEPGme2FCaet5UBYBDaeTtwV",
  "key23": "3ZXrxLeN5oHwhzW4tF8qqGoxEqwedvJHei14SejWpzPnXG7MHV6DSWAt9hVPkpBGJTrFxbEuSx6KWJhX7DgAy2d2",
  "key24": "4yz4q95F7iHdegQ5Bf6wEbESNqRT8vbyFX4Cd8ReMsJUAN1aKMc3CeEFg9tcnQ7PiCqoTBRmSEahofSRmA8grPaB",
  "key25": "4aicpdXxqPNYUR63KL1Xv3FF2dt3X9BQNYMv6Ecf5JMSSkbtwHgupPkEvP7hSyCq6b8mLUWUjvXLyP2qntitQq8H",
  "key26": "3yqtFCUUNAYZ9EKA3QFrk8Y3YXPojSYBFHpAbVYbchcZyJ1MyRE3GDwJyYuTp2Rxzi9kChAkv9P72gxKTDgWL8n1"
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
