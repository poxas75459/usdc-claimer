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
    "4PXXbEoQ8u7mWqfYPwkbcVrC41yEGNN26ivmdaiznDXtFvYNMMzAvS2bTCZoZBsAobuE1JxEomBoznQC98twsCrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "242GfFAUyDsZL4ZiqZLbRbrkZdwzvo8GZhpaRUJgUDimZRMirdyB3jRwRToHnMnCpPYoGEiR4qGaUPnB8ZaFrZmq",
  "key1": "4hAwz6twLrC1MDtqLkBRo8aHtQq77juoKR1bvSmfUGQthoyBMMhHS8sTpxPZzDa8dme38WHbU6zAts4DaGXQT61D",
  "key2": "26p4NhM7w6Eh1Byw4LHKdbVkRpScNjCCzvvuw9XaQ6bsUvCRs1pddwgvzPYEwbAcD5X7YMAedjB2PKXAvkY4pagj",
  "key3": "2FMJ3GAqZTxRNGMyQfKhwmGNuHp8gjCNcyuNMzMPK2eSRRCs64ApSnXBbCDHp27SrRAV9wmfw4pFd4fey8V3aTYR",
  "key4": "2yN1CJZWy7hdgGCjorTU8WXbBnuSg3wP8AmU7rp4Z5xnXcGjER3agx69Hzfcdk169wM2yccXvoGr826mV5JgAvtU",
  "key5": "4ENVmgs3Hmj98qT2WE5RRyfAKXdQpxDQUFDmFHcSbDWvDabxuaGdZypwA2S1MQzhnXpTKXnJyoWVQjWBCRyVjNAn",
  "key6": "55xZA4vtN5sY7PnvK8ao7ryFn5tezu6Q73p6SXwc1NtafLBpbw19bhmWjjABMrf1KnFYHHV1FzbGpgfjiyAPf8QP",
  "key7": "4xk9AaPakf7qmhRDVKck7j45PmSMNRWupXQ3VtKNBWq5jLTYxxcFrF845KPdQcYst31XtqXkqzZETVtGYETScekw",
  "key8": "5E2C2X11UH4tYnJ6v4QJaKWBSGYVGhfhhj5si6QrEyREGWQTeTV4jBADwCdrmRQKjmX5u66TYyGkRj13b4kLoK6u",
  "key9": "JzekYt7joRCMwVZHZAF3UDb2MszyDjGcymTh6j5ecjupZPLR9mZSwgfBWHQjR41w6iFNRFAs4iGNLapzeDvQjnQ",
  "key10": "58AU1hn8sTtzUM4u4VK2RAL453v8GCaurmJUmB6BXBYmLWZLXCTt416Lc1vkhZMyboeVmTeLGtcoYEgEC7E7ipd6",
  "key11": "5czJTCUMXRU6mVw28dyYSN99LJoL3cqeszPSq8wVH6Wp5TFTD43zoeLAYX7iwxEFDJCG7fGRtafYJxENqVzmTDSM",
  "key12": "5S14DnHUvjKTkrDRYvEQRZm9LRGq3j46YeBnQLhP8teo4KBPwrdbjqj6jPG81SEDFuJvoubaxD425jj9WUvrnNvy",
  "key13": "28wKVJrA86t6dv9EuaTNWyaBXWzrtfQiU9uJu7VEfS8u2YaWcHDf7ZPo6BbQ3A42Xe1JSRNRWHfn416yoymfr6Pt",
  "key14": "4ikAynm6MT6zXdKLu6cK7Mefm4i7Vyvps6vs23qAFpQmNTCZjQhKUiqV8eTPAiu4Y1zNrayycAqTFozwQMw1MQ8D",
  "key15": "21nX3t1xcke3XLJcaEnpeRmcgm7BmuxxfoPcAq7zrHALnuFQGPkkLp6cgwHy7QkPVDRx4XnRMBpBFyvRmTJ4fD47",
  "key16": "51x7DHK21v1VcMDazE7wpQsKuNfwBYp9WzEz8bKEnvKqw3PrBc6Z8T9vUFDv6WVEZfNyUcj9boC6epwz3qWYVa7A",
  "key17": "3kD3z8rGZMp7yh7fVVCJ7oGmRugv81cpdhiyzPFyDzZkTgYYgHqkkp2RhDE5CoqEBNs4dqCg5MyR1vjqSoV7UE1L",
  "key18": "4dofcQhY1JAu2vxaVCTGMDVk9W2M3T5CxNx6wvz5FATRJTjo4QEMjJtoBosktJ4RTdLmGx6aEkrynERdi3AN7Cny",
  "key19": "61jW7fxuwaaMy8PyamCeuafA8sWbyjzKxweUQ9VcZaW76JBMo7Nntq3krmFV5fcoq1ekj4zo2pC4izWfkUo4HLPs",
  "key20": "3Wo7k5iYGGjjkhMjDVPeEgbnLgxFhiycJgyg23qd63z3QPkKucKZSYy1AvWNqVY35qiYdXMXpSxTsGb6fimMUpwT",
  "key21": "37i1fpQTAmt8X5nrPSb6mvsSnLs5izjMK4zfxV5kncyfNpEefXzhE1Z4HHHEfd7GsikaqmCAV5oTuJdjP6jyPK7G",
  "key22": "tAKMTC3F833tvwdMCZFqYjdx386vHZikbxEkB6EsxYKANcxDQ2FqPAAh1PL1ppdP75ppC2WEs1eDoCa67owGJZL",
  "key23": "3Wo6bAUFQnsz9ci7ZZ3FSUuwim3WSAVABntfLU8fwZv5sjiBLnU9GdRRXYx5gxLWWjBvVPNUqTogpqfo38NeYkHc",
  "key24": "5Pq29aEp5HJ84rAv3gU39YKX3qeUFZ9cYEZvYB2yvhg45PeQFa9wFAkAafW4T3k8CFnHe8K7xo8vV9mX3AY5BUr7",
  "key25": "5XxWJLwhjmGnEfDWMueZ9RJTSst73DnH7kjFwosPkbg3JCrX41mqMr3qnPyqJZmbew1SKmCw3u8vbGFGDHJsFk92",
  "key26": "5JgSaGwKMi3hpCxwu2xhkcGXpWQTwh3SMUBsXBmwft1qSPfNCzmx7XxwADqzDLhqkFRJVmJj6gtubBZBFv3TYcg1",
  "key27": "56HBY2KPQEGh4jAkPzbyRT5KdAMaMFK8jv1gxqFardHHaDREd7V9PJsfvp4iuCwpvPvU5FqQ2zpXpbNU6wsrFew",
  "key28": "5tpBa34sfAA5uisSsuifMQeQGf53d2tdjoyRkqhcgfT5bt37efDKi3csG8GaxgtW5eki3Ga1gsYHu8d9E3DGctWj",
  "key29": "fBoyRQ5U3SR5ueJWcKpm6Yeg4LefYYmP2wSeTLx552QJGSW9PDYjAugkHHx85bPW5bEbAMzkKYyTaZJp29ifPSe"
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
