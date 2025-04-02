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
    "8WfuMUGJxWCKcXAeehx9h2PtXuH9kRn1wooH6iM7Lye1gvGQ8WzZeTaVvMGnv1Wj13FDe76fVGpDiAc2gF1FWQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zFGQk2rkAJz7U2M2rk4ChhBEakWwUmjq5yCmFSQcgLhPB7gJUZ5M7CjQGsaxWdN2Fj8oc2XsJPcm1KGdoZdBz15",
  "key1": "38rDik42XyUXF6avueVYengsWJPJCt9Czi4BeZwE52WoBKqEmo6esF6wmjtX5PkVh9dunoDWEotFZFAq1Q25zPop",
  "key2": "G6F7YtABH3FLXCQNPSPMKURJMHh6KZhtY2d85F43PkzHie1eKehvPyGUKBmtvERsPh2qYfFQkM4xMkUQzczX3Fa",
  "key3": "5U3iHzxZSUpi5BgGW72cs4ZeGnQvqd89MeTh1JaWGiyUkeepfGUoZYxyBykGdDiSGfVew1UVFwiT1Rs7xgcM9NDM",
  "key4": "2Wt1gDLGfom4jpVrnA6gx4YwUw2usTDWyGtWU8EFPkfAfPJL4rihWiyUabAmrq6rey27GHfnR9GD7vbRnQNbxFXX",
  "key5": "5ezkKtTwsfqdKHtfijLUTAVRCvhmQ1uocC8dWeaJDaNA7GLkLqvtZuFQxNxM4KbcajZ1o4Kd6LxAXgXpHBqmW6Y",
  "key6": "5h84EKGqNFwZdodFA6se8SQRkTjGfK7xM3ZB5bFfpE1zuN1gGtmSHNELX6ihSGzwV9St31EWgTqGLUm5DvRfTmes",
  "key7": "4ncsHDakENL3tfHBAYNci4gzz5W2mMBo8HrF43v287VrzE7My7JDHrpcARNcP7pCJdPsaSqcvpCPKURFUpFEUQ2Y",
  "key8": "3FbcVm38FuK4GAGtA2v4pjJ6zM26aUL4pKJcJtPaD6RvEBU4jGKtvHmKbv9xm862vGrZVbje7191B4AsuJqaTdrf",
  "key9": "2M5ssWXPL2MtaExNBEES6BNaAMwweUZ31PXx36YpSpUyAFM4Wm9SZtUHJD395esna5QLunymkjrWRXjZzRXBHXrM",
  "key10": "4KJLstoYqza6ddKNEd1awpuEJHNWzGQVc2JyMhruECVhLzwBFW2zjFDEsRxZBnsyJcmdQ5P9nndieFJ1hDoAX6bf",
  "key11": "58qcaCxouXR4iNBWywaeszJVEW3kt1VVHaQT4szDWqJLWeLwGCxw7usJFpDyNRvmeCLoA3McR2r3ARiMEBuazB3E",
  "key12": "2DxgkabvgwpDebtVsihRFV6tjPKm3L1vN4W2fZKttipwFYxfpJ3JzHYCxYkLUtPuqycVzv3PfRatJ5ztavhRnzer",
  "key13": "VqfnJLFdMM7TAceqEuzzn1WtcSkxLMJk3AnMuD6FCDirhY87Jr257Jt3kYfDx1MSVPuhR3pnP4jHtWua57WPGqC",
  "key14": "4Vzxd2qD8iNhcoehcpo3Ky9p2ucvqzVx8XM7Lwd1MBEMEHmrWANV6S8N8zpf6t1bRCFLwsAuC9YCLhBqfGHwujn6",
  "key15": "4jnSu45mn61N2AfYYj4AsjPmHAb5S6gsiQRVTjVwvMnzfrwe1A4MR8GG7ACtY4WDKpGQqC61aoiKeHVrEFGtXLpd",
  "key16": "4ArZ2aJX1AeZXX452yHNYnGmmVMTSsruCWzPR718Aw3rmTjbLTbjyuTEKYQdbUiWbEHuKVw4LiybEoFvctiq3A1V",
  "key17": "nJ3Bnv8tvaiTWpfWQ2yj8jmpK9yvqNkYHAsLJiSu8trKwoy4aUnapgeYxcHywMbJaPp7cT9acP5Zi1f7Fbj4HXP",
  "key18": "35uWHiqGh1EK8m9JSPxgC6kRBLyir864RxCRMqccXgPamHCF4znWkMMU6Rro8mgjjvhL9duXxiCkzBvQPzi6BVG7",
  "key19": "284484EWNszCAuE8V2ZFvgmFY1LJCGUctY65Sd5zkirnTBjurtMRkV9SJyM518y6qvc1pJ5wqvYDkWnxpvJDr4Zn",
  "key20": "57vkQC3SKMvSNRFUwp8Modn6a9RDgu23jG5ZV3znXUmQSfh6MzrvjhVKeuEDhhAgbPjFCEW5TBA3ee2AVHvnrozb",
  "key21": "5QdEGX7HZLibFNvcWKLnaXespmP7JPkKYZbJK4cgv71Gn4cMoefaat4UMPYZWLPAzr17ZzaReksWiTrNw9X7Hgh5",
  "key22": "RQyeeWHZvsVFr5WNzAsknDeV51TKn4hQhbic78fdaQdLZYFhhKgPKfUGCsQTuc3kap5wRjTC8xnPS4PjRYxfJRu",
  "key23": "kLGMEu7RVJN5nC5P5piHqC9rzpAmHDcpXLcFQ5PokLFHYGgiNXY9n9WNc1dWukxUcz6qhHEHv9XNnoKMmzFDdfN",
  "key24": "GbXCsw5mRAU76N8qjH2ZPiScjnQUWSXAsH9MuNDfS8XJAtpsiagZT23cbCvaqyAtwJ5M3j8BeWyozzUmMFnd4UN",
  "key25": "UAPd4uSJnbdGQWwqAtSz7chQ9dDyP7NYTHm8rniyzTTZLgNDSx84i34FGiS1LpK4EkRdtwZatwdZANj9JenEiTg",
  "key26": "4NXu9T8w2uUrFVjWhDsyC5CuJ7KgWke1d9b2MPuK8TH1ejvrpwNx4n7mJL25nRoG1K3QxDaPguxPnUwK9cZsRvdL",
  "key27": "4ss5emEgwRn5mPwzXYPhuH4HmJALhUSjX8JBFbwFQXHtzyk247FMYJRNVCarPs9jef1tzum34BBQACiA7aeooDEk",
  "key28": "5WyCn2dU6EB7VepeGcVJayWHLrDGfNGBbJW4k3xhSgd6gqm2NdwNJVCYcQFvryKAxvKWaH8GRHEtcdgcX5beWkZF",
  "key29": "39VU6ES8SmtfTP5M1ynaqjyGQBioqK8v9SEt8N21y4V8Buj14peA16MDufkJdviLCEgdcqaEmGWup3hRJBW2cZ7V",
  "key30": "21Ro46Ui5JDSVu75ffnyiLeQN9zFC1UjapSq5VF22WuRywa2wLTpArjq9QodUZqiKps11CF16A4MPRa2MC9VkNii",
  "key31": "2CRmXdfZ4R44nex15tnmcDfGpwwhPydwBtDj5kFW79EjgK1QsQs5cS6Gjgj8GVZfi869X95RwKbR3FPsHjoreGpM"
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
