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
    "3BEyo3vDVfyF8DkCugtV6MK2rjwrbEgDJ3JV4pCUYxPPANdAzEhFNh86kTk7gF5k54qSUxnTZTf4nP75DjyC1Yuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25o1i3ri7iiQ7PUbvmza63pvs8suxADQATL3iafCh6Eb4VUfZYJyegZxoeBgEHte4LfUTcZ6T1CKSYAF7m6LN8Xs",
  "key1": "5B6B5xEdxD5a3X2DtnteipxZpTiYCDQugC5gi4nFJ2KGZEyxKr55cDWUJcWefvMEZWyrJZuAaKqE7Q6qbJpQiFnH",
  "key2": "26r5eWSUpGGtCXvyhfVHFTBQu1LEthPcA8P6q52gTkyZmkdw6DkN7NUEcWF3BnvtCrQLdcEEnH2UDwJDWotxLBqD",
  "key3": "25fb2wWF9gBTMmccoX8t5KcZ9vpSN3J9xfoTSHejCbdVZgRA7TCjs15FEu7raj8BKREA5xjLKvbCAuGUbBLar94m",
  "key4": "4ujcxrwxm6UZFb779p7cEcfptRjRVQWmZ7ks4d8b76aeMsbFo5rhKu7c968atkSSWuyNmHtAGwVn5VzmJKSVA9FL",
  "key5": "2tjm6M1k7GKrCsZCmj4wWn9B2SrfoijfEMcjHxNbvtdFsbJ4eih9McLXo2Vs66QPHemPK4JuveRwX6u8ccFWNhMr",
  "key6": "eAMM19k1yLZuFTgKQaRzMvCnFsjQesT1GVeFD8qANWVeH3f99wGRw87yC1GpthL8PouqqzfNhCacukgCk1EzVQv",
  "key7": "DNFB25e6qN8r19hv5bpVp3u5C54qU1iBH31an83GuX2HtvsePiVcPuXqqM8FKTM3yH7sYEajGs7JDt66nfYw1q3",
  "key8": "4RX3PMGCnZAAroSB1FTzNJ513dSvj3pbJvoTZywUq5ChWe3nnJQxU8RgQ7A1LPF5gunuTrBqzcUFrgTrDKt9Jzac",
  "key9": "2EZvyTs36eEqmWswnDwQyWeZsH2GXXpMt32AcmGWg88cA1kf1LzacHMhwyHaT2e2xEH5TeF9UF8Pz27vmztGCkTZ",
  "key10": "3HETJn4uRGxLw3oYKA9kpMX43yt9PtaxFztT7ATbYxWFjgufyfBtCzz6jLr313LmbJf7ubBWwzLfAfKHZryr4uyT",
  "key11": "3gTCmRwLniT17hAZ8nLhHPeMYjPyThS19xEdoeDC9X2hr4YNdX9biwA6KufGvYXJZ8gHkzUu2MJuWq44gEG8K2Ky",
  "key12": "2Cvp113wmP3HoxYEgU5uA9FJWZMM9j4dajaTsXhBXChtXN2PFfrhyC5DaZFmmACS4YfGrws31vRnjhc1Seeym99h",
  "key13": "5P3QRezvjVziEKxQUBBnSyG7FEkyyFfQgGGiGBRCCFaaQJQGJdqq4mcobHnjcZUv7vxfMV8PqocZHHHEuwDWDU3h",
  "key14": "48wsg5CkKK5feRuTj6F6QjNp8SAUQNcrKjCNE2auktRtw3PcXgrKTH4yNfkiR4KCcyk6kARaugADPTWMNUBUEdGe",
  "key15": "TBeevNJa4g4nHSgERM2hHXiLX925CAQe3WAMq7z1JvaZiToY46caccKkWAyenbNDu8apfkEEBsftn73bLbx72tT",
  "key16": "464DgQAAr4AWmbWs3jouRPj3Xha5s4wKArdD3KnDvuBjK82mNuvNhPVKsFQz39yAkZ9vvqa4ZFqT2kJTs7hrZCNg",
  "key17": "2QfeZBA2TxVBEVtUNh16aHe6vLdk2tJnekN2CQDjL9t4MbpCymKPDeN68mJZbxaVaXyzDa7H6Qw48Y8ceUBFybB3",
  "key18": "5y42EeRTBeq9Qtv9wdQiHqgpCm7mA6GTCAuQgTbsCVKXLrkyFdP7LLPMvX5yrmZ1pMLHrSiYK4c3GNyk9ZXBB1KV",
  "key19": "2ZBWhkDSS3unorpf1F2eabZkmbQqEnPChPHogtrwzYVGrjE2ZcYSSYSE2oR9Wej1MsaAiSY5cMKSjTn99iajVrL4",
  "key20": "jme8JJc4oavdWJzZkADpc5CxVywV54he7vWpvQ9ozmK1W8bmNK2adPX9NiACvT4aPtnAGNfj4DKAKLgGXSPBVur",
  "key21": "61SnsCuMDBJNnDHnP4JmLxVLCDrVRjUvNTDYw69bDYWJffZJCxes4jWYZzsFJdDq6mrWoNoXySfQvJxtSvdghiSm",
  "key22": "vRYdLFHVuhJG5LYAvr6aA4ZZZ2ZmwNybquqHvG8zfHsqVzSM1NWhLidDPeDNvTMUmcLXoC42CkY47nMCVBu7eQe",
  "key23": "64RcfXjQpJW1Jp9m5S8xwoCH5WxBXQToELc75cf4qSDgLBPN77FuoQ74i3d5rA56iV2LoN1oaSrUVCvePAZExpgV",
  "key24": "y6NESuUGxzBXhU9pVPauESrdbWap45c2BFFFfCH9qtE8zyozWu3pAw4qB394DJ2wGqmDJxaXXsrCWs69txdYM2t"
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
