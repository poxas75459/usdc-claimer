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
    "A9S8BDAVgA5E3SzGjfJqJ6nqHFp6m7yBsnhv89jxNzeGzMyBM5tBwNL4jwraQZvFUAMt37pc3jRoZb3WV8yrdUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YNR3QZECh79rxJG3KAg8PuXwMUscnsqG7DdhhHB4CdFUJ8Xjpg2crRAXK8Yua6giu3e48PwzCPVAKqpQ1oQMejk",
  "key1": "4dbGD5ZWkgbuDMqMTwyBvM8ftNgJaLwMhBjAKKTfaWEW1eJBJnMdTGbeLEGAib4Wd7gKUJ9rMZS9n8rUdDKPNJtY",
  "key2": "5DHXRRrwM6rGqqs1pqXinJWGggHCLJtoMv9hF3g5v2TH4gJ9HgDevEDW19SpsJqH7b5Rf9DQFraRcRDCAotngdaJ",
  "key3": "5JnZ6ihWYRcm3kWJ4HwTQtZU3FtfS9J2mCHu1wss5V6aS7mNXFMJ9ko63kCyFDvjLSxkW9pkZHm7L2rR4uBLag3R",
  "key4": "3bH6CnShH71cFMdtG4x1ErckmXhr6E3nm8iD1kmQ5VBthiWaRBwT54xUqczkewjLizhKhSHWeBczLUwYMhXsSxdD",
  "key5": "SSWr2NG6H4bTJwQuiRJdtJEbhtps7h1w1TtS9pDotH4Ur1pHe4QTzZpVy9KSGYPj7aJhkBfaJ45qhJbRkn7wgY8",
  "key6": "i5cRwR4NEmDZcx3YpnbnHPgr2HRFYFTLG6PHwFRc5uFDbsnbfJC6XdjGoFpDvQNg81VLkpf5dWaaiaAKJfasfmD",
  "key7": "62Cy1aBL4oo2au6yNdwoU1Qko2Edt2iXKoqSzZi1XYCTsvdzga4baXHykrN3oNzHXXwusbUCMa2BbBuzfwFKnGeR",
  "key8": "5wSSXchkHHE16RdjVa5un7fiQwHbqAY4M5UKqXyha3LsdBd6PxKGvw3PMQAvHGpzBeSMn6B5wB8mubgcANYQixEa",
  "key9": "5W8QCpmJBhMnQHiPEV892rBH4H59XiSoYHkUes7ypeEAKAcmniHKv7XafYNM8jkaBDGwmtq4ERpYMQRiQB2gpAo7",
  "key10": "WZJLH2wMvsH1YxzZSLwTK8G22onvRdu2T4E8ZSi68KVggMZH4tsvAdyJr29mSLywVehhTyJqZiqhKBhTVnxgD3U",
  "key11": "2g33CJu6dT2cmFWtDVytcnUB4crMnnX365dB1bbdoyR9t5XmB6qNxzuT2sLDuzJ99zQsbpEULKEddy3LuW7NQTGP",
  "key12": "5PY3fEbk43SVwbbcHgYjZLmLqPWPGWeePDRRXqf8oJFGXiPxaqj1R8MafF4N2q88DggHuYzSKLQAq4F4G1JAzSPM",
  "key13": "56VfZADmqv7doo2mRPyebUUWjXz7xWj1cATv41W3ogBijusc7cYPqqU2NEMv8HTsXXLRCaz3NMzhQgbfVB5NeA3n",
  "key14": "3ZKHXxn7PmRmXHM8g9ktffgTWU8PywYt17m4YuhxNhJVGufeEi7uV8Y2crohtJrw11VBHZGgSEW19yjFFXY1nLLc",
  "key15": "4YH9zoUaE4aX6DotvaH9fFSQshbrVFVYKFB2TPj9QVPxPUrmfvamP8ZkRtXnn7SXYGfPuVcfK1CimbJjVDKUXmgn",
  "key16": "2a55wUM4nTK8EcmjxJbLaQkZSxmgG2FMLacdCUJF4GacnQBygsucK8by1eDTn2TimP7fT3EHR5eA5Zp3F8KrCRzP",
  "key17": "fZDhn7MumnFCJWKS4xU67pdX63gDgDRaZD4gXPUej6QUwwrdncQa6gyhjcxyKHdu77uqaSP7dhE5u9rmhn9MCGU",
  "key18": "5HXxYnp5qPEC4cGhsRyadeAzVqcUWJ8AjDDE8njVYQkgU3DFeP4Bux8J3V1oNDs8USGzWo6DE5sPJf2myzQenyRW",
  "key19": "3hdvdf8ejf2wGv6ydfKxZuFahQiMtYFtJW4suqdoJEdBko7S8g8evZfpjMfMsNSyiKP6Qt2QcWsX4RN2mpy5ZsJ7",
  "key20": "5TPj7eq3jqAfwU9ubeqeCFf6ibeiKuZbXozKmoYiFLPzQd4MpFxAdQ7gSHTp28gPdGA9G2cR6DFHP2PVAXdwRfBN",
  "key21": "Xi7uhfLpC6F6WrS89XQNhfZT63oPnrBqEv37W24KLAQx2g9owC3vEE1h7iBBJZZZXa2xMFHvMt66yZkxHi7Kws9",
  "key22": "4juJ5JGBZfz7tmLHx2nCUNMg3Dg3J9HGyYvEY27hRcZxPrPpcm1KUy2AURjt9DmcdBhWRF5BXm4r4fK4VCWsL6zZ",
  "key23": "2dxeGTLFJGdd8R7WQQqJ1p4dCZPDyiMiRo6mt7QYg8mDx2h6Hh5HHZwFAb47f9H8D2SRCiXHBvKa6UQ2pBjJJbRW",
  "key24": "2es7fUvT7HEyfbXCRXdXQzXfLmVCdyhqAD9kBqB5wAJZi5jkBbmcC5xumb4M2TXFmizDsRpenfgSyND4DVNxRHsr",
  "key25": "LVh2HXA95oH9wy7Eq8aWQ8LtdJBiS3AG5L9XJEAo2dokRm5uqp6sYG7Xa2b6FGRFz3TnN8FPk3erAqYcTJQNUXr",
  "key26": "3jEjihRy8yktMMR6JUxumHTb1Fhgww18Y4dUarJfmYCFcJdPKETQWqfvDmPCVVpqcC3KERiZZnfyEVArrDiWfGLb",
  "key27": "5FqUvQAambqxhp56C1dmQjtectCHZ5wVCuCnAVeuUwaZdsWbumuxp6mkvovkB5MaoBiYm7a9EATQwr81WzNZKacF",
  "key28": "5msFmsFUJ1Qs9KBXuWTgT1AdgVvS9YzWRBKyeLyjUDQ49wdoE5qA2sHfo73wCTR3XPpYRAsBrte3788FBiUpEVXP"
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
