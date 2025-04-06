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
    "kHMSNgVzrJenKfaBKkYD2LBiUBPBcBmnQoyS88Z5f6QkLXsptNc5vxKe7zeJGBN6vbrYuae4UUEuGk8MDVJWSP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ycAxUEL5a6xqS85LebaZy9GmQYiR7BeAq8y3Yf7W3bCxxT8pD5SspFVtDf1fdykJgDeiVZjEwh1azR6hd7Cx3y9",
  "key1": "wZgsPpCwkuuez6hnZzGPARZ3Udn9BoaPzCcmPTt7znqxQALLKoffNS79vEGodXnW6UQrNeJvgLu3Ty11ukrKoZC",
  "key2": "4kMFPq3gkMAgq9J7wjev5Dc2i665co69nkGPpXTkQy9Fq7naUDMK6FpHh4mA6Z6mqUXG5avnq3JpR2dzh6sn6JV5",
  "key3": "5nm3kKcHJDTZeinAFXMFYce9fvmrsK2vnLXUD4pKmKeGfWTKmDUv5sR4H4P1GgmuDs3fsg3DS6cfLqQKaeKektvg",
  "key4": "hPUNXArALQ5C3KFEm6CKKyR55oquUw32hip974RYxA5HtpTLZ5VSaHDSAhfh3CGXEcvQjfxodcUL7s1iFvc1sYn",
  "key5": "5fNwapk7hiuv4qEPa649hAJZDYY4SxnwezxpHy3MdYXh3JKpBBrHh7A8756RZuDi7X3JmNw41RfEdfh2fumAgZpV",
  "key6": "2yrAcBT7yxH97fwgEdbzzgfeVaskX8A3HDwwWmUzAkTfg3Cx4SwqiWkuFupRHdHnJSwEMHh33Zt66yA51CDoAFu",
  "key7": "9yjEsv81z3hPV8rEUPiK7Lur8S7JhhgRZCdkfCWmVT1MwgAGRhh5Rv7nAEfqSoqA6qv22cPwXoZjqXrPbJDiwzp",
  "key8": "4NWyRy5m7GRMZfXQgDL2Z8QQ2MkKKhR8a3GVotbHnuvuiLEacYemHxP7QXggLybBqvsg6r83MeVnncvtiENmKLhL",
  "key9": "2XTdmsz4xMNCUX3i52KgkQPMAoLQYBNBc48Y3uDhhVd6ZN2qHdFe9gGePUB6uq2iftimB1RYfpucxfEbGBULPBsK",
  "key10": "3kwt7yWn8K7RASckQkkcgDsY3XsBiQ4o9buas46oK9TWkikHFeCT99tHocsa2FkKAfWBAJez9ntLJVkvrnkYmg1c",
  "key11": "2epCH6F4wbngAygTNPR6wN3qddTDpBxhTmUYnNrsWBJQh8dYAjJznXM25XvPavwGNTjtuUa6N4oqqsmLrWwFWPAV",
  "key12": "2CYBXmJi8ieqRPoKq4q6x3objZ7H93ZPaVpSzEM2Wvw8p2gaTvp2vuHaX13W62kTKttDayEH5ACLzP4JmsDyZKH3",
  "key13": "3WYqadqMkn6a7gFbyysvySY3VLRpUkASLZVjAZomJVfmkx7G4hUEvTZiXtTGo1WyRs8q4V7F8CbXKwCxHceKkWdW",
  "key14": "4JoQ73d6PV2cBbnHnQGamQ3zfyZKFkUtHRXaRjpV5yx2E7bnYxm4PdsdL1E66UJk5xKxj15cNgSkAVX6PXDDVDQg",
  "key15": "2nN1jcCXXLguzteV5NLMDJkWHgvuTap5ZsctzaU9jRDSbzc6DVEVdbiPmBRDejkbWj9AHTU99dYJVurSAASk4GTr",
  "key16": "4uo33PHnKcWZxWKfWgoQ9uA9PHhNmBbHLZwdJUMtihrWLQKt5ppoZ3YCNgqdyJSZyFCQzdac4HzB41Vr4PbEitSV",
  "key17": "5SrWd2sJWuUT1v1p4d68EAcUTDB3WFNRWuLETrEcBLhQGsRpu5G3bdGnjUa8vh5GQ1wuMV4AktGbgt7ZaLVpv6ui",
  "key18": "4UWkcu7ZNHxJ3FVnKAUxaLUQGF2fYBr5zz5hbTRQwFj1bag2LGzNyEbGe3REMVAr6Nqp9xBu9eVs4H9rfZV5Qcm7",
  "key19": "4ry8PxAYAxajhSnAfRFoqsGDUnej1ZLjr9qP5qLi9EbFJKwqiTdrznjzPCPRoTGfkadW2hmk4LiN56afqSGvjqzi",
  "key20": "5gm7NxA4x4o3woEtNGwb8BrVerXTViEYTCgcbCeADNe4jwA3ZVKEZUQBHdQNr7kDo6JU3jvH9Stj1Kt8NgmAPiy6",
  "key21": "36Kj5v6J9gk6FrmH68hegYB64e8KvJEsqUjuvYYoFJZMXqsRW9QZwTpMGbRW1fWaPzPMVHYvSjf2XfGZC37Cjws3",
  "key22": "3G4E76zDingRotEz8shS5XutW8HWgVSjw2yxVSLsHmnx2rG6u9rYKpgkw9vgAW7SZ99gzJRSWcvdgfnZ4wCiiaNe",
  "key23": "4Urf8WrxptnBZ3zx9xzHAPeEbLCfRMty7DkUoBQhw9avyumZCAuJeiRGa1EmQN6LgVFSFw3jRyxuoBXm2qV7Y9VC",
  "key24": "3FKmroyU17tcukUNpLoBKVs9TC7cRBWXq3Gz5drxFvNX9zWG9qvHCUG1XMJA1MKcgvFdTpwSt4aJaLP9BAZojrYv",
  "key25": "3nh2RwwzcJXHL8ZQyd7kgbUZGFSG35dAU8JsZw38cPgrSuHpdreCBVaLMoabm4GYBoX6hjR7VM7Qccd7kMVR2mCm",
  "key26": "BWMmey2fBVK84mtCNqHPY5Tme4SZfnMoxPMEhzett2gWhnFx6s2Rh6dWQLbHpQYVjKEhuwoUyPEUULQKMGehw2m",
  "key27": "8sbgDtquzF74jkjSKRNKrQftqeyKMe5sn3ZuX7EbSaXMrEwezfgQqRhtQVXgWnuFoghULTTYowboh8KCddfFfEv",
  "key28": "4GaXBNQBJj4vBvhPN5HrpDdLJgnEoSJXQbkQjJKiCyrGmXy9BGxph9nQaGAVKVenxXMEZjoKNzs9qSzwo218kfRm",
  "key29": "4jbVWDZAaES3ywzkvXMz7JXAktZwtBWu3XzvbuKLHg1QTfBAxH9JbfaXV794V5tMsFxDmSDavS1fTR4EUpQ6SVED",
  "key30": "469PioV5fvPkLxAgQFZVsAekZedsMvaQ8R7hFkKQGhTdmJwmjqw3nDZxG9VZPQJ1SEsaJmMq8tvB8r8ijrW895U3",
  "key31": "3LT5nkM86ARk2jCnM3SZMvUmf4VBUbznUYh3nznxUdgMfb2Lc5hiPdiKPP8LtEk2Su8wVvqpLhSvngUJNNWcPVMa",
  "key32": "2pU5zMZ2EFZFna9uiQcJeg62fueCE8iE3L8VVwhrfKQe5kZQsR5QHiYbHtESc5KNFbvmm6VUHJdkGftwR6QCkoMD",
  "key33": "375k4NzVc68CibAWEthBL6GUoAus5eoqRyxF5T4V2efLkZYyJMXsiEdwT8jPLPSWFfvAGCUajHyNsMyJsFrbVpFg",
  "key34": "3enZrBpVHMsYSL9dXqDzpUeQaWYpAJy1SBdwnAHpzXCgfeHeaEebasGBQQpB2eWeyYN9xJtWy8Yr2iim5A8dhXTD"
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
