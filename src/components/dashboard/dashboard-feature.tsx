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
    "36SemKcM6Povbrg8a3fjK9Si7d17x1a8Xap7s228d6L847xZ3DSDhCb4xVj3X9hmhzZDjkJ6LPtq7r4KkWE87Nxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3Q4rLV4pbvkUooy9cpUgitv6226xJwwT85yDDhdjtVCXqAWQdRwEccW4dyvXgVLJb2cpKMFM8ARtEtX3RTNT6L",
  "key1": "3rLEfTRovnZk3LJh7LpzPHWg6hjSG4wE7CrwWXA2vkqMfoPuZzJgnBdTMg2ut7dQHemWSSuiMQpdb374tSDDR8XB",
  "key2": "5jikZV17rasNnUgtZqnzRGcmLgNARmFSkje9GwtXiXRsCcUznsUjVx1wpn6VjaZV8Tk2Pp48Bk4auxtuUmgDLtt2",
  "key3": "AS5nxgVdcu6QeCB3bpRkUHgthpNbMMAyMgmzuQMirCrSGUy6ZAbDS1U7w8cud9jTss5Qk5oZPrfk9eB8r82A6MX",
  "key4": "4pE1b7ZCzrTQqiP6XsuPej8fQXeCiwuav9LAXKukb4VieuwuQ8KFSBvkyY8wFX1PdURmvZMHpcobi2C2Ers4FGYC",
  "key5": "5jBjNYBBvQcfoEDbkuSFj362AvSWGE7jDDpjmAxWaVFyHbtxUN9ZBEWquE2W8nFA51ob4ev859Yqz5QQk1Y5Ywzs",
  "key6": "3Zpj7PmLC8iAzfAjhsvDW6FJLFKnmMcCS4ATcUQMofxzfQFVtDGELYNEQkBy8d8YDutnciUPViyY4TpzrQrhtaH4",
  "key7": "2ReevrSjP3gkdvdsc6pHKMZudKdDbK8arnBNUJmFDbTu5pYzUpsrea7qJr6Wofp9NPA7g8GfPNnsFCrhRMgsZRQk",
  "key8": "4bDhiuiP1tQifHVrWGC1WnrFkvoosWTXTTitFTEFzjieA6239bPNqSgzYzoJmZa8oVm5dHd9JWKtrTmEji7APyCX",
  "key9": "31KRTHtbSnNhoQoFJUG1LRUwJfmCfqhu7bcGWJoiP2ouApCQWuvM8PNdo9hvDMjSb9o6sVtzsGKzMerXhpfx5G5A",
  "key10": "4mkcZJWRRT3KvJTE8mB1zZWeRgctzaRo8sgtvgXtNXqweRyujCVpke9tnvFay9GdTvuDUtXv1ETrtcWQnkS61tyK",
  "key11": "3YuXfbehUTxRuH12H89cqRc6rV38zcUtFVHq2rWMsrgXhVmueN4uZ2EgyqayibFNA7LBF7RJwd6seN7mbUYZhSn8",
  "key12": "52JvFou5Qkb9EUnreSKWw1hNbaohDkneYCNqM5rH3TWJ91MnFDdhiqz2VK8oLpGkXUuCZmnxUQEStHcxoc9aw8Un",
  "key13": "2BhYF3Gm62oMsCHScY3Pu3kCuURm5qZ5u2qTNSBFqTBiPRH3Sas6fysTUPSLzTSfgv7H1QGzLgGq2AyWU8bMQgnj",
  "key14": "4asbSuC3CXx2RU7F95eA9x4igkGdiJjRcpHYV2hXAh5qWg9XKmguL8zD4kmRJ1T4SBRm4bwj2KjeZTj3cEMzvbxQ",
  "key15": "3TtBe98JT5ofZ2P6MPY8ipvsNDUyQDGBtQ4KLqkcmSJbd8snimZfBNihX4umKvKpMdhTeY8j4UcvnyMci5djdHNd",
  "key16": "4BxkeVs2eqqGABFRY64QqGBxfrPxoV8LoJjQ1jag8wHMT6t3aGYiMZjdMtkHPWmmrsixMoicU9fTMkseR36q9UaS",
  "key17": "4iKMUyZHvQmfzjMwBPsWwrHfWR5q5Wri9T84BjwZYRsYgDX2cfxGgHoSAm3ZnKaE4MCwwWPSd84tTQj1uKFpjkfh",
  "key18": "4sKT1ZJVBcYbmAzzZ1vRwX335nLhf5e7Q53UgKxPeTAAwjWvBjk2QmcbQDVzQzteh7GYAzjKsMnWiTnKvareUGvM",
  "key19": "3VfQkCnA3My6XfZuPKkSVh7ShRgBbD4s9m2V22NZ3RJcnVG858T5M1EoLH9BMNTN5Kud3f3GkPWyDFcMLRJ5BEgg",
  "key20": "4EwGrssu5iQJ1DKHxTSfCvNjH2G3ugHHzVybuYqU1746VwoFhY1cqf1eozpRbMpHYtHD9wdtfevoEjeVGwACazSr",
  "key21": "Z5D599EtrYL8VfpzhaamMeCK978ytjLq3t6cUwXzo56aG9GQtTuDwEiDp4trjy4c5dhWuCDyXUBqQbGYzrnrWrv",
  "key22": "5Ug4Jw5RN41BcDxa74Cfx3PFP9SemWM5bx3BKYaAECmGi3bfhdUNxskA6Q9pzc27CRnYfjmayr1GAtjZz6Ddq1PU",
  "key23": "2HdayP4HjkSmExXLXPeFMLLN8HRsVJqYDmvNCpATpt4WkAj3K8cf6gzwi6BmJejzCHLTcaS4jTpyKVP3K9c54tRN",
  "key24": "2gFVpfcQ3mWHhePF8qaDq9p5QSqcDgH77gfXaQvHEFVFXGaWB1o4WLH7T6i4meqR9AxuUMA2svCE2Fpfcp45nrea",
  "key25": "5A1TxoMkjwyhts5wZBRiew6czBMRnHv1Jd8dJgHhtimjHNxU1G2L7hmanonhKhM1TptVS8TUKD9dUvSpRjRxyoE2",
  "key26": "3nWkRkVPrnGamNjU8HLL4i4ih7SywF2wxzPJHHpC8pnEeFBEi2DqUc5o23LgxRqfgxkFqjTGprxHyWEfJeAsPonZ",
  "key27": "4X4C8s8AdKAKfuMcbXxwpB8v16qd1Xcge1RczjnqTP5dF49DQJpVcQaLG55TLLKdG3uegvNeFctZ6HCiCseAA64L",
  "key28": "4539AZ49wLt688MzH7uRXz7RADXzuSUR8puWFUpcmWi8QQjd23TyMZgYkydZKJpUetHuxTAYwQDN5ZbHksawk8ap",
  "key29": "31KqvWsLa6JoobMc7apVwu3JVwrPRKmgh9tbTzS3kC9t526kF4YpX6MF1te9k89gQAE7G8vY5sW4MY3E1NjMHLKX",
  "key30": "3p5sRHy9yo3tsBoggjauvvQtFUrQ31MVMTGkwTMkEoHAtB8U8bY9fbfcDYXthvi8ed4Pad2Z4JvFqZrBR2Wu6uEx",
  "key31": "4kcfB7ZFQh1TV6ajdFYyH4kcjcBVeZHCqScyP1S7hrfqxRBMfxmWZ37aew5CphoiP8CQVMAP2BtfkbmCWxsyuBPm",
  "key32": "64siaEKsZ3Jiam25p7NYCUmYEskixwKwjXayAFtYcMvUJc6Pq2J5z9c68bH1rhpD1h3VJ3duCZPoJU8kPbqti1f2",
  "key33": "3KPYSxFz1NscBjU1RfchEEGuHe1LxeKKzzcKpT1SYkyu8EaHmmiGB8n9noBTNfydFYqFv2VDB1B2tkQYbXqgR6WF"
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
