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
    "2cnTmirah6cTrs4qndM2Vcpb3pHvFZmw8WYkLSG1ckVBpivKSBeZNBW38FWkgCZjZFdYMoKVDLKmkinVJTt54kEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xsYnixDiegCrZ53uXNMpf2f7RRQnAVe65w9889u1P2VcHWs8VEcU9sQnkGL3UfDuTyAan7kTke9wki5kwHRDQzG",
  "key1": "4LUCpULgVLtxhoqAU8A1YUjvQEJiEUMno4X9Xdg1QVVeDvU2EcsuwR6ifPovppcVAQH9P5qmXs51vadpv9hNdXjF",
  "key2": "PEjJdQ4aXf57KJBQVgGcx4Ac4X3EftxLaq45tqT5eC179vKHZ5XjxHJmX7bCwgGMhzMGUQDRwmGwTYAA6czA1Zo",
  "key3": "woTvZwp5A8q6RhSTAMPoqhGvDCKPC9t7aTKmgrdyHKALsWvZgprnXiQu6EkvKR9PKhfuLdQAjQstui1734Vjyxa",
  "key4": "4okVK1zeBYuFr2PDFeE8GfqMHgAqMVZYfyxA6yKMCRQRFT5tagYTJBqzzCkHu3RHQKfCkHvBCpx5qLPS8dcM5oL6",
  "key5": "62JMJXiBKe7qN7skMoVKPdE3UhA12WKarBEyM7KtU8H36MRre8vsYNJvyinLdR9tG6N9brEW3vyahtwiuhbzs4VJ",
  "key6": "3FtBxTFqJJDKZX8VxwKY9NJt1vEDJsJqnx8dW89xYtgGxwSSRhd4faVrq7KWUcv1oUqgdX5UYP9mQKkz1sFEiN78",
  "key7": "5wjNUbtL1F8Wo7DTyed9CXyXqGUbNbPePC2d9EiiKA97ffLzXpnfeKT3rXKBcHcFNQ6w4PU5gnbXn1yZJVgWKD7n",
  "key8": "346UULCV9xA1pY3FRK9VUfMUKB1FkHwzrNNb5DsuPvaa3HH5PibPBa5CVvGYBFM5nWXp6QQLSVeKFTTSEUsksn6r",
  "key9": "3CXCLeWzU3D2cSs34FpNQm7xMSo5cTrLxicFVHwQVRPn3LMjYD6yzUELV3HaECUXDsybQ5kWVcNf7H8s6jiNLeBy",
  "key10": "3mWrp3L156anjQ6VrGr8KBViriqukBDATKN5gacnpmC2b4UkCCML3DaKvRgmaYSoyfo28gdiUjnKJnPmwnineuUU",
  "key11": "29FTo2SKSCZJggViR7BEct7FgP71gxQhjwWXxijimhpPyJSxXLa4NdcLkRu359amsDkSFKByFfDnVpe6DwGaX9U7",
  "key12": "2ukyizRUcZGxb9aAn6mG8xr3bCx8Bhx3PhHivLjj3jHGGhjZrhCDZQ5WG9bNakTo5h3eiDBAqFD6miKcGARMdg2Q",
  "key13": "3sUQLHjzQptTmNjATaYSARxosnGAcemRqVqhgfxJGigPP1Vfuvsc7GXFcs6SeicpebnQMfg6Q86qniZipbHQEXPo",
  "key14": "L4v4DUPtdRoZPsa65q5XmQbgd7kk66QpVXrC6Ea1Q5mQv4Jz2NpK1hD9NEmmKWTHQTJqMRkQvxzFvzK3SgbajtH",
  "key15": "4nzH3cRhqCFVoh8Xn7nkdUqAKMxK7seqTq5x2LD8LqTFEJ4VGpNV611s9o65vc7EpuzbKUTqiGkekSdJe1KwX5Ca",
  "key16": "5DVxYjHDdaBUL2kvYaGnkPkgef8o2QsyXs73pWfW7xnPyYffhk7e6wb5iFc2Qgu9SoYCLzFUL6rPgsRrEhMTwELs",
  "key17": "3uk4WKKdd48TQV4uTdpFqhnLxV6xCfUHMMRHgcEXGaukZN1MXJZKRXYE9gFR8UsNMfVrPfH4cmrbRT9cFSBFafcd",
  "key18": "321c6MikhQWCEFsdGXAVfx5wXKNPPNN6A1f8jux2K2TJUEAq1r1uhNshnex22tZszGQXaFna6kRsUGdkFLTgYG6g",
  "key19": "3vbF6NAM75CjDnaXL15iJP5RMvsQjvTARy8aroFNrSig7pLmoQLyk1Dk1zeaZWG6hnuGzzsxpHVKq34zPv65s8Yh",
  "key20": "3bvWH4DpEzdnqdUPRxWTprHZ4YJ317voiwrfo3oDvezXaVevcaLYJXs3eUjtnSjCT431ZubWKj74T8bk4PLvW2Xe",
  "key21": "5BGEc7LBQ2CM1jULq6R1HQ2C1ZQAP1xNJGA2DGUxZasjNevTWFHE2nPAEPT6zFPme6NaLovMaeN5sUTaJei2F2ub",
  "key22": "3hMRLogey84n3HGtzgTvyc2QGPQiNLhnwNpkTEBHneATg9zR3HLjuc1Zsafs5XDdjkz84zCyVLNBQPYzvZCdC1Yu",
  "key23": "3H65CwnBNGFcxFm4Dqm7TiRN165NqRxsNN6xfPTyfcL5srsL5dHDrCJxk5Ur7suNstnvkTEqg6xiJFgKYzFQJvDH",
  "key24": "2C5Kacoy7PSvfLHEB56BeEq2UU1yhhR6VGzhUEATr4m26or2gPRg5bNtzMTVyGtPZWgw7nKdP9M9sPMWsxYGaFoQ",
  "key25": "2v1jTaE4WXaCPDcwWoQcYiNFYyuPPQnHkjpAPtPfu57m7hpGc8jrXLSPVfnvhv8wabeiaHu4i7f5UAapEDUBkTA6",
  "key26": "3LJF99Lxptd6jm4QFbYwKU2xMUJpPaPLidAFXVF78FYD51AeVAsKmh9r6Za2C1V3YqYLQLxyS3MzhqAhBpMf7jTe",
  "key27": "4yXjpVLWcJ6z3Dqz8xCfvV4MD31L29M1KsuLTajoCuN4qowz62awLCjDVqrvTF9i7myASub79pDf9HrxoipXvg7L",
  "key28": "bkvvdhnrfncijRYBoj3NXSi9Nv6rMXioca28zAVXMJL8vqmttmEihi4pnXHxkCLchxHcAtaKGBU7hm1fttHBHiJ",
  "key29": "vEvKkXGHQSePp2Ygug9aWwyH2bSTjWvzi666toxcP1vWhUD8FE8DHN6c6RMPyxwx43DntKUhWpKAUbMUhgEczvj",
  "key30": "2pe1f4TWzqMpBHi6vEXjGoD4CavbBPdTMaTW8umnNmEjgrjhAEKsaWdYsR3TjDMBdDyTk4wzrYhUnfYBEhkyytJh",
  "key31": "4VBd8bCSxmnuygtZr78HWHmz8BodzFaptWZUrTWiBNQDCy4jPaeggMYw4bRJgB6f5xqqBLGaaR4CwVAFnCBfv4hr"
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
