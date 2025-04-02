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
    "41FJa1GSmt1xivuJznMgUt8zTY9oFA3iFYidy2wzPPTys1DsaF61aLFvmTacLYKzmaGr3D74Biprwd2FkEaPBqM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31qPNuXaV2udZMXNXh4kgDbnGiArhrHVT8N9QxQaULvqEQ2TeABEbrEJWUE6T7Tr5K8EbJAqkSTRFniHgZXKdQdx",
  "key1": "yTr2o3ChjkcRWAfmef5nQaWqyvWnoHoKWvFBNPiJbAdb3vxDmsadX7U5o5NiABRnDbSyt6ovkfL1B1c5jE5Kjq1",
  "key2": "3dpoVef8NLW1WMD3oQEvGhNb7JB3qMd3mUFsRuQbiqVuuGtmXWUfVART5r1C8Fgy8LFcKTQHgz6zgoo4Ckpt747H",
  "key3": "2QjUC8S42KkhEjXiiQe15bUhkafuLk39HYFdakWyLYKAy5iLx3fAmxNMmQKxFSJwEvY2HZrWx6N4HiU9e8EyzJz4",
  "key4": "3eJ9LAmshLq2rYcVpgejFd6yFDpJDqWR99VTjpSN9GAVX3PmWehfY4nPP87XBfv6wtGDLk4jeGyackY6EQmXw4CJ",
  "key5": "5AHymEAauRJwUi79qWggk5GJGxU5bXe3TK8fw2q8nQdBAjTvhQYFqNVvcdPiQN7zMrezmhLNhWuy4Kx9mY3ZEs8s",
  "key6": "4bqXCqvaNJXcqKBD2ViJTaReByD3uM49dFMuDvFyd9gnbZsVuBA4mGQjCFiVpqW9VJh7SB4KUoqxrpVxHaf2UNvH",
  "key7": "ZXwrS9wttrPGGqDHZtQeqj1UoMDfHpB5bAP57Dd9dMrCCzEn4qAvwkbtBn7MzG9oinrBoN5b5Zfdbd7R4tw8PbK",
  "key8": "u1RehxbJFjcDtDarXHDHKqQ3YRkBnmwnSXdgoACdsrb1xDRyxbWPEzqvSEUcApobtgrru5Kb84nRUnFqx6wzv7M",
  "key9": "4ueUR8SrDxYzh7p6eCjGiM7yVHMJrysfxXz2RpFpevaFQt8WbHhmJfqMZZdtVpTreesJHcTMw842VVVHLFkE6dyG",
  "key10": "4hiDfKJb6eCKdNKduokwwb9ZpJoSeTzv8WvsdqxmybrMhdNHi7x1d1dGG7BWScY5FHAjTXLRm8NX8ooLcQhn6Lrh",
  "key11": "2bH8Fkpe5R839KCCS9YVxYVE5ZWigLw3kWFzsjjt5HTk99bN3ZBwJ2aABz7CvUbuQ1R2fNrKEowiN5xHXZTr3wDr",
  "key12": "2DuHasmtrusskaDSWWc2YaKTdH5xM9njR2LSYD7DUejeKseTBn8ZruXVi1JM8FUCuKifHqFd9F8TrQ3ek8XCBnCx",
  "key13": "2cU2htondeEff9sAgRGa3GPhDjSRXa5sS9UU4AUFUMqofsJn2sEPdLza3vhmPt2frFQVHpJrRxLztKzbeAyx4LDc",
  "key14": "5oYBtqMgLyR4DLNE9BbqUSh1qSvxzyTY5h3ucR4NovjdL6JJsfE9TWZAjbg8EqnQzqzvRLKiRQpCtMAUz4X2y5AA",
  "key15": "PPNEiRwonvGVTsMc2nZNNg73JJLkZ9qL8JjBxzdDccauTTLhhYXRTrYT6PjoijD7Y4asc8bipcj3m3HzwM3XLhh",
  "key16": "34CitEtbwmS43okSSdoxBDFDnNPsnAM6Ne2baXqQEsHE4bT2Ug7BpF8ZVEMpY3ij5J1sJU13XbchBDy8JKVchxEv",
  "key17": "4LyNSJyDaUrZsxA3jQJJeePkCikVTrLpKw486ZFqEJszM5ca45Fx9FwtNV7nFDbbww9WsGeEmJPHTJFiesvoHzpy",
  "key18": "4KVZX1aCGehQJ2oZUL4aMZBL8ih1TjD2sUfBQLZUwLeBb1Cq8G63bxbtqRtZVKmsAxe6s5c867EaXuwR2GT6S7bp",
  "key19": "3W3LLfXQ3XDhBUq1n6xrWHA2aEyFVgPGA4TqomuXxR19jEgehfvgyEHmEvaYbgCDkb61rzp9C6AGVRtu9kukjcrL",
  "key20": "hB8eKvsQAosybRvPjKFqwojHJsAXwSei6bGdQ9QvQndgGWiCibRzikr7Ww96wLXsMZAquJaY2etnPoZWCbUzGha",
  "key21": "t4wmLsdh41qbcBr46tL1W6iJuqGUekXkUCpgS3kepHVNsxy76ZdkTBAq2h8A5zU1eQewx3nQNGD3gumWUatD5rD",
  "key22": "m6PeRxYNVx7NeHDD7oA4jrp2cPmcFNVfoCEkC4ZkDT5M2x4DSbxevejM8wQ9AV74zNJLMRU58ZRLiKY5V45tqPD",
  "key23": "VDQDtyhGKbYF1E5EZ5U6peUatnt9SKoN49QE1TGz51jYtTXEw7u2ZMyHnTgEg4eCrrc67CTcCWRMuQioHPKJsew",
  "key24": "2pY9hAMavGK7qsFdixEuHpEwtJCK2qjai6eGQCwfzsEUznSUDD2wDj8TtdMhdgKAtjJQGZEZ7HsDNxcGuTLdYxYw",
  "key25": "3Vx2E9yU7kXR9KAv6sjNFGv8zaSyZGxnygRE1BEVQuRL4dac19XjGjG5NoK8pFz1WB7xP8pDaRkaF4gFcNZ9RVX3",
  "key26": "2gKaeCozdRgq9KTF2EWa776cUb5mE39h228wzyqCmjcPfSF2yWt1xErW6SxSLgi86dGUBBWKGFi9RahUoxkczsnx",
  "key27": "3UQmsZprksnFgiz9JU3TQU6W4DiZqrJDEVFu64duj9RtJzRoYEfb6CBnroaiAwddjEZuqFcR1WfkjGd7k4K8dtsC",
  "key28": "2zDgeL9S8Nrv2MMU1zvHZrFjGfccF1o6QZ4JWNK5r3UVTMcnEg6y4PyzKL4J3XDFgk3VeEE684u65kj41RaLV8rf",
  "key29": "521CmpqyPgE5hoUYxNkZDFhVm1AS1rt1pLSgex6ZPb8zzBeHYiaYca1wzXbBZs23DR1zHwg7pwiWJrzCnQYii9yt",
  "key30": "4DbyGoZFTKodkC6Th28jQbAFwiGthwdvHhGrjcVmz5MAeNBFFcFbZcxfzEL7rvD7AsT35czGV5Aw4ucQ7AGRQsai",
  "key31": "4iz4BA2NdcNQ85XVJwyd7YtH7i7NdnAVAMkNPep4ieRmW5CrP477Xeb7Nj4NAKxLSCQF7EavgDphckqtPb1AZzv1",
  "key32": "5kwGTSDXeb9ugQpHN6jF6SmPx21zN61FtKgRA3RNytPVwkwTZhsrqKTgsgW5mKFCBLyFiYoGbps7duaJyCxfcHcS",
  "key33": "27pEBfvaYXXrahSsaRYsh25iMeEjHyFyqQXZApubktZSguUpAMGTJV79HBdVYatExqotTxS5rGDySY9mL6pSiTsQ",
  "key34": "M7K4HAGmgcVAcRjDp4YDVefePCcuAAd2qBcfMs77XMqqkJNYsWEpQuzfHxFUtCdGUUN5nr4xRvHWVaK7pQfiG2G"
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
