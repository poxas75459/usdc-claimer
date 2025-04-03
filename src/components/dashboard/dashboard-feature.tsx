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
    "YAcguD8issPEmSPxxwh4AJkuqJjdho7dev15jyr8Uffykf7Z2XK4PnV7iXcTwUpRvoLuiv1Gk6ZKnjDoJNXMaXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gkXmnVLMbmA6SzQzd1gun5sSpxGoRB4JNcLE5fgo6YTxAFTqcGQoqLvb74m19gimzxaugjtTPfcrZqkivtf9RC5",
  "key1": "NzMqrKKY2WrMd6NPjHXUXRuTnVsE78HB9dUSM2sSo8ho6vw4tKe8kRazkgMRrabGUWSgG4Jxkr4NToNYT3gXvWA",
  "key2": "49op4YmUJc4apRpinquHzt1KmG3barBaS379R46g76QRxWMgdLgqyGWMTxmhYR5HAjYdVX5FAJDvEca1rWGEUVQS",
  "key3": "3WVCDXTNPX6ZGnDFh92b6C882BrPk4RBhc31oqMKh9PEBkPDJXhjLZ5Xgx4nTt71sKFWYdUceBHLa6WQAnZeWeuP",
  "key4": "3CnbMmyUhYfanyKa3ZC21oFTL8BdtfHED94g3XiLunvCkxJ6SGzfZAH9u3rFfkE7AM5d6K7oaJaDWLFyxsMxDji3",
  "key5": "54EdqmwyHDeYgZZimnfohCGQsEmJWH6iHsQ9dG37M85ADvdcJxG3ptY2meswhJXwpwhddsHUVdB6mjRCRiQK64MV",
  "key6": "3RNHBtbt8RvCBMwo4NUWZ4UrMC5vAk26EN5Rx12D1zXXLWGrZNYCij7kAtFhd1L4dRSpCZmKbLX145eXBuKMEKEC",
  "key7": "opntfZPrvWiZeqgXF5D5na8QNcANhTThxbjp57BzXtjCiLTTXHLFQnVX7PA7z2wWY89mpDSp5ywjqmgNFMHMZ79",
  "key8": "57GC4pFsTk8suqXS14QVDfpWVY7wp3xPdgWeC18NrYy8vctFdTxf14yTEQW8uBi9o5RXj97kSCJPg3gyRJs8hsxJ",
  "key9": "3K12cqV9QQYQDKUvwbhwMZ8BWESdPMj63Sht1uC5dhaTrQdHG17cEbic3ojdwqzNKjL7ZzVVqPLsEaL1DPx8V1BT",
  "key10": "kuf8S5A7EAHvjPfnxUx9c8GQ4L2pPpuMeiXnzxsrz1Cz1i5NvJ8x2scZ4My4Bb8pFViyCKZpQSy9eaX43jZiSWG",
  "key11": "2TeSKtPutya4WueKMEW69X5wqMy94VK4oQNNTgmhE7nQDXC7iKJAFke23YPWwYEtGnUAAuqX7zpGaMj8S6m3rQLt",
  "key12": "4SuwGFjWansJnNQrb4Db4UchK2ZEry9TfTXn886NcMqBbLgF8LoxJMdKAgz31jGmjYM1L9jdkFvVNBjWR8q87RdJ",
  "key13": "36HNbAABCfda96oQihcRxiPvbu5U7xsNv63NiLPK1AxRdgzEf68zH8pYRpr9z7meiPhbvpcyWkytMhTxhX1GRcHr",
  "key14": "2LJRCM8s2ByaWHBVL4PoV3VBctukYMcvgY2sDr4G3bij3u19hL8aEiCyP6AJ995maQZ2niskXYAMfUnHfND1hDe7",
  "key15": "46WJH4waKgLRcf2AzPB95Ms3Y2BPFzQrL1mRdoSES4a5PebrHAbQd9nNsm187raj1U4vQSp7hTEmDYui24YuwkGJ",
  "key16": "5L6QSXvKGaSJUMvKPYBigzjeFaRGAUK67vGTTJzSiKGX5zrGCMuuMZb6WuRAidapAxexrvAro5EFPmPHi921usVa",
  "key17": "2Dbo4h27cDsP881KTtbJtXPAHMGL8wWG6R3spFSgsDWaviX8WJ8ykHtj6roJsa77dcwyHa8iWaGAXft3UCKYToZf",
  "key18": "54PHeHUiRhfriUmivXPTYZPDgf1ceYgZgoegAePgSaY3xB5p4ShkqhpH2LK45xCJNfiL2pxCgWjS5mWspDMEx32X",
  "key19": "3SPSbdkdszsfDJxR8pGyYXWwXuRKAK8ekFoQP3uuDUuDsGs1mLwkeSK9YwGZtqiXyFycSaUb3RWjd1sZhbMDVoyT",
  "key20": "8HpjSBQH52kaeN1SqCeU4tuu2KAuDUKGJQW53gRpz84QHP6F4mhgmjK4r6qZTmbQwYD86vX2vdEu3Z3WuencCrC",
  "key21": "3EdnGbJbGSfYnNbBJaNwHhgW4uChq6oNjtromE5Ao7kEmBXSwFFpePa7TUgR3dPb3Keuu9y6WbiY2tU6gVqMBzmm",
  "key22": "4JQ64e8R27Gsr1QkFr66JFPoQQG8WJYCzwA2g14gaXqyNVVssbFmBUqZbEihV3VhWBVQip9aMza5LvMDjqcRyCiJ",
  "key23": "2Q4zrfXeRBr4sPMTxw3grzfyVLm6VbezMfxrQEA5HUTVcBB3T4pYeVt3n4zEk7PMGjqWgettniq7JXZn4qTU36iP",
  "key24": "37ByuqJwxeE2UXuFUErAZfZmMPdwJq3NcrqvZ2XuNe2qCPTVCHWRw5pHEdGCZyc51Qh7ExTZFi3vsw2pBpnUWS4s",
  "key25": "2YgjxhubMMSche9BBpq1huAf76bEWUys3rrEXynEFVc79oLyW7fD1MVpBariEFihUhh3mo35HLY7p6hTrmJkRoLv",
  "key26": "2TWa5Tw2MnxcxdY1pSqxBiWJ9oW3eGWJRz7RTDeCAY8ibeDygYW1fhbRRGTqNS9HdAudDvz3Nq57uA1EKXdgQT45",
  "key27": "Ba5Go4WqbDsFCeD4wpCPGraMxZutMkvVRrhbuUBVnywKoPgEcn3TtXtZ5epNHccUPu9nVrUcgkLm9Yi2KdxZBqa",
  "key28": "5NQFgbKoXkB2RCGMkT1vCLd6AtbMfWKkHR92gi4g8sA4Qoj34h3jd9Qm2aN3qNcd6PMGbpRgbZZ3btd22CwGcsVS",
  "key29": "3bCh3bhMsN7hgegSdY7K2Gt3zhZCgJzr3LF2Ai8PVdR9cdbPzrQfgbHSxHgNde9uVY5qxexkid8DoGJVp3BjCDvd",
  "key30": "4cQb5SbtNAecwAVeHJ6T7uzw2s4fEfnZSrrPfEe8kUCnZTkK3BZuj8sQxCWPm4JKR3KjHgw4KiUomAMxv4p1Fx1S",
  "key31": "5PKsSLKxsZQbVtkYLochTH8tjq8TtPjPrZV2KXXVesMsZWdHZAe1UCbz1GYBihSxzyj95x1sd2ssg5BSfMUGvXA7",
  "key32": "2MZXAuQwjejkHKpZ15vMgNs3LwUmgmpT5Y4UFLyDjXaTRVS1cj2pc9DEr4gnRKV5cUo9LDb1F68kQgTsexMfqSZx",
  "key33": "DbpV99aRjNuaNmywEQUTMwUf7VqAHAcu6vJvFcmDPZ1rNdpcTitSmaF5bVG8gHGKf2kCd8Q8zhJE1FE7ipiae1U",
  "key34": "4ovNZoGHzjzbH365Bk4mSgdX3gHBPn88LvaUXnbZPscZ28WVSrosXUF6cm6jfcNRvpfCz4dSVY62mkWiFVaNuhSR",
  "key35": "5fCwobunFoix9xMAXxs4eUJwsavf3nxGZE7BhAMkeZdm6C9iVxihtQMgCLwBcLn35XWDhzTaEtaU1qTPyYxjMrHv"
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
