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
    "3B1rEiYhxxg4FWyJkEP3moSfKtzpa1JFLWABFu2anW9Fmo3GmpoJHfhRnwN5SyErQ5YYX1ThBt9niVZdC8zBWSto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53iGYzqUXegxGRipYaE64H2zBmqMTXACdoaoGuRGZJ9SG2fYEXiorgfdz12qDe3mkWKVuSFd7Hp2PTGzAt8xnN9p",
  "key1": "4GrTKJyqnUhXQRoEtovwpR75HoVnW84rDtYhLtsTmW2qnLaEHVJMKRfhcaZCDjRFyqtFvbESg4MYqtXyUeSiVgA1",
  "key2": "3nnadGCGJ6QUTCkp7fsRJZJmSSkE5hV27gcR9pA7N4yoSSbZpCRRx9KedZP7K5xaSC3mN4bLXCgVWcFtWSJ8Staz",
  "key3": "5r4RoLfFtsBzDyaw92VSMwtVEfYgPAjTe6mfYjLaNzK7wFmxHTntaUeBMByLhTnKKK4NkG53e34T5XpTaT4as3P2",
  "key4": "4AdtYPpw8yDF1MH8uPEDNt2tEJMJJu5eXUnrzMyNGoMUcomkFgyJJ69F2xxcSN76marNWZKNBqFBnU3hs7VKWanq",
  "key5": "3QCtLP2NcGFkJSd7Jmyw2nYdq5rDJbTrvwhq67jAMhpB2ZWRaxuDdnRwp3LsYaKP1G5xtSpYSWbeoxJpx7pNQgBS",
  "key6": "3uc2ksLBbCPuEL1oo42oBdvMzuuPEY2hXBQSrCEq3BEmh25kBHUYnhw38Z17P2bdByVJspntfgMeH8FF2G5aNS8o",
  "key7": "ShKWSoHYdBv5CrCo2Uowaz5bq6EbrMbKzjNax3KEBzT22Jo6XzVdQ4DSyFXUeceHY8suupugXDTKUPMAbe3WRT5",
  "key8": "5aSfqCN7C2cKRwkvYGGuMeDeiYTMetxPKaEFS47TYqWdedEZ1ojJC8xKrH4wxUSoqQL2HSpEUUYM5WHwwMHaQsgV",
  "key9": "5QZQxG5vGs1czPWYJdvrP2n4htQntydvNAJLUPtQ7fiP7PwMRFpzhgxgFoxwScSoH3wj9XSqsnYhb2idNxsXHzud",
  "key10": "4fkvyzcScHUY22RTdmBAZQaoWU72Rxz3Z9jJvxhpGC64SN9zHN7SiqGZQ9CMzwU37xSbRq3rat4BzzFR7rdvMyjz",
  "key11": "4c9bPYjK48vLXV5FMCR2GHVXW3wrso7khy9cSXKyw54w5y1Ho5LGDdp2gBxyAGhGBqotKQVV9dEwa3AWU5DtfPL9",
  "key12": "2gZSnYhvKfzbXwjQsTmu8DrSx4A3YvAxjCxzHUPqoWsd9oVS2vKNBk6A2FN4bSrxCkyxYoS9Se7nMFAzwzn4VDo2",
  "key13": "dtoYbUFseCFiZfsnzsyizbzBT2Ma9xUBF4zMtBP4X38S8vie8kAoPCi1jhr7hoWsJVt45Xf8mceWviqf5GpZwhx",
  "key14": "2CJUnY3ymRUDATpHuFYpvADhcfL5Lc2KHVpDHddhQnU6kqGUJSnDT41e9zjaEg1axqVru9th1hniiWg1a8frfv6L",
  "key15": "DdNs6pyDR547vXodxZ6y1CY5EJuEhh96gihAeBvniP5dTgRGmrscx4QmLCigP6x91UAVQJbvA5AXj7JaDYcu1zQ",
  "key16": "PhGxhpwy8L5wVWwTZYLjmsR46MuSzJTbSLdGkLLr1whqBtDwMPzo137son7E9AMSUPPm2aiPipANmx5um1HhXh6",
  "key17": "43zzjYWUXSnMFvnjVLxvpBWGviPenQKPsjwTfkGAatGJ8gt3cT4PrkhLnDeLMewvQkTUwso1w28kgZJRPJvGpRfm",
  "key18": "Y4ecPYftSkoPEH8Geg2JMkGR4pNTA768AUCgUt7i1EBL6m7y4rJmNe7HJZtBFTpJSXTTYU67qTLT9KTNCZDfW62",
  "key19": "PiYhfHW2D6KhegBEFxiDGoKofbyTjyzXhq8D1HJZFppTC9o9Pu2KL7GPm1zKLEFsjJGHvvZnFi21chgcFQ1ZQ5Q",
  "key20": "4Y2Z9CQwqRkdXhbeKNxj68bLNAKUnrM4KAfQ5etH1u4JpJxT6rsjRovtMuKUdAL3G1i9zbcYkWuNNQkSxLAtgCBb",
  "key21": "3bdoruy7LsxmcidzHRkkQRPVVP8F26QdwucbiUb7ufCYQacRVNVthM6pX8ftLQd1bCPVx93BYj2koRsybioL9w2j",
  "key22": "42pjynHNLrSmggeMgG6XHboN2o2mym7r8rBSuwHvid6UXeqqnFk7rJ6x9RXKubNZraZ7usG5WauQfewmpCdorBVt",
  "key23": "3ZwdorGoe1rd1Lh1uGYViitYj7GDCpfL6jipkBHfKZ1apz2btxSqNBvo5VgbQMqqJSQV6QjAfduHzWgtVVgC5B64",
  "key24": "3KHa1HWbjVWMiCZemfmJkqvsPJK5N7kaziCqZUzCikxCssBHevpwLDpDsHDt1iTr7p9oNj5jPrSVaDPCbqRWE3Km",
  "key25": "nFXf24NufaWkWgusc9BAETY31UNLWRFgw1QnGLq7CwcLjr9tA7YUsF51yfHsJpsVP7vzSbSAFmPBJVG3qwNXgny",
  "key26": "J2kow8AcNH6zpf9oQHhes2tnu1pEyNWzYCB6waEqDgk7roUbzgR2mDcuJuUhD7fU7PkV1Sq6y3ZkuRgJhsudXYK",
  "key27": "4YZFMtLdDmkyP5i7TG5tDTuZWhoTj4EqqFvSXNUHaBtFFVaUceGjfbW75Vw2qRyP3kZfah7UpWhLnZmG3ULFGXHH",
  "key28": "2UUQRu96odDVS8gXgJjiTpRmMYHx2NWsmTHrVMPg7JkA64ivjoLwuNjgrGvJBQTxdda4z2PgjajH7tWfaGPGZk8q",
  "key29": "4i86ufPY6QTkiLwubg4G79iSNZX13cTxEve9P6QCvB3hvQaDRpd1pVUnGA6xDhB2Rzat8zzaoDwviL2fR8zpsAnS",
  "key30": "3uEd5g4PYFXeoAJiQreyE9MxAfTM21KqmMBtiiepPkHfmD4CNnwAD2kcUiTBZGNC7z3ov4czq5th9DGi8q5yzAeg",
  "key31": "4YBCx1ZHnWAMMksH1vFmmRvcy3vdBwDkbuNsvDLcAoEczEcxcLK4cTSUGLgDfNuA34CQFxWfRmx9ZMzLqhSRmT6w",
  "key32": "3ipQey1kPwMNfj54tcnQdKJbSkFbx6Z9r6RuexF1oxXfSnDhHkAPnAxtzYuSWcUmvcWTBMGAmGUwuSjPmoCfAd7e",
  "key33": "4XWif4qwC4VX8NufwcsED9AbLYYFYfaMcmQhh3Axfp14cJHpWwMeTT95BxFKw6GH5RFQZdpS5jRPnV7iR1itXyN1",
  "key34": "5eo2QmZvTxDjurg8XzstyPjKYJRjExdTYCru15YaKRtbJJXZxvMjZ2inYP4BKgbjYqHXxYdjmiXC8tfAXSa6NDjX",
  "key35": "4vwb7M9tFBJc2VNs1LAx15yd6CVyxNkceur15b19FN3fXH66qJrTqyfVxr5Ed9NQZYx5t4bDQFKnySwfbLJ6nRqT",
  "key36": "3G5wW8nmXTQumQV6FptSRE4RMRSdfgzYALFJgXaHSqmz1EUSopQVHi84MH4FtAN3SnUSUmyZEoXvNdeoe8ubh81f"
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
