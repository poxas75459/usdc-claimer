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
    "wGM8avBRzdM9pP6UcugMPgWVarupq7osnJCU33PDag3HKSqxNoSBB7T8WuWjvXTeFLh44qeJ2BReKgbmSPqckyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uvoY8JsbTemCrmHmSHowMdRQ3HML3e8PngsfMzMDZ8bjw9WbBTc5PBEv1UfpXhXvoPenk8eog31sSM65kDHtQUN",
  "key1": "5P3JaN8mGKmUBmUEo35oqvMMAWHFeymjMXRQq3i5Q7SC5vWKWkmjuRwRzNsUhunaU9YJ45uFfbPUxxRhrHmq1BLF",
  "key2": "B8CsEU47eKhFKCJusMszUwktdVceWwjC1tNL6vk8rJu6iyEtjzsZavaoWzq7UaM5bWgmRVppk34YaMgMJg72VVu",
  "key3": "4CqKw9T7LM786UzST9KmpGJm7sKdeu18CkyfrBpp3JLvLtcEzRCF2k1WUhj1EjuopAKbBWGkSWk54pckprAhMeQ3",
  "key4": "9UjoyW7tTBG5bk48xrGDxs1ny12PhUXJBiKqn6xL7244x7A8Uiad4ozmccGRxvLvVMi5Axq1hMpVCiiWJrSsKKm",
  "key5": "5CM8vEtDX3Yr1b5b5RtrDrCFCXFP5oh5Ppx4uCcLwEwK61W1wVv9evY9AYVAJLEmHTnzczWrdZ5BoVvWfpYFQmLe",
  "key6": "3yELqmW1KqXagqVk8iX8GxA3iKMX16UGRThFNk7g5oxoiufwFbHwNJF2fdzWN6Xv9cr8GYGJUiXJUCenPoSj72fi",
  "key7": "vYjzKhNg57vkWmVRF19ViVG6rgbU46jKXzLoWyX8esu5yrVj9XsaRaqhqjnZDadT4bxo3mpj8w8Ukqh7BZ2DWqy",
  "key8": "2pW1iZjGEUzy81RNuSA9sAUXjwRjkDWdZt16aPn4UDVXg3mpcifUF7F11vunMEeFRjfdiLsNzmyqJVoBLaWaK2hT",
  "key9": "2LgJsDWGre1FQNUj5KEd8r6moyxn8ZbFTRbUcsrCm37Zfmx9CtZ5vet8ZwDcdCfXehjv9ERkFBF41xu7MeM8pEuJ",
  "key10": "65xUNZwuEYdPe3qJyum4wqQjbPydnet66CS2pZX5oFb3Qd7E96ps5suKwtLskpxYjn7LRJZCFFZQFvXPN1jtoh2h",
  "key11": "zP7b1EPwYgEhfkCTvE2JNAKLkygQj1iZr1a1a9XrkmQNpAKN4ngbhhvCXox4GjDvRS9bngSP91mJMgytWumWvct",
  "key12": "2ohWnU8cf2Qt71fbgyTMURSiifYpsAFsnXZgvzjKFMkxWAWpDPAgoYx9JZKmQzwPTFEEBCQqmqu5YmwpvNWhnxSM",
  "key13": "2zZQRBcKPJQnVmxzWPfhJKQM9twuzKbbM22oaCWK4mtaczJ1jb4CYqRJw4puhSQ3UpEf86VscZgqNjHaGJDv7JRZ",
  "key14": "3UZMshiru5UpsNzScnYq65KdkF2gqoPtrdLSJrcoARscGEkHXVCXHjH95MUEhFqeuc4r8DthSZFzQ3y1hSGaP2Ya",
  "key15": "442KeU1tqdSCz9HW7EiyUiktiF6w2aW5ue59UsSZpDvtAyJ1JnnG4pmsMoYbUL4gigER4CzwDQ1hQiBA47yQQcAY",
  "key16": "3ReCLyU6ebZbwdcTHcgjEFCGZW5dJcVoFppegsDvKcC2M2uP525fnNFhUmqM2mxyybYP7BEUL5yKJVybUZHwB6Fc",
  "key17": "5YCE7298YzfaDkU2xTLS3TSuFrAKpgzkPsSPpXRXua2bkoKCSRzXtKXv99V8DXFx2RgS9nw9HdCtsVcoj58EQsC2",
  "key18": "5wAMkx5qqH8NpfG8gvweRwx5ZrjFY3zVkoo8fg5fzXKE4BgVu9UJM2LvVG3gz9efEDRtHZYREwstDUKWdhDven69",
  "key19": "3Z5mhHDVQAzBbtqAT4gtc7ekBLN5wNyFxCC2Xav3WAZUBw2GmbymfsipRHbqm8VZ23peFrL22teQv6XwbbZwj6DV",
  "key20": "5BFQY3BWDrWW8wDkKU52V4Yy6Mc96PFVW63g5KEgDuZatvSX9StNx242iayn63ehHwLDBU9nfzaRwFXJma9T6ePn",
  "key21": "4DcNPnVSc3qKdVe3vBSpQebLqRNLfxrouCsfCw2Wyn4oqhbcdMbsknTE5uzGAuhLx6NyMy2vxa9WmbKwRWHV56bD",
  "key22": "35ppT84QmgLQBZKVWBVBLsF4ozWoVTE5kMBfhd1r5hQWr86R5tk71nNhKeKBZMwvt2mmJa6WvUKFVr9ADysM9afL",
  "key23": "4Waqnww1eAk4Lj1NMcsEJtoyJ6h2HiGCF5YyRGV9sMHGXQzzFkMZ54zWi9FWqC6UE4UtZoSDzMqD1V1ojzJRsYsv",
  "key24": "4s2eojtGWmwHrsq7qPMJHz3Xz4zDk4reTwk3VhvtyrvC1Lnx3hQXZBVRtKbBHKPxbbhZZQuuoMpG5oLzcfEBjdGK",
  "key25": "3Czr6ddLyUboGWKVLVkDUqKSs7V1PKP2wKiE82AWHR3Gi2Xrmh2ByhS55XwSDmMbyTNiBcdpu85jCw134Jsg6ak3",
  "key26": "67MJzzd5cmTo7FkRpmMDmFkRKo614qmRysgva77Hvc18J5eNGr9kUk1xsa5gV9jSzVuZVPmPYEWXQunFUemvSQh9",
  "key27": "3ARxwh16ra42gJECwtJxQcWCo4qrgHYAy7ahPwNXxDJ6xJYkpkkKepQKuijcZty5Qjy4BXmRkvHc2ZQhPGT8bZEc",
  "key28": "5GB5AiN3BYccTMdLfuiYFSmtwvGLuXgEZwcwTo3JLUU9LmYgRtPaj9XUrhko4gXopHQqK9JegHe7fxnS3BQ5aVMu",
  "key29": "66MwzVUKwYNz18qiR9zRS7jWouir8oVgfV7k1RX7wScFSvfebX3u4z7nCuSBi2BcEuHNAdnmNWTsEdVDd5Mod11g",
  "key30": "X17x1pAJ8AXoaydtvbBy2AurDNVZFWh2c4kESmhoSi7ykYCQLb8Xb5wZzLAKPP9qWwpyhjumbkbNCsCAzBghvG5",
  "key31": "NdnVKDo3eQ8bGu5pBjbgRSgnipEHcxmFz8mTgkuyzXefiMgZwBFCi4SVWZJepUwrxE28dE15uywJ1RR7ZitYK5m",
  "key32": "2xcE2o4yXQpBkmACp1D1pm2fXvRQikVAt9hLHsXj7nQCJAF9cJERnvhbspNqN9PjxjWtBoWh2riUiXfSsmaAW6ac",
  "key33": "2LtuoeWGdzkKVVt3RejUmM4Ekp4UnTEkaHhXGimG1mszhxtDmJMYdrEzpbZ62daCnQL43kYJnb3YpbXh1dd4kYxr",
  "key34": "25bJJs6CEVqEtsAwVPj6rCqf6447zpiykeZvHWM1eMTEd242whzMJpq85DVRKELy1QJBkyyKMg4ZGnf13pcuATjZ",
  "key35": "2nBLPz8abs2j34tECW5ke9sWTw6hz1crmPQfYpWzfSNzTPkyFwsggc3fW33XJSLoQJUq2tEcB3uxrWLTDzCbeEjQ",
  "key36": "2i3cQVjJktgwV2wxoG8L7FfmQijzYvrt3bhyX6gqje3vnMCkkeSBogAAWLjs8XDi25cy82vMUNeDUX4JpEwzuA8r"
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
