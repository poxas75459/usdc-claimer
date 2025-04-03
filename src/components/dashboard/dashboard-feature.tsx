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
    "2VGJarBXfWwGiVKYmsWmfkEPiZPcGDCsF9BWEapif57Y8YqHSr8J4LHCKiudZ9ykwutiDWfpxtoNHb2x1kb1XKUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FoHaDJ5JeasN5fPhEn5pabHTLW7HVYGBhrhU6xqA64uWA9bGa1sHXUbnPLcwkQoBid1yVBCD7QkswftZVbvKvWq",
  "key1": "2bERh2kR3uHxdmBGaEcPqvhDtFJbEFAL9XNFCdfrihGLzVRJkyua5sTitGhLu7rnxynTDwaiASwUSRbd7SkSggDU",
  "key2": "32RUsw41kqtMWoRmZWtZ7dqMZB2J6W7bdrVbUww3d5V2HETiEJNSoZrXUyP9rFhX8yLuNDPFLvRnTRuMV9grpe4F",
  "key3": "Mboh9vzNNdvtpkCyuBsgMmnWHvzZMrRU4C3WQ1sVBEDfTvqUr4HLohffUqXGKmb3kdZ3ti3aBfdp13qkXYTxHZ2",
  "key4": "3528Y9EmkR165PiNs5YrSsZk8pstsNWGARzoaDMRkzHJLDyEGewTwHfJt25mhYkGUTdYzgbdy42ELgknQ5sstowF",
  "key5": "2xjPtr6fUYju3USXwifddKnpuZT8oZ5qHnxkN3KtBhtXY8L8ugciR4HFmg1AuuY3hEESi86DvQWwdgysNr8jcrqT",
  "key6": "2Vvq3iVH4sjZujJzoFFMdV11i7YwbFreNCw1i8oqJxDRMGfHUQd9hfdQ2GJZXa38mn2riaEPqQ3EzFiWRvKMvaK8",
  "key7": "u2Ddek2Fgwo5JSgFG7LPcv3bM9kEBErarNygN2F5aPvpABMtiiD9iFFafweqzJ4WMyDe8C2ian2NDPUcUzEcFAN",
  "key8": "64Q8PVzbQZed5J5F6nwBK57EtMBMYaGr5rrXMkE7anGdkDcQkom37wzxaZHhtabuMSgjDXTmY8Pbj3Bmu6f7YiHX",
  "key9": "36oDyzSVkycFccMkKiaHLm7gTrnXvmEvWkCPbdzoTV3nXDZ5W1zWY7NK2xCPkYK8VgK6hAiriWq3J382rkBZLwN3",
  "key10": "2GXF2irMzM5X9n2hBDGUvGnz9RzfidArCdXqtFwNsK5tvB8LXa7L3VYCdwfP6t3w1zeQHwe83pJpgWSSgsf5aCrH",
  "key11": "27cWbLvPqo94rSjjaz4bKSshF2kUw1sMeDaY4Y4CuhPCU6GeJB5nE5u5F6RSzAgTaMXvUvKS6kpA4pKQF2NXyXnW",
  "key12": "4GduPG9ZrsKbnkKuX73WT5iSwDCAgxwFC67mBBMc8hHSxEB1p6TxBQZN2ibhVkJxHLwuxpdg6eLwB9eQs9Wxom3a",
  "key13": "3jR9J467nBvfMMowrQ1LjB4nGkxYD7hbfhYcSrfGsPCEGFM7NS5rfbNsqEz9dyXMNuCK8jZqoDn1Q4YsZ7bzsurt",
  "key14": "47Yh9ZEYojWC47apwDmVPyR8sRhxm41vwMDACmpujCumW7PyUviKjzHpMgRmZADu3fpu6zRk6HPtaWA3UmygFt4y",
  "key15": "5gE54aL7VzEnXkStdUK2EbrN4j57qYTpoFLVLSPtJUC9Mjg8jKQsjiZTtB6Hv5hh2T1URsf8Mqaa54yXUDhRrN4D",
  "key16": "22a1yzX7ZKPDz9MewbQM9BVu8qDtAC3YayrTBdSE2shZn6iav1DyszR8dQTSJip1FHwNfdE844J8e98dM7hTmhF4",
  "key17": "3Jigxsjq8svAwdvkgxNGwNKaLdkE8WjwwpxLJsTjzi4xYSPgfzdaXQHmQmSQh57J1m262siHEra49g7rmANRRMjq",
  "key18": "3RkkKyzjADorm6maC7dU9wxmjREkdFUwDd3WCuAn3zqVN8Mv2TYEpoF8JtnqVU75zZkjLUBDqesyimMn5i3Mb1Cp",
  "key19": "43PXANb95skvcPm5uAsg4CrR1ysF8ervQDPHoCshv1mi7Dg8NaSxVvUUjo57HgfqR2pR9KcysGf4bX1VWNFYrehj",
  "key20": "M7Hw311CgjggRM3EEwXaeSErFmn665t2ofJgC8r8YjyvSD8S1UHE1smV5k3Q6P2tXSYyZHyXG4UoeprgQwE1bKR",
  "key21": "3dG9k1Hzk9y5PxwCz5SE628u9pHAFwedi8FT2d1oyy3PZwLZRmC4Vi4rVCh9LPDmLbYA6GboMjL2BY6MTD21BJSy",
  "key22": "3B5zEj7otsk4eoNAxDpiDZuzNLojYCW6fSxoPJdWUBYcpuskJZhJrre8VM7G63FXWtCmciwhU5Te2PEJK9wm78dH",
  "key23": "3emZzVPaGvZP6QQjvLhqvd5tWknohLaHa12fYyFFzRKGnQqjL3Lm9fdc1nbwpVwVqvFnHDf1D7tLYM8CLTof4fat",
  "key24": "2enevSyVBhCjj4RyrsCBxxqr43Zq3qYVThsaiCfAqdwUUuF6svJD4qZZm1JW5ySnghEFdkCDZ9TA1bUB16h1ZXRU",
  "key25": "2rV1knszS1rgZ945PjXp1cBvLPjUx3rTb96t3NVe4z742qXPVaj4km6rU7JEANXCEH8ZpBP69h8pRpySNn7gvEtx",
  "key26": "Dox3mPF9cFEWAjETxH5y6ZeDyB3HcmAWrpyzBKJjXvfNyQkiNCSjVcQJz2oJHy2Ln9V6GxoQnTG5jRtESFNMqAH",
  "key27": "3zq4SNPhxm5USr33fXRohJhWPmVAHtUwGddZpkSvTLX1DZukAdsUVE2nKowg6ZzdfV41779a4namMo2NF3FQ3bKJ",
  "key28": "4Pzma1RD5g6LYV7eo6pX2FAboRYwDNJbfDCrNQD2bEa1uSm2kPrhoKaLepuhEqzGt14ETFX9S9x3DsFYSMj8vQCY",
  "key29": "55TdS9gzed6PNC9Qkqe3eGrGWBo7HaESLomfda3XvDAxhqAo8jj7ADV9orcfC3m7cKbyBZPvuZ2K1TWddf18PJGa",
  "key30": "2uguSYocTzbPGjUnzRPtL23ktcMv1vArvdWqMyTDALfwVZgmUUTnVvYq73xNeCyJ9EhxrhoRHdKYj4LZPa6496hg",
  "key31": "299qHCwjcExajWVdkXqezTFSVESDf11e8mafi98xdMQ39bcbvi9TzmhhS2fewcHqJfqdfERsyBPi99zZGSGLakvH",
  "key32": "BatiBcoorLwLq8F5L4R4RMAY6igv7hEsbryZR6Srwbu4dgZHHWMWjbX3bBLbMPEGt4578EfyNHfkrjA617cH6xs",
  "key33": "4nv56R8SpvwfWpG7g1tNTvuNe3xW5cMvhvCVPBD82Q7TQivWakNE3jDAhZgyTeS4QdA6gx6bgbH4Rsy8RJeLyaqr",
  "key34": "4Hmvoz5rmaLZiM3UWAYJSqSLV1NaztY8aFffThnpKAjeinbpYPMojp7vci2Bf9BLYn639YAdm9GicebExL7ZKNiU"
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
