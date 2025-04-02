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
    "4XvWaWMxqCM3L6A4ydnTbcrbDAdQoHbh67vJcfgaLwBcsmTse89pTVXDQwU91UFb3boiPNkZb293ThXpiyrTqf32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qZmzjw9YFxCPwwb1fvXeDue1Pd8c6Ecg4fppLVbrrXKKA9Lt39mbJCxK5PJJcSLUNxk6UhDX2DggRiTPK7Max9V",
  "key1": "2fudygYkzG6S7jTZEB5aRhUBUGea1eGmQbHd4dhugXNzCqRJUUhGhhwDyyvLCZ6XE7W3oqEqAMJ8KwfoiuHhR5DV",
  "key2": "W5qR1D2CtGVoqaLvhsRyUBcqjydZEpsfojESwsshbwxfWLVDZQoYiUc8S71wjuaNWnPuKRGF47xQp7DRjivYkjJ",
  "key3": "3VMdpRh7wZnWrCR8VjyPo8dRYaHrCwxzToUQdHasxLALgYAAwzqjwtASQENnN7J3GdyTMfJXYup6BwehLMbzqsTG",
  "key4": "5841UgzTwchJEdq1pKYm5C3PMYpPjTkcdvjUFboGQh5hkuKWj8kw8w1Z9qW5cdXayPX5SWBAd8zeguCbgjZ3CFbm",
  "key5": "4Gi8NoWnbHdsdgx6BfpcEMp5DEBvrKEiMRhu4GyHcNMgH5QamABjWGrL4CBpsvjUeErga76rKB2ebrpASwKjuEc1",
  "key6": "59QdDTKkmziRD2dNVWeGsotzXYvsNzSbjvXrYErKNhbpgrb2CFPdwiG8z1ajwSiGe5R3mUm7qJhoMUSzJwdm7KRs",
  "key7": "3R1KH1EwxU5sodbBzgDTL7n83sQkPjpa4nEiKuxH8PcN6wNW291AvNjDpro79Jgpz27JkBoKwfwoV2mDS7FXkpoA",
  "key8": "5mUdXM2ByoYKuryCcPDjsZNdjtjzzfqNmV98KA2pySmUbWpMgwsTR8zXnFfJCpFxUxJWCLpYGtu8LQiXw5Snzr2J",
  "key9": "2FxwhmemzcM7NXNC4v78mKQEKS3aGwW8ujbPAZ48gxrv9riGwrZzM6VmW5xAEg71N9E4NwncHN8btfqeihrwCCwE",
  "key10": "5hh3fwMSc4uWeFSgBPfydJPYztHkFkW6M97pbDu4xuC6nZiEdkrCUwzufLo88nars6GbpgUvLqSQJ89XhSPyDBEA",
  "key11": "4nDAFR8honWjvHAaNTG4gHG9GXDdfKF6h69bEMR2ABAw8m6AVrixGNiMoTUmrBxKMKDTK8PAhcNx5kmfhspJ4Loo",
  "key12": "5o4ttV9atoSvDLDfDN9zuxzzSYYuEHYRe2qmna6xtj5aGxF46yhiAs8kdteM59TZ28zxdnvBhPt1guF8uusQHTRP",
  "key13": "2NA8YvxmfwzjevScxnT5F8mXTHTk1wYnUbEKGoLXNXdmkSNLvc5NR7xC292ChKfWK7ow1ZEHTd4YKRLxwtbqejrF",
  "key14": "4RVGz7TUb8a25s6RoHhrKdcvinnCL6XtFp9hpkhogKW3twuvii5u9EMtFTXxzTgHH4Ze9gLAyWvavsdvVeHb8SGs",
  "key15": "4yNXdmGhf5yHEnNrezwr3PjLBHLJju4rB2BzntqucsvqBe2VzRJjYCjCv3zZX6hs1fS3yMsvZtSpwCygeJ8nYMoN",
  "key16": "5oLGZu7Dh5hE3cwAhcvCVsE6m3Xkt1zeXLbpNT7MF1F7aQMhD9BhUVK1aec1HymGKydt3AkSMreEYH4YpgNkA6ZZ",
  "key17": "3ic4x9kzFdRwDR6sQbiB9WPntcjj7UPHLqpQ68cET2py4vVGMJRnfQ3jJqrkSbGRNmzNvCFGosJvEZ8H3hUP3La6",
  "key18": "4UXE2v43toFYokum3QF5DfN8ZGbzzcLJxCRmvUqXDhBhK2hUkkDEc4pwTS1dd55HMFUNT18mZMvWqbkJKp3Vs8dv",
  "key19": "2fzYjf94i15pMYv2T78RoGjFwxPn5DiWVgRXtqCdG9UeWj1DuCfxe89D2oDqbpTJxEYigYFGtrxo66RjexkmRTvo",
  "key20": "4L73ou3k5oB1PZ6h47bRdi1eDw5TnA8gHwUHP8b7un6R1DZRfASFkx99pivz7xLmrUsEWZe7aezcDvxbv6a2N8fw",
  "key21": "5w4vSgoEMF99CCvGw1h7NHvYFWZ1GTKv3wVmTUVaZxxmtWwuU4T6iLDhC4DqJ2o1zhty8t5oEyjfuu2YMq6aSN3p",
  "key22": "EzxkzTipCR1EuvwTLMhJDxBszQX7LKrr8jHcMFynXFAE9SEjaTaD1ikDC24zL77xFGNPkowthc5qyJ1UX8DfKSD",
  "key23": "2rW4sYbzxbUU5MR35UF7y81GBRPoVUaEfVjbBfghJVbrR2vwU8h8hURwCdceroniJCt4gReLxrQRyhmrpAXGF3Ef",
  "key24": "5e5eaMbxXmDAL55MmBz17dY4qWm9sz8WUjqB21kjCVYAmAGh6ZDhWXdvorGQeHLNAwRqPsUTBaxcmBkraVYqWDzr",
  "key25": "4BjbQpxS9SH44spuH4MaCqNkVtZuhjet9DkACL8YJGfLHPfMrc4Qy3NGniutSL82rbX4i3Y8TSWoVjy3eTvovYh9",
  "key26": "216XMiWmD5V2mp8cRpGytiWQuPbA3Ku8hcQoVFuNhqVXdccvP21RNEi5kiqJuv94v4pAPaq7WyPxZwh9mSxPPCpH",
  "key27": "4RNFC27BFkr3beAHsZgsxqzeDKTes9RVEwLyTjJo7FzVFKg7uaMfXKxA2bLWHXzdVwsZv5mfuY5i7kVoUW5FYRQB",
  "key28": "347u7TxwgwYHLZi4uftCMaz2Koh1NUyCnVvPSJcxdHqCdYAYCnqHhvy9zjoxBjvnPvKuALDVTcB8FTJ6CGezyyjS",
  "key29": "atukRJFbVQLuK3KN6Vsmk86PvgZnoy5vt3vrQksQzJ4FhjDwTDgzp6RyLeVhUJogy9Ywd5kWBdpAJ8KvucqsrsV",
  "key30": "4kL813wQqijize5cGBmfngaD87g8feEXJu8AvNokecoJuCZG6yFrxQKktLtapNVrgvVZYmxfZFH7BgWvFHpdXFLk",
  "key31": "2YbQZfUb1JVdGoUz4Z6vgkE4NvaeYmcvfdYhXkLBWMSr4bQU7qY31S3zgtpT75mLdRXirgEtTB1uU1bbp5L5txXV",
  "key32": "4FUnhvdjwmardugmPgfQdLkptzMxG1dniJyEXtPub8EAJjGJHaPa4LMSVxTwyTXhLruc1e6DFnDG1qjRMALeXQCE",
  "key33": "ZGvDyuQV7u54ztt3eB99Min6JqyG6PP4iHevgDqffGZzhEmkV8FMe6R2rZbgdkWoAkoBaxyJRwKSW3ddhpJCEgY",
  "key34": "53AyoBKj6BbojzTxGi9JTb4Ck9HqygGoP8iCdZYXdVM2Vdpf4vhz1d1z4rzW7JjZiYoaoWkXyCUA51AiRbootJJw",
  "key35": "5TBpQPAjDV2fMfyye6Groa6psVUVHqxFuA1HHDjFe9xzt5v9d5zzTkuZqDwrheRfqxz3XQfRRMkh6a1fRgH3WGY7",
  "key36": "2xTi5SXFWtAVurC4bGmt3KZW9AyTHrGyg8ySWpsTfEoBmnLh4iq6eFWJ4FgByGfiGJxyXvasP86ff6UtLDJSshcA",
  "key37": "2mrKyT9sraCaqexSSok8XvhspUYzMn4fk2tsXiwUC3FErUetDbmTb5KLRP4u3nrsrnBT72985x89tgYqW4Yxfgxx",
  "key38": "266EdiGjbW4Sqeova8NBX7pSGRQKgPASR38pzLED7gnQQeKhUbvrVtYaQZzAb4Ev4ZBnmutRWMt9yNwfeMHRpTJs",
  "key39": "2uDhKyepFXfGpQfWidc7bM4yVjpM6rDycys3V6u4su9Ydg7daH6P3xBc8e4fYd9mEoH8793DGUtsnbJiyNerDAw9",
  "key40": "DPGsvEBm7WSrJSBkVyAC6JZ3oWtUQs5UvDgDCmae9UkATqon5RGFv192hTf6HKiiK9LkU97ULbh67ZTsff86dyC",
  "key41": "2RxQjMyawLtH4JLqYYGdS8JoYR7awr7Tn5qZqP9tEdrRoz3tdUX2evSqd7RMQ483RoWA4tc2rK82z9x2i2qhyyg",
  "key42": "63ivxrWmv6YwNju6QxebAEU58GB5CGdmqZHh9c9Qruu9G8Fj5qpn1Gdju9yMFpxzUr7obB9hZ78ZsBz8ErM38Gtm",
  "key43": "44zD2sLSQVJ475aCDkgP4qvHiFjwwM9EopfQF8QBHRS32udsW7UHFp584apYMhjbf5GuawKw6D7cTJ9QJXAc3NMc",
  "key44": "4gRC8KWYU5QPS3jpHoGieemVEc1gmeVWPtGwQj3MUM8m1f6NeR7un1XPkLRbqA5gZ2vYfV16ZxJuWCTvVB83Cvav"
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
