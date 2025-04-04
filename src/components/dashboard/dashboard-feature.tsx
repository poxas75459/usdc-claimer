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
    "4RJe4FW9rCYLkEm3kSqSNBLwEmH18jWn5XAutKH9pZF341WJNKk3iivbCEKs6kdwa2KN12Z7XoCZV5HHvVb6QkBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vdGjcraC5hUWChGE7oPKwN8ShjbwdcXg8aVkH5CSLfEyQvqbdFXfKE94EbRXj9XnbpiS9LH741UDM393KkEdRiz",
  "key1": "TYqCmmJ7tZnUycXmhfnHD8Np4RfSfJwU8o4NHwQr39THamkbFnMqSbK4xCrEmFBptojNe1UYaDMVVxv8oyaDZ2A",
  "key2": "3jLW5AHB4AThYY8bV8W94qXmrHU15SdKBBV4dX3w9Tog6nPj7wSGb9WeTHUVguwgujP6XF19QBP2gH1EmQHbipSP",
  "key3": "2DTPXFVPRgpUnSb5svdULG8kUFA2mTamdPjVRHWskWCrUia2wxa9TmXDSyUNbgJunMF2rCERxm9oMsk7eEuVTCau",
  "key4": "5zJDzQ4XU8kMdvR616zVpYmVpsH37mgkCv9W6fcQcyc8gGrLWtGYQ9W7jkG4Xm5sw9AacPUPwhPKjjfiLAdmdfZz",
  "key5": "2k8H5BEW43HyS6w4BEuYx9xihMQmLW8vXNdHNoH7nFzTvS9sQr9YjL4qWSbsu8FNZHhfYkCPZAfaB8DcLyDp7N3i",
  "key6": "387AHwPQTwRYGDg9JKRfdAy6behBWgg4pWWyXWRyRzC2PoNeiuW6ZXrqLWe7bpsNgUcfiYn3D4A9RGe5FBq1iEFy",
  "key7": "BmgndwegeNettpEzsrxk8NxPU884Y8Nqd4m2Wmj5P2hb2ZfYscvhNtwSSABz1q5VGeB2zpHXE6SeZjyR8pwG3fd",
  "key8": "2LcNeGW5bkD7krTU6KX1yPKnCYzonR2mr7YdHSDGBWS4rfU5NzWm61JDUsdfWQzckDT4rkNcxXrSPFrcPTdt3eUq",
  "key9": "5oqYWG2N64xk9knoUUdSWgTmimeJdmVauqc88EmoVCC3ErjETd2jxzy4hVFBP8TjDCUfCyR9VqMKe5sZRuhsMF9z",
  "key10": "22hhF4nNE13X17QBuEwpMDiSBg5fqn2WFukskPWmYHC8Fa2xufst2tNGd8pAT8Fc39quvq42XU27BvKHbfS1Vtpk",
  "key11": "5ss98ZT9Q8KJC8Ldw5JJhPmvAygYoGWiw5rXYHFNwHRxGvKGJmfnx9noLxR85sdFpNvdNXadsJQabjUebGPZvJGq",
  "key12": "3YzEvFWkEC6FAdBTQc2X27erjiN4mJKJFDk6TCwhmz56KuxbUfSPD36ye5Jaicf4kSpL1c76mNfvzxhVZK4Xdk4P",
  "key13": "4oD4wFPGGsjNvth9Twsk42UQQBMJQERhoiWf2HK2gB5SqQPUeirKsXwoRgwSPB5GypWLEXxRw7LETaCWjmbAJzsX",
  "key14": "2upPu94jGm6LFXRFzp9HVk6n3uZkRNuXTHyrc1fj5w8XbDzZA6bXvFAnXMDL4MYjBCbCaMUS2tSmc5SbfJLMmwsp",
  "key15": "2Jk6iqZEMEnGNuouZmpwRFqGMhYGCeRaBcqtk86BsKGfdYbg1Xci4Hjp27kQYkiDBYwi1uEsgmQQHzuP644YStEm",
  "key16": "3VWYCQxSG4ZLTrNoNygycpAeKRQTX848U3o6Zk7k3TErL6K3wKcKfqhLsoXHNPEztDu8T9Gfs2VdAcnyTdK5c8WS",
  "key17": "2tHLGoCVcvJSALLGMhf9JCp9yp8Y5xswCxcQL1fQnUMXydm1YwYapiTD9cKPWcLDDBAdRuFPzYsNyA2sXiXxUTBt",
  "key18": "42FJ8edQ2nmPUcS5fL35MhQ69ugUU1vRDScUEy94Mik5VSz5mUMSnJWW8CWDRbZ5RHj2aP77ofSq6rU5XdonLgrJ",
  "key19": "2jwsRLdo5aPREffkWPNcGzm1WjE5Gbris3iuH19oqWGyJnMwKR4KdYtsxAcXHfCiyKqJkWxxRveNbiDrtJ1ChEy3",
  "key20": "4JWdCnZ1P5KABHabkFHMzNSZssyHsA2AU7T9xWCC13cUH3ANSZGeze9hcd479zNbUvByhhDmxx47sMFem6xy9udm",
  "key21": "4eH1aRD8anJQyC9wSsR5vGXnKBoWDmV1Ebyq9YeEJjjuK3bdU9Y5ftHbWEw3gmp5ebsCxgomisugdKtFV5Mezuyo",
  "key22": "53s4Ay5vMJ67hpiqRYT36D4Pi6T95jzQYqZ3Zgssxd6GWdt1NGwoCkUp7JACcet43GUWW7EDy9LU7QcC3BYy4mt",
  "key23": "3efR9P7NrogXrZ3d2uyW5RBnvv8WbUU4Yjuu3QgWCD8NAPabF5PwQevQQt5VKLSZSnreBDh2cV3t2sSzbu4sfr6i",
  "key24": "46rnY9wMQtW2i3DvoZqwXropP5yHHNzfEDWphXsCrBKmY5eSzq8hfx9peC8FEk7BqLegoPtfbgJeZNayJrUtumHx",
  "key25": "3rBT4ym2ymdTsYPTajWgCDiaGnnuySK3gkgQZ9WdV9j2tFctvHaiDK6KvUkJoDgeSBmqYW4r9JRp2P92Vre9B6q2",
  "key26": "7wp89UHeBmPKHCWq85nMqeeXP5sV9v3goHsLCpRsJDdceA5b6qfgZSm8FoPENF9B4yUVchxG3BvTuTY38a6Jq8q",
  "key27": "4jdQVEKtmMfeii3oozMPCqCAWjUxCefFXynwartg2fK8VpmNa6ZdfqftNWQMuuZ66Xt3WcRrMX5gd1PH9xuPEQU7",
  "key28": "3ZgUNUjeYTQnM1LQNepGnJqCjsVbe1aZPMvMSCHga5RLVefNLCkC4v5hCKKaCzwUx9e7MHkpfuj7HJ6Q2NPAUYA",
  "key29": "67Umq35SLNhV59Jev63FUfpAd9Z7pNEdHsMD1ijAWWZZU9Hb9NnStHY7riQRbgUeFsnLGdSDdbJsav7tEdKaghV5"
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
