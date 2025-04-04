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
    "2wdsZxDSHczAN5ouiwhLYLDJ2Wy2nXf9THVbQem18XbHxJ7EZYY4WqRFtHacPJmXdkqyExaNgtuj4AQUHTZRVzJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sbS12VXs7Xky44StGVo6dZhnXpsj5WY7NmgZ2rYm2Uw4SzZS5Rem2yHHFfwjUzb59Jz6x4VTmj9SAZK1swzvxFw",
  "key1": "3yDCAgmUN6ypw3rqKHE6KZ1YMgS66n5gMHZj54XCuQiYG4qJ3yPK5Qccqq4m31tvrUdJknsDvJQrZGXuCnVujYAe",
  "key2": "5ZuchSxjx2P35SvFhLCHaeEaAQqok4GUUHLFdcWXeSqM67pvm3phuwU6VCQM9g4Q7x1hai3Zwov4xVkhEFyrK7wV",
  "key3": "4o6yWAcAtNcgsGVwWUFrK23aLo7LQetXLpA1nfvxDEsc6PuxqJTCT6oKd5UXSHbGdc3STVXqPDtjCqV2k4SnKvXP",
  "key4": "3pzK6Y8YvAuzP5B8CvhyfCu73SSUKt9W4CPJB5CEgSeUjRgUM4VCC1QyPE5W9vtDSKmxANxVAJCLnj59rBqxMzuB",
  "key5": "2UMNAjd4nBBwD9aspPzCpSpcEaeRpCdmKCysCxs5g4BQWirbBUnrGbvfj13nenESsivjGLpERj4Fs1eWjMCq3LYm",
  "key6": "2qeKoFV67TtDHxEXRXjCXfQYic3NCpAgP7XEWNnnhhTaXtjDJCQFBeyrcpyAbviAoW7BJ9wsfWNgtYdVpiDcyavM",
  "key7": "YG5kqgsEfqEBojquM6AqbF2Mq5VEfTZ2sfCAr96QEJ1Eh6bdvfDSvQgmrmSqiQGn9EY52EtUq5JaJqUzonpYQJk",
  "key8": "6794aKxTZSjpL9j2nrdKcbFR6GkqFCkBUPK1w81hh6GHXtaMEBvNabfSqzvaqUv6JAgjDBmJDfs4FzoDNJS9FLag",
  "key9": "4oceu7v7XiXPq8AWP6Xw5AsjiuM6cSXmAUSfuJxmrjhvhCUPzqPY1DPf6EKnXF9UaiSPDbsFVhi4einCUCaFABFK",
  "key10": "bD8693zEY9YxsdRpEEL9Mpid2Ddkxj4PUgpPt46EnEGVtKs6znN8wgpPNU2nWfF6sMf1vAi5WrCC1LwVLbqdkzQ",
  "key11": "47H8obKLxCHnrU2oN5uNcvNNTq3X5Y8hzGJGYSgGakjRCTafefxQk1rRCWLffqwW5YzH7MtXCPhjncPv2LmGyorY",
  "key12": "4ynHkDPt5eU3VPpZ2tyGtYZpJyrWBQtrGTSDrpzpQ44dhuneQdzyCtZzMGagLeRk4145Chy6pMszNtvQx1AZi89r",
  "key13": "41g3sefNqx9wfwpoY2qveHoGF53aNCHc2EUpaLKrMDxbFvbSkqgM4zBVSAu2jkQu8oApyUVp5BpA3AFwnRRuSVUc",
  "key14": "4qWurvvRQZbqzhCkJahtHQhSSteuU7wVs6uRzy56ZmpeAzDWmfsotksE32wqJ1YWpDRPBy8LfwLxo3GvmX8G9EdP",
  "key15": "4kPxSDDe8R4kTrK4Zg7WV9BkWD5QfjqPS3FqEXrTCR7fk3o2B2A69BuAXA9LAD4mXRRxJjxJobvAUEKxyZjVjAYL",
  "key16": "5bXrtt2KGKAFbpcwF9p42NeH3vF3np5CSVkD1t2pra1CHbo8kq9toeDqec19TbUC3hkp2AtFi3qkhj4Ya2tXR7Ao",
  "key17": "fZ41pdNqqnmphkTM2EGUW8yvYNn4DEbapSaYbaNP61fEXBgUspQZPBcPcqnCW1mcN5AKqU8x8TAKWcTZ82qhnEC",
  "key18": "2mMUgrrh1sJo7MpcCsKZAY9Pjeuz3HQWF9QPPQPrHTNSnsuF2vj59ZdVgm248oR1EmZwhBkfyoUtMxawjhgrrgR6",
  "key19": "5VMiMZS78jP3x5fqxe7ZU2HbAD9mtmQ5KHCrBkUZUcvoAJi8LjwTZZXNQEQC6JeW18Q3Lnpw5L7CDyxU86Bh89iY",
  "key20": "5QHWqt7zK9C5fdm4aNE2AtviMhsuLbHoiVrd5Gwa3TWj7yqqTqAqM9VtvH25odhW6T2QVEnTrbGym3yKqSnBa2FB",
  "key21": "62hhXhhzU3QowaACGAYPRd8kDV1VAiUkG9MZL7Dx4TyTq2oKGiCGUsbFUkyTjEPt27vH9fWpApbhNo8ZGQ5iVoqb",
  "key22": "4V1aBa9FX41JsT6m8wEoQbcmxQFCc7p5PNnzig1js9XM1PiF5xjw9hkguyq5XpwP5aAKj8bXpj7U4jRohMZELq6X",
  "key23": "21JvtKaycN7LZVHSmjZGUGSy9NexpycGyVui7dihQHKXj6pLmLWabWbKFqiXYL6wKPzvwgqQVsmTaT2AZtJjx9pb",
  "key24": "2NjicqghG2Lc166NsMUyQckHpctXnaNfCXMJm9wF7mFaXT388UeZJkG6jaTkZEgzP8MMEBksD6fQFsn1nt4exGHN",
  "key25": "4DD2v1Brv9nYcKKgKMtcZy8XGP7imLhzeCFKkDjKjuiivLbumLrxW9iTG3rW6mTPgMogzuYjVvgWR49yjDZjSVhv",
  "key26": "3feCjKPCo7aEnUxDJWfb7z2aPdVDck1qdY1WzSRhW5RpJyy6cenEsfQErMBQeX6XArsThuzRBvqbYcJGc2Cs771Z",
  "key27": "4edLZYXGBbCR4fE9PyeQkDHGoc5i7GT7JfBEDHjgBb6vSwXH2zZHHNyfaHVQdxaLR2fTHUxJWbvhjvGjGDaP6g8V",
  "key28": "4QL8hd24zR9YEtr5GB2Q3j9aRoYL2Kk5b4DshRuB4WsxfiPCv9uRVngyyxtnUyFWFtZjdjRsbJvVqjZshR9wFekJ",
  "key29": "5Fojywg48rAy5ipDzgvF4V432tUZ8hzdtwJjj54AfNDdSFg2MirWCjYqf2xb2fKR1EkLNoLxEghyJuSQh9d25Gc1",
  "key30": "4jVkH4xi8WiMVZiSNCwz8gGUivpik6hWAGfvs9Lxg3XR6AYKbRCwBB5rfxej6tFb2RQj4kt5SJccgPAYSBpX7rUs"
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
