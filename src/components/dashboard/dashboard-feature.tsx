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
    "LFxpGVCf94e56bkMQERocDkvfe972DqoctwvSEsCTZJY2isX5QtuxHCVnjbvMCjqte5kec58TXaenbMh6Gvn1Jc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4maL5rpLdAM1hrovNBkqaHwXX9iDZN4KDQcEiMA7XwUCQgrse8M1g6EBLVK6T6tyFys3PD9szr7j2vJ3xAkWmnee",
  "key1": "5qCBNG8mTAXhm6taLeQKTPGroMaadupMe1B7EALLKfsHxh8xz7G18Aizdd7TVnhSh358zEK5qPgGvKHWFgGktpx",
  "key2": "3p1GSedvJc2TQfeBjCysESTVgVjC46JWUvBGghETMEuBh6ovDahezYgVsmJ2RZGEoNgEjoWX8UTJMd5Uje2sftmN",
  "key3": "2pnP9STcHMWMUNyZpqDJkB64FrKRXJxoM35HbrVkrybdyZ2uczPtoKwcgYwXw2Bv1Zw7CsYJzJvkJKxhh6ahpwhN",
  "key4": "4LrHiRT9JeoQRFR3owAxvJ4Qn67xiGtTgjv6D2uMfLyxmykG4WqREaNXhFCQK1fbceNHTssYhVheNEMHoWrjipoL",
  "key5": "4ZEG6Ug5MPTgWDA3CQ2VCRKwXWyS1ZyX63k1Zpf332Z9eLUMiztjnBpVdWDFWSeWYXBfyvc5GczMiS7tRc5GH7YA",
  "key6": "UWCPWTuvuaNsoPXmVQybhyFJHSRVGLyo9XvPVMzQScvMyZY6q3ZAHbttUFgHeWVPHW3zrop8eze7LTB7Exp9i4F",
  "key7": "22Z4FjvJEAQ1kjAxAhLQVc2bviUAvNME4EVyuHLzTPkQK4ACE6NSyDe6MJp9JvruGa5WBZMa9fM4msoHKjFLTNKJ",
  "key8": "46u2q2Ytgh6aPW49vyPSiXHZ7vwoARyYBeaSYQnZ1KbAgM4NjALFxrfCamC7BxWgMaZiUXHdyA2bVfc9yVdpb87b",
  "key9": "5ANCdeR4zAhc9dGEP584u8V6q3bk9oexFJcGU4LNthCCbiQhrDnF1SKVfycZWxMe9NnYc8L88nw7iUqnisnVN7GA",
  "key10": "ESnCwFM5EurwwMXhYeLiCL1nvcPaAxQkD74L8HUs2wesdEh5D7QLH7Tu1znqdwovg68Lq4E2XeaaeHxFLkUGKUE",
  "key11": "42r4hTASspUfeiwTaK1pDMhxVDnwPPvaXF9Q2WJYbwDYX9DkhqKxHBWhzyyFcpv3A7eC4TeANZjyTwWKpT3uahqn",
  "key12": "3LQsRAuc3r2h7k3fNaxqv9MJQry2BVGcnfBFybvvGDXqx7PcmBQZNVBpkmy8uM32J23X9aJbzqiXUZjuZQh6sgib",
  "key13": "C8KcktCaB4oqabb2SRrVwEVM6NcrcN7W3aga95iEhJLAU5AhvCEhLwyYy6UPhn6quSvYreHmEX3ak36yVt3YuS7",
  "key14": "3Eyqkntko1Mvc93JLYdcSu1eaSyghBtMWNCJso8PU4XAZF2kGbjcbhPq2JCmP9X4oC4HdJoo9p4HBfems9h6NDHi",
  "key15": "1Z447Au78GgZrJj8RTjcd8DNfzThzFQQabnaK5Xtciay1vmer54aRqs6TcBnHxm3TvofbRgphvGoRBsb7qJvz6L",
  "key16": "3S6BYn6mCNufajKQNZZmNoGckuYY6LFSM13c56GbJZpNEKDb4jt1asfxzj33kboH47Kk8WXFaz9yw7dany7atDsz",
  "key17": "4zFsge5gvRL1wxJqm9iZWKxh5NyLewCNGXR52dT6mGRR2ejGcphHMitYEARRa3xDPatxn9QErRnS3aKFAfe24VE9",
  "key18": "3tMnC1ZhKP94EoDp84AKVYhWgTNTQ45Nfs5k9dc93HMZm35wkUyvwpxjb6euUyemLatimyxbqMP8DabU9dJnHhW",
  "key19": "FW6AcfHTssjG11EzJhp438APJWnqggJaCfdmCDCf9U1AxEqr2rn1sAas2V29L6F6CUXWpWFbp4vdCWhqU4xzHhk",
  "key20": "3QFhvxpEW4FXHK52ap7JvehJRDsun2RTXGtRDgAfJauPwnM8xnC32ZHsFCkcAe1271XQT6kihW8amArdeytRdegg",
  "key21": "j5Jn4L69CdTsNVjwyU2H3z6wHAnjXhZyteq2ARrxjyE7EoDTdtyt7BgEv1k9nqNBB6K53xexsfXrfsFBfntQy1M",
  "key22": "5e6XJhrbJ2rGkSz6W785UodqWnfXGvKGwXPDJY63X6ZkirKLaEaKAMxAV2AfcajsrSyygAFaGBe7FSx5XdMz7BuG",
  "key23": "3ttoWM2EcxX9gwc16XqBU5BWcgzCsZFHtuZ8vw38D2fCB3vaL5Ti8Wdf7RmU1J2ZozTQCY2X19yQNrZCTQVfSM4u",
  "key24": "2i149ouBZbxPCB7C3p7fbZVQ7nrGcn35wSnzBjDDMBxskGybzkWk4mcWww7L37zTp4QsZw5MLr8gkm5upsuMDZkQ",
  "key25": "2wYLmvvSo85St8CxgtkbhXpw2X37GJCY9bid7fzMsXyekPGbiiNeNxAt4bQ8hiLj7M44dFGwkZHsa4nHu5AEm3eZ",
  "key26": "4cXcwEKZb8CWVR6YSedBd7ooYoZCz3WFHkBQCciKLZZJegdiiMJKrRqEKFcvDiKr64QdhgMbRBF76AnuwRkuKdUf",
  "key27": "4WB71cd9sLsjHcq6b3vbyFpLYuR8MR7WUQSQRhDkDwSG9VzpSXDGMLvm6k9CL4zcALcP1Yzs3SdPR3PS4CH6i9Nr",
  "key28": "V46Sx4dnv5iusHJKyJUxj19eW46VZwV5ZbeYjERPEptQ3ni23qnmobCrHQQ8BaW8AQHtqBzGtATqiMufD72pZW5",
  "key29": "3FX8At5qgdpPCgHytQ5XCnL1LcvFSyWYhUTeWdJyKtkQEia4fuyujmETdoYpGfG2Ctm6Z4wHAd3TtzXvbo3NRRJ3",
  "key30": "JEmjyaB9qoUTMh3crVj6rf5NU3GCkmWFsaF3ndaqsyzBaJ9i8ezxFU5vRoV1vNfH3Qtx8jWQrAfjmtU3CPzPeXb",
  "key31": "2L6M1ZL7QrvEV9qf5RwkJopfrbehjLQD24ebNZyZbQVuwwwNPaHeWkXjgSW8zjg6BUbueKTGn7u3ziND6CZr9Aif",
  "key32": "43HjeKjkxPWFYtBLo34uUUUDBrAx9m4YNdi4nkZTKhrkqaAkkVG6Pyhnv2Lw8sdLhWhH4cvHTqG5jmyazhSX6XY",
  "key33": "4EykC4E2mNAUbEzmhtMRvWKQ8FAFtXyUPSaacmyCxbJTiRKTFpEa5Srah53keQQZJLNW54kuT1SS52Lsy7jtfwm9",
  "key34": "57nHAbxmASnKxae1qpyL4yVxcfWUs7oCzRht96iRtPbjkRWFygfiVtw6AEHCrkLVXxaRcQy7oYHMRBC8dDjowaa1",
  "key35": "4TcWfnNUPM7ZRPTv1USCRRKoPZydx6hBWdzoZa3gdwR3vUyDvJiYHqYaCjZXdegYPjZTXHapFHhkesKetEkxtHP9",
  "key36": "5BwVBWdzDrVKBWAv21vbzfAK7wQ8gLajbbtzUZR8eKB5kXyqd6L2oYGbRxJiXcHyW5KDt5ByD4NuHd6aZozjJcEK",
  "key37": "3gTd5jPKaF9Jwkmdf1JsZDaiRR6AkwTBQahToewBFD7PcRDwJMTxi2DGWQjwuxW9m5kvwciNubEiNAnELey1ZAqQ",
  "key38": "EMF1DjtkShci2xNbcNvKtgQYmSwMGjF8hZt1pvnaqKbniK2dYqM9oAhDFehRLr9ZLKjLzgP5QPCXevv22m1iu15",
  "key39": "56xXHimfKqxrFk79CybKYW5Lv4pvKcKCMSGV8DhV9ie4fMhxwrTPqcgCS4KMb5ZttHFm1QyAo76BoLVsFqkexEpo",
  "key40": "3qfc9nzDQY9tgHPBSffLm3z8ETZrPtPtu5gZbewGaEDujBtBbor1uREXTqFJiXscx98NwFjJyGvfDBN6tR1gusf7",
  "key41": "5jSU11mtdpjT5r2U7TjSSd7aExu4m6GBAseqaaSx284TtvCoahT8d9CHJ7K7bQUC5LWXTnm4Qcom6Zjwt9mRrF1Y",
  "key42": "cdU6jX6ZWWHFuE6LRzyzML3HqEEZi9bjpgLVZErjoECrZYNHom8WDdGukejGyVrzrbjC4vsrUqT86RF7md2HA2m",
  "key43": "5eTrMzWxv4AutRHkc1EAQ4kfUS4GiC81ep2PByuCx9MuT8t5XhEzZEnxsSBogtouUR7rhcfYwKod1jgvmL6HVKyr",
  "key44": "4SmEmnTnY5ckC4m5WwQa5XFWhUBrS3DTLsLp8oD3kJSvUnsdTjZmZaTCiyRSKfLk2NxZVu8BmUXJ2yF51jxauHud",
  "key45": "2ppLyigHHPVB1avXLKKEXtNZZf9DgopfAViPqMdwKdmqhLwu7EefVTxxGSKRMHhGpxoJRcGdUirLcAGsagrLnEKt",
  "key46": "NNASri6hWLcHCH8AgJ3fXHB4p1C2PJjivJF1HPVHjrnG48ic427KcAyjhE66xUcdhZ3iqp9KmgddG79yu8hwdbc"
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
