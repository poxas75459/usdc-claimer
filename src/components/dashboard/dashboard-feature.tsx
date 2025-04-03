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
    "2d7UHrRtPeBjguguBLRJmU2rNqRLJGCeTBAan9Vc7uGGnLXfqzDizDpbHEFAxaQ3ke9ENha16XqxdqZrU7HUZUcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32LSqZE3RzMcXAatuygGVehJeHXveHMX5xUgomKRaqRNd84HjLVLaY1LXhomhTwhT1k6KjdGg75K1AoYQBybWEL6",
  "key1": "3tUjhCrK7HdWbpmZWuhbjaPtQCQ7Kx8WRk5ZdaLojf9UYz8qcqzqhWNXRxpppHvCQKdp9C7FNkujNZj7mKem9Yrd",
  "key2": "5YLJLibCpaiHSSg3jixiRtkTFPgoTYTThEH5nXNf2hioHQsNC1ouRNF45d58if29uLJBHMPTYyTRP2EBSPDVJVEr",
  "key3": "5aSs2tmsTcPzry6VTdC3c4Hs6gcJsM3nyoHyVTjnB52Zg7jGUGjhkKf9UJuYAjZrxgBZci5vuAt1i1UfSWFMGX26",
  "key4": "4xjf4KRNZAe1isn8evnJmzczjsdrouAHHh1q5yg6Wa6WdFkvXMuXFsNJXA1tXFqA66Mb8XGj2bP2jXZLHKEiZSp6",
  "key5": "5SN2G6cBtLNriQ8phs9cyKb5YZkz2Qj5zng3uBPwpfa4EwK3DsDBEFZN7tqThPKBcmCR2at42nBzYBkduw8fB4zz",
  "key6": "2rZPoE8Vj4iETEmqCKNtsQZKPvcfMnWvhuQx9Jni3dcug9QiQpqJYmKJpTQZQfHcgwrnE2YWjUVQedYCn1LqJVcc",
  "key7": "5qi8fYxpX1yMHbx8iEM7jrPjrBvyyvujUjDydGhJS6eYYTkk44HuSHPSeAPEBiV9j8wvw5xuHZCpAhmVo1AVTWBW",
  "key8": "2pMnochhA4BkEU41fPEtgaPKaSX9Fckhr3QWFYnSNDFwS647euGQt7QP6tLNvQAp8DXGq4TD2arUqEzcYfYLzuku",
  "key9": "2UPSjA1bwTX6QhV3E75KgSbJs69DsVMfPvSNeN3tJT2QLzoCiiRJ7Tri96YxBrqiPtmZ5h43fhTC4oB2DUMwcFdW",
  "key10": "fKArmaiatUUGRzQ3FUDZoe4KynvxhFrmMydANw3zX6J3BicqRvf7spYopTDGzNsWmT3YNaGU6rjWTShhcDzKqah",
  "key11": "y9cXSNxAa39NpGxasPoqi7347HxAoYK98MoubvCLkv5PiuVtem8Jbp7yn7a5yg3XJqgUGahYippXvEbLgVBkSDv",
  "key12": "3WFH8RepKpTjUphXtFy9qBcCFNtejJYHgm4AzoSb7qovziRQR9QDNaRy3n5ten82fYrgj5DesmNYMetpHWHgAxD4",
  "key13": "2r2yLJGsi7R8TnfqKCWMnUdaNHcwksQY9AtpnGtCy6xuSNJDMQCWeJ1wHkY2kWm1xDnMhVgGWFJJGXT6Xh1uNXjc",
  "key14": "nSeBcBpcPjVrPVTkbYCAuYQ3LAjzWtPvW4SH3YowmjkBzJFGASW5MWofCQbfhgp7npVymz1LjcZpVMvJj8B7gW4",
  "key15": "39L391q8f4KS3csyKYdtvUA4NLoXtvvcD8uv2WAt3vijjWDx1GpkRSeiSUw45iuFjA3UR5WEmiV7JXhuki8QjCG1",
  "key16": "3JNbxftMnkErWNkWrWFzLX29T8pnC9Yp4Jwfu8Bpex5tCHHY9J3xzTYEZ4FasfYQpucferViaEnJihfCT62TgzXJ",
  "key17": "28Vhm7vN7YDXCjG2aG8s4fFECzWUbeAY5YqDg6Fcsy9NADeoinL19yYD6DPQQJYZtGoZp3aU8s2VEta7uxS22PBS",
  "key18": "2W8itDFUF36n1qHYG1hBosBtdr2hroFsH9TGYhatVKhvz87S9GkcD8mY9TEWuNKrTVEQeSeBjVBzzcJJNgNJ6dQ5",
  "key19": "3JABM3refiU7iULc5VFJUxM4g1CNdeKSMDeLUth5R682ptsW1ZNVvMz12j6G1MLmvB3YZPbrjgR7KP53UwYhrfW2",
  "key20": "3hDHZ1JWpEEy12o69sJHDKAwuTfxYxFh25WbpWQjCy5Utx6mhVrn2FHUUm9vTkdL9G5JrKt1c2tkkUYy48xXHCda",
  "key21": "635bQ1wRXoS2tLjWshqcqN6MGkpNWwKWwyNydK4oCE2kaaARrMSeBp584c5og2okn2y7WitBQop4GUQ7Rkb1Zrim",
  "key22": "2HDaNRDZU4EGcdejshdA98LcQaqEZowUwtyKz1jkfwAsa9GPgFKeN5kprq5DNkrPVxfu5MCXw5nANVB3HUZ59AgC",
  "key23": "4TRLidLfbXd5HteraYXf1s2o79qVPvGD2QKRns7vuYqprbZPPuBtWRJsX4FHzNNYY5VZ8QGvfqBV3YF9rdT4SMte",
  "key24": "23JtAyoXLBtqoJ7otD5zgKK4YN5GFzRjodNpoYAupVkdnwJzAYPaW1unMbUp7mE7f7UbPwoPxexGiqxi8wcVCQrJ",
  "key25": "moTJbvh8pwehyzMiqk7uS2qqJmFoDVdHR7btWtoXWqUEpY56Qf7tV4E4oMYnZ8o6rE2VQecrhLU8bBGqAUd91d8",
  "key26": "oNt5TM4bY33bQNpQkngKC49cRadysSBfoGX6jF8za2P85sxEK2Qb6VbKgq127jV1L4KHiH3TCFhoSvfLwY6iCDM",
  "key27": "31wrFwxH65kNmwGL7DX6463MQxriuwGgFkQ95e9m4EaHx8Xfywodi6bDdULm9iTFdteyRt8vnbe8HrB47C49Evzu",
  "key28": "2D6DXoTCbBinr8NKXT24NN7QHRw3egxcZtu6wRoCBMjrmB1o4JqLUTBAWApG8PiB728aeGJ8T1h7mNtu23xsGDkk",
  "key29": "5qU6yPrBNByUZptGFGkBeb79NwzwGcaegMk66R2oAYxmkeEqRMCLGiwysbWw1oBh6AgcEiLqam3QR2GCLBkjQ5BF",
  "key30": "5tjj89txUihWxCh87xzAyh5iudTWS52rp4Aq733uVqzBc9yEZvvvLeuKnwnNDF1NFKgrPnPF3cqLvuL22f5MiygU",
  "key31": "2USbXMYWHzvcmvGLuMdL2TwBRjKMvVkTzqgTM1nHrZGzX1JPYykEwtPQCwPEE6ANZvugQuaftC3F5xwk5QKDvdkC",
  "key32": "5zzuaKDCFhYzPJ1p2twdCuiYYFqUtpavCPCKa35fV5uw4vbKs6CgBLeLb3He6Z8vZ6KtccXn7uUiZgbqhmDeo1xv",
  "key33": "2eGXnvh24UdfF4e4j7DXmbQirPDtFxJ6VfKg9S3QQxcuqanzN58snKZdA3ogL2rXCqqfEYSsz5WaTGCanPcsJetT",
  "key34": "tKfEjPmMzC6fmg65U6eUJEXonnTNgsMHbf3Dve8EaBNqhCp1c9tDYoYJowFcjqLd6HUkuS4rcmFfge7djtECUJa"
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
