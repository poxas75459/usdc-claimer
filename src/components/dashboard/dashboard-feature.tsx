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
    "563tfhDSdct6ZGXtp4u68i3x7b7JdFBMEZC8WeumfPUGVG3g92Zfnha7bHwvcjgxknJi7SaEeVhssQawJSL3WcRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oWoarU6BNA7PBPQqYUwAKKXq4dWmHsBkGarDuvwNyL6tGaHgL8qF4c9mBKF3MUkMPbyHFAAoN3bUrzWcPjcygGv",
  "key1": "5Hf5ZnNa5gszpDiiwK1ny3zEWvTySbbVX1GDjgNt2xaThzsGnAKSY2anh5rDmBu9c3xk4jzmQEFw4rKXvSmGaFwk",
  "key2": "3G7Z9ByHm2RsiprHAeWcHV6bVmSBWGCzWWmtmCbeyScBfcQExPk9X68gPeKSWJPyc7nk1BE51rVMZwq1Q8qExcan",
  "key3": "5HpZa9b84DCs93LP5KNn7vzKqxtBtSeMkW96AK1x5tMSiNo6MTyqJpHLToTPkwmy2Ca93VBjPWLq4nGM68hy94uM",
  "key4": "5nx3nGazM9Mzg3R2Gr9B3PFoosLA9tMjhZwyLgU3pKhk55toMjTFrWF1KBhbEHSthBtajgmD437jVhkczvT9XizN",
  "key5": "3hmXDSk2VAzBia1mCkNKD6SsxVYxNHgCuoifPtggqArTFreBB485N93WT2dyAq4LuhAu1FPkauXmjNWS3jCLfPa8",
  "key6": "4aaianLDh81itg851CTRpDdqfRrznXYne71sWM3ABznAka4T51x5wJJQXkioS42mvFBZyseHz6EcP3jr9TubPG1z",
  "key7": "5NUVqgtKA59aD3WEvE5KvFPE6sUQ3JXU5uY1bPrtcU4yfQ5mYrUQhp3HFMSsjFPe8bdwbradwDPEuXZsd1jeWQvU",
  "key8": "FBCotmBEKJszbTjNdFp8Xe6HhwjU3aXzP2dnTsDDUL7nydowFoZwMgLXNq4V9Bpmu34jeahDTBszPNaqve1q1Me",
  "key9": "64fjg9WnFWbhFqoDcKhdnMwsb8U8WMf1twZsUafP6vFsiQzSLg6kyysTzk2Sev4XnZhFyTrCuSje396cH1PfXDHG",
  "key10": "ZrS2mxNReM6UsNuS5nfvVxKs8sXcQeeoNkPQXsVWi2A6uGVCakBzR8sbWRwS9U4vqNvrPJK2WkC2JF6ccmi7Kwm",
  "key11": "3QWgvtTH72h89itpMLk7cch2fYjRvyPZNRLBctsncG3fRaUUnNv7zsZLArqkyKpecaJHZyef6QgzpkurmJCkLrto",
  "key12": "fpa9d38eDqZmqLbGpBx7ZiuysejFLC7MWsikxvpDLW5Kc4wHuK4SdWSSU8XtrnJmBfcvrQvwBHHde1uaq5R6oPb",
  "key13": "5MnH7PE5vZcMGGMGTAm7fjHv5sMj5ExMrUdk5vHUo669hQogPjU2w7hN1jrNN1o47NP14F31vGCjLUBwfuy5vnnV",
  "key14": "59KdPzjK6dQa3EmUXAi949AqDQbxKsBSzM4CggJV6t1hf2TTqvorNtfNRHEThgeuQa9sAWz2MTq96DhRVJRGBRPV",
  "key15": "2g2suom4kK6qMULrd2jnPCjQtFGUWxtCp9ZsGhmSxiFuyx9aTUj7kUAw3mvdesUEQg6f7kcEufUE7HUuMfGFmi1G",
  "key16": "3sKuH762AQwF9jtSWTQ7xkQRqVF8NR7Z2xfjY3oAC6DZ7U3rk53m9a1s8szs6tMFjGAoD5B5AgFHrZo45YxuY9VG",
  "key17": "2sWLE9TbG6ZMNKvfTRx9RXH5tfrzuyx4DAofETDuraKqpHFg7rPE5UsvMKqfGc1M4ZpsZoLGNoXUt42WRnX8XBdv",
  "key18": "5Xv3pKAUC8PR7nUzGzRdpiBwdLDY3YQMzUN3tmiuH3yQ488m7cq1eVQpJFhPjsspeFz7vbwpahDoRCfaL2avMDx8",
  "key19": "bQ1TCBTUa8wPrbEaeA4UsYAXFdxRYddKiEJrsBoPHYo3tgdez9SArYrBhYkyHJ5jwsjyN1MWxRrh53hwGJv6wTh",
  "key20": "2owaCv1X8NL2hCZKd29TLwj7duJ7WS5WuxhJ1ZYwKRpzntR2YFRetm8zNtQKvZypYT3GxvBTM8WsQU3XrWb8DBGn",
  "key21": "57tSpqUHnkYCw5i1S7LHaSVUiyb42G5TwtNCB58aaNSM9PwzHKEqkAJK7oLepnsSm67HtZanXktZJhTfbUF3Pvru",
  "key22": "5s7y74poXoeoacSwFKPsgYf7CcDPnQ4bmuiCcEbLWAcuH8UEfk2LEjCtMv5BkpPhxTXiV867TKSrU6CxtmHf19vD",
  "key23": "4qwwPynDznhVpgniHJhvycg9CJrpFjqhkFckEftQEPR3BzDhbf5aB6UEvnenRoGRy5vroiMpWfxDwhCjFie5FSb4",
  "key24": "5e7FGRLuhJqvnc5H4NwpGiCU4vmWJWYVVzQQZim4QQkg63GbHGD7Q6V59kCdhAwX63g7eKcuDxqXSzWunAsyWRyj",
  "key25": "3dh7z2CtyDLioWsErwTsvEj3dPsGPg3eDy4AujeVzhhHxdTpRQQCgKv29dDnMsQhnufVGCPrsdvAs4TUahharB55",
  "key26": "2ZLAnsBEwZpiVhBhvjmkVWmUg6FEUSmyhncunsD8qHGb1SJEuBDYQgAVRRiUCt4BF9fWP7Rqhn4BZE5ey4JgKfxF",
  "key27": "5yLW3rmMXgE5frryaEivucLSsnoNppjyeaLCHkP2P1VeASYZshtTwdKoQfaJ8csfh2jWund8tMh6dCLCNWVqWgdN",
  "key28": "5sWCf1Cco9qwi21CtcSoz2vZ3Cc1CwAdQLgf7euiiij9CrdPVRiYvC9r6qzrDNdin9FjhM6BG3vMqrHFrV3wqeMh",
  "key29": "2icTeNUkALofJTvU7LZbtfCoQRmJgrJ6wkq4Pv3fquHV7ZnHeyozZbVnGvdpHxiyAEmLw4KkANu2ubgoMMywvtzd",
  "key30": "2rTNJDmLLdn5U73L9SMroDuerrehAzq3Sm6qAe97MGWdgFheNaBTM6iTMu2UJvUdti21k4naY5GQjBZUZfzsg31Q",
  "key31": "7qSAJ1uFm7yXjCAeotYeFhWRS4azTXzupuNWyehHU56mq5uZXtDtKTL2PXu7VGx1CfKt8dGz3vAiqBSYBybz6R3"
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
