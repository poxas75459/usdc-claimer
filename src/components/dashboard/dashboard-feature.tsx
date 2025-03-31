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
    "2HiXDzA3eD8bMUPLSauembSu9XvPJAUshYwMrdstG6arzo6M2ZEfgiCi55bkBkYACwHM3Auo5hCBUjgpEPUi5YHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ap4uMBdJh2DMP9XdVUTeCzicVpys4XCtYmnDdkm4fiBKcAHc9oJQg8sTAZBNgGRGvGWzqmfMJRsaLinWDeziSKE",
  "key1": "3Z19rZ8N54UMQYUqLCdLCcnfAziZvKn7tyRb4xasnChHRJRHVFMt8Wvxef7CZp3qrWpJV3iHy9Urj39nEVXtMAv1",
  "key2": "58uKE5wPBWSycuJaofs1zooztdgKm6WCbVBJ5rz3QA1Cbm4teGPMqKSwyR1zvnMsgByi4ZTgHeGeVmGUMTemj7z4",
  "key3": "3HzkRNj2rTSmzs3moSY4PcT8PVcQCFLpcXGyckWFq4mP3uo3fqkksEWbCcHCLcoZKHZFMgmU8QCzvb4cudJN9TRJ",
  "key4": "3xJxSrLimUa6niVma52fbyZVsRr6QFVimSxfUTLJMJpwWvMcw5uwGqZUDaYYMGgxmYEoqZAhHxQzkVsoFUCz2e1D",
  "key5": "4MEUg9y6cnZad4EBZa28J8yNtWJ5oUZF1E1DQTQ6kHNxbChb8sksvpXb7sQFYaBYTcjzELY5zb3thJa1AStjXWgA",
  "key6": "u7Z5d3BmoSwaPM5S1tYHZKSjtrGA5sfFy1Aimadp9YYxXGLMJLZYszh4ZU3ZUBKtVDFbZN7a3ZLjHfpNRJoKoA9",
  "key7": "4YG5umDj1eeRgwdDtcBupBsnijgQY84hnkUXogucTDrxCdvRUvGDikVEemjycqq7M72qKiMJ8NCcaJPZ5nkmNtx7",
  "key8": "5KT4jJBAGPQQhn4WmMxg3gEvB36AA6xuW7qCDCT6WChHej5zZ8CHPwAkBZ7ExbfSSjunAhzoXNjviQXeUV3oaGQz",
  "key9": "4NqKHn4csZmcMgyy9WjjZfFY3jnmkfcVLHsENVWWviDz4eYPgLAkEToUhot5FeWnod4xKm2B6LNGK2WyJwmkf6vX",
  "key10": "2A1ZxUrtboU1DCYCqYCt6AxdVBAJs9dB2Pr27jKXV2cjTUtpfo4rfmPYDkNsJFLtjUn3wK7kcFJWdbxfSSSJrxST",
  "key11": "2dJPK3dqWPGb9NdCTwTWokqahcR1FHHWHMywAtJLBbE41MUa7jhQ4qPwk8pmHEoHps9rQMfm9Wy74TA9m18gvuhB",
  "key12": "3sVUaFd49k4MmYc5wiEmRU8RABXJsqb6uEbXJ3v7xJ2t49dH8ZGZ2Fou8JLgnSyhQZfBeUtMck1xDqGqBjhPno6E",
  "key13": "2ZWzJxtZumDhdG1seFkNd76oyDASJRWw6KESEZGSHUXauQa89ApsMp94Cf2r1Tn79SaE4YnFUrjoWrRtGr3wALK",
  "key14": "2k5XUCzKouhTGHC9hWxujceADnotV8MxrSGC4BD9sgb7KJR7Aw4cZM4vjAM7mBxsJKJT97nLJ5mRWA1JZd6CQ1sA",
  "key15": "2RBrRAtPbz1KbrWZ5E3AvL4Ays5TB7kGksfsYF6UhV93wGbqqAG784YMVxDk2Gzigii3AdwuN3fwzM2xagT7urZg",
  "key16": "5GjP7nu1h5kVeXyLc16njJ3hcmQEhVzB4woB2yzTxMk9QwaCw9X1h1ugkjdL6MYVbWxqXKjyP6Dm3s1EqCktJJcM",
  "key17": "2J85NHiUHhiHPNayTf2Ngk3j86SVrd5bv7bAWNRD6ELzA271h4iaYBRfJ4cuPQpNpkG4kuLuPDag4aCEpFtSJCag",
  "key18": "41nPmnZVvARCUccnKT2PHqATfHVdeRvhu5kiSD7ntSuuahWiuaY5jeyXGnaqfCSYHVRBdYgw3F2GVA3U98b5ZfQg",
  "key19": "4SEocvRYvmpeuvMNgFd6WmMEzLpRnouZMm3NL2hS4ZqKSuRuA68TbGCsf994NaTN3ePVyM4QZYS6GK4dgb6gkx2M",
  "key20": "4y99NV7kUhNeE2J7PExmQz64ukLz4dJAeujFrfknjYTuwCwY6QkQoSRhyX8MqHzDPEjDBtxQVA72dp79qUrW8dqo",
  "key21": "3R6isYvBNqb8u4ctMjEE4MFB1KuFjBjSgbxB5J7BvyfijoXu1ABc5ZPauhfLEzFAo8557n5j53WPACG7s9oaMZgC",
  "key22": "3fqnX4ko2PeuB5bEhnTXkyoAL7U3rBpsDt17tHBcF8T6m2RWJJt2hzGSmGPKu5XFZiRFDLaA1iizZqtHcssnLCzp",
  "key23": "fwW74CY8Bwj2W4XhpLXGuZgVwU5CQJXmN15wdAB7UdXg1iVd8ue7pYgZHEjHag6LCH4SrnTqejypSxfineHocKL",
  "key24": "WGv4jNjtsoYL6LkXrZFoWoDFB1DtiWPqpsuETgJtvoTq2C8URknDrco3AirdXwvrfwr4yY2nM6QN9GZev6SsF9F",
  "key25": "5yXGDSLiGZRBhvmyJQ6kjnhtvKM4bTRr159q8c3RR59UMjs6rsw79pHoH4nTfSdQC6b7tHjZVi2h8NSrEkYw4d3X",
  "key26": "2LqZXxPbwFCNbggepZurUMeWghh3Af2xNFCvjcbcXQ57TKJj5F2UZh4zhNRSi91gttrKe2UZrZf3QMsYrwk6Neo",
  "key27": "Q8SQdC9dwhQQPust6X4RmArnK4ewkBo4KGizw2kcGsrzsaochzAhpN69mysVcbU9AKXWkCAL1YGg2hpcRDZKue7",
  "key28": "3Ku2dkzZLinvKAhBxaTWoBp4ZqD1JKbsY8pzRZ5SdY2Z2FZFRo79UJKWkEkJA7rxwuYocdVdVPZjfcGv3HsZV9Gi"
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
