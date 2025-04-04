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
    "48dXivBRTLkrK4acJBcgE1XbLx6MASV2a9NJLmAtziGwzBXp9n6oLhgEcovjrcTEp3AuJgwfLxtLN3SjE3r3EM6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42HxMosK2dx7wPYnydJemRrGpVqogTG3GNf87WUQKRxj6irLWiVcuNNbQ5YvBr9q7ACW3pBJ2rXsb7nn6zQssWBd",
  "key1": "4NHV8Qk4KmmzfS7RUYt8NfGnorDwKnHv9RbMMgTzd38xK8r1viuDVzQGdLduDdyAK453bcGhd6cZxEDiZP4gC6GY",
  "key2": "2xVF5uVBqAC64DArNL2xEgjDeKmPRvH92W4doZ48g2NJnSJstkq4Mc7MH8XDgameQzMAoZtp4AQSsUPwoQ7BDgCq",
  "key3": "3dNJHhX4wNsh73caUBx8iz52eMoWKqXKPngg1MSWuyQsT3Lr1qZkUcE15G4QakV4azXcHhia3rLV8sMZZCPxgoin",
  "key4": "5at4o7AgCUYGXYq5Hrv5SFtrJnEjZQJ5UyZdWV6Mu9oAQioNMPxu4ZWJqKYvL7sTiquVZhAcRQhUxi3bu4x84yn4",
  "key5": "5tZHiHkrSLzRKb4ztSrTnPeuNLqxanapXZjT2kCXEy5jYKFoXAP4wadKmJw5ea9CD41yoWqvYWuufmX9bxKfTBWX",
  "key6": "3bqoHR3F8HcBzny6QftYMSRFfytM5kVJXVm8urmV9dUyYvUbGhuSAA2ZsMTkpii21HeKG7xwgCXJRbob5kMPPEm2",
  "key7": "LSy2HsZ9eWRJRD86BfpSrp3eqjmFLBA7QRy2rpZBEgDZ9U6rfc8uf1caRznNYu58osULuxSiPJpWCWumAv2E7WM",
  "key8": "3jS96U3jNAY2Zn6igRyoJ3bkDUbciftCuvQwjUVCTqTdtUHniE2CPotKwYUYX1qNMRYcXQx9hK4AHPJbEtcjWC7b",
  "key9": "A9DWYKKNAhWuDyStVvLDLgLFgAAnFVvnXuiuTX4rKg7Jyj8ux4Zp8LpL9vKHEQ9hZJt5Q9SZ2skSB8tvh875o5j",
  "key10": "2JVBLpCSdqEXfW4jbRopNyFGNMDvwhk1St3b7QijhoxGjurpyNe6YJgjKFykmw1TLN4a9eAs4TBdhT3hDBM2XUAx",
  "key11": "4STTDfCduzUb7xnDGZYEEcwmtFYEN3szpshjtGgkvcbyD8LUd8ZNy73gDdCZekCKYP77jWRm5ARgLrocXSRZvsqu",
  "key12": "5kR4xATicf8L3ajUBPXWg47XVPGmgMUQhSzL6x6zuPf8ujxxoqPA68xoXeJNRdYnoBDQAzu3RbEyzy1RJYtyEEYs",
  "key13": "47FJH5kw3B2JNEjsrD1MVduUz2rZDccvTZ8JDhyvN4FbTrzfi2WzyoeU53sdXR88aikuz2GLN7fvYzbHkE6DggDy",
  "key14": "4HcrtFifPn9bBoJHgmcbUVTgAJ5GrZmeXR1JsHDPeGeiRuT5RmCPKga4ECds1nkREMfZwusALU4jPigGEhhyWJB3",
  "key15": "tjY6wYD9WLACY2N9JdeUqe2bgZvXkPEbnfFTr5dvkcSsG9mfKiEbcokfTGQinxWtkKBkD9ReB1ZWgHr5T6LXjuj",
  "key16": "4uqYwVW5nruw27NWGjTJ2fwpRgZz1SUa888bSH8AAc5JF5rpGf9q9kAUPVBsHGfFnfvCrtwqjccF3w2Tw7hWja7r",
  "key17": "66FhYSrRmzVrgnz5oMQYNby1A5Ntb3ey6x14X3EFMj668Wkd4b45TPtf4FW93uPjNvxP6tTBnvJPgZ81Jo9afX8i",
  "key18": "3Bekbr2eqap6xLVTbESEsdNCkikmG7KZSRtXE7Ae1smo1jujJuyK2NA1CNUvvMSseHjiZUxuAT4jqny2NgTY7ZqM",
  "key19": "3M9QLKYbsL2ocmk5zRjxpmBYeJ8WYaa6q18yxYCSvEmHJS5Thxj4fC88fW3sPoJ1JPqAwu6X4v2JNTQCjfaxEuzC",
  "key20": "3dbeMxHvFN2kqfKfnFsSfrGTdHuDjedrEfURLtzQ1zSVtrzczTD8RfhzTLjqDriivcuEM9gWevqMsAP2aenvtM2X",
  "key21": "4Tb5EwCYfJqzSBmTGMfGisr9VV5AaZNSf9HEAtyMr2NECbTiGxQYxobvDcWcpHCDyhezXCmst72oBBrzdPW9ypAN",
  "key22": "3gaJCXvMwhihgzqaGwTMXfmwBts9DfpkR5djC8Yp7dCXNCcHhRE7Rrn446VwcxjqSyA3F8xYkY58H1DSsykK8HRR",
  "key23": "2siqegPU7c1LcL7RqiG4KHJVaKBHavafnApC66gcvMgfnWT7NfVLCrKmjsuhC8MP2dbfydCyeSMrHqYQxFQ4qiv7",
  "key24": "RCaSefDVsFhwJ4mQWnahcpcKkxcXGJgc4hyJCqefEw6tJoWqaAyhqC6UhpirLqK66ZMTT4soDxrAUvrAY8R2jLR",
  "key25": "y1azdniMTy1vjeTi68rjptF54YvBwQxcvWvvnzUtitXCxpjC4c2tqFGqsmwo6F61sudz7kPjkwbomvrakmSDusk",
  "key26": "5VdYFHQNwqNPJc1kv5P8NKDTydD71kXxh5EwrFZDEZUtX1AHhWxQ4vc93YmtnLR75oWu7n6dbRfy5sWG5BhfFfZr",
  "key27": "UQGfoS27uNtZipuaeSXGP7ukPTLKjc9NTv98DMHNWrY9SLqGV4ut9KjJMNCNLosDwguLJajjxJBP63EHnNB65ee",
  "key28": "38ADTVgSzSAta4N5ZJLvg7nx8erXVdZizaah4LZtDH1VQw7P387ytPsDNGF4Ma8nNZeP6jcjTeLw4DMg2vumyjDR",
  "key29": "3cCj2ywDmVYYqM4nCVB4dzpubtvJud4L5QKVMDgJbRtSH9qgEmCNgHe8ztsADqu8DQ9hfaRBWCkjHKVFPsq8W7eU",
  "key30": "2eyTs3is5wHve6ecM8P2NkTo4u3Z7e67pZFpttrtmAuEnQwxZN8ZMFKg4Ft7gc9nFeQnMRjooeCP4NMMyNPRwDnp",
  "key31": "375CireP6ZacLExFNMdtbxaDoYufYbZdtvnvSACYyTdWE17TnwxyUkHYE7EBE546mpyPGrjEc67rnFoLZm9hcDoZ",
  "key32": "r2EXYSxZACi3xzuraSevei3m9jSBdnvun7w4vFQGsyLQSmmaSHq32sBV3dQrnr7QJuzHLfo8bExZ2yJAReVux1L",
  "key33": "3jywYWDfD44gDRCqvMx34ALF9NEe72Ya9uVPw7HjPattBDmJDjtaciA73ybM44BR1vA3VbYrPFsx75g5wvRhpb9n",
  "key34": "bq8FsuHds9N1UVHP88Z6A4Y6seHrAkX3Q11vyQyZKdHjgzXyQdvDAAuYop9iKSUeazvMx8HDR57Pb4gPoFmAQGU",
  "key35": "5tiNjgFA8h7dbGtrU7BzT8eA5y8gEpW8bJCeK54cbUV2tKUFEKSpjiPCsCZKBjn7uyNAR9CuBpNtU89no7aTSzdi",
  "key36": "2q8AEP79ZV7kQEKdJcgc93UCL9xCDviCa5A44TuBUAvVFuvhEJMfb2oX62KW9epVW9brczvUtmVJuAX8Ge7kt3qV",
  "key37": "5sG1BqAiWGRqMLuUdLZnXFY4DgxrtLZJTBvxzGuUkvNSYu2zqQ41UZ5ZMcmMJkB2gKt79M2bBvCLFNwGAz7sTQcN",
  "key38": "3yjdG7rMtLRsjcjN9pNr51i5D5ystRR5uJJS8gvRWEmsDshZyVMdZQS3NH2JFpALNRa5fjRQrC5CffLZyGkaAMsi",
  "key39": "2jfAMauBHv9pi5eEvAG8U6uRfEhL9j1LecJdUKBVyWjP9YuAwJdLduMQbZpxk6yev2DSoCDsfTtHt9NzzAm7GEtu"
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
