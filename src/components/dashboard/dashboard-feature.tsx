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
    "3HbtkWSFBumsjTggKXs6HjrrottjbU4nmk2ReF1uYn1C6Y7UFQAXAnt47JB1USb21jmbNdjnMYiUKNQfCYKbYnk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LWuvBMAUczf4TCzwJed1w8WkomLBkTNMvyGZvM2A1BrwMja8r7dq6jNy8hK5utwQqF2d3FAAyEiZdQtQVzVVwB8",
  "key1": "4vx24pdbQvrVV3ffn78RgXkkn2k11JWMWLD6wpHtWy5rGh3LT9iM3kEndmZSvJ7BziiLs3ic8ki9d2gi1k2oR9qR",
  "key2": "369KLvTj8t4DDV6L5esxa2emQ7ZntHrqo6iDhjmWGS4eDG875seExg3sjxtCRk2AXx2o14iTjTATM147YNeekQgi",
  "key3": "5GT2mKoEBZdJgkaSS1TVcFPCeN7itFwAYe4JDAZE6M1He4Ue4ZrMUYEK1JU4HEW4k99Knkoz7Gmv7CRXy4TUj7so",
  "key4": "Yq1S2Lz3EPxtZa8YDDEJCzP2qv4fwny7mQnJZ4hP7xbdcZU16W66WGnMym2GCZeNB1ABh6R9GHq3GLaQgiG82yR",
  "key5": "2uXtcS3hVCBHho5Qgt91vJu3b7Px7QNsAQtv54JNG7TmhzzBQedeza5zWoiNZqHt4SwPnR6aAV9cENiLzoQWTbjH",
  "key6": "fcahodyoj2dRR8WTJ2oaEKUUR1S8nAZWyCpvPqhCzHgtweTibvxXE9cFsoT4w9QpEnAXzELBwXpV2dymFdJhJFy",
  "key7": "72MqL3EWHMq8VCSzU6Bfq2RJr2Kw1J55zatkQdLrMoZnmHgFZtQYYNJr9BGRFLKptzEKxEcgdaFU5UxKBXCA6y3",
  "key8": "3dGkJfkfsQwUWgv9kuhLNtMrMwzCZQPKtQoyC6s7TshH1xxS6HoNyKapaR4PFbf3iMQ3NSkoRgEDthvHw8D8gcyf",
  "key9": "ou6qgx5PzWYDbdZiyfQvRNTFkPoCvsYNyfi2gqX463XNYLGSMqtzpxqFcikrsaWTMvxeTeNrEMw6xvbMVDtcBum",
  "key10": "TDcLSjhDpTbyzRQamKNCz3FxsxfcJT1zxAWRweX1K1JyQakjrKqm5dKoGkL27jah7yf3DdduppuXVfrGmEEnynb",
  "key11": "Xot37ry1FmGSGYCNjVcxSVGUEq1ECVzAwtmqb8Do3ciixCKKz8PZa7HiUJp9a8owXdYqbvEoSGDWF27SjRwzkmg",
  "key12": "JfVxQ8r8t25ZLzJWfmSw8nMUZvjkcvB163N8ybL8qcDNjiHTbUGEaarXAFmbziFDVmoU2RkJy6PyjxbdRkAwxEF",
  "key13": "45PdxVa696BWBvrCHvLoL53CGW6NTaQ9GgPtuGxqpHZwWCMRkYbnLHEcSWXh5mTQrAmbamys9WNz65exZ5umEQSn",
  "key14": "3AxSfTKjRFNftbbwgz673ZLmRHW86H5FemEMXiFsnz55To8123hzu7Hr637RcuzSCxC6YhxPkRTbwUppPpoqpNKK",
  "key15": "5mNirrNKzKsBkEeR4y25GtQBuWu8XRoe1Yf3oFTHxwpMua3V4HPjnGeRCjaV3wokjS13tpaYbPAEXorWRkqNUopp",
  "key16": "2YWVfbDAPFeUp58F6ZjrZzZdmom9FvhKi2oTrCoN72fvMi5XLeTLNE6x8QyTz8btavePpPi6Qzrf1UtSAEd6RfSS",
  "key17": "2eJg3XfJKXjWNyA1ZBCwb9NnKMJUAViP5Ag2C3LtgTmbqtSaBEj4ZMX33MfNzrwTA7aoHRBZW4Qn8tRcPje28V9B",
  "key18": "Xdcf2zgKoX4QAUYaJfW6nfH96uc9bfQKaE9AcQbkjPfpgQUQxQntKpoWXXNyWaDjY617G5nw7vXbZRdcRwy4sbe",
  "key19": "PQHXf4EWqKd6T9QafyYPFGN4mN8vZRcut5oxFTQ3pSjLZ8KQzWvX6opiiorBg89YiPZeEtCgJV3rhNCKhfa5EhR",
  "key20": "456h2evcZF5EEyWZTL13FWoHssMBQq8q9Bc4JcSAYTGyGjPoctXwMH9DpdjbqWpm7EoVhJ65Ec3FQZvqbZmGHQMc",
  "key21": "4QpPiMZzkmTUEX3rmYBRdpU3JMyTCffUoUTXgzebVXWKePoewNNH6jLMYmTc79REyQr1yfPUyrKNDWF2RHVoY8Wc",
  "key22": "YAvpeQ4yq5v4TXbXFeM8xt7KFSRA7H6GNMWPummKxDCqcDuerLKPm1VMNNR1hcMM33n1G2wtLRidMWUjCvGj9GD",
  "key23": "MgPP7KjsjEA98UuCZvSqXe9d3FUy41rAaQTifBaJpGMhDgQYsk2CiKG2UBEi82n6hBLw21Jk84d2CiqKLK1qLtS",
  "key24": "5CwHbrUFVGfQtacASS7kSy6etnH78ip7WgNeKUTj45dFMqSPFSL7wC9jiLns48sBfzCyM9KJ6g8EAmH9oiY3HSvm",
  "key25": "3s6NKnSwEMSxpZXhMJmxmobP8j7gdCZEjs9vpTSo6SKYpPCJxdt8vTgG7CeK9V5gCw2SMur9xu8g1WJejNs6CSiK",
  "key26": "NDJZfV7J9NYtgcVq8VXCW8ndZffjbLsBB3EXFsq34KMQDET86mmwTzAyPkokiFGcaVhJuru8RzEBHUbdh6Y4RBe",
  "key27": "4VSWDajZtkdTRzBLf7wDFoYB1RAfqjzkhpozeEZHTNz2GS5S1BsnGLyZnpXHVfipLKwqKxrMqEJkZ84gVunUcFcs",
  "key28": "34auZpE1e1TuVNRkehUiUSxTu2GVFbxmHtk84a7KsBb2rZ8xK7h4mwmcgaGDrHJ9NEiqmTLGqZCiPgEY5BMGAzc5",
  "key29": "2qMpwQT2HX5qWs7dXrbUH2C3o5PiWPyHo5owkgeJ7CQMKM7xd8s7dN9JuhF6S42psqmLE8JRvS56H3TtoLHKoWNb",
  "key30": "5e39c6S918QF4XXEYPPej8jGVHuE4U5kF7TT4H3r6jB1SSF56TuJpNzbBcoKzJvmVxezbWpWW6tDEGaDDizyRX61",
  "key31": "5wdmo7Cuc2U4nKGiP8aJDS8vfAFWYLoQyU23K2twUrRRXUJAvZCaLtdM4H1HobQbVQwrdD9DobUPsYGnvpLuxe7i",
  "key32": "6m4iFky1s9FZVwta9PND46LPRpCKMp18NwUyd5SCcXiyh5ZQujLSQzhs8kbck4bTEfn4j9muazm4bQi2ap7mXfF",
  "key33": "5BFxZ7bQzySuQ1Yu7uuoZg5X8tTeE4gbcuKKnw7r1e6LYCgeCZJt2wEjA8wn4wypaWYNUV8zA9QqX9xgbEbkrg7H",
  "key34": "5LSm3s8P4zYPf6rLzymPaZ7EABwyE1eRUmUNHM4RWmGzAp9CYUjbByWygXPzZYqRQ3qzSpbDsKYL72KiXBcv9iNG",
  "key35": "2XPyVXpzDRrvk41SqKbUnXdgLaGaww6848gvZ1vHms9hPaJYCwoW4HpVLfaLBu1MT1gNfFrDMpDHdp5UUCfyWSHx",
  "key36": "3JkyBsjmXZC5FiQJyJ7HZgzBKvvh2oY1sUSB69DWMYVmBn3QT5fiRRKKweV99rMkfC7tV6n4UejnV1YgEJYjHr4V",
  "key37": "24Mus9v6vdtrsPZQxpYAApHWXQoxqvGgEgmxFEshbXtXutCtSCogDrSq9BCbbXHGLYfzGmGZDHErqBJnK1UZ5gJC",
  "key38": "3nQobWBxtBWnRkMoMAFYiy192mN6XpqPX25ypejLhEx68emip8As2rE1bJ4W9T8779tJ9eefZLGbApedrgbfWmVU",
  "key39": "SzKY4yqkPdaqVB69E1wPfiyNav89kSKmyxJTM5TQ8VnnNxYSVsb1TR531gUdWqGNHx4cCAcwcFsPS4hCBKLduaA"
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
