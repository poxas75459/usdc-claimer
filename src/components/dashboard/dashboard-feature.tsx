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
    "41LH1c2pLSxdFjzetXd4LkLGwsJ5Pw3JpA6qdQkBMbwbAifvn8wUoG5kprkA4XpN132AyKUTrJniagQoLhhTBFQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ibwep6ousGAYP4gFT9RjR2BVMRmPMV3qAPfyQDos4HxoqRcaT3dznMt5kFh51W76cDgfvRivhyeYKEWPktnuznv",
  "key1": "4aH7uGJEHmXq69kr35WK5D23ukWN26psuLYzUYxneGaRAJbHYaSxkUHFutQ6JDfq39HsFGiftbGkixE9pCwgiWoA",
  "key2": "2Gk92G5HZPatAmDtSwbHDng9yr11bUM7QKSijX4sGWrkuSbbtVnx9VQQZYbo7rsJqgUX5mEctgN2LeadHbiwZ1Yz",
  "key3": "z4NyUQ4EUsSsgxvwY9HeFZkEv44qsbJhBG3xGsFbg5Uif95NjVNLwoAzzGT1H1YgAKbyXstuJ6sftdGYzEp71wf",
  "key4": "4tu7Up4qnQKNB55UHq9RZgmwRmcPkqHgJhvNqv8uJkSq8ws6N6M7uHWVwFPHg2my2uMZVfqZXaSrGAovbT587LQ2",
  "key5": "qYtXKzmfxhfj8n8gMDaYezEUyuxZxryRdsz357PdAWpFqdce2RqP4CJ6bf8yLjq7BvHBa3mfrYXqpgoHnqN5Xkw",
  "key6": "5LCmuTT7iTs3gmTHwsnTzJHnEMtdiQbxgkBRHEQDiWjjx4Xz7NcPrMFqNw5U2Pc9K9rwHft2H9niLK5NZSMT6Enn",
  "key7": "4AEu15LPLF5uVtvWxXvyZBLwzsLsUAHLPKFedMNBR61JYWmZLdX82UqZuxJSUdEGdgUhAEHahNvMHJdXGU4S37C2",
  "key8": "5TSks4tCWQi67JdKfHZWv2YcSjiyKBRZKBNEAWnkrhaZBhMGoFxwU8EXMnbwA7aoLUpQZMUG24uycKcPZ6w1vZwc",
  "key9": "32DSwc4rDiDSUqvFXeWbWf1anJeKAr57LsvPYLM9zxDV68QZ5RZHjZ9xtWTyBwDj1khVae5uoZDCrUMJM7jW3FDM",
  "key10": "2j5ZmwkYSVcKbYLM26NAhwUxRWYdvQifSFK66nSWvWK833eNW6ycPqDAYPYp3cU2DvJwZE8jdm7JyEkWYJNV9RqX",
  "key11": "DzpCn8Rp4V3CXZ4HtfKUFJg7dsrmbj2zi62PaX8nTj6eimXMP4dMKwi4rwYte8F64s62bb2whziaJsSiChjC5fD",
  "key12": "47Av6bXFjXob1u1UZ3Yo4XP8urgQ5Po792nTANyJGjp7xBWy1ouBR7vzQLqjhxkPdcQsSYeKJvsy7pwmoEqKe2Ka",
  "key13": "hugg4gZQWU3eMna9DgsktztkCkVvXFZcPrMu385NLTdSqPiFiqYsnujWFNre9ABzBxkzytBPkwhoUbdiH7mdwht",
  "key14": "3Nnxkj31FMhWLwHaoBu8D5s4AzQ7YZ2SrusLfSvzXuxVbiqy6f4dg96fJ67ETcbF9aduiXXfD8AGKvUW37tGyw2e",
  "key15": "4j6Prb7kj4CHLiAGVdVV8CGknVLdQaAtXGSw35XahVHQAwYER14tnHfQ1CQcFzezM7EyiJs5tbKn6vZ9RunDPg82",
  "key16": "3WyPWKBecUhqcedDyfSjAXXEwR6cCijx85J2QBfBArHLgZzeAAnjjKWzuTNz2e5NQ7nMNtXnPFcX4MryEzgg9LMs",
  "key17": "5WNRSRBwYEj4NqKH7St8BDUj5WVLe6c9gJFTRGa58boz4PZ841Yo3fKcMbdkKr6ST88HRtQKhdPvGjPU1iNj3N6L",
  "key18": "4j6TqcxCGQrk3fUinTr7wKReuvNr4SUWCEwXnJeAh5SiLTzNiHy4i7kxdH3y7gAKkcctWjpHXeJ6DMw8K9zigQUb",
  "key19": "YRz4X6z7HfS3rJUY9ESzVMp4nP43pbKkR7i7LFm4GN2aYu5bcKq8BDpefNbTCZMAQq1nTRY9otW9suuy3T9Wzqo",
  "key20": "boQt7KWj5J6hSXevVFRpEBTnUtshd2g5fQ3NAP4HcMJdZ54ZnoPtKMcCp1YJYPv255y9BFJXVP1gFt4rWRaQsPf",
  "key21": "3HqdzZVYmHNTut4rgBheHa5gcJ5GiPwg11MFjkd2W7K8iGtrknxeFVdKX1BgjwsX2hBMX9tDobnkvk9g5J1F5Wra",
  "key22": "GYfrXSEE59tA9EENJfgtLid8L7udAjxtdjvdDm34CVzsD7xnztUSviuhQJaYnxp2owizzKtPf3vdSmdx2jxFxCR",
  "key23": "596cZ4C2zp6fMVFKacK4eum4g3XxGBAifDo2HrwYEYq735SVbPy4fZ3KeaLetreDKs6FgMfa4uvcFnY9eqBgtg1y",
  "key24": "4Qot3VhkLNsTMG6Nht79UGsEnUEiUBComn7zXA4Gisf5y3QFAXygdkh2JaPo6UmoWw4HhnAW8C9Rd1xQwY99Rp6S",
  "key25": "5zmnWB36vfci6ETsg1XoWUDc9rSHTRYh7iwqKApa3jrsoTKdiZ7L6M2DASQ4ChUvqh7p1Lv8cwxc5ymeKFXDzL4g",
  "key26": "38Pz236WHt2ck3W7Rf6eqGpcaGiuhcnS7DZvADiGJYFY67LAY5sFKFdhdpCTBT93dq3evvcHibp4V1CaWpRVx7PE",
  "key27": "g1mW7mxJEDxvFxcstpDirMzbYXyXNAu2VmDfAsgfNxrJzLdSNTnf6YDBoRXMU7PY38pxhmrjZHLF1uGpwHRwdW9",
  "key28": "58WfWvKBTQwDgBuabmcEsLecbEuTUEQJN4wCtJfn9FPykc1SyP4FKqMwiPUfPJuJgmPM5KpecsxPmiGRhekfvs9i",
  "key29": "Y1cFwBnNRBaneG4CVmt7ic7FA2kgmEVZ4Mcm4HmL6Neri9xFg6xhk3XJZ6ZpXoQMLShRc9HLh5Gi3YYggm98jDp",
  "key30": "3jBQMf4R1HSjsR1LZtJpnqMRJWHhJ8pj6D3LdnRHNeZ9hAPUzWeNgeJr2TrXRjvb17FUQbS8TZMq3KHvNRvYY2wu",
  "key31": "iD5ZaZviPUksfVFRN3GpqZhTCffZYiSHiMj2Uts8rQFAF2BCNby2WDP2zjDFaAr8uTpJhJXkuT5vkhgfmJH3vPu",
  "key32": "41AtgLmFpmdsnZoTDq4Pq1ojwT7xAWe76TDQsMcVYtj4wrusmVs1EgXXLaVnjv4ZjQttg9naiLF4rveaVqjM2Yq6",
  "key33": "Pa9TGchwsgPuSUMF7vmpzJz3etZ9S6wQXi7B1EwK6o1BXnjY2exySPJ8GFeF8PbfVvR5mBWxNbCYRioHsdmUWzM",
  "key34": "5rTaaQbmjBK3MAAAuYiSkiS539TffVZ7Heju9EZksLYFBEtCbLWyj7e76pFB4FLAwJ5sjNnVz4MMVtYbH6xqmSF",
  "key35": "87gycG6888eXbZoC9aeNpUuieTZd7rnJZzmxEPuNfnFJgDb6S1ufrAXvybA517Af6A2SwTgWhJV2N9WJnzPF2A2",
  "key36": "4gnwweisnS7tzVSL5zyUUwj74AD4LRFkWx23viNHRywtLoXDQxWJyxJ6TE2gMw3diyQmxxFKxskVXrq7HTcHHRN7",
  "key37": "4TfumH2FiSsgbr3gBVs2ACbXgYGSSrU7e7u93iWcapBtCkMEdj7Rjk7aumGTBAuLrxBAMwqWxLAp1HjpBhj7uTzF",
  "key38": "3AqugvGM6qnNAkxPxg6oCQ9aaQkbgap3Gos4xj1QeLHYXSYN2HL28n8i2CvjBRFqDMv23UdSN8joErU413x55pEC",
  "key39": "35topsc6pMX2CDfdTZdVk2sZJeXNfhA2jfygAuHd65Cq7Rvp7gruvFTKxNkgMCRc3SvK7dA49gAT7ssZSJqoG6X",
  "key40": "u2Eth7vDcr6s5J32QwJRmrFnTkFTTbr3u8HXgZc5DJpxVdkLBsWqQjJvbeDsqvV1vkohYdyMVoynSHnbu1G35nw",
  "key41": "2S6wt2HNvvBZVhGa5TCPvB9PBNBDnUGXeXdpW5aUcW4ENpMAySqo4n18MYYAqAQZoKvJeT3kynjeM8EaFZbTv8W5",
  "key42": "5a98wWn6mywJeSpyYBhSm9M48KE1ipS1TFae1Xk4apMptyQySt7eNgwFfmk3c3B9syabquUaaPidcQrvq7FcCzzW",
  "key43": "2kWSuNAjQnmh12MvLbRdKUMCFLAYt55tF8Hqhmo3vAbmo8ZWkUqBhZiya9HNEEh8hCfXwzdKYBMgMVqLvQmAw2EV",
  "key44": "4ndvTngCfdypj3inCxYuDHqxkV5Du3rpojMXkfkdptYLtYnSX9uyayCHaboUiGRJV5cyht8N6XnQNjLwjBM9fEwi",
  "key45": "44dJuyEE6Qm8NKs4usR2tTUAunLuEEqC7hhbvCbzT5iFHaw5p7quXhshnvse8gcsBzag3YGLnrmihe7uqHVGS6qs",
  "key46": "4Cq1LaQCSrb98BrrattNh4Stv6cdgqhXBrEL1yzU1iaJmpBijhjiytXsb8e4wMe63AnQ9hEc6tsdMqUESc57eQ6o",
  "key47": "2SS9wfKMWUW1V5CDTsR9Gg8EVzFDSZbNH1kn8HVq9Qfuff81CRWM2qz1rzX58quAuo83hgAwfgmLrN1iBVZm3qUY",
  "key48": "5aXZBXnyuMrfeMrBUhpVrMD6qRvczM7KR3eqfzYm6wwzjjRe3o7EoMH1pHqEjohdpcVdDKFz6ofE9RJUecnKsmhr"
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
