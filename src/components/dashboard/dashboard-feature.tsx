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
    "2fvb4HSANbWq2nGG8qQGVVeXMsQggAQ59RodjMWp9sh4x5VqMmD6iUaPkbV7KrXidbUmua6fzeKM9SRvn7axGdMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iYG7npL4A8WuTw26kywxTHGpBWR5m3RydKMaXkwAekszAaWcAiwV1rEWWFaVByNRGh4HeDKTYsCo5AgeUJTeneY",
  "key1": "5B3ecLxTUsTCCwoyXU1EL4QvhWzkVtdEG28qtcs8xziQTjtKpgnDXiWZH6spxk5mwAyd61EUDdjaY8GZ5xXA7f6Z",
  "key2": "3Cfo6RsLQJu1mmKWMemhizX9s2f3hGVxFiXHQRr5TRfTipvwZhPE59w7ReHV7AxgrKjVenj7EasTJXyMEAisi86Z",
  "key3": "32NZM1NeCQnwHFeaH1PgNr9TM1oBLTwEXuCSV3ondd9VQtpYZan6H7h5EJqK6cbzqHjitqkwrcNJg68hKTpMnr56",
  "key4": "5K1mFQR3ztcykVreoCeCGYFFGw6gTrPPanTwUSZkBKeyWCDkFiG74WQ67PYvUssQmi7YMNc6sYB4J5D7TLiQr5Ym",
  "key5": "41Ankah6ZByd8vMoXvmaDkwPt3hip9qfd8jcmyjNmy5pkZKLKRDPqjnP1pYeS3oiovA1tanNKedfHMJ6cirUMQeX",
  "key6": "2ag3D5pLG8Ngr5gfssHRbBKizB1jsr2s99bbY9RBzR1UPGx369HoCogpAPdZprojwywvpoU1PEJqXvd8wv33ueKv",
  "key7": "2g2dXcd6iaaRwiRQEn48dXJd4q24atTZJSeQKaAc7XEcFQa1YmzDgSmvDTQdAdsQ5xueM9bQsEMn3SsNiBMDk2Zy",
  "key8": "29cVn2x5NDYD1N68untMmqbn49X1iUFTwJrr9U2xGex9JjZ5uN8T3s2CeRFeuKvjTXYgtbGv5xK8MR99774CaDys",
  "key9": "5YJne9FYqbQWhXEp845oNk9U9drzWpY3GvHhWk4uyrozoo328ebATRc1Nxwi59X3cLUEciD5ZawXSikwKkVzBjiH",
  "key10": "4w3qFWRJTs8aMHvniggJCzB3zvAD6F7b1KNmPMRNU6FLRx9Su1eutUqQuSrPL3yeDkY9hU93Zrku2hnBPjjeJkGz",
  "key11": "2PB5Gmv5VfEBXdW7JgAeRxzxxha68Ev1pKQkS2nWfYAGTfi2deBnCYTELpkvaxASWSjTRoNW4DGX3cGSZsvcYAnQ",
  "key12": "3G5CpreFc3d2CyJUGBCb2dxUcZLDyex2zsfebptZ57QC3ktk3EqGacCdm1ARrhxSLLaisfsPCJNE4uBPzDgeov2E",
  "key13": "38NsEzTTJYKcVoksQZKEUxdkxHrj95Me7hZ3e2qJUZqewiAWZdy15AtsypMPuzNU7Us8BXdjTGJM974NRqpfn1L3",
  "key14": "2QQsFLjiRTmJSSHJaw9Z7rChUBChxTwDZ6BfWawZx11yMe5ywnB5FPqNMBU4dA6vPVQq7v1BCmcH3yNT5it2ALqP",
  "key15": "4XmSU1NcHuNTubgMmcPFR53avxSaSMhpk4bmG8A4rEAk7LQYhnmNUR7mcrCpFUx99XErvQZMBdTjS8kQMMEatUpE",
  "key16": "xKtQQKund8P2j6gQp5JCFtdC5y7bzmcXQVEsmYL9124oYutHmYAvGPuewdZnCKGWzgo3gzw95nxUe1mVhBMKtVy",
  "key17": "3PRbhRN8cuNWuvCBJiUnWtn74fUwMgeeU7PvfmsBJ3MyWg7xQ77MEsTqjLm395wnU6qBgiKsDFusS6VHr3AKLEXA",
  "key18": "5eiJs7AxhmEg5iLL99NaeN2mmfqHh5ZQ8m1iW64zwkNamxBy1DzxrJ1LF8WcXPnKefFzYHZSSM5AFDysvZ4W9j4S",
  "key19": "kEJnGy3MSJzAtdShZcABj5GsjGHijXCAUdJPfFNAvapwHikoJjai8W62hEqNp18rt7U9h1QhUxX1agtaAVUDPD1",
  "key20": "5MBTQvK8qj1YsFFqMFyDUKBv4WbxWLcafZsLyByBH9gdiG3CXpcBxTQErzPfWxNhW8yUGSbWuP3XvQNVDRjKgsvw",
  "key21": "4JSKsiTU3fVjTSfSzUnxoPDHkKfLzwZ1Sk3LgGoJJv8satKGNe9ZFLQ1YmAsqPKCz7rBrDJuB6Lo6MrdMscyca66",
  "key22": "3byuVReiUMQRVbwx2D3QmqcgvYQBhqS3bREnrz716EEXmporCrANGMtGzC8HEbpavc3dbUFN9At5PuMysyFAXEye",
  "key23": "3bgXRSrwQ95A2xd1aV8TMNTvQbowv8ShGYgAyEYPFa2YUXFQ2nQrvfJp2NmyT25FYEbDfLpD3ZHXjJVaAL3CmmwT",
  "key24": "5iasY37sKkEgwSbGU4fUmvzGzTdzEsEtyEg75zFy3SservVEBFtWjM9jyebqy3Sk9koPgGeaxKLsaVRY6ykKUAKG",
  "key25": "48nEbvqLL9Qqv26e1WEPfxMP6WWxJMgSkQqBmVDuJ8mac3tdNGy3iiW8V5TcbAwStTCk3rTC4cCiHA7rsP7cMfmy",
  "key26": "3pkW7GY6V94yhY2eevrAmoX4GEfzh8pBXECpi3DuJiRw1eEPi1ZdpyMsspKLMetUyWPfcEivybQSjhpCmaYzR2oY",
  "key27": "3uMg4Kf69XixhnEksvxKU84A3NzYhFAoZbsZhYfY1SHZT4t4w1dCWDLb2g4HnqyGxheeBdBdbv5hTLGSZ2MHe5Yz",
  "key28": "4f6EP8kxnHfkbzSbkhKoMPATtEHvXNyF2Nwr7ASqFpV74RYM57FSXv8eThSTCfaWxvphtdiEeqdUM1Yt8haGsqL5",
  "key29": "GAhZjkJCUcfsuMTTG4TGJECm45ph1VsmYdXstnfUzaEsbgFsucynfUM5BSjx6hE6o76WdAbiaxDUfwYHBoCdESZ",
  "key30": "3gmvLhNia9CPSFruLxq3moAEffjpb4Ly4TtJ1DWmzy2vVmYvp9t54H7ppwXFjv1kgwtCJ52yDB6SQbToznJ7EZkh"
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
