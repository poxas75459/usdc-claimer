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
    "2WvyLWfbF1BZvC4Q12UCqzR5MAJm5tCDDkVCmEhvoJGgDiponk1uTbAogTjL1L9EuT5xLSo6CMAg9T5AjcpSEKz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vQw3CUHSt6L7vJvX9Tpka6DNfq8tt7M9oiQbczKxBZ59vWN5Zn6Z5zzH2Sm3WL1Dt13U9M244qGTu4mXbK9LNT7",
  "key1": "3dGiSKHhFLZH4PMNFCi6WgKZEWxAVxtfyqo7SvceUQKdc73B8oBE6QdWFKc8fVQnAdMRsWwj2JRmJyFVuNsXiVTY",
  "key2": "51CeLJ6grpCQPE6uTQs2AritVc7BBD4CFSJmyqbedhJJ6qfD3v3No5vcMkaBpbyy7qLcuFh9TgrZZbrUrUdeNBWA",
  "key3": "5HTT4a8cTcAJHQ1vPBC6n2MwzfKHXajaN6hzL19D2LnQdqhpBnac1VmxSpqRCwWj2pDGvzyivSnFwF97y2yuPT6M",
  "key4": "2CdpA99EfT5x2sgUi4GKnaAsLU4DuzeV9pmPGFNkYVChAGZHsDAiYAmk79UZwqZYN7xnyDR52Dd1aAUScaes87Xo",
  "key5": "hgquoXDDKp8Mqdzpc1sdJ9R6P4FbGn2sr41i1oG27qXgLWRr2PnMdy48HmCAn9a8uFiW7e2K62SsYuuxiZimxNs",
  "key6": "5QUjoVfNedhxUuLinh21fj4Rumt1vETRrpeMpWT5pUreBMmX15dXqrLt2DUAmfNXPJ8cJRYf6zK9cDD6mro5JNh1",
  "key7": "2mjmSwincY12RvCWtwhJSDvZGscUfh2ZQ9VNewWXaUV2xFk7FrRatTypPGMApzxNGgHjhHEVo2kDJeUCGM9RH2vi",
  "key8": "57vRmTQicDVokSxiTWpxQu4Td4zsFtkubXJVYQudvJSC1nNr1ygVyAGBFRAuT4ZrjqcTEjCqt7cugp4QKocTfx3Z",
  "key9": "5Lh8Z125eJ8Jqy2gtmb1EoNgqdP9ZQ3CkrSctaRKSsD2RZVnmU7h4FbuwKhTt1kZXWsVQFKMuBRP5xr3Jd9cN1PR",
  "key10": "61kPiwD5X4Qn9rz22DiVgkYGHzqEcghpGUoaK3VjhNuX6ETRjz2BvZFTcdEPwgaqrXBAhWEAPQktW9GNEJjH6AJK",
  "key11": "5v6pEy2pyrznJvGCtoQdafQeUjrMq9x5mAmjKdDq3Cy7kTZaxB2CcceDobNb2toWfEMG66xYZSsi1odRYUn3ocwQ",
  "key12": "H29bwozEsAqykXn1uZa6BZeYF336EtS6GhiykEXSLuBWD9oZHzVAXbTUisHSGSm659JapUHPZgEeEzVDX2ED26c",
  "key13": "3bsMVaKtrPbPQaTeaB4pBQBr4vQZj5Q1eZns8MnLYTq23ueQpBnaXYuqZhsvpPznhSdyA9oViTmdsrsBuv32Yp49",
  "key14": "5mFq6f9E1uXR1MEuPPLVKB5NTGVfz3c7gmhKje6y2ckA3dV6hFcfe9azFng3YuoxFXmLCTLMiLBU3DyyYHwHiM1t",
  "key15": "2VNzUto8BrnUeEM9SnJSP3QUuxRadrJFHzutjDEdXPhXHpbeoDrkRnCxzghnKnyNpgoUXLcupn6LJoPFGzCRTYat",
  "key16": "2x1798QboctwDYeAMdFKp5WDcEaXicCkDJNxs1tm6THKnWoYBBstHc8mwFc5EsjUhghjgaPXkPUKTG4PRzwEon6p",
  "key17": "4ArfQQgNPiQGmwjfMVHoWFbh1j6fNWBivCG6qgj984iEqxHs9DBWsi5kacxPDzCTcLv2MJLLhHCEA4PqPmemvZit",
  "key18": "3i8nCM9AXb9oMpSDHdRqAZDQt8XCQk5T2wsKeZCiYBcmisVReFV1nSfGkVCb4q7KZsyF1yj9pAQSyqUpbCbK7FgL",
  "key19": "3MtnA3juMFTq96g9ZNA9x6ficomspDPcFzz5rFJ5B9egcoc9vj2TEKdvpG5V9TYpNpLF58hgKiCbzt3MXyykvDFS",
  "key20": "2NEqxBecSdVArR6PqV29LPryQdK5qrjLmCRYKe1scaehLvieDU66cMzdtFbF9ZLTZ1vWixNsvgjQoKiNjeQicEpX",
  "key21": "3jRUUUes2rCfPw6VX62iSA557b8HRa5LEW3UJ95KtbQA1sYz9mdeVwqQumYzqf36zVyAYPsCjieozTiJWVkDUjaW",
  "key22": "ZJY5ox4eDkqAyMkJUTGEiScwoA1YAtmj5a9SCVt84SeZWVhmgWp74QfiiFAcW3jpgQ9jLdcTH8c1VJvUi2tNi9E",
  "key23": "3GHypCJUoD2DFGWahNHY48nrDuoVK9xH9apxnsPK3zgsQdxTyTHvAyfpeqa7eRrN1g61Tpp6AS5SkXN2GniTdHBE",
  "key24": "5RpSTCVJ2H2Qj2s2FDTed1namFKxoHZxRBQ8Pjcg8NJjxbMs7nmRqpvwMKCZZNYaqBvP9x3npXZC6FgD14exXeY1",
  "key25": "4AcmaNxrfxjfi5mUkc3y6Hhm9a3cfrtVN6E9B6y23RuAZrQmpaFLMw2CDJ6rUqVM4DjCNrxAhNLuWerPxHxpDHUC",
  "key26": "4kiUu1KAm7LR6Qrqjj6dwqwRU4MW7NoLi8xduCMUfz6kSgp5HYSmc4a6ziR8ENENiVWuFs1A2s1V4deQzwDvAyeN",
  "key27": "xMeUYkPvp5RRUaYbo6oztCyobZorNXDr9sGvdYP2hmGTkqTQ6rURfg4GarpY2KhUNJ2sZ48732FjTZKBXw4Xcw6",
  "key28": "3fwkGpAQeWKLh4kgx6HfrJTy335oYJ2ScjxR771UDQM6rqEdhMKYiGTUgya8a2x3ttszYGUtCFYMqacqGZypQSpA",
  "key29": "2Ym7jGLysS4NBtfohWXoRt9YdsdBVJXxVWBgbnY6cwxqWGNnn4PYv6gSMLAuBHgg9r52Z8e5qcMTJm2Yj9QKBZgJ",
  "key30": "3Zg5kE4GvZZzuRHBKkWeSeu6yAMMPCNBahsVjAfev2VVZxxnygpnk9GpMtRci3dMHVnBJVQiPRy75fffpnRjQMG4",
  "key31": "648wt38Dmh59vFwh2QfNkV4oNUnhqhtFm6kkVWQijiSk3HL8SDFNZfkVzEUaGpN6gGsPjCsMuy2jpRgNYANs7LN4",
  "key32": "5BV2kYLU7Cw8kAFzfx7KR6RJrBrtR7PLoZNJpjU4wC5adaqNmrYu41VL9zr9yNoPGq28QTiTxCYP6gqWDPEY1gNQ",
  "key33": "3ucTRtsb3VnHpV76x5m1dPoNoio8qircceQXmufAwyS8Msih4DRhBXER5ugNqk7bfEbgRkgeWK58XMWxWHxEanSr",
  "key34": "4jL2xYmH2Zk3zdqddwsu8VkCuXpW7ehwwEmMHt9tKXz3CwrT1CRfAZBB7VUaqmNTBWKPbZKca99K5C5DcRx5j4Qd",
  "key35": "4ryqXq5QbtRvc18vhFWhHXxRxzGe9pREgdcQcv8AStmRNUWP759eHfW9k1jtJ8SpmVD9wfYj2dKY8FVKrDwiHgax",
  "key36": "2NKzNtowcUf5JxqDZvPq5Z5RAMvmCGeAkKtsNECBJS1V8LFsfcY5dQQ6uY5TxtojiVbcTyjzwPi9YWzvHqddRT8t",
  "key37": "5uFJRtAfEdcpuaGnqnBKy8pGRRE1Y3LsHfTEoatHsZTcD78DbWheaAHmTuruFnxSpw3MP3vg7s1gjkB6xYPu4AAU",
  "key38": "5E253S3Z6DTT7ALq9V2i3sP1x35ffKmDYGHf3EQhQXm3M83KTtexKn58nFn7KzcVUSP1jUyPBMart5asyvaSL9or",
  "key39": "3QRiAELh6vWufoV1Z8W5E8S78BCZu2y7UJFwdQFCGPaBbeijxaXvcduF14t3uJp3ZHAHr3hUQM3LMH6Szknuskzc",
  "key40": "3ygo4uPyAmU4V1r7CaCWRe1CkNxfvr5min3QPKPYXXFLUXNjMaP657hZWCFUXmvGM9WYDnJu21ehaZvnduXogQdY",
  "key41": "2fXetDX1gpE7HQW8UEnECiqgHw4e9AQamAg49KWAEJamnZDwgApVYF4XDNtLbWah419J4SLgnhijrZRxBTdhPkZ9",
  "key42": "4eaEn6QKidy9eAvFvEuu6nwqjYQQphTBUTRek12SEa8CS6737FVBjaQXSjpRGkfGq54wHaGgwS6QLRdtqivGcZ91",
  "key43": "4f3hhJW56NjSGJMmpBiou3SY9DpyHnkzJpDxyHcibrxEQ1Dht2N1f1Fan9Fr9KMPz1ek7GmWERSC6wfuiXxs6NwB",
  "key44": "2JzJvJYg84WPjmdX3nA9nXbyZi5ssRPJpHBuazWQ3bxNcxLeiCoqEZWdkpQdkHLcBrtarfVwytHaMKLoJ3m6H1fA",
  "key45": "2QjXfsbCwDScuQaVSAa2zNUC4cJH6u7TL7q8V6iF9ctLpT7be2weve1C7gVLnWSmYSEG337LyHyzaQ3L7g7KEod2",
  "key46": "rCaLdKkYLDUp66QjWNgQCiaKwZNgzeG8dEHZtfThgLiZro6X4krv2sKqQWwxRiPuUhHmsYMM1emdp5u9hSNPsgd",
  "key47": "3SkARufLMFHzYrZXVBYVmMF3hwxsaaKBG24k7jW1QACDa5VKswMedvcK1yuqLW53hKad8WkpiKvFQWC8DNgr9zih",
  "key48": "5jfHQ7nrBuxWK4SaPXjCgTVKjUuJ4scqiF8uqNw2i3DtHKE75mBDP4mmB3WZVCnao3cF3kkc2uEcHCi2GL9xD8SK"
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
