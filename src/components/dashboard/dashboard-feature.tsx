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
    "ckJaTiowizvXdHjws4bBneMZx6LVCHQxxd8ttq2tNF1tr9wZiYeMrfTd8eU6oX7afgVFkPboiw58jHjuHPwJKjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L5tkak5DGZr3cpuDXsDWpxzkU1dnYDZvrpiVuxye3zBVMit2dMeCpJztyRFRyGrVk2Eadh5zXN5mSdXgpyRY87u",
  "key1": "V65QyMhiqpTQXXu46cNewhMu4Ek1dfSqgL3G3XH1ZnCVTKndrbo2TeyJ92mAJsLgcLaLiCH6iuVniPKZFZkt1iU",
  "key2": "5Ried8dUMGPfGY1jMGcwPZ5zyzEwXcqPmevUfJ8nuEUMyXNkymZFff12FGveFayyHtE5bVdZJw2936cq8cAdLgCS",
  "key3": "mRyaontTg6C3J1pNPjKvuxeoTDzcqpxUrV3wPz7ZeEu8Y53AwvsTxt9t36Xo9CNqZw7jJcQ7H7CkqJAdjuPfzJV",
  "key4": "xD5jnRBLR25EoU22tiRpefGbnzfzNzw36oMtu2Gbzd6PAKnstXxqSvaTgRJKQQH1z5TmQYUoM5dZzgw6WKpiBDC",
  "key5": "4vQkL6yiwnCKpUXdAWrMHNVBSVxoAcqVrQ51MusY6gJbHgL9wTNnz4wgJYDA7AXhs8pD6ckkg5htuSeYjJAJ28Ei",
  "key6": "27k8CQC2ELiebV5PUuH7tSH8XNtiHNEX3tJ5sUfW33odaip9wWE79UrfQYDdhi5MBHKfy1hY4rgUzzR5hwcE2oEB",
  "key7": "5cSWwTRcsVMVdAk6Dw5SGrBeWkBZQWMpkr5Z8tn9yYsqTWiih7izMgfphNADcDamKkktSxeYnzKcexdP7jLcTb5f",
  "key8": "4vfg8p71AdvEqdqZZaFTzp8HdT7QrtChSDngNhbgRyKMfudfSvNfVpTEdBamiFxH28sNm2Z3E4UC4hBEpMpUTTLD",
  "key9": "2d6EeWwq5w3yBS4wC8geEX8p8WLy8tQb9qSWSSyG2Roq3u1dzED2zGkFfVJK2FVPqUodVEmKarxSgvnmAhfFSDQR",
  "key10": "4oyLAagt1PGGxBfEBdoxcLAqcpQENuE87Yvs332rX7VkUCVarfHVc29PeLXpwyKjPaz6zDowK2xnkw3SeFCkeR6s",
  "key11": "4TRKBdYt3hweC1cMXCaHtwUqCmqZjPj7VkzdjaA1nFMWAwKC8ZVvZya3soakMQnVbSxTNPiz4z3U8KG2hNV5vuBN",
  "key12": "2H2BxDhDp6fGu9i1azFu6BJFtsGzAQdvRHNdvBXEWfCEZ9Bw8tEnvVh1w7Prz4s8tNCMw9ok7tobno3i8HCPntxm",
  "key13": "5myCQwukBc174TW19YPb8cAH6Zx3v66PoFk3HUzpGHHZTf8cQo9yRBPKNT1YSFWtSMxYSCquYgeWue7BxhpGZ53w",
  "key14": "43j2BBBMiwPC5JgR4BSLCYETjBasFwiP7EBeUiZpadQpGdMWTjw9ddtbS1dUptjBHPpuV3tyVGw3ZMufZDiBT58M",
  "key15": "3FgBHQtDSkADirQXygtUVqvQvvL25NFS9EHCWyXrYVuA2TkUiX8FQRGDjdpMNX3ENen5i9bGbQzFWdEPpXjf2kZd",
  "key16": "5ztAjU4K8A1UST9258u8kYB3aqyC4rncBnQMrX2LecccJRCzc67jjbUqAhhKQkHgErefnHrxkzcGrkTZpt8xhmFh",
  "key17": "34UTbX4PV1fgq7mDeRehTbNoXojFgPa8CUZVJrqp3KWxnMx6WgPniDuTYHErwBKM4aXP7Rmx4ri7YRymFSSUA1DK",
  "key18": "415bUaFuAbgP7nHmu9QFsv4afPwWAMVbFCrQn21tNxjhbqPogiZ5K145QqQZPn3nJzT1aKi43iXoFeavuvq6fTgm",
  "key19": "3S4HSJWbF3igLbsEhAFV1EcJ5Bvyw4wYXBR5RWsafU733wGoH6TEM9ZZo8NmJwwkCvQhb5X5CQrNSNtW1jzp8aPi",
  "key20": "3e12pnhiGCrsnFaDE7HqtvUfZNpteWDJyBnmyUFHdQZrgoak9wAdZtS6xfy75jdBEpTjtsuRcL9R7oHzDCS2BrWb",
  "key21": "4pW5TDWThZKqe52yALhPxPSxJCD74xAxJuTZ5zZpidihT2roXumQZTu5qqohwVp2zLNiPCYyKJiQaZgCircjeXcx",
  "key22": "VVN3MiNCBAyorCzyfh6t94UnHSxUDn2nm2yDnh4ekawKYd7MEVux3WJjAzrfDoxtShjVQhoP5JpfgUaJmz6MVWM",
  "key23": "2qaBbYn8Z8GHhH8BeCPyro1vqPCxUo7VdwgJzAJrXk7YoRZijMxF3vNpTBXaCwrdnSiFiB6G8k3PH2dguRJBro6k",
  "key24": "wf1xTuzjzP1RdN8Yo4mCkpiyRtLCxGHYbKQsC4LYFytXtY2R8FtretC3BhzzgFyzk7wZXb8d7XDpAviAMvF1EhP"
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
