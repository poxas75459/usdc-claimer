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
    "4XyFHUQnG3FQa9pGEV2HpAsrPV3z8ao8qoxUjfGCRmTnK1FyLHgcT3Fks61r1Kd9fVDfA7zgERZyTUvCzRXBuEVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gsh3Md6KjykMfSRhKyrivTwDgY5wrJqdkvPE16tcSWWZoyyVCEMYwrpMiWQJXB921VQGLqkEy5eTmN1JkAnhJuQ",
  "key1": "32KkifWUmrNiiszXJ8rNRnCg1WMJAFv9RhTpCRDwKFbtqqFvv8Y7N6vguNQQBpadCjJaABwU32Q6vcMRMAdAGnaW",
  "key2": "UbvsudV1HnngPNBhKYo8i62rj172q2zbbidcdPL7tX9dfDCJAZscJfh8eBMEXmrMHTAbCd8qpFMbfufEe7sYTnE",
  "key3": "1pybr7p11BX3M4qZZEZ4ZYBZ86D1NSCsNWZKtyY33BbvaZ8BgTLAHFmzZoBteDD1f4ZeEYkRo1V2F8x9jBY4ZLZ",
  "key4": "65niAHiUHPZ9m1RMAZMnsmabcM1y52zqvh9HeQQBw27JdLp5oL4iHjKi8FXE1qFZSHntCopziEutV7eMPTASt3g5",
  "key5": "BkxocrtHFSMinnigddmQoSfbnHkNTsBUFB4MqNdEYhuNiGFwk4EtzAWrSy2qeKf7n4yHFbeFyXWzVYNJkR7ATKa",
  "key6": "4WwhTh3iCafx72yXMdr9caBnSQ9j5PF9pQDudvQNPPc6NXBbBU8pN1JYM7n6sezVRfuZXJdT7nA93rZy2teeQwh5",
  "key7": "3hukzw3Cn6HEh4pF2ariqds17Erix4wyLfkcnaR1Te2n5hJxcYC7QmcbQrLJgC1rS7ezGCiNLRU4fsJFzMjH2Vn7",
  "key8": "2g4X2jHnGge6pAyFXKFTEakNDyw7fbpsDMV6Dac7J5xNui3w3jnnjBJaFAHUeNoN6a4WFbHvPta38axGegVeEgxu",
  "key9": "4is73yvCLuatsEquyPYwLuTC81xC1UeDkyNmaegJ5N3MLTeQiGL9TQ2WsWPcd6b8WpfYqJWAfc2aKmeTYzus91AB",
  "key10": "29hhqv3qfmGuJAosWRc9NhcYp7M7h2kko2t7XFyYr93Zb8RQQnsf1ntD6RLGvTDqKpExeDNiVp3TbR3EFB5HvAEe",
  "key11": "3ufdQthUnC4ouGZLQENW8XoW6CiJrvRDZgVTXDzn35TXd2reXsizeaNGZ5nokV5uFyfHf8J7KJVDEnfG7WHwWzUT",
  "key12": "5bprANPYKX4E7SMMRD3SG8xg3WpVh9xasfcde7kRprownTQUGgoADp6BRMBzc2MyUxXLRfu3ntuUTwuaGb4yHaw5",
  "key13": "2AbGnj8dhghSooAyawvR1zoNUTDp2vvVErKqqJ2tEeeh7n5tSsX5W2HRYgV2sJoqTPbCZv9WVrf7rMVgFM8gsVwF",
  "key14": "5AZ12XYyjhJrrNEzXB7gEyWjkfTkTQpaogABU2h1rLRy33QeXjPzsDwkFT7budUuy1CPppCSbgye8Mk5djjxJYsV",
  "key15": "PibYjkmBkUdcyU6BoHyeZmwj3QnucEkRWMJBo3vLmo4HmeLxQkH8rPKzf557TXnQDJjmaWqsS1bm1ZPNVB6SZ9N",
  "key16": "3sXKGvsWj5JUurmVLp6XqRueZDXCEvg5xehwn23FshssD6nbUkn5rv569kTj58ZCG5SMoA8nEPfdjVXYEuuPKAuR",
  "key17": "2rbR3UNWjsCdvYXwJQxukWMmu7u7fRVMp7pLq3bUwJtM2Syiz4KNyah7Lra2uEEu2xPu4bCLBQTrAdA8dnZLNiuF",
  "key18": "3EHahwPcYVz7cmbv6pmWhKscLQd8EEMuekHjHGk58xqYHUWDmCunXz7pciXJo8UhSLsbiUc7Qo3kztLskx9VsJEs",
  "key19": "3k3v5zsS6a9L4SKFRvEdVrdMbexJB2XaBnXZnxeSgfunsrWQ3j9j1t9Wbk6ysN1UU2PAGsiuhst3pbFr3A8cUH8v",
  "key20": "4Qs2vUqG2EPGUzPdem5yrvmTEtfCRJerkiqsk1A97X2N6VnyTNqsijw7SHPka28L6G7hk2LcmY7aavU2nEujd8Vf",
  "key21": "5d2DB1KBrmi6xAziWUNaQtacVpbrwkPjowHCXhTQMReSXVvUEtKyWTHGhGUxBwP1yYNZvY5cNp7kzfunZENEji4B",
  "key22": "4S9fedSe27PqqXUAinG32jSt15cC7JMc2qXo4c72YDmwzVubt3XEtRWHhi7RLDdbr3Ve18TuETYVxv2gsk5jBef6",
  "key23": "67M16XEyECqu426JkY1o5iNFETX6qSffzPL5yGBnuGr5fzjLpe7DTK9qQ9BWtUeEpEFwffBHbCb8avxg4VGUJXXN",
  "key24": "5uewDkRNKMhYoenXT6XcCcPmxoXwSr1a7KPN5Rj5QXCqUDKdcuvw21UfieHMJ5tL1SLk44XPG9ZXuWaMnnV53sdA",
  "key25": "4y38pkMHGPoQmwg5ukXCt7KUe5ymD2qqRE1boSqx1XGcuxSbvFci2MMkz3PULpJnymjnidu55MQswzzX3UAEbGzp",
  "key26": "43Kiwi7iHYd7pYVXQZgGxGZxSffST22MNTE9ZF1wu4u9axt32bYFHrmWGfV6AJXrA2FnsMpsGDTAMkjqabLbKSJV",
  "key27": "pjYniXjc58CHsm2x5HYWHAMkJ17dpjXFbSwtb3LhECoMvF5wEzF9KhxFazo4M6oU3arr4NthmbF6NX8VGWHr6nZ"
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
