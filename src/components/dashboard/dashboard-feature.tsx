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
    "2H95KVoK5WEDNkQhyJVLzbPTFFcFJtaQkckio7Azf4LkRaGqfjv1nMtDpMjgkyHAkHN2ZWyyCX2TymYUaT8RSosW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eAjXAhvn2smBqpxQ9dnMREw49YeYwV2vHq79JdcAovaiDCDWQQE9EzvL5KWSTNrsUi5wf7Aa96WL6ZiBTQZq1fX",
  "key1": "3cc9jLNtJoXJq38C3p5ixusXoZzrniMB9TksNpehWaf7PkL7pm54fhdGYWSsbfUNNL1hMDGdBBpBKYuJ6HymbS1p",
  "key2": "3yr2mL7BW1TCxR3F9iv2wHQeR2WyNWLodMofXEb86p8CfkYXmP2RPDwqkZDKhyCAuGECNMcE8bbQg88MMrD1937C",
  "key3": "53jee7yRqMqDTurwQemHZbwErgxXiS7mDfJsCguubhZK2Xd5THDFzN6uyo1wKjPnHMifaL4jaSx37nsrhqoxxC3P",
  "key4": "XCQddaaCJz6AZCtgqZJr3sC767X9cupaTBnZSU8wksFXMbifaqRQouD1ynFBcfzbKMkofQQJ8efxbWCTURtw9Gr",
  "key5": "4F4P6RrJn7ppjz4bmjXyQPJGpxFSCfBkrrW45tsThwcJeQup6Xf3pjc9XmeH6ZHSj883Tk5T29yBPtGpvHJPgQ1z",
  "key6": "3xu4kvFqBUgoab6mfNCdzD7w8MMbsFVXbWAz79JuufsZ19mFqsVdu3SkdvvsqDCNDJWsyFxj9GP8tMunaHJvmHHL",
  "key7": "3hhCMkiA9URCiDwaLLvHMjXi6xVWim7hKvueTCf7mMn1QM1QjAxf65TYBpdt87t4yh99HfoiPswN9w2SzV67hfqp",
  "key8": "2bHWXLLkuSB69LsjwYXmeqWkr2SN4hzQFift1zZ5MScM39JLXdbg3G6VwnbcHwHXxgTzeiMgjxzawuE3896EZyFx",
  "key9": "9TRW6yVaphbMMjYZFtF9sgXNELypqCPJDpaD4YGQpAkM8nVtNv9mJceSGf9yeNeDLuEL4Rhc3CCnAuK8yiZovum",
  "key10": "LdAEqyc8E57Zx6Uuxr6jGSeV6n1T2J5XkpHu4J8qYqEbU8MMrnPuqw5LeTsTNR7vTvefWpzqJjrrg5b6EcpQzhP",
  "key11": "22n8RcQ9xjNzTgAq153SL5rDNuMHddgSpB7YsasKdygNcnQ9Ady7Zx3cMoNnbnsvhUYwNhfwUofdjX44ffeH28aG",
  "key12": "xRLQy2sw537bPGCNvYHmXS6CsCMLGXqjatxmsf7vfwumPMyyjV7hCYRwoY51NxFALQD7Dv3YGbWHSyt3Abb96ff",
  "key13": "4f7QDREsaEag6tmusECbtvDHZn8ZaM2iWocTezeKBdJCxpdivjAoqVkn8G8UGidCfRXbmrjHQjxyPG35adrTuh41",
  "key14": "1isT5KTDUhV83RZnUKH3Ls8DvtoM7jKsJWcRdRXwwnFtiTbYZQub9meGPMpcrDfHE7hdfa5pjq9AA4sciYWPZTy",
  "key15": "4qLHpQ39UQ4TqDnTm2gCYvDEvxbGBA4Tn7WXQq66cZRCkkjcDYjxPkwvGsJGxZghinnFhKzrcgWfSd9YTp6vg9za",
  "key16": "XhPjkc3ofTpVCZLZLGUApqXAVe1VEUtojuaeqPPtXjBjjUQVtKqu3EkvuPN27bVTWfM2L3Nu6LHugceSaAHUMAP",
  "key17": "3vTn1Jkhwyc9MVNVrzpxSbZyryzYiFMeUVG8HoHQgrnDnqUB37BuXhYzE1hVMvBZUH3yYRCbyWpSPJH4iWTaWLzk",
  "key18": "25XVmRD8FiRvR1fSieqaQvuHrQFpTbj6vs4YeaVcuVoPW9oFWETg3rTREH5JtJot2Ennfb1dQBxX44oPNtL5mtR6",
  "key19": "5wDnY5TLAtWEpWsdPqkB2P5sGVWtATrw4xtajKuynGdwhrcxv8mtqLPzh4DvTaKLsbMtW9HtyJJViirVHSu7ELmc",
  "key20": "38jBa662EhNBQSnqqpkTGZTKGWFdoGcuc952kmJdu1a2yuEmNBnbSz3aSVVN8uBPCSDQ9UeH1E1wwELNh9zkzD1X",
  "key21": "371RfLY4vddkhNijpGBitUURGCVSDvfcpRLYC87njpw6tjurU3g6U4tgsxqa75RJc4WGMPdgyR8AjRSuPYVDwdp3",
  "key22": "2ZWxjSNzHvxskwcR9kF51MMfBBPRBnEehVA9eMSqcmbcczEMYpdKEgc9oncWv42839no5TUpbxMyJWPs3Q9eVgcE",
  "key23": "9iRKb9eFR59HCcTizWCvjnoEBss7fezX9NFzfgKvWRf6WxtHjivn1CXTKcqHSMcyFNpmaVjJv7d7MwbdETVqrKC",
  "key24": "2YKzdW8rpT7RZv4DBkkCkGPyYc4y6BtHuUeMWNGXSwA4Lkbpk1xf1efMiPcG11E748krGgerXDxUyda7hAyMks6B",
  "key25": "7vmgBVKNjJh6BgGgWMjV5KRt9vBpVCzTToM8rX7ZEsrXG75D5j4kL4j2RFQQkebE9HpysXnErVLBJGByVL5X9nN",
  "key26": "3kzZajKiMPiJCrBV8JiuytRv41SixUY12pShv5pAwYdH9vwZzUYgBBMdUoTBS8GRRgxBWqMaS5ibRY61iycuqtXb",
  "key27": "YnNTHb9MPWogHsQrNH2rcnKASA4MLJ76KxgrRbkfyZJ8uR5bfnx1tLkfMNnT69LSnh8HViUV74a2SWLHFuCvbQL",
  "key28": "4N8Jc1PT7dD1d6xcDqDV1fen4zM9GUirqoL9xrNLUn9vuJPiC5uXrWGcEea6KcptyBPwBqFTZdyjjW4orDDukoib",
  "key29": "LfxG5i79vCwFspSV89vrjJRce93SpxW4nUiUxN7wxStwA2N5mbSuaJSstKAsPtFmsyJkLbt7kUzUNNSxSqiCFXG",
  "key30": "RT1PjnbQjFosg9CoMwwX4jf3Qfd1vCqVmMAfLjXcfAYvmfFyZzdCo4yJCsC5WCnEUQ2tVK9pUknSERZMtX6iXQB",
  "key31": "4VLvgiafgcws3T8wpQ11NzWSvcLDow2tK2ywphn9Pa6w6aiJ8uD8PGNKUeFYoyiUyUQUjFbP8C42paM7k23ViBQe",
  "key32": "3ivU2e7Yh5g34zeT8QwAYLeKodrYewr6kZzYtVRqHVJjDJ6oN3njB78ydBwnsdEcPeXPMwzCdKKFNCP98wtesCUF",
  "key33": "4bf1mwVgpgdXCtFLec4EmvmE4NbJucukQfUcHD7CR7XjSvEHaSKZ62hqcb7wqjdm8PWPGY7N7wULhNrGA6gUTqpU",
  "key34": "2wYdMLbLAJ28e1BamruYZHmkijW6EzSTscfo2Z1itdFPuj21ZWcMw1gg5NcSJ7XRSnAX8nuSq5oeJLyN8XhgJXL2",
  "key35": "5H3bJrLJWW8bAbrhUPC6g4ajE14ThgdT73joVgQdtEss8wSipGRphZb5PthvrNeEoKeSk1ZSZHXhTgDJViqPMEQP",
  "key36": "5S2nDqHKht5po46sBT8C7BSKkL6Bmy56BhgmFvbQqx97K1gRVw4UGYfAe7hX5aR51TZQHxriSPb1DVUiu31abih5",
  "key37": "4KkYXua9BAYEFNcRM66yGr31k19gJ2zsoNYnqisgvhQZEYpwEFaCduTx2dFsyi4bfo2vM6q2sEyYV9x6ooV4HMe5",
  "key38": "nUNVDWQLheWpiyQ6zriTDtWV2643KEUgtcsFXCZaJD6rLEKAYmBge5fahduyrRsqFVLwH4LK1jxkP1uMzuM6Qw8",
  "key39": "5UDRDQxRNwsFJuTuqT8w6DEJwXcwMUVBRThu6R2XMbxzD6y3rSVjAVdBfAoUMPMt4Kf6Wzcn2T9BVoXC8hQaGVW9",
  "key40": "3fwaHAzWeMRDL9FC7y2WWDRinCv5DqxwQhGFxhEWCc2Ti1h5BYhm34PpJ12NZrTzpW3biAB94yJbES3JhXdLudmN",
  "key41": "4wgC8zJrqP4Cp3SGJpCMHsi8H5JcXfZCMqxBJipFwLfJYoZXK1xNVRXetQHWwaAPszstSaemYZtS6GNhwJmHoYVs",
  "key42": "48ErG96zLszt78tGP7m32BKkLWsr4xZAhLwdWqXFU81HT2UPmrhij5eQ9dYs3ehNuTLy2ADqg42sP7D5rBCtCAhE",
  "key43": "5fBF6cY7zrPzAe59Ddzeo5uUDdrXg3LXuDGy1kVWDpwKY1bY7tTmAbLGhbscsZ1Q9Z2mGaui28C6WaBMzhkhw6y6",
  "key44": "4K6XFD6RHf3GwFUZztoKUq5Hn49bnFT6fnykRbGnUYePDBHRtShbBTEn2m9S7w1M2fSUvcEuQXeGi5e6rHJ3nj99",
  "key45": "2MbBgm6E3MXp8qXnwGgdPMK2QqyRrSw2L1ZiecHz6oWRVq29XGFPwDqkeH83m3NrXH9VdHkjzhkUtFbQ5cSt4Jqw",
  "key46": "3e84PGDi7owzRjTXPUHELpwDNWmp58dzGcCp5t6979rfnkWZrNkwLPBBRLg2g8rNg5zuQgutqqxUMY7fRPyL5KiR",
  "key47": "2fJs1eNx1k8UiTEeahpHMGk8AX6DkmbbtPEormUc7wM8iDfPSiynSnp8bKrGWsBjokbep7BHo63NeQUrd1jpdYBd",
  "key48": "3A5GZScrCMj4tKciSPKnKJ12b5ERa79oUVUSAWAUnV8UUzNUCe6qWz4zZYiPkBa2J5q4bHAXgAmewQ9cnCbGDy47"
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
