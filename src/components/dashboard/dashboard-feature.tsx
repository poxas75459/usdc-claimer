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
    "3v3vbEcwskU1GtoptKbuxU4S7YVY2EKtGJG7iCbq5cug3m9uh6XbaiNVPRvU4sGDrxuMH7sqkm11vAPg5tpryrwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U2SqiPkA4JAGVvbVonsbfkDK4EBwKhgLL85mMbY7yjAn6pewhsCRNKnb4ixQbs6zU1TYwbi8osKDAWx5cEJaEFh",
  "key1": "3kXpERAGH4JRhcVLfntBN4AcNgzAHMVyqFTgykBU4GT7FMz48WExYLDYDcTKtxaBRnNVRifyn6F2cy2qZqcGrrzg",
  "key2": "5e5EqNeyBjvrEb56VrUkPFTYJviBGh6oqS6PQZCSHGopGnUC5Qu2kNpmh7D42DBCMzLN2UP7iYUf11AxfJuL4VTQ",
  "key3": "43GC6QJx6mr6dgv7569CCjzKQxc3SABzYoDpHSz9meNyRiF1ySZ46uTM9pcppGqSAXou3t2sJH8A5DQUoWQGZMKy",
  "key4": "4fEK1CHiENLhinQBePcCgNR8QTAjsQbufkW9UaT3Jkgm8GnuE2d2DmkcoR8NnM5N6LMAmGf2oVUhZ3XufVgLkRbw",
  "key5": "48jDu6NFA54dKgaVdVvvfEcYsiXj5x8GUGitr8rrBFEagXRodZq44ecem2dd6vKwTzrkH8WkAeaNXmVBguGMmwmP",
  "key6": "5AuQV68SQpKgxXyM74438f3AFgAzgARVr9wkVE2pRzDvDBX4KXJUQidE1Xu7Nc3GjfPMqXftJEVTNvhHncjRda3c",
  "key7": "4LonhkKkh8Vgg65VUyxMGPtVbHymBe4BEPscQD2HwZTLi13H4rMKjL7LcJcj8oXrt4bA6tMqY68gQzdc2AkKdiX5",
  "key8": "VXVsoENBvja3mf2XPedvAqdamc9xTHyZwJ6mjgSduveKpqVkJvVX4UhAKpY1Y4jwiyEZS2iwoXQcY4NArWuycu7",
  "key9": "zr5H3hiy26FXw9kAMLdktsHqEZKt4vEU2xA5dCrEoV6Uu5GMsqq5nVDMC3odhQsZt6DdQ1VqJzj1eQBaGnXZH8t",
  "key10": "5xi9b4YgL5xzXfSo22ag8vDmqNMNH2AL9rZJY5sYMURb6tjUveXGXiLwJCqyqnYEYcCRxuc52YRY5TQMRHC28TP",
  "key11": "3QReV8JVRbvNr1z6mkHLV7Q6wC9RSzoyfYqxuExDsd99BgbDS4aiuxh5uTgbNxxWFvc7DByiY2ExUkWfYakP8E5K",
  "key12": "nmiFviTyBSuamQZCkRBmcTuTpEGxPQFmcXyPWRfJkRST5fN253164jTmDEcMtnQPoTubHLdevEMhLNZDwCwwcFi",
  "key13": "R6vxyX955gYu8jtF3d56Pinp5Jtu9eMGpXPKYWXQ6SUH1hiX9fs7BN3Ut9bKMEsiSnNkbczFkn9cocEHvG2ksks",
  "key14": "5dW4QxHiYcASRzc8LKgNRqtSyt6KyexfPZYPqKcNunhqmipzcvs8SsQ3HBjvFDUtHmrE568ZdUSa9iLMFnF8g9wD",
  "key15": "xqdVz7qubgsXgXSnH6xwm1FA4mwsNZSPNwT5T6WmtAzEzEPouKLhDYsckxM8rnS46rjMoGAziYohwcPds4RXJpw",
  "key16": "2PQP5uF6Njrg615wjU66oyr1qSgdeswMDVBbQCbgjexmzzDp6WWbQixgMApjKNEWgrwGHNYqTezHpERx3FdhHBbm",
  "key17": "21esGU5cyA2zwVhKwQ3xpQbkSEwtNTNgdADRYUpS14MHLdYzdDReDYakibdqUvN7oF2iq8Qavu8RSPt8N63u9uPC",
  "key18": "4w1KUqoYKwEYKdXDitwv9FrR56Cm8xenYNwPbReu97agKfo4gokoakW37v1gugj283cBAsd6skpmzoHoLTakcwmC",
  "key19": "5iA5nstE6up6LZN97RwQqDCqjUygA9zvkhaTwhf6DYTBgUC89JrwuqhxbuCxXrpfZ5YDYvKsEshHTHEdBp3SxNoX",
  "key20": "FbgahSjNv44QkB2Z6o5LBjJGG3AmguGZACebN1ikbtD73R3PNY3FgKeR6ecrBPD9f6vAc94kszGDMtTBVKwhtD1",
  "key21": "4r2cH9cSXa27RgG1ZDLaNeC5pBzcUXe37NhL5fnMGRtWqzKMxAfJzwjxtKFsyGMeNc94WNi9CUDAqGCayMscLBf2",
  "key22": "5oiE14ALu9nDQPWaHy1SeL6aEUQfuNMctm4sJxjZoZTNeC6mK1XM19Z1MxmTiDVgSUynseh6pbCfNPNnMaQ1umUK",
  "key23": "4cHs8VGDVwdB9cYreTzeNhzS7kcpReZWhwT8jKY7xyX5Tn4JjxCygWgaQfm13H9ttUfJkUeFZGykhBC8f7hAanXm",
  "key24": "4bBjSFUJFxwW5rxyr76nEwk83xqrayE6S4KbMmijfdGVAyWL4fW9waFQeaUvZJrXtVFHT2cTZ5MyFNTxef31eVYm",
  "key25": "47Bj95SC3vzsVTmyvYKzVLBi8seuYqPyRUKGqjWQcSeMLkXRtyE5bmaM3kj9waziyprdydz4c1n86QRDGArE2gVf",
  "key26": "5xAdTv55pHrP675GPBZKJcmmCrsjC3BuEdPH7WAtfzXsDuDvxqE74y8bX1gqfsva5L7zKqKgucfqqYLxnSRskPR",
  "key27": "5eek97cRy9H6uuqNG1R3PfQTbkCpNFBQSgjmbbTRo7LLwA12ETWrku2mh4UuBvT6coV37n3Mg3rLadRzPtbty1f8",
  "key28": "2pudFKEf3YWq4SZyWRFNKdLusc83pmxWz6m7HD4scRYgWH86Fm2pyfwSK6Dv5377DPy1QyHyiuHFM5XGQhPZWCxD",
  "key29": "2R6PX1cL4BAomLSdkJRUkdDyxPSmM5LE7N7EUyyQeF5vmKQfoiGBRvRMmJzMYK1cXGs45PxuteHr7tTnqwBzXFDv",
  "key30": "66pycuj5kMDm8P1KKMrcD8Q5ErpUDCv1rjxEYdgRP1iENaArbdepAfSaLbRAaTNYPXnyhWYBjA4BveZyvm8NW8jk",
  "key31": "5QJsQRR3S8mnMKwVKTsYG4MVimAFMDG7fW3ZmAW3yHnREfFYdUay25Mha8gYuaTJ93y3tTpoM19rohNoNhebjTpf",
  "key32": "5ZLH7ictroBKZrRWNv113T4ihB5c1g3jmKr7SjJQD4BBzZzfxAM2NiomMiWWwntAcQWhL6KiqcxYsUa31NRKuyz5",
  "key33": "2h9Q3wt12jYbnu3CaRwoqLV9p7A5qJjjbz7SUZeRkQURdYuCuwsGBWV1Sp7KmBTvsMApQRnxzWdnapTMiG3j6KGN",
  "key34": "6Dnhxp6ZjuMA8Pkx5AD7ppqkR9i8zwFL8jhZYDVKm3yaq79PJ9ryQbqazAAsqFj99g2qz2WNpHSGjVgP9fgSvqQ",
  "key35": "2LzQcnSwpNtTnrk3kK8XY7KRCq5xeTWffciMUsVxpeLXrK85cYbWp15RzU3NuDon2YJVGQqgqEFa5rqi64dsNar4",
  "key36": "2cHaWuLZWyApnfq45AJ5Yd7mdA9Kb9sWRzxjk7KZ9bcMa5CU1wzPxRzmKumggySpSWMWp9sSUvtaTUnVLLdc6N3B",
  "key37": "2xuDuGWqbw1EVvNmt7NZQCEmTt7qFTPq89tMGg6upVZj8MF5KE5GtqVh12PNvsR69FdqTd9VuSH2vDHiZGqnxqP3",
  "key38": "5SZSBypHubWPoH6sUCfZL4KbrojA3XS9MayNCL2hibMbW1gf8RKVoVFs4TFMJmHQqwWNtMPk4XzghkN3niLTGo7Z",
  "key39": "2ugutUny83eCB4kDGweUeq3VJ3VEyxkneuEsYqYYnWKHiK4bShvJe1nw3xFFcpyaRvBBzeLqXdMQfoCp3QMCsnEW",
  "key40": "4zaUp6g9dL8jRcfKTppLtEax4py6h9wnF5zaTNuhXxo367g61YgjMFmbFzTyByjsKLqHf7ATbGobreKDYsLRBKua",
  "key41": "5teedcsTkHfCynPJYVLJ135NWoRBUTe8oAjjwJMuAmzR7V5ekMKwfeRroWfjRJcnF3tghWysCddakYcHgn2oPJM1"
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
