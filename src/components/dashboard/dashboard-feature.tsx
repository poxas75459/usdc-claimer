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
    "262c6x14f7pR9ev6r2guLRRD5V9FbDWV8vuRzW6gpfkuj5RvNDVDY4GvgpkJ2MEEmi5czsWGcBhxuqWnoBYwYKnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24DHZ3fXyzEr8M273uzSByM6iE9thEty7xvyGdZKG1mRPLrLCg5kFvLTo86KmLtGUERMiXq3gF7nY6T3ebM4AxoZ",
  "key1": "4sLgGAmtzGXscnkCiKRKF5xQqTMqgs9CtJuPNRTgyENne6N5f6A1aatNbGoMzhnMi1iS2hiz9auWmgWnmvpQbRmq",
  "key2": "36iGarGswMWrhJA2hzPVvw8PgjCHWFH32KQ33Bp1caN3UszLWAFbbnwiUiwZx2zd5qkFAeSs7uBZGgpg1TEsyQ8a",
  "key3": "43oG3U3CZtGJr3fjjvyqnnPAdVWr11iRYDyUgqPGJmuC4LBd7qYNHZj7RSccSBpHJMtqkrxheoGiLTCGA3TUKxk9",
  "key4": "3bTAMEgfxgBHK4R6Q5MhjioCkADnSgCaPn1G8QhGv1546Py3akcYWApMhSH1nNryS1hFQtfNzu1WBGnmgvrSMKay",
  "key5": "32WQSCC76ogSeZP9tem9VdxUYBE67Zv6Pb798VqgWMVmqaiM8JByosba3oib36goTg61ecktH1vNEMyox9vurNDa",
  "key6": "2bQrdxcGQmQZGKFb8tkiLXR9EBNPr74BnC6PzF6PEAhj9Lv2zQzrS2josKP6AtpizJGMu68PHkiiVtkBydnYRA1f",
  "key7": "4xy8j6vZirEtmGgAHy3nhJ1sLepDtnHLSHYBPHJ7vzyDHwpQHJvcBcYj63KMvA65X2QmrPv6ceKvBnhZcx9CF8iy",
  "key8": "3mSCXGv4je8MFoe4HDZCHtmAX6rsT7Vnm9BjW8AU9h5JVS6E4BHjhf3QMBkYPz9p5biPRPyTi7iFm1GCym6m9Ciq",
  "key9": "5bPSJXe3975jBi4rdsfQjqxGVnyES499QhXf9SChdTadf81KuVLwmijHfmhaPJdTrSwNppNft1bAMW4PV96XN4sV",
  "key10": "4cL8kxBkcnkUGuUZNyRxQejmbiygf7EgRKfDRJUHkAYAaVnUpoADUW8TJboSaMABti6cCrQUzHPRCPT5ExsLRmkb",
  "key11": "23Q2gettzQAC3pRsQp6S1UjPnx34XciLapue8ckH7sWcC75TrY4DxgKWqFj9tCzLGhNgcnyeT62quyoGCeGb3nWC",
  "key12": "3gPVTqBPJYaGyGQdXf151fUwN6oMrFQDqQYkZ5swyoVAK9HxDennuihKk4GcS6yttGn59gWr5wTS6e4qHUkZKPtX",
  "key13": "Vf67GdW9VyVsHFiPcfVSyoffa4kSxZGi62oAcGQBRF1ESUx3nPJoXzMs6hAGYqQQaUwPtscYgdJQNyxP8zpSKsL",
  "key14": "2BnsCXK521Aj1E3ypAkRGene1zSB7gvrUNexz6PQQqaWGBfRPU1xLRtrqhxPo7xSY8SfciKrgEWqNFVczrk5UcW2",
  "key15": "3jtAFNrrwUns6z8Re7WcbSrRJnzyRpVybm3YYx5fHmDnd1cNSQDT1H9k2QhizjqE8LifnWwMdJRyYbC3UTrvUyyb",
  "key16": "k8NRUYgKPfT12ewCq8UXzmRhyArqCvSn4vLParc5dF5Fm3WkA3SsJhgQuzLD27qECa7UFqbWKgzaC2Wddkyf7sX",
  "key17": "5BckGCENRdjx7bHPNwRGoPZcbohqPm7viKyroqo8dpAyS1cYFjjHziMBLDzsdGzbovtP4MJax3DX6qy1ewhCCQxr",
  "key18": "3Dv35ofHGZM3enXoXF7GyH4niJKV9nUgW1rQneHzSpzPh1W6EyPEZ6mTGaQHDFRnXXWj9KKKdxxG8YkS1g2SqqmG",
  "key19": "2poHG6EVTas4eN9VfyjkRxKccPKxzw9oDHranrJ4K3UpzSRi6dZ9dYSSV7JUkSXfdZqkQ3DSuoWk7LX9u2PSWGWP",
  "key20": "2qDRNzK9eBCtU6E4xAB2xdVo5yjSPTjCMidNtt6avjEj2CdGWqGzJ3XL9pB5yMBb7hWti7iy4D7eetvjVZaRDj6y",
  "key21": "2Hs94YM4kgiPkinGQqM37J3PqCAAr5EydN2J9dNHxzkELpoZ2eax4RqZn21CxxPMn5cGjD7V1JinApqQDwp6v6jA",
  "key22": "23FLqkKVzqn2s9PGHDiAVhChqrVvBJhJoRAggzXWmxoyhgznJCYp5KoEScFEKrSFv2zjR4wqEy4EMsDJU8L1Ha3D",
  "key23": "2PQLho4ASD54G3ijRkdLyjd5YJkjoYpJiD6MLG6YNe3KAWpBhmCtHEb4TwqK6FWJLToL1vZk6AaSkAxCKjGHmfCG",
  "key24": "3nm2TRyEHJGynKa7BrT2PBNupHryTzGmVwt29ToudZALiGPdXvcViHgb1JAjpiJ7ofNCgjFRTZ6FfdQ8dRqhLTWY",
  "key25": "qHZXWTAbcunrJ9mvPGLTv7adNf92ciEBhzkvNYsBqBZdb5cJGVUb4hAveRgYcH7RKDspGwidK8HGgoqSdWAaJfV",
  "key26": "2FHX5MbAn7QU7qPer9mwdRi15UBjhFycvW8XbiMtem5Z2R5FJ1u6kdA9RtV9Et6vWeGhDr7gvBXY3wmJYx3fRgt2",
  "key27": "2djFtbMtPc46tpvZg6U19w7S5Y61vnqvyjcoG8iErZNFEnf5L7JWRTHoXWKLfEr1tbrkPxjoZQnGhePmzEW3y2V6",
  "key28": "5XjeLEc4ub5CUdnUcCA7G8SgiZEfYE75RnRgtih7Z2kMKXU1pkxekdx6GJ5NuWQgFFe32x3wi54NbW6HZcbSPVpn",
  "key29": "4EspFDocWtcLi8X7JpJxB74qgNg9iHGATHPWGw19uqxCtpEBTYgougZrL5yXVv7pNFinFB8KoMX5nWR8JD9aCRXh",
  "key30": "4rr8esyzGKeASZZ41iGN4b5uGZ3rAqQGEAgyqSvSvByFdx3qeakb8e58fS2BAqwiAXKEUcS76tDMXDASutT64PoC",
  "key31": "2kRpW73rXxitjSMBpq4JN1NgQG8UGexqXJfTenpFXdb9MzFntdvMJv1Lod1cX6NaReBhMzHe4BDAWyCpLLML2aBX",
  "key32": "32eXDp5gyvQWYsfus4La8hAdVCj7yUbyLHUUpF3oSpftzN4sZx511yhhU8vrcMC21C7uHtGmH6TJ6MkjuHNFer6Y",
  "key33": "4wUv7kUq4JG5zVZrx8fEae9tcqy7b9x9HPcoooCfb5oe6k5EZyg5AQfZf6Ys4WgrYyhQBobTpvMbUaV2dNAvVgkJ",
  "key34": "4DEifdC8sx64dkgQqxcKkTox2R9p2GAX34ybmSzjj8WEWVtbu9Ak1ksazwWra1zvsVavNm3w4433YmbPsTd9Ce7w",
  "key35": "W9H6WTnYBETsKBuLaKPWTf6gJKZJ9TahvZ98NQwbcDfZgqwUptriwzjYe7MyYtVYbb8422jXRrMQEPgANVD6Gvj",
  "key36": "2x8XH3zuyRnRkWr5UPMW3mYs1Wo2Bj6SWWiwqbmbo6jxtSp3PaWsoeMwG3EYVdfiFVrgEe27UVgcq2JyfcvW9xP3",
  "key37": "RQNw6AdrxeovQasn472T8sGtzp8XKB3xuoQM6tnWW8sZi2M5sGjxT7tRLQhg9bqrNtcQSLEVJn7vVDzxGJnebY8"
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
