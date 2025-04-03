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
    "mhg9UCP7tTDyetV9U8XY6BGmDfTpaLUZZSSUGkQKec27HC3qHD7idRLkkpW28hqxsDcGcomaDM28Da2uJxJeSUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TrUrGt7F6UqzECtE1PM1YzNfujGwpnL56ZnVtaGS73wGgQjoVGVXGXBgvE4KdXwPwYhR1vMwWpFAx9dRdKtoGNY",
  "key1": "oJsQS6jFXH52UCnEZkQfPDdvfEfihQeiJMYPuQqUT6K5DQHDuuA4A1GHorTuWrzENDHwaw3wqL5yCj3jS5CqTYm",
  "key2": "7RQDYMovWMux6fJTzrCaztML6WZHFduvcUP6swq1U1u1D4PJ7NJs3N3t8pFCAQyGdgYq93eF4C9vQJdQv8G62ts",
  "key3": "3VeLPaXQZ6qtLo4m4fR6YBp47HnrWuqsqiUMx5QN9WyY7cRZuYmQjGj4GTpHL9PtMfKajHmPCefdfV9EbdekDjQ1",
  "key4": "4WM4FB4gWtf6HiMQoqZYXvQcEuGGbCn2QkHXxTtSLqd6asMuA2D72Sgsnkr7itV9UbxChNeM9VgVRvRS3nVaZHDF",
  "key5": "3vHYT4zDVeFPMvdnF84bx7ZE9f64PvEaVbQ4YzRwRDBsqdEymXJFkym6GXYea5b5nFginyx3BLT5Lx3Nh8kwN5Wg",
  "key6": "4qZtXFTBBn57FBU7fpPnc1XdSPHT51fzxLz3q8YwFkfY6g41APiHRHcb4DCofbY2i2TpUGvbHdU8BSCu5ejQTR2x",
  "key7": "2GCt7PqYSqem32XdrQ6dPm7pTmEGak48t6uiWTwAF767XBQPzCvUCqTYaPtMznYdqMtSazxRj5YREi5a7L75aUEt",
  "key8": "3BzG9MWKKPxdvHzxTSpqGp68QEvi4WL77XZG94Re7sTUpbXKshzUoUByTfvpoAXKniPCy7VA9oUEzrE9wAUrhkEP",
  "key9": "65pUnFJxGcfiK8wboQ5dTpVJUucegWme7xNXGKUFN17LiapRcAWEMW5X9Ppsie1eCgKLdcoBVgvGqEi7nKmKPGzE",
  "key10": "2tiA8Vpp7xcNem3a71jfne3s2L83qF8rjoRN7zciqkQfDrmZMBpfMHQakSv8ANZohe9nvqyiWtfxjwfbGQsScub3",
  "key11": "pqm5f42Gj7juZhPqAqSxAQZqbcmyDiPaFu95j2SPxqAEwbhCuoeQcP8vbyJCrJb9yaxUtkXHWssLmzuWBKdsXyz",
  "key12": "4SMjgr7xX85YmkV1FTVCqQybM1J14hBmHphvF3yjGtKaKDGbKPNPTSohVbLTrEBBtgU9HP26GmnwnaFUePiz2RmS",
  "key13": "34RgmLy281A3jMSCY55i9eAf9hpPHw6sBqBoc7W1yh5GYMsW51S7H9NgZpmEuCiWYd3R3EPSX7s7tJXZ3NqfLCMZ",
  "key14": "3RGJ7NZKbwFNiWrWuQ1oKsHvpQeB1CJr5Maxyc7XC39GN3JCYgDpjpDe6c6wz7RtDVYN9A7AXttA1nwygnNPjq8e",
  "key15": "a4CoyfpAAAWLGKMh6z2yeV8PaSS1QYbVcZJPRSzfKLkHLa8YhVS1jTBTBh1TJyh66nAgpPv1mJbMfMtSwfAdoZp",
  "key16": "4iTiG2Khfbfg5k6aLtownz5P8guHvJkZGYtDtyrU3aCxJiGLStvyMsA4eDFQ88knsQ65dDHTCfz77HTxpdco9jne",
  "key17": "51fnXjFByZTezSXJ4n9jYson5rY2k1TjPRJR218yYgfjAB7J9ZiuMkbT9wooQvyL3BXD5GvubUmPGyZEamxtqy5J",
  "key18": "4WxPRc7tBXX4QmdSydRqXAxVe3cmt8zMfB9r4Ni1hXGd5zqkot65oNYMzFGpDgHCHuSiJFtzT93SqHTmWs3DeFeC",
  "key19": "49E58SokGuUTbbMeNYfag7KDewGudy7CKecwHhLKeN42HbBpZk7ZfzrGsrg3ooZ4hrB1hZ5UN1CmtnFKT4dtmNnJ",
  "key20": "3A7kKBEYv75dmxbDKFaStiMaNcQwhyP61nz4fTA8QHKpRKCGFitcatirqRJZcxYv3EKBMsPPWJiZDzNaoHnH3avb",
  "key21": "3hQd6HbZvPULbkhppx42wd64usdSajqgp9MSQvcXc9dKVD62Eypbj19WuarwHQFVCn5Vzz2TP69DBCA1fmtVZaNw",
  "key22": "5pzuGHE9b8S1T7gQrd6Ew8WSmpdehZ1fSCuX7Nwh3tno1i9u1QQpxdfQKH9rikqz8avroz9mwsKrNCmETg99ZN85",
  "key23": "2p2nQErUPj1Skkp6qkbzoFSdXGVb9wntSd9P3EuYtPpu19xQc3wHSmayJLANxNeui1SaBJrcnfUG1EGTqUCt6iim",
  "key24": "4bsajtE4Z2aJhNHrxaXo9bYgW9a4eHrHmdHUTQXqoG4xJHZ4vdki4AzF1AHmYbobMTQegQiKop45wv17C5n3hgNS",
  "key25": "4vQkpPZQp4MgjDkEhPVmxmDsXfjou1UGVFhe13j64giXR43uLHSiVuKiHyK6y3p7zchY56LoWgAA5Cn1WWZfHaNH",
  "key26": "5Ho2kqC42tDTxYw6V1PLzTR7qYZubtUuiCybqVua3WTH9ZZroRPcrLcQWxL9kCRPmQPPLXo5uoGoKpDokgTxHGkS",
  "key27": "2cb5zwe6kvTNxsL94H99WiyT1pUaEdgAMBhbcdvnx4wavUy8aMMkZpudiwvboXFczTZMA4UPTxTZFGs53DC5v1Ws",
  "key28": "iCVF9ZqP1yzKMPF9idgsNvo4Nos4PbDHQUnsW3f6kRzWvFH1XddM2xGb9CSNu8qeBNMwuWrE4ht1W9W3TorKv3L",
  "key29": "2NTmgjGDqNBZNfi1N3QuUvNGRz2CYLGEjQwGKY6ZGv96Qmz8Uc4PVsWRYEUDB9pfmHuom4ApKErTkc93T1QxRY5d",
  "key30": "KG8jY7siXd8EdoJwqtKK4torhw4jU8cseW8zbaSWPF8s4z2byEemEQLEUfqbBaYM6qqj5qY6UMwwdM1NDteNQss",
  "key31": "4dC5VUz2Vvm5V1nCBhDNkQ2HUfDSvHTDykmtKm2L5XGo6g8qBH75Gt5JKjAcsieSXt5JTzm7uEr5QccDyVYVuAay",
  "key32": "64S1Y4dGs9HRLDrAaNyZmKZnwh9nHuXxreATvTnq51jnF4p2BtQze1oMVc5XpaVCw4Wd9DFCgjvw8uGwqZhh9J3P",
  "key33": "4mxEXyjwxt9LBstJJj6K6Xbj23CzPB3LZcKYtCvuK4DFibKGq9P1zkvRpvN4ZmaaeyBGMc4nQ4nK3yghd4kS2rgx",
  "key34": "62L8uQBo1xk1c95pmLkPaVdYWhhGJvkhwKr1qyTF2tnG4MBeZPCMJ1st8aTGEsghTz24y1ZoncSXk4dAVx3hAHHM",
  "key35": "2YzyWv1ccmVCPiaP3Wo9BZPi58FwqBQym6XjULUZfWBuX1c1nzmzwWr3D7bbLf2EfscePo7N6jWoAvTLHgRnpeuU"
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
