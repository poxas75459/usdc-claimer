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
    "DJLrPU3Vphempg8ib46iNp2wmPegP1qLdp2MoF1dxNtuwgrKMGxyoKtCfLk2wE4XJScKfQRzWVKPfgDMNhM6SBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pSguzhT53aUTWqKvzL2PYZwHcXWUwmR27sdEZnP7pqQ4KtMKPcFqussKoZyA9iVXAsNrqjFryZAn45cmx2577f6",
  "key1": "3528ckUX2kLq3JmMv2hiuMPNdZLgT2huU2xJaKpueT4k4PVh4r2jiMfjGizPKJsKdDwavceyEuKDvfU4AHM8nH61",
  "key2": "3dXg2D9zVrxzXd8NeExYmqUtLuF2nZfbZ8tivu7EGerQ9UBjaF3bHT7SGUmwrTJnks2pTfmjphc3xGY517QyRJqY",
  "key3": "4JsmCuYAZBs1kzFDkuBjSLLesbHaP2DaQABvHKntAr6M8UhH7kkGHS6fKLX3xuemDcr7eykTPZkxfjZMqz7DnYEh",
  "key4": "vkm2GE4h5Kt1g2wFm2wGwougrPpiXyFqJ6wBovUbh6foT4y3wcdwA8gpqvAgAiTrBz5KBcmvAXQxt29i313VVe3",
  "key5": "CMm5cfq7p6QRWWgaTwjooDQ6cw4EBEUSgk1etQSB198V33qpFGT5auRhFZGg4c1ieFWZKd8tfxqejxjS7qQLMfD",
  "key6": "5SMKMt5TUpBX1n6ewSxKfFuQhcKFKfHNxKqNTFtcVUjBuVMhtDDNgT9tNkFD3P5JmKp2u2LmzjbHatRj3mRLhzoo",
  "key7": "5EnfWa5kzGHsUfPQ3vjCtXDgqkrFoHFgEkpWrQjZPsfMJaqp85zuU44NdoAGbMMzwUbxSBviYPd8iSif8KCuKu64",
  "key8": "4cSgYRd9HhT5VHNJA1k9aWM94sZ99NkHj2DQFRxmXybgVfJ4KvaL6xfKpEYKxAwWn3hkrTPXv3nahP8X8qck35iX",
  "key9": "2M7JWSgz7ULVmdvMrHC43BcRULyaybgjZxP95M3i8WiWBaFcSRiPr5MZjSsyWRubiYvDJNeG1ZKem5PqwKp1uQ24",
  "key10": "pNsaEBqqv5hrtjYM7Y11R8RsX71RXiW7eVZvnUPyCxbfXfAZYLqm9EgmmADw569HTJF8ZGqt3WgcVPG8MVo4QDL",
  "key11": "3dPkvVxwh9nuZVpBm9d4j7Fk3KeLkcgMUfKEcuTuecXc9ADES8mm3Zct5TfAL5d1PeJEE3hzaWHh5KoBAgB8Y3RR",
  "key12": "3Xzvot1nr5zKtiMGwvyRXdgVvtnpZnaJ7JD8f1XEgYjwzH76rQ87jD9vBD3JUJTmYW2XGq76QXeuf1azvkWHwp9h",
  "key13": "3F8cd9k56KzD7quNXWSwSQPXmcmFGqe9BSpP61uwcgWHueWtqLsv1f8tg3WgRwNfjDkip7E7axBjSqsNbgNtrzTE",
  "key14": "4vzftZMyMZBpAdXmvTvjxY42YVRmdfHzGTLaMscJea6fzXCi5S5VC3RPy4DG2wtMSkT72gDEKNGYQ7qgmCK4GxM2",
  "key15": "fN4trXqSgS5BfaUhZAePAbypSbs3fMjcALQEFpeQbm3ne8Bx4UDycUccaJmWdf6FsRetBj1x5cKKf88Eh7Yom9m",
  "key16": "3B9FmjrvYeobtNrYQxRBmqBDFPanLjgAewTx4dud4fVkaUpuTUQQkb5QSnPfHSfjAvjp369jpequ3yZjERWmWZ12",
  "key17": "4GqG357AusSiwKeFTCAjZUu5x8Uh2qDigXuhGGqZzSC7WUzqpb23wiuSJBBuRPyC7TjXhFhE58tTQ2GKwJek5grc",
  "key18": "4tCfWRHStq9FVERuh3B3yGkknXtirX5ev8jabzE2Mr8dirnqGHSW61nXVA7AkYp29Vo9rwJY4yNFkLqSarXehMi8",
  "key19": "3i9CvrLMch4kon5WoezAPNA4iB38TfHZjvbp88BsGg1Jb4f9VEseERDLVHJtRSnn5UcyrZZdATdy2YM7ZScBZwbq",
  "key20": "4VNckhDHRRW3jCrEioZiczQMoW9T8eZ5ETDtMyRdYpFrKbHKLCJ1CpSrQMT84PeXPtB1LDhVe2uNBjjZk3662iEN",
  "key21": "2pPRajY8C6gAgzQLH5Dd5tkw5jDHUG8sKrT5yi7UTLDpY9ooYzcGSEztGh3QUa8VdEKBJqsPzbKQ9o1tW759sdf8",
  "key22": "2t4FREQ77Df9jtjjrN5vbB6mbQh4Dg6fUEHfWLxMsVr9untXSZR75Am93yXQPjteXxNrKESpdGuRMSx5ZyAmF5F7",
  "key23": "59dxpbQAEJKhk3r6jjRsBedDo9pvi9XEahg4fNsScawxiCFYsKciMZJTK9Y6MeEckAitjkXWezdrgZ5iu91eExWQ",
  "key24": "2UyBETzuVXhUJ45yghvDA3zhcsQ2xKNj9Nf7utPFs8YR8Zu7xe3zEqjvQioRTv2cGMBH55Taut39kcRBJM8zup3R",
  "key25": "5mBnnbfXvQLQ13ikehhim2rDj6nwK5yF3XGpA1w7KdYiPmSDSt441uF1CKLBCq5FX9HGp28Pao2ErRSDzHNEtpgJ",
  "key26": "fZ2rzmm6n7tn6wnt9AiC5tnpY2AZAxWeDZEovfS6PTAwH3q8DAtkhDVzy6nB2XBNFrFzbLMPCWmLLL2ANyQqYzv",
  "key27": "48qFYBS9FmFL7fD7EyoEkn2WHGubfPBHnRvtWTekDzgHADozGTL7na3cUpmh6bqmyoiJQ9QKsU87ESY9U87Do2Be",
  "key28": "WuBVU1jG77Zn1yz7Z8nhwqwSikKxXK6VZZNJy2D6Q3ksJih938i5qYSZB5A37638usYiYCDY2fihj91ncwH7pL5",
  "key29": "2QVNgMLGhybuyABkF9ZSjFN5Cm5DtphRma5A6jT25qH5auJgN8GNPzy29xjxPLKdcXLFWTkeTzPkBqz9iZDXxtkt",
  "key30": "mUuQCfoRddhGZZMC5FXsEP8x7WcMdn8Usgy7iAoyi2btw9bsomqCmqmmeE57ysEetWe6auyLmAxHvcF3AUrxKZa",
  "key31": "4a9TN1aaV8xkTQwdrgHmsho2kANmpC8CFaNBGNFgbDJ28WNAx6VvzUxuKyB1LX8ynzwfYi9YLquMuByfWk17T41U",
  "key32": "4F5xdZ8wjPUgLHVCMf1XW72xg7gR9p3Bc2QkdbKSQW3TAAuHwtEtJRb2h36Tm1brTy8ZaMo4miNPFtWXnQ3FBpzA",
  "key33": "VjMCiRK3kSeqg6DKMgr1cjRsMWYxqhpLZCWwbmYtC8Bad17ZcUxGSFUH12juyWBKsW4xYezFnphDw7hKNpuX2q8",
  "key34": "5s1RrqTKamCZEAhotfmGF69b3Kmc7NjWGctQAoMyNmCLpfDrNztJYhFvchzwGBDyLQoQvKiHpofjEk7rtnhgFFae",
  "key35": "5SdJerY6hw7CSaHsb9RniCXuLDxZzAVvp4J2uZpcdmXdyo3tREdQy8MxPG1oCTMtL32LqNKkeDDVaUNFMV1Dx2vH",
  "key36": "tt1bL6vrTL2SLPe5PPvfyZH8C7fjoAyLUWgZGJL4rgQwk7SveRP1RUykRer2NdFss8jchM4iktbW7aZ7eZ4QQ28",
  "key37": "5nEz6MeCgnK6x8YZAMzXReHKgAPSqeT8Ey97CPvBUQ4fN5cAvnJzKdFZ7ZWigYiute47muuXUkyhkbWrjyLKQXmC",
  "key38": "5fGbHirG6k3M45cnEHcyc98i2JES26vy2b98GKFT2f3ESkMT5rZJVxJ6Qn17ee5BJyVQVR51mkVfZ7BQYeUakeN",
  "key39": "2MBLtM6W2gU76VpDW1qhEBGbVAQnAedJDFHf2EVucD1CMUWe67coBEc3yNR2MuuVRmFuDkm638VJT1P69QfpnJJD",
  "key40": "4UzYkx1EfZD3XD2SZKf9Rj7RiMBvmqF1JaiupHpdd793CEmx8UCb7yni24v8hNw83bKkwnRRZ58oKHoFWmjonQp2",
  "key41": "5L9sWuYCDRudaeuPsKHRX27r52Y98gDoVuZ7tbWcva3afQVsPD9AfFVVosnNS36rRDVnbQndmcpLg3Vz27LKHZP7",
  "key42": "5BfTrBxbgFvp3Y3JyXJYoEMmMJUWBfxQDV4BPZygmkb8G6trZ2b79mjWMCqHQwTzrE9xEqjgPgUTGxGTLzS4cjVn"
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
