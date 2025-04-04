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
    "3PgrRqC8giGj1VVQkVrdRUCcueJCoMDumwzLUBtyLBwypiqq5beeuAaJ4WeZnNKkNZckmpi3M9c5A6FC8exuqQZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nBJCKL8XeC3Lv4ez6fCt9pni97vjFfYVYN8NkhpQsKuZr6auSykicXnKZtxiBGFkbht222SCny5tZRtBUTWhm5c",
  "key1": "3tASmyPvv2UKryQU3rscSS8dV4PXq359qXoFJbBsXXFaCJJmjjmjERb6CyVzEY2thxyHMxL44Z1gbjyfC1JxDU2P",
  "key2": "3tT5TXbA9xqk5gJo8o26kekZMWkAzA3iLvkhneQTCMrHKNZqmXzYiFxZapNQMHcKW5Pyrzesq8sCkXDaEK1W6dkx",
  "key3": "cvknyqZv5nknoa6p4CkCxoGb8iwvmCPKy4qGGCRRnoyfHYcVrf6piuZg8bT7FEF7j3iq4vu9dDsmzWLAbYnRUFP",
  "key4": "3Fg9BotndJdM77CRWvXCCkhKmGhj1JTXbrdNQ3Fwefx1y9ymkj5fz49BppZXJ85Poyu1U29CNuYkSwcdnvuogWU8",
  "key5": "5hhJENPta89ciXXpP9GNFiMMpxKVgTNSMid7ZoKdapmUc4rSEzRMM4P2ThKrkrFw5KfSo36CoyzumPeboWkn79k5",
  "key6": "kMqmjbefByMJZKrNJ4NNfFehFUF9PZ9EQ4fhutZJacvSF3z7rodqQArvopvKv63coaRr4QLmYFePjPGPkuWyeQU",
  "key7": "2xXWDDWqXbM4YrLUiHKMUWTrCj5HPLwDNgrmDeBiKU6kG5YPamkjpngnNVVBfDe16tenM9xVNthqVjCnbXa3hpiu",
  "key8": "4t2UgvV68ToTTfnnCYa4P44HwJXQFwTDpkEHCW9triEgZ6oq6TfoU9yXaRNNXBU43He1gFiTigT4ckXSy8jcRdPP",
  "key9": "3FSAhADwVmBVRdC92KFBEgWz5Ryd8Gmm8Uc6kvrQf4aMdrauuKczTYJukgp74VVDQn9sotxXwHqrQQTRe746vJms",
  "key10": "3gg68gWst2MkNn2KAM5iAJqaoXDKvHSZdZvEPC6jNv2ypoer2dCoZ6HmJ9Dx6NLHbMCUw5FqaR5zRsh2cExxb1wm",
  "key11": "4uNjTtptxVh1v5P5zbuicatvmfc7wuWhgrUuM2h6XQ5vtKX9DhTe7v8Lpk3ddJKsTnHzgZJWfRmuJFkgVF342baY",
  "key12": "2bVTqQnZQWJctbXgdxosqmGUuaSvxpkVjEb6KHswbukV9otz6KAZFBam1WZhcx76gC5riXZEqx57W2CUo6JJAdYH",
  "key13": "5cM8kt6U78hjge1g64PjmXtduaQRkVv92RiUb6Pq6fEaUdHcypEisrcWPXybTbd7FhcDEMHSZdzwAewT9SQ1btdr",
  "key14": "537x3Mx5h7cjKWH9CdxSfr6GFCio8zAX8RrDfbHBcRuKQVufUw31FWweRXkvEHpRkr96GHTwmn4fkg1eLSVRA1Kv",
  "key15": "bKcWG3scsE93vrYFd7mpUTRM4NakuQsgFPQFcUxmPxaV4Hu2n3k5AkdNDPXdXsXmB7BRkR8xZre1kwhV1YMW6zo",
  "key16": "2SQ5HRCi7JkM3kuMW94PPRML1XLThG4HZprN8CZb3hmAdUmctKEWbhMRia4N6kyNNFDeFaXmnGmMZNge5XkfYzTL",
  "key17": "2FDrToAHxWA6HT3p3i5LtaYRPXqtDdhhRBgLCDrZbzn4dYujA4KZJBQE92b1z7NHHetS2cd1i2VqFSGZkNPaiSBJ",
  "key18": "cV2UELjYU3sNoXqtJyoLMae4yb6kdfAEzMRo6DKGSo87Ei7YUHznwPCJqk7GdG22tfeUg9mpXv4hsgy4XBR5mCu",
  "key19": "2DDY5UsarqEUHi2FU1JdUEwHrRxvTsQQt34Jvu1yxoLTD2YmPgf3LXfRESiZTQfeBFLgwE8Eo1sGAGrqhHdajHNR",
  "key20": "3qPwZ1AqYMtCXfvNHsVKBpiM6R5G9fHmFECUGE69Dm3DSjafifhxRucQVCTpQhfUsfo2LH7rD4Vke6ZpXQV2bPHS",
  "key21": "5xBYEocfT8zXztGDuiWy3fuda5pS1Y83SjHLbKaT9tXFQv6RVVCeau1fNKmt3jxiWnA7tk32TSWjxkXTFdqe79GR",
  "key22": "WyJb1msAsqBvVzhtpgA63RAmogZXfpWJmnzGE8T3Gy1oNcjVpSjoKzySS8ykYUvRoJ4yZzRtEjwnW6Nx45rge9s",
  "key23": "2dBroSJ34vb6QmhoZ2yrCksSLzbhicdqouavSAy56QgdwRp6HgyahHvJnZQj79tdAUESEFFZBJmZSH9uQ8ozSdPf",
  "key24": "Xa8J6dP13bH9ATsc98bqgCAfbNiQuhCGLoVKHNxrLg5TVmKr1oAQ1tRXYsvRHsTN55BRhfYyVoseJZztBuzzFWW",
  "key25": "4yywEAKmmVyYhqyYC9enUHjtcdNVHyvTuF8joUTr7PMzspN5eGE4J8YQKrmZWfuV4wQKrcirhKXgj9fPzNT47zRG",
  "key26": "5mFnJZ8z3n9KPUbhVeMCaJbJx9FNFMJM5aWnLWW8GatsbdVJGczXJpBFLLRsRXRjssHhf8E3GSpBnw7b3Mt3CwiF",
  "key27": "A3scc5saJ5Fa3zjcXzuLwRT2PqySHyrgWoVQDYTsRAMLTbKC1kz42qBZWKgzdNAnBmaULMfVGnQWvFUtADkUaBK",
  "key28": "3RUqmMDftepxhBpENzKGkMrnfXrdzuhUVtrTNfUEQkxauqSXGi3CGv8PwLsqvqZZ1rm36dRKLHSTQ1NUPzWVcUKK",
  "key29": "3zmpJRTiYEioF2hRG4NZEDcdxUiNi7Sy2xT4EuFVZR54XwX4ebzq6fJnZZKEANLizuaML4EogMfZ2TbAcfAEwSM4",
  "key30": "4SD53iQLbiW2VbWV6kzTFmichcNnkUTcSNJBbHP8fwuGFx4W66GeXe2nENbz4HECfmH9yZtpH4J2i3ZmP8ei82SQ",
  "key31": "54Q7pzSMetYeVoA3dwVhZrHVtPvGZnoBotRumkscNw2xNAHjYjkvYsyDBHfDFN3W1YgzgjF5CiLapbtqER4eLv7M",
  "key32": "2kGy7Q3bAQfkcVL2L9Y6MYGVcDdSAansPot4b2obiquMxfUYn6LT5ourZyEabeFknRJCey6ttQGTiobaWLXW9JaD"
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
