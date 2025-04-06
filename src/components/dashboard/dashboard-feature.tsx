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
    "4e55LwrjznFbo1bgdAamELmVYsMasujwPia19X48bjofchx7vDToX4peARJF5NrjwzBcx7u5YmRtpm3zjpfBpahy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pyka75AKEft6hAe2ztV6QApRJXh18DVXoqZVRRRLgtxNc1s9obVohSd47KoYzyGFBKBpazPmLvLEXVZduadg1c9",
  "key1": "8aBbdtYyuzJududS1KixowSDwW63zn34TgZUF8xE4s5Xsg7BALGh3PC7L8CeEfp72kiXe4jgooiHypcG4oB22rD",
  "key2": "5GuaCTTcBUv2cmZgYtXmixT46KasP1cUCgSQ6vUvse23zmhPgKWD8Wv2mmfeBFEjY9H5h89ZJrxKNwowMtXyNJTr",
  "key3": "3Zt1PxFcD49Cm71VwNbJZMSuDtUZPuaMr5yteQJKBtNTANyH5JSjV78EkU1oPY5RpD69r3XyXCPppdVA3xZvmXfH",
  "key4": "ZV8JyixG2Ueac7VdT6RqATgUgNoVhyW5QYYifzg5nv6MCA2KVuuX8zc4f9Smu2sHp4tixhMawxJNx5p35WhCWyx",
  "key5": "FNAU4hbSo8QjckvGaESm1o4JfhkxHXyLWZa7yWZTvx6ne3YTziJrDKwqD1PResvH8veZqkP8MqHkDtwXJ6o9ptk",
  "key6": "4T9RRphhdEQBpNxnpBXVYXrNwjNdbHgoANtsymxfC9YG6VNSUibXKbVkYhrg8kJeM3dbrcVPnXAHZYxfB7fEFyUb",
  "key7": "2pK883j6kvAEikqcd8vamwxtdzNq2N2CCjzugMeELSMpQhmwtUyUqNCff4VUrG7grRaesDrpQQfQ9L5oz5K65AQJ",
  "key8": "434RTWB9zt59KLeRtfpRiG78THKX8VqH9Eyv4g8Y5DSEMGnLZDJXt5ozZNaTSMHofQJ1X7yJkAgnLcyMbPibNifT",
  "key9": "2DgJjBdJheGETjV6eUZ7cidVZQgheepUR9fQVESUM53zyouxmFGRS8eqCj5T6ADBhBp3ArjaUhZpmF35FDSRrGQF",
  "key10": "GSh13TjZDeoqhhPJ5sz2eXhoVzVNGh5MB4q6ZisfwSAKubL9FrdwNLV9JHzaqmAAa1tKwsvELH9fstMusvbWsgJ",
  "key11": "6aAm4arGTFBghLd51bsTk46BfbAXWCwckZFEgTJGMQxbW2fGp8de5pjnxa8LYX5M2bgM3Tht4sDyDYpSKuHxAr1",
  "key12": "23ug1zHCmW3CTWbmG8aDfmUoAWw1fhQKJw8gVyaPLqYLXqbQ9ddsrfjr1CttPikpZVKRCAo6vAqecNfyheUJ6QxN",
  "key13": "3FmGg4nC8n7LeJVQXRkiCuYFW1NmUxpJ2sTtHv9hHPN3BfyJjEiCbbuSVeYeXz3wQRgmYH2dd6xRF1fKF865BnSb",
  "key14": "64eaLrzgJE55YU7PHGSHM6uZ2z4XMEdva7G77vJGGDXvXWC1HPL4nk4ZRihnmRr7y92VVSg5YUNTfG4RjQ77qB57",
  "key15": "4Wu6sJdYUSpra8qBykquPDjquewriAQ8VEBcLuGTAZCZKy4uhByqoPMC44dg7iEFf9seazCPvE3ekWUS7Zm59ugT",
  "key16": "65b5M5nk7zeoMSdMyLBaSGEB1KqMiK3Ux2Wki8QW7Gb19oNWVSer7NxFf6xSsfdnF7vg9jKmMvXPZFYqvSaakwQA",
  "key17": "4LrqHgvy5aazTYQQZX8YA2Hs3HWbjkjBCzsWxjVcJvqU6FbbADy1pEwmTbvkkpbLiHNfW13YeJcoMAxYnpFHSt1y",
  "key18": "2D66eP3FWcwZgb9po9t9W6iRZJPVDyvxDECLWLWB6emYVe9sgqoNiQ8th9Z7jm8Qx4p3WqHur6s7RiTjCMDn1czq",
  "key19": "2S6fJDR9hX2YqzXj3pHsnqMgfftt4fJCB7acH7SXyNeBr8QoCC1DvP6QzUAeLiL1kN2wanQP3S9CZPBCubtKErH3",
  "key20": "5YEmxZ9bNZZt4mNTL95fsgnbKGhnN7iWzXNFZbMVuFP5GPk9PHjUKxC17gYEpmC1XPRCsio3QJaXz4MhHLN9Vc2T",
  "key21": "3ccsv3QouCT9XSdt4K21pfDHT2qWks1VMjanFZ6CkZuiXjJ965xUjir2v1pHdfkxueJcesb8Hoowcbb29V1YSBrQ",
  "key22": "4nfTggLp871hSxqsNmAiYDgxp8ngTtasC36wx95Z71zXkbMY5Jkk87SgWwYjJhP3VH4AV5Hk37inXmgFSdYMXB5q",
  "key23": "58nkAkLxNyAZg7oKs3XgJAiXGQ5ca64Xi2FCsssdMn1CS1v8QguvBfaKsmjgwZvgjUaMWUBeXAubY1jP9riwxLbW",
  "key24": "4uqJTkATT3jJa1UkfZZuooEyDTN53rndCUGAZpGy3rvsTkYvYhHjhKq1o6LRwGNJwvh3rMiwmr5i6fCk2hB1HeG1",
  "key25": "3FiBfH1vBViBAxWxXfYEi4e4NtD76HWr3ciAZjXbx4dCu9kekB3mqotgmbHEYDaspwMkuFXTCMEJf3Z7Ubjv3PyN",
  "key26": "3gdL3uqXwq8JMoEZ8ovdkagXeaisn8Htkxy7jS6uhXLg72qqdesBCJQb2ti9MHGcPbz1NxHJ38BFsHYQfcgjqN9H"
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
