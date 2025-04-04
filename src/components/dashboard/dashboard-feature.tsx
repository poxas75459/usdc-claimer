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
    "5mQu2gfpqaPY8dXWy9XTLwM3mTeDo9QnS4eSs1J5BNxxiF23yLpuMv5RXbzv5dnbc4kSbmjW5QqJyLLWXSRF1RRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d6h25cbGnMuMGiS54GVNp898CqYs8wdksnaTTuDmMyrXG4ZgVWvahZb1ZzN3HDFG6A98fgeTHDejHfRqLBPUx7H",
  "key1": "d2tDvTBGiuJfLmBDiUR2ne3wCX8S9u8kTyUotQJ7eFQkjPfBfpRvzkWjdTHQtQ8rNm7EU6REZi5PH6dnSdxkjss",
  "key2": "4zbqqGikhwqSG2NMnMfpPrEurBXxFJU5LfeYcHDnz4Cu8gNpY91i7AvWkzCyu7s61UR8VC3mKEuEmQ3AtoFYPfFZ",
  "key3": "32xErWfV8mbeBkbzPegwFwsXYekUUnyeFFN5NQGwFNq1vHDpFxuxdHQCdy2t9Dz3Xn7G67JNKhVu1xCckYxrj2yo",
  "key4": "61W9SWaqQw7KPvSTGxc4QzB2BSKrPqp7vTwvVhcChgsKF1o5upkusoaQ1McNwbBrjx85hRy77ADw57Lrd1EZ6K3u",
  "key5": "2S2wtbAr79bh1ToVeSgUnqmuCNdH3PFg7AadUBTVWVgP2vnjHTDZdMMTXbkALW7qdUcWrK3fvXBpwfW3E2UfniEr",
  "key6": "2v4PEWWg8f2UXpyeobbyWq4nWhtydk7YLNpqEVajF9274bYRLwJVev1Bkvy2DvhzZMH71p5idroQrkyNanD6ye3u",
  "key7": "5wUqGAYWiSNx1tQb4zDfJpwrHsKmnHhLkTQyJ81woppGMXwsKtAQKemXWGP3ZPNN6mafg6pde1YpNpF9WeRrX8U4",
  "key8": "2XcYb3FY7eThRjYou3mDjXAghXb3JWwMHSdQ6tFQ5BrPz4hY3sVC249tyZRoC3T3WeXWRsYnaD6Z8BW8wqxu29Yy",
  "key9": "RVrpi4UcNxVgNWShVcdVpPHokn66r6v5sm314MFmvfQLy7LgHy6Ds11hmJRP4MnxhryNfo43jR9EEK8wro2Re8c",
  "key10": "4aybnR1XxTnfY79whNhjGvR6c4VwQYi4baCRMoNNUdy2i3hm35N1dmhGRBPoq7xtuypcKpr4pFRS7icH6F4EP3TA",
  "key11": "KjeKwnFqbS9u4pt9nj9DDDU49dGJSzntH1Mro4cmj7FtR9Qtt7e1Ye4CBun34BRmb8g1kQaxzxDSkGKGnFVJZZN",
  "key12": "TozSSzqkDnXVvYPTK5jbJN4wFFx1e8PrfZWqZ7wGiqGrApPBmPV2mFwr7DNZqih69tkQqhNBKireBoD9Ff3Ly7a",
  "key13": "EXExeNoLHn9Yfj7MDs6iReHCf1dMuY7fKYgVXMmBs3Ab6TuokXsiEfds3GXcmNVpAbeK8RYYU81aWW5FxT2PmXX",
  "key14": "sETeCEYTcavSmMjTtNq4XLmvP86RH7EDr3s1j8j7Q3uCM4yUyuU45vAQmhHtKLV8uhdpFxyyNii5W2ZJyHnpjcX",
  "key15": "5XUSLWAun2dZUThc7kfnSQHx1NPvyp7SmuMhHoVeZuqhLX1Tky9bgQEFnfoPfVv5YcCret6XR126sddzN3gZ5UrT",
  "key16": "4SACTAdUWWgRs3QVjmyfmsqfjJC66nxWja2JUAT66XjMvZSw9iURibFh6munSABALSeTwJHzZ5ypjnGaco7h1ce2",
  "key17": "5RLybNvSi39adj7eq16FEg87kFN4yzC3hAXHwQgiFwk6BeGf7dgYaht74SjA99XdCnZV7QycqaM6QDEiQxnzhWKk",
  "key18": "3WVv8ifkzAwyT45Qp5YjjcPUNt1ScjQUF1BzjwLFTZYetYHCf9ojfJqzbLwEVJA12owJ3tLYnvQwEBLjUZzMWwzx",
  "key19": "1nH4tnJ1XjqB1SWrcSptbXPAfo4GX9DXmfJFfWzz1ta1WznweXwvmLV6T6VRXGPWBxppaM1aAEKwm37A84tF8oX",
  "key20": "2CyYGu8kST82GGkAQzPEWTivD8TE63VmxNz5Wc9HHmBvZrk2Gec6dwJcqN8AuEL36Unw4aB9DYp4uEX6P72A5bsa",
  "key21": "2vuM6sz5mnFPQ2EdnCKRQw9Xzr4d2aXQTxj1Yezbg9SYm5gYUSgy3ssb42iTFbLbyfKh7Fvd7DCZitcmHW3VMcPo",
  "key22": "3uUS3WwhAeoE59oZJ45J7Va3SySKkv85aCavX15C7HWoAqbokDwz9UyPqCTvUTMWiyrc4bS9ZSoXhAkZN9c8DrLJ",
  "key23": "GvTnypfwrWD6PEX4WVRtTDhWknYQcuggPqfRcLLr7DpN653TE1eGYafJ8d8FQNTuykPZYfJz39GQnp6jjos62W5",
  "key24": "USEVi8YGhTK94rCVBdYttdXMx3esbTzqgpApBNuZSFxquVh1Rqd6o12JhHNr7FzjJSxJMK3MvoXYfRo4TNJTEU8",
  "key25": "58v52ipywiU6ra8YFiMWu87MzG8UBFZ6FwHDrRXZx98eXxAwkh2Ho3TD4kN3KeNaYWrNRHdhVHRjYXASeYhbAuBr",
  "key26": "4PuyXpMmbraWyecpjXi7x2PjY41zjjXqiMuxoDk7nL2P9EHqfN3TVhsnZeeDhs3eW3UpkffVoCgCbWVfipM4pnaJ",
  "key27": "ZNmvDjp4mB3TaSabrj2HfCtpw5BKUJ1VoN4kSqenVucT7oFrakXK7GUyRrpcMLZWS7ARiWwfbRdRrFHMGeii6od"
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
