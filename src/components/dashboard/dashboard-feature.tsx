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
    "39Y2mUBsuRuot2kbnzpM2qRAYCSX92zJLSKfS8kjyHYMFPbknmarfbi7hzhd9ozCPn4hMoaJ5NZrdHKjwX3bLBeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RSbHQgmR7prmEbdaWoxqV6yvR7Dd6MgmiKFc1CVYWH8p2Zj11ijSP3Lira4V4cyjSoT7Ak6ZSVnmbP2ef1sbcrt",
  "key1": "5Wvau5JJNybY4EyxgSPom79Y87JGtrXHbFxTpBm1yUW3aRgPsYWM7Gqy3tA58GiqvHJvn6HqHVs4n6opGRWxzpnX",
  "key2": "HZb89RwAKbvCc6NsskHsbPDGYYp5ub59hpAD3AqQiishDKatXCKnMKAHvsPGt1Je18oA2b5kXxDNGMwkhcDKYjR",
  "key3": "2Sj6raYDhthkGEYUUpaCm5jmvEtya7TRgVnDXk9KhrEiXJS5WjMeJrcPhmMxdxwY9U2QPcHM2eya5Hmq5ZxLG8qi",
  "key4": "5scYdkbEHQnnKdkh1doa9oXHnVaSYTrBSaZwvJUbkDjwucE6N5tyBmrJwvGMJJi7SRAFDTiox1wBafGwVUhnBEd2",
  "key5": "4sZnvixqfmFRcFZRqy7HVBN5XDe15w8xsXcZjKauz1TDtdvitbnZYmHwncgtjSE2ppo2BF2qLVdj4sYKNYzAWg6E",
  "key6": "3jTjGJBTMKTy5pfEGdPmKo39M8r7GrmEzKYNSoGZ1P1RwmnRUN4xfj33RanoTp7vRCZokiRb7u8FoUVkNQWPeAXb",
  "key7": "4rC2LyYVWoLuvPsPC9LgH7VEGah7kcPNtDs1t6rayE4jyzAS11DKHwNidEM6ffja2sdnWJUoxhsKDHkwDuwgctEk",
  "key8": "3h3NLfgiGRCU3SC5GUdpwrMezMfqnZsqP9jezEVacFF72ibcyc2WaeWcF8fhasMwZyh1n7SeHakQNGAeaEXPJSGD",
  "key9": "64mgdepm5CXbkGwMJpeGqeEsdAgLsMLooU2YyuYit4D3xC8vQNawGrYSD8N28dG8mG6inEPfn7x2NLorZH7YmkcP",
  "key10": "54eK8xDgsXhGxEAzBaZhEwTrQVD8xnTyXuemzwVbhdoEE98hBAFuXXmEh94eBLNynBr28GN98X9hsgpE9NEY9zUp",
  "key11": "hEab5jECBfoVJRDizq87zZtJ3rpUefhq4Q7Js5JiDBW4WgQ8AbzVoSJdwwRVhe69tgSvLDGKhBfuBusHf1XA89H",
  "key12": "662X8fpX4WzGXV3Rda7WriN7Pb12houtRkArqwLxewEkbneLByp22v9vF9Kf3R5HNUwkK4KFpTm7VvhjGwzknLUF",
  "key13": "hZGHw5d9h3a1F64C7hUWWBBGBa1L2Tsqxn315ntcBSEiE25nHvyFFKyoj368xT54ErAWE41PBM65CC4sRsvYa3w",
  "key14": "21YwQjrwAVULvQsV1nJ1qd98ywLpv4DSXnRqyUobvtqUrXdWFicbT11FsMTy2A7sRMfssKYZSz2418EJfrNZvR5j",
  "key15": "ZfP2FRHuCzHnfvr7qFDWHZCchDPfWudpK1KXayzPY2Txo5xvjogkDNf8YADgUbvZksan36VEqz2zwGihzguMe7N",
  "key16": "uj5b6SvzXWGMqjZbS26Xr1wi2GmSGLnGYWEbF7MEGWDhRG48gc3x3JqjbeaBwP4UigogdJTLDpu8MpD9815ueEN",
  "key17": "5ggCLnAJkEtjwPesQFmHh4GDr21co4ddDxUwqB8YxjJjoonKkABc1fAoHNp9reGTP1EKdkxkatZucdypCsP9HHyB",
  "key18": "Vw2yqN2qYtznmeV1Pt1gWExrw3ucWmM9LDVgrXQa5rweeMizjgU1HdP7tDhSbmXEtMWUbHRYDb4ZRyKxYKv1NZb",
  "key19": "4X1zeQzZfC5P5xDwuo3zv2giDdAN6iG8MNkevUuadFL7oKExvhyA9CvJJfyrbhqBkPYmjRDBToTZMb2iYBCAWGDB",
  "key20": "3qnyLTYqvM72BNQe69HW8YyW4WKqLESf5gQV6D9tD8dZZQD8bhafRd82yJbmxU2CjyajSpMvhN9iM8Cvj2iJqvJL",
  "key21": "3YsiJLxBTegYMonS3BshFNLwvmSGZnKCDmMTtsAMJW9R1TYk9NGrNv5aGyF3FihsGWncrpL88WPFj77SspSZn53i",
  "key22": "5Hps7FBBEVCCbDMdZKoCYgYPtkgkcK11LdSSAmWzfDJ4fTVi3t8z9h2NxqQhQKAUZqwYZXzrLoRJCJb3aftt4HFc",
  "key23": "587oWQeVdXtfHq5KCjQEcy9ngSVa1P9hAbfmWogxmYUczwJK9XFHqt65f1i91oE52Jytf1dVyY7nTqhuX58ZnuLh",
  "key24": "4nKod4qaoBsiwT7nYQqvmECBBcXSCtFgYocxfXTdVB8RwspE2sYHyrtqmZUvDbrcUxVp8akWxDSt2DGzrGXz5ToM",
  "key25": "63smepN8Sxn8kdDohwrAb4tdaqhEPiWcxLcZHKm8nLMiNM7j7ZNkNsvXeA4qQyLZXtbHQQAYVjYJHQ5DibUDFugJ",
  "key26": "5miubjhA3a4gh1coWQrRXUaXkWtuQmq28XeZ6ufYiCNAzg5TT2qMxFBYFyJPQkcZoNjkmvsugevBwRfsFGp9KyQb",
  "key27": "S8wX7H6hwWMeAEkvP1v6NTgT8v5D2voXN8mfdrapP3Aiymdh82nJB9ahkXNjgjhzCUrLVjY2NHvXAgD3LWC6raR",
  "key28": "4t6mtCEaruJKVD6wJTidzAGQb7P4GqBiXaEtYierocjqSF3Cgvoxb4zv8Z2QdzBgnA61NFziodAWQjmzoqZhMYc7",
  "key29": "258U6W3WB13icJjJsJBjEeFYhbgag2Bic8pGqVZn3JMVTZ9TNPxnvUMF51LxrTywWZsNMokhHzK1ZTu8VU5Kf7gZ",
  "key30": "4Ew2vL9RPCkkKZiU9u8C1KEHg3aVNvSUE2FQx4eBHNgb8uVsnhSH46NB7xtwnXhqxgqjhVmzkQLfjonGVAHQvZ8D"
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
