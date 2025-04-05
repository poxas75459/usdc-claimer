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
    "VCGgRuoiiRK7Y3HR5i8CxM5hJL2VWhbKaLtoTYFR7uhc1rtDa1ifE8WB5Z4ejnCT7MQsjurzxpbsQsyLaMosW4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WBozhExnufxuk6zPdHmqXb1JMpbwLtaYWjPQJSrGrvt92KVRM847z4Tbb4UDbLJvLJrebZPtWK2Ui75beFPcP99",
  "key1": "5p7fskPDjEN8fNfYYFahx7nmL4ahRGyPPNDXxRn7joVZwEb63rotVznmG1qHC1E3Vsq3xxHCggK1r4BepobAmXGg",
  "key2": "KmnxzT91NGswnAZtdz5iRYZ5KbweTsRdK3yetQSXax2erwJ6McrLX9pJACdYJmvu2ptdPX7otyykeqg8ijfp4Qs",
  "key3": "rZ4eTtDgnPBPMWDviVktXWssUzdpczgiJuSfTnfNWNRVdbC5LiwEqNFP7LwuLmZGirM263rq54MrTK7wYv9cQyW",
  "key4": "2mfWaHH4Jv9HD2hZ9nBCEXW3GmaiWzMNVVuqUhzEwL6cKh9xey7irfKGNHzWdrnBcvGxTFms96L1UKBnCehUru1R",
  "key5": "5NRzGu4PHB7hBteXm6cifD1sa9Ncp7v1Jt8mpqjamNiULeoRSNmq7iRtkqw5EEwVh2CAuZ7QYp3LhXwg5HZJby3P",
  "key6": "3uwDdp2twxfPX9UeSvwZk4sehKGxAk4HLGfHGK5tTj6ziedu92MubFTZiNnvpqSoXEY3HJjeo1VGQriqc1RwRJ9Z",
  "key7": "5bYbxpCCNAjekGLh2LNNwcYWx7pcxJ4pNY6HFbJDCHTDczamvWEAnrwfgFyt4BY3Xc7g4w5LbLmZRfGbhk8sbbY6",
  "key8": "2DUaH1ggwRejjWwZXAepQjMGGmYdq2HogyB4fok547VKAY4JrFKFfq5E4wjUrrTtUN1SvLzxTpZcGRtnFGhuSsYu",
  "key9": "58JBRQ9vtiUSGem5hWQiaCow9owwwdHdowojzJBqq8Hi3ehf86VzxQ2J8Udu6mCBqZRZobDRAAQhv8z9h6YBtSvE",
  "key10": "5Yki7AAXGtS1dGrKYcbYHEJRjoCsVgYLhAPsXiwa8aABNMihjFdnPfsSDXkzwo2Juc9NtiGZiQ1yL9gkacYpoV4v",
  "key11": "4iNW6PiaE31F6zgt7oXYTXuuV9jj5w7FThqMDbqdHBBJYm3cEUKkNCFz99hX6R5nadFL4iHSTT85hhw86Vf6kqBQ",
  "key12": "n7hzM81Y2Br9cC4pML8d9RbccQ4zjHeSNrMbeZBJL28DWPwPQyYZGNtT9VUVAhaRV4CV5JUTTGR1kpPTsFkFVUs",
  "key13": "5wpsCdZiFKt61t34dk1kMd6SD43uFffc1RrnMrMgnkpJABbsZ9KJ2kDD4d3dJFiXqyNSpAcb716etcLSA38Kw6WQ",
  "key14": "3QaymwQwryNbGERmeSA439xgAiw8JhqCrozceppP1mDS5gRSEfMtt9mPerck7qD6xV7ZTfVCyAyE4ruJ7UYcbfyi",
  "key15": "2WudCBjCKBXfrFfRY7J7euCTs1ar2yrAhKrbE4DQRbWCg3JYLHH59AgmhX3y4wmCQ1pJkidXkdNcVrk3Gvq7TPSh",
  "key16": "337D2wQoFnHfd4eBzW2V5xCHrnPzBJCSXconjkncAobf4urwKsLA8bbBXdPndxyvon3PbdfpoRtcYhmovNvSupbK",
  "key17": "3dcBRuJtnoL2b2WFUtDLWPPTtefHUzqzV3MqCFVf5Hw159rYLhgYMxAUhGF5ypNfpzg1oaoBr6qb7bqoxZ5YQ9F2",
  "key18": "3rnLGpbESEw4VjGKyGCQsQSeaeFfdPDkseFtLmPAyiN9hVPgCUcDM7RfgEta2YK3kzgLSGzDt9Lthx62mbMxVjeM",
  "key19": "26kmBACqog8wUHGEbxiCnNNy6yKRAwYHtjsFVPwRN3trVEWtwjmmEFcxpikHrhYmZvRMh4ouryU57gk27ymzUo4T",
  "key20": "678QMHsyaVSBGCVrvdLYkbs75gi78sLFPbVxbVCEJrFLJ8zgWSLa7mqCKTSvoLQ2vWJ62DHkTQsUTUuVYxJ5fsyr",
  "key21": "4a1wXsrUCiZWw3vDTrAqocn9NSCAuTtBFtnFhrMvahZCgtEAVv1wZ6UrtZNfsw8wB3kFxi9of7vFdfAu3mgFK3ya",
  "key22": "as9g69JpyHATCRiCWDamg5WpV5mzSGvWkmLS35sH1wcP5ARvZVejAX63nkDfpaKq9yQaj55uL9GoBc9vaKt2mrP",
  "key23": "4oA1iKpyLW3GGwZHPpNcTyBqP5qFmx2CdyPngqVXkFiJXSwSGAaKCqHzDiRLktGPTsFuMeaxsU4heJRk6yRav5d5",
  "key24": "5dXyoeTU4CT4RvxLYs8vJNByn4zWFGugsCVaKnUJCgSbkNaAhr55kSL2HNrzJAqTv1ghsQ8Ugq5dV9qXPye5VeKT",
  "key25": "4tZqvX6qu8Xzag6XVJUQNrgfBqAGsKazBRQzgiHbN9yxtHDneEe67AFXaMqLRRGwkAJtfLdhXPgNQWqdTM8GmVLj",
  "key26": "4m6mE4GD6FDHGRq4aDwmJwd7woqPSTokEzpH2jDyE8tN1U6ujnEgZcCign3gLjS2Ny4AvkynLPkpttGwpDRHSXfQ",
  "key27": "4nJfYH7rF2P6pM8NXySPKPk7Dt6LRpeC3WsfyU9fabQe7KfdzmA92vn4HBKegTdwkHLsJPvkjLELZ6NgMhKat5Lw",
  "key28": "3eZNQGu5USPpSQm1NA4itjdTec92tJaSTYNvjYaDnuPbS7tDdMy9f2noSMemnnBxy3ZxSRbpEEdZPTvmtaP3oikX",
  "key29": "3opBZmo1GKvatpD7FBsdAGVfNUEp7Z6SNMuYo7QYiN5bv75dtE4JVJmCVZCcpVgKKRweyzZDak6P2hN49aM6ubBZ",
  "key30": "4Nw7kXRexc11gvRTzWqRJzxqXHQTBX6pbVpJYBVkyXvFjGw68YDfrfEL4FbrQwQikCuiQfLz2G7pUFNr7FZDEXvL",
  "key31": "KJTBnDN1GRCsiaDZb3dVytScvBSQu1WMvd5pBnGm8Cw5Vc2BcqEdgQRmHxtwfrDrdHF5Jx6PCeWD5hodHw8vM9Y",
  "key32": "5JQBvMHW2aDxwwnTY4pvJZTEd9dTP22UiTcuvCjdZymdJp4d4eDZR6RW7yFuV4utBceocbXJmpNK1nLimezeCZgh",
  "key33": "4b2QJt4H9SA7rzB2Jy98NbqCLgQNx1o72B6bSpwcxELf7HkQkhsVdrUqFTi4M4DRkVJN8maxib9pJi9q1WL3q52n",
  "key34": "2jmnTF7UqpAmaSZFLbZj8LmQs8VXujSom2Ex86LKNWDWw5KmRJYssX3BusgJSneo4nWCyXUi9HtoY1KGerhfv9C",
  "key35": "11DeNqjn84Bm4ofNMvFPesJbbggb68nAZCdKt7SkiEukxu9iZ5AX8DjcZEJ6UUtPVhKT94hfftfQKf8htT2b7io",
  "key36": "vuhpAfdD98fMSYewDqFRoVgXZkfzDgY1jJwUiQQidrEvZqRUytRZSVJZV72QigqPXdTSHcgXs5rQXWfG5m7gNxR",
  "key37": "5D44HrtF3AJymV8CsJrC4fBWAEcjNPZnXWdBBY5Phcb5znGDCbbxBmWuxwVbuJYb7HgsB5bvCBiQxBtWhFUJJXLR",
  "key38": "48TP3MW2PcDUGV6h8s5LXWcFrGb9cUwsqsRwCngscsokDvgLXnfMUw18QuJhW5mmRKwGC7krfvw32E8tk67RG17n",
  "key39": "1Y1itWdAXxZ8jkXyzvJ18wu5rPNm4JJ3aRZBuibMzXMHNrtx5SEi8nqweUxJp4FQAJkijMovNG41T9YGVNQZUG9",
  "key40": "AqHcnybZixJt82M3CgCCs1BBfNDo596id9Q1XYzCfjVSnHNpnebAZ6XEecsxQ6RV3rzcw5aoNhUpVspXZtpWFjN",
  "key41": "jkeVFfsCUno1kD9RB78U2iofoDX6dzHYWvCr3zxAf65Ga8oPGvSnEriF4UPyKbcPM1GufgHUDTYpGwPjYwVetha",
  "key42": "5pXzLdjTxuKBof1dxiQYTgutcTJ5Gnrwp4XZYGVW2qn3s3KFaqPMpu9ddya4rjbgrWC9PnBBguwtYoeEmbY54rNj",
  "key43": "36htBE1gsdXbHv42o6KpewuAsszyePPL3ArTo6eem8kNaXLPE6zLj9rn6Lp6bCdgd4Yaoxf1wy8SsDszydt5sUUZ",
  "key44": "4aiWgec3cbYwWEtwozXmffSZeKTaGHNpMZ8n5CjEGXjWQg6LbNPC9LzFoejgdQPxgTLgM1SMbbPJgHDVFEhzwS8n",
  "key45": "5XTSMMiyXgrP41NvXLrL3HAudU1pesfowP68PeM9xkYx72BgRjFgMmsvz7UhgDhakP99eSQrkVor9ksuGh3gJNns"
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
