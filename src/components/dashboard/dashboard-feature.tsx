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
    "4wruZH7eeGefkXzATNqLRxURVcjqyrHRLY7JfnpcXMXWH9C9rCuNMMYuKUU57vR6Af2rGkhj5hgRWmXfNqUgg6qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LUPi7izepjTD34gYsB8iCVn7NntNySw3eesF9ejPsCytT1bJMAiNSEfNu8t9hS9fNHXjH1NhUkpLu6DxF9pDXBm",
  "key1": "5gVxWMdAtd9eMq1nThmoDVTdJpBGb48dPnU1BxtuchEJtA7zHDXc18vSKkQva2fiD1tkCAVW912uXXh6kv7wcJRm",
  "key2": "22kmdGkxEGMMwbEEgx4XXBxjFiZXU2hdVcnwZLtubqExgsrgwNdBDiTjPfZtYxBg77DYeTmHcLFvxjcz2inhQS1T",
  "key3": "3X2GLRxCtHVcn91kfrfZH7bweGn6GkahxeS6UUFhpeEFWA5q7TfPh1GHuq1ZGFNWVuQLHPaFtjNpMJdGDyxZfiJy",
  "key4": "4iX8bvCWxWmsUHpHeYK5VbPec41MLQwoTPq8BtBTLPRoGZTg4MRbXxetGkaGy65YT3btb3pnmUobnT4mHrF3m1o5",
  "key5": "3doWHJpy1yTLSaK7ash4eZZrvKnq2VwHF5i8GZ2tgQJL1WhpNt2hUMmzoutUBhLszm11UfM3SjLunx6AnnNGGfWA",
  "key6": "3YfBHsGFcNXd9yMh67nTYu5bcxeSuVTUaPP1KGMTC2SWy5RJu4PmSB57J6wtdw7dkCY5AxY9qe4kyRtuFaD3EFmX",
  "key7": "4R8qdZBPed7sfcwRdCkMaye1KgDCHs8e7mvS1oT1f3YtBEv3B5BFuGbFwNaQGezt19Q7jN6yPuNvMi2N7Dzf9Er",
  "key8": "4XJng19ip3Xz7fad13V1uPat9AieKPs4ZvzazMftJJTmSVdirMvHpgNFYhjmH2DHS7AawVeEMUJfE4grkSTFQVrX",
  "key9": "B26vvfodgi6PfNon4sxjwmq8x3vTFG8o7VF73FuMRX9841ShVL9Avik9oqHQJ51Bikyb9YZCDJTgPKXFCMz3yBV",
  "key10": "62wrzLSNNNe6Vf2DEkFKSBP2PSGsnjCE9qRurbzrbzPVW9Rhz1rAhGjmbvu5cSeY4YijXDuGSRKuDnBoSfJP5Sq6",
  "key11": "8RJFx8krnZPFFDQiJ8oWzLDnu9ACoEXWxTKeV1PiAkFBSVzE7ndn4xFzq5xMpxSLjgoW85SwkYBEkED6eWjy2Pk",
  "key12": "2qYeT5j3gbzvLYr4sbvJzwTCYeNUnCEiaXes7JwvCKPeF6g5TfQY2Ay4GbBMbYMWaELUEDM8WQmCTs1MknCpbNvR",
  "key13": "2kLBPSL53MHWLnG9VMtzKWUn29B4FgqcRkqeCXtezqhMTRfeWueC5EfR4HbCkuJsDN6xRP3ZrKqbYEp7mWpkVpJT",
  "key14": "2F9dCmTYZbF6DkmaX8W5YCbtKWEk6J2f7GBh1YKGCNFUDzF8S2tx2qnyvBtggRqH1Xzq364eoGLgU3AAZvuRMRGM",
  "key15": "4ZssBn4xNWLKBnRpWtkJjd2TrLrgBo7uuk9gf5a4dkLRxmoo1ftzidF28HK1YgGU6xLUwqzFKe44ECaNiAZv6yPz",
  "key16": "3i7XMXvoxGgVbcz1Cx5tXwu1QPhgpiTwyYDXfSTJZB9cFzWBPVhq4iFH8GEZcifvZMx9GTVbyb9knnEV5kP4k2Kt",
  "key17": "5QeVoAeyWEiH6iSJm3AcWJdk8tfZcYUTgNARwBgnhFDn1U3sJbTywphQCvik4oVCWcyYDh88cm3513m6UsWtawUD",
  "key18": "gNeXoLiUgrH3XuGhKuL9XidiFuNme78JMHrPybiQeACRfRYGLUwqt1zd4ToBoBm4drz1EMN92N5oKry1nPMZsjN",
  "key19": "5iDbZBrKbWUA9rtf4U5wvCQq4btV8Bir7a4jRxDq4TrvDVyU17nKu7eFc6pJKS9BiREHVs9FHgneB6cXEPYvJAbo",
  "key20": "4rWp8R64eRYqr7THa73myqeKiygUurFPPV7EXE3Wtwx26ST79JDD8TjzCqXBa7kbrCxdHhmJBXLU6xsVBmuSAVq5",
  "key21": "3k4Q2qWzKwXDEerhscdCmSSNtydB9Y2GiFUYQaXvv45ezsRoikkYddeF96SJqhugfvuGHa4knqQaHFtXfAdJsCaK",
  "key22": "EaLR7sh6qH78sHXDRETr33g2iNQGRivTvj4ZM5rEbjeKiceyf5U9joeGDqymh8CNphBQRQwKQuq2BmwBfnHGMb2",
  "key23": "2t46KxBpSBy7yuvQJGNyCJn81nLa4qZNhEzJ2FFkE61XVtsdcWVVFkjuXRRK2hRmPCD2iuj2QoRdvYGp1zBPLmNU",
  "key24": "5pgbSzWEiK14joLQwtFW2BGd6n1TEYPp3RHTtzst9WbiHnhJCztienMJi8rj8ueMsCEbSRGxr9dxTpoW4rJpvggE",
  "key25": "4WxtLZENVvfS6f13H7H8z1tnEkpShxxvgRDLVRZGFGeuVs933vCo86sFLCN2PM43NgqExA1vJ6ULhh9sbVyvf2aJ",
  "key26": "4ZUtv4qcH9g4cGk6i2uiYmWkZbxzudzbw2dDjdrZai9Pktp8apbowSGdzkcGzEDKURJFwAk25bkrh8b7XfQYWgsi",
  "key27": "B4SdEcPeP9L2WJeaeLnWp5u5RPWKBUWRT8Rt8DGbviUWfMUgW2Y2of2fN3eVxbkwMBGGNs1jSkCqDhAXyG3npKz",
  "key28": "3R5VkFvej6dyTi95aGFxzyjG9Fng9Td3VnFD4cUCPvzA3BuSrrWhLnCzNeYWkSugPdQ2zVsmyJ9Xi1gLhtMQJo9M",
  "key29": "2YDg4PdkVfUiHh5Z2qz6s1CCZmonLnDsQu5UbdAxbpswzu3TaWfnTukhgAY3hP8oymnh7Fj3nuEwpMwBQgFcMZJG",
  "key30": "3PuquagLk1y43RLViuLkHbDzPm3wYJyepVH3xUrryc1oybudyVFCNU7m63uN5mgyLhd8zVrQEEgNW9PfS9au69Vw",
  "key31": "61FxBHp1KHJzsPa93XYNkupTSpZXfYW3T2h3cnYHE1UssWeS8HeT46nPUzkraS3secrS1MhittrHLHkCqdRCBTx9",
  "key32": "3uijqCdYbEXCXMt9LXNw1dkss5jhH9xDwy2DRua4FFtaYRe1JGncVbP22Hmq6hojEajJnER7h3x21XE2TgieaCPx"
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
