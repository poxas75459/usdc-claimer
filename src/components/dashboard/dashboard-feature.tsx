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
    "3sWrpxukJaX8qZrdsgWLrtvH4jW2NjVu1WJDSySRLdhF31ADA2XzAF4RQVD5vTzdHnpCBiJHbAB5oX2Y1pftov14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eSc7PEWfj6SqvsS44PHBc98ytGEzKtSDgy3j7Y7YWG7ogydyMBTLms4TBbn5gXw7KYsPyRbYcwQLvdCtrAro7nd",
  "key1": "pE4K1osENKKJvQ2ABTuv9RQFaHmX2fhqV4roAT8vF9dNGQA6SkbJNTNvwC6dadKTpHv9VueyZLthK5etBbM5LVm",
  "key2": "3cTTPx5Qc4nELz92mTbRzvfeECYZpSb2rc38vSV7SwrLmzQ9ncwP6v7a4hV5sggKgbD9xxE9dgwoDXAgbMHEGx3d",
  "key3": "38iAiDoNEjceCK2VuHPdfMTNLMWrA88D25HeH8585bH87cBrvGACAVdGp3RWfgcsTwXLGYzhcvbzZAzMaQRBbUBW",
  "key4": "26imSJNuS9WU1rZhrVnPRLXz2xBhTVRkRZXDRkamjMbdcMB4ygyTJudAJkjD8vuZE3x7dLLVEqZtrKJo1QJ4F9Zd",
  "key5": "mccyUxgfxusi88bfXQZvSdnvayapjW25ggsEXFTt3x9ndRuQCEaCnQz7J3CLhXgvrkxDzHbWKyZbBSEcwwkd36k",
  "key6": "5pV5BcNyApWb27zX69VtCXrYygv186DbUs13i24m2BjJmfzPwMHFDdMb79MG2togjpd3i5jCurQgWFAP3x4QwDqp",
  "key7": "36kYRGaK7VLUbPK5UxWSXtbgjJR9MsuSNpTSaDQE1eRrsaCjrYJNXa1t4EKbPUmFP9R3eGjtMhjV3p9q27hpoDfC",
  "key8": "26jokH94W7ZzA4RfuetysGTmiqtRzRxMzxFtrifDZVAELBgqswHHTpPCaLWgvQVPryjKPdFk5LeFDjqegf4eEAJr",
  "key9": "51nMdNwXBs7Nbgbp8ejKfkr1P17bYLLaRaaXzwcWF5ymM1rAAujtKtDsGUjwgceiGAhSLCqXxbdfGRfuqa2yj89H",
  "key10": "5JPDuHt7hE2nuWuzHBq7sQGz8oHqouV1LVMAFjVyeFYdL8Di8QtLaeDmbxhHsR4P9sbjE747qQr9BwQugYdJ1U4d",
  "key11": "nG1Wym9RPSHAN2nM9yvTqkrsUarKG8mkn8vyBRRwkUw6aS9FkSGdGmBmjoZDEMivL4dmADDsFw3eHiuEgPn6bWG",
  "key12": "2ePCRwT6LohdVUzeUXSMWFB63EB5uLSgxEc2ARcoRyvBFfUb2qx9VG8khLGUVSzh6Nzu95thqtePh3rKGe88PBut",
  "key13": "5K3RVkn7AXcA8wGQjtvYkj1QQKVmSiR5ohrprU8Xwr3Cj5yMH9Md5ASrmPCoQvvnNxsUfYRGehWEeASdo65PzHaa",
  "key14": "3oPF35JNjPxq77dmPtT2qFKfLUV4qLQKPmByqHrF5v3Lp2vPtyCXrrgddbyZ3f52tKtbdzMLNY8qEeDa5pQW3Eev",
  "key15": "51eDD6B1ozx66QRnV9mZBUuQBtwJBU7dcvxegMGf1TedtbSqrA6RKinhyncpe8zTBtn3Y7nQVa8qaVyDB1vY8rrP",
  "key16": "5pAxWJVaJm7MLye1qLjnEYm6H157buuPHR2JD5Q4UM5SX2Zet5QMghUoxocxWHrBWgBN3FdaLJ9JWEwjvkF7snQL",
  "key17": "3ZV5aeNmwU84tPFGHn4Nwk5RVQLZ8WEeBpjQbUq3NMzPyHYxdF6V1CCNxrBUkkTCmYD4PdmVBC2MeN3y1GGKbxfo",
  "key18": "Dsi6ZwFYq8gxdkB4YW25ciiMNTmFY5LPNvEpAxFb65Dg56j3w18qnpU94DxuNDXd8m9DzwAVbCuhiPnH1yHeE2K",
  "key19": "cQ7e42hbq1XsKbYWnnozpKMU3VDsjcjuMb24Y1fwGhtCeLsVu8hk2qrY12cCCexELo4834HpJk7mdJWmR2rj6p7",
  "key20": "5XCN43F94sd1qxqGA1h6JtpxeHCBxUM16VTApi3M9b5PRmqf3FbziBaifhqn6kZAz95juaVhjwvWnF5kpwrxqsHU",
  "key21": "5MZDyoaCxsKLnn2bfhbe7uTmXumVwU27GscucjQmaDf9US7Mo6xUp6bcfozCpPPweK279eyEKuzPmA9SK1x6sfLq",
  "key22": "3BKsZUovbVrYehtVt44w3cxQPMMHokNLbqAoTUUVzRiGmiyThNgZqtRRJgBUn4qn1dop32VwJYuXuUz3isTfrnpE",
  "key23": "7pizzkGYeiLLnhGhGfzmKmepMkiAh2zDczWu9N85bnL6RUWUCHv5HszMF2tbdV3uXgWYqLMTYb7cvZRHPQcnRgq",
  "key24": "5EZXsujeTtuTRkvvEfAcesPm4cMrn5FZxRoZBrjSzVQw6A2DuE42dYxmJEmjkVMtei7oiA778vjiW7Uy5msBb747",
  "key25": "4QBkHHiUgTwgBKeyG6oHHGvoDo24QZqUsXJV6ii8AMoSrNWJDEtaaps4xGLAtersXqfvVMvuGTR8NmEMNm9RH965",
  "key26": "5ZKkFmUwTEa22G2CTFMNZ12t53eEg7wM6rBZxAKjfnvF31BvXrZJbpomsPy95j7Wbt48hnQ1qsCYSXWtvMMbmtcK",
  "key27": "2XMRbqY4RczjpGxw8Bo9y8TA9D61XKuE2UZxCqH2JQr53qwRWPpBRgYF1odukXgghGXP3uRg1da8q7iDRNgnFvnf",
  "key28": "5XXSgY2Q7eCnZoeej4Q46HMuAm4MU2TYMLzvDcbW5LGoGbuxQ5rYiKmWH7FYHCa2bXpuBBm6UBW8acRWLRgNzcGy",
  "key29": "2ZsjJew6hCcAfPYhV6J3mNVfqMmp2RoyWmTbkZvj9rvm3DAa2L5AWGjcYrSwQKfS3q49i9MmXxcAdMMx2jHLM3gQ",
  "key30": "3ewksysoFfDcdq1VvG4wV66ysor1vQkJRRPWnCFxxnS91nExAs9WtJ59J5U2p45xcAnKPmuoHsTXc4hrN4xuH8to",
  "key31": "5LB1Ytyxhr9vdYrVN5zLeRre8TiJdTBrgHeZzRrA6weFdvGFYgs4YcxMdBs3TVWRLjqase8C5g5aXaL3w8K52Fjy",
  "key32": "4mx4ppGum9uY8mDgjhYpzSXoJwQ4VehMScsg3iryyy3RJGqVMicyEgVjED9xCC3H3PyEZM4w4TAT466xkF2YZYko",
  "key33": "2xsgdrDz3YvYUcAxuYzpJuuf7a9ieiDUwruTvnZFi3PPtqgjTzs2gwGggz9B38bsnsMGhs2hmwra8TjX6baCp1HK",
  "key34": "5dGmvDZjfidT2RE9duYbe9rRHiMLXqTav6GpJpAhntx5pFSq5Qbftt49aLmsrg8nGLPwP3JmYZkdJNrtDEojAanc",
  "key35": "hAnPZmf67NznNsT1JDupUZAn11ynfvS33cWsv7q1pwanHGwywqX19HQjJQ4cy6oEbdpLMrQuv7eixZYWz4H64mP",
  "key36": "4SeqBgttHGYjaKniMnGFk3XnxKjQwvZDC1DcJEGmj7hMDbVZhYDy5yQHzQuJXbQgRsft6dPn9gqcEFdXLYnwmmx1",
  "key37": "5EXcEfShNQb3CbWEeAb3cw9zvcxQr7B2kjG3hkj3KBRM4nqeM44ZBbNuxAa7PV4dKVsvBzNAtj1F9iVtMRSQ9nDy",
  "key38": "h624rWAECVbzzwxddQdhvCGzwVvjbkATRc7RDdhd8ueGECf9YVYexKhmZoGkea95Nk62RsDoCc8WG3nZuaHU6cm"
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
