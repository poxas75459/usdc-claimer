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
    "bF75bHJwrCcwfEesbnbTUCcPM32HFGzd8ZyvXzsQ8spZwuB2grDfaxeVXMXE8MEc2Y7E6xhXizhvEEtqrKKTdNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VvBqy9GTSN4L17zViEWr4aGcAKBJYgeXY9hJjboyBPUfQcMpQL89SbhohjUmS9j5TNTa41Mez44x74M5Y7bkakt",
  "key1": "2jBr8irxFLvZpLSjkgHmhHwZTryE42nkCEYpp3urhNjmzjDNmPwcYpd8F8g5jLXRHW9hx88mPCqVLCZpM8dsC8jk",
  "key2": "2ZvEfUS6o1qfnAvGdSU6NXWgA6n7MXpEwNQeovaShQJqxadT6hKR9wY2ffZ3LV3bfJVHEgDDWD3Sb3Vpgvzr5Hkz",
  "key3": "39tQ62afu5kBUyr3Hhmwnc1CgSt7b4ttEQdZ62xVss5QrNwsZeEcPQw3YVGALhL59LUBnf8nXx7BQA1EuHUg7jrX",
  "key4": "3azd31BKQuj8m12Po8wyM3FaSS54Z9UHie31G8QvwW7qo116dv3mGYYDaagP65v1vsxYoTMg81hZ9gRDJvEPyi3k",
  "key5": "35iYuAS77rabxwkQprjSczTQFNop7F7j4QYKakFLARkdapUcUP7MReCELnwSjjXcV1yHJzydf24xTkrvYXG6yRB4",
  "key6": "3mWKtLqu9V5ceJp44z5H2CFYymEiUuX7b7eyxab2QTwnk1zUCd9EaRbDjDquTbmkWJ6qsfwqbZeRREZSRDcck7XY",
  "key7": "3SEctZzbJGFJ6BMJEeCTRRVamBtWUv5DMXaxhjHT4fLiMjmLSN9vZTW2veW5aUS1qwHdLCmg48veD2fXU5hBcnmJ",
  "key8": "4iHU7musa3H4SXGQYf5ywCqTrbtdVyaJy9kkZ67RkforUUJxbmNyrJf2GyX95XfVa8kp3oJ5HH5NiviArnMoiTuQ",
  "key9": "6T1mGuMuwTqjtEyyTJgfJJt2zbanFcRFHQTkRQ1trCNrMguKJDaWHRLCcFZzBQVaGbK2wwYr8M22Z2Np5NXYr6m",
  "key10": "2HiYuNKHRUr4kLXPyRvReCTTj9ACDyU69gQboHM5iDYm7NpNm2v2zHzojQAkQQVx6yHbt5U7j1X4ter7eCV5aivT",
  "key11": "URnsWyevLk1vFdDVQWRR4ky5AFB5GcwKiDv7wq5DU8TvH65KcDvoL3NHvwD9nR2v8CRANtz9aPiad1c88mx1kyp",
  "key12": "3XuN5ALfHC6f7fKoDgksb5EBQGjoiL9ZvxU9B5gx7RdvGf3VT6Z5uM3QQ7hHSQ5N1EsCLqHRsC7hSVukG8BBh858",
  "key13": "3okBoSpYWg9FWjHXzRQZE1LefU7h8b845NfndychXmaC3huyk3nxgthMMSttYbMe6ixHciphY5BhWZdCmsre97nt",
  "key14": "2JzH77TD3GXuFSYPdZxMxrnF62YUQfWSuLkWTJmWuHKK98gnFLFtyGKFB1qz8UDSXa4uZpe7U7XJKqPfG5E9SQuw",
  "key15": "5brCHvq3ViYtxXYwCEFSM1TrrTAp6Naq8ZETtEcnoFNBeaojnVRtDHCr2DsoeiXJ3ugxFJd2oRF4pdJfPNDpY3gL",
  "key16": "3ueWVGzbsFibHRfnbGHcq6mZJY2e3oK35LncpkzNhsCNYwsvAd91PB8NvnXCKpE8etCKnpfPqWCvAXToFT1bpVjf",
  "key17": "33PF59V7R2va9QTjbTTtGAzY5jfidTzbPbua9DTQCSDoa2qtDZCUucLqCTVB2nZGpUh6P5KBG6T3rY7udUEQvLz4",
  "key18": "2CvcoBsxq942oWMH5Z2natfx6YrfzR9PJf89x2erhYbembEptWnYRE6V4mJVLvB1cn2Hbj4iyKA1afkwvh4jvrMA",
  "key19": "4YjY9YJQ8deLRpNG6hNm2hX8VEPpfFtVwPvrEYHschawPkB85ZUgHs5W8QFNhYTE3drh3g1ABpnyjeP7UhnnvHto",
  "key20": "4cTqpPy4wtwbDkG1pZu3pEwwVmip4LzMxcmPBzbPJ9k3RDrFvD8mQNbg3gxTcZWg6VrFvHv9U2FmqFGaLGhWhbdD",
  "key21": "54f4hX6w4VvCDvx7d1jQd6DTM4Gpv8rHTooB4b29dToTopbPoBd4YKiq9xPRSVjCFmj4HvxnAkGrkZHp3aGWpK6i",
  "key22": "3fnAqrJbvH8i6gwcXBWbBe5UoxzYXaMzu2ph8ct6BVDqKHC8WEg3SwhZpzbxKS1rDRHoRi7mWuCRwZaQyXc4Jv8e",
  "key23": "2tT3hTrWXNKE3jNdWYEHXuYDprX8itwgm1kEvbMgMgTUdre1PF4xEf7AhN3ouvZrc3YE2Xmf2sNy1HfiE245yfdf",
  "key24": "5MR3uR8TdFYrXA3fURrypEKEyyVbKMfcrN97wpAGGvPRefC6wLa9JVv5v3rxfuzUojxoFmZPqtJ86LzTcymgnH2k",
  "key25": "4mXhv2czTEpFPG2Jqi8UmfsnDRXwVHpb9KBpSCNszbxtQiwr69ZZuoLM8bKmf6kuzCHazhJiC8zKhjJPA3F6RETx",
  "key26": "RsdaZnghMx5Zj4e1nd8MrzhRWqutPGrifP1APD82oZJjqrANexsS2B2AQZQ4PUsTL2fEmf8ZN1qJi2dAKNgUuZJ",
  "key27": "5TnMFEphnVBffuzU1E6hc7CBLw7EB7DGGkuArUz5yKmAcrqBX86nkoe2ZJPSJ8UizraWT5QABLxfukTAyD5ym4My",
  "key28": "3XBwbhjBnehpB5n32cnSE8ndArDgGdPrrPpHPjrMDERXFQVFCQ8fGEgKrRwH1AksMZkaFxV5bTpHRawEBSvpkh3q"
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
