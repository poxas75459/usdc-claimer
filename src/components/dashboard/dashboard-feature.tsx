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
    "2n2PzNedrfPd62PFKHKAQiY485EKEhFjgDnJ4Kas1z9RuWoA3vA7onPvsiKkUbJEazSzfmxZyVp6gnkyefcDLWLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Np5cy3TqiCdEZUDWVGX1CbrwMajaMDb33et2xFnsAr6Tqgv4ssjccg7RxZNwbxhCFPbcPfJ7CuZmiLUc96apZ7o",
  "key1": "AkP34QPC242h8SRoz21JmPTK9vdzYJKeibo9XRgRqM4z2kgVgbdJvNkKc9HvPsRmoahYpCsNXtdcLfVBatm8sYM",
  "key2": "4xVJWLcnDAzJWTVLLAiRz5qPKLEandQJprRM1Wm2oHm8eGU79TggB9Lro4y8xqcEJkSQwWw4iZuvuUw7c8vgmYCk",
  "key3": "4FCvQEv8vCV2VR4tMB5hyWoyjn9qYuSPtu4nPYNbVEgBxizyVn32Moyjq5QDMGAvmm2yS1b9atz67L7r5STZgnMh",
  "key4": "4EbGgCkDEz4wfkvXbq73oH87RctXGWLGSsQLERqLhfB5DPgymwutQgRTNPRm185Tjw3TRMKu2m1A6g1riSZRdFi",
  "key5": "uZGYCgtVnqBNWf7e39jHd4as8HqHM6d5LtXW8NT2xBXWEiQ2N1o1qP96HpbcGq3nrz9mkh9vjkSvS7zQ787pVdZ",
  "key6": "3FTi4EZ4W37EbJKxh5tdveoaLmvdUKAPa9PYu1VxJDCXpGXyfLaTdf6jX2i8MQPUMwyYKYpZoe1sx31M7KBFtFo2",
  "key7": "3oSsc3nBTkiALU173jKZ75D4nKwRWwkH1k4bZaVxrj7WvmHheYAHwEUsracRJ4Go3VktRmmunqA2o1Pxq19pY38w",
  "key8": "2SLXR8A19LPFJiU7XsF78kfvVcyBVMK1RWKzjwvZwrBFypaNmPbehHnmWGXtCUQrtHHsC5ZAPmwSXyYRRjtYY42x",
  "key9": "2W7Ydhzq7z81X1ArwrLE65Aa8YFQ2XbkXEonxQgDr72JmXnc8zAiprAgTqzRBg95qhorwXFNAVe45Ewx9u8aBtAY",
  "key10": "46VK7s2Raz7vZgL9d6FVXnM7t7KRx1NvFRxuun6yGMtBWjQmPtmVvmo4utpx7yrME5KADRiVNmUjW1ix567DhkNs",
  "key11": "6DRVtVSPRuByxnxPFsJ5ERMzzMuiRCH1A5ypfoiQTU8ifuSaHerij6T5zmkAbCG5ukF8jTPTwsAz7yYvkXWWAX3",
  "key12": "2AY38KB9z4gtHUFd867EKkcmnqfUUHgJPsWEAhPcvPjpoT6QATbQGoSUnT8Jk3j3EPeMKM8Yt9StnuincNbcgjWA",
  "key13": "4akNshoNEabtQEXsqJAZ75eCiizHj22NVjbf6bomEbQFXqRdMACddU2CutbMgGKut6JZCKGyXnowe1M1M28zoEPV",
  "key14": "2PuwbbfaX5QAhfZ981D966SkB9zq5Tn9SVeF5MuaRtoDgGxMMaRSpDBDKbG89A2AGq9rLafjF8C99GLhGACCjTDL",
  "key15": "5BPRPsqBkmna2Lo1CnUZSedREjCdqrSRF7JaWbBv3JDnrPTjWcEuHwMnSTB2JfaYB94Hii3tniXYeMd5HyMW6hLi",
  "key16": "2hKa6MxvpNge3tGRMUB4ZHsTbiPfdMzWKU3R3jDChUajSbq94qAhWkVAj4tPeUtWKXT8wK9ssktaovKD6ZmSzXTW",
  "key17": "V7kUDQPxfEGAnZQRbqd4iXH5mvvhLzp8kdMXjEhsuCJrLKPh9LNfP78q239ifJzYVyAEEcJ1vtFc8MvUqYRBysA",
  "key18": "vnVqy6xYkW6yECfFVY63uXmnVCn8j2g5Lnz388Gfk26kkDgHeQooQdFckeZZ5FsJRxrTmNPPpCSV3FrUTeaBhJh",
  "key19": "5hjdz7AirEQyf9rLgJvMdWeXPfdwUjUDe2oBKj9zUhq6tWdXGzMGxQUm6mKFjfV7Zp3Sp7r433yCVpGz7E3aE2ED",
  "key20": "3VuyDU7Xzi4wKyyUfR7BPi75rCembxegwjwfQfrdYMmQ9UDGAkDFFLWc54gXTPFXqDJdduiPwkUULPECvK37sJ85",
  "key21": "274cC4tLPVXGczBpA7q4mhfeLvcmmaNzPkaLJfabM2ekMK47khYDW9kgz4ZVrVaUU9GLDBagJC1Vgo9kVk2EMFE1",
  "key22": "51t2hNgvnPbjyMgBN8sic2hdPr5mb94FL9SjnwsdAFixbn1aivTBBv6tXDS8XP8QgLVBEsRhtYdKVZSf2HeuUXdK",
  "key23": "3q1TeKfbQ6oqEqdNSZrY3ozczxjBnQDP8uYMCTFjFY8AUhtJviMRJY8ALJkEBMysrAznoiN2afZeg36bNsZK91xb",
  "key24": "4GSzjCZ6Me4ApCusASgHCyYK9ZUw2Tg8zqevyQWyNCnG9cJLZtbYyQxfu1aRXrhyCLs5zhZHngdik4JWxK9aUdcA",
  "key25": "5B3V6VmZnAdHzxCdXmXzRhGoDxhhhn4QPR1o8ekRnoWdrQy5xJsT2gncqzWvqJCgUF8u2A3nEA7YR9KTJeokdScS"
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
