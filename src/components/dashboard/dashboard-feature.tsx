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
    "5MSbxevDLtEE3Eie9tgB5udkXDMxA6J3wYzYfouvCAUspCPvRHAoyaGnRmXzyojjMLRXEKRwPTYTwvdiLMcnxp8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63azqGTahNsL65VxE7DmGTiPzDSt74Ffot4afasXqB99QS8uamm8hKKcXiegsn4CdfFPtzHUBK6Lyg4ZDAZ2GFH1",
  "key1": "55U2dFLoxSZGxwdaFEAkSxrqueBgHiLkgdPV2fsCJ79K51FeeZwRR2QdBh4h5mbXSWXTamfNEvqL3zCneDcaNR2L",
  "key2": "37B5xBbgHQKTz8WuyHod24r1KBL72wBLXSpAmo9ooQ1rWSmU2VSMWyke8Dr3LqGCMxDicpvT6JZGg52AbovziQbP",
  "key3": "5SUQNtdmkqF5FjBvCog2sbtCVFYRNR8bGDkEwzoHaFtMuvQKLvd4x3poBG8AZSsKR2wnBRx6rQBAcUp6DaSHJ4e3",
  "key4": "Msk6TCP3TzEYjRusRHWa9QjJD2upR1NUmGrDak99UzuoE6ZBadALLjEus9s1SgYigxSq62kwJ1MS6ND2HUe53FE",
  "key5": "nb6uih3PmryMQmFFT1CTz4KJbuSFwRpkV61KPzo92iDtGC33MqTVaY2K1kCdoPyERG1ctqrJvsiyfu1xJYYMAK1",
  "key6": "5kyWangipy2LXpBnx9v8ks6c6gMDm1bgYMViJLLucZH5i6sDn8xrGDiPRS1mJGxiVsDDHehmtK5dvpUcZeZBbbDj",
  "key7": "24BLfx1s4Mp9WUAnzWkJszN9G4uRsmRpsVjPTYd8UCYNT7HCpWYK13yfFadRSQditu2YYymVgspUfqykvN2erXMt",
  "key8": "3tNcmLDQTuKasfGeAafJ4csJ6eRrhDuidThBRL247gwx9gwtsmAwTFZVNrc7y8uaJsF5aDAJQ6wt8P5SncXNCTAf",
  "key9": "5fhpLKt3XkwhGGiY15wDH6Wmi9EgtYEgYnTo9kYms4XFQCUpppSnKo8MKGfutGcCXwME5dVwzx9aUPtdFTQ1aNjG",
  "key10": "5FCcA82wmqifxr9ymo5nUsQCctDZGikzu716RcGhjY4cxQY8GpUYXu2A3UfXdY1SXaRuVjUep5wxHczw3uJsivUh",
  "key11": "5gUMBgfpqfn9x37SycnRkhrao6h2xxuLj6cjjAZpVa1ctaJ2yAb1pS4CUiLyQShBFMJyQVosM6e3ZJcw28GyHc55",
  "key12": "GnxFGspSZFX9CReKhzV1rPZjxNVBsRQNzQMKYntGiosDHe5d6A6K2naD9mu4qz79ws52XSw6CRC559MnbvQfbj9",
  "key13": "BuacgBupAYvSCWFBRmrQDrL3HLu6n6j14cdzUAjeepcZvunMDmHAYXg95XQrxefkxhMuVeYYpZECqLiPwmBwbcd",
  "key14": "7exeA1Rq3nLV2g2QxLf6svqtCyjfP8JcJVMvtsTBoFB9WAQh31ApxHf9yBL2oWAJzsxPUBpkM37peRX8C3YxEp5",
  "key15": "4cn1EMgUvSDvKKutUxLJ8bEvYFbu1vnSHgHq1bwVLNP9hwTMWqtYK3ggUco49nfsLkNSRNyKhPYA44rx7KMV5xv5",
  "key16": "5q7oRWZg14LCqEXVvkN2MJKgcdekoSN5VRp4baHubof6hkmr2xBVCpLryzqbD3vzsjrf76ewUtxKfPDGBdxeQVVs",
  "key17": "5xumiSVFg8tYaMFwt7rRAcRsUi9ZbY1Nz3o4AWQ6AGSYqrUb71oJR8Fy8JXpGwfGt2fVrawdfBRMtdneWeTme5Y2",
  "key18": "2wo3qpHjgG9jtXaRhgzYUywAtaTcX1kicoY3HtdEZU54B4FY3YGphCVpy6R3RKEBq2voP5F27FceH1sdMrKeJKwy",
  "key19": "2DNBMVonT9wdiGYpuZzkrDpDNFW4baJ5K1re8TjYRBDffJN68ZV2tk6zRDMqGfxh8WsX8MQjCEPe1HTGGchPrfRg",
  "key20": "58WXqx8CoV5cbgktTRC9QMaLabPSZ2EGKJthxdf7NzdM8rXbC5zYGsoJhaVZWXBPLb9GEcMUtZ1NJ9Wsk7YqZTbx",
  "key21": "5kgd9ETEkVoFdXTvUJU797yBuY5m98S4R3xNvgz1rh4xr1PtQvyRVkqRk741J4f9matF8qR12rU1kDQjcS9tFec9",
  "key22": "39MKpWS1uNqhsGKXTbCCFdrpmM6cRynWNMoajfTwrCV9N1nNWZ6RweJwwcFvP1aaGzjZk5RL1vdd8GkvdFSc1FTh",
  "key23": "LhCiYAF81PQxsHE8q92WD2iRAcSAFyKnQF9FHrXJA4V7pUr4nnHxXs7zpqptW8rLv42x8TKkYsifLSPwMWDhHbt",
  "key24": "2okWvKhdCc59jTQuq6xhoSrxhiVFqp5h5AejV7BvVS7UB9p3qXLWZ3WLPAaHE7NWFfoy7sD89nVReNDmkhJwNzMm",
  "key25": "2BtgBKKnySCpwkeeMZJvRX4j1y47KzFCKoxBMBBzmtUrXL4BCzPPNeszVA4GH59DmcnsL6RrfF3Xr7hUerPJ2wY",
  "key26": "3CwqvaBA3n6RBvFs94peJHLn2sPMkNrroRbjWmrafVD9rYQd4f5oPTmZs8Vg82LJX4XCxZXfBGNh32Ur8bUptMwj",
  "key27": "4ksk7dLq9DxaeGjn1tV8t2Dha56bGjCXTDZdtAn2hXKRYNRRaC2KkicwoJE3TKK1iJdeQ4mhLf4UrKxXhuZsjqN3",
  "key28": "5zEZMAjMbSeGKxJZt4yFPbf2s6ieBSS8Y2BKWynBeJ85yFknjWTB4XkjfP3N3wzD1oFoWomhUh1jjiBVm2bPoJrj",
  "key29": "38xq3w76cL12zSJb1NGh481mXJcURiRSVSZucsv649BC2E6t4TvtiTNKd6Zwxhwr1ggWW11HBxXTwF1PxfEUwjbz",
  "key30": "2bwrdrDR6YhJ38Gdt1DSZhchVzsK8N6dsgzaw3c2qUUeyjgAca8p4Q2CmomWpyNC5JhFMJ5s3s6qKKUcKA1kBDi4",
  "key31": "3bzskcgH9oEQ8M6AkSAwX6oVuoQW9PeaoVDA1rJw9E2ujWzecSr9YcommogjUwQYKjNCdtdq5m1AkTkmSnMEMzJR",
  "key32": "5CiPBU6mLTTQ2AjkYBHRHbkevSex2S5jV7TSGPetAFbHf4bqbbv9h3N6xvnS7heWCHbaT1Xsb9xPSVK3YJPvQCix",
  "key33": "23WpKquUfGgH67s6sfMaCSBVYDZDEbs8dR2WN4sor4BM6BJtk8qYhjR13WqYENhnQLNjkE5FqbGxrjpwW9xdehyY",
  "key34": "5iUvbCw5PYHixjvEce9nKh45bB1qHnQ6PWS1Lw3XJFLHSox1XLRZR1WxRcipvjmG9PXjwxk9jNLWV3KU2zmSsoBJ",
  "key35": "3iBPY8VaCWXyafGSGPewScW8uWmyf1FM85EZAyzqyE6Ap1TXznRBXfMxtQGSjh1ayE8zFzG8DHqFCNnjc5h8keo5",
  "key36": "49FhFaA6bxt7V59b4oQUfKYK7ovYuaA2KbXFWTKsAu1ixXgTQdXNCxyvTjA5y8ygHYf7DGiwBEgm8LgjTZ8qjp6K"
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
