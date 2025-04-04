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
    "2ACNWePUyPGspYcrfYNwmk8ZS6SA3k6mtfAbLJk1Av5hFt86Cgyx1mVLEwg5xrjWYMpWmEd1TV4DAPPZaWr6Jhuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zLReLgSBgacPKKKGWnMf8D1qgc3Z6aEEpFtZ8h6HJxJjd9bCSKY3QWESyvnGmSsFhvZ9WmvbCswNLhVB9DmmqYC",
  "key1": "i7ui8i2Kb87TTCd9YCBnsxEsKrnaGfYuLJun3zC4VUueNXRcqL9C99YiSyE7F5FzGcgvS7nemTdNV5kot6U2HUS",
  "key2": "5fqi2EGaMFuKEaWNoUNL48LQcQBigGgnHAEghnVn3mozZFQ58yyTqjTqgP27GYXd8YwcYYG4HBsBxjb11EVzVGyo",
  "key3": "517kWH9t6j3jg4c3CUEC4SX3vSaYaebxNXWRiij6FRoUm7ERnQHwisjwuBMSrtPpxE94K4fncUTMyuwqArPvdYya",
  "key4": "2y1vbHh5iwB8hTMFYNwHveUp2DSG2ECzxHLAPPomAoZDtuYqTWsAVeQCh1DVioTLm5VVNncDdxz9DKEEWiUdcg2o",
  "key5": "3EzKvKMPtiNwpn2cZs4QdfK9GRS7pPHoERpaThc4Vbk7SfiNAo1S98QELJPdWg1mYizrp9inB28MJzSzJTqN4SL8",
  "key6": "27atzorLRvtkh5WDyD2nW7QfB9ezsZ4txgZ49G197ZvEcswNhvsabkgVAMDSx6soPm3zNoG1So9b4bTdWdPM9XMK",
  "key7": "223XVHAQ5C39EvDjXBmkjHTtQf62gBooi9zonyCCVp2KKJfoTMw39jxfHRFQ6zMR9Y5Z1Rnsar1uJkfjC4KWfmrA",
  "key8": "2YrtZ5V18i96gSuTvw57V5fSGkQpj5SRUUmRLE3PW8mXvg14DeHAB3XnfFj8QuG1vL9Ms8H5HtQ7ZYHEWzsc5umN",
  "key9": "ZawmXHPmJh4hbSKRQa6XTn2siNt1Zw7PrwgKNFZg64SqRy3SUyCQvnBxyVrqFHEBjfiTSvf6jekKc4wGRh92FPe",
  "key10": "64qNZq1xW3UuZMqAJVVgpBBd67m4jKehfFA5Gnv1nqfKqyUW4qtTk59gVz6HR8UJLmfKrTFVo8Wb1m6S7K1XQQW1",
  "key11": "3moank5dMcmixNgCNwVcN4yZ2Fd2goWJTzTNYWWBdxcUUMAWYm4MV6DFciKyBhvbCzXU6kFDaqfTJbCHwRb8H9r1",
  "key12": "28KiygpFMb1zCZgFrWYoLmFDDzbpakSnbSuQBTyXrwvgxTz1G7EV9gvKeLhzPFvSBqU3L1AAaoURX2UZ71DYDZQo",
  "key13": "53Zv19tsweRTtFhta4NKDm8AHU7Di8BXarXaza2bKa6FyJDQyzdwbnCSAK3hLfBJMsuE7UGsT4BW7iAGqG77y4mZ",
  "key14": "5S6T6jRDYd9SRRZDrQGqkcZr7Rr4KKoTJJmYkGrAFpipc9ETDu5ZCzjeZu5SnxcjoS4BWHPByNCSQZo1zVud76DZ",
  "key15": "3bXpR5iMb7eUejjPWsGxdpsjAkJCPFZCw5Z9GAsZpkmhkXDLhemzUSpvAyGdHWhjh2zH9xh5xCD1eoAg4ucNxrBw",
  "key16": "6DoqsRCh8RFTTv5yR2rsFa5TsxkUpU7xgZuegDQtkRrB6EXuFgcpyH6cJcVSgfZLG9v1C5PZ76YYdefHD2LFDfQ",
  "key17": "4SGwwfR1Y7M1ZQvaAvRvP8bxfeC828Tv7jbMiVUu5R2ytNvkB3WEDtjK72rjuo4Y1fnWVawgGWnj1BLv9LsKZVAx",
  "key18": "3qp3eMtm5LcjXxxQfuZLwak9xdZ3zR3PQXaw3n6YPJQPsgohd87gtgP8PFKZaVANkjahMgRPjdnZ2m8DkoxHGwD3",
  "key19": "HMfUs6EGHpd4t5b18eeaYaLPMzQvtZUT5NYXc9vec1QgRcKq6btgX4KWB7LLRmqD6LRfLBw5TfGLh9NVHkanTjB",
  "key20": "2tdTQ8ci7qUCmifRXhtshAJ7L76PYLGo6SJjJDv9ejuXBNRtr3qeLBXpBcbfEnJ9NsSsAcWCGoEkpGF1eFTWtGkv",
  "key21": "APnewDsRAsKFmjskMVLWF5sztso7ppPYjueJSjeDYjUjENQD5K3WQm1HvVfVQFMoBd5tdYhusj52zpbwZA6j4ce",
  "key22": "hvWvkgpbM1EpaSVizybuXQkDLEq2uh8HNbA1keiR4GqSmXnZa9qwHtEUxzSiSSbyJbX2m5UVSktNAyuWfTKgwUX",
  "key23": "49fihbBYfe4KiTP7Cmvyi5NwRbfzC2KD2naHzh9YoRtLwsLJbsN462UFosXXa5rvPZv4jq6Cd7AwFQHCSPC19VUB",
  "key24": "4HzTWHHyLCCJkvyFhGmyPxm2TWKmLEkZEzZPBV9UESBs7kSyvKQzRYHdEvkJN6Roqkxm6WAtQEWukUGbh2hCWm8C",
  "key25": "2N1SgEMFLoz8VHDgRykWpNdVtqcXk4dSMcboHUMiUwALdahK3XQ2t3dqgLnjGWCJpUDEfRZJjN55JNWFKSnuvapg",
  "key26": "4sMDDEkaP97poPV1fkfRHLDRrnaZS6w13SQ8X51bjegwt6f87EML2sn1y49UWNkGAe7kh3NvhUHFZkddUyAs6t5e"
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
