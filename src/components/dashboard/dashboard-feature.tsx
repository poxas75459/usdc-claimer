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
    "4K3wqMzQfCRXQ9AF4G9ckvLiZCnPzdjW4o4bkr3CxxN6QN1MubopbbdXA9ejwJKWW6K1tXdV7Ku9LuJR8e7BsiLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46fLWvgkcLrg9LFZJosCCdan5gHQKiNXGiA4YnRnmciCJ5g9sgbDKfvqT3qNXZs1peQyKwbEJTJ5568WtXMX7bF1",
  "key1": "pWupwRnU1XR8U9SxrpWdo8SgkBHmgM7SjP2AJsSojaACYzHrEQFGZaomRu6jwcu9cgmGKyZVmVMCvNLe6nkUvsH",
  "key2": "2P4oQFYajYjwD8dVt268NPD5dHHHNox8bKPfkm3vMry5a5UzzXhRe4ghWuddG9jSKVe6SGYPjpsQre56ZBn3gW2W",
  "key3": "5aHjVZdpNDovUwDzgM17zH88pqQcno6f2A1AgGp2VRRtyTQQ2V7nLPgDSoi14cxyjxhUMVBu8LeJMfTX38hn41t3",
  "key4": "UMFV5aY5VixHMVg9Pwxi67kSWEjCvdnffhw4qkVbgUSsCbgeTEq2aXNs7DcJwsN3aTd9Zrs5qBwp4d1pHoWGL9u",
  "key5": "nbaBtF2MQxG5KR9Z8gPaD7x5DbfGv1uHH94d1pXHKc4TjR5MN4LvAGWXZ6MdvLQbKeDoAgjZ3t2H8qq9zxM2UjJ",
  "key6": "5noVraeCbr5iEcgFgfnMD2oT2KyYdepMM1XbGBYRyZa29Q2wpooTAKnAzEmuzL3W9KV1Vg23GBS8Fk1pKKn6Htuy",
  "key7": "4HvG8wk6jC9qjarVwQnW9zbVw4nTVNg9EVV98QgqM3bfWCNWa83puFwTcSSP7C9fWRpawU6ZDEfm5F9G6SYaDJCb",
  "key8": "24UTE6vTo8ZbFffmuPq9xnQdbh7TgbEYQaQHA6xTLhk824ekCAmTf2oAB39tpCed5WtHa8DqudJjvEKzomq4uVm3",
  "key9": "39Ew5j2EPfhtdFe76DpuwhXsnfBoXT9ziKp6UsgPzycMB69V6FiWJBGeSjboHCwJCYrAgrKSMZtHQYe8UF5gFwb",
  "key10": "5Jtu5qyUhD4xdiabRW2FvTkXaJdGNabCLz6GNL16aEF2KrUN8S55sbHt1S38G6TCBzcVEzVmiKFaeuh6FafCudfu",
  "key11": "5PdyZraK6aRMwj9azR4vCxPCXCLHJvFFXvVbPCQJN4F6RckS5r3zQm6MfSyBPYY4AjQP2h6kXPwJ9oUcQh3h4q1a",
  "key12": "5zhw8za6k37JVzmwcSLeWT84Ky48rYMDr6H3eNRpwuxJeDdWSvHwrCndNVRbvDge29VqwFkv3142SmxTRH7wUMN5",
  "key13": "3JghtKboPZpZsNSd3KUQZxMfGhSmXU98Eghs5FZWSmQGehCNcBcr8u3g89krCDpC39E6Nhee6gXZMVrcHDtF22JT",
  "key14": "4gzCCBzzNRQQi9HvvUPeEKFCZ7GRhSNWUUUmVbPX5WvsL42VMf67khFLt1sgpbSira9GMPhNXjBMWr3a1kZnFfie",
  "key15": "3C9JGxDbAjmjF3VJRWUeEP8nJKaG5dk8h8Jae4MCiBqcm3iaRaL455TzRZJM3VTDJXyb6okSkndCY1UXLyMRHz7x",
  "key16": "2o2Js8ejjeGU7npYrf3YRgJpc82uw1q7peVa37VFLrW57YHi9cegpuZVero3MsYqcmDCod6Jvx5BoNEV7ev4zNDP",
  "key17": "2uis3MXsaaqyEa7s3kJhd8itWu4AP5zWWy6AJGtUFpZxNqaqaLU6fi8bzSEGfyZHTnGnGjfET3jLmrEjTKQEDyF7",
  "key18": "2Kn6u5fBe6Fa618KUhLWanxpSRtZjoXMG9XkS9vEEoBWVdNdruLK1ZEmS5QsooFnvoVBp4Pti9L1gyNhe2WA9G8V",
  "key19": "8KXQwxQjfo7pGcgaEkSJfvEyxJMZLy3ACC34GjrsZVNUAJBJiwKuqiBhgtEB1RQ8akwtJdWAwRajp7Whg1rDac1",
  "key20": "5d384DAB2nzkCJ2SkP7vL6dgdWceyroF2X5FopxfoG8rtMKRRsXvCaVkG1iyztM2b7phFDrxg8XSRFjyBstV192b",
  "key21": "5eZeUfCj3R7UZtuoT7ehK2xDbM69BW9fUoaJB7nfPuBW8wPtvp95TcmXqJt7m2sAJZVsyQDbwtwMCJvUWUUmzs1X",
  "key22": "2Tnd4sj3vYbFepESWYGCSTf8Lj2ZFCrcc6AmEJF13oRbupNkPAwzjtwsBov7ibd8myLJNcstqR9AqeQ51Lh2ivXJ",
  "key23": "5FaMqnd7gF4udAFGEep3N3DVPe87FzRWBc3uVGUj92PpTufBEhkRaBC3xVi2UudXESnqXoC4Kbg3byudzNaXxPrU",
  "key24": "3J2ahHxj74WvUsbpTuCaphbu4YtAuz8rBYLqu3HHuxb4Gs9eHBhCPPVQTrjLVnNWXbd5ZyUUZUvBX1pYJmEQmCP1",
  "key25": "3L9kUrG4qM5eS2bBeQntvN4MekZmh9gBMMeQERSot5nV9YnHcH5LoAAPzR1JiAUQK8SqvcArXjH7wJBLesGs6D55",
  "key26": "5jZ4uoNJCWTVkmUNVZUzF8MQNmTtBb4kYS7HTafuMXqec3rv5AJJ742yQGZXz5tKjVwe89Ydz6AVaXAuztf1teU4",
  "key27": "4XAZbrwprzs3cnwUKzHtruXte3anzkFhc81Tvx4QPbDZ2Hs85fCm9r6nVuUWA4KJkpbqXG33vMHVTfXkZijnHNXV",
  "key28": "3Nkd4XQhf7LdW4hyUFAdSqNtdfNmokmDTTXrwFMEABpGJrtiwYq2tK7bYKsmVnLEHJfsBu3V7MnzpuAioZeiii7A",
  "key29": "56CTGuj6ZAHbRy7b54fotgQkqryUZQvXLWTe2x6CDAiPL3y1n4gxLT54ndZxSaKdNY6Z4tHkesaFpKS6iY9Xwepf",
  "key30": "3ByndvaABGiuH5gPH2fFrp3AB2h52auSoLx2Xj3SPMnPUaiSa3nrrYhjmEb538udCT66LodacAVQnsKR7bQ9h6Fz",
  "key31": "5RGPHHX9RM3FUXXajP9Fng6R8eDVbyWGYDtCcw8fGZac8PFJhXPK1C1BvrmiBfMQ7WNYgBzUJQqSaAvDiAW2wPPm",
  "key32": "3TS1b3K7CY2NpaN7y5WyR5Xrm2H4xxxSSZCtSGUFnrZJVcz57Fxb6qh2tXbvhunDZN8rftDNuPUXjstjLDqxEESE",
  "key33": "ZjejH86M3j1yjTohJ4nEGTxZBcjU1LLtgiJXp8qoG3JETK6ccePuo9pDHWC7fqcz5FcYSAEt4ALVYiggVGu27Vk",
  "key34": "4ooxSBgRb3rHJf11NwoC4dnHESPEhG87Y5eigoMiyp1t8EovTRyzsg3FWX8UjY5V3f9Y1pWK8Z9pLjRNX98JKNbJ",
  "key35": "3NPVQb46HvCVzbfv56SGJkBPb2tRWBhCFC1mU2XzqWjZHciDpHh9vi1rTSdUU6AWmWpfYapsP9Vnekv9rnWqxdjE",
  "key36": "5VgfzsVy9e3GtvMbvyTCrDYhS5aFfBxkgxKHNyeBGM3AZYVerJyZT9rauFiyHAk4cnaRb9UWk6mUrq7Z8gA5nsXB",
  "key37": "5XcMGYNNAJ3BDdwkBbVkmmY8GnnDbCYUupr9fuAnnNqckLZ6DzKoUmVHtc7RxNptMYPZvBcQkG74P5HRECfbP8pd",
  "key38": "5eygAu9hWHEMsPNRJLAfUZv1am7ybWk2Krbv67XzTHZm3qSTYUUoQyK7pJSjsqR9sHwbWi7DWiUwJAozfdFg6uSP",
  "key39": "64AxofxfAVzpFxx1LNVey3k2cHTBzLas3SbzaoX2bJVf1Tk4aLWN7xjPjbUH3v13XeoVzpi8RQzvAD8xjyq9tiCx",
  "key40": "2eUiG1qcTWDbbXdirhQrVubvn7PGR6wXqFmjdD3HBmFmmJGTGbkivqQLmLc4HhDn6TSX7MneGsvGdSeJFxecNpwF",
  "key41": "5XGCLBkmbmvxxhXChCP9daQf4J38n6sd7J3artTvNmg1SkrowbEewW2y48kwmCzW8BZUwRCYezvNUkqnFFEskJdM"
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
