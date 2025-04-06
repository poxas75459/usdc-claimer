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
    "4ujoiYXaEM5tVXU7i6sNLaH5rwX2EnCauZDmE3LmoYfVirXLudwxoF8tZVt1f2P8nQ6YNK73ZdVr5xxgHn1o1hgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GsUbGULjtVG6qq8rD7HZgFs9SVrsxe4fc6NCv9HJKJr4sBxoJmVJPo1wePBk5CQ26Hf31fTigcQ5dqYBSJn5Wyt",
  "key1": "5VEtgeruT8gcEPYLJQ7qcVrEx3z4knzH6Mq1LTwTknHerky165TqcQ7qq6PXK64X9sgM4b2MT9Y7NsE3p9KWkgVt",
  "key2": "3ux4y3CFXgBqX8mysNx1M6xNciSVMeDhomqxZqEq5Zq8ehNqzY9GjDXbNvhJZpWB8f5qL8TNyJ6PMDFxZc4jqbbk",
  "key3": "4gLcetaPS9jm4pi8TmDm4KK7dQfBVEUk9vQuadjgsEcLR9onR3joXtkibX1JfhtP5fxUoo6RA2AHjHhyBzwFLRef",
  "key4": "h9NhQDKpa54RVHd7jq6KiuahwYX5dcJJuTvUHsm2skS4QNW85if48XuFvGyjVW5ibTstuk1LdVBFadVCuqnoyCk",
  "key5": "5b4vUiBwY9PLjcqXQ4zWrogyicJJLX59jNCyFRGEG3Wb3Yc5Ma5EqXgP6RYWVq32NF29epM9f8Kx8HdHmTyiAqip",
  "key6": "2G2ixWNy3N6kD4kGmw7i6moSX9aNr5ZgwWoEZ3D3fFQmvMhTjgB72zkCRL9NUDrTQ1BiCy1K5qk9RQHCMThHRdmk",
  "key7": "32Xu26fg47MAs3xyaURM5TYZz9MJuhoduoxftgYfFY1n7P57q3JsX711JXgYAkvs6h1FjRaS3nXN1G4Uqt9uUgZ4",
  "key8": "5osJj5xYVHQ9N386J67EjDabWzW66XbnV2azDPyZg1WDifP4GHjukkyBGQagfYD9ZuZ2Nsrjr9rGesYHTCFRnXvF",
  "key9": "o3zeQrzUNF4J4e3xNUk8isjAsUMJDR93JzHcdTjAdRXvd9KfthJrR5RBsDzL1fZgQcF9XoHHh7UU4GJEa1B554h",
  "key10": "45tFm1sRZmgeeBnD4wY6migCibe1S9XzKQWECytsPjrtQWJTFYuSa1r9qbxWEi15W5evNbUEjp79QGsKtktiGkLb",
  "key11": "5Goto1VAYF4wZE4ssGGpCdfaAGtd1YUWn2SHtYfLrDbt4mUfQfzWEQtniHm63yxZzMQBEq6MxK8oTeZwhGBTSVep",
  "key12": "445rPfGqZ2K98GexdbEANX9qSQM2bNDrjLsxd2u8uwcYjpviVtg8GF1QLxu4GB6pbmXTbDmXpfMw4jkTZZMexstk",
  "key13": "3cUzQsc3po9YLvpfj1y8ZZGxqZq7uheLydXCmf6TeX8kQgf4b64bBgNaj2doyZNEfhGZAaJ59GU6WMtTrhkdEBMb",
  "key14": "5W2FDr9eaPFQTgXbHbTHg5SuqxeN4QvVmkPTuBGYqGyCHcsqhHi4xqrJMGKMqVJ932azgBQiPA4C8UkdddEd1VZq",
  "key15": "Lv4yEtBW5DDaRhDwMrAiG5YZvCUxU7N7Z8c5x9Fid8oWCMAuHaBgTaTrPu6njRBgaEnjUhy7yX6QY5X8t53b5f5",
  "key16": "4PAB6gxnq8H8GpXdEhjDLd3ygbjtdZrxZQ7j6FoC2WS4AcmWwD1eYWv8Hr6FcPZCj8Km16Ln1Vctd3EJXJG6JDkW",
  "key17": "5txVFuPN2pJ3Us3nYc12kGG6Ue12bgFeRxVC2A9hyep192ngnKzjBTfnTNWKLdDRWBUunKq6uYrRnKXiDfKa4eNH",
  "key18": "2KgETy4HKvC1SixeMLMMrzKEF47Dynv1jfxC5YWkXGyWC7hb83TMAjoMfP7FU7g61BCNcnHT5YnAwu67iMyZEMys",
  "key19": "Fz8xfu4L6ziD5uQjphde9JL6LS4uSo5nqWM6kCJAqWxFHkXHw6PuK79m1DgvpoZrpfYzb42Ao542W4kgxQnP2ao",
  "key20": "24GpJR5VsRvUPETaXdVAXRfEuqe3k6ZNZhzNJzc5BQ7VSxxEvx2iXM7qqtScVSgqkFru3KT747PAGzYJLWEKrjPN",
  "key21": "2juBdegHxmAV6x46gWKJGpGr4cSZh29BFhP7qjUWPo57iLX4bqiFzxHdpQXupyMM2gjBPPesFnMVzKCcByxADxTp",
  "key22": "31Uw5t592bNowPsZJP9S8DbkoMYuasNnsAHnoWAbehHeDh9kUBuyrA26ZHHQVAZiRqB4w6EgDqD1gT3BBVvQnyUe",
  "key23": "dQMUmYt1k78MZnDtG79sJ3oHRLQ6wRWTwd11HfJwsewfbw2HaVTiEZhw5h2twTmyC4yhHo81EFo6X8cuACFbZ5V",
  "key24": "dKWJTvZH66eMHLAXBBE11tqeBtHjMYxrevPnjXvYpCB7vpWhQNsQ1iQ8i9iH7s6JbMcbteikYt9dpBg1ymSFof2",
  "key25": "4ZJyjmGuUxp9PCtVRdcDmiBhHA4kHFuMQcj6BwVYDoorL8EHygsodaYg5FdrymmoETdZ7vhYCJsEEnPaVaBXaCqA",
  "key26": "7s2U3Hn5Az8VVJRm1YVoVijWiTCoPRF8UaF93aV5Astz9LNLDB4Vv4FKURdBLPtA9WvZi5Hajpm47JmUknrnQ1W",
  "key27": "2K3xxWcrX1hTHCLhXXzo2jEfmiXtvyhN4MGiwqwj9if8SkCe97L6HQXYCtFe6QZwX3Ajsy24tzVpXEaVQXcVPosc",
  "key28": "4HQEBHzPfwD9QAWTbT3XdQ4SoVPBJpAJRufxem2ne4jQ8YvPA9kLBt9dbt7AHtKt5pwsPBaEkwnebiyhHTowFT3h",
  "key29": "4xXM4yhY3Kxuy5EvxjQpRL4TJoSJ5KiEf4gR7XFSeUfR8STRsVPsZ9tAUwLVmWYuoRNSu3pXGGNxCAv6Pijntku6",
  "key30": "45n2AQhfoCA6vk3mYTvUB6qYjTqYjC1q4MDoTRwKhontKr5kyStEsPmePPSds3A27u5kL4ZikAvE4dm4CWkXafb5"
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
