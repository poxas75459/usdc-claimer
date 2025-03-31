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
    "259dNmyNmVCrhisokdw7EHAQMtT5whPEQAZRgdp4qvFCwAziXTB8NKUTv8cyxGoW9oaD7QSRReo5Aw9U7PqydNeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iMAMg9Rjv4Twr1WGxYhBLfQnTdam1NNzYtG5Crvbvz9UucuX3DFPh3FAJ5hrDUfgDt1Ms5T51NpSQX4RuqMXMwe",
  "key1": "61h6PXTEzivZvPKeW7aUUJebUkKLCwUpNM5DL7r8cEPvrDyiBgJs4sgruRCBe2qL7m6bqik6sHsCjgJqud4UfZxg",
  "key2": "67T6hT4D6F4ErZKNxGE82PC9kzc92UiWwXWAzBJFt8KZ35ptf2dCfzaRhv857wFo93nW7WbWggeEYqcTxVPXy7yA",
  "key3": "4BJ4uB8fPLGVxUU1DgfCeV1Ty6W2U1CEDYu5raP5gN6tyVEhK5y6QW5NmYpwptcZdgsRJusZBHi67gbhNzBRZ4gS",
  "key4": "4KiTh4QfuRn9X6EMkHF7tPzM7R22KDtgfAxfPk8hmMUJaRe3qn9kroJBkVm4x3XSCsv3x8N2nkR6tn6BBo9hfnKY",
  "key5": "fJDqVJ1bEe7R5eapc3EP447BVRPhUNKx9QEpNihPLneDqAgVdBVZLhsM25WqDNwacLFx3gG9s645Y1X4mVx4sew",
  "key6": "4KK4XT6DL5ejZvdvo3cVfQPkmq3XCLQTbCh8Ky6eFzhXkxGPSW8zmZeicUJq3D8wrKpcMxVVMVcnk48dEbvrujYe",
  "key7": "45XnS8hn3Ze9RVZsGx3Mx4bNghXafyumD1Jnug46RisFi4hyfbvXz41mTaWgQ1exRCZmNGffAr7Tnt95qNjc8neG",
  "key8": "2TFmg84uWZbC1L27zX6vjyFUutGaagTn6s7DYw9aHocnZLpAJt38fELUfo5PHo3cQ9VWBDm1H4q323nJZWLDwNVR",
  "key9": "4nXATdD1TyKrXYBG74c5GMPQiD8mbMQuWvWv2DDuSCGn3s4S429en5HptvfnophfKgN7Sw54QXoTQhgH99WRca94",
  "key10": "4BFwd1TDk2XTtFvsqfHVjmZrTqNWQ1m9MyE6TPm3LZV8EEnLboshTsu2q3C6ZSgFTQX6ff1tMWRQh9cG2mkhaGwj",
  "key11": "3Jn2R3TC8FstK8y5siMaRHdLgRrpMfrrePWmrYYhtH2M8ZPUHy4ER5crtCvqDFFeqxrSgBQvhpjxwmoq58PT5DLp",
  "key12": "5xPYxgLsSk1T1FHvjX8mAxr3Kv6GYieeoCY2zjNXJ1kcg2v5djZaGxdTR9UYq1Qgw8ZyhFMfn5zmukDF6HKS7HUd",
  "key13": "3n2ypCpwahmRXWTzW7h1w2NQ5winFSVequSAvhGA8uViURiKDGnKAXeVNnFtmg7B3PG9TtK38RFtUnhMxitp7rKP",
  "key14": "paK6nyC6UrpfJoWEad8hZw7d71CPPTB3CVTqoM3TNvULVdJhjL8ZEHpxUmPo4QuKN3zWo4JWYrZpajsiQKTerJM",
  "key15": "5BgjZLcNX7CgHwiWw3ZBMFRy3FkDfZAziXWLRRVZvn9pnhmJucHgTJZfuS9Xb1HVmF58KqNiCEEDsoq9eUP6UmUd",
  "key16": "5eTqL8gFDEkAa6QiJihGDpBYqUzSdW6gWjbcjRJzkFW2yWt6CqB29PDoEwZRB6uyuRUzYrnYjfX9n9RYZ2GeBaX1",
  "key17": "43CXa6w1soWnmpY3LGuiHgTbHRCrWjWAhLopyWmatYsGv1gvUsJQeTng2uaaK2JcHCvquMNvLJ6egXzkxaPTWcB",
  "key18": "3wZMxRLBVhov3YwaPbCKBVaDqcz6kjq2qxHDsQAfzSQjPWjZ8VeyMowxHd5rFnTdVn8ngGiasPCvyaFcvAU98ecG",
  "key19": "6erS2gSr7vC1o42rDenuZ481mvRexmiXSbYseWSC889uoFwHrWqQqRAd43eKuFKxsMELz8cgjXYTKuE69wVzJ3t",
  "key20": "3gjkn9TQQzMnXnNsTP6XqGvofu6zt1uh4fL1dwr8bQ2mLTTd9CQvzdiWU6UNCeN49rg6iyxQAYWVRBq7yTJvtyMc",
  "key21": "3DJayGcwYRjKr7qUXr4oMk31ZSykc2oKJ8j16XLBCt4fgKRf5RmbkeqLxyoKpi22AbyPRyZsRBb7HUau6F6rnRVG",
  "key22": "7CVVSFPmAMUihML5rGYFz9bphZP479Ksq8kGbki1zxUzmNkpV25FTH4E3cey8nwEVv5f5byAR7HBANHALmy7YP9",
  "key23": "JUKxc78WQedTD3n3U84ncpQUYE4kyQJ8jnpjZ5rvQ34qDHqLkyDxhzCcjXniQRR5xz7SR9BDsorormDoCEDk6Le",
  "key24": "oM9ty8HPLR1EAwQq5QY6QNseZo74xBWPAREwutUUiNxhSaR9KLFESr76hBFpFmtUtBJXH1faQxozcBY8K7Qdhqo",
  "key25": "2VCPjRkwogf2zUsyYCof6EQDSMpheEpjr6QpKUaAqDJfKbroU8ZftQq4mA739kpZDQ1sKWTHWJHjVZ1i58gzue25",
  "key26": "3HLWwVpUmzLQCaw7Zk7mMVLB9ELxAjQrk6DNnwS655nEgY8rum8NnoBsHD2xA6FidTR3jaZDtVn4yG8kp54nK7st",
  "key27": "5SL3CNjzxpuuRBZ3FdGfqvQMZZE6n6q5dS4EUFpE1RYXbcjymcPGM8fJSnFFmryfNw41to3pP2ST4jExfGRRpRFB"
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
