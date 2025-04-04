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
    "5CDEQV2ji65Qk1MaRsuWQZZLRcGitBmh6YESwxuAfS8aF87FKagoPLqwu8oFpLLMdDX7PJSj4BXKtnkCbJGWDkCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GMQ52EWArjEphqd57DzM4EkgNqh4YMz7c7LMm7wkFqg18A4QmXCRUk4p5rvgodXZBb9tpSVYQpdndGSzKUiHL2p",
  "key1": "487bYAHnmRB4CP9ptLygGpHN7gD5DEqNCWr9qip76PSV2AvrHiVHTJNwyd9JBDHM5Rs5ARfUxkDqA2PXBrZ3PrAH",
  "key2": "2VTyf5u5mjZWfCepBtCPRQ1jkh1jekiQiCTQ4ntwHAd8NAbp8fz9ifKVn48BY3byd37xwyubW24AtHZeSaZR8qu5",
  "key3": "TpYCAGzanyntUgrBbcYheCcRS7Cr8iUQbeE4PiXUnEB1U8ndtj2mb7gRUPCK2ggwDY4Q7W9JiRHLWE6H2GaycgL",
  "key4": "o94nvBJAWMRd27JPt5DLEVxvs7GyKv4W456qgaSNrGhpnzTxfDz9PMU9joRHbLdgzz6xRpiGUhcruECATKoasSv",
  "key5": "14Zq5AVVK2WqbzixMWLxLSNHEzQbMgpQ7nnQBT8pcZHWrm9sKNut94Btm1CHpEGwPunBYU2T4Ey7jeS6Sk9sMNy",
  "key6": "GFpassoqK68QLSpDRt88H8RXEgQX7E12Tb7S69BiafwDFHE3tEcCVVS6LV75JYfTf7WccysRDLLVGyEqTM2kLcW",
  "key7": "2DZQ2xLAGg3u2MtxAmDbqpJzxiQUVTsvMzHsuKErguuz9kU3bRoctTcyuBBs4SqZPRp3DjUhf7gEKnf4iFT3doMG",
  "key8": "5jNWDYxY8sP9m8tiuhWstTyHhLssSnRqoCmoCzaRdGYcKwyndEtMWNd4fCVECwbx6CtXMNsmK8hLZnva6z4rpZUQ",
  "key9": "3ApEqchoK7XWviXqyqw23YC37MoHYwyCEEuATgUWirAKj1bbE9bNrjBgRs9UWGpbhqH5S78tnTsjAQAD7zhcKoh8",
  "key10": "2NbUmwviEVpnHsaH91YVzwkWUuaZPy6Rn5Z9NuiNBEjikzG3wPNnUbMtGxmdjU8JjqK1Cr6kYnPHkjtQzJyX6oR4",
  "key11": "LxGJxcNwmLXNaEs5e8PAbzKHHXY243MaWNvwiA3uSLmxbKFsQb3gsPXCbSCAxiqjqYcEgUvmwogxpX4ccocxRZL",
  "key12": "4YesaPMDtoZJJPMeqZ8VTycNdXcyBaauYouMyXo6ZBc5yCrxnvf6oAoHzuWyS2m783LsWoJoLiJBRrh2K4GCoJhM",
  "key13": "5Gm6MFAVEYTiqLjgE2NYHApqr5dKTVNGcwwLmk9xnFvo8ULsJqeErYbNkJRjVpMS4HWWbUhQuwEA3yV3rGFxWoEy",
  "key14": "4BjpwZdzUHLKqyiyC6GFBqbY9gR1CSsGDyvrjgaz1iqgPrtGUdAwhFnc5Anub5rfCuU2L3fg6U36TLBtbojoB4bQ",
  "key15": "3oMVpBrpydd9pqyWzEWcnAQgvpMzq4e1YsJSbPLwKvf1RfWNDy2nM6dkpv6as8yUC8Bv6wZM5tjpxzJLXyEAhVRu",
  "key16": "2tfNo6LRv9hAa2GwV59FFy4UiTWnTfHcvYCZvUBH7VkMDQZhdE3dgpjEAgFryAiVLFttYmrKJfnyQxxiNrs7yqyh",
  "key17": "5mu9bYcEExf4drMGB7JcXcpdnw9WiHLgRxGVPQTkY15ccZJrUTxPJA4EbUMWFDxexNTbSVMiT7GggJLcHRBAFZND",
  "key18": "5rZn63g9tpNpoESRNTusrQk36HvtrNe2KUq7CpeHcao1kburLM2T5ew2ZDcYX9puwmsSbNYJGdTgTckLcFFz2HwT",
  "key19": "3gowNousTwpo7NtaB8vkBUxqNB8EccsmBeYkNr5D4aKKMBdRECANuSwJy837AE2FiktoctVWqBgPsH6xxmyFqWou",
  "key20": "2etJqHmLfjXuFa4nHk2W6N61tBSy2A6Xm51ezJew9skKr5nfCrGeNRQhMuiUGyrerHzVXf7wmRwCTTNx4yuNqp2y",
  "key21": "2gYdGioJ4RxzWz1HYaR2Z5C3RHEf83EaEFj8seS9RDgVDw9RQyTrpKrXYtbcqu8AWoFVaMXFQ5wJ43mhEJH6a6HU",
  "key22": "47AXw3zcZNezmxYTnpMNriZ8XYezDuAspNeCobUdF7a7bcCQ4T8dXLZYz2jRdxzSd13BaJevqaocb37iarDyqMrk",
  "key23": "5y6iPoo3nsgeHF8sfZYdHbUPyToV2338CZScw1okoKiseR9LVHBT21znfZUfD8rFQeitFuQBHQQEHFMd7mYq5wh3",
  "key24": "NgykGx6jmh82MhuSpHivHc4BXE97EotxYJn9FmByDhvAXXW8JX7B5yvTqNBVxbzQjgk3LvEtegc8jebREDfZSGx",
  "key25": "3JerMpXsmHTBTgFJHn3gj54MzMdKTcLAJSkKuX1ujMii33MYNnhy2tNoniAWt4fk17eoZNmDHQr5sesxv2QgRhJv",
  "key26": "2ahhrVWzxtih4UaiJn6WQ4wdvkNJfwQ7s3HbZgSST9NJpC1kBeGGM2WVn1WL4jibAdqfwd1bHQbzs3MpGyySLF1p",
  "key27": "4tJmthsCKiB4xXykswMKaanUBSW6GuT34S7mo2eWt2H3ri8zyBSmMfUWKksG63gz439txv6MZ4bQA1zk43zfQ4oM",
  "key28": "5TQXPkfBt1iSrrY7xMbwhWhhjfPfSwn6AtB2uxy1HfftT1jzwnznvwsxWfWvunSyVguc4BEsmrPX2347vRGSgfnR",
  "key29": "5a1yTVUSJL3VayffF9WzkrAqYv5Pa2CfC5HLptX7SCBgzRpeqQGvhq1wxzxQw8ZtwevHTimraiuHG6zGm9xJycmr",
  "key30": "UpLUCZ5ky5Vx4Vv2oKLNbuMa8MV3k7eVtGD7wuxaPtxKzLLe1oCNG7uzL2S3nmNRPM9UUyXBC5rGFqMF5ErqQWQ",
  "key31": "4humJddtHTaDpqmtm2asQkK196Cha2nWdFQex41cNMf15vvEXa487seTbQi6ZodW27XpbHs8SVfCxvvmw8mSnxq3",
  "key32": "KnVsScRYJzbFVHWkChfRcN3eHDq9xZHi28t4Pj1osvZyScJnFCy9oTiftRqdPTpx98fidTCaFWxs82XHxCyZtdo",
  "key33": "5x1qu52fjia2iEEjB7BooLMm3wYJpbaJQq88TwzMJSVBBs866NB2amvzLmyhCJjar9btcdJa44q5GJ4nW9GP7TQD",
  "key34": "qF5iTKLLnVJvKqCxWGv32tivQYEUTMqiSBX2R3keuFWSnxLPFxhdyTHkQjPZKHAK7N2kzXKtsyUGkkWNWd8ZykA",
  "key35": "3aPPNjSuCLAC5oQTmT1jRDueiWhySCif9Q9a5x75xCJnoTcMtxG6JchRcx9HzPmMHbkE1r5uWaGCa6mndyxS2Kow",
  "key36": "4duMeG4iDZPtQxmAdaZXwSvKX7dqmX6EfccdwELfgL8TpNo3fMrBqjMyNZ54TTUP1USuWwyUzQ8oRfSMSyAf7GqP",
  "key37": "65fwtoK7nJwL89czaddsnxqfP9jvjTTw5xbeWiqV3cUudA5Qrt278PfBEkP54mJFSvtjEe7R1mKCKvMpsCyWG2rY",
  "key38": "4uN6boH1sUKrjerWbzpqS2QjNpixDKki3LBLXGBsCu4JZ4DXTMe9GgqyRYSbyYscSfuvGwJ22UtuWXZXS9dPgCWh"
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
