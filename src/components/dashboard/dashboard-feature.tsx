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
    "hYQH27WkS4zc3BHcXiiTYrAT699ZMnbpSAZk2Fz5fpk53SoG7zKk8SSj8zewEkTR4M9UdsqTXS2fgxhkxbkW3Ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TUSjsK9bbkwenGE2nczrrqhrHhyGzMuc7pPAYuYgFm38C3EkxoQhYof4b5XQVeJVNX9qujWpkW2BjN7iLapALBR",
  "key1": "h8Ye2AKc2LVzP8VWntF2eA4AkrigynuccZpLMLf81PVGDbB9TkKnnMB3X1nwS2pGLLwg5iSQSJRsuosXbE6evRr",
  "key2": "okW7jWmq1tp5dE9JXVHeVXtdfhonRWLjiKspUxM6C6Fu6YH24GyrbtkByxj1c46zNWC9ubNc1xWdw9rW1Ncpgjd",
  "key3": "3k8HpM1obxukUivWG6To9ij1kbeD5mUTFXHBRCKGrMraBX73kGkvd3NiQYsHo6psTa56vh4HyaFfLZaqjNZ8wyzh",
  "key4": "61eFGUGng43mHZvH4QkgjVcoszKVnzhHKns7AVAzhjFjGWAoXibYjbxXYrnLqw8nPmxdRmMNVar1KUGiRBRV27xs",
  "key5": "3dkj6orSfZVsqRG1xivvyxMQTXFwT6YFqHFvMoLYrFrhhgJXZezmFL6AJw3UJHossS4JaAVQ7EKsic1SKikPDd4F",
  "key6": "65QbVsL2Ss1Ao7htJeCkmM68S4KJd5W15poXX4q4Wdc6d6aJ3i2jFjbp7kcQrjnKH989QDZuwL8sVXaiB1wudZjE",
  "key7": "Rw4at3EvRwoaNZixpVQWXbxYEY8NbrG8WGCn29kVDbbri89yujxENSScJuoyUQYxEqDeYeNsSWUY7wuvmqVdp4J",
  "key8": "3L4wyr9J41knXiEgtDmMDKfT5aVuy91G1odogvAZHbxtcWZkyhdj29mC9x5MtpJWHGquDK1zW8AEEa2BdrvTBvUY",
  "key9": "56joxy7hZjwSGzUE7PX4ib8AHmapUERtd1n12pMtcxg9SJKyAX5FYfVa4h3ijn39roUQC5MGYLJJxscP3bymLJrY",
  "key10": "2WSnW7xCqbNR4z63tJat14iy1xsFcZGFoqUxkCoe3Ssix8R3dcJW5CAcF7WAYWwjnUodCLdnZm5rR9J5xaKv9mbu",
  "key11": "tjCE1fjsEsLTiSWQA8WGKMWRSzngep15HkEAwxPW1YFKYf1eY5c4bt4w3org8zafWKtpgJSJ5FAVpCH7Qw5x8XD",
  "key12": "49Qdwo92uLkYMfSt2CQVeynM6yXLUgvcU4GbsXsPEQV1i4skWn1Gij3unV9yyn64ezfvnkdbqzJ2xqq5GF7oJhUr",
  "key13": "4e9Tx9FYkv9Qzp1RTPh5XxjQhrRP3Y2NTNSynoEyqu6FNrYZyng479rjfFcVomKDV4uh4MRfbyo82quajjbo45DD",
  "key14": "5YXrDua4wym6sM1pfWtnEPeANdN8m82SJHcUnVwqxX6b5kBodrMLHwRbte3fyrFyT4xgKbgpQ2imtVfLCCSnwZef",
  "key15": "3qZwUqzPJuUSkD1FZy85ZqFqg7HiviA9ZQGs5bk2x3P2G3Dwc5A11YguuQT6nEUxVh3wH6gMPqcc5wF2BVMf7eTG",
  "key16": "5SsQKXnUdPnUz11Aqxq1iiXvBi25t245xXq1pfo7w5uCKLfYB8DYMVBHgroogkbaP6XQG2B4f81RaprWZ4jCDXH1",
  "key17": "4Ts5btcHG68yrDvsFfWJcDRWYbeYuRkJCXjbJLSYTL11uEZxwrrazm7kr5XruJA8fiSzAEBZi1A5hVb9wwcKpwXU",
  "key18": "2EhRzdFxS1EwjZpaUrQSD8JKgFWt5J9CnMULf7jAgnSxR9qKziCvV6H1yAB8K8bNGbotYa7DGZpKRWJD7t16itAe",
  "key19": "5xcB4cCjE1x2HCg7fJK8kMmnUKa3prKH6Uq2BmpdpUAXYTJNX5gAKEip7QFuk8snA8YaJCr9pixFVNVtXUtpekx1",
  "key20": "3es6N8TpbE5i1jxxsbyVexJ2YwjEuGsWeg3WNB7YjSmyzrPJAWAKzqf8ddR61dpQWf6E6zBsutZ9VRfiS8vdHqQe",
  "key21": "yhE7HnsjfAkfkt44DYoEmZqHSp3ec1MQhPUMotc3JLDuuQ6owDDt97YugGVUyYBK1aW6a2kZ5gV4phN7PZxo8Br",
  "key22": "3PL9bnNeG65kUgQAJRdjZPdotYiGJqBT8GsAVk4jL2ahskCmzbdwnyVubeXGygdNUiyFgjefRozwmbfvKy7njxcW",
  "key23": "3toW7NAW9TkTwjzFMUUGMQG6vyDtttKaLKXLsA6foBZzfLfmE2NpFfwKV7LJMNQob65yovA48HknPZehfXxSam3r",
  "key24": "5ZyHYfTuWNnDJ3Ln8kgQZzdn3i4zzkCuwjTm8huftG3f8z1rLJrVBQ8AjXmSuXY3oifhW6Dy9Bq2HWB68FRTLw9Y",
  "key25": "48Hx2xBPbwwrY3KVJYgryDYtvzxLFnXyPZfzAPaDQzMLcgwYN9CMgSTAk1rMZvEEFftUJuoAr8zoJAW9zU9YLi6P",
  "key26": "23mU8ywpmrpUyLe1vNRJS2v3rnFc4WxmPK9VJuKLcye6cwr4sgKMRjsX5wMakEZsmQYN1Tj7NbQG58BtxhBYu8ih",
  "key27": "41pAVFg6jtpX9yhvhyJQL74Zbw9SfkwE98xTjEzeZ3zz5KrhZ4WvqtjbGCdV8TD8DeavtSZhqEj2hWtNjR4xjk48",
  "key28": "3bUfZ1YWV63sRKNGyoQUk1XGJ29d4oRdYRUzyDWGHvqTHUvdd6oYEG77DXBfxiHHg78c4vWuav8PNZGzqnp7bATL",
  "key29": "2aeAw5G1dQUSwLmr7wLqDNZv8E7VHWeu6PiSXR6QqwaLgTPzJxKyBCrMtbRx85ycWBjSmN8DJSLAxD9dHa3MvbJZ",
  "key30": "5Xc2WKeRw7PxNV6SnDWGoDxBzFAnJ9TUeAYjX4FaKSxBQmoxyoijfi4mz7cSp9hcUkT6dkTAhmzkm57681Ro2yYh",
  "key31": "2VnRN55FzdULYg9zP2WjKD7iuymHfoNVcTaMoqj1M1VKSKiLbwzBaK5jUm9nDdtLXMT6N6N2dPyBUKaMTjsDTfK9",
  "key32": "3vjHSCPazXqcpbS7vz9kNVPuL7xFmipgaisgom6dsMTvigYHrfC9FzCquFXXwfG3rU3tH3BwPESurr12SBLXukom",
  "key33": "4uTHDPyujCpdw4AwRn6SRPh437k96W8res18BhwcnmWZbTybvaeMWicQcRmyxR6whwTwmBzj8R1K6qaEr6JBqmM7",
  "key34": "4oLSY5MFhWnJYMToRwUYXWSrqpPALapLUmERMXyCbrBhA5sUMGGyVpxuvih3Ac7CnnTqvSzinPLgW1WaZTsCJJZb",
  "key35": "3Pw6Sgx3QG662c9hpyEHGJA92BUe3jPfpj1b1QDvfbadxFdgySxAMTeSQTHNXS4SULXwuZn8VnoD9L4cN8Ud9CQv",
  "key36": "4Mzwvawhrrb6gxwYHYJNVgdNee1eHVVd6Zzhi9oPSADAvik4hSwBNRmQHYaCK3WwKB5GHY17aXvo4h4azSpgzMj9",
  "key37": "28iFZox9uvZ2T4u2kQtB954iMB2ucRpYEdvEdDg6Ua2M7CNkVCF85mRzpJby7G72Lj7ECwJ5KuYz2NhfZj5aMebm",
  "key38": "5jHjjarVY17LT9ZAYjihqk7UAPNoVEt7voUcRLRB7sZPa5oDd7rJHvEiBoMnm2kihNMSfbPDmeCM97CyaoFcHmo"
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
