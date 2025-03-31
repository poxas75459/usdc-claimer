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
    "3Nyi8rykpuFRg4haSxmw7MrpCQSEx8CDcGCLKfmc4fAHVta3smkg1fMPmu5kSYvSW6tUzoJBbDXEyrEUsVEs5PBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y9KqQYaTzKeKvSHiRKT9PxTHJJgczxga94tY8UbABErJPrrbFjzi67J7ceX2Tkj5cLx5SScwn6qossKAybfLLeN",
  "key1": "43yppxSHWYyLMyMDL6F17QuiQ2HGfb79HhPQKRH377rGS9TPEBWQMjWyRhhWQZ5B9nT6Ym14WUZ71Cmz3owXch6Y",
  "key2": "5i9MVmvdXCivST6z4TDnfz8dSYb1Zd3RFM7TyN7xgKAPr6ei2ii9YAq9RXv8y6E8HSSkdxRHsx8JKaFzU1vYpVat",
  "key3": "56Sgdb6gBz5BqwSEALe6hBqxRgCKBBnSoE3Az4YNorPMj4nN3tmReLUjSqk3pNqUq1Rgqo2S7JWRTsvTNb3wvXAw",
  "key4": "3ZZrZ9WPhQwTgLtYz3dbWYVMwrPuJY8JHBUirJhDETGAniRykTc3JuKfdhNeKTguRfM4fcGmGJ3bpq6cepk6kJQr",
  "key5": "4TZbmk8dRrwYkN7tHsDbJYuZuBmHJv4EveJ9zYDEEYbYQepP5fMUSVDyzaQdt4UU9T5NQ1RjhsZr3gsw4mEGyjL5",
  "key6": "3jYnj72JMCmN5v2pANWqV8z2gAt1jCzkwdN4AFLKZTu7BpzJeNd3VXC9JpGW93AySWwpEn1MNiE8aD7pMKXPErFK",
  "key7": "4gxzCDZ7wdU8kTvQSeZn16NmA3EmApjtfrJ21goPKjKFJQj7rFnAaZNpZMrq1UkpBDJwELBy1faGundZnJnPfmRc",
  "key8": "3GTN5An5jWu2h5w4Bu19oYbLnywgh36i5jBS6Zh5N2M4WYZeHwefJXaX9e4J35BmR1e2iMge99mgGumHXN8RWDTE",
  "key9": "4sNtDNiMz57MQ6GBNChVRg2VFmVdUoXkVPg1CWLb8ABkcxSTJFFjPhWJTPtU8SKrZ7HPU2xRgTPrDqJ7mdN2pKJH",
  "key10": "5oadSRwZTiLsUvGkvEA9i3t9sfV59hFed9hhJdWuC4SDu29EzbTQ5H2YTzWGKmcHowQzLkadeYKwSgLeekf4ivZ2",
  "key11": "Q32tHxe4HmNdKXnXiMEn1Z6qzsYqE7yuNcHJqwWT8VGdi7eAwFRDu3ucmZAwUcfJCvJp4oEgQuHLtWevhE3C7uM",
  "key12": "5GBwaLuPvCJzUMAydmiiBzWhvUmV5Z3FDaTNcNq6aadCD4dEPZcBqq9YdsYbcqND4CAK2FVHuPfQYTu2VxTGtZoa",
  "key13": "2Nujg634ft6biT67gmfRrinPjWGSE3itabVDUktSCqXqRrmRTwuqUCaWHoGbQFkkNXVTrpGcUKyPvY4e3e9JYgYd",
  "key14": "3DtSpXMzyJoU7ZWPHBa2dYWZ4WWLy5sw6oYoS4dYVwzcZYbGb1trBXEc474CxsNKT2hdteft8G2Xhu3VTMACuHr9",
  "key15": "5dwg7gaL52wShQpAu8uYPBuaJfz9joLJjWajDtJL43DKFoZnwFoqV4nGxeYQEwoJZTBjbewokHifGGaenzGHmpMm",
  "key16": "33ebNmtYHHsHLcsvTbBcjqT8ryuarssBEPJswgLqpHvio6S3tx5DKw1JMkstomhn5TJbKQyrTPnfC98WaY7cprJc",
  "key17": "358RmdytQTDAmFuYF7R8EHcViuxzjpVxK9tjk58xvtWL1qVqgBzktPvUFodMDu8tQRVvPXsvt37F67C1beEi8NrV",
  "key18": "31BVCtXEnGzVEMGFH4Pma1ANMdZsd4dNMCTxVWYgYFFNmoG9P79aaJgCWjS2BGwVD1wLFNVM8wcagJBEvSYSWCX",
  "key19": "3EW9mUWpPH95khAVrSgoHkEoeCZLYoSHdjajoB11QhEUPyqe8D2xQ4qMwYWJo8XZ3NGStDEJwxHo6UmXtfa5paNp",
  "key20": "5wZk3MGBRgeedkrNjwCxGYK2mahW45GNLv9UZ86HUW4Ugj5C8tQ4dG7LfFnENg9hk3Nh6dL2RSMgGFccsv2e4BAD",
  "key21": "5fZLJ35et81LdC1TRBn5mw5f2R79wiP8do255uQa5Ze5VkSHH29XieUV1peSJgut7NdxRm8oTRQVSaRSE9pxpEj6",
  "key22": "3awA72vXoKKRc4zC5q7KE39fK9E4avwLHiW6GUvNMv4gsc1Un6K6VE5GTjzpV85Mm7t2PhSGLwRcciK7PcVqGNWh",
  "key23": "3Xv794Sc51RGJ7eFCW3QnpVMwCN2vMLNQUD41K6uz6mvsu6m7WRx7LksTc4Rvo4mb7jZHfP8LLskBvV6CKwgEt3o",
  "key24": "2nC98Z7LfuD2LWqLtefZuR1HENXwUSHtHcxWkhZxSAUjpA4GmpZbGdHEjc7tTNRTAj6Z65jD18jvTc2ddwGBGc4V",
  "key25": "5VbsDNqNYxtdi8h37jWMyuBLaHhYD5qmSoFDk4QSGbcNiCnLcr7J5M7NAxrJjwPuTiHpG23RaKTQFFeYVmCcoUHy",
  "key26": "4qfnQVvJdR5AKs4YeDDf22jD6cGVBdiUm4DwRwufdKZwtJp8SK9gYEZMbiNsGSE717ySUHZkFZHZdE5jyeufaTUZ",
  "key27": "2TaTphEhZDpiygQ2aJ1PspicSjizFB9drWuEv9yERM6NdJVeNQMV8bDkUMECaxhRqa27bUZwUAHG2ctFEkpU5C2M",
  "key28": "2owpz5y4X7jzgwZhEsrNZkGB83MXC8XHHUC9JxhHpEGT9fE9SuCuZehwtdVYEASjH4c576nJLwHprDTYktA4rN8S",
  "key29": "2tHbyCaJsHobq8sEMfx9LBuAxFYKYABK2bUVU1RATsmD7tqYnDGVzoRSjLwy4RpxM4hLLtxTreuJaN2Numjbx2qS",
  "key30": "4f9EUm72LoRw3knWbYkuWgreUmTt1zgVKwre8Nmu8rWHnwFyGfqmDxqLwY8EdjgbiFg9CmfwsgcryhUZYGP7AETi",
  "key31": "3o5JHqrCJpQJ8QWS1qLwqSLiNQTufkbBy1fXLZxG1CzoK6QuF5RySE7Q6KFHYEJYqBUhu3shhoPgzykniLhu3Bgj",
  "key32": "4fQ19YX51RYCztg98AZtKjSEapbjnTJSwg1dnHsnLHfRgZAbrLZtWFpFSKTWDdsF8QinjPij1ksycWYov1nFM5tm",
  "key33": "5wNtyWpS1xY1dPEz9JZdAttjsYRU58LgDmKfnHyYhQ9QsaLPYCtgvMbEFtD8943Tq8FGWHKuq5gjHdcxb55pHYvs",
  "key34": "23ZWGCddnZM888x15w5aRwRRp4FrYqMmj8MbhTX4UgCiF2uwUxiMdUntLxZU3xfA6LQ5VAKPVJnj72tXsVHbR73f"
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
