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
    "4MjUNR5JCGZUvcuCtDVWbqjHTJvUhjuGninz2jmrZXJwdLpk7tcSVEGMUB9drNkiWW1xZoueKgPrk2bgEBiZVkcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gL9vVrheJnEMA3BYkdufeotFGnWYc7duVhdrYWgavfq9vRazijQd7FTJz1zcnDMpMFL61a7V6nL5WmTnFGn5fNw",
  "key1": "2N9mPx13KF6JVtj6MDcMubymjv7m4rjyw5Ve5owUMfXWxo9qriJGw8UuwruVjREEAMqrpnCJSa1JFHAAqdGCWp5a",
  "key2": "3vDe6SfMZd7DWtPZTiwke3Rkj5X3YLsExqByJps3kxrpNZKY6q8rRZCe4BhQheF9PDZNdUH4EhMqr8WBjKxBTSsG",
  "key3": "4pjb4PVX4b9esS7R7UTZj75UzLuxxt2eRJmPLR11AA7Vc6jhtixL8KhCUVX1ddq52cUuSxHW6mS6aepKSnDbypyM",
  "key4": "51u1Ln6FZJZme5CDuXRzs9VjUtH5R4eLPR4926wB7o1ZGyqxTDshcTLfNRkyj186Qgw89CcTr16Y97b2wWzxSkE7",
  "key5": "51ckrLUugjRFV9WAt29pQqAg6V78MqUKrzytv3rwWkHjQJdmG2qS5xSaP8iZfQtsk7YGy6knB4LeZKW1dnAa812c",
  "key6": "NiQwMafN8MhWew5ZWL6izq7RxuwKfdcm7dHUueyS58Ni4dLo6VAjzVj3mtHdFjkns4sJycwXC7RRz31Ly1wvefL",
  "key7": "3R8x3GvPw3bDDwx4kFaindd3Wxwgy6aojARFfKHkjScyy4wSpiMbjQwbHxfnkc1bUnLkwRiYBf3WrfQNPatN1STb",
  "key8": "4hrSMRVoUSWkMrxJma2Jpe6WumHvqxKQbBbzcpPTqURue7UxN6ZM5ox1JSgmppBsPTauHUBDeDJr4qz96SHoFyBd",
  "key9": "3YtULTyLPSvgP9BAZeiXcrd6aoDvbzQUgETVM7NKeTLwtTw2j7fxcnF81LjLbxKeS19mLno4D3BUW2vQ9QTtFakk",
  "key10": "2isAtXfcPFvdEvnvz6y4rvkmVHN4CxWgZm6gjp3ahEbqEmi746U4mEDYtmmXWazjSc9f6Znq7yQpmCuLMVRZDQFZ",
  "key11": "36SvjDD7XUdyGNNt7kGDtfuGBHghqka4KSvGKQfsAj3YcNM6967phHLRK1fVNDUFiSFTtjmj7D15fRQfPtxodk94",
  "key12": "31YDD5VXiRg3p6ez31uhgcVSU2A6gG33FDbatpXkutEGt9QSa8NrqH8UB2pmvpoZUyhCr7Y5ZHQeWS1Wm3LSaThx",
  "key13": "5fcg653wUC8yTAPvo22KJkEEARZZT4n9GKcMtN6emv5VRLjp3rn8scptNv3ChbwwRiihBE4LmTL3ocot92w9nzu4",
  "key14": "fzXg9jEkLZDu4zTgUM5GMiPBbEUT9pwdU1TST2PCntUbUQ8UqWRTyV3faEQksk1gxDhdaAUwpVWqfDu1iDzR4fW",
  "key15": "ZWSybQUB624omtKsh6GLCDtvREEztC2yUoxWsSxZXvfx9qvxGCdo4EGTpZsGFyXvM4qKVo5rWfPfFj9qympsREv",
  "key16": "4vwB9tH2mJEcmWS2skfCagxBNGVNQMdTuYFLKmMn6yT8U392CMViTYSG98nwfa2e9bVCwWjddeHPYASNFoxavww",
  "key17": "4CnRLBaUaxhos4mxRzsQJuY3v1vqicXU8SZ7dS2TnExXjCHZ7UH5MPfMji1XAAfVBZ5tDdvPGKyTJXEbot9o3p1y",
  "key18": "29hHCDy5CrSDJHpYpEZwZGN8u7wi9wDqGarL41UQqeR8TBf3PQoAenmCgJu4ZvoSy8aq8XCRXdexCX5kC9ALwBwN",
  "key19": "594zt7cAG8a5huKobg2DJSYPSg6cLooHMuWfop6Z9XLDdne24nDgF2bEeazFyQawnzjmZbaPjum28PTqMeknnq4h",
  "key20": "JVpmvgzNZJdPZery4xs39s8xjKzyKfEE6xcFhKXAuktHNySC6rVDCHmcHxopEVvZaDRiKpjBh1fr9hKQxJ1rxbP",
  "key21": "5Pdn6S5hvM7t41StEfXVbMYq67NZK2zHLQq2bAK2FvLuUL5onBWYdQidedXbMypsJFtySgvVzYiNKeBsrxy6R7hv",
  "key22": "3a1vWb2iM7qmLEGpbz3cgsyB5EFa4YZCg59S36mmHwynj7iQqGAWn1XtdWActzKRUs5Lf93ddTMNF84NMzMhvJQM",
  "key23": "5BPJ3ptUqQXWHtEdtV7rZMetahz8SsETBKHQW16GbF3nHXjm1SomdmZa3ZReYRzaPcAsqXfSjAt3Qt3hohLSVDEQ",
  "key24": "5fegpjPTNjma97MrgXNwdeaako169CEs89Nv63DdadbZ6ud6gZysXQPGAdTkfP3w41HFnP9Ytw7QsaZwBkejWVRZ",
  "key25": "38Z9vsVYfTcLJ9vAKU7HrxsA3BEYDBuZfEC4q3FFTZVr5Eo1RCbASmTapMQpm2ns7k4X3dj51xnpVACyUGQzsre8",
  "key26": "4mmzGVcdkHGNvxyxHLdr63qf8ECGjJoBf3L4ZpsBr3H3hpE8q25vtEvYZaQg4NnwutDxiHiWSi4t6PEffJdgXgP",
  "key27": "vSPjsMxsgzQMSDBTfpC9mZRQdsHBNCi37sHk7J4ZYaMhvd1kNveVMab813xEG8adJuF3CVwms87R99vHo6WdSER",
  "key28": "uKge9iukNcQ2XzHiTNp4twKjy9ntxmkTWsHLnNUz41TCbtUF97HUMdXtg8XDH1m43bo4nQ4PG3tBgQVPrSqNA4F",
  "key29": "F1xKXsFKMNB6kyGc9e9479dBpPthGSabPJ8ZLUApXdFKsMYxYEBzptyz4mcQ46LTNj3XjyJdFSi42dkguupA3N5",
  "key30": "3VoyWomUZS4MXMYgKyesdusSQkNDcVEyAvqXBv7Y2edr7mNSL8SJHy3Hid8iUUzSQxKKuEoMhEtqNeUaMdskzz9N",
  "key31": "4STTTVxp6iRU4Ci1LXbj2gm6VqFCTdQNqchkSKbuejbTfvPs3jopY7wqb9NP2PkhHSwGkjkr9EyES8P33qdHpr4h",
  "key32": "347q4CryDNPm3v8djV8KRGrk4VVD7iJDPzT45W6p5qZbtjGvozEkFR9WYNzKV4b4GYudvvFKEPfrzcWQoqmNs4dQ",
  "key33": "28D1mbQDAkLUGMug8CD2Jn2ueLYEj2qtrKA4e5K4q3ySTioDiG93mRBNTGdsXETi2DPRD5Vs7WMJTqk72nLqh2Wa",
  "key34": "2nzVhfLkHpD3E8Ni8bXtbY3cp8JbHxLzd7LpNXCtatP8hfMaA1SammJsxwektR31hyVMwwLc1Bwg3x3DwjnWCZ23",
  "key35": "3dkrYcbdUMRTMBwrZMFU7qfYfbvXJERMS8ZK8mzHE2LnBab4saWNFxthvcn1CBK2gzXv4B16GCHKU8JjpLJNkqVT",
  "key36": "356qgzvbfXgqfmz4Atf6KPU79bZdUgvN8Fuhk7DH9NtnYMGUCDaQbxtvkKKEz55FQeRZnpiCRbCCNzVRB4ptivzR",
  "key37": "58sPbjrX6jyrYB953FtL6mAZyxakcwN9q5q4g3wLJi8kRjMEbTX7EnXKF8A7mcZWvQgKaYcFZodMzXBgkqje6ByC",
  "key38": "2tHyP77JGqbCYhejZARGwCKE5siVZQMfD2sJ9zJzDfep5Zd6AmQJp7srLKbW8qvRLgQyQe3yGz7E5zaFQAgZRYYp",
  "key39": "45DFiaovyTfLUpsTxESj4sdEzeSP9UqJb5TLntuQynAwF9qEiwAXkainrep5hEfzXd39ajjZPsRXkTihhEce4XYJ"
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
