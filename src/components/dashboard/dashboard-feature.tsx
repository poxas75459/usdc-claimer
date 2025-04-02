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
    "3gSjbhAF7VgPPZkDpKSRu16dkGZRgJ4W5pgBjxvpbkYbxAAqpuwN6JfDoNhcjvy1icoS2S13gmS4gi4WqdGEEwN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X3hdwSwwZXoEeyijm5B7bMgkRXLxXH7JPZRnyacszFiJPqUAhYStuX1LoEcNyaMrxH1t6E7m5Y9cj6GV123QD1j",
  "key1": "3g8QNbv1m7iooR1s1PdPT1JPThr7BRSQvSahNVrHAnQbSHjCtw7HNaCSvAvArEGoRNEXig6PaRuFZ4UJ8b4b8Yka",
  "key2": "4pvxeDidUMzfj1n97gpv9KbMnAXGAgqsbTnmcJ4tUvdEoXsgd8DhDvmMBSvvYUhX3ZYGVJ9k96nLin7s3HdUXxzG",
  "key3": "RKBpLeeGJ8iDNo2mq3auR377aWDNeNziKG2x4bwxtqWBUPt18ZrWZuH4f9VxS1gfS6rM5kJHvuJ3crEbSrDTESR",
  "key4": "XKnYTe2TxfZd6CVTH6h4SBLnLiDL9QBdraKd7PrZgzTBWjv6hEpbKcqEVaFUPUMpPbbF9sFEJtbLCr3urJU8udc",
  "key5": "4WWJwYmeFchpsLcjsqyJM5Vs7zzJ3KUX556FDZhfkZSgT3QSUWPiXRvSWxUk9ddApUPbbrXYP8KmgSfbZ3ZPfWfL",
  "key6": "5gTGDppEuAVUoBsvsvmJBpD65kYAoWxVVKqtw6gcggraTEhYqGQskXpsEHtqDPXf8TXwWKkLovh9JuWedMCJvBYg",
  "key7": "3QXGJmf8sNzDFJKViyJNJHDKjKVKpSVGD3h2DspA7uab7v7VzVeA8UZFYyECdrRy7hJzv3Ay1iUntZfgZexSvFJh",
  "key8": "54WkTmZ3wU9XSVfcLW55i7b5JzsjqGRybP25PmqytSYZv6rir4nVA8MSawrKPW7aLWP1qwQSt9Andr9hWVwKcFVb",
  "key9": "2W2aAmysHtiY1mxf2BqTAXL3PqnxQUoCczvw77FRreXfXboD6taRKCQDRFbXjPmVLhpnHKCNbxiF4a5vZeg36kN3",
  "key10": "4mAiLWRxE7PQEzFJhFnA7bixsZz9Yofk1W4pB5xu7R9DzBfCzomQLE3aLcvyWyfuETtcTUDkfYPEeQXQzqGPzLsn",
  "key11": "3sa66q3HoPC3RkvjssdwhZN7bzKtfJwSc4VVrVH7GgtHGsPVs1FzHFmJmrccXZFhjLbt1ELkQPxiWfRmwXJCGTfH",
  "key12": "2onpHMgVvv9HTfEFwzuGoikegx518JkZGomXPa9Toq2cVpoiuHjz2PNknDY4sro8ztDp77hYzycszGJib3Kdk57Z",
  "key13": "52LGXMgiWA7pADRkhm5npuiHxdDfSCWULyQZ5Hp9Zsmk7MaSMQR4ob1PbSQzwzG5SqQSYVshZTJPWhKA5BPF7aRV",
  "key14": "2x4daeUcAJ38x21dnZFjGySvkyEtZdBGMYheiVesXwXRKF2whRXWBamkjJBYbB9bVmeDPL3gnWmmHJsscVJFBVuj",
  "key15": "5FTubQSy6UNP6HgchzQ3aST81LRxg8uXiwSgQtZRpxCgQqWoanCMwFbsw6gw6iYLgmLmp88AjpJhHQWSBtUmjxbo",
  "key16": "3AvFjkQwdux4j6aFc13uV8qsZTpdik2ARg5d6G1hxR4tvivTak85wAzxrcJR1b3nDaka3QLYRidAjihehyst2peK",
  "key17": "5W9CHQUdTihcJT5Aykw64uobe8HuxVAwqaubt3wa3QQrcASpuQcX8R6khNCt7RVsasz4ono9osUnaRbyto6v5JDL",
  "key18": "226Uf5DKUWMAdPMxfMg3RJVb7bTPpZ4o4qxr1VFL2j69C1iumT3hnjgZ4hFULfvzckMkT8ehXkv9qpfekyuu3mue",
  "key19": "3f4MExux8CwPa3KxtxYjgy4UNnUrwk4FSX7mT9NKWKjPhKoH29jBUJmRMzQ7kXbT5mVAKxdoc9VLRSJeTrgL5HBY",
  "key20": "2Udb1n55LvFgzzUie18rry8KaVSLmKkrSMbZAsDkGhgUwHjhRvrZgxehuvQXMRNzHBZiefhA1cumy3WosL8zfyfx",
  "key21": "5mFZwkn9y7AnnDTty296E7zJoWTf11Anvnkx6yiKbRhsxmE1HD31DjVUUb5pvEwzLnrWVUD4jyYv5tmNm55BV6LX",
  "key22": "4tAa5Mhwfx21bEZgWLRK9rxKpFM615cb9i8dhAxibWC32zqmxjLsGByp6veCSfPAb9LKRqm1QDXbmf2hfk38SMgo",
  "key23": "3iY5G1T6U3ErYQ6uHQFqXPoqZJjNRqU3GJR8vxKgTWrFjAkyc9dsd1s9diiPqJYx8eJ1s5wUa85Tof4DVYGnTkuW",
  "key24": "3TH3eL8egB6NrHfA7XFkX8oDHhzdRqvnhSCohcL9WErqeqLdGKJZQbxBdzGJg2aU1ddr2hMJrmNZqnyy55Dvtqi6",
  "key25": "VDFcPynuivQ53FNuV6iBPwVQH8Qa4QyN1FbDHMKpxSGqQeaSmNKhAbcLuP9u4mbJyP4MTaZ5xqnXZsiF2c8j9yN",
  "key26": "4KY2sDKgp1DDPQvyn8pUqLaCq3RgbbbndJXxofMKhwQ9xh44N7Dfn224iYtcyn88mic59qVvymYWDJcTxgYzZRA1",
  "key27": "55adSJdhJpqWHGMaJwrnMQY3GxEcpEjQxEAtbsYwKVVmWbsf7v22fXYfseno79iCmRHW4kZ2bAPxAfnL16zivZkF",
  "key28": "5sosqfiuQFePSSssYjyyG2fnuDUf5iwth9zFgmGfotPwBsgu7ByoQ893fukmgrvcFVB9nN7XtPoY4XJkn3FaPtg7",
  "key29": "4HQjNmHjZvTugw1oPxLFis4wTjE7DjJtif7iyepsoZ6PmJX52mkrYZRPoz9hoX8Pke1bB4H4wzPBiBNp1no7XCRb",
  "key30": "4uwnpZ18Hau9teVnM65XwgX8tREV3r2fPN9G95ERbPXTnpMs9m9PvbmmrgpiohkwZShSysS6MkRU1CWQebqGJR4P",
  "key31": "633sRG4voBpj4Mad42xuwTGD2SMoAn9nnTFxkiJGXAtLm8eqBqpMt4YFWZG9tYzd396JkSX7HUCZuNMJuURuSPt4",
  "key32": "4ddNhka5vWjojqafy8qSLiibnx4NgjHgq3Wr5skk578PA1CBzb8TeNb8QRfvfRC739H48S75quXCFsrRscFTRi6U",
  "key33": "5psPLL5J1XEFBA67mkw4jFjAbNj5NuFvWtqgNUiQUbtBYdKZuuHUtUuDTbBFSNGY8Cvy2R14FtSKkuMfUwgNKGV3",
  "key34": "5LxPSwWAPhH2CkmZMFKUoQDH6dHoCjhsEN572tCZnbCoN9rGuVKLazwNPMGhnfWtrZ5FBKpTntaui1gGaXcJRT9A",
  "key35": "2ozGGnHTBvgA3zQsakftPr7pk37Cq4uZD196aTcWiTxUxvE7NZoWRLgP6GcEcU4tsAEDRdWg4q76cRhcE1bUX6rz",
  "key36": "2588bqx6SEzvei1w6Hkn4mekDD7EEfK5wis6XFiRP4o9Cmw8uAGBUpuk4mAErawKBSNDUofPm62idk7SLsnqsdKq",
  "key37": "65Y1wmwuEzEGdpnvWEfBm7K7wfLHGMeWRVnix5aPcjuoBFPkz2FAtjt3SpT3mPLffd2ekCisrtr5zpnbp3GpavnS",
  "key38": "BHxZTktzNryiX891DRwhjdAbuUC3eWYuCuhdyaUe9tBY9BzC1QR5qbQoYP4R9BuBVwb3REhsoD2WLyLCxhHPTyt"
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
