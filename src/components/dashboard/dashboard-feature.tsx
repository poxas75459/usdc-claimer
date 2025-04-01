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
    "33Mm96SvaoFwqJwXGVEanTghkDhbe9ce8E3DLHGogfQ6WJLnqd1EVmLwQZPbRb4HEtNeKQX9DUYmmwzQkruA5Qjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ppi8LUEq1AUV1UqEdvEECgy2CE8K84YTgswYcVmhik8g3XqXWbGhLrwxjtajtwPpGdYvHqReiYZBDN2Bt2Ld4ab",
  "key1": "5fmu4VNJepnYxW7kWp6KMf31e8UZNfhTUYVEHk24itEbqeFTwQzPiSaiXLzNkf2fJFsHmS1Rx42sD4nHqk8PqZ4h",
  "key2": "2YK2PGvfAEGDeVRk2kZmMqmdPHyfyWcq4UtWHEPicEBfgz2TCWmgXD1n5EYGGPauztoK4bf5FKsYbxzGwe2bP5JF",
  "key3": "2M9i1ZdLcHrpEW4YB3DtAf3P2cjXXHiv7cvMcU2ZouV4AjSFiupHfgTZFdAjmW5Aof2LGNLbJKvHYcgMvEBu6ebc",
  "key4": "4diUUthg2edHdoNkh3eta2w2vXV25TFoZw87RJAfzCvhWVvzmi51imXPNcSYdtkzM5xZ6ibdy4SSPSCaVweNtF6o",
  "key5": "3WNjQKX4qxgpUpAPHYiuMJYVPHAXzxzK9rQYLHF9pg26WGhY743W6EfVffVdCZN4uPCzxj3k7drT6is4J9MBwzzJ",
  "key6": "5HeeznA2fANgYdprWQ27CfLE7gDZkq4Q6XTtSfMhhcfPXt5jGAWccFhT4mm4bxTzMrWv1AHs7iZgdaVBCnzZGj33",
  "key7": "3TjU9bApvM8iK3h2KbGgs8bLW9QKhdMt22LzUjxs8exVmJ7RuFfNGUgrryB1BsmgR5haUKWGPptzscyx1cb2hn3o",
  "key8": "3XtdKX6XuJ6Ukgp2xDLmZwnEJ7nbh2LSGhUierGqQrWj796ghwFNhZcexSWDwM2aF9Le1jsoUeot5AhMGDhsctQB",
  "key9": "5XVXXo3K5ri49hJs4uEGeuCv9KYyuikGefu9o9h5rFgQnxQYtsBHzsyRkYVb916nFkfdAhx2KqyzVkwCbohswFKm",
  "key10": "5d6B3G6csYHdBnvb8yLHeFhVpnmnHZWQTKXwY7spMrbo4wdTrp83iYybHNNcPurKCwrm5BZVcq6nteq6y1ckoJBe",
  "key11": "iBr4rCXv3UZq7em5oyCfec1euQqQQmTkXqRP1oMAuQZiLWGynxWU8Eizth5kwFoiSHKabNxnWBvHE1VwTtJaVNT",
  "key12": "5E6wR9vLuMLHynLiJA8eK7eqbLRBC3mgsKRYo43jVEJ6gTAJ6f6AVcWgTiGe4Mk4NRwiXuRgm1Y1JY9Exwiwsbo6",
  "key13": "5JTapafUXMedPj83EQ4C7fBNLGucWzMczrbNEYJWamvSQ2WmcZjRqPaXr1inKYRSZjehJHSYuf5Cx2Tk47aiRE4n",
  "key14": "VmEXmq1qkPgDuTBPBT43JtjkHvaJyVS4CzUmZiXuZVMDktsRHfTr4od7hcvaUHHe8dTYF8DWCAQSix1W2VWGLru",
  "key15": "5rcxNJXNVsmuLE1mBGoCfXuXhTFZw52A51Dtvzk4JfyPQaNCRvYuNohRzLpaqPVzawtmVcXrVX9XTzGpdGiuU8Ux",
  "key16": "5yJtX9kgQtjbKmpu1Fbnzn9PgFztPKAy87QTMKvGmLer7BMz1EbQRrVx1URPrWiT8gA8pTZ7iCBtA1942UJuKK44",
  "key17": "3vuSbLQz4yh7ch6sKBepqFCvXG3rG2dwjJLYVNtVvoPwVy9BTabhhm88jZTJt81pEBAjewAq2xHxc61EKspeZie1",
  "key18": "GnHidq5vp5q1MvFjYnWtScr3oeDngubnaVhCjdopPoP27gHKLD29ekrMEHqSAPtSTxdRWfYSgcKW9mvrynxCPFX",
  "key19": "28DtLPxaRXPTJmeSohhuMtWrHXzaYWji75tgcX7BRy9NzSHbyaLm8BvgkkEiZnGcHbfYEbNLA2FGX1JVsuNLCGkx",
  "key20": "2GKbdiSsxy1u9JsWUxugZBdfQyxxmgZyexg5QVdfqiqADhFyYGoJUvZxd5ze7fNc8sxgTugeeDKvyFpULwMn1ZQk",
  "key21": "63QZaxP5acpvzLW9iEvPxQBwiXwPevXSJTrvJMLrWWRByzTGFnsQ5qHe4HRWy7oocN4Gth78nE9rjY8EVpDgitBA",
  "key22": "Ggyn3eVzm755ZfieQiEu3Pjfw8jYgd6sXjtDy6mfX6Yy9ijrSTVT9cA3G5t8modBak985UGpaNfopyJK3AySTFm",
  "key23": "5JDfB7JaJVao8nTYQ7ED7XJJUci2Xg61tMpCfsLhEod4PmZz7HyY8nQ54V3AurydbmZFHbyjeF3fVjsvBJ3edU93",
  "key24": "4PUyx1w5MttmE3FBkqdU23KahtsGDqpbBmVuikP7TuTg6eQgn29zwacMDXWiHwxkS9GFCJZFVvbf41mdpg5x5pJb",
  "key25": "34RCCWJWDx1fBBG6ZTChhoez7hZyTH6pSm7pZfhDT3o8QRKRPJZ6VjgAmVBsWv7pbJTVKHPqLH88EKWPL9UxtyWL",
  "key26": "5Dt3B7Xu3jWmJ4UzPUm4FQQsWBZ7xAtvYAqd9ao2Z4aqzUNWvUvBz4kay6GXQ1W5BbFkxdAa9vzdrG2y7x94E4RQ",
  "key27": "vesaQRMq6KP8QUMEcV4NTE56f9pD59z7imrBtHYkJY3bx5Q4Qpz5bvs4bonGCSQM7L7WNSJomB6hHdMo9UcWJLD",
  "key28": "3L8vRjawaKBrjVvvZyC7zj9S7BDxfenxZwPaKvgKvU9oqw93bjJyPHJoK9pPyHCCPws1icd4DCqgkQECZumrY8Xj",
  "key29": "4qVnYFXqJWpWfvVxSqAQsGM6K35pE5d6pLWtXtqWXXfkywrWXwx2NTuxa8w5u9ATaX1GVbwn2ne2fU6dXbJ94N79",
  "key30": "53VhVcb98jFBn6DrVNGfrgDmJKAwWWG4fNjqGatrLVz2jkaL2P24ZSQhQUoK82g1xNSeNqQPucgV7VWUni7MGt4H",
  "key31": "J7ZaedwnMzpMSGYC2EncFqrsz3bBLgw7rBfWeqLxuT2mV2KuY32MfhxtesftET96hS8nS2YDi1WYtPsfQLLrgMZ",
  "key32": "QpJPENEDJYLNRq8pBAHvYFw1ds1756pVDWWdMac8yBtwq2qhD7TVU4Ur4NDep6TCjrdjQBRjXNX9rQmMUBRk8ra",
  "key33": "2c57FZyTQrS245tTg4tF2VpvkYhuX6cdz9qafQnR2FKjSozV19QYqhTHdE73kev6zU5Kuh8Uyx2HcZP7MfAbdkwV",
  "key34": "23ap67XWDdpy3gRuEG77VukT3GhFRDTFunsGVgsyjrdFhtWnhtHBvdUxmvxTk8jBskmcdcx9SMq9CdanHNa1ZsAU",
  "key35": "4A8Wh5fbJ6bPkeJUzaPGDVTes3tHwKEVE2cZVxaxbw8TuKNxfdPNDW9Z98a1V9Edvcx3nxogv8CdUnoeXdYhj4TF",
  "key36": "524sHMvXG2RoZ5LT4HthKjv9TaVsbLuhWos4j6yX5qELmfZkCKTsVFEou9vYNEpMKFPzaUqMM9UNnCq1bVcUa8ve",
  "key37": "3AZ3tcEsB3dHodMeWFGbDkLDYWU1KogAYiBw3T8vmUNsHWiuHXX9nsXy2CKCH59MbJ3E21QtGAdtgKd3SjgAXu74",
  "key38": "86Gsg6QPNeE1rP2Yd1TWX2xX4gPz8hDqAYxCBHEgHb7w5JYcaCyzXepQEVceWnrm5se1NTvzsRFaRgzeJUKgKxG",
  "key39": "tqGXXvVEseDNYcdm7BSKBpniXoRZNvSxBKWngZVsScFgM3PStRo31RrUnSRdjjDQM2Mm4NEeNfvrtYEth8xvsbv",
  "key40": "31xsG4RuZWCjjwfnvXnVZcC9R4xycnpwd3Gj9PppzD5YEaFiFNmG51V5S7An5DTSi2hhsLTrsrK1xnXXpMtEZeMS",
  "key41": "3YqkZzmnSQxFsh8TVeyuTPnhCsRrkYZ41Ty7XS5svvLUvRSegb8Z5YUa59HtABRu34e1DYgVhg6hFTHVVAUhm9Hf",
  "key42": "rpH6ZmEyvyoPUmakxEuoH9xX9bbyZA9ExRzbshNP6S6NsZNGaF1LKQ7PbdPByX2C9EYjuHnEJRkGMXbJ1E2JstA",
  "key43": "3igRJLkEFpNDwj4c87NW5QPDM4bUJSWzSib2fLnhKQcAWAcTMYJEPANb669GYpfsFfbHjx7APkB3UGspm2fdRJgP",
  "key44": "3v7Ak4NvkjZV47FXm8uTq39TztPnZzgomrrXUAEtZGLqi8nS3XmjbBZMsesYqoBQefFxLHhTzLpXCD3mgFCfVQXR",
  "key45": "4d6E57pWnjMiLwkdXUSdgKpxnu1JEZtSjJP1aCuqV7d9keyjyNtDv5ehrXTkEuAHrRk7Zb7RPiPTeYZDPB5pkZQS",
  "key46": "Y4fbKmzNFSdbs97edAK98PzqZnXeJ7ucmWWW6GnHZgQ4LZCAvVMFMzw9TFLTCYVRqF3gbNxUs1Aw7YfMAsnr1of",
  "key47": "3kdGUtTbrNGWZwPT81MPBqcaUZ2W9Uyjd4CVmtwLLJJR2ER2PBYXHA1aBadRKQBHWaJCcTBcbjuLm7qc4u92wqr7",
  "key48": "3gMu28NGiLXmPNCcbKtCXsQekcozKfPPc7Fz2hGZTm2eq9TjN7Gz4pJGpJfMHe9y75eSed642qQWzUa1RDQrhQdJ"
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
