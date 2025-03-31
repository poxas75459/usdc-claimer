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
    "29TAh6RWh3hpxohCnpNmeGvWdGBt71SfTSgjxRjAMYpuQrciXVXGbf2PE4HLoP6XKK2bCqiqZdD42Yf5ifySjQU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FNhcBdNMqmvAsqpKSdWx43TWQVf46AmyuNjicsGgQonB4r4urajrHbaKr9rxWVBug9ih8hoD3QQBPXPpgrqYLV2",
  "key1": "5atzn3Z66TjKPq9jNh2e2wDtvWErHtkrhMp1CtcoWTM8z5gmjFrjN92K2SgDEHiWfP1via6fViSNUnC1dkgD7syL",
  "key2": "71xeNgrV8VaMh9h3YX8v7DwkEbK9a2VE9Q1CgtgXxfiB4qZz7fUVmRbiWFeNFX36NvejBNytyLWgRHCsjPMf6HZ",
  "key3": "315PeP4KmCJ527C9PmcYM8tBr8Sit9KUZMkXauU8w2n8AknxyPLZn7gLVALfMTKPcQGQYf6gBRdfJkXCWrwzP8ra",
  "key4": "2fLDy7Ji4gNEsrDUHqiMB1FtJMMCHA3iUWtXhvwhou7scvbhuCeDJQS2Aac5zSHbfDXXxXHcZ9kxmABWD5mu2aF2",
  "key5": "2vAMACRgVRYD1SSxHB7Dnk4LT64fLfZvoK1T6pWQHGrwTDRC7E7b7NNUU2Udmx81Z7FxiiNRe18EdyHh5Stzncay",
  "key6": "5QgPgPwcNWYkLVNRnhrXXtExCdaFoQVWyHVTt6pA5VSm6RHnM1EKpN6zzHx2kF3jBxPzayYXSyf576NosFTYFrVA",
  "key7": "rnswhEwsZaPi433TarXCjE71pUCUsh6i7PJeNp4XWBiWCZLyvhugNBy8pmAnTLfCRkX1fiF2rSViGY2Eaz9c2Vz",
  "key8": "CrphTCxv4MNFC1YwvuyTecz3TzExREjLhMAR3PKgtb3oeFEp2D9aYWdkUerL1Qq3Mjb2WA9MFzwF1ZsWFb3vBWW",
  "key9": "5AmozNXjkJHbbPtJwC9gNL79mrGq1T1N25espNsmkyhhuU5BrwumXSNkq3xHLc5sgyars8Bm7Y6aMNWMtqzEvjch",
  "key10": "4mFMUbRhLZpGRr6PyYxYuiRd8abb8vQAj29BjfTZFZYsC1LmnVC3Gi4i8bkzzdf93G3FrAdUeEnbV9iG6kmCSfVf",
  "key11": "5STQZmdzw7s3Q92vCEfBW36wFMLi939HuA1xJCfgShZLSvM9LjRf3GRz1EGAiUXx2MnJUYcc3CZgdozAc3XVU9Tx",
  "key12": "2F6ScGZqE7saUEjW4y8sJXEgnDhreGx4SqVHdmmVcUJRqwMmHmxXTX2dAxJnjeNhhVXTBU2u6RsEttygeCgdK5Qk",
  "key13": "TKkADCMq5ttzubfpAqk3xYebGQj8vN7TqL4qFW8VVn5pbbMj338nKbAzEngikGmgK5Pb3TdKJN33dLxx4QytPD7",
  "key14": "5cqWrWKPhYQi5eM8wiN6aYnfRVECALG9u3eeBLo7FKtzFxtF9ojcaLFEw1cko6ynmmeVNsDXZDfW4YRedCe6ZAb7",
  "key15": "bzfxqZuRh3mvpaBALyzzHTrLGheyiDj6vDMNf98kcp3xngsDevU7sKTpJrZrzuLE5fzSG8P7Zm4itGFz7KBYNrw",
  "key16": "39rsTAkfjeAPrcytfBQf4gQDYV9iNBsWA4WRcZF7o7f3WR2yhocbRqBJCGoD3vzcq9hddJ6CcLQP27dYJhF3cyjq",
  "key17": "T61pRSScMVS15yfVnGwQmESigweMQVmv7NeMi8vgpEaUZv8Yw5oc3EViXTxoZQVFqjALMbkBEo7nPWgBSrnAxXs",
  "key18": "5kLLFZ34VPbekvtgAegPi6Vdv5youihLqvmJXsbjezzthuGVzMdzDdJi2fiAejzHseNRy3xsDN7iz6AyBp9BerNA",
  "key19": "2S3K7FthFWd2djudX56ocbYaYGNSVgaDxXdhXM2jjZRakShM23k8noNgET32mWaAkae4FA1Px61Nx9ug4VtSX95K",
  "key20": "5BftM2qLUXKscCSaG17Ehhn4j4pT6zozacuTX1w8sAJX5MGnLeahobupAhEkLc4UtZEj2NT17QmQgyZ87vkLxAkN",
  "key21": "31mTQHetWDrKHrBgnKkVgkVJDezAuWdSP9oQPfwZ9FeP7LuKJczEzgMePWaY7ZyUq7AKdthQyTVsSJWrLAbYPRTA",
  "key22": "2F9z6bSXghZ8DT3Mr512TkT7UK8Horb1hTiqe9Sq7coSwpqY4nSHqHtpKgCnkGJdnmmnSt8Ce1XWEEiwphEBGnDd",
  "key23": "5NNsStomBjP6AEbLsTJSb1SgCWEtpKMnakq7MRdLocwGTee6pz2QX4zBFhaAs7Fi5zCbt8oUHC1TgXZV6m3MBjBs",
  "key24": "4uR3bDBNkmsAVFnGk9HtEbaU3rGSK3CvZckrW1mkeNB4bH9gzgHXZJDauXhB5gjiu3LqGNQC2Em4ntjWMinSSHuR",
  "key25": "3ZVYyC6N6N7dLdmU9dBViC8G26gA1rqCQeLd8Yca8yB8Qme9uVEYuvVEBpx4jxKQi1bNSVpqjFsHAr9z2Uec1gm2",
  "key26": "3cmzWBxLPwnqQTYTjpBmAV5bbkszux2zXccFAgWefz9pFwb681VyvzmqZH2oCryK7oJDyd7UABTScufH9cFyRWKn",
  "key27": "3jBZgrL5sHGS4u8L9RdDAJYEDuhkGpJF97vfKb9m9gk161viVXXC75P55ZhrNtCSEY7AhixeBo35cZf2d9JhoYHy",
  "key28": "52AH3shbr7kEzS6HaJk1vmLJVnj9DB9JEG3H1oJwky3aMTq3sxxCVV438oJLrXDDfZXiAtNt42pyh9Ffmc1otbhe",
  "key29": "4qfpogQwVegDek6UyXaEepSa7dULwwwmMAE42DEQM8qt4mEvweeZmK9ZvjmorLKmXN1LUrhZerP71D5ZUNuWTmfK",
  "key30": "YdrLJAcRxKc1qZ5Vo2Vo6hyWmAWrcqRRnpyMkgkMyXqdBrYtPJbJxLrKVUCaa9kwukAcN6Cv5XCC9qEEKmRmNJo",
  "key31": "3LWPUQap4P6vDfQfqVz1asnVDd9giWR893QRP1m2ygFkf7aG6AuUsK2fJACkTHRtEBJC5BCirtDnfMGuffrRi9MH",
  "key32": "2Z42p9PNfguBN5Wc1UYF6sYAvBvsggDo5TQpRVKnZP59Yv8VW3hAM1D1vxJ5NpW6usX8zbAa3kE2UnbHMckHpNWb"
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
