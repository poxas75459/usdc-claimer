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
    "3fhtSEPLj9NrXQrU9wZEXHmSJ7FWhgFVyz6yCYZ11rsynVPc8ZocixAonByiyjrFAVgenT28kdJ5k6Eq5L5TzpVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42D6GbJFJtEaHNikGh8iqxfbcdKNbyU3SfWMF7D89zDBQN6z3pX3EwnrjW7dJ76JVWTp4bjakjmBfnZLqsmA4x66",
  "key1": "2tZ1WPWKxhAgkHhvwGrfnyNkjLac5pA2XPy5qkyawoGvaWCSTrYUn3HciwgEYvEDHhq65SPUBD6FfTuuePUUJTfE",
  "key2": "5LNVpi8ntwtEG2igoWtGaU85Vvk5WJsBD2DE2iA25jsA1vUDXAhhpfFTNsHRUzjQ2D7PkzhxRHZCmZDtUSVmiywz",
  "key3": "3ftyiT11jku1yHGuVi2FMPTKZ6XQvQ5x1JGUvVYKy9D5fV96MeBUkffFdToZFjaK9FHEC2FaPtmfAAw1pPmYTjuy",
  "key4": "4F7wQaavXo1bFTmph9MUek6QUzG8SGynEudArreWBCbJdegShrYusB1eK8PD3TA3PB5GpyaaUVgByZC6G532Kiab",
  "key5": "jQELvtRSMNGP4xAo3DUi7uwfTZvFa2TkuoAL5KeVA6LeW8QaYqLBW5wwQsoFBiQDdu5kLAhrKXbni448MFkAj9R",
  "key6": "4fbWzJ6ooCyEJ362N29FpJYATzF762MuXx5WadNquD3sRsMsrxWSGLaTo92t98SNGw9oDe3mwjKUQdGPr5wQsrVv",
  "key7": "cQ3vBeCjPFetgqM76dJQFQj1fazSV3D8oe2S7dgX512ZVdmrb2UAckzVdPbVHEpdUEiaXr8sBATwjd3un8dHYkW",
  "key8": "4dkjzrRS3Qgz9C2MhvqFgNCuFpmVGNvny1GuYvSKjF6xjBCHjo6ZGNxvkxTUGfpqqEcf25DjtojU6UQ5n9npLbTj",
  "key9": "2gDh8qd7tqtq5S2YR7RHnRdkJcAQNn4trp8pNFw2ZdzSkCDWoemwTbgTD5wTH8u2FPaHSnHWSTq85KvS418gerNG",
  "key10": "2W99y3QkisjQczg4KFsEiNwNPsDyp4zbWaGXJm1DwMmrzoCfC5S3b6VMyeKpDazo5J7eSiHJycWGMPHAM47uoDqz",
  "key11": "3yqxsMfBNtRQGyJRfC14CKQBh6iStNBso27K9Nv7cCZfwombMCXb4ZqBGzyuGYk2fWcTPRJZQdDshSp7Kvwhc6HE",
  "key12": "2358zMmYYr6CHuZXKWPvhKVavuFYJ11qA2cTpShjgrziqSCr5QPpgnHbq7akU6w5WxMBZfT6o8KpLgF34MuVc37A",
  "key13": "2vqHSeVqh83pQRR5jTEE8WKo23XGgDK6x3WbFvFvJdPJ3Y16r4hx7r3AxEao3YE8nxUR42WRSiegHmuLfnAN2Zfq",
  "key14": "tW9ys3e7zRgZwxU2uvZCD9Hk3zETEV2RfTA18fh3k4hVe3hoSw5deC47svy2yc4ygEmR4FNqiUTMvtqgYnHtngQ",
  "key15": "9KEBuj3xkgChsdFxnu2Lb7bNcBXYsh1YQ2VUMhcAUShQyQ6LegvgvVCuYwHyjTKsnifw3hHzVqjypwQRr8CpbUo",
  "key16": "5AsTznBSkMNirpEtyVhJCX5SCSJoQqiQ1mEWwr5YbYvQrBWiJFRdoXY1kLbMhzwAjNWq7KEoqJ1TSXeBXvnVfL39",
  "key17": "3f3nmkP7tjoCaiis2K8W1UVT1SXUKMrEN94dXnr1ynwR9oxdzRogVba5Po257yE3RVRup2TXPgASdH94CXLoLGvJ",
  "key18": "5KP8zppei6PS8q5m4E71AAG4JXPfSULcyj9Wew4upyvNAsUuXXy5ygFcoqkt8JWGibGp7mqdep7STuGtaMkKp5p3",
  "key19": "2mfpmVeGFtkFMbV3SMfihDKVYx9MYP7fc46oB7BSTrtfQBhcgFuEE7tz88DV5Gk4yfSAq5mBPJD9y9f5y5tMyMF6",
  "key20": "4dLNtj4xhSKMiJKSpzTZDySHL93Nvnw2ks8GRMkkTNpd8Q43Qy1RpJVmtUyYTFri2aDmei3v9K6saiVc6YPxKTUz",
  "key21": "5ULqVqSLsM6iBTKWXUUzKEFGxCYaqMNJkSQxomYefY9VgjJPPj7JGGQqgx67M3qfu7kLxG2SdyhykrwqVs6vJchw",
  "key22": "5YzSzDME8YjDJ1NqzKyTz81CpekDHPTqbHptRjhxbLRSgFEk6WSWXKq8GXvLtjEx9VD6Wm2mduwU3r7AF3CaAHK6",
  "key23": "4njL5EXfznSvqYPnSRyECAAkFREbn565ndXPdEPfJ9DpKBKdL4vbp1u76yYTyuZiY79oSQsMVTnwskfbYD5iFgyf",
  "key24": "49KfzqYMpp1RGNBjPURTvqUCY3kbc3nd9ZKDToXCa8aR3cFZxKTiGvZ5UtTES8dwFheoekc6i7EEt3UNxRYXzUH1"
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
