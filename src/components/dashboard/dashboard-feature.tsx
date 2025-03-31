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
    "JTjf8SU6eHZMQ8eN4DcXYLqUDJ4eqVD2dbMq16C7dPfRBiX3qJDu2vzX1RWArmp7vvPtYDQe3ui975nc59GF5KT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hhx4ip7ZFWeAyZSjpQ6pWbU6bcAjzEQok4tCMaLo925YhJv3z2LnDx5ozGHKob7agUk8Pvnb98vDgXueMLuFtwo",
  "key1": "4dSx1t8ufhx6eVUShBnNZKLgw6xih8HMpN4p5QH58jQmSVzHpEStdiPBB7F49jnMFvi4GVHGq9E8K2K5Y9icKejp",
  "key2": "2eDVrgUDProHEd8YHK88WkAySiVYeMqKp254UtDqGZYNsNDQ5EbHGaaaqqqoLiKyQKp6rKiQW3SECTUfPmnSdScr",
  "key3": "4TomRY4CZDpmiK5RB7dfnxZG3M6zZSeybf1FN19nYAYgRK5xFH4u2Xy5y2nyoH4JAvd6jQ1eHCAWbJuUJWARiDM",
  "key4": "JxQgMr922npEci1UfNytonaoUr5ChEtoLX46axnriYvEbk4zUqnnhHf55skCCZjgVbTgZXt7sMsBGzMhgTemtUZ",
  "key5": "nzkr2SYKPSukjcDHzkty18e5dTmZuqNrHDkAiFgh8cB9HGPqpbYNhcZGeYREhNDfjrwbddt2ef9imTqNLhCv1N4",
  "key6": "4bdJn4LcePydsi9VVoDbb8oHBj11ZPzAKjHr1oaAQQ3msZ8RhWcP3azYZVpa8C3RfkXZ3hmbc7Sm2hSaqYyewmTM",
  "key7": "gA6nnDP7iGiH35REJpcrfDMsZ9X9eQLU6g8G9TkD9a4k9qs2qHD4fmTFU7D9bY59PcKzPnQHPt9c3Dev6SUNDQJ",
  "key8": "5TGc7kfKNEqTTw1KSYoX94nbCCVLczzJNmw1V4GfCgGCVLVgf4fEugmSH3ccL3TjP81SGpHnXevtt4ptosAxmvvg",
  "key9": "5A6PKjoiczCymD5syjDuQKpNC2jE3hQWdqMz1BptHGneL579cyM5XzbyQ3TkK2q599rgzxPLxRmoACSgZ1Y6VqDT",
  "key10": "4Zm3mcwpKLmcBqaT8LqoAsYXdYEJLSL9e64LsZzwatiYBFgFjStFDU6FLMn272KgeA4i7tuaG5tAGVAM797spfqq",
  "key11": "5Ytk1LLpgDqv26t9DY135a2Y3LSceAPYpqLdubmxuCpRZTmL6mC3gWNDUW6HcyZ7xq2af9FTqtpa2Ru2ddqm5Neb",
  "key12": "28RjYkpfXH4ccG66zYqVj8yszFUgcNhCbMZYMuqCzQpooQ2j6N2fEKU6PwFUnEo8WWHydBRW5N2nD6eMEHUJCHqa",
  "key13": "43cNJ7ibkRojZCqWn8Dd8ThfveD8EmfYSy1qdenBwGwHm7igse2gN7ZsucGvkUzuFdo6dwnVPEq7VbctE8qQPNor",
  "key14": "2ompJX5PDo2ThHxiyMQAHsmFdwznnkLRu3PToN5yCLu9VVuZXW1qJw7JTdpMuj3svx38C7quG124gdh6xhJCBSz8",
  "key15": "5mNkY5kUs7Wpss3QtG1sWND9Fa6XA1qjTC18yDCn4YMtyr6CwMbvoXGY4QfJfRBFdcLbuFxGCCso47bfXheMCUTW",
  "key16": "4Gqt2wuX5QWK1rHiqoMs7B5NA5yXa633Juhs2VcmSyKVCQ1YTeCXC993ZrAMmcVm8atTySF1grECQiNdQPxxuES6",
  "key17": "4ScjtyAXpwRniSiPDtrEMpQLrmW2wPZi1J7mvA4xt3uHqXAgnp1xKgkd9YB97XyqD4Kt1Kzgfvq4fkY3U6tK9NGs",
  "key18": "4v4Hw8fjMjHo31rgUqjUy3e4yQLg2Bx6AT8zCwy8V81uQEwCvc6CL5AX5X9Qy1xL611RLUX7PoYqw5TPDWUc7BiA",
  "key19": "2u3yV7KFUvutLj5fXccf2LmjteQrtQ4Vz752L6RNGuxgEYBsqqiWiJUHaT2Ue8CQuzKdfMttqSVgfiFucRKthnvp",
  "key20": "3eNMcWgCtGhVy9gF4dRJGS5yCNToBKWfko2FzfQxwXvYkT2Twssu1riArKWV3PjgPb3HkvLkpKKWiZjN7XWKy7fj",
  "key21": "65vRC9QuijR6Y3vCeNHhARY6hntS2977svvMz59GX8nL7WAe8ng2LVGALfQ82jik7v8Bg75xyZmSJFSFxWkf3LKb",
  "key22": "2daRE1fA1VJYCkvQ8UrJr9Jn5qw2AsxkZU1eonJLCtUcoMsNXJLNZogFpoCAm2EmEutscTxDGQR9gbbN7htqSQms",
  "key23": "175LDjNfpABucVJZjehUJNMLLohAMPEkkSfXJSw9Pk7rVgeU3jJmAbf3AFCdvkT5bAE9SLpkej9YLVMv9tWK1w4",
  "key24": "2eHsDeeBYt2FLD6LEsHCi6CnMiPq7soDec4kcCWoeQ37Jw3D4GzLbAdaVKtWJ4CFr88ojYG9C4njCqaaZoJm8nZz",
  "key25": "2pyr2iJBYascPnfChfWTCZsgtiwcm2oNScypoH8EX9k3KwS77Y1rwfpKu6q52EFJc6iyfdZvj6dDTnTFvwLecFuY",
  "key26": "4Dx4VypWuCBAvpcaXHeR2Z14NrD6pFLLvWobrUXPaPH8B8HiCRkM3XqSoU4PGXsvcc3t381A9Dyf1SstYvPDWEWm",
  "key27": "5WEzsE23MBDZUgDPiEcFQqQiAp4mvBYGsnHEuNwXKngN5fVz3nvRJVJizrgu2a82A7AHcjv2AvxXJ78nRa52VEgn",
  "key28": "hnpLg77ykfuHpwe8yr84cYmqdbaGYZDUr31b4dY4qcecKJhhZ4jVcvmo2UEiMfm8zGV9k1pAdRJPAP9AVHC9eni",
  "key29": "4244i2NhbPfN9EdTfcnTPoNcCRA8FgbcWyDn2XfFNjKghXsyfpfihGjCM3qw5gRJNTbE5XQNidzarbXtB71M8ta4",
  "key30": "47kuw6Dxycmp84q68iQynQXJjr4Wdt625iGPfPSLTicWGfWEfHH4GJXpFcsv69ZLU8KykAMKLMzhv879Z78ggJiu",
  "key31": "5tZKhGQUq18PzCjH7SmZHhsmKa5zAXrLfpSiw3QQQyce3T4b6PWdz16Yfpy6QkHDzGH7zuaKCU3suTGozx1Scv5o",
  "key32": "4CSntBjQwaw17XmyidiGuPRAQTfgRrTg7pyJYJVfJx4rZNwF1WaNdQv6CNMCrq6F2TLPLb4fenyFDmoudSZ4Wash"
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
