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
    "3zdF8LTVHhkzdpGysgkJxg4rxS2eCows2eeiKjwX1tLoEYUTyb3J47yNNxbkHQC7Q3VEhvheLdV5o4A5ANxg7kMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G4MhQpueYSapWxi3znp6CzCQ76pe33Fd5TdWmUftoiaMoWYW2hG2j4W3aVwUXE6fiW3bMGFjo6HjP6zFhBbRnHh",
  "key1": "n4r565x8vE3icGeL5aLevBMKwH4uHm8pdJnH8H1i2JAJUJhZr8PoDrM6BgF2TFaurF6iRTFDQgQPmg1jYWnQhDN",
  "key2": "6bPLaJAJ9mePKQbZPaPPomjsP3xkEUdS9nWfPgko84pok4Lexy9n7253D9e7dk4TorFB7AJkHrL8vs6QNezCCk2",
  "key3": "4AthmBoB9AFVxgTQTFGLjqmgrkz1iPCBpBgK97x2QXGVJNJCjxoZKcyQvfaejQSUDcNM4kRvpZ2CCwiNgprvFkWk",
  "key4": "35DuGrmX9YxGtznzWF6TwYHdqp9jhxvmWDjbCtJKrgkSAruB5pC4LsnCN3SZgZL6cRKPVx5HYVosiwBWKetPdFrT",
  "key5": "q3cVAwPrv5LnH2GLyxMoPHJWkimib7RAmnWNN1c8zwZ2cgFDSCwgEJupFDASLYJG6tHDJu95WVUuAdfx2p6a9Bg",
  "key6": "2PQg9emP1MVz5EgroJTK9NEDbHHqttD7HPo321s4UvwwhyiR6rBrec7d4MCkPrG751pcCAPf459JgGZRutDXkdLZ",
  "key7": "o9MMaoZkJBtfrmcsNRUkHytv2fryNo4BtEteiwNySAiAH9Aa1v2EpE47z9hzXCPWhTUP1rbuq84pnCMStJNAQzH",
  "key8": "3e9wV6S1B78SascwQdtG3KzMAi1CHbDdx2xa35fdE2fj3f4ASHieLqGree1BbdVtH28DMK8no6jjFjCM3WfJCReF",
  "key9": "5D2tdYFssijbfyy9Sph7xTWBXY6KmH5F51nE6EBp6nhUpiF6eaHvWvsrLc6BPZyhwSd9o7uksbuwfq6bNUKy93AZ",
  "key10": "2oeHT7mhJGW489PZweWnyRoPZWf9EfbsaxNqzA1H4FyJ8SowexHmKT5RSkLSTGRyUYxtfmWZ5nAQm6D8y7gYrqaq",
  "key11": "47QgmL6k5qAwza2zuK6DYUKadxho7AAu75sQF77U9vgtoyscDnpb87f16Qp2GPREbxGZZLkBM61aQ18bndQ97pWa",
  "key12": "4aHktiKzh3q53Yf2x277g1R2iLZci8VcmJWhQWbX7Eks1rdz4ox9fad92BgVMNVja11c8AaqGoGV7CT6Bz6163Ez",
  "key13": "5ephBkzJ68WPF33LmKufv3HepDXUsPripcHabpoegMCemi7yDGkAh31X714pJkwSiUEsXyRCyLkKpb4hR9xtJL1R",
  "key14": "2nDEjmwG3cQKZHGnNCvjetYGGwnT5s9KAAzvwBLyLW1NqD3m1ixCheu9SdRQTEkQ9RwC6xNmBKRk9Rn3yr15en9G",
  "key15": "2paG1WRy1RKukCTceSPvSCNF9PhJJArwEhVKAPo5KkSh3grooftFUX25vAKu6XjEARmXQRHFh2jWQoCh4pipiuPk",
  "key16": "3SY9EzS8u39A3sCCRtgCxENuyNF6HBV4kg8cA18W2CQYwTDWBzPJbQTiXphJVc8h1U7sUr5yGcAmggziQ7cLqoE9",
  "key17": "238BC1phSfNXp6HMRTjU55vKXfm1ZsqWiM3CRKfgUvzbYDhZTBfUyyCFUeTX2k3gzwiR3jXq8KN2pxAzjTkrQN4a",
  "key18": "Wqpnafbu7WNKDWT1LqJgfYBbnenYJ5uz7Vdhm7zMh7Y4uoicpFotHbnFZmkwyMtpcfT8rnQd8nCMvm9DUnYX3Vw",
  "key19": "24nS3BnKPY1GbvrTnMK4ZuHAXYFQcx2a19pH2MfpJtNXB6dZEzx1grD2jy8ovb726NUnwiBsFSX8KnuDvLUsJWfd",
  "key20": "3wqxqiTzAbAoUVxzAqnVqThFXTf2iCidKQUe83CqGu1nALxMzr81aSUHVswX6BLbFVyN6yRGbKZK4duCmX6Kx9gJ",
  "key21": "TQyv62DcqnfZVAK2c9A9XGS1QGrC4yg5YLF5xwayk9btiJRpiWsZD15NG7CU89hcthBq1JgAJUJ1LjS2NUSbYiH",
  "key22": "1yCg8Z9LF4xJ2RfwbTQT4Tgk1HHiBpSjfdTd5pASheXpK1MaHrCYtRMgb9htwPtTiLNacKtQ1XoAW8aFDMBRmkW",
  "key23": "3fbPdkQkEPeSPEh9hTVhiY9FPseChwgdYvBt5f4UNsTDDbwSbnmqJGD5ivuepFUMa88zR7qkwkmzMGixcM3CCfvx",
  "key24": "2XJ3Wk4VAqqBNbvUZhXKrRxcwaLKEUtiUpND1J5bmAoXCFz6Xs8CjauYSw8XpigeQw4pNYVyGY45JGsr1VYLpEkP",
  "key25": "3tYrgmLhHv77haAXUc5ARnvh9PJ8VQakPHY2accY6tiqRuufG9wdGxdQudEzWvuEHjZorbirg96jGcYJncti5ALn",
  "key26": "65GPwdzmvJ3oXG7mQgEPEKiiYhTg1P9zHw59gs5CKxzPCXbMKtPHCP55A7HMmGNQNPjT7A7Ud6yvPSngWStRTm13",
  "key27": "5uRAE2skJkSphBMJeyKWmFUxaxCg6WxBAMabR7DU12Yg2HZYsVtNEt5EjTbQh52uBxvgMMyKBim1qD8836Vd3Ld5",
  "key28": "26H7vU4qE1SPKT13wuNrx1Gb3UTFCFf3cBacAFSnqqMD6rKfu7f2gTEYgzB2XGaDWMmPRx6q4ytpRGry3pFRHykW",
  "key29": "4WKLWEejoTcLHD8MwxqDN7WjUWwHHJyMZGeG45D6GxaS7xrEV8zP9AJgtsUhQypJsGXio1KYbG6vSG12TeR6mjwz",
  "key30": "3znf51CNsvcVuQTa16k2D4LjvQfu51fEmLjmqMcz5D2VhyAVDuKJRJG7hQneRp3wD4JBLvnVMMfvwdd6JcSwAcDA"
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
