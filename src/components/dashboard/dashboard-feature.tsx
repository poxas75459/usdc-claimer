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
    "cEQJmpQ6E9DWwFytfnUQ7Aci6hKyF1veZSd5VVAJZ4z5kMeRpnBBiiSoeh9VSn18EzUk9F5vCRaysYeewFKm8Mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b6nQLjY4MoB8wW8eZktoVRsCPbfTYQRaWAZpqzZngR5tYPJZoNBbFXuqPDzMEQXoVfzfq3SndY4oLcDTrXPWmhk",
  "key1": "2t6KqHT1jjmayXjDbmzasXwtvXK6RhbFGKnsypEFhAgYMgRhUA2SbciHPAfRYGsFqb1EqD2R5TsgZkHgerXtq8d7",
  "key2": "5ZWQHUX95D7x83GyawGHGUAg416YfbStC7avs8vAbcKZUxKLAd69cV4gkdTe91Smdu1EZwpoBVCYtqezz7e8p87r",
  "key3": "pLoiiwWLgYbyntxmjEE9fsD85sp8TViPZwtZyroVXaaXjRz4qoEwMHSJW5ZjzuhiojyvJ7ZyuMd8Pqd38HmSKJ3",
  "key4": "3RMwaTWfZmP2m5P4Ht6uXhcLi8eBvRVCjw7kEjfakF4AhMtNFRDBxg7iNetMYScrTNRf2bAmuC75VYrQiX3TecdR",
  "key5": "4AQfHA38ZDbzmXscrsnN7kf44qTvYiZSWawWLwLF4icx4drtDLKK6f4srMxkJcK7WpcMGU4SUsoAAvqPHNyypKLR",
  "key6": "ePQbst3wJpsbN3b1Ck8CTeUjxNJLbmU4TP4hv1NkPbjMr9uqZPGQ5CbT1epdn1FvhSkBxhSmLVy2VCVv7wh51Mp",
  "key7": "1UgPDHNsZYJb4ZRUTX7BYoPYRkQeb97Q65TqQyvMxhBbwCdVVwixmC2cbDXKXt38WTcmMDTf9tZQUKmbCVhGP5u",
  "key8": "1sHhnrN1iggDwkNVPNTrujEwArDTG3S6qvT2qQD7AuJFbLv4sTrHKb5s11fa4U4QrpvxXyrCFXp8K1DZARnR2k9",
  "key9": "8td7GZ6e5URPGkWCCfST6ArBeWMgEQkFe3GNxLchv9Sd5AZ4xjU8XHUpZAVGQfUFCpeirDxZFirwz6vHsauHjxS",
  "key10": "2J7NdZev9oZaAmzCnRo5yfb6kr2qABZ6iqRXSNw3CdNbuVLwRW62VYbWJJmJxKG2MyBo6drbdcVToEGWodeNmVWw",
  "key11": "64FhLALfVGyao2uC4GkicPWrPGSy3J17giAmoJsd6BYERg6ZcUNZZyTYAvFqiq4X2uy1FC5Yxqkod5cMzqNwMs8E",
  "key12": "4QRqcQfye1M3zq7ufrXJpy6C5XHxpikcU7A3LhJm1dU3KPLAxBA9ZWbs15rLQM8hMqGinCgBGNKZTAv45nnY4o8T",
  "key13": "5KPD7av6Srk57TM2q3G6WBxFfeQxZUoRNq9zkdFCUHxPYWg3npPHHtjBMYszEvfs7vUyu3Vxre3QaHS8JomtBewY",
  "key14": "kS2SxA5KCo6CMreR7SzSWjyEPBmf3ZpzqGmDeMhnEvkZiX8Cq2gGLsPwbmRAWdspRs5FNsAom4LuxN9gLgrfJAb",
  "key15": "3dmAwmpsepm9qfdagrMY2gaMcj9UMb48gsFKYRmW9J2bz7rjvMu9mkDNskBHQRaWq1GCoriGmMEy5U7gxQjCB8R1",
  "key16": "3PGxaV3Z6ri1HbXdPPHtPyTpiFUwutoeRnYNYTdv5krd6QEetGQefDTFM4Z1rDAybtRP3pWpsSQcrFMfgyxLCBFX",
  "key17": "36LHzxyFNeq238VNSKHmc42vKeiy6tLNgjUs3pCKN6vtM245QCMBY4q19SVDY9whSezNkAxbMKCmnu853ZstAajj",
  "key18": "5krfwVvpSuXiFmNoCHGQHZqpXsoeqR75hzTqMZXgL7HEvoQXbbaXZZwtfLF5K4TuRukC8Q9BtEFvzKDX2wA8qRVm",
  "key19": "5gHrHWvCRhb9WqJtDWpJB5rnxZ2bju2rec2AwdK8a8cGtTESqo2vkn7cgbLrfuQwy9aj5dnfCssUA9sR4qyr2at4",
  "key20": "5qJtT3rZYPUbBwbyf9EERLEKpBD6vdPyc9guc8TUstt7Kb3BgxJLWMn1ZHSDMD447J3qZ1zV9udEmaVnen3Gv1QY",
  "key21": "RYoRpCjCNnZddmXjkujb32Nce5FpKEnn7NbCBb68HR4w7cueJ3ZozSaTcuVnJb31qhFbJMNmh5Gm9LmeGcRsFnL",
  "key22": "4iFixGtojDKbZnU97GFYRb3N1PK5CFFQr2aBdFxFUGRHPob8pzd5861GxofreyKgqTVutznpT2AdXejpmamczD9S",
  "key23": "Au1QtAcMJhxL65YUnsKLJfKC7ANCpBUU8hjhAHHm8peQ5U5C2y5Nm4CTwSn1SqFAjiLqeKCdHXDNE8AU4vyCZ5X",
  "key24": "LDnTVDVBaX9KbjqdTzkVRP4V4jQ9j1FztFL6S34fyTrec6p5RopRy4TzyLNJtSAJfowstVmmmtaznxF6Hgw7B5n",
  "key25": "3aPc5ZWsNvfck2jhE9xJnWno6AdELqkh7eRGGdVfb4rxL9zbE4RAfpUainHFcrJxZwXdAFH3BpbTAnUhmqbTXdRr"
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
