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
    "57Dddfq9r8QmN9mCja1XH3pDrEwsvKBt3KE7TqBJAF9oATrw54MYn6DsnWEpDnxbRFHwFaC2VhKSkfWsSsGUAmKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qUUVMVUDFahSEgiNWF43vZeY7CZywVKiiBzHrUAy2PMQSjbMDBrLy1zabNosjCxW8iXCSjL1aHMRrxdqwbofJUF",
  "key1": "2CS7KoF2LsyDTodXwJYhWzc5Ksx1WiDzaMCG1EAxrYrNouDY4MDSVvieFQW9tBV5tHFdUciLwbp486AZEnVacoeT",
  "key2": "2HzgyLFZAqAeUbuaYCF1PRe7aSonF55WwdkVVNcf5GmfYTsBnGsmtYRopvkucV7TrmZWgPM3K1YMtjnnB2JfJdCu",
  "key3": "22xcMNeEjYL8C7dEoJ7k2cRJYb2FheYYGDASCSK2tFtGKpqcxvBBdTg8Ku6WWy33qVjbRu4pyv7N39aXfcxb6JT7",
  "key4": "5cq97gNUciDAQAixa5a2JrAH5vz4oWKPJqSTiuHN6myx4UVenmCuShb85UTaUzuFaXNKZGMEX8yG59ZmqeMW92C9",
  "key5": "4wgYQP8cbHGqYXp3ZUbxAXBgx7FyeYAG1SHguC6MB2HRUxKdxGaczqCLArPX7D5TbdiFagJWTKwndCfvNnSawHq1",
  "key6": "5N3UwVCyJ2fSp9tQgQwX4hxGDUZ5Ey1SB5zJys5p51qNsuWKX2BonyGu2L8zUyHzYusLRbqUSNHc7sh1cAEViQK7",
  "key7": "3WaKq33E8XwTiWVdqrVG1vX9mfZkehsBaKGMWMVsLTPtQmcLmJZEV33qfdQLbT1dtpUWrWN9DJ39r3CQQPQ1wKfm",
  "key8": "4bf4NwNXfsgB1F4Tv8gmJSExFQKn1dCFQsxxakv15iC2Cm96CxKEWvrWaoDsY1rf6NJ5YhsuueWM2FFFxToFTaDn",
  "key9": "3s8yy8P3wNN8qraLfuuadGrQ6ei95T6USK9k5VaYc3saTg7wYG5ASjicVchApCuwURQA1YKBZmdKaTpqMHumCYg4",
  "key10": "8jMEAhcrA5ht9CQvVVamjy2Z2fSjTakoBbDDX7LcPFLfZawdxuBxKokEHBrys131gzvmKg4cdKw93cbzam6Esza",
  "key11": "5Lbeg1x6eBdZL4aKqqukQu8F3N4gLM2jbRqdragsWFv9Cj4JECPxqEf8HQ2E4PYLWzKv2d8wEDeqjB3GnJ1yAgi4",
  "key12": "51GndwYkVYXvijkaQpEhzSGD6ChMXfyxSGREv4jjj3RLWhBZw7eFNcYcKBbykygZKBWJemt3P9AEeznBDHht8eaf",
  "key13": "ydcaYMZG2PDVcrzErCyvVK33MhDDetT2uE81Q7BXr7ENsutPbCGEQxPZHhCEyfu6vxjbE1zvzKnKNyc4ELygc8B",
  "key14": "3Zm7USCZXiJofFHj6qga4i5srzPaiT7J198VEEi43tCocroTa29zSAcs3bLEyLtdHM1E9FixKsGfUFYnrfPUjqaB",
  "key15": "3pBNCTaX37JR1JRmUucdALmpwqVe2R5acUbiMrA48F3vDPJuDufgPXmn1tFeNALRzT1fSuedCbLke6j5Q1x9XaUE",
  "key16": "61yJGC4epmsui12bjo7uLrW1P5Sg2CM3RQSycU9xc9fhjXBBXGVFKTNGfRYXA4Krh2GqEJ3NEB4Dor3y7MjEr5BF",
  "key17": "5otxCYbYQYNudCLpMKQUcHM2QiDEtq8xy45vf6RqaonWoFTj9qKggou3xPpf2qncwKMwkecTCv3W8P3D1K6WV5uR",
  "key18": "3cw9GNpcEvhgD9JdFhC17K4DMGVXeos5PJmaDbPbNPhbjVZtf8SkfUZUYyviGqVKeU1fDFkFTUpoX2mHrYjM3N7n",
  "key19": "5oLxvn71GFDJZ2VzYwzxURCpMujiyR537hhcXyNk2eq9qGpFYiRWHTi8fuptrmuvQBU5b7uTNihS8iPkd1ike8R4",
  "key20": "2kNmCmntupuWtZ7zVBPoqfkf9ic8W14zsJvLezm2Bz9BaSvCa95NB437XSahmXWWAAsj4sPFtbMvRZfGxCw1YpYy",
  "key21": "5FkZfcmFRrw8TKbFpfT5pRQGX8LVBCUYunzrAfXP3zsddrZy2MBS4dgtA72HFeDYGDpM49jwvz3D7zy5zD5cVzLa",
  "key22": "4zhGnW1TaJAUjikLSrYtnrDu9dzaQBRn2kEqxjhSRnao8ggWEy64WCWZK1NDWd7ytvrPQTk8F5hkuC8Hre6j8osL",
  "key23": "4zBSWQMkmyzTK9XmVPMMD4HsgG4Xw3c5QML5MgP2qHLRRPM3NF8EPKEUmbPfFFeEeSQrQCY1EdLh51jmAQwCv2ny",
  "key24": "3m1aKjRxsA1wkgCRuK6TSXKnigf1AWScsW9i5WUgX1mkmS3LMKx5TY4PngfVNEzYVRcXpYytundvmuN6ydudiyko",
  "key25": "53u3BbbhJx74RYnueYy1Bu55K3utobcbLRWoGJeFKhmePNS3bqWFbBerA5bGzQzpBADC6uuaBSqumaXVKasigKEc"
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
