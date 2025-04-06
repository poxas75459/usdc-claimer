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
    "4zr769iWxX3tbBPumUubRdwkPEZd5zzAtTUrMNtdVcMcXU5J3ZQrof3BYJxLAv7eQFMbNQbMg47BA9yDovxqfQgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QNg63RaMFLdQH1qWTo94Yxdapw9kDdnUWzTqe6ajVDLLEjF5s9ouJA9kA1SHMhMxAo5ovsheNBbZWzgPEPtzAUx",
  "key1": "4TAU5dUKh8yQJZSqX2VnBbFjAwgWddPVKXh46jHWhqLQxthbTCaFXvmnHETSbW3FcKWnjaSERZ2YNhaVN3kGM9pv",
  "key2": "2Kc95vhDfYaSfc8JFbDEr2gN3SChvyxCiyWesmpb3LT7u2xEMKo4W6Ta9eyANKJjdu8dairis9ZBhtdR2NhgkMgD",
  "key3": "8AyD4xNd4LF2dAK7G4YZ9wGZ1SnaDVU1oAsQpzZVSfR9VgxeCLwNJEMadGSP3HFr9nLM9tadjEWAQBRboUK59AK",
  "key4": "4S9UERSEAirRxcyHUc2D7agZC1xGo1LSFHe4N5fs1cm5wxQW4xsCGcEjka4cSUEnNtesGqmHanUXRiz1HrXV3Dmt",
  "key5": "5RHA2StX9uqEjgj5hY5pj8D2u3Pt8i8Mn3fn9RAiKQn6jdumq2ccwDsCfDF7PurTQpeBMEdVPLxjLV5M6RN4MpJ8",
  "key6": "VY83QiQwX9ARqrft4fwyzz2HKYKoZtLwuUBFex7uVi7yubxboQ7NLNFXzkXGyBBKFiHpaFVL5oFDCcSHQrFqCTf",
  "key7": "62toLKHdSYpR7yrN9Qg2WAvVVgtv3qfavs2KPy9nMmj41d4mtG8tikpTvwoQ5bNeyiWtdtxZWocN7r3L2BGRqkC4",
  "key8": "5gkvk5V6XAtp37wt3tAraYXknEWdCNvGn9oFr2NzpoDzVGXbSD5HJJzRB8vK6KSUUh6cHNZnRMvncz1kEbeNWsU7",
  "key9": "4cv2kDsXfEV1ZZJsJpWnN9Y96fsLXwjmoaTBzB8S4eTNgvQ5baViGRKnR7WCLacexhbh8ZZkU7t3HpnKSexUrLcs",
  "key10": "2rXwAKNot7YPsWpuFiAzB7J1rmB6fqKJG8UJcTAPg81rU1AZpLvrwgorMLbRnDfYDr4ZtSmzg51P7DtXSGynqU5M",
  "key11": "3xUMDQmgDPLubKA6CNDrHmodnYCnMWrHmpueji7rHiD2GLFj3y6ULX7uaU1ZrJG6MPBF6gBqpkfJhwgNkZC14Mso",
  "key12": "268sYiZhTmRSebmk3qRzpsiTJxEkxH9mQZmuJwYNz132Zk2ZEiU4S5AYtPumn99mjcQ7ayeCHJ8q7SUsefXk4Nfm",
  "key13": "3jXk3cZJqUDWyHLjRdPhzcBwynXRjExJzrHaJXvQywkfDLgq9v8dovSvvDgtMsqGfNU9HAbwFQ9c5D2Mjw5HFd2i",
  "key14": "4tR4mVnX7MzkDgDRRXGsgeedqS4bTeQML7AeLL6Fc7PeCktkSyC5BYTowa3DcnLs2RRei6y2vwriPwhtesnDNjvv",
  "key15": "5DSLWtyihP7c1DbByTi6P7oL8qbukmuHvJzCEkES5i1CrTqJb3tfuPBFKCMEqKm2tiP5nxjS8M3QztgE1E2EToJx",
  "key16": "3xouaoq8mN1UL6HudPLn81Q1gy6PyehnXmPFtWbGUnoh5wCyNTy115FwUtWBFWonevJYWdcGRwXu9cbXUXFoa6BV",
  "key17": "3YWqp8kMiGRP2ekQ453FYZnu5Auhx83xNd4LVb3S76CJuCx8DEm9L9tNBrrGSF9MHfajiKRnSqPGaABzKbedsGY5",
  "key18": "4aCAE9apZxYR9HuAKQymnHezbR6GwkQBuwj4GDoDYkw13WNipvHD4ReTJYb677r7G252KGKj17TMFR1sbMiVuD6r",
  "key19": "5df1cHScjXcKbJfw6Au2nk6F8ZUSNugPa5A8WKZyXBFczgpKco4AJXq8GZJVRgg9wmFXQDbDQj3MwmKhttEjqno4",
  "key20": "ng6yKUZPVMkP69dgyi2vc7Vo5GiZA1Er3Cy6pCSa2hycRQtmuLbm5UH8YHQDou28881GwD4UzCMA3WPwgZawqgQ",
  "key21": "3beWJKhtMWSwCBPXnneEEJvkVXPEoZhb9UiEgCXfJdzX4gZGXRwLiXF8n8h1rQGd46jLmyRqpH6akPHY6SHdMicb",
  "key22": "3xYQQivk13QdaXgX2F2AHGLPyAATU5724Vg3wScPhnRz74vcZxwvv2PBppRC6hifp75A9snk3acs7QtDbCLTz2fm",
  "key23": "36uaaQvfHXfi2PiCrHffX9mYb2XsAuLcLQrZrAjdgReFJngtEnqt6obJn7hSV4cpcHBjwnzBZW6JMunMkSMFe4yM",
  "key24": "3TfnsfyNxsyxk2sir7ZdykM2EtKhwf4tXRK2QJcaqxt3eeHX1VPy7SjqwZpUD5EBkSUJx79FK9pUPZzZcDsHy2NK",
  "key25": "5iPxZ6aDEXp8BQfHtUaSM5PdewhG5BBCHvtSiKe2Ny8TU5rZvRQ6bKRiUqPdNjZiugxuJmyuSBBG9gekgjedZH6f",
  "key26": "3tJiXAM6Ct1m8kXVZomWhZ1Pd25hpRkqhbHm7SyXSJpetmLGTfwt5htbeHmKCp2LjWmzaxq9Fi2M4k5nJWAUs9hy",
  "key27": "2ahjwF7K5BP2UEiDfqhjF7REsDJD8LWdrh8pCpbKXE6ANisTdKDaPHNBpn6sVddERde6hVq2ruadhQ7f2UWymGuG",
  "key28": "5CE72UTaM4cgmvGptxb68BhGHPRC7o6NLEBABaAwz4rFoWS47pDVCPrrxBbEXdjQSuWD6RdFjAoZFzKfLMhkEm6L",
  "key29": "3gbSJDLNB7vKzHu9KktyFysqVGnjnXSEVW48tX2LwuSmHWRZ9XCuU98h6emWofwJw91jHYvbxHk4fviEmUWWqxaA",
  "key30": "3h7BZrR3bmfN1yNXxtEwiXfU1zo1sLfGVhUFqsSmiMDSyCsGtMgP6SgVb5e4R4GMnBnk3ampC7vCMwU7sWPfWgNR",
  "key31": "5h9Uj69GpofTzvFTEew3xkGyUU1NnpeEJw7YELZ4rdXHneE3qGDmJnowWR22fZCw7eZ9ZZ1WmUQxZczLRFXmWuX",
  "key32": "3HD3gPuXePJynueh4KfKrVASz6w1nuJd1S99GDjXGFoqXArLv9b2T79f1yEmCtFSF7vCzErCbnJUM3y69ATVxkru",
  "key33": "4Cy1LvFv7NRSFggcoP6xy7nV2EMY6c8eSTFLTCc7n9Ns755nvHd3ewQU8iXN9vF7DqQFtYixW7TbcpmiZJ2BjsiD",
  "key34": "4mq1H6iQfBtAFGeSU535e6HKDkTQ2U5ni3EdmLPREQ5Ba3xugJJGrHkMLrFrVXs3ZbrTduYjdGnEML4Sw8wE2S3y",
  "key35": "qeFCZkiaX1hhVmQ23jLb98oQeh2uRej7HjR1xZd8SpW8BkKeRWvBKDia8xrHZbdNGQp8pAGeWGPXe5t5oFxuDix",
  "key36": "2cdacFJY8xjCtRLkMbGNVzDYigvQoneCFDF4Mhx8eb59q9mW26fs4YcHVKy7dzQhfF291ftZKwJhfU8gZk9FXL37",
  "key37": "4fDvMqrucfz3Q3Nhsi3eX6WNJhb2tu9QXMzap96eCvxWbopEcz6wAH9zhRYvRTheFSQ6yDQUD7rJkqcBpLhY2w8x",
  "key38": "4ETU6ewxqJuZowfrHLn8qjDicb2qJaSvdkZYujqv2PDQPiQmFedVrBmdVZFCrVXTJR1WacNGjDwN4Z74oq7BwBaj",
  "key39": "2CBGhk9dv7uCArXDacT5BbWj6rSp6wJJVb2c9phCiVRVzhrxGoS9SjRc9XoWEZeXio5wg8yjutsa36n6vaCdT9GT",
  "key40": "28huV5GcZuUZezae6RFykqLoWBQVDNSLVVRL4mU3sVbxS5uzXVBXUwkAGBRgtq4yncK2MT6jx766PYZQtcHDnwJu"
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
