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
    "28aijboAS1CPXEEBrn1GtdDoUbZ8yFrTFnda8ZKQLPPhreg4PrnPAraaTbwpK3K2m1hAcXqJ1ENfdfkaToRjNeJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WXxxU23johYRTBdr4L1RtPPkyNWE3UqERFHTbExjD7eptHiuVqMaKpskh8HbQJN1JktD6L3ydZ47Qfw1W4VtPu1",
  "key1": "2PioGN7JCp2ZGP6dJy1thm6tyiocBUnrat5yWydX2aYq8skRaz7SPU615NtBi3h6JRHwxBhRmn41JnxgsyjgRDyX",
  "key2": "4cLvoUErYrugMqNPHEzqkTriFwLBqWBPwCVxWhRoyszfUQ55cqPU4VUa22uKETh8SYrejU48Vuy49TdabnpjHPzF",
  "key3": "hhWaPqGkdX6hNM6eYTohde2gQqFdm55sBbNQtrGRF4CxRR4yCR8kK7PHMq56NcJEEn6K77nRdEXbUA9QuVj3Bqk",
  "key4": "4rcKY7DMVd2sXrVmpHz6e8xDZJg2XLMujyvxCfaCmmQJUU2jwJV2rbNEDmp1mMkQBo4YVVy12qWkrSxVEjS1Q9Mo",
  "key5": "4n234sM5Yd1Vfm9p75SQEbKCce3TLq8FVWTFqJ7kkM4shWPx6fAXSHTnTHEUU2D77P5Yv3pCeDZ3DjTEWYk4x4sm",
  "key6": "4ojM31hHhLeSwx7zXiLWkJjEHZYYbbyaWRDz3JWYqCvKou1RZA7UkjsascwBsaMYr6xUQsHTjaFpqBiR27iupYB2",
  "key7": "tjZ3xTBzQdR2DENJzgBpE5r47TMJQ4339KjXhrPQzvtf2kFoCUgU5mjGD5egh7rXur9FQdSPESKFofGdDvAo7aU",
  "key8": "XfW4im1uodkawyYz8oDBMLuegcERp5EkJ4EUe3xMJzu4h8A8zMcVtT8UtkG9BFW2WhoacmWTDXppvsGkUqVTBpr",
  "key9": "38qiYqRSkydhwjmLpzu54R7UFs4C8iHYpR345trKdWQHQ2yTuvzthL3o4wNdADZXYxSmhJFN9LaJUkQyZBbB3Cij",
  "key10": "5MrS8bG3RNkYPboYm7RzwGjjXCh9wNBQHwd9dVUeuRFXdwdFKUYP7UnhDnnQwM8kRTHgBRrhXRXwHEnefL9vZKEb",
  "key11": "4RWK5e7yXk1XBeYayKrRTzcscyFCuGjoqznmHm2aLa5BkWh9EGZLZoEsnfeckciQJA3gk8HuSHczY5hbiJfTmaKC",
  "key12": "2sWxxEnJ5FyaEwPBJ4onQEnGW3UeBrH7dxTMUUm1CJMKMkpgzfnEUCu6SkWiHZtukqwjjGuYeBHv3rhXvGkcDqca",
  "key13": "4NRQw3yi2cgCXYZc6Sx3uazSk3nCjrqVZn2u84YgjX6endrp4SQrBc1Wq9bwCz39CPzzxSsMR6GWUiEXMuzrUURi",
  "key14": "4tuRYQEat1giEU4pgr5VyFkSuJj5GfFT1UCvdM4nm9o88vgpXM34eFttw8MDxk2uNEX8ZECP8GsFxMEUK4SypRBk",
  "key15": "5NpjmNMY3kMhKhzwKTsVm7jZyj2B7NFhMzDeqVv7vJ4CvtKzrr6o9UUgYm3apg9mLXoh7jASBvcC3oUUizQmakCh",
  "key16": "2APjqaaaUfs57gHp7ZCrkVDgrkRLTCestRBzi84yLAZGFgL4FuobK5jvDjor3G9UkQBm9rJ7b1GcaD9yU4EZ41U2",
  "key17": "4kTLn2afgAnFjqgdtNW4o5kgQZ5hM8w9mivDPFajRKeirBTnKJdbigZ8bxfhke136ieA8wmNyMDjPr4seDqQYbEC",
  "key18": "4ZvE5Khx2BrUXTd9rqKMpkT61ffkte25jAXKCUHJVpXibfahRxiZBAYQ1YZwbSzxZg1CRGKPiquMxtcuK1hFwGg2",
  "key19": "3a4BmxCpfPwZqTdYa7zsz2J3s8PB5ksu7vSZV7qhQmcchpEgVwyTbBD8y6V3LsxUMEaZCUf4EaRKMeyxsr571GeD",
  "key20": "5kGcWfxxrZUTsQYuDeofCCqjepdwomGMwYkJGXtfm3GNmDs7E9it3hyQR7XVTdUxb1KhP89dTL7XNQuw3df9agww",
  "key21": "3LG9JkGsZCFzuEScSLod1oZvgAwh3DyyKHjLD6LiZh14ose9VVfJQADZ4Z4XBZqEvzGdYNk6yqNE2MuycjMn4wxp",
  "key22": "2eBrjEbJ8VJjaYfoy8nozh5NEs7ehFoDnKDmmMPnbMUGDKMfskMphNGi3EkUicsdusbULc1PHiPiysNaHveXJxzj",
  "key23": "3R51KTgiFgXXBsxUUQVsX21Q8XWGvHanSUt9wHaqEPAHZrMDuTgJLQ4oN8fsro1sUHm3BzdjroNSEejMnMRxtZF4",
  "key24": "sfsq9gVtcgHzcvaAHnuRBexNxXUiK1oPBPoheVthtZXUWZTYkJw3ppJcDZLEc3peQf7hGo8uHCECb5kJmx4wazf",
  "key25": "2mg4aRUeiT95BojDBxBpndz2RrUKcruvQW6FgEponHUEQE1tC9vJB3ET7d7gy9VitxspdvRBc3yvMF9H7fqDqCE4",
  "key26": "2WFDMKRjG4TkfJk7vGfPxJaqCUfGeTwf2wrdJ1rWWWrk5Z5LhLVzLRnhrL5xjz51j2KbwAaexAFiTCHBfuWCxVF9",
  "key27": "Vssh7SVUuXNRS5XZKzXvreSLbM6JNr3af84VZQbVu3tFqjXRRdXo13XsG4aj7pq8shpYxmAsASG3CrnYo9v7NWF",
  "key28": "5rCuLosTS2HCTQgxwZ2xotcM1ABasizGhbfTvfFVp52cW5MwDs6KLcw7YhTJG1Ef9isuzpNQGeuFPEApnYCb6pi7",
  "key29": "2wedZPdceW1qUvdX3vQtwfGCNKzHQUxgPNi17ujRqj9gxuCmyCq8nU79RP6z2hdBG24wMHazXM2M5Xso4FzDoGfg",
  "key30": "4nBJyp2VAgr2fCZ7vMLEYHqBtCjUr5iTyyvaai6v1FrvXaXre6GXi5BxaGYmjrsUo2e51XEEmyv7wsNbpNeskJto",
  "key31": "2p2Wn9MSVXZTtFyR6iBfU3u9rDWwRVi2otgKdQCbrG65cCCpitrUVpRszYjqvqvGmX6XP26p1GRhAJhKe1iiEC6U",
  "key32": "5Ayx7itFvukvrnVx4WxfzxR6ep8CRnp7NrFmitqA4bzJaoXZiiFwDvXZXepuQUxXMN69efdccwvbj6nyaz6nUwLL",
  "key33": "7zujDezysyavHPA5TzL2th9Ec1ffA11sf8NvtvSvPiqNFxivpwAFnwiM5iUYaCe8R6BuQroGf4Gf8jokyshCJEd",
  "key34": "52AHccatXmUxyh4KKFxZrw4aF3rLbj3qYPpkVUo2oTGHhCX4jrAvEGeo3pg2yX7cRtvNWCxjHjQazbTaYsnWrfA7",
  "key35": "iaUGYpT7Rft4dAh6rWFznumbixJjjjQMRycu759xgsBvHMKRuCk6q9S9jgTtGkqmV6XRaxsAw7xC1KFvmR81wcY",
  "key36": "2ZiBPjS5par8L7YQ2a2nmvzxYnkfovxAMwKHGss1HsyhkCkRhd2txwFUS2Jm5GrbpMAoLJsPqrbmt9HqTCUfrC2o",
  "key37": "5jGKNg1rxV51iH9kzQS1cyaCiMQ87oJ1acu6LBzP1kZMP2V86oc3JgynU6Nc2GspWocDxjdsfLPYw428R262RqHU",
  "key38": "3ng7MNS6J6kkuGAYutv1dqKv4EcUD2PfWFfjAmvh1TwRiLpoeiCDbf2KUsu6iravFmSnkmQmVpMYK4Yyp6Esw7BK",
  "key39": "5H1AjJdywXxgr3e8yEuair45YEKzptRGo9vow95prEU8JDmpD2UUzGtzgx6tjgwr5smygREaAuCTJ48PncuBBBN9",
  "key40": "3zWSHg23YdwraChHHyUHpY9pQnjvHR116VbfYXBYr9NAevgQ7BQgGbCdLF8u72ah8nvqX32qPAPdgbFMonUrYT14",
  "key41": "5J2oumwKf94WsfjoP1EP3ZXQrmApEmffZBuzE9ZNeQusdD23oHjgjcvR3jvNaoxDjGn6tUaKrb1xKcgyr1arGoN9",
  "key42": "3FszpzFx5JcgyKz2vQwtoufwr4kpfCfkeKPSEhTsdeGLEuxLCcg8SAt1BeQe4SJdQLkf271eXJyxkxMurDW5seRb",
  "key43": "3aHhnjJkc7MtUXMRB5VNNf3sWfFLdJbgimcXawNgwSWZwRVB1Z9Yafn9n3EJ2ztcGTt4NBhnJRt1GGJmKFaydZhw",
  "key44": "5WWGybfw4nHyGeJs2t9ZqHmqfydLmRph4bZWwjxzC2zmbQ1f5y51QLM38MqX77sjwn9uikss2pjXX5Fajj6x7rzj",
  "key45": "2wNVkwaKEKD2xfaXBSzSKwZt25CimCGTYzDj51EtBqo2vUVgVyCyd8QoE4jNPx2gZZ2aUXBUuQv9pk8GXQTE7TLM",
  "key46": "26uijrJ6dzNWF5exFXjc58fcKD9JD3dSLDPq5cs5zdbxr3uo6UW7rtmUFrb5GdzivVojMTozwkQ2Fe3dsadhyRFy",
  "key47": "3kSu93ec2vfB2QXfi3PZsYxWaVqE41BMMEPHnKVhW6kGBo54cqjwC62UNvHYumWeCUpKBftJKPMmckoqupxe75m5",
  "key48": "4cXktSFiTk8X6aVQqvq8XtfM1QNc48AxsoGkb1ag3qJ1umtpd54a71f7eJyCEJgKjNeuDWNZoUEXSZCYbrWwbLBy",
  "key49": "4xREYogyBscxNxcZf9g5qgfYc1uaCwH2yU21iSwGytZUcnxjAzKaFo2wbWjheMTnutB3TZjTSQuYcD97b1sMZ2qQ"
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
