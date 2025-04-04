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
    "5hPUeuUxZQZcBLGGettJVY3pZmMre6EYZ8rEtsaKQXGD6FWQjAJgxE194pjHMFbcCkzoVV4XeED6gDi2dU5ssVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fVHU5aV3bea8Sfjjw4N2fZ8ZQBFThQTDM3qyN4Mj1cwmDFz8MkMGuuSKHvsnjXesjVe8LmRKZn2yAWn1FekNQpM",
  "key1": "jKp3hVLFbMYJZWdRzYss4QJa9GhaQ3LGRnVcDFkqU9v1Qbx41JTv7vQMSL5WSMq5Fdp6rJuuy6VVPb9GscEirPC",
  "key2": "2f6tXdUB8KScAWVLzSch8PHCcKRv7BqAaish9We7vHP7AnP3xVnwg1QgDf5PPGzccgMWZBqdEhQuDartnSPwqxm6",
  "key3": "5zRoCqk5X9LNjtELbWuMsGbHPeWXYwVm5PgK67CE18JirpWXNCAdEqkvnjGMfFVYik6wkRCCCRsPCR8JpYUuW62i",
  "key4": "5WUCB5Q4WwPS8W2yDX7474xLFhWAakLYPuz98ddZY6fVmfQPSsP5RzYddCwamFZBzZqLnQGYErxDVR385JkXoowK",
  "key5": "47KKwPvGDVkRvmHhe29PaJ1WU8K4JZZE6M7xuAsUkqLxZagAeVLthYsuALrRsCi4YCDrESiSSc7Dq5xToBstbXnL",
  "key6": "f12PGy4jWFhqQ3t5sAWaqE9nB8LsgYqT1U4T1Avbwzs7fewCcPb9DbT7u1zcYvfKY5TKN7KNzL8vdmBKd4sfpkY",
  "key7": "46MNu5bXUevUL4Tb2nVDnqQYE3eLYgDQKvE7RQxFpuAcxRKx3SwGfMxA4Js3AJ1tcU1vAak3Cff7LjnYqz5fXg8k",
  "key8": "5ES1EbVTexmUSbD5A1rxiuiMrUd27nTAZsRmraw3PYrGVfptyXUVQEg6Wrr41jtHopMLhbrQoobBEK3S75YUtWmR",
  "key9": "2gVzZW2FqHYDxCH4YgzjFreALL9dr8vrHwYQ49rxjcFtUSGx9QW7AroLqmzFNWbRNnzTjJvjTnJ9UFWVBF8o3G1Q",
  "key10": "2TjWsrPyvJKgBLSBAZHFsm3Lvkq4oWZTtAPo56SVkPT95cpTkfDU8S9X5VuK7Kmw1myinaqhuQLWnebY35YqWZzD",
  "key11": "2o5oqEvkbqfZsWYg3asZpnL5PFjd5gKNmvDhJTYd1jkxRzoBnoscjoUzBaA6aF7J6ERj9J1cKZNxNVrgMVEfUU5z",
  "key12": "2h848Ln2YZNfVsAe6gEx5AXwKbP8kgX7ptw6LgYSKkikHmxhPAjAHP9i7S3vkhjCyoWEEXWKi58PjEbZiPxkyGwV",
  "key13": "4Ykc2bU1wMLxRBS13rFHibE5bwme8fPMUWnTFSeF6gdmA8mvXmLP5MTkH4CtATzK3TA8UBU2Y8om8r2MdVnYXchm",
  "key14": "36gBBv7FpDUNoKg7PEjuQfkHpQmaZcMUyoSEBjGeed1qiY2d3Dib1sAMqWWGwGsF1pnjGh34im9r8EnJJVXkCrWc",
  "key15": "3PnFzikUiuuA8KktfoU5B1EzhnUNzrybF46iNkmFkmf54MpaSzPXLoqGahAZC3fVGFnd91Vvtwi413NA6DxAjoey",
  "key16": "2SwuRiK7NDwZUMCe1AZVVUT7AgQXEKboq53p8GA9fprmp6D5CMVe7R3fwBz7H3XzycKkgusD4xDUCYsgmkQTstuV",
  "key17": "3YXw8WcjDxKmQ3rCgX278KLFz9rdmtSoN4XCDdbBKdXG2Txrp8KPHnwZoV83GWr8VX8sS61AVJdaBNAwB1vSEytf",
  "key18": "3enZ3Wn35uhgFS8KBVWECEbHNsMhbD4ktLdka4eWuCUsyKg6C32EEEJbpywP2MCuHCfPCJu6ecTMri5133j2GhM6",
  "key19": "2WP7nBb9HTvtC163YbQiSxZvVzJ5wd6vbFXdKYCziYhoF6yyGYy1VqpnyPkzQct4S5CCR8FS3NL18qt2iDSmWxu6",
  "key20": "na9tVQMuShFeoHvo3C2kirLYXaqYHwuCeuJGGt7uT8SeKZAfemR3t3iMx1BqHCrcaxDKZNYrhxUh84NA1HdRm6Y",
  "key21": "TrPE66GoX2tzBeZhkE86nYFdiAjp1UxicY8xMjAHRoq3gmkgMHe3btAQjwAZvyKSGbTZ6Q3TMoyNAiLDwJLqPhc",
  "key22": "4MtpBpvonADPamnFxeAKuhxexNmwAaChGF6aAZeH87MQ3YknbkvVLdeKCbGvbFMN7yyLPab4ugxWcfSG19tE1WVw",
  "key23": "5yBANUrJrGV2b9vtZjUniWP9Nezqwsdk8o9H5NQM5drn2297msraFsDvEgB4uc7MAKw8bTQkxPnSyRw1fXmY6SjR",
  "key24": "3We9kuJ8VbZgonhJoaFxn3igxdqsHefwdfaUyApN8H7wnWEYWu8dRGqvySFi9ZujV6Dc9C6mEburEXQExY4XX3Gp",
  "key25": "4Ny3SNGbexdKLKHC56zVYFjWTzEsVtxjwRKNrE9jWQswk3LVs9b27ntUUpEgTYpKCKjeSDZkqAGepABxjow12TVy",
  "key26": "36HoxKSZM3XAH4hLrftJ7nu9WZkfEtLZ8E2c5YNe259WfEGLiqw19Lw8UNTMgp8Tom5k26995ZMkSpRWPcbgDiQ8",
  "key27": "3jHj1tc6MrTpzXokYoSMjfpYJRzAFutyHwPyh1xT5CEAWwniWb21q3nxfFDonJKr6vvc8WYFHKr4KrpqQkSMyHSf",
  "key28": "3LLwMqD1GV39b8TZPoY3nqZudieUuATcKYDM8J9CFfAbx8qcGAtFyuUJohdZo1mujx14BtEYSXNGfxMHYZDBVtz4",
  "key29": "4CooMVrc3tTiU3VX3xrSNG1vbtkzsCbCbuyHcuFJ7MXJ2VYbwNhBuJx2J1YxUfYmPwnKZuUe1zbCGCtcQqj5Bvhe",
  "key30": "37vakXbXhkNfrrGBEv1u2fevYzdQdV9xxSyEJwoWHFYdkqktykRgHwooWSHdmTMuwE66TtWULoKgqF12Ey7jgQBZ",
  "key31": "3dxfgqpMLgZ4TZVWd5Swsi1hyzEGaVcwWLfisjdU3WMnTxYvpHe5na5VK3fY6u1N2ibQgDmunhDjXW89J31EFD4r",
  "key32": "5Fy2cn17i2M47pkzH584E8XBVm5ivsesmgWLbgi8Hj2BU3veTtHE8k8Rxzw49HqeDZ8XW1K5gTaKiFfaRDFh62s8",
  "key33": "62j2AxTFYsEfKJdSc1HCYFKYR5GbVJt74EEpB8e2NsHZzfNyyDa9QjixMF2DUPZ2VCG4GU33aZGoA3tkE9VMX2wR",
  "key34": "4fdhTJnpU5hDMAcXV7vrqBpwFYB6jmcn66zKfo4cgDJ6C2x7ehScy7UFGjztheZEh6p83nPZdB4RyipQmNEvg99Z",
  "key35": "5XHDMquaLJP7iNUE4jRUGrZmyFWASKc4MoQrFV9MNjtFnFxZqaFnnCAJFaPSTNZ4wCVEBcsBgYbMSHiRGtvNnkqe",
  "key36": "3mjENUvu3FXUSjEkoiabAnNk2c7S1is43qH5Pz47Svmyqkwt88TwdCSWNf8fqUNiwVmmNnMKFNuWybgnKTPoAyTD",
  "key37": "5dCetjUuXiQ1C6fq3ziDVXa9D9M17rrcWa5iBF77tB7qUoH6CrwaWba3eK8rULvAmXG7cScThMXSBy3cRemRZpWc",
  "key38": "PDYG8567qi37kfL7yRtJ65Di3vT2FbTS5tyMkhgrPsj2UPeFmDh4JfngnRQp5nZjcetkJdbHwrHNp5hcJSk18Yu",
  "key39": "3dJhwhPgZn3oxbihkkDuDrdRrkHZDxvmzNYdYe2zQYCP9FP1PojPnuhQQu69j5TNXv6ZXVjATLqjash17giF2f68"
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
