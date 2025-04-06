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
    "2hyUkxo25Bjphp1UnZ5JLrsbJ8fE4dMKk2Uc3MR3AG2YqN2FCbz7WXbZwynrRYe8Dg3dVWD5v8zeZYhToXsxeJkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xM1LSk3PhWSZGySXs9Y5orgLn5JmfqC1biQYBgZWxRVCo8aXcQpA9knejKhguLGaP68XghRkrPwSZ7eyeMyuvzk",
  "key1": "35k5aCbX6D1J7a8NoYq2QDZZJfxYeRhtR9D6R9WjGEQLgxZUVm4V6iJYruPNuD8BqpwdnuMpN5y84JBeMvZXXutx",
  "key2": "2xnqemHYu2m5hXMMNNpPViJtU2fVQ33shRW1dyPuKeptbC2sZtAxN4AyzDxzJyrDj7LPPcNMXfJmGdkUi6JDywPM",
  "key3": "LcipLYswLmpGEMQPJ1zrsoTSF2E8HnJffYr6tC8jGoWkg9pFEXZDCd8chntf67VJGipqqQLQLEpP55eCQ7CdbK2",
  "key4": "3KtJSJ6QDEYtuuv2DgqebqUa66W1dEraMzgQVQAPjXrhU4pQBiPEi6sr4UShw917yQK1TKV1v5dMn27aS6JoG7qP",
  "key5": "3CwB9ZgniQDv4TuacbNEes6kfFuvCmPT7HRVngDXY89KUd8dgZ24FaYJFK7Y1PoB4Sv43HtKtDVNwSpgPBf2e3Eq",
  "key6": "3dUoYVRn1WWx6UYWUsKLR61pmiAwfECJL6LiYsxAiyL5zuZ2H3txu5CqVrCZpixvtvFYUFoNkaruDzn1saybVz2g",
  "key7": "4daH59Zn1mm31jTT8buiXsG2Uru8ZZpshAAoaAkZMdC729pTzyRe7RT3Ydy6CBZbUHP1qc4CCYkvND1V1HVz5bvo",
  "key8": "3p7hxKVCxN5gYVNkRmFzuivzhRpQqh3AcakFKZEPqKKN2gSJaRdxW5RBLRAjxoTbNcjSUcWLtrbVXwq7n9f6PD3A",
  "key9": "27xCAfqpYXHNwmnKC3mX4x1sM5gX3bGFcxyMqm3CdQG9Xtfma3YT39cLmNwgkXy1rZuyrRUJENoR1fYndtNLq4cR",
  "key10": "QXUKTVeFX7Yyinn5JRwx8qdpq3KqhyvCz4HiyqTt4dhtdLAgow1nbsfpWKT2YaKgrcxmAsNnVUD3mKGB5hVEPCU",
  "key11": "2G7Gw7eiQYg84UQEvkGJD3zaFnvVWsr2d3oLSZBXAF9Z2avsoyhPHEtrePCsWCwi7wPTw3Va1XpA6ubkWMM37d4L",
  "key12": "2bbbVEZNvS6d52FJKw18cKX8JHr9atuTAGRB43QhNZa1Kx9g323AtYy4tuVPSJfNmi3qngZVdaCq7txCqUd6qvtX",
  "key13": "3WjEya5fpMd3L6HzHWuZEiVV3XgHq8onbiYFkDcbseHRwapnJaRguG2MxxA1u48c33w1sPR7Q7u6fkxbopncqq6",
  "key14": "5PpypJjeZRafcsY1spHN9woZKaEHruXAsGxXS8KRGeRDSABQF1nPCoQ1oJhDZWJtBRUmBRrLQLkWzMENVzqsa4sA",
  "key15": "3sBRZcDjKAXkMjXkmwvAgtBS8adLZ6h7CvUGC7NJJPc7cYTLkcy8fDdK1k7DqFccHrB7gJ6MDq3eTQd9AymttfYA",
  "key16": "5MH2bwwhNKqqmTnfsH45UuB1TNWMAbDbi3N1M5ngPPdKx7rpTD3GA7ejMit5iTENB9SDS6Joa3PEbeb5hFeByCUZ",
  "key17": "2m5JpJfvhieb1TbzmpxzY96VgxwYLsymt7vaoC3TGiorZQq55TH2NUHMS2nA8Mrs2BwmNv8KZET7keMX76UNaNPe",
  "key18": "5s4WdJLoVGAddi1fRvCNGovAM4xDBNf98GUEJSJFYxtTEdSfgxkrQwg7vL3SU5kWQLFZg1zrgmANXf6Qz7h27FhK",
  "key19": "2GvuAMCfefQZXpvArmW1FdoPR58sNK4TJxi4jqfXUZDk5ezNjFwQiGhVfoRqVYCeyizMAESrkd7wqpv6Lu5aMaLq",
  "key20": "3zRU31DKJYouqpg8EvxkkW6RjZm57vW4R7f8s4rsuD5dAMpbFFCmeMjwexgKVcmLseGEU7s8BC6fY6GGAKT2CG7U",
  "key21": "611h234uXXwHfVP3hALdATYXJrKFZ6cY1b2L7Hu6XMhGVybzCK1hVuavAuZ8LnQc2e9WRQxBv1jEjLtY5SwvDDH7",
  "key22": "3u9GgJt9w9RScnS4kgL6AfJ87enw1hrJpWXTM4CL8JM1LrGvvVQr1z55zKKqXCE3yAeHyeMv8mCXAbSVrwSWNsL1",
  "key23": "54kEn4VYQ6ZL8pTD3X7KyytJr3RT5e7MzTQQAPswWPaW8kXgvuRLhNtmX7bGpmAavrfK5ABnSRKT2jzY6sy5gSHd",
  "key24": "2B4GYatiiQKz92XYQnn54amX9yoiqxmkMWyCaXH4KKyHCp9MjSnPrXTCbvhfD7XXWk5mRCstE3aBD8K21NcbMqXn",
  "key25": "3PJt3hBc3KpV1spM87wVddiPjN5s7NecFKGw3weU246zYD6SxAVj4CahQwGqExKftjMT9rGAcx7LuZdfCTWeBxX3",
  "key26": "3j6D2njqi5NuoMpzzAPiLSHDzoNTwyBWdtb3NFyixrYeZBk5vsrbrgKmSxQWAqdy7YyNi2bSxC2kKJ1SZUBW4FxS",
  "key27": "2mrVCtQNJsCLbrE4rLpR5Bsvv8sP2YDpv6Tf2CuGLWvfDSkqX2qpDNXXEy8g9tvw6GrrZXU3WMv3wcDY8hwT6Z3L",
  "key28": "3uwMydxatpom2qs2hSupnLESe2cLtFApDhJ4YDaTZTWtfKZX5HaKLWwWji9HNByWCU54BXYspzcb3M37ciNvFkRZ",
  "key29": "1u5risL3QXAM6H8BcNLUWNJ6ggMWZ8QdbY4Ug9oTRNUZyxrGqcEor3DbV29BHP7BpWHqayWR1ZskEwjfXwm6hUk"
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
