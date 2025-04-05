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
    "5Wp6fEUqC3kT1SX94BJYbUR24sGoPGhWKwoEGrBrn35v7TYxjpcqgyXyxJssTEJxsinLs8Lhv2GEdfAPNQVCxsip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XUr3cTw6g17AWHMrhcn3BKTE3BdwzKujynxzEZyKnftowhJG9cM2sCjz7HnBvR9FToRZoEH3vGksXp275CriuTx",
  "key1": "3njfdsm1DuscneZJD6faHdJizfE2MBnXRLgf3bkyzRrCz1qtUYpVfrJZCjDZRm18XhactaswZXBCRyu1wpYtrEar",
  "key2": "53gN22pbdxpemvrwYppoL85P735i2GWTop9n8a5KffU21VePDRV2ccaKMQBcb7dBBz8aUYh5e6TBGVUu6kF8Dfo3",
  "key3": "5hnKWuPdf8XJZ4TDNy2TztgUTcdycwNYPqXjPLvTitbALJn4mU9DK7izeV2f9WRwDSAwC99oiz2GTKWVLP5iz6dD",
  "key4": "4ktnBdFyiQjsNHHetSAWvLzgXnZC4E9LHKD2xG9vqbKG2Ek5ZR49PA1hvH7r77WHQ6Jkgs76HVqYg3acja91bJYe",
  "key5": "2wcyXp9SzX7Xp5aMx86KKAwsBr9DjaZ2wjAJ1Q7SoAnS5DguDDxMQzDMbEi1RAngJ7ysi9v3mjwDgALzddmusTT3",
  "key6": "5AKeaJ2kD8Vry9RzVCC4Zbt7eadP9z1jios1DHFHpjcNXt1kAKHNR99KFLgTZ1Kd5cYQHXfVcbTXVtXdkrwWkf3T",
  "key7": "4QpCMWVgnQXVV9JRNh3vr3dbW8e56i17FBhfywV8zovn75GTvbowzNuMgH1VC7pX1TqRFSE8Y14wRcSYftaWeQuD",
  "key8": "411rLg94Cz5r7wXB9Ju5tVQscwEtL2Mq3XeUTk1e9pcBaiSpu7P7FnSAzwzEaJd7QfPy4WQLuh7qeKrdoBFVutcW",
  "key9": "53rUCryMLphUKT96i4xBU94qe79MXNkz2rimSFFWpHQdXt2u6SPF1xUQJvida23HaoeSRxqaMwojwTQbzyp1YjPN",
  "key10": "63T7SRejfGq2bDD6a17xWXRTgu9YTMc5y3BNtdKYRE6ADXRUAqEfUQxUddWkrkd4gxXbGVkEPcykzrbe713T5bag",
  "key11": "65nb7rK46SvY6pNZWG6kfC6fZD1kUJK1xctXyshES8x2HtwN72roWCJDNee1L9dyZPoPGCUQpX9mDXVDv8AbgwkM",
  "key12": "33QkNJM78gM9CpNkzpivm2AN5fnZsXQFB9Ezrjvyt9wfieDoGHx3rj2Y2p8PBGohSwxj9siRZEVT1jYaFrH4nMEU",
  "key13": "3B4GZ5HjikDs74qgb3eqhD8Db7eQaQPNvRDtty6ZettzRRCeTZ7o8vdJzRTBduE9S9B7c4kcNgcEyEX6Mq3tygtc",
  "key14": "4e7ttEXXux3kU3j6ppXfzErA3WqPuEWKMcVD7Papwg5fhGPEdHyS9ZjGoDPDfdvn5VpJULtH8mhBgHEkotJMXR13",
  "key15": "4vWsoXAVfZjQKFcDfw8wRskSYE81ssfpoWRi4ydwQP9BXeqfkLcqiGPbNFiiKRtUmHugjsthq3KdUHcPKnVyrjSC",
  "key16": "4pV1SY1ChBMuRVKLMSA3HC1Vtimn3FEURdiMQWq12sSjVez2gdvZ3GzsQKdtmLzokww5aAfmszrbLpFLEWw3qPe5",
  "key17": "59MzRQizHD5LDGZGMvnw6ZDGeWZPoxnZyzT7ZzhVnJPFZNMNNBE5qtpbebeY88DZSggM6nuemEEKeGMtzCYqfeaP",
  "key18": "Az7fUQ2X3BummHPvMfuE7GZgDeY1QJ9R9Q7VMMhwWA9bMNzs5FhShxmNrXURxkVN3nAHGsBjzLn7UrsCHLz1Sod",
  "key19": "5BRbVeJaLBE6SxDMByiuoPSMCqmZgU84uPNfUCgCQh5jiMi7x6JYwm4a9t2bWF1dgXNGXEBUthU8gk74NzXMh1B8",
  "key20": "5usVX9F8ehLP25B4dmqarJUpsSAKhoZ3nxZdEtbB7t9HQBe2s8z2fdbaGgBu89coRYuCbFbhhwnRqRpPFuj6GgaC",
  "key21": "4iK7XNoQniNHZVV9ekMq8qRcu4qRbTwrhMpYyGz8YnfuJ5GCB2ypobqRYC2Aa61StC7Jan7qjBiMKc8MRRJatsHy",
  "key22": "u7p1tc38czryw268bgugNcFGiBNMiVUBfCjzc3bwSiq5UsYnFNDxVgTquNaTXMnHGvHWVbT7MQvHD6YZsbgk2TZ",
  "key23": "KBYBs1TmxGVr8hEv6T6YtCkL2qyYrNddvRbwuTZM8xnT7A1DJutQzXuCHaEHJZcX3kNa2HXNiXynpWVUnDk5hzn",
  "key24": "5yMiGMiBgurM8bwoRmHk9K7TtBjVeBG7hX6BEwGGogSdiFsGZ9iiy9fsiZtwRoLya7dmgDUEt2R4FDe2SAHLUWby",
  "key25": "4eVTtDJZGrC9GbTcvSFeHXaaXuTde1NSxLFnJqAw6zZMLqd4qTUCHFcLN8hbiYDpjvMFhsHy7HxmpxszBS8mm6ZP",
  "key26": "3a2Mq5V64xD3G33KWUC6aLxAALkuaw9jMmkEQSciX3JbL4b3DcyAdhayh6EXYEKBnmL5tqXBGoVgbc9jzDB9M4pS"
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
