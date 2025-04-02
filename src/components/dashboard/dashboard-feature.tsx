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
    "4Nia9v4hXYA4yS4wDnAX9kWtiDdFhTPJSqEp4z2yQgXkVFASoTp76QTbKdfwoVb22XNoj7mwdPLPo4q4p2bxchhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3awkTcU3cud5AvF8zT7BnytrZvF28t1EQ5T6j9y2TvKcTSBbHNtpMpE1jw2SdjFuXLhzddjEEkgrEFehNhjP8rsA",
  "key1": "3nAxoJkNB4hLQxcng9k2ZQfzGYabvqb3UtNwJ7JK9sKNSZjynZ438q1pDFNCjgQQwrW72KdLC2y7wST9JXtWJ4Gs",
  "key2": "4w15Ak5ArDYpvgqMwzt9hTRizLYhhR9LChXVRpVgNihdPDriD3FQcpkHraweMfQFyxjV7kFPFFTgTZruEUuKh6br",
  "key3": "2hdXdjjzvQC6scMnHXEddTNiss8WgTQYbMCkNjuPuSrfUuuhPchXKbXGNmNZdeLEmuvf6eYV4H88dfnSFgsybkJ8",
  "key4": "3oaUEySPojnVx1tfSAma4CUga9MSexzD4ZuYmMvTRfcMNywtit5xmoSnUDZiByEzgtCir6MjopgRFPNNCp9KHmRT",
  "key5": "pHXfjNDnSWHfoKTzHekZCPVZwgmnyfGvpaMzaz2NqKyNuXRmnhHTBHRxDXL2KQTBJoDcCubDuuDpjfZGiQEj8yd",
  "key6": "4cNRcGzp8dUFk4yjBbbWnSnXa1ZGPdbLdhR2W8KWZaPmJ9h2bdQsZ6WRJ54NaqveUH8hTTiCYjMC1pkmETRkMBiD",
  "key7": "EbNuSNXomCAbygAZcizqKdWjhJDfB1kwEJCcrhCuthgZecnjkGzNHVEo5BcEoj8RZyxQHaZGnkUC7EEdH6hhGxK",
  "key8": "2vfVajENv8RdA1KGmyRB3txNAgpH98Yr5p4H2pNsjeSVKApxuarKbWjsXcBArTLjfR9vwFoveAMyG6hXJnyJeDXZ",
  "key9": "2CwK5xMRdakLs8svqw3XA6CpLtTimZaoALfPAJBfCa3HFMKjJURStZggrtnzv6iqYjega55XtHX1YgUcPvVs6xjg",
  "key10": "ugTURu2gm4pcW85a57NZkCy7ZAa3GHGCTkB5djUeeadkwHB7QcuKqvieKMrUfE6YQoFdtk6g8yoBrAs2Ey8tevd",
  "key11": "2vNKLwqu3qHxYVsWaGHAeXGu1eaWaBSpRAwWasHSJYhG3ZRDeCgQCm6CbcSaDXaLHCqQAJmLVdyqZLuEgMrwZzh3",
  "key12": "27mjWaajEMT5HUFi8ajm5EHZdCPjhjLaNSRJWgjE6AGL3TFXtyxZ9bmRQQ5bicaigUqDi24XJWCRBdr9CMv6XBWT",
  "key13": "76B4rmgfy6zeGRHVshQyEJcnLiaFsG1NVPs2iZdqPr4AgLAapdMrpJtnZAvYdxqu9rGP8ykGsdKkMUhvDNq5fmJ",
  "key14": "63tmz3ZKpdV84ddCPrdiSTxv9qpnWhpQ7T6yAFWRihWzQ1cDf5jFp7D24rHL85sTrRw6z6bjPMhMtjUnqDRqPGCF",
  "key15": "61oqF2NwDfA8MWSdrcJZcDgmpjrqHXLevM23SCCpwqRmcswqTVKSyZbx8Wr4tcYLesPZTLhvi3fpKFVXkLYEd5CL",
  "key16": "4CxkSKg9u1cFLZewurMioDyYMrc8kkd6mrveojyUsBCrL8nrX8pJYsEs3EFgM4JTLwkgMSdpWbKKN2NdGESEww8M",
  "key17": "29afjfh5mkh9bRFsHuqhRsggGUatDoer1wZweU95PW2tZPxFtsRse3nrtKVZVj9DW8XgzK1LCKjVrQFRcMaX3w8d",
  "key18": "5zEuJzDosY9MfBxsauVhVcHTXk1vAMAxdXr5Rh94EYboD1234pBFUcsNJAAFTQvhJQAth6QFogbP8VnSxdosXbwR",
  "key19": "5QLF8343hY8QLqAUZmBA1ccRA7HbtQryPaVecTG6vZAknjWRWfioJGH8x3Ddo8exqjmf9bqzDsYZZTHRH3KGQFSo",
  "key20": "2E1KNn9cwi3XY4snf4eucUcfZPcznpY6z7fV6PzNXZNC6WHuNzRoex3YTs3Zqsv1F6gXp4YjkwiNQaVv3r5yPpGr",
  "key21": "yFtZDsDSdGmzq6W2sqfLRU4jqwWg56v1Hx2Fo7jk5ThnYuDDNrVSVCrnw9XU9MoAMKycxBrXga2X4E4BdtuKzhV",
  "key22": "5DEe3WuD8KaD4DaaHSzxNYUJUSJyAjUqLAU8C8cj57DSyETAiqx3SZM9kMjfySGREdLRbG5uszfsL8YaFheHqNEv",
  "key23": "66REEzXN9ZLAPaGLGHxoZzbaxyY5cwqYiDyygsKwnzaXFg9wpJxn4KVAj9wwDuS8ictfYtVgLRUYTzxDoURQjeYe",
  "key24": "4ueo4nj5PgYA9pTNpwyiJUHexk2WTVzUmtss9aRVncAHAxUJc1eDs2vCQmXFbstCE39VDcmxhiMPBqdy5EfMEWeN",
  "key25": "2tA9cRjKiCRiSmX5RQGxJr13wZuBgAXUTEnUgmh4bUh8J1A8YKZ8P4mmdVuDM3W5ey6d3yruzewzCCVNb3awmb7Z"
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
