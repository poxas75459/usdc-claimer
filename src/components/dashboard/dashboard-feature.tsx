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
    "2jT9Z4P13RMGPbeRPQDQU4NUFecm2FHRLMmkvHAcQUFqHNbZc9ifR4kfybPe8k3HvqLcW3eba3dgXMoPAu11rgUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pgJYJdtJHJn4mZFkqxgF2W34xmtcjaPkuVZeKBUgWdPNNChyKgSthPUMeK95QggU3CWGCrQmwnawKafayRGLq2i",
  "key1": "4ASrHWxgKwBHrAaTxqqNBb6667qNKcrE9a7mwCGAa1NfiVVh64biRSTPn5aiHvGLWQV5wRvduMKPTKntc8SGTVj8",
  "key2": "4ovULEfSPCGoc2U1wauyzFcSYxXVZXfq6XLk2WKKuJw8S8nJMvGTrF2aibcCrgEcoevVdznsYF93nTo93mKdkuqH",
  "key3": "3VgeBsPYYJPMf7MGQ3j7FZiXbcJDcRLu3uqiyM1WmiNjMoZLN5C52e2coiX9yfuhDQHPyzc8JhJ7nJLyqunFMp6v",
  "key4": "2KYXvk5m6wFHy5ajEK4vv19zWrFAQaVrcGpWm7J626VyobYVgsWSaV2sJ8oq7MczUBSo7JPSyvx2uzeUaDnK1prX",
  "key5": "5UbDmYHP1wjW5TaXoVFyKT5BXcYUqre3exjtMGksW5iAcx6c6CmBqTuJmJHaq7GVR81iiSvLCT2oS1aMrQWh4bU8",
  "key6": "33k7jCbNZz2zzyN92xNQx8CjnzzQNgo9QxFvyA2xhUq8K4gPe1DPvtXiM6WBCKSfZApiwggqS2Pxszmm7dKrYg4E",
  "key7": "6eKD6rbsotX9H9U4KwdoXQp5SBK2sngp7gWA1NJzFDx1Av4TqXRX5ymnvRgcm8X5veid2s2zCmWgT8m913pKptu",
  "key8": "3uzioruGVr7ri37C6hHMtVRevqKLKNNEqkoP2Z4W7Yo71hg9tXn81AydkkzHoVp4NuQjCwN6cr5Spcj5EDBifL1f",
  "key9": "344ktmfgCtkSR8LboE7YdnL7E9F8he7gEcbVespcqwZLd1ZE2Sqejewi4hqX4R1Ndq7C99ss2WBkHux45PC2LNsr",
  "key10": "2WUT8D17tahkKfFwNakdUBDMvfUErQnRBrGUPNQuXFsHj4hbQd17jW92WAn1nNebFYj1oUY7iqkusSBT19wnRKTW",
  "key11": "2kCiV2Hj7GTTFeK4fbAyMRTw8jPRBEQanWwboq2WAZMaA5Emkocsx218Kj1ujNzV53jLvcTKu4nFuh9heTBr7PGU",
  "key12": "5gmqcLg5oizasbPyePfDBukZfV2KAz4SPR9TowQrZ2Rt4hYaLCeHTYUBxYbTK1TBCKVSPnq4AbLcfjFyoG7MQ6Ly",
  "key13": "4Pw1E962AEqiMHAtztbKWiEQATQ1RGCiFrAncpBn3TZqCj3rv28rGGJaHLd4dwd2wvTeKe1DU85Jbgg8HNbgzMi9",
  "key14": "65a2Gm5vpAumuuPLHspTmEFveuz2f9Q6rFd7BwE6SCXah1QyY95ccESinK4A4GHGjJjSWX2NQgaxmDWYVTH4hy7E",
  "key15": "3rDKb4SfWqSNBGJytLrGbHfkgofCRzyjfwGGczWT39QpPx2AzEoe9UJEiTTzFVuaKn6oHv4xiZYbPGfoi9aMrt2Q",
  "key16": "jq5Fsy4vGvqdCRMaqgXBC663pqL1eUqeAHPHp9pV1mGgua5MWX1z38TYAb3KqSwvfJAfaqZ4T1L1kFQwFaTjpW3",
  "key17": "4JoWqF7HY34ezEpuNPfNoNiMUUspLp32aMsEAaFUhLgqLHn4eA7ncieTRhLp2dQqMwiJfXjBqqRrpCWpg44aFVZd",
  "key18": "5jbcBAEGupH1YgdQvbt7XGoduPtu3pdSiuUxLWmQ9AUSZHG4rBgR4nuoZZTNobT8rfdsdsrB6Jy57RkVHSfxWUuA",
  "key19": "2L7V542FkuufCgHYgSrASYo9LJ9evDdyEifdkH34neGgq9AXLtLmY1VbMizZzS9u7AZJWUbaCmh7Vv1UaBgogk3e",
  "key20": "4HYPAFtg4S5oEBDtJNfRgvVMQFuSATGtwSqy4quZVwzsENmueL3SW81R6wYhKPAfGnry35Phk8SXYXEAWQuTBQLr",
  "key21": "rbLL7sMFxvJSSEdgpc3uDMXYnjKdY66qzrb2qDMpM5spLc8rJp9zQYuqGrRf7wJt9jSUU2CUopoWVUxYXwnVQsS",
  "key22": "5cnxynC36FUDdqwi1UsExcje3tahFwaaV7CSZjdGRSfRfTe8sJR9WaBZZCK1HjtZjpTnPesrNTePTjRcmFVxcZm2",
  "key23": "3sQ6TJVXLmmMoHV4jQG7bewS3W11kwxov4aybvR3YFb4frsXbd7BhSuhMNg9rEZtdPfwTquoEoJszWAKLfk6Lr6i",
  "key24": "4mQireGrXqt61VvACRVepwJfFqRmyRayjtE7je1BWckN8CSc2u3AFCmvNaiY9LdrE6TfXigkqbskWcL2B8BEToFJ",
  "key25": "4EWmCE1mPwgYSjMaYoaTUNqgJ2r11CpuUzfCh98fLQXsSaVUqSRBvPC3oUFMcbY5JFFU6DP6q9ZYjj6ScsuF6AEY",
  "key26": "43obFkanaGwfmNTyCtst9zDvuTa8Lxv9Y7iuZC8oZ2DuKahFZEg4hXFu7nW9Cgr8ZwYSBVPzpRNnDCjijWdPe5xZ"
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
