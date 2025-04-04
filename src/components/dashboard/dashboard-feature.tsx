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
    "2Z8PTbF4kmwcZbhX2QX6C2PQGPfEaVvVmYuxDRe36EBnpdhituHiTbVzjUPWrP1EKNddUVqjS4y739Dmzm1s4jpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hX4k4nWQPEyVU33TZAFHcDaEp9dhiCTfZiZrBN4p1mH6qctTGCSDN7nwxupVznqaitnLYdv5Pkn3YjcBpmZr2ov",
  "key1": "2ouZuydRmXBeqvygGxMZLbpnD3muwMPhHDP1vGUZHYPxHujgRTq3WJbuNjcW9efYdz9uGaR2MT5RcDpnn9dbFYui",
  "key2": "3QhwYMv51qgEfu7syYCj6DMcKpxGCUrVHZNGSdRvKaFAgCPNqwKFbHjyuT2q8MG8VperDi1HB8t6YPoguc6MbkHh",
  "key3": "3F8Y4cWDgTGdDc8TdXCsy9YJezidBFAPbGY6dwbdvS79sKsyfvjRfNXFBzHbZXnNWwwLmYA5tb5BebJNkN4MPgk7",
  "key4": "jHZkb6NNnAvoShJqaeEWSk1DxLgXZPFW6VvzFTkCq9n7j5UKcXYWjnWfhPHsSFifVkVm1YsDusK1W9cejDhucBc",
  "key5": "4gTUMBgJG8qSjSmnWZmkTCvWHii29STLPeKuovqjTVNBkymMvyx3ebcEuiqtBUnTmANRNeKovc4LGEZe6ttJVsJh",
  "key6": "2VKYbTf7UHCmNHTYgkJihXm7wqxoXG6B6D4XzpGz3cv9WEwmXzuq3E1qLYhqzJkZBjdD3avUmCN8yJxNh2DSS3Nb",
  "key7": "2ireMwy7RFitfznEFKKrw6Q2484qrSNp9rcThepor8wqiFYRFy3jKTPvPABqUcHrbhAzCrcUTciCbTZWgXou9GWf",
  "key8": "2RU2xvA3CKtAwYRzFgj8szGiTqh2BqFR5MW5H3csWECWjoBSxWwZ2jFqcwtLUQ7gmbWVuVDhHjZE1YGSpDg4Bfch",
  "key9": "YPCe2bsRF5txP6g3eZx3xsgXev9Ygxqz4F7q3qKTexycEAhk8RiWGMoaScWwBFhQ9kMgqQJ88Ag86ou8tgZyyDJ",
  "key10": "4m7Bet1bvQzzbDq2VJrZfAfj87pyKHhkTWqFVDCW4mHCHaEYEBagHewhQBV7dZoKn9EJL2GxqUV1fFtjZ33MHvaL",
  "key11": "5fcXC56X4UrWKCEagny8NCZi8kmZD9L6yHVxo79aDnvEYQtJvb9jiXEdD9coFaFssqMGJF8PgkLZzFrApTqaCZrL",
  "key12": "4rSV8C4Wf5YsNPw3fajAtEuQ7dGnAyH7xKNBVrQCwhBJgWXcUaq9N7KeFEQXiazstjdxoR3QoVLZZ94QRpmyXhpP",
  "key13": "3uC8vDEKzd5WdVwnrr2MGfmyqwgL5vSaMc1zwUwFys2NL4qBnr3pcALT5VE7wYCG6dtT1P45sKap4sKtJNdnAGdD",
  "key14": "5TBkpbbM1JM95ZajHivx9jqcJw64C7K1LsCrUiswok9vx487iNxRyZ3RcJLJb3nE1TP84FAHBpbPpStbH1ZDQFFS",
  "key15": "3cwGCzMpzxKr3Fm27W4njbfvXDQab8GFAuMmJSD9xXFKfxvPjWKXdya5rpf7dfRkLWMRvHvPZrB28ZhuZEppSJfp",
  "key16": "4FVPpU4jzP7tkRKyLNLMkfh6Gf2mzsaXBuALNusiKcaWCgLDg2VoE2humKpaB556owqn9dc5fPTjdfkTUpVAD9TF",
  "key17": "4cj6PiZzUT3MUe2cps4BAzK3UeqM6QBhTwkuewyccQveSXpGh1NkHqJW9CDqHV8KyA6dLfnSBnXCe2XVuddTfrYk",
  "key18": "4LQmFFGitw2xvy4FtjgVB3yTeEaKiQTpTThLcq6fJY2RiSp33LkqGZn5LxukSXjNnYzHyxhEv2MRLWiPMWUe5yeR",
  "key19": "3zKfGZXsLPutZQHoSzjxrAJWzj6pPZDZeVWPVeVwg7EvDfayudTL3XRCR4mHXgEBQYh4u5MC9W3zjjXEEn9aThKa",
  "key20": "4LsfDBMmAnjVTUhQzmbpfY6bUC1uidPVA3bk31yBckqVTBSz3yRk14PvtHpkpEA5gYyZHd5TWo7WrgUpvAGAKdnS",
  "key21": "3AwALLdjWUbw6MMGTshJicfXbDKWCH7bQ71yFDaQp2tcRskjBKAUvD6g3ms61cq4YNz7XWjcvZtSAycbEeuDrpTf",
  "key22": "4di2iUWc6UZ7VszhPD2MUKoreD7Dh2rsgSYPfv6hWGmi3jKXRdZnhDd2ggxjxyaHgApArprYZPDHspbgcacaXZfx",
  "key23": "2S4nuNZfcMV87ahMkvqNFvjUAtUxXgQ1uek7HbCxecu6wHU7zuqYkwFVpj84uEjj5sgk2vaUq2B9LFW1qYwdn6Fq",
  "key24": "64Jh4QrpyMiWZy68nXFXgLK3dHRa2WXNDPh6gwjEgyf6Cp3mFJGU3AqWJ9X6hXXhqobxGhtW9xYGuyP1j4X7Mz6G",
  "key25": "5szMPRdWyKJmiun2pkHgjbR3i8V1GNWc9pSWwf5wGdt71yM9diBSNpLcf7kReSf82eN7hxAYQSR9rNsaMCVFam7F",
  "key26": "3D6tJPyEc7p1K6aSH91ttiLgeTbBigESMWZ6BSckUN8qE7TqZQNfy2mPfW78V3nMwkFsWRJbJw8KeVMoyPniHvDY",
  "key27": "3QWWnxhNg6CvK4SJV3iqowP1Zvz8GjyAAd883g4CuXrjYvxuJtWVR32U5zDTQdQTbuw7EsvzyW4deQXaKebpbKB",
  "key28": "4Gj2kxTkt8phGm8Wukdwo2fCJ6udo96MiGRgDypqCwYY8i8QYdP7QwAGCUxhTYf8BXa3CNkDBDzYhqVk1JFBBnaT",
  "key29": "42xnMWnAHmzjZVjnjJmyuhRbKuyad3GCnctmABMswqNep39yEbeRBDyu3fe9sQQkjm5MWkMf65x7d7U3UxQNJDVg",
  "key30": "3EzvmsVGtygs4otUGeBNYBxYjJRNtf6oXbCJZv9G9y4cPBTWYjSs5kmJFiTv7HGU7w42mSJWQkV7zrxhzYjW1YA1",
  "key31": "4pXdSeVpjk7S5rNpGBryadmGHYQoiwGsA7bCi77vbNVPUZ7irZ69rgwpjU4XUiLAyZbQ7FQThdGnB7mYAErbWkDh",
  "key32": "129tFWs6pD2z9ckRbm9GwbmiEUkFDDoCdScnC2in1mdB93Q1z8GtM3twQei8k5oUJQJwouqcMJM6RcdvRvsqSiG1",
  "key33": "TZpE2h2cJXfMpitvh6KfCpQqKEDGECvXjNHGyUYpBquUfXGnWTxSopTkZMenAfPU9SxdRjhf4LLPAKaGZcobD27",
  "key34": "3SriJXbpQVEceHMeszVhU78KzewQuEeCk2jhSd2ykHMte3ddxGmFkW3kPRc8ZMg7YZQdNg82JsEA1fDGpferFQmj",
  "key35": "3rtCot6vZqGwU7cHkSfqSmwkcsUXCpmDTZwo2fNRhuX9VBQ17t9uewvh4FqjoLFLQeujMFo4Y7UrMcsbc2Ub9dtK",
  "key36": "3GyyXG5nojVyRD86aQqaqVyf1dH4hfbniArMGNoijxdytZ1awFnHJh63RiTMCbn8xfynYxtpcDL4eu5EAAYyfKCm",
  "key37": "29EJ9wYjWX3FQBhav2HVRofvpcnob7deanJrc9x6cXo7NKqUzp9dutsaZqHvUfmW46L6qnH9Mck1bKgszwW7LXHV",
  "key38": "5RjPAEcNrfMFvTTmNpVwgyFcG83pz11REfBhFqddpwPcgTDrDcfzJsJV3a9YWSohxvY7e8ULMQYqvgFszvfDWx65",
  "key39": "4DELXuQZdKjCwmSrwXViTxeG1GY16UYtMMHvdnwxFQ443t9naYPgRsPS7ZwJUNJmDMekg2VmXj8Ntu4AtdUATMMY",
  "key40": "21izM1WtPK94fdfjGnY4v9kCZ1wbScycBKBhH85kachebbokkVpfqijTJ5hVghQaNS7m5yTa2Y65oskMDAxGLeJh",
  "key41": "2xaoeaJBb27LT3DaH8DmG32euDxrLQ4y24u8YJqK8v5kZaTJDefVECtM4A14KApKX2p54sy5tAvy5hKd3JZLTgeL",
  "key42": "5Vh1c16gCJkeDhmEDGFxVNAnHicnGs2769MTzaCnTHp1sTpAsaMBuLT8fptztvehTPtZ6XbMXPwwgiMJCXHQwTtp",
  "key43": "29xQgWAWYXiw1YKy7PLTs7CEyiJW7zACCiqDg1KAPJFDD6Xcr7Az9fv5jTLfXf1mfTryS9fjE7CoXHMnub5uwrz5",
  "key44": "3dXPwGZ87eLAw1WMqFxBTACGhvUHnztEcc36PKd6nUxjK6CFLgQ82bJRjZT1Jv7gzhc92dQfVKBHKM7zKqSZovWS",
  "key45": "587K67WNZgnoPp3aJM3KAnxjMgjozGFRjpGXWwfPvBmg5xwjbJdeEtvvjqsR2Jx2sigf8zW22Vmsqk82SUo58LA1",
  "key46": "2QmYnUWJbsGkMYTLpFUoS6xuUgNft9m5i4XJXWaNp1NnFRSCVkYf19DwqEdBB1xWAmBrnZC2tZpsPS4e56wosRU5",
  "key47": "52WqwAoNEMLYGvFTTQ7FbBJvRvA8jzjoWDF1c6somquWtdF2jnsdSGUPWePWt36FHJhpJGMhJBsoqoCrDbPFCuRg",
  "key48": "5jSnWDZBSNCcLDrvGNuyDV8HMhaVgkQJK1EzHKuJF8vkFGQdEkoqwVN1u7pwCw2ojMRYNZ2MWaz9BGkAaRJBUM5H",
  "key49": "2uN6JjY3gjYg2Zq1aordV2irFAyFYgu3tjmKc2B38Dv719YBTr3xR6gz3zB7kdouHwAV5kDsmNwNo9erpbq8Tf4X"
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
