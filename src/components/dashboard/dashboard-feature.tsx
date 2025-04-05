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
    "aPUWKcLi5c4ENE4JokViQy1Yeqx4wjw6RETuU16Sn4rGaQnYQV2cuq8Uq2y4tYvjo28Jmwv78HVFcJ569j1kGs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fk8Nr6fThdGotHT1pqqgZWi1CequuFEG1gMq8wHKRTk4DrfNLtzBiZ6QiGFf3bqYwFzd11zzeTYm7VKmBGL7YrZ",
  "key1": "HUrhZdiTJThFKKPYcLukxu35ghSkVqHRX4RtVJqfnYsN8yDtb6hTdc5pY5zn2XDnc7gDKCmUwJixKmc3VmU1VsD",
  "key2": "aZ7AcurMiEszMb715ovUBAc65oNus2CaCMsvpC2UwPvgYx724GMuAe5Dvy3GTnwQ8YVD2itRGkNoFquhedr6t3c",
  "key3": "4KHBo6GVZkkn9k8TLM7kBDniPrkE3gFTd7vg1sS9uXcWnUXqcyCbzwJxX38u1gFPXnGbWEPqVWX62rAm9ftkoqUW",
  "key4": "4QM2VLPsT19x8VcwK1JBXZBo3jN77BD8pLHv34gFKvecsJtCy752x6punjn3imrnHBTM7XSXvPDjKPczXAwXVfhL",
  "key5": "taHusBUou7oWx6aHWBc3xgeuAurLURyQTLceKsgezfhyqDuPGav1ETnfzMqpy17j5CAXcHWVZLJmwaFZXsxrjGd",
  "key6": "2Ug8dJXwGeDkkeNXstaBh8ifSV8SLUXCkLcQonG6CQG7uG7RBGKjRkczx3K3VRDuCbxXfJXGtgMbNM1Ljk1xwvdH",
  "key7": "4FNxUXdHxCPMoMw4qLysAon3vPAnzCXnrkQoMpCQDR45RcQGtzh4j31ShH31w1Xfjk9G8DmpHHTjXbjnDTFfAurG",
  "key8": "5yeHfPCYf17uoL8UD4GR5pWQE1aWJBnJPBJLKNg6ktsP1w453QSJ42J2RXLNrBPxHuGyFC86Um3MtJ5tdnnDUrQW",
  "key9": "2V2EqzJuQs7EivdENnjvBkQymUyvFsBwmUGTs9m4HjyTNM4Dx32ztYhzCj4hy755vVqT5qJy3Qi4YnWmEfA51FS2",
  "key10": "4YNVBCzMCiFwnw59R3Bmi8XkpS2AfSQxkjcFZ9jTzusUaNHq94mPNbH5JVmd5gMnzzcWLBVKUbwcUzNvUiGKVbtk",
  "key11": "n4jWDjDfyxp65bXrfHUd4sjfnXti2qJkfr69cThHoq97a8GEvFgBLLbRUXMURqvsbTKHjgRsw6fG7S6yyijBrgJ",
  "key12": "3qodvXJ3q7mbN3x9ZUbpnmD7Td5N1Qxhqu4h19dkvvqorb9MCL1ENA5GguW6eamK31aGxRgTdgM6MNyxmPDLaZYn",
  "key13": "5dALe7P4buDWEofe1x1r5yGRsYR46DUp4DWssUbcrpEFSodpkmK9c9AtMrwEHdEF6fi9sfN2AwSiNM2X3QLeApFA",
  "key14": "2YUSZUp3fU7TgctERFv9sh5aaWuTDJk4amFscu9qhoy3s5zKSLSNoKfVtJYTqTLb71fVqUtCcE5JDEyQ4owSWCJv",
  "key15": "29Qdvs1UptB6XEoeunFDzbaoJNf2tcLVyk48EvGbMTFNH4ktnjWyFfPrQN9hivVjM1GLThDnqcs6HHVjkTHHx7V8",
  "key16": "4Z87mQWnTFGpro74C4oMo47ALotPcW2DeCLpx6H5WqBjG3TJXDkwxRmGFrqU3WZ8VZjUZk5CaZ1vtiMF2ip45fRs",
  "key17": "2bWft7kANKACLJ4bnnDSPbdAB5x5L2ujvwCYt2Sj6s4uUXD1L6rWYY77WQPRHrfT52n23cGZQAZ9UEv8aTcicm7P",
  "key18": "5eGjy9hfAFA3VTeqStsueabaT6b8eFeY4aVswjzDoKyZ7Zf4de7LCXqYRYCUZgpJ2t2zWvUJGPjJwkRHA376BKjG",
  "key19": "5nMeFxzSWbDBwrBKdHxnnKSRQXeWMaWYZrghuwJ7G9Cs7ycVLxWG7FtUGBuh8yPt8ZL9ULvkfZhbCneNUjc3pKcZ",
  "key20": "46f56sa1VLi9tdy2j58LLApMmF1WF2BABobH5sLU6RqfmqubQtVs87M3Yht9GP2joHBdJqNgYZUHwiDE9onQFTyM",
  "key21": "2TapqcdMDtvDDtNx8bpvVvetqvcSVGwBSc5iY4G1ArQ95fnyMZ5mKQPqC3tddAkEUd4v8ng6sU1bSDQLx5GunNDv",
  "key22": "2fpemrRB5BVLJpuyX5Tz8yyoiu2b9NJ9k2HZbH8P89Spt39237XFf2DMQhwwQHpnb8q5oZhfKbPSDyhQooRcmfwS",
  "key23": "3KworTycv3YD1Sy4wVDSFZkgygCeXeDSLjcwH3Aa5jQESnLB8bogjCRDMa7HVouJBfdGCZztYwgx4GyzTPA4edbT",
  "key24": "3JYuYiH1sacDcYPgHcEDEfvpAGT7a9rCGHK9pcc2xcXzyJjBnq3nyMGYVKg3djtTotwC44jzNhVfichPBN79Dkd2",
  "key25": "3Rp9UAPsim5wPGHrHH6skC7Z4LqZErkDaaZ95ZXvwCvvfFTDYYdy3fSyrtVCW8XvEMGWVAq6uecw8B2PMdTUmYZB",
  "key26": "3LH8EdNRRcVjQw4sow3sZGbKkMvvEa3FWJPTHQFRKUYzja8aTunM96E2MgK8xngk9cVz8iESWNC8ZNyeHUg7yP2J",
  "key27": "32w1J66EV51nYQQgxxZSeX1RVHueGRMRHkbo88R2CYQpb9MMgQM3ahk6jhpk8W3S2jg9fLkhFBdtRssrTSU5Fc38",
  "key28": "62kdaxKfKTxCGK5Yu3buZmBVjinwa1epVwas6MXZVED6tNNvfm26a8dqTf6ydfnc5hu3gEzU2j6NX3qZnDRgGkKW"
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
