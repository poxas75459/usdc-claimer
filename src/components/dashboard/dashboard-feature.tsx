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
    "5HQR2PaTjTyPrSy6kRtF7hj7h1zQszmRWifQ6paLWD4k7RgrCsBFLcEYxVoUt53F3N9QaGdDrjutFqf57FVP6Kaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UMtpduTtZNxtdGH3TYdMwuzzLYnbhq3fb8HRTvc2ovsv7gnckCZ1Lg7ScPd3g8Q7MQwk3jHaTHKQoPzpG3uqkHH",
  "key1": "9i2NDeL8c6NbpLGiDVJ7Ra9zJQVi8Nph8NeevqNDpzawyQVLuSMqT1HhhiJN68Yibt9zKPKepZhSoHNGWKTH2y3",
  "key2": "kEK4g7LZ2zbkBPtbVGaa8ttnuuWVwiLnAyUqNtXwV39Q7oW4Fn8g6SxphMtjkBZAv4smTN2B29DL6v4AVtu53EA",
  "key3": "2uwAfpSakh6CGQ2aLiK6znY9Fyw7kGNRAf53Lfr6MLHLMxt9it2CWYKhK4mRzraW5YFPUW3SWT9VfQtT5YZmrZL4",
  "key4": "35v27PSnoN2nXcYAKC6sVYPbPv7qX3V5Bg8xoSrYTmsr4chr2gtRsxqFRcxR64bTXePyRQHghyqwUj2tTfpGx5ex",
  "key5": "wxb8ChN2fqPDaY6eLVebNgawG4BM3JTmc5vzwUoxgBEWxGmBDf2gLaVqZgiEYhiDb5HRo6W5ygyBeYUENMJ1ZJ7",
  "key6": "5XDMhuKztpeEPfmrpfUyzJvz7JjJhRncxvyCUPSsF8VXgseR6kprbGmAeWQo5iaip2TN9dNR4BoN13v6H3Gqe6Mx",
  "key7": "23S1FyksYverEoLwEeLuPYi5EoEtW2vdA9M4qcMZGRfaYEPWvFRGji2vUwzyYZ61MAD1r22qBpHQveVyWoRtVf1u",
  "key8": "2wdZcCnpJzh6pz4SERoNGgywk9RFXFN2YJQXBt9gz5GGssVaqN8jV2ZYvgVRemmm6FA1ZkKD6GoxZUDXqUcK4tzr",
  "key9": "2qS1J1yNYs6mcKqK1NbtpgBcG6HAFQvGU3mJK6QoNjFxKLq7sauR3ifXxf556VMjMm6JuCY4GCBejrP8UbzPtgzD",
  "key10": "4rsXiQv8tPx1eHwYqBQYFctQv55SQ3AtQ91zj8CtYh3xfFGb9Z9uNMrhFC1CCMUbM3qXApWLeqYYJvP6VxwGTgGa",
  "key11": "5ADpYmBZaagUjna6noCyjn4F8PoLePGGXUctSGYMWYvtB2cdXAFvQtUcnkKt8fQuXrsE7YzZosfZXzcteDtwDLSC",
  "key12": "37LM5xzTauwjPziuabFfJrignM6DKx6iCiZM2kbj26ZRfkS83JJMgFmwPNj4DnFZ4S1C8RXRJyiHzU84QEKHWjGY",
  "key13": "n7C9LcWgAuEfc3vNf5SmecbFs157cn4sfpyy9oeetg4VssanBBaV9fwC76nrdSpBqvhLiVupHVdww89UCqeDHRQ",
  "key14": "pwtQCQvnjAaoW9Up9cY7isrApRv4maVgEMuWJmTayjrGkbefn93xWMF8pne5kWqFMiLKStAMTsRbDZQGb9V9478",
  "key15": "3j6ZfuByNrHdHMCwPxonxcbwUjsoNqftM4Jpu7R9JzTWfSFh5nUKcXQxg2m27Fd2T1y2q7thPFPM1vjDjLf36FGx",
  "key16": "2BbhDzGs3LK2ZMwJCcgWA39XSg8Aq35G9qkKWPA37Ru9vi8jAQpL1cg2Tzimrb97Vo1G5gaKRBimM3d4uq91qVhn",
  "key17": "5Fbgw1HGdmczDxHj9BCnC8b6jmwbZogHUyum96JdFG9Th1oHhJkd9DwfAiCF2uKVXkMwPXZ8avdKfmLMsVjHZp5E",
  "key18": "3FrYaakKHVP2JxKHDAA3WKTDwyFDuABq8c93HAXMNzpe5Bm8NoDCTHHJ7ob51oe5gQtp6gvMH2Q3WGwGPnm6sDnD",
  "key19": "2Ks9QPK1J935f1YXwRLyeM4rm5FtH2whR4WVPSqtfgPveEv6cmTrstwdHWEiGFSC73bH6Y923NDzazzq27zTQpua",
  "key20": "2PgyJrugBSiif3vZHrLn3Qd5cxdCe4gXgvfTybpFN3cNWKTkSSbE9zxbo5GAAhKu4bisZy6JRhCH1SuagpeJG71J",
  "key21": "4WudBBf7NA5ggwKa3w5hCwfSk3twaWgMLxiqVT6aHDWE1ubUZJEnGyduEbFopb1SugEbd8wXRYVCmttLcDLD3dv6",
  "key22": "3sGaCQxcsi8rjzMwfAK9Stu8sjEjtUGBTgcgkPzRAsfkGWkkK7mmuZ1MQS6xYtKrF19QuexFXhr3MojJXNSJQc8A",
  "key23": "4sxrAEDF5aDJnKGA9MkPD2MdSyR4vmfBMMHhYsVhfLwwB2fSSTNJ7vFydQvXCZ2txb7Kym22Ag3r2ZWxtuKJREDA",
  "key24": "66KATVjFKXNouvgw2Lxe4z8LDjZ1EfDYechJA7vGUL5T3k7bw17HSnvhYtZz7oADuHTmJAMZ49gJXL7fcLCohKrE",
  "key25": "5f57PAn6yRmdCWLT7Yw3i3LbRCmqLmFE6rNBng7rq87Y2Xcg2UpqqE8VbaCWbZR3B8HVUEfPaxRCxhSGveK2JCkd",
  "key26": "345ExCJYy63WuU9BLf7ZQjod378qw8b88yNCiT48rpc3FwJPHQ9yza2M4EWUE6XHvymhbYCmypkbCA5aHu1LBW46",
  "key27": "2XEGbdaKXkU7XUPXc1xg6KZDH1h4bVe3JqHPmY2TCTgVM62oCdwbdbJoTBu2eJD7A1NsrggzijdYqexrFcwepMmG",
  "key28": "44ph2bkPwcwrw3PTufQCWeVQyU1tmbezGMrnP8CNQizVoPXazBrxa2RnZ1m1Z6aZAcPBv3BcCGJMDQG2JSaFajTc",
  "key29": "3RwD2xDiyXZTEbfmLMbUGait8nK15QUW7pprsdGH6XzUYWuTV5eUqQfiqCsuLcvamvuxXusFLzCdvAyWaf1PrDsq",
  "key30": "2UuEoFyyP7snr1HWf52MxXoQ3edMdgm83gPkcHet1xdnfzE83osYVCNGqTcvnsuCg12gouy8jo3sMuQkHpH3sN5Y",
  "key31": "5LptXNy2KgLD7C994hgfbKYS7CF7nwg2HzG376BDr2JiphHdmG5cTjsqRkuQEVVtmVqYFCWKtorbuzJk7nYGFm3U",
  "key32": "2AfqQ5hU1oAapDFsj6WrxLT8HSmqjczQhY87vkcacMzQG7757oJF1BrXtsMVpJ6jd6D3J7w13kmkupw6YYigBmVD",
  "key33": "56jnVzXtWvmVw98FxQH9zafpExLrxzQkHDo6A7p9qAHKf5BwcVL1hFxzBUw5deG5fyzDjBcptHxzw4XGHYVh8Ex7",
  "key34": "59P1UNsGa8DkKewXU183rACR3w2HN9SqM3qaqrDF6bSN38bEjKTyRbpZJExMHrwUKPtouHQHZFNXgxWZyCFhzebe",
  "key35": "4F3jQtxPCVf4LqNTe1h5pndUat849cmnG22E4NP7VxwciLNdMBj9wyiZurxA6cHjuADUvn7Aa9qGPisMqirnwrDg"
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
