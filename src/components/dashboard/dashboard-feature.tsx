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
    "5ae5tXKxQNAe4xTqooSm4jjk9htYJewDKZZtrXp2Vd78bZdj2m9bUzhHJkGwCGGJzBjHqJuvDsbkraSN5XvHLrEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uHqo3n8hZKuBJadtGqWWayBmPjLW2RGhWgwmRx5FTvBUPFwEt6rmJDsUL9tg4xEPbbj8Zm1Qr7dJsaZA2fYrJKc",
  "key1": "4KCMvKLjZ5txoJjSDd1mcKzDLdWagCg4eSaWck4UZkNAMkeE79rYVuEyfGcNsqc1ga7c5aZmzPsUsguJbc6622DT",
  "key2": "2eJ23zkPbu2CLAZWzNXpX2uE5MMyHJbhoNUQDBDcBB5yDq9noSx6EBDdtr5W6RF8MbUEULpPkng5msWQP2fkWTKB",
  "key3": "Swy6Xh7e6ZXWCNj9NfupYb3cFokzjULzPhCrLCeDRYecZbp37HS4SK2CJEt1XQuQ2Ba4djNy2oMYmdhPUUTa1YN",
  "key4": "4RCZ48zCCw4BpwBx9ZdFoDtCNVyZaAtnVTfGmfnwEi8Lzsy5L5faLvybwXEF9YcMJhxhNUVVuEBDhe8PQZayPChH",
  "key5": "3nh5kuuRFQM1NqsfSpzESTG8RRtNTsBTq34nVujgQe22vMhDJo3T3penVbkxj6Wo6RTsiJmqg1jxGvGkaFoGbVMU",
  "key6": "GzJ3hbcxzWnYANFNawkWsmn7mJys34F6WzEmW8w2hQzpXR4zPyKiSEnNsY6f4udDmZVzikyWMu2gGSi6vtycB4v",
  "key7": "4imEVn1m7RYB4DTcyWMctqQugSLNUDpYRCw8QMHMQWqR572Tm1qVnLwgs8xmgRsSX68y3f71snJ5eJBFCPpr858n",
  "key8": "4ynMxRWMjxzeDW3EXbmMcu4eoNXFZ6F9mkov1pmMwZ23MQ2a2E2p9EqWNdYG3EtjryHHV557HhQLMm4aw69cvUa5",
  "key9": "4DEh1KgXsbhg7Eoqq9Gxob5Rt4kgizc8wkiw1DkrPTZB5vi64kGEFdemvdtNovRiQa8CuoT3dHp97zgkP9HoC35K",
  "key10": "25FVThfmiwzVVSTieJNsTcKHDHFMcvBhyqnbQFRuS1uqKeGA2tUKoG1wzi832qJ7v7ADu2PvMMao1HPwwaC6qzA7",
  "key11": "2rUbrSq7ZfomGBBf6a4gmm5pgRSvZRnXey2k4NuX6JKpRHSEm6y4g6A157CLnaj4bSMd6p4oqTnA8CLDGsk9Lhdy",
  "key12": "5vpRscVfc1QSyjMNHPf3YgqTgF3Zjejrkx48nFVA1S3b1G5wfKsRMdYoGnx9yFcn2zKAw5ghGd8XYDbzhm8BBUBg",
  "key13": "3oiSavSUP4bHat5TPYcxMxDsjmcXhmxWi1akConWi49LcSoRwCbCEG2tTCRqEs8TuFKVaQurBfTv5fxyVePYKxyR",
  "key14": "17moQfe3KwqCtCVDUjedMpb88d4t9NAaCZUL8ZKG3pZwbfWVZcPFe4DqFnCUDdqBFWkz3dzraDJETm7jUV35xRz",
  "key15": "2cHFM2GVxWFxWh1N8gyEfqPMoisbtTza2PhqJmbdJf4ESCaNGyUKqfhSxqREhcnk4tJSNvdVoLFAnQkyFHrFqTJH",
  "key16": "Y71H6RBLAhSJrPgEqMcAh43vbatpeBhGpe3om9YhSJEZmMHB3Lt2iCRbqdNLD13mRncXP6kBL5oP8ep8JHtatmG",
  "key17": "PNW5Ya8Ertnsn911sDfFxxPSpktEpr6hGZq2bXzb2X7ikzYVmb4cdR6TUqi69sJ9NKuzEp6uHFon9gX4AkXrAnG",
  "key18": "3r3LZ5d1eyMxa36MNPBjSXL9em9nRrL8x2qi1FPu6h7EZrCPGj3aSVJtfQgnmf9nxm549eBcGDouRvbmnM4M8mge",
  "key19": "5LhcPEV8DmgQL8a57JQZTCfDVxnzx5SvBZGgvnHNHN6w173Sg1CdwWzU953GTceJzx76u6yPoTcCvvbRDjB2jToz",
  "key20": "XWUa4rVzvz7xCYhhD8kcfnvKVUsEMkQmxRawgZFBR59k8HFXKoKi3d2VqagRqrfYFjz4WBAxH1c2dLsQYco5C3k",
  "key21": "2bGz3hgeWpgyriYfY36YZyy47WciASXKhXMqmw1FLxs42YJiVHmZdoUJ7LKvCia596TtLTH5NhBBKATooVZBYeus",
  "key22": "3xeZhKrMP15w2kwMMVVmafWXBqC13v9k37PgXNu148E867GVVGBVmFF5Z6vBNPzyDi9QdBcj2xrgircxAf7Vz9Ae",
  "key23": "3GhfHxRngt9zUJURhDVTS43KHXXE9VMakubbufDpZKPCuutZy6rDZnCrEx5r77WYrg95pS4JmJXuBi4a1hnnbDKM",
  "key24": "2q3h2u9YtbkeB4VD35vrvcp6psYZDBUYbyjXjDYQW7AymFhZF1Fr1VhsWBjbv5nqnghDoC9XT2PzypMdokTF2KXH",
  "key25": "429rgEJUxcZ9PRoQttXznRrB7vmUcx1Hs7KBXhv2yHGwWjeTV1q7VrTw3bMLeezX1fMdViCGhhRT73PDQpm4SBpB",
  "key26": "51zS89Yn83rXCLdfHfpHHhKr7YU75UCe3BJuP9XGmk2FoPxWst1ZURzYirrFo21mNL46hRh1Gev1hvA2Vo4zAFFL"
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
