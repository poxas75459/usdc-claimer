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
    "3e4kqfTPcxpAb52hyAjegLcyM9mfKhCLvfbeRhUpeGRYskL5pu3sob1hCF4mgNGp1cuHYw6UHMFWKXDMXSuoThvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34aXQLtx7n53qy2uUiyePCvsWXoLjrruZxVTubdh51nddqYGTJ76jbUBxASoSWmNCT5QpKyMxjYV33tDz5Tzj9Bu",
  "key1": "PEfGyiotwc1vL3i4BeoPBZsmnYQqfNbHWNWcameBasHoQX5iNoZyHhGt2ScXGjso1mT4vaWEqmxV3pRWyKQfgMT",
  "key2": "5NwyLYFP6Votods7FjcPPFDxp31U1pqkAi5Z5pwjsAvYZ4L1D8DuP5yQLVX38dFK1zKKMaW9wkuuw8wj9qat1wAn",
  "key3": "pLa8xDWJHfuewTT78cJnJaRoba7umYGJoEaU52eDfRnsSdsDgH6JM9eDDyDHUuXNpqPR7VGrrdiUKcN63Rpysb8",
  "key4": "5rZHXVZUPsDrjSEPKxsHVsuPNCFbrmoUvDxsjURk6CCPGTbfztG5owJ5nJvbmqdtkb2Aec7YErtq2esdLgGHSfNx",
  "key5": "5SHbPss59Qx4mkaxaRFX9Nvy3jprYwVS3TRkb2uYkV6fxudgYfAyBRVSJTit26H1XJFAQ1yh6NbHSZczHJeQFffg",
  "key6": "KDZ2FnKDJbyQrbu2MvRBG5uWAhbShFERYQPUHyF2k63ezETLLT3e8mUxQc4apmBcCs75Pg2fymYWGDzZQSUrM7P",
  "key7": "5kABxqLW6Rgg4KqBKw7xdSyMMBnSQE1fP6PP6qN8sGNhmXoyGFCYzBXyP9MUwTQaEsUBMUuoqsfpyMyzNSnsj5Xx",
  "key8": "3RQq5ZtPYu36dstH5q2kQS1satakAvmgELEAyCocPaQAL9DH7nPJuGr6XMJNu6FV8gWh1QhoF5ea5QxyGsq4ra7",
  "key9": "3UkN8TMvcevsGWkTEXExVpcTjTNDwuFaSteFd9nm3rhaSRf73Vrkgk3uVWjfXnztHf5EoBdMR85r7TtL3Nuojruh",
  "key10": "24wVNsA1kcJumQRfMtWQ3qudzfng4KRWGEBPMqgoE6tXpb3zi3yjR6MrYDGxHEfbjtnioFgnBzYjGy1aJwkWYEid",
  "key11": "3hhvRCUab9ZXMTDGu4WyaNEVkDiruPZtssqTWxy8TohWWHKtBT9XsZELCCXq9LvLJ8dZtNaDTda6X5ZgdcqeeHhS",
  "key12": "5v93wWYHctfJxydKX8ms1PtiT6gKUXPbm37ZUTuCyouSzLD9GsLk4cMBeUPr1zXjJhpXLwbbqbmuJPeHW5zCGM11",
  "key13": "2csE42iro48AbJBmyoFLNkegRpnbVL9hKw8i2yobucCxKq9mEMy48bfNoXaWYeFtJYqai6cmLuTU4psihEm3Vpkh",
  "key14": "4NKCBkfTCHatBt4RLHYnXYAbi1NzHBewUKrXhR3n3u4HxcVs5Fzd42biL1EFs6L7Xwxvb9nsdJaPrJgKsbUigqqi",
  "key15": "4ZGVzmGNgaHW66uT3fiCzxjGqRugnSVYpxHXDCYPrr839d6gAJzqr9cUqQ5jttLpG3boUxocYrSbD39BwkGTHEso",
  "key16": "5jGX3AQ8EBEFiYw83b3gtsUKicgsJfepQ6eFMfkwvu9VdSciWocu1JHPHrQQMKHWsmkFYDvUDKtxebespfeNsRfa",
  "key17": "2rGffhGmZTHfQwnB3N8r3LhRjXSDVubEqtTEhd51eXXT4ku2eurx4ritaaS828KeyQEnXj2WceM2dzeg2zh3zJjo",
  "key18": "3QJqCnTtRoxy5zzb6zouPpjLASCPZ2ycath7iNyREdBTUsSVP8FW65iMZr5uWZy9F57qWoM4PKjZXygwvL8YV35g",
  "key19": "44XUKfQC7PAkjNV67HPHz14nXcif8wQQxqvB6KtPaJu95yVPBogt2ieeGmznZfDJCw1h3NMfJ2gDSoVBDxWHYfJX",
  "key20": "4Cv53tpBFs5k7rNWyzqCfxBfVWbZ9t4za9B3cuNaf1tM4ow1oqnomCwQXxvp7Md5KDe96rchrVdRvvdrKAjMqrTt",
  "key21": "5wEcs6cCiuLkqdwcRfk5yXvvPvPRmvdTCZfajNw6fwdMe1NGVQTpBGDBNXir2Cij45THWBpz95L2Czje6pLgB1vf",
  "key22": "61XSqh7DSeVKXeeF92CmRjo6roveHF8GMZvCEeckHxUiSdN624FekY3PFScszQe4kpT6aTfGD69u9Ai2CQJeqZCx",
  "key23": "5H9aD1k6MoWA3jjP1bERfi8MbEJvVrK53v8Vf1fFJWo69JFKFtgFUASX9ZmzvXpGKh7WfJjTez4d5G6Vwij9posg",
  "key24": "369sNGhnMXDpKKxH4BHM9rM8d4GBur4mxEmD7i22woVR7NhtdAJixXFpYwaahfVdVcBSADe3Q4Psrbg2cMn2wxe4",
  "key25": "QEw4KcmS74JmQjVmY6eFC1w9jwpgFqjwkmHNbJeYx6xvqcToXyXCPV8r15phqJXjcUXLC4R9rJNPnWVeAy8Kjxs",
  "key26": "3GBDQzyLqcqVBh1pxsMtF3D8A1n6C97Rtt4wmyTrHFy2KexcqowZ46wazZaVGrSxBAbnqAS6bXw1EaphYLXjCyzd",
  "key27": "27edUq6wfXjnDk6vQidZk9q6wbzdpbUMQ3EucfmTZjrCGVMxWyRXCPgDGoUixAHM95ozNQAZUeLWiPR6nG865dY2",
  "key28": "4RHiqJprFfAZjh84aYphmUCTfECxgQ4Eyw7WQJZR5PCB7QnGwjWHpjtEz1YMu4rZT5zM2WLPUxQ1dBwiS1QwF6aU",
  "key29": "3KnmyWJvU33VtTsF146MG7Mdk7paphTn6r63oEZuBavvY21mSW1SHdsfQbTCXVLAt3C3HK5exh5QrUzncgNnamu5",
  "key30": "YLC1MiERtWq614nC7Eia5yD6n7B9SjESJHKLYfueaJExEm6jDQdJrehsGE8wHnDjq1d5du4kQaqHg2yZp38Vbk4",
  "key31": "ytwpCfZiwTHxZPPBG6SUmNGSTBWuy21jBR44m3eteTB6zTGuvorpePjy6BaKsH5ZPoRJt5jYETXuhay32yzjZx2",
  "key32": "5xD6CYT1baBJ6BjvnRTMeWgMVgh1M7f7oMnXocpSMX8fRfMiGeaN6bwsmN3pJrDDXxtEptfcwQ8CRKrq68FVa5xt",
  "key33": "gaoNprd5p4sXjfwgCpNiknvhRh7yvy2FrQL1YzLzu4aMPsCcxvHcarwyWvKC3C8ExhjJyN2Ab2BDnoMUCZXnX4y",
  "key34": "R9gNWZWcwXKreT7Ed4hVHCWKqoyjsp7XT8B1xhFufgKkxnbDy1ko361Ec3bZ77Nrx7Aukqdugv8nDqVdoYH6gCQ"
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
