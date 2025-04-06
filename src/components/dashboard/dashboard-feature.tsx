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
    "GjF2M7Knz6CejyXFFX3AdKw5JTGJNHcANAWqLQfP55QEsjPGGTCdeZBsVY5Xr3cHefNh2v9F5iHSztbuW9pz47B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6NmSHEqstPvKtAzjUX6CfsoWcyivkZGihu2SwjXfifVLwVQWRso7hWEgKZBo5959k7Nce6XCtVGJHMqVTBcg6mX",
  "key1": "53DdwRnj7u3mdgdMt9wEVM3CbJEdPVKkCfdo6iEYMVjtigsWBwu9kraHKCBye2mZJGnZg1YVQ9sBqkzPQwh5Dueb",
  "key2": "3u4JBgZZF32MJCDwa4tgSBPHkVsgzTZziDfvvy5tcr3uG2daCnknvCekF3RpLYpTTYLNppzuCYThLaH5ehMmBXn7",
  "key3": "2VNawrLNKSQ8zB4nfYCV4c4Cbdjpc1qYa86PhnQffp9jxJwqq1Q2NX5xEubUryyJVeaodjEGwkAE9EpUYcSf7Wfo",
  "key4": "4WDeABj6VAgJUCcaMriTHLc4DVgTQFWi6ccBMKoSeGw8RHsvbHk9GsQCMc36TiZaULyS5JkT9hHfWL6UfjaVwv4z",
  "key5": "3auykA5Yc7JJSiP9e9KbsYv7wrdHHYLpeug7mT2qWd685npSwA7Qu9LUjZBVTeYp9Wpwnqqd45gDgJ7oBamrb65",
  "key6": "Dvwn4MqzYXL8M6ZtMGLZvHfsCkb2WdyXr3DENfWtmNUf2yhB8AitfHNFdYqM754GqMCKJBjCEm2tpoFQQLZZkBQ",
  "key7": "5YnVV8hNPg2s5rLXC9AXN77QQUD8i7LdZD3sct4mkDjRNqQEcy8SZcfw1Kd58Hx4V7b6bedfCdd8wusVfBvstM45",
  "key8": "2p1oQDBNGGB2kq6g7pY4Mvz8A4yFcZuBHc8ibFwJAmqxPkRtfHSGF4ufmUP6WwS43qrnTuaUjZxBcN7rv5PEC4ew",
  "key9": "3L31ypV78AS9DYxTUq1XJ6BFgg27aJh1gUsDFC6KTSNJR5eemxuW6WR5LBax97TPjQTPqwNqgkCUMoRxJYYAWNDd",
  "key10": "6tvWU6FggT9V2seLhkjamf5r5gXVGhBu9YwXeGF4CGHDxFnjnq2QxAvtZbw4MWEzFdQHrLvN4eB7XoSc7N81oUZ",
  "key11": "uPdeaR9e8wdrjk9spFxAaVV1aSG4cunSk8MF5itGDZdSzzhP4F5robvrtDhA4U3u9gRiMjdieBd4v6y1WVbbqpn",
  "key12": "4oreiJdtaocjVvodVGz3az7n6GuTRxsUZBh3UHziaqTLnbcJuRF9gh7FezD1ZPWydzRL7uCENHtj6T9FzoMTyGpr",
  "key13": "3f5SUqBNDgGDfsFwPFHMWixTCiBfuDUzoDXpWUtaPNviMuo9n6viXERnDxFBqMa7BeTBZ8CC1sQXNckYeNTL2wMa",
  "key14": "ZKFrzRkmw5yoL4SpmvaxjKZXw8dq4iaeQippreEUgD4feUmNKkQNMVzmY6dZRg2CvUczMqqJNbbdRiZnwaZBwak",
  "key15": "3r5JfpbrtWTFhJ3wBEUktJ1VwQrNGi1viYiYnje3A892q2qZmxAUjm8Xxz1UqsrPPFjGxTqoSr3DgBgw6A5hEieL",
  "key16": "6LyihsB3Kx9PYqEdpDydzqMC6FRVjyvFv8imMGSLoMjZtDGzoyfWRqX2tgfv2m6CrRBi8XMcWqfwaLstwMgABGD",
  "key17": "5SbFp8P94mtkoja2snFpYs2VS281jEyeuxVdc8Jsw1CWu7ZznYZvQR4fKZjRMueoMydDbHJshB1P57w5SN6KjMtj",
  "key18": "PoUB3FYCXtvSenwxbrg58t3bWSBqsCbKXp9h9HmmTApTiXZQhU968joUUGXxMZFMfngyKf4WTS3HscDKUKZL7oi",
  "key19": "2tyZaPrrK9nfJ8VQbkFrnjKZ2Jm7kGEs9J7KC4VyHhMzCVXBRTk4JR5Q9H9cfm8Cu3KHrxqanLxFQrVtn4DosAis",
  "key20": "aEEZEgMVYnn4cyNWYgeD9CQNVZaGtZjiPbdPTwKnVKt566Boh2W1dYYSNAQCPY8qFKBFkG6sbqUGe2uLueUxEqT",
  "key21": "4kT1D6s2c3EVw9orTpuVtsgs56NjHEUTEQHXbcSqdZthYdLxY72MMPYdqBRz4Kd4RQLoWYexQZFmdt2AeaRPwmhU",
  "key22": "61xruvrEZ9ntFZcjhQfL9BVmizvm8USY3LnkNH2UmKnE7PM2H1nNSu5viVzkWhKaLLKaGkyBo5H9eYyhaAsWSuQF",
  "key23": "3cfCfx274APk8vqRdpQawuovSV45TLK7HDgu5ARg9tZjmQNqh16hdhPqFq2L1anWPRPzfM5GMQFN37miS55Qg3tu",
  "key24": "2a2iknmL9G6xzG7PmZJexKm9WATPoRswYB2YAc8PFG81cYv6yintgxD83EM4h2MymL7ZXXh159XJKVCudX8XhS8K",
  "key25": "5ewSmRzLvJFvVkPXx1jR1RmYPcUrTgwi1vrSvghrdR2eqPMYBLNL6q3zv6ZHfDK3BN3wniDEZ1F4DdFVdxcuPqmV",
  "key26": "XdoQ2NozBiTkLsjdc8GuBXwxjs2Mi8nFAUwbqGZpoB28nXpBD5GLSfrC8yrqPbBdUk56HtwNV54bvvHxnzrn1x2"
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
