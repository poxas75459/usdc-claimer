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
    "2xTxrDMyojyvLQXZqCMT1yU3DeeVsvkuzizTWPj53MXNj4zxohi2FRTQYqJiCAAtCMJdW2HP2Z5mZQmcqfj8Brxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SYj9ReAtV5J5kiBnXCxtZVs7K4TxZo2MuH8W9P7iJ3GfByVKmnhcaD7EWHpUsbefHW6KxQwTX5acFXvKKm5nUgY",
  "key1": "5Jq9MJm7xiCHrgLnLiGSq9ErcBNojBDcY8WXXxwvwaUhn9yhVqERxPUZmVnaZEUuhoiBjmCBduvBpWX8t46aPhBt",
  "key2": "MxLKDxqjswQdRtzckumvBzUNzYPU1tTLyVckV21w1Pn8TS12eGFAUDthCDp4wJ78yKf9JfkU7QtV9YiLSxATb87",
  "key3": "4QUrnqpNwrnb7GjPXu3Ph5gRiyT9ahPX3G7FqD83zVnYoNqnRZXz5k7SS4EWhgyMgBQkX6Yjcvkf11kXHAenxoTd",
  "key4": "38rNym5Rc1HAxzWJuNDHUbDs9J25511yQy1KdFrkHMumnakPXekctUNtq4QvPxNB9mY59toZjbafVZYsM3hcbEUt",
  "key5": "4BcmU2soiBDrGQdjSFroyx6qLYfNpZkwmFjvYeC9wgmjXFH1CqWXLe254ommvjhUkFe1Tf4xXHXGZX9Lsx3ZgiZw",
  "key6": "7GKJ4qYwvQaWNoivFJkHboMdtroww7EFHsRL3rqoxmoMpHbWmhsiQDfSE2q3odCbrpDswhMkvXpSqDyoK2N98ZB",
  "key7": "Vy4bUaQw3c5Hd3cRFc8rvXRJdhqTHG1KbZnnqvp4LrWuEAdqa93s1bwtUduFSf6ZK8GZXGwYquhS8snmgRQCqSk",
  "key8": "4MF1Jiw5KJukNBLkCBXY9AXffH3n9pnCffYW5MkCcD837HcqPNEHxrGoBoSmqSQnpUWiGdMC9uGRpEdkCzkByuWp",
  "key9": "3LBGf7gXopxrtd4VwtJqHcG1Um4MCPyrxe2BEPVWfUPdtVuucX8Ay794RvxUnSDriPDFbD8pXqnzrsbEgh1fiYYs",
  "key10": "4PGZaZ6yYitcK7ssf6fwqbSvArEtxhX7MfBM6VK91spyw1PUewrhDdaRMyPoyZZVkbw5wSvDbW1J7aESz8RYsTrR",
  "key11": "2TtpqZHUeAm5EYo5DL2Q4g71qCNhiFiZLi3kqG7CFotvhyhkTfEz3mekP5WFK3HkDybSYdrDsHSTjjTqhvpVE84w",
  "key12": "3rh6fALGstvrDPwvPta1bwvcFd7N5yPkNJ4tAbh4iMreeVgLGogNtwcCNEw6A6AttqeS5JQFGANQWtZYm5DqgyX5",
  "key13": "5MumvWFQP1QHBXC7KA3iKZrY1grriPdg3xSfhgRbf2DYt3gCMAJhRcMw91bhMxTmD1LXWCGduWJvxgwpzWr5kHoa",
  "key14": "2xk2Mbam7jJukPC1kCdmf36vWESKwg9xCvihZ6C6jmtmbbRY87EU841ivJvSYLnbkUc1gVtS6ENUsGVeLBuAzchz",
  "key15": "4Qv9thQ2SWpz71Q5UmpvFkDj1KabsGiqauxPH17MwSCigJF5MN4Mgv2yre6rt5NGXVEgTDSNkJpT1cWajj5SVNzw",
  "key16": "5X8oAngymt4ts2bkLenXru7iFzcENosnzmayXScGL87L5FeDxkB43VLuexqtU3QT6ZmuLpnjxtEtCDZvfxa5sskk",
  "key17": "4Zr62F94wH4dnTRJoJgm5x13kJzQDPk1LqwqjD24AW5q7jS7525JdQyZiDYvxcjWwz31Xq4CJRHnKpcMPULMp3J6",
  "key18": "2AgmsRCZjmHPD4hcYJpdcRuZ5eA4N3oSQ8zpBNTE6QzR7XCjyrnYyNyXcuXYQ8zXehturCGmz7VZuQgT7zuxYGsN",
  "key19": "5VYNKnRkTrRmdQ6qpzfnMq48oaavp8kc7DzMaLQqepPTEmc48vTHG5n3MmJad7Ga96ZWT2Qi6ttb3budTSsNRUux",
  "key20": "2JJ4o8sQ52jYmsFHqYjgGHqKfnGJCNShKLoiFRWnfTXdEh5kRw4EGSVXjMzp53HrirwaThpr3cRHcNtRVERTxPne",
  "key21": "2pYjcDSHzcEq9LiRfC8j2fdSsxVTS1HGammmFX2EHsa8k4FUXYgQ5t7PqJpztiBcFbojaXJdNcvx7ue9eJhY8q6e",
  "key22": "4pMg1B7v2P8y8t1WmwCrHJn5oL8EYkcjrdLLCM3NrS676DUc46u1gnsJYVTA7iNeuz52GqhkfQMPcUBU1pYHgQ7r",
  "key23": "55uUVezv3TRyFaRcBSf3mEnB1zzHCtC38TzteYvKtLvxmd3uXDLr6czRFDXMxdxw8hMQs7dLgJPtEU1mmpoW65HF",
  "key24": "3s9UgELaw8nzpPpCt3h8ryYFk9Mb93WmRw4x1JZbKFhCZiqJAYMwCHHoDSTugfQvmp9Lqh6tVDYbjoDwMbdVZqbv",
  "key25": "X55tNF7jjBpade1NCGXfB8vy5WjUpeAtgAm7DttCkGH6hwzRWJtuSASajkFAsZge78vMQ4TcJMuGwaD5RFHk3wX",
  "key26": "3kojXKtLySD3hsAxgEUD3ZNKZ8StezjhLFx3FNcSW6svpRZBc7LWFDKm23ZReKytN6QhKws7oSH5gkLkkRCh4Q2j",
  "key27": "49gHFFk2tN9Fx5DAH8ftE4siXtSSUdXbdNZLsQip1PV3JCCrT4DFe3KJhgR193Jnn9aLiDkT2CRUHBVE42Ewvj6m",
  "key28": "2gQoz3QBweA5s6X33k8jiGTvcU2kt1uoRbkT5dCJQ3xbmtYU6iNKPx7kaBhTgDUGkJchj8KGJJMf1Naq5N43dyT4",
  "key29": "4kB1YsA4XYKxeaNQdJUPXvLA2LF2LxkLuE3uv4wcbprnzy7eSLNiEr9dQQcXJb1e3sF4tEU8wSM5ufU14a5gYrnf",
  "key30": "Qse5mDinu2V3vFevey8thzdt1X8F9rVodqLxZiqJmrPjZ6HEridz7RgWz9QSLstiSUf884nCCeP8GJz1SWcHw8s",
  "key31": "5idEYb5e7J7DWw9bGsGiUWhtDw2yrVJuiCC1vksG68mRHGBcfjQXqAMNcowFEcjrZTW4TZUwNaHiDyWcxu6uxye3",
  "key32": "eY41ThcPBtX4n8FWPWjG6yvgBPJEbxvxy8nxjB7gPK9uYyRWDHCyPQ1H2RdMU4NA43uU9kWG4AtaQ8rukWJ2j6k"
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
