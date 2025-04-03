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
    "QgLf49uofUgRDqFizbgMgHxrQA4Gss3JNn75LaoVwE9XBM8UpqGuLbAK1YkNzhLdMMy2BvpWMxxh3YqThkoVopz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DHNVr3so5auEm31qNaiGEZwuV9VPVCPWPtRVcZXudD9nz3cYuYekxBzW8sG7MoV3Q4iwdkw9e58ZeHfGD5RUjC6",
  "key1": "4fqjwUfH2RBGJuyw73bK4vPpeaX2SEMQvF2jXNWEBxSYvWeykLnEou15pU6EA9oubsdrAQNjyEb7QsD7gfr1f6nn",
  "key2": "5Wzp8kJSNL5jDvw6hMCoiUAMrxWpYV7DK8BEDv9AmniDYLfFsmmD2fvHo3xkz9QGCUzedkxGtev8WiAndNstJFpd",
  "key3": "4NxA9t5s7BnbJnFRMWKhHLFiqVvTUx183EsrkwP6VUiKZ6wkts22mHa9J9c82qpPdnRUC6KpPnMk6PBwRqgXUAMh",
  "key4": "2AYvfDyPphNeqA1KxqNR9CyfkMxVGJWeJTue1iw4RgKfeNJp5bmd94e9Vq1csCT7tSs96EHivjuAZVmpEpHAFis8",
  "key5": "3GxhorCzDqDTWGfnobSTXnVPmkpzWWNRocR3XR1d9VitdrFA8L7VWwCFoVN5h9PKMzkRzRsT3qodtoyoA9Now4ba",
  "key6": "3rQw11yVmy4587DoVt2fW4gtsuBNDXQJ9Z9Grp3EAioNBNPNL94tZo9b7MMpXku4T6vbcRkmhMjaWbwr7tpXHHBk",
  "key7": "bMRSHM5rsG8Z6CU5XtUyWixDhoQdTQ3bz84bshTbWNmArWgdvhfpFpftRngcMtK6J6WiyYb6HSgLJFM4Gnsg7xM",
  "key8": "2XyfqwDNs6gBLfL25skdkZWLJKdvXgnJfPrAh8C6uMaDiK7i7nQWC1qKoFAVCVWE6KaV976KzhuAKMfhqApqhsmd",
  "key9": "3KoNJ559aP1pMdDyUkLkqBhmN1iQkVpqtkvzmdjFFKB3oFbVxNFZedhmcreDmNhHVFBzEh3mFizv3WxUiPT8tpmi",
  "key10": "n73pgKReC7dLP8ZoUk5F1YGvib57PoJGJasVNyqkAVWHpg66xC48NkpxfVETgRQF6jFVQwvWW2ZxMLzWUcna2wz",
  "key11": "2PmCRBXrbNoB6cThJk5B2tvXJ6Yg651gaXoK6BTrPFjySc1jA7qMhGEQUbWpQwpsNVpeyMuUux7RSbpMSxPTU5yY",
  "key12": "24Tm7HVRXq1W9hgm2BysFwzet55zHoiAggWxHueZeWuFh8e7Zh8D8U4jfzWwJnfnzRrvPMFfHsdKnXQkYmx1Y3jw",
  "key13": "3PczM2gBthhMVEvy47Dzknkc5psPpwtPWPChRN4PG9N7FXgiKJDUEiwBCfb77mhAnh1MTRAA6xwNU8jv4G1EjHMq",
  "key14": "4YyZjctBmS2Y8bbVbmpxeURUtPgsjJYcGmLHarXjLHX3Jt9GTncg4be9QJNKSRLfCvGA33rqcZL9yqjpgQgqsiNp",
  "key15": "4fgNxTnkePW4tmVssrenJrHPBHf9CdVzt9isnWhAAvHaprL6Rd4N7wPcnZuUW1dZ1GWPhfq4o7HEuVRHK8qo29zK",
  "key16": "3pmCvVXqB6BRzqtRVv4MZc91BkfoPpNraLhVQhsZBFxiBs6qdzGVko8Jw1sEfcWv7NBNUGAQtFEdZaRopzBC6gCM",
  "key17": "rmHxroC5VLBUSJt29PYrmnRyNYCSt3NZxx2D56bVyPEMWqJmkz7nhMgyj8TyhDyUaUsSDSFAbypAoC1WLezQiBX",
  "key18": "4bBtKs8qSV6NVCUphSs8btmKc1bc9otwTLSPDKkkJVQrSHg3Z2gYw3w1qjryhJ4dG3oRCiu5t1GjWrdsNXtLHVN",
  "key19": "7LSU7nRZ2g5y5KqPYDHxcw14zZKFuBYXvbRSYczqjZuRCEftKEnZRKAusHz9akyEqscmX4MoT6b5quanwLigkEG",
  "key20": "3axqE4bQMgjpyzNtAqSH5fuDpfLqKSSY1iSQGznVc83hs3PfjEgCHTnUh6RVhMmkLLJcUaNC1iZdFdVzoXH3DkJa",
  "key21": "5upH69U4Rjf9ddsK88kdJZhHn8w248CgqjfufF8VVHJjeMTsXNkkMfjz37VgMnHGkJkBxEjzTFvKY3VQVRDyGP8z",
  "key22": "tJiFb9wHLZg7YycCVoPtD9ubmfJgsQY49p1MDZ4rTNCgWCZejxz54f1ReKFLPGYe7GAKpnFCDSz6WmW5XhifxFh",
  "key23": "3uwoMoz6Cq2XS1JtgyZeJUAqba5MLP9ULU4nzen3b3pU22bZh3sLSwA2zTZrnkw61jFnDeBiEPQ35GhAKYarZSvn",
  "key24": "3bbLEaQoGHHeFSNJqQpCF5mqgNR318A5ZYswkhfA54CXsBCZskqCTe73xRHzkajTGDLxHRG8EpFgyhWSK3A5Kb2y",
  "key25": "52dRciu34ALoPYgJY5E4rCg2YXdjBKvTXR8mVCmJ9cfcFMMJ5A5TLw6MMJg5AdhF3U2AAkaBsL1q8PSyZL9Fkkxe",
  "key26": "4FZxk26q7CDVNUTYQM6SDhVMhb2Q2DCJruJTxiBwuDyMxt2mwbhKAEAoXbfWZDPb1ZsuVF6nNyk4JxXhTtgA8v67",
  "key27": "2b3rPYphABaCirDjdfmJR7ZBJHrpXQUjjRTzZEf58ZDmMQNWupiCcw6xJz1ZCpSDU2phbuBBbZHD82E7XSx1jzHz"
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
