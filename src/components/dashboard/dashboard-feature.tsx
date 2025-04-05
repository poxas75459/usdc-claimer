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
    "qxEiFsuLy5WMUAi9vM3NkDZ8gm5jWLthzfSv6o8DTnrCsXRKp7WvQ3LWtMuTMEfHvM6P7xcfx116gz47KCc1u1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sH2DN3a1Bgh8bUTJcU5EvArQaAwEYj7JmeXshfyKhW5uDNBDGdTY2z5QptWUz3AJKynwv9ChnhsCy3aqnZN4zjX",
  "key1": "66Jkn5kty9xo1BTDJ3gJX7oFTafDozY6k36wjwgRMix1cZ2LByddGZATwr5nFAU9qPf3S9QnnmAWBXG2EsASv55c",
  "key2": "3B7PUiKoQjTH5AxeQkDMXZKNuQP4RrVYdz8x4nDwSJ5fTxPi5jEsRVxHxwzRz4T7pAa9a1U8MKH61YP5ZkR3psEg",
  "key3": "2VhZLMwuLLZBgBZSFbYDZozEg2g9arxzXs6Kwz5K27sGa7MMDKaNrsUGAte3Erem1kmi3rvsDkL7dqVnVYk6afLc",
  "key4": "2TEPKFee6kdH8kFxfMC2FTk7EY4b12mx2VYeHuFRVjuoaXSaLjqdvAE9wkpXRsKMmZyVvUErMZgFUpF3b1M1UXvt",
  "key5": "5dT7ZvLTTxB18CcfR6Ny16Be4PnjygRkGnWGHFx8mWfYJfX9wPtVp9hnA4qwpfeQ2ek3pBVFSNRYxPsMPP5mTmpt",
  "key6": "67KGUCnrbjgbQf7BKqoDdeZnD5tmGW5fy5ztXjDQD8U76A7GBt4R64FPGT1HvwDsWQ1DDr238uSnJUFVJLr9eHQP",
  "key7": "5vGTvonxHM4WjbTULkABW3qPrNdZzFDG8EmuR1PDY9smACbXqs4a7MtQroHjWEFdMBHMn3JDnfWrmiz4CMkrbd8V",
  "key8": "47W28uESamMCciCTPe73Lg7hGudDZBA39nVY75yKn7NjngGJaeqCnQ6dXh25bCZ4hjwHgYjQZkGBcNhvZNdmcdXj",
  "key9": "45QEZ5JcDJNKPmUEHa2m8GLoNqKmfVJ9GqtPUufebDbf2BQwyorPuo7Lbhg9FuQvoQSdXP4YZDcJSLfMRj81tDCA",
  "key10": "4A3X1zrPUYssNDoxCRWhcBzRLQuRoMbgcNisoQvCUQCW9vEpJH2bSWwb8xqnxTTsHBXoV99FPKHULSMzg316LQhG",
  "key11": "a5S96dYUv5EpLvDvkWWHToG9a8fVW6AHhkoDgp14GQDeTT8HX4FL2cgq94Ms1UGrSkpGG9hcHducNwssXSNEk47",
  "key12": "3d9vLcyibark4zWf8dm6MkLZKCUe7zTRX1NMMQUhgbSAqhnmYN4EZok4V1wHXNzaNT53pAMSmMzoh3oPFp3W3Y4t",
  "key13": "3jhiPqp9EDsZ8twZuJNdPByxobiffFUUVZAWzJ282mEM5P1EQi62mPAGbnPk3tkegifDqxWfiEmqq8mbfkFekZwo",
  "key14": "QcKwiH9iyXno4GooX7j5trVKEnHBEfysRgaTxDbimbNESo1DajEDZ2tZ6sh73auVU1Q2LcFayUS9DyueNw9xoD5",
  "key15": "3smbkTjWpzMzva8Ya8YFsa3hWLasQJAehyRko4dkcMA4CfM4MDiXZKK98vN5ApPXm7AjaETsif7VMg9gk72x4s63",
  "key16": "bvBBAp5gA34uu6J9ytCxDLnugt61ByqxHkTdCkhxK48ma5TRQvjP72rEuDHkSkzxEdfxSrXtibyyECeg5TqANKQ",
  "key17": "iAGhAwPJ9Mc76MFce78LHupDdhCmV1z1sEX6GHY4gkHTJDMXXoK6SwNAe6f3SwGXgjqFHEEutTCFCT5SASNNukE",
  "key18": "28XBPoaLvrcS5kVoD3zWdqsjeheVrvxveHzshBNKFszWYQhW9DP3ZVULHBi2bR78YtRneYj7gT5ykFEuBsJocMXD",
  "key19": "5PJSMh4GQuq13sKLRD3xPBRtdWYjU8R91vkAxQBPXURQejeAhapdZCzZQiqwmiKPXphS1iDTtRiuBag6rEVaZBaz",
  "key20": "AYFhZ8zAg432CWYqzKf87RHahdeBbsTFBTnYyBhxVoBUJmkmYE7czqpFZMh6Uodpf3Xq2n4YBWKQtfJ72t97trP",
  "key21": "5CcdExmaMggGnKYkeJaUSNrrzGBCVnP8DvSGkc5vdrNmg7Rjo3p1SUjUCebZZz8TwPELJtqpreR6FbzmnBrmqaKU",
  "key22": "4VzhSFjCcBZBp51aPNtPXeK4DMfx9T5xAmKuVyJqm6XXxZi5CeFeErqjDXcv11UbkCY39cFqVD8YXTHzohPNMbRi",
  "key23": "66NDUQyqpJZK94ZFwkAYQtKFeByVDkYqwuhxNY3Kn6tCxPuHygcKKNAQ9yPkiVAVDVUdkvdtzJzTLt68kj2ucqXD",
  "key24": "1eF5gLDMdVZJVyptq6CFp4Mogyb4QvwoEDj5AfFxNRQ8itVQczWa18ugy8QZku48saNB5CmkgWSDoavNDMXesLf",
  "key25": "pMAQE9ZLLqutNWkWKNGbbaYUgotKWJn5JTgg7HoWPXU8g9cDy7ZHq6Wsc2WnnWUzV6FfpLRvUKbyVLDsg1gfU1D",
  "key26": "45pybF4Q6zeyrzGi8zQ16A3Z3nex6uMSkYB9jkiwB7nZrbYv9gCfBtUEbvxGt3W2CZAdb2L3mNVfcMsEZcbrwKrB",
  "key27": "2JxZwBHpMZA9tfgshkba6kmxEYTtSJrk279WpyLHMJR1YBEX3jv9U8sLP1FSdMML6g1ma6wWtcsZubKRsMkNjfC8",
  "key28": "5oFCfYaHRqqTTcXT8ovu3DWiR8FUSqXd46yJPDp6AKF6ADBqLy5Rh7o5oAvMcjUwuQjSQsTRLxfZRpdLZ68wfW7P",
  "key29": "62r1pZff6zQi3nb6QzEWGnaW9CHiUFz8ss8B2oayAkWZUDAmZgdVVRFsZvTfVyfGLjRV75trQDwHN5H37DiC3LWZ",
  "key30": "2Wx8Ruuxv8aATtREfR7FpLKg1Q5A8Nc9sXfWGn7FtPthwkEeDJnz3vx439TK5P9ffJDMo6j8xyy2QRbZQpohsxjQ",
  "key31": "4wiUxX2cuUCdgNL32PkYKScrhgNXByE1SqsR4L25FAF5tfzif8DXxaAw9pChcC51DcbUQZzvqGeQ8dcHErENnSbf",
  "key32": "2wNAdbtJ6cNoE1J6UjdjQsskJWAzCAidtvdRK67yaCfZ8nHVXyDmPxqJYvbAPenkqD9AvkKdXMVrWjVUv5UToz3h",
  "key33": "4b9smbtsrTWUEpeWRJhxrZumgx7ED1vaoiUzahUPNCbg9TMFXjc8YA1kffM4REE9LqM5RmqoB2KCb8rQbZSL32rw",
  "key34": "4kKVE9t4pKfeLiuk5bSrpgh9ca1V6KgigXTLhy2uf8CUNavFEWGMLx7MsndYo9ftihfhjTybaT6XfgWGzYC3keJt",
  "key35": "59aMrGeJXK69YMRF3mgCN9mC2GwuSrWi95U5WxpKhd7f46hTWzvUKXZE92pp2GrzkJQ6F9ytoVr82cA3CoXvU9Gr",
  "key36": "MkTYuAQGDoMsGg2hR8pfZEzMZ12m3JAqr9qmfwWjPv7T1CUs8MRkr5p5eYbYhZqrPibMids2Gn136AC3BwXcWdJ",
  "key37": "5HZ7p6tBGEF9EV9ZAG3CyoKTNifGgbwdbFAcx2TY2w4oAFveJoVnxxqxpru4Li4NiUoxgqW239yjaAamoMPkEBpN",
  "key38": "5kg4vCTpVwBAKjcyZr67MjN2kt5MqaouHATC5RRkZVMSFxfrY44ctgyTwcTm5YWprABah6jZAaWYRHRogZ64JYeX",
  "key39": "hJq7KYNeCBWm8jF6qs41pbc7BdZXYLPPhV6rNdKfYzZG5b6t9jHmUFcZQg6CBfUX8m1fQXsQ7uKmWwnSXRyRc7H",
  "key40": "fyu13tgTYQBd2vUozzChPFpz9kv9P635ssReMBzxcAKCwcXZQVSAaVmZYjDqnHHHeNczGBGiWqfLR9J156EkNYY",
  "key41": "4d5J3Xh5V5YxKbAJSRKTndRU5cYSco9NaDTZ6GZYQEEWT3hHJKaKjoMnLJ85P8fBRBUucwQzf9opGaLjaioja1KF",
  "key42": "3Ymu7UXztvVv6Gr53VoHmgPW7rCNPhGB6QXZwfLd6D6kWDoVNcosN3t2eKcZu8D99KyV6u2rZ8ZYbpgC1bZCpZrv",
  "key43": "5Ay8KU5yFJ7ueLae9mPqzMosxg8kXZQfhmhMYPpzeRzUaZb5fdwm9RYk87qnMBggWzepGuSoJYVLeeVtAsRi2HbC",
  "key44": "34ZJk2ZGJCMeoXUxv7JvCW3cPnXLJhBcYC2G65esZMVn4wSs1A6MU3oS1do3vE7j6wPESr1adWetFS73N4XxXJbM",
  "key45": "3pBqJYkyNnMLk4Yf42a7gybFNUoNgT1vsqubjo6sBAxSXuVRaStMNb4r2zBajwL5ggdU9cMyVPRgaiRmCJr6F8BW",
  "key46": "38taHt2b6bBiwi6WgUq5qbAvaLNwNqQBgjJJPi9QsYdQHefHDbNHtDHQxA4aHJxVpb1Lu2fY3FDkZDbnYt3CMYgw",
  "key47": "5ihZqph5Y9M4BmTz6ieW5iBuDe2HrJVg12jaPFUUssbFBa7zrm2RWcVN9ueLnBm8QhREJA3Z4dghTLWKHu6qDKpJ",
  "key48": "4u7BTsCBBUEQsgpTBQYoqiuJ35AshnkwznfbTzvegLkuTSikTrqeYcK7Ro9TSUvkaW7J4Vebuanm8R7WPSXW5GyZ",
  "key49": "5n4pzZQFokqA1skus1Q9chgVMWajBzJpzgBdSbJmeQCML3rr7uV1fdx4uWDfBPNRMabGXyZs3LZcffGnGHJAA3gP"
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
