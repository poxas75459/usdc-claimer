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
    "2jQd3VPbnCX1jXGQHMjCjCiBe7Fmr3i5KsRU7A6hZJhUFoJtUiFVVayRpHFDhteyVpSHokmcxWer326FqivTDgQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mcyXxaVUh1vjcNSDwF7RhtNxwKSTJSxH8fiHk99qQQfqFm6WwKZrFYDySsDJVMt2caj1ZQ2dYCgYD4MXWAFMwQm",
  "key1": "3uFyppSAH4hrbjGzZm8osC9a8R3Jat6gZkyt46d7GTXhB2V5CN9e4ctUQkJE3mJ9iGevyMTmKwTbMHuAkDgDbXNV",
  "key2": "2n7szWk98MbkwZEFEvaPE5T8wpMCuaks61FdfTG3M27wDHXypjDnWoTBAVNpbQkvpFinziQ6iF1mEkiZbWPPAioz",
  "key3": "3PUCMGQu2pzS1VcGdbhuERFH9ngGwmWZXEirHPwxuJT8jdiPnKVycnEkhWh5pDRfvMUEHyFJn5oBxxDTn3HkGVfR",
  "key4": "isqmwvwmPXiyrTCetiLqwAvkZGWYybvTx8DirKENa34xx77YCYFcx5TAjy9nJC6WKvGfu9FN1uRPo9P64fmWbdb",
  "key5": "2AgmkZVbT2UJ9BGeoSBQAH8sTMyyioCnrxw5v7kqdpSGQ3QsaAdXJ1eTWdQe2zzG3u6BY2DRkZDT1eUJK33KFvrn",
  "key6": "3tYrrQCUqk7DpZwJiYKvYzUo3HcZWaAKTw2tmrMAkbPo43dFuBBjwfUhmBg1tsFnnGkt7FaQpKBSyvhoiGQAPjff",
  "key7": "3xogHnpiZoH9tTwW5w6EwtD2WJnNeaNQbRPCr5wGVNDoaPfE2SbJGAkyCRBp3Mk6m6hubwj2EqBso6zni7MeYuTU",
  "key8": "53rqBq7V38Cgyy8FAi4rtHuADBDGgHg5MWKqL2hR8U7bcJ6RExAQctwVnESKdrd9QpVETjhKrjT2TgGRpHPPa3TW",
  "key9": "RE88e8wmitorLGDVSrgwm1aaE6g8WasSVWRY5FXo9VeRkYUNSEfpjb5bnLpUqxvFgsPYmsrQd9TKiYAHf1NfBiV",
  "key10": "3m1gjNVJ2wJtTTwtJMyk6h7Xe15W5qB8gdMhEhKMJTMtfNCLHWJL4yYDcjS4GxvjumzgHHv3sQoRmLf1B47WypkT",
  "key11": "3UqeSfhJdYEqGUioJxaxmKubJs26Zr6vqpkrwJRBioYJra2isYb2a9etE21jqUBhyku181WitRYWhUxGvRYvLgbH",
  "key12": "YjiotEL9YM5UaahZnLUtweto7VCPGG3TyvbZ9yguv7a4r9dSCxZMQ8nP3CZ8mcW9tPPqDm2jj1wXRgymMWwHee1",
  "key13": "32iqJBi5eFcD9aVGcciijxMfb3Xsfd6LR4LMPnLwvwzi7P6e2fXi3ysqMdKi4b2cZiFPgGc843wHBUARPs4ArX19",
  "key14": "5Jn62366n5KRaUf5nL3ECTkTjmdGhKUqtu8ZR5oa9C7vL4yjYahcDJqWqrwzHgSUfagVV4DXVxw1m7HP89QTKxgX",
  "key15": "YSh6S7AXM69fb6Qff36UUdJ4q2dXMf586WKH3rVu7RBw9i8QcanRLQ99XGv6ps8SAiTLLbTRa8kM2gqgv6YZPUf",
  "key16": "5ZyYWQruh5U6UPfm7ozkKu8v2UmDHhxQKfJDcK77a75nGeGhZ57KRSSoBcBL4EcuTb9wrmHh6BtwokQLLDxRS9tr",
  "key17": "42precEGVUgD5co4c1NfmxfB1HsQBJ1y4is2dV1ehtN24FG4Lbq4mw3atemoY4zCxSBBRsmGMajxpNvxUr7MuQvs",
  "key18": "5ocGsQumsaZgcKLKiCvx3D3XU7QW3hzrf3Z6yuEN45Bz6L71ieC8Y3qKkBxxNSauTcQJYAoMwpiqXL4eikQUZA1Y",
  "key19": "fxkPBHHuLR5xTo6HhW1FYYVbD9J25gfwJMJ9A9FvGoM1qWe2XGkFAzkGKgT9L2sAdELdp1gwzrGCwFw75gN2uNY",
  "key20": "52cCgqcoRJhWdLWrw4LXf6PbEWpc3rFvyD15sJVBydqVsjMwUnsfu2beWEy3LqTmji6wNkeA36hENahZzVZgidrU",
  "key21": "36kaffzvL4tKDKhstKZ1KZbPqurnNyiHbtXKMm8LvinRFvULtPGBVszkSsymdoSzQxKUspiHWpga8Vwji3hQdLVb",
  "key22": "47YW3PPhqMM7p5mzP1Bi9CzZjBbL6nTstxrVdmT3aEfqqw9P6fAHAT6KG8o4b1zEdkHg3vV4xiSCDRNn1p1pYB4Y",
  "key23": "3skytF3jxx4M6sKBF7WcJafdevf9fLgZVCSV4FcjKMhe5PNvMGKnBSHib1yqjQX4Q97QP2wSHm7CLvUL66qa39gN",
  "key24": "3fvY3d6yy6cZRaVdCJW3UmesUjFMmUUMP7D779KKC2FpL97ELyh6VQwE56qpqNpuf1VMniae9c5zbTAaDZdKaJPF",
  "key25": "2LtFW4zceFpiPS8cYaDWAHJjX8Atuc9CGC7LSbACsumCg1PuwPvpYs38GKpeqRuMCyfWbhvTF5Xif3Q1uXGrBXzP",
  "key26": "7aRi5Zj9P1WBnA2AmzJWhuPmoAmsivb5uk6bp25Sx2CKWqRDX2VnFXkM5ZUE6WA18TixygccZFrRorA1Y8B5HPX",
  "key27": "5frxChcBusC2CCA7kkhqHfAq5upt188r68GqFQVQR4JrKjgwgy9WVEBtbD3npzZNSXCgxtTo1rMjjfuafjfNpvq",
  "key28": "5eaBn4pKk1McB1z6Z42K7teLAEMJYoDb7JAadcJqH7yapS6tU9WxfG3KRevQm4PYdHqnhCfwuhheHSjkhxrXE7qa",
  "key29": "2Kh5Zrxdg1jZsBX7QrAeK4VJQv9fHpBRmUXR7NHbGuhjzFx45graHZYFyBu8nvKSj9cv7phvin4upZAmV2dd4JEL",
  "key30": "MF5dgWTRrqN347rcv5r9nR2VrauHGvbcwxkuaobKyDxLopYr1UjEP4BeXK6nNhTcXwLW2vAiGik6nz9kHYZANoY",
  "key31": "259J3rdu38RFSR8S4CaUsTBww9oVwAnGm8N2Dc1dXFaqHL9gsafTa2hwEoLuNKpD1XSoJ19RkteTgrtNfQcvgALh",
  "key32": "4h9tfqfBGK1btizyn8yTtCTUqvZzRvmADKwneJkAhErCG7JQFXSiCswxTNx5Q6Uddi7Jh3yh3Decon2kRNWPUhTV",
  "key33": "aB7yMvZDNCgk3jPZ11fB8neUjo6MSa98ewNT95PRHK4obtBXBy9vVSWcz2aP66zJBZ6Q7DUtj8qKjugvQp2etXB"
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
