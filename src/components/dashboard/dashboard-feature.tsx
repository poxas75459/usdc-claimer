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
    "4q5e2HWe3Yx41JVZTp4LkjZRqTperYf4vidAnsVWYuLF9xn35zeHFTH5opRKhVEUMFxay6HGuXca2JjodYZoMbAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zzHC9qQkd9M3n6CDXG8T1kLKzeGcpWtYQVijw87tCt5oGZ5hk4grMVpjrZ6LUVZcqAa8Ffw72nXY74FtvjR7jc1",
  "key1": "5aEL18pu1EvKDSUasrCspfihsGrQG9Wd29MBfygCHFmzXD8N1tpAfDftu4mk5FC8R9nRbP3P16fHtLyZxX4bEpgM",
  "key2": "2numvMvCKQgztoYUV5GT1V4WgWczVZ4LNPxEH7er2So545ZcwarE2L5ZBeLpBRpFvTDL3Kj5ntV5GCFRadasaRoQ",
  "key3": "43wmM7nUFVrUNEGTV3DembftN1B8KYex6rabGSCcLicNRiGDNt1UJ6jxMPiZzZSen6eZok7AYM1EKwL83GdZ5WET",
  "key4": "5VQ4jHMqikJyZvywCyqHBGFzBPfAh145yz9kYT2TuBV6mcrr4JW1qTU3BEWuMdQ3nC6AGNTyFZ4C1N9c55uhifc",
  "key5": "jiDXSqSgND1gxECaR9Z5k5hUQCuEdsmLxbxYrSLSbwnKQhJivGkxShfiPzBi8prEe9K33ArDpddFM9AaUz7MJqd",
  "key6": "5WBdQ4CJ49v5maVuhxAoApJaj7gQUcMkRPz3CgSgrhRCWj78GDQqf4M9BKzLkwaC7GHY8JsdXGr17AeSMVe71T2G",
  "key7": "2zV6iJDvhJC1z4oDzphJwCaAdbZzCSkPNpYPiWvpHS7GDQtY6i4TkCB5KJx5CSRyHBgFSmHFC2pRBauQzwZfQFV5",
  "key8": "3tZBNZXg91FriouWGMNvh2LRM2DVLwkQR4u3Q2piybAoAMMXvxF8G4cSD2hSKciopHFRci51bKdhLiSQVKdgSR2Y",
  "key9": "2yphni7SxqGNShVnRF8JhpcXA9suxziDM43E9EGYB4LnZzBt6gDaggEmXPFPcyhkm7DxYhdKabz1zYpnb2MP9q5X",
  "key10": "33kyZkMGjP2qrQrRKJTdJraje2sm299brigZGEikDZdckG7Rbpo7fW4c6Ka77m6hLM5dFsQ4F5knuohtf1GRQoFN",
  "key11": "33QY9TBXYqmW69DaVJrUKCf1oAgwKf7ZHYxfCfGHyemouyuUrw2QszMYSreAHVCBbNaqYRAq89npsbhobhi6QVvc",
  "key12": "cXYQui4zKCQXZcptPt1LhrXC3EU3aCtw5Eckv1EhLcX5f52tQ95dVokLoJYJHYGuVGpweYidULBKZu24RNwHYqX",
  "key13": "5NJDntbTw6stFB9PJWBizDgkUeBfi5KCURyy6x2LpJYhBXUm3kA1bGPS6ZyELeParPTScGvF5SDGAUbie8zFb8QR",
  "key14": "5NVERDUEyNYwbknGbq3GAwoUVFGVN8BzvZ1Z75CtvEkWsGJ9gimDq23qTzinsjbPfxWSW6Qug5Ug2odj1Pr5bpr",
  "key15": "3jEZjVLZyXQv9qUHo4EZ9EYqRZy4aTCdNraCccLusmobsxZPVJxxxFWvSYeVQkTH879KzDWVMrv9KYKVJcJ6pAb",
  "key16": "2bqMWndLxkxXY1K6SGBvqNJsW4X2EATSo5oFDzRrxoijNqvr8ohat67aeJFM9kLRFPouLqLDfUb18c2bGa3Ey2Bt",
  "key17": "5mjL9hGtVczSKwpw9ucJJyY8kYPTJqvdGAbdyuRgh3M4hqkBBzadZFmpgkyjMgt2f2KKYGJ5NcYqVfWmreeYiM2M",
  "key18": "1RQwu8sYxFYJjcimyv57TbUTz3U3bLTtSUeTpr3QgdbBuKyatMUbNSTNdNXnLQPq1Hn2XLBsUC6xEerVcbJhzky",
  "key19": "4dCW6LxPJFgu7j62audmft4VHMTnEE7DNDKoUu9idS3ddHwyPA1on8Z8HS4Lv8B83RwvgWT4R3BDDKtBQfNPNyDR",
  "key20": "3f2Zp5YsBsz2cnNJV9uMjvsuRtajqM8zz128YfYdnTwd2PnMJufpFPiDk4428L7P3s6irE2gVxkrSqtG7NwFtUM4",
  "key21": "2e2npB1nPuNcgYQWmXa3U4DYst86Lvrt7sTbyTND6XgSYNB914CMDixhWRcKXhjKPBsVEi47UQLev5CpHLMWFYba",
  "key22": "5XTqPVgJYmw4oWEPC8EtdkvmSF6C5BgxruTHpCKGBverswQ5S4MzqMUqENutBzpGcLHEqu13Y7zyuCWnTP8dVS1X",
  "key23": "5akixfAmWGDHHo9pWE2t5Pesib1SyD1KyWAfNzoPQDujqSmPRvNKvHxE4zZVrZy2KHFrxGHn1taDJ9kc42sS89gj",
  "key24": "5waAQdSZtUJbaovd59ZJLs1cxL9ooNpe5RxrYGmosL6HAyk4YmRZpCAqXcPVhAr9igdVpChM43THuWvn2taK51X9"
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
