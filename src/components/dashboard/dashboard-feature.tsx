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
    "2ogqt349h4kEuXvdFzbxkrvPCowp5Fb6nxYEzMJRkVDSTBtXoZGXTHq9vKKbWGaaDXwGob252Cj3TMa1XyEDwoST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JiBxU82AhUFvK2B657GbPbERS6tFnmwkZfdkHMPKzSYz5AaT3W9tk3zMPnHeYryVjbps6G8odTtehEDBkEbfvjX",
  "key1": "NFGHdbAVcFuwHbuLRNUyt4ZTRMAiNi3aFcg4mmJ6FMr1nc8adKx6bRGvx9dbi34j9615BqhrR8hhQhB9jZphuhX",
  "key2": "2yxCi3UTyghpuBby5yqZGoWQsyp92L8tc65Z5oKbDbiRHy9khFpthbnvCHShkH5tTnwdBiAzrG5rxk7wtLVB4W81",
  "key3": "5xcgimVuTRLjtFU9WXSvcMABY6saU2HHffDnhncXzJqj9RNvtyLJQAp4wt8xDLXijnL7939ndX7JHMqkoTJrJ6CC",
  "key4": "4TwdxizMnMCbMszgvCb4wP5NEVjv3mVuNsyQnCNHSPXuizDupe1ZF2iTiPyeCvd6CCjwybAGPdz3CjtVnM3DgmUf",
  "key5": "27oNqajo9uNazaxf6Q8Z3ZT1n3mj98cqgFVKdTwXGaWzkqTSbqpdvjf2m121M5Yo3me7ToTipzhJQVLsgFGDcyZa",
  "key6": "4F8HDXHZXCk11HTbBPumgtEDF6X8dvcVmzHQM7VS96j5dAdYbsHiktM7MEwJbDgw4nLmcfEYFhKgjgNvnY1eiFGv",
  "key7": "ztVnEouDuo3LmPWX35e7VDBWWaJ9Kq5Sp1Cdfa2U2W3zuFAvVgeeetLvz7yxpM8KschxuokLL3eL67KShcDmK7a",
  "key8": "4jmFvbJH2uKEg2kH64c6v4NW5XGy8YY1Aa87VGZWEBmU1AiHv87xCfHqCQL1Fbfjtc9DNJaeabMcCzyTTqYGbEGC",
  "key9": "27avjMaEMHfdD4ScF95jaqU6eDtCBR9vkdicN4YR4xkMJA2jm9598JX5xWYMzTp8vq1NNwKdXy2faXz99gcGoKf9",
  "key10": "4xfVSBJ5EPAB2CM4ncXoaCU4uLMq8eU3dvBPZCF4aTn6nntVhnzB3gn7CwZ1Wi32NTK7cWv88cjQXqNQJbK3zTSx",
  "key11": "WfrZF4YMQ29zysquByXTjuVokNRHzPsK3QwBdQSLk1tHSdxJvR6L6u7NConkDnhMtVn9qF6BV7Y6Q1wX9UbGFJA",
  "key12": "3owu3PtERX4LEhrvhkX9eX2gXWYZaQ8QGKVxi83JeFsWEZ9xCDqp5dLRC4TiTcPuNQQF2vJhr6863j24b3y3hUte",
  "key13": "juyaZZsR1gMPi6hS7R7yq33QSiCAhig2fqCC49P5xjGpQh2mnJHB2XFcMu1WR1ErvtKxFzazwWzx4mMw6jZZu9f",
  "key14": "ts2CUCjKwXucwXZFPUoEDnfyT6687VQXv89JToVkDVYP9STaMRpZHULHUvZSZZD1SRQmWW8rgrAPA71ygAiSaH3",
  "key15": "3g8kHtp8hPQQzRWNAtz9AjAhNAdmTJWYHPs3qP4hpYMtecGx1fcr638K2EMpNWPd2TsZrwp1HnkSYgujzLpkyTiL",
  "key16": "BZMJRQQ3dqvTmhfLJjSECfrjiJ9Rkb9z9u5rrgt3e6b8YnNMe5XB9MnngEcwiWrXjJRf98dZKHrwH1QbVWkN1DH",
  "key17": "3MWkmq5H678y8GB3T4AyXXATTuJgWwap8KxyiNWvUSp7ZYoD1PYX4BP8TAiYKaR6F8NG5b5aoLQYgf8Ci7fRZYY9",
  "key18": "4BXLyYeJKVxa5LjJionWeBy72D5zzX62mnY2soiPizv4xdhcDjMt9pExKzUdCAV83PQ8VTFqJoSx7kphfQURa8Mw",
  "key19": "xo2B2F2Ap6tDPQzi7itkpAewb1S6v8YT5YWoBnLd1Ba91Hd1hvZu3NHoAv8UCxtXf25uFDWNpZmPJExVPSJYczD",
  "key20": "yQrFkaPJ9sbQYMw9azXLNHuPn46dR2sLugSZUB3kRQr29H8wDjPBSRbeFQxv9wbzmc8F1WLjn2tLN3vwJJNWWkY",
  "key21": "5s9ipQ2FAoxPAnXP1QQN6qGjfgKv2Hs5ZqnC4KcgSXCc6vkyyC7H7zfL16QUSp71M77xJRTrb85H5kU9oWsG3BeW",
  "key22": "4t1qYAX4pzgHLA8YxzJ3WuTKouGw5Q4ek8rwQHZgeJ7Fhfrmgun3fXABrUPhpU3MMXGcpn8sc9jq7usrVdEtFdaN",
  "key23": "4ZXWiVFUB5bHj9Sd6rcZWeGrJ11nic8cvF8aADnh1hSpS96o3ar5Jw9jgeBXgsYRHN95G9iKm5ZZwQNeZRFzpxMg",
  "key24": "3dkiKbwn6Pst3btgeG7cLbbgy8bCSXGfKdukddoyW4z2TWok73hphdHGXn8cnxF63U3aD7ssSd1CKjPpTTyKB9tB",
  "key25": "4CLRc5XUeFXhTYAfZm7Ewf9CEb4H3gEoFx6gqpNDwvT4JAv2Yy3zrudginzMKjnLMBqhLR6feebtAetaqEHHZjf6",
  "key26": "2uA2K4bkDYACYZMaQyyqjU7Lauojch2hwVdY2qfht6Ax5wXmqh814HaKGqwHPa5byUroobwc8pDB7HVwUcpqSocJ",
  "key27": "3nM9CicNcHYJvEXQxs2PZPcHY7jDWauGHMaCztRv39KuNq4GSwmHEunUjK6WpYXE3vu8dK8SNxxiV4Yust8bBWsF",
  "key28": "44S1VEt6uRVfGCosTYA71HSM2F7XUoGxQYYsB2aWBUmY5QDxC3ieSdHcBpfMB4nmBeANkSaKwA714f4Jorbiqkqd",
  "key29": "o8H1qEb68gLhci94rnMLDxgbTq8YDNyx1oFWPH3WMvbz7CjkEDJsBm1fuQqiNxP2aJJFUaMc3R6GjHg52v7ko3m",
  "key30": "3btvKKRkRV1fPhnyVLrzJUQtidiv8vbGfiQyPNoQQJk4gvUiiWAd9aarssDYPpciDVYz7tAkf9idGU5dtkbPTGr4",
  "key31": "5cgqs6SjpBmK1ZbAzggSEiT6beauxU3F39wkky2b38GX6Qw3f9wFNzW1Nv1ZkEbwo34A5U1ALPgiWBrRTEJvRZmR",
  "key32": "2roChkjhMbqvJzSfF1NWodHArNhyBGYa3M4bnfsELFg2axxV2UoVrRPW59Wbv9q5egyvLa84Bdw63VnmRkVZCYzQ",
  "key33": "bKnQynw4HK82QacqKp4LbEraDycsnk7TuW9R2v3itmzLDuuJKd1rz7PiyQhGkWjmE8ofKm9daY3HiDvsQm1hcqF"
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
