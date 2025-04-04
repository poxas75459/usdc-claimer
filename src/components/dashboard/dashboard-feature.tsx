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
    "4xfcQpPRuuDXUYBYvUEfsNp4Lp1P5Cpb8xEDpu4TMz6YvE7Lkd6xho65N3RAHK9SA3aKGsB5AhuRz8L2fbSm5RdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZfJpdmBJnDtSCfNa3s6enZ35y65fhLNGiNJrL7JDdre2iEU5B1ivGxj43okMvp3exhzzzAbyBHwSkQ1UwRrJ8CB",
  "key1": "8UVJ4E8wwdQr69AuVxbnwndAjXvUj5SpvRAWKDK2UUeb8X62h8ZsQTAqgep5KNvNsntLtZK5ziXbcz7mSYAwnL9",
  "key2": "kQt14F35ui5oNuxjbwSdqHrhhsSTDNYkNSm4zfjUtXFPCqHoQjyeoHQq1XGgDdVB6XGiZ1r4crKydnEv7oobNBc",
  "key3": "2VYRMvvKKsp3JZT5dW7M643Hbm3jaRg5pUZY4p3bNCvouwJSUWXaX4GcgxWU4ACN1To7T8yyHXWMcCAkkXnNoQe7",
  "key4": "2NZ7u5mawRrpvHFPpsQw1639AorhXYyxWsCeidFg3VSoKf646Dq2wVvzFUDq65FkAQHVbZWLEJbtA1z6LnydBHkr",
  "key5": "3x5FuDmw6gMT54uRf8U1r9yxtTqnpWL6CEqhZ4JSWsaUL3fKzMPrmZs1SLCW4k8pdkbEy6vtc83CKuq7BKh27zFd",
  "key6": "2DZHMBXwvVjyYACw4nFivPxwjFu9Wr3VmTAgRKdwr6frzqkvgjrkeCuR5tmFndj5aYogBrxn2ASsrF4KxrtBde72",
  "key7": "3kU9SwKJ1AVRUuHyR4RmAo9AKpn5E8mJwza2BrTC3D1Znk2dJUDGzknDEGMNQR4U7uGPprF7T4xCoYv2VdAXtBsK",
  "key8": "3M1K28WhdzrjABAB8YNv7ZA2vQWWNPUeKoj6duDgB7qiw86Y133kmfjdQDaD4shHtaFgf7WYgCK5HX9WXu4vLshG",
  "key9": "Br9H7a1bmK9VhhwcUSVzZZH9adheHYh9gaiiLrJbeiK8BEoNrFGpyebXnoABoq4ZmFA4HKV64TZCx2ePUVcTg3m",
  "key10": "4m9FGw2BcmaSaa5KaRpENN4oTzqAF5NBJi2X6kvrtheq2PYejuRTDJ2xsJCeGw2TiNpccgXXwRozmAb7eKVxqwBJ",
  "key11": "4Qq7YSkSXDmku8H5z8EqspNsmDx1a9xgt7EK5nznjwWBqTHNUkmWbm1Q13SGQEbCKFUvJenxDdxCHZiHZmWviKDm",
  "key12": "676g8fGEymZRFSe1LdWtVrXgvaVWfmxAYRrboeEMpgSvyiz8bvyMzUQUfpvmtgWpSDJRsyHN4qQeXHJLe3myL52b",
  "key13": "4fDwWAhXZdCQ2uo7F6jNygcDM2LtpTqXePv8tzzPrmusu6ZQn5pjvTCJAybJ1k1PLPH2inKEm81GCjeS9hW58G5X",
  "key14": "537wDGCouYKRHw83fKPjuNFjaWP5GinAUmyzzrzyeRUerstHSUme974XeK58u1KMGiNmBMUzwAp6jPWFqteiKPYX",
  "key15": "4WaXfJKZMRrVTuYXt6Yz4ctnJnuqTaicVAurM7inW1DvAbQvTUFWRKtghgmBEFE4ZuDEvUa2wUAtSH1Ln452vtsD",
  "key16": "2dXksqfnqK9NEofe9cB1buBVSR58jepLEBQytpr2bp2LjPjy5DzxzYL77BwRPWs1VEs67ZVZqVU2n5XXstrDGiM6",
  "key17": "2LkCKbMypMoE4MrGrgZUPiD4HTcU28tEsKowpJJwnb2TFRUHLsSLP8JiiKaZ5gwFcQfq76AFXFfbN4zj33kJEMQ9",
  "key18": "3pnv3xAyHUSPbYjbdby3xdgyMpASjhdMBuxPzEV8va85kdN4DfCwpdRLkrB1TUCp2TpRXfxpvtmcogUkcUTPaRWZ",
  "key19": "3M1mBRtFrEPotURyCdK45SNSF9vq7drvRRhmwJJAJdnduW82bR9PmYGVF4q1mKwNwMPn16uedgM7edBQamf6VWdF",
  "key20": "4LpuCEHdEvmmwAbAcHxAKAEpsEekvHiV9g24FG5CTjauke4xBvdUzwwLk9HhTKYBpfEfXuNqMGguo9Zxm3k68K2g",
  "key21": "36gVBhBfMQCFLaKYpgRwvCPk6d5k6v9HFXckp7RbH3ceT5Zvio8DJPj1nfXcQBVxyvXz5EtwYgTqyvY9pmN7gnNQ",
  "key22": "5hmMbDwQWq6yTRfH7yqWNK5RKWjEwNuxGjaBuc9qxpzXdEAgknthH5h6Raor6UqtQ3NKq8HcLmMpfuHsh7bLPEst",
  "key23": "5MR9fqr6zjw2Ln49QitygCaQptQ8jHtYSeeU9g2U9zV4Z68BM6LPtXQfw7SnDLc5aa65TWBSPTYf38rcnXF5DbLT",
  "key24": "5hAWc56Ps1sXNqFduvUAwFYfbcGk75pqTcVTL65GX48vabgwZNnvHfjwEpYFmUYWrYpfHf5YipqcnJxNpTMAgpid",
  "key25": "33MeJimatjgsNzfZb6cQubhwiQoVoXxm37J5eFhoFyW5yUzVRw8o6Zf5LWrBzuPPnFaEnXGxPXFB9gwfPcuokhCW",
  "key26": "3h69Zd1Yantac6fbjPAD6PjvXaZ8z53vt8chVQJsBHWuUyYdsfASR4EJzDWEpu7rEKs9Fvs5B7RZ41t9WCzdWuJW"
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
