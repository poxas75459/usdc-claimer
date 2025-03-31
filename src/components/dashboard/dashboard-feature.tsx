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
    "pYrPwssqaGtVGUKnHDcLE2Tm5ZCotzkR5E7T42j9qQgB47iKMhAaFLtqByzoba54qSoMvEH3eqbmsoVtT7SUjtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e5yJ61GP2tJcmbtXLA2NmJoJZb7MYkkSUESpcrBszrorHbLV8a662oAUurzDG2yZvXaNxFvmPqgGRy56dvPQFru",
  "key1": "3kay1qTHiegRmvNsaLqCy9zYeZ1g3zwmiSPGKKjLQBj56TKPVSAD2vAaKmDSUZtQWfFAk7t2zJnssgA1MYRMZmNv",
  "key2": "3aEDhnxHfq77Zff2ii6YyHJYTLmJmUato2DY8YxQeqWPJFJgSD8NuqJaU7uMpzngDGrdpymEGF1EEkJFkxJjFrS8",
  "key3": "5hAdQ73rtN352gHLSNFacwXEsLHGQPeXJ2eB4GGPnpCnExb2CczZLtxPNCfhifx7c86xCKYwqtEtqehZdhNpSZdX",
  "key4": "2DMpWcV9A4YYqHxKYgs5DDQm7URtAoMhBKPZK1c8BTMMMQef24H4pke3GVKBsCBV6EFedZccFiQ1idwHcFdeWy68",
  "key5": "rCyxvcVRzvcFg9TxSmDZoDzP94dQqWMYL3mKubkbVyrRvrCfN7JrAHckM3ozpSNgF132Qr66k88wP4ZMVZgQfJs",
  "key6": "dYpPNmEUDLSr1fQMQpbbYqzGrBrnCF7uVM9HAs9jHSFksa98tRt2DRc8JQkHqbwzvb8XAvHB1gaminJK7jPXDLB",
  "key7": "5mbymsgef9b51KG1RGXZRb7BSARGcYLuwk6WaUAMeaun1azMjUxFbKsCcRxdfFAq5MeSK1wrf5ka392gbT1tinEF",
  "key8": "65egobhQDfBu9557eFiMLWXekbqTdW4a8ANo1whykL8iKRXcNERJXKm6NcDBvhBivEkGjNwGrebWp83XdHVAJBtn",
  "key9": "4PkKB6NV8ZbLmJ4Zch3xJDR6M3k2Sb2V7hc5G7HYuXCY6Th6N6y5Z2ChCLngLm6BVJe8CvLey1xyWr5V4BvhYDxg",
  "key10": "35M93web9aXiZtgz79Gto47hmauFBVqebate2yu8DNtn5FV8q1PgBrUrdcuN8KF3En8U811Wpcf9iuLPqV7v1rKa",
  "key11": "63uV5exERE9RXDGjZEpw8uBPKftdEeMxy3gcbUvTpyDxvsYMdSahHCPa2AMok8HqMNGN8TWHdeaYQWnygzdEvFTf",
  "key12": "5hyFSJwVAwkfxenvAwcnx8Jyusj5T7LNHBDn3z38WjCQd1YXrP8qSrcdQ5uKq2Xx4a1aEHeAkEiTWZ4QUdzcGj8e",
  "key13": "5Px1BQTCsD1oRyPZ6SgRn1BP9V3r9Sbu8BMPfxwCjBXWjHk1iixpu6DjFhczSmwhAtm8MZ1qn6sgZ9tBcyspPXnq",
  "key14": "43HnhDZGUuu1mJ9jYyLX5LYUWSY8nSEXx53sU24kZJnKQR1Gvmp4vbCUqvh71bobxXMxxEu9rCpTppAL63N6ZBo5",
  "key15": "2mGESVhNiiEuNfNHjRmBTLq7a47fYqoxpK9s3SmGijgpJh4Fsmjd9eNgDtfbkHGRXZuh7g4QxtxT8xtqNjVsXeiq",
  "key16": "3CxuyR7CN7gyBk51oSvrDepqAUbMqdRiwTgE4H8kLMSJocFmvF5TPrvEKhLxRXLP39XuTwcFNdVbJdWXCTyHTTg8",
  "key17": "5mpEYWyDTgqv312QdjR8CGv2TcdcPAPwUfGgcF7ccWMRwiDb2Ak4XDAVWw4dGrrj4moGpq1X3Ltb6ocuXFVeA2U2",
  "key18": "3fpuuaVXJkxNy74nrST9f162d5V1NYwu8RQz5B7aWue2xYL2HLgnbQd3qCcpc7HYARE6sLgSoZUMe185HR9txgRX",
  "key19": "2Ptwn53M41uRXb5G9N9ffLh9EpTRzNu3i3c1uFd8QkkHZ9wVN7mMJd5HNfRk3kspX5YUzVWmgotASyZ4XFv3KMLb",
  "key20": "3LCPDgqWtdNrE8Bbtj2SoSJgkGf24UuQDyoPjF3NCu5PmbN1t1m2QgwiU16PSz6hLU3N2bjkPg9XsZcKXBeM7LGj",
  "key21": "2FXm2JD28BpKn1oWxX17hMXFLcHMMZMq9AbC7E5EB6vzDRqnMasvcsxD4YLk61X4gPgYKCGmuDAqh1T3YkAkJsbM",
  "key22": "5eHS6GHhuyvkFXDf4pQsSQ1dAp7q3uPhLHEgpjqKKVSGtmzEG6rYHgyTiW42FSAYYvDVnWHRQfExuhes2BjXQ8EN",
  "key23": "55eRPbqsvbN4eNMBHoH1CL9SGv4sfsSeiT4qvknm4jpbiiUZmH2xE1kfLc7YdWmRessSNEATs15pwmiRkEGjBMww",
  "key24": "3mhjtDSnu4h77NBuJXBG4Cg1d3pUzKV62G723zDBwBp4TTasmt2ew5SbzL1Lve3MtamB6FgEbpWq2fkTrtXj8hF6",
  "key25": "Sj3EfpRtzTzpxJthkHLPpfJ9UUR6yZ8CC13sYJBqvZTRwa7s32NpuGTNY5vr5NXk4jwmxwqmxFWGEFzT1T5N8kP",
  "key26": "61qLvhjjByahq4uVFRDCZWkGgEoLC9bWRRaJUtZu1xjXb1yD4CJpZwnkSUonz2vqjJXca7h9UyrUmSh7xtb1u7wr",
  "key27": "5XNztvnUkh6uj812mtTgb5GnR5McEoTZnGMt8FXQCCPHY2efYsq2KaDUn7uUqUArmEh3vLNYPJSAvNEobTWcrw7t",
  "key28": "527XhYjibbSQQSZXkaRd2Mskkapsh3NikCMgdDYNFQwG4kw8S2CmQ6mg2veKxifXGcAFi5hAhdVqX2PMUgsz7ZKt",
  "key29": "G2mve4JdEX66HwrxWmRnP1HRFfpCzQcowfQvDFwyF4pFAPf7Jzgq8okSdHrjWcnc5NxSKnS8ujFnChYyDTaCwoF",
  "key30": "2gfW73BTZSjqgH5N9vZE8VSgfjpzFEdgJdzWqdmLMDrDv5BtzL53s849d1ZFauDzcqEBraAKcEpMwuU44oU7mAcT",
  "key31": "121wBow1zcBtHDKtQFMwmEjgJYGg4e1xSu4Bpbg36gtmwBjGiPQxqL1cxiupXgDRgQqZvhnChxduLZrtEYsN2xxQ",
  "key32": "66NS56CA5ubp1N2PCAxcW6sXTyupQY3pUq8GQCqnSEzWYpsXjuxGkc6crvCwYeNtTbGrudDucgPrWwbqqSMTEzVV",
  "key33": "3muNf3wX1j5Fpi8DHwhc7BXt4fveWP2AHEeaftMHzyNbEXGaubxvB1rK95JUZGmNQcPnorS8MrYtCifikPhYFo66",
  "key34": "3NVjKBmbxJsM3WdXhfh38rWAVfKwc8R8hnPVUsKczkHAaemYPQWUJGqK68w95uMm4GYo8tWjNj688EqP3NpLotzj",
  "key35": "ov5Axr7hxvwW2AYGyEGRiYTSAfJjnAej1yYkUsxLMpeWyhafmCcfz7hVyBVPSEcnF3q1a77fmM8SVe2RTnGFcz9",
  "key36": "AWmy5qfu1zFHipxxVQojvMjPHqJBudnDkyBiLp5U4NxpVPwdwxWBRxQykAccEQAaZw8Xy7QcGidDYZsXqs1LBtx",
  "key37": "5cSf36jxwuwVqgSJdT51AP624sJDgotd8aRaj9nhe7YCoroU2ALmQhr92QJ517ppoGMoi6GBkE5JG56NTuo17yEL",
  "key38": "BdYCZE8QZwaoPuhsWfZCw5Fectqw5PxdQFpkVd1UATzGoYvsJatgxbPJPN6gabfmepc8PYbEMGdpEVnymd5Moet",
  "key39": "3yu8BBm7DBdwmrioy72gcYzKXNjV5kiP3deeSGNg6CRu5BP5Uar1PcGxgME3FVAt999zF9x427WonKAGU2UobVgm"
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
