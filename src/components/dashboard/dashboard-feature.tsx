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
    "62gam9cCShnS9XwhvPhdNduSvT5wrZtyDQu8BW8s1TbPxWWRnv3TgCZfSbg5Vxm4pK3W5FSchfmsoerAz1AYvHF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CeMhUTUqFA8uTfL69jcahbcjb1jvFXCNKVcaDWT3ZNCjH6Jkc8MEpvvuUzfnPbjnWtFmvoHE6gGgmCwVzamVYnr",
  "key1": "vNyVUNSW1zM9PNzvAW4WvrAFS3DdcVXUuTcDnWB3qtPd3mRUomAdXjuwpmw5W2CW6beJsj5Gs7spRRL6HnhsXKq",
  "key2": "3nVEkqSsEVTN2uYSkoGXBgwcA4V2UtFdt6TvwJX6Lib9a9R88YQf1ziSdKZgnoZbVw3THqUvDbXSt5WcN6uXbLjw",
  "key3": "5BQRLn8UQse54wngVTVHDm7fXUtTy93D4r4YBtcpqAWMoWCzPh75Q2rkUWRXzdNApukCEVx2CrZshoCdzhiQZGQG",
  "key4": "2oPVxtX5RftRsq9GCJD3FvFMV6Qb5fBAwrwDTiQv9cpMHN898GRCBm4rGQHXwM1NKGdFGwyk6iZZ7vf6t3fHMYH4",
  "key5": "3HbS6wcXMYp2Qe2U5RLjwknN1fccazWkRXoRcp32d3BLptPS9DRRUxce4eEBLQkGEyC2x5Vu4PongzSRJtFBDrv1",
  "key6": "4eNXHwjwBXwTYywdXuawR2A9NUu2k67drmNBrjg1kVCyVAFrQwvKhmpWTkp19sBu6uZLUJjtxMgzb3zXm4xorBub",
  "key7": "5Tr4auDkX7mBPeD6Gno3sMha6rBEabwxx28EQBuZwgLu5uDP25PchyMaA5vUgWV2HNEzPZVo76Ft8uMdJyvsDYNe",
  "key8": "5v9Yf4Xcm5rDwUV2y85jZ8rpEkHdgxjjYtbYwvzsdgrsAW1g2vyH1f4eq2xzPFvU9crvex2Fn4a1jKJupDRuB5YQ",
  "key9": "5gtes1XbpDjCnqTLGBhu6ew6Y5YsB7TQHxgBrCmg2s1dsxSUjkXN2C34AL8uXq8fhdWZg4sRVDeXo9N7shp513NA",
  "key10": "3dCG6K3VJC2Rh8X1g9RBBpTwu7CHWZhTDueNy3CAGKXaFy8cATacuTnHdK5UoQMw7kJAxFvPaJwJPxUpV9WTLt3e",
  "key11": "5o6Sdufe6hArDckX71w3FeXPBJdzESWbViieDWeQ7EjU9eS4WzHbbtA2AZtFUWC3p75SiECYTPUxRKmKmoF2u1hZ",
  "key12": "3BVewSrxBiuGrpfEhKe6sZop8xXDNXBYHWDpwyJicHzwEyswMd2Ez8kWxEAP5BMMvHwPZD5a1E2vccwZNnpPSPXB",
  "key13": "3BW2mcxt9Sw2MrmvdKtYPRTYnrJGV89Ha3tdLUyGjamGDWHQwXC1hNwbaoR2nzLhxzLsVnRHcUEBGEtj7sD64How",
  "key14": "29VwsRceTaCVrEzLXrnMtNVSWk1bpF2GZLYbFTVeq7wDkAaTxH9nuJPRMdDGpVVpbP5LGXvxqXU4aYMyNCm9QEjo",
  "key15": "3U5H994SDHAcew7YEUcFRixPmu2w3E6ZV7x9sZn7ZayVVkSK7Eond6jB5xBP4y7GSYSpx8F6ubv3okYcggPUVWUQ",
  "key16": "ArFWRVFnRNbKMeuewo6TmdX2rRSiCkka9ahyrEwUfcKQvs2GFDQkAHPTqLxSJxFd4vmjS3h1oUyqkqGG27n1B7W",
  "key17": "3aM18dZAPcSZLCWvk4nFpwokBsKNpZcjc7xfyj7e7fNZPFGvmHyNNPNnyB1gAaPSj8YHd7Fkp7n6vajbx3TX87Dw",
  "key18": "3uphi56iixEtvkVmfVMQU4i2EZsWpXZHA3ceMJiEajZBZ9XXpFQbzEDC5pnA1iUVHCWe7qr8GUiU3G7KYyVxYsAJ",
  "key19": "3TwrHqFD6AywDqgR9YP184T2RvsoUv91sC2H6WrgAvVe8KNjfMQy5XvoQpVEHxHbDESo7k5oZaxko4J73YL9pxie",
  "key20": "5WYAdvGKczGhr4vSMnrR4DJCzpB2Nm8yG6c2pJ3doSoxgki1BkMKSQHWX2R9TSMTZQ82aKztaxMvQVQXRvR4KGUa",
  "key21": "4yjFZu5uLRtPevmFeqPCPSouP9k4EvqmyNGXoSuaTfVczdtqetZReWd4eDPYpjWSRAN7A2Jjy5gqDLdxg5tq8pxB",
  "key22": "2SSTBUL2yC7mGNR4mkGW6WumwXFjr3nYP5AN2qWxMAcUq6wUC9sxZdSFTbb8cuGMfTNQG1oKnLWDXmEECYgCa7Bt",
  "key23": "5RBAMMZ5zUw7N6xo3Cenp3kodnQG6jJjUJtrzdVWtr9sBXQJ91VhYadEjJtoJ52X1ppBmwNqMWoWtaBmGZr3C5iM",
  "key24": "y5CwcPEpjn6BmEENXFKuYxDKwhGX4U4dzrvaZbAxZXbgjfU1yRmwmMARniPKmAwa4a4gFreH18xKsAxsFTkwdPT",
  "key25": "5g3vLHKNo7frZnZT4fikS94L61TcPuzi27sBbZAm3qnprrAznzkGAg9YAJgU3BSb4ZP9jGuCD8UPAqjQmVE25M3F",
  "key26": "4B7ArLtv18Y63kUSg3k7WN99bpGhTbjaz2CtwSfW8UvPWAxwUcn8RA3Zd8SuEXkx5FREL4L5ny3pYjp6gBrjqCTw",
  "key27": "2PXPuG9rFDHbfGs64CzoZHNhy5v2xN1gKJKjLLyN92ryy2hgvb3HJcLtKMXMAw9sVknHimG7gXm8j1ZnBJRJHGAZ",
  "key28": "3WyzgYrmiFxeY6zp1nEYRKLYfwtJ8fojoYtHXaAd5j3QxrLAogip6Wk1QeXqpfkJaL2QWngaNE3oWyd1FMc2PkqR",
  "key29": "EZToqwm8kph6zMzzVXbbW1GjNSqtci8HfiNynjmrcQn1q56u8fNoKxWD7c8d3T8XYfra2q6PqZmXi9ZzzKpPyNt"
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
