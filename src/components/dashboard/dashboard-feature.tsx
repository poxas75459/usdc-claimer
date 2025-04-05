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
    "mwua1StUg1oMwJvP3FYkYsLMy7GacxtRhJPHqtp48KTkadcavKDPVd6FnTf3sEroXKNVA7ED7yfKAqnHKDMcEoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K2W4ZSECvz6vSekPXr2qdE8cn45Lgc7jp3opRwazzG1tN5kJxMZDH7ZKTadMfUmtjnfyTWBhqzZN4tDPnuFrRXW",
  "key1": "Fw3kPHasdDtnfemYUmFg1N6GZ7MSZ5VCNAFTbgZSg1A7ufxrggCuChk9Jmdw8bodyreHC4xC5eMFmXNPtDQN1bV",
  "key2": "3HW2hLHnaosbCYz9SBEgyanWUYxjXLPNsyfaHiSRpBNLvQPFNR2WtdtxYfst3EdQLNxZoMBDkaV9SfMhFCbX6Xcc",
  "key3": "5y3AEA2P4je6kVyGR2Y291Nz3tCdB6ETWXzvUasGYMkN2gZiwCUhHSiswBk9C31aFqhXSEx5FmnHkPkQJfhq9sLY",
  "key4": "2qLnLexmfd4NNxjQZhLsLxWL4KCc9mnN4HPXLWNCbXMUSTx46ueUscWX6BuAYtLhpwFj4o857qNrdtSPCJUWohVB",
  "key5": "37gDjAkQ4xzyPx9vyHw1XTjLfrwTdFcEKWhxDQzWGghcGVFqujbhDta5SAVkQhixoNMgjAJSJdx8fHK675WXbgMo",
  "key6": "4Ai3ebXiZ4w4vbsUcmNYp2KTfCgM5UbUZ86wjLtkSfmS3CsexZMnR3erheon64fwBFH4LH4REZ3nY2b4oc1xMGLY",
  "key7": "3sRRi9gtJVEw4reg68U645tzKNYAhVbwPbP5SEu2bLUPsNnU9jX3HMEnTzXEzSdckp59PmdNuGy5pMu4k8VhLmuf",
  "key8": "4ZZcvd2ftw3dp37bxwRTMhBRHGAGpyVLKcUScvhh3qQi44dJeQzRV4BPze8BPZ8pRF4dCXfgYwi2GnvHK2N1EBAw",
  "key9": "3J7Gy4BxEqUDAkGi3nWvUXCoF6Lodh6t8qkmb1qErYHmJmJNoru8ujjhZB7i9Gu9TfQrAPHNm79noSYq2551DrH7",
  "key10": "41APqX22E6C7j48vD442HAvdzxoU2BScwQcMwF3uJJdKVRb2iA5XsXDU8dotRpGtEphXDdTzSBrNXA9nXgonQ6m4",
  "key11": "3P6o7icxpHvNczsgkVuzgRESG1Nu3AqPM5TY6JSmFerAn7tX4MrFHSMU7UhbAB3cXdDgaeaZCn8KYb7gUXqN3oK",
  "key12": "5moAEvPjr4nArxP2GBoik7we6i2zyxHH2KKPudwAKjTsuKJXMxcxgVqRBp3rky8syfXSYJ5ByKncXuoUKDXV3eQX",
  "key13": "2NXxG5wVADducsdxEAUJGtEp6DiDUMFrAWejahiDMP1Lyj238kH9j6e9gFkds9rkFFbR1eBvqkvQJFcD85j4ziAf",
  "key14": "2aiBzUojAgk1xbBhPWWn7WGjDjoWCZqLicYzwEHJGrkPDADZHvvF8bzih4tEYzucWFWfMtiRdkHXBNBsHKPMRTko",
  "key15": "iq6PX62VRKrLgizFy5ZBee4j5hwwgSf7hvYKTCmKVCnFRgyxHbBk49DLCZQVeZmU77qAp9ymCeE7R3kewAbdmMs",
  "key16": "3n3k1rUU1ScHBRvAYTRBPkWRUca46WAUs1GaewFsrpm1N9uKE4wELv5DkTSkBe33UB2hHYe3zqCFwjWBBSnNVuAa",
  "key17": "3zzthqDkBrkSoyv84DgQSTG41p4zZDqwCeZXLW5WrHDDZdSpJ25RdkQg9XRX2PajgHSpgDUA7ELneED4DQRfukkw",
  "key18": "2zMuJBckfCr6vD1b7CN5CqfbUfVPHfRGmoXNYzXqVnbcmGHTgYVAvyaTM6PRbDhpwka7xipTDUEowXyDVLopt1bd",
  "key19": "MWp2ffEv4CjZ88Pd7hqtWNMQuzcoCtm8ttpwf764c3yMGaatNhMr4g15kehrEbttpVr7xMDkugF2FjgE1BKd2Hg",
  "key20": "3b8CVrPTJ6D9YsiY2e6yXYQAnAbaT9emAuBsMfByZiCk8RjEfidbdwQcuosbXDmyQgzyoGKDJXfuYSwvJUFVxVkN",
  "key21": "4GTFYjEqDvi7vUjhxHsSKxpkUNobnkPPoPzE6CT575SvDGSxbSpFUf87FkUP8jvK1EeCByAsj6Y4j8MZYBQ6UB6d",
  "key22": "4w5k5WKGuwtooi34TqdNQPbRBxC5RxzXXV4eitrSYMExfjQUSt2eNdss6izbQTYP62tjZfZfaZVfAJpjLquyEtnz",
  "key23": "2YiVPX89VMSBiVprqz1HWoxMaGPaodpuJNRceimiGWv9qTSMEXyvhgNqSM6BP1BFJN1XuUWwmish7g24uJxPTtmZ",
  "key24": "36sUhY8Nbf3E7UsZc6x6cDPW2bBg6JgDdeZeEyWS7fvNZ682ghyHprdfG9itpT35jzKKNqxMyeipj3idgQLExjQG",
  "key25": "3ZXptpqEcGR91TMmf89zgyG9wgroGCJYftKtN5DBPftg6yfCpDpWEj6je5aj5unhRHa1wLZiucXxAkM4QRKXmEZP"
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
