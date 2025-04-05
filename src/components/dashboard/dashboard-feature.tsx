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
    "4GEgSwp3yVvjkbQQ6bU5Tr53HipxUvyxL3hj2vFZwMGUFkjskyhCRDL2ThXH95BbJesWJAWPuq5WTzaqA1iimqGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "472Je8B4VpJsVteLKuANQcDrkynvvu9bm1FevJg55GniQWCKy3xGVCZoCTcwTbu5ZoLQ21qXQJjderzyfg3UQT4m",
  "key1": "2JjJZy6e4wCcMV564Epncv3VxytGNiSqMPHwTLDQWGhxdQWH6xgMRuzZ6hGnKaTS5U2Tu1DhKQJmvUPMersxdKHp",
  "key2": "3fkraN3rMiuCXUqNqsnVz6bigLVdySMdJQhsNprUVyLGoePuP8kueb3rahi1riiYwX6YwaBF5E8cv4fPtDki8Dqd",
  "key3": "3voP7qkhJ8in48BTYvx5iuAKtAVBFdjk4mPdWrEgTav23hMBGLQZn3PdZeGvw6NwaFtjoEc2bUQRPdGfHB3htvRz",
  "key4": "2WT1ZFjHqFFhCxZm2HX4Zym9GAuQVqqrAiYN2pHkHaVf3uvYNurx4bFhQxtmWMTQDQZ6PxkhfP4oq2kX4GEwzWzZ",
  "key5": "5781FSWLRTJNpAggRHgnVgPnSWuGvegHoXiPjF2gogJc7mquwVVP4515zDgHbhGa5QmKAzerBrykacLtdjpSEREQ",
  "key6": "5MSyMiBi2jGXTk66GqPUtTDL299k6SQ5BE128WmoV8MoS9maqeTtMaqPdA42zvDcqbdVrMpf1um5PEw4L2jciL3f",
  "key7": "3MCSG2Ryre4sWAnpnPLh6Ke6KiLjCzis6PMx3XWo7h3r7B4mMNjmkfzUDZgpppjG9dDW1BqWfhV6LNmKcqxiLBT3",
  "key8": "2rTo8Lk53ceZgCyXJ7uaAKDJZVg1QsuC5mzRwZiZ3GZamDriwT8eRXJQ2m1H3cdhyVrWbotyf6XQvvcZScn7rkNV",
  "key9": "29hckmMHrzx8L76G9LBiUsqPi9deuYX37AwixWEmR1s2Pipq7GAM8rVcsi8NDdf3ERERaxbSCR5UdE1KmwuVdEKB",
  "key10": "HHX1Emwb4r1zzLKzcubDnV29J2tqdn9wr39ZaaZ9i7W9Zwy9oLyjzZ39zMGo6WWzpY8H5JWA4YPHvRxua3nagn6",
  "key11": "3CU8cvDnazsopnn1LEBz2YfAs2VgZ4Hgc6ExWvtEmU1fKSeW5nmmZY6LnZPECazgytJSmp1T6GeaNzoaGArkkAA9",
  "key12": "258zyfzUmADFro2yaF2FLkCuPWGmaq1LduwwUgbFbg9H2sbeYLphqix8adkdnCGewQbXM91CbjqJeyxikwt8ENpv",
  "key13": "2RocNEQrAqWnFyGhsovzuStf8mW45daAjRTw1gUSUmQAE4GEUshrKDVKmo5nZnMfHQkKVMyBw6ro4zexm1HGEdvK",
  "key14": "2ShqXyp5duJLcDFLWqSPmqw3xMAfTQpSRmfe2ih7EYG2VGaqnZksD9ykEz3U9DW8WVPyVZTGUyMZACfVLYm8X1kH",
  "key15": "36jhtajBjkYrtCMePgLPYwgLwJ85bdgbJJFTFywrUtpuWuMgdzz1beRUvLibkqWXoPVMEtyBQdtvvvxYanMftLxP",
  "key16": "Ax7Tt12NnnD1CXUcNPezpzpKmEheBnNW2Xt8EdNtAkb5k9LpRk3H5u1KVk4PGBwerUEtFxKPMCNybYM84s5Kc5T",
  "key17": "5R8YXBpH4toVAS8DwpUFc9ZJtBpcfAHhJbRSMbREDQ1rJBfsz3KBcJLgfb7ANFAXVZHRyD5gpdjvEJ99CMnwnRUX",
  "key18": "5EpD9H9hJvQYBE4irbXtspJZV8R3LiF7r5mvShqnHkGUQmto9MVQ4nhW2n6xo6t4wMzMHMBCfSgRNTq6eSCaat3c",
  "key19": "23J8bALpvJNVNae3fRLPcqvB4MV5gPyNsNaGJTmBQoZHUs3QyMPWTjh6XMRgFSxHxHR74XjACo7CJS4xGTXv4HvQ",
  "key20": "kLeu7YfkDTW19RoRoFMEvY6maCJkDfiVVKLsUkVEMk7rH4LPRu72PsiUeCJxfWKsbHn3gDoEANwDPFKMAGdw4GQ",
  "key21": "2QZuNeom2hBUR23PuYS9ncVHQvmnRhNeoL5oo9kApLdM6MXhMSvsYpeAi7pRwKATwSVTpnWKqc5MRcXoiHCF95vT",
  "key22": "ZpherEtAJ4V9wQvuP3rEq7hoX8uPRgnCzYbcfJUqBVn1c2jd9AFzDe7qnf6GiWP51ZqbkDx8fvHQXR8uvRpLCUG",
  "key23": "3xYiNi7rQpzoYKhF4Dt2ifa8VyMeHmwbDrytAD6qdVy5RXniJfwLjnypPuabw22TBQQZN7jkRF5zKWrJpw8tDRoh",
  "key24": "SCEjLS2bUebi4gJJu75prXhRVopkJZR4xRvnvnCbtuigELSHhPfP2HVNxhzpbTwRBx4HKVBawViVAsermToa9ia",
  "key25": "2zGRqXZyj473oXzykGMJnozJuAR8oakdevp4F4PF6Mtz2eK4VmTTetDYNHjGw4KXDjNjrMHLiHLUQXXsuqcjoGuw",
  "key26": "4iw1JhxqZp7d5qDwECup1bSvLxJa2PTNtuwFQDhyxf1jz2UtzLUipZNhGbzTYXpwcF2YywouCkD4M14kkw4MAMEd",
  "key27": "4r8hejx5EJ35YmGLiSNCb1D3sQpexoXqRj2rqFDMC9ucJWegKaduuhhG8xtwsNYjVCTFHkTz4Kbf4o7womY3AQQf",
  "key28": "3dDFZBwwzNK22kCnuz2sCT1dzdVbmaSR2giEHEajnRtbTopcs9sWULLS7MZwfxDWQxeT4WdettsF965oz9mYQzJK",
  "key29": "59wBu5u9Ze8KXSWkgZAFuTsUDnXVgbxazEQdWgPNJo8oaiWbYK4mJY9j7cT2LWkysFy5aLwbM9HoesxDQFyN6kMv",
  "key30": "4Lw8UoUikR3VvG5wqAMbnwpSAGyKR4dbeWZktjxUSHawXCa6AKwhqBtoPRLKXPAEnZr2RKp1jPgKt2d2X73J4UoH",
  "key31": "3dkgQBaYrCSQjU7Kg6kjGDTLWewVLWM2XxkD4fA7t8VvQoqug1AHPmAFrEhNdm9Pa7bPHdnowazukrHMXyyxfYeL",
  "key32": "44XUXJymkFnv3r5EvGVQmPz6fMbnqZhTSfdxTSfLqQ7LjhNKcEjZYyVVrMTeV6YE1C9fRENrSWyb5Fo5hiUvjGFn",
  "key33": "3zHT2KQwdiAwuxgBEXWYkL5RG2jp4dom2TKm8Q7vuYQp6PsKMHYCxrS1bmAQnhFamtKsyQKwakRpmGbK26bTXZBZ",
  "key34": "55vg8rFzgTMdGQWFNyX9j3Qx7aWLAv3dGU8sEHdwyitfFPYV8q89tQffVbshmAFYb2LKBm8CBvjpmAJqNmiRSCJ5",
  "key35": "5cbGiNXLaPH5veApYXbPNBg2TXo7PF6ewnGphDWzVnFBmnnR1nAkpA1EtJBvLgVhgJgskEV7Qubvct7EimrvLzvx",
  "key36": "5LXdQKintBCwGA5phkkBUUMwPpVGVJfVcZtFBhNeTgjwNvdBe6mWbV4T56HsXxxZsCDxJ79MHhpQiRuym7RnDwCp",
  "key37": "3SqiavGHiowYMjnAi65FBRvXvqHZQ4qA2tcsAN14hH2gucBtshCeCvsGEuDQ7Kt1d4B2UbdQFCMfweHmn6nXmfTB",
  "key38": "3oHcWKN8erdpNY7jnuTqPu5eYW1dQ66Pw8AfKTp4VVBM6KiEP4fvGGaoMHz5Fz2sBBVMzALtnvwZnFNhSzamVGox",
  "key39": "5qkJyVcksueQTzGd5LsVfEQ5Pvv5WHVxoPmKj141zmvHgJ7B8gp8ea64ajPz2CMcFrbGsRJvYT3TiUNdBs7oaiTj"
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
