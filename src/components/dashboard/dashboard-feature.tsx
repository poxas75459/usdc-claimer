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
    "6ssrK2Wk9YWFpDLNxPLpchdpeJs1kar5HAz5JqeJUV8W3ZdVe6nvyPqgiiGRUmskeT8Xu25qM5k5K8T5hS7HB3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m5isTpNHjJRrcsLoCbsW3rsc5sUDmiC2aEL4UvCU6KLVGuN7oE1oYtzUoyWnTQVXzFvzA9FHFj2aJxshtGYQA9N",
  "key1": "4Epx4t8zYbwmM9NLCsc97REofvKN71Y5hcNniqk372Fezst7iaKvwsSMEmZn7HKYTRvF1aXEJkytkUzK9qv8CNsX",
  "key2": "4H8iZPKHj12qYMRGAFyF13WsQYUmUmikg6CnTo1kYDoPKn6hhnYuBH463DTwpq7ETaXTSRBhFWZwBfHbYzHQkf5g",
  "key3": "34yV1HXCB5XGaw4Cfm6vfShGebk9nPTRChimxG3EWUQ31weFFksHJtyhtgJzoq3YovZA34PUMsRpR1gcAAPpAaMd",
  "key4": "4Vj9LR9hpoZsnUMLT3hb2SXyzQHHCjSCjtJMueqyQGcYbu74oRWnmcKBNFN18CAwedGYdiGB54YucvrYq5zWVnpF",
  "key5": "mfsCv5e6bWjWYZ2Nn4Kp751HezqJsbhQ81tdz6zyauh8MWpox1QCPCH4bGmXdzrzrqiPvMp5KzysVeP48WEHKT4",
  "key6": "2ZkGSUZ9GhXesZxTSEZGWDq6Dmi1VaVMq2TbiLJ9ebHfteKi6WnPT7C5FWj3bdTVm2UKb5KpR1RazA3UXc7k2eh9",
  "key7": "YgKPBigCUC7wG5vu7tbiiE6FhhAyxZtbkY34BRDV7L1tZQNDacgG4AsbgAAFNWQCcCXaTzhbZk2HUsHcoHGZeU6",
  "key8": "q5ZLWrXXZbtJ31EEUxibgVwgKPjiWaRSBxFbPCQiajAujAHVAaGQJuu9Z8bq1srj2GmPBJqF9PzHshwb3DY6H1y",
  "key9": "3tXnjuCCV86wqNniCY1J48atDnLnAdprf5oeuEkWxokrgTB1PRwDVRtZPjA3fC7jWq2M4BPa4SbmZtQVm8xos3D6",
  "key10": "2rR8JsFUZ98Dr6Mjs7qZ5nF6xgdBhu4WxMLnEitnstTrHAAfek3LRj87K3DBbhi79FqWKXeLPcpMnNZs8FYZx3kF",
  "key11": "2gChNNJot8DxPkGrpJwk7ccDi4kNdrpsjzUcJXoZZUHew29Mj3vfqDUiejhA1hqj5rxLfNonzdX2Q2WivAGoBFBS",
  "key12": "5h3t515tRPikGo1TGRBQTdbTV8qtvpPWoYNVAP7KkcgbvMRd8tZ1AdQ9rjkiW31VMHQBpeon1oqV5tsEmutPbmBB",
  "key13": "2TKQdQu3oBPhLRahztshxkFqHC3xomMye7aTGVibUTKPMqB2VwEWRBB3q6cDkoE4qC3oFpxDvHKDi4sARyCLKWhz",
  "key14": "28vq1Q64YhRzX31V1x9CGtY9pcKbBJ4YDG8SCPHWJbXGJiK94udBKCRV4x8FQKUWodVNrX2kmebz45xg3qjZ7Kg5",
  "key15": "54TRXFnirtm1PWakCtkZ7NvixpCDzuvUuyBHewtZJLfAkZCEY4fYf29KfRyN2dn4Qk7VW3fng7TQcoaKPUPYxVCo",
  "key16": "4reDorS4QTrKUmJEkmKPmS3znNyLFzMvtxgxFSmQpwMF81GpXkmvyC4HcUq2NGzPojHSEcQQH5TvKKv98A12PGry",
  "key17": "9R5qEmbsomY6iYofRoTJaH3uEoUMxLofpNZFLJKREjfzGdzQmk77BKiCpQwzgdExxLxhcrMa9sj3KhRotxyZHAy",
  "key18": "34UZo2ffET9K9zq3EDdbAT7NsFAnk1q7idpj6otQy6KukKizW61j2kCibfYtPAN1JZGKwtVi9HHKNDr8sn7PBDRc",
  "key19": "5yDS7UawcLsaGFnxBxAsss7QowQ6BDdA6Aeu5KPp5fCqjRA7Y43PhiJ1qHSWdKvpLoetit17WR1rjviKJu5JVaJY",
  "key20": "98LwX6V7KFokAPgoppQWk3i1H4tqqgYdD7xKditGrYFXu5R1rsysRZeyqtY3nXfc3SkwMzH4UjsxwtuJ6MV3c2b",
  "key21": "585fWtc636fmQHCFmDvmD6vgsD46a9f17NHUEBkqa47Rz9iE1CSoyfBy66XBudD9soZCoPTKbbBFPQopZm5EP2sb",
  "key22": "4vLFQALpnJHUGFNAwFZQEuzuD11sVLDfyn1gcyhGt8XN3ng3uc7jCDE3ocN1FRvZv9E9CJC1U6ShxuagZX5eK9kM",
  "key23": "3uLzSNSjMkk14VBmapSgekqLKKKDnNwnf3Cubz9jhsM8vWfSQi19C1Jd6G37LkbC6purJuVvmw9a3BLEZdcJ1ZJf",
  "key24": "2z7Ph3b95PHH51hfrq79bf8eDC55sCZKArBgXRkarvkbMwSf3Bx1HGft4WP93E4LBWU7gEn3BKWJuAtT4SPZv26F",
  "key25": "3aUjMePmFcqgeQ8jhXLJqfn1TAqG1WiEQUWhwkrdgPWS8uLNCqvVVgXwosEKS669qmUm8cSo1VMrEH4SzbGfazmJ",
  "key26": "57G6JSkshY4b3uAB5k6hdbM9LVQW8EJQ4JhQGM9TAfmXQnDxGeJoygcGMaJLU2NmvChjjRhfRjhWR1VPhUuPZBMw"
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
