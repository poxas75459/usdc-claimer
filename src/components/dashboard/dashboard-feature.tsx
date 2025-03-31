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
    "3Bc9bDsV6TNbGgyvhVTfQ4veb75n3ZNs17qmdjz9ZZMT2HGBUReXLGf3XRZWFurKRbk7kUhYvKHTce8axaLwSzg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y4TNTLrBybRqBeTwMZsd2AqTsAESXz9sBMMdWJq5BD23SLkVP8chbDMPxrcL9fhDriwBvVCLdhW4RL9LkfSfrVj",
  "key1": "4krhvgGAkV94n5iCfWesJf8ToWgK2LLP6w28ejCimFWXRSyyq8rDjZi8n15w1fsN8P5rypTyL3gLw8fLFWtLrGUE",
  "key2": "28NCSoEP7wdfnng5jDEqNT619caPj4ms6J73MJq4sNacgzZsqKUKBhhcasegSARVwhUSG2KyfSbs3SbgYr653wvV",
  "key3": "d4nRNDimBk6Mae5bdhruagNqe1CeeQQGWLApoXV3tZCouWWy8Um94tdbAKi4X7ZxbeznmPXLVara1JgVEpSBFNy",
  "key4": "5AxQTcEKeo519Gwo1RwWgxeJTZDBopGRjK71fZjeVESPdHxLsgXHxewvrZLBdUxYDj7f6yB9hZEUsN7kKGHbcesP",
  "key5": "5nAX286Tkt9C4UnEarRrn21eJnMyw2ETMnbjw65uGqqiM98RMoeDG7EMs61H8pQ7RCDkKuyD7mrgqADzKHdeH4fd",
  "key6": "35Fi2TuDCDtNQejoD5vrcMoqEem3myxdBRYq3bbYfbAsmUd6PcyhaXEm3FG6ZbxBNCEi1D1SH7FSqij3wa7XJKKP",
  "key7": "2Em86tJiE6Wt2kVhBhV1tYEZTi5Pehcc7mWJP4MFom244DtJLZT1MA8PnhPLVGtXGzgH783fAa6xJufUDQWgvQku",
  "key8": "RdA6PrkLauB2WQoaHAXA7XNGB182sDbe3huXBefwxCHHMe8yictPayG3nvYyuxdUkdkB1myqJEPy88Sdz8AVnHU",
  "key9": "5Jrbqo4yoQfsqzj5SAkWZ17S9JS3n7gdgB5hVU4hUvLdCieT5tjejaWosDHTiyMpvFcHpP1uzc9izjrbpsCzTcZG",
  "key10": "2oaDhCYLg6arphm1fwdxWZmS2GQdg6csu6E1KaBwNqXwwvvYnitGAa3TM81qHhwoayrSEzFMz3dtLWxi1zDKiT8y",
  "key11": "5f54R54NRQczCrLvfMBZqYjJHEmm71mCLmxsujPX3K5UHACDLwxUE3GqciLGhyERigXcPe4MHgpZXwb22FbuDnaf",
  "key12": "4Q86u4H6AePkuxAKuk9eSJiDkoyqzcfZ8ZBZyEa6pFAEdYQnebAZWtc9wkdm4CX9tTCpWQvGFj9uyb6bMG8oCnd3",
  "key13": "2EHq6JFSZ8EgszMP35FqCA7oeyXjRTMUY9waNXgBFzfZJEgV6UyJVwH8BtetgFTboPsQpJkHjxgnQFAJairJgMpx",
  "key14": "4zRfT3v5vT6tjZbaD5Zaz9NQf99XV8yFHru7z3SoEg3HJJQRgBQdYUtFtZpdrxFYy6aZSxCenuhjpKQicTUGU3Am",
  "key15": "2fUHz2HBAqjkgNpysKpVa61co5TV7CCYFsFATdGcrq1uhB7ZgEy58Z3jj1waE7bY1a8ZfFMGiYiEcguDDVcYQZyp",
  "key16": "3yZtWBCfApaRyWUxBEK88A3zpz9dq9XeHt5zvoHZJJjaCqS8nanomfDzS2XNqm6rrGqs3rn5MGCCftPE6KhKm8v7",
  "key17": "3TGnqwtfxyQYs5nhCLpKK4EJGbRicSvGLhkYCL3XRgHB19hvt2EoaALF9P4MdEhwQtGsQdvzykfKjk54zcCNkXKJ",
  "key18": "2paYBXmtNkbYgF6QnYMk6Jqfc2bBMWxutaSdkfruLiEzHQbGjeQfHtv4WbukDiF73N8R5gG216mnKT9Qc917KKWj",
  "key19": "Jripr1ssnBngp4WPBqxBd391UM2Dzeg5p21qXoBoVgvPS33peoi3mxDLJWwagSuSbZvHXgBneyjmWQ1ReaKp8Xc",
  "key20": "3swtyyNPScxVZ5hsx6UzWHCNErkkFUTG2st1m8SPXyDooo2kTGXJiHMdTYV74bnM6p2Rvftxh8gTgtEn1KFWB1Nc",
  "key21": "5KucFrzoG25X8McPRPv7LdrsVHNtdtueBMaQYcZpyPvv9pQHybSkeJYYnzCYRDfBzNNdYa3cnEnT39S39CVtLKsY",
  "key22": "qKjdxSj3fMGbM5ktfFKeJqZoYq4KkpZ46sy31BC1VLfyxwVMPw4gVqQrd4CMXWmL1quTCKZ8TS6b8qbnqthr8Nk",
  "key23": "4Ww7g3r8m6wwpSK1eS8rExdqZysryvzdAFRsiGs9uQdVnPB6vtntXZeLM1ra2qpWxvaTb4skFT1q6XXXZmy97qiZ",
  "key24": "3EHdsvuKqjMdGCibGSuD8gew6dUeLwyisnk2WxLn2KAFNuRGbH88cZuBjKwBnu3L4DcgxdV2kQJhsiayDSvVkviV",
  "key25": "2GKYhYzqgj64rP54NMLETPETcAnuLUCyJMmw5DvnWSPvUcfpDXWfyZzEqJpvTWHSYFMUm514RxjBCsnxoRoDGr57",
  "key26": "DzsHMoSRLvou2CqHT4kNv2umd1VDfH8j3H35FhTBGdukp3tULpJnsvDRHdZr43uDQL5CqWVnNsH6LvysLa9Q8wL",
  "key27": "nchRNQ3UETEMQ3V9Va8jAJ3axHhwhYTkdPN1EgiB5aaojqoHfJAvH62fz4e7JgfNc9hwYmcPsyj5XA53YkX429Z",
  "key28": "5V1GPj87UQo6mGjR2fPhGP7vmxYCbtqwSK8mt9Tm57fPsJmyo6XetYyyNQZ23UReQzdwgUQMGA6dZfMVp9YJ9dZo",
  "key29": "5xEsNsf4tL5Tkut9fRuRCigDtjuG2dB5B7XLtUdwX71u5HvnNYjEKgUuJWk3Y3KyjoCKNz7nEKUxu5Xc6zGTLuit",
  "key30": "3g1UqzHZR3oYohNtTwrMfopHJMKdYNTvES3rL5Am9fudDrwnUvg9AEWzrr4FP4S19ef9McC1vYKcAZdpTRX3sz2Y",
  "key31": "3WhpHuokzwvns2Egq8ZofBXAvF6Bc6XHd5HAaMeNyY8i6781igrSq1DcBpDfLZaLwnAeFVfW99NkFuqvPhJ4dnKV"
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
