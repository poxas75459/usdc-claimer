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
    "ctYGWStj1a1bcN92f3rK69SYqCHut6Tkv1pKcbWVVAoBRWMYrKTrre2Qo9z5abD1CFMvGAKDSdPQrz9oaWpqKLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zL7pgZpwxD2CKHgw5zq6w6h3LBd4H9Pw7EVTLxr5WZjaAnr5LmBGcWmXmJgwwCCA1jXd5NexSQUrV19tzrJtcgJ",
  "key1": "UcR9WM1Za3Rx7bmGekP5qLP9raMSy3g2j5FbUgjaTenpXmaCfvUNptcDY7Afeg7bpKC4i7bDb3G4airmb2HLYwe",
  "key2": "37uXVPQrJg8HL2gmXsHCj4dT8mMtoa8PbjRSAdGePQTLP54F6n4xsQBi6Tf8Z1NEfr7pgpNWicavauGvk8HTw5AD",
  "key3": "4r7RGSTJTQf8cyn9FgdHPydhx4L25VjbDYouQvRFvHZhQtGeipj8KifpEN8AbgFn88CCSUtNhMjgkWdJuBg2C7L9",
  "key4": "2tMJyxS7BmDBZa5t41KPRgj4XQ3x3qG2HCackY5pwSoHPtBmQEsCCgWk8hAoT1qmDf8M7Ra7EreZ5916r8CyYhC7",
  "key5": "Z27jk1geWK346b5Q6cBeivHDvbqUt7qLCSnbjuqkTCtLQWQJ7GvJD2wNULqsvsYkkdDpr9sbX9ESRMMNtEgk1XD",
  "key6": "2CQtMZruJHaK2S5TdmbP4sxyewnCnj1T1sdexBubTZUb21YWdwBYTLbL1ARh9KLMnY12391z77tvx4EFX9uj8jAx",
  "key7": "hYTZ9sc6T9Yu1U1L9UbX44xHB2eKwnFUtyaaXVUGXGccaRSXuxacKGWQWP2VVUPwXh4kKi27CS21Jqt2ysAyUEo",
  "key8": "itGzxrkTRpVhStm2S49So9CuXCsiTmtyY4rQk6GCWZxrCH5UC5pcsfkG2VUUqUT95MmVaEbpKwWbyFmTjTFDuj7",
  "key9": "3WjoWomCgogaug5CvqURFQM1SaX9KZKtmue5uhXbkiBb7C5U5br2KtfwkHWZFeBQG6Vao6PEEpgwdvnasnd86qQT",
  "key10": "25AQCYzHEZ6TW9cYCAKrjn3Q4ACCjeXQVTzZxCCN52oUuWiNEcmEMYcafPUVo2EgTQoWfjQ5QiDLfybrBfqxW5Ug",
  "key11": "5mFpUeTxZ5WaZpyHYxxmWoW3yAHni1zLMFjgrBUoezGpXWQp8CtAiimzfUNteKDp3Jc9129pby3sx2nRhPcgBpCE",
  "key12": "3KbUEFrSjmRzxYZQUWvtAV1xvM3QptzD9nEpYn4aspMvy1wgpZNsm2BAoZEkUiq1VBFqaC6pUPpHGo9j6CM2rw4R",
  "key13": "2sEtNgpDQtWdHFkPzZ6ivpLQWzpA2YLs5inpRTNhM8MFtuLEWR3EAcmoc3MWfYzRjKovsdpLN7Jd4hJTnBUCUPTc",
  "key14": "3DxwGtySN4jL1Qqvw8HYNu6qrF9FhgZ9g5DLWgoAudgynAhDiush6GMQyMEhchwWJTeMPdJ3M8ugYQ5sV13atSmz",
  "key15": "5eAtLdoV6sytMULL6MSpZZFibZL8YPZoGVcnEnQYgAbKnRpZgSAjMjTTfVzPTfwMgUUEnkMvE2qVNBhyUq3PTEd",
  "key16": "4SMj2WsZqUaQYnQ6nMxZN2BA2C2vvbfH84KrW6GV5uvDNniG8TEWJV8kwPgd8eBbQ6Y9DyRrXvbipYNVyvr51v9q",
  "key17": "4vaVYrTL4ufNez9hofi3558hDDww7qZdmb5mfPid8831UZQTSCccxxzMf8TE9QG5GWRwHBMH7vCAqM9ijLcvn4iC",
  "key18": "5pei4FmntRKvR2etSoBmgDvut1mCC1hXWRfL1BDyjj3pGNA2obVYJxcGzMQmgoaGfpkox2iKQnrdSnS6SEVXiKFs",
  "key19": "2Jr22yBnCV2zRskA71gZk41R53kz678icbz2ggqh1zAN9WdgYkCsMk924spSv8Gmy1GmMdhx3E4CXjg4WaUDFJV5",
  "key20": "65jRaka7tztcTSCie9SAnkbdEJS4hPBnFurVqgippzhHao4fzg97eBT4XVCGXYDiPsD6ZRiGmiGAUaTPZMB8tYtg",
  "key21": "2cbn44QKJaPBnSpKCthHLNQTf2VomGWqjikP5jhwgm43cQNfWEymjsaZVqb9bwmMbQ1ybq5dkFFBms7Noc9nWXiT",
  "key22": "3LE4vffxMFCXZLbcqnPAddk4D4QrcsoXqocHCBonWMrryVoNV5epsGJ6Ygw1Vu3qo3evzcMEbQojjDw67UPCPv26",
  "key23": "4BhY3G3SXDpvkUMitsonqmg8Fas3spv6iuHi6eKj2f6LAhq2AG3MxSEeQQDVZDtxesqQCDhYg3EajysC3XCoorsN",
  "key24": "2gz2vVcKUPvw7HutgX9Adn1SQnv1eYqvghYyEWSZRmY82LrRZTe2DDoQx5Pq8JUfBzEcd73cbBd8rU8kgTj2zhmm",
  "key25": "4dJw8rdEUUEiuHg5DbLxfaTve6Ri31xxUj2vND8ZvCDVG8uAQvHLpiLxtuzvQLp2Q2LACLMrfS7nwvPizmTcsz8b",
  "key26": "2pPs24aVuKNr9fFEQsQYWzm1Zd34bRvvKSRDoiykVWXum3e7PQ1ukB1NW4mVtXTMo3BkJ83Vzj4BVawhp5HuGcfD",
  "key27": "23SpdwnBtb6cPR9JhN5hwjdz6d4aHjUsWWjq9VknBPR2NPdm7WxiDSeA8mSDpqyPtx8p3iSAaGcgDdCe76iiSPoq",
  "key28": "5Hpj4YpenXracbAe9VQvEHVyeu1znrsQUaixPcuLgujw13KrHP72TE48ojWR8Y8Uv9aqoVCqTGhA1kfV4WD2DJhZ",
  "key29": "4AAW67QHfdy8u7PCB8YBiskTkjNMzjcGsX5GVgqr9RtKQntJdQ75fn8mWbZPG7ahg97WKGxsB2F1RcGsYQ6HH98q",
  "key30": "4TUJ4gs1yTns5MQMVWA6e3jjSzHMZkQNfhjWjrHv7BvTBsuyNEHnrtgYxhR1vT6xLaD2ZL3ev4VTWVEeMFcWPJMj",
  "key31": "5CvbxqUJ7vSVCJKVy7Z93DaGDoF2qtsMWmi5tVn88HnV7LWjAKPpjCpbXd5n2veQCcjjUjYMuYy7MxjWa7JyQHnG",
  "key32": "47kEL9qNJHbfkayAkzCghVnicE6dfdVxBHnaowCtjtcAadHeMU9irWZCw9w5Fh9m7fxJjdjJnCPN4uGNXBBnwm4R",
  "key33": "qMnGQgjSM1cwrcbPJK66n8mcBX8gAjwEZBMQxQefidN6Hk7pBNBvFUX1fBYtZs3AyPqPA22Szoi9KnDhNTARd6t",
  "key34": "5Y3Lzo5bHqBDTnRVevKgkkr1G21yC3AtGyKgQvTzCbHug82HvAf6QwxvzJmHujKqaTxZzrFgmMenJMpWimfLrTP"
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
