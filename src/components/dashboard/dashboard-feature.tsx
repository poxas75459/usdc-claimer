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
    "Pxkq2sRV3xM62TGycuan3wqw8EPGvWqYxYjz8eaKwLDEAaSvtNy1qhnt7s51tajJreWsQE3MsCfFT7Pvi5w7vaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dEqVvHSGrjB7yS9gH9xxTYDLfZ6KpKiso3GCc4rZpeWNjB9G1CeHyXunMkGTsaji7FpX26nASnPttjVLGfUUiPm",
  "key1": "AuJYnBcP6wmzCif3QiHwQXKBsVa1UqyTqxnCZJ2gQYBM8jz8PbvvdJuh63z7CWyaSFcjC4X3bQSjCLMukpUCeAP",
  "key2": "41mxQZuyvXyWeEJik3QY693mq1MvpqBtxuixuBgbvPpiTubqCNJMCwZ8s4knZTYYNqi9SLGAYuT6AEGzuyRF2WZJ",
  "key3": "2eMjqZxHMPL2N2ohWWqcFXjssAWauYn4khNxrVds6GfRAMUhkHcqi5MYramYcb8Jpq1B6hNqoxUGefoqyfi6k84j",
  "key4": "2BGFhRmkgqcTKZqdKDPhAvFcmUvTAYCfgcHkRA6qEw6kscehdhrfqf3JkVpgSBX2Jwo52oAQqjJfCMqiDwKvTeFV",
  "key5": "4TWhQeLWsVxySf7UadskpnXwJkoTgNfEbYPXEMhr4pHzsTC32UPEe6NLYd7B5gRbgk4NofEn9HApNB4F6GC7AxzY",
  "key6": "5N4RhK1HiWBVo9qfG82UE7Xhbs3vrcSeQ81amSRpgazEAz7X5Q9RXZgyaHqzVJUthWwRBDHyPeWRG82jMxc3Y75H",
  "key7": "nBt1LHUTmh9memVaooqdqwzLTooH7EggrEcAvR6bgYFpFjuXpxHGUwzcCyqVyERkQEcxhA2ZqNAk4m7BtomocXr",
  "key8": "2N8QXSfaqregrAC5NGGapNXgLdy7yY2oknmzdd71uNnPSrVTFi2L3EmeDoW2qpZoe3JM6aH2vtTqsqmwGu5osdps",
  "key9": "4pDd9ukZUyJEL3nzpykWhg33yRG3bZ5FBRm4Wh5438hcqsNnR5617MHd7TYVh7u4aPZVnG39qMWTM4SFJbzR55cG",
  "key10": "63szUg7NDdR9zUanitSVUbq4HQLT425UBTgNqo9tpXAvnDqLgfLnMbGsusDxXiC9sBGNRHteSojZWiD92KpsQJKE",
  "key11": "5y3nuFtTt6uQMowHTzZitm5KWAUhwwiNaAbQwM8VjGsrCe1VwDhknL8eFaPLL1qG1QD9zRwAifUcPV86hfqwXwFP",
  "key12": "tv4avaH5b15NswZGGyVAC9e8dW8F1odMVc7L1qW3cTtfUTVvKLZLybVrPPtWE94GTj8gyonpdGuMNV6UeyfX77J",
  "key13": "aGmZLvtXePkAjuu2ta25c4rAvdYNjdFMtRr2nVRAqZQaBh2SvAxDqrmDBtq55KnDktLSeWsUo6MZV5diX2CQV8u",
  "key14": "5VggnvKHp1MUJKcma9YphacFwEXK4fAnH2e6PHiFerhMjYLo7vo37xzzM7Qriq1zJiQatLLcjoukfjGw18DAZayA",
  "key15": "2zyfURGx7GVdfnxFkjCbC2rqkW2bmZtGYRSWDY1NJ3VNV7nS6Bpmo4ZbNYtX9Zgx9Q9mQD23TnZ4aVTC83ZXxX82",
  "key16": "4SSmhpkAR8brQ58Uu7iFxiZRNGozy6ACQZefBwQPdx14CGGA6Wih7gkYnmPufeT3GJrNs6VoQTVmNjKWoQqwQXrk",
  "key17": "iGujRzfA9yPkHns1iGTaFYAP5yxg13nQ4xuXyy5V6tTGZpvmAAnkHW9Z7YpZZJ9vHKV8xo3ka8NERs9brZKJrmo",
  "key18": "51c6LEaVnWairp9bBdxWA2v7bmRjJvjkG6mQHhCSSyH9QMTBhD6uSnNvXCxyL8S5JJfe1STd3zC6ZW7Uh5PrMstf",
  "key19": "2h5xU85BDqsqB7nxeitki997mSxBSBPi8SmEprim9WaYED7JqoQHZA9DHiiCrtFsPQr2hZhuNUYzDJjmCy7RrhpF",
  "key20": "2NNfMjt3d9Xffi7X3VJPdhqbAnWnaQC3uUYQPfcREAguiyr5R3aThGsQtmSMNqNrFXBTX8JRbSSeWPBURbV7U9MX",
  "key21": "29vSppWvzepGLtFRLNDtheWECbemoThoPxHfYXKK3FL4A2Jti9uXprdCHTuCeVeKBtAmHKBBRg9dcLSFtbsndxZi",
  "key22": "33iMW3n1t6UUY8eNF4x6D5TyRXh5kuUmP2B8wnSW4fXoJB1jcBdCJFATXbSz3Pet9ddwaLJBuYAeSZWFmGEKZGkA",
  "key23": "6s1P7VgWhxsHjrryBBjEonBd32n7epyWtHDJN6umMFsDAH84AC9WG3z6UmQmr5ozh1WehNtCvW55D2shn1mttVC",
  "key24": "5RJjWJT9ARDiTUUREsnqUVitaNnSYNDmAh8GqBZgK9HqZ6R2NHyPUWGdBdSyptnxpKJ6fXx1yneQdCXVNk6cqwGM",
  "key25": "XhK291EZ8tKin7aejhCrvSZQaYNtTxmxs2qX5uFmNBbv6Uy5LU4ZL2vvAKZ3uCtRQgLNJjf4TANcq8PqA6Wg5fZ",
  "key26": "jMDKoucgdAXq7zZBvEJQLZ3NGjbqXB5o5fAmVozVECUSxoAoaH5bpSiunDp8qz4YgEBieCyhQmXw3oAhXYeAyjb",
  "key27": "UeXDMmam3Vg8mJ6yEVDmu1Vo4b9uEctzbdJbSybjSDCHcivUFFwLtsqiYWzpeHJouGsYh5PAoLY9Xw6dLct4quL",
  "key28": "kXJgYzMh9cgZxmsePMMaiAVWJu7f7Bn8gUt4N8APQmFDBMAj2nopLwcZzLcauwy5G3ptikvnzBgorevmNrXFHbF"
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
