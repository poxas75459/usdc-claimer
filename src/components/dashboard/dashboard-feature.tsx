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
    "332bp5TXkL2PSZDQY6JLYPYLXUhoqMxcicqr9mLq1NhVf6rRk4cmhb4zEnjCHd34C4KDqPZ3WNVrheUQaZ6yJAMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tE8ErJVtywHJE1EgNVCN2hkbByWHMGAEbPm3EQK9VT4UgD5WGgukJJYu7tRhUWEbFqeRGDCx5kbePGpesuE2uya",
  "key1": "5gKhugZevnzvk6QwEzP6NtghKJQjDywx4T4o81x1N5P8sNuUEHebecz4CZkoQxvk9Stq6pGYGY1xKZse3XdG9kqg",
  "key2": "5yEPbAz2oaG9RdwYqFA4eBhtrRN2LmhuHGrjuzDEBVByQpDcGsbM3bQxVQ6nt4BMaUEZ3VNqHkXn4zXod4M1DkGJ",
  "key3": "2FtpuPBmuB7oWPYrZedHF49SQCsjAa5SLHY5xuLNbTef4Zkmzidn449AAA3CnzuusoALD7gxtSRpwsuQfZvsydoz",
  "key4": "2wMW8QmVH2jK411AWxwy8pgJ1UwqfdQsndpv7nAX1NMaB5ZvGyUkcP6PYoFFZidrAVLNYjpj56vKdyoGDo3J5Gta",
  "key5": "5ax7THP4xBHoviJF5bRPH4vwadTwffqKutsuF34cgLYmpoe6kTF2wu2CcMobS64EBt9edfXEBnYZqwHPRpS1akzC",
  "key6": "3N8fepMi9zK6tPF7Ya4E25nhmkD4Y9mHv1Sc4x7z9WpqQxMqR2CaxczzsVa9ty4GTZDPb6jpRSEbdaHq3eG9tPuV",
  "key7": "34P8zTME4amQ96TffHA4wGz8eSovh3yyiQwjzGwaVM7RCAM2iAop5rMgqDmowdC9cEQ871GbeNjhiMPKYX4pkoUx",
  "key8": "5YWLUhk6HHk4oKMEuCZCFJiagyup7GZYszVDDtMKCm5K7nRv3f3YbSP5mCeDP1piGYXr9rCLRzFVCdDRyt6jkwbd",
  "key9": "3P2TjzBVLmwoy1ropyCz1aexv5BkSicoQnYFPVtHq1VJAwGyxd3AomYGWDh21uRMq4iUZf12XZTh9EtorZz4cD9F",
  "key10": "46CmJUXTRewoe1Ydr3MgybM4g57pYQStAFk3AJFaumeDAqxm2NxPN4iyEtH5grymTwjhXBqBKf8vvcphrH9fJFdk",
  "key11": "5wXy319WdfiWdAAUKiEffwKZiB3BRxDB1tPnFLFX7QqeKqwkPJp1F2c4UJ1nCYqefSNnsUq5Wifya1vXKGY1jVgF",
  "key12": "34YkkCvKsxdznWb6XasxYxhwwbUiYKeTRp1WLT6XLJyM97r1iiyykqdZcJzKtayaQd2S7iXJALFxCrVhgDCvcppT",
  "key13": "2SADdF3m62KmVVy1A4jHGwThNXAogdYQZwGxj7jXgFaCEvDbZ8Kq392ippXWyagKcAHeZxXhrZ7pkGeEnFuwZa9F",
  "key14": "s4r6agU6wM5Bw2gmQCUaYB2iEAtmuNeZRDwDG6R2qaNB3XjZb4tgTp6gHsaigzBGeXQQzDpU3NnPPkByctxvRVx",
  "key15": "4hCfCxPEjU9uRD4mSYSb23PDbUapkAWgSiJdJWHE6Rrs8rZoHyXXHfoxCp28Mozprv2MBk93NXcZBVheNAiagGPd",
  "key16": "34Jp3aZgWJsHP2Dyk4w9uBcPnSxtgeaRq8KtP4duCyguUYPvd444Ynsoqe7MZm7wNittS28WFs4WSNP1zVngtsrS",
  "key17": "4A5Mt31eueKDgBLVwobdoBvVrSDg5TEvk9YekECzfuELMRsvv2jDXTfuv6AnSZbGGzN6vyknF43NbGabg36A3QVj",
  "key18": "4scHfz6zq95SZHabp1Ef19BQPvHS9yKWbS35Pm3pU6pE8bvgVAtDrEjwEkxCcKMJthdtVDfWoaAWBHZAPqGYWdTf",
  "key19": "65TPJQ3mQdaYEYrWxsZ3Ty7ryRvnx5xGrBmWppMSwrVEHDJoJTBji1uGGUryyuv2nKAFqssAXcqpAEfM3GJ4keyv",
  "key20": "65abJbtdmKXTLb9pgc1HvZcvoutNg6M5VoahNCFJEuxwK3dMZTCtfUbTmTX1nuWA3xEpc1qfaNgzLmmAvU1U9NDP",
  "key21": "65LbR2pWGAodZ8rJzLsfDD7CVqHD6Y92ky3r3kcowUonr1C8hMmcK7j2FY9JgjEC5rWe2WLGJ7mnEMnmh1uzEx7p",
  "key22": "46JxUB1cZ2kqQkcUVP3eqVUn6uiZQ2bpEQR2o7tEWJxg3sryhy3V94GKik2WpntU7LtoRhxLnHXkyER2SJ7aa8id",
  "key23": "2QpRWyyozAZWWtdDr1w6rwDV7mD2qNUeWr64tz51NkxEQZ2aMTEjhERLGeMquThUCkvEgm53M4ct1nUdm5Tw1fhE",
  "key24": "hDnEY2AHKk5VWBVcKcWPVsu69HDcybUTcuhMigJXnZDygVPSNwk9BeyX5aXK5xkpYqP1jmEGahsuMFRce6v8aUv",
  "key25": "BAojYvWi1dpdrHvM6MNFex5wrVGBckHNzdVGyyY8fNXTMzAHQeweJHyX8Piw64oQgkd7AzjNFinR7ukuuWMnFjy",
  "key26": "2hVhFj5KYNowdS98FGd98Bnh8JjCUStL4zE4NbmDUjCiD4bZnNgHaUqdVx6e3Y5nRpMZZoCEsDdG6ioCXYrsde6R",
  "key27": "5Bjz69Ey6fjWUgRKbiNb6VSLT5aYyEZQcpJQxBtUuMbuLXQ49BRpjuF5jhad3PiB6PHEJpj9pi2S1viZYuKHZ6jY",
  "key28": "2frxZ8aGx2dCE6N5isJ88T4pTGc94VAscVkM5b5ue4r3Wz3B4Zb5tTR5ozrQ9M3X3f6GuEvmMdZQPN77jnE93E9D"
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
