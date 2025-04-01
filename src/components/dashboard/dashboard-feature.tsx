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
    "442o1FRNVTCbLLnTqxD3yQSe3eWVareLome6BXQ3zSBJSA7jfpyQCuVUxTbLcfUXX481Jy31bZNg8fQuPVY4fLJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eVEsmhqmnoqp3VdZKJwXNoCgTPkDey7kk8BnSZm17cGkYJtyqvXhmz5NXLpVFqJqGw1evdgjTQW2PDQQ6x1xAa9",
  "key1": "32gXvFQpgME4yMHMsT8yqFM2esFB2hYCKL17RUjz7hwbqd9TxQYbcm4f6E2zSGLVYSEqFZVqdpsJiF4KGkNUYwZu",
  "key2": "2kdjq4HLHiTkc8zaaEQyYsRaHZWw6tjGnXycrr1R7cd8Vb6i5czHwatCrJ7PDHRVkZewfg5RRjiXnMWBUTDWxv9t",
  "key3": "3DkeETvke1AhG16wH2FnC5LhbBxyD6wo7PVMTmZJGC3uSQrs3CQyefV4hF8mwX9HtBnZZTtd2sgZ9XkkPB8x99vR",
  "key4": "3gyUhUFvVbnuQ1MVsn1g3ZzsKWuXiWEnTM2dtWy87JP9m6eTwdTpVM2Ux4HUQXPwDFJZPYYyJpLwgDLdLBiVy1rD",
  "key5": "ziGQkyVVEvKvF9R6jFfJGyCuhJ52FxV7zcRKAu1zan5SStNgSp3AXBm3QJCXUvG4tUHjpUuxx8R9PdNL3AikMLz",
  "key6": "5N2AnDQSowTVge5fDSG2UgBzhvScSWXGU7z7Ub2UeDicPoHX2ZvmwkYv9dR9hzVvnxQsfJXnWK3d7VgSUdPtwR4H",
  "key7": "2VfPnY6rh1nzvDX3dVHYZbKneVLdDgUA3Av1NSPLdo3qDmdBigHPSKa8HGqNkbCZGJaq8Yd7SMizTPBSMvXvV9ep",
  "key8": "2FBiqQ6j642G5aaH9U9upmPrWiCwZSMMqbzMGBqi9DYTNfcPk8Bikx6uc5cq23rJRanwzAKRiXrgZc2XwpvCXYGJ",
  "key9": "9Hu7Bjpy73h3cNxL6xUu4MVp6snUns66iN1r9BbFtdC8h6jYRiaCajVTSLniCB6N4YyRBhwwe7PNororW72vmJ7",
  "key10": "3nY5HHukH59p2GwmuXEBMnEU74rtnGNrYRKqkQ5wuuJQZFAZAibFRijtdjmJ6qEqP29KqWRiY5gHyMEPW6dJ6KJ6",
  "key11": "5GrAvykdK7Kc93pcnG12kra22XDtVpBESJMePqF3xsqrdwvvCGN3fm74rSLyF4PxECeHvKpS3fc94dwoseii3TsJ",
  "key12": "49qS8WXUf3GYK3p3WShnD2pMLgbvZ9LtM61kLTYdg6r4Que9bpoS48nF1LPWy6KtNZGodT9EPDDih28RtaLp9xF2",
  "key13": "5eZCHPzYha8dkrCZKePzNwwrBp7EfrtAqDDcXkg1bmJDSud44aLpkTDqQtXczK84ZW62MiKQgF9qZpGYgecQ3fVN",
  "key14": "poLT4qj74QdbMHHwNPJCcEUv2hQo2pfVfQRdS5gBvy6cX5rkLbj5zxchP4VYpJJRQWzzvJfM2q9bQA1DjpZ6TmA",
  "key15": "573MyZRDrJxN5VSFkq8mhSDPeBTpDqkLJwxmKCn7p8EoGnmdyPzpp3pkvJmHXCfvp18cLFGhCECJJKbehy4GjvZX",
  "key16": "5HFxT6C3cf2riuqNgCCvomHUAD4FfFqiFQ7M8hjAWiG1Jjnbd4VFT9jZiqb9nsjctDyauHzLG28jJyrVd7AB6R3p",
  "key17": "3oFUXKV921vcBdt4rK75RxrSwNSBt5u8S4U1gkZUeMwkH6BXpyHpJkk5makCzKgaiW5BX71t8bbN6iMuVffwxara",
  "key18": "29V695gE5Q7wRF9Rzzx6pTBRfq1mF32PLPJ7CWhrQjLPJvaJF9cv7gpkLmK6K8h2MtcumuPTPi3ziQhxmVqcH6n2",
  "key19": "2Ve3HfMWXicDpCiF8Agui7191zFLAHNxvHdmd6HwPU9TaHkwueBi7zj14mTi2t3BHNQUZefKyTJnLQyj3LqCbxKP",
  "key20": "5i5k5J9QXp7Gesbxuc4PT3Vt4uBbjT92AdHF4v1fVSb7GpsCMkyRE75YbScRzDWk3ME4kcfFgJ15ABrQFUYtXEUj",
  "key21": "5jd5xsZnXmKAskL5RPGLhEgocKEj5vJrLnh1g6LB4PYpuikGxiEwJGRc6w9LvE4HyWEjrpe2B67rZ3qHY1FqYi27",
  "key22": "5bUdywqEVHA2UkRtwF5Fg3rSckU9CY785yLR1jU44KzJmk9qE9k54JnRZsAd3Mo6GNAEZLEg5Vg479dxrnTJf5C6",
  "key23": "2i3ggFTTY7MWAX94gHLjxxV6hKERDoeJ7PkM4b4E8vSEKp68TgMGvj8xUr8Aaz7V9XnKZCuda5c9WtfKY6eAoMKZ",
  "key24": "5DjDcSMjD5oUAMeijEeGxyQrQDwAVxSrTBCgYF8rfHcZtmLBfe2Xz7btPuhYvC8g3LPbMyXmGCr4VKp8if2juA8e",
  "key25": "5pTVjj27HKQDTjw6x3osSBTwfnG7omMyow6F5xpA3BrGWX7fpLkxVz7gnj2m7brhtwtAtYeodWc3mj5yioq3cHKK"
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
