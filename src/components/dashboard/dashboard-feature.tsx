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
    "3HM6HV8g2PzhRtt2wyqyqS1w1hFWpbtNFAc4wt83ge99J1KNea6WS3Af2mXgat8yEECbz1z5n8RBzuhnhF6WTsJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CbsCdGuLpm9sUw6ir82Jhtajcb3Pv2aXub1fa2XkbPbPew7hC2xGZspqKGMryqvrKVqWyjAAXp1VmM8HnspNruH",
  "key1": "3D8omPrQnU8jhUpD6RU1yGLVxodsa3jJyHj7snP6v7eRZBBXNd2RYaBPwRpYWxwU5avEmKoP2yHEEJ6xTpiNLth4",
  "key2": "3CfxrQPTdxqBEYzKSVc9dcZ83FKx4VuEtfwEfwkRDsJNov7BfZMqZJEQtnwSmNH4WMzJXhn4BB5xS7dHR6W2CS2r",
  "key3": "4LyhUxzWL6XxwwDmrWWm52wJrz2xSiwiwc4Piu3jXt2NdfeT6xrin8dSn9p55WZBmSFzLtjETNjVk6SaKMS8drBr",
  "key4": "s6TST7Eri8Gf8hN2vzUXtMvmNie6Hc44Dwj6nqZ4BX5bqXCdsbmfs55FjZSnv8sTYoqaT7KraASeGomuzL5kCoa",
  "key5": "5S2ZzKeC74jhV83iy4rj7aoUPm1wFAi2Y166jeauCkugL7zG3cRQPdA9JxDfPT5QTZpZDSmHgcHNmtWtrbsrKZxC",
  "key6": "5afPXMPHjn7JwwNA7sPy4zmzxw7yz6N1vvDTwYtwE3TRH1TbPdSpizbPjceP58rCNRGAenzSJJwnqUEa9LrXkk2s",
  "key7": "4T88TgVobF6uFLLDnLJTLgm7gyewccvQeJBNdgagiKGMFjVmnvA9AK8tc3k8RvUkN7i7t2STWxe4wMpYbqJpoPss",
  "key8": "37US3LvE2aFp8udAtJUyDBoYu4VmkuqxMqMPQwMb23vcoMzjBLnKnyCEL9qHBhw7eNqAd8tB8qNnQ8fL1cQg6Wvr",
  "key9": "3XqNpuauEEdFuhwgSThKK2pRK3Gwc1R6yCviMB73ej6zysqtkhbhFj5b9KkXwN4GrhtnxVxtKfS3cYpaEtptLGvk",
  "key10": "5jp7S4DrdYnVDfKBg7ahmXxzLDL6rtNmjHUQ1K3BNURCjPreo27Xhs3mtPKjdHv7vZASE2Wc5FV2xDAYRHUor66G",
  "key11": "4htDrorMzJCMnqtSQek5w6N9EYEAbWKbxHM7eiUMF3pUvSnpzAYAepM8cdH9t7GZtfiB2txZ2aVjEPKhX1cspX53",
  "key12": "5VXSYeow6p7H41pjQu8fHjj1v8V5bfJ5puL333QyYJfLh22LYyj1MnBRcWYo83GQq8wy4NbiynqGH4xVMd8zcdiA",
  "key13": "3aqEf9J4E72z9LaAQRHwcJp8NPCvbMU1xCXt7yPWyFyNdASaLNwtH82EPT3x13hN9ZNrp6mWd8qbwWDMB68a9bjH",
  "key14": "4dWxppU824NP2b4nnxSxudJrSwEBUzZC181HsMxcFpzVneVwNLoMAz7UBFvjqWf5GAtGmZnwKAJd3yYFctXff8zX",
  "key15": "44ubBN7Tw6z3gSRsLMaPW1J5FZ4mavKjjcXCHAwNHbmHT9AqXT2bAvJtBV36Gaoa5e6ZNGwsCjqvwY2bcFYBCLFG",
  "key16": "6W9DztDr6XS32UL7DrjHThtRxiqmpGLaZ5fK8RLpR46f8SLHiKLxpwy3SNqbGK9xTnZaAa8uwoKuroicpZ96oN3",
  "key17": "3aHAUthG3cRxSejX1MuBZDNnf8NBbJWp7nj3MDFzieSHWkKPDHLFuRh8rhbKtHJwXz2qK6bx1AZrFCui4SzvMKZw",
  "key18": "2e3GddjvzHeJwjGiekvCwQawJH9hvpxHRwvGn4yBMMXfYWYnU6ntgxYVK5k4YeGaP7yYc69FRSk8bsui7BJ4RQN6",
  "key19": "29EwkPuBLfTf9DRaH48Pp3tq1dxZjAj2KEFGR922PfSWf7XsWgesxPKo3VFijPFTeUchFnUUp3QbxFc8VYMCeTKg",
  "key20": "3yPeyAcCv1246w6UBzfBTpxTs8BPXD4F4GjpNL7tG8dm5aba4iaWWwKutyE14jdoAE6Zrso7GFR2hbzyJrc2nbAX",
  "key21": "3YxjznxDLbon4JXMveZwYtsXgf5mHoktrTwS65rSh8LTmEWCQ576vF3YLebCy3GcqKrTE3oc7Ts3kycBjy13mrsX",
  "key22": "ikFTrVP2EkD8UjwELacGSJXAo7WNENPuDV3HNT9n5JFTGq1pdNBpNmTHKRK2A9w59Boi5hpqbjMqpLNYAoaGuVW",
  "key23": "uQCbuw2CqCv35Wq461W8kJT7675H1gu5T82TMB5kcJDbsEGbRpzzaoCs6Z66izgTrmHwf9oFWe36BjjKmfi3EXM",
  "key24": "4LrSdtV3ihGWikPkkW4Rt5Hhmztk6NhEfBpuKFsLDzCti3FVzdtvfSZX6V2DmWHaBBoFpdDPrRs9CEAmnPgkU9EA",
  "key25": "3aTLjEFKAawhwAprNL5cHCjqedrTy1Jhz9jvcM92Dbhocyo2DPCkyXk6hpEKeUjFzk9cRWph9TJch8kwQ4zJp3cD",
  "key26": "KYaWSTZbNP8zLLxhuD9enQMXNbBr51nMnWJCiRHnFQQ8d4UzA2MACXbXWR8Ypu6ZwBrAWjX3mGK35gr7VLhVeVH",
  "key27": "3k1J6jAFC2ChPk7MteqVgVzxgjCfyCyXdm8156w8eKxD79L76cTXDSukXz6B1bcg4jotYykwCHu3G5rgWzuNPhYx",
  "key28": "LJrKyBHW9iK6nXMKDBUw5wULFChfLEUutJz3ZzBMtsap78FrGWsjJWJGhXoxhuusR7pgu6FB1Zud4SY4SKxAXau",
  "key29": "4nkksoHsED6x1NHZRmT2f8NoDVcd1QyTvdkApY29FPK2mZuPifaKq8KDATKDXiQgUhv3JeNfd1VE7LGJdYpg8QuL",
  "key30": "2JWJXc2z1KySJtNqL98PPRz97SoLHspMkJsfDD4FK3uAtk54mbSJqxCkUStkkTtcNFVDJDKZNDtX5DyUnxicjkcy",
  "key31": "3BysZRwS2yf2GP2ygSpCGTTYxf1r2G86pZvyVetfWma2k7CrVoJyai92HGEzeo41NvFzC25toueiURL3My6Wjnzf",
  "key32": "4RiRSTFf2nYZadjiGr4bdMYwEstt4xvnDKYQZrfdWGKTbHxxBxKpx526rjrLaSJYuphWU4GtAgyrcuMHQqDkgD7N",
  "key33": "2NY4kFraqMef1YZjwa5v2QKYmeHRtC96vpycRWP9JmyEVizNXZbBnar43B6cm8DSoZmrP5bBYpX6stg6y39ythBR",
  "key34": "3WVCLVrZgyhyjXhfEedc9KokQkrcnGRLRbdANAi9MM6jU5C968bjDBeYcrvUGr7BCTf1iR8r7z12vcuA2f27xPJ6",
  "key35": "2u2BVGh2ng9sMYdjZnHHGcrDQFepLxXjohqZpei6x1zVLPs5Vxk1xdmB1kJAj77E9rzYdzc4vSvEGYTHACEQhZWF",
  "key36": "5BBJL2bdANG9KXUcTQ3vnv2XuLyjPUhYtdAjFuubexJpBjsQP2FYfp2wvCEstpDrDMWkaKLNP9VYv6Z9rSZVP8Lk",
  "key37": "5eF391Atb3cZh9D3VZyMrB6xHt8YcsbehMP1jtmr8jPX5NFWvqrxaFf1wyySQdT5bocZpqUx78DenxWtumEsfonA",
  "key38": "3vyzcDSkFrup3rnpYTe7cFUxQtqCP3pFZBimVyoT9G5N3213TcijeVzBGYjc5xjvQYxoynakhjMTbrq7riFppZTU"
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
