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
    "2PoZJYgwcZoisCK7PthPV44hr46kz8gqPDv2suwQzvjgCDvxhXtGqfMDT7Bt6Kju8hLrSP7RpQntJtbCbkpu9miZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Li46GJhvLq4ZUvpZL1EBSLt95bDh2mAhEaeQXnr6fvXRnt3GVVsem4EWKG6keUwr8qM9YXp5f43NKdEVEfavWJE",
  "key1": "S6WYeGtxVBJianLnjcwVQoV6DaJMAB4yPQjoRk4MhTohLtPsUKuAtNBBGVVbrMP3a3mgAphYrEU4idRQ5WVCWPY",
  "key2": "4jKCh9V7uKyTjEVJ9d2QDuuiFLBAMvFApMkaUXskh6bg3up9UM1Y5wBU94TuhiwrjQZzBq8Ft6poptAbx4F4vhig",
  "key3": "zwRjLb7Crt2pEFW9Sh4xGbGaRQ1VJ7J356wKMws3srNE1dKDfiNVqDWv4KbNaMA9Xp7wTpKJY9tvnDXyqivRFvd",
  "key4": "2WKK5fSv9gF9KDowfWJ7pwnzWeV2EedBDjR9ftBi3uLjXs9VfWnZJEriBQkcKX8fZ5qQSTcteFhTf4heJ8mAMnnQ",
  "key5": "38t5D3ZKAZ8d1Adei3A27oCWgfZiRDML2ynJVpZeUPuQeXUGUco5VQ1GjQJx1j4yCTFeJVcQh8AbvZLb4kBmhZm7",
  "key6": "4y1x2B7jQGus5mQGWC4LbwC2EV5owDtgmefPJeKmhJrtp8CiDWKhYcPEdzbwdSneN4YEMLvkXtdx6Awt1N63DVZX",
  "key7": "2SuYMgQkD8zBXPzHdnbgbRihf5yDn1u1jtoGWk1uB1ySXfyZjiCKZYWu432JkXJozrsdZn48pXqyhu36LbT9nRop",
  "key8": "2BqpUuueV3exPgG9Zr1ifEyw38EHy8vNz9foHSXDu6xm1ct6NvxdKH1vWRxSVnVawDByzCRSrXp8yqf6donjmZQ9",
  "key9": "sQDBEChy8eYX9SE9Dqp4Cy7gYSH8ye84UDzDbtcnQkttuwQusGfxVMyRPMfPwKjccaPx8HREAmD646aTy5aRpGQ",
  "key10": "4BSrVHoCFJNJAuF7ZafD6tVKWoZHW8rSKeFtHUKV9UmJqQx1rwewqsv1Tv3GnzfYraN6TZPGAYaNgdb9nHWqvY8B",
  "key11": "XUXTyNVdGbjihaDsgJrx7FrGm2Fkb8AwXKVqamDX7sQPRcdpmqcXNsoK11xy7zu7RRm4fdXg8TWwBcSUCLrnzsj",
  "key12": "57mJi7AQhAFfgcbkE9vuhx8BWN9s2Gjh8fdGL51HnVpkjR6iYGU7SdpeJReJ63jkNizEMeS1BwKwnkkSoxcbMxhR",
  "key13": "3hPtLmzPhdsnSr3gdWyX4GdmP3m4NM4WN8sjY6XikmbF8EM1t1rKDjBvHST5SyqZigLZaP2VAq4itobQKxwKDSna",
  "key14": "heKYSY42y8KVN7K6Q4fk16H3UP1QAH41qPSQ3jbYLcYaRewBRzw3egxNyaYBy5Duu66wF3RFm1Pfdf2WdAx1eXe",
  "key15": "2cgETKSfM98PuwK3fqKxaDrMc6hXWjgwLuoMFgnHmy8pNwaWbwcmgvUgyXj7MQDLq4bJyAPtHtGTyt2kFbJ1DCxM",
  "key16": "3vYUcNS3EbHX7pE2VqE4ZJFVH5XTdHnn6KTaLNRHWtXYkDka1Yrn8ZJtAvpraHxp5TeHrFxJFxLsLXTiBzcXdCac",
  "key17": "B6dvRnVnjGDkEm8ysEb1y47VsUwyLj8y46Pu7UXzbyrrejttnAXATKPfzMx1UNsVJki7E1PWUCsCmqxoqZBzYaR",
  "key18": "5q6cgajAeZz8xkGC5CakQeqB6W9UZ7p9NQdLMpNf5XySvpAUtq621Nvrs5sJwr6UBfccf6dqdszvBEkQxwXBEsEh",
  "key19": "5zA6YVcpxeh2vkQQ6imxcWFXK93mRPjqkNipUh1W8uU24i3eKSLPqG5AZN6VCFZ3vpQhnc79E1axsaDiZyW33GMD",
  "key20": "4yeYtByvM3GcSbY2qeA4T8UbH5eFEvY2HfGDH2pUyTyHjxg9xQ3Sk11sMWyCLLpn9tEYUU2iiQsiA4PEaCdCiVBT",
  "key21": "3itgT4m9WHPYmKbhhyv1c8jZazXjsqzcv4Cz7iLFjK2xNw7R7RPoQeiJp25xhSWTAdrCD6wB3Yx43XrmiTEide4",
  "key22": "38fbBQVGnSpFDsBMTVGqaNjdaEHgdyXc1wFgbArTnsdEyS9CHUhS4dtiFt5STkjE42Qyf2smj1yMzzcs4nodYdi2",
  "key23": "3LEVFxyfA32mj2HtjAzVMpsCfiz4AsNPEF94SG3UMUJnwJYwBsUt6s4KXosrMjPKSHDbgUtvViSrcYpxRTyzS443",
  "key24": "3GbdCj4nQa1GxS2SbFVCb9Bq3vSq7ZpEhH9VDFdnDeN2p426mJQBucyNek8W9fwGHx582sjGGVbQM5L6zs44FkH3",
  "key25": "3FXo7RSjuXep89UsatG11u2nrHsUHuL4zgbH88hVPUxT1RfHeifqsUyigpaik5NaEu5DNZu9rMNayZhKBC1u7AaA",
  "key26": "2hxggUQg8KJsjWi5FCDnbHTNMyEXAUr6csExBDS8b3WakPvwis6TBqxiMrYGeAKLFPGU427MYnmdiQgF1xm5uX4M",
  "key27": "9gkpWsMDtaMBvcXAgscGjuvXbSMV8i8UaQY6rggtYNjNwVY6p2y5UaSXRv5rTLqXm1PoaqzriQqCRUtdnK2Bc8Y",
  "key28": "5hjKkwven1jCEkKGmkTYp5uiV22AnqZJNYQzR99J8Uc1PQkyd7hASSj5BEVQ9sVw3pv2bqAEkUR7MgJbVjAUPvC7",
  "key29": "59YyAvrtVUJP27PzzY7i5ie9k9hkKzsnNS5HiyWCiRmLWtXcKDoamuw33YLZDqN9i5EprMAb4gbnMUz7oAhQyEKt",
  "key30": "3Xkw7SWRyv8uYjpDGF8XCh69NZejZJcwJLUUbFoXjBuNWVDjGZmrMrSPamkWQE6R292ZeWBUHZFaGPLs5J6P55RJ",
  "key31": "24drKckEH6yy5CSReJsdRL4yieb4QJzbctWzd845Jo5PgvispbH6wGezrYfj454VNK5fF64w4bqU9z4wNmpVmXVX",
  "key32": "4Cmp6RSxAqMp3gLjJBdSz32g4p8Xn4r1dFVGCWBc6wThSPnGL4o5hVwgGcDMtR3fcXnitnhWiDSWe7rdhgFNKFac",
  "key33": "WRaL4hurgk6hQdjiaec3RvyTX4BBwqbK69pmwZgNp5xJWnC28g9c2z3Gt7Jt1S1bbznak8Ks8tS9z5Hp9wAS97o",
  "key34": "2bahVAYy9ExrojHVb6oZ1Bfb1MMJSDePVCRNxggAyfXK3H6fw4Kq8NyQYecG3GH8m9k9e4KQLVSzRAmzwcbYvPBM"
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
