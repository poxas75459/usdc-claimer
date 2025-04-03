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
    "3Fj65iUEV43Wwt6kYwf6zTx6jVYbYNT22Gf4vXeM67NgC9kAxhEu8jXUS8FkjRmLkGQigwhosFXL47ymnQFP172N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52iXooT1ecuSro5fzdLxXjduU7HaJuTRFyW47qH33SS4iB13GcLWV3SX3DLs6XGiBt9atg7HwL4akaaSemz6uM7u",
  "key1": "59E5tyqRSL3zrgu354uE6WBfcZcqqzqzJhL71ymg3Nyrb9M2E4Bg9NC2RKxhaokGWxbqat71VoYVnmpGfgzM7rhu",
  "key2": "5vHjc1Chy49wqQ5cb4s1aBFGvSiThWQ4RsELWXFJVhNYLorcgjPeNDLV3qX78rAXr9xHD2E1tUJeVes2mSK7U2YG",
  "key3": "3XptnF1Fo9VtuLruo2y6LmwDiB5fSdW1NmkhNjZ7LrnWmaRD1GsQpT6QGNZGpXr4rna4rvPo1UhvqaJVsWK6EPGW",
  "key4": "5Wz1R96Jt1JggLnKsujWfXwHjwZRR8eyeGMtkNZAxPU8dCfcE5e7xa5fTv3QrNrjxNPK6n86CQkp4VRU48RGuaNB",
  "key5": "3vsCzp6XaU9WWnpNtvRDbhyNTpHERXf6b4eDcNyCbimiEx2JoeWCPguMSYaYQWNanr61Q8moyESiTqDgcxZXfvzV",
  "key6": "55vHSvyBvEn6MfNnv5PySrgTKKDgY7w7BjHLmxbQA8mqpyyr1KUuBt19Y75ewBLNMYkpEdKi3Phv5pmAyJkH1JzT",
  "key7": "5eQ6pUf9ikDygoLYd5Br4hBv38kc5C7UEfoUUVLHkfySw6HrYtjWsyvMYUDeFPpnCpG3px1XTLrvawo2rbb6AC3D",
  "key8": "2BKkFNev48VwEYi2XiyYHFchC4aFvD158E8dYg7afLPdVaZER5n8ChxEjD315NkF2RLjP5wfRaCqyWEk1pPCFqnT",
  "key9": "5s9SFL6eBTcrXDAzDnvnQkqXDeM2Z7MaJdQPCVF1yiaVHfu1FG8cVfkquEnf5QpaQrhrmmRPzNtnAwNP9RjecA88",
  "key10": "2ksSCMsQozRLqdjoRjgEqY2aXzxcXA23zkPCMhEnkLEvTvMDT2KMAeYxGRFr729ujbY7y95KFKYkjAcJs5TZ6q1M",
  "key11": "5V22oXCu8tp3XawXhK6mngPZPogTEaUEJep7BcUNiBaFyXCeAs9A8esh4HJnDha2ThhexSjWuat7Q7asX3waeX7n",
  "key12": "26JkjYHtYf7SDRadPS424T9vMrRMVewGCVRXX8YqWNrsVCMaaHZK7THHLJ25abMauvnYo3pFf4jpK56x7beKgKAj",
  "key13": "2kVMx6fdxN9rEL2wucjZ1UVLejiPCMbR2C7eAM5PsjAdxqUhaxmPPHSQTgadB3CtVcUuZXJgQKpa4moPvSQNap1Z",
  "key14": "Roe3KavYeFMMF9wKFPJvr9UiD6Yj8J9sU4dsJfghsj14UDHqa1B7nNCAeEGNAxB7qPWm1antsoM7FxptfshAhjx",
  "key15": "2QALUrT65KyfK7DYtGkucowXzyC7UTs5W5P9UkwB2HAtLis3TDgWrYaqfaCAr35kpESwEi19QP3ebb7NUoPzHXr5",
  "key16": "5XwHTpLzXX71TGRATd1fJyTGsu9rvaFjFmzLohGHXy2XGg2dNK18Uw9VEBEJirFBCwDHpWavJkzgGiKgTGPobkFR",
  "key17": "4FrxZr7VX7pKQoYcyrCS9hvzhwA6YSu8N9EYJ5VR3JgtzzJN9SvsumoDrzBPQEg9TFXuSB668ym8kkr5vQa1Bq8q",
  "key18": "35ztiaEdfyAuNLarWHHnEfFvhAHqmPY7bpAkefVJpgmF3jLEPi4KWUKLwBfBMaqDGLRRmWuV8V3pPCCNFrBh4okr",
  "key19": "5vMZsHNXNTbxk3836B3YQoyu3Pa8dX6pAaBduLvXNtuHyDk6maLVBr2oA1gg9SsgvUSTNLVmjo3cbUxQ2mEf3kEo",
  "key20": "24bFZPMRASNt1vpicSCJ6S7z3zDkNpSWJLnP1hXeECKX7Zq1wuiKcXxxT35HXwLv8Gzad9631FQCkJwe62udD3vr",
  "key21": "3b9a9UszUtuRVGoyfrBAE2sPNPV5R2JquGiHf4RMVbeNRebcxipU8J6FDKvUorc5UgePcxhGJmfA1MM6QiKQheZX",
  "key22": "z9W1jCCW6uwQSA1jmRzagX8pS43xPVfNhrpgEHL9Q7CF9B7xUBTNaoaP3YFz8qrqbF3jC8DAtwZpznZFXdtdhN3",
  "key23": "3HLKX2eqyHrJk9AUJBQaBXUVhZN6fVyPcxcZte6qd4m4QHFdL3jt3X1STY3hmTRD4i3JqNZ7JUgerjXRZWtAJRB4",
  "key24": "5oVfG3omj68zGbY95McbRGhNHQvTdbQufFQzJBwffVuJ3JUyWKRuZJF2Dt3xtpRQUf2TEhFFtLKkrami8qqSbCpR",
  "key25": "QFD6meakxcGNDbWXEHJzKG3xfPDfdwSTujLmheXTwesrd4u8BfmjYp4Syq3icwSP6QfEn5Y2ygb2G94r7hNTV3n",
  "key26": "3SRTSXj6t1imQCjx2BknNkqmZ7UB3sKJQqS6ZFMMAkYKpd2QHmfocgoDDL2Kc8Ez3weXHvGAD5mtBJQXxsNronJM",
  "key27": "bMF3vDWUMrQM7V11JSsp4LreE1CnhmuqD6TjFch59d3AnWRSWEadZ6V71DwXo1e1QCBfAaP97sBU9gQmEqHpM6A",
  "key28": "MtebevMJyjNHhZghZgAMqvwbjqhUEakvZv2gbv4pvHGUGnPy9Y8iWaGXSNn5cvVsc6bRPkcuzYzD17zCX6NTqSN",
  "key29": "2qPndzfiBV95xX6XKXdsDCmKV5fXpqippHHu7zn9kwdpZQZo1UM8XJFpZ9haSTQNms45agKZRgmZ34ahUUWFEQYq"
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
