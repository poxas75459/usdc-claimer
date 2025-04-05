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
    "2ZADMu8w9i8WAoQEFuFcykGJitP7R1tx2SnU4VyThh47AUjg8q5tX5oNVwRTZ3kjRQ8xEs81PPXJDuAMyRTWuCBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KC1vf4iZWseqdsBLMXeCkuvhyur9Y2fBJ41cCyJNmd1C3jqD7kRUnTUigu2bTYuTb4U2sXzJ2bDyZXWdaaVDv7P",
  "key1": "3Mu4HDdoCRA2R7zSAWn3wTQGtZEuye8rMAagEMA8VFnPgbKJbuFpbXk6hqkSwdVQiAAGWcak3z92HKna5YuzYna9",
  "key2": "2rxFdZXtodJrPtJUxt3QwoQV8cW5g3NNNNZn9P9geo9FH5TePgaekDVJ8L4dHj5opvnNgnUwmbun9hbheUdjodKk",
  "key3": "4f4GJoJ4N1Zt97Nyxt3myVahk6fWgKmjQ9xuABV2QJs4HjiX5rpK9gZZCzrMURHk63xhdB5NpC74vVZLdgY9Q79B",
  "key4": "4wGPfC6b6iK9PHsLiU27CLGfpTgxaV52BjEr197JMoMzAfYsLGBaP3kBNohXbRvq3fHyywXxQHrVUzpK4KuYde6G",
  "key5": "3yuhGPG9JpX21qmVhUGDx2rdaxUAekHGNZx5vPw7rCuyb2fxGKMCbBVwrvKJ3HoTNWVM6zLuipww3zV2tjiy4eP5",
  "key6": "gab9iXrMCKFrDVo7bMyYsyapkudJX141FoXkudbMTFFXBrbZsbQr9j835DDYK5u2MSYSvTCxtEtxTWng1BwXHyV",
  "key7": "8emsEEYGiBpcgB4tQjTEXBmvhkbvckphe9wV2uwFZPMHZJSVPxCWcwkxW3MCf73nDXubPYnyLhcq8M9EoJeixpr",
  "key8": "3Ex1ZuYbLPVvRnNexnvqbgCmCAJFHgdk1uV6CwKH4YLXf375x8kDaxtnjgKM7VJFCb45nqUtaAdkHj26hmbMDUov",
  "key9": "58fKnbk5pcjmVCvzikikLwgQQEgtemXVXZ8eqMeZ9weFrM5pGTvmRBs1ZW8dFQtzZmZYSjaN9Rv3okdUfGiwvPDJ",
  "key10": "3Mz1tvALcYiRDyPBcVSWhWLUk5M9xgPdr8YrXVyBKdwDJbWE7vgdu4KmKhJbAaqQvtX2eW8wmjJUbbpTe8GGk7wo",
  "key11": "4vsnkcCC8MKQw5dsm25vWfi6QGbkT951Fvzrn72jZcgzndwmaZ8MgXhNhD2Zo6Gdw9YivjrAZiUCkHp8wqQw7yqz",
  "key12": "2pV2Z6iA4y3hVVxZB6SopeJRLHQXjJue9UDWXRud4u8TKPCZDo3c76M4izcZaqn4A15sWRLswGppfVGuTYpDu2A4",
  "key13": "5nZrxV7YJeK5Znpo2dxiEdk68UsUKEQ8wUonY1zVC46bajw73v344R5h21cens1qgyHtdEZhrURpWoF4jsQhqcG7",
  "key14": "7z5kStABP89xVSJx6Yi4LUsrUqtn949thJAfQJb4E3Xp3kyh9F2nYrvWAQyWXyo9U8NrDbkT9jGAQHGLgMHwmPx",
  "key15": "5tKs2WUwjrFHC1omgi3fn8PNScKt6rMZm6sFhhvJCs8aHNV3ddoLgtE6iG1Sh9mhKiCwhMr5DGpAnA8vNJqeD373",
  "key16": "2peY6QmtDJgLuAPQRxv2ZV72PBC2XLJhkYYNVKcrfBs1HCCPNXosXSnPmNQwZMUxwW1GjqLvwmkAdixDbC8MNSr",
  "key17": "3CsuacqWjSxLueEpiDqBCRJCJUiTXq4XJoRb5c1KF9HEXKbuUWu1mReRQrXbbEqyf9JPDMLwYM7pGHW1ydDaDL7z",
  "key18": "3MiYmPAz48JCvGrPCMM8hzSLioMhrBEogA5LCkHMCLCGbqVEoxw6GBKwrGb85inFSzNtYeRaR3vo3JrbRUMfPTZV",
  "key19": "31iL3Wkn8ae5GZer7mAcgs2FMaNJ9M98owMY56GZdCvx6ePYskEXL7AyJMcoYXVGNfbuxkKwcPEQTzDZQKzwtfjN",
  "key20": "5bcz3qtspHcEX7ipRrrjRj8fa6hiNEL82kuD1cNJ4B5PbZ75tDyQpNuu1TkNMGkZGBYii3NRXR5Mr2qx8gv1YSR4",
  "key21": "3VoNX4EA664xkUmQ9RD23hvDECruWdT2aLqL7nsq3bTY2WojpEx4GKyH3Zr6vrpPeK3YPstxePp5Fz5RBMi4YmB7",
  "key22": "3Nt6wCY4a2Ub9aHRmuGZicGRtvyhins4mAxuNTWQWveDg1Ande4djxJ9dCxiW9W8xVWhfbmdWEHP59h7fMBjXTMJ",
  "key23": "3MnZPM42WoeFpB27rhewYfmEABSYs4kNKXBSrGZgJdjos8STwyUU66VcwUBJ7gwLf2PcZXCKkqWkLoCPFb25ctAL",
  "key24": "2ZTKEokJAuQyy17TgAb3i8RLcJmnbEwYwTi8hHGvydrqGrPDDuTk3wta29oRwqdWh5zxPx7MDMx8BU2DCYcLVFDV",
  "key25": "3x9nM99W4oGWLo1yZAPsUxGoHhNfxfnkZRJxFzVaJDXTy8M5xDTdMDnDssan9y3WquG8UrX2xpBXz93jDiMLYi2x",
  "key26": "7qX97QbNbtih9hJp8LwyiTQgYU6wkZzNRdnquiwnjXuEWsoD96oJZGBRCuWUrmGBppyjrysRjenBqVfRvwSi8H2",
  "key27": "35FkDKkMpkN3bskU6cR2AKcYLQcRkAVoaHgZcXGr15j28WW3gNMysPfbjuwkRxwr6HKy8sT3iqLLvUcyZoS879RF",
  "key28": "qiqpdHZNKor5KYfemfBpPg1PdF3zFV5nVMwgTe2ZTp65a3CL6REjmyc6kYZaFnAPpriwdi8ARsbGDguLS4V8bzd",
  "key29": "RVyFhNE4gcfXADJNoBckp2w8fvHRTBMa9gsCETRkk8nb6uANKnVMYNJNYqT7gAY6Un3RhG6vuVtK7EBnjm8HPoi",
  "key30": "4Desvszm62Vuc5dTYTxykYA9upoU56MvJUSsZwb8PPPnRvFuJyKiEdHJhVLXs7AGCakz5MqHTtGiVTXYqPSqPqWE",
  "key31": "au7fBNh3YnfdDZPspWpXpCyEAfiGCWt9N2efEM861EQpGu49r5a1FDrnfM3JiknvGuavkfKfx8CgYVUBMweqksA",
  "key32": "3TkRLmQyhwdUR7pYMWWvf2bQeYfbr2K3uGizDVSZgqRCwNBspgqfd5LroSSCh5Vfh1KGZNzYbZ8CquJraTFKsR89",
  "key33": "2AghMaXfcK6WAhQ1zFKs7df1P4JaXmwNbYvAWAf2o9HGZ3J4dTH2s1N2ogkA9es4QBVhYb9NJdq1qbCorwZWcL4d",
  "key34": "aQE4Y72erUKCZsCsQcviwVfHVF9qysvm6z4PqWckWgrWwoRsYDHwC94iVH3CwZBbhKkbHq8WUc3NyeX7mYKFsjB",
  "key35": "554rzZM9BkQJUG81hGP4e8zQWugoMh1KgdhqaMESjvTiipdaCZmHKVkpnC78EKpuprsjbfuwtzuGWExmFT8ipnuo",
  "key36": "3w8gTXuMRtabytdCcxui9dqmyPBFdcNVFPmBdFkC54eHuJafeszZeBZbzKh4NVMbMH1ahRC5oR55wBMVPdfNxrMk",
  "key37": "3caDrscEnbgCjvtEKVDcA7f4DEhkqVdFEY8QJxQYqmk7jvn1CPEx5B2iJkEB3eKmNwcU36v5RA55XA4G2mGpkWg8",
  "key38": "ahYKsYNrNZ8TppTFwMxi3yvzNoDYVq7gfbXH86m2xk5aNSJ9jTaQd9fkr1F2zqpCTkWWL1vfVNyd8wX9t4owhhH",
  "key39": "oAjg4sLQV6AbPznKpDiDYot6ZepCPrHjmvBhz2uvkqXTkH4Jd3BLEeyo6TYEiH8W9Gu4Rz1TY7oiH7QLxmtNcyA",
  "key40": "3s3vdrYjf6GXVSJ6T82hDs1ErvRNYBRagSZztfYDzRNjAL3dMriSTTTUqFLbjVFtzgSTSVe33LqmgvNSgsATRQdZ",
  "key41": "2N1LeewsisYV7zM5nHDyAbdSM1kBdNY1NCDJPB5dh7Rg89tos5aSxy3z3m94pmF382iw4D4YqAnzd77rxm2Ss41L",
  "key42": "3q2m2eeupbaWRt1qBkWEYETitwCVr2aBFXW4iDr8PtEyY6QH1oty8h7nqHTdqA4FfQxPCavhPr8PL1qkaDQ8H2y2"
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
