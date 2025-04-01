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
    "41whrPmT89rLewkmF1iJmkTKAFd7QEUXyTwVWJADBNMBc9mF7vrk9WaBc1RNdAYPtuwCyriUwdDizy5pSv3P14Zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61QksoiNWFw7UHSNo9pKAM44Aiy96dsrRLyKt1eJ9tvCYdmKSFp85RnPSBLhsP3BmhL8x2zrP6yeXXk9NNreAELh",
  "key1": "4TiPKf3mDym87anC3DuzQsamA2XKFEKjVHW7GAEXMKw74tRp8V2wxWiVhXxtbwYadP7DiKamGaShcuE9JyZZkzNn",
  "key2": "3SpmA5yuux4dSrER3TWzb7KWzGRQm5XW8L8XNreA3J7PtZ74SZ2BoqBC49N5XnpZJ6Zd1Gz8h44SkVNzrBcrQWB4",
  "key3": "4J9TECB9Ha5bu3x5vzLGSwxRyHkb5iAySErsN1kAiFgp5vgbKvgu7dtswsaVpfNvFMP4JkiEWbDaEWtcGJwe1mE4",
  "key4": "5vmbFXvSByhrXcWL8VqnBdwYkzaYaA3pSDva4QjAbvn2iBuGi5uj8sS1ho5a5Bcmar498ekfzb3Ji9WESGAXxsP3",
  "key5": "45jW9mR3Q8sfxiXmwJna9zxs6yAaBmm9PtrKsh81s8cFR8EpRyWZzM9jX11jxgtEcYPTuTutPvh6s8zpdggwkK9R",
  "key6": "22QosxskeAt4GhvSeHE9r2Wiuueiyip6nVmZMEaKPVaH1VrA5pg4GqH8oaPZppM5WnyS2sJNRHZKz9nh1f3VoRHh",
  "key7": "4Nu3EoJcTqcpSeC8mpEBM8Gz5pwLQkd4DgPQQWQ89AZQt6SSQjynXkdtNVjJadK7ULW59ebpnJ9YWj1eD8nk2DpS",
  "key8": "RDiLsZABBG13AvyZx99LBHoQihs8oZJuXRrGWN7hznMnyo4rUassWztprostVGaJ4dh8Gsvo7La9d1JnG8UdLYZ",
  "key9": "4vBVpCnr6svMe51AMbYK5Na7KGWUts2ric2cNzat5nYu9j94ivhKJ6Ux51ZMVofDL2gSqV6ciaiduRfyMwMv5evb",
  "key10": "2zH5zLhwgQwsySAXFwkQtCS2NcL5jA9LGePE1Jp1RBBnSPy121NBD8inethDLayjSStyPfvxJWZfigZBPv7QgBDz",
  "key11": "4FUJojYYj9hffV2tSFJAkqgQ31ZNzCRGZAiG95UX5AQ9re61YEC8dyTxfG4Nma7yJSgz1JVuR7onywaLePBDVEfz",
  "key12": "2HeCPvco4uLkbfrjXhqY6taFa2tRnsR7j2wrhabVfetZMmDfoJgDRzmUX2QjRCpGVtSBjW8ajvpNeAQVg3LfhTGA",
  "key13": "4YdjHjDTCWnqeAUgqZUHUUcGC5dmvKZ3m3NCSDPvCW1jiYXs5spTSjdfcs8dNt1ug9peoqgp7XqCaiXLesn71FLY",
  "key14": "c96mFRCUB9hbz3ov6nezoF8Xm5CSYY2wht12MmBPu3VTGHcqmWaMQQJjfree7JrxQihVsx3MdsAXEZuTLYvFcSM",
  "key15": "5CCwWUx59cJ7Y6BwGr2iXA3JU38xpi72yYMHFMN75tAwxcLAf5jUiYY3xQwVxu4oNSVtz3MYFd8cE433vQusGEn2",
  "key16": "2RoQ66LXvzPMKf1thqT8uhCYm2BaiE49k7m4m2CJu9WFiEJYForR88JYnCQfxtNyUSsk5AkUezGpg7qoYHmc7CZ",
  "key17": "3zF57Uce2uv1Pfmt41vCEFTUREN5Abxz17kSPwZzhaqjLKnrLXjpXoB3oMJKzdpS2eSUVbLd8eQv4wMgD9F8pCBo",
  "key18": "5XYpsiWAMFdTALp5C31n3vbjT3uG8un11DQ4z9wVgpe2b5BAnYrteQvK5mhVEynxQ3FEti4Wi2237TVkfYcAZXaS",
  "key19": "3Gq6tce1E9KT7pk69vyuaPgzhDYa2AEnX812Z9YHBpSuPEzoFcURe4SPpi1w7mXKWCFvT3NiYMceHD6ptuzJqLML",
  "key20": "2uy47db6m8Yob7knB8x4CQjUJnrT59Eknq7rb6RzDxjvGUtwj1WyouCmrPyiDwy4DW7ZaCZ8yHHt1kiY51z6wiL",
  "key21": "4ygv1iqdrXFAS5J7FfiQcFVpqxHRSAaDuNBvF5H7TvMMAwoyfNuW6o6E3xaFasA8j41iBvt1zNSiMeSLw7iJocnD",
  "key22": "3Ft5tKExfWYqxq4Vmr6rRiUyb2ThmZcAt8PTpX1VivvDKRpb9ZAxW62hviHBi8jpcDT5t1EE91x8mqF8KAfvZhbR",
  "key23": "5BksYZwq4NM17WVz1o1WhRPPBKbrJMmWChks5umJYwh1DUN9gmauZXL7KQpUxgSDXP3Ld214AS4Z6xgXHmzhaxg4",
  "key24": "szJTQZ1SPtCLyE4fWERH4P8ZUsXzH5NqKMxqRi3oK4sLTAJxhbXnCtPY2bEGSX5BbRqQdQ8X8GcMaCx9AvRUdDD",
  "key25": "Pk9FYMsMnhoWKC3pbB8Xe9ixv6j46rq3fmsTZn3iK8adWLWWCbHJfnMoD9J2dnhJDcByKfNC7thxvLxBhTHWJB6",
  "key26": "27aiiCFih7N4rpCwFApYLa2iYUGCCCtJoQYWqZng2spWRpfACgLCphoNyrMH5LqH8cqka1M86EaRtwfFeCa8xzgC",
  "key27": "5npYsr7nZ4c21oEB5mEkvyzUrethDF6KndNtDSGpDLu6oD5eqkLodH7MWHAmNW7vLdz3KandiN5vZTWVVaT1QoJi",
  "key28": "3i3VHxZbJVD7WuJi7z5yHywwU17qhd3p2TY6ZjCgU3V9Q7xfN92S63y9MufPL66W3v1yzTmDbGvehLGy9YPBNjsz",
  "key29": "64dpJB7Lczc7FCRf18XaB5jdvvwrXWFJRhhsonRDBm6EkwCsDHKUaKvb3i5L6tMDJ6daFBKDEib7ZbCiqh8Hh3rr",
  "key30": "2aSXZWNM6jNLA4vLVgFVxiaBwtNYEKcTBGmiKJvEPw9djxeb4o9SYdMvRA78VcHqCmyYPNum7bCqKsiQyQNjE9Z6",
  "key31": "hagAg3aHMwTQ5At3DRyF7UaVyKaT8roQJ2XUgSjDLt7fbBbwzFZWDmwPetvPdgKq3GAHGAnv9hFgEVJgiNmGo7q",
  "key32": "3mJGaRud7jC9neAEcZ2gTiJCuLJ3UWP4FWuHV4qJRKz5fj9GLVCvz7DBWgFutuoVooheZZxWTVKZbiEzmW4DS5yD",
  "key33": "56Fpk5rR9QeupuBoqiMmTZnC9GBnDGgTJGfLJ3ZoTD3cyFkzLsfRjMV6BLvpzb3ML4bebZ3RZU29qCypuvCpwFFi",
  "key34": "2M4wd9jY7zj7yArrgDxY3LMbMLdYoHGAmxBzt3RCvfCtFrPx2zDwBfPpyeRsSTrXJZns59oX19TLiXsxDZVvbvy6",
  "key35": "4q3MstbCFvYtDWVQFC1Hp7tQFmojuwpArrQSELh5B4fbLg6jDJgWjbVhWPBjBjN9g3TCV7ASXL9rZ1VSFD2pya1R",
  "key36": "4dLcKpR5tw876PW11PLcsL1zwoo3BRZ3bu5FVZNbUYgyPstywq8krSRf5r2MdLBQ9PdLz7DxrvTYZtpWZBwFqqYy",
  "key37": "5LJ7w83w6RgBzJkqghoGPuBsrtLXWEimAyHUMqaJPDrcVXesT5JwX4bA1XhvvaiVfUXyk6Tq3J9ZAiiuoaKwkFZR",
  "key38": "4dwiZKwfV4ACi6hzBAdJVTGLrtyBADZG6zaDjke9pTvv6KDbrhVob7P2MQzU3n5DFXEPqV6mruXhZuckZ1gS2R1E",
  "key39": "2aqABcxo5VZmvDBwQdAY563b8dcWbdqbGr9TpBnykNXiygwyKH5tx8jSNud2hpRFodsq5LrhfHsuteQLMMye87wk"
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
