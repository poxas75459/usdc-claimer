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
    "Gx9GN4EZ78BnNzLGrRm3SAnFtamCZnwrZfWVjU2AYCTU7ZrJEoGaUJkndP5aWZnU7hK1QCBDUXX2cqeuMSEY6Zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3181dz8vzbgzn3FwnFiNN8mnqnKUn41HPEiCiV21tpp3Lgwm7zNwUdYeEhbx3NjANygohG4BzTNp83KbZovVv68q",
  "key1": "65TkKPoPrxYRfMS771NdstfP58nwxyXa3hkVdyMWQoPVYgvTMgqmnSoTcTyDXo2YWFE9NX3AjihMhANvtZg4yNP7",
  "key2": "3gd3UPSYWfvPsT3X6Jnf6iBH3fihAqdvg31ptdKeteusQnmd1tj48FCSQgYwDcPwG1eorDKhroVWYLyYXgSTwjjh",
  "key3": "37JcPXP9uNnce7gjAaVDpgJubuiadtEEGx8zuDdbsWKzyrSZqUeFYQemPp12L8RT61LKqyq1eJVMUbWDPsai2Ls7",
  "key4": "fUtgZ3FTyGcUbBVMUQphEjbosBPefVfdi6ztxbbSw5NutRwg2GhX4wFF3YjjEqZC7eQ7ywEmfxLfY8Vs7V6MNWf",
  "key5": "5fjyFHxeZjDevhmUv3cWWk8FyVeXh9uUCT4WTAvWfD6CaXYD5ad8eyVhyC5ZpcKhhBq7EhPpJQsbewNsD8t7DPCq",
  "key6": "22VoKs6HPnFH9cq2RMM5L9EZk84Zz7RBZv5Ncn7XgDpcLieVETmvbS3ArUHPRQYKenwGNzcuejzcebrgSN9gsNGu",
  "key7": "3fv21iYsyAfp1wyDHMjEEyWi8rXtgqHPwheoAvU7LNu5d3Wmi3Q2EnD2NRpiNhM8WyjwgsVR7ez7WKNZm4u5fkLi",
  "key8": "3WxQVQ5JD1t5pZ3tziFx8jXSWtMfQPDCW1sCx5JqqjedBc6a6uapi61GzKmhZcfJnb2Pvjqi8URutVpYkL8N8zF2",
  "key9": "5GGX5FvFLfhtEdtw58EVSRBWJqawppD8XtguNWVoHqxC8XV11u8sHYoFw9u8wGAFa9Muw2Yx3kRGq8od6RWXWjzC",
  "key10": "62JfGowz7j2BUmk7QvZCYxXUW3ME45AsDn5VQQU7VEQYRKcVfLodu3zzfDRYGZncyBXe4DYWJoNmDiDjX9WLgFNf",
  "key11": "55hqJPvD5cvCYNZBDYDGffXKRiXWvxJXgUX8nCUGjPeAxrgP2HSPBTwRBRmNC6YszAGEqwCDzmGnpo8pcsnmvi9g",
  "key12": "3N9kfqcfUX3YksbCjNupRS21pTo1BeWstGTSpvhc9Srfpi8RwKRSbuFYgg3irWqLya1K1TtM1u2aRpEEmABRoH36",
  "key13": "48wVR4cHHW4eCfgikLsP5CVGsvN9ibUSRR3yfvftojiZaZezXJ2vZGpn3Exuprk7SDkbf8kYzrmaZCN5RsiuvY6Y",
  "key14": "2zke6uBtXDVuVn5UXuJzGr83ktzRyUq8KvvpCmapwPa8cW4HVtAbDXhHxXN92u8t8p5Z5sRA8b2A1keyyPj5H3WK",
  "key15": "2DhZGJzGDNXaTsbm9iLPErL4Xmvn4v3TD4QUUNTXoc8tE4GH1H1Cp63QUrfZuQq7eEvdYZjHiAh5MvnMSLUCVv3L",
  "key16": "xPAaxerUxoqH7pGv4WBFAR9JLw74rUP3qHZrFnk3HHBDJUfHBXQpemeu741HcaaqJVmqcZZkP7tyvkGiSpQnC4H",
  "key17": "zstL3o7ukaHPU67iVAabh2qRcNfTmFwtWJgMdhKRFdDX2ZbN312AUA8dcFAnJJXztVJ3TGt3AFbDiXLxTpFUZmh",
  "key18": "4NZdM74Fxbb7KCZnKVxwn4kTGMudgwUJM2Uigtcz4q5Hu4VNRqLpbwECW2vMQVnVNw6tQQY1rR5q96L8nZP5qtYP",
  "key19": "4pAWNUZP9FAQ3m6d7PZF1GEjh2ZCTmF8VEXEgWeQTM7Hjvsg6a4ezyfmcR4tSKWR1LMLUD9bF7hNRpVpzh2W3Gtt",
  "key20": "5AqqQardmx8bQoQhgCEUYx9TfrrigsevseWCrQwxBv6xrY4dRTG6zbUjaJ8ojQ1vmP3BAEntw6pNcj3YrkFP92dc",
  "key21": "56kcqS2CDEa6k6wpi4txuejEmwxQ1mC79UWpTxdXQNP7WVdCQhcpvMUTiaiNFjU4bnajtVptZKJnw48UXqSBvmVQ",
  "key22": "5tWs1CVsSGbRfEMhkqCKNXiWUNQG55hnzBakqtDf6pTc2SBbQ3ruZQZu3Zh4M7fYJgoEwPVTwaFLgqVDdeYDJYLv",
  "key23": "5MKukNRdmCqXEMy8XxQEVkc859icqzG3sMBvxJtbspdyRTNpftJCr7QR8A6TMb1c1XMyKcYy3nyg5jh5TFExNtSs",
  "key24": "5KvmjEZzZW3AZeSPGnifk7T7U6BWZNCeanrXmTprHL9Ei8fkyiFUz6MxQrKSpJrPEdHcrQogTi4oMyfKRdaVSrDb",
  "key25": "3wowbnkS9poYT8yn49kbsEdenS3zyvbkW8HG8ooFVesNkgbzSdQ5CQfASFAkb2XTdiEin3L9RBuPPx5Sgxn4MAjV",
  "key26": "2p4d6bzQbVywrJAZVcWXeLaTxUfto5ymJMxN5683RhZa5a8sdLrauRM6qNA22CwuRapPyy8s2yXWyV7Y1LNXPviq",
  "key27": "3jbCehF2jedezmh7cUrCGYY3Xk5AEWwfbYDddtyKD3DeSwHPUQ1GhpqfhgW9RHoGcYuUpxW6JWkxFT3wPnU3XCsG"
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
