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
    "2VMQDpWJnd6PabtrEpaPKsiPodQG9FWr8mnDwZekVfEb3hHGjyWrg3HQYAr2cSRdoXcqU6J1xgwMD5BQibAuiRoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1JMDjcdbzBHJkiSsmVB26sFckPKWDDZvzWS9zKJRsXfCCsmQ4VFWZx6cyTjxDY8V1PGqctNqWZEVMPvZDSJ1rE",
  "key1": "pVqBy2Eb7kpiwcttRXiBBQjnuTd2zDe61LaxXHknVM25Qwv4T83tj581XB2ZmLYWULkwqtj4r2rtm67wxHcmgoH",
  "key2": "4mX5bpHpgxE8CrBe9iLWbUfgrx4i7HEGdgEsKGBdDEQGqDWGnRw15jNUdcEAq4cArUpXq8FSgNzLKZGJ6jiTcxUv",
  "key3": "24prMK6V5uSPsPrF6m6YHqAc5x5nStDxPExtdDR7HPhUJJm7zLdRFRi3sy8Nt1oHSd2Z3UM8EixcvXUaFqDBQoMV",
  "key4": "5M4PjHt6uiLbGe31t3dat4pkFWrfA3ANgwPpraS1XLHgYQFgAHvhSFMmLSLxgcekv4EhwRUPcinVXjZT1BY7897Z",
  "key5": "5KkJKJyyJ8KVTdrrsawuNhm8JHrvF6sc1gECQYDKkyNuk4D8nNXT9dpikMxxQhA5gSdLLXdbbLHC7NJG1euvNcYH",
  "key6": "3xjtyBtcPpNSkGYWU5AhqVm1czQtBignZdZdWrCMQUMFrYEFS33Z4UwQTDygCLSB2pE3j5VP7ar8EuefkVMyYax4",
  "key7": "3j1ymVaUTJh9ix4cgttYu7AKkqaJoAmLP7axtVBT5aUbmp5ZxcYdQKePA1C1iatY4y92Dgr4cVct1rbi49raNW1Y",
  "key8": "2gcQDh3PVHZrrrqXSvGmLzyd95gWLRd1M93rdPxzktV6DAm2hPhTpQyFScqn5VRTTv4RtTpAWbHigKhHGd49ESXT",
  "key9": "3tz7sp9DYp19asHASJV3mBSJxdsGEVvRohyk8D6fWYZtMNLdHTtKxGCATMkGFyYXVERpukMTWLdrKBqowRjPzPdf",
  "key10": "4CnGyUEKs9MkXQn45q8i29CXvBPTW2gx4QzGKbEPgcdXWgoVirEVog63N4XAUBJ2eRqKa3h6LFLSyvYE34in4T23",
  "key11": "2Baq9HeX9Dm1HWSqeCeFYaBc2xGW6A9Gtq7ockgh8wrjrGQ4bRXV2hhKRG13xxcyUmwdKwFZrAVuqo7c8QZtmvvs",
  "key12": "dV4jfqeU5krLbXjBU5NvNhRN44ACw4FmVe8cM67Z3T7XYWsXbUdJV8KX7rBdGucQKbw8GyWzJLjb5SSQN8DGEyC",
  "key13": "5t8doXZVBNQdyUrY3Ch8RAUrUTZMjTAfeEBUznYDwhN6u7f2QGcAdXhZJCLcBZm9iGxAPVPLJwGiku7nDLtvSngY",
  "key14": "hebLihzcBwqhCAtECB75K99K4XNSBmCG3gnUkugKhPBwZqkRdG5cRuYhd7FGCqnGt4pc671NWSTE5ovTSJmQV9m",
  "key15": "3p5BCq1bGLufJ9RjtHYudBy9FqkgisgVoZWPBE8dgDkqzChqWVVTm3u64kskkXmL57Z4xCJFJDgH7HC2KehbT7Cq",
  "key16": "4DPzvBVQPwo123uWTeCNsDPmAMd9Z4P4NHYVQqBMEXv1iQ1H2ciQBwjPnta5DyW4Y3Z6DNhi4pKRM8P7o733B5GU",
  "key17": "5jw9mndLxg7nqqaYQiA2yz9mS5eAdfeBkoy6PrJWDPjixnpbaBu6ATCm4nVkiXNGREs4QouA5ABzPA2zyf2746w6",
  "key18": "5SfYWXsNhG5z6TELAdZbFbxDVPZZ6rzPpyAd63oiR7Q8cjXGmd4vLbgvtEtJJjAUVf481NF9X2JDTbhtdSCFsPjh",
  "key19": "3768ZBxsUtwjJf5JFH6f2JhgF7oVr8TTAaQyAbx4fHrFEzcn8N39WhgHkshxrvnSrpnxU6aRYH2Z7o8uQWWUknUL",
  "key20": "yvPpUPstuW39zQzKGVYAbBHYad66DcgsNkmNSk3xs4foLxiZWaxJXy3LSZQ9tZYGPgq8AHtsmJT4rtRKoUrmA6q",
  "key21": "4e8kEbTXhRCgGB9ThWNftge7LQNRnEgFELGrDKXfK6ggzJfkdZ16bTtguj3SinFiizb9xZuhCSChkSLxEvSNeRmg",
  "key22": "2Rqr5ML68RY8FC1J6bN5DpS26BUNPBFsykGZkZQaA75bFMmzWfzHT4PomGQpdkFKjY8UmpvbosMn65RNjdxK6uYN",
  "key23": "5WjGkAKimYLjgAqyG97rNaGhMXesTcwkJu5T1GzTa8Lcyg11iDQXGR2RvxZerryfW48DmrAmMAanqLv8Dmps4D31",
  "key24": "3X47EmnAMm4vMQtFF8XWB1hoBTDASkC8SsEuc9qViXuPvMkFi8eU7znKYPeiSv1H7wMQM4svRnLxBXzZKZGgjgKB",
  "key25": "2hQNumsBhDeqDT3bShPJEgaQ6xnL2fMmZNfkZErs4zPggsdH5D63sRhBL2e7UsiNf8aAzi9G2kLHcs7MT6bSLzua",
  "key26": "3v8BfU41frv4obMBuLk66z5MPyVXp4DmDJ5kHeJkZqq7dNWURPf4sDfLLaUXmLzyj3KG1sPpyiQxETdTJgG558QX",
  "key27": "3YM4c91zpLxitudD3SGGpHEGmtSAARsLou52M6Mn5sic4NE4ixwSi6z5fd8RQK9nNbVfjgmKjpdWyNXjTLYBbmiw",
  "key28": "5R4aZUeSbzcs17ZvQH2uzxQpg8SNXLbvxBc3RvF9nUTxWwqZrh88B1NbzuhAvjWgehBL4HA7nGNcscsG5k747yez",
  "key29": "3E1Um9MXFFGUfLHAinxHPgzdNGuusaaLCESJrTPHApt7wVekNTSZqxcCHs2j4omwUgbpzymcWSDVhZKEC4TgPv7F",
  "key30": "5xPKVnnm1Q1AZ5domYgSfwFPTaSTu1JwQu1jcZiy4NYLqEcSZE5WPoiS1s4Dg9PdeAicuh4xWSfWcVSGyTvPZQiU",
  "key31": "5Df5ZN4M9Lbx5833NFKzaML1oL4y5djP8Az9hQPNSHMAhrVtLpzZuoWR9pKnKGthFwHKqGz2UUr64RNovXnLdna9",
  "key32": "q4AfzobT9inHEnvUDgMDx82sjvoVnmXVpbb4VaK3rSHxGZrcNKFWJ7ZVw6rQwecwQ18e2DeApShg4wx3Dmy2zJQ",
  "key33": "64Vn3KFu7dcHwrBxAoVTjfQ75CitGXgmqBTHptUQXdnFdqE3cGzZbeaEC6WcaSWjS24dD81Nu4twFTaTkM8Bg8V1"
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
