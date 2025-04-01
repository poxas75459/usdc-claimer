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
    "2g3KgpjnaF4omnLhhJA3trjjuSNCeFb6PE8bsydaUpb3LQ9NvHULYfU7cVpSvZ2tt4cdDeYPmgqFFyw2mqQLE2ev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cbHk889gRA6VJVFf4ZngdX6BHwfcb1bRpSMTT9yisNa3LzTcfJdM1s7Yjd8vuaWiDzF2rp1RbQVgLK6bNBSbVMN",
  "key1": "67oEbX6z9PQkQaGg81HDu1gBsrNWfr55HZcW1A8YtPvB3g8p8ESYP4LWYERxYoTGUXfiNzMTLm1NuN5g9mju6U3U",
  "key2": "4g36aiUixf9yg1KPxvTFfzNz2FEVqZ7B89jxq8EG8hRs472J5MyBQexoCXoPoNDy1PS6p4mmoUquGwF1anEJDtEx",
  "key3": "5YT1VmKpCZcxMDNBraM3fyDsdPZCt2PWC76fFMnRP3ynKKxNq48sERkPiDwSFBfWZH1NTcQcJUtCsi3QxX8VXaKn",
  "key4": "4vWfvDXy1RgBQTBoucnnLNia1sgZgckiRgNKfErvEMqE47AuHKeTHAF446ASZXyETzHKw9iN9LtjB8CcGuth17z4",
  "key5": "2PaNf73pzBZDTBK3PmFxyocb6N4UYDkMNaf6vdva32aro84bPjHULf4Rb9MCxRFzVkCEwrPTb4GV8WuAc4FVB7ST",
  "key6": "4HCqMJW5pef4V3TQk4nDygDhuyxdtjGSp4bfjKfzp6YoHV36DD9zv3TQyMPSvRWdBPRWbVFudDAXgQN5uVAXxb5W",
  "key7": "36JoNARXomDqM2cz6s9GqbkMm3iWtxaeM3MNHqqfMQy9KHxESPzVh3xUL7bdDRTbJKMQ1u3VfCw35SqQgCngWtTU",
  "key8": "2qk8yjkoA2cmrebFzhHxyvE8YHkWHkVrutNbypXRjxDNfXnEa6iKB7cdo89t5p7JzgiW4mkAWSNH3s9wheNYaC2g",
  "key9": "5nmVLNVxdT1zmUdY2xyAFRXQTS5vBsBysfAHkYcUEmQt3oZYeX4ut56XMi1En55TEJSQTxd4oNvmsEJTWidxaUBx",
  "key10": "5XmaZ7MtdAYH2G444251s9AHyiWS7jvmMBamUXWHMWvXTALgpCNrPE2zLtKxtNmN7eiUHmjY8V5j3yV22bDzECxD",
  "key11": "5VzQPAB2ArRu18hyxRgmDkBKmyAaZaggFSuc9oG1czrw23i2qm5xWkYTNPmLgvZF4c7x2vqRgHjSk75niz4CBULt",
  "key12": "4siUKpFmfLnYStquo866k7qC5DJRKz6UDXkSvfhFEfEXieTLMJDTZkTwnDfHzfBT4QY8bJdot5UAbCgFWdgQVV1r",
  "key13": "3JxXkon9NRZ2by8qqwcykzuLeirJ6xqB6fF9ta3gV4kNDCJEWWDyLmcnaNCDce4wv18UBzWd27aTpW5utUhjVYXS",
  "key14": "42Tw9efuTboM85Doeo3VDekGV38UvTrP6QRU7g9RY43vYV3SgukCc7gNfvRWakBHYEVLHT1K2NvcVhnBPsniwck6",
  "key15": "pMJWb9MpCQDu73ytvhtbhLWQiqH9NpL6fYeJKdkQcMrtMxx6MCtPjmWqgVHuF1NTa2hMmpz8wGt4FzLQ6AsoMh1",
  "key16": "5Zs7MDRWhEF56rhXLBE4Zq6h2fMNKeMtjLuwrryJ9WvUigdGjNVXDSdWNuTChC8xbCENnzr6tJ2rS743D1oFhmQK",
  "key17": "3uYQ4djbptUJueJR7yf9KaU1Wp47TExvXacwtft5KmsqThcYTdqJFFaQsrMBinp9DuTA7noN3M3ZeV9tPQS5TNLq",
  "key18": "JJKp7B7mbvcjVweEL6Tg3x8CD5b3DFyG2zULpcE4owZtMtjuTPashUmfzMZFe2wA3omXDJRhKLDRLjNLEWWc13v",
  "key19": "3DrtA2SCQcDU55eX4XQuyCNEuYqL6U2Tq1xB9vsRLt73f9JmbdTkSF1bejbj8VEx2tnP2yLYBHQmfcrLSxqQRGQf",
  "key20": "aHckbfQY4trUJ7bCAznAfVsDrFzw8aQxgADf5622m4yPyCLAQKrAbyTAcKAySLM8n38RuhZqsw7sZ2oqi24n7bZ",
  "key21": "2FZmoZF3JcWsNCGC4gfyLSKoJfCQ6RxZ9HEhp2mJ7y3wF2oCAPm5UPCe4FWqXfNkAqfWtDYqQeh8SuMU26NgB73h",
  "key22": "24VVcwfQJj32qpytMiMCPanggc2cbj9frogQNZX1Sv9xJUxB4LjhKJP1kHLa1CcLLdXni8iTY4mzuGBegnjn3Qoi",
  "key23": "2j3crus41QbcqbNn8nXtNMM7gPyALVeK7Fb3L9FQ8FzHJYA3k28hYXJKRjuTpknmJG1ha7GWR1ivLbBV64dD7ZzV",
  "key24": "4w1zwu5HH7EdXQVd9hPPxPaFR2rmTm2s2CgMr5vWTg76RSnffuj83kaXVF8F7ah5EubxQQauXQwF1NfQENz9wv3v",
  "key25": "5QjU7fDwvnJTE9QzNKtee7ipxjvw32Uoc3JSMsxdcmNEhyajiRxsbqKZH46gPofBTg3LmtEFVHGWMPpXdANrZt1a",
  "key26": "3wVWyvKT9WoSHk6jvB4pxxQNLG8ELuyhnE8ooTjYeVrqUroGEicxdMwePtpTtonn3t5kWvfqDu8q8nB1MrCxsqW8",
  "key27": "3k8b4SjwjgJsWyXYU44kYPU9oo7xpmRxHEFbMHoECVNzgh7LscmNz84qj8iRm2ZHujzXY2JDqWYQxk5zpNFLXbtU",
  "key28": "3H4W57mE5SBwne5qrFggx8bkKDeQeRy6pjrCsjzsNrpLsjnGJCaRtzFFmWGG6iN7USn2VBNbQw4mwc6QzLcSGGSJ",
  "key29": "2rr51XLFQ4kBX4wLXivDTQoiX2KVw6dEZY9ySV7QPzmnnuRXmDLXU5TMtaucNUL9ZfoiXdjGEhb1UKpnDMcjfL2R",
  "key30": "5hKvFVAmdE1KtjFEuq4PZsGKZ8Vau7RBZunxtvrv37yXBqeXjVdR1FHba8gMMw3ZZSLp19RVX3pc84bPC71QfnM1",
  "key31": "3DzQcYGtudrRhFHGojiJYgEoj9FJyK1jMHSzUwyXQH3wBzqcHSNSQkpPN6UNsw6M1w9gbz5SJGdiy5uU55c4ZFdw",
  "key32": "67goYgG9M7efHhpQ38Aw2wvwMUhYTDen3W5uzgQRTuswepZDr2U7UhbN589unyxdCNMjGVWqQNwaDcboy3A68tZj",
  "key33": "24eta1AC4nffVggLfndMc5kVQkCqccecV9cp58dqgr7o2syf8N7w9LZASKJXiWsYDbXYXfawZ6befmE6aDUH7Npt",
  "key34": "2AfGY9cjitFbki4kJ69inwYbjEayBzNLMfMPz9kxLdniVUzRq1xnzvXvPzxyGp9jph1Cuc8Qik2nVVv5mshCo29S",
  "key35": "5DxZkJZUDzM177t2oHms3Vd9B9312HFAPhr8nQGdvtgLbW5d716uo3Wj6ZWs86ALh3G4FLaoXuvc9MaPyUR12C8Y"
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
