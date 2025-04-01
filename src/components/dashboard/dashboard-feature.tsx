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
    "5CW8Xt1mopNY7ACibdS4WpNhCJonGMWWhxcQM3gukh7jc9KotpVUnJVERFisU8NDGoMLzSDjweMT62iq7Kf2Cv3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "664c8UeV14Zg3v1qE4c2sjwE6atnj7MrjbEz8UDY8pzSH37ApgmnXSksHSzDxQcSYvKnXpr4b4xfWBLvB8tXwU3R",
  "key1": "31kLyz9jQsT4JHKuyuXVteD29ayvdgJLZT6GwSpvfoxm5FTcEoiL9KpXPKB1g5pNzef1quh1sYS91ddcNBL5hwjW",
  "key2": "2anUPPrbUuETrLZ49oErh6MjJry6YHzw7SL141HNAVWHLsvMkq4NWnySHHg4XpgJvzBdoLyowUcj9yQZqHtGN1JQ",
  "key3": "3CCWVuEwxL9reyidjedTmcs66CsRRoqqVAiq9pA3f8cLYyAkPvSTsJNZopPTZ1qhXcVN7YPoKhJ9kuZRaaqQB4hD",
  "key4": "9PztSYpKsLpr437HLbAm1YCLTqWRP3b9HUYbDcaNAZH14Vs9VXs2W1TEJj9QdRWYcwK1zCKwUzS6VhHQNUhgUFH",
  "key5": "2h3H6qKEPUh3yjHXsFT3k7vxZ7zSywMuTm3hPGLsEJCsiF8YNCS79SaZSUbb1eKoARvLDpam84RfxdnaMgfgAUx8",
  "key6": "3d7zp9d5yCd8hhmDwcDx3tmNwumxTncGD6brHuLXK3KF2K9XX41eGjBB5Ncz7cY7HLHUJbPSY7sZDZgFqwRP1EZY",
  "key7": "5AqvPfswiNuf8rkLUcFEPLDfEyVhKmNKGKebmWbPN69y5te8CnJ6fvoLbrD338BoRjGTzwNEsHdYSHvrBTyqg947",
  "key8": "2ZECmg2mN4qkPmXKYknBPUsAQcwgJNVom13qXLnnG2TLR9QYe5BL2X1Bz3YrNnSdT37Q2ptxoBoYgDG4ogmg79ZT",
  "key9": "5Ky3CDADNTvEHbw2zpW22XmwuryeyP7P471AWHXG9X9TxYu51JjisMFsevFF93V2KcVKG5tgPsJuuLz2bMJ3g63d",
  "key10": "2uXxTmrWrM65Jmv8oFzRYvfr7JkCaQr1edyiwdzpqHeTQzovyoNzikcM4gUDAy5uYNN2sBsKeoVWyRHCD2maaDrV",
  "key11": "3pEmK4fK4QAhkbwPmoRK9jJ7EeT8NmLUQVFMnJ4ZVvriye6W88rQVuXx41Xq5mHAAkBHp9oUnoHMcRAQJagh9AZF",
  "key12": "YLVpWddikcFJt5uwSbhfqfhwzPZT1rmc5xNCX8kkdA9BQCdY9a8nmwEGT45nqDzsbkv5ppRGnYy7wN3u78YzyVy",
  "key13": "WqXhgguqVWcBBVY3kvdE4GrabkyhP3yE1e7YuH8GVjnD5Fuaxtbdd8Lu32bUyB1j7crtdSgwuKTVPW4BhZoTHUJ",
  "key14": "4c5cCS2859bJexxBWRoWX5HFeMafaNvv3sxKwpevyoVsRVGno2372gkLkhiAfR9Z8dLF1MZ6qESzA2GMMCQQKC3o",
  "key15": "625Wk7bdxfFWiGHuWmtHYiugZy6toCu2qUFnAqXZ8EQVsUKwVTm8U3XXj9cx3gFHVqoCtKTApU8m9FPHhjCTeGkQ",
  "key16": "332vcbitK9adTYEKyhPwzfSpAk4L5ouaTYp13G4uvn3XBmWJn6PyUHY5noqpWNChvjpho3ABydM3W3izProvZiAx",
  "key17": "5t994KrmMsi9V3yhtZvdFo6fjE5FUo99qMgA6uU18bFVVTLwcLovdxMWgbzvF79pb432LGbLCD75vYLzPbqMBa7v",
  "key18": "3mJSzCKbvUAFSfX6mjn7dGBf4uG28wiau7qsJjPom6onavVHeCPmkEByV5iFbK2oAKyHLNd2o8E4KK3g9jjVYoSB",
  "key19": "Zbrg9QZTRgz4uh2nNEZmLAuwniEd3PGyPfXXrYa4SXkhwY4PvXkEMNC6mx7eVahsXp7ij1KKYJofvzRN47Wf2g2",
  "key20": "5juQbZXzESLDA1exEcdiUxxNfiNq1QbMTQEa5YnYgajCkyDFGJXX4sgZPBqW2zipXEqXybWjyR5uGAC5wLioUcSU",
  "key21": "eDvhQTXtms8xGFZozzz7Y3KEtzfUjAYAnRoMwYs1VRyRTdKp3NvWgqk1fxc17shnF9f8T1C9ZSmrHw5WwKpFMc2",
  "key22": "5JSjc3ocgiNHg9zTV514nzJVb6rcaFzt1m8CirHKXhvg8oSKg44scJiq7WYAw1G94uX4SvxWeZpceSmZVrUr5VWC",
  "key23": "41bVaScrh9XjHThmqTCdvaPgCoVcbif9VkEW6rbWK5pByyci3kFgP3AcCvhHQ2otNS52g3hHs68uxqgzs3pPiUSF",
  "key24": "3NQY7ra6qi3WnfbKoLq5HG7hKraAaTuYhYymnJFXPSNxRMYfb6DBRTLgKbgAxJNboQ76JayzAX49e3t5AgFiKNSN",
  "key25": "2sy67noyna5d1fBskaGKQdtgFsyWAUczHjct7bZmZwgnvWjCpnyyYPECvn7FJKzQmdLntD74PQDnswaojkBtyes4",
  "key26": "665prBBySqCG4PKRNdEP5kW3USVnQnDdhCm65CtexT1nrmGSnKgKoJ6aSyNxY8ptpP8agGbpGwHtoxpg38MoAS5b",
  "key27": "3rHUcHDRcUMYH4kUgEpJpFCk1oa147nMJpv1pw2we5XyrkkPKQgTX12ZgSoyvaWmnjcSw2quPSreFMArLHFaKmK1",
  "key28": "5mwsX87eHYmj1F3eXZipZ4Hbm1RbYoFwV9y9nR9L2NjzQmhP9NRppHtjtdqChHhetNR2ycbiAWb5RnF48WehwitQ",
  "key29": "2XzhFSLR15fyDcsnwWvrFdYo5axMcozp8PyKTWow39RLFUDShzsW9dKffQWpYpPqbQUbcyXwF5FwsPXREosVSqYv",
  "key30": "8HBrKdaZXmiSmyZG3R8z7akjdvkGoiyDGLr8hXpxp2dmfzgSTMNXVnB8vuhgrBVBWr2Gt4Lh7Lrycn2f9fck543",
  "key31": "LKAXi69enpwdnNvZWFY6mvYgMvc2HojkPuMb6Ky94mZE3xEsik7iYaJJXUDehE2ggdtsGZaCAap7FvZZ6idzgCS",
  "key32": "5VJwwAzvNfT18n5vZ6zLRJ4d4TR9TMqNcztjAKgPsgwTFCqhntWneuwgVbDno23LirBrgm3QjUhME9FLP6ZUXmBu",
  "key33": "LYJAXhhg1vgeft31msgB45Srph93W5hxp4f5FPEbyUUzEouQg9hpJXkYUbVW7tFzTT2Yyzg7QHZeRNf5inQDLdM",
  "key34": "4dHCNKRWDMzWc9txDCtXZtRWnG9NRFvxr2CUWbaU6tkTcKaxaJW2maFKZheJqVVhKCbCVsMcJKmpm7xXQyV8nDWk"
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
