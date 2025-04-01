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
    "2DPCRHgcddC9X8anNecLW4JRRKCrvGM7Lq5ywp1XwGiFoscg4inTNgV5GmzEK95n4yz5daJLxMtAvpN3BSg8DEGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fiSWXwCncUtv2MneDrFKY2e5yU77oM4TZrYszvQL5U1EH4fWFNedfxz17xR7H8zhEzFShgGCoShTWNwCh7SHQj7",
  "key1": "4t1uckxrZ75SobkuPWLTGfq4N9rvdAgGVHndYGBhYxGDrMoLAgZtXsKjKjT3JY4VTPXSQgmVSTuXEZeH9r6qM46P",
  "key2": "38TvWhg1NxNCQHBSyA93116LwVG3G1Bgq2zB9PHzUrJjJZjBBYztx2e6FiNFz8iYfMnF29bPRHnhAFt6oE29hGXn",
  "key3": "5Kd7m7YuJ13tVpRJ2MkuvEtmEPFUBPJFspamt9PEPSUG8BqbMEKLNRANE4hkW6oXF8kCsJNb1FJkyWXRLVFWG8Wi",
  "key4": "2FCqbnXSeSrcZKzusQNspn9AezNLXN3mpscTzdPxQWkeuRwQpcZaZKPS7AmjeJULWAMBPoV29mRyVZLJXRhHMcXk",
  "key5": "2S9NqjjYbvXP4ZCxpdpZhGixfwLWHaGDiERU72aiPbEnP9pmsm8jGr2hJEW7BvaBk7mUxVHqynJiFVZYnCSJAxp5",
  "key6": "4ThEnCB2J4LkNnoVMJmSKjVkC1EuEkFKxJ7nTMPVit3bfmasbwP7Qz1Zj9PdgTmcNsQ15AQDDhBRwFZD4dYfu6fb",
  "key7": "67ho9ZTrMHtf6PuXq6nDXBmASYSkAUAVyA6HhvAbeqE4JeJth9x9hE1XXCVEPyRrDm5AQ6Y6bi67vWZszGkRtEPc",
  "key8": "2obYSwHpAw9JtSdvZcE26QoQN9Yz79FvH5BqSn3yu6ircShNi1iM5q7x6yN4roNADRjbB9dgBKHj9x1AZdmdz2bX",
  "key9": "2UEnytzj8TxsM2e54Dux9h7v6fzg1qtZDoeYCkAJC12aM2RibSUCvTi2jwoRxCEdbRHjrFvGFxjNFc8aiHkAFnrn",
  "key10": "2cCtCNqnn3ZBKEpm7ZdbmyGVYV65bmeqGvUL5Sx1DM5XdRmLNenPMy5RsFVEv7csV8wbN9MgoU4NejUgbYwLH5xs",
  "key11": "4Vu334ZwSiUZpJB1tdtWTx2JgNYMyPRXwJSzZZwMGdaVdyysifKK6max9fsAhTM2JFXhGfJDYdqi4NrSKTrwvUw7",
  "key12": "582dYWxWUDTqtWGBxagPNxgHCfSmpRc457WaJLsKFE4xuW8Buu1zViwacLXzroaAaGYwvD34CpyoLL7EP1E3RXjW",
  "key13": "3oxfnNqcvfVsPfwT2KYPaSEnDE8dGSAyjs2YeyZ3pskoVJm9k53ggc8jXmnbwdEQ2j278UFHWGsMuJYGSu2KRSJ8",
  "key14": "3yfEWZ2jdD9CBKPe9ZRcVgf5XKBZaBGK6RGcE3am42dfLyBY59iXr4WKJY2QkXisVRMcyCkCdV1MMKJLUqgHhxzQ",
  "key15": "4seTF6ZE1Z3iCWUTvU6sh8DHwLYNhxpgSrT4c9LCaNi6XGkpNLE6xqUB7qdmoR1vyjCoXsMieix4ysm3QJEztEMJ",
  "key16": "4AjhMqjzLcx25eV4gWQJWqwvUc92GxeZpjqPR6ttyD1xseyWkJoQ83ZrEHXbEGrryXo7RQ2cNDjk4jwtTFbMftff",
  "key17": "5RLp269bwVbw9vUCi9XmNadMmE938hhTv6CtHpVdXJvC1mR4S71yAW2hv5NZMzLMCqLEig4mTpgkutA5cyveTyYL",
  "key18": "5k7iCf3uE21q2pL2mEm9iut1D38p7fJHSaxjCHFB1HtFhwdPvHN7GYopmFpQKFR34WNHDU1urLqBVMVcXU5wbtV",
  "key19": "4AbFaVKLmKJnGHRCGjqgoRXWcVbRkQJJS39U5535xF3AnK4wk4TJE9GKMD9LWnJaSgffwXUYL9LP7sWLXsyjALdU",
  "key20": "3YsVCV5SSTRqxcshMzfq9m5KezjeGFNZNVEgg6aTA8qss4huaY9J4MWgTsFJKacLGcJgkn9rNqR8ntdauRZhtuZv",
  "key21": "SQqEn728e9kqLPZBCD5ZiNvweyTJNHsjYVKJHAMJG9rZtiRS3U9GuhmXrZ7AqeK9sexgyR8e5tZGgUpyqB591rT",
  "key22": "4c73UAkS8cAhHNNkUd8WCPu9wmm9LGtoSWJERpmuCLdMAZSeirgrMtkkbAA8dSqbqH7euxAo57nFMLBomN4T1XGT",
  "key23": "4XM3zhhZ4jHwCtJAsZYkqjwomDutDZz6x2p166PT1teuim7hmEdamCVsDedsQm7xv6QpkWrxrqNXfNioocYnsFEE",
  "key24": "xCdT3vPxyBQQDKNgwfCMamZzFBxxBAmE55p9ppmx21oZAuYHiaxxd5hJCL4NjKfoEu86RAGVGzHVMnCvZ6zN2fy",
  "key25": "4rSEbA63sd47rZ8tbF4UCHffVL8uRQDJLy8jKxvBNxwWyw9dm1EivQqyfLdQmBkD7FNShkiiZqjR8QzT5GGRBB4x",
  "key26": "2W2kxX7yWffu7JfoHkbMDKzcFjYd2K63fv9wX3vMyXetrN66U5RghdDxbpfPU8Ep8xWbi1CVVx6qGzPqMQHxh4gp",
  "key27": "2rDUQFfPXbHsWut3q5wF2azWDLZkarb9WxqyTS6HoPrbW4aTQDsBYY1yRCh6EnK7qaRAmHUBpMGpVpcNLDUf1PgJ",
  "key28": "2ze3Xt1b3Ndsb8GitiCK3vdEKLYTbkG4zg51uLEwbQ7yz4wsqUGFTK49PAxBWJK5jXhYn4kBbKMrhvybZTEEfCT3"
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
