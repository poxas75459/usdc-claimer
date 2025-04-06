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
    "4fBk43ewLGwuZ3u6mFyKA1odUigHUpYYAg9n4Y9Z3LgfVXdXAkeHCYNRusVoHaZ1ynGiQVFJdKE2rzs4R4rBFjro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TWyJD6JwVVBRyJwrndJnJvvmueqLxtNN5GRqUiizasx5w4VvfCA9rt7ja5fbzsiuDWkbVCDGMvaqd2KGJBZ2JS3",
  "key1": "2c74ePCDA1HdWaLgsZ4XBg31DRBxDHZ6NJr2Z4avYzy8x1erAVxMBBsM6u5N6hPDouxHXtvKTUWNsnsyxdksXDie",
  "key2": "6KFawFZpeT7bdvVV7EKcBNPGEgTDPhjnJA54T5VqVLTifcWc4p37nMZ2uuvEi4DqzechWVN8StpY9Ft93TZQTVf",
  "key3": "56NFvgx6qxa8TjSkMDou7WuYQW6U7rCsDd58TkykTbBYwYAqzUScTiQ4viyr1qryrLdfUeNPGgCSHAAgozncM8kr",
  "key4": "3mK6pHcnkeuxmta8EPzJ2jDhJQVmWXDY3vLgwBAUGnAYDuQMprK4sJXGKKxsgwzxRDAJqHM1pTAUTVoDDhfWgRJf",
  "key5": "2gUdCs5sGjNm8aEzPCRRVSjCo8gU5nGN7hzUG73khfEBqsw3rDYgpkg1pbFHLHGdjS91VNNm8Jf31u9fMs4e2k6H",
  "key6": "4qmapaqVGRxnabiDbRurmAxzyR1htauUyfaKUUF5XisKcntDQHNFXiePbndvTRNJVkRKAgLyEoKLBSFXrUsffuZ7",
  "key7": "3C9cvMWXE9ggH4rr2Hgh2j1Ym4bwEXt1Xj319ZiuhdJj9AQn5SWRQEbBADQ8qqvWT7bKgzYXiCn7JExt9PYBMR2M",
  "key8": "5zLuZwVNdUYnRFoRB1z3hZF45XNc6YqV2zNz6XAW9f5fT3xajeh1x2q7G7tknmBtNwPeTrp7pALtuvs2nhZsegN",
  "key9": "5sGjYqzxuCq1TQUFf5ZDLmPheir7MUkDVpsvRpFtSMQeSG3F3Y7NHj7hgZCfcssnghomfv3w3MGLY1wbARkcvPoQ",
  "key10": "4SL9TNUiBaHqvhLmgXos69Hiuoo2W7rZLwR2TxPYjxALGC8tNKoe4gj1ujWpgpBMTvvJS6NLHVjraU6Hnpqnuooh",
  "key11": "4nSor9TcZertmnypTrgcqxyFWVa8eGetgwrjiBdP7ZANaRgdPakN8MEzkjMciDxQmRRHi3vaBU1pSYyuHGftTwsG",
  "key12": "gvvxSxWvZBS8WRULzCEWd41KEk7ehSmadR4FLrfsTsWbHtRS3t9A3gT3fxEKw5BQA636PaaJfoiSNi1TstDfZ8p",
  "key13": "TMNuopsT86AK6xEAFBQr39WfpiDq4UaotauStFPqG8SdeeeCrPnAgUFaCkHGwABXxsBRCMNrJUVt1bZ9UmDUzyK",
  "key14": "3K4hEdQGVdRYNw2ebwexpnKsepqmfayDPS2DYsfQaPQBBH9WDNEEFsYbZwfjaWmHbz5MpTnCWXBaZeChe4UR927j",
  "key15": "26yhiiHNvtX2Y6bvveLhwcK4H5oQepZNEEWBMkmY4tDoDowoNYwMzdhtRAmb5qQ1rUePAcPgmzZ35jDXtipzD3mV",
  "key16": "26LeyRLRvv9U7vVhBuDkTBbY16EtN4At8i9TDYGHXpVRX1iGPwKu2ydz5dtj1hCss8Lb7g51aX5dto8B8QaKrPwq",
  "key17": "42icAs41eHseB3TF37NAfKks5gARjiSwMA764pcSEFxtrKNuABLTHm57AYFkKK1MDeSE6XvKYwUN3eSo2sC8m3qe",
  "key18": "oMJRom4vBub6LuynCEzsYMMo7AbShS7D4aLsx8Ln4wwsEPgURGnbLWdrK239YcjgXAHH71j27d7eLUhtjca1cZZ",
  "key19": "2mih4qRKcohrYPxQqMd4cSR1ZePmD23KS2QffKzXREoEKoWV4xkVpBYdZ1HCjX16HgZh62eaqAzuBWZEEDHMNKDC",
  "key20": "2hGRK5nPqr1xqLmcn9Wd7ZwwCsWfHAMdsf3jmq6B4ptaWpYR1az2MzcS3wHFn9hXEYudCrGKx6jE4cMzAApVfMsv",
  "key21": "2xvbGsAtpJC7T8pF9oudiLzJVnoC6EzaWF3zZUEaUjTvyKqbeWnvZVCxwHVvXzmYHQjdBJsdisnKCgxMZZuUyjNG",
  "key22": "FEJNvyRsj2JUGcXmjKMj4sL5gkDx5vBKP262Eo24pQQqUan3FCp3u8tFvQXx7RBvURZoEMygeDXFkvs9eJHZDqY",
  "key23": "uqPThbFM5vcfdLNkun56wJ3k2tM4A1kMsPKTUV6sdaPHBmqDQsTnFn8WwwGbG81s4UHrrPiiyZULw4LVKGMaU2B",
  "key24": "5LWKvWkxoNEqUkvK9m6q8GCTTNqu4MqnbEmChDPoESMXdvxqqQ8MMQP8mX3SEWG3gLdhvxyaqGCGGM9jJHyPoEzP",
  "key25": "51DrpAhHXtiKBf4B9XwMgrdCMoG6pzJ5utTnSVmZJRSs4Jvnd8bFRN3HBzC3hkZkoASqcvgEZZY3h39jzcBGDYP7",
  "key26": "43Ww5BNVTH8u2GbCTNPbPQuFpXdx1NbmQBjpUBbK43t6WCkCLnyxSRzuDPaw5jUstvWR1xsr9uFkZxvXk7Xw7UAj",
  "key27": "2a726ooSgVxWZWEfsd8tNptTVi6qqKvH2iLnNBi8cmwCvNc1g1SyvJ29uzbYgxLzES5ECuzsKpB6bFRrpvtL8HyV",
  "key28": "5k72ZL6BxmQAuhAz8CY693KP61jBBCWpKnUyXZ6KZ3GiPkXDBw9NMLMDCxqvk6m5W5Y3mJKnGFMLCrtRdy9WKkaT"
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
