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
    "5VTWt84fb3LjppUw3SrBUNsGae5zsVjcJJXawUtorymtJr4czNzoAtedgNZ5jMBdDg2vz5eLtkdLYDstDx2iskKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s4kvFUKyGz5iGojAzWbGUuaBw9xHJK9zsrEfZSjzWafRb4AjKGLXBG5j4Zis4FKdHCae8swf1aC6w2BfrvvEQ2d",
  "key1": "33Z4U9YLUPRsfrPqQyoAhDzafBCryuXuAKKZ8EPoyQ7NH7AgDNsdkrhW1NCb4TxK2zcntSUTRXn3cWRXe96RHZZh",
  "key2": "4812aH2bmSSGp6yMGAaupFMSPpPuiPcYm6vi7XuRXs2PS8U7Ht9aG7RxsoegMhSpkToZ8utYchLdNBd3VYZA4aNU",
  "key3": "5WDnAdTpw6vZpBASZHMpSueLUQYUXbWyKHzZKzbYU5BSaJ2xtfaAoQFwK6HYTT9vMuWgcft1nNhYEVgJbnikYSjq",
  "key4": "4vZyndKNA6YZCSpULm4Hx19rciGbqiNvMxixtswMs5iSRtoW5izGwrifPnKmnrQdPfBkiabahYvn2i8mfqMV4z21",
  "key5": "i9eUGJCMSJprNksQuEbCsHYceLx4td4QK84gczzHmM51mnHJfnJZuxFoHeq7tT1E3o71di5oNM8s5fhoBddsNkk",
  "key6": "484UiJWCqMsZqSHgAGbFhxpDtrE3FmaqxBdjv1UYVSWLa7qQ3M85Fjx8tcFWyUt6FgSjSSbkbWm6AbinVDsgexj2",
  "key7": "3cTV4Rj4L4aYXvdnXjubR4aVq9JTQNSTNMjq4ytanyj2C1HfrqZH96rqtWQq1fFC5Exwr34vX75U1qj4RtrxZ9i",
  "key8": "5ws3YsoGYgu3eriqLuwLBsxVWx5PrBexzcmnKddd8KqS6CWn2PyAKLigm3Di8e7JBYUVwcT27vyxKeiWYX7urVgL",
  "key9": "4rD5HFUnFdLFrrJAo2bdzobj6RpMNp5XKiFgPPnCZ1rVnt5M9oLyHcv2ALyU6gu854EHqBzVN99Z1PZFHwbvAW8G",
  "key10": "5k2EMVps627XWUVPSuep2DSxUThWoCUwEapZZ1vmxJ1KgzKeRV1s8v5SuVFq7BHKide5qYFH47evaK71S64R8Kbt",
  "key11": "75NDVGLMWhvguvVtjq7PePiSaGmQhXjFrCBZNAhzajt59PfRmwKdBrK3ADMQCrsEH4PjnR17QmpuohCJ36tF2dz",
  "key12": "28xWujfLa91o2jdsguHD5y4tWx2iqs8jYrXRwirH8KmKkFr96g5rqqVszMHiziGoa8RkkjRv6oByCRnVahsuYJKJ",
  "key13": "2GqYjtQPbvWaKaJLc6F9v5FmFcVoaLxXchwiDY2249PtVfttYy3RnSmUSaaBWXdcukXvaxtXz7MLC39s5hSdW6ki",
  "key14": "u6HUSCq8md6qpFgQhkSuVPcoX3X24RUofg36WJu47Mm3xZJV54phSKiy89MBJPso4A2yduKbAFBG1a3cNUNjJnR",
  "key15": "2Cc5aLfXg8a37rnCyXrSFiFJAdHcxzYjw5qoYYZigyNcMnRF5u4sXdAPngPb7veLkxff5Qg2zCs2mkxAhDUpUgPZ",
  "key16": "AKvtF31isDqKawL5gbLp6krfJGBktckCJqEBjHfZYQHCuq562pbj67f6Q51umJpaW3RikuLApHDDZcMWqiC6CJb",
  "key17": "3bDeZPGCxeqLMaLSQ6RLWPnjo9fqWnJsYZghNJfMbKJ4ktqGUnCdXbWWshN3KgxGNPdBJubYE4Pem8ZLy6CaWAzL",
  "key18": "2L5Dm8pMfM5SAD3mYPjj7zAXCm6eCVghyrRCFn6CB4SUH7fc7HoQsGDHEsH72WFCU2gpJ9YSMHEGPHn7q2jnhHoo",
  "key19": "5bbzWRkQsrAm5eawYzzYDHMhd5u58J5yF6BdvqfD6VGgzE4Sn8xiVrqQmavHjoSMy6J3jycMM3SyKAxv4mWZuase",
  "key20": "5uPeqGMs1iub4KY9ot1jKGbQ8tafk3iEnQUj9nVJMY6beMQJF1yRSiEr8zwPJnFAZAC1PcfRjU4MTzJgdeH27b8q",
  "key21": "3y1i6xisyYh5bE8ZuPch74oWEkCPBFtwxRDkWSESL1kcRZ6eZvFBAJS5LAZ2BLsRJ1NAuUo7CEwu8ePbAainofSj",
  "key22": "3icgFrYtJoJYbjJm7UD1xi1qqRhgqxpqRRbLtUYyvzcrtq6MHiPZjJfvNagpysFqpt9L8anHmF7WyPnyBusG8BhF",
  "key23": "4rdYViUHjd8q1Kk8zh1nXSBbuUJo9t9Du2dMXxcbV9kyBKq62Luk4dvkZrDfbny1J3aa43gTtxzFS9J8PAS29FWp",
  "key24": "4ywAyRxJwFjhgbLiNFnnfJjZ3pnBDkreuPVS66XD16xoLde76DuJGJfC4ztQecdZixrBbsUmNyRDSRSMk49q2SHM",
  "key25": "2jpZ4CPBmTCzR19DMi2cd7SS5TLLB9C19wz2FLaGEefMyQrFVA8NBRX6Z2jwEXXFP6AKyywfS2qvJABJJgQNKzvR",
  "key26": "2Eg3YJ5HHdPA1Za6iFuPmeqDhQHj2akCjd4XnYdAHgCTwZ6h8ichE1UWv7R4neAqun8UqEkeyqkR64GSN3Hh3aQ9",
  "key27": "LN2VfxEkTV3nDHdiXqjuWniVnb6Fw4c654KS1t4hCchtDkL7sT9oxhqaBAze24zUhyeREpJ6PtZfDj89Fj7tqfZ",
  "key28": "2NQJxngXfZeD2JCcfP1xq9mnC5MTF8PNaULCsWpswmsFvpAtCaFPeBKy7hu7bD8ApzfYnBS7PpT5iwdWEPymWxWC",
  "key29": "3ngWJPSUXpXQqdBj8NFqtCUznfaquGgU69xvws84CxL1ByusYb8awTUgitFgZ6t35aQLFLpDBD1B84CTmJH1sXNk",
  "key30": "22javoMpfLYTwmFFtz125LKf7M8VnVAn2jA4PV8YP8jfMHh2woZ9XNqkwEp7FR1z9rnheiQRs2vEdsQQxod85Zv1",
  "key31": "5kTMcva5NUCvMTYaJU7hp5fUmLUK1gFJzGctYw3nA97pBurSk11gkxQM77Pa7cZERtuYfW5bXFKvjzGf5tajeqdv",
  "key32": "3RZBPi8VGiFFW1kCEVz6VjqWv3enQ75nJcW2yefxuTYdiWArkNeiM1bQs5EAmsJ25hp5ffpMm92HwFzDjJV2qnRs",
  "key33": "5boU547cbYn81zkuY3VfT6BKQwKV81QiW1KrvVYzxemhZXR9zEwDC8dwhRmpXdcnLwXhSxbQZomkG451soEsr5NM",
  "key34": "3N25L33Wy3BBfsKtjCX2WAgTbTFW43aR7itGwYa888jYQB1HEyHqP8RKTYowFzzj4n8oSTPCjoVEMynYA3iARAk9",
  "key35": "4mMSUBVjXT4CqRT7q7rfeWf2GwvmpNTdoj7rQA6SPaqU4LEyczy2upgRnHXFLSC2Bs8kRSGo1BVcPXGZUy3PRBfD",
  "key36": "5cnJ44yn6nkjtpACzofF8wmCPEYoyCK9towztb2Udb5cGhNpa4BxXoygpgJkKD5oZy8h5jpBtoodPdXRQEF9hyrS",
  "key37": "4Re5qyeC2SMDSUzn8kKB77oMUamLZnmfayMNrwQXi8PTNq34m7rnXFN32auhtcVtiUBerjyke8SbNYeD9z44qGH1",
  "key38": "2TxozpoTYMWVxP7TXP7pss7JXB4D8dTX4XydAzgVT742ykKxKiFzznfqgbDH1uPwg9yffuRW4ZtfoHXLkpG8UNH7",
  "key39": "256RmdMkbKE6kFybp6M8WvGJ7pd3NDCQfzYw9nLFpptW1BmcQrYoWSB14cw22qTWG4iNQKFH1S3nwE1PTxAswQ1D",
  "key40": "4yCw4QuBJ2NBUjmZ6QHSdHpxwieNeFFiTUg3paNxCvCJkoYxMkvsXAD5XcHtqQxhVajqaKBQ6W3XtSGi6KS1eaqt",
  "key41": "1pNgpTmnkjq7L118mE35QJxpJ3qkVo8eGFvu1VusLVNf2g9CRmtxGbzwnXKNRrNy1jfFkXWWDhLMgVpsqQvYQcj",
  "key42": "2hhz2qNdzkqMEaK7D4cBmqyAbPqLXokbbqV85iaqZ11R2VRk45MUnBc4ythbaxiAaP9mNT3ecghN97K3qV3vbvni",
  "key43": "3bAhYJzy7qMp6FHrbvAqT5xTGoiemWQd3hQSFFiL9QyQ22AYXsf2xAXkFSXveCD49HYedXUG8DooAcBYQXqsygTT",
  "key44": "3c58UCsar8KQc2ujmDeAeTgKK2sV4d2i3BLCNQuZSHAsNjBJ7hZAJoaJjNVAMtuTrt3DkMw7Bi1scvTJfkYcLLWa",
  "key45": "4w874VnhUdSDGV3c936BcYVe7Azk6fwGdtXoFsaDKYoYYdFoeY6mwkMK54MdibJGG7osJajpAp2FKEggtY8k6hSg"
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
