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
    "2LqBUQ3x4tczqTvRzXz9ehEv5C8me2yvBZivVNfGvnTnPkJEMVWkmmbHuiUd9xYuRwz2DyrVrEk2pi6ezYWDDvhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cUBucs8KhaewAEEuwarCZ2imzGDRLB9F76pn28v2NRnXD5pFQgpYTUAWDEERbnsEXERicdBw15kq8FEKakpfQXf",
  "key1": "vcVu8P1PRwhAK9UaJrZVKiQCFXawbGzPkx1L1K796DU82fvAdp35ArUh7UQmKMHsNpXrhA8W7EYiCVt2MRnerhD",
  "key2": "M536KKDkLY1a1WwrYEZVA191uKBbhUp9xBtoUVJymB7cGfwofCGumRzddaPzB9ddS7cvLMVXCqkhwcXDbTEdB34",
  "key3": "3WKnMDegW6sYFrqXGuhhTvFF7X7ELfwkR795r56fbkmWZeyYYsSmfKBsvxXhMS1GRAup5L7XE62ZpVSvcfkgiwHP",
  "key4": "Ve34xQxX1AzWYsF7ZoKdawA2Jx3mPiFiBU3bXKniGokXzEHqRb7UubEEZeANZXT5VYPo3w9B1foLvDD8LBQwMJc",
  "key5": "47WWgAKYhFPnj22qviGWtoxrGznnj7mXHxhH9bMHLnL1kbFceiigxnvqmj8AQwZvqgyfFgHFFFjip1tW2sJhR3Hj",
  "key6": "3xFjVGN1DrJxPmdw4frEqgbu4o2evcEMU3e2X3GsoxbH6svaauU3K3VcACNjnZVnVvpWvoK9PPVDo4heMBbzkkcf",
  "key7": "2hfoPk8p3bSxteQ1WDbWRWzhWc8MxWcqmuv21NZpWPhQL1kNPbkkAN8a2aZSJd3CGkxEW9rzU6GbGMiTtimQscef",
  "key8": "57wHKeUuPdvfqoHgnAwqFzcw9LSSAHf4z3SejNagxKCDaAmEj2mjRAMAijGUbYSzuWFz7pVFTNoV1bjGVLANWGSh",
  "key9": "2VPwWbHkUaDMUc7Rg6KhAMfiKTyCJJAAhDtrxwQ11BTnBegZcffY54g651vpGaNGvy2iPH3T89szV9djKRR58XyX",
  "key10": "FRJm5VwZF9DMC1ccPm5cZpGHSJ12H9KbTeVruzzYpWQNNzu1t46ecnAg2PDD5wS3QtkpHyGoCdQokFn3E2Fq4Po",
  "key11": "2Cx7d9fi3hYbSc77JbMR9yLUrRXx64dU9g5Xf4p8XeTfh9NpWYzxSr2C2QaHdQpeykkRYR3RF6Sbht4MxGyqB6Xg",
  "key12": "2ff4HzSb9icTA2HBujiiqGUtikzzwmkGVuv1KUjMu4cwyWuhNBak7rwCfbj5PTK8Lh1zjkRz5H9yGXnYqRGLnFXT",
  "key13": "3xJ4wPzUNszfcCKaWbiwhDXenpjqY2SoDKuAu6tHiAsJvUVuuTr32LZy3QMYxjKhjzU78tSEaa4SUj6hoDE8tXph",
  "key14": "57iRACPNhEcKf17miQMBP62z6PCv8SLsNwuqpcZmGTXGjrEhCxQhc93Fn9WzvDHRtuBdaNPJMKhFGhoPwAbDzCq4",
  "key15": "6Psr2KLdXjGE31uiqScpPe8MFw2gp1jkwsiUydoCveiBpz9v6RErTeFctcN3qUSxeauversXiVruhETsPbYxj55",
  "key16": "3RFJf6d5n4fTY5Ts4s5GojTTyGSDcdMKPXeGNwXob8YEko6NuLhe35Qomcme9v3Y9hYRixn86A1UL15vBkDbyEP5",
  "key17": "24jQ73d5YvRe6XoRx3tshsEXTTCtZ92NntpoFZcRo9yFgAagMaff5L8JE2e2uSpqoW4PL6Y1pfBQhEtqvRptRPr4",
  "key18": "3LKC4SNEDuXNRawrWwcQQmCj2nZKiJM6xyatMweA2q5NssfbWhtKHSXcTeoN43Knh1rcxyGzzvVHVh9h2iTNfuY9",
  "key19": "2xmgRpHtG2rSqx4bNvQ97ci1pd2pBoAkbC8HLHgPt8vhTrZW71X2xW7dEnsNwLVSBLJ21Gz8oGEfBX3X3aPa9fCE",
  "key20": "4f9zj7vzjQmar1ZBvDJQuSoDeaCnLTypTWdaqkj9KyTosoiyJHuG1PDz88jtrYqCztQmdr5hGkeAR3BgczoGSxh2",
  "key21": "8YrQN97FAnCnTGT1QSTS1z1KEzob2UFdnDppfVwJBUQr2g8e8jEcHrUNUNE5UVVF5ZoCtXPQPXkVa3tUafjSYhL",
  "key22": "44aSTTFVRMxmCxEDnNegDD4p5gETijmHrsfsRtFHuAvQKzjMbkvxUJrrGzUDptrUshrcAaCHD7zDxaoLNGyADz4m",
  "key23": "3z8RRrrPsRjvi9VSV5z69QzE2jJUetzQtYt9dXB3HbGSvpjtKR4D77hrKH2whiPyLyYUSrgHFKJUTUND815jZ8qL",
  "key24": "58dqRa7hxPWcay9YEbBkH22Zo1fMZqmwLfAJ7EqSUCfU5cvc2TWBYwDqGe3r1dWXWnPVgqGLSZ3voJ9aweeW2ybo",
  "key25": "4jvkwidFsukE3WhtPgqPMM7sJX6jxqqh5KDUD1XZSahF7WhGVoCuJ7X4Sg3f9PWymVwCuW7XmbwwkQUoEckchMqM",
  "key26": "zk9XEF9dZpkQPdmTLzYE5sxCtXzjY3rNcwwT2MSiDwCRUQFi4XD8KTWPwo8WHZwLrkatsChKkRFm4kKxJTMwmyF",
  "key27": "4jqsUR1cT2eTXS7fVmpoyNMRV8Fu6BgutpLCDQD9Uvvycy74iZujTMoSAB3EYUBnDyc65cWiJSbS1BU792yUZmhP",
  "key28": "3RFxxawtNaXnnKZqS48ajtpS4paLP4b7yoRrKczwhuuZHBzdNxCRXFgobL15PtfB4dAME3n3qCkdtH96kyr2wybr",
  "key29": "4VcenDacE9iGvrZLUtwgoMKz1LnmMnKo3Mph7zJELNDmgeBZvdbGk8gNSez9EZcdowVjncGaN2Tu2URa4t5bzjzn"
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
