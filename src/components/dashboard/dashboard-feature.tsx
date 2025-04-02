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
    "3ntC4eiQgZVQL3g9nnZgcmCEcGiGsApr4jVxHxKYzqiKWr9dTrb3488kzYgUrTgrwcYuqKnyzgGaatnFn7vemsDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hRX8cKVjqMe7VXwnT6HxvsqBJuHtguXJYUY77rqDg8KVzNMhdTAFQzmPZ5dJ36ZX7b3YsHs6Wt1Rm5xLGPZUajG",
  "key1": "56xU1oXNf13yyQxzzrTWdB6bBz2yRuZHitGXurNH4Tn9LbGVerwKCm9C4mCAVCErnYjnf8NUaWGmf1XcfQS17TDm",
  "key2": "2fGMzhrxkNwcJnNGLo1uSMNu559ysxScP9sP3shSSAaz7VCuFb27M3ameFLgzQjcNXpmVhmDgwkHyCDJ3JQAL1Xd",
  "key3": "25Mby4f5G4PSVQhSB85cuz7QRkTqcNWAhGFU9tArf8QFhhY3gncBqSqK7QE4ibKAU7DMj7VmGbkoLxDfTC93Wytv",
  "key4": "4rMBs7EN6EKWMkG9iu5A7XEX5GPBgyTGYAfU64NF5c29bdU17bxRQr3qE1pzAdzCMYjWsfUqYq6kFTdACsvDQRVw",
  "key5": "63d6cmDYSFx8BsivmB5U2kz4hcTnEams7apUsgDdv5aVEpSYbA1fFNoocC96E8tZiEE3U1bvLeptDDh3ZtqihRxw",
  "key6": "bZHUf69kiedmtebdKX8V8KAB2RaY6SGazJ8WitrxaxMacRtGEaSp5PTMpj1amNwizZGBocVR8y9dJYjA7F1XRPQ",
  "key7": "21nk3h1mCwbMgLcARb61BamMxdY5twW9NTsRQFShak7QaUkMskS51CCdc3tchwT1Mq8VY9TCFcTBNtbkvje2gkLs",
  "key8": "5ujTXex6KaJnQu7KMRsZuiGaq1DXkdb9g2qKNAhnpdSoSjmLE3VTw3mSZMkPguQ6tE9qGMvKsnX4iJ33WFiA1tdU",
  "key9": "3Hff8QTyMYKxBSijX8iq9WvjARfE9RbBNScPc6yJY5ygRheP1QFvBmRZut4QbJ2kWnULExbfWKTcjnxxH8AQd6Wz",
  "key10": "2pC3u8brrd5DDoC3tJynJsPV5ZuVsmf6YouYE4A71K9ku6C1zJJNxTAxvpB7d8uCz9ow4rbNaxnXSc178p7J5r3c",
  "key11": "4KN46vU748ZSJ1Uu9z4HUJ2wT3oH8k2u2Z34Rqcy1qznuPHapTHRNoMdhHmuKCgQ7bBo3jmpHgQA3d6eDjfGDtCN",
  "key12": "4QTqoc3acHYPr1r9SCHa1GxMd3yiXq2GkDLHLYvhEnf2zAuRRLMNr9x617VEqBDcTi3XaihxVqT6fW6gFjhKdMiJ",
  "key13": "2MLwERLXBtYTSibBs1hUD4zH52uyfmHCST3c7Rbu82xuP32MSbgWXGMM8f41LZTj78V1JnSmaFuq7jV8Q86exzCE",
  "key14": "2xkWVnpZPKZ6gvfRS3sgPF1hjh9ZP27haf1p46SifsYkAYMxgm5VLxompCNeUXbVT7ShcAUMJYXazqkKPmvvM2ZE",
  "key15": "5WRQEpoQki1yDouGofiKcSJwtuCxdAFTkUz7PcSjfQEu6BB7UkEpFQQ2PGjnm6S7Qmd7rczfALAkMriWqMyrX61x",
  "key16": "3JRtgjr9gFTbUg9JXhu9LD95WEi13hgwP76yULcBYCdqBoquZ9S9ec5aYvSPJYzLrvZ4vZLi7ZLSTWTvpvDioXq5",
  "key17": "5B2HyD7Xxi389xW67vMyitfdWpCWtTGGEn7SZYJWTJMmLA4XX2AoguEYrEXWEwGFaX2kKMu6S9U4m6PvLQQw2r2S",
  "key18": "T1fYeYA6zJBinUHYgvSdkUXoHBb5tRyMsF2NmP8ucYdkkoS8HvcgDLj28m7MnoXWvpS92z51SNTdF4A1ZrWdCBV",
  "key19": "5Jy9hXeABdwg64xVa432gxmyuixb52LQoE55rp65afepkStb2EH35FcH11XcrgXULc8G5uxy88kwio452UyS1hze",
  "key20": "ejGPxZUxNL4RWnu25T9NuYK9cm1B4HGaTbW9hqPYmbRfqrsizVdwB9RrEd8cA7x5CPtB2Yk5kRxj6S6QtdPP5HZ",
  "key21": "2sxHaDkrZtJUW1kWDrxTQ8t6W8PUnSQrb5DhkE4RjjAhY2QZPBgpgvzzJ5hMijg3JFABpH1J5QPmmdZCmAG28kx1",
  "key22": "StM8qG8LEa8aeAVpKY6PUTPaFhS2MrW448QDorhDQxj1Kkw7KfEKDmZ3f8wpSPYabnPihVAhnNqmZSA74vUYPpe",
  "key23": "4pCUigLUxLkjeMW5yYA1ZbHFf7ewzW7dATMwZqAGRdvSMVqrqfj1PrMsE8FCJtECrg4auK96eQ1FXc5oAzPvdEGe",
  "key24": "54fJzMTE7Ji3HTBj7ihUDNGc9oogu3agwLaXt83cGUAaC5VfrwyKCqqt5dbvwQZHCT18oiHaVysDPkP6UzZxy698",
  "key25": "4QMb27mMNyoVB3DxLUpgifrT2CdqW5TV212aLbvNRGvvV2MTVcVABEtxrX9CabB6rMpAeys7zPCzQi6tg7HgoeZk",
  "key26": "w7FNXTiLgV6Hf6jaW1YJr1BSUttUEQcVwvYgrLBSfrUm57LyiTHFqXVZp5QsBxVuCGzmE8ii84yLj9Yeh9Atjem",
  "key27": "5n4iMvzV6n4Zj2qF8muKH8KFFCr59igBSZVd5PhHZmhHJkFCjwFnW4RfqbGXyb1U9v2FJdiCQ3yQqAtyqTuyZ8i4",
  "key28": "46iG7peYXb4dQx8CxhWqE9Rt2H6BzdWSBkUHUPJUKdbTqcAYdaNeftzAXSVyLU4fBVVstPs6tSSHKwL5K3NjtZQw",
  "key29": "oMNKLT2HkRTBX7kutvP5DZ45o1CZvvgnYq9YzVTcS9ppxy7roA4vAPR3r1TSYf3DAT6vChf31QtnWeU5LPr4jTi",
  "key30": "3xVsYRytyEQQ41193QTX9kAJc2GC4i2AcExV4E9cjiFo9L6mr2ddDR52hg4xAPWQoZ86iRqYNF7BF3Dt48PNjVKX",
  "key31": "5KyvcyXRy9RtzwhTF9nZSVCErBwEibxa9qcttLcFZhuDWvSucFEnAjX53qfbuFduZ4yZqHZfbpzBba1v9aFMtNyA",
  "key32": "5VC5M8piYVGXxNmJ38Nr4snySM9owLaAonLU9bn8dt5avMbG4jpHZs25GcetM8nQofP5V4ChBz115CC71Snbix8d",
  "key33": "4mSnXNquRMq4dqFGwhTJrHknUjP9wCNWkNjeiVQMwNwhsfiYcMgfjCKuYGhBHmqAHRSQ7APP8QVKHasHYtKBTCHu",
  "key34": "49HAQyKFTrXJsnqWyfBVHjjCJeNagU8KoBJJ5MKw1bbcc8CCkUuYD3hseeesbXc68KQiQzo3JVdFqS6oAvWWCRZ6",
  "key35": "2w8HsUj4Sd96gJ8LaVCLTQW5uWHmeJg3DvCSpdT4qBjaFUXAzC4RqfMC2SjVVvdrWUSJZwzVHjAQUqp6r6gmiMky",
  "key36": "oVvrjmjTkJXbkNdpiaPp4PSKUbmVqo6yjtPUjzJUDxRk2Rre3a3WxQbJ5w5Raxvjrsx2Ajs2Xtcje8nsHwbigXV",
  "key37": "2Gs9Vur74ybZXmHyvZgZVJQfQ6idvUn37ihgrzBT9rXdULTxqg2jLtJvSk19qGJUc1H9eNPy87sYQisovgHoQdvM",
  "key38": "KqQDcqWNos4Gn6PxRJ3uM6Zzux1Di8khRwZAme7cyeGHCZ2SWWfFTmZz7C2KejnUF3wdCA6UyuAc9L9tV1ruUzJ"
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
