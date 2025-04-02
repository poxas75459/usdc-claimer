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
    "3Vwf32u2UfCM9WoUnSDEPsW4JBhcUgwXFeJuTVvjAKQoL4m2mL91ckxkenLGBMX4bL9QfPf9wrvabSyXNczLKPyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57voGCFq9v86e2opDSDD3nLJ7vrzWsaQn5mADcfdWCyhwr4wx4LtaJbRsG6AvMmTUyvfzj4Aqm9vuG7GW4YpaZhz",
  "key1": "4vdrvBkqfdBBKnXDUHMw3nvHrjg816Thict7wgZjGkg44pZFw1f7GNDSTdg8zhucRMKW5QpavSL4hGgYMkwrbSrQ",
  "key2": "2qtXg56Rnx7XRPFyUssQgs9zYzr3PGjUZjLVuMfQThKvCdJNVJwhshQvfamsxXFHh89AQAXTGNvdv5axyeRgMa1V",
  "key3": "WvZBo4r4bqUgFZtdHmVQ6DyZhmYKXrzThAX4933h4M12HVBBxZXLzohRXGbpeS5BVZB31ssE2A2XEKLASTV7pnP",
  "key4": "442MW6sLFMoht3GUsLYxKsRfSTqab69UwizLEMgXNj9yLAfRsUPVDSqka47s625rWzYs8CDX7ZXG5p3SPWQobsNF",
  "key5": "3ZLMLcGJUMkhtLJXAJ8UmRYeFMcNJpws7RCoTnoN44UZ9Ez3iQi77SnzRHx3wo87QrrCbDdERQc5S6HwCakCNJKz",
  "key6": "4K5fScgyMr8pLtuPL1ch8wK1HApBo2VsX1KvHT67LVHvcn9fUuNc5QPUj5Wa1inEGX2bH6onqqYTnjecUgTKMw4N",
  "key7": "28st9imwyVcz2XaJHgJRW563EUo5NB8K87GF8TMxBm6Qvv3PDgSot1mLSCgjjXEjdTjYn4pNzP179DhzbCFKDsPv",
  "key8": "DqfTnNRbovtz1fKnAbf4VjUk12hZagWqB3C1tw3xC63zSQ9HSACW9w1y8EaEWynuFmfZ8cU6R11fjoEWqDaENfZ",
  "key9": "2KKRTvi9gd7DP2Lp176xZY1GiDtvPmbsXTUZbXdYr5647iMgjY7Vrh3ZyCJDoAvpGx45N87Y4YvF72iQcjgxGNjp",
  "key10": "4MMcCnmxGiWc5D1kLAF7kRBZNSGWpovXXsd2VbcEKND6qu3mjdT5mt9VFhh5ou7dTr1tYvgXVhEN1evpwG64ZrJK",
  "key11": "KRdK7kgokast6x8S6HtvweGq4b3Vc9ju1kz4EM4jqSb3F4eDxp6mGQQa5qjwEuuxK2wEqKx2gRFTvaiAkzWhyxD",
  "key12": "zekJzU99id9MGAbf7EMqVRtaWWAKnVNJmra1DwUodeTyiNPxjbyodru3g6Ems4RQSz5f49gEPCggmwDumw8q3qp",
  "key13": "p2UZ21L9aqp4gQQMak1WQbpPV2GozsBbYqRDAQxJnj3eZ8ffiYPNW1Si3cJtARCrBkpe7cyaRYcpCFLfw23498j",
  "key14": "XTyeRAWbhQT7D2RQDK7LCvsZsmAQkoUR6KfCh5v7G5JQgjskBgCsUtZ9zDwNqm1f7jQk8Y4bpQhTaJjSSDa5iEd",
  "key15": "2a7LD6S3uDXPggSeN4fvRtQLtygJRwxvhgNm1fS723H8zek8tGpB2ks9fF5ruuZ7hDnm9sZGL5r3q35Y6oZYE5ov",
  "key16": "5NcpCyKoGdVH9bvccdW4q7F5MJjAZtcJFM7TuysGYZdf6GYrnEnMhcdncbdZixikboxGkwjhrVt422yadcNzPpNr",
  "key17": "2zuYP2fkLcLhU2gAJA4V4rNyFNeMeUpS9tQwVYt6Mn2633o1H9iPLpgtxERfuEGsXauZJq4Qxd3fJJcd4h5CmEzj",
  "key18": "4NTGkmatruh9dBCQknCkhSajxxPtXzqmnzt3X9rcvA4odsBzzwCoPgHHWxdEsh1ow84wetnUmZPpsa7WemUUhUAP",
  "key19": "3KRq158zLXHaGS4RLH4E33JndzFrUdud4FuaoGZ3WvsMdaqiB3mM2T2cxPMnz5R2G6Gha61WfFkSug9aBEyss1Hd",
  "key20": "4otteu9iZYnRSfFCuSQJwEWqpZnAdad99PUFFw7ecq1ARhcmUq3BQAM5CSvgGd45sLEKSEwsVxzPmQ4DWu4KhZi9",
  "key21": "43gswT575A3VESBYNnMti3vpBJabnYLRfkc1BFN2w9podqoDGMcDVogWEQzp3tzbYKojkPYf5xNsW61HAesegxep",
  "key22": "44bPGyHKEV3NW3QEYoVwhyMK9RmDiAByw9du2dQwTQseoqtS8wpARxp6zoDXxjPeBHsHZEnhpqdBtUazCVeBVgVS",
  "key23": "5ZqCjLs5LQkcJszxSZsUtQdiPQRy4skU9QS3YZh7g7RWs4uzNV9zWiMFp98VYrVaaC8aopHYTYpK2qAbvXdxyjex",
  "key24": "4KUqTtANciKr84hZ8HYcetrsJ6ZsG355rPKgiGC7xXXXNsSimSZ5zrqss4rquigzf5kAYPzhftdRkoa9EAJ4aRCr",
  "key25": "3BqEjWanNFum7jB8xd44yfgFHqzg6m7qi5dQcjovYaFfNoEuvuTwWQS4LXuqTJHRhV3QtiUVeH5gcyuN61ybjXtg",
  "key26": "3x319AacEspygjCo9K8QsK9RqHji1zeydYJ8KBP4H538ehvYxeZT5ka3KejUG6HMwT7Quzokrjd8vS28pbV67sk2",
  "key27": "31JjPTgubxgm58DB3iErs42WWewxEcZNPKNWzgrNYrH4KXhy15sWVYUWrciS1zmMd17KYL4nimKFo2Qjas2AHdoN",
  "key28": "2rKjgBiiWtJAtjPNXM1MgZ3azQkrt7KUHm1R2YJG4XEkZQk2nWFaJTgbneQ3mawmaNNqzyn8pEaZMXQrCe7FfnoQ",
  "key29": "kBJk9BopnCCXuw9mb9x7ewY9TqoyctM2SNXqy9BAvQarVvFN5PbWsWKBFArWv25o5MBqTMARcJe4ERcmC4Lodsw"
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
