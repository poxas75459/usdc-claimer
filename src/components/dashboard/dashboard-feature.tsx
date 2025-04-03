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
    "2ujg8nFqwgd9nv6sR3fM9ddCa1ris3P5ozyci6MmuhEVT3qoj7Wrm5aQduetLRScPCfqJ1jECyTi3g8bmSXV5ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4496HomFy7soQckM4giniXg1hFnNu9V5HDXRYs94oCxvouKGasPPoWKf38DE2myy73ikQVEfQa8XVvrXv7ueoFwf",
  "key1": "3N7anoDeNCw97yAJJ8vTBsrkFp22BLn7NikLJ1Pz7KcUPBZBCn5MVFNnHgyW1uyTn4E9BzrDiTpWDb4R7RL9b4pw",
  "key2": "umycDjqWKdmbvtyvcerCkheUdLTxfGS2Dn2nX7skyZaDNQJ7tZ35o6ZoHwvCTjBRX31eLH1En9M3A7oAtSaEeiU",
  "key3": "5GzuhtJKyxeXWw92q3s4kGvrAZnc7mi66wn3qb6y9XpwYfXu8iv4HCeU2PwWTF16DTWUuW97jFEg265SLXUzSaWF",
  "key4": "2bAXybUS26z9SLtJLixa3q9KBL8LQKTBGzCbrrbfJE7gzVm7aRmaZ9YfTExEUkRqFH6xwNzkM9hLueYxUEKgi4d6",
  "key5": "4DX1v8yHV7WCtrnqukPXj6FY9fgV8kvVBaUjJJJACV47NdwC3utMax7ZnhjJJSH7YiwDNVm9cFKnNBs6StPmwRXo",
  "key6": "yrq3DvsisMsLv28HQyC7Cbv5cocQggCJZA7yw6f824R6sfqybWDfWoTX7woCJ5whxt63i47qancejYm59twefxS",
  "key7": "271JfDEn9niT5eXESs4iXBeeH73KCTgGJ79cGayhbkbvgGfuUQk65Si3fmWN3ZpKCyHENEPfatKxDYVJ9PuYs5AW",
  "key8": "3xkxeK2FDQugHUP3o1UEjxVHxfLcMFk3PX2BEU8TKG78uWqJJGvtEd24YjvvCQNVnSNXjXWAgZUr6wFDPG8Rb6yC",
  "key9": "5YMkzPv6p8EZbkavT8uft8kEKSm4tZCNWBoVQR1pgguRysXWLDz29MfVvRhpCQoeMwkmTcMTh3YrGpWRLWFUq9g9",
  "key10": "3MUqQqpUKSUyoUmYv469tXLUPGTY42EPQL96SmtrgSisbx2yUgP21vDY9ohv8JcSrwZXkj7MUNeBBjr1YzmPk9b8",
  "key11": "2QvV4Q1sUxADGwGXfjLJ9ddoxnPGubPete5ujwqcsAYFEJ98hcThuaEm4hC8GgR3SqmkrmCJLrj8oYRmSMtgf6MD",
  "key12": "432LSmup3AURk6xKEeuexYwxMYSNAZEhuG1jJu9ANAUg1DrcjW7kZtkYoedWj2wSA5krJcH3T3s9VV5vAac2Fnxr",
  "key13": "635hoNCc2YPMLkQ5TGvZyLBoQtooAr7A1DwqX3EPRp5hbmdBfw2fhi41ay8Bkh7R9tUm1FKRXMY6std8YEZkLYSC",
  "key14": "2QgM7hgqdvJT2gM1fyk7sY6CTAKnZ7rRYGrd2sWz4MsvkprCNcjRy6dx84s7mtLST985HPg3r4hpUV8KgJ7gev9Z",
  "key15": "5JPHwyFhFq8BkY4bkdMzfMj5ADB4w1eoeoZmEmU9RJzLw98KwfWEBZBCGL3ADoXcoHS9mN588ioeDQvbLCYtg3cm",
  "key16": "2n4D3HJbPpRgFE43KXp6BWEYa2tZ4tWYdjmxiffiMrYDCGj3k8XBgF7PtvTNfqqbCQBXjFVdQ23bYUQGrbZFZJvY",
  "key17": "4PyttmzFWENddSU5UNQDQ14kjjCfyYJ8uqwSK66qfFnGmjQT1e6XBtPC4H2E2snhKTLoaLT5CrVB8vsYBYT6EuCx",
  "key18": "58kF18X3X7PGz6QQC8aykmBYtxYg1aHnAbepNefJ3cq4VLVUCYkG8TeDUmXJd4PJ1tB64BXu5DoSnXhr2UtMcqqR",
  "key19": "2Ga1aDpPCuYLZwohaoywKB8xj3hoQCbeZJrcFABEZJ7RCfN1BAwMEMEstxz7L9kQZi6w3hzdxDX2PPoFoScwJ7Bb",
  "key20": "5XFSjqiX2WoTcKc1eb1rRyjcQaSgewgtes9iruVviz2VJ6fjSsK4W2cxz5EF4Zym9S7s4dF8kj3LmkTVk6zy44mk",
  "key21": "28tKQfdcPviftJfEdJumikh7twMwktzDkTNDVKpiUAt6LCrbH4tr3d7P8YSvSDadMqYuHPqar6JuDEVSMyFi3Cwx",
  "key22": "33279GwzrZz8noXKhdiCncy9exxzsrD8Dcmj1xw3BmNhJw8zKQwNrGKf92vVhJJ2qZ7KUirP81vyf1Z8FDRZ1W8R",
  "key23": "Shf8vFBTG6akgruFAch7nxk8Fw3HbhHzesRZxUTF1xMy5JzxtKAj4HzhWs2mWpEagCoHp3f9F5MLZQUfi2c5yQY",
  "key24": "2VezVfBcyjspbSD3Ndcmdtpew2Vo3MVqD3Gk4Um9NYVm1w6DMxNaFBn3DPVyjGEtBAg7z4LgYetnNTiqJNSzBqcm",
  "key25": "58ciR3Mv4BovHLawZAsLhUCHbqyMN5s2jkY95hegDCY5RNwfajnt1vjMog7jzeNq5eVSz4Yiw1X15me1DyRUqeB4"
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
