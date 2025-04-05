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
    "5NnbYcLwAqG8XqPzqGx4KsrjaGjxanFh7kR9wzc9bnkPZQVqDRj1ppczwK9atXW3xxd2VCMHgFnK461CPHuh2Trd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LssMTnAHV3sbyUx6jykb4BinkvP2E7fjn1dHRwJuX3nZjLnBBTcUpELqJs57cVydrMH6ZXeamnkxcVmVW2BMgwy",
  "key1": "5hZ3ci4XMM7MCzbqSTpok7n9zLUVq7b1LCEf79iCMGkwohA74ybwuy4r9mC8g3oBuBTaEX3Ka2QdH8nTn3Saavpu",
  "key2": "3bQ9tEANXDFX55AF84E3K4hmvvD3h4pkDTKhFs6JevATFGh4WqDv3yWVj1SXWUtR89sAFQMKHSACsRfixZAJxjy",
  "key3": "Tq3UJ1jM3rS6AA8ebKJwodwKGi1u3L8L1WGwXqWQ5DPJXmkzHFmScWocVg84Fw5TFz7nmTt4SyFd5p1T6uRwCuU",
  "key4": "5Pt2JDi65MUTpGBPyzBmY6SDmygHCbChQmaqJXaczFDoAeP6d19JpUthazt8AagLkxXNuGZpJvaDq4gZf6vugTNz",
  "key5": "5vzG2M1Xw6FpVgNeQrj624JY1CHs2rT5AQNDzxByxuexw5nHcuLBoixRfmcGb93GMBMTMwdGxC5ePgz5JopsGkkz",
  "key6": "5DGdrp9evxRQp3xVMkY8ZZJ2nkUVAZG3fULu6VdPE1s8RFxw1Dhg297jNmBVqsbCQKafBSJCUCGcbBghfsNfhEfQ",
  "key7": "43MJBJzWdqGcrXRzNi7c2LfSaPeqK7uH74jYrUwzu8w7GWcDC57kVUeTuTB1rKxgEL35FUYWvVHfcsKniUBNvpQ2",
  "key8": "2TNWTntcXTyiusrupbFAi7BoDWxcqZwL3Ku5gRs1YCFNyYCHexfH4xc4R62BaEh7UeNRmwNVFrVNjwtKaR54YEWK",
  "key9": "5JKpACkbyVpPCfA4i1CU5WiCZtepUXaZEkEDWKserNgsENmSEZyK1ev4tqzhvcD37FQ14ohTKxkXzfHoebHwHhLa",
  "key10": "63suzdMi1cpbASbhd9jUiGnAn31u3KHxZ7chVK9Tsq3k4Dk8FSton513CZY28oexfCW53L5xXMsWpQ1PmMCeeuJN",
  "key11": "2LUsePJ8guM8CrBYsWYvfUfJigmpKvCav671LtmrHaE6zMELXrMB83QsUwCN5jYa12jLzvngcziVRC918iZwMaGP",
  "key12": "6pafZtqrt2SUDXRALp2eK4PV6CcfUMYXgD4zfNFm5VnJYyqrJQ5tQ9r1reSu9G5rc8u7CemV3dEeJzjkvX5XUuF",
  "key13": "4Rvgnk9jBnE1ctV2iYFkCXvpGJGK2WidRM9s5LzshbpXUseVBqiJpA1GG3B6h99FJsR7dkWJ5H6NZ2nR55tSSDmQ",
  "key14": "2eYNXXE2o6PjAufhbh3VJYpwnqbfvMM4UhuU3Sa8VXMb3g7eLvke8Xfvn7XHhnoeXAunYeABvbN47vR3VuyevUhg",
  "key15": "2QDXKRcTvutWxNL32Vr7HEUXrqtJXySfagqQZkuTaGWg34qmFuUFCVrLPTwzKCMzsbQeAobWVrDfENpXmL2CpN5R",
  "key16": "26u6v3dpriYQsNKSVwMCUhHAMUFiX94N1146ftLaDV5Dr8RPxx65WjEJXwhVSrv6BdpaojFfq998pCCtXgujXKJQ",
  "key17": "5EUcxPyunB7KEwi6WtqRyJUW6NuPJwNypMHvqFbA4i9SbixFWm6Gr5S1zm81TLU8LxFJ9ybL2mzADvfngqo9LSxM",
  "key18": "4yewjpzbHkYXjbzhJPS1LuR9Hm9sRrRizTzfxNaezHfDXJqmrfJUeBEkh2P4F9QZj5jrXemogngv64NG5nCK9wbh",
  "key19": "4mvZsxiFy4JjijU3dqtwSJnriCfvKGwxKcUriDwBVWr5YXdjqw8Ynq2CYXP2E1e6HraVc1xjsorYjLeTYoyGU9Fp",
  "key20": "5hmACf5ttT4BZVRnruVpEq3QXFEpvGNyGcPCHV6Vm2HNHEq6DKp8s5zaVbAqeBYwPc7pus6aqyNfAujysMc1xw3S",
  "key21": "2jz2eyAcc4u1RAvJJAKK1eatzAgHAgEtD7HEGp4fytZvgRH7SUtN3pzwCJcX5DppSVNL9PHH4C9HiAYRPs2icRRB",
  "key22": "5mFw2gHkqzx4qzsjTMEzX1hszCSicMjt94QiGsZTjZqEQiprreB2EHQ4W2LKFP9tKriH6aWJUgaQo5t6KcYhUGuU",
  "key23": "2QFcUnpyCoRkdYD3oNsQodxYrcKjNMfxXFZxj4rqG75XTjS18AVKxkP2rXE91wGMGiB268LQgS8mkHzKGZQxgrxd",
  "key24": "e4Dovpx75x58Dxh75RwTn8EdyAiwTVT4vsvW3zJmhiwg36e5aat2G51AB8ZF5FVwNSKSEXDDMcgrvZywVNTmTea",
  "key25": "4prKRyf61QPsuhuVdFYa5i2qPocoYf3nYGKT3zMShNSJsTHuqGqwih2ix6Xvf1F7oZm88mU8BTaSeoGByoDM3cTR",
  "key26": "FepnkzEi6c3yDCLuRVvQWonoe32VG2asJGaN4ai45N37aawzJD3tRLMef6H7jg5kqQZ7G8aBxdiJgUyk2MXUYZX",
  "key27": "2sLT4Wha25xJcvSZyUf5y5rdzEHgBuA7TKXuLebUdHZzoaJJJvdBdL46qZ7kWTBP7gMa9KqLXG6kjSk27mUT4v7H",
  "key28": "4PdxwjcHSGmZECZ6uxUWDpiBt3yushjs8VKVvvkvofViNziqS2V62qzNrvkicNKghyiceZz465BEVGgxBR8J5XBg",
  "key29": "2fD3gsdJD8AaYEXjisbyUXNRruBvrXBGkVTJSXV1NbZLK8gXSkBocuaSZP9KoZudzoq7tE2gVLsLYbvkzXRrifER",
  "key30": "68C8P63kDsSB6eBJQ74vQa6WBKHoGgUNtupMjSYGaXSaLL8CnjUrRKtG8aqZ3GDNQmMcE4FM58cGmWsCxQhkcL2",
  "key31": "3yVYKrYkbQnGrrmb7eNyBf9oriGRMzR4GChmV6rhap2abKFGJuUEu3ekoKpysforHBRHc5Uc241gfg9y5vqYHUd9"
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
