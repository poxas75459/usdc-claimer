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
    "4a8tMPMfK27rHvopxqs1ufYVGuCjyxRaw6rLZHGLTiKkN26z2W9ZjyrCCMACX6b9Q2rD1tqcCUEXQswzH6VwWbXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3amUSjQeMA33r7ofw9DUA7vxDN3onNhpzeakQ2zLSueUwBskLKWwm4ojh4mAvHJVAiKYTzfuweMrQxgYDB6UrC7A",
  "key1": "3PYB9RxVid1QR8e1CnKtJbF7WZxq9Uzj65hdjfd2yg2Z3TZeBZ1xDnCKZWi1idHDPj3bUubWNhV13XxXNY3deyrj",
  "key2": "4C3K2w2tDaDqc5aDyW4H9vUNmdj9x6uL9ofFZEhfwPjXPhBQez4oMESjRVyRkho5yrbRd8yUVw9oDfqM8m2pgmb2",
  "key3": "4NJa69zzDHSc2WUY4QycmCV9qFwZZoNuEKZiYCvHcGjGrnPyAnSUbmggKdAPuE84gMt4XDCUo7K7rVX8j23gEcZX",
  "key4": "44aodeqc76mytERhVxZuRBfSzt4zJ3dK2ziGj8C5VFuUMoKv7fvX9xUAR9guaXAsPNsMxURMcR9gNfhDP8TPMd5b",
  "key5": "CBv6RBKDouuPGByD3ipRMikx23K22N9Ht3Ydb9yeigxRWX3VUtWC9BsSRGqFTcAppBi6JuFSnVdYDhvkrMBs2Ai",
  "key6": "2MGCL5tyZhQwk5SRNwSipiLfoPwnrvjVaUhnuRovqdTWutr4AKPWgsZ3WyH12Zft6YDXQXyYLEvNR7yiaycWRKzx",
  "key7": "TwgbLDG9oFfTDnSRs8B44j14hFdjfpiRtQn7NSDhuonu7pVtURNrtV8qEAKEZv23sWuxvJwuULyxeJ7frbwqRLK",
  "key8": "592RgS3zQ4oCqeF5UHHha6to439eUndt6yJP91To5mh4xzThoN8q7QKnXqpi3n7Y1sWwMMZFJD4oTrSFDYTG8fGy",
  "key9": "2FyHhH6NPifF1sTPZH2dnd861qXEDad3K1sHmRR1mENLkA1rH2s9k42DRP9hQDjBV24FWZSFGz6X3wgPFkw4Lcp4",
  "key10": "3uBcCvZfeC5x3EJA2MQj2NWXgkDVZjWMF8ErNvGqGDD3Mcv7oCHnpy6BGKUk5dqJ885CGP1dmqj4xapkfDTN3h78",
  "key11": "26ycA5dz6L39ZHuf8nN5oL2qnrCcab5YWkJSKW9awiH4Bd8ATr4RanaJtSurdfWDhk6ppj9PRTcFxMUGgHSzi52z",
  "key12": "36kjMDBd1XTtWFddQApCpAUJLdi5CKKVofp3RxjmqyPRKLeadfMm7gbAoNAscKLZzrJ4bsC9VCe2Fq4ZVXiRn2pF",
  "key13": "2HgQrm9YzxfAjdHRWjCzKLG3mcyQxv2geUenMESCtjViCRByxNwLAq2j98Eay4DZfBWeTahvyGCihRnqBQgSy8NT",
  "key14": "5Jzg3Rd1aumv7g2tmurs5V11sDxg3UhxqGBhC95JWKzzy8XTekLKQWXpWUu8z9YbcLoAG5VYmpcC5NoA8uBhpLnk",
  "key15": "4RNX2bJYChExEnqt5cMrTPtcdoPAzdMFq3phZmaungQ7L7xf9rAUekVVquSzuBoDXRKaVtSQgtYR613MRoHtZHnX",
  "key16": "sA2ogCmQKEtpUxsgyiMk7LK91v4rmmX3kzKY7VVsMj5PNvK1yU1wfped8tBZGq2YHHPEFvQdkKqoKsi78hdE3Az",
  "key17": "61b5uiRXBCg36Q4P8zTN9U3TZHXp39bL5xUjqMFFoVTCw27EzfgYyDmULsPMVBVzqcFZNcnGtDB5PBHTpExTMwRT",
  "key18": "4Lz64TTnFUn6wfRwzXgtqcbH4zuo94Mq1wwXoLzt9BKX6TYuWpiaMvFAuuCLJu8Jbf7FYJCPz6Tw6MXraNZ2p3Qq",
  "key19": "c29dpjNw3ZmxnWn7FAwEf9RQYdhAK9z738iYSJyXZSQQowTRW81Hz8KyjPrs7Ng5NZkZzudawLVb4DAM4f7dDZ5",
  "key20": "3mMzdCKB1aRgcvVjuia5HRPsTpyUE1RzZNVfBD25LoDMjm4qoeitbz1dBk1z6m57Wzmwo81Y2b18zgj22TY7FSBE",
  "key21": "4MKcsrexyMDhGTPjARs314CfJFbKPefZJ1jdVk4xxQV9M24nQgxTSPX5mWE94zUNWQjy3QtXNdY8ZyChmu3Yu8qG",
  "key22": "5aiRVXJep9uehwbHWRAHPZNHvtdt4gFPi75J2jrFJY12WNR21pmKHP1JT7FZF5TkVFQQum9Tm8pmCaypLLxkr1oy",
  "key23": "3JqiJ3y9X1qtz4ou3oJNq1cCpETrxkMGVbnwUjwrsMm3zdB39gF4D9eYcicRffLZFY9NzbBHdxis7BXi4WVfwCtv",
  "key24": "54EJaQzG6Ev6gZQQoWbkkBbGxfXgxJrM6ZUdgGvo43XmaC5BvwsVJGNmmQXcRNUrNfbnHaAqd37GcEkDFgbmTEFy",
  "key25": "D2FqAZCTz9YGMswYne17fQKrxNZNgWKNy8NNaC3L4S4tU3MPXYPEXTPUUKcoSq5YHFTL1Cf4HnXNnvzTHhAhjMy",
  "key26": "3Qa9f7Uose2oUuEh6QAD4AhGLc8XYHk5vueEKYmaErqnyHScFakugYoV8bmZtej3KHE4b9VcrWsepLvHhzgdSdoZ",
  "key27": "53wvqRGoajHXzY5WNxkYCUQXPfBvGtidcUJq8Gn2AKGaeDmEZNMAYFi57DyocsvD8QWXSNHgZqshtAxkVKGpdTM8",
  "key28": "5syZ51omWBEkfCcAqG2tNLfeKht8KjFGxFjPff12YRqpxAV57k7qB6g2rZTdnjDdhfAAD8Q9A4xEzQhe4kNUUznk",
  "key29": "gDFujow3dWHQy85pG9vH6V3SiFX1yzkXbJmafW1bbQrq67yWykYBzZQ31wBQBGFR6dEd5YrpebVk8qFJmUMaZXJ",
  "key30": "2iuyhhc9zttdjgkM5b8CaKrVPFJqLkVJyVNCP3biigSxhWyNveohNN7PmMTUVSeb8x9YdxhDce2r7eLLA7ekGtpo",
  "key31": "44FBDwKgcqkuj8ikLcaC5r5tPve4h2pmKn2v6kwJY2qigKWrqs6BryMEEsENuyGFCjozEnzNpSfHSyKcXD1AkvBH",
  "key32": "PNTWYndpSmMHwYX3JxkPuStf2GspFmcszcgqDHznveba5aeWaGZJturZqL4WeUdK1Sbhm7wS8AhQ887h3AEU5gL",
  "key33": "5y6D8biAi3otRCDwb4muKwL91AVPriTGLikeFTqJTaHrfL7bJ93VATuFaQchJeumfuyhea2pydJrqPYDVwGf3Zr8",
  "key34": "5RB2VtQXNsXzbadWJe3FaNyNx2TqFrjHnZHRq7y6h26awSKTAP2XkSmANYjQ52mu17JtWNeWQ2bHj9E7hL5cjfqz",
  "key35": "3VqmGy8vWPPHrDf8Mf6mFvpQHcQ9CXJ6ACKKWvMErLiARkVPdDzmPpfU34ks7fdYZdsP5FuaiV5eNzZCdJ8u9qYd"
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
