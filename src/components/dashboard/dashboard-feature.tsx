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
    "4HkxGrCSca2vqi5oHo6S5douaQVJ2PCsibHQKcpWcZZfwShujRvmvQhzt7s1U9xaEWqi7pF2HRL3kQJXGHH2n6Kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kbRp3dvJuUKUP4yDisTwAvUQN9wva9zYtcQyd4vPb8EPUZ9LMTVbYmigvgSevejDWEFqwJj54QUY8SCtQ9d2fpv",
  "key1": "42L8WkntBAqrHMeEX4CuHcD1DPYsjVc6XSTL3RGUeUXqQmBaXwksoDw4NYSCqUubc6pTLkKWHWQmAYmsJ3xQ63b3",
  "key2": "47ikToe4BvxYdEN9xzvTy1UwBv1MPfthfGcmew3xEYu2kvRXPewFrGdxjpcuwVPMSdN7vodnDduSdMW3BYazmcuK",
  "key3": "wNwHwgGiniVVaavYxj7Gnii5fijZDVY9Wq3S8mhL8pPyxbHahuhDN1gApBJNy97464rNxRtbQA3NFG5PzhPH9zd",
  "key4": "ZxBhwH1h1idCQy4T2y3492crVCjnc74SAJMcTPd54jw7tDh7LV7hzUkbcmtf9kiN9PhTF3yP5rQMAs69djVrhmW",
  "key5": "2YLfQaoZFFKPYGgMwgVvLPEjBoQSUnYeMxyRP391hh5Q9BxU7tUndwecyvnTBMcajSvXgW4yM3EXDDCnrLVG3pty",
  "key6": "3tQhsn7ds8J9NX5t4WyLkYwhBS5AdzJLdwJjwjT9J5hzGca7cV6tkFFE6HgnKfAuTmdhsMswC3oBAWv6Vq7JupLc",
  "key7": "32MpZ58pa3Yu5BbWo5JosJrq2XnyuqGmnTScwo3mEK3FHxP6iZUA5W7RTLmHTvnhxTmR38ZDUmqtdLdNW3eiyikY",
  "key8": "3kLPU2VsNc6XAoCyLuYcoKEN44wXMVKKFFNYRpYEVKQw1SanEKTo4nuje7tWD4nGkJ4JeRzSkWXbZTbMzFefYTP8",
  "key9": "5PDBXhetQJaFohiZrzJ7HKMZ6qNexQmPLB1TBd42t5NYqwuVfn2ADtFsMQ8qLeuVkfuGqvCVzf8hjbLixA53BzZL",
  "key10": "2Cq2t9kyVCUBdymeGiR5RnGZZjy3YvkL5BbMRPLWhKREsY6ig4sJpfd7JaatCNt7DzoLkdXDr4ECeGZQUuwdiXod",
  "key11": "aBFYPkQCF1sLm67xK4jscuZH3bgxJ48RUDWh8PCdzeT5ntAnoU5v1ZKJHsdstARw71ic25w5qp2qEKQUhMJBHhy",
  "key12": "2gqU1uvkiRXWa7MvFkPJgMk7aDswJuxRVjogm55u2GY6SaLDudmbBB29NRS2DX5DHxL15AYnPCEYVXKEdqjjKTrr",
  "key13": "4NdrrS4gFvCsLhX5LjD9LzhLMmZdiipa4yKWbaJH8buFgSyjZw6MMhjQe6PU4DSKGUzmkt6n9eJQtcTcy9wRhwP7",
  "key14": "eMJw3J33VCfdtB4t9F2bUBA9eHJkjYzryXgrq8CtHyaAq2WWjpMMtfuQGeGN4Q73gpEA3Lcpg1D4tPpfWFuJQiZ",
  "key15": "2tYwiB53i884ztHC18JbwkJQ8ZRb9ytUWq754nM4Fgufsf3UPhA7JDrGWv3EqRg83n8jiJvrR6k91xXiqHJ6V1MA",
  "key16": "5rUhR3ceEhoqMWay4Ps35MW8a6HYNi6BzVqDoSgDPYpHuKaNTPp9xpAS6Gqpt85gDWgRXiWY7w4ETkq52wcWzerH",
  "key17": "54Cxu4FKrT8MLXUeUAQM8p7fspAMXQKg6F9RpFRr7vH5UgYTwHspdrUYijg8mJKz7pq4uJV1Gxfs8p92VEGAP89j",
  "key18": "5NHBQmiaeLcS9DAswQCGqrJWwzFFQLD8SVmw7ucBXAokCy4ciJqKgGep9SnEqQ2zEgyGyMuEBKGH585Y4R9eZLyf",
  "key19": "iy2wyD7Sf9W9TF2XFuf9ryK1u733qJ2bVkqKVMkPqRh55jzfU7d9CdkvZ8nG8SihHryW8n4eW1gtjMB7V8tQ786",
  "key20": "4kActUrcNtiayH9S8FfX5SKZ5cRV8qQpmkrF3c6Ufefc6uSMUwkAhcVDAdcyigUyFxTfvbwzxEb6vnwxn2S7ivtt",
  "key21": "394xAsiBVHMyZTuHQGtAw5Dg1yLgMvszXpQVYXUTk5Gg7jEVQJQtExum9vcRSyP7qbXXaiGYsRzdpCxhJ1uTYaBt",
  "key22": "4ygCj37K4n9ZJxB7oRZAERigNoRPRHKYqYWfD3KgDgVBC5AyfRg5nit6z25uNfPnBynC5xkcm3mHc6FovbhfaVX5",
  "key23": "Lycjr3BAGsmRmChya9kzo6o64vHJERXS3e7A9wPUg2Y36Ex4ZsdJD5UYrS3Aff6VosoH7AoecR7sWvWgdcnTvb4",
  "key24": "5pqcfThNhXWt8o4fa7CTkoAtejw3PGfnL31Nyyro6wpZFB6ELms12Lk8NuqvMhqRPXUh7DccLJjdF6Q5Htza78oz",
  "key25": "4SgVpUv4riZ69QYDBwxW6jR4GW1VJ5wrpBM2G7gxKGUUfb9FRC1QQE3Murwr7x8uLtP1dgWvqLt33tNFW9k2FBCr",
  "key26": "5dykzESZy1L3h2t2pUKHMS6gqmFQbyaYT2JJT1YzbBuA15aiQjJD3q1LvjWbyXe4sSe3tHQCXg9U8NvcyS8vfn2D"
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
