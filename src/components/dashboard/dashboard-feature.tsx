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
    "51YmU3Jw7q3gHagf3PKde2LFuGDPnwJFgoXKu3unqSWd2WGDdAa44LDFr8gzwLy1zEACa9WTkGssm69nU4tsoATu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dP8DJQG7XDL15vfLTesGwbRJcZiteCmU9BmsXizYGb6io85z9NJwfKV5kQ4NeYW1QLGfAfNdQ7rthm5BMGWMGqu",
  "key1": "5nzr3UToZFtdth3FFrRwFLGR7gGy96dqkXQXKhywiG1D4mrKNyQGUYh7zeXTo7WTjYQXVho4wQCJSbiWA4r3yQgD",
  "key2": "4M236d5pqJBLftjpbnb572UQb4FcfbZ4nQfWN5LHWHYH2Ywx71McqTzkaAVx8u73ADdmcoDFHCUATuaxGsGWC1G9",
  "key3": "tZRtYBrbYtGYGaqHfvhVGnoCo7RwuyP15zQeYdqDFoahDXTxM6QwPQnkdieC73sRkVdviwWeNzNkNRMar69EGND",
  "key4": "et5ZismY2naFAerqsrGXWWDyGEaJp7qtG6817qpF7yVijcbA2pHna9eeeC41dFAAPMKmNNmnG7mNnaMgbHnDND2",
  "key5": "3xW17HovwtBsQp7ww2m9We48rwd6baeQrGqZcEpqege9Vq2M5PfYmKGmt4p4Fysj6H6cvptDqMwScyCVo2VUrXfR",
  "key6": "5Smok3kmYWgB3s3ASurEz7BWL2vvFL8Jmnn1bYhDiBHsV79p4TBkX24BDRiWPukr7ueLYFAkWhnqcsJjB3FNJ67G",
  "key7": "5RYY5Xx1k9N44Msuwj5oWzt4g2EMcQ3LV4UR8gQZGEsB1WmzyM64K86iVDeNYsxo5eX6xsqVzdqXiUccHV6PeVE4",
  "key8": "mSTj8RTEcuRS7KyFn46fzaTGVXQz9PSty8F65Jtf7JycvtTKniWiTtv3DG8R5wX6J7fzfqTmEr6zpiSXGHV8Ygj",
  "key9": "52sYamLwGk3WLnhqi7HCVCfZrEbuFZ5fXaWT9KCZQ4dPoBxn6owbWstBG8dW86mz4vnXdAVtHfXumtEpRrb8t4dp",
  "key10": "5nr1TgdPFKbZ2Ancyq28HvZZuu9d5DdHdPEWCM4tFmq3ec3oXW3gbFDzWspQTxUnavk1UTgRRoqbaWchkXDgE9Tw",
  "key11": "4TQBEjeFGPavAf9YJbpCtnPvYnivT8YbD1hd1Kr6UPBmurpgzjzD7Wb32Kk7YJ4QU672FjhNvrR3gQs4x2r9huVL",
  "key12": "NJnYZZdXwLhUt7PR3tGmG4nxsYN8wzzzbnVV6466CoqQUK9geLJyQ5s9Jx5hTM5v2Xrci9Frgu53BXFaYnqU1ba",
  "key13": "2HUM2Pgo7dvVEG11GHQrrNdGe8PPtwpBxDsL4M4pMZBcY4Ldqa263C9wcJtBHwJA7DjW522FJtxHVtxto9Ypfv4m",
  "key14": "31QoifrM3RfkUVMKkmCMqCLAZygJGtAspj8BAX6rYKZU6rUUR3VSCosSf5RcXveBpqmxjoFCT5XmH6caSwiEiYbA",
  "key15": "2QnEVt15sgeB9cYhLBPrtTeZjssHKUaT7LpsYRezqfMdBF6N4enULTatLE1r7AdUdaWn7ZBPTuBWcDH54ijPQ4zE",
  "key16": "5o1jo8Z9zVWtVQA7cro9G98QGG5Vmo51fTqU6V7F21YH5LjCDazyEcMo5hsMMEzZkkPWStZBpCAXDu6bdR6feBmL",
  "key17": "2uHKsu5LTFiUJfooG4LmPenLGDZdfnusxhjb3i7KEyivjXxSqZXDc6DPaX8Fk4Ls8KCu3NHXhejsQtziSt8qPbJi",
  "key18": "32X6nCPzYNM1CRM8jtxQMFckcqYwrDoa7ADnTHNrAcazmvo254ynyNkekdUZiXCy2opcify6MM6U23Sih441vqvh",
  "key19": "5u2x4VWyVE1bsUS7eEcA2g173GeDsajbnqAUpvw8RpaW5c43K81FpxtzqtQiyWrEWgB2rez287WQ6GXzWsPqxf6C",
  "key20": "QvNVUM33JYAAs4f2WoPnDNGefSMxhYoqwRHcbXnf5wtGammGeBqXSJBzpCNMgQ8CynwFPSc97yf9xLSzwU4Qa8Q",
  "key21": "2ASBbGTKRgV5XZdQ5reNvktbxzncu3SoM7wvJ12siaG2LKYqBr7eNWeQQfK5gcdaiKPLABvcEqq6EiW29tK4ATak",
  "key22": "5rbAPgtoTdchYT7XpLf2fmcHjG6n14hSYtaykyGw2dv2qCN2oX9zAdGmQs6JxbKzGFFi6Lkni4JkdYJ1c5oprkiE",
  "key23": "3uBUuU8VCudZCS439cSa8n4zGLUeQM4gFZh3mwvbH5GTUeMgGZnqKoQJ58b1sxQNLUFmCiY3nNx6QySwcRHPwQDm",
  "key24": "4MEPM4koR4rwRCXxR6KLnfo3VupwJ9UPMmDM4Ps3ETPkS6885izKDxFtPVHyi3nrWzPgqwoevJ8F8xkoQRZm4hqc",
  "key25": "ZmgzXZEc6zX9jori2gPreGKTXr62HXapPpCwwb6sKojr2MCRN5QficLcWoQnBRQxooqHDooZzHUDkaFsj79W8Tk",
  "key26": "533tTBhcELhzXXmLsBwZ6WPKyPozYfiYudVrM2RC3tKJVzZp9SvLLBnhPVpQrZJEke8GcbJ5rkXMFDEPhAeTRKx9",
  "key27": "sTqDGDTWnw4VJpk7ayQ31FJMBvo5YvjByRDvEQx4aKu8wHstyA5v3EbrVQ4V2N7AcFmmC43b57Tc6sxrXj6WRgV",
  "key28": "5DtjhHxiyxguas64sxmKzvUT1CM1TEBNeeXcPeMbNuwKS5xrVsee4tn8tEnhEpYCADSUPeLVQWw8m7nJxDEc8SzU",
  "key29": "bAEYDzoZaEV4HgiAXgaEeQPXAKURw3A37xNZ8WS2QknVThfy7vPDmSQqghPG8PX5qZnb8YoeEpGuJ9Rq63tMJKN",
  "key30": "2q1vyiEijbxzCrwyPbEro7utKCvXpSfmFVs2UZDcqpzae182TTuJ2Tdw2ZqyCkKSEkTnT23pMnmudVUXaQRqynik",
  "key31": "3EngWB8MJgTppuVTWyQgqgvi4caqxzrjmpoBz2v4Fst6sGHNM8rQFqDEAFWRgMSMedM5J7fK5tdcsHydcnHZMJmr",
  "key32": "3Rcc3bKX31hf5LzGq5RziUTCiBDzqs2VZgWsTy74RpGnzVpkDefyMu6z3peeBDVjaR2YAgDjF6FbLWYedKbycxms",
  "key33": "DGs1EKQTH86Cni7JUdHFEh82JBc7gzvU5TZCwrees7tJqguhfyYQZkG8bMKh9pQvJRrxfpeNf967mnJMy98p2F2",
  "key34": "2YVLJeeXWeQ4PYrnY9yvXfteQ1PAPoJmRGgki9PJTkJHEBWhMpvxu2w2NFApyfzxJt7nQ6CewJqpeN2UwU8wWU54",
  "key35": "3zGzjR9bhSHtAuqRYVGFKFSmSKsqidTUq8qrDHqY52XKcC8BZtWyeGn55m6KsUaXKo1jR34BU7SvzwjhKqvRi4Fa",
  "key36": "co82My2DGGWiKKcYrEbyPtrLjrejKPuBYjLiXVzDd9tR1Mk4neGC6ZfEf9LiJyY5S9MqK1LCkueiBrLsy37zGc5",
  "key37": "Bsz3K3Wj4XJjuC7vVKpcdVob56chbAbvStvTu6bj3CjTzH4PU1hRa2vWMAyuZGjkwUWabRzyubry2XzrF7gvR6j",
  "key38": "47kaBLRwpHUiUFdrjaW9yio8KEwdAYu1ojemSVXeAe24PbUpiaSArReWbrBUF6bB7Pw4uBEsHtXpQimKgdfJ6633",
  "key39": "4zcT9iNs453MgbogDLTtA9w5sWvK5qrphz8Rdug5T2TATKtGTjdRbNrEB3aFRWpZAje6xARpKud554JB7UhPx583",
  "key40": "5Nfb2XfqYSmmZ9SEBH3VJ3Lp2DbgmTkcye82orqfXBW83vpJ9UCLXdKPff1xwzhyb14cApHh7adVFDrFPnfHi2an",
  "key41": "2TAk8LMtvdmYVWv2fzz38ab6UoJHcoLtfi15DH9Nj5KbsHavg98AdXV5kgsXLw6duKby4Wz2N1aUMhZFFz6G24P",
  "key42": "3VkF6mjBZL8aX6oggD58Ryaz5GkAcFS3xSbRo87URsWqmqrGdTp8dDaioGnaCXQt1SV5CbXciFV2JUuYPnZFfbYD",
  "key43": "5EvdqsFbngDq9FaDnByCDdyoFb1v65WchdyvKzE636NYuDp7HB58fUP3Py9dpzkxxhXWo1sVN8KhkSkP72LSxvUx"
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
