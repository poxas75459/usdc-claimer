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
    "2Mr3AqGYXwpuSSywdVRWmF1QpcZnfUbZKfpjpHk7t8Xn6FQQREdMHhzTeGyAzdmCHY2DPsPuFNm6zpNrfyHjnhia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uyT8EGV1giqdNpfAjB1eH8z88A61sheP8StaPjytVvRKXP1wVHkERCAcNwaTac5B3FV7FPuyudefMbqJnBiMBJr",
  "key1": "3tRyMZGPWRztaaBk5nhsfT8ecykwvxxYzDSq2ZmVTVJCzbfh4ePkcB66xBv2tag4Xb2mbUx8oeyUgx2hBn24jkJ4",
  "key2": "nYx8csjkdqSkxQdrMviFxqUgWo3Kbvaf6oVKkNt134xcEAQkF3CrhyvKxwodnCGEKP979nGW7LNE5SbWazrA9xf",
  "key3": "34RaX6nLU18p8BETBDk9Qbrfy8yjhtHHMPUZkkUhJ3eWWBeW6djC7cQoGBfosZk8nwuwUYbThYaLExNk7GDwxCUT",
  "key4": "24gbaYgvgbwAuyh7rYGfFTa1wrgakYxa9gPG7Fhtx6MpWYBt62GFhETD31Q6tCZ9iFdVAzXh6aZXqGFcLsD6efoU",
  "key5": "287agQRyWAziWNHMmFatKcZ3JKMYnwGEAbGhjT72dSwK9rB33WC4U2ajf2u3gf2k3SmpmZnJQyrXdwmLLu1ygwjj",
  "key6": "vbL4RtFpZ4ez286u7CKLPWwvLaAfr5V3s2rhf1tzTYsvBiPWzDSt3CM8Uz4Pzg6og7nRQQkY9ZkCxpc7yR94L4b",
  "key7": "228eUneupAtmbvTy2kgAmHnUrD2NQh1MeUtwk1TrZDTrE5VHxRkzofUAjgNopcrEAwgxz9bNSizjNUUvJyfGyYze",
  "key8": "5MSJAPyQ6BQJNTr4tM795J9UJDaiyApedoduDGtEvy2LSjDZZQMcp2S1wcMXeQCk5jYeHgNmobP3ojUg6zsN6fjQ",
  "key9": "3FdMJPpG4SUygKSve23hJdnsVTSoRj8ESJGiD2Tk3sFFZCjkXa2XPAu8J6N4DzCvJR6wWixUwrEtWaip5KyuFNYn",
  "key10": "2HinX3QB5Zoe1QwL3RAJLc9ivnW3VbW1fTnMPJtgenJ3kSWNJJfZxjV3G1uiSiLjGi1bBiFCGxPatdpsKvogPg6U",
  "key11": "2K4bdKf9uuBHf91PpUWeEyNGXMPGqxwJ53MNyinYYtMoBtzSQAH76qoKvHXC4vg22bfkayHqR2JzXWMGdMoz71z9",
  "key12": "bzhLEGMNMMtgUB8uo3NUxLXuwwca3A9EutyAuNteb5m1KWrKAvWFK1KfRdxJQ9zh4g6j6WysGW9gsMr2AhYxSps",
  "key13": "5ZiLkkyEpk2p337XFbzsc4oPku299JWcyJcJbBhyTwr7icKfiYE8VTmpD2vpFXQQiB7NzhQ4HeeHWutS4gNuMcCR",
  "key14": "2NBuWQikLGiqh912mNTbeS5jQByr2V21z3JpygkZBeXLEyiCY1WPZDoHaLntdAUqNNHPCNeY4Bg5VfDPwSReT4Q7",
  "key15": "2MnZCoPNeTgGJ649tTSLTcceZetxpKzX1kuDHCW8z8dhNE97y4HbxjTv5rgAcwNTuL7QjbNmEJKxQbLoL7XPxZbX",
  "key16": "5NkvaJeSGTpyWTbD8hYWvzRU6xDAPkjzJojo6TbvTs7LbuYDdjDTyfnRfd9CEq4Hz4NuH4cioVQi1r8UnxFy5ERL",
  "key17": "2ga3ChrYdTNaBESHkJBZmrAcZHRJs1TNDoGtnc6dVk76ctMFYNJMR4NcFW9VWRKWMbsoPDVEzpCYoAAB4wfDeXhX",
  "key18": "4HzXeEZ8e3mvg9mEc4oB68k6Jr5bMz2qm5zpi9qquNCMHkSLMavJENXZw2ZYgjvQoeFxyAECmvVsZsP5gjvK2G97",
  "key19": "4S2jSRM9eCPxAp4a1EhSodvPPdJX71TybTDCLTsR8Wu3McwLJxZ7rbN3LzXZfVzCA4fMnLDYSdiBKA7mCk32Ldg7",
  "key20": "6pjg39fLKKKRzs1ei4TApEftVyk6X4QYY4S628twNyf8wezZWTrXfReiURofUbvZ38TyKrQ4rr9yuxymDhP2YpJ",
  "key21": "3jv9o7hkNspSfFcBdAygTzoACT1skhzcv1ZPDdfhg2BzxUDKWiEz3GDEXPJRtFiMgSCH54eiCgseUNkdf1jo8Fg1",
  "key22": "2fzjopBz8af3QWgr7PENBNzxtVNYUhGFFySYG2UnCFaqDEogao6hzuAA4qwLgK3YXUmGcwXxvTTWdEM4AsKkaKtQ",
  "key23": "nY3uXAA3kPxz9Yz3hcr1ZMrcJ1Rjiqj3Yb6SBM7nE5nq32GBGys91HASvZvv4z2NrBFM9srkoMvHKi3QsReySCL",
  "key24": "3VRTSHqPfwyXaE2eWd1pr3tBdXKZJJsM93nbZiJwqHm4mMVfBQ1ReJn8G1pbutGefMfz33PARZZ572FJ8fyvheni",
  "key25": "5yHpoZb3gVYgErDa8weRJjrLDtDVDDDiHTozr2jq6kPxbdRwvGogg5kYSpyZcrBtf8ufWdSHswsq82RtCidgBAt5",
  "key26": "5nWdiHuYkpGPD6CCpAC4Bwg42y7muSjfgcsUYDkcuPK7yVtvbFVZk48qJWMCfJxrXS2sd1cm8yXyZpQSot2nW98y",
  "key27": "ZM1FmG6qhRu3bswNkLf2W7MP5jKZYc7P3ajCnCFW46HtskwGvGpNMfMuUc8bCiDoaezbFyZ5zQbW8AxXNQz2xYz",
  "key28": "yeRpMEZnsaCbecHdBxhdmB8PeL8s78B7pzuad65FxSeohcQvo8pfhbcsfHhWYyENVpmw3Q7Dhb1FntLwKFjkqjz",
  "key29": "4TMz8rvbiXeFshWJYyJp3Z9YozojdaosKHYsXd7SRFzcKRT5Yii1NeobXssKzyJ93Gcx4ZToVRkEB7qModoYbAfi",
  "key30": "5EPWvdXvpwp1BaDdVVz7D9outYrbHgiiuF68WhbdMHBWBM2RGJV585839ii5rNVMdZFAU4NbtYSk6uinSJ3Nx5wY",
  "key31": "YtPkgNPjjdEdJeGhqbvqcBdyJV2AsT8fvEudGtuyjaFe6KpzMaB5jwuwBid5Kfk7N16ekspPqksGvHpG5jPZWhs",
  "key32": "4aL4QPiQz5bNn6kapqCdTkAN6nxFuLcsFF2znXph29geaVCWqdaVsPxpMJdJhcGjFicw4JQZd1zEV1yoJgFa2H7i",
  "key33": "L2rvw7c65MHh2jfQvuPeENgj22vCUiewnWEL4tfVEsJijaZBcjrZ4QznyfGsFdmyiALYsFnGzkwNvwDGBD9KjKe",
  "key34": "2MDV8fSS9YPdkwszn9psdLRuCt6wdFYFanbpPGGYiTi4ektTBghHd8Nz3BVe3KmqzmwSCKK8ThMCZY6yAQMne2cp",
  "key35": "3ohSYStm8nGTmvNhDKETbRkRtLQpWTeRF8bzFvLM3b4o3aRkSjaCWMhfav2wELp3NJgf1BFJE4DLq5vW5ge6pbYo",
  "key36": "4eTasdJLPSLiHvibHpcXxa3893dBeEcBYZtjJMXVschAVpxvrPCi4AcLfSYehnotVV668gBDp1qsoMtPosnou1ub",
  "key37": "3p47VuHijdTX7DsG5jeonxdctSU5Lcc5dkoFkQaqw7cAe1NWjyfUpUENuSRfudbH8LL2q5qbQdz5FhAY5FLfn8hY",
  "key38": "3zdepcV6aUHva2iYK5sEUq2XdYgTWeTpBf6B2kiJu3pTRmgHyS8Eu8URTWPnhafEdaDTTQ2K6xbVbTiL5pd1icXi",
  "key39": "PxGHPhmPRrbg9kxCiF1CYYVGAuu7cA4Zy1PgbeD8tbw147juCRbeirWBWr1LZj4h8DJRAwdVopV6HyRrXgArXYs",
  "key40": "PofZv2WfdsvxRocNKFXFvcRzvFPw6LNxh1Dtf4MGwfJf9UP9cuAwrLaub5vfE9YcbDUudTGfzypE9nkSeLjNsvE",
  "key41": "4UAHnJ6BUNZhU1csjw9tXGWa2bULn9YQ4Ejf5U94kRv5GD3zeATvK2jpkYsVGhELRfqXhXsK8r8WdLVwv7nbYTnd"
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
