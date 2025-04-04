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
    "2PTBmZyLeb6uP6wxiqUM1YuRnGnmxpAJ21jAZrKLZNc31hn4BhCNmoekZpqR9WEfzBMQYmd3xbawBf1miWkG1fai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bHbnCwRpJ2FiRe1JJnbboypgBKh2cRSCdTkCMxw6QfN7ugcVfEMQXsgiigutY4XhrTqWX22HwTH6h7NARSrHiYi",
  "key1": "3NbGVFAHewGjT8cD8nmp2E3EzXGDWkETyaFBKPjbAyhxnYbSggfDxkJD5mP3Bt7DnUPQyVZGEh8sJjAC58jqt2WS",
  "key2": "5M2uxhceS7anogfpQzZ5aTiXv2JWnLqmeYHXSoxw9pjTcU5fTNLf1k1Aw1v7K3KF5A3AZniRJT1fyLPwWSwk3aD6",
  "key3": "2x2iVBKCGvJzLJP9Bwkqm4njNBw21GsjRw12DDtZomXvfN5WQKZr76J1ZfddPbheTq86hNZUyygknT3dKKR7BZFi",
  "key4": "3CbLB4sy6funWNfbS1f4jk3k4SQJ5fNqyAW1SxWGFEg7T87LBPpP4BxPVerHF5NR99HFBTUrG6Z3Qz88QzQfGcm5",
  "key5": "4bSU1B1wbEPSWCRA1o4faFdNcStbrPgBJA19MmAXA7Eojv1YXbysPtxkdF9BnSe1MRk7L5d18qbCYRrixnvP3MuH",
  "key6": "5BArZg6UM4hDti9zTmZUnL9LVPFAD5YPvppfKaF9mNb9ig6NTrhBfk3pypCEGvbHveUqTvTmzit3zRyiyZnjiKs1",
  "key7": "21si2e6HKECemnThvFQAiVBUPxKmhWB44ERaehnd2GUTL3kY17JVTAngWBLXfCaXnBxpoiz5TAySdJwzceG56hCT",
  "key8": "4cDmLLVLCBa8KcKyaGgE9gpn4jDrZotuwQtFFLCRQgeRRcDHh3p5GAqEKtp7rgJGwG4fXfAVwBoCRv4e2UngdWTn",
  "key9": "5oQBoKz2MzXnd1pboFy2TDrSRVcmYNLtq6eMV7ipS6w8NjXEwk7s2F835hFPtLByB7QfvN1Qnq2iaZxXkh7TjPjP",
  "key10": "3pZ8USiWbM3x1jEsrj1ewMvi2P2g3hD4j8QAszH8U7ngZqyNzyVKRJrAMTDa2EM2BuXKtyx1R4KNccuGKnb1Eihq",
  "key11": "G3mY8DopQgZvdqmAgfQRFHLfx7QaZDQDeP3sKDEEmsmif4HFxHkvUGMbmWEBFvpku7wFchZu3xvza4cJekfttZ6",
  "key12": "2VuZ3CUFGxgENwsinHeFYSjf9b3cuFktdSn2TbFbVujCycFgPYrNc8YxjTE47kgK6GKiLaF68CcxHc8oJXmDijEb",
  "key13": "3PCpd4BvibE9qFwjnJH7uKNA3DWhsoB8x1f6Ejyc5cBj6vs74ayaX8rzxiZKzzXAJqPqZDv4vwPkvg5xoNCbLhQK",
  "key14": "67FGUs3hkJAm7r35LzLmKcNtEZQod9yj4hqeCSjGKhBYbt3asjgnfGf3RW32Y1hCfYhg9i982Bc8jmE1KN7vJc5f",
  "key15": "5GNGRJdhkwvMKy4YgvMrC7wQA5CfEvcuwDXitcW5h2YyhfZdUvtcsWjwzJUpNrRMPAiHfCYsvtdJDsr8so4KDUZa",
  "key16": "4qS2cCUdAKkGP261DeQwPCAtLPdhFu7dorS6RWxGfv6ETq67uNNyMKHyhk6dCFxgpL1QecbT4wbe69w4Vhi2LLtQ",
  "key17": "3u3kPjTxesvnGwFrQCHJy7HFoHNeMVSJsBi4tJ34Vr47EFStmB4kQLpeMjy4X2q46sErJRyUCJfRAGTRcyhvf4he",
  "key18": "31N6cWvH3ctKRdoQiR9ajsjubkQTTUMjgkZzXc5VzHjpxHmAmb1Hpm6UVSHxTt4NSXZxXNiN8rSAowdPojhM1Maa",
  "key19": "n2nagn5zNKtm3KtPmoi5ArREtVELUCutUvr5rpXuStwDTSgK2ZSW19saPfsdKDnzw9G4k4FpRXrqSBu3avurmtA",
  "key20": "UyHV7nzk1zY7eEVyoFeZupZDdAxHGua8si5BSx463uztRfMFF7StpMEczk6LhR6cgnAAPLYRWN8Sujr7xyw2FkY",
  "key21": "41JeyepKuAK5YNJqcxTn6RSj9rNkuFs7i2AyYkaSevvN9D7nBtDsNPpqkb84h8ZZpnoNocTdyfMLVLK4V2tUB4GB",
  "key22": "2GTgRKYRok4GCKpUftFCso8ijc4j2NkNfkGZVM45bFBYXAkS9xX1PTJypsKV4Ap5Un1aQyk4oGDaKCZSic5wVcTq",
  "key23": "3Ygj6AEPPtjfxhaVvAHPT2RvD8HmU1ReU3B899myTiqsjnCLQLTMRRs2fqqBUgLbyLP9ff4HDxTZEEEv9gduX8Jk",
  "key24": "4xu1uxu2rE3xmzqBzweA6xuPNsQGugbyyAzH3SCWjvrseZpcu859JK9GkNP4s5cFcmVGZYDTA6AsfbRH9sDPidZy",
  "key25": "2JbWyVw1UsG6PTn7aw7fg93xUbRvJiKFXKNSnLAaaNK7DWEQNyd2P5mPMM5ej99FJ86rZkv1RkQxZvFyTBAjJG4r",
  "key26": "2VjyUrvKy3SYqVZLG6fb9RXXCTcBn2hZvFuYYDhdunbeCKYJL4yhKLas9gZuc9Q8nssNk9aJJ1rQniy2MH8nwivv",
  "key27": "3BE8BmnfCEpCpAtGof5hpxdKD5HXjd16wbM6gHRbFAR86w9SVraivVfHeoK6PHbLyxa6ZxwgB19XbwDMUDWHJKXK",
  "key28": "3ezDyKYCwYu7naDVnNAgFwGtGoctaDBs1a3ZPVGd73FXUHfoYH9YBp9GR83LzboKYdGqYhB3wcMcHA2b6dU8deB4",
  "key29": "12224e7ufJpL9B8Htf9y6sQPaPoXFnvRfvgCnAnE19ZMZ4hzTZjV1Ce2vDAwP6ZA15KbNgzyNjQhqjXrxUg9ymdX"
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
