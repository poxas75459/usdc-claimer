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
    "395Bee23ZHugyrx56rABtJYJqideNmax2mEotApG5fniQNsVgaHnmYMFtD2sStUD1M3s7JxJ5SoKjvrFDvGonETk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zz2C5CppSWc75RLbdhfT6V5pB3SHp7KAukda5Dh3F5UcUFGEsyGTx8VUXMT3Wv8QiKD5bEhSdQu2rrDVTh2jMsN",
  "key1": "3gxTfKUuS8UY9Bavt3neZ3CCXc6ZS4RHiwnT8kdPFPEohjEAewcjTANsm8JszYWTdk2QPxCfEJ7HbD9r7E7Qwt9a",
  "key2": "PKGejxo7ULsVSLZmQHKEurc3qLEzo3C6KBTJcUjinjuJVLdLqawtjEdm5d9PR5AixrQjHQxXskeKEU7aTCWPwMp",
  "key3": "5SJNufaRANzRpWs8YPpEpHQn1f1jems5Pgz8ETwdUHKMvX3QLVCeJcDXAGUjANaDWrHJVZhFytsdrQ1NxRAzYwzx",
  "key4": "42Z3sruy5iKn7tTCkXxUuQWoQSf7GFtF6kmKoEAFLP1uQrFiwveA7c9BCP4QbKGCB3TD1hx9ZjB5NcaaAhZoM6hX",
  "key5": "368PL5i3CMMzTiFo4m3pQujyhMHCctxjZb5J59hDh44RMUEj2zQYkrFTQLpPvXE5CvERQ9axvJ25zdgTMY4zrdNH",
  "key6": "5nK18HtSpNXaBtQ7AvmCPcVfwjwGhWR2w6Ut3X5tmVunqDs7VdrLqqDhHLpp42s5ojwxRKSKUmLXhdZBmYZMqveA",
  "key7": "4e2YmjhfDi8LMVGfjVY3dGMwE1zF3ewLh2L4BPJLyn5NxAP6kkjtMC76LjnLr314vAMNxfymaiDVPZi1LuxNmarj",
  "key8": "2Aj6do1CRCZGc6KwY5Ed84R8r6dSSsnwwri4dKuSF1PCcAU3d3rsc6iM21UKWhseRFJbrSPBZJ4X8DMijmhDzHCe",
  "key9": "4gNdMcaQ1P9PfX9xhig9W3niZCR36ytkSYPRRa8qurBbvpMwRjtWkQmiiR4f7qKs3AUnC42ATV2WXCBiLZMtnC9",
  "key10": "UTnbMMk7s3LbUNBGJNBrdYsBHf8QiMss1eABHhuCUnpmwJGtsCVHgiq9stm3rGqpnqo6WLoBjMewBiEUogKBR4E",
  "key11": "58Q4WjzcF8TGkEQGy3uuhZa12VHg7N9iStf5RXvDoaaWt8drGLrQeUgXtWGqHVfMQLZBkgCpj5G73JyDmEejMTaC",
  "key12": "3YDqdpZjPVRE17NgttArw7AaurjFiNXHhm2QsqRknPdGJU2kyatEYYWu2Kx4pX9KVjjpxMrH8qC2BV1P5kAB13wv",
  "key13": "5vdbBMrWxvUyNQsSXc32Z2BzkqimpmM4zLPiAxfVrSweXJqBzF88VAUC45nvEXQuMeZsHuh4UeQf7yR2mofRG7NZ",
  "key14": "4GZfd4mwnhbuvhKeCR9bsqFF3UTFkrbrc64FoQPvPvYi3Wr4X2ByXRT6EFL1krKFzgAuKfaWdQ7qR34qQrdvJH6B",
  "key15": "2re2smhZn2AMcJhdD2DahDL3gj7Hi55Pm7ypcNqArHVyK8qBMuRiw4PvxgrFBm5tNFkhbXGoRqXqr8MSEv8nAcKz",
  "key16": "5VzNsuLZqGDC69T7zJ3qei6xmzg4VkhExxpy4PzKTkujWViivkZxt9FDnYRKmWdGkHos1UohC3ZJqPVAAUqt7hLR",
  "key17": "4oZssTyNq3qTt221o7G4TXLLSBT13qyV4DGsUPqpUDn1Vj9whkPmbjnfVF7m4Wqv4yNoQ7D7H3RogmMqTrW7Djui",
  "key18": "2SeqcNWPsqtLiCHx4pArDad1b4bXmD86xwdS7SRu8kq5NkcESuUrt3qqp8mLcZFh6YN6KyJU9J1kn3qKmB9DsQwB",
  "key19": "4yXcHBABsWSerBmieiTvfsJuCdUNRQ8GefgjK4JEDmCJeae7VPMRd37zGEEt8UM5z87Wd4UmJWNS3REPC4avxVQ8",
  "key20": "3DELnPYWBnjpyfrr5EqusWoM7YMuBV4R771QwFs6fXBsm9kNjBid71K8NJsx2D9VjxRJA34cXWZEBex6NhjjJmNL",
  "key21": "2xEJnDh7ZjhfMxCFe6dMLGSW1H1X3KUj78qNsLZJLSZvEqaDWQKFh3rzB2dWTWdWnsLWZ7eHQyFp3EcGV8EQpMef",
  "key22": "3TfBvFfCRr9VsF8jD5BXVvfeaYwuv5Wu8voYapitNx6zD6Q2918GjAmq878StqXLHi6Vf52hMMhTFkf9kMzv6Ya2",
  "key23": "QuBCKy3LGuykPUkckUpdXU4Jg91vyZr6EckvPVEwQb9jTuA5CxA81cr2WcggUJdwANwzsG3FpW4bMnfY7TypjFy",
  "key24": "2rp3PpFVkCuh8pruL3AHt3zcBohmhqnumr2enWsRRRPwMdJFh73KAxvSYgJY81ofg1JPmTA6DivCbcoMvmjVe8xm",
  "key25": "5Fj3DDu48mbUnYwnrSufFR5dwjRqYbtR5uUh5icfshFjGPAmZcziNT23YHcGwSefS8MZxjhvXR2AJVh3z96BTXdn",
  "key26": "b9LKarksWC64TeEVBrp2SEMjTBuWZyaoxF48qsvMmEvEcQvvfpkvXpXbeKoLXvGLnk4m6ouibWUsykjNmrLVa8L",
  "key27": "2SDNubdvUyS2uHh547hAAuQTigcACPax9P3SeQLMcc3LLYvXUmebxLwYSPmkGxVHZv2zv4NmmB3Gx8TgDTEHjBWq",
  "key28": "4GaboUVATnRYRdq2c8fT3RvqcwEuo3zcHf14d8euQtyym4yccZQM3qgW417HzSdcW7pJ547RX9RqLGtTTetZV9su",
  "key29": "ry9Wfc1TTJaSCgJ9N4Qwwr3wp1uPVCTmDjRWebiK9LW1dooEodZA8LToTgu5CsDfgpJMJSUELxNvowpJQUGBoYC",
  "key30": "4zBCDZopoEYKwzeUkHvU9G1kHnvYeGEjJoTX6tmiPLCMDiGUDnqgaVZ41zUPKQ4arZtveMtBENS9hMeMP3hXtn1Q",
  "key31": "4jS2TSJ931CLquPaxY3D113YCky8u37RQpMxBEPnetmPfW5AHhzYGpuh8faWU7zineMj19EayxCvF89paHmzUbFM",
  "key32": "2JczbsYEh19rJvLapX6E5sJL7pUcLvcKe4Ywj6yCvZyEZFXLPQe22GTXs2JkNNqcLZ37Xtatpg2C75b6nfPY95Ly",
  "key33": "yXerzVuJSMorgcxbd9JuXbVHRveuoy16ho5HMVM76hWZUkYUiZn3GQ8SNuXhcx8LgchM7xv2EvMTDaYAFHaEcrU",
  "key34": "5CogbjVav95ZduvgZfBHFCmDYvEFMwFXax7qQSBAc6fBZSC54kxdv4h4Hz22Xb1WBqeJQsW3ETMo4AfVNYbcJ4RV",
  "key35": "2UT6kUcg3JYGVFc4GwHiKmnWau76vbBxZz2eGPYYotqSQxhRJNXNayV6Dn6R4cQxr7v4eXhdMx2VPWtRc8QUen5E",
  "key36": "267mfYyyHPwf6TyxU1z94RcAPJzmR299YDc5L4wB5ieCBUpqv98MkcqmsVUQ5xa3XjUf1uwRQZDaAa3cV39Ap6Pq",
  "key37": "49QfYbqkFwCgpouYgrnghQDasZF2gUk8AXKnk3AsvMKwyA8tTX7ocGwsxzv3GewxG88Zc7AVKTSvLQBtr8jZRdJH",
  "key38": "3fijJtUPCKgKmr6DfvE1kPHWu4UsW1gWS8p9VfrnmREYETScb8Q5xBmA9ggNugSRKafSBqji9UYJy6dK7UJJYoEK"
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
