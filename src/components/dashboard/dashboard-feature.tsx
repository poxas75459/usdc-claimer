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
    "5HUdetEM2Mj9Rh4GmNMbRvuYtkut8Ygu4ENnnJaLTCLYsemm85Yy5r1aGq9ceTW2DJbrk2WLpPdYfxgP5MFgy45e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51UrR9Hm27wki6P5UeBb5Nu7AvvMWdZpAqtaDnWs2Wa1xC2ESg5nffHJ99yBuxBtTVhrCbXpMziP3YVkoAafV3hQ",
  "key1": "3kf4YGn2ZmRp32ba5m5CT9F8BZhXdJy4zAfHpHEA7gsnKYtCRPjMrhxUwGGxDkJeaEJWsjkaSzGUfDZiqBE9Av5d",
  "key2": "3tU6Y93PwA8Dh9eWjhmjwn3eT7Uaq95jMrNgpcfAsN6FubNshbZMnov7uyrhjN1kxHkqqJn8pr2Y78FUU71cNVgt",
  "key3": "2rje1ERyDSaWCZwNi7C8FUHtmfq63zFtaRMRj3aT3aSBiUWgcm854VECmvBtEejqgJAkHZf3Thze8p34wZ9HZeVE",
  "key4": "4h1PrJvhDYkZduvkGHQSRUiJ8hKXmeo4nHhRC82tFRPXXvXpNr43CoDZqwNqWF2PReZzvsRL2PoQ24W9BzS4rhc4",
  "key5": "5XLm1BLfedEV8dmcNrZySovQGnjsse4vHqB5qoS7yFJrGtYdK5bQz6gWE6Yi7qidEuRH4n9K5GRCDnsfV6JPvBQ2",
  "key6": "3nQRfuKAhRtfP8YDBim4J9LLKUwBvt45pKmt4v1kqX3aYffhyWKA1Lat12Gyc9CjTBWGNuZjZ6im2z9iMZroEKEM",
  "key7": "5fXmqKCDPJD7TMfu2SRv2N8RekyDZU1MWdYKpXjPFKXZ8CAAg6ojDvU38XRcyX4gJgCyWA2ZdDc5S2dWyaGPWWXd",
  "key8": "2Qrzdnp2AP2xA9FHuW1Hyxcd9SrXEKaaU8uoNoLhUYVWKx3hzM4ekaf2CTmbchC1MhQR5Ci7bD18X7PCvYqegaFE",
  "key9": "HGDaqWz881qP3wyYhHy2PKQy1MJ9PbQgiPkrCbSzNXfS66w4PpuzPFpZkdcwJu79CBgtojj4bdXeF2DAbNrAdQt",
  "key10": "5HTFn53fmpQNzfRpmZK5gkE8JvEWerwjeuCtFpvkpn5ebRQLpUFuNT4PK4WnjKsfoUkeiRgAXmSb489nd3kUBp4d",
  "key11": "45SxawGFCBHqEHkVvw1AHoMKfRqjjw9DYtMULMJbsZeFD2gjnY7FodZvZBwHLPHK8agqwnbqQw5ytMZ9foGMugV3",
  "key12": "tRR35S3XpsXraVEz9Hb4bkyzmR8i81GToes5p2284AXq8v9yDk6MEKdfrB89bn3opnkSteqSoaycbYYsKkcZry5",
  "key13": "iWCZPFTr2oP8xqQDJ6A2293HKM4m6fZYEKrK6iebyye5pa3bFB4g6Fe6KfKgdmUY13mNNzms9WByqgPeovPgXtD",
  "key14": "47n6TyV7PLJrhvVet8ZdA3A2ChMvLCHCWL1q98EQeuUiCm6YTzvuW6KwRsL1rV9USU3kQTYJfAfA6DmWT9w565Bv",
  "key15": "4oEPkxhXW7c2whJFbzFQCRQBA1MPPJjUisoMYGAVGdbG7nyPSPggy3Meykqj2ToqiRXbm8rRcqLUucUveVEorbKa",
  "key16": "MgwN8Fp4fb8zaaWjerpokibktR6jghHNR7CTEtHK4mnQHBox6jKNAiHhDGNuqBEPLtu4vLSekB2erCitfZdrmgX",
  "key17": "3eEjEVTB1mxxF56BazZgoZBLwytzU5sBkLSu75LUQPiq9DkSc6GH6MaYPKPgzC71ATk2BUqWPbLxg55hax6UYpPr",
  "key18": "DFRzxZde6wQEPbdWzABnWv2Uf8RMFqKm4H2kkSF35xToCT1mGb5ijV7iLHSnEvoV2yEhVPTj4w2JdvoER8k5VJj",
  "key19": "42mx4CcbDrmib5WthhLqLA1CC3p9KKMQxTbxoDnGhQkHJh8g8oMTkk2a9GevUPAdoQZmqDmfqGA5ufe9ecFKR23S",
  "key20": "5veqHpoHaNgNZtrAQ5EJc3KVgFKrPNHhKdETMYVKxuKi6Htc9M75ps3Ycws5Uj2U1NQ8ArjZHjUoUWUXzsh4j6hp",
  "key21": "4zBezZYPueSDCeT7UqeLPKPa9qpLoinLA8tT4RBnSSqmFG8PpADyfJeeFuptoXg4SUwc7EcVwmUj9YXSCMVWshgM",
  "key22": "28hsFNd4E3y1M8p8RiVPtEVVEgeY9f4H19J2YjqbeiTMt9gTsrV2pYYSx41SaKnCuf1tYPT8kF5UGEvhEihhpYU6",
  "key23": "5MGcciBTjnrVD27D8mVWz9ZCSndmtRv34DUeBBFGpivyrwhQ4gq37GBmqLoe1DW3KTtEwn6h1sgrVYA8dKw1SqWr",
  "key24": "4rzDGJRh3Qk9ccVGTBXKspCetMkDQikDBLgmhvK5GkP7Znnf8JXqwsirLqz8zqnADA45MeaNiFDLw8mrb2hgZjYk",
  "key25": "3gYHfcuD4RoruFQa8XZkGCJun3ct8n8jjyasDuj7B4dx4L3puMaEDpUwH6h5NvPCPsyy9MTAHp2Dnd9W9hbJSmX3",
  "key26": "3AE8HxCZmWYvdKb34MsmNUbMomZQw7eatNjCL3pY6nD2XfTLca3S8NdPxZevAoj1Fgko6kaV5wp39QEa3uu8QWvt",
  "key27": "2C4PaY5CQmhiodtc3MbKfGSgCtkReiMQejK9eUJeeRy29YWSUodwnFKicoZSKUvL7XXb2bkECjtnjzRJsohRSF8b",
  "key28": "5mam7mwvQkZnC73jZrz4cGqTudmHHxr3ehyxYtAhDvmENbVJz7M4Ny3qxRYDDstUtnRJPnauRNgtvq5qdsAxZaCg",
  "key29": "55JHb1zYcgGNJ1otGBXun3VwqBoAegUPMqeX5n6JrhsAAWAgRA51bcfg3nrkGVibWZwe3CUHgRzQnpWocR2rZQAs",
  "key30": "4kcQAUzVQEyfBRyj69NKfrEf1xDh2nteYE9ywJaeFGb4RhDgq7tkEVqELnec5WWKDGZPyETvFY1kx4KAVkWmg3PL",
  "key31": "rQvjPpCtPoXZBALcxeuzv4mQSsfLMKcAyCddrwwsCY9XCdqvSfgaMrN9sgzMqKTPBgUT2BL3XTCdo9NY292nhHi",
  "key32": "BtA4p8v6AeZuzKcoX2vHqwuGu6Qt1DgLZw4sFsR7Jz1ruBSUDMGgDsXp47ovF6eKVJL9mJst2C6vTAdwUD1Szsy"
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
