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
    "3dS1KPZKGZmdwBdJxdZ4DbTfJ1dAm8zSXDYGLtNaF2DABQhZRNCT8qqAz1eLGYRreceX5H9fHXmk8PEUAU3RUpvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w4hV4Wp1fsejCfBQ18U185uJBQT5fUVC9QyLzJakf3ExSpqjHYFTe4iXdZ7uQiqkZrjUSTbYmgpeTZzBec5edwU",
  "key1": "2N3ExVNg3mXcp5f1XQGirUZi9NibyN2jkCsB11s9MT5imPiGtso8MfLdcifm2v49rb8vTbUF2xRWr99JdZeQT682",
  "key2": "5PTm5RoQhXG6vQkL97gnhfnc6qE2Gmna4FBRBXuRozaCuPhBHvBLwjmJjgYanF8kfhJJY1JeFobRfSDpENXBG7Mc",
  "key3": "3Lym9EVYrSmRXVPCYYoPBwLq6aGXAWSV5GoLAV6s7u7NhyNzcW5DXxZv88S9wj7vbPrrUi2mGTpjNujjkPzxDfk8",
  "key4": "5dBcmF94uMrBKpBCra7LcnjvbNyEyqa6Uz1Vp86USZgCZEHXxngCisTzqK2SvgJnAvWcYiZsb9o8fBRjaWmDfaPv",
  "key5": "4SjhdRC4ejGWXLLHo6K9YaoXpu1Zdq7vBAKjL6Q5h8xHFzfFz41fybZcLvm3ZtdGMrB94L1FXs5dYMDPEnZbFAoe",
  "key6": "4sAXe5ezWzSbk4AXZRdNTyDB8iSHwYAR3yNU7HehUTwak2fvZkSRwgu4jfscEihEt5KcSmCu5r2yZ8ZUTei7kNkW",
  "key7": "3D4a651mpYhenVYBmabueiUE76UTDVnQcLvq13PuZ6u6XXSTTXp2mcC3cNc3ETfHhi5jr5HsnLf3inXXxzH9MmgK",
  "key8": "5MZTh76m8hs8TpK8twoSXZ373dz7YMCEwVwok4dT5Mdo75Tk9Zs2ydDDeor5ZxxNuwrtNNWJw8TRojFEeyztiZBo",
  "key9": "359LCu3RUYeghEvFQqYirpHknRzRCf9hFB2iVyzyWgazah2pjg3fHAvPHvRRV7duos3n2iPxD9345TT2RBsYu8fp",
  "key10": "5oU97xiLt89Fv3FKHTJ74S45hKraD5iwFom89SY6nSy2AGwUGBP6ERj59J3Xab2sQf91UjHbewD1PPYb5qCykbiR",
  "key11": "5DwkwMKL85pnsm26CRWj1Lpz2qn19pmaX8Xw5kTkBQfoQDw9ewSvQwK8vdngngw3M2wYNAwHshsnh5wW4UwMSX4j",
  "key12": "8ybk6nGhK2BW85x5A7uHjq5SyFVpS8if8H6v7mX464zDys13thW6Wzd86GDPJtntaKCJqTth9gi8gxZ9QuRFLeP",
  "key13": "3xg1b2zp9ZWWbKzYizeNEarwe8boXYoeDkBw5jtip8T4V9HDoREHSNbLADVAhuoSLFmAajLJD3tbhDn8NkNuVRTD",
  "key14": "ZxdYtDADkqcXvbLXX4uHvQu2pEZEunxrg3ziegGt11H26DyEbMt1apHLrP63DJECGJEfny82TBct3t3GuL4sjwR",
  "key15": "o2c5uQPrBRLqNnRwMcjmNejnyZmmxjevB4VEqf33kX9PcTLfCqCyGZnxi8GSFEez2gzDpRHSEvpNFKVSucKfZjy",
  "key16": "C1s8ii117C4EdzXUZqnvUTrTKZ1vHJ3RdQTi9GkmgH5RAt9tjadfogioKLvjK3pt5n2eSyDL21duRkzZJ8vLA5b",
  "key17": "3n5d1XNhUmzu4yTYrHp8HoNcz7vY3QLyNc5os3pS3hYFmxjPvWg4Nnog2CaHjeHtByaueGpaoU4hovrCDb4Fm9ea",
  "key18": "2YTKCufjU1XvMXV33GTwRogQXWqhhzJumvnSSo2YURwbxhSndmWP9ogARy1eBgxpCgRcSjgKkPEdo6w93Z2aFkVj",
  "key19": "tD5E8vnojXzcyhtGAqZSnStkgohDNodUhMwFV9q15QwDeJcqSPMP2E3xXetYA3AqCsUBE4NrYNCcHJWqYpn26NS",
  "key20": "4urTMVMNVX8JxJGy7kd6riF3BP6ACR4Df2TzDGu6wqNYAwa3v8djJ9BXLjtVUTRpMYGotgpvHUieujmpFKYzpi3p",
  "key21": "5pxDP23eaNdZ4H3g7KWLPFiYbXUHVdvaHNHnXc8oqCviDSEn6hrPNhhPkpyxS25xMHZn1tsSKkdiYwS8KoDrQ6pf",
  "key22": "x1xgsPMrjQ5B67uHskeyMkjUUDh26ApfK7hXBM7PQadeEarAxvedvB9VYKAAJmcpd3miYedtF9qeQq8ftdcZTwt",
  "key23": "CmHEoTbGoLfDtEQRqwdW1Km4oRLSy5SNzu9v7Sr7JptGuFv2JYwnhx2V1vnVdL1APKKhdre5rsrnnqHE5xDSFsg",
  "key24": "4jHRb1kbKKAZi2WjwznsgoiTJGx5BxmyhbG33EfwztKcc7dQtYBtxoN6HXJv1ucAfWSR3LtJoFKTBCcKDmXqTAdH",
  "key25": "65ttxc2uRgzATYrs7M4c5SforZaeW8hsxXVwPYY1tmfYUfz2ZYpSHdvHsaD7D62LS1izbrcjMD3QpWvy82tBRwsQ",
  "key26": "3cqeS3QvsgLSzc8bRYbhrd3YNAHUQyzescbiEGFUPUmAiV5knXfiSCi9Yjfv7vAED9R9MWS2Huh5AgtpvG8WRBzv",
  "key27": "3WJQtAH7yHrKtdvwtkX6EFQSSVFurXuCy2WFRE7bewchGwhbFTERwmNSdnfGwJ1S7e6Tv8cx9gQcRmrvsSv1Z6ko",
  "key28": "56CFT3tgpJtk3to8twEW85M27qG6MBcFUHGjuGD5iDMAf1a6C2YjWNuVxdDX5RPQz31hLPbVtmksSd8NLb26gxaP",
  "key29": "5JRJRvvtPiEkzrAg8k3M2naJBqT8BQuLWmwBvdtQkEQ8GjXNr7hACvaagJrtwfR66E379sjaW1b18BBjvKAuC4ZF",
  "key30": "pVgz9ECHhwdzpcW4wvFJE3a1wB4RQDV6ZtwQPhmx6fB7WRx425jnF5hZbxwezkjP7tbyDrEyWxsedwAEuHtMq5m",
  "key31": "54kYmqSwVZnixH5HyyudzKGMyNEVTDgjvHBNrfRj8v8gRob897Q4jw3bpwxAx85PhnJx4zeB7DDNKXhfCTztHYkG",
  "key32": "454bCcqn9XVPHwbRkY4yjkdiv41P5LVHx32aTHRHzrL97bUaKDkkX3UNsUdfznZyYEopw86nQ6WSS4TgTgzaVyrQ"
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
