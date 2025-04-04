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
    "2Q2jJrekr9hC3omzAYNHn1M9mF3Phq3eqv29qdSqXsNnd38WXSoKZSshB3FVNs33VsobJZwhEvWYfapuxtWuwxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v8BByUBxSv8uhHGVQ55nzQ6mSxeSpSf7gvveejyAaNWU7sqCE8SGMEuHM8BgEqWKRyD4eK5SejeQSLCTMXs8tnX",
  "key1": "23k3GvDtvTMCEsrU4DuUftSo2kLUMRBjhSXcfkkJdSnFHFHmKAwnpFdmKgbanL2MWLkxyEs2HmWtjNH2kVsKjLP9",
  "key2": "4n4FEQoH6oeq2tZ212bE6T9comxrTpsgVsB7QAvBaHj6CHAgJDhRyRHN1f51ghLVmm4mLTLqfsTWgkvVnVSDyuM6",
  "key3": "4vBovKkqsRvpLF79HqGzbVcgLNSkM5ymEL1BSFjgTbSpgemKv3QdZrJGTirV8WrBSiEpNQ8NSSceDWGJaLveQccY",
  "key4": "5VmWC5dFrrQbcZ4AxJDku2m6Q7ZAcu4rc5u1CMznDWRXsFyucaAFpbCogKpDCMijYF4dWk32HdbbmPSGbpw2FbM2",
  "key5": "oFx22rUgBaJrwc3PUSWEN3X53idc3LiKRnghDt5uaaoaf4Zp8i8MYcdNNni9Cyxr6iGQKdP7zikHvB1zTFpjh1n",
  "key6": "4VB4oG26iZxB12qk8ktcYtvqrbLGbYr3rXzKQo1kUd7tGtWWVSVJA1ZpYc8pioHrQswAt7Aqn9eq3Cf94ZYbX3XC",
  "key7": "25ZqcQ3AS5rk84o4uG47HA3HW9kVHELfp51S8r82jGUXxyDiMCyMtE9onDX7N7fwDQm1S6MNahxnwY3NjL4eB6Bq",
  "key8": "4S5ZVsiokmzKtVPrT2cb4n8sZ45rKBLzoHDMSijEaNkVpLDaqKtmFpNZzzs5v7WVfqPKvAKgj3Axv6PueGrv7B9k",
  "key9": "2pCi6pvPdhh4VsxdgM1XswbtmFUTA4bXRrziLFfPy1Yk4LT6id2uyzw9ZmLhuxCy7sDxwb84x71hCNBrge7A87ir",
  "key10": "2hggDhhtseeHrYJKvBxx7hLrf8p7hUFhGDx1G4tHLJ3gpdXXKjFS9XNSLtD7q8JmunzyB8BGXruSGgPcHVKrBUu3",
  "key11": "3FNaF95hkuiKFyZHVMULsG133uzeo7YBaKuiZJMCtKN3zjn4rVFVR1zvcpfAH6maeKFvLpmnLcceTjAfMBUjB8ts",
  "key12": "4NH4bqux7raEjXAE3M9mz6yeWfs58SVeUyfX3kFmZnxUgPopmVAe1NLQ2AYcYt44K3F9xPJD8VTvPz8M91D8CH9q",
  "key13": "nefJ5TfNq4W6sFgCWXuoKT7ZezzdyYTwkvWoZSwGLuKpwPuxy4rDKHy7cS6zq6k4mVvsviBUeJMyc2ijUrQJASP",
  "key14": "28R6K4BGiGwUMCXCHJDAgd6bjigVn9628MzBXUcjzvcyHtpY1TDkJC7rJTawFBvxYm817mLN4nK9eX8wNaujyr9v",
  "key15": "2vzsV48gM8gXhkBqpxcAdGo4pjBmFTqpmLpyoWMkEb7UZgf73bsiv1TqQaQbXLYePT2ULLQo3tZoz7i7Gz7dMb43",
  "key16": "4KVA1FuJ1hta1FvEfj42ianuHRZxn7TUEEzvY4MpgfjMJDBFo5qu2h8pPajiWRG2RWLSPgCCS81iirWvxvGQyC8A",
  "key17": "5CW8hoUujBe1kuhPgtBrYQR6DhSmsdCWoyyEy8tqDqiykAFF5AQNsV5xZXdyvxsjxd9jy5Nqf2wvtVhhcBPBdVx2",
  "key18": "Tb5i4Cu1K4emB3CMLb3zFSrhNoHRLjWp2dWbyvtVw96PpEVGuDJ1o6pptqq5oYinpBegEqhiKe15NohvPyh88Ai",
  "key19": "2276u7hzte8AZSoA9DpN1d5B2E6deDtG1Uya97Ym5FPBNHK8vfXYVKgGpNJmRfcxU8DMcpb3Vk5MRiSSZkwGRAiv",
  "key20": "3S3Z8AjmfujqmLwLqSrJHHNxQ4127m7fCrekxXJcS9WhtUr4f41r4QYW9iCqhZaZBJbNsy5Luv1DTQ6e9amwkaBw",
  "key21": "46WvkdQgACgRetJ7dQqU4CowK74GdYUyr9i37Y16V3GNYgpAzCQjQ4QXLHtoWsaxmVSVy1616h7AMAYHaECmV6nC",
  "key22": "5zJxxH8P5BcWmbfvjPo6Kn6c7hPXB2hJWQaBLZGbKahPNKEQCiistRHVpMMJyoBV9uBw6x9RGubgznFm2Liab7yt",
  "key23": "5iU2LoqU2eTJpBuSnFjSDSkC76D4Q6JbMkjfzGzdAUBSm6c2WTUQw4ZzTyP4qjN1vYrHkp3kKw7J9aRZhfodZ2Aj",
  "key24": "1GKv2zGkPZwcZ7pX8m5yR37fqXcDCmbiaFcBCD7LjWMsPG5Hi8ePTDYt6q6ZvQfY3Qn5Xcr15J3Xt5Jh9LhbBBx",
  "key25": "27m2xRGrbDPUBVd3YNHpEim4hQBRNXwoErPsvrnHp6yDA5UWqanu161FdtFvrDfvcEPP4ii52GCjBucofXF9pDPL",
  "key26": "2YZ4fgBDbHSAiX7DEFtpMBjo57gftNScBVfVj8va5C9QXHuHrMp7De3RDNLHcGV9LUhMXkLgpmUAHBPkGXL4eoLL",
  "key27": "5zyTjfupWB5RVp6ybrP8hG4NZoyZKZWpuzCNkyXSdbFqYARZjRmrYmgeGRLLbcQvBzUKZZfCjp8ZoZNmiBG8JkTp"
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
