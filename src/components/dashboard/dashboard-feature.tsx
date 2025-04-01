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
    "44nxrLtNdshcQitCVUGtPBjQtm15tec76toFtgHGmfsPdruaRUPjyHP9PqXrWNV8viJCGqZxoFV8ZvZequHie2Hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3joFcfw3wEhBT6819JSNb7g8UtJBFK6U7BmezyigocjPUH5mijX4owfzTzubQzTZXLqYitDVE3kk4nR8ULwiMJiS",
  "key1": "Ru5zHFN4yAh6o9EbZw48rMZap3VWvt3xNs76qXFY57gwVzT8qbYRNEyvbZrAra4deQDxYH87tNz5Fko8CCeRxzy",
  "key2": "5kPZRtTb2FB4Xj7kro7mNxtg3aJQrXLpm2ZyEQfEUpdhUPpBqqxHbPz1jzTv9pnxdNCqEQ4xZQebmUFyCK2Eh2a4",
  "key3": "uymaZoNsf2FaaJuRwVY6fVt2RXS3u6tnzFSvBU97QyJA4U56YVnY3hnbnGAC5eMqRDnMvKaCXtccKSbG7C7niMe",
  "key4": "xgbe5iHZzu3kUAF49yjMc4cX7Hz1mNTJEr6NRgh2nszMC9nb15FQEPVjGEggmrUPccJWgJ8cUmQBUCGcZpLkPr9",
  "key5": "MutHAU46uXbEMfx8kfLGsQ3QTnRwGTRg5w5TiewkZSiFfT2kiuSYfcghqeQPKmfErkNMyTPxFDgCzYfNgyeHxdT",
  "key6": "4puC2JKu35FvV9SRUaxctETyBuNRLTNzarUuBbXPra3sq4xnoGAmZJWZTdjnzEeKQL5umtYJnWcAnc8KQ74EDwPn",
  "key7": "2wp3Kejy5ciwNd2g6K63oEDWDKECRsQ2zkZ1LYxsYD9j3NbvNbTHWRne4vSVe4E3L2cokDnD9AaN4uxdH9mehPXJ",
  "key8": "kEi9xXCuQCsZZU4s8AAC3b9su2FcjKpKcNz9CoqZFwJPTQpCr46xNyg57555VDS2878o3GgMbzgXCSvHw6W4Ypt",
  "key9": "reKbyuFdFPTUeAwV2outPspLhkAs8r7uMULjSddvcseCJMGDjT7QALDXZ5dpx2VSb7evxuEsDcHCYcDv3fuoqeW",
  "key10": "sW4Bh67dgpSzT8bahgpY6ri3eQpaAKj6b5kT5TPZvSkup5dQFe1LGkJouZrfcfTWAgyCgjDdURQus7aqmySTJhs",
  "key11": "5cxUjkPtSE8iTYYTNrmfUsMbCdzKjpnTJpvbjbY2jLghdGxLP245jEVhBAk4bCLkZT9gJBag5A58pb4i2hP99CqG",
  "key12": "uQByHoeeaUyZxr73Kh2gn42ZTC9Sz7CFo9KMnA1MPiarzDKkeSu9ZaYT74WwA1CYVHEo8KZEU33Z9bdvuzYyP6v",
  "key13": "3dj5G91rTm4FteuYjcWDCxH1qWd7Tj3sjR8Z7RgCNsgEtLUsbFUp1DP1V2eWPMsokNybywS9tYCthtJEAdas5FpT",
  "key14": "W5wXV7frnvwYzPE7c1zJYztQcdmUCAUvgN4LNCG59kfKjmpizgnERZ8KeMSDmrMm2byREdw2pYVtYxqpbChmu3M",
  "key15": "3iLWqZ8AokzuAWchyMZ24M8xQQ27g4zoKo86U9i1wQL7kYvqeVpXAdgCAfyc5tEqD7xJQRFUqtkmP4R2UNxUdMJb",
  "key16": "229xfWCvhgQTVZcnuF1kVc2ewLcyCPx2Kjmc6HwHUYfiZzFxEab56ESn1gVXqm26C6CTJEMGACHsCKK4AtfEHgZG",
  "key17": "4KvUCfKSQpSGpcB5nz1bgRZdMivbaFT2JzjXSLiMLpzwW6ckAECzR5Z4VXUb52tkUrAsJYHxBH4G1CfVuGpmZxQg",
  "key18": "2vshKQus3JTG5eoQTBbSsG1H8YabNzooXGpM5WFr6zATNoFsz58dLHNhQYX7Hzpg8AqGcEwgWNSAnKFwR2ZGJ1ys",
  "key19": "aLp31FxcU4yXTPuySXknGVR6WSHydUkHkojT8nqoVAdpFU53rV1PrA8cLqdZsZgVReHf9VSgQXCA3ZixS7sjqFX",
  "key20": "i2DdwXS5ksyesgLRbyjoczQximia6xcmtk6kKohF73vf3RHa2D4iWhwaQtZHq5S5Hy7o2D7GpzSq7THb4BqfaGw",
  "key21": "5Y3oJiYww1K76uaWof7SdmqeXrfYgkkGBVEvW5LGBLwSRFnjr5G66GWrg9t4n8TjWjSZihiYuXui4LNB319ymQNC",
  "key22": "42gDRsREzZhVK7LJU6TnqZz3iBqb8ANzRVTkvPAvD87HRmjYcbX13kN1twSvVDomwoQxaV8dhhqe36jLg8Ndz2no",
  "key23": "5Sutvg7mNUKsdMB8kjiyQ6b3wWTmLzZZxPjcLJJ6cb4cPoeJhK4CnvQ15oZGkKHU5sEAx9YFEWpHfUn16Yxe5wU2",
  "key24": "3y2ibNJJjHRGSHAXC36ki5k2fUG5c34AJ62KB6FPDygyfpnMnSAJhvBwwkznCWsiDZGhsbT4qTo2cKWMqVqaTU4j",
  "key25": "2VB7a3B2HBbCobpbu9LzcPzELiZGLuogQLi2NwgyZQeBp2siugQePuQssBaVcNWehh5heSbYY1p4pQJNoun8f6zb",
  "key26": "2ZEvaG63sjT3iMu6xcR29voBHZj6giu9c94vNjJW2Zqm8ahjBdT9Ta9CDwKXhPjayLQx33jNhzhF6XwP2jDpGETA",
  "key27": "5yodwnxbdw25gzkbyRJbpGy3J4bRgMCF3dGYPoKzzQTVgTdHN36vgCgN498oSsuypqLUYDq8YhP8TfVQhZwU5kT4",
  "key28": "3NzrBFeAu89eZh5zooUdxueNa6RFxGBGZcNz6s6AeKcyXi8wuH6fKtk1hsK7QVL26koKU3sDGADDmiGnaZXAyKxQ",
  "key29": "5DKKvwfZgx3SpAubuehEuPqgXcbvzcXJEmaebtzV8k3amh7n43FX7Xu8U3y4kdGeYqxfxrStfskbfhsfAjyrtxEP",
  "key30": "4SsspTzVVMRUFh3HXjSV5nVpfoV4pJ7Bc4FA5ibGy6x7829ce6x1PMsv5r99fTDqv2bLJMeRQob5pemUghvjzgXx"
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
