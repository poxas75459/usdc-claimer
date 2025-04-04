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
    "42YCiTGwYyYYPVz7UAnMe5VJCWr8xGUwoz4fEEEfmrQ9mXfmwDkQhpL3UXY7tUJAHNCgWAVZ6facncodHdUT8Uog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NeATL6Gn1Uc77Sw51tGK3E6KHEBRXvoZ941REFFNy3vNMJ3EbEKjBEbEQPuAQcXqAgoTu5UasZ7twX9AC5FEmuk",
  "key1": "Vtrbmm7wK7x49EZnRmGrY42YX6JZy2HZQv7gRb5pVjdTPx4gthzUsexTVdHgC355L6ouaDHvsLVdFEugo53YhwS",
  "key2": "4DCkTfnzY41CsemDHpfswgGi9YKmhzXLjrYHB5F1XRg1TcQy58getfLrcnFz8vzcHEUZvVhqNSW6b2g2eGupzBZC",
  "key3": "3vfgV4gXmo4jCAMz3iw7u5QM5ZcxgyTVeu2k56CsfMmMaTzxDNtSzvQCAHiErWk21wszjfRAn9GywsCWzoQErSNb",
  "key4": "54hj48pXNAvquDuZeDkMSqrCkLFGRf44EALcSFCa2b5n36CH3CWoSSXo5NapuUERtZNi2RsFpTtoifQppkeEadmc",
  "key5": "3V8ToBizL631RUKaPfC6KvAJRsytaZKCTC1KZfRW1kZ6RF87denqJ6Gnq15sydn5Azr93dCXEvRFP72BYk4C7Dxy",
  "key6": "497pHfvb9mXV6skF6pToScByBgHFy47idk5oxDswvMagsrvZnJzjxsYeeXkZgyZuuGEY9bnUh3EThmjQadBzUGyh",
  "key7": "2hPknqgF4b4HvafomazjERMedduW1LZ2ChDGPfPRMNPi6MjyvohLDxDp89CUetTYkinJ5pcRK1vHd84aUrov7QVb",
  "key8": "3GYvxMa1v9pCvDXdUWkLbGqqiX8devkidtvWpXmSGpgkMG4iLRKthNTiGdmyBwwcQHH2bpmgrGBEyePeJ4NgNSsf",
  "key9": "2wkwCnMu1xo24xFaXAwh2uD34Cvf8sqjZQkdjZh1LdJotQNzdHG8cK7QcbLTycgxeDNZc3D4AbuChAbBH6ZweJXx",
  "key10": "31uhuJqeiFhinaoMfGknPWwY5yYZ67dU1FDQCG7a12zpAhXwKm6z9BKCbjb6spVRjLBsH4Sen9sKZ387VSD9t54N",
  "key11": "216waaLRAURTARLunLA2dx7Eap1oWafps7L6ssHQK7HYDuhSm51kZZWFFaQMVAoR9ZJSBZvFevzMT7W9WMsdMFTY",
  "key12": "4ibeEgkjANfiyS3cwp5emi1q9xceHF9TdHdhtwtVhzp56GgFSUYLN8r2QAuLZ1qqo8UHQmrGk8PLfYsQYsAAoZfe",
  "key13": "2h6gvQxdCPT93jg8mF1gGyR2yzxmxmvsS73ACJbQNG9WRF2vckrrPm69kViYbLo9Ufh18qpedsWrEYBaWCQMv8hi",
  "key14": "5YR27BXwKTuFVMG2Lpaba86zhsvMNzYSSmYFYFzz6j9FdWmmp82mfLsJAiuF46VnNPQfqmTYJ6VoCTNfQTcK9Zxi",
  "key15": "654FPhN6EcgJGdhZpdpRaynGXHr6kDPHbiuK9G2VyAJa5CN91XDS7oncnQAWJty5JwzfR2uznC4CRNvvYk2kbAx8",
  "key16": "3R9jnetrmMZq6eTjenBfufwSPJb7nf5rphPgdRgwCs6Nf8xjTQjsiwjFyutW2nGvhqxDxuFdhzW4diRhPkZS9Nc9",
  "key17": "59chw3qnjn7iKhLvdxA8yAekNXkwAon2amLgJxwwe1peSBZALuukW497eNHQF7m4pV8Z1FJ4pZbkiV3HmaFwNqiW",
  "key18": "4u1YrYAbhHwvvXskvavCZMtFRvNjn2KcVRAcAFtaQJn7zS93EEKqvtqjeJGpgi3pK9R7PPA7yyEPewVVAoQraz6S",
  "key19": "5uu7yV6HG3sj4eSe76oVNj51SyioeG2Ckb8b6t13i3F2FeNcqAMLha8sVR7AhU8wf4KUeoCHTFK9nKckk3A5RMjs",
  "key20": "ZnVSbTV1G9dQV7BMJYqYW3hGkjTYRk3SvmK44JWdRGQ8e34U9MTeVqfRk2iNh3tHL5fgke2LGLQ7KFYnBRrDGQP",
  "key21": "2JwmGQxtuHHJ8gpx3mFKTmk7WH1nwR5gEVhTfDHswacPUwqDr1MftPY6uiDRtuR4uX7ZET5HkUWbhxFEFhYZPkmM",
  "key22": "3XotkCp7ey6WijdktmgAzRsvCwtaGyLptBAPX8f999NqxXWhrBuMmQuzpzJScrSq3Wbi2M17r1grm8AcTx7d9Frk",
  "key23": "5zpuhMRFo35w7N19qsCnVe7h9ifsddxeE6RDUGmFHZqTjkcUWSwEZinhpzcJEqrjfsicamzHjcysC4LDpn8TT1Kt",
  "key24": "48vvu2gRtnfogfhVwDiYKKUafckSsAMnQPzpq6HHbvbPpTv5J3uZsixeh5yPKbrZmaXesT6BBcsfEXgRn46jPu49",
  "key25": "5Tq3va7wrzJcneBEArRNh3Jovy1i9MwXkm6Db13dLyHnuoGNLYKkEKhPRBXCVGVbqY72AGDpb9NmzuYfEmFooe33",
  "key26": "5t9TgpAhnzx7cyy6Uc9nhFEZ5GTsHiyQ9uSYbMaLVDh8zu77c1EXX8ZRKkJdMMRQnjFDqHcgzAGVf6wpY3wKnfQj",
  "key27": "2tBhZribwZtYR6wGRu23F2HnqBeNn4skacLm5FL6jQ5oTaRftTHN6F4nGgRtBSmRLdzQykTWr1D1dr7ttbCFhsYP",
  "key28": "WwigC5wk5UCkFV32PNStNAt2YcLNvDAY1f8uuACWfmJGUSYjM8CaK8jkdi91Q7vZar86WmE1H2Tp2bEfafjD2DU",
  "key29": "4SWsLFLieMuHajZMn5XdkPEtgU63fnUc3gxCmVuRgxvuXUZp8rqi4zDiHjGWYXPBvuzLdXhC4KkdGngwrnNeHo7G",
  "key30": "a9HQ51chrSEr8mGR4QyDpHwjA67ejeScDjcHLH8XM3BDbM4LCF5ve5TNqAzi8b2CvtU4huvpnKMFYCaVbRfAcsr",
  "key31": "BFSTgLvmoxxJF6rBkKxhwxjJ7qUTWkuD918rCQzVkrrQNP6x2AUy18eCmHsMT6wTMqUHw8tJr19oFrZAaoPt77S",
  "key32": "zXCtVci4gMJt9WHhDvP7guqt6vzrhJS4Qxxm5Qx77BEKtp8jaNuPpJX9LqrCChr6K5H1k9nwerJENF68CLtzWEX",
  "key33": "36jUytrBWgqJPrwuFFkUkA2bYL2KCLazVnm4GQfAs6mJ2YMzNcvdaeCJmzme4GSWFfSPrPKjxUG3cu7nYvxHmEyf",
  "key34": "4sVJ7tepbgc3e2PQsMNYAEF3JKmB73bazk2qA6EZL2Hq4NUVPXeA6WYV21f6qsRMnc3ujDpgjbHB7hPCMB8QXVNa",
  "key35": "3HakgKA7fQhZC9RR8b7pMCfSnnhSz8MTd8bcnaivd7KjaHKgCr5PXJ8woFvogzU9zd53DBu2pUsHrTsmQhMJQAW1"
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
