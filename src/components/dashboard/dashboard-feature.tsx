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
    "3r2ndyZieSzvFHEoR6FdrUdcQ18xYY2PfBf5b7XcED63j9Us7imdjVTyvD7eMGnX7k6G2A9LcaPDkgEEy1LNPJaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V7NWA2HwPniqUEEQhPu1Zw7T1Nqz1cVp1r23wCaDsQ5WzzUQ99wdMRShmbEHbtAjZ2fSFVLpDj3vTiYxNLp3vDG",
  "key1": "4FH1qpcJhQEpMqu7atspka9f7xzRMhoo2zeTRpUbRDLer88yewhs6M8xVUB5g2h8UHRn7EAyFZhDmRYA7vm1bTK",
  "key2": "NLbpqkay87wvcjWmBgaqLSfMqqnupZAAYA58adcp4yFDyv7s2HgjyDb1a5SnQvAjHpBrzdau9HeH1kigx8s1tpq",
  "key3": "4uwvnSbJRaby2YYdPTXjV9Lq5FnMVTea3frdCvRZiPYUNGJfk8Ewe4gvx4yxfXYU5mrGUNSMU5baFs41jRooDAA9",
  "key4": "26yMRKgJo4CvzFPkXWfqVFT8ktdHtFDyEGTEp5sjuTsSLZaKZ2Fv8s2FX37qnfz9iFyW9oJfXqV3mwaWNw5QVj2Y",
  "key5": "4LAsh1Cevb4iwTmM5H21qAkPhxdyrkUEiSmRdVMH4QS7RraF9SxYsHebz7bavBX7q2kEwx3EETtGrDDU8Nk9BLSM",
  "key6": "2eQhN2uQD3cXpyvdnrGy2gwfyFvzK3bZWa5peXg2QCt5qmCwwenQo78CHBvn8PYw8dLgXJCCxDGsM3YhYwwEAxNw",
  "key7": "55Q3ruezuo2a3PrYJcXSizwi3secMuKKE75YuZzrRNnugw63Yn8bnx6v6e6kxzfDt2bx3kuV4DJ3S7hSDbwSiidq",
  "key8": "4mmkK22edFQMFp8CkTLCrsvfB8QVzakpJpNJ66dwWLPwizWvgP9QUyJkfP6oeRhfeTvjNMb9rWT3Pqdpj7ziK1tQ",
  "key9": "jx6fJzcCyRsZVgEHDREWYAWg88HXWJaGvrtXvn3rkDBZPzbBJefSgrpPgZBLDztaBzVoQjMT1zKyb35wbzBZUj2",
  "key10": "5QD37ybtbUxtac2EykkW3siQ4hRnKDdREUGwpTtrPWEV5PFaYYJueXwtw4pSiS3YafZwAB6BNEbGMTvVdb8j7Ptf",
  "key11": "5nSAdppMtg25FvRz88iJgcFhi6bgQFJENVvF9Sn55Zx73ixswdXt1VVLBGBvcd3dbuNB6ukw9iLiHRXGshzvE2J2",
  "key12": "Q3STtG6ymU52qp88AbUHcWRfoj9uvhEXPnBGWbS2AFzCneMQ4WaJGqTXJgNLs5S9JJbWHPjpwNNGHPrqEypbwwc",
  "key13": "3PhXuyB3LPkaobNJ7DAKAHNmaLD2aFxBCe1Cxmi2uF6MfC6sDEibQ1dR7NU1y6KK2GMqixuKS42HWcm12CW2oiTk",
  "key14": "3nCamdqUqq3a7cj9Qf73T3dwZiKLhgmsD9xRLXg4Kqb2LPNUykBefjSkcSQcokPr8eCMfZdHG3qpQcchiuRENML2",
  "key15": "3789o7ay2BXPcf56dZmbzBZkZGv927wkLAmT3ioJGfrbmHYtXXP5UQux7Jdamm3KPpCpSk9c1KjJxWEe92xRwns1",
  "key16": "5iupii2tXvzmdXoRFjmuBACgBmPP9fUnaetY4k3g2FB8xEE3exdzUWd2L6b3wg8uSnZguavVoferu9v6SXtjGkcS",
  "key17": "52RPzZkdZfdsTpMWk5HovpTtrEnh23UC3d16P2YKnKKmSTC5cJKtAASDUzjE2Vs4XQrpqqtBNgb8tHXgtfkYAaBp",
  "key18": "3CToGHXCh3yMhgzN4uKDpqWesPDVqpFYdzJCPvpjfpetKM724znjP8XaXi2dF2QhVDk1BrGV9wn2FS85Ni3zUkML",
  "key19": "VNSme32vtRtrRzf32V2P5RsLvnmhap18ZNnywXq98rsbmN9QPXcqLkiE5ETYwbREQTTAgJ15efNdj2FRhcfEWNB",
  "key20": "2Jg7kfrtGp7pC6b14m4KSKFqtKNrtyksd7TXP5k1Jvvbi6kgD6PmCzx7Pv2gAusXVysMh4PTNcUGWnRqECwEkmQN",
  "key21": "46zjSit2Cg9oVCiQoMJyS4GNSroiZT3C2wRJU7aMMrJq5jUPyWnt1yDbcGJqBmQUW49XCCppM8ApmN4oUyA6mhGm",
  "key22": "5ncKmLKAw3TN5uLtKHMQL2Ja9zW3tKJkQ2wUMzsieEqQkSQEuo3oivuDH9Gd7iJcscayZ3Cd9HM1nAVPMxEVHHkv",
  "key23": "3V3VAmGoMDiJ8kzwLvqZvExn28BJBna9e7mgT96Q2AzpdacNcB2AYgM9Uq6CPHLrnmnFkRXcWGtpTWDR8C6qBKbR",
  "key24": "34SU4q3QR3V2UsTa4SLr8GfDCeHLaBMFAxYV9r7ernBcyfk9WMGTr3ufxtTnCWZxrJCPPsdrmCKnToNRW5Bns8Hd",
  "key25": "2mfwfh1ErEvrwxtJ75x7x56wwPSUapiqJJBygXzwEJFr9X1gk4QcJUkTCK4S45GhZoG3RBUvdQPJxcCrcKsoBVkG"
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
