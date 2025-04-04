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
    "zY7eMmcTwAKL3rtQWGKzs3PrLpdgkJZJgt9KbYHEXpxregu6HaGZwSsPeXtbaBJjbC5KDh4X6tfLsiTXZFQdezD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFJwCWA2yNCSCSH4JaQQ1c6RRwwm82Mi89pVeXq6RreGyYzxHNi7TSDSQQSYubHdUdS1ZKu5UwSaKxWdMqe2kzz",
  "key1": "2SPdCAZuMYNHEMbHzEYMJMiTLgB6q5qvDSwDEno75C9QmCmnmANoka4Ar3noo7jyonrhGWktrkjUCNSBn9FeFk2B",
  "key2": "2wzsU3AgCkQUHbbX8DHy93SkFx5tWar1xBHfxymBpFq3iGJXFWRh4aRZXfeHRhR5iruj2LGftAySnLfyKtw1mNK3",
  "key3": "3KKzHw9DwtkxZynNF21daBRTtTTFhryFzbAjS87mRxU3Cc2Ut9VXrGUcc7gJHoDYFBPNTufcxk415c76kxoHPQAq",
  "key4": "4PXCjTiEfN9U3x6jijXBSicfhpQS5iiJcdGf3hUAZBr81aixiHnnTaYhYJ2rTBAExx5uxkZrKEEBtR1jo9Q3MNE1",
  "key5": "4QPKawUbV9xaEGfUFXoV8rHqzENnCnCLANUpe4q6iqGoLTuNWhabtwdKfKnj5geLcmhnf5QtKEiCHpbwRMT3vpPk",
  "key6": "4AWLGQcxgtobfuBkWmFhwYd4efeu8cyuyH7hA5HFMSYHK8KGAdt91ey8yuL5m4Xwg6rFT7W8FrZsnRnUjgt8W4mH",
  "key7": "5ytqrgn8GpiuKu7kqTinZN7oa8FPiVnfXjqpJK7Z5RqtZKFhQr7sQtiVhz9BdNGG5RERQzXP9hjGnUWv3aFMSbs7",
  "key8": "2gr62o6h1gaEKujvWUieaJd7eaXdohmJHnMTBVFHXrmo166aTqmUSjoYoA2rABCSpe6FLFFAuDG6z3KNW42WzEB5",
  "key9": "56h3Hdv7HUzZfbZE4ZKsQ7tKLbnuk2hasFkG96gfBm7FmV2wWg4g4rLQWEeCXhLUvw2qRqtxKAnN3sQzVV8xr9Ya",
  "key10": "5iGdb5LAhd8w2JEXomowsBUk9Muo1MvBr2juSDuxuwWAT8pWDNav8eNYnMKvpup8ZLSWWGmoLyPdApAntPW43dUk",
  "key11": "3GdPUx4MXY2NsGy7beHgiZBr93eK5nPf3Hj92tV4Ziub559KhhEuGQAa6WFAfmrtBqkXVxou8Dem1a9JErKXTdqM",
  "key12": "5pJFcwXSYVagXDne38xeyHxa13bPESJERAExHtWb2bMxT2i8tAdKkSn2Yma9UzAzMN7qYhDs24AtyFFSfvRH3JQj",
  "key13": "2K4FEqz95La8xAQVHVfhUoGPwP2gCjQQ1DJnjTvxWbQuPUUw67uys8VfEUYXvRoT7yS6kdianDirrgmzTbUduHVR",
  "key14": "A2ccfFnd1J4JwChPmaqeSckXWJgeoqe67mYR9unEwX29M7mBkHQPUfSe56gpiBg8cY6Aj7Law91WAdQ1hx61s9m",
  "key15": "2GfZLv3bBrLrLD4fhqfXSBT5PtSx7LZMJqdhizMBNNi5EbeiqtHTYmd6Bi2EuCSEzVmEXbGJ53wQnrNj6d7JuZv4",
  "key16": "3PrspHNXpVjFjDDfpBUfUx9GyVbVLFZ3a4xJdGkTraAGDzYkns2vMEz9FeAXSMpEkS9DA4QepZcdsLbmNwZwbmZn",
  "key17": "65H1Yq4EKVMGaP6eByk6EkzToUufmPxwmSGe59wLTYCpDRe6k7X3RMuYSdaYezwHgWuDLuJ5bAGVMNdjguAX1Brp",
  "key18": "5BhxpNSDiWkVAiDjxkKyTBGddqK3UeojPmicsbHsrAxDnGfa9pxPqtRRgX4MiQNXgQ1WTmUi9PCbZbF2yKtc4Liq",
  "key19": "ywjTP6QJ5SbbHaoU4jMzdeDDTgM2YnGCpgHfrrZyqTNEyqtNdBAXG3LSYsBKYYL8EHAjjqxZ2HkbrnRFb1oVxHt",
  "key20": "3EsTRXWW5qY89maFzoNxHhsFDk4ao2xFrGAKptCAXb7PGDMMhp9Qujv9g11WgMGEh4GAPsTdhRtEYzSVXajkeGPY",
  "key21": "5PBCYh4pZjd1ydujyPo8eXrb7zvqk67hDacfXVKvHYF5mHPi24xM4PgL4nik9qvomsc1AiyyEJtGQGYS6CTpfi9",
  "key22": "HxxvwrZJrHmSKuNvo2avHKkKW54bcPumzfVJvrqgzUnh9djJNijdwGaiTGudK1wyvEZMWvfZ5QSZ8dqnWUmkL7A",
  "key23": "uCu9qVRZpQ2WrqTWhEB7GuC9Ghb4izsBYN4B3Q1HM91FvaDCtgad8pW5p191G1E7MSzMQbNbvjPtLhywQEbBEzR",
  "key24": "2DHjU275v1q5yqR8kv21gMcLZX1WmhrpZmQpWk1HpHCKBKFjmyBosx4P2wutSde5mjsoF1tAWW8kwLgzL1jEHsXS",
  "key25": "4gq6fX9AZai8ZujEUgRc5jxmXJnrz4YS7teT4uVbuwTWEGjXZqJZLUdWBKkVcoWPikwikcYsWCPMsbpfcMpnLYWH",
  "key26": "3FYD2aoHUmocHQTgz3fujknmEwHu3nXwygDRknKu3GPdrHkU8kNrmMt38ZDEhW9BU8sgExKheGZqjT7ZDjCerx9g",
  "key27": "gu5spE4eruE5SBGJfB7DhFEnWjVfknr1o4a2a4r4GShEznopaQ6JexLjfCUZBQnKXVkrEQJ69bytEKdQxLEjdga",
  "key28": "2AxxFrvJvNKCjgQecYggFwg7j8rgRW6v6WrsaV8XJ9nvghYoErTM9FAmu96aguCBcADJGZJNojujoEzdznZ6zcgZ",
  "key29": "43J7NDfdE1ewtfDv9TQJped4n7LzMF6MhRruzX8xe9hBp1JxsPWPZbc7b3SJKFwMEb6CXrxGoWKAmLotF7PWaY1B"
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
