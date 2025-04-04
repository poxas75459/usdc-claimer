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
    "5yEqZMeEiHUci6zLsJ8Gvrkb2QBeN1ZQdoEgCjMowxDtZLLcXZoGJqFvuCbyvM26YwkfmbEQqLQQSKjAbgGixxQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47GTTXejAxCGbdX4ncsH4zbr3czyES2A6mCE7weXRBNJfVjE3rTj1344x4YstcmDVoxjmdkFM4SinWqWunuKVA8P",
  "key1": "51zdYWwBdkYK51xtLupiv841yKne73T3h6acbvrgMrVSfG8QWqmstxKW9AHP8Po1Rw3zdeam7QQpVeZc1x6kAnfB",
  "key2": "3MqqZQW2oJ8KSNMyQmdV1ciDjveAfB48cxrfMqAHnjTs8LjUtkD5hi8tMJurPiskgycKSw36Psz8RYdNQuKnZfqk",
  "key3": "5ZpQoUpBMFB7KCgWwGHeprGyaaL4XxDnYrL5GkC4Ts23LMdFJqDjKWsMBe5tBq9xeYSDa9EJyPMBvCRmiGW5WPXb",
  "key4": "52ceb7xWYmqqYQ96NXozEamWcdBCajMPf1rzaHw2THBniCCTTqxmPUtUehMZTR9wYgyi8JPZzzEGSQAaXQmhCiP9",
  "key5": "49VBFZCYBa8wQoFiAQ74SMvhxy3TXArQovWhmtPZrAaxp7vLeoSf9aea9UcFVqeuXnNZrW7jMiL4eaKv6CByTbZY",
  "key6": "3oFtkoxeuR5P4F6jJxEWwExSSJAFsuMjEKMVyqj3ZVhRRKp1aqTR7rBYgxTsWPhStpuDgDBsa6XJHqAJdF96p6Es",
  "key7": "4vaXGwp8kNDVHGhVNjcKvQXMMzyixZqX94YZ4VH17vNzejdAw8esnW9GRRDpLewU7nRYdfE4rz58RZjUdAb63edo",
  "key8": "bepXsGqZ6cCJKGPihFSycTm41sJb9tZyDUoM5wd3n43vMVcbuSF41zvh5BB9AQ5hM8DDC8uSKFd9SPsF8zcTTkx",
  "key9": "4LJLSZFMR5fauhiCoev7QRBhrGzBwmJ7hbJ8HhwPU7zwXwWjuTcviU4eo6AgVoScR9JR7tj8ehFwXmT5rVLtAW7w",
  "key10": "2UCcs9jHd59S8uGHPZ4gT6xYgxbQErkWRwyZikP2Yb5FXoqSaG9bH7jNSuqouz8CPSR2UKTPwPSfsi5G2tPAgW7a",
  "key11": "48Z4c8bBSYazAh9FE3MnnBcB7pB9r63RreY2ca89tvo5c4g2evWBHhoqC5rT1Cn4cD3jqAxfACAmCDG77NLW5xAb",
  "key12": "4fjGPT9LQx8GB8xWPveYtYvBWW9h7vDyzaNFyM8haZiKny935YRusCRQ2BLUVHZ65oAtWWxz4uN7mvfZxup4uZQG",
  "key13": "2cWtp3bWAKMhpW9V5HsUboi6RydxseTu6u4CqmYdzajEFpi3BAogz3yVdaLcKctBDySb1EJFctUx1jd7fSUPn7Hj",
  "key14": "5jfsRUgQKnPhU4KgCkLVmFnkjTzb2oE1RoiTMPb3tg2Kd1ahSAjwuGQnGJset8PRqcGsSZWS8P2TW8FUXtUiHQqT",
  "key15": "5vAToRhTtp5BUub99EMyxf5XWsZj3eqB9ynqWQy5kxdtGBNq46ZM4kCKC3BXTaoNQZjiz9gxmWimc8FAxtU2CXrx",
  "key16": "5wb7pd1NJjT3rJFW3QcZd9Eh6HBsPL2jV11RokifDwtRZNpV3cPrmP42fxKGtgZbRRL32vA3wjyVHkwMHWp3NFEf",
  "key17": "2dNa9Vn3D7hY4qpgyYQjvuXpZEEE6svdwCcfDg2gUD1pujuuY6CrpjgJPNUb9UThy74VAEdwgzX3K54Y7xQJ2Pcm",
  "key18": "mGzwhFpd2bVQfpbmLfuBUt8GG2huSiht83RGzAe9uBam4i1h5dqpffXXW6cigsDxoDwZ3zMoXNsVBfyereM7WMr",
  "key19": "2r8q1LXCqwwRwEEFqzqzneufBEw4VbBjuwMozUBCYQLNpYedDovwvCggJTZUPu7ykYrwpMZTM9oGXSs9yNKF8GYw",
  "key20": "hvwFRbext3FwhToRKSMqY23eKzan7fZL46DvPT5buCbfvowtc7s8p2zjBpd5KWzQgBRvAK154pPqNvLQDE2xxUp",
  "key21": "3YWTXTQs8L9dbvrtPUV9b4SyDQ7pet2bpvURAj8iUHD5aFH1SJPsaBDhvnRUPLUi56UsertgcRpY43W8S2eyFzNQ",
  "key22": "4Dk48zagupPnoWB7J3SZEzZwxJcrQhUrTcDTtXGKrHSP5V17PXuDjBH2mEgutgMWj6B1q2VmkNJWu4UWD5a9i4cB",
  "key23": "3knfJa1ZvXjKipMLS98gz7wUm4TSh2byMsguBXcBbN6kmUNphK1Yvr2PxDT2XuwCjCV3Sf2hmDcq3j41r28HFm3w",
  "key24": "3jBscMGaZ4H9LTpcWSeVPwuw1x4bim6X2haU8DYHn9UWUR7QKGtnXekYRTWoMEJWHZfJDUsqfCstG8DYLeujvdVa",
  "key25": "4YybPQ3B3vH1B95Vf4JR5KUaWVGsRbF8Lg4PM3Zpw54Gf1Niz7upsYDoLfJhkCw7FsXaZtQ3MAgxksdtQaYUcKSw",
  "key26": "3HcWB1nzyQSgeVTfThqtfRYKGGPhj41a6rXfSExjPJa8eKRoF2VXLgBLpHhcfCXRMRdSTsEJiM4acViP5sEAtSjM",
  "key27": "5RDyJzakZur2GbCf2bDE9hNq2fK175MudtJ3582weJqtPqGit9VBhzTtv85h3iBhhWve9g1Cv7U79yP3W6A6LGsY",
  "key28": "4QDCsCD2CupF37CVKGKr4nvK6kSYzqwtXkMXKjELsq72iU1An3ZtKac2CnKtnXMuHYMQaULCVp7F6dRLjWxYoGb7",
  "key29": "BvnVHZNM7AQMrY7U1bJjkpC8fnRGSxicWVQreYaE1oyi2mnpiuuJPsy4Q5QV1mawRDe67N9xs3jyMm52Yymfz1L",
  "key30": "D51KauczF7sHug55x51DFnqWugyZrrUawLdu6R79pFZ9C5jm8rLHyDsow48chf9G6MWdyR6HPzxC2JhJ9kRU7r5",
  "key31": "5gNessXTWHn4oDytrVeLthdYCyh5egmCMwWvz2s4BmRc9Hj4PL8uGCzmKxT6VxYZDfFvDgGbjfoRojUndhJs2Rdn",
  "key32": "3ZnhNaXyHyGotbyVP6sY6iqN2Asnp3Ydxm9abyvXXMshYmRYMojmDtbNGf2sKpYPni86YgpjbsGm3q6QQ3absPDq",
  "key33": "4xfXAdy19vS1kJte3rEsYBCeXMnQJJmXtp6PhJSjP6dPyzLBj7H95oWQGDL46gmjwSwAxPvTeKd5mWHgVTp3rWEd",
  "key34": "46Bzm95ckJ4tPRoaF61s41XxBRbKTY9n11VQwFRSwr7f6yGQoV9PZBqiStdxRvuzAuC7FvXMnnWk5qTsEbjf8mDq",
  "key35": "3JoGH9sVXGew9tdznMaUpWipxT9rSCLzBnwdnRRG88ZAyRCqAn69vwwSFDhN8cUY5E9hTWQFfD1RBAHqnTAefBR8",
  "key36": "67pdgqBGHMagy2P4Se4y38F28eCusn2BvmX2nHGK8shr83hNmWk4ufBzWWe6Qg9Bz2aLWBHdtUyWxVRoyUUbdMHi",
  "key37": "52EH7zvhnznwN8qupXKwEV3a9SgDBtCkaTHKFdEe2vYdUbtNFhN7H3khCwdHmoaCzeLLPoGEMmzBK7hkH3hMxByQ",
  "key38": "4Qa91CZwRFVpSMWTwfgTqrdUzSj2yg6eZwjsnZ71bCB4dxduy5EnSics5aamHr5r6yGvv9CYWTxjRwQX5QwAu29e",
  "key39": "fHMAXpEbRjSaSuPrt4e66kYxzN2sr97MssXBumWb6dYJxrVrNZgnRCrxHkaw9S3sNHsbLcT6KVZEmWs92LXNjtm",
  "key40": "4QgC4zQiU16iLoMXNpLG5x26fJivEwRjaKDTuUS9Vv2C3j3ArWbW6NAEq8XanLTrMoZ99S6e86ayLTbZiRXJVzRE"
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
