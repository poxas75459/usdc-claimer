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
    "4ci4LAidBC3sSW5Td9uhuckWToW325HitfFbaPHXcPUcxsTHhqiUDYuMhSFS128B5bjPfPpKBxgFzE96wF8t1DbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZxBf6kqUyKcXxeuHuGGsj4Hz4GLGM1Xwi6aP3Z9AeKw6wC5ebz2RbMN8QGjPDRxEQ5YEviNW25aJ7Fjnj3oiVYp",
  "key1": "2UcQMymm4kM5uHpmHdoBKDSJ4cuxfgmaoitu8qPaBVGWBmAwbbobvLe2LBXGVCw24zx9EiG2YGAcaPUherpRd1si",
  "key2": "4MWvatiNr5kZyUSQ4qZxEJEQwsrBwxJibgqeW3s6gvjUsUjc9TDETrpnYVPJxHmzGpgwKqCiViTuPiYqC4oA7Ge6",
  "key3": "4vz3TLVxfTiySxqYa3QNP1UE7AkurqhsWnesNQEgQkwm7zSvgDniUCBbrCehdXkJKfpovz6wEob5Z6AdtNcGAWUM",
  "key4": "2WFjWwqFyt696vbKXaehXUSxuQoRc4Sr26gEYETgAhUpNyGTXzjh9GgiKzQDHAGPxHYWgM3Z1MWk4FGxgYWEiBRi",
  "key5": "2vikAg95NbLn8gfwfTTdC6GQC8jYkphMW5j1sCQi4KhPqewspbugx7T5Tc8GqyX92VstuXF4BNiVbcLJMjarGgEa",
  "key6": "2etS74XWV8BPESh2Teksmtqg5fmqTEeHUGcAGyDBZBDWpWyfVB3cc6gLXkPticpRtm7NFZCurLKvte9MCwNfi6xW",
  "key7": "CQ4oTmTG18DFnbwZMbQ3MxPQeHyLQwGEFW8k3J7zZXtV2ywWhZ8ZSJfhjyrR8kjDBXFDGD48yzYNfRAF1y7NqXJ",
  "key8": "3TSij2sLVQSFLCgnPppPU4QE6PQTxiUmvq8BmB2eHoZaxCyU2ydcfL87jx6twF3AmXumLYd1m8auUyJJJT9sFe7D",
  "key9": "ML68SyzPFyi2bnr5CR4gvaViayYM1v7PYWXGGC7bdAyL6gw2boKitTYav7KGAJdAbaEBwN5wFv7TKRcF3YLJkUB",
  "key10": "4a8wE7cVaTKB6SMCH7413vRBk4RBZhfWZ2JdkGGqfupGJ5N4ho5xVkHnYB8B85MStLoafzdQR2iCaxpV4N3Pcj6i",
  "key11": "NLjDgGyctfv2ixi55W4zdWZjJPc9ecjSd6mupr7WthmgVRoT7qWuLtDN4n3g7VZtRZrm9F54RD8di1DcNhCbecu",
  "key12": "1zv4HyEvmh6BU6Ds11nKzwTacnZ2VkyjMTCZEHhabrd4eyDm7GiTPW3m4H69PUG4s3AJnZUPKSF6btmeZGprwT6",
  "key13": "3QFE2fxJ9MhHjb1gRtxiyw4sgQ13JJtUe56c6jk53tNnjG8M9XkRFxciTzs8PP4yGYGwnft7jc2sPPQhoBv4ps8y",
  "key14": "5R2ETLSMwSwHpe994PJV9ytdfMh8Kr35B8HhdkNyd43vaokhqjRXoKXdpiwryhABV6E7EFmqXb2fwYnobmWCH7jd",
  "key15": "3zCE7KqnnwAaKJYg8riytyKB7z8JWvsPD3pfU2XWiFRHSrnUhhhpgreLCSKVT2Wbn75xD3CjcoDS69oRFeru8SSA",
  "key16": "2XrRCbLUuMD8jkoUVXuoxZJVGfwCGhJL6Br8jN11duZoMEFADYGNCLVe7q7nbyPNwQQKU4M34CrBstJDVDR6KnGk",
  "key17": "2RdPVLjVt7i6QLMDcPVuKiRuJ4XHHsqxwdXTaC48V247SYE9yqH8tRPvtUBg4pNcQ9Pjkw6BLkYC6TwckaUHn4sF",
  "key18": "3kwKpJFtkh1JGvcnRe8E7TKMBWHKT1uPiBtoGyfc8d9rswRefoFprMVZDGzNs8BPjg5sdEGSuDDiEgFcZQsNBBJc",
  "key19": "4XhwA6cCcX92hUuTt47XGumLp9CgLaf8ikUzZvtFD1m7jbHUod834MU88uN8vesp732G3ftTjiDZTx6tXqMfmSAQ",
  "key20": "46Ch1hsD6jH3mCRxtoauUbqpvBRX84S1fvfmxWJbT8d8LtdNVwvyGi9RkEgFV1PnyMTUsHAJF2awP8SzsQCfW1dE",
  "key21": "4rW7Q1NtdHyoVoFvEz39M9tAMqpKYtcwb4xfkpdnhipYjM4EgZhizuUBNndXGbkTe39SVEN95B1i5tFYXhxqWz4q",
  "key22": "3QnL8hTk7H5aEUDFjwEQ4z6rTZMrReaKNZBX8ddheowcKTDKgoXYzs3vTt7yq8Fm47rd8oV5Chbo1uE88vKH1VHQ",
  "key23": "4biRXGZakvj9QDMdnGhUXZY2wn9miCT9V1vsgG3iuZufcUdieegjbRWnm5R4crKGZBVe4wwHkUoQiV4sP5fYd7L9",
  "key24": "2rD15QdVANmuqmdJp2i9yHo6Td8YL2VvQBLNyrFVWCqHQetaZAxXmjWEy87NrVngrrfxi2FKf9XZCivAZLTjrtZc",
  "key25": "QRZg5h7cw8bQnAPZmMxVNGrqFzySymvnv5Z18eZ77z1kXvjEktgzL8Ztx6rwDp1aCmkJZyiEz5bMbXytEMiJsGA"
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
