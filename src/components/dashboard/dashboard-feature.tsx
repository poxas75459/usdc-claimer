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
    "43RoJyUUYpKgC8zurCGema1gafenBmcPcEYnTi6KdGNrRoNmQg5wtBUf9DFK5Zv6AgnDMi2VmNodoizvX5PfNuYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25BypRPnr1R9wCw6u8VLiUsw9Npqy9CV3B1kvuQbHGetFTQ724hDwUJB9DDyvs9XdB2x4a3UWZuwexMFA827MU6H",
  "key1": "3G7HWS9qyyJwjcFBsEuKbxwsWfpdu9W1QDpWP6j2s5KnWQmYUFgpUnCHGvT48FzmJHmjsBvVptVm8eGhseeNemPw",
  "key2": "2tRDb2pVpo8ppXuNaKaK89diqigMorKxaj2GCuYvXr4bCgHdxU1oPGGEoUWRKWdbDRp4PKLCwBE2tXRfLTnFBZhn",
  "key3": "4wJEkZ2aGVb1Xkk6YdaMF9Huc3fQi9drv3sUDp9wm7M3rgNFccv2VTgJrE4VgConcQCM1Xx7rB3fvaZDp6HMKfFf",
  "key4": "5wkPpjd8m3mDmMwRaXgaaUxGo66uQPBd6w28dLFVbhwCdq9kpRYZ3Ddng6beEyhJ3wpjDZ27hMdfqx9JSzxgZfuZ",
  "key5": "3ETSTjQtc4ejGRnS6g9TtvTZzVJt5CzQNMufTkLGBFGQJumPApLVLmsGtZh5e51Dw9JL8SkQZqHvqzrNqkeiQruN",
  "key6": "4aCmKVGSLYKLa4BmDewT9VshZogaDzN9KTPom9PPzXgmymBRUoRdGCULXhRAGkHemfSpMBxMbCcmMr7XTgAHzF7N",
  "key7": "3wP2J98rbAqHHkyF57fKuXJQPFSKMDwbu3912nRphQYRX3BsGz4PwcgmWH3rPpk5uaqpUsZ1tVjmAuGxc5cFmeDt",
  "key8": "dmCv7udhedj9RzXLqVJ7YR3Uq9GwUke4Wrq7RfrjZGUmWJBXJ17rbNySE3uQfHJU3hdAuEVgukHeAwMmbHi4S6t",
  "key9": "3uVMuNo5MMpttkAMbAsxA2qLB7EKsFhQaNbCzhSXuZdPTrVFGB18texkfCCJWPCjc9bHAfdTP1dw7CLUNSJ77hzX",
  "key10": "5QSpXsWL5jYaNTPKAP2nwqr1hdAikfqD7RwGAM694P23DEUrwRxLCKAkGh1hu9vWQjnQ5EdAJDZWmQC4HdshUygi",
  "key11": "2dyicKvhu7AubUKPu21Xxvb5PeoDg1M1AFAtq8ate1WywUThTxEeNTfYrXeLTVMRyYG4Ko5T21w9WpRidVHp8ddg",
  "key12": "tjz2uAFDxDWXpYG6pHexBJ3jX2Z6hZdALZGXqm9U255GP6g7C5d3XNQRL1ZGgPukUN9V72c9zzUg9Ra9x2MAhEm",
  "key13": "2mzDTecDByRjBywvfmLPE5YbT4GTTU11nKcNWCiZnKdgXyQXfs33Sq1RAvLH7dKvPNrG58JofJYK7vYBxH8jzEZM",
  "key14": "2o59RQj7si49RF3sEsrdfXhHK8XcezuDx2bJaisv96nmqJA1USanHpr26mkYLtjXMZUPx1WhnVaW8FWHzw3GfoQz",
  "key15": "vpYuUaL622H5j58gZig4N9JjucHBEUhpdxC8sGnwzjGtWTXsxdagK2PtxM9ASm7uzfjE5wHUFHG4utTqQF3etiu",
  "key16": "2wNSU3G6S9zu1K3HaAmjdSgD8KRNZRbGpSLG3KJSNnfn1VtkC7Wovt5MUeKi5tvZkVm2AJyKV7maWLrScnwNaQcn",
  "key17": "32szkBQzYJuQiKDrSZVkiMnFYc94vAfABLLQuc3u2DhhZQXYVRafvacTrNe7PFda1jbAEWEfU4gVLEL6oStw7TC2",
  "key18": "5d5htrUxz2F3JtqfZ5FuwJoEA2btGRmbpYbvqXjQhKdwh2Er2S3AZpmffG7SZhuYS2Esth2R2WsmPjySxtn3JysP",
  "key19": "eELvEJQvncFP1BxnMzX7UeF5wgZ6XGGkjL3AyLZsdxzKxoaKHCiVAjKosArQL7cTWAH59rQYPfHtYCTKbvpVkvH",
  "key20": "5zkKj8paWBczHHMLpMoe5GKdbmwDMdBiZWmpnQnAg3Eie4Voe2rdwyex2WrwtmrT1DVdqap6EFioesqSCEeFBDrc",
  "key21": "5d3U4Dab6Mb86T4GqQMZjM8YaF8D19s4FMjt94MqrSqS2NwKmod9vfrSb23TfFT6jeCmEzWW7Biw2Y99DcwRCLAS",
  "key22": "65mhVEKJNg7mHEdhUXLUY4wahWuxyohQb9NtwWiPudiLxL6C1PyJpxfECAvwEM6D4PBPPyat4SaGFiYJuYdBipYp",
  "key23": "2ebkqm9XUhVE1tJMtmevtFJgkZ6yzPhBkqtqnqLYtiRbPrWQAwkb3fFdA2gq3MYJDEyeTJxpnbDEtMMmM8D1is5d",
  "key24": "PHbBkaS7W6DBSX86bMPGBZSk6C3tHxEYf9adPh1gHEbdnG74aXpfyYhkrQoA3qNpLjJWHbTtJhywDhcSQqzjRiU",
  "key25": "5NSgkfLA3zwqmtTPiCr9ftU8kRKkiGLktG1BKTrDRxLSSNMmLC86ziff7AXbc4yWZ8fVTQNXHf7ehCPnjz3w552R",
  "key26": "5fzAjRdFC1xKyjKgeuqmx6ZhRkpV4zVJU8mdZ7JErdxfEiKotUKPK4Z4P5wW4pFb3BqHUqkPYZgv7LPZpbB2kBJ4",
  "key27": "YYpeaJsNm5scksCsdfBdqKJ2BKNR1aDCcftJBgmZwfB7iZURZVYXSZ6mt9Z2LuXtzznL8wMJhG3KpFgZvd3HAQc",
  "key28": "4r5nMkht85ixGBT5K5jMgMmect2AuckH5uqT1yojvb61KVLYGJUVVCF8D5a5bmbxLaE4Emdq4GEsoT8eHqneHJYk",
  "key29": "DswShMjrMSuEq7rqBjHasXT13neFdeYH58yahidfVmjGEsJA5spoC5o4gkFYEZYPj28ppFuVnQojgbnANyNd6fC",
  "key30": "ZNXNdb4XMaWmDcsZt73TgXubzFTPDqBopHvkj82DTQvZmuuM4tU1pqAmeq1aoXD6VnPcbi3d4CsqRAKiQqSBuY9",
  "key31": "5Uw9xpDg2RrBmFwEH2U1TBHpkgvr83pmmeCWWTepTYejWYcEQzqB4Bc1pg2AHTmUqf1YAyrStdFjftvAkoMpwR1q",
  "key32": "CVPPKmayn2NaqCSGUon19QJEX8cgBhJjDGei95rfUyDq3ZK1dFQVew98VPgL2JsKsuQ83E7JgKcX4qczURffrkx",
  "key33": "2rJhJya8gKs8nWC31NqBzM2oVWmcju756UCoLhpHEwZNPi8ZfbTpPRW5vLdaaE1HRvucyfWTyVf7Lf2mgAbe1pL1",
  "key34": "5YiYLWJajcGtyqpsGuLayvfE2VtcwuJhNxHk95DZ8ANiga2p9wH3mtXcWxBeHLkRooJRWQuvFgtqjc2UFPBZpeDZ",
  "key35": "3aEeTm2GFGBEP1tsfeD3dqzbMtyjQsj3FdPQaZX1UPV1gcRAdeH2T1ahadKbpGdnZ1frw8hedMQLA2jpVAQAoQkY",
  "key36": "2Kxuo14oJQNwHYzxgdHYdJMXxXfWCnGKgnWryfhZR2vgnfpgix8jGGbhMieUNdJsrHz1XpuA82vwHySmjtNCHFyj",
  "key37": "t3tVmWzLn8xcjYsk7iZXmJmeSSRMxGaxyVzyiGnZWSZFccVmeKL63ZZu4js5UA3V33zzK1VwWV7EUieg6uwgcLU"
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
