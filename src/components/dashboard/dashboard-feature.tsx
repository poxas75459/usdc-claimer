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
    "4AqpBiFGqDjF1N6GZKLkFLct3nCaWcz4KguyNpmQvWSvfbRqs9MVC5yTfU2x5yfzUUBdTpUg3bcx7Fpza3cVkT51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K3toQP3tVz7z8YRzGMxQBFqKQ7vVnaYNpGQh9UDJPvEjmHSmFpaMAMZQzeZsCWG7cE6y6TMn7QjV5VvHWrzm96K",
  "key1": "29ygwSwbmuwQdQzkAUCNkMmALwdZ28RkZkmshLgEGCik6DdK45be59Xnp7Wjqi4WZ2bnPViRLbyQTYeaGeXgxis6",
  "key2": "4U9P8nrLKjec5WJDhA3Wac6qUzPqTtnYLJCFGrsZkekrYmBNapX927ZNGjasn18JhUUmcHJkBgyymNqVdrhiQtvd",
  "key3": "272tL3k36Ec9WWd4UYxbXTcT6r3dicVN6mJse2DxEPMdnaswc58ncWvTDdnb3YFWocKhzzaVkufoQptws498i4NA",
  "key4": "BSS9Bn7GJBRiV37SiiZcpJ6QfEtyMkT8dqi2KJDMxKPBs9FhLNxB5TYsb9hdqUDWax2SMVjLCm8T8xmr4j6TiVG",
  "key5": "2HJ4uh8Ab9KwEiTQbXwfNkcFZPfHLxtHq2SDGk1nEz5A8s8HkTAqS7urbHYrVmtkND8A9AxHSNgdT2i29Xjde3UZ",
  "key6": "3kV69fHcXAJCYcUSEVPGJ2oHFZEDyucpswukyUQptVVTW9cUaVaJmwFwcGRrmbVvVqeynwhFwX7Z3KHAJSyrgeV3",
  "key7": "2MJyCdW3fJ3trRunTzMMmPyggKD44ubWSZXoyFDiVSuNiZbCnMgkKfZusTRNf95eSRin31ZtjKo4J8gsv1vVoj32",
  "key8": "5WyTovzjytSG2G4Bdxg4y72CthjbUtYk9BkGXKPxkJErXTYq7v84irjb8rqjKpnGHwGLYjcDrZPXKcUPjVXHFZV5",
  "key9": "5wT2mTkcrX6sy9qW6JpcsKo2oTMNH3AewiPUbb38hqKLcXuNkjuttaD7Gb9ktxEPwQvh3zSYZ84yyBcnvqieWMiQ",
  "key10": "4nVCdxcXgFj6AeHi58vsiXBnqj6uUZDEpqnNh8ruWmfiXKBbqv5PHJv5YpUBgfRZW1mUCrCYA9g419qFjN7hcjVf",
  "key11": "2Jymt8Gvr5M86sxd7coMKJwBzJL32fRApU4nvRduDAiqo8JYfBxD8YX8FfAHutXNHkgDZdYijraoC1PaYHoYcBgw",
  "key12": "uE3HzBV4ddL35t7dGsQ1Vdq1UirRnkLMwnQ5b8uCPHtt5QJB12xp7pi5vfPBiyH8xFgry9LVpEXWddaD67bm2nS",
  "key13": "KUfcT3mK665QFoibSC87tmUai3eM3o6SBYcemeqmBCG9ZXSa2ma2pPfKCyNzarhgh7MLw6fNceXYcdW7H12456w",
  "key14": "2efahVaHwUz57eJ4F4t7wNtYgzRZYFApUs1JVqVpMcruNcgnXhKB9BY2wakATuLu4SNdyA7jUmVQDXWLfij9okRM",
  "key15": "349Tty6zwKw2X49aTVkS4gahFNGQ9mWgegKsdLmuieb84Uf7VTs7XVUNmGVzwFcmGDiexFBv3v6755uTjTL2meSs",
  "key16": "2rz68ijjq9VmnHm3vjn58niVzAwHF28gp14y5HZpbydGRvMWCB9C7cChJxGS3NeTuw9eiGEq28eA8VsrnGUPKszN",
  "key17": "5zd5X2tncFqCbF1zqehL1KqjJJLN5vffra2HL4dWHfUyuKEE8TcXt547JervFd39HWsFogLxnZRnp2h8PRJcto1m",
  "key18": "5vWf8E8nZXBztrSJ7UZLLZj9AUjUW71N8Ygj9qQaGiN4jf6LeqFSL9ZyFRzPcEjvZt9mVSLoncQStnv2yrNWdZb6",
  "key19": "4JQncQTLRPzNE545R1GuHGq8CN1Gke9nL1zt7W9Lr3NJKFwjnw5XTjnm2vv6mXFkHMA6q4WchVsCHMrbkiFAWA2W",
  "key20": "RvFSj13FSXjMrVXGJ7vkSwebujKXf6bbsHHxaYrpoyEaWDmytNZX34SJomUQE6pMC8wRWC1ZZxd6Uu1wvnsi8pj",
  "key21": "4aV4WWaV4BCEAShGcUorbSrpUKiRnMC9Uuh8GF5WXDDEgTJGwYVNmKs9cCaY7XayeLR3r4dWPetpcuuR7t2mnyYn",
  "key22": "24YaDuD9GytKDytKWxs8qLYZazSe9bpXwNCP5RvFhcDdfjP6orDjwGJinCrmQP9yTHSScGexnAGY5oMg11RQ4k4e",
  "key23": "2EhZrFzQTBGoUG9pt3vjTCShgzFR8Ue2nHypdVLZE6qMgge5oNowA4qtWo8fpT4CxB2oW5YQKM6ZHWLqWKmGojMF",
  "key24": "578f17R276XZX2oyXQMzR8pfmqdttz55LfTsr2FWvt6SBXqL8AbMN8SVnSvuzvetpp2L8T4zaXSnoKKCieMjfkAe",
  "key25": "5XnVtJC3xhNTD7EKA6kbDSZ5LhKzXHFGrRuy88ELvXiUc4k2EttMdXh458USmT6rfTi6EiG7dSrNPCQT9mRL8NCW",
  "key26": "5X2VfFQ6Y7ZwC1hqT8rNruJGDQAHbvCNSPin2hiFG4EnfSo6sczcszMNrUn8i7xJsRwf7QjhEMcwN5CkkDMGbtVF"
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
