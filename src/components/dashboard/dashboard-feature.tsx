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
    "hqYQeoAtGUsdDFnqTZRJBdML22phkTDJ4XmFUXHAxs7TtNqt2tPYFTKGZZKaNE1Bj5zyecL397EvCnSrjogceBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qb3bNHKDiMgZXxzU2mxYBrm86g9p78xAuVTx2BcQsHgLzoQY9EcU1Jn9tbTE48bSGoD9HsfKhJUQ8Somunpnjcv",
  "key1": "2fbDC8JDpDQk4xCCBRrUyxbJbZpSdt6Cbr49BvzuVwjHRursY95pnKMfdic8rUcWzhn2bH9pgHzcsheMgAp6cP85",
  "key2": "NZVUT1tMucBx1M8Z9DwaCfRhrzscXMCa6dFNCNBG8z9g19dCDgvvxTesb3AHZGdBLxuEKpdH7PH4ECwBJoy2SqQ",
  "key3": "4wsfCiYYJx2JeiachqzXVhniYGaDDDUPR8WkUtRwd6pMoEaAq2vcWsF6knXT6yEwKkkXHhBCszAPzyurdFtaEZCo",
  "key4": "4XDr8DRYSWJavRdnpphi4UnWbiwhP6h2x9jL9FmxQpMYw2F8dzSi7JV8khVxazg988MASi5WUioAnhYtRjeE5Qf7",
  "key5": "2KbgPCoaa6ENbLEjgPoJp5eZ36wYLYBPZwy6E1VvkBEG5LVvrwj33F8peSNSQkspqVcDRPnMCHY5VS53CG4QFGvG",
  "key6": "5bu9ZnAUAXLeYw1FrE5rbDmXk6fYakqRwD11Ar6nVrLgZcDCj1YiM1abuW2eB9L6AgeG9ZXhFnoGexqgg9vRVgVo",
  "key7": "3nTBSm58mSWKuG2RwW8S24DW6MMrQtVYLkJskwvJj3v1vAQAHQKYnk7R6hB4Ktqr5fVuc5iGSNdH7d1Uc1h6ya7",
  "key8": "625H6yMw8LSKwsthmSHP7JXQvnbf1dJTqZNGZbHkp4kP2JwyBQY5q1ezhxBMhdcWiMJUXwL4NVFSMHsP5ganPoC5",
  "key9": "2ME223nPqZybuzFq7Bb1cQXTy7JDcamy8DGx34m8tC2T27RWjP9c93vH9e7qCPsnJqBFifHkXsbXCY15EAfQpfJX",
  "key10": "24a2wRHM1ygb93bNTYzcGr2pM8i8Wtk9LFNCW7p75czohwYBGTG9TbTzYCC2HqEtd276iboX2dSAWP9WugTdHRHZ",
  "key11": "5exT1y1d21shTKgQzq4S4mL8WcRjzpKKbQbG57GvEdsGd8bbWCkrgeqzAD26LXuH6V6CQat22bqThBTo8EfFvg7M",
  "key12": "5k3iz4hEptNsHLLgC3syDHixXjuhk1NFEB46SPBsBW6YLoaT2Po6Kn23zeQh32Rt1cMgN7r2wnPoXHmBPhwAQ7QK",
  "key13": "4CBoAFMYGaSsjKFdn2w9C63ACJDX6JigSyTMf3N4FoowKHVYxbprQKS1HFCKZb1Sv2MsR49Y8Zi5VR2QkkmmZPuJ",
  "key14": "2sKR3h5KfGT7DZWZgVCFi5oqb2tAbqdjZhek5AKn4AteEVhCEPRtB5m4qWXNCZhxg3spm29bp7vkJ68kzPMUbs1x",
  "key15": "3cyEEvm4NjAjQRUd4u3NhSim16Rb7FyKheheqXQrscHrRcBUTLjMgpRkVLBwQugMeHtuyV9CXgX58g69v4kKqPP1",
  "key16": "FB5HPejauUYwDeMLmoLndXsTwYTNtoNZUk2NVTRVw1zy5fWhqtQPGgDVpFYe1mL5AMVxTbdNBUPoEXxysNGxRRk",
  "key17": "ajDCcxghv4UkSYKv4X17PxcPBrGu7gUpLtqAeho1PbCdh6zyWn5bVN84TEVZtEwyZZ9bVZMamCVRzYgV7ew7wUx",
  "key18": "3oBezfibDRJ532KxLohaT4hyKmRMeYYJdWBJAE3YhW3XXZT4AP5hZp5TYY87HRyGMW4pSKYKxrbED2PydPwLttxQ",
  "key19": "39YpQCYYW3BA1hjQcT5TNNECe4skhANY2iph7GB1GcxVtqE3WhsjPs2dq1kDAyAkvSof82kAMpH2HQrEmhgVYY5Q",
  "key20": "3PWQKmYgFgnKGwzfWGzup1ykfCDXL5HTG4W34m8jq1rqC2UzJyMAe26AL1q6J9yg66qxtPSSvgJyGscSaEsMcgcY",
  "key21": "2Zi1h8z1U7HB33Fgy1hWYYK7oug4PtA4sDAAJccaoC85S1RqrkNaEFnnGu7iREnDyuPtFYhZ6PHdLaTd7UvPYehZ",
  "key22": "4RHEbD5S2DqPMayqhEePq8MQsZxmzWnaKQEsVEoDqa2rRtViVkjZXXt7gnDCjMSwU1FjjWiPxJXxXqjEQ2bjB79T",
  "key23": "4m75TQHR9L4rxn8H2n7g8azFLD3VpBg9ceggVqtajAdazffpNz97TMY5sqdmcSGi5e1VV7f96R9nQ2VxuvfYZJ3A",
  "key24": "HsVfvagUhxAmeh6WuRUCrvyw2JcejGbmAFrSyRh61qCqVYaZreSEdqLWGjoGxmrQ2aQwyw8mwFGrWf2RSZCHw6h",
  "key25": "4gVJyxeFAdNK3uy1VXZrxxJkRJ7pVYjCZJzA9c75siMGsSJRSQdD3dkHfY5yzmsNztGnQdt1oDpTB7bXtGozpA5y",
  "key26": "ngSTuJMLa9q8nemdg9AT6gTn5VHZg2qAiiTj3vVqvyvNFW828kqZpydJgsDaHLSwdokj8NHeosump1ZU6NbZMiu",
  "key27": "5S2RMPC6N7r5LLNkR86oPkocFSJS1Uwqba5M4DfJcWuQBx23jqu9nW8xGQpzd4YsGaQBZPkjpdNoPAvZdXu6H8wK",
  "key28": "msR39VALiQJ1BknrnLT4fxEfdAsH5SqzbB5aKEyRvmf3wT4ckCB7PxPvtJC9Qae2DYfyfc4VWBgfSnvjaJfdetx",
  "key29": "3kWnoWidkREbWo2G8xXjPFs3QsHxYxNWtkDuYN3LJKs7SmGWa268J74TKPWnccYPDuJg1KZFmYjPa1M3RxB7rhge",
  "key30": "rFKqv12Y6XRzZ4Yqx54K9GykrpooGMKqeegxPhkXtYJuVBzkXKELhCxjKXh14iuysAoqTJDMxkLDH5SQwtDtCK5",
  "key31": "3HESvKJ4Xq424ZQYNEKqDkCBrF479QRbvDEDBtsutXUesAJuv7GcTQXGiDfnW4QX2mHdvNwF9wrucFRxM54nnaRL",
  "key32": "argQgFwQWwFXH6CYNCPnC5jZViyG7mRn5RqHtpRzb3ice1RWuVekrQ3V8iNSGxZjq1owcTDiUDyuYZTgCGkHxPY",
  "key33": "4q77SfWLKQJXwgbi8wNuX2sjqrRQRa7ByXVLvkiLjv2BbGAa19Fscq6hsw1yL7RNzJYPS4oZRMTcP86KkmrEwFsT",
  "key34": "5LMoSsRW7vojmc1yjcPBW1gkMjNQ2xLRJMKP2myHCwDktzhWfLuqQo8p6CGy7xkowU5moLPUKY7PfgUDg7efMqXf",
  "key35": "2aXPyBQBbHvwQpQhywjSHcEtyxH5spG3SKP4TzAmDAcHvSvJNsvfMnHmPUV2MJstf4AfoSPrRkSY1vijFby6sHWn",
  "key36": "2fyE77KorU3pDZgwHBiMFVkz1GAhBSdpd1CZws6vtUD5KjrMudoDzCgU4mdKPj39iaSGb3ivLPsRPHnSSY59VdJe",
  "key37": "4kMK7vDiGdWkSRUU7GYnyYGnaKSLhFakvxA7bAbAv5wV39K96UoYcXQgkKBbR6XofVJKxp4mYvXw6RaV5LzF8TMZ",
  "key38": "Z4gDGVenzsGW79ENDAXDeWUtfNism6b6Eo8KRH5QSbj4PywVe8HH6FBAfmnkwn97Q1fukeqmV9x96Ak6A2WD65R",
  "key39": "wdRJZy6KK8hQxZeXpkBPNDmRPxfRLdbqymtSypNJHrrdtvqSRU8MrcT2gRcd4JdvamoYVCyVqJh3Pz5GaKvQ3s4",
  "key40": "3zLu5GGpUjzYiemweJ3guc2E6XGwjcoDTG1zQhUiWB7oc3ubsTETLWH89jrFaTESpPP421Eojpk342hGMr6JM8h8"
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
