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
    "5U1kowVcwci7RAADf6uourW3PfHeHVb5AuKdECaow89xXRDH7Ypqmm5Wf5kJQ1sJChJWNSmDiYAekvFpM1nrTcP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HyqSEDNt6xgGJTxQehM2sT35CEF3WuF6UkBCEbZX8AQsjXdq7c7KLHBXA8GA9LYnTUp5nfKiyud8uBbm1uSuPpz",
  "key1": "4oRNVDcvuKwyk498RnLqRiX3Nt45yj11YtZJcviL6tcqk9fcayqqaymY4EvoTJYtc9gkaoGMgwzVjxPoeV6TbXC",
  "key2": "5a48frQA6ANMvoJBMiLpzoHWY7FtDUmfeUYoMtZfEKeHmu4bmZ5SJVtBjCz4ejZ7jvxndLaRm8AiTGHMAeGmaPii",
  "key3": "2Nddi17vMRPjDBpFr84eitp38nmUDfB1QukLPAmBbLxp9CdmszDUjHPjcSu8SBMjmJAu66eDTM18PhXb1yA2WcRz",
  "key4": "2qqWKpZpxAUEBAx4A1syBhdpEch25rj3Hm2YQ9yqNPygaksCX917qrvjuUM8bxCZtJuQxxsXXbGoguex5fpiDaby",
  "key5": "4RqUvP1Ws4uTUjCWeQBgWStDLCnGRVhF6Nor8HA2RiUEHdbKy1o6XeobfYC82a5iaKPv1MA5c9MkPaVy9CGKfzT1",
  "key6": "5XuJwfpeDrmCqfgEo65i8uAjchydi7oZ8FowS5xu34cMhjFE5TcXiuS4SeumLvAYSxbzxG3Dr9YsRuWVJwmaM12G",
  "key7": "4X3D8ncbu9p7AvsNfkR7Jy4LewmSPCfLupCSF6b4tXsDygUHEv5UaK7mijZg9YfvBvYX6aa8ph64afEsmG7jTEky",
  "key8": "3DxunH9oGWXF5cKWc6iR8NaHaosqH8KQ8zGkmDM8DwwWyExoFwRr2Gh9EwJhkE5HssAF3VbQeCgiCpfVXCWbhmZf",
  "key9": "3tzVz796P6PvJTJQVF5vujcExVo7YB41zesN7pVXTFtcyrcmYWUaaRQ3sg8WJkjiV7pviVjxa7AwTBNzTsuuv4UH",
  "key10": "pw84nKxR2sqVpcvvNUy5Zh3uE7st6dabWzfnGNfVAN5af7qN7pL1QzvKfwqKMvW8d1PubjFu2bRkSSfMrknzwrg",
  "key11": "3Cqnc5MerSFj75Dn73E8MHzvGjKUApW2PbpX9LajasnBKYw5R38EbyuN1VGiW8fXmd15344fFdQZZRBYQ9C82MKm",
  "key12": "3dsL3L7qWMYsEGcWzHQD7ALeZ2FwHgi6DfW7BkT3zyqgNM26ZRkNpS2t5NmHsZRK8xBZnNyzDNm3oAfZkrR9Lxfy",
  "key13": "124J3VdidZk1PiCwk5ijiyEgKJXBcf3qVn6Q1x4YMVgUeMFLXJpyEmaNCNMEoehkMFfukbCGi9AbmU5kSzsLdwSP",
  "key14": "3C5ez66qbryed2NZfDx3JbnHxys5vLMyiKJ3s738xfTWTSN65Y7Uv3V9eu9Ac5ZCEVgPREReA7o9azBViHtLkVM6",
  "key15": "3LFZaoHDmjzJcTnioVHyNTDTb4ZkafygeotTdrYywPMQaCXDbCW543Xr8sMccsvWqd4UnBpqFhjhHdL24DgvUYFc",
  "key16": "5qE4hhAzop2Ery5dY8hk6nCfwqVNAimnKZjgKcgRoKcwWvdY6QbkPhqptnNC79z1L2w9LyBKVYDE9JUagWctdzGS",
  "key17": "47sMYTMU7Lj3MVw2eatQSwirc8nhzZsM5CshUBmbvFPHMpBLQWQymzL1mXrKeyTNPBAXds2gFQ2HhygxgrfoeeL8",
  "key18": "2uRCx7ZFfdqG4YQhoEUJEWtCJPxC1L3WgnLgifH6BZRBvqQDMgqNZrLvJjSRN71CUrruzJvicKBXN9csUbACm93L",
  "key19": "2LJ4Dinrf7MFp8v9p2sPjcigCNdZrXQY39t9f1Td8nGwhuu4eDBwE5MNae9dzxU33nowKxA27AetRbxCEcbn7Ex8",
  "key20": "51PciWwHXnDEX2PzbMJsbzd4vFp95ptPg4Ryyz9jdxafjLDKyDzwWYxEdGwwBnVQjaQxwmE7b8XnKSm7DqwauJPs",
  "key21": "4XkPyP683hVRXmgw344rLnkEZvDUPLQKKRmKPmAVAHCWznw6Yj5TM5ugMGZXZ1s6Zde7oxNqRpqEDDgfAV6cukr",
  "key22": "EVWrYW7EJmyugFg5XYuNvLSbgjyTVtANCbfHDD7PrpmPoBWKsvjcBfJ3MdoWfBTCzEdnig5NRVWqjJASP7QSnc5",
  "key23": "3NdKu52bJbAdEyhvnnHa36nNrkPv6uXd4cQ116ihXPR1j2NF42XmQB1zUTcoS75qzPQg6h3k91UQC22cUuS3tyHW",
  "key24": "KFtoCMzyZJfZyw6z57DhMQneufxPFBW8ymS9bUUUhWcZFwtZTonDJxNWofrf6fUW7WK1KCCgUE85P9n8J1Konyw",
  "key25": "38aVnySusoCPaPBmHCPQQCFhNpEjccBL2LoHW7PVfqcFgSoKRWCHXwPRY4wdmMeVbXwH3f5cgjjkH3d8tiaMC5PR",
  "key26": "2C2D9mVbxySrarUo1JMDuA5dYSJJjebj2pnG1jmQxgXTRcKVRuwg6f3uAgRwdGCAV7Zz5RnA1PwrGwA5v7ChhXsR",
  "key27": "nTpwFe1X6rTsKA3nV5zsFcYVHZXAhgzER8donwAV5JWQFoadycuKVsxdiwXc5EvUE4AGDHGox2EBnpgwwWLRQcw",
  "key28": "5tq3EqAhWdaAy8XfAdy8YjiY1xXhcWuHQsFLH7q9V43gedcXVEti9GrEqgeyW4fNReurhm8Z8eK36JW3zmiS7LXE",
  "key29": "2w3rzqBkbHzdVcZV3oJ1xgJXdfrmK39FV8NQxGy1FYE8H76iAaZac2xygwMGTnPtNMYfWRSzMVWBxwwoXTbAA2UP",
  "key30": "3yySiJbisHL7kYyBXPond3jn3Cy4PbUSsywQyZ7F1JpCqamSS3mMntiQQw1snMqUr2k4C4icb2Fa6wQpZvKHEbGJ",
  "key31": "2ckirEjvqgECPzhUEJeMWasiCDUygsYi26kh1b8LizHhLzjeLRdH44bjFUTHxnNhpxwKawsb5jWrcpP7yqvrVZ2r",
  "key32": "5LhtTpm4nQtrKpngTUpVb4gsTtUUAczxKhvkuC1vuY8ptNzyfJJYgAQqvAoheAADmzAciVsyztgfQJbBt2BKSLY8",
  "key33": "5kLtLtvjKRajsTzLrmZKC68p8jXaxa6JJVFSNmFyvKHu9ASNBEX1JrBsaM8yBaMvkYpjzGoPMRPbkM5MBmmmRVBz",
  "key34": "25fkjXJJXnqnTLWctwno8wXY1C7UghBKfmHXBQ5JTH3C9fBgcASE7giDEU2JK3nGKthDQg69HonnsKVKttjoQMy7",
  "key35": "5WMPAGXKfVyQH9wGDhci3iwqHC4nuGtHn5N5SCtXnA38BmQghV37XwGX3tvRWnTftKZNJ3t62ZtmZ6yR6zfJCXKD",
  "key36": "4HVkT8368hiSg27PGRXCRQwcBZgJPJJZc3jfUwWWM3E7SqwkQrkTRE6vRy59fWCQMYxG1EwsCXNf8YQsu2nf9t7Q",
  "key37": "5Y753oJJj8KKdF1MRuZqScA2uSfNfAuBQDzVAx5htoFor5VuP7RX3kU1SWBaZJeYdH7Lb9c2m5fj8YjjXNRNQHpU",
  "key38": "4aAD6szHspxTpdXSjiij5Jywah8MmeTiEZeAJHrjHv7uDCFtccYuHtG9jxcufn4YbbBixSSTsY4yjTH9D1XUNaSE",
  "key39": "36TiVBniUkTfT3mhuM1BjNLUexAXAcPUXYSV48wNyP6UxGKiEnHd2WWZ4GPtgtjtfnzFJ4GyfVYsX3EUZsHgQ9Gy",
  "key40": "3iR4jB8uQ2eNrYGgSuHajREfMG5pTWPruz8sKrGGD3KNPt9AQ7wHpW9REawrH92HNvqYrJ6UYoxruaAMV5o8kkpd",
  "key41": "5Rjbb8G5eDKWWUzsXhWELjuWM1Ts4f6ZCyRYcmyY2ETgPtAkZeJA6ctgcD9FeasvctMUwKDVZwYVWoTbmYn4ArFk",
  "key42": "zmMuuscfghaV7Y8BbRyTw2mvHTJY5CBN6GfwMwei29CWSBYXbUh54F9ZtkfsubBhgkZA8i1bkockX8QQXoCQQjb",
  "key43": "2x2g6QcnnMS3QSj4nmVzCPe1zLUghv4FL4pRJdm7PGx8bBT8pnuGMSvz2ajkPJYYhxD9U3WYqGZ4Z4EF3gfaGRxZ",
  "key44": "Y1bVGaVKGd1X637mcWUxYsHavbZZc6kyXrehPuADJPgiuNKoi4hTUrPpkR3dGFvGTV7z9qNeLLg1KayXWqPyJnL",
  "key45": "5iHjCRD2JiWZpPwtSw3FSxLiAPBA8XZ2UEVeiWo8Vvq64VqSiFk5BGV6aBMUbaf2fzTypfLxzCLVUtaHLoodTuTF",
  "key46": "MJdrKdBh4FCGrvDyi3eASVKabWdgMC8ptKBLbMVDsxozmGeWKeguACxosnf2eFPNA1P6tv4pjXN1qfPZunrcARP",
  "key47": "3kXEnLh6J668CskNVKCKkgsQk5PMtaKAgRZNcW85hTJ8iuo8qRjt7iqjQgezXVqQgNSqcXUBUqdKMZzGsaPHX5hr",
  "key48": "5UBEZEahAij8YJKEzZDWKrhd1HdEkcCAKmRA3aFd1QXrnPxXsFtQWBx3e2vW1g1Tsdeadzdo9WwMJPHFbTtm1v2Y",
  "key49": "3c21AeSYgyMVqqQmSbFgo53jpCDDeFSwLAqfw9kcarsUqRuticjtiPsEfsMWDjYFtyZaAsunheAorZpP5KpWeuqy"
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
