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
    "53Fj32Qs7o5r1u5YbdVJLLxwgeKfFPutck4tFANxDToyRR23btCmt46b6pVmLzZpziaymLg2JHnkmX17EsqRGvUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vo59FYdLtFmHgtLLGBFPdV6o3ZmKExq3Kn6KhtDeXo8miKdj4fqiDbRVTH4rVbijbkMAgNv1L3Nega4GZuT3mfF",
  "key1": "2FGE4s8dsF49wT7CZXNd3tXC5M9xoEWgjkEWN3zPoUVLbJ5Ma7aM7tVzLLL96gDttf85mzSNrz6aTu6ZJWzsrvFd",
  "key2": "4zGmRD2a4WhNwEJzvkEos2HPtb5iseo4YBQbkDGxuxt3gCQvaPArZWRQV3jPqLffuE1HzkwcP6BWSpYCf9K6d3Si",
  "key3": "muRLusAxei8EGJzGgyrnCubic6LuR8tCGwtgdFQKruT3bvBqvqLBzGJNDjQmuwyaVRoGmuw3zom9Y2GhDLrWz1x",
  "key4": "icq91Z4pVgWJfWpnJd4bMPbDJpoGtaitb745ELE4AR1hq7TxYcFttiUxLhR3m7EKz6aNnA9zKgas435R3FwQ1fp",
  "key5": "3cRDc7AwdWyVj26dQw3Wo8pBUj7rX9AEMTRT5rfKkH4SDbKwRRBeCsyUZkZxjJx4B3SaPrgLZ7L8u3FLdu5a5G69",
  "key6": "2mgp4gNG7T3a2T25NpMoXqiC1kRjj2KYvS4wt46V4U2hDbF9xpmFzXA8mbYihFsSHiEEikGez8sdCWAX88UVnqJF",
  "key7": "27bTCXsaVcTuZRGDoHRySUTz6343UmcyKQACVYhvicLu8gqdZA3eRw6Vr4WNTEw5GBuj4g8G7AetkpiAhSTQ2Fcq",
  "key8": "2AapuHKfmpyPRa4r9htfF6XoFVpEYpaUTW6HMiah3AFPSrb4LS7Rm4DqXi6ki4qbFwxahtfwn32GA1QN7y81AUDA",
  "key9": "2hfQ2W3m9L5xkbV3rtBhALta6Y5bVYT5Gzn4ygtqtRqzTbgniBevRobx6QARhmckRtP2VpfmYt59qbTip7Aen4xz",
  "key10": "3VV9bTh5RGa3i95xH73wZKMXN1i9MajR9irBcTYF4qJJL4EZCYTVAmmfd72SKZ6rrkuf9McCk571SxY4da6N7fCR",
  "key11": "2NiS5APNk3Vr3QZxtx8RaAbg38zneTcvqsyokzoj2uDDGtydLXYcfQAw9UHXZWqcPEpCCwJK8VTvDyxBddaocHv1",
  "key12": "QY9A1XCnMy3ALXbodJVAwvyvz4aem7WohrEyC1FPKMXaYjfkT1ozJezALVdaYLHBFEvwFFKEjCtWPwnXZT53yks",
  "key13": "4wEGYcgX51gqUBBGWiJhg54cmeGcse7FEVx3GDvt7Avgw9ZXQTF9PxEAhCF3JUHjPMTauUTy9Task5cXBXkf8zGX",
  "key14": "2oaRaFmyynU5weZw3Qc2bchP7iQtW9xmB6H7g9gTwsYNLvkbu2e1qpSLD7pRN3ztTwtNWzB1dmzQNbN6aJrzAYts",
  "key15": "3bfDJEexMruWRdGu7DF2QYSDGyxxM5S14FqXSz8AxfCtWtD67rkB6uSMdM6aHgj3g6vRKr1Ye51wCNGu5A4GPa4r",
  "key16": "3Pvb9q6MaSpZupcBQCGo3UAMXPN8Zcxqb4iByhevSfW5UB2dxDzPGsjWBNLWffMt4zec5Gn6X99urVGHQMPwKDAH",
  "key17": "5Fmt5UZ2YCW9e9yYGvT1s9NFvQwN3EcoGqnicDetT6DB34frNkJD8PScaxwMqvgw3o2X1QMAReLTaMtayiHfYwRC",
  "key18": "124qD58DTuqTLY4B4Pnz3sgMq7aEniJLXJ9F4wK6cwDR2r1m95h4bVbYfKrhGp2GmjVaDPGo3TMebdskgnJkjZZw",
  "key19": "2r4Y8uY4cSsNzUTzutm9eUeHQPRtZ5qAkuQnoWbaGCmuJkJfKLtmfjetknfD5qcBuefSZEuGxtm3f9xw4DMCD5oq",
  "key20": "4JQHofQ8HXwfox8fxDFvCqe2CJLMus5x4xHwgzYcKLTNHXjr7LHZ513UW67rZ49q8mrWjMxHx8bbqc444CHfitbb",
  "key21": "48eJ7Ricvv51tam8imQ2Ycuon8DZYf9VUUFwvmjqFQhqkQ8RQMC6CESWWQUGMwLkGE7bmymXMjQqaPtLDAdBuXrm",
  "key22": "4jVMoDDXFUBsuQi8XCE6HZq6TJGrsF6cznJmRxsovTKCXbxhPZHkHu7VJqHqkSscDEg976WSmBnWxnt5a5ajkvge",
  "key23": "4ejtKNd3BzrEMEMcYMfvuvCpQN7FzisYCgiu85ikd1Xc3ZgpnnJafzh2ABYnx2P5ADNy6WCEgJtn45TqZZAcoYHw",
  "key24": "2PjvdcL8BEwenYEqc6UnA3mYTG237vLB89HYak77Ge1J4FfyDb4bkPfMrChpa3hueWJkvYwiA9FjfX4GHcU323TX",
  "key25": "5YXNvmX9d9xszhQQBNLPGcVkUgA5AkPNJPQDac1T3sNippY5UZ8EPGob2rsB6Gn6DSNcUsJc1YBMABJnNC59gTS5",
  "key26": "4gqzRrRQZtMU1GVmHc5ruRU9NoZJxBAq9uP1AzHtwffKJjZV4cwecUW8WMpc4idZKVfgDm72CjMaHAvHxYEVktbM",
  "key27": "rVuPBXG5igKzTACvic9p7ZngoiT9amEhmWNFXbvqFnvAXvnuNv1WxGYqLFiaovjT3SmXuGKG1umEHk5sP8wYpDZ"
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
