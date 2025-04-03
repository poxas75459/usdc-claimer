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
    "FXML418Y31ZhJSQTGieDAq8mchzrjjjLBjc2r6MaucbkTKYo3huVwmFBpWn31gnLhy5oR6foNhK4GmYPH12gcFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1hCWwrMvhmT8YqXsD5iJs1sXCnf1vLeoLEvPAaQcfzng6yq8HAz12g4zL9KhAX1zMG2UgoH26Kc3bbPRKB2kHNW",
  "key1": "3zTUKkCrMfXA3v5sDxQ4WoGf2TDLZTP6z2AESwS4a7QKg11MnZCS9AyEVUm7UzGnCdJFwnDX31rFqnSCdEPCVTSm",
  "key2": "29bSZWgjEbkkNSKZ495NWA1rrBrKGYVwtuPKcX9MjyGoUUEpVUeLCcMTZq842sXYAdXyCqMR3sx2xsN4evjc2Cjf",
  "key3": "3kKMJih9Vs33R4wTATUQTmjsGk4zxY4uLpfhYLTpvTEKok4TkTRoNw3r3ghycMwzVujPk1NFnfDh7WppHhSFARmB",
  "key4": "p4qB88GAXvacFMiEoim48cqFCET1rHKazc6ybJXE9nZiWGtj5kZ9jiovBjwheD5qdn5mZeUBpxv78gpvDDwFbd6",
  "key5": "4eYNmdFSoFxXMUnXSeyC8QVEW4WshgYXv2ZU9kQ5nRx1BRAjdqJEH1A9Ce6eqqjGHXCMRHdbUkXgJuQeorVKQCP7",
  "key6": "hPxKFe4qem5FNnBZRjdqrnQJgZS3XVAtgNYR6badKhgjBUw5Qgnbby29ZHgPySSKMtzecyEWociWSBwthWpRR51",
  "key7": "61THZeKgus1KqbpNhYfJ6FivmzCJhoez8fQ6iscJQuMzzTJufaUrhRos6b3xqPJWQPnVUALnxde3Zk7pHEwiwKpx",
  "key8": "2ZaNgKo2XPBb1jEXFBhTcRQRpUr9cRaeot59hXRzk64P2rG35JwgJVsfBdTiUUVnEJqHwuCFxq8TedHyy6PihMWP",
  "key9": "5oZoWV5DAWwAmrEUmsw3znoG4Q2NdtAQ7aSZxUMwNmqeq8qMxfeBnUkQrH46fTuQ6K1zh3D9j8P3ySey5FYvromZ",
  "key10": "4HLQShBLZq9vk8y6iDPZYcdVo7qtAsPBj8juTLaFgeYh4ufJysaerqTH14qJayzYZPUp5Tu1hpV9ASi18msobAQb",
  "key11": "2ckhDz6f3GxWBvuqmVHPek2RuQMvdWkbJrdbQdeiZBNXgk7SPKXYuzp7fAwqWLWvipJXTuym5snkB9ctdnnNG646",
  "key12": "3DHLpp58yMpScshpQwHKvfEekE1sqDng4iT11arSaAMs1cw3GToR5msBydrL423fGt9gSfhbK8WkJkkGkbUZw2hF",
  "key13": "e2QWaw22rcdZMxuoBCNjHGTjGRTdP5FwkEpzva6Vm4FW1DcWegzKaxGa7yoZaYtcKs76Mgo5kUWGMNWnpRW5pfp",
  "key14": "4U4bqxiFBtcDojStJgaW7uLVW1wD9v6TYwTM7gwjD89TgBKrbJDH523STaZMw63vaJJEPCP4DWudmV1u1KqZzBgF",
  "key15": "2VVMkN4fQqNntHuzBsYACrBQxM8yPtu3AvsTDxsWQo5k79GXzD7iZ9VfJJrjAP1B2KkvFvzhZrhHnUPSn5Rt4kDy",
  "key16": "3vZnjR4YbJAcL4fmuVrAcba3EfzvsvTXAMxZHmu5sZ9pGr1KiAGMFjnJuxNJYWaCojxovFq1SWrLehGhoUZaSdyd",
  "key17": "4RiFydPtnYTbwHZpwSVLLFdvWxhYnsZSVYHRiraaqUUMZWdwtb4SsowdqmweFbuz4ZiQs1f9botmA1Li6bwLLs2G",
  "key18": "2TFVuwQWxT1YHq6HKERL3uN4zMK1yhqu9wCmdWxEFRw9ufjgmfvqpAGtaUCwH41wkda5iaw6MWFaeBASq9dhCmfK",
  "key19": "4P8TCGcLVRFVjE66J469c86sXWSopmWo2spstKo43spZDFNCibHgccFvPTDqxtktPxEX6waUNc8zwENob5bXrTbK",
  "key20": "5CZ3wVHzTB9Hq67DUmMx9fVenxrGciYz797nntL35nYDnjbaQwsPypnfK9Cu9HWSqvUR76mCDK2UZKCXeueXZ6ix",
  "key21": "VD3K3DrQP8GTMVZ4Zi7gyJ3hmeDY9KbUZ1U3fmpDZQJv98UkCzqbmGRfeXHzLn5YdBhCFqVtXjzBUPJ14yAwuzw",
  "key22": "2rFzPYTR1rgjCcrTokPDJTGbidMwtQYB4bDgnMFdhWuTByUEtryZ13x5yRt7tYegzSHU54zQT92n1AAgawMR2eia",
  "key23": "5za7AZT6Mgk4MugbAzRyGYNDTvXzgcL9TTQmzNDVx5vDwZTCbtZWSV4FmTq8ATCTGuAFxrRV3MxZbjkTbFanyFMR",
  "key24": "5pf6fpg7vVcCZBbTVU2A4fqFkcEuRKJQkvXYXthCbd19AvbWtrgp9CCxsnhjxjeoU7gvRy9Fdet8FwdcGACC9hGj",
  "key25": "23P1tGuY4A5oUqvgjvdwaLpAtctw66hGjD8K7q3B5U5tRWgSGR29CQLaV1itT56VHfKMfnfJ4pbZJmQzzMsTkQZd"
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
