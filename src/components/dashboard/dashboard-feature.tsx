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
    "5nNQ6gcxQYoVdMqx1Z6vG5nTxgai3E7m3iRuDKPp2CRfwNkjgCgrcebQYFgk5tAciWQwAWapddx2WJ4jxjP69c5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2asq7Bu5pqDiN7LQFZ9bbQcFB24XMmM9JyodyGK7efPxmW1CFTkewwFpodZEkCbzvNKapQdhPddUmuVLHcpKE58q",
  "key1": "3YgNvmNrLQ64WZRbz5pMPERBX7ZdtxxXQQJpcL4RrnufzKJuoGd9vrzDmqk4r3vburU5kEvK6EpXNrWS2Lp9sHeA",
  "key2": "24QctRqBW4K7u5WNeDkq2PM9BR1ZB3TYvkZsaWYG2Gyo7AhZPUsSt4VyXjAtpjV74h6jWyBeCiBGof7FH7TeyHBu",
  "key3": "4wZPuk99QADbgjx9QHFFmRjMDw9B2uHwDd6tf7eAc5UehoxBhfTi5tgZkDbFcKTtR6nPo8dQjScPNFjRgjbH3dPp",
  "key4": "5JLJgejts5XzLCRWuTfxy9PQYcvJViuntLX6XJkZMfBtdDsKjwzKgKATb9R6md1WeCwXfp1MkKLECtgVrJ5cv53b",
  "key5": "3mnuVrocBMtjrwubF7bAybtuh5iUh528QmkAdtPmNvQQzcUEhJNuHPcCo9AtrcED6wsBTwFZt8SAdQi31ZoTgetr",
  "key6": "5pHQqH4M7JoknNBFFCVdmCU2PcJJv65ehUw3DMuZjSUwfTCWAELkN4j5KqAd4b2W4fwJiNHjG7hDrbvAYJ3pjGTY",
  "key7": "3oZvb8tqEjecuW3fupKusawnjvmYDv8tk2hRqhVcuCuCAZNhNjxCw6DB75WteYnxrtgntWAnemuJyJDFtuhG4yAG",
  "key8": "88QSBzAGzzertti3mHmu3F9BWL1hCb2rK6XiMCTWeUDGtYgeNzGDTDPGQzVP5AB83vbjPUUx5GJeEuapnf79eu4",
  "key9": "2S5KqS42bCriKm5wQbDMZhBWWVuJ2rXBXEN5xxTEXSn9Kwx9DabCmPVraMUKQf8imrD1EMKYpuxjTdJ6ksBYk3j",
  "key10": "43m7qKYjmr2amwP4yAVg3sTrMEGCJXdxGk7RVVT67d4WvjxTgfiZnojo1ZXziRcNzKJa5mF32vDhmFvrgLmFM34K",
  "key11": "tQhDRnmkGR662aqvrcM7p5x4Ja4N5HZouYhodM9P3KW3zz5DQnxxaZ4FDDmBuwkZBxqozBEnCXZrmVtFptedSMZ",
  "key12": "5cYznsyVdtVVYCWwMEggUx8St5kUq6iBjg5S85tHwfmuQhtg6iLDJsi4gWxTYXd5EX18ZUVr7jQqMjbTwBeQW9Hs",
  "key13": "3Y4DFpRuHfU9xyx4MQ7U8ovXpztj95CUxxSRfTammEw2jiyTKu7tFKJaHgcpaVHbCn955gZZXxMKsqGFds6Y3Dy1",
  "key14": "5hHceuw5qNCUeu9wDQtht1cBbCiJrrEh7Dnt7Z62gAJUmiiiXXLUWKzWv937qLjGwBkWWY7b35UgvDEEp5XCvRU6",
  "key15": "53ncxVcH7JW5TFXLV4SmcincJZUJNZE4g3gomS2uao9AnieGPAWkRLosS7DNGNL18YTugRdr5hyzTEjb8NAPTwSD",
  "key16": "3Ggwpp8EwAaFeMMEfUc7GZPVtKPZmFymYggt1m4pX4aCcWbBu2FaMy83mCAM8CUL4st39mV7PxYUVy1DZoVb4GjH",
  "key17": "5bt7CSfFQAQQqyH7AaDqwCfwqFZewze4uW5375HNw4bUYocmMmFhh7GDDedCcbD83wLLpXZbpHBrre3fHdGvmC6U",
  "key18": "5QHAB6Fj2UytHHn31nLe8d9nozDS3jc7okvwcnpeBjPx1qiMHmbvANGvWC3MBXELFnYWRMhgFBYiG8etuC7VJPyM",
  "key19": "3LW7vPhK8NnV47jmdkgnL3CeSnAborBKKJ83dkmQ16dQS3DmL2Y9k4kmtkyVNEjc1bsfmFU46VQe4ksrRKbwDvc4",
  "key20": "5JyN7B574ztVD7vQvJ2V2rFBhSg2MnEfhU8F82SB5iV2B8JvhGnoPEzDYWysvoLajetXZgBVME9nNQD871eAHBHc",
  "key21": "MeJ5SBp9XuqhPUQt2xQJ9KXxNarA7KK2UV5TG2n6X3YAqvAShozSMR3hMCycLAWDZ95j9YiZFZ4Z5BWmXRSVNNF",
  "key22": "5pEGvkhdd1o8fmSu3LTN5eEvMjx7Kyg7wB57WLrVRTDA43wkGFHeqaCjcfLE2tPmrJmuzaWboaviFcUsbTFapGJA",
  "key23": "65Qw7buDWa8VQwNGy9zH5CcXA154ge3XzyxKniNYpcpReimTnP4KcW7kK3hKz97g5fiFs7YrvcVqv5L7MRDy6H4A",
  "key24": "jASxLpddQmaTvw5J55q67T9QicvhTRrcdzxRU5GAuhAo9VxmfMScqKApjnDBh1swLaMgjcv4cBWEmKoHXfQFcYv",
  "key25": "47oqomGQ4ZwJVbPPXyg2S7Awm5AiqC5LNJfkSasw3bPQ5QfFPKppAWt8WQzJZSi3fSGWps8Fx4sQRhPk9xiSX1HM",
  "key26": "w269W8FX82GJ2Ed2T86C8v7nBc4Rt63kNzAqXrehjUZYMgkVYgBaz1kDDJz47ADXSamDnoBsm9oj5m435RXrQmP",
  "key27": "5Ea6GYqNL5KjbgKstFp9uP8opULhYKNk5tGZPk6GvY3YDhGW3h1p5o1KzjwPQhjaKMrBuPk7QkFFf91qAsJzZo8S",
  "key28": "49nM8pUT1gwr5BFdMKCAMQzcCKCboT4Ry7J1isUzEb56AnHKGyESPRQb4CiZt31Bdze5TyUmB7Ak3ikJmkJr5V9q",
  "key29": "mrAe7j9aQMbBM9gUntmThaAJzKhkpjbmpGgtmKdArQ33x6YFxpfDUvyqqiPQN3QKizRhEnjfpDu2Ms8dU5PTFVP",
  "key30": "5GbRXvFBcuzpVXHyWpPCZbaEU2kVs45XuviULj7ptc37TYdZQbMYMQimo9vUhjow9ryAacE7YbBERUni9qtYKw4U",
  "key31": "2uDLaqHPqdpBw9f8P1PVrPLoS9Vt38smmzvvfkyLotTw3f4CBDZsKhzjQZaYnQjoRh3MCwE3YTrVRXpC2zuW6wT3",
  "key32": "495bdHc9Xs3vHs55pxEqCZKoW9c7cirPWEnGS7Vvi2C6mTfdvbDe3jrHCSTbrRf2JWUPzxyUU761wkuksn3aDM7c",
  "key33": "35AAvjqPyrXh1JwzpBMoH2gbJDqYwkfWPugw5RTn27p9eUaMVU2bqez4BLxAcJuFVrVvWC92QdtEuz3Xy4onDhup",
  "key34": "3sZnMNvgHmb7JdgCiDgPPHzXeJRBKJWowAvQVmAsfyaxb76L4HptTRGt2GSVXVJoJDENvJwSt5DVdXqwztSBbqky",
  "key35": "G7cVSxBGnPDFvwUmbGgXZr7d2WMHST38dJvGxkYJYnv7gzCTV9TV1rgE5AvGRCDHK1sLsHxM4NTCgRSeJxkmWDY",
  "key36": "3C1w4mPa7MqDbEb9RQ1qtMWFGsH2KLvMdjR1yeaMmgECHJoA8fqkr62vPCcYWNp8FxyS4KZhkNgupDttc3NTgLkE",
  "key37": "5VG8tWJucREx1i1e5d99iK9at7p7NkNp1g4m4R8ZTZ466FE6ixdh8PnvH1HD3JyEK1oVNydW3CFRoaeSAw5UvYV3",
  "key38": "5PHBXLZE5BTp54CrsyGsTuNtQLnEn4k1Auom5ELiA8FX3Z7j7T2vsmyix71zC3DrrCSrLTvTFvnhGL6DFTuhK6GP",
  "key39": "3yx5K79J7WC3FDN5Ehs7K4z1TmCc5YTGnVkMgmva6aQu27BS1gV6x9CWbYqmEkBzoAs97wHstmrJDHX8qSnW1qt3",
  "key40": "4jsH7amMHS8eMacqGbbeHzNPHQW5U1Dm5LQc3hYJq4yraqribB8gBvaswJx8GXYYFneZheAqrSHsM4YxYtWGHDHA"
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
