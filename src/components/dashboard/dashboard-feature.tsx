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
    "3y54cVPKiMXbMjsfLz2urcwYo5tKcgiGxTnYGKXb2CWPQCWqMn2Y83Ec91NySeayoNC2ueTW2PcK4nJmGfyeNBD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CnzTyXe5tezyXQMbQZ2DRs5kJ4zSG4BvTvwwMtbEkQimJ5ShHkgPjEEKKChs1AhemTuqYUxruoTUzTXbvXXPWZM",
  "key1": "gtmRFwgMc2GW7HJYhCv15WFWTTVzSAmC4ACybY1UcAL4ni5RdmWgsTa8s93xw9CmHEsMnjdmH1b68YYDU91gqst",
  "key2": "3YYb9wCv4CiSJJR74Dqpotqc2Nrnf3oL4Pvo26nM5MhorSQs9dZhcUUt4hDqudqvrjAfeKbhmRTsPxp4dgcrA85t",
  "key3": "deKwkcPyEWhWS1LMHZkAUXKrdojRu79t8KC9Rk7R3UE59u41aqK3bsVdsDy1KLKHXiBJLK8s85rRKN2jL4RHTSv",
  "key4": "5RYZaJR2SPchm1b4JWDazRZJtQ5PH4XVEq3ESpR2j4nDscV9kDnA4kksNcxVPZ1Ngm8ZBdya9Zz8a3BVPYgqUwYU",
  "key5": "3WBDUFCWLyYqchrK1GS1WAEbd1Zy66nFfc3XfJMPxdu3QhpeSmec8TXoN27kGGnk24W9acTh97EWTUJLwXbGhJqo",
  "key6": "2U4XTibJb6xTqw7gvw1KDnzF6vX6AoPpJfzAPzLi6d4vN7cSU3jtbAfYgHBJbACcdkQikDfPXGa1rNJyKmRSZ23E",
  "key7": "3cDNKAnnL7Z7p66267DDJNTnBGsRo1nyUYk6UZw4qRhR8zuwH3tQVFiCWcaiNZgo39xEgcZmefzQRUHABcgeZjw7",
  "key8": "27isfsgfRwea25ryyrZVVahayTEi8SXLm9NwVmRSMjTcZ77XCxn5Uvm4f9h6iBTsiAHqPshGDbE1aTyGyHPyVR9G",
  "key9": "jAa9tVzrR8FULqGiieJtJnfH5VvhbYWmNyqtEavrSBcTwufJZUb4xjNam3QeCnustPV394vA1V3yrNoR8cvhxj4",
  "key10": "3UppGm9ohzzbZqQsPgfVeKEjKfx5zWg6CqiDLa4YXB7qzYmtJEqT8MeMwznbdMRDhKNcdq9X2sBGdiRyFVtedKoX",
  "key11": "2Sy6ueZkzDUPuoH4Q59FrrMQqgz6bTq5n1K1ZeZwfZsMWsftuRMnmLBu1jggveggCSurnSHYthv5rLjWz8PRYdkg",
  "key12": "W66kgkAjoKdXLgDbS9KUsXxPTRP6m72D5zMWqHM8EZdZDiVopgDRd9WPNbPwhNYLdg2nwDyfS5GWerUrckTbdkg",
  "key13": "4WbBmvHFWVt3VewU58E8rPo3DjPJLvFw9vexb11SJM9mu6L7NNdqeyuVCiTjmXp3mDEPxAZscm7K8hsbBmBHnYgY",
  "key14": "NAL1hcmuHwCS8kAx9BL86xXywRv87ADpmEoW1RvzAUNhXCn2hoQv7Ps8JgxmRyuGLHnjrqspDzgozy9TDGL3RHA",
  "key15": "3eVQz8VsJc9G9JfxocpXt7HC88f9NCijnv3zo8YtC99Pw7SXNxcDBGDURMSYbevhHcnMhx2MSYw2r2J88pLzQBjj",
  "key16": "RcXafh1voM6CdLy2mWogJeADPkFRRHDu62b8Rop4AkGozbGCmpWJCeGE5Lo3nPcREHbA1z365o1XRBQYJKJXfPc",
  "key17": "2tKhPnDd1umF7HUDQ1shjh1mVJSVm824GcCWZHggePnx36bfWZoJeC96TVWi1Nw6kXnVdjYy1bQr1VE9hFPwUhSf",
  "key18": "L6DpwTQEbGJG646jWdGrHWABSoaudt1HXtSvZQdVrCp6aCXXYF89TFuH9wU1mzipfR4xeruWemiusggbiY2QLBm",
  "key19": "34kpV4SLsfTkaaKq5A2T8whvP3kRb69PAWik29Zg2e2dmW7W4W3i2vqPtdAMWSrnJoxYXcTKjJDsrP3C7GyQ891B",
  "key20": "2haGiW4iiNYACcRKYWURQYk3TCLeynJLVR9yF4Hf2mrGuAEUiRwtzWetMmFpt78HJvz5zWWsdLmEZt5Hw4zJ7ZGH",
  "key21": "3wq85kYdJNGybt7w18CQiYjhmKUbuxgF82xguevRg6gjcvUoPw7feeiBq84LSbjs4WK6Zs9hN6xUQaTNCF8BYRuA",
  "key22": "4RwQVjKpprouSoN52WjQyQ8C5sCjA4Wm56wBtmcuwDmudoMNoqGFCoSBFQFXj2CxGW5uDEC5VZZCJ7cDZDkYBmab",
  "key23": "48a4xMzTL7XHydg2PbFfgy4hq5MgavYzJ9a2Wdp8fxq6NszyvWDU8xSTEWnneiBcDtSAaz65EfNvwME9enN1BVNn",
  "key24": "45nf7a7DGEeegVDea2VpihsTbftXAqJsYcc6FZaHfFZR38xURSyM6N216KA3Nkhmh3Kcj5J1QRGjnzANpMJ1tbw3",
  "key25": "674QAUwrxDrLU7TQ4NuH5YK54Vo1Y94CK89xWvASjo5nH8WSzzpg3VZUneXBYgGeoSTaSAUYH9jR9JCaprXo4RDC",
  "key26": "3i1vckEGHxhpcP2vRAuqzYSSJqErARnt1Yjh3Jcf2RLTPnehdRoMqQemZ1WckbxB3piS8wXBgrjpksb7sdXDyUz9",
  "key27": "4YKvrezx4kVtWgtdS4oufoqjF8EdC3SsUDgTLm2av7SxQZjbd29HnEhLNa9wYVyC1hq9ohKhrrhUREdf4JvKygpn",
  "key28": "Khk2FgZRzkgdDBMvd3kExxmdLGmG5RxFMt9n3SMG2GnY9B9VUuSGYAcDJWAdKQZbctmH1fJnCM1YLpEMP3L6n8c",
  "key29": "5sdBZoQ8JBLwops9ugFFKSSKD3oLtoz3XQM5he15paCK2wM8rBhpomwaNfFLzdaryERiZk6JE4TXUQAxQfRV7Pjn",
  "key30": "3cUKZEQk4SPbUbRtDgsTgsbBGnECcr4TtANwWq7LACqmzELFoSMENmScrcnpEq8jzPNA5nb7tVVT8Eoo2qkP877w",
  "key31": "5ASzdCGL4iKFbFfzxKZc86d5NxPRUM3mexRvXfe9RBif5WmfdLMq4yW7Fkf6ZKXBd5ANGj3H5RJGdtJ9J3yk2B3Y",
  "key32": "2qSRpzQVM9xgUNrNcmHCu3mH3mWNfRob2apBXEZur8LzLcW6bGN4sBzK5E9faJShmPr7nYVtMP8BQZcNZJPDZzb9"
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
