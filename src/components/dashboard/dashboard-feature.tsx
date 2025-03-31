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
    "LfioUs5DVaMppwUfSvjP7vhvoojvJp18xY7zSL8vQsU7PCd7f2Vz9BiMeHF4N9gLUXYejVCyB1QsUPkWh6KJaRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nzaJp89JHeKFp3bZ83M3VGpb81mzUEdy7Z7ne7xu7MeH1QfMogG8eQJ7B51rJBNyKBHE3Sd7KLDwpMYoMY8x3bU",
  "key1": "UFtSByp6rjBBQJosA2qt7Xv6gPhxtURspEDZ2XKSppahTD6X3UzWem4ZMajrxSXwkANoEbPigbcoSRZLWYiuo82",
  "key2": "2asjPdydn7cu41wjPKhdY1jf5PXJQc4cz8dqqZ29QrJJFNKPhCP3BGLXmKJkhWc3JX1gSY1GbvfLwTLLtEQxfkZs",
  "key3": "54SSd6YKpxZiNqM87KbNxf21iW8GCRwQPf5JMNGsHCQw1SarqPoiPvvWMpexFmDP6DxdhfPzhUG6nQTkRdgj8b2K",
  "key4": "4A9qZPsT7pwqVtn6J9uSMuN6C2wLqq7RLn33hr67qTm62s8bVcW6UCFvDkKCpnvHQPVm5DsPASLYAuvKJfXngw7z",
  "key5": "3bUjCnTJ8m42EaJYtzjWxj4NxRUniRHhEgMENyesVTi5gDbDt6eZP96huue7ViQ2UKXPKxJWeXqnuqC5Xjt7Pdrt",
  "key6": "3At9Wfq961JBuzMkczZKteoEKDB2Zzxk33TmCdWokddhk8S5FsjFkP5vvx3fABp3XHcDyoqSsdthrbhX6rSJCHgx",
  "key7": "5F18y6fQK7R6KzbEDxRDVqyLmSTxZJRELNKX5WEicZSk91qYBAhGcjGjYh6B2r86M1wviJWz9n4YfSUwQNNzFxYC",
  "key8": "52isUSkQaxNVYfzN2xvXTXgjP7aGqjqabCHJ9hmxuxVNK6eL3nK3Cc7Aqi8m3z8uYLrCQeT9NQYFoyBkwma4QCdj",
  "key9": "2ScvArExxHrR73pYTwGSonFHh2Xf2xJrPV4shPyH9fjZi6w8igbJGe7y2tpZGfR6M1K4aDnmXSD4DfDUw3Am1gEz",
  "key10": "3e3v7wbZqV3iJQPeGT3pjLxc6dsjpTr8i1foVHk3r1hbupXpYE4TKp2g3hYSMiFkjP51MVnWkMxQzdfnjdUMNnz3",
  "key11": "3oJSfh7sE6o9LTmRp9tb6xafoggtQezdfWkztcuAPvAWTwkoarUhvR5hnM4qdmVZrbd1Gh2hw9DEndwqsYTgcURD",
  "key12": "4LgQ3iCrJ1Kdj8ZPjzUgbBj42KC4KoTT8nssuASjzxgLQ91L865LQv5HNpzjT1KAjKa6NRZtNKw9LHSuoWi3xSea",
  "key13": "ZTGa654DMFR2ovW5jWLnnWMKsDVvUBSJ6Dvk1ueVQdYDSt3Jon7q826J25b3JPNPEPJ5N3fAusDLLyGMBCEmvVh",
  "key14": "3UKjw1RUVePxszk3yCY1HPDzzuAetq9nie681Lr2yWiUNU8EuR5dVHg46HF3kGfLc75JrqjUPq63AyWqqpDnyxLk",
  "key15": "2oaXHN6apyTANn2M1hbfSu8vBmDGve5wVG1eEco1mVrynwj66ZhqvghzLyhFLvvgniAqHEfwUQ866ZSeisAaKHke",
  "key16": "67kEzK3KYEsaLVi56BYLMKy5iZ7hPMFRMpDTRjMTaBgF25GNH24qWcSRNAgxNqnSYNBLaStYhsF8YEmQ6tkHduCN",
  "key17": "5aD7ZiENDeP5gLyN9EGXtMharuTPKogWYVX22yz6evfaWzxh64P5KAZH8pCyiZadD98JdFtuz6bgfawQ8pUm1SKg",
  "key18": "5R8BPK9X5j7epZ7WwYekeLaAqmN52yV1dfjk7KULG3cBUikTJLaiXgtqwHEfTTLLheyxzUmJMr5pCG1nYjPguQtG",
  "key19": "3t127W1vjtUeFiGr1GpJRVNkP9rauYB2793DMKK7URC7uKYW3QauCtuYeoZJ6PFhEHhVdEtQxsXJvaxTxrCThSe6",
  "key20": "5SpxPpgTcUaMLUn2EC7sj45DwpmGk5qh4vpQ8kBrhD4hUBDB9yL2YaRGnpzbLRUGBqhSvqqsFEUwztkbPExzPXVU",
  "key21": "3ohHxkmZq15m1xivWbYTxaDtPXmzbiesqXGnzGsdvM5nRP13gvZb2TprpkHYYk2KLXQ2Xhh9o9ETvBtHJWw8DqNi",
  "key22": "2PJN5nnPh5r7Gw43ff3vikRvSveKGfburukqutT3yVNMK6zb5cV3bfKjgPkPVCqbGMdo26Y2yDnbhjE1o2LADfUJ",
  "key23": "5qg7ubw66nw9uQXPEavmcyfaHHzs8aNTV9yq3kdi6rkki8jfbEL3SfDVfNWKCFQPu3Ukuw3hdSyVfbpEA2zshgjR",
  "key24": "34eP5t11aDWiegAUsgZgWwD86BhomFTV2JMtBPEzUN5gPhNguH9tbfDHLmABt1GRpN4FRj2ffL4dZABBCGd7wdnA",
  "key25": "4F3oX2ZjPqVowHaQpjLdedV71BDobKGp5xxBBbTCSaU6FzseTnmkeopLUVnefty9Bhhzd8fDmrMVemTobM2v6nqq",
  "key26": "2i9PgUL29D2pdAv1AKvLcFK6avQ9sXhe3XkdnyiGJGW184WMVh4Zq3Vxrjc71oYC7gRvkATfCrf5jjpbg7kTfRAz",
  "key27": "Xporx7iN66DSuKvmsFCmydGEiLMH4LqMFGxUgFgCtELexivGeAPefb6nJDr8F4LCE41ERqGZrFV2vfPwhbEaRAg",
  "key28": "2kVwQXdmoGqU1BgxMurRM2Q7MozAcKZVcgLrNppFuvyqEBNde3Ac8j3CzRK8cdD4GFQbLcq254VotyAk6FWx26Fx",
  "key29": "2WiYonoVsyYorQV8s8U6nivY6nh3AMf4E6U3cZ8oA6RzrPbaS4SPob3mU6JTRFihaprWUX1XJ5BjPEdtpoBbYwYJ",
  "key30": "2KPtWCJgpMez5PMK6aZnmyFpsQL9NwUnRXtiSe8khJPzBBEd2RSCVKv76YtJvSN4KYJH3TUS7xFt4D52UVJx7Gy3",
  "key31": "2fUgN7YyXh96tgq118sjQSof6D8CpCCDLnHxxovtZ1PKtMjQWtTwcXRX8ieTVFTed3nAfpvuA7D3yvViaSEzY3SW",
  "key32": "4AfzzzrrhCnADLPkBRr9XrmgCVQ7qb3SqXdHqkgM4LsJ8uqrVkq82JyFCyXcD5dY69858BhByrUZcR3UagcA8Dch",
  "key33": "5xHDWcgzTCXsERWCu95CHsNictJgytbhQr4qXeNX8Y1Lu9UN3grwG2iD8brKwUXCsKRQaMzwNoa4Y2xN2hj1zgg8",
  "key34": "3G859Pg23FbajM4rUbX7tCSCxqpowcXXuNozXZAEV69qPqpZZbPsuUatHR3RAR1RUmBGNysBSQFE9b1MnTf2Zku6",
  "key35": "ynp4aZ1EGtec2aBGr6eBNANtiWVPBhrxTPEEHRg2ctsNzY7urPHXwKw7xxPvaaoG5uyLLHJAU2D3dT3mtnSAahg",
  "key36": "53XvyLdADpmdAtvhS3Fy59f8HmPvEMJMFYeyUmWjSquMFTEA9ZPL67o9tWRRbYXKEus1hmcUAkW8xoPfJskrAVnZ",
  "key37": "4xhrePWLh2TY56GuxfmNg9rgbTBqaKDiYdw6VAB1USQkTNScpKxBcj226ZgsXwqyZvenRFHhhHyj2h2pjXtNfkui"
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
