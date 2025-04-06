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
    "wEDNMiRRPpJQfxUphQU3mW62UNfrsNaArkfNcESeTmNumTgnXeUeG7YDJ2PqUHq33jXSUxSLWb1LLE7qJqscdWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5VjE7hRcJbZnfy7AnwhXkCchbmERtCw8CHeRy4ci4pryFYHHWo5LpyWsoQR1G8gfXNhugoCEL2XztBX29xnMBn",
  "key1": "5BT1uaLfGsnVTMyZRaaChKpKNqAg1ESk5RuamGrxiznFKXwfDur2NETR9EjQq6RHNHVxiiPPZuSTQ5vwa5wr3xXr",
  "key2": "4mzmj8PjNb1PMUAzZp93ia1LbxFWymb7L9wjciSnvGRPx8zoZUAMvvRWTe2rSq4n6RFcXnuGHCu2ezJ1djD6JLGn",
  "key3": "43BrxNQFMVmBr4tMAS2Kf23eY8mvdE6V31zPKVQGkzNzZZa8yPrpjS7BSx7bnnNHZ57HY3xBfxsiPZmnbJ5ia6Cc",
  "key4": "3188yVByBZ2BbYM9khveFHNvyv58e1vJXCf5e9XTAoy1Fmnb8NCNzjDXCXpUnddjaEtyZzN2sbXsm5Yiwa9bgo4t",
  "key5": "4bqCJoQ9Qi9raZX2TY94Ba6ugyRJAEDte1v1PwJoANV7atgGC7dpSpVXmGa9hs2DWXreRWN9oY92ktvq8JzoR5ir",
  "key6": "p3bHfsmazU5Z2B11GXEnirH4Teb7ukX8z65SQ919xP6PvB9xyPuQoi3JWvSt8NHjGTJ84sBcRLVrhCisiiyhDuq",
  "key7": "2oyC9d49xPzZiw3WgJdX7QGCjMnf7CM9NKPeFU4uSQ1wezo2WBu96kg8pwDKFyG8KboeqSabzBKVxyDrszF5MHT9",
  "key8": "4NDtVXZwyJXLmQhod3X52ZbVg9tVWnRXkWzND7qrBhYRiCYxuf4Lfs8LSFwacSUnxK3gE4uT4DaXCc59xC4vC5oK",
  "key9": "4ShStHn1p1BLxqxuTYyKmttZYBn2W6PRNoJX7kQrDHANddf1xuecvijrrGnUfuFEv5CQTXQAX3p77HBNasx9CkQG",
  "key10": "62kdgDVgdteb6GUdYw7PJBS8A4KXQ7PAHz2XCJUN5NLrZFhhCdERiCoCmWwZCs6rSQ92aL9hwxDtNhY2xJkc3WmJ",
  "key11": "4E9eKPSMqu6ZTmWBjndkqM86WiDxTFP3BjjPSRe86CwR2zB699G8vLHJesWGYYvkWVwofFtiKHcfq3hRkP5tpSZL",
  "key12": "2GGbHuN6AkWvf49xEmkepN76a4XX7Xz1NBRFXZRFTwF8vQoEX5vTsxmY4NyXasxnq4tCSwkm8HxKja2pKP85XBxi",
  "key13": "2TfQHqLWMUkkWg9Wpqtuo56zpWZPLQhXqXj4HrAmDUnrvTH8HwgC64vwrzEYxRB6bSjyQg4P4voautBCp6sDj6SX",
  "key14": "2Gq23yAvx8g4w8mEWKNkZvUxMQ7Ejvsm91Dgjm7eGNakd9sRmjoJGPKNKRT7TZur6Tfk2RSPEfqXjSq7246MuXKj",
  "key15": "5EVyW1V8SakqopVi3WKHLEk8BZvngCtMyW6LBRQxQe7xAomJ1yBz4rW14GBVDHUN3jcVQ2MzE1TSKxWiM9ftMCt8",
  "key16": "PeqgVKvrKEFMMBZ435vckVSV16em1T8opnkxyT39WEpb76LLQJe8kEqBnbwkzEecaBUbR9EfwFhCwhMc4YVK4x2",
  "key17": "2UHKspXB8tXXbhpTUrcsNAe8wq4Uf66YAtH5kj32igJzDpLgHDn3Hwowpz9SNY9nyGbyMQ4fXNCgXCY5RvUtScw7",
  "key18": "3m5odgcMcYYEJLoZXPFsJGokukyE6N4o6nYXjDGMYJtW2F2gQFQPqj54yyr2PrYjRZhj6XT92vYRiW27wYrYvckZ",
  "key19": "5356UkikWhqqneCCLRYBjfJQYe45wsNFtbdx1miEBpYxRxZxbCNGC4TJUaLMtYJWo7e5iKoCgJK7CrcUztPLWkRr",
  "key20": "61pLBP3cgA2XajN2wxYxrei5yaHwQnCSnHVy9t1xtBtzPhoMBmSLjhBYzZohFg3UjzNQEFdCYeSjWPwesAkKmywM",
  "key21": "3aLYZhqhfVPwvns5qgzWkUwPseLWiDYccDxrvRyab5G2WfKqGtbXfmtLXvxDkwTZoekBhYdVHgo7xCkkcTeKB5EN",
  "key22": "5b8AFRoBu6nYi4AvkXjtwnApaDoAz41o6WdcXS5QcsaV9yrBPs4D4dEgiq5nuiVqKDLZsK4QZKc5tJY6LNq1s5sF",
  "key23": "3bGoVo9AoGux7auSWXKYV6g4ABDW8XLjgSfBya8UGdUKYqdB1PTraYezvm2LMGej9UKb3ZG9FTY87J7LmxEmwGf8",
  "key24": "3pyZHD7n5vKTNvo6bDBPCEB89z1BPFfEtJVnpmr1Wt8WHsJhQyfus5Qjdc3xvwELhBJ74b7JWXXkQpfm6s1q2qAh",
  "key25": "4EXbU5mAD8T5dKEyZSzodirWisDS4tdcd7aQ7Wa4C7SBXg19HcmSCz4ZMqysQAW13ZVEjDybvjnBp21gnJnmK3Vq",
  "key26": "47AuakukdgfRgnjHhgNuKK683FEnr73G84TBya75Dj4BLbhqTQidv2EvK8dFRCwDC1GWujer2RonusBizfuD34nv",
  "key27": "44tJANe2a1XuHEfNVukC5LYQsCrL4BhBoufptfLCb1oezCxpzna81XV1546HZam1w5XEaASdZPzikMzjHgCScVAY",
  "key28": "3Su1yJxfuoXystvEVpjBzDZtYw8UfED2gf4GGtZ4qHbNc3Tfo8wjkbPeHrK9btCTrKRh3E7fSrCuTLLci1ajyJAb",
  "key29": "2eUZS3dz8aJHYps2XkboJGphR1kR5yp5SShMbU7oWPPwtitgv7utTL7cw74P8RvtWMxB9Xsukd1pGys53QfRGfeo",
  "key30": "2H9f9hgbhdecETc3fKxqJib9maFy4RmuGCdSJC1ZjfdABhZrFZPJtL9cSf8tcY9RfxeiwQErXuWKg8tHw4s44UAG",
  "key31": "5k1a3rWzRNYdFpCub9JDpXwyRmRdUxtNXCjjP9AQS9pKEheHWhoeEEPvzPp82Sog2CwV7TmEqJeFC7ZaPuzKMj7F",
  "key32": "3tk1mxUUhuoxa9B1tGB1LFHXLuo66AKSRayjpwUosBeDds7GcC434TUEMrYfAUysxnxe5wvbQbZ7ezbVEfvgsmnR",
  "key33": "5q1FrtocXMg4nZbyHofkUFunRV73JKPvUBTvKwvs9cvQ2o3MhZR6JXeByLoBZbrudTcNAq7ZoiKyrHWMFF4ZKBiW",
  "key34": "bG8YSgv7U2DH8eekQq35HGKcbM5YyYCJUt5noZySU9kvUQG241KvW9ZC1gFCEFmRiEDhYE53PzqqMJgecm6JVkn",
  "key35": "38BVwY5qCvLSmWsg95mGU467NQANAnASgfbZAzKp8YxCTcRzkZ3Dk1UnyXvGcUScNoK5xwM4GVaHdPhKcCq4PTNP",
  "key36": "5DumFZsXKLY4hFQjQLj7X8LDYc8KWj2QAwD693o6Uoo6dFLjV3XH7tXBxwzJCiENtAw5WkVjnZRQD2WGMxACkUnN",
  "key37": "5CkJ1V9yFRMchE7FRAA4sSwHfj1CWe6w5ZZzxV4vHwJHFc4zPikLf3tMx2Ph2nfgdSZoZWXuagPfSbzq3VYQfeWd",
  "key38": "2ipknkbxQawpvAwoDuDPc3xkUFiR4Dp7NuAEevDNdjnaGsB1zV7UEPXoRy57iAGsJCiV85MpsGmefMekNEgSWCAX",
  "key39": "4UbHvmczp9XrZ7oWxozwqV9hnjCG1tvkFcXP9ruTjwiKa7sWT82DU49bs9QgT5phWS8a1e8EnpbaXLWRo536Hp9K",
  "key40": "4WuDmD3TB7QGHv9Ebf8ci3p8FxYGBkc9Afqtg3iyiTorSxZZXCZDNKqaRtQBYoE2R7dx8JCWoT3MdC3C2jbCF2yg",
  "key41": "ZU5nVq6bdBuB8m4g4ZNYfLzHittsAnEZChV2tCwoR4zfFWnzETepVsKsY1rLpPGfGZ2ZtLirWzCdA9XPiCKcKKd"
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
