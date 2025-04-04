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
    "26CsBg9pNLNaC2RWuTp5ncvttr5uccqDsMfvYKkZZ8ugtD8dnwYiXPiNk8etkYnCmkMsa48DcGk9YfZAhmJvpsK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A3gVdcSm9HwJq27ZCoud8zwq4Kskix1FtpVsovsSaEfGvcp3t2bYCq1pKfaUDTdhGJARqGxkub2J2WQY1i7MaZq",
  "key1": "48PCiYzyUMzsxgQEtAHrXw6R1fTWHHx4zTii1wqy5tAMdZtCYXNofLfTmC4L6oYqQcqG5ECMBmVAbB7x5qLtZvG3",
  "key2": "4a6hMVrURi5MWT6snTvCZ3H4NFu2akBsVeTdLpAYjbEtEzuwPcuZGveQw7pmL28hSKC5wWtivxPkKsKqSiEwfS1k",
  "key3": "4X4iDXENpDN7kxnQRwV2W6ssmz7af8mr4Yu8LgVGskw7GRsFVd3DkDG6bH8Nbx4GLGB1bC9bde2gyMVXNSe1AfmZ",
  "key4": "5BaK9bAUnkA19dwTQ5xEkLVRZBjGQ4bFwaH2Jo6T4wZjZxqpWoGFHYdYndNvK3zMB98eQW1vr9BTzoFAy6RHDX3Y",
  "key5": "5g41DGVHR7WyyeQyRW1XHbVrhdLnQzYFsGG75muRYK6Hx4iKzSWcFAkM94Po8FGRPob3Lxt3cFWkit3RincAWbRs",
  "key6": "2HqjgNZPNLyuUhrx1oPXeZG9wPRdaXRrKps2N8h3RVPBNVt3i6oYbmFb9JrDZ3WYzJd5zXp2kbWf9wR2ns6c6AbU",
  "key7": "2uA5dNq2aa2AerbdoNENG8LNGD3gFWUj4aBbXwnrgj6yMupcEVLnzNRSrwXC7jDrF7cdt13pGNmuMJozTxQrhmPp",
  "key8": "2v52Pdjpwovt5dXZLKbP2zVVSu8dN7G7wGozZNRJxEnp1UaYwqvMniBa3awQvYadjiso8wmW7w4eEiCKfkPYQ579",
  "key9": "4YXhDr13Jfri8bS7D4BEngEF5UfvBVYYxvtfVDrWDLAMjfhnYc6mBUiXqtUjM8dbJrVgg5Jdz3P1X2FNhAn4piNy",
  "key10": "5Ymxc7TaaDgHL38RjMTKGcUhZb9ShUWjPrJhaPdRX9XaAK2wUron6W4QwDewQtm7AxqHBwJGRdUazKxLWPb6wbpZ",
  "key11": "3fF4YiPBzbvDrMrrcZHo7tC1iLwpcgvgAEDREmgMbjTqM2mVKdprAvPnhvXYKcNPUqbUGz7ZG72NiVvqAnLLRU6g",
  "key12": "5wJePELUu9vcxzVzw22yTq6SQLZXQVb8syuMkdvgUT3hyFSYdN4oqxRReVY1nkaQVcTSzMSM9Eo5XofKErfsHYrV",
  "key13": "52YkjYPBZwqbnQ15Hsva8fbVT3w8TspfBnZeuJegxTan6ih2nGevPG16a9LPFXcVgk8YcjNumLnzoQAzqspaTCjP",
  "key14": "3gwaYYX71iHWSzVYMCDzBGiQjkdE8fzQLtLRPjd5XLRqVASRMwLhdV4KFHUT7zjNCkKWnWWRd67rT53hBosPKgVY",
  "key15": "5TVSTwBucGd84Gqch8Nymt4T8XUEeByhJtcLsVGr8872zxMkMEcp6zCBbRTK8negGqL1KWqtf5KoE1F5adqFfYFv",
  "key16": "JZvinbGdEKeehm4T5qtUjqSTRJoBBxkb4VbaGJMnAXYZAAb7A1NxKjU6Pa5ZLshpftb1Vcgk1CG9gS8A88fLfjx",
  "key17": "67Bhcifzn3MHtXzXTjyK4QNDfvN2nhKMgNL9CP3uvSwNF9D6PhAQBdD2vzyYkWqAbQ6Rx5ow3Thz8NxtcuJQbFzW",
  "key18": "3eLtbkmjr3XZdzKtraQfZN2odhb3GZb55R3qD6wH4XGAuSihHwvYEmKWXCjQeyBow1WKTs5sZyTvti6Extdf8UNn",
  "key19": "4cEmAHsipWz1YvmwcpPVvViMN4AQceFEHhp5Y7Hz7UDpGt2Kp42Jjd7ZKzGg3mbN9DfaEbvQxc7mheQ7enMZA8nR",
  "key20": "3X3aX7bTPdBXZqbQxDLDFwciNq4UYojyestFRSybToq8vtYkc4GR7SruMG2susPcHrptCyucBcAiqbPhjCBGnksq",
  "key21": "2b1rens5uemx6zVYh2RnmzCBpgd3vkZSPBBvpuUZQb9vGwTtFRwcLBdvA7LR6pLPcCL5Z9QwFDC5H5HsxhVVQ5xH",
  "key22": "FkViHUQc9RoWHrWJUB3WNaP4m57nxThmFh9TF5rLqJCZW8toi1wfbBPP65Py2D5v7qty269QB2mL84H9uCRQa95",
  "key23": "3boWbpVyU9or1JaYWmHYDRCdPv7kgfJzRuDxmjVggTbFDc8wSoQEcd9Ac3FUNAHcKDAz4DprhhxeMSwo1suSMFxh",
  "key24": "aJnxwuwjA3WBe4kQxNeHNfJEj3dmzkF2TkkH2HmZMMvKF3RC9EzhfZpymcrFB7dvQKZCpRhYSAkfzy3bQCiPceU",
  "key25": "4DEjqQbCC5c2ukpKchew1kPfQtnh8Td4iqYHzn7idhPUyrePgYzAsum3EphhunBJcDFMiBeQsHm43QbDovZgoUbz",
  "key26": "5hmnd6Y17BdiY9sxvfdJEyzM5Wm3s6E7EMxr5PbFqXDPtBT5gjncehFLwVGg8pb9ZyUKT6K1bL218H43om3ENjfJ",
  "key27": "5ZLEqZCtHAAx7psfWhaBtTqMgDWD98ADmzqB6uxUjTfGz6955cddj7MntHJHBFPfoQTkxrPRyYeKysXSuFnGCK9o",
  "key28": "39Pf2ju38G3NTcKQPZMPE5AcUnX3DJ216jiZuKiS5arL6hL2hvqEWBekACnYbo4n4n6KP5fymVe7gv5r2bwrjo18",
  "key29": "4JpaMcC9mwqaBU983XvD5WUAxW1p8zyV9beSKHC4dvsxP69ycqB5GZhJfgqf7buouCvpvkLpN6cd84xztkpLi7Ue"
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
