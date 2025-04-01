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
    "5t4itgHvqYmveCwL75KfN19eD6UvKNDZsNjNJkPwyrAsUGz6sbTXrGZcGdPoP7ULhJ38iu6zNHWYFzGRKyE5NGJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b8y3BsB6v35k55JeEXbmbWMaXYG8kGwnmj5aHVSh3dvjNmu8cVrQVCwvCXfvaQYWQ3tQrqoRD8GzCfJwkcEib96",
  "key1": "3MzowoAaUzaLtbhYCVhWmNk9Q6NryavFRwRQNFbTuMWigaoc5sgDrXf2dfTNtVHdnpUnBeZMbcts31Yepa6rSefq",
  "key2": "3KED5bedtDQoNBGkfQ3gfbCCRdxRToDZ5pKLw2HgodyLsXHExKLBWZq6bPpSziokaxGVM3sjpcCyhJ4DNcvdoZnA",
  "key3": "SvZtxdr1x5reuTfn2Pb3q5QnsEjRzyUaqcTPqU25TKowd46bzLsVu1VhCQckRUCiGKhHFCD76iGhZbZnHu6U3jV",
  "key4": "2zTvisSF2HPVLPkfWyZ4Z454enWCzVmiXRohZwsRGzGcRirHso4YjwNaisvSJ9ddPyiCrERZ5Jvasedc9VPa3oN3",
  "key5": "5fF6RpRbaokpdqTP2QvwZfGRvMknMCzHMEHxqbB6uAoUZwojrupQ8Tgowx6oxNwz4Gd1JH3ttnn2osuZovhn2P9M",
  "key6": "3gxsf7TmyEtaf78CgxtVWGr1F1otwcwskHx5TE6z3D9LvvcZRxxhKf125Si3Mdv2gWsqWhQqqavQNBqvU21mNywu",
  "key7": "334zoJchtuDdeUHSCq6BaZG1XYL1KxdsuQDVE5fKCTpLbE7i4UzDb8nuxhGJ523vzPgZBMkcrs4gnMniRjT7cHoJ",
  "key8": "4xruxZRjhNPsQ1CNszGPrKGKqTfT7e99KnrHSo4SUktwpbrzdsPtGeMGzVrV2EnDjeYLRY7GFvdYsh5Fxf6Mn7qT",
  "key9": "sDsLpKRK5RCv388Ljy9ct3s4D7Mho6StYt1tH7t8YFxDHsLvDZdnWKfgAS7iy1yhpTnyGuJ3Ew639Kt8uay8VtV",
  "key10": "ifYGQ8ahr2D3NHmbcJwefAAqHfqUkMKGLSzfQQaGd6rJ7yzBcbdEMHsJSuhdWnamHWuibbDsdnYPs8ar5hQvyFR",
  "key11": "2FGJm7uSxH6nbMncCuL4WGTk7u8MZiqWaypQaG7BP7oeuHfz21Y8ZQeYMzYUJxpzFPWroF3i94JPQRXvrF9aKoVs",
  "key12": "4FAsP38FE6XjnmyB4KXV49gxQ6eJAfUtH4dZxXMZwdff2dRNL3qjER9WsKtbb7BDXyfTUnZxSfzfz8hzUdotfqMk",
  "key13": "5Ah9DM1ga8Cz6Jo8ZGuk5HwbWfXmQ1acGNnpWij2dMHy95DAEGkzm9gKy1yP39SdRraautDBcNQnPLozrsf7bk1P",
  "key14": "639sCVhYJ3GM9uNTohYUV2iYZcBpbvCKUTL77dP23SJjQNhVbnMD96CPshJ9etEpuEw24KnrkokvbJayM24BcBP",
  "key15": "2BugX8XYZkheZgmHfeaCoyHJwa3ZNxWSBX39vJxsvuoyDvVid51oi9uui4i33waZKNBKKUj98RzYfosSKZCtxEAZ",
  "key16": "4pNp2AsMpWEsyfBa4TGzt8yobx3DmxNjzU5pJeDf8MUR1F5iiNb9PFQZJMS3JvvnnGPH9ZvpV9JamYLkrWi6aSxP",
  "key17": "hQePm4GQemnAXGQkTjQFLJXC6mg7cirehGp8wHuD1NQst9oLGSSCULPyokPAD3KqD6BAKTN2jAjCkcgbmvJj3V4",
  "key18": "2WCp5Zf1bi2FujyCjNGsgf5F59p57LMaZegDLJPJBLmBjBNgX6ECWGwzk6G6yAq5mX7qf94TCyXcsNfbndshZfyj",
  "key19": "5QiSvgNFZALucYH2UqbohgX1qU2jjLLprZZ5WFjC36najmcLBhQ7Xe7UuQc1wnjhiMHiczSfNKb1puLQo6hunjTa",
  "key20": "3tXjwpyzRn84bXZKrWFwAk2sUvUBpGRh5PhM8c7uKsL8owQDxuw2ehhx1ERnbkRNhFKLg4r59U7LtKkKd9CM8jQ8",
  "key21": "yrGdXPNn1D1GKK6dN3btUE1fb9ck1ooWByW89NxenAHxdC83Gg8xJhesfi7aMKewo4tSbR2xYfZGwUNGmxtwESp",
  "key22": "T4nhWmCvJ91Sz4mmJsd9yYwByJ4wpkzQM1bnw3WE4q5MQf9wdF22YdzBe9LNLYnr7fx6n9zGkyut2aX42jhhAPu",
  "key23": "3A7j1aTNf9FRw7PhvgqLxn2FDxbvyHoeMV5BJGvhF42k4hHWVRjBNcWviZykmeM7F9dhA2jDK2mfg6He6Zg2NB3S",
  "key24": "3wjZ1ji8nVTrh91P9CsYj5hyDuj7pTyVb6egSNWRXypGNnBUpgx6sgyrZC3vy8SbnnpL3rN4SBeZYPKwszJuBgBT",
  "key25": "4Nv1xpUTeMSdq6yXHy2ocVjUQfJxa97Gr8LXA7SEui2wNGkHEsqcVBSL9Ti3cN6VqDt3ZBxEVawdstJM4DeimukW",
  "key26": "3YRQPh1EVHzjxAxjYje4QWbK68zWFcdmwbaa45QCWGfwXxEE9TRVD8D4ABmNmjvaUVPDYgHCP6roW7T9TdExSvcg",
  "key27": "2srZHavUQLSCJEnmDStFeW2PQDTe6uMQxxqncmCWdQP1c61CyGXFJ6YLuyRvijRWG2Rc1QZa1iQYosWRYNBEuPBs",
  "key28": "33V9QjafEzg4MANHr5SBqBXd7TBA9SzwQoXE2ruxZuZTLqgjZWw1JeR25pRz6UcGYYvpEAcbmzVHXpnCtyz7hjwS",
  "key29": "4jcsdwAr5W4oaykWVfQWxPrLPhsk9MjNyYQ28xzgQ5yLakuwguyQq9ttJj44E6BD37TPB6J2bc2SytzFddVqG4Cc",
  "key30": "3unfgNC1xfVsRXBycG22evDsqJeBgWshxKzccTjpPanx3HDJp9mbEUxqbEgj95N81zsmijs3WPXue5T6nh1P48EM",
  "key31": "51RLfCsWge4MEydLuzrwxsoVSrqNaQXLSHLDNvxy4vdi7ZwRoQx3DkQwZknVFnL5XV9niKJV3GEq3pwvC9iDbU2x",
  "key32": "3G1Hhzqzq6Ssdu4wPKaJ9Bm4uVxo6uQocKDcS6GxPaggDWqQnw3MbtfUMzDM2NoRAB5X1FKU8GaUG1VRAK24ZVB2",
  "key33": "32kVtxuXksL2GohzZzvsVdvaGHVniGBCwnB98hqPbUEHTMVnSfYQWhUhQ9adgzxGMZ6gYvzQ618TKsNpVKbggfYU",
  "key34": "43Zcjk3yQ6zjR239azYmoF7eG4aw22Qv7HoTpmf1e869QfPxhGCbAVzcXtnVgSYLoEUvS2HMgK3x9g7K9zNM3Bbi"
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
