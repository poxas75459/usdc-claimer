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
    "aso6p6Xii6duozbD31fFuTn1eMxg5h4kTbXrGM9WdtG3TARAgQsQ8qwgPjdo8pq5N5B6B67wq1Pm7uPHLoa168h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VQwu1UvvFAevtbD7g31mWpkLzLjz9ULkTAgjkTZu2zRR2XCwws952P2yT9dGnfk9AN2TdV7dZUKXqKQ5YzPijAv",
  "key1": "2L3eucSu8GDVMGzuZQL6W9cHvD2xjQf1xb7M4MJPihhx731CdWN2GmsNPQUGMoaZuP5SGyuv6AQy6Fsjz6sX7nJj",
  "key2": "jJhF2Sv4yfFR2q1wtvrPpMqDdqf627UhE6ru5zQahhXoJAcLf9XuZfJY1ffZ11HHRyAfMAjFBtwgSGJNUgH3c5R",
  "key3": "5iAwKBf2GT5Hvemsn5mqYZgUZ29u45sRTGgbhvtzXnfkSwKg7Tx79VUqFh49a3j48dAFjDiC8ZqkGDypqDRWNTJd",
  "key4": "5nxX1TW4XqeaaXKWNEaUTJs58wFHjHf5VzbHUKS5JctkiR8mhwgv5WXkSMHo66jSxs7ibizExgLvQ994ZZD1KVAh",
  "key5": "3im35NkYp2rqCic8o38SV47xt2NvUhoUeCkWJXfAStVecpRMmHhFLAXLsK3A4N9LU2ok8bE5LUMwmaC7xPgqLSrX",
  "key6": "5jo5cVarhmzWrNCK2p46vYzyzb9yFqL2yvguMGM1Bw81jtwkM3TkYN4wy7yb3MUswV1LrcoAugyxRUaPmBjeJ5v8",
  "key7": "3WDcSttX5eg8AARSsb9fA7Uh9qEHxVqvjXGeZqZGDQnrVhsJHSBq5LtTEa9VcsNtGAvW1C6TXkTLhLu49Bms59V",
  "key8": "5zS5YFz4ERBmnww2g3BUX64RCHNvgU6wcNWYdzh6zBuKtBSEiaABufEvgiHkyvN6x9kccYaGT5hXhExuceT96X5e",
  "key9": "3TyB8ZWR2LQFPWFVDSmcKoK2qQr7QvohLRFh9j7SHqMUYkBbQcFumzBg3i9J4dxL79gsmdM1de2yrRzZsU6yLve8",
  "key10": "2oMr4jmtckEnwCubQbRrMxCc8JTvCJEY1JtxHpYzQihz2F3DFUurF5tXjskcv7CAozZZZzB5Xm7U8qUj5FBQpLgS",
  "key11": "51QZidxnsK6GMZ5JqCHsPUQb81Df88ZrhAkod85YnfBFfRvcey6wqANa6SY3DRkGV6Rdz4fK4Jo4iL9SHnvugS6K",
  "key12": "4mSAJjinyFogVnps8huLAixn267gDeHLeurJZ6uxXNESxMjtiWR3TZRn5YiHmBfca6fFr35UnaN6R9JkELkL46yR",
  "key13": "4PXszqETAELqJKSxcXLv9xX3jSCPSyzDEpc8xM7WmNepW9oLPRcYdzytc6iw9XJENh9sbXH2p3Qg4kr6MAeCp4vw",
  "key14": "4UdFa1J86zCLsAbdNwKe71dooAC5fRwujcvoojFdYKNi35C8Gx5KeJYNHDVA9gFEEEwkumpkTgPTggaSEiE7n6nj",
  "key15": "64rFusctF9CV9XQT8158c59QQvyDmVjFH52tmsELMRfJpnNPEasNbwdwVVBn5Bdp6WuzLeDpnRgdJPMvpqZVv1yD",
  "key16": "dcoHgwZZmebwaMRUEnWcmFpawZCioLDt9A8QPafNkMbs9fqWKTifLAd8otCUKFUgUyEEvt3CLyP6KbtqtTHLkH6",
  "key17": "2rZRFQaPVmjCfawo3WMc2pUu99LPif7Dr68qomHPpTBgDvkoaV3RkggVzxMGN7F9EnqKxZe4Cga4Z9jKJsnwFaSp",
  "key18": "4mtYBYq2yGMARwrrg8WfkubaER6X5PKhsV7dJ5S68ZFqcHV2EEai9EmNtHAuZ13oao4opcXYKoJKpYX5qTpD9ior",
  "key19": "3Dg4NqQBdPuxkN1gEiR3rt2YVXYBH5Ro4bSzhwcSdqDbA5j3X9bJuZmm6NhC5k4HFU6fiEN2k5bjbRiNDCqTikyv",
  "key20": "3wazxanDDiGisLDNqKy6hv3xmZtRsUGJt5SE3hvemJ6DVaWFYKY1VhLYiYRtzpZLmFx2dDJKYnXhhCVEHFCdXE1B",
  "key21": "43s1fZJtEG84MbgSfFkfXcnGUkEoLeecuLu8GihCr5jSypcwu8LRx4ZRSFKkK7LV84jgLfFoRHngR4tp11fZwhwn",
  "key22": "5n3nNa2mXR2j5CQ8RNxzh9Yj6K6mzXuHL4KtdctaP66rBLFj6en7R3jLZFx5MsXRXT86PDq1ekCp9UL7m7jCTK96",
  "key23": "2czrHN945inpDc95Vco6QbNytFg2tS1TDGgNjj5N1EfrUb44hvXpVMMahWd1s9x27JdpEULsqdeZarXeWxCjp9wd",
  "key24": "5bXVkxwj5GqMCzW6vbCvaxjX8aEH21sRxmUL55YAyv1CGGdSTc3uCJMs8ugN2uRy9mhUxF65EsLhMR3dd7y4AYEB",
  "key25": "4gk9VYsfoCSebcCFhc38oNvnEqtkr5WpNFqUVQLuiNnFXhpXXgNmApHRAvXGhWGEMKZtQRQx4RKrchNAJn7MrExk",
  "key26": "3fuWnC5aL7YdTLHmCYceN4qZJr2HqK4VuqKQFxZpQRa4129LqdaX6HRsd1YYNWc3vA6pGvqV8WVHnALYh3UTQp5p",
  "key27": "2b1zMP4qDbgnNfwTbvdoiZZCmLstSq92tVzRpn7hfefxqFPZVwqy7rXDk8TEnx9id5LyNyCqKtJosoNdbbx9sJt1",
  "key28": "58Q9bh5fxV3AdPpYbh5fZ26EaENqWXb6S9B96zdjxjpGmqdGpSX8tHRTZYY7rZsmjAvdbSMx8kq1mR4fAqdJ14j4",
  "key29": "2Yr4LgESfuDFbFbbRVKkpVXpeHsLh8tfFnVxBz51P251KJ8kRg9rAhhGMyy9BKeHPLKYWu9iiZ2urWqPgi1aQN9Y",
  "key30": "2ZwtuMJGw5YMvEb4X7gP8otEX3u1LptRh1mQ3uVzRXiRHSQ7tiWcq7E2rUo2JroCtpEPjexv3DAC9SBBHMvb4U1D",
  "key31": "3hGEWxxPxKs65mDVAVvtoEYCewA8huqbLmoReFgg29iqwrYnaqmaQJYAL6oX5WmAr75ms9maiCCHzMdNzGRZ9WJc",
  "key32": "3oDe2TCAeegwPv9ymGzbPsWeXpZTjVEw4qczdf3XgN25E8Bxv2QJaqJh8UcgbY17cSVmjCneQKMbKQYmNSULDsdp",
  "key33": "3Woy7239gMXzK6M2giZuw7xxWmqsY9FS11FaQEpQTfViUaVavx48SnEwaiN6678jTtJLZxQC6gwknfciYFtKkNd4",
  "key34": "VWfKK1G5WPZ7AQN9XeUP4moRea4C1ruAKagP3tujqwjWYY3YCCAy57jnGSZhJf8oixubwfQ6Y5JtjbqrLoL9G1Z",
  "key35": "5BAfvnm4MDipUXZJXfgg9fvpaQS1o1KbLnjDRFhN2vWXPd9s3CQAyM1hVxtTRUfpoBBj8eD3n5dGkJPdeY8NkpGX",
  "key36": "5xyvuhpN6mdLgPGi2D79WwmiSMUCXu1yKMgRj47htRDRCvuSZ3LkZfrBwHXRHp2k1Xg72NxvxZVZw3pG5b7owa9F",
  "key37": "484BoQrAsyn9q2WGyJMkUXA1e98jccA726qZx4Nhmj8NuT6dykgNqevnzszEYBeggpJEFNfmhCe97wfaAjJBrPJV",
  "key38": "4Ei11CPGWCdHbuwH8matJqVcieVUGGfzmkYiZDXpZ4WY7wiAg3cQ9JQqakThrEJRSDjae5QU237rYKiLukfzkcud",
  "key39": "5MnsyGxT4dRbzUwv6ubREAswDctszHpeey1H6HcSbuJpLeuXdmedCwaNMYHfHq7GaMho519fcpmyy6XRt4g9aGvx",
  "key40": "3UqYjnAEtNxpQBGBtAzChHaPNzk9roj4YvThHUqAh1WyvkN1n96g31P8foMSoqkq3H74PSCwy6JVH3tUYBaWWDmH",
  "key41": "vNXjKpqrpBgFVf4SysJxcgKjVxvGsLq23KaQhVdPaKcKQyhdFZhKs55EDmFuKSPyViKT8VJWpHxVwHRiYqRL8FK",
  "key42": "42WsY8BKUt1nvQGEKoZJg7Sz1ppHDFtkMi6TrEy5nDpUmru8KW6uJegsvfgk8wXZgN5QWZKADuRdF7NmegfSpD7P",
  "key43": "3iNmFCgwzyuoqYJRzCRhZnWa9igWV94jV6Km8BzZdA3SFNCMSnCtRoj7dRYz7enmEJSYujAutXTMXW7xg7nU9M7V",
  "key44": "96gTa1sQLL5SLz3cduQqoTYwuAvNYqUwD61ic6cKmahiEFHVnLvsTCYdcvfSUsM9iwAjNbGrfTd6P19Ud9fc8ri",
  "key45": "3pWCccfnTHw89EmiS7u1s5H7C9Err9DrDvYCHQCQ9zg8KEDvyyHFtjwgsn1q5ysgahgwS6QymEScbSVwJsaudprX",
  "key46": "bzzHXXdJYmqfAP8c7gJBogmx16GEWZoDBHmjGwatKvhJt5whVXQWFh1svPNTaqxh9G7Les4GHqurLRdE5ugUBD9",
  "key47": "52JQ8BRJSshvc3GaWVohMtGzKXFyFeyVHBFBpUuL9WSAPGk7NQ4HGpyKRbwoMzkkBvvUiG63Jx7x6xKnCBGAfy4U",
  "key48": "rCFTQarbewT2Ssyc65wnFDs4vFXhWA1gLPbv8gVLYCjeZNk1m2QyCXiA7goWmqqYmMGeyFTkTicuTinz5xWQGad"
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
