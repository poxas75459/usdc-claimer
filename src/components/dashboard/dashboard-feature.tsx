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
    "54JbD2Uf7ZmuNjSoyRFczMdsQKPkC1kU6bgg2FtNvtgaYM44h122HFQmg3ADixjLwysEtYJxGMGckuscb2KhUVh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fvPLk2WdzzLyc3UsVri3LyGDiYrtfkrcGXWE3YJZPi7GAZP5N35B5D7nSh5d6sXPcyrCGtXozTF3oAg1eDmZ4KE",
  "key1": "2J32yXwsr7GnUYq5rFycg2HXc2DCpaU3jDx1DfTrTJpepra8V9xfszvjR1FxCf9W3oi5h62WzbJJvzL4fdDCRr6V",
  "key2": "4ZaXE3tZzAehSK2JbMLC8gDUkDt5s9Di7XspkbXeA1SzAvzmr6qHrDhhdhKYXMZYXMrk6bnXmfPo9ig6BwkJTZQX",
  "key3": "jgfb2ZFf8yoD7VPGDXBBGUMsMsyTtMQvKaaYY1rhePL6fLveTZUEnPAU4LCywx7dCC4V2hsQcs6dbAk9KTHtocH",
  "key4": "4iekysePhU8CnMQyPzTaGq8qyLPjHMdKbXV1jkqbquKkJ7c9xHGWrufSWLJFvPjkAhYvZab1en3Q7EppLPGbNn9K",
  "key5": "6QhHWKZB3QJghrix9MQNhRy8wCA4GF5Ft7cAfFzVkUZtdSjqEvVEX8YRGDexxCBQ4KbVBRdtuGAPwvKrehM78Q3",
  "key6": "453L5fzcm5duBj9voZcwaaRNmnqUna7X5kmhzPpgFy3WP7tvEZfXENN3Yhjwj5Fr7nc5WtRjB7U1XUhJttwxFscv",
  "key7": "2KwejZbu1vCDgR8qrq1CDpUj2sEcuivAivJz4z4wxX18mCU7if9vpTquUtZEUCKPCbqmSaZ4Q58Zq87DZULSuPMy",
  "key8": "GY2XRziVvUeRcNSNhLTu7TnxaiNc6YxgAR3rdwXyaMefcF9uhpCkem56rQ1UhkKzMJmSVSSewgi62ChmmVLkFET",
  "key9": "52oUBAsTDJ2L6ip2XnLUFjGsZfWtXfHcA9msaApNGMbgu2JNwSaCC26Lt4M5oEzVpadAW4bWT9LRGdueSKTMYcCn",
  "key10": "2iqV1BYs7hpxyBV2HqwD1hCuTQRdpeCWQpRCSRRbm1ZvGStEaFB9vdRkuYXFkZUnmmQQjit9ks4sHV5D4eNscMWF",
  "key11": "5Kofs9fhrGKEDdtm3RR1UMX4dtHeQV9gS691rYfm5CTbtv33kryD8drLbASNd6pwMCzVbVQwmX6WV2gUAECBwr4c",
  "key12": "4EnznkyteSaKVZUkLcLEjpmKo5ed41kAmhqEFBbNSDDM828A5noo3LWcWxnrKdFtbwVMcBw3txLjnXjUWQpsyQtA",
  "key13": "3tpRR5c6ZNpbb5w7SjxT4oorQEJJd1ioqoJ2sMzvg8eoHm9aSe97vQk9q8o195o7YhjwP85q4NaNUT8v4wEgy31",
  "key14": "5DWPFzVUYqc95dhL6mHt5XWc1vvvy2fNcxycoy24iiquGoPYa86Rh35Zg1v393UQhGjEV745ucQMkTQqsGY4k3E7",
  "key15": "63enmz7ocZZFB6Z2S5PjaQxyBpvdm6XLbnLJhmNH2g2Xh3nT1f3YgNyDvRgMrVrvY2GY16Ho5nojixkqZy3QRCXk",
  "key16": "cpkcLvneZosgeCXJUiqt8vGcVi6ePYC7PpXDPGz3ztGyd7821HeXRBykKxXrujzTmkKuAuJmma6hqL41DymtWGh",
  "key17": "63QMz8aENuDqvpmygZZ3pp3QZzYX7hGZgkUPxd2uwEeUE8q5pXhL4LvBcMFDkBFaKqewNR8WYgKGFX36cF62EYy4",
  "key18": "2xsPXdUhSGiTapQGS7ng72L2e58RhHnWHiX9JCzroqjwCGUPNnbbmybeGHwFxLcRRBdTcviaSBsGhBBRrtSrYvt8",
  "key19": "3SPGfWm5TygrJkJKCmgbBfqgNvw7iA2WwrxVNQxoxzofE6fCyuqwpLj1mxY9exEVRK33cmhecbHktr2vC19MUkHe",
  "key20": "cyhRZeMtcY6ed1SxsLxgrZywoGCXJwKnqZTJiBJPpiVuZc3EYudH8Ufq45B4YzQ63w4PzywE13CAY51ZocigyEB",
  "key21": "5DJEihcRzCUZZZYEYo6rfycHtgTiTAzAHo6J1FJHhoCNxHSHLP6uRu7vBdsvuM9Z9A4PDv7ZNyzKbHTUG3Vv4uAE",
  "key22": "5yXdq8b7GcQEojxzMsVvsnbHpYTwxoVajdJLKGJ8caNvXLQ4QD1s8PjvC4zVTLDToxUhQqAffyhCUN1gsU5ApPPZ",
  "key23": "3WWKo8Y2rCa4ebxxCU4wmrfK2cEyzV5fy1FCf3MShjqSzwHA6kpxzVcGqpAQqNGoLN3xmPhNMSmy964pukstE4GN",
  "key24": "2uHS3QxmdRxYpNVPSuG8Sz28ytp78adtMjrPSdiWZtRoAfvZ94VVhmP3LbjWdLkry3rHucABsHxvv16SKU3oHCo5",
  "key25": "QiouEjZjH2c4FzNFydeEwSbkjL2tM7swJETqPc18yKSsqLx1F9ns9j3VjTbJjf8zK9YDcHFWd2nvJ4QSDgFXXNb",
  "key26": "5pstmBjrLxnDQ7ryuCpc2M2wW19nE9JnATJwN76yBEGzpyHn7aHCmkp32C4sHG8EFh2xJ5JBN7EKPwEDL4qCdZPa",
  "key27": "4NLH9ex5w9D3hucYRvq65DYPvkutyB2Zw99PKpEdsJU7BMtMvwu1pqimt885FurQ4N5ZhbcXvyFXqjNF5oKoVQtg",
  "key28": "3rrYKZ2cHsUfXBYwwV466upXT7aShxCU2TJhxY1SuSU6Xo3AMEVsrhgAUpzzbLoq2WSsHs7HsmLiJa9wMPTQY9pg",
  "key29": "5t95TsefYez9cFcwLAmrWZdMcZ8rGjKSJWHWUdz17XKupux2h5HiAF3XkRePghKuYjSJixoRhcCEJDKbM84kx9kr",
  "key30": "64YSJf2e3D5ksk65EeNpH2qN5r7t2BjhTzfxDG8fJANAYnkEkn272eCQ3THGjMHMjbaRrfTR51Z2iggAYw5zwqhT",
  "key31": "2TUHL8gUF5abuZS515gJUVpzuZbqhUX3gb1RrK8Zmd7J2ALph1nZWV8vArQxvAamrzfvGdzZ8QeAmowDMPefGmQ4",
  "key32": "3QCJNRBv2s88UUnood1wbxsL8zUVd4tLde4b6K95AvuBaFj4Rgdm2nn638XB4gsHDXPMWMzPHzbT2iAS5EiRr177",
  "key33": "47QmBKT8pgyGhGJQKww5iBgjfbiQyJ8E2foNnkMXb3B4sVMeNHfevKkdERLebuQSVRoZmWC8mb7ptLQ3WPcHLTBQ",
  "key34": "4eXuRWcN8RCNpJQFhNJHxmgYu1cNVyXgW413zmHZ8dtoy9SCfEKmzZMFvKYDZjEmDJLJXxYJSFi12i5FshzQBbTf",
  "key35": "2hPhBVh81qYakQu2eHd5x38Qq1upDdNsXA26HvRghFe4YkxJGmdJHMtBJW7TJcRQ72GrbzoSjziEMz7uMmZDg8fm",
  "key36": "2xWkMTj4DhHgJ9iyTCBcff96LxsNKJjZUQPCc7s37e2bUCd6PmS4wSUoYb9Tj74hs4Um1n9XHC2kW3KqBwaGWFBD",
  "key37": "4zDimg8wmBv1uyk8DDU5MiWJDFXpsbqaY6qcw7Qrpz6D5Sk9uh8QNwwxZUx7uYyPRtJMW2iwNNKeQsFBQqKUCUtT",
  "key38": "aefzUZ1ndf7pfi3BhpFebdugVC2fYr46UqHjA3hDS9ujF7FiE5ZFzCRRcrR9uJ5KTqHvDTSXDqvpdjG8u6SqWb7",
  "key39": "4CGhmcbn1aGpKcWH2iexjdfHiH4A9jdU1i4mSELWnMsJHE4MHQrXuga5u679L936Ygu8Lfz2iomNdh1fkbxyfyV9",
  "key40": "5p6XwR97fdRhoxm1WwRxf4YnAAE6jRuw9S7i5k51v6k9983AhAq9JT8cB1qdTDeDoZAEERv3td2go3mbXLHc6N8J",
  "key41": "5tDiPUTrRvkbJtvWJTVFfmtQcFRVdueCheeiPz4DJhD8823dUSfkQgrq8zjHoAJ3RdfvQP96jHx36v9NmsvicHsj",
  "key42": "3mWzimnLaxUwN1z2kWLkRa4XkxZg9MKq3ezo2njuXnEaHVXUg9kyR5bdfYkCFPq7MafzpHPNZhrEG34iQLUGobLH",
  "key43": "2uNR7KU7wBKto4HJFJZhX2NiC6Upm8SjWUbRyRtXipxdiMzkQVw7Pd4e3fT2X2Sn4bcvfnsWZcwj2VTXmKM4GhKM",
  "key44": "31DofmPZQABSPRDuDSeVqgfcGdePTvnaeXKBr9ZtEqnB8E5e64n1J6N24cWtbvPbE2yw7R1i12Bbg8GZ7K3rBgCn",
  "key45": "vpGRK3eaVg6VqYhWSW59uPvBe2VDNveHFNAjjKdQYeK6pB7Lkr73UcbtSG1uuvYa3xGPmNG92ufKykQvpQ3e3bi"
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
