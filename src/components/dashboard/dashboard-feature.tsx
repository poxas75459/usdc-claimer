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
    "5prUrdGMp5ojg3HCeVzwSuJWFgjCwXsuC7xktY2Ep5JCfD6VdP4xehgjFWWYQnKrHfMmeerjeBXQ49BXUmpk1PPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EPTG7HWTyxRTwWC4FBAjsjQu4WSaUzyo2cY1JkWLb7xFdwK4pHW4ttWmrJH4BsxYVcBhxBCFQyoEcqSQFsrotCe",
  "key1": "s9gtk49TiGVsovS9WcKHfCeb19gBRDTCDgWoBddbqerJafyZNqc9h3eSDoYDRCwjq8Lj8au8tp8jFSkYqhPSLfb",
  "key2": "3u3vnE5ZqmV95Ju6E5uzK9bvevn21vxatype3dqtt9rEdnGrMD3CPz6Dxg6kYUdiCVet8i89Y98BZufvVxkcyHY4",
  "key3": "2mybmj18sqatDsDi3ejJgENjusLpX7fHTnQb1dMSfTxj7qFyKt9iZjmaSAPPMxYF2Cz58mq6awdAUCa7ND2xxs94",
  "key4": "5wpmb2LYjnUg7rgaHiw91uNkTTdJuS4Lcdqk7rJfhfPJ5V6UVrmyhmSXpdX4WXcTgH7VYtm7XBQHe5eJnbKcjKvs",
  "key5": "5SWpHHNdPnuThqbBKdpjQc3YfUkBXP82tQChfuoRZh5QdeauVjd2niGj8DaDUenTsKwxKWZv3Su9e1iJFeEe26fX",
  "key6": "4V1EGbX3pKSzC9u3TGmdQhSXsE9Je9iuqRVkcwvDjZxPqcXdTubKf8xg3QoQdpCaPkJrAjrnoU7MjHLBADZuficg",
  "key7": "HF8x8K5RKz5oRqP9QRc5Nbzo3okG32579qbeNXJZmPCxgdCpBG7DLfxBHtdscXe1eTUCJzJhWdmdYydQxYDnxD3",
  "key8": "3U4ou9ThV9ZMgswzqd5kWEJNZYjfB1Rp2mkX8apBsm3JUebpQjFyCGGCqSN3pLEw3d7zicvt2X6BYtmAtBKEbcAW",
  "key9": "3YxnhQyX7diwLaewFosgq6GmVSXbqMWX2QcZoJ6imYde8GGP7BNMPXKEwiNMD2MskUtsJbmVbqfauKM2RcrUs5Eq",
  "key10": "5SzqTmDfSBWmvswwk5AnK5qBN5aDLuHWcZcyout8wqYfbjPQzrDPt99mxLHMTU2wV4W8jWqLeA1ykTDqFtMurvwU",
  "key11": "6vyQbSVkcG2GXcRDmJKVtCD5bhUwyxSu4bVt1ALdwMYe2Zxa7ndV6pfUqyrr8BiEXvUXGgQtn5BNc1vr2P3Ay1T",
  "key12": "5TzG7RELBkaNDmcdMHn6BWtqHzXBViQBunKMdiXHMJDWptDj5tcoHFwonevLSWQ8qRsPtoJ8vtk26zrKMxtsiPwF",
  "key13": "gxe1stcBVYhjTcS2TiveTzLVuRwpNhy2gTvrsN9ddz7zBqYKMYZ7TEc5sVQcEdEsjb8diVthbLo4UAdsm2vAH2a",
  "key14": "5xvw5G4p6uKLS5e25mC7V8pT4NvbGNSwADFqjnRoeyJkVFvkDxRmUMDejfQGQyLK96keUSqz2kAdMHYmir7Ea2Jz",
  "key15": "4ur5Uvf7WAJsc3yejh5j66xTJmRYyotXanZUVxJZaY5USjZeo3ozp6o2VYU4vp1CNkUYwERVgSMacuZ5MbpMDzoc",
  "key16": "3mMTe21U1h4GbFjxp5T1LNDV6SYheXShxrKRSpcREYPxbXLVuzEnLs9VqLWPARYirGZWYsZN41VHAyUnLVaFN3p5",
  "key17": "4NWfsFsK2ZeADUxQZmdy7MWsLdjen5QRVUL2ULPkJ6UFyebMVbSXjS3GLPxs1tDUgjnUm6kGjfAD9fmXDADEYhc4",
  "key18": "3iH6tNeBLw3AzfrWzUQstrtUWvwvLUcuFwfWTpzMxjs4M91DDAfxQUH62PWZhjaV9f7B1DCCCBsvWavFDbYvQ1Vn",
  "key19": "28H24BzwBNWA8npQY7iZuhoNi9ry3sGULRBUuqdKZ2udW3ap4VsoQUjwd9wPSdxx86SGG67myY5oE2441mRfZRFH",
  "key20": "3YcuD4BiobaxCfiX1tsE1ZiRiCqVbNxkUAcL7PCebFxYJ49HtYqq688U3B2UGqyYZZ5QQpESMCNfxE2pxrHmVsjB",
  "key21": "3zKnZnyfDwbRsJ15SCA4oiq9NvB62dRagCb5ivx6adLnkmNVsGLBC737qpyHYk6fynEi2P2G4GmtpG4vQgqrtC9K",
  "key22": "d7cTJ39cj6ynoKBKsT3yMsqZChZrCF4HqgBoqySWA3cKnzU3XjLQhRkLy8yNE7wTYLz7g4fWbJ5azQK8kcyA6vB",
  "key23": "43oDQ1PVk4QfTWUUpVTNSw2maaWgDGTDEs87k3puaRAjCSiihrBZUbcJgNqRKLmiAz98cRKYRvwsrcM6BqLKmQ6",
  "key24": "2YX5v1iRkYWd3xPwFYwUGYkZtaRSwdTNj61T9Ni51mkJpfubsBfiNjGUPJozTbLdWEbxYMwZzakiDYmW1wM9pw6Y",
  "key25": "Qny88AiYctz3LmN4wTezbnp1ZAFr9wBNyiTCVT16bZCYFxBw2E9j3LKtxfAuV26wkbBj6LD6j814wGtFKiAQYXT",
  "key26": "2EWKDXYMFr5F6Vz7kNsAxhB6dqm3U2asEgrhwpkrwELs9wzHAAcXigiEjiwimspyrxtqGVnD45dy4AJUPMTYtJTs",
  "key27": "5fwt14YJeCDQeVGfrRPGcNmEsYMk5j4tnU4x2G2XTKSSCMMcWACcfbAK5WAsGK86uHu8mpxom3EfNUQzXojDpdYL",
  "key28": "2UUrHTpAiBY97J9A25T2cwW638exoT6cy9hUx7xb6jbR14zddYFaGEmE83swap3PLg42pwxyKLyKuxGhMmmfTY5y",
  "key29": "2vUhWo7YixTvUE7ZzWGzY3BFbpwKcai46xtcJKzXmq8nxoehyC81KKCtU5DdRHgQCTjmwFovuenBhnqBNw8aHjsT",
  "key30": "3EaNs9V3HvnbPALo88ccJ7aUzeTL6yDckXeumGCkBSEEgyStGCz4VNg94Jbz4QSUvFMXhRDQH9CFAc4NBZzFYu83",
  "key31": "35VFAcDbHpaJos8ZbCyZC9Dgij4qEFzoSPEs4NsJ447GAAZmyrtnW5LEF5BdytdJAprdaNuT5vBjaJmnSZLUXgMM"
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
