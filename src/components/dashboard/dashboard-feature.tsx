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
    "2zdRM3eGKhwH6eDaSh8C4HFQuXB2BPDTvcGVi1huGmKKha9aZ5dzkmZJwHCpkrD1R5d9zHyQje87GDdpE7c8b8SJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PhVyVq4KCmjVehqgbqH8w6bcEosejVoFjqy3zoPMvg32s2HkPnaqfJodqe9fhxkFJzB4NsAjbZStzJsh3pizYjp",
  "key1": "S7ofdDu3RAUpCDC8SJwckrb4KqC3t6fPRVFggpaqtmZA26dhiteKNL4MTiEYiv195FeeU4qrLDhh1RakCzAB7Fo",
  "key2": "4SD1ARm7ArF4RZbLRUkAUxTcn58F5MLWBc62aHBDyVHBpe59VH5PesiNqN1Z5hFXtSkMcLnQ8A4i5K3tLsTGUThm",
  "key3": "5ArHmXszH6F1yGKPanqqgUEuECTqhhxJb4hb4fsBUPqyNiLB6nDrT9j42t8ZSxT8zmtqNqAu84WbCy9jcUgD3yWB",
  "key4": "5F27ai9cPQDTwtxnigA6KyBPjyvvfPFToPkfzMdXgNcmzQN22AWbksmiZbTVvvZra36cVFiznqQMfJFEbj3YDFZ5",
  "key5": "43HEQuaTrRoXaaKFFwZv4vPkdVr8vKbG1157xtukqEBqfcUhwFpTap9QkdjPMp38SkVywwPMoPQjSs8U8zYzfxqK",
  "key6": "3TZcVNa1qskNA36QENxS7cDrTayCtgpdTRX7hPbhpSjBffhsksgJw9niWbym4iLDv5QH6FGXYqedqpFSetYYZPcW",
  "key7": "5BArYL1Sv1pprTrwXv7CzzCAe5sDGiSAzmKJ58jbPEkfLHS5pRFkVTxUKweZJNFqRwmwfhH8aVu8ugZDUp6zuDRw",
  "key8": "46rEx9dxGzTB1yuCwKAyVV4A4anFjSvoPZHcgSxuL6RMkLipbUSeCSWvhGMj8ff8VVfMzWSAaZyvrmZdMUJXVx7Q",
  "key9": "4gDTy5rCfAx7fs6h2i1KejQeY8KH68Stc8v67Jtccb6vDjzm85eJJdn8yHuhutpqd4Mmv78RFGBSqeXPVkTx4wyi",
  "key10": "5j1bF8XYrCQ4j8J2rNTYiH6WvhhzsYHgT9MsXqRUQgRah2BWbtQzJ9KBsW4GT5q3zEzBQ9MYbAnEdppohD1AoJvU",
  "key11": "28r6dE4FkaWYqcFCQsAxhMAqAtcmNLN18VkLS78tbhaJrmY3jvZvFNZh2KjWYhQKUxsQjHecowTaMBhWnzXbdG9i",
  "key12": "2vMvghAM7f5LPApAoSPrNjc4UA93CJkBKDNvqLVA2pCUCo2rZ4M6MzxRSvbPnobtAuiC7PVYCdMB9g1eELQ3xqpF",
  "key13": "op5VzBp5zSpEajGhajZXYNiifH8qRP6M7vXiM1J4KgqbhqKYRcTrfyY67MxsyvyzpkNmtGnRQ8vDP29sxGBZTQM",
  "key14": "5pF4HENtyGtKVXkbCLwVocWLHbPYTFgyJ28wYqbrtGEkRiFwoFrfxVrmBFpFFuAoM4hsiYkW9K7pP4qdfauoXUAs",
  "key15": "BwNExC3hA1JEH8n2RWTztpLSB3gN9jxSJRLz7mXSoVWrkQ9PfXWCGCgnY4CVKGa8XJyRdejXUiXd7FKKUcdFRa8",
  "key16": "5dD5xn1ky9CqptHBEz9dvrkAZgyaRTLk1txYL6EGWpMAvSoqVrwhBGFdWJ7U7y7ZVTvtRXPTLWTUJUbwp8L2h4YE",
  "key17": "4AdwrTB8wG8mrqKNWeiZ4CBhmPW8PNC3qixwWF1EtbGiZp3RUPWmpCTZyhy9rK7jtn1H4zGFH8CABh59NM3mNHqp",
  "key18": "T3nxbqHM1BcFu1cEiGorvP8cawJkt5sTq7xSRq3W5Wvbkms72U82Gs5dwYLZRgx2E2hRDxz4ZA53DbdHbyB4f4R",
  "key19": "z7BFBqjeq9M9PoNNd5fFhpvvit41pAXCXBPdu9wj7JhuTiBGMW2dHW8EwXwsKgwTPcKyYT4ZscpaQiH9CjhRbxs",
  "key20": "4TkRfJU3xym1njcTkVaV4YChpaYpBEBpF5ipJcqgd6ZAZkL3H98qcPuGaV9VwkSiDNNLsQ6634DNbpKwKk7Sx9Qx",
  "key21": "5xzE9CWLceSQZUdLAxfpkPEpNneVojpLFbzTUkxLFs8xVYCUDPunK3mbAtPXB23dTTgCuP7KAw3PkeVHkQ7ir887",
  "key22": "5Wx2CkiCLE4jsXby7KFXUrUBiu8Fin4wWdzX2FVdupw6JXamq13bXF8jWCLrDcxMtHXnTt1Q7JrG1SwEbnwz5KMN",
  "key23": "JvtfAADPKsgmAjPdbR7wjLPU8WKfNNdmA8GFL7UmTWjyTTVVzaNwwz4n9TrEkm1zuxN1FkZYrbL7pfvE8fX2HCt",
  "key24": "4wuU5qUz22E2FHH5VXTTsTLaCzQVYrvsG7ZPzQvT7UGs8NV9VKBeCMazdSVtFChKiDrfGXBKqrZxzWqjSsAmhckt",
  "key25": "55R9xPZ38JyBoCHvg43jmSXt6wwwoYd6XruNxF72ZEdmDjDV28bMVRcfj8j9wb3AHxDr6d3ChnvP3NaNYB5X5Xxt",
  "key26": "2g9LJsDDeSmoqotGcNACmxLJ5kNbkKT54FWia7jvFTbR3hip5kYieAc8kPzdYtSM61Akey5CoNkVa6ihQvbCpkxq",
  "key27": "4UMq2iK2RVkEKZWF6JpF6oQQ3Q9Now7L7QdnUsFwZvNfwh98MV2V8st4Fz4NCtMhf6pnJ8yxHceUxS9Px5spXLg3",
  "key28": "5EYT8vjDm1uZ8a1uMhp2Juu6AsibquovQceaiYnj7piy6emaUAzKgp91N2mvoJt49GAsJ8VnPFfRD6Bpcm25P5XT",
  "key29": "5zJzE48QfFzpevH3s9bUXadx7UNKW9n7NRXkBbi7MNNVkwqjnHSjQ4pSTY98bjiW9vbbB3UTLww1eCRetkxpXhGq",
  "key30": "4p8eJVj5Do5car5XexQC3EsNzkpznLkZUpjHFC2pbVYLoMt2DcTfPRBxUpi2BYh5royh4zXSaGQHkvaPw6yZHneG",
  "key31": "5RPUi9AAtC9S7eoMGkCDsrUE6Hafoh1fzLKdnKCCJwNC5SVGxmPbdd1pgpsRnZnFbqFX9qNNWL5K5foDFGmLkcLW",
  "key32": "64r87EK9w3WN86GiH5jxhQkmJuhiYSPy91kpUoSfzcv7mkAMXy6vr6zYz9bmpZdun1sEw1oQnWMddjzmAbt3HqfC",
  "key33": "2QWzGwyuvEoDuExwAVCDXSyjTtpRjwXDJggtZUkEVgaxGJaLgMnvoCFqEvT3LqUhJAsvZJBigTXf4TRhtbjS39LS",
  "key34": "5HJsYUcTqZzkWk4xyGcqCFvBSMZkRPJ3tEZJ7kNP2KyXe9Gii4EPgyXXptfEh1PSUdrMH6vKcVMZLiCrBVor8P5F",
  "key35": "3XNDsiEFi3hW59VCW1ZaZvhXeq7MHpupdhWMTCFGp2k5kcZWdYDEaZgq5A4ZKLfwJjABijCyaca8mMzfrBJBFzLg",
  "key36": "e3orMXZyoiCkheW37yBS1DZMVQoYP5YYVqVw7YEfH9bjXoU1LiPgNXD3rmWhQZpMHgRVwxGC6VzyfDp3CRscujz",
  "key37": "5CUFFagMPNfrqj9UfaTZsrpyPRHhewxjsSfaWoGJGAp75okdXFGKZvHvUB4wLKpLGtcZDNnid9Trgf61By2mpyKT",
  "key38": "5Uv3XsbzV77yCb2A6GQVwVe2Vf7jKQ8KSdsucAmMFGJ2JeZEPWtinyoQXW5coJGmiN8ALS1eh1dBzZ1grU8VAMsk",
  "key39": "eDjJJA5RQk2qXTm7pxBfLRqqior7nwD71wjSoVbJMtEp7zaTGNkAJV4bLkihHZyN1NXUArbhiuukX1wEVVhMxxR",
  "key40": "3tuPauNgCAdZxyST2x2xMzmfePKKmiGuqZFKVWnSFqdGMgei2tJTRJySQXQi8CigJZZWNkeLbgtqeqNDkEfwzEtR",
  "key41": "3MYq9gMZRvRECS6xxJ6dBueQ7tn452VAt1VbARgLrb65iZztEKxH22fnVBuzdWtyvq9hvPf3p5Yis4KJ7YBnov4p",
  "key42": "3DGWWjFxtZhWMLRwptcs4WKKQHqiZTBJLLfwkN1qyoYwwzkxLEY3jwECU4B15yk5R7SzotmkfeDkog1pqExFVz5P",
  "key43": "eqMUscT2F5YhyqnjJnxNAwef2tEEabDY5ytsGBcoYwJqLcVQFFbMHjjw7VuE6UbCiNnxDK7NxpQcsbWeFbXEaac",
  "key44": "4wgpsHEPZRuMNUMYJi1sFiQnTNt7WcE1NxrZDGyLU4Eu7NkNAoccrJqiG1tANnU8eSyLR3qxR8SfXgLUjDya5ZVB",
  "key45": "3RTzhfN9bbbZ4TbDeTtFL5Dsewx5J8qfpuJPopHwM2fpMy9xpwZq3J4Jj7oMLdsYW5BpBSBaZjojQKex9Ee3am8c",
  "key46": "38sBdRJAebT8AAMVj9t9Tv6hurvz4j8jt3zhQP8XqbekueXxzpirCTPjgZHdBzjpbHZxBKVQkC9JehnaAfLHx3s4",
  "key47": "5TDsGWMzhAJcN4ToFN3j3eD5mMsHZn6Sz7dQzpLhppjW9AKbdLR4BKJ4oRFy3kZiwgu5bJ9ah7LyQgSuAytQiPMX",
  "key48": "qLRJd3xWmCofPoSzBaLJQhstZxBifMjQ7Jn6Esew83A2Qmg3sDnEUuPAwfeG1bRnakFLrH6VuU85Rhj1U2qf2DG"
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
