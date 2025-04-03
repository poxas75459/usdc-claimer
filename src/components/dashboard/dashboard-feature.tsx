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
    "52tP4SmRVegAQsX7je1Up826CozBnYHDy75QipG5ddCiszxFAJBMmXZj2pa92S8njiQmWazaGXusGF8VJj3k5eYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XvpSqy5sDvDxvEbB8EcjrSZwk2iBwhK6Lc53cbqtJ8fJwvbsRfxAVwRUosBpneswma7Qnub8rL9eX93mxaZbWUY",
  "key1": "2kKDjK1nryF8SWmRGu2wRxjzEZz68vETFHunurALp9SQ2adVHCXiUSUmjppGQsyDajYnib8U1igJbwcu8N8TGShd",
  "key2": "5uXnAwZqQZRzi7BiAqNXPpiasybaEdu8WvqCecQkXwbRPuboLcXgzuLnuw33iaYdeCwjMTxkFFxNScLTgDfA1T4D",
  "key3": "5h5hNGd4tnbgR26Z4gaNxELcWqHf4VavPc3iPtrMVNsjFDkmfHQFDneAxEZSwgRDfDCxasHQpRBSCvJhLe2HsRJL",
  "key4": "5FnEXEwQQjcPL74JTV8Mzm7Brm4G85SgneZyQ8zF27uX9QtTzeqDtp4WvqrYFvTzCP9ckMX1Ra15aB4cGK4JHZy4",
  "key5": "41cAgY4is1KN7UwdGTTSz7XECCfMBanWQ8QaztnZouMnko142divM3SnLZJ84Ls9tLiaE1wVhf4webrRat4xQVKa",
  "key6": "5RLHztD9mc5K79rshT9vhvWn6UEBZCBhk8SpEaQeAsktvVreDVwoLZovGs873VWvB5wKij1hujUFEDuYVvQJ6Lxk",
  "key7": "3uwoMAP9WktDWJqq7i7fYAuFx9JouwF5iXxq22kj36kRravK936q4pDhBBTyKKGZ7zp1ps8qfNyL7PyFM9nvfmwX",
  "key8": "4Wn8qS42tqrKPfowyofESwrWj2ku3RXLzyEHk32ynvjEXWQFKmaNH5JUH7ETM2J5k6vscdUzThN9gfbyzxuAxGgZ",
  "key9": "2T9xbfjYDztfKDj1Gc5Gz9zxUyEqrhB1K2dm9gpyxWNDhaVNp2Rmv1byMYQcw8X78X9gnREWn5iCYunz3TSiQcCf",
  "key10": "muyYRw9HGSyXJsn7x6NTS3sApnkQCEz6c952Aj2TzFc57bq4bUqVdxKke8RCSeLv67ymaEguV4cCmfTVrzDbuKV",
  "key11": "4wpNG6BxUnrweaBQpeQGgK6my9niJzozW9Uxv1qcuoMy1xGboQcy4ZSzUSKG1EmUfXLCz74GjEFgaoNijzbhehBb",
  "key12": "5XZBbjfe7z3kC4b9DshfNFdNMc4vj1CKv3WmLeLiseC7wvAUxv8KKvy1GnZm9YtHtzDao3SkSxSYDpXKeyWQMSBr",
  "key13": "3qk85YLJcdPMfZowpap4od1cWjARWpktcnbMrYE1dhjoref8B876uDY5p3XeT9dYBAt8suHBSU5qpC1N7QCKHNM3",
  "key14": "5xU6XpdBNwFggxchfsqXv1nwcE9egX3ZbQmc9X9PXaCW3xoL1siePfNSog1XHZCMT14u7CtrwvtThoeBELeCzNsm",
  "key15": "2UXYnkde7zHsaWYHQrEZrobF2B8teTAvK4gipBDkBMVJwTe7JCshPrFbrZTpPjyhsjUC4QRVjiuyRkLDgqj9zion",
  "key16": "5Dt5mZYYxLHwHLQzQygNyT8KbWFTHqZ69cqf2x8zYvmyqPmsWzQzRBp1WqmFBUEubWFRytwuWU6JHFFRvqGt8msc",
  "key17": "3koDLsEfpEdygMBsYrvY8G52Qw8RYUVEVvtZsCofT2c1BMYFfcht76bEbyoLUozDBCg3JnRg645RKG5HKLYpKHqR",
  "key18": "ySVG3kNbMNqJN52jrjxPnFuxMhRGXUqhTFErjEYaASyjXoRVeBdqMP6fU8cfJMz8TAr3uMpMBCsKyWpD7ygk9L3",
  "key19": "5vZaQBhVAM4xUQjxuc8omAgM5ykrpKLBqzdh4ZXGubueZvC94KRYMxc1cRQw3qwnR2k2GhocvgkmDhzn2yKYToig",
  "key20": "7i4pd3eC83DAQeuJ5MBqBbjnQgC5vSTZJ5kq5QkDSTyefiv3wC15Zk4SSMyxuZEiDrQgUJvibwE99HfR5VRhpRY",
  "key21": "2H8Ebek8BAikzoDGi47k6L91BvPPfW61BxA569E7LCb8EgZhgdMm1KDchmXCJoDMfF1fGkfbbeZe2E8v9PxmjVq2",
  "key22": "eU5KVtVtbSJbowp2ZFjs4bqAJfumc9TNdBuyffmZutZWFg3bFU8FujYDdkB4ezBPxuh3VudGpHtor8YMVdheDXE",
  "key23": "dH4Bngcj4zPodHFpKUJZ4trx9VKRu8u3zRFXLRhZ2ddttq23R6ZwzMrpdK7EgiHDAXSw6A2btBL6ofTHZjSQi4M",
  "key24": "5o881V13NvJGEaMCibXZCK2VcM42g47jGuxX4sQ7dTanw6THeSkccdCP3RJHZgfzSAQ2E2NSYmjbE7DsaBaDKqPB",
  "key25": "3SrA6JkJ3kadVtq1BkvkT9xRmceTDpyGP8joLR3TpFugVxP32Hyoer5dCvo1ZMofHQeP2W1GyLdtrq2WL697gjYD",
  "key26": "4SjK4ZVgYStLyTMJ7EJk8dmJgDX5ZVZUmUaa9yjgTz4ooqW8BgJ56MCjezFxkx2vs8MZtmWAfa4VwFvt4Cm5XhFH",
  "key27": "55oPpWRcRAbfzG9eTgcYQzTf8MFC59kCEwKG85bkA5caJ96QGZAdt1yhsoUAgwDZ3WvbshsyXopvsxVCJhjn7Ltc",
  "key28": "631uuAjkF6YmDassVuKWW5gfUsnjTuovMzd6nt8X864sAZCJcGxqftF6dmK9cx2v7ncZWKiSuzH36RuGNmn2LR92",
  "key29": "5E97WXx151qdHHXb6AvW31i1CHQiPquqHJLiTjDpDPGT5A7rKGR6SiQ9iR2dyEWWebCCnBxCJAZJyMCiTuudPq13",
  "key30": "4dQPuiyQsH7bpeBro3kNstDxtVd9txNMAcBQ683UJShv925aRYTM9WC2Gb75uRqQTCLp9aUbcarkb78ZTWXHsnGi",
  "key31": "3a8A9wrxCMaEYZkH9xY8p6arwwPfvMBqPH42mKfobswSBJR4LEdwEc6TckaQD7snCbAe9xfe6666j2y58vmKJW2E",
  "key32": "2h4idyxPK7PqV6YRhBRomCHSqZrD6289pXrYQhC7NEwyjM8TafZuu6owbDqbjnEeU21vanEumtvJKxU78hwti4Tu",
  "key33": "4EpcoszA5W2Jw2sjLAJc7jfETVwPAz6ofuXwmiFJ4UucJkpAwBDRuXajyUPynkCBJK9DoWiShijjrY1JNK1iTp3p",
  "key34": "Bu6VjWTrx5xki2UMTCGb42M4SBVVVBeiMjjU7yw5i1neX4jVK7Hw72ZxUvrT9TTyBN8XVNVkT3XbvfVJLwnyoi2",
  "key35": "2vTqqpBJPLhrr1xcYmf7W6DRknaaGFibThsEVDRU9kwUZpVBmFQ6PwgDVA5McYGdCwxRpf4S9f3Y29nwpgaRy76Q",
  "key36": "55DuKTzbzyUjd1UdfqS9AktyEK7DQgcQ8iiGH5cvGnejMSRgCbA9DV4oLX2oZYw1oXmnpWRS7vUSBvSYgW5RrM4V",
  "key37": "2jJQQfQynEQjkngiqngnNSmfrZSQetcx77TFUMquaS3NyKo2HeTyYZUXeW9q2TG83896q9YvJaN9qV31hRqsRdmM",
  "key38": "55H8D2NjT5dJBroH1g5zBu8FwJJtBK6DWBuLpm8jx7AiTDKYT71GPEWE9eEQMXQXLkDLfLNg29oqxgMY2wM1duuh",
  "key39": "27zfPo1acrzm4Xi6FowFdhBDew3AEaRpUPSqoT5XfNqW3nKHdTJuEeMhzZgYvnZy8RoJmGFVDTyV3gS9NsJ6GpQY",
  "key40": "23TA3mRnCHeVMd3yHzL3TGRXEXRcCY4MYzcjkcvRZdjqZaEY3fy6Z3CCcRDzx776uCacrJDNTetKCH4ZzYihXUWa",
  "key41": "3Bb7CqQdBXK41oThP2msvV1JrWvwpeXyre63XTK2JmjUwSEqbSW8sJfRXwLnu2HovwzUp92LXMzH9ADSs6QKkVAc",
  "key42": "65dwknhn6WxaHAiX8Y71z9dJvqdJARAzxUj2mML79VQyJUgtxmPdnFScMRFZ1K6RvUKPvfzhGBsfGaHVvtvBRvFc"
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
