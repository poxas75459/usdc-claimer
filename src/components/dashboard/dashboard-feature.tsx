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
    "iHtTW769iJRXXD8b2hkoVVZRwTW6qSzFjQPdB4wV7RoY2mZW7hf1cQJXRnzYaLkdwfJ5gW4HvxrYEr74tGJ9fTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JsnyyUZZFbsPXAWYrBxTrMZUGPtiQuAMjZemmgUc3sTJBLsjsUVqF3EwBwwFRSKsFYABfB59MbqBGZJYyNALYme",
  "key1": "3SiziJBAn3MuifYmEvFWycCxMDM1o5iZFW2rary2rUQ8Py1QJxqW3gtvg7tSRMYburyMrgjKXTsLfgN5dfMRVvbn",
  "key2": "pqXHJMHCibvaeMEcqceTBWM4cLj5mw2iNaS7PaCRjkbgFs49xVn5XDobzPps7vwLpowDfYBmZFZSMn19pQ7tZdV",
  "key3": "5Gwgu3BWRoehS1CttFTFVNo7B9aTsvv5vJ1i4xa1FM2XjJgDVKMZJGDKC58p9JD9RxMcgt6jhM97hsXewX7e3n9Q",
  "key4": "3B9SyLwSpKT1KWi9xkv2XZdxPGMwSSB7oMog5kTmGtjGygCnqq4MPgg2eYj2SLGFmek1dKuiJNyaQVCohEjFE9te",
  "key5": "33WvJXKpnQR71rJeSxT2NTVW9cqLDthekj2oG6dfgDZ5nD8PZjk6E8nrGYfp37dHoTz93fo549hSuqBzkjj9MaEo",
  "key6": "5N3L2oiB5QMTFGUwmYeoMCFw5bHgW4XQz6DkMP1jF2FDNEHKqSXRZme3yfx59CsyUukxFEhTjTbAdByq9rRfZ9Jh",
  "key7": "5AEynyxLi19ejSr6Q55TathcjJx4MME8VxCbqMNEEayZjURBLe6bCtVggjmp3sHm2tMY8Umw1gu55VozNJ82pwCR",
  "key8": "5q11drr9saQgigMafUsy4869nKCyvYfb1KJdMkW9o3nPwXaxrN2zNrno1fwVgaQgTKf7StYxAd2r38JjUxuNgv3r",
  "key9": "2BY5muLq4KQizTUFfdzaZc4fWfpKPCVs54EsF5Y87ZNGXLj671oxmCxgmU9KfqV1XcWbMz3pqph4vqWF6PaGPFsw",
  "key10": "2pzCKajU78fUvyNxRQKk1MzZ2QE6rc9ULmqERGS7pFLnXJZ8sqcvWayzmNcYLGZnbkDytb51NPmkrW1m6nd5zvA3",
  "key11": "QinoESpdXpr54tNKyjbgADeHrn1zMCTwS2WYL8G9BNU9duVZbfeyuuyyqFQ6cZePctAbSPwsXnzp5pKC8VvY5ZE",
  "key12": "2RvZycsJDiMmjptuEUBEzSAez8nFXD6BofjvhWgSqcQYGytEU5WwNhsLiqcrvVje2qfvNEi2c8DoMA7eKbaNP6Zt",
  "key13": "u9QM9ECX53YH8gxUZ6p4WN7HJQhvURPJryjFM7xhRP3Gg71RmJod4Dt7cy4wupz6FaXnrtevqCvzfER7jr8hMdF",
  "key14": "3gWXY4VRfzoya4yv3VozXFk5AenhMrfC9tUQyiB28DEBAqfXQ91sQSTVzJBHc6U4sdzKGky1ZSWNW26dZMg6EsQH",
  "key15": "4vSZJcDzdj25AfJUbEN2gzCsmpCiayMmbQ77Z8qkp5QQTT8VyB6vG45Kvcw2vrXtemHwuvP11kPFyyS8t52yxhbQ",
  "key16": "49Qdh7mWLAT7DGDLafJVfkfQynMgQaH6VRJ4mcSeGd6QQiQpJLnA8pN3spALTQv9YdGKjmPsZsQatmr7U12FGGyV",
  "key17": "4Xy8uTB6GG8MU99cUf5MRorqg526PZTTkuMaodhyvQtknHcY5TX2Hi6GqyyBa7ToGWKPVzfwoiXYGUsaNroihxRh",
  "key18": "4Q2FKq39SsCb4fda8PcYoRJ6r1HmD4vLy1Fu1G2JHo3ydMRQSgrdtiXRLA17ra7pJK5UYurmH3Toh5y6c5CgsbN3",
  "key19": "4LrnWDe4eVuGVvzNFngfCbmcHZDoG5XLymCUEkjKxNTRswqGqma3MUb5Y26o9dKuvwiRpRVhWqjJCxXoo5kSZ4FL",
  "key20": "5BZqifBk7Yxecdpdw5RGSBkRCrZEjiQZadLynDZh9CN5oAveCL8GR3U2sz51M2LwtbfNRWUtfXGLPLT7nyas4WLQ",
  "key21": "VxwkNNX4KGky34TQ4riSHWsT5Krz3XRzJE1AAoVCMy8xi3iqkbCue1JMVi8kBrTtTQpfEtNkLyADvTKJmjUFQpS",
  "key22": "4DLuv81Mfuakqx5mv6WuZLU6LWPwGPBgCZoAtjyeW2aL6QcNWJAWLj15VqwaAVBzSK6kWNGxBunKm44UsC62J9Kh",
  "key23": "2qw2Sh6XwMWH6tmfXCk3vdrBj59Hh9T4thi9gvi6YADfiHQWo9g4Ukku3ZhT5oehbAsrKNnn6aZy1Pjz4nACLmiH",
  "key24": "rfHkfCZZoLuMG9nxDSm8MacTE88yhbKtDeaJoGGSR8DdcRNDLVQEqAkGF2kiZ4U6WD7McsDVZaq4iPjaU9HBLqm",
  "key25": "5VzZ2oWKJuLUF2eK3sYMpW8x414ytz7AuY4nfzW8CD79EVuj5WJ6wiWk8qpibd2zSSRZ493YMKNVmEg75u2RYHEh",
  "key26": "2wFiwNY9A27S13h6sGyxitjHbUY2GGX8814ctnRCJqSeYnjmP2ZQM4a6sxvvBpsgq4AQsYPGkonufiLvBMoAbk3n",
  "key27": "WhTDEjucsDL5W7jJPY8QGTazgLLe4jRJgQAjADhiEuyj9LZro6dbBkr17Q1jngcZ27WZiuvNoHrYKnNtbdTw2ek",
  "key28": "2EMZnJVKr333fcRAWD8cJEhcxbtqizaoCdbNczTppx8aNEXzWXHNcZ1fDsiEo5WpQatwMyqbTWMcLSrpisTQYpoq",
  "key29": "4hnWfoPDzjFL2jG6jobEFLPy77onJi1vEf3K774DX1HtXHNwgebGrY7nytGqUvmYpbby7P96rBQt1AYUoW5PfPoS",
  "key30": "kayYAdjpXavKAbauh1jLMontfr4EPGBY8mZNc8arfpPePaKSBmU653ozjHNtE345NRFRhDBf6HHnu3rjAhbsZ9j",
  "key31": "4g1CsNYZRExFhYFrzjjKpMz8CbMgNnGjdzGHzDHbA9WFJDGAyqogux1XQEWuNXMwTiDpxxVaipXhx8BaYZkkAvVf"
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
