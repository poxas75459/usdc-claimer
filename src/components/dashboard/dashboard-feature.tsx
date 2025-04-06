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
    "54YEm1wGCnv6L7LTZR6i523DnoyMzqDUdvAe3zLMyMUdrnvZ7w2QC8Rub2e1frQiqR2wh5rhHC8G7pY6PacnpGZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39S5EXsueuRpp7ebwbvWYk2PHRzM2ZW91xvkGMhhVLL8FAeQLq9K36DfcpVetEdi5sBBK7HGhRoG8EGXKGKaictd",
  "key1": "5ntMvwbhG1zjzj4Y8KEciqp4YBRMSTHxWZwhvc3yN5APwRCtrKCef2hW3i8Y8DEZg5zfWiFW7k82xJWG3PNCoMrd",
  "key2": "4v1XRe7G9FpsuzhyHmKfE5yXZ6Rb6DRJEJWyQX16wjMHvHgGaCNwTyNKfqKSVGmoniYmKKKbsDN4UMeUirc8gW8c",
  "key3": "6xvugsgvJbsXM3jesM8DD4eb2EuqYTbEWurLJDDJNrFnJrKnWnM6hL47Z5guupNs3veS8ExTjSJAZdh8BiCQrgE",
  "key4": "3NTGKW7Kxamd9RxwxUmwAwNCywfokZMbVTFYUB3UAoDcyX1kMFuKmYS5KqGJP9FDacUbFQeXwigBRTEMYZUCJGqA",
  "key5": "5tgmtWeapeqEMWTtX5FEaNANXBmV3EKeZ6pAxSBAWWo89bHPoSdzesxxczcsukJZmgy3aNU15zp4vBMPjEHuefVL",
  "key6": "4PWyUpL1e1C8gRKoPvWEoqrYFU7mR1eHWsMGanTy41wvWtbijCgQVkd5ReUqC3vm4oz1KXbVWrYkoTJWBMWpVBPZ",
  "key7": "1xUX7Vgc5GKSrfW3H7v4bMWS6cRJCCnHdZJTQkKV1CAesNXPxkoxChiZtHMi8Wy6hgzheB4c7ZJ2KiWrdEqjTg2",
  "key8": "JJYThVKtTpE18hmy5Qie6NTquAKsCLUKrJBbpwhSEVidAZSTZDKoaDoaPDG1hv83JNgf3F7o6R4AtD1QWCHT894",
  "key9": "DEF2cpEuegs2t18ZLmQXTsCTkvp1SHXRPmKfEkJGQGbourFoXMGkbHtimcF7AEa4NMFRMJtEUFSsvjF7adwDnWe",
  "key10": "2ZT8HqBad8rFnxN2bRfW18D67HPKYrtPgEcdRa9DR1CLvyWYzt3KrRwEtZtpp1TNRcncPjrx1gHpKjDmAVJBvwJ6",
  "key11": "3KmE2gkjNMDnKWmznviWYzDu9sAcF78bXYda6HvPJweqn8Gifp19zg2KkDGCrFuD2TPGEbkoJqkCo1aX7KZu4SUt",
  "key12": "5H3q2rJgLQLQifZEw5dYLcyGHsfErmvtv6mmmncjb3jJf1idgjbgSviBKfiaf8FAuoCC5kUU2kBbyV9afE6nKyhH",
  "key13": "3Fsj6Eqf6rbX9aEFRn55UD25SXRjM6Ze8jCw6fSmu4JtTmXKZsDkdLXJszcuHXZakV8e85NdHUtp4kWHvQNBBQHg",
  "key14": "2DyDA7AgwkfzpiUKTnoH4aN8Yj2Z9aRQebjQ2r6QxV3gkDAHtQJcy3XABpG3K4fjdxofwhJrwyYZ2YceYMMhXu2y",
  "key15": "G8KDU6nDXmFYnyGJ9xbM7tgtJSBisd9sSH7mtrnLB3EKy1GsazuZfJDf8yZRE2xkEwTKTNppLRcPz2HX4h54VTf",
  "key16": "3pTx5XWYSMnBxjXAvhKa5PZBY83faSxsFEVLVrdcZhvnSDtJYqqiRczxzB6n2bQxPkSTo6aZXuMfoo6bpkH9PcL2",
  "key17": "rvwBfV9qTr1pYKjwwspxMM6vLRLoioLdBAAmPMHf3tp4ZDjaNgeqR7vRDFYTZLKYv1fzDLVEgaoUbQht8eWeMLg",
  "key18": "4up8QPVEXPVYCczw8Yft6k1qfK6UqJ8B76nEmhkuMn6iWArbGW82bAd88QrZUVhFELNATJGEd5AXCyDZTGRgi7M2",
  "key19": "284BExC28gNkatGUyCv7X3RNMvDWAa9knxnAGKKmTadKNmhiBtGB2LXqTT2yShHQ4DPXqa4cf7L18HNyrcxbrcnv",
  "key20": "3mhjt7fsJjvdp1z6gnuuzLQ88atVE3wdqSLH3xL8qH7WkSCrwJNkEUb8ni6x9GXeZKLHHYiBn7GnuWx6bJbGqVLo",
  "key21": "eZMkt7TCYaFkNgjBuyTYJ7tTpd2YjBTQgNpnhN6Se6gcFcmrenbvnBGBb93muqi9vD7tDoH4xswEHJSaV3KWtRY",
  "key22": "4pYH8jUL4PnsjqmhUTpCosVYiFq2Fij26AXmytnKSVwSsXjN3xVuk51eJsbbUDg3gKpK3mpqqXRT5ymNpyRfdztz",
  "key23": "5tKstKrS7BDrWsKD6Rd197Tq3A4ADLnT4m2EbTrJjv71SFwpfms7LCKS1WRZ8Z1hCwR3AyW5UQg4KKDDkuH4wdMF",
  "key24": "5qkgm5DKp9XGJErtcbJcSHTxaigvXzZmjvg2eiVbBXTbxJPou2CFXPvpeksTNvakJP46J8MTAddXoETe4bZ7c6U6",
  "key25": "3rNyA43xtm1H8xfj9rVQEXYGAQ5jtUXiZ568VeK7y4gLwM5zYcW8EhFJpuo8yhULPEERzEagjkiAuJiXUSLdpjcL",
  "key26": "SgSJMui1QkMDjZDZsHFopyoyqgpNg1gKmMprgtCX43tAJkBoMX6ZVNgkEvgcUNfpPRfeZE5w7gxQ6WQLZ2yWjaf",
  "key27": "4tZWh1FneY9hsThLi9C2HqbgVuo8chB4ZgzTC3bemLHiv1YqZBxS9npeJE4o9FRBxsMyBSpXZHDWn6nU2cHaHSX2",
  "key28": "Qu5Rfd3jx58Rk9FiCv3urWZWTBKPE16vhKbFwZ3tb4kxwAc7H6fW4VjeYHMGRskoSZBdsZis8WPvvAmNuBGJAZU",
  "key29": "2CEhFL9dyFMFryjc65Xu7waQ3pGuk1eyAsn2VcHJgeJY1iK7U17RkP5g52wQVVceZw7h6m2o2ZGVa4n4DL1ZT4CZ",
  "key30": "4rFLBgVjoGTbocCYHbn93AoRdP81nuKN3kMcsgVExca1yriYRANtN7GPGwrNpwJ6WtkF3za2aJRRy3iKC8XQHKGa",
  "key31": "5HwtkqzGEJVZd6W6u91BJ7QHGqn3xD5r4v8XQP6PqESa1WGEUZUcnPg3mqZNgiynkwp9pjooCzfq45VjJfrqpGir",
  "key32": "2FYz5mz13DeqR9oEFskUkpK1nwS94JwimcpmgNHbByFbtgqR518EKg5aefE5JVRC3gMyGNb3cYJFXtJNsH2jPnT3",
  "key33": "67VadcfnABNe7KGbY6ysKs58Kk24oxPxfEGShqAV8sxdTLXrbYP16o4z59JahpJwmcGnxERTKBss52cQVScbabX4",
  "key34": "YCRxUdiBTsVQjuaUDUSEYD9KVngBg1P93TRGd8yB4Bc6hS8zd7GAepLG2ck4yUAQbN5ynMoQ78vun34VyM1EtnQ",
  "key35": "2qwwBLqo9eNjUS7m9Dn8DN3Yy8hVgwRxwv3u1dWFVPbUHv9HXiA252e1qajJwhk3pjhQvPzW7kqYJcfy97omZTas",
  "key36": "2JTrPcDmDcfvoSFH7iwsmShzchPtymyTSrfMhhqJoCgMGMEjj9qbun1S9X8apeUF3JtpoFRP5B6WBcDKq4rfuzLq",
  "key37": "3pb4AtdxWp1fi6Kf9kX6sm1k94zpedh4vFTswLzTwCPTazxBY8QL4v8q625H3GmuBsdb86HCsdmas3eMo7NNTsKZ",
  "key38": "pXR8hvmxnvaUHmjTJid9aohFJDNp1jZX5DATCgRoYbis9sFt9ENtnyn3hQwWfcZm6YQLU8WJkxHKS8CQUPmpCjP"
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
