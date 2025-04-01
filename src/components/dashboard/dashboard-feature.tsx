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
    "pof2oSKbZSow8CzewLeMeX8j2fTC9e7GEZmGoVBSFj6hgMGQkgu7TjMtcWqfxNKpFxmH7UPo1bVj6pqLRTCn8dN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "epsUVqgZZqA8x5oBgGeghCgZp1JRi6fFFjAotyNPcCATYdSc5Jh1qvwCFzdWtAo9ZR2m4nE8p1xbrUErmAdzJyF",
  "key1": "2scMb7LBkH86q5VsG6Nno37c1qEQa4nL8nwhfbi1ZYspJkhLdmBtHgkTGyVcMx5dwYCy5iH5ecqHZTWBtVJHa1dh",
  "key2": "4SA8ZeAyzRiWn4GHYb5kgv6XnwQMGrpxSh9gZi5rxK3rRdTTqmSPWwfs3mq8ifVSAxuQevrMVzF9A2Qkn2yuEJhw",
  "key3": "5dXXRbcETdxRKSQWEPgfRz1HiEsQgV8VwDNgFptGDZeU6gJeGdSRnSM6xiNqVMQ8jEHdC2cUcWt2RWMxJoCZRGgL",
  "key4": "2TpC1rqpNXWNB1FuRZAENDzcnaue22BMDEKAp43AoHA6KoChJ6XmiVKdLVqw2Rgkurss9tm1uFgXPgZvsWNJwMwC",
  "key5": "2itQhZJAXGXUCdtWLPsSHCj4hc3ATLguT1ojKCUJU1qrZdsBrY4sxTyLNJmXkDov7Yr54XaUWroHU7KnbWuwJKWB",
  "key6": "3dtzn9z71PgRRkwhcKMNbXyPMmj5GNQauNJL1PgUMe114LxSabzxgTDEKrMFem2RNE7obkfH3w44pAYKopgAw1gH",
  "key7": "4ExQTykV2yFzwnLCHT3N38krwdKFZj3pfygbwGSP4TcbHJMVKgyfMLwai4MGAwMfwbayYqswT8yopUoU24zFLdKz",
  "key8": "4nDeKS2vXeJ9DbZiz3McYaw8c4Cy5nX3aGhyTYYAq7gb6c9zydpYkrXyNwvWt1xdRLkuWmN2WWcmhS3cTauuePmv",
  "key9": "2ePgwLCmrFnb9TGpHpa2V3tiZGUGHPHbiXByPoPDw3wsdXqFE64m8YW36ezTbzg1JAAqvuBGo2JRtyqPUR6iopkE",
  "key10": "xD4P53ivXLoGi18AxDqZbvtBJtXet8uAiFxcYoGPzSqM9gepmvN4FkMjpTnJAz8eBGbV3fE2c4HoZhjsuo5eRKq",
  "key11": "58qCAqWP1pLbdSagChX1CunUYRxjEPszpeRr85WrqdnCncHfsspa3EVAxNfSX61Maw6pfvrwBerytTEGYbxPb5VA",
  "key12": "2hhGM7Sw6GbvDstDDiNdRLA8EpC8ymbV3FLy5hc4nMpKE5qJVDFMpzpmKvtMZrdm5x1SChW63CJqniPSCKi3mRMh",
  "key13": "3BCxV7nEn141x6usyzvYBfrFnZwrzsF8QE5XSVMuqFMakzVXgurbJF7b1KU6Ygf7ygZctrfeVNRa743kAnyW2BdK",
  "key14": "2WSsZ1rV8MB54MoCPDcMgsxufRQF64HMFPMojGBQwRPqCXht8r5oXnPiuKZqj5QoipguGKrY5zrt5TyLkgs2LvJd",
  "key15": "fpA1VGqSuo9SZWsVKuCurqMksPNDkyxFaos7ZM7sJUdV8qZEAYEVouB6qotmtEASVsYSjYRQHjXtWG7vQyGLoRx",
  "key16": "wcfApLXY8kDoHhUpJXrdmUXSsZwttyFYDoNgzbw996EU6nw1biBa7hcSGwrAQ2BoBrQzsoDUZKPeMamwkjk8kYF",
  "key17": "2pYYW6rr4DJ5x1PAf5SNRBYrHQVBrniAGBWxBosgMuNzgt8osoiPEvnsEuXwTdH8NDThVzPRnWyFJaiXc8x6khja",
  "key18": "5RWRAk8kvnYSse9GmiWuvc7ZWbXrw1P2rwV1WgFiEXNXpfyafbtjVEd9efXxmxjs4C2Qz3Fq73QVyR7ck2YpMFhH",
  "key19": "u2wq4KvshrnFbmrLvf4phLKrCiGY4SruUw6hz72VnboezsQ1jRoB5QpgNJECNMG2GSQ2Gi3sE6ZkSYsMgWVizsM",
  "key20": "5u6ZurGepdjEiqVHV9q9k4dm6EMmigpZR851cTwoG1bzVHaTN1Z2xU9f9TM3E7EhhfEXeScTGKt7RzbiADNoc3Tx",
  "key21": "41qSUxr5Gzz1zUjZCm7gGd7BrBZFxfmi7hLbtoEPEThteFhPfuGmXWjMxkR4GPqmWR4PeHxgZugyns5BimhbcbTN",
  "key22": "5mHqcefj8uEtEM5pDYyY4UyhNtany2TQG9o2rizC5zioetE7zLyoe8PoL878fuC9xDziwGM1E14UMZkVv7xcVEpv",
  "key23": "2n55qJm3cGTJuh7G14HySNGxdw3QFnmGCbTmF641ugVeywmzDuhoeGjTHR4g7mKqifQtBuYGxT4u388FT4MoEv5v",
  "key24": "5qh19FxFNjC8tKCcjbyr2KG9nw1Mm645xX42VC1mk45PtcvoED5XnEEsFscYRFhhu9zPBUZztTTvDvurR8UM7ifa",
  "key25": "5JsrnQfE6R9BQBFyHkzKZ1HrHzHxzBiaf8f5fTE6GDHwrd7rWTHhJErFuffxp8bW5pzshkwuM2zdqpmWoxhSRwvL",
  "key26": "nXp9tNBDkGAy9ahVVuQWueaYT5QfgQnqMvRr9hzCq4SLLfG57aJoLt7BPeSdkWkPkq8cLpdd7htEhJNhRr8Dnpt",
  "key27": "3epS6PWJbT2mSJbQ7ZXa9CH5Eh2dBbvgTSixX8k9zgpvjSTk8oPcBfkYZAMV3c4ke4tJT5t8tRbZgm7NXokwnuw4",
  "key28": "2jPcyeUMAnxRs3fYbFekaS7AgTmrSueKsmh6LMGfFNRM2Q7rsG2aPYqC7LgRJe8f4WTTUoznx3UdzDAtddm7rW8f",
  "key29": "4oxPhoJd1vZgtH1QrAvk7RQGVWgvKNSSL98ra1Ub1wCfo78AuRxwxtGGXk85GrnuWAkvsh2s2XnG3qKo3rpUUnjp",
  "key30": "4DvCxNYczCrg8Y1azGR7ZrPF1SuWgPsdVAHnm2gkVzJqHS33Ujpf61gaQyJRanEL8fnAywV1nmxGPDabYxDPHSEn",
  "key31": "4h21QmWxmybhzG7ZJpHHcuUprMCkqAEwkwcxQjbjxkk7ff8HQZ6AdjLLNjUBXeAzQ3CqEPxw5u6LTya5YHWKjCu9",
  "key32": "2maXvbNzQfaR1KenCM4eamqT5iGC87wpy7tChPgVeN12vsnNBbeUi2D5BWAH2w27aoTbpAGXT8W4MUNb1EdtYKVb",
  "key33": "3oZ15F6M91EzFTSoKp4BrcRQsZxoERrC5KvRnp83Y85ERLEY5WwQAaMD1S8999FYDUAuYA6Wfcbeoe5g5h9L1u44",
  "key34": "EdnQEVdGWgRBBDZnCmtkDdioQooKc5fsBawVcKZT44zTrxUE6MXW6EkcxC55Ad7FJuoN2xpkokWjAPUr2D9qKAZ",
  "key35": "2jVTEJWy8sYGmXp9zn9bsqkaCANPLvnSBAVi7xtVvPcrEqW7UdeEZREGatAVryC3q4yXc8sRHiLbYCb3nKzgHFRu",
  "key36": "SXME9Nb1BwGv8wsrXJN8jzY9VeN3WmzVLZR4iddm4AMBkaBz2ssmE5Bsjb9ebzjtAZLSkmUmsDAfBfuLYC6DcN6",
  "key37": "4PG22mUp1FULkBkj4A8oW7JYqMSe7iU6QJSebguuXJjsfthR6aWmRpEQ6Zk8ct5c6yAxCTDGizK5gdJhqtBEkaBz",
  "key38": "66MMer3htgyXxQmHepeMSc3H4hJroJ7KaiCQjBnsPmuQHxMyeVhmvCanu3TUUD7wrg7w9VWpRGVp1aErzMm833iA",
  "key39": "2V8HXujP8pnwZc8LmwKnqSpEmju2EqSPVXoJeW2xfPCptdny3wukjhQr1QwjxXBzCLRJo6NArTHGL5AxhdNdLykw",
  "key40": "hWpr4JDpi5whkvQLh3fVpjS7QMyhuSfCgjNmjsdLq1xRMNG2KwxeuucWLTpNHSANaE585oUBEyVJDPoxHAPSnkr",
  "key41": "2TRyd8PE8JvgjJTRGv9p7Tp7uDRjeeFGd9WoK8v7jg6H1iyAPVrpEfDvPHADeGYpi3ZmbSxBfhHaWcwJeG6kUMCT",
  "key42": "MbWoaQbqfQ6f1H9w3HgpgV4FBm92kRT9shgTpxni6W75E5BhDwRpGKNTo43PfqMGH9Lc7hEvShTJGXaizqaAyUD"
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
