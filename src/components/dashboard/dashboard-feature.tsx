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
    "5Qio2KsYhA8UCVtLyTgaAHwkcs4xrW7LSiyoYji4UDbFn4RWccfSbs8smFrjcYQuvvTyF8Nc3gPiJJqVgZMLrHfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U9ZjFycoavSRz8ngfmiuoYXZ7NTsq9sHimkTqdtWWbYurn3YRtKfnHKgWbHF8sZUfL6AQ7Bt5YFerTv1fi7n9Dw",
  "key1": "4rWP5J9qjUEy24Q8TateVdboZmSpbxmRLdPBdykNpq1hhFWwvs2eGPzW4jPf5LQhhjjSuFviC1DZZ8VAajuAJo3X",
  "key2": "q6Fy1rkUV11Es9TQN1UvKPwajoRuJUMobmhyXTEqDwLeZRjoxbTopwGCWsm1GGck2uHsVfkVrJbUvwyjkLzVhjT",
  "key3": "2Sh8bnFhigwL1i766YQBDEn27FVEZGw43DDMh5vBMxdrJNmMfEMi59jarpNu8B9mzAD22dhQ96tqxnvYJ5pFpqYb",
  "key4": "2LeKRaAmAQsRngPvjtLt5nu1C67U15vmdx7pWssgyxHbtQ4Mwjq1VzyH2kCoSSds8R9kjQQyfJAa7RdzJXvP3D1S",
  "key5": "5otCEqtjkqAU5yLLv4NZG5Rsz5fkGhGh7RKGYjzkr1eC4PpGuMT4Xydsg1cNTcxSkgUmy63NEjTaA1eNjLQb3oRw",
  "key6": "2vamgFW4hYmGhiYt2tNM5gyzEASV5qNETdL34JBErqzwwGnH1QeQhWir1FbnSnPE4kVLHZu7TvhY9VbiyYkhJgp7",
  "key7": "z511f98TaP278LhsWkhLPNH3Z5yt8zSuUBEBEGQHppZ5iGeyj4kBU12snjG8sVqMyuRghN5xu63CR7Qr9u8Db8W",
  "key8": "43Ga8RVPqhiWMt1fdXpQDCmKsaMWcGD5qGBUY3Yp9DTqoar5MyecUF4rJ8xnnTFn6AmXtW9ruopJzCFqX8vF2H69",
  "key9": "2xgV9wjjXwfQqyBVaTF4Q5Dfk7a1RHxLwZrXpFYG1G4ztuTe44a2ogembFECPv3J8A6wPcpc6VnC9cvuwzRgVEhj",
  "key10": "2kSpF78RebkXqJWpVmWNiXkr7cNYDzcRbWSgpBpSnjkkqpjUFBY3MjaN2JQTMudrjPwVsp9zy6knnCHqL8ZzDwxy",
  "key11": "3U31zj67Y3yavFFZK8e75YjyDMZ8X6ykiLkModgdeGJ5cHFx7nYUrXYD5scvjbEPtdMStf2QbkbbpomWVNR2yBRj",
  "key12": "22Gd6ajihryRq9FPzHcHprF9Z7GwAmhjdGVKAEaqnPan2LfqwtqCVPZpPtCNPY4isz2Sr1oE2fevyzK5TockSNV8",
  "key13": "mkoUNkVv7p3U8JHdfY4aUXeeGfadqLAocJgMo7ywNyDHxtr3WcwfbTTXtirD1SJv8QJEiutNmq69WonVRDzKq7d",
  "key14": "5dHZeVYbcyTuX9aen8DumvkYPFUBNk8U26onHi65ekhmWW9F1JFDegDFfFVpSadZfjoLZXQ26Bf6hY1YsvBWj6Xm",
  "key15": "K3KQkQUnaefw2c8b98cBc2BSUaSk3VeS93qdxgkyWEfs4Lic7pBpmQTdf3NEV36s5ffCPb3KmW2xnuArzmzx9f2",
  "key16": "VwGeH1ZruaiGoyPMDx7hV2nwBFRdhVD7HXF16aHLALynAkChuGNPgpkuWwWLeY2v1Z5R7ExS2Xepqw3wm3vMbDX",
  "key17": "3TNFEReEX91NY8tY3jXfYaXDDYe34v6bZR2sfRy2LeFTbnURiQYwGw3cTrAYeLqmoHNLLC1Ev7BNsuTcuqXxaPJE",
  "key18": "35h3xLurzSzwwpTY1CEksrh9aZPB4u2Z5jEdp25LYaB7MaN4NPfmAF2ay2foF7U1aiv9rLpajnYQQyHg88WqUopB",
  "key19": "2BdQSQtByZNVRUAWCZjcZo8Gfk8GMJTiP1Sxm6fkGxKM81wFPAw89TaS5ZnuKXdaCHVckxx7WGggEk862tafcw12",
  "key20": "3njeUdNiigzJdNGDRYs37gEZ6SJQU643b3cAmUdUPpR88xJSSgD4pXtd9iGiNNxkmRNuqr72z51DtW6iR8BGFyaT",
  "key21": "5qLSciKdqN5eFr4ojMubczShqNeMhUVQiEd2Zzk1J51kJn4b3sBjt6XdEUah6j4DrC9isjP1HMTQVJ9hQHseynhB",
  "key22": "49EurQRjCRMDAiis4fM6rUZxEZaEzs1Q142x5HAUtc6nqJv723xUfhPncLVRYq2BzQD2akAHftEGkb4W1iZh7WRx",
  "key23": "34gqTbmosWKu4ds25cJsE7EFLHiFGb8dnPWoTyUXfxD6jhdUeLKQkbxdiNxwobuHg88VcLtvMuq8nKUVQocjGbdM",
  "key24": "2azXTSp2cZHjdhvpuE7W3euBFTjNv4H3KRHv6BfBEXKVL6PU9CCV2Ufx1yEZF7Y8FhNCadFB2FwMMtSrcpny8Ugf",
  "key25": "5uZW9RDq3t44ZNJzqCkvRGRbQv7qXHKTUN5uGDJJZEJywh6g9Vs7VSow8xjjNVyGkWEsJVRfaEeHHrRE6MJGkSsY",
  "key26": "3731GpZvo8ScXrGrYhrgd4dkdv8RGnufAVRrJVD7S8dPdf8R8zLnvyAtk2NevS4XCY7nsuzXv11WdZVDw6A8j941",
  "key27": "4wTpskqmRrGnNAqv1bbG2SAwsFUNCbHqFMXUbb23JEUUxHdNhe58NQ6CsoKK9N4RbudQ22LH4VNiurzRMLguzW59",
  "key28": "2mpSeiKMBBqd42692cxFPfcNpNELFxxnTKH2GGBQM9adxh7dLYbo5P6kdHVpkHbezxGGuB3n2ztfvqPXA7k7SVZR",
  "key29": "jPYrwkEP4pt9tVUM4mH98ChU9EW3nMzaucpyeh9CC97rfMDAGLpcJop8iZTwQ3hXUTpKUmwTgS3FFQonE9o7gHH",
  "key30": "38MEfMZnuzbufno7NgxM8mgMe5Ck5FHA8hS5JtCAWhECRqGQqXZksQRDfcU9kzeJqdB7A4pPMWPERRfXPRCa9pEL",
  "key31": "3kiSqN95oXE2AkPe2UfxaAYvfbxYwsFPdsLWngJEXn1TA8hzRcNWH8LNvUGdA41NDA5aw9AK4V9dARPJgeWh31gy",
  "key32": "4GxgLSXAU2xYSPa3ETtvCi5faPHCGT1YdYDQMLM3yEX8TQ14fuixfzqHCx4TsAkLn7vs8JmNsPXHzok2FgfK1Utf"
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
