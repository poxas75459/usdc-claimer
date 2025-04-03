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
    "3HTVKb9BjuqQ1WGk96Gca6MCMCy95QFR7WG4MQYUJ48uA4dEz9p1vj32UWZGfJrhsYtntWTSfSMAYquGbV6PGdXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oEmGwNRu4cGQumUwUEHkvKVp9vMSqmEqdCFY12iwEnTdSjr2fQEZH4vdp4LXgpoKXMP3tYg4aKGgjcRG9V2L8g6",
  "key1": "4fa49ooqGaQXEJdpW5T1aFS8xreX2vTcz94xSQintUvrJveSxsGvTJwWL1y6GsnHLo3p9aKuGyTCwiniWynft2Ba",
  "key2": "3GtHptWXxVgvLiD6vAshyWVbJjqBsJ8wPnZsdRB5KkoxRHfZCifoP3DcrCW1iyNCmRkYaBBe63Jh2LT7SuhkMgHJ",
  "key3": "3cFy2tVGx9dqf74SwGzrhqVvo6JvsuzrXiE2qQpcLLEH2NvcXWp29TWjL9bUXtn5TrgZL3iA3t7own7mkf1o59YC",
  "key4": "4imDF4B9otDYPUyZe3QpPr3Qb1EdNFBx5H8cMcC82N7chAxzDdTPM4BQdv8V6EQY3zTkndaEu17LFrnRNTUMaeJq",
  "key5": "7A7CZAWax9SbiSiX1Swap9tj2pFzFVAmtAQvoDQf6X2RcJLjatb4AqvobqZabDmsgVW1Ep3jVmYefpG3cw3JELG",
  "key6": "5AZuewKQyKJgk2QKXtJMyCFSgYPxHmYgKCL5X3mTuiRC2RgD5GkMrYJV9tqxPvqprSd4YwJGwUQvg9rS2Y3oSBSj",
  "key7": "5KU8yLZQZa7fiE1GzhLhikr4QfYQ1f5hSVJMaKE9E4Kb4UsWdVzYAv2JV2uPXm146Wx6J78fiComVEWCEvtCVssG",
  "key8": "3g7wv5tJMmBmnbs8DptZMCoVdQwU4dRFRRzsd4gsyGof1oy4cJ4cVX7fWjE1CryT587m1siqLs3U3TJsFPKzFFyN",
  "key9": "5geomxfRZRj8KffdDUnfYG9B6jbgRGZCJsoNKRXDU6zPgfH7RzLXNBJ6quahBfV8dHdQUkWX1RKtH2hMAojFYTkW",
  "key10": "fe7gnWxd1PyGBs97EWyAJBDKwrWzHDHdFU8x1PRRBgT82vrrnTAtP3VK4XHLNWCdZy7n8nyjRqejUZKw5tDWv2P",
  "key11": "3kN94oHyZByvSNaPVaqtoHTAEKCkDu6eXsSqMg3NhrwcMwJG4eCcgr6TVj2LYrtNedmhpTyf5gDHN9Mzd1asGqvK",
  "key12": "28LYdTxjnqmBfG41JQ8exMgGQvxS7XX2cZvtSABc98DNGTyoQ6GhX5eG8gVYUn536Fy3zR46NocdNswSPKuFGz4K",
  "key13": "bUjFaTzbjGRaLjJp9JReQJgHLGoWhwQRRcU5LTEBGTMHTh76iQZVkabdjZjpTgzYdH1sYQKwjDiX1EomA4mFGue",
  "key14": "4zqQf1TjPhJgFJ8oDpUZEmveL5bxpiAGRLQjz7EC1U7hQkHMvh5SudP2WFA18cZ8Saz7wb8QTh6CKvVKDStNLASB",
  "key15": "5TpTzm89NztTVTCJ11M715Eu98B9ZxgQqFW89upW5GCwBBPWJBP1xP2Pp3aB59ATfjZwc3z878XgkhaAUhm7BK6Q",
  "key16": "vBpak3UJeRTnjK21zy6i7cKpawFAiwBMZwooqEaqeFBaAMmJDa2r7EEBSht4PeJnBg8Fs9wN4gs3q5avTUHaT84",
  "key17": "3FPQTK4bzNFHZb77M1gcrVobFRiAXSWwnXLN2w8CPDP7zJiCmjqmUa5cpJrktB7BSP1vqXgheQHmxN4FosSwMXU",
  "key18": "38137CP44qRvbS7KEkwcJUhzty9CGkuEXAiFC41iPxv4hu6fkbgwW4X5apfjtvtJuPVYsMheCbri696Z8tcwWYvV",
  "key19": "4JYAzWpF8tD5AvMjVpaLMFBVSU8rUJkHDRPni3MuePeVFRx4pE8jyqHmoUgTZUUQjs8PhZH2LcYjcXmqQajqGMQC",
  "key20": "5MDjxbw7o3Hs59zzssYktfCvqT2gypw1Wb8dZHSazBo24iScK5GfqNvLN6gbL9i6bDVJ1KcRzpNtvXBj4dZkpGVA",
  "key21": "2is2RYkGovCeGct87wJpr1uiXLY63XVN4rNRjqTfTR7xuVjPgr8E2VwJcD26iNdvcJzKh7rFrjMmG6yVkm4QwTwM",
  "key22": "5s2W9J82gmija1Lwi41dgAyCUWJJDpw6iig6qVkkFbZuAFRbzDKwMUu9WZgVdjSrqzEy9CV2a517zS3uYxU6zwDo",
  "key23": "3xLJXaHsAx6kshzFKZAGbuM4p57SkeU3ENACpUg8kfRT9eUa2mpYhPRBDgfETqmNoF6aQPh2TckWL9U6WVr2sTSr",
  "key24": "4hH7NZedRiE1E1d2PfXFUTwNNyrJEMsQdgVXQS31iRqphijnAsAKN33q87ssBw1Tu9Luv7WUEDnPc4qmK6s4XE9N",
  "key25": "27bDAW5X5u3F9eJ3PWBaNfG6Ksivx8yScRB1Hchy5rV6F6WRjbg5ex3F6ptZaPbv23V5M9jE9aLSvTbK1mXdX2Wq",
  "key26": "5WmfZt4zkkdhmdzoLK85jfApUvhqcBCaCPnqonL7YQceHun6TJWXLQMjMFxTthnYgo4d54B7kkcQmCuyCgh95fWp",
  "key27": "2sRKAFcWHB5t4iRD2prVBtZai4mjpcybeJdcNfZM6EymzEphMaDA7uX6yyytCmdKyYu8n2nr6dkaYUzrR5GEr6W6",
  "key28": "5mDQbwYCJNUEWWxN4Hnwpg4ZfdFBuTsSzGWonAdJzYVKtzZ9qEWCAbF5DSYmVbgdYCLQyjYt157Bj7DQLUyuTY9V",
  "key29": "49ggH1gsHN4patzgu1ku9TgKM1UF6DcXLRFtL9Fb4GFACnJMcMCAo4o9SFMYUtHHrwU7di38DHkRS7qAANvdKeKD",
  "key30": "41AkH1RtVAVAwDucAdi3BjADxU7rRjA5RMpKAQ5TVNWcLYVmCSjPaxqsomEbUR8vaAqbHqyBT1Fkz253bBhai48s",
  "key31": "2eAnh6XYDtkbfd3uRygJJWNmF6k7JYcvd4U1bAn3Fbxk4vQ8aZVRgoMYhBvdvSmD4V1sRMEenFWu81YDv5o28KUv",
  "key32": "4kGmkfT84CHFcgtpnnupfXyjmGGS9WBZf57KNjGPLUdLaTCq3SnxeHyVmmjEh6by8cR9E1z76fHNd2ceG34bTv1N",
  "key33": "TxF13KBbEiEAjpNxK4vNFqMz8xFTkKZWKvepj2m6njemd3yLeQZgpuNzxJ1NtKtvFZqC6xCMTNrMTXCeMCkRbEp",
  "key34": "5nFT5VGJg2VKQb3UfwuZScw2H5PkWGFHwRMWxPTnXchBrMcq6q9jGJnXk2GgswSdxS8QWDfp5BjtBfBZCU6oxtrh",
  "key35": "5yPhuYQ5XuDSvcRWGATbtu4f9vGB1kcd2U7aKLqokQTrfJTenTjcHx2BfGqyQikCKhr6UweCqmzGrHLbQzhabSDL",
  "key36": "4teHc3R4sxUczF7A3oSFHwdn1GvBUjwyHeL46b3rbXpdAUnnvCE4mPCxiEN1LDUqL6dkdneJCo2KEXxoaf9JZ2ob"
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
