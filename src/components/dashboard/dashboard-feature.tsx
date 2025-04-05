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
    "5hwarqNJ5diEgVHz84Lm1yA5Mu7jy3GN53y6sucLzqFkK8TcG5Nz4FyoLojeyJHg1sRV3VzREBDbU5MtRgbYetEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xDQDNY8wsNjWrtaK71pe1FeAR3bAaBTHWBdcxJdnrEGYCYaLzdCAqmZUeEF2RFb7whK3LqGLZhb3zaGhmFTXEUX",
  "key1": "3iJLZHs335dyZppsim8Ap5dpNMNoVcDJSvTmCQpd4Kkk9LLsfRcubFBzyHp3nVzEjveMiM59Pu492ADjGSbNSMQS",
  "key2": "3SgQnnRTFpWUCwMqxV8WDRKKmhioND6q25vZVzU8fwcTvpV7r1Cak183Xf13tXGn23HdG2eFLXacJYEUVdWB7MmP",
  "key3": "2sq5ZnDibdXG7eBBf6YGk7Au7WYuh5Egg5xxX2zxAwTb9wYW4qkaiP3yXX52L7NfbPvFjffu1sa7QkEqJBgcdNvS",
  "key4": "5PhHsKZm2uuze6XbUXNJjQyyikWf3n9dkgaxyrYMTj4SQUq4iK5xEsVAMc8eYxFAgCGJpwNsUDUBy96WQ2bsHyBP",
  "key5": "2h2ctR65ayNy9pbzsgnZM8vVmrfiXCwmy1JYjATbmeL1kQUXr9pDia6FwcfCoTb49XpkeNa3ii6oEeE6sfTNzF73",
  "key6": "5aU1b1Q8aR6RUNucbT2Zr5Zed1j36yJqhevEYpT6foKDWk3VjkFPi1jSLD4dSwnSjY8bwJTYgsfoF7zkBVLQP4PJ",
  "key7": "2sCdTCFbafYqePTB5ePgNqidQ6kHCgRAVCtCdbyqAV6hSY6V1NHqiaiaQV4DVgKxh51McuUM2XMnEkkZka2pqiCi",
  "key8": "4iFcbGkhGSn5VG6y5J19ixrPdE8rZQjQTyy6Fh9wJN1BtCbiuHYMr5966AmZu3hikbmJh8LhdpBJusx4mGEnESYw",
  "key9": "4rW8Uw4xcEkoCd7XYAx8RUa3WqBNZJVBxFSZZHVD1VrgCXiDmnZey1KGYgiENsrqbxXVQdbA1DmDmAykmkmVvdQ6",
  "key10": "572pRg1koYqfczBsm2TzKEYDfrBZADL8sgGmoJ5vmsDCYNQEdC6eK4347Y3WebuDfSptVY9ZiLPhWJSznH1Uv7T5",
  "key11": "Zs4ihnmkpdqzhy4Pcx7RZ1QG3YgcDP1PTA1ikvJPpz6mLt4ca6zeChwERbW5zapVKHP26RZsd63s8Mr41RCuTa1",
  "key12": "3Fb8zzhTRX8ApPYBScRsYwYw2JtYJN9e27LBnwSfUjHaMe5twXY6cidiQToPFfwJmvKxEUbP14hP5et3SFnCCXy3",
  "key13": "3R6gGUTCQSDWVgqN4GiNcSFeWtjjiFqNejyzTmJay6PpUd4x2LJ7uMP21hhtWL2FBVu4TETJBpZqEUFokctnLUPv",
  "key14": "4h4JWnYDJN6p8qG1yk2SCDq2JGX6x1ETgZqZBJDLDBvoTCfAKy9ADyxXx3ikDCyjRHjq5BJMqsrhHQ6YfE4KF92G",
  "key15": "2vw42GdEffd3erUMz1UKFBZL9rk93mfRzbRBgNZRMjvPM1tKhcWfHNGKgaLHJ49zjZ3i6WfFbwtyNB78HRZr5NV",
  "key16": "2e3YzLySw5zFnxHSRh4t6CYUbNR1PGFXcL7xJVhMEk96Ha96XDknMhCtYLzgPXwdtLRzuASixnhSE4RhnYstYcgh",
  "key17": "3xoLftZ648k2AeSjZP4oibkVenbFea1nwpQMas36iuZhkhzqhAsTwvicsL43bp6CmBEomv3hPzsAMWq8hww6hQxx",
  "key18": "3sVmcKEn9fPaVRPscBNiEb2KHLS8oFfoR5U3fHY93z5FHVF1C1ZEE72nXd1cvmKwLeh3jMN4j5x5U3yGSPr5oJis",
  "key19": "4rcJNRyBkAHmV3j5wjSGBXA4pj7u8BQJa7BiYdYndAixgU2iMGTxkXjva4NA77byspq1oWVVASyzRcx1fMCTJ4An",
  "key20": "4Fr3a67xRhSq1D8Tv3DUEBuHqYWc7crguTtYQ4Y3HiJJY8Y4fdv8gTNtYgq8rb4B7CJ4xThVAAgyTCzV5wMhMwe8",
  "key21": "cgC8Jg1eYzueqD4MZuUxpSwhTZJkW6RWww9VfpnBwfHx5g4pcwLFkp5kJnYD9TrXqJcDPubrywcgphU5RuvA6qd",
  "key22": "9esVxezZnKPnbNxGnF89J4nnp1hedETGQxvAP1prGaFwRBjbVXLCUaiUpcj79T4husGfHrAEbrfy8evmSAjC88n",
  "key23": "3YkrhZXwRWbHYZZ24ZVTsCpFdddRe5bo7Hbu8mEddKF1on7tknosd5s7bchunkrSXRccWm5QoFXbNNqCp1eLvHbw",
  "key24": "3V1qhxTPcT782YykG1es624kz72WXsxkmHsm4ASxa6fMHkLdwn7vC9SJ6yEgQJrQhHsND3hwZNkbWv3aYVZvsqnk",
  "key25": "441jwp9qFAnuQM4Qq6g3cuQcX8s9bSRWW6wxJ7dmfxE9sika6mGitSiTGZDdSD267M3gw25SLaQP3J53PXefYbA4",
  "key26": "5m48WfCoozZFGgnGiEaKuwY3b2Ls1DHXjEUryRwVXeT61zbCTRfdAFY6YwwL6JEd4FYJBK4YFscv8s8eijeJ6urL",
  "key27": "3wPWkmfjquMLGae2yVZFjd4Hn3522AzFbeyBmzbAQgB4a4yeZukpEPDAt9zVo1CyBoyQtxnfADN9S85kDBbP58iV",
  "key28": "Xzv5VC8YqgBBXMJZfzuA6WCADmkNsZcSwfefPh2etuZQQ2vTo5sKirPaKQf1it3yNnZVekaNeXAC24iVUnnN3nf",
  "key29": "3K9r7VubzeYRSJbhV3dPbU2a8LNwgjwQqE1UxepYWLKodmpmNTSEyQDQqo5j6rGzFSbuZwAkcnJFRt2mHvy1sChY",
  "key30": "3zVJZ7ogjRv4VK1eYmT1S2psnGg2QixUrJdHUBQVAWVHQjw9yURXuVMBDEaE8T6LgKK6AtyYhaMLcyCdjyxHV1Wm",
  "key31": "2ccFXZScv9jkHEXMmn812GWoDveXa9vdPv7R45T8WpYrYjPAG3YNGAQkwBCtQd3WLuC39AbPUu2re4r9VVrro5sh",
  "key32": "4atufwXqrckz447LAYyYXxEDNF1gsMh1yufN8xtQRprfjWNZdjyikcaY6JtbVLGh97rArWes3baonJetVjQZstXD",
  "key33": "49iipZWo2PAsrKhzcLoMbxkry6LG8xMBKQiqJZrLWL6PhZorw1iC9qpDEpVuf3mijYdU7BR5s4gaqy58ssDucsKj"
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
