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
    "2UjQqbjVnLJ7EdpLfiPqpcb5o3LtCYDrawBjYVjjJcpvdS3ETKSgi9dfeHwhHF6WCrM7KaoLNFqwzEYYBsAgK1zZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pJEkjuoTKRnmdKT6Kz3ZB3HGWzzVuGiuGY17z29zwh5687sFHDret8kLuzyfR7EgVcNcdRxGnbZGfGNE1e2vABF",
  "key1": "4g4bhCMtSM6sA35BFXrAY7SNKUMuWhLNkSmiuES9ZE2rmci5bWhqCvKKn2s4EMK4RXAabAUyskhzKVwqNR3XUfen",
  "key2": "32TVJoXA4xj6trQTMXWj2dP9fyhtmUgRGHnvkVF5M4mP2SJuBoTA5CShNMUa9zHMuaUuPt6VgtipeFANRi6ucnxR",
  "key3": "rCPnJ47L6gNkS95ftyUfp9Z6mrkNsZTLeJGAXPHDP6V3rJaTy1dKE2LALGVDDPUH5ByV4S8RcTDfeujjcQrJJei",
  "key4": "39FfvEPa7359yUHT6JsB8xHxfEGVfebq9pQLAWMiiUHcmba5oCWXLgq4GHbN1Dn69rmFg4MTFkrk9ThnnRWfBHDi",
  "key5": "5Y61NjhCYWtvjKYMmfa5pxwoFEjEGfaajiLkZn7dsgUVwzaji5vyFrqxLFMVsA2yc1PCkn4AQPKc34AH21Rxc4Sy",
  "key6": "4B6NhzAZYVW9GAz8JLXK6LTzhiNx9nc2h34qDu9AGjpFeYjFX7i3giMU9RvpHzpXeRxuYudg3AbgtkGkofd5P6mb",
  "key7": "5twiqkmHuMu4cVCbTEuKY2aKCd1sWue57Sn8vZTcxdDESFar9zjzz2FzB5YLVskbjdxYGUGto7dh1TrMvLHoSN2N",
  "key8": "3MgCj52d7uMT3yUhFrQqH9M3LSQHqwXQFMVULzmQsYs5bg7iEyukAnpSM1fyEP8Rke91FqQyPQcpEh7yBHzdjdiZ",
  "key9": "VhEvcxEHkLF2otvkYNPhSvAJRvUFL3NLeR7j1CRM32y8kWFs1SF7TzmBYbpDnhZywYivcCVuknYTtrwPEG47M35",
  "key10": "1EyJCvVphWNmhJ5fUaKgH5zcAoxgMZgTtdjKsJNcfKv39z8sh2ALmsM8qSjXG97S9Sn3raecUEcRfw8A8M6wmSC",
  "key11": "5UifFjEkgrX13FSPKPvMxWT8vaNN9nb1Z45LnvnBUWBViDF3pAdQVKBjUwB4bwe8fUg3mKf1Bs1H82sNogvy6LoG",
  "key12": "4YJRCt6o1LjGoiEfbeK8RWVbT42Egy6miii9RnZQjR7D1Kfp5Uxjr9RVfSXJfWMJoNFs1dpkg5MHYkxT3zx1rQBu",
  "key13": "66Q6XFVLH8aM7Hz8GL4HMw2ha9aEG6YGJQk2bnrAkpjoGni8uVJUA3HQPVTqoja8Fp5pyvdT6QJQPXXXTzGXuYyF",
  "key14": "4Y48EZ9LDPbB311URSRTd3VCNKLGXLMvYq7YNUJHAT3P4TxVLGK3bHj7oq4FTp26MCVD7x3rDf5cjAwfGPJvBPVT",
  "key15": "36s58StGzxYgZ721E1sXv4YusWV2t18QhiyfmfYFRfBDTEJedoVWbbXsqQrEfgDqV1bN5KNiSNsx5shc2sqSPxeF",
  "key16": "3hkBY2mgUCZKZBgNXuugreGF1K7vqBeHti2Pe2BVfz3sybSvEEi5utH5HCjF5m7SZTAsB75zwBjthVTeAA2pbscr",
  "key17": "2TvcuRsjXH8oWuqgTEz5EbL8RKcXwZotN6saqtXtGRXboAawJtFiPj8jME6MpBP5zSBympKQ7xB6Sv2hsGP6fp9Z",
  "key18": "25hHbqN51QBWg5zrbq7o4E3RtCJimpRJKQoHXNxqGiwTSCwtJpqHyKrJjLzN2XQQuSMBbwfknAhJ46ipFoUQg59a",
  "key19": "4txyFtWw6WjcRPucHKW7veqvY3W5KDC1sWcQRMvd4948guEdaquwZPgS8FL19CfxxeJouwiFZRPi6CJWZYqUJi2u",
  "key20": "4EeyQEHhUHkNLvrJaX1k7rQCCuZLC4xnDY4y845o4DbbiW89objYvv5APVJcFbmGzh8z2wRd4yqFMfqni8txyj7T",
  "key21": "Q17rQUU56wRB9T16AHifxXPkiEFeeXAWt2UQUzXJQav9wQvtUQooVf223yGSBxvtgq2bWXe4w2C273xHKfQ8TGg",
  "key22": "2x9pF6Wmt72LNUvj7iMTFPrQs6c2sL5mbSuxDix6UUgxPiG2Ue56Yxu8gLW4ykqJY5pc1VitBc2MUeKktmzLhavk",
  "key23": "5SzFBqpYbhPiSqSeE2qzBjppMwoiBpUWWAUaE3b5wqRNyo4KMLUuQCmSDfdmFeu1MCZewbbgUKFy57hs1Xh7eDMw",
  "key24": "5JXikBkRpNtejDmyiL83U2o2epk1nCK4TqB8kmAQiiKXdBexuGZvvEWni6iCsQeuCxQQjCes8FVeDqL8cydWhvG1",
  "key25": "4uHkdGPTgRXXSiJTujtANws3hsGergN1GR7GoEx5fCahU7Ck113WhgbJyfowEV2mQ9CfwY7VaUqJQPemVJowYaq9",
  "key26": "465U32ChZnkSFK8cwQHoQ9iLa1byUpRKU91qi7yFKEqvBNLtmfdkjdzFDeSKdtsvkFnTHiDUMWXBu9JS4kf8VhE9",
  "key27": "22XRhnACk7qCqWD3CW1fRjoF1WcakrvHgRhTWpe9V1wb7gF5H48jyz5VMDWnyYeywTcRhh6KMbpFLqfZ9ujyJZbU",
  "key28": "tPM5Ciz7enjHK5SUuKb3iELF4edPs8UtWpW17J75YtKsbh4pz68FCfbt7X1GZKWr9ueEPG1UKLaj8UAFWZ5HUep",
  "key29": "4riHNwaPuo7Z8WabwvcYFbVAf9Bg4T6QjKbqHEgfvkc7sMkfh96bTqozMYrKgr3CCPT4FtVQj6fQTaNi6LswNRwr",
  "key30": "TE5JXTSNEvPGt7joajKvEB1uxc77Hh4uZY7Gxxzh3pk3LjxBMyXyvpMKDjLZpfytmVXfNFeeg7KmgD83tZwrimU",
  "key31": "3Tjnexie1E18T2Hy5Y2kDEcqcuTgsjGUFjPFuHYEzBPVGPKijWTD4bqHU1NMxeWjb53AJCiXBJZPXVcCxj39LM4d",
  "key32": "283LVFwnYuwocj4FZWKvBTjwT5zSr9m2Mw7T1KWvPvCU9nCox7t6Pw3L7EsG9HtmyYbap6iDuyAwcY4x5KchwE28",
  "key33": "2fuZaroWtJ7YzUmvX95k5Zf7vSD1fJtyLbf4DiSA49uKWiowZKcskowrxFUrhAmmsi3RVyfLoBHem2bCS5UEHAD9",
  "key34": "vTJDZYgXxXJjHZ3V3N2mkWYA9EUxgMnDtiHC5uY4spJ9PN6oAN99YGKni9xzp7gu5RXSySTfX5uFEKABoz3cDiL",
  "key35": "5yZgwZfDRYRgnLN2d81PFUe97m3f8LC2SutewwXcTcfJfALjpV2zhpnwH3FPQnjCvbPY1d6kZApVyfRZakQcJusA",
  "key36": "SREnB9NVmrSvwHVrZi2cXRtW8yyMpqoWRAXpzvtFJEvWBn6oy4hMNwP3QqbqFgL1xeoAVQd7ZjAFpDtxdb1CqwD",
  "key37": "3Hhx4xZM3yAUkrRLG88iiS8RPaS5ZfUTmsWwE4doGg973P12t98EDKHerhSMxSzVdReqzAj96Yvkox66VtJMaHd9",
  "key38": "5p6Wnd2Zua8wQF57tTDLa9PWuRWo4K4MJx3SV2UP1TSbpY19d5zBNszJJ9Z8rS4QE1bf6wxg864335SVQx4TCVWM",
  "key39": "2Bk3fRjh2EwjkbaCRAyNq8wWsswDLRS5XWHiSTnTyVaAHCoADVDiQwGFj85dMxjdXfpcnQdPecuPBGjVmTUJYB77",
  "key40": "4SY5K15qch1nYV35as5w9EXFNjyXbPx3wTh68PfNtosiYmAsw7vfDQo29gAWwmDqB7uGxw46KHQxzo1WVTJyq1aU",
  "key41": "2ob2ZiQHZrBWYidPTMXt7FQcJk6rv8eUAAhxSMmojsErn6gxg9JdRh1Xyjph7VYK51YfqLMUa3BNp7nnUnKjnKjA"
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
