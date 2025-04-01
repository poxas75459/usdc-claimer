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
    "2xu7M62Kc4z71QbPhV55q5Yhw14YVZXrnn1Eob5udS7zuQhgD3fw1RX29Q8LBxUcrCVQeg4dzoqZr7CXcLdQ6bSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XwiTJbobUJL7T8zTY1zA3d5cuQC2s5JUvjjG41sVKS5LDHzbcZQwFk32dt9Mj7Xck933GnKjHDKNP7iBBApVmbU",
  "key1": "3EyaHbUrubs6TfhgVBz6ypsUeXmKe56Bj94Rc3NaoiVVUSqb5fAx1axgbQrdmt3NdWN9B1Te37ruJjcgPijaQdV8",
  "key2": "3jDgSbM3oFveUH1QsGpLWJ3wsz67W591HGFc2TTT95ora2X8FDrxPLfB6uquVFBV3UXE4YrZbRGkR7ukW7Kf7coA",
  "key3": "4WPnDcwBxdD1oaLdUaPkXSP85vAemLTkw1DUrCx6Fwzn6PWnQbaA2fNGk1cquEYtD2XjPcokJXtG7YeQgqHT4qZH",
  "key4": "5Z9S63AVQM5LaDFVrAn5Z4cxKpCk69ZsxyoxLiDAnTAt9E1WnMSo5YR2hAJuDr5DQvRLeRAZ1FJYU3iqH6Jn2tNh",
  "key5": "HwEfU9sUUT6mjhv2J6bFufLD5pbJt96XmJqnRTcNNSZZJb3oN2hwPrsjoQRMsjbaR4JVgGYx6cfWbdaGPnNRhSs",
  "key6": "4zzUTK7HDmNNnYTMV9VfBecbeHpbMEPrRGK6z1oopVSbwLHFKtsEKFQ3Q5TuRErPRzmVkTEcBGYmZKBss3qjtLQS",
  "key7": "34tk4k5adPTCjxeA49uhatHQiSViznkshJYd9WsX1AgPLn3vzjdT1bS2FdHFXmXjhNeZJQf5iHeTgEojPvpcqdfW",
  "key8": "G5xh3YQP9Q2Nh6eBxq22Dr8WSfZCc3p32SfSX31FurrUMmx1ZuymrjfYHo7Vh2WZGBxEKcuRHH9tXTnQ3HipjeF",
  "key9": "4CwAaoju5NQoVh4ai9sWRgv9DE72KfDEQ7uV6bDH82jFW4i1SbnZmVHb9361e86Agvz576geEauey3sUiX3Pgw5v",
  "key10": "33dAU5XPmAixb9nWJj35xtsUZjW4RKYUZheB2hxQvMhFFqDxJ4RLFjwB71SruPi5TD3Rs39qF9qtADWH2ghZXBn3",
  "key11": "3ytaRfLvcuWNyyh8tgm4TKmt7GroxRXGmVXWApyTWAdmPUpGk2XaFXqqw99FQwE13rGg7oAJRdw4WyaUjc1Hob7e",
  "key12": "2DnY1qk4eCShGGEeSGAuXz48ZnskwjmLWuJJjdFQ5i5fFssp9ZDCesRiCdmbSqULEGggYXS5XFri1VTncPnLscbV",
  "key13": "3TZ8eS834CFWV6ZKuj8fg2kabD6YuvDJPP1WAPB9VaDLGPUBXiMMM1wpmsmerrM1T9MLciFknV5J4D3bkVuSoiRh",
  "key14": "21JnxoKUmBAVUqYfFRMxwobKmsasD2aLNomEu4LCShKYUsyeAJTtPZ8Boc5zECKAZ7FjjT9jNywLrf4gaqhn7sGM",
  "key15": "3JF1g2VC78z3Nx9frRvrErSbu2myZJtVrFpHdrtDnrHUvfov9R1StDYPngJxcYpGrLyCLhjQrP5ayaexx4ahgP2n",
  "key16": "1JyPZqVDqibkZ4wNRRfDKJ4FGyMxKKP3Uf1wxE6MzMVdUgzvK3zhz6SbxPwjJFKPRp1XkXC7YqcBwsHBZ1Csg9A",
  "key17": "qYwhn1x1HaSbyhyawzgzQ2yT1citkJR1ALj6wGNYS7thNyAtSqQpDWtv8GVMRSYrgTaohk6XFhbdYhTxZC7TBRq",
  "key18": "46J5trMJT4jDKQvNKj5Nzjgbv6CBc3yiSZbTCsE4ZWJS2fUmyTmWirKtXJTdvzHQwkGYqx7dvLPbGkq64qYvezb8",
  "key19": "35VuwH9em3tERwcsPzAYEFRfNT8K5bHnoZ4MY6PACV82PpXpseQZDQtVFUCpaQg5ku3xJVh1P3e4jFScRmNeBkrF",
  "key20": "5ENREEDPPYnDfdL45b87P1YQBtsdwtXfTwrXxP8BTwn4PCxbEpU85Dzujtt1gPd3hA4xGvXMdcomcam4MpW8jUZf",
  "key21": "7CbQean34UPA72ahDGsauGWTxfrbPrpAG97BArDEZ9ZPqap3RGXUsjn7w2fXPW6DxquTam9znoDE8vCamzbh3ni",
  "key22": "3DDcWBRu6ZkqSVE4JdoBuErrRqTrSgifjSHDvbvccMYCH86BbCpwtkCgAJZspqzSAuVoA9sDjMkLNo1HWqt8NJfm",
  "key23": "52dGkuj8VggEin4AT4C2aa2AncGJM7kconqqVZiUWAqNGvBzgBavne5P1Sg13fMPhSVJwBMD3kh4VJ7jUFmmxBHQ",
  "key24": "2Kc7MQk1bfyn4yvEzdLv8L9xrQBMo9apqRyj6nBQX8XUWRpRW2GQXp6bBS8M6sRrhpjohL1bJn9APKis8TWxest1",
  "key25": "5S3c6txC872PqErxydHLuu9F9aaUzTW2tBG9mLwr8JCXbQRaypiSXRaam8okiW6LhoPBECrEzDKUjVxSUDMKud6Z",
  "key26": "2iYXVtkwYQAMT3w1RdmqtXjoAAtCRdXJE4L2EQDocuhA7xz8XiQ96BxWsDeS8UPtXqVXxK9WxHYYsuHFDreynNn5",
  "key27": "2Spai65GEyQYnWrMxc2miGwnUXtVWkiWf99r3SHzJrXuDGF31jr23Xhtj6dqhb8HpvB3qcf78XgT77FQuyKZEKCB",
  "key28": "DLLqXJGEq1yp6gGKuy2nNqS1LVebuxK3Ho7hG3h2vaErpg5Z2EXpTXgeLAZDdQ9EKwmc2ak2dFp4s9A7HgV1n1u",
  "key29": "3e84J8ULCAKKzTrWvwA82UtjdTwprsbSXiCC6FgMUHHztS9BXBmBEvPfAxCfmiYiHvwnkWoUZP67SW1onpCP2Cxd",
  "key30": "2DB3eqEhP1mepmAFK9neeWoWfjf7uYJKRqQrZkYQUVkyxtSsFmwFaN3eReirQ5FmmqWjEfgZKPPzpJ2FyjABfkmu"
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
