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
    "2i47CJTNPFihj1vp7AhNrRQeV93JPoeWUC673JzL3thbCTZfdEM35dW74CQbeF5Jcof9kJi15fNj9EGipqeKQUKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cLpAV9Eqf5VSqHJ69M6byfWjjUYiUXnvRazW9svK9QwzYZWqRNmNrUH5P2UFtzBY9k2xXWoR68A11BKMDYm8GcG",
  "key1": "KvoVgDNFzd6k6aHVSiP6euApvBck2NghvLN9yfeLdfL6RJbcCTcnzj1tm86AWYrL6BPBMcboeH4aA5b6ygGtdy2",
  "key2": "2352HeFLE3gMRm9i1tYH5QL5WacBerETcKoGxQbKheP2u11gptcMzttHkpkgJsnT7HY3B5bYBYvzsD8VtE6Uwb2Q",
  "key3": "4mH3NShGJ61wNG1mUdqdohGKBWxecsbzxZqKqZdAgmMUtg8QE2UnCKsbV7yY9uWoQDpnWvvjGSvoev71w7bL2wQi",
  "key4": "2GAQgZJQYhNBrC1cg7hLgRnfUmXoVPAk61QZdJHSoH8x2SVAJTb7Pxi8nXvYsK6tqeYYkcYjqc8yp2PMUhdReRuY",
  "key5": "ndzAZKvEqmnQipXFK6Dk3GVAYDHyp6uNddD13M7HoxBs5NLFGqmTdChdYQyg8VoAnuZXZy59V9YkwAhGaqDzTsi",
  "key6": "3Pnh1MfSDW91cNHdcQA1Cp37RmjR6jPmWE6vtgvJLLFMHVKPSJsRf2cNT5fpuSo6tZMLp5g8TVmvFofrudNoU3ha",
  "key7": "3XsbTqPPV2x52Zz4ArimSYtW63BiJxtFuxWtaUq91yVLVkYz1tLQN9MnzFP1vDV2FbdZvcM4ymkLHcwQsPMEbEBt",
  "key8": "4if9QKWxcZGBK3voAF8Us1BhyqCjL9o7gfNJfBjuNFadB2GPrKkSHPPUKTh6iUEYhFBeejc2vHyZdTeEL7bNbQHE",
  "key9": "5oaWmFEcJjHNCqbY8W75EsBvHVYp3xaxL7TWmN1uxThFMMz6SpU8i3epuiT3NYtsmkkbu4YBmxtoD2ba2iydvKJp",
  "key10": "5nviUYYdyNxBo2WmpEF4hmUDG6CGHN4raXYQtBPmagetN5crcYyafTrMrNqitgyKx6HQV8ymkRgfPMB77aZUReoL",
  "key11": "3eNQ9nKrZqZLS8VgJfE3GQytSnqAo2cgYpkA1hRAnHcuPGwwTTiAN3RFXKGZK7nz5tdzBBvueew2E6NwQeCQGdvm",
  "key12": "2Q2VjnT3zoxkjoCj6NeUxENVXYrYWF6Jxhj5zyVV7p2nWfHi3x5rsHJJor5pKtiBaZNCrLMZpm42JjUcwvpocURo",
  "key13": "41pLWejddWQF3YKsA7XtwKmdj6pSG9wbxECZgNgonjQtbF3XKMk9UkQN1ChXoHFmyP4ghYPRjWqWdPac8g96DQPN",
  "key14": "3VAV8AzhzKnnkqTW3CxUbMYSvD3EE6r3zkx3MJtL3WQammXiunzrwhnCk5izvggoAiohWLGSBhGFELPJHBqk2xXM",
  "key15": "fdqAXyuMeHQNjxXg97kc3jNyzRKLsiuKYv93dovTSvV54KpopN4jsEuTq8V1Z5UHGxN2cz6rNvMrBabcLNNXzYB",
  "key16": "2iLGZ15o4q9e1buDHXnHuAgXzKyx7kk53x38EbFcHkpxaDtBoFRmhYR6nZ1hBafJSb1s1bNPLjZjZruL7tGFmmuD",
  "key17": "2UqojPGrQdX9cWZfXjK6WjNwetwfJhv4ABheLfmyLanj8dfYrMRzGqvXMSm4NvxVBuftVkRmpdP4wCCURuqNBEjX",
  "key18": "43xPbKa9Z5GHPbiPPKcmu1UcY2SS5mo692YekASpZsvU2UtZyRVGEaBpCjmhDk5GqEmgDS13W4CTr7r6wDJ8Ver4",
  "key19": "5n967iryH53GCU1pqUrhtc4jRq7kNihRxe4EhavcNVgDjQEf9ZVFgXpGR1ihyTVjrf48687KwbLA4vHm72aJBQ1e",
  "key20": "4dJD1Ae8QXLJb91B49CB44NAN83UdmGWrDNEwiJdr8Bh9nA4AAxRkYYka95fzZ8dvEenxzo7oPsJ8dFcDyYCvdRe",
  "key21": "4fM8rAq26ENfSd2jdD9eXsHhGH3b7Nf97XukNKhzYpxY5fWGtZ77rBeDthWWTG3FhnTDkPwUhkw5EQGpt9pFwaB1",
  "key22": "3bhP1ng1E8um1BcVbwCWQvJy5f9mnnAdXujysUd4BTrHKDw19zT7LonpJf12Hrb7jkb3WPk3Ct9Rqgr9nm2dyTL6",
  "key23": "4ijBbM8SYXq9sWsrfNwNVrUqsdwtJtStyicAB8Nkwh6ym8GM34Pk7RDwQZSz7CNkHnf4jNULNtyWbN87iG8S2Ga9",
  "key24": "4tCTZBjzaHxvUgaDujgTFP22dxB71nTxYx8wGQS5yfw95qdXMhvsQazNVCuL8VyfYV5TtpTbSBDyKp9PWX8KZuTH",
  "key25": "2BXTD819a23NGApkgcFU3d2tBoKWT4HFj1xihemm7kPsU2sdpEnYPjT6mdiodfpavPj4fyAXGtEpAX6twrufhjFQ",
  "key26": "4hfAFhsCHexQXESFN3syse2vVwFRHJDQbbmQsMUnzY8Jnr1Fua1ejFD985iUy99iiXF9sauMzHmBTooiZrUECoev",
  "key27": "4dWj1ErHDUyx24q7yCFVPNVnEuAFmAKLFucWeFbDSTQW4SXxgung9nRovVA1XCvSRhHUKGPi26aQsyNbpbttDUf1"
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
