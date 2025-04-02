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
    "7CUH6L2XmbrxJHkJnoKmVcRMSKqdgDpTDPaUmeKz2bCdLVkKswF3BdbW3HT4mx7ptf87pUUTDcmtfZ6zAxEqaWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2thXhrRXyeS2dmvXa8iYJJNYiKf8spAnbbNjMBp33k2H6YTEtcSwxZE4KBFjB3VHYhhV6cQQc9vA1eDhVSjSYGWh",
  "key1": "6667ihqJ723yT7zQqajB5Hx2z5BgJULiwdaVQywALP3a6y8ZBkYn1VUwTwpWANnyzw34nVo7NHddXCUjrzwBQ7ZL",
  "key2": "3GCWToyk4FmQRJWAgZqPeJYAM4nXiZMsH2JsgtRqjBCNUffZxhCdonVdn5HNpgEtrbFeP7uHcJDFxKzkEoREvs2p",
  "key3": "LgdTwyHQf7Dc8uWcL4oefcmnKa52pgL6XgstSHX3w5uRTCg68VJT4RLcD4MgieyBt22EpErco6jckRqyFgRwVBu",
  "key4": "59YMntvraeAohuDWyrbXmUH7nDqGFXGqRoBp9LABGNyGpmr7mWxaSSMsGQEV9Nf3cSP5XNc5kkskZ5eQV8MwZLJQ",
  "key5": "JaBZQEtAZhnjWTj2bPKkaf43CmUdEkWKe3Nj8Raiji5jKi4SDfP72SiEFjV9EUD6NGM8doTm6QPeqttpsgPvYsa",
  "key6": "mdMwuPtPXMgAWViszaZHXTTCbFtC911XEF6TLs7VPEmjiFdfbBvaqabWK4CitbLLY35jbU4JZiWsQX5HK72oxfp",
  "key7": "28rmojDcQ7uc7cGRafPDV6DBXF9AkowWqKFy64z3Vvk7CL2H3FNPJir8KhurYTjgYC1QHoYFFKE5zpXfHFTpxvqa",
  "key8": "2o2kPLEgHs9H4UKJMXq4DsHeDj3XnDVgDfLK87qRjueUKjHCihnM3jgp6u8dX7pxvnoCmMBBpoi3uShXiuCDKs69",
  "key9": "Vp27Xnueta2JdMNVnH2BpVnNYCht1FqYCfYvxiRt9EsE6iCd1VFhwPG1Mc1jou93EEE5BeGXbmJqF5Rey3B5ykC",
  "key10": "9zXWevDzPgwJ17PUFYXjkUcEKt1W8V8wqYV6m9FqxbN5PU8imbBNoQWFB8bsKRWBzTM7xxXAuMMKECfhqnDEC56",
  "key11": "33fEii67m6FU4sqY82FbcD4NM2vTHgmN3h8XGNtkuWihcP8xt1fj1U8JyQTPweYLLfPnrnCTdGdmhJwdQCAkVjfV",
  "key12": "3Rw1oXcqN7h3woUCjkntsnBUP2F8i7anQt6MEXzJdk8ScrYtZ95DHcrbfG92DxzUj1AgA2ciTP3swYC9ur9Dwho8",
  "key13": "4bMKJ3AYXR2FeVB92t5XA2wPfrhBKvCAd8qmZvV72DYpV9kTrtqw4bbCYrcNTUWMonLVXfpw9PxzfjJaB95hmJvQ",
  "key14": "3MMSZyypwJHGGYqsB6H11WZmPn9NdVtHpiZ47344ahbthe6BvahgA4dBhd1CkojeCGXSRZR6Ua8UWQzs1EHqsYBP",
  "key15": "Ka11S3jEJAiGwv8ij29qNseWGuAXgXU4RtQh1pgNwSH9FEJ9PGJrcm5ePR3hW2nfRDnDpcJqgG2PWPeynChHiSW",
  "key16": "3pUiU5sAtNFMRv7Q3WyC5TxMQAkFCgK7sAsEGaru1wUz66c27T53aZxtZdo1o5UCKQxqpG5DAt8CGykcgGj4qMAN",
  "key17": "3meAVUkR2e2nJsqiRSWzgtP89v9Qj1GkSEzrA8rGHKoiMzhRWwgX1bpHH4Y2HzcieMMTSR9TzajmRNJKT3aRNj7P",
  "key18": "2HAoJPWoWPaDXve8DSFsNFZDHUD5q6qMX64pByFFbcCGCJYiui43M1rnMhWnmnMUcEMaqu5ssREmnEJFdqP5JJTJ",
  "key19": "mJvwkyVUvvkLK4JETNwSTiHBzdUgnMgrWxkuhRgkGUWHekyecW9KvdBmb9ukXBYySd6CFPt3uYYq8TfH3t5uFgw",
  "key20": "fX1vKLdsz15W1yyEbJoJM1yCfeaPcYAgqMsXhxHmCCoL2CWDPUqKKBzzydRF12deHT8pLFHH5zX7qF7qizaAS4C",
  "key21": "27ytRtBHNG5hoLAFZsZVz6EMvFphRjcNvNhxDoVJKk6Jzu41pqQdHprTPg6Ki6R9JiL9HFBt19s2Q6G8LUeg5cQa",
  "key22": "49XqYATSUEgTzE7rrwY62ywpeWbLtH19d68cH6bZTQEmo1quYYbrusbGBPRbo4tK3cuGQ3VCdRuvTfDHSUpdvFDP",
  "key23": "5JXWvCexEC4v6XpkwWeHJP9bEiVPDP2YGwqBVPoqbw9CvMmAQ2ar5vtSHssLYGy1UFw1s53QuebGJkc862RoyAHm",
  "key24": "2b5gBkRuFGVQ4PXmSzJoBfXQTkaqW9RHYZVHnKWeY3a3WcMwGzfxtsppLbLLGfaV7XDtBD2axUy6cnKfgCRWqGBS",
  "key25": "3L17NcQCUYoY3qmbaPQTWwtQ3r8KdxNFePuunf8Pr62g1UKRzqjSEciMsWt3tg653Rf9EnS92ZP6LPej8H7xUQMQ",
  "key26": "3GTsqEKsrjQQU5vZpYh1E4FuYgxSwsVQmrpSm9pf49JHAbQCYsQUSWhiM1dH8nDmr1TCPtcdvsHBMZ616z6UDJkR",
  "key27": "3on7A3hWVHyV3ZTJpu59BzSgDTtx84LQznXe4HVPvigApWSRVyKzDjo5RYc5ZG29DpuBNohEcMAD2BhTsd2XrtdV",
  "key28": "2RJBgErdNuj96Xon4oMChbVTVSvWnf8eJ51r5Q6TSnrVJCTQZo43rDkTPsQ8vjA51a1wdA9Re8Apk3UNT6YzS2Di",
  "key29": "4r9TuzXuJSPuwMYtoT6noNVNqBurRrGgXZcxnTbFts83tJLUnDkkvE4Rnpys558Kr7BzhZPip5bsJSMH4Kzk9EUr",
  "key30": "4UehCW6Bpsjv2zwvK8NyCP48vd1VyeqQURytZCLErHsFcE1SPmCdoSYVTiLpbCVL8dwRdFUUqBLttCkF9XynN5bi",
  "key31": "2NTeXj65mAnkMs1EAro9zDe64XshVY2axkzikWCYFr4kQVsUuiVSqkKteJfGg25MF8Jyock4jRR3jmAxPKUmgwnR",
  "key32": "3QgqHaTq45dhFXHt86wMYK3smpg3Mb82vpAiVT8YcJVNtqw2vYuY6b9oVPboogHjYZRqzh83J7zSZSxFWsEPAgMh",
  "key33": "3K537Xuh1K8FTQibu2WxunDZKDhqEEmS5514eYqwJbP5nda7aR1iygPVR83d3PcqvnCECBafGsd2k9aCR9XGgHHT",
  "key34": "2uSTuH9TtGPYsseDShtXP3vBhncHGH8vPTn1kxCfk7X5rSKprqsKUQwRCDv9U5Qxx8rukMtKeEP1XisNKbEQr47W",
  "key35": "3kHn2BS4dsRhbSxQvKguy7FQcHgE2jWsHf1VRJ2GDi2W3AW7cdkzAfj8hVk9MNtquL553sebqAn5DiDi5eeyNSfH",
  "key36": "4tZjd457MA3c8hH9k8zUSPdAUbthpCmv9p9oXzdGxho66uH4CYDXMvcbsdiXjQdkLRoWY81QJwVjCxTfGdFMP4E5",
  "key37": "azzuXfp3JwZnmp23w6AfuRqqXTNo6Vesba3tYu1FeyrW1X5Q2p9UjuKjGAN9PWGLYbVMWMnazSNgqJxxR3t6zxL",
  "key38": "3bYSU1T3znw56feXWVcpbMYqE7PJbTsc8PnpJbq5medpj1fcB5LRBU7q2t6rPMCHdXCbDY6zv9HqhHibZWwfd5LH",
  "key39": "2QmH4hSs6dDohiaUTszmnvc4rKNiBZeGXZD7hoJTaFwxHEEnYY4f8qbmq6gWDMK6BrNfs5h7T5wSz7AKwycL42zs",
  "key40": "Xu823GEphWd2fPYFdRguPMJfiEXqWp4nK4QCtQ5Fm32F6WdwqmdjuMiWFHyyVNLm3eg6w5HjgNVNWd8ZodnXNmF",
  "key41": "31mgreqGQk47YmjA3JTVaU1c6sd7k5NcgT33RM3NcRQKoSotuy5ZYmFxP4eU2Yj8AhC9kKBiLv2ER6Md4peoXuAV",
  "key42": "4jAwyc5MGjGp3AbY8EWS21xhPJwk2JvWJ8tXuVXMSyAATZiAnrzYqo5miqVWXrVbFXsr32BVjymsPqz2TJUUbh7z",
  "key43": "53RE8ZffxhEZ9QZrqNBniH8bUMeF4k6PwMdsrJAB2D8MZ2GVu84WTRijccufvWKP9BKqoZqsLyoW6x3CqvN2rsL7",
  "key44": "YhdT2ZxeumuGW3MegXLkL36q4Nq942kPdWo8SDsFGEg6vv1FPXXLc4whiaUwDS1tmwoqQy4EiKjm69g2zTKdcTN",
  "key45": "4qbxPP22d6gwcrv4NwL26yZ3XaYxwMyLoMiVGikddu3hUf2bxkmYwuhyH95h9FPcwNrbgNKyBbMSq662L9jjtNZ5",
  "key46": "63hBAoFivqUcK8LHuaQUg1RwSmqiKBrvxFQpmoC5ztNZZZeEddRbfrHnMgnrvGCcuKxVfYkGJyGYqgj3j36pZtrm",
  "key47": "2mEgxZR1Hrx33GG7kpBYRZmAGkDgzzy3eeU5aay2S3116YWqEaLaXhQvxLL48WxYVRxJazRC5THMZhfSXchzPNpe"
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
