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
    "D7iSjHeJ7gA3B5PTAoqbGxTfcX6NqZSYuTnT948JfxZiP8qcMPNXZGBn9DsNKEiTzU81zKqy8QYLS4t61Tj2YGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xpbM6HpUCY8RM9mpvAkrESpfqymsgydRpePv6rVPjvfyP8PZ3GKvtBiqc6XPyxEKtSwAzuLnP5tVPTDjzw6Sj7v",
  "key1": "3CRv3eG6tXwdbmgmdKTpXqAvy1Dsx8emVkXDejpkeL89wNPnqzmJccxvDB4JNnNEGKdPRTKDsivCeCUZwLKQnTgj",
  "key2": "4bWgn5oVPJHVj1HauXMQNfQeWKLr7azDnsoFbc5ZaaWUFYXReig1CDhhmERqLm4GzkKoTmp49wdx6FC6GSUNxm8i",
  "key3": "1rbXcYuZCHkwbXn7nJq3HKj3B6mVKoshCrxhA9ak5oKQMSYep7s4v4KKKaLEehYf9dT9oNBCnzwwPxzvFy4MB25",
  "key4": "jNB3nyTsfgwY7Wy7KXCdBQ34cUK5zh9Sar1VkgCEAo6gjaFiZFMHUCjZb6YHBMAFuvEWnUWDs6irhyni1c8Wueu",
  "key5": "5kheFTZuWBreKmYAH3uzL5QNfW4LZkjqDf9s8oWwZwQbrqaoehzZrfNuZWT7ckmhbAmJFtREDD69A8XXrx7utfbg",
  "key6": "4iitPJiLP8HsBLbrkAm8NM8SuBB1fmWuy6diVPzMiHuD8UCp8GBhMM6e3qiZ7ogg2UWnG6hRzmuHAJkW6rDZjzJ5",
  "key7": "J75b7iN6epui3eBiFfJ25QTiAtQKcQqxrzrRbHN4mPJ593oZhkoVtPGCeFj1MUrYuQbtrLRUATsFmZmLCkCMnRt",
  "key8": "2P5yWSHmkQbLhvXTkNmfdKrD8bNQbrkh6wi9GpNfNtsVmGMerVvvP7wQJtgpGtFR6eH26HXppTsmfu42hJDGqAxA",
  "key9": "4xa7RaSFzdMq2q8XcWXSCAoEpfJce1FmWD3gAFwAnvNzXNCPCdNB8eXT9paJ7ysFDvQejg1A17snf37XEQBPnxkY",
  "key10": "5ydiH8ZXMXcZAUYKusAjj9eCHm1oBSbwAg6Z9AQfSF5m3eh32nSjCTeyBtCkfDRYBCC4PatqWhRsMFJA8EFgTzny",
  "key11": "66jbojg9iPJ1igYZxD6SimyAL2qE8pPs7UJUed228FHv9zZvgSHbWoYosgSoUap5idf5fgvBaPiNNam2cEXVx8HC",
  "key12": "5d66U6hHZmRTq74tq1VCxZozvkhhKUBVa8RZhta9L5xAaFP2i7UpzJUGQCG3amRM7fgac86tUjdXXZCiSNH9qQXj",
  "key13": "4pJowpPkYjhD6AdprsmwWDbqcFUHFL3wSpDaBKMcc52wiNL7sqYgJCy4kWzdKLtzq7Mn2wXVM5JfEoqvpYzTNNR3",
  "key14": "ekGhLacZ9osbzYq9XDGzTaQJyX15Bjd53J5iZ6CGQCZEPKP389kK5PgFuhV2S9wjXRyc1ARFsLpgmSRGrU6oSZU",
  "key15": "5dur7wi861cb4ZaA1smpUGhPtoEbRDDcSQMexpbY3bvnMnKNhTfWmribxqBtQCBQ5wNmFXjaSxaH8Z46tV16FXUk",
  "key16": "5ibNEs6kNqhv3fzJGSdtpLcR3vk9g7CXvH4xW4TCR86BZUszM2pW3RRmSm8pHPmGmjBD5kjSCbL55g2Bu96ZeJTM",
  "key17": "2qgyYtDSmUfqXwUwE4NPhN4wSGY4x7BmD9b9mdvfUWk9vibvyZCpGtNqB1Nz9BGyxyMJUYQqgJ7y4KA1RuynVsHx",
  "key18": "5AbAqXfYAVb6ZQkZGVtXgpNnSJnkR62ocmstuP7Jn4s6gmBdyz3uCgUiYQVA1AaWDATGy5UG6gHNYXWUXqTL7dYt",
  "key19": "3vWEAG1HZ8Vzd74UFFP2cr6LJ6NL7DGsMrkTJF6YuS55gKE9Ma7qiH3wXizazb6ESWPJgQuWEEDW4WaDwiFcHxhr",
  "key20": "5xoznrU5eSyu1sfFqQKCtjFAvYX8TjA7mhsvNfhaKWUBZdtYFn1xVeGwU3b4aN1dU1D6ZZu526qDmtwwvzFn3WVs",
  "key21": "4BYjhyg8b12HEpVycbggRvtkbu9YHpRWaaqFcMscJLHu6oZWYUK2b21RUbmWZaz5CmvCuUWdffNF5J8iE8KiDgsi",
  "key22": "2LeAV8KAV2A3tHkvxAbm31i8zAsh56qhf6NzyuSpU9a7RxeEcZRHuPvVFooCmb2AZ2sDThiiGsiwJQW5rnGbNHLz",
  "key23": "4uanNMXM2y58RovQh47ZbGV6TGzqDzhR1qBSjbh1gnDDUEhKhLYkeMs6b31ghQ5Q3Avteq1U1Z8o2qdgqgPr6J7i",
  "key24": "2kPzvrhsFLduaRBz9opgkeLDPQWeBjebskRjY2JzmJFXoXexR8K7uoEhmxFN1oQ1gj1gp5DW364EkJeW9g5uCf3J",
  "key25": "52s1sLafS8wukrrSC7tfA8aPvEamRcbNteWpXnZBBEtSrVd3us2hHr9irvc4NFQzZoiqkmTe46TBEQVNyRE3egrc",
  "key26": "2gj4TjvWXZMg41P1tMaSb4Rckar143XNcGDN4nzgUonszphoKifcs7nPAhowcpFSEeuQsgEzzB35LUptG28m9yV3",
  "key27": "4YyZX7E542YXgy5R3ZPN3uAhmX67VitAS8KvSNxC4RVRYFJsuujp6sK5HXyvohgQeyYrNrtV8uJdhQgHSVQ6KTXo",
  "key28": "3tsWW4av5VfSyUBhbgBie7E8hggLLPLSRygGQMzHWZfZAxbsn2SGsDYzm6Jng2qhxaTzP3tUjrJ5zP4ZQmfHNDnJ",
  "key29": "46mHTS6Wb74zDHi7VnWyheTbAAAZVG9RKF5EiG3dceuHTaaqHYrsRNyuZ2oB84MfUmZFztEVULPCdHc1nnRasFct",
  "key30": "4YoDNzXPXdgZbhMaQaCsotgafp3TgFWUtdFWX97Rows6Dy8cQdgEnyovTkCsTLSDGn2nEKjWyHNkFiFHftkrvDtb",
  "key31": "55yPAHYGKe6Jgx4hVdigrQfZSAnXAZAMmCmrS6rixYByzHpogvoej3sLzNXaV3P6cERgiBdc3wgokrHibhd9somX"
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
