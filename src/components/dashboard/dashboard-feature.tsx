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
    "43vJoqZdySx3znaVNLn6ztkDNSQaQKvZTFtHmLztKnEvRqt3u7trc6sd1ufTh1Vg6qESwkPUWXq8o21765tYvcbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xZqHvqiwz7Tf4BpYbVUNNk4PD4Q1q1ajNvvMD6NNMrg2uuKYnZqCUzr4HLsMSFMajFMmCsDZrHLYWJ7WSUqe5Ws",
  "key1": "SkN6iWmJ73cid98oFCqj5qsDFYhfLUMU7XBCZJShRd81e8EtuvKcNVjELDpxDao1u4uZZqaJHYsWHjiZybZR2bg",
  "key2": "4ttsG9kRExbkG8ZG4ZBZrBAfKPSiLxXYRTMDJu2HyrNNMsendzhddviP4Kk1QBQmZmtWXzsQycxiD5pYssyVCQT",
  "key3": "3FzYhEMARbzJpgwvP5QguFssNGZZ5pJVUEdkYmj264op9sSigSEjupMstjEhgwWPid1HW2e9kUjNeV53Jm6z9BNM",
  "key4": "3pYDTW1McZsgjFjpgiXGAwqBXM83Nkogt7BFZTfWKAFQNM3xHwcZAbCcAWCLq5Mnqb74jxrBsKucUiXDMidZMPBk",
  "key5": "2CjvxtzSu3yV3gBR4tjjeKrDTiHpLRBAt36rvcxRRbXYpSNeEZZAPqJ6drJW9PvsyqcHbRTPfJQ75HNFLhUNiSma",
  "key6": "iDJyyKrzWHEvXkWZK5abVwus15B4ykicGAokPQYfn8LHjrtBSSG1b8GE4YU2SdQNAp7MZ8DaP8TLdR8EBnBtV9k",
  "key7": "imzv1L376ekVDy4VvKVPB1Ki9u2s88Qs3FCPWFSn4a2tKDtK5au2SrdJ38xwsBVXpJbjYfQTwuxM9rrTYbAt5M2",
  "key8": "CD1Zo1EWhUMJ3zUPKWzVoXesxUKu7sWGAUSGuv1hVwb2Y8uJsAQYyfCPnZYUQaMZ95MuVn4BzhgSMoN1QEp9efs",
  "key9": "uuKFqGUWMuRMid66ii9EXsgzB2DELtm6mMSiSX5HBhjGm7YtfL3TgArYhDPfnBMoAGWUqWnoiBqi55ok55TfTgW",
  "key10": "41NFBA6kNPn4RFnsbnfYbiy4dqVRntH9P17XoMKnxHcvEFKtYa8H8LP2YhbiwXa51h3p9rUYVCw625GBPEfrm74c",
  "key11": "4dWSz2FkYPpVkuWQV31KC6WzwowKE1PDxFomXZurES4g9s57M9yWNpiub36FFZHmM595aBezh8RyLqQMZfEaKeh1",
  "key12": "3n2cSXURmxVPoBpmqcWFEnAYdVRrkWRXrnDfWa5ESiXv7fhj9MHttXS1M5hnHvwp4Qf7JbUT1ZhTQWoA1EEVm4QU",
  "key13": "2Tgq33YXgbHVEzU6h37xJRgz95rS7RboNReEXdP1BmyRHPz2PVdYU1CCPL836ox5TRN7PyQ6D2XFS7V1KxFc7QCG",
  "key14": "4yX7tYpqNbm4fTdSQ6qmxtckqHJHmGTfmQ4v8dZVVu9BJyQaUc8oGMmZpexsCypgdjGHLagdAMYaA3xJKZwnmFMS",
  "key15": "4NFa9M8uqHZxvSZcPdmC3uj2HMLFXfPFvPuz3bqovGjz2dv9NWAHUMaWg35BGfwUs1UZP3KMFEtQuVVa2SLKUd6e",
  "key16": "4snZqzVpf5VrXzE2XCCtmMaeiGcKc2x1RrvxHBuVF4qKFcVfqfUbQmnTo8miLEDsPowcRyvVXgxg6nDcuLAtrdBz",
  "key17": "4UfJNuSkNmr872dJQdpPFohe8jfXHeC5hbth9YVrRkW6uv4gt2QRwxrALtCwMgHBuLGWJ7CHqWgV6nEX55kHdAbX",
  "key18": "m7zmyCJCtETQ5a5QuhWuXE4h4HhtGXZ3CHiNLs6RnxRz52VmD9MScWWUw3kFnASddFCreJDMVgwwzHAak8m17QK",
  "key19": "2hE7K6w7cjYtCnRySAGiK9fE6jcEGw6NNmd2BcBE3VW78pvshr5o5frkZLRBdgfVniKFmfgxiQy8HHUoRTmKTwAM",
  "key20": "2rCC4r1Eg1MM2t8LBgxzDYB3qLQizC3Zu3fZCDqGbaZQd9KR6D9qTBGxtixp4wuueNpvVsED7G3jL8WbejkVURJt",
  "key21": "JuNhFCgTR2Drpvm9BZVs7Ppi2Yjzd3BWvyUTXbLXziMpLh9ksQmQhbKxHuTcCQ6nNK7EyKKL1EgnWdztKHqxs5N",
  "key22": "4TLupqcRFMYswXofaZR7sTNJBPWMP1gCpyXottE6sudJDHsK5GdmmR8p6RZp7CGxqvweMkB7BTdUZohf9Sf4G9XZ",
  "key23": "2me9odY3J7SuFAjZap3s3rAasMGGaLGgvUXQSg24VEfgVeeXM3Hkjqh6qggm3MZihVSXFP88J8A8Jmas41EyMfA",
  "key24": "53Kes9xrkmf9eify21C9kQwf8Wwrnrk94ijyixBGKkpuVAiGgSaiu2TBHt3f21YmRij9RB6tRThuAmWVfZRvfq4Y",
  "key25": "2Jf1iW1kWYJJkSwT3pCDvoJVmtPtxn5faxFHToi7YcaX5CoesCXTR7w9rSaimAVFxqvWicFYe6PRAum2iwoR3Lga",
  "key26": "4wggNqHcFt3nm3yvx7Gm62etBDVPyhTHa6kqVtjaZcYecP7G4ptr2QG8tLDepEhmZNby3sRoa5bhecHCtxHNtuXU",
  "key27": "46txvzHEf9LX6VmQoVgpAkzKbwjB4w6oUceHssbnyk3KJwjKqCVNyrLmW2tA3d2UHtGjfoB7c64Avq94DN7z2rGj",
  "key28": "2sJJDgHn1dMR31wtA88Rf73Y8MqgtExdkRFH2EDn4fnMAh59aRjA4kASSXUyh5Fpzeugkg1EkmSUpAnVZyD9Vv3Q",
  "key29": "quwwPuc3xuV8QW27Z8vGcFqQyHdBLgbkMj4jMm5sDyCZo3j29BWCkSumiS9v54geFsSFrcDWBe9tYqJhnAZ9eVQ",
  "key30": "4NXk76TPEvdC3fNRwkrtqAaUWWgnf3NUW6L1ty8a4TwzGgv9VwdT6xpAcHXhnZbWHTSVqTtYdPUPKTGQGrc8e2S6",
  "key31": "3T3qsHsZfVyvxoM1UdboYPkDTd7mdW1dkebgLfaT3TF9YXQGAVRveKZ8UUbWf9X769SvQU7XjTZc5Hw69RrAkTNh",
  "key32": "4dT8KHiN5Zu7nHzc5Spdqpu5uF1YuekY4MH6HK5Kdhpc9N3JyGHbXKyRAMmeUfbc5FKAb5gCt7Qn7LwHatgcqDvS",
  "key33": "5CVWZ8DBVjjFpscWyH6mg2kR7zZzwBh6Zx2RivDkAbhLTdx9gaPBzMqVDNMJGYANdrNRHrEgbn8WXvevS5C86ZHG",
  "key34": "fGgyPE7m5PAZE8ncDWLeRD4h5YqWKW9RRYvVD8W8mvWKdozEwdDxbe8semo64nMouvkXoUCtPtosDmWMuVKDMPK",
  "key35": "4ghh7jcRR2EUSkWPnreYMJLJroFw5AJ95rRy8eQnVPiEQ2wHSPp31BqHhtqwNtAswaZp61JHhwzNaXta88XgmKr5",
  "key36": "62oVBQLqqFnPKdNVBxQmFyXPst4mzjs5QByqJs89CiAM3pe3h6DN9G7b3q9SUTSv2Ykv2WiYbdCyRqP6s9tHUC8g",
  "key37": "5ZaMbGzrH7kQBMg4E33iQUamuddSz4oQwDVFGxnhXtUAYzYzdoFCm3GYBJbZroD3Y9GJHeFPPzWW36HiRh1NHv7Y",
  "key38": "3WgMJgWvsx6A1g1Njr92s2X7CAZjdFy62YNoGt7odMr9m2iZc77S2DduagJWE8kQ2Kma7tEo9VLVQCeFJ19FL3KN",
  "key39": "5XrcTZXwcoKeDyGDxvq3tftgRutHrFpdT24hv8UsCrBZzxujQUhFxSDavEThRNNGSTzHm3y2jvGa4SjJfGDh94Zu",
  "key40": "4EM371mW7aTewCoQrrWSvRZh63ohu8PG9FQ339rUuBNpRecoxWwiWWuzvKFoNDPn6zGJyaJqPy3BHim9r58c7jEy",
  "key41": "2jeigr47GgMuPFva3guHX4WvBjqp5CcRKdWC8ygwcQSQYTYAEYF54EnUSqAt1iVZhWxefXNnCUG6b3tDV6z8o2Q6",
  "key42": "3pvhiwUFH43KXJ7UzwwfKaoUFWDvSwKCuDichi3mgrLJXLFfag4gk4VLfCEQcx81xcLs2aVM56cHHLmKoXiV4vKE",
  "key43": "5d31jauHvanbp1fNWEaz8FKjnQPVkHEYaqCVEfy5riAQkzFmhP2B76EFTTFJBdHSV84vuCRYDZknJDY4fK6ryy6o"
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
