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
    "4fqSQ1Zhkhuvc858N9LuiRAMkv8vi5g1ZJxZQoPhDPjzmR2bWBEAcYQufS1SZ5xdcqGKdFLxhvnQXqHAGQrNLkqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cfsoFcLBiLbzccVhS5e5Z2dXPsEp59q622jzhVAj2DJX7DGnSVsNJ2SMTMha4RcpeDX1X9kX9e2CDAkaxc3qxVb",
  "key1": "2R2DZQ8VgEA6bpKupuarqZDUKQFiLy1PnAoZL3cFts9sREY8jugGEPe8dSF5qdNhxUDpeU9jLXY7EW6aA3UvWatb",
  "key2": "4bjgEbAF9NZ8shVzA4GeikEpw959LzFoXVVzaG6N9tJHJYfqhLryaHLrQ14Kki4WVmhD61Siq8ptyf3rM9G2HvL8",
  "key3": "4RKpxwjYbyJG1RBmJeWpMhZ1487CD13pDgJzDQ86vkARrADmcreugUADsTvS162DEm4SX6ssqK7jxXzcK74FYdbW",
  "key4": "5ZC2ZERZx9GGENqS6dv8JcXhYZ2pCgWsU9kNffua1vudP2kkDw9VsEeYxfHSpskDjF5ePa83Hr6RmzgFKnVpmgp",
  "key5": "3uu2t4g4eMYyJDghh7p9XR5gFZjX5mmqGAaj1iUHqMXsrYpdHsBHL4S64koDFPpLHbbX6bc8g8HN41Fme3YRyw2K",
  "key6": "4BBq5hD4jdVeV6iSCpuFnZ929uS5EGpNuhjcE4NA8hMyvRPMKTqdRs5XTPHeHTTzXaH8UhuHLxB5diuDucJ2iS55",
  "key7": "5K2c4CrtHEnguhgkyRSqvQ1evyjeeaKvj9878pzJbc2bkhfMS7r7scxaFSnx5u3G6hxyRQK6Y72hMz1QipqMFZxv",
  "key8": "q9Wc3SEtm9K3Au8ekB3VCnz9LAeiTHbsqEC9q62bngHWTUmjc4Wfk3vdx7CtidyVPJWnxJEGg8eGar9tBMUjWrB",
  "key9": "4F5uPPUqppwEC9KkmaxBwHJ6cjWYh11wSp9uoiuWpsfhvALAKHy91ZNpd77GeFk7p6gxVLTzK7mDycek2S2QV5AD",
  "key10": "fxvTuv1z3gtQUvt8uZTnp3qmsi56A1FNV2FUMrePjsZXUSYCvWVbvsT3Nk7TpwBccLUjR9qCmydPFgWnTAUui78",
  "key11": "53wa45WyUtzfJanRnnUtnrus34HVSCHhyRhn3twAiQQn3WmTAEJeXMKTNdce2Cx6wPTh2Y2tbi1ERLqoWP6rLvxv",
  "key12": "QkRE5YtHQVCdEDwTNCcYML5VvW9okdBV84Mee5WYBsjjL4wSAHsukaqEcdfSQksGuCBUBrHm1pYQaAGjyzVA9cC",
  "key13": "LuMzVWsgTdBaTZ9LTN7ad42fvUEBie1HH1TvzPsGrxmuVmbbEW8UmPwGgxTo5LEWsGWUgykaH5mK1HM9XdzxtFR",
  "key14": "3EG9DPcKxVk81revaNqWsbmKscf66NqtahCsSZabkSqy5jR5TKhstDBG16JWdgrVjFG9MRU5SAQZ2LQ7Tiq9Kdfs",
  "key15": "Haj8ZsDN32fGZ4x1E3tD7tCX4RZmgMgPgWx1rkASg8wjuAA13HdNZ4Pfkb11SzbcQTgqMsKUWyhks1gMaoMENPd",
  "key16": "5AktiSLfBw1aEPY2TGbmbtHof1cKS8Npdzav7pwgncH2SSJtuAUYFuFtmLT53EEZhFkyBZhwKcHm9GsCj6qdLH68",
  "key17": "3tR6WXjjno5a97uvisHkckFoQafcBegQr8oqtRoXbPRtU4k2x8fHbaHVnEL1CT1t5Sm6NgjKanyZcfGWYpod3q9Q",
  "key18": "5m5HvFjb1vQCi8man4bqwRQguMAwot2EaERC1rfLvoxoCasK7WytveuujknUVSjC8wQoRCd4NKb48YymoYPHgrEv",
  "key19": "MkGs38GV2kSn6TEaLXSMF8qUVphTarePMk4dkxrJycxnK7XCET4KEWy9hBoGKSC669Hq874uDA3D3uRKNLtWUKY",
  "key20": "EjtcHnLxZ4dioDshxCkqk7JYMrSQQmyafU4KZttapRUKqHDkHUxvUzimjU6kztT12rDziBekeMSvYn7cdasZnGM",
  "key21": "5meanCAULoLNnZn9ontGB1xT36HkDj2s6ABib3Ude8yoX7SPBgRm7Z7FhXmgfQAHByou1eoYdbcF7rjDHKWMU7vN",
  "key22": "2JWrns1SXwdtP42HAcykbbNetKZDyocfEsapZU2BoyYsjnCHsU4otpS6fAfaLTxsqjsBeUZDSSEUAHtZozZzLCjC",
  "key23": "3wnuA9Btpaq9mREQd384qD8kymvmSVGR8jndrBk3b4Li1Ca9RTSGeuWToUPcXTqXyVd4bqP8KWjAj5MiZad2MmY6",
  "key24": "JuagfrYVecnCrkaiKP6684DXsGdY6ff9shuW41h6AsBPQCGsuiWRdXEuJ5abym2d6oGGnnWESMEfatAyxqB8MLf"
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
