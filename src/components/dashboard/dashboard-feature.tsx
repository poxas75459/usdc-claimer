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
    "2MecqWnFirNksZQ8iBaUM4n25wYaZZx3LRBhQXgcBrKxNwSnR2sCEuJSVAyKNyXraXQimqdV7pdWcMMs59uaGhDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bWvUqvVDWb2AeS2iBP1myBs4UvJNEmCATeHT7vXHePdsnWrN24wUaqUUCp6YSyw2SPvNmmK9DuimUPZvmx64ZKC",
  "key1": "3YKEcVSJFir7EmeS2wokuS4xUPhUpqwvypB956F6dMb6Ne77ncoUrtNfcc3uiBqEWJ2KSUEbhrtZXrLL1sPoguRX",
  "key2": "5giNLwyYE1Qdjdnkyw6sBjzTv5acmdTePGNiAefEVw1ohGrZWSQaQHcXG6i6Rr6ab1sTjMQ2qSq1gYcD3ZPbe3M5",
  "key3": "2tvDzKzomUjW5NmD6arHN2HvMdJsihSEZgD8PjxjuHaBiZh6kXembgfje2LcyCyNFwr5DxBpEB35U6RrxGS8vCx3",
  "key4": "3Y3Us8PzFdWo2x6wHKwryMYCu1jE4xuaxGhsJBYWxfGFZ3h3A5eLSCkZxEfpi7FjUBaMWiE5iFghcoEdnmSHUQ5o",
  "key5": "5wbk8JF3LHA4PkozaupYxj4a4DaVWnVhSsVbhr18qczXpGxCAgLDxnspdK56zZFBnbE2cNGDppqXWGSRXAxcNa87",
  "key6": "2xcKMBsT9ds8VdaCiP6vDrpA6of4EUT5AjyhQUw7AViqQ8m9YTSaGTZ3pyASSznFmMJobReabpYXh5HdiU1U5qZE",
  "key7": "5ZKPkX7xZ8j5tV3c1ZT6n4rwhuwgXCF8ypceTn7AMez9NcjfLYKRdmUis9Q6ej3ZpftF2oJp7nkAjJiqCqNuXAyG",
  "key8": "3WnLksfQyDKmJmxBhKy2J1QVt4xttALvUPzz4fq9quPiWtPecgwSgiXdaCwnTtkAuYHZ9WUbdZEvuXU2dxVw342p",
  "key9": "2BRMUFWk3HtW2hWYmgRcAKmX7MpwHakfSeBWwDQDjAvgffzgbQAKfzvMmq3b3aQz7C4mCfz51ntvKAdBJ4WMzgVW",
  "key10": "4GTQcR1viqE8YZ4Qv4sg567Acde2TouApatW9Nhh8GboQ2aRLV747vKaatpve7LQcJrU4ChReBnFCQ42cSmFCMpK",
  "key11": "22oxubV5RJTQtd7J4kWky9WihN3ME7s1pFN8G3BzyhEAzFKKntaFZ4RvBM7GURASue6rS8sEmNVr7t88PEEgZtX1",
  "key12": "5bj7USPahqKF6wBBmSEWh7T7LQKzYaXYQybp1MERXAJxGSwuryJJq9N9bmnZnhSjk6xXmnTWTHF9w2ZXoCSYAkz4",
  "key13": "46LfhvfKk5RsXGhwqF9eN96SVBBif4QxweWG1vmeUZPEcVvWjXG2ovndSSMaKJ2ofGc8nnNZGEwC1ZDqSqsxRvCX",
  "key14": "kBwPdCXajobuzfpFeX7J1ZcNyC2Y9bTkNxMjWAp72vjLoLmCn2L9coC5ZKqYkkxHyC7RpvRYaDtpoPsSFDFDvtK",
  "key15": "2Az97mLJRdWdhF8u7nvcJtVXwcg5s2nvrteQjsQg7Gxzax6E4zntQAUZL9NAMhLFxFB9trLxBgMjgxb3SYs2Goih",
  "key16": "epUb2AhjtQWCppcRmD3tXLEVckBfbvRT7vb9dgLsAceyVm92bzhEWSfw4PcYuU1wZM5tnY4DN3h2WDa3WQd7caF",
  "key17": "XuBoP1mxFisRERPDBCuXJdrFiJm1SUvpnMWhqRZbwVFnqP2tZLx8VCUY3orKEaUT9wg3VbsHX9PDvhsccDcWKQx",
  "key18": "44ezG76cJg23ZDMVMsqjU2Kg3uL8ThwXnBgWNHPdE3Sj4LQ5DdKrzjCApZ2uSoKdcjFTF5EyddoXpWciCBGQM6id",
  "key19": "3Dxgf7X2Lf1dYG4wXAVjnbWnhDEQKK6EC39B9TFCSppqHXUcXeBcL1f72kWjkoN8DW4Ez8aHtwHwfwDmxmfcHrvb",
  "key20": "2F9fJDdwDG4XNRfgY3nued3LhQZNjr3xZYR2rMcurt4JmJBJ2oQTVQGo7BezCE9cCDLuHYFH29WaSKc8zPpyWGjo",
  "key21": "5YxKkkeX4tFKfZY2GsqoosUQXzVE7zo7kt9xsi5ox4Mvi8Sxp6kn5haxtJBArXoHdTZa7s7hYmYnMtem2rTedU4W",
  "key22": "2r3zvYhjjaTyPNPWvLdLkrGAkaGM8asa3GPao375utoAvcpXQzUCqQ53P2SdZBj4pFSzn2UTid6HQYhP6gEYVSU9",
  "key23": "2PtNPFewEjGLPNwgGb37sFhtaf8Fie2ch4Q6Qd6meS3z3oVYpu64Pji7R4rpEP4J7zzsE31S1k3mv92QKrkZp5nx",
  "key24": "5QzhhUNHor94yznkqnW3fZ3BYHHPp96jbdJB1AA6dvrpbhgTbvRGvjcBNNhbNuiTC4Gh7Ufa9UYwTCbk1udcxJMC",
  "key25": "5CF5LRtFF1sW9vPpgkuvWp2RpBx4Ae8apJXAX6yV7PFWdYvjk3D88rfPycf2yNNME1XoHpnK8MmZmDexczqSLzrz",
  "key26": "CYqkxRG3qrf7KM3VWsUBQmHwgq6JdxwahbhoxZnUBjezYxTpPbb1gE4LzKFdNzowdkecnaxxH5hiT9TLfuDrDp8",
  "key27": "32HopenQFLJYgZBv2x11qgA6LvfC5LJbnjoK8Ug1QEGMyso1WpHykeQv9FLNV4BuPQ2hUQKqnFw2Ra5smkzSvpih",
  "key28": "2BryQWgEpyvSpSTqsjqWgGybth9fsq7XjNE4kzQx33bL2j3bBV1RHTqahtiMSfxGbfxcna8CjSEVPDyeNsc6Gz9o",
  "key29": "2qv9crXuovBJaet48CyoXfJkYnJzhppDTK86WgLU5LQW84od3Kriou9dCGziivqpF2nWY7t1FFz6giFsDcLjAq3"
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
