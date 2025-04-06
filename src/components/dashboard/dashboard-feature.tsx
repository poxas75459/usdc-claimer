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
    "5hc6anjySGUqamBKn4qpHnwxQacRcmJJAQpVoTrb8UqjkdyVACfyfKN9X7n2bh8uqXo4xuB9UnrBfCy2iXi6EVCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y3dT8UqQutDn7TawrRcN9YKopc3HPaJ25cRDUSNpr7MvtWWWPaP7xZEmCuzF5fF2RJ8QyDnZqQCUDs4et6Lbqmo",
  "key1": "3ejqBMpAFLcQ44yUbSPakLyyVHF9VzC3U5aR6LCGfbs5YfLUaErR96i98hKGA8RBnWgdjdNWxerATAXZZcGwZ522",
  "key2": "5B11Wj2xWyWzKAHYymbwDR1qJ6HGWizw3qzSEcPjw9zCNSFh6X8Nb6DitWHiC59snU26TeTrr9LiQk4iGCQx5q32",
  "key3": "4TrhRnQ1yvhmrrFy1zhGqMdaFFsxZydcx3Pw7fchoVaFSSVLp5vZmxwkRHgBCZMEybCJKzhbp1xM4MNt2nGjsbxP",
  "key4": "35S52d4HyWNN4WSm9mw3gTHQJvjqZzVd2BuK6pphiaiTXvJVBghvxf5oKZm2CFyySjb2g7qFwYV3vTfvomZdEqpi",
  "key5": "68ZmV6a3Np3TCFk91w6czxB4MhuaQfQ81AWFCpPnox7n6CtFyUA4tMoiXxLcHfVSqF3qhCTc37kcSHE2P1qcr58",
  "key6": "41TFBdRqwPRDFGCfXGYScCqij8TXTZiui6Cd5UfxRus5WLbq8hy3JiQYo9LQhjT16ocBA4TVrrRkgPVdDo2ZLTZw",
  "key7": "3TJDqizsijmvSZYrvjtikdW2t16z1yFEmsauskKnQ8EdcaWwKpk89CHzWHeaFjHnYyNM1temcDGoooVR5taGrixt",
  "key8": "4r71bSuCmK9kZDW2pTtJv24PY9mL9o3W42D45Assn3uAx2yLwDmSHtBMf4SQY9SU43wKKgtgzaMz1yFpF3Wpai6D",
  "key9": "2pSmbKYzvkYPa7x37nxuKHmwN2R3m3DBwjxuCBGoC96fms2wZjEzHZVZgpuKxUjAPHWBdLStQXGtgA7PvQkVRjWD",
  "key10": "599EgvdX1cR5hcYteJ8ce79R6rnVJ1KsmntbrL6GXxYvLDT28xNPcdi3jFJdQkGbc82L2sxrLDdpN1ra7peWH3fF",
  "key11": "31Xbd493JzdiuNfCC7B4wpApNkK15MxJByX7BfUzojq9Bv9yMArvBvjnhwvds8aq5YdjjrrF9gqRSnJuZJkg9ugw",
  "key12": "3XjcrS5VaE7at7VnfGYn5hySU1xDFLbB6GjPHMRMJihUfe8B8ArWkRtRME7yf5gYAXuXbikkE49uCuKxmDdvbu1j",
  "key13": "5HrB5hbPUBMnEVMitrEB7fv111uUZToChXUzdNa6AkxX8RGqiQWoJpbw5cp6yJqR7aXpp1SPUnP9BNLKaiUqMK8T",
  "key14": "27LLoZJ5qKVZMPnUm2vUAhz8khjdJPeKxsWJKKNcTySFwcjUamtj4AX1guUN5zboQpoF8sq9PZCDzfXctJ8bVuqg",
  "key15": "2SD2MGcEZhJcoaqQVtpXrmQBGUDdfBqm6LmpZ6gi8quBGNPHpWCHe5sXAqiyTz6K1NpjJD1WksRvUTf4BQRMoFtw",
  "key16": "2VfhrZe2oxKvJQCRJcYAPDDF4KXWtCoCDMMd6BqiVmWqheWsavbfAKB1VUFF4NLAmybfLyUiJWqUY98igQhUW4Lk",
  "key17": "4MgFhQ5N3QkZ2kQfuxJmgZo4MRCD3ufidngWCc8YLxZhSKTUuyAVZBbKrF2pKtx73r3pxWisFy1VHKY11NmD8z4Y",
  "key18": "3Bf3KN4YHX52ddRv2Ya814ducGbQxuZ6E1Dtzf5qt7fry3Msb2DoH27JjUt5tWGcwHdSkn8Xrt2ke9Xmg7CZokrX",
  "key19": "3Q7WzfvVaAqs5Nk446LaJhqmqxpySLZkLx2xxAxZWquHf315u54iLbJQiMZSZNP4Nq1ss3g9QeJNzswHQdjweshR",
  "key20": "5uAFP9dHh2qmTSfXEAPPZzUPW64bHp7bSSRHK88jdRx6XTVg9A68g5ffeRMoBisyHDSNgeGEHUVYz46DjrvxEtmM",
  "key21": "5n1ne5R9chxyXCk1DjTRoG2R4FCWz9NZPMsersFtZoPx6hSi7MvyS6S9Mvu6ZViE3Th4kNEuK5TZgKgMgH5dbWCY",
  "key22": "53SKcLpaiFKT1EQkKpL8ZLDpB5D6uzSypX8VsKSD9CLLFYxYZH3ZrHyJqwiiiw1scujUxoCm63fTNaQk3Mb6o2rD",
  "key23": "3YzXN4auyPgrKE59Fy4erseKLNTQhAWaW4y5BsPrybLRfRzV4V5SD8g8dCAtpitrpLXktXwiFmR2eKMzfoSGLst1",
  "key24": "55j2EJ4kUw9hqpA9Kpx3MhgeewaEHuwbMyjfmTjy4yVsemDG8nr2SDBCTjthpk2YiiDHaVFPXtQvn35DC9V98Ctw",
  "key25": "2qssarytrBoH9wHYoc2g4vmJ4GpL4zUQA58hzkVouce9mURiHtTfdkVXz2zcZg2z7RXQkQ3yypLWex88fNdn5Jbh",
  "key26": "34Ap62ELRsN1ha4Lf2bpa3NYW4QFuEnz73mardn3fnTLydQE8RKoqb5VjhLmCPEkLik86MSWUjrsbqZKfdTysZgg",
  "key27": "4AoVmY7X5AZBSAcf3NFuNKRur1MpMzARFFyLXpSopPeRSzzwnANzFSRffyc9uGBYWZtcapu2BXq9uZQuPmH7z8Zp",
  "key28": "5zXnp5PDyC27Kj7g44psug5yLyz3XNRpR1yL2LmUrMK1Y5Za74USyWLYT9mPGKhSMuMYRNdD7rVcxS8FYeYHZW7r",
  "key29": "2C887JDFhviUJzDUvU1zy356ot9yzgmPtShHKTJKLT6kc9dzfzrsomGZhZBAMyo3thTMBSNRUZHR7S4ZK5Vp1j1"
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
