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
    "3GzmGaioUn5PD2KzXg6Ej39CzdbF1SiWLrMwTTFoq2F6EVi6iTtLwBD2RFqsoa4U1Z2yaZHF8cKMdMi4A7zKE3YK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ESAArDjV1RLUSDspYc1wDotjjWxyyyPP1xVH1wU4XyxaGywR4V7aBEyfEhFbNKZLZsnipmtZJn3cQad6Y3HCAms",
  "key1": "4cGgLq1nzwsxkitwS2tW2FZBHEjPBWX3nUuzqrtKTuxfSeBjmGKtdZ7e2D12rHZqnqM1X8N6NJwAsv8Qodt8boYX",
  "key2": "4JCSchVUgEp4dftCzfjLr9AN1MC3S7ZHeSw5mBX3NQUqnNRhtiZYytrpZLyYBaBhSSxv3PtzsUcswvaBvPa2gNUi",
  "key3": "DnX6x2gnQvXuHLbtrvDGi1ZEdwmttEchg1fD82VePeE5eL9BWzYZuEzBFECv4hrMGnn8eR1yCNyFi52WyHo1j4w",
  "key4": "5RzndJwJdMMqfXwfrJd6bs8ZfTjXaZytCRkshLS7NW7XiZvP2xqgnxf64hAVUNdnpNDD1HpJYUZHYnX7ZaAbtFrP",
  "key5": "5RZ5fczLysuBn17kXnkWGSGKiJVLYdhSH2s7Qf8FckS4odus2gqcKfRN11XAxb3ghUHe1S4X5LPfG83ozaU5NfCn",
  "key6": "3AQHXmxrVcw6JFV5JzkjY5bni1ZHZ2E1KMZQgciwa9AgYVhnXk5aFxvMzJ5VJYVbPUG6ZHEo22A7LM8U31HXjCYD",
  "key7": "5ea3dWuZET6gUjttaV6zXFFUTPLkGRcLc57UxqnB23WBu1Qx3kwG3ad3L2r24cVeJRsfpUSwqL1xLHraphnTHkbM",
  "key8": "3BtuBbmisRYLXT21VsBa2i5ATPiytYC7Xnrvi8kgoM8GFTk8eWp7LjXiqjgZTfgUtx6fbhRc14AL4V4J71d7WRyD",
  "key9": "3H421DGAjPNG9dU8P9cKukiQnPWVRsW886PSiWsMjSn4SZQxRk1uxzgWjySTfJ7X6bLyFn84HXMggFgskSTjHp5X",
  "key10": "4SBuAB7wmFxLakkKiEUuVDLrpydPrsxhPTEGPDEgNGbdAPvosspaf2EiAnSjpC8rGBTVrn3FcXLtL4YuxBzAXdGF",
  "key11": "3Eu7iHqZgKWjPZR3Kz6Q1FeUtdk6srkV8A7A8N2nx9no2ZJKZpKQheB2fzkuAmMRSJu9PsYe4ZQ7evEPT3vTCa9k",
  "key12": "4zuCc2MS4pkF2P6GpiM7v65GWLgpDj5PvKXudvqGtrHQS2iXqYqV9tpntjLqYhjDTFLAuXcKBV9pJr4rH4TFx412",
  "key13": "4WX9Ditn2yNRZ9sM7Rx9o61Skn1YE6cy3MuQtd4SHNzmPMYoqRvkyy8aYa1tNTrRbaXJzyYRvekYrR567f5JkMDC",
  "key14": "oh8TAKMBaB4NDEHbwHLFyWeTkeVu2a5Jq7ZhAvdFgXvBeW612c6jyPr2TWcZb13FuunhhZPA3vrgpfhSsQuLa7m",
  "key15": "3xqkKtLjk1zsNkjyhJvWWufsUC7HqQP6yDaM7VKtBpeK6G3dxrK6nwgLaqn4s9ijSmK9YD3vaGtghCDqs2yXUvZ4",
  "key16": "67VsHvSQ2qGiWyreZ8XB2E6ZjXbssaHdjnPNxPgnkUiC8RvJvt3HZHXxNa38MZ1urecjRQabMgg72V4nVDTWtYSt",
  "key17": "2cH3k3zMxd82jxqJmnEHY5KwonQnc956b1R29GYReAihcamLprZeHSJjc4hRpKmxFYHNuYhbg2dJQzfYkZufJ5A1",
  "key18": "4L4LTHLeNZW5eR6s2Hib8goVnJCNxYzaQDQ5XLpyVJ65UQSYHbrHNnajA9UiQy56nAD1QKoeLW7wgrWteD2626Z7",
  "key19": "2gBQMiGvv8JTwhrUgMsqbABawKCwAa3JhBsaYtNS44TJubksj4VrZatSeYscqMngFumndF5bQNAsTeMJ1dpEYDSK",
  "key20": "xjn4VfNM79UygG5d8mEfXYFMMxgqYHcsCjUXY9KBBBQb8dLT8AQKCqQhV8Sq4MycpHisDMLQbSha7B4DGDDzwPw",
  "key21": "2hCJkhPP1oMU163jmE6yViisYy9KBRvBXhnHZEQXG1qA2kaRrdXfiFYeVKpsAEyDQEeV5ShknPob8N1thLwnYimu",
  "key22": "5ADK2VLhjZMQMRnMF57Yod4XHMpJV4PCX8ytfoar4bgZTaCqqyDz2G16BogtefiJ2d8Mqz3i3ADXdF1MiLjWofm8",
  "key23": "5h73Wc9xfWVtacNgZQh2Er35Ao7yX9K7msQytQV6aLWuYbiWCSW3EhBswMfR1xSsAyGN6pyXAW94VEKRnDCweEzH",
  "key24": "5ZMJLWmAZEVaXKURXQboy642Nwu9W6n1QV2vtMEe8SsVAfAUPAVuhK2m2TNgRF2Hu4yPEgEghHfisCgzyPqoAhPg",
  "key25": "47yYcWrYQa2h2WM2c4tqFJAFWJwQaEZZxmsqc5Hw3p34XuB7Rt8ziCbkQ2NwbW9eAmeHkDSX1rKZdXuzY5yxHyqD",
  "key26": "nHciACXBV4y6kcQBGyRbJvGycrSVkgn6yYFkuCnNBMVhTGQGHWuk7dEMgbiru2adGQ2NXq6jkVsue2Mtyxc6Joe",
  "key27": "5uBciwcohCSQUSmjTeZ6adxx4XAY8VK8pdDQGCZsc1DVyJyviEjrtcHokZizJj6qR9b6hSmBo2BNx6WJmoWUjXBm",
  "key28": "4WhUsXyHPgiePBqPjLpbcWCwfr3R52b9VvPXXPorDgcKtdbxo1eTEfhz953Y754WABZ8LmdbNWSmFyZKfz2YQxkx",
  "key29": "61doc2779tnBCoCTH6GrGstoDUnUeC4DWdTgZMe7sCDcY4dbPjPqxwepmvAWzabvHircBzzAwX3UjEHGrCGPTeSb",
  "key30": "4CF89NzuQyM7Zhj27zJ1msi6gzKZvk2s5z1oHZ99v5YbkRHMvxaQPVHUA8GUizB13WTBueMsq9Bv6fRzoTYbeL7e",
  "key31": "4khwqP6iK7ETseEZLxQ41KtrQMXPFqxHDJohtCxv5K43Frykgi1tMyP1w4Cch6noUWyufFfgET12PvnT7KTPYcQP",
  "key32": "K9LxYThpmJs7h4V2T8bpTDTmMFkSmxwfmTMoX5qvXZTmKUCNZicYcDfVevzKoWEKL1fLPWDCuyVG3jWZjS5KziY"
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
