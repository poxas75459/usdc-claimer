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
    "5WnJqSiPj3De2ajGcd6NqEkSnUfsTrc9zHSQBHxVpugPFtqrGhTemhnfVcBn7XVpaNyYVYYrbrUeqJXDXHwFbwt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iLD5VaH2WTtaxRB4Smnv1MpimHJcKC96kirWZZCGwomKqxzs9MxSio4wEi2uHeCRxm1UcbvJtaHgqqPAGKhBPM4",
  "key1": "2QKzWWJdLVbeeh74ib351A1Y9H5JdrsjwdAeWDZuM39qPtbtg71aD3bE3qQMwjRa2JTTPhcjR4t8DXhuhjhbfANa",
  "key2": "2ZGgcQBF2wpBUmVcq9Vi2s4knzx2DbFv4NQS6BhjnjrYeaUsz6bkkEFmvNaH1LSrTddvJdzfn4xVdbT5wtbDsDgQ",
  "key3": "4KNQB3eSY2F7KEbU998G6mrxZ2fwuFzuUDAj4FJVECT86ArEDG9Hw4CH2QGQCAZZE4QTsE2MYVTdJ9uKWtZmUiea",
  "key4": "4K6GN1K3n235kaxa4zPTPUSGyyxa6x5R7FQDMk8EWXFYsbaxty1h9Yom5oYg87CCbN8eA3EymLujaALCB3im5BgZ",
  "key5": "24GyeXKQBxT5WeTSjpXySjeoDkaBj4P5pmA3wFPJbBWKUVVfHThi8gfEvb1o1WWCen5GRpqYX9XvRTEv8gKKc5zZ",
  "key6": "2jwoR6PQmLvtXp5mqYfpUt28KQs5vzf4hAztueNsgo1s9KiCZaAZQk6FkxGtgeYM6UJkTzzdQXboACS2vnNTdiCD",
  "key7": "2AoPbEu51EkMCk6sFUPWQ3UzE3kpZx23d5KYh3ctdBPcTG2K61rdomX3DjWkDteB3FuUB9BSdGp7ci9KgCUDD3WP",
  "key8": "5L7nktNfHMP9MSvk1sPc4XysrmwQNsjJUGrG2uKCvn8jEfqw6MDjuhT2Ltp5X3tCC8KgJ2tf6Jm7NxKJKVhPirSX",
  "key9": "2PBWh5MDqynazuPTTudzmhrBSvmP3YeuPgWBGQsrtMKNsfvCQsNpfUK8qxbhjgV39GRJGasjZH82BQ4EU5PYLxQn",
  "key10": "56FX8TD5t7fG2XhwLDtcvQHcaveBuZED8pcSA9MEghp8YYEa2QdkkkARmeSGwrQdfubNk4YVHwz7L6xrHsPZnEef",
  "key11": "5PSvQRYSmigoxuroruDTJ57z8hirTcFgzSgYojWHHn4Rj8sdSo1YTMQNAGgPFYtKvLVKfiHqcWJ5mZWwgP9cFg2o",
  "key12": "4GmQWtgRL7hamafBcTF1JHbEj9GPVdjFnNVSDiJYJquQuXytuncBXe7miNqCodC7tZYdzFNQzjdFF6X93iZToRcz",
  "key13": "5T3EMjmeJogkc6HR2zvFsjsUW8Y8SckeeyydqFm3AGNqD1tKQxiAYXVGN5qiFfyCfxWYJwBXwJjZ8FXY7xCCBGRY",
  "key14": "pHQSqvnKyGozkLRA6QLtpbdckSLbHxaYAWaADU2AH4rjLvfnLiL6mYH1bPZ3bbvkYqhTSXKsMgVk4WGT59aPj7Q",
  "key15": "4tH2Kf1VjXQ3pJ7QqmQPacr2zffRxZFKSLPdeCZXn4uhCYhog2GbUn2TcTr8iSLZ4swcz7axGPXx6zPuucbVjnXf",
  "key16": "2PatyW9oPQ3QSVB1q5EdE9tBugVhESJthnUqKh76RyAuwUUwaYGcsQXiJX6jX5Y41hTGGDsFt3YJFS6qKWYhqKVR",
  "key17": "pf7wDNCRBbaDkHjmEKeXn9gkaKTEyLXrdZN2u5tnZdHqXiWEqoK44R7qaqzKiq9WUkLLyRMD1XsK4uATBa5XA3o",
  "key18": "4F2iietZ8gBXcu6GNMmqLVUDQJ5qeajHSBiVCRCo5FHUTsUW4QwQnsCvHzp3Dm7ir3hnv23Qu8fX5mViQKjMNwEu",
  "key19": "2nJF5BeyTyZ9Jw2VQGBgW4eoNnDRWWMTFimDt9cMVUwBHTuXawDM7dvqHkbfA8i5meB5B1ahMFLePKyTtR63X2y8",
  "key20": "5KKy4c2936gWQXcQ9GqQGua1u1TPcLuaen4gq5X3cRKMgH13UkwMzMgZbNivZJPa6chrwdmCoRU9DkZwmXa9zMDu",
  "key21": "44mQLZVaMhjkXFoR5xeP4uaLNnCRubFZVPPvVqmC9wTBordN3zmtcQFvhC5sSSzhHEeKvfzJKb4En5aHex8Rfq1N",
  "key22": "8yXZXX6ggK4ihcBD2p7H3ovZn2AzqJuoUh8s8QNUH7tNyxvDFHQWkbzpwVP1SdAo2zML8pAdKJZJey3vDEiJkdJ",
  "key23": "MXVJr2FK3h7Dy7tPX8yxhZKT5nrdZcFBbrEf27WUFTp1pxyMGFNmauWQXmyVkVrUUqGdPoixGDciyVJJv6Y5RR4",
  "key24": "9g9JKFdas5EX2BnfELjPPWAnTXUrRyj4YUTX9WcbYvS8d5btvKREV9gNHkpXQRZN5jN7JW3GbT3TwR1vWpNokr8",
  "key25": "4HJc3JpCpJoxveETwLUVBevDSsNnLaAF3U4WqxcupvCMBwM8EPEFVVQyoDAy9HYGgYZZcjzkjStXojyJH4z9Uc2d",
  "key26": "6Kx61EHkCWVER9kJ9RrjckLsmbpNrm8xn7uR6QCSezya6DMFjH7UJ5nn4rMbRRs5NM6S6mpM4vYPgz6myyagHNT",
  "key27": "4snGXsNjHaAJZCuWf3BJ3nam6UZc3Z1w7EmzDCWYifXv9UUZd362zXBnrReHnNDQWWoCsRuN26smsdvLgLVQZiku"
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
