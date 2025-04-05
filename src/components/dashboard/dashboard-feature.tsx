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
    "4TpPvg25Yu7zKmmfERCKar5XjMK7rT4yHgKNuT8fEHLyEesSjz4v7rSAVnBTreJtdG9hwJgYtZt8zz1ayRtUuAxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S8GmFiuv5UaR5sCfPnpnLhRXaSRq5sKxavPst7XECimbgexCqrmqDrhwrDMdDGaLh2mx61nCcCD2ow4sbcRgSJS",
  "key1": "3dcGU6Gcns9WLDYsUgZ5pbdiKcvjsTBEpTADSMDdQSonMtijhV7peZRyENCWsJDBKG41F4rCn3WNxPZbJHjMeD75",
  "key2": "x1jSS74C1Gkzwn6GMLfHn897XYvptUGi3Qnw1bAtszRyLX5Baf5k5X6b3dJqvZ3ifxUE2dGagjM2HRtDCXx18NU",
  "key3": "4scEaoLR4vxMfZfpHDBhvEicTg2HxqD6ddzicMAtCL7fzQoC6uxf9XHMUgVV6sgHPmvDCx4qbnA47jsp4h4ztqfA",
  "key4": "2ReszA4UCrtXrkj21nhdrhrnUancPq21rYFWsAqFxsfUcizCMYQqHc3ywa46Wo5qoT6mBXwNAkJAoHLiC3mXdAhH",
  "key5": "4rhxP895LrN1qqABchrnF1Y4gYxaxWpxwVs5J1ivWnvzKtEgmv8ptjcV7aKGMBSEJWmNoypi9AV6pUuhf4rRhMiv",
  "key6": "yhdfnzc5fEDqwd5mmPwzuvomNiZpr7D3ZT6wdhn6YkPtuQarQutZhHM4cvzkvPRfa5gz9M93oHrLCzZNBh9qGi3",
  "key7": "J1wuz9wm92PB49gk5LmhESHMVNFyezmRBBabVRwfo9Y92PwVLrSSFBVhkDSBzSUCCkFJ9VU8PHwp97SzB8xT7tM",
  "key8": "5NjQivrNV9GT4R4hQp1S1q3fLUDyKjF6gSVKmnxfGSk83r3rxTmB6XJxtZayjUEdMbVEFVWD9wbcYXgrr1TRXq9W",
  "key9": "2wGwXao3useBfQ5K4yxoj7YxeFGAXrUV9K4j5rvqGwBYj5mpyRPkdSLayt9WDSxwtvUcrBnkXhoMwwTdzLFXpf17",
  "key10": "2QboWP83okLDKwYodc74MfYsP5Er4pCgEpVKAHF7vLqaUKLG5hwB4US5oQEAWDS5p2BjQNcr2jwgPVTiTH381xTu",
  "key11": "3FMydjmKFSWuQQWg6xHsDMxwXv7ZSzuiCgCsgsD38R657SrM9y9vxPgjVacjVsZKbHqQPJfNUvComxDUeYs1QVok",
  "key12": "4PPP5PTzAjZyvkarZKH9YmY5kJcGbwHd2npgMFejr6xYbuvuZqZ8XKnGKTogEff1ZCKrE3o1mBRY6SCoWv8nrmfR",
  "key13": "KJMnfdqqSiywQuZVpdJRYXubNKGNxRwK51spGErdg63msvTvPxdAZqgNDe8MSQSEfDPJUMz31NNfUwV2ZwMMPES",
  "key14": "Lti7mtjF41QxrFC3cykg35SoTEDu8EgjrTXoRSAE6VbWTqMzXiJ5CptA7NJfTjew6cgRyg9QcBEcBn8JFXX4S9M",
  "key15": "2hCvAztUG8s559k9baV2wKWYwURqMvRYamt3fRHaVeM8KiESi9HiGCevdzpLXNgojtZ7wZCuMXo48yacY1K3yWya",
  "key16": "T8cQee76FtFCkBksMgnyPjJZj4MbF5FaaD3FheUjPuSDZAqK3HaBw5ThH6vvq1kJXaGxAQsB9K1CvYQtrzj5c77",
  "key17": "9sB95CufcczFp2AYe6EFPThCATwe2P1jjPeAFVwQhFvwknitN2CAcPmx23cgnwhvZuLVburUeoZSfShF4KiEDBc",
  "key18": "5R9mQtN6SLr7R8UNYp2dexmsxnwmhvFgXM7C2GuDkH244NjDgbsJNzttWVd1ggnpyKvnZ6tBRiidQNMND6Tppk5M",
  "key19": "41gLRJ9uV6cneFzSk2YMaMgjK9Fj6dVRNfYEQSjV7i5TQfWpMASNLAw8CNL3MDjDQoLszT4bKJ8LYFPiaWuvN2vk",
  "key20": "v2MiXRZNFYUa4UBNhrJEJUWMzrxZWj6bg9TtMB3jNNFpBpU6KdxMdHAnTuKTBp6r3uXBWSuJMs254ypKZ5WVKxL",
  "key21": "2Rm7jRwLrHoyqHSudr4G1UXFa31d1p4ubAs9JU6d32WswyEiBAhhCAPqGi4ssWyj9RD8MuVJsY4L4a424hT97RNC",
  "key22": "3NBMU7iyP8R4FGJadqfp4uEsPc87P9cUMcDtviBKtBWmP7kkG1jAkGw9J9ruMDPeYAdAKNymjUJ25puhETzTLrtR",
  "key23": "53dXxmKaMQcSEXa6HvK6R694yaBWBrtq5JRkw3Nc6c6b4sqJHRiXMmnYUkkwtY4wgPSaFySiPLAs4GeH96923opb",
  "key24": "oyyde9wLUeNvoPvNvr76FeLQEneFsqcYysP5z8Z3MZmLeMx5QR1N5MAsXMdoQxsCD2zCnDZJYFSMEV4T3Dew2Dm"
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
