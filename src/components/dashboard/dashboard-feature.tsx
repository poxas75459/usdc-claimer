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
    "2QsBDGznrqsNX17PPd5hSiMXCoaPpQwec3gjc36sbsFzwXVVhqNtB42ekBaG7c6XkWpjETX3Y1RtBty857yociJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W33dA41EPKAsqZjicsigu43optykezp7MthxK9sKRfEHwt7nfaYgSNQPPNwYoKHP8dku6aod4N94WgjUxv57DjF",
  "key1": "x2d5vm5qF769c1Van6JzgTRq9uUXsp3NLiqBxrxx1dVhoJESPWda2MpqxER6pXS39FRJETheiEEafzDgN9MEgTZ",
  "key2": "494KxG8YekWrSE584uUmm9kRnL7akroBngcNkrfaGbtaw81vUSsSrcHDj4MDonGF51E6U2LggxRZfjRMHTKJevBA",
  "key3": "3JSFfECBcJTnrh77Jxohv265Q1DMnpdjvRhC1dtWe6AnjuLqsFTFTmbEaU8zZwhiaezwSgHWFhEKC5bWktd71ZVN",
  "key4": "477PCUAGACFnKjXogVwL2h5vYpQhEHb1CGbYYFjG6pcXHT6hRaxbQUZ4dss5gwnRA1oQVNmZ7DVEz28Mavj9o6hE",
  "key5": "5FpPQQcLnZnjZkeHU2cXs1zH4Wv37KmWoWt13uT6EVxaNq3KLWmqUhjkrY5fASvos8piXpZSaZxCreQZP6SUzVnX",
  "key6": "PLWb2FfKhd3TUpMJB9NbEPmnddDLQDJPAAczWi5Uvso2RecRxWBhuYHMwT8SzsgScDS1YQkCQ4p9aiLSJbg3B5y",
  "key7": "cSgfmph2gesAZtyhpTMaj8R7XxsM26BKUz8QG9bL8H7nAG2wsocnq1gKCTGoLGYb323ZuoMDGXePszjFwzvMUDV",
  "key8": "4m9GBn71nF8kT4Y2VwrW9dxsd9gmiDXP9tchco6h8vWo5NVNENBecLboWnVX57AGgPchcXo9ZBwJWqTi3T8J9HuQ",
  "key9": "4k2zZkrYnqTZGBw8N1dfeDZAHzToHkhubBZQbjRg3UtygFTrixwERw1B66BfwPQuTr3oThUy2anKRYFWmEPUxXMJ",
  "key10": "2B9aqRZbGbRyWKS84ByHHVjQb3X8xfom2vzBDw5UeehmTCtQdgYTVDgWnRcswmEcWaihR7DtJRkQhw2aeW4s1FSy",
  "key11": "4YvnVkQgL3brhuCmoUrW23KWXzPbUo4GvB6JEmhNdZMqG6PnjZU9xGpoRWMj3Gn3mkS1fSw5KFpdKLgmG8V1mm5W",
  "key12": "3mXmcAiv9QdCPdFxNvevEZXZumh4eQHy4rdWokEpQNVjbZ1rMk1x2A3tX12oWrnyZREoSP4KJZBzQXTT5bxsL587",
  "key13": "5yeWomTaF71VRNvvaN1EHV2nTaMKyc3GqSAxMwFpYj5xcL5xLkG2E1Du3cifiFyr4ZE7jZDSSksdTHvwMyJypm5A",
  "key14": "4FYRWDz56iqHpgXxbDXygPgAnZgW3A5qvZpMPX6zEwufGwfcWM6PH9PqGpETmXWsHfGgkusDFzGuyqMHXt2C4dEV",
  "key15": "2YzorP2bFge1Jg1rKtDuwPeygJ9p3CPFouupi9ogpZW8dqfLvDvyaFrmb2yzHPxhVoG2QY7V9XzH375P34RhvGoH",
  "key16": "HmAQ7yqRV3EJcCqtmjUCFzf9hhrdGX44wX6TXCWyxA9UL4qTGL8GeTzRvCwcY3oLUVC1TCkU8LKkagb7nyygFLj",
  "key17": "4c2Ednr4wF9r7Lt6rHLEvNXAXrUTdx1giXwU3HbfFytLohBod8qXc3pV5MFEvbsWkQm5bzukTiDDZwjBnbU3D5bs",
  "key18": "5VgLbBKyRVwopziPWeEiaasa1PFLBe2dXHhq6thYYtw3vS3bCb9wsM3xZUB13WUzf2ZqWsdiPPxYwv46ueswZdjL",
  "key19": "zJP1vMkeLCSWPGdYeGFLxUNam8rDDWzkn5wzNzFrp7JkevpYquWiwWp4Cp7CsaFwwk6UfqqFcz3m2xoD4C3jvDb",
  "key20": "5bcebYLzAVWXbavjSRizA9bSYkZpzGyCkugmNVg3sWijRkX9hgZhdxF8QLzof3iX5rYkqWZTJZKoEHz6DfQDJWW7",
  "key21": "3VZA6pEFmVLw2f3TFuY5v6qbrkF5681TE6CbU9uqVyJCJY6WiCR7mzLQ8cgKoVw62PrFafNPvBdeCJ4W7YFtP1U7",
  "key22": "4LPiVoSD5PE8pRuTnjbjcjqUE6HF1xe8y4EkqUrkd8bkiYt4McP8o7gy5TLApLnvqh33G7M3DFwnE3rtaHh2a4Ro",
  "key23": "NNyJ4yczEXXzZeefteDKSQakTiYUgYPjLyrbzoQ7PLphzQicLMZVqQycFJXAs1uYjzR9rEEGSqpQmr7HZZVS58F",
  "key24": "4pJpfAwkeFYuAv5hq5obphE7wTZga3TTUyW6KzKCUyoLosZQSNbwhqoyzdijskGdXD8zoLA2QjVeUi3gzPmNv29y",
  "key25": "3kvwdzJfcyXJNaS2t2S6nWK14JWbKeWzgCU9sKqayY5kUodhjTBQTPvpCrtT1z2whst5yfi8G8T4zYYvB3Bbiu2K",
  "key26": "5M4YdyLzszsRmEUeBdahcwn4mpTEadVFaSKDv36reiYb3rYG3dsb85shuDTyxLfb2AUBgMNfnHqZn5fMKEuhbmmF",
  "key27": "5jxZKL3EpQ3ujemrJNRWRV5YwpWngw2xLnVUXW8KV4Y9rCH9RqRvUXEndfgxz9XhEp9cMqXAm3VGQAkXQurA2x4a",
  "key28": "5Z2tUQqNjUStu6QpLruxMD5cQLMEGNELKWkpFkh5uAT6SEJ8gAAvjDMVrT65zPicVTL8NoTBHzmB6XxdKBTkLGsZ",
  "key29": "5NL8rHrT3Yvqp6fpFfRU15RwVcJJkrb84ovN9mMF29P84qQdPBbDvgv42uHAMcmAFmsqatxRkyTov6i5676SHMc2"
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
