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
    "2DebzGwiaKACZvrRvapspi6CL2qPJi78Kn459QueRZufwDrwrnmeifFpCR49ZqTVJFRZZpu71cuTf26fkRhJDCYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VkWVF6hoFjRh2UDCxRLDDE1QrByRw8NrAUoTK1XCeFUK5xnXiADPp7JwBnSB87SUyCRvtMzCNcjaM9JTwM346uz",
  "key1": "5izFvcFyWjZAfNaV424dbncAWqN92bXqag2jugFS8KRNE2gfprFDkBCeYgzd7woXTTivotfrofQA3EbiozzoLD41",
  "key2": "5ijeA17N2g3dX9hXk5fV9uc7kw9142cqt9F1387TsJAnyG5u3fEMTwpBiTqv2MFWHJ3gwDQU4F7BQ2vCydVxohPH",
  "key3": "4F9ku3VGygjktjYJQNjvj6C4ZUN6BohuzsC6obHhDTKHWQkXJF67w5z3Wb5QYnZCvc8MXhzsWTeuhS5sL2opQZx2",
  "key4": "DPLMzVU5a3mF23X5RvwhwwBMHukbFnNsxXxxifemRVKUx2Qzrbndpvtmpqet8qijhgaq4KZGscjTxnyKwthQyoY",
  "key5": "5drSkis23bPoofLDW1ZrETfHvnkCBR9MNCBECfEgRyZYZdL1sqgsA4kpU3riejNP7Jas3HkPzieQs47B6qibZK9V",
  "key6": "EXiq2aEEi6oa3Rjin7Cje9YaLJTp5Ub3gwb5NRNvFxzu3cwfsZvym1TBW8hRtLxUywwcZj3YKCEYFayPq2XcKSz",
  "key7": "5uGD3ewWZtBsagS7wicSguuLpBmvtZwzR7MUS5tUGdXyVtj5pkgAzGoRoYt2Z68VRrq94gQtPeBZ3kEzueqVy1xq",
  "key8": "2PGwPkwmHAK63QSDHVceaUua6y71QKu71P6SS4RSPpnxCtGXNDhNhKhh3UkAhpBEQeMtBrY1p6r6XMW8yDsacgH1",
  "key9": "29BL3YQfiG1ZAhSnZutDBpaJSWwHTtq55jZeM2BPnAWiGVRmrwXgcFENEw9YeZPHUvKKsjXjBX5LH5dWgxN31QJV",
  "key10": "4VkFnyPUyaEGbU8PEcLMaAkySMsHfRijTneaWx1WcRhWmi7TJvE6MRRjGW2coKchNAYFY9gVNQEpdH6nHdLpPUEx",
  "key11": "2P1WKSyADA3R7RexjgkdjxTEVkrbhoTSwiAx5kvHPY96eBiqoLcmMzLdkNmxagGuU7LxYXLVU1ihPzyLt8MRDMiU",
  "key12": "2UMcEf4L8DnXBRCyTqdkYZuxkTC8U4TnvngBaWG7W93XUqKFMpH6vWFs8pSHx4QhjhsxyFoecXU5N5GGE2YXPRSw",
  "key13": "5aETs3zJ8UPFTefwnFcEtZDWUMxbuUjFGwhoWvgDRNhSCkri5vPq1grwHwSWDggAeGhCVpQ3qLsWCWBvTnoBiUDe",
  "key14": "9HsijJ35ZopC8JDp1bc4fEzEUrZPD7KP2gGVaCRYZtyGBpjGsVgCLwcHAEtgvJqf9qgqSHa4i6pUsSgvgJfxUFT",
  "key15": "3GEjmSvoRUeUdVVnb7e4vpS3qH78b6SpduNgmp2tNvvswiaG8uX9RnS4NZ4jZAZmvMbNtNyUMFWC9pCKeJBpHakJ",
  "key16": "2Us7wJm1QGuitGNtwi3Hd5n5NnchNFbG9cJLsWrkZWYea69hAa4cBnmrGq9CwVfv29ByTK5qxYBeM3LDmZwJi1x9",
  "key17": "2og5SCWz7F6xnQdX59txjGRxPHcCu78SpdmSpF593TjN9PMmD8y7mAWZsqt8FBjECKMDTWxyHiAZJk2xrs9phW6",
  "key18": "4Cs9KNAhRUoBm6YRH8v6E6gyWVD3Mddv2geDdyEj6VyBS3xHm9Pp7bUQcAL6Jjv115484j7XUNkWGaKc6CiVCr3J",
  "key19": "2iyGpFMjEbVNqfromkTBqkcgpgcvdVnfTnTqDuqRwLHdETuPBoGTnGDekwbyE3kz6VpdovB3anGyMik9Bai55iL2",
  "key20": "3HVCf6iBsFAqHfdWeBou4DbYYnrZNTp8gMPJCcsz15rZRt8eCoDZyffqXxEsgtr1dSr4jq7HYrDtTqdbDZNDEg4g",
  "key21": "2nNsuK6UhYuzjVgu4G4q6bNRZ6T6EpmRHFrgPi9xNBKgibWDjjASWxP7ieSVHJUSgfZNHSBJUi8ibCkKa48rZuzT",
  "key22": "2QgdXpPKmBn7qDMhp4ha95oT77tgQBEWzmXuy4SE88njgToEfGU5PG3NbSiHrAgno82cvdAsRYFoCKBN85u5BNkM",
  "key23": "5M7rbSgNv3qtnRSdWLkaGPGpRmhcGeLTRonuooFNBG78GUVWn2u4sneadMy7B6UWLDboejaqkTm3R1gxL8qzvwyT",
  "key24": "5Boy1wdSdrYGa7ymmc4TDhMAFMr7J6UJrmXpdjBj3itgQ9F6QCTJLm1c958psUB2DL8GYSkLePb245N7JCBpVfXD",
  "key25": "53eSVfsGwXT73JZ9JphZWfTP7mgdLqPqBjismTQurLD36bJQkmDR67LxWA1622NssMeGSucV6Hb9Qcm6bfLeBJtn",
  "key26": "4swiFto3vhvZuyFqcD4ek4cFffjqqDGT3KW6hsrYVpS31LN9zw95Eu4dVLBvP2ggkkqXuTk6p5kPuoXQqw2MTLhv",
  "key27": "2wLWpgs33YNTtXAFgkYrtxq82y3C5KPWyp1ANsy42NR7FtVAYb6cyixPUFoZ3gp5FMebHmKVDUc9R5vAzoiKqgLX",
  "key28": "dDNrFJwZETCvGcxZvoAQDAWg2kuH8qhzdpRTocU22sKSfgkZn1TGsiTmtgnu6n4wWJ6QZZDfMz2djGrPutLFtjM"
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
